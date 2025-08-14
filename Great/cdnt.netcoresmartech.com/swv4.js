/******/
(function(modules) { // webpackBootstrap
    /******/ // The module cache
    /******/
    var installedModules = {};
    /******/
    /******/ // The require function
    /******/
    function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/
        if (installedModules[moduleId]) {
            /******/
            return installedModules[moduleId].exports;
            /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/
        var module = installedModules[moduleId] = {
            /******/
            i: moduleId,
            /******/
            l: false,
            /******/
            exports: {}
            /******/
        };
        /******/
        /******/ // Execute the module function
        /******/
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/
        module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/
        return module.exports;
        /******/
    }
    /******/
    /******/
    /******/ // expose the modules object (__webpack_modules__)
    /******/
    __webpack_require__.m = modules;
    /******/
    /******/ // expose the module cache
    /******/
    __webpack_require__.c = installedModules;
    /******/
    /******/ // define getter function for harmony exports
    /******/
    __webpack_require__.d = function(exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
            /******/
            Object.defineProperty(exports, name, {
                enumerable: true,
                get: getter
            });
            /******/
        }
        /******/
    };
    /******/
    /******/ // define __esModule on exports
    /******/
    __webpack_require__.r = function(exports) {
        /******/
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            /******/
            Object.defineProperty(exports, Symbol.toStringTag, {
                value: 'Module'
            });
            /******/
        }
        /******/
        Object.defineProperty(exports, '__esModule', {
            value: true
        });
        /******/
    };
    /******/
    /******/ // create a fake namespace object
    /******/ // mode & 1: value is a module id, require it
    /******/ // mode & 2: merge all properties of value into the ns
    /******/ // mode & 4: return value when already ns object
    /******/ // mode & 8|1: behave like require
    /******/
    __webpack_require__.t = function(value, mode) {
        /******/
        if (mode & 1) value = __webpack_require__(value);
        /******/
        if (mode & 8) return value;
        /******/
        if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
        /******/
        var ns = Object.create(null);
        /******/
        __webpack_require__.r(ns);
        /******/
        Object.defineProperty(ns, 'default', {
            enumerable: true,
            value: value
        });
        /******/
        if (mode & 2 && typeof value != 'string')
            for (var key in value) __webpack_require__.d(ns, key, function(key) {
                return value[key];
            }.bind(null, key));
        /******/
        return ns;
        /******/
    };
    /******/
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/
    __webpack_require__.n = function(module) {
        /******/
        var getter = module && module.__esModule ?
            /******/
            function getDefault() {
                return module['default'];
            } :
            /******/
            function getModuleExports() {
                return module;
            };
        /******/
        __webpack_require__.d(getter, 'a', getter);
        /******/
        return getter;
        /******/
    };
    /******/
    /******/ // Object.prototype.hasOwnProperty.call
    /******/
    __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    /******/
    /******/ // __webpack_public_path__
    /******/
    __webpack_require__.p = "";
    /******/
    /******/
    /******/ // Load entry module and return exports
    /******/
    return __webpack_require__(__webpack_require__.s = "./src/sw.js");
    /******/
})
/************************************************************************/
/******/
({

    /***/
    "./node_modules/localforage/dist/localforage.js":
        /*!******************************************************!*\
          !*** ./node_modules/localforage/dist/localforage.js ***!
          \******************************************************/
        /*! no static exports found */
        /***/
        (function(module, exports, __webpack_require__) {

            /* WEBPACK VAR INJECTION */
            (function(global) {
                var require;
                var require;
                /*!
                    localForage -- Offline Storage, Improved
                    Version 1.10.0
                    https://localforage.github.io/localForage
                    (c) 2013-2017 Mozilla, Apache License 2.0
                */
                (function(f) {
                    if (true) {
                        module.exports = f()
                    } else {
                        var g;
                    }
                })(function() {
                    var define, module, exports;
                    return (function e(t, n, r) {
                        function s(o, u) {
                            if (!n[o]) {
                                if (!t[o]) {
                                    var a = typeof require == "function" && require;
                                    if (!u && a) return require(o, !0);
                                    if (i) return i(o, !0);
                                    var f = new Error("Cannot find module '" + o + "'");
                                    throw (f.code = "MODULE_NOT_FOUND", f)
                                }
                                var l = n[o] = {
                                    exports: {}
                                };
                                t[o][0].call(l.exports, function(e) {
                                    var n = t[o][1][e];
                                    return s(n ? n : e)
                                }, l, l.exports, e, t, n, r)
                            }
                            return n[o].exports
                        }
                        var i = typeof require == "function" && require;
                        for (var o = 0; o < r.length; o++) s(r[o]);
                        return s
                    })({
                        1: [function(_dereq_, module, exports) {
                            (function(global) {
                                'use strict';
                                var Mutation = global.MutationObserver || global.WebKitMutationObserver;

                                var scheduleDrain;

                                {
                                    if (Mutation) {
                                        var called = 0;
                                        var observer = new Mutation(nextTick);
                                        var element = global.document.createTextNode('');
                                        observer.observe(element, {
                                            characterData: true
                                        });
                                        scheduleDrain = function() {
                                            element.data = (called = ++called % 2);
                                        };
                                    } else if (!global.setImmediate && typeof global.MessageChannel !== 'undefined') {
                                        var channel = new global.MessageChannel();
                                        channel.port1.onmessage = nextTick;
                                        scheduleDrain = function() {
                                            channel.port2.postMessage(0);
                                        };
                                    } else if ('document' in global && 'onreadystatechange' in global.document.createElement('script')) {
                                        scheduleDrain = function() {

                                            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
                                            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
                                            var scriptEl = global.document.createElement('script');
                                            scriptEl.onreadystatechange = function() {
                                                nextTick();

                                                scriptEl.onreadystatechange = null;
                                                scriptEl.parentNode.removeChild(scriptEl);
                                                scriptEl = null;
                                            };
                                            global.document.documentElement.appendChild(scriptEl);
                                        };
                                    } else {
                                        scheduleDrain = function() {
                                            setTimeout(nextTick, 0);
                                        };
                                    }
                                }

                                var draining;
                                var queue = [];
                                //named nextTick for less confusing stack traces
                                function nextTick() {
                                    draining = true;
                                    var i, oldQueue;
                                    var len = queue.length;
                                    while (len) {
                                        oldQueue = queue;
                                        queue = [];
                                        i = -1;
                                        while (++i < len) {
                                            oldQueue[i]();
                                        }
                                        len = queue.length;
                                    }
                                    draining = false;
                                }

                                module.exports = immediate;

                                function immediate(task) {
                                    if (queue.push(task) === 1 && !draining) {
                                        scheduleDrain();
                                    }
                                }

                            }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
                        }, {}],
                        2: [function(_dereq_, module, exports) {
                            'use strict';
                            var immediate = _dereq_(1);

                            /* istanbul ignore next */
                            function INTERNAL() {}

                            var handlers = {};

                            var REJECTED = ['REJECTED'];
                            var FULFILLED = ['FULFILLED'];
                            var PENDING = ['PENDING'];

                            module.exports = Promise;

                            function Promise(resolver) {
                                if (typeof resolver !== 'function') {
                                    throw new TypeError('resolver must be a function');
                                }
                                this.state = PENDING;
                                this.queue = [];
                                this.outcome = void 0;
                                if (resolver !== INTERNAL) {
                                    safelyResolveThenable(this, resolver);
                                }
                            }

                            Promise.prototype["catch"] = function(onRejected) {
                                return this.then(null, onRejected);
                            };
                            Promise.prototype.then = function(onFulfilled, onRejected) {
                                if (typeof onFulfilled !== 'function' && this.state === FULFILLED ||
                                    typeof onRejected !== 'function' && this.state === REJECTED) {
                                    return this;
                                }
                                var promise = new this.constructor(INTERNAL);
                                if (this.state !== PENDING) {
                                    var resolver = this.state === FULFILLED ? onFulfilled : onRejected;
                                    unwrap(promise, resolver, this.outcome);
                                } else {
                                    this.queue.push(new QueueItem(promise, onFulfilled, onRejected));
                                }

                                return promise;
                            };

                            function QueueItem(promise, onFulfilled, onRejected) {
                                this.promise = promise;
                                if (typeof onFulfilled === 'function') {
                                    this.onFulfilled = onFulfilled;
                                    this.callFulfilled = this.otherCallFulfilled;
                                }
                                if (typeof onRejected === 'function') {
                                    this.onRejected = onRejected;
                                    this.callRejected = this.otherCallRejected;
                                }
                            }
                            QueueItem.prototype.callFulfilled = function(value) {
                                handlers.resolve(this.promise, value);
                            };
                            QueueItem.prototype.otherCallFulfilled = function(value) {
                                unwrap(this.promise, this.onFulfilled, value);
                            };
                            QueueItem.prototype.callRejected = function(value) {
                                handlers.reject(this.promise, value);
                            };
                            QueueItem.prototype.otherCallRejected = function(value) {
                                unwrap(this.promise, this.onRejected, value);
                            };

                            function unwrap(promise, func, value) {
                                immediate(function() {
                                    var returnValue;
                                    try {
                                        returnValue = func(value);
                                    } catch (e) {
                                        return handlers.reject(promise, e);
                                    }
                                    if (returnValue === promise) {
                                        handlers.reject(promise, new TypeError('Cannot resolve promise with itself'));
                                    } else {
                                        handlers.resolve(promise, returnValue);
                                    }
                                });
                            }

                            handlers.resolve = function(self, value) {
                                var result = tryCatch(getThen, value);
                                if (result.status === 'error') {
                                    return handlers.reject(self, result.value);
                                }
                                var thenable = result.value;

                                if (thenable) {
                                    safelyResolveThenable(self, thenable);
                                } else {
                                    self.state = FULFILLED;
                                    self.outcome = value;
                                    var i = -1;
                                    var len = self.queue.length;
                                    while (++i < len) {
                                        self.queue[i].callFulfilled(value);
                                    }
                                }
                                return self;
                            };
                            handlers.reject = function(self, error) {
                                self.state = REJECTED;
                                self.outcome = error;
                                var i = -1;
                                var len = self.queue.length;
                                while (++i < len) {
                                    self.queue[i].callRejected(error);
                                }
                                return self;
                            };

                            function getThen(obj) {
                                // Make sure we only access the accessor once as required by the spec
                                var then = obj && obj.then;
                                if (obj && (typeof obj === 'object' || typeof obj === 'function') && typeof then === 'function') {
                                    return function appyThen() {
                                        then.apply(obj, arguments);
                                    };
                                }
                            }

                            function safelyResolveThenable(self, thenable) {
                                // Either fulfill, reject or reject with error
                                var called = false;

                                function onError(value) {
                                    if (called) {
                                        return;
                                    }
                                    called = true;
                                    handlers.reject(self, value);
                                }

                                function onSuccess(value) {
                                    if (called) {
                                        return;
                                    }
                                    called = true;
                                    handlers.resolve(self, value);
                                }

                                function tryToUnwrap() {
                                    thenable(onSuccess, onError);
                                }

                                var result = tryCatch(tryToUnwrap);
                                if (result.status === 'error') {
                                    onError(result.value);
                                }
                            }

                            function tryCatch(func, value) {
                                var out = {};
                                try {
                                    out.value = func(value);
                                    out.status = 'success';
                                } catch (e) {
                                    out.status = 'error';
                                    out.value = e;
                                }
                                return out;
                            }

                            Promise.resolve = resolve;

                            function resolve(value) {
                                if (value instanceof this) {
                                    return value;
                                }
                                return handlers.resolve(new this(INTERNAL), value);
                            }

                            Promise.reject = reject;

                            function reject(reason) {
                                var promise = new this(INTERNAL);
                                return handlers.reject(promise, reason);
                            }

                            Promise.all = all;

                            function all(iterable) {
                                var self = this;
                                if (Object.prototype.toString.call(iterable) !== '[object Array]') {
                                    return this.reject(new TypeError('must be an array'));
                                }

                                var len = iterable.length;
                                var called = false;
                                if (!len) {
                                    return this.resolve([]);
                                }

                                var values = new Array(len);
                                var resolved = 0;
                                var i = -1;
                                var promise = new this(INTERNAL);

                                while (++i < len) {
                                    allResolver(iterable[i], i);
                                }
                                return promise;

                                function allResolver(value, i) {
                                    self.resolve(value).then(resolveFromAll, function(error) {
                                        if (!called) {
                                            called = true;
                                            handlers.reject(promise, error);
                                        }
                                    });

                                    function resolveFromAll(outValue) {
                                        values[i] = outValue;
                                        if (++resolved === len && !called) {
                                            called = true;
                                            handlers.resolve(promise, values);
                                        }
                                    }
                                }
                            }

                            Promise.race = race;

                            function race(iterable) {
                                var self = this;
                                if (Object.prototype.toString.call(iterable) !== '[object Array]') {
                                    return this.reject(new TypeError('must be an array'));
                                }

                                var len = iterable.length;
                                var called = false;
                                if (!len) {
                                    return this.resolve([]);
                                }

                                var i = -1;
                                var promise = new this(INTERNAL);

                                while (++i < len) {
                                    resolver(iterable[i]);
                                }
                                return promise;

                                function resolver(value) {
                                    self.resolve(value).then(function(response) {
                                        if (!called) {
                                            called = true;
                                            handlers.resolve(promise, response);
                                        }
                                    }, function(error) {
                                        if (!called) {
                                            called = true;
                                            handlers.reject(promise, error);
                                        }
                                    });
                                }
                            }

                        }, {
                            "1": 1
                        }],
                        3: [function(_dereq_, module, exports) {
                            (function(global) {
                                'use strict';
                                if (typeof global.Promise !== 'function') {
                                    global.Promise = _dereq_(2);
                                }

                            }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
                        }, {
                            "2": 2
                        }],
                        4: [function(_dereq_, module, exports) {
                            'use strict';

                            var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
                                return typeof obj;
                            } : function(obj) {
                                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                            };

                            function _classCallCheck(instance, Constructor) {
                                if (!(instance instanceof Constructor)) {
                                    throw new TypeError("Cannot call a class as a function");
                                }
                            }

                            function getIDB() {
                                /* global indexedDB,webkitIndexedDB,mozIndexedDB,OIndexedDB,msIndexedDB */
                                try {
                                    if (typeof indexedDB !== 'undefined') {
                                        return indexedDB;
                                    }
                                    if (typeof webkitIndexedDB !== 'undefined') {
                                        return webkitIndexedDB;
                                    }
                                    if (typeof mozIndexedDB !== 'undefined') {
                                        return mozIndexedDB;
                                    }
                                    if (typeof OIndexedDB !== 'undefined') {
                                        return OIndexedDB;
                                    }
                                    if (typeof msIndexedDB !== 'undefined') {
                                        return msIndexedDB;
                                    }
                                } catch (e) {
                                    return;
                                }
                            }

                            var idb = getIDB();

                            function isIndexedDBValid() {
                                try {
                                    // Initialize IndexedDB; fall back to vendor-prefixed versions
                                    // if needed.
                                    if (!idb || !idb.open) {
                                        return false;
                                    }
                                    // We mimic PouchDB here;
                                    //
                                    // We test for openDatabase because IE Mobile identifies itself
                                    // as Safari. Oh the lulz...
                                    var isSafari = typeof openDatabase !== 'undefined' && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform);

                                    var hasFetch = typeof fetch === 'function' && fetch.toString().indexOf('[native code') !== -1;

                                    // Safari <10.1 does not meet our requirements for IDB support
                                    // (see: https://github.com/pouchdb/pouchdb/issues/5572).
                                    // Safari 10.1 shipped with fetch, we can use that to detect it.
                                    // Note: this creates issues with `window.fetch` polyfills and
                                    // overrides; see:
                                    // https://github.com/localForage/localForage/issues/856
                                    return (!isSafari || hasFetch) && typeof indexedDB !== 'undefined' &&
                                        // some outdated implementations of IDB that appear on Samsung
                                        // and HTC Android devices <4.4 are missing IDBKeyRange
                                        // See: https://github.com/mozilla/localForage/issues/128
                                        // See: https://github.com/mozilla/localForage/issues/272
                                        typeof IDBKeyRange !== 'undefined';
                                } catch (e) {
                                    return false;
                                }
                            }

                            // Abstracts constructing a Blob object, so it also works in older
                            // browsers that don't support the native Blob constructor. (i.e.
                            // old QtWebKit versions, at least).
                            // Abstracts constructing a Blob object, so it also works in older
                            // browsers that don't support the native Blob constructor. (i.e.
                            // old QtWebKit versions, at least).
                            function createBlob(parts, properties) {
                                /* global BlobBuilder,MSBlobBuilder,MozBlobBuilder,WebKitBlobBuilder */
                                parts = parts || [];
                                properties = properties || {};
                                try {
                                    return new Blob(parts, properties);
                                } catch (e) {
                                    if (e.name !== 'TypeError') {
                                        throw e;
                                    }
                                    var Builder = typeof BlobBuilder !== 'undefined' ? BlobBuilder : typeof MSBlobBuilder !== 'undefined' ? MSBlobBuilder : typeof MozBlobBuilder !== 'undefined' ? MozBlobBuilder : WebKitBlobBuilder;
                                    var builder = new Builder();
                                    for (var i = 0; i < parts.length; i += 1) {
                                        builder.append(parts[i]);
                                    }
                                    return builder.getBlob(properties.type);
                                }
                            }

                            // This is CommonJS because lie is an external dependency, so Rollup
                            // can just ignore it.
                            if (typeof Promise === 'undefined') {
                                // In the "nopromises" build this will just throw if you don't have
                                // a global promise object, but it would throw anyway later.
                                _dereq_(3);
                            }
                            var Promise$1 = Promise;

                            function executeCallback(promise, callback) {
                                if (callback) {
                                    promise.then(function(result) {
                                        callback(null, result);
                                    }, function(error) {
                                        callback(error);
                                    });
                                }
                            }

                            function executeTwoCallbacks(promise, callback, errorCallback) {
                                if (typeof callback === 'function') {
                                    promise.then(callback);
                                }

                                if (typeof errorCallback === 'function') {
                                    promise["catch"](errorCallback);
                                }
                            }

                            function normalizeKey(key) {
                                // Cast the key to a string, as that's all we can set as a key.
                                if (typeof key !== 'string') {
                                    console.warn(key + ' used as a key, but it is not a string.');
                                    key = String(key);
                                }

                                return key;
                            }

                            function getCallback() {
                                if (arguments.length && typeof arguments[arguments.length - 1] === 'function') {
                                    return arguments[arguments.length - 1];
                                }
                            }

                            // Some code originally from async_storage.js in
                            // [Gaia](https://github.com/mozilla-b2g/gaia).

                            var DETECT_BLOB_SUPPORT_STORE = 'local-forage-detect-blob-support';
                            var supportsBlobs = void 0;
                            var dbContexts = {};
                            var toString = Object.prototype.toString;

                            // Transaction Modes
                            var READ_ONLY = 'readonly';
                            var READ_WRITE = 'readwrite';

                            // Transform a binary string to an array buffer, because otherwise
                            // weird stuff happens when you try to work with the binary string directly.
                            // It is known.
                            // From http://stackoverflow.com/questions/14967647/ (continues on next line)
                            // encode-decode-image-with-base64-breaks-image (2013-04-21)
                            function _binStringToArrayBuffer(bin) {
                                var length = bin.length;
                                var buf = new ArrayBuffer(length);
                                var arr = new Uint8Array(buf);
                                for (var i = 0; i < length; i++) {
                                    arr[i] = bin.charCodeAt(i);
                                }
                                return buf;
                            }

                            //
                            // Blobs are not supported in all versions of IndexedDB, notably
                            // Chrome <37 and Android <5. In those versions, storing a blob will throw.
                            //
                            // Various other blob bugs exist in Chrome v37-42 (inclusive).
                            // Detecting them is expensive and confusing to users, and Chrome 37-42
                            // is at very low usage worldwide, so we do a hacky userAgent check instead.
                            //
                            // content-type bug: https://code.google.com/p/chromium/issues/detail?id=408120
                            // 404 bug: https://code.google.com/p/chromium/issues/detail?id=447916
                            // FileReader bug: https://code.google.com/p/chromium/issues/detail?id=447836
                            //
                            // Code borrowed from PouchDB. See:
                            // https://github.com/pouchdb/pouchdb/blob/master/packages/node_modules/pouchdb-adapter-idb/src/blobSupport.js
                            //
                            function _checkBlobSupportWithoutCaching(idb) {
                                return new Promise$1(function(resolve) {
                                    var txn = idb.transaction(DETECT_BLOB_SUPPORT_STORE, READ_WRITE);
                                    var blob = createBlob(['']);
                                    txn.objectStore(DETECT_BLOB_SUPPORT_STORE).put(blob, 'key');

                                    txn.onabort = function(e) {
                                        // If the transaction aborts now its due to not being able to
                                        // write to the database, likely due to the disk being full
                                        e.preventDefault();
                                        e.stopPropagation();
                                        resolve(false);
                                    };

                                    txn.oncomplete = function() {
                                        var matchedChrome = navigator.userAgent.match(/Chrome\/(\d+)/);
                                        var matchedEdge = navigator.userAgent.match(/Edge\//);
                                        // MS Edge pretends to be Chrome 42:
                                        // https://msdn.microsoft.com/en-us/library/hh869301%28v=vs.85%29.aspx
                                        resolve(matchedEdge || !matchedChrome || parseInt(matchedChrome[1], 10) >= 43);
                                    };
                                })["catch"](function() {
                                    return false; // error, so assume unsupported
                                });
                            }

                            function _checkBlobSupport(idb) {
                                if (typeof supportsBlobs === 'boolean') {
                                    return Promise$1.resolve(supportsBlobs);
                                }
                                return _checkBlobSupportWithoutCaching(idb).then(function(value) {
                                    supportsBlobs = value;
                                    return supportsBlobs;
                                });
                            }

                            function _deferReadiness(dbInfo) {
                                var dbContext = dbContexts[dbInfo.name];

                                // Create a deferred object representing the current database operation.
                                var deferredOperation = {};

                                deferredOperation.promise = new Promise$1(function(resolve, reject) {
                                    deferredOperation.resolve = resolve;
                                    deferredOperation.reject = reject;
                                });

                                // Enqueue the deferred operation.
                                dbContext.deferredOperations.push(deferredOperation);

                                // Chain its promise to the database readiness.
                                if (!dbContext.dbReady) {
                                    dbContext.dbReady = deferredOperation.promise;
                                } else {
                                    dbContext.dbReady = dbContext.dbReady.then(function() {
                                        return deferredOperation.promise;
                                    });
                                }
                            }

                            function _advanceReadiness(dbInfo) {
                                var dbContext = dbContexts[dbInfo.name];

                                // Dequeue a deferred operation.
                                var deferredOperation = dbContext.deferredOperations.pop();

                                // Resolve its promise (which is part of the database readiness
                                // chain of promises).
                                if (deferredOperation) {
                                    deferredOperation.resolve();
                                    return deferredOperation.promise;
                                }
                            }

                            function _rejectReadiness(dbInfo, err) {
                                var dbContext = dbContexts[dbInfo.name];

                                // Dequeue a deferred operation.
                                var deferredOperation = dbContext.deferredOperations.pop();

                                // Reject its promise (which is part of the database readiness
                                // chain of promises).
                                if (deferredOperation) {
                                    deferredOperation.reject(err);
                                    return deferredOperation.promise;
                                }
                            }

                            function _getConnection(dbInfo, upgradeNeeded) {
                                return new Promise$1(function(resolve, reject) {
                                    dbContexts[dbInfo.name] = dbContexts[dbInfo.name] || createDbContext();

                                    if (dbInfo.db) {
                                        if (upgradeNeeded) {
                                            _deferReadiness(dbInfo);
                                            dbInfo.db.close();
                                        } else {
                                            return resolve(dbInfo.db);
                                        }
                                    }

                                    var dbArgs = [dbInfo.name];

                                    if (upgradeNeeded) {
                                        dbArgs.push(dbInfo.version);
                                    }

                                    var openreq = idb.open.apply(idb, dbArgs);

                                    if (upgradeNeeded) {
                                        openreq.onupgradeneeded = function(e) {
                                            var db = openreq.result;
                                            try {
                                                db.createObjectStore(dbInfo.storeName);
                                                if (e.oldVersion <= 1) {
                                                    // Added when support for blob shims was added
                                                    db.createObjectStore(DETECT_BLOB_SUPPORT_STORE);
                                                }
                                            } catch (ex) {
                                                if (ex.name === 'ConstraintError') {
                                                    console.warn('The database "' + dbInfo.name + '"' + ' has been upgraded from version ' + e.oldVersion + ' to version ' + e.newVersion + ', but the storage "' + dbInfo.storeName + '" already exists.');
                                                } else {
                                                    throw ex;
                                                }
                                            }
                                        };
                                    }

                                    openreq.onerror = function(e) {
                                        e.preventDefault();
                                        reject(openreq.error);
                                    };

                                    openreq.onsuccess = function() {
                                        var db = openreq.result;
                                        db.onversionchange = function(e) {
                                            // Triggered when the database is modified (e.g. adding an objectStore) or
                                            // deleted (even when initiated by other sessions in different tabs).
                                            // Closing the connection here prevents those operations from being blocked.
                                            // If the database is accessed again later by this instance, the connection
                                            // will be reopened or the database recreated as needed.
                                            e.target.close();
                                        };
                                        resolve(db);
                                        _advanceReadiness(dbInfo);
                                    };
                                });
                            }

                            function _getOriginalConnection(dbInfo) {
                                return _getConnection(dbInfo, false);
                            }

                            function _getUpgradedConnection(dbInfo) {
                                return _getConnection(dbInfo, true);
                            }

                            function _isUpgradeNeeded(dbInfo, defaultVersion) {
                                if (!dbInfo.db) {
                                    return true;
                                }

                                var isNewStore = !dbInfo.db.objectStoreNames.contains(dbInfo.storeName);
                                var isDowngrade = dbInfo.version < dbInfo.db.version;
                                var isUpgrade = dbInfo.version > dbInfo.db.version;

                                if (isDowngrade) {
                                    // If the version is not the default one
                                    // then warn for impossible downgrade.
                                    if (dbInfo.version !== defaultVersion) {
                                        console.warn('The database "' + dbInfo.name + '"' + " can't be downgraded from version " + dbInfo.db.version + ' to version ' + dbInfo.version + '.');
                                    }
                                    // Align the versions to prevent errors.
                                    dbInfo.version = dbInfo.db.version;
                                }

                                if (isUpgrade || isNewStore) {
                                    // If the store is new then increment the version (if needed).
                                    // This will trigger an "upgradeneeded" event which is required
                                    // for creating a store.
                                    if (isNewStore) {
                                        var incVersion = dbInfo.db.version + 1;
                                        if (incVersion > dbInfo.version) {
                                            dbInfo.version = incVersion;
                                        }
                                    }

                                    return true;
                                }

                                return false;
                            }

                            // encode a blob for indexeddb engines that don't support blobs
                            function _encodeBlob(blob) {
                                return new Promise$1(function(resolve, reject) {
                                    var reader = new FileReader();
                                    reader.onerror = reject;
                                    reader.onloadend = function(e) {
                                        var base64 = btoa(e.target.result || '');
                                        resolve({
                                            __local_forage_encoded_blob: true,
                                            data: base64,
                                            type: blob.type
                                        });
                                    };
                                    reader.readAsBinaryString(blob);
                                });
                            }

                            // decode an encoded blob
                            function _decodeBlob(encodedBlob) {
                                var arrayBuff = _binStringToArrayBuffer(atob(encodedBlob.data));
                                return createBlob([arrayBuff], {
                                    type: encodedBlob.type
                                });
                            }

                            // is this one of our fancy encoded blobs?
                            function _isEncodedBlob(value) {
                                return value && value.__local_forage_encoded_blob;
                            }

                            // Specialize the default `ready()` function by making it dependent
                            // on the current database operations. Thus, the driver will be actually
                            // ready when it's been initialized (default) *and* there are no pending
                            // operations on the database (initiated by some other instances).
                            function _fullyReady(callback) {
                                var self = this;

                                var promise = self._initReady().then(function() {
                                    var dbContext = dbContexts[self._dbInfo.name];

                                    if (dbContext && dbContext.dbReady) {
                                        return dbContext.dbReady;
                                    }
                                });

                                executeTwoCallbacks(promise, callback, callback);
                                return promise;
                            }

                            // Try to establish a new db connection to replace the
                            // current one which is broken (i.e. experiencing
                            // InvalidStateError while creating a transaction).
                            function _tryReconnect(dbInfo) {
                                _deferReadiness(dbInfo);

                                var dbContext = dbContexts[dbInfo.name];
                                var forages = dbContext.forages;

                                for (var i = 0; i < forages.length; i++) {
                                    var forage = forages[i];
                                    if (forage._dbInfo.db) {
                                        forage._dbInfo.db.close();
                                        forage._dbInfo.db = null;
                                    }
                                }
                                dbInfo.db = null;

                                return _getOriginalConnection(dbInfo).then(function(db) {
                                    dbInfo.db = db;
                                    if (_isUpgradeNeeded(dbInfo)) {
                                        // Reopen the database for upgrading.
                                        return _getUpgradedConnection(dbInfo);
                                    }
                                    return db;
                                }).then(function(db) {
                                    // store the latest db reference
                                    // in case the db was upgraded
                                    dbInfo.db = dbContext.db = db;
                                    for (var i = 0; i < forages.length; i++) {
                                        forages[i]._dbInfo.db = db;
                                    }
                                })["catch"](function(err) {
                                    _rejectReadiness(dbInfo, err);
                                    throw err;
                                });
                            }

                            // FF doesn't like Promises (micro-tasks) and IDDB store operations,
                            // so we have to do it with callbacks
                            function createTransaction(dbInfo, mode, callback, retries) {
                                if (retries === undefined) {
                                    retries = 1;
                                }

                                try {
                                    var tx = dbInfo.db.transaction(dbInfo.storeName, mode);
                                    callback(null, tx);
                                } catch (err) {
                                    if (retries > 0 && (!dbInfo.db || err.name === 'InvalidStateError' || err.name === 'NotFoundError')) {
                                        return Promise$1.resolve().then(function() {
                                            if (!dbInfo.db || err.name === 'NotFoundError' && !dbInfo.db.objectStoreNames.contains(dbInfo.storeName) && dbInfo.version <= dbInfo.db.version) {
                                                // increase the db version, to create the new ObjectStore
                                                if (dbInfo.db) {
                                                    dbInfo.version = dbInfo.db.version + 1;
                                                }
                                                // Reopen the database for upgrading.
                                                return _getUpgradedConnection(dbInfo);
                                            }
                                        }).then(function() {
                                            return _tryReconnect(dbInfo).then(function() {
                                                createTransaction(dbInfo, mode, callback, retries - 1);
                                            });
                                        })["catch"](callback);
                                    }

                                    callback(err);
                                }
                            }

                            function createDbContext() {
                                return {
                                    // Running localForages sharing a database.
                                    forages: [],
                                    // Shared database.
                                    db: null,
                                    // Database readiness (promise).
                                    dbReady: null,
                                    // Deferred operations on the database.
                                    deferredOperations: []
                                };
                            }

                            // Open the IndexedDB database (automatically creates one if one didn't
                            // previously exist), using any options set in the config.
                            function _initStorage(options) {
                                var self = this;
                                var dbInfo = {
                                    db: null
                                };

                                if (options) {
                                    for (var i in options) {
                                        dbInfo[i] = options[i];
                                    }
                                }

                                // Get the current context of the database;
                                var dbContext = dbContexts[dbInfo.name];

                                // ...or create a new context.
                                if (!dbContext) {
                                    dbContext = createDbContext();
                                    // Register the new context in the global container.
                                    dbContexts[dbInfo.name] = dbContext;
                                }

                                // Register itself as a running localForage in the current context.
                                dbContext.forages.push(self);

                                // Replace the default `ready()` function with the specialized one.
                                if (!self._initReady) {
                                    self._initReady = self.ready;
                                    self.ready = _fullyReady;
                                }

                                // Create an array of initialization states of the related localForages.
                                var initPromises = [];

                                function ignoreErrors() {
                                    // Don't handle errors here,
                                    // just makes sure related localForages aren't pending.
                                    return Promise$1.resolve();
                                }

                                for (var j = 0; j < dbContext.forages.length; j++) {
                                    var forage = dbContext.forages[j];
                                    if (forage !== self) {
                                        // Don't wait for itself...
                                        initPromises.push(forage._initReady()["catch"](ignoreErrors));
                                    }
                                }

                                // Take a snapshot of the related localForages.
                                var forages = dbContext.forages.slice(0);

                                // Initialize the connection process only when
                                // all the related localForages aren't pending.
                                return Promise$1.all(initPromises).then(function() {
                                    dbInfo.db = dbContext.db;
                                    // Get the connection or open a new one without upgrade.
                                    return _getOriginalConnection(dbInfo);
                                }).then(function(db) {
                                    dbInfo.db = db;
                                    if (_isUpgradeNeeded(dbInfo, self._defaultConfig.version)) {
                                        // Reopen the database for upgrading.
                                        return _getUpgradedConnection(dbInfo);
                                    }
                                    return db;
                                }).then(function(db) {
                                    dbInfo.db = dbContext.db = db;
                                    self._dbInfo = dbInfo;
                                    // Share the final connection amongst related localForages.
                                    for (var k = 0; k < forages.length; k++) {
                                        var forage = forages[k];
                                        if (forage !== self) {
                                            // Self is already up-to-date.
                                            forage._dbInfo.db = dbInfo.db;
                                            forage._dbInfo.version = dbInfo.version;
                                        }
                                    }
                                });
                            }

                            function getItem(key, callback) {
                                var self = this;

                                key = normalizeKey(key);

                                var promise = new Promise$1(function(resolve, reject) {
                                    self.ready().then(function() {
                                        createTransaction(self._dbInfo, READ_ONLY, function(err, transaction) {
                                            if (err) {
                                                return reject(err);
                                            }

                                            try {
                                                var store = transaction.objectStore(self._dbInfo.storeName);
                                                var req = store.get(key);

                                                req.onsuccess = function() {
                                                    var value = req.result;
                                                    if (value === undefined) {
                                                        value = null;
                                                    }
                                                    if (_isEncodedBlob(value)) {
                                                        value = _decodeBlob(value);
                                                    }
                                                    resolve(value);
                                                };

                                                req.onerror = function() {
                                                    reject(req.error);
                                                };
                                            } catch (e) {
                                                reject(e);
                                            }
                                        });
                                    })["catch"](reject);
                                });

                                executeCallback(promise, callback);
                                return promise;
                            }

                            // Iterate over all items stored in database.
                            function iterate(iterator, callback) {
                                var self = this;

                                var promise = new Promise$1(function(resolve, reject) {
                                    self.ready().then(function() {
                                        createTransaction(self._dbInfo, READ_ONLY, function(err, transaction) {
                                            if (err) {
                                                return reject(err);
                                            }

                                            try {
                                                var store = transaction.objectStore(self._dbInfo.storeName);
                                                var req = store.openCursor();
                                                var iterationNumber = 1;

                                                req.onsuccess = function() {
                                                    var cursor = req.result;

                                                    if (cursor) {
                                                        var value = cursor.value;
                                                        if (_isEncodedBlob(value)) {
                                                            value = _decodeBlob(value);
                                                        }
                                                        var result = iterator(value, cursor.key, iterationNumber++);

                                                        // when the iterator callback returns any
                                                        // (non-`undefined`) value, then we stop
                                                        // the iteration immediately
                                                        if (result !== void 0) {
                                                            resolve(result);
                                                        } else {
                                                            cursor["continue"]();
                                                        }
                                                    } else {
                                                        resolve();
                                                    }
                                                };

                                                req.onerror = function() {
                                                    reject(req.error);
                                                };
                                            } catch (e) {
                                                reject(e);
                                            }
                                        });
                                    })["catch"](reject);
                                });

                                executeCallback(promise, callback);

                                return promise;
                            }

                            function setItem(key, value, callback) {
                                var self = this;

                                key = normalizeKey(key);

                                var promise = new Promise$1(function(resolve, reject) {
                                    var dbInfo;
                                    self.ready().then(function() {
                                        dbInfo = self._dbInfo;
                                        if (toString.call(value) === '[object Blob]') {
                                            return _checkBlobSupport(dbInfo.db).then(function(blobSupport) {
                                                if (blobSupport) {
                                                    return value;
                                                }
                                                return _encodeBlob(value);
                                            });
                                        }
                                        return value;
                                    }).then(function(value) {
                                        createTransaction(self._dbInfo, READ_WRITE, function(err, transaction) {
                                            if (err) {
                                                return reject(err);
                                            }

                                            try {
                                                var store = transaction.objectStore(self._dbInfo.storeName);

                                                // The reason we don't _save_ null is because IE 10 does
                                                // not support saving the `null` type in IndexedDB. How
                                                // ironic, given the bug below!
                                                // See: https://github.com/mozilla/localForage/issues/161
                                                if (value === null) {
                                                    value = undefined;
                                                }

                                                var req = store.put(value, key);

                                                transaction.oncomplete = function() {
                                                    // Cast to undefined so the value passed to
                                                    // callback/promise is the same as what one would get out
                                                    // of `getItem()` later. This leads to some weirdness
                                                    // (setItem('foo', undefined) will return `null`), but
                                                    // it's not my fault localStorage is our baseline and that
                                                    // it's weird.
                                                    if (value === undefined) {
                                                        value = null;
                                                    }

                                                    resolve(value);
                                                };
                                                transaction.onabort = transaction.onerror = function() {
                                                    var err = req.error ? req.error : req.transaction.error;
                                                    reject(err);
                                                };
                                            } catch (e) {
                                                reject(e);
                                            }
                                        });
                                    })["catch"](reject);
                                });

                                executeCallback(promise, callback);
                                return promise;
                            }

                            function removeItem(key, callback) {
                                var self = this;

                                key = normalizeKey(key);

                                var promise = new Promise$1(function(resolve, reject) {
                                    self.ready().then(function() {
                                        createTransaction(self._dbInfo, READ_WRITE, function(err, transaction) {
                                            if (err) {
                                                return reject(err);
                                            }

                                            try {
                                                var store = transaction.objectStore(self._dbInfo.storeName);
                                                // We use a Grunt task to make this safe for IE and some
                                                // versions of Android (including those used by Cordova).
                                                // Normally IE won't like `.delete()` and will insist on
                                                // using `['delete']()`, but we have a build step that
                                                // fixes this for us now.
                                                var req = store["delete"](key);
                                                transaction.oncomplete = function() {
                                                    resolve();
                                                };

                                                transaction.onerror = function() {
                                                    reject(req.error);
                                                };

                                                // The request will be also be aborted if we've exceeded our storage
                                                // space.
                                                transaction.onabort = function() {
                                                    var err = req.error ? req.error : req.transaction.error;
                                                    reject(err);
                                                };
                                            } catch (e) {
                                                reject(e);
                                            }
                                        });
                                    })["catch"](reject);
                                });

                                executeCallback(promise, callback);
                                return promise;
                            }

                            function clear(callback) {
                                var self = this;

                                var promise = new Promise$1(function(resolve, reject) {
                                    self.ready().then(function() {
                                        createTransaction(self._dbInfo, READ_WRITE, function(err, transaction) {
                                            if (err) {
                                                return reject(err);
                                            }

                                            try {
                                                var store = transaction.objectStore(self._dbInfo.storeName);
                                                var req = store.clear();

                                                transaction.oncomplete = function() {
                                                    resolve();
                                                };

                                                transaction.onabort = transaction.onerror = function() {
                                                    var err = req.error ? req.error : req.transaction.error;
                                                    reject(err);
                                                };
                                            } catch (e) {
                                                reject(e);
                                            }
                                        });
                                    })["catch"](reject);
                                });

                                executeCallback(promise, callback);
                                return promise;
                            }

                            function length(callback) {
                                var self = this;

                                var promise = new Promise$1(function(resolve, reject) {
                                    self.ready().then(function() {
                                        createTransaction(self._dbInfo, READ_ONLY, function(err, transaction) {
                                            if (err) {
                                                return reject(err);
                                            }

                                            try {
                                                var store = transaction.objectStore(self._dbInfo.storeName);
                                                var req = store.count();

                                                req.onsuccess = function() {
                                                    resolve(req.result);
                                                };

                                                req.onerror = function() {
                                                    reject(req.error);
                                                };
                                            } catch (e) {
                                                reject(e);
                                            }
                                        });
                                    })["catch"](reject);
                                });

                                executeCallback(promise, callback);
                                return promise;
                            }

                            function key(n, callback) {
                                var self = this;

                                var promise = new Promise$1(function(resolve, reject) {
                                    if (n < 0) {
                                        resolve(null);

                                        return;
                                    }

                                    self.ready().then(function() {
                                        createTransaction(self._dbInfo, READ_ONLY, function(err, transaction) {
                                            if (err) {
                                                return reject(err);
                                            }

                                            try {
                                                var store = transaction.objectStore(self._dbInfo.storeName);
                                                var advanced = false;
                                                var req = store.openKeyCursor();

                                                req.onsuccess = function() {
                                                    var cursor = req.result;
                                                    if (!cursor) {
                                                        // this means there weren't enough keys
                                                        resolve(null);

                                                        return;
                                                    }

                                                    if (n === 0) {
                                                        // We have the first key, return it if that's what they
                                                        // wanted.
                                                        resolve(cursor.key);
                                                    } else {
                                                        if (!advanced) {
                                                            // Otherwise, ask the cursor to skip ahead n
                                                            // records.
                                                            advanced = true;
                                                            cursor.advance(n);
                                                        } else {
                                                            // When we get here, we've got the nth key.
                                                            resolve(cursor.key);
                                                        }
                                                    }
                                                };

                                                req.onerror = function() {
                                                    reject(req.error);
                                                };
                                            } catch (e) {
                                                reject(e);
                                            }
                                        });
                                    })["catch"](reject);
                                });

                                executeCallback(promise, callback);
                                return promise;
                            }

                            function keys(callback) {
                                var self = this;

                                var promise = new Promise$1(function(resolve, reject) {
                                    self.ready().then(function() {
                                        createTransaction(self._dbInfo, READ_ONLY, function(err, transaction) {
                                            if (err) {
                                                return reject(err);
                                            }

                                            try {
                                                var store = transaction.objectStore(self._dbInfo.storeName);
                                                var req = store.openKeyCursor();
                                                var keys = [];

                                                req.onsuccess = function() {
                                                    var cursor = req.result;

                                                    if (!cursor) {
                                                        resolve(keys);
                                                        return;
                                                    }

                                                    keys.push(cursor.key);
                                                    cursor["continue"]();
                                                };

                                                req.onerror = function() {
                                                    reject(req.error);
                                                };
                                            } catch (e) {
                                                reject(e);
                                            }
                                        });
                                    })["catch"](reject);
                                });

                                executeCallback(promise, callback);
                                return promise;
                            }

                            function dropInstance(options, callback) {
                                callback = getCallback.apply(this, arguments);

                                var currentConfig = this.config();
                                options = typeof options !== 'function' && options || {};
                                if (!options.name) {
                                    options.name = options.name || currentConfig.name;
                                    options.storeName = options.storeName || currentConfig.storeName;
                                }

                                var self = this;
                                var promise;
                                if (!options.name) {
                                    promise = Promise$1.reject('Invalid arguments');
                                } else {
                                    var isCurrentDb = options.name === currentConfig.name && self._dbInfo.db;

                                    var dbPromise = isCurrentDb ? Promise$1.resolve(self._dbInfo.db) : _getOriginalConnection(options).then(function(db) {
                                        var dbContext = dbContexts[options.name];
                                        var forages = dbContext.forages;
                                        dbContext.db = db;
                                        for (var i = 0; i < forages.length; i++) {
                                            forages[i]._dbInfo.db = db;
                                        }
                                        return db;
                                    });

                                    if (!options.storeName) {
                                        promise = dbPromise.then(function(db) {
                                            _deferReadiness(options);

                                            var dbContext = dbContexts[options.name];
                                            var forages = dbContext.forages;

                                            db.close();
                                            for (var i = 0; i < forages.length; i++) {
                                                var forage = forages[i];
                                                forage._dbInfo.db = null;
                                            }

                                            var dropDBPromise = new Promise$1(function(resolve, reject) {
                                                var req = idb.deleteDatabase(options.name);

                                                req.onerror = function() {
                                                    var db = req.result;
                                                    if (db) {
                                                        db.close();
                                                    }
                                                    reject(req.error);
                                                };

                                                req.onblocked = function() {
                                                    // Closing all open connections in onversionchange handler should prevent this situation, but if
                                                    // we do get here, it just means the request remains pending - eventually it will succeed or error
                                                    console.warn('dropInstance blocked for database "' + options.name + '" until all open connections are closed');
                                                };

                                                req.onsuccess = function() {
                                                    var db = req.result;
                                                    if (db) {
                                                        db.close();
                                                    }
                                                    resolve(db);
                                                };
                                            });

                                            return dropDBPromise.then(function(db) {
                                                dbContext.db = db;
                                                for (var i = 0; i < forages.length; i++) {
                                                    var _forage = forages[i];
                                                    _advanceReadiness(_forage._dbInfo);
                                                }
                                            })["catch"](function(err) {
                                                (_rejectReadiness(options, err) || Promise$1.resolve())["catch"](function() {});
                                                throw err;
                                            });
                                        });
                                    } else {
                                        promise = dbPromise.then(function(db) {
                                            if (!db.objectStoreNames.contains(options.storeName)) {
                                                return;
                                            }

                                            var newVersion = db.version + 1;

                                            _deferReadiness(options);

                                            var dbContext = dbContexts[options.name];
                                            var forages = dbContext.forages;

                                            db.close();
                                            for (var i = 0; i < forages.length; i++) {
                                                var forage = forages[i];
                                                forage._dbInfo.db = null;
                                                forage._dbInfo.version = newVersion;
                                            }

                                            var dropObjectPromise = new Promise$1(function(resolve, reject) {
                                                var req = idb.open(options.name, newVersion);

                                                req.onerror = function(err) {
                                                    var db = req.result;
                                                    db.close();
                                                    reject(err);
                                                };

                                                req.onupgradeneeded = function() {
                                                    var db = req.result;
                                                    db.deleteObjectStore(options.storeName);
                                                };

                                                req.onsuccess = function() {
                                                    var db = req.result;
                                                    db.close();
                                                    resolve(db);
                                                };
                                            });

                                            return dropObjectPromise.then(function(db) {
                                                dbContext.db = db;
                                                for (var j = 0; j < forages.length; j++) {
                                                    var _forage2 = forages[j];
                                                    _forage2._dbInfo.db = db;
                                                    _advanceReadiness(_forage2._dbInfo);
                                                }
                                            })["catch"](function(err) {
                                                (_rejectReadiness(options, err) || Promise$1.resolve())["catch"](function() {});
                                                throw err;
                                            });
                                        });
                                    }
                                }

                                executeCallback(promise, callback);
                                return promise;
                            }

                            var asyncStorage = {
                                _driver: 'asyncStorage',
                                _initStorage: _initStorage,
                                _support: isIndexedDBValid(),
                                iterate: iterate,
                                getItem: getItem,
                                setItem: setItem,
                                removeItem: removeItem,
                                clear: clear,
                                length: length,
                                key: key,
                                keys: keys,
                                dropInstance: dropInstance
                            };

                            function isWebSQLValid() {
                                return typeof openDatabase === 'function';
                            }

                            // Sadly, the best way to save binary data in WebSQL/localStorage is serializing
                            // it to Base64, so this is how we store it to prevent very strange errors with less
                            // verbose ways of binary <-> string data storage.
                            var BASE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

                            var BLOB_TYPE_PREFIX = '~~local_forage_type~';
                            var BLOB_TYPE_PREFIX_REGEX = /^~~local_forage_type~([^~]+)~/;

                            var SERIALIZED_MARKER = '__lfsc__:';
                            var SERIALIZED_MARKER_LENGTH = SERIALIZED_MARKER.length;

                            // OMG the serializations!
                            var TYPE_ARRAYBUFFER = 'arbf';
                            var TYPE_BLOB = 'blob';
                            var TYPE_INT8ARRAY = 'si08';
                            var TYPE_UINT8ARRAY = 'ui08';
                            var TYPE_UINT8CLAMPEDARRAY = 'uic8';
                            var TYPE_INT16ARRAY = 'si16';
                            var TYPE_INT32ARRAY = 'si32';
                            var TYPE_UINT16ARRAY = 'ur16';
                            var TYPE_UINT32ARRAY = 'ui32';
                            var TYPE_FLOAT32ARRAY = 'fl32';
                            var TYPE_FLOAT64ARRAY = 'fl64';
                            var TYPE_SERIALIZED_MARKER_LENGTH = SERIALIZED_MARKER_LENGTH + TYPE_ARRAYBUFFER.length;

                            var toString$1 = Object.prototype.toString;

                            function stringToBuffer(serializedString) {
                                // Fill the string into a ArrayBuffer.
                                var bufferLength = serializedString.length * 0.75;
                                var len = serializedString.length;
                                var i;
                                var p = 0;
                                var encoded1, encoded2, encoded3, encoded4;

                                if (serializedString[serializedString.length - 1] === '=') {
                                    bufferLength--;
                                    if (serializedString[serializedString.length - 2] === '=') {
                                        bufferLength--;
                                    }
                                }

                                var buffer = new ArrayBuffer(bufferLength);
                                var bytes = new Uint8Array(buffer);

                                for (i = 0; i < len; i += 4) {
                                    encoded1 = BASE_CHARS.indexOf(serializedString[i]);
                                    encoded2 = BASE_CHARS.indexOf(serializedString[i + 1]);
                                    encoded3 = BASE_CHARS.indexOf(serializedString[i + 2]);
                                    encoded4 = BASE_CHARS.indexOf(serializedString[i + 3]);

                                    /*jslint bitwise: true */
                                    bytes[p++] = encoded1 << 2 | encoded2 >> 4;
                                    bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
                                    bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
                                }
                                return buffer;
                            }

                            // Converts a buffer to a string to store, serialized, in the backend
                            // storage library.
                            function bufferToString(buffer) {
                                // base64-arraybuffer
                                var bytes = new Uint8Array(buffer);
                                var base64String = '';
                                var i;

                                for (i = 0; i < bytes.length; i += 3) {
                                    /*jslint bitwise: true */
                                    base64String += BASE_CHARS[bytes[i] >> 2];
                                    base64String += BASE_CHARS[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
                                    base64String += BASE_CHARS[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
                                    base64String += BASE_CHARS[bytes[i + 2] & 63];
                                }

                                if (bytes.length % 3 === 2) {
                                    base64String = base64String.substring(0, base64String.length - 1) + '=';
                                } else if (bytes.length % 3 === 1) {
                                    base64String = base64String.substring(0, base64String.length - 2) + '==';
                                }

                                return base64String;
                            }

                            // Serialize a value, afterwards executing a callback (which usually
                            // instructs the `setItem()` callback/promise to be executed). This is how
                            // we store binary data with localStorage.
                            function serialize(value, callback) {
                                var valueType = '';
                                if (value) {
                                    valueType = toString$1.call(value);
                                }

                                // Cannot use `value instanceof ArrayBuffer` or such here, as these
                                // checks fail when running the tests using casper.js...
                                //
                                // TODO: See why those tests fail and use a better solution.
                                if (value && (valueType === '[object ArrayBuffer]' || value.buffer && toString$1.call(value.buffer) === '[object ArrayBuffer]')) {
                                    // Convert binary arrays to a string and prefix the string with
                                    // a special marker.
                                    var buffer;
                                    var marker = SERIALIZED_MARKER;

                                    if (value instanceof ArrayBuffer) {
                                        buffer = value;
                                        marker += TYPE_ARRAYBUFFER;
                                    } else {
                                        buffer = value.buffer;

                                        if (valueType === '[object Int8Array]') {
                                            marker += TYPE_INT8ARRAY;
                                        } else if (valueType === '[object Uint8Array]') {
                                            marker += TYPE_UINT8ARRAY;
                                        } else if (valueType === '[object Uint8ClampedArray]') {
                                            marker += TYPE_UINT8CLAMPEDARRAY;
                                        } else if (valueType === '[object Int16Array]') {
                                            marker += TYPE_INT16ARRAY;
                                        } else if (valueType === '[object Uint16Array]') {
                                            marker += TYPE_UINT16ARRAY;
                                        } else if (valueType === '[object Int32Array]') {
                                            marker += TYPE_INT32ARRAY;
                                        } else if (valueType === '[object Uint32Array]') {
                                            marker += TYPE_UINT32ARRAY;
                                        } else if (valueType === '[object Float32Array]') {
                                            marker += TYPE_FLOAT32ARRAY;
                                        } else if (valueType === '[object Float64Array]') {
                                            marker += TYPE_FLOAT64ARRAY;
                                        } else {
                                            callback(new Error('Failed to get type for BinaryArray'));
                                        }
                                    }

                                    callback(marker + bufferToString(buffer));
                                } else if (valueType === '[object Blob]') {
                                    // Conver the blob to a binaryArray and then to a string.
                                    var fileReader = new FileReader();

                                    fileReader.onload = function() {
                                        // Backwards-compatible prefix for the blob type.
                                        var str = BLOB_TYPE_PREFIX + value.type + '~' + bufferToString(this.result);

                                        callback(SERIALIZED_MARKER + TYPE_BLOB + str);
                                    };

                                    fileReader.readAsArrayBuffer(value);
                                } else {
                                    try {
                                        callback(JSON.stringify(value));
                                    } catch (e) {
                                        console.error("Couldn't convert value into a JSON string: ", value);

                                        callback(null, e);
                                    }
                                }
                            }

                            // Deserialize data we've inserted into a value column/field. We place
                            // special markers into our strings to mark them as encoded; this isn't
                            // as nice as a meta field, but it's the only sane thing we can do whilst
                            // keeping localStorage support intact.
                            //
                            // Oftentimes this will just deserialize JSON content, but if we have a
                            // special marker (SERIALIZED_MARKER, defined above), we will extract
                            // some kind of arraybuffer/binary data/typed array out of the string.
                            function deserialize(value) {
                                // If we haven't marked this string as being specially serialized (i.e.
                                // something other than serialized JSON), we can just return it and be
                                // done with it.
                                if (value.substring(0, SERIALIZED_MARKER_LENGTH) !== SERIALIZED_MARKER) {
                                    return JSON.parse(value);
                                }

                                // The following code deals with deserializing some kind of Blob or
                                // TypedArray. First we separate out the type of data we're dealing
                                // with from the data itself.
                                var serializedString = value.substring(TYPE_SERIALIZED_MARKER_LENGTH);
                                var type = value.substring(SERIALIZED_MARKER_LENGTH, TYPE_SERIALIZED_MARKER_LENGTH);

                                var blobType;
                                // Backwards-compatible blob type serialization strategy.
                                // DBs created with older versions of localForage will simply not have the blob type.
                                if (type === TYPE_BLOB && BLOB_TYPE_PREFIX_REGEX.test(serializedString)) {
                                    var matcher = serializedString.match(BLOB_TYPE_PREFIX_REGEX);
                                    blobType = matcher[1];
                                    serializedString = serializedString.substring(matcher[0].length);
                                }
                                var buffer = stringToBuffer(serializedString);

                                // Return the right type based on the code/type set during
                                // serialization.
                                switch (type) {
                                    case TYPE_ARRAYBUFFER:
                                        return buffer;
                                    case TYPE_BLOB:
                                        return createBlob([buffer], {
                                            type: blobType
                                        });
                                    case TYPE_INT8ARRAY:
                                        return new Int8Array(buffer);
                                    case TYPE_UINT8ARRAY:
                                        return new Uint8Array(buffer);
                                    case TYPE_UINT8CLAMPEDARRAY:
                                        return new Uint8ClampedArray(buffer);
                                    case TYPE_INT16ARRAY:
                                        return new Int16Array(buffer);
                                    case TYPE_UINT16ARRAY:
                                        return new Uint16Array(buffer);
                                    case TYPE_INT32ARRAY:
                                        return new Int32Array(buffer);
                                    case TYPE_UINT32ARRAY:
                                        return new Uint32Array(buffer);
                                    case TYPE_FLOAT32ARRAY:
                                        return new Float32Array(buffer);
                                    case TYPE_FLOAT64ARRAY:
                                        return new Float64Array(buffer);
                                    default:
                                        throw new Error('Unkown type: ' + type);
                                }
                            }

                            var localforageSerializer = {
                                serialize: serialize,
                                deserialize: deserialize,
                                stringToBuffer: stringToBuffer,
                                bufferToString: bufferToString
                            };

                            /*
                             * Includes code from:
                             *
                             * base64-arraybuffer
                             * https://github.com/niklasvh/base64-arraybuffer
                             *
                             * Copyright (c) 2012 Niklas von Hertzen
                             * Licensed under the MIT license.
                             */

                            function createDbTable(t, dbInfo, callback, errorCallback) {
                                t.executeSql('CREATE TABLE IF NOT EXISTS ' + dbInfo.storeName + ' ' + '(id INTEGER PRIMARY KEY, key unique, value)', [], callback, errorCallback);
                            }

                            // Open the WebSQL database (automatically creates one if one didn't
                            // previously exist), using any options set in the config.
                            function _initStorage$1(options) {
                                var self = this;
                                var dbInfo = {
                                    db: null
                                };

                                if (options) {
                                    for (var i in options) {
                                        dbInfo[i] = typeof options[i] !== 'string' ? options[i].toString() : options[i];
                                    }
                                }

                                var dbInfoPromise = new Promise$1(function(resolve, reject) {
                                    // Open the database; the openDatabase API will automatically
                                    // create it for us if it doesn't exist.
                                    try {
                                        dbInfo.db = openDatabase(dbInfo.name, String(dbInfo.version), dbInfo.description, dbInfo.size);
                                    } catch (e) {
                                        return reject(e);
                                    }

                                    // Create our key/value table if it doesn't exist.
                                    dbInfo.db.transaction(function(t) {
                                        createDbTable(t, dbInfo, function() {
                                            self._dbInfo = dbInfo;
                                            resolve();
                                        }, function(t, error) {
                                            reject(error);
                                        });
                                    }, reject);
                                });

                                dbInfo.serializer = localforageSerializer;
                                return dbInfoPromise;
                            }

                            function tryExecuteSql(t, dbInfo, sqlStatement, args, callback, errorCallback) {
                                t.executeSql(sqlStatement, args, callback, function(t, error) {
                                    if (error.code === error.SYNTAX_ERR) {
                                        t.executeSql('SELECT name FROM sqlite_master ' + "WHERE type='table' AND name = ?", [dbInfo.storeName], function(t, results) {
                                            if (!results.rows.length) {
                                                // if the table is missing (was deleted)
                                                // re-create it table and retry
                                                createDbTable(t, dbInfo, function() {
                                                    t.executeSql(sqlStatement, args, callback, errorCallback);
                                                }, errorCallback);
                                            } else {
                                                errorCallback(t, error);
                                            }
                                        }, errorCallback);
                                    } else {
                                        errorCallback(t, error);
                                    }
                                }, errorCallback);
                            }

                            function getItem$1(key, callback) {
                                var self = this;

                                key = normalizeKey(key);

                                var promise = new Promise$1(function(resolve, reject) {
                                    self.ready().then(function() {
                                        var dbInfo = self._dbInfo;
                                        dbInfo.db.transaction(function(t) {
                                            tryExecuteSql(t, dbInfo, 'SELECT * FROM ' + dbInfo.storeName + ' WHERE key = ? LIMIT 1', [key], function(t, results) {
                                                var result = results.rows.length ? results.rows.item(0).value : null;

                                                // Check to see if this is serialized content we need to
                                                // unpack.
                                                if (result) {
                                                    result = dbInfo.serializer.deserialize(result);
                                                }

                                                resolve(result);
                                            }, function(t, error) {
                                                reject(error);
                                            });
                                        });
                                    })["catch"](reject);
                                });

                                executeCallback(promise, callback);
                                return promise;
                            }

                            function iterate$1(iterator, callback) {
                                var self = this;

                                var promise = new Promise$1(function(resolve, reject) {
                                    self.ready().then(function() {
                                        var dbInfo = self._dbInfo;

                                        dbInfo.db.transaction(function(t) {
                                            tryExecuteSql(t, dbInfo, 'SELECT * FROM ' + dbInfo.storeName, [], function(t, results) {
                                                var rows = results.rows;
                                                var length = rows.length;

                                                for (var i = 0; i < length; i++) {
                                                    var item = rows.item(i);
                                                    var result = item.value;

                                                    // Check to see if this is serialized content
                                                    // we need to unpack.
                                                    if (result) {
                                                        result = dbInfo.serializer.deserialize(result);
                                                    }

                                                    result = iterator(result, item.key, i + 1);

                                                    // void(0) prevents problems with redefinition
                                                    // of `undefined`.
                                                    if (result !== void 0) {
                                                        resolve(result);
                                                        return;
                                                    }
                                                }

                                                resolve();
                                            }, function(t, error) {
                                                reject(error);
                                            });
                                        });
                                    })["catch"](reject);
                                });

                                executeCallback(promise, callback);
                                return promise;
                            }

                            function _setItem(key, value, callback, retriesLeft) {
                                var self = this;

                                key = normalizeKey(key);

                                var promise = new Promise$1(function(resolve, reject) {
                                    self.ready().then(function() {
                                        // The localStorage API doesn't return undefined values in an
                                        // "expected" way, so undefined is always cast to null in all
                                        // drivers. See: https://github.com/mozilla/localForage/pull/42
                                        if (value === undefined) {
                                            value = null;
                                        }

                                        // Save the original value to pass to the callback.
                                        var originalValue = value;

                                        var dbInfo = self._dbInfo;
                                        dbInfo.serializer.serialize(value, function(value, error) {
                                            if (error) {
                                                reject(error);
                                            } else {
                                                dbInfo.db.transaction(function(t) {
                                                    tryExecuteSql(t, dbInfo, 'INSERT OR REPLACE INTO ' + dbInfo.storeName + ' ' + '(key, value) VALUES (?, ?)', [key, value], function() {
                                                        resolve(originalValue);
                                                    }, function(t, error) {
                                                        reject(error);
                                                    });
                                                }, function(sqlError) {
                                                    // The transaction failed; check
                                                    // to see if it's a quota error.
                                                    if (sqlError.code === sqlError.QUOTA_ERR) {
                                                        // We reject the callback outright for now, but
                                                        // it's worth trying to re-run the transaction.
                                                        // Even if the user accepts the prompt to use
                                                        // more storage on Safari, this error will
                                                        // be called.
                                                        //
                                                        // Try to re-run the transaction.
                                                        if (retriesLeft > 0) {
                                                            resolve(_setItem.apply(self, [key, originalValue, callback, retriesLeft - 1]));
                                                            return;
                                                        }
                                                        reject(sqlError);
                                                    }
                                                });
                                            }
                                        });
                                    })["catch"](reject);
                                });

                                executeCallback(promise, callback);
                                return promise;
                            }

                            function setItem$1(key, value, callback) {
                                return _setItem.apply(this, [key, value, callback, 1]);
                            }

                            function removeItem$1(key, callback) {
                                var self = this;

                                key = normalizeKey(key);

                                var promise = new Promise$1(function(resolve, reject) {
                                    self.ready().then(function() {
                                        var dbInfo = self._dbInfo;
                                        dbInfo.db.transaction(function(t) {
                                            tryExecuteSql(t, dbInfo, 'DELETE FROM ' + dbInfo.storeName + ' WHERE key = ?', [key], function() {
                                                resolve();
                                            }, function(t, error) {
                                                reject(error);
                                            });
                                        });
                                    })["catch"](reject);
                                });

                                executeCallback(promise, callback);
                                return promise;
                            }

                            // Deletes every item in the table.
                            // TODO: Find out if this resets the AUTO_INCREMENT number.
                            function clear$1(callback) {
                                var self = this;

                                var promise = new Promise$1(function(resolve, reject) {
                                    self.ready().then(function() {
                                        var dbInfo = self._dbInfo;
                                        dbInfo.db.transaction(function(t) {
                                            tryExecuteSql(t, dbInfo, 'DELETE FROM ' + dbInfo.storeName, [], function() {
                                                resolve();
                                            }, function(t, error) {
                                                reject(error);
                                            });
                                        });
                                    })["catch"](reject);
                                });

                                executeCallback(promise, callback);
                                return promise;
                            }

                            // Does a simple `COUNT(key)` to get the number of items stored in
                            // localForage.
                            function length$1(callback) {
                                var self = this;

                                var promise = new Promise$1(function(resolve, reject) {
                                    self.ready().then(function() {
                                        var dbInfo = self._dbInfo;
                                        dbInfo.db.transaction(function(t) {
                                            // Ahhh, SQL makes this one soooooo easy.
                                            tryExecuteSql(t, dbInfo, 'SELECT COUNT(key) as c FROM ' + dbInfo.storeName, [], function(t, results) {
                                                var result = results.rows.item(0).c;
                                                resolve(result);
                                            }, function(t, error) {
                                                reject(error);
                                            });
                                        });
                                    })["catch"](reject);
                                });

                                executeCallback(promise, callback);
                                return promise;
                            }

                            // Return the key located at key index X; essentially gets the key from a
                            // `WHERE id = ?`. This is the most efficient way I can think to implement
                            // this rarely-used (in my experience) part of the API, but it can seem
                            // inconsistent, because we do `INSERT OR REPLACE INTO` on `setItem()`, so
                            // the ID of each key will change every time it's updated. Perhaps a stored
                            // procedure for the `setItem()` SQL would solve this problem?
                            // TODO: Don't change ID on `setItem()`.
                            function key$1(n, callback) {
                                var self = this;

                                var promise = new Promise$1(function(resolve, reject) {
                                    self.ready().then(function() {
                                        var dbInfo = self._dbInfo;
                                        dbInfo.db.transaction(function(t) {
                                            tryExecuteSql(t, dbInfo, 'SELECT key FROM ' + dbInfo.storeName + ' WHERE id = ? LIMIT 1', [n + 1], function(t, results) {
                                                var result = results.rows.length ? results.rows.item(0).key : null;
                                                resolve(result);
                                            }, function(t, error) {
                                                reject(error);
                                            });
                                        });
                                    })["catch"](reject);
                                });

                                executeCallback(promise, callback);
                                return promise;
                            }

                            function keys$1(callback) {
                                var self = this;

                                var promise = new Promise$1(function(resolve, reject) {
                                    self.ready().then(function() {
                                        var dbInfo = self._dbInfo;
                                        dbInfo.db.transaction(function(t) {
                                            tryExecuteSql(t, dbInfo, 'SELECT key FROM ' + dbInfo.storeName, [], function(t, results) {
                                                var keys = [];

                                                for (var i = 0; i < results.rows.length; i++) {
                                                    keys.push(results.rows.item(i).key);
                                                }

                                                resolve(keys);
                                            }, function(t, error) {
                                                reject(error);
                                            });
                                        });
                                    })["catch"](reject);
                                });

                                executeCallback(promise, callback);
                                return promise;
                            }

                            // https://www.w3.org/TR/webdatabase/#databases
                            // > There is no way to enumerate or delete the databases available for an origin from this API.
                            function getAllStoreNames(db) {
                                return new Promise$1(function(resolve, reject) {
                                    db.transaction(function(t) {
                                        t.executeSql('SELECT name FROM sqlite_master ' + "WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], function(t, results) {
                                            var storeNames = [];

                                            for (var i = 0; i < results.rows.length; i++) {
                                                storeNames.push(results.rows.item(i).name);
                                            }

                                            resolve({
                                                db: db,
                                                storeNames: storeNames
                                            });
                                        }, function(t, error) {
                                            reject(error);
                                        });
                                    }, function(sqlError) {
                                        reject(sqlError);
                                    });
                                });
                            }

                            function dropInstance$1(options, callback) {
                                callback = getCallback.apply(this, arguments);

                                var currentConfig = this.config();
                                options = typeof options !== 'function' && options || {};
                                if (!options.name) {
                                    options.name = options.name || currentConfig.name;
                                    options.storeName = options.storeName || currentConfig.storeName;
                                }

                                var self = this;
                                var promise;
                                if (!options.name) {
                                    promise = Promise$1.reject('Invalid arguments');
                                } else {
                                    promise = new Promise$1(function(resolve) {
                                        var db;
                                        if (options.name === currentConfig.name) {
                                            // use the db reference of the current instance
                                            db = self._dbInfo.db;
                                        } else {
                                            db = openDatabase(options.name, '', '', 0);
                                        }

                                        if (!options.storeName) {
                                            // drop all database tables
                                            resolve(getAllStoreNames(db));
                                        } else {
                                            resolve({
                                                db: db,
                                                storeNames: [options.storeName]
                                            });
                                        }
                                    }).then(function(operationInfo) {
                                        return new Promise$1(function(resolve, reject) {
                                            operationInfo.db.transaction(function(t) {
                                                function dropTable(storeName) {
                                                    return new Promise$1(function(resolve, reject) {
                                                        t.executeSql('DROP TABLE IF EXISTS ' + storeName, [], function() {
                                                            resolve();
                                                        }, function(t, error) {
                                                            reject(error);
                                                        });
                                                    });
                                                }

                                                var operations = [];
                                                for (var i = 0, len = operationInfo.storeNames.length; i < len; i++) {
                                                    operations.push(dropTable(operationInfo.storeNames[i]));
                                                }

                                                Promise$1.all(operations).then(function() {
                                                    resolve();
                                                })["catch"](function(e) {
                                                    reject(e);
                                                });
                                            }, function(sqlError) {
                                                reject(sqlError);
                                            });
                                        });
                                    });
                                }

                                executeCallback(promise, callback);
                                return promise;
                            }

                            var webSQLStorage = {
                                _driver: 'webSQLStorage',
                                _initStorage: _initStorage$1,
                                _support: isWebSQLValid(),
                                iterate: iterate$1,
                                getItem: getItem$1,
                                setItem: setItem$1,
                                removeItem: removeItem$1,
                                clear: clear$1,
                                length: length$1,
                                key: key$1,
                                keys: keys$1,
                                dropInstance: dropInstance$1
                            };

                            function isLocalStorageValid() {
                                try {
                                    return typeof localStorage !== 'undefined' && 'setItem' in localStorage &&
                                        // in IE8 typeof localStorage.setItem === 'object'
                                        !!localStorage.setItem;
                                } catch (e) {
                                    return false;
                                }
                            }

                            function _getKeyPrefix(options, defaultConfig) {
                                var keyPrefix = options.name + '/';

                                if (options.storeName !== defaultConfig.storeName) {
                                    keyPrefix += options.storeName + '/';
                                }
                                return keyPrefix;
                            }

                            // Check if localStorage throws when saving an item
                            function checkIfLocalStorageThrows() {
                                var localStorageTestKey = '_localforage_support_test';

                                try {
                                    localStorage.setItem(localStorageTestKey, true);
                                    localStorage.removeItem(localStorageTestKey);

                                    return false;
                                } catch (e) {
                                    return true;
                                }
                            }

                            // Check if localStorage is usable and allows to save an item
                            // This method checks if localStorage is usable in Safari Private Browsing
                            // mode, or in any other case where the available quota for localStorage
                            // is 0 and there wasn't any saved items yet.
                            function _isLocalStorageUsable() {
                                return !checkIfLocalStorageThrows() || localStorage.length > 0;
                            }

                            // Config the localStorage backend, using options set in the config.
                            function _initStorage$2(options) {
                                var self = this;
                                var dbInfo = {};
                                if (options) {
                                    for (var i in options) {
                                        dbInfo[i] = options[i];
                                    }
                                }

                                dbInfo.keyPrefix = _getKeyPrefix(options, self._defaultConfig);

                                if (!_isLocalStorageUsable()) {
                                    return Promise$1.reject();
                                }

                                self._dbInfo = dbInfo;
                                dbInfo.serializer = localforageSerializer;

                                return Promise$1.resolve();
                            }

                            // Remove all keys from the datastore, effectively destroying all data in
                            // the app's key/value store!
                            function clear$2(callback) {
                                var self = this;
                                var promise = self.ready().then(function() {
                                    var keyPrefix = self._dbInfo.keyPrefix;

                                    for (var i = localStorage.length - 1; i >= 0; i--) {
                                        var key = localStorage.key(i);

                                        if (key.indexOf(keyPrefix) === 0) {
                                            localStorage.removeItem(key);
                                        }
                                    }
                                });

                                executeCallback(promise, callback);
                                return promise;
                            }

                            // Retrieve an item from the store. Unlike the original async_storage
                            // library in Gaia, we don't modify return values at all. If a key's value
                            // is `undefined`, we pass that value to the callback function.
                            function getItem$2(key, callback) {
                                var self = this;

                                key = normalizeKey(key);

                                var promise = self.ready().then(function() {
                                    var dbInfo = self._dbInfo;
                                    var result = localStorage.getItem(dbInfo.keyPrefix + key);

                                    // If a result was found, parse it from the serialized
                                    // string into a JS object. If result isn't truthy, the key
                                    // is likely undefined and we'll pass it straight to the
                                    // callback.
                                    if (result) {
                                        result = dbInfo.serializer.deserialize(result);
                                    }

                                    return result;
                                });

                                executeCallback(promise, callback);
                                return promise;
                            }

                            // Iterate over all items in the store.
                            function iterate$2(iterator, callback) {
                                var self = this;

                                var promise = self.ready().then(function() {
                                    var dbInfo = self._dbInfo;
                                    var keyPrefix = dbInfo.keyPrefix;
                                    var keyPrefixLength = keyPrefix.length;
                                    var length = localStorage.length;

                                    // We use a dedicated iterator instead of the `i` variable below
                                    // so other keys we fetch in localStorage aren't counted in
                                    // the `iterationNumber` argument passed to the `iterate()`
                                    // callback.
                                    //
                                    // See: github.com/mozilla/localForage/pull/435#discussion_r38061530
                                    var iterationNumber = 1;

                                    for (var i = 0; i < length; i++) {
                                        var key = localStorage.key(i);
                                        if (key.indexOf(keyPrefix) !== 0) {
                                            continue;
                                        }
                                        var value = localStorage.getItem(key);

                                        // If a result was found, parse it from the serialized
                                        // string into a JS object. If result isn't truthy, the
                                        // key is likely undefined and we'll pass it straight
                                        // to the iterator.
                                        if (value) {
                                            value = dbInfo.serializer.deserialize(value);
                                        }

                                        value = iterator(value, key.substring(keyPrefixLength), iterationNumber++);

                                        if (value !== void 0) {
                                            return value;
                                        }
                                    }
                                });

                                executeCallback(promise, callback);
                                return promise;
                            }

                            // Same as localStorage's key() method, except takes a callback.
                            function key$2(n, callback) {
                                var self = this;
                                var promise = self.ready().then(function() {
                                    var dbInfo = self._dbInfo;
                                    var result;
                                    try {
                                        result = localStorage.key(n);
                                    } catch (error) {
                                        result = null;
                                    }

                                    // Remove the prefix from the key, if a key is found.
                                    if (result) {
                                        result = result.substring(dbInfo.keyPrefix.length);
                                    }

                                    return result;
                                });

                                executeCallback(promise, callback);
                                return promise;
                            }

                            function keys$2(callback) {
                                var self = this;
                                var promise = self.ready().then(function() {
                                    var dbInfo = self._dbInfo;
                                    var length = localStorage.length;
                                    var keys = [];

                                    for (var i = 0; i < length; i++) {
                                        var itemKey = localStorage.key(i);
                                        if (itemKey.indexOf(dbInfo.keyPrefix) === 0) {
                                            keys.push(itemKey.substring(dbInfo.keyPrefix.length));
                                        }
                                    }

                                    return keys;
                                });

                                executeCallback(promise, callback);
                                return promise;
                            }

                            // Supply the number of keys in the datastore to the callback function.
                            function length$2(callback) {
                                var self = this;
                                var promise = self.keys().then(function(keys) {
                                    return keys.length;
                                });

                                executeCallback(promise, callback);
                                return promise;
                            }

                            // Remove an item from the store, nice and simple.
                            function removeItem$2(key, callback) {
                                var self = this;

                                key = normalizeKey(key);

                                var promise = self.ready().then(function() {
                                    var dbInfo = self._dbInfo;
                                    localStorage.removeItem(dbInfo.keyPrefix + key);
                                });

                                executeCallback(promise, callback);
                                return promise;
                            }

                            // Set a key's value and run an optional callback once the value is set.
                            // Unlike Gaia's implementation, the callback function is passed the value,
                            // in case you want to operate on that value only after you're sure it
                            // saved, or something like that.
                            function setItem$2(key, value, callback) {
                                var self = this;

                                key = normalizeKey(key);

                                var promise = self.ready().then(function() {
                                    // Convert undefined values to null.
                                    // https://github.com/mozilla/localForage/pull/42
                                    if (value === undefined) {
                                        value = null;
                                    }

                                    // Save the original value to pass to the callback.
                                    var originalValue = value;

                                    return new Promise$1(function(resolve, reject) {
                                        var dbInfo = self._dbInfo;
                                        dbInfo.serializer.serialize(value, function(value, error) {
                                            if (error) {
                                                reject(error);
                                            } else {
                                                try {
                                                    localStorage.setItem(dbInfo.keyPrefix + key, value);
                                                    resolve(originalValue);
                                                } catch (e) {
                                                    // localStorage capacity exceeded.
                                                    // TODO: Make this a specific error/event.
                                                    if (e.name === 'QuotaExceededError' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
                                                        reject(e);
                                                    }
                                                    reject(e);
                                                }
                                            }
                                        });
                                    });
                                });

                                executeCallback(promise, callback);
                                return promise;
                            }

                            function dropInstance$2(options, callback) {
                                callback = getCallback.apply(this, arguments);

                                options = typeof options !== 'function' && options || {};
                                if (!options.name) {
                                    var currentConfig = this.config();
                                    options.name = options.name || currentConfig.name;
                                    options.storeName = options.storeName || currentConfig.storeName;
                                }

                                var self = this;
                                var promise;
                                if (!options.name) {
                                    promise = Promise$1.reject('Invalid arguments');
                                } else {
                                    promise = new Promise$1(function(resolve) {
                                        if (!options.storeName) {
                                            resolve(options.name + '/');
                                        } else {
                                            resolve(_getKeyPrefix(options, self._defaultConfig));
                                        }
                                    }).then(function(keyPrefix) {
                                        for (var i = localStorage.length - 1; i >= 0; i--) {
                                            var key = localStorage.key(i);

                                            if (key.indexOf(keyPrefix) === 0) {
                                                localStorage.removeItem(key);
                                            }
                                        }
                                    });
                                }

                                executeCallback(promise, callback);
                                return promise;
                            }

                            var localStorageWrapper = {
                                _driver: 'localStorageWrapper',
                                _initStorage: _initStorage$2,
                                _support: isLocalStorageValid(),
                                iterate: iterate$2,
                                getItem: getItem$2,
                                setItem: setItem$2,
                                removeItem: removeItem$2,
                                clear: clear$2,
                                length: length$2,
                                key: key$2,
                                keys: keys$2,
                                dropInstance: dropInstance$2
                            };

                            var sameValue = function sameValue(x, y) {
                                return x === y || typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y);
                            };

                            var includes = function includes(array, searchElement) {
                                var len = array.length;
                                var i = 0;
                                while (i < len) {
                                    if (sameValue(array[i], searchElement)) {
                                        return true;
                                    }
                                    i++;
                                }

                                return false;
                            };

                            var isArray = Array.isArray || function(arg) {
                                return Object.prototype.toString.call(arg) === '[object Array]';
                            };

                            // Drivers are stored here when `defineDriver()` is called.
                            // They are shared across all instances of localForage.
                            var DefinedDrivers = {};

                            var DriverSupport = {};

                            var DefaultDrivers = {
                                INDEXEDDB: asyncStorage,
                                WEBSQL: webSQLStorage,
                                LOCALSTORAGE: localStorageWrapper
                            };

                            var DefaultDriverOrder = [DefaultDrivers.INDEXEDDB._driver, DefaultDrivers.WEBSQL._driver, DefaultDrivers.LOCALSTORAGE._driver];

                            var OptionalDriverMethods = ['dropInstance'];

                            var LibraryMethods = ['clear', 'getItem', 'iterate', 'key', 'keys', 'length', 'removeItem', 'setItem'].concat(OptionalDriverMethods);

                            var DefaultConfig = {
                                description: '',
                                driver: DefaultDriverOrder.slice(),
                                name: 'localforage',
                                // Default DB size is _JUST UNDER_ 5MB, as it's the highest size
                                // we can use without a prompt.
                                size: 4980736,
                                storeName: 'keyvaluepairs',
                                version: 1.0
                            };

                            function callWhenReady(localForageInstance, libraryMethod) {
                                localForageInstance[libraryMethod] = function() {
                                    var _args = arguments;
                                    return localForageInstance.ready().then(function() {
                                        return localForageInstance[libraryMethod].apply(localForageInstance, _args);
                                    });
                                };
                            }

                            function extend() {
                                for (var i = 1; i < arguments.length; i++) {
                                    var arg = arguments[i];

                                    if (arg) {
                                        for (var _key in arg) {
                                            if (arg.hasOwnProperty(_key)) {
                                                if (isArray(arg[_key])) {
                                                    arguments[0][_key] = arg[_key].slice();
                                                } else {
                                                    arguments[0][_key] = arg[_key];
                                                }
                                            }
                                        }
                                    }
                                }

                                return arguments[0];
                            }

                            var LocalForage = function() {
                                function LocalForage(options) {
                                    _classCallCheck(this, LocalForage);

                                    for (var driverTypeKey in DefaultDrivers) {
                                        if (DefaultDrivers.hasOwnProperty(driverTypeKey)) {
                                            var driver = DefaultDrivers[driverTypeKey];
                                            var driverName = driver._driver;
                                            this[driverTypeKey] = driverName;

                                            if (!DefinedDrivers[driverName]) {
                                                // we don't need to wait for the promise,
                                                // since the default drivers can be defined
                                                // in a blocking manner
                                                this.defineDriver(driver);
                                            }
                                        }
                                    }

                                    this._defaultConfig = extend({}, DefaultConfig);
                                    this._config = extend({}, this._defaultConfig, options);
                                    this._driverSet = null;
                                    this._initDriver = null;
                                    this._ready = false;
                                    this._dbInfo = null;

                                    this._wrapLibraryMethodsWithReady();
                                    this.setDriver(this._config.driver)["catch"](function() {});
                                }

                                // Set any config values for localForage; can be called anytime before
                                // the first API call (e.g. `getItem`, `setItem`).
                                // We loop through options so we don't overwrite existing config
                                // values.


                                LocalForage.prototype.config = function config(options) {
                                    // If the options argument is an object, we use it to set values.
                                    // Otherwise, we return either a specified config value or all
                                    // config values.
                                    if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
                                        // If localforage is ready and fully initialized, we can't set
                                        // any new configuration values. Instead, we return an error.
                                        if (this._ready) {
                                            return new Error("Can't call config() after localforage " + 'has been used.');
                                        }

                                        for (var i in options) {
                                            if (i === 'storeName') {
                                                options[i] = options[i].replace(/\W/g, '_');
                                            }

                                            if (i === 'version' && typeof options[i] !== 'number') {
                                                return new Error('Database version must be a number.');
                                            }

                                            this._config[i] = options[i];
                                        }

                                        // after all config options are set and
                                        // the driver option is used, try setting it
                                        if ('driver' in options && options.driver) {
                                            return this.setDriver(this._config.driver);
                                        }

                                        return true;
                                    } else if (typeof options === 'string') {
                                        return this._config[options];
                                    } else {
                                        return this._config;
                                    }
                                };

                                // Used to define a custom driver, shared across all instances of
                                // localForage.


                                LocalForage.prototype.defineDriver = function defineDriver(driverObject, callback, errorCallback) {
                                    var promise = new Promise$1(function(resolve, reject) {
                                        try {
                                            var driverName = driverObject._driver;
                                            var complianceError = new Error('Custom driver not compliant; see ' + 'https://mozilla.github.io/localForage/#definedriver');

                                            // A driver name should be defined and not overlap with the
                                            // library-defined, default drivers.
                                            if (!driverObject._driver) {
                                                reject(complianceError);
                                                return;
                                            }

                                            var driverMethods = LibraryMethods.concat('_initStorage');
                                            for (var i = 0, len = driverMethods.length; i < len; i++) {
                                                var driverMethodName = driverMethods[i];

                                                // when the property is there,
                                                // it should be a method even when optional
                                                var isRequired = !includes(OptionalDriverMethods, driverMethodName);
                                                if ((isRequired || driverObject[driverMethodName]) && typeof driverObject[driverMethodName] !== 'function') {
                                                    reject(complianceError);
                                                    return;
                                                }
                                            }

                                            var configureMissingMethods = function configureMissingMethods() {
                                                var methodNotImplementedFactory = function methodNotImplementedFactory(methodName) {
                                                    return function() {
                                                        var error = new Error('Method ' + methodName + ' is not implemented by the current driver');
                                                        var promise = Promise$1.reject(error);
                                                        executeCallback(promise, arguments[arguments.length - 1]);
                                                        return promise;
                                                    };
                                                };

                                                for (var _i = 0, _len = OptionalDriverMethods.length; _i < _len; _i++) {
                                                    var optionalDriverMethod = OptionalDriverMethods[_i];
                                                    if (!driverObject[optionalDriverMethod]) {
                                                        driverObject[optionalDriverMethod] = methodNotImplementedFactory(optionalDriverMethod);
                                                    }
                                                }
                                            };

                                            configureMissingMethods();

                                            var setDriverSupport = function setDriverSupport(support) {
                                                if (DefinedDrivers[driverName]) {
                                                    console.info('Redefining LocalForage driver: ' + driverName);
                                                }
                                                DefinedDrivers[driverName] = driverObject;
                                                DriverSupport[driverName] = support;
                                                // don't use a then, so that we can define
                                                // drivers that have simple _support methods
                                                // in a blocking manner
                                                resolve();
                                            };

                                            if ('_support' in driverObject) {
                                                if (driverObject._support && typeof driverObject._support === 'function') {
                                                    driverObject._support().then(setDriverSupport, reject);
                                                } else {
                                                    setDriverSupport(!!driverObject._support);
                                                }
                                            } else {
                                                setDriverSupport(true);
                                            }
                                        } catch (e) {
                                            reject(e);
                                        }
                                    });

                                    executeTwoCallbacks(promise, callback, errorCallback);
                                    return promise;
                                };

                                LocalForage.prototype.driver = function driver() {
                                    return this._driver || null;
                                };

                                LocalForage.prototype.getDriver = function getDriver(driverName, callback, errorCallback) {
                                    var getDriverPromise = DefinedDrivers[driverName] ? Promise$1.resolve(DefinedDrivers[driverName]) : Promise$1.reject(new Error('Driver not found.'));

                                    executeTwoCallbacks(getDriverPromise, callback, errorCallback);
                                    return getDriverPromise;
                                };

                                LocalForage.prototype.getSerializer = function getSerializer(callback) {
                                    var serializerPromise = Promise$1.resolve(localforageSerializer);
                                    executeTwoCallbacks(serializerPromise, callback);
                                    return serializerPromise;
                                };

                                LocalForage.prototype.ready = function ready(callback) {
                                    var self = this;

                                    var promise = self._driverSet.then(function() {
                                        if (self._ready === null) {
                                            self._ready = self._initDriver();
                                        }

                                        return self._ready;
                                    });

                                    executeTwoCallbacks(promise, callback, callback);
                                    return promise;
                                };

                                LocalForage.prototype.setDriver = function setDriver(drivers, callback, errorCallback) {
                                    var self = this;

                                    if (!isArray(drivers)) {
                                        drivers = [drivers];
                                    }

                                    var supportedDrivers = this._getSupportedDrivers(drivers);

                                    function setDriverToConfig() {
                                        self._config.driver = self.driver();
                                    }

                                    function extendSelfWithDriver(driver) {
                                        self._extend(driver);
                                        setDriverToConfig();

                                        self._ready = self._initStorage(self._config);
                                        return self._ready;
                                    }

                                    function initDriver(supportedDrivers) {
                                        return function() {
                                            var currentDriverIndex = 0;

                                            function driverPromiseLoop() {
                                                while (currentDriverIndex < supportedDrivers.length) {
                                                    var driverName = supportedDrivers[currentDriverIndex];
                                                    currentDriverIndex++;

                                                    self._dbInfo = null;
                                                    self._ready = null;

                                                    return self.getDriver(driverName).then(extendSelfWithDriver)["catch"](driverPromiseLoop);
                                                }

                                                setDriverToConfig();
                                                var error = new Error('No available storage method found.');
                                                self._driverSet = Promise$1.reject(error);
                                                return self._driverSet;
                                            }

                                            return driverPromiseLoop();
                                        };
                                    }

                                    // There might be a driver initialization in progress
                                    // so wait for it to finish in order to avoid a possible
                                    // race condition to set _dbInfo
                                    var oldDriverSetDone = this._driverSet !== null ? this._driverSet["catch"](function() {
                                        return Promise$1.resolve();
                                    }) : Promise$1.resolve();

                                    this._driverSet = oldDriverSetDone.then(function() {
                                        var driverName = supportedDrivers[0];
                                        self._dbInfo = null;
                                        self._ready = null;

                                        return self.getDriver(driverName).then(function(driver) {
                                            self._driver = driver._driver;
                                            setDriverToConfig();
                                            self._wrapLibraryMethodsWithReady();
                                            self._initDriver = initDriver(supportedDrivers);
                                        });
                                    })["catch"](function() {
                                        setDriverToConfig();
                                        var error = new Error('No available storage method found.');
                                        self._driverSet = Promise$1.reject(error);
                                        return self._driverSet;
                                    });

                                    executeTwoCallbacks(this._driverSet, callback, errorCallback);
                                    return this._driverSet;
                                };

                                LocalForage.prototype.supports = function supports(driverName) {
                                    return !!DriverSupport[driverName];
                                };

                                LocalForage.prototype._extend = function _extend(libraryMethodsAndProperties) {
                                    extend(this, libraryMethodsAndProperties);
                                };

                                LocalForage.prototype._getSupportedDrivers = function _getSupportedDrivers(drivers) {
                                    var supportedDrivers = [];
                                    for (var i = 0, len = drivers.length; i < len; i++) {
                                        var driverName = drivers[i];
                                        if (this.supports(driverName)) {
                                            supportedDrivers.push(driverName);
                                        }
                                    }
                                    return supportedDrivers;
                                };

                                LocalForage.prototype._wrapLibraryMethodsWithReady = function _wrapLibraryMethodsWithReady() {
                                    // Add a stub for each driver API method that delays the call to the
                                    // corresponding driver method until localForage is ready. These stubs
                                    // will be replaced by the driver methods as soon as the driver is
                                    // loaded, so there is no performance impact.
                                    for (var i = 0, len = LibraryMethods.length; i < len; i++) {
                                        callWhenReady(this, LibraryMethods[i]);
                                    }
                                };

                                LocalForage.prototype.createInstance = function createInstance(options) {
                                    return new LocalForage(options);
                                };

                                return LocalForage;
                            }();

                            // The actual localForage object that we expose as a module or via a
                            // global. It's extended by pulling in one of our other libraries.


                            var localforage_js = new LocalForage();

                            module.exports = localforage_js;

                        }, {
                            "3": 3
                        }]
                    }, {}, [4])(4)
                });

                /* WEBPACK VAR INJECTION */
            }.call(this, __webpack_require__( /*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

            /***/
        }),

    /***/
    "./node_modules/webpack/buildin/global.js":
        /*!***********************************!*\
          !*** (webpack)/buildin/global.js ***!
          \***********************************/
        /*! no static exports found */
        /***/
        (function(module, exports) {

            var g;

            // This works in non-strict mode
            g = (function() {
                return this;
            })();

            try {
                // This works if eval is allowed (see CSP)
                g = g || new Function("return this")();
            } catch (e) {
                // This works if the window reference is available
                if (typeof window === "object") g = window;
            }

            // g can still be undefined, but nothing to do about it...
            // We return undefined, instead of nothing here, so it's
            // easier to handle this case. if(!global) { ...}

            module.exports = g;


            /***/
        }),

    /***/
    "./src/config.js":
        /*!***********************!*\
          !*** ./src/config.js ***!
          \***********************/
        /*! no static exports found */
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            var Config = {
                jsServer: "//cdnt.netcoresmartech.com/webactivity/",
                pjsServer: "//cdnt.netcoresmartech.com/webp/",
                bpnServerUrl: "//twa.netcoresmartech.com/",
                serverUrl: "//twa.netcoresmartech.com/",
                configUrl: "//wdc.netcoresmartech.com/",
                axisUrl: "//axs.netcoresmartech.com/",
                formUrl: "//twa.netcoresmartech.com/",
                templateUrl: "//wdc.netcoresmartech.com/",
                cdnTemplateUrl: "//cdndc.netcoresmartech.com/",
                boxxApiServerUrl: "//use1-loki.boxx.ai/",
                boxxApiServerUrlIDC: "//loki.boxx.ai/",
                dynamicTemplateUrl: "//preprod-psegment.netcoresmartech.com/dynamic_template?",
                formPath: "form",
                dispatchPath: "dispatch",
                version: "V2",
                apnsEndPoint: "https://tw2.netcore.co.in/apns",
                pCookieHandle: "__stp",
                sCookieHandle: "__sts",
                decodeKey: "SXGWLZPDOKFIVUHJYTQBNMACERxswgzldpkoifuvjhtybqmncare0159378264",
                pCookieExpiryTime: "17280",
                sCookieExpiryTime: ".5",
                adtechServer: "//wdc.netcoresmartech.com/",
                mediamathapi: "//pixel.mathtag.com/sync/js",
                revex: "//sync.atomex.net/getuid?ag=UNKNOWN&cb=",
                dpcallbackpath: "//wdc.netcoresmartech.com/dpcallback",
                csyncpage: "smtsync",
                adtpartner: "rvx",
                boxxJS: "https://js.boxx.ai/js_init/?",
                editor: "//cdnt.netcoresmartech.com/webeditor/",
                wpCampaignContent: "//wdc.netcoresmartech.com/template?",
                flickrTime: "1500",
                gamifyJS: "//cdnt.netcoresmartech.com/smartech_gamifyv4.js",
                webSegment: "//psegment.netcoresmartech.com/user_exists?",
                errorServer: "//wdc.netcoresmartech.com/",
                webpAttribute: "//att.netcoresmartech.com/get_attributes_bywebguid?",
                errorUrl: "//wdc.netcoresmartech.com/",
                errorPath: "js_error",
                systemActApi: "//cdnt.netcoresmartech.com/system_activity.json",
                hanselJs: "//cdn-sdk.hansel.io/web/8.4.0/hansel.min.js",
                hanselCss: "//cdn-sdk.hansel.io/web/8.4.0/hansel.min.css",
                hanselGetData: "//ujm.hansel.io/ujm/v1/data/<os>/<app_id>/<rv>/",
                hanselPopulateData: "//sdk.hansel.io/dashboard/populatedata/v1/<app_id>",
                hanselTdAuth: "//sdk.hansel.io/dashboard/td/verify",
                hanselInitSdk: "//sdk.hansel.io/dashboard/sdk/v1/init/<os>/<app_id>/<rv>",
                hanselReqSesid: "//sdk.hansel.io/dashboard/visualizer/request_session",
                hanselSocket: "wss://websocket-visualizer.hansel.io"
            };
            module.exports = Config;

            /***/
        }),

    /***/
    "./src/globals.js":
        /*!************************!*\
          !*** ./src/globals.js ***!
          \************************/
        /*! no static exports found */
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            /**
             * This class is initialisation of all the globle variables
             * @class Globals
             * @version 1.0
             * @author smartech
             */
            var Globals = {
                trackerQ: {
                    tracker: {
                        transport: "XHR"
                    }
                },
                userdata: {},
                tracking: {
                    expires: 7
                },
                queue: false,
                globalQueue: [],
                notificationQueue: [],
                notificationConversion: [],
                prevPageSent: 1,
                enableQueryParam: 1,
                sessionData: {
                    sts: null,
                    pts: null
                },
                serverTimeZone: "Asia/Culcutta",
                pCookiesKeys: ["uuid", "visit", "ck", "cpcs", "attr"],
                sCookiesKeys: ["cpci", "cpcm", "pet", "pPet", "set", "tx", "pTx", "sid", "url", "pUrl", "ct", "mid", "vid"],
                localStorageKeys: ["__ls", "__tz", "__stn", "__uuid", "__reload", "__stattpd"],
                sessionStorageKeys: ["__upvc", "__pvc", "__stn", "__uurl", "__stauto", "npv", "__fos", "__la", "__cg", "__stls"],
                leaveIntent: {
                    divId: "st_leave_intent",
                    imgId: "st_leave_intent_img"
                },
                notification: {
                    viewFrame: "st_preview_frame_",
                    boxIds: ["1", "3", "4"],
                    bannerIds: ["1"],
                    stickyIds: ["2"],
                    modalIds: ["3"],
                    fullScreenIds: ["4"],
                    events: {
                        open: 31,
                        close: 33,
                        click: 32,
                        subscribe: 34
                    },
                    dom: {
                        stickyId: "st_notification_sticky",
                        boxId: "st_notification_box",
                        bannerId: "st_notification_banner",
                        modalId: "st_notification_modal",
                        fullScreenId: "st_notification_fullscreen",
                        close: "close",
                        ncclose: "smt-close",
                        click: ["call_to_action", "call_to_action-2", "NC_CTA_ONE", "NC_CTA_TWO", "NC_CTA_THREE", "NC_CTA_FOUR", "NC_CTA_FIVE", "NC_image_only", "NC_background_image"],
                        upArrow: "up_arrow",
                        stSubscribeBox: "st_subscribeBox",
                        overlayId: "smt-overlay",
                        overlayEnable: 0
                    },
                    storage: {
                        key: "__stn"
                    },
                    controlgroup: {
                        key: "__cg",
                        check: "cgcheck"
                    }
                },
                configurationMap: {},
                conversionIdentifiers: {},
                automation: {
                    events: {
                        success: 17
                    },
                    storage: {
                        key: "__stauto"
                    }
                },
                crawllers: ["Googlebot/2.1;"],
                bpn: {
                    browsers: ["firefox", "chrome"],
                    "class": "__st_preview_frame_bpn",
                    id: "__st_fancy_popup",
                    overlayId: "__st_overlay_popup",
                    overlayClass: "__st_preview_overlay_bpn",
                    storage: {
                        deliver: "__fod",
                        seen: "__fos"
                    },
                    button: {
                        yes: "__st_bpn_yes",
                        no: "__st_bpn_no",
                        cross: "__st_bpn_cross"
                    },
                    events: {
                        fancyDeliver: 7,
                        fancyAllow: 8,
                        fancyBlock: 9
                    },
                    expires: 2 * 24,
                    vapidExpiryTime: 24 * 365 * 10,
                    vapidDelimiter: "~~~",
                    vapidGwSource: 11,
                    safariGwSource: 3
                },
                wnconfig: {
                    cookie: {
                        name: "__stbpnenable",
                        success: {
                            value: 1,
                            expires: 24
                        },
                        fail: {
                            value: 0,
                            expires: 7
                        }
                    },
                    storage: {
                        name: "smartech_wnconfig"
                    }
                },
                webviewconfig: {
                    storage: {
                        name: "__webviewconfig",
                        actmap: "__smtactmap"
                    }
                },
                regex: {
                    mobile: /^[0-9]{5,17}$/,
                    email: /^[_a-z0-9][_a-z0-9-\.]*(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,25})$/,
                    blank: /^\s*$/,
                    freeflow: /^[a-zA-Z0-9-_/\s/]+$/
                },
                freeflow: {
                    keysLimit: 128,
                    errors: {
                        invalidEventName: "Disallowed charactors given for event name.",
                        exceedMaxKeys: "Keys given exceeds max limit."
                    }
                },
                errors: {
                    invalidMobile: "Enter a valid mobile number.",
                    invalidEmail: "Enter a valid email address.",
                    blankInput: "Enter a valid "
                },
                adtechconfig: {
                    creds: {
                        username: "netcore",
                        password: "netcore@123"
                    },
                    flag: {
                        name: "__stadsync",
                        expires: 7 * 24
                    },
                    storage: {
                        name: "__staid"
                    }
                },
                idb: {
                    dbname: "smartech",
                    version: 2,
                    storeNames: ["attribute", "activity"],
                    keyPath: ["identity", "timestamp"],
                    maxCount: {
                        day: 7,
                        record: 300
                    }
                },
                data: {},
                activity: {
                    check: false
                },
                dispatchQueue: false,
                referalConfig: {
                    refKey: "ref",
                    domains: ["google", "facebook"]
                },
                lastScrollVal: 0,
                wp: {
                    events: {
                        publish: 96,
                        click: 97
                    },
                    cg: {
                        check: "new"
                    },
                    "class": {
                        click: "__st_wp_click",
                        element: "__st_wp"
                    }
                },
                attPayload: {
                    key: "__stattpd",
                    prefix: "att"
                },
                idc: {
                    key: "__smtidc"
                },
                partners: {
                    hanselKey: "__ishanselenabled"
                },
                crossAssetStitching: {
                    key: "__cas",
                    iframeId: "cross-asset-syncing"
                },
                wmActivityRules: {
                    ALL: "all",
                    ANY: "any",
                    LATEST: "latest"
                },
                freqCappingKeys: {
                    webp: "__webpfreq",
                    webm: "__webmfreq"
                },
                unbxdTrackingCookie: "unbxd.netcoreId"
            };
            module.exports = Globals;

            /***/
        }),

    /***/
    "./src/libs/common.js":
        /*!****************************!*\
          !*** ./src/libs/common.js ***!
          \****************************/
        /*! no static exports found */
        /***/
        (function(module, exports, __webpack_require__) {

            var Globals = __webpack_require__( /*! ../globals */ "./src/globals.js");
            var Dom = __webpack_require__( /*! ./dom */ "./src/libs/dom.js");
            var Common = {
                getUser: function getUser() {
                    var userKey = Dom.getFromStorage(sessionStorage, "ck");
                    return userKey;
                },
                /**
                 * This function returns idc from Globals
                 * @return {Globals.userdata.idc|String}
                 */
                getIdc: function getIdc() {
                    var idc = Dom.getFromStorage(sessionStorage, Globals.idc.key);
                    return idc || "";
                },
                /**
                 * This function returns registered site id
                 * @return {Globals.userdata.site_id|String}
                 */
                getSite: function getSite() {
                    return Dom.getFromStorage(localStorage, "__stsiteid") || "";
                },
                setCustomer: function setCustomer(customerKey) {
                    Globals.userdata.customer_key = customerKey;
                },
                getCustomer: function getCustomer() {
                    return Globals.userdata.customer_key || "";
                },
                setTransport: function setTransport(transport) {
                    Globals.trackerQ.tracker.transport = transport;
                },
                getTransport: function getTransport() {
                    return Globals.trackerQ.tracker.transport;
                },
                setPrevPageSent: function setPrevPageSent(value) {
                    Globals.prevPageSent = value;
                },
                getPrevPageSent: function getPrevPageSent() {
                    return Globals.prevPageSent || 0;
                },
                setUuid: function setUuid(uuid) {
                    Globals.userdata.uuid = uuid;
                },
                getUuid: function getUuid() {
                    return Globals.userdata.uuid || "";
                },
                /**
                 * This function sets user GDPR status
                 */
                setOptout: function setOptout() {
                    Globals.userdata.optout = true;
                },
                /**
                 * This function returns user GDPR status
                 * @return {Globals.userdata.optout|String}
                 */
                getOptout: function getOptout() {
                    return Globals.userdata.optout || "";
                },
                /**
                 * This function returns if user is identified
                 * @return {boolean}
                 */
                isIdentified: function isIdentified() {
                    if (this.getCustomer()) {
                        return true;
                    }
                    return false;
                },
                blockedInternalEvents: [7, "7", "bpn opt-in intent view", 8, "8", "bpn opt-in intent allow", 9, "9", "bpn opt-in intent block", 10, "10", "subscribe for push - register event", 11, "11", "unsubscribe for push", 12, "12", "push notification delivered", 13, "13", "push notification opened/clicked", 14, "14", "push notification dismissed", 17, "17", "automation satisfied event", 20, "20", "first app launch", 21, "21", "app launch", 22, "22", "login", 23, "23", "logout", 24, "24", "app uninstall", 25, "25", "signup /register for the website or app", 26, "26", "device details updated", 31, "31", "onsite/inapp notification shown", 32, "32", "onsite/inapp notification click", 33, "33", "onsite/inapp notification closed", 40, "40", "profile push", 41, "41", "in-app message viewed", 42, "42", "in-app message clicked", 43, "43", "in-app message dismissed", 44, "44", "inbox message delivered", 45, "45", "inbox message viewed", 46, "46", "inbox message clicked", 47, "47", "inbox message dismissed", 63, "63", "nudge shown", 64, "64", "nudge dismissed", 65, "65", "nudge branch tracker", 66, "66", "nudge not shown", 70, "70", "user opt in tracking", 71, "71", "user opt out tracking", 72, "72", "user opt in push notification", 73, "73", "user opt out push notification", 74, "74", "user opt in in-app messages", 75, "75", "user opt out in-app messages", 80, "80", "app installed", 81, "81", "app updated", 82, "82", "app crashed", 83, "83", "app reinstall", 84, "84", "user enabled push notification", 85, "85", "user disabled push notification", 86, "86", "push notification token generated", 87, "87", "push notification token failed", 88, "88", "push notification token refreshed", 89, "89", "location fetch permission allowed", 90, "90", "location fetch permission denied", 91, "91", "user entered geofence", 92, "92", "user dwelled in geofence location", 93, "93", "user exited geofence", 99, "99", "device data dump event"]
            };
            module.exports = Common;

            /***/
        }),

    /***/
    "./src/libs/dom.js":
        /*!*************************!*\
          !*** ./src/libs/dom.js ***!
          \*************************/
        /*! no static exports found */
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            var Globals = __webpack_require__( /*! ../globals */ "./src/globals.js");
            var Functions = __webpack_require__( /*! ./functions */ "./src/libs/functions.js");
            var Dom = {
                /**
                 * This function returns cookie value for the given key
                 * @param {string} cookieHandle
                 * @return {Array|Object|String}
                 */
                fetchCookie: function fetchCookie(cookieHandle) {
                    cookieHandle = cookieHandle ? cookieHandle : "__stp";
                    var sessionData = "";
                    var name = cookieHandle + "=";
                    var ca = document.cookie.split(";");
                    for (var i = 0; i < ca.length; i++) {
                        var c = ca[i];
                        while (c.charAt(0) == " ") {
                            c = c.substring(1);
                        }
                        if (c.indexOf(name) == 0) {
                            sessionData = c.substring(name.length, c.length);
                            if (sessionData) {
                                try {
                                    if (this.isBase64(sessionData)) {
                                        // new changes for base64 encoded cookie
                                        sessionData = JSON.parse(atob(sessionData));
                                    } else {
                                        // backward compatibility
                                        sessionData = JSON.parse(sessionData);
                                    }
                                } catch (e) {
                                    // do nothing
                                }
                            }
                        }
                    }
                    return sessionData;
                },
                isBase64: function isBase64(str) {
                    if (str === "" || str.trim() === "") {
                        return false;
                    }
                    try {
                        return btoa(atob(str)) == str;
                    } catch (err) {
                        return false;
                    }
                },
                deleteCookie: function deleteCookie(cookieHandle, domain) {
                    if (domain) {
                        var path = "path=/;domain=." + domain;
                        var cookieValue = cookieHandle + "=; " + path + "; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
                        document.cookie = cookieValue;
                    }
                },
                /**
                 * This function writes key value pair to cookies with given expiry time
                 * @param {string} cvalue
                 * @param {string} cookieHandle
                 * @param {double|int} exhrs
                 * @param {null|string} domain
                 */
                writeCookie: function writeCookie(cvalue, cookieHandle, exhrs, domain) {
                    var expires = "";
                    var path = "path=/;";
                    if (domain) {
                        path = "path=/;domain=." + domain;
                    }

                    // going forward encoding all cookie values to base64 for sql injection issue
                    cvalue = btoa(JSON.stringify(cvalue));
                    if (exhrs) {
                        var d = new Date();
                        d.setTime(d.getTime() + exhrs * 60 * 60 * 1000);
                        expires = "expires=" + d.toUTCString();
                    }
                    var coockieValue = cookieHandle + "=" + cvalue + "; " + path + "; " + expires;
                    document.cookie = coockieValue;
                },
                /**
                 * Returns current domain protocol
                 * @return {DOMString|window.location.protocol}
                 */
                getProtocol: function getProtocol() {
                    return window.location.protocol;
                },
                /**
                 * Return only host url
                 * @return {DOMString|String.host}
                 */
                getCurrentHost: function getCurrentHost() {
                    return window.location.protocol + "//" + window.location.host;
                },
                /**
                 * Return full url or only path name
                 * @param {boolean} path
                 * @return {window.location.pathname|document.URL}
                 */
                getCurrentUrl: function getCurrentUrl(path) {
                    if (path) {
                        var url = window.location.pathname;
                        if (Globals.enableQueryParam) {
                            url += window.location.search;
                        }
                        return url;
                    }
                    return document.URL;
                },
                /**
                 * Returns url including query params
                 * @return {window.location.pathname|DOMString}
                 */
                getCurrentUrlWithQuery: function getCurrentUrlWithQuery() {
                    var url = window.location.href;
                    return url;
                },
                /**
                 * Return current title
                 * @return {window.document.title|Document.title}
                 */
                getCurrentTitle: function getCurrentTitle() {
                    return document.title;
                },
                /**
                 * Return referal url
                 * @return {document.referrer|Node.referrer|Document.referrer|String}
                 */
                getReferalUrl: function getReferalUrl() {
                    return document.referrer || "";
                },
                /**
                 * Redirects user to the given url
                 * @param {string} url
                 * @param {string} target
                 */
                redirect: function redirect(url, target) {
                    var redirectURL;
                    /**
                     * If url supplied is invalid, it is considered as path
                     * and is appended to the origin of the tab
                     */
                    try {
                        redirectURL = new URL(url);
                    } catch (e) {
                        redirectURL = new URL("".concat(location.origin).concat(url));
                    }
                    if (url && target) {
                        window.open(redirectURL, target);
                    } else if (url) {
                        window.open(redirectURL, "_self");
                    }
                },
                /**
                 * This function set data to storage and in case of private sets data to cookie
                 * @param {string} storage
                 * @param {string} key
                 * @param {string} value
                 */
                setToStorage: function setToStorage(storage, key, value) {
                    try {
                        storage.setItem(key, value);
                    } catch (e) {
                        var exhrs = 0.5;
                        if (Functions.inArray(Globals.localStorageKeys, key)) {
                            exhrs = 2 * 24 * 30 * 12;
                        }
                        this.writeCookie(value, key, exhrs);
                    }
                },
                /**
                 * This function fetches data from storage and in case of private fetches from cookie for a given key
                 * @param {String} storage
                 * @param {string} key
                 * @return {Array|Object|String}
                 */
                getFromStorage: function getFromStorage(storage, key) {
                    var value;
                    value = storage.getItem(key);
                    if (!value) {
                        value = this.fetchCookie(key);
                    }
                    return value || null;
                },
                /**
                 * Flushes value from storage for given key or every thing if not given
                 * @param {string} key
                 * @param {Object} storage
                 */
                flushStorage: function flushStorage(key, storage) {
                    if (key && storage) {
                        storage.removeItem(key);
                        return;
                    }
                    this.flushLocalStorage();
                    this.flushSessionStorage();
                },
                flushLocalStorage: function flushLocalStorage() {
                    var lsKeys = Globals.localStorageKeys;
                    for (var index in lsKeys) {
                        if (lsKeys[index]) {
                            localStorage.removeItem(lsKeys[index]);
                        }
                    }
                },
                flushSessionStorage: function flushSessionStorage() {
                    var ssKeys = Globals.sessionStorageKeys;
                    for (var index in ssKeys) {
                        if (ssKeys[index]) {
                            sessionStorage.removeItem(ssKeys[index]);
                        }
                    }
                },
                /**
                 * creates image tag with given source and height and width
                 * @param {string} imgId
                 * @param {int} size
                 * @param {string} src
                 * @return {Dom.getImgTag.img|Element}
                 */
                getImgTag: function getImgTag(imgId, size, src) {
                    var img = document.createElement("img");
                    img.id = imgId;
                    img.height = size;
                    img.width = size;
                    img.src = src;
                    return img;
                },
                /**
                 * Inserts element to the top of given parent element
                 * @param {object} parent
                 * @param {string} content
                 * @param {string} containerId
                 * @return {Boolean}
                 */
                prependAtTop: function prependAtTop(parent, content, containerId) {
                    var container = document.createElement("div");
                    container.id = containerId;
                    container.setAttribute("smtMsgId", "smtMessage");
                    var parentContainer = document.getElementsByTagName(parent)[0];
                    parentContainer.insertBefore(container, parentContainer.firstChild);
                    if (content) {
                        container.innerHTML = content;
                    }
                    return container;
                },
                appendAtBottom: function appendAtBottom(parent, content, containerId) {
                    var container = document.createElement("div");
                    container.id = containerId;
                    container.setAttribute("smtMsgId", "smtMessage");
                    var parentContainer = document.getElementsByTagName(parent)[0];
                    parentContainer.appendChild(container);
                    container.innerHTML = content;
                    return true;
                },
                /**
                 * Pushes given html to iFrame
                 * @param {string} className
                 * @param {type} html
                 * @param {type}  className2
                 * @return {Element.contentWindow.document|Dom.pushHtmlToIframe.iFrame}
                 */
                pushHtmlToIframe: function pushHtmlToIframe(className, html, className2) {
                    if (!className2) {
                        className2 = "";
                    }
                    try {
                        var iFrameId = document.getElementsByClassName(className)[0];
                        if (!iFrameId) {
                            iFrameId = document.getElementsByClassName(className2)[0];
                        }
                        var isChrome = navigator.userAgent.indexOf("Chrome/") !== -1 || navigator.userAgent.match("CriOS");
                        if (isChrome) {
                            // Changes from PEDS-5286
                            var iFrame = iFrameId.contentWindow.document;
                            iFrame.body.innerHTML = html;
                            // Since scripts inside innerHtml do not run,
                            // the below code creates script again from old scripts to make it work
                            Array.from(iFrame.querySelectorAll("script")).forEach(function(oldScript) {
                                var newScript = document.createElement("script");
                                Array.from(oldScript.attributes).forEach(function(attr) {
                                    return newScript.setAttribute(attr.name, attr.value);
                                });
                                newScript.appendChild(document.createTextNode(oldScript.innerHTML));
                                oldScript.parentNode.replaceChild(newScript, oldScript);
                            });
                            iFrame = this.assignLocPerValues(iFrame);
                            return iFrame;
                        } else {
                            // pre PEDS-5286 changes
                            var _iFrame = iFrameId.contentWindow.document;
                            _iFrame.open();
                            _iFrame.write(html);
                            _iFrame.close();
                            _iFrame = this.assignLocPerValues(_iFrame);
                            return _iFrame;
                        }
                    } catch (e) {
                        console.info("dom Error occured");
                    }
                },
                assignLocPerValues: function assignLocPerValues(iFrame) {
                    var index;
                    var inputs = iFrame.getElementsByTagName("input");
                    for (index = 0; index < inputs.length; ++index) {
                        var tagType = inputs[index].getAttribute("type");
                        if (tagType === "text") {
                            var wmValue = inputs[index].getAttribute("wmvalue");
                            if (!wmValue) {
                                // to make HTML5 compliance, using data-* from now onwards - SMT-16469
                                wmValue = inputs[index].getAttribute("data-wmvalue");
                            }
                            if (wmValue) {
                                inputs[index].setAttribute("value", wmValue);
                            }
                        }
                    }
                    return iFrame;
                },
                /**
                 * Applies given css properties to given html elements
                 * @param {object} container
                 * @param {object} css
                 * @return {undefined}
                 */
                applyCss: function applyCss(container, css) {
                    for (var property in css) {
                        if (css[property]) {
                            container.style[property] = css[property];
                        }
                    }
                },
                getElement: function getElement(elementId, doc) {
                    if (!doc) {
                        doc = document;
                    }
                    var element = doc.getElementById(elementId);
                    return element;
                },
                /**
                 * Returns all the nodes of a class
                 * @param {string} className
                 * @param {type}  dom
                 * @return {NodeList}
                 */
                getElementsByClass: function getElementsByClass(className, dom) {
                    var elements = dom.getElementsByClassName(className);
                    return elements;
                },
                /**
                 * Removes given iFrame from the dom
                 * @param {object} iFrame
                 */
                removeElement: function removeElement(iFrame) {
                    iFrame.parentNode.removeChild(iFrame);
                },
                /**
                 * Insert template elemnet to the dom
                 * @param {object} json
                 * @param {string} pushDownWebpage
                 * @return {type}
                 */
                insertWebmessageTemplate: function insertWebmessageTemplate(json, pushDownWebpage) {
                    var type = "box";
                    if (Functions.inArray(Globals.notification.stickyIds, json.layout_type)) {
                        type = "sticky";
                        if (pushDownWebpage === "1") {
                            Dom.prependAtTop("body", json.iframe, Globals.notification.dom.stickyId);
                        } else {
                            Dom.appendAtBottom("body", json.iframe, Globals.notification.dom.stickyId);
                        }
                    } else if (Functions.inArray(Globals.notification.bannerIds, json.layout_type)) {
                        type = "banner";
                        Dom.appendAtBottom("body", json.iframe, Globals.notification.dom.bannerId);
                    } else if (Functions.inArray(Globals.notification.modalIds, json.layout_type)) {
                        type = "modal";
                        Dom.appendAtBottom("body", json.iframe, Globals.notification.dom.modalId);
                    } else if (Functions.inArray(Globals.notification.fullScreenIds, json.layout_type)) {
                        type = "fullscreen";
                        Dom.appendAtBottom("body", json.iframe, Globals.notification.dom.fullScreenId);
                    } else {
                        Dom.appendAtBottom("body", json.iframe, Globals.notification.dom.boxId);
                    }
                    return type;
                },
                /**
                 * Removes given iFrame from the dom
                 * @param {string} elementId
                 * @param {type} doc
                 */
                removeElementById: function removeElementById(elementId, doc) {
                    try {
                        if (!doc) {
                            doc = document;
                        }
                        var elem = document.getElementById(elementId);
                        if (elem) {
                            document.getElementById(elementId).remove();
                        }
                    } catch (error) {
                        console.log("Dom error occured");
                    }
                },
                /**
                 * Return only host
                 * @return {DOMString|String.host}
                 */
                getCurrentHostName: function getCurrentHostName() {
                    return window.location.host;
                },
                createStyleTag: function createStyleTag(css) {
                    var head = document.head || document.getElementsByTagName("head")[0];
                    var style = document.createElement("style");
                    head.appendChild(style);
                    style.type = "text/css";
                    style.appendChild(document.createTextNode(css));
                },
                /**
                 * This function sets all attributes to given dome element
                 * @param {Object} domElement
                 * @param {Object} attrs
                 */
                setAttributes: function setAttributes(domElement, attrs) {
                    for (var key in attrs) {
                        if (attrs[key]) {
                            domElement.setAttribute(key, attrs[key]);
                        }
                    }
                },
                /**
                 * This function takes input and pushes to smartech q
                 * @param {Object} data
                 */
                pushToQ: function pushToQ(data) {
                    if (data && data !== "") {
                        var qdata = this.getFromStorage(localStorage, "__stq") || "[]";
                        var q = JSON.parse(qdata);
                        q.push(data);
                        console.log(q);
                        this.setToStorage(localStorage, "__stq", JSON.stringify(q));
                    }
                }
            };
            module.exports = Dom;

            /***/
        }),

    /***/
    "./src/libs/functions.js":
        /*!*******************************!*\
          !*** ./src/libs/functions.js ***!
          \*******************************/
        /*! no static exports found */
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            /**
             * This class should not require any function and all the independent functions should be declared
             */
            var Functions = {
                /**
                 * check if given value exists in given array
                 * @param {array} heyStick
                 * @param {string} needle
                 * @return {boolean}
                 */
                inArray: function inArray(heyStick, needle) {
                    if (this.getLength(heyStick) === 0) {
                        return false;
                    }
                    if (heyStick.indexOf(needle) === -1) {
                        return false;
                    }
                    return true;
                },
                /**
                 * Return the length of an object
                 * @param {Object} obj
                 * @return {Number}
                 */
                getLength: function getLength(obj) {
                    var size = 0;
                    for (var key in obj) {
                        if (obj.hasOwnProperty(key)) {
                            size++;
                        }
                    }
                    return size;
                },
                getParentDomain: function getParentDomain(domain) {
                    var splitArr = domain.split(".");
                    var arrLen = splitArr.length;
                    if (arrLen > 0) {
                        return splitArr[0];
                    }
                    return false;
                }
            };
            module.exports = Functions;

            /***/
        }),

    /***/
    "./src/libs/utils.js":
        /*!***************************!*\
          !*** ./src/libs/utils.js ***!
          \***************************/
        /*! no static exports found */
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            /**
             * This class contains all the common methods
             * @author smartech
             * @class Utils
             * @version 1.0
             */
            function _slicedToArray(arr, i) {
                return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
            }

            function _nonIterableRest() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }

            function _unsupportedIterableToArray(o, minLen) {
                if (!o) return;
                if (typeof o === "string") return _arrayLikeToArray(o, minLen);
                var n = Object.prototype.toString.call(o).slice(8, -1);
                if (n === "Object" && o.constructor) n = o.constructor.name;
                if (n === "Map" || n === "Set") return Array.from(o);
                if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
            }

            function _arrayLikeToArray(arr, len) {
                if (len == null || len > arr.length) len = arr.length;
                for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
                return arr2;
            }

            function _iterableToArrayLimit(arr, i) {
                var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
                if (null != _i) {
                    var _s, _e, _x, _r, _arr = [],
                        _n = !0,
                        _d = !1;
                    try {
                        if (_x = (_i = _i.call(arr)).next, 0 === i) {
                            if (Object(_i) !== _i) return;
                            _n = !1;
                        } else
                            for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
                    } catch (err) {
                        _d = !0, _e = err;
                    } finally {
                        try {
                            if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
                        } finally {
                            if (_d) throw _e;
                        }
                    }
                    return _arr;
                }
            }

            function _arrayWithHoles(arr) {
                if (Array.isArray(arr)) return arr;
            }

            function _typeof(obj) {
                "@babel/helpers - typeof";
                return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
                    return typeof obj;
                } : function(obj) {
                    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                }, _typeof(obj);
            }
            var Config = __webpack_require__( /*! ../config */ "./src/config.js");
            var Globals = __webpack_require__( /*! ../globals */ "./src/globals.js");
            var Dom = __webpack_require__( /*! ./dom */ "./src/libs/dom.js");
            var Common = __webpack_require__( /*! ./common */ "./src/libs/common.js");
            var Functions = __webpack_require__( /*! ./functions */ "./src/libs/functions.js");
            var Utils = {
                isJsonString: function isJsonString(str) {
                    if (_typeof(str) === "object") {
                        return true;
                    }
                    return false;
                },
                getActiveTracker: function getActiveTracker() {
                    return Globals.trackerQ["tracker"];
                },
                getRequestParams: function getRequestParams() {
                    var params = {};
                    var queryString = window.location.search;
                    queryString = queryString.substring(1);
                    params = this.getJsonFromQuery(queryString);
                    return params;
                },
                /**
                 * This function return JSON object from query string
                 * @param {type} string
                 * @return {Object|params}
                 */
                getJsonFromQuery: function getJsonFromQuery(string) {
                    var params = {};
                    var temp;
                    var i;
                    var l;
                    var queries = string.split("&");
                    for (i = 0, l = queries.length; i < l; i++) {
                        temp = queries[i].split("=");
                        if (temp[0]) {
                            params[temp[0]] = temp[1];
                        }
                    }
                    return params;
                },
                prepareParams: function prepareParams(object, _char, type) {
                    _char = _char || "";
                    type = type || false;
                    var paramsArray = [];
                    for (var key in object) {
                        if (object.hasOwnProperty(key)) {
                            var data = object[key];
                            if (type === false) {
                                data = encodeURIComponent(data);
                            }
                            paramsArray.push(key + "=" + data);
                        }
                    }
                    if (_char === "") {
                        _char = "&";
                    }
                    return paramsArray.join(_char);
                },
                getTimestamp: function getTimestamp() {
                    return new Date().getTime();
                },
                getDateInterval: function getDateInterval(offset, type) {
                    var dateOffset = 24 * 60 * 60 * 1000 * offset;
                    var currentDate = new Date();
                    if (type === "after") {
                        currentDate.setTime(currentDate.getTime() + dateOffset);
                    } else {
                        currentDate.setTime(currentDate.getTime() - dateOffset);
                    }
                    var ts = Math.floor(currentDate.getTime());
                    return ts;
                },
                encodeCustomer: function encodeCustomer(attribParam, encriptKey) {
                    var coded = "";
                    var chr;
                    var uncoded = attribParam.toUpperCase().replace(/^\s+|\s+$/g, "");
                    for (var i = uncoded.length - 1; i >= 0; i--) {
                        chr = uncoded.charCodeAt(i);
                        var ifVal = chr - 38;
                        coded += chr >= 48 && chr <= 90 || chr === 38 ? encriptKey.charAt(ifVal) : String.fromCharCode(chr);
                    }
                    return coded;
                },
                getAttributionPatams: function getAttributionPatams(encriptAp, decodeKey) {
                    var coded = decodeURIComponent(encriptAp);
                    var uncoded = "";
                    var chr;
                    for (var i = coded.length - 1; i >= 0; i--) {
                        chr = coded.charAt(i);
                        uncoded += chr >= "a" && chr <= "z" || chr >= "A" && chr <= "Z" || chr == "&" || chr >= 0 && chr <= 9 ? String.fromCharCode(38 + decodeKey.indexOf(chr)) : chr;
                    }
                    var paramArray = uncoded.split("|");
                    var data = {
                        cpci: paramArray[0] || "",
                        ck: paramArray[1] ? paramArray[1].toLowerCase() : ""
                    };
                    return data;
                },
                generateUUID: function generateUUID() {
                    var uriParams = Utils.getRequestParams();
                    if (uriParams.__stuuid) {
                        return uriParams.__stuuid;
                    }
                    var d = this.getTimestamp();
                    var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
                        var r = (d + Math.random() * 16) % 16 | 0;
                        d = Math.floor(d / 16);
                        return (c === "x" ? r : r & 0x3 | 0x8).toString(16);
                    });
                    return uuid;
                },
                getRegex: function getRegex(type, value) {
                    var regex = null;
                    switch (type) {
                        case "equalTo":
                            regex = new RegExp("^" + value + ".*", "g");
                            break;
                        case "startsWith":
                            regex = new RegExp("^" + value + ".*", "g");
                            break;
                        case "endsWith":
                            regex = new RegExp(value + "$");
                            break;
                        case "contains":
                            regex = new RegExp(value);
                            break;
                    }
                    return regex;
                },
                /**
                 * @return {$ios}
                 */
                checkiOs: function checkiOs() {
                    var ios = false;
                    if (/iPhone|iPad|iPod/i.test(navigator.userAgent) && !window.MSStream) {
                        ios = true;
                    }
                    return ios;
                },
                /**
                 * Returns user device
                 * @return {String}
                 */
                getUserDevice: function getUserDevice() {
                    var maxPhoneWidth = 600;
                    var deviceSmallerSide = window.screen.width < window.screen.height ? window.screen.width : window.screen.height;
                    var isPhoneSized = deviceSmallerSide <= maxPhoneWidth;
                    var device = "desktop";
                    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && isPhoneSized) {
                        device = "mobile";
                    }
                    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && !isPhoneSized) {
                        device = "tablet";
                    }
                    return device;
                },
                /**
                 * This function returns user device prefix
                 * @return {String}
                 */
                getDeviceStylePrefix: function getDeviceStylePrefix() {
                    var dv = "md";
                    var device = Utils.getUserDevice();
                    if (device === "tablet") {
                        dv = "sm";
                    } else if (device === "mobile") {
                        dv = "xs";
                    }
                    return dv;
                },
                /**
                 * Returns user browser
                 * @return {String}
                 */
                getCurrentBrowser: function getCurrentBrowser() {
                    var browser = null;
                    var isOpera = navigator.userAgent.indexOf(" OPR/") >= 0;
                    var isFirefox = typeof InstallTrigger !== "undefined";
                    var isSafari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);
                    var isChrome = navigator.userAgent.indexOf("Chrome/") !== -1 || navigator.userAgent.match("CriOS");
                    var isEdge = /\b(MSIE |Trident.*?rv:|Edge|Edg\/)(\d+)/.exec(navigator.userAgent);
                    var isUC = navigator.userAgent.indexOf("UCBrowser/") !== -1;
                    if (isEdge) {
                        browser = "edge";
                    } else if (isOpera) {
                        browser = "opera";
                    } else if (isChrome) {
                        browser = "chrome";
                    } else if (isFirefox) {
                        browser = "firefox";
                    } else if (isSafari) {
                        browser = "safari";
                    } else if (isUC) {
                        browser = "uc";
                    }
                    return browser;
                },
                getCurrentOs: function getCurrentOs() {
                    var userAgent = navigator.userAgent;
                    var platform = navigator.platform;
                    var macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"];
                    var windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"];
                    var iosPlatforms = ["iPhone", "iPad", "iPod"];
                    var os = null;
                    if (macosPlatforms.indexOf(platform) !== -1) {
                        os = "mac";
                    } else if (iosPlatforms.indexOf(platform) !== -1) {
                        os = "ios";
                    } else if (windowsPlatforms.indexOf(platform) !== -1) {
                        os = "windows";
                    } else if (/Android/.test(userAgent)) {
                        os = "android";
                    } else if (!os && /Linux/.test(platform)) {
                        os = "linux";
                    }
                    return os;
                },
                setLastSeen: function setLastSeen() {
                    var ts = this.getTimestamp();
                    Dom.setToStorage(localStorage, "__ls", ts);
                },
                getLastSeen: function getLastSeen() {
                    var ls = Dom.getFromStorage(localStorage, "__ls");
                    return ls;
                },
                setTimeZone: function setTimeZone() {
                    Dom.setToStorage(localStorage, "__tz", "server");
                },
                getTimeZone: function getTimeZone() {
                    var tz = Dom.getFromStorage(localStorage, "__tz");
                    return tz;
                },
                setUniquePageVisitCount: function setUniquePageVisitCount(count) {
                    Dom.setToStorage(sessionStorage, "__upvc", count);
                },
                getUniquePageVisitCount: function getUniquePageVisitCount() {
                    var count = Dom.getFromStorage(sessionStorage, "__upvc");
                    return parseInt(count) || 0;
                },
                setPageVisitCount: function setPageVisitCount(count) {
                    Dom.setToStorage(sessionStorage, "__pvc", count);
                },
                getPageVisitCount: function getPageVisitCount() {
                    var count = Dom.getFromStorage(sessionStorage, "__upvc");
                    return parseInt(count);
                },
                setLastActivity: function setLastActivity(lastactivity) {
                    Dom.setToStorage(sessionStorage, "__la", lastactivity);
                },
                getLastActivity: function getLastActivity() {
                    var la = Dom.getFromStorage(sessionStorage, "__la") || 0;
                    return parseInt(la);
                },
                /**
                 * Sets the array of unique urls to localStorage
                 * @param {urls} urls
                 */
                setUniqueUrl: function setUniqueUrl(urls) {
                    urls = JSON.stringify(urls);
                    Dom.setToStorage(sessionStorage, "__uurl", urls);
                },
                /**
                 * Fetches all urls browsed by user in a particular session
                 * @return {Array}
                 */
                getUniqueUrl: function getUniqueUrl() {
                    var urls = Dom.getFromStorage(sessionStorage, "__uurl") || "[]";
                    urls = JSON.parse(urls);
                    return urls;
                },
                /**
                 * check if given value exists in given array
                 * @param {array} heyStick
                 * @param {string} needle
                 * @return {boolean}
                 */
                inArray: function inArray(heyStick, needle) {
                    if (this.getLength(heyStick) === 0) {
                        return false;
                    }
                    if (heyStick.indexOf(needle) === -1) {
                        return false;
                    }
                    return true;
                },
                /**
                 * Merges two array
                 * @param {Array|Object} array1
                 * @param {Array|Object} array2
                 * @return {array}
                 */
                mergeArray: function mergeArray(array1, array2) {
                    var notAllowed = [undefined, null, "", "", "", NaN];
                    for (var x in array2) {
                        if (!notAllowed.includes(array2[x])) {
                            array1[x] = array2[x];
                        }
                    }
                    return array1;
                },
                /**
                 * loads given js path to the head tag
                 * @param {string} path
                 * @param {boolean} async
                 * @param {object} doc
                 * @return {Utils.loadJs.script}
                 */
                loadJs: function loadJs(path, async, doc) {
                    var script = doc.createElement("script");
                    var m = doc.getElementsByTagName("script")[0];
                    script.async = async;
                    script.src = path;
                    if (path.includes("smartech_editor")) {
                        script.charset = "UTF-8";
                    }
                    m.parentNode.insertBefore(script, m);
                    return script;
                },
                /**
                 * loads given css path to the head tag
                 * @param {string} path
                 * @param {boolean} async
                 * @param {object} doc
                 * @return {null}
                 */
                loadCss: function loadCss(path, async, doc) {
                    var link = doc.createElement("link");
                    var m = doc.getElementsByTagName("head")[0];
                    link.rel = "stylesheet";
                    link.type = "text/css";
                    link.href = path;
                    link.media = "all";
                    m.appendChild(link);
                    return link;
                },
                /**
                 * creates an iframe and attaches it to the bottom of the body
                 * @param {string} path
                 * @param {string} id
                 * @param {boolean} hidden
                 * @param {object} doc
                 * @return {*} iframe
                 */
                loadIFrame: function loadIFrame(path, id, hidden, doc) {
                    var iframe = document.createElement("IFRAME");
                    iframe.setAttribute("id", id);
                    iframe.setAttribute("src", path);
                    if (hidden) {
                        iframe.style.visibility = "hidden";
                        iframe.style.height = "0";
                        iframe.style.width = "0";
                    }
                    doc.body.insertBefore(iframe, doc.body.lastChild);
                    return iframe;
                },
                /**
                 * Return the datatype of given value
                 * @param {String|Object|Array} data
                 * @return {unresolved}
                 */
                getDataType: function getDataType(data) {
                    return Object.prototype.toString.call(data).slice(8, -1);
                },
                /**
                 * Chcks if given array or object is blank
                 * @param {Array|Object} map
                 * @return {Boolean}
                 */
                isEmpty: function isEmpty(map) {
                    for (var key in map) {
                        if (map[key]) {
                            return !map.hasOwnProperty(key);
                        }
                    }
                    return true;
                },
                /**
                 * Return the length of an object
                 * @param {Object} obj
                 * @return {Number}
                 */
                getLength: function getLength(obj) {
                    var size = 0;
                    for (var key in obj) {
                        if (obj.hasOwnProperty(key)) {
                            size++;
                        }
                    }
                    return size;
                },
                /**
                 * Return Number of the day
                 * @return {Number}
                 */
                getCurrentDay: function getCurrentDay() {
                    var date = new Date();
                    return date.getDay();
                },
                /**
                 * Return concataniting hour and min
                 * @return {Number}
                 */
                getHourMin: function getHourMin() {
                    var date = new Date();
                    var minutes = date.getMinutes();
                    minutes = minutes < 10 ? "0" + minutes : minutes;
                    return parseInt(date.getHours() + "" + minutes);
                },
                /**
                 *This function returns the current user agent
                 * @return {String}
                 */
                getUserAgent: function getUserAgent() {
                    return navigator.userAgent;
                },
                /**
                 * This function checks for the user agent is a bot
                 * @return {Boolean}
                 */
                checkBot: function checkBot() {
                    var bot = false;
                    var userAgent = this.getUserAgent();
                    Globals.crawllers.forEach(function(crawller) {
                        if (userAgent.indexOf(crawller) !== -1) {
                            bot = true;
                        }
                    });
                    return bot;
                },
                /**
                 * This function return exact domain from current url
                 * @param {string} url
                 * @return {string} domain
                 */
                extractRootDomain: function extractRootDomain(url) {
                    var domain = url || window.location.host;
                    var splitArr = domain.split(".");
                    var arrLen = splitArr.length;
                    if (arrLen > 2) {
                        domain = splitArr[arrLen - 2] + "." + splitArr[arrLen - 1];
                    }
                    if (domain.indexOf("www") !== -1) {
                        domain = domain.replace("www.", "");
                    }
                    return domain;
                },
                /**
                 * This function looks for browser and then returns respective browser promise
                 * @return {promise|Boolean}
                 */
                detectPrivateMode: function detectPrivateMode() {
                    if (this.getCurrentBrowser() === "chrome") {
                        var chromePromise = this.checkChromeIncognito();
                        return chromePromise;
                    } else if (window.indexedDB && this.getCurrentBrowser() === "firefox") {
                        var firefoxPromise = this.checkFirefoxPrivate();
                        return firefoxPromise;
                    } else if (window.localStorage && this.getCurrentBrowser() === "safari") {
                        var safariPromise = this.checkSafariPrivate();
                        return safariPromise;
                    } else {
                        var promise = new Promise(function(resolve, reject) {
                            reject(new Error("private"));
                        });
                        return promise;
                    }
                },
                /**
                 * This function tests for chrome private browsing and return promise
                 * @return {Object} chromePromise
                 */
                checkChromeIncognito: function checkChromeIncognito() {
                    var chromePromise = new Promise(function(resolve, reject) {
                        var fs = window.RequestFileSystem || window.webkitRequestFileSystem;
                        if (fs) {
                            fs(window.TEMPORARY, 100, function() {
                                resolve("normal");
                            }, function() {
                                reject(new Error("private"));
                            });
                        }
                    });
                    return chromePromise;
                },
                /**
                 * This function tests for firefox private browsing and return promise
                 * @return {Object} firefoxPromise
                 */
                checkFirefoxPrivate: function checkFirefoxPrivate() {
                    var firefoxPromise = new Promise(function(resolve, reject) {
                        try {
                            var db = window.indexedDB.open("test1");
                            db.onsuccess = function(event) {
                                resolve("normal");
                            };
                            db.onerror = function(event) {
                                if (db.error && db.error.name === "InvalidStateError") {
                                    event.preventDefault();
                                    reject(new Error("private"));
                                }
                            };
                        } catch (e) {
                            reject(new Error("private"));
                        }
                    });
                    return firefoxPromise;
                },
                /**
                 * This function tests for safari private browsing and return promise
                 * @return {Object} safariPromise
                 */
                checkSafariPrivate: function checkSafariPrivate() {
                    var safariPromise = new Promise(function(resolve, reject) {
                        try {
                            window.localStorage.setItem("test", 1);
                            window.localStorage.removeItem("test");
                            resolve("normal");
                        } catch (e) {
                            reject(new Error("private"));
                        }
                    });
                    return safariPromise;
                },
                /**
                 * This function validates email Id given to add to list from modal/sticky form
                 * @param {type} val
                 * @return {Boolean}
                 */
                validateEmail: function validateEmail(val) {
                    if (!val.match(/\S+@\S+\.\S+/)) {
                        return false;
                    }
                    var emlarr = val.split("@");
                    var emlp1 = emlarr[1];
                    var emlarr2 = emlp1.split(".");
                    var emllen = emlarr2.length;
                    if (emllen >= 2) {
                        var emailpart = emlarr2[1];
                        var strlen = emailpart.length;
                        if (strlen > 63) {
                            return false;
                        }
                    }
                    val = val.toLowerCase();
                    if (!val.match(Globals.regex.email) || val.length > 255) {
                        return false;
                    }
                    return true;
                },
                /**
                 * This function validates mobile Id given to add to list from modal/sticky form
                 * @param {type} mobile
                 * @return {Boolean}
                 */
                validateMobile: function validateMobile(mobile) {
                    if (mobile.match(Globals.regex.mobile)) {
                        return true;
                    } else {
                        return false;
                    }
                },
                /**
                 * This function validates data for blank input
                 * @param {type} value
                 * @return {Boolean}
                 */
                validateBlank: function validateBlank(value) {
                    if (value && value.length !== 0) {
                        return true;
                    }
                    return false;
                },
                getFuturetimestamp: function getFuturetimestamp(days) {
                    var today = new Date();
                    var futuredate = today.setDate(today.getDate() + days);
                    return futuredate;
                },
                tpcallback: function tpcallback(tpurl, smturl, postdata) {
                    var adtData = {};
                    adtData["aid"] = postdata["staid"];
                    delete postdata.staid;
                    delete postdata.customer_key;
                    postdata.dpid = "|PIGGYBACK_COOKIE|";
                    postdata["uuid"] = adtData["aid"];
                    var paramstring = this.prepareParams(postdata, "%26");
                    this.loadJs(tpurl + "" + smturl + "?" + paramstring + "&param=<someparam>", "true", document);
                    var futuretime = this.getFuturetimestamp(7);
                    adtData["expiry"] = futuretime;
                    Dom.setToStorage(localStorage, Globals.adtechconfig.storage.name, JSON.stringify(adtData));
                    Dom.writeCookie(true, Globals.adtechconfig.flag.name, Globals.adtechconfig.flag.expires);
                },
                tpstorage: function tpstorage(postdata) {
                    var adtData = {};
                    adtData["aid"] = postdata;
                    var futuretime = this.getFuturetimestamp(7);
                    adtData["expiry"] = futuretime;
                    Dom.setToStorage(localStorage, Globals.adtechconfig.storage.name, JSON.stringify(adtData));
                    Dom.writeCookie(true, Globals.adtechconfig.flag.name, Globals.adtechconfig.flag.expires);
                },
                revexcallback: function revexcallback(advId) {
                    window._atm_client_id = advId;
                    window._atm_params = {};
                    _atm_params.t = "r";
                    _atm_params.f = "v";
                    var ast = document.createElement("script");
                    ast.type = "text/javascript";
                    ast.src = ("https:" == document.location.protocol ? "https:" : "http:") + "//cdn.atomex.net/static/js/pxs/" + _atm_client_id + "/ast.js";
                    document.body.appendChild(ast);
                },
                getWnConfig: function getWnConfig() {
                    return window[Globals.wnconfig.storage.name] || {};
                },
                /**
                 * This function validates given input keys for allowed characters only
                 * @param {string} value
                 * @return {Boolean}
                 */
                validateFreeflowInput: function validateFreeflowInput(value) {
                    var regex = new RegExp(Globals.regex.freeflow);
                    var val = true;
                    if (!value || !regex.test(value)) {
                        val = false;
                    }
                    return val;
                },
                getParams: function getParams(url) {
                    var type = null;
                    var ck = Common.getUser();
                    var userdata = {
                        clientkey: ck,
                        siteid: Common.getSite(),
                        type: type
                    };
                    var paramString = this.prepareParams(userdata);
                    var params = {
                        url: url,
                        m: "wnconfig",
                        paramString: paramString
                    };
                    return params;
                },
                getActApiParams: function getActApiParams(url) {
                    var params = {
                        url: url,
                        m: "",
                        paramString: ""
                    };
                    return params;
                },
                setReferalParams: function setReferalParams(refUrl) {
                    var refDomain = this.getRefereDomain(refUrl);
                    if (refDomain !== false) {
                        var sessionRef = Dom.getFromStorage(sessionStorage, Globals.referalConfig.refKey) || "[]";
                        sessionRef = JSON.parse(sessionRef);
                        if (!this.inArray(sessionRef, refDomain)) {
                            sessionRef.push(refDomain);
                        }
                        Dom.setToStorage(sessionStorage, Globals.referalConfig.refKey, JSON.stringify(sessionRef));
                    }
                },
                /**
                 * This function will give reuired redirect params
                 * @param {string} refUrl
                 * @return {string|boolean}
                 */
                getRefereDomain: function getRefereDomain(refUrl) {
                    var refDomain = this.extractRootDomain(refUrl);
                    refDomain = Functions.getParentDomain(refDomain);
                    if (this.inArray(Globals.referalConfig.domains, refDomain)) {
                        return refDomain;
                    }
                    return false;
                },
                setTokenData: function setTokenData(token) {
                    if (token) {
                        Dom.writeCookie(token, "__stat", 24);
                        return true;
                    }
                    return false;
                },
                /**
                 * This function will give reuired redirect params
                 * @return {string}
                 */
                getRedirectParams: function getRedirectParams() {
                    var redirectValues = {};
                    redirectValues.guid = Common.getUuid();
                    if (Common.getCustomer()) {
                        redirectValues.pk = Common.getCustomer();
                    }
                    return this.prepareParams(redirectValues, "", true);
                },
                /**
                 * This function get session timestamp from cookie
                 * @param {Object} activity
                 * @param {Object} rules
                 * @return {Boolean|check}
                 */
                getSessionTs: function getSessionTs() {
                    var sessionCookieArray = Dom.fetchCookie("__sts");
                    var sessionTimestamp = sessionCookieArray["sid"] || 0;
                    return sessionTimestamp;
                },
                /**
                 * This function get last activity timestamp from indexdb
                 * @param {Object} userActivities
                 * @param {Object} rules
                 * @return {Boolean|check}
                 */
                getLastActTs: function getLastActTs(userActivities) {
                    var lastActTs = 0;
                    lastActTs = userActivities[userActivities.length - 1]["timestamp"];
                    return lastActTs;
                },
                /**
                 * This function validates whether session time is greater than last activity or not
                 * @param {Object} timestamp1
                 * @param {Object} timestamp2
                 * @return {Boolean|check}
                 */
                validateTimestamp: function validateTimestamp(timestamp1, timestamp2) {
                    var check = false;
                    if (timestamp1 > timestamp2) {
                        check = true;
                    }
                    return check;
                },
                /**
                 * This function explodes the string and returns array
                 * @param {String} stringVal
                 * @param {String} separator
                 * @return {Array}
                 */
                splitString: function splitString(stringVal, separator) {
                    return stringVal.split(separator);
                },
                /**
                 * This method fetches users segment and list and sets to session storage
                 * @return {Promise}
                 */
                setSegmentList: function setSegmentList() {
                    var self = this;
                    var listSegments = Dom.getFromStorage(sessionStorage, "__stls") || "";
                    if (listSegments !== "") {
                        return new Promise(function(resolve, reject) {
                            resolve(listSegments);
                        });
                    }
                    var query = self.getSegmentQuery();
                    var p = [];
                    var listFetchPromise = new Promise(function(resolve, reject) {
                        if (Common.isIdentified()) {
                            Object.assign(query, {
                                l: true
                            });
                            self.fetchSegmentList(query).then(function(value) {
                                resolve(value.data || []);
                            });
                        } else {
                            resolve([]);
                        }
                    });
                    p.push(listFetchPromise);
                    var segFetchPromise = new Promise(function(resolve, reject) {
                        var segQuery = self.getSegmentQuery();
                        Object.assign(segQuery, {
                            s: true
                        });
                        self.fetchSegmentList(segQuery).then(function(value) {
                            resolve(value.data || []);
                        });
                    });
                    p.push(segFetchPromise);
                    return new Promise(function(resolve, reject) {
                        Promise.all(p).then(function(values) {
                            var result = {
                                l: values[0].ids,
                                s: values[1].ids,
                                loc: values[1].loc
                            };
                            Dom.setToStorage(sessionStorage, "__stls", JSON.stringify(result));
                            resolve(result);
                        });
                    });
                },
                /*
                This method pass list/seg data to hansel if hansel enabled
                */
                setListSegForHansel: function setListSegForHansel() {
                    var resp = Dom.getFromStorage(sessionStorage, "__stls");
                    if (resp && typeof Hansel !== "undefined") {
                        resp = JSON.parse(resp);
                        var list = resp.l || [];
                        var seg = resp.s || [];
                        if (list.length == 0 && seg.length == 0) return;
                        Hansel.smt().setSegments(list, seg);
                    }
                },
                /**
                 * This method fetches users attributes and sets to session storage
                 * @return {Promise}
                 */
                setWebpUserAttribute: function setWebpUserAttribute() {
                    var self = this;
                    var userAttributes = Dom.getFromStorage(sessionStorage, "__st_attr") || "";
                    if (userAttributes !== "") {
                        return new Promise(function(resolve, reject) {
                            resolve(userAttributes);
                        });
                    }
                    var query = self.getUserAttributeQuery();
                    var userAttributePromise = new Promise(function(resolve, reject) {
                        self.fetchWebpUserAttribute(query).then(function(value) {
                            var res = {};
                            if (value && value.attributes) {
                                res = value.attributes;
                            }
                            resolve(res);
                        });
                    });
                    userAttributePromise.then(function(values) {
                        Dom.setToStorage(sessionStorage, "__st_attr", JSON.stringify(values));
                    });
                },
                /*
                 * This function returns qurey to fetch segment or list data for anon identified users
                 * @returns {query}
                 */
                getUserAttributeQuery: function getUserAttributeQuery() {
                    var query = {
                        clientkey: Common.getUser(),
                        webguid: Common.getUuid()
                    };
                    return query;
                },
                /*
                 * This function returns qurey to fetch segment or list data for anon identified users
                 * @returns {query}
                 */
                getSegmentQuery: function getSegmentQuery() {
                    var isIdentified = Common.isIdentified();
                    var query = {
                        c: Common.getUser()
                    };
                    if (isIdentified) {
                        Object.assign(query, {
                            u: Common.getCustomer()
                        });
                    } else {
                        Object.assign(query, {
                            uuid: Common.getUuid()
                        });
                    }
                    return query;
                },
                /**
                 * This function fetches given list and segment
                 * @param {type} query
                 * @return {unresolved}
                 */
                fetchSegmentList: function fetchSegmentList(query) {
                    query = Utils.prepareParams(query);
                    return fetch(Config.webSegment + query).then(function(res) {
                        res = res.json();
                        return res;
                    })["catch"](function() {
                        console.log("error while fetching segments/lists");
                    });
                },
                /**
                 * This function fetches User attribute data
                 * @param {type} query
                 * @return {unresolved}
                 */
                fetchWebpUserAttribute: function fetchWebpUserAttribute(query) {
                    query = Utils.prepareParams(query);
                    return fetch(Config.webpAttribute + query).then(function(res) {
                        res = res.json();
                        return res;
                    })["catch"](function() {
                        console.log("error while fetching user attributes ");
                    });
                },
                setAttPayloadParams: function setAttPayloadParams(attrParams) {
                    var payloadAttribute = {};
                    var prefix = Globals.attPayload.prefix;
                    payloadAttribute[prefix + "CK"] = attrParams.ck || "";
                    payloadAttribute[prefix + "cpcm"] = attrParams.utm_medium.toLowerCase();
                    payloadAttribute[prefix + "cpcs"] = attrParams.utm_source.toLowerCase();
                    payloadAttribute["attcpci"] = attrParams.cpci;
                    if (payloadAttribute) {
                        Dom.setToStorage(localStorage, Globals.attPayload.key, JSON.stringify(payloadAttribute));
                    }
                },
                getAttPayloadParams: function getAttPayloadParams() {
                    return JSON.parse(Dom.getFromStorage(localStorage, Globals.attPayload.key)) || {};
                },
                setupUtmInSession: function setupUtmInSession() {
                    var self = this;
                    new Promise(function() {
                        var reqParam = self.getRequestParams();
                        Object.keys(reqParam).forEach(function(key) {
                            reqParam[key] = decodeURIComponent(reqParam[key]);
                        });
                        var stutm = Dom.getFromStorage(sessionStorage, "__stutm") || "{}";
                        stutm = JSON.parse(stutm);
                        var utm = self.getUTMParams(stutm, reqParam);
                        Dom.setToStorage(sessionStorage, "__stutm", JSON.stringify(utm));
                    });
                },
                /**
                 * This function checks if utm param is set or not before setting to main utm object
                 * @param {type} stutm
                 * @param {type} reqParam
                 * @return {stutm}
                 */
                getUTMParams: function getUTMParams(stutm, reqParam) {
                    if (reqParam.UTM_SOURCE || reqParam.utm_source) {
                        stutm["src"] = reqParam.UTM_SOURCE || reqParam.utm_source;
                    }
                    if (reqParam.UTM_CAMPAIGN || reqParam.utm_campaign) {
                        stutm["camp"] = reqParam.UTM_CAMPAIGN || reqParam.utm_campaign;
                    }
                    if (reqParam.UTM_TERM || reqParam.utm_term) {
                        stutm["term"] = reqParam.UTM_TERM || reqParam.utm_term;
                    }
                    if (reqParam.UTM_CONTENT || reqParam.utm_content) {
                        stutm["cont"] = reqParam.UTM_CONTENT || reqParam.utm_content;
                    }
                    if (reqParam.UTM_MEDIUM || reqParam.utm_medium) {
                        stutm["med"] = reqParam.UTM_MEDIUM || reqParam.utm_medium;
                    }
                    return stutm;
                },
                /**
                 * This function return session attributes data
                 * @return {data}
                 */
                getSessionAttributes: function getSessionAttributes() {
                    var pcookie = Dom.fetchCookie("__stp");
                    var scookie = Dom.fetchCookie("__sts");
                    var stutm = Dom.getFromStorage(sessionStorage, "__stutm") || "{}";
                    var stls = Dom.getFromStorage(sessionStorage, "__stls") || "{}";
                    var stattr = Dom.getFromStorage(sessionStorage, "__st_attr") || "{}";
                    stls = JSON.parse(stls);
                    stutm = JSON.parse(stutm);
                    var data = {
                        visit: pcookie["visit"] || "new",
                        identity: pcookie["ck"] || "",
                        type: !pcookie["ck"] || pcookie["ck"] === "" ? "Anonymous" : "Identified",
                        cpcs: scookie["cpcs"] || "",
                        browser: this.getCurrentBrowser(),
                        os: this.getCurrentOs(),
                        device: this.getUserDevice()
                    };
                    if (stls.loc) {
                        data["region"] = stls.loc.re;
                        data["city"] = stls.loc.ci;
                        data["country"] = stls.loc.co;
                    }
                    data["source"] = stutm.src || "";
                    data["medium"] = stutm.med || "";
                    data["term"] = stutm.term || "";
                    data["attributes"] = stattr;
                    return data;
                },
                /*
                 * This function returns current session activities from all activities
                 */
                getCurrentSessionActs: function getCurrentSessionActs(userActivities) {
                    var currentSessionActs = [];
                    var sessionTs = this.getSessionTs();
                    if (userActivities && userActivities.length > 0) {
                        for (var i = 0; i < userActivities.length; i++) {
                            var actTs = userActivities[i]["timestamp"] || 0;
                            if (actTs > sessionTs) {
                                currentSessionActs.push(userActivities[i]);
                            }
                        }
                    }
                    return currentSessionActs;
                },
                /**
                 * Returns a boolean lock that is locked by default
                 * and can be unlocked once only
                 * @return {Object} state
                 */
                createLock: function createLock() {
                    var lockValue = true;
                    return {
                        unlock: function unlock() {
                            return lockValue = false;
                        },
                        getLockState: function getLockState() {
                            return lockValue;
                        }
                    };
                },
                checkDayValidity: function checkDayValidity(daysList) {
                    var date = new Date();

                    function getDaysFromList(list) {
                        var daysMap = {
                            sunday: 0,
                            monday: 1,
                            tuesday: 2,
                            wednesday: 3,
                            thursday: 4,
                            friday: 5,
                            saturday: 6
                        };
                        var answer = [];
                        list.forEach(function(day) {
                            day = day.toLowerCase();
                            if (day in daysMap) {
                                answer.push(daysMap[day]);
                            }
                        });
                        return answer;
                    }
                    daysList = getDaysFromList(daysList);
                    if (daysList.includes(date.getDay())) {
                        return true;
                    } else {
                        return false;
                    }
                },
                checkTimeValidity: function checkTimeValidity(fromDate, toDate) {
                    var date = new Date();
                    var hrs = date.getHours();
                    var minutes = date.getMinutes();

                    function getHoursAndMinutes(date) {
                        var _date$split = date.split(":"),
                            _date$split2 = _slicedToArray(_date$split, 2),
                            hours = _date$split2[0],
                            minutes = _date$split2[1];
                        hours = parseInt(hours);
                        minutes = parseInt(minutes);
                        if (typeof hours == "number" && typeof minutes == "number") {
                            return [hours, minutes];
                        }
                        return [];
                    }
                    var _getHoursAndMinutes = getHoursAndMinutes(fromDate),
                        _getHoursAndMinutes2 = _slicedToArray(_getHoursAndMinutes, 2),
                        sHours = _getHoursAndMinutes2[0],
                        sMinutes = _getHoursAndMinutes2[1];
                    var _getHoursAndMinutes3 = getHoursAndMinutes(toDate),
                        _getHoursAndMinutes4 = _slicedToArray(_getHoursAndMinutes3, 2),
                        eHours = _getHoursAndMinutes4[0],
                        eMinutes = _getHoursAndMinutes4[1];
                    if (typeof sHours !== "number" || typeof sMinutes !== "number" || typeof eHours !== "number" || typeof eMinutes !== "number") {
                        return false;
                    }
                    var startMinutes = sHours * 60 + sMinutes;
                    var endMinutes = eHours * 60 + eMinutes;
                    var currentMinutes = hrs * 60 + minutes;
                    if (currentMinutes >= startMinutes && currentMinutes <= endMinutes) {
                        return true;
                    } else {
                        return false;
                    }
                },
                validateFrequencyType: function validateFrequencyType(campaignId, frequencyType, frequency, marketingTool) {
                    if (frequencyType == "day") {
                        return this.validateFrequencyTypeDay(campaignId, frequency, marketingTool, localStorage);
                    } else if (frequencyType == "session" || frequencyType == "campaign") {
                        return this.validateFrequencyTypeCommon(campaignId, frequency, marketingTool, localStorage, frequencyType);
                    } else if (frequencyType == "everytime") {
                        return true;
                    } else {
                        return false;
                    }
                },
                validateFrequencyTypeDay: function validateFrequencyTypeDay(campaignId, limit, marketingTool, storage) {
                    var items = this.getFreqCappingEntires(marketingTool, storage);
                    if (!items || !items.length) return true;
                    var date = new Date();
                    var dateString = "".concat(date.getDate(), ":").concat(date.getMonth() + 1, ":").concat(date.getFullYear()); // ! FORMAT: DD:MM:YYYY
                    var showCount = this.comparator(items, {
                        campaignId: campaignId,
                        date: dateString
                    });
                    if (showCount < limit) return true;
                    return false;
                },
                comparator: function comparator(items, keyValueMap) {
                    var count = 0;
                    items.forEach(function(item) {
                        var valid = true;
                        for (var _i2 = 0, _Object$entries = Object.entries(keyValueMap); _i2 < _Object$entries.length; _i2++) {
                            var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
                                key = _Object$entries$_i[0],
                                value = _Object$entries$_i[1];
                            if (item[key] != value) {
                                valid = false;
                            }
                        }
                        if (valid) count++;
                    });
                    return count;
                },
                validateFrequencyTypeCommon: function validateFrequencyTypeCommon(campaignId, limit, marketingTool, storage, frequencyType) {
                    var items = this.getFreqCappingEntires(marketingTool, storage, frequencyType === "session" ? this.getSessionTs() : null);
                    if (!items || !items.length) return true;
                    var showCount = this.comparator(items, {
                        campaignId: campaignId
                    });
                    if (showCount < limit) return true;
                    return false;
                },
                getFreqCappingEntires: function getFreqCappingEntires(marketingTool, storage, timeStamp) {
                    var key = Globals.freqCappingKeys[marketingTool];
                    var items = Dom.getFromStorage(storage, key);
                    items = JSON.parse(items);
                    if (!items) return [];
                    if (timeStamp != null) {
                        items = items.filter(function(item) {
                            return item.timestamp >= timeStamp;
                        });
                    }
                    return items || [];
                },
                addMarketingToolEntry: function addMarketingToolEntry(marketingTool, campaignId, date) {
                    var localStorageEntries = this.getFreqCappingEntires(marketingTool, localStorage);
                    if (!localStorageEntries) localStorageEntries = [];
                    var dateString = "".concat(date.getDate(), ":").concat(date.getMonth() + 1, ":").concat(date.getFullYear()); // ! FORMAT: DD:MM:YYYY
                    var entry = {
                        campaignId: campaignId,
                        timestamp: date.getTime(),
                        date: dateString
                    };
                    localStorageEntries.push(entry);
                    Dom.setToStorage(localStorage, Globals.freqCappingKeys[marketingTool], JSON.stringify(localStorageEntries));
                },
                isValidHttpUrl: function isValidHttpUrl(string) {
                    var url;
                    try {
                        url = new URL(string);
                    } catch (_) {
                        return false;
                    }
                    return url.protocol === "http:" || url.protocol === "https:";
                }
            };
            module.exports = Utils;

            /***/
        }),

    /***/
    "./src/sw.js":
        /*!*******************!*\
          !*** ./src/sw.js ***!
          \*******************/
        /*! no static exports found */
        /***/
        (function(module, exports, __webpack_require__) {

            var localconfig = __webpack_require__( /*! ./config */ "./src/config.js");
            var Utils = __webpack_require__( /*! ./libs/utils */ "./src/libs/utils.js");
            var Localforage = __webpack_require__( /*! localforage */ "./node_modules/localforage/dist/localforage.js");
            (function() {
                var clientConfig = config;
                var browser = Utils.getCurrentBrowser();
                var currenttime = Utils.getTimestamp();
                var dispatchData = {
                    user_key: clientConfig.user_key,
                    siteid: clientConfig.siteid || "",
                    usertimings: currenttime,
                    idc: clientConfig.idc || "",
                    browser: browser,
                    token: ""
                };
                self.addEventListener("install", function(event) {
                    self.skipWaiting()["catch"](function(err) {
                        console.log(err);
                    });
                });
                self.addEventListener("push", function(event) {
                    var payload = event.data.json();
                    var parsedData;
                    if (payload.notification) {
                        parsedData = payload.notification;
                        parsedData.data = JSON.parse(parsedData.data);
                        parsedData.actions = JSON.parse(parsedData.actions);
                        parsedData.tag = JSON.parse(parsedData.tag);
                    } else {
                        parsedData = JSON.parse(payload.data.notification);
                    }
                    var pushOrigin = validatePushOrigin(parsedData.data);
                    if (pushOrigin === false) {
                        console.log("Origin push check triggered");
                        Promise.resolve();
                        return;
                    }
                    var trid = parsedData.data.trid;
                    var autohide = parsedData.data.autohide;
                    var requireinteract = !autohide ? true : false;
                    dispatchData.web_activity = 12;
                    dispatchData.trid = trid;
                    Localforage.getItem("__del").then(function(deliveredMsg) {
                        console.log("delivered_msg of " + trid + "=" + deliveredMsg);
                        if (deliveredMsg !== trid) {
                            sendtolistner(dispatchData);
                            removeValue("__del");
                            saveValue("__del", trid);
                        }
                    })["catch"](function(err) {
                        sendtolistner(dispatchData);
                        removeValue("__del");
                        saveValue("__del", trid);
                    });
                    var ttl = 1209600;
                    if (payload.notification) {
                        ttl = payload.notification.ttl ? payload.notification.ttl : 1209600;
                    } else {
                        ttl = payload.data.time_to_live;
                    }
                    var notificationOptions = {
                        body: parsedData.body,
                        icon: parsedData.icon,
                        click_action: parsedData.click_action,
                        time_to_live: ttl,
                        image: parsedData.image,
                        data: parsedData.data,
                        requireInteraction: requireinteract,
                        tag: parsedData.tag
                    };
                    var actions = [];
                    if (parsedData.actions && parsedData.actions.length > 0) {
                        for (var a = 0; a < parsedData.actions.length; a++) {
                            var act = {};
                            act.action = parsedData.actions[a].action;
                            act.title = parsedData.actions[a].title;
                            act.icon = parsedData.actions[a].icon;
                            actions.push(act);
                        }
                    }
                    notificationOptions.actions = actions;
                    event.waitUntil(self.registration.showNotification(parsedData.title, notificationOptions));
                });
                self.addEventListener("notificationclick", function(event) {
                    var pushOrigin = validatePushOrigin(event.notification.data);
                    if (pushOrigin === false) {
                        console.log("Origin click check triggered");
                        Promise.resolve();
                        event.notification.close();
                        return;
                    }
                    var trid = event.notification.data.trid;
                    var clickAction = event.notification.data.click_action;
                    if (event.action) {
                        clickAction = event.action;
                    }
                    dispatchData.web_activity = 13;
                    dispatchData.trid = trid;
                    dispatchData.bpnClickLink = clickAction;
                    setLocalForgeData(dispatchData, trid);
                    event.notification.close();
                    if (event.notification.data.redirect_param === true) {
                        event.waitUntil(Localforage.getItem("__uuid").then(function(value) {
                            notificationURL = getRedirectedParamsSW(clickAction, value);
                            console.log(notificationURL);
                            clients.openWindow(notificationURL);
                        }));
                    } else {
                        clients.openWindow(clickAction);
                    }
                });
                self.addEventListener("notificationclose", function(event) {
                    var pushOrigin = validatePushOrigin(event.notification.data);
                    if (pushOrigin === false) {
                        console.log("Origin close check triggered");
                        event.notification.close();
                        return;
                    }
                    var trid = event.notification.data.trid;
                    dispatchData.web_activity = 14;
                    dispatchData.trid = trid;
                    sendtolistner(dispatchData);
                    event.notification.close();
                });
            })();

            /**
             * This function with hit dispath call for all events of BPN
             * @param {type} jsonData
             */
            function sendtolistner(jsonData) {
                Localforage.getItem("__uuid").then(function(value) {
                    jsonData.uuid = value[0];
                    jsonData.customer_key = value[1] !== "null" && value[1] !== undefined ? value[1] : "";
                    value[2] = value[2] !== "null" && value[2] !== undefined ? value[2] : "";
                    jsonData.token = value[2];
                    var queryParam = Utils.prepareParams(jsonData);
                    var dispatchPath = localconfig.bpnServerUrl + "dispatch_webpushact" + jsonData.idc;
                    if (jsonData.user_key === "ADGMOT35CHFLVDHBJNIG50K9695DOOFKFCPJLRHK8UVJL7DISDS0") {
                        dispatchPath = localconfig.axisUrl + "dispatch_webpushact_axs" + jsonData.idc;
                    }
                    var url = dispatchPath + "?" + queryParam;
                    fetch(url).then(function(response) {})["catch"](function(err) {
                        var fallbackPath = localconfig.serverUrl + "fallback_webpushact" + jsonData.idc;
                        if (jsonData.user_key === "ADGMOT35CHFLVDHBJNIG50K9695DOOFKFCPJLRHK8UVJL7DISDS0") {
                            fallbackPath = localconfig.axisUrl + "dispatch_webpushact_axs" + jsonData.idc;
                        }
                        refetch(fallbackPath, queryParam);
                    });
                })["catch"](function(err) {
                    var guid = generateUUID();
                    var value = [guid, ""];
                    saveValue("__uuid", value);
                    jsonData.uuid = guid;
                    var queryParam = Utils.prepareParams(jsonData);
                    refetch(localconfig.serverUrl + "dispatch_rewebpushact" + jsonData.idc, queryParam);
                });
            }

            /**
             * This function saves value to localforage on given key
             * @param {type} key
             * @return {undefined}
             */
            function removeValue(key) {
                Localforage.removeItem(key, function(err, value) {
                    console.log("removed value", key, err);
                });
            }

            /**
             * This function saves value on a key in localForage
             * @param {String} key
             * @param {String} value
             */
            function saveValue(key, value) {
                Localforage.setItem(key, value).then(function() {
                    return Localforage.getItem(key);
                }).then(function(value) {});
            }

            /**
             * This function generates guid for the site per user
             * @return {String}
             */
            function generateUUID() {
                var d = new Date() * 1;
                var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
                    var r = (d + Math.random() * 16) % 16 | 0;
                    d = Math.floor(d / 16);
                    return (c === "x" ? r : r & 0x3 | 0x8).toString(16);
                });
                return uuid;
            }

            /**
             * This function makes call to twon given endpoint
             * @param {string} endpoint
             * @param {string} urldata
             */
            function refetch(endpoint, urldata) {
                var url = endpoint + "?" + urldata;
                var timeout = Math.floor(Math.random() * 1000 + 1);
                setTimeout(function() {
                    fetch(url).then(function(response) {});
                }, timeout);
            }

            function validatePushOrigin(payload) {
                if (payload.origin && payload.origin === "smartech") {
                    return true;
                }
                return false;
            }

            function setLocalForgeData(dispatchData, trid) {
                Localforage.getItem("__click").then(function(clickedMsg) {
                    console.log("clicked_msg of " + trid + "=" + clickedMsg);
                    if (clickedMsg !== trid) {
                        sendtolistner(dispatchData);
                        removeValue("__click");
                        saveValue("__click", trid);
                    }
                })["catch"](function(err) {});
            }

            function getRedirectedParamsSW(clickAction, value) {
                var redirectValues = {};
                redirectValues.guid = value[0];
                if (value[1] !== "null" && value[1] !== undefined && value[1] !== "") {
                    redirectValues.pk = value[1];
                }
                var redirectedParams = Utils.prepareParams(redirectValues, "", true);
                var seperator = "?";
                if (clickAction.indexOf("?") !== -1) {
                    seperator = "&";
                }
                clickAction += seperator + redirectedParams;
                return clickAction;
            }

            /***/
        })

    /******/
});