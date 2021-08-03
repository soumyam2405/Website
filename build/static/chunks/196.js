(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[196],{

/***/ "./modules/message/preview/EmbedTimestamp.tsx":
/*!****************************************************!*\
  !*** ./modules/message/preview/EmbedTimestamp.tsx ***!
  \****************************************************/
/*! exports provided: EmbedTimestamp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmbedTimestamp", function() { return EmbedTimestamp; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _formatTimestamp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formatTimestamp */ "./modules/message/preview/formatTimestamp.ts");

var _jsxFileName = "F:\\DiscordHookSite\\modules\\message\\preview\\EmbedTimestamp.tsx";


function EmbedTimestamp(props) {
  const {
    timestamp
  } = props;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
    children: Object(_formatTimestamp__WEBPACK_IMPORTED_MODULE_2__["formatTimestamp"])(timestamp)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 10
  }, this);
}
_c = EmbedTimestamp;

var _c;

$RefreshReg$(_c, "EmbedTimestamp");

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

/***/ "./modules/message/preview/formatTimestamp.ts":
/*!****************************************************!*\
  !*** ./modules/message/preview/formatTimestamp.ts ***!
  \****************************************************/
/*! exports provided: formatTimestamp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatTimestamp", function() { return formatTimestamp; });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");

const ONE_DAY = 1000 * 60 * 60 * 24;

const getTimestampFormat = (date, base) => {
  const givenDate = new Date(date).setHours(0, 0, 0, 0);
  const now = new Date(base !== null && base !== void 0 ? base : Date.now()).setHours(0, 0, 0, 0);
  const difference = (givenDate - now) / ONE_DAY;
  if (difference < -1) return "full";
  if (difference < 0) return "yesterday";
  if (difference < 1) return "today";
  if (difference < 2) return "tomorrow";
  return "full";
};

const formatTimestamp = (date, base) => {
  if (!Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["isValid"])(date)) return "Invalid date";
  const day = String(Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["getDate"])(date)).padStart(2, "0");
  const month = String(Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["getMonth"])(date) + 1).padStart(2, "0");
  const year = Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["getYear"])(date);
  const time = date.toLocaleString("en-US", {
    hour: "2-digit",
    minute: "numeric",
    hour12: true
  });

  switch (getTimestampFormat(date, base)) {
    case "yesterday":
      {
        return `Yesterday at ${time}`;
      }

    case "today":
      {
        return `Today at ${time}`;
      }

    case "tomorrow":
      {
        return `Tomorrow at ${time}`;
      }

    default:
      {
        return `${day}/${month}/${year}`;
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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy9tZXNzYWdlL3ByZXZpZXcvRW1iZWRUaW1lc3RhbXAudHN4Iiwid2VicGFjazovL19OX0UvLi9tb2R1bGVzL21lc3NhZ2UvcHJldmlldy9mb3JtYXRUaW1lc3RhbXAudHMiXSwibmFtZXMiOlsiRW1iZWRUaW1lc3RhbXAiLCJwcm9wcyIsInRpbWVzdGFtcCIsImZvcm1hdFRpbWVzdGFtcCIsIk9ORV9EQVkiLCJnZXRUaW1lc3RhbXBGb3JtYXQiLCJkYXRlIiwiYmFzZSIsImdpdmVuRGF0ZSIsIkRhdGUiLCJzZXRIb3VycyIsIm5vdyIsImRpZmZlcmVuY2UiLCJpc1ZhbGlkIiwiZGF5IiwiU3RyaW5nIiwiZ2V0RGF0ZSIsInBhZFN0YXJ0IiwibW9udGgiLCJnZXRNb250aCIsInllYXIiLCJnZXRZZWFyIiwidGltZSIsInRvTG9jYWxlU3RyaW5nIiwiaG91ciIsIm1pbnV0ZSIsImhvdXIxMiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFNTyxTQUFTQSxjQUFULENBQXdCQyxLQUF4QixFQUFvRDtBQUN6RCxRQUFNO0FBQUVDO0FBQUYsTUFBZ0JELEtBQXRCO0FBRUEsc0JBQU87QUFBQSxjQUFPRSx3RUFBZSxDQUFDRCxTQUFEO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNEO0tBSmVGLGM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQaEI7QUFBQTtBQUFBO0FBQUE7QUFFQSxNQUFNSSxPQUFPLEdBQUcsT0FBTyxFQUFQLEdBQVksRUFBWixHQUFpQixFQUFqQzs7QUFFQSxNQUFNQyxrQkFBa0IsR0FBRyxDQUFDQyxJQUFELEVBQWFDLElBQWIsS0FBNkI7QUFDdEQsUUFBTUMsU0FBUyxHQUFHLElBQUlDLElBQUosQ0FBU0gsSUFBVCxFQUFlSSxRQUFmLENBQXdCLENBQXhCLEVBQTJCLENBQTNCLEVBQThCLENBQTlCLEVBQWlDLENBQWpDLENBQWxCO0FBQ0EsUUFBTUMsR0FBRyxHQUFHLElBQUlGLElBQUosQ0FBU0YsSUFBVCxhQUFTQSxJQUFULGNBQVNBLElBQVQsR0FBaUJFLElBQUksQ0FBQ0UsR0FBTCxFQUFqQixFQUE2QkQsUUFBN0IsQ0FBc0MsQ0FBdEMsRUFBeUMsQ0FBekMsRUFBNEMsQ0FBNUMsRUFBK0MsQ0FBL0MsQ0FBWjtBQUVBLFFBQU1FLFVBQVUsR0FBRyxDQUFDSixTQUFTLEdBQUdHLEdBQWIsSUFBb0JQLE9BQXZDO0FBRUEsTUFBSVEsVUFBVSxHQUFHLENBQUMsQ0FBbEIsRUFBcUIsT0FBTyxNQUFQO0FBQ3JCLE1BQUlBLFVBQVUsR0FBRyxDQUFqQixFQUFvQixPQUFPLFdBQVA7QUFDcEIsTUFBSUEsVUFBVSxHQUFHLENBQWpCLEVBQW9CLE9BQU8sT0FBUDtBQUNwQixNQUFJQSxVQUFVLEdBQUcsQ0FBakIsRUFBb0IsT0FBTyxVQUFQO0FBQ3BCLFNBQU8sTUFBUDtBQUNELENBWEQ7O0FBYU8sTUFBTVQsZUFBZSxHQUFHLENBQUNHLElBQUQsRUFBYUMsSUFBYixLQUE2QjtBQUMxRCxNQUFJLENBQUNNLHdEQUFPLENBQUNQLElBQUQsQ0FBWixFQUFvQixPQUFPLGNBQVA7QUFFcEIsUUFBTVEsR0FBRyxHQUFHQyxNQUFNLENBQUNDLHdEQUFPLENBQUNWLElBQUQsQ0FBUixDQUFOLENBQXNCVyxRQUF0QixDQUErQixDQUEvQixFQUFrQyxHQUFsQyxDQUFaO0FBQ0EsUUFBTUMsS0FBSyxHQUFHSCxNQUFNLENBQUNJLHlEQUFRLENBQUNiLElBQUQsQ0FBUixHQUFpQixDQUFsQixDQUFOLENBQTJCVyxRQUEzQixDQUFvQyxDQUFwQyxFQUF1QyxHQUF2QyxDQUFkO0FBQ0EsUUFBTUcsSUFBSSxHQUFHQyx3REFBTyxDQUFDZixJQUFELENBQXBCO0FBRUEsUUFBTWdCLElBQUksR0FBR2hCLElBQUksQ0FBQ2lCLGNBQUwsQ0FBb0IsT0FBcEIsRUFBNkI7QUFDeENDLFFBQUksRUFBRSxTQURrQztBQUV4Q0MsVUFBTSxFQUFFLFNBRmdDO0FBR3hDQyxVQUFNLEVBQUU7QUFIZ0MsR0FBN0IsQ0FBYjs7QUFNQSxVQUFRckIsa0JBQWtCLENBQUNDLElBQUQsRUFBT0MsSUFBUCxDQUExQjtBQUNFLFNBQUssV0FBTDtBQUFrQjtBQUNoQixlQUFRLGdCQUFlZSxJQUFLLEVBQTVCO0FBQ0Q7O0FBQ0QsU0FBSyxPQUFMO0FBQWM7QUFDWixlQUFRLFlBQVdBLElBQUssRUFBeEI7QUFDRDs7QUFDRCxTQUFLLFVBQUw7QUFBaUI7QUFDZixlQUFRLGVBQWNBLElBQUssRUFBM0I7QUFDRDs7QUFDRDtBQUFTO0FBQ1AsZUFBUSxHQUFFUixHQUFJLElBQUdJLEtBQU0sSUFBR0UsSUFBSyxFQUEvQjtBQUNEO0FBWkg7QUFjRCxDQTNCTSIsImZpbGUiOiJzdGF0aWMvY2h1bmtzLzE5Ni5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBmb3JtYXRUaW1lc3RhbXAgfSBmcm9tIFwiLi9mb3JtYXRUaW1lc3RhbXBcIlxyXG5cclxuZXhwb3J0IHR5cGUgRW1iZWRUaW1lc3RhbXBQcm9wcyA9IHtcclxuICB0aW1lc3RhbXA6IERhdGVcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEVtYmVkVGltZXN0YW1wKHByb3BzOiBFbWJlZFRpbWVzdGFtcFByb3BzKSB7XHJcbiAgY29uc3QgeyB0aW1lc3RhbXAgfSA9IHByb3BzXHJcblxyXG4gIHJldHVybiA8c3Bhbj57Zm9ybWF0VGltZXN0YW1wKHRpbWVzdGFtcCl9PC9zcGFuPlxyXG59XHJcbiIsImltcG9ydCB7IGdldERhdGUsIGdldE1vbnRoLCBnZXRZZWFyLCBpc1ZhbGlkIH0gZnJvbSBcImRhdGUtZm5zXCJcclxuXHJcbmNvbnN0IE9ORV9EQVkgPSAxMDAwICogNjAgKiA2MCAqIDI0XHJcblxyXG5jb25zdCBnZXRUaW1lc3RhbXBGb3JtYXQgPSAoZGF0ZTogRGF0ZSwgYmFzZT86IERhdGUpID0+IHtcclxuICBjb25zdCBnaXZlbkRhdGUgPSBuZXcgRGF0ZShkYXRlKS5zZXRIb3VycygwLCAwLCAwLCAwKVxyXG4gIGNvbnN0IG5vdyA9IG5ldyBEYXRlKGJhc2UgPz8gRGF0ZS5ub3coKSkuc2V0SG91cnMoMCwgMCwgMCwgMClcclxuXHJcbiAgY29uc3QgZGlmZmVyZW5jZSA9IChnaXZlbkRhdGUgLSBub3cpIC8gT05FX0RBWVxyXG5cclxuICBpZiAoZGlmZmVyZW5jZSA8IC0xKSByZXR1cm4gXCJmdWxsXCJcclxuICBpZiAoZGlmZmVyZW5jZSA8IDApIHJldHVybiBcInllc3RlcmRheVwiXHJcbiAgaWYgKGRpZmZlcmVuY2UgPCAxKSByZXR1cm4gXCJ0b2RheVwiXHJcbiAgaWYgKGRpZmZlcmVuY2UgPCAyKSByZXR1cm4gXCJ0b21vcnJvd1wiXHJcbiAgcmV0dXJuIFwiZnVsbFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBmb3JtYXRUaW1lc3RhbXAgPSAoZGF0ZTogRGF0ZSwgYmFzZT86IERhdGUpID0+IHtcclxuICBpZiAoIWlzVmFsaWQoZGF0ZSkpIHJldHVybiBcIkludmFsaWQgZGF0ZVwiXHJcblxyXG4gIGNvbnN0IGRheSA9IFN0cmluZyhnZXREYXRlKGRhdGUpKS5wYWRTdGFydCgyLCBcIjBcIilcclxuICBjb25zdCBtb250aCA9IFN0cmluZyhnZXRNb250aChkYXRlKSArIDEpLnBhZFN0YXJ0KDIsIFwiMFwiKVxyXG4gIGNvbnN0IHllYXIgPSBnZXRZZWFyKGRhdGUpXHJcblxyXG4gIGNvbnN0IHRpbWUgPSBkYXRlLnRvTG9jYWxlU3RyaW5nKFwiZW4tVVNcIiwge1xyXG4gICAgaG91cjogXCIyLWRpZ2l0XCIsXHJcbiAgICBtaW51dGU6IFwibnVtZXJpY1wiLFxyXG4gICAgaG91cjEyOiB0cnVlLFxyXG4gIH0pXHJcblxyXG4gIHN3aXRjaCAoZ2V0VGltZXN0YW1wRm9ybWF0KGRhdGUsIGJhc2UpKSB7XHJcbiAgICBjYXNlIFwieWVzdGVyZGF5XCI6IHtcclxuICAgICAgcmV0dXJuIGBZZXN0ZXJkYXkgYXQgJHt0aW1lfWBcclxuICAgIH1cclxuICAgIGNhc2UgXCJ0b2RheVwiOiB7XHJcbiAgICAgIHJldHVybiBgVG9kYXkgYXQgJHt0aW1lfWBcclxuICAgIH1cclxuICAgIGNhc2UgXCJ0b21vcnJvd1wiOiB7XHJcbiAgICAgIHJldHVybiBgVG9tb3Jyb3cgYXQgJHt0aW1lfWBcclxuICAgIH1cclxuICAgIGRlZmF1bHQ6IHtcclxuICAgICAgcmV0dXJuIGAke2RheX0vJHttb250aH0vJHt5ZWFyfWBcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==