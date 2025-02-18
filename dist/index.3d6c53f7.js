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
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
})({"eELxh":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "fa3f634f3d6c53f7";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
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
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
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
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
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
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"igcvL":[function(require,module,exports,__globalThis) {
/* This is the main Javascript file, called into the DOM.
It builds the UI, and coordinates the functionalities with the color calculations.
*/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _colorManagerJs = require("./js/colorManager.js");
var _colorManagerJsDefault = parcelHelpers.interopDefault(_colorManagerJs);
var _colorUtilsJs = require("./js/colorUtils.js");
var _colorPaletteJs = require("./js/colorPalette.js");
var _uiManagerJs = require("./js/uiManager.js");
// Basic parameters
let primaryColor;
let secondaryColor;
let tertiaryColor;
let quaternaryColor;
let indicationColors = {};
let rows = [];
let neutralColor;
let swatchCounter = 0;
let hueDif = 179.5;
let scales = 10;
let lightest = 95;
let darkest = 2;
let isSecondaryInputFocused = false;
/* Saving last values */ let lastUserChroma = 100;
let lastUserLightness = 70;
let lastPrimaryChroma = 0;
let lastPrimaryLightness = 0;
let initCallCount = 0;
const { Color } = _colorUtilsJs;
const colorManager = new (0, _colorManagerJsDefault.default)();
/* Set color observers */ const secondaryColorObserver = {
    update (data) {
        const { secondaryColor } = data;
        if (secondaryColor) {
            const secondarySwatch = document.querySelector('#secondary-color .color-ticker');
            if (secondarySwatch) {
                const hexColor = secondaryColor.to('srgb').toString({
                    format: 'hex'
                });
                secondarySwatch.style.backgroundColor = hexColor;
                secondarySwatch.setAttribute('aria-label', `Secondary color: ${hexColor}`);
            }
        }
    }
};
const tertiaryColorObserver = {
    update ({ tertiaryColor: updatedTertiaryColor }) {
        if (updatedTertiaryColor) tertiaryColor = updatedTertiaryColor; // Update the global variable
    }
};
const quaternaryColorObserver = {
    update ({ quaternaryColor: updatedQuaternaryColor }) {
        if (updatedQuaternaryColor) {
            quaternaryColor = updatedQuaternaryColor;
            console.log('Quaternary color observer updated:', quaternaryColor.to('srgb').toString({
                format: "hex"
            }));
            updateUIElements();
            updateAllScalesRows(primaryColor, secondaryColor, tertiaryColor, quaternaryColor);
        }
    }
};
// Add this near the top with other observers
const indicationColorObserver = {
    update (data) {
        const { primaryColor, secondaryColor, indicationColors } = data;
        if (primaryColor && secondaryColor && indicationColors) {
            // Update indication rows
            const types = [
                'alert',
                'warning',
                'success',
                'info'
            ];
            types.forEach((type)=>{
                const container = document.getElementById(`indication-scale-${type}`);
                if (container && indicationColors[type]) {
                    const indicationRow = new (0, _colorPaletteJs.IndicationRow)(indicationColors[type], type);
                    indicationRow.containerId = `indication-scale-${type}`;
                    indicationRow.update(primaryColor, secondaryColor);
                }
            });
        }
    }
};
colorManager.addObserver(secondaryColorObserver);
colorManager.addObserver(tertiaryColorObserver);
colorManager.addObserver(quaternaryColorObserver);
colorManager.addObserver(indicationColorObserver);
function testQuaternaryColorUpdate() {
    const testColor = new Color('lch', [
        50,
        50,
        180
    ]);
    colorManager.updateQuaternaryColor();
    console.log('Test quaternary color update triggered');
}
// Call this function after your initialization code
testQuaternaryColorUpdate();
const iconSvgCompLong = '<svg class="utility-icon" width="100%" height="100%" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill:currentColor;fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><g><path d="M17.202,37.029C9.346,35.701 3.362,28.865 3.362,20.631C3.362,13.163 8.331,6.655 15.44,4.635C15.911,2.555 17.772,1 19.993,1C22.569,1 24.661,3.092 24.661,5.668C24.661,7.99 22.961,9.919 20.738,10.276L20.738,33.09C22.037,33.416 23,34.592 23,35.992C23,37.643 21.66,38.983 20.008,38.983C18.722,38.983 17.624,38.169 17.202,37.029ZM15.578,7.186C9.82,9.073 5.842,14.468 5.842,20.631C5.842,27.557 10.819,33.321 17.391,34.543C17.782,33.838 18.45,33.307 19.248,33.098L19.248,10.276C17.534,10.001 16.13,8.791 15.578,7.186ZM19.993,2.617C18.309,2.617 16.942,3.984 16.942,5.668C16.942,7.352 18.309,8.719 19.993,8.719C21.677,8.719 23.044,7.352 23.044,5.668C23.044,3.984 21.677,2.617 19.993,2.617Z"/><g><path d="M19.993,37.262L19.993,34.782C27.808,34.782 34.144,28.446 34.144,20.631C34.144,14.031 29.582,8.308 23.149,6.836L23.702,4.419C31.263,6.149 36.624,12.875 36.624,20.631C36.624,29.816 29.178,37.262 19.993,37.262Z" style="fill-opacity:0.33;"/></g></g></svg>';
const iconSvgCompShort = '<svg class="utility-icon" width="100%" height="100%" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill:currentColor;fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><g><path d="M22.784,37.029C30.64,35.701 36.624,28.865 36.624,20.631C36.624,13.163 31.655,6.655 24.546,4.635C24.076,2.555 22.215,1 19.993,1C17.417,1 15.325,3.092 15.325,5.668C15.325,7.99 17.025,9.919 19.248,10.276L19.248,33.09C17.949,33.416 16.986,34.592 16.986,35.992C16.986,37.643 18.327,38.983 19.978,38.983C21.264,38.983 22.362,38.169 22.784,37.029ZM24.408,7.186C30.166,9.073 34.144,14.468 34.144,20.631C34.144,27.557 29.168,33.321 22.595,34.543C22.204,33.838 21.536,33.307 20.738,33.098L20.738,10.276C22.453,10.001 23.856,8.791 24.408,7.186ZM19.993,2.617C21.677,2.617 23.044,3.984 23.044,5.668C23.044,7.352 21.677,8.719 19.993,8.719C18.309,8.719 16.942,7.352 16.942,5.668C16.942,3.984 18.309,2.617 19.993,2.617Z"/><g><path d="M19.993,37.262L19.993,34.782C12.178,34.782 5.842,28.446 5.842,20.631C5.842,14.031 10.404,8.308 16.837,6.836L16.284,4.419C8.723,6.149 3.362,12.875 3.362,20.631C3.362,29.816 10.808,37.262 19.993,37.262Z" style="fill-opacity:0.33;"/></g></g></svg>';
const iconSvgCompSplit = '<svg class="utility-icon" width="100%" height="100%" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill:currentColor;fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><g transform="matrix(0.924022,1.2326e-32,-1.2326e-32,0.924022,-0.0569897,1.06095)"><path d="M3.258,23.531C2.024,23.072 1.144,21.882 1.144,20.489C1.144,19.094 2.025,17.904 3.261,17.446C4.712,8.963 12.108,2.498 21.002,2.498C29.191,2.498 36.111,7.98 38.288,15.471C40.762,15.807 42.672,17.93 42.672,20.496C42.672,23.062 40.762,25.186 38.288,25.522C36.111,33.013 29.191,38.495 21.002,38.495C12.102,38.495 4.703,32.022 3.258,23.531ZM35.632,15.821C33.653,9.629 27.847,5.14 21.002,5.14C13.507,5.14 7.26,10.519 5.913,17.624C6.937,18.17 7.634,19.249 7.634,20.489C7.634,21.73 6.936,22.809 5.911,23.355C7.252,30.467 13.503,35.853 21.002,35.853C27.847,35.853 33.653,31.364 35.632,25.172C33.809,24.403 32.528,22.598 32.528,20.496C32.528,18.395 33.809,16.59 35.632,15.821ZM38.728,17.364C38.728,17.366 38.728,17.367 38.729,17.369C38.378,17.242 38,17.174 37.606,17.174C37.054,17.174 36.533,17.308 36.075,17.547C36.074,17.544 36.074,17.541 36.073,17.539C35.004,18.093 34.272,19.21 34.272,20.496C34.272,21.783 35.004,22.9 36.073,23.454C36.074,23.451 36.074,23.448 36.075,23.446C36.533,23.684 37.054,23.819 37.606,23.819C38,23.819 38.378,23.75 38.729,23.624C38.728,23.625 38.728,23.627 38.728,23.628C40.01,23.166 40.928,21.937 40.928,20.496C40.928,19.055 40.01,17.827 38.728,17.364Z" style="fill-opacity:0.33;"/></g><g transform="matrix(0.924022,1.2326e-32,-1.2326e-32,0.924022,-0.0569897,1.06095)"><path d="M10.5,35.111C9.988,35.448 9.376,35.644 8.718,35.644C6.927,35.644 5.473,34.19 5.473,32.399C5.473,30.608 6.927,29.154 8.718,29.154C9.219,29.154 9.694,29.268 10.118,29.472L17.699,21.891C17.495,21.466 17.381,20.991 17.381,20.489C17.381,19.991 17.493,19.519 17.694,19.097L10.119,11.522C9.696,11.725 9.222,11.839 8.721,11.839C6.93,11.839 5.476,10.384 5.476,8.594C5.476,6.803 6.93,5.349 8.721,5.349C9.378,5.349 9.99,5.544 10.501,5.881C13.457,3.752 17.084,2.498 21.002,2.498C29.191,2.498 36.111,7.98 38.288,15.471C40.762,15.807 42.672,17.93 42.672,20.496C42.672,23.062 40.762,25.186 38.288,25.522C36.111,33.013 29.191,38.495 21.002,38.495C17.083,38.495 13.456,37.24 10.5,35.111ZM11.93,8.108C11.954,8.266 11.966,8.428 11.966,8.594C11.966,9.094 11.853,9.568 11.65,9.992L19.221,17.563C19.646,17.359 20.123,17.244 20.626,17.244C22.04,17.244 23.244,18.151 23.688,19.414L32.644,19.414C32.998,17.789 34.132,16.454 35.632,15.821C33.653,9.629 27.847,5.14 21.002,5.14C17.609,5.14 14.472,6.242 11.93,8.108ZM32.644,21.579L23.683,21.579C23.235,22.834 22.034,23.734 20.626,23.734C20.127,23.734 19.654,23.621 19.231,23.419L11.648,31.003C11.85,31.426 11.963,31.9 11.963,32.399C11.963,32.563 11.95,32.725 11.927,32.883C14.47,34.75 17.608,35.853 21.002,35.853C27.847,35.853 33.653,31.364 35.632,25.172C34.132,24.538 32.998,23.203 32.644,21.579ZM36.073,17.539C35.004,18.093 34.272,19.21 34.272,20.496C34.272,21.783 35.004,22.9 36.073,23.454L36.075,23.446C36.533,23.684 37.054,23.819 37.606,23.819C38,23.819 38.378,23.75 38.729,23.624L38.728,23.628C40.01,23.166 40.928,21.937 40.928,20.496C40.928,19.055 40.01,17.827 38.728,17.364L38.729,17.369C38.378,17.242 38,17.174 37.606,17.174C37.054,17.174 36.533,17.308 36.075,17.547L36.073,17.539Z"/></g></svg>';
const iconSvgTriadLong = '<svg class="utility-icon" width="100%" height="100%" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill:currentColor;fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><path d="M29.436,35.214C26.753,37.07 23.499,38.157 19.993,38.157C10.814,38.157 3.362,30.704 3.362,21.526C3.362,13.92 8.478,7.501 15.453,5.523C15.893,3.415 17.763,1.83 20.001,1.83C22.563,1.83 24.645,3.911 24.645,6.474C24.645,8.695 23.083,10.553 21,11.011L21,18.413C22.235,18.83 23.125,19.999 23.125,21.374C23.125,21.904 22.993,22.404 22.76,22.842L29.714,29.796C30.138,29.581 30.618,29.46 31.125,29.46C32.85,29.46 34.25,30.86 34.25,32.585C34.25,34.31 32.85,35.71 31.125,35.71C30.503,35.71 29.923,35.528 29.436,35.214ZM15.623,8.029C9.93,9.873 5.808,15.222 5.808,21.526C5.808,29.354 12.164,35.71 19.993,35.71C22.989,35.71 25.768,34.779 28.059,33.192C28.02,32.996 28,32.793 28,32.585C28,32.022 28.149,31.494 28.409,31.038L21.492,24.12C21.048,24.362 20.54,24.499 20,24.499C18.276,24.499 16.875,23.099 16.875,21.374C16.875,19.926 17.862,18.707 19.199,18.353L19.199,11.05C17.536,10.76 16.176,9.585 15.623,8.029ZM20.001,3.349C18.275,3.349 16.876,4.749 16.876,6.474C16.876,8.199 18.275,9.598 20.001,9.598C21.725,9.598 23.125,8.199 23.125,6.474C23.125,4.749 21.725,3.349 20.001,3.349Z"/><path d="M32.418,32.577L30.582,30.959C32.818,28.451 34.177,25.146 34.177,21.526C34.177,14.949 29.692,9.412 23.616,7.809L24.235,5.441C31.362,7.319 36.624,13.813 36.624,21.526C36.624,25.766 35.034,29.638 32.418,32.577Z" style="fill-opacity:0.33;"/></svg>';
const iconSvgTriadShort = '<svg class="utility-icon" width="100%" height="100%" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill:currentColor;fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><path d="M32.418,32.576C29.371,35.999 24.932,38.157 19.993,38.157C10.814,38.157 3.362,30.704 3.362,21.526C3.362,13.709 8.766,7.145 16.039,5.368L16.618,7.746C10.416,9.262 5.808,14.859 5.808,21.526C5.808,29.354 12.164,35.71 19.993,35.71C24.201,35.71 27.984,33.873 30.582,30.959L32.418,32.576Z" style="fill-opacity:0.33;"/><path d="M33.743,30.879C34.064,31.37 34.25,31.956 34.25,32.585C34.25,34.309 32.85,35.71 31.125,35.71C29.4,35.71 28,34.309 28,32.585C28,32.022 28.149,31.494 28.409,31.038L21.491,24.12C21.048,24.362 20.54,24.499 20,24.499C18.276,24.499 16.875,23.099 16.875,21.374C16.875,19.926 17.862,18.707 19.199,18.353L19.199,11.05C17.017,10.67 15.356,8.764 15.356,6.474C15.356,3.911 17.437,1.83 20.001,1.83C22.239,1.83 24.11,3.417 24.548,5.526C31.515,7.51 36.624,13.925 36.624,21.526C36.624,24.993 35.561,28.213 33.743,30.879ZM24.376,8.033C23.844,9.525 22.57,10.666 21,11.011L21,18.412C22.235,18.83 23.125,19.999 23.125,21.374C23.125,21.904 22.993,22.404 22.759,22.841L29.714,29.796C30.138,29.581 30.617,29.46 31.125,29.46C31.325,29.46 31.522,29.479 31.712,29.515C33.267,27.239 34.177,24.488 34.177,21.526C34.177,15.226 30.062,9.881 24.376,8.033ZM20.001,3.349C18.275,3.349 16.876,4.749 16.876,6.474C16.876,8.199 18.275,9.598 20.001,9.598C21.725,9.598 23.125,8.199 23.125,6.474C23.125,4.749 21.725,3.349 20.001,3.349Z"/></svg>';
const iconSvgTriadSplit = '<svg  class="utility-icon" width="100%" height="100%" viewBox="0 0 40 40" transform="rotate(90)" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill:currentColor;fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><path d="M32.418,32.576C29.371,35.999 24.932,38.157 19.993,38.157C10.814,38.157 3.362,30.704 3.362,21.526C3.362,13.709 8.766,7.145 16.039,5.368L16.618,7.746C10.416,9.262 5.808,14.859 5.808,21.526C5.808,29.354 12.164,35.71 19.993,35.71C24.201,35.71 27.984,33.873 30.582,30.959L32.418,32.576Z" style="fill-opacity:0.33;"/><path d="M19.989,1.83L20.001,1.83C22.239,1.83 24.11,3.417 24.548,5.526C31.515,7.51 36.624,13.925 36.624,21.526C36.624,24.993 35.561,28.213 33.743,30.879C34.064,31.37 34.25,31.956 34.25,32.585C34.25,34.309 32.85,35.71 31.125,35.71C29.4,35.71 28,34.309 28,32.585C28,32.022 28.149,31.494 28.409,31.038L21.491,24.12C21.048,24.362 20.54,24.499 20,24.499L19.99,24.499C19.45,24.499 18.942,24.362 18.499,24.12L11.581,31.038C11.841,31.494 11.99,32.022 11.99,32.585C11.99,34.309 10.59,35.71 8.865,35.71C7.14,35.71 5.74,34.309 5.74,32.585C5.74,31.956 5.926,31.37 6.247,30.879C4.429,28.213 3.366,24.993 3.366,21.526C3.366,13.925 8.475,7.51 15.442,5.526C15.88,3.417 17.751,1.83 19.989,1.83ZM24.376,8.033C23.844,9.525 22.57,10.666 21,11.011L21,18.412C22.235,18.83 23.125,19.999 23.125,21.374C23.125,21.904 22.993,22.404 22.759,22.841L29.714,29.796C30.138,29.581 30.617,29.46 31.125,29.46C31.325,29.46 31.522,29.479 31.712,29.515C33.267,27.239 34.177,24.488 34.177,21.526C34.177,15.226 30.062,9.881 24.376,8.033ZM15.614,8.033C9.928,9.881 5.813,15.226 5.813,21.526C5.813,24.488 6.723,27.239 8.278,29.515C8.468,29.479 8.665,29.46 8.865,29.46C9.373,29.46 9.852,29.581 10.276,29.796L17.231,22.841C16.997,22.404 16.865,21.904 16.865,21.374C16.865,19.999 17.755,18.83 18.99,18.412L18.99,11.011C17.42,10.666 16.146,9.525 15.614,8.033ZM20.001,3.349L19.989,3.349C18.269,3.355 16.876,4.753 16.876,6.474C16.876,8.195 18.269,9.592 19.989,9.598L20.001,9.598C21.721,9.592 23.114,8.195 23.114,6.474C23.114,4.753 21.721,3.355 20.001,3.349Z"/></svg>';
const iconSvgQuadLong = '<svg class="utility-icon" width="100%" height="100%" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill:currentColor;fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><path d="M34.879,21.833C33.601,29.746 26.732,35.798 18.46,35.798C9.282,35.798 1.829,28.346 1.829,19.167C1.829,9.988 9.282,2.536 18.46,2.536C26.732,2.536 33.601,8.587 34.879,16.501C34.456,16.275 33.973,16.147 33.461,16.147C33.074,16.147 32.705,16.22 32.365,16.353C31.058,9.87 25.326,4.982 18.46,4.982C10.632,4.982 4.276,11.338 4.276,19.167C4.276,26.995 10.632,33.351 18.46,33.351C25.326,33.351 31.058,28.463 32.365,21.981C32.705,22.113 33.074,22.186 33.461,22.186C33.973,22.186 34.456,22.058 34.879,21.833Z" style="fill-opacity:0.33;"/><path d="M15.656,35.562C14.679,35.396 13.732,35.145 12.821,34.816C10.887,33.885 8.724,32.626 6.765,30.986C3.718,27.971 1.829,23.788 1.829,19.167C1.829,9.988 9.282,2.536 18.46,2.536C26.047,2.536 32.453,7.626 34.449,14.574C36.567,15.027 38.157,16.912 38.157,19.164C38.157,21.755 36.054,23.858 33.463,23.858C31.126,23.858 29.186,22.147 28.828,19.911L21.355,19.911C21.085,20.97 20.251,21.805 19.193,22.077L19.193,31.537C20.489,31.87 21.448,33.047 21.448,34.447C21.448,36.104 20.102,37.45 18.445,37.45C17.181,37.45 16.099,36.668 15.656,35.562ZM31.934,14.725C30.068,9.069 24.738,4.982 18.46,4.982C10.632,4.982 4.276,11.338 4.276,19.167C4.276,26.073 9.223,31.833 15.763,33.094C16.149,32.331 16.851,31.754 17.697,31.537L17.697,22.077C16.401,21.744 15.441,20.567 15.441,19.167C15.441,17.51 16.787,16.164 18.445,16.164C19.843,16.164 21.019,17.121 21.353,18.415L28.829,18.415C29.106,16.692 30.322,15.281 31.934,14.725ZM32.364,16.345C31.237,16.785 30.437,17.882 30.437,19.164C30.437,20.834 31.793,22.19 33.463,22.19C35.133,22.19 36.489,20.834 36.489,19.164C36.489,17.594 35.29,16.301 33.759,16.153C33.752,16.155 33.745,16.157 33.738,16.16C33.647,16.151 33.555,16.147 33.461,16.147C33.074,16.147 32.705,16.22 32.365,16.353C32.365,16.35 32.364,16.348 32.364,16.345Z"/></svg>';
const iconSvgQuadShort = '<svg class="utility-icon" width="100%" height="100%" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill:currentColor;fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><path d="M34.879,21.833C33.601,29.746 26.732,35.798 18.46,35.798C9.282,35.798 1.829,28.346 1.829,19.167C1.829,9.988 9.282,2.536 18.46,2.536C26.732,2.536 33.601,8.587 34.879,16.501C34.456,16.275 33.973,16.147 33.461,16.147C33.074,16.147 32.705,16.22 32.365,16.353C31.058,9.87 25.326,4.982 18.46,4.982C10.632,4.982 4.276,11.338 4.276,19.167C4.276,26.995 10.632,33.351 18.46,33.351C25.326,33.351 31.058,28.463 32.365,21.981C32.705,22.113 33.074,22.186 33.461,22.186C33.973,22.186 34.456,22.058 34.879,21.833Z" style="fill-opacity:0.33;"/><path d="M17.706,22.091C16.404,21.755 15.441,20.572 15.441,19.167C15.441,17.5 16.794,16.147 18.46,16.147C19.866,16.147 21.049,17.11 21.385,18.412L28.825,18.412C29.186,16.178 31.126,14.47 33.461,14.47C36.053,14.47 38.157,16.575 38.157,19.167C38.157,21.42 36.567,23.305 34.448,23.759C32.704,29.834 27.588,34.488 21.26,35.563C20.812,36.669 19.727,37.45 18.46,37.45C16.794,37.45 15.441,36.097 15.441,34.43C15.441,33.024 16.404,31.842 17.706,31.506L17.706,22.091ZM36.48,19.167C36.48,17.5 35.127,16.147 33.461,16.147C31.794,16.147 30.441,17.5 30.441,19.167C30.441,20.833 31.794,22.186 33.461,22.186C35.127,22.186 36.48,20.833 36.48,19.167ZM21.385,19.921C21.111,20.982 20.276,21.817 19.215,22.091L19.215,31.506C20.072,31.727 20.782,32.315 21.168,33.093C26.235,32.112 30.343,28.43 31.934,23.609C30.321,23.054 29.104,21.644 28.825,19.921L21.385,19.921Z"/></svg>';
const iconSvgQuadSplit = '<svg class="utility-icon" width="100%" height="100%" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill:currentColor;fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><g transform="matrix(6.12321e-17,0.999997,-0.999997,6.12321e-17,323.198,-0.475763)"><g opacity="0.33"><path d="M22.309,288.32C30.222,289.598 36.274,296.467 36.274,304.739C36.274,313.917 28.822,321.37 19.643,321.37C10.464,321.37 3.012,313.917 3.012,304.739C3.012,296.467 9.063,289.598 16.977,288.32C16.751,288.743 16.623,289.226 16.623,289.738C16.623,290.125 16.696,290.494 16.829,290.834C10.346,292.141 5.458,297.873 5.458,304.739C5.458,312.567 11.814,318.923 19.643,318.923C27.471,318.923 33.827,312.567 33.827,304.739C33.827,297.873 28.939,292.141 22.457,290.834C22.589,290.494 22.662,290.125 22.662,289.738C22.662,289.226 22.534,288.743 22.309,288.32Z"/></g></g><g transform="matrix(6.12321e-17,0.999997,-0.999997,6.12321e-17,323.198,-0.475763)"><path d="M19.64,285.042L19.643,285.042C21.896,285.042 23.781,286.632 24.235,288.751C30.31,290.495 34.964,295.611 36.039,301.939C37.145,302.387 37.926,303.472 37.926,304.739C37.926,306.405 36.573,307.758 34.906,307.758C33.5,307.758 32.318,306.795 31.982,305.493L22.567,305.493C22.231,306.795 21.048,307.758 19.643,307.758L19.64,307.758C18.235,307.758 17.052,306.795 16.716,305.493L7.301,305.493C6.965,306.795 5.783,307.758 4.377,307.758C2.71,307.758 1.357,306.405 1.357,304.739C1.357,303.472 2.138,302.387 3.244,301.939C4.319,295.611 8.973,290.495 15.048,288.751C15.502,286.632 17.387,285.042 19.64,285.042ZM18.886,301.814L18.886,294.374C17.163,294.095 15.753,292.878 15.198,291.265C10.377,292.856 6.695,296.964 5.714,302.031C6.492,302.417 7.08,303.127 7.301,303.984L16.716,303.984C16.99,302.923 17.825,302.088 18.886,301.814ZM20.397,301.814C21.458,302.088 22.293,302.923 22.567,303.984L31.982,303.984C32.203,303.127 32.791,302.417 33.569,302.031C32.588,296.964 28.906,292.856 24.085,291.265C23.53,292.878 22.12,294.095 20.397,294.374L20.397,301.814ZM19.643,286.719L19.64,286.719C17.974,286.721 16.623,288.073 16.623,289.738C16.623,291.404 17.974,292.756 19.64,292.758L19.643,292.758C21.309,292.756 22.66,291.404 22.66,289.738C22.66,288.073 21.309,286.721 19.643,286.719Z"/></g></svg>';
const iconSvgAnaLong = '<svg class="utility-icon" width="100%" height="100%" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill:currentColor;fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><path d="M34.557,15.689L32.14,16.336C31.17,12.717 28.802,9.631 25.557,7.757C18.804,3.859 10.156,6.176 6.257,12.929C2.359,19.682 4.676,28.33 11.429,32.229C16.967,35.426 23.962,34.505 28.483,29.983L30.253,31.753C24.93,37.076 16.696,38.16 10.178,34.396C2.228,29.806 -0.499,19.627 4.09,11.678C8.68,3.728 18.859,1.001 26.809,5.59C30.628,7.796 33.416,11.428 34.557,15.689Z"/><path d="M20.004,22.562C19.549,22.84 19.014,23 18.442,23C16.787,23 15.442,21.656 15.442,20C15.442,18.344 16.787,17 18.442,17C19.838,17 21.012,17.955 21.347,19.247L28.829,19.247C29.186,17.009 31.127,15.296 33.465,15.296C36.055,15.296 38.158,17.399 38.158,19.99C38.158,22.58 36.055,24.684 33.465,24.684C31.13,24.684 29.192,22.976 28.831,20.743L21.349,20.743C21.282,21.007 21.179,21.258 21.047,21.489L27.74,28.182C28.061,28.064 28.409,28 28.771,28C30.427,28 31.771,29.344 31.771,31C31.771,32.656 30.427,34 28.771,34C27.115,34 25.771,32.656 25.771,31C25.771,30.256 26.042,29.574 26.492,29.05L20.004,22.562ZM33.465,16.925C31.773,16.925 30.4,18.298 30.4,19.99C30.4,21.681 31.773,23.054 33.465,23.054C35.156,23.054 36.529,21.681 36.529,19.99C36.529,18.298 35.156,16.925 33.465,16.925Z"/><path d="M30.278,31.727L28.505,29.962C30.255,28.204 31.511,26.017 32.148,23.62L34.567,24.263C33.817,27.084 32.338,29.659 30.278,31.727Z" style="fill-opacity:0.33;"/></svg>';
const iconSvgAnaShort = '<svg class="utility-icon" width="100%" height="100%" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill:currentColor;fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><path d="M34.557,15.689L32.14,16.336C31.17,12.717 28.802,9.631 25.557,7.757C18.804,3.859 10.156,6.176 6.257,12.929C2.359,19.682 4.676,28.33 11.429,32.229C16.967,35.426 23.962,34.505 28.483,29.983L30.253,31.753C24.93,37.076 16.696,38.16 10.178,34.396C2.228,29.806 -0.499,19.627 4.09,11.678C8.68,3.728 18.859,1.001 26.809,5.59C30.628,7.796 33.416,11.428 34.557,15.689Z" style="fill-opacity:0.33;"/><path d="M20.004,22.562C19.549,22.84 19.014,23 18.442,23C16.787,23 15.442,21.656 15.442,20C15.442,18.344 16.787,17 18.442,17C19.838,17 21.012,17.955 21.347,19.247L28.829,19.247C29.186,17.009 31.127,15.296 33.465,15.296C36.055,15.296 38.158,17.399 38.158,19.99C38.158,22.58 36.055,24.684 33.465,24.684C31.13,24.684 29.192,22.976 28.831,20.743L21.349,20.743C21.282,21.007 21.179,21.258 21.047,21.489L27.74,28.182C28.061,28.064 28.409,28 28.771,28C30.427,28 31.771,29.344 31.771,31C31.771,32.656 30.427,34 28.771,34C27.115,34 25.771,32.656 25.771,31C25.771,30.256 26.042,29.574 26.492,29.05L20.004,22.562ZM33.465,16.925C31.773,16.925 30.4,18.298 30.4,19.99C30.4,21.681 31.773,23.054 33.465,23.054C35.156,23.054 36.529,21.681 36.529,19.99C36.529,18.298 35.156,16.925 33.465,16.925Z"/<path d="M30.278,31.727L28.505,29.962C30.255,28.204 31.511,26.017 32.148,23.62L34.567,24.263C33.817,27.084 32.338,29.659 30.278,31.727Z"/></svg>';
const iconSvgAnaSplit = '<svg  class="utility-icon" width="100%" height="100%" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill:currentColor;fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><g transform="matrix(6.12321e-17,0.999997,-0.999997,6.12321e-17,323.199,0.350154)"><path d="M22.865,288.42C30.504,289.922 36.274,296.662 36.274,304.739C36.274,313.917 28.822,321.37 19.643,321.37C10.464,321.37 3.012,313.917 3.012,304.739C3.012,296.662 8.781,289.922 16.42,288.42C16.308,288.757 16.247,289.117 16.247,289.492C16.247,289.991 16.356,290.466 16.55,290.893C10.206,292.306 5.458,297.873 5.458,304.739C5.458,312.567 11.814,318.923 19.643,318.923C27.471,318.923 33.827,312.567 33.827,304.739C33.827,297.873 28.939,292.141 22.457,290.834C22.589,290.494 22.662,290.125 22.662,289.738C22.662,289.226 22.534,288.743 22.309,288.32Z" style="fill-opacity:0.33;"/></g><g transform="matrix(6.12321e-17,0.999997,-0.999997,6.12321e-17,323.199,0.350154)"><path d="M32.465,294.151C32.517,294.148 32.57,294.147 32.623,294.147C34.294,294.147 35.65,295.503 35.65,297.173C35.65,298.844 34.294,300.2 32.623,300.2C31.842,300.2 31.129,299.904 30.592,299.417L22.62,304.02C22.675,304.247 22.704,304.484 22.704,304.727C22.704,306.398 21.347,307.754 19.677,307.754C18.006,307.754 16.65,306.398 16.65,304.727C16.65,304.51 16.673,304.298 16.716,304.094L8.671,299.45C8.138,299.917 7.44,300.2 6.677,300.2C5.006,300.2 3.65,298.844 3.65,297.173C3.65,295.503 5.006,294.147 6.677,294.147C6.725,294.147 6.774,294.148 6.821,294.15C8.935,291.595 11.796,289.68 15.069,288.745C15.52,286.63 17.401,285.042 19.65,285.042C21.9,285.042 23.782,286.632 24.232,288.75C27.498,289.687 30.355,291.599 32.465,294.151ZM9.056,295.302C9.461,295.817 9.704,296.467 9.704,297.173C9.704,297.537 9.639,297.886 9.522,298.209L17.386,302.749C17.777,302.297 18.299,301.962 18.893,301.803L18.893,294.348C17.18,294.07 15.778,292.861 15.223,291.258C12.821,292.045 10.701,293.458 9.056,295.302ZM24.075,291.262C23.518,292.867 22.11,294.076 20.393,294.351L20.393,301.786C20.99,301.931 21.518,302.253 21.918,302.693L29.762,298.164C29.655,297.854 29.596,297.52 29.596,297.173C29.596,296.471 29.836,295.825 30.237,295.311C28.594,293.466 26.476,292.052 24.075,291.262ZM16.596,289.726C16.596,291.411 17.965,292.779 19.65,292.779C21.335,292.779 22.704,291.411 22.704,289.726C22.704,288.04 21.335,286.672 19.65,286.672C17.965,286.672 16.596,288.04 16.596,289.726Z"/</g></svg>';
const iconSvgFullCircle = '<svg class="utility-icon" width="100%" height="100%" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill:currentColor;fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><path d="M20,3.431C29.144,3.431 36.569,10.856 36.569,20C36.569,29.145 29.144,36.569 20,36.569C10.855,36.569 3.431,29.145 3.431,20C3.431,10.856 10.855,3.431 20,3.431ZM20,5.785C12.155,5.785 5.785,12.155 5.785,20C5.785,27.845 12.155,34.215 20,34.215C27.845,34.215 34.215,27.845 34.215,20C34.215,12.155 27.845,5.785 20,5.785ZM20,16.867C21.73,16.867 23.133,18.27 23.133,20C23.133,21.73 21.73,23.133 20,23.133C18.27,23.133 16.867,21.73 16.867,20C16.867,18.27 18.27,16.867 20,16.867Z"/></svg>';
const iconSvgNotification = `<svg class="utility-icon" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="currentColor">
    <path d="M4,19L4,17L6,17L6,10C6,8.617 6.417,7.387 7.25,6.313C8.083,5.238 9.167,4.533 10.5,4.2L10.5,3.5C10.5,3.083 10.646,2.729 10.938,2.438C11.229,2.146 11.583,2 12,2C12.417,2 12.771,2.146 13.063,2.438C13.354,2.729 13.5,3.083 13.5,3.5L13.5,4.2C14.833,4.533 15.917,5.238 16.75,6.313C17.583,7.387 18,8.617 18,10L18,17L20,17L20,19L4,19ZM12,22C11.45,22 10.979,21.804 10.588,21.413C10.196,21.021 10,20.55 10,20L14,20C14,20.55 13.804,21.021 13.413,21.413C13.021,21.804 12.55,22 12,22ZM8,17L16,17L16,10C16,8.9 15.608,7.958 14.825,7.175C14.042,6.392 13.1,6 12,6C10.9,6 9.958,6.392 9.175,7.175C8.392,7.958 8,8.9 8,10L8,17Z" style="fill:currentColor;fill-rule:nonzero;"/>
</svg>`;
let iconShortRange = iconSvgCompShort;
let iconLongRange = iconSvgCompLong;
let iconFullRange = iconSvgFullCircle;
let iconSplitRange = iconSvgCompSplit;
let iconNotification = iconSvgNotification;
document.addEventListener('DOMContentLoaded', init);
/* Color management */ function setPrimary(color) {
    primaryColor = new _colorUtilsJs.Color(color);
    document.documentElement.style.setProperty('--color-primary', primaryColor.toString({
        format: "srgb"
    }));
}
function setNeutral(color) {
    neutralColor = _colorUtilsJs.relateColor(primaryColor, _colorUtilsJs.setValue(color.lch.l, 1), _colorUtilsJs.setValue(color.lch.c, 0.05), _colorUtilsJs.setHue(color.lch.h, hueDif));
}
function defaultHueDif() {
    // This function should return a default hue difference, adjust as necessary
    return 179; // Example: Returns a default hue difference of 30 degrees
}
const primaryColorInput = document.getElementById('color-input');
if (primaryColorInput) {
    primaryColorInput.addEventListener('input', handlePrimaryColorInput);
    primaryColorInput.addEventListener('paste', (event)=>{
        // Prevent default paste behavior to control the input
        event.preventDefault();
        // Get the pasted text and remove any leading or trailing whitespace
        const pasteData = (event.clipboardData || window.clipboardData).getData('text').trim();
        // Remove any `#` from the pasted text, then prepend a single `#`
        let sanitizedValue = '#' + pasteData.replace(/#/g, '').slice(0, 6);
        // Update the input field and call the handler
        primaryColorInput.value = sanitizedValue;
        handlePrimaryColorInput({
            target: primaryColorInput
        });
    });
}
function initiateColors() {
    const params = new URLSearchParams(window.location.search);
    let primaryLCH;
    let hueDifValue = hueDif; // Default to current hueDif (179.5)
    // Step 1: Load the primaryColor
    if (params.has('primaryColor')) {
        const primaryColorValue = params.get('primaryColor');
        const primaryColorInput = document.getElementById('color-input');
        if (primaryColorInput) {
            primaryColorInput.value = primaryColorValue;
            try {
                primaryLCH = new Color(primaryColorValue).to("lch"); // Convert hex to LCH
                setPrimary(primaryLCH); // Set primary color
            } catch (error) {
                console.error('Error converting primary color to LCH:', error);
                return;
            }
        }
    } else {
        // Fallback: Generate a random primary color if no query parameter exists
        primaryLCH = _colorUtilsJs.generateRandomLCH(); // Generate random LCH color
        setPrimary(primaryLCH);
    }
    // Ensure the primary color is set before proceeding
    if (!primaryLCH) {
        console.error('Primary color (LCH) is not defined. Cannot calculate secondary color.');
        return;
    }
    // Step 2: Load the numeric hueDif and update seg-ctrl accordingly
    if (params.has('hueDif')) {
        const hueDifParam = params.get('hueDif');
        hueDifValue = parseFloat(hueDifParam);
        if (isNaN(hueDifValue)) {
            console.error(`Invalid hueDif value: ${hueDifParam}. Falling back to default hueDif.`);
            hueDifValue = 179.5; // Default hueDif if NaN
        }
        // Update the seg-ctrl UI based on the hueDif
        let segCtrlValue;
        switch(hueDifValue){
            case 179.5:
                segCtrlValue = 'complementary';
                break;
            case 120:
                segCtrlValue = 'triad';
                break;
            case 90:
                segCtrlValue = 'quad';
                break;
            case 45:
                segCtrlValue = 'analogous';
                break;
            default:
                console.error('Invalid numeric hueDif value:', hueDifValue); // Log error
                return; // Stop execution if hueDif is invalid
        }
        const segCtrlInput = document.querySelector(`.seg-ctrl input[value="${segCtrlValue}"]`);
        if (segCtrlInput) {
            segCtrlInput.checked = true;
            // Manually trigger handleHueChange to update the hueDif and recalculate secondary color
            handleHueChange({
                target: segCtrlInput
            });
        } else console.error('Failed to update seg-ctrl for hueDif:', hueDifValue); // Log error
    } else {
        // Fallback: Use default hue difference if no query parameter exists
        hueDifValue = 179.5; // Default to complementary if no query parameter
        setSecondary(hueDifValue); // Ensure secondary color is calculated with the default hueDif
    }
    // Step 3: Set chroma and lightness sliders
    const chromaSlider = document.getElementById('chroma-slider');
    const lightnessSlider = document.getElementById('lightness-slider');
    if (chromaSlider && lightnessSlider) {
        if (params.has('chroma')) {
            const chromaValue = params.get('chroma');
            chromaSlider.value = chromaValue;
            lastUserChroma = parseFloat(chromaValue);
        } else chromaSlider.value = lastUserChroma;
        if (params.has('lightness')) {
            const lightnessValue = params.get('lightness');
            lightnessSlider.value = lightnessValue;
            lastUserLightness = parseFloat(lightnessValue);
        } else lightnessSlider.value = lastUserLightness;
    }
    // Step 4: Load the dynamically created chroma toggle state
    const chromaToggle = document.getElementById('chroma-toggle-checkbox');
    if (chromaToggle && params.has('chromaToggle')) chromaToggle.checked = params.get('chromaToggle') === 'on';
    // After setting chroma and lightness, update the secondary color controls
    updateSecondaryColorControls();
    // Update the rest of the UI
    updateColorProperties();
}
function setSecondary(hueDif) {
    const newHue = _colorUtilsJs.setHue(primaryColor.lch.h, hueDif);
    const newChroma = calculateChroma(primaryColor.lch.c, hueDif);
    secondaryColor = _colorUtilsJs.relateColor(primaryColor, 100 - primaryColor.lch.l, newChroma, newHue);
    updateColorProperties();
    return secondaryColor;
}
function updateIndicationColors() {
    indicationColors = {
        alert: colorManager.getIndicationColor("alert"),
        warning: colorManager.getIndicationColor("warning"),
        success: colorManager.getIndicationColor("success"),
        info: colorManager.getIndicationColor("info")
    };
    updateColorDisplay("alert-color", indicationColors.alert);
    updateColorDisplay("warning-color", indicationColors.warning);
    updateColorDisplay("success-color", indicationColors.success);
    updateColorDisplay("info-color", indicationColors.info);
}
function updateColorDisplay(elementId, color) {
    const element = document.getElementById(elementId);
    if (element) {
        element.style.backgroundColor = color.to("srgb").toString({
            format: "hex"
        });
        element.textContent = color.to("srgb").toString({
            format: "hex"
        });
    }
}
function updateColorProperties() {
    document.documentElement.style.setProperty('--color-primary', primaryColor.toString({
        format: "srgb"
    }));
    document.documentElement.style.setProperty('--color-secondary', secondaryColor.toString({
        format: "srgb"
    }));
}
/* Initiation function*/ function init() {
    initCallCount++;
    // Check for URL parameters before any initialization
    const params = new URLSearchParams(window.location.search);
    if (params.size > 0) handleURLParameters();
    else // Only run default initialization if no URL parameters
    initiateColors(); /* initiating system colors */ 
    /* Continue with normal initialization */ initializeMainColorInput(); /* Main color input field */ 
    setupSecondaryColorHandlers(); /* secondary color controls*/ 
    setupHueSelectionControls(); /* hue harmony tabs */ 
    updateSecondaryColor(); /* secondary color update */ 
    setNeutral(primaryColor); /* set neutral color base */ 
    setupThemeSwitch(); /* UI bright/ dark theme switch */ 
    /* creating the palettes section */ const palettesSection = document.querySelector('.palettes-section');
    if (!palettesSection) {
        console.error('Palettes section not found');
        return;
    }
    // Ensure colors are set in ColorManager
    colorManager.setPrimaryColor(primaryColor);
    colorManager.setSecondaryColor(secondaryColor);
    // Add functionality to secondary color ticker
    (0, _uiManagerJs.uiManager).addColorTickerFunctionality('secondary-color');
    /* UI controls */ setupColorHandlers();
    updateUIElements();
}
function handleURLParameters() {
    const params = new URLSearchParams(window.location.search);
    try {
        // 1. Set primary color first
        if (params.has('primaryColor')) {
            primaryColor = new Color(params.get('primaryColor')).to('lch');
            colorManager.setPrimaryColor(primaryColor);
        } else {
            primaryColor = new Color('lch', [
                50,
                50,
                0
            ]);
            colorManager.setPrimaryColor(primaryColor);
        }
        // 2. Set hueDif before calculating secondary color
        if (params.has('hueDif')) {
            hueDif = parseFloat(params.get('hueDif'));
            const harmonyValue = getHarmonyFromHueDif(hueDif);
            const radio = document.querySelector(`input[value="${harmonyValue}"]`);
            if (radio) radio.checked = true;
        }
        // 3. Set secondary color parameters
        if (params.has('chroma') && params.has('lightness')) {
            lastUserChroma = parseInt(params.get('chroma'));
            lastUserLightness = parseInt(params.get('lightness'));
            const newHue = (primaryColor.lch.h + hueDif) % 360;
            secondaryColor = new Color('lch', [
                lastUserLightness,
                lastUserChroma,
                newHue
            ]);
            colorManager.setSecondaryColor(secondaryColor);
        } else {
            secondaryColor = new Color('lch', [
                70,
                100,
                (primaryColor.lch.h + hueDif) % 360
            ]);
            colorManager.setSecondaryColor(secondaryColor);
        }
        // Update UI after all parameters are set
        updateUIElements();
    } catch (error) {
        console.error('Error handling URL parameters:', error);
        primaryColor = new Color('lch', [
            50,
            50,
            0
        ]);
        secondaryColor = new Color('lch', [
            70,
            100,
            180
        ]);
        colorManager.setPrimaryColor(primaryColor);
        colorManager.setSecondaryColor(secondaryColor);
        updateUIElements();
    }
}
// New function to update UI elements without setting up rows again
function appendIconToRow(rowLabelText, svgIcon) {
    // Select all row labels within palettes-section
    const rowLabels = document.querySelectorAll('.palettes-section .palette-label');
    rowLabels.forEach((labelElement)=>{
        if (labelElement.textContent.trim() === rowLabelText) {
            // Remove any existing icon in the label
            const existingIcon = labelElement.querySelector('.palette-icon');
            if (existingIcon) existingIcon.remove();
            // Create a new span for the icon and add it at the beginning of the label
            const iconSpan = document.createElement('span');
            iconSpan.className = 'palette-icon';
            iconSpan.innerHTML = svgIcon;
            labelElement.insertAdjacentElement('afterbegin', iconSpan);
        }
    });
}
function createAndAddRow(rowInstance, label, containerIdPrefix, isNeutral = false) {
    try {
        // Check if the row already exists by label
        const existingRow = rows.find((row)=>row.label === label);
        if (existingRow) {
            /*   console.warn(`Row with label "${label}" already exists. Updating existing row.`); */ existingRow.row.update(rowInstance.sourceColor);
            return;
        }
        // Generate unique containerId
        const containerId = `${containerIdPrefix}-${Math.random().toString(36).substr(2, 9)}`;
        rowInstance.containerId = containerId; // Assign containerId to the row
        // Ensure the palettes section exists
        const palettesSection = document.querySelector('.palettes-section');
        if (!palettesSection) {
            console.error('Palettes section not found');
            return;
        }
        // Add the row instance to the rows array and observe it
        rows.push({
            row: rowInstance,
            label
        });
        colorManager.addObserver(rowInstance);
        // Create row wrapper
        const rowWrapper = document.createElement('div');
        rowWrapper.className = 'row-wrapper';
        // Add label and buttons container
        const labelButtonContainer = document.createElement('div');
        labelButtonContainer.className = 'label-button-container';
        // Add label
        if (label) {
            const labelElement = document.createElement('h4');
            labelElement.textContent = label;
            labelElement.className = 'palette-label heading-04';
            labelButtonContainer.appendChild(labelElement);
        }
        // Add chroma toggle for neutral palettes
        if (isNeutral) try {
            const chromaToggle = rowInstance.createChromaToggle();
            labelButtonContainer.appendChild(chromaToggle);
        } catch (error) {
            console.error(`Failed to create chroma toggle for ${label}:`, error);
        }
        // Add "Copy as JSON" button
        const copyJsonButton = document.createElement('button');
        copyJsonButton.textContent = 'Copy as JSON';
        copyJsonButton.className = 'copy-json-button';
        copyJsonButton.addEventListener('click', ()=>{
            try {
                const jsonPalette = rowInstance.getSwatchesAsJson();
                (0, _uiManagerJs.uiManager).copyToClipboard(jsonPalette, copyJsonButton);
            } catch (error) {
                console.error(`Failed to copy JSON for ${label}:`, error);
            }
        });
        labelButtonContainer.appendChild(copyJsonButton);
        // Create the swatch container
        const swatchContainer = document.createElement('div');
        swatchContainer.id = containerId;
        swatchContainer.className = 'color-swatch-container';
        // Add specific classes based on row type
        if (rowInstance instanceof (0, _colorPaletteJs.ScalesRow)) swatchContainer.classList.add('scale-swatch-container');
        if (rowInstance instanceof (0, _colorPaletteJs.IndicationRow)) swatchContainer.classList.add('indication-scale');
        // Append labelButtonContainer and swatchContainer to rowWrapper
        rowWrapper.appendChild(labelButtonContainer);
        rowWrapper.appendChild(swatchContainer);
        // Append the row wrapper to the palettes section
        palettesSection.appendChild(rowWrapper);
        // Generate swatches for the row
        try {
            const foundSwatchContainer = document.getElementById(containerId);
            if (!foundSwatchContainer) throw new Error(`Swatch container not found for containerId: ${containerId}`);
            rowInstance.createSwatches(containerId, label);
        } catch (error) {
            console.error(`Failed to create swatches for ${label}:`, error);
        }
        // Verify container creation
        const createdContainer = document.getElementById(containerId);
        if (!createdContainer) console.error(`Container for ${containerId} could not be created.`);
        // Cleanup duplicate rows or containers if any
        const allContainers = document.querySelectorAll(`#${containerId}`);
        if (allContainers.length > 1) /* console.warn(`Duplicate containers found for ${containerId}. Cleaning up.`); */ allContainers.forEach((container, index)=>{
            if (index > 0) container.remove(); // Keep the first, remove duplicates
        });
    } catch (error) {
        console.error(`Failed to create and add row for ${label}:`, error);
    }
}
function setupRows() {
    rows = []; // Clear the rows array
    const palettesSection = document.querySelector('.palettes-section');
    if (palettesSection) palettesSection.innerHTML = ''; // Clear all previous rows
    else {
        console.error('Palettes section not found');
        return;
    }
    // Primary Scales Row
    const primaryScalesRow = (0, _colorPaletteJs.ScalesRow).create(primaryColor, {
        steps: 10
    }, 'Primary Scales');
    primaryScalesRow.isPrimaryBased = true;
    createAndAddRow(primaryScalesRow, 'Primary Scales', 'scalesrow');
    // Secondary Scales Row
    const secondaryScalesRow = (0, _colorPaletteJs.ScalesRow).create(secondaryColor, {
        steps: 10
    }, 'Secondary Scales');
    secondaryScalesRow.isPrimaryBased = false;
    createAndAddRow(secondaryScalesRow, 'Secondary Scales', 'scalesrow');
    // Neutral Scales Row
    const neutralScalesRow = (0, _colorPaletteJs.ScalesRow).create(primaryColor, {
        steps: 10,
        isNeutral: true,
        neutralChroma: 5
    }, 'Neutrals');
    createAndAddRow(neutralScalesRow, 'Neutrals', 'scalesrow', true);
    // Harmony Rows first
    const harmonyWideCircRow = (0, _colorPaletteJs.HarmonicColorRow).create(primaryColor, secondaryColor, {
        steps: 6,
        interpolation: 'linear',
        lightnessEase: 'linear',
        chromaEase: 'linear',
        huePath: 'longer'
    }, 'Hue wider segment');
    createAndAddRow(harmonyWideCircRow, 'Analogous wide', 'harmonyrow');
    const harmonyNarrowCircRow = (0, _colorPaletteJs.HarmonicColorRow).create(primaryColor, secondaryColor, {
        steps: 6,
        interpolation: 'linear',
        lightnessEase: 'linear',
        chromaEase: 'linear',
        huePath: 'shorter'
    }, 'Hue narrower segment');
    createAndAddRow(harmonyNarrowCircRow, 'Analogous narrow', 'harmonyrow');
    const harmonyFullCircRow = (0, _colorPaletteJs.HarmonicColorRow).create(primaryColor, secondaryColor, {
        steps: 6,
        interpolation: 'linear',
        lightnessEase: 'linear',
        chromaEase: 'linear',
        huePath: 'full-circle'
    }, 'Full circumference');
    createAndAddRow(harmonyFullCircRow, 'Analogous Full circ.', 'harmonyrow');
    const generalColorRow = new (0, _colorPaletteJs.GeneralColorRow)({
        steps: 6,
        interpolation: 'linear',
        keyColors: [
            secondaryColor,
            primaryColor,
            tertiaryColor
        ],
        containerId: 'general-color-row-container'
    });
    // Add icons to rows
    appendIconToRow('Analogous wide', iconLongRange);
    appendIconToRow('Analogous narrow', iconShortRange);
    appendIconToRow('Analogous Full circ.', iconFullRange);
    appendIconToRow('Utilities', iconNotification);
    // Create Utilities section with grid
    const utilitiesContainer = document.createElement('div');
    utilitiesContainer.className = 'utilities-container';
    // Create label container with proper structure
    const labelButtonContainer = document.createElement('div');
    labelButtonContainer.className = 'label-button-container';
    // Create heading with icon
    const heading = document.createElement('h4');
    heading.className = 'palette-label heading-04';
    // Create icon span and SVG
    const iconSpan = document.createElement('span');
    iconSpan.className = 'palette-icon';
    const utilityIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    utilityIcon.classList.add('utility-icon');
    utilityIcon.setAttribute('width', '100%');
    utilityIcon.setAttribute('height', '100%');
    utilityIcon.setAttribute('viewBox', '0 0 40 40');
    utilityIcon.setAttribute('version', '1.1');
    utilityIcon.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    utilityIcon.innerHTML = iconNotification;
    iconSpan.appendChild(utilityIcon);
    heading.appendChild(iconSpan);
    heading.appendChild(document.createTextNode('Utilities'));
    // Create copy button
    const copyButton = document.createElement('button');
    copyButton.className = 'copy-json-button';
    copyButton.textContent = 'Copy as JSON';
    // Add click handler for the copy button
    copyButton.addEventListener('click', ()=>{
        const jsonData = {};
        types.forEach((type)=>{
            const color = colorManager.getIndicationColor(type);
            if (color) {
                // Create an IndicationRow instance to get the scale colors
                const indicationRow = new (0, _colorPaletteJs.IndicationRow)(color, type);
                const [darkColor, baseColor, brightColor] = indicationRow.colors;
                jsonData[type] = {
                    [`${type}-dark`]: darkColor.to('srgb').toString({
                        format: 'hex'
                    }),
                    [`${type}-base`]: baseColor.to('srgb').toString({
                        format: 'hex'
                    }),
                    [`${type}-bright`]: brightColor.to('srgb').toString({
                        format: 'hex'
                    })
                };
            }
        });
        navigator.clipboard.writeText(JSON.stringify(jsonData, null, 2));
        // Show feedback using existing pattern
        const originalText = copyButton.textContent;
        copyButton.textContent = 'Copied to clipboard!';
        setTimeout(()=>{
            copyButton.textContent = originalText;
        }, 1500);
    });
    // Assemble the label container
    labelButtonContainer.appendChild(heading);
    labelButtonContainer.appendChild(copyButton);
    utilitiesContainer.appendChild(labelButtonContainer);
    // Create grid container for indication rows
    const indicationRowsGrid = document.createElement('div');
    indicationRowsGrid.className = 'indication-rows-grid';
    utilitiesContainer.appendChild(indicationRowsGrid);
    // Add the utilities container to the DOM FIRST
    palettesSection.appendChild(utilitiesContainer);
    // THEN create indication rows
    const types = [
        'alert',
        'warning',
        'success',
        'info'
    ];
    types.forEach((type)=>{
        const color = colorManager.getIndicationColor(type);
        if (color) {
            // Create row container
            const rowContainer = document.createElement('div');
            rowContainer.className = 'indication-row-container';
            // Create label
            const rowLabelContainer = document.createElement('div');
            rowLabelContainer.className = 'label-button-container';
            const rowLabel = document.createElement('span');
            rowLabel.className = 'row-label';
            rowLabel.textContent = `${type.charAt(0).toUpperCase() + type.slice(1)}`;
            rowLabelContainer.appendChild(rowLabel);
            rowContainer.appendChild(rowLabelContainer);
            // Create swatch container
            const swatchContainer = document.createElement('div');
            swatchContainer.className = 'color-swatch-container indication-scale';
            const containerId = `indication-scale-${type}`;
            swatchContainer.id = containerId;
            rowContainer.appendChild(swatchContainer);
            // Add to grid
            indicationRowsGrid.appendChild(rowContainer);
            // Force a reflow to ensure the container is in the DOM
            indicationRowsGrid.offsetHeight;
            // Create and populate swatches
            const indicationRow = new (0, _colorPaletteJs.IndicationRow)(color, type);
            indicationRow.createSwatches(containerId);
        }
    });
}
/** Color controls in the UI: */ function setupColorHandlers() {
    const colorInput = document.getElementById('color-input');
    const colorPicker = document.getElementById('color-picker-primary');
    // Initialize with the current css value of --color-primary
    const initialColor = getComputedStyle(document.documentElement).getPropertyValue('--color-primary').trim();
    // Convert the initial color to hex format
    const initialHexColor = new _colorUtilsJs.Color(initialColor).to('srgb').toString({
        format: 'hex'
    });
    updateColor(initialHexColor);
    // Set up event listeners
    colorInput.addEventListener('input', handlePrimaryColorInput);
    colorPicker.addEventListener('input', handleColorPicker);
    document.addEventListener('keydown', handleKeyDown);
}
function handlePrimaryColorInput(event) {
    let value = event.target.value;
    // Step 1: Keep only the first `#` and remove any others
    if (value.startsWith('#')) value = '#' + value.slice(1).replace(/#/g, ''); // Remove all additional `#`
    else value = '#' + value.replace(/#/g, ''); // Add a single leading `#`
    // Step 2: Enforce a max length of 7 characters (including #)
    value = value.slice(0, 7);
    // Step 3: Update the input field with sanitized value
    event.target.value = value;
    // Step 4: Only update color if it matches a valid hex format
    if (/^#[0-9A-Fa-f]{3}$|^#[0-9A-Fa-f]{6}$/.test(value)) {
        updateColor(value);
        updatePrimaryColor(value);
    }
}
function handleColorPicker(event) {
    const newColor = event.target.value;
    updateColor(newColor);
}
/*
function updateColor(newColor) {
    const color = new colorUtils.Color(newColor);
    document.documentElement.style.setProperty('--color-primary', color.to('srgb').toString({ format: 'hex' }));
    // Update other elements or perform additional actions as needed
}

/* update primary color value across controls and system values */ function updateColor(value) {
    const colorInput = document.getElementById('color-input');
    const colorPicker = document.getElementById('color-picker-primary');
    // Update input value
    colorInput.value = value;
    // Only proceed with color updates if we have a valid hex color
    if (/^#[0-9A-Fa-f]{3}$|^#[0-9A-Fa-f]{6}$/.test(value)) {
        // Extend 3-digit hex to 6-digit
        const extendedValue = value.length === 4 ? '#' + value[1] + value[1] + value[2] + value[2] + value[3] + value[3] : value;
        // Update color picker
        colorPicker.value = extendedValue;
        // Update color picker appearance
        updateColorPickerAppearance(extendedValue);
        // Update color input text color
        updateColorInputTextColor(extendedValue);
        // Update primary color
        updatePrimaryColor(extendedValue);
    }
}
/* Update teh color-picker element */ function updateColorPickerAppearance(colorValue) {
    const colorPicker = document.getElementById('color-picker-primary');
    // Update the background color of the color picker
    colorPicker.style.backgroundColor = colorValue;
    // Calculate contrasting text color (black or white)
    const color = new _colorUtilsJs.Color(colorValue);
    const textColor = color.luminance > 0.5 ? '#000000' : '#ffffff';
    // Update the text color of the color picker
    colorPicker.style.color = textColor;
}
/* Update primary color value to secondary*/ function updatePrimaryColor(colorValue) {
    try {
        const newPrimaryColor = new Color(colorValue).to('lch');
        // Store last primary color values before updating
        lastPrimaryChroma = primaryColor ? primaryColor.lch.c : newPrimaryColor.lch.c;
        lastPrimaryLightness = primaryColor ? primaryColor.lch.l : newPrimaryColor.lch.l;
        primaryColor = newPrimaryColor;
        const newSecondaryColor = recalculateSecondaryColor(primaryColor, hueDif, secondaryColor);
        secondaryColor = newSecondaryColor;
        colorManager.setPrimaryColor(primaryColor);
        colorManager.setSecondaryColor(secondaryColor);
        updateUIElements();
        updateAllScalesRows(primaryColor, secondaryColor, tertiaryColor, quaternaryColor);
        _colorUtilsJs.updateContrastStatus(primaryColor, secondaryColor);
    } catch (error) {
        console.error("Invalid color value:", error);
    }
    updateContrastCheck();
}
// Updated function to update all UI elements
function updateUIElements() {
    // Validate primaryColor, secondaryColor, tertiaryColor, and quaternaryColor
    if (!primaryColor || !primaryColor.lch) {
        console.error('Invalid primaryColor in updateUIElements:', primaryColor);
        return;
    }
    if (!secondaryColor || !secondaryColor.lch) {
        console.error('Invalid secondaryColor in updateUIElements:', secondaryColor);
        return;
    }
    if (!tertiaryColor || !tertiaryColor.lch) {
        console.warn('Missing or invalid tertiaryColor. Generating from secondaryColor.');
        tertiaryColor = _colorUtilsJs.relateColor(secondaryColor, secondaryColor.lch.l, Math.max(secondaryColor.lch.c, 5), (secondaryColor.lch.h + 120) % 360);
    }
    if (!quaternaryColor || !quaternaryColor.lch) console.warn('Missing or invalid quaternaryColor. It will not be updated.');
    // Update CSS variables
    document.documentElement.style.setProperty('--color-primary', primaryColor.to('srgb').toString({
        format: "hex"
    }));
    document.documentElement.style.setProperty('--color-secondary', secondaryColor.to('srgb').toString({
        format: "hex"
    }));
    document.documentElement.style.setProperty('--color-tertiary', tertiaryColor.to('srgb').toString({
        format: "hex"
    }));
    if (quaternaryColor && quaternaryColor.lch) {
        document.documentElement.style.setProperty('--color-quaternary', quaternaryColor.to('srgb').toString({
            format: "hex"
        }));
        console.log('Quaternary color CSS variable updated:', quaternaryColor.to('srgb').toString({
            format: "hex"
        }));
    } else console.warn('Quaternary color is not available for CSS variable update');
    // Update primary color inputs
    document.getElementById('color-input').value = primaryColor.to('srgb').toString({
        format: "hex"
    });
    updateColorPickerAppearance(primaryColor.to('srgb').toString({
        format: "hex"
    }));
    // Update secondary color display
    updateSecondaryColorDisplay();
    // Update UI controls for secondary color
    updateSecondaryColorControls();
    // Update all rows (both ScalesRow and HarmonicColorRow)
    if (rows) rows.forEach((item, index)=>{
        try {
            if (item.row && typeof item.row.update === 'function') {
                if (item.row instanceof (0, _colorPaletteJs.GeneralColorRow)) item.row.update({
                    primaryColor,
                    secondaryColor,
                    tertiaryColor,
                    quaternaryColor
                });
                else item.row.update(primaryColor, secondaryColor, tertiaryColor);
            } else console.warn(`Row ${index} does not have a valid update method:`, item.row);
        } catch (error) {
            console.error(`Error updating row ${index}:`, error);
        }
    });
    // Update contrast status
    _colorUtilsJs.updateContrastStatus(primaryColor, secondaryColor, tertiaryColor);
    // Log warnings for zero chroma
    if (secondaryColor.lch.c === 0) console.warn('Warning: Secondary color chroma is zero');
    if (tertiaryColor && tertiaryColor.lch.c === 0) console.warn('Warning: Tertiary color chroma is zero');
    if (quaternaryColor && quaternaryColor.lch.c === 0) console.warn('Warning: Quaternary color chroma is zero');
}
function createIndicationColorRows() {
    const indicationColors = [
        {
            name: "Alert",
            color: colorManager.getIndicationColor("alert")
        },
        {
            name: "Warning",
            color: colorManager.getIndicationColor("warning")
        },
        {
            name: "Success",
            color: colorManager.getIndicationColor("success")
        },
        {
            name: "Info",
            color: colorManager.getIndicationColor("info")
        }
    ];
    const container = document.getElementById("indication-colors-container");
    if (!container) {
        console.error("Indication colors container not found");
        return;
    }
    container.innerHTML = "" // Clear existing content
    ;
    indicationColors.forEach(({ name, color })=>{
        if (color) {
            const row = new (0, _colorPaletteJs.ScalesRow)(color, 3, name);
            container.appendChild(row.element);
        }
    });
}
// Add this new function to update the UI controls for secondary color
function updateSecondaryColorControls() {
    const chromaSlider = document.getElementById('chroma-slider');
    const chromaInput = document.getElementById('chroma-input');
    const lightnessSlider = document.getElementById('lightness-slider');
    const lightnessInput = document.getElementById('lightness-input');
    if (!chromaSlider || !chromaInput || !lightnessSlider || !lightnessInput) {
        console.error('Secondary color control elements not found');
        return;
    }
    const maxChroma = 132;
    const chroma = Math.round(secondaryColor.lch.c);
    const lightness = Math.round(secondaryColor.lch.l);
    // Only update if the values have changed
    if (parseInt(chromaSlider.value) !== chroma) {
        chromaSlider.value = chroma;
        chromaInput.value = chroma;
    }
    if (parseInt(lightnessSlider.value) !== lightness) {
        lightnessSlider.value = lightness;
        lightnessInput.value = lightness;
    }
    updateContrastCheck();
}
function updateAllScalesRows(primaryColor, secondaryColor, tertiaryColor, quaternaryColor) {
    rows.forEach((item)=>{
        if (item.row instanceof (0, _colorPaletteJs.ScalesRow)) item.row.update(primaryColor, secondaryColor, tertiaryColor, quaternaryColor);
    });
}
function updateColorInputTextColor(colorValue) {
    const colorInput = document.getElementById('color-input');
    const copyIcon = document.getElementById('main-input-copy-to-cb').querySelector('svg path');
    const color = new _colorUtilsJs.Color(colorValue);
    // Calculate relative luminance
    const luminance = color.luminance;
    // Choose text color based on luminance
    // Using Web Content Accessibility Guidelines (WCAG) contrast ratio
    const textColor = luminance > 0.179 ? '#000000' : '#ffffff';
    // Update text color and background color
    colorInput.style.color = textColor;
    colorInput.style.backgroundColor = colorValue;
    // Directly set the fill color of the SVG path
    copyIcon.setAttribute('fill', textColor);
}
/* Secondary color */ function setupSecondaryColorHandlers() {
    const hueControls = document.querySelectorAll('input[name="colorScheme"]');
    const chromaSlider = document.getElementById('chroma-slider');
    const chromaInput = document.getElementById('chroma-input');
    const lightnessSlider = document.getElementById('lightness-slider');
    const lightnessInput = document.getElementById('lightness-input');
    if (chromaSlider && chromaInput) {
        chromaSlider.max = 132;
        chromaInput.max = 132;
        chromaSlider.addEventListener('input', handleChromaChange);
        chromaInput.addEventListener('input', handleChromaChange);
    } else console.error('Chroma controls not found');
    hueControls.forEach((control)=>{
        control.addEventListener('change', handleHueChange);
    });
    if (lightnessSlider && lightnessInput) {
        lightnessSlider.addEventListener('input', handleLightnessChange);
        lightnessInput.addEventListener('input', handleLightnessChange);
        lightnessInput.addEventListener('change', handleSecondaryLightnessChange); // For when the input loses focus
    } else console.error('Lightness controls not found');
    // Add focus and blur event listeners
    if (chromaInput) {
        chromaInput.addEventListener('focus', handleSecondaryInputFocus);
        chromaInput.addEventListener('blur', handleSecondaryInputBlur);
    }
    if (lightnessInput) {
        lightnessInput.addEventListener('focus', handleSecondaryInputFocus);
        lightnessInput.addEventListener('blur', handleSecondaryInputBlur);
    }
    // Set maximum value for chroma input and slider
    if (chromaInput) chromaInput.max = 132;
    if (chromaSlider) chromaSlider.max = 132;
    // Set range for lightness input and slider
    if (lightnessInput) {
        lightnessInput.min = 0;
        lightnessInput.max = 100;
    }
    if (lightnessSlider) {
        lightnessSlider.min = 0;
        lightnessSlider.max = 100;
    }
}
function handleLightnessChange(event) {
    const lightnessSlider = document.getElementById('lightness-slider');
    const lightnessInput = document.getElementById('lightness-input');
    let newValue = parseInt(event.target.value);
    newValue = Math.min(Math.max(newValue, 0), 100);
    if (event.target === lightnessSlider) lightnessInput.value = newValue;
    else if (event.target === lightnessInput) lightnessSlider.value = newValue;
    lastUserLightness = newValue;
    updateSecondaryColor();
}
function handleSecondaryLightnessChange(event) {
    const maxLightness = 100;
    lastUserLightness = Math.min(Math.max(parseInt(event.target.value), 0), maxLightness);
    document.getElementById('lightness-slider').value = lastUserLightness;
    document.getElementById('lightness-input').value = lastUserLightness;
    updateSecondaryColor();
}
function handleHueChange(event) {
    switch(event.target.value){
        case 'complementary':
            hueDif = 179.5;
            iconShortRange = iconSvgCompShort;
            iconLongRange = iconSvgCompLong;
            iconSplitRange = iconSvgCompSplit;
            break;
        case 'triad':
            hueDif = 120;
            iconShortRange = iconSvgTriadShort;
            iconLongRange = iconSvgTriadLong;
            iconSplitRange = iconSvgTriadSplit;
            break;
        case 'quad':
            hueDif = 90;
            iconShortRange = iconSvgQuadShort;
            iconLongRange = iconSvgQuadLong;
            iconSplitRange = iconSvgQuadSplit;
            break;
        case 'analogous':
            hueDif = 45;
            iconShortRange = iconSvgAnaShort;
            iconLongRange = iconSvgAnaLong;
            iconSplitRange = iconSvgAnaSplit;
            break;
    }
    appendIconToRow("Analogous wide", iconLongRange);
    appendIconToRow("Analogous narrow", iconShortRange);
    appendIconToRow("Analogous full circ.", iconFullRange);
    appendIconToRow('Utilities', iconNotification);
    // Calculate new secondary color, passing true for hueChangeOnly
    const newSecondaryColor = recalculateSecondaryColor(primaryColor, hueDif, secondaryColor, true);
    if (!newSecondaryColor || !newSecondaryColor.lch || typeof newSecondaryColor.lch.h === 'undefined') {
        console.error('Invalid secondary color calculated:', newSecondaryColor);
        return;
    }
    secondaryColor = newSecondaryColor;
    // Update secondary color in ColorManager
    colorManager.setSecondaryColor(secondaryColor);
    // Keep other functionalities intact
    updateUIElements();
    updateAllScalesRows(primaryColor, secondaryColor, tertiaryColor, quaternaryColor);
}
function calculateChroma(primaryChroma, hueDifference) {
    // This is a simple example. You might want to adjust this based on your specific needs
    const factor = 1 - hueDifference / 360;
    return primaryChroma * factor;
}
function handleSecondaryInputFocus() {
    isSecondaryInputFocused = true;
}
function handleSecondaryInputBlur() {
    isSecondaryInputFocused = false;
}
function handleChromaChange(event) {
    const maxChroma = 132;
    lastUserChroma = Math.min(Math.max(parseInt(event.target.value), 0), maxChroma);
    document.getElementById('chroma-slider').value = lastUserChroma;
    document.getElementById('chroma-input').value = lastUserChroma;
    updateSecondaryColor();
}
function updateSecondaryColor() {
    if (!primaryColor) {
        console.error('Primary color is not set.');
        return;
    }
    const chromaSlider = document.getElementById('chroma-slider');
    const lightnessSlider = document.getElementById('lightness-slider');
    if (!chromaSlider || !lightnessSlider) {
        console.error('Chroma or Lightness slider not found.');
        return;
    }
    const chroma = parseInt(chromaSlider.value);
    const lightness = parseInt(lightnessSlider.value);
    const newSecondaryColor = _colorUtilsJs.relateColor(primaryColor, lightness, chroma, _colorUtilsJs.setHue(primaryColor.lch.h, hueDif));
    if (!newSecondaryColor || !newSecondaryColor.lch) {
        console.error('Failed to calculate secondary color:', newSecondaryColor);
        return;
    }
    secondaryColor = newSecondaryColor;
    colorManager.setSecondaryColor(secondaryColor);
    updateUIElements();
    updateAllScalesRows(primaryColor, secondaryColor, tertiaryColor, quaternaryColor);
    updateContrastCheck();
}
function updateSecondaryColorDisplay() {
    const secondaryColorElement = document.getElementById('secondary-color');
    if (!secondaryColorElement) {
        console.error('Secondary color element not found');
        return;
    }
    if (!secondaryColor) {
        console.error('Secondary color is undefined');
        return;
    }
    let hexColor;
    try {
        hexColor = secondaryColor.to('srgb').toString({
            format: "hex"
        });
        // Convert back to LCH to check if chroma is preserved
        const backToLCH = new _colorUtilsJs.Color(hexColor).to('lch');
    } catch (error) {
        console.error('Error converting secondary color to hex:', error);
        hexColor = '#000000'; // Fallback to black if conversion fails
    }
    secondaryColorElement.style.backgroundColor = hexColor;
    // update hex value display
    let hexValue = secondaryColorElement.querySelector('.hex-value');
    if (!hexValue) {
        hexValue = document.createElement('span');
        hexValue.className = 'hex-value';
        secondaryColorElement.appendChild(hexValue);
    }
    hexValue.textContent = hexColor;
    // Set text color based on contrast
    try {
        const textColor = _colorUtilsJs.getContrastTextColor(hexColor);
        hexValue.style.color = textColor;
        // Update icon colors
        const copyIcon = secondaryColorElement.querySelector('.copy-icon');
        const checkIcon = secondaryColorElement.querySelector('.check-icon');
        if (copyIcon) copyIcon.style.color = textColor;
        if (checkIcon) checkIcon.style.color = textColor;
    } catch (error) {
        console.error('Error setting contrast text color:', error);
    }
}
/* Capture key events on page for primary color value typing */ function handleKeyDown(event) {
    const colorInput = document.getElementById('color-input');
    const validKeys = /^[#0-9A-Fa-f]$/;
    if (validKeys.test(event.key) && document.activeElement !== colorInput && !isSecondaryInputFocused) {
        event.preventDefault();
        colorInput.focus();
        if (event.key === '#') colorInput.value = '#';
        else colorInput.value = '#' + event.key;
        // Trigger the input event to update the color
        colorInput.dispatchEvent(new Event('input'));
    }
}
/* Setup bright/dark theme switch */ function setupThemeSwitch() {
    const body = document.body;
    const themeCheckbox = document.getElementById('theme-checkbox');
    function setTheme(isDark) {
        body.classList.toggle('main-theme-dark', isDark);
        body.classList.toggle('main-theme-bright', !isDark);
        localStorage.setItem('darkMode', isDark);
    }
    function toggleTheme() {
        const isDark = themeCheckbox.checked;
        setTheme(isDark);
    }
    // Set initial theme
    const savedTheme = localStorage.getItem('darkMode');
    const defaultDark = savedTheme === null ? true : savedTheme === 'true';
    themeCheckbox.checked = defaultDark;
    setTheme(defaultDark);
    // Event listener for checkbox changes
    themeCheckbox.addEventListener('change', toggleTheme);
    // Event listener for Enter key
    themeCheckbox.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            this.checked = !this.checked;
            toggleTheme();
        }
    });
}
document.addEventListener('DOMContentLoaded', setupThemeSwitch);
/* Setup hue harmony tabs */ function setupHueSelectionControls() {
    const labels = document.querySelectorAll('.seg-ctrl label');
    /* Allow keyboard control */ labels.forEach((label)=>{
        label.addEventListener('keydown', function(event) {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault(); // Prevent default action for space key
                const radio = document.getElementById(this.getAttribute('for'));
                radio.checked = true;
                radio.dispatchEvent(new Event('change')); // Trigger change event on the radio button
            }
        });
    });
}
function initializeMainColorInput() {
    /* Main color text input field */ const mainInputCopyBtn = document.getElementById('main-input-copy-to-cb');
    const colorInput = document.getElementById('color-input');
    /* Copy to clipboard functionality */ if (mainInputCopyBtn && colorInput) mainInputCopyBtn.addEventListener('click', ()=>{
        const originalValue = colorInput.value;
        navigator.clipboard.writeText(originalValue).then(()=>{
            // Clear any existing timeout for this element
            if ((0, _uiManagerJs.copyTimeouts)[colorInput.id]) clearTimeout((0, _uiManagerJs.copyTimeouts)[colorInput.id]);
            // Replace input value with 'Copied!'
            colorInput.value = 'Copied!';
            // Set new timeout
            (0, _uiManagerJs.copyTimeouts)[colorInput.id] = setTimeout(()=>{
                colorInput.value = originalValue;
                delete (0, _uiManagerJs.copyTimeouts)[colorInput.id];
            }, 1500);
        });
    });
    else console.error('Main color input or copy button not found');
}
function recalculateSecondaryColor(primaryColor, hueDif, currentSecondaryColor, hueChangeOnly = false) {
    const newHue = _colorUtilsJs.setHue(primaryColor.lch.h, hueDif);
    let newChroma, newLightness;
    if (hueChangeOnly) {
        // Only change the hue, keep current chroma and lightness
        newChroma = currentSecondaryColor.lch.c;
        newLightness = currentSecondaryColor.lch.l;
    } else {
        // Adjust chroma and lightness based on primary color changes
        const chromaRatio = primaryColor.lch.c / lastPrimaryChroma;
        const lightnessRatio = primaryColor.lch.l / lastPrimaryLightness;
        newChroma = Math.min(Math.max(lastUserChroma * chromaRatio, 1), 132);
        newLightness = Math.min(Math.max(lastUserLightness * lightnessRatio, 0), 100);
    }
    const newSecondaryColor = _colorUtilsJs.relateColor(primaryColor, newLightness, newChroma, newHue);
    // Update last user values only if not just changing hue
    if (!hueChangeOnly) {
        lastUserChroma = newChroma;
        lastUserLightness = newLightness;
    }
    return newSecondaryColor;
}
function updateContrastCheck() {
    const foregroundColor = getComputedStyle(document.body).color; // Example fallback
    const backgroundColor = getComputedStyle(document.body).backgroundColor;
    const ratio = _colorUtilsJs.updateContrastStatus(foregroundColor, backgroundColor);
    const primaryColorHex = primaryColor.to('srgb').toString({
        format: "hex"
    });
    const secondaryColorHex = secondaryColor.to('srgb').toString({
        format: "hex"
    });
    const contrastStatus = _colorUtilsJs.updateContrastStatus(primaryColorHex, secondaryColorHex);
    const contrastStatusElement = document.getElementById('contrast-status');
    if (!contrastStatusElement) {
        console.error("Contrast status element not found in the DOM");
        return;
    }
    const successIcon = '<svg xmlns="http://www.w3.org/2000/svg" height="1rem" viewBox="0 -960 960 960" width="1rem" fill="currentColor"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>';
    const failIcon = '<svg xmlns="http://www.w3.org/2000/svg" height="1rem" viewBox="0 -960 960 960" width="1rem" fill="currentColor"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>';
    contrastStatusElement.innerHTML = `
        <span class="${contrastStatus.aaLarge ? 'success' : 'fail'}">
            ${contrastStatus.aaLarge ? successIcon : failIcon} AA18
        </span>
        <span class="${contrastStatus.aa ? 'success' : 'fail'}">
            ${contrastStatus.aa ? successIcon : failIcon} AA
        </span>
        <span class="${contrastStatus.aaa ? 'success' : 'fail'}">
            ${contrastStatus.aaa ? successIcon : failIcon} AAA
        </span>
    `;
    contrastStatusElement.setAttribute('title', `Contrast ratio: ${contrastStatus.ratio}`);
}
/* Copying palettes to clipboard */ function extractColorsWithLabels(rowId, label) {
    const colors = [];
    const rowContainer = document.getElementById(rowId);
    if (!rowContainer) {
        console.error(`Row container with ID ${rowId} not found.`);
        return colors;
    }
    // Select all .hex-value spans and use the label for each color
    const hexValueElements = rowContainer.querySelectorAll('.hex-value');
    hexValueElements.forEach((hexElement, index)=>{
        const colorValue = hexElement.textContent.trim();
        if (colorValue) {
            const colorLabel = `${label}-color${index + 1}`;
            colors.push({
                [colorLabel]: colorValue
            });
        }
    });
    return colors; // Returns an array of color objects with labels
}
/* generate Sharable URL */ function generateShareableURL() {
    const params = new URLSearchParams();
    // Capture the primary color from #color-input
    const primaryColorInput = document.getElementById('color-input');
    if (primaryColorInput) {
        const primaryColorValue = primaryColorInput.value;
        params.set('primaryColor', primaryColorValue);
    }
    // Capture the selected hue difference (hueDif) from seg-ctrl and set the numeric value
    const selectedSegCtrl = document.querySelector('.seg-ctrl input:checked');
    if (selectedSegCtrl) {
        let hueDifValue;
        switch(selectedSegCtrl.value){
            case 'complementary':
                hueDifValue = 179.5;
                break;
            case 'triad':
                hueDifValue = 120;
                break;
            case 'quad':
                hueDifValue = 90;
                break;
            case 'analogous':
                hueDifValue = 45;
                break;
            default:
                hueDifValue = 0; // Fallback
        }
        params.set('hueDif', hueDifValue);
    }
    // Capture chroma and lightness slider values
    const chromaSlider = document.getElementById('chroma-slider');
    const lightnessSlider = document.getElementById('lightness-slider');
    if (chromaSlider && lightnessSlider) {
        params.set('chroma', chromaSlider.value);
        params.set('lightness', lightnessSlider.value);
    }
    // Capture the state of the chroma toggle
    const chromaToggle = document.getElementById('chroma-toggle-checkbox');
    if (chromaToggle) params.set('chromaToggle', chromaToggle.checked ? 'on' : 'off');
    // Create the full URL with query parameters
    const shareableURL = `${window.location.origin}${window.location.pathname}?${params.toString()}`;
    navigator.clipboard.writeText(shareableURL).then(()=>{
        const shareButton = document.getElementById('generate-shareable-url-button'); // Confirm correct button ID
        if (shareButton) {
            const originalText = shareButton.innerHTML;
            shareButton.innerHTML = "Theme URL copied to clipboard!";
            setTimeout(()=>{
                shareButton.innerHTML = originalText;
            }, 1500);
        } else console.error("Button not found: Check ID or DOM timing.");
    }).catch((err)=>{
        console.error('Error copying URL to clipboard:', err);
    });
}
// Add event listener for the share button
document.addEventListener("DOMContentLoaded", ()=>{
    // Attach event listener to share button
    const shareButton = document.getElementById('generate-shareable-url-button');
    if (shareButton) shareButton.addEventListener("click", generateShareableURL);
    else console.error("Share button not found after DOM load.");
    // Initialize primary and secondary colors
    try {
        const initialPrimaryColor = new Color('lch', [
            50,
            50,
            0
        ]); // Default primary color
        const initialSecondaryColor = new Color('lch', [
            60,
            40,
            30
        ]); // Default secondary color
        colorManager.setPrimaryColor(initialPrimaryColor);
        colorManager.setSecondaryColor(initialSecondaryColor);
        // Ensure both colors are valid before proceeding
        if (!initialPrimaryColor || !initialPrimaryColor.lch) throw new Error("Primary color initialization failed.");
        if (!initialSecondaryColor || !initialSecondaryColor.lch) throw new Error("Secondary color initialization failed.");
        // Setup rows and UI
        setupRows(colorManager);
        updateUIElements();
    } catch (error) {
        console.error("Error during initialization:", error);
    }
});
document.addEventListener('DOMContentLoaded', init);
function getHarmonyFromHueDif(hueDif) {
    switch(hueDif){
        case 179.5:
            return 'complementary';
        case 120:
            return 'triad';
        case 90:
            return 'quad';
        case 45:
            return 'analogous';
        default:
            return 'complementary';
    }
}

},{"./js/colorManager.js":"hS5Vd","./js/colorUtils.js":"lY9Z0","./js/colorPalette.js":"M6Mpd","./js/uiManager.js":"erjXR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hS5Vd":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _observerManagerJs = require("./observerManager.js");
var _observerManagerJsDefault = parcelHelpers.interopDefault(_observerManagerJs);
var _colorUtilsJs = require("./colorUtils.js");
class ColorManager {
    constructor(){
        this.primaryColor = null;
        this.secondaryColor = null;
        this.tertiaryColor = null;
        this.quaternaryColor = null;
        this.observerManager = new (0, _observerManagerJsDefault.default)();
        this.indicationColors = {
            alert: null,
            warning: null,
            success: null,
            info: null
        };
    }
    setPrimaryColor(color, segCtrl) {
        if (color && color instanceof (0, _colorUtilsJs.Color)) {
            this.primaryColor = color;
            this.updateTertiaryColor(segCtrl);
            this.updateQuaternaryColor(segCtrl);
            this.updateIndicationColors();
            this.notify();
        }
    }
    setSecondaryColor(color) {
        if (color && color instanceof (0, _colorUtilsJs.Color)) {
            this.secondaryColor = color;
            this.updateTertiaryColor();
            this.updateQuaternaryColor();
            this.updateIndicationColors();
            this.notify();
        }
    }
    updateTertiaryColor(segCtrl) {
    // Existing code unchanged
    }
    updateQuaternaryColor(segCtrl) {
    // Existing code unchanged
    }
    updateIndicationColors() {
        if (!this.primaryColor || !this.secondaryColor) return;
        const avgLightness = (this.primaryColor.lch.l + this.secondaryColor.lch.l) / 2;
        const maxChroma = Math.max(this.primaryColor.lch.c, this.secondaryColor.lch.c);
        const avgHue = (this.primaryColor.lch.h + this.secondaryColor.lch.h) / 2;
        // Define hue ranges for each type
        const hueRanges = {
            alert: {
                min: 0,
                max: 30,
                target: 15
            },
            warning: {
                min: 60,
                max: 90,
                target: 75
            },
            success: {
                min: 100,
                max: 130,
                target: 115
            },
            info: {
                min: 240,
                max: 270,
                target: 255
            } // Blue
        };
        // Update each indication color
        Object.entries(hueRanges).forEach(([type, range])=>{
            // Calculate balanced hue within allowed range
            let balancedHue = range.target;
            if (avgHue >= range.min && avgHue <= range.max) balancedHue = avgHue;
            this.indicationColors[type] = new (0, _colorUtilsJs.Color)('lch', [
                avgLightness,
                maxChroma,
                balancedHue
            ]);
        });
        // Notify observers of the update
        this.notify();
    }
    getIndicationColor(type) {
        return this.indicationColors[type];
    }
    getIndicationColors() {
        return this.indicationColors;
    }
    notify() {
        this.observerManager.notifyObservers({
            primaryColor: this.primaryColor,
            secondaryColor: this.secondaryColor,
            tertiaryColor: this.tertiaryColor,
            quaternaryColor: this.quaternaryColor,
            indicationColors: this.indicationColors
        });
    }
    addObserver(observer) {
        this.observerManager.addObserver(observer);
    }
    removeObserver(observer) {
        this.observerManager.removeObserver(observer);
    }
    updateColors(primaryColor, secondaryColor) {
        // ... existing color updates ...
        // Update indication colors
        this.updateIndicationColors(primaryColor, secondaryColor);
    // ... rest of the method ...
    }
}
exports.default = ColorManager;

},{"./observerManager.js":"hK2Gd","./colorUtils.js":"lY9Z0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hK2Gd":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class ObserverManager {
    constructor(){
        this.observers = [];
    }
    addObserver(observer) {
        if (typeof observer.update === 'function') this.observers.push(observer);
        else console.error('Invalid observer: update method is missing');
    }
    removeObserver(observer) {
        this.observers = this.observers.filter((obs)=>obs !== observer);
    }
    notifyObservers(data) {
        this.observers.forEach((observer)=>{
            try {
                observer.update(data);
            } catch (error) {
                console.error("Error in observer update:", error, observer);
            }
        });
    }
}
exports.default = ObserverManager;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports,__globalThis) {
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
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
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

},{}],"lY9Z0":[function(require,module,exports,__globalThis) {
/* 
Color operation functions for use across the app
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Export Color for use in other modules
parcelHelpers.export(exports, "Color", ()=>(0, _colorjsIoDefault.default));
// Convert LCH to Hex
parcelHelpers.export(exports, "lchToHex", ()=>lchToHex);
// Set complementary hue relative to a source on spectrum diameter
parcelHelpers.export(exports, "setHue", ()=>setHue);
// Sets Chroma or Lightness value
parcelHelpers.export(exports, "setValue", ()=>setValue);
// Set one color relative to a source color (LCH format)
parcelHelpers.export(exports, "relateColor", ()=>relateColor);
// Generate color scale set (for color palettes)
parcelHelpers.export(exports, "generateColorScale", ()=>generateColorScale);
// Convert RGB to hex
parcelHelpers.export(exports, "rgbToHex", ()=>rgbToHex);
// Calculate source index
parcelHelpers.export(exports, "calculateSourceIndex", ()=>calculateSourceIndex);
// Calculate interpolation points
parcelHelpers.export(exports, "calculateInterpolationPoints", ()=>calculateInterpolationPoints);
// Interpolate color
parcelHelpers.export(exports, "interpolateColor", ()=>interpolateColor);
// Interpolate hue values
parcelHelpers.export(exports, "interpolateHue", ()=>interpolateHue);
parcelHelpers.export(exports, "interpolateHueLonger", ()=>interpolateHueLonger);
// General interpolation methods
parcelHelpers.export(exports, "elastic", ()=>elastic);
parcelHelpers.export(exports, "elasticIn", ()=>elasticIn);
parcelHelpers.export(exports, "elasticOut", ()=>elasticOut);
parcelHelpers.export(exports, "sineWave", ()=>sineWave);
parcelHelpers.export(exports, "cosineWave", ()=>cosineWave);
// Interpolate functions by methods:
parcelHelpers.export(exports, "interpolate", ()=>interpolate);
// Check text-bg contrast
parcelHelpers.export(exports, "getContrastTextColor", ()=>getContrastTextColor);
// Calculate chroma based on hue difference
parcelHelpers.export(exports, "calculateChroma", ()=>calculateChroma);
// Update contrast status
parcelHelpers.export(exports, "updateContrastStatus", ()=>updateContrastStatus);
// Generate random LCH color
parcelHelpers.export(exports, "generateRandomLCH", ()=>generateRandomLCH);
parcelHelpers.export(exports, "mapToGamut", ()=>mapToGamut);
parcelHelpers.export(exports, "isInSRGBGamut", ()=>isInSRGBGamut);
// Add a new function to preserve chroma as much as possible
parcelHelpers.export(exports, "preserveChroma", ()=>preserveChroma);
// Custom validation function for Color objects
parcelHelpers.export(exports, "isValidColor", ()=>isValidColor);
parcelHelpers.export(exports, "normalizeHue", ()=>normalizeHue);
parcelHelpers.export(exports, "createHarmoniousColor", ()=>createHarmoniousColor);
// adjust hue for harmony
parcelHelpers.export(exports, "adjustHueToHarmonize", ()=>adjustHueToHarmonize);
// update harmonious colors
parcelHelpers.export(exports, "updateHarmoniousColors", ()=>updateHarmoniousColors);
var _colorjsIo = require("colorjs.io");
var _colorjsIoDefault = parcelHelpers.interopDefault(_colorjsIo);
function lchToHex(l, c, h) {
    const color = new (0, _colorjsIoDefault.default)('lch', [
        l,
        c,
        h
    ]);
    return color.to('srgb').toString({
        format: 'hex'
    });
}
function setHue(originalHue, difference, bias = 0) {
    const maxBias = 5; // Maximum bias in degrees
    const biasedDifference = difference + bias * maxBias;
    return (originalHue + biasedDifference + 360) % 360;
}
function setValue(value, factor) {
    return Math.max(0, Math.min(value * factor, value < 100 ? 100 : 132));
}
function relateColor(srcColor, l, c, h) {
    try {
        const result = new (0, _colorjsIoDefault.default)('lch', [
            l,
            c,
            h
        ]);
        return result;
    } catch (error) {
        return srcColor; // Return the source color if conversion fails
    }
}
function generateColorScale(sourceColor, config) {
    const { steps, startPoint, endPoint, interpolation, includeSource, isNeutral, neutralChroma, lightnessEase, chromaEase, huePath } = config;
    const scaleArray = [];
    for(let i = 0; i < steps; i++){
        let t = i / (steps - 1);
        let l = interpolate(startPoint.l, endPoint.l, t, lightnessEase || interpolation);
        let c, h;
        if (isNeutral) {
            // For neutral palette, use neutralChroma (which can be 0 or the small value set by the user)
            c = neutralChroma;
            h = sourceColor.lch.h; // Keep the hue constant for neutral palette
        } else {
            if (chromaEase === 'constant') c = sourceColor.lch.c;
            else c = interpolate(startPoint.c, endPoint.c, t, chromaEase || interpolation);
            if (huePath === 'constant') h = sourceColor.lch.h;
            else if (huePath === 'shorter') h = interpolateHue(startPoint.h, endPoint.h, t, interpolation);
            else h = interpolate(startPoint.h, endPoint.h + (endPoint.h < startPoint.h ? 360 : 0), t, interpolation) % 360;
        }
        let interpolatedColor = new (0, _colorjsIoDefault.default)("lch", [
            l,
            c,
            h
        ]);
        scaleArray.push(mapToGamut(interpolatedColor));
    }
    if (includeSource && !isNeutral) {
        const sourceIndex = Math.round((steps - 1) * (sourceColor.lch.l - startPoint.l) / (endPoint.l - startPoint.l));
        scaleArray[sourceIndex] = sourceColor;
    }
    return scaleArray;
}
function rgbToHex(rgb) {
    const [r, g, b] = rgb.substring(4, rgb.length - 1).split(',').map((x)=>parseInt(x));
    return `#${(16777216 + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}
function calculateSourceIndex(sourceL, startL, endL, steps) {
    const normalizedPosition = (sourceL - startL) / (endL - startL);
    return Math.round(normalizedPosition * (steps - 1));
}
function calculateInterpolationPoints(currentStep, sourceIndex, totalSteps, startPoint, endPoint, sourceLch) {
    if (currentStep < sourceIndex) return {
        startLch: startPoint,
        endLch: sourceLch,
        t: currentStep / sourceIndex
    };
    else return {
        startLch: sourceLch,
        endLch: endPoint,
        t: (currentStep - sourceIndex) / (totalSteps - 1 - sourceIndex)
    };
}
function interpolateColor(start, end, t, method) {
    const interpolate = (a, b)=>a + (b - a) * t;
    let l, c, h;
    switch(method){
        case 'linear':
            l = interpolate(start.l, end.l);
            c = interpolate(start.c, end.c);
            h = interpolateHue(start.h, end.h, t);
            break;
        case 'quadratic':
            l = interpolate(start.l, end.l, t * t);
            c = interpolate(start.c, end.c, t * t);
            h = interpolateHue(start.h, end.h, t * t);
            break;
        default:
            throw new Error(`Unsupported interpolation method: ${method}`);
    }
    return new (0, _colorjsIoDefault.default)("lch", [
        l,
        c,
        h
    ]);
}
function interpolateHue(start, end, t, method = 'linear') {
    let diff = end - start;
    if (Math.abs(diff) > 179.5) diff = diff > 0 ? diff - 360 : diff + 360;
    let h = interpolate(start, start + diff, t, method) % 360;
    h = h < 0 ? h + 360 : h;
    return h;
}
function interpolateHueLonger(start, end, t, method = 'linear') {
    let diff = end - start;
    if (Math.abs(diff) < 179.5) diff = diff > 0 ? diff - 360 : diff + 360;
    let h = interpolate(start, start + diff, t, method) % 360;
    h = h < 0 ? h + 360 : h;
    return h;
}
function elastic(t, amplitude = 1, period = 0.3) {
    const s = period / (2 * Math.PI) * Math.asin(1 / amplitude);
    return amplitude * Math.pow(2, -10 * t) * Math.sin((t - s) * (2 * Math.PI) / period) + 1;
}
function elasticIn(t, amplitude = 1, period = 0.3) {
    if (t === 0) return 0;
    if (t === 1) return 1;
    const s = period / (2 * Math.PI) * Math.asin(1 / amplitude);
    return -(amplitude * Math.pow(2, 10 * (t - 1)) * Math.sin((t - 1 - s) * (2 * Math.PI) / period));
}
function elasticOut(t, amplitude = 1, period = 0.3) {
    if (t === 0) return 0;
    if (t === 1) return 1;
    return elastic(t, amplitude, period);
}
function sineWave(t) {
    return (Math.sin(2 * Math.PI * t - Math.PI / 2) + 1) / 2;
}
function cosineWave(t) {
    return (Math.cos(2 * Math.PI * t) + 1) / 2;
}
function interpolate(start, end, t, method = 'linear', options = {}) {
    const { amplitude = 1, period = 0.3 } = options;
    const isReverse = method.startsWith('reverse');
    const baseMethod = isReverse ? method.slice(7) : method;
    if (isReverse) t = 1 - t;
    let result;
    switch(baseMethod){
        case 'linear':
            result = start + (end - start) * t;
            break;
        case 'quadratic':
            result = start + (end - start) * (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
            break;
        case 'cubic':
            result = start + (end - start) * (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
            break;
        case 'easeInOut':
            result = start + (end - start) * (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);
            break;
        case 'easeInOutBack':
            const c1 = 1.70158;
            const c2 = c1 * 1.525;
            result = start + (end - start) * (t < 0.5 ? Math.pow(2 * t, 2) * ((c2 + 1) * 2 * t - c2) / 2 : (Math.pow(2 * t - 2, 2) * ((c2 + 1) * (t * 2 - 2) + c2) + 2) / 2);
            break;
        case 'elasticIn':
            result = start + (end - start) * elasticIn(t, amplitude, period);
            break;
        case 'elasticOut':
            result = start + (end - start) * elasticOut(t, amplitude, period);
            break;
        case 'sineWave':
            result = start + (end - start) * sineWave(t);
            break;
        case 'cosineWave':
            result = start + (end - start) * cosineWave(t);
            break;
        default:
            throw new Error(`Unsupported interpolation method: ${method}`);
    }
    return isReverse ? end + (start - end) * (1 - t) : result;
}
function getContrastTextColor(backgroundColor) {
    try {
        const testColor = new (0, _colorjsIoDefault.default)('#ffffff');
    } catch (error) {
        console.error('Error creating Color instance:', error);
    }
    if (!backgroundColor || typeof backgroundColor !== 'string') {
        console.error('getContrastTextColor: Invalid backgroundColor input', backgroundColor);
        return '#000000'; // Fallback
    }
    try {
        const color = new (0, _colorjsIoDefault.default)(backgroundColor); // Ensure `Color` is operational
        const luminance = color.luminance;
        return luminance > 0.179 ? '#000000' : '#ffffff';
    } catch (error) {
        console.error('getContrastTextColor: Error creating color object', error);
        return '#000000'; // Fallback
    }
}
function calculateChroma(primaryChroma, hueDifference) {
    const factor = 1 - hueDifference / 360;
    return primaryChroma * factor;
}
function updateContrastStatus(color1Hex, color2Hex) {
    const color1 = new (0, _colorjsIoDefault.default)(color1Hex);
    const color2 = new (0, _colorjsIoDefault.default)(color2Hex);
    const contrastRatio = color1.contrast(color2, "WCAG21");
    return {
        ratio: contrastRatio.toFixed(2),
        aa: contrastRatio >= 4.5,
        aaa: contrastRatio >= 7,
        aaLarge: contrastRatio >= 3
    };
}
function generateRandomLCH() {
    return new (0, _colorjsIoDefault.default)('lch', [
        50,
        80,
        Math.random() * 360 // H: 0-360
    ]);
}
function mapToGamut(color) {
    const srgb = color.to('srgb');
    // Check if the color is already in gamut
    if (isInSRGBGamut(srgb)) return srgb;
    let lch = color.to('lch');
    let lower = 0;
    let upper = lch.c;
    let mid;
    // Binary search for the highest in-gamut chroma
    while(upper - lower > 0.1){
        mid = (lower + upper) / 2;
        const testColor = new (0, _colorjsIoDefault.default)('lch', [
            lch.l,
            mid,
            lch.h
        ]);
        if (isInSRGBGamut(testColor.to('srgb'))) lower = mid;
        else upper = mid;
    }
    // Create the new color with the highest possible chroma
    return new (0, _colorjsIoDefault.default)('lch', [
        lch.l,
        lower,
        lch.h
    ]).to('srgb');
}
function isInSRGBGamut(srgb) {
    const [r, g, b] = srgb.coords;
    return r >= 0 && r <= 1 && g >= 0 && g <= 1 && b >= 0 && b <= 1;
}
function preserveChroma(color) {
    const original = color.to('lch');
    const mapped = mapToGamut(color);
    const mappedLCH = mapped.to('lch');
    // If the mapped color has significantly less chroma, try to preserve it
    if (mappedLCH.c < original.c * 0.9) // Try to preserve chroma by adjusting lightness
    for(let l = original.l; l >= 0 && l <= 100; l += l < original.l ? -1 : 1){
        const adjusted = new (0, _colorjsIoDefault.default)('lch', [
            l,
            original.c,
            original.h
        ]);
        if (isInSRGBGamut(adjusted.to('srgb'))) return adjusted.to('srgb');
    }
    return mapped;
}
function isValidColor(color) {
    return color && color.coords && color.coords.length === 3 && color.coords.every((coord)=>!isNaN(coord));
}
function normalizeHue(hue) {
    return (hue % 360 + 360) % 360;
}
function createHarmoniousColor(baseHue, primaryColor, secondaryColor) {
    const avgLightness = (primaryColor.lch.l + secondaryColor.lch.l) / 2;
    const avgChroma = (primaryColor.lch.c + secondaryColor.lch.c) / 2;
    const adjustedHue = adjustHueToHarmonize(baseHue, primaryColor.lch.h, secondaryColor.lch.h);
    return new (0, _colorjsIoDefault.default)('lch', [
        avgLightness,
        avgChroma,
        adjustedHue
    ]);
}
function adjustHueToHarmonize(baseHue, primaryHue, secondaryHue) {
    const hueDifference = Math.abs(primaryHue - secondaryHue);
    let adjustedHue = baseHue;
    if (hueDifference < 90) adjustedHue += (180 - hueDifference) / 2;
    else if (hueDifference > 270) adjustedHue -= (hueDifference - 180) / 2;
    return normalizeHue(adjustedHue);
}
function updateHarmoniousColors(primaryColor, secondaryColor) {
    return {
        error: createHarmoniousColor(0, primaryColor, secondaryColor),
        warning: createHarmoniousColor(60, primaryColor, secondaryColor),
        success: createHarmoniousColor(120, primaryColor, secondaryColor),
        info: createHarmoniousColor(240, primaryColor, secondaryColor)
    };
}

},{"colorjs.io":"fo2k1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fo2k1":[function(require,module,exports,__globalThis) {
// A is m x n. B is n x p. product is m x p.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Color);
function multiplyMatrices(A, B) {
    let m = A.length;
    if (!Array.isArray(A[0])) // A is vector, convert to [[a, b, c, ...]]
    A = [
        A
    ];
    if (!Array.isArray(B[0])) // B is vector, convert to [[a], [b], [c], ...]]
    B = B.map((x)=>[
            x
        ]);
    let p = B[0].length;
    let B_cols = B[0].map((_, i)=>B.map((x)=>x[i])); // transpose B
    let product = A.map((row)=>B_cols.map((col)=>{
            let ret = 0;
            if (!Array.isArray(row)) {
                for (let c of col)ret += row * c;
                return ret;
            }
            for(let i = 0; i < row.length; i++)ret += row[i] * (col[i] || 0);
            return ret;
        }));
    if (m === 1) product = product[0]; // Avoid [[a, b, c, ...]]
    if (p === 1) return product.map((x)=>x[0]); // Avoid [[a], [b], [c], ...]]
    return product;
}
/**
 * Various utility functions
 */ /**
 * Check if a value is a string (including a String object)
 * @param {*} str - Value to check
 * @returns {boolean}
 */ function isString(str) {
    return type(str) === "string";
}
/**
 * Determine the internal JavaScript [[Class]] of an object.
 * @param {*} o - Value to check
 * @returns {string}
 */ function type(o) {
    let str = Object.prototype.toString.call(o);
    return (str.match(/^\[object\s+(.*?)\]$/)[1] || "").toLowerCase();
}
function serializeNumber(n, { precision, unit }) {
    if (isNone(n)) return "none";
    return toPrecision(n, precision) + (unit ?? "");
}
/**
 * Check if a value corresponds to a none argument
 * @param {*} n - Value to check
 * @returns {boolean}
 */ function isNone(n) {
    return Number.isNaN(n) || n instanceof Number && n?.none;
}
/**
 * Replace none values with 0
 */ function skipNone(n) {
    return isNone(n) ? 0 : n;
}
/**
 * Round a number to a certain number of significant digits
 * @param {number} n - The number to round
 * @param {number} precision - Number of significant digits
 */ function toPrecision(n, precision) {
    if (n === 0) return 0;
    let integer = ~~n;
    let digits = 0;
    if (integer && precision) digits = ~~Math.log10(Math.abs(integer)) + 1;
    const multiplier = 10.0 ** (precision - digits);
    return Math.floor(n * multiplier + 0.5) / multiplier;
}
const angleFactor = {
    deg: 1,
    grad: 0.9,
    rad: 180 / Math.PI,
    turn: 360
};
/**
* Parse a CSS function, regardless of its name and arguments
* @param String str String to parse
* @return {{name, args, rawArgs}}
*/ function parseFunction(str) {
    if (!str) return;
    str = str.trim();
    const isFunctionRegex = /^([a-z]+)\((.+?)\)$/i;
    const isNumberRegex = /^-?[\d.]+$/;
    const unitValueRegex = /%|deg|g?rad|turn$/;
    const singleArgument = /\/?\s*(none|[-\w.]+(?:%|deg|g?rad|turn)?)/g;
    let parts = str.match(isFunctionRegex);
    if (parts) {
        // It is a function, parse args
        let args = [];
        parts[2].replace(singleArgument, ($0, rawArg)=>{
            let match = rawArg.match(unitValueRegex);
            let arg = rawArg;
            if (match) {
                let unit = match[0];
                // Drop unit from value
                let unitlessArg = arg.slice(0, -unit.length);
                if (unit === "%") {
                    // Convert percentages to 0-1 numbers
                    arg = new Number(unitlessArg / 100);
                    arg.type = "<percentage>";
                } else {
                    // Multiply angle by appropriate factor for its unit
                    arg = new Number(unitlessArg * angleFactor[unit]);
                    arg.type = "<angle>";
                    arg.unit = unit;
                }
            } else if (isNumberRegex.test(arg)) {
                // Convert numerical args to numbers
                arg = new Number(arg);
                arg.type = "<number>";
            } else if (arg === "none") {
                arg = new Number(NaN);
                arg.none = true;
            }
            if ($0.startsWith("/")) {
                // It's alpha
                arg = arg instanceof Number ? arg : new Number(arg);
                arg.alpha = true;
            }
            if (typeof arg === "object" && arg instanceof Number) arg.raw = rawArg;
            args.push(arg);
        });
        return {
            name: parts[1].toLowerCase(),
            rawName: parts[1],
            rawArgs: parts[2],
            // An argument could be (as of css-color-4):
            // a number, percentage, degrees (hue), ident (in color())
            args
        };
    }
}
function last(arr) {
    return arr[arr.length - 1];
}
function interpolate(start, end, p) {
    if (isNaN(start)) return end;
    if (isNaN(end)) return start;
    return start + (end - start) * p;
}
function interpolateInv(start, end, value) {
    return (value - start) / (end - start);
}
function mapRange(from, to, value) {
    return interpolate(to[0], to[1], interpolateInv(from[0], from[1], value));
}
function parseCoordGrammar(coordGrammars) {
    return coordGrammars.map((coordGrammar)=>{
        return coordGrammar.split("|").map((type)=>{
            type = type.trim();
            let range = type.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);
            if (range) {
                let ret = new String(range[1]);
                ret.range = [
                    +range[2],
                    +range[3]
                ];
                return ret;
            }
            return type;
        });
    });
}
/**
 * Clamp value between the minimum and maximum
 * @param {number} min minimum value to return
 * @param {number} val the value to return if it is between min and max
 * @param {number} max maximum value to return
 * @returns number
 */ function clamp(min, val, max) {
    return Math.max(Math.min(max, val), min);
}
/**
 * Copy sign of one value to another.
 * @param {number} - to number to copy sign to
 * @param {number} - from number to copy sign from
 * @returns number
 */ function copySign(to, from) {
    return Math.sign(to) === Math.sign(from) ? to : -to;
}
/**
 * Perform pow on a signed number and copy sign to result
 * @param {number} - base the base number
 * @param {number} - exp the exponent
 * @returns number
 */ function spow(base, exp) {
    return copySign(Math.abs(base) ** exp, base);
}
/**
 * Perform a divide, but return zero if the numerator is zero
 * @param {number} n - the numerator
 * @param {number} d - the denominator
 * @returns number
 */ function zdiv(n, d) {
    return d === 0 ? 0 : n / d;
}
/**
 * Perform a bisect on a sorted list and locate the insertion point for
 * a value in arr to maintain sorted order.
 * @param {number[]} arr - array of sorted numbers
 * @param {number} value - value to find insertion point for
 * @param {number} lo - used to specify a the low end of a subset of the list
 * @param {number} hi - used to specify a the high end of a subset of the list
 * @returns number
 */ function bisectLeft(arr, value, lo = 0, hi = arr.length) {
    while(lo < hi){
        const mid = lo + hi >> 1;
        if (arr[mid] < value) lo = mid + 1;
        else hi = mid;
    }
    return lo;
}
var util = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    bisectLeft: bisectLeft,
    clamp: clamp,
    copySign: copySign,
    interpolate: interpolate,
    interpolateInv: interpolateInv,
    isNone: isNone,
    isString: isString,
    last: last,
    mapRange: mapRange,
    multiplyMatrices: multiplyMatrices,
    parseCoordGrammar: parseCoordGrammar,
    parseFunction: parseFunction,
    serializeNumber: serializeNumber,
    skipNone: skipNone,
    spow: spow,
    toPrecision: toPrecision,
    type: type,
    zdiv: zdiv
});
/**
 * A class for adding deep extensibility to any piece of JS code
 */ class Hooks {
    add(name, callback, first) {
        if (typeof arguments[0] != "string") {
            // Multiple hooks
            for(var name in arguments[0])this.add(name, arguments[0][name], arguments[1]);
            return;
        }
        (Array.isArray(name) ? name : [
            name
        ]).forEach(function(name) {
            this[name] = this[name] || [];
            if (callback) this[name][first ? "unshift" : "push"](callback);
        }, this);
    }
    run(name, env) {
        this[name] = this[name] || [];
        this[name].forEach(function(callback) {
            callback.call(env && env.context ? env.context : env, env);
        });
    }
}
/**
 * The instance of {@link Hooks} used throughout Color.js
 */ const hooks = new Hooks();
// Global defaults one may want to configure
var defaults = {
    gamut_mapping: "css",
    precision: 5,
    deltaE: "76",
    verbose: globalThis?.process?.env?.NODE_ENV?.toLowerCase() !== "test",
    warn: function warn(msg) {
        if (this.verbose) globalThis?.console?.warn?.(msg);
    }
};
const WHITES = {
    // for compatibility, the four-digit chromaticity-derived ones everyone else uses
    D50: [
        0.3457 / 0.3585,
        1.00000,
        0.8251046025104602
    ],
    D65: [
        0.3127 / 0.3290,
        1.00000,
        1.0890577507598784
    ]
};
function getWhite(name) {
    if (Array.isArray(name)) return name;
    return WHITES[name];
}
// Adapt XYZ from white point W1 to W2
function adapt$2(W1, W2, XYZ, options = {}) {
    W1 = getWhite(W1);
    W2 = getWhite(W2);
    if (!W1 || !W2) throw new TypeError(`Missing white point to convert ${!W1 ? "from" : ""}${!W1 && !W2 ? "/" : ""}${!W2 ? "to" : ""}`);
    if (W1 === W2) // Same whitepoints, no conversion needed
    return XYZ;
    let env = {
        W1,
        W2,
        XYZ,
        options
    };
    hooks.run("chromatic-adaptation-start", env);
    if (!env.M) {
        if (env.W1 === WHITES.D65 && env.W2 === WHITES.D50) env.M = [
            [
                1.0479297925449969,
                0.022946870601609652,
                -0.05019226628920524
            ],
            [
                0.02962780877005599,
                0.9904344267538799,
                -0.017073799063418826
            ],
            [
                -0.009243040646204504,
                0.015055191490298152,
                0.7518742814281371
            ]
        ];
        else if (env.W1 === WHITES.D50 && env.W2 === WHITES.D65) env.M = [
            [
                0.955473421488075,
                -0.02309845494876471,
                0.06325924320057072
            ],
            [
                -0.0283697093338637,
                1.0099953980813041,
                0.021041441191917323
            ],
            [
                0.012314014864481998,
                -0.020507649298898964,
                1.330365926242124
            ]
        ];
    }
    hooks.run("chromatic-adaptation-end", env);
    if (env.M) return multiplyMatrices(env.M, env.XYZ);
    else throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.");
}
const noneTypes = new Set([
    "<number>",
    "<percentage>",
    "<angle>"
]);
/**
 * Validates the coordinates of a color against a format's coord grammar and
 * maps the coordinates to the range or refRange of the coordinates.
 * @param {ColorSpace} space - Colorspace the coords are in
 * @param {object} format - the format object to validate against
 * @param {string} name - the name of the color function. e.g. "oklab" or "color"
 * @returns {object[]} - an array of type metadata for each coordinate
 */ function coerceCoords(space, format, name, coords) {
    let types = Object.entries(space.coords).map(([id, coordMeta], i)=>{
        let coordGrammar = format.coordGrammar[i];
        let arg = coords[i];
        let providedType = arg?.type;
        // Find grammar alternative that matches the provided type
        // Non-strict equals is intentional because we are comparing w/ string objects
        let type;
        if (arg.none) type = coordGrammar.find((c)=>noneTypes.has(c));
        else type = coordGrammar.find((c)=>c == providedType);
        // Check that each coord conforms to its grammar
        if (!type) {
            // Type does not exist in the grammar, throw
            let coordName = coordMeta.name || id;
            throw new TypeError(`${providedType ?? arg.raw} not allowed for ${coordName} in ${name}()`);
        }
        let fromRange = type.range;
        if (providedType === "<percentage>") fromRange ||= [
            0,
            1
        ];
        let toRange = coordMeta.range || coordMeta.refRange;
        if (fromRange && toRange) coords[i] = mapRange(fromRange, toRange, coords[i]);
        return type;
    });
    return types;
}
/**
 * Convert a CSS Color string to a color object
 * @param {string} str
 * @param {object} [options]
 * @param {object} [options.meta] - Object for additional information about the parsing
 * @returns {Color}
 */ function parse(str, { meta } = {}) {
    let env = {
        "str": String(str)?.trim()
    };
    hooks.run("parse-start", env);
    if (env.color) return env.color;
    env.parsed = parseFunction(env.str);
    if (env.parsed) {
        // Is a functional syntax
        let name = env.parsed.name;
        if (name === "color") {
            // color() function
            let id = env.parsed.args.shift();
            // Check against both <dashed-ident> and <ident> versions
            let alternateId = id.startsWith("--") ? id.substring(2) : `--${id}`;
            let ids = [
                id,
                alternateId
            ];
            let alpha = env.parsed.rawArgs.indexOf("/") > 0 ? env.parsed.args.pop() : 1;
            for (let space of ColorSpace.all){
                let colorSpec = space.getFormat("color");
                if (colorSpec) {
                    if (ids.includes(colorSpec.id) || colorSpec.ids?.filter((specId)=>ids.includes(specId)).length) {
                        // From https://drafts.csswg.org/css-color-4/#color-function
                        // If more <number>s or <percentage>s are provided than parameters that the colorspace takes, the excess <number>s at the end are ignored.
                        // If less <number>s or <percentage>s are provided than parameters that the colorspace takes, the missing parameters default to 0. (This is particularly convenient for multichannel printers where the additional inks are spot colors or varnishes that most colors on the page won’t use.)
                        const coords = Object.keys(space.coords).map((_, i)=>env.parsed.args[i] || 0);
                        let types;
                        if (colorSpec.coordGrammar) types = coerceCoords(space, colorSpec, "color", coords);
                        if (meta) Object.assign(meta, {
                            formatId: "color",
                            types
                        });
                        if (colorSpec.id.startsWith("--") && !id.startsWith("--")) defaults.warn(`${space.name} is a non-standard space and not currently supported in the CSS spec. ` + `Use prefixed color(${colorSpec.id}) instead of color(${id}).`);
                        if (id.startsWith("--") && !colorSpec.id.startsWith("--")) defaults.warn(`${space.name} is a standard space and supported in the CSS spec. ` + `Use color(${colorSpec.id}) instead of prefixed color(${id}).`);
                        return {
                            spaceId: space.id,
                            coords,
                            alpha
                        };
                    }
                }
            }
            // Not found
            let didYouMean = "";
            let registryId = id in ColorSpace.registry ? id : alternateId;
            if (registryId in ColorSpace.registry) {
                // Used color space id instead of color() id, these are often different
                let cssId = ColorSpace.registry[registryId].formats?.color?.id;
                if (cssId) didYouMean = `Did you mean color(${cssId})?`;
            }
            throw new TypeError(`Cannot parse color(${id}). ` + (didYouMean || "Missing a plugin?"));
        } else for (let space of ColorSpace.all){
            // color space specific function
            let format = space.getFormat(name);
            if (format && format.type === "function") {
                let alpha = 1;
                if (format.lastAlpha || last(env.parsed.args).alpha) alpha = env.parsed.args.pop();
                let coords = env.parsed.args;
                let types;
                if (format.coordGrammar) types = coerceCoords(space, format, name, coords);
                if (meta) Object.assign(meta, {
                    formatId: format.name,
                    types
                });
                return {
                    spaceId: space.id,
                    coords,
                    alpha
                };
            }
        }
    } else {
        // Custom, colorspace-specific format
        for (let space of ColorSpace.all)for(let formatId in space.formats){
            let format = space.formats[formatId];
            if (format.type !== "custom") continue;
            if (format.test && !format.test(env.str)) continue;
            let color = format.parse(env.str);
            if (color) {
                color.alpha ??= 1;
                if (meta) meta.formatId = formatId;
                return color;
            }
        }
    }
    // If we're here, we couldn't parse
    throw new TypeError(`Could not parse ${str} as a color. Missing a plugin?`);
}
/**
 * Resolves a color reference (object or string) to a plain color object
 * @param {Color | {space, coords, alpha} | string | Array<Color | {space, coords, alpha} | string> } color
 * @returns {{space, coords, alpha} | Array<{space, coords, alpha}}>
 */ function getColor(color) {
    if (Array.isArray(color)) return color.map(getColor);
    if (!color) throw new TypeError("Empty color reference");
    if (isString(color)) color = parse(color);
    // Object fixup
    let space = color.space || color.spaceId;
    if (!(space instanceof ColorSpace)) // Convert string id to color space object
    color.space = ColorSpace.get(space);
    if (color.alpha === undefined) color.alpha = 1;
    return color;
}
const \u03B5$7 = .000075;
/**
 * Class to represent a color space
 */ class ColorSpace {
    constructor(options){
        this.id = options.id;
        this.name = options.name;
        this.base = options.base ? ColorSpace.get(options.base) : null;
        this.aliases = options.aliases;
        if (this.base) {
            this.fromBase = options.fromBase;
            this.toBase = options.toBase;
        }
        // Coordinate metadata
        let coords = options.coords ?? this.base.coords;
        for(let name in coords)if (!("name" in coords[name])) coords[name].name = name;
        this.coords = coords;
        // White point
        let white = options.white ?? this.base.white ?? "D65";
        this.white = getWhite(white);
        // Sort out formats
        this.formats = options.formats ?? {};
        for(let name in this.formats){
            let format = this.formats[name];
            format.type ||= "function";
            format.name ||= name;
        }
        if (!this.formats.color?.id) this.formats.color = {
            ...this.formats.color ?? {},
            id: options.cssId || this.id
        };
        // Gamut space
        if (options.gamutSpace) // Gamut space explicitly specified
        this.gamutSpace = options.gamutSpace === "self" ? this : ColorSpace.get(options.gamutSpace);
        else // No gamut space specified, calculate a sensible default
        if (this.isPolar) // Do not check gamut through polar coordinates
        this.gamutSpace = this.base;
        else this.gamutSpace = this;
        // Optimize inGamut for unbounded spaces
        if (this.gamutSpace.isUnbounded) this.inGamut = (coords, options)=>{
            return true;
        };
        // Other stuff
        this.referred = options.referred;
        // Compute ancestors and store them, since they will never change
        Object.defineProperty(this, "path", {
            value: getPath(this).reverse(),
            writable: false,
            enumerable: true,
            configurable: true
        });
        hooks.run("colorspace-init-end", this);
    }
    inGamut(coords, { epsilon = \u03B5$7 } = {}) {
        if (!this.equals(this.gamutSpace)) {
            coords = this.to(this.gamutSpace, coords);
            return this.gamutSpace.inGamut(coords, {
                epsilon
            });
        }
        let coordMeta = Object.values(this.coords);
        return coords.every((c, i)=>{
            let meta = coordMeta[i];
            if (meta.type !== "angle" && meta.range) {
                if (Number.isNaN(c)) // NaN is always in gamut
                return true;
                let [min, max] = meta.range;
                return (min === undefined || c >= min - epsilon) && (max === undefined || c <= max + epsilon);
            }
            return true;
        });
    }
    get isUnbounded() {
        return Object.values(this.coords).every((coord)=>!("range" in coord));
    }
    get cssId() {
        return this.formats?.color?.id || this.id;
    }
    get isPolar() {
        for(let id in this.coords){
            if (this.coords[id].type === "angle") return true;
        }
        return false;
    }
    getFormat(format) {
        if (typeof format === "object") {
            format = processFormat(format, this);
            return format;
        }
        let ret;
        if (format === "default") // Get first format
        ret = Object.values(this.formats)[0];
        else ret = this.formats[format];
        if (ret) {
            ret = processFormat(ret, this);
            return ret;
        }
        return null;
    }
    /**
	 * Check if this color space is the same as another color space reference.
	 * Allows proxying color space objects and comparing color spaces with ids.
	 * @param {string | ColorSpace} space ColorSpace object or id to compare to
	 * @returns {boolean}
	 */ equals(space) {
        if (!space) return false;
        return this === space || this.id === space || this.id === space.id;
    }
    to(space, coords) {
        if (arguments.length === 1) {
            const color = getColor(space);
            [space, coords] = [
                color.space,
                color.coords
            ];
        }
        space = ColorSpace.get(space);
        if (this.equals(space)) // Same space, no change needed
        return coords;
        // Convert NaN to 0, which seems to be valid in every coordinate of every color space
        coords = coords.map((c)=>Number.isNaN(c) ? 0 : c);
        // Find connection space = lowest common ancestor in the base tree
        let myPath = this.path;
        let otherPath = space.path;
        let connectionSpace, connectionSpaceIndex;
        for(let i = 0; i < myPath.length; i++){
            if (myPath[i].equals(otherPath[i])) {
                connectionSpace = myPath[i];
                connectionSpaceIndex = i;
            } else break;
        }
        if (!connectionSpace) // This should never happen
        throw new Error(`Cannot convert between color spaces ${this} and ${space}: no connection space was found`);
        // Go up from current space to connection space
        for(let i = myPath.length - 1; i > connectionSpaceIndex; i--)coords = myPath[i].toBase(coords);
        // Go down from connection space to target space
        for(let i = connectionSpaceIndex + 1; i < otherPath.length; i++)coords = otherPath[i].fromBase(coords);
        return coords;
    }
    from(space, coords) {
        if (arguments.length === 1) {
            const color = getColor(space);
            [space, coords] = [
                color.space,
                color.coords
            ];
        }
        space = ColorSpace.get(space);
        return space.to(this, coords);
    }
    toString() {
        return `${this.name} (${this.id})`;
    }
    getMinCoords() {
        let ret = [];
        for(let id in this.coords){
            let meta = this.coords[id];
            let range = meta.range || meta.refRange;
            ret.push(range?.min ?? 0);
        }
        return ret;
    }
    static registry = {};
    // Returns array of unique color spaces
    static get all() {
        return [
            ...new Set(Object.values(ColorSpace.registry))
        ];
    }
    static register(id, space) {
        if (arguments.length === 1) {
            space = arguments[0];
            id = space.id;
        }
        space = this.get(space);
        if (this.registry[id] && this.registry[id] !== space) throw new Error(`Duplicate color space registration: '${id}'`);
        this.registry[id] = space;
        // Register aliases when called without an explicit ID.
        if (arguments.length === 1 && space.aliases) for (let alias of space.aliases)this.register(alias, space);
        return space;
    }
    /**
	 * Lookup ColorSpace object by name
	 * @param {ColorSpace | string} name
	 */ static get(space, ...alternatives) {
        if (!space || space instanceof ColorSpace) return space;
        let argType = type(space);
        if (argType === "string") {
            // It's a color space id
            let ret = ColorSpace.registry[space.toLowerCase()];
            if (!ret) throw new TypeError(`No color space found with id = "${space}"`);
            return ret;
        }
        if (alternatives.length) return ColorSpace.get(...alternatives);
        throw new TypeError(`${space} is not a valid color space`);
    }
    /**
	 * Get metadata about a coordinate of a color space
	 *
	 * @static
	 * @param {Array | string} ref
	 * @param {ColorSpace | string} [workingSpace]
	 * @return {Object}
	 */ static resolveCoord(ref, workingSpace) {
        let coordType = type(ref);
        let space, coord;
        if (coordType === "string") {
            if (ref.includes(".")) // Absolute coordinate
            [space, coord] = ref.split(".");
            else // Relative coordinate
            [space, coord] = [
                ,
                ref
            ];
        } else if (Array.isArray(ref)) [space, coord] = ref;
        else {
            // Object
            space = ref.space;
            coord = ref.coordId;
        }
        space = ColorSpace.get(space);
        if (!space) space = workingSpace;
        if (!space) throw new TypeError(`Cannot resolve coordinate reference ${ref}: No color space specified and relative references are not allowed here`);
        coordType = type(coord);
        if (coordType === "number" || coordType === "string" && coord >= 0) {
            // Resolve numerical coord
            let meta = Object.entries(space.coords)[coord];
            if (meta) return {
                space,
                id: meta[0],
                index: coord,
                ...meta[1]
            };
        }
        space = ColorSpace.get(space);
        let normalizedCoord = coord.toLowerCase();
        let i = 0;
        for(let id in space.coords){
            let meta = space.coords[id];
            if (id.toLowerCase() === normalizedCoord || meta.name?.toLowerCase() === normalizedCoord) return {
                space,
                id,
                index: i,
                ...meta
            };
            i++;
        }
        throw new TypeError(`No "${coord}" coordinate found in ${space.name}. Its coordinates are: ${Object.keys(space.coords).join(", ")}`);
    }
    static DEFAULT_FORMAT = {
        type: "functions",
        name: "color"
    };
}
function getPath(space) {
    let ret = [
        space
    ];
    for(let s = space; s = s.base;)ret.push(s);
    return ret;
}
function processFormat(format, { coords } = {}) {
    if (format.coords && !format.coordGrammar) {
        format.type ||= "function";
        format.name ||= "color";
        // Format has not been processed
        format.coordGrammar = parseCoordGrammar(format.coords);
        let coordFormats = Object.entries(coords).map(([id, coordMeta], i)=>{
            // Preferred format for each coord is the first one
            let outputType = format.coordGrammar[i][0];
            let fromRange = coordMeta.range || coordMeta.refRange;
            let toRange = outputType.range, suffix = "";
            // Non-strict equals intentional since outputType could be a string object
            if (outputType == "<percentage>") {
                toRange = [
                    0,
                    100
                ];
                suffix = "%";
            } else if (outputType == "<angle>") suffix = "deg";
            return {
                fromRange,
                toRange,
                suffix
            };
        });
        format.serializeCoords = (coords, precision)=>{
            return coords.map((c, i)=>{
                let { fromRange, toRange, suffix } = coordFormats[i];
                if (fromRange && toRange) c = mapRange(fromRange, toRange, c);
                c = serializeNumber(c, {
                    precision,
                    unit: suffix
                });
                return c;
            });
        };
    }
    return format;
}
var xyz_d65 = new ColorSpace({
    id: "xyz-d65",
    name: "XYZ D65",
    coords: {
        x: {
            name: "X"
        },
        y: {
            name: "Y"
        },
        z: {
            name: "Z"
        }
    },
    white: "D65",
    formats: {
        color: {
            ids: [
                "xyz-d65",
                "xyz"
            ]
        }
    },
    aliases: [
        "xyz"
    ]
});
/**
 * Convenience class for RGB color spaces
 * @extends {ColorSpace}
 */ class RGBColorSpace extends ColorSpace {
    /**
	 * Creates a new RGB ColorSpace.
	 * If coords are not specified, they will use the default RGB coords.
	 * Instead of `fromBase()` and `toBase()` functions,
	 * you can specify to/from XYZ matrices and have `toBase()` and `fromBase()` automatically generated.
	 * @param {*} options - Same options as {@link ColorSpace} plus:
	 * @param {number[][]} options.toXYZ_M - Matrix to convert to XYZ
	 * @param {number[][]} options.fromXYZ_M - Matrix to convert from XYZ
	 */ constructor(options){
        if (!options.coords) options.coords = {
            r: {
                range: [
                    0,
                    1
                ],
                name: "Red"
            },
            g: {
                range: [
                    0,
                    1
                ],
                name: "Green"
            },
            b: {
                range: [
                    0,
                    1
                ],
                name: "Blue"
            }
        };
        if (!options.base) options.base = xyz_d65;
        if (options.toXYZ_M && options.fromXYZ_M) {
            options.toBase ??= (rgb)=>{
                let xyz = multiplyMatrices(options.toXYZ_M, rgb);
                if (this.white !== this.base.white) // Perform chromatic adaptation
                xyz = adapt$2(this.white, this.base.white, xyz);
                return xyz;
            };
            options.fromBase ??= (xyz)=>{
                xyz = adapt$2(this.base.white, this.white, xyz);
                return multiplyMatrices(options.fromXYZ_M, xyz);
            };
        }
        options.referred ??= "display";
        super(options);
    }
}
/**
 * Get the coordinates of a color in any color space
 * @param {Color} color
 * @param {string | ColorSpace} [space = color.space] The color space to convert to. Defaults to the color's current space
 * @returns {number[]} The color coordinates in the given color space
 */ function getAll(color, space) {
    color = getColor(color);
    if (!space || color.space.equals(space)) // No conversion needed
    return color.coords.slice();
    space = ColorSpace.get(space);
    return space.from(color);
}
function get(color, prop) {
    color = getColor(color);
    let { space, index } = ColorSpace.resolveCoord(prop, color.space);
    let coords = getAll(color, space);
    return coords[index];
}
function setAll(color, space, coords) {
    color = getColor(color);
    space = ColorSpace.get(space);
    color.coords = space.to(color.space, coords);
    return color;
}
setAll.returns = "color";
// Set properties and return current instance
function set(color, prop, value) {
    color = getColor(color);
    if (arguments.length === 2 && type(arguments[1]) === "object") {
        // Argument is an object literal
        let object = arguments[1];
        for(let p in object)set(color, p, object[p]);
    } else {
        if (typeof value === "function") value = value(get(color, prop));
        let { space, index } = ColorSpace.resolveCoord(prop, color.space);
        let coords = getAll(color, space);
        coords[index] = value;
        setAll(color, space, coords);
    }
    return color;
}
set.returns = "color";
var XYZ_D50 = new ColorSpace({
    id: "xyz-d50",
    name: "XYZ D50",
    white: "D50",
    base: xyz_d65,
    fromBase: (coords)=>adapt$2(xyz_d65.white, "D50", coords),
    toBase: (coords)=>adapt$2("D50", xyz_d65.white, coords)
});
// κ * ε  = 2^3 = 8
const \u03B5$6 = 216 / 24389; // 6^3/29^3 == (24/116)^3
const \u03B53$1 = 24 / 116;
const \u03BA$4 = 24389 / 27; // 29^3/3^3
let white$4 = WHITES.D50;
var lab = new ColorSpace({
    id: "lab",
    name: "Lab",
    coords: {
        l: {
            refRange: [
                0,
                100
            ],
            name: "Lightness"
        },
        a: {
            refRange: [
                -125,
                125
            ]
        },
        b: {
            refRange: [
                -125,
                125
            ]
        }
    },
    // Assuming XYZ is relative to D50, convert to CIE Lab
    // from CIE standard, which now defines these as a rational fraction
    white: white$4,
    base: XYZ_D50,
    // Convert D50-adapted XYX to Lab
    //  CIE 15.3:2004 section 8.2.1.1
    fromBase (XYZ) {
        // compute xyz, which is XYZ scaled relative to reference white
        let xyz = XYZ.map((value, i)=>value / white$4[i]);
        // now compute f
        let f = xyz.map((value)=>value > \u03B5$6 ? Math.cbrt(value) : (\u03BA$4 * value + 16) / 116);
        return [
            116 * f[1] - 16,
            500 * (f[0] - f[1]),
            200 * (f[1] - f[2])
        ];
    },
    // Convert Lab to D50-adapted XYZ
    // Same result as CIE 15.3:2004 Appendix D although the derivation is different
    // http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
    toBase (Lab) {
        // compute f, starting with the luminance-related term
        let f = [];
        f[1] = (Lab[0] + 16) / 116;
        f[0] = Lab[1] / 500 + f[1];
        f[2] = f[1] - Lab[2] / 200;
        // compute xyz
        let xyz = [
            f[0] > \u03B53$1 ? Math.pow(f[0], 3) : (116 * f[0] - 16) / \u03BA$4,
            Lab[0] > 8 ? Math.pow((Lab[0] + 16) / 116, 3) : Lab[0] / \u03BA$4,
            f[2] > \u03B53$1 ? Math.pow(f[2], 3) : (116 * f[2] - 16) / \u03BA$4
        ];
        // Compute XYZ by scaling xyz by reference white
        return xyz.map((value, i)=>value * white$4[i]);
    },
    formats: {
        "lab": {
            coords: [
                "<number> | <percentage>",
                "<number> | <percentage>[-1,1]",
                "<number> | <percentage>[-1,1]"
            ]
        }
    }
});
function constrain(angle) {
    return (angle % 360 + 360) % 360;
}
function adjust(arc, angles) {
    if (arc === "raw") return angles;
    let [a1, a2] = angles.map(constrain);
    let angleDiff = a2 - a1;
    if (arc === "increasing") {
        if (angleDiff < 0) a2 += 360;
    } else if (arc === "decreasing") {
        if (angleDiff > 0) a1 += 360;
    } else if (arc === "longer") {
        if (-180 < angleDiff && angleDiff < 180) {
            if (angleDiff > 0) a1 += 360;
            else a2 += 360;
        }
    } else if (arc === "shorter") {
        if (angleDiff > 180) a1 += 360;
        else if (angleDiff < -180) a2 += 360;
    }
    return [
        a1,
        a2
    ];
}
var lch = new ColorSpace({
    id: "lch",
    name: "LCH",
    coords: {
        l: {
            refRange: [
                0,
                100
            ],
            name: "Lightness"
        },
        c: {
            refRange: [
                0,
                150
            ],
            name: "Chroma"
        },
        h: {
            refRange: [
                0,
                360
            ],
            type: "angle",
            name: "Hue"
        }
    },
    base: lab,
    fromBase (Lab) {
        // Convert to polar form
        let [L, a, b] = Lab;
        let hue;
        const \u03B5 = 0.02;
        if (Math.abs(a) < \u03B5 && Math.abs(b) < \u03B5) hue = NaN;
        else hue = Math.atan2(b, a) * 180 / Math.PI;
        return [
            L,
            Math.sqrt(a ** 2 + b ** 2),
            constrain(hue)
        ];
    },
    toBase (LCH) {
        // Convert from polar form
        let [Lightness, Chroma, Hue] = LCH;
        // Clamp any negative Chroma
        if (Chroma < 0) Chroma = 0;
        // Deal with NaN Hue
        if (isNaN(Hue)) Hue = 0;
        return [
            Lightness,
            Chroma * Math.cos(Hue * Math.PI / 180),
            Chroma * Math.sin(Hue * Math.PI / 180)
        ];
    },
    formats: {
        "lch": {
            coords: [
                "<number> | <percentage>",
                "<number> | <percentage>",
                "<number> | <angle>"
            ]
        }
    }
});
// deltaE2000 is a statistically significant improvement
// and is recommended by the CIE and Idealliance
// especially for color differences less than 10 deltaE76
// but is wicked complicated
// and many implementations have small errors!
// DeltaE2000 is also discontinuous; in case this
// matters to you, use deltaECMC instead.
const Gfactor = 25 ** 7;
const \u03C0$1 = Math.PI;
const r2d = 180 / \u03C0$1;
const d2r$1 = \u03C0$1 / 180;
function pow7(x) {
    // Faster than x ** 7 or Math.pow(x, 7)
    const x2 = x * x;
    const x7 = x2 * x2 * x2 * x;
    return x7;
}
function deltaE2000(color, sample, { kL = 1, kC = 1, kH = 1 } = {}) {
    [color, sample] = getColor([
        color,
        sample
    ]);
    // Given this color as the reference
    // and the function parameter as the sample,
    // calculate deltaE 2000.
    // This implementation assumes the parametric
    // weighting factors kL, kC and kH
    // for the influence of viewing conditions
    // are all 1, as sadly seems typical.
    // kL should be increased for lightness texture or noise
    // and kC increased for chroma noise
    let [L1, a1, b1] = lab.from(color);
    let C1 = lch.from(lab, [
        L1,
        a1,
        b1
    ])[1];
    let [L2, a2, b2] = lab.from(sample);
    let C2 = lch.from(lab, [
        L2,
        a2,
        b2
    ])[1];
    // Check for negative Chroma,
    // which might happen through
    // direct user input of LCH values
    if (C1 < 0) C1 = 0;
    if (C2 < 0) C2 = 0;
    let Cbar = (C1 + C2) / 2; // mean Chroma
    // calculate a-axis asymmetry factor from mean Chroma
    // this turns JND ellipses for near-neutral colors back into circles
    let C7 = pow7(Cbar);
    let G = 0.5 * (1 - Math.sqrt(C7 / (C7 + Gfactor)));
    // scale a axes by asymmetry factor
    // this by the way is why there is no Lab2000 colorspace
    let adash1 = (1 + G) * a1;
    let adash2 = (1 + G) * a2;
    // calculate new Chroma from scaled a and original b axes
    let Cdash1 = Math.sqrt(adash1 ** 2 + b1 ** 2);
    let Cdash2 = Math.sqrt(adash2 ** 2 + b2 ** 2);
    // calculate new hues, with zero hue for true neutrals
    // and in degrees, not radians
    let h1 = adash1 === 0 && b1 === 0 ? 0 : Math.atan2(b1, adash1);
    let h2 = adash2 === 0 && b2 === 0 ? 0 : Math.atan2(b2, adash2);
    if (h1 < 0) h1 += 2 * \u03C0$1;
    if (h2 < 0) h2 += 2 * \u03C0$1;
    h1 *= r2d;
    h2 *= r2d;
    // Lightness and Chroma differences; sign matters
    let \u0394L = L2 - L1;
    let \u0394C = Cdash2 - Cdash1;
    // Hue difference, getting the sign correct
    let hdiff = h2 - h1;
    let hsum = h1 + h2;
    let habs = Math.abs(hdiff);
    let \u0394h;
    if (Cdash1 * Cdash2 === 0) \u0394h = 0;
    else if (habs <= 180) \u0394h = hdiff;
    else if (hdiff > 180) \u0394h = hdiff - 360;
    else if (hdiff < -180) \u0394h = hdiff + 360;
    else defaults.warn("the unthinkable has happened");
    // weighted Hue difference, more for larger Chroma
    let \u0394H = 2 * Math.sqrt(Cdash2 * Cdash1) * Math.sin(\u0394h * d2r$1 / 2);
    // calculate mean Lightness and Chroma
    let Ldash = (L1 + L2) / 2;
    let Cdash = (Cdash1 + Cdash2) / 2;
    let Cdash7 = pow7(Cdash);
    // Compensate for non-linearity in the blue region of Lab.
    // Four possibilities for hue weighting factor,
    // depending on the angles, to get the correct sign
    let hdash;
    if (Cdash1 * Cdash2 === 0) hdash = hsum; // which should be zero
    else if (habs <= 180) hdash = hsum / 2;
    else if (hsum < 360) hdash = (hsum + 360) / 2;
    else hdash = (hsum - 360) / 2;
    // positional corrections to the lack of uniformity of CIELAB
    // These are all trying to make JND ellipsoids more like spheres
    // SL Lightness crispening factor
    // a background with L=50 is assumed
    let lsq = (Ldash - 50) ** 2;
    let SL = 1 + 0.015 * lsq / Math.sqrt(20 + lsq);
    // SC Chroma factor, similar to those in CMC and deltaE 94 formulae
    let SC = 1 + 0.045 * Cdash;
    // Cross term T for blue non-linearity
    let T = 1;
    T -= 0.17 * Math.cos((hdash - 30) * d2r$1);
    T += 0.24 * Math.cos(2 * hdash * d2r$1);
    T += 0.32 * Math.cos((3 * hdash + 6) * d2r$1);
    T -= 0.20 * Math.cos((4 * hdash - 63) * d2r$1);
    // SH Hue factor depends on Chroma,
    // as well as adjusted hue angle like deltaE94.
    let SH = 1 + 0.015 * Cdash * T;
    // RT Hue rotation term compensates for rotation of JND ellipses
    // and Munsell constant hue lines
    // in the medium-high Chroma blue region
    // (Hue 225 to 315)
    let \u0394\u03B8 = 30 * Math.exp(-1 * ((hdash - 275) / 25) ** 2);
    let RC = 2 * Math.sqrt(Cdash7 / (Cdash7 + Gfactor));
    let RT = -1 * Math.sin(2 * \u0394\u03B8 * d2r$1) * RC;
    // Finally calculate the deltaE, term by term as root sume of squares
    let dE = (\u0394L / (kL * SL)) ** 2;
    dE += (\u0394C / (kC * SC)) ** 2;
    dE += (\u0394H / (kH * SH)) ** 2;
    dE += RT * (\u0394C / (kC * SC)) * (\u0394H / (kH * SH));
    return Math.sqrt(dE);
// Yay!!!
}
// Recalculated for consistent reference white
// see https://github.com/w3c/csswg-drafts/issues/6642#issuecomment-943521484
const XYZtoLMS_M$1 = [
    [
        0.8190224379967030,
        0.3619062600528904,
        -0.1288737815209879
    ],
    [
        0.0329836539323885,
        0.9292868615863434,
        0.0361446663506424
    ],
    [
        0.0481771893596242,
        0.2642395317527308,
        0.6335478284694309
    ]
];
// inverse of XYZtoLMS_M
const LMStoXYZ_M$1 = [
    [
        1.2268798758459243,
        -0.5578149944602171,
        0.2813910456659647
    ],
    [
        -0.0405757452148008,
        1.1122868032803170,
        -0.0717110580655164
    ],
    [
        -0.0763729366746601,
        -0.4214933324022432,
        1.5869240198367816
    ]
];
const LMStoLab_M = [
    [
        0.2104542683093140,
        0.7936177747023054,
        -0.0040720430116193
    ],
    [
        1.9779985324311684,
        -2.42859224204858,
        0.4505937096174110
    ],
    [
        0.0259040424655478,
        0.7827717124575296,
        -0.8086757549230774
    ]
];
// LMStoIab_M inverted
const LabtoLMS_M = [
    [
        1.0000000000000000,
        0.3963377773761749,
        0.2158037573099136
    ],
    [
        1.0000000000000000,
        -0.1055613458156586,
        -0.0638541728258133
    ],
    [
        1.0000000000000000,
        -0.0894841775298119,
        -1.2914855480194092
    ]
];
var OKLab = new ColorSpace({
    id: "oklab",
    name: "Oklab",
    coords: {
        l: {
            refRange: [
                0,
                1
            ],
            name: "Lightness"
        },
        a: {
            refRange: [
                -0.4,
                0.4
            ]
        },
        b: {
            refRange: [
                -0.4,
                0.4
            ]
        }
    },
    // Note that XYZ is relative to D65
    white: "D65",
    base: xyz_d65,
    fromBase (XYZ) {
        // move to LMS cone domain
        let LMS = multiplyMatrices(XYZtoLMS_M$1, XYZ);
        // non-linearity
        let LMSg = LMS.map((val)=>Math.cbrt(val));
        return multiplyMatrices(LMStoLab_M, LMSg);
    },
    toBase (OKLab) {
        // move to LMS cone domain
        let LMSg = multiplyMatrices(LabtoLMS_M, OKLab);
        // restore linearity
        let LMS = LMSg.map((val)=>val ** 3);
        return multiplyMatrices(LMStoXYZ_M$1, LMS);
    },
    formats: {
        "oklab": {
            coords: [
                "<percentage> | <number>",
                "<number> | <percentage>[-1,1]",
                "<number> | <percentage>[-1,1]"
            ]
        }
    }
});
// More accurate color-difference formulae
// than the simple 1976 Euclidean distance in CIE Lab
function deltaEOK(color, sample) {
    [color, sample] = getColor([
        color,
        sample
    ]);
    // Given this color as the reference
    // and a sample,
    // calculate deltaEOK, term by term as root sum of squares
    let [L1, a1, b1] = OKLab.from(color);
    let [L2, a2, b2] = OKLab.from(sample);
    let \u0394L = L1 - L2;
    let \u0394a = a1 - a2;
    let \u0394b = b1 - b2;
    return Math.sqrt(\u0394L ** 2 + \u0394a ** 2 + \u0394b ** 2);
}
const \u03B5$5 = .000075;
/**
 * Check if a color is in gamut of either its own or another color space
 * @return {Boolean} Is the color in gamut?
 */ function inGamut(color, space, { epsilon = \u03B5$5 } = {}) {
    color = getColor(color);
    if (!space) space = color.space;
    space = ColorSpace.get(space);
    let coords = color.coords;
    if (space !== color.space) coords = space.from(color);
    return space.inGamut(coords, {
        epsilon
    });
}
function clone(color) {
    return {
        space: color.space,
        coords: color.coords.slice(),
        alpha: color.alpha
    };
}
/**
 * Euclidean distance of colors in an arbitrary color space
 */ function distance(color1, color2, space = "lab") {
    space = ColorSpace.get(space);
    // Assume getColor() is called on color in space.from()
    let coords1 = space.from(color1);
    let coords2 = space.from(color2);
    return Math.sqrt(coords1.reduce((acc, c1, i)=>{
        let c2 = coords2[i];
        if (isNaN(c1) || isNaN(c2)) return acc;
        return acc + (c2 - c1) ** 2;
    }, 0));
}
function deltaE76(color, sample) {
    // Assume getColor() is called in the distance function
    return distance(color, sample, "lab");
}
// More accurate color-difference formulae
// than the simple 1976 Euclidean distance in Lab
// CMC by the Color Measurement Committee of the
// Bradford Society of Dyeists and Colorsts, 1994.
// Uses LCH rather than Lab,
// with different weights for L, C and H differences
// A nice increase in accuracy for modest increase in complexity
const \u03C0 = Math.PI;
const d2r = \u03C0 / 180;
function deltaECMC(color, sample, { l = 2, c = 1 } = {}) {
    [color, sample] = getColor([
        color,
        sample
    ]);
    // Given this color as the reference
    // and a sample,
    // calculate deltaE CMC.
    // This implementation assumes the parametric
    // weighting factors l:c are 2:1
    // which is typical for non-textile uses.
    let [L1, a1, b1] = lab.from(color);
    let [, C1, H1] = lch.from(lab, [
        L1,
        a1,
        b1
    ]);
    let [L2, a2, b2] = lab.from(sample);
    let C2 = lch.from(lab, [
        L2,
        a2,
        b2
    ])[1];
    // let [L1, a1, b1] = color.getAll(lab);
    // let C1 = color.get("lch.c");
    // let H1 = color.get("lch.h");
    // let [L2, a2, b2] = sample.getAll(lab);
    // let C2 = sample.get("lch.c");
    // Check for negative Chroma,
    // which might happen through
    // direct user input of LCH values
    if (C1 < 0) C1 = 0;
    if (C2 < 0) C2 = 0;
    // we don't need H2 as ΔH is calculated from Δa, Δb and ΔC
    // Lightness and Chroma differences
    // These are (color - sample), unlike deltaE2000
    let \u0394L = L1 - L2;
    let \u0394C = C1 - C2;
    let \u0394a = a1 - a2;
    let \u0394b = b1 - b2;
    // weighted Hue difference, less for larger Chroma difference
    let H2 = \u0394a ** 2 + \u0394b ** 2 - \u0394C ** 2;
    // due to roundoff error it is possible that, for zero a and b,
    // ΔC > Δa + Δb is 0, resulting in attempting
    // to take the square root of a negative number
    // trying instead the equation from Industrial Color Physics
    // By Georg A. Klein
    // let ΔH = ((a1 * b2) - (a2 * b1)) / Math.sqrt(0.5 * ((C2 * C1) + (a2 * a1) + (b2 * b1)));
    // console.log({ΔH});
    // This gives the same result to 12 decimal places
    // except it sometimes NaNs when trying to root a negative number
    // let ΔH = Math.sqrt(H2); we never actually use the root, it gets squared again!!
    // positional corrections to the lack of uniformity of CIELAB
    // These are all trying to make JND ellipsoids more like spheres
    // SL Lightness crispening factor, depends entirely on L1 not L2
    let SL = 0.511; // linear portion of the Y to L transfer function
    if (L1 >= 16) SL = 0.040975 * L1 / (1 + 0.01765 * L1);
    // SC Chroma factor
    let SC = 0.0638 * C1 / (1 + 0.0131 * C1) + 0.638;
    // Cross term T for blue non-linearity
    let T;
    if (Number.isNaN(H1)) H1 = 0;
    if (H1 >= 164 && H1 <= 345) T = 0.56 + Math.abs(0.2 * Math.cos((H1 + 168) * d2r));
    else T = 0.36 + Math.abs(0.4 * Math.cos((H1 + 35) * d2r));
    // console.log({T});
    // SH Hue factor also depends on C1,
    let C4 = Math.pow(C1, 4);
    let F = Math.sqrt(C4 / (C4 + 1900));
    let SH = SC * (F * T + 1 - F);
    // Finally calculate the deltaE, term by term as root sume of squares
    let dE = (\u0394L / (l * SL)) ** 2;
    dE += (\u0394C / (c * SC)) ** 2;
    dE += H2 / SH ** 2;
    // dE += (ΔH / SH)  ** 2;
    return Math.sqrt(dE);
// Yay!!!
}
const Yw$1 = 203; // absolute luminance of media white
var XYZ_Abs_D65 = new ColorSpace({
    // Absolute CIE XYZ, with a D65 whitepoint,
    // as used in most HDR colorspaces as a starting point.
    // SDR spaces are converted per BT.2048
    // so that diffuse, media white is 203 cd/m²
    id: "xyz-abs-d65",
    cssId: "--xyz-abs-d65",
    name: "Absolute XYZ D65",
    coords: {
        x: {
            refRange: [
                0,
                9504.7
            ],
            name: "Xa"
        },
        y: {
            refRange: [
                0,
                10000
            ],
            name: "Ya"
        },
        z: {
            refRange: [
                0,
                10888.3
            ],
            name: "Za"
        }
    },
    base: xyz_d65,
    fromBase (XYZ) {
        // Make XYZ absolute, not relative to media white
        // Maximum luminance in PQ is 10,000 cd/m²
        // Relative XYZ has Y=1 for media white
        return XYZ.map((v)=>Math.max(v * Yw$1, 0));
    },
    toBase (AbsXYZ) {
        // Convert to media-white relative XYZ
        return AbsXYZ.map((v)=>Math.max(v / Yw$1, 0));
    }
});
const b$1 = 1.15;
const g = 0.66;
const n$1 = 2610 / 2 ** 14;
const ninv$1 = 2 ** 14 / 2610;
const c1$2 = 0.8359375;
const c2$2 = 18.8515625;
const c3$2 = 18.6875;
const p = 1.7 * 2523 / 32;
const pinv = 32 / (1.7 * 2523);
const d = -0.56;
const d0 = 1.6295499532821566E-11;
const XYZtoCone_M = [
    [
        0.41478972,
        0.579999,
        0.0146480
    ],
    [
        -0.20151,
        1.120649,
        0.0531008
    ],
    [
        -0.0166008,
        0.264800,
        0.6684799
    ]
];
// XYZtoCone_M inverted
const ConetoXYZ_M = [
    [
        1.9242264357876067,
        -1.0047923125953657,
        0.037651404030618
    ],
    [
        0.35031676209499907,
        0.7264811939316552,
        -0.06538442294808501
    ],
    [
        -0.09098281098284752,
        -0.3127282905230739,
        1.5227665613052603
    ]
];
const ConetoIab_M = [
    [
        0.5,
        0.5,
        0
    ],
    [
        3.524000,
        -4.066708,
        0.542708
    ],
    [
        0.199076,
        1.096799,
        -1.295875
    ]
];
// ConetoIab_M inverted
const IabtoCone_M = [
    [
        1,
        0.1386050432715393,
        0.05804731615611886
    ],
    [
        0.9999999999999999,
        -0.1386050432715393,
        -0.05804731615611886
    ],
    [
        0.9999999999999998,
        -0.09601924202631895,
        -0.8118918960560388
    ]
];
var Jzazbz = new ColorSpace({
    id: "jzazbz",
    name: "Jzazbz",
    coords: {
        jz: {
            refRange: [
                0,
                1
            ],
            name: "Jz"
        },
        az: {
            refRange: [
                -0.5,
                0.5
            ]
        },
        bz: {
            refRange: [
                -0.5,
                0.5
            ]
        }
    },
    base: XYZ_Abs_D65,
    fromBase (XYZ) {
        // First make XYZ absolute, not relative to media white
        // Maximum luminance in PQ is 10,000 cd/m²
        // Relative XYZ has Y=1 for media white
        // BT.2048 says media white Y=203 at PQ 58
        let [Xa, Ya, Za] = XYZ;
        // modify X and Y
        let Xm = b$1 * Xa - (b$1 - 1) * Za;
        let Ym = g * Ya - (g - 1) * Xa;
        // move to LMS cone domain
        let LMS = multiplyMatrices(XYZtoCone_M, [
            Xm,
            Ym,
            Za
        ]);
        // PQ-encode LMS
        let PQLMS = LMS.map(function(val) {
            let num = c1$2 + c2$2 * (val / 10000) ** n$1;
            let denom = 1 + c3$2 * (val / 10000) ** n$1;
            return (num / denom) ** p;
        });
        // almost there, calculate Iz az bz
        let [Iz, az, bz] = multiplyMatrices(ConetoIab_M, PQLMS);
        // console.log({Iz, az, bz});
        let Jz = (1 + d) * Iz / (1 + d * Iz) - d0;
        return [
            Jz,
            az,
            bz
        ];
    },
    toBase (Jzazbz) {
        let [Jz, az, bz] = Jzazbz;
        let Iz = (Jz + d0) / (1 + d - d * (Jz + d0));
        // bring into LMS cone domain
        let PQLMS = multiplyMatrices(IabtoCone_M, [
            Iz,
            az,
            bz
        ]);
        // convert from PQ-coded to linear-light
        let LMS = PQLMS.map(function(val) {
            let num = c1$2 - val ** pinv;
            let denom = c3$2 * val ** pinv - c2$2;
            let x = 10000 * (num / denom) ** ninv$1;
            return x; // luminance relative to diffuse white, [0, 70 or so].
        });
        // modified abs XYZ
        let [Xm, Ym, Za] = multiplyMatrices(ConetoXYZ_M, LMS);
        // restore standard D50 relative XYZ, relative to media white
        let Xa = (Xm + (b$1 - 1) * Za) / b$1;
        let Ya = (Ym + (g - 1) * Xa) / g;
        return [
            Xa,
            Ya,
            Za
        ];
    },
    formats: {
        // https://drafts.csswg.org/css-color-hdr/#Jzazbz
        "color": {
            coords: [
                "<number> | <percentage>",
                "<number> | <percentage>[-1,1]",
                "<number> | <percentage>[-1,1]"
            ]
        }
    }
});
var jzczhz = new ColorSpace({
    id: "jzczhz",
    name: "JzCzHz",
    coords: {
        jz: {
            refRange: [
                0,
                1
            ],
            name: "Jz"
        },
        cz: {
            refRange: [
                0,
                1
            ],
            name: "Chroma"
        },
        hz: {
            refRange: [
                0,
                360
            ],
            type: "angle",
            name: "Hue"
        }
    },
    base: Jzazbz,
    fromBase (jzazbz) {
        // Convert to polar form
        let [Jz, az, bz] = jzazbz;
        let hue;
        const \u03B5 = 0.0002; // chromatic components much smaller than a,b
        if (Math.abs(az) < \u03B5 && Math.abs(bz) < \u03B5) hue = NaN;
        else hue = Math.atan2(bz, az) * 180 / Math.PI;
        return [
            Jz,
            Math.sqrt(az ** 2 + bz ** 2),
            constrain(hue)
        ];
    },
    toBase (jzczhz) {
        // Convert from polar form
        // debugger;
        return [
            jzczhz[0],
            jzczhz[1] * Math.cos(jzczhz[2] * Math.PI / 180),
            jzczhz[1] * Math.sin(jzczhz[2] * Math.PI / 180)
        ];
    }
});
// More accurate color-difference formulae
// than the simple 1976 Euclidean distance in Lab
// Uses JzCzHz, which has improved perceptual uniformity
// and thus a simple Euclidean root-sum of ΔL² ΔC² ΔH²
// gives good results.
function deltaEJz(color, sample) {
    [color, sample] = getColor([
        color,
        sample
    ]);
    // Given this color as the reference
    // and a sample,
    // calculate deltaE in JzCzHz.
    let [Jz1, Cz1, Hz1] = jzczhz.from(color);
    let [Jz2, Cz2, Hz2] = jzczhz.from(sample);
    // Lightness and Chroma differences
    // sign does not matter as they are squared.
    let \u0394J = Jz1 - Jz2;
    let \u0394C = Cz1 - Cz2;
    // length of chord for ΔH
    if (Number.isNaN(Hz1) && Number.isNaN(Hz2)) {
        // both undefined hues
        Hz1 = 0;
        Hz2 = 0;
    } else if (Number.isNaN(Hz1)) // one undefined, set to the defined hue
    Hz1 = Hz2;
    else if (Number.isNaN(Hz2)) Hz2 = Hz1;
    let \u0394h = Hz1 - Hz2;
    let \u0394H = 2 * Math.sqrt(Cz1 * Cz2) * Math.sin(\u0394h / 2 * (Math.PI / 180));
    return Math.sqrt(\u0394J ** 2 + \u0394C ** 2 + \u0394H ** 2);
}
const c1$1 = 0.8359375;
const c2$1 = 2413 / 128;
const c3$1 = 18.6875;
const m1$1 = 2610 / 16384;
const m2 = 2523 / 32;
const im1 = 16384 / 2610;
const im2 = 32 / 2523;
// The matrix below includes the 4% crosstalk components
// and is from the Dolby "What is ICtCp" paper"
const XYZtoLMS_M = [
    [
        0.3592832590121217,
        0.6976051147779502,
        -0.035891593232029
    ],
    [
        -0.1920808463704993,
        1.1004767970374321,
        0.0753748658519118
    ],
    [
        0.0070797844607479,
        0.0748396662186362,
        0.8433265453898765
    ]
];
// linear-light Rec.2020 to LMS, again with crosstalk
// rational terms from Jan Fröhlich,
// Encoding High Dynamic Range andWide Color Gamut Imagery, p.97
// and ITU-R BT.2124-0 p.2
/*
const Rec2020toLMS_M = [
	[ 1688 / 4096,  2146 / 4096,   262 / 4096 ],
	[  683 / 4096,  2951 / 4096,   462 / 4096 ],
	[   99 / 4096,   309 / 4096,  3688 / 4096 ]
];
*/ // this includes the Ebner LMS coefficients,
// the rotation, and the scaling to [-0.5,0.5] range
// rational terms from Fröhlich p.97
// and ITU-R BT.2124-0 pp.2-3
const LMStoIPT_M = [
    [
        0.5,
        0.5,
        0
    ],
    [
        6610 / 4096,
        -13613 / 4096,
        7003 / 4096
    ],
    [
        17933 / 4096,
        -17390 / 4096,
        -543 / 4096
    ]
];
// inverted matrices, calculated from the above
const IPTtoLMS_M = [
    [
        0.9999999999999998,
        0.0086090370379328,
        0.1110296250030260
    ],
    [
        0.9999999999999998,
        -0.0086090370379328,
        -0.1110296250030259
    ],
    [
        0.9999999999999998,
        0.5600313357106791,
        -0.3206271749873188
    ]
];
/*
const LMStoRec2020_M = [
	[ 3.4375568932814012112,   -2.5072112125095058195,   0.069654319228104608382],
	[-0.79142868665644156125,   1.9838372198740089874,  -0.19240853321756742626 ],
	[-0.025646662911506476363, -0.099240248643945566751, 1.1248869115554520431  ]
];
*/ const LMStoXYZ_M = [
    [
        2.0701522183894223,
        -1.3263473389671563,
        0.2066510476294053
    ],
    [
        0.3647385209748072,
        0.6805660249472273,
        -0.0453045459220347
    ],
    [
        -0.0497472075358123,
        -0.0492609666966131,
        1.1880659249923042
    ]
];
// Only the PQ form of ICtCp is implemented here. There is also an HLG form.
// from Dolby, "WHAT IS ICTCP?"
// https://professional.dolby.com/siteassets/pdfs/ictcp_dolbywhitepaper_v071.pdf
// and
// Dolby, "Perceptual Color Volume
// Measuring the Distinguishable Colors of HDR and WCG Displays"
// https://professional.dolby.com/siteassets/pdfs/dolby-vision-measuring-perceptual-color-volume-v7.1.pdf
var ictcp = new ColorSpace({
    id: "ictcp",
    name: "ICTCP",
    // From BT.2100-2 page 7:
    // During production, signal values are expected to exceed the
    // range E′ = [0.0 : 1.0]. This provides processing headroom and avoids
    // signal degradation during cascaded processing. Such values of E′,
    // below 0.0 or exceeding 1.0, should not be clipped during production
    // and exchange.
    // Values below 0.0 should not be clipped in reference displays (even
    // though they represent “negative” light) to allow the black level of
    // the signal (LB) to be properly set using test signals known as “PLUGE”
    coords: {
        i: {
            refRange: [
                0,
                1
            ],
            name: "I"
        },
        ct: {
            refRange: [
                -0.5,
                0.5
            ],
            name: "CT"
        },
        cp: {
            refRange: [
                -0.5,
                0.5
            ],
            name: "CP"
        }
    },
    base: XYZ_Abs_D65,
    fromBase (XYZ) {
        // move to LMS cone domain
        let LMS = multiplyMatrices(XYZtoLMS_M, XYZ);
        return LMStoICtCp(LMS);
    },
    toBase (ICtCp) {
        let LMS = ICtCptoLMS(ICtCp);
        return multiplyMatrices(LMStoXYZ_M, LMS);
    }
});
function LMStoICtCp(LMS) {
    // apply the PQ EOTF
    // we can't ever be dividing by zero because of the "1 +" in the denominator
    let PQLMS = LMS.map(function(val) {
        let num = c1$1 + c2$1 * (val / 10000) ** m1$1;
        let denom = 1 + c3$1 * (val / 10000) ** m1$1;
        return (num / denom) ** m2;
    });
    // LMS to IPT, with rotation for Y'C'bC'r compatibility
    return multiplyMatrices(LMStoIPT_M, PQLMS);
}
function ICtCptoLMS(ICtCp) {
    let PQLMS = multiplyMatrices(IPTtoLMS_M, ICtCp);
    // From BT.2124-0 Annex 2 Conversion 3
    let LMS = PQLMS.map(function(val) {
        let num = Math.max(val ** im2 - c1$1, 0);
        let denom = c2$1 - c3$1 * val ** im2;
        return 10000 * (num / denom) ** im1;
    });
    return LMS;
}
// Delta E in ICtCp space,
// which the ITU calls Delta E ITP, which is shorter
// formulae from ITU Rec. ITU-R BT.2124-0
function deltaEITP(color, sample) {
    [color, sample] = getColor([
        color,
        sample
    ]);
    // Given this color as the reference
    // and a sample,
    // calculate deltaE in ICtCp
    // which is simply the Euclidean distance
    let [I1, T1, P1] = ictcp.from(color);
    let [I2, T2, P2] = ictcp.from(sample);
    // the 0.25 factor is to undo the encoding scaling in Ct
    // the 720 is so that 1 deltaE = 1 JND
    // per  ITU-R BT.2124-0 p.3
    return 720 * Math.sqrt((I1 - I2) ** 2 + 0.25 * (T1 - T2) ** 2 + (P1 - P2) ** 2);
}
const white$3 = WHITES.D65;
const adaptedCoef = 0.42;
const adaptedCoefInv = 1 / adaptedCoef;
const tau = 2 * Math.PI;
const cat16 = [
    [
        0.401288,
        0.650173,
        -0.051461
    ],
    [
        -0.250268,
        1.204414,
        0.045854
    ],
    [
        -0.002079,
        0.048952,
        0.953127
    ]
];
const cat16Inv = [
    [
        1.8620678550872327,
        -1.0112546305316843,
        0.14918677544445175
    ],
    [
        0.38752654323613717,
        0.6214474419314753,
        -0.008973985167612518
    ],
    [
        -0.015841498849333856,
        -0.03412293802851557,
        1.0499644368778496
    ]
];
const m1 = [
    [
        460.0,
        451.0,
        288.0
    ],
    [
        460.0,
        -891,
        -261
    ],
    [
        460.0,
        -220,
        -6300
    ]
];
const surroundMap = {
    dark: [
        0.8,
        0.525,
        0.8
    ],
    dim: [
        0.9,
        0.59,
        0.9
    ],
    average: [
        1,
        0.69,
        1
    ]
};
const hueQuadMap = {
    // Red, Yellow, Green, Blue, Red
    h: [
        20.14,
        90.00,
        164.25,
        237.53,
        380.14
    ],
    e: [
        0.8,
        0.7,
        1.0,
        1.2,
        0.8
    ],
    H: [
        0.0,
        100.0,
        200.0,
        300.0,
        400.0
    ]
};
const rad2deg = 180 / Math.PI;
const deg2rad$1 = Math.PI / 180;
function adapt$1(coords, fl) {
    const temp = coords.map((c)=>{
        const x = spow(fl * Math.abs(c) * 0.01, adaptedCoef);
        return 400 * copySign(x, c) / (x + 27.13);
    });
    return temp;
}
function unadapt(adapted, fl) {
    const constant = 100 / fl * 27.13 ** adaptedCoefInv;
    return adapted.map((c)=>{
        const cabs = Math.abs(c);
        return copySign(constant * spow(cabs / (400 - cabs), adaptedCoefInv), c);
    });
}
function hueQuadrature(h) {
    let hp = constrain(h);
    if (hp <= hueQuadMap.h[0]) hp += 360;
    const i = bisectLeft(hueQuadMap.h, hp) - 1;
    const [hi, hii] = hueQuadMap.h.slice(i, i + 2);
    const [ei, eii] = hueQuadMap.e.slice(i, i + 2);
    const Hi = hueQuadMap.H[i];
    const t = (hp - hi) / ei;
    return Hi + 100 * t / (t + (hii - hp) / eii);
}
function invHueQuadrature(H) {
    let Hp = (H % 400 + 400) % 400;
    const i = Math.floor(0.01 * Hp);
    Hp = Hp % 100;
    const [hi, hii] = hueQuadMap.h.slice(i, i + 2);
    const [ei, eii] = hueQuadMap.e.slice(i, i + 2);
    return constrain((Hp * (eii * hi - ei * hii) - 100 * hi * eii) / (Hp * (eii - ei) - 100 * eii));
}
function environment(refWhite, adaptingLuminance, backgroundLuminance, surround, discounting) {
    const env = {};
    env.discounting = discounting;
    env.refWhite = refWhite;
    env.surround = surround;
    const xyzW = refWhite.map((c)=>{
        return c * 100;
    });
    // The average luminance of the environment in `cd/m^2cd/m` (a.k.a. nits)
    env.la = adaptingLuminance;
    // The relative luminance of the nearby background
    env.yb = backgroundLuminance;
    // Absolute luminance of the reference white.
    const yw = xyzW[1];
    // Cone response for reference white
    const rgbW = multiplyMatrices(cat16, xyzW);
    // Surround: dark, dim, and average
    surround = surroundMap[env.surround];
    const f = surround[0];
    env.c = surround[1];
    env.nc = surround[2];
    const k = 1 / (5 * env.la + 1);
    const k4 = k ** 4;
    // Factor of luminance level adaptation
    env.fl = k4 * env.la + 0.1 * (1 - k4) * (1 - k4) * Math.cbrt(5 * env.la);
    env.flRoot = env.fl ** 0.25;
    env.n = env.yb / yw;
    env.z = 1.48 + Math.sqrt(env.n);
    env.nbb = 0.725 * env.n ** -0.2;
    env.ncb = env.nbb;
    // Degree of adaptation calculating if not discounting
    // illuminant (assumed eye is fully adapted)
    const d = discounting ? 1 : Math.max(Math.min(f * (1 - 1 / 3.6 * Math.exp((-env.la - 42) / 92)), 1), 0);
    env.dRgb = rgbW.map((c)=>{
        return interpolate(1, yw / c, d);
    });
    env.dRgbInv = env.dRgb.map((c)=>{
        return 1 / c;
    });
    // Achromatic response
    const rgbCW = rgbW.map((c, i)=>{
        return c * env.dRgb[i];
    });
    const rgbAW = adapt$1(rgbCW, env.fl);
    env.aW = env.nbb * (2 * rgbAW[0] + rgbAW[1] + 0.05 * rgbAW[2]);
    // console.log(env);
    return env;
}
// Pre-calculate everything we can with the viewing conditions
const viewingConditions$1 = environment(white$3, 64 / Math.PI * 0.2, 20, "average", false);
function fromCam16(cam16, env) {
    // These check ensure one, and only one attribute for a
    // given category is provided.
    if (!(cam16.J !== undefined ^ cam16.Q !== undefined)) throw new Error("Conversion requires one and only one: 'J' or 'Q'");
    if (!(cam16.C !== undefined ^ cam16.M !== undefined ^ cam16.s !== undefined)) throw new Error("Conversion requires one and only one: 'C', 'M' or 's'");
    // Hue is absolutely required
    if (!(cam16.h !== undefined ^ cam16.H !== undefined)) throw new Error("Conversion requires one and only one: 'h' or 'H'");
    // Black
    if (cam16.J === 0.0 || cam16.Q === 0.0) return [
        0.0,
        0.0,
        0.0
    ];
    // Break hue into Cartesian components
    let hRad = 0.0;
    if (cam16.h !== undefined) hRad = constrain(cam16.h) * deg2rad$1;
    else hRad = invHueQuadrature(cam16.H) * deg2rad$1;
    const cosh = Math.cos(hRad);
    const sinh = Math.sin(hRad);
    // Calculate `Jroot` from one of the lightness derived coordinates.
    let Jroot = 0.0;
    if (cam16.J !== undefined) Jroot = spow(cam16.J, 0.5) * 0.1;
    else if (cam16.Q !== undefined) Jroot = 0.25 * env.c * cam16.Q / ((env.aW + 4) * env.flRoot);
    // Calculate the `t` value from one of the chroma derived coordinates
    let alpha = 0.0;
    if (cam16.C !== undefined) alpha = cam16.C / Jroot;
    else if (cam16.M !== undefined) alpha = cam16.M / env.flRoot / Jroot;
    else if (cam16.s !== undefined) alpha = 0.0004 * cam16.s ** 2 * (env.aW + 4) / env.c;
    const t = spow(alpha * Math.pow(1.64 - Math.pow(0.29, env.n), -0.73), 10 / 9);
    // Eccentricity
    const et = 0.25 * (Math.cos(hRad + 2) + 3.8);
    // Achromatic response
    const A = env.aW * spow(Jroot, 2 / env.c / env.z);
    // Calculate red-green and yellow-blue components
    const p1 = 5e4 / 13 * env.nc * env.ncb * et;
    const p2 = A / env.nbb;
    const r = 23 * (p2 + 0.305) * zdiv(t, 23 * p1 + t * (11 * cosh + 108 * sinh));
    const a = r * cosh;
    const b = r * sinh;
    // Calculate back from cone response to XYZ
    const rgb_c = unadapt(multiplyMatrices(m1, [
        p2,
        a,
        b
    ]).map((c)=>{
        return c * 1 / 1403;
    }), env.fl);
    return multiplyMatrices(cat16Inv, rgb_c.map((c, i)=>{
        return c * env.dRgbInv[i];
    })).map((c)=>{
        return c / 100;
    });
}
function toCam16(xyzd65, env) {
    // Cone response
    const xyz100 = xyzd65.map((c)=>{
        return c * 100;
    });
    const rgbA = adapt$1(multiplyMatrices(cat16, xyz100).map((c, i)=>{
        return c * env.dRgb[i];
    }), env.fl);
    // Calculate hue from red-green and yellow-blue components
    const a = rgbA[0] + (-12 * rgbA[1] + rgbA[2]) / 11;
    const b = (rgbA[0] + rgbA[1] - 2 * rgbA[2]) / 9;
    const hRad = (Math.atan2(b, a) % tau + tau) % tau;
    // Eccentricity
    const et = 0.25 * (Math.cos(hRad + 2) + 3.8);
    const t = 5e4 / 13 * env.nc * env.ncb * zdiv(et * Math.sqrt(a ** 2 + b ** 2), rgbA[0] + rgbA[1] + 1.05 * rgbA[2] + 0.305);
    const alpha = spow(t, 0.9) * Math.pow(1.64 - Math.pow(0.29, env.n), 0.73);
    // Achromatic response
    const A = env.nbb * (2 * rgbA[0] + rgbA[1] + 0.05 * rgbA[2]);
    const Jroot = spow(A / env.aW, 0.5 * env.c * env.z);
    // Lightness
    const J = 100 * spow(Jroot, 2);
    // Brightness
    const Q = 4 / env.c * Jroot * (env.aW + 4) * env.flRoot;
    // Chroma
    const C = alpha * Jroot;
    // Colorfulness
    const M = C * env.flRoot;
    // Hue
    const h = constrain(hRad * rad2deg);
    // Hue quadrature
    const H = hueQuadrature(h);
    // Saturation
    const s = 50 * spow(env.c * alpha / (env.aW + 4), 0.5);
    // console.log({J: J, C: C, h: h, s: s, Q: Q, M: M, H: H});
    return {
        J: J,
        C: C,
        h: h,
        s: s,
        Q: Q,
        M: M,
        H: H
    };
}
// Provided as a way to directly evaluate the CAM16 model
// https://observablehq.com/@jrus/cam16: reference implementation
// https://arxiv.org/pdf/1802.06067.pdf: Nico Schlömer
// https://onlinelibrary.wiley.com/doi/pdf/10.1002/col.22324: hue quadrature
// https://www.researchgate.net/publication/318152296_Comprehensive_color_solutions_CAM16_CAT16_and_CAM16-UCS
// Results compared against: https://github.com/colour-science/colour
var cam16 = new ColorSpace({
    id: "cam16-jmh",
    cssId: "--cam16-jmh",
    name: "CAM16-JMh",
    coords: {
        j: {
            refRange: [
                0,
                100
            ],
            name: "J"
        },
        m: {
            refRange: [
                0,
                105.0
            ],
            name: "Colorfulness"
        },
        h: {
            refRange: [
                0,
                360
            ],
            type: "angle",
            name: "Hue"
        }
    },
    base: xyz_d65,
    fromBase (xyz) {
        const cam16 = toCam16(xyz, viewingConditions$1);
        return [
            cam16.J,
            cam16.M,
            cam16.h
        ];
    },
    toBase (cam16) {
        return fromCam16({
            J: cam16[0],
            M: cam16[1],
            h: cam16[2]
        }, viewingConditions$1);
    }
});
const white$2 = WHITES.D65;
const \u03B5$4 = 216 / 24389; // 6^3/29^3 == (24/116)^3
const \u03BA$3 = 24389 / 27; // 29^3/3^3
function toLstar(y) {
    // Convert XYZ Y to L*
    const fy = y > \u03B5$4 ? Math.cbrt(y) : (\u03BA$3 * y + 16) / 116;
    return 116.0 * fy - 16.0;
}
function fromLstar(lstar) {
    // Convert L* back to XYZ Y
    return lstar > 8 ? Math.pow((lstar + 16) / 116, 3) : lstar / \u03BA$3;
}
function fromHct(coords, env) {
    // Use Newton's method to try and converge as quick as possible or
    // converge as close as we can. While the requested precision is achieved
    // most of the time, it may not always be achievable. Especially past the
    // visible spectrum, the algorithm will likely struggle to get the same
    // precision. If, for whatever reason, we cannot achieve the accuracy we
    // seek in the allotted iterations, just return the closest we were able to
    // get.
    let [h, c, t] = coords;
    let xyz = [];
    let j = 0;
    // Shortcut out for black
    if (t === 0) return [
        0.0,
        0.0,
        0.0
    ];
    // Calculate the Y we need to target
    let y = fromLstar(t);
    // A better initial guess yields better results. Polynomials come from
    // curve fitting the T vs J response.
    if (t > 0) j = 0.00379058511492914 * t ** 2 + 0.608983189401032 * t + 0.9155088574762233;
    else j = 9.514440756550361e-06 * t ** 2 + 0.08693057439788597 * t - 21.928975842194614;
    // Threshold of how close is close enough, and max number of attempts.
    // More precision and more attempts means more time spent iterating. Higher
    // required precision gives more accuracy but also increases the chance of
    // not hitting the goal. 2e-12 allows us to convert round trip with
    // reasonable accuracy of six decimal places or more.
    const threshold = 2e-12;
    const max_attempts = 15;
    let attempt = 0;
    let last = Infinity;
    // Try to find a J such that the returned y matches the returned y of the L*
    while(attempt <= max_attempts){
        xyz = fromCam16({
            J: j,
            C: c,
            h: h
        }, env);
        // If we are within range, return XYZ
        // If we are closer than last time, save the values
        const delta = Math.abs(xyz[1] - y);
        if (delta < last) {
            if (delta <= threshold) return xyz;
            last = delta;
        }
        // f(j_root) = (j ** (1 / 2)) * 0.1
        // f(j) = ((f(j_root) * 100) ** 2) / j - 1 = 0
        // f(j_root) = Y = y / 100
        // f(j) = (y ** 2) / j - 1
        // f'(j) = (2 * y) / j
        j = j - (xyz[1] - y) * j / (2 * xyz[1]);
        attempt += 1;
    }
    // We could not acquire the precision we desired,
    // return our closest attempt.
    return fromCam16({
        J: j,
        C: c,
        h: h
    }, env);
}
function toHct(xyz, env) {
    // Calculate HCT by taking the L* of CIE LCh D65 and CAM16 chroma and hue.
    const t = toLstar(xyz[1]);
    if (t === 0.0) return [
        0.0,
        0.0,
        0.0
    ];
    const cam16 = toCam16(xyz, viewingConditions);
    return [
        constrain(cam16.h),
        cam16.C,
        t
    ];
}
// Pre-calculate everything we can with the viewing conditions
const viewingConditions = environment(white$2, 200 / Math.PI * fromLstar(50.0), fromLstar(50.0) * 100, "average", false);
// https://material.io/blog/science-of-color-design
// This is not a port of the material-color-utilities,
// but instead implements the full color space as described,
// combining CAM16 JCh and Lab D65. This does not clamp conversion
// to HCT to specific chroma bands and provides support for wider
// gamuts than Google currently supports and does so at a greater
// precision (> 8 bits back to sRGB).
// This implementation comes from https://github.com/facelessuser/coloraide
// which is licensed under MIT.
var hct = new ColorSpace({
    id: "hct",
    name: "HCT",
    coords: {
        h: {
            refRange: [
                0,
                360
            ],
            type: "angle",
            name: "Hue"
        },
        c: {
            refRange: [
                0,
                145
            ],
            name: "Colorfulness"
        },
        t: {
            refRange: [
                0,
                100
            ],
            name: "Tone"
        }
    },
    base: xyz_d65,
    fromBase (xyz) {
        return toHct(xyz);
    },
    toBase (hct) {
        return fromHct(hct, viewingConditions);
    },
    formats: {
        color: {
            id: "--hct",
            coords: [
                "<number> | <angle>",
                "<percentage> | <number>",
                "<percentage> | <number>"
            ]
        }
    }
});
const deg2rad = Math.PI / 180;
const ucsCoeff = [
    1.00,
    0.007,
    0.0228
];
/**
* Convert HCT chroma and hue (CAM16 JMh colorfulness and hue) using UCS logic for a and b.
* @param {number[]} coords - HCT coordinates.
* @return {number[]}
*/ function convertUcsAb(coords) {
    // We want the distance between the actual color.
    // If chroma is negative, it will throw off our calculations.
    // Normally, converting back to the base and forward will correct it.
    // If we have a negative chroma after this, then we have a color that
    // cannot resolve to positive chroma.
    if (coords[1] < 0) coords = hct.fromBase(hct.toBase(coords));
    // Only in extreme cases (usually outside the visible spectrum)
    // can the input value for log become negative.
    // Avoid domain error by forcing a zero result via "max" if necessary.
    const M = Math.log(Math.max(1 + ucsCoeff[2] * coords[1] * viewingConditions.flRoot, 1.0)) / ucsCoeff[2];
    const hrad = coords[0] * deg2rad;
    const a = M * Math.cos(hrad);
    const b = M * Math.sin(hrad);
    return [
        coords[2],
        a,
        b
    ];
}
/**
* Color distance using HCT.
* @param {Color} color - Color to compare.
* @param {Color} sample - Color to compare.
* @return {number[]}
*/ function deltaEHCT(color, sample) {
    [color, sample] = getColor([
        color,
        sample
    ]);
    let [t1, a1, b1] = convertUcsAb(hct.from(color));
    let [t2, a2, b2] = convertUcsAb(hct.from(sample));
    // Use simple euclidean distance with a and b using UCS conversion
    // and LCh lightness (HCT tone).
    return Math.sqrt((t1 - t2) ** 2 + (a1 - a2) ** 2 + (b1 - b2) ** 2);
}
var deltaEMethods = {
    deltaE76,
    deltaECMC,
    deltaE2000,
    deltaEJz,
    deltaEITP,
    deltaEOK,
    deltaEHCT
};
/**
 * Calculate the epsilon to 2 degrees smaller than the specified JND.
 * @param {Number} jnd - The target "just noticeable difference".
 * @returns {Number}
 */ function calcEpsilon(jnd) {
    // Calculate the epsilon to 2 degrees smaller than the specified JND.
    const order = !jnd ? 0 : Math.floor(Math.log10(Math.abs(jnd)));
    // Limit to an arbitrary value to ensure value is never too small and causes infinite loops.
    return Math.max(parseFloat(`1e${order - 2}`), 1e-6);
}
const GMAPPRESET = {
    "hct": {
        method: "hct.c",
        jnd: 2,
        deltaEMethod: "hct",
        blackWhiteClamp: {}
    },
    "hct-tonal": {
        method: "hct.c",
        jnd: 0,
        deltaEMethod: "hct",
        blackWhiteClamp: {
            channel: "hct.t",
            min: 0,
            max: 100
        }
    }
};
/**
 * Force coordinates to be in gamut of a certain color space.
 * Mutates the color it is passed.
 * @param {Object|string} options object or spaceId string
 * @param {string} options.method - How to force into gamut.
 *        If "clip", coordinates are just clipped to their reference range.
 *        If "css", coordinates are reduced according to the CSS 4 Gamut Mapping Algorithm.
 *        If in the form [colorSpaceId].[coordName], that coordinate is reduced
 *        until the color is in gamut. Please note that this may produce nonsensical
 *        results for certain coordinates (e.g. hue) or infinite loops if reducing the coordinate never brings the color in gamut.
 * @param {ColorSpace|string} options.space - The space whose gamut we want to map to
 * @param {string} options.deltaEMethod - The delta E method to use while performing gamut mapping.
 *        If no method is specified, delta E 2000 is used.
 * @param {Number} options.jnd - The "just noticeable difference" to target.
 * @param {Object} options.blackWhiteClamp - Used to configure SDR black and clamping.
 *        "channel" indicates the "space.channel" to use for determining when to clamp.
 *        "min" indicates the lower limit for black clamping and "max" indicates the upper
 *        limit for white clamping.
 */ function toGamut(color, { method = defaults.gamut_mapping, space, deltaEMethod = "", jnd = 2, blackWhiteClamp = {} } = {}) {
    color = getColor(color);
    if (isString(arguments[1])) space = arguments[1];
    else if (!space) space = color.space;
    space = ColorSpace.get(space);
    // 3 spaces:
    // color.space: current color space
    // space: space whose gamut we are mapping to
    // mapSpace: space with the coord we're reducing
    if (inGamut(color, space, {
        epsilon: 0
    })) return color;
    let spaceColor;
    if (method === "css") spaceColor = toGamutCSS(color, {
        space
    });
    else {
        if (method !== "clip" && !inGamut(color, space)) {
            if (Object.prototype.hasOwnProperty.call(GMAPPRESET, method)) ({ method, jnd, deltaEMethod, blackWhiteClamp } = GMAPPRESET[method]);
            // Get the correct delta E method
            let de = deltaE2000;
            if (deltaEMethod !== "") {
                for(let m in deltaEMethods)if ("deltae" + deltaEMethod.toLowerCase() === m.toLowerCase()) {
                    de = deltaEMethods[m];
                    break;
                }
            }
            let clipped = toGamut(to(color, space), {
                method: "clip",
                space
            });
            if (de(color, clipped) > jnd) {
                // Clamp to SDR white and black if required
                if (Object.keys(blackWhiteClamp).length === 3) {
                    let channelMeta = ColorSpace.resolveCoord(blackWhiteClamp.channel);
                    let channel = get(to(color, channelMeta.space), channelMeta.id);
                    if (isNone(channel)) channel = 0;
                    if (channel >= blackWhiteClamp.max) return to({
                        space: "xyz-d65",
                        coords: WHITES["D65"]
                    }, color.space);
                    else if (channel <= blackWhiteClamp.min) return to({
                        space: "xyz-d65",
                        coords: [
                            0,
                            0,
                            0
                        ]
                    }, color.space);
                }
                // Reduce a coordinate of a certain color space until the color is in gamut
                let coordMeta = ColorSpace.resolveCoord(method);
                let mapSpace = coordMeta.space;
                let coordId = coordMeta.id;
                let mappedColor = to(color, mapSpace);
                // If we were already in the mapped color space, we need to resolve undefined channels
                mappedColor.coords.forEach((c, i)=>{
                    if (isNone(c)) mappedColor.coords[i] = 0;
                });
                let bounds = coordMeta.range || coordMeta.refRange;
                let min = bounds[0];
                let \u03B5 = calcEpsilon(jnd);
                let low = min;
                let high = get(mappedColor, coordId);
                while(high - low > \u03B5){
                    let clipped = clone(mappedColor);
                    clipped = toGamut(clipped, {
                        space,
                        method: "clip"
                    });
                    let deltaE = de(mappedColor, clipped);
                    if (deltaE - jnd < \u03B5) low = get(mappedColor, coordId);
                    else high = get(mappedColor, coordId);
                    set(mappedColor, coordId, (low + high) / 2);
                }
                spaceColor = to(mappedColor, space);
            } else spaceColor = clipped;
        } else spaceColor = to(color, space);
        if (method === "clip" // Dumb coord clipping
         || !inGamut(spaceColor, space, {
            epsilon: 0
        })) {
            let bounds = Object.values(space.coords).map((c)=>c.range || []);
            spaceColor.coords = spaceColor.coords.map((c, i)=>{
                let [min, max] = bounds[i];
                if (min !== undefined) c = Math.max(min, c);
                if (max !== undefined) c = Math.min(c, max);
                return c;
            });
        }
    }
    if (space !== color.space) spaceColor = to(spaceColor, color.space);
    color.coords = spaceColor.coords;
    return color;
}
toGamut.returns = "color";
// The reference colors to be used if lightness is out of the range 0-1 in the
// `Oklch` space. These are created in the `Oklab` space, as it is used by the
// DeltaEOK calculation, so it is guaranteed to be imported.
const COLORS = {
    WHITE: {
        space: OKLab,
        coords: [
            1,
            0,
            0
        ]
    },
    BLACK: {
        space: OKLab,
        coords: [
            0,
            0,
            0
        ]
    }
};
/**
 * Given a color `origin`, returns a new color that is in gamut using
 * the CSS Gamut Mapping Algorithm. If `space` is specified, it will be in gamut
 * in `space`, and returned in `space`. Otherwise, it will be in gamut and
 * returned in the color space of `origin`.
 * @param {Object} origin
 * @param {Object} options
 * @param {ColorSpace|string} options.space
 * @returns {Color}
 */ function toGamutCSS(origin, { space } = {}) {
    const JND = 0.02;
    const \u03B5 = 0.0001;
    origin = getColor(origin);
    if (!space) space = origin.space;
    space = ColorSpace.get(space);
    const oklchSpace = ColorSpace.get("oklch");
    if (space.isUnbounded) return to(origin, space);
    const origin_OKLCH = to(origin, oklchSpace);
    let L = origin_OKLCH.coords[0];
    // return media white or black, if lightness is out of range
    if (L >= 1) {
        const white = to(COLORS.WHITE, space);
        white.alpha = origin.alpha;
        return to(white, space);
    }
    if (L <= 0) {
        const black = to(COLORS.BLACK, space);
        black.alpha = origin.alpha;
        return to(black, space);
    }
    if (inGamut(origin_OKLCH, space, {
        epsilon: 0
    })) return to(origin_OKLCH, space);
    function clip(_color) {
        const destColor = to(_color, space);
        const spaceCoords = Object.values(space.coords);
        destColor.coords = destColor.coords.map((coord, index)=>{
            if ("range" in spaceCoords[index]) {
                const [min, max] = spaceCoords[index].range;
                return clamp(min, coord, max);
            }
            return coord;
        });
        return destColor;
    }
    let min = 0;
    let max = origin_OKLCH.coords[1];
    let min_inGamut = true;
    let current = clone(origin_OKLCH);
    let clipped = clip(current);
    let E = deltaEOK(clipped, current);
    if (E < JND) return clipped;
    while(max - min > \u03B5){
        const chroma = (min + max) / 2;
        current.coords[1] = chroma;
        if (min_inGamut && inGamut(current, space, {
            epsilon: 0
        })) min = chroma;
        else {
            clipped = clip(current);
            E = deltaEOK(clipped, current);
            if (E < JND) {
                if (JND - E < \u03B5) break;
                else {
                    min_inGamut = false;
                    min = chroma;
                }
            } else max = chroma;
        }
    }
    return clipped;
}
/**
 * Convert to color space and return a new color
 * @param {Object|string} space - Color space object or id
 * @param {Object} options
 * @param {boolean} options.inGamut - Whether to force resulting color in gamut
 * @returns {Color}
 */ function to(color, space, { inGamut } = {}) {
    color = getColor(color);
    space = ColorSpace.get(space);
    let coords = space.from(color);
    let ret = {
        space,
        coords,
        alpha: color.alpha
    };
    if (inGamut) ret = toGamut(ret, inGamut === true ? undefined : inGamut);
    return ret;
}
to.returns = "color";
/**
 * Generic toString() method, outputs a color(spaceId ...coords) function, a functional syntax, or custom formats defined by the color space
 * @param {Object} options
 * @param {number} options.precision - Significant digits
 * @param {boolean} options.inGamut - Adjust coordinates to fit in gamut first? [default: false]
 */ function serialize(color, { precision = defaults.precision, format = "default", inGamut: inGamut$1 = true, ...customOptions } = {}) {
    let ret;
    color = getColor(color);
    let formatId = format;
    format = color.space.getFormat(format) ?? color.space.getFormat("default") ?? ColorSpace.DEFAULT_FORMAT;
    // The assignment to coords and inGamut needs to stay in the order they are now
    // The order of the assignment was changed as a workaround for a bug in Next.js
    // See this issue for details: https://github.com/color-js/color.js/issues/260
    let coords = color.coords.slice(); // clone so we can manipulate it
    inGamut$1 ||= format.toGamut;
    if (inGamut$1 && !inGamut(color)) // FIXME what happens if the color contains NaNs?
    coords = toGamut(clone(color), inGamut$1 === true ? undefined : inGamut$1).coords;
    if (format.type === "custom") {
        customOptions.precision = precision;
        if (format.serialize) ret = format.serialize(coords, color.alpha, customOptions);
        else throw new TypeError(`format ${formatId} can only be used to parse colors, not for serialization`);
    } else {
        // Functional syntax
        let name = format.name || "color";
        if (format.serializeCoords) coords = format.serializeCoords(coords, precision);
        else if (precision !== null) coords = coords.map((c)=>{
            return serializeNumber(c, {
                precision
            });
        });
        let args = [
            ...coords
        ];
        if (name === "color") {
            // If output is a color() function, add colorspace id as first argument
            let cssId = format.id || format.ids?.[0] || color.space.id;
            args.unshift(cssId);
        }
        let alpha = color.alpha;
        if (precision !== null) alpha = serializeNumber(alpha, {
            precision
        });
        let strAlpha = color.alpha >= 1 || format.noAlpha ? "" : `${format.commas ? "," : " /"} ${alpha}`;
        ret = `${name}(${args.join(format.commas ? ", " : " ")}${strAlpha})`;
    }
    return ret;
}
// convert an array of linear-light rec2020 values to CIE XYZ
// using  D65 (no chromatic adaptation)
// http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
// 0 is actually calculated as  4.994106574466076e-17
const toXYZ_M$5 = [
    [
        0.6369580483012914,
        0.14461690358620832,
        0.1688809751641721
    ],
    [
        0.2627002120112671,
        0.6779980715188708,
        0.05930171646986196
    ],
    [
        0.000000000000000,
        0.028072693049087428,
        1.060985057710791
    ]
];
// from ITU-R BT.2124-0 Annex 2 p.3
const fromXYZ_M$5 = [
    [
        1.716651187971268,
        -0.355670783776392,
        -0.25336628137366
    ],
    [
        -0.666684351832489,
        1.616481236634939,
        0.0157685458139111
    ],
    [
        0.017639857445311,
        -0.042770613257809,
        0.942103121235474
    ]
];
var REC2020Linear = new RGBColorSpace({
    id: "rec2020-linear",
    cssId: "--rec2020-linear",
    name: "Linear REC.2020",
    white: "D65",
    toXYZ_M: toXYZ_M$5,
    fromXYZ_M: fromXYZ_M$5
});
// import sRGB from "./srgb.js";
const \u03B1 = 1.09929682680944;
const \u03B2 = 0.018053968510807;
var REC2020 = new RGBColorSpace({
    id: "rec2020",
    name: "REC.2020",
    base: REC2020Linear,
    // Non-linear transfer function from Rec. ITU-R BT.2020-2 table 4
    toBase (RGB) {
        return RGB.map(function(val) {
            if (val < \u03B2 * 4.5) return val / 4.5;
            return Math.pow((val + \u03B1 - 1) / \u03B1, 1 / 0.45);
        });
    },
    fromBase (RGB) {
        return RGB.map(function(val) {
            if (val >= \u03B2) return \u03B1 * Math.pow(val, 0.45) - (\u03B1 - 1);
            return 4.5 * val;
        });
    }
});
const toXYZ_M$4 = [
    [
        0.4865709486482162,
        0.26566769316909306,
        0.1982172852343625
    ],
    [
        0.2289745640697488,
        0.6917385218365064,
        0.079286914093745
    ],
    [
        0.0000000000000000,
        0.04511338185890264,
        1.043944368900976
    ]
];
const fromXYZ_M$4 = [
    [
        2.493496911941425,
        -0.9313836179191239,
        -0.40271078445071684
    ],
    [
        -0.8294889695615747,
        1.7626640603183463,
        0.023624685841943577
    ],
    [
        0.03584583024378447,
        -0.07617238926804182,
        0.9568845240076872
    ]
];
var P3Linear = new RGBColorSpace({
    id: "p3-linear",
    cssId: "--display-p3-linear",
    name: "Linear P3",
    white: "D65",
    toXYZ_M: toXYZ_M$4,
    fromXYZ_M: fromXYZ_M$4
});
// This is the linear-light version of sRGB
// as used for example in SVG filters
// or in Canvas
// This matrix was calculated directly from the RGB and white chromaticities
// when rounded to 8 decimal places, it agrees completely with the official matrix
// see https://github.com/w3c/csswg-drafts/issues/5922
const toXYZ_M$3 = [
    [
        0.41239079926595934,
        0.357584339383878,
        0.1804807884018343
    ],
    [
        0.21263900587151027,
        0.715168678767756,
        0.07219231536073371
    ],
    [
        0.01933081871559182,
        0.11919477979462598,
        0.9505321522496607
    ]
];
// This matrix is the inverse of the above;
// again it agrees with the official definition when rounded to 8 decimal places
const fromXYZ_M$3 = [
    [
        3.2409699419045226,
        -1.537383177570094,
        -0.4986107602930034
    ],
    [
        -0.9692436362808796,
        1.8759675015077202,
        0.04155505740717559
    ],
    [
        0.05563007969699366,
        -0.20397695888897652,
        1.0569715142428786
    ]
];
var sRGBLinear = new RGBColorSpace({
    id: "srgb-linear",
    name: "Linear sRGB",
    white: "D65",
    toXYZ_M: toXYZ_M$3,
    fromXYZ_M: fromXYZ_M$3
});
/* List of CSS color keywords
 * Note that this does not include currentColor, transparent,
 * or system colors
 */ // To produce: Visit https://www.w3.org/TR/css-color-4/#named-colors
// and run in the console:
// copy($$("tr", $(".named-color-table tbody")).map(tr => `"${tr.cells[2].textContent.trim()}": [${tr.cells[4].textContent.trim().split(/\s+/).map(c => c === "0"? "0" : c === "255"? "1" : c + " / 255").join(", ")}]`).join(",\n"))
var KEYWORDS = {
    "aliceblue": [
        240 / 255,
        248 / 255,
        1
    ],
    "antiquewhite": [
        250 / 255,
        235 / 255,
        215 / 255
    ],
    "aqua": [
        0,
        1,
        1
    ],
    "aquamarine": [
        127 / 255,
        1,
        212 / 255
    ],
    "azure": [
        240 / 255,
        1,
        1
    ],
    "beige": [
        245 / 255,
        245 / 255,
        220 / 255
    ],
    "bisque": [
        1,
        228 / 255,
        196 / 255
    ],
    "black": [
        0,
        0,
        0
    ],
    "blanchedalmond": [
        1,
        235 / 255,
        205 / 255
    ],
    "blue": [
        0,
        0,
        1
    ],
    "blueviolet": [
        138 / 255,
        43 / 255,
        226 / 255
    ],
    "brown": [
        165 / 255,
        42 / 255,
        42 / 255
    ],
    "burlywood": [
        222 / 255,
        184 / 255,
        135 / 255
    ],
    "cadetblue": [
        95 / 255,
        158 / 255,
        160 / 255
    ],
    "chartreuse": [
        127 / 255,
        1,
        0
    ],
    "chocolate": [
        210 / 255,
        105 / 255,
        30 / 255
    ],
    "coral": [
        1,
        127 / 255,
        80 / 255
    ],
    "cornflowerblue": [
        100 / 255,
        149 / 255,
        237 / 255
    ],
    "cornsilk": [
        1,
        248 / 255,
        220 / 255
    ],
    "crimson": [
        220 / 255,
        20 / 255,
        60 / 255
    ],
    "cyan": [
        0,
        1,
        1
    ],
    "darkblue": [
        0,
        0,
        139 / 255
    ],
    "darkcyan": [
        0,
        139 / 255,
        139 / 255
    ],
    "darkgoldenrod": [
        184 / 255,
        134 / 255,
        11 / 255
    ],
    "darkgray": [
        169 / 255,
        169 / 255,
        169 / 255
    ],
    "darkgreen": [
        0,
        100 / 255,
        0
    ],
    "darkgrey": [
        169 / 255,
        169 / 255,
        169 / 255
    ],
    "darkkhaki": [
        189 / 255,
        183 / 255,
        107 / 255
    ],
    "darkmagenta": [
        139 / 255,
        0,
        139 / 255
    ],
    "darkolivegreen": [
        85 / 255,
        107 / 255,
        47 / 255
    ],
    "darkorange": [
        1,
        140 / 255,
        0
    ],
    "darkorchid": [
        0.6,
        50 / 255,
        0.8
    ],
    "darkred": [
        139 / 255,
        0,
        0
    ],
    "darksalmon": [
        233 / 255,
        150 / 255,
        122 / 255
    ],
    "darkseagreen": [
        143 / 255,
        188 / 255,
        143 / 255
    ],
    "darkslateblue": [
        72 / 255,
        61 / 255,
        139 / 255
    ],
    "darkslategray": [
        47 / 255,
        79 / 255,
        79 / 255
    ],
    "darkslategrey": [
        47 / 255,
        79 / 255,
        79 / 255
    ],
    "darkturquoise": [
        0,
        206 / 255,
        209 / 255
    ],
    "darkviolet": [
        148 / 255,
        0,
        211 / 255
    ],
    "deeppink": [
        1,
        20 / 255,
        147 / 255
    ],
    "deepskyblue": [
        0,
        191 / 255,
        1
    ],
    "dimgray": [
        105 / 255,
        105 / 255,
        105 / 255
    ],
    "dimgrey": [
        105 / 255,
        105 / 255,
        105 / 255
    ],
    "dodgerblue": [
        30 / 255,
        144 / 255,
        1
    ],
    "firebrick": [
        178 / 255,
        34 / 255,
        34 / 255
    ],
    "floralwhite": [
        1,
        250 / 255,
        240 / 255
    ],
    "forestgreen": [
        34 / 255,
        139 / 255,
        34 / 255
    ],
    "fuchsia": [
        1,
        0,
        1
    ],
    "gainsboro": [
        220 / 255,
        220 / 255,
        220 / 255
    ],
    "ghostwhite": [
        248 / 255,
        248 / 255,
        1
    ],
    "gold": [
        1,
        215 / 255,
        0
    ],
    "goldenrod": [
        218 / 255,
        165 / 255,
        32 / 255
    ],
    "gray": [
        128 / 255,
        128 / 255,
        128 / 255
    ],
    "green": [
        0,
        128 / 255,
        0
    ],
    "greenyellow": [
        173 / 255,
        1,
        47 / 255
    ],
    "grey": [
        128 / 255,
        128 / 255,
        128 / 255
    ],
    "honeydew": [
        240 / 255,
        1,
        240 / 255
    ],
    "hotpink": [
        1,
        105 / 255,
        180 / 255
    ],
    "indianred": [
        205 / 255,
        92 / 255,
        92 / 255
    ],
    "indigo": [
        75 / 255,
        0,
        130 / 255
    ],
    "ivory": [
        1,
        1,
        240 / 255
    ],
    "khaki": [
        240 / 255,
        230 / 255,
        140 / 255
    ],
    "lavender": [
        230 / 255,
        230 / 255,
        250 / 255
    ],
    "lavenderblush": [
        1,
        240 / 255,
        245 / 255
    ],
    "lawngreen": [
        124 / 255,
        252 / 255,
        0
    ],
    "lemonchiffon": [
        1,
        250 / 255,
        205 / 255
    ],
    "lightblue": [
        173 / 255,
        216 / 255,
        230 / 255
    ],
    "lightcoral": [
        240 / 255,
        128 / 255,
        128 / 255
    ],
    "lightcyan": [
        224 / 255,
        1,
        1
    ],
    "lightgoldenrodyellow": [
        250 / 255,
        250 / 255,
        210 / 255
    ],
    "lightgray": [
        211 / 255,
        211 / 255,
        211 / 255
    ],
    "lightgreen": [
        144 / 255,
        238 / 255,
        144 / 255
    ],
    "lightgrey": [
        211 / 255,
        211 / 255,
        211 / 255
    ],
    "lightpink": [
        1,
        182 / 255,
        193 / 255
    ],
    "lightsalmon": [
        1,
        160 / 255,
        122 / 255
    ],
    "lightseagreen": [
        32 / 255,
        178 / 255,
        170 / 255
    ],
    "lightskyblue": [
        135 / 255,
        206 / 255,
        250 / 255
    ],
    "lightslategray": [
        119 / 255,
        136 / 255,
        0.6
    ],
    "lightslategrey": [
        119 / 255,
        136 / 255,
        0.6
    ],
    "lightsteelblue": [
        176 / 255,
        196 / 255,
        222 / 255
    ],
    "lightyellow": [
        1,
        1,
        224 / 255
    ],
    "lime": [
        0,
        1,
        0
    ],
    "limegreen": [
        50 / 255,
        205 / 255,
        50 / 255
    ],
    "linen": [
        250 / 255,
        240 / 255,
        230 / 255
    ],
    "magenta": [
        1,
        0,
        1
    ],
    "maroon": [
        128 / 255,
        0,
        0
    ],
    "mediumaquamarine": [
        0.4,
        205 / 255,
        170 / 255
    ],
    "mediumblue": [
        0,
        0,
        205 / 255
    ],
    "mediumorchid": [
        186 / 255,
        85 / 255,
        211 / 255
    ],
    "mediumpurple": [
        147 / 255,
        112 / 255,
        219 / 255
    ],
    "mediumseagreen": [
        60 / 255,
        179 / 255,
        113 / 255
    ],
    "mediumslateblue": [
        123 / 255,
        104 / 255,
        238 / 255
    ],
    "mediumspringgreen": [
        0,
        250 / 255,
        154 / 255
    ],
    "mediumturquoise": [
        72 / 255,
        209 / 255,
        0.8
    ],
    "mediumvioletred": [
        199 / 255,
        21 / 255,
        133 / 255
    ],
    "midnightblue": [
        25 / 255,
        25 / 255,
        112 / 255
    ],
    "mintcream": [
        245 / 255,
        1,
        250 / 255
    ],
    "mistyrose": [
        1,
        228 / 255,
        225 / 255
    ],
    "moccasin": [
        1,
        228 / 255,
        181 / 255
    ],
    "navajowhite": [
        1,
        222 / 255,
        173 / 255
    ],
    "navy": [
        0,
        0,
        128 / 255
    ],
    "oldlace": [
        253 / 255,
        245 / 255,
        230 / 255
    ],
    "olive": [
        128 / 255,
        128 / 255,
        0
    ],
    "olivedrab": [
        107 / 255,
        142 / 255,
        35 / 255
    ],
    "orange": [
        1,
        165 / 255,
        0
    ],
    "orangered": [
        1,
        69 / 255,
        0
    ],
    "orchid": [
        218 / 255,
        112 / 255,
        214 / 255
    ],
    "palegoldenrod": [
        238 / 255,
        232 / 255,
        170 / 255
    ],
    "palegreen": [
        152 / 255,
        251 / 255,
        152 / 255
    ],
    "paleturquoise": [
        175 / 255,
        238 / 255,
        238 / 255
    ],
    "palevioletred": [
        219 / 255,
        112 / 255,
        147 / 255
    ],
    "papayawhip": [
        1,
        239 / 255,
        213 / 255
    ],
    "peachpuff": [
        1,
        218 / 255,
        185 / 255
    ],
    "peru": [
        205 / 255,
        133 / 255,
        63 / 255
    ],
    "pink": [
        1,
        192 / 255,
        203 / 255
    ],
    "plum": [
        221 / 255,
        160 / 255,
        221 / 255
    ],
    "powderblue": [
        176 / 255,
        224 / 255,
        230 / 255
    ],
    "purple": [
        128 / 255,
        0,
        128 / 255
    ],
    "rebeccapurple": [
        0.4,
        0.2,
        0.6
    ],
    "red": [
        1,
        0,
        0
    ],
    "rosybrown": [
        188 / 255,
        143 / 255,
        143 / 255
    ],
    "royalblue": [
        65 / 255,
        105 / 255,
        225 / 255
    ],
    "saddlebrown": [
        139 / 255,
        69 / 255,
        19 / 255
    ],
    "salmon": [
        250 / 255,
        128 / 255,
        114 / 255
    ],
    "sandybrown": [
        244 / 255,
        164 / 255,
        96 / 255
    ],
    "seagreen": [
        46 / 255,
        139 / 255,
        87 / 255
    ],
    "seashell": [
        1,
        245 / 255,
        238 / 255
    ],
    "sienna": [
        160 / 255,
        82 / 255,
        45 / 255
    ],
    "silver": [
        192 / 255,
        192 / 255,
        192 / 255
    ],
    "skyblue": [
        135 / 255,
        206 / 255,
        235 / 255
    ],
    "slateblue": [
        106 / 255,
        90 / 255,
        205 / 255
    ],
    "slategray": [
        112 / 255,
        128 / 255,
        144 / 255
    ],
    "slategrey": [
        112 / 255,
        128 / 255,
        144 / 255
    ],
    "snow": [
        1,
        250 / 255,
        250 / 255
    ],
    "springgreen": [
        0,
        1,
        127 / 255
    ],
    "steelblue": [
        70 / 255,
        130 / 255,
        180 / 255
    ],
    "tan": [
        210 / 255,
        180 / 255,
        140 / 255
    ],
    "teal": [
        0,
        128 / 255,
        128 / 255
    ],
    "thistle": [
        216 / 255,
        191 / 255,
        216 / 255
    ],
    "tomato": [
        1,
        99 / 255,
        71 / 255
    ],
    "turquoise": [
        64 / 255,
        224 / 255,
        208 / 255
    ],
    "violet": [
        238 / 255,
        130 / 255,
        238 / 255
    ],
    "wheat": [
        245 / 255,
        222 / 255,
        179 / 255
    ],
    "white": [
        1,
        1,
        1
    ],
    "whitesmoke": [
        245 / 255,
        245 / 255,
        245 / 255
    ],
    "yellow": [
        1,
        1,
        0
    ],
    "yellowgreen": [
        154 / 255,
        205 / 255,
        50 / 255
    ]
};
let coordGrammar = Array(3).fill("<percentage> | <number>[0, 255]");
let coordGrammarNumber = Array(3).fill("<number>[0, 255]");
var sRGB = new RGBColorSpace({
    id: "srgb",
    name: "sRGB",
    base: sRGBLinear,
    fromBase: (rgb)=>{
        // convert an array of linear-light sRGB values in the range 0.0-1.0
        // to gamma corrected form
        // https://en.wikipedia.org/wiki/SRGB
        return rgb.map((val)=>{
            let sign = val < 0 ? -1 : 1;
            let abs = val * sign;
            if (abs > 0.0031308) return sign * (1.055 * abs ** (1 / 2.4) - 0.055);
            return 12.92 * val;
        });
    },
    toBase: (rgb)=>{
        // convert an array of sRGB values in the range 0.0 - 1.0
        // to linear light (un-companded) form.
        // https://en.wikipedia.org/wiki/SRGB
        return rgb.map((val)=>{
            let sign = val < 0 ? -1 : 1;
            let abs = val * sign;
            if (abs <= 0.04045) return val / 12.92;
            return sign * ((abs + 0.055) / 1.055) ** 2.4;
        });
    },
    formats: {
        "rgb": {
            coords: coordGrammar
        },
        "rgb_number": {
            name: "rgb",
            commas: true,
            coords: coordGrammarNumber,
            noAlpha: true
        },
        "color": {},
        "rgba": {
            coords: coordGrammar,
            commas: true,
            lastAlpha: true
        },
        "rgba_number": {
            name: "rgba",
            commas: true,
            coords: coordGrammarNumber
        },
        "hex": {
            type: "custom",
            toGamut: true,
            test: (str)=>/^#([a-f0-9]{3,4}){1,2}$/i.test(str),
            parse (str) {
                if (str.length <= 5) // #rgb or #rgba, duplicate digits
                str = str.replace(/[a-f0-9]/gi, "$&$&");
                let rgba = [];
                str.replace(/[a-f0-9]{2}/gi, (component)=>{
                    rgba.push(parseInt(component, 16) / 255);
                });
                return {
                    spaceId: "srgb",
                    coords: rgba.slice(0, 3),
                    alpha: rgba.slice(3)[0]
                };
            },
            serialize: (coords, alpha, { collapse = true } = {})=>{
                if (alpha < 1) coords.push(alpha);
                coords = coords.map((c)=>Math.round(c * 255));
                let collapsible = collapse && coords.every((c)=>c % 17 === 0);
                let hex = coords.map((c)=>{
                    if (collapsible) return (c / 17).toString(16);
                    return c.toString(16).padStart(2, "0");
                }).join("");
                return "#" + hex;
            }
        },
        "keyword": {
            type: "custom",
            test: (str)=>/^[a-z]+$/i.test(str),
            parse (str) {
                str = str.toLowerCase();
                let ret = {
                    spaceId: "srgb",
                    coords: null,
                    alpha: 1
                };
                if (str === "transparent") {
                    ret.coords = KEYWORDS.black;
                    ret.alpha = 0;
                } else ret.coords = KEYWORDS[str];
                if (ret.coords) return ret;
            }
        }
    }
});
var P3 = new RGBColorSpace({
    id: "p3",
    cssId: "display-p3",
    name: "P3",
    base: P3Linear,
    // Gamma encoding/decoding is the same as sRGB
    fromBase: sRGB.fromBase,
    toBase: sRGB.toBase
});
// Default space for CSS output. Code in Color.js makes this wider if there's a DOM available
defaults.display_space = sRGB;
let supportsNone;
if (typeof CSS !== "undefined" && CSS.supports) // Find widest supported color space for CSS
for (let space of [
    lab,
    REC2020,
    P3
]){
    let coords = space.getMinCoords();
    let color = {
        space,
        coords,
        alpha: 1
    };
    let str = serialize(color);
    if (CSS.supports("color", str)) {
        defaults.display_space = space;
        break;
    }
}
/**
 * Returns a serialization of the color that can actually be displayed in the browser.
 * If the default serialization can be displayed, it is returned.
 * Otherwise, the color is converted to Lab, REC2020, or P3, whichever is the widest supported.
 * In Node.js, this is basically equivalent to `serialize()` but returns a `String` object instead.
 *
 * @export
 * @param {{space, coords} | Color | string} color
 * @param {*} [options={}] Options to be passed to serialize()
 * @param {ColorSpace | string} [options.space = defaults.display_space] Color space to use for serialization if default is not supported
 * @returns {String} String object containing the serialized color with a color property containing the converted color (or the original, if no conversion was necessary)
 */ function display(color, { space = defaults.display_space, ...options } = {}) {
    let ret = serialize(color, options);
    if (typeof CSS === "undefined" || CSS.supports("color", ret) || !defaults.display_space) {
        ret = new String(ret);
        ret.color = color;
    } else {
        // If we're here, what we were about to output is not supported
        let fallbackColor = color;
        // First, check if the culprit is none values
        let hasNone = color.coords.some(isNone) || isNone(color.alpha);
        if (hasNone) // Does the browser support none values?
        {
            if (!(supportsNone ??= CSS.supports("color", "hsl(none 50% 50%)"))) {
                // Nope, try again without none
                fallbackColor = clone(color);
                fallbackColor.coords = fallbackColor.coords.map(skipNone);
                fallbackColor.alpha = skipNone(fallbackColor.alpha);
                ret = serialize(fallbackColor, options);
                if (CSS.supports("color", ret)) {
                    // We're done, now it's supported
                    ret = new String(ret);
                    ret.color = fallbackColor;
                    return ret;
                }
            }
        }
        // If we're here, the color function is not supported
        // Fall back to fallback space
        fallbackColor = to(fallbackColor, space);
        ret = new String(serialize(fallbackColor, options));
        ret.color = fallbackColor;
    }
    return ret;
}
function equals(color1, color2) {
    color1 = getColor(color1);
    color2 = getColor(color2);
    return color1.space === color2.space && color1.alpha === color2.alpha && color1.coords.every((c, i)=>c === color2.coords[i]);
}
/**
 * Relative luminance
 */ function getLuminance(color) {
    // Assume getColor() is called on color in get()
    return get(color, [
        xyz_d65,
        "y"
    ]);
}
function setLuminance(color, value) {
    // Assume getColor() is called on color in set()
    set(color, [
        xyz_d65,
        "y"
    ], value);
}
function register$2(Color) {
    Object.defineProperty(Color.prototype, "luminance", {
        get () {
            return getLuminance(this);
        },
        set (value) {
            setLuminance(this, value);
        }
    });
}
var luminance = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    getLuminance: getLuminance,
    register: register$2,
    setLuminance: setLuminance
});
// WCAG 2.0 contrast https://www.w3.org/TR/WCAG20-TECHS/G18.html
// Simple contrast, with fixed 5% viewing flare contribution
// Symmetric, does not matter which is foreground and which is background
function contrastWCAG21(color1, color2) {
    color1 = getColor(color1);
    color2 = getColor(color2);
    let Y1 = Math.max(getLuminance(color1), 0);
    let Y2 = Math.max(getLuminance(color2), 0);
    if (Y2 > Y1) [Y1, Y2] = [
        Y2,
        Y1
    ];
    return (Y1 + .05) / (Y2 + .05);
}
// APCA 0.0.98G
// https://github.com/Myndex/apca-w3
// see also https://github.com/w3c/silver/issues/643
// exponents
const normBG = 0.56;
const normTXT = 0.57;
const revTXT = 0.62;
const revBG = 0.65;
// clamps
const blkThrs = 0.022;
const blkClmp = 1.414;
const loClip = 0.1;
const deltaYmin = 0.0005;
// scalers
// see https://github.com/w3c/silver/issues/645
const scaleBoW = 1.14;
const loBoWoffset = 0.027;
const scaleWoB = 1.14;
function fclamp(Y) {
    if (Y >= blkThrs) return Y;
    return Y + (blkThrs - Y) ** blkClmp;
}
function linearize(val) {
    let sign = val < 0 ? -1 : 1;
    let abs = Math.abs(val);
    return sign * Math.pow(abs, 2.4);
}
// Not symmetric, requires a foreground (text) color, and a background color
function contrastAPCA(background, foreground) {
    foreground = getColor(foreground);
    background = getColor(background);
    let S;
    let C;
    let Sapc;
    // Myndex as-published, assumes sRGB inputs
    let R, G, B;
    foreground = to(foreground, "srgb");
    // Should these be clamped to in-gamut values?
    // Calculates "screen luminance" with non-standard simple gamma EOTF
    // weights should be from CSS Color 4, not the ones here which are via Myndex and copied from Lindbloom
    [R, G, B] = foreground.coords;
    let lumTxt = linearize(R) * 0.2126729 + linearize(G) * 0.7151522 + linearize(B) * 0.0721750;
    background = to(background, "srgb");
    [R, G, B] = background.coords;
    let lumBg = linearize(R) * 0.2126729 + linearize(G) * 0.7151522 + linearize(B) * 0.0721750;
    // toe clamping of very dark values to account for flare
    let Ytxt = fclamp(lumTxt);
    let Ybg = fclamp(lumBg);
    // are we "Black on White" (dark on light), or light on dark?
    let BoW = Ybg > Ytxt;
    // why is this a delta, when Y is not perceptually uniform?
    // Answer: it is a noise gate, see
    // https://github.com/LeaVerou/color.js/issues/208
    if (Math.abs(Ybg - Ytxt) < deltaYmin) C = 0;
    else if (BoW) {
        // dark text on light background
        S = Ybg ** normBG - Ytxt ** normTXT;
        C = S * scaleBoW;
    } else {
        // light text on dark background
        S = Ybg ** revBG - Ytxt ** revTXT;
        C = S * scaleWoB;
    }
    if (Math.abs(C) < loClip) Sapc = 0;
    else if (C > 0) // not clear whether Woffset is loBoWoffset or loWoBoffset
    // but they have the same value
    Sapc = C - loBoWoffset;
    else Sapc = C + loBoWoffset;
    return Sapc * 100;
}
// Michelson  luminance contrast
// the relation between the spread and the sum of the two luminances
// Symmetric, does not matter which is foreground and which is background
// No black level compensation for flare.
function contrastMichelson(color1, color2) {
    color1 = getColor(color1);
    color2 = getColor(color2);
    let Y1 = Math.max(getLuminance(color1), 0);
    let Y2 = Math.max(getLuminance(color2), 0);
    if (Y2 > Y1) [Y1, Y2] = [
        Y2,
        Y1
    ];
    let denom = Y1 + Y2;
    return denom === 0 ? 0 : (Y1 - Y2) / denom;
}
// Weber luminance contrast
// The difference between the two luminances divided by the lower luminance
// Symmetric, does not matter which is foreground and which is background
// No black level compensation for flare.
// the darkest sRGB color above black is #000001 and this produces
// a plain Weber contrast of ~45647.
// So, setting the divide-by-zero result at 50000 is a reasonable
// max clamp for the plain Weber
const max = 50000;
function contrastWeber(color1, color2) {
    color1 = getColor(color1);
    color2 = getColor(color2);
    let Y1 = Math.max(getLuminance(color1), 0);
    let Y2 = Math.max(getLuminance(color2), 0);
    if (Y2 > Y1) [Y1, Y2] = [
        Y2,
        Y1
    ];
    return Y2 === 0 ? max : (Y1 - Y2) / Y2;
}
// CIE Lightness difference, as used by Google Material Design
// Google HCT Tone is the same as CIE Lightness
// https://material.io/blog/science-of-color-design
function contrastLstar(color1, color2) {
    color1 = getColor(color1);
    color2 = getColor(color2);
    let L1 = get(color1, [
        lab,
        "l"
    ]);
    let L2 = get(color2, [
        lab,
        "l"
    ]);
    return Math.abs(L1 - L2);
}
// κ * ε  = 2^3 = 8
const \u03B5$3 = 216 / 24389; // 6^3/29^3 == (24/116)^3
const \u03B53 = 24 / 116;
const \u03BA$2 = 24389 / 27; // 29^3/3^3
let white$1 = WHITES.D65;
var lab_d65 = new ColorSpace({
    id: "lab-d65",
    name: "Lab D65",
    coords: {
        l: {
            refRange: [
                0,
                100
            ],
            name: "Lightness"
        },
        a: {
            refRange: [
                -125,
                125
            ]
        },
        b: {
            refRange: [
                -125,
                125
            ]
        }
    },
    // Assuming XYZ is relative to D65, convert to CIE Lab
    // from CIE standard, which now defines these as a rational fraction
    white: white$1,
    base: xyz_d65,
    // Convert D65-adapted XYZ to Lab
    //  CIE 15.3:2004 section 8.2.1.1
    fromBase (XYZ) {
        // compute xyz, which is XYZ scaled relative to reference white
        let xyz = XYZ.map((value, i)=>value / white$1[i]);
        // now compute f
        let f = xyz.map((value)=>value > \u03B5$3 ? Math.cbrt(value) : (\u03BA$2 * value + 16) / 116);
        return [
            116 * f[1] - 16,
            500 * (f[0] - f[1]),
            200 * (f[1] - f[2])
        ];
    },
    // Convert Lab to D65-adapted XYZ
    // Same result as CIE 15.3:2004 Appendix D although the derivation is different
    // http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
    toBase (Lab) {
        // compute f, starting with the luminance-related term
        let f = [];
        f[1] = (Lab[0] + 16) / 116;
        f[0] = Lab[1] / 500 + f[1];
        f[2] = f[1] - Lab[2] / 200;
        // compute xyz
        let xyz = [
            f[0] > \u03B53 ? Math.pow(f[0], 3) : (116 * f[0] - 16) / \u03BA$2,
            Lab[0] > 8 ? Math.pow((Lab[0] + 16) / 116, 3) : Lab[0] / \u03BA$2,
            f[2] > \u03B53 ? Math.pow(f[2], 3) : (116 * f[2] - 16) / \u03BA$2
        ];
        // Compute XYZ by scaling xyz by reference white
        return xyz.map((value, i)=>value * white$1[i]);
    },
    formats: {
        "lab-d65": {
            coords: [
                "<number> | <percentage>",
                "<number> | <percentage>[-1,1]",
                "<number> | <percentage>[-1,1]"
            ]
        }
    }
});
// Delta Phi Star perceptual lightness contrast
// See https://github.com/Myndex/deltaphistar
// The (difference between two Lstars each raised to phi) raised to (1/phi)
// Symmetric, does not matter which is foreground and which is background
const phi = Math.pow(5, 0.5) * 0.5 + 0.5; // Math.phi can be used if Math.js
function contrastDeltaPhi(color1, color2) {
    color1 = getColor(color1);
    color2 = getColor(color2);
    let Lstr1 = get(color1, [
        lab_d65,
        "l"
    ]);
    let Lstr2 = get(color2, [
        lab_d65,
        "l"
    ]);
    let deltaPhiStar = Math.abs(Math.pow(Lstr1, phi) - Math.pow(Lstr2, phi));
    let contrast = Math.pow(deltaPhiStar, 1 / phi) * Math.SQRT2 - 40;
    return contrast < 7.5 ? 0.0 : contrast;
}
var contrastMethods = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    contrastAPCA: contrastAPCA,
    contrastDeltaPhi: contrastDeltaPhi,
    contrastLstar: contrastLstar,
    contrastMichelson: contrastMichelson,
    contrastWCAG21: contrastWCAG21,
    contrastWeber: contrastWeber
});
function contrast(background, foreground, o = {}) {
    if (isString(o)) o = {
        algorithm: o
    };
    let { algorithm, ...rest } = o;
    if (!algorithm) {
        let algorithms = Object.keys(contrastMethods).map((a)=>a.replace(/^contrast/, "")).join(", ");
        throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${algorithms}`);
    }
    background = getColor(background);
    foreground = getColor(foreground);
    for(let a in contrastMethods){
        if ("contrast" + algorithm.toLowerCase() === a.toLowerCase()) return contrastMethods[a](background, foreground, rest);
    }
    throw new TypeError(`Unknown contrast algorithm: ${algorithm}`);
}
// Chromaticity coordinates
function uv(color) {
    // Assumes getAll() calls getColor() on color
    let [X, Y, Z] = getAll(color, xyz_d65);
    let denom = X + 15 * Y + 3 * Z;
    return [
        4 * X / denom,
        9 * Y / denom
    ];
}
function xy(color) {
    // Assumes getAll() calls getColor() on color
    let [X, Y, Z] = getAll(color, xyz_d65);
    let sum = X + Y + Z;
    return [
        X / sum,
        Y / sum
    ];
}
function register$1(Color) {
    // no setters, as lightness information is lost
    // when converting color to chromaticity
    Object.defineProperty(Color.prototype, "uv", {
        get () {
            return uv(this);
        }
    });
    Object.defineProperty(Color.prototype, "xy", {
        get () {
            return xy(this);
        }
    });
}
var chromaticity = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    register: register$1,
    uv: uv,
    xy: xy
});
function deltaE(c1, c2, o = {}) {
    if (isString(o)) o = {
        method: o
    };
    let { method = defaults.deltaE, ...rest } = o;
    for(let m in deltaEMethods){
        if ("deltae" + method.toLowerCase() === m.toLowerCase()) return deltaEMethods[m](c1, c2, rest);
    }
    throw new TypeError(`Unknown deltaE method: ${method}`);
}
function lighten(color, amount = .25) {
    let space = ColorSpace.get("oklch", "lch");
    let lightness = [
        space,
        "l"
    ];
    return set(color, lightness, (l)=>l * (1 + amount));
}
function darken(color, amount = .25) {
    let space = ColorSpace.get("oklch", "lch");
    let lightness = [
        space,
        "l"
    ];
    return set(color, lightness, (l)=>l * (1 - amount));
}
var variations = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    darken: darken,
    lighten: lighten
});
/**
 * Functions related to color interpolation
 */ /**
 * Return an intermediate color between two colors
 * Signatures: mix(c1, c2, p, options)
 *             mix(c1, c2, options)
 *             mix(color)
 * @param {Color | string} c1 The first color
 * @param {Color | string} [c2] The second color
 * @param {number} [p=.5] A 0-1 percentage where 0 is c1 and 1 is c2
 * @param {Object} [o={}]
 * @return {Color}
 */ function mix(c1, c2, p = .5, o = {}) {
    [c1, c2] = [
        getColor(c1),
        getColor(c2)
    ];
    if (type(p) === "object") [p, o] = [
        .5,
        p
    ];
    let r = range(c1, c2, o);
    return r(p);
}
/**
 *
 * @param {Color | string | Function} c1 The first color or a range
 * @param {Color | string} [c2] The second color if c1 is not a range
 * @param {Object} [options={}]
 * @return {Color[]}
 */ function steps(c1, c2, options = {}) {
    let colorRange;
    if (isRange(c1)) {
        // Tweaking existing range
        [colorRange, options] = [
            c1,
            c2
        ];
        [c1, c2] = colorRange.rangeArgs.colors;
    }
    let { maxDeltaE, deltaEMethod, steps: steps1 = 2, maxSteps = 1000, ...rangeOptions } = options;
    if (!colorRange) {
        [c1, c2] = [
            getColor(c1),
            getColor(c2)
        ];
        colorRange = range(c1, c2, rangeOptions);
    }
    let totalDelta = deltaE(c1, c2);
    let actualSteps = maxDeltaE > 0 ? Math.max(steps1, Math.ceil(totalDelta / maxDeltaE) + 1) : steps1;
    let ret = [];
    if (maxSteps !== undefined) actualSteps = Math.min(actualSteps, maxSteps);
    if (actualSteps === 1) ret = [
        {
            p: .5,
            color: colorRange(.5)
        }
    ];
    else {
        let step = 1 / (actualSteps - 1);
        ret = Array.from({
            length: actualSteps
        }, (_, i)=>{
            let p = i * step;
            return {
                p,
                color: colorRange(p)
            };
        });
    }
    if (maxDeltaE > 0) {
        // Iterate over all stops and find max deltaE
        let maxDelta = ret.reduce((acc, cur, i)=>{
            if (i === 0) return 0;
            let \u0394\u0395 = deltaE(cur.color, ret[i - 1].color, deltaEMethod);
            return Math.max(acc, \u0394\u0395);
        }, 0);
        while(maxDelta > maxDeltaE){
            // Insert intermediate stops and measure maxDelta again
            // We need to do this for all pairs, otherwise the midpoint shifts
            maxDelta = 0;
            for(let i = 1; i < ret.length && ret.length < maxSteps; i++){
                let prev = ret[i - 1];
                let cur = ret[i];
                let p = (cur.p + prev.p) / 2;
                let color = colorRange(p);
                maxDelta = Math.max(maxDelta, deltaE(color, prev.color), deltaE(color, cur.color));
                ret.splice(i, 0, {
                    p,
                    color: colorRange(p)
                });
                i++;
            }
        }
    }
    ret = ret.map((a)=>a.color);
    return ret;
}
/**
 * Interpolate to color2 and return a function that takes a 0-1 percentage
 * @param {Color | string | Function} color1 The first color or an existing range
 * @param {Color | string} [color2] If color1 is a color, this is the second color
 * @param {Object} [options={}]
 * @returns {Function} A function that takes a 0-1 percentage and returns a color
 */ function range(color1, color2, options = {}) {
    if (isRange(color1)) {
        // Tweaking existing range
        let [r, options] = [
            color1,
            color2
        ];
        return range(...r.rangeArgs.colors, {
            ...r.rangeArgs.options,
            ...options
        });
    }
    let { space, outputSpace, progression, premultiplied } = options;
    color1 = getColor(color1);
    color2 = getColor(color2);
    // Make sure we're working on copies of these colors
    color1 = clone(color1);
    color2 = clone(color2);
    let rangeArgs = {
        colors: [
            color1,
            color2
        ],
        options
    };
    if (space) space = ColorSpace.get(space);
    else space = ColorSpace.registry[defaults.interpolationSpace] || color1.space;
    outputSpace = outputSpace ? ColorSpace.get(outputSpace) : space;
    color1 = to(color1, space);
    color2 = to(color2, space);
    // Gamut map to avoid areas of flat color
    color1 = toGamut(color1);
    color2 = toGamut(color2);
    // Handle hue interpolation
    // See https://github.com/w3c/csswg-drafts/issues/4735#issuecomment-635741840
    if (space.coords.h && space.coords.h.type === "angle") {
        let arc = options.hue = options.hue || "shorter";
        let hue = [
            space,
            "h"
        ];
        let [\u03B81, \u03B82] = [
            get(color1, hue),
            get(color2, hue)
        ];
        // Undefined hues must be evaluated before hue fix-up to properly
        // calculate hue arcs between undefined and defined hues.
        // See https://github.com/w3c/csswg-drafts/issues/9436#issuecomment-1746957545
        if (isNaN(\u03B81) && !isNaN(\u03B82)) \u03B81 = \u03B82;
        else if (isNaN(\u03B82) && !isNaN(\u03B81)) \u03B82 = \u03B81;
        [\u03B81, \u03B82] = adjust(arc, [
            \u03B81,
            \u03B82
        ]);
        set(color1, hue, \u03B81);
        set(color2, hue, \u03B82);
    }
    if (premultiplied) {
        // not coping with polar spaces yet
        color1.coords = color1.coords.map((c)=>c * color1.alpha);
        color2.coords = color2.coords.map((c)=>c * color2.alpha);
    }
    return Object.assign((p)=>{
        p = progression ? progression(p) : p;
        let coords = color1.coords.map((start, i)=>{
            let end = color2.coords[i];
            return interpolate(start, end, p);
        });
        let alpha = interpolate(color1.alpha, color2.alpha, p);
        let ret = {
            space,
            coords,
            alpha
        };
        if (premultiplied) // undo premultiplication
        ret.coords = ret.coords.map((c)=>c / alpha);
        if (outputSpace !== space) ret = to(ret, outputSpace);
        return ret;
    }, {
        rangeArgs
    });
}
function isRange(val) {
    return type(val) === "function" && !!val.rangeArgs;
}
defaults.interpolationSpace = "lab";
function register(Color) {
    Color.defineFunction("mix", mix, {
        returns: "color"
    });
    Color.defineFunction("range", range, {
        returns: "function<color>"
    });
    Color.defineFunction("steps", steps, {
        returns: "array<color>"
    });
}
var interpolation = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    isRange: isRange,
    mix: mix,
    range: range,
    register: register,
    steps: steps
});
var HSL = new ColorSpace({
    id: "hsl",
    name: "HSL",
    coords: {
        h: {
            refRange: [
                0,
                360
            ],
            type: "angle",
            name: "Hue"
        },
        s: {
            range: [
                0,
                100
            ],
            name: "Saturation"
        },
        l: {
            range: [
                0,
                100
            ],
            name: "Lightness"
        }
    },
    base: sRGB,
    // Adapted from https://drafts.csswg.org/css-color-4/better-rgbToHsl.js
    fromBase: (rgb)=>{
        let max = Math.max(...rgb);
        let min = Math.min(...rgb);
        let [r, g, b] = rgb;
        let [h, s, l] = [
            NaN,
            0,
            (min + max) / 2
        ];
        let d = max - min;
        if (d !== 0) {
            s = l === 0 || l === 1 ? 0 : (max - l) / Math.min(l, 1 - l);
            switch(max){
                case r:
                    h = (g - b) / d + (g < b ? 6 : 0);
                    break;
                case g:
                    h = (b - r) / d + 2;
                    break;
                case b:
                    h = (r - g) / d + 4;
            }
            h = h * 60;
        }
        // Very out of gamut colors can produce negative saturation
        // If so, just rotate the hue by 180 and use a positive saturation
        // see https://github.com/w3c/csswg-drafts/issues/9222
        if (s < 0) {
            h += 180;
            s = Math.abs(s);
        }
        if (h >= 360) h -= 360;
        return [
            h,
            s * 100,
            l * 100
        ];
    },
    // Adapted from https://en.wikipedia.org/wiki/HSL_and_HSV#HSL_to_RGB_alternative
    toBase: (hsl)=>{
        let [h, s, l] = hsl;
        h = h % 360;
        if (h < 0) h += 360;
        s /= 100;
        l /= 100;
        function f(n) {
            let k = (n + h / 30) % 12;
            let a = s * Math.min(l, 1 - l);
            return l - a * Math.max(-1, Math.min(k - 3, 9 - k, 1));
        }
        return [
            f(0),
            f(8),
            f(4)
        ];
    },
    formats: {
        "hsl": {
            coords: [
                "<number> | <angle>",
                "<percentage>",
                "<percentage>"
            ]
        },
        "hsla": {
            coords: [
                "<number> | <angle>",
                "<percentage>",
                "<percentage>"
            ],
            commas: true,
            lastAlpha: true
        }
    }
});
// The Hue, Whiteness Blackness (HWB) colorspace
// See https://drafts.csswg.org/css-color-4/#the-hwb-notation
// Note that, like HSL, calculations are done directly on
// gamma-corrected sRGB values rather than linearising them first.
var HSV = new ColorSpace({
    id: "hsv",
    name: "HSV",
    coords: {
        h: {
            refRange: [
                0,
                360
            ],
            type: "angle",
            name: "Hue"
        },
        s: {
            range: [
                0,
                100
            ],
            name: "Saturation"
        },
        v: {
            range: [
                0,
                100
            ],
            name: "Value"
        }
    },
    base: HSL,
    // https://en.wikipedia.org/wiki/HSL_and_HSV#Interconversion
    fromBase (hsl) {
        let [h, s, l] = hsl;
        s /= 100;
        l /= 100;
        let v = l + s * Math.min(l, 1 - l);
        return [
            h,
            v === 0 ? 0 : 200 * (1 - l / v),
            100 * v
        ];
    },
    // https://en.wikipedia.org/wiki/HSL_and_HSV#Interconversion
    toBase (hsv) {
        let [h, s, v] = hsv;
        s /= 100;
        v /= 100;
        let l = v * (1 - s / 2);
        return [
            h,
            l === 0 || l === 1 ? 0 : (v - l) / Math.min(l, 1 - l) * 100,
            l * 100
        ];
    },
    formats: {
        color: {
            id: "--hsv",
            coords: [
                "<number> | <angle>",
                "<percentage> | <number>",
                "<percentage> | <number>"
            ]
        }
    }
});
// The Hue, Whiteness Blackness (HWB) colorspace
// See https://drafts.csswg.org/css-color-4/#the-hwb-notation
// Note that, like HSL, calculations are done directly on
// gamma-corrected sRGB values rather than linearising them first.
var hwb = new ColorSpace({
    id: "hwb",
    name: "HWB",
    coords: {
        h: {
            refRange: [
                0,
                360
            ],
            type: "angle",
            name: "Hue"
        },
        w: {
            range: [
                0,
                100
            ],
            name: "Whiteness"
        },
        b: {
            range: [
                0,
                100
            ],
            name: "Blackness"
        }
    },
    base: HSV,
    fromBase (hsv) {
        let [h, s, v] = hsv;
        return [
            h,
            v * (100 - s) / 100,
            100 - v
        ];
    },
    toBase (hwb) {
        let [h, w, b] = hwb;
        // Now convert percentages to [0..1]
        w /= 100;
        b /= 100;
        // Achromatic check (white plus black >= 1)
        let sum = w + b;
        if (sum >= 1) {
            let gray = w / sum;
            return [
                h,
                0,
                gray * 100
            ];
        }
        let v = 1 - b;
        let s = v === 0 ? 0 : 1 - w / v;
        return [
            h,
            s * 100,
            v * 100
        ];
    },
    formats: {
        "hwb": {
            coords: [
                "<number> | <angle>",
                "<percentage> | <number>",
                "<percentage> | <number>"
            ]
        }
    }
});
// convert an array of linear-light a98-rgb values to CIE XYZ
// http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
// has greater numerical precision than section 4.3.5.3 of
// https://www.adobe.com/digitalimag/pdfs/AdobeRGB1998.pdf
// but the values below were calculated from first principles
// from the chromaticity coordinates of R G B W
const toXYZ_M$2 = [
    [
        0.5766690429101305,
        0.1855582379065463,
        0.1882286462349947
    ],
    [
        0.29734497525053605,
        0.6273635662554661,
        0.07529145849399788
    ],
    [
        0.02703136138641234,
        0.07068885253582723,
        0.9913375368376388
    ]
];
const fromXYZ_M$2 = [
    [
        2.0415879038107465,
        -0.5650069742788596,
        -0.34473135077832956
    ],
    [
        -0.9692436362808795,
        1.8759675015077202,
        0.04155505740717557
    ],
    [
        0.013444280632031142,
        -0.11836239223101838,
        1.0151749943912054
    ]
];
var A98Linear = new RGBColorSpace({
    id: "a98rgb-linear",
    cssId: "--a98-rgb-linear",
    name: "Linear Adobe\xae 98 RGB compatible",
    white: "D65",
    toXYZ_M: toXYZ_M$2,
    fromXYZ_M: fromXYZ_M$2
});
var a98rgb = new RGBColorSpace({
    id: "a98rgb",
    cssId: "a98-rgb",
    name: "Adobe\xae 98 RGB compatible",
    base: A98Linear,
    toBase: (RGB)=>RGB.map((val)=>Math.pow(Math.abs(val), 563 / 256) * Math.sign(val)),
    fromBase: (RGB)=>RGB.map((val)=>Math.pow(Math.abs(val), 256 / 563) * Math.sign(val))
});
// convert an array of  prophoto-rgb values to CIE XYZ
// using  D50 (so no chromatic adaptation needed afterwards)
// matrix cannot be expressed in rational form, but is calculated to 64 bit accuracy
// see https://github.com/w3c/csswg-drafts/issues/7675
const toXYZ_M$1 = [
    [
        0.79776664490064230,
        0.13518129740053308,
        0.03134773412839220
    ],
    [
        0.28807482881940130,
        0.71183523424187300,
        0.00008993693872564
    ],
    [
        0.00000000000000000,
        0.00000000000000000,
        0.82510460251046020
    ]
];
const fromXYZ_M$1 = [
    [
        1.34578688164715830,
        -0.25557208737979464,
        -0.05110186497554526
    ],
    [
        -0.5446307051249019,
        1.50824774284514680,
        0.02052744743642139
    ],
    [
        0.00000000000000000,
        0.00000000000000000,
        1.21196754563894520
    ]
];
var ProPhotoLinear = new RGBColorSpace({
    id: "prophoto-linear",
    cssId: "--prophoto-rgb-linear",
    name: "Linear ProPhoto",
    white: "D50",
    base: XYZ_D50,
    toXYZ_M: toXYZ_M$1,
    fromXYZ_M: fromXYZ_M$1
});
const Et = 1 / 512;
const Et2 = 16 / 512;
var prophoto = new RGBColorSpace({
    id: "prophoto",
    cssId: "prophoto-rgb",
    name: "ProPhoto",
    base: ProPhotoLinear,
    toBase (RGB) {
        // Transfer curve is gamma 1.8 with a small linear portion
        return RGB.map((v)=>v < Et2 ? v / 16 : v ** 1.8);
    },
    fromBase (RGB) {
        return RGB.map((v)=>v >= Et ? v ** (1 / 1.8) : 16 * v);
    }
});
var oklch = new ColorSpace({
    id: "oklch",
    name: "Oklch",
    coords: {
        l: {
            refRange: [
                0,
                1
            ],
            name: "Lightness"
        },
        c: {
            refRange: [
                0,
                0.4
            ],
            name: "Chroma"
        },
        h: {
            refRange: [
                0,
                360
            ],
            type: "angle",
            name: "Hue"
        }
    },
    white: "D65",
    base: OKLab,
    fromBase (oklab) {
        // Convert to polar form
        let [L, a, b] = oklab;
        let h;
        const \u03B5 = 0.0002; // chromatic components much smaller than a,b
        if (Math.abs(a) < \u03B5 && Math.abs(b) < \u03B5) h = NaN;
        else h = Math.atan2(b, a) * 180 / Math.PI;
        return [
            L,
            Math.sqrt(a ** 2 + b ** 2),
            constrain(h)
        ];
    },
    // Convert from polar form
    toBase (oklch) {
        let [L, C, h] = oklch;
        let a, b;
        // check for NaN hue
        if (isNaN(h)) {
            a = 0;
            b = 0;
        } else {
            a = C * Math.cos(h * Math.PI / 180);
            b = C * Math.sin(h * Math.PI / 180);
        }
        return [
            L,
            a,
            b
        ];
    },
    formats: {
        "oklch": {
            coords: [
                "<percentage> | <number>",
                "<number> | <percentage>[0,1]",
                "<number> | <angle>"
            ]
        }
    }
});
let white = WHITES.D65;
const \u03B5$2 = 216 / 24389; // 6^3/29^3 == (24/116)^3
const \u03BA$1 = 24389 / 27; // 29^3/3^3
const [U_PRIME_WHITE, V_PRIME_WHITE] = uv({
    space: xyz_d65,
    coords: white
});
var Luv = new ColorSpace({
    id: "luv",
    name: "Luv",
    coords: {
        l: {
            refRange: [
                0,
                100
            ],
            name: "Lightness"
        },
        // Reference ranges from https://facelessuser.github.io/coloraide/colors/luv/
        u: {
            refRange: [
                -215,
                215
            ]
        },
        v: {
            refRange: [
                -215,
                215
            ]
        }
    },
    white: white,
    base: xyz_d65,
    // Convert D65-adapted XYZ to Luv
    // https://en.wikipedia.org/wiki/CIELUV#The_forward_transformation
    fromBase (XYZ) {
        let xyz = [
            skipNone(XYZ[0]),
            skipNone(XYZ[1]),
            skipNone(XYZ[2])
        ];
        let y = xyz[1];
        let [up, vp] = uv({
            space: xyz_d65,
            coords: xyz
        });
        // Protect against XYZ of [0, 0, 0]
        if (!Number.isFinite(up) || !Number.isFinite(vp)) return [
            0,
            0,
            0
        ];
        let L = y <= \u03B5$2 ? \u03BA$1 * y : 116 * Math.cbrt(y) - 16;
        return [
            L,
            13 * L * (up - U_PRIME_WHITE),
            13 * L * (vp - V_PRIME_WHITE)
        ];
    },
    // Convert Luv to D65-adapted XYZ
    // https://en.wikipedia.org/wiki/CIELUV#The_reverse_transformation
    toBase (Luv) {
        let [L, u, v] = Luv;
        // Protect against division by zero and NaN Lightness
        if (L === 0 || isNone(L)) return [
            0,
            0,
            0
        ];
        u = skipNone(u);
        v = skipNone(v);
        let up = u / (13 * L) + U_PRIME_WHITE;
        let vp = v / (13 * L) + V_PRIME_WHITE;
        let y = L <= 8 ? L / \u03BA$1 : Math.pow((L + 16) / 116, 3);
        return [
            y * (9 * up / (4 * vp)),
            y,
            y * ((12 - 3 * up - 20 * vp) / (4 * vp))
        ];
    },
    formats: {
        color: {
            id: "--luv",
            coords: [
                "<number> | <percentage>",
                "<number> | <percentage>[-1,1]",
                "<number> | <percentage>[-1,1]"
            ]
        }
    }
});
var LCHuv = new ColorSpace({
    id: "lchuv",
    name: "LChuv",
    coords: {
        l: {
            refRange: [
                0,
                100
            ],
            name: "Lightness"
        },
        c: {
            refRange: [
                0,
                220
            ],
            name: "Chroma"
        },
        h: {
            refRange: [
                0,
                360
            ],
            type: "angle",
            name: "Hue"
        }
    },
    base: Luv,
    fromBase (Luv) {
        // Convert to polar form
        let [L, u, v] = Luv;
        let hue;
        const \u03B5 = 0.02;
        if (Math.abs(u) < \u03B5 && Math.abs(v) < \u03B5) hue = NaN;
        else hue = Math.atan2(v, u) * 180 / Math.PI;
        return [
            L,
            Math.sqrt(u ** 2 + v ** 2),
            constrain(hue)
        ];
    },
    toBase (LCH) {
        // Convert from polar form
        let [Lightness, Chroma, Hue] = LCH;
        // Clamp any negative Chroma
        if (Chroma < 0) Chroma = 0;
        // Deal with NaN Hue
        if (isNaN(Hue)) Hue = 0;
        return [
            Lightness,
            Chroma * Math.cos(Hue * Math.PI / 180),
            Chroma * Math.sin(Hue * Math.PI / 180)
        ];
    },
    formats: {
        color: {
            id: "--lchuv",
            coords: [
                "<number> | <percentage>",
                "<number> | <percentage>",
                "<number> | <angle>"
            ]
        }
    }
});
/*
Adapted from: https://github.com/hsluv/hsluv-javascript/blob/14b49e6cf9a9137916096b8487a5372626b57ba4/src/hsluv.ts

Copyright (c) 2012-2022 Alexei Boronine

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/ const \u03B5$1 = 216 / 24389; // 6^3/29^3 == (24/116)^3
const \u03BA = 24389 / 27; // 29^3/3^3
const m_r0 = fromXYZ_M$3[0][0];
const m_r1 = fromXYZ_M$3[0][1];
const m_r2 = fromXYZ_M$3[0][2];
const m_g0 = fromXYZ_M$3[1][0];
const m_g1 = fromXYZ_M$3[1][1];
const m_g2 = fromXYZ_M$3[1][2];
const m_b0 = fromXYZ_M$3[2][0];
const m_b1 = fromXYZ_M$3[2][1];
const m_b2 = fromXYZ_M$3[2][2];
function distanceFromOriginAngle(slope, intercept, angle) {
    const d = intercept / (Math.sin(angle) - slope * Math.cos(angle));
    return d < 0 ? Infinity : d;
}
function calculateBoundingLines(l) {
    const sub1 = Math.pow(l + 16, 3) / 1560896;
    const sub2 = sub1 > \u03B5$1 ? sub1 : l / \u03BA;
    const s1r = sub2 * (284517 * m_r0 - 94839 * m_r2);
    const s2r = sub2 * (838422 * m_r2 + 769860 * m_r1 + 731718 * m_r0);
    const s3r = sub2 * (632260 * m_r2 - 126452 * m_r1);
    const s1g = sub2 * (284517 * m_g0 - 94839 * m_g2);
    const s2g = sub2 * (838422 * m_g2 + 769860 * m_g1 + 731718 * m_g0);
    const s3g = sub2 * (632260 * m_g2 - 126452 * m_g1);
    const s1b = sub2 * (284517 * m_b0 - 94839 * m_b2);
    const s2b = sub2 * (838422 * m_b2 + 769860 * m_b1 + 731718 * m_b0);
    const s3b = sub2 * (632260 * m_b2 - 126452 * m_b1);
    return {
        r0s: s1r / s3r,
        r0i: s2r * l / s3r,
        r1s: s1r / (s3r + 126452),
        r1i: (s2r - 769860) * l / (s3r + 126452),
        g0s: s1g / s3g,
        g0i: s2g * l / s3g,
        g1s: s1g / (s3g + 126452),
        g1i: (s2g - 769860) * l / (s3g + 126452),
        b0s: s1b / s3b,
        b0i: s2b * l / s3b,
        b1s: s1b / (s3b + 126452),
        b1i: (s2b - 769860) * l / (s3b + 126452)
    };
}
function calcMaxChromaHsluv(lines, h) {
    const hueRad = h / 360 * Math.PI * 2;
    const r0 = distanceFromOriginAngle(lines.r0s, lines.r0i, hueRad);
    const r1 = distanceFromOriginAngle(lines.r1s, lines.r1i, hueRad);
    const g0 = distanceFromOriginAngle(lines.g0s, lines.g0i, hueRad);
    const g1 = distanceFromOriginAngle(lines.g1s, lines.g1i, hueRad);
    const b0 = distanceFromOriginAngle(lines.b0s, lines.b0i, hueRad);
    const b1 = distanceFromOriginAngle(lines.b1s, lines.b1i, hueRad);
    return Math.min(r0, r1, g0, g1, b0, b1);
}
var hsluv = new ColorSpace({
    id: "hsluv",
    name: "HSLuv",
    coords: {
        h: {
            refRange: [
                0,
                360
            ],
            type: "angle",
            name: "Hue"
        },
        s: {
            range: [
                0,
                100
            ],
            name: "Saturation"
        },
        l: {
            range: [
                0,
                100
            ],
            name: "Lightness"
        }
    },
    base: LCHuv,
    gamutSpace: sRGB,
    // Convert LCHuv to HSLuv
    fromBase (lch) {
        let [l, c, h] = [
            skipNone(lch[0]),
            skipNone(lch[1]),
            skipNone(lch[2])
        ];
        let s;
        if (l > 99.9999999) {
            s = 0;
            l = 100;
        } else if (l < 0.00000001) {
            s = 0;
            l = 0;
        } else {
            let lines = calculateBoundingLines(l);
            let max = calcMaxChromaHsluv(lines, h);
            s = c / max * 100;
        }
        return [
            h,
            s,
            l
        ];
    },
    // Convert HSLuv to LCHuv
    toBase (hsl) {
        let [h, s, l] = [
            skipNone(hsl[0]),
            skipNone(hsl[1]),
            skipNone(hsl[2])
        ];
        let c;
        if (l > 99.9999999) {
            l = 100;
            c = 0;
        } else if (l < 0.00000001) {
            l = 0;
            c = 0;
        } else {
            let lines = calculateBoundingLines(l);
            let max = calcMaxChromaHsluv(lines, h);
            c = max / 100 * s;
        }
        return [
            l,
            c,
            h
        ];
    },
    formats: {
        color: {
            id: "--hsluv",
            coords: [
                "<number> | <angle>",
                "<percentage> | <number>",
                "<percentage> | <number>"
            ]
        }
    }
});
/*
Adapted from: https://github.com/hsluv/hsluv-javascript/blob/14b49e6cf9a9137916096b8487a5372626b57ba4/src/hsluv.ts

Copyright (c) 2012-2022 Alexei Boronine

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/ fromXYZ_M$3[0][0];
fromXYZ_M$3[0][1];
fromXYZ_M$3[0][2];
fromXYZ_M$3[1][0];
fromXYZ_M$3[1][1];
fromXYZ_M$3[1][2];
fromXYZ_M$3[2][0];
fromXYZ_M$3[2][1];
fromXYZ_M$3[2][2];
function distanceFromOrigin(slope, intercept) {
    return Math.abs(intercept) / Math.sqrt(Math.pow(slope, 2) + 1);
}
function calcMaxChromaHpluv(lines) {
    let r0 = distanceFromOrigin(lines.r0s, lines.r0i);
    let r1 = distanceFromOrigin(lines.r1s, lines.r1i);
    let g0 = distanceFromOrigin(lines.g0s, lines.g0i);
    let g1 = distanceFromOrigin(lines.g1s, lines.g1i);
    let b0 = distanceFromOrigin(lines.b0s, lines.b0i);
    let b1 = distanceFromOrigin(lines.b1s, lines.b1i);
    return Math.min(r0, r1, g0, g1, b0, b1);
}
var hpluv = new ColorSpace({
    id: "hpluv",
    name: "HPLuv",
    coords: {
        h: {
            refRange: [
                0,
                360
            ],
            type: "angle",
            name: "Hue"
        },
        s: {
            range: [
                0,
                100
            ],
            name: "Saturation"
        },
        l: {
            range: [
                0,
                100
            ],
            name: "Lightness"
        }
    },
    base: LCHuv,
    gamutSpace: "self",
    // Convert LCHuv to HPLuv
    fromBase (lch) {
        let [l, c, h] = [
            skipNone(lch[0]),
            skipNone(lch[1]),
            skipNone(lch[2])
        ];
        let s;
        if (l > 99.9999999) {
            s = 0;
            l = 100;
        } else if (l < 0.00000001) {
            s = 0;
            l = 0;
        } else {
            let lines = calculateBoundingLines(l);
            let max = calcMaxChromaHpluv(lines);
            s = c / max * 100;
        }
        return [
            h,
            s,
            l
        ];
    },
    // Convert HPLuv to LCHuv
    toBase (hsl) {
        let [h, s, l] = [
            skipNone(hsl[0]),
            skipNone(hsl[1]),
            skipNone(hsl[2])
        ];
        let c;
        if (l > 99.9999999) {
            l = 100;
            c = 0;
        } else if (l < 0.00000001) {
            l = 0;
            c = 0;
        } else {
            let lines = calculateBoundingLines(l);
            let max = calcMaxChromaHpluv(lines);
            c = max / 100 * s;
        }
        return [
            l,
            c,
            h
        ];
    },
    formats: {
        color: {
            id: "--hpluv",
            coords: [
                "<number> | <angle>",
                "<percentage> | <number>",
                "<percentage> | <number>"
            ]
        }
    }
});
const Yw = 203; // absolute luminance of media white, cd/m²
const n = 2610 / 2 ** 14;
const ninv = 2 ** 14 / 2610;
const m = 78.84375;
const minv = 32 / 2523;
const c1 = 0.8359375;
const c2 = 18.8515625;
const c3 = 18.6875;
var rec2100Pq = new RGBColorSpace({
    id: "rec2100pq",
    cssId: "rec2100-pq",
    name: "REC.2100-PQ",
    base: REC2020Linear,
    toBase (RGB) {
        // given PQ encoded component in range [0, 1]
        // return media-white relative linear-light
        return RGB.map(function(val) {
            let x = (Math.max(val ** minv - c1, 0) / (c2 - c3 * val ** minv)) ** ninv;
            return x * 10000 / Yw; // luminance relative to diffuse white, [0, 70 or so].
        });
    },
    fromBase (RGB) {
        // given media-white relative linear-light
        // returnPQ encoded component in range [0, 1]
        return RGB.map(function(val) {
            let x = Math.max(val * Yw / 10000, 0); // absolute luminance of peak white is 10,000 cd/m².
            let num = c1 + c2 * x ** n;
            let denom = 1 + c3 * x ** n;
            return (num / denom) ** m;
        });
    }
});
// FIXME see https://github.com/LeaVerou/color.js/issues/190
const a = 0.17883277;
const b = 0.28466892; // 1 - (4 * a)
const c = 0.55991073; // 0.5 - a * Math.log(4 *a)
const scale = 3.7743; // Place 18% grey at HLG 0.38, so media white at 0.75
var rec2100Hlg = new RGBColorSpace({
    id: "rec2100hlg",
    cssId: "rec2100-hlg",
    name: "REC.2100-HLG",
    referred: "scene",
    base: REC2020Linear,
    toBase (RGB) {
        // given HLG encoded component in range [0, 1]
        // return media-white relative linear-light
        return RGB.map(function(val) {
            // first the HLG EOTF
            // ITU-R BT.2390-10 p.30 section
            // 6.3 The hybrid log-gamma electro-optical transfer function (EOTF)
            // Then scale by 3 so media white is 1.0
            if (val <= 0.5) return val ** 2 / 3 * scale;
            return (Math.exp((val - c) / a) + b) / 12 * scale;
        });
    },
    fromBase (RGB) {
        // given media-white relative linear-light
        // where diffuse white is 1.0,
        // return HLG encoded component in range [0, 1]
        return RGB.map(function(val) {
            // first scale to put linear-light media white at 1/3
            val /= scale;
            // now the HLG OETF
            // ITU-R BT.2390-10 p.23
            // 6.1 The hybrid log-gamma opto-electronic transfer function (OETF)
            if (val <= 1 / 12) return Math.sqrt(3 * val);
            return a * Math.log(12 * val - b) + c;
        });
    }
});
const CATs = {};
hooks.add("chromatic-adaptation-start", (env)=>{
    if (env.options.method) env.M = adapt(env.W1, env.W2, env.options.method);
});
hooks.add("chromatic-adaptation-end", (env)=>{
    if (!env.M) env.M = adapt(env.W1, env.W2, env.options.method);
});
function defineCAT({ id, toCone_M, fromCone_M }) {
    // Use id, toCone_M, fromCone_M like variables
    CATs[id] = arguments[0];
}
function adapt(W1, W2, id = "Bradford") {
    // adapt from a source whitepoint or illuminant W1
    // to a destination whitepoint or illuminant W2,
    // using the given chromatic adaptation transform (CAT)
    // debugger;
    let method = CATs[id];
    let [\u03C1s, \u03B3s, \u03B2s] = multiplyMatrices(method.toCone_M, W1);
    let [\u03C1d, \u03B3d, \u03B2d] = multiplyMatrices(method.toCone_M, W2);
    // all practical illuminants have non-zero XYZ so no division by zero can occur below
    let scale = [
        [
            \u03C1d / \u03C1s,
            0,
            0
        ],
        [
            0,
            \u03B3d / \u03B3s,
            0
        ],
        [
            0,
            0,
            \u03B2d / \u03B2s
        ]
    ];
    // console.log({scale});
    let scaled_cone_M = multiplyMatrices(scale, method.toCone_M);
    let adapt_M = multiplyMatrices(method.fromCone_M, scaled_cone_M);
    // console.log({scaled_cone_M, adapt_M});
    return adapt_M;
}
defineCAT({
    id: "von Kries",
    toCone_M: [
        [
            0.4002400,
            0.7076000,
            -0.08081
        ],
        [
            -0.2263,
            1.1653200,
            0.0457000
        ],
        [
            0.0000000,
            0.0000000,
            0.9182200
        ]
    ],
    fromCone_M: [
        [
            1.8599363874558397,
            -1.1293816185800916,
            0.21989740959619328
        ],
        [
            0.3611914362417676,
            0.6388124632850422,
            -0.000006370596838649899
        ],
        [
            0,
            0,
            1.0890636230968613
        ]
    ]
});
defineCAT({
    id: "Bradford",
    // Convert an array of XYZ values in the range 0.0 - 1.0
    // to cone fundamentals
    toCone_M: [
        [
            0.8951000,
            0.2664000,
            -0.1614
        ],
        [
            -0.7502,
            1.7135000,
            0.0367000
        ],
        [
            0.0389000,
            -0.0685,
            1.0296000
        ]
    ],
    // and back
    fromCone_M: [
        [
            0.9869929054667121,
            -0.14705425642099013,
            0.15996265166373122
        ],
        [
            0.4323052697233945,
            0.5183602715367774,
            0.049291228212855594
        ],
        [
            -0.00852866457517732,
            0.04004282165408486,
            0.96848669578755
        ]
    ]
});
defineCAT({
    id: "CAT02",
    // with complete chromatic adaptation to W2, so D = 1.0
    toCone_M: [
        [
            0.7328000,
            0.4296000,
            -0.1624
        ],
        [
            -0.7036,
            1.6975000,
            0.0061000
        ],
        [
            0.0030000,
            0.0136000,
            0.9834000
        ]
    ],
    fromCone_M: [
        [
            1.0961238208355142,
            -0.27886900021828726,
            0.18274517938277307
        ],
        [
            0.4543690419753592,
            0.4735331543074117,
            0.07209780371722911
        ],
        [
            -0.009627608738429355,
            -0.00569803121611342,
            1.0153256399545427
        ]
    ]
});
defineCAT({
    id: "CAT16",
    toCone_M: [
        [
            0.401288,
            0.650173,
            -0.051461
        ],
        [
            -0.250268,
            1.204414,
            0.045854
        ],
        [
            -0.002079,
            0.048952,
            0.953127
        ]
    ],
    // the extra precision is needed to avoid roundtripping errors
    fromCone_M: [
        [
            1.862067855087233,
            -1.0112546305316845,
            0.14918677544445172
        ],
        [
            0.3875265432361372,
            0.6214474419314753,
            -0.008973985167612521
        ],
        [
            -0.01584149884933386,
            -0.03412293802851557,
            1.0499644368778496
        ]
    ]
});
Object.assign(WHITES, {
    // whitepoint values from ASTM E308-01 with 10nm spacing, 1931 2 degree observer
    // all normalized to Y (luminance) = 1.00000
    // Illuminant A is a tungsten electric light, giving a very warm, orange light.
    A: [
        1.09850,
        1.00000,
        0.35585
    ],
    // Illuminant C was an early approximation to daylight: illuminant A with a blue filter.
    C: [
        0.98074,
        1.000000,
        1.18232
    ],
    // The daylight series of illuminants simulate natural daylight.
    // The color temperature (in degrees Kelvin/100) ranges from
    // cool, overcast daylight (D50) to bright, direct sunlight (D65).
    D55: [
        0.95682,
        1.00000,
        0.92149
    ],
    D75: [
        0.94972,
        1.00000,
        1.22638
    ],
    // Equal-energy illuminant, used in two-stage CAT16
    E: [
        1.00000,
        1.00000,
        1.00000
    ],
    // The F series of illuminants represent fluorescent lights
    F2: [
        0.99186,
        1.00000,
        0.67393
    ],
    F7: [
        0.95041,
        1.00000,
        1.08747
    ],
    F11: [
        1.00962,
        1.00000,
        0.64350
    ]
});
// The ACES whitepoint
// see TB-2018-001 Derivation of the ACES White Point CIE Chromaticity Coordinates
// also https://github.com/ampas/aces-dev/blob/master/documents/python/TB-2018-001/aces_wp.py
// Similar to D60
WHITES.ACES = [
    0.32168 / 0.33767,
    1.00000,
    1.0088251843515859
];
// convert an array of linear-light ACEScc values to CIE XYZ
const toXYZ_M = [
    [
        0.6624541811085053,
        0.13400420645643313,
        0.1561876870049078
    ],
    [
        0.27222871678091454,
        0.6740817658111484,
        0.05368951740793705
    ],
    [
        -0.005574649490394108,
        0.004060733528982826,
        1.0103391003129971
    ]
];
const fromXYZ_M = [
    [
        1.6410233796943257,
        -0.32480329418479,
        -0.23642469523761225
    ],
    [
        -0.6636628587229829,
        1.6153315916573379,
        0.016756347685530137
    ],
    [
        0.011721894328375376,
        -0.008284441996237409,
        0.9883948585390215
    ]
];
var ACEScg = new RGBColorSpace({
    id: "acescg",
    cssId: "--acescg",
    name: "ACEScg",
    // ACEScg – A scene-referred, linear-light encoding of ACES Data
    // https://docs.acescentral.com/specifications/acescg/
    // uses the AP1 primaries, see section 4.3.1 Color primaries
    coords: {
        r: {
            range: [
                0,
                65504
            ],
            name: "Red"
        },
        g: {
            range: [
                0,
                65504
            ],
            name: "Green"
        },
        b: {
            range: [
                0,
                65504
            ],
            name: "Blue"
        }
    },
    referred: "scene",
    white: WHITES.ACES,
    toXYZ_M,
    fromXYZ_M
});
// export default Color;
const \u03B5 = 2 ** -16;
// the smallest value which, in the 32bit IEEE 754 float encoding,
// decodes as a non-negative value
const ACES_min_nonzero = -0.35828683;
// brightest encoded value, decodes to 65504
const ACES_cc_max = (Math.log2(65504) + 9.72) / 17.52; // 1.468
var acescc = new RGBColorSpace({
    id: "acescc",
    cssId: "--acescc",
    name: "ACEScc",
    // see S-2014-003 ACEScc – A Logarithmic Encoding of ACES Data
    // https://docs.acescentral.com/specifications/acescc/
    // uses the AP1 primaries, see section 4.3.1 Color primaries
    // Appendix A: "Very small ACES scene referred values below 7 1/4 stops
    // below 18% middle gray are encoded as negative ACEScc values.
    // These values should be preserved per the encoding in Section 4.4
    // so that all positive ACES values are maintained."
    coords: {
        r: {
            range: [
                ACES_min_nonzero,
                ACES_cc_max
            ],
            name: "Red"
        },
        g: {
            range: [
                ACES_min_nonzero,
                ACES_cc_max
            ],
            name: "Green"
        },
        b: {
            range: [
                ACES_min_nonzero,
                ACES_cc_max
            ],
            name: "Blue"
        }
    },
    referred: "scene",
    base: ACEScg,
    // from section 4.4.2 Decoding Function
    toBase (RGB) {
        const low = (9.72 - 15) / 17.52; // -0.3014
        return RGB.map(function(val) {
            if (val <= low) return (2 ** (val * 17.52 - 9.72) - \u03B5) * 2; // very low values, below -0.3014
            else if (val < ACES_cc_max) return 2 ** (val * 17.52 - 9.72);
            else return 65504;
        });
    },
    // Non-linear encoding function from S-2014-003, section 4.4.1 Encoding Function
    fromBase (RGB) {
        return RGB.map(function(val) {
            if (val <= 0) return (Math.log2(\u03B5) + 9.72) / 17.52; // -0.3584
            else if (val < \u03B5) return (Math.log2(\u03B5 + val * 0.5) + 9.72) / 17.52;
            else return (Math.log2(val) + 9.72) / 17.52;
        });
    }
});
var spaces = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    A98RGB: a98rgb,
    A98RGB_Linear: A98Linear,
    ACEScc: acescc,
    ACEScg: ACEScg,
    CAM16_JMh: cam16,
    HCT: hct,
    HPLuv: hpluv,
    HSL: HSL,
    HSLuv: hsluv,
    HSV: HSV,
    HWB: hwb,
    ICTCP: ictcp,
    JzCzHz: jzczhz,
    Jzazbz: Jzazbz,
    LCH: lch,
    LCHuv: LCHuv,
    Lab: lab,
    Lab_D65: lab_d65,
    Luv: Luv,
    OKLCH: oklch,
    OKLab: OKLab,
    P3: P3,
    P3_Linear: P3Linear,
    ProPhoto: prophoto,
    ProPhoto_Linear: ProPhotoLinear,
    REC_2020: REC2020,
    REC_2020_Linear: REC2020Linear,
    REC_2100_HLG: rec2100Hlg,
    REC_2100_PQ: rec2100Pq,
    XYZ_ABS_D65: XYZ_Abs_D65,
    XYZ_D50: XYZ_D50,
    XYZ_D65: xyz_d65,
    sRGB: sRGB,
    sRGB_Linear: sRGBLinear
});
/**
 * Class that represents a color
 */ class Color {
    /**
	 * Creates an instance of Color.
	 * Signatures:
	 * - `new Color(stringToParse)`
	 * - `new Color(otherColor)`
	 * - `new Color({space, coords, alpha})`
	 * - `new Color(space, coords, alpha)`
	 * - `new Color(spaceId, coords, alpha)`
	 */ constructor(...args){
        let color;
        if (args.length === 1) color = getColor(args[0]);
        let space, coords, alpha;
        if (color) {
            space = color.space || color.spaceId;
            coords = color.coords;
            alpha = color.alpha;
        } else // default signature new Color(ColorSpace, array [, alpha])
        [space, coords, alpha] = args;
        Object.defineProperty(this, "space", {
            value: ColorSpace.get(space),
            writable: false,
            enumerable: true,
            configurable: true
        });
        this.coords = coords ? coords.slice() : [
            0,
            0,
            0
        ];
        // Clamp alpha to [0, 1]
        this.alpha = alpha > 1 || alpha === undefined ? 1 : alpha < 0 ? 0 : alpha;
        // Convert "NaN" to NaN
        for(let i = 0; i < this.coords.length; i++)if (this.coords[i] === "NaN") this.coords[i] = NaN;
        // Define getters and setters for each coordinate
        for(let id in this.space.coords)Object.defineProperty(this, id, {
            get: ()=>this.get(id),
            set: (value)=>this.set(id, value)
        });
    }
    get spaceId() {
        return this.space.id;
    }
    clone() {
        return new Color(this.space, this.coords, this.alpha);
    }
    toJSON() {
        return {
            spaceId: this.spaceId,
            coords: this.coords,
            alpha: this.alpha
        };
    }
    display(...args) {
        let ret = display(this, ...args);
        // Convert color object to Color instance
        ret.color = new Color(ret.color);
        return ret;
    }
    /**
	 * Get a color from the argument passed
	 * Basically gets us the same result as new Color(color) but doesn't clone an existing color object
	 */ static get(color, ...args) {
        if (color instanceof Color) return color;
        return new Color(color, ...args);
    }
    static defineFunction(name, code, o = code) {
        let { instance = true, returns } = o;
        let func = function(...args) {
            let ret = code(...args);
            if (returns === "color") ret = Color.get(ret);
            else if (returns === "function<color>") {
                let f = ret;
                ret = function(...args) {
                    let ret = f(...args);
                    return Color.get(ret);
                };
                // Copy any function metadata
                Object.assign(ret, f);
            } else if (returns === "array<color>") ret = ret.map((c)=>Color.get(c));
            return ret;
        };
        if (!(name in Color)) Color[name] = func;
        if (instance) Color.prototype[name] = function(...args) {
            return func(this, ...args);
        };
    }
    static defineFunctions(o) {
        for(let name in o)Color.defineFunction(name, o[name], o[name]);
    }
    static extend(exports) {
        if (exports.register) exports.register(Color);
        else // No register method, just add the module's functions
        for(let name in exports)Color.defineFunction(name, exports[name]);
    }
}
Color.defineFunctions({
    get,
    getAll,
    set,
    setAll,
    to,
    equals,
    inGamut,
    toGamut,
    distance,
    toString: serialize
});
Object.assign(Color, {
    util,
    hooks,
    WHITES,
    Space: ColorSpace,
    spaces: ColorSpace.registry,
    parse,
    // Global defaults one may want to configure
    defaults
});
for (let key of Object.keys(spaces))ColorSpace.register(spaces[key]);
/**
 * This plugin defines getters and setters for color[spaceId]
 * e.g. color.lch on *any* color gives us the lch coords
 */ // Add space accessors to existing color spaces
for(let id in ColorSpace.registry)addSpaceAccessors(id, ColorSpace.registry[id]);
// Add space accessors to color spaces not yet created
hooks.add("colorspace-init-end", (space)=>{
    addSpaceAccessors(space.id, space);
    space.aliases?.forEach((alias)=>{
        addSpaceAccessors(alias, space);
    });
});
function addSpaceAccessors(id, space) {
    let propId = id.replace(/-/g, "_");
    Object.defineProperty(Color.prototype, propId, {
        // Convert coords to coords in another colorspace and return them
        // Source colorspace: this.spaceId
        // Target colorspace: id
        get () {
            let ret = this.getAll(id);
            if (typeof Proxy === "undefined") // If proxies are not supported, just return a static array
            return ret;
            // Enable color.spaceId.coordName syntax
            return new Proxy(ret, {
                has: (obj, property)=>{
                    try {
                        ColorSpace.resolveCoord([
                            space,
                            property
                        ]);
                        return true;
                    } catch (e) {}
                    return Reflect.has(obj, property);
                },
                get: (obj, property, receiver)=>{
                    if (property && typeof property !== "symbol" && !(property in obj)) {
                        let { index } = ColorSpace.resolveCoord([
                            space,
                            property
                        ]);
                        if (index >= 0) return obj[index];
                    }
                    return Reflect.get(obj, property, receiver);
                },
                set: (obj, property, value, receiver)=>{
                    if (property && typeof property !== "symbol" && !(property in obj) || property >= 0) {
                        let { index } = ColorSpace.resolveCoord([
                            space,
                            property
                        ]);
                        if (index >= 0) {
                            obj[index] = value;
                            // Update color.coords
                            this.setAll(id, obj);
                            return true;
                        }
                    }
                    return Reflect.set(obj, property, value, receiver);
                }
            });
        },
        // Convert coords in another colorspace to internal coords and set them
        // Target colorspace: this.spaceId
        // Source colorspace: id
        set (coords) {
            this.setAll(id, coords);
        },
        configurable: true,
        enumerable: true
    });
}
// Import all modules of Color.js
Color.extend(deltaEMethods);
Color.extend({
    deltaE
});
Object.assign(Color, {
    deltaEMethods
});
Color.extend(variations);
Color.extend({
    contrast
});
Color.extend(chromaticity);
Color.extend(luminance);
Color.extend(interpolation);
Color.extend(contrastMethods);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"M6Mpd":[function(require,module,exports,__globalThis) {
/* 
Calculation of scales and harmony palettes,
 based on selected primary and secondary colors 
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ScalesRow", ()=>ScalesRow);
parcelHelpers.export(exports, "HarmonicColorRow", ()=>HarmonicColorRow);
parcelHelpers.export(exports, "GeneralColorRow", ()=>GeneralColorRow);
parcelHelpers.export(exports, "IndicationRow", ()=>IndicationRow);
var _colorUtilsJs = require("./colorUtils.js");
var _uiManagerJs = require("./uiManager.js");
var _colorManagerJs = require("./colorManager.js");
class BaseColorRow {
    constructor(config){
        this.config = {
            steps: 5,
            interpolation: 'linear',
            lightnessEase: 'linear',
            chromaEase: 'linear',
            huePath: 'shorter',
            ...config
        };
        this.colors = [];
        this.sourceColor = null;
        this.containerId = null;
        this.contrastRatios = [];
        this.contrastMarkers = [];
    }
    getSwatchesAsJson() {
        const colors = this.colors.map((color, index)=>{
            const hexColor = color.to('srgb').toString({
                format: 'hex'
            });
            return {
                [`color${index + 1}`]: hexColor
            };
        });
        // Convert array of objects into a single object
        const result = colors.reduce((acc, curr)=>{
            return {
                ...acc,
                ...curr
            };
        }, {});
        return JSON.stringify(result, null, 2);
    }
    createLabelButtonContainer(label, isNeutral) {
        const labelButtonContainer = document.createElement('div');
        labelButtonContainer.className = 'label-button-container';
        labelButtonContainer.style.display = 'flex';
        labelButtonContainer.style.justifyContent = 'space-between';
        labelButtonContainer.style.alignItems = 'center';
        if (label) {
            const labelElement = document.createElement('h4');
            labelElement.textContent = label;
            labelElement.className = 'palette-label heading-04';
            labelButtonContainer.appendChild(labelElement);
        }
        if (isNeutral) {
            const chromaToggle = this.createChromaToggle();
            labelButtonContainer.appendChild(chromaToggle);
        }
        const copyJsonButton = document.createElement('button');
        copyJsonButton.textContent = 'Copy as JSON';
        copyJsonButton.className = 'copy-json-button';
        copyJsonButton.addEventListener('click', ()=>{
            const jsonData = this.getSwatchesAsJson();
            _uiManagerJs.copyToClipboard(jsonData, copyJsonButton);
        });
        labelButtonContainer.appendChild(copyJsonButton);
        return labelButtonContainer;
    }
    update(sourceColor) {
        if (!sourceColor || !sourceColor.lch) /*console.error('Invalid sourceColor in BaseColorRow.update:', sourceColor);*/ return;
        if (!this.sourceColor || !this.sourceColor.equals(sourceColor)) {
            this.sourceColor = sourceColor;
            this.config.startPoint = {
                ...this.config.startPoint,
                h: sourceColor.lch.h
            };
            this.config.endPoint = {
                ...this.config.endPoint,
                h: sourceColor.lch.h
            };
            this.generateColors();
            this.calculateContrastInfo();
            this.updateSwatches();
        }
    }
    createSwatches(containerIdPrefix = 'color-scale', label = '', isNeutral = false) {
        if (!this.containerId) this.containerId = `${containerIdPrefix}-${Math.random().toString(36).substr(2, 9)}`;
        else if (document.getElementById(this.containerId)) {
            /* console.warn(`Swatches already exist for ${this.containerId}. Skipping creation.`); */ this.updateSwatches();
            return;
        }
        const palettesSection = document.querySelector('.palettes-section');
        if (!palettesSection) /* console.error('Palettes section not found');*/ return;
        const labelButtonContainer = this.createLabelButtonContainer(label, isNeutral);
        palettesSection.appendChild(labelButtonContainer);
        const swatchContainer = document.createElement('div');
        swatchContainer.id = this.containerId;
        swatchContainer.className = 'color-swatch-container';
        palettesSection.appendChild(swatchContainer);
        this.updateSwatches();
    }
    generateScale() {
        const { steps, startPoint, endPoint, interpolation, includeSource, isNeutral, neutralChroma } = this.config;
        try {
            this.scale = _colorUtilsJs.generateColorScale(this.sourceColor, {
                steps,
                startPoint: {
                    l: startPoint.l,
                    c: isNeutral ? neutralChroma : this.sourceColor.lch.c,
                    h: this.sourceColor.lch.h
                },
                endPoint: {
                    l: endPoint.l,
                    c: isNeutral ? neutralChroma : this.sourceColor.lch.c,
                    h: this.sourceColor.lch.h
                },
                interpolation,
                includeSource,
                isNeutral,
                neutralChroma,
                lightnessEase: interpolation,
                chromaEase: 'constant',
                huePath: 'constant'
            });
            this.colors = this.scale; // Sync with BaseColorRow's colors
        } catch (error) {
        /*('Error generating scale:', error);*/ }
    }
    calculateContrastInfo() {
        if (!this.colors || this.colors.length === 0) return;
        const lightestColor = this.colors[this.colors.length - 1]; // Assume the last color is the lightest
        // Step 1: Calculate contrast ratios
        this.contrastRatios = this.colors.map((color)=>color.contrast(lightestColor, "WCAG21"));
        // Step 2: Reset contrast markers
        this.contrastMarkers = new Array(this.colors.length).fill('');
        // Step 3: Find indices for each level
        const aaaIndex = this.contrastRatios.findLastIndex((ratio)=>ratio >= 7);
        const aaIndex = this.contrastRatios.findLastIndex((ratio)=>ratio >= 4.5);
        const aa18Index = this.contrastRatios.findLastIndex((ratio)=>ratio >= 3);
        // Step 4: Assign markers, ensuring no overwrites
        if (aa18Index !== -1 && aa18Index !== aaIndex && aa18Index !== aaaIndex) this.contrastMarkers[aa18Index] = 'AA18';
        if (aaIndex !== -1 && aaIndex !== aaaIndex) this.contrastMarkers[aaIndex] = 'AA';
        if (aaaIndex !== -1) this.contrastMarkers[aaaIndex] = 'AAA';
    }
    updateSwatches() {
        if (!this.containerId || !this.colors) /* console.error(`Cannot update swatches: containerId or colors are missing`, this);*/ return;
        const container = document.getElementById(this.containerId);
        if (!container) /* console.warn('Container not found for marking swatches:', this.containerId);*/ return;
        container.innerHTML = ''; // Clear existing swatches
        this.colors.forEach((color, index)=>{
            if (!color.to || typeof color.to !== 'function') /* console.error(`Invalid color object at index ${index}:`, color);*/ return;
            const swatch = document.createElement('div');
            swatch.className = 'color-swatch';
            swatch.style.backgroundColor = color.to('srgb').toString({
                format: 'hex'
            });
            swatch.setAttribute('tabindex', '0');
            swatch.setAttribute('role', 'button');
            swatch.setAttribute('aria-label', `Copy color ${color.to('srgb').toString({
                format: 'hex'
            })}`);
            // Add hexadecimal value as text
            const hexValueContainer = document.createElement('div');
            hexValueContainer.className = 'hex-value-container';
            const contrastRatio = document.createElement('span');
            contrastRatio.className = 'contrast-ratio';
            contrastRatio.textContent = this.contrastRatios[index].toFixed(2);
            // Set text color based on background lightness
            const lightness = color.lch.l;
            contrastRatio.style.color = lightness > 50 ? 'black' : 'white';
            hexValueContainer.appendChild(contrastRatio);
            const hexValue = document.createElement('span');
            hexValue.className = 'hex-value';
            hexValue.textContent = color.to('srgb').toString({
                format: 'hex'
            });
            // Set text color based on background lightness
            hexValue.style.color = lightness > 50 ? 'black' : 'white';
            hexValueContainer.appendChild(hexValue);
            swatch.appendChild(hexValueContainer);
            // Add contrast markers
            if (this.contrastMarkers[index]) {
                const contrastMarkerContainer = document.createElement('div');
                contrastMarkerContainer.className = 'swatch__MarkerContainer';
                const contrastMarker = document.createElement('span');
                contrastMarker.className = 'swatch__Marker';
                contrastMarker.textContent = this.contrastMarkers[index];
                contrastMarker.setAttribute('data-level', this.contrastMarkers[index]);
                contrastMarker.style.color = lightness > 50 ? 'black' : 'white';
                contrastMarkerContainer.appendChild(contrastMarker);
                swatch.appendChild(contrastMarkerContainer);
            }
            // Add hover-click interactions with embedded SVGs
            const copyIcon = _uiManagerJs.createCopyIcon();
            copyIcon.style.color = lightness > 50 ? 'black' : 'white';
            swatch.appendChild(copyIcon);
            const checkIcon = _uiManagerJs.createCheckIcon();
            checkIcon.style.color = lightness > 50 ? 'black' : 'white';
            checkIcon.style.position = 'absolute';
            checkIcon.style.top = '50%';
            checkIcon.style.left = '50%';
            checkIcon.style.transform = 'translate(-50%, -50%)';
            swatch.appendChild(checkIcon);
            swatch.addEventListener('mouseover', ()=>{
                copyIcon.style.display = 'block';
            });
            swatch.addEventListener('mouseout', ()=>{
                copyIcon.style.display = 'none';
            });
            swatch.addEventListener('click', ()=>{
                navigator.clipboard.writeText(color.to('srgb').toString({
                    format: 'hex'
                }));
                copyIcon.style.display = 'none';
                checkIcon.style.display = 'block';
                setTimeout(()=>{
                    checkIcon.style.display = 'none';
                }, 1500);
            });
            // Add color ticker functionality
            _uiManagerJs.addColorTickerFunctionality(swatch);
            container.appendChild(swatch);
        });
    }
    interpolate(start, end, t, easing) {
        // Implement easing functions as needed
        return _colorUtilsJs.interpolate(start, end, t, easing);
    }
    markPrimarySecondaryColors() {
        const container = document.getElementById(this.containerId);
        if (!container) /* ('Container not found for marking swatches:', this.containerId); */ return;
        const swatches = container.querySelectorAll('.color-swatch');
        const sourceHex = this.sourceColor.to('srgb').toString({
            format: 'hex'
        });
        swatches.forEach((swatch, index)=>{
            swatch.classList.remove('swatch-marked');
            const currentColor = this.colors[index].to('srgb').toString({
                format: 'hex'
            });
            if (currentColor === sourceHex) swatch.classList.add('swatch-marked');
        });
    }
    createChromaToggle() {
        const toggleContainer = document.createElement('div');
        toggleContainer.className = 'toggle-comp neutral-chroma-toggle';
        toggleContainer.innerHTML = `
            <span id="chroma-toggle-label">| Chroma</span>
            <label class="switch">
                <input type="checkbox" id="chroma-toggle-checkbox" class="toggle-checkbox" 
                       ${this.config.neutralChroma > 0 ? 'checked' : ''}>
                <span class="slider round"></span>
            </label>
        `;
        const checkbox = toggleContainer.querySelector('input');
        checkbox.addEventListener('change', ()=>{
            this.config.neutralChroma = checkbox.checked ? 5 : 0;
            this.generateScale();
            this.calculateContrastInfo();
            this.updateSwatches();
        });
        return toggleContainer;
    }
}
class ScalesRow extends BaseColorRow {
    constructor(sourceColor, config = {}){
        super({
            steps: 7,
            startPoint: {
                l: 2,
                c: 0,
                h: sourceColor ? sourceColor.lch.h : 0
            },
            endPoint: {
                l: 95,
                c: 0,
                h: sourceColor ? sourceColor.lch.h : 0
            },
            interpolation: 'linear',
            includeSource: true,
            isNeutral: false,
            neutralChroma: 5,
            ...config
        });
        this.sourceColor = sourceColor; // Ensure sourceColor is set
        this.containerId = config.containerId || null; // Ensure containerId is set
        this.containerId;
        this.colors = this.generateColors(); // Ensure this method initializes colors
        !this.colors || this.colors.length;
        this.sourceColor;
    }
    generateColors() {
        const { steps, interpolation, lightnessEase, chromaEase, huePath } = this.config;
        if (!this.sourceColor || !this.sourceColor.lch) /*console.error('BaseColorRow: sourceColor is invalid for color generation');*/ return [];
        // Example linear interpolation logic for colors
        return new Array(steps).fill(null).map((_, i)=>{
            const t = i / (steps - 1);
            // Implement the interpolation logic here
            return this.sourceColor; // Replace with actual color interpolation logic
        });
    }
    update(primaryColor, secondaryColor) {
        // Assign the correct source color
        this.sourceColor = this.isPrimaryBased ? primaryColor : secondaryColor;
        if (!this.sourceColor || !this.sourceColor.lch) /*console.error(`Invalid sourceColor in ScalesRow.update (${this.isPrimaryBased ? 'Primary' : 'Secondary'}):`, this.sourceColor);*/ return;
        setTimeout(()=>{
            const srgbColors = this.colors.map((color)=>color.to('srgb'));
            (0, _uiManagerJs.createColorSwatches)(srgbColors, this.containerId, this.contrastRatios, this.contrastMarkers);
            this.markPrimarySecondaryColors();
        }, 0);
        // Update start and end points with the correct hue
        this.config.startPoint.h = this.sourceColor.lch.h;
        this.config.endPoint.h = this.sourceColor.lch.h;
        // Regenerate the scale and refresh swatches
        this.generateScale();
        this.calculateContrastInfo();
        this.updateSwatches();
    }
    generateScale() {
        const { steps, startPoint, endPoint, interpolation, includeSource, isNeutral, neutralChroma } = this.config;
        try {
            this.scale = _colorUtilsJs.generateColorScale(this.sourceColor, {
                steps,
                startPoint: {
                    l: startPoint.l,
                    c: isNeutral ? neutralChroma : this.sourceColor.lch.c,
                    h: this.sourceColor.lch.h
                },
                endPoint: {
                    l: endPoint.l,
                    c: isNeutral ? neutralChroma : this.sourceColor.lch.c,
                    h: this.sourceColor.lch.h
                },
                interpolation,
                includeSource,
                isNeutral,
                neutralChroma,
                lightnessEase: interpolation,
                chromaEase: 'constant',
                huePath: 'constant'
            });
            this.colors = this.scale; // Sync with BaseColorRow's colors
            // Initialize contrastRatios array with dummy values for testing
            this.contrastRatios = new Array(this.colors.length).fill(1.0); // Replace with actual contrast ratio calculation
        } catch (error) {
        /* console.error('Error generating scale:', error); */ }
    }
    createSwatches(containerIdPrefix = 'color-scale', label = '', isNeutral = false) {
        // Prevent duplicate creation by checking if the container already exists
        if (!this.containerId) this.containerId = `${containerIdPrefix}-${Math.random().toString(36).substr(2, 9)}`;
        else if (document.getElementById(this.containerId)) {
            /* console.warn(`Swatches already exist for ${this.containerId}. Skipping creation.`); */ this.updateSwatches(); // Update swatches instead of creating new ones
            return;
        }
        const palettesSection = document.querySelector('.palettes-section');
        if (!palettesSection) /*  console.error('Palettes section not found'); */ return;
        // Create swatches container
        const container = document.createElement('div');
        container.id = this.containerId;
        container.classList.add('color-swatch-container', 'scale-swatch-container');
        // Generate and update swatches
        this.updateSwatches();
    }
    static create(sourceColor, config = {}, label = 'Scale Row') {
        if (!sourceColor) /* console.warn('ScalesRow.create: sourceColor is undefined or null'); */ sourceColor = new _colorUtilsJs.Color('lch', [
            50,
            1,
            0
        ]); // Default color with non-zero chroma
        if (sourceColor.lch.c === 0) /* console.warn('Source color has zero chroma, adjusting'); */ sourceColor = new _colorUtilsJs.Color('lch', [
            sourceColor.lch.l,
            1,
            sourceColor.lch.h
        ]);
        const row = new ScalesRow(sourceColor, config);
        row.createSwatches('scalesrow', label, config.isNeutral);
        return row;
    }
    updateSwatches() {
        if (!this.containerId || !this.colors) {
            console.error(`Cannot update swatches: containerId or colors are missing`, this);
            return;
        }
        const container = document.getElementById(this.containerId);
        if (!container) /*console.warn('Container not found for marking swatches:', this.containerId);*/ return;
        container.innerHTML = ''; // Clear existing swatches
        this.colors.forEach((color, index)=>{
            if (!color.to || typeof color.to !== 'function') /* console.error(`Invalid color object at index ${index}:`, color); */ return;
            const swatch = document.createElement('div');
            swatch.className = 'color-swatch';
            swatch.style.backgroundColor = color.to('srgb').toString({
                format: 'hex'
            });
            swatch.setAttribute('tabindex', '0');
            swatch.setAttribute('role', 'button');
            swatch.setAttribute('aria-label', `Copy color ${color.to('srgb').toString({
                format: 'hex'
            })}`);
            // Add hexadecimal value as text
            const hexValueContainer = document.createElement('div');
            hexValueContainer.className = 'hex-value-container';
            const contrastRatio = document.createElement('span');
            contrastRatio.className = 'contrast-ratio';
            if (this.contrastRatios && this.contrastRatios[index] !== undefined) contrastRatio.textContent = this.contrastRatios[index].toFixed(2);
            else /*console.warn(`Contrast ratio is undefined at index ${index}`);*/ contrastRatio.textContent = 'N/A';
            // Set text color based on background lightness
            const lightness = color.lch.l;
            contrastRatio.style.color = lightness > 50 ? 'black' : 'white';
            hexValueContainer.appendChild(contrastRatio);
            const hexValue = document.createElement('span');
            hexValue.className = 'hex-value';
            hexValue.textContent = color.to('srgb').toString({
                format: 'hex'
            });
            // Set text color based on background lightness
            hexValue.style.color = lightness > 50 ? 'black' : 'white';
            hexValueContainer.appendChild(hexValue);
            swatch.appendChild(hexValueContainer);
            // Add contrast markers
            if (this.contrastMarkers && this.contrastMarkers[index]) {
                const contrastMarkerContainer = document.createElement('div');
                contrastMarkerContainer.className = 'swatch__MarkerContainer';
                const contrastMarker = document.createElement('span');
                contrastMarker.className = 'swatch__Marker';
                contrastMarker.textContent = this.contrastMarkers[index];
                contrastMarker.setAttribute('data-level', this.contrastMarkers[index]);
                contrastMarker.style.color = lightness > 50 ? 'black' : 'white';
                contrastMarkerContainer.appendChild(contrastMarker);
                swatch.appendChild(contrastMarkerContainer);
            }
            // Add hover-click interactions with embedded SVGs
            const copyIcon = _uiManagerJs.createCopyIcon();
            copyIcon.style.color = lightness > 50 ? 'black' : 'white';
            swatch.appendChild(copyIcon);
            const checkIcon = _uiManagerJs.createCheckIcon();
            checkIcon.style.color = lightness > 50 ? 'black' : 'white';
            checkIcon.style.position = 'absolute';
            checkIcon.style.top = '50%';
            checkIcon.style.left = '50%';
            checkIcon.style.transform = 'translate(-50%, -50%)';
            swatch.appendChild(checkIcon);
            swatch.addEventListener('mouseover', ()=>{
                copyIcon.style.display = 'block';
            });
            swatch.addEventListener('mouseout', ()=>{
                copyIcon.style.display = 'none';
            });
            swatch.addEventListener('click', ()=>{
                navigator.clipboard.writeText(color.to('srgb').toString({
                    format: 'hex'
                }));
                copyIcon.style.display = 'none';
                checkIcon.style.display = 'block';
                setTimeout(()=>{
                    checkIcon.style.display = 'none';
                }, 1500);
            });
            // Add color ticker functionality
            _uiManagerJs.addColorTickerFunctionality(swatch);
            container.appendChild(swatch);
        });
    }
    static createIndicationRow(color, type) {
        // Define base configuration
        const config = {
            steps: 3,
            interpolation: 'linear',
            includeSource: true,
            isNeutral: false
        };
        // Create a new color with the fixed hue for each type, but keeping input color's lightness and chroma
        let baseColor;
        switch(type){
            case 'alert':
                baseColor = new _colorUtilsJs.Color('lch', [
                    color.lch.l,
                    color.lch.c,
                    0
                ]); // Red
                break;
            case 'warning':
                baseColor = new _colorUtilsJs.Color('lch', [
                    color.lch.l,
                    color.lch.c,
                    45
                ]); // Yellow
                break;
            case 'success':
                baseColor = new _colorUtilsJs.Color('lch', [
                    color.lch.l,
                    color.lch.c,
                    120
                ]); // Green
                break;
            case 'info':
                baseColor = new _colorUtilsJs.Color('lch', [
                    color.lch.l,
                    color.lch.c,
                    210
                ]); // Blue
                break;
        }
        // Set start and end points using the baseColor
        config.startPoint = {
            l: baseColor.lch.l - 20,
            c: baseColor.lch.c,
            h: baseColor.lch.h
        };
        config.endPoint = {
            l: baseColor.lch.l + 20,
            c: baseColor.lch.c,
            h: baseColor.lch.h
        };
        const row = new ScalesRow(baseColor, config);
        row.createSwatches('indication-scale', `${type.charAt(0).toUpperCase() + type.slice(1)}`);
        return row;
    }
    getSwatchesAsJson() {
        // Get prefix from label or use default based on row type
        let prefix = 'scale';
        if (this.config.label) prefix = this.config.label.toLowerCase().replace(/\s+/g, '');
        else if (this.constructor.name === 'ScalesRow') prefix = 'primary';
        const colors = this.colors.map((color, index)=>{
            const hexColor = color.to('srgb').toString({
                format: 'hex'
            });
            return {
                [`${prefix}${(index + 1) * 100}`]: hexColor
            };
        });
        const result = colors.reduce((acc, curr)=>{
            return {
                ...acc,
                ...curr
            };
        }, {});
        return JSON.stringify(result, null, 2);
    }
}
class HarmonicColorRow extends BaseColorRow {
    constructor(primaryColor, secondaryColor, config = {}){
        super({
            steps: 6,
            interpolation: 'linear',
            lightnessEase: 'linear',
            chromaEase: 'linear',
            huePath: 'shorter',
            hueOrder: 'primary-first',
            ...config
        });
        this.primaryColor = primaryColor;
        this.secondaryColor = secondaryColor;
        this.tertiaryColor = null;
        this.colors = [];
        this.contrastRatios = [];
        this.containerId = null;
        this.generateColors();
    }
    generateColors() {
        const { steps, interpolation, lightnessEase, chromaEase, huePath } = this.config;
        this.colors = new Array(steps);
        const toHex = (color)=>color.to('srgb').toString({
                format: 'hex'
            });
        // Calculate hue difference
        let hue1 = this.primaryColor.lch.h;
        let hue2 = this.secondaryColor.lch.h;
        let hueDiff = (hue2 - hue1 + 360) % 360;
        if (huePath === 'full-circle') {
            // Full-circle logic
            for(let i = 0; i < steps; i++){
                let h = (360 * i / steps + hue1) % 360;
                let t = i / (steps - 1);
                let l = _colorUtilsJs.interpolate(this.primaryColor.lch.l, this.secondaryColor.lch.l, t, lightnessEase);
                let c = _colorUtilsJs.interpolate(this.primaryColor.lch.c, this.secondaryColor.lch.c, t, chromaEase);
                this.colors[i] = new _colorUtilsJs.Color("lch", [
                    l,
                    c,
                    h
                ]); // Store color objects instead of hex for later conversion
            }
            // Ensure primary and secondary colors are included
            const primaryIndex = 0;
            const secondaryIndex = Math.round(hueDiff / 360 * steps) % steps;
            this.colors[primaryIndex] = this.primaryColor;
            this.colors[secondaryIndex] = this.secondaryColor;
        } else {
            // Interpolations across shorter and longer paths of the hue circumference, between the primary and secondary colors
            let shorterPath, longerPath;
            if (hueDiff <= 180) {
                shorterPath = hueDiff;
                longerPath = hueDiff - 360;
            } else {
                shorterPath = hueDiff - 360;
                longerPath = hueDiff;
            }
            let selectedPath = huePath === 'shorter' ? shorterPath : longerPath;
            this.colors[0] = this.primaryColor;
            this.colors[steps - 1] = this.secondaryColor;
            for(let i = 1; i < steps - 1; i++){
                let t = i / (steps - 1);
                let h = (hue1 + selectedPath * t + 360) % 360;
                let l = _colorUtilsJs.interpolate(this.primaryColor.lch.l, this.secondaryColor.lch.l, t, lightnessEase);
                let c = _colorUtilsJs.interpolate(this.primaryColor.lch.c, this.secondaryColor.lch.c, t, chromaEase);
                this.colors[i] = new _colorUtilsJs.Color("lch", [
                    l,
                    c,
                    h
                ]); // Store color objects instead of hex for consistency
            }
        }
    }
    update(primaryColor, secondaryColor, tertiaryColor) {
        if (!primaryColor || !primaryColor.lch) /* console.error('Invalid primaryColor in HarmonicColorRow.update:', primaryColor); */ return;
        if (!secondaryColor || !secondaryColor.lch) /*  console.error('Invalid secondaryColor in HarmonicColorRow.update:', secondaryColor);*/ return;
        if (!tertiaryColor || !tertiaryColor.lch) /* console.error('Invalid tertiaryColor in HarmonicColorRow.update:', tertiaryColor); */ return;
        this.primaryColor = primaryColor;
        this.secondaryColor = secondaryColor;
        this.tertiaryColor = tertiaryColor;
        this.generateColors();
        this.calculateContrastInfo();
        this.updateSwatches();
    }
    updateSwatches() {
        const container = document.getElementById(this.containerId);
        if (!container) /* console.error('Container not found for harmony swatches'); */ return;
        // Clear existing swatches
        container.innerHTML = '';
        // Convert LCH to Hex and create swatches
        const srgbColors = this.colors.map((color)=>color.to('srgb').toString({
                format: 'hex'
            }));
        // Create swatches using the hex colors
        (0, _uiManagerJs.createColorSwatches)(srgbColors, this.containerId, this.contrastRatios);
    }
    createSwatches(containerIdPrefix = 'harmony-row', label = '') {
        if (!this.containerId) this.containerId = `${containerIdPrefix}-${Math.random().toString(36).substr(2, 9)}`;
        else if (document.getElementById(this.containerId)) {
            /*  console.warn(`Swatches already exist for ${this.containerId}. Skipping creation.`); */ this.updateSwatches();
            return;
        }
        const palettesSection = document.querySelector('.palettes-section');
        if (!palettesSection) /* console.error('Palettes section not found'); */ return;
        const container = document.createElement('div');
        container.id = this.containerId;
        container.classList.add('color-swatch-container', 'harmony-swatch-container');
        //palettesSection.appendChild(container);
        // Create swatches
        this.updateSwatches();
    }
    markPrimarySecondaryColors() {
        const container = document.getElementById(this.containerId);
        if (!container) /* ('Container not found:', this.containerId); */ return;
        const swatches = container.querySelectorAll('.color-swatch');
        const primaryHex = this.primaryColor.to('srgb').toString({
            format: "hex"
        });
        const secondaryHex = this.secondaryColor.to('srgb').toString({
            format: "hex"
        });
        swatches.forEach((swatch, index)=>{
            swatch.classList.remove('swatch-marked');
            const currentColor = this.colors[index];
            if (currentColor === primaryHex || currentColor === secondaryHex) swatch.classList.add('swatch-marked');
        });
    }
    getSwatchesAsJson() {
        // Get prefix from label, remove spaces and convert to camelCase
        let prefix = 'harmony';
        if (this.config.label) prefix = this.config.label.toLowerCase().replace(/\s+(.)/g, (match, char)=>char.toUpperCase()) // convert to camelCase
        .replace(/\s+/g, ''); // remove remaining spaces
        const colors = this.colors.map((color, index)=>{
            const hexColor = color.to('srgb').toString({
                format: 'hex'
            });
            return {
                [`${prefix}${(index + 1) * 100}`]: hexColor
            };
        });
        // Convert array of objects into a single object
        const result = colors.reduce((acc, curr)=>{
            return {
                ...acc,
                ...curr
            };
        }, {});
        return JSON.stringify(result, null, 2);
    }
    static create(primaryColor, secondaryColor, config = {}, label = 'Harmonic Color Row') {
        const row = new HarmonicColorRow(primaryColor, secondaryColor, config);
        row.createSwatches('harmonic-color-row', label);
        return row;
    }
}
class GeneralColorRow extends BaseColorRow {
    constructor(config = {}){
        super({
            steps: 6,
            interpolation: 'linear',
            keyColors: [],
            segCtrl: 'complementary',
            ...config
        });
        if (!Array.isArray(this.config.keyColors) || this.config.keyColors.length < 2) {
            console.error('GeneralColorRow: keyColors must be an array with at least two colors');
            return;
        }
        this.colors = this.generateColors();
        if (!this.colors || this.colors.length === 0) console.error('colors array is not initialized in GeneralColorRow constructor');
    }
    generateColors() {
        const { steps, interpolation, segCtrl } = this.config;
        if (!this.config.keyColors || this.config.keyColors.length < 2) {
            console.error('GeneralColorRow: keyColors must be an array with at least two colors');
            return [];
        }
        const keyColors = this.config.keyColors;
        const numKeyColors = keyColors.length;
        const colors = [];
        // Calculate the number of steps between each key color
        const segmentSteps = Math.floor((steps - numKeyColors) / (numKeyColors - 1));
        const remainderSteps = (steps - numKeyColors) % (numKeyColors - 1);
        console.log('Steps:', steps);
        console.log('Segment Steps:', segmentSteps);
        console.log('Remainder Steps:', remainderSteps);
        // Add the first key color
        colors.push(keyColors[0]);
        // Interpolate between key colors
        for(let i = 0; i < numKeyColors - 1; i++){
            const startColor = keyColors[i];
            const endColor = keyColors[i + 1];
            const currentSegmentSteps = segmentSteps + (i < remainderSteps ? 1 : 0);
            for(let j = 1; j <= currentSegmentSteps; j++){
                const t = j / (currentSegmentSteps + 1);
                const l = _colorUtilsJs.interpolate(startColor.lch.l, endColor.lch.l, t, interpolation);
                const c = _colorUtilsJs.interpolate(startColor.lch.c, endColor.lch.c, t, interpolation);
                const h = _colorUtilsJs.interpolate(startColor.lch.h, endColor.lch.h, t, interpolation);
                const interpolatedColor = new _colorUtilsJs.Color('lch', [
                    l,
                    c,
                    h
                ]);
                colors.push(interpolatedColor);
            }
            // Add the next key color
            colors.push(endColor);
        }
        console.log('Generated colors before adjustment:', colors);
        // Adjust the number of swatches to match the steps
        while(colors.length > steps)// Remove the last interpolated color to match the steps
        colors.splice(colors.length - 2, 1);
        console.log('Generated colors after adjustment:', colors);
        // Ensure colors are valid color objects and converted to the desired format
        return colors.map((color)=>{
            try {
                if (typeof color.to === 'function') return color.to('srgb');
                else throw new Error('Invalid color object');
            } catch (error) {
                console.error('Invalid color object:', color, error);
                return null;
            }
        }).filter((color)=>color !== null);
    }
    updateColors(keyColors) {
        console.log('Updating colors with keyColors:', keyColors);
        this.config.keyColors = keyColors;
        this.colors = this.generateColors();
        this.calculateContrastInfo();
        this.updateSwatches();
    }
    update(colors) {
        console.log('Updating GeneralColorRow with:', colors);
        const { primaryColor, secondaryColor, tertiaryColor, quaternaryColor } = colors;
        if (!primaryColor || !primaryColor.lch) {
            console.error('Invalid primaryColor in GeneralColorRow.update:', primaryColor);
            return;
        }
        if (!secondaryColor || !secondaryColor.lch) {
            console.error('Invalid secondaryColor in GeneralColorRow.update:', secondaryColor);
            return;
        }
        if (!tertiaryColor || !tertiaryColor.lch) {
            console.error('Invalid tertiaryColor in GeneralColorRow.update:', tertiaryColor);
            return;
        }
        if (!quaternaryColor || !quaternaryColor.lch) {
            console.error('Invalid quaternaryColor in GeneralColorRow.update:', quaternaryColor);
            return;
        }
        this.config.keyColors = [
            tertiaryColor,
            primaryColor,
            secondaryColor,
            quaternaryColor
        ];
        console.log('general row updated key colors:', this.config.keyColors);
        this.colors = this.generateColors();
        console.log('general row updated colors:', this.colors);
        this.calculateContrastInfo();
        console.log('generalColorRow updateSwatches called!');
        this.updateSwatches();
        // Update CSS variables
        document.documentElement.style.setProperty('--color-primary', primaryColor.to('srgb').toString({
            format: 'hex'
        }));
        document.documentElement.style.setProperty('--color-secondary', secondaryColor.to('srgb').toString({
            format: 'hex'
        }));
        document.documentElement.style.setProperty('--color-tertiary', tertiaryColor.to('srgb').toString({
            format: 'hex'
        }));
        document.documentElement.style.setProperty('--color-quaternary', quaternaryColor.to('srgb').toString({
            format: 'hex'
        }));
    }
    createSwatches(containerIdPrefix = 'general-color-row', label = '') {
        console.log('generalColorRow createSwatches() started');
        if (!this.containerId) this.containerId = `${containerIdPrefix}-${Math.random().toString(36).substr(2, 9)}`;
        else if (document.getElementById(this.containerId)) {
            console.warn(`Swatches already exist for ${this.containerId}. Skipping creation.`);
            this.updateSwatches();
            return;
        }
        const palettesSection = document.querySelector('.palettes-section');
        if (!palettesSection) {
            console.error('Palettes section not found');
            return;
        }
        const container = document.createElement('div');
        container.id = this.containerId;
        container.classList.add('color-swatch-container', 'general-color-swatch-container');
        palettesSection.appendChild(container);
        const labelButtonContainer = document.createElement('div');
        labelButtonContainer.className = 'label-button-container';
        const labelElement = document.createElement('span');
        labelElement.className = 'row-label';
        labelElement.textContent = label;
        labelButtonContainer.appendChild(labelElement);
        container.appendChild(labelButtonContainer);
        this.updateSwatches();
    }
    updateSwatches() {
        const container = document.getElementById(this.containerId);
        if (!container) {
            console.error('Container not found for general color swatches');
            return;
        }
        container.innerHTML = '';
        const srgbColors = this.colors.map((color)=>color.to('srgb').toString({
                format: 'hex'
            }));
        (0, _uiManagerJs.createColorSwatches)(srgbColors, this.containerId, this.contrastRatios);
    }
}
class IndicationRow extends ScalesRow {
    constructor(color, type){
        // Define fixed hues for each type
        const hueMap = {
            alert: 15,
            warning: 75,
            success: 115,
            info: 255
        };
        // Create base color with fixed hue but keep input l,c
        const baseColor = new _colorUtilsJs.Color('lch', [
            color.lch.l,
            color.lch.c,
            hueMap[type]
        ]);
        // Configure the row using ScalesRow's constructor
        super(baseColor, {
            steps: 3,
            interpolation: 'linear',
            includeSource: true,
            startPoint: {
                l: baseColor.lch.l - 20,
                c: baseColor.lch.c,
                h: hueMap[type]
            },
            endPoint: {
                l: baseColor.lch.l + 20,
                c: baseColor.lch.c,
                h: hueMap[type]
            }
        });
        this.type = type;
        this.hueMap = hueMap;
        this.sourceColor = baseColor;
        // Generate the initial color scale
        this.generateScale();
    }
    generateScale() {
        // Generate a scale of 3 colors
        const { startPoint, endPoint } = this.config;
        this.colors = [
            new _colorUtilsJs.Color('lch', [
                startPoint.l,
                startPoint.c,
                startPoint.h
            ]),
            this.sourceColor,
            new _colorUtilsJs.Color('lch', [
                endPoint.l,
                endPoint.c,
                endPoint.h
            ])
        ];
    }
    createSwatches(containerId, label = '') {
        if (!this.containerId) this.containerId = containerId;
        // Use ScalesRow's createSwatches
        super.createSwatches(containerId, label);
        // Add our specific class to the container
        const container = document.getElementById(containerId);
        if (container) container.classList.add('indication-scale');
    }
    updateSwatches() {
        // Generate new colors before updating swatches
        this.generateScale();
        const container = document.getElementById(this.containerId);
        if (!container) {
            console.error(`Container not found for ${this.type} indication swatches`);
            return;
        }
        container.innerHTML = '';
        container.classList.add('indication-scale');
        // Create swatches without contrast ratios
        this.colors.forEach((color)=>{
            const swatch = document.createElement('button');
            swatch.className = 'color-swatch';
            swatch.type = 'button';
            const hexColor = color.to('srgb').toString({
                format: 'hex'
            });
            swatch.style.backgroundColor = hexColor;
            // Add ARIA attributes
            swatch.setAttribute('aria-label', `${this.type} color ${hexColor}. Click to copy`);
            swatch.setAttribute('role', 'button');
            swatch.setAttribute('tabindex', '0');
            // Calculate lightness for contrast
            const lightness = color.lch.l;
            // Add copy and check icons
            const copyIcon = _uiManagerJs.createCopyIcon();
            copyIcon.style.color = lightness > 50 ? 'black' : 'white';
            copyIcon.classList.add('copy-icon');
            copyIcon.setAttribute('aria-hidden', 'true');
            swatch.appendChild(copyIcon);
            const checkIcon = _uiManagerJs.createCheckIcon();
            checkIcon.style.color = lightness > 50 ? 'black' : 'white';
            checkIcon.classList.add('check-icon');
            checkIcon.setAttribute('aria-hidden', 'true');
            swatch.appendChild(checkIcon);
            // Add hex value display
            const hexValueContainer = document.createElement('div');
            hexValueContainer.className = 'hex-value-container';
            const hexValue = document.createElement('span');
            hexValue.className = 'hex-value';
            hexValue.style.color = lightness > 50 ? 'black' : 'white';
            hexValue.textContent = hexColor;
            hexValueContainer.appendChild(hexValue);
            swatch.appendChild(hexValueContainer);
            // Add interactions
            const handleCopy = ()=>{
                navigator.clipboard.writeText(hexColor);
                copyIcon.style.display = 'none';
                checkIcon.style.display = 'block';
                swatch.setAttribute('aria-label', `${this.type} color ${hexColor} copied to clipboard`);
                setTimeout(()=>{
                    checkIcon.style.display = 'none';
                    swatch.setAttribute('aria-label', `${this.type} color ${hexColor}. Click to copy`);
                }, 1500);
            };
            // Mouse interactions
            swatch.addEventListener('mouseover', ()=>{
                copyIcon.style.display = 'block';
            });
            swatch.addEventListener('mouseout', ()=>{
                copyIcon.style.display = 'none';
            });
            swatch.addEventListener('click', handleCopy);
            // Keyboard interactions
            swatch.addEventListener('keydown', (e)=>{
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleCopy();
                }
            });
            // Focus interactions
            swatch.addEventListener('focus', ()=>{
                copyIcon.style.display = 'block';
            });
            swatch.addEventListener('blur', ()=>{
                copyIcon.style.display = 'none';
            });
            container.appendChild(swatch);
        });
    }
    update(primaryColor, secondaryColor) {
        if (!primaryColor || !secondaryColor) return;
        const avgLightness = (primaryColor.lch.l + secondaryColor.lch.l) / 2;
        const maxChroma = Math.max(primaryColor.lch.c, secondaryColor.lch.c);
        // Update source color while maintaining fixed hue
        this.sourceColor = new _colorUtilsJs.Color('lch', [
            avgLightness,
            maxChroma,
            this.hueMap[this.type]
        ]);
        // Update start and end points
        this.config.startPoint = {
            l: avgLightness - 20,
            c: maxChroma,
            h: this.hueMap[this.type]
        };
        this.config.endPoint = {
            l: avgLightness + 20,
            c: maxChroma,
            h: this.hueMap[this.type]
        };
        this.generateScale();
        this.updateSwatches();
    }
}

},{"./colorUtils.js":"lY9Z0","./uiManager.js":"erjXR","./colorManager.js":"hS5Vd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"erjXR":[function(require,module,exports,__globalThis) {
/*
UI Functionalities and dynamic DOM creation (color palettes)
*/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "uiManager", ()=>uiManager);
/* Creating color swatches in the palettes */ parcelHelpers.export(exports, "createColorSwatches", ()=>createColorSwatches);
/* Copy-to-clipboard functionality to swatches: */ /* copy icon (on swatch hover/focus) */ parcelHelpers.export(exports, "createCopyIcon", ()=>createCopyIcon);
/* Check icon (on copy success) */ parcelHelpers.export(exports, "createCheckIcon", ()=>createCheckIcon);
parcelHelpers.export(exports, "addColorTickerFunctionality", ()=>addColorTickerFunctionality);
parcelHelpers.export(exports, "copyTimeouts", ()=>copyTimeouts);
parcelHelpers.export(exports, "copyToClipboard", ()=>copyToClipboard);
var _colorUtilsJs = require("./colorUtils.js");
const uiManager = {
    createColorSwatches,
    addSwatchInteractivity,
    showCopiedMessage,
    applyColorPaletteToCSS,
    addColorTickerFunctionality,
    copyToClipboard
};
function safeQuerySelector(selector) {
    const element = document.querySelector(selector);
    if (!element) {
        console.warn(`Element not found: ${selector}`);
        return null;
    }
    return element;
}
function createColorSwatches(colorScale, containerId, contrastRatios, contrastMarkers) {
    const container = document.getElementById(containerId);
    // Ensure the container exists before proceeding
    if (!container) {
        console.error(`Container with id ${containerId} not found while trying to create color swatches.`);
        return;
    }
    // Clear any existing content inside the container
    container.innerHTML = '';
    const isScaleRow = contrastRatios && contrastMarkers;
    // Iterate through the colors in the color scale
    colorScale.forEach((color, index)=>{
        // Guard against null/undefined colors
        if (!color) return;
        const swatch = document.createElement('div');
        let hexColor = color.toString({
            format: "hex"
        });
        swatch.className = 'color-swatch';
        swatch.style.backgroundColor = hexColor;
        swatch.tabIndex = 0;
        swatch.setAttribute('role', 'button');
        swatch.setAttribute('aria-label', `Copy color ${hexColor}`);
        // Calculate text color for proper contrast
        const textColor = _colorUtilsJs.getContrastTextColor(hexColor);
        swatch.style.color = textColor;
        const hexValueContainer = document.createElement('div');
        hexValueContainer.className = 'hex-value-container';
        // Add contrast ratio if applicable
        if (isScaleRow && contrastRatios && contrastRatios[index] !== undefined) {
            const ratio = contrastRatios[index];
            const contrastRatioElement = document.createElement('span');
            contrastRatioElement.className = 'contrast-ratio';
            contrastRatioElement.textContent = `${ratio.toFixed(2)}:1`;
            contrastRatioElement.style.color = textColor;
            hexValueContainer.appendChild(contrastRatioElement);
        }
        const hexValue = document.createElement('span');
        hexValue.textContent = hexColor;
        hexValue.className = 'hex-value';
        hexValue.id = `hex-value-${containerId}-${index}`;
        hexValue.style.color = textColor;
        hexValueContainer.appendChild(hexValue);
        // Add contrast markers if applicable
        if (isScaleRow && contrastMarkers && contrastMarkers[index]) {
            const markerContainer = document.createElement('div');
            markerContainer.className = 'swatch__MarkerContainer';
            const contrastMarker = document.createElement('span');
            contrastMarker.className = 'swatch__Marker';
            contrastMarker.textContent = contrastMarkers[index];
            contrastMarker.dataset.level = contrastMarkers[index];
            contrastMarker.style.color = textColor;
            markerContainer.appendChild(contrastMarker);
            swatch.appendChild(markerContainer);
        }
        // Create copy and check icons
        const copyIconElement = createCopyIcon();
        copyIconElement.style.color = textColor;
        const checkIconElement = createCheckIcon();
        checkIconElement.style.color = textColor;
        // Append icons and hex value container to swatch
        swatch.appendChild(copyIconElement);
        swatch.appendChild(checkIconElement);
        swatch.appendChild(hexValueContainer);
        // Interaction event listeners for copy functionality
        swatch.addEventListener('mouseenter', ()=>{
            copyIconElement.style.display = 'block';
        });
        swatch.addEventListener('mouseleave', ()=>{
            copyIconElement.style.display = 'none';
        });
        swatch.addEventListener('focus', ()=>{
            copyIconElement.style.display = 'block';
        });
        swatch.addEventListener('blur', ()=>{
            copyIconElement.style.display = 'none';
        });
        // Copy color on click or keyboard interaction
        swatch.addEventListener('click', ()=>{
            copyColor(hexColor, hexValue, copyIconElement, checkIconElement);
        });
        swatch.addEventListener('keydown', (event)=>{
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                copyColor(hexColor, hexValue, copyIconElement, checkIconElement);
            }
        });
        // Append the swatch to the container
        container.appendChild(swatch);
    });
    // Optional delay for processing
    setTimeout(()=>{
        const swatches = document.querySelectorAll(`#${containerId} .color-swatch`);
        swatches.forEach((swatch, index)=>{
        // Additional processing logic for swatches (if needed)
        });
    }, 100);
}
function createCopyIcon() {
    const icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    icon.setAttribute("width", "2rem");
    icon.setAttribute("height", "2rem");
    icon.setAttribute("viewBox", "0 0 24 24");
    icon.classList.add('copy-icon');
    icon.innerHTML = `
        <path class="copy-path" d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
        <path class="check-path" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" style="display: none;"/>
    `;
    return icon;
}
function createCheckIcon() {
    const checkIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    checkIcon.setAttribute("width", "2rem");
    checkIcon.setAttribute("height", "2rem");
    checkIcon.setAttribute("viewBox", "0 0 24 24");
    checkIcon.setAttribute("fill", "none");
    checkIcon.setAttribute("stroke", "currentColor");
    checkIcon.setAttribute("stroke-width", "2");
    checkIcon.setAttribute("stroke-linecap", "round");
    checkIcon.setAttribute("stroke-linejoin", "round");
    checkIcon.innerHTML = '<polyline points="20 6 9 17 4 12"></polyline>';
    checkIcon.classList.add('check-icon');
    checkIcon.style.display = 'none'; // Hide by default
    return checkIcon;
}
function addSwatchInteractivity(swatch, hexColor) {
    const hexValue = swatch.querySelector('.hex-value');
    const copyColorFeedback = ()=>{
        navigator.clipboard.writeText(hexColor).then(()=>{
            const originalContent = hexValue.innerHTML;
            hexValue.textContent = 'Copied!';
            setTimeout(()=>{
                hexValue.innerHTML = originalContent;
            }, 1500);
        });
    };
    swatch.addEventListener('click', copyColorFeedback);
    swatch.addEventListener('keydown', (event)=>{
        if (event.key === 'Enter') copyColorFeedback();
    });
}
/* Show 'copied!' instead of the hex value */ function showCopiedMessage(swatch) {
    const copiedMsg = document.createElement('div');
    copiedMsg.textContent = 'Copied!';
    copiedMsg.className = 'copied-message';
    swatch.appendChild(copiedMsg);
    setTimeout(()=>copiedMsg.remove(), 1500);
}
function applyColorPaletteToCSS(harmonicRow) {
    const cssVariables = harmonicRow.toCssVariables();
    Object.entries(cssVariables).forEach(([variable, value])=>{
        document.documentElement.style.setProperty(variable, value);
    });
}
function addColorTickerFunctionality(elementId) {
    const element = document.getElementById(elementId);
    if (!element) /*console.error(`Element with id ${elementId} not found`);*/ return;
    // Clear existing content
    element.innerHTML = '';
    /* create container for color value label */ const hexValueContainer = document.createElement('div');
    hexValueContainer.className = 'hex-value-container';
    /* create color value label */ const hexValue = document.createElement('span');
    hexValue.className = 'hex-value';
    /* Create icons for copy to clipboard interaction */ const copyIcon = createCopyIcon();
    copyIcon.style.display = 'none';
    const checkIcon = createCheckIcon();
    checkIcon.style.display = 'none';
    /* append all elements to the DOM */ hexValueContainer.appendChild(hexValue);
    hexValueContainer.appendChild(copyIcon);
    hexValueContainer.appendChild(checkIcon);
    element.appendChild(hexValueContainer);
    /* Function displaying the hex value */ function updateHexValueAndColor() {
        const bgColor = getComputedStyle(element).backgroundColor; /* Get current color from bg */ 
        const hexColor = _colorUtilsJs.rgbToHex(bgColor); /* convert it to hex */ 
        hexValue.textContent = hexColor;
    }
    // Initial update
    updateHexValueAndColor();
    // Add event listeners for hover and click interactions
    element.addEventListener('mouseover', ()=>{
        copyIcon.style.display = 'block';
    });
    element.addEventListener('mouseout', ()=>{
        copyIcon.style.display = 'none';
    });
    element.addEventListener('click', ()=>{
        navigator.clipboard.writeText(hexValue.textContent);
        copyIcon.style.display = 'none';
        checkIcon.style.display = 'block';
        setTimeout(()=>{
            checkIcon.style.display = 'none';
        }, 1500);
    });
}
const copyTimeouts = {};
/* Copy to clipboard function */ function copyColor(hexColor, hexValueElement, copyIcon) {
    navigator.clipboard.writeText(hexColor).then(()=>{
        const originalContent = hexValueElement.textContent;
        hexValueElement.textContent = 'Copied!';
        const copyPath = copyIcon.querySelector('.copy-path');
        const checkPath = copyIcon.querySelector('.check-path');
        // Hide copy icon, show check icon
        copyPath.style.display = 'none';
        checkPath.style.display = 'block';
        copyIcon.style.opacity = '1'; // Make sure the icon is visible
        setTimeout(()=>{
            hexValueElement.textContent = originalContent;
            // Show copy icon, hide check icon
            copyPath.style.display = 'block';
            checkPath.style.display = 'none';
            copyIcon.style.opacity = '0.33'; // Reset to hover state opacity
        }, 1000);
    }).catch((err)=>{
        console.error('Failed to copy: ', err);
    });
}
function copyToClipboard(text, button) {
    navigator.clipboard.writeText(text).then(()=>{
        const originalText = button.textContent;
        button.textContent = 'Copied to clipboard!';
        setTimeout(()=>{
            button.textContent = originalText;
        }, 1500); // Same timeout as swatch copy
    }).catch((err)=>console.error('Failed to copy text to clipboard: ', err));
}
document.addEventListener('DOMContentLoaded', function() {
    const colorSecondary = safeQuerySelector('#color-secondary');
    if (colorSecondary) {
        const copyIcon = colorSecondary.querySelector('.copy-icon');
        const checkIcon = colorSecondary.querySelector('.check-icon');
        if (copyIcon && checkIcon) {
            colorSecondary.addEventListener('mouseenter', function() {
                copyIcon.style.display = 'block';
            });
            colorSecondary.addEventListener('mouseleave', function() {
                if (checkIcon.style.display !== 'block') copyIcon.style.display = 'none';
            });
            colorSecondary.addEventListener('focus', function() {
                copyIcon.style.display = 'block';
            });
            colorSecondary.addEventListener('blur', function() {
                if (checkIcon.style.display !== 'block') copyIcon.style.display = 'none';
            });
        }
    }
});

},{"./colorUtils.js":"lY9Z0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["eELxh","igcvL"], "igcvL", "parcelRequire94c2")

//# sourceMappingURL=index.3d6c53f7.js.map
