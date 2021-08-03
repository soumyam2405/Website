exports.ids = [1];
exports.modules = {

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

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvYWJuZi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYTtBQUNiOztBQUVBO0FBQ0EsV0FBVyxpQkFBaUI7QUFDNUIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLHNCQUFzQjtBQUNqQyxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQSwwQ0FBMEMsSUFBSTtBQUM5Qzs7QUFFQTtBQUNBO0FBQ0EsMENBQTBDLElBQUk7QUFDOUM7O0FBRUE7QUFDQTtBQUNBLG1EQUFtRCxJQUFJO0FBQ3ZEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHJldHVybnMge1JlZ0V4cH1cbiAqICovXG5cbi8qKlxuICogQHBhcmFtIHtSZWdFeHAgfCBzdHJpbmcgfSByZVxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gc291cmNlKHJlKSB7XG4gIGlmICghcmUpIHJldHVybiBudWxsO1xuICBpZiAodHlwZW9mIHJlID09PSBcInN0cmluZ1wiKSByZXR1cm4gcmU7XG5cbiAgcmV0dXJuIHJlLnNvdXJjZTtcbn1cblxuLyoqXG4gKiBAcGFyYW0gey4uLihSZWdFeHAgfCBzdHJpbmcpIH0gYXJnc1xuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gY29uY2F0KC4uLmFyZ3MpIHtcbiAgY29uc3Qgam9pbmVkID0gYXJncy5tYXAoKHgpID0+IHNvdXJjZSh4KSkuam9pbihcIlwiKTtcbiAgcmV0dXJuIGpvaW5lZDtcbn1cblxuLypcbkxhbmd1YWdlOiBBdWdtZW50ZWQgQmFja3VzLU5hdXIgRm9ybVxuQXV0aG9yOiBBbGV4IE1jS2liYmVuIDxhbGV4QG51bGxzY29wZS5uZXQ+XG5XZWJzaXRlOiBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNTIzNFxuQXVkaXQ6IDIwMjBcbiovXG5cbi8qKiBAdHlwZSBMYW5ndWFnZUZuICovXG5mdW5jdGlvbiBhYm5mKGhsanMpIHtcbiAgY29uc3QgcmVnZXhlcyA9IHtcbiAgICBydWxlRGVjbGFyYXRpb246IC9eW2EtekEtWl1bYS16QS1aMC05LV0qLyxcbiAgICB1bmV4cGVjdGVkQ2hhcnM6IC9bIUAjJF4mJyw/K35gfDpdL1xuICB9O1xuXG4gIGNvbnN0IGtleXdvcmRzID0gW1xuICAgIFwiQUxQSEFcIixcbiAgICBcIkJJVFwiLFxuICAgIFwiQ0hBUlwiLFxuICAgIFwiQ1JcIixcbiAgICBcIkNSTEZcIixcbiAgICBcIkNUTFwiLFxuICAgIFwiRElHSVRcIixcbiAgICBcIkRRVU9URVwiLFxuICAgIFwiSEVYRElHXCIsXG4gICAgXCJIVEFCXCIsXG4gICAgXCJMRlwiLFxuICAgIFwiTFdTUFwiLFxuICAgIFwiT0NURVRcIixcbiAgICBcIlNQXCIsXG4gICAgXCJWQ0hBUlwiLFxuICAgIFwiV1NQXCJcbiAgXTtcblxuICBjb25zdCBjb21tZW50TW9kZSA9IGhsanMuQ09NTUVOVCgvOy8sIC8kLyk7XG5cbiAgY29uc3QgdGVybWluYWxCaW5hcnlNb2RlID0ge1xuICAgIGNsYXNzTmFtZTogXCJzeW1ib2xcIixcbiAgICBiZWdpbjogLyViWzAtMV0rKC1bMC0xXSt8KFxcLlswLTFdKykrKXswLDF9L1xuICB9O1xuXG4gIGNvbnN0IHRlcm1pbmFsRGVjaW1hbE1vZGUgPSB7XG4gICAgY2xhc3NOYW1lOiBcInN5bWJvbFwiLFxuICAgIGJlZ2luOiAvJWRbMC05XSsoLVswLTldK3woXFwuWzAtOV0rKSspezAsMX0vXG4gIH07XG5cbiAgY29uc3QgdGVybWluYWxIZXhhZGVjaW1hbE1vZGUgPSB7XG4gICAgY2xhc3NOYW1lOiBcInN5bWJvbFwiLFxuICAgIGJlZ2luOiAvJXhbMC05QS1GXSsoLVswLTlBLUZdK3woXFwuWzAtOUEtRl0rKSspezAsMX0vXG4gIH07XG5cbiAgY29uc3QgY2FzZVNlbnNpdGl2aXR5SW5kaWNhdG9yTW9kZSA9IHtcbiAgICBjbGFzc05hbWU6IFwic3ltYm9sXCIsXG4gICAgYmVnaW46IC8lW3NpXS9cbiAgfTtcblxuICBjb25zdCBydWxlRGVjbGFyYXRpb25Nb2RlID0ge1xuICAgIGNsYXNzTmFtZTogXCJhdHRyaWJ1dGVcIixcbiAgICBiZWdpbjogY29uY2F0KHJlZ2V4ZXMucnVsZURlY2xhcmF0aW9uLCAvKD89XFxzKj0pLylcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIG5hbWU6ICdBdWdtZW50ZWQgQmFja3VzLU5hdXIgRm9ybScsXG4gICAgaWxsZWdhbDogcmVnZXhlcy51bmV4cGVjdGVkQ2hhcnMsXG4gICAga2V5d29yZHM6IGtleXdvcmRzLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBydWxlRGVjbGFyYXRpb25Nb2RlLFxuICAgICAgY29tbWVudE1vZGUsXG4gICAgICB0ZXJtaW5hbEJpbmFyeU1vZGUsXG4gICAgICB0ZXJtaW5hbERlY2ltYWxNb2RlLFxuICAgICAgdGVybWluYWxIZXhhZGVjaW1hbE1vZGUsXG4gICAgICBjYXNlU2Vuc2l0aXZpdHlJbmRpY2F0b3JNb2RlLFxuICAgICAgaGxqcy5RVU9URV9TVFJJTkdfTU9ERSxcbiAgICAgIGhsanMuTlVNQkVSX01PREVcbiAgICBdXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYWJuZjtcbiJdLCJzb3VyY2VSb290IjoiIn0=