(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[52],{

/***/ "./node_modules/highlight.js/lib/languages/ebnf.js":
/*!*********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/ebnf.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Extended Backus-Naur Form
Author: Alex McKibben <alex@nullscope.net>
Website: https://en.wikipedia.org/wiki/Extended_Backus–Naur_form
*/

/** @type LanguageFn */
function ebnf(hljs) {
  const commentMode = hljs.COMMENT(/\(\*/, /\*\)/);

  const nonTerminalMode = {
    className: "attribute",
    begin: /^[ ]*[a-zA-Z]+([\s_-]+[a-zA-Z]+)*/
  };

  const specialSequenceMode = {
    className: "meta",
    begin: /\?.*\?/
  };

  const ruleBodyMode = {
    begin: /=/,
    end: /[.;]/,
    contains: [
      commentMode,
      specialSequenceMode,
      {
        // terminals
        className: 'string',
        variants: [
          hljs.APOS_STRING_MODE,
          hljs.QUOTE_STRING_MODE,
          {
            begin: '`',
            end: '`'
          }
        ]
      }
    ]
  };

  return {
    name: 'Extended Backus-Naur Form',
    illegal: /\S/,
    contains: [
      commentMode,
      nonTerminalMode,
      ruleBodyMode
    ]
  };
}

module.exports = ebnf;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2VibmYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvNTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuTGFuZ3VhZ2U6IEV4dGVuZGVkIEJhY2t1cy1OYXVyIEZvcm1cbkF1dGhvcjogQWxleCBNY0tpYmJlbiA8YWxleEBudWxsc2NvcGUubmV0PlxuV2Vic2l0ZTogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvRXh0ZW5kZWRfQmFja3Vz4oCTTmF1cl9mb3JtXG4qL1xuXG4vKiogQHR5cGUgTGFuZ3VhZ2VGbiAqL1xuZnVuY3Rpb24gZWJuZihobGpzKSB7XG4gIGNvbnN0IGNvbW1lbnRNb2RlID0gaGxqcy5DT01NRU5UKC9cXChcXCovLCAvXFwqXFwpLyk7XG5cbiAgY29uc3Qgbm9uVGVybWluYWxNb2RlID0ge1xuICAgIGNsYXNzTmFtZTogXCJhdHRyaWJ1dGVcIixcbiAgICBiZWdpbjogL15bIF0qW2EtekEtWl0rKFtcXHNfLV0rW2EtekEtWl0rKSovXG4gIH07XG5cbiAgY29uc3Qgc3BlY2lhbFNlcXVlbmNlTW9kZSA9IHtcbiAgICBjbGFzc05hbWU6IFwibWV0YVwiLFxuICAgIGJlZ2luOiAvXFw/LipcXD8vXG4gIH07XG5cbiAgY29uc3QgcnVsZUJvZHlNb2RlID0ge1xuICAgIGJlZ2luOiAvPS8sXG4gICAgZW5kOiAvWy47XS8sXG4gICAgY29udGFpbnM6IFtcbiAgICAgIGNvbW1lbnRNb2RlLFxuICAgICAgc3BlY2lhbFNlcXVlbmNlTW9kZSxcbiAgICAgIHtcbiAgICAgICAgLy8gdGVybWluYWxzXG4gICAgICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAgaGxqcy5BUE9TX1NUUklOR19NT0RFLFxuICAgICAgICAgIGhsanMuUVVPVEVfU1RSSU5HX01PREUsXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW46ICdgJyxcbiAgICAgICAgICAgIGVuZDogJ2AnXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgbmFtZTogJ0V4dGVuZGVkIEJhY2t1cy1OYXVyIEZvcm0nLFxuICAgIGlsbGVnYWw6IC9cXFMvLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBjb21tZW50TW9kZSxcbiAgICAgIG5vblRlcm1pbmFsTW9kZSxcbiAgICAgIHJ1bGVCb2R5TW9kZVxuICAgIF1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlYm5mO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==