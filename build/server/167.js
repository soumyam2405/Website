exports.ids = [167];
exports.modules = {

/***/ "./node_modules/highlight.js/lib/languages/step21.js":
/*!***********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/step21.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: STEP Part 21
Contributors: Adam Joseph Cook <adam.joseph.cook@gmail.com>
Description: Syntax highlighter for STEP Part 21 files (ISO 10303-21).
Website: https://en.wikipedia.org/wiki/ISO_10303-21
*/

function step21(hljs) {
  const STEP21_IDENT_RE = '[A-Z_][A-Z0-9_.]*';
  const STEP21_KEYWORDS = {
    $pattern: STEP21_IDENT_RE,
    keyword: 'HEADER ENDSEC DATA'
  };
  const STEP21_START = {
    className: 'meta',
    begin: 'ISO-10303-21;',
    relevance: 10
  };
  const STEP21_CLOSE = {
    className: 'meta',
    begin: 'END-ISO-10303-21;',
    relevance: 10
  };

  return {
    name: 'STEP Part 21',
    aliases: [
      'p21',
      'step',
      'stp'
    ],
    case_insensitive: true, // STEP 21 is case insensitive in theory, in practice all non-comments are capitalized.
    keywords: STEP21_KEYWORDS,
    contains: [
      STEP21_START,
      STEP21_CLOSE,
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      hljs.COMMENT('/\\*\\*!', '\\*/'),
      hljs.C_NUMBER_MODE,
      hljs.inherit(hljs.APOS_STRING_MODE, {
        illegal: null
      }),
      hljs.inherit(hljs.QUOTE_STRING_MODE, {
        illegal: null
      }),
      {
        className: 'string',
        begin: "'",
        end: "'"
      },
      {
        className: 'symbol',
        variants: [
          {
            begin: '#',
            end: '\\d+',
            illegal: '\\W'
          }
        ]
      }
    ]
  };
}

module.exports = step21;


/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvc3RlcDIxLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6IjE2Ny5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5MYW5ndWFnZTogU1RFUCBQYXJ0IDIxXG5Db250cmlidXRvcnM6IEFkYW0gSm9zZXBoIENvb2sgPGFkYW0uam9zZXBoLmNvb2tAZ21haWwuY29tPlxuRGVzY3JpcHRpb246IFN5bnRheCBoaWdobGlnaHRlciBmb3IgU1RFUCBQYXJ0IDIxIGZpbGVzIChJU08gMTAzMDMtMjEpLlxuV2Vic2l0ZTogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPXzEwMzAzLTIxXG4qL1xuXG5mdW5jdGlvbiBzdGVwMjEoaGxqcykge1xuICBjb25zdCBTVEVQMjFfSURFTlRfUkUgPSAnW0EtWl9dW0EtWjAtOV8uXSonO1xuICBjb25zdCBTVEVQMjFfS0VZV09SRFMgPSB7XG4gICAgJHBhdHRlcm46IFNURVAyMV9JREVOVF9SRSxcbiAgICBrZXl3b3JkOiAnSEVBREVSIEVORFNFQyBEQVRBJ1xuICB9O1xuICBjb25zdCBTVEVQMjFfU1RBUlQgPSB7XG4gICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgYmVnaW46ICdJU08tMTAzMDMtMjE7JyxcbiAgICByZWxldmFuY2U6IDEwXG4gIH07XG4gIGNvbnN0IFNURVAyMV9DTE9TRSA9IHtcbiAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICBiZWdpbjogJ0VORC1JU08tMTAzMDMtMjE7JyxcbiAgICByZWxldmFuY2U6IDEwXG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnU1RFUCBQYXJ0IDIxJyxcbiAgICBhbGlhc2VzOiBbXG4gICAgICAncDIxJyxcbiAgICAgICdzdGVwJyxcbiAgICAgICdzdHAnXG4gICAgXSxcbiAgICBjYXNlX2luc2Vuc2l0aXZlOiB0cnVlLCAvLyBTVEVQIDIxIGlzIGNhc2UgaW5zZW5zaXRpdmUgaW4gdGhlb3J5LCBpbiBwcmFjdGljZSBhbGwgbm9uLWNvbW1lbnRzIGFyZSBjYXBpdGFsaXplZC5cbiAgICBrZXl3b3JkczogU1RFUDIxX0tFWVdPUkRTLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBTVEVQMjFfU1RBUlQsXG4gICAgICBTVEVQMjFfQ0xPU0UsXG4gICAgICBobGpzLkNfTElORV9DT01NRU5UX01PREUsXG4gICAgICBobGpzLkNfQkxPQ0tfQ09NTUVOVF9NT0RFLFxuICAgICAgaGxqcy5DT01NRU5UKCcvXFxcXCpcXFxcKiEnLCAnXFxcXCovJyksXG4gICAgICBobGpzLkNfTlVNQkVSX01PREUsXG4gICAgICBobGpzLmluaGVyaXQoaGxqcy5BUE9TX1NUUklOR19NT0RFLCB7XG4gICAgICAgIGlsbGVnYWw6IG51bGxcbiAgICAgIH0pLFxuICAgICAgaGxqcy5pbmhlcml0KGhsanMuUVVPVEVfU1RSSU5HX01PREUsIHtcbiAgICAgICAgaWxsZWdhbDogbnVsbFxuICAgICAgfSksXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgICAgIGJlZ2luOiBcIidcIixcbiAgICAgICAgZW5kOiBcIidcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnc3ltYm9sJyxcbiAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogJyMnLFxuICAgICAgICAgICAgZW5kOiAnXFxcXGQrJyxcbiAgICAgICAgICAgIGlsbGVnYWw6ICdcXFxcVydcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RlcDIxO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==