(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[195],{

/***/ "./modules/message/preview/Clock.tsx":
/*!*******************************************!*\
  !*** ./modules/message/preview/Clock.tsx ***!
  \*******************************************/
/*! exports provided: Clock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Clock", function() { return Clock; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polished */ "./node_modules/polished/dist/polished.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _formatTimestamp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./formatTimestamp */ "./modules/message/preview/formatTimestamp.ts");


var _jsxFileName = "F:\\DiscordHookSite\\modules\\message\\preview\\Clock.tsx",
    _s = $RefreshSig$();






const Display = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].span.withConfig({
  displayName: "Clock__Display",
  componentId: "sc-1idsap7-0"
})(["display:inline-block;height:", ";cursor:default;color:", ";", ";", ";"], Object(polished__WEBPACK_IMPORTED_MODULE_2__["rem"])(20), ({
  theme
}) => theme.text.muted, ({
  theme
}) => theme.appearance.display === "cozy" && Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["css"])(["margin-left:", ";font-size:", ";font-weight:500;line-height:", ";vertical-align:baseline;"], Object(polished__WEBPACK_IMPORTED_MODULE_2__["rem"])(4), Object(polished__WEBPACK_IMPORTED_MODULE_2__["rem"])(12), Object(polished__WEBPACK_IMPORTED_MODULE_2__["rem"])(22)), ({
  theme
}) => theme.appearance.display === "compact" && Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["css"])(["width:", ";margin-right:", ";font-size:", ";line-height:", ";text-align:right;text-indent:0;"], Object(polished__WEBPACK_IMPORTED_MODULE_2__["rem"])(48), Object(polished__WEBPACK_IMPORTED_MODULE_2__["rem"])(8), Object(polished__WEBPACK_IMPORTED_MODULE_2__["rem"])(11), Object(polished__WEBPACK_IMPORTED_MODULE_2__["rem"])(22)));
_c = Display;
function Clock(props) {
  _s();

  let {
    timestamp
  } = props;
  if (timestamp && !Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["isValid"])(timestamp)) timestamp = undefined;
  const theme = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["useTheme"])();
  const format = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])((timestamp = new Date()) => {
    if (theme.appearance.display === "compact") {
      return timestamp.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true
      });
    }

    return Object(_formatTimestamp__WEBPACK_IMPORTED_MODULE_5__["formatTimestamp"])(timestamp);
  }, [theme.appearance.display]);
  const {
    0: displayedTime,
    1: setDisplayedTime
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(() => format(timestamp));
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    if (!timestamp) {
      const interval = setInterval(() => setDisplayedTime(format()), 1000);
      return () => clearInterval(interval);
    }

    setDisplayedTime(format(timestamp));
  }, [format, timestamp]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Display, {
    children: displayedTime
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 74,
    columnNumber: 10
  }, this);
}

_s(Clock, "YQg2WIgs6AGRktjZ/lLiZnjDfFk=", false, function () {
  return [styled_components__WEBPACK_IMPORTED_MODULE_4__["useTheme"]];
});

_c2 = Clock;

var _c, _c2;

$RefreshReg$(_c, "Display");
$RefreshReg$(_c2, "Clock");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy9tZXNzYWdlL3ByZXZpZXcvQ2xvY2sudHN4Iiwid2VicGFjazovL19OX0UvLi9tb2R1bGVzL21lc3NhZ2UvcHJldmlldy9mb3JtYXRUaW1lc3RhbXAudHMiXSwibmFtZXMiOlsiRGlzcGxheSIsInN0eWxlZCIsInNwYW4iLCJyZW0iLCJ0aGVtZSIsInRleHQiLCJtdXRlZCIsImFwcGVhcmFuY2UiLCJkaXNwbGF5IiwiY3NzIiwiQ2xvY2siLCJwcm9wcyIsInRpbWVzdGFtcCIsImlzVmFsaWQiLCJ1bmRlZmluZWQiLCJ1c2VUaGVtZSIsImZvcm1hdCIsInVzZUNhbGxiYWNrIiwiRGF0ZSIsInRvTG9jYWxlU3RyaW5nIiwiaG91ciIsIm1pbnV0ZSIsImhvdXIxMiIsImZvcm1hdFRpbWVzdGFtcCIsImRpc3BsYXllZFRpbWUiLCJzZXREaXNwbGF5ZWRUaW1lIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsIk9ORV9EQVkiLCJnZXRUaW1lc3RhbXBGb3JtYXQiLCJkYXRlIiwiYmFzZSIsImdpdmVuRGF0ZSIsInNldEhvdXJzIiwibm93IiwiZGlmZmVyZW5jZSIsImRheSIsIlN0cmluZyIsImdldERhdGUiLCJwYWRTdGFydCIsIm1vbnRoIiwiZ2V0TW9udGgiLCJ5ZWFyIiwiZ2V0WWVhciIsInRpbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsT0FBTyxHQUFHQyx5REFBTSxDQUFDQyxJQUFWO0FBQUE7QUFBQTtBQUFBLDhFQUVEQyxvREFBRyxDQUFDLEVBQUQsQ0FGRixFQUtGLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0MsSUFBTixDQUFXQyxLQUx4QixFQU9ULENBQUM7QUFBRUY7QUFBRixDQUFELEtBQ0FBLEtBQUssQ0FBQ0csVUFB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QUNEOztBQUNELFNBQUssT0FBTDtBQUFjO0FBQ1osZUFBUSxZQUFXQSxJQUFLLEVBQXhCO0FBQ0Q7O0FBQ0QsU0FBSyxVQUFMO0FBQWlCO0FBQ2YsZUFBUSxlQUFjQSxJQUFLLEVBQTNCO0FBQ0Q7O0FBQ0Q7QUFBUztBQUNQLGVBQVEsR0FBRVIsR0FBSSxJQUFHSSxLQUFNLElBQUdFLElBQUssRUFBL0I7QUFDRDtBQVpIO0FBY0QsQ0EzQk0iLCJmaWxlIjoic3RhdGljL2NodW5rcy8xOTUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc1ZhbGlkIH0gZnJvbSBcImRhdGUtZm5zXCJcclxuaW1wb3J0IHsgcmVtIH0gZnJvbSBcInBvbGlzaGVkXCJcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHN0eWxlZCwgeyBjc3MsIHVzZVRoZW1lIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcclxuaW1wb3J0IHsgZm9ybWF0VGltZXN0YW1wIH0gZnJvbSBcIi4vZm9ybWF0VGltZXN0YW1wXCJcclxuXHJcbmNvbnN0IERpc3BsYXkgPSBzdHlsZWQuc3BhbmBcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgaGVpZ2h0OiAke3JlbSgyMCl9O1xyXG4gIGN1cnNvcjogZGVmYXVsdDtcclxuXHJcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudGV4dC5tdXRlZH07XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT5cclxuICAgIHRoZW1lLmFwcGVhcmFuY2UuZGlzcGxheSA9PT0gXCJjb3p5XCIgJiZcclxuICAgIGNzc2BcclxuICAgICAgbWFyZ2luLWxlZnQ6ICR7cmVtKDQpfTtcclxuXHJcbiAgICAgIGZvbnQtc2l6ZTogJHtyZW0oMTIpfTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgbGluZS1oZWlnaHQ6ICR7cmVtKDIyKX07XHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcclxuICAgIGB9O1xyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+XHJcbiAgICB0aGVtZS5hcHBlYXJhbmNlLmRpc3BsYXkgPT09IFwiY29tcGFjdFwiICYmXHJcbiAgICBjc3NgXHJcbiAgICAgIHdpZHRoOiAke3JlbSg0OCl9O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6ICR7cmVtKDgpfTtcclxuXHJcbiAgICAgIGZvbnQtc2l6ZTogJHtyZW0oMTEpfTtcclxuICAgICAgbGluZS1oZWlnaHQ6ICR7cmVtKDIyKX07XHJcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICB0ZXh0LWluZGVudDogMDtcclxuICAgIGB9O1xyXG5gXHJcblxyXG5leHBvcnQgdHlwZSBDbG9ja1Byb3BzID0ge1xyXG4gIHRpbWVzdGFtcD86IERhdGVcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENsb2NrKHByb3BzOiBDbG9ja1Byb3BzKSB7XHJcbiAgbGV0IHsgdGltZXN0YW1wIH0gPSBwcm9wc1xyXG4gIGlmICh0aW1lc3RhbXAgJiYgIWlzVmFsaWQodGltZXN0YW1wKSkgdGltZXN0YW1wID0gdW5kZWZpbmVkXHJcblxyXG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKVxyXG5cclxuICBjb25zdCBmb3JtYXQgPSB1c2VDYWxsYmFjayhcclxuICAgICh0aW1lc3RhbXA6IERhdGUgPSBuZXcgRGF0ZSgpKSA9PiB7XHJcbiAgICAgIGlmICh0aGVtZS5hcHBlYXJhbmNlLmRpc3BsYXkgPT09IFwiY29tcGFjdFwiKSB7XHJcbiAgICAgICAgcmV0dXJuIHRpbWVzdGFtcC50b0xvY2FsZVN0cmluZyhcImVuLVVTXCIsIHtcclxuICAgICAgICAgIGhvdXI6IFwibnVtZXJpY1wiLFxyXG4gICAgICAgICAgbWludXRlOiBcIm51bWVyaWNcIixcclxuICAgICAgICAgIGhvdXIxMjogdHJ1ZSxcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gZm9ybWF0VGltZXN0YW1wKHRpbWVzdGFtcClcclxuICAgIH0sXHJcbiAgICBbdGhlbWUuYXBwZWFyYW5jZS5kaXNwbGF5XSxcclxuICApXHJcblxyXG4gIGNvbnN0IFtkaXNwbGF5ZWRUaW1lLCBzZXREaXNwbGF5ZWRUaW1lXSA9IHVzZVN0YXRlKCgpID0+IGZvcm1hdCh0aW1lc3RhbXApKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCF0aW1lc3RhbXApIHtcclxuICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiBzZXREaXNwbGF5ZWRUaW1lKGZvcm1hdCgpKSwgMTAwMClcclxuICAgICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpXHJcbiAgICB9XHJcblxyXG4gICAgc2V0RGlzcGxheWVkVGltZShmb3JtYXQodGltZXN0YW1wKSlcclxuICB9LCBbZm9ybWF0LCB0aW1lc3RhbXBdKVxyXG5cclxuICByZXR1cm4gPERpc3BsYXk+e2Rpc3BsYXllZFRpbWV9PC9EaXNwbGF5PlxyXG59XHJcbiIsImltcG9ydCB7IGdldERhdGUsIGdldE1vbnRoLCBnZXRZZWFyLCBpc1ZhbGlkIH0gZnJvbSBcImRhdGUtZm5zXCJcclxuXHJcbmNvbnN0IE9ORV9EQVkgPSAxMDAwICogNjAgKiA2MCAqIDI0XHJcblxyXG5jb25zdCBnZXRUaW1lc3RhbXBGb3JtYXQgPSAoZGF0ZTogRGF0ZSwgYmFzZT86IERhdGUpID0+IHtcclxuICBjb25zdCBnaXZlbkRhdGUgPSBuZXcgRGF0ZShkYXRlKS5zZXRIb3VycygwLCAwLCAwLCAwKVxyXG4gIGNvbnN0IG5vdyA9IG5ldyBEYXRlKGJhc2UgPz8gRGF0ZS5ub3coKSkuc2V0SG91cnMoMCwgMCwgMCwgMClcclxuXHJcbiAgY29uc3QgZGlmZmVyZW5jZSA9IChnaXZlbkRhdGUgLSBub3cpIC8gT05FX0RBWVxyXG5cclxuICBpZiAoZGlmZmVyZW5jZSA8IC0xKSByZXR1cm4gXCJmdWxsXCJcclxuICBpZiAoZGlmZmVyZW5jZSA8IDApIHJldHVybiBcInllc3RlcmRheVwiXHJcbiAgaWYgKGRpZmZlcmVuY2UgPCAxKSByZXR1cm4gXCJ0b2RheVwiXHJcbiAgaWYgKGRpZmZlcmVuY2UgPCAyKSByZXR1cm4gXCJ0b21vcnJvd1wiXHJcbiAgcmV0dXJuIFwiZnVsbFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBmb3JtYXRUaW1lc3RhbXAgPSAoZGF0ZTogRGF0ZSwgYmFzZT86IERhdGUpID0+IHtcclxuICBpZiAoIWlzVmFsaWQoZGF0ZSkpIHJldHVybiBcIkludmFsaWQgZGF0ZVwiXHJcblxyXG4gIGNvbnN0IGRheSA9IFN0cmluZyhnZXREYXRlKGRhdGUpKS5wYWRTdGFydCgyLCBcIjBcIilcclxuICBjb25zdCBtb250aCA9IFN0cmluZyhnZXRNb250aChkYXRlKSArIDEpLnBhZFN0YXJ0KDIsIFwiMFwiKVxyXG4gIGNvbnN0IHllYXIgPSBnZXRZZWFyKGRhdGUpXHJcblxyXG4gIGNvbnN0IHRpbWUgPSBkYXRlLnRvTG9jYWxlU3RyaW5nKFwiZW4tVVNcIiwge1xyXG4gICAgaG91cjogXCIyLWRpZ2l0XCIsXHJcbiAgICBtaW51dGU6IFwibnVtZXJpY1wiLFxyXG4gICAgaG91cjEyOiB0cnVlLFxyXG4gIH0pXHJcblxyXG4gIHN3aXRjaCAoZ2V0VGltZXN0YW1wRm9ybWF0KGRhdGUsIGJhc2UpKSB7XHJcbiAgICBjYXNlIFwieWVzdGVyZGF5XCI6IHtcclxuICAgICAgcmV0dXJuIGBZZXN0ZXJkYXkgYXQgJHt0aW1lfWBcclxuICAgIH1cclxuICAgIGNhc2UgXCJ0b2RheVwiOiB7XHJcbiAgICAgIHJldHVybiBgVG9kYXkgYXQgJHt0aW1lfWBcclxuICAgIH1cclxuICAgIGNhc2UgXCJ0b21vcnJvd1wiOiB7XHJcbiAgICAgIHJldHVybiBgVG9tb3Jyb3cgYXQgJHt0aW1lfWBcclxuICAgIH1cclxuICAgIGRlZmF1bHQ6IHtcclxuICAgICAgcmV0dXJuIGAke2RheX0vJHttb250aH0vJHt5ZWFyfWBcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==