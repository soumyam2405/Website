exports.ids = [24];
exports.modules = {

/***/ "./node_modules/highlight.js/lib/languages/cal.js":
/*!********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/cal.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: C/AL
Author: Kenneth Fuglsang Christensen <kfuglsang@gmail.com>
Description: Provides highlighting of Microsoft Dynamics NAV C/AL code files
Website: https://docs.microsoft.com/en-us/dynamics-nav/programming-in-c-al
*/

/** @type LanguageFn */
function cal(hljs) {
  const KEYWORDS =
    'div mod in and or not xor asserterror begin case do downto else end exit for if of repeat then to ' +
    'until while with var';
  const LITERALS = 'false true';
  const COMMENT_MODES = [
    hljs.C_LINE_COMMENT_MODE,
    hljs.COMMENT(
      /\{/,
      /\}/,
      {
        relevance: 0
      }
    ),
    hljs.COMMENT(
      /\(\*/,
      /\*\)/,
      {
        relevance: 10
      }
    )
  ];
  const STRING = {
    className: 'string',
    begin: /'/,
    end: /'/,
    contains: [{
      begin: /''/
    }]
  };
  const CHAR_STRING = {
    className: 'string',
    begin: /(#\d+)+/
  };
  const DATE = {
    className: 'number',
    begin: '\\b\\d+(\\.\\d+)?(DT|D|T)',
    relevance: 0
  };
  const DBL_QUOTED_VARIABLE = {
    className: 'string', // not a string technically but makes sense to be highlighted in the same style
    begin: '"',
    end: '"'
  };

  const PROCEDURE = {
    className: 'function',
    beginKeywords: 'procedure',
    end: /[:;]/,
    keywords: 'procedure|10',
    contains: [
      hljs.TITLE_MODE,
      {
        className: 'params',
        begin: /\(/,
        end: /\)/,
        keywords: KEYWORDS,
        contains: [
          STRING,
          CHAR_STRING
        ]
      }
    ].concat(COMMENT_MODES)
  };

  const OBJECT = {
    className: 'class',
    begin: 'OBJECT (Table|Form|Report|Dataport|Codeunit|XMLport|MenuSuite|Page|Query) (\\d+) ([^\\r\\n]+)',
    returnBegin: true,
    contains: [
      hljs.TITLE_MODE,
      PROCEDURE
    ]
  };

  return {
    name: 'C/AL',
    case_insensitive: true,
    keywords: {
      keyword: KEYWORDS,
      literal: LITERALS
    },
    illegal: /\/\*/,
    contains: [
      STRING,
      CHAR_STRING,
      DATE,
      DBL_QUOTED_VARIABLE,
      hljs.NUMBER_MODE,
      OBJECT,
      PROCEDURE
    ]
  };
}

module.exports = cal;


/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvY2FsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiMjQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuTGFuZ3VhZ2U6IEMvQUxcbkF1dGhvcjogS2VubmV0aCBGdWdsc2FuZyBDaHJpc3RlbnNlbiA8a2Z1Z2xzYW5nQGdtYWlsLmNvbT5cbkRlc2NyaXB0aW9uOiBQcm92aWRlcyBoaWdobGlnaHRpbmcgb2YgTWljcm9zb2Z0IER5bmFtaWNzIE5BViBDL0FMIGNvZGUgZmlsZXNcbldlYnNpdGU6IGh0dHBzOi8vZG9jcy5taWNyb3NvZnQuY29tL2VuLXVzL2R5bmFtaWNzLW5hdi9wcm9ncmFtbWluZy1pbi1jLWFsXG4qL1xuXG4vKiogQHR5cGUgTGFuZ3VhZ2VGbiAqL1xuZnVuY3Rpb24gY2FsKGhsanMpIHtcbiAgY29uc3QgS0VZV09SRFMgPVxuICAgICdkaXYgbW9kIGluIGFuZCBvciBub3QgeG9yIGFzc2VydGVycm9yIGJlZ2luIGNhc2UgZG8gZG93bnRvIGVsc2UgZW5kIGV4aXQgZm9yIGlmIG9mIHJlcGVhdCB0aGVuIHRvICcgK1xuICAgICd1bnRpbCB3aGlsZSB3aXRoIHZhcic7XG4gIGNvbnN0IExJVEVSQUxTID0gJ2ZhbHNlIHRydWUnO1xuICBjb25zdCBDT01NRU5UX01PREVTID0gW1xuICAgIGhsanMuQ19MSU5FX0NPTU1FTlRfTU9ERSxcbiAgICBobGpzLkNPTU1FTlQoXG4gICAgICAvXFx7LyxcbiAgICAgIC9cXH0vLFxuICAgICAge1xuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH1cbiAgICApLFxuICAgIGhsanMuQ09NTUVOVChcbiAgICAgIC9cXChcXCovLFxuICAgICAgL1xcKlxcKS8sXG4gICAgICB7XG4gICAgICAgIHJlbGV2YW5jZTogMTBcbiAgICAgIH1cbiAgICApXG4gIF07XG4gIGNvbnN0IFNUUklORyA9IHtcbiAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgIGJlZ2luOiAvJy8sXG4gICAgZW5kOiAvJy8sXG4gICAgY29udGFpbnM6IFt7XG4gICAgICBiZWdpbjogLycnL1xuICAgIH1dXG4gIH07XG4gIGNvbnN0IENIQVJfU1RSSU5HID0ge1xuICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgYmVnaW46IC8oI1xcZCspKy9cbiAgfTtcbiAgY29uc3QgREFURSA9IHtcbiAgICBjbGFzc05hbWU6ICdudW1iZXInLFxuICAgIGJlZ2luOiAnXFxcXGJcXFxcZCsoXFxcXC5cXFxcZCspPyhEVHxEfFQpJyxcbiAgICByZWxldmFuY2U6IDBcbiAgfTtcbiAgY29uc3QgREJMX1FVT1RFRF9WQVJJQUJMRSA9IHtcbiAgICBjbGFzc05hbWU6ICdzdHJpbmcnLCAvLyBub3QgYSBzdHJpbmcgdGVjaG5pY2FsbHkgYnV0IG1ha2VzIHNlbnNlIHRvIGJlIGhpZ2hsaWdodGVkIGluIHRoZSBzYW1lIHN0eWxlXG4gICAgYmVnaW46ICdcIicsXG4gICAgZW5kOiAnXCInXG4gIH07XG5cbiAgY29uc3QgUFJPQ0VEVVJFID0ge1xuICAgIGNsYXNzTmFtZTogJ2Z1bmN0aW9uJyxcbiAgICBiZWdpbktleXdvcmRzOiAncHJvY2VkdXJlJyxcbiAgICBlbmQ6IC9bOjtdLyxcbiAgICBrZXl3b3JkczogJ3Byb2NlZHVyZXwxMCcsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIGhsanMuVElUTEVfTU9ERSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAncGFyYW1zJyxcbiAgICAgICAgYmVnaW46IC9cXCgvLFxuICAgICAgICBlbmQ6IC9cXCkvLFxuICAgICAgICBrZXl3b3JkczogS0VZV09SRFMsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgU1RSSU5HLFxuICAgICAgICAgIENIQVJfU1RSSU5HXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdLmNvbmNhdChDT01NRU5UX01PREVTKVxuICB9O1xuXG4gIGNvbnN0IE9CSkVDVCA9IHtcbiAgICBjbGFzc05hbWU6ICdjbGFzcycsXG4gICAgYmVnaW46ICdPQkpFQ1QgKFRhYmxlfEZvcm18UmVwb3J0fERhdGFwb3J0fENvZGV1bml0fFhNTHBvcnR8TWVudVN1aXRlfFBhZ2V8UXVlcnkpIChcXFxcZCspIChbXlxcXFxyXFxcXG5dKyknLFxuICAgIHJldHVybkJlZ2luOiB0cnVlLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBobGpzLlRJVExFX01PREUsXG4gICAgICBQUk9DRURVUkVcbiAgICBdXG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnQy9BTCcsXG4gICAgY2FzZV9pbnNlbnNpdGl2ZTogdHJ1ZSxcbiAgICBrZXl3b3Jkczoge1xuICAgICAga2V5d29yZDogS0VZV09SRFMsXG4gICAgICBsaXRlcmFsOiBMSVRFUkFMU1xuICAgIH0sXG4gICAgaWxsZWdhbDogL1xcL1xcKi8sXG4gICAgY29udGFpbnM6IFtcbiAgICAgIFNUUklORyxcbiAgICAgIENIQVJfU1RSSU5HLFxuICAgICAgREFURSxcbiAgICAgIERCTF9RVU9URURfVkFSSUFCTEUsXG4gICAgICBobGpzLk5VTUJFUl9NT0RFLFxuICAgICAgT0JKRUNULFxuICAgICAgUFJPQ0VEVVJFXG4gICAgXVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNhbDtcbiJdLCJzb3VyY2VSb290IjoiIn0=