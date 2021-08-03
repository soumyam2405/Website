exports.ids = [135];
exports.modules = {

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

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvcHJvbG9nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CO0FBQ25CO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6IjEzNS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5MYW5ndWFnZTogUHJvbG9nXG5EZXNjcmlwdGlvbjogUHJvbG9nIGlzIGEgZ2VuZXJhbCBwdXJwb3NlIGxvZ2ljIHByb2dyYW1taW5nIGxhbmd1YWdlIGFzc29jaWF0ZWQgd2l0aCBhcnRpZmljaWFsIGludGVsbGlnZW5jZSBhbmQgY29tcHV0YXRpb25hbCBsaW5ndWlzdGljcy5cbkF1dGhvcjogUmFpdm8gTGFhbmVtZXRzIDxyYWl2b0BpbmZkb3QuY29tPlxuV2Vic2l0ZTogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvUHJvbG9nXG4qL1xuXG5mdW5jdGlvbiBwcm9sb2coaGxqcykge1xuICBjb25zdCBBVE9NID0ge1xuXG4gICAgYmVnaW46IC9bYS16XVtBLVphLXowLTlfXSovLFxuICAgIHJlbGV2YW5jZTogMFxuICB9O1xuXG4gIGNvbnN0IFZBUiA9IHtcblxuICAgIGNsYXNzTmFtZTogJ3N5bWJvbCcsXG4gICAgdmFyaWFudHM6IFtcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IC9bQS1aXVthLXpBLVowLTlfXSovXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogL19bQS1aYS16MC05X10qL1xuICAgICAgfVxuICAgIF0sXG4gICAgcmVsZXZhbmNlOiAwXG4gIH07XG5cbiAgY29uc3QgUEFSRU5URUQgPSB7XG5cbiAgICBiZWdpbjogL1xcKC8sXG4gICAgZW5kOiAvXFwpLyxcbiAgICByZWxldmFuY2U6IDBcbiAgfTtcblxuICBjb25zdCBMSVNUID0ge1xuXG4gICAgYmVnaW46IC9cXFsvLFxuICAgIGVuZDogL1xcXS9cbiAgfTtcblxuICBjb25zdCBMSU5FX0NPTU1FTlQgPSB7XG5cbiAgICBjbGFzc05hbWU6ICdjb21tZW50JyxcbiAgICBiZWdpbjogLyUvLFxuICAgIGVuZDogLyQvLFxuICAgIGNvbnRhaW5zOiBbIGhsanMuUEhSQVNBTF9XT1JEU19NT0RFIF1cbiAgfTtcblxuICBjb25zdCBCQUNLVElDS19TVFJJTkcgPSB7XG5cbiAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgIGJlZ2luOiAvYC8sXG4gICAgZW5kOiAvYC8sXG4gICAgY29udGFpbnM6IFsgaGxqcy5CQUNLU0xBU0hfRVNDQVBFIF1cbiAgfTtcblxuICBjb25zdCBDSEFSX0NPREUgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3RyaW5nJywgLy8gMCdhIGV0Yy5cbiAgICBiZWdpbjogLzAnKFxcXFwnfC4pL1xuICB9O1xuXG4gIGNvbnN0IFNQQUNFX0NPREUgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICBiZWdpbjogLzAnXFxcXHMvIC8vIDAnXFxzXG4gIH07XG5cbiAgY29uc3QgUFJFRF9PUCA9IHsgLy8gcmVsZXZhbmNlIGJvb3N0ZXJcbiAgICBiZWdpbjogLzotL1xuICB9O1xuXG4gIGNvbnN0IGlubmVyID0gW1xuXG4gICAgQVRPTSxcbiAgICBWQVIsXG4gICAgUEFSRU5URUQsXG4gICAgUFJFRF9PUCxcbiAgICBMSVNULFxuICAgIExJTkVfQ09NTUVOVCxcbiAgICBobGpzLkNfQkxPQ0tfQ09NTUVOVF9NT0RFLFxuICAgIGhsanMuUVVPVEVfU1RSSU5HX01PREUsXG4gICAgaGxqcy5BUE9TX1NUUklOR19NT0RFLFxuICAgIEJBQ0tUSUNLX1NUUklORyxcbiAgICBDSEFSX0NPREUsXG4gICAgU1BBQ0VfQ09ERSxcbiAgICBobGpzLkNfTlVNQkVSX01PREVcbiAgXTtcblxuICBQQVJFTlRFRC5jb250YWlucyA9IGlubmVyO1xuICBMSVNULmNvbnRhaW5zID0gaW5uZXI7XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnUHJvbG9nJyxcbiAgICBjb250YWluczogaW5uZXIuY29uY2F0KFtcbiAgICAgIHsgLy8gcmVsZXZhbmNlIGJvb3N0ZXJcbiAgICAgICAgYmVnaW46IC9cXC4kL1xuICAgICAgfVxuICAgIF0pXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcHJvbG9nO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==