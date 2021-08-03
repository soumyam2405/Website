(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[2],{

/***/ "./node_modules/highlight.js/lib/languages/abnf.js":
/*!*********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/abnf.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @param {string} value
 * @returns {RegExp}
 * */

/**
 * @param {RegExp | string } re
 * @returns {string}
 */
function source(re) {
  if (!re) return null;
  if (typeof re === "string") return re;

  return re.source;
}

/**
 * @param {...(RegExp | string) } args
 * @returns {string}
 */
function concat(...args) {
  const joined = args.map((x) => source(x)).join("");
  return joined;
}

/*
Language: Augmented Backus-Naur Form
Author: Alex McKibben <alex@nullscope.net>
Website: https://tools.ietf.org/html/rfc5234
Audit: 2020
*/

/** @type LanguageFn */
function abnf(hljs) {
  const regexes = {
    ruleDeclaration: /^[a-zA-Z][a-zA-Z0-9-]*/,
    unexpectedChars: /[!@#$^&',?+~`|:]/
  };

  const keywords = [
    "ALPHA",
    "BIT",
    "CHAR",
    "CR",
    "CRLF",
    "CTL",
    "DIGIT",
    "DQUOTE",
    "HEXDIG",
    "HTAB",
    "LF",
    "LWSP",
    "OCTET",
    "SP",
    "VCHAR",
    "WSP"
  ];

  const commentMode = hljs.COMMENT(/;/, /$/);

  const terminalBinaryMode = {
    className: "symbol",
    begin: /%b[0-1]+(-[0-1]+|(\.[0-1]+)+){0,1}/
  };

  const terminalDecimalMode = {
    className: "symbol",
    begin: /%d[0-9]+(-[0-9]+|(\.[0-9]+)+){0,1}/
  };

  const terminalHexadecimalMode = {
    className: "symbol",
    begin: /%x[0-9A-F]+(-[0-9A-F]+|(\.[0-9A-F]+)+){0,1}/
  };

  const caseSensitivityIndicatorMode = {
    className: "symbol",
    begin: /%[si]/
  };

  const ruleDeclarationMode = {
    className: "attribute",
    begin: concat(regexes.ruleDeclaration, /(?=\s*=)/)
  };

  return {
    name: 'Augmented Backus-Naur Form',
    illegal: regexes.unexpectedChars,
    keywords: keywords,
    contains: [
      ruleDeclarationMode,
      commentMode,
      terminalBinaryMode,
      terminalDecimalMode,
      terminalHexadecimalMode,
      caseSensitivityIndicatorMode,
      hljs.QUOTE_STRING_MODE,
      hljs.NUMBER_MODE
    ]
  };
}

module.exports = abnf;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2FibmYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYTtBQUNiOztBQUVBO0FBQ0EsV0FBVyxpQkFBaUI7QUFDNUIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLHNCQUFzQjtBQUNqQyxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQSwwQ0FBMEMsSUFBSTtBQUM5Qzs7QUFFQTtBQUNBO0FBQ0EsMENBQTBDLElBQUk7QUFDOUM7O0FBRUE7QUFDQTtBQUNBLG1EQUFtRCxJQUFJO0FBQ3ZEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvMi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJucyB7UmVnRXhwfVxuICogKi9cblxuLyoqXG4gKiBAcGFyYW0ge1JlZ0V4cCB8IHN0cmluZyB9IHJlXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBzb3VyY2UocmUpIHtcbiAgaWYgKCFyZSkgcmV0dXJuIG51bGw7XG4gIGlmICh0eXBlb2YgcmUgPT09IFwic3RyaW5nXCIpIHJldHVybiByZTtcblxuICByZXR1cm4gcmUuc291cmNlO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7Li4uKFJlZ0V4cCB8IHN0cmluZykgfSBhcmdzXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBjb25jYXQoLi4uYXJncykge1xuICBjb25zdCBqb2luZWQgPSBhcmdzLm1hcCgoeCkgPT4gc291cmNlKHgpKS5qb2luKFwiXCIpO1xuICByZXR1cm4gam9pbmVkO1xufVxuXG4vKlxuTGFuZ3VhZ2U6IEF1Z21lbnRlZCBCYWNrdXMtTmF1ciBGb3JtXG5BdXRob3I6IEFsZXggTWNLaWJiZW4gPGFsZXhAbnVsbHNjb3BlLm5ldD5cbldlYnNpdGU6IGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM1MjM0XG5BdWRpdDogMjAyMFxuKi9cblxuLyoqIEB0eXBlIExhbmd1YWdlRm4gKi9cbmZ1bmN0aW9uIGFibmYoaGxqcykge1xuICBjb25zdCByZWdleGVzID0ge1xuICAgIHJ1bGVEZWNsYXJhdGlvbjogL15bYS16QS1aXVthLXpBLVowLTktXSovLFxuICAgIHVuZXhwZWN0ZWRDaGFyczogL1shQCMkXiYnLD8rfmB8Ol0vXG4gIH07XG5cbiAgY29uc3Qga2V5d29yZHMgPSBbXG4gICAgXCJBTFBIQVwiLFxuICAgIFwiQklUXCIsXG4gICAgXCJDSEFSXCIsXG4gICAgXCJDUlwiLFxuICAgIFwiQ1JMRlwiLFxuICAgIFwiQ1RMXCIsXG4gICAgXCJESUdJVFwiLFxuICAgIFwiRFFVT1RFXCIsXG4gICAgXCJIRVhESUdcIixcbiAgICBcIkhUQUJcIixcbiAgICBcIkxGXCIsXG4gICAgXCJMV1NQXCIsXG4gICAgXCJPQ1RFVFwiLFxuICAgIFwiU1BcIixcbiAgICBcIlZDSEFSXCIsXG4gICAgXCJXU1BcIlxuICBdO1xuXG4gIGNvbnN0IGNvbW1lbnRNb2RlID0gaGxqcy5DT01NRU5UKC87LywgLyQvKTtcblxuICBjb25zdCB0ZXJtaW5hbEJpbmFyeU1vZGUgPSB7XG4gICAgY2xhc3NOYW1lOiBcInN5bWJvbFwiLFxuICAgIGJlZ2luOiAvJWJbMC0xXSsoLVswLTFdK3woXFwuWzAtMV0rKSspezAsMX0vXG4gIH07XG5cbiAgY29uc3QgdGVybWluYWxEZWNpbWFsTW9kZSA9IHtcbiAgICBjbGFzc05hbWU6IFwic3ltYm9sXCIsXG4gICAgYmVnaW46IC8lZFswLTldKygtWzAtOV0rfChcXC5bMC05XSspKyl7MCwxfS9cbiAgfTtcblxuICBjb25zdCB0ZXJtaW5hbEhleGFkZWNpbWFsTW9kZSA9IHtcbiAgICBjbGFzc05hbWU6IFwic3ltYm9sXCIsXG4gICAgYmVnaW46IC8leFswLTlBLUZdKygtWzAtOUEtRl0rfChcXC5bMC05QS1GXSspKyl7MCwxfS9cbiAgfTtcblxuICBjb25zdCBjYXNlU2Vuc2l0aXZpdHlJbmRpY2F0b3JNb2RlID0ge1xuICAgIGNsYXNzTmFtZTogXCJzeW1ib2xcIixcbiAgICBiZWdpbjogLyVbc2ldL1xuICB9O1xuXG4gIGNvbnN0IHJ1bGVEZWNsYXJhdGlvbk1vZGUgPSB7XG4gICAgY2xhc3NOYW1lOiBcImF0dHJpYnV0ZVwiLFxuICAgIGJlZ2luOiBjb25jYXQocmVnZXhlcy5ydWxlRGVjbGFyYXRpb24sIC8oPz1cXHMqPSkvKVxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgbmFtZTogJ0F1Z21lbnRlZCBCYWNrdXMtTmF1ciBGb3JtJyxcbiAgICBpbGxlZ2FsOiByZWdleGVzLnVuZXhwZWN0ZWRDaGFycyxcbiAgICBrZXl3b3Jkczoga2V5d29yZHMsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIHJ1bGVEZWNsYXJhdGlvbk1vZGUsXG4gICAgICBjb21tZW50TW9kZSxcbiAgICAgIHRlcm1pbmFsQmluYXJ5TW9kZSxcbiAgICAgIHRlcm1pbmFsRGVjaW1hbE1vZGUsXG4gICAgICB0ZXJtaW5hbEhleGFkZWNpbWFsTW9kZSxcbiAgICAgIGNhc2VTZW5zaXRpdml0eUluZGljYXRvck1vZGUsXG4gICAgICBobGpzLlFVT1RFX1NUUklOR19NT0RFLFxuICAgICAgaGxqcy5OVU1CRVJfTU9ERVxuICAgIF1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhYm5mO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==