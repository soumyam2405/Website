(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[194],{

/***/ "./common/dom/downloadBlob.ts":
/*!************************************!*\
  !*** ./common/dom/downloadBlob.ts ***!
  \************************************/
/*! exports provided: downloadBlob */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "downloadBlob", function() { return downloadBlob; });
const downloadBlob = (blob, name) => {
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  document.body.append(anchor);
  anchor.href = url;
  anchor.download = name;
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
};

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./common/object/mapKeys.ts":
/*!**********************************!*\
  !*** ./common/object/mapKeys.ts ***!
  \**********************************/
/*! exports provided: mapKeys */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapKeys", function() { return mapKeys; });
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

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./common/object/toSnakeCase.ts":
/*!**************************************!*\
  !*** ./common/object/toSnakeCase.ts ***!
  \**************************************/
/*! exports provided: toSnakeCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toSnakeCase", function() { return toSnakeCase; });
/* harmony import */ var _mapKeys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mapKeys */ "./common/object/mapKeys.ts");

const toSnakeCase = object => Object(_mapKeys__WEBPACK_IMPORTED_MODULE_0__["mapKeys"])(object, key => key.replace(/[A-Z]/g, match => `_${match.toLowerCase()}`));

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./icons/save.tsx":
/*!************************!*\
  !*** ./icons/save.tsx ***!
  \************************/
/*! exports provided: save */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "save", function() { return save; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "F:\\DiscordHookSite\\icons\\save.tsx";

const save = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
    d: "M11 15V9H5V15M5 1L4.99999 5H10M13.6667 15H2.33333C1.97971 15 1.64057 14.8595 1.39052 14.6095C1.14048 14.3594 1 14.0203 1 13.6667V2.33333C1 1.97971 1.14048 1.64057 1.39052 1.39052C1.64057 1.14048 1.97971 1 2.33333 1H11.6667L15 4.33333V13.6667C15 14.0203 14.8595 14.3594 14.6095 14.6095C14.3594 14.8595 14.0203 15 13.6667 15Z",
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

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./icons/trash.tsx":
/*!*************************!*\
  !*** ./icons/trash.tsx ***!
  \*************************/
/*! exports provided: trash */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trash", function() { return trash; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "F:\\DiscordHookSite\\icons\\trash.tsx";

const trash = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
    d: "M1 4L2.99999 3.99998M2.99999 3.99998V13.5C2.99999 14.3284 3.67156 15 4.49999 15L11.5 15C12.3284 15 13 14.3284 13 13.5V4M2.99999 3.99998H5.33333M13 4H15M13 4L10.6667 3.99998M5.33333 3.99998V2.5C5.33333 1.67157 6.00491 1 6.83333 1H9.16667C9.99509 1 10.6667 1.67157 10.6667 2.5V3.99998M5.33333 3.99998H10.6667",
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

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./icons/upload.tsx":
/*!**************************!*\
  !*** ./icons/upload.tsx ***!
  \**************************/
/*! exports provided: upload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "upload", function() { return upload; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "F:\\DiscordHookSite\\icons\\upload.tsx";

const upload = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
    d: "M14 10V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V10M4.66667 5.33333L8 2M8 2L11.3333 5.33333M8 2V10",
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

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./modules/database/DatabaseManager.ts":
/*!*********************************************!*\
  !*** ./modules/database/DatabaseManager.ts ***!
  \*********************************************/
/*! exports provided: DatabaseManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseManager", function() { return DatabaseManager; });
/* harmony import */ var F_DiscordHookSite_node_modules_next_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/initializerDefineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/initializerDefineProperty.js");
/* harmony import */ var F_DiscordHookSite_node_modules_next_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/applyDecoratedDescriptor */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/applyDecoratedDescriptor.js");
/* harmony import */ var F_DiscordHookSite_node_modules_next_node_modules_babel_runtime_helpers_esm_initializerWarningHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/initializerWarningHelper */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/initializerWarningHelper.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var _connection_openDatabase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./connection/openDatabase */ "./modules/database/connection/openDatabase.ts");




var _class, _descriptor, _descriptor2, _temp;



let DatabaseManager = (_class = (_temp = class DatabaseManager {
  constructor() {
    this.initialized = void 0;
    this.database = void 0;

    Object(F_DiscordHookSite_node_modules_next_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "persisted", _descriptor, this);

    Object(F_DiscordHookSite_node_modules_next_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "persistenceMessageDismissed", _descriptor2, this);

    let markAsInitialized;
    this.initialized = new Promise(resolve => {
      markAsInitialized = resolve;
    });
    if (false) {}

    if ("storage" in navigator) {
      navigator.storage.persisted().then(persisted => {
        this.persisted = persisted;
      }).catch(() => {});
    }

    Object(_connection_openDatabase__WEBPACK_IMPORTED_MODULE_4__["openDatabase"])().then(database => {
      this.database = database;
      markAsInitialized();
    }).catch(error => {
      console.error("Failed to open database:", error);
    });
  }

  async requestPersistence() {
    if ("chrome" in window) {
      await Notification.requestPermission();
    }

    if ("storage" in navigator) {
      this.persisted = await navigator.storage.persist();
    }
  }

  get shouldShowPersistenceWarning() {
    return !this.persisted && !this.persistenceMessageDismissed;
  }

}, _temp), (_descriptor = Object(F_DiscordHookSite_node_modules_next_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1__["default"])(_class.prototype, "persisted", [mobx__WEBPACK_IMPORTED_MODULE_3__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return true;
  }
}), _descriptor2 = Object(F_DiscordHookSite_node_modules_next_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1__["default"])(_class.prototype, "persistenceMessageDismissed", [mobx__WEBPACK_IMPORTED_MODULE_3__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), Object(F_DiscordHookSite_node_modules_next_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1__["default"])(_class.prototype, "shouldShowPersistenceWarning", [mobx__WEBPACK_IMPORTED_MODULE_3__["computed"]], Object.getOwnPropertyDescriptor(_class.prototype, "shouldShowPersistenceWarning"), _class.prototype)), _class);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./modules/database/DatabaseManagerContext.ts":
/*!****************************************************!*\
  !*** ./modules/database/DatabaseManagerContext.ts ***!
  \****************************************************/
/*! exports provided: DatabaseManagerContext, DatabaseManagerProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseManagerContext", function() { return DatabaseManagerContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseManagerProvider", function() { return DatabaseManagerProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const DatabaseManagerContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null);
DatabaseManagerContext.displayName = "DatabaseManagerContext";
const DatabaseManagerProvider = DatabaseManagerContext.Provider;

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./modules/database/backup/BackupManager.ts":
/*!**************************************************!*\
  !*** ./modules/database/backup/BackupManager.ts ***!
  \**************************************************/
/*! exports provided: BackupManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackupManager", function() { return BackupManager; });
/* harmony import */ var F_DiscordHookSite_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var F_DiscordHookSite_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var F_DiscordHookSite_node_modules_next_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/initializerDefineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/initializerDefineProperty.js");
/* harmony import */ var F_DiscordHookSite_node_modules_next_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/applyDecoratedDescriptor */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/applyDecoratedDescriptor.js");
/* harmony import */ var F_DiscordHookSite_node_modules_next_node_modules_babel_runtime_helpers_esm_initializerWarningHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/initializerWarningHelper */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/initializerWarningHelper.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var _common_dom_downloadBlob__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/dom/downloadBlob */ "./common/dom/downloadBlob.ts");
/* harmony import */ var _common_object_toSnakeCase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/object/toSnakeCase */ "./common/object/toSnakeCase.ts");
/* harmony import */ var _message_helpers_messageOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../message/helpers/messageOf */ "./modules/message/helpers/messageOf.ts");






var _class, _descriptor, _temp;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(F_DiscordHookSite_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/* eslint-disable no-await-in-loop */




let BackupManager = (_class = (_temp = class BackupManager {
  constructor(databaseManager, editorManager) {
    this.databaseManager = void 0;
    this.editorManager = void 0;

    Object(F_DiscordHookSite_node_modules_next_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "backups", _descriptor, this);

    this.databaseManager = databaseManager;
    this.editorManager = editorManager;
    databaseManager.initialized.then(async () => {
      await this.loadBackupList();
    }).catch(() => {});
  }

  async loadBackupList() {
    const backups = [];
    let cursor = await this.databaseManager.database.transaction("backup").objectStore("backup").index("name").openKeyCursor();

    while (cursor) {
      backups.push({
        id: cursor.primaryKey,
        name: cursor.key
      });
      cursor = await cursor.continue();
    }

    Object(mobx__WEBPACK_IMPORTED_MODULE_5__["runInAction"])(() => {
      this.backups = backups;
    });
  }

  async getId(name) {
    return this.databaseManager.database.transaction("backup").objectStore("backup").index("name").getKey(name);
  }

  async loadBackup(name) {
    const backup = await this.databaseManager.database.transaction("backup").objectStore("backup").index("name").get(name);
    if (!backup) return;
    this.editorManager.set("messages", backup.messages.map((_ref) => {
      let {
        data
      } = _ref,
          message = Object(F_DiscordHookSite_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["data"]);

      return _objectSpread(_objectSpread({}, Object(_message_helpers_messageOf__WEBPACK_IMPORTED_MODULE_8__["messageOf"])(data)), message);
    }));
    this.editorManager.set("targets", backup.targets);

    for (const target of this.editorManager.targets) {
      target.fetch().catch(() => {});
    }
  }

  async saveBackup(backup) {
    if (typeof backup === "string") {
      const id = await this.getId(backup);
      backup = {
        id,
        name: backup,
        messages: this.editorManager.messages.map(message => ({
          data: _objectSpread(_objectSpread({}, message.data), {}, {
            files: undefined
          }),
          reference: message.reference
        })),
        targets: this.editorManager.targets.map(target => ({
          url: target.url
        }))
      };
    } else {
      backup = _objectSpread(_objectSpread({}, backup), {}, {
        id: await this.getId(backup.name)
      });
    }

    if (!backup.id) delete backup.id;
    await this.databaseManager.database.transaction("backup", "readwrite").objectStore("backup").put(backup);
    await this.loadBackupList();
  }

  async deleteBackup(name) {
    const id = await this.getId(name);
    if (!id) return;
    await this.databaseManager.database.transaction("backup", "readwrite").objectStore("backup").delete(id);
    await this.loadBackupList();
  }

  async exportBackup(name) {
    const backup = await this.databaseManager.database.transaction("backup").objectStore("backup").index("name").get(name);
    if (!backup) return;
    const backupData = {
      version: 7,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      backups: [backup].map((_ref2) => {
        let {
          id
        } = _ref2,
            backup = Object(F_DiscordHookSite_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, ["id"]);

        return backup;
      })
    };
    const blob = new Blob([JSON.stringify(backupData, undefined, 2), "\n"], {
      type: "application/json"
    });
    Object(_common_dom_downloadBlob__WEBPACK_IMPORTED_MODULE_6__["downloadBlob"])(blob, `${name}.json`);
  }

  async exportAll() {
    const backups = [];
    let cursor = await this.databaseManager.database.transaction("backup").objectStore("backup").openCursor();

    while (cursor) {
      backups.push(_objectSpread(_objectSpread({}, cursor.value), {}, {
        id: undefined
      }));
      cursor = await cursor.continue();
    }

    const backupData = {
      version: 7,
      backups
    };
    const blob = new Blob([JSON.stringify(backupData, undefined, 2), "\n"], {
      type: "application/json"
    });
    Object(_common_dom_downloadBlob__WEBPACK_IMPORTED_MODULE_6__["downloadBlob"])(blob, "backups.json");
  }

  async getSafeBackupName(name) {
    if (!(await this.getId(name))) {
      return name;
    }

    for (let number = 1; true; number++) {
      const proposedName = `${name} (${number})`;

      if (!(await this.getId(proposedName))) {
        return proposedName;
      }
    }
  }

  async importBackups(blob) {
    let exportData = JSON.parse(await blob.text());

    switch (exportData.version) {
      case 1:
      case 2:
        {
          exportData = {
            version: 3,
            backups: [{
              name: exportData.name,
              message: Object(_common_object_toSnakeCase__WEBPACK_IMPORTED_MODULE_7__["toSnakeCase"])(exportData.message)
            }]
          };
        }
      // falls through

      case 3:
        {
          exportData = {
            version: 4,
            backups: exportData.backups.map((_ref3) => {
              let {
                message
              } = _ref3,
                  backup = Object(F_DiscordHookSite_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref3, ["message"]);

              return _objectSpread(_objectSpread({}, backup), {}, {
                messages: [message]
              });
            })
          };
        }
      // falls through

      case 4:
        exportData = {
          version: 5,
          backups: exportData.backups.map((_ref4) => {
            let {
              webhookUrl
            } = _ref4,
                backup = Object(F_DiscordHookSite_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref4, ["webhookUrl"]);

            return _objectSpread(_objectSpread({}, backup), {}, {
              target: {
                url: webhookUrl
              }
            });
          })
        };
      // falls through

      case 5:
        exportData = {
          version: 6,
          backups: exportData.backups.map((_ref5) => {
            let {
              messages,
              target
            } = _ref5,
                backup = Object(F_DiscordHookSite_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref5, ["messages", "target"]);

            return _objectSpread(_objectSpread({}, backup), {}, {
              messages: messages.map(data => ({
                data,
                reference: target.message
              })),
              target: {
                url: target.url
              }
            });
          })
        };
      // falls through

      case 6:
        exportData = {
          version: 7,
          backups: exportData.backups.map((_ref6) => {
            var _target$url;

            let {
              target
            } = _ref6,
                backup = Object(F_DiscordHookSite_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref6, ["target"]);

            return _objectSpread(_objectSpread({}, backup), {}, {
              targets: [{
                url: (_target$url = target.url) !== null && _target$url !== void 0 ? _target$url : ""
              }]
            });
          })
        };
      // falls through

      case 7:
        for (const backup of exportData.backups) {
          await this.saveBackup(_objectSpread(_objectSpread({}, backup), {}, {
            name: await this.getSafeBackupName(backup.name),
            id: undefined
          }));
        }

    }
  }

}, _temp), (_descriptor = Object(F_DiscordHookSite_node_modules_next_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3__["default"])(_class.prototype, "backups", [mobx__WEBPACK_IMPORTED_MODULE_5__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return [];
  }
})), _class);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./modules/database/backup/BackupManagerContext.ts":
/*!*********************************************************!*\
  !*** ./modules/database/backup/BackupManagerContext.ts ***!
  \*********************************************************/
/*! exports provided: BackupManagerContext, BackupManagerProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackupManagerContext", function() { return BackupManagerContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackupManagerProvider", function() { return BackupManagerProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const BackupManagerContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null);
BackupManagerContext.displayName = "BackupManagerContext";
const BackupManagerProvider = BackupManagerContext.Provider;

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./modules/database/backup/modal/BackupCreationControls.tsx":
/*!******************************************************************!*\
  !*** ./modules/database/backup/modal/BackupCreationControls.tsx ***!
  \******************************************************************/
/*! exports provided: BackupCreationControls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackupCreationControls", function() { return BackupCreationControls; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react-lite */ "./node_modules/mobx-react-lite/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_input_button_PrimaryButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/input/button/PrimaryButton */ "./common/input/button/PrimaryButton.ts");
/* harmony import */ var _common_input_text_InputField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../common/input/text/InputField */ "./common/input/text/InputField.tsx");
/* harmony import */ var _common_state_useRequiredContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../common/state/useRequiredContext */ "./common/state/useRequiredContext.ts");
/* harmony import */ var _BackupManagerContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../BackupManagerContext */ "./modules/database/backup/BackupManagerContext.ts");


var _jsxFileName = "F:\\DiscordHookSite\\modules\\database\\backup\\modal\\BackupCreationControls.tsx",
    _s = $RefreshSig$();







function BackupCreationControls() {
  _s();

  const backupManager = Object(_common_state_useRequiredContext__WEBPACK_IMPORTED_MODULE_5__["useRequiredContext"])(_BackupManagerContext__WEBPACK_IMPORTED_MODULE_6__["BackupManagerContext"]);
  const {
    0: backupName,
    1: setBackupName
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");
  return Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__["useObserver"])(() => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_input_text_InputField__WEBPACK_IMPORTED_MODULE_4__["InputField"], {
    id: "backup-name",
    value: backupName,
    onChange: setBackupName,
    label: "Backup name",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_input_button_PrimaryButton__WEBPACK_IMPORTED_MODULE_3__["PrimaryButton"], {
      disabled: backupName.length === 0,
      onClick: async () => {
        await backupManager.saveBackup(backupName.trim());
        setBackupName("");
      },
      children: backupManager.backups.some(backup => backup.name === backupName.trim()) ? "Overwrite" : "Save"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, this));
}

_s(BackupCreationControls, "QJ10jc7MtzD8YeRCmhfYQHcHgX0=", false, function () {
  return [_common_state_useRequiredContext__WEBPACK_IMPORTED_MODULE_5__["useRequiredContext"], mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__["useObserver"]];
});

_c = BackupCreationControls;

var _c;

$RefreshReg$(_c, "BackupCreationControls");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./modules/database/backup/modal/BackupItem.tsx":
/*!******************************************************!*\
  !*** ./modules/database/backup/modal/BackupItem.tsx ***!
  \******************************************************/
/*! exports provided: BackupItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackupItem", function() { return BackupItem; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react-lite */ "./node_modules/mobx-react-lite/es/index.js");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polished */ "./node_modules/polished/dist/polished.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _common_input_button_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../common/input/button/Button */ "./common/input/button/Button.ts");
/* harmony import */ var _common_layout_ActionButtons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../common/layout/ActionButtons */ "./common/layout/ActionButtons.tsx");
/* harmony import */ var _common_modal_ModalManagerContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../common/modal/ModalManagerContext */ "./common/modal/ModalManagerContext.tsx");
/* harmony import */ var _common_state_useRequiredContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../common/state/useRequiredContext */ "./common/state/useRequiredContext.ts");
/* harmony import */ var _icons_copy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../icons/copy */ "./icons/copy.tsx");
/* harmony import */ var _icons_save__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../icons/save */ "./icons/save.tsx");
/* harmony import */ var _icons_trash__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../icons/trash */ "./icons/trash.tsx");
/* harmony import */ var _icons_upload__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../icons/upload */ "./icons/upload.tsx");
/* harmony import */ var _BackupManagerContext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../BackupManagerContext */ "./modules/database/backup/BackupManagerContext.ts");
/* harmony import */ var _DeletionConfirmationModal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./DeletionConfirmationModal */ "./modules/database/backup/modal/DeletionConfirmationModal.tsx");


var _jsxFileName = "F:\\DiscordHookSite\\modules\\database\\backup\\modal\\BackupItem.tsx",
    _s = $RefreshSig$();















const Container = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].li.withConfig({
  displayName: "BackupItem__Container",
  componentId: "sc-4y1qwg-0"
})(["height:48px;display:flex;align-items:center;list-style:none;border:0 solid ", ";& + &{border-top-width:1px;}& > ", "{margin:0;}"], ({
  theme
}) => theme.backgroundModifier.accent, _common_input_button_Button__WEBPACK_IMPORTED_MODULE_5__["Button"]);
_c = Container;
const BackupName = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "BackupItem__BackupName",
  componentId: "sc-4y1qwg-1"
})(["", ";flex:1;font-weight:500;"], Object(polished__WEBPACK_IMPORTED_MODULE_2__["ellipsis"])());
_c2 = BackupName;
function BackupItem(props) {
  _s();

  const {
    backup
  } = props;
  const modalManager = Object(_common_state_useRequiredContext__WEBPACK_IMPORTED_MODULE_8__["useRequiredContext"])(_common_modal_ModalManagerContext__WEBPACK_IMPORTED_MODULE_7__["ModalManagerContext"]);
  const backupManager = Object(_common_state_useRequiredContext__WEBPACK_IMPORTED_MODULE_8__["useRequiredContext"])(_BackupManagerContext__WEBPACK_IMPORTED_MODULE_13__["BackupManagerContext"]);
  return Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__["useObserver"])(() => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Container, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BackupName, {
      children: backup.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_layout_ActionButtons__WEBPACK_IMPORTED_MODULE_6__["ActionButtons"], {
      actions: [{
        icon: _icons_upload__WEBPACK_IMPORTED_MODULE_12__["upload"],
        label: "Load",
        handler: async () => backupManager.loadBackup(backup.name)
      }, {
        icon: _icons_save__WEBPACK_IMPORTED_MODULE_10__["save"],
        label: "Export",
        handler: async () => backupManager.exportBackup(backup.name),
        overflow: true
      }, {
        icon: _icons_copy__WEBPACK_IMPORTED_MODULE_9__["copy"],
        label: "Overwrite",
        handler: async () => backupManager.saveBackup(backup.name),
        overflow: true
      }, {
        icon: _icons_trash__WEBPACK_IMPORTED_MODULE_11__["trash"],
        label: "Delete",
        handler: () => modalManager.spawn({
          render: () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_DeletionConfirmationModal__WEBPACK_IMPORTED_MODULE_14__["DeletionConfirmationModal"], {
            backupManager: backupManager,
            backup: backup
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 19
          }, this)
        }),
        overflow: true
      }]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 5
  }, this));
}

_s(BackupItem, "PwFGXYVGPlZ8g+Ao4q0U/2ZK5Y4=", false, function () {
  return [_common_state_useRequiredContext__WEBPACK_IMPORTED_MODULE_8__["useRequiredContext"], _common_state_useRequiredContext__WEBPACK_IMPORTED_MODULE_8__["useRequiredContext"], mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__["useObserver"]];
});

_c3 = BackupItem;

var _c, _c2, _c3;

$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "BackupName");
$RefreshReg$(_c3, "BackupItem");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./modules/database/backup/modal/BackupList.tsx":
/*!******************************************************!*\
  !*** ./modules/database/backup/modal/BackupList.tsx ***!
  \******************************************************/
/*! exports provided: BackupList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackupList", function() { return BackupList; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react-lite */ "./node_modules/mobx-react-lite/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _common_input_text_InputField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../common/input/text/InputField */ "./common/input/text/InputField.tsx");
/* harmony import */ var _common_state_useRequiredContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../common/state/useRequiredContext */ "./common/state/useRequiredContext.ts");
/* harmony import */ var _markdown_Markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../markdown/Markdown */ "./modules/markdown/Markdown.tsx");
/* harmony import */ var _BackupManagerContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../BackupManagerContext */ "./modules/database/backup/BackupManagerContext.ts");
/* harmony import */ var _BackupItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./BackupItem */ "./modules/database/backup/modal/BackupItem.tsx");



var _jsxFileName = "F:\\DiscordHookSite\\modules\\database\\backup\\modal\\BackupList.tsx",
    _s = $RefreshSig$();









const Container = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].ul.withConfig({
  displayName: "BackupList__Container",
  componentId: "sc-1bbv68x-0"
})(["padding:0;margin:0;max-height:420px;overflow-x:hidden;"]);
_c = Container;
function BackupList() {
  _s();

  const backupManager = Object(_common_state_useRequiredContext__WEBPACK_IMPORTED_MODULE_5__["useRequiredContext"])(_BackupManagerContext__WEBPACK_IMPORTED_MODULE_7__["BackupManagerContext"]);
  const {
    0: search,
    1: setSearch
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");
  return Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__["useObserver"])(() => backupManager.backups.length > 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_input_text_InputField__WEBPACK_IMPORTED_MODULE_4__["InputField"], {
      id: "backups-search",
      label: "Search Backups",
      value: search,
      onChange: setSearch
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Container, {
      children: backupManager.backups.filter(backup => backup.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())).map(backup => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_BackupItem__WEBPACK_IMPORTED_MODULE_8__["BackupItem"], {
        backup: backup
      }, backup.id, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 15
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }, this)]
  }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_markdown_Markdown__WEBPACK_IMPORTED_MODULE_6__["Markdown"], {
    content: "You haven't made any backups yet." + " Enter a name below and click on the Save button to make one."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 7
  }, this));
}

_s(BackupList, "kKzzDEUzJNIHEKSD8wrQ9a5H9GU=", false, function () {
  return [_common_state_useRequiredContext__WEBPACK_IMPORTED_MODULE_5__["useRequiredContext"], mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__["useObserver"]];
});

_c2 = BackupList;

var _c, _c2;

$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "BackupList");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./modules/database/backup/modal/BackupsModal.tsx":
/*!********************************************************!*\
  !*** ./modules/database/backup/modal/BackupsModal.tsx ***!
  \********************************************************/
/*! exports provided: BackupsModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackupsModal", function() { return BackupsModal; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react-lite */ "./node_modules/mobx-react-lite/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_input_button_PrimaryButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/input/button/PrimaryButton */ "./common/input/button/PrimaryButton.ts");
/* harmony import */ var _common_input_button_SecondaryButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../common/input/button/SecondaryButton */ "./common/input/button/SecondaryButton.ts");
/* harmony import */ var _common_modal_layout_ModalAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../common/modal/layout/ModalAction */ "./common/modal/layout/ModalAction.ts");
/* harmony import */ var _common_modal_layout_ModalBody__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../common/modal/layout/ModalBody */ "./common/modal/layout/ModalBody.ts");
/* harmony import */ var _common_modal_layout_ModalContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../common/modal/layout/ModalContainer */ "./common/modal/layout/ModalContainer.ts");
/* harmony import */ var _common_modal_layout_ModalFooter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../common/modal/layout/ModalFooter */ "./common/modal/layout/ModalFooter.ts");
/* harmony import */ var _common_modal_layout_ModalHeader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../common/modal/layout/ModalHeader */ "./common/modal/layout/ModalHeader.ts");
/* harmony import */ var _common_modal_layout_ModalTitle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../common/modal/layout/ModalTitle */ "./common/modal/layout/ModalTitle.ts");
/* harmony import */ var _common_modal_ModalContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../common/modal/ModalContext */ "./common/modal/ModalContext.ts");
/* harmony import */ var _common_state_useLazyValue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../common/state/useLazyValue */ "./common/state/useLazyValue.ts");
/* harmony import */ var _common_state_useRequiredContext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../common/state/useRequiredContext */ "./common/state/useRequiredContext.ts");
/* harmony import */ var _icons_remove__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../icons/remove */ "./icons/remove.tsx");
/* harmony import */ var _DatabaseManager__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../DatabaseManager */ "./modules/database/DatabaseManager.ts");
/* harmony import */ var _DatabaseManagerContext__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../DatabaseManagerContext */ "./modules/database/DatabaseManagerContext.ts");
/* harmony import */ var _persist_PersistentStorageWarning__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../persist/PersistentStorageWarning */ "./modules/database/persist/PersistentStorageWarning.tsx");
/* harmony import */ var _BackupManager__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../BackupManager */ "./modules/database/backup/BackupManager.ts");
/* harmony import */ var _BackupManagerContext__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../BackupManagerContext */ "./modules/database/backup/BackupManagerContext.ts");
/* harmony import */ var _BackupCreationControls__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./BackupCreationControls */ "./modules/database/backup/modal/BackupCreationControls.tsx");
/* harmony import */ var _BackupList__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./BackupList */ "./modules/database/backup/modal/BackupList.tsx");


var _jsxFileName = "F:\\DiscordHookSite\\modules\\database\\backup\\modal\\BackupsModal.tsx",
    _s = $RefreshSig$();






















function BackupsModal(props) {
  _s();

  const {
    editorManager
  } = props;
  const databaseManager = Object(_common_state_useLazyValue__WEBPACK_IMPORTED_MODULE_12__["useLazyValue"])(() => new _DatabaseManager__WEBPACK_IMPORTED_MODULE_15__["DatabaseManager"]());
  const backupManager = Object(_common_state_useLazyValue__WEBPACK_IMPORTED_MODULE_12__["useLazyValue"])(() => new _BackupManager__WEBPACK_IMPORTED_MODULE_18__["BackupManager"](databaseManager, editorManager));
  const modal = Object(_common_state_useRequiredContext__WEBPACK_IMPORTED_MODULE_13__["useRequiredContext"])(_common_modal_ModalContext__WEBPACK_IMPORTED_MODULE_11__["ModalContext"]);
  const fileInputRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  return Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__["useObserver"])(() => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_DatabaseManagerContext__WEBPACK_IMPORTED_MODULE_16__["DatabaseManagerProvider"], {
    value: databaseManager,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_BackupManagerContext__WEBPACK_IMPORTED_MODULE_19__["BackupManagerProvider"], {
      value: backupManager,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_modal_layout_ModalContainer__WEBPACK_IMPORTED_MODULE_7__["ModalContainer"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          ref: fileInputRef,
          type: "file",
          style: {
            display: "none"
          },
          onChange: async event => {
            var _event$target$files, _event$target$files$i;

            const file = (_event$target$files = event.target.files) === null || _event$target$files === void 0 ? void 0 : (_event$target$files$i = _event$target$files.item(0)) === null || _event$target$files$i === void 0 ? void 0 : _event$target$files$i.slice();
            event.target.files = null;

            if (file) {
              await backupManager.importBackups(file);
            }
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_modal_layout_ModalHeader__WEBPACK_IMPORTED_MODULE_9__["ModalHeader"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_modal_layout_ModalTitle__WEBPACK_IMPORTED_MODULE_10__["ModalTitle"], {
            children: "Backups"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_modal_layout_ModalAction__WEBPACK_IMPORTED_MODULE_5__["ModalAction"], {
            icon: _icons_remove__WEBPACK_IMPORTED_MODULE_14__["remove"],
            label: "Close",
            onClick: () => modal.dismiss()
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, this), databaseManager.shouldShowPersistenceWarning && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_modal_layout_ModalBody__WEBPACK_IMPORTED_MODULE_6__["ModalBody"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_persist_PersistentStorageWarning__WEBPACK_IMPORTED_MODULE_17__["PersistentStorageWarning"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_modal_layout_ModalBody__WEBPACK_IMPORTED_MODULE_6__["ModalBody"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_BackupList__WEBPACK_IMPORTED_MODULE_21__["BackupList"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_modal_layout_ModalBody__WEBPACK_IMPORTED_MODULE_6__["ModalBody"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_BackupCreationControls__WEBPACK_IMPORTED_MODULE_20__["BackupCreationControls"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_modal_layout_ModalFooter__WEBPACK_IMPORTED_MODULE_8__["ModalFooter"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_input_button_SecondaryButton__WEBPACK_IMPORTED_MODULE_4__["SecondaryButton"], {
            onClick: async () => backupManager.exportAll(),
            children: "Export All"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_input_button_SecondaryButton__WEBPACK_IMPORTED_MODULE_4__["SecondaryButton"], {
            onClick: () => {
              var _fileInputRef$current;

              return (_fileInputRef$current = fileInputRef.current) === null || _fileInputRef$current === void 0 ? void 0 : _fileInputRef$current.click();
            },
            children: "Import"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_input_button_PrimaryButton__WEBPACK_IMPORTED_MODULE_3__["PrimaryButton"], {
            onClick: () => modal.dismiss(),
            children: "Close"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 5
  }, this));
}

_s(BackupsModal, "6RrRDvbdfuBDsY2uaQsr8m4oR60=", false, function () {
  return [_common_state_useLazyValue__WEBPACK_IMPORTED_MODULE_12__["useLazyValue"], _common_state_useLazyValue__WEBPACK_IMPORTED_MODULE_12__["useLazyValue"], _common_state_useRequiredContext__WEBPACK_IMPORTED_MODULE_13__["useRequiredContext"], mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__["useObserver"]];
});

_c = BackupsModal;

var _c;

$RefreshReg$(_c, "BackupsModal");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./modules/database/backup/modal/DeletionConfirmationModal.tsx":
/*!*********************************************************************!*\
  !*** ./modules/database/backup/modal/DeletionConfirmationModal.tsx ***!
  \*********************************************************************/
/*! exports provided: DeletionConfirmationModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeletionConfirmationModal", function() { return DeletionConfirmationModal; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react-lite */ "./node_modules/mobx-react-lite/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_input_button_PrimaryButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/input/button/PrimaryButton */ "./common/input/button/PrimaryButton.ts");
/* harmony import */ var _common_input_button_SecondaryButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../common/input/button/SecondaryButton */ "./common/input/button/SecondaryButton.ts");
/* harmony import */ var _common_modal_layout_ModalAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../common/modal/layout/ModalAction */ "./common/modal/layout/ModalAction.ts");
/* harmony import */ var _common_modal_layout_ModalBody__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../common/modal/layout/ModalBody */ "./common/modal/layout/ModalBody.ts");
/* harmony import */ var _common_modal_layout_ModalContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../common/modal/layout/ModalContainer */ "./common/modal/layout/ModalContainer.ts");
/* harmony import */ var _common_modal_layout_ModalFooter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../common/modal/layout/ModalFooter */ "./common/modal/layout/ModalFooter.ts");
/* harmony import */ var _common_modal_layout_ModalHeader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../common/modal/layout/ModalHeader */ "./common/modal/layout/ModalHeader.ts");
/* harmony import */ var _common_modal_layout_ModalTitle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../common/modal/layout/ModalTitle */ "./common/modal/layout/ModalTitle.ts");
/* harmony import */ var _common_modal_ModalContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../common/modal/ModalContext */ "./common/modal/ModalContext.ts");
/* harmony import */ var _common_state_useRequiredContext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../common/state/useRequiredContext */ "./common/state/useRequiredContext.ts");
/* harmony import */ var _icons_remove__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../icons/remove */ "./icons/remove.tsx");
/* harmony import */ var _markdown_Markdown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../markdown/Markdown */ "./modules/markdown/Markdown.tsx");


var _jsxFileName = "F:\\DiscordHookSite\\modules\\database\\backup\\modal\\DeletionConfirmationModal.tsx",
    _s = $RefreshSig$();















function DeletionConfirmationModal(props) {
  _s();

  const {
    backupManager,
    backup
  } = props;
  const modal = Object(_common_state_useRequiredContext__WEBPACK_IMPORTED_MODULE_12__["useRequiredContext"])(_common_modal_ModalContext__WEBPACK_IMPORTED_MODULE_11__["ModalContext"]);
  return Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__["useObserver"])(() => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_modal_layout_ModalContainer__WEBPACK_IMPORTED_MODULE_7__["ModalContainer"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_modal_layout_ModalHeader__WEBPACK_IMPORTED_MODULE_9__["ModalHeader"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_modal_layout_ModalTitle__WEBPACK_IMPORTED_MODULE_10__["ModalTitle"], {
        children: "Delete Backup"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_modal_layout_ModalAction__WEBPACK_IMPORTED_MODULE_5__["ModalAction"], {
        icon: _icons_remove__WEBPACK_IMPORTED_MODULE_13__["remove"],
        label: "Close",
        onClick: () => modal.dismiss()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_modal_layout_ModalBody__WEBPACK_IMPORTED_MODULE_6__["ModalBody"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_markdown_Markdown__WEBPACK_IMPORTED_MODULE_14__["Markdown"], {
        content: `Are you sure you want to delete "${backup.name}"? This action` + " cannot be undone."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_modal_layout_ModalFooter__WEBPACK_IMPORTED_MODULE_8__["ModalFooter"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_input_button_SecondaryButton__WEBPACK_IMPORTED_MODULE_4__["SecondaryButton"], {
        onClick: () => modal.dismiss(),
        children: "Cancel"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_input_button_PrimaryButton__WEBPACK_IMPORTED_MODULE_3__["PrimaryButton"], {
        onClick: async () => {
          await backupManager.deleteBackup(backup.name);
          modal.dismiss();
        },
        children: "Delete"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }, this));
}

_s(DeletionConfirmationModal, "CdWWltM89uwTmb32i7iYDg98a58=", false, function () {
  return [_common_state_useRequiredContext__WEBPACK_IMPORTED_MODULE_12__["useRequiredContext"], mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__["useObserver"]];
});

_c = DeletionConfirmationModal;

var _c;

$RefreshReg$(_c, "DeletionConfirmationModal");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./modules/database/connection/openDatabase.ts":
/*!*****************************************************!*\
  !*** ./modules/database/connection/openDatabase.ts ***!
  \*****************************************************/
/*! exports provided: openDatabase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openDatabase", function() { return openDatabase; });
/* harmony import */ var idb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! idb */ "./node_modules/idb/build/esm/index.js");
/* harmony import */ var _showUpgradeBlockedMessage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showUpgradeBlockedMessage */ "./modules/database/connection/showUpgradeBlockedMessage.ts");
/* harmony import */ var _upgradeDatabase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./upgradeDatabase */ "./modules/database/connection/upgradeDatabase.ts");



const openDatabase = async () => {
  return Object(idb__WEBPACK_IMPORTED_MODULE_0__["openDB"])("discohook", 10, {
    upgrade: (database, oldVersion, newVersion, transaction) => {
      // Casting to unknown schema, because upgrades shouldn't assume how the
      // schema looks at that time
      Object(_upgradeDatabase__WEBPACK_IMPORTED_MODULE_2__["upgradeDatabase"])(database, transaction, oldVersion).then(() => {
        var _document$querySelect;

        localStorage.setItem("database-upgraded-version", "10");
        (_document$querySelect = document.querySelector("#db-upgrade-blocked")) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.remove();
      }).catch(error => {
        console.error("Error on database upgrade:", error);
      });
    },
    blocked: _showUpgradeBlockedMessage__WEBPACK_IMPORTED_MODULE_1__["showUpgradeBlockedMessage"]
  });
};

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./modules/database/connection/showUpgradeBlockedMessage.ts":
/*!******************************************************************!*\
  !*** ./modules/database/connection/showUpgradeBlockedMessage.ts ***!
  \******************************************************************/
/*! exports provided: showUpgradeBlockedMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showUpgradeBlockedMessage", function() { return showUpgradeBlockedMessage; });
const showUpgradeBlockedMessage = () => {
  const container = document.createElement("div");
  container.id = "db-upgrade-blocked";
  container.style.position = "absolute";
  container.style.top = "0";
  container.style.right = "0";
  container.style.bottom = "0";
  container.style.left = "0";
  container.style.background = "rgba(0, 0, 0, 0.85)";
  container.style.padding = "16px";
  const header = document.createElement("h1");
  header.style.color = "#ffffff";
  header.append("Discohook's local database needs an upgrade");
  const blockedMessage = document.createElement("p");
  blockedMessage.append("However, the upgrade can't proceed because there are older sessions of Discohook open.");
  const closeTabsMessage = document.createElement("p");
  closeTabsMessage.append("Please close all Discohook tabs before continuing.");
  container.append(header, blockedMessage, closeTabsMessage);
  document.body.append(container);
};

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./modules/database/connection/upgradeDatabase.ts":
/*!********************************************************!*\
  !*** ./modules/database/connection/upgradeDatabase.ts ***!
  \********************************************************/
/*! exports provided: upgradeDatabase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "upgradeDatabase", function() { return upgradeDatabase; });
/* harmony import */ var F_DiscordHookSite_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var F_DiscordHookSite_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _common_object_toSnakeCase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/object/toSnakeCase */ "./common/object/toSnakeCase.ts");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(F_DiscordHookSite_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/* eslint-disable no-await-in-loop */

const upgradeDatabase = async (database, transaction, oldVersion) => {
  if (oldVersion < 2 && oldVersion >= 1) {
    let cursor = await transaction.objectStore("backups").openCursor();

    while (cursor) {
      await cursor.update({
        name: cursor.key,
        message: cursor.value
      });
      cursor = await cursor.continue();
    }
  }

  if (oldVersion < 3) {
    database.createObjectStore("backup", {
      keyPath: "id",
      autoIncrement: true
    });
    const backupStore = transaction.objectStore("backup");
    backupStore.createIndex("name", "name", {
      unique: true
    });
  }

  if (oldVersion < 4 && oldVersion >= 1) {
    const backupStore = transaction.objectStore("backup");
    const existingBackups = new Set();
    let nameCursor = await backupStore.index("name").openKeyCursor();

    while (nameCursor) {
      existingBackups.add(nameCursor.key);
      nameCursor = await nameCursor.continue();
    }

    let cursor = await transaction.objectStore("backups").openCursor();

    while (cursor) {
      if (!existingBackups.has(cursor.key)) {
        await backupStore.put(_objectSpread(_objectSpread({}, cursor.value), {}, {
          name: cursor.key,
          message: Object(_common_object_toSnakeCase__WEBPACK_IMPORTED_MODULE_2__["toSnakeCase"])(cursor.value.message)
        }));
      }

      cursor = await cursor.continue();
    }
  }

  if (oldVersion < 5 && oldVersion >= 1) {
    const backupStore = transaction.objectStore("backup");
    let cursor = await backupStore.openCursor();

    while (cursor) {
      const _cursor$value = cursor.value,
            {
        message
      } = _cursor$value,
            rest = Object(F_DiscordHookSite_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_cursor$value, ["message"]);

      await backupStore.put(_objectSpread(_objectSpread({}, rest), {}, {
        messages: [message]
      }));
      cursor = await cursor.continue();
    }
  }

  if (oldVersion < 6 && oldVersion >= 1) {
    const backupStore = transaction.objectStore("backup");
    let cursor = await backupStore.openCursor();

    while (cursor) {
      const _cursor$value2 = cursor.value,
            {
        webhookUrl
      } = _cursor$value2,
            rest = Object(F_DiscordHookSite_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_cursor$value2, ["webhookUrl"]);

      await backupStore.put(_objectSpread(_objectSpread({}, rest), {}, {
        target: {
          url: webhookUrl
        }
      }));
      cursor = await cursor.continue();
    }
  }

  if (oldVersion < 9 && oldVersion >= 1) {
    const backupStore = transaction.objectStore("backup");
    let cursor = await backupStore.openCursor();

    while (cursor) {
      const {
        id,
        name,
        messages,
        target
      } = cursor.value;

      if (name) {
        await backupStore.put({
          id,
          name,
          messages: messages.map(data => ({
            data: "data" in data ? data.data : data,
            reference: "reference" in data ? data.reference : target.message
          })),
          target: {
            url: target.url
          }
        });
      } else {
        await backupStore.delete(id);
      }

      cursor = await cursor.continue();
    }
  }

  if (oldVersion < 10 && oldVersion >= 1) {
    const backupStore = transaction.objectStore("backup");
    let cursor = await backupStore.openCursor();

    while (cursor) {
      var _target$url;

      const _cursor$value3 = cursor.value,
            {
        target
      } = _cursor$value3,
            backup = Object(F_DiscordHookSite_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_cursor$value3, ["target"]);

      await backupStore.put(_objectSpread(_objectSpread({}, backup), {}, {
        targets: [{
          url: (_target$url = target.url) !== null && _target$url !== void 0 ? _target$url : ""
        }]
      }));
      cursor = await cursor.continue();
    }
  }
};

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./modules/database/persist/PersistentStorageWarning.tsx":
/*!***************************************************************!*\
  !*** ./modules/database/persist/PersistentStorageWarning.tsx ***!
  \***************************************************************/
/*! exports provided: PersistentStorageWarning */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersistentStorageWarning", function() { return PersistentStorageWarning; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react-lite */ "./node_modules/mobx-react-lite/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _common_input_button_PrimaryButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/input/button/PrimaryButton */ "./common/input/button/PrimaryButton.ts");
/* harmony import */ var _common_input_button_SecondaryButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/input/button/SecondaryButton */ "./common/input/button/SecondaryButton.ts");
/* harmony import */ var _common_layout_ButtonRow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/layout/ButtonRow */ "./common/layout/ButtonRow.ts");
/* harmony import */ var _common_modal_ModalManagerContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/modal/ModalManagerContext */ "./common/modal/ModalManagerContext.tsx");
/* harmony import */ var _common_state_useRequiredContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/state/useRequiredContext */ "./common/state/useRequiredContext.ts");
/* harmony import */ var _markdown_Markdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../markdown/Markdown */ "./modules/markdown/Markdown.tsx");
/* harmony import */ var _DatabaseManagerContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../DatabaseManagerContext */ "./modules/database/DatabaseManagerContext.ts");
/* harmony import */ var _PushNotificationModal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./PushNotificationModal */ "./modules/database/persist/PushNotificationModal.tsx");


var _jsxFileName = "F:\\DiscordHookSite\\modules\\database\\persist\\PersistentStorageWarning.tsx",
    _s = $RefreshSig$();












const Container = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "PersistentStorageWarning__Container",
  componentId: "sc-3x6mdx-0"
})(["margin-top:16px;padding:16px;background:", ";border-radius:3px;"], ({
  theme
}) => theme.background.secondary);
_c = Container;
const Header = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].h5.withConfig({
  displayName: "PersistentStorageWarning__Header",
  componentId: "sc-3x6mdx-1"
})(["margin:0 0 8px;color:", ";font-size:1em;font-weight:500;line-height:1.375;"], ({
  theme
}) => theme.header.primary);
_c2 = Header;
const Buttons = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(_common_layout_ButtonRow__WEBPACK_IMPORTED_MODULE_6__["ButtonRow"]).withConfig({
  displayName: "PersistentStorageWarning__Buttons",
  componentId: "sc-3x6mdx-2"
})(["margin-top:16px;"]);
_c3 = Buttons;
function PersistentStorageWarning() {
  _s();

  const modalManager = Object(_common_state_useRequiredContext__WEBPACK_IMPORTED_MODULE_8__["useRequiredContext"])(_common_modal_ModalManagerContext__WEBPACK_IMPORTED_MODULE_7__["ModalManagerContext"]);
  const databaseManager = Object(_common_state_useRequiredContext__WEBPACK_IMPORTED_MODULE_8__["useRequiredContext"])(_DatabaseManagerContext__WEBPACK_IMPORTED_MODULE_10__["DatabaseManagerContext"]);
  return Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__["useObserver"])(() => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Container, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Header, {
      children: "Warning"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_markdown_Markdown__WEBPACK_IMPORTED_MODULE_9__["Markdown"], {
      content: "Your browser did not grant permission to use persistent storage" + " for this site. Data stored might be deleted by the browser when" + " this permission is not granted."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Buttons, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_input_button_PrimaryButton__WEBPACK_IMPORTED_MODULE_4__["PrimaryButton"], {
        onClick: async () => {
          if ("chrome" in window) {
            modalManager.spawn({
              render: () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_PushNotificationModal__WEBPACK_IMPORTED_MODULE_11__["PushNotificationModal"], {
                databaseManager: databaseManager
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 19
              }, this)
            });
          } else {
            await databaseManager.requestPersistence();
          }
        },
        children: "Request permission"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_input_button_SecondaryButton__WEBPACK_IMPORTED_MODULE_5__["SecondaryButton"], {
        onClick: () => {
          databaseManager.persistenceMessageDismissed = true;
        },
        children: "Dismiss"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 5
  }, this));
}

_s(PersistentStorageWarning, "KupnOlN39LIjUJKH6XxunU058oQ=", false, function () {
  return [_common_state_useRequiredContext__WEBPACK_IMPORTED_MODULE_8__["useRequiredContext"], _common_state_useRequiredContext__WEBPACK_IMPORTED_MODULE_8__["useRequiredContext"], mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__["useObserver"]];
});

_c4 = PersistentStorageWarning;

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "Header");
$RefreshReg$(_c3, "Buttons");
$RefreshReg$(_c4, "PersistentStorageWarning");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./modules/database/persist/PushNotificationModal.tsx":
/*!************************************************************!*\
  !*** ./modules/database/persist/PushNotificationModal.tsx ***!
  \************************************************************/
/*! exports provided: PushNotificationModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PushNotificationModal", function() { return PushNotificationModal; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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


var _jsxFileName = "F:\\DiscordHookSite\\modules\\database\\persist\\PushNotificationModal.tsx",
    _s = $RefreshSig$();














function PushNotificationModal(props) {
  _s();

  const {
    databaseManager
  } = props;
  const modal = Object(_common_state_useRequiredContext__WEBPACK_IMPORTED_MODULE_11__["useRequiredContext"])(_common_modal_ModalContext__WEBPACK_IMPORTED_MODULE_10__["ModalContext"]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_modal_layout_ModalContainer__WEBPACK_IMPORTED_MODULE_6__["ModalContainer"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_modal_layout_ModalHeader__WEBPACK_IMPORTED_MODULE_8__["ModalHeader"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_modal_layout_ModalTitle__WEBPACK_IMPORTED_MODULE_9__["ModalTitle"], {
        children: "Notice"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_modal_layout_ModalAction__WEBPACK_IMPORTED_MODULE_4__["ModalAction"], {
        icon: _icons_remove__WEBPACK_IMPORTED_MODULE_12__["remove"],
        label: "Close",
        onClick: () => modal.dismiss()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_modal_layout_ModalBody__WEBPACK_IMPORTED_MODULE_5__["ModalBody"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_markdown_Markdown__WEBPACK_IMPORTED_MODULE_13__["Markdown"], {
        content: "Chrome based browsers do not allow manual control of persistent" + " storage. As a workaround, you can grant this site permission to" + " send notifications to allow the site to use persistent storage."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_modal_layout_ModalFooter__WEBPACK_IMPORTED_MODULE_7__["ModalFooter"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_input_button_SecondaryButton__WEBPACK_IMPORTED_MODULE_3__["SecondaryButton"], {
        onClick: () => modal.dismiss(),
        children: "Cancel"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_input_button_PrimaryButton__WEBPACK_IMPORTED_MODULE_2__["PrimaryButton"], {
        onClick: async () => {
          modal.dismiss();
          await databaseManager.requestPersistence();
        },
        children: "Request permission"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, this);
}

_s(PushNotificationModal, "FbahNo5o4IbiYJv7j9dHzmnW7uI=", false, function () {
  return [_common_state_useRequiredContext__WEBPACK_IMPORTED_MODULE_11__["useRequiredContext"]];
});

_c = PushNotificationModal;

var _c;

$RefreshReg$(_c, "PushNotificationModal");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./modules/message/helpers/messageOf.ts":
/*!**********************************************!*\
  !*** ./modules/message/helpers/messageOf.ts ***!
  \**********************************************/
/*! exports provided: messageOf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "messageOf", function() { return messageOf; });
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

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/idb/build/esm/index.js":
/*!*********************************************!*\
  !*** ./node_modules/idb/build/esm/index.js ***!
  \*********************************************/
/*! exports provided: unwrap, wrap, deleteDB, openDB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteDB", function() { return deleteDB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openDB", function() { return openDB; });
/* harmony import */ var _wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wrap-idb-value.js */ "./node_modules/idb/build/esm/wrap-idb-value.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unwrap", function() { return _wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__["u"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wrap", function() { return _wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__["w"]; });




/**
 * Open a database.
 *
 * @param name Name of the database.
 * @param version Schema version.
 * @param callbacks Additional callbacks.
 */
function openDB(name, version, { blocked, upgrade, blocking, terminated } = {}) {
    const request = indexedDB.open(name, version);
    const openPromise = Object(_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__["w"])(request);
    if (upgrade) {
        request.addEventListener('upgradeneeded', (event) => {
            upgrade(Object(_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__["w"])(request.result), event.oldVersion, event.newVersion, Object(_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__["w"])(request.transaction));
        });
    }
    if (blocked)
        request.addEventListener('blocked', () => blocked());
    openPromise
        .then((db) => {
        if (terminated)
            db.addEventListener('close', () => terminated());
        if (blocking)
            db.addEventListener('versionchange', () => blocking());
    })
        .catch(() => { });
    return openPromise;
}
/**
 * Delete a database.
 *
 * @param name Name of the database.
 */
function deleteDB(name, { blocked } = {}) {
    const request = indexedDB.deleteDatabase(name);
    if (blocked)
        request.addEventListener('blocked', () => blocked());
    return Object(_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__["w"])(request).then(() => undefined);
}

const readMethods = ['get', 'getKey', 'getAll', 'getAllKeys', 'count'];
const writeMethods = ['put', 'add', 'delete', 'clear'];
const cachedMethods = new Map();
function getMethod(target, prop) {
    if (!(target instanceof IDBDatabase &&
        !(prop in target) &&
        typeof prop === 'string')) {
        return;
    }
    if (cachedMethods.get(prop))
        return cachedMethods.get(prop);
    const targetFuncName = prop.replace(/FromIndex$/, '');
    const useIndex = prop !== targetFuncName;
    const isWrite = writeMethods.includes(targetFuncName);
    if (
    // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
    !(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) ||
        !(isWrite || readMethods.includes(targetFuncName))) {
        return;
    }
    const method = async function (storeName, ...args) {
        // isWrite ? 'readwrite' : undefined gzipps better, but fails in Edge :(
        const tx = this.transaction(storeName, isWrite ? 'readwrite' : 'readonly');
        let target = tx.store;
        if (useIndex)
            target = target.index(args.shift());
        // Must reject if op rejects.
        // If it's a write operation, must reject if tx.done rejects.
        // Must reject with op rejection first.
        // Must resolve with op value.
        // Must handle both promises (no unhandled rejections)
        return (await Promise.all([
            target[targetFuncName](...args),
            isWrite && tx.done,
        ]))[0];
    };
    cachedMethods.set(prop, method);
    return method;
}
Object(_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__["r"])((oldTraps) => ({
    ...oldTraps,
    get: (target, prop, receiver) => getMethod(target, prop) || oldTraps.get(target, prop, receiver),
    has: (target, prop) => !!getMethod(target, prop) || oldTraps.has(target, prop),
}));




/***/ }),

/***/ "./node_modules/idb/build/esm/wrap-idb-value.js":
/*!******************************************************!*\
  !*** ./node_modules/idb/build/esm/wrap-idb-value.js ***!
  \******************************************************/
/*! exports provided: a, i, r, u, w */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reverseTransformCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return instanceOfAny; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return replaceTraps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return unwrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return wrap; });
const instanceOfAny = (object, constructors) => constructors.some((c) => object instanceof c);

let idbProxyableTypes;
let cursorAdvanceMethods;
// This is a function to prevent it throwing up in node environments.
function getIdbProxyableTypes() {
    return (idbProxyableTypes ||
        (idbProxyableTypes = [
            IDBDatabase,
            IDBObjectStore,
            IDBIndex,
            IDBCursor,
            IDBTransaction,
        ]));
}
// This is a function to prevent it throwing up in node environments.
function getCursorAdvanceMethods() {
    return (cursorAdvanceMethods ||
        (cursorAdvanceMethods = [
            IDBCursor.prototype.advance,
            IDBCursor.prototype.continue,
            IDBCursor.prototype.continuePrimaryKey,
        ]));
}
const cursorRequestMap = new WeakMap();
const transactionDoneMap = new WeakMap();
const transactionStoreNamesMap = new WeakMap();
const transformCache = new WeakMap();
const reverseTransformCache = new WeakMap();
function promisifyRequest(request) {
    const promise = new Promise((resolve, reject) => {
        const unlisten = () => {
            request.removeEventListener('success', success);
            request.removeEventListener('error', error);
        };
        const success = () => {
            resolve(wrap(request.result));
            unlisten();
        };
        const error = () => {
            reject(request.error);
            unlisten();
        };
        request.addEventListener('success', success);
        request.addEventListener('error', error);
    });
    promise
        .then((value) => {
        // Since cursoring reuses the IDBRequest (*sigh*), we cache it for later retrieval
        // (see wrapFunction).
        if (value instanceof IDBCursor) {
            cursorRequestMap.set(value, request);
        }
        // Catching to avoid "Uncaught Promise exceptions"
    })
        .catch(() => { });
    // This mapping exists in reverseTransformCache but doesn't doesn't exist in transformCache. This
    // is because we create many promises from a single IDBRequest.
    reverseTransformCache.set(promise, request);
    return promise;
}
function cacheDonePromiseForTransaction(tx) {
    // Early bail if we've already created a done promise for this transaction.
    if (transactionDoneMap.has(tx))
        return;
    const done = new Promise((resolve, reject) => {
        const unlisten = () => {
            tx.removeEventListener('complete', complete);
            tx.removeEventListener('error', error);
            tx.removeEventListener('abort', error);
        };
        const complete = () => {
            resolve();
            unlisten();
        };
        const error = () => {
            reject(tx.error || new DOMException('AbortError', 'AbortError'));
            unlisten();
        };
        tx.addEventListener('complete', complete);
        tx.addEventListener('error', error);
        tx.addEventListener('abort', error);
    });
    // Cache it for later retrieval.
    transactionDoneMap.set(tx, done);
}
let idbProxyTraps = {
    get(target, prop, receiver) {
        if (target instanceof IDBTransaction) {
            // Special handling for transaction.done.
            if (prop === 'done')
                return transactionDoneMap.get(target);
            // Polyfill for objectStoreNames because of Edge.
            if (prop === 'objectStoreNames') {
                return target.objectStoreNames || transactionStoreNamesMap.get(target);
            }
            // Make tx.store return the only store in the transaction, or undefined if there are many.
            if (prop === 'store') {
                return receiver.objectStoreNames[1]
                    ? undefined
                    : receiver.objectStore(receiver.objectStoreNames[0]);
            }
        }
        // Else transform whatever we get back.
        return wrap(target[prop]);
    },
    set(target, prop, value) {
        target[prop] = value;
        return true;
    },
    has(target, prop) {
        if (target instanceof IDBTransaction &&
            (prop === 'done' || prop === 'store')) {
            return true;
        }
        return prop in target;
    },
};
function replaceTraps(callback) {
    idbProxyTraps = callback(idbProxyTraps);
}
function wrapFunction(func) {
    // Due to expected object equality (which is enforced by the caching in `wrap`), we
    // only create one new func per func.
    // Edge doesn't support objectStoreNames (booo), so we polyfill it here.
    if (func === IDBDatabase.prototype.transaction &&
        !('objectStoreNames' in IDBTransaction.prototype)) {
        return function (storeNames, ...args) {
            const tx = func.call(unwrap(this), storeNames, ...args);
            transactionStoreNamesMap.set(tx, storeNames.sort ? storeNames.sort() : [storeNames]);
            return wrap(tx);
        };
    }
    // Cursor methods are special, as the behaviour is a little more different to standard IDB. In
    // IDB, you advance the cursor and wait for a new 'success' on the IDBRequest that gave you the
    // cursor. It's kinda like a promise that can resolve with many values. That doesn't make sense
    // with real promises, so each advance methods returns a new promise for the cursor object, or
    // undefined if the end of the cursor has been reached.
    if (getCursorAdvanceMethods().includes(func)) {
        return function (...args) {
            // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
            // the original object.
            func.apply(unwrap(this), args);
            return wrap(cursorRequestMap.get(this));
        };
    }
    return function (...args) {
        // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
        // the original object.
        return wrap(func.apply(unwrap(this), args));
    };
}
function transformCachableValue(value) {
    if (typeof value === 'function')
        return wrapFunction(value);
    // This doesn't return, it just creates a 'done' promise for the transaction,
    // which is later returned for transaction.done (see idbObjectHandler).
    if (value instanceof IDBTransaction)
        cacheDonePromiseForTransaction(value);
    if (instanceOfAny(value, getIdbProxyableTypes()))
        return new Proxy(value, idbProxyTraps);
    // Return the same value back if we're not going to transform it.
    return value;
}
function wrap(value) {
    // We sometimes generate multiple promises from a single IDBRequest (eg when cursoring), because
    // IDB is weird and a single IDBRequest can yield many responses, so these can't be cached.
    if (value instanceof IDBRequest)
        return promisifyRequest(value);
    // If we've already transformed this value before, reuse the transformed value.
    // This is faster, but it also provides object equality.
    if (transformCache.has(value))
        return transformCache.get(value);
    const newValue = transformCachableValue(value);
    // Not all types are transformed.
    // These may be primitive types, so they can't be WeakMap keys.
    if (newValue !== value) {
        transformCache.set(value, newValue);
        reverseTransformCache.set(newValue, value);
    }
    return newValue;
}
const unwrap = (value) => reverseTransformCache.get(value);




/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/applyDecoratedDescriptor.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/applyDecoratedDescriptor.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _applyDecoratedDescriptor; });
function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object.keys(descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object.defineProperty(target, property, desc);
    desc = null;
  }

  return desc;
}

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/initializerDefineProperty.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/initializerDefineProperty.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _initializerDefineProperty; });
function _initializerDefineProperty(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/initializerWarningHelper.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/initializerWarningHelper.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _initializerWarningHelper; });
function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.');
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tbW9uL2RvbS9kb3dubG9hZEJsb2IudHMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbW1vbi9vYmplY3QvbWFwS2V5cy50cyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tbW9uL29iamVjdC90b1NuYWtlQ2FzZS50cyIsIndlYnBhY2s6Ly9fTl9FLy4vaWNvbnMvc2F2ZS50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL2ljb25zL3RyYXNoLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vaWNvbnMvdXBsb2FkLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy9kYXRhYmFzZS9EYXRhYmFzZU1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vX05fRS8uL21vZHVsZXMvZGF0YWJhc2UvRGF0YWJhc2VNYW5hZ2VyQ29udGV4dC50cyIsIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy9kYXRhYmFzZS9iYWNrdXAvQmFja3VwTWFuYWdlci50cyIsIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy9kYXRhYmFzZS9iYWNrdXAvQmFja3VwTWFuYWdlckNvbnRleHQudHMiLCJ3ZWJwYWNrOi8vX05fRS8uL21vZHVsZXMvZGF0YWJhc2UvYmFja3VwL21vZGFsL0JhY2t1cENyZWF0aW9uQ29udHJvbHMudHN4Iiwid2VicGFjazovL19OX0UvLi9tb2R1bGVzL2RhdGFiYXNlL2JhY2t1cC9tb2RhbC9CYWNrdXBJdGVtLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy9kYXRhYmFzZS9iYWNrdXAvbW9kYWwvQmFja3VwTGlzdC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL21vZHVsZXMvZGF0YWJhc2UvYmFja3VwL21vZGFsL0JhY2t1cHNNb2RhbC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL21vZHVsZXMvZGF0YWJhc2UvYmFja3VwL21vZGFsL0RlbGV0aW9uQ29uZmlybWF0aW9uTW9kYWwudHN4Iiwid2VicGFjazovL19OX0UvLi9tb2R1bGVzL2RhdGFiYXNlL2Nvbm5lY3Rpb24vb3BlbkRhdGFiYXNlLnRzIiwid2VicGFjazovL19OX0UvLi9tb2R1bGVzL2RhdGFiYXNlL2Nvbm5lY3Rpb24vc2hvd1VwZ3JhZGVCbG9ja2VkTWVzc2FnZS50cyIsIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy9kYXRhYmFzZS9jb25uZWN0aW9uL3VwZ3JhZGVEYXRhYmFzZS50cyIsIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy9kYXRhYmFzZS9wZXJzaXN0L1BlcnNpc3RlbnRTdG9yYWdlV2FybmluZy50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL21vZHVsZXMvZGF0YWJhc2UvcGVyc2lzdC9QdXNoTm90aWZpY2F0aW9uTW9kYWwudHN4Iiwid2VicGFjazovL19OX0UvLi9tb2R1bGVzL21lc3NhZ2UvaGVscGVycy9tZXNzYWdlT2YudHMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9pZGIvYnVpbGQvZXNtL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvaWRiL2J1aWxkL2VzbS93cmFwLWlkYi12YWx1ZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FwcGx5RGVjb3JhdGVkRGVzY3JpcHRvci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaXRpYWxpemVyRGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbml0aWFsaXplcldhcm5pbmdIZWxwZXIuanMiXSwibmFtZXMiOlsiZG93bmxvYWRCbG9iIiwiYmxvYiIsIm5hbWUiLCJ1cmwiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJhbmNob3IiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJib2R5IiwiYXBwZW5kIiwiaHJlZiIsImRvd25sb2FkIiwiY2xpY2siLCJyZW1vdmUiLCJyZXZva2VPYmplY3RVUkwiLCJpc09iamVjdCIsInZhbHVlIiwibWFwS2V5cyIsIm9iamVjdCIsImZuIiwiQXJyYXkiLCJpc0FycmF5IiwibWFwIiwicmVzdWx0Iiwia2V5IiwiT2JqZWN0IiwiZW50cmllcyIsInRvU25ha2VDYXNlIiwicmVwbGFjZSIsIm1hdGNoIiwidG9Mb3dlckNhc2UiLCJzYXZlIiwidHJhc2giLCJ1cGxvYWQiLCJEYXRhYmFzZU1hbmFnZXIiLCJjb25zdHJ1Y3RvciIsImluaXRpYWxpemVkIiwiZGF0YWJhc2UiLCJtYXJrQXNJbml0aWFsaXplZCIsIlByb21pc2UiLCJyZXNvbHZlIiwibmF2aWdhdG9yIiwic3RvcmFnZSIsInBlcnNpc3RlZCIsInRoZW4iLCJjYXRjaCIsIm9wZW5EYXRhYmFzZSIsImVycm9yIiwiY29uc29sZSIsInJlcXVlc3RQZXJzaXN0ZW5jZSIsIndpbmRvdyIsIk5vdGlmaWNhdGlvbiIsInJlcXVlc3RQZXJtaXNzaW9uIiwicGVyc2lzdCIsInNob3VsZFNob3dQZXJzaXN0ZW5jZVdhcm5pbmciLCJwZXJzaXN0ZW5jZU1lc3NhZ2VEaXNtaXNzZWQiLCJvYnNlcnZhYmxlIiwiY29tcHV0ZWQiLCJEYXRhYmFzZU1hbmFnZXJDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsImRpc3BsYXlOYW1lIiwiRGF0YWJhc2VNYW5hZ2VyUHJvdmlkZXIiLCJQcm92aWRlciIsIkJhY2t1cE1hbmFnZXIiLCJkYXRhYmFzZU1hbmFnZXIiLCJlZGl0b3JNYW5hZ2VyIiwibG9hZEJhY2t1cExpc3QiLCJiYWNrdXBzIiwiY3Vyc29yIiwidHJhbnNhY3Rpb24iLCJvYmplY3RTdG9yZSIsImluZGV4Iiwib3BlbktleUN1cnNvciIsInB1c2giLCJpZCIsInByaW1hcnlLZXkiLCJjb250aW51ZSIsInJ1bkluQWN0aW9uIiwiZ2V0SWQiLCJnZXRLZXkiLCJsb2FkQmFja3VwIiwiYmFja3VwIiwiZ2V0Iiwic2V0IiwibWVzc2FnZXMiLCJkYXRhIiwibWVzc2FnZSIsIm1lc3NhZ2VPZiIsInRhcmdldHMiLCJ0YXJnZXQiLCJmZXRjaCIsInNhdmVCYWNrdXAiLCJmaWxlcyIsInVuZGVmaW5lZCIsInJlZmVyZW5jZSIsInB1dCIsImRlbGV0ZUJhY2t1cCIsImRlbGV0ZSIsImV4cG9ydEJhY2t1cCIsImJhY2t1cERhdGEiLCJ2ZXJzaW9uIiwiQmxvYiIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0eXBlIiwiZXhwb3J0QWxsIiwib3BlbkN1cnNvciIsImdldFNhZmVCYWNrdXBOYW1lIiwibnVtYmVyIiwicHJvcG9zZWROYW1lIiwiaW1wb3J0QmFja3VwcyIsImV4cG9ydERhdGEiLCJwYXJzZSIsInRleHQiLCJ3ZWJob29rVXJsIiwiQmFja3VwTWFuYWdlckNvbnRleHQiLCJCYWNrdXBNYW5hZ2VyUHJvdmlkZXIiLCJCYWNrdXBDcmVhdGlvbkNvbnRyb2xzIiwiYmFja3VwTWFuYWdlciIsInVzZVJlcXVpcmVkQ29udGV4dCIsImJhY2t1cE5hbWUiLCJzZXRCYWNrdXBOYW1lIiwidXNlU3RhdGUiLCJ1c2VPYnNlcnZlciIsImxlbmd0aCIsInRyaW0iLCJzb21lIiwiQ29udGFpbmVyIiwic3R5bGVkIiwibGkiLCJ0aGVtZSIsImJhY2tncm91bmRNb2RpZmllciIsImFjY2VudCIsIkJ1dHRvbiIsIkJhY2t1cE5hbWUiLCJkaXYiLCJlbGxpcHNpcyIsIkJhY2t1cEl0ZW0iLCJwcm9wcyIsIm1vZGFsTWFuYWdlciIsIk1vZGFsTWFuYWdlckNvbnRleHQiLCJpY29uIiwibGFiZWwiLCJoYW5kbGVyIiwib3ZlcmZsb3ciLCJjb3B5Iiwic3Bhd24iLCJyZW5kZXIiLCJ1bCIsIkJhY2t1cExpc3QiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJmaWx0ZXIiLCJ0b0xvY2FsZUxvd2VyQ2FzZSIsImluY2x1ZGVzIiwiQmFja3Vwc01vZGFsIiwidXNlTGF6eVZhbHVlIiwibW9kYWwiLCJNb2RhbENvbnRleHQiLCJmaWxlSW5wdXRSZWYiLCJ1c2VSZWYiLCJkaXNwbGF5IiwiZXZlbnQiLCJmaWxlIiwiaXRlbSIsInNsaWNlIiwiZGlzbWlzcyIsImN1cnJlbnQiLCJEZWxldGlvbkNvbmZpcm1hdGlvbk1vZGFsIiwib3BlbkRCIiwidXBncmFkZSIsIm9sZFZlcnNpb24iLCJuZXdWZXJzaW9uIiwidXBncmFkZURhdGFiYXNlIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInF1ZXJ5U2VsZWN0b3IiLCJibG9ja2VkIiwic2hvd1VwZ3JhZGVCbG9ja2VkTWVzc2FnZSIsImNvbnRhaW5lciIsInN0eWxlIiwicG9zaXRpb24iLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJiYWNrZ3JvdW5kIiwicGFkZGluZyIsImhlYWRlciIsImNvbG9yIiwiYmxvY2tlZE1lc3NhZ2UiLCJjbG9zZVRhYnNNZXNzYWdlIiwidXBkYXRlIiwiY3JlYXRlT2JqZWN0U3RvcmUiLCJrZXlQYXRoIiwiYXV0b0luY3JlbWVudCIsImJhY2t1cFN0b3JlIiwiY3JlYXRlSW5kZXgiLCJ1bmlxdWUiLCJleGlzdGluZ0JhY2t1cHMiLCJTZXQiLCJuYW1lQ3Vyc29yIiwiYWRkIiwiaGFzIiwicmVzdCIsInNlY29uZGFyeSIsIkhlYWRlciIsImg1IiwicHJpbWFyeSIsIkJ1dHRvbnMiLCJCdXR0b25Sb3ciLCJQZXJzaXN0ZW50U3RvcmFnZVdhcm5pbmciLCJQdXNoTm90aWZpY2F0aW9uTW9kYWwiLCJzbmFwc2hvdCIsImNvbnRlbnQiLCJ1c2VybmFtZSIsImF2YXRhciIsImF2YXRhcl91cmwiLCJlbWJlZHMiLCJlbWJlZERhdGEiLCJlbWJlZCIsImdhbGxlcnkiLCJpbWFnZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJhdXRob3IiLCJhdXRob3JVcmwiLCJhdXRob3JJY29uIiwiaWNvbl91cmwiLCJmb290ZXIiLCJmb290ZXJJY29uIiwidGltZXN0YW1wIiwiRGF0ZSIsIk51bWJlciIsIk5hTiIsIkJvb2xlYW4iLCJ0aHVtYm5haWwiLCJDb2xvck1vZGVsIiwi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bmxvYWRCbG9iID0gKGJsb2I6IEJsb2IsIG5hbWU6IHN0cmluZykgPT4ge1xyXG4gIGNvbnN0IHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYilcclxuXHJcbiAgY29uc3QgYW5jaG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIilcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZChhbmNob3IpXHJcblxyXG4gIGFuY2hvci5ocmVmID0gdXJsXHJcbiAgYW5jaG9yLmRvd25sb2FkID0gbmFtZVxyXG5cclxuICBhbmNob3IuY2xpY2soKVxyXG5cclxuICBhbmNob3IucmVtb3ZlKClcclxuICBVUkwucmV2b2tlT2JqZWN0VVJMKHVybClcclxufVxyXG4iLCJjb25zdCBpc09iamVjdCA9ICh2YWx1ZTogdW5rbm93bikgPT4gdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHZhbHVlICE9PSBudWxsXHJcblxyXG5leHBvcnQgY29uc3QgbWFwS2V5cyA9IChcclxuICBvYmplY3Q6IHVua25vd24sXHJcbiAgZm46IChrZXk6IHN0cmluZykgPT4gc3RyaW5nLFxyXG4pOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB8IHVua25vd25bXSA9PiB7XHJcbiAgaWYgKEFycmF5LmlzQXJyYXkob2JqZWN0KSkge1xyXG4gICAgcmV0dXJuIG9iamVjdC5tYXAodmFsdWUgPT4gKGlzT2JqZWN0KHZhbHVlKSA/IG1hcEtleXModmFsdWUsIGZuKSA6IHZhbHVlKSlcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlc3VsdDogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gPSB7fVxyXG5cclxuICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhcclxuICAgIG9iamVjdCBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPixcclxuICApKSB7XHJcbiAgICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XHJcbiAgICAgIHJlc3VsdFtmbihrZXkpXSA9IG1hcEtleXModmFsdWUsIGZuKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVzdWx0W2ZuKGtleSldID0gdmFsdWVcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiByZXN1bHRcclxufVxyXG4iLCJpbXBvcnQgeyBtYXBLZXlzIH0gZnJvbSBcIi4vbWFwS2V5c1wiXHJcblxyXG5leHBvcnQgY29uc3QgdG9TbmFrZUNhc2UgPSAob2JqZWN0OiB1bmtub3duKSA9PlxyXG4gIG1hcEtleXMob2JqZWN0LCBrZXkgPT5cclxuICAgIGtleS5yZXBsYWNlKC9bQS1aXS9nLCBtYXRjaCA9PiBgXyR7bWF0Y2gudG9Mb3dlckNhc2UoKX1gKSxcclxuICApXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5cclxuZXhwb3J0IGNvbnN0IHNhdmUgPSAoXHJcbiAgPHN2ZyB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgZmlsbD1cIm5vbmVcIj5cclxuICAgIDxwYXRoXHJcbiAgICAgIGQ9XCJNMTEgMTVWOUg1VjE1TTUgMUw0Ljk5OTk5IDVIMTBNMTMuNjY2NyAxNUgyLjMzMzMzQzEuOTc5NzEgMTUgMS42NDA1NyAxNC44NTk1IDEuMzkwNTIgMTQuNjA5NUMxLjE0MDQ4IDE0LjM1OTQgMSAxNC4wMjAzIDEgMTMuNjY2N1YyLjMzMzMzQzEgMS45Nzk3MSAxLjE0MDQ4IDEuNjQwNTcgMS4zOTA1MiAxLjM5MDUyQzEuNjQwNTcgMS4xNDA0OCAxLjk3OTcxIDEgMi4zMzMzMyAxSDExLjY2NjdMMTUgNC4zMzMzM1YxMy42NjY3QzE1IDE0LjAyMDMgMTQuODU5NSAxNC4zNTk0IDE0LjYwOTUgMTQuNjA5NUMxNC4zNTk0IDE0Ljg1OTUgMTQuMDIwMyAxNSAxMy42NjY3IDE1WlwiXHJcbiAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXHJcbiAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgLz5cclxuICA8L3N2Zz5cclxuKVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuXHJcbmV4cG9ydCBjb25zdCB0cmFzaCA9IChcclxuICA8c3ZnIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiBmaWxsPVwibm9uZVwiPlxyXG4gICAgPHBhdGhcclxuICAgICAgZD1cIk0xIDRMMi45OTk5OSAzLjk5OTk4TTIuOTk5OTkgMy45OTk5OFYxMy41QzIuOTk5OTkgMTQuMzI4NCAzLjY3MTU2IDE1IDQuNDk5OTkgMTVMMTEuNSAxNUMxMi4zMjg0IDE1IDEzIDE0LjMyODQgMTMgMTMuNVY0TTIuOTk5OTkgMy45OTk5OEg1LjMzMzMzTTEzIDRIMTVNMTMgNEwxMC42NjY3IDMuOTk5OThNNS4zMzMzMyAzLjk5OTk4VjIuNUM1LjMzMzMzIDEuNjcxNTcgNi4wMDQ5MSAxIDYuODMzMzMgMUg5LjE2NjY3QzkuOTk1MDkgMSAxMC42NjY3IDEuNjcxNTcgMTAuNjY2NyAyLjVWMy45OTk5OE01LjMzMzMzIDMuOTk5OThIMTAuNjY2N1wiXHJcbiAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXHJcbiAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgLz5cclxuICA8L3N2Zz5cclxuKVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuXHJcbmV4cG9ydCBjb25zdCB1cGxvYWQgPSAoXHJcbiAgPHN2ZyB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgZmlsbD1cIm5vbmVcIj5cclxuICAgIDxwYXRoXHJcbiAgICAgIGQ9XCJNMTQgMTBWMTIuNjY2N0MxNCAxMy4wMjAzIDEzLjg1OTUgMTMuMzU5NCAxMy42MDk1IDEzLjYwOTVDMTMuMzU5NCAxMy44NTk1IDEzLjAyMDMgMTQgMTIuNjY2NyAxNEgzLjMzMzMzQzIuOTc5NzEgMTQgMi42NDA1NyAxMy44NTk1IDIuMzkwNTIgMTMuNjA5NUMyLjE0MDQ4IDEzLjM1OTQgMiAxMy4wMjAzIDIgMTIuNjY2N1YxME00LjY2NjY3IDUuMzMzMzNMOCAyTTggMkwxMS4zMzMzIDUuMzMzMzNNOCAyVjEwXCJcclxuICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcclxuICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAvPlxyXG4gIDwvc3ZnPlxyXG4pXHJcbiIsImltcG9ydCB0eXBlIHsgSURCUERhdGFiYXNlIH0gZnJvbSBcImlkYlwiXHJcbmltcG9ydCB7IGNvbXB1dGVkLCBvYnNlcnZhYmxlIH0gZnJvbSBcIm1vYnhcIlxyXG5pbXBvcnQgeyBvcGVuRGF0YWJhc2UgfSBmcm9tIFwiLi9jb25uZWN0aW9uL29wZW5EYXRhYmFzZVwiXHJcbmltcG9ydCB0eXBlIHsgU2NoZW1hIH0gZnJvbSBcIi4vU2NoZW1hXCJcclxuXHJcbmV4cG9ydCBjbGFzcyBEYXRhYmFzZU1hbmFnZXIge1xyXG4gIGluaXRpYWxpemVkOiBQcm9taXNlPHZvaWQ+XHJcbiAgZGF0YWJhc2UhOiBJREJQRGF0YWJhc2U8U2NoZW1hPlxyXG5cclxuICBAb2JzZXJ2YWJsZSBwZXJzaXN0ZWQgPSB0cnVlXHJcbiAgQG9ic2VydmFibGUgcGVyc2lzdGVuY2VNZXNzYWdlRGlzbWlzc2VkID0gZmFsc2VcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBsZXQgbWFya0FzSW5pdGlhbGl6ZWQ6ICgpID0+IHZvaWRcclxuICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgICAgbWFya0FzSW5pdGlhbGl6ZWQgPSByZXNvbHZlXHJcbiAgICB9KVxyXG5cclxuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSByZXR1cm5cclxuXHJcbiAgICBpZiAoXCJzdG9yYWdlXCIgaW4gbmF2aWdhdG9yKSB7XHJcbiAgICAgIG5hdmlnYXRvci5zdG9yYWdlXHJcbiAgICAgICAgLnBlcnNpc3RlZCgpXHJcbiAgICAgICAgLnRoZW4ocGVyc2lzdGVkID0+IHtcclxuICAgICAgICAgIHRoaXMucGVyc2lzdGVkID0gcGVyc2lzdGVkXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKCkgPT4ge30pXHJcbiAgICB9XHJcblxyXG4gICAgb3BlbkRhdGFiYXNlKClcclxuICAgICAgLnRoZW4oZGF0YWJhc2UgPT4ge1xyXG4gICAgICAgIHRoaXMuZGF0YWJhc2UgPSBkYXRhYmFzZVxyXG4gICAgICAgIG1hcmtBc0luaXRpYWxpemVkKClcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIG9wZW4gZGF0YWJhc2U6XCIsIGVycm9yKVxyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgcmVxdWVzdFBlcnNpc3RlbmNlKCkge1xyXG4gICAgaWYgKFwiY2hyb21lXCIgaW4gd2luZG93KSB7XHJcbiAgICAgIGF3YWl0IE5vdGlmaWNhdGlvbi5yZXF1ZXN0UGVybWlzc2lvbigpXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKFwic3RvcmFnZVwiIGluIG5hdmlnYXRvcikge1xyXG4gICAgICB0aGlzLnBlcnNpc3RlZCA9IGF3YWl0IG5hdmlnYXRvci5zdG9yYWdlLnBlcnNpc3QoKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQGNvbXB1dGVkIGdldCBzaG91bGRTaG93UGVyc2lzdGVuY2VXYXJuaW5nKCkge1xyXG4gICAgcmV0dXJuICF0aGlzLnBlcnNpc3RlZCAmJiAhdGhpcy5wZXJzaXN0ZW5jZU1lc3NhZ2VEaXNtaXNzZWRcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB0eXBlIHsgRGF0YWJhc2VNYW5hZ2VyIH0gZnJvbSBcIi4vRGF0YWJhc2VNYW5hZ2VyXCJcclxuXHJcbmV4cG9ydCBjb25zdCBEYXRhYmFzZU1hbmFnZXJDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxEYXRhYmFzZU1hbmFnZXIgfCBudWxsPihcclxuICBudWxsLFxyXG4pXHJcblxyXG5EYXRhYmFzZU1hbmFnZXJDb250ZXh0LmRpc3BsYXlOYW1lID0gXCJEYXRhYmFzZU1hbmFnZXJDb250ZXh0XCJcclxuXHJcbmV4cG9ydCBjb25zdCBEYXRhYmFzZU1hbmFnZXJQcm92aWRlciA9IERhdGFiYXNlTWFuYWdlckNvbnRleHQuUHJvdmlkZXJcclxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tYXdhaXQtaW4tbG9vcCAqL1xyXG5cclxuaW1wb3J0IHsgb2JzZXJ2YWJsZSwgcnVuSW5BY3Rpb24gfSBmcm9tIFwibW9ieFwiXHJcbmltcG9ydCB7IGRvd25sb2FkQmxvYiB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZG9tL2Rvd25sb2FkQmxvYlwiXHJcbmltcG9ydCB7IHRvU25ha2VDYXNlIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9vYmplY3QvdG9TbmFrZUNhc2VcIlxyXG5pbXBvcnQgdHlwZSB7IEVkaXRvck1hbmFnZXJMaWtlIH0gZnJvbSBcIi4uLy4uL2VkaXRvci9FZGl0b3JNYW5hZ2VyXCJcclxuaW1wb3J0IHsgbWVzc2FnZU9mIH0gZnJvbSBcIi4uLy4uL21lc3NhZ2UvaGVscGVycy9tZXNzYWdlT2ZcIlxyXG5pbXBvcnQgdHlwZSB7IE1lc3NhZ2VEYXRhIH0gZnJvbSBcIi4uLy4uL21lc3NhZ2Uvc3RhdGUvZGF0YS9NZXNzYWdlRGF0YVwiXHJcbmltcG9ydCB0eXBlIHsgRGF0YWJhc2VNYW5hZ2VyIH0gZnJvbSBcIi4uL0RhdGFiYXNlTWFuYWdlclwiXHJcbmltcG9ydCB0eXBlIHsgQmFja3VwIH0gZnJvbSBcIi4vdHlwZXMvQmFja3VwXCJcclxuaW1wb3J0IHR5cGUgeyBCYWNrdXBEYXRhIH0gZnJvbSBcIi4vdHlwZXMvQmFja3VwRGF0YVwiXHJcbmltcG9ydCB0eXBlIHsgRXhwb3J0RGF0YSB9IGZyb20gXCIuL3R5cGVzL0V4cG9ydERhdGFcIlxyXG5cclxuZXhwb3J0IGNsYXNzIEJhY2t1cE1hbmFnZXIge1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgZGF0YWJhc2VNYW5hZ2VyOiBEYXRhYmFzZU1hbmFnZXJcclxuICBwcml2YXRlIHJlYWRvbmx5IGVkaXRvck1hbmFnZXI6IEVkaXRvck1hbmFnZXJMaWtlXHJcblxyXG4gIEBvYnNlcnZhYmxlIGJhY2t1cHM6IEJhY2t1cERhdGFbXSA9IFtdXHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgZGF0YWJhc2VNYW5hZ2VyOiBEYXRhYmFzZU1hbmFnZXIsXHJcbiAgICBlZGl0b3JNYW5hZ2VyOiBFZGl0b3JNYW5hZ2VyTGlrZSxcclxuICApIHtcclxuICAgIHRoaXMuZGF0YWJhc2VNYW5hZ2VyID0gZGF0YWJhc2VNYW5hZ2VyXHJcbiAgICB0aGlzLmVkaXRvck1hbmFnZXIgPSBlZGl0b3JNYW5hZ2VyXHJcblxyXG4gICAgZGF0YWJhc2VNYW5hZ2VyLmluaXRpYWxpemVkXHJcbiAgICAgIC50aGVuKGFzeW5jICgpID0+IHtcclxuICAgICAgICBhd2FpdCB0aGlzLmxvYWRCYWNrdXBMaXN0KClcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKCgpID0+IHt9KVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhc3luYyBsb2FkQmFja3VwTGlzdCgpIHtcclxuICAgIGNvbnN0IGJhY2t1cHM6IEJhY2t1cERhdGFbXSA9IFtdXHJcblxyXG4gICAgbGV0IGN1cnNvciA9IGF3YWl0IHRoaXMuZGF0YWJhc2VNYW5hZ2VyLmRhdGFiYXNlXHJcbiAgICAgIC50cmFuc2FjdGlvbihcImJhY2t1cFwiKVxyXG4gICAgICAub2JqZWN0U3RvcmUoXCJiYWNrdXBcIilcclxuICAgICAgLmluZGV4KFwibmFtZVwiKVxyXG4gICAgICAub3BlbktleUN1cnNvcigpXHJcblxyXG4gICAgd2hpbGUgKGN1cnNvcikge1xyXG4gICAgICBiYWNrdXBzLnB1c2goe1xyXG4gICAgICAgIGlkOiBjdXJzb3IucHJpbWFyeUtleSxcclxuICAgICAgICBuYW1lOiBjdXJzb3Iua2V5LFxyXG4gICAgICB9KVxyXG5cclxuICAgICAgY3Vyc29yID0gYXdhaXQgY3Vyc29yLmNvbnRpbnVlKClcclxuICAgIH1cclxuXHJcbiAgICBydW5JbkFjdGlvbigoKSA9PiB7XHJcbiAgICAgIHRoaXMuYmFja3VwcyA9IGJhY2t1cHNcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFzeW5jIGdldElkKG5hbWU6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMuZGF0YWJhc2VNYW5hZ2VyLmRhdGFiYXNlXHJcbiAgICAgIC50cmFuc2FjdGlvbihcImJhY2t1cFwiKVxyXG4gICAgICAub2JqZWN0U3RvcmUoXCJiYWNrdXBcIilcclxuICAgICAgLmluZGV4KFwibmFtZVwiKVxyXG4gICAgICAuZ2V0S2V5KG5hbWUpXHJcbiAgfVxyXG5cclxuICBhc3luYyBsb2FkQmFja3VwKG5hbWU6IHN0cmluZykge1xyXG4gICAgY29uc3QgYmFja3VwID0gYXdhaXQgdGhpcy5kYXRhYmFzZU1hbmFnZXIuZGF0YWJhc2VcclxuICAgICAgLnRyYW5zYWN0aW9uKFwiYmFja3VwXCIpXHJcbiAgICAgIC5vYmplY3RTdG9yZShcImJhY2t1cFwiKVxyXG4gICAgICAuaW5kZXgoXCJuYW1lXCIpXHJcbiAgICAgIC5nZXQobmFtZSlcclxuXHJcbiAgICBpZiAoIWJhY2t1cCkgcmV0dXJuXHJcblxyXG4gICAgdGhpcy5lZGl0b3JNYW5hZ2VyLnNldChcclxuICAgICAgXCJtZXNzYWdlc1wiLFxyXG4gICAgICBiYWNrdXAubWVzc2FnZXMubWFwKCh7IGRhdGEsIC4uLm1lc3NhZ2UgfSkgPT4gKHtcclxuICAgICAgICAuLi5tZXNzYWdlT2YoZGF0YSksXHJcbiAgICAgICAgLi4ubWVzc2FnZSxcclxuICAgICAgfSkpLFxyXG4gICAgKVxyXG4gICAgdGhpcy5lZGl0b3JNYW5hZ2VyLnNldChcInRhcmdldHNcIiwgYmFja3VwLnRhcmdldHMpXHJcbiAgICBmb3IgKGNvbnN0IHRhcmdldCBvZiB0aGlzLmVkaXRvck1hbmFnZXIudGFyZ2V0cykge1xyXG4gICAgICB0YXJnZXQuZmV0Y2goKS5jYXRjaCgoKSA9PiB7fSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIHNhdmVCYWNrdXAoYmFja3VwOiBzdHJpbmcgfCBCYWNrdXApIHtcclxuICAgIGlmICh0eXBlb2YgYmFja3VwID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgIGNvbnN0IGlkID0gYXdhaXQgdGhpcy5nZXRJZChiYWNrdXApXHJcblxyXG4gICAgICBiYWNrdXAgPSB7XHJcbiAgICAgICAgaWQsXHJcbiAgICAgICAgbmFtZTogYmFja3VwLFxyXG4gICAgICAgIG1lc3NhZ2VzOiB0aGlzLmVkaXRvck1hbmFnZXIubWVzc2FnZXMubWFwKG1lc3NhZ2UgPT4gKHtcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgLi4ubWVzc2FnZS5kYXRhLFxyXG4gICAgICAgICAgICBmaWxlczogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHJlZmVyZW5jZTogbWVzc2FnZS5yZWZlcmVuY2UsXHJcbiAgICAgICAgfSkpLFxyXG4gICAgICAgIHRhcmdldHM6IHRoaXMuZWRpdG9yTWFuYWdlci50YXJnZXRzLm1hcCh0YXJnZXQgPT4gKHtcclxuICAgICAgICAgIHVybDogdGFyZ2V0LnVybCxcclxuICAgICAgICB9KSksXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGJhY2t1cCA9IHtcclxuICAgICAgICAuLi5iYWNrdXAsXHJcbiAgICAgICAgaWQ6IGF3YWl0IHRoaXMuZ2V0SWQoYmFja3VwLm5hbWUpLFxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFiYWNrdXAuaWQpIGRlbGV0ZSBiYWNrdXAuaWRcclxuXHJcbiAgICBhd2FpdCB0aGlzLmRhdGFiYXNlTWFuYWdlci5kYXRhYmFzZVxyXG4gICAgICAudHJhbnNhY3Rpb24oXCJiYWNrdXBcIiwgXCJyZWFkd3JpdGVcIilcclxuICAgICAgLm9iamVjdFN0b3JlKFwiYmFja3VwXCIpXHJcbiAgICAgIC5wdXQoYmFja3VwKVxyXG5cclxuICAgIGF3YWl0IHRoaXMubG9hZEJhY2t1cExpc3QoKVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZGVsZXRlQmFja3VwKG5hbWU6IHN0cmluZykge1xyXG4gICAgY29uc3QgaWQgPSBhd2FpdCB0aGlzLmdldElkKG5hbWUpXHJcbiAgICBpZiAoIWlkKSByZXR1cm5cclxuXHJcbiAgICBhd2FpdCB0aGlzLmRhdGFiYXNlTWFuYWdlci5kYXRhYmFzZVxyXG4gICAgICAudHJhbnNhY3Rpb24oXCJiYWNrdXBcIiwgXCJyZWFkd3JpdGVcIilcclxuICAgICAgLm9iamVjdFN0b3JlKFwiYmFja3VwXCIpXHJcbiAgICAgIC5kZWxldGUoaWQpXHJcblxyXG4gICAgYXdhaXQgdGhpcy5sb2FkQmFja3VwTGlzdCgpXHJcbiAgfVxyXG5cclxuICBhc3luYyBleHBvcnRCYWNrdXAobmFtZTogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBiYWNrdXAgPSBhd2FpdCB0aGlzLmRhdGFiYXNlTWFuYWdlci5kYXRhYmFzZVxyXG4gICAgICAudHJhbnNhY3Rpb24oXCJiYWNrdXBcIilcclxuICAgICAgLm9iamVjdFN0b3JlKFwiYmFja3VwXCIpXHJcbiAgICAgIC5pbmRleChcIm5hbWVcIilcclxuICAgICAgLmdldChuYW1lKVxyXG5cclxuICAgIGlmICghYmFja3VwKSByZXR1cm5cclxuXHJcbiAgICBjb25zdCBiYWNrdXBEYXRhOiBFeHBvcnREYXRhID0ge1xyXG4gICAgICB2ZXJzaW9uOiA3LFxyXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXHJcbiAgICAgIGJhY2t1cHM6IFtiYWNrdXBdLm1hcCgoeyBpZCwgLi4uYmFja3VwIH0pID0+IGJhY2t1cCksXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtKU09OLnN0cmluZ2lmeShiYWNrdXBEYXRhLCB1bmRlZmluZWQsIDIpLCBcIlxcblwiXSwge1xyXG4gICAgICB0eXBlOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgIH0pXHJcblxyXG4gICAgZG93bmxvYWRCbG9iKGJsb2IsIGAke25hbWV9Lmpzb25gKVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZXhwb3J0QWxsKCkge1xyXG4gICAgY29uc3QgYmFja3VwczogQmFja3VwW10gPSBbXVxyXG5cclxuICAgIGxldCBjdXJzb3IgPSBhd2FpdCB0aGlzLmRhdGFiYXNlTWFuYWdlci5kYXRhYmFzZVxyXG4gICAgICAudHJhbnNhY3Rpb24oXCJiYWNrdXBcIilcclxuICAgICAgLm9iamVjdFN0b3JlKFwiYmFja3VwXCIpXHJcbiAgICAgIC5vcGVuQ3Vyc29yKClcclxuXHJcbiAgICB3aGlsZSAoY3Vyc29yKSB7XHJcbiAgICAgIGJhY2t1cHMucHVzaCh7XHJcbiAgICAgICAgLi4uY3Vyc29yLnZhbHVlLFxyXG4gICAgICAgIGlkOiB1bmRlZmluZWQsXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICBjdXJzb3IgPSBhd2FpdCBjdXJzb3IuY29udGludWUoKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGJhY2t1cERhdGE6IEV4cG9ydERhdGEgPSB7XHJcbiAgICAgIHZlcnNpb246IDcsXHJcbiAgICAgIGJhY2t1cHMsXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtKU09OLnN0cmluZ2lmeShiYWNrdXBEYXRhLCB1bmRlZmluZWQsIDIpLCBcIlxcblwiXSwge1xyXG4gICAgICB0eXBlOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgIH0pXHJcblxyXG4gICAgZG93bmxvYWRCbG9iKGJsb2IsIFwiYmFja3Vwcy5qc29uXCIpXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFzeW5jIGdldFNhZmVCYWNrdXBOYW1lKG5hbWU6IHN0cmluZykge1xyXG4gICAgaWYgKCEoYXdhaXQgdGhpcy5nZXRJZChuYW1lKSkpIHtcclxuICAgICAgcmV0dXJuIG5hbWVcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBudW1iZXIgPSAxOyB0cnVlOyBudW1iZXIrKykge1xyXG4gICAgICBjb25zdCBwcm9wb3NlZE5hbWUgPSBgJHtuYW1lfSAoJHtudW1iZXJ9KWBcclxuXHJcbiAgICAgIGlmICghKGF3YWl0IHRoaXMuZ2V0SWQocHJvcG9zZWROYW1lKSkpIHtcclxuICAgICAgICByZXR1cm4gcHJvcG9zZWROYW1lXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIGltcG9ydEJhY2t1cHMoYmxvYjogQmxvYikge1xyXG4gICAgbGV0IGV4cG9ydERhdGEgPSBKU09OLnBhcnNlKGF3YWl0IGJsb2IudGV4dCgpKSBhcyBFeHBvcnREYXRhXHJcblxyXG4gICAgc3dpdGNoIChleHBvcnREYXRhLnZlcnNpb24pIHtcclxuICAgICAgY2FzZSAxOlxyXG4gICAgICBjYXNlIDI6IHtcclxuICAgICAgICBleHBvcnREYXRhID0ge1xyXG4gICAgICAgICAgdmVyc2lvbjogMyxcclxuICAgICAgICAgIGJhY2t1cHM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIG5hbWU6IGV4cG9ydERhdGEubmFtZSxcclxuICAgICAgICAgICAgICBtZXNzYWdlOiB0b1NuYWtlQ2FzZShleHBvcnREYXRhLm1lc3NhZ2UpIGFzIE1lc3NhZ2VEYXRhLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLy8gZmFsbHMgdGhyb3VnaFxyXG4gICAgICBjYXNlIDM6IHtcclxuICAgICAgICBleHBvcnREYXRhID0ge1xyXG4gICAgICAgICAgdmVyc2lvbjogNCxcclxuICAgICAgICAgIGJhY2t1cHM6IGV4cG9ydERhdGEuYmFja3Vwcy5tYXAoKHsgbWVzc2FnZSwgLi4uYmFja3VwIH0pID0+ICh7XHJcbiAgICAgICAgICAgIC4uLmJhY2t1cCxcclxuICAgICAgICAgICAgbWVzc2FnZXM6IFttZXNzYWdlXSxcclxuICAgICAgICAgIH0pKSxcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLy8gZmFsbHMgdGhyb3VnaFxyXG4gICAgICBjYXNlIDQ6XHJcbiAgICAgICAgZXhwb3J0RGF0YSA9IHtcclxuICAgICAgICAgIHZlcnNpb246IDUsXHJcbiAgICAgICAgICBiYWNrdXBzOiBleHBvcnREYXRhLmJhY2t1cHMubWFwKCh7IHdlYmhvb2tVcmwsIC4uLmJhY2t1cCB9KSA9PiAoe1xyXG4gICAgICAgICAgICAuLi5iYWNrdXAsXHJcbiAgICAgICAgICAgIHRhcmdldDoge1xyXG4gICAgICAgICAgICAgIHVybDogd2ViaG9va1VybCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0pKSxcclxuICAgICAgICB9XHJcbiAgICAgIC8vIGZhbGxzIHRocm91Z2hcclxuICAgICAgY2FzZSA1OlxyXG4gICAgICAgIGV4cG9ydERhdGEgPSB7XHJcbiAgICAgICAgICB2ZXJzaW9uOiA2LFxyXG4gICAgICAgICAgYmFja3VwczogZXhwb3J0RGF0YS5iYWNrdXBzLm1hcChcclxuICAgICAgICAgICAgKHsgbWVzc2FnZXMsIHRhcmdldCwgLi4uYmFja3VwIH0pID0+ICh7XHJcbiAgICAgICAgICAgICAgLi4uYmFja3VwLFxyXG4gICAgICAgICAgICAgIG1lc3NhZ2VzOiBtZXNzYWdlcy5tYXAoZGF0YSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgZGF0YSxcclxuICAgICAgICAgICAgICAgIHJlZmVyZW5jZTogdGFyZ2V0Lm1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgfSkpLFxyXG4gICAgICAgICAgICAgIHRhcmdldDoge1xyXG4gICAgICAgICAgICAgICAgdXJsOiB0YXJnZXQudXJsLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgKSxcclxuICAgICAgICB9XHJcbiAgICAgIC8vIGZhbGxzIHRocm91Z2hcclxuICAgICAgY2FzZSA2OlxyXG4gICAgICAgIGV4cG9ydERhdGEgPSB7XHJcbiAgICAgICAgICB2ZXJzaW9uOiA3LFxyXG4gICAgICAgICAgYmFja3VwczogZXhwb3J0RGF0YS5iYWNrdXBzLm1hcCgoeyB0YXJnZXQsIC4uLmJhY2t1cCB9KSA9PiAoe1xyXG4gICAgICAgICAgICAuLi5iYWNrdXAsXHJcbiAgICAgICAgICAgIHRhcmdldHM6IFt7IHVybDogdGFyZ2V0LnVybCA/PyBcIlwiIH1dLFxyXG4gICAgICAgICAgfSkpLFxyXG4gICAgICAgIH1cclxuICAgICAgLy8gZmFsbHMgdGhyb3VnaFxyXG4gICAgICBjYXNlIDc6XHJcbiAgICAgICAgZm9yIChjb25zdCBiYWNrdXAgb2YgZXhwb3J0RGF0YS5iYWNrdXBzKSB7XHJcbiAgICAgICAgICBhd2FpdCB0aGlzLnNhdmVCYWNrdXAoe1xyXG4gICAgICAgICAgICAuLi5iYWNrdXAsXHJcbiAgICAgICAgICAgIG5hbWU6IGF3YWl0IHRoaXMuZ2V0U2FmZUJhY2t1cE5hbWUoYmFja3VwLm5hbWUpLFxyXG4gICAgICAgICAgICBpZDogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgdHlwZSB7IEJhY2t1cE1hbmFnZXIgfSBmcm9tIFwiLi9CYWNrdXBNYW5hZ2VyXCJcclxuXHJcbmV4cG9ydCBjb25zdCBCYWNrdXBNYW5hZ2VyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8QmFja3VwTWFuYWdlciB8IG51bGw+KG51bGwpXHJcblxyXG5CYWNrdXBNYW5hZ2VyQ29udGV4dC5kaXNwbGF5TmFtZSA9IFwiQmFja3VwTWFuYWdlckNvbnRleHRcIlxyXG5cclxuZXhwb3J0IGNvbnN0IEJhY2t1cE1hbmFnZXJQcm92aWRlciA9IEJhY2t1cE1hbmFnZXJDb250ZXh0LlByb3ZpZGVyXHJcbiIsImltcG9ydCB7IHVzZU9ic2VydmVyIH0gZnJvbSBcIm1vYngtcmVhY3QtbGl0ZVwiXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IFByaW1hcnlCdXR0b24gfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL2lucHV0L2J1dHRvbi9QcmltYXJ5QnV0dG9uXCJcclxuaW1wb3J0IHsgSW5wdXRGaWVsZCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vaW5wdXQvdGV4dC9JbnB1dEZpZWxkXCJcclxuaW1wb3J0IHsgdXNlUmVxdWlyZWRDb250ZXh0IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9zdGF0ZS91c2VSZXF1aXJlZENvbnRleHRcIlxyXG5pbXBvcnQgeyBCYWNrdXBNYW5hZ2VyQ29udGV4dCB9IGZyb20gXCIuLi9CYWNrdXBNYW5hZ2VyQ29udGV4dFwiXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQmFja3VwQ3JlYXRpb25Db250cm9scygpIHtcclxuICBjb25zdCBiYWNrdXBNYW5hZ2VyID0gdXNlUmVxdWlyZWRDb250ZXh0KEJhY2t1cE1hbmFnZXJDb250ZXh0KVxyXG5cclxuICBjb25zdCBbYmFja3VwTmFtZSwgc2V0QmFja3VwTmFtZV0gPSB1c2VTdGF0ZShcIlwiKVxyXG5cclxuICByZXR1cm4gdXNlT2JzZXJ2ZXIoKCkgPT4gKFxyXG4gICAgPElucHV0RmllbGRcclxuICAgICAgaWQ9XCJiYWNrdXAtbmFtZVwiXHJcbiAgICAgIHZhbHVlPXtiYWNrdXBOYW1lfVxyXG4gICAgICBvbkNoYW5nZT17c2V0QmFja3VwTmFtZX1cclxuICAgICAgbGFiZWw9XCJCYWNrdXAgbmFtZVwiXHJcbiAgICA+XHJcbiAgICAgIDxQcmltYXJ5QnV0dG9uXHJcbiAgICAgICAgZGlzYWJsZWQ9e2JhY2t1cE5hbWUubGVuZ3RoID09PSAwfVxyXG4gICAgICAgIG9uQ2xpY2s9e2FzeW5jICgpID0+IHtcclxuICAgICAgICAgIGF3YWl0IGJhY2t1cE1hbmFnZXIuc2F2ZUJhY2t1cChiYWNrdXBOYW1lLnRyaW0oKSlcclxuICAgICAgICAgIHNldEJhY2t1cE5hbWUoXCJcIilcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAge2JhY2t1cE1hbmFnZXIuYmFja3Vwcy5zb21lKGJhY2t1cCA9PiBiYWNrdXAubmFtZSA9PT0gYmFja3VwTmFtZS50cmltKCkpXHJcbiAgICAgICAgICA/IFwiT3ZlcndyaXRlXCJcclxuICAgICAgICAgIDogXCJTYXZlXCJ9XHJcbiAgICAgIDwvUHJpbWFyeUJ1dHRvbj5cclxuICAgIDwvSW5wdXRGaWVsZD5cclxuICApKVxyXG59XHJcbiIsImltcG9ydCB7IHVzZU9ic2VydmVyIH0gZnJvbSBcIm1vYngtcmVhY3QtbGl0ZVwiXHJcbmltcG9ydCB7IGVsbGlwc2lzIH0gZnJvbSBcInBvbGlzaGVkXCJcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9pbnB1dC9idXR0b24vQnV0dG9uXCJcclxuaW1wb3J0IHsgQWN0aW9uQnV0dG9ucyB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vbGF5b3V0L0FjdGlvbkJ1dHRvbnNcIlxyXG5pbXBvcnQgeyBNb2RhbE1hbmFnZXJDb250ZXh0IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9tb2RhbC9Nb2RhbE1hbmFnZXJDb250ZXh0XCJcclxuaW1wb3J0IHsgdXNlUmVxdWlyZWRDb250ZXh0IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9zdGF0ZS91c2VSZXF1aXJlZENvbnRleHRcIlxyXG5pbXBvcnQgeyBjb3B5IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2ljb25zL2NvcHlcIlxyXG5pbXBvcnQgeyBzYXZlIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2ljb25zL3NhdmVcIlxyXG5pbXBvcnQgeyB0cmFzaCB9IGZyb20gXCIuLi8uLi8uLi8uLi9pY29ucy90cmFzaFwiXHJcbmltcG9ydCB7IHVwbG9hZCB9IGZyb20gXCIuLi8uLi8uLi8uLi9pY29ucy91cGxvYWRcIlxyXG5pbXBvcnQgeyBCYWNrdXBNYW5hZ2VyQ29udGV4dCB9IGZyb20gXCIuLi9CYWNrdXBNYW5hZ2VyQ29udGV4dFwiXHJcbmltcG9ydCB0eXBlIHsgQmFja3VwRGF0YSB9IGZyb20gXCIuLi90eXBlcy9CYWNrdXBEYXRhXCJcclxuaW1wb3J0IHsgRGVsZXRpb25Db25maXJtYXRpb25Nb2RhbCB9IGZyb20gXCIuL0RlbGV0aW9uQ29uZmlybWF0aW9uTW9kYWxcIlxyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmxpYFxyXG4gIGhlaWdodDogNDhweDtcclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG5cclxuICBib3JkZXI6IDAgc29saWQgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5iYWNrZ3JvdW5kTW9kaWZpZXIuYWNjZW50fTtcclxuXHJcbiAgJiArICYge1xyXG4gICAgYm9yZGVyLXRvcC13aWR0aDogMXB4O1xyXG4gIH1cclxuXHJcbiAgJiA+ICR7QnV0dG9ufSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5gXHJcblxyXG5jb25zdCBCYWNrdXBOYW1lID0gc3R5bGVkLmRpdmBcclxuICAke2VsbGlwc2lzKCl9O1xyXG5cclxuICBmbGV4OiAxO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbmBcclxuXHJcbmV4cG9ydCB0eXBlIEJhY2t1cEl0ZW1Qcm9wcyA9IHtcclxuICBiYWNrdXA6IEJhY2t1cERhdGFcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEJhY2t1cEl0ZW0ocHJvcHM6IEJhY2t1cEl0ZW1Qcm9wcykge1xyXG4gIGNvbnN0IHsgYmFja3VwIH0gPSBwcm9wc1xyXG5cclxuICBjb25zdCBtb2RhbE1hbmFnZXIgPSB1c2VSZXF1aXJlZENvbnRleHQoTW9kYWxNYW5hZ2VyQ29udGV4dClcclxuICBjb25zdCBiYWNrdXBNYW5hZ2VyID0gdXNlUmVxdWlyZWRDb250ZXh0KEJhY2t1cE1hbmFnZXJDb250ZXh0KVxyXG5cclxuICByZXR1cm4gdXNlT2JzZXJ2ZXIoKCkgPT4gKFxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPEJhY2t1cE5hbWU+e2JhY2t1cC5uYW1lfTwvQmFja3VwTmFtZT5cclxuICAgICAgPEFjdGlvbkJ1dHRvbnNcclxuICAgICAgICBhY3Rpb25zPXtbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGljb246IHVwbG9hZCxcclxuICAgICAgICAgICAgbGFiZWw6IFwiTG9hZFwiLFxyXG4gICAgICAgICAgICBoYW5kbGVyOiBhc3luYyAoKSA9PiBiYWNrdXBNYW5hZ2VyLmxvYWRCYWNrdXAoYmFja3VwLm5hbWUpLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgaWNvbjogc2F2ZSxcclxuICAgICAgICAgICAgbGFiZWw6IFwiRXhwb3J0XCIsXHJcbiAgICAgICAgICAgIGhhbmRsZXI6IGFzeW5jICgpID0+IGJhY2t1cE1hbmFnZXIuZXhwb3J0QmFja3VwKGJhY2t1cC5uYW1lKSxcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IHRydWUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBpY29uOiBjb3B5LFxyXG4gICAgICAgICAgICBsYWJlbDogXCJPdmVyd3JpdGVcIixcclxuICAgICAgICAgICAgaGFuZGxlcjogYXN5bmMgKCkgPT4gYmFja3VwTWFuYWdlci5zYXZlQmFja3VwKGJhY2t1cC5uYW1lKSxcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IHRydWUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBpY29uOiB0cmFzaCxcclxuICAgICAgICAgICAgbGFiZWw6IFwiRGVsZXRlXCIsXHJcbiAgICAgICAgICAgIGhhbmRsZXI6ICgpID0+XHJcbiAgICAgICAgICAgICAgbW9kYWxNYW5hZ2VyLnNwYXduKHtcclxuICAgICAgICAgICAgICAgIHJlbmRlcjogKCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8RGVsZXRpb25Db25maXJtYXRpb25Nb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2t1cE1hbmFnZXI9e2JhY2t1cE1hbmFnZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja3VwPXtiYWNrdXB9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBvdmVyZmxvdzogdHJ1ZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXX1cclxuICAgICAgLz5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICkpXHJcbn1cclxuIiwiaW1wb3J0IHsgdXNlT2JzZXJ2ZXIgfSBmcm9tIFwibW9ieC1yZWFjdC1saXRlXCJcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5pbXBvcnQgeyBJbnB1dEZpZWxkIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9pbnB1dC90ZXh0L0lucHV0RmllbGRcIlxyXG5pbXBvcnQgeyB1c2VSZXF1aXJlZENvbnRleHQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL3N0YXRlL3VzZVJlcXVpcmVkQ29udGV4dFwiXHJcbmltcG9ydCB7IE1hcmtkb3duIH0gZnJvbSBcIi4uLy4uLy4uL21hcmtkb3duL01hcmtkb3duXCJcclxuaW1wb3J0IHsgQmFja3VwTWFuYWdlckNvbnRleHQgfSBmcm9tIFwiLi4vQmFja3VwTWFuYWdlckNvbnRleHRcIlxyXG5pbXBvcnQgeyBCYWNrdXBJdGVtIH0gZnJvbSBcIi4vQmFja3VwSXRlbVwiXHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQudWxgXHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcblxyXG4gIG1heC1oZWlnaHQ6IDQyMHB4O1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuYFxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEJhY2t1cExpc3QoKSB7XHJcbiAgY29uc3QgYmFja3VwTWFuYWdlciA9IHVzZVJlcXVpcmVkQ29udGV4dChCYWNrdXBNYW5hZ2VyQ29udGV4dClcclxuXHJcbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKFwiXCIpXHJcblxyXG4gIHJldHVybiB1c2VPYnNlcnZlcigoKSA9PlxyXG4gICAgYmFja3VwTWFuYWdlci5iYWNrdXBzLmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPElucHV0RmllbGRcclxuICAgICAgICAgIGlkPVwiYmFja3Vwcy1zZWFyY2hcIlxyXG4gICAgICAgICAgbGFiZWw9XCJTZWFyY2ggQmFja3Vwc1wiXHJcbiAgICAgICAgICB2YWx1ZT17c2VhcmNofVxyXG4gICAgICAgICAgb25DaGFuZ2U9e3NldFNlYXJjaH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICB7YmFja3VwTWFuYWdlci5iYWNrdXBzXHJcbiAgICAgICAgICAgIC5maWx0ZXIoYmFja3VwID0+XHJcbiAgICAgICAgICAgICAgYmFja3VwLm5hbWVcclxuICAgICAgICAgICAgICAgIC50b0xvY2FsZUxvd2VyQ2FzZSgpXHJcbiAgICAgICAgICAgICAgICAuaW5jbHVkZXMoc2VhcmNoLnRvTG9jYWxlTG93ZXJDYXNlKCkpLFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC5tYXAoYmFja3VwID0+IChcclxuICAgICAgICAgICAgICA8QmFja3VwSXRlbSBrZXk9e2JhY2t1cC5pZH0gYmFja3VwPXtiYWNrdXB9IC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8Lz5cclxuICAgICkgOiAoXHJcbiAgICAgIDxNYXJrZG93blxyXG4gICAgICAgIGNvbnRlbnQ9e1xyXG4gICAgICAgICAgXCJZb3UgaGF2ZW4ndCBtYWRlIGFueSBiYWNrdXBzIHlldC5cIiArXHJcbiAgICAgICAgICBcIiBFbnRlciBhIG5hbWUgYmVsb3cgYW5kIGNsaWNrIG9uIHRoZSBTYXZlIGJ1dHRvbiB0byBtYWtlIG9uZS5cIlxyXG4gICAgICAgIH1cclxuICAgICAgLz5cclxuICAgICksXHJcbiAgKVxyXG59XHJcbiIsImltcG9ydCB7IHVzZU9ic2VydmVyIH0gZnJvbSBcIm1vYngtcmVhY3QtbGl0ZVwiXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBQcmltYXJ5QnV0dG9uIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9pbnB1dC9idXR0b24vUHJpbWFyeUJ1dHRvblwiXHJcbmltcG9ydCB7IFNlY29uZGFyeUJ1dHRvbiB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vaW5wdXQvYnV0dG9uL1NlY29uZGFyeUJ1dHRvblwiXHJcbmltcG9ydCB7IE1vZGFsQWN0aW9uIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9tb2RhbC9sYXlvdXQvTW9kYWxBY3Rpb25cIlxyXG5pbXBvcnQgeyBNb2RhbEJvZHkgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL21vZGFsL2xheW91dC9Nb2RhbEJvZHlcIlxyXG5pbXBvcnQgeyBNb2RhbENvbnRhaW5lciB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vbW9kYWwvbGF5b3V0L01vZGFsQ29udGFpbmVyXCJcclxuaW1wb3J0IHsgTW9kYWxGb290ZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL21vZGFsL2xheW91dC9Nb2RhbEZvb3RlclwiXHJcbmltcG9ydCB7IE1vZGFsSGVhZGVyIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9tb2RhbC9sYXlvdXQvTW9kYWxIZWFkZXJcIlxyXG5pbXBvcnQgeyBNb2RhbFRpdGxlIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9tb2RhbC9sYXlvdXQvTW9kYWxUaXRsZVwiXHJcbmltcG9ydCB7IE1vZGFsQ29udGV4dCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vbW9kYWwvTW9kYWxDb250ZXh0XCJcclxuaW1wb3J0IHsgdXNlTGF6eVZhbHVlIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9zdGF0ZS91c2VMYXp5VmFsdWVcIlxyXG5pbXBvcnQgeyB1c2VSZXF1aXJlZENvbnRleHQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL3N0YXRlL3VzZVJlcXVpcmVkQ29udGV4dFwiXHJcbmltcG9ydCB7IHJlbW92ZSB9IGZyb20gXCIuLi8uLi8uLi8uLi9pY29ucy9yZW1vdmVcIlxyXG5pbXBvcnQgdHlwZSB7IEVkaXRvck1hbmFnZXJMaWtlIH0gZnJvbSBcIi4uLy4uLy4uL2VkaXRvci9FZGl0b3JNYW5hZ2VyXCJcclxuaW1wb3J0IHsgRGF0YWJhc2VNYW5hZ2VyIH0gZnJvbSBcIi4uLy4uL0RhdGFiYXNlTWFuYWdlclwiXHJcbmltcG9ydCB7IERhdGFiYXNlTWFuYWdlclByb3ZpZGVyIH0gZnJvbSBcIi4uLy4uL0RhdGFiYXNlTWFuYWdlckNvbnRleHRcIlxyXG5pbXBvcnQgeyBQZXJzaXN0ZW50U3RvcmFnZVdhcm5pbmcgfSBmcm9tIFwiLi4vLi4vcGVyc2lzdC9QZXJzaXN0ZW50U3RvcmFnZVdhcm5pbmdcIlxyXG5pbXBvcnQgeyBCYWNrdXBNYW5hZ2VyIH0gZnJvbSBcIi4uL0JhY2t1cE1hbmFnZXJcIlxyXG5pbXBvcnQgeyBCYWNrdXBNYW5hZ2VyUHJvdmlkZXIgfSBmcm9tIFwiLi4vQmFja3VwTWFuYWdlckNvbnRleHRcIlxyXG5pbXBvcnQgeyBCYWNrdXBDcmVhdGlvbkNvbnRyb2xzIH0gZnJvbSBcIi4vQmFja3VwQ3JlYXRpb25Db250cm9sc1wiXHJcbmltcG9ydCB7IEJhY2t1cExpc3QgfSBmcm9tIFwiLi9CYWNrdXBMaXN0XCJcclxuXHJcbmV4cG9ydCB0eXBlIEJhY2t1cHNNb2RhbFByb3BzID0ge1xyXG4gIGVkaXRvck1hbmFnZXI6IEVkaXRvck1hbmFnZXJMaWtlXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBCYWNrdXBzTW9kYWwocHJvcHM6IEJhY2t1cHNNb2RhbFByb3BzKSB7XHJcbiAgY29uc3QgeyBlZGl0b3JNYW5hZ2VyIH0gPSBwcm9wc1xyXG5cclxuICBjb25zdCBkYXRhYmFzZU1hbmFnZXIgPSB1c2VMYXp5VmFsdWUoKCkgPT4gbmV3IERhdGFiYXNlTWFuYWdlcigpKVxyXG4gIGNvbnN0IGJhY2t1cE1hbmFnZXIgPSB1c2VMYXp5VmFsdWUoXHJcbiAgICAoKSA9PiBuZXcgQmFja3VwTWFuYWdlcihkYXRhYmFzZU1hbmFnZXIsIGVkaXRvck1hbmFnZXIpLFxyXG4gIClcclxuXHJcbiAgY29uc3QgbW9kYWwgPSB1c2VSZXF1aXJlZENvbnRleHQoTW9kYWxDb250ZXh0KVxyXG5cclxuICBjb25zdCBmaWxlSW5wdXRSZWYgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbClcclxuXHJcbiAgcmV0dXJuIHVzZU9ic2VydmVyKCgpID0+IChcclxuICAgIDxEYXRhYmFzZU1hbmFnZXJQcm92aWRlciB2YWx1ZT17ZGF0YWJhc2VNYW5hZ2VyfT5cclxuICAgICAgPEJhY2t1cE1hbmFnZXJQcm92aWRlciB2YWx1ZT17YmFja3VwTWFuYWdlcn0+XHJcbiAgICAgICAgPE1vZGFsQ29udGFpbmVyPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHJlZj17ZmlsZUlucHV0UmVmfVxyXG4gICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXthc3luYyBldmVudCA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgZmlsZSA9IGV2ZW50LnRhcmdldC5maWxlcz8uaXRlbSgwKT8uc2xpY2UoKVxyXG4gICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5maWxlcyA9IG51bGxcclxuICAgICAgICAgICAgICBpZiAoZmlsZSkge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgYmFja3VwTWFuYWdlci5pbXBvcnRCYWNrdXBzKGZpbGUpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxNb2RhbEhlYWRlcj5cclxuICAgICAgICAgICAgPE1vZGFsVGl0bGU+QmFja3VwczwvTW9kYWxUaXRsZT5cclxuICAgICAgICAgICAgPE1vZGFsQWN0aW9uXHJcbiAgICAgICAgICAgICAgaWNvbj17cmVtb3ZlfVxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiQ2xvc2VcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG1vZGFsLmRpc21pc3MoKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvTW9kYWxIZWFkZXI+XHJcbiAgICAgICAgICB7ZGF0YWJhc2VNYW5hZ2VyLnNob3VsZFNob3dQZXJzaXN0ZW5jZVdhcm5pbmcgJiYgKFxyXG4gICAgICAgICAgICA8TW9kYWxCb2R5PlxyXG4gICAgICAgICAgICAgIDxQZXJzaXN0ZW50U3RvcmFnZVdhcm5pbmcgLz5cclxuICAgICAgICAgICAgPC9Nb2RhbEJvZHk+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgPE1vZGFsQm9keT5cclxuICAgICAgICAgICAgPEJhY2t1cExpc3QgLz5cclxuICAgICAgICAgIDwvTW9kYWxCb2R5PlxyXG4gICAgICAgICAgPE1vZGFsQm9keT5cclxuICAgICAgICAgICAgPEJhY2t1cENyZWF0aW9uQ29udHJvbHMgLz5cclxuICAgICAgICAgIDwvTW9kYWxCb2R5PlxyXG4gICAgICAgICAgPE1vZGFsRm9vdGVyPlxyXG4gICAgICAgICAgICA8U2Vjb25kYXJ5QnV0dG9uIG9uQ2xpY2s9e2FzeW5jICgpID0+IGJhY2t1cE1hbmFnZXIuZXhwb3J0QWxsKCl9PlxyXG4gICAgICAgICAgICAgIEV4cG9ydCBBbGxcclxuICAgICAgICAgICAgPC9TZWNvbmRhcnlCdXR0b24+XHJcbiAgICAgICAgICAgIDxTZWNvbmRhcnlCdXR0b24gb25DbGljaz17KCkgPT4gZmlsZUlucHV0UmVmLmN1cnJlbnQ/LmNsaWNrKCl9PlxyXG4gICAgICAgICAgICAgIEltcG9ydFxyXG4gICAgICAgICAgICA8L1NlY29uZGFyeUJ1dHRvbj5cclxuICAgICAgICAgICAgPFByaW1hcnlCdXR0b24gb25DbGljaz17KCkgPT4gbW9kYWwuZGlzbWlzcygpfT5DbG9zZTwvUHJpbWFyeUJ1dHRvbj5cclxuICAgICAgICAgIDwvTW9kYWxGb290ZXI+XHJcbiAgICAgICAgPC9Nb2RhbENvbnRhaW5lcj5cclxuICAgICAgPC9CYWNrdXBNYW5hZ2VyUHJvdmlkZXI+XHJcbiAgICA8L0RhdGFiYXNlTWFuYWdlclByb3ZpZGVyPlxyXG4gICkpXHJcbn1cclxuIiwiaW1wb3J0IHsgdXNlT2JzZXJ2ZXIgfSBmcm9tIFwibW9ieC1yZWFjdC1saXRlXCJcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IFByaW1hcnlCdXR0b24gfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL2lucHV0L2J1dHRvbi9QcmltYXJ5QnV0dG9uXCJcclxuaW1wb3J0IHsgU2Vjb25kYXJ5QnV0dG9uIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9pbnB1dC9idXR0b24vU2Vjb25kYXJ5QnV0dG9uXCJcclxuaW1wb3J0IHsgTW9kYWxBY3Rpb24gfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL21vZGFsL2xheW91dC9Nb2RhbEFjdGlvblwiXHJcbmltcG9ydCB7IE1vZGFsQm9keSB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vbW9kYWwvbGF5b3V0L01vZGFsQm9keVwiXHJcbmltcG9ydCB7IE1vZGFsQ29udGFpbmVyIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9tb2RhbC9sYXlvdXQvTW9kYWxDb250YWluZXJcIlxyXG5pbXBvcnQgeyBNb2RhbEZvb3RlciB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vbW9kYWwvbGF5b3V0L01vZGFsRm9vdGVyXCJcclxuaW1wb3J0IHsgTW9kYWxIZWFkZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL21vZGFsL2xheW91dC9Nb2RhbEhlYWRlclwiXHJcbmltcG9ydCB7IE1vZGFsVGl0bGUgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL21vZGFsL2xheW91dC9Nb2RhbFRpdGxlXCJcclxuaW1wb3J0IHsgTW9kYWxDb250ZXh0IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9tb2RhbC9Nb2RhbENvbnRleHRcIlxyXG5pbXBvcnQgeyB1c2VSZXF1aXJlZENvbnRleHQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL3N0YXRlL3VzZVJlcXVpcmVkQ29udGV4dFwiXHJcbmltcG9ydCB7IHJlbW92ZSB9IGZyb20gXCIuLi8uLi8uLi8uLi9pY29ucy9yZW1vdmVcIlxyXG5pbXBvcnQgeyBNYXJrZG93biB9IGZyb20gXCIuLi8uLi8uLi9tYXJrZG93bi9NYXJrZG93blwiXHJcbmltcG9ydCB0eXBlIHsgQmFja3VwTWFuYWdlciB9IGZyb20gXCIuLi9CYWNrdXBNYW5hZ2VyXCJcclxuaW1wb3J0IHR5cGUgeyBCYWNrdXBEYXRhIH0gZnJvbSBcIi4uL3R5cGVzL0JhY2t1cERhdGFcIlxyXG5cclxuZXhwb3J0IHR5cGUgRGVsZXRpb25Db25maXJtYXRpb25Nb2RhbFByb3BzID0ge1xyXG4gIGJhY2t1cE1hbmFnZXI6IEJhY2t1cE1hbmFnZXJcclxuICBiYWNrdXA6IEJhY2t1cERhdGFcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIERlbGV0aW9uQ29uZmlybWF0aW9uTW9kYWwoXHJcbiAgcHJvcHM6IERlbGV0aW9uQ29uZmlybWF0aW9uTW9kYWxQcm9wcyxcclxuKSB7XHJcbiAgY29uc3QgeyBiYWNrdXBNYW5hZ2VyLCBiYWNrdXAgfSA9IHByb3BzXHJcblxyXG4gIGNvbnN0IG1vZGFsID0gdXNlUmVxdWlyZWRDb250ZXh0KE1vZGFsQ29udGV4dClcclxuXHJcbiAgcmV0dXJuIHVzZU9ic2VydmVyKCgpID0+IChcclxuICAgIDxNb2RhbENvbnRhaW5lcj5cclxuICAgICAgPE1vZGFsSGVhZGVyPlxyXG4gICAgICAgIDxNb2RhbFRpdGxlPkRlbGV0ZSBCYWNrdXA8L01vZGFsVGl0bGU+XHJcbiAgICAgICAgPE1vZGFsQWN0aW9uXHJcbiAgICAgICAgICBpY29uPXtyZW1vdmV9XHJcbiAgICAgICAgICBsYWJlbD1cIkNsb3NlXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG1vZGFsLmRpc21pc3MoKX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L01vZGFsSGVhZGVyPlxyXG4gICAgICA8TW9kYWxCb2R5PlxyXG4gICAgICAgIDxNYXJrZG93blxyXG4gICAgICAgICAgY29udGVudD17XHJcbiAgICAgICAgICAgIGBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIFwiJHtiYWNrdXAubmFtZX1cIj8gVGhpcyBhY3Rpb25gICtcclxuICAgICAgICAgICAgXCIgY2Fubm90IGJlIHVuZG9uZS5cIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvTW9kYWxCb2R5PlxyXG4gICAgICA8TW9kYWxGb290ZXI+XHJcbiAgICAgICAgPFNlY29uZGFyeUJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBtb2RhbC5kaXNtaXNzKCl9PlxyXG4gICAgICAgICAgQ2FuY2VsXHJcbiAgICAgICAgPC9TZWNvbmRhcnlCdXR0b24+XHJcbiAgICAgICAgPFByaW1hcnlCdXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9e2FzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgYXdhaXQgYmFja3VwTWFuYWdlci5kZWxldGVCYWNrdXAoYmFja3VwLm5hbWUpXHJcbiAgICAgICAgICAgIG1vZGFsLmRpc21pc3MoKVxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBEZWxldGVcclxuICAgICAgICA8L1ByaW1hcnlCdXR0b24+XHJcbiAgICAgIDwvTW9kYWxGb290ZXI+XHJcbiAgICA8L01vZGFsQ29udGFpbmVyPlxyXG4gICkpXHJcbn1cclxuIiwiaW1wb3J0IHsgSURCUERhdGFiYXNlLCBJREJQVHJhbnNhY3Rpb24sIG9wZW5EQiB9IGZyb20gXCJpZGJcIlxyXG5pbXBvcnQgdHlwZSB7IFNjaGVtYSB9IGZyb20gXCIuLi9TY2hlbWFcIlxyXG5pbXBvcnQgeyBzaG93VXBncmFkZUJsb2NrZWRNZXNzYWdlIH0gZnJvbSBcIi4vc2hvd1VwZ3JhZGVCbG9ja2VkTWVzc2FnZVwiXHJcbmltcG9ydCB7IHVwZ3JhZGVEYXRhYmFzZSB9IGZyb20gXCIuL3VwZ3JhZGVEYXRhYmFzZVwiXHJcblxyXG5leHBvcnQgY29uc3Qgb3BlbkRhdGFiYXNlID0gYXN5bmMgKCkgPT4ge1xyXG4gIHJldHVybiBvcGVuREI8U2NoZW1hPihcImRpc2NvaG9va1wiLCAxMCwge1xyXG4gICAgdXBncmFkZTogKGRhdGFiYXNlLCBvbGRWZXJzaW9uLCBuZXdWZXJzaW9uLCB0cmFuc2FjdGlvbikgPT4ge1xyXG4gICAgICAvLyBDYXN0aW5nIHRvIHVua25vd24gc2NoZW1hLCBiZWNhdXNlIHVwZ3JhZGVzIHNob3VsZG4ndCBhc3N1bWUgaG93IHRoZVxyXG4gICAgICAvLyBzY2hlbWEgbG9va3MgYXQgdGhhdCB0aW1lXHJcbiAgICAgIHVwZ3JhZGVEYXRhYmFzZShcclxuICAgICAgICBkYXRhYmFzZSBhcyBJREJQRGF0YWJhc2UsXHJcbiAgICAgICAgdHJhbnNhY3Rpb24gYXMgSURCUFRyYW5zYWN0aW9uPHVua25vd24sIHN0cmluZ1tdLCBcInZlcnNpb25jaGFuZ2VcIj4sXHJcbiAgICAgICAgb2xkVmVyc2lvbixcclxuICAgICAgKVxyXG4gICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZGF0YWJhc2UtdXBncmFkZWQtdmVyc2lvblwiLCBcIjEwXCIpXHJcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RiLXVwZ3JhZGUtYmxvY2tlZFwiKT8ucmVtb3ZlKClcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3Igb24gZGF0YWJhc2UgdXBncmFkZTpcIiwgZXJyb3IpXHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBibG9ja2VkOiBzaG93VXBncmFkZUJsb2NrZWRNZXNzYWdlLFxyXG4gIH0pXHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IHNob3dVcGdyYWRlQmxvY2tlZE1lc3NhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gIGNvbnRhaW5lci5pZCA9IFwiZGItdXBncmFkZS1ibG9ja2VkXCJcclxuICBjb250YWluZXIuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCJcclxuICBjb250YWluZXIuc3R5bGUudG9wID0gXCIwXCJcclxuICBjb250YWluZXIuc3R5bGUucmlnaHQgPSBcIjBcIlxyXG4gIGNvbnRhaW5lci5zdHlsZS5ib3R0b20gPSBcIjBcIlxyXG4gIGNvbnRhaW5lci5zdHlsZS5sZWZ0ID0gXCIwXCJcclxuICBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZCA9IFwicmdiYSgwLCAwLCAwLCAwLjg1KVwiXHJcbiAgY29udGFpbmVyLnN0eWxlLnBhZGRpbmcgPSBcIjE2cHhcIlxyXG5cclxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIilcclxuICBoZWFkZXIuc3R5bGUuY29sb3IgPSBcIiNmZmZmZmZcIlxyXG4gIGhlYWRlci5hcHBlbmQoXCJEaXNjb2hvb2sncyBsb2NhbCBkYXRhYmFzZSBuZWVkcyBhbiB1cGdyYWRlXCIpXHJcblxyXG4gIGNvbnN0IGJsb2NrZWRNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcclxuICBibG9ja2VkTWVzc2FnZS5hcHBlbmQoXHJcbiAgICBcIkhvd2V2ZXIsIHRoZSB1cGdyYWRlIGNhbid0IHByb2NlZWQgYmVjYXVzZSB0aGVyZSBhcmUgb2xkZXIgc2Vzc2lvbnMgb2YgRGlzY29ob29rIG9wZW4uXCIsXHJcbiAgKVxyXG5cclxuICBjb25zdCBjbG9zZVRhYnNNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcclxuICBjbG9zZVRhYnNNZXNzYWdlLmFwcGVuZChcIlBsZWFzZSBjbG9zZSBhbGwgRGlzY29ob29rIHRhYnMgYmVmb3JlIGNvbnRpbnVpbmcuXCIpXHJcblxyXG4gIGNvbnRhaW5lci5hcHBlbmQoaGVhZGVyLCBibG9ja2VkTWVzc2FnZSwgY2xvc2VUYWJzTWVzc2FnZSlcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZChjb250YWluZXIpXHJcbn1cclxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tYXdhaXQtaW4tbG9vcCAqL1xyXG5cclxuaW1wb3J0IHR5cGUgeyBJREJQRGF0YWJhc2UsIElEQlBUcmFuc2FjdGlvbiB9IGZyb20gXCJpZGJcIlxyXG5pbXBvcnQgeyB0b1NuYWtlQ2FzZSB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vb2JqZWN0L3RvU25ha2VDYXNlXCJcclxuXHJcbmV4cG9ydCBjb25zdCB1cGdyYWRlRGF0YWJhc2UgPSBhc3luYyAoXHJcbiAgZGF0YWJhc2U6IElEQlBEYXRhYmFzZSxcclxuICB0cmFuc2FjdGlvbjogSURCUFRyYW5zYWN0aW9uPHVua25vd24sIHN0cmluZ1tdLCBcInZlcnNpb25jaGFuZ2VcIj4sXHJcbiAgb2xkVmVyc2lvbjogbnVtYmVyLFxyXG4pID0+IHtcclxuICBpZiAob2xkVmVyc2lvbiA8IDIgJiYgb2xkVmVyc2lvbiA+PSAxKSB7XHJcbiAgICBsZXQgY3Vyc29yID0gYXdhaXQgdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoXCJiYWNrdXBzXCIpLm9wZW5DdXJzb3IoKVxyXG5cclxuICAgIHdoaWxlIChjdXJzb3IpIHtcclxuICAgICAgYXdhaXQgY3Vyc29yLnVwZGF0ZSh7XHJcbiAgICAgICAgbmFtZTogY3Vyc29yLmtleSxcclxuICAgICAgICBtZXNzYWdlOiBjdXJzb3IudmFsdWUsXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICBjdXJzb3IgPSBhd2FpdCBjdXJzb3IuY29udGludWUoKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKG9sZFZlcnNpb24gPCAzKSB7XHJcbiAgICBkYXRhYmFzZS5jcmVhdGVPYmplY3RTdG9yZShcImJhY2t1cFwiLCB7XHJcbiAgICAgIGtleVBhdGg6IFwiaWRcIixcclxuICAgICAgYXV0b0luY3JlbWVudDogdHJ1ZSxcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgYmFja3VwU3RvcmUgPSB0cmFuc2FjdGlvbi5vYmplY3RTdG9yZShcImJhY2t1cFwiKVxyXG4gICAgYmFja3VwU3RvcmUuY3JlYXRlSW5kZXgoXCJuYW1lXCIsIFwibmFtZVwiLCB7XHJcbiAgICAgIHVuaXF1ZTogdHJ1ZSxcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBpZiAob2xkVmVyc2lvbiA8IDQgJiYgb2xkVmVyc2lvbiA+PSAxKSB7XHJcbiAgICBjb25zdCBiYWNrdXBTdG9yZSA9IHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKFwiYmFja3VwXCIpXHJcblxyXG4gICAgY29uc3QgZXhpc3RpbmdCYWNrdXBzID0gbmV3IFNldDxJREJWYWxpZEtleT4oKVxyXG4gICAgbGV0IG5hbWVDdXJzb3IgPSBhd2FpdCBiYWNrdXBTdG9yZS5pbmRleChcIm5hbWVcIikub3BlbktleUN1cnNvcigpXHJcblxyXG4gICAgd2hpbGUgKG5hbWVDdXJzb3IpIHtcclxuICAgICAgZXhpc3RpbmdCYWNrdXBzLmFkZChuYW1lQ3Vyc29yLmtleSlcclxuICAgICAgbmFtZUN1cnNvciA9IGF3YWl0IG5hbWVDdXJzb3IuY29udGludWUoKVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBjdXJzb3IgPSBhd2FpdCB0cmFuc2FjdGlvbi5vYmplY3RTdG9yZShcImJhY2t1cHNcIikub3BlbkN1cnNvcigpXHJcblxyXG4gICAgd2hpbGUgKGN1cnNvcikge1xyXG4gICAgICBpZiAoIWV4aXN0aW5nQmFja3Vwcy5oYXMoY3Vyc29yLmtleSkpIHtcclxuICAgICAgICBhd2FpdCBiYWNrdXBTdG9yZS5wdXQoe1xyXG4gICAgICAgICAgLi4uY3Vyc29yLnZhbHVlLFxyXG4gICAgICAgICAgbmFtZTogY3Vyc29yLmtleSxcclxuICAgICAgICAgIG1lc3NhZ2U6IHRvU25ha2VDYXNlKGN1cnNvci52YWx1ZS5tZXNzYWdlKSxcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcblxyXG4gICAgICBjdXJzb3IgPSBhd2FpdCBjdXJzb3IuY29udGludWUoKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKG9sZFZlcnNpb24gPCA1ICYmIG9sZFZlcnNpb24gPj0gMSkge1xyXG4gICAgY29uc3QgYmFja3VwU3RvcmUgPSB0cmFuc2FjdGlvbi5vYmplY3RTdG9yZShcImJhY2t1cFwiKVxyXG5cclxuICAgIGxldCBjdXJzb3IgPSBhd2FpdCBiYWNrdXBTdG9yZS5vcGVuQ3Vyc29yKClcclxuXHJcbiAgICB3aGlsZSAoY3Vyc29yKSB7XHJcbiAgICAgIGNvbnN0IHsgbWVzc2FnZSwgLi4ucmVzdCB9ID0gY3Vyc29yLnZhbHVlXHJcblxyXG4gICAgICBhd2FpdCBiYWNrdXBTdG9yZS5wdXQoe1xyXG4gICAgICAgIC4uLnJlc3QsXHJcbiAgICAgICAgbWVzc2FnZXM6IFttZXNzYWdlXSxcclxuICAgICAgfSlcclxuXHJcbiAgICAgIGN1cnNvciA9IGF3YWl0IGN1cnNvci5jb250aW51ZSgpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAob2xkVmVyc2lvbiA8IDYgJiYgb2xkVmVyc2lvbiA+PSAxKSB7XHJcbiAgICBjb25zdCBiYWNrdXBTdG9yZSA9IHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKFwiYmFja3VwXCIpXHJcblxyXG4gICAgbGV0IGN1cnNvciA9IGF3YWl0IGJhY2t1cFN0b3JlLm9wZW5DdXJzb3IoKVxyXG5cclxuICAgIHdoaWxlIChjdXJzb3IpIHtcclxuICAgICAgY29uc3QgeyB3ZWJob29rVXJsLCAuLi5yZXN0IH0gPSBjdXJzb3IudmFsdWVcclxuXHJcbiAgICAgIGF3YWl0IGJhY2t1cFN0b3JlLnB1dCh7XHJcbiAgICAgICAgLi4ucmVzdCxcclxuICAgICAgICB0YXJnZXQ6IHtcclxuICAgICAgICAgIHVybDogd2ViaG9va1VybCxcclxuICAgICAgICB9LFxyXG4gICAgICB9KVxyXG5cclxuICAgICAgY3Vyc29yID0gYXdhaXQgY3Vyc29yLmNvbnRpbnVlKClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmIChvbGRWZXJzaW9uIDwgOSAmJiBvbGRWZXJzaW9uID49IDEpIHtcclxuICAgIGNvbnN0IGJhY2t1cFN0b3JlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoXCJiYWNrdXBcIilcclxuXHJcbiAgICBsZXQgY3Vyc29yID0gYXdhaXQgYmFja3VwU3RvcmUub3BlbkN1cnNvcigpXHJcblxyXG4gICAgd2hpbGUgKGN1cnNvcikge1xyXG4gICAgICBjb25zdCB7IGlkLCBuYW1lLCBtZXNzYWdlcywgdGFyZ2V0IH0gPSBjdXJzb3IudmFsdWVcclxuXHJcbiAgICAgIGlmIChuYW1lKSB7XHJcbiAgICAgICAgYXdhaXQgYmFja3VwU3RvcmUucHV0KHtcclxuICAgICAgICAgIGlkLFxyXG4gICAgICAgICAgbmFtZSxcclxuICAgICAgICAgIG1lc3NhZ2VzOiBtZXNzYWdlcy5tYXAoKGRhdGE6IFJlY29yZDxzdHJpbmcsIHVua25vd24+KSA9PiAoe1xyXG4gICAgICAgICAgICBkYXRhOiBcImRhdGFcIiBpbiBkYXRhID8gZGF0YS5kYXRhIDogZGF0YSxcclxuICAgICAgICAgICAgcmVmZXJlbmNlOiBcInJlZmVyZW5jZVwiIGluIGRhdGEgPyBkYXRhLnJlZmVyZW5jZSA6IHRhcmdldC5tZXNzYWdlLFxyXG4gICAgICAgICAgfSkpLFxyXG4gICAgICAgICAgdGFyZ2V0OiB7XHJcbiAgICAgICAgICAgIHVybDogdGFyZ2V0LnVybCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhd2FpdCBiYWNrdXBTdG9yZS5kZWxldGUoaWQpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGN1cnNvciA9IGF3YWl0IGN1cnNvci5jb250aW51ZSgpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAob2xkVmVyc2lvbiA8IDEwICYmIG9sZFZlcnNpb24gPj0gMSkge1xyXG4gICAgY29uc3QgYmFja3VwU3RvcmUgPSB0cmFuc2FjdGlvbi5vYmplY3RTdG9yZShcImJhY2t1cFwiKVxyXG5cclxuICAgIGxldCBjdXJzb3IgPSBhd2FpdCBiYWNrdXBTdG9yZS5vcGVuQ3Vyc29yKClcclxuXHJcbiAgICB3aGlsZSAoY3Vyc29yKSB7XHJcbiAgICAgIGNvbnN0IHsgdGFyZ2V0LCAuLi5iYWNrdXAgfSA9IGN1cnNvci52YWx1ZVxyXG5cclxuICAgICAgYXdhaXQgYmFja3VwU3RvcmUucHV0KHtcclxuICAgICAgICAuLi5iYWNrdXAsXHJcbiAgICAgICAgdGFyZ2V0czogW3sgdXJsOiB0YXJnZXQudXJsID8/IFwiXCIgfV0sXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICBjdXJzb3IgPSBhd2FpdCBjdXJzb3IuY29udGludWUoKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyB1c2VPYnNlcnZlciB9IGZyb20gXCJtb2J4LXJlYWN0LWxpdGVcIlxyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5pbXBvcnQgeyBQcmltYXJ5QnV0dG9uIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9pbnB1dC9idXR0b24vUHJpbWFyeUJ1dHRvblwiXHJcbmltcG9ydCB7IFNlY29uZGFyeUJ1dHRvbiB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vaW5wdXQvYnV0dG9uL1NlY29uZGFyeUJ1dHRvblwiXHJcbmltcG9ydCB7IEJ1dHRvblJvdyB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vbGF5b3V0L0J1dHRvblJvd1wiXHJcbmltcG9ydCB7IE1vZGFsTWFuYWdlckNvbnRleHQgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL21vZGFsL01vZGFsTWFuYWdlckNvbnRleHRcIlxyXG5pbXBvcnQgeyB1c2VSZXF1aXJlZENvbnRleHQgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3N0YXRlL3VzZVJlcXVpcmVkQ29udGV4dFwiXHJcbmltcG9ydCB7IE1hcmtkb3duIH0gZnJvbSBcIi4uLy4uL21hcmtkb3duL01hcmtkb3duXCJcclxuaW1wb3J0IHsgRGF0YWJhc2VNYW5hZ2VyQ29udGV4dCB9IGZyb20gXCIuLi9EYXRhYmFzZU1hbmFnZXJDb250ZXh0XCJcclxuaW1wb3J0IHsgUHVzaE5vdGlmaWNhdGlvbk1vZGFsIH0gZnJvbSBcIi4vUHVzaE5vdGlmaWNhdGlvbk1vZGFsXCJcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLXRvcDogMTZweDtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG5cclxuICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJhY2tncm91bmQuc2Vjb25kYXJ5fTtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbmBcclxuXHJcbmNvbnN0IEhlYWRlciA9IHN0eWxlZC5oNWBcclxuICBtYXJnaW46IDAgMCA4cHg7XHJcblxyXG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmhlYWRlci5wcmltYXJ5fTtcclxuICBmb250LXNpemU6IDFlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjM3NTtcclxuYFxyXG5cclxuY29uc3QgQnV0dG9ucyA9IHN0eWxlZChCdXR0b25Sb3cpYFxyXG4gIG1hcmdpbi10b3A6IDE2cHg7XHJcbmBcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQZXJzaXN0ZW50U3RvcmFnZVdhcm5pbmcoKSB7XHJcbiAgY29uc3QgbW9kYWxNYW5hZ2VyID0gdXNlUmVxdWlyZWRDb250ZXh0KE1vZGFsTWFuYWdlckNvbnRleHQpXHJcbiAgY29uc3QgZGF0YWJhc2VNYW5hZ2VyID0gdXNlUmVxdWlyZWRDb250ZXh0KERhdGFiYXNlTWFuYWdlckNvbnRleHQpXHJcblxyXG4gIHJldHVybiB1c2VPYnNlcnZlcigoKSA9PiAoXHJcbiAgICA8Q29udGFpbmVyPlxyXG4gICAgICA8SGVhZGVyPldhcm5pbmc8L0hlYWRlcj5cclxuICAgICAgPE1hcmtkb3duXHJcbiAgICAgICAgY29udGVudD17XHJcbiAgICAgICAgICBcIllvdXIgYnJvd3NlciBkaWQgbm90IGdyYW50IHBlcm1pc3Npb24gdG8gdXNlIHBlcnNpc3RlbnQgc3RvcmFnZVwiICtcclxuICAgICAgICAgIFwiIGZvciB0aGlzIHNpdGUuIERhdGEgc3RvcmVkIG1pZ2h0IGJlIGRlbGV0ZWQgYnkgdGhlIGJyb3dzZXIgd2hlblwiICtcclxuICAgICAgICAgIFwiIHRoaXMgcGVybWlzc2lvbiBpcyBub3QgZ3JhbnRlZC5cIlxyXG4gICAgICAgIH1cclxuICAgICAgLz5cclxuICAgICAgPEJ1dHRvbnM+XHJcbiAgICAgICAgPFByaW1hcnlCdXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9e2FzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKFwiY2hyb21lXCIgaW4gd2luZG93KSB7XHJcbiAgICAgICAgICAgICAgbW9kYWxNYW5hZ2VyLnNwYXduKHtcclxuICAgICAgICAgICAgICAgIHJlbmRlcjogKCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8UHVzaE5vdGlmaWNhdGlvbk1vZGFsIGRhdGFiYXNlTWFuYWdlcj17ZGF0YWJhc2VNYW5hZ2VyfSAvPlxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGF3YWl0IGRhdGFiYXNlTWFuYWdlci5yZXF1ZXN0UGVyc2lzdGVuY2UoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIFJlcXVlc3QgcGVybWlzc2lvblxyXG4gICAgICAgIDwvUHJpbWFyeUJ1dHRvbj5cclxuICAgICAgICA8U2Vjb25kYXJ5QnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIGRhdGFiYXNlTWFuYWdlci5wZXJzaXN0ZW5jZU1lc3NhZ2VEaXNtaXNzZWQgPSB0cnVlXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIERpc21pc3NcclxuICAgICAgICA8L1NlY29uZGFyeUJ1dHRvbj5cclxuICAgICAgPC9CdXR0b25zPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKSlcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgUHJpbWFyeUJ1dHRvbiB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vaW5wdXQvYnV0dG9uL1ByaW1hcnlCdXR0b25cIlxyXG5pbXBvcnQgeyBTZWNvbmRhcnlCdXR0b24gfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2lucHV0L2J1dHRvbi9TZWNvbmRhcnlCdXR0b25cIlxyXG5pbXBvcnQgeyBNb2RhbEFjdGlvbiB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vbW9kYWwvbGF5b3V0L01vZGFsQWN0aW9uXCJcclxuaW1wb3J0IHsgTW9kYWxCb2R5IH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9tb2RhbC9sYXlvdXQvTW9kYWxCb2R5XCJcclxuaW1wb3J0IHsgTW9kYWxDb250YWluZXIgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL21vZGFsL2xheW91dC9Nb2RhbENvbnRhaW5lclwiXHJcbmltcG9ydCB7IE1vZGFsRm9vdGVyIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9tb2RhbC9sYXlvdXQvTW9kYWxGb290ZXJcIlxyXG5pbXBvcnQgeyBNb2RhbEhlYWRlciB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vbW9kYWwvbGF5b3V0L01vZGFsSGVhZGVyXCJcclxuaW1wb3J0IHsgTW9kYWxUaXRsZSB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vbW9kYWwvbGF5b3V0L01vZGFsVGl0bGVcIlxyXG5pbXBvcnQgeyBNb2RhbENvbnRleHQgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL21vZGFsL01vZGFsQ29udGV4dFwiXHJcbmltcG9ydCB7IHVzZVJlcXVpcmVkQ29udGV4dCB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vc3RhdGUvdXNlUmVxdWlyZWRDb250ZXh0XCJcclxuaW1wb3J0IHsgcmVtb3ZlIH0gZnJvbSBcIi4uLy4uLy4uL2ljb25zL3JlbW92ZVwiXHJcbmltcG9ydCB7IE1hcmtkb3duIH0gZnJvbSBcIi4uLy4uL21hcmtkb3duL01hcmtkb3duXCJcclxuaW1wb3J0IHR5cGUgeyBEYXRhYmFzZU1hbmFnZXIgfSBmcm9tIFwiLi4vRGF0YWJhc2VNYW5hZ2VyXCJcclxuXHJcbmV4cG9ydCB0eXBlIFB1c2hOb3RpZmljYXRpb25Nb2RhbFByb3BzID0ge1xyXG4gIGRhdGFiYXNlTWFuYWdlcjogRGF0YWJhc2VNYW5hZ2VyXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQdXNoTm90aWZpY2F0aW9uTW9kYWwocHJvcHM6IFB1c2hOb3RpZmljYXRpb25Nb2RhbFByb3BzKSB7XHJcbiAgY29uc3QgeyBkYXRhYmFzZU1hbmFnZXIgfSA9IHByb3BzXHJcblxyXG4gIGNvbnN0IG1vZGFsID0gdXNlUmVxdWlyZWRDb250ZXh0KE1vZGFsQ29udGV4dClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxNb2RhbENvbnRhaW5lcj5cclxuICAgICAgPE1vZGFsSGVhZGVyPlxyXG4gICAgICAgIDxNb2RhbFRpdGxlPk5vdGljZTwvTW9kYWxUaXRsZT5cclxuICAgICAgICA8TW9kYWxBY3Rpb25cclxuICAgICAgICAgIGljb249e3JlbW92ZX1cclxuICAgICAgICAgIGxhYmVsPVwiQ2xvc2VcIlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gbW9kYWwuZGlzbWlzcygpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvTW9kYWxIZWFkZXI+XHJcbiAgICAgIDxNb2RhbEJvZHk+XHJcbiAgICAgICAgPE1hcmtkb3duXHJcbiAgICAgICAgICBjb250ZW50PXtcclxuICAgICAgICAgICAgXCJDaHJvbWUgYmFzZWQgYnJvd3NlcnMgZG8gbm90IGFsbG93IG1hbnVhbCBjb250cm9sIG9mIHBlcnNpc3RlbnRcIiArXHJcbiAgICAgICAgICAgIFwiIHN0b3JhZ2UuIEFzIGEgd29ya2Fyb3VuZCwgeW91IGNhbiBncmFudCB0aGlzIHNpdGUgcGVybWlzc2lvbiB0b1wiICtcclxuICAgICAgICAgICAgXCIgc2VuZCBub3RpZmljYXRpb25zIHRvIGFsbG93IHRoZSBzaXRlIHRvIHVzZSBwZXJzaXN0ZW50IHN0b3JhZ2UuXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICAvPlxyXG4gICAgICA8L01vZGFsQm9keT5cclxuICAgICAgPE1vZGFsRm9vdGVyPlxyXG4gICAgICAgIDxTZWNvbmRhcnlCdXR0b24gb25DbGljaz17KCkgPT4gbW9kYWwuZGlzbWlzcygpfT5cclxuICAgICAgICAgIENhbmNlbFxyXG4gICAgICAgIDwvU2Vjb25kYXJ5QnV0dG9uPlxyXG4gICAgICAgIDxQcmltYXJ5QnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXthc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIG1vZGFsLmRpc21pc3MoKVxyXG4gICAgICAgICAgICBhd2FpdCBkYXRhYmFzZU1hbmFnZXIucmVxdWVzdFBlcnNpc3RlbmNlKClcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgUmVxdWVzdCBwZXJtaXNzaW9uXHJcbiAgICAgICAgPC9QcmltYXJ5QnV0dG9uPlxyXG4gICAgICA8L01vZGFsRm9vdGVyPlxyXG4gICAgPC9Nb2RhbENvbnRhaW5lcj5cclxuICApXHJcbn1cclxuIiwiaW1wb3J0IHR5cGUgeyBTbmFwc2hvdEluIH0gZnJvbSBcIm1vYngtc3RhdGUtdHJlZVwiXHJcbmltcG9ydCB7IENvbG9yTW9kZWwgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2lucHV0L2NvbG9yL0NvbG9yTW9kZWxcIlxyXG5pbXBvcnQgdHlwZSB7IE1lc3NhZ2VEYXRhIH0gZnJvbSBcIi4uL3N0YXRlL2RhdGEvTWVzc2FnZURhdGFcIlxyXG5pbXBvcnQgdHlwZSB7IE1lc3NhZ2VNb2RlbCB9IGZyb20gXCIuLi9zdGF0ZS9tb2RlbHMvTWVzc2FnZU1vZGVsXCJcclxuXHJcbmV4cG9ydCBjb25zdCBtZXNzYWdlT2YgPSAoZGF0YTogTWVzc2FnZURhdGEpID0+IHtcclxuICBjb25zdCBzbmFwc2hvdDogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gPSB7fVxyXG5cclxuICBzbmFwc2hvdC5jb250ZW50ID0gZGF0YS5jb250ZW50ID8/IFwiXCJcclxuICBzbmFwc2hvdC51c2VybmFtZSA9IGRhdGEudXNlcm5hbWUgPz8gXCJcIlxyXG4gIHNuYXBzaG90LmF2YXRhciA9IGRhdGEuYXZhdGFyX3VybCA/PyBcIlwiXHJcblxyXG4gIGNvbnN0IGVtYmVkczogUmVjb3JkPHN0cmluZywgdW5rbm93bj5bXSA9IFtdXHJcbiAgc25hcHNob3QuZW1iZWRzID0gZW1iZWRzXHJcblxyXG4gIGZvciAoY29uc3QgZW1iZWREYXRhIG9mIGRhdGEuZW1iZWRzID8/IFtdKSB7XHJcbiAgICBsZXQgZW1iZWQgPSBlbWJlZHMubGVuZ3RoID4gMCA/IGVtYmVkc1tlbWJlZHMubGVuZ3RoIC0gMV0gOiB1bmRlZmluZWRcclxuXHJcbiAgICBpZiAoZW1iZWQ/LnVybCAmJiBlbWJlZC51cmwgPT09IGVtYmVkRGF0YS51cmwpIHtcclxuICAgICAgY29uc3QgZ2FsbGVyeSA9IGVtYmVkLmdhbGxlcnkgYXMgc3RyaW5nW11cclxuICAgICAgaWYgKGVtYmVkRGF0YS5pbWFnZT8udXJsICYmIGdhbGxlcnkubGVuZ3RoIDwgNCkge1xyXG4gICAgICAgIGdhbGxlcnkucHVzaChlbWJlZERhdGEuaW1hZ2UudXJsKVxyXG4gICAgICB9XHJcblxyXG4gICAgICBjb250aW51ZVxyXG4gICAgfVxyXG5cclxuICAgIGVtYmVkID0ge31cclxuICAgIGVtYmVkcy5wdXNoKGVtYmVkKVxyXG5cclxuICAgIGVtYmVkLnRpdGxlID0gZW1iZWREYXRhLnRpdGxlID8/IFwiXCJcclxuICAgIGVtYmVkLmRlc2NyaXB0aW9uID0gZW1iZWREYXRhLmRlc2NyaXB0aW9uID8/IFwiXCJcclxuICAgIGVtYmVkLnVybCA9IGVtYmVkRGF0YS51cmwgPz8gXCJcIlxyXG4gICAgZW1iZWQuYXV0aG9yID0gZW1iZWREYXRhLmF1dGhvcj8ubmFtZSA/PyBcIlwiXHJcbiAgICBlbWJlZC5hdXRob3JVcmwgPSBlbWJlZERhdGEuYXV0aG9yPy51cmwgPz8gXCJcIlxyXG4gICAgZW1iZWQuYXV0aG9ySWNvbiA9IGVtYmVkRGF0YS5hdXRob3I/Lmljb25fdXJsID8/IFwiXCJcclxuICAgIGVtYmVkLmZvb3RlciA9IGVtYmVkRGF0YS5mb290ZXI/LnRleHQgPz8gXCJcIlxyXG4gICAgZW1iZWQuZm9vdGVySWNvbiA9IGVtYmVkRGF0YS5mb290ZXI/Lmljb25fdXJsID8/IFwiXCJcclxuICAgIGVtYmVkLnRpbWVzdGFtcCA9IG5ldyBEYXRlKGVtYmVkRGF0YS50aW1lc3RhbXAgPz8gTnVtYmVyLk5hTilcclxuICAgIGVtYmVkLmdhbGxlcnkgPSBbZW1iZWREYXRhLmltYWdlPy51cmwgPz8gXCJcIl0uZmlsdGVyKEJvb2xlYW4pXHJcbiAgICBlbWJlZC50aHVtYm5haWwgPSBlbWJlZERhdGEudGh1bWJuYWlsPy51cmwgPz8gXCJcIlxyXG5cclxuICAgIGNvbnN0IGNvbG9yID0gQ29sb3JNb2RlbC5jcmVhdGUoKVxyXG4gICAgY29sb3Iuc2V0UmF3KGVtYmVkRGF0YS5jb2xvciA/PyBudWxsKVxyXG4gICAgZW1iZWQuY29sb3IgPSBjb2xvclxyXG5cclxuICAgIGNvbnN0IGZpZWxkczogUmVjb3JkPHN0cmluZywgdW5rbm93bj5bXSA9IFtdXHJcbiAgICBlbWJlZC5maWVsZHMgPSBmaWVsZHNcclxuXHJcbiAgICBmb3IgKGNvbnN0IGZpZWxkRGF0YSBvZiBlbWJlZERhdGEuZmllbGRzID8/IFtdKSB7XHJcbiAgICAgIGNvbnN0IGZpZWxkOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiA9IHt9XHJcbiAgICAgIGZpZWxkcy5wdXNoKGZpZWxkKVxyXG5cclxuICAgICAgZmllbGQubmFtZSA9IGZpZWxkRGF0YS5uYW1lID8/IFwiXCJcclxuICAgICAgZmllbGQudmFsdWUgPSBmaWVsZERhdGEudmFsdWUgPz8gXCJcIlxyXG4gICAgICBmaWVsZC5pbmxpbmUgPSBmaWVsZERhdGEuaW5saW5lID8/IGZhbHNlXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gc25hcHNob3QgYXMgU25hcHNob3RJbjx0eXBlb2YgTWVzc2FnZU1vZGVsPlxyXG59XHJcbiIsImltcG9ydCB7IHcgYXMgd3JhcCwgciBhcyByZXBsYWNlVHJhcHMgfSBmcm9tICcuL3dyYXAtaWRiLXZhbHVlLmpzJztcbmV4cG9ydCB7IHUgYXMgdW53cmFwLCB3IGFzIHdyYXAgfSBmcm9tICcuL3dyYXAtaWRiLXZhbHVlLmpzJztcblxuLyoqXG4gKiBPcGVuIGEgZGF0YWJhc2UuXG4gKlxuICogQHBhcmFtIG5hbWUgTmFtZSBvZiB0aGUgZGF0YWJhc2UuXG4gKiBAcGFyYW0gdmVyc2lvbiBTY2hlbWEgdmVyc2lvbi5cbiAqIEBwYXJhbSBjYWxsYmFja3MgQWRkaXRpb25hbCBjYWxsYmFja3MuXG4gKi9cbmZ1bmN0aW9uIG9wZW5EQihuYW1lLCB2ZXJzaW9uLCB7IGJsb2NrZWQsIHVwZ3JhZGUsIGJsb2NraW5nLCB0ZXJtaW5hdGVkIH0gPSB7fSkge1xuICAgIGNvbnN0IHJlcXVlc3QgPSBpbmRleGVkREIub3BlbihuYW1lLCB2ZXJzaW9uKTtcbiAgICBjb25zdCBvcGVuUHJvbWlzZSA9IHdyYXAocmVxdWVzdCk7XG4gICAgaWYgKHVwZ3JhZGUpIHtcbiAgICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCd1cGdyYWRlbmVlZGVkJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB1cGdyYWRlKHdyYXAocmVxdWVzdC5yZXN1bHQpLCBldmVudC5vbGRWZXJzaW9uLCBldmVudC5uZXdWZXJzaW9uLCB3cmFwKHJlcXVlc3QudHJhbnNhY3Rpb24pKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChibG9ja2VkKVxuICAgICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2Jsb2NrZWQnLCAoKSA9PiBibG9ja2VkKCkpO1xuICAgIG9wZW5Qcm9taXNlXG4gICAgICAgIC50aGVuKChkYikgPT4ge1xuICAgICAgICBpZiAodGVybWluYXRlZClcbiAgICAgICAgICAgIGRiLmFkZEV2ZW50TGlzdGVuZXIoJ2Nsb3NlJywgKCkgPT4gdGVybWluYXRlZCgpKTtcbiAgICAgICAgaWYgKGJsb2NraW5nKVxuICAgICAgICAgICAgZGIuYWRkRXZlbnRMaXN0ZW5lcigndmVyc2lvbmNoYW5nZScsICgpID0+IGJsb2NraW5nKCkpO1xuICAgIH0pXG4gICAgICAgIC5jYXRjaCgoKSA9PiB7IH0pO1xuICAgIHJldHVybiBvcGVuUHJvbWlzZTtcbn1cbi8qKlxuICogRGVsZXRlIGEgZGF0YWJhc2UuXG4gKlxuICogQHBhcmFtIG5hbWUgTmFtZSBvZiB0aGUgZGF0YWJhc2UuXG4gKi9cbmZ1bmN0aW9uIGRlbGV0ZURCKG5hbWUsIHsgYmxvY2tlZCB9ID0ge30pIHtcbiAgICBjb25zdCByZXF1ZXN0ID0gaW5kZXhlZERCLmRlbGV0ZURhdGFiYXNlKG5hbWUpO1xuICAgIGlmIChibG9ja2VkKVxuICAgICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2Jsb2NrZWQnLCAoKSA9PiBibG9ja2VkKCkpO1xuICAgIHJldHVybiB3cmFwKHJlcXVlc3QpLnRoZW4oKCkgPT4gdW5kZWZpbmVkKTtcbn1cblxuY29uc3QgcmVhZE1ldGhvZHMgPSBbJ2dldCcsICdnZXRLZXknLCAnZ2V0QWxsJywgJ2dldEFsbEtleXMnLCAnY291bnQnXTtcbmNvbnN0IHdyaXRlTWV0aG9kcyA9IFsncHV0JywgJ2FkZCcsICdkZWxldGUnLCAnY2xlYXInXTtcbmNvbnN0IGNhY2hlZE1ldGhvZHMgPSBuZXcgTWFwKCk7XG5mdW5jdGlvbiBnZXRNZXRob2QodGFyZ2V0LCBwcm9wKSB7XG4gICAgaWYgKCEodGFyZ2V0IGluc3RhbmNlb2YgSURCRGF0YWJhc2UgJiZcbiAgICAgICAgIShwcm9wIGluIHRhcmdldCkgJiZcbiAgICAgICAgdHlwZW9mIHByb3AgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChjYWNoZWRNZXRob2RzLmdldChwcm9wKSlcbiAgICAgICAgcmV0dXJuIGNhY2hlZE1ldGhvZHMuZ2V0KHByb3ApO1xuICAgIGNvbnN0IHRhcmdldEZ1bmNOYW1lID0gcHJvcC5yZXBsYWNlKC9Gcm9tSW5kZXgkLywgJycpO1xuICAgIGNvbnN0IHVzZUluZGV4ID0gcHJvcCAhPT0gdGFyZ2V0RnVuY05hbWU7XG4gICAgY29uc3QgaXNXcml0ZSA9IHdyaXRlTWV0aG9kcy5pbmNsdWRlcyh0YXJnZXRGdW5jTmFtZSk7XG4gICAgaWYgKFxuICAgIC8vIEJhaWwgaWYgdGhlIHRhcmdldCBkb2Vzbid0IGV4aXN0IG9uIHRoZSB0YXJnZXQuIEVnLCBnZXRBbGwgaXNuJ3QgaW4gRWRnZS5cbiAgICAhKHRhcmdldEZ1bmNOYW1lIGluICh1c2VJbmRleCA/IElEQkluZGV4IDogSURCT2JqZWN0U3RvcmUpLnByb3RvdHlwZSkgfHxcbiAgICAgICAgIShpc1dyaXRlIHx8IHJlYWRNZXRob2RzLmluY2x1ZGVzKHRhcmdldEZ1bmNOYW1lKSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBtZXRob2QgPSBhc3luYyBmdW5jdGlvbiAoc3RvcmVOYW1lLCAuLi5hcmdzKSB7XG4gICAgICAgIC8vIGlzV3JpdGUgPyAncmVhZHdyaXRlJyA6IHVuZGVmaW5lZCBnemlwcHMgYmV0dGVyLCBidXQgZmFpbHMgaW4gRWRnZSA6KFxuICAgICAgICBjb25zdCB0eCA9IHRoaXMudHJhbnNhY3Rpb24oc3RvcmVOYW1lLCBpc1dyaXRlID8gJ3JlYWR3cml0ZScgOiAncmVhZG9ubHknKTtcbiAgICAgICAgbGV0IHRhcmdldCA9IHR4LnN0b3JlO1xuICAgICAgICBpZiAodXNlSW5kZXgpXG4gICAgICAgICAgICB0YXJnZXQgPSB0YXJnZXQuaW5kZXgoYXJncy5zaGlmdCgpKTtcbiAgICAgICAgLy8gTXVzdCByZWplY3QgaWYgb3AgcmVqZWN0cy5cbiAgICAgICAgLy8gSWYgaXQncyBhIHdyaXRlIG9wZXJhdGlvbiwgbXVzdCByZWplY3QgaWYgdHguZG9uZSByZWplY3RzLlxuICAgICAgICAvLyBNdXN0IHJlamVjdCB3aXRoIG9wIHJlamVjdGlvbiBmaXJzdC5cbiAgICAgICAgLy8gTXVzdCByZXNvbHZlIHdpdGggb3AgdmFsdWUuXG4gICAgICAgIC8vIE11c3QgaGFuZGxlIGJvdGggcHJvbWlzZXMgKG5vIHVuaGFuZGxlZCByZWplY3Rpb25zKVxuICAgICAgICByZXR1cm4gKGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIHRhcmdldFt0YXJnZXRGdW5jTmFtZV0oLi4uYXJncyksXG4gICAgICAgICAgICBpc1dyaXRlICYmIHR4LmRvbmUsXG4gICAgICAgIF0pKVswXTtcbiAgICB9O1xuICAgIGNhY2hlZE1ldGhvZHMuc2V0KHByb3AsIG1ldGhvZCk7XG4gICAgcmV0dXJuIG1ldGhvZDtcbn1cbnJlcGxhY2VUcmFwcygob2xkVHJhcHMpID0+ICh7XG4gICAgLi4ub2xkVHJhcHMsXG4gICAgZ2V0OiAodGFyZ2V0LCBwcm9wLCByZWNlaXZlcikgPT4gZ2V0TWV0aG9kKHRhcmdldCwgcHJvcCkgfHwgb2xkVHJhcHMuZ2V0KHRhcmdldCwgcHJvcCwgcmVjZWl2ZXIpLFxuICAgIGhhczogKHRhcmdldCwgcHJvcCkgPT4gISFnZXRNZXRob2QodGFyZ2V0LCBwcm9wKSB8fCBvbGRUcmFwcy5oYXModGFyZ2V0LCBwcm9wKSxcbn0pKTtcblxuZXhwb3J0IHsgZGVsZXRlREIsIG9wZW5EQiB9O1xuIiwiY29uc3QgaW5zdGFuY2VPZkFueSA9IChvYmplY3QsIGNvbnN0cnVjdG9ycykgPT4gY29uc3RydWN0b3JzLnNvbWUoKGMpID0+IG9iamVjdCBpbnN0YW5jZW9mIGMpO1xuXG5sZXQgaWRiUHJveHlhYmxlVHlwZXM7XG5sZXQgY3Vyc29yQWR2YW5jZU1ldGhvZHM7XG4vLyBUaGlzIGlzIGEgZnVuY3Rpb24gdG8gcHJldmVudCBpdCB0aHJvd2luZyB1cCBpbiBub2RlIGVudmlyb25tZW50cy5cbmZ1bmN0aW9uIGdldElkYlByb3h5YWJsZVR5cGVzKCkge1xuICAgIHJldHVybiAoaWRiUHJveHlhYmxlVHlwZXMgfHxcbiAgICAgICAgKGlkYlByb3h5YWJsZVR5cGVzID0gW1xuICAgICAgICAgICAgSURCRGF0YWJhc2UsXG4gICAgICAgICAgICBJREJPYmplY3RTdG9yZSxcbiAgICAgICAgICAgIElEQkluZGV4LFxuICAgICAgICAgICAgSURCQ3Vyc29yLFxuICAgICAgICAgICAgSURCVHJhbnNhY3Rpb24sXG4gICAgICAgIF0pKTtcbn1cbi8vIFRoaXMgaXMgYSBmdW5jdGlvbiB0byBwcmV2ZW50IGl0IHRocm93aW5nIHVwIGluIG5vZGUgZW52aXJvbm1lbnRzLlxuZnVuY3Rpb24gZ2V0Q3Vyc29yQWR2YW5jZU1ldGhvZHMoKSB7XG4gICAgcmV0dXJuIChjdXJzb3JBZHZhbmNlTWV0aG9kcyB8fFxuICAgICAgICAoY3Vyc29yQWR2YW5jZU1ldGhvZHMgPSBbXG4gICAgICAgICAgICBJREJDdXJzb3IucHJvdG90eXBlLmFkdmFuY2UsXG4gICAgICAgICAgICBJREJDdXJzb3IucHJvdG90eXBlLmNvbnRpbnVlLFxuICAgICAgICAgICAgSURCQ3Vyc29yLnByb3RvdHlwZS5jb250aW51ZVByaW1hcnlLZXksXG4gICAgICAgIF0pKTtcbn1cbmNvbnN0IGN1cnNvclJlcXVlc3RNYXAgPSBuZXcgV2Vha01hcCgpO1xuY29uc3QgdHJhbnNhY3Rpb25Eb25lTWFwID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IHRyYW5zYWN0aW9uU3RvcmVOYW1lc01hcCA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCB0cmFuc2Zvcm1DYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCByZXZlcnNlVHJhbnNmb3JtQ2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuZnVuY3Rpb24gcHJvbWlzaWZ5UmVxdWVzdChyZXF1ZXN0KSB7XG4gICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3QgdW5saXN0ZW4gPSAoKSA9PiB7XG4gICAgICAgICAgICByZXF1ZXN0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3N1Y2Nlc3MnLCBzdWNjZXNzKTtcbiAgICAgICAgICAgIHJlcXVlc3QucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlcnJvcik7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKHdyYXAocmVxdWVzdC5yZXN1bHQpKTtcbiAgICAgICAgICAgIHVubGlzdGVuKCk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGVycm9yID0gKCkgPT4ge1xuICAgICAgICAgICAgcmVqZWN0KHJlcXVlc3QuZXJyb3IpO1xuICAgICAgICAgICAgdW5saXN0ZW4oKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdzdWNjZXNzJywgc3VjY2Vzcyk7XG4gICAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlcnJvcik7XG4gICAgfSk7XG4gICAgcHJvbWlzZVxuICAgICAgICAudGhlbigodmFsdWUpID0+IHtcbiAgICAgICAgLy8gU2luY2UgY3Vyc29yaW5nIHJldXNlcyB0aGUgSURCUmVxdWVzdCAoKnNpZ2gqKSwgd2UgY2FjaGUgaXQgZm9yIGxhdGVyIHJldHJpZXZhbFxuICAgICAgICAvLyAoc2VlIHdyYXBGdW5jdGlvbikuXG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIElEQkN1cnNvcikge1xuICAgICAgICAgICAgY3Vyc29yUmVxdWVzdE1hcC5zZXQodmFsdWUsIHJlcXVlc3QpO1xuICAgICAgICB9XG4gICAgICAgIC8vIENhdGNoaW5nIHRvIGF2b2lkIFwiVW5jYXVnaHQgUHJvbWlzZSBleGNlcHRpb25zXCJcbiAgICB9KVxuICAgICAgICAuY2F0Y2goKCkgPT4geyB9KTtcbiAgICAvLyBUaGlzIG1hcHBpbmcgZXhpc3RzIGluIHJldmVyc2VUcmFuc2Zvcm1DYWNoZSBidXQgZG9lc24ndCBkb2Vzbid0IGV4aXN0IGluIHRyYW5zZm9ybUNhY2hlLiBUaGlzXG4gICAgLy8gaXMgYmVjYXVzZSB3ZSBjcmVhdGUgbWFueSBwcm9taXNlcyBmcm9tIGEgc2luZ2xlIElEQlJlcXVlc3QuXG4gICAgcmV2ZXJzZVRyYW5zZm9ybUNhY2hlLnNldChwcm9taXNlLCByZXF1ZXN0KTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cbmZ1bmN0aW9uIGNhY2hlRG9uZVByb21pc2VGb3JUcmFuc2FjdGlvbih0eCkge1xuICAgIC8vIEVhcmx5IGJhaWwgaWYgd2UndmUgYWxyZWFkeSBjcmVhdGVkIGEgZG9uZSBwcm9taXNlIGZvciB0aGlzIHRyYW5zYWN0aW9uLlxuICAgIGlmICh0cmFuc2FjdGlvbkRvbmVNYXAuaGFzKHR4KSlcbiAgICAgICAgcmV0dXJuO1xuICAgIGNvbnN0IGRvbmUgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHVubGlzdGVuID0gKCkgPT4ge1xuICAgICAgICAgICAgdHgucmVtb3ZlRXZlbnRMaXN0ZW5lcignY29tcGxldGUnLCBjb21wbGV0ZSk7XG4gICAgICAgICAgICB0eC5yZW1vdmVFdmVudExpc3RlbmVyKCdlcnJvcicsIGVycm9yKTtcbiAgICAgICAgICAgIHR4LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Fib3J0JywgZXJyb3IpO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIHVubGlzdGVuKCk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGVycm9yID0gKCkgPT4ge1xuICAgICAgICAgICAgcmVqZWN0KHR4LmVycm9yIHx8IG5ldyBET01FeGNlcHRpb24oJ0Fib3J0RXJyb3InLCAnQWJvcnRFcnJvcicpKTtcbiAgICAgICAgICAgIHVubGlzdGVuKCk7XG4gICAgICAgIH07XG4gICAgICAgIHR4LmFkZEV2ZW50TGlzdGVuZXIoJ2NvbXBsZXRlJywgY29tcGxldGUpO1xuICAgICAgICB0eC5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGVycm9yKTtcbiAgICAgICAgdHguYWRkRXZlbnRMaXN0ZW5lcignYWJvcnQnLCBlcnJvcik7XG4gICAgfSk7XG4gICAgLy8gQ2FjaGUgaXQgZm9yIGxhdGVyIHJldHJpZXZhbC5cbiAgICB0cmFuc2FjdGlvbkRvbmVNYXAuc2V0KHR4LCBkb25lKTtcbn1cbmxldCBpZGJQcm94eVRyYXBzID0ge1xuICAgIGdldCh0YXJnZXQsIHByb3AsIHJlY2VpdmVyKSB7XG4gICAgICAgIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBJREJUcmFuc2FjdGlvbikge1xuICAgICAgICAgICAgLy8gU3BlY2lhbCBoYW5kbGluZyBmb3IgdHJhbnNhY3Rpb24uZG9uZS5cbiAgICAgICAgICAgIGlmIChwcm9wID09PSAnZG9uZScpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRyYW5zYWN0aW9uRG9uZU1hcC5nZXQodGFyZ2V0KTtcbiAgICAgICAgICAgIC8vIFBvbHlmaWxsIGZvciBvYmplY3RTdG9yZU5hbWVzIGJlY2F1c2Ugb2YgRWRnZS5cbiAgICAgICAgICAgIGlmIChwcm9wID09PSAnb2JqZWN0U3RvcmVOYW1lcycpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0Lm9iamVjdFN0b3JlTmFtZXMgfHwgdHJhbnNhY3Rpb25TdG9yZU5hbWVzTWFwLmdldCh0YXJnZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTWFrZSB0eC5zdG9yZSByZXR1cm4gdGhlIG9ubHkgc3RvcmUgaW4gdGhlIHRyYW5zYWN0aW9uLCBvciB1bmRlZmluZWQgaWYgdGhlcmUgYXJlIG1hbnkuXG4gICAgICAgICAgICBpZiAocHJvcCA9PT0gJ3N0b3JlJykge1xuICAgICAgICAgICAgICAgIHJldHVybiByZWNlaXZlci5vYmplY3RTdG9yZU5hbWVzWzFdXG4gICAgICAgICAgICAgICAgICAgID8gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgIDogcmVjZWl2ZXIub2JqZWN0U3RvcmUocmVjZWl2ZXIub2JqZWN0U3RvcmVOYW1lc1swXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gRWxzZSB0cmFuc2Zvcm0gd2hhdGV2ZXIgd2UgZ2V0IGJhY2suXG4gICAgICAgIHJldHVybiB3cmFwKHRhcmdldFtwcm9wXSk7XG4gICAgfSxcbiAgICBzZXQodGFyZ2V0LCBwcm9wLCB2YWx1ZSkge1xuICAgICAgICB0YXJnZXRbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcbiAgICBoYXModGFyZ2V0LCBwcm9wKSB7XG4gICAgICAgIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBJREJUcmFuc2FjdGlvbiAmJlxuICAgICAgICAgICAgKHByb3AgPT09ICdkb25lJyB8fCBwcm9wID09PSAnc3RvcmUnKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByb3AgaW4gdGFyZ2V0O1xuICAgIH0sXG59O1xuZnVuY3Rpb24gcmVwbGFjZVRyYXBzKGNhbGxiYWNrKSB7XG4gICAgaWRiUHJveHlUcmFwcyA9IGNhbGxiYWNrKGlkYlByb3h5VHJhcHMpO1xufVxuZnVuY3Rpb24gd3JhcEZ1bmN0aW9uKGZ1bmMpIHtcbiAgICAvLyBEdWUgdG8gZXhwZWN0ZWQgb2JqZWN0IGVxdWFsaXR5ICh3aGljaCBpcyBlbmZvcmNlZCBieSB0aGUgY2FjaGluZyBpbiBgd3JhcGApLCB3ZVxuICAgIC8vIG9ubHkgY3JlYXRlIG9uZSBuZXcgZnVuYyBwZXIgZnVuYy5cbiAgICAvLyBFZGdlIGRvZXNuJ3Qgc3VwcG9ydCBvYmplY3RTdG9yZU5hbWVzIChib29vKSwgc28gd2UgcG9seWZpbGwgaXQgaGVyZS5cbiAgICBpZiAoZnVuYyA9PT0gSURCRGF0YWJhc2UucHJvdG90eXBlLnRyYW5zYWN0aW9uICYmXG4gICAgICAgICEoJ29iamVjdFN0b3JlTmFtZXMnIGluIElEQlRyYW5zYWN0aW9uLnByb3RvdHlwZSkpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChzdG9yZU5hbWVzLCAuLi5hcmdzKSB7XG4gICAgICAgICAgICBjb25zdCB0eCA9IGZ1bmMuY2FsbCh1bndyYXAodGhpcyksIHN0b3JlTmFtZXMsIC4uLmFyZ3MpO1xuICAgICAgICAgICAgdHJhbnNhY3Rpb25TdG9yZU5hbWVzTWFwLnNldCh0eCwgc3RvcmVOYW1lcy5zb3J0ID8gc3RvcmVOYW1lcy5zb3J0KCkgOiBbc3RvcmVOYW1lc10pO1xuICAgICAgICAgICAgcmV0dXJuIHdyYXAodHgpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICAvLyBDdXJzb3IgbWV0aG9kcyBhcmUgc3BlY2lhbCwgYXMgdGhlIGJlaGF2aW91ciBpcyBhIGxpdHRsZSBtb3JlIGRpZmZlcmVudCB0byBzdGFuZGFyZCBJREIuIEluXG4gICAgLy8gSURCLCB5b3UgYWR2YW5jZSB0aGUgY3Vyc29yIGFuZCB3YWl0IGZvciBhIG5ldyAnc3VjY2Vzcycgb24gdGhlIElEQlJlcXVlc3QgdGhhdCBnYXZlIHlvdSB0aGVcbiAgICAvLyBjdXJzb3IuIEl0J3Mga2luZGEgbGlrZSBhIHByb21pc2UgdGhhdCBjYW4gcmVzb2x2ZSB3aXRoIG1hbnkgdmFsdWVzLiBUaGF0IGRvZXNuJ3QgbWFrZSBzZW5zZVxuICAgIC8vIHdpdGggcmVhbCBwcm9taXNlcywgc28gZWFjaCBhZHZhbmNlIG1ldGhvZHMgcmV0dXJucyBhIG5ldyBwcm9taXNlIGZvciB0aGUgY3Vyc29yIG9iamVjdCwgb3JcbiAgICAvLyB1bmRlZmluZWQgaWYgdGhlIGVuZCBvZiB0aGUgY3Vyc29yIGhhcyBiZWVuIHJlYWNoZWQuXG4gICAgaWYgKGdldEN1cnNvckFkdmFuY2VNZXRob2RzKCkuaW5jbHVkZXMoZnVuYykpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgICAgICAgICAvLyBDYWxsaW5nIHRoZSBvcmlnaW5hbCBmdW5jdGlvbiB3aXRoIHRoZSBwcm94eSBhcyAndGhpcycgY2F1c2VzIElMTEVHQUwgSU5WT0NBVElPTiwgc28gd2UgdXNlXG4gICAgICAgICAgICAvLyB0aGUgb3JpZ2luYWwgb2JqZWN0LlxuICAgICAgICAgICAgZnVuYy5hcHBseSh1bndyYXAodGhpcyksIGFyZ3MpO1xuICAgICAgICAgICAgcmV0dXJuIHdyYXAoY3Vyc29yUmVxdWVzdE1hcC5nZXQodGhpcykpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgICAgLy8gQ2FsbGluZyB0aGUgb3JpZ2luYWwgZnVuY3Rpb24gd2l0aCB0aGUgcHJveHkgYXMgJ3RoaXMnIGNhdXNlcyBJTExFR0FMIElOVk9DQVRJT04sIHNvIHdlIHVzZVxuICAgICAgICAvLyB0aGUgb3JpZ2luYWwgb2JqZWN0LlxuICAgICAgICByZXR1cm4gd3JhcChmdW5jLmFwcGx5KHVud3JhcCh0aGlzKSwgYXJncykpO1xuICAgIH07XG59XG5mdW5jdGlvbiB0cmFuc2Zvcm1DYWNoYWJsZVZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJylcbiAgICAgICAgcmV0dXJuIHdyYXBGdW5jdGlvbih2YWx1ZSk7XG4gICAgLy8gVGhpcyBkb2Vzbid0IHJldHVybiwgaXQganVzdCBjcmVhdGVzIGEgJ2RvbmUnIHByb21pc2UgZm9yIHRoZSB0cmFuc2FjdGlvbixcbiAgICAvLyB3aGljaCBpcyBsYXRlciByZXR1cm5lZCBmb3IgdHJhbnNhY3Rpb24uZG9uZSAoc2VlIGlkYk9iamVjdEhhbmRsZXIpLlxuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIElEQlRyYW5zYWN0aW9uKVxuICAgICAgICBjYWNoZURvbmVQcm9taXNlRm9yVHJhbnNhY3Rpb24odmFsdWUpO1xuICAgIGlmIChpbnN0YW5jZU9mQW55KHZhbHVlLCBnZXRJZGJQcm94eWFibGVUeXBlcygpKSlcbiAgICAgICAgcmV0dXJuIG5ldyBQcm94eSh2YWx1ZSwgaWRiUHJveHlUcmFwcyk7XG4gICAgLy8gUmV0dXJuIHRoZSBzYW1lIHZhbHVlIGJhY2sgaWYgd2UncmUgbm90IGdvaW5nIHRvIHRyYW5zZm9ybSBpdC5cbiAgICByZXR1cm4gdmFsdWU7XG59XG5mdW5jdGlvbiB3cmFwKHZhbHVlKSB7XG4gICAgLy8gV2Ugc29tZXRpbWVzIGdlbmVyYXRlIG11bHRpcGxlIHByb21pc2VzIGZyb20gYSBzaW5nbGUgSURCUmVxdWVzdCAoZWcgd2hlbiBjdXJzb3JpbmcpLCBiZWNhdXNlXG4gICAgLy8gSURCIGlzIHdlaXJkIGFuZCBhIHNpbmdsZSBJREJSZXF1ZXN0IGNhbiB5aWVsZCBtYW55IHJlc3BvbnNlcywgc28gdGhlc2UgY2FuJ3QgYmUgY2FjaGVkLlxuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIElEQlJlcXVlc3QpXG4gICAgICAgIHJldHVybiBwcm9taXNpZnlSZXF1ZXN0KHZhbHVlKTtcbiAgICAvLyBJZiB3ZSd2ZSBhbHJlYWR5IHRyYW5zZm9ybWVkIHRoaXMgdmFsdWUgYmVmb3JlLCByZXVzZSB0aGUgdHJhbnNmb3JtZWQgdmFsdWUuXG4gICAgLy8gVGhpcyBpcyBmYXN0ZXIsIGJ1dCBpdCBhbHNvIHByb3ZpZGVzIG9iamVjdCBlcXVhbGl0eS5cbiAgICBpZiAodHJhbnNmb3JtQ2FjaGUuaGFzKHZhbHVlKSlcbiAgICAgICAgcmV0dXJuIHRyYW5zZm9ybUNhY2hlLmdldCh2YWx1ZSk7XG4gICAgY29uc3QgbmV3VmFsdWUgPSB0cmFuc2Zvcm1DYWNoYWJsZVZhbHVlKHZhbHVlKTtcbiAgICAvLyBOb3QgYWxsIHR5cGVzIGFyZSB0cmFuc2Zvcm1lZC5cbiAgICAvLyBUaGVzZSBtYXkgYmUgcHJpbWl0aXZlIHR5cGVzLCBzbyB0aGV5IGNhbid0IGJlIFdlYWtNYXAga2V5cy5cbiAgICBpZiAobmV3VmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICAgIHRyYW5zZm9ybUNhY2hlLnNldCh2YWx1ZSwgbmV3VmFsdWUpO1xuICAgICAgICByZXZlcnNlVHJhbnNmb3JtQ2FjaGUuc2V0KG5ld1ZhbHVlLCB2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiBuZXdWYWx1ZTtcbn1cbmNvbnN0IHVud3JhcCA9ICh2YWx1ZSkgPT4gcmV2ZXJzZVRyYW5zZm9ybUNhY2hlLmdldCh2YWx1ZSk7XG5cbmV4cG9ydCB7IHJldmVyc2VUcmFuc2Zvcm1DYWNoZSBhcyBhLCBpbnN0YW5jZU9mQW55IGFzIGksIHJlcGxhY2VUcmFwcyBhcyByLCB1bndyYXAgYXMgdSwgd3JhcCBhcyB3IH07XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXBwbHlEZWNvcmF0ZWREZXNjcmlwdG9yKHRhcmdldCwgcHJvcGVydHksIGRlY29yYXRvcnMsIGRlc2NyaXB0b3IsIGNvbnRleHQpIHtcbiAgdmFyIGRlc2MgPSB7fTtcbiAgT2JqZWN0LmtleXMoZGVzY3JpcHRvcikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgZGVzY1trZXldID0gZGVzY3JpcHRvcltrZXldO1xuICB9KTtcbiAgZGVzYy5lbnVtZXJhYmxlID0gISFkZXNjLmVudW1lcmFibGU7XG4gIGRlc2MuY29uZmlndXJhYmxlID0gISFkZXNjLmNvbmZpZ3VyYWJsZTtcblxuICBpZiAoJ3ZhbHVlJyBpbiBkZXNjIHx8IGRlc2MuaW5pdGlhbGl6ZXIpIHtcbiAgICBkZXNjLndyaXRhYmxlID0gdHJ1ZTtcbiAgfVxuXG4gIGRlc2MgPSBkZWNvcmF0b3JzLnNsaWNlKCkucmV2ZXJzZSgpLnJlZHVjZShmdW5jdGlvbiAoZGVzYywgZGVjb3JhdG9yKSB7XG4gICAgcmV0dXJuIGRlY29yYXRvcih0YXJnZXQsIHByb3BlcnR5LCBkZXNjKSB8fCBkZXNjO1xuICB9LCBkZXNjKTtcblxuICBpZiAoY29udGV4dCAmJiBkZXNjLmluaXRpYWxpemVyICE9PSB2b2lkIDApIHtcbiAgICBkZXNjLnZhbHVlID0gZGVzYy5pbml0aWFsaXplciA/IGRlc2MuaW5pdGlhbGl6ZXIuY2FsbChjb250ZXh0KSA6IHZvaWQgMDtcbiAgICBkZXNjLmluaXRpYWxpemVyID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgaWYgKGRlc2MuaW5pdGlhbGl6ZXIgPT09IHZvaWQgMCkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5LCBkZXNjKTtcbiAgICBkZXNjID0gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBkZXNjO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pbml0aWFsaXplckRlZmluZVByb3BlcnR5KHRhcmdldCwgcHJvcGVydHksIGRlc2NyaXB0b3IsIGNvbnRleHQpIHtcbiAgaWYgKCFkZXNjcmlwdG9yKSByZXR1cm47XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5LCB7XG4gICAgZW51bWVyYWJsZTogZGVzY3JpcHRvci5lbnVtZXJhYmxlLFxuICAgIGNvbmZpZ3VyYWJsZTogZGVzY3JpcHRvci5jb25maWd1cmFibGUsXG4gICAgd3JpdGFibGU6IGRlc2NyaXB0b3Iud3JpdGFibGUsXG4gICAgdmFsdWU6IGRlc2NyaXB0b3IuaW5pdGlhbGl6ZXIgPyBkZXNjcmlwdG9yLmluaXRpYWxpemVyLmNhbGwoY29udGV4dCkgOiB2b2lkIDBcbiAgfSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2luaXRpYWxpemVyV2FybmluZ0hlbHBlcihkZXNjcmlwdG9yLCBjb250ZXh0KSB7XG4gIHRocm93IG5ldyBFcnJvcignRGVjb3JhdGluZyBjbGFzcyBwcm9wZXJ0eSBmYWlsZWQuIFBsZWFzZSBlbnN1cmUgdGhhdCAnICsgJ3Byb3Bvc2FsLWNsYXNzLXByb3BlcnRpZXMgaXMgZW5hYmxlZCBhbmQgcnVucyBhZnRlciB0aGUgZGVjb3JhdG9ycyB0cmFuc2Zvcm0uJyk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==