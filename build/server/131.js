exports.ids = [131];
exports.modules = {

/***/ "./node_modules/highlight.js/lib/languages/pony.js":
/*!*********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/pony.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Pony
Author: Joe Eli McIlvain <joe.eli.mac@gmail.com>
Description: Pony is an open-source, object-oriented, actor-model,
             capabilities-secure, high performance programming language.
Website: https://www.ponylang.io
*/

function pony(hljs) {
  const KEYWORDS = {
    keyword:
      'actor addressof and as be break class compile_error compile_intrinsic ' +
      'consume continue delegate digestof do else elseif embed end error ' +
      'for fun if ifdef in interface is isnt lambda let match new not object ' +
      'or primitive recover repeat return struct then trait try type until ' +
      'use var where while with xor',
    meta:
      'iso val tag trn box ref',
    literal:
      'this false true'
  };

  const TRIPLE_QUOTE_STRING_MODE = {
    className: 'string',
    begin: '"""',
    end: '"""',
    relevance: 10
  };

  const QUOTE_STRING_MODE = {
    className: 'string',
    begin: '"',
    end: '"',
    contains: [ hljs.BACKSLASH_ESCAPE ]
  };

  const SINGLE_QUOTE_CHAR_MODE = {
    className: 'string',
    begin: '\'',
    end: '\'',
    contains: [ hljs.BACKSLASH_ESCAPE ],
    relevance: 0
  };

  const TYPE_NAME = {
    className: 'type',
    begin: '\\b_?[A-Z][\\w]*',
    relevance: 0
  };

  const PRIMED_NAME = {
    begin: hljs.IDENT_RE + '\'',
    relevance: 0
  };

  const NUMBER_MODE = {
    className: 'number',
    begin: '(-?)(\\b0[xX][a-fA-F0-9]+|\\b0[bB][01]+|(\\b\\d+(_\\d+)?(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)',
    relevance: 0
  };

  /**
   * The `FUNCTION` and `CLASS` modes were intentionally removed to simplify
   * highlighting and fix cases like
   * ```
   * interface Iterator[A: A]
   *   fun has_next(): Bool
   *   fun next(): A?
   * ```
   * where it is valid to have a function head without a body
   */

  return {
    name: 'Pony',
    keywords: KEYWORDS,
    contains: [
      TYPE_NAME,
      TRIPLE_QUOTE_STRING_MODE,
      QUOTE_STRING_MODE,
      SINGLE_QUOTE_CHAR_MODE,
      PRIMED_NAME,
      NUMBER_MODE,
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE
    ]
  };
}

module.exports = pony;


/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvcG9ueS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6IjEzMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5MYW5ndWFnZTogUG9ueVxuQXV0aG9yOiBKb2UgRWxpIE1jSWx2YWluIDxqb2UuZWxpLm1hY0BnbWFpbC5jb20+XG5EZXNjcmlwdGlvbjogUG9ueSBpcyBhbiBvcGVuLXNvdXJjZSwgb2JqZWN0LW9yaWVudGVkLCBhY3Rvci1tb2RlbCxcbiAgICAgICAgICAgICBjYXBhYmlsaXRpZXMtc2VjdXJlLCBoaWdoIHBlcmZvcm1hbmNlIHByb2dyYW1taW5nIGxhbmd1YWdlLlxuV2Vic2l0ZTogaHR0cHM6Ly93d3cucG9ueWxhbmcuaW9cbiovXG5cbmZ1bmN0aW9uIHBvbnkoaGxqcykge1xuICBjb25zdCBLRVlXT1JEUyA9IHtcbiAgICBrZXl3b3JkOlxuICAgICAgJ2FjdG9yIGFkZHJlc3NvZiBhbmQgYXMgYmUgYnJlYWsgY2xhc3MgY29tcGlsZV9lcnJvciBjb21waWxlX2ludHJpbnNpYyAnICtcbiAgICAgICdjb25zdW1lIGNvbnRpbnVlIGRlbGVnYXRlIGRpZ2VzdG9mIGRvIGVsc2UgZWxzZWlmIGVtYmVkIGVuZCBlcnJvciAnICtcbiAgICAgICdmb3IgZnVuIGlmIGlmZGVmIGluIGludGVyZmFjZSBpcyBpc250IGxhbWJkYSBsZXQgbWF0Y2ggbmV3IG5vdCBvYmplY3QgJyArXG4gICAgICAnb3IgcHJpbWl0aXZlIHJlY292ZXIgcmVwZWF0IHJldHVybiBzdHJ1Y3QgdGhlbiB0cmFpdCB0cnkgdHlwZSB1bnRpbCAnICtcbiAgICAgICd1c2UgdmFyIHdoZXJlIHdoaWxlIHdpdGggeG9yJyxcbiAgICBtZXRhOlxuICAgICAgJ2lzbyB2YWwgdGFnIHRybiBib3ggcmVmJyxcbiAgICBsaXRlcmFsOlxuICAgICAgJ3RoaXMgZmFsc2UgdHJ1ZSdcbiAgfTtcblxuICBjb25zdCBUUklQTEVfUVVPVEVfU1RSSU5HX01PREUgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICBiZWdpbjogJ1wiXCJcIicsXG4gICAgZW5kOiAnXCJcIlwiJyxcbiAgICByZWxldmFuY2U6IDEwXG4gIH07XG5cbiAgY29uc3QgUVVPVEVfU1RSSU5HX01PREUgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICBiZWdpbjogJ1wiJyxcbiAgICBlbmQ6ICdcIicsXG4gICAgY29udGFpbnM6IFsgaGxqcy5CQUNLU0xBU0hfRVNDQVBFIF1cbiAgfTtcblxuICBjb25zdCBTSU5HTEVfUVVPVEVfQ0hBUl9NT0RFID0ge1xuICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgYmVnaW46ICdcXCcnLFxuICAgIGVuZDogJ1xcJycsXG4gICAgY29udGFpbnM6IFsgaGxqcy5CQUNLU0xBU0hfRVNDQVBFIF0sXG4gICAgcmVsZXZhbmNlOiAwXG4gIH07XG5cbiAgY29uc3QgVFlQRV9OQU1FID0ge1xuICAgIGNsYXNzTmFtZTogJ3R5cGUnLFxuICAgIGJlZ2luOiAnXFxcXGJfP1tBLVpdW1xcXFx3XSonLFxuICAgIHJlbGV2YW5jZTogMFxuICB9O1xuXG4gIGNvbnN0IFBSSU1FRF9OQU1FID0ge1xuICAgIGJlZ2luOiBobGpzLklERU5UX1JFICsgJ1xcJycsXG4gICAgcmVsZXZhbmNlOiAwXG4gIH07XG5cbiAgY29uc3QgTlVNQkVSX01PREUgPSB7XG4gICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICBiZWdpbjogJygtPykoXFxcXGIwW3hYXVthLWZBLUYwLTldK3xcXFxcYjBbYkJdWzAxXSt8KFxcXFxiXFxcXGQrKF9cXFxcZCspPyhcXFxcLlxcXFxkKik/fFxcXFwuXFxcXGQrKShbZUVdWy0rXT9cXFxcZCspPyknLFxuICAgIHJlbGV2YW5jZTogMFxuICB9O1xuXG4gIC8qKlxuICAgKiBUaGUgYEZVTkNUSU9OYCBhbmQgYENMQVNTYCBtb2RlcyB3ZXJlIGludGVudGlvbmFsbHkgcmVtb3ZlZCB0byBzaW1wbGlmeVxuICAgKiBoaWdobGlnaHRpbmcgYW5kIGZpeCBjYXNlcyBsaWtlXG4gICAqIGBgYFxuICAgKiBpbnRlcmZhY2UgSXRlcmF0b3JbQTogQV1cbiAgICogICBmdW4gaGFzX25leHQoKTogQm9vbFxuICAgKiAgIGZ1biBuZXh0KCk6IEE/XG4gICAqIGBgYFxuICAgKiB3aGVyZSBpdCBpcyB2YWxpZCB0byBoYXZlIGEgZnVuY3Rpb24gaGVhZCB3aXRob3V0IGEgYm9keVxuICAgKi9cblxuICByZXR1cm4ge1xuICAgIG5hbWU6ICdQb255JyxcbiAgICBrZXl3b3JkczogS0VZV09SRFMsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIFRZUEVfTkFNRSxcbiAgICAgIFRSSVBMRV9RVU9URV9TVFJJTkdfTU9ERSxcbiAgICAgIFFVT1RFX1NUUklOR19NT0RFLFxuICAgICAgU0lOR0xFX1FVT1RFX0NIQVJfTU9ERSxcbiAgICAgIFBSSU1FRF9OQU1FLFxuICAgICAgTlVNQkVSX01PREUsXG4gICAgICBobGpzLkNfTElORV9DT01NRU5UX01PREUsXG4gICAgICBobGpzLkNfQkxPQ0tfQ09NTUVOVF9NT0RFXG4gICAgXVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHBvbnk7XG4iXSwic291cmNlUm9vdCI6IiJ9