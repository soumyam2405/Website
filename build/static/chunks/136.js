(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[136],{

/***/ "./node_modules/highlight.js/lib/languages/prolog.js":
/*!***********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/prolog.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Prolog
Description: Prolog is a general purpose logic programming language associated with artificial intelligence and computational linguistics.
Author: Raivo Laanemets <raivo@infdot.com>
Website: https://en.wikipedia.org/wiki/Prolog
*/

function prolog(hljs) {
  const ATOM = {

    begin: /[a-z][A-Za-z0-9_]*/,
    relevance: 0
  };

  const VAR = {

    className: 'symbol',
    variants: [
      {
        begin: /[A-Z][a-zA-Z0-9_]*/
      },
      {
        begin: /_[A-Za-z0-9_]*/
      }
    ],
    relevance: 0
  };

  const PARENTED = {

    begin: /\(/,
    end: /\)/,
    relevance: 0
  };

  const LIST = {

    begin: /\[/,
    end: /\]/
  };

  const LINE_COMMENT = {

    className: 'comment',
    begin: /%/,
    end: /$/,
    contains: [ hljs.PHRASAL_WORDS_MODE ]
  };

  const BACKTICK_STRING = {

    className: 'string',
    begin: /`/,
    end: /`/,
    contains: [ hljs.BACKSLASH_ESCAPE ]
  };

  const CHAR_CODE = {
    className: 'string', // 0'a etc.
    begin: /0'(\\'|.)/
  };

  const SPACE_CODE = {
    className: 'string',
    begin: /0'\\s/ // 0'\s
  };

  const PRED_OP = { // relevance booster
    begin: /:-/
  };

  const inner = [

    ATOM,
    VAR,
    PARENTED,
    PRED_OP,
    LIST,
    LINE_COMMENT,
    hljs.C_BLOCK_COMMENT_MODE,
    hljs.QUOTE_STRING_MODE,
    hljs.APOS_STRING_MODE,
    BACKTICK_STRING,
    CHAR_CODE,
    SPACE_CODE,
    hljs.C_NUMBER_MODE
  ];

  PARENTED.contains = inner;
  LIST.contains = inner;

  return {
    name: 'Prolog',
    contains: inner.concat([
      { // relevance booster
        begin: /\.$/
      }
    ])
  };
}

module.exports = prolog;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3Byb2xvZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CO0FBQ25CO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvMTM2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBQcm9sb2dcbkRlc2NyaXB0aW9uOiBQcm9sb2cgaXMgYSBnZW5lcmFsIHB1cnBvc2UgbG9naWMgcHJvZ3JhbW1pbmcgbGFuZ3VhZ2UgYXNzb2NpYXRlZCB3aXRoIGFydGlmaWNpYWwgaW50ZWxsaWdlbmNlIGFuZCBjb21wdXRhdGlvbmFsIGxpbmd1aXN0aWNzLlxuQXV0aG9yOiBSYWl2byBMYWFuZW1ldHMgPHJhaXZvQGluZmRvdC5jb20+XG5XZWJzaXRlOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Qcm9sb2dcbiovXG5cbmZ1bmN0aW9uIHByb2xvZyhobGpzKSB7XG4gIGNvbnN0IEFUT00gPSB7XG5cbiAgICBiZWdpbjogL1thLXpdW0EtWmEtejAtOV9dKi8sXG4gICAgcmVsZXZhbmNlOiAwXG4gIH07XG5cbiAgY29uc3QgVkFSID0ge1xuXG4gICAgY2xhc3NOYW1lOiAnc3ltYm9sJyxcbiAgICB2YXJpYW50czogW1xuICAgICAge1xuICAgICAgICBiZWdpbjogL1tBLVpdW2EtekEtWjAtOV9dKi9cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAvX1tBLVphLXowLTlfXSovXG4gICAgICB9XG4gICAgXSxcbiAgICByZWxldmFuY2U6IDBcbiAgfTtcblxuICBjb25zdCBQQVJFTlRFRCA9IHtcblxuICAgIGJlZ2luOiAvXFwoLyxcbiAgICBlbmQ6IC9cXCkvLFxuICAgIHJlbGV2YW5jZTogMFxuICB9O1xuXG4gIGNvbnN0IExJU1QgPSB7XG5cbiAgICBiZWdpbjogL1xcWy8sXG4gICAgZW5kOiAvXFxdL1xuICB9O1xuXG4gIGNvbnN0IExJTkVfQ09NTUVOVCA9IHtcblxuICAgIGNsYXNzTmFtZTogJ2NvbW1lbnQnLFxuICAgIGJlZ2luOiAvJS8sXG4gICAgZW5kOiAvJC8sXG4gICAgY29udGFpbnM6IFsgaGxqcy5QSFJBU0FMX1dPUkRTX01PREUgXVxuICB9O1xuXG4gIGNvbnN0IEJBQ0tUSUNLX1NUUklORyA9IHtcblxuICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgYmVnaW46IC9gLyxcbiAgICBlbmQ6IC9gLyxcbiAgICBjb250YWluczogWyBobGpzLkJBQ0tTTEFTSF9FU0NBUEUgXVxuICB9O1xuXG4gIGNvbnN0IENIQVJfQ09ERSA9IHtcbiAgICBjbGFzc05hbWU6ICdzdHJpbmcnLCAvLyAwJ2EgZXRjLlxuICAgIGJlZ2luOiAvMCcoXFxcXCd8LikvXG4gIH07XG5cbiAgY29uc3QgU1BBQ0VfQ09ERSA9IHtcbiAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgIGJlZ2luOiAvMCdcXFxccy8gLy8gMCdcXHNcbiAgfTtcblxuICBjb25zdCBQUkVEX09QID0geyAvLyByZWxldmFuY2UgYm9vc3RlclxuICAgIGJlZ2luOiAvOi0vXG4gIH07XG5cbiAgY29uc3QgaW5uZXIgPSBbXG5cbiAgICBBVE9NLFxuICAgIFZBUixcbiAgICBQQVJFTlRFRCxcbiAgICBQUkVEX09QLFxuICAgIExJU1QsXG4gICAgTElORV9DT01NRU5ULFxuICAgIGhsanMuQ19CTE9DS19DT01NRU5UX01PREUsXG4gICAgaGxqcy5RVU9URV9TVFJJTkdfTU9ERSxcbiAgICBobGpzLkFQT1NfU1RSSU5HX01PREUsXG4gICAgQkFDS1RJQ0tfU1RSSU5HLFxuICAgIENIQVJfQ09ERSxcbiAgICBTUEFDRV9DT0RFLFxuICAgIGhsanMuQ19OVU1CRVJfTU9ERVxuICBdO1xuXG4gIFBBUkVOVEVELmNvbnRhaW5zID0gaW5uZXI7XG4gIExJU1QuY29udGFpbnMgPSBpbm5lcjtcblxuICByZXR1cm4ge1xuICAgIG5hbWU6ICdQcm9sb2cnLFxuICAgIGNvbnRhaW5zOiBpbm5lci5jb25jYXQoW1xuICAgICAgeyAvLyByZWxldmFuY2UgYm9vc3RlclxuICAgICAgICBiZWdpbjogL1xcLiQvXG4gICAgICB9XG4gICAgXSlcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwcm9sb2c7XG4iXSwic291cmNlUm9vdCI6IiJ9