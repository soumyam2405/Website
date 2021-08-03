exports.ids = [195];
exports.modules = {

/***/ "./modules/message/preview/EmbedTimestamp.tsx":
/*!****************************************************!*\
  !*** ./modules/message/preview/EmbedTimestamp.tsx ***!
  \****************************************************/
/*! exports provided: EmbedTimestamp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmbedTimestamp", function() { return EmbedTimestamp; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21lc3NhZ2UvcHJldmlldy9FbWJlZFRpbWVzdGFtcC50c3giLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9tZXNzYWdlL3ByZXZpZXcvZm9ybWF0VGltZXN0YW1wLnRzIl0sIm5hbWVzIjpbIkVtYmVkVGltZXN0YW1wIiwicHJvcHMiLCJ0aW1lc3RhbXAiLCJmb3JtYXRUaW1lc3RhbXAiLCJPTkVfREFZIiwiZ2V0VGltZXN0YW1wRm9ybWF0IiwiZGF0ZSIsImJhc2UiLCJnaXZlbkRhdGUiLCJEYXRlIiwic2V0SG91cnMiLCJub3ciLCJkaWZmZXJlbmNlIiwiaXNWYWxpZCIsImRheSIsIlN0cmluZyIsImdldERhdGUiLCJwYWRTdGFydCIsIm1vbnRoIiwiZ2V0TW9udGgiLCJ5ZWFyIiwiZ2V0WWVhciIsInRpbWUiLCJ0b0xvY2FsZVN0cmluZyIsImhvdXIiLCJtaW51dGUiLCJob3VyMTIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQU1PLFNBQVNBLGNBQVQsQ0FBd0JDLEtBQXhCLEVBQW9EO0FBQ3pELFFBQU07QUFBRUM7QUFBRixNQUFnQkQsS0FBdEI7QUFFQSxzQkFBTztBQUFBLGNBQU9FLHdFQUFlLENBQUNELFNBQUQ7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7O0FDWEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBLE1BQU1FLE9BQU8sR0FBRyxPQUFPLEVBQVAsR0FBWSxFQUFaLEdBQWlCLEVBQWpDOztBQUVBLE1BQU1DLGtCQUFrQixHQUFHLENBQUNDLElBQUQsRUFBYUMsSUFBYixLQUE2QjtBQUN0RCxRQUFNQyxTQUFTLEdBQUcsSUFBSUMsSUFBSixDQUFTSCxJQUFULEVBQWVJLFFBQWYsQ0FBd0IsQ0FBeEIsRUFBMkIsQ0FBM0IsRUFBOEIsQ0FBOUIsRUFBaUMsQ0FBakMsQ0FBbEI7QUFDQSxRQUFNQyxHQUFHLEdBQUcsSUFBSUYsSUFBSixDQUFTRixJQUFULGFBQVNBLElBQVQsY0FBU0EsSUFBVCxHQUFpQkUsSUFBSSxDQUFDRSxHQUFMLEVBQWpCLEVBQTZCRCxRQUE3QixDQUFzQyxDQUF0QyxFQUF5QyxDQUF6QyxFQUE0QyxDQUE1QyxFQUErQyxDQUEvQyxDQUFaO0FBRUEsUUFBTUUsVUFBVSxHQUFHLENBQUNKLFNBQVMsR0FBR0csR0FBYixJQUFvQlAsT0FBdkM7QUFFQSxNQUFJUSxVQUFVLEdBQUcsQ0FBQyxDQUFsQixFQUFxQixPQUFPLE1BQVA7QUFDckIsTUFBSUEsVUFBVSxHQUFHLENBQWpCLEVBQW9CLE9BQU8sV0FBUDtBQUNwQixNQUFJQSxVQUFVLEdBQUcsQ0FBakIsRUFBb0IsT0FBTyxPQUFQO0FBQ3BCLE1BQUlBLFVBQVUsR0FBRyxDQUFqQixFQUFvQixPQUFPLFVBQVA7QUFDcEIsU0FBTyxNQUFQO0FBQ0QsQ0FYRDs7QUFhTyxNQUFNVCxlQUFlLEdBQUcsQ0FBQ0csSUFBRCxFQUFhQyxJQUFiLEtBQTZCO0FBQzFELE1BQUksQ0FBQ00sd0RBQU8sQ0FBQ1AsSUFBRCxDQUFaLEVBQW9CLE9BQU8sY0FBUDtBQUVwQixRQUFNUSxHQUFHLEdBQUdDLE1BQU0sQ0FBQ0Msd0RBQU8sQ0FBQ1YsSUFBRCxDQUFSLENBQU4sQ0FBc0JXLFFBQXRCLENBQStCLENBQS9CLEVBQWtDLEdBQWxDLENBQVo7QUFDQSxRQUFNQyxLQUFLLEdBQUdILE1BQU0sQ0FBQ0kseURBQVEsQ0FBQ2IsSUFBRCxDQUFSLEdBQWlCLENBQWxCLENBQU4sQ0FBMkJXLFFBQTNCLENBQW9DLENBQXBDLEVBQXVDLEdBQXZDLENBQWQ7QUFDQSxRQUFNRyxJQUFJLEdBQUdDLHdEQUFPLENBQUNmLElBQUQsQ0FBcEI7QUFFQSxRQUFNZ0IsSUFBSSxHQUFHaEIsSUFBSSxDQUFDaUIsY0FBTCxDQUFvQixPQUFwQixFQUE2QjtBQUN4Q0MsUUFBSSxFQUFFLFNBRGtDO0FBRXhDQyxVQUFNLEVBQUUsU0FGZ0M7QUFHeENDLFVBQU0sRUFBRTtBQUhnQyxHQUE3QixDQUFiOztBQU1BLFVBQVFyQixrQkFBa0IsQ0FBQ0MsSUFBRCxFQUFPQyxJQUFQLENBQTFCO0FBQ0UsU0FBSyxXQUFMO0FBQWtCO0FBQ2hCLGVBQVEsZ0JBQWVlLElBQUssRUFBNUI7QUFDRDs7QUFDRCxTQUFLLE9BQUw7QUFBYztBQUNaLGVBQVEsWUFBV0EsSUFBSyxFQUF4QjtBQUNEOztBQUNELFNBQUssVUFBTDtBQUFpQjtBQUNmLGVBQVEsZUFBY0EsSUFBSyxFQUEzQjtBQUNEOztBQUNEO0FBQVM7QUFDUCxlQUFRLEdBQUVSLEdBQUksSUFBR0ksS0FBTSxJQUFHRSxJQUFLLEVBQS9CO0FBQ0Q7QUFaSDtBQWNELENBM0JNLEMiLCJmaWxlIjoiMTk1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IGZvcm1hdFRpbWVzdGFtcCB9IGZyb20gXCIuL2Zvcm1hdFRpbWVzdGFtcFwiXHJcblxyXG5leHBvcnQgdHlwZSBFbWJlZFRpbWVzdGFtcFByb3BzID0ge1xyXG4gIHRpbWVzdGFtcDogRGF0ZVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRW1iZWRUaW1lc3RhbXAocHJvcHM6IEVtYmVkVGltZXN0YW1wUHJvcHMpIHtcclxuICBjb25zdCB7IHRpbWVzdGFtcCB9ID0gcHJvcHNcclxuXHJcbiAgcmV0dXJuIDxzcGFuPntmb3JtYXRUaW1lc3RhbXAodGltZXN0YW1wKX08L3NwYW4+XHJcbn1cclxuIiwiaW1wb3J0IHsgZ2V0RGF0ZSwgZ2V0TW9udGgsIGdldFllYXIsIGlzVmFsaWQgfSBmcm9tIFwiZGF0ZS1mbnNcIlxyXG5cclxuY29uc3QgT05FX0RBWSA9IDEwMDAgKiA2MCAqIDYwICogMjRcclxuXHJcbmNvbnN0IGdldFRpbWVzdGFtcEZvcm1hdCA9IChkYXRlOiBEYXRlLCBiYXNlPzogRGF0ZSkgPT4ge1xyXG4gIGNvbnN0IGdpdmVuRGF0ZSA9IG5ldyBEYXRlKGRhdGUpLnNldEhvdXJzKDAsIDAsIDAsIDApXHJcbiAgY29uc3Qgbm93ID0gbmV3IERhdGUoYmFzZSA/PyBEYXRlLm5vdygpKS5zZXRIb3VycygwLCAwLCAwLCAwKVxyXG5cclxuICBjb25zdCBkaWZmZXJlbmNlID0gKGdpdmVuRGF0ZSAtIG5vdykgLyBPTkVfREFZXHJcblxyXG4gIGlmIChkaWZmZXJlbmNlIDwgLTEpIHJldHVybiBcImZ1bGxcIlxyXG4gIGlmIChkaWZmZXJlbmNlIDwgMCkgcmV0dXJuIFwieWVzdGVyZGF5XCJcclxuICBpZiAoZGlmZmVyZW5jZSA8IDEpIHJldHVybiBcInRvZGF5XCJcclxuICBpZiAoZGlmZmVyZW5jZSA8IDIpIHJldHVybiBcInRvbW9ycm93XCJcclxuICByZXR1cm4gXCJmdWxsXCJcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGZvcm1hdFRpbWVzdGFtcCA9IChkYXRlOiBEYXRlLCBiYXNlPzogRGF0ZSkgPT4ge1xyXG4gIGlmICghaXNWYWxpZChkYXRlKSkgcmV0dXJuIFwiSW52YWxpZCBkYXRlXCJcclxuXHJcbiAgY29uc3QgZGF5ID0gU3RyaW5nKGdldERhdGUoZGF0ZSkpLnBhZFN0YXJ0KDIsIFwiMFwiKVxyXG4gIGNvbnN0IG1vbnRoID0gU3RyaW5nKGdldE1vbnRoKGRhdGUpICsgMSkucGFkU3RhcnQoMiwgXCIwXCIpXHJcbiAgY29uc3QgeWVhciA9IGdldFllYXIoZGF0ZSlcclxuXHJcbiAgY29uc3QgdGltZSA9IGRhdGUudG9Mb2NhbGVTdHJpbmcoXCJlbi1VU1wiLCB7XHJcbiAgICBob3VyOiBcIjItZGlnaXRcIixcclxuICAgIG1pbnV0ZTogXCJudW1lcmljXCIsXHJcbiAgICBob3VyMTI6IHRydWUsXHJcbiAgfSlcclxuXHJcbiAgc3dpdGNoIChnZXRUaW1lc3RhbXBGb3JtYXQoZGF0ZSwgYmFzZSkpIHtcclxuICAgIGNhc2UgXCJ5ZXN0ZXJkYXlcIjoge1xyXG4gICAgICByZXR1cm4gYFllc3RlcmRheSBhdCAke3RpbWV9YFxyXG4gICAgfVxyXG4gICAgY2FzZSBcInRvZGF5XCI6IHtcclxuICAgICAgcmV0dXJuIGBUb2RheSBhdCAke3RpbWV9YFxyXG4gICAgfVxyXG4gICAgY2FzZSBcInRvbW9ycm93XCI6IHtcclxuICAgICAgcmV0dXJuIGBUb21vcnJvdyBhdCAke3RpbWV9YFxyXG4gICAgfVxyXG4gICAgZGVmYXVsdDoge1xyXG4gICAgICByZXR1cm4gYCR7ZGF5fS8ke21vbnRofS8ke3llYXJ9YFxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9