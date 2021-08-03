exports.ids = [112];
exports.modules = {

/***/ "./node_modules/highlight.js/lib/languages/monkey.js":
/*!***********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/monkey.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Monkey
Description: Monkey2 is an easy to use, cross platform, games oriented programming language from Blitz Research.
Author: Arthur Bikmullin <devolonter@gmail.com>
Website: https://blitzresearch.itch.io/monkey2
*/

function monkey(hljs) {
  const NUMBER = {
    className: 'number',
    relevance: 0,
    variants: [
      {
        begin: '[$][a-fA-F0-9]+'
      },
      hljs.NUMBER_MODE
    ]
  };

  return {
    name: 'Monkey',
    case_insensitive: true,
    keywords: {
      keyword: 'public private property continue exit extern new try catch ' +
        'eachin not abstract final select case default const local global field ' +
        'end if then else elseif endif while wend repeat until forever for ' +
        'to step next return module inline throw import',

      built_in: 'DebugLog DebugStop Error Print ACos ACosr ASin ASinr ATan ATan2 ATan2r ATanr Abs Abs Ceil ' +
        'Clamp Clamp Cos Cosr Exp Floor Log Max Max Min Min Pow Sgn Sgn Sin Sinr Sqrt Tan Tanr Seed PI HALFPI TWOPI',

      literal: 'true false null and or shl shr mod'
    },
    illegal: /\/\*/,
    contains: [
      hljs.COMMENT('#rem', '#end'),
      hljs.COMMENT(
        "'",
        '$',
        {
          relevance: 0
        }
      ),
      {
        className: 'function',
        beginKeywords: 'function method',
        end: '[(=:]|$',
        illegal: /\n/,
        contains: [ hljs.UNDERSCORE_TITLE_MODE ]
      },
      {
        className: 'class',
        beginKeywords: 'class interface',
        end: '$',
        contains: [
          {
            beginKeywords: 'extends implements'
          },
          hljs.UNDERSCORE_TITLE_MODE
        ]
      },
      {
        className: 'built_in',
        begin: '\\b(self|super)\\b'
      },
      {
        className: 'meta',
        begin: '\\s*#',
        end: '$',
        keywords: {
          'meta-keyword': 'if else elseif endif end then'
        }
      },
      {
        className: 'meta',
        begin: '^\\s*strict\\b'
      },
      {
        beginKeywords: 'alias',
        end: '=',
        contains: [ hljs.UNDERSCORE_TITLE_MODE ]
      },
      hljs.QUOTE_STRING_MODE,
      NUMBER
    ]
  };
}

module.exports = monkey;


/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvbW9ua2V5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiIxMTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuTGFuZ3VhZ2U6IE1vbmtleVxuRGVzY3JpcHRpb246IE1vbmtleTIgaXMgYW4gZWFzeSB0byB1c2UsIGNyb3NzIHBsYXRmb3JtLCBnYW1lcyBvcmllbnRlZCBwcm9ncmFtbWluZyBsYW5ndWFnZSBmcm9tIEJsaXR6IFJlc2VhcmNoLlxuQXV0aG9yOiBBcnRodXIgQmlrbXVsbGluIDxkZXZvbG9udGVyQGdtYWlsLmNvbT5cbldlYnNpdGU6IGh0dHBzOi8vYmxpdHpyZXNlYXJjaC5pdGNoLmlvL21vbmtleTJcbiovXG5cbmZ1bmN0aW9uIG1vbmtleShobGpzKSB7XG4gIGNvbnN0IE5VTUJFUiA9IHtcbiAgICBjbGFzc05hbWU6ICdudW1iZXInLFxuICAgIHJlbGV2YW5jZTogMCxcbiAgICB2YXJpYW50czogW1xuICAgICAge1xuICAgICAgICBiZWdpbjogJ1skXVthLWZBLUYwLTldKydcbiAgICAgIH0sXG4gICAgICBobGpzLk5VTUJFUl9NT0RFXG4gICAgXVxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgbmFtZTogJ01vbmtleScsXG4gICAgY2FzZV9pbnNlbnNpdGl2ZTogdHJ1ZSxcbiAgICBrZXl3b3Jkczoge1xuICAgICAga2V5d29yZDogJ3B1YmxpYyBwcml2YXRlIHByb3BlcnR5IGNvbnRpbnVlIGV4aXQgZXh0ZXJuIG5ldyB0cnkgY2F0Y2ggJyArXG4gICAgICAgICdlYWNoaW4gbm90IGFic3RyYWN0IGZpbmFsIHNlbGVjdCBjYXNlIGRlZmF1bHQgY29uc3QgbG9jYWwgZ2xvYmFsIGZpZWxkICcgK1xuICAgICAgICAnZW5kIGlmIHRoZW4gZWxzZSBlbHNlaWYgZW5kaWYgd2hpbGUgd2VuZCByZXBlYXQgdW50aWwgZm9yZXZlciBmb3IgJyArXG4gICAgICAgICd0byBzdGVwIG5leHQgcmV0dXJuIG1vZHVsZSBpbmxpbmUgdGhyb3cgaW1wb3J0JyxcblxuICAgICAgYnVpbHRfaW46ICdEZWJ1Z0xvZyBEZWJ1Z1N0b3AgRXJyb3IgUHJpbnQgQUNvcyBBQ29zciBBU2luIEFTaW5yIEFUYW4gQVRhbjIgQVRhbjJyIEFUYW5yIEFicyBBYnMgQ2VpbCAnICtcbiAgICAgICAgJ0NsYW1wIENsYW1wIENvcyBDb3NyIEV4cCBGbG9vciBMb2cgTWF4IE1heCBNaW4gTWluIFBvdyBTZ24gU2duIFNpbiBTaW5yIFNxcnQgVGFuIFRhbnIgU2VlZCBQSSBIQUxGUEkgVFdPUEknLFxuXG4gICAgICBsaXRlcmFsOiAndHJ1ZSBmYWxzZSBudWxsIGFuZCBvciBzaGwgc2hyIG1vZCdcbiAgICB9LFxuICAgIGlsbGVnYWw6IC9cXC9cXCovLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBobGpzLkNPTU1FTlQoJyNyZW0nLCAnI2VuZCcpLFxuICAgICAgaGxqcy5DT01NRU5UKFxuICAgICAgICBcIidcIixcbiAgICAgICAgJyQnLFxuICAgICAgICB7XG4gICAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICAgIH1cbiAgICAgICksXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2Z1bmN0aW9uJyxcbiAgICAgICAgYmVnaW5LZXl3b3JkczogJ2Z1bmN0aW9uIG1ldGhvZCcsXG4gICAgICAgIGVuZDogJ1soPTpdfCQnLFxuICAgICAgICBpbGxlZ2FsOiAvXFxuLyxcbiAgICAgICAgY29udGFpbnM6IFsgaGxqcy5VTkRFUlNDT1JFX1RJVExFX01PREUgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnY2xhc3MnLFxuICAgICAgICBiZWdpbktleXdvcmRzOiAnY2xhc3MgaW50ZXJmYWNlJyxcbiAgICAgICAgZW5kOiAnJCcsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW5LZXl3b3JkczogJ2V4dGVuZHMgaW1wbGVtZW50cydcbiAgICAgICAgICB9LFxuICAgICAgICAgIGhsanMuVU5ERVJTQ09SRV9USVRMRV9NT0RFXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2J1aWx0X2luJyxcbiAgICAgICAgYmVnaW46ICdcXFxcYihzZWxmfHN1cGVyKVxcXFxiJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgICAgIGJlZ2luOiAnXFxcXHMqIycsXG4gICAgICAgIGVuZDogJyQnLFxuICAgICAgICBrZXl3b3Jkczoge1xuICAgICAgICAgICdtZXRhLWtleXdvcmQnOiAnaWYgZWxzZSBlbHNlaWYgZW5kaWYgZW5kIHRoZW4nXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgICAgICBiZWdpbjogJ15cXFxccypzdHJpY3RcXFxcYidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luS2V5d29yZHM6ICdhbGlhcycsXG4gICAgICAgIGVuZDogJz0nLFxuICAgICAgICBjb250YWluczogWyBobGpzLlVOREVSU0NPUkVfVElUTEVfTU9ERSBdXG4gICAgICB9LFxuICAgICAgaGxqcy5RVU9URV9TVFJJTkdfTU9ERSxcbiAgICAgIE5VTUJFUlxuICAgIF1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtb25rZXk7XG4iXSwic291cmNlUm9vdCI6IiJ9