/**
 * JSÖyrən - İmtahan Test Mühiti Simulyatoru (Mock Environment)
 * app.js daxilindəki icra mühitinin dəqiq nüsxəsi
 */

class MockEvent {
    constructor(type, options = {}) {
        this.type = type;
        this.bubbles = !!options.bubbles;
        this.cancelable = !!options.cancelable;
        this.defaultPrevented = false;
        this._target = null;
        this.currentTarget = null;
        this._stopped = false;
    }
    get target() { return this._target; }
    set target(val) { this._target = val; }
    preventDefault() { this.defaultPrevented = true; }
    stopPropagation() { this._stopped = true; }
}

class MockCustomEvent extends MockEvent {
    constructor(type, options = {}) {
        super(type, options);
        this.detail = options.detail !== undefined ? options.detail : null;
    }
}

class MockDOMElement {
    constructor(tag, id = '', classList = []) {
        this.tagName = String(tag || 'div').toUpperCase();
        this.id = id || '';
        this._classes = new Set((Array.isArray(classList) ? classList.join(' ') : String(classList || '')).split(' ').filter(Boolean));
        this._textContent = '';
        this.innerHTML = '';
        this.value = '';
        this._attrs = {};
        this.children = [];
        this.parentElement = null;
        this.parentNode = null;
        this.style = {};
        this._listeners = {};
        this.dataset = {};

        const self = this;
        this.classList = {
            add: (...cls) => { cls.forEach(c => self._classes.add(c)); },
            remove: (...cls) => { cls.forEach(c => self._classes.delete(c)); },
            contains: (c) => self._classes.has(c),
            toggle: (c, force) => {
                let res;
                if (force !== undefined) {
                    if (force) self._classes.add(c); else self._classes.delete(c);
                    res = force;
                } else {
                    res = self._classes.has(c) ? (self._classes.delete(c), false) : (self._classes.add(c), true);
                }
                return res;
            }
        };
    }

    get className() {
        return Array.from(this._classes).join(' ');
    }
    set className(val) {
        this._classes = new Set(String(val || '').split(' ').filter(Boolean));
    }

    get textContent() {
        if (this.children.length > 0) {
            return this.children.map(c => c.textContent).join('');
        }
        return this._textContent || '';
    }
    set textContent(val) {
        this._textContent = String(val);
        this.children = [];
    }

    get previousElementSibling() {
        if (!this.parentElement) return null;
        const idx = this.parentElement.children.indexOf(this);
        return idx > 0 ? this.parentElement.children[idx - 1] : null;
    }

    get nextElementSibling() {
        if (!this.parentElement) return null;
        const idx = this.parentElement.children.indexOf(this);
        return idx !== -1 && idx < this.parentElement.children.length - 1 ? this.parentElement.children[idx + 1] : null;
    }

    getAttribute(name) { return this._attrs[name] !== undefined ? this._attrs[name] : null; }
    setAttribute(name, val) {
        this._attrs[name] = String(val);
        if (name === 'class') {
            this.className = String(val);
            this._classes = new Set(this.className.split(' ').filter(Boolean));
        }
        if (name === 'value') this.value = String(val);
        if (name === 'id') this.id = String(val);
    }
    hasAttribute(name) { return name in this._attrs; }
    removeAttribute(name) { delete this._attrs[name]; }

    remove() {
        if (this.parentElement) {
            this.parentElement.removeChild(this);
        }
    }

    removeChild(child) {
        const idx = this.children.indexOf(child);
        if (idx !== -1) {
            this.children.splice(idx, 1);
            child.parentElement = null;
            child.parentNode = null;
        }
        return child;
    }

    appendChild(child) {
        if (child) {
            if (child.tagName === 'FRAGMENT') {
                const kids = [...child.children];
                child.children = [];
                kids.forEach(k => this.appendChild(k));
                return child;
            }
            child.parentElement = this;
            child.parentNode = this;
            this.children.push(child);
        }
        return child;
    }

    cloneNode(deep = false) {
        const clone = new MockDOMElement(this.tagName, this.id, [...this._classes]);
        clone.textContent = this.textContent;
        clone.innerHTML = this.innerHTML;
        clone.value = this.value;
        clone._attrs = { ...this._attrs };
        clone.dataset = { ...this.dataset };
        if (deep) {
            this.children.forEach(c => clone.appendChild(c.cloneNode(true)));
        }
        return clone;
    }

    matches(selector) {
        if (!selector) return false;
        const s = selector.trim();
        if (s.startsWith('#')) return this.id === s.slice(1);
        if (s.startsWith('.')) return this.classList.contains(s.slice(1));
        return this.tagName.toLowerCase() === s.toLowerCase();
    }

    closest(selector) {
        let el = this;
        while (el) {
            if (el.matches && el.matches(selector)) return el;
            el = el.parentElement || el.parentNode;
        }
        return null;
    }

    contains(node) {
        let curr = node;
        while (curr) {
            if (curr === this) return true;
            curr = curr.parentElement || curr.parentNode;
        }
        return false;
    }

    querySelectorAll(selector) {
        const results = [];
        const traverse = (el) => {
            if (el !== this && el.matches && el.matches(selector)) {
                results.push(el);
            }
            (el.children || []).forEach(traverse);
        };
        traverse(this);
        return results;
    }

    querySelector(selector) {
        return this.querySelectorAll(selector)[0] || null;
    }

    addEventListener(type, callback, options = {}) {
        if (!type || typeof callback !== 'function') return;
        this._listeners[type] = this._listeners[type] || [];
        const once = typeof options === 'object' && options !== null ? !!options.once : false;
        this._listeners[type].push({ fn: callback, once });
    }

    removeEventListener(type, callback) {
        if (!this._listeners[type]) return;
        this._listeners[type] = this._listeners[type].filter(item => (item.fn || item) !== callback);
    }

    dispatchEvent(event) {
        if (!event) return true;
        if (!event.target) event.target = this;
        let curr = this;
        while (curr && !event._stopped) {
            event.currentTarget = curr;
            const handlers = curr._listeners[event.type] ? [...curr._listeners[event.type]] : [];
            for (const item of handlers) {
                const h = item.fn || item;
                h.call(curr, event);
                if (item.once) {
                    curr.removeEventListener(event.type, h);
                }
                if (event._stopped) break;
            }
            if (!event.bubbles || event._stopped) break;
            curr = curr.parentElement || curr.parentNode;
        }
        return !event.defaultPrevented;
    }

    click() {
        const evt = new MockEvent('click', { bubbles: true, cancelable: true });
        return this.dispatchEvent(evt);
    }
}

class MockStorage {
    constructor() {
        this._data = new Map();
    }
    setItem(key, value) { this._data.set(String(key), String(value)); }
    getItem(key) { return this._data.has(String(key)) ? this._data.get(String(key)) : null; }
    removeItem(key) { this._data.delete(String(key)); }
    clear() { this._data.clear(); }
    get length() { return this._data.size; }
    key(index) { return Array.from(this._data.keys())[index] || null; }
}

function createMockDocument() {
    const cache = new Map();
    function getOrCreate(key, createFn) {
        if (!cache.has(key)) {
            cache.set(key, createFn());
        }
        return cache.get(key);
    }
    return {
        title: 'JSÖyrən DOM Simulyatoru',
        body: new MockDOMElement('body'),
        getElementById: (id) => getOrCreate('id:' + id, () => new MockDOMElement('div', id)),
        querySelector: (sel) => {
            return getOrCreate('sel:' + sel, () => {
                const idMatch = (sel || '').match(/^#([\w-]+)/);
                const classMatch = (sel || '').match(/^\.([\w-]+)/);
                const tagMatch = (sel || '').match(/^([a-zA-Z0-9]+)/);
                const tag = tagMatch ? tagMatch[1] : 'div';
                return new MockDOMElement(tag, idMatch ? idMatch[1] : '', classMatch ? [classMatch[1]] : []);
            });
        },
        querySelectorAll: (sel) => [
            getOrCreate('sel:' + sel + ':0', () => new MockDOMElement('li', 'item-1', ['meny-bendi', 'kurs-kart'])),
            getOrCreate('sel:' + sel + ':1', () => new MockDOMElement('li', 'item-2', ['meny-bendi', 'kurs-kart']))
        ],
        createElement: (tag) => new MockDOMElement(tag),
        createDocumentFragment: () => new MockDOMElement('fragment')
    };
}

function createMockFetch() {
    return async function mockFetch(url, options = {}) {
        if (options.signal && options.signal.aborted) {
            const err = new Error('The operation was aborted');
            err.name = 'AbortError';
            throw err;
        }

        const u = String(url || '');
        const method = (options.method || 'GET').toUpperCase();

        if (u.includes('tapilmayan') || u.includes('404')) {
            return {
                ok: false,
                status: 404,
                statusText: 'Not Found',
                headers: new Map([['content-type', 'application/json']]),
                json: async () => ({ xeta: 'Resurs tapılmadı', kod: 404 }),
                text: async () => '404 Not Found'
            };
        }

        if (method === 'PUT' || method === 'PATCH') {
            let parsed = {};
            try { parsed = JSON.parse(options.body || '{}'); } catch(e){}
            return {
                ok: true,
                status: 200,
                statusText: 'OK',
                headers: new Map([['content-type', 'application/json']]),
                json: async () => ({ id: 1, ...parsed }),
                text: async () => JSON.stringify({ id: 1, ...parsed })
            };
        }

        if (method === 'POST') {
            let parsed = {};
            try { parsed = JSON.parse(options.body || '{}'); } catch(e){}
            return {
                ok: true,
                status: 201,
                statusText: 'Created',
                headers: new Map([['content-type', 'application/json']]),
                json: async () => ({ id: 101, ...parsed, status: 'Yaradıldı' }),
                text: async () => JSON.stringify({ id: 101, ...parsed })
            };
        }

        if (method === 'DELETE') {
            return {
                ok: true,
                status: 200,
                statusText: 'OK',
                headers: new Map([['content-type', 'application/json']]),
                json: async () => ({ ugurlu: true, mesaj: 'Uğurla silindi' }),
                text: async () => JSON.stringify({ ugurlu: true })
            };
        }

        if (u.includes('/api/auth/refresh')) {
            return {
                ok: true,
                status: 200,
                headers: new Map([['content-type', 'application/json']]),
                json: async () => ({ yeniToken: 'token-v2' })
            };
        }

        if (u.includes('/api/postlar')) {
            return {
                ok: true,
                status: 200,
                headers: new Map([['content-type', 'application/json']]),
                json: async () => [{ id: 1, basliq: 'JS Dərsi', muellifId: 10 }]
            };
        }

        if (u.includes('/api/muellifler')) {
            return {
                ok: true,
                status: 200,
                headers: new Map([['content-type', 'application/json']]),
                json: async () => ({ id: 10, ad: 'Emin' })
            };
        }

        if (u.includes('sehife')) {
            return {
                ok: true,
                status: 200,
                headers: new Map([['content-type', 'application/json']]),
                json: async () => [{ id: 1, ad: 'Məhsul 1' }, { id: 2, ad: 'Məhsul 2' }]
            };
        }

        if (u.includes('/api/istifadeciler/1')) {
            return {
                ok: true,
                status: 200,
                headers: new Map([['content-type', 'application/json']]),
                json: async () => ({ id: 1, ad: 'Murad', email: 'murad@test.az' })
            };
        }

        return {
            ok: true,
            status: 200,
            statusText: 'OK',
            headers: new Map([['content-type', 'application/json']]),
            json: async () => [
                { id: 1, ad: "Murad Əliyev", ixtisas: "Frontend Mühəndis" },
                { id: 2, ad: "Leyla Məmmədova", ixtisas: "Backend Mühəndis" }
            ],
            text: async () => JSON.stringify([
                { id: 1, ad: "Murad Əliyev", ixtisas: "Frontend Mühəndis" }
            ])
        };
    };
}

function createMockExpress(customConsole) {
    const routes = [];
    const middlewares = [];
    let errorHandler = null;

    const app = {
        use: (...args) => {
            if (args.length === 1 && typeof args[0] === 'function') {
                if (args[0].length === 4) errorHandler = args[0];
                else middlewares.push(args[0]);
            }
        },
        get: (path, ...handlers) => { routes.push({ method: 'GET', path, handlers }); },
        post: (path, ...handlers) => { routes.push({ method: 'POST', path, handlers }); },
        put: (path, ...handlers) => { routes.push({ method: 'PUT', path, handlers }); },
        delete: (path, ...handlers) => { routes.push({ method: 'DELETE', path, handlers }); },
        listen: (port, cb) => {
            customConsole.log(`Server ${port} portunda aktivdir`);
            if (cb) cb();
            return { close: (c) => c && c() };
        }
    };

    const express = () => app;
    express.json = () => (req, res, next) => next();
    express.urlencoded = () => (req, res, next) => next();

    const cors = () => (req, res, next) => next();

    const pool = {
        query: async (sql, params) => {
            if (/SELECT.*FROM\s+istifadeciler/i.test(sql)) {
                return { rows: [{ id: 1, ad: 'Əli', rol: 'admin' }, { id: 2, ad: 'Vali', rol: 'istifadeci' }] };
            }
            if (/INSERT\s+INTO/i.test(sql)) {
                return { rows: [{ id: 3, ...(params ? { ad: params[0] } : {}) }] };
            }
            return { rows: [] };
        },
        on: () => {}
    };

    const pg = {
        Pool: function() { return pool; }
    };

    return { express, cors, pool, pg, app };
}

async function runTestCode(code) {
    const logs = [];
    const customConsole = {
        log: (...args) => {
            logs.push(args.map(a => typeof a === 'object' && a !== null ? JSON.stringify(a) : String(a)).join(' '));
        },
        info: (...args) => customConsole.log(...args),
        warn: (...args) => customConsole.log(...args),
        error: (...args) => customConsole.log(...args)
    };

    const doc = createMockDocument();
    const storage = new MockStorage();
    const win = {
        document: doc,
        localStorage: storage,
        sessionStorage: storage,
        fetch: createMockFetch(),
        Event: MockEvent,
        CustomEvent: MockCustomEvent
    };
    const nodeEnv = {
        process: {
            version: 'v20.11.0',
            platform: 'linux',
            env: { NODE_ENV: 'production', PORT: '5000', DB_HOST: 'localhost', SECRET_KEY: 'supersecretkey' },
            argv: ['node', 'app.js', '--mode=exam', '--port=5000']
        },
        path: {
            join: (...parts) => parts.join('/').replace(/\/+/g, '/'),
            basename: (p) => p.split('/').pop(),
            extname: (p) => { const parts = p.split('.'); return parts.length > 1 ? '.' + parts.pop() : ''; },
            resolve: (...parts) => '/' + parts.join('/').replace(/\/+/g, '/')
        },
        os: {
            platform: () => 'linux',
            totalmem: () => 17179869184,
            freemem: () => 8589934592,
            cpus: () => [1, 2, 3, 4]
        },
        fs: {
            promises: {
                readFile: async (p) => '{"server":"JSÖyrən API","status":"Aktiv"}',
                writeFile: async (p, d) => true,
                appendFile: async (p, d) => true,
                readdir: async (p) => ['index.js', 'package.json', 'README.md']
            }
        }
    };
    const { express, cors, pool, pg } = createMockExpress(customConsole);

    const AsyncFunction = Object.getPrototypeOf(async function(){}).constructor;
    const runner = new AsyncFunction(
        'console', 'document', 'window', 'Event', 'CustomEvent',
        'localStorage', 'sessionStorage',
        'fetch', 'process', 'path', 'os', 'fs', 'express', 'cors', 'pool', 'pg',
        code
    );

    await runner(
        customConsole, doc, win, MockEvent, MockCustomEvent,
        storage, storage,
        win.fetch, nodeEnv.process, nodeEnv.path, nodeEnv.os, nodeEnv.fs,
        express, cors, pool, pg
    );

    if (/setTimeout|setInterval|requestAnimationFrame|Promise|\.then|async/.test(code)) {
        await new Promise(r => setTimeout(r, 100));
    }

    return logs.join('\n').replace(/\r\n/g, '\n').trim();
}

module.exports = {
    runTestCode,
    MockEvent,
    MockCustomEvent,
    MockDOMElement,
    MockStorage,
    createMockDocument,
    createMockFetch,
    createMockExpress
};
