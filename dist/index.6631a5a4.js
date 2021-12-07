// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"3jihx":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "8b531e236631a5a4";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
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
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"fvgsV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CONTAINER", ()=>CONTAINER
);
parcelHelpers.export(exports, "checkHash", ()=>checkHash
);
parcelHelpers.export(exports, "getCookie", ()=>getCookie
);
parcelHelpers.export(exports, "setCookie", ()=>setCookie
);
parcelHelpers.export(exports, "openModal", ()=>openModal
);
parcelHelpers.export(exports, "closeModal", ()=>closeModal
);
var _appJs = require("./components/app.js");
var _appJsDefault = parcelHelpers.interopDefault(_appJs);
var _headerJs = require("./components/header.js");
var _headerJsDefault = parcelHelpers.interopDefault(_headerJs);
var _navJs = require("./components/nav.js");
var _navJsDefault = parcelHelpers.interopDefault(_navJs);
var _mainJs = require("./components/main.js");
var _mainJsDefault = parcelHelpers.interopDefault(_mainJs);
var _footerJs = require("./components/footer.js");
var _footerJsDefault = parcelHelpers.interopDefault(_footerJs);
const CONTAINER = document.createElement('div');
CONTAINER.classList.add('container');
const myApp = new _appJsDefault.default();
myApp.init();
const headerApp = new _headerJsDefault.default();
headerApp.init();
const navApp = new _navJsDefault.default();
navApp.init();
const data = navApp.data;
const mainApp = new _mainJsDefault.default();
mainApp.init();
const footerApp = new _footerJsDefault.default();
footerApp.init();
if (location.hash === '') mainApp.mainDraw();
else checkHash();
function checkHash() {
    const hash = location.hash;
    console.log(hash);
    if (hash === '#cart') mainApp.cart(data);
    else {
        if (hash === '#main') mainApp.mainDraw();
        else if (hash.includes('#products')) mainApp.products(data);
    }
}
window.addEventListener('hashchange', checkHash);
function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++){
        let c = ca[i];
        while(c.charAt(0) == ' ')c = c.substring(1);
        if (c.indexOf(name) == 0) {
            const value = c.substring(name.length, c.length);
            return JSON.parse(value);
        }
    }
    return "";
}
function setCookie(cname, cvalue, exdays = 10) {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 86400000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + JSON.stringify(cvalue) + ";" + expires + ";path=/";
}
function openModal(htmlElement) {
    // modalWindow.style.display = 'flex';
    document.body.insertAdjacentHTML('beforeend', `
    <div class="modal-wrapper">
        <div class="modal-box">
            <span class="close">x</span>
            <h1>Your choice</h1>
            
        </div>
    </div>
    `);
    const modalBox = document.querySelector('.modal-box');
    modalBox.appendChild(htmlElement);
    const close = document.querySelector('.close');
    close.addEventListener('click', closeModal);
}
function closeModal() {
    // modalWindow.style.display = 'none';
    const modalWindow = document.querySelector('.modal-wrapper');
    modalWindow.remove();
    location.hash = `#products`;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","./components/app.js":"jZYfZ","./components/header.js":"bzKbg","./components/main.js":"aNvbf","./components/footer.js":"bIUOl","./components/nav.js":"fZkl2"}],"ciiiV":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"jZYfZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../index.js");
class App {
    constructor(){
    }
    create() {
        const element = document.createElement('div');
        element.classList.add('app');
        document.body.appendChild(element);
    }
    init() {
        this.create();
    }
}
exports.default = App;

},{"../index.js":"fvgsV","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"bzKbg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Header {
    constructor(){
    }
    creat() {
        const header = document.createElement('header');
        header.classList.add('header');
        const element = document.querySelector('.app');
        element.appendChild(header);
    }
    draw() {
        const logoWrapper = document.createElement('div');
        logoWrapper.classList.add('logo-wrapper');
        const header = document.querySelector('.header');
        const logoImg = new Image(200, 200);
        logoImg.src = 'https://thumbs.dreamstime.com/b/%D0%B8%D0%BD%D1%82…D0%B6%D0%B5%D0%BD%D1%89%D0%B8%D0%BD-192442278.jpg';
        logoWrapper.appendChild(logoImg);
        const contactInfo = document.createElement('div');
        contactInfo.classList.add('contact-info');
        const contacts = document.createElement('strong');
        contacts.innerText = 'Contacts';
        contactInfo.appendChild(contacts);
        header.appendChild(contactInfo);
        header.appendChild(logoWrapper);
    }
    init() {
        this.creat();
        this.draw();
    }
}
exports.default = Header;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"aNvbf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _index = require("../index");
class Main {
    constructor(){
    }
    create() {
        const main = document.createElement('main');
        main.classList.add('main');
        _index.CONTAINER.appendChild(main);
        const element = document.querySelector('.app');
        element.appendChild(_index.CONTAINER);
    }
    mainDraw() {
        const CONTAINER = document.querySelector('.container');
        CONTAINER.innerHTML = '';
        CONTAINER.insertAdjacentHTML('afterbegin', `
            <div class="main_wrapper">
                <h1> Welcome to our shop!</h1>
                <img src='../img/2.jpg'>
            </div>
        `);
    }
    productCard = (data)=>{
        let counter = 1;
        const block = document.createElement('section');
        const descBlock = document.createElement('div');
        const imgWrapper = document.createElement('div');
        imgWrapper.classList.add('modal-image-block');
        const img = new Image(150);
        img.src = data.image;
        imgWrapper.appendChild(img);
        const title = document.createElement('h2');
        title.innerText = data.title;
        const desc = document.createElement('p');
        desc.innerText = data.description;
        const counterBlock = document.createElement('div');
        counterBlock.classList.add('counter-block');
        const countMinus = document.createElement('span');
        countMinus.innerText = '-';
        const countPlus = document.createElement('span');
        countPlus.innerText = '+';
        const countText = document.createElement('strong');
        countText.innerText = counter;
        countMinus.addEventListener('click', ()=>{
            if (counter > 1) {
                counter--;
                countText.innerText = counter;
            }
        });
        countPlus.addEventListener('click', ()=>{
            counter++;
            countText.innerText = counter;
        });
        counterBlock.appendChild(countMinus);
        counterBlock.appendChild(countText);
        counterBlock.appendChild(countPlus);
        const btnAdd = document.createElement('button');
        btnAdd.classList.add('btnADD');
        btnAdd.innerText = 'Add to cart';
        btnAdd.addEventListener('click', ()=>{
            const cartList = _index.getCookie('cart') || [];
            if (cartList?.find((item)=>item.id === data.id
            )) alert('This product is the cart already');
            else {
                cartList.push({
                    id: data.id,
                    count: counter
                });
                _index.setCookie('cart', cartList);
            }
        });
        block.appendChild(imgWrapper);
        block.appendChild(descBlock);
        block.appendChild(counterBlock);
        block.appendChild(btnAdd);
        return block;
    };
    products = async (data)=>{
        _index.CONTAINER.innerHTML = '';
        _index.CONTAINER.insertAdjacentHTML('afterbegin', `
            <h1> Products </h1>
        `);
        const cardsContainer = document.createElement('div');
        cardsContainer.classList.add('cards-wrapper');
        let products;
        if (localStorage.getItem('products')) products = JSON.parse(localStorage.getItem('products'));
        else {
            const response = await fetch('https://fakestoreapi.com/products');
            products = await response.json();
            localStorage.setItem('products', JSON.stringify(products));
        }
        await products.map((item)=>{
            const cardItem = document.createElement('div');
            cardItem.classList.add('card');
            const imgItem = new Image(300);
            imgItem.src = item.image;
            const title = document.createElement('h3');
            title.innerText = item.title;
            const price = document.createElement('strong');
            price.innerText = item.price;
            cardItem.appendChild(imgItem);
            cardItem.appendChild(title);
            cardItem.appendChild(price);
            cardItem.addEventListener('click', ()=>{
                location.hash = `#products/${item.id}`;
            });
            cardsContainer.appendChild(cardItem);
        });
        _index.CONTAINER.appendChild(cardsContainer);
        if (location.hash !== '#products') {
            const productId = location.hash.replace('#products/', '');
            const product = products.find((item)=>item.id == productId
            );
            console.log(product);
            if (product) {
                const productHtml = this.productCard(product, data.cartList);
                _index.openModal(productHtml);
            } else alert('Sorry, we can not find this product');
        }
    };
    getTotalPrice = (products)=>{
        const cart = _index.getCookie('cart');
        let total = 0;
        cart.map((item)=>{
            const currentProduct = products.find((product)=>product.id === item.id
            );
            total += currentProduct.price * item.count;
        });
        return total.toFixed(2);
    };
    cart = (data)=>{
        _index.CONTAINER.innerHTML = '';
        _index.CONTAINER.insertAdjacentHTML('afterbegin', `
            <h1> Cart </h1>
        `);
        const totalPrice = document.createElement('strong');
        totalPrice.classList.add('total-price');
        const products = JSON.parse(localStorage.getItem('products'));
        const cartList = _index.getCookie('cart');
        cartList?.map((cartItem)=>{
            const currentProduct = products.find((item)=>item.id === cartItem.id
            );
            console.log(currentProduct);
            const counterBlock = document.createElement('div');
            counterBlock.classList.add('counter-block');
            const countMinus = document.createElement('span');
            countMinus.innerText = '-';
            const countPlus = document.createElement('span');
            countPlus.innerText = '+';
            const countText = document.createElement('strong');
            countText.innerText = cartItem.count;
            countMinus.addEventListener('click', ()=>{
                if (cartItem.count > 1) {
                    cartItem.count--;
                    countText.innerText = cartItem.count;
                    price.innerHTML = (cartItem.count * currentProduct.price).toFixed(2);
                    _index.setCookie('cart', cartList);
                    totalPrice.innerText = 'Total price ' + this.getTotalPrice(products);
                }
            });
            countPlus.addEventListener('click', ()=>{
                cartItem.count++;
                countText.innerText = cartItem.count;
                price.innerHTML = (cartItem.count * currentProduct.price).toFixed(2);
                _index.setCookie('cart', cartList);
                totalPrice.innerText = 'Total price ' + this.getTotalPrice(products);
            });
            counterBlock.appendChild(countMinus);
            counterBlock.appendChild(countText);
            counterBlock.appendChild(countPlus);
            const title = document.createElement('h2');
            title.innerHTML = currentProduct.title;
            const price = document.createElement('strong');
            price.innerHTML = cartItem.count * currentProduct.price;
            const imgItem = new Image(300);
            imgItem.src = currentProduct.image;
            const desc = document.createElement('p');
            desc.innerHTML = currentProduct.description;
            const cartWrapper = document.createElement('div');
            cartWrapper.classList.add('cartWrapper');
            const btnCartWrapper = document.createElement('div');
            btnCartWrapper.classList.add('btnCartWrapper');
            _index.CONTAINER.appendChild(title);
            cartWrapper.appendChild(imgItem);
            cartWrapper.appendChild(price);
            cartWrapper.appendChild(desc);
            btnCartWrapper.appendChild(counterBlock);
            _index.CONTAINER.appendChild(cartWrapper);
            _index.CONTAINER.appendChild(btnCartWrapper);
            const btnRemove = document.createElement('button');
            btnRemove.classList.add('remove');
            btnRemove.innerText = 'Remove this item';
            btnRemove.addEventListener('click', ()=>{
                const filteredCartList = cartList.filter((item)=>item.id !== cartItem.id
                );
                _index.setCookie('cart', filteredCartList);
                this.cart(data);
            });
            btnCartWrapper.appendChild(btnRemove);
            totalPrice.innerText = 'Total price ' + this.getTotalPrice(products);
            _index.CONTAINER.appendChild(totalPrice);
        });
    };
    init() {
        this.create();
    }
}
exports.default = Main;

},{"../index":"fvgsV","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"bIUOl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Footer {
    constructor(){
    }
    creat() {
        const footer = document.createElement('footer');
        footer.classList.add('footer');
        const element = document.querySelector('.app');
        element.appendChild(footer);
    }
    draw() {
        const logoWrapper = document.createElement('div');
        logoWrapper.classList.add('logo-wrapper');
        const footer = document.querySelector('.footer');
        footer.appendChild(logoWrapper);
        const logoImg = new Image(200, 200);
        logoImg.src = 'https://thumbs.dreamstime.com/b/%D0%B8%D0%BD%D1%82…D0%B6%D0%B5%D0%BD%D1%89%D0%B8%D0%BD-192442278.jpg';
        logoWrapper.appendChild(logoImg);
        const contactInfo = document.createElement('div');
        contactInfo.classList.add('contact-info');
        const contacts = document.createElement('strong');
        contacts.innerText = 'Our adress: Minsk';
        contactInfo.appendChild(contacts);
        footer.appendChild(contactInfo);
    }
    init() {
        this.creat();
        this.draw();
    }
}
exports.default = Footer;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"fZkl2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("./../index.js");
class Nav {
    constructor(){
        this.menu = [
            {
                name: 'Main',
                element: document.createElement('li')
            },
            {
                name: 'Products',
                element: document.createElement('li')
            },
            {
                name: 'Cart',
                element: document.createElement('li')
            }, 
        ], this.data = {
            products: [],
            cartList: _indexJs.getCookie('cart') || []
        };
    }
    data() {
        return this.data;
    }
    create() {
        const nav = document.createElement('nav');
        nav.classList.add('nav');
        const element = document.querySelector('.header');
        element.appendChild(nav);
    }
    drawMenu(menu) {
        const menuDOM = document.createElement('menu');
        menu.map((item)=>{
            const listItem = item.element;
            listItem.addEventListener('click', ()=>{
                location.hash = '#' + item.name.toLowerCase();
            });
            listItem.innerText = item.name;
            menuDOM.appendChild(listItem);
        });
        const nav = document.querySelector('.nav');
        nav.appendChild(menuDOM);
    }
    init() {
        this.create();
        this.drawMenu(this.menu);
    }
}
exports.default = Nav;

},{"./../index.js":"fvgsV","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}]},["3jihx","fvgsV"], "fvgsV", "parcelRequire94c2")

//# sourceMappingURL=index.6631a5a4.js.map
