module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"pages/index": 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "./common/base64/base64Decode.ts":
/*!***************************************!*\
  !*** ./common/base64/base64Decode.ts ***!
  \***************************************/
/*! exports provided: base64Decode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "base64Decode", function() { return base64Decode; });
const base64Decode = urlSafeBase64 => {
  const base64 = urlSafeBase64.replace(/-/g, "+").replace(/_/g, "/");

  if (true) {
    return Buffer.from(base64, "base64").toString("utf8");
  }

  try {
    const encoded = atob(base64).split("").map(char => char.charCodeAt(0).toString(16)).map(hex => `%${hex.padStart(2, "0").slice(-2)}`).join("");
    return decodeURIComponent(encoded);
  } catch {// return nothing
  }
};

/***/ }),

/***/ "./common/base64/base64Encode.ts":
/*!***************************************!*\
  !*** ./common/base64/base64Encode.ts ***!
  \***************************************/
/*! exports provided: base64Encode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "base64Encode", function() { return base64Encode; });
const base64Encode = utf8 => {
  if (true) {
    return Buffer.from(utf8, "utf8").toString("base64");
  }

  const encoded = encodeURIComponent(utf8);
  const escaped = encoded.replace(/%[\dA-F]{2}/g, hex => {
    return String.fromCharCode(Number.parseInt(hex.slice(1), 16));
  });
  return btoa(escaped);
};

/***/ }),

/***/ "./common/base64/base64UrlEncode.ts":
/*!******************************************!*\
  !*** ./common/base64/base64UrlEncode.ts ***!
  \******************************************/
/*! exports provided: base64UrlEncode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "base64UrlEncode", function() { return base64UrlEncode; });
/* harmony import */ var _base64Encode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base64Encode */ "./common/base64/base64Encode.ts");

const base64UrlEncode = utf8 => {
  return Object(_base64Encode__WEBPACK_IMPORTED_MODULE_0__["base64Encode"])(utf8).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
};

/***/ }),

/***/ "./common/dom/copyTextToClipboard.ts":
/*!*******************************************!*\
  !*** ./common/dom/copyTextToClipboard.ts ***!
  \*******************************************/
/*! exports provided: copyTextToClipboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyTextToClipboard", function() { return copyTextToClipboard; });
const copyTextToClipboard = text => {
  var _document$querySelect;

  const input = document.createElement("textarea");
  input.value = text;
  input.style.position = "fixed";
  input.style.opacity = "0";
  const root = (_document$querySelect = document.querySelector('[data-focus-lock-disabled="false"]')) !== null && _document$querySelect !== void 0 ? _document$querySelect : document.body;
  root.append(input);
  input.focus();
  input.select();
  document.execCommand("copy");
  input.remove();
};

/***/ }),

/***/ "./common/dom/useDragArea.ts":
/*!***********************************!*\
  !*** ./common/dom/useDragArea.ts ***!
  \***********************************/
/*! exports provided: useDragArea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDragArea", function() { return useDragArea; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const clamp = (number, ...range) => Math.max(Math.min(number, Math.max(...range)), Math.min(...range));

const useDragArea = (ref, fn) => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const {
      current: element
    } = ref;
    if (!element) return;

    const handleDrag = event => {
      const {
        left,
        top,
        width,
        height
      } = element.getBoundingClientRect();
      const x = clamp((event.clientX - left) / width, 0, 1);
      const y = clamp((event.clientY - top) / height, 0, 1);
      fn(x, y);
    };

    const handleDragStart = event => {
      event.preventDefault();
      handleDrag(event);

      const handleDragEnd = () => {
        removeEventListener("mouseup", handleDragEnd);
        removeEventListener("mousemove", handleDrag);
      };

      addEventListener("mousemove", handleDrag);
      addEventListener("mouseup", handleDragEnd);
    };

    element.addEventListener("mousedown", handleDragStart);
    return () => element.removeEventListener("mousedown", handleDragStart);
  }, [fn, ref]);
};

/***/ }),

/***/ "./common/dom/useMeasure.ts":
/*!**********************************!*\
  !*** ./common/dom/useMeasure.ts ***!
  \**********************************/
/*! exports provided: useMeasure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMeasure", function() { return useMeasure; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! resize-observer-polyfill */ "resize-observer-polyfill");
/* harmony import */ var resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _state_useLazyValue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state/useLazyValue */ "./common/state/useLazyValue.ts");



const useMeasure = () => {
  const ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const {
    0: bounds,
    1: setBounds
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    left: 0,
    top: 0,
    width: 0,
    height: 0
  });
  const observer = Object(_state_useLazyValue__WEBPACK_IMPORTED_MODULE_2__["useLazyValue"])(() => {
    return new resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_1___default.a(([entry]) => setBounds(entry.contentRect));
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [observer]);
  return [ref, bounds];
};

/***/ }),

/***/ "./common/dom/useWindowEvent.ts":
/*!**************************************!*\
  !*** ./common/dom/useWindowEvent.ts ***!
  \**************************************/
/*! exports provided: useWindowEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useWindowEvent", function() { return useWindowEvent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useWindowEvent = (type, listener, options) => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    window.addEventListener(type, listener, options);
    return () => {
      window.removeEventListener(type, listener, options);
    };
  });
};

/***/ }),

/***/ "./common/form/validators/isUrl.ts":
/*!*****************************************!*\
  !*** ./common/form/validators/isUrl.ts ***!
  \*****************************************/
/*! exports provided: isUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUrl", function() { return isUrl; });
/* harmony import */ var _matchesRegex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./matchesRegex */ "./common/form/validators/matchesRegex.ts");

const isUrl = () => Object(_matchesRegex__WEBPACK_IMPORTED_MODULE_0__["matchesRegex"])(/^https?:\/\//, "Invalid URL");

/***/ }),

/***/ "./common/form/validators/matchesRegex.ts":
/*!************************************************!*\
  !*** ./common/form/validators/matchesRegex.ts ***!
  \************************************************/
/*! exports provided: matchesRegex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchesRegex", function() { return matchesRegex; });
const matchesRegex = (regex, error) => value => !value || regex.test(value) ? false : error;

/***/ }),

/***/ "./common/form/validators/maxLength.ts":
/*!*********************************************!*\
  !*** ./common/form/validators/maxLength.ts ***!
  \*********************************************/
/*! exports provided: maxLength */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxLength", function() { return maxLength; });
const maxLength = length => value => value.length > length ? `Exceeds maximum length of ${length}` : false;

/***/ }),

/***/ "./common/input/Clickable.ts":
/*!***********************************!*\
  !*** ./common/input/Clickable.ts ***!
  \***********************************/
/*! exports provided: Clickable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Clickable", function() { return Clickable; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Clickable = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.attrs(props => ({
  type: "type" in props ? props.type : "button"
})).withConfig({
  displayName: "Clickable",
  componentId: "sc-1tsppy2-0"
})(["display:block;margin:0;padding:0;border:none;background:none;outline:none;color:inherit;font:inherit;cursor:pointer;&:disabled{cursor:default;}"]);

/***/ }),

/***/ "./common/input/Interactive.ts":
/*!*************************************!*\
  !*** ./common/input/Interactive.ts ***!
  \*************************************/
/*! exports provided: Interactive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Interactive", function() { return Interactive; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Clickable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Clickable */ "./common/input/Clickable.ts");


const Interactive = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Clickable__WEBPACK_IMPORTED_MODULE_1__["Clickable"]).withConfig({
  displayName: "Interactive",
  componentId: "sy19wy-0"
})(["color:", ";&:disabled{color:", ";}&:not(:disabled):hover{color:", ";}&:not(:disabled):focus{color:", ";}"], ({
  theme
}) => theme.interactive.normal, ({
  theme
}) => theme.interactive.muted, ({
  theme
}) => theme.interactive.hover, ({
  theme
}) => theme.interactive.active);

/***/ }),

/***/ "./common/input/bindToInput.ts":
/*!*************************************!*\
  !*** ./common/input/bindToInput.ts ***!
  \*************************************/
/*! exports provided: bindToInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindToInput", function() { return bindToInput; });
// eslint-disable-next-line @typescript-eslint/ban-types
const bindToInput = (observable, key) => {
  return {
    value: observable[key],
    onChange: value => {
      observable[key] = value;
    }
  };
};

/***/ }),

/***/ "./common/input/button/Button.ts":
/*!***************************************!*\
  !*** ./common/input/button/Button.ts ***!
  \***************************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Clickable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Clickable */ "./common/input/Clickable.ts");


const Button = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Clickable__WEBPACK_IMPORTED_MODULE_1__["Clickable"]).withConfig({
  displayName: "Button",
  componentId: "ra4iuj-0"
})(["display:inline-block;min-width:60px;min-height:36px;max-height:36px;padding:0 14px;border:2px solid transparent;border-radius:3px;font-size:16px;font-weight:500;white-space:nowrap;transition:167ms;transition-property:background-color,border-color,color;"]);

/***/ }),

/***/ "./common/input/button/PrimaryButton.ts":
/*!**********************************************!*\
  !*** ./common/input/button/PrimaryButton.ts ***!
  \**********************************************/
/*! exports provided: PrimaryButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrimaryButton", function() { return PrimaryButton; });
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _theming_darkTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../theming/darkTheme */ "./common/theming/darkTheme.ts");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Button */ "./common/input/button/Button.ts");




const PrimaryButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Button__WEBPACK_IMPORTED_MODULE_3__["Button"]).withConfig({
  displayName: "PrimaryButton",
  componentId: "sc-1kpfp52-0"
})(["background:", ";border-color:", ";color:", ";&:hover{background:", ";border-color:", ";}&:focus{border-color:", ";}&:active{background:", ";border-color:", ";}&:disabled{background:transparent;border-color:", ";color:", ";}"], ({
  theme,
  accent = "primary"
}) => theme.accent[accent], ({
  theme,
  accent = "primary"
}) => theme.accent[accent], _theming_darkTheme__WEBPACK_IMPORTED_MODULE_2__["DARK_THEME"].header.primary, Object(polished__WEBPACK_IMPORTED_MODULE_0__["rgb"])(71, 82, 196), Object(polished__WEBPACK_IMPORTED_MODULE_0__["rgb"])(71, 82, 196), ({
  theme
}) => theme.interactive.active, Object(polished__WEBPACK_IMPORTED_MODULE_0__["rgb"])(60, 69, 165), Object(polished__WEBPACK_IMPORTED_MODULE_0__["rgb"])(60, 69, 165), ({
  theme
}) => theme.interactive.muted, ({
  theme
}) => theme.text.muted);

/***/ }),

/***/ "./common/input/button/SecondaryButton.ts":
/*!************************************************!*\
  !*** ./common/input/button/SecondaryButton.ts ***!
  \************************************************/
/*! exports provided: SecondaryButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondaryButton", function() { return SecondaryButton; });
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button */ "./common/input/button/Button.ts");



const SecondaryButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Button__WEBPACK_IMPORTED_MODULE_2__["Button"]).withConfig({
  displayName: "SecondaryButton",
  componentId: "sc-1bheiy9-0"
})(["border-color:", ";color:", ";&:hover{background:", ";}&:focus{border-color:", ";}&:active{background:", ";border-color:", ";}&:disabled{background:transparent;border-color:", ";color:", ";}"], ({
  theme
}) => Object(polished__WEBPACK_IMPORTED_MODULE_0__["transparentize"])(0.5, theme.interactive.normal), ({
  theme
}) => theme.header.primary, ({
  theme
}) => theme.backgroundModifier.active, ({
  theme
}) => theme.accent.primary, ({
  theme
}) => theme.background.tertiary, ({
  theme
}) => theme.background.tertiary, ({
  theme
}) => theme.interactive.muted, ({
  theme
}) => theme.text.muted);

/***/ }),

/***/ "./common/input/checkable/Checkbox.tsx":
/*!*********************************************!*\
  !*** ./common/input/checkable/Checkbox.tsx ***!
  \*********************************************/
/*! exports provided: Checkbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return Checkbox; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _icons_check__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../icons/check */ "./icons/check.tsx");
/* harmony import */ var _layout_CheckableButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout/CheckableButton */ "./common/input/checkable/layout/CheckableButton.ts");
/* harmony import */ var _layout_CheckableContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout/CheckableContainer */ "./common/input/checkable/layout/CheckableContainer.ts");
/* harmony import */ var _layout_CheckableInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout/CheckableInput */ "./common/input/checkable/layout/CheckableInput.ts");
/* harmony import */ var _layout_CheckableLabel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout/CheckableLabel */ "./common/input/checkable/layout/CheckableLabel.ts");
/* harmony import */ var _layout_Positioner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layout/Positioner */ "./common/input/checkable/layout/Positioner.ts");

var _jsxFileName = "F:\\DiscordHookSite\\common\\input\\checkable\\Checkbox.tsx";









const Button = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_layout_CheckableButton__WEBPACK_IMPORTED_MODULE_5__["CheckableButton"]).withConfig({
  displayName: "Checkbox__Button",
  componentId: "cp2m0k-0"
})(["border-radius:3px;& > svg{", ";", ";opacity:0;transition:150ms;transition-property:opacity;}input:checked + & > svg{opacity:1;}"], Object(polished__WEBPACK_IMPORTED_MODULE_1__["cover"])(), Object(polished__WEBPACK_IMPORTED_MODULE_1__["size"])("100%"));
function Checkbox(props) {
  const {
    id,
    label,
    value,
    onChange: handleChange,
    className,
    disabled
  } = props;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_layout_CheckableContainer__WEBPACK_IMPORTED_MODULE_6__["CheckableContainer"], {
    className: className,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_layout_Positioner__WEBPACK_IMPORTED_MODULE_9__["Positioner"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_layout_CheckableInput__WEBPACK_IMPORTED_MODULE_7__["CheckableInput"], {
        id: id,
        type: "checkbox",
        disabled: disabled,
        checked: value,
        onChange: event => handleChange(event.target.checked)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Button, {
        children: _icons_check__WEBPACK_IMPORTED_MODULE_4__["check"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_layout_CheckableLabel__WEBPACK_IMPORTED_MODULE_8__["CheckableLabel"], {
      htmlFor: id,
      children: label
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./common/input/checkable/Radio.tsx":
/*!******************************************!*\
  !*** ./common/input/checkable/Radio.tsx ***!
  \******************************************/
/*! exports provided: Radio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Radio", function() { return Radio; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _state_useRequiredContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../state/useRequiredContext */ "./common/state/useRequiredContext.ts");
/* harmony import */ var _layout_CheckableButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout/CheckableButton */ "./common/input/checkable/layout/CheckableButton.ts");
/* harmony import */ var _layout_CheckableContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout/CheckableContainer */ "./common/input/checkable/layout/CheckableContainer.ts");
/* harmony import */ var _layout_CheckableInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout/CheckableInput */ "./common/input/checkable/layout/CheckableInput.ts");
/* harmony import */ var _layout_CheckableLabel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout/CheckableLabel */ "./common/input/checkable/layout/CheckableLabel.ts");
/* harmony import */ var _layout_Positioner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layout/Positioner */ "./common/input/checkable/layout/Positioner.ts");
/* harmony import */ var _RadioContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./RadioContext */ "./common/input/checkable/RadioContext.ts");

var _jsxFileName = "F:\\DiscordHookSite\\common\\input\\checkable\\Radio.tsx";










const Button = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_layout_CheckableButton__WEBPACK_IMPORTED_MODULE_5__["CheckableButton"]).withConfig({
  displayName: "Radio__Button",
  componentId: "sc-1aqn01m-0"
})(["border-radius:50%;&::after{", ";", ";content:\"\";display:block;background:currentColor;border-radius:50%;opacity:0;transition:150ms;transition-property:opacity;}input:checked + &::after{opacity:1;}"], Object(polished__WEBPACK_IMPORTED_MODULE_1__["cover"])(2), Object(polished__WEBPACK_IMPORTED_MODULE_1__["size"])(8));
function Radio(props) {
  const {
    id: givenId,
    label,
    value,
    disabled
  } = props;
  const group = Object(_state_useRequiredContext__WEBPACK_IMPORTED_MODULE_4__["useRequiredContext"])(_RadioContext__WEBPACK_IMPORTED_MODULE_10__["RadioContext"]);
  const id = givenId !== null && givenId !== void 0 ? givenId : `${group.id}_${value}`;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_layout_CheckableContainer__WEBPACK_IMPORTED_MODULE_6__["CheckableContainer"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_layout_Positioner__WEBPACK_IMPORTED_MODULE_9__["Positioner"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_layout_CheckableInput__WEBPACK_IMPORTED_MODULE_7__["CheckableInput"], {
        id: id,
        type: "radio",
        tabIndex: group.selected === value ? 0 : -1,
        name: group.id,
        value: value,
        disabled: disabled,
        checked: group.selected === value,
        onChange: group.handleChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Button, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_layout_CheckableLabel__WEBPACK_IMPORTED_MODULE_8__["CheckableLabel"], {
      htmlFor: id,
      children: label
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./common/input/checkable/RadioContext.ts":
/*!************************************************!*\
  !*** ./common/input/checkable/RadioContext.ts ***!
  \************************************************/
/*! exports provided: RadioContext, RadioProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioContext", function() { return RadioContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioProvider", function() { return RadioProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const RadioContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null);
RadioContext.displayName = "RadioContext";
const RadioProvider = RadioContext.Provider;

/***/ }),

/***/ "./common/input/checkable/RadioGroup.tsx":
/*!***********************************************!*\
  !*** ./common/input/checkable/RadioGroup.tsx ***!
  \***********************************************/
/*! exports provided: RadioGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioGroup", function() { return RadioGroup; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layout_InputContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layout/InputContainer */ "./common/input/layout/InputContainer.ts");
/* harmony import */ var _layout_InputLabel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layout/InputLabel */ "./common/input/layout/InputLabel.ts");
/* harmony import */ var _RadioContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RadioContext */ "./common/input/checkable/RadioContext.ts");

var _jsxFileName = "F:\\DiscordHookSite\\common\\input\\checkable\\RadioGroup.tsx";





const GroupContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "RadioGroup__GroupContainer",
  componentId: "ejxge9-0"
})(["display:flex;& > *{margin-right:8px;}"]);
function RadioGroup(props) {
  const {
    id,
    label,
    value,
    onChange: handleChange,
    children
  } = props;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_RadioContext__WEBPACK_IMPORTED_MODULE_5__["RadioProvider"], {
    value: {
      id,
      selected: value,
      handleChange: event => handleChange(event.target.value)
    },
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_layout_InputContainer__WEBPACK_IMPORTED_MODULE_3__["InputContainer"], {
      role: "radiogroup",
      "aria-labelledby": id,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_layout_InputLabel__WEBPACK_IMPORTED_MODULE_4__["InputLabel"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: id,
          children: label
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(GroupContainer, {
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./common/input/checkable/layout/CheckableButton.ts":
/*!**********************************************************!*\
  !*** ./common/input/checkable/layout/CheckableButton.ts ***!
  \**********************************************************/
/*! exports provided: CheckableButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckableButton", function() { return CheckableButton; });
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


const CheckableButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "CheckableButton",
  componentId: "sc-11cu451-0"
})(["", ";", ";background:", ";border:2px solid ", ";color:", ";pointer-events:none;transition:150ms;transition-property:background-color,border-color,color;input:hover + &&{background:", ";border-color:", ";}input:focus + &&{border-color:", ";}input:disabled + &&{background:transparent;border-color:", ";color:", ";}"], Object(polished__WEBPACK_IMPORTED_MODULE_0__["cover"])(), Object(polished__WEBPACK_IMPORTED_MODULE_0__["size"])("100%"), ({
  theme
}) => theme.background.secondaryAlt, ({
  theme
}) => theme.background.secondaryAlt, ({
  theme
}) => theme.interactive.active, ({
  theme
}) => theme.interactive.muted, ({
  theme
}) => theme.interactive.muted, ({
  theme
}) => theme.accent.primary, ({
  theme
}) => theme.interactive.muted, ({
  theme
}) => theme.interactive.muted);

/***/ }),

/***/ "./common/input/checkable/layout/CheckableContainer.ts":
/*!*************************************************************!*\
  !*** ./common/input/checkable/layout/CheckableContainer.ts ***!
  \*************************************************************/
/*! exports provided: CheckableContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckableContainer", function() { return CheckableContainer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const CheckableContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "CheckableContainer",
  componentId: "sc-17wohe6-0"
})(["display:flex;align-items:center;height:36px;user-select:none;"]);

/***/ }),

/***/ "./common/input/checkable/layout/CheckableInput.ts":
/*!*********************************************************!*\
  !*** ./common/input/checkable/layout/CheckableInput.ts ***!
  \*********************************************************/
/*! exports provided: CheckableInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckableInput", function() { return CheckableInput; });
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


const CheckableInput = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.input.withConfig({
  displayName: "CheckableInput",
  componentId: "sc-4cchya-0"
})(["", ";", ";padding:8px;margin:-8px;border:none;outline:none;opacity:0;&:not(:disabled){cursor:pointer;}"], Object(polished__WEBPACK_IMPORTED_MODULE_0__["cover"])(), Object(polished__WEBPACK_IMPORTED_MODULE_0__["size"])("calc(100% + 16px)"));

/***/ }),

/***/ "./common/input/checkable/layout/CheckableLabel.ts":
/*!*********************************************************!*\
  !*** ./common/input/checkable/layout/CheckableLabel.ts ***!
  \*********************************************************/
/*! exports provided: CheckableLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckableLabel", function() { return CheckableLabel; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const CheckableLabel = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.label.withConfig({
  displayName: "CheckableLabel",
  componentId: "bjfds2-0"
})(["color:", ";font-size:16px;font-weight:500;margin:0 8px;"], ({
  theme
}) => theme.header.primary);

/***/ }),

/***/ "./common/input/checkable/layout/Positioner.ts":
/*!*****************************************************!*\
  !*** ./common/input/checkable/layout/Positioner.ts ***!
  \*****************************************************/
/*! exports provided: Positioner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Positioner", function() { return Positioner; });
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


const Positioner = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Positioner",
  componentId: "sc-1jdb4fo-0"
})(["", " position:relative;"], Object(polished__WEBPACK_IMPORTED_MODULE_0__["size"])(16));

/***/ }),

/***/ "./common/input/color/ColorInputField.tsx":
/*!************************************************!*\
  !*** ./common/input/color/ColorInputField.tsx ***!
  \************************************************/
/*! exports provided: ColorInputField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorInputField", function() { return ColorInputField; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _popover_PopoverContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../popover/PopoverContainer */ "./common/popover/PopoverContainer.ts");
/* harmony import */ var _popover_usePopover__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../popover/usePopover */ "./common/popover/usePopover.tsx");
/* harmony import */ var _state_useAutorun__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../state/useAutorun */ "./common/state/useAutorun.ts");
/* harmony import */ var _layout_Input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../layout/Input */ "./common/input/layout/Input.ts");
/* harmony import */ var _text_InputField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../text/InputField */ "./common/input/text/InputField.tsx");
/* harmony import */ var _ColorPicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ColorPicker */ "./common/input/color/ColorPicker.tsx");

var _jsxFileName = "F:\\DiscordHookSite\\common\\input\\color\\ColorInputField.tsx";









const RGB_STRING_RE = /^([01]?\d{1,2}|2[0-4]\d|25[0-5])[\s,]\s*([01]?\d{1,2}|2[0-4]\d|25[0-5])[\s,]\s*([01]?\d{1,2}|2[0-4]\d|25[0-5])$/;
const MonoInputField = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_text_InputField__WEBPACK_IMPORTED_MODULE_8__["InputField"]).withConfig({
  displayName: "ColorInputField__MonoInputField",
  componentId: "sc-15if2js-0"
})(["& ", "{font-size:15px;font-family:", ";}"], _layout_Input__WEBPACK_IMPORTED_MODULE_7__["Input"], ({
  theme
}) => theme.font.mono);
const Preview = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "ColorInputField__Preview",
  componentId: "sc-15if2js-1"
})(["min-width:36px;max-width:36px;min-height:36px;max-height:36px;border-radius:4px;box-shadow:inset ", ";margin-left:8px;"], ({
  theme
}) => theme.elavation.stroke);
function ColorInputField(props) {
  const {
    id,
    color,
    label
  } = props;
  const {
    0: value,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(() => {
    var _color$hex;

    return (_color$hex = color.hex) !== null && _color$hex !== void 0 ? _color$hex : "";
  });
  const {
    0: touched,
    1: setTouched
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  Object(_state_useAutorun__WEBPACK_IMPORTED_MODULE_6__["useAutorun"])(() => {
    var _color$hex2;

    if (!touched) setValue((_color$hex2 = color.hex) !== null && _color$hex2 !== void 0 ? _color$hex2 : "");
  });
  const inputRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  const popover = Object(_popover_usePopover__WEBPACK_IMPORTED_MODULE_5__["usePopover"])({
    ref: inputRef,
    render: () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_popover_PopoverContainer__WEBPACK_IMPORTED_MODULE_4__["PopoverContainer"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ColorPicker__WEBPACK_IMPORTED_MODULE_9__["ColorPicker"], {
        color: color
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, this),
    placement: "bottom-start",
    shards: [inputRef]
  });
  const theme = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["useTheme"])();
  return Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__["useObserver"])(() => {
    var _color$hex4;

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MonoInputField, {
      ref: inputRef,
      id: id,
      value: value,
      onChange: value => {
        setTouched(true);
        setValue(value.toLowerCase());

        if (/^#?[\da-f]{6}$/i.test(value)) {
          color.setHex(value);
        } else if (!value) {
          color.invalidate();
        } else {
          const match = RGB_STRING_RE.exec(value);

          if (match) {
            const [, red, green, blue] = [...match].map(Number);
            color.setRaw(red * 0x010000 + green * 0x000100 + blue);
          }
        }
      },
      onBlur: () => {
        var _color$hex3;

        setTouched(false);
        setValue((_color$hex3 = color.hex) !== null && _color$hex3 !== void 0 ? _color$hex3 : "");
      },
      label: label,
      placeholder: "#rrggbb",
      onClick: () => {
        popover.spawn();
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Preview, {
        role: "presentation",
        style: {
          backgroundColor: (_color$hex4 = color.hex) !== null && _color$hex4 !== void 0 ? _color$hex4 : theme.background.tertiary
        },
        onClick: () => {
          popover.spawn();
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 5
    }, this);
  });
}

/***/ }),

/***/ "./common/input/color/ColorModel.ts":
/*!******************************************!*\
  !*** ./common/input/color/ColorModel.ts ***!
  \******************************************/
/*! exports provided: ColorModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorModel", function() { return ColorModel; });
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx-state-tree */ "mobx-state-tree");
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__);

const colorValue = mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].custom({
  name: "ColorValue",

  fromSnapshot(value) {
    return value !== null && value !== void 0 ? value : Number.NaN;
  },

  toSnapshot(value) {
    return Number.isNaN(value) ? null : value;
  },

  isTargetType(value) {
    return typeof value === "number";
  },

  getValidationMessage(value) {
    if (typeof value === "number" || value === null) return "";
    return "Value is not a number or null";
  }

});
const ColorModel = mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].model("ColorModel", {
  hue: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].optional(colorValue, Number.NaN),
  saturation: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].optional(colorValue, Number.NaN),
  value: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].optional(colorValue, Number.NaN)
}).views(self => ({
  get valid() {
    return ![self.hue, self.saturation, self.value].some(n => Number.isNaN(n));
  },

  get raw() {
    if (!this.valid) return null;

    const f = n => {
      const k = (n + self.hue / 60) % 6;
      return self.value - self.value * self.saturation * Math.max(Math.min(k, 4 - k, 1), 0);
    };

    return (// red
      Math.round(f(5) * 255) * 0x010000 + // green
      Math.round(f(3) * 255) * 0x000100 + // blue
      Math.round(f(1) * 255)
    );
  },

  get hex() {
    var _this$raw;

    if (!this.valid) return;
    return `#${(_this$raw = this.raw) === null || _this$raw === void 0 ? void 0 : _this$raw.toString(16).padStart(6, "0")}`;
  }

})).actions(self => ({
  invalidate() {
    self.hue = Number.NaN;
    self.saturation = 0;
    self.value = 0;
  },

  setHue(value) {
    self.hue = value;
  },

  setSaturation(value) {
    self.saturation = value;
  },

  setValue(value) {
    self.value = value;
  },

  setRaw(value) {
    this.setHex(typeof value === "number" ? `#${value.toString(16).padStart(6, "0")}` : "");
  },

  setHex(hex) {
    var _$exec$map, _$exec;

    if (!hex) {
      this.invalidate();
      return;
    }

    const [, red = 0, green = 0, blue = 0] = (_$exec$map = (_$exec = /^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})$/.exec(hex)) === null || _$exec === void 0 ? void 0 : _$exec.map(hex => Number.parseInt(hex, 16))) !== null && _$exec$map !== void 0 ? _$exec$map : [];
    const max = Math.max(red, blue, green);
    const min = Math.min(red, blue, green);
    const delta = max - min;
    const value = max / 255;
    const saturation = max && (max - min) / max;
    let hue = 0;
    if (max === red) hue = 60 * ((green - blue) / delta);
    if (max === green) hue = 60 * (2 + (blue - red) / delta);
    if (max === blue) hue = 60 * (4 + (red - green) / delta);
    if (delta === 0) hue = 0;
    if (hue < 0) hue += 360;
    self.hue = hue;
    self.saturation = saturation;
    self.value = value;
  }

})); // eslint-disable-next-line @typescript-eslint/no-empty-interface, @typescript-eslint/consistent-type-definitions

/***/ }),

/***/ "./common/input/color/ColorPicker.tsx":
/*!********************************************!*\
  !*** ./common/input/color/ColorPicker.tsx ***!
  \********************************************/
/*! exports provided: ColorPicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPicker", function() { return ColorPicker; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _dom_useDragArea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../dom/useDragArea */ "./common/dom/useDragArea.ts");
/* harmony import */ var _layout_FlexContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../layout/FlexContainer */ "./common/layout/FlexContainer.ts");
/* harmony import */ var _state_useAutorun__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../state/useAutorun */ "./common/state/useAutorun.ts");
/* harmony import */ var _ColorModel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ColorModel */ "./common/input/color/ColorModel.ts");

var _jsxFileName = "F:\\DiscordHookSite\\common\\input\\color\\ColorPicker.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const Picker = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "ColorPicker__Picker",
  componentId: "sc-194jjtz-0"
})(["width:220px;height:150px;border-radius:4px;"]);
const PickerLayer = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "ColorPicker__PickerLayer",
  componentId: "sc-194jjtz-1"
})(["", ";border-radius:4px;"], Object(polished__WEBPACK_IMPORTED_MODULE_1__["size"])("100%"));
const PickerKnob = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "ColorPicker__PickerKnob",
  componentId: "sc-194jjtz-2"
})(["", ";border-radius:50%;background:white;border:2px solid white;"], Object(polished__WEBPACK_IMPORTED_MODULE_1__["size"])(11));
const HueSlider = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "ColorPicker__HueSlider",
  componentId: "sc-194jjtz-3"
})(["", " margin-left:16px;width:12px;height:150px;border-radius:4px;&&{flex:0 0 auto;}"], Object(polished__WEBPACK_IMPORTED_MODULE_1__["linearGradient"])({
  colorStops: [Object(polished__WEBPACK_IMPORTED_MODULE_1__["rgb"])(255, 0, 0), Object(polished__WEBPACK_IMPORTED_MODULE_1__["rgb"])(255, 255, 0), Object(polished__WEBPACK_IMPORTED_MODULE_1__["rgb"])(0, 255, 0), Object(polished__WEBPACK_IMPORTED_MODULE_1__["rgb"])(0, 255, 255), Object(polished__WEBPACK_IMPORTED_MODULE_1__["rgb"])(0, 0, 255), Object(polished__WEBPACK_IMPORTED_MODULE_1__["rgb"])(255, 0, 255), Object(polished__WEBPACK_IMPORTED_MODULE_1__["rgb"])(255, 0, 0)],
  toDirection: "to bottom"
}));
const SliderKnob = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "ColorPicker__SliderKnob",
  componentId: "sc-194jjtz-4"
})(["width:16px;height:8px;border-radius:3px;background:white;"]);
function ColorPicker(props) {
  const {
    color
  } = props;
  const pickerRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  const pickerKnobRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  const sliderRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  const sliderKnobRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  Object(_state_useAutorun__WEBPACK_IMPORTED_MODULE_6__["useAutorun"])(() => {
    var _pureColor$hex, _color$hex;

    const {
      current: picker
    } = pickerRef;
    const {
      current: pickerKnob
    } = pickerKnobRef;
    const {
      current: slider
    } = sliderRef;
    const {
      current: sliderKnob
    } = sliderKnobRef;
    if (!picker || !pickerKnob || !slider || !sliderKnob) return;
    pickerKnob.style.visibility = "visible";
    sliderKnob.style.visibility = "visible";
    const {
      width: pickerWidth,
      height: pickerHeight
    } = picker.getBoundingClientRect();
    const {
      height: sliderHeight
    } = slider.getBoundingClientRect();
    const pureColor = _ColorModel__WEBPACK_IMPORTED_MODULE_7__["ColorModel"].create({
      hue: color.hue,
      saturation: 1,
      value: 1
    });
    picker.style.backgroundColor = (_pureColor$hex = pureColor.hex) !== null && _pureColor$hex !== void 0 ? _pureColor$hex : "#ff0000";
    const pickerX = (color.saturation || 0) * pickerWidth - 6;
    const pickerY = (1 - (color.value || 0)) * pickerHeight - 6;
    pickerKnob.style.transform = `translate(${pickerX}px, ${pickerY}px)`;
    pickerKnob.style.backgroundColor = (_color$hex = color.hex) !== null && _color$hex !== void 0 ? _color$hex : Object(polished__WEBPACK_IMPORTED_MODULE_1__["rgb"])(0, 0, 0);
    const normalHue = (color.hue || 0) / 360;
    sliderKnob.style.transform = `translateX(-2px) translateY(${normalHue * sliderHeight - 4}px)`;
  });
  Object(_dom_useDragArea__WEBPACK_IMPORTED_MODULE_4__["useDragArea"])(sliderRef, (mouseX, mouseY) => {
    color.setHue(mouseY * 360);
  });
  Object(_dom_useDragArea__WEBPACK_IMPORTED_MODULE_4__["useDragArea"])(pickerRef, (mouseX, mouseY) => {
    if (!color.valid) color.setHue(0);
    color.setSaturation(mouseX);
    color.setValue(1 - mouseY);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_layout_FlexContainer__WEBPACK_IMPORTED_MODULE_5__["FlexContainer"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Picker, {
      ref: pickerRef,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PickerLayer, {
        style: _objectSpread({}, Object(polished__WEBPACK_IMPORTED_MODULE_1__["linearGradient"])({
          colorStops: [Object(polished__WEBPACK_IMPORTED_MODULE_1__["rgb"])(255, 255, 255), Object(polished__WEBPACK_IMPORTED_MODULE_1__["rgba"])(255, 255, 255, 0)],
          fallback: Object(polished__WEBPACK_IMPORTED_MODULE_1__["rgba"])(0, 0, 0, 0),
          toDirection: "to right"
        })),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PickerLayer, {
          style: _objectSpread({}, Object(polished__WEBPACK_IMPORTED_MODULE_1__["linearGradient"])({
            colorStops: [Object(polished__WEBPACK_IMPORTED_MODULE_1__["rgba"])(0, 0, 0, 0), Object(polished__WEBPACK_IMPORTED_MODULE_1__["rgb"])(0, 0, 0)],
            fallback: Object(polished__WEBPACK_IMPORTED_MODULE_1__["rgba"])(0, 0, 0, 0),
            toDirection: "to bottom"
          })),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PickerKnob, {
            ref: pickerKnobRef,
            style: {
              visibility: "hidden"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(HueSlider, {
      ref: sliderRef,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SliderKnob, {
        ref: sliderKnobRef,
        style: {
          visibility: "hidden"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 125,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./common/input/error/InputError.tsx":
/*!*******************************************!*\
  !*** ./common/input/error/InputError.tsx ***!
  \*******************************************/
/*! exports provided: InputError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputError", function() { return InputError; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_spring_web__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-spring/web */ "@react-spring/web");
/* harmony import */ var _react_spring_web__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_react_spring_web__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _icons_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../icons/error */ "./icons/error.tsx");
/* harmony import */ var _icons_warning__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../icons/warning */ "./icons/warning.tsx");
/* harmony import */ var _layout_Icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../layout/Icon */ "./common/layout/Icon.ts");

var _jsxFileName = "F:\\DiscordHookSite\\common\\input\\error\\InputError.tsx";






const InputValidationError = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "InputError__InputValidationError",
  componentId: "wmde04-0"
})(["display:flex;align-items:center;color:", ";font-size:16px;font-weight:500;padding-top:8px;height:24px;& > ", "{margin-left:-8px;color:currentColor;}", ";"], ({
  theme
}) => theme.accent.danger, _layout_Icon__WEBPACK_IMPORTED_MODULE_6__["Icon"], ({
  variant
}) => variant === "warning" && Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["css"])(["color:", ";"], ({
  theme
}) => theme.accent.warning));
function InputError(props) {
  const {
    variant = "error",
    error: errorMessage = ""
  } = props;
  const hasError = Boolean(errorMessage);
  const {
    0: shouldRenderError,
    1: setShouldRenderError
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(hasError);
  const errorStyle = Object(_react_spring_web__WEBPACK_IMPORTED_MODULE_1__["useSpring"])({
    config: {
      tension: 300,
      clamp: true
    },
    opacity: Number(hasError),
    height: errorMessage ? 24 : 0,
    onRest: () => setShouldRenderError(hasError)
  });
  if (!shouldRenderError && !hasError) return null;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_spring_web__WEBPACK_IMPORTED_MODULE_1__["animated"].div, {
    style: errorStyle,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputValidationError, {
      variant: variant,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_layout_Icon__WEBPACK_IMPORTED_MODULE_6__["Icon"], {
        children: variant === "error" ? _icons_error__WEBPACK_IMPORTED_MODULE_4__["error"] : _icons_warning__WEBPACK_IMPORTED_MODULE_5__["warning"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, this), errorMessage]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./common/input/file/FileInputField.tsx":
/*!**********************************************!*\
  !*** ./common/input/file/FileInputField.tsx ***!
  \**********************************************/
/*! exports provided: FakeInput, FileInputField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakeInput", function() { return FakeInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileInputField", function() { return FileInputField; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_message_preview_attachment_helpers_getHumanReadableSize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../modules/message/preview/attachment/helpers/getHumanReadableSize */ "./modules/message/preview/attachment/helpers/getHumanReadableSize.ts");
/* harmony import */ var _layout_breakpoints__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../layout/breakpoints */ "./common/layout/breakpoints.ts");
/* harmony import */ var _layout_FlexContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../layout/FlexContainer */ "./common/layout/FlexContainer.ts");
/* harmony import */ var _button_PrimaryButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../button/PrimaryButton */ "./common/input/button/PrimaryButton.ts");
/* harmony import */ var _layout_Input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../layout/Input */ "./common/input/layout/Input.ts");
/* harmony import */ var _layout_InputConstraint__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../layout/InputConstraint */ "./common/input/layout/InputConstraint.ts");
/* harmony import */ var _layout_InputContainer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../layout/InputContainer */ "./common/input/layout/InputContainer.ts");
/* harmony import */ var _layout_InputLabel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../layout/InputLabel */ "./common/input/layout/InputLabel.ts");
/* harmony import */ var _PasteFileButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./PasteFileButton */ "./common/input/file/PasteFileButton.tsx");

var _jsxFileName = "F:\\DiscordHookSite\\common\\input\\file\\FileInputField.tsx";











const FakeInput = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_layout_Input__WEBPACK_IMPORTED_MODULE_7__["Input"]).withConfig({
  displayName: "FileInputField__FakeInput",
  componentId: "sc-3b0b62-0"
})(["flex:1;input:focus + &&{border-color:", ";}"], ({
  theme
}) => theme.accent.primary);
const ClipboardButton = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_PasteFileButton__WEBPACK_IMPORTED_MODULE_11__["PasteFileButton"]).withConfig({
  displayName: "FileInputField__ClipboardButton",
  componentId: "sc-3b0b62-1"
})(["", "{display:none;}"], _layout_breakpoints__WEBPACK_IMPORTED_MODULE_4__["SCREEN_SMALL"]);
function FileInputField(props) {
  const {
    id,
    value,
    onChange: handleChange,
    label,
    disabled = false,
    maxSize
  } = props;
  const inputRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

  const handleRemoveFiles = () => {
    if (!inputRef.current) return;
    inputRef.current.value = "";
    handleChange([]);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_layout_InputContainer__WEBPACK_IMPORTED_MODULE_9__["InputContainer"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_layout_InputLabel__WEBPACK_IMPORTED_MODULE_10__["InputLabel"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        htmlFor: id,
        children: label
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, this), maxSize && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_layout_InputConstraint__WEBPACK_IMPORTED_MODULE_8__["InputConstraint"], {
        children: [Object(_modules_message_preview_attachment_helpers_getHumanReadableSize__WEBPACK_IMPORTED_MODULE_3__["getHumanReadableSize"])(maxSize), " max."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_layout_FlexContainer__WEBPACK_IMPORTED_MODULE_5__["FlexContainer"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        ref: inputRef,
        id: id,
        type: "file",
        multiple: true,
        disabled: disabled,
        style: {
          position: "absolute",
          opacity: 0,
          pointerEvents: "none"
        },
        onChange: event => {
          var _event$target$files;

          handleChange(Array.from((_event$target$files = event.target.files) !== null && _event$target$files !== void 0 ? _event$target$files : []));
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FakeInput, {
        value: value.map(file => file.name).join(", "),
        readOnly: true,
        disabled: disabled,
        tabIndex: -1,
        style: {
          cursor: "default"
        },
        onClick: () => {
          var _inputRef$current;

          (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.click();
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ClipboardButton, {
        onChange: handleChange,
        disabled: disabled
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_button_PrimaryButton__WEBPACK_IMPORTED_MODULE_6__["PrimaryButton"], {
        onClick: handleRemoveFiles,
        disabled: disabled,
        children: "Clear"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./common/input/file/PasteFileButton.tsx":
/*!***********************************************!*\
  !*** ./common/input/file/PasteFileButton.tsx ***!
  \***********************************************/
/*! exports provided: PasteFileButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasteFileButton", function() { return PasteFileButton; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _button_SecondaryButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../button/SecondaryButton */ "./common/input/button/SecondaryButton.ts");


var _jsxFileName = "F:\\DiscordHookSite\\common\\input\\file\\PasteFileButton.tsx";



const Button = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_button_SecondaryButton__WEBPACK_IMPORTED_MODULE_3__["SecondaryButton"]).withConfig({
  displayName: "PasteFileButton__Button",
  componentId: "sc-6sd4v1-0"
})(["input:focus + &&{background:", ";border-color:", ";}"], ({
  theme
}) => theme.background.tertiary, ({
  theme
}) => theme.background.tertiary);
function PasteFileButton(props) {
  const {
    className,
    onChange: handleChange,
    disabled = false
  } = props;
  const {
    0: active,
    1: setActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const pasteInputRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

  const handlePaste = event => {
    var _pasteInputRef$curren;

    handleChange(Array.from(event.clipboardData.files));
    (_pasteInputRef$curren = pasteInputRef.current) === null || _pasteInputRef$curren === void 0 ? void 0 : _pasteInputRef$curren.blur();
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      ref: pasteInputRef,
      tabIndex: -1,
      placeholder: "Paste your clipboard",
      disabled: disabled,
      style: {
        position: "absolute",
        opacity: 0,
        pointerEvents: "none"
      },
      onFocus: () => setActive(true),
      onBlur: () => setActive(false),
      onPaste: handlePaste
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Button, {
      className: className,
      disabled: disabled,
      onClick: () => {
        var _pasteInputRef$curren2;

        (_pasteInputRef$curren2 = pasteInputRef.current) === null || _pasteInputRef$curren2 === void 0 ? void 0 : _pasteInputRef$curren2.focus();
      },
      children: active ? /mac/i.test(navigator.platform) ? "Press \u2318V" : "Press Ctrl+V" : "Clipboard"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ "./common/input/getLengthConstraintColor.ts":
/*!**************************************************!*\
  !*** ./common/input/getLengthConstraintColor.ts ***!
  \**************************************************/
/*! exports provided: getLengthConstraintColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLengthConstraintColor", function() { return getLengthConstraintColor; });
const getLengthConstraintColor = (current, max) => {
  const warningLimit = Math.max(max * 0.8, max - 50);
  if (current > max) return "danger";else if (current > warningLimit) return "warning";
  return "normal";
};

/***/ }),

/***/ "./common/input/layout/Input.ts":
/*!**************************************!*\
  !*** ./common/input/layout/Input.ts ***!
  \**************************************/
/*! exports provided: Input */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Input = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.input.attrs(({
  type
}) => ({
  type: type !== null && type !== void 0 ? type : "text"
})).withConfig({
  displayName: "Input",
  componentId: "sc-1uclq73-0"
})(["padding:0 9px;height:36px;min-width:0;max-width:100%;background:", ";border:2px solid transparent;border-radius:3px;outline:none;color:", ";font-size:16px;transition:150ms;transition-property:background-color,border-color,color;unicode-bidi:plaintext;textarea&{padding:5.5px 9px;min-height:36px;resize:vertical;}&:focus{border-color:", ";}&:disabled{border-color:", ";background:transparent;color:", ";}&:invalid{box-shadow:none;}&::placeholder{color:", ";}"], ({
  theme
}) => theme.background.secondaryAlt, ({
  theme
}) => theme.text.normal, ({
  theme
}) => theme.accent.primary, ({
  theme
}) => theme.interactive.muted, ({
  theme
}) => theme.text.muted, ({
  theme
}) => theme.interactive.normal);

/***/ }),

/***/ "./common/input/layout/InputConstraint.ts":
/*!************************************************!*\
  !*** ./common/input/layout/InputConstraint.ts ***!
  \************************************************/
/*! exports provided: InputConstraint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputConstraint", function() { return InputConstraint; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const InputConstraint = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "InputConstraint",
  componentId: "iamco5-0"
})(["margin-left:6.5px;color:", ";font-size:13px;font-weight:500;font-style:italic;", ";"], ({
  theme
}) => theme.text.normal, ({
  state: color = "normal"
}) => color !== "normal" && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["color:", ";"], ({
  theme
}) => theme.accent[color]));

/***/ }),

/***/ "./common/input/layout/InputContainer.ts":
/*!***********************************************!*\
  !*** ./common/input/layout/InputContainer.ts ***!
  \***********************************************/
/*! exports provided: InputContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputContainer", function() { return InputContainer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _button_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../button/Button */ "./common/input/button/Button.ts");


const InputContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "InputContainer",
  componentId: "sc-5vvyr0-0"
})(["min-width:0;display:flex;flex-direction:column;& ", "{margin-left:8px;}"], _button_Button__WEBPACK_IMPORTED_MODULE_1__["Button"]);

/***/ }),

/***/ "./common/input/layout/InputLabel.ts":
/*!*******************************************!*\
  !*** ./common/input/layout/InputLabel.ts ***!
  \*******************************************/
/*! exports provided: InputLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputLabel", function() { return InputLabel; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const InputLabel = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "InputLabel",
  componentId: "sc-1szbp18-0"
})(["color:", ";font-size:16px;font-weight:500;&:not(:empty){margin-bottom:4px;}"], ({
  theme
}) => theme.header.primary);

/***/ }),

/***/ "./common/input/list/ListInputField.tsx":
/*!**********************************************!*\
  !*** ./common/input/list/ListInputField.tsx ***!
  \**********************************************/
/*! exports provided: ListInputField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListInputField", function() { return ListInputField; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _icons_chevron__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../icons/chevron */ "./icons/chevron.tsx");
/* harmony import */ var _layout_ActionButtons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../layout/ActionButtons */ "./common/layout/ActionButtons.tsx");
/* harmony import */ var _button_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../button/Button */ "./common/input/button/Button.ts");
/* harmony import */ var _error_InputError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../error/InputError */ "./common/input/error/InputError.tsx");
/* harmony import */ var _layout_Input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../layout/Input */ "./common/input/layout/Input.ts");
/* harmony import */ var _layout_InputConstraint__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../layout/InputConstraint */ "./common/input/layout/InputConstraint.ts");
/* harmony import */ var _layout_InputContainer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../layout/InputContainer */ "./common/input/layout/InputContainer.ts");
/* harmony import */ var _layout_InputLabel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../layout/InputLabel */ "./common/input/layout/InputLabel.ts");

var _jsxFileName = "F:\\DiscordHookSite\\common\\input\\list\\ListInputField.tsx";










const Grid = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "ListInputField__Grid",
  componentId: "sc-1yzfteg-0"
})(["display:grid;grid-template-columns:1fr min-content;align-items:center;gap:", ";& ", "{margin-left:0;justify-self:start;}"], ({
  hasActions
}) => hasActions ? "8px 16px" : "8px 0", _button_Button__WEBPACK_IMPORTED_MODULE_5__["Button"]);
function ListInputField(props) {
  const {
    id,
    value: values,
    onChange: handleChange,
    label,
    limit,
    error
  } = props;

  const moveUp = index => {
    const clone = Array.from(values);
    clone.splice(index - 1, 0, ...clone.splice(index, 1));
    handleChange(clone);
  };

  const moveDown = index => {
    const clone = Array.from(values);
    clone.splice(index + 1, 0, ...clone.splice(index, 1));
    handleChange(clone);
  };

  const removeItem = index => {
    const clone = Array.from(values);
    clone.splice(index, 1);
    handleChange(clone);
  };

  const inputs = values.map((value, index) =>
  /*#__PURE__*/
  // eslint-disable-next-line react/no-array-index-key
  Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_layout_Input__WEBPACK_IMPORTED_MODULE_7__["Input"], {
      id: `${id}_${index}`,
      value: value,
      "aria-label": `${label.singular} ${index + 1}`,
      onChange: event => {
        if (!event.target.value) {
          event.target.blur();
          removeItem(index);
          return;
        }

        const copy = Array.from(values);
        copy[index] = event.target.value;
        handleChange(copy);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_layout_ActionButtons__WEBPACK_IMPORTED_MODULE_4__["ActionButtons"], {
      actions: [index !== 0 && {
        icon: _icons_chevron__WEBPACK_IMPORTED_MODULE_3__["chevron"],
        label: "Move up",
        handler: () => moveUp(index)
      }, index + 1 !== values.length && {
        icon: _icons_chevron__WEBPACK_IMPORTED_MODULE_3__["chevronDown"],
        label: "Move down",
        handler: () => moveDown(index)
      }].filter(action => {
        return typeof action === "object";
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }, this)]
  }, index, true, {
    fileName: _jsxFileName,
    lineNumber: 66,
    columnNumber: 5
  }, this));
  const canAdd = !limit || values.length < limit;

  if (canAdd) {
    inputs.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_layout_Input__WEBPACK_IMPORTED_MODULE_7__["Input"], {
        id: `${id}_${values.length}`,
        value: "",
        "aria-label": `${label.singular} ${values.length + 1}`,
        onChange: event => {
          handleChange([...values, event.target.value]);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 9
      }, this)
    }, values.length, false, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }, this));
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_layout_InputContainer__WEBPACK_IMPORTED_MODULE_9__["InputContainer"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_layout_InputLabel__WEBPACK_IMPORTED_MODULE_10__["InputLabel"], {
      children: [label.plural, limit && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_layout_InputConstraint__WEBPACK_IMPORTED_MODULE_8__["InputConstraint"], {
        children: [values.length, "/", limit]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Grid, {
      hasActions: inputs.length - Number(canAdd) > 1,
      children: inputs
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_error_InputError__WEBPACK_IMPORTED_MODULE_6__["InputError"], {
      error: error
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 119,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./common/input/slider/Slider.tsx":
/*!****************************************!*\
  !*** ./common/input/slider/Slider.tsx ***!
  \****************************************/
/*! exports provided: Slider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return Slider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layout_InputContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layout/InputContainer */ "./common/input/layout/InputContainer.ts");
/* harmony import */ var _layout_InputLabel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layout/InputLabel */ "./common/input/layout/InputLabel.ts");
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout */ "./common/input/slider/layout.ts");

var _jsxFileName = "F:\\DiscordHookSite\\common\\input\\slider\\Slider.tsx";




function Slider(props) {
  const {
    id,
    label,
    value,
    onChange: handleChange,
    min,
    max,
    step,
    markers,
    getValueName
  } = props;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_layout_InputContainer__WEBPACK_IMPORTED_MODULE_2__["InputContainer"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_layout_InputLabel__WEBPACK_IMPORTED_MODULE_3__["InputLabel"], {
      children: label
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_layout__WEBPACK_IMPORTED_MODULE_4__["Input"], {
      id: id,
      min: min,
      max: max,
      step: step,
      value: value,
      getAriaLabel: () => label,
      getAriaValueText: getValueName,
      hasMarkers: Number(markers === null || markers === void 0 ? void 0 : markers.length) > 0,
      onChange: value => handleChange(value),
      children: ({
        hasFocus
      }) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_layout__WEBPACK_IMPORTED_MODULE_4__["Track"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_layout__WEBPACK_IMPORTED_MODULE_4__["Range"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 13
        }, this), markers === null || markers === void 0 ? void 0 : markers.map(marker => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_layout__WEBPACK_IMPORTED_MODULE_4__["Marker"], {
          value: marker.value,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_layout__WEBPACK_IMPORTED_MODULE_4__["MarkerLabel"], {
            children: marker.label
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 17
          }, this)
        }, marker.value, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 15
        }, this)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_layout__WEBPACK_IMPORTED_MODULE_4__["Handle"], {
          hasFocus: hasFocus
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./common/input/slider/layout.ts":
/*!***************************************!*\
  !*** ./common/input/slider/layout.ts ***!
  \***************************************/
/*! exports provided: Input, Track, Range, Handle, Marker, MarkerLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Track", function() { return Track; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Range", function() { return Range; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Handle", function() { return Handle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Marker", function() { return Marker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkerLabel", function() { return MarkerLabel; });
/* harmony import */ var _reach_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reach/slider */ "@reach/slider");
/* harmony import */ var _reach_slider__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reach_slider__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utilities_omitProps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/omitProps */ "./common/utilities/omitProps.tsx");




const Input = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(Object(_utilities_omitProps__WEBPACK_IMPORTED_MODULE_3__["omitProp"])(_reach_slider__WEBPACK_IMPORTED_MODULE_0__["SliderInput"], "hasMarkers")).withConfig({
  displayName: "layout__Input",
  componentId: "sc-96nzxj-0"
})(["&[data-reach-slider-input]{height:8px;padding:4px 0 12px;width:320px;max-width:100%;outline:none;", ";}"], ({
  hasMarkers
}) => hasMarkers && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["padding-bottom:32px;"]));
const Track = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_reach_slider__WEBPACK_IMPORTED_MODULE_0__["SliderTrack"]).withConfig({
  displayName: "layout__Track",
  componentId: "sc-96nzxj-1"
})(["&[data-reach-slider-track]{background:", ";border-radius:4px;}"], ({
  theme
}) => theme.background.secondaryAlt);
const Range = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_reach_slider__WEBPACK_IMPORTED_MODULE_0__["SliderRange"]).withConfig({
  displayName: "layout__Range",
  componentId: "sc-96nzxj-2"
})(["&[data-reach-slider-range]{background:inherit;}"]);
const Handle = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(Object(_utilities_omitProps__WEBPACK_IMPORTED_MODULE_3__["omitProp"])(_reach_slider__WEBPACK_IMPORTED_MODULE_0__["SliderHandle"], "hasFocus")).withConfig({
  displayName: "layout__Handle",
  componentId: "sc-96nzxj-3"
})(["&[data-reach-slider-handle]{width:8px;height:16px;border:none;background:", ";border-radius:4px;box-shadow:", ";cursor:ew-resize;", ";}"], ({
  theme
}) => theme.interactive.active, ({
  theme
}) => theme.elavation.medium, ({
  hasFocus
}) => hasFocus && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["border:2px solid ", ";"], ({
  theme
}) => theme.accent.primary));
const Marker = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_reach_slider__WEBPACK_IMPORTED_MODULE_0__["SliderMarker"]).withConfig({
  displayName: "layout__Marker",
  componentId: "sc-96nzxj-4"
})(["&[data-reach-slider-marker]{", ";background:transparent;border:none;}"], Object(polished__WEBPACK_IMPORTED_MODULE_1__["size"])("auto"));
const MarkerLabel = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "layout__MarkerLabel",
  componentId: "sc-96nzxj-5"
})(["transform:translateY(20px);font-size:13px;font-weight:500;user-select:none;"]);

/***/ }),

/***/ "./common/input/text/HiddenInputField.tsx":
/*!************************************************!*\
  !*** ./common/input/text/HiddenInputField.tsx ***!
  \************************************************/
/*! exports provided: HiddenInputField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HiddenInputField", function() { return HiddenInputField; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_merge_refs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-merge-refs */ "react-merge-refs");
/* harmony import */ var react_merge_refs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_merge_refs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _InputField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./InputField */ "./common/input/text/InputField.tsx");

var _jsxFileName = "F:\\DiscordHookSite\\common\\input\\text\\HiddenInputField.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





function HiddenInputFieldRenderer(props, ref) {
  const {
    type = "text"
  } = props,
        inputProps = _objectWithoutProperties(props, ["type"]);

  const inputRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const {
      current: input
    } = inputRef;
    if (!input) return;

    const onFocus = () => {
      input.type = type;
    };

    const onBlur = () => {
      input.type = "password";
    };

    input.addEventListener("focus", onFocus);
    input.addEventListener("blur", onBlur);
    return () => {
      input.removeEventListener("focus", onFocus);
      input.removeEventListener("blur", onBlur);
    };
  }, [type]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_InputField__WEBPACK_IMPORTED_MODULE_3__["InputField"], _objectSpread({
    ref: react_merge_refs__WEBPACK_IMPORTED_MODULE_2___default()([inputRef, ref]),
    type: "password"
  }, inputProps), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 5
  }, this);
}

const HiddenInputField = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(HiddenInputFieldRenderer);

/***/ }),

/***/ "./common/input/text/InputField.tsx":
/*!******************************************!*\
  !*** ./common/input/text/InputField.tsx ***!
  \******************************************/
/*! exports provided: InputField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputField", function() { return InputField; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layout_FlexContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../layout/FlexContainer */ "./common/layout/FlexContainer.ts");
/* harmony import */ var _error_InputError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../error/InputError */ "./common/input/error/InputError.tsx");
/* harmony import */ var _getLengthConstraintColor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../getLengthConstraintColor */ "./common/input/getLengthConstraintColor.ts");
/* harmony import */ var _layout_Input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../layout/Input */ "./common/input/layout/Input.ts");
/* harmony import */ var _layout_InputConstraint__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../layout/InputConstraint */ "./common/input/layout/InputConstraint.ts");
/* harmony import */ var _layout_InputContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../layout/InputContainer */ "./common/input/layout/InputContainer.ts");
/* harmony import */ var _layout_InputLabel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../layout/InputLabel */ "./common/input/layout/InputLabel.ts");

var _jsxFileName = "F:\\DiscordHookSite\\common\\input\\text\\InputField.tsx";









const TextInput = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_layout_Input__WEBPACK_IMPORTED_MODULE_6__["Input"]).withConfig({
  displayName: "InputField__TextInput",
  componentId: "sc-7tcyzw-0"
})(["", " > &{flex:1;}"], _layout_FlexContainer__WEBPACK_IMPORTED_MODULE_3__["FlexContainer"]);

function InputFieldRenderer(props, ref) {
  const {
    id,
    value,
    onChange: handleChange,
    label,
    hideLabel,
    type,
    rows,
    placeholder,
    maxLength,
    required,
    disabled,
    readOnly,
    error,
    className,
    onClick: handleClick,
    onFocus: handleFocus,
    onBlur: handleBlur,
    children
  } = props;

  const input = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TextInput, {
    ref: ref,
    as: rows ? "textarea" : "input",
    id: id,
    type: type,
    value: value,
    placeholder: placeholder,
    disabled: disabled,
    readOnly: readOnly,
    required: required,
    style: {
      height: rows ? 15 + 21 * rows : undefined
    },
    onChange: event => handleChange(event.target.value),
    onClick: handleClick,
    onFocus: handleFocus,
    onBlur: handleBlur,
    "aria-label": hideLabel ? label : undefined
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 68,
    columnNumber: 5
  }, this);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_layout_InputContainer__WEBPACK_IMPORTED_MODULE_8__["InputContainer"], {
    className: className,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_layout_InputLabel__WEBPACK_IMPORTED_MODULE_9__["InputLabel"], {
      children: [!hideLabel && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        htmlFor: id,
        children: label
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 24
      }, this), required && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_layout_InputConstraint__WEBPACK_IMPORTED_MODULE_7__["InputConstraint"], {
        state: "normal",
        children: "Required"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 22
      }, this), maxLength && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_layout_InputConstraint__WEBPACK_IMPORTED_MODULE_7__["InputConstraint"], {
        state: Object(_getLengthConstraintColor__WEBPACK_IMPORTED_MODULE_5__["getLengthConstraintColor"])(value.length, maxLength),
        children: [value.length, "/", maxLength]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }, this), Object.prototype.hasOwnProperty.call(props, "children") ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_layout_FlexContainer__WEBPACK_IMPORTED_MODULE_3__["FlexContainer"], {
      children: [input, children]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 9
    }, this) : input, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_error_InputError__WEBPACK_IMPORTED_MODULE_4__["InputError"], {
      error: error
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 88,
    columnNumber: 5
  }, this);
}

const InputField = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(InputFieldRenderer);

/***/ }),

/***/ "./common/input/timestamp/DatePicker.tsx":
/*!***********************************************!*\
  !*** ./common/input/timestamp/DatePicker.tsx ***!
  \***********************************************/
/*! exports provided: DatePicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatePicker", function() { return DatePicker; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "date-fns");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Clickable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Clickable */ "./common/input/Clickable.ts");
/* harmony import */ var _DayPicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DayPicker */ "./common/input/timestamp/DayPicker.tsx");
/* harmony import */ var _MonthYearPicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MonthYearPicker */ "./common/input/timestamp/MonthYearPicker.tsx");

var _jsxFileName = "F:\\DiscordHookSite\\common\\input\\timestamp\\DatePicker.tsx";






const Container = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "DatePicker__Container",
  componentId: "ycaoum-0"
})(["display:flex;flex-direction:column;width:260px;"]);
const Actions = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "DatePicker__Actions",
  componentId: "ycaoum-1"
})(["display:flex;justify-content:end;margin-bottom:12px;"]);
const Action = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_Clickable__WEBPACK_IMPORTED_MODULE_4__["Clickable"]).withConfig({
  displayName: "DatePicker__Action",
  componentId: "ycaoum-2"
})(["font-weight:500;color:", ";cursor:pointer;& + &{margin-left:16px;}&:focus{text-decoration:underline;}"], ({
  theme
}) => theme.interactive.active);
function DatePicker(props) {
  const {
    date,
    onChange: handleChange
  } = props;
  const {
    0: month,
    1: setMonth
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["startOfMonth"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["isValid"])(date) ? date : Date.now()));
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Container, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Actions, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Action, {
        onClick: () => {
          handleChange(Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["startOfMinute"])(Date.now()));
          setMonth(Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["startOfMonth"])(Date.now()));
        },
        children: "Today"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Action, {
        onClick: () => handleChange(new Date(Number.NaN)),
        children: "Clear"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_MonthYearPicker__WEBPACK_IMPORTED_MODULE_6__["MonthYearPicker"], {
      date: month,
      onChange: setMonth
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_DayPicker__WEBPACK_IMPORTED_MODULE_5__["DayPicker"], {
      date: date,
      onChange: handleChange,
      month: month
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./common/input/timestamp/DayPicker.tsx":
/*!**********************************************!*\
  !*** ./common/input/timestamp/DayPicker.tsx ***!
  \**********************************************/
/*! exports provided: DayPicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayPicker", function() { return DayPicker; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "date-fns");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "F:\\DiscordHookSite\\common\\input\\timestamp\\DayPicker.tsx";



const CalendarGrid = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "DayPicker__CalendarGrid",
  componentId: "sc-1dlmyoi-0"
})(["display:grid;grid-template-columns:repeat(7,1fr);margin-top:4px;"]);
const WeekdayCell = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "DayPicker__WeekdayCell",
  componentId: "sc-1dlmyoi-1"
})(["display:flex;align-items:center;justify-content:center;margin:2px;cursor:default;font-size:12px;text-transform:uppercase;"]);
const DayCell = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "DayPicker__DayCell",
  componentId: "sc-1dlmyoi-2"
})(["display:flex;align-items:center;justify-content:center;height:24px;margin:2px;background:", ";border-radius:4px;cursor:default;font-size:16px;", ";", ";"], ({
  theme
}) => theme.background.tertiary, ({
  muted
}) => muted && Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["css"])(["color:", ";"], ({
  theme
}) => theme.interactive.muted), ({
  selected
}) => selected && Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["css"])(["background:", ";"], ({
  theme
}) => theme.background.secondary));
function DayPicker(props) {
  const {
    date,
    onChange: handleChange,
    month: monthDate
  } = props;
  const month = Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["startOfMonth"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["isValid"])(monthDate) ? monthDate !== null && monthDate !== void 0 ? monthDate : 0 : Date.now());
  const firstDay = Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["isSunday"])(month) ? Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["subWeeks"])(month, 1) : Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["startOfWeek"])(month);
  const days = new Array(7 * 6).fill(0).map((_, days) => Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["set"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["addDays"])(firstDay, days), {
    hours: Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["getHours"])(date) || 0,
    minutes: Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["getMinutes"])(date) || 0,
    seconds: Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["getSeconds"])(date) || 0,
    milliseconds: Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["getMilliseconds"])(date) || 0
  }));
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CalendarGrid, {
    children: [["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(weekday => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(WeekdayCell, {
      children: weekday
    }, weekday, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }, this)), days.map(day => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(DayCell, {
      muted: !Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["isSameMonth"])(month, day),
      selected: Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["isSameDay"])(date, day),
      onClick: () => handleChange(day),
      children: Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["getDate"])(day)
    }, `${Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["getMonth"])(day)}-${Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["getDate"])(day)}`, false, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }, this))]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 91,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./common/input/timestamp/MonthYearPicker.tsx":
/*!****************************************************!*\
  !*** ./common/input/timestamp/MonthYearPicker.tsx ***!
  \****************************************************/
/*! exports provided: MonthYearPicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonthYearPicker", function() { return MonthYearPicker; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "date-fns");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _icons_chevron__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../icons/chevron */ "./icons/chevron.tsx");
/* harmony import */ var _layout_Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../layout/Icon */ "./common/layout/Icon.ts");

var _jsxFileName = "F:\\DiscordHookSite\\common\\input\\timestamp\\MonthYearPicker.tsx";





const Container = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "MonthYearPicker__Container",
  componentId: "sc-1toclaz-0"
})(["width:100%;margin-bottom:8px;display:flex;justify-content:center;align-items:center;"]);
const CycleMonthButton = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_layout_Icon__WEBPACK_IMPORTED_MODULE_5__["Icon"]).withConfig({
  displayName: "MonthYearPicker__CycleMonthButton",
  componentId: "sc-1toclaz-1"
})(["", ";"], ({
  disabled
}) => disabled && Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["css"])(["color:", ";"], ({
  theme
}) => theme.interactive.muted));
const MonthYearDisplay = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "MonthYearPicker__MonthYearDisplay",
  componentId: "sc-1toclaz-2"
})(["margin:auto;font-size:16px;text-align:center;"]);
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
function MonthYearPicker(props) {
  const {
    date,
    onChange: handleChange
  } = props;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Container, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CycleMonthButton, {
      disabled: !Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["isValid"])(date),
      onClick: () => {
        if (Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["isValid"])(date)) handleChange(Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["subMonths"])(date, 1));
      },
      children: _icons_chevron__WEBPACK_IMPORTED_MODULE_4__["chevronLeft"]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MonthYearDisplay, {
      children: Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["isValid"])(date) ? `${months[Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["getMonth"])(date)]} ${Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["getYear"])(date)}` : "Unknown"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CycleMonthButton, {
      disabled: !Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["isValid"])(date),
      onClick: () => {
        if (Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["isValid"])(date)) handleChange(Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["addMonths"])(date, 1));
      },
      children: _icons_chevron__WEBPACK_IMPORTED_MODULE_4__["chevronRight"]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./common/input/timestamp/TimestampInputField.tsx":
/*!********************************************************!*\
  !*** ./common/input/timestamp/TimestampInputField.tsx ***!
  \********************************************************/
/*! exports provided: TimestampInputField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimestampInputField", function() { return TimestampInputField; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "date-fns");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _popover_PopoverContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../popover/PopoverContainer */ "./common/popover/PopoverContainer.ts");
/* harmony import */ var _popover_usePopover__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../popover/usePopover */ "./common/popover/usePopover.tsx");
/* harmony import */ var _text_InputField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../text/InputField */ "./common/input/text/InputField.tsx");
/* harmony import */ var _DatePicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DatePicker */ "./common/input/timestamp/DatePicker.tsx");
/* harmony import */ var _getDateTimeString__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./getDateTimeString */ "./common/input/timestamp/getDateTimeString.ts");

var _jsxFileName = "F:\\DiscordHookSite\\common\\input\\timestamp\\TimestampInputField.tsx";







const TIMESTAMP_FORMAT_RE = /^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2})$/;
function TimestampInputField(props) {
  const {
    id,
    value,
    onChange: handleChange,
    label
  } = props;
  const {
    0: input,
    1: setInput
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(() => {
    var _getDateTimeString;

    return (_getDateTimeString = Object(_getDateTimeString__WEBPACK_IMPORTED_MODULE_7__["getDateTimeString"])(value)) !== null && _getDateTimeString !== void 0 ? _getDateTimeString : "";
  });
  const lastDateRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(value.getTime());
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    // Object.is considers NaN to be equal to NaN
    if (!Object.is(lastDateRef.current, Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["getTime"])(value))) {
      var _getDateTimeString2;

      setInput((_getDateTimeString2 = Object(_getDateTimeString__WEBPACK_IMPORTED_MODULE_7__["getDateTimeString"])(value)) !== null && _getDateTimeString2 !== void 0 ? _getDateTimeString2 : "");
    }

    lastDateRef.current = Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["getTime"])(value);
  }, [value]);

  const handleInputChange = value => {
    setInput(value);

    if (!value) {
      handleChange(new Date(Number.NaN));
      return;
    }

    const match = TIMESTAMP_FORMAT_RE.exec(value);
    if (!match) return;
    const [, year, month, day, hours, minutes] = match;
    handleChange(new Date(Number(year), Number(month) - 1, Number(day), Number(hours), Number(minutes)));
  };

  const inputRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  const popover = Object(_popover_usePopover__WEBPACK_IMPORTED_MODULE_4__["usePopover"])({
    ref: inputRef,
    render: () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_popover_PopoverContainer__WEBPACK_IMPORTED_MODULE_3__["PopoverContainer"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_DatePicker__WEBPACK_IMPORTED_MODULE_6__["DatePicker"], {
        date: value,
        onChange: handleChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, this),
    placement: "bottom-start",
    shards: [inputRef]
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_text_InputField__WEBPACK_IMPORTED_MODULE_5__["InputField"], {
    ref: inputRef,
    id: id,
    value: input,
    label: label,
    placeholder: "YYYY-MM-DD hh:mm",
    error: input && !TIMESTAMP_FORMAT_RE.test(input) ? "Invalid date format" : undefined,
    onChange: handleInputChange,
    onClick: () => {
      popover.spawn();
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 70,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./common/input/timestamp/getDateTimeString.ts":
/*!*****************************************************!*\
  !*** ./common/input/timestamp/getDateTimeString.ts ***!
  \*****************************************************/
/*! exports provided: getDateTimeString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDateTimeString", function() { return getDateTimeString; });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "date-fns");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_0__);

const getDateTimeString = date => {
  if (!Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["isValid"])(date)) {
    return;
  }

  const day = [Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["getYear"])(date), String(Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["getMonth"])(date) + 1).padStart(2, "0"), String(Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["getDate"])(date)).padStart(2, "0")].join("-");
  const time = [String(Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["getHours"])(date)).padStart(2, "0"), String(Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["getMinutes"])(date)).padStart(2, "0")].join(":");
  return `${day} ${time}`;
};

/***/ }),

/***/ "./common/layout/ActionButtons.tsx":
/*!*****************************************!*\
  !*** ./common/layout/ActionButtons.tsx ***!
  \*****************************************/
/*! exports provided: ActionButtons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionButtons", function() { return ActionButtons; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _icons_overflow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../icons/overflow */ "./icons/overflow.tsx");
/* harmony import */ var _popover_usePopover__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../popover/usePopover */ "./common/popover/usePopover.tsx");
/* harmony import */ var _ActionOverflowMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ActionOverflowMenu */ "./common/layout/ActionOverflowMenu.tsx");
/* harmony import */ var _IconButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./IconButton */ "./common/layout/IconButton.tsx");

var _jsxFileName = "F:\\DiscordHookSite\\common\\layout\\ActionButtons.tsx";






const Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "ActionButtons__Container",
  componentId: "sc-119c5qa-0"
})(["display:flex;justify-content:end;margin:0 -8px;"]);
function ActionButtons(props) {
  const {
    actions
  } = props;
  const overflowActions = actions.filter(action => action.overflow);
  const moreRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  const popover = Object(_popover_usePopover__WEBPACK_IMPORTED_MODULE_4__["usePopover"])({
    ref: moreRef,
    render: () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ActionOverflowMenu__WEBPACK_IMPORTED_MODULE_5__["ActionOverflowMenu"], {
      actions: overflowActions
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 19
    }, this),
    placement: "bottom-end"
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Container, {
    children: [actions.map(action => !action.overflow && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_IconButton__WEBPACK_IMPORTED_MODULE_6__["IconButton"], {
      icon: action.icon,
      label: action.label,
      onClick: () => action.handler()
    }, action.label, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }, this)), overflowActions.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_IconButton__WEBPACK_IMPORTED_MODULE_6__["IconButton"], {
      ref: moreRef,
      icon: _icons_overflow__WEBPACK_IMPORTED_MODULE_3__["overflow"],
      label: "More actions",
      tooltip: false,
      onClick: () => popover.spawn()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./common/layout/ActionOverflowMenu.tsx":
/*!**********************************************!*\
  !*** ./common/layout/ActionOverflowMenu.tsx ***!
  \**********************************************/
/*! exports provided: ActionOverflowMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionOverflowMenu", function() { return ActionOverflowMenu; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_spring_web__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-spring/web */ "@react-spring/web");
/* harmony import */ var _react_spring_web__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_react_spring_web__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _dom_useMeasure__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dom/useMeasure */ "./common/dom/useMeasure.ts");
/* harmony import */ var _input_Interactive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../input/Interactive */ "./common/input/Interactive.ts");
/* harmony import */ var _popover_PopoverContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../popover/PopoverContext */ "./common/popover/PopoverContext.ts");
/* harmony import */ var _popover_PopoverManagerContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../popover/PopoverManagerContext */ "./common/popover/PopoverManagerContext.ts");
/* harmony import */ var _state_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../state/useIsomorphicLayoutEffect */ "./common/state/useIsomorphicLayoutEffect.ts");

var _jsxFileName = "F:\\DiscordHookSite\\common\\layout\\ActionOverflowMenu.tsx";








const Container = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_react_spring_web__WEBPACK_IMPORTED_MODULE_1__["animated"].div).withConfig({
  displayName: "ActionOverflowMenu__Container",
  componentId: "y5sqkf-0"
})(["overflow:hidden;background:", ";border:1px solid ", ";border-radius:4px;box-shadow:", ";"], ({
  theme
}) => theme.background.primary, ({
  theme
}) => theme.background.secondary, ({
  theme
}) => theme.elavation.high);
const List = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.ul.withConfig({
  displayName: "ActionOverflowMenu__List",
  componentId: "y5sqkf-1"
})(["padding:0;margin:0;&::before,&::after{content:\"\";display:block;height:8px;}"]);
const Item = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.li.withConfig({
  displayName: "ActionOverflowMenu__Item",
  componentId: "y5sqkf-2"
})(["list-style:none;"]);
const Content = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_input_Interactive__WEBPACK_IMPORTED_MODULE_5__["Interactive"]).withConfig({
  displayName: "ActionOverflowMenu__Content",
  componentId: "y5sqkf-3"
})(["width:100%;padding:8px 15px;display:flex;font-weight:500;"]);
const Icon = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "ActionOverflowMenu__Icon",
  componentId: "y5sqkf-4"
})(["margin-right:16px;& > svg{display:block;}"]);
function ActionOverflowMenu(props) {
  const {
    actions
  } = props;
  const [listRef, {
    height
  }] = Object(_dom_useMeasure__WEBPACK_IMPORTED_MODULE_4__["useMeasure"])();
  const style = Object(_react_spring_web__WEBPACK_IMPORTED_MODULE_1__["useSpring"])({
    height
  });
  const manager = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_popover_PopoverManagerContext__WEBPACK_IMPORTED_MODULE_7__["PopoverManagerContext"]);
  const popover = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_popover_PopoverContext__WEBPACK_IMPORTED_MODULE_6__["PopoverContext"]);
  const containerRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  Object(_state_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_8__["useIsomorphicLayoutEffect"])(() => {
    const {
      current: container
    } = containerRef;
    if (!container) return;
    container.scrollTop = 1;
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Container, {
    ref: containerRef,
    style: style,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(List, {
      ref: listRef,
      children: actions.map(action => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Item, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Content, {
          onClick: () => {
            action.handler();

            if (manager && popover) {
              manager.dismiss(popover.name);
            }
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Icon, {
            "aria-hidden": true,
            children: action.icon
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 15
          }, this), action.label]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 13
        }, this)
      }, action.label, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 11
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 78,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./common/layout/ButtonList.tsx":
/*!**************************************!*\
  !*** ./common/layout/ButtonList.tsx ***!
  \**************************************/
/*! exports provided: ButtonList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonList", function() { return ButtonList; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const ButtonList = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ButtonList",
  componentId: "s4tkdn-0"
})(["display:flex;flex-flow:wrap;margin-bottom:-8px;& > *{margin-right:12px;margin-bottom:8px;}"]);

/***/ }),

/***/ "./common/layout/ButtonRow.ts":
/*!************************************!*\
  !*** ./common/layout/ButtonRow.ts ***!
  \************************************/
/*! exports provided: ButtonRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonRow", function() { return ButtonRow; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const ButtonRow = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ButtonRow",
  componentId: "sc-1a449yw-0"
})(["display:grid;grid-auto-columns:max-content;grid-auto-flow:column;column-gap:12px;"]);

/***/ }),

/***/ "./common/layout/FlexContainer.ts":
/*!****************************************!*\
  !*** ./common/layout/FlexContainer.ts ***!
  \****************************************/
/*! exports provided: FlexContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlexContainer", function() { return FlexContainer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const FlexContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "FlexContainer",
  componentId: "sc-1etam5u-0"
})(["display:flex;"]);

/***/ }),

/***/ "./common/layout/Icon.ts":
/*!*******************************!*\
  !*** ./common/layout/Icon.ts ***!
  \*******************************/
/*! exports provided: Icon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return Icon; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Icon = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Icon",
  componentId: "sc-2r5bc6-0"
})(["padding:8px;margin:-8px 0;align-self:baseline;& > svg{display:block;}"]);

/***/ }),

/***/ "./common/layout/IconButton.tsx":
/*!**************************************!*\
  !*** ./common/layout/IconButton.tsx ***!
  \**************************************/
/*! exports provided: IconButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconButton", function() { return IconButton; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _input_Interactive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../input/Interactive */ "./common/input/Interactive.ts");
/* harmony import */ var _tooltip_TooltipWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tooltip/TooltipWrapper */ "./common/tooltip/TooltipWrapper.tsx");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Icon */ "./common/layout/Icon.ts");
/* harmony import */ var _VisuallyHidden__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./VisuallyHidden */ "./common/layout/VisuallyHidden.ts");

var _jsxFileName = "F:\\DiscordHookSite\\common\\layout\\IconButton.tsx";






function IconButtonRenderer(props, ref) {
  const {
    icon,
    label,
    className,
    tooltip = true,
    onClick: handleClick
  } = props;

  const render = anchorRef => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_input_Interactive__WEBPACK_IMPORTED_MODULE_2__["Interactive"], {
      className: className,
      ref: ref,
      onClick: handleClick,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_VisuallyHidden__WEBPACK_IMPORTED_MODULE_5__["VisuallyHidden"], {
        children: label
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Icon__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
        ref: anchorRef,
        "aria-hidden": true,
        children: icon
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, this);
  };

  return tooltip ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_tooltip_TooltipWrapper__WEBPACK_IMPORTED_MODULE_3__["TooltipWrapper"], {
    label: label,
    children: render
  }, label, false, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 5
  }, this) : render();
}

const IconButton = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(IconButtonRenderer);

/***/ }),

/***/ "./common/layout/RowContainer.ts":
/*!***************************************!*\
  !*** ./common/layout/RowContainer.ts ***!
  \***************************************/
/*! exports provided: RowContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RowContainer", function() { return RowContainer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const RowContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "RowContainer",
  componentId: "sc-10c0k2j-0"
})(["display:grid;grid-template-columns:repeat(auto-fit,minmax(min(250px,100%),1fr));gap:12px;"]);

/***/ }),

/***/ "./common/layout/Section.tsx":
/*!***********************************!*\
  !*** ./common/layout/Section.tsx ***!
  \***********************************/
/*! exports provided: Section */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Section", function() { return Section; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_spring_web__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-spring/web */ "@react-spring/web");
/* harmony import */ var _react_spring_web__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_react_spring_web__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _icons_chevron__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../icons/chevron */ "./icons/chevron.tsx");
/* harmony import */ var _icons_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../icons/error */ "./icons/error.tsx");
/* harmony import */ var _dom_useMeasure__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../dom/useMeasure */ "./common/dom/useMeasure.ts");
/* harmony import */ var _settings_usePreference__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../settings/usePreference */ "./common/settings/usePreference.ts");
/* harmony import */ var _state_usePrevious__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../state/usePrevious */ "./common/state/usePrevious.ts");
/* harmony import */ var _ActionButtons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ActionButtons */ "./common/layout/ActionButtons.tsx");
/* harmony import */ var _breakpoints__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./breakpoints */ "./common/layout/breakpoints.ts");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Icon */ "./common/layout/Icon.ts");
/* harmony import */ var _IconButton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./IconButton */ "./common/layout/IconButton.tsx");

var _jsxFileName = "F:\\DiscordHookSite\\common\\layout\\Section.tsx";














const Container = styled_components__WEBPACK_IMPORTED_MODULE_5___default()(_react_spring_web__WEBPACK_IMPORTED_MODULE_1__["animated"].section).withConfig({
  displayName: "Section__Container",
  componentId: "sc-16nv4v-0"
})(["display:flex;", ";", ";"], ({
  variant
}) => (variant === "normal" || variant === "indented") && Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["css"])(["margin:-8px;padding:0 8px;"]), ({
  variant
}) => variant === "large" && Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["css"])(["border-radius:4px;box-shadow:", ";"], ({
  theme
}) => theme.elavation.medium));
const ColorPreview = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "Section__ColorPreview",
  componentId: "sc-16nv4v-1"
})(["width:4px;"]);
const SectionContent = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "Section__SectionContent",
  componentId: "sc-16nv4v-2"
})(["flex:1;", ";"], ({
  variant
}) => variant === "large" && Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["css"])(["border:1px solid ", ";border-left:none;padding:15px;border-radius:0 4px 4px 0;"], ({
  theme
}) => theme.background.secondaryAlt));
const Header = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "Section__Header",
  componentId: "sc-16nv4v-3"
})(["display:grid;grid-template-columns:1fr max-content;height:32px;", ""], ({
  variant
}) => variant === "large" && Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["css"])(["margin:-8px 0;"]));
const HeaderContent = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "Section__HeaderContent",
  componentId: "sc-16nv4v-4"
})(["min-width:0;height:100%;display:flex;align-items:center;"]);
const CollapseIcon = styled_components__WEBPACK_IMPORTED_MODULE_5___default()(_IconButton__WEBPACK_IMPORTED_MODULE_14__["IconButton"]).withConfig({
  displayName: "Section__CollapseIcon",
  componentId: "sc-16nv4v-5"
})(["margin-left:-8px;transform:rotate(90deg);transition:transform 150ms;", ";"], ({
  open
}) => open && Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["css"])(["transform:rotate(180deg);"]));
const Title = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.h2.withConfig({
  displayName: "Section__Title",
  componentId: "sc-16nv4v-6"
})(["", ";margin:-8px 0;padding:8px 0;font-size:16px;font-weight:500;color:", ";user-select:none;", ";"], Object(polished__WEBPACK_IMPORTED_MODULE_3__["ellipsis"])(), ({
  theme
}) => theme.header.secondary, ({
  variant
}) => variant === "large" && Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["css"])(["font-size:18px;line-height:16px;color:", ";"], ({
  theme
}) => theme.header.primary));
const ValidationError = styled_components__WEBPACK_IMPORTED_MODULE_5___default()(_react_spring_web__WEBPACK_IMPORTED_MODULE_1__["animated"].div).withConfig({
  displayName: "Section__ValidationError",
  componentId: "sc-16nv4v-7"
})(["color:", ";margin-right:8px;"], ({
  theme
}) => theme.accent.danger);
const Content = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "Section__Content",
  componentId: "sc-16nv4v-8"
})(["&:not(:empty){padding-top:", "px;padding-bottom:", "px;", "}"], ({
  variant
}) => variant === "large" ? 16 : 8, ({
  variant
}) => variant === "large" ? 0 : 8, ({
  variant
}) => variant === "indented" && Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["css"])(["padding-left:24px;", "{padding-left:12px;}"], _breakpoints__WEBPACK_IMPORTED_MODULE_12__["SCREEN_TINY"]));
function Section(props) {
  const {
    children,
    name,
    variant = "normal",
    actions,
    color,
    hasError = false
  } = props;
  const expandSections = Object(_settings_usePreference__WEBPACK_IMPORTED_MODULE_9__["usePreference"])("expandSections");
  const containerRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);
  const {
    0: open,
    1: setOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(expandSections);
  const previousOpen = Object(_state_usePrevious__WEBPACK_IMPORTED_MODULE_10__["usePrevious"])(open);
  const {
    0: visible,
    1: setVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(open);
  const frameRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(() => {
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  const toggleOpen = force => {
    frameRef.current = requestAnimationFrame(() => {
      setVisible(true);
      frameRef.current = requestAnimationFrame(() => {
        setOpen(force !== null && force !== void 0 ? force : open => !open);
      });
    });
  };

  const previousExpandSections = Object(_state_usePrevious__WEBPACK_IMPORTED_MODULE_10__["usePrevious"])(expandSections);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(() => {
    if (previousExpandSections !== expandSections && open !== expandSections) {
      toggleOpen(expandSections);
    }
  }, [expandSections, open, previousExpandSections]);
  const [ref, {
    height: contentHeight
  }] = Object(_dom_useMeasure__WEBPACK_IMPORTED_MODULE_8__["useMeasure"])();
  const style = Object(_react_spring_web__WEBPACK_IMPORTED_MODULE_1__["useSpring"])({
    config: {
      tension: 250,
      clamp: true
    },
    height: (variant === "large" ? 48 : 32) + (open ? contentHeight + 16 : 0),
    onRest: () => setVisible(open)
  });
  const errorStyle = Object(_react_spring_web__WEBPACK_IMPORTED_MODULE_1__["useSpring"])({
    config: {
      tension: 300,
      clamp: true
    },
    opacity: Number(hasError)
  });
  const theme = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["useTheme"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Container, {
    variant: variant,
    ref: containerRef,
    style: {
      overflow: "hidden",
      height: open && previousOpen ? "auto" : style.height
    },
    children: [color && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__["Observer"], {
      children: () => {
        var _color$hex;

        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ColorPreview, {
          style: {
            backgroundColor: (_color$hex = color.hex) !== null && _color$hex !== void 0 ? _color$hex : theme.background.secondaryAlt
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 211,
          columnNumber: 13
        }, this);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SectionContent, {
      variant: variant,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Header, {
        variant: variant,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(HeaderContent, {
          onClick: () => toggleOpen(),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CollapseIcon, {
            open: open,
            icon: _icons_chevron__WEBPACK_IMPORTED_MODULE_6__["chevron"],
            label: `${open ? "Collapse" : "Expand"} ${name}`,
            tooltip: false
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 222,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Title, {
            variant: variant,
            children: name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 228,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ValidationError, {
            style: errorStyle,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Icon__WEBPACK_IMPORTED_MODULE_13__["Icon"], {
              children: _icons_error__WEBPACK_IMPORTED_MODULE_7__["error"]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 230,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 229,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 221,
          columnNumber: 11
        }, this), actions && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ActionButtons__WEBPACK_IMPORTED_MODULE_11__["ActionButtons"], {
          actions: actions
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 233,
          columnNumber: 23
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Content, {
        variant: variant,
        ref: ref,
        children: visible && children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 235,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 200,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./common/layout/Separator.ts":
/*!************************************!*\
  !*** ./common/layout/Separator.ts ***!
  \************************************/
/*! exports provided: Separator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Separator", function() { return Separator; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Separator = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Separator",
  componentId: "sc-13r9wx3-0"
})(["height:1px;background:", ";"], ({
  theme
}) => theme.backgroundModifier.accent);

/***/ }),

/***/ "./common/layout/Stack.ts":
/*!********************************!*\
  !*** ./common/layout/Stack.ts ***!
  \********************************/
/*! exports provided: Stack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stack", function() { return Stack; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Stack = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Stack",
  componentId: "sc-1b9nc0h-0"
})(["display:grid;gap:", ";align-items:start;"], ({
  gap = 0
}) => typeof gap === "number" ? `${gap}px` : gap);

/***/ }),

/***/ "./common/layout/VisuallyHidden.ts":
/*!*****************************************!*\
  !*** ./common/layout/VisuallyHidden.ts ***!
  \*****************************************/
/*! exports provided: VisuallyHidden */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisuallyHidden", function() { return VisuallyHidden; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const VisuallyHidden = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "VisuallyHidden",
  componentId: "sc-1cos5z-0"
})(["border:0 none;clip:rect(0,0,0,0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap;overflow-wrap:normal;"]);

/***/ }),

/***/ "./common/layout/breakpoints.ts":
/*!**************************************!*\
  !*** ./common/layout/breakpoints.ts ***!
  \**************************************/
/*! exports provided: SCREEN_TINY, SCREEN_NOT_TINY, SCREEN_SMALL, SCREEN_NOT_SMALL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCREEN_TINY", function() { return SCREEN_TINY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCREEN_NOT_TINY", function() { return SCREEN_NOT_TINY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCREEN_SMALL", function() { return SCREEN_SMALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCREEN_NOT_SMALL", function() { return SCREEN_NOT_SMALL; });
const SCREEN_TINY = "@media screen and (max-width: 512px)";
const SCREEN_NOT_TINY = "@media not screen and (max-width: 512px)";
const SCREEN_SMALL = "@media screen and (max-width: 1024px)";
const SCREEN_NOT_SMALL = "@media not screen and (max-width: 1024px)";

/***/ }),

/***/ "./common/layout/constants.ts":
/*!************************************!*\
  !*** ./common/layout/constants.ts ***!
  \************************************/
/*! exports provided: Z_INDEX_HEADER, Z_INDEX_MODALS, Z_INDEX_POPOVERS, Z_INDEX_TOOLTIPS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Z_INDEX_HEADER", function() { return Z_INDEX_HEADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Z_INDEX_MODALS", function() { return Z_INDEX_MODALS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Z_INDEX_POPOVERS", function() { return Z_INDEX_POPOVERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Z_INDEX_TOOLTIPS", function() { return Z_INDEX_TOOLTIPS; });
const Z_INDEX_HEADER = 10;
const Z_INDEX_MODALS = 20;
const Z_INDEX_POPOVERS = 30;
const Z_INDEX_TOOLTIPS = 40;

/***/ }),

/***/ "./common/modal/ModalContext.ts":
/*!**************************************!*\
  !*** ./common/modal/ModalContext.ts ***!
  \**************************************/
/*! exports provided: ModalContext, ModalProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalContext", function() { return ModalContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalProvider", function() { return ModalProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const ModalContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null);
ModalContext.displayName = "ModalContext";
const ModalProvider = ModalContext.Provider;

/***/ }),

/***/ "./common/modal/ModalManagerContext.tsx":
/*!**********************************************!*\
  !*** ./common/modal/ModalManagerContext.tsx ***!
  \**********************************************/
/*! exports provided: ModalManagerContext, ModalManagerProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalManagerContext", function() { return ModalManagerContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalManagerProvider", function() { return ModalManagerProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const ModalManagerContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null);
ModalManagerContext.displayName = "ModalManagerContext";
const ModalManagerProvider = ModalManagerContext.Provider;

/***/ }),

/***/ "./common/modal/layout/ModalAction.ts":
/*!********************************************!*\
  !*** ./common/modal/layout/ModalAction.ts ***!
  \********************************************/
/*! exports provided: ModalAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalAction", function() { return ModalAction; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layout_IconButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../layout/IconButton */ "./common/layout/IconButton.tsx");


const ModalAction = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_layout_IconButton__WEBPACK_IMPORTED_MODULE_1__["IconButton"]).attrs({
  tooltip: false
}).withConfig({
  displayName: "ModalAction",
  componentId: "iaphm-0"
})(["margin:0 -8px;"]);

/***/ }),

/***/ "./common/modal/layout/ModalBody.ts":
/*!******************************************!*\
  !*** ./common/modal/layout/ModalBody.ts ***!
  \******************************************/
/*! exports provided: ModalBody */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalBody", function() { return ModalBody; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const ModalBody = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ModalBody",
  componentId: "sc-1pu1k29-0"
})(["padding:0 16px 16px;"]);

/***/ }),

/***/ "./common/modal/layout/ModalContainer.ts":
/*!***********************************************!*\
  !*** ./common/modal/layout/ModalContainer.ts ***!
  \***********************************************/
/*! exports provided: ModalContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalContainer", function() { return ModalContainer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const ModalContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ModalContainer",
  componentId: "sc-115z7ea-0"
})(["width:500px;max-width:calc(100vw - 32px);max-height:calc(100vh - 32px);background:", ";border-radius:4px;"], ({
  theme
}) => theme.background.primary);

/***/ }),

/***/ "./common/modal/layout/ModalFooter.ts":
/*!********************************************!*\
  !*** ./common/modal/layout/ModalFooter.ts ***!
  \********************************************/
/*! exports provided: ModalFooter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalFooter", function() { return ModalFooter; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layout_ButtonRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../layout/ButtonRow */ "./common/layout/ButtonRow.ts");


const ModalFooter = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_layout_ButtonRow__WEBPACK_IMPORTED_MODULE_1__["ButtonRow"]).withConfig({
  displayName: "ModalFooter",
  componentId: "tpu7as-0"
})(["justify-content:end;background:", ";border-radius:0 0 4px 4px;padding:16px;"], ({
  theme
}) => theme.background.secondary);

/***/ }),

/***/ "./common/modal/layout/ModalHeader.ts":
/*!********************************************!*\
  !*** ./common/modal/layout/ModalHeader.ts ***!
  \********************************************/
/*! exports provided: ModalHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalHeader", function() { return ModalHeader; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const ModalHeader = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ModalHeader",
  componentId: "sc-181udal-0"
})(["margin:16px 16px 8px;display:flex;"]);

/***/ }),

/***/ "./common/modal/layout/ModalTitle.ts":
/*!*******************************************!*\
  !*** ./common/modal/layout/ModalTitle.ts ***!
  \*******************************************/
/*! exports provided: ModalTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalTitle", function() { return ModalTitle; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const ModalTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h4.withConfig({
  displayName: "ModalTitle",
  componentId: "sc-1m03zfn-0"
})(["color:", ";font-size:16px;font-weight:600;letter-spacing:0.3px;line-height:20px;flex:1;margin:0;"], ({
  theme
}) => theme.header.primary);

/***/ }),

/***/ "./common/object/mapKeys.ts":
/*!**********************************!*\
  !*** ./common/object/mapKeys.ts ***!
  \**********************************/
/*! exports provided: mapKeys */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapKeys", function() { return mapKeys; });
const isObject = value => typeof value === "object" && value !== null;

const mapKeys = (object, fn) => {
  if (Array.isArray(object)) {
    return object.map(value => isObject(value) ? mapKeys(value, fn) : value);
  }

  const result = {};

  for (const [key, value] of Object.entries(object)) {
    if (isObject(value)) {
      result[fn(key)] = mapKeys(value, fn);
    } else {
      result[fn(key)] = value;
    }
  }

  return result;
};

/***/ }),

/***/ "./common/object/parseJson.ts":
/*!************************************!*\
  !*** ./common/object/parseJson.ts ***!
  \************************************/
/*! exports provided: parseJson */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseJson", function() { return parseJson; });
const parseJson = json => {
  try {
    return {
      value: JSON.parse(json)
    };
  } catch (error) {
    const message = error.message.replace(/^JSON\.parse: /, "");
    return {
      error: message
    };
  }
};

/***/ }),

/***/ "./common/object/toSnakeCase.ts":
/*!**************************************!*\
  !*** ./common/object/toSnakeCase.ts ***!
  \**************************************/
/*! exports provided: toSnakeCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toSnakeCase", function() { return toSnakeCase; });
/* harmony import */ var _mapKeys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mapKeys */ "./common/object/mapKeys.ts");

const toSnakeCase = object => Object(_mapKeys__WEBPACK_IMPORTED_MODULE_0__["mapKeys"])(object, key => key.replace(/[A-Z]/g, match => `_${match.toLowerCase()}`));

/***/ }),

/***/ "./common/page/Footer.tsx":
/*!********************************!*\
  !*** ./common/page/Footer.tsx ***!
  \********************************/
/*! exports provided: Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return Footer; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _icons_logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../icons/logo */ "./icons/logo.tsx");

var _jsxFileName = "F:\\DiscordHookSite\\common\\page\\Footer.tsx";



const Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.footer.withConfig({
  displayName: "Footer__Container",
  componentId: "sc-1al5n2i-0"
})(["margin:16px;padding:96px 0;border-top:1px solid ", ";color:", ";font-size:16px;"], ({
  theme
}) => theme.backgroundModifier.accent, ({
  theme
}) => theme.interactive.normal);
const BrandContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Footer__BrandContainer",
  componentId: "sc-1al5n2i-1"
})(["display:flex;align-items:center;margin-bottom:16px;& > svg{color:", ";width:24px;height:24px;margin-right:16px;}"], ({
  theme
}) => theme.interactive.hover);
const BrandName = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.h4.withConfig({
  displayName: "Footer__BrandName",
  componentId: "sc-1al5n2i-2"
})(["margin:0;color:", ";font-size:21px;"], ({
  theme
}) => theme.interactive.hover);
const Tagline = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.p.withConfig({
  displayName: "Footer__Tagline",
  componentId: "sc-1al5n2i-3"
})(["margin:0 0 20px;line-height:1.375;"]);
const Info = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.p.withConfig({
  displayName: "Footer__Info",
  componentId: "sc-1al5n2i-4"
})(["margin:0 0 4px;line-height:1.375;"]);
const NavigationList = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Footer__NavigationList",
  componentId: "sc-1al5n2i-5"
})(["margin-bottom:4px;display:flex;flex-flow:wrap;"]);
const NavigationItem = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.a.withConfig({
  displayName: "Footer__NavigationItem",
  componentId: "sc-1al5n2i-6"
})(["margin:0 16px 8px 0;line-height:1.5;color:inherit;&:not(:disabled):hover{color:", ";}&:not(:disabled):focus{color:", ";}"], ({
  theme
}) => theme.interactive.hover, ({
  theme
}) => theme.interactive.active);
const LegalInfo = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.p.withConfig({
  displayName: "Footer__LegalInfo",
  componentId: "sc-1al5n2i-7"
})(["margin:0;font-size:11px;line-height:1.25;"]);
function Footer() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Container, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BrandContainer, {
      children: [_icons_logo__WEBPACK_IMPORTED_MODULE_3__["monochromeLogo"], /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BrandName, {
        children: "CoolBoy"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Tagline, {
      children: "Embed and Message handler by using Webhooks."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 79,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./common/page/Header.tsx":
/*!********************************!*\
  !*** ./common/page/Header.tsx ***!
  \********************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_spring_web__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-spring/web */ "@react-spring/web");
/* harmony import */ var _react_spring_web__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_react_spring_web__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _icons_logo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../icons/logo */ "./icons/logo.tsx");
/* harmony import */ var _icons_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../icons/menu */ "./icons/menu.tsx");
/* harmony import */ var _input_Clickable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../input/Clickable */ "./common/input/Clickable.ts");
/* harmony import */ var _layout_breakpoints__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../layout/breakpoints */ "./common/layout/breakpoints.ts");
/* harmony import */ var _layout_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../layout/constants */ "./common/layout/constants.ts");
/* harmony import */ var _layout_IconButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../layout/IconButton */ "./common/layout/IconButton.tsx");
/* harmony import */ var _HeaderItem__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./HeaderItem */ "./common/page/HeaderItem.tsx");
/* harmony import */ var _HeaderTabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./HeaderTabs */ "./common/page/HeaderTabs.tsx");

var _jsxFileName = "F:\\DiscordHookSite\\common\\page\\Header.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














const Container = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.header.withConfig({
  displayName: "Header__Container",
  componentId: "qebqlo-0"
})(["height:48px;min-height:48px;padding:0 4px;position:sticky;top:0;left:0;z-index:", ";border:solid transparent;border-width:1px 0;display:flex;align-items:center;box-shadow:", ";&::before{content:\"\";display:block;position:absolute;top:-1px;left:0;z-index:", ";width:100%;height:48px;background:", ";border-bottom:1px solid ", ";}& > *{z-index:", ";}"], _layout_constants__WEBPACK_IMPORTED_MODULE_10__["Z_INDEX_HEADER"], ({
  theme
}) => theme.elavation.medium, _layout_constants__WEBPACK_IMPORTED_MODULE_10__["Z_INDEX_HEADER"] + 2, ({
  theme
}) => theme.background.primary, ({
  theme
}) => theme.background.tertiary, _layout_constants__WEBPACK_IMPORTED_MODULE_10__["Z_INDEX_HEADER"] + 2);
const Logo = styled_components__WEBPACK_IMPORTED_MODULE_5___default()(_input_Clickable__WEBPACK_IMPORTED_MODULE_8__["Clickable"]).withConfig({
  displayName: "Header__Logo",
  componentId: "qebqlo-1"
})(["height:100%;padding:0 12px;& > svg{", ";display:block;}"], Object(polished__WEBPACK_IMPORTED_MODULE_3__["size"])(24));
const Navigation = styled_components__WEBPACK_IMPORTED_MODULE_5___default()(_react_spring_web__WEBPACK_IMPORTED_MODULE_1__["animated"].nav).withConfig({
  displayName: "Header__Navigation",
  componentId: "qebqlo-2"
})(["height:100%;display:flex;align-items:center;", "{width:100%;height:auto;position:absolute;left:0;top:47px;flex-direction:column;align-items:start;background:", ";box-shadow:", ";z-index:", ";}", "{z-index:", ";transform:none !important;}"], _layout_breakpoints__WEBPACK_IMPORTED_MODULE_9__["SCREEN_TINY"], ({
  theme
}) => theme.background.primary, ({
  theme
}) => theme.elavation.medium, _layout_constants__WEBPACK_IMPORTED_MODULE_10__["Z_INDEX_HEADER"] + 1, _layout_breakpoints__WEBPACK_IMPORTED_MODULE_9__["SCREEN_NOT_TINY"], _layout_constants__WEBPACK_IMPORTED_MODULE_10__["Z_INDEX_HEADER"] + 2);
const Dim = styled_components__WEBPACK_IMPORTED_MODULE_5___default()(_react_spring_web__WEBPACK_IMPORTED_MODULE_1__["animated"].div).withConfig({
  displayName: "Header__Dim",
  componentId: "qebqlo-3"
})(["position:fixed;width:100%;height:calc(100% - 48px);top:48px;right:0;bottom:0;left:0;background:rgb(0,0,0,0.35);z-index:", ";"], _layout_constants__WEBPACK_IMPORTED_MODULE_10__["Z_INDEX_HEADER"]);
const OverflowButton = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "Header__OverflowButton",
  componentId: "qebqlo-4"
})(["margin:0 8px;display:none;", "{display:block;}"], _layout_breakpoints__WEBPACK_IMPORTED_MODULE_9__["SCREEN_TINY"]);
function Header(props) {
  const {
    items,
    tabs
  } = props;
  const theme = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["useTheme"])();
  const {
    0: expanded,
    1: setExpanded
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false);
  const navigationStyle = Object(_react_spring_web__WEBPACK_IMPORTED_MODULE_1__["useSpring"])({
    y: expanded ? "calc(0% - 0px)" : "calc(-100% - 48px)"
  });
  const dimStyle = Object(_react_spring_web__WEBPACK_IMPORTED_MODULE_1__["useSpring"])({
    opacity: Number(expanded),
    pointerEvents: expanded ? "auto" : "none"
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Container, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Logo, {
        children: theme.appearance.color === "dark" ? _icons_logo__WEBPACK_IMPORTED_MODULE_6__["darkLogo"] : _icons_logo__WEBPACK_IMPORTED_MODULE_6__["lightLogo"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 7
    }, this), tabs && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_HeaderTabs__WEBPACK_IMPORTED_MODULE_13__["HeaderTabs"], _objectSpread({}, tabs), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 16
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Dim, {
      style: dimStyle,
      onClick: () => setExpanded(false)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Navigation, {
      style: navigationStyle,
      onClick: () => setExpanded(false),
      children: items.map(item => item.to !== undefined ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_HeaderItem__WEBPACK_IMPORTED_MODULE_12__["HeaderItem"], {
        to: item.to,
        newWindow: item.newWindow,
        children: item.name
      }, item.name, false, {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 13
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_HeaderItem__WEBPACK_IMPORTED_MODULE_12__["HeaderItem"], {
        onClick: () => item.handler(),
        children: item.name
      }, item.name, false, {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 13
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        flex: 1
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(OverflowButton, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_layout_IconButton__WEBPACK_IMPORTED_MODULE_11__["IconButton"], {
        icon: _icons_menu__WEBPACK_IMPORTED_MODULE_7__["menu"],
        label: "Overflow menu",
        tooltip: false,
        onClick: () => setExpanded(expanded => !expanded)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 150,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./common/page/HeaderItem.tsx":
/*!************************************!*\
  !*** ./common/page/HeaderItem.tsx ***!
  \************************************/
/*! exports provided: HeaderItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderItem", function() { return HeaderItem; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _input_Clickable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../input/Clickable */ "./common/input/Clickable.ts");
/* harmony import */ var _layout_breakpoints__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../layout/breakpoints */ "./common/layout/breakpoints.ts");

var _jsxFileName = "F:\\DiscordHookSite\\common\\page\\HeaderItem.tsx";





const Container = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_input_Clickable__WEBPACK_IMPORTED_MODULE_4__["Clickable"]).withConfig({
  displayName: "HeaderItem__Container",
  componentId: "sc-1y4hmuj-0"
})(["height:100%;padding:0 8px;margin:0 4px;display:flex;align-items:center;color:", ";font-size:15px;font-weight:600;text-align:center;position:relative;&:hover,&:focus{text-decoration:underline;}", "{height:48px;width:calc(100% - 24px);}"], ({
  theme
}) => theme.header.primary, _layout_breakpoints__WEBPACK_IMPORTED_MODULE_5__["SCREEN_TINY"]);
function HeaderItem(props) {
  const {
    children,
    to,
    newWindow = false,
    onClick: handleClick
  } = props;

  if (!to) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Container, {
      onClick: handleClick,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 12
    }, this);
  }

  const link = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Container, {
    as: "a",
    type: undefined,
    onClick: handleClick,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 5
  }, this);

  if (newWindow) {
    return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["cloneElement"])(link, {
      href: to,
      target: "_blank",
      rel: "noopener"
    });
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: to,
    passHref: true,
    children: link
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./common/page/HeaderTabs.tsx":
/*!************************************!*\
  !*** ./common/page/HeaderTabs.tsx ***!
  \************************************/
/*! exports provided: HeaderTabs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderTabs", function() { return HeaderTabs; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reach_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reach/tabs */ "@reach/tabs");
/* harmony import */ var _reach_tabs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reach_tabs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _input_Clickable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../input/Clickable */ "./common/input/Clickable.ts");

var _jsxFileName = "F:\\DiscordHookSite\\common\\page\\HeaderTabs.tsx";




const Container = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_reach_tabs__WEBPACK_IMPORTED_MODULE_1__["Tabs"]).withConfig({
  displayName: "HeaderTabs__Container",
  componentId: "woebn9-0"
})(["height:48px;"]);
const List = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_reach_tabs__WEBPACK_IMPORTED_MODULE_1__["TabList"]).withConfig({
  displayName: "HeaderTabs__List",
  componentId: "woebn9-1"
})(["height:100%;display:flex;align-items:center;background:none;"]);
const Item = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_input_Clickable__WEBPACK_IMPORTED_MODULE_4__["Clickable"]).attrs({
  as: _reach_tabs__WEBPACK_IMPORTED_MODULE_1__["Tab"]
}).withConfig({
  displayName: "HeaderTabs__Item",
  componentId: "woebn9-2"
})(["height:100%;padding:0 8px;margin:0 4px;display:flex;align-items:center;color:", ";font-size:15px;font-weight:600;text-align:center;position:relative;&:hover,&:focus{text-decoration:underline;}&[data-reach-tab][data-selected]::after{content:\"\";display:block;position:absolute;bottom:0;left:8px;width:calc(100% - 16px);height:4px;background:", ";border-radius:8px 8px 0 0;}&[data-reach-tab]:active{background:none;}&[data-reach-tab]:disabled{color:", ";}"], ({
  theme
}) => theme.header.primary, ({
  theme
}) => theme.accent.primary, ({
  theme
}) => theme.header.secondary);
function HeaderTabs(props) {
  const {
    items,
    current,
    onChange: handleChange
  } = props;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Container, {
    index: items.indexOf(current),
    onChange: index => handleChange(items[index]),
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(List, {
      children: items.map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Item, {
        children: item
      }, item, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 11
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 73,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./common/page/PageHead.tsx":
/*!**********************************!*\
  !*** ./common/page/PageHead.tsx ***!
  \**********************************/
/*! exports provided: PageHead */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageHead", function() { return PageHead; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "F:\\DiscordHookSite\\common\\page\\PageHead.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const links = [{
  rel: "shortcut icon",
  href: "/favicon.ico",
  sizes: "16x16 32x32",
  type: "image/x-icon"
}, [16, 32].map(size => ({
  rel: "icon",
  href: `/static/favicon-${size}.png`,
  sizes: `${size}x${size}`,
  type: "image/png"
})), {
  rel: "icon",
  href: "/static/favicon.svg",
  sizes: "any",
  type: "image/svg+xml"
}, [64, 96, 128, 192, 256].map(size => ({
  rel: "apple-touch-icon",
  href: `/static/icon-${size}.png`,
  sizes: `${size}x${size}`,
  type: "image/png"
})), {
  rel: "apple-touch-icon",
  href: "/static/icon.svg",
  sizes: "any",
  type: "image/svg+xml"
}, {
  rel: "mask-icon",
  href: "/static/mask-icon.svg",
  type: "image/svg+xml"
}, {
  rel: "manifest",
  href: "/static/manifest.webmanifest"
}].flat();
function PageHead(props) {
  const {
    title,
    description,
    children
  } = props;
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      charSet: "UTF-8"
    }, "charset", false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0"
    }, "viewport", false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
      children: title === "Discohook" ? title : `${title} • CB`
    }, "title", false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      name: "description",
      content: description
    }, "description", false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      property: "og:title",
      content: title
    }, "og:title", false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      property: "og:type",
      content: "website"
    }, "og:type", false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      property: "og:image",
      content: "/static/icon-256.png"
    }, "og:image", false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      property: "og:url",
      content: `https://discohook.org${router.pathname}`
    }, "og:url", false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      property: "og:description",
      content: description
    }, "og:description", false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      property: "og:site_name",
      content: "Discohook"
    }, "og:site_name", false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
      rel: "canonical",
      href: `https://discohook.org${router.pathname}`
    }, "canonical", false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }, this), links.map(link => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", _objectSpread({}, link), `${link.rel}:${link.href}`, false, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }, this)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      name: "application-name",
      content: "Discohook"
    }, "application-name", false, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      name: "theme-color",
      content: "#58b9ff"
    }, "theme-color", false, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      name: "color-scheme",
      content: "dark light"
    }, "color-scheme", false, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      name: "google",
      content: "notranslate"
    }, "google", false, {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 7
    }, this), children]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./common/popover/PopoverContainer.ts":
/*!********************************************!*\
  !*** ./common/popover/PopoverContainer.ts ***!
  \********************************************/
/*! exports provided: PopoverContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverContainer", function() { return PopoverContainer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const PopoverContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "PopoverContainer",
  componentId: "sc-1fyi9ei-0"
})(["max-width:calc(100vw - 48px);padding:16px;background:", ";border-radius:4px;box-shadow:", ";"], ({
  theme
}) => theme.background.floating, ({
  theme
}) => theme.elavation.high);

/***/ }),

/***/ "./common/popover/PopoverContext.ts":
/*!******************************************!*\
  !*** ./common/popover/PopoverContext.ts ***!
  \******************************************/
/*! exports provided: PopoverContext, PopoverProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverContext", function() { return PopoverContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverProvider", function() { return PopoverProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const PopoverContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null);
PopoverContext.displayName = "PopoverContext";
const PopoverProvider = PopoverContext.Provider;

/***/ }),

/***/ "./common/popover/PopoverManagerContext.ts":
/*!*************************************************!*\
  !*** ./common/popover/PopoverManagerContext.ts ***!
  \*************************************************/
/*! exports provided: PopoverManagerContext, PopoverManagerProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverManagerContext", function() { return PopoverManagerContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverManagerProvider", function() { return PopoverManagerProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const PopoverManagerContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null);
PopoverManagerContext.displayName = "PopoverManagerContext";
const PopoverManagerProvider = PopoverManagerContext.Provider;

/***/ }),

/***/ "./common/popover/usePopover.tsx":
/*!***************************************!*\
  !*** ./common/popover/usePopover.tsx ***!
  \***************************************/
/*! exports provided: usePopover */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePopover", function() { return usePopover; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _state_uid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state/uid */ "./common/state/uid.ts");
/* harmony import */ var _state_useRequiredContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state/useRequiredContext */ "./common/state/useRequiredContext.ts");
/* harmony import */ var _PopoverManagerContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PopoverManagerContext */ "./common/popover/PopoverManagerContext.ts");
/* eslint-disable unicorn/no-useless-undefined */




const usePopover = options => {
  const {
    ref,
    render,
    placement,
    shards = []
  } = options;
  const manager = Object(_state_useRequiredContext__WEBPACK_IMPORTED_MODULE_2__["useRequiredContext"])(_PopoverManagerContext__WEBPACK_IMPORTED_MODULE_3__["PopoverManagerContext"]);
  const {
    0: popoverName,
    1: setPopoverName
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();

  const spawn = () => {
    const {
      current: anchor
    } = ref;
    if (!anchor || popoverName) return;
    const name = `usePopover#${Object(_state_uid__WEBPACK_IMPORTED_MODULE_1__["getUniqueId"])()}`;
    setPopoverName(name);
    manager.spawn({
      name,
      placement,
      anchor,
      shards,
      render,
      onDismiss: () => setPopoverName(undefined)
    });
  };

  const dismiss = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    if (popoverName) {
      manager.dismiss(popoverName);
      setPopoverName(undefined);
    }
  }, [manager, popoverName]);

  const toggle = () => {
    if (popoverName) {
      dismiss();
    } else {
      spawn();
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (popoverName) {
      manager.update(popoverName, {
        placement,
        render
      });
    }
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => () => dismiss(), [dismiss]);
  return {
    active: Boolean(popoverName),
    dismiss,
    toggle,
    spawn
  };
};

/***/ }),

/***/ "./common/settings/PreferenceManagerContext.tsx":
/*!******************************************************!*\
  !*** ./common/settings/PreferenceManagerContext.tsx ***!
  \******************************************************/
/*! exports provided: PreferenceManagerContext, PreferenceManagerProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreferenceManagerContext", function() { return PreferenceManagerContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreferenceManagerProvider", function() { return PreferenceManagerProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const PreferenceManagerContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null);
PreferenceManagerContext.displayName = "PreferenceManagerContext";
const PreferenceManagerProvider = PreferenceManagerContext.Provider;

/***/ }),

/***/ "./common/settings/PreferencesModal.tsx":
/*!**********************************************!*\
  !*** ./common/settings/PreferencesModal.tsx ***!
  \**********************************************/
/*! exports provided: PreferencesModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreferencesModal", function() { return PreferencesModal; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _icons_remove__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../icons/remove */ "./icons/remove.tsx");
/* harmony import */ var _input_bindToInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../input/bindToInput */ "./common/input/bindToInput.ts");
/* harmony import */ var _input_button_PrimaryButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../input/button/PrimaryButton */ "./common/input/button/PrimaryButton.ts");
/* harmony import */ var _input_checkable_Checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../input/checkable/Checkbox */ "./common/input/checkable/Checkbox.tsx");
/* harmony import */ var _input_checkable_Radio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../input/checkable/Radio */ "./common/input/checkable/Radio.tsx");
/* harmony import */ var _input_checkable_RadioGroup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../input/checkable/RadioGroup */ "./common/input/checkable/RadioGroup.tsx");
/* harmony import */ var _input_slider_Slider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../input/slider/Slider */ "./common/input/slider/Slider.tsx");
/* harmony import */ var _layout_Stack__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../layout/Stack */ "./common/layout/Stack.ts");
/* harmony import */ var _modal_layout_ModalAction__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../modal/layout/ModalAction */ "./common/modal/layout/ModalAction.ts");
/* harmony import */ var _modal_layout_ModalBody__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../modal/layout/ModalBody */ "./common/modal/layout/ModalBody.ts");
/* harmony import */ var _modal_layout_ModalContainer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../modal/layout/ModalContainer */ "./common/modal/layout/ModalContainer.ts");
/* harmony import */ var _modal_layout_ModalFooter__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../modal/layout/ModalFooter */ "./common/modal/layout/ModalFooter.ts");
/* harmony import */ var _modal_layout_ModalHeader__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../modal/layout/ModalHeader */ "./common/modal/layout/ModalHeader.ts");
/* harmony import */ var _modal_layout_ModalTitle__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../modal/layout/ModalTitle */ "./common/modal/layout/ModalTitle.ts");
/* harmony import */ var _modal_ModalContext__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../modal/ModalContext */ "./common/modal/ModalContext.ts");
/* harmony import */ var _state_useRequiredContext__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../state/useRequiredContext */ "./common/state/useRequiredContext.ts");
/* harmony import */ var _theming_constants__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../theming/constants */ "./common/theming/constants.ts");
/* harmony import */ var _PreferenceManagerContext__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./PreferenceManagerContext */ "./common/settings/PreferenceManagerContext.tsx");

var _jsxFileName = "F:\\DiscordHookSite\\common\\settings\\PreferencesModal.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






















const PreferenceSection = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.h5.withConfig({
  displayName: "PreferencesModal__PreferenceSection",
  componentId: "sc-1l2xq6-0"
})(["margin:8px 0 4px;color:", ";font-weight:600;font-size:14px;"], ({
  theme
}) => theme.header.primary);
function PreferencesModal() {
  const modal = Object(_state_useRequiredContext__WEBPACK_IMPORTED_MODULE_19__["useRequiredContext"])(_modal_ModalContext__WEBPACK_IMPORTED_MODULE_18__["ModalContext"]);
  const settingsManager = Object(_state_useRequiredContext__WEBPACK_IMPORTED_MODULE_19__["useRequiredContext"])(_PreferenceManagerContext__WEBPACK_IMPORTED_MODULE_21__["PreferenceManagerContext"]);
  return Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__["useObserver"])(() => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_modal_layout_ModalContainer__WEBPACK_IMPORTED_MODULE_14__["ModalContainer"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_modal_layout_ModalHeader__WEBPACK_IMPORTED_MODULE_16__["ModalHeader"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_modal_layout_ModalTitle__WEBPACK_IMPORTED_MODULE_17__["ModalTitle"], {
        children: "Settings"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_modal_layout_ModalAction__WEBPACK_IMPORTED_MODULE_12__["ModalAction"], {
        icon: _icons_remove__WEBPACK_IMPORTED_MODULE_4__["remove"],
        label: "Close",
        onClick: () => modal.dismiss()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_modal_layout_ModalBody__WEBPACK_IMPORTED_MODULE_13__["ModalBody"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_layout_Stack__WEBPACK_IMPORTED_MODULE_11__["Stack"], {
        gap: 8,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PreferenceSection, {
          children: "Appearance"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_input_checkable_RadioGroup__WEBPACK_IMPORTED_MODULE_9__["RadioGroup"], _objectSpread(_objectSpread({
          id: "settings_color",
          label: "Color Theme"
        }, Object(_input_bindToInput__WEBPACK_IMPORTED_MODULE_5__["bindToInput"])(settingsManager.settings, "color")), {}, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_input_checkable_Radio__WEBPACK_IMPORTED_MODULE_8__["Radio"], {
            label: "Dark",
            value: "dark"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_input_checkable_Radio__WEBPACK_IMPORTED_MODULE_8__["Radio"], {
            label: "Light",
            value: "light"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 13
          }, this)]
        }), void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_input_checkable_RadioGroup__WEBPACK_IMPORTED_MODULE_9__["RadioGroup"], _objectSpread(_objectSpread({
          id: "settings_display",
          label: "Display Mode"
        }, Object(_input_bindToInput__WEBPACK_IMPORTED_MODULE_5__["bindToInput"])(settingsManager.settings, "display")), {}, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_input_checkable_Radio__WEBPACK_IMPORTED_MODULE_8__["Radio"], {
            label: "Cozy",
            value: "cozy"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_input_checkable_Radio__WEBPACK_IMPORTED_MODULE_8__["Radio"], {
            label: "Compact",
            value: "compact"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 13
          }, this)]
        }), void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_input_slider_Slider__WEBPACK_IMPORTED_MODULE_10__["Slider"], {
          id: "settings_fontSize",
          label: "Font Size",
          min: 0,
          max: 6,
          markers: _theming_constants__WEBPACK_IMPORTED_MODULE_20__["FONT_SIZES"].map((size, index) => ({
            value: index,
            label: String(size)
          })),
          getValueName: value => `${_theming_constants__WEBPACK_IMPORTED_MODULE_20__["FONT_SIZES"][value]} pixels`,
          value: _theming_constants__WEBPACK_IMPORTED_MODULE_20__["FONT_SIZES"].indexOf(settingsManager.settings.fontSize),
          onChange: index => {
            settingsManager.settings.fontSize = _theming_constants__WEBPACK_IMPORTED_MODULE_20__["FONT_SIZES"][index];
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PreferenceSection, {
          children: "Editor"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_input_checkable_Checkbox__WEBPACK_IMPORTED_MODULE_7__["Checkbox"], _objectSpread({
          id: "settings_confirmExit",
          label: "Confirm on Exit"
        }, Object(_input_bindToInput__WEBPACK_IMPORTED_MODULE_5__["bindToInput"])(settingsManager.settings, "confirmExit")), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_input_checkable_Checkbox__WEBPACK_IMPORTED_MODULE_7__["Checkbox"], _objectSpread({
          id: "settings_expandSections",
          label: "Expand Sections by Default"
        }, Object(_input_bindToInput__WEBPACK_IMPORTED_MODULE_5__["bindToInput"])(settingsManager.settings, "expandSections")), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_modal_layout_ModalFooter__WEBPACK_IMPORTED_MODULE_15__["ModalFooter"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_input_button_PrimaryButton__WEBPACK_IMPORTED_MODULE_6__["PrimaryButton"], {
        onClick: () => modal.dismiss(),
        children: "Close"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 5
  }, this));
}

/***/ }),

/***/ "./common/settings/usePreference.ts":
/*!******************************************!*\
  !*** ./common/settings/usePreference.ts ***!
  \******************************************/
/*! exports provided: usePreference */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePreference", function() { return usePreference; });
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _state_useRequiredContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state/useRequiredContext */ "./common/state/useRequiredContext.ts");
/* harmony import */ var _PreferenceManagerContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PreferenceManagerContext */ "./common/settings/PreferenceManagerContext.tsx");



const usePreference = key => {
  const preferenceManager = Object(_state_useRequiredContext__WEBPACK_IMPORTED_MODULE_1__["useRequiredContext"])(_PreferenceManagerContext__WEBPACK_IMPORTED_MODULE_2__["PreferenceManagerContext"]);
  return Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_0__["useObserver"])(() => preferenceManager.settings[key]);
};

/***/ }),

/***/ "./common/state/delay.ts":
/*!*******************************!*\
  !*** ./common/state/delay.ts ***!
  \*******************************/
/*! exports provided: delay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delay", function() { return delay; });
const delay = async (ms) => new Promise(resolve => {
  setTimeout(resolve, ms);
});

/***/ }),

/***/ "./common/state/nullableDate.ts":
/*!**************************************!*\
  !*** ./common/state/nullableDate.ts ***!
  \**************************************/
/*! exports provided: nullableDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nullableDate", function() { return nullableDate; });
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx-state-tree */ "mobx-state-tree");
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__);

const nullableDate = mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].custom({
  name: "NullableDate",

  fromSnapshot(value) {
    return new Date(value !== null && value !== void 0 ? value : Number.NaN);
  },

  toSnapshot(value) {
    const time = value.getTime();
    return Number.isNaN(time) ? null : time;
  },

  isTargetType(value) {
    return value instanceof Date;
  },

  getValidationMessage(value) {
    if (value instanceof Date) return "";
    if (typeof value === "number") return "";
    if (value === null) return "";
    return "Value is not a Date, a unix milliseconds timestamp, or null";
  }

});

/***/ }),

/***/ "./common/state/uid.ts":
/*!*****************************!*\
  !*** ./common/state/uid.ts ***!
  \*****************************/
/*! exports provided: getUniqueId, resetNextId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUniqueId", function() { return getUniqueId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetNextId", function() { return resetNextId; });
const server = true;
let nextId = server ? -1 : 1;
const getUniqueId = () => {
  try {
    return nextId;
  } finally {
    nextId += server ? -1 : 1;
  }
};
const resetNextId = (id = server ? -1 : 1) => {
  nextId = id;
};

/***/ }),

/***/ "./common/state/useAutorun.ts":
/*!************************************!*\
  !*** ./common/state/useAutorun.ts ***!
  \************************************/
/*! exports provided: useAutorun */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAutorun", function() { return useAutorun; });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "mobx");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const useAutorun = fn => {
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => Object(mobx__WEBPACK_IMPORTED_MODULE_0__["autorun"])(fn));
};

/***/ }),

/***/ "./common/state/useIsomorphicLayoutEffect.ts":
/*!***************************************************!*\
  !*** ./common/state/useIsomorphicLayoutEffect.ts ***!
  \***************************************************/
/*! exports provided: useIsomorphicLayoutEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useIsomorphicLayoutEffect", function() { return useIsomorphicLayoutEffect; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useIsomorphicLayoutEffect = false ? undefined : react__WEBPACK_IMPORTED_MODULE_0__["useEffect"];

/***/ }),

/***/ "./common/state/useLazyValue.ts":
/*!**************************************!*\
  !*** ./common/state/useLazyValue.ts ***!
  \**************************************/
/*! exports provided: useLazyValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLazyValue", function() { return useLazyValue; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const UNINITIALISED = Symbol("UNINITIALISED");
const useLazyValue = initializer => {
  const ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(UNINITIALISED);

  if (ref.current === UNINITIALISED) {
    ref.current = initializer();
  }

  return ref.current;
};

/***/ }),

/***/ "./common/state/usePrevious.ts":
/*!*************************************!*\
  !*** ./common/state/usePrevious.ts ***!
  \*************************************/
/*! exports provided: usePrevious */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePrevious", function() { return usePrevious; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const usePrevious = value => {
  const ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
};

/***/ }),

/***/ "./common/state/useReaction.ts":
/*!*************************************!*\
  !*** ./common/state/useReaction.ts ***!
  \*************************************/
/*! exports provided: useReaction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReaction", function() { return useReaction; });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "mobx");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const useReaction = (expression, effect) => {
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => Object(mobx__WEBPACK_IMPORTED_MODULE_0__["reaction"])(expression, effect));
};

/***/ }),

/***/ "./common/state/useRequiredContext.ts":
/*!********************************************!*\
  !*** ./common/state/useRequiredContext.ts ***!
  \********************************************/
/*! exports provided: useRequiredContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRequiredContext", function() { return useRequiredContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useRequiredContext = context => {
  const value = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(context);

  if (value == null) {
    var _context$displayName;

    const displayName = (_context$displayName = context.displayName) !== null && _context$displayName !== void 0 ? _context$displayName : "(unknown context)";
    throw new Error(`${displayName} is not available in the component tree.`);
  }

  return value;
};

/***/ }),

/***/ "./common/theming/commonTheme.ts":
/*!***************************************!*\
  !*** ./common/theming/commonTheme.ts ***!
  \***************************************/
/*! exports provided: COMMON_THEME */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMMON_THEME", function() { return COMMON_THEME; });
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_0__);

const COMMON_THEME = {
  discord: {
    primary: Object(polished__WEBPACK_IMPORTED_MODULE_0__["rgb"])(88, 101, 242),
    success: Object(polished__WEBPACK_IMPORTED_MODULE_0__["rgb"])(67, 181, 129),
    warning: Object(polished__WEBPACK_IMPORTED_MODULE_0__["rgb"])(250, 166, 26),
    danger: Object(polished__WEBPACK_IMPORTED_MODULE_0__["rgb"])(240, 71, 71)
  },
  font: {
    sans: ["Whitney", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"].join(),
    mono: ["Consolas", "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Monaco", "Courier New", "Courier", "monospace"].join()
  }
};

/***/ }),

/***/ "./common/theming/constants.ts":
/*!*************************************!*\
  !*** ./common/theming/constants.ts ***!
  \*************************************/
/*! exports provided: COLOR_THEMES, DISPLAY_THEMES, FONT_SIZES, THEMES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLOR_THEMES", function() { return COLOR_THEMES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DISPLAY_THEMES", function() { return DISPLAY_THEMES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FONT_SIZES", function() { return FONT_SIZES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THEMES", function() { return THEMES; });
/* harmony import */ var _darkTheme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./darkTheme */ "./common/theming/darkTheme.ts");
/* harmony import */ var _lightTheme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lightTheme */ "./common/theming/lightTheme.ts");


const COLOR_THEMES = ["dark", "light"];
const DISPLAY_THEMES = ["cozy", "compact"];
const FONT_SIZES = [12, 14, 15, 16, 18, 20, 24];
const THEMES = {
  dark: _darkTheme__WEBPACK_IMPORTED_MODULE_0__["DARK_THEME"],
  light: _lightTheme__WEBPACK_IMPORTED_MODULE_1__["LIGHT_THEME"]
};

/***/ }),

/***/ "./common/theming/darkTheme.ts":
/*!*************************************!*\
  !*** ./common/theming/darkTheme.ts ***!
  \*************************************/
/*! exports provided: DARK_THEME */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DARK_THEME", function() { return DARK_THEME; });
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _commonTheme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commonTheme */ "./common/theming/commonTheme.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const DARK_THEME = _objectSpread(_objectSpread({}, _commonTheme__WEBPACK_IMPORTED_MODULE_1__["COMMON_THEME"]), {}, {
  accent: {
    primary: _commonTheme__WEBPACK_IMPORTED_MODULE_1__["COMMON_THEME"].discord.primary,
    warning: Object(polished__WEBPACK_IMPORTED_MODULE_0__["rgb"])(255, 217, 83),
    danger: Object(polished__WEBPACK_IMPORTED_MODULE_0__["rgb"])(255, 122, 107)
  },
  header: {
    primary: Object(polished__WEBPACK_IMPORTED_MODULE_0__["rgb"])(255, 255, 255),
    secondary: Object(polished__WEBPACK_IMPORTED_MODULE_0__["rgb"])(185, 187, 190)
  },
  text: {
    normal: Object(polished__WEBPACK_IMPORTED_MODULE_0__["rgb"])(220, 221, 222),
    muted: Object(polished__WEBPACK_IMPORTED_MODULE_0__["rgb"])(114, 118, 125),
    link: Object(polished__WEBPACK_IMPORTED_MODULE_0__["rgb"])(0, 176, 244)
  },
  interactive: {
    normal: Object(polished__WEBPACK_IMPORTED_MODULE_0__["rgb"])(185, 187, 190),
    hover: Object(polished__WEBPACK_IMPORTED_MODULE_0__["rgb"])(220, 221, 222),
    active: Object(polished__WEBPACK_IMPORTED_MODULE_0__["rgb"])(255, 255, 255),
    muted: Object(polished__WEBPACK_IMPORTED_MODULE_0__["rgb"])(79, 84, 92)
  },
  background: {
    primary: Object(polished__WEBPACK_IMPORTED_MODULE_0__["rgb"])(54, 57, 63),
    secondary: Object(polished__WEBPACK_IMPORTED_MODULE_0__["rgb"])(47, 49, 54),
    secondaryAlt: Object(polished__WEBPACK_IMPORTED_MODULE_0__["rgb"])(41, 43, 47),
    tertiary: Object(polished__WEBPACK_IMPORTED_MODULE_0__["rgb"])(32, 34, 37),
    accent: Object(polished__WEBPACK_IMPORTED_MODULE_0__["rgb"])(79, 84, 92),
    floating: Object(polished__WEBPACK_IMPORTED_MODULE_0__["rgb"])(24, 25, 28)
  },
  backgroundModifier: {
    hover: Object(polished__WEBPACK_IMPORTED_MODULE_0__["rgba"])(79, 84, 92, 0.16),
    active: Object(polished__WEBPACK_IMPORTED_MODULE_0__["rgba"])(79, 84, 92, 0.24),
    selected: Object(polished__WEBPACK_IMPORTED_MODULE_0__["rgba"])(79, 84, 92, 0.32),
    accent: Object(polished__WEBPACK_IMPORTED_MODULE_0__["rgba"])(255, 255, 255, 0.06)
  },
  elavation: {
    stroke: `0 0 0 1px ${Object(polished__WEBPACK_IMPORTED_MODULE_0__["rgba"])(4, 4, 5, 0.15)}`,
    low: [`0 1px 0 ${Object(polished__WEBPACK_IMPORTED_MODULE_0__["rgba"])(4, 4, 5, 0.2)}`, `0 1.5px 0 ${Object(polished__WEBPACK_IMPORTED_MODULE_0__["rgba"])(6, 6, 7, 0.05)}`, `0 2px 0 ${Object(polished__WEBPACK_IMPORTED_MODULE_0__["rgba"])(4, 4, 5, 0.05)}`].join(","),
    medium: `0 4px 4px ${Object(polished__WEBPACK_IMPORTED_MODULE_0__["rgba"])(0, 0, 0, 0.16)}`,
    high: `0 8px 16px ${Object(polished__WEBPACK_IMPORTED_MODULE_0__["rgba"])(0, 0, 0, 0.24)}`
  },
  scrollbar: {
    auto: {
      thumb: Object(polished__WEBPACK_IMPORTED_MODULE_0__["rgb"])(32, 34, 37),
      track: Object(polished__WEBPACK_IMPORTED_MODULE_0__["rgb"])(46, 51, 56)
    },
    thin: {
      thumb: Object(polished__WEBPACK_IMPORTED_MODULE_0__["rgb"])(32, 34, 37),
      track: Object(polished__WEBPACK_IMPORTED_MODULE_0__["rgba"])(0, 0, 0, 0)
    }
  }
});

/***/ }),

/***/ "./common/theming/lightTheme.ts":
/*!**************************************!*\
  !*** ./common/theming/lightTheme.ts ***!
  \**************************************/
/*! exports provided: LIGHT_THEME */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIGHT_THEME", function() { return LIGHT_THEME; });
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _commonTheme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commonTheme */ "./common/theming/commonTheme.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const LIGHT_THEME = _objectSpread(_objectSpread({}, _commonTheme__WEBPACK_IMPORTED_MODULE_1__["COMMON_THEME"]), {}, {
  accent: {
    primary: _commonTheme__WEBPACK_IMPORTED_MODULE_1__["COMMON_THEME"].discord.primary,
    warning: Object(polished__WEBPACK_IMPORTED_MODULE_0__["rgb"])(204, 77, 0),
    danger: Object(polished__WEBPACK_IMPORTED_MODULE_0__["rgb"])(217, 47, 47)
  },
  header: {
    primary: Object(polished__WEBPACK_IMPORTED_MODULE_0__["rgb"])(6, 6, 7),
    secondary: Object(polished__WEBPACK_IMPORTED_MODULE_0__["rgb"])(79, 86, 96)
  },
  text: {
    normal: Object(polished__WEBPACK_IMPORTED_MODULE_0__["rgb"])(46, 51, 56),
    muted: Object(polished__WEBPACK_IMPORTED_MODULE_0__["rgb"])(116, 127, 141),
    link: Object(polished__WEBPACK_IMPORTED_MODULE_0__["rgb"])(0, 103, 224)
  },
  interactive: {
    normal: Object(polished__WEBPACK_IMPORTED_MODULE_0__["rgb"])(79, 86, 96),
    hover: Object(polished__WEBPACK_IMPORTED_MODULE_0__["rgb"])(46, 51, 56),
    active: Object(polished__WEBPACK_IMPORTED_MODULE_0__["rgb"])(6, 6, 7),
    muted: Object(polished__WEBPACK_IMPORTED_MODULE_0__["rgb"])(199, 204, 209)
  },
  background: {
    primary: Object(polished__WEBPACK_IMPORTED_MODULE_0__["rgb"])(255, 255, 255),
    secondary: Object(polished__WEBPACK_IMPORTED_MODULE_0__["rgb"])(242, 243, 245),
    secondaryAlt: Object(polished__WEBPACK_IMPORTED_MODULE_0__["rgb"])(235, 237, 239),
    tertiary: Object(polished__WEBPACK_IMPORTED_MODULE_0__["rgb"])(227, 229, 232),
    accent: Object(polished__WEBPACK_IMPORTED_MODULE_0__["rgb"])(116, 127, 141),
    floating: Object(polished__WEBPACK_IMPORTED_MODULE_0__["rgb"])(255, 255, 255)
  },
  backgroundModifier: {
    hover: Object(polished__WEBPACK_IMPORTED_MODULE_0__["rgba"])(116, 127, 141, 0.08),
    active: Object(polished__WEBPACK_IMPORTED_MODULE_0__["rgba"])(116, 127, 141, 0.16),
    selected: Object(polished__WEBPACK_IMPORTED_MODULE_0__["rgba"])(116, 127, 141, 0.24),
    accent: Object(polished__WEBPACK_IMPORTED_MODULE_0__["rgba"])(6, 6, 7, 0.08)
  },
  elavation: {
    stroke: `0 0 0 1px ${Object(polished__WEBPACK_IMPORTED_MODULE_0__["rgba"])(6, 6, 7, 0.08)}`,
    low: [`0 1px 0 ${Object(polished__WEBPACK_IMPORTED_MODULE_0__["rgba"])(6, 6, 7, 0.1)}`, `0 1.5px 0 ${Object(polished__WEBPACK_IMPORTED_MODULE_0__["rgba"])(6, 6, 7, 0.025)}`, `0 2px 0 ${Object(polished__WEBPACK_IMPORTED_MODULE_0__["rgba"])(6, 6, 7, 0.025)}`].join(","),
    medium: `0 4px 4px ${Object(polished__WEBPACK_IMPORTED_MODULE_0__["rgba"])(0, 0, 0, 0.08)}`,
    high: `0 8px 16px ${Object(polished__WEBPACK_IMPORTED_MODULE_0__["rgba"])(0, 0, 0, 0.16)}`
  },
  scrollbar: {
    auto: {
      thumb: Object(polished__WEBPACK_IMPORTED_MODULE_0__["rgb"])(204, 204, 204),
      track: Object(polished__WEBPACK_IMPORTED_MODULE_0__["rgb"])(242, 242, 242)
    },
    thin: {
      thumb: Object(polished__WEBPACK_IMPORTED_MODULE_0__["rgba"])(79, 84, 92, 0.3),
      track: Object(polished__WEBPACK_IMPORTED_MODULE_0__["rgba"])(0, 0, 0, 0)
    }
  }
});

/***/ }),

/***/ "./common/tooltip/TooltipManagerContext.ts":
/*!*************************************************!*\
  !*** ./common/tooltip/TooltipManagerContext.ts ***!
  \*************************************************/
/*! exports provided: TooltipManagerContext, TooltipManagerProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipManagerContext", function() { return TooltipManagerContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipManagerProvider", function() { return TooltipManagerProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const TooltipManagerContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null);
TooltipManagerContext.displayName = "TooltipManagerContext";
const TooltipManagerProvider = TooltipManagerContext.Provider;

/***/ }),

/***/ "./common/tooltip/TooltipWrapper.tsx":
/*!*******************************************!*\
  !*** ./common/tooltip/TooltipWrapper.tsx ***!
  \*******************************************/
/*! exports provided: TooltipWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipWrapper", function() { return TooltipWrapper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _state_useRequiredContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state/useRequiredContext */ "./common/state/useRequiredContext.ts");
/* harmony import */ var _TooltipManagerContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TooltipManagerContext */ "./common/tooltip/TooltipManagerContext.ts");



function TooltipWrapper(props) {
  const {
    label,
    children
  } = props;
  const manager = Object(_state_useRequiredContext__WEBPACK_IMPORTED_MODULE_1__["useRequiredContext"])(_TooltipManagerContext__WEBPACK_IMPORTED_MODULE_2__["TooltipManagerContext"]);
  const anchorRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const {
      current: anchor
    } = anchorRef;
    if (!anchor) return;
    const dismiss = manager.add({
      anchor,
      content: label
    });
    return () => {
      dismiss();
    };
  }, [label, manager]);
  return children(anchorRef);
}

/***/ }),

/***/ "./common/utilities/omitProps.tsx":
/*!****************************************!*\
  !*** ./common/utilities/omitProps.tsx ***!
  \****************************************/
/*! exports provided: omitProp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "omitProp", function() { return omitProp; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "F:\\DiscordHookSite\\common\\utilities\\omitProps.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const omitProp = (Component, ...omit) => {
  return (_ref) => {
    let props = Object.assign({}, _ref);

    for (const prop of omit) {
      delete props[prop];
    }

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, props), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 12
    }, undefined);
  };
};

/***/ }),

/***/ "./common/utilities/shorten.ts":
/*!*************************************!*\
  !*** ./common/utilities/shorten.ts ***!
  \*************************************/
/*! exports provided: shorten */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shorten", function() { return shorten; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const shorten = async url => {
  const response = await fetch("https://share.discohook.app/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      url
    })
  });
  if (!response.ok) throw new Error("Could not get short URL.");
  const data = await response.json();
  return _objectSpread(_objectSpread({}, data), {}, {
    expires: new Date(data.expires)
  });
};

/***/ }),

/***/ "./common/utilities/timeout.ts":
/*!*************************************!*\
  !*** ./common/utilities/timeout.ts ***!
  \*************************************/
/*! exports provided: timeout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeout", function() { return timeout; });
const timeout = (fn, ms) => {
  const id = setTimeout(fn, ms);
  return () => clearTimeout(id);
};

/***/ }),

/***/ "./icons/check.tsx":
/*!*************************!*\
  !*** ./icons/check.tsx ***!
  \*************************/
/*! exports provided: check */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "check", function() { return check; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "F:\\DiscordHookSite\\icons\\check.tsx";

const check = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
    d: "M12 5L6.5 11L4 8.27273",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 3
}, undefined);

/***/ }),

/***/ "./icons/chevron.tsx":
/*!***************************!*\
  !*** ./icons/chevron.tsx ***!
  \***************************/
/*! exports provided: chevron, chevronDown, chevronLeft, chevronRight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chevron", function() { return chevron; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chevronDown", function() { return chevronDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chevronLeft", function() { return chevronLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chevronRight", function() { return chevronRight; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "F:\\DiscordHookSite\\icons\\chevron.tsx";

const chevron = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
    d: "M12 10L8 6L4 10",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 3
}, undefined);
const chevronDown = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["cloneElement"])(chevron, {
  style: {
    transform: "rotate(180deg)"
  }
});
const chevronLeft = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["cloneElement"])(chevron, {
  style: {
    transform: "rotate(-90deg)"
  }
});
const chevronRight = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["cloneElement"])(chevron, {
  style: {
    transform: "rotate(90deg)"
  }
});

/***/ }),

/***/ "./icons/copy.tsx":
/*!************************!*\
  !*** ./icons/copy.tsx ***!
  \************************/
/*! exports provided: copy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "F:\\DiscordHookSite\\icons\\copy.tsx";

const copy = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
    d: "M3 10H2.5C1.67157 10 1 9.32845 1 8.50002L1 2.5C1 1.67157 1.67158 1 2.50001 1L8.5 1.00002C9.32843 1.00002 10 1.67159 10 2.50002V3.00002M13.4999 6.00008L7.49994 6.00006C6.67151 6.00006 5.99994 6.67164 5.99994 7.50006L5.99993 13.5001C5.99993 14.3285 6.67151 15.0001 7.49993 15.0001H13.4999C14.3284 15.0001 14.9999 14.3285 14.9999 13.5001V7.50008C14.9999 6.67165 14.3284 6.00008 13.4999 6.00008Z",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 3
}, undefined);

/***/ }),

/***/ "./icons/error.tsx":
/*!*************************!*\
  !*** ./icons/error.tsx ***!
  \*************************/
/*! exports provided: error */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "error", function() { return error; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "F:\\DiscordHookSite\\icons\\error.tsx";

const error = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15ZM9 4C9 3.44772 8.55228 3 8 3C7.44772 3 7 3.44772 7 4V8C7 8.55228 7.44772 9 8 9C8.55228 9 9 8.55228 9 8V4ZM9 12C9 11.4477 8.55228 11 8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13C8.55228 13 9 12.5523 9 12Z",
    fill: "currentColor"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 3
}, undefined);

/***/ }),

/***/ "./icons/logo.tsx":
/*!************************!*\
  !*** ./icons/logo.tsx ***!
  \************************/
/*! exports provided: monochromeLogo, darkLogo, lightLogo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "monochromeLogo", function() { return monochromeLogo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darkLogo", function() { return darkLogo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lightLogo", function() { return lightLogo; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "F:\\DiscordHookSite\\icons\\logo.tsx";

const monochromeLogo = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none",
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.4 2C7.17909 2 7 1.82091 7 1.6C7 0.716344 7.71634 0 8.6 0H9C10.1046 0 11 0.895431 11 2V4.19098C11 4.56267 10.6088 4.80442 10.2764 4.6382L10.1056 4.55279C9.428 4.214 9 3.52148 9 2.76393V2H7.4ZM7.6 10C7.82091 10 8 9.82091 8 9.6C8 8.71634 7.28366 8 6.4 8H6C4.34315 8 3 6.65685 3 5V2.4C3 2.17909 2.82091 2 2.6 2C1.71634 2 1 2.71634 1 3.6V5C1 7.76142 3.23858 10 6 10H7.6Z",
    fill: "currentColor"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
    d: "M3 11.5C3 11.7761 2.77614 12 2.5 12H2C1.44772 12 1 11.5523 1 11L1 9.80902C1 9.43733 1.39116 9.19558 1.72361 9.3618L1.89443 9.44721C2.572 9.786 3 10.4785 3 11.2361V11.5Z",
    fill: "currentColor"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
    d: "M9.66667 12C9.29848 12 9 11.7015 9 11.3333V9C9 7.34315 7.65685 6 6 6H5.33333C4.59695 6 4 5.40305 4 4.66667C4 4.29848 4.29848 4 4.66667 4L6 4C8.76142 4 11 6.23858 11 9V10.6667C11 11.403 10.403 12 9.66667 12Z",
    fill: "currentColor"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 3
}, undefined);
const darkLogo = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none",
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.4 2C7.17909 2 7 1.82091 7 1.6C7 0.716344 7.71634 0 8.6 0H9C10.1046 0 11 0.895431 11 2V4.19098C11 4.56267 10.6088 4.80442 10.2764 4.6382L10.1056 4.55279C9.428 4.214 9 3.52148 9 2.76393V2H7.4ZM7.6 10C7.82091 10 8 9.82091 8 9.6C8 8.71634 7.28366 8 6.4 8H6C4.34315 8 3 6.65685 3 5V2.4C3 2.17909 2.82091 2 2.6 2C1.71634 2 1 2.71634 1 3.6V5C1 7.76142 3.23858 10 6 10H7.6Z",
    fill: "#DEF1FF"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
    d: "M3 11.5C3 11.7761 2.77614 12 2.5 12H2C1.44772 12 1 11.5523 1 11L1 9.80902C1 9.43733 1.39116 9.19558 1.72361 9.3618L1.89443 9.44721C2.572 9.786 3 10.4785 3 11.2361V11.5Z",
    fill: "#58B9FF"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
    d: "M9.66667 12C9.29848 12 9 11.7015 9 11.3333V9C9 7.34315 7.65685 6 6 6H5.33333C4.59695 6 4 5.40305 4 4.66667C4 4.29848 4.29848 4 4.66667 4L6 4C8.76142 4 11 6.23858 11 9V10.6667C11 11.403 10.403 12 9.66667 12Z",
    fill: "#58B9FF"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 23,
  columnNumber: 3
}, undefined);
const lightLogo = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none",
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.4 2C7.17909 2 7 1.82091 7 1.6C7 0.716344 7.71634 0 8.6 0H9C10.1046 0 11 0.895431 11 2V4.19098C11 4.56267 10.6088 4.80442 10.2764 4.6382L10.1056 4.55279C9.428 4.214 9 3.52148 9 2.76393V2H7.4ZM7.6 10C7.82091 10 8 9.82091 8 9.6C8 8.71634 7.28366 8 6.4 8H6C4.34315 8 3 6.65685 3 5V2.4C3 2.17909 2.82091 2 2.6 2C1.71634 2 1 2.71634 1 3.6V5C1 7.76142 3.23858 10 6 10H7.6Z",
    fill: "#324756"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
    d: "M3 11.5C3 11.7761 2.77614 12 2.5 12H2C1.44772 12 1 11.5523 1 11L1 9.80902C1 9.43733 1.39116 9.19558 1.72361 9.3618L1.89443 9.44721C2.572 9.786 3 10.4785 3 11.2361V11.5Z",
    fill: "#3498E1"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
    d: "M9.66667 12C9.29848 12 9 11.7015 9 11.3333V9C9 7.34315 7.65685 6 6 6H5.33333C4.59695 6 4 5.40305 4 4.66667C4 4.29848 4.29848 4 4.66667 4L6 4C8.76142 4 11 6.23858 11 9V10.6667C11 11.403 10.403 12 9.66667 12Z",
    fill: "#3498E1"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 42,
  columnNumber: 3
}, undefined);

/***/ }),

/***/ "./icons/menu.tsx":
/*!************************!*\
  !*** ./icons/menu.tsx ***!
  \************************/
/*! exports provided: menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menu", function() { return menu; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "F:\\DiscordHookSite\\icons\\menu.tsx";

const menu = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
    d: "M1 8H15M1 3H15M1 13H15",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 3
}, undefined);

/***/ }),

/***/ "./icons/overflow.tsx":
/*!****************************!*\
  !*** ./icons/overflow.tsx ***!
  \****************************/
/*! exports provided: overflow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "overflow", function() { return overflow; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "F:\\DiscordHookSite\\icons\\overflow.tsx";

const overflow = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
    d: "M3 8C3 8.55228 2.55228 9 2 9C1.44772 9 1 8.55228 1 8C1 7.44772 1.44772 7 2 7C2.55228 7 3 7.44772 3 8Z",
    stroke: "currentColor",
    strokeWidth: "2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
    d: "M14 7C14.5523 7 15 7.44772 15 8C15 8.55228 14.5523 9 14 9C13.4477 9 13 8.55228 13 8C13 7.44772 13.4477 7 14 7Z",
    stroke: "currentColor",
    strokeWidth: "2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
    d: "M8 7C8.55228 7 9 7.44772 9 8C9 8.55228 8.55228 9 8 9C7.44772 9 7 8.55228 7 8C7 7.44772 7.44772 7 8 7Z",
    stroke: "currentColor",
    strokeWidth: "2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 3
}, undefined);

/***/ }),

/***/ "./icons/remove.tsx":
/*!**************************!*\
  !*** ./icons/remove.tsx ***!
  \**************************/
/*! exports provided: remove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "F:\\DiscordHookSite\\icons\\remove.tsx";

const remove = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
    d: "M13 3L3 13M3 3L13 13",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 3
}, undefined);

/***/ }),

/***/ "./icons/warning.tsx":
/*!***************************!*\
  !*** ./icons/warning.tsx ***!
  \***************************/
/*! exports provided: warning */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warning", function() { return warning; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "F:\\DiscordHookSite\\icons\\warning.tsx";

const warning = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
    clipPath: "url(#clip0)",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M9.74315 2.09905C8.97855 0.739746 7.02147 0.739743 6.25686 2.09904L0.676551 12.0196C-0.0733809 13.3528 0.890046 15.0001 2.4197 15.0001H13.5803C15.11 15.0001 16.0734 13.3528 15.3235 12.0196L9.74315 2.09905ZM7 5.00012C7 4.44784 7.44771 4.00012 8 4.00012C8.55229 4.00012 9 4.44784 9 5.00012V8.00012C9 8.55241 8.55229 9.00012 8 9.00012C7.44771 9.00012 7 8.55241 7 8.00012V5.00012ZM9 12.0001C9 11.4478 8.55229 11.0001 8 11.0001C7.44771 11.0001 7 11.4478 7 12.0001C7 12.5524 7.44771 13.0001 8 13.0001C8.55229 13.0001 9 12.5524 9 12.0001Z",
      fill: "currentColor"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("defs", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("clipPath", {
      id: "clip0",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
        width: "16",
        height: "16",
        fill: "white"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 3
}, undefined);

/***/ }),

/***/ "./modules/editor/Editor.tsx":
/*!***********************************!*\
  !*** ./modules/editor/Editor.tsx ***!
  \***********************************/
/*! exports provided: Editor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Editor", function() { return Editor; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_dom_useWindowEvent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/dom/useWindowEvent */ "./common/dom/useWindowEvent.ts");
/* harmony import */ var _common_input_button_PrimaryButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/input/button/PrimaryButton */ "./common/input/button/PrimaryButton.ts");
/* harmony import */ var _common_input_button_SecondaryButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/input/button/SecondaryButton */ "./common/input/button/SecondaryButton.ts");
/* harmony import */ var _common_layout_ButtonList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/layout/ButtonList */ "./common/layout/ButtonList.tsx");
/* harmony import */ var _common_layout_Separator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/layout/Separator */ "./common/layout/Separator.ts");
/* harmony import */ var _common_layout_Stack__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/layout/Stack */ "./common/layout/Stack.ts");
/* harmony import */ var _common_modal_ModalManagerContext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/modal/ModalManagerContext */ "./common/modal/ModalManagerContext.tsx");
/* harmony import */ var _common_settings_usePreference__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/settings/usePreference */ "./common/settings/usePreference.ts");
/* harmony import */ var _common_state_useLazyValue__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../common/state/useLazyValue */ "./common/state/useLazyValue.ts");
/* harmony import */ var _common_state_useRequiredContext__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../common/state/useRequiredContext */ "./common/state/useRequiredContext.ts");
/* harmony import */ var _markdown_Markdown__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../markdown/Markdown */ "./modules/markdown/Markdown.tsx");
/* harmony import */ var _message_state_editorForm__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../message/state/editorForm */ "./modules/message/state/editorForm.ts");
/* harmony import */ var _EditorManagerContext__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./EditorManagerContext */ "./modules/editor/EditorManagerContext.tsx");
/* harmony import */ var _message_ClearAllConfirmationModal__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./message/ClearAllConfirmationModal */ "./modules/editor/message/ClearAllConfirmationModal.tsx");
/* harmony import */ var _message_MessageEditor__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./message/MessageEditor */ "./modules/editor/message/MessageEditor.tsx");
/* harmony import */ var _share_ShareModal__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./share/ShareModal */ "./modules/editor/share/ShareModal.tsx");
/* harmony import */ var _webhook_WebhookControls__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./webhook/WebhookControls */ "./modules/editor/webhook/WebhookControls.tsx");

var _jsxFileName = "F:\\DiscordHookSite\\modules\\editor\\Editor.tsx";






















const BackupsModal = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(async () => __webpack_require__.e(/*! import() */ 193).then(__webpack_require__.bind(null, /*! ../database/backup/modal/BackupsModal */ "./modules/database/backup/modal/BackupsModal.tsx")).then(module => module.BackupsModal), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ../database/backup/modal/BackupsModal */ "./modules/database/backup/modal/BackupsModal.tsx")],
    modules: ["../database/backup/modal/BackupsModal"]
  }
});
const EditorContainer = styled_components__WEBPACK_IMPORTED_MODULE_5___default()(_common_layout_Stack__WEBPACK_IMPORTED_MODULE_11__["Stack"]).withConfig({
  displayName: "Editor__EditorContainer",
  componentId: "m64dfz-0"
})(["padding:16px 16px 0;"]);
const JavaScriptWarning = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.noscript.withConfig({
  displayName: "Editor__JavaScriptWarning",
  componentId: "m64dfz-1"
})(["display:block;margin-bottom:16px;padding:16px;border-radius:4px;border:2px solid ", ";background:", ";color:", ";font-weight:500;line-height:1.375;"], ({
  theme
}) => theme.accent.danger, ({
  theme
}) => Object(polished__WEBPACK_IMPORTED_MODULE_3__["transparentize"])(0.75, theme.accent.danger), ({
  theme
}) => theme.header.primary);
function Editor() {
  const editorManager = Object(_common_state_useRequiredContext__WEBPACK_IMPORTED_MODULE_15__["useRequiredContext"])(_EditorManagerContext__WEBPACK_IMPORTED_MODULE_18__["EditorManagerContext"]);
  const form = Object(_common_state_useLazyValue__WEBPACK_IMPORTED_MODULE_14__["useLazyValue"])(() => Object(_message_state_editorForm__WEBPACK_IMPORTED_MODULE_17__["createEditorForm"])(editorManager));
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(() => () => form.dispose(), [form]);
  const modalManager = Object(_common_state_useRequiredContext__WEBPACK_IMPORTED_MODULE_15__["useRequiredContext"])(_common_modal_ModalManagerContext__WEBPACK_IMPORTED_MODULE_12__["ModalManagerContext"]);

  const spawnBackupsModal = () => modalManager.spawn({
    render: () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BackupsModal, {
      editorManager: editorManager
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 21
    }, this)
  });

  const spawnClearAllModal = () => modalManager.spawn({
    render: () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_message_ClearAllConfirmationModal__WEBPACK_IMPORTED_MODULE_19__["ClearAllConfirmationModal"], {
      editorManager: editorManager
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 21
    }, this)
  });

  const spawnShareModal = () => modalManager.spawn({
    render: () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_share_ShareModal__WEBPACK_IMPORTED_MODULE_21__["ShareModal"], {
      editorManager: editorManager
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 21
    }, this)
  });

  const confirmExit = Object(_common_settings_usePreference__WEBPACK_IMPORTED_MODULE_13__["usePreference"])("confirmExit");
  Object(_common_dom_useWindowEvent__WEBPACK_IMPORTED_MODULE_6__["useWindowEvent"])("beforeunload", event => {
    if (!confirmExit) return;
    event.preventDefault();
    event.returnValue = "";
    return "";
  });
  return Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__["useObserver"])(() => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(EditorContainer, {
    gap: 16,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(JavaScriptWarning, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_markdown_Markdown__WEBPACK_IMPORTED_MODULE_16__["Markdown"], {
        content: "It appears your web browser has prevented this page from " + "executing JavaScript.\nTo use Discohook, please allow this page " + "to run JavaScript from your browser's settings."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_layout_ButtonList__WEBPACK_IMPORTED_MODULE_9__["ButtonList"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_input_button_SecondaryButton__WEBPACK_IMPORTED_MODULE_8__["SecondaryButton"], {
        onClick: () => spawnBackupsModal(),
        children: "Backups"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_input_button_SecondaryButton__WEBPACK_IMPORTED_MODULE_8__["SecondaryButton"], {
        onClick: () => spawnClearAllModal(),
        children: "Clear All"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_input_button_SecondaryButton__WEBPACK_IMPORTED_MODULE_8__["SecondaryButton"], {
        onClick: () => spawnShareModal(),
        children: "Share Message"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_webhook_WebhookControls__WEBPACK_IMPORTED_MODULE_22__["WebhookControls"], {
      form: form
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }, this), editorManager.messages.map((message, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_layout_Separator__WEBPACK_IMPORTED_MODULE_10__["Separator"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_message_MessageEditor__WEBPACK_IMPORTED_MODULE_20__["MessageEditor"], {
        message: message,
        form: form.repeatingForm("messages").index(index)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 11
      }, this)]
    }, message.id, true, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 9
    }, this)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_layout_Separator__WEBPACK_IMPORTED_MODULE_10__["Separator"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_input_button_PrimaryButton__WEBPACK_IMPORTED_MODULE_7__["PrimaryButton"], {
        onClick: () => {
          form.repeatingForm("messages").push({});
        },
        children: "Add Message"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 84,
    columnNumber: 5
  }, this));
}

/***/ }),

/***/ "./modules/editor/EditorManager.ts":
/*!*****************************************!*\
  !*** ./modules/editor/EditorManager.ts ***!
  \*****************************************/
/*! exports provided: EditorManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorManager", function() { return EditorManager; });
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx-state-tree */ "mobx-state-tree");
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_state_delay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/state/delay */ "./common/state/delay.ts");
/* harmony import */ var _message_state_models_MessageModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../message/state/models/MessageModel */ "./modules/message/state/models/MessageModel.ts");
/* harmony import */ var _webhook_WebhookModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../webhook/WebhookModel */ "./modules/webhook/WebhookModel.ts");
/* eslint-disable import/no-cycle */




const EditorManager = mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].model("EditorManager", {
  messages: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].array(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].late(() => _message_state_models_MessageModel__WEBPACK_IMPORTED_MODULE_2__["MessageModel"])),
  targets: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].array(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].late(() => _webhook_WebhookModel__WEBPACK_IMPORTED_MODULE_3__["WebhookModel"]))
}).actions(self => ({
  set(key, value) {
    self[key] = value;
  },

  clear() {
    self.messages.clear();
    self.messages.push(_message_state_models_MessageModel__WEBPACK_IMPORTED_MODULE_2__["MessageModel"].create());
  },

  async save() {
    for (const target of self.targets) {
      for (const message of self.messages) {
        const headers = {
          "Accept": "application/json",
          "Accept-Language": "en"
        };
        const body = message.body;

        if (typeof body === "string") {
          headers["Content-Type"] = "application/json";
        }
        /* eslint-disable no-await-in-loop */


        const [method, url] = await target.getRoute(message.reference);
        const response = await fetch(url, {
          method,
          headers,
          body
        });
        const data = await response.json();

        if (response.headers.get("X-RateLimit-Remaining") === "0") {
          var _response$headers$get;

          const retryAfter = Number((_response$headers$get = response.headers.get("X-RateLimit-Reset-After")) !== null && _response$headers$get !== void 0 ? _response$headers$get : 2) * 1000;
          console.log("Rate limited: delaying next request by", retryAfter, "milliseconds");
          await Object(_common_state_delay__WEBPACK_IMPORTED_MODULE_1__["delay"])(retryAfter);
        }
        /* eslint-enable no-await-in-loop */


        console.log("Target executed", data);
      }
    }

    return null;
  },

  async process(path) {
    const match = /^\/targets\/(\d+)\/url$/.exec(path);

    if (match) {
      var _target$exists;

      const target = self.targets[Number(match[1])];
      await target.fetch();

      if ((_target$exists = target.exists) !== null && _target$exists !== void 0 ? _target$exists : true) {
        return {
          errorValidations: [{
            id: "target",
            messages: []
          }]
        };
      }

      return {
        errorValidations: [{
          id: "target",
          messages: [{
            path,
            message: "Webhook does not exist"
          }]
        }]
      };
    }

    return {};
  }

})); // eslint-disable-next-line @typescript-eslint/no-empty-interface, @typescript-eslint/consistent-type-definitions

/***/ }),

/***/ "./modules/editor/EditorManagerContext.tsx":
/*!*************************************************!*\
  !*** ./modules/editor/EditorManagerContext.tsx ***!
  \*************************************************/
/*! exports provided: EditorManagerContext, EditorManagerProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorManagerContext", function() { return EditorManagerContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorManagerProvider", function() { return EditorManagerProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const EditorManagerContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null);
EditorManagerContext.displayName = "EditorManagerContext";
const EditorManagerProvider = EditorManagerContext.Provider;

/***/ }),

/***/ "./modules/editor/defaultEditorManagerState.ts":
/*!*****************************************************!*\
  !*** ./modules/editor/defaultEditorManagerState.ts ***!
  \*****************************************************/
/*! exports provided: DEFAULT_EDITOR_MANAGER_STATE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_EDITOR_MANAGER_STATE", function() { return DEFAULT_EDITOR_MANAGER_STATE; });
const DEFAULT_EDITOR_MANAGER_STATE = {
  messages: [{
    content: "Hey, welcome to <:discohook:736648398081622016> Discohook! The easiest way to build and send Discord messages with embeds using webhooks.\n\nThe embeds below explain a bit more, but you're not required to read them. If you're ready, click on the \"Clear All\" button in the editor to start making your own messages.\n\nDiscohook has [a support server](https://discohook.app/discord)! Feel free to join and ask any questions you may have, or suggest things you'd like to see.\n\nThere's also [a complementary bot](https://discohook.app/bot), it's completely optional but you may want it.\n_ _",
    embeds: [{
      title: "What's this?",
      description: 'Discohook is a free tool that sends messages with embeds to your Discord server. To do that it uses [webhooks](https://support.discord.com/hc/en-us/articles/228383668), a Discord feature that lets any application send messages to a channel.\n\nTo send messages, you need a webhook URL, you can get one via the "Integrations" tab in your server\'s settings.\n\nNote that Discohook cannot respond to user interactions, it only sends messages when you tell it to. As such creating an automatic feed or custom commands is not possible with Discohook.',
      color: {
        hue: 205.14970059880238,
        saturation: 0.6549019607843137,
        value: 1
      }
    }, {
      title: "Discord bot",
      description: "Discohook has a complementary bot, while it's not strictly required to send messages it may be helpful to have it.\n\nBelow is a small but incomplete overview of what the bot can do for you.",
      color: {
        hue: 205.14970059880238,
        saturation: 0.6549019607843137,
        value: 1
      },
      fields: [{
        name: "Mentioning users, roles, channels, and using emojis",
        value: "These things have [manual ways](https://discord.dev/reference#message-formatting), however they're easy to mess up for someone that doesn't know what they're doing.\nIf you don't understand the above link, using Discohook's bot for this is recommended.\n\nThe relevant commands in the bot are `user`, `role`, `channel`, and `emoji`. Each of those will return formatting which you can copy into the editor to get the appropriate output.\n\nTo use Discord's default emojis, use its short name wrapped in colons. As an example, \"\\:eyes:\" will make the eyes emoji."
      }, {
        name: "Creating reaction roles",
        value: "You can create reaction roles with the bot using the `reactionrole` command, the set-up process is very simple: add a reaction to any existing message in your server, and name the role.\n\nNote that while other bots may allow you to configure reaction roles, Discohook's are the only ones we can give support for."
      }, {
        name: "Recover Discohook messages from your server",
        value: "The bot is capable of turning most message links sent inside your server into Discohook links. Use the `restore` command with a message link to move that message from Discord into Discohook."
      }]
    }]
  }]
};

/***/ }),

/***/ "./modules/editor/getEditorManagerFromQuery.ts":
/*!*****************************************************!*\
  !*** ./modules/editor/getEditorManagerFromQuery.ts ***!
  \*****************************************************/
/*! exports provided: getEditorManagerFromQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEditorManagerFromQuery", function() { return getEditorManagerFromQuery; });
/* harmony import */ var _common_base64_base64Decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/base64/base64Decode */ "./common/base64/base64Decode.ts");
/* harmony import */ var _common_object_parseJson__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/object/parseJson */ "./common/object/parseJson.ts");
/* harmony import */ var _common_object_toSnakeCase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/object/toSnakeCase */ "./common/object/toSnakeCase.ts");
/* harmony import */ var _message_helpers_messageOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../message/helpers/messageOf */ "./modules/message/helpers/messageOf.ts");
/* harmony import */ var _webhook_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../webhook/constants */ "./modules/webhook/constants.ts");
/* harmony import */ var _defaultEditorManagerState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./defaultEditorManagerState */ "./modules/editor/defaultEditorManagerState.ts");
/* harmony import */ var _EditorManager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./EditorManager */ "./modules/editor/EditorManager.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const getEditorManagerFromQuery = query => {
  var _base64Decode, _ref, _query$data;

  const {
    value,
    error
  } = Object(_common_object_parseJson__WEBPACK_IMPORTED_MODULE_1__["parseJson"])((_base64Decode = Object(_common_base64_base64Decode__WEBPACK_IMPORTED_MODULE_0__["base64Decode"])(String((_ref = (_query$data = query.data) !== null && _query$data !== void 0 ? _query$data : query.message) !== null && _ref !== void 0 ? _ref : ""))) !== null && _base64Decode !== void 0 ? _base64Decode : "");

  if (error || !value || typeof value !== "object") {
    return _EditorManager__WEBPACK_IMPORTED_MODULE_6__["EditorManager"].create(_defaultEditorManagerState__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_EDITOR_MANAGER_STATE"]);
  }

  if ("message" in value) {
    return _EditorManager__WEBPACK_IMPORTED_MODULE_6__["EditorManager"].create({
      messages: [Object(_message_helpers_messageOf__WEBPACK_IMPORTED_MODULE_3__["messageOf"])(Object(_common_object_toSnakeCase__WEBPACK_IMPORTED_MODULE_2__["toSnakeCase"])(value.message))]
    });
  }

  if (!("messages" in value) || !Array.isArray(value.messages)) {
    return _EditorManager__WEBPACK_IMPORTED_MODULE_6__["EditorManager"].create(_defaultEditorManagerState__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_EDITOR_MANAGER_STATE"]);
  }

  return _EditorManager__WEBPACK_IMPORTED_MODULE_6__["EditorManager"].create({
    messages: value.messages.map(message => {
      var _MESSAGE_REF_RE$exec;

      if (typeof message !== "object" || !message || !("data" in message)) {
        return {};
      }

      return _objectSpread(_objectSpread({}, Object(_message_helpers_messageOf__WEBPACK_IMPORTED_MODULE_3__["messageOf"])(message.data)), {}, {
        reference: message.reference && ((_MESSAGE_REF_RE$exec = _webhook_constants__WEBPACK_IMPORTED_MODULE_4__["MESSAGE_REF_RE"].exec(String(message.reference))) === null || _MESSAGE_REF_RE$exec === void 0 ? void 0 : _MESSAGE_REF_RE$exec[0]) || undefined,
        timestamp: "timestamp" in message ? new Date(String(message.timestamp)) : undefined,
        badge: "badge" in message ? message.badge === null ? null : String(message.badge) : undefined
      });
    }),
    targets: "targets" in value && Array.isArray(value.targets) ? value.targets.map(target => {
      if (typeof target !== "object" || !target || !("url" in target)) {
        return {};
      }

      return {
        url: String(target.url)
      };
    }) : [{}]
  });
};

/***/ }),

/***/ "./modules/editor/getEditorUrl.ts":
/*!****************************************!*\
  !*** ./modules/editor/getEditorUrl.ts ***!
  \****************************************/
/*! exports provided: getEditorUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEditorUrl", function() { return getEditorUrl; });
/* harmony import */ var _common_base64_base64UrlEncode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/base64/base64UrlEncode */ "./common/base64/base64UrlEncode.ts");

const getEditorUrl = manager => {
  const messages = manager.messages.map(message => ({
    data: message.data
  }));
  const json = JSON.stringify({
    messages
  });
  const base64 = Object(_common_base64_base64UrlEncode__WEBPACK_IMPORTED_MODULE_0__["base64UrlEncode"])(json);
  return String(new URL(`https://discohook.org/?data=${base64}`));
};

/***/ }),

/***/ "./modules/editor/message/ClearAllConfirmationModal.tsx":
/*!**************************************************************!*\
  !*** ./modules/editor/message/ClearAllConfirmationModal.tsx ***!
  \**************************************************************/
/*! exports provided: ClearAllConfirmationModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClearAllConfirmationModal", function() { return ClearAllConfirmationModal; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_input_button_PrimaryButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/input/button/PrimaryButton */ "./common/input/button/PrimaryButton.ts");
/* harmony import */ var _common_input_button_SecondaryButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/input/button/SecondaryButton */ "./common/input/button/SecondaryButton.ts");
/* harmony import */ var _common_modal_layout_ModalAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/modal/layout/ModalAction */ "./common/modal/layout/ModalAction.ts");
/* harmony import */ var _common_modal_layout_ModalBody__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/modal/layout/ModalBody */ "./common/modal/layout/ModalBody.ts");
/* harmony import */ var _common_modal_layout_ModalContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/modal/layout/ModalContainer */ "./common/modal/layout/ModalContainer.ts");
/* harmony import */ var _common_modal_layout_ModalFooter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/modal/layout/ModalFooter */ "./common/modal/layout/ModalFooter.ts");
/* harmony import */ var _common_modal_layout_ModalHeader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/modal/layout/ModalHeader */ "./common/modal/layout/ModalHeader.ts");
/* harmony import */ var _common_modal_layout_ModalTitle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/modal/layout/ModalTitle */ "./common/modal/layout/ModalTitle.ts");
/* harmony import */ var _common_modal_ModalContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../common/modal/ModalContext */ "./common/modal/ModalContext.ts");
/* harmony import */ var _common_state_useRequiredContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../common/state/useRequiredContext */ "./common/state/useRequiredContext.ts");
/* harmony import */ var _icons_remove__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../icons/remove */ "./icons/remove.tsx");
/* harmony import */ var _markdown_Markdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../markdown/Markdown */ "./modules/markdown/Markdown.tsx");

var _jsxFileName = "F:\\DiscordHookSite\\modules\\editor\\message\\ClearAllConfirmationModal.tsx";













function ClearAllConfirmationModal(props) {
  const {
    editorManager
  } = props;
  const modal = Object(_common_state_useRequiredContext__WEBPACK_IMPORTED_MODULE_11__["useRequiredContext"])(_common_modal_ModalContext__WEBPACK_IMPORTED_MODULE_10__["ModalContext"]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_modal_layout_ModalContainer__WEBPACK_IMPORTED_MODULE_6__["ModalContainer"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_modal_layout_ModalHeader__WEBPACK_IMPORTED_MODULE_8__["ModalHeader"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_modal_layout_ModalTitle__WEBPACK_IMPORTED_MODULE_9__["ModalTitle"], {
        children: "Clear All"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_modal_layout_ModalAction__WEBPACK_IMPORTED_MODULE_4__["ModalAction"], {
        icon: _icons_remove__WEBPACK_IMPORTED_MODULE_12__["remove"],
        label: "Close",
        onClick: () => modal.dismiss()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_modal_layout_ModalBody__WEBPACK_IMPORTED_MODULE_5__["ModalBody"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_markdown_Markdown__WEBPACK_IMPORTED_MODULE_13__["Markdown"], {
        content: "This action removes all content from the message. Are you sure" + " you want to continue? This action cannot be reverted."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_modal_layout_ModalFooter__WEBPACK_IMPORTED_MODULE_7__["ModalFooter"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_input_button_SecondaryButton__WEBPACK_IMPORTED_MODULE_3__["SecondaryButton"], {
        onClick: () => modal.dismiss(),
        children: "Cancel"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_input_button_PrimaryButton__WEBPACK_IMPORTED_MODULE_2__["PrimaryButton"], {
        onClick: () => {
          editorManager.clear();
          modal.dismiss();
        },
        children: "Clear all"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./modules/editor/message/EmbedAuthorEditor.tsx":
/*!******************************************************!*\
  !*** ./modules/editor/message/EmbedAuthorEditor.tsx ***!
  \******************************************************/
/*! exports provided: EmbedAuthorEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmbedAuthorEditor", function() { return EmbedAuthorEditor; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_input_text_InputField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/input/text/InputField */ "./common/input/text/InputField.tsx");
/* harmony import */ var _common_layout_RowContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/layout/RowContainer */ "./common/layout/RowContainer.ts");
/* harmony import */ var _common_layout_Section__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/layout/Section */ "./common/layout/Section.tsx");
/* harmony import */ var _common_layout_Stack__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/layout/Stack */ "./common/layout/Stack.ts");

var _jsxFileName = "F:\\DiscordHookSite\\modules\\editor\\message\\EmbedAuthorEditor.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function EmbedAuthorEditor(props) {
  const {
    embed,
    form
  } = props;
  return Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__["useObserver"])(() => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_layout_Section__WEBPACK_IMPORTED_MODULE_5__["Section"], {
    name: "Author",
    hasError: !form.group("author").isValid,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_layout_Stack__WEBPACK_IMPORTED_MODULE_6__["Stack"], {
      gap: 12,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_input_text_InputField__WEBPACK_IMPORTED_MODULE_3__["InputField"], _objectSpread({
        id: `_${embed.id}_author`,
        label: "Author",
        maxLength: 256,
        rows: 1,
        error: form.field("author").error
      }, form.field("author").inputProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_layout_RowContainer__WEBPACK_IMPORTED_MODULE_4__["RowContainer"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_input_text_InputField__WEBPACK_IMPORTED_MODULE_3__["InputField"], _objectSpread({
          id: `_${embed.id}_authorUrl`,
          label: "Author URL",
          disabled: !embed.author,
          error: form.field("authorUrl").error
        }, form.field("authorUrl").inputProps), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_input_text_InputField__WEBPACK_IMPORTED_MODULE_3__["InputField"], _objectSpread({
          id: `_${embed.id}_authorIcon`,
          label: "Author Icon URL",
          disabled: !embed.author,
          error: form.field("authorIcon").error
        }, form.field("authorIcon").inputProps), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, this));
}

/***/ }),

/***/ "./modules/editor/message/EmbedBodyEditor.tsx":
/*!****************************************************!*\
  !*** ./modules/editor/message/EmbedBodyEditor.tsx ***!
  \****************************************************/
/*! exports provided: EmbedBodyEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmbedBodyEditor", function() { return EmbedBodyEditor; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_input_color_ColorInputField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/input/color/ColorInputField */ "./common/input/color/ColorInputField.tsx");
/* harmony import */ var _common_input_text_InputField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/input/text/InputField */ "./common/input/text/InputField.tsx");
/* harmony import */ var _common_layout_RowContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/layout/RowContainer */ "./common/layout/RowContainer.ts");
/* harmony import */ var _common_layout_Section__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/layout/Section */ "./common/layout/Section.tsx");
/* harmony import */ var _common_layout_Stack__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/layout/Stack */ "./common/layout/Stack.ts");

var _jsxFileName = "F:\\DiscordHookSite\\modules\\editor\\message\\EmbedBodyEditor.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function EmbedBodyEditor(props) {
  const {
    embed,
    form
  } = props;
  return Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__["useObserver"])(() => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_layout_Section__WEBPACK_IMPORTED_MODULE_6__["Section"], {
    name: "Body",
    hasError: !form.group("body").isValid,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_layout_Stack__WEBPACK_IMPORTED_MODULE_7__["Stack"], {
      gap: 12,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_input_text_InputField__WEBPACK_IMPORTED_MODULE_4__["InputField"], _objectSpread({
        id: `_${embed.id}_title`,
        label: "Title",
        maxLength: 256,
        rows: 1,
        error: form.field("title").error
      }, form.field("title").inputProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_input_text_InputField__WEBPACK_IMPORTED_MODULE_4__["InputField"], _objectSpread({
        id: `_${embed.id}_description`,
        label: "Description",
        maxLength: 4096,
        rows: 4,
        error: form.field("description").error
      }, form.field("description").inputProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_layout_RowContainer__WEBPACK_IMPORTED_MODULE_5__["RowContainer"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_input_text_InputField__WEBPACK_IMPORTED_MODULE_4__["InputField"], _objectSpread({
          id: `_${embed.id}_url`,
          label: "URL",
          error: form.field("url").error
        }, form.field("url").inputProps), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_input_color_ColorInputField__WEBPACK_IMPORTED_MODULE_3__["ColorInputField"], {
          id: `_${embed.id}_color`,
          label: "Color",
          color: embed.color
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, this));
}

/***/ }),

/***/ "./modules/editor/message/EmbedEditor.tsx":
/*!************************************************!*\
  !*** ./modules/editor/message/EmbedEditor.tsx ***!
  \************************************************/
/*! exports provided: EmbedEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmbedEditor", function() { return EmbedEditor; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-state-tree */ "mobx-state-tree");
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mstform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mstform */ "mstform");
/* harmony import */ var mstform__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mstform__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_input_button_PrimaryButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/input/button/PrimaryButton */ "./common/input/button/PrimaryButton.ts");
/* harmony import */ var _common_layout_Section__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/layout/Section */ "./common/layout/Section.tsx");
/* harmony import */ var _common_layout_Separator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/layout/Separator */ "./common/layout/Separator.ts");
/* harmony import */ var _common_layout_Stack__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/layout/Stack */ "./common/layout/Stack.ts");
/* harmony import */ var _icons_chevron__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../icons/chevron */ "./icons/chevron.tsx");
/* harmony import */ var _icons_copy__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../icons/copy */ "./icons/copy.tsx");
/* harmony import */ var _icons_remove__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../icons/remove */ "./icons/remove.tsx");
/* harmony import */ var _EmbedAuthorEditor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./EmbedAuthorEditor */ "./modules/editor/message/EmbedAuthorEditor.tsx");
/* harmony import */ var _EmbedBodyEditor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./EmbedBodyEditor */ "./modules/editor/message/EmbedBodyEditor.tsx");
/* harmony import */ var _EmbedFieldEditor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./EmbedFieldEditor */ "./modules/editor/message/EmbedFieldEditor.tsx");
/* harmony import */ var _EmbedFooterEditor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./EmbedFooterEditor */ "./modules/editor/message/EmbedFooterEditor.tsx");
/* harmony import */ var _EmbedImagesEditor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./EmbedImagesEditor */ "./modules/editor/message/EmbedImagesEditor.tsx");

var _jsxFileName = "F:\\DiscordHookSite\\modules\\editor\\message\\EmbedEditor.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

















function EmbedEditor(props) {
  const {
    embed,
    form
  } = props;
  const name = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__["useObserver"])(() => {
    let name = `Embed ${form.index + 1}`;

    if (embed.displayName) {
      name += ` — ${embed.displayName}`;
    }

    return name;
  });
  return Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__["useObserver"])(() => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_layout_Section__WEBPACK_IMPORTED_MODULE_6__["Section"], {
    name: name,
    variant: "large",
    color: embed.color,
    actions: [form.index !== 0 && {
      icon: _icons_chevron__WEBPACK_IMPORTED_MODULE_9__["chevron"],
      label: "Move up",
      handler: () => {
        var _form$parent;

        Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__["applyPatch"])(form.state.value, [{
          op: "remove",
          path: form.path
        }, {
          op: "add",
          path: `${(_form$parent = form.parent) === null || _form$parent === void 0 ? void 0 : _form$parent.path}/${form.index - 1}`,
          value: Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__["getSnapshot"])(embed)
        }]);
        const parent = form.parent;

        for (const accessor of parent.index(form.index - 1).flatAccessors) {
          if (accessor instanceof mstform__WEBPACK_IMPORTED_MODULE_3__["FieldAccessor"]) {
            accessor.setRawFromValue();
          }
        }
      }
    }, form.index !== embed.message.embeds.length - 1 && {
      icon: _icons_chevron__WEBPACK_IMPORTED_MODULE_9__["chevronDown"],
      label: "Move down",
      handler: () => {
        var _form$parent2;

        Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__["applyPatch"])(form.state.value, [{
          op: "remove",
          path: form.path
        }, {
          op: "add",
          path: `${(_form$parent2 = form.parent) === null || _form$parent2 === void 0 ? void 0 : _form$parent2.path}/${form.index + 1}`,
          value: Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__["getSnapshot"])(embed)
        }]);
        const parent = form.parent;

        for (const accessor of parent.index(form.index + 1).flatAccessors) {
          if (accessor instanceof mstform__WEBPACK_IMPORTED_MODULE_3__["FieldAccessor"]) {
            accessor.setRawFromValue();
          }
        }
      }
    }, embed.message.size < 10 && {
      icon: _icons_copy__WEBPACK_IMPORTED_MODULE_10__["copy"],
      label: "Duplicate",
      handler: () => {
        var _form$parent3;

        Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__["applyPatch"])(form.state.value, [{
          op: "add",
          path: `${(_form$parent3 = form.parent) === null || _form$parent3 === void 0 ? void 0 : _form$parent3.path}/${form.index + 1}`,
          value: _objectSpread(_objectSpread({}, Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__["getSnapshot"])(embed)), {}, {
            id: undefined
          })
        }]);
        const parent = form.parent;

        for (const accessor of parent.index(form.index + 1).flatAccessors) {
          if (accessor instanceof mstform__WEBPACK_IMPORTED_MODULE_3__["FieldAccessor"]) {
            accessor.setRawFromValue();
          }
        }
      }
    }, {
      icon: _icons_remove__WEBPACK_IMPORTED_MODULE_11__["remove"],
      label: "Remove",
      handler: () => {
        Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__["applyPatch"])(form.state.value, [{
          op: "remove",
          path: form.path
        }]);
      }
    }].filter(item => typeof item === "object"),
    hasError: !form.isValid,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_layout_Stack__WEBPACK_IMPORTED_MODULE_8__["Stack"], {
      gap: 16,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_EmbedAuthorEditor__WEBPACK_IMPORTED_MODULE_12__["EmbedAuthorEditor"], {
        embed: embed,
        form: form
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_layout_Separator__WEBPACK_IMPORTED_MODULE_7__["Separator"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_EmbedBodyEditor__WEBPACK_IMPORTED_MODULE_13__["EmbedBodyEditor"], {
        embed: embed,
        form: form
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_layout_Separator__WEBPACK_IMPORTED_MODULE_7__["Separator"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_layout_Section__WEBPACK_IMPORTED_MODULE_6__["Section"], {
        name: "Fields",
        variant: "indented",
        hasError: !form.repeatingForm("fields").isValid,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_layout_Stack__WEBPACK_IMPORTED_MODULE_8__["Stack"], {
          gap: 16,
          children: [embed.fields.map((field, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_EmbedFieldEditor__WEBPACK_IMPORTED_MODULE_14__["EmbedFieldEditor"], {
            field: field,
            form: form.repeatingForm("fields").index(index)
          }, field.id, false, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 15
          }, this)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_input_button_PrimaryButton__WEBPACK_IMPORTED_MODULE_5__["PrimaryButton"], {
              disabled: embed.fields.length >= 25,
              onClick: () => {
                form.repeatingForm("fields").push({});
              },
              children: "Add Field"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 146,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_layout_Separator__WEBPACK_IMPORTED_MODULE_7__["Separator"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_EmbedImagesEditor__WEBPACK_IMPORTED_MODULE_16__["EmbedImagesEditor"], {
        embed: embed,
        form: form
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_layout_Separator__WEBPACK_IMPORTED_MODULE_7__["Separator"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_EmbedFooterEditor__WEBPACK_IMPORTED_MODULE_15__["EmbedFooterEditor"], {
        embed: embed,
        form: form
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 5
  }, this));
}

/***/ }),

/***/ "./modules/editor/message/EmbedFieldEditor.tsx":
/*!*****************************************************!*\
  !*** ./modules/editor/message/EmbedFieldEditor.tsx ***!
  \*****************************************************/
/*! exports provided: EmbedFieldEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmbedFieldEditor", function() { return EmbedFieldEditor; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-state-tree */ "mobx-state-tree");
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mstform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mstform */ "mstform");
/* harmony import */ var mstform__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mstform__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_input_checkable_Checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/input/checkable/Checkbox */ "./common/input/checkable/Checkbox.tsx");
/* harmony import */ var _common_input_text_InputField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/input/text/InputField */ "./common/input/text/InputField.tsx");
/* harmony import */ var _common_layout_Section__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/layout/Section */ "./common/layout/Section.tsx");
/* harmony import */ var _common_layout_Stack__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/layout/Stack */ "./common/layout/Stack.ts");
/* harmony import */ var _icons_chevron__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../icons/chevron */ "./icons/chevron.tsx");
/* harmony import */ var _icons_copy__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../icons/copy */ "./icons/copy.tsx");
/* harmony import */ var _icons_remove__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../icons/remove */ "./icons/remove.tsx");

var _jsxFileName = "F:\\DiscordHookSite\\modules\\editor\\message\\EmbedFieldEditor.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













const InlineCheckbox = styled_components__WEBPACK_IMPORTED_MODULE_5___default()(_common_input_checkable_Checkbox__WEBPACK_IMPORTED_MODULE_6__["Checkbox"]).withConfig({
  displayName: "EmbedFieldEditor__InlineCheckbox",
  componentId: "sc-1vw8qxe-0"
})(["margin-left:12px;"]);
function EmbedFieldEditor(props) {
  const {
    field,
    form
  } = props;
  const name = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__["useObserver"])(() => {
    let name = `Field ${form.index + 1}`;

    if (field.displayName) {
      name += ` — ${field.displayName}`;
    }

    return name;
  });
  return Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__["useObserver"])(() => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_layout_Section__WEBPACK_IMPORTED_MODULE_8__["Section"], {
    name: name,
    actions: [form.index !== 0 && {
      icon: _icons_chevron__WEBPACK_IMPORTED_MODULE_10__["chevron"],
      label: "Move up",
      handler: () => {
        var _form$parent;

        Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__["applyPatch"])(form.state.value, [{
          op: "remove",
          path: form.path
        }, {
          op: "add",
          path: `${(_form$parent = form.parent) === null || _form$parent === void 0 ? void 0 : _form$parent.path}/${form.index - 1}`,
          value: Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__["getSnapshot"])(field)
        }]);
        const parent = form.parent;

        for (const accessor of parent.index(form.index - 1).flatAccessors) {
          if (accessor instanceof mstform__WEBPACK_IMPORTED_MODULE_3__["FieldAccessor"]) {
            accessor.setRawFromValue();
          }
        }
      }
    }, form.index !== field.embed.fields.length - 1 && {
      icon: _icons_chevron__WEBPACK_IMPORTED_MODULE_10__["chevronDown"],
      label: "Move down",
      handler: () => {
        var _form$parent2;

        Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__["applyPatch"])(form.state.value, [{
          op: "remove",
          path: form.path
        }, {
          op: "add",
          path: `${(_form$parent2 = form.parent) === null || _form$parent2 === void 0 ? void 0 : _form$parent2.path}/${form.index + 1}`,
          value: Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__["getSnapshot"])(field)
        }]);
        const parent = form.parent;

        for (const accessor of parent.index(form.index + 1).flatAccessors) {
          if (accessor instanceof mstform__WEBPACK_IMPORTED_MODULE_3__["FieldAccessor"]) {
            accessor.setRawFromValue();
          }
        }
      }
    }, field.embed.fields.length < 25 && {
      icon: _icons_copy__WEBPACK_IMPORTED_MODULE_11__["copy"],
      label: "Duplicate",
      handler: () => {
        var _form$parent3;

        Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__["applyPatch"])(form.state.value, [{
          op: "add",
          path: `${(_form$parent3 = form.parent) === null || _form$parent3 === void 0 ? void 0 : _form$parent3.path}/${form.index + 1}`,
          value: _objectSpread(_objectSpread({}, Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__["getSnapshot"])(field)), {}, {
            id: undefined
          })
        }]);
        const parent = form.parent;

        for (const accessor of parent.index(form.index + 1).flatAccessors) {
          if (accessor instanceof mstform__WEBPACK_IMPORTED_MODULE_3__["FieldAccessor"]) {
            accessor.setRawFromValue();
          }
        }
      }
    }, {
      icon: _icons_remove__WEBPACK_IMPORTED_MODULE_12__["remove"],
      label: "Remove",
      handler: () => {
        Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__["applyPatch"])(form.state.value, [{
          op: "remove",
          path: form.path
        }]);
      }
    }].filter(item => typeof item === "object"),
    hasError: !form.isValid,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_layout_Stack__WEBPACK_IMPORTED_MODULE_9__["Stack"], {
      gap: 12,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_input_text_InputField__WEBPACK_IMPORTED_MODULE_7__["InputField"], _objectSpread(_objectSpread({
        id: `_${field.id}_name`,
        label: "Field Name",
        maxLength: 256,
        required: true,
        rows: 1,
        error: form.field("name").error
      }, form.field("name").inputProps), {}, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InlineCheckbox, _objectSpread({
          id: `_${field.id}_inline`,
          label: "Inline"
        }, form.field("inline").inputProps), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 11
        }, this)
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_input_text_InputField__WEBPACK_IMPORTED_MODULE_7__["InputField"], _objectSpread({
        id: `_${field.id}_value`,
        label: "Field Value",
        maxLength: 1024,
        required: true,
        rows: 4,
        error: form.field("value").error
      }, form.field("value").inputProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 5
  }, this));
}

/***/ }),

/***/ "./modules/editor/message/EmbedFooterEditor.tsx":
/*!******************************************************!*\
  !*** ./modules/editor/message/EmbedFooterEditor.tsx ***!
  \******************************************************/
/*! exports provided: EmbedFooterEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmbedFooterEditor", function() { return EmbedFooterEditor; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_input_text_InputField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/input/text/InputField */ "./common/input/text/InputField.tsx");
/* harmony import */ var _common_input_timestamp_TimestampInputField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/input/timestamp/TimestampInputField */ "./common/input/timestamp/TimestampInputField.tsx");
/* harmony import */ var _common_layout_RowContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/layout/RowContainer */ "./common/layout/RowContainer.ts");
/* harmony import */ var _common_layout_Section__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/layout/Section */ "./common/layout/Section.tsx");
/* harmony import */ var _common_layout_Stack__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/layout/Stack */ "./common/layout/Stack.ts");

var _jsxFileName = "F:\\DiscordHookSite\\modules\\editor\\message\\EmbedFooterEditor.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function EmbedFooterEditor(props) {
  const {
    embed,
    form
  } = props;
  return Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__["useObserver"])(() => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_layout_Section__WEBPACK_IMPORTED_MODULE_6__["Section"], {
    name: "Footer",
    hasError: !form.group("footer").isValid,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_layout_Stack__WEBPACK_IMPORTED_MODULE_7__["Stack"], {
      gap: 12,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_input_text_InputField__WEBPACK_IMPORTED_MODULE_3__["InputField"], _objectSpread({
        id: `_${embed.id}_footer`,
        label: "Footer",
        maxLength: 2048,
        rows: 1,
        error: form.field("footer").error
      }, form.field("footer").inputProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_layout_RowContainer__WEBPACK_IMPORTED_MODULE_5__["RowContainer"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_input_timestamp_TimestampInputField__WEBPACK_IMPORTED_MODULE_4__["TimestampInputField"], _objectSpread({
          id: `_${embed.id}_timestamp`,
          label: "Timestamp"
        }, form.field("timestamp").inputProps), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_input_text_InputField__WEBPACK_IMPORTED_MODULE_3__["InputField"], _objectSpread({
          id: `_${embed.id}_footerIcon`,
          label: "Footer Icon URL",
          disabled: !embed.footer,
          error: form.field("footerIcon").error
        }, form.field("footerIcon").inputProps), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, this));
}

/***/ }),

/***/ "./modules/editor/message/EmbedImagesEditor.tsx":
/*!******************************************************!*\
  !*** ./modules/editor/message/EmbedImagesEditor.tsx ***!
  \******************************************************/
/*! exports provided: EmbedImagesEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmbedImagesEditor", function() { return EmbedImagesEditor; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_input_list_ListInputField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/input/list/ListInputField */ "./common/input/list/ListInputField.tsx");
/* harmony import */ var _common_input_text_InputField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/input/text/InputField */ "./common/input/text/InputField.tsx");
/* harmony import */ var _common_layout_RowContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/layout/RowContainer */ "./common/layout/RowContainer.ts");
/* harmony import */ var _common_layout_Section__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/layout/Section */ "./common/layout/Section.tsx");
/* harmony import */ var _common_layout_Stack__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/layout/Stack */ "./common/layout/Stack.ts");
/* harmony import */ var _markdown_Markdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../markdown/Markdown */ "./modules/markdown/Markdown.tsx");

var _jsxFileName = "F:\\DiscordHookSite\\modules\\editor\\message\\EmbedImagesEditor.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const Message = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_markdown_Markdown__WEBPACK_IMPORTED_MODULE_9__["Markdown"]).withConfig({
  displayName: "EmbedImagesEditor__Message",
  componentId: "sc-5bwb8l-0"
})(["margin-top:-8px;font-size:15px;"]);
function EmbedImagesEditor(props) {
  const {
    embed,
    form
  } = props;
  return Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__["useObserver"])(() => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_layout_Section__WEBPACK_IMPORTED_MODULE_7__["Section"], {
    name: "Images",
    hasError: !form.group("images").isValid,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_layout_Stack__WEBPACK_IMPORTED_MODULE_8__["Stack"], {
      gap: 12,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_input_list_ListInputField__WEBPACK_IMPORTED_MODULE_4__["ListInputField"], _objectSpread({
        id: `_${embed.id}_gallery`,
        label: {
          singular: "Image",
          plural: "Image URLs"
        },
        limit: embed.url ? 4 : 1,
        error: form.field("gallery").error
      }, form.field("gallery").inputProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Message, {
        content: "*Adding up to 4 images is possible when the URL in the Body " + "section is set.*"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_layout_RowContainer__WEBPACK_IMPORTED_MODULE_6__["RowContainer"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_input_text_InputField__WEBPACK_IMPORTED_MODULE_5__["InputField"], _objectSpread({
          id: `_${embed.id}_thumbnail`,
          label: "Thumbnail URL",
          error: form.field("thumbnail").error
        }, form.field("thumbnail").inputProps), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }, this));
}

/***/ }),

/***/ "./modules/editor/message/MessageEditor.tsx":
/*!**************************************************!*\
  !*** ./modules/editor/message/MessageEditor.tsx ***!
  \**************************************************/
/*! exports provided: MessageEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageEditor", function() { return MessageEditor; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-state-tree */ "mobx-state-tree");
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_input_button_PrimaryButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/input/button/PrimaryButton */ "./common/input/button/PrimaryButton.ts");
/* harmony import */ var _common_input_button_SecondaryButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/input/button/SecondaryButton */ "./common/input/button/SecondaryButton.ts");
/* harmony import */ var _common_input_error_InputError__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/input/error/InputError */ "./common/input/error/InputError.tsx");
/* harmony import */ var _common_input_text_InputField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/input/text/InputField */ "./common/input/text/InputField.tsx");
/* harmony import */ var _common_layout_ButtonList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../common/layout/ButtonList */ "./common/layout/ButtonList.tsx");
/* harmony import */ var _common_layout_Stack__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../common/layout/Stack */ "./common/layout/Stack.ts");
/* harmony import */ var _common_modal_ModalManagerContext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../common/modal/ModalManagerContext */ "./common/modal/ModalManagerContext.tsx");
/* harmony import */ var _common_state_useRequiredContext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../common/state/useRequiredContext */ "./common/state/useRequiredContext.ts");
/* harmony import */ var _markdown_Markdown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../markdown/Markdown */ "./modules/markdown/Markdown.tsx");
/* harmony import */ var _EditorManagerContext__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../EditorManagerContext */ "./modules/editor/EditorManagerContext.tsx");
/* harmony import */ var _EmbedEditor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./EmbedEditor */ "./modules/editor/message/EmbedEditor.tsx");
/* harmony import */ var _PrimaryContentEditor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./PrimaryContentEditor */ "./modules/editor/message/PrimaryContentEditor.tsx");

var _jsxFileName = "F:\\DiscordHookSite\\modules\\editor\\message\\MessageEditor.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















const DataEditorModal = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(async () => __webpack_require__.e(/*! import() */ 192).then(__webpack_require__.bind(null, /*! ../data/DataEditorModal */ "./modules/editor/data/DataEditorModal.tsx")).then(module => module.DataEditorModal), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ../data/DataEditorModal */ "./modules/editor/data/DataEditorModal.tsx")],
    modules: ["../data/DataEditorModal"]
  }
});
const Message = styled_components__WEBPACK_IMPORTED_MODULE_5___default()(_markdown_Markdown__WEBPACK_IMPORTED_MODULE_14__["Markdown"]).withConfig({
  displayName: "MessageEditor__Message",
  componentId: "gy799t-0"
})(["margin-top:-8px;font-size:15px;"]);
const EmbedValidationErrorContainer = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "MessageEditor__EmbedValidationErrorContainer",
  componentId: "gy799t-1"
})(["margin-bottom:8px;&:empty{margin:0;}"]);
function MessageEditor(props) {
  const {
    message,
    form
  } = props;
  const modalManager = Object(_common_state_useRequiredContext__WEBPACK_IMPORTED_MODULE_13__["useRequiredContext"])(_common_modal_ModalManagerContext__WEBPACK_IMPORTED_MODULE_12__["ModalManagerContext"]);
  const editorManager = Object(_common_state_useRequiredContext__WEBPACK_IMPORTED_MODULE_13__["useRequiredContext"])(_EditorManagerContext__WEBPACK_IMPORTED_MODULE_15__["EditorManagerContext"]);

  const spawnDataEditorModal = () => modalManager.spawn({
    render: () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(DataEditorModal, {
      message: message
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 21
    }, this)
  });

  return Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__["useObserver"])(() => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_layout_Stack__WEBPACK_IMPORTED_MODULE_11__["Stack"], {
    gap: 16,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_PrimaryContentEditor__WEBPACK_IMPORTED_MODULE_17__["PrimaryContentEditor"], {
      message: message,
      form: form
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, this), message.embeds.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(EmbedValidationErrorContainer, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_input_error_InputError__WEBPACK_IMPORTED_MODULE_8__["InputError"], {
          error: message.embedLength > 6000 ? "Embeds exceed 6000 character limit" : undefined
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_layout_Stack__WEBPACK_IMPORTED_MODULE_11__["Stack"], {
        gap: 16,
        children: message.embeds.map((embed, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_EmbedEditor__WEBPACK_IMPORTED_MODULE_16__["EmbedEditor"], {
          embed: embed,
          form: form.repeatingForm("embeds").index(index)
        }, embed.id, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 15
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_input_button_PrimaryButton__WEBPACK_IMPORTED_MODULE_6__["PrimaryButton"], {
        disabled: message.size >= 10,
        onClick: () => {
          form.repeatingForm("embeds").push({}, ["timestamp"]);
        },
        children: "Add Embed"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_input_text_InputField__WEBPACK_IMPORTED_MODULE_9__["InputField"], _objectSpread({
      id: `_${message.id}_reference`,
      label: "Message Link",
      placeholder: "https://discord.com/channels/...",
      error: form.field("reference").error
    }, form.field("reference").inputProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Message, {
      content: "*When a message link is set, pressing submit or edit will edit the" + " message sent inside of Discord. To load a message sent in Discord, use" + " the bot's 'restore' command.*"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_layout_ButtonList__WEBPACK_IMPORTED_MODULE_10__["ButtonList"], {
      children: [editorManager.messages.length > 1 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_input_button_SecondaryButton__WEBPACK_IMPORTED_MODULE_7__["SecondaryButton"], {
        onClick: () => {
          Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__["applyPatch"])(form.state.value, [{
            op: "remove",
            path: form.path
          }]);
        },
        children: "Remove Message"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_input_button_SecondaryButton__WEBPACK_IMPORTED_MODULE_7__["SecondaryButton"], {
        onClick: () => spawnDataEditorModal(),
        children: "JSON Data Editor"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 5
  }, this));
}

/***/ }),

/***/ "./modules/editor/message/PrimaryContentEditor.tsx":
/*!*********************************************************!*\
  !*** ./modules/editor/message/PrimaryContentEditor.tsx ***!
  \*********************************************************/
/*! exports provided: PrimaryContentEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrimaryContentEditor", function() { return PrimaryContentEditor; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_input_error_InputError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/input/error/InputError */ "./common/input/error/InputError.tsx");
/* harmony import */ var _common_input_file_FileInputField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/input/file/FileInputField */ "./common/input/file/FileInputField.tsx");
/* harmony import */ var _common_input_text_InputField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/input/text/InputField */ "./common/input/text/InputField.tsx");
/* harmony import */ var _common_layout_Section__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/layout/Section */ "./common/layout/Section.tsx");
/* harmony import */ var _common_layout_Stack__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/layout/Stack */ "./common/layout/Stack.ts");

var _jsxFileName = "F:\\DiscordHookSite\\modules\\editor\\message\\PrimaryContentEditor.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function PrimaryContentEditor(props) {
  const {
    message,
    form
  } = props;
  const isEditing = Boolean(message.reference);
  return Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__["useObserver"])(() => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_layout_Stack__WEBPACK_IMPORTED_MODULE_7__["Stack"], {
    gap: 12,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_input_text_InputField__WEBPACK_IMPORTED_MODULE_5__["InputField"], _objectSpread({
      id: `_${message.id}_content`,
      label: "Content",
      maxLength: 2000,
      rows: 4,
      error: form.field("content").error
    }, form.field("content").inputProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_layout_Section__WEBPACK_IMPORTED_MODULE_6__["Section"], {
      name: "Profile",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_layout_Stack__WEBPACK_IMPORTED_MODULE_7__["Stack"], {
        gap: 12,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_input_text_InputField__WEBPACK_IMPORTED_MODULE_5__["InputField"], _objectSpread(_objectSpread({
          id: `_${message.id}_username`,
          label: "Username",
          maxLength: 80,
          error: form.field("username").error
        }, form.field("username").inputProps), {}, {
          disabled: isEditing
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_input_text_InputField__WEBPACK_IMPORTED_MODULE_5__["InputField"], _objectSpread(_objectSpread({
          id: `_${message.id}_avatar`,
          label: "Avatar URL",
          error: form.field("avatar").error
        }, form.field("avatar").inputProps), {}, {
          disabled: isEditing
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_input_error_InputError__WEBPACK_IMPORTED_MODULE_3__["InputError"], {
          variant: "warning",
          error: isEditing ? "You cannot edit the username and avatar for previously sent messages" : undefined
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_input_file_FileInputField__WEBPACK_IMPORTED_MODULE_4__["FileInputField"], {
      id: `_${message.id}_files`,
      label: "Files",
      maxSize: 8 * 1024 ** 2,
      value: message.files,
      onChange: files => message.set("files", files)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, this));
}

/***/ }),

/***/ "./modules/editor/share/ShareModal.tsx":
/*!*********************************************!*\
  !*** ./modules/editor/share/ShareModal.tsx ***!
  \*********************************************/
/*! exports provided: ShareModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareModal", function() { return ShareModal; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_dom_copyTextToClipboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/dom/copyTextToClipboard */ "./common/dom/copyTextToClipboard.ts");
/* harmony import */ var _common_input_button_PrimaryButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/input/button/PrimaryButton */ "./common/input/button/PrimaryButton.ts");
/* harmony import */ var _common_input_button_SecondaryButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/input/button/SecondaryButton */ "./common/input/button/SecondaryButton.ts");
/* harmony import */ var _common_modal_layout_ModalAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/modal/layout/ModalAction */ "./common/modal/layout/ModalAction.ts");
/* harmony import */ var _common_modal_layout_ModalBody__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/modal/layout/ModalBody */ "./common/modal/layout/ModalBody.ts");
/* harmony import */ var _common_modal_layout_ModalContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/modal/layout/ModalContainer */ "./common/modal/layout/ModalContainer.ts");
/* harmony import */ var _common_modal_layout_ModalFooter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/modal/layout/ModalFooter */ "./common/modal/layout/ModalFooter.ts");
/* harmony import */ var _common_modal_layout_ModalHeader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/modal/layout/ModalHeader */ "./common/modal/layout/ModalHeader.ts");
/* harmony import */ var _common_modal_layout_ModalTitle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../common/modal/layout/ModalTitle */ "./common/modal/layout/ModalTitle.ts");
/* harmony import */ var _common_modal_ModalContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../common/modal/ModalContext */ "./common/modal/ModalContext.ts");
/* harmony import */ var _common_state_useRequiredContext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../common/state/useRequiredContext */ "./common/state/useRequiredContext.ts");
/* harmony import */ var _common_utilities_shorten__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../common/utilities/shorten */ "./common/utilities/shorten.ts");
/* harmony import */ var _icons_remove__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../icons/remove */ "./icons/remove.tsx");
/* harmony import */ var _markdown_Markdown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../markdown/Markdown */ "./modules/markdown/Markdown.tsx");
/* harmony import */ var _getEditorUrl__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../getEditorUrl */ "./modules/editor/getEditorUrl.ts");

var _jsxFileName = "F:\\DiscordHookSite\\modules\\editor\\share\\ShareModal.tsx";
















function ShareModal(props) {
  const {
    editorManager
  } = props;
  const modal = Object(_common_state_useRequiredContext__WEBPACK_IMPORTED_MODULE_12__["useRequiredContext"])(_common_modal_ModalContext__WEBPACK_IMPORTED_MODULE_11__["ModalContext"]);
  const {
    0: response,
    1: setResponse
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const url = Object(_getEditorUrl__WEBPACK_IMPORTED_MODULE_16__["getEditorUrl"])(editorManager);
    Object(_common_utilities_shorten__WEBPACK_IMPORTED_MODULE_13__["shorten"])(url).then(response => setResponse(response)).catch(() => setResponse(null));
  }, [editorManager]);
  let content = "Getting short URL...";

  if (response) {
    const formattedExpires = response.expires.toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true
    });
    content = `URL: <${response.url}>\nThis link expires at ${formattedExpires}.`;
  } else if (response === null) {
    content = "Failed getting short URL. Please try again later.";
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_modal_layout_ModalContainer__WEBPACK_IMPORTED_MODULE_7__["ModalContainer"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_modal_layout_ModalHeader__WEBPACK_IMPORTED_MODULE_9__["ModalHeader"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_modal_layout_ModalTitle__WEBPACK_IMPORTED_MODULE_10__["ModalTitle"], {
        children: "Share"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_modal_layout_ModalAction__WEBPACK_IMPORTED_MODULE_5__["ModalAction"], {
        icon: _icons_remove__WEBPACK_IMPORTED_MODULE_14__["remove"],
        label: "Close",
        onClick: () => modal.dismiss()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_modal_layout_ModalBody__WEBPACK_IMPORTED_MODULE_6__["ModalBody"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_markdown_Markdown__WEBPACK_IMPORTED_MODULE_15__["Markdown"], {
        content: content
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_modal_layout_ModalFooter__WEBPACK_IMPORTED_MODULE_8__["ModalFooter"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_input_button_SecondaryButton__WEBPACK_IMPORTED_MODULE_4__["SecondaryButton"], {
        disabled: !response,
        onClick: () => {
          var _response$url;

          Object(_common_dom_copyTextToClipboard__WEBPACK_IMPORTED_MODULE_2__["copyTextToClipboard"])((_response$url = response === null || response === void 0 ? void 0 : response.url) !== null && _response$url !== void 0 ? _response$url : "");
        },
        children: "Copy Link"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_input_button_PrimaryButton__WEBPACK_IMPORTED_MODULE_3__["PrimaryButton"], {
        onClick: () => {
          modal.dismiss();
        },
        children: "Close"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./modules/editor/webhook/NetworkErrorModal.tsx":
/*!******************************************************!*\
  !*** ./modules/editor/webhook/NetworkErrorModal.tsx ***!
  \******************************************************/
/*! exports provided: NetworkErrorModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkErrorModal", function() { return NetworkErrorModal; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_input_button_SecondaryButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/input/button/SecondaryButton */ "./common/input/button/SecondaryButton.ts");
/* harmony import */ var _common_modal_layout_ModalAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/modal/layout/ModalAction */ "./common/modal/layout/ModalAction.ts");
/* harmony import */ var _common_modal_layout_ModalBody__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/modal/layout/ModalBody */ "./common/modal/layout/ModalBody.ts");
/* harmony import */ var _common_modal_layout_ModalContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/modal/layout/ModalContainer */ "./common/modal/layout/ModalContainer.ts");
/* harmony import */ var _common_modal_layout_ModalFooter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/modal/layout/ModalFooter */ "./common/modal/layout/ModalFooter.ts");
/* harmony import */ var _common_modal_layout_ModalHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/modal/layout/ModalHeader */ "./common/modal/layout/ModalHeader.ts");
/* harmony import */ var _common_modal_layout_ModalTitle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/modal/layout/ModalTitle */ "./common/modal/layout/ModalTitle.ts");
/* harmony import */ var _common_modal_ModalContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/modal/ModalContext */ "./common/modal/ModalContext.ts");
/* harmony import */ var _common_state_useRequiredContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../common/state/useRequiredContext */ "./common/state/useRequiredContext.ts");
/* harmony import */ var _icons_remove__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../icons/remove */ "./icons/remove.tsx");
/* harmony import */ var _markdown_Markdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../markdown/Markdown */ "./modules/markdown/Markdown.tsx");

var _jsxFileName = "F:\\DiscordHookSite\\modules\\editor\\webhook\\NetworkErrorModal.tsx";












function NetworkErrorModal() {
  const modal = Object(_common_state_useRequiredContext__WEBPACK_IMPORTED_MODULE_10__["useRequiredContext"])(_common_modal_ModalContext__WEBPACK_IMPORTED_MODULE_9__["ModalContext"]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_modal_layout_ModalContainer__WEBPACK_IMPORTED_MODULE_5__["ModalContainer"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_modal_layout_ModalHeader__WEBPACK_IMPORTED_MODULE_7__["ModalHeader"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_modal_layout_ModalTitle__WEBPACK_IMPORTED_MODULE_8__["ModalTitle"], {
        children: "Connection Error"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_modal_layout_ModalAction__WEBPACK_IMPORTED_MODULE_3__["ModalAction"], {
        icon: _icons_remove__WEBPACK_IMPORTED_MODULE_11__["remove"],
        label: "Close",
        onClick: () => modal.dismiss()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_modal_layout_ModalBody__WEBPACK_IMPORTED_MODULE_4__["ModalBody"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_markdown_Markdown__WEBPACK_IMPORTED_MODULE_12__["Markdown"], {
        content: "There was a network error while sending the message. Make sure" + " you are connected to the internet, and no extensions in your" + " browser are blocking connections to Discord."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_modal_layout_ModalFooter__WEBPACK_IMPORTED_MODULE_6__["ModalFooter"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_input_button_SecondaryButton__WEBPACK_IMPORTED_MODULE_2__["SecondaryButton"], {
        onClick: () => modal.dismiss(),
        children: "Close"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./modules/editor/webhook/WebhookControls.tsx":
/*!****************************************************!*\
  !*** ./modules/editor/webhook/WebhookControls.tsx ***!
  \****************************************************/
/*! exports provided: WebhookControls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebhookControls", function() { return WebhookControls; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-state-tree */ "mobx-state-tree");
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_input_button_PrimaryButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/input/button/PrimaryButton */ "./common/input/button/PrimaryButton.ts");
/* harmony import */ var _common_input_button_SecondaryButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/input/button/SecondaryButton */ "./common/input/button/SecondaryButton.ts");
/* harmony import */ var _common_input_text_HiddenInputField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/input/text/HiddenInputField */ "./common/input/text/HiddenInputField.tsx");
/* harmony import */ var _common_layout_IconButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/layout/IconButton */ "./common/layout/IconButton.tsx");
/* harmony import */ var _common_layout_Stack__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/layout/Stack */ "./common/layout/Stack.ts");
/* harmony import */ var _common_modal_ModalManagerContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../common/modal/ModalManagerContext */ "./common/modal/ModalManagerContext.tsx");
/* harmony import */ var _common_state_useRequiredContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../common/state/useRequiredContext */ "./common/state/useRequiredContext.ts");
/* harmony import */ var _icons_remove__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../icons/remove */ "./icons/remove.tsx");
/* harmony import */ var _EditorManagerContext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../EditorManagerContext */ "./modules/editor/EditorManagerContext.tsx");
/* harmony import */ var _NetworkErrorModal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./NetworkErrorModal */ "./modules/editor/webhook/NetworkErrorModal.tsx");

var _jsxFileName = "F:\\DiscordHookSite\\modules\\editor\\webhook\\WebhookControls.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















const InputAction = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(_common_layout_IconButton__WEBPACK_IMPORTED_MODULE_8__["IconButton"]).withConfig({
  displayName: "WebhookControls__InputAction",
  componentId: "sc-12rmoi1-0"
})(["margin-left:8px;"]);
function WebhookControls(props) {
  const {
    form
  } = props;
  const editorManager = Object(_common_state_useRequiredContext__WEBPACK_IMPORTED_MODULE_11__["useRequiredContext"])(_EditorManagerContext__WEBPACK_IMPORTED_MODULE_13__["EditorManagerContext"]);
  const modalManager = Object(_common_state_useRequiredContext__WEBPACK_IMPORTED_MODULE_11__["useRequiredContext"])(_common_modal_ModalManagerContext__WEBPACK_IMPORTED_MODULE_10__["ModalManagerContext"]);
  const {
    0: submitting,
    1: setSubmitting
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false);

  const handleSubmit = async () => {
    if (submitting) return;
    form.validate();
    if (!form.isValid) return;
    setSubmitting(true);

    try {
      await form.save();
    } catch {
      modalManager.spawn({
        render: () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_NetworkErrorModal__WEBPACK_IMPORTED_MODULE_14__["NetworkErrorModal"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 23
        }, this)
      });
    }

    setSubmitting(false);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    if (editorManager.targets.length > 0) return;
    Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__["applyPatch"])(form.state.value, [{
      op: "add",
      path: "/targets/0",
      value: {}
    }]);
  });
  return Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__["useObserver"])(() => {
    let submitLabel = "Submit";

    if (editorManager.messages.every(message => !message.reference)) {
      submitLabel = "Send";
    } else if (editorManager.messages.every(message => message.reference)) {
      submitLabel = "Edit";
    }

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_layout_Stack__WEBPACK_IMPORTED_MODULE_9__["Stack"], {
      gap: 8,
      children: [editorManager.targets.map((target, index) => {
        const targetForm = form.repeatingForm("targets").index(index);
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_input_text_HiddenInputField__WEBPACK_IMPORTED_MODULE_7__["HiddenInputField"], _objectSpread(_objectSpread({
          id: `_${target.id}_url`,
          label: "Webhook URL",
          hideLabel: index > 0,
          placeholder: "https://discord.com/api/webhooks/...",
          error: targetForm.field("url").error
        }, targetForm.field("url").inputProps), {}, {
          children: index === 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_input_button_PrimaryButton__WEBPACK_IMPORTED_MODULE_5__["PrimaryButton"], {
            disabled: editorManager.targets.some(target => !target.exists) || editorManager.messages.length === 0,
            onClick: handleSubmit,
            children: submitLabel
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 17
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputAction, {
            icon: _icons_remove__WEBPACK_IMPORTED_MODULE_12__["remove"],
            label: "Remove",
            onClick: () => {
              Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__["applyPatch"])(targetForm.state.value, [{
                op: "remove",
                path: targetForm.path
              }]);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 17
          }, this)
        }), target.id, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 13
        }, this);
      }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_input_button_SecondaryButton__WEBPACK_IMPORTED_MODULE_6__["SecondaryButton"], {
          onClick: () => {
            Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__["applyPatch"])(form.state.value, [{
              op: "add",
              path: `/targets/${editorManager.targets.length}`,
              value: {}
            }]);
          },
          children: "Add Webhook"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }, this);
  });
}

/***/ }),

/***/ "./modules/markdown/Markdown.tsx":
/*!***************************************!*\
  !*** ./modules/markdown/Markdown.tsx ***!
  \***************************************/
/*! exports provided: Markdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Markdown", function() { return Markdown; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _parsers_parsers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parsers/parsers */ "./modules/markdown/parsers/parsers.ts");
/* harmony import */ var _styles_MarkdownContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/MarkdownContainer */ "./modules/markdown/styles/MarkdownContainer.ts");

var _jsxFileName = "F:\\DiscordHookSite\\modules\\markdown\\Markdown.tsx";




function MarkdownRenderer(props) {
  const {
    className,
    content,
    type = "default"
  } = props;
  const parse = _parsers_parsers__WEBPACK_IMPORTED_MODULE_2__["PARSERS"][type];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_MarkdownContainer__WEBPACK_IMPORTED_MODULE_3__["MarkdownContainer"], {
    className: className,
    children: parse(content.trim())
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

const Markdown = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(MarkdownRenderer);

/***/ }),

/***/ "./modules/markdown/code/CodeBlock.tsx":
/*!*********************************************!*\
  !*** ./modules/markdown/code/CodeBlock.tsx ***!
  \*********************************************/
/*! exports provided: CodeBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeBlock", function() { return CodeBlock; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/lib/core */ "highlight.js/lib/core");
/* harmony import */ var highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_CodeBlockContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/CodeBlockContainer */ "./modules/markdown/styles/CodeBlockContainer.ts");
/* harmony import */ var _getLanguageFromAlias__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getLanguageFromAlias */ "./modules/markdown/code/getLanguageFromAlias.ts");
/* harmony import */ var _highlightCode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./highlightCode */ "./modules/markdown/code/highlightCode.ts");

var _jsxFileName = "F:\\DiscordHookSite\\modules\\markdown\\code\\CodeBlock.tsx";





function CodeBlock(props) {
  const {
    content,
    language = ""
  } = props;
  const {
    0: html,
    1: setHtml
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    Object(_highlightCode__WEBPACK_IMPORTED_MODULE_5__["highlightCode"])(language, content).then(html => setHtml(html !== null && html !== void 0 ? html : "")).catch(() => setHtml(""));
  }, [content, language]);

  if (true) {
    var _getLanguageFromAlias, _getLanguageFromAlias2;

    const safeLanguage = (_getLanguageFromAlias = (_getLanguageFromAlias2 = Object(_getLanguageFromAlias__WEBPACK_IMPORTED_MODULE_4__["getLanguageFromAlias"])(language)) === null || _getLanguageFromAlias2 === void 0 ? void 0 : _getLanguageFromAlias2.name) !== null && _getLanguageFromAlias !== void 0 ? _getLanguageFromAlias : "plaintext";
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_CodeBlockContainer__WEBPACK_IMPORTED_MODULE_3__["CodeBlockContainer"], {
      dangerouslySetInnerHTML: {
        __html: highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_1___default.a.highlight(safeLanguage, content).value
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this);
  }

  if (!html) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_CodeBlockContainer__WEBPACK_IMPORTED_MODULE_3__["CodeBlockContainer"], {
      children: content
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 12
    }, this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_CodeBlockContainer__WEBPACK_IMPORTED_MODULE_3__["CodeBlockContainer"], {
    dangerouslySetInnerHTML: {
      __html: html
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./modules/markdown/code/getLanguageFromAlias.ts":
/*!*******************************************************!*\
  !*** ./modules/markdown/code/getLanguageFromAlias.ts ***!
  \*******************************************************/
/*! exports provided: getLanguageFromAlias */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLanguageFromAlias", function() { return getLanguageFromAlias; });
/* harmony import */ var _languages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./languages */ "./modules/markdown/code/languages.ts");

const getLanguageFromAlias = alias => {
  for (const language of _languages__WEBPACK_IMPORTED_MODULE_0__["LANGUAGES"]) {
    var _language$aliases;

    if (language.name === alias || (_language$aliases = language.aliases) !== null && _language$aliases !== void 0 && _language$aliases.includes(alias)) {
      return language;
    }
  }
};

/***/ }),

/***/ "./modules/markdown/code/highlightCode.ts":
/*!************************************************!*\
  !*** ./modules/markdown/code/highlightCode.ts ***!
  \************************************************/
/*! exports provided: highlightCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "highlightCode", function() { return highlightCode; });
/* harmony import */ var highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! highlight.js/lib/core */ "highlight.js/lib/core");
/* harmony import */ var highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _getLanguageFromAlias__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getLanguageFromAlias */ "./modules/markdown/code/getLanguageFromAlias.ts");
/* harmony import */ var _importLanguage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./importLanguage */ "./modules/markdown/code/importLanguage.ts");
/* eslint-disable @typescript-eslint/no-unnecessary-condition */



const highlightCode = async (languageAlias, content) => {
  const language = Object(_getLanguageFromAlias__WEBPACK_IMPORTED_MODULE_1__["getLanguageFromAlias"])(languageAlias);
  if (!language) return;

  if (!highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0___default.a.getLanguage(language.name)) {
    await Object(_importLanguage__WEBPACK_IMPORTED_MODULE_2__["importLanguage"])(language.name);
  }

  return highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0___default.a.highlight(language.name, content).value;
};

/***/ }),

/***/ "./modules/markdown/code/importLanguage.ts":
/*!*************************************************!*\
  !*** ./modules/markdown/code/importLanguage.ts ***!
  \*************************************************/
/*! exports provided: importLanguage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "importLanguage", function() { return importLanguage; });
/* harmony import */ var highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! highlight.js/lib/core */ "highlight.js/lib/core");
/* harmony import */ var highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _getLanguageFromAlias__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getLanguageFromAlias */ "./modules/markdown/code/getLanguageFromAlias.ts");



const importRawLanguage = async (name) => __webpack_require__("./node_modules/highlight.js/lib/languages lazy recursive ^\\.\\/.*$")(`./${name}`).then(module => module.default);

const importLanguage = async alias => {
  const language = Object(_getLanguageFromAlias__WEBPACK_IMPORTED_MODULE_1__["getLanguageFromAlias"])(alias);
  if (!language) return;
  console.log(language);

  if (language.dependencies) {
    await Promise.all(language.dependencies.map(async dependency => {
      await importLanguage(dependency);
    }));
  }

  highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0___default.a.registerLanguage(language.name, await importRawLanguage(language.name));

  if (false) {}
};

/***/ }),

/***/ "./modules/markdown/code/languages.ts":
/*!********************************************!*\
  !*** ./modules/markdown/code/languages.ts ***!
  \********************************************/
/*! exports provided: LANGUAGES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANGUAGES", function() { return LANGUAGES; });
const LANGUAGES = [{
  name: "1c"
}, {
  name: "abnf"
}, {
  name: "accesslog"
}, {
  name: "actionscript",
  aliases: ["as"]
}, {
  name: "ada"
}, {
  name: "angelscript",
  aliases: ["asc"]
}, {
  name: "apache",
  aliases: ["apacheconf"]
}, {
  name: "applescript",
  aliases: ["osascript"]
}, {
  name: "arcade"
}, {
  name: "arduino",
  aliases: ["ino"],
  dependencies: ["cpp"]
}, {
  name: "armasm",
  aliases: ["arm"]
}, {
  name: "asciidoc",
  aliases: ["adoc"],
  dependencies: ["xml"]
}, {
  name: "aspectj"
}, {
  name: "autohotkey",
  aliases: ["ahk"]
}, {
  name: "autoit"
}, {
  name: "avrasm"
}, {
  name: "awk"
}, {
  name: "axapta",
  aliases: ["x++"]
}, {
  name: "bash",
  aliases: ["sh", "zsh"]
}, {
  name: "basic"
}, {
  name: "bnf"
}, {
  name: "brainfuck",
  aliases: ["bf"]
}, {
  name: "c",
  aliases: ["h"],
  dependencies: ["c-like"]
}, {
  name: "c-like",
  aliases: ["c", "c++", "cc", "cxx", "h", "h++", "hh", "hpp", "hxx"]
}, {
  name: "cal"
}, {
  name: "capnproto",
  aliases: ["capnp"]
}, {
  name: "ceylon"
}, {
  name: "clean",
  aliases: ["dcl", "icl"]
}, {
  name: "clojure",
  aliases: ["clj"]
}, {
  name: "clojure-repl",
  dependencies: ["clojure"]
}, {
  name: "cmake",
  aliases: ["cmake.in"]
}, {
  name: "coffeescript",
  aliases: ["coffee", "cson", "iced"]
}, {
  name: "coq"
}, {
  name: "cos",
  aliases: ["cls"]
}, {
  name: "cpp",
  aliases: ["c++", "cc", "cxx", "h++", "hh", "hpp", "hxx"],
  dependencies: ["c-like"]
}, {
  name: "crmsh",
  aliases: ["crm", "pcmk"]
}, {
  name: "crystal",
  aliases: ["cr"]
}, {
  name: "csharp",
  aliases: ["c#", "cs"]
}, {
  name: "csp"
}, {
  name: "css"
}, {
  name: "d"
}, {
  name: "dart",
  dependencies: ["markdown"]
}, {
  name: "delphi",
  aliases: ["dfm", "dpr", "freepascal", "lazarus", "lfm", "lpr", "pas", "pascal"]
}, {
  name: "diff",
  aliases: ["patch"]
}, {
  name: "django",
  aliases: ["jinja"],
  dependencies: ["xml"]
}, {
  name: "dns",
  aliases: ["bind", "zone"]
}, {
  name: "dockerfile",
  aliases: ["docker"],
  dependencies: ["bash"]
}, {
  name: "dos",
  aliases: ["bat", "cmd"]
}, {
  name: "dsconfig"
}, {
  name: "dts"
}, {
  name: "dust",
  aliases: ["dst"],
  dependencies: ["xml"]
}, {
  name: "ebnf"
}, {
  name: "elixir"
}, {
  name: "elm"
}, {
  name: "erb",
  dependencies: ["ruby", "xml"]
}, {
  name: "erlang",
  aliases: ["erl"]
}, {
  name: "erlang-repl"
}, {
  name: "excel",
  aliases: ["xls", "xlsx"]
}, {
  name: "fix"
}, {
  name: "flix"
}, {
  name: "fortran",
  aliases: ["f90", "f95"]
}, {
  name: "fsharp",
  aliases: ["fs"]
}, {
  name: "gams",
  aliases: ["gms"]
}, {
  name: "gauss",
  aliases: ["gss"]
}, {
  name: "gcode",
  aliases: ["nc"]
}, {
  name: "gherkin",
  aliases: ["feature"]
}, {
  name: "glsl"
}, {
  name: "gml"
}, {
  name: "go",
  aliases: ["golang"]
}, {
  name: "golo"
}, {
  name: "gradle"
}, {
  name: "groovy"
}, {
  name: "haml",
  dependencies: ["ruby"]
}, {
  name: "handlebars",
  aliases: ["hbs", "html.handlebars", "html.hbs", "htmlbars"],
  dependencies: ["xml"]
}, {
  name: "haskell",
  aliases: ["hs"]
}, {
  name: "haxe",
  aliases: ["hx"]
}, {
  name: "hsp"
}, {
  name: "htmlbars",
  aliases: ["hbs", "html.handlebars", "html.hbs"]
}, {
  name: "http",
  aliases: ["https"]
}, {
  name: "hy",
  aliases: ["hylang"]
}, {
  name: "inform7",
  aliases: ["i7"]
}, {
  name: "ini",
  aliases: ["toml"]
}, {
  name: "irpf90"
}, {
  name: "isbl"
}, {
  name: "java",
  aliases: ["jsp"]
}, {
  name: "javascript",
  aliases: ["cjs", "js", "jsx", "mjs"]
}, {
  name: "jboss-cli",
  aliases: ["wildfly-cli"]
}, {
  name: "json"
}, {
  name: "julia"
}, {
  name: "julia-repl",
  dependencies: ["julia"]
}, {
  name: "kotlin",
  aliases: ["kt"]
}, {
  name: "lasso",
  aliases: ["lassoscript", "ls"]
}, {
  name: "latex",
  aliases: ["tex"]
}, {
  name: "ldif"
}, {
  name: "leaf"
}, {
  name: "less"
}, {
  name: "lisp"
}, {
  name: "livecodeserver"
}, {
  name: "livescript",
  aliases: ["ls"]
}, {
  name: "llvm"
}, {
  name: "lsl"
}, {
  name: "lua"
}, {
  name: "makefile",
  aliases: ["mak", "mk"]
}, {
  name: "markdown",
  aliases: ["md", "mkd", "mkdown"],
  dependencies: ["xml"]
}, {
  name: "mathematica",
  aliases: ["mma", "wl"]
}, {
  name: "matlab"
}, {
  name: "maxima"
}, {
  name: "mel"
}, {
  name: "mercury",
  aliases: ["m", "moo"]
}, {
  name: "mipsasm",
  aliases: ["mips"]
}, {
  name: "mizar"
}, {
  name: "mojolicious",
  dependencies: ["perl", "xml"]
}, {
  name: "monkey"
}, {
  name: "moonscript",
  aliases: ["moon"]
}, {
  name: "n1ql"
}, {
  name: "nginx",
  aliases: ["nginxconf"]
}, {
  name: "nim"
}, {
  name: "nix",
  aliases: ["nixos"]
}, {
  name: "nsis"
}, {
  name: "objectivec",
  aliases: ["mm", "obj-c", "obj-c++", "objc", "objective-c++"]
}, {
  name: "ocaml",
  aliases: ["ml"]
}, {
  name: "openscad",
  aliases: ["scad"]
}, {
  name: "oxygene"
}, {
  name: "parser3",
  dependencies: ["xml"]
}, {
  name: "perl",
  aliases: ["pl", "pm"]
}, {
  name: "pf",
  aliases: ["pf.conf"]
}, {
  name: "pgsql",
  aliases: ["postgres", "postgresql"]
}, {
  name: "php",
  aliases: ["php3", "php4", "php5", "php6", "php7", "php8"]
}, {
  name: "php-template",
  dependencies: ["php", "xml"]
}, {
  name: "plaintext",
  aliases: ["text", "txt"]
}, {
  name: "pony"
}, {
  name: "powershell",
  aliases: ["ps", "ps1"]
}, {
  name: "processing"
}, {
  name: "profile"
}, {
  name: "prolog"
}, {
  name: "properties"
}, {
  name: "protobuf"
}, {
  name: "puppet",
  aliases: ["pp"]
}, {
  name: "purebasic",
  aliases: ["pb", "pbi"]
}, {
  name: "python",
  aliases: ["gyp", "ipython", "py"]
}, {
  name: "python-repl",
  aliases: ["pycon"],
  dependencies: ["python"]
}, {
  name: "q",
  aliases: ["k", "kdb"]
}, {
  name: "qml",
  aliases: ["qt"],
  dependencies: ["javascript", "xml"]
}, {
  name: "r"
}, {
  name: "reasonml",
  aliases: ["re"]
}, {
  name: "rib"
}, {
  name: "roboconf",
  aliases: ["graph", "instances"]
}, {
  name: "routeros",
  aliases: ["mikrotik"]
}, {
  name: "rsl"
}, {
  name: "ruby",
  aliases: ["gemspec", "irb", "podspec", "rb", "thor"]
}, {
  name: "ruleslanguage"
}, {
  name: "rust",
  aliases: ["rs"]
}, {
  name: "sas"
}, {
  name: "scala"
}, {
  name: "scheme"
}, {
  name: "scilab",
  aliases: ["sci"]
}, {
  name: "scss"
}, {
  name: "shell",
  aliases: ["console"],
  dependencies: ["bash"]
}, {
  name: "smali"
}, {
  name: "smalltalk",
  aliases: ["st"]
}, {
  name: "sml",
  aliases: ["ml"]
}, {
  name: "sqf"
}, {
  name: "sql"
}, {
  name: "stan",
  aliases: ["stanfuncs"]
}, {
  name: "stata",
  aliases: ["ado", "do"]
}, {
  name: "step21",
  aliases: ["p21", "step", "stp"]
}, {
  name: "stylus",
  aliases: ["styl"]
}, {
  name: "subunit"
}, {
  name: "swift"
}, {
  name: "taggerscript"
}, {
  name: "tap",
  dependencies: ["yaml"]
}, {
  name: "tcl",
  aliases: ["tk"]
}, {
  name: "thrift"
}, {
  name: "tp"
}, {
  name: "twig",
  aliases: ["craftcms"],
  dependencies: ["xml"]
}, {
  name: "typescript",
  aliases: ["ts"]
}, {
  name: "vala"
}, {
  name: "vbnet",
  aliases: ["vb"]
}, {
  name: "vbscript",
  aliases: ["vbs"]
}, {
  name: "vbscript-html",
  dependencies: ["vbscript", "xml"]
}, {
  name: "verilog",
  aliases: ["sv", "svh", "v"]
}, {
  name: "vhdl"
}, {
  name: "vim"
}, {
  name: "x86asm"
}, {
  name: "xl",
  aliases: ["tao"]
}, {
  name: "xml",
  aliases: ["atom", "html", "plist", "rss", "svg", "wsf", "xhtml", "xjb", "xsd", "xsl"]
}, {
  name: "xquery",
  aliases: ["xpath", "xq"]
}, {
  name: "yaml",
  aliases: ["yml"],
  dependencies: ["ruby"]
}, {
  name: "zephir",
  aliases: ["zep"]
}];

/***/ }),

/***/ "./modules/markdown/emoji/convertEmojiToNames.ts":
/*!*******************************************************!*\
  !*** ./modules/markdown/emoji/convertEmojiToNames.ts ***!
  \*******************************************************/
/*! exports provided: convertEmojiToNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertEmojiToNames", function() { return convertEmojiToNames; });
/* harmony import */ var _emoji__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emoji */ "./modules/markdown/emoji/emoji.ts");
 // Matches string symbols instead of code points
// Regex extracted from lodash: https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L261
// eslint-disable-next-line no-misleading-character-class

const UNICODE_CHARACTER_RE = /\ud83c[\udffb-\udfff](?=\ud83c[\udffb-\udfff])|(?:[^\ud800-\udfff][\u0300-\u036f\u20d0-\u20ff\ufe20-\ufe2f]?|[\u0300-\u036f\u20d0-\u20ff\ufe20-\ufe2f]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\u20d0-\u20ff\ufe20-\ufe2f]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\u20d0-\u20ff\ufe20-\ufe2f]|\ud83c[\udffb-\udfff])?)*/g;
const CANCEL_TAG = String.fromCharCode(0xe007f);
const WAVING_BLACK_FLAG = "🏴";

const getEmoji = text => _emoji__WEBPACK_IMPORTED_MODULE_0__["EMOJI_TO_NAME"].has(text) ? `:${_emoji__WEBPACK_IMPORTED_MODULE_0__["EMOJI_TO_NAME"].get(text)}:` : text;

const convertEmojiToNames = text => {
  let result = "";
  let buffer; // eslint-disable-next-line @typescript-eslint/prefer-regexp-exec

  for (const char of (_text$match = text.match(UNICODE_CHARACTER_RE)) !== null && _text$match !== void 0 ? _text$match : []) {
    var _text$match;

    if (buffer) {
      if (char === CANCEL_TAG) {
        result += getEmoji(buffer + char);
        buffer = undefined;
        continue;
      } else if (/^\udb40[\udb61-\udb7a]$/.test(char)) {
        buffer += char;
        continue;
      } else {
        result += getEmoji(buffer);
        buffer = undefined;
      }
    } else if (char === WAVING_BLACK_FLAG) {
      buffer = char;
      continue;
    }

    result += getEmoji(char);
  }

  return result;
};

/***/ }),

/***/ "./modules/markdown/emoji/emoji.ts":
/*!*****************************************!*\
  !*** ./modules/markdown/emoji/emoji.ts ***!
  \*****************************************/
/*! exports provided: NAME_TO_EMOJI, EMOJI_TO_NAME */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAME_TO_EMOJI", function() { return NAME_TO_EMOJI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMOJI_TO_NAME", function() { return EMOJI_TO_NAME; });
/* harmony import */ var _serialisedEmojiData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./serialisedEmojiData */ "./modules/markdown/emoji/serialisedEmojiData.ts");
/* harmony import */ var _skinTones__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./skinTones */ "./modules/markdown/emoji/skinTones.ts");

 // Flag reference:
// + = include ::skin-tone-x
// # = include _tonex
// ! = include _x_skin_tone
// * = skip alias as global

const EMOJI = _serialisedEmojiData__WEBPACK_IMPORTED_MODULE_0__["SERIALISED_EMOJI_DATA"].split("\n").map(line => {
  const [emoji, ...names] = line.split(" ");
  return {
    emoji: emoji.split("/")[0],
    flags: emoji.split("/")[1],
    aliases: names.map(name => ({
      name: name.split("/")[0],
      flags: name.split("/")[1]
    }))
  };
});
const ZWJ = String.fromCodePoint(0x200d);
const MAN = "👨";
const WOMAN = "👩";
const PERSON = "🧑";
const HANDSHAKE = "🤝";
const NAME_TO_EMOJI = new Map();
const EMOJI_TO_NAME = new Map();

for (const {
  emoji,
  flags,
  aliases
} of EMOJI) {
  EMOJI_TO_NAME.set(emoji, aliases[0].name);

  if (flags !== null && flags !== void 0 && flags.includes("+")) {
    for (const [number, diversity] of Object.entries(_skinTones__WEBPACK_IMPORTED_MODULE_1__["TONE_NUMBERS"])) {
      EMOJI_TO_NAME.set(emoji + diversity, `${aliases[0].name}_tone${number}`);
    }
  }

  for (const alias of aliases) {
    var _alias$flags, _alias$flags2, _alias$flags3;

    if (!((_alias$flags = alias.flags) !== null && _alias$flags !== void 0 && _alias$flags.includes("*"))) {
      NAME_TO_EMOJI.set(alias.name, emoji);
    }

    if (flags !== null && flags !== void 0 && flags.includes("+")) {
      for (const [number, diversity] of Object.entries(_skinTones__WEBPACK_IMPORTED_MODULE_1__["TONE_NUMBERS"])) {
        NAME_TO_EMOJI.set(`${alias.name}::skin-tone-${number}`, emoji + diversity);
      }
    }

    if ((_alias$flags2 = alias.flags) !== null && _alias$flags2 !== void 0 && _alias$flags2.includes("#")) {
      for (const [id, diversity] of Object.entries(_skinTones__WEBPACK_IMPORTED_MODULE_1__["TONE_NUMBERS"])) {
        NAME_TO_EMOJI.set(`${alias.name}_tone${id}`, emoji + diversity);
      }
    }

    if ((_alias$flags3 = alias.flags) !== null && _alias$flags3 !== void 0 && _alias$flags3.includes("!")) {
      for (const [number, diversity] of Object.entries(_skinTones__WEBPACK_IMPORTED_MODULE_1__["TONE_NAMES"])) {
        NAME_TO_EMOJI.set(`${alias.name}_${number}_skin_tone`, emoji + diversity);
      }
    }
  }
}

for (const {
  unicode: toneA,
  number: numberA,
  name: nameA
} of _skinTones__WEBPACK_IMPORTED_MODULE_1__["SKIN_TONES"]) {
  const idSuffix = `_tone${numberA}`;
  const nameSuffix = `_${nameA}_skin_tone`;
  const toneSuffix = `::skin-tone-${numberA}`;
  const womanAndMan = `👫${toneA}`;
  const womanAndManName = "woman_and_man_holding_hands";
  EMOJI_TO_NAME.set(womanAndMan, womanAndManName + idSuffix);
  NAME_TO_EMOJI.set(womanAndManName + idSuffix, womanAndMan);
  NAME_TO_EMOJI.set(womanAndManName + nameSuffix, womanAndMan);
  NAME_TO_EMOJI.set(`couple${toneSuffix}`, womanAndMan);
  const men = `👬${toneA}`;
  const menName = "men_holding_hands";
  EMOJI_TO_NAME.set(men, menName + idSuffix);
  NAME_TO_EMOJI.set(menName + idSuffix, men);
  NAME_TO_EMOJI.set(menName + nameSuffix, men);
  NAME_TO_EMOJI.set(`two_${menName}${toneSuffix}`, men);
  const women = `👭${toneA}`;
  const womenName = "women_holding_hands";
  EMOJI_TO_NAME.set(women, womenName + idSuffix);
  NAME_TO_EMOJI.set(womenName + idSuffix, women);
  NAME_TO_EMOJI.set(womenName + nameSuffix, women);
  NAME_TO_EMOJI.set(`two_${womenName}${toneSuffix}`, women);
  const people = PERSON + toneA + ZWJ + HANDSHAKE + ZWJ + PERSON + toneA;
  const peopleName = "people_holding_hands";
  EMOJI_TO_NAME.set(people, peopleName + idSuffix);
  NAME_TO_EMOJI.set(peopleName + idSuffix, people);
  NAME_TO_EMOJI.set(peopleName + nameSuffix, people);
  NAME_TO_EMOJI.set(peopleName + toneSuffix, people);

  for (const {
    unicode: toneB,
    number: numberB,
    name: nameB
  } of _skinTones__WEBPACK_IMPORTED_MODULE_1__["SKIN_TONES"]) {
    if (numberA <= numberB) continue;
    const idSuffix = `_tone${numberA}_tone${numberB}`;
    const nameSuffix = `_${nameA}_skin_tone_${nameB}_skin_tone`;
    const womanAndMan = WOMAN + toneA + ZWJ + HANDSHAKE + ZWJ + MAN + toneB;
    EMOJI_TO_NAME.set(womanAndMan, womanAndManName + idSuffix);
    NAME_TO_EMOJI.set(womanAndManName + idSuffix, womanAndMan);
    NAME_TO_EMOJI.set(womanAndManName + nameSuffix, womanAndMan);
    const men = MAN + toneA + ZWJ + HANDSHAKE + ZWJ + MAN + toneB;
    EMOJI_TO_NAME.set(men, menName + idSuffix);
    NAME_TO_EMOJI.set(menName + idSuffix, men);
    NAME_TO_EMOJI.set(menName + nameSuffix, men);
    const women = WOMAN + toneA + ZWJ + HANDSHAKE + ZWJ + WOMAN + toneB;
    EMOJI_TO_NAME.set(women, womenName + idSuffix);
    NAME_TO_EMOJI.set(womenName + idSuffix, women);
    NAME_TO_EMOJI.set(womenName + nameSuffix, women);
    const people = PERSON + toneA + ZWJ + HANDSHAKE + ZWJ + PERSON + toneB;
    EMOJI_TO_NAME.set(people, peopleName + idSuffix);
    NAME_TO_EMOJI.set(peopleName + idSuffix, people);
    NAME_TO_EMOJI.set(peopleName + nameSuffix, people);
  }
}



/***/ }),

/***/ "./modules/markdown/emoji/getCustomEmojiUrl.ts":
/*!*****************************************************!*\
  !*** ./modules/markdown/emoji/getCustomEmojiUrl.ts ***!
  \*****************************************************/
/*! exports provided: getCustomEmojiUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCustomEmojiUrl", function() { return getCustomEmojiUrl; });
const CUSTOM_EMOJI_CDN_BASE_URL = "https://cdn.discordapp.com/emojis";
const EXCEPTIONS = new Map(Object.entries({
  "736648398081622016": "/static/discohook-emoji.png"
}));
const getCustomEmojiUrl = (id, animated) => {
  if (EXCEPTIONS.has(id)) return EXCEPTIONS.get(id); // While v=1 isn't necessary, it is used anyway to decrease load times.
  // The user may have loaded this emoji from the browser app, which uses the
  // same query parameter.

  return `${CUSTOM_EMOJI_CDN_BASE_URL}/${id}.${animated ? "gif" : "png"}?v=1`;
};

/***/ }),

/***/ "./modules/markdown/emoji/getEmojiUrl.ts":
/*!***********************************************!*\
  !*** ./modules/markdown/emoji/getEmojiUrl.ts ***!
  \***********************************************/
/*! exports provided: getEmojiUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEmojiUrl", function() { return getEmojiUrl; });
const EMOJI_CDN_BASE_URL = "https://twemoji.maxcdn.com/v/13.0.1/svg";
const getEmojiUrl = emoji => {
  const file = [...emoji].map(character => {
    var _character$codePointA;

    return (_character$codePointA = character.codePointAt(0)) === null || _character$codePointA === void 0 ? void 0 : _character$codePointA.toString(16);
  }) // Twemoji does not include "\uFE0F" (VARIATION SELECTOR) in their file names
  // if the emoji does not contain "\u200D" (ZERO WIDTH JOINER)
  .filter((item, index, array) => array.includes("200d") || item !== "fe0f").join("-");
  return `${EMOJI_CDN_BASE_URL}/${file}.svg`;
};

/***/ }),

/***/ "./modules/markdown/emoji/jumbosizeEmojis.ts":
/*!***************************************************!*\
  !*** ./modules/markdown/emoji/jumbosizeEmojis.ts ***!
  \***************************************************/
/*! exports provided: jumbosizeEmojis */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jumbosizeEmojis", function() { return jumbosizeEmojis; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const jumbosizeEmojis = ast => {
  // Gets all nodes of type 'emoji' or 'customEmoji'
  const emojiNodes = ast.filter(node => node.type === "emoji"); // If there's more than 27 (limit of jumbosized emojis), return the tree as is

  if (emojiNodes.length > 27) return ast; // Check if the tree has any amount of nodes that aren't emojis,
  // or nodes containing whitespace only

  const hasText = ast.some(node => {
    if (node.type === "emoji") return false;
    if (node.type === "br") return false;
    if (typeof node.content !== "string") return true;
    if (node.content.trim() !== "") return true;
    return false;
  });
  if (hasText) return ast; // If the message passed all checks, return a copy of the tree where all nodes
  // have the 'jumboable' property set to true

  return ast.map(node => {
    if (node.type === "emoji") {
      return _objectSpread(_objectSpread({}, node), {}, {
        jumboable: true
      });
    }

    return node;
  });
};

/***/ }),

/***/ "./modules/markdown/emoji/serialisedEmojiData.ts":
/*!*******************************************************!*\
  !*** ./modules/markdown/emoji/serialisedEmojiData.ts ***!
  \*******************************************************/
/*! exports provided: SERIALISED_EMOJI_DATA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERIALISED_EMOJI_DATA", function() { return SERIALISED_EMOJI_DATA; });
const SERIALISED_EMOJI_DATA = `
😀 grinning
😃 smiley
😄 smile
😁 grin
😆 laughing satisfied
😅 sweat_smile
😂 joy
🤣 rofl rolling_on_the_floor_laughing
☺️ relaxed
😊 blush
😇 innocent
🙂 slight_smile slightly_smiling_face
🙃 upside_down upside_down_face
😉 wink
😌 relieved
🥲 smiling_face_with_tear
😍 heart_eyes
🥰 smiling_face_with_3_hearts
😘 kissing_heart
😗 kissing
😙 kissing_smiling_eyes
😚 kissing_closed_eyes
😋 yum
😛 stuck_out_tongue
😝 stuck_out_tongue_closed_eyes
😜 stuck_out_tongue_winking_eye
🤪 zany_face
🤨 face_with_raised_eyebrow
🧐 face_with_monocle
🤓 nerd nerd_face
😎 sunglasses
🤩 star_struck
🥳 partying_face
😏 smirk
😒 unamused
😞 disappointed
😔 pensive
😟 worried
😕 confused
🙁 slight_frown slightly_frowning_face
☹️ frowning2 white_frowning_face
😣 persevere
😖 confounded
😫 tired_face
😩 weary
🥺 pleading_face
😢 cry
😭 sob
😤 triumph
😠 angry
😡 rage
🤬 face_with_symbols_over_mouth
🤯 exploding_head
😳 flushed
🥵 hot_face
🥶 cold_face
😱 scream
😨 fearful
😰 cold_sweat
😥 disappointed_relieved
😓 sweat
🤗 hugging hugging_face
🤔 thinking thinking_face
🤭 face_with_hand_over_mouth
🥱 yawning_face
🤫 shushing_face
🤥 lying_face liar
😶 no_mouth
😐 neutral_face
😑 expressionless
😬 grimacing
🙄 rolling_eyes face_with_rolling_eyes
😯 hushed
😦 frowning
😧 anguished
😮 open_mouth
😲 astonished
😴 sleeping
🤤 drooling_face drool
😪 sleepy
😵 dizzy_face
🤐 zipper_mouth zipper_mouth_face
🥴 woozy_face
🤢 nauseated_face sick
🤮 face_vomiting
🤧 sneezing_face sneeze
😷 mask
🤒 thermometer_face face_with_thermometer
🤕 head_bandage face_with_head_bandage
🤑 money_mouth money_mouth_face
🤠 cowboy face_with_cowboy_hat
🥸 disguised_face
😈 smiling_imp
👿 imp
👹 japanese_ogre
👺 japanese_goblin
🤡 clown clown_face
💩 poop shit hankey poo
👻 ghost
💀 skull skeleton
☠️ skull_crossbones skull_and_crossbones
👽 alien
👾 space_invader
🤖 robot robot_face
🎃 jack_o_lantern
😺 smiley_cat
😸 smile_cat
😹 joy_cat
😻 heart_eyes_cat
😼 smirk_cat
😽 kissing_cat
🙀 scream_cat
😿 crying_cat_face
😾 pouting_cat
🤲/+ palms_up_together/#!
👐/+ open_hands/#
🙌/+ raised_hands/#
👏/+ clap/#
🤝 handshake shaking_hands
👍/+ thumbsup/# +1/# thumbup/#
👎/+ thumbsdown/# -1 thumbdown/# _1/#*
👊/+ punch/#
✊/+ fist/#
🤛/+ left_facing_fist/# left_fist/#
🤜/+ right_facing_fist/# right_fist/#
🤞/+ fingers_crossed/# hand_with_index_and_middle_finger_crossed hand_with_index_and_middle_fingers_crossed/#*
✌️/+ v/#
🤟/+ love_you_gesture/#!
🤘/+ metal/# sign_of_the_horns/#
👌/+ ok_hand/#
🤏/+ pinching_hand/#!
🤌/+ pinched_fingers/#!
👈/+ point_left/#
👉/+ point_right/#
👆/+ point_up_2/#
👇/+ point_down/#
☝️/+ point_up/#
✋/+ raised_hand/#
🤚/+ raised_back_of_hand/# back_of_hand/#
🖐️/+ hand_splayed/# raised_hand_with_fingers_splayed/#
🖖/+ vulcan/# raised_hand_with_part_between_middle_and_ring_fingers/#
👋/+ wave/#
🤙/+ call_me/# call_me_hand/#
💪/+ muscle/#
🦾 mechanical_arm
🖕/+ middle_finger/# reversed_hand_with_middle_finger_extended/#
✍️/+ writing_hand/#
🙏/+ pray/#
🦶/+ foot/#!
🦵/+ leg/#!
🦿 mechanical_leg
💄 lipstick
💋 kiss
👄 lips
🦷 tooth
🦴 bone
👅 tongue
👂/+ ear/#
🦻/+ ear_with_hearing_aid/#!
👃/+ nose/#
👣 footprints
👁️ eye
👀 eyes
🧠 brain
🫀 anatomical_heart
🫁 lungs
🗣️ speaking_head speaking_head_in_silhouette
👤 bust_in_silhouette
👥 busts_in_silhouette
🫂 people_hugging
👶/+ baby/#
👧/+ girl/#
🧒/+ child/#!
👦/+ boy/#
👩/+ woman/#
🧑/+ adult/#!
👨/+ man/#
🧑‍🦱/+ person_curly_hair
👩‍🦱/+ woman_curly_haired/#!
👨‍🦱/+ man_curly_haired/#!
🧑‍🦰/+ person_red_hair
👩‍🦰/+ woman_red_haired/#!
👨‍🦰/+ man_red_haired/#!
👱‍♀️/+ blond_haired_woman/#!
👱/+ blond_haired_person/# person_with_blond_hair/#
👱‍♂️/+ blond_haired_man/#!
🧑‍🦳/+ person_white_hair
👩‍🦳/+ woman_white_haired/#!
👨‍🦳/+ man_white_haired/#!
🧑‍🦲/+ person_bald
👩‍🦲/+ woman_bald/#!
👨‍🦲/+ man_bald/#!
🧔/+ bearded_person/#!
👵/+ older_woman/# grandma/#
🧓/+ older_adult/#!
👴/+ older_man/#
👲/+ man_with_chinese_cap/# man_with_gua_pi_mao/#
👳/+ person_wearing_turban/# man_with_turban/#
👳‍♀️/+ woman_wearing_turban/#!
👳‍♂️/+ man_wearing_turban/#!
🧕/+ woman_with_headscarf/#!
👮/+ police_officer/# cop/#
👮‍♀️/+ woman_police_officer/#!
👮‍♂️/+ man_police_officer/#!
👷/+ construction_worker/#
👷‍♀️/+ woman_construction_worker/#!
👷‍♂️/+ man_construction_worker/#!
💂/+ guard/# guardsman/#
💂‍♀️/+ woman_guard/#!
💂‍♂️/+ man_guard/#!
🕵️/+ detective/# spy/# sleuth_or_spy/#
🕵️‍♀️/+ woman_detective/#!
🕵️‍♂️/+ man_detective/#!
🧑‍⚕️/+ health_worker/#!
👩‍⚕️/+ woman_health_worker/#!
👨‍⚕️/+ man_health_worker/#!
🧑‍🌾/+ farmer/#!
👩‍🌾/+ woman_farmer/#!
👨‍🌾/+ man_farmer/#!
🧑‍🍳/+ cook/#!
👩‍🍳/+ woman_cook/#!
👨‍🍳/+ man_cook/#!
🧑‍🎓/+ student/#!
👩‍🎓/+ woman_student/#!
👨‍🎓/+ man_student/#!
🧑‍🎤/+ singer/#!
👩‍🎤/+ woman_singer/#!
👨‍🎤/+ man_singer/#!
🧑‍🏫/+ teacher/#!
👩‍🏫/+ woman_teacher/#!
👨‍🏫/+ man_teacher/#!
🧑‍🏭/+ factory_worker/#!
👩‍🏭/+ woman_factory_worker/#!
👨‍🏭/+ man_factory_worker/#!
🧑‍💻/+ technologist/#!
👩‍💻/+ woman_technologist/#!
👨‍💻/+ man_technologist/#!
🧑‍💼/+ office_worker/#!
👩‍💼/+ woman_office_worker/#!
👨‍💼/+ man_office_worker/#!
🧑‍🔧/+ mechanic/#!
👩‍🔧/+ woman_mechanic/#!
👨‍🔧/+ man_mechanic/#!
🧑‍🔬/+ scientist/#!
👩‍🔬/+ woman_scientist/#!
👨‍🔬/+ man_scientist/#!
🧑‍🎨/+ artist/#!
👩‍🎨/+ woman_artist/#!
👨‍🎨/+ man_artist/#!
🧑‍🚒/+ firefighter/#!
👩‍🚒/+ woman_firefighter/#!
👨‍🚒/+ man_firefighter/#!
🧑‍✈️/+ pilot/#!
👩‍✈️/+ woman_pilot/#!
👨‍✈️/+ man_pilot/#!
🧑‍🚀/+ astronaut/#!
👩‍🚀/+ woman_astronaut/#!
👨‍🚀/+ man_astronaut/#!
🧑‍⚖️/+ judge/#!
👩‍⚖️/+ woman_judge/#!
👨‍⚖️/+ man_judge/#!
👰/+ person_with_veil/#
👰‍♀️/+ woman_with_veil/#! bride_with_veil
👰‍♂️/+ man_with_veil/#!
🤵/+ person_in_tuxedo/# tuxedo/#*
🤵‍♀️/+ woman_in_tuxedo/#!
🤵‍♂️/+ man_in_tuxedo/#!
👸/+ princess/#
🤴/+ prince/#
🦸/+ superhero/#!
🦸‍♀️/+ woman_superhero/#!
🦸‍♂️/+ man_superhero/#!
🦹/+ supervillain/#!
🦹‍♀️/+ woman_supervillain/#!
🦹‍♂️/+ man_supervillain/#!
🥷/+ ninja/#!
🧑‍🎄/+ mx_claus/#!
🤶/+ mrs_claus/# mother_christmas/#
🎅/+ santa/#
🧙/+ mage/#!
🧙‍♀️/+ woman_mage/#!
🧙‍♂️/+ man_mage/#!
🧝/+ elf/#!
🧝‍♀️/+ woman_elf/#!
🧝‍♂️/+ man_elf/#!
🧛/+ vampire/#!
🧛‍♀️/+ woman_vampire/#!
🧛‍♂️/+ man_vampire/#!
🧟 zombie
🧟‍♀️ woman_zombie
🧟‍♂️ man_zombie
🧞 genie
🧞‍♀️ woman_genie
🧞‍♂️ man_genie
🧜/+ merperson/#!
🧜‍♀️/+ mermaid/#!
🧜‍♂️/+ merman/#!
🧚/+ fairy/#!
🧚‍♀️/+ woman_fairy/#!
🧚‍♂️/+ man_fairy/#!
👼/+ angel/#
🤰/+ pregnant_woman/# expecting_woman/#
🤱/+ breast_feeding/#!
🧑‍🍼/+ person_feeding_baby/#!
👩‍🍼/+ woman_feeding_baby/#!
👨‍🍼/+ man_feeding_baby/#!
🙇/+ person_bowing/# bow/#
🙇‍♀️/+ woman_bowing/#!
🙇‍♂️/+ man_bowing/#!
💁/+ person_tipping_hand/# information_desk_person/#
💁‍♀️/+ woman_tipping_hand/#!
💁‍♂️/+ man_tipping_hand/#!
🙅/+ person_gesturing_no/# no_good/#
🙅‍♀️/+ woman_gesturing_no/#!
🙅‍♂️/+ man_gesturing_no/#!
🙆/+ person_gesturing_ok/# ok_woman/#
🙆‍♀️/+ woman_gesturing_ok/#!
🙆‍♂️/+ man_gesturing_ok/#!
🙋/+ person_raising_hand/# raising_hand/#
🙋‍♀️/+ woman_raising_hand/#!
🙋‍♂️/+ man_raising_hand/#!
🧏/+ deaf_person/#!
🧏‍♀️/+ deaf_woman/#!
🧏‍♂️/+ deaf_man/#!
🤦/+ person_facepalming/# face_palm/# facepalm/#
🤦‍♀️/+ woman_facepalming/#!
🤦‍♂️/+ man_facepalming/#!
🤷/+ person_shrugging/# shrug/#
🤷‍♀️/+ woman_shrugging/#!
🤷‍♂️/+ man_shrugging/#!
🙎/+ person_pouting/# person_with_pouting_face/#
🙎‍♀️/+ woman_pouting/#!
🙎‍♂️/+ man_pouting/#!
🙍/+ person_frowning/#
🙍‍♀️/+ woman_frowning/#!
🙍‍♂️/+ man_frowning/#!
💇/+ person_getting_haircut/# haircut/#
💇‍♀️/+ woman_getting_haircut/#!
💇‍♂️/+ man_getting_haircut/#!
💆/+ person_getting_massage/# massage/#
💆‍♀️/+ woman_getting_face_massage/#!
💆‍♂️/+ man_getting_face_massage/#!
🧖/+ person_in_steamy_room/#!
🧖‍♀️/+ woman_in_steamy_room/#!
🧖‍♂️/+ man_in_steamy_room/#!
💅/+ nail_care/#
🤳/+ selfie/#
💃/+ dancer/#
🕺/+ man_dancing/# male_dancer/#
👯 people_with_bunny_ears_partying dancers
👯‍♀️ women_with_bunny_ears_partying
👯‍♂️ men_with_bunny_ears_partying
🕴️/+ levitate/# man_in_business_suit_levitating/#!
🧑‍🦽/+ person_in_manual_wheelchair/#!
👩‍🦽/+ woman_in_manual_wheelchair/#!
👨‍🦽/+ man_in_manual_wheelchair/#!
🧑‍🦼/+ person_in_motorized_wheelchair/#!
👩‍🦼/+ woman_in_motorized_wheelchair/#!
👨‍🦼/+ man_in_motorized_wheelchair/#!
🚶/+ person_walking/# walking/#
🚶‍♀️/+ woman_walking/#!
🚶‍♂️/+ man_walking/#!
🧑‍🦯/+ person_with_probing_cane/#!
👩‍🦯/+ woman_with_probing_cane/#!
👨‍🦯/+ man_with_probing_cane/#!
🧎/+ person_kneeling/#!
🧎‍♀️/+ woman_kneeling/#!
🧎‍♂️/+ man_kneeling/#!
🏃/+ person_running/# runner/#
🏃‍♀️/+ woman_running/#!
🏃‍♂️/+ man_running/#!
🧍/+ person_standing/#!
🧍‍♀️/+ woman_standing/#!
🧍‍♂️/+ man_standing/#!
🧑‍🤝‍🧑 people_holding_hands
👫 couple
👭 two_women_holding_hands
👬 two_men_holding_hands
💑 couple_with_heart
👩‍❤️‍👨 couple_with_heart_woman_man
👩‍❤️‍👩 couple_ww couple_with_heart_ww
👨‍❤️‍👨 couple_mm couple_with_heart_mm
💏 couplekiss
👩‍❤️‍💋‍👨 kiss_woman_man
👩‍❤️‍💋‍👩 kiss_ww couplekiss_ww
👨‍❤️‍💋‍👨 kiss_mm couplekiss_mm
👪 family
👨‍👩‍👦 family_man_woman_boy
👨‍👩‍👧 family_mwg
👨‍👩‍👧‍👦 family_mwgb
👨‍👩‍👦‍👦 family_mwbb
👨‍👩‍👧‍👧 family_mwgg
👩‍👩‍👦 family_wwb
👩‍👩‍👧 family_wwg
👩‍👩‍👧‍👦 family_wwgb
👩‍👩‍👦‍👦 family_wwbb
👩‍👩‍👧‍👧 family_wwgg
👨‍👨‍👦 family_mmb
👨‍👨‍👧 family_mmg
👨‍👨‍👧‍👦 family_mmgb
👨‍👨‍👦‍👦 family_mmbb
👨‍👨‍👧‍👧 family_mmgg
👩‍👦 family_woman_boy
👩‍👧 family_woman_girl
👩‍👧‍👦 family_woman_girl_boy
👩‍👦‍👦 family_woman_boy_boy
👩‍👧‍👧 family_woman_girl_girl
👨‍👦 family_man_boy
👨‍👧 family_man_girl
👨‍👧‍👦 family_man_girl_boy
👨‍👦‍👦 family_man_boy_boy
👨‍👧‍👧 family_man_girl_girl
🧶 yarn
🧵 thread
🧥 coat
🥼 lab_coat
🦺 safety_vest
👚 womans_clothes
👕 shirt
👖 jeans
🩲 briefs
🩳 shorts
👔 necktie
👗 dress
👙 bikini
🩱 one_piece_swimsuit
👘 kimono
🥻 sari
🥿 womans_flat_shoe
👠 high_heel
👡 sandal
👢 boot
👞 mans_shoe
👟 athletic_shoe
🥾 hiking_boot
🩴 thong_sandal
🧦 socks
🧤 gloves
🧣 scarf
🎩 tophat
🧢 billed_cap
👒 womans_hat
🎓 mortar_board
⛑️ helmet_with_cross helmet_with_white_cross
🪖 military_helmet
👑 crown
💍 ring
👝 pouch
👛 purse
👜 handbag
💼 briefcase
🎒 school_satchel
🧳 luggage
👓 eyeglasses
🕶️ dark_sunglasses
🥽 goggles
🌂 closed_umbrella
🐶 dog
🐱 cat
🐭 mouse
🐹 hamster
🐰 rabbit
🦊 fox fox_face
🐻 bear
🐼 panda_face
🐻‍❄️ polar_bear
🐨 koala
🐯 tiger
🦁 lion_face lion
🐮 cow
🐷 pig
🐽 pig_nose
🐸 frog
🐵 monkey_face
🙈 see_no_evil
🙉 hear_no_evil
🙊 speak_no_evil
🐒 monkey
🐔 chicken
🐧 penguin
🐦 bird
🐤 baby_chick
🐣 hatching_chick
🐥 hatched_chick
🦆 duck
🦤 dodo
🦅 eagle
🦉 owl
🦇 bat
🐺 wolf
🐗 boar
🐴 horse
🦄 unicorn unicorn_face
🐝 bee
🐛 bug
🦋 butterfly
🐌 snail
🪱 worm
🐞 lady_beetle
🐜 ant
🪰 fly
🦟 mosquito
🪳 cockroach
🪲 beetle
🦗 cricket
🕷️ spider
🕸️ spider_web
🦂 scorpion
🐢 turtle
🐍 snake
🦎 lizard
🦖 t_rex
🦕 sauropod
🐙 octopus
🦑 squid
🦐 shrimp
🦞 lobster
🦀 crab
🐡 blowfish
🐠 tropical_fish
🐟 fish
🦭 seal
🐬 dolphin
🐳 whale
🐋 whale2
🦈 shark
🐊 crocodile
🐅 tiger2
🐆 leopard
🦓 zebra
🦍 gorilla
🦧 orangutan
🐘 elephant
🦣 mammoth
🦬 bison
🦛 hippopotamus
🦏 rhino rhinoceros
🐪 dromedary_camel
🐫 camel
🦒 giraffe
🦘 kangaroo
🐃 water_buffalo
🐂 ox
🐄 cow2
🐎 racehorse
🐖 pig2
🐏 ram
🐑 sheep
🦙 llama
🐐 goat
🦌 deer
🐕 dog2
🐩 poodle
🦮 guide_dog
🐕‍🦺 service_dog
🐈 cat2
🐈‍⬛ black_cat
🐓 rooster
🦃 turkey
🦚 peacock
🦜 parrot
🦢 swan
🦩 flamingo
🕊️ dove dove_of_peace
🐇 rabbit2
🦝 raccoon
🦨 skunk
🦡 badger
🦫 beaver
🦦 otter
🦥 sloth
🐁 mouse2
🐀 rat
🐿️ chipmunk
🦔 hedgehog
🐾 feet paw_prints
🐉 dragon
🐲 dragon_face
🌵 cactus
🎄 christmas_tree
🌲 evergreen_tree
🌳 deciduous_tree
🌴 palm_tree
🌱 seedling
🌿 herb
☘️ shamrock
🍀 four_leaf_clover
🎍 bamboo
🎋 tanabata_tree
🍃 leaves
🍂 fallen_leaf
🍁 maple_leaf
🪶 feather
🍄 mushroom
🐚 shell
🪨 rock
🪵 wood
🌾 ear_of_rice
🪴 potted_plant
💐 bouquet
🌷 tulip
🌹 rose
🥀 wilted_rose wilted_flower
🌺 hibiscus
🌸 cherry_blossom
🌼 blossom
🌻 sunflower
🌞 sun_with_face
🌝 full_moon_with_face
🌛 first_quarter_moon_with_face
🌜 last_quarter_moon_with_face
🌚 new_moon_with_face
🌕 full_moon
🌖 waning_gibbous_moon
🌗 last_quarter_moon
🌘 waning_crescent_moon
🌑 new_moon
🌒 waxing_crescent_moon
🌓 first_quarter_moon
🌔 waxing_gibbous_moon
🌙 crescent_moon
🌎 earth_americas
🌍 earth_africa
🌏 earth_asia
🪐 ringed_planet
💫 dizzy
⭐ star
🌟 star2
✨ sparkles
⚡ zap
☄️ comet
💥 boom
🔥 fire flame
🌪️ cloud_tornado cloud_with_tornado
🌈 rainbow
☀️ sunny
🌤️ white_sun_small_cloud white_sun_with_small_cloud
⛅ partly_sunny
🌥️ white_sun_cloud white_sun_behind_cloud
☁️ cloud
🌦️ white_sun_rain_cloud white_sun_behind_cloud_with_rain
🌧️ cloud_rain cloud_with_rain
⛈️ thunder_cloud_rain thunder_cloud_and_rain
🌩️ cloud_lightning cloud_with_lightning
🌨️ cloud_snow cloud_with_snow
❄️ snowflake
☃️ snowman2
⛄ snowman
🌬️ wind_blowing_face
💨 dash
💧 droplet
💦 sweat_drops
☔ umbrella
☂️ umbrella2
🌊 ocean
🌫️ fog
🍏 green_apple
🍎 apple
🍐 pear
🍊 tangerine
🍋 lemon
🍌 banana
🍉 watermelon
🍇 grapes
🫐 blueberries
🍓 strawberry
🍈 melon
🍒 cherries
🍑 peach
🥭 mango
🍍 pineapple
🥥 coconut
🥝 kiwi kiwifruit
🍅 tomato
🍆 eggplant
🥑 avocado
🫒 olive
🥦 broccoli
🥬 leafy_green
🫑 bell_pepper
🥒 cucumber
🌶️ hot_pepper
🌽 corn
🥕 carrot
🧄 garlic
🧅 onion
🥔 potato
🍠 sweet_potato
🥐 croissant
🥯 bagel
🍞 bread
🥖 french_bread baguette_bread
🫓 flatbread
🥨 pretzel
🧀 cheese cheese_wedge
🥚 egg
🍳 cooking
🧈 butter
🥞 pancakes
🧇 waffle
🥓 bacon
🥩 cut_of_meat
🍗 poultry_leg
🍖 meat_on_bone
🌭 hotdog hot_dog
🍔 hamburger
🍟 fries
🍕 pizza
🥪 sandwich
🥙 stuffed_flatbread stuffed_pita
🧆 falafel
🌮 taco
🌯 burrito
🫔 tamale
🥗 salad green_salad
🥘 shallow_pan_of_food paella
🫕 fondue
🥫 canned_food
🍝 spaghetti
🍜 ramen
🍲 stew
🍛 curry
🍣 sushi
🍱 bento
🥟 dumpling
🦪 oyster
🍤 fried_shrimp
🍙 rice_ball
🍚 rice
🍘 rice_cracker
🍥 fish_cake
🥠 fortune_cookie
🥮 moon_cake
🍢 oden
🍡 dango
🍧 shaved_ice
🍨 ice_cream
🍦 icecream
🥧 pie
🧁 cupcake
🍰 cake
🎂 birthday
🍮 custard pudding flan
🍭 lollipop
🍬 candy
🍫 chocolate_bar
🍿 popcorn
🍩 doughnut
🍪 cookie
🌰 chestnut
🥜 peanuts shelled_peanut
🍯 honey_pot
🥛 milk glass_of_milk
🍼 baby_bottle
☕ coffee
🍵 tea
🫖 teapot
🧉 mate
🧋 bubble_tea
🧃 beverage_box
🥤 cup_with_straw
🍶 sake
🍺 beer
🍻 beers
🥂 champagne_glass clinking_glass
🍷 wine_glass
🥃 tumbler_glass whisky
🍸 cocktail
🍹 tropical_drink
🍾 champagne bottle_with_popping_cork
🧊 ice_cube
🥄 spoon
🍴 fork_and_knife
🍽️ fork_knife_plate fork_and_knife_with_plate
🥣 bowl_with_spoon
🥡 takeout_box
🥢 chopsticks
🧂 salt
⚽ soccer
🏀 basketball
🏈 football
⚾ baseball
🥎 softball
🎾 tennis
🏐 volleyball
🏉 rugby_football
🥏 flying_disc
🪃 boomerang
🎱 8ball
🪀 yo_yo
🏓 ping_pong table_tennis
🏸 badminton
🏒 hockey
🏑 field_hockey
🥍 lacrosse
🏏 cricket_game cricket_bat_ball
🥅 goal goal_net
⛳ golf
🪁 kite
🏹 bow_and_arrow archery
🎣 fishing_pole_and_fish
🤿 diving_mask
🥊 boxing_glove boxing_gloves
🥋 martial_arts_uniform karate_uniform
🎽 running_shirt_with_sash
🛹 skateboard
🛼 roller_skate
🛷 sled
⛸️ ice_skate
🥌 curling_stone
🎿 ski
⛷️ skier
🏂/+ snowboarder/#!
🪂 parachute
🏋️/+ person_lifting_weights/# lifter/# weight_lifter/#
🏋️‍♀️/+ woman_lifting_weights/#!
🏋️‍♂️/+ man_lifting_weights/#!
🤼 people_wrestling wrestlers wrestling
🤼‍♀️ women_wrestling
🤼‍♂️ men_wrestling
🤸/+ person_doing_cartwheel/# cartwheel/#
🤸‍♀️/+ woman_cartwheeling/#!
🤸‍♂️/+ man_cartwheeling/#!
⛹️/+ person_bouncing_ball/# basketball_player/# person_with_ball/#
⛹️‍♀️/+ woman_bouncing_ball/#!
⛹️‍♂️/+ man_bouncing_ball/#!
🤺 person_fencing fencer fencing
🤾/+ person_playing_handball/# handball/#
🤾‍♀️/+ woman_playing_handball/#!
🤾‍♂️/+ man_playing_handball/#!
🏌️/+ person_golfing/#! golfer
🏌️‍♀️/+ woman_golfing/#!
🏌️‍♂️/+ man_golfing/#!
🏇/+ horse_racing/#
🧘/+ person_in_lotus_position/#!
🧘‍♀️/+ woman_in_lotus_position/#!
🧘‍♂️/+ man_in_lotus_position/#!
🏄/+ person_surfing/# surfer/#
🏄‍♀️/+ woman_surfing/#!
🏄‍♂️/+ man_surfing/#!
🏊/+ person_swimming/# swimmer/#
🏊‍♀️/+ woman_swimming/#!
🏊‍♂️/+ man_swimming/#!
🤽/+ person_playing_water_polo/# water_polo/#
🤽‍♀️/+ woman_playing_water_polo/#!
🤽‍♂️/+ man_playing_water_polo/#!
🚣/+ person_rowing_boat/# rowboat/#
🚣‍♀️/+ woman_rowing_boat/#!
🚣‍♂️/+ man_rowing_boat/#!
🧗/+ person_climbing/#!
🧗‍♀️/+ woman_climbing/#!
🧗‍♂️/+ man_climbing/#!
🚵/+ person_mountain_biking/# mountain_bicyclist/#
🚵‍♀️/+ woman_mountain_biking/#!
🚵‍♂️/+ man_mountain_biking/#!
🚴/+ person_biking/# bicyclist/#
🚴‍♀️/+ woman_biking/#!
🚴‍♂️/+ man_biking/#!
🏆 trophy
🥇 first_place first_place_medal
🥈 second_place second_place_medal
🥉 third_place third_place_medal
🏅 medal sports_medal
🎖️ military_medal
🏵️ rosette
🎗️ reminder_ribbon
🎫 ticket
🎟️ tickets admission_tickets
🎪 circus_tent
🤹/+ person_juggling/# juggling/# juggler/#
🤹‍♀️/+ woman_juggling/#!
🤹‍♂️/+ man_juggling/#!
🎭 performing_arts
🩰 ballet_shoes
🎨 art
🎬 clapper
🎤 microphone
🎧 headphones
🎼 musical_score
🎹 musical_keyboard
🥁 drum drum_with_drumsticks
🪘 long_drum
🎷 saxophone
🎺 trumpet
🎸 guitar
🪕 banjo
🎻 violin
🪗 accordion
🎲 game_die
♟️ chess_pawn
🎯 dart
🎳 bowling
🎮 video_game
🎰 slot_machine
🧩 jigsaw
🚗 red_car
🚕 taxi
🚙 blue_car
🛻 pickup_truck
🚌 bus
🚎 trolleybus
🏎️ race_car racing_car
🚓 police_car
🚑 ambulance
🚒 fire_engine
🚐 minibus
🚚 truck
🚛 articulated_lorry
🚜 tractor
🦯 probing_cane
🦽 manual_wheelchair
🦼 motorized_wheelchair
🛴 scooter
🚲 bike
🛵 motor_scooter motorbike
🏍️ motorcycle racing_motorcycle
🛺 auto_rickshaw
🚨 rotating_light
🚔 oncoming_police_car
🚍 oncoming_bus
🚘 oncoming_automobile
🚖 oncoming_taxi
🚡 aerial_tramway
🚠 mountain_cableway
🚟 suspension_railway
🚃 railway_car
🚋 train
🚞 mountain_railway
🚝 monorail
🚄 bullettrain_side
🚅 bullettrain_front
🚈 light_rail
🚂 steam_locomotive
🚆 train2
🚇 metro
🚊 tram
🚉 station
✈️ airplane
🛫 airplane_departure
🛬 airplane_arriving
🛩️ airplane_small small_airplane
💺 seat
🛰️ satellite_orbital
🚀 rocket
🛸 flying_saucer
🚁 helicopter
🛶 canoe kayak
⛵ sailboat
🚤 speedboat
🛥️ motorboat
🛳️ cruise_ship passenger_ship
⛴️ ferry
🚢 ship
⚓ anchor
⛽ fuelpump
🚧 construction
🚦 vertical_traffic_light
🚥 traffic_light
🚏 busstop
🗺️ map world_map
🗿 moyai
🗽 statue_of_liberty
🗼 tokyo_tower
🏰 european_castle
🏯 japanese_castle
🏟️ stadium
🎡 ferris_wheel
🎢 roller_coaster
🎠 carousel_horse
⛲ fountain
⛱️ beach_umbrella umbrella_on_ground
🏖️ beach beach_with_umbrella
🏝️ island desert_island
🏜️ desert
🌋 volcano
⛰️ mountain
🏔️ mountain_snow snow_capped_mountain
🗻 mount_fuji
🏕️ camping
⛺ tent
🏠 house
🏡 house_with_garden
🏘️ homes house_buildings
🏚️ house_abandoned derelict_house_building
🛖 hut
🏗️ construction_site building_construction
🏭 factory
🏢 office
🏬 department_store
🏣 post_office
🏤 european_post_office
🏥 hospital
🏦 bank
🏨 hotel
🏪 convenience_store
🏫 school
🏩 love_hotel
💒 wedding
🏛️ classical_building
⛪ church
🕌 mosque
🕍 synagogue
🛕 hindu_temple
🕋 kaaba
⛩️ shinto_shrine
🛤️ railway_track railroad_track
🛣️ motorway
🗾 japan
🎑 rice_scene
🏞️ park national_park
🌅 sunrise
🌄 sunrise_over_mountains
🌠 stars
🎇 sparkler
🎆 fireworks
🌇 city_sunset city_sunrise
🌆 city_dusk
🏙️ cityscape
🌃 night_with_stars
🌌 milky_way
🌉 bridge_at_night
🌁 foggy
⌚ watch
📱 mobile_phone iphone
📲 calling
💻 computer
⌨️ keyboard
🖥️ desktop desktop_computer
🖨️ printer
🖱️ mouse_three_button three_button_mouse
🖲️ trackball
🕹️ joystick
🗜️ compression
💽 minidisc
💾 floppy_disk
💿 cd
📀 dvd
📼 vhs
📷 camera
📸 camera_with_flash
📹 video_camera
🎥 movie_camera
📽️ projector film_projector
🎞️ film_frames
📞 telephone_receiver
☎️ telephone
📟 pager
📠 fax
📺 tv
📻 radio
🎙️ microphone2 studio_microphone
🎚️ level_slider
🎛️ control_knobs
🧭 compass
⏱️ stopwatch
⏲️ timer timer_clock
⏰ alarm_clock
🕰️ clock mantlepiece_clock
⌛ hourglass
⏳ hourglass_flowing_sand
📡 satellite
🔋 battery
🔌 electric_plug
💡 bulb
🔦 flashlight
🕯️ candle
🪔 diya_lamp
🧯 fire_extinguisher
🛢️ oil oil_drum
💸 money_with_wings
💵 dollar
💴 yen
💶 euro
💷 pound
🪙 coin
💰 moneybag
💳 credit_card
💎 gem
⚖️ scales
🪜 ladder
🧰 toolbox
🪛 screwdriver
🔧 wrench
🔨 hammer
⚒️ hammer_pick hammer_and_pick
🛠️ tools hammer_and_wrench
⛏️ pick
🔩 nut_and_bolt
⚙️ gear
🧱 bricks
⛓️ chains
🪝 hook
🪢 knot
🧲 magnet
🔫 gun
💣 bomb
🧨 firecracker
🪓 axe
🪚 carpentry_saw
🔪 knife
🗡️ dagger dagger_knife
⚔️ crossed_swords
🛡️ shield
🚬 smoking
⚰️ coffin
🪦 headstone
⚱️ urn funeral_urn
🏺 amphora
🪄 magic_wand
🔮 crystal_ball
📿 prayer_beads
🧿 nazar_amulet
💈 barber
⚗️ alembic
🔭 telescope
🔬 microscope
🕳️ hole
🪟 window
🩹 adhesive_bandage
🩺 stethoscope
💊 pill
💉 syringe
🩸 drop_of_blood
🧬 dna
🦠 microbe
🧫 petri_dish
🧪 test_tube
🌡️ thermometer
🪤 mouse_trap
🧹 broom
🧺 basket
🪡 sewing_needle
🧻 roll_of_paper
🚽 toilet
🪠 plunger
🪣 bucket
🚰 potable_water
🚿 shower
🛁 bathtub
🛀/+ bath/#
🪥 toothbrush
🧼 soap
🪒 razor
🧽 sponge
🧴 squeeze_bottle
🛎️ bellhop bellhop_bell
🔑 key
🗝️ key2 old_key
🚪 door
🪑 chair
🪞 mirror
🛋️ couch couch_and_lamp
🛏️ bed
🛌/+ sleeping_accommodation person_in_bed/#!*
🧸 teddy_bear
🖼️ frame_photo frame_with_picture
🛍️ shopping_bags
🛒 shopping_cart shopping_trolley
🎁 gift
🎈 balloon
🎏 flags
🎀 ribbon
🎊 confetti_ball
🎉 tada
🪅 piñata
🪆 nesting_dolls
🎎 dolls
🏮 izakaya_lantern
🎐 wind_chime
🧧 red_envelope
✉️ envelope
📩 envelope_with_arrow
📨 incoming_envelope
📧 e_mail email
💌 love_letter
📥 inbox_tray
📤 outbox_tray
📦 package
🏷️ label
📪 mailbox_closed
📫 mailbox
📬 mailbox_with_mail
📭 mailbox_with_no_mail
📮 postbox
📯 postal_horn
🪧 placard
📜 scroll
📃 page_with_curl
📄 page_facing_up
📑 bookmark_tabs
🧾 receipt
📊 bar_chart
📈 chart_with_upwards_trend
📉 chart_with_downwards_trend
🗒️ notepad_spiral spiral_note_pad
🗓️ calendar_spiral spiral_calendar_pad
📆 calendar
📅 date
🗑️ wastebasket
📇 card_index
🗃️ card_box card_file_box
🗳️ ballot_box ballot_box_with_ballot
🗄️ file_cabinet
📋 clipboard
📁 file_folder
📂 open_file_folder
🗂️ dividers card_index_dividers
🗞️ newspaper2 rolled_up_newspaper
📰 newspaper
📓 notebook
📔 notebook_with_decorative_cover
📒 ledger
📕 closed_book
📗 green_book
📘 blue_book
📙 orange_book
📚 books
📖 book
🔖 bookmark
🧷 safety_pin
🔗 link
📎 paperclip
🖇️ paperclips linked_paperclips
📐 triangular_ruler
📏 straight_ruler
🧮 abacus
📌 pushpin
📍 round_pushpin
✂️ scissors
🖊️ pen_ballpoint lower_left_ballpoint_pen
🖋️ pen_fountain lower_left_fountain_pen
✒️ black_nib
🖌️ paintbrush lower_left_paintbrush
🖍️ crayon lower_left_crayon
📝 pencil memo
✏️ pencil2
🔍 mag
🔎 mag_right
🔏 lock_with_ink_pen
🔐 closed_lock_with_key
🔒 lock
🔓 unlock
❤️ heart
🧡 orange_heart
💛 yellow_heart
💚 green_heart
💙 blue_heart
💜 purple_heart
🖤 black_heart
🤎 brown_heart
🤍 white_heart
💔 broken_heart
❣️ heart_exclamation heavy_heart_exclamation_mark_ornament
💕 two_hearts
💞 revolving_hearts
💓 heartbeat
💗 heartpulse
💖 sparkling_heart
💘 cupid
💝 gift_heart
💟 heart_decoration
☮️ peace peace_symbol
✝️ cross latin_cross
☪️ star_and_crescent
🕉️ om_symbol
☸️ wheel_of_dharma
✡️ star_of_david
🔯 six_pointed_star
🕎 menorah
☯️ yin_yang
☦️ orthodox_cross
🛐 place_of_worship worship_symbol
⛎ ophiuchus
♈ aries
♉ taurus
♊ gemini
♋ cancer
♌ leo
♍ virgo
♎ libra
♏ scorpius
♐ sagittarius
♑ capricorn
♒ aquarius
♓ pisces
🆔 id
⚛️ atom atom_symbol
🉑 accept
☢️ radioactive radioactive_sign
☣️ biohazard biohazard_sign
📴 mobile_phone_off
📳 vibration_mode
🈶 u6709
🈚 u7121
🈸 u7533
🈺 u55b6
🈷️ u6708
✴️ eight_pointed_black_star
🆚 vs
💮 white_flower
🉐 ideograph_advantage
㊙️ secret
㊗️ congratulations
🈴 u5408
🈵 u6e80
🈹 u5272
🈲 u7981
🅰️ a
🅱️ b
🆎 ab
🆑 cl
🅾️ o2
🆘 sos
❌ x
⭕ o
🛑 octagonal_sign stop_sign
⛔ no_entry
📛 name_badge
🚫 no_entry_sign
💯 100
💢 anger
♨️ hotsprings
🚷 no_pedestrians
🚯 do_not_litter
🚳 no_bicycles
🚱 non_potable_water
🔞 underage
📵 no_mobile_phones
🚭 no_smoking
❗ exclamation
❕ grey_exclamation
❓ question
❔ grey_question
‼️ bangbang
⁉️ interrobang
🔅 low_brightness
🔆 high_brightness
〽️ part_alternation_mark
⚠️ warning
🚸 children_crossing
🔱 trident
⚜️ fleur_de_lis
🔰 beginner
♻️ recycle
✅ white_check_mark
🈯 u6307
💹 chart
❇️ sparkle
✳️ eight_spoked_asterisk
❎ negative_squared_cross_mark
🌐 globe_with_meridians
💠 diamond_shape_with_a_dot_inside
Ⓜ️ m
🌀 cyclone
💤 zzz
🏧 atm
🚾 wc
♿ wheelchair
🅿️ parking
🈳 u7a7a
🈂️ sa
🛂 passport_control
🛃 customs
🛄 baggage_claim
🛅 left_luggage
🛗 elevator
🚹 mens
🚺 womens
🚼 baby_symbol
🚻 restroom
🚮 put_litter_in_its_place
🎦 cinema
📶 signal_strength
🈁 koko
🔣 symbols
ℹ️ information_source
🔤 abc
🔡 abcd
🔠 capital_abcd
🆖 ng
🆗 ok
🆙 up
🆒 cool
🆕 new
🆓 free
0️⃣ zero
1️⃣ one
2️⃣ two
3️⃣ three
4️⃣ four
5️⃣ five
6️⃣ six
7️⃣ seven
8️⃣ eight
9️⃣ nine
🔟 keycap_ten
🔢 1234
#️⃣ hash
*️⃣ asterisk keycap_asterisk
⏏️ eject eject_symbol
▶️ arrow_forward
⏸️ pause_button double_vertical_bar
⏯️ play_pause
⏹️ stop_button
⏺️ record_button
⏭️ track_next next_track
⏮️ track_previous previous_track
⏩ fast_forward
⏪ rewind
⏫ arrow_double_up
⏬ arrow_double_down
◀️ arrow_backward
🔼 arrow_up_small
🔽 arrow_down_small
➡️ arrow_right
⬅️ arrow_left
⬆️ arrow_up
⬇️ arrow_down
↗️ arrow_upper_right
↘️ arrow_lower_right
↙️ arrow_lower_left
↖️ arrow_upper_left
↕️ arrow_up_down
↔️ left_right_arrow
↪️ arrow_right_hook
↩️ leftwards_arrow_with_hook
⤴️ arrow_heading_up
⤵️ arrow_heading_down
🔀 twisted_rightwards_arrows
🔁 repeat
🔂 repeat_one
🔄 arrows_counterclockwise
🔃 arrows_clockwise
🎵 musical_note
🎶 notes
➕ heavy_plus_sign
➖ heavy_minus_sign
➗ heavy_division_sign
✖️ heavy_multiplication_x
♾️ infinity
💲 heavy_dollar_sign
💱 currency_exchange
™️ tm
©️ copyright
®️ registered
〰️ wavy_dash
➰ curly_loop
➿ loop
🔚 end
🔙 back
🔛 on
🔝 top
🔜 soon
✔️ heavy_check_mark
☑️ ballot_box_with_check
🔘 radio_button
⚪ white_circle
⚫ black_circle
🔴 red_circle
🔵 blue_circle
🟤 brown_circle
🟣 purple_circle
🟢 green_circle
🟡 yellow_circle
🟠 orange_circle
🔺 small_red_triangle
🔻 small_red_triangle_down
🔸 small_orange_diamond
🔹 small_blue_diamond
🔶 large_orange_diamond
🔷 large_blue_diamond
🔳 white_square_button
🔲 black_square_button
▪️ black_small_square
▫️ white_small_square
◾ black_medium_small_square
◽ white_medium_small_square
◼️ black_medium_square
◻️ white_medium_square
⬛ black_large_square
⬜ white_large_square
🟧 orange_square
🟦 blue_square
🟥 red_square
🟫 brown_square
🟪 purple_square
🟩 green_square
🟨 yellow_square
🔈 speaker
🔇 mute
🔉 sound
🔊 loud_sound
🔔 bell
🔕 no_bell
📣 mega
📢 loudspeaker
🗨️ speech_left left_speech_bubble
👁‍🗨 eye_in_speech_bubble
💬 speech_balloon
💭 thought_balloon
🗯️ anger_right right_anger_bubble
♠️ spades
♣️ clubs
♥️ hearts
♦️ diamonds
🃏 black_joker
🎴 flower_playing_cards
🀄 mahjong
🕐 clock1
🕑 clock2
🕒 clock3
🕓 clock4
🕔 clock5
🕕 clock6
🕖 clock7
🕗 clock8
🕘 clock9
🕙 clock10
🕚 clock11
🕛 clock12
🕜 clock130
🕝 clock230
🕞 clock330
🕟 clock430
🕠 clock530
🕡 clock630
🕢 clock730
🕣 clock830
🕤 clock930
🕥 clock1030
🕦 clock1130
🕧 clock1230
♀️ female_sign
♂️ male_sign
⚧ transgender_symbol
⚕️ medical_symbol
🇿 regional_indicator_z
🇾 regional_indicator_y
🇽 regional_indicator_x
🇼 regional_indicator_w
🇻 regional_indicator_v
🇺 regional_indicator_u
🇹 regional_indicator_t
🇸 regional_indicator_s
🇷 regional_indicator_r
🇶 regional_indicator_q
🇵 regional_indicator_p
🇴 regional_indicator_o
🇳 regional_indicator_n
🇲 regional_indicator_m
🇱 regional_indicator_l
🇰 regional_indicator_k
🇯 regional_indicator_j
🇮 regional_indicator_i
🇭 regional_indicator_h
🇬 regional_indicator_g
🇫 regional_indicator_f
🇪 regional_indicator_e
🇩 regional_indicator_d
🇨 regional_indicator_c
🇧 regional_indicator_b
🇦 regional_indicator_a
🏳️ flag_white
🏴 flag_black
🏁 checkered_flag
🚩 triangular_flag_on_post
🏳️‍🌈 rainbow_flag gay_pride_flag
🏳️‍⚧️ transgender_flag
🏴‍☠️ pirate_flag
🇦🇫 flag_af
🇦🇽 flag_ax
🇦🇱 flag_al
🇩🇿 flag_dz
🇦🇸 flag_as
🇦🇩 flag_ad
🇦🇴 flag_ao
🇦🇮 flag_ai
🇦🇶 flag_aq
🇦🇬 flag_ag
🇦🇷 flag_ar
🇦🇲 flag_am
🇦🇼 flag_aw
🇦🇺 flag_au
🇦🇹 flag_at
🇦🇿 flag_az
🇧🇸 flag_bs
🇧🇭 flag_bh
🇧🇩 flag_bd
🇧🇧 flag_bb
🇧🇾 flag_by
🇧🇪 flag_be
🇧🇿 flag_bz
🇧🇯 flag_bj
🇧🇲 flag_bm
🇧🇹 flag_bt
🇧🇴 flag_bo
🇧🇦 flag_ba
🇧🇼 flag_bw
🇧🇷 flag_br
🇮🇴 flag_io
🇻🇬 flag_vg
🇧🇳 flag_bn
🇧🇬 flag_bg
🇧🇫 flag_bf
🇧🇮 flag_bi
🇰🇭 flag_kh
🇨🇲 flag_cm
🇨🇦 flag_ca
🇮🇨 flag_ic
🇨🇻 flag_cv
🇧🇶 flag_bq
🇰🇾 flag_ky
🇨🇫 flag_cf
🇹🇩 flag_td
🇨🇱 flag_cl
🇨🇳 flag_cn
🇨🇽 flag_cx
🇨🇨 flag_cc
🇨🇴 flag_co
🇰🇲 flag_km
🇨🇬 flag_cg
🇨🇩 flag_cd
🇨🇰 flag_ck
🇨🇷 flag_cr
🇨🇮 flag_ci
🇭🇷 flag_hr
🇨🇺 flag_cu
🇨🇼 flag_cw
🇨🇾 flag_cy
🇨🇿 flag_cz
🇩🇰 flag_dk
🇩🇯 flag_dj
🇩🇲 flag_dm
🇩🇴 flag_do
🇪🇨 flag_ec
🇪🇬 flag_eg
🇸🇻 flag_sv
🇬🇶 flag_gq
🇪🇷 flag_er
🇪🇪 flag_ee
🇪🇹 flag_et
🇪🇺 flag_eu
🇫🇰 flag_fk
🇫🇴 flag_fo
🇫🇯 flag_fj
🇫🇮 flag_fi
🇫🇷 flag_fr
🇬🇫 flag_gf
🇵🇫 flag_pf
🇹🇫 flag_tf
🇬🇦 flag_ga
🇬🇲 flag_gm
🇬🇪 flag_ge
🇩🇪 flag_de
🇬🇭 flag_gh
🇬🇮 flag_gi
🇬🇷 flag_gr
🇬🇱 flag_gl
🇬🇩 flag_gd
🇬🇵 flag_gp
🇬🇺 flag_gu
🇬🇹 flag_gt
🇬🇬 flag_gg
🇬🇳 flag_gn
🇬🇼 flag_gw
🇬🇾 flag_gy
🇭🇹 flag_ht
🇭🇳 flag_hn
🇭🇰 flag_hk
🇭🇺 flag_hu
🇮🇸 flag_is
🇮🇳 flag_in
🇮🇩 flag_id
🇮🇷 flag_ir
🇮🇶 flag_iq
🇮🇪 flag_ie
🇮🇲 flag_im
🇮🇱 flag_il
🇮🇹 flag_it
🇯🇲 flag_jm
🇯🇵 flag_jp
🎌 crossed_flags
🇯🇪 flag_je
🇯🇴 flag_jo
🇰🇿 flag_kz
🇰🇪 flag_ke
🇰🇮 flag_ki
🇽🇰 flag_xk
🇰🇼 flag_kw
🇰🇬 flag_kg
🇱🇦 flag_la
🇱🇻 flag_lv
🇱🇧 flag_lb
🇱🇸 flag_ls
🇱🇷 flag_lr
🇱🇾 flag_ly
🇱🇮 flag_li
🇱🇹 flag_lt
🇱🇺 flag_lu
🇲🇴 flag_mo
🇲🇰 flag_mk
🇲🇬 flag_mg
🇲🇼 flag_mw
🇲🇾 flag_my
🇲🇻 flag_mv
🇲🇱 flag_ml
🇲🇹 flag_mt
🇲🇭 flag_mh
🇲🇶 flag_mq
🇲🇷 flag_mr
🇲🇺 flag_mu
🇾🇹 flag_yt
🇲🇽 flag_mx
🇫🇲 flag_fm
🇲🇩 flag_md
🇲🇨 flag_mc
🇲🇳 flag_mn
🇲🇪 flag_me
🇲🇸 flag_ms
🇲🇦 flag_ma
🇲🇿 flag_mz
🇲🇲 flag_mm
🇳🇦 flag_na
🇳🇷 flag_nr
🇳🇵 flag_np
🇳🇱 flag_nl
🇳🇨 flag_nc
🇳🇿 flag_nz
🇳🇮 flag_ni
🇳🇪 flag_ne
🇳🇬 flag_ng
🇳🇺 flag_nu
🇳🇫 flag_nf
🇰🇵 flag_kp
🇲🇵 flag_mp
🇳🇴 flag_no
🇴🇲 flag_om
🇵🇰 flag_pk
🇵🇼 flag_pw
🇵🇸 flag_ps
🇵🇦 flag_pa
🇵🇬 flag_pg
🇵🇾 flag_py
🇵🇪 flag_pe
🇵🇭 flag_ph
🇵🇳 flag_pn
🇵🇱 flag_pl
🇵🇹 flag_pt
🇵🇷 flag_pr
🇶🇦 flag_qa
🇷🇪 flag_re
🇷🇴 flag_ro
🇷🇺 flag_ru
🇷🇼 flag_rw
🇼🇸 flag_ws
🇸🇲 flag_sm
🇸🇹 flag_st
🇸🇦 flag_sa
🇸🇳 flag_sn
🇷🇸 flag_rs
🇸🇨 flag_sc
🇸🇱 flag_sl
🇸🇬 flag_sg
🇸🇽 flag_sx
🇸🇰 flag_sk
🇸🇮 flag_si
🇬🇸 flag_gs
🇸🇧 flag_sb
🇸🇴 flag_so
🇿🇦 flag_za
🇰🇷 flag_kr
🇸🇸 flag_ss
🇪🇸 flag_es
🇱🇰 flag_lk
🇧🇱 flag_bl
🇸🇭 flag_sh
🇰🇳 flag_kn
🇱🇨 flag_lc
🇵🇲 flag_pm
🇻🇨 flag_vc
🇸🇩 flag_sd
🇸🇷 flag_sr
🇸🇿 flag_sz
🇸🇪 flag_se
🇨🇭 flag_ch
🇸🇾 flag_sy
🇹🇼 flag_tw
🇹🇯 flag_tj
🇹🇿 flag_tz
🇹🇭 flag_th
🇹🇱 flag_tl
🇹🇬 flag_tg
🇹🇰 flag_tk
🇹🇴 flag_to
🇹🇹 flag_tt
🇹🇳 flag_tn
🇹🇷 flag_tr
🇹🇲 flag_tm
🇹🇨 flag_tc
🇻🇮 flag_vi
🇹🇻 flag_tv
🇺🇬 flag_ug
🇺🇦 flag_ua
🇦🇪 flag_ae
🇬🇧 flag_gb
🏴󠁧󠁢󠁥󠁮󠁧󠁿 england
🏴󠁧󠁢󠁳󠁣󠁴󠁿 scotland
🏴󠁧󠁢󠁷󠁬󠁳󠁿 wales
🇺🇸 flag_us
🇺🇾 flag_uy
🇺🇿 flag_uz
🇻🇺 flag_vu
🇻🇦 flag_va
🇻🇪 flag_ve
🇻🇳 flag_vn
🇼🇫 flag_wf
🇪🇭 flag_eh
🇾🇪 flag_ye
🇿🇲 flag_zm
🇿🇼 flag_zw
🇦🇨 flag_ac
🇧🇻 flag_bv
🇨🇵 flag_cp
🇪🇦 flag_ea
🇩🇬 flag_dg
🇭🇲 flag_hm
🇲🇫 flag_mf
🇸🇯 flag_sj
🇹🇦 flag_ta
🇺🇲 flag_um
🇺🇳 united_nations
0⃣ zero
1⃣ one
2⃣ two
3⃣ three
4⃣ four
5⃣ five
6⃣ six
7⃣ seven
8⃣ eight
9⃣ nine
🏻 skin-tone-1
🏼 skin-tone-2
🏽 skin-tone-3
🏾 skin-tone-4
🏿 skin-tone-5
`.trim();

/***/ }),

/***/ "./modules/markdown/emoji/skinTones.ts":
/*!*********************************************!*\
  !*** ./modules/markdown/emoji/skinTones.ts ***!
  \*********************************************/
/*! exports provided: SKIN_TONES, TONE_NUMBERS, TONE_NAMES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SKIN_TONES", function() { return SKIN_TONES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TONE_NUMBERS", function() { return TONE_NUMBERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TONE_NAMES", function() { return TONE_NAMES; });
const SKIN_TONES = [{
  unicode: "🏻",
  number: 1,
  name: "light"
}, {
  unicode: "🏼",
  number: 2,
  name: "medium_light"
}, {
  unicode: "🏽",
  number: 3,
  name: "medium"
}, {
  unicode: "🏾",
  number: 4,
  name: "medium_dark"
}, {
  unicode: "🏿",
  number: 5,
  name: "dark"
}];
const TONE_NUMBERS = Object.fromEntries(SKIN_TONES.map(tone => [tone.number, tone.unicode]));
const TONE_NAMES = Object.fromEntries(SKIN_TONES.map(tone => [tone.name, tone.unicode]));

/***/ }),

/***/ "./modules/markdown/helpers/depunycodeUrl.ts":
/*!***************************************************!*\
  !*** ./modules/markdown/helpers/depunycodeUrl.ts ***!
  \***************************************************/
/*! exports provided: depunycodeUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "depunycodeUrl", function() { return depunycodeUrl; });
/* harmony import */ var punycode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! punycode */ "punycode");
/* harmony import */ var punycode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(punycode__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! url */ "url");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const depunycodeUrl = link => {
  try {
    const url = url__WEBPACK_IMPORTED_MODULE_1__["parse"](link);
    const {
      hostname,
      protocol
    } = url;
    if ((protocol === null || protocol === void 0 ? void 0 : protocol.toLowerCase()) === "file:") return;
    if (!hostname) return;
    const asciiHostname = Object(punycode__WEBPACK_IMPORTED_MODULE_0__["toASCII"])(hostname);
    return url__WEBPACK_IMPORTED_MODULE_1__["format"](_objectSpread(_objectSpread({}, url), {}, {
      hostname: asciiHostname,
      protocol
    }));
  } catch {// return nothing
  }
};

/***/ }),

/***/ "./modules/markdown/helpers/getTextDirection.ts":
/*!******************************************************!*\
  !*** ./modules/markdown/helpers/getTextDirection.ts ***!
  \******************************************************/
/*! exports provided: getTextDirection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTextDirection", function() { return getTextDirection; });
const LTR_CHARS = ["A-Z", "a-z", "\u00c0-\u00d6", "\u00d8-\u00f6", "\u00f8-\u02b8", "\u0300-\u0590", "\u0800-\u1fff", "\u200e-\ufb1c", "\ufe00-\ufe6f", "\ufefd-\uffff"].join("");
const RTL_CHARS = ["\u0591-\u07ff", "\ufb1d-\ufdfd", "\ufe70-\ufefc"].join("");
const LTR_RE = new RegExp(`^[^${RTL_CHARS}]*[${LTR_CHARS}]`);
const RTL_RE = new RegExp(`^[^${LTR_CHARS}]*[${RTL_CHARS}]`);
const getTextDirection = text => {
  if (LTR_RE.test(text)) return "ltr";
  if (RTL_RE.test(text)) return "rtl";
  return "neutral";
};

/***/ }),

/***/ "./modules/markdown/helpers/parseUrl.ts":
/*!**********************************************!*\
  !*** ./modules/markdown/helpers/parseUrl.ts ***!
  \**********************************************/
/*! exports provided: parseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseUrl", function() { return parseUrl; });
/* harmony import */ var _depunycodeUrl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./depunycodeUrl */ "./modules/markdown/helpers/depunycodeUrl.ts");

const parseUrl = capture => {
  const [, content] = capture;
  const url = Object(_depunycodeUrl__WEBPACK_IMPORTED_MODULE_0__["depunycodeUrl"])(content);

  if (!url) {
    return {
      type: "text",
      content
    };
  }

  return {
    content: [{
      type: "text",
      content: url
    }],
    target: url
  };
};

/***/ }),

/***/ "./modules/markdown/parsers/createParser.ts":
/*!**************************************************!*\
  !*** ./modules/markdown/parsers/createParser.ts ***!
  \**************************************************/
/*! exports provided: createParser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createParser", function() { return createParser; });
/* harmony import */ var simple_markdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! simple-markdown */ "simple-markdown");
/* harmony import */ var simple_markdown__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(simple_markdown__WEBPACK_IMPORTED_MODULE_0__);

const createParser = (rules, transform) => {
  const parse = Object(simple_markdown__WEBPACK_IMPORTED_MODULE_0__["parserFor"])(rules, {
    inline: true
  });
  const output = Object(simple_markdown__WEBPACK_IMPORTED_MODULE_0__["outputFor"])(rules, "react");
  return content => {
    let ast = parse(content);

    if (transform) {
      ast = transform(ast);
    }

    return output(ast);
  };
};

/***/ }),

/***/ "./modules/markdown/parsers/parseEmbedContent.ts":
/*!*******************************************************!*\
  !*** ./modules/markdown/parsers/parseEmbedContent.ts ***!
  \*******************************************************/
/*! exports provided: parseEmbedContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseEmbedContent", function() { return parseEmbedContent; });
/* harmony import */ var _rules_autolink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../rules/autolink */ "./modules/markdown/rules/autolink.ts");
/* harmony import */ var _rules_blockQuote__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rules/blockQuote */ "./modules/markdown/rules/blockQuote.tsx");
/* harmony import */ var _rules_codeBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rules/codeBlock */ "./modules/markdown/rules/codeBlock.tsx");
/* harmony import */ var _rules_customEmoji__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rules/customEmoji */ "./modules/markdown/rules/customEmoji.ts");
/* harmony import */ var _rules_emoji__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../rules/emoji */ "./modules/markdown/rules/emoji.tsx");
/* harmony import */ var _rules_emote__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../rules/emote */ "./modules/markdown/rules/emote.ts");
/* harmony import */ var _rules_emphasis__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../rules/emphasis */ "./modules/markdown/rules/emphasis.ts");
/* harmony import */ var _rules_escape__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../rules/escape */ "./modules/markdown/rules/escape.ts");
/* harmony import */ var _rules_inlineCode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../rules/inlineCode */ "./modules/markdown/rules/inlineCode.tsx");
/* harmony import */ var _rules_lineBreak__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../rules/lineBreak */ "./modules/markdown/rules/lineBreak.ts");
/* harmony import */ var _rules_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../rules/link */ "./modules/markdown/rules/link.tsx");
/* harmony import */ var _rules_mention__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../rules/mention */ "./modules/markdown/rules/mention.tsx");
/* harmony import */ var _rules_newline__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../rules/newline */ "./modules/markdown/rules/newline.ts");
/* harmony import */ var _rules_paragraph__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../rules/paragraph */ "./modules/markdown/rules/paragraph.ts");
/* harmony import */ var _rules_spoiler__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../rules/spoiler */ "./modules/markdown/rules/spoiler.tsx");
/* harmony import */ var _rules_strikethrough__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../rules/strikethrough */ "./modules/markdown/rules/strikethrough.ts");
/* harmony import */ var _rules_strong__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../rules/strong */ "./modules/markdown/rules/strong.ts");
/* harmony import */ var _rules_text__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../rules/text */ "./modules/markdown/rules/text.ts");
/* harmony import */ var _rules_underline__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../rules/underline */ "./modules/markdown/rules/underline.ts");
/* harmony import */ var _rules_url__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../rules/url */ "./modules/markdown/rules/url.tsx");
/* harmony import */ var _createParser__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./createParser */ "./modules/markdown/parsers/createParser.ts");





















const parseEmbedContent = Object(_createParser__WEBPACK_IMPORTED_MODULE_20__["createParser"])({
  autolink: _rules_autolink__WEBPACK_IMPORTED_MODULE_0__["autolink"],
  blockQuote: _rules_blockQuote__WEBPACK_IMPORTED_MODULE_1__["blockQuote"],
  codeBlock: _rules_codeBlock__WEBPACK_IMPORTED_MODULE_2__["codeBlock"],
  customEmoji: _rules_customEmoji__WEBPACK_IMPORTED_MODULE_3__["customEmoji"],
  emoji: _rules_emoji__WEBPACK_IMPORTED_MODULE_4__["emoji"],
  emote: _rules_emote__WEBPACK_IMPORTED_MODULE_5__["emote"],
  emphasis: _rules_emphasis__WEBPACK_IMPORTED_MODULE_6__["emphasis"],
  escape: _rules_escape__WEBPACK_IMPORTED_MODULE_7__["escape"],
  inlineCode: _rules_inlineCode__WEBPACK_IMPORTED_MODULE_8__["inlineCode"],
  lineBreak: _rules_lineBreak__WEBPACK_IMPORTED_MODULE_9__["lineBreak"],
  link: _rules_link__WEBPACK_IMPORTED_MODULE_10__["link"],
  mention: _rules_mention__WEBPACK_IMPORTED_MODULE_11__["mention"],
  newline: _rules_newline__WEBPACK_IMPORTED_MODULE_12__["newline"],
  paragraph: _rules_paragraph__WEBPACK_IMPORTED_MODULE_13__["paragraph"],
  spoiler: _rules_spoiler__WEBPACK_IMPORTED_MODULE_14__["spoiler"],
  strikethrough: _rules_strikethrough__WEBPACK_IMPORTED_MODULE_15__["strikethrough"],
  strong: _rules_strong__WEBPACK_IMPORTED_MODULE_16__["strong"],
  text: _rules_text__WEBPACK_IMPORTED_MODULE_17__["text"],
  underline: _rules_underline__WEBPACK_IMPORTED_MODULE_18__["underline"],
  url: _rules_url__WEBPACK_IMPORTED_MODULE_19__["url"]
});

/***/ }),

/***/ "./modules/markdown/parsers/parseEmbedHeader.ts":
/*!******************************************************!*\
  !*** ./modules/markdown/parsers/parseEmbedHeader.ts ***!
  \******************************************************/
/*! exports provided: parseEmbedHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseEmbedHeader", function() { return parseEmbedHeader; });
/* harmony import */ var _rules_autolink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../rules/autolink */ "./modules/markdown/rules/autolink.ts");
/* harmony import */ var _rules_blockQuote__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rules/blockQuote */ "./modules/markdown/rules/blockQuote.tsx");
/* harmony import */ var _rules_customEmoji__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rules/customEmoji */ "./modules/markdown/rules/customEmoji.ts");
/* harmony import */ var _rules_emoji__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rules/emoji */ "./modules/markdown/rules/emoji.tsx");
/* harmony import */ var _rules_emote__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../rules/emote */ "./modules/markdown/rules/emote.ts");
/* harmony import */ var _rules_emphasis__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../rules/emphasis */ "./modules/markdown/rules/emphasis.ts");
/* harmony import */ var _rules_escape__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../rules/escape */ "./modules/markdown/rules/escape.ts");
/* harmony import */ var _rules_inlineCode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../rules/inlineCode */ "./modules/markdown/rules/inlineCode.tsx");
/* harmony import */ var _rules_spoiler__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../rules/spoiler */ "./modules/markdown/rules/spoiler.tsx");
/* harmony import */ var _rules_strikethrough__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../rules/strikethrough */ "./modules/markdown/rules/strikethrough.ts");
/* harmony import */ var _rules_strong__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../rules/strong */ "./modules/markdown/rules/strong.ts");
/* harmony import */ var _rules_text__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../rules/text */ "./modules/markdown/rules/text.ts");
/* harmony import */ var _rules_underline__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../rules/underline */ "./modules/markdown/rules/underline.ts");
/* harmony import */ var _rules_url__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../rules/url */ "./modules/markdown/rules/url.tsx");
/* harmony import */ var _createParser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./createParser */ "./modules/markdown/parsers/createParser.ts");















const parseEmbedHeader = Object(_createParser__WEBPACK_IMPORTED_MODULE_14__["createParser"])({
  autolink: _rules_autolink__WEBPACK_IMPORTED_MODULE_0__["autolink"],
  blockQuote: _rules_blockQuote__WEBPACK_IMPORTED_MODULE_1__["blockQuote"],
  customEmoji: _rules_customEmoji__WEBPACK_IMPORTED_MODULE_2__["customEmoji"],
  emoji: _rules_emoji__WEBPACK_IMPORTED_MODULE_3__["emoji"],
  emote: _rules_emote__WEBPACK_IMPORTED_MODULE_4__["emote"],
  emphasis: _rules_emphasis__WEBPACK_IMPORTED_MODULE_5__["emphasis"],
  escape: _rules_escape__WEBPACK_IMPORTED_MODULE_6__["escape"],
  inlineCode: _rules_inlineCode__WEBPACK_IMPORTED_MODULE_7__["inlineCode"],
  spoiler: _rules_spoiler__WEBPACK_IMPORTED_MODULE_8__["spoiler"],
  strikethrough: _rules_strikethrough__WEBPACK_IMPORTED_MODULE_9__["strikethrough"],
  strong: _rules_strong__WEBPACK_IMPORTED_MODULE_10__["strong"],
  text: _rules_text__WEBPACK_IMPORTED_MODULE_11__["text"],
  underline: _rules_underline__WEBPACK_IMPORTED_MODULE_12__["underline"],
  url: _rules_url__WEBPACK_IMPORTED_MODULE_13__["url"]
});

/***/ }),

/***/ "./modules/markdown/parsers/parseMessageContent.ts":
/*!*********************************************************!*\
  !*** ./modules/markdown/parsers/parseMessageContent.ts ***!
  \*********************************************************/
/*! exports provided: parseMessageContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseMessageContent", function() { return parseMessageContent; });
/* harmony import */ var _emoji_jumbosizeEmojis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../emoji/jumbosizeEmojis */ "./modules/markdown/emoji/jumbosizeEmojis.ts");
/* harmony import */ var _rules_autolink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rules/autolink */ "./modules/markdown/rules/autolink.ts");
/* harmony import */ var _rules_blockQuote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rules/blockQuote */ "./modules/markdown/rules/blockQuote.tsx");
/* harmony import */ var _rules_codeBlock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rules/codeBlock */ "./modules/markdown/rules/codeBlock.tsx");
/* harmony import */ var _rules_customEmoji__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../rules/customEmoji */ "./modules/markdown/rules/customEmoji.ts");
/* harmony import */ var _rules_emoji__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../rules/emoji */ "./modules/markdown/rules/emoji.tsx");
/* harmony import */ var _rules_emote__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../rules/emote */ "./modules/markdown/rules/emote.ts");
/* harmony import */ var _rules_emphasis__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../rules/emphasis */ "./modules/markdown/rules/emphasis.ts");
/* harmony import */ var _rules_escape__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../rules/escape */ "./modules/markdown/rules/escape.ts");
/* harmony import */ var _rules_inlineCode__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../rules/inlineCode */ "./modules/markdown/rules/inlineCode.tsx");
/* harmony import */ var _rules_lineBreak__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../rules/lineBreak */ "./modules/markdown/rules/lineBreak.ts");
/* harmony import */ var _rules_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../rules/link */ "./modules/markdown/rules/link.tsx");
/* harmony import */ var _rules_mention__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../rules/mention */ "./modules/markdown/rules/mention.tsx");
/* harmony import */ var _rules_newline__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../rules/newline */ "./modules/markdown/rules/newline.ts");
/* harmony import */ var _rules_paragraph__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../rules/paragraph */ "./modules/markdown/rules/paragraph.ts");
/* harmony import */ var _rules_spoiler__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../rules/spoiler */ "./modules/markdown/rules/spoiler.tsx");
/* harmony import */ var _rules_strikethrough__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../rules/strikethrough */ "./modules/markdown/rules/strikethrough.ts");
/* harmony import */ var _rules_strong__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../rules/strong */ "./modules/markdown/rules/strong.ts");
/* harmony import */ var _rules_text__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../rules/text */ "./modules/markdown/rules/text.ts");
/* harmony import */ var _rules_underline__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../rules/underline */ "./modules/markdown/rules/underline.ts");
/* harmony import */ var _rules_url__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../rules/url */ "./modules/markdown/rules/url.tsx");
/* harmony import */ var _createParser__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./createParser */ "./modules/markdown/parsers/createParser.ts");






















const parseMessageContent = Object(_createParser__WEBPACK_IMPORTED_MODULE_21__["createParser"])({
  autolink: _rules_autolink__WEBPACK_IMPORTED_MODULE_1__["autolink"],
  blockQuote: _rules_blockQuote__WEBPACK_IMPORTED_MODULE_2__["blockQuote"],
  codeBlock: _rules_codeBlock__WEBPACK_IMPORTED_MODULE_3__["codeBlock"],
  customEmoji: _rules_customEmoji__WEBPACK_IMPORTED_MODULE_4__["customEmoji"],
  emoji: _rules_emoji__WEBPACK_IMPORTED_MODULE_5__["emoji"],
  emote: _rules_emote__WEBPACK_IMPORTED_MODULE_6__["emote"],
  emphasis: _rules_emphasis__WEBPACK_IMPORTED_MODULE_7__["emphasis"],
  escape: _rules_escape__WEBPACK_IMPORTED_MODULE_8__["escape"],
  inlineCode: _rules_inlineCode__WEBPACK_IMPORTED_MODULE_9__["inlineCode"],
  lineBreak: _rules_lineBreak__WEBPACK_IMPORTED_MODULE_10__["lineBreak"],
  link: _rules_link__WEBPACK_IMPORTED_MODULE_11__["link"],
  mention: _rules_mention__WEBPACK_IMPORTED_MODULE_12__["mention"],
  newline: _rules_newline__WEBPACK_IMPORTED_MODULE_13__["newline"],
  paragraph: _rules_paragraph__WEBPACK_IMPORTED_MODULE_14__["paragraph"],
  spoiler: _rules_spoiler__WEBPACK_IMPORTED_MODULE_15__["spoiler"],
  strikethrough: _rules_strikethrough__WEBPACK_IMPORTED_MODULE_16__["strikethrough"],
  strong: _rules_strong__WEBPACK_IMPORTED_MODULE_17__["strong"],
  text: _rules_text__WEBPACK_IMPORTED_MODULE_18__["text"],
  underline: _rules_underline__WEBPACK_IMPORTED_MODULE_19__["underline"],
  url: _rules_url__WEBPACK_IMPORTED_MODULE_20__["url"]
}, _emoji_jumbosizeEmojis__WEBPACK_IMPORTED_MODULE_0__["jumbosizeEmojis"]);

/***/ }),

/***/ "./modules/markdown/parsers/parsers.ts":
/*!*********************************************!*\
  !*** ./modules/markdown/parsers/parsers.ts ***!
  \*********************************************/
/*! exports provided: PARSERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PARSERS", function() { return PARSERS; });
/* harmony import */ var _parseEmbedContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parseEmbedContent */ "./modules/markdown/parsers/parseEmbedContent.ts");
/* harmony import */ var _parseEmbedHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parseEmbedHeader */ "./modules/markdown/parsers/parseEmbedHeader.ts");
/* harmony import */ var _parseMessageContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parseMessageContent */ "./modules/markdown/parsers/parseMessageContent.ts");



const PARSERS = {
  "default": _parseMessageContent__WEBPACK_IMPORTED_MODULE_2__["parseMessageContent"],
  "message-content": _parseMessageContent__WEBPACK_IMPORTED_MODULE_2__["parseMessageContent"],
  "embed-content": _parseEmbedContent__WEBPACK_IMPORTED_MODULE_0__["parseEmbedContent"],
  "embed-header": _parseEmbedHeader__WEBPACK_IMPORTED_MODULE_1__["parseEmbedHeader"]
};

/***/ }),

/***/ "./modules/markdown/rules/autolink.ts":
/*!********************************************!*\
  !*** ./modules/markdown/rules/autolink.ts ***!
  \********************************************/
/*! exports provided: autolink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autolink", function() { return autolink; });
/* harmony import */ var simple_markdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! simple-markdown */ "simple-markdown");
/* harmony import */ var simple_markdown__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(simple_markdown__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_parseUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/parseUrl */ "./modules/markdown/helpers/parseUrl.ts");
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./link */ "./modules/markdown/rules/link.tsx");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const autolink = _objectSpread(_objectSpread({}, simple_markdown__WEBPACK_IMPORTED_MODULE_0__["defaultRules"].autolink), {}, {
  parse: _helpers_parseUrl__WEBPACK_IMPORTED_MODULE_1__["parseUrl"],
  react: _link__WEBPACK_IMPORTED_MODULE_2__["link"].react
});

/***/ }),

/***/ "./modules/markdown/rules/blockQuote.tsx":
/*!***********************************************!*\
  !*** ./modules/markdown/rules/blockQuote.tsx ***!
  \***********************************************/
/*! exports provided: blockQuote */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockQuote", function() { return blockQuote; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var simple_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! simple-markdown */ "simple-markdown");
/* harmony import */ var simple_markdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(simple_markdown__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_BlockQuote__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/BlockQuote */ "./modules/markdown/styles/BlockQuote.tsx");

var _jsxFileName = "F:\\DiscordHookSite\\modules\\markdown\\rules\\blockQuote.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const BEGINNING_OF_LINE_RE = /^$|\n *$/;
const BLOCK_QUOTE_RE = /^( *>>> +([\S\s]*))|^( *>(?!>>) +[^\n]*(\n *>(?!>>) +[^\n]*)*\n?)/;
const SINGLELINE_QUOTE_RE = /^ *> ?/gm;
const MULTILINE_QUOTE_RE = /^ *>>> ?/;
const blockQuote = _objectSpread(_objectSpread({}, simple_markdown__WEBPACK_IMPORTED_MODULE_2__["defaultRules"].blockQuote), {}, {
  match: (source, state) => {
    var _lookbehind$;

    const {
      nested,
      inQuote,
      prevCapture: lookbehind
    } = state; // Prevents having multiple layers of quote blocks

    if (nested) return null;
    if (inQuote) return null; // Makes sure that quotes can only start on the beginning of a line

    if (!BEGINNING_OF_LINE_RE.test((_lookbehind$ = lookbehind === null || lookbehind === void 0 ? void 0 : lookbehind[0]) !== null && _lookbehind$ !== void 0 ? _lookbehind$ : "")) return null;
    return BLOCK_QUOTE_RE.exec(source);
  },
  parse: (capture, parse, state) => {
    const [content] = capture;
    const {
      inline = false
    } = state; // Determine whether or not the quote block is multi-line

    const multiline = MULTILINE_QUOTE_RE.test(capture[0]); // Removes the '>' symbols from content

    const trimRegex = multiline ? MULTILINE_QUOTE_RE : SINGLELINE_QUOTE_RE;
    const trimmedContent = content.replace(trimRegex, ""); // Parses the trimmed content for any markdown

    const parsedContent = parse(trimmedContent, _objectSpread(_objectSpread({}, state), {}, {
      inline: multiline ? inline : true,
      inQuote: true
    })); // Makes sure the block quote always renders, even without content

    if (parsedContent.length === 0) {
      parsedContent.push({
        type: "text",
        content: " "
      });
    }

    return {
      content: parsedContent
    };
  },
  react: (node, output, state) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_BlockQuote__WEBPACK_IMPORTED_MODULE_3__["BlockQuote"], {
    children: output(node.content, state)
  }, state.key, false, {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 5
  }, undefined)
});

/***/ }),

/***/ "./modules/markdown/rules/codeBlock.tsx":
/*!**********************************************!*\
  !*** ./modules/markdown/rules/codeBlock.tsx ***!
  \**********************************************/
/*! exports provided: codeBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeBlock", function() { return codeBlock; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var simple_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! simple-markdown */ "simple-markdown");
/* harmony import */ var simple_markdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(simple_markdown__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _code_CodeBlock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../code/CodeBlock */ "./modules/markdown/code/CodeBlock.tsx");

var _jsxFileName = "F:\\DiscordHookSite\\modules\\markdown\\rules\\codeBlock.tsx";



const CODE_BLOCK_RE = /^```(?:([\w+.-]+?)\n)?\n*([^\n][\S\s]*?)\n*```/i;
const codeBlock = {
  order: simple_markdown__WEBPACK_IMPORTED_MODULE_2__["defaultRules"].codeBlock.order,
  match: Object(simple_markdown__WEBPACK_IMPORTED_MODULE_2__["anyScopeRegex"])(CODE_BLOCK_RE),
  parse: capture => {
    const [, language = "", content] = capture;
    return {
      language,
      content
    };
  },
  react: (node, output, state) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_code_CodeBlock__WEBPACK_IMPORTED_MODULE_3__["CodeBlock"], {
    language: node.language,
    content: node.content
  }, state.key, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, undefined)
};

/***/ }),

/***/ "./modules/markdown/rules/customEmoji.ts":
/*!***********************************************!*\
  !*** ./modules/markdown/rules/customEmoji.ts ***!
  \***********************************************/
/*! exports provided: customEmoji */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customEmoji", function() { return customEmoji; });
/* harmony import */ var simple_markdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! simple-markdown */ "simple-markdown");
/* harmony import */ var simple_markdown__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(simple_markdown__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emoji_getCustomEmojiUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../emoji/getCustomEmojiUrl */ "./modules/markdown/emoji/getCustomEmojiUrl.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const CUSTOM_EMOJI_RE = /^<(a)?:(\w+):(\d+)>/;
const customEmoji = _objectSpread(_objectSpread({}, simple_markdown__WEBPACK_IMPORTED_MODULE_0__["defaultRules"].text), {}, {
  match: Object(simple_markdown__WEBPACK_IMPORTED_MODULE_0__["inlineRegex"])(CUSTOM_EMOJI_RE),
  parse: capture => {
    const [, animated, name, id] = capture;
    return {
      type: "emoji",
      name,
      emoji: name,
      src: Object(_emoji_getCustomEmojiUrl__WEBPACK_IMPORTED_MODULE_1__["getCustomEmojiUrl"])(id, Boolean(animated))
    };
  }
});

/***/ }),

/***/ "./modules/markdown/rules/emoji.tsx":
/*!******************************************!*\
  !*** ./modules/markdown/rules/emoji.tsx ***!
  \******************************************/
/*! exports provided: emoji */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emoji", function() { return emoji; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var simple_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! simple-markdown */ "simple-markdown");
/* harmony import */ var simple_markdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(simple_markdown__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emoji_emoji__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../emoji/emoji */ "./modules/markdown/emoji/emoji.ts");
/* harmony import */ var _emoji_getEmojiUrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../emoji/getEmojiUrl */ "./modules/markdown/emoji/getEmojiUrl.ts");
/* harmony import */ var _styles_Emoji__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Emoji */ "./modules/markdown/styles/Emoji.ts");

var _jsxFileName = "F:\\DiscordHookSite\\modules\\markdown\\rules\\emoji.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const PLAINTEXT_EMOJIS = new Set(["™", "™️", "©", "©️", "®", "®️"]);
const EMOJI_NAME_RE = /^:([^\s:]+?(?:::skin-tone-\d)?):/;
const emoji = _objectSpread(_objectSpread({}, simple_markdown__WEBPACK_IMPORTED_MODULE_2__["defaultRules"].text), {}, {
  match: content => {
    const match = EMOJI_NAME_RE.exec(content);
    if (!match) return null;
    const [, name] = match;

    if (_emoji_emoji__WEBPACK_IMPORTED_MODULE_3__["NAME_TO_EMOJI"].get(name)) {
      return match;
    }

    return null;
  },
  parse: capture => {
    const [content, name] = capture;
    const emoji = _emoji_emoji__WEBPACK_IMPORTED_MODULE_3__["NAME_TO_EMOJI"].get(name);

    if (!emoji || PLAINTEXT_EMOJIS.has(emoji)) {
      return {
        type: "text",
        content
      };
    }

    const url = Object(_emoji_getEmojiUrl__WEBPACK_IMPORTED_MODULE_4__["getEmojiUrl"])(emoji);
    return {
      name,
      emoji,
      src: url
    };
  },
  react: (node, _, state) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_Emoji__WEBPACK_IMPORTED_MODULE_5__["Emoji"], {
    src: node.src,
    alt: node.emoji,
    title: node.name,
    draggable: false,
    big: node.jumboable
  }, state.key, false, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 5
  }, undefined)
});

/***/ }),

/***/ "./modules/markdown/rules/emote.ts":
/*!*****************************************!*\
  !*** ./modules/markdown/rules/emote.ts ***!
  \*****************************************/
/*! exports provided: emote */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emote", function() { return emote; });
/* harmony import */ var simple_markdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! simple-markdown */ "simple-markdown");
/* harmony import */ var simple_markdown__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(simple_markdown__WEBPACK_IMPORTED_MODULE_0__);

const emote = {
  order: simple_markdown__WEBPACK_IMPORTED_MODULE_0__["defaultRules"].text.order,
  match: Object(simple_markdown__WEBPACK_IMPORTED_MODULE_0__["inlineRegex"])(/^¯\\_\(ツ\)_\/¯/),
  parse: capture => {
    const [content] = capture;
    return {
      type: "text",
      content
    };
  },
  react: null
};

/***/ }),

/***/ "./modules/markdown/rules/emphasis.ts":
/*!********************************************!*\
  !*** ./modules/markdown/rules/emphasis.ts ***!
  \********************************************/
/*! exports provided: emphasis */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emphasis", function() { return emphasis; });
/* harmony import */ var simple_markdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! simple-markdown */ "simple-markdown");
/* harmony import */ var simple_markdown__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(simple_markdown__WEBPACK_IMPORTED_MODULE_0__);

const emphasis = simple_markdown__WEBPACK_IMPORTED_MODULE_0__["defaultRules"].em;

/***/ }),

/***/ "./modules/markdown/rules/escape.ts":
/*!******************************************!*\
  !*** ./modules/markdown/rules/escape.ts ***!
  \******************************************/
/*! exports provided: escape */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escape", function() { return escape; });
/* harmony import */ var simple_markdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! simple-markdown */ "simple-markdown");
/* harmony import */ var simple_markdown__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(simple_markdown__WEBPACK_IMPORTED_MODULE_0__);

const escape = simple_markdown__WEBPACK_IMPORTED_MODULE_0__["defaultRules"].escape;

/***/ }),

/***/ "./modules/markdown/rules/inlineCode.tsx":
/*!***********************************************!*\
  !*** ./modules/markdown/rules/inlineCode.tsx ***!
  \***********************************************/
/*! exports provided: inlineCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inlineCode", function() { return inlineCode; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var simple_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! simple-markdown */ "simple-markdown");
/* harmony import */ var simple_markdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(simple_markdown__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Code */ "./modules/markdown/styles/Code.ts");

var _jsxFileName = "F:\\DiscordHookSite\\modules\\markdown\\rules\\inlineCode.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const inlineCode = _objectSpread(_objectSpread({}, simple_markdown__WEBPACK_IMPORTED_MODULE_2__["defaultRules"].inlineCode), {}, {
  react: (node, output, state) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_Code__WEBPACK_IMPORTED_MODULE_3__["Code"], {
    children: node.content
  }, state.key, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 35
  }, undefined)
});

/***/ }),

/***/ "./modules/markdown/rules/lineBreak.ts":
/*!*********************************************!*\
  !*** ./modules/markdown/rules/lineBreak.ts ***!
  \*********************************************/
/*! exports provided: lineBreak */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineBreak", function() { return lineBreak; });
/* harmony import */ var simple_markdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! simple-markdown */ "simple-markdown");
/* harmony import */ var simple_markdown__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(simple_markdown__WEBPACK_IMPORTED_MODULE_0__);

const lineBreak = simple_markdown__WEBPACK_IMPORTED_MODULE_0__["defaultRules"].br;

/***/ }),

/***/ "./modules/markdown/rules/link.tsx":
/*!*****************************************!*\
  !*** ./modules/markdown/rules/link.tsx ***!
  \*****************************************/
/*! exports provided: link */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "link", function() { return link; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var simple_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! simple-markdown */ "simple-markdown");
/* harmony import */ var simple_markdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(simple_markdown__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_depunycodeUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/depunycodeUrl */ "./modules/markdown/helpers/depunycodeUrl.ts");

var _jsxFileName = "F:\\DiscordHookSite\\modules\\markdown\\rules\\link.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const link = _objectSpread(_objectSpread({}, simple_markdown__WEBPACK_IMPORTED_MODULE_2__["defaultRules"].link), {}, {
  parse: (capture, parse, state) => {
    const [, name, href, title] = capture;
    const url = Object(simple_markdown__WEBPACK_IMPORTED_MODULE_2__["unescapeUrl"])(href);
    if (!/^https?:\/\//i.test(url)) return parse(name, state);
    const decoded = Object(_helpers_depunycodeUrl__WEBPACK_IMPORTED_MODULE_3__["depunycodeUrl"])(url);

    if (!decoded) {
      return {
        type: "text",
        content: url
      };
    }

    const target = decoded;
    return {
      content: parse(name, state),
      target,
      title
    };
  },
  react: (node, output, state) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
    href: node.target,
    title: node.title,
    rel: "noopener noreferrer nofollow ugc",
    target: "_blank",
    children: output(node.content, state)
  }, state.key, false, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }, undefined)
});

/***/ }),

/***/ "./modules/markdown/rules/mention.tsx":
/*!********************************************!*\
  !*** ./modules/markdown/rules/mention.tsx ***!
  \********************************************/
/*! exports provided: mention */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mention", function() { return mention; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var simple_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! simple-markdown */ "simple-markdown");
/* harmony import */ var simple_markdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(simple_markdown__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Mention__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Mention */ "./modules/markdown/styles/Mention.ts");

var _jsxFileName = "F:\\DiscordHookSite\\modules\\markdown\\rules\\mention.tsx";



const MENTION_RE = /^<(@!?|@&|#)\d+>|^(@(?:everyone|here))/;
const MENTION_TYPES = new Map(Object.entries({
  "@": "@user",
  "@!": "@user",
  "@&": "@role",
  "#": "#channel"
}));
const mention = {
  order: simple_markdown__WEBPACK_IMPORTED_MODULE_2__["defaultRules"].text.order,
  match: Object(simple_markdown__WEBPACK_IMPORTED_MODULE_2__["inlineRegex"])(MENTION_RE),
  parse: capture => {
    const [, type, everyoneOrHere] = capture;

    if (everyoneOrHere) {
      return {
        content: everyoneOrHere
      };
    }

    return {
      content: MENTION_TYPES.get(type)
    };
  },
  react: (node, output, state) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_Mention__WEBPACK_IMPORTED_MODULE_3__["Mention"], {
    children: node.content
  }, state.key, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 5
  }, undefined)
};

/***/ }),

/***/ "./modules/markdown/rules/newline.ts":
/*!*******************************************!*\
  !*** ./modules/markdown/rules/newline.ts ***!
  \*******************************************/
/*! exports provided: newline */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newline", function() { return newline; });
/* harmony import */ var simple_markdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! simple-markdown */ "simple-markdown");
/* harmony import */ var simple_markdown__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(simple_markdown__WEBPACK_IMPORTED_MODULE_0__);

const newline = simple_markdown__WEBPACK_IMPORTED_MODULE_0__["defaultRules"].newline;

/***/ }),

/***/ "./modules/markdown/rules/paragraph.ts":
/*!*********************************************!*\
  !*** ./modules/markdown/rules/paragraph.ts ***!
  \*********************************************/
/*! exports provided: paragraph */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paragraph", function() { return paragraph; });
/* harmony import */ var simple_markdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! simple-markdown */ "simple-markdown");
/* harmony import */ var simple_markdown__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(simple_markdown__WEBPACK_IMPORTED_MODULE_0__);

const paragraph = simple_markdown__WEBPACK_IMPORTED_MODULE_0__["defaultRules"].paragraph;

/***/ }),

/***/ "./modules/markdown/rules/spoiler.tsx":
/*!********************************************!*\
  !*** ./modules/markdown/rules/spoiler.tsx ***!
  \********************************************/
/*! exports provided: spoiler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spoiler", function() { return spoiler; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var simple_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! simple-markdown */ "simple-markdown");
/* harmony import */ var simple_markdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(simple_markdown__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Spoiler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Spoiler */ "./modules/markdown/styles/Spoiler.ts");

var _jsxFileName = "F:\\DiscordHookSite\\modules\\markdown\\rules\\spoiler.tsx";



const spoiler = {
  order: simple_markdown__WEBPACK_IMPORTED_MODULE_2__["defaultRules"].text.order,
  match: Object(simple_markdown__WEBPACK_IMPORTED_MODULE_2__["inlineRegex"])(/^\|\|([\S\s]+?)\|\|/),
  parse: (capture, parse, state) => ({
    content: parse(capture[1], state)
  }),
  react: (node, output, state) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_Spoiler__WEBPACK_IMPORTED_MODULE_3__["Spoiler"], {
    children: output(node.content, state)
  }, state.key, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, undefined)
};

/***/ }),

/***/ "./modules/markdown/rules/strikethrough.ts":
/*!*************************************************!*\
  !*** ./modules/markdown/rules/strikethrough.ts ***!
  \*************************************************/
/*! exports provided: strikethrough */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strikethrough", function() { return strikethrough; });
/* harmony import */ var simple_markdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! simple-markdown */ "simple-markdown");
/* harmony import */ var simple_markdown__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(simple_markdown__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const strikethrough = _objectSpread(_objectSpread({}, simple_markdown__WEBPACK_IMPORTED_MODULE_0__["defaultRules"].del), {}, {
  match: Object(simple_markdown__WEBPACK_IMPORTED_MODULE_0__["inlineRegex"])(/^~~([\S\s]+?)~~(?!_)/)
});

/***/ }),

/***/ "./modules/markdown/rules/strong.ts":
/*!******************************************!*\
  !*** ./modules/markdown/rules/strong.ts ***!
  \******************************************/
/*! exports provided: strong */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strong", function() { return strong; });
/* harmony import */ var simple_markdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! simple-markdown */ "simple-markdown");
/* harmony import */ var simple_markdown__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(simple_markdown__WEBPACK_IMPORTED_MODULE_0__);

const strong = simple_markdown__WEBPACK_IMPORTED_MODULE_0__["defaultRules"].strong;

/***/ }),

/***/ "./modules/markdown/rules/text.ts":
/*!****************************************!*\
  !*** ./modules/markdown/rules/text.ts ***!
  \****************************************/
/*! exports provided: text */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "text", function() { return text; });
/* harmony import */ var simple_markdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! simple-markdown */ "simple-markdown");
/* harmony import */ var simple_markdown__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(simple_markdown__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emoji_convertEmojiToNames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../emoji/convertEmojiToNames */ "./modules/markdown/emoji/convertEmojiToNames.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const text = _objectSpread(_objectSpread({}, simple_markdown__WEBPACK_IMPORTED_MODULE_0__["defaultRules"].text), {}, {
  parse: (capture, parse, state) => {
    const [content] = capture;
    const {
      nested
    } = state;

    if (nested) {
      return {
        content
      };
    }

    return parse(Object(_emoji_convertEmojiToNames__WEBPACK_IMPORTED_MODULE_1__["convertEmojiToNames"])(content), _objectSpread(_objectSpread({}, state), {}, {
      nested: true
    }));
  }
});

/***/ }),

/***/ "./modules/markdown/rules/underline.ts":
/*!*********************************************!*\
  !*** ./modules/markdown/rules/underline.ts ***!
  \*********************************************/
/*! exports provided: underline */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "underline", function() { return underline; });
/* harmony import */ var simple_markdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! simple-markdown */ "simple-markdown");
/* harmony import */ var simple_markdown__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(simple_markdown__WEBPACK_IMPORTED_MODULE_0__);

const underline = simple_markdown__WEBPACK_IMPORTED_MODULE_0__["defaultRules"].u;

/***/ }),

/***/ "./modules/markdown/rules/url.tsx":
/*!****************************************!*\
  !*** ./modules/markdown/rules/url.tsx ***!
  \****************************************/
/*! exports provided: url */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "url", function() { return url; });
/* harmony import */ var simple_markdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! simple-markdown */ "simple-markdown");
/* harmony import */ var simple_markdown__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(simple_markdown__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_parseUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/parseUrl */ "./modules/markdown/helpers/parseUrl.ts");
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./link */ "./modules/markdown/rules/link.tsx");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const url = _objectSpread(_objectSpread({}, simple_markdown__WEBPACK_IMPORTED_MODULE_0__["defaultRules"].url), {}, {
  match: (content, state) => {
    if (!state.inline) return null;
    const match = /^((?:https?|steam):\/\/[^\s<]+[^\s"',.:;<\]])/.exec(content);
    if (!match) return null;
    let [href] = match;
    let searchPosition = 0;

    for (let pos = href.length - 1; pos >= 0 && href[pos] === ")"; pos -= 1) {
      const index = href.indexOf("(", searchPosition);

      if (index === -1) {
        href = href.slice(0, -1);
        break;
      }

      searchPosition = index + 1;
    }

    return [href, href];
  },
  parse: _helpers_parseUrl__WEBPACK_IMPORTED_MODULE_1__["parseUrl"],
  react: _link__WEBPACK_IMPORTED_MODULE_2__["link"].react
});

/***/ }),

/***/ "./modules/markdown/styles/BlockQuote.tsx":
/*!************************************************!*\
  !*** ./modules/markdown/styles/BlockQuote.tsx ***!
  \************************************************/
/*! exports provided: BlockQuote */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockQuote", function() { return BlockQuote; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _message_preview_RichEmbedContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../message/preview/RichEmbedContainer */ "./modules/message/preview/RichEmbedContainer.ts");

var _jsxFileName = "F:\\DiscordHookSite\\modules\\markdown\\styles\\BlockQuote.tsx";



const BlockQuoteContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "BlockQuote__BlockQuoteContainer",
  componentId: "k4g3bs-0"
})(["display:flex;"]);
const BlockQuoteDivider = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "BlockQuote__BlockQuoteDivider",
  componentId: "k4g3bs-1"
})(["min-width:4px;max-width:4px;border-radius:4px;background:", ";"], ({
  theme
}) => theme.interactive.muted);
const BlockQuoteContent = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.blockquote.withConfig({
  displayName: "BlockQuote__BlockQuoteContent",
  componentId: "k4g3bs-2"
})(["max-width:90%;padding:0 8px 0 12px;margin:0;text-indent:0;", " &{max-width:100%;}"], _message_preview_RichEmbedContainer__WEBPACK_IMPORTED_MODULE_3__["RichEmbedContainer"]);
function BlockQuote(props) {
  const {
    children
  } = props;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BlockQuoteContainer, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BlockQuoteDivider, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BlockQuoteContent, {
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./modules/markdown/styles/Code.ts":
/*!*****************************************!*\
  !*** ./modules/markdown/styles/Code.ts ***!
  \*****************************************/
/*! exports provided: Code */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Code", function() { return Code; });
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _message_preview_RichEmbedContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../message/preview/RichEmbedContainer */ "./modules/message/preview/RichEmbedContainer.ts");



const Code = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.code.withConfig({
  displayName: "Code",
  componentId: "qwj20h-0"
})(["padding:", ";margin:", " 0;border-radius:3px;background:", ";font-size:", ";line-height:", ";white-space:pre-wrap;", " &&{background:", ";}"], Object(polished__WEBPACK_IMPORTED_MODULE_0__["em"])(3.2), Object(polished__WEBPACK_IMPORTED_MODULE_0__["em"])(-3.2), ({
  theme
}) => theme.background.secondary, Object(polished__WEBPACK_IMPORTED_MODULE_0__["em"])(13.6), Object(polished__WEBPACK_IMPORTED_MODULE_0__["rem"])(18), _message_preview_RichEmbedContainer__WEBPACK_IMPORTED_MODULE_2__["RichEmbedContainer"], ({
  theme
}) => theme.background.tertiary);

/***/ }),

/***/ "./modules/markdown/styles/CodeBlockContainer.ts":
/*!*******************************************************!*\
  !*** ./modules/markdown/styles/CodeBlockContainer.ts ***!
  \*******************************************************/
/*! exports provided: CodeBlockContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeBlockContainer", function() { return CodeBlockContainer; });
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _message_preview_RichEmbedContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../message/preview/RichEmbedContainer */ "./modules/message/preview/RichEmbedContainer.ts");



const CodeBlockContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.pre.withConfig({
  displayName: "CodeBlockContainer",
  componentId: "sc-1grgown-0"
})(["max-width:90%;margin:6px 0 0;padding:", ";background:", ";border:1px solid ", ";border-radius:4px;color:", ";font-size:", ";line-height:", ";white-space:pre-wrap;", " &&{max-width:100%;background:", ";border:none;}& .hljs-comment,& .hljs-quote{color:", ";}& .hljs-addition,& .hljs-keyword,& .hljs-selector-tag{color:#859900;}& .hljs-doctag,& .hljs-literal,& .hljs-meta .hljs-meta-string,& .hljs-number,& .hljs-regexp,& .hljs-string{color:#2aa198;}& .hljs-name,& .hljs-section,& .hljs-selector-class,& .hljs-selector-id,& .hljs-title{color:#268bd2;}& .hljs-attr,& .hljs-attribute,& .hljs-class .hljs-title,& .hljs-template-variable,& .hljs-type,& .hljs-variable{color:#b58900;}& .hljs-bullet,& .hljs-link,& .hljs-meta,& .hljs-meta .hljs-keyword,& .hljs-selector-attr,& .hljs-selector-pseudo,& .hljs-subst,& .hljs-symbol{color:#cb4b16;}& .hljs-built_in,& .hljs-deletion{color:#dc322f;}& .hljs-formula{background:#073642;}& .hljs-emphasis{font-style:italic;}& .hljs-strong{font-weight:700;}"], Object(polished__WEBPACK_IMPORTED_MODULE_0__["em"])(8), ({
  theme
}) => theme.background.secondary, ({
  theme
}) => theme.background.tertiary, ({
  theme
}) => theme.header.secondary, Object(polished__WEBPACK_IMPORTED_MODULE_0__["rem"])(14), Object(polished__WEBPACK_IMPORTED_MODULE_0__["rem"])(18), _message_preview_RichEmbedContainer__WEBPACK_IMPORTED_MODULE_2__["RichEmbedContainer"], ({
  theme
}) => theme.background.tertiary, ({
  theme
}) => theme.interactive.muted);

/***/ }),

/***/ "./modules/markdown/styles/Emoji.ts":
/*!******************************************!*\
  !*** ./modules/markdown/styles/Emoji.ts ***!
  \******************************************/
/*! exports provided: Emoji */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Emoji", function() { return Emoji; });
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _message_preview_RichEmbedContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../message/preview/RichEmbedContainer */ "./modules/message/preview/RichEmbedContainer.ts");



const Emoji = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img.attrs({
  draggable: false
}).withConfig({
  displayName: "Emoji",
  componentId: "njfyk0-0"
})(["", ";object-fit:contain;vertical-align:bottom;", ";", " &{", ";}"], Object(polished__WEBPACK_IMPORTED_MODULE_0__["size"])(Object(polished__WEBPACK_IMPORTED_MODULE_0__["em"])(22)), ({
  theme,
  big
}) => theme.appearance.display === "cozy" && big && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["", ";min-height:", ";"], Object(polished__WEBPACK_IMPORTED_MODULE_0__["size"])(Object(polished__WEBPACK_IMPORTED_MODULE_0__["rem"])(48)), Object(polished__WEBPACK_IMPORTED_MODULE_0__["rem"])(48)), _message_preview_RichEmbedContainer__WEBPACK_IMPORTED_MODULE_2__["RichEmbedContainer"], Object(polished__WEBPACK_IMPORTED_MODULE_0__["size"])(18));

/***/ }),

/***/ "./modules/markdown/styles/MarkdownContainer.ts":
/*!******************************************************!*\
  !*** ./modules/markdown/styles/MarkdownContainer.ts ***!
  \******************************************************/
/*! exports provided: MarkdownContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkdownContainer", function() { return MarkdownContainer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const MarkdownContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "MarkdownContainer",
  componentId: "sc-27l7o2-0"
})(["white-space:pre-wrap;word-wrap:break-word;line-height:1.375;", ";"], ({
  theme
}) => theme.appearance.color === "light" && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["@media (max-resolution:1dppx){font-weight:500;}"]));

/***/ }),

/***/ "./modules/markdown/styles/Mention.ts":
/*!********************************************!*\
  !*** ./modules/markdown/styles/Mention.ts ***!
  \********************************************/
/*! exports provided: Mention */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mention", function() { return Mention; });
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_theming_darkTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/theming/darkTheme */ "./common/theming/darkTheme.ts");



const Mention = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span.withConfig({
  displayName: "Mention",
  componentId: "sc-1cv8oy7-0"
})(["border-radius:3px;padding:0 2px;cursor:pointer;background:", ";color:", ";font-weight:500;transition:50ms ease-out;transition-property:background-color,color;&:hover{background:", ";color:", ";}"], ({
  theme
}) => theme.appearance.color === "dark" ? Object(polished__WEBPACK_IMPORTED_MODULE_0__["transparentize"])(0.7, theme.discord.primary) : Object(polished__WEBPACK_IMPORTED_MODULE_0__["transparentize"])(0.85, theme.discord.primary), ({
  theme
}) => theme.appearance.color === "dark" ? Object(polished__WEBPACK_IMPORTED_MODULE_0__["rgb"])(222, 224, 252) : theme.discord.primary, _common_theming_darkTheme__WEBPACK_IMPORTED_MODULE_2__["DARK_THEME"].discord.primary, _common_theming_darkTheme__WEBPACK_IMPORTED_MODULE_2__["DARK_THEME"].header.primary);

/***/ }),

/***/ "./modules/markdown/styles/Spoiler.ts":
/*!********************************************!*\
  !*** ./modules/markdown/styles/Spoiler.ts ***!
  \********************************************/
/*! exports provided: Spoiler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spoiler", function() { return Spoiler; });
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


const Spoiler = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span.withConfig({
  displayName: "Spoiler",
  componentId: "sc-1098bq4-0"
})(["background:", ";border-radius:3px;"], ({
  theme
}) => Object(polished__WEBPACK_IMPORTED_MODULE_0__["transparentize"])(0.9, theme.appearance.color === "dark" ? "white" : "black"));

/***/ }),

/***/ "./modules/message/helpers/getFieldGridColumn.ts":
/*!*******************************************************!*\
  !*** ./modules/message/helpers/getFieldGridColumn.ts ***!
  \*******************************************************/
/*! exports provided: getFieldGridColumn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFieldGridColumn", function() { return getFieldGridColumn; });
const MAX_FIELDS_PER_ROW = 3;
const FIELD_GRID_SIZE = 12;
const getFieldGridColumn = field => {
  const embed = field.embed;
  const fieldIndex = embed.fields.indexOf(field);
  if (!field.inline) return `1 / ${FIELD_GRID_SIZE + 1}`;
  let startingField = fieldIndex;

  while (startingField > 0 && embed.fields[startingField - 1].inline) {
    startingField -= 1;
  }

  let totalInlineFields = 0;

  while (embed.fields.length > startingField + totalInlineFields && embed.fields[startingField + totalInlineFields].inline) {
    totalInlineFields += 1;
  }

  const indexInSequence = fieldIndex - startingField;
  const currentRow = indexInSequence / MAX_FIELDS_PER_ROW;
  const indexOnRow = indexInSequence % MAX_FIELDS_PER_ROW;
  const totalOnLastRow = totalInlineFields % MAX_FIELDS_PER_ROW || MAX_FIELDS_PER_ROW;
  const fullRows = (totalInlineFields - totalOnLastRow) / MAX_FIELDS_PER_ROW;
  const totalOnRow = currentRow >= fullRows ? totalOnLastRow : MAX_FIELDS_PER_ROW;
  const columnSpan = FIELD_GRID_SIZE / totalOnRow;
  const start = indexOnRow * columnSpan + 1;
  const end = start + columnSpan;
  return `${start} / ${end}`;
};

/***/ }),

/***/ "./modules/message/helpers/messageOf.ts":
/*!**********************************************!*\
  !*** ./modules/message/helpers/messageOf.ts ***!
  \**********************************************/
/*! exports provided: messageOf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "messageOf", function() { return messageOf; });
/* harmony import */ var _common_input_color_ColorModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/input/color/ColorModel */ "./common/input/color/ColorModel.ts");

const messageOf = data => {
  var _data$content, _data$username, _data$avatar_url;

  const snapshot = {};
  snapshot.content = (_data$content = data.content) !== null && _data$content !== void 0 ? _data$content : "";
  snapshot.username = (_data$username = data.username) !== null && _data$username !== void 0 ? _data$username : "";
  snapshot.avatar = (_data$avatar_url = data.avatar_url) !== null && _data$avatar_url !== void 0 ? _data$avatar_url : "";
  const embeds = [];
  snapshot.embeds = embeds;

  for (const embedData of (_data$embeds = data.embeds) !== null && _data$embeds !== void 0 ? _data$embeds : []) {
    var _data$embeds, _embed, _embedData$title, _embedData$descriptio, _embedData$url, _embedData$author$nam, _embedData$author, _embedData$author$url, _embedData$author2, _embedData$author$ico, _embedData$author3, _embedData$footer$tex, _embedData$footer, _embedData$footer$ico, _embedData$footer2, _embedData$timestamp, _embedData$image$url, _embedData$image2, _embedData$thumbnail$, _embedData$thumbnail, _embedData$color;

    let embed = embeds.length > 0 ? embeds[embeds.length - 1] : undefined;

    if ((_embed = embed) !== null && _embed !== void 0 && _embed.url && embed.url === embedData.url) {
      var _embedData$image;

      const gallery = embed.gallery;

      if ((_embedData$image = embedData.image) !== null && _embedData$image !== void 0 && _embedData$image.url && gallery.length < 4) {
        gallery.push(embedData.image.url);
      }

      continue;
    }

    embed = {};
    embeds.push(embed);
    embed.title = (_embedData$title = embedData.title) !== null && _embedData$title !== void 0 ? _embedData$title : "";
    embed.description = (_embedData$descriptio = embedData.description) !== null && _embedData$descriptio !== void 0 ? _embedData$descriptio : "";
    embed.url = (_embedData$url = embedData.url) !== null && _embedData$url !== void 0 ? _embedData$url : "";
    embed.author = (_embedData$author$nam = (_embedData$author = embedData.author) === null || _embedData$author === void 0 ? void 0 : _embedData$author.name) !== null && _embedData$author$nam !== void 0 ? _embedData$author$nam : "";
    embed.authorUrl = (_embedData$author$url = (_embedData$author2 = embedData.author) === null || _embedData$author2 === void 0 ? void 0 : _embedData$author2.url) !== null && _embedData$author$url !== void 0 ? _embedData$author$url : "";
    embed.authorIcon = (_embedData$author$ico = (_embedData$author3 = embedData.author) === null || _embedData$author3 === void 0 ? void 0 : _embedData$author3.icon_url) !== null && _embedData$author$ico !== void 0 ? _embedData$author$ico : "";
    embed.footer = (_embedData$footer$tex = (_embedData$footer = embedData.footer) === null || _embedData$footer === void 0 ? void 0 : _embedData$footer.text) !== null && _embedData$footer$tex !== void 0 ? _embedData$footer$tex : "";
    embed.footerIcon = (_embedData$footer$ico = (_embedData$footer2 = embedData.footer) === null || _embedData$footer2 === void 0 ? void 0 : _embedData$footer2.icon_url) !== null && _embedData$footer$ico !== void 0 ? _embedData$footer$ico : "";
    embed.timestamp = new Date((_embedData$timestamp = embedData.timestamp) !== null && _embedData$timestamp !== void 0 ? _embedData$timestamp : Number.NaN);
    embed.gallery = [(_embedData$image$url = (_embedData$image2 = embedData.image) === null || _embedData$image2 === void 0 ? void 0 : _embedData$image2.url) !== null && _embedData$image$url !== void 0 ? _embedData$image$url : ""].filter(Boolean);
    embed.thumbnail = (_embedData$thumbnail$ = (_embedData$thumbnail = embedData.thumbnail) === null || _embedData$thumbnail === void 0 ? void 0 : _embedData$thumbnail.url) !== null && _embedData$thumbnail$ !== void 0 ? _embedData$thumbnail$ : "";
    const color = _common_input_color_ColorModel__WEBPACK_IMPORTED_MODULE_0__["ColorModel"].create();
    color.setRaw((_embedData$color = embedData.color) !== null && _embedData$color !== void 0 ? _embedData$color : null);
    embed.color = color;
    const fields = [];
    embed.fields = fields;

    for (const fieldData of (_embedData$fields = embedData.fields) !== null && _embedData$fields !== void 0 ? _embedData$fields : []) {
      var _embedData$fields, _fieldData$name, _fieldData$value, _fieldData$inline;

      const field = {};
      fields.push(field);
      field.name = (_fieldData$name = fieldData.name) !== null && _fieldData$name !== void 0 ? _fieldData$name : "";
      field.value = (_fieldData$value = fieldData.value) !== null && _fieldData$value !== void 0 ? _fieldData$value : "";
      field.inline = (_fieldData$inline = fieldData.inline) !== null && _fieldData$inline !== void 0 ? _fieldData$inline : false;
    }
  }

  return snapshot;
};

/***/ }),

/***/ "./modules/message/helpers/stringifyMessage.ts":
/*!*****************************************************!*\
  !*** ./modules/message/helpers/stringifyMessage.ts ***!
  \*****************************************************/
/*! exports provided: stringifyMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringifyMessage", function() { return stringifyMessage; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const stringifyMessage = (message, pretty = true) => {
  return JSON.stringify(_objectSpread(_objectSpread({}, message), {}, {
    files: undefined
  }), undefined, pretty ? 2 : undefined);
};

/***/ }),

/***/ "./modules/message/preview/EmbedAuthor.tsx":
/*!*************************************************!*\
  !*** ./modules/message/preview/EmbedAuthor.tsx ***!
  \*************************************************/
/*! exports provided: EmbedAuthor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmbedAuthor", function() { return EmbedAuthor; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "F:\\DiscordHookSite\\modules\\message\\preview\\EmbedAuthor.tsx";




const Container = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "EmbedAuthor__Container",
  componentId: "k1ck82-0"
})(["min-width:0;display:flex;align-items:center;grid-column:1 / 2;margin:8px 0 0;"]);
const AuthorImage = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.img.withConfig({
  displayName: "EmbedAuthor__AuthorImage",
  componentId: "k1ck82-1"
})(["", ";margin:0 8px 0 0;object-fit:contain;border-radius:50%;"], Object(polished__WEBPACK_IMPORTED_MODULE_2__["size"])(24));
const AuthorNameNormal = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.span.withConfig({
  displayName: "EmbedAuthor__AuthorNameNormal",
  componentId: "k1ck82-2"
})(["font-size:", ";font-weight:500;color:", ";white-space:pre-wrap;display:inline-block;", ";"], Object(polished__WEBPACK_IMPORTED_MODULE_2__["rem"])(14), ({
  theme
}) => theme.header.primary, ({
  theme
}) => theme.appearance.color === "light" && Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["css"])(["@media (max-resolution:1dppx){font-weight:500;}"]));
const AuthorNameLink = AuthorNameNormal.withComponent("a");
function EmbedAuthor(props) {
  const {
    embed
  } = props;
  return Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__["useObserver"])(() => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Container, {
    children: [embed.authorIcon && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(AuthorImage, {
      src: embed.authorIcon,
      alt: "Author image"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }, this), embed.author && (embed.authorUrl ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(AuthorNameLink, {
      href: embed.authorUrl,
      rel: "noopener noreferrer nofollow ugc",
      target: "_blank",
      children: embed.author
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(AuthorNameNormal, {
      children: embed.author
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 11
    }, this))]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 5
  }, this));
}

/***/ }),

/***/ "./modules/message/preview/EmbedField.tsx":
/*!************************************************!*\
  !*** ./modules/message/preview/EmbedField.tsx ***!
  \************************************************/
/*! exports provided: EmbedField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmbedField", function() { return EmbedField; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _markdown_Markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../markdown/Markdown */ "./modules/markdown/Markdown.tsx");
/* harmony import */ var _markdown_styles_MarkdownContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../markdown/styles/MarkdownContainer */ "./modules/markdown/styles/MarkdownContainer.ts");
/* harmony import */ var _helpers_getFieldGridColumn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/getFieldGridColumn */ "./modules/message/helpers/getFieldGridColumn.ts");

var _jsxFileName = "F:\\DiscordHookSite\\modules\\message\\preview\\EmbedField.tsx";







const Container = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "EmbedField__Container",
  componentId: "rgqgux-0"
})(["min-width:0;font-size:", ";line-height:", ";"], Object(polished__WEBPACK_IMPORTED_MODULE_2__["rem"])(14), Object(polished__WEBPACK_IMPORTED_MODULE_2__["rem"])(18));
const FieldName = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "EmbedField__FieldName",
  componentId: "rgqgux-1"
})(["min-width:0;margin:0 0 1px;font-size:", ";font-weight:600;color:", ";"], Object(polished__WEBPACK_IMPORTED_MODULE_2__["rem"])(14), ({
  theme
}) => theme.header.primary);
const FieldValue = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "EmbedField__FieldValue",
  componentId: "rgqgux-2"
})(["min-width:0;& > ", "{font-size:", ";line-height:", ";color:", ";white-space:pre-line;}"], _markdown_styles_MarkdownContainer__WEBPACK_IMPORTED_MODULE_6__["MarkdownContainer"], Object(polished__WEBPACK_IMPORTED_MODULE_2__["rem"])(14), Object(polished__WEBPACK_IMPORTED_MODULE_2__["rem"])(18), ({
  theme
}) => theme.text.normal);
function EmbedField(props) {
  const {
    field
  } = props;
  return Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__["useObserver"])(() => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Container, {
    style: {
      gridColumn: Object(_helpers_getFieldGridColumn__WEBPACK_IMPORTED_MODULE_7__["getFieldGridColumn"])(field)
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FieldName, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_markdown_Markdown__WEBPACK_IMPORTED_MODULE_5__["Markdown"], {
        content: field.name,
        type: "embed-header"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FieldValue, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_markdown_Markdown__WEBPACK_IMPORTED_MODULE_5__["Markdown"], {
        content: field.value,
        type: "embed-content"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 5
  }, this));
}

/***/ }),

/***/ "./modules/message/preview/EmbedFooter.tsx":
/*!*************************************************!*\
  !*** ./modules/message/preview/EmbedFooter.tsx ***!
  \*************************************************/
/*! exports provided: EmbedFooter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmbedFooter", function() { return EmbedFooter; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "date-fns");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "F:\\DiscordHookSite\\modules\\message\\preview\\EmbedFooter.tsx";






const EmbedTimestamp = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(async () => __webpack_require__.e(/*! import() */ 195).then(__webpack_require__.bind(null, /*! ./EmbedTimestamp */ "./modules/message/preview/EmbedTimestamp.tsx")).then(module => module.EmbedTimestamp), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ./EmbedTimestamp */ "./modules/message/preview/EmbedTimestamp.tsx")],
    modules: ["./EmbedTimestamp"]
  }
});
const Container = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.div.withConfig({
  displayName: "EmbedFooter__Container",
  componentId: "sc-1wl8gx1-0"
})(["min-width:0;margin:8px 0 0;display:flex;align-items:center;grid-row:auto / auto;grid-column:1 / 2;", ";"], ({
  hasThumbnail
}) => hasThumbnail && Object(styled_components__WEBPACK_IMPORTED_MODULE_6__["css"])(["grid-column:1 / 3;"]));
const FooterImage = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.img.withConfig({
  displayName: "EmbedFooter__FooterImage",
  componentId: "sc-1wl8gx1-1"
})(["", ";margin:0 8px 0 0;object-fit:contain;border-radius:50%;"], Object(polished__WEBPACK_IMPORTED_MODULE_4__["size"])(20));
const FooterText = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.span.withConfig({
  displayName: "EmbedFooter__FooterText",
  componentId: "sc-1wl8gx1-2"
})(["font-size:", ";font-weight:500;color:", ";line-height:", ";white-space:pre-wrap;white-space:break-spaces;", ";"], Object(polished__WEBPACK_IMPORTED_MODULE_4__["rem"])(12), ({
  theme
}) => theme.text.normal, Object(polished__WEBPACK_IMPORTED_MODULE_4__["rem"])(16), ({
  theme
}) => theme.appearance.color === "light" && Object(styled_components__WEBPACK_IMPORTED_MODULE_6__["css"])(["@media (max-resolution:1dppx){font-weight:500;}"]));
const FooterSeparator = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.span.withConfig({
  displayName: "EmbedFooter__FooterSeparator",
  componentId: "sc-1wl8gx1-3"
})(["display:inline-block;margin:0 4px;"]);
function EmbedFooter(props) {
  const {
    embed
  } = props;
  return Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__["useObserver"])(() => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Container, {
    hasThumbnail: Boolean(embed.thumbnail),
    children: [embed.footerIcon && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FooterImage, {
      src: embed.footerIcon,
      alt: "Footer image"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FooterText, {
      children: [embed.footer, embed.footer && Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["isValid"])(embed.timestamp) && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FooterSeparator, {
        children: "\u2022"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 11
      }, this), Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["isValid"])(embed.timestamp) && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(EmbedTimestamp, {
        timestamp: embed.timestamp
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 73,
    columnNumber: 5
  }, this));
}

/***/ }),

/***/ "./modules/message/preview/EmbedGallery.tsx":
/*!**************************************************!*\
  !*** ./modules/message/preview/EmbedGallery.tsx ***!
  \**************************************************/
/*! exports provided: EmbedGallery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmbedGallery", function() { return EmbedGallery; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "F:\\DiscordHookSite\\modules\\message\\preview\\EmbedGallery.tsx";




const EmbedGalleryWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "EmbedGallery__EmbedGalleryWrapper",
  componentId: "sc-1klx4d1-0"
})(["grid-column:1 / 2;display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr;gap:4px;height:300px;margin-top:16px;border-radius:4px;overflow:hidden;", ";"], ({
  hasThumbnail
}) => hasThumbnail && Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["css"])(["grid-column:1 / 3;"]));
const EmbedGalleryCell = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "EmbedGallery__EmbedGalleryCell",
  componentId: "sc-1klx4d1-1"
})(["display:flex;align-items:center;justify-content:center;min-width:100%;min-height:100%;", ";"], ({
  length,
  index
}) => (length === 1 || length === 2 || length === 3 && index === 0) && Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["css"])(["grid-row:span 2;"]));
const EmbedGalleryImage = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.img.withConfig({
  displayName: "EmbedGallery__EmbedGalleryImage",
  componentId: "sc-1klx4d1-2"
})(["", ";object-fit:cover;"], Object(polished__WEBPACK_IMPORTED_MODULE_2__["size"])("100%"));
function EmbedGallery(props) {
  const {
    embed
  } = props;
  return Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__["useObserver"])(() => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(EmbedGalleryWrapper, {
    children: embed.gallery.map((url, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(EmbedGalleryCell // eslint-disable-next-line react/no-array-index-key
    , {
      index: index,
      length: embed.gallery.length,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(EmbedGalleryImage, {
        src: url,
        alt: "Image"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 11
      }, this)
    }, `${index}-${url}`, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }, this))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 5
  }, this));
}

/***/ }),

/***/ "./modules/message/preview/MessageHeader.tsx":
/*!***************************************************!*\
  !*** ./modules/message/preview/MessageHeader.tsx ***!
  \***************************************************/
/*! exports provided: MessageHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageHeader", function() { return MessageHeader; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_layout_breakpoints__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/layout/breakpoints */ "./common/layout/breakpoints.ts");
/* harmony import */ var _common_theming_darkTheme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/theming/darkTheme */ "./common/theming/darkTheme.ts");
/* harmony import */ var _editor_EditorManagerContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../editor/EditorManagerContext */ "./modules/editor/EditorManagerContext.tsx");

var _jsxFileName = "F:\\DiscordHookSite\\modules\\message\\preview\\MessageHeader.tsx";








const Clock = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(async () => __webpack_require__.e(/*! import() */ 194).then(__webpack_require__.bind(null, /*! ./Clock */ "./modules/message/preview/Clock.tsx")).then(module => module.Clock), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ./Clock */ "./modules/message/preview/Clock.tsx")],
    modules: ["./Clock"]
  }
});
const Container = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "MessageHeader__Container",
  componentId: "sgp62q-0"
})(["", ";", ";"], ({
  theme
}) => theme.appearance.display === "cozy" && Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["css"])(["position:relative;margin-left:", ";padding-left:", ";", ";"], Object(polished__WEBPACK_IMPORTED_MODULE_3__["rem"])(-72), Object(polished__WEBPACK_IMPORTED_MODULE_3__["rem"])(72), ({
  theme
}) => theme.appearance.fontSize > 16 && Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["css"])(["margin-left:-72px;padding-left:72px;"])), ({
  theme
}) => theme.appearance.display === "compact" && Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["css"])(["display:inline;display:contents;"]));
const Avatar = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.img.withConfig({
  displayName: "MessageHeader__Avatar",
  componentId: "sgp62q-1"
})(["", ";position:absolute;left:0;top:", ";margin:0 ", ";border-radius:50%;object-fit:cover;cursor:pointer;&:hover{box-shadow:", ";}&:active{transform:translateY(1px);}", ";", "{display:none;}"], Object(polished__WEBPACK_IMPORTED_MODULE_3__["size"])(Object(polished__WEBPACK_IMPORTED_MODULE_3__["rem"])(40)), Object(polished__WEBPACK_IMPORTED_MODULE_3__["rem"])(2), Object(polished__WEBPACK_IMPORTED_MODULE_3__["rem"])(16), ({
  theme
}) => theme.elavation.medium, ({
  theme
}) => theme.appearance.fontSize > 16 && Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["css"])(["", ";margin:0 16px;"], Object(polished__WEBPACK_IMPORTED_MODULE_3__["size"])(40)), _common_layout_breakpoints__WEBPACK_IMPORTED_MODULE_6__["SCREEN_SMALL"]);
const Username = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.h1.withConfig({
  displayName: "MessageHeader__Username",
  componentId: "sgp62q-2"
})(["display:inline;vertical-align:baseline;margin:0 ", " 0 0;color:", ";font-size:", ";font-weight:500;line-height:", ";word-wrap:break-word;cursor:pointer;", ";", ";"], Object(polished__WEBPACK_IMPORTED_MODULE_3__["rem"])(4), ({
  theme
}) => theme.header.primary, Object(polished__WEBPACK_IMPORTED_MODULE_3__["rem"])(16), Object(polished__WEBPACK_IMPORTED_MODULE_3__["rem"])(22), ({
  theme
}) => theme.appearance.display === "compact" && Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["css"])(["margin-right:", ";"], Object(polished__WEBPACK_IMPORTED_MODULE_3__["rem"])(8)), ({
  theme
}) => theme.appearance.color === "light" && Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["css"])(["font-weight:600;"]));
const BotTag = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.span.withConfig({
  displayName: "MessageHeader__BotTag",
  componentId: "sgp62q-3"
})(["position:relative;top:", ";min-height:", ";max-height:", ";margin:", " ", " 0 0;padding:", " ", ";border-radius:3px;background:", ";color:", ";font-size:", ";font-weight:500;line-height:1.3;vertical-align:baseline;text-transform:uppercase;"], Object(polished__WEBPACK_IMPORTED_MODULE_3__["rem"])(-1.6), Object(polished__WEBPACK_IMPORTED_MODULE_3__["em"])(20.4), Object(polished__WEBPACK_IMPORTED_MODULE_3__["em"])(20.4), Object(polished__WEBPACK_IMPORTED_MODULE_3__["em"])(1.2), Object(polished__WEBPACK_IMPORTED_MODULE_3__["rem"])(4), Object(polished__WEBPACK_IMPORTED_MODULE_3__["rem"])(1.15), Object(polished__WEBPACK_IMPORTED_MODULE_3__["rem"])(4.4), ({
  theme
}) => theme.discord.primary, _common_theming_darkTheme__WEBPACK_IMPORTED_MODULE_7__["DARK_THEME"].header.primary, Object(polished__WEBPACK_IMPORTED_MODULE_3__["em"])(10));
function MessageHeader(props) {
  const {
    timestamp,
    badge
  } = props;
  let {
    username,
    avatarUrl
  } = props;
  const theme = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["useTheme"])();
  const editorManager = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(_editor_EditorManagerContext__WEBPACK_IMPORTED_MODULE_8__["EditorManagerContext"]);
  return Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__["useObserver"])(() => {
    if (editorManager && editorManager.targets.length > 0) {
      if (!username) username = editorManager.targets[0].displayName;
      if (!avatarUrl) avatarUrl = editorManager.targets[0].displayAvatarUrl;
    }

    let info = [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Username, {
      children: username
    }, "username", false, {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 7
    }, this), badge !== null && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BotTag, {
      children: badge !== null && badge !== void 0 ? badge : "Bot"
    }, "badge", false, {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 25
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Clock, {
      timestamp: timestamp
    }, "clock", false, {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 7
    }, this)];
    if (theme.appearance.display === "compact") info = info.reverse();
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Container, {
      children: [theme.appearance.display === "cozy" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Avatar, {
        src: avatarUrl,
        alt: "User avatar"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 11
      }, this), info]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 7
    }, this);
  });
}

/***/ }),

/***/ "./modules/message/preview/MessagePreview.tsx":
/*!****************************************************!*\
  !*** ./modules/message/preview/MessagePreview.tsx ***!
  \****************************************************/
/*! exports provided: MessagePreview */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagePreview", function() { return MessagePreview; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_layout_breakpoints__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/layout/breakpoints */ "./common/layout/breakpoints.ts");
/* harmony import */ var _markdown_helpers_getTextDirection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../markdown/helpers/getTextDirection */ "./modules/markdown/helpers/getTextDirection.ts");
/* harmony import */ var _markdown_Markdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../markdown/Markdown */ "./modules/markdown/Markdown.tsx");
/* harmony import */ var _markdown_styles_MarkdownContainer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../markdown/styles/MarkdownContainer */ "./modules/markdown/styles/MarkdownContainer.ts");
/* harmony import */ var _MessageHeader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./MessageHeader */ "./modules/message/preview/MessageHeader.tsx");
/* harmony import */ var _RichEmbed__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./RichEmbed */ "./modules/message/preview/RichEmbed.tsx");

var _jsxFileName = "F:\\DiscordHookSite\\modules\\message\\preview\\MessagePreview.tsx";











const Attachment = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(async () => __webpack_require__.e(/*! import() */ 191).then(__webpack_require__.bind(null, /*! ./attachment/Attachment */ "./modules/message/preview/attachment/Attachment.tsx")).then(module => module.Attachment), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ./attachment/Attachment */ "./modules/message/preview/attachment/Attachment.tsx")],
    modules: ["./attachment/Attachment"]
  }
});
const Container = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "MessagePreview__Container",
  componentId: "kn3fae-0"
})(["margin-top:", ";", ";", ";"], Object(polished__WEBPACK_IMPORTED_MODULE_3__["rem"])(16), ({
  theme
}) => theme.appearance.display === "cozy" && Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["css"])(["padding:", " 16px ", " ", ";min-height:", ";", ";", "{padding-left:16px;}"], Object(polished__WEBPACK_IMPORTED_MODULE_3__["rem"])(2), Object(polished__WEBPACK_IMPORTED_MODULE_3__["rem"])(2), Object(polished__WEBPACK_IMPORTED_MODULE_3__["rem"])(72), Object(polished__WEBPACK_IMPORTED_MODULE_3__["rem"])(44), ({
  theme
}) => theme.appearance.fontSize > 16 && Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["css"])(["padding-left:72px;"]), _common_layout_breakpoints__WEBPACK_IMPORTED_MODULE_6__["SCREEN_SMALL"]), ({
  theme
}) => theme.appearance.display === "compact" && Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["css"])(["padding:", " ", " ", " 80px;min-height:", ";text-indent:calc(", " - 80px);& > ", "{text-indent:0;display:inline;}"], Object(polished__WEBPACK_IMPORTED_MODULE_3__["rem"])(2), Object(polished__WEBPACK_IMPORTED_MODULE_3__["rem"])(16), Object(polished__WEBPACK_IMPORTED_MODULE_3__["rem"])(2), Object(polished__WEBPACK_IMPORTED_MODULE_3__["rem"])(22), Object(polished__WEBPACK_IMPORTED_MODULE_3__["rem"])(16), _markdown_styles_MarkdownContainer__WEBPACK_IMPORTED_MODULE_9__["MarkdownContainer"]));
const Content = styled_components__WEBPACK_IMPORTED_MODULE_5___default()(_markdown_Markdown__WEBPACK_IMPORTED_MODULE_8__["Markdown"]).withConfig({
  displayName: "MessagePreview__Content",
  componentId: "kn3fae-1"
})(["", ""], ({
  theme,
  direction
}) => theme.appearance.display === "cozy" && direction === "rtl" && Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["css"])(["& > ", "{text-indent:0;text-align:left;unicode-bidi:plaintext;}"], _markdown_styles_MarkdownContainer__WEBPACK_IMPORTED_MODULE_9__["MarkdownContainer"]));
const ExtrasContainer = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "MessagePreview__ExtrasContainer",
  componentId: "kn3fae-2"
})(["display:grid;grid-auto-flow:row;row-gap:", ";padding:", " 0;text-indent:0;& > *{justify-self:start;align-self:start;}"], Object(polished__WEBPACK_IMPORTED_MODULE_3__["rem"])(4), Object(polished__WEBPACK_IMPORTED_MODULE_3__["rem"])(2));
function MessagePreview(props) {
  const {
    message
  } = props;
  return Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__["useObserver"])(() => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Container, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_MessageHeader__WEBPACK_IMPORTED_MODULE_10__["MessageHeader"], {
      username: message.username,
      avatarUrl: message.avatar,
      timestamp: message.timestamp,
      badge: message.badge
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }, this), message.hasContent && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__["Observer"], {
      children: () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Content, {
        direction: Object(_markdown_helpers_getTextDirection__WEBPACK_IMPORTED_MODULE_7__["getTextDirection"])(message.content),
        content: message.content,
        type: "message-content"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 9
    }, this), message.hasExtras && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ExtrasContainer, {
      children: [...message.files.map(file => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Attachment, {
        file: file
      }, `Attachment ${JSON.stringify(file.name)}`, false, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 15
      }, this)), ...message.embeds.map(embed => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_RichEmbed__WEBPACK_IMPORTED_MODULE_11__["RichEmbed"], {
        embed: embed
      }, `Embed ${embed.id}`, false, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 15
      }, this))]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 92,
    columnNumber: 5
  }, this));
}

/***/ }),

/***/ "./modules/message/preview/Preview.tsx":
/*!*********************************************!*\
  !*** ./modules/message/preview/Preview.tsx ***!
  \*********************************************/
/*! exports provided: Preview */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Preview", function() { return Preview; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_state_useRequiredContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/state/useRequiredContext */ "./common/state/useRequiredContext.ts");
/* harmony import */ var _editor_EditorManagerContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../editor/EditorManagerContext */ "./modules/editor/EditorManagerContext.tsx");
/* harmony import */ var _MessagePreview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MessagePreview */ "./modules/message/preview/MessagePreview.tsx");


var _jsxFileName = "F:\\DiscordHookSite\\modules\\message\\preview\\Preview.tsx";





function Preview() {
  const editorManager = Object(_common_state_useRequiredContext__WEBPACK_IMPORTED_MODULE_3__["useRequiredContext"])(_editor_EditorManagerContext__WEBPACK_IMPORTED_MODULE_4__["EditorManagerContext"]);
  return Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__["useObserver"])(() => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: editorManager.messages.map(message => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_MessagePreview__WEBPACK_IMPORTED_MODULE_5__["MessagePreview"], {
      message: message
    }, message.id, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }, this))
  }, void 0, false));
}

/***/ }),

/***/ "./modules/message/preview/RichEmbed.tsx":
/*!***********************************************!*\
  !*** ./modules/message/preview/RichEmbed.tsx ***!
  \***********************************************/
/*! exports provided: RichEmbed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RichEmbed", function() { return RichEmbed; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_state_useReaction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/state/useReaction */ "./common/state/useReaction.ts");
/* harmony import */ var _markdown_Markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../markdown/Markdown */ "./modules/markdown/Markdown.tsx");
/* harmony import */ var _markdown_styles_MarkdownContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../markdown/styles/MarkdownContainer */ "./modules/markdown/styles/MarkdownContainer.ts");
/* harmony import */ var _EmbedAuthor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./EmbedAuthor */ "./modules/message/preview/EmbedAuthor.tsx");
/* harmony import */ var _EmbedField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./EmbedField */ "./modules/message/preview/EmbedField.tsx");
/* harmony import */ var _EmbedFooter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./EmbedFooter */ "./modules/message/preview/EmbedFooter.tsx");
/* harmony import */ var _EmbedGallery__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./EmbedGallery */ "./modules/message/preview/EmbedGallery.tsx");
/* harmony import */ var _RichEmbedContainer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./RichEmbedContainer */ "./modules/message/preview/RichEmbedContainer.ts");

var _jsxFileName = "F:\\DiscordHookSite\\modules\\message\\preview\\RichEmbed.tsx";












const EmbedGrid = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "RichEmbed__EmbedGrid",
  componentId: "sc-3qrykn-0"
})(["padding:", " ", " ", " ", ";display:inline-grid;grid-template-columns:auto;grid-template-rows:auto;"], Object(polished__WEBPACK_IMPORTED_MODULE_2__["rem"])(8), Object(polished__WEBPACK_IMPORTED_MODULE_2__["rem"])(16), Object(polished__WEBPACK_IMPORTED_MODULE_2__["rem"])(16), Object(polished__WEBPACK_IMPORTED_MODULE_2__["rem"])(12));
const EmbedTitleNormal = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.span.withConfig({
  displayName: "RichEmbed__EmbedTitleNormal",
  componentId: "sc-3qrykn-1"
})(["min-width:0;display:inline-block;margin:8px 0 0;grid-column:1 / 2;& > ", "{font-size:", ";font-weight:600;color:", ";}"], _markdown_styles_MarkdownContainer__WEBPACK_IMPORTED_MODULE_7__["MarkdownContainer"], Object(polished__WEBPACK_IMPORTED_MODULE_2__["rem"])(16), ({
  theme
}) => theme.header.primary);
const EmbedTitleLink = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(EmbedTitleNormal.withComponent("a")).withConfig({
  displayName: "RichEmbed__EmbedTitleLink",
  componentId: "sc-3qrykn-2"
})(["& > ", "{color:", ";}"], _markdown_styles_MarkdownContainer__WEBPACK_IMPORTED_MODULE_7__["MarkdownContainer"], ({
  theme
}) => theme.text.link);
const EmbedDescription = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "RichEmbed__EmbedDescription",
  componentId: "sc-3qrykn-3"
})(["min-width:0;margin:8px 0 0;grid-column:1 / 2;& > ", "{font-size:", ";color:", ";line-height:", ";white-space:pre-line;}"], _markdown_styles_MarkdownContainer__WEBPACK_IMPORTED_MODULE_7__["MarkdownContainer"], Object(polished__WEBPACK_IMPORTED_MODULE_2__["rem"])(14), ({
  theme
}) => theme.text.normal, Object(polished__WEBPACK_IMPORTED_MODULE_2__["rem"])(18));
const EmbedFields = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "RichEmbed__EmbedFields",
  componentId: "sc-3qrykn-4"
})(["min-width:0;margin:8px 0 0;display:grid;grid-column:1 / 2;grid-gap:8px;"]);
const EmbedImage = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.img.withConfig({
  displayName: "RichEmbed__EmbedImage",
  componentId: "sc-3qrykn-5"
})(["min-width:0;max-width:400px;max-height:300px;margin:16px 0 0;border-radius:4px;cursor:pointer;grid-column:1 / 2;", ";"], ({
  hasThumbnail
}) => hasThumbnail && Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["css"])(["grid-column:1 / 3;"]));
const EmbedThumbnailContainer = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "RichEmbed__EmbedThumbnailContainer",
  componentId: "sc-3qrykn-6"
})(["margin:8px 0 0 16px;grid-row:1 / 8;grid-column:2 / 3;justify-self:end;cursor:pointer;"]);
const EmbedThumbnail = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.img.withConfig({
  displayName: "RichEmbed__EmbedThumbnail",
  componentId: "sc-3qrykn-7"
})(["max-width:80px;max-height:80px;border-radius:4px;"]);
function RichEmbed(props) {
  const {
    embed
  } = props;
  const containerRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  const imageRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  Object(_common_state_useReaction__WEBPACK_IMPORTED_MODULE_5__["useReaction"])(() => embed.gallery.length === 1 && embed.gallery[0], () => {
    const {
      current: container
    } = containerRef;
    if (!container) return;
    container.style.maxWidth = "";
  });
  return Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__["useObserver"])(() => {
    const color = embed.color.raw === 0xffffff ? undefined : embed.color.hex;
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_RichEmbedContainer__WEBPACK_IMPORTED_MODULE_12__["RichEmbedContainer"], {
      ref: containerRef,
      style: {
        borderColor: color
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(EmbedGrid, {
        children: [embed.hasAuthor && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_EmbedAuthor__WEBPACK_IMPORTED_MODULE_8__["EmbedAuthor"], {
          embed: embed
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 31
        }, this), embed.hasTitle && (embed.url ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(EmbedTitleLink, {
          href: embed.url,
          rel: "noopener noreferrer nofollow ugc",
          target: "_blank",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_markdown_Markdown__WEBPACK_IMPORTED_MODULE_6__["Markdown"], {
            content: embed.title,
            type: "embed-header"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 15
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(EmbedTitleNormal, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_markdown_Markdown__WEBPACK_IMPORTED_MODULE_6__["Markdown"], {
            content: embed.title,
            type: "embed-header"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 15
        }, this)), embed.hasDescription && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(EmbedDescription, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_markdown_Markdown__WEBPACK_IMPORTED_MODULE_6__["Markdown"], {
            content: embed.description,
            type: "embed-content"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 13
        }, this), embed.fields.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(EmbedFields, {
          children: embed.fields.map(field => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_EmbedField__WEBPACK_IMPORTED_MODULE_9__["EmbedField"], {
            field: field
          }, field.id, false, {
            fileName: _jsxFileName,
            lineNumber: 154,
            columnNumber: 17
          }, this))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 13
        }, this), embed.gallery.length > 1 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_EmbedGallery__WEBPACK_IMPORTED_MODULE_11__["EmbedGallery"], {
          embed: embed
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 13
        }, this) : embed.gallery.length === 1 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(EmbedImage, {
          ref: imageRef,
          src: embed.gallery[0],
          alt: "Image",
          hasThumbnail: Boolean(embed.thumbnail),
          onLoad: () => {
            const {
              current: container
            } = containerRef;
            const {
              current: image
            } = imageRef;
            if (!container || !image) return;
            const {
              width
            } = image.getBoundingClientRect();
            container.style.maxWidth = width >= 300 ? `${width + 32}px` : "";
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 13
        }, this) : undefined, embed.hasFooter && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_EmbedFooter__WEBPACK_IMPORTED_MODULE_10__["EmbedFooter"], {
          embed: embed
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 31
        }, this), embed.thumbnail && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(EmbedThumbnailContainer, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(EmbedThumbnail, {
            src: embed.thumbnail,
            alt: "Thumbnail"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 179,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 7
    }, this);
  });
}

/***/ }),

/***/ "./modules/message/preview/RichEmbedContainer.ts":
/*!*******************************************************!*\
  !*** ./modules/message/preview/RichEmbedContainer.ts ***!
  \*******************************************************/
/*! exports provided: RichEmbedContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RichEmbedContainer", function() { return RichEmbedContainer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const RichEmbedContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "RichEmbedContainer",
  componentId: "z4zgh4-0"
})(["max-width:520px;display:grid;background:", ";border-radius:4px;border-left:4px solid ", ";&,& *{unicode-bidi:plaintext;text-align:left;}", ";"], ({
  theme
}) => theme.background.secondary, ({
  theme
}) => theme.background.tertiary, ({
  theme
}) => theme.appearance.display === "compact" && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["margin:6px 0 0;"]));

/***/ }),

/***/ "./modules/message/preview/attachment/helpers/getHumanReadableSize.ts":
/*!****************************************************************************!*\
  !*** ./modules/message/preview/attachment/helpers/getHumanReadableSize.ts ***!
  \****************************************************************************/
/*! exports provided: getHumanReadableSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHumanReadableSize", function() { return getHumanReadableSize; });
const getHumanReadableSize = bytes => {
  const units = ["bytes", "KB", "MB", "GB", "TB", "PB"];
  let unit = 0;
  let number = bytes;

  while (number >= 1024 && unit < units.length - 1) {
    unit += 1;
    number /= 1024;
  }

  const formattedNumber = number.toLocaleString("en-US", {
    maximumFractionDigits: 2
  });
  return `${formattedNumber} ${units[unit]}`;
};

/***/ }),

/***/ "./modules/message/state/editorForm.ts":
/*!*********************************************!*\
  !*** ./modules/message/state/editorForm.ts ***!
  \*********************************************/
/*! exports provided: editorForm, createEditorForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editorForm", function() { return editorForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEditorForm", function() { return createEditorForm; });
/* harmony import */ var mstform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mstform */ "mstform");
/* harmony import */ var mstform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mstform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_form_validators_isUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/form/validators/isUrl */ "./common/form/validators/isUrl.ts");
/* harmony import */ var _common_form_validators_matchesRegex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/form/validators/matchesRegex */ "./common/form/validators/matchesRegex.ts");
/* harmony import */ var _common_form_validators_maxLength__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/form/validators/maxLength */ "./common/form/validators/maxLength.ts");
/* harmony import */ var _editor_EditorManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../editor/EditorManager */ "./modules/editor/EditorManager.ts");
/* harmony import */ var _webhook_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../webhook/constants */ "./modules/webhook/constants.ts");






const editorForm = new mstform__WEBPACK_IMPORTED_MODULE_0__["Form"](_editor_EditorManager__WEBPACK_IMPORTED_MODULE_4__["EditorManager"], {
  messages: new mstform__WEBPACK_IMPORTED_MODULE_0__["RepeatingForm"]({
    content: new mstform__WEBPACK_IMPORTED_MODULE_0__["Field"](mstform__WEBPACK_IMPORTED_MODULE_0__["converters"].string, {
      controlled: mstform__WEBPACK_IMPORTED_MODULE_0__["controlled"].object,
      validators: [Object(_common_form_validators_maxLength__WEBPACK_IMPORTED_MODULE_3__["maxLength"])(2000)]
    }),
    username: new mstform__WEBPACK_IMPORTED_MODULE_0__["Field"](mstform__WEBPACK_IMPORTED_MODULE_0__["converters"].string, {
      controlled: mstform__WEBPACK_IMPORTED_MODULE_0__["controlled"].object,
      validators: [Object(_common_form_validators_maxLength__WEBPACK_IMPORTED_MODULE_3__["maxLength"])(80)]
    }),
    avatar: new mstform__WEBPACK_IMPORTED_MODULE_0__["Field"](mstform__WEBPACK_IMPORTED_MODULE_0__["converters"].string, {
      controlled: mstform__WEBPACK_IMPORTED_MODULE_0__["controlled"].object,
      validators: [Object(_common_form_validators_isUrl__WEBPACK_IMPORTED_MODULE_1__["isUrl"])()]
    }),
    embeds: new mstform__WEBPACK_IMPORTED_MODULE_0__["RepeatingForm"]({
      title: new mstform__WEBPACK_IMPORTED_MODULE_0__["Field"](mstform__WEBPACK_IMPORTED_MODULE_0__["converters"].string, {
        controlled: mstform__WEBPACK_IMPORTED_MODULE_0__["controlled"].object,
        validators: [Object(_common_form_validators_maxLength__WEBPACK_IMPORTED_MODULE_3__["maxLength"])(256)]
      }),
      description: new mstform__WEBPACK_IMPORTED_MODULE_0__["Field"](mstform__WEBPACK_IMPORTED_MODULE_0__["converters"].string, {
        controlled: mstform__WEBPACK_IMPORTED_MODULE_0__["controlled"].object,
        validators: [Object(_common_form_validators_maxLength__WEBPACK_IMPORTED_MODULE_3__["maxLength"])(4096)]
      }),
      url: new mstform__WEBPACK_IMPORTED_MODULE_0__["Field"](mstform__WEBPACK_IMPORTED_MODULE_0__["converters"].string, {
        controlled: mstform__WEBPACK_IMPORTED_MODULE_0__["controlled"].object,
        validators: [Object(_common_form_validators_isUrl__WEBPACK_IMPORTED_MODULE_1__["isUrl"])()]
      }),
      color: new mstform__WEBPACK_IMPORTED_MODULE_0__["SubForm"]({
        hue: new mstform__WEBPACK_IMPORTED_MODULE_0__["Field"](mstform__WEBPACK_IMPORTED_MODULE_0__["converters"].object),
        saturation: new mstform__WEBPACK_IMPORTED_MODULE_0__["Field"](mstform__WEBPACK_IMPORTED_MODULE_0__["converters"].object),
        value: new mstform__WEBPACK_IMPORTED_MODULE_0__["Field"](mstform__WEBPACK_IMPORTED_MODULE_0__["converters"].object)
      }),
      fields: new mstform__WEBPACK_IMPORTED_MODULE_0__["RepeatingForm"]({
        name: new mstform__WEBPACK_IMPORTED_MODULE_0__["Field"](mstform__WEBPACK_IMPORTED_MODULE_0__["converters"].string, {
          controlled: mstform__WEBPACK_IMPORTED_MODULE_0__["controlled"].object,
          validators: [Object(_common_form_validators_maxLength__WEBPACK_IMPORTED_MODULE_3__["maxLength"])(256)],
          required: true
        }),
        value: new mstform__WEBPACK_IMPORTED_MODULE_0__["Field"](mstform__WEBPACK_IMPORTED_MODULE_0__["converters"].string, {
          controlled: mstform__WEBPACK_IMPORTED_MODULE_0__["controlled"].object,
          validators: [Object(_common_form_validators_maxLength__WEBPACK_IMPORTED_MODULE_3__["maxLength"])(1024)],
          required: true
        }),
        inline: new mstform__WEBPACK_IMPORTED_MODULE_0__["Field"](mstform__WEBPACK_IMPORTED_MODULE_0__["converters"].boolean, {
          controlled: mstform__WEBPACK_IMPORTED_MODULE_0__["controlled"].object
        })
      }),
      author: new mstform__WEBPACK_IMPORTED_MODULE_0__["Field"](mstform__WEBPACK_IMPORTED_MODULE_0__["converters"].string, {
        controlled: mstform__WEBPACK_IMPORTED_MODULE_0__["controlled"].object,
        validators: [Object(_common_form_validators_maxLength__WEBPACK_IMPORTED_MODULE_3__["maxLength"])(256)]
      }),
      authorUrl: new mstform__WEBPACK_IMPORTED_MODULE_0__["Field"](mstform__WEBPACK_IMPORTED_MODULE_0__["converters"].string, {
        controlled: mstform__WEBPACK_IMPORTED_MODULE_0__["controlled"].object,
        validators: [Object(_common_form_validators_isUrl__WEBPACK_IMPORTED_MODULE_1__["isUrl"])()]
      }),
      authorIcon: new mstform__WEBPACK_IMPORTED_MODULE_0__["Field"](mstform__WEBPACK_IMPORTED_MODULE_0__["converters"].string, {
        controlled: mstform__WEBPACK_IMPORTED_MODULE_0__["controlled"].object,
        validators: [Object(_common_form_validators_isUrl__WEBPACK_IMPORTED_MODULE_1__["isUrl"])()]
      }),
      footer: new mstform__WEBPACK_IMPORTED_MODULE_0__["Field"](mstform__WEBPACK_IMPORTED_MODULE_0__["converters"].string, {
        controlled: mstform__WEBPACK_IMPORTED_MODULE_0__["controlled"].object,
        validators: [Object(_common_form_validators_maxLength__WEBPACK_IMPORTED_MODULE_3__["maxLength"])(2048)]
      }),
      footerIcon: new mstform__WEBPACK_IMPORTED_MODULE_0__["Field"](mstform__WEBPACK_IMPORTED_MODULE_0__["converters"].string, {
        controlled: mstform__WEBPACK_IMPORTED_MODULE_0__["controlled"].object,
        validators: [Object(_common_form_validators_isUrl__WEBPACK_IMPORTED_MODULE_1__["isUrl"])()]
      }),
      timestamp: new mstform__WEBPACK_IMPORTED_MODULE_0__["Field"](mstform__WEBPACK_IMPORTED_MODULE_0__["converters"].object),
      gallery: new mstform__WEBPACK_IMPORTED_MODULE_0__["Field"](mstform__WEBPACK_IMPORTED_MODULE_0__["converters"].stringArray, {
        controlled: mstform__WEBPACK_IMPORTED_MODULE_0__["controlled"].object,
        validators: [value => {
          var _value$map$find;

          const check = Object(_common_form_validators_isUrl__WEBPACK_IMPORTED_MODULE_1__["isUrl"])();
          return (_value$map$find = value.map((value, index) => check(value) ? `Image ${index + 1}: ${check(value)}` : false).find(Boolean)) !== null && _value$map$find !== void 0 ? _value$map$find : false;
        }]
      }),
      thumbnail: new mstform__WEBPACK_IMPORTED_MODULE_0__["Field"](mstform__WEBPACK_IMPORTED_MODULE_0__["converters"].string, {
        controlled: mstform__WEBPACK_IMPORTED_MODULE_0__["controlled"].object,
        validators: [Object(_common_form_validators_isUrl__WEBPACK_IMPORTED_MODULE_1__["isUrl"])()]
      })
    }, {
      body: new mstform__WEBPACK_IMPORTED_MODULE_0__["Group"]({
        include: ["title", "description", "url", "color"]
      }),
      author: new mstform__WEBPACK_IMPORTED_MODULE_0__["Group"]({
        include: ["author", "authorUrl", "authorIcon"]
      }),
      footer: new mstform__WEBPACK_IMPORTED_MODULE_0__["Group"]({
        include: ["footer", "footerIcon", "timestamp"]
      }),
      fields: new mstform__WEBPACK_IMPORTED_MODULE_0__["Group"]({
        include: ["fields"]
      }),
      images: new mstform__WEBPACK_IMPORTED_MODULE_0__["Group"]({
        include: ["gallery", "thumbnail"]
      })
    }),
    reference: new mstform__WEBPACK_IMPORTED_MODULE_0__["Field"](mstform__WEBPACK_IMPORTED_MODULE_0__["converters"].string, {
      controlled: mstform__WEBPACK_IMPORTED_MODULE_0__["controlled"].object,
      validators: [Object(_common_form_validators_matchesRegex__WEBPACK_IMPORTED_MODULE_2__["matchesRegex"])(_webhook_constants__WEBPACK_IMPORTED_MODULE_5__["MESSAGE_REF_RE"], "Invalid message link")]
    })
  }),
  targets: new mstform__WEBPACK_IMPORTED_MODULE_0__["RepeatingForm"]({
    url: new mstform__WEBPACK_IMPORTED_MODULE_0__["Field"](mstform__WEBPACK_IMPORTED_MODULE_0__["converters"].string, {
      controlled: mstform__WEBPACK_IMPORTED_MODULE_0__["controlled"].object,
      validators: [Object(_common_form_validators_matchesRegex__WEBPACK_IMPORTED_MODULE_2__["matchesRegex"])(_webhook_constants__WEBPACK_IMPORTED_MODULE_5__["WEBHOOK_URL_RE"], "Invalid webhook URL")]
    })
  })
});
const createEditorForm = state => editorForm.state(state, {
  backend: {
    save: async node => node.save(),
    process: async (node, path) => node.process(path)
  }
});

const repeatingMessageItemFormState = state => state.repeatingForm("messages");

const messageItemFormState = state => state.index(0);

const repeatingEmbedItemFormState = state => state.repeatingForm("embeds");

const embedItemFormState = state => state.index(0);

const repeatingFieldItemFormState = state => state.repeatingForm("fields");

const fieldItemFormState = state => state.index(0);

const repeatingTargetFormState = state => state.repeatingForm("messages");

const targetFormState = state => state.index(0);

/***/ }),

/***/ "./modules/message/state/models/EmbedModel.ts":
/*!****************************************************!*\
  !*** ./modules/message/state/models/EmbedModel.ts ***!
  \****************************************************/
/*! exports provided: EmbedModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmbedModel", function() { return EmbedModel; });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "date-fns");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-state-tree */ "mobx-state-tree");
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_state_tree__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_input_color_ColorModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/input/color/ColorModel */ "./common/input/color/ColorModel.ts");
/* harmony import */ var _common_state_nullableDate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/state/nullableDate */ "./common/state/nullableDate.ts");
/* harmony import */ var _common_state_uid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../common/state/uid */ "./common/state/uid.ts");
/* harmony import */ var _FieldModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FieldModel */ "./modules/message/state/models/FieldModel.ts");
/* harmony import */ var _MessageModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MessageModel */ "./modules/message/state/models/MessageModel.ts");
/* eslint-disable import/no-cycle */







const EmbedModel = mobx_state_tree__WEBPACK_IMPORTED_MODULE_1__["types"].model("EmbedModel", {
  id: mobx_state_tree__WEBPACK_IMPORTED_MODULE_1__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_1__["types"].identifierNumber, _common_state_uid__WEBPACK_IMPORTED_MODULE_4__["getUniqueId"]),
  title: "",
  description: "",
  url: "",
  color: mobx_state_tree__WEBPACK_IMPORTED_MODULE_1__["types"].optional(_common_input_color_ColorModel__WEBPACK_IMPORTED_MODULE_2__["ColorModel"], {}),
  fields: mobx_state_tree__WEBPACK_IMPORTED_MODULE_1__["types"].array(mobx_state_tree__WEBPACK_IMPORTED_MODULE_1__["types"].late(() => _FieldModel__WEBPACK_IMPORTED_MODULE_5__["FieldModel"])),
  author: "",
  authorUrl: "",
  authorIcon: "",
  footer: "",
  footerIcon: "",
  timestamp: mobx_state_tree__WEBPACK_IMPORTED_MODULE_1__["types"].optional(_common_state_nullableDate__WEBPACK_IMPORTED_MODULE_3__["nullableDate"], null),
  gallery: mobx_state_tree__WEBPACK_IMPORTED_MODULE_1__["types"].array(mobx_state_tree__WEBPACK_IMPORTED_MODULE_1__["types"].string),
  thumbnail: ""
}).views(self => ({
  get message() {
    return Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_1__["getParentOfType"])(self, _MessageModel__WEBPACK_IMPORTED_MODULE_6__["MessageModel"]);
  },

  get length() {
    return self.title.length + self.description.length + self.fields.reduce((length, field) => length + field.name.length + field.value.length, 0) + self.author.length + self.footer.length;
  },

  get size() {
    return Math.max(self.gallery.length, 1);
  },

  get hasTitle() {
    return self.title.trim().length > 0;
  },

  get hasDescription() {
    return self.description.trim().length > 0;
  },

  get hasAuthor() {
    return self.author.trim().length > 0;
  },

  get hasFooter() {
    return self.footer.trim().length > 0 || Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["isValid"])(self.timestamp);
  },

  get data() {
    const fields = self.fields.length > 0 ? self.fields.map(field => ({
      name: field.name || undefined,
      value: field.value || undefined,
      inline: field.inline || undefined
    })) : undefined;
    const author = this.hasAuthor ? {
      name: self.author,
      url: self.authorUrl || undefined,
      icon_url: self.authorIcon || undefined
    } : undefined;
    const footer = self.footer.trim().length > 0 || Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["isValid"])(self.timestamp) && self.footerIcon ? {
      text: self.footer || undefined,
      icon_url: self.footerIcon || undefined
    } : undefined;
    const embeds = [{
      title: self.title || undefined,
      description: self.description || undefined,
      url: self.url || undefined,
      color: self.color.raw,
      fields,
      author,
      footer,
      timestamp: Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["isValid"])(self.timestamp) ? self.timestamp.toJSON() : undefined,
      image: self.gallery.length > 0 ? {
        url: self.gallery[0]
      } : undefined,
      thumbnail: self.thumbnail ? {
        url: self.thumbnail
      } : undefined
    }];

    for (const image of self.gallery.slice(1)) {
      embeds.push({
        url: self.url,
        image: {
          url: image
        }
      });
    }

    return embeds;
  },

  get displayName() {
    /* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
    return self.author.split("\n").map(line => line.trim()).find(Boolean) || self.title.split("\n").map(line => line.trim()).find(Boolean) || self.description.split("\n").map(line => line.trim()).find(Boolean) || self.fields.map(field => field.displayName).find(Boolean) || self.footer.split("\n").map(line => line.trim()).find(Boolean) || undefined;
    /* eslint-enable @typescript-eslint/prefer-nullish-coalescing */
  }

})).actions(self => ({
  set(key, value) {
    self[key] = value;
  }

})); // eslint-disable-next-line @typescript-eslint/no-empty-interface, @typescript-eslint/consistent-type-definitions

/***/ }),

/***/ "./modules/message/state/models/FieldModel.ts":
/*!****************************************************!*\
  !*** ./modules/message/state/models/FieldModel.ts ***!
  \****************************************************/
/*! exports provided: FieldModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldModel", function() { return FieldModel; });
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx-state-tree */ "mobx-state-tree");
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_state_uid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../common/state/uid */ "./common/state/uid.ts");
/* harmony import */ var _EmbedModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EmbedModel */ "./modules/message/state/models/EmbedModel.ts");
/* eslint-disable import/no-cycle */



const FieldModel = mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].model("FieldModel", {
  id: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].identifierNumber, _common_state_uid__WEBPACK_IMPORTED_MODULE_1__["getUniqueId"]),
  name: "",
  value: "",
  inline: false
}).views(self => ({
  get embed() {
    return Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["getParentOfType"])(self, _EmbedModel__WEBPACK_IMPORTED_MODULE_2__["EmbedModel"]);
  },

  get displayName() {
    /* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
    return self.name.split("\n").map(line => line.trim()).find(Boolean) || self.value.split("\n").map(line => line.trim()).find(Boolean) || undefined;
    /* eslint-enable @typescript-eslint/prefer-nullish-coalescing */
  }

})).actions(self => ({
  set(key, value) {
    self[key] = value;
  }

})); // eslint-disable-next-line @typescript-eslint/no-empty-interface, @typescript-eslint/consistent-type-definitions

/***/ }),

/***/ "./modules/message/state/models/MessageModel.ts":
/*!******************************************************!*\
  !*** ./modules/message/state/models/MessageModel.ts ***!
  \******************************************************/
/*! exports provided: MessageModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageModel", function() { return MessageModel; });
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx-state-tree */ "mobx-state-tree");
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_state_nullableDate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../common/state/nullableDate */ "./common/state/nullableDate.ts");
/* harmony import */ var _common_state_uid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/state/uid */ "./common/state/uid.ts");
/* harmony import */ var _helpers_stringifyMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/stringifyMessage */ "./modules/message/helpers/stringifyMessage.ts");
/* harmony import */ var _EmbedModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EmbedModel */ "./modules/message/state/models/EmbedModel.ts");
/* eslint-disable import/no-cycle */





const MessageModel = mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].model("MessageModel", {
  id: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].identifierNumber, _common_state_uid__WEBPACK_IMPORTED_MODULE_2__["getUniqueId"]),
  content: "",
  username: "",
  avatar: "",
  embeds: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].array(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].late(() => _EmbedModel__WEBPACK_IMPORTED_MODULE_4__["EmbedModel"])),
  reference: "",
  timestamp: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].optional(_common_state_nullableDate__WEBPACK_IMPORTED_MODULE_1__["nullableDate"], null),
  badge: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].maybeNull(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].string), "Bot")
}).volatile(() => ({
  files: []
})).views(self => ({
  get hasContent() {
    return self.content.trim().length > 0;
  },

  get hasExtras() {
    return self.embeds.length > 0 || self.files.length > 0;
  },

  get embedLength() {
    return self.embeds.reduce((size, embed) => size + embed.length, 0);
  },

  get size() {
    return self.embeds.reduce((size, embed) => size + embed.size, 0);
  },

  get data() {
    const embeds = self.embeds.flatMap(embed => embed.data);
    return {
      content: self.content || null,
      embeds: embeds.length > 0 ? embeds : null,
      username: self.username || undefined,
      avatar_url: self.avatar || undefined,
      files: self.files.length > 0 ? Array.from(self.files) : undefined
    };
  },

  get body() {
    const json = Object(_helpers_stringifyMessage__WEBPACK_IMPORTED_MODULE_3__["stringifyMessage"])(this.data, false);

    if (self.files.length > 0) {
      const formData = new FormData();
      if (json !== "{}") formData.append("payload_json", json);

      for (const [index, file] of self.files.entries()) {
        formData.append(`file[${index}]`, file, file.name);
      }

      return formData;
    }

    return json;
  }

})).actions(self => ({
  set(key, value) {
    self[key] = value;
  }

})); // eslint-disable-next-line @typescript-eslint/no-empty-interface, @typescript-eslint/consistent-type-definitions

/***/ }),

/***/ "./modules/webhook/WebhookModel.ts":
/*!*****************************************!*\
  !*** ./modules/webhook/WebhookModel.ts ***!
  \*****************************************/
/*! exports provided: WebhookModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebhookModel", function() { return WebhookModel; });
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx-state-tree */ "mobx-state-tree");
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_state_uid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/state/uid */ "./common/state/uid.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./modules/webhook/constants.ts");
/* eslint-disable import/no-cycle */



const WebhookModel = mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].model("WebhookModel", {
  id: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].identifierNumber, _common_state_uid__WEBPACK_IMPORTED_MODULE_1__["getUniqueId"]),
  url: ""
}).volatile(() => ({
  exists: undefined,
  snowflake: undefined,
  name: undefined,
  avatar: undefined,
  channelId: undefined,
  guildId: undefined,
  token: undefined
})).views(self => ({
  get avatarUrl() {
    if (!self.avatar) return self.avatar;
    return `${_constants__WEBPACK_IMPORTED_MODULE_2__["DISCORD_AVATARS_CDN_BASE_URL"]}/${self.snowflake}/${self.avatar}.png`;
  },

  get displayName() {
    var _self$name;

    return (_self$name = self.name) !== null && _self$name !== void 0 ? _self$name : _constants__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_DISPLAY_NAME"];
  },

  get displayAvatarUrl() {
    var _this$avatarUrl;

    return (_this$avatarUrl = this.avatarUrl) !== null && _this$avatarUrl !== void 0 ? _this$avatarUrl : self.avatar === null ? _constants__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_AVATAR_URL"] : _constants__WEBPACK_IMPORTED_MODULE_2__["BRANDED_DEFAULT_AVATAR_URL"];
  },

  async getRoute(reference) {
    const host = await _constants__WEBPACK_IMPORTED_MODULE_2__["DISCORD_API_HOST_PROMISE"];
    const match = reference && _constants__WEBPACK_IMPORTED_MODULE_2__["MESSAGE_REF_RE"].exec(reference);

    if (match) {
      const [, messageId] = match;
      return ["PATCH", `https://${host}/api/v8/webhooks/${self.snowflake}/${self.token}/messages/${messageId}`];
    }

    return ["POST", `https://${host}/api/v8/webhooks/${self.snowflake}/${self.token}?wait=true`];
  }

})).actions(self => ({
  set(key, value) {
    self[key] = value;
  },

  fetch: Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["flow"])(function* () {
    self.exists = undefined;
    self.snowflake = undefined;
    self.name = undefined;
    self.avatar = undefined;
    self.channelId = undefined;
    self.guildId = undefined;
    self.token = undefined;

    try {
      const url = new URL(self.url);
      url.host = yield _constants__WEBPACK_IMPORTED_MODULE_2__["DISCORD_API_HOST_PROMISE"];
      const response = yield fetch(String(url));
      /* eslint-disable require-atomic-updates */

      if (!response.ok) {
        self.exists = false;
        return;
      }

      const webhook = yield response.json();
      self.exists = true;
      self.snowflake = webhook.id;
      self.name = webhook.name;
      self.avatar = webhook.avatar;
      self.channelId = webhook.channel_id;
      self.guildId = webhook.guild_id;
      self.token = webhook.token;
      /* eslint-enable require-atomic-updates */
    } catch {// do nothing
    }
  })
})); // eslint-disable-next-line @typescript-eslint/no-empty-interface, @typescript-eslint/consistent-type-definitions

/***/ }),

/***/ "./modules/webhook/constants.ts":
/*!**************************************!*\
  !*** ./modules/webhook/constants.ts ***!
  \**************************************/
/*! exports provided: DISCORD_API_BASE_URLS, DISCORD_API_HOST_PROMISE, DISCORD_AVATARS_CDN_BASE_URL, DEFAULT_AVATAR_URL, BRANDED_DEFAULT_AVATAR_URL, DEFAULT_DISPLAY_NAME, WEBHOOK_URL_RE, MESSAGE_REF_RE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DISCORD_API_BASE_URLS", function() { return DISCORD_API_BASE_URLS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DISCORD_API_HOST_PROMISE", function() { return DISCORD_API_HOST_PROMISE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DISCORD_AVATARS_CDN_BASE_URL", function() { return DISCORD_AVATARS_CDN_BASE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_AVATAR_URL", function() { return DEFAULT_AVATAR_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BRANDED_DEFAULT_AVATAR_URL", function() { return BRANDED_DEFAULT_AVATAR_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_DISPLAY_NAME", function() { return DEFAULT_DISPLAY_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEBHOOK_URL_RE", function() { return WEBHOOK_URL_RE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MESSAGE_REF_RE", function() { return MESSAGE_REF_RE; });
const DISCORD_API_BASE_URLS = ["https://discord.com/api/v8", "https://ptb.discord.com/api/v8", "https://canary.discord.com/api/v8"];

const getDiscordApiHost = async () => {
  let firstError;

  for (const url of DISCORD_API_BASE_URLS) {
    try {
      // eslint-disable-next-line no-await-in-loop
      await fetch(`${url}/invites/discord-developers`);
      return new URL(url).host;
    } catch (error) {
      firstError = error;
    }
  }

  throw firstError;
};

const DISCORD_API_HOST_PROMISE = new Promise((resolve, reject) => {
  getDiscordApiHost().then(resolve).catch(reject);
});
const DISCORD_AVATARS_CDN_BASE_URL = "https://cdn.discordapp.com/avatars";
const DEFAULT_AVATAR_URL = "https://cdn.discordapp.com/embed/avatars/0.png";
const BRANDED_DEFAULT_AVATAR_URL = "/static/discord-avatar.png";
const DEFAULT_DISPLAY_NAME = "Discohook";
const WEBHOOK_URL_RE = /^https?:\/\/(?:www\.|ptb\.|canary\.)?discord(?:app)?\.com\/api(?:\/v\d+)?\/webhooks\/\d+\/[\w-]+$/;
const MESSAGE_REF_RE = /^(?:https:\/\/(?:www\.|ptb\.|canary\.)?discord(?:app)?\.com\/channels\/\d+\/\d+\/)?(\d+)$/;

/***/ }),

/***/ "./node_modules/highlight.js/lib/languages lazy recursive ^\\.\\/.*$":
/*!********************************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages lazy ^\.\/.*$ namespace object ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./1c": [
		"./node_modules/highlight.js/lib/languages/1c.js",
		0
	],
	"./1c.js": [
		"./node_modules/highlight.js/lib/languages/1c.js",
		0
	],
	"./abnf": [
		"./node_modules/highlight.js/lib/languages/abnf.js",
		1
	],
	"./abnf.js": [
		"./node_modules/highlight.js/lib/languages/abnf.js",
		1
	],
	"./accesslog": [
		"./node_modules/highlight.js/lib/languages/accesslog.js",
		2
	],
	"./accesslog.js": [
		"./node_modules/highlight.js/lib/languages/accesslog.js",
		2
	],
	"./actionscript": [
		"./node_modules/highlight.js/lib/languages/actionscript.js",
		3
	],
	"./actionscript.js": [
		"./node_modules/highlight.js/lib/languages/actionscript.js",
		3
	],
	"./ada": [
		"./node_modules/highlight.js/lib/languages/ada.js",
		4
	],
	"./ada.js": [
		"./node_modules/highlight.js/lib/languages/ada.js",
		4
	],
	"./angelscript": [
		"./node_modules/highlight.js/lib/languages/angelscript.js",
		5
	],
	"./angelscript.js": [
		"./node_modules/highlight.js/lib/languages/angelscript.js",
		5
	],
	"./apache": [
		"./node_modules/highlight.js/lib/languages/apache.js",
		6
	],
	"./apache.js": [
		"./node_modules/highlight.js/lib/languages/apache.js",
		6
	],
	"./applescript": [
		"./node_modules/highlight.js/lib/languages/applescript.js",
		7
	],
	"./applescript.js": [
		"./node_modules/highlight.js/lib/languages/applescript.js",
		7
	],
	"./arcade": [
		"./node_modules/highlight.js/lib/languages/arcade.js",
		8
	],
	"./arcade.js": [
		"./node_modules/highlight.js/lib/languages/arcade.js",
		8
	],
	"./arduino": [
		"./node_modules/highlight.js/lib/languages/arduino.js",
		9
	],
	"./arduino.js": [
		"./node_modules/highlight.js/lib/languages/arduino.js",
		9
	],
	"./armasm": [
		"./node_modules/highlight.js/lib/languages/armasm.js",
		10
	],
	"./armasm.js": [
		"./node_modules/highlight.js/lib/languages/armasm.js",
		10
	],
	"./asciidoc": [
		"./node_modules/highlight.js/lib/languages/asciidoc.js",
		11
	],
	"./asciidoc.js": [
		"./node_modules/highlight.js/lib/languages/asciidoc.js",
		11
	],
	"./aspectj": [
		"./node_modules/highlight.js/lib/languages/aspectj.js",
		12
	],
	"./aspectj.js": [
		"./node_modules/highlight.js/lib/languages/aspectj.js",
		12
	],
	"./autohotkey": [
		"./node_modules/highlight.js/lib/languages/autohotkey.js",
		13
	],
	"./autohotkey.js": [
		"./node_modules/highlight.js/lib/languages/autohotkey.js",
		13
	],
	"./autoit": [
		"./node_modules/highlight.js/lib/languages/autoit.js",
		14
	],
	"./autoit.js": [
		"./node_modules/highlight.js/lib/languages/autoit.js",
		14
	],
	"./avrasm": [
		"./node_modules/highlight.js/lib/languages/avrasm.js",
		15
	],
	"./avrasm.js": [
		"./node_modules/highlight.js/lib/languages/avrasm.js",
		15
	],
	"./awk": [
		"./node_modules/highlight.js/lib/languages/awk.js",
		16
	],
	"./awk.js": [
		"./node_modules/highlight.js/lib/languages/awk.js",
		16
	],
	"./axapta": [
		"./node_modules/highlight.js/lib/languages/axapta.js",
		17
	],
	"./axapta.js": [
		"./node_modules/highlight.js/lib/languages/axapta.js",
		17
	],
	"./bash": [
		"./node_modules/highlight.js/lib/languages/bash.js",
		18
	],
	"./bash.js": [
		"./node_modules/highlight.js/lib/languages/bash.js",
		18
	],
	"./basic": [
		"./node_modules/highlight.js/lib/languages/basic.js",
		19
	],
	"./basic.js": [
		"./node_modules/highlight.js/lib/languages/basic.js",
		19
	],
	"./bnf": [
		"./node_modules/highlight.js/lib/languages/bnf.js",
		20
	],
	"./bnf.js": [
		"./node_modules/highlight.js/lib/languages/bnf.js",
		20
	],
	"./brainfuck": [
		"./node_modules/highlight.js/lib/languages/brainfuck.js",
		21
	],
	"./brainfuck.js": [
		"./node_modules/highlight.js/lib/languages/brainfuck.js",
		21
	],
	"./c": [
		"./node_modules/highlight.js/lib/languages/c.js",
		23
	],
	"./c-like": [
		"./node_modules/highlight.js/lib/languages/c-like.js",
		22
	],
	"./c-like.js": [
		"./node_modules/highlight.js/lib/languages/c-like.js",
		22
	],
	"./c.js": [
		"./node_modules/highlight.js/lib/languages/c.js",
		23
	],
	"./cal": [
		"./node_modules/highlight.js/lib/languages/cal.js",
		24
	],
	"./cal.js": [
		"./node_modules/highlight.js/lib/languages/cal.js",
		24
	],
	"./capnproto": [
		"./node_modules/highlight.js/lib/languages/capnproto.js",
		25
	],
	"./capnproto.js": [
		"./node_modules/highlight.js/lib/languages/capnproto.js",
		25
	],
	"./ceylon": [
		"./node_modules/highlight.js/lib/languages/ceylon.js",
		26
	],
	"./ceylon.js": [
		"./node_modules/highlight.js/lib/languages/ceylon.js",
		26
	],
	"./clean": [
		"./node_modules/highlight.js/lib/languages/clean.js",
		27
	],
	"./clean.js": [
		"./node_modules/highlight.js/lib/languages/clean.js",
		27
	],
	"./clojure": [
		"./node_modules/highlight.js/lib/languages/clojure.js",
		29
	],
	"./clojure-repl": [
		"./node_modules/highlight.js/lib/languages/clojure-repl.js",
		28
	],
	"./clojure-repl.js": [
		"./node_modules/highlight.js/lib/languages/clojure-repl.js",
		28
	],
	"./clojure.js": [
		"./node_modules/highlight.js/lib/languages/clojure.js",
		29
	],
	"./cmake": [
		"./node_modules/highlight.js/lib/languages/cmake.js",
		30
	],
	"./cmake.js": [
		"./node_modules/highlight.js/lib/languages/cmake.js",
		30
	],
	"./coffeescript": [
		"./node_modules/highlight.js/lib/languages/coffeescript.js",
		31
	],
	"./coffeescript.js": [
		"./node_modules/highlight.js/lib/languages/coffeescript.js",
		31
	],
	"./coq": [
		"./node_modules/highlight.js/lib/languages/coq.js",
		32
	],
	"./coq.js": [
		"./node_modules/highlight.js/lib/languages/coq.js",
		32
	],
	"./cos": [
		"./node_modules/highlight.js/lib/languages/cos.js",
		33
	],
	"./cos.js": [
		"./node_modules/highlight.js/lib/languages/cos.js",
		33
	],
	"./cpp": [
		"./node_modules/highlight.js/lib/languages/cpp.js",
		34
	],
	"./cpp.js": [
		"./node_modules/highlight.js/lib/languages/cpp.js",
		34
	],
	"./crmsh": [
		"./node_modules/highlight.js/lib/languages/crmsh.js",
		35
	],
	"./crmsh.js": [
		"./node_modules/highlight.js/lib/languages/crmsh.js",
		35
	],
	"./crystal": [
		"./node_modules/highlight.js/lib/languages/crystal.js",
		36
	],
	"./crystal.js": [
		"./node_modules/highlight.js/lib/languages/crystal.js",
		36
	],
	"./csharp": [
		"./node_modules/highlight.js/lib/languages/csharp.js",
		37
	],
	"./csharp.js": [
		"./node_modules/highlight.js/lib/languages/csharp.js",
		37
	],
	"./csp": [
		"./node_modules/highlight.js/lib/languages/csp.js",
		38
	],
	"./csp.js": [
		"./node_modules/highlight.js/lib/languages/csp.js",
		38
	],
	"./css": [
		"./node_modules/highlight.js/lib/languages/css.js",
		39
	],
	"./css.js": [
		"./node_modules/highlight.js/lib/languages/css.js",
		39
	],
	"./d": [
		"./node_modules/highlight.js/lib/languages/d.js",
		40
	],
	"./d.js": [
		"./node_modules/highlight.js/lib/languages/d.js",
		40
	],
	"./dart": [
		"./node_modules/highlight.js/lib/languages/dart.js",
		41
	],
	"./dart.js": [
		"./node_modules/highlight.js/lib/languages/dart.js",
		41
	],
	"./delphi": [
		"./node_modules/highlight.js/lib/languages/delphi.js",
		42
	],
	"./delphi.js": [
		"./node_modules/highlight.js/lib/languages/delphi.js",
		42
	],
	"./diff": [
		"./node_modules/highlight.js/lib/languages/diff.js",
		43
	],
	"./diff.js": [
		"./node_modules/highlight.js/lib/languages/diff.js",
		43
	],
	"./django": [
		"./node_modules/highlight.js/lib/languages/django.js",
		44
	],
	"./django.js": [
		"./node_modules/highlight.js/lib/languages/django.js",
		44
	],
	"./dns": [
		"./node_modules/highlight.js/lib/languages/dns.js",
		45
	],
	"./dns.js": [
		"./node_modules/highlight.js/lib/languages/dns.js",
		45
	],
	"./dockerfile": [
		"./node_modules/highlight.js/lib/languages/dockerfile.js",
		46
	],
	"./dockerfile.js": [
		"./node_modules/highlight.js/lib/languages/dockerfile.js",
		46
	],
	"./dos": [
		"./node_modules/highlight.js/lib/languages/dos.js",
		47
	],
	"./dos.js": [
		"./node_modules/highlight.js/lib/languages/dos.js",
		47
	],
	"./dsconfig": [
		"./node_modules/highlight.js/lib/languages/dsconfig.js",
		48
	],
	"./dsconfig.js": [
		"./node_modules/highlight.js/lib/languages/dsconfig.js",
		48
	],
	"./dts": [
		"./node_modules/highlight.js/lib/languages/dts.js",
		49
	],
	"./dts.js": [
		"./node_modules/highlight.js/lib/languages/dts.js",
		49
	],
	"./dust": [
		"./node_modules/highlight.js/lib/languages/dust.js",
		50
	],
	"./dust.js": [
		"./node_modules/highlight.js/lib/languages/dust.js",
		50
	],
	"./ebnf": [
		"./node_modules/highlight.js/lib/languages/ebnf.js",
		51
	],
	"./ebnf.js": [
		"./node_modules/highlight.js/lib/languages/ebnf.js",
		51
	],
	"./elixir": [
		"./node_modules/highlight.js/lib/languages/elixir.js",
		52
	],
	"./elixir.js": [
		"./node_modules/highlight.js/lib/languages/elixir.js",
		52
	],
	"./elm": [
		"./node_modules/highlight.js/lib/languages/elm.js",
		53
	],
	"./elm.js": [
		"./node_modules/highlight.js/lib/languages/elm.js",
		53
	],
	"./erb": [
		"./node_modules/highlight.js/lib/languages/erb.js",
		54
	],
	"./erb.js": [
		"./node_modules/highlight.js/lib/languages/erb.js",
		54
	],
	"./erlang": [
		"./node_modules/highlight.js/lib/languages/erlang.js",
		56
	],
	"./erlang-repl": [
		"./node_modules/highlight.js/lib/languages/erlang-repl.js",
		55
	],
	"./erlang-repl.js": [
		"./node_modules/highlight.js/lib/languages/erlang-repl.js",
		55
	],
	"./erlang.js": [
		"./node_modules/highlight.js/lib/languages/erlang.js",
		56
	],
	"./excel": [
		"./node_modules/highlight.js/lib/languages/excel.js",
		57
	],
	"./excel.js": [
		"./node_modules/highlight.js/lib/languages/excel.js",
		57
	],
	"./fix": [
		"./node_modules/highlight.js/lib/languages/fix.js",
		58
	],
	"./fix.js": [
		"./node_modules/highlight.js/lib/languages/fix.js",
		58
	],
	"./flix": [
		"./node_modules/highlight.js/lib/languages/flix.js",
		59
	],
	"./flix.js": [
		"./node_modules/highlight.js/lib/languages/flix.js",
		59
	],
	"./fortran": [
		"./node_modules/highlight.js/lib/languages/fortran.js",
		60
	],
	"./fortran.js": [
		"./node_modules/highlight.js/lib/languages/fortran.js",
		60
	],
	"./fsharp": [
		"./node_modules/highlight.js/lib/languages/fsharp.js",
		61
	],
	"./fsharp.js": [
		"./node_modules/highlight.js/lib/languages/fsharp.js",
		61
	],
	"./gams": [
		"./node_modules/highlight.js/lib/languages/gams.js",
		62
	],
	"./gams.js": [
		"./node_modules/highlight.js/lib/languages/gams.js",
		62
	],
	"./gauss": [
		"./node_modules/highlight.js/lib/languages/gauss.js",
		63
	],
	"./gauss.js": [
		"./node_modules/highlight.js/lib/languages/gauss.js",
		63
	],
	"./gcode": [
		"./node_modules/highlight.js/lib/languages/gcode.js",
		64
	],
	"./gcode.js": [
		"./node_modules/highlight.js/lib/languages/gcode.js",
		64
	],
	"./gherkin": [
		"./node_modules/highlight.js/lib/languages/gherkin.js",
		65
	],
	"./gherkin.js": [
		"./node_modules/highlight.js/lib/languages/gherkin.js",
		65
	],
	"./glsl": [
		"./node_modules/highlight.js/lib/languages/glsl.js",
		66
	],
	"./glsl.js": [
		"./node_modules/highlight.js/lib/languages/glsl.js",
		66
	],
	"./gml": [
		"./node_modules/highlight.js/lib/languages/gml.js",
		67
	],
	"./gml.js": [
		"./node_modules/highlight.js/lib/languages/gml.js",
		67
	],
	"./go": [
		"./node_modules/highlight.js/lib/languages/go.js",
		68
	],
	"./go.js": [
		"./node_modules/highlight.js/lib/languages/go.js",
		68
	],
	"./golo": [
		"./node_modules/highlight.js/lib/languages/golo.js",
		69
	],
	"./golo.js": [
		"./node_modules/highlight.js/lib/languages/golo.js",
		69
	],
	"./gradle": [
		"./node_modules/highlight.js/lib/languages/gradle.js",
		70
	],
	"./gradle.js": [
		"./node_modules/highlight.js/lib/languages/gradle.js",
		70
	],
	"./groovy": [
		"./node_modules/highlight.js/lib/languages/groovy.js",
		71
	],
	"./groovy.js": [
		"./node_modules/highlight.js/lib/languages/groovy.js",
		71
	],
	"./haml": [
		"./node_modules/highlight.js/lib/languages/haml.js",
		72
	],
	"./haml.js": [
		"./node_modules/highlight.js/lib/languages/haml.js",
		72
	],
	"./handlebars": [
		"./node_modules/highlight.js/lib/languages/handlebars.js",
		73
	],
	"./handlebars.js": [
		"./node_modules/highlight.js/lib/languages/handlebars.js",
		73
	],
	"./haskell": [
		"./node_modules/highlight.js/lib/languages/haskell.js",
		74
	],
	"./haskell.js": [
		"./node_modules/highlight.js/lib/languages/haskell.js",
		74
	],
	"./haxe": [
		"./node_modules/highlight.js/lib/languages/haxe.js",
		75
	],
	"./haxe.js": [
		"./node_modules/highlight.js/lib/languages/haxe.js",
		75
	],
	"./hsp": [
		"./node_modules/highlight.js/lib/languages/hsp.js",
		76
	],
	"./hsp.js": [
		"./node_modules/highlight.js/lib/languages/hsp.js",
		76
	],
	"./htmlbars": [
		"./node_modules/highlight.js/lib/languages/htmlbars.js",
		77
	],
	"./htmlbars.js": [
		"./node_modules/highlight.js/lib/languages/htmlbars.js",
		77
	],
	"./http": [
		"./node_modules/highlight.js/lib/languages/http.js",
		78
	],
	"./http.js": [
		"./node_modules/highlight.js/lib/languages/http.js",
		78
	],
	"./hy": [
		"./node_modules/highlight.js/lib/languages/hy.js",
		79
	],
	"./hy.js": [
		"./node_modules/highlight.js/lib/languages/hy.js",
		79
	],
	"./inform7": [
		"./node_modules/highlight.js/lib/languages/inform7.js",
		80
	],
	"./inform7.js": [
		"./node_modules/highlight.js/lib/languages/inform7.js",
		80
	],
	"./ini": [
		"./node_modules/highlight.js/lib/languages/ini.js",
		81
	],
	"./ini.js": [
		"./node_modules/highlight.js/lib/languages/ini.js",
		81
	],
	"./irpf90": [
		"./node_modules/highlight.js/lib/languages/irpf90.js",
		82
	],
	"./irpf90.js": [
		"./node_modules/highlight.js/lib/languages/irpf90.js",
		82
	],
	"./isbl": [
		"./node_modules/highlight.js/lib/languages/isbl.js",
		83
	],
	"./isbl.js": [
		"./node_modules/highlight.js/lib/languages/isbl.js",
		83
	],
	"./java": [
		"./node_modules/highlight.js/lib/languages/java.js",
		84
	],
	"./java.js": [
		"./node_modules/highlight.js/lib/languages/java.js",
		84
	],
	"./javascript": [
		"./node_modules/highlight.js/lib/languages/javascript.js",
		85
	],
	"./javascript.js": [
		"./node_modules/highlight.js/lib/languages/javascript.js",
		85
	],
	"./jboss-cli": [
		"./node_modules/highlight.js/lib/languages/jboss-cli.js",
		86
	],
	"./jboss-cli.js": [
		"./node_modules/highlight.js/lib/languages/jboss-cli.js",
		86
	],
	"./json": [
		"./node_modules/highlight.js/lib/languages/json.js",
		87
	],
	"./json.js": [
		"./node_modules/highlight.js/lib/languages/json.js",
		87
	],
	"./julia": [
		"./node_modules/highlight.js/lib/languages/julia.js",
		89
	],
	"./julia-repl": [
		"./node_modules/highlight.js/lib/languages/julia-repl.js",
		88
	],
	"./julia-repl.js": [
		"./node_modules/highlight.js/lib/languages/julia-repl.js",
		88
	],
	"./julia.js": [
		"./node_modules/highlight.js/lib/languages/julia.js",
		89
	],
	"./kotlin": [
		"./node_modules/highlight.js/lib/languages/kotlin.js",
		90
	],
	"./kotlin.js": [
		"./node_modules/highlight.js/lib/languages/kotlin.js",
		90
	],
	"./lasso": [
		"./node_modules/highlight.js/lib/languages/lasso.js",
		91
	],
	"./lasso.js": [
		"./node_modules/highlight.js/lib/languages/lasso.js",
		91
	],
	"./latex": [
		"./node_modules/highlight.js/lib/languages/latex.js",
		92
	],
	"./latex.js": [
		"./node_modules/highlight.js/lib/languages/latex.js",
		92
	],
	"./ldif": [
		"./node_modules/highlight.js/lib/languages/ldif.js",
		93
	],
	"./ldif.js": [
		"./node_modules/highlight.js/lib/languages/ldif.js",
		93
	],
	"./leaf": [
		"./node_modules/highlight.js/lib/languages/leaf.js",
		94
	],
	"./leaf.js": [
		"./node_modules/highlight.js/lib/languages/leaf.js",
		94
	],
	"./less": [
		"./node_modules/highlight.js/lib/languages/less.js",
		95
	],
	"./less.js": [
		"./node_modules/highlight.js/lib/languages/less.js",
		95
	],
	"./lisp": [
		"./node_modules/highlight.js/lib/languages/lisp.js",
		96
	],
	"./lisp.js": [
		"./node_modules/highlight.js/lib/languages/lisp.js",
		96
	],
	"./livecodeserver": [
		"./node_modules/highlight.js/lib/languages/livecodeserver.js",
		97
	],
	"./livecodeserver.js": [
		"./node_modules/highlight.js/lib/languages/livecodeserver.js",
		97
	],
	"./livescript": [
		"./node_modules/highlight.js/lib/languages/livescript.js",
		98
	],
	"./livescript.js": [
		"./node_modules/highlight.js/lib/languages/livescript.js",
		98
	],
	"./llvm": [
		"./node_modules/highlight.js/lib/languages/llvm.js",
		99
	],
	"./llvm.js": [
		"./node_modules/highlight.js/lib/languages/llvm.js",
		99
	],
	"./lsl": [
		"./node_modules/highlight.js/lib/languages/lsl.js",
		100
	],
	"./lsl.js": [
		"./node_modules/highlight.js/lib/languages/lsl.js",
		100
	],
	"./lua": [
		"./node_modules/highlight.js/lib/languages/lua.js",
		101
	],
	"./lua.js": [
		"./node_modules/highlight.js/lib/languages/lua.js",
		101
	],
	"./makefile": [
		"./node_modules/highlight.js/lib/languages/makefile.js",
		102
	],
	"./makefile.js": [
		"./node_modules/highlight.js/lib/languages/makefile.js",
		102
	],
	"./markdown": [
		"./node_modules/highlight.js/lib/languages/markdown.js",
		103
	],
	"./markdown.js": [
		"./node_modules/highlight.js/lib/languages/markdown.js",
		103
	],
	"./mathematica": [
		"./node_modules/highlight.js/lib/languages/mathematica.js",
		104
	],
	"./mathematica.js": [
		"./node_modules/highlight.js/lib/languages/mathematica.js",
		104
	],
	"./matlab": [
		"./node_modules/highlight.js/lib/languages/matlab.js",
		105
	],
	"./matlab.js": [
		"./node_modules/highlight.js/lib/languages/matlab.js",
		105
	],
	"./maxima": [
		"./node_modules/highlight.js/lib/languages/maxima.js",
		106
	],
	"./maxima.js": [
		"./node_modules/highlight.js/lib/languages/maxima.js",
		106
	],
	"./mel": [
		"./node_modules/highlight.js/lib/languages/mel.js",
		107
	],
	"./mel.js": [
		"./node_modules/highlight.js/lib/languages/mel.js",
		107
	],
	"./mercury": [
		"./node_modules/highlight.js/lib/languages/mercury.js",
		108
	],
	"./mercury.js": [
		"./node_modules/highlight.js/lib/languages/mercury.js",
		108
	],
	"./mipsasm": [
		"./node_modules/highlight.js/lib/languages/mipsasm.js",
		109
	],
	"./mipsasm.js": [
		"./node_modules/highlight.js/lib/languages/mipsasm.js",
		109
	],
	"./mizar": [
		"./node_modules/highlight.js/lib/languages/mizar.js",
		110
	],
	"./mizar.js": [
		"./node_modules/highlight.js/lib/languages/mizar.js",
		110
	],
	"./mojolicious": [
		"./node_modules/highlight.js/lib/languages/mojolicious.js",
		111
	],
	"./mojolicious.js": [
		"./node_modules/highlight.js/lib/languages/mojolicious.js",
		111
	],
	"./monkey": [
		"./node_modules/highlight.js/lib/languages/monkey.js",
		112
	],
	"./monkey.js": [
		"./node_modules/highlight.js/lib/languages/monkey.js",
		112
	],
	"./moonscript": [
		"./node_modules/highlight.js/lib/languages/moonscript.js",
		113
	],
	"./moonscript.js": [
		"./node_modules/highlight.js/lib/languages/moonscript.js",
		113
	],
	"./n1ql": [
		"./node_modules/highlight.js/lib/languages/n1ql.js",
		114
	],
	"./n1ql.js": [
		"./node_modules/highlight.js/lib/languages/n1ql.js",
		114
	],
	"./nginx": [
		"./node_modules/highlight.js/lib/languages/nginx.js",
		115
	],
	"./nginx.js": [
		"./node_modules/highlight.js/lib/languages/nginx.js",
		115
	],
	"./nim": [
		"./node_modules/highlight.js/lib/languages/nim.js",
		116
	],
	"./nim.js": [
		"./node_modules/highlight.js/lib/languages/nim.js",
		116
	],
	"./nix": [
		"./node_modules/highlight.js/lib/languages/nix.js",
		117
	],
	"./nix.js": [
		"./node_modules/highlight.js/lib/languages/nix.js",
		117
	],
	"./node-repl": [
		"./node_modules/highlight.js/lib/languages/node-repl.js",
		118
	],
	"./node-repl.js": [
		"./node_modules/highlight.js/lib/languages/node-repl.js",
		118
	],
	"./nsis": [
		"./node_modules/highlight.js/lib/languages/nsis.js",
		119
	],
	"./nsis.js": [
		"./node_modules/highlight.js/lib/languages/nsis.js",
		119
	],
	"./objectivec": [
		"./node_modules/highlight.js/lib/languages/objectivec.js",
		120
	],
	"./objectivec.js": [
		"./node_modules/highlight.js/lib/languages/objectivec.js",
		120
	],
	"./ocaml": [
		"./node_modules/highlight.js/lib/languages/ocaml.js",
		121
	],
	"./ocaml.js": [
		"./node_modules/highlight.js/lib/languages/ocaml.js",
		121
	],
	"./openscad": [
		"./node_modules/highlight.js/lib/languages/openscad.js",
		122
	],
	"./openscad.js": [
		"./node_modules/highlight.js/lib/languages/openscad.js",
		122
	],
	"./oxygene": [
		"./node_modules/highlight.js/lib/languages/oxygene.js",
		123
	],
	"./oxygene.js": [
		"./node_modules/highlight.js/lib/languages/oxygene.js",
		123
	],
	"./parser3": [
		"./node_modules/highlight.js/lib/languages/parser3.js",
		124
	],
	"./parser3.js": [
		"./node_modules/highlight.js/lib/languages/parser3.js",
		124
	],
	"./perl": [
		"./node_modules/highlight.js/lib/languages/perl.js",
		125
	],
	"./perl.js": [
		"./node_modules/highlight.js/lib/languages/perl.js",
		125
	],
	"./pf": [
		"./node_modules/highlight.js/lib/languages/pf.js",
		126
	],
	"./pf.js": [
		"./node_modules/highlight.js/lib/languages/pf.js",
		126
	],
	"./pgsql": [
		"./node_modules/highlight.js/lib/languages/pgsql.js",
		127
	],
	"./pgsql.js": [
		"./node_modules/highlight.js/lib/languages/pgsql.js",
		127
	],
	"./php": [
		"./node_modules/highlight.js/lib/languages/php.js",
		129
	],
	"./php-template": [
		"./node_modules/highlight.js/lib/languages/php-template.js",
		128
	],
	"./php-template.js": [
		"./node_modules/highlight.js/lib/languages/php-template.js",
		128
	],
	"./php.js": [
		"./node_modules/highlight.js/lib/languages/php.js",
		129
	],
	"./plaintext": [
		"./node_modules/highlight.js/lib/languages/plaintext.js",
		130
	],
	"./plaintext.js": [
		"./node_modules/highlight.js/lib/languages/plaintext.js",
		130
	],
	"./pony": [
		"./node_modules/highlight.js/lib/languages/pony.js",
		131
	],
	"./pony.js": [
		"./node_modules/highlight.js/lib/languages/pony.js",
		131
	],
	"./powershell": [
		"./node_modules/highlight.js/lib/languages/powershell.js",
		132
	],
	"./powershell.js": [
		"./node_modules/highlight.js/lib/languages/powershell.js",
		132
	],
	"./processing": [
		"./node_modules/highlight.js/lib/languages/processing.js",
		133
	],
	"./processing.js": [
		"./node_modules/highlight.js/lib/languages/processing.js",
		133
	],
	"./profile": [
		"./node_modules/highlight.js/lib/languages/profile.js",
		134
	],
	"./profile.js": [
		"./node_modules/highlight.js/lib/languages/profile.js",
		134
	],
	"./prolog": [
		"./node_modules/highlight.js/lib/languages/prolog.js",
		135
	],
	"./prolog.js": [
		"./node_modules/highlight.js/lib/languages/prolog.js",
		135
	],
	"./properties": [
		"./node_modules/highlight.js/lib/languages/properties.js",
		136
	],
	"./properties.js": [
		"./node_modules/highlight.js/lib/languages/properties.js",
		136
	],
	"./protobuf": [
		"./node_modules/highlight.js/lib/languages/protobuf.js",
		137
	],
	"./protobuf.js": [
		"./node_modules/highlight.js/lib/languages/protobuf.js",
		137
	],
	"./puppet": [
		"./node_modules/highlight.js/lib/languages/puppet.js",
		138
	],
	"./puppet.js": [
		"./node_modules/highlight.js/lib/languages/puppet.js",
		138
	],
	"./purebasic": [
		"./node_modules/highlight.js/lib/languages/purebasic.js",
		139
	],
	"./purebasic.js": [
		"./node_modules/highlight.js/lib/languages/purebasic.js",
		139
	],
	"./python": [
		"./node_modules/highlight.js/lib/languages/python.js",
		141
	],
	"./python-repl": [
		"./node_modules/highlight.js/lib/languages/python-repl.js",
		140
	],
	"./python-repl.js": [
		"./node_modules/highlight.js/lib/languages/python-repl.js",
		140
	],
	"./python.js": [
		"./node_modules/highlight.js/lib/languages/python.js",
		141
	],
	"./q": [
		"./node_modules/highlight.js/lib/languages/q.js",
		142
	],
	"./q.js": [
		"./node_modules/highlight.js/lib/languages/q.js",
		142
	],
	"./qml": [
		"./node_modules/highlight.js/lib/languages/qml.js",
		143
	],
	"./qml.js": [
		"./node_modules/highlight.js/lib/languages/qml.js",
		143
	],
	"./r": [
		"./node_modules/highlight.js/lib/languages/r.js",
		144
	],
	"./r.js": [
		"./node_modules/highlight.js/lib/languages/r.js",
		144
	],
	"./reasonml": [
		"./node_modules/highlight.js/lib/languages/reasonml.js",
		145
	],
	"./reasonml.js": [
		"./node_modules/highlight.js/lib/languages/reasonml.js",
		145
	],
	"./rib": [
		"./node_modules/highlight.js/lib/languages/rib.js",
		146
	],
	"./rib.js": [
		"./node_modules/highlight.js/lib/languages/rib.js",
		146
	],
	"./roboconf": [
		"./node_modules/highlight.js/lib/languages/roboconf.js",
		147
	],
	"./roboconf.js": [
		"./node_modules/highlight.js/lib/languages/roboconf.js",
		147
	],
	"./routeros": [
		"./node_modules/highlight.js/lib/languages/routeros.js",
		148
	],
	"./routeros.js": [
		"./node_modules/highlight.js/lib/languages/routeros.js",
		148
	],
	"./rsl": [
		"./node_modules/highlight.js/lib/languages/rsl.js",
		149
	],
	"./rsl.js": [
		"./node_modules/highlight.js/lib/languages/rsl.js",
		149
	],
	"./ruby": [
		"./node_modules/highlight.js/lib/languages/ruby.js",
		150
	],
	"./ruby.js": [
		"./node_modules/highlight.js/lib/languages/ruby.js",
		150
	],
	"./ruleslanguage": [
		"./node_modules/highlight.js/lib/languages/ruleslanguage.js",
		151
	],
	"./ruleslanguage.js": [
		"./node_modules/highlight.js/lib/languages/ruleslanguage.js",
		151
	],
	"./rust": [
		"./node_modules/highlight.js/lib/languages/rust.js",
		152
	],
	"./rust.js": [
		"./node_modules/highlight.js/lib/languages/rust.js",
		152
	],
	"./sas": [
		"./node_modules/highlight.js/lib/languages/sas.js",
		153
	],
	"./sas.js": [
		"./node_modules/highlight.js/lib/languages/sas.js",
		153
	],
	"./scala": [
		"./node_modules/highlight.js/lib/languages/scala.js",
		154
	],
	"./scala.js": [
		"./node_modules/highlight.js/lib/languages/scala.js",
		154
	],
	"./scheme": [
		"./node_modules/highlight.js/lib/languages/scheme.js",
		155
	],
	"./scheme.js": [
		"./node_modules/highlight.js/lib/languages/scheme.js",
		155
	],
	"./scilab": [
		"./node_modules/highlight.js/lib/languages/scilab.js",
		156
	],
	"./scilab.js": [
		"./node_modules/highlight.js/lib/languages/scilab.js",
		156
	],
	"./scss": [
		"./node_modules/highlight.js/lib/languages/scss.js",
		157
	],
	"./scss.js": [
		"./node_modules/highlight.js/lib/languages/scss.js",
		157
	],
	"./shell": [
		"./node_modules/highlight.js/lib/languages/shell.js",
		158
	],
	"./shell.js": [
		"./node_modules/highlight.js/lib/languages/shell.js",
		158
	],
	"./smali": [
		"./node_modules/highlight.js/lib/languages/smali.js",
		159
	],
	"./smali.js": [
		"./node_modules/highlight.js/lib/languages/smali.js",
		159
	],
	"./smalltalk": [
		"./node_modules/highlight.js/lib/languages/smalltalk.js",
		160
	],
	"./smalltalk.js": [
		"./node_modules/highlight.js/lib/languages/smalltalk.js",
		160
	],
	"./sml": [
		"./node_modules/highlight.js/lib/languages/sml.js",
		161
	],
	"./sml.js": [
		"./node_modules/highlight.js/lib/languages/sml.js",
		161
	],
	"./sqf": [
		"./node_modules/highlight.js/lib/languages/sqf.js",
		162
	],
	"./sqf.js": [
		"./node_modules/highlight.js/lib/languages/sqf.js",
		162
	],
	"./sql": [
		"./node_modules/highlight.js/lib/languages/sql.js",
		163
	],
	"./sql.js": [
		"./node_modules/highlight.js/lib/languages/sql.js",
		163
	],
	"./sql_more": [
		"./node_modules/highlight.js/lib/languages/sql_more.js",
		164
	],
	"./sql_more.js": [
		"./node_modules/highlight.js/lib/languages/sql_more.js",
		164
	],
	"./stan": [
		"./node_modules/highlight.js/lib/languages/stan.js",
		165
	],
	"./stan.js": [
		"./node_modules/highlight.js/lib/languages/stan.js",
		165
	],
	"./stata": [
		"./node_modules/highlight.js/lib/languages/stata.js",
		166
	],
	"./stata.js": [
		"./node_modules/highlight.js/lib/languages/stata.js",
		166
	],
	"./step21": [
		"./node_modules/highlight.js/lib/languages/step21.js",
		167
	],
	"./step21.js": [
		"./node_modules/highlight.js/lib/languages/step21.js",
		167
	],
	"./stylus": [
		"./node_modules/highlight.js/lib/languages/stylus.js",
		168
	],
	"./stylus.js": [
		"./node_modules/highlight.js/lib/languages/stylus.js",
		168
	],
	"./subunit": [
		"./node_modules/highlight.js/lib/languages/subunit.js",
		169
	],
	"./subunit.js": [
		"./node_modules/highlight.js/lib/languages/subunit.js",
		169
	],
	"./swift": [
		"./node_modules/highlight.js/lib/languages/swift.js",
		170
	],
	"./swift.js": [
		"./node_modules/highlight.js/lib/languages/swift.js",
		170
	],
	"./taggerscript": [
		"./node_modules/highlight.js/lib/languages/taggerscript.js",
		171
	],
	"./taggerscript.js": [
		"./node_modules/highlight.js/lib/languages/taggerscript.js",
		171
	],
	"./tap": [
		"./node_modules/highlight.js/lib/languages/tap.js",
		172
	],
	"./tap.js": [
		"./node_modules/highlight.js/lib/languages/tap.js",
		172
	],
	"./tcl": [
		"./node_modules/highlight.js/lib/languages/tcl.js",
		173
	],
	"./tcl.js": [
		"./node_modules/highlight.js/lib/languages/tcl.js",
		173
	],
	"./thrift": [
		"./node_modules/highlight.js/lib/languages/thrift.js",
		174
	],
	"./thrift.js": [
		"./node_modules/highlight.js/lib/languages/thrift.js",
		174
	],
	"./tp": [
		"./node_modules/highlight.js/lib/languages/tp.js",
		175
	],
	"./tp.js": [
		"./node_modules/highlight.js/lib/languages/tp.js",
		175
	],
	"./twig": [
		"./node_modules/highlight.js/lib/languages/twig.js",
		176
	],
	"./twig.js": [
		"./node_modules/highlight.js/lib/languages/twig.js",
		176
	],
	"./typescript": [
		"./node_modules/highlight.js/lib/languages/typescript.js",
		177
	],
	"./typescript.js": [
		"./node_modules/highlight.js/lib/languages/typescript.js",
		177
	],
	"./vala": [
		"./node_modules/highlight.js/lib/languages/vala.js",
		178
	],
	"./vala.js": [
		"./node_modules/highlight.js/lib/languages/vala.js",
		178
	],
	"./vbnet": [
		"./node_modules/highlight.js/lib/languages/vbnet.js",
		179
	],
	"./vbnet.js": [
		"./node_modules/highlight.js/lib/languages/vbnet.js",
		179
	],
	"./vbscript": [
		"./node_modules/highlight.js/lib/languages/vbscript.js",
		181
	],
	"./vbscript-html": [
		"./node_modules/highlight.js/lib/languages/vbscript-html.js",
		180
	],
	"./vbscript-html.js": [
		"./node_modules/highlight.js/lib/languages/vbscript-html.js",
		180
	],
	"./vbscript.js": [
		"./node_modules/highlight.js/lib/languages/vbscript.js",
		181
	],
	"./verilog": [
		"./node_modules/highlight.js/lib/languages/verilog.js",
		182
	],
	"./verilog.js": [
		"./node_modules/highlight.js/lib/languages/verilog.js",
		182
	],
	"./vhdl": [
		"./node_modules/highlight.js/lib/languages/vhdl.js",
		183
	],
	"./vhdl.js": [
		"./node_modules/highlight.js/lib/languages/vhdl.js",
		183
	],
	"./vim": [
		"./node_modules/highlight.js/lib/languages/vim.js",
		184
	],
	"./vim.js": [
		"./node_modules/highlight.js/lib/languages/vim.js",
		184
	],
	"./x86asm": [
		"./node_modules/highlight.js/lib/languages/x86asm.js",
		185
	],
	"./x86asm.js": [
		"./node_modules/highlight.js/lib/languages/x86asm.js",
		185
	],
	"./xl": [
		"./node_modules/highlight.js/lib/languages/xl.js",
		186
	],
	"./xl.js": [
		"./node_modules/highlight.js/lib/languages/xl.js",
		186
	],
	"./xml": [
		"./node_modules/highlight.js/lib/languages/xml.js",
		187
	],
	"./xml.js": [
		"./node_modules/highlight.js/lib/languages/xml.js",
		187
	],
	"./xquery": [
		"./node_modules/highlight.js/lib/languages/xquery.js",
		188
	],
	"./xquery.js": [
		"./node_modules/highlight.js/lib/languages/xquery.js",
		188
	],
	"./yaml": [
		"./node_modules/highlight.js/lib/languages/yaml.js",
		189
	],
	"./yaml.js": [
		"./node_modules/highlight.js/lib/languages/yaml.js",
		189
	],
	"./zephir": [
		"./node_modules/highlight.js/lib/languages/zephir.js",
		190
	],
	"./zephir.js": [
		"./node_modules/highlight.js/lib/languages/zephir.js",
		190
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__.t(id, 7);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./node_modules/highlight.js/lib/languages lazy recursive ^\\.\\/.*$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  }).then(success => {
    if (!success) return;

    if (scroll) {
      // FIXME: proper route announcing at Router level, not Link:
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/router/utils/get-asset-path-from-route */ "../next-server/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
}

function idleTimeout(ms, err) {
  return new Promise((_resolve, reject) => (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => reject(err), ms)));
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return Promise.race([onBuildManifest, idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')))]);
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute.default)(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await Promise.race([this.whenEntrypoint(route), idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)))]);
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isLocaleDomain'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.pathname, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.pathname, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search);
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    } // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated


    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    }

    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://err.sh/next.js/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

            this._resolveHref(parsedHref, pages, false);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        } // handle SSG data 404


        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;
      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (isValidShallowRoute || !options.scroll ? null : {
        x: 0,
        y: 0
      })).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    parsedHref.pathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)(parsedHref.pathname);
    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages, false);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (true) {
      return;
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader._isSsg(url).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, asPath, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

function resolveRewrites() {}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) != null && _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default, getServerSideProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Main; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-state-tree */ "mobx-state-tree");
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_base64_base64UrlEncode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/base64/base64UrlEncode */ "./common/base64/base64UrlEncode.ts");
/* harmony import */ var _common_modal_ModalManagerContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/modal/ModalManagerContext */ "./common/modal/ModalManagerContext.tsx");
/* harmony import */ var _common_page_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/page/Footer */ "./common/page/Footer.tsx");
/* harmony import */ var _common_page_Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/page/Header */ "./common/page/Header.tsx");
/* harmony import */ var _common_page_PageHead__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/page/PageHead */ "./common/page/PageHead.tsx");
/* harmony import */ var _common_settings_PreferencesModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/settings/PreferencesModal */ "./common/settings/PreferencesModal.tsx");
/* harmony import */ var _common_state_useAutorun__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/state/useAutorun */ "./common/state/useAutorun.ts");
/* harmony import */ var _common_state_useLazyValue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/state/useLazyValue */ "./common/state/useLazyValue.ts");
/* harmony import */ var _common_state_useRequiredContext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common/state/useRequiredContext */ "./common/state/useRequiredContext.ts");
/* harmony import */ var _common_utilities_timeout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../common/utilities/timeout */ "./common/utilities/timeout.ts");
/* harmony import */ var _modules_editor_Editor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../modules/editor/Editor */ "./modules/editor/Editor.tsx");
/* harmony import */ var _modules_editor_EditorManager__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../modules/editor/EditorManager */ "./modules/editor/EditorManager.ts");
/* harmony import */ var _modules_editor_EditorManagerContext__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../modules/editor/EditorManagerContext */ "./modules/editor/EditorManagerContext.tsx");
/* harmony import */ var _modules_editor_getEditorManagerFromQuery__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../modules/editor/getEditorManagerFromQuery */ "./modules/editor/getEditorManagerFromQuery.ts");
/* harmony import */ var _modules_message_preview_Preview__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../modules/message/preview/Preview */ "./modules/message/preview/Preview.tsx");

var _jsxFileName = "F:\\DiscordHookSite\\pages\\index.tsx";



















const Container = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "pages__Container",
  componentId: "nf398x-0"
})(["display:flex;flex-direction:column;height:100%;"]);
const View = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.main.attrs({
  translate: "no"
}).withConfig({
  displayName: "pages__View",
  componentId: "nf398x-1"
})(["max-height:calc(100% - 48px);display:flex;flex-direction:row-reverse;align-items:stretch;flex:1;& > *{flex:1;height:100%;overflow-y:scroll;}"]);
function Main(props) {
  const {
    state,
    mobile
  } = props;
  const editorManager = Object(_common_state_useLazyValue__WEBPACK_IMPORTED_MODULE_12__["useLazyValue"])(() => _modules_editor_EditorManager__WEBPACK_IMPORTED_MODULE_16__["EditorManager"].create(state));
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => () => Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__["destroy"])(editorManager), [editorManager]);
  const cancelRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  Object(_common_state_useAutorun__WEBPACK_IMPORTED_MODULE_11__["useAutorun"])(() => {
    var _cancelRef$current;

    const messages = editorManager.messages.map(message => ({
      data: message.data
    }));
    (_cancelRef$current = cancelRef.current) === null || _cancelRef$current === void 0 ? void 0 : _cancelRef$current.call(cancelRef);
    cancelRef.current = Object(_common_utilities_timeout__WEBPACK_IMPORTED_MODULE_14__["timeout"])(() => {
      const json = JSON.stringify({
        messages
      });
      const base64 = Object(_common_base64_base64UrlEncode__WEBPACK_IMPORTED_MODULE_5__["base64UrlEncode"])(json);
      history.replaceState({
        __N: false
      }, "", `/?data=${base64}`);
    }, 500);
  });
  const {
    0: activeTab,
    1: setActiveTab
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])("Preview");
  const modalManager = Object(_common_state_useRequiredContext__WEBPACK_IMPORTED_MODULE_13__["useRequiredContext"])(_common_modal_ModalManagerContext__WEBPACK_IMPORTED_MODULE_6__["ModalManagerContext"]);

  const spawnSettingsModal = () => modalManager.spawn({
    render: () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_settings_PreferencesModal__WEBPACK_IMPORTED_MODULE_10__["PreferencesModal"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 40
    }, this)
  });

  return Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__["useObserver"])(() => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_modules_editor_EditorManagerContext__WEBPACK_IMPORTED_MODULE_17__["EditorManagerProvider"], {
    value: editorManager,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_page_PageHead__WEBPACK_IMPORTED_MODULE_9__["PageHead"], {
      title: "Builder",
      description: "Embed Builder",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "referrer",
        content: "strict-origin"
      }, "referrer", false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Container, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_page_Header__WEBPACK_IMPORTED_MODULE_8__["Header"], {
        items: [{
          name: "Settings",
          handler: spawnSettingsModal
        }],
        tabs: mobile ? {
          items: ["Editor", "Preview"],
          current: activeTab,
          onChange: setActiveTab
        } : undefined
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(View, {
        children: [(!mobile || activeTab === "Preview") && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_modules_message_preview_Preview__WEBPACK_IMPORTED_MODULE_19__["Preview"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 13
        }, this), (!mobile || activeTab === "Editor") && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_modules_editor_Editor__WEBPACK_IMPORTED_MODULE_15__["Editor"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_page_Footer__WEBPACK_IMPORTED_MODULE_7__["Footer"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 78,
    columnNumber: 5
  }, this));
}
const getServerSideProps = context => {
  var _context$req$headers$;

  return {
    props: {
      state: Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__["getSnapshot"])(Object(_modules_editor_getEditorManagerFromQuery__WEBPACK_IMPORTED_MODULE_18__["getEditorManagerFromQuery"])(context.query)),
      mobile: /mobile/i.test((_context$req$headers$ = context.req.headers["user-agent"]) !== null && _context$req$headers$ !== void 0 ? _context$req$headers$ : "")
    }
  };
};

/***/ }),

/***/ "@reach/slider":
/*!********************************!*\
  !*** external "@reach/slider" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@reach/slider");

/***/ }),

/***/ "@reach/tabs":
/*!******************************!*\
  !*** external "@reach/tabs" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@reach/tabs");

/***/ }),

/***/ "@react-spring/web":
/*!************************************!*\
  !*** external "@react-spring/web" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@react-spring/web");

/***/ }),

/***/ "date-fns":
/*!***************************!*\
  !*** external "date-fns" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("date-fns");

/***/ }),

/***/ "highlight.js/lib/core":
/*!****************************************!*\
  !*** external "highlight.js/lib/core" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("highlight.js/lib/core");

/***/ }),

/***/ "idb":
/*!**********************!*\
  !*** external "idb" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("idb");

/***/ }),

/***/ "mobx":
/*!***********************!*\
  !*** external "mobx" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mobx");

/***/ }),

/***/ "mobx-react-lite":
/*!**********************************!*\
  !*** external "mobx-react-lite" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mobx-react-lite");

/***/ }),

/***/ "mobx-state-tree":
/*!**********************************!*\
  !*** external "mobx-state-tree" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mobx-state-tree");

/***/ }),

/***/ "mstform":
/*!**************************!*\
  !*** external "mstform" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mstform");

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "polished":
/*!***************************!*\
  !*** external "polished" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("polished");

/***/ }),

/***/ "punycode":
/*!***************************!*\
  !*** external "punycode" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("punycode");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-merge-refs":
/*!***********************************!*\
  !*** external "react-merge-refs" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-merge-refs");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "resize-observer-polyfill":
/*!*******************************************!*\
  !*** external "resize-observer-polyfill" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("resize-observer-polyfill");

/***/ }),

/***/ "simple-markdown":
/*!**********************************!*\
  !*** external "simple-markdown" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("simple-markdown");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });