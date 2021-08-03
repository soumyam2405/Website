exports.ids = [194];
exports.modules = {

/***/ "./modules/message/preview/Clock.tsx":
/*!*******************************************!*\
  !*** ./modules/message/preview/Clock.tsx ***!
  \*******************************************/
/*! exports provided: Clock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Clock", function() { return Clock; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "date-fns");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _formatTimestamp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./formatTimestamp */ "./modules/message/preview/formatTimestamp.ts");

var _jsxFileName = "F:\\DiscordHookSite\\modules\\message\\preview\\Clock.tsx";





const Display = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.span.withConfig({
  displayName: "Clock__Display",
  componentId: "sc-1idsap7-0"
})(["display:inline-block;height:", ";cursor:default;color:", ";", ";", ";"], Object(polished__WEBPACK_IMPORTED_MODULE_2__["rem"])(20), ({
  theme
}) => theme.text.muted, ({
  theme
}) => theme.appearance.display === "cozy" && Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["css"])(["margin-left:", ";font-size:", ";font-weight:500;line-height:", ";vertical-align:baseline;"], Object(polished__WEBPACK_IMPORTED_MODULE_2__["rem"])(4), Object(polished__WEBPACK_IMPORTED_MODULE_2__["rem"])(12), Object(polished__WEBPACK_IMPORTED_MODULE_2__["rem"])(22)), ({
  theme
}) => theme.appearance.display === "compact" && Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["css"])(["width:", ";margin-right:", ";font-size:", ";line-height:", ";text-align:right;text-indent:0;"], Object(polished__WEBPACK_IMPORTED_MODULE_2__["rem"])(48), Object(polished__WEBPACK_IMPORTED_MODULE_2__["rem"])(8), Object(polished__WEBPACK_IMPORTED_MODULE_2__["rem"])(11), Object(polished__WEBPACK_IMPORTED_MODULE_2__["rem"])(22)));
function Clock(props) {
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

/***/ }),

/***/ "./modules/message/preview/formatTimestamp.ts":
/*!****************************************************!*\
  !*** ./modules/message/preview/formatTimestamp.ts ***!
  \****************************************************/
/*! exports provided: formatTimestamp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatTimestamp", function() { return formatTimestamp; });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "date-fns");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_0__);

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

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21lc3NhZ2UvcHJldmlldy9DbG9jay50c3giLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9tZXNzYWdlL3ByZXZpZXcvZm9ybWF0VGltZXN0YW1wLnRzIl0sIm5hbWVzIjpbIkRpc3BsYXkiLCJzdHlsZWQiLCJzcGFuIiwicmVtIiwidGhlbWUiLCJ0ZXh0IiwibXV0ZWQiLCJhcHBlYXJhbmNlIiwiZGlzcGxheSIsImNzcyIsIkNsb2NrIiwicHJvcHMiLCJ0aW1lc3RhbXAiLCJpc1ZhbGlkIiwidW5kZWZpbmVkIiwidXNlVGhlbWUiLCJmb3JtYXQiLCJ1c2VDYWxsYmFjayIsIkRhdGUiLCJ0b0xvY2FsZVN0cmluZyIsImhvdXIiLCJtaW51dGUiLCJob3VyMTIiLCJmb3JtYXRUaW1lc3RhbXAiLCJkaXNwbGF5ZWRUaW1lIiwic2V0RGlzcGxheWVkVGltZSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJPTkVfREFZIiwiZ2V0VGltZXN0YW1wRm9ybWF0IiwiZGF0ZSIsImJhc2UiLCJnaXZlbkRhdGUiLCJzZXRIb3VycyIsIm5vdyIsImRpZmZlcmVuY2UiLCJkYXkiLCJTdHJpbmciLCJnZXREYXRlIiwicGFkU3RhcnQiLCJtb250aCIsImdldE1vbnRoIiwieWVhciIsImdldFllYXIiLCJ0aW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxPQUFPLEdBQUdDLHdEQUFNLENBQUNDLElBQVY7QUFBQTtBQUFBO0FBQUEsOEVBRURDLG9EQUFHLENBQUMsRUFBRCxDQUZGLEVBS0YsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDQyxJQUFOLENBQVdDLEtBTHhCLEVBT1QsQ0FBQztBQUFFRjtBQUFGLENBQUQsS0FDQUEsS0FBSyxDQUFDRyxVQUFOLENBQWlC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QUNEOztBQUNEO0FBQVM7QUFDUCxlQUFRLEdBQUVSLEdBQUksSUFBR0ksS0FBTSxJQUFHRSxJQUFLLEVBQS9CO0FBQ0Q7QUFaSDtBQWNELENBM0JNLEMiLCJmaWxlIjoiMTk0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNWYWxpZCB9IGZyb20gXCJkYXRlLWZuc1wiXHJcbmltcG9ydCB7IHJlbSB9IGZyb20gXCJwb2xpc2hlZFwiXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBzdHlsZWQsIHsgY3NzLCB1c2VUaGVtZSB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXHJcbmltcG9ydCB7IGZvcm1hdFRpbWVzdGFtcCB9IGZyb20gXCIuL2Zvcm1hdFRpbWVzdGFtcFwiXHJcblxyXG5jb25zdCBEaXNwbGF5ID0gc3R5bGVkLnNwYW5gXHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGhlaWdodDogJHtyZW0oMjApfTtcclxuICBjdXJzb3I6IGRlZmF1bHQ7XHJcblxyXG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnRleHQubXV0ZWR9O1xyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+XHJcbiAgICB0aGVtZS5hcHBlYXJhbmNlLmRpc3BsYXkgPT09IFwiY296eVwiICYmXHJcbiAgICBjc3NgXHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAke3JlbSg0KX07XHJcblxyXG4gICAgICBmb250LXNpemU6ICR7cmVtKDEyKX07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAke3JlbSgyMil9O1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XHJcbiAgICBgfTtcclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PlxyXG4gICAgdGhlbWUuYXBwZWFyYW5jZS5kaXNwbGF5ID09PSBcImNvbXBhY3RcIiAmJlxyXG4gICAgY3NzYFxyXG4gICAgICB3aWR0aDogJHtyZW0oNDgpfTtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAke3JlbSg4KX07XHJcblxyXG4gICAgICBmb250LXNpemU6ICR7cmVtKDExKX07XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAke3JlbSgyMil9O1xyXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgdGV4dC1pbmRlbnQ6IDA7XHJcbiAgICBgfTtcclxuYFxyXG5cclxuZXhwb3J0IHR5cGUgQ2xvY2tQcm9wcyA9IHtcclxuICB0aW1lc3RhbXA/OiBEYXRlXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDbG9jayhwcm9wczogQ2xvY2tQcm9wcykge1xyXG4gIGxldCB7IHRpbWVzdGFtcCB9ID0gcHJvcHNcclxuICBpZiAodGltZXN0YW1wICYmICFpc1ZhbGlkKHRpbWVzdGFtcCkpIHRpbWVzdGFtcCA9IHVuZGVmaW5lZFxyXG5cclxuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKClcclxuXHJcbiAgY29uc3QgZm9ybWF0ID0gdXNlQ2FsbGJhY2soXHJcbiAgICAodGltZXN0YW1wOiBEYXRlID0gbmV3IERhdGUoKSkgPT4ge1xyXG4gICAgICBpZiAodGhlbWUuYXBwZWFyYW5jZS5kaXNwbGF5ID09PSBcImNvbXBhY3RcIikge1xyXG4gICAgICAgIHJldHVybiB0aW1lc3RhbXAudG9Mb2NhbGVTdHJpbmcoXCJlbi1VU1wiLCB7XHJcbiAgICAgICAgICBob3VyOiBcIm51bWVyaWNcIixcclxuICAgICAgICAgIG1pbnV0ZTogXCJudW1lcmljXCIsXHJcbiAgICAgICAgICBob3VyMTI6IHRydWUsXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGZvcm1hdFRpbWVzdGFtcCh0aW1lc3RhbXApXHJcbiAgICB9LFxyXG4gICAgW3RoZW1lLmFwcGVhcmFuY2UuZGlzcGxheV0sXHJcbiAgKVxyXG5cclxuICBjb25zdCBbZGlzcGxheWVkVGltZSwgc2V0RGlzcGxheWVkVGltZV0gPSB1c2VTdGF0ZSgoKSA9PiBmb3JtYXQodGltZXN0YW1wKSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghdGltZXN0YW1wKSB7XHJcbiAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4gc2V0RGlzcGxheWVkVGltZShmb3JtYXQoKSksIDEwMDApXHJcbiAgICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKVxyXG4gICAgfVxyXG5cclxuICAgIHNldERpc3BsYXllZFRpbWUoZm9ybWF0KHRpbWVzdGFtcCkpXHJcbiAgfSwgW2Zvcm1hdCwgdGltZXN0YW1wXSlcclxuXHJcbiAgcmV0dXJuIDxEaXNwbGF5PntkaXNwbGF5ZWRUaW1lfTwvRGlzcGxheT5cclxufVxyXG4iLCJpbXBvcnQgeyBnZXREYXRlLCBnZXRNb250aCwgZ2V0WWVhciwgaXNWYWxpZCB9IGZyb20gXCJkYXRlLWZuc1wiXHJcblxyXG5jb25zdCBPTkVfREFZID0gMTAwMCAqIDYwICogNjAgKiAyNFxyXG5cclxuY29uc3QgZ2V0VGltZXN0YW1wRm9ybWF0ID0gKGRhdGU6IERhdGUsIGJhc2U/OiBEYXRlKSA9PiB7XHJcbiAgY29uc3QgZ2l2ZW5EYXRlID0gbmV3IERhdGUoZGF0ZSkuc2V0SG91cnMoMCwgMCwgMCwgMClcclxuICBjb25zdCBub3cgPSBuZXcgRGF0ZShiYXNlID8/IERhdGUubm93KCkpLnNldEhvdXJzKDAsIDAsIDAsIDApXHJcblxyXG4gIGNvbnN0IGRpZmZlcmVuY2UgPSAoZ2l2ZW5EYXRlIC0gbm93KSAvIE9ORV9EQVlcclxuXHJcbiAgaWYgKGRpZmZlcmVuY2UgPCAtMSkgcmV0dXJuIFwiZnVsbFwiXHJcbiAgaWYgKGRpZmZlcmVuY2UgPCAwKSByZXR1cm4gXCJ5ZXN0ZXJkYXlcIlxyXG4gIGlmIChkaWZmZXJlbmNlIDwgMSkgcmV0dXJuIFwidG9kYXlcIlxyXG4gIGlmIChkaWZmZXJlbmNlIDwgMikgcmV0dXJuIFwidG9tb3Jyb3dcIlxyXG4gIHJldHVybiBcImZ1bGxcIlxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZm9ybWF0VGltZXN0YW1wID0gKGRhdGU6IERhdGUsIGJhc2U/OiBEYXRlKSA9PiB7XHJcbiAgaWYgKCFpc1ZhbGlkKGRhdGUpKSByZXR1cm4gXCJJbnZhbGlkIGRhdGVcIlxyXG5cclxuICBjb25zdCBkYXkgPSBTdHJpbmcoZ2V0RGF0ZShkYXRlKSkucGFkU3RhcnQoMiwgXCIwXCIpXHJcbiAgY29uc3QgbW9udGggPSBTdHJpbmcoZ2V0TW9udGgoZGF0ZSkgKyAxKS5wYWRTdGFydCgyLCBcIjBcIilcclxuICBjb25zdCB5ZWFyID0gZ2V0WWVhcihkYXRlKVxyXG5cclxuICBjb25zdCB0aW1lID0gZGF0ZS50b0xvY2FsZVN0cmluZyhcImVuLVVTXCIsIHtcclxuICAgIGhvdXI6IFwiMi1kaWdpdFwiLFxyXG4gICAgbWludXRlOiBcIm51bWVyaWNcIixcclxuICAgIGhvdXIxMjogdHJ1ZSxcclxuICB9KVxyXG5cclxuICBzd2l0Y2ggKGdldFRpbWVzdGFtcEZvcm1hdChkYXRlLCBiYXNlKSkge1xyXG4gICAgY2FzZSBcInllc3RlcmRheVwiOiB7XHJcbiAgICAgIHJldHVybiBgWWVzdGVyZGF5IGF0ICR7dGltZX1gXHJcbiAgICB9XHJcbiAgICBjYXNlIFwidG9kYXlcIjoge1xyXG4gICAgICByZXR1cm4gYFRvZGF5IGF0ICR7dGltZX1gXHJcbiAgICB9XHJcbiAgICBjYXNlIFwidG9tb3Jyb3dcIjoge1xyXG4gICAgICByZXR1cm4gYFRvbW9ycm93IGF0ICR7dGltZX1gXHJcbiAgICB9XHJcbiAgICBkZWZhdWx0OiB7XHJcbiAgICAgIHJldHVybiBgJHtkYXl9LyR7bW9udGh9LyR7eWVhcn1gXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=