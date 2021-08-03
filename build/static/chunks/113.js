(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[113],{

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

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL21vbmtleS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJzdGF0aWMvY2h1bmtzLzExMy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5MYW5ndWFnZTogTW9ua2V5XG5EZXNjcmlwdGlvbjogTW9ua2V5MiBpcyBhbiBlYXN5IHRvIHVzZSwgY3Jvc3MgcGxhdGZvcm0sIGdhbWVzIG9yaWVudGVkIHByb2dyYW1taW5nIGxhbmd1YWdlIGZyb20gQmxpdHogUmVzZWFyY2guXG5BdXRob3I6IEFydGh1ciBCaWttdWxsaW4gPGRldm9sb250ZXJAZ21haWwuY29tPlxuV2Vic2l0ZTogaHR0cHM6Ly9ibGl0enJlc2VhcmNoLml0Y2guaW8vbW9ua2V5MlxuKi9cblxuZnVuY3Rpb24gbW9ua2V5KGhsanMpIHtcbiAgY29uc3QgTlVNQkVSID0ge1xuICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgcmVsZXZhbmNlOiAwLFxuICAgIHZhcmlhbnRzOiBbXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnWyRdW2EtZkEtRjAtOV0rJ1xuICAgICAgfSxcbiAgICAgIGhsanMuTlVNQkVSX01PREVcbiAgICBdXG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnTW9ua2V5JyxcbiAgICBjYXNlX2luc2Vuc2l0aXZlOiB0cnVlLFxuICAgIGtleXdvcmRzOiB7XG4gICAgICBrZXl3b3JkOiAncHVibGljIHByaXZhdGUgcHJvcGVydHkgY29udGludWUgZXhpdCBleHRlcm4gbmV3IHRyeSBjYXRjaCAnICtcbiAgICAgICAgJ2VhY2hpbiBub3QgYWJzdHJhY3QgZmluYWwgc2VsZWN0IGNhc2UgZGVmYXVsdCBjb25zdCBsb2NhbCBnbG9iYWwgZmllbGQgJyArXG4gICAgICAgICdlbmQgaWYgdGhlbiBlbHNlIGVsc2VpZiBlbmRpZiB3aGlsZSB3ZW5kIHJlcGVhdCB1bnRpbCBmb3JldmVyIGZvciAnICtcbiAgICAgICAgJ3RvIHN0ZXAgbmV4dCByZXR1cm4gbW9kdWxlIGlubGluZSB0aHJvdyBpbXBvcnQnLFxuXG4gICAgICBidWlsdF9pbjogJ0RlYnVnTG9nIERlYnVnU3RvcCBFcnJvciBQcmludCBBQ29zIEFDb3NyIEFTaW4gQVNpbnIgQVRhbiBBVGFuMiBBVGFuMnIgQVRhbnIgQWJzIEFicyBDZWlsICcgK1xuICAgICAgICAnQ2xhbXAgQ2xhbXAgQ29zIENvc3IgRXhwIEZsb29yIExvZyBNYXggTWF4IE1pbiBNaW4gUG93IFNnbiBTZ24gU2luIFNpbnIgU3FydCBUYW4gVGFuciBTZWVkIFBJIEhBTEZQSSBUV09QSScsXG5cbiAgICAgIGxpdGVyYWw6ICd0cnVlIGZhbHNlIG51bGwgYW5kIG9yIHNobCBzaHIgbW9kJ1xuICAgIH0sXG4gICAgaWxsZWdhbDogL1xcL1xcKi8sXG4gICAgY29udGFpbnM6IFtcbiAgICAgIGhsanMuQ09NTUVOVCgnI3JlbScsICcjZW5kJyksXG4gICAgICBobGpzLkNPTU1FTlQoXG4gICAgICAgIFwiJ1wiLFxuICAgICAgICAnJCcsXG4gICAgICAgIHtcbiAgICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgICAgfVxuICAgICAgKSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnZnVuY3Rpb24nLFxuICAgICAgICBiZWdpbktleXdvcmRzOiAnZnVuY3Rpb24gbWV0aG9kJyxcbiAgICAgICAgZW5kOiAnWyg9Ol18JCcsXG4gICAgICAgIGlsbGVnYWw6IC9cXG4vLFxuICAgICAgICBjb250YWluczogWyBobGpzLlVOREVSU0NPUkVfVElUTEVfTU9ERSBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdjbGFzcycsXG4gICAgICAgIGJlZ2luS2V5d29yZHM6ICdjbGFzcyBpbnRlcmZhY2UnLFxuICAgICAgICBlbmQ6ICckJyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbktleXdvcmRzOiAnZXh0ZW5kcyBpbXBsZW1lbnRzJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgaGxqcy5VTkRFUlNDT1JFX1RJVExFX01PREVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnYnVpbHRfaW4nLFxuICAgICAgICBiZWdpbjogJ1xcXFxiKHNlbGZ8c3VwZXIpXFxcXGInXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICAgICAgYmVnaW46ICdcXFxccyojJyxcbiAgICAgICAgZW5kOiAnJCcsXG4gICAgICAgIGtleXdvcmRzOiB7XG4gICAgICAgICAgJ21ldGEta2V5d29yZCc6ICdpZiBlbHNlIGVsc2VpZiBlbmRpZiBlbmQgdGhlbidcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgICAgIGJlZ2luOiAnXlxcXFxzKnN0cmljdFxcXFxiJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW5LZXl3b3JkczogJ2FsaWFzJyxcbiAgICAgICAgZW5kOiAnPScsXG4gICAgICAgIGNvbnRhaW5zOiBbIGhsanMuVU5ERVJTQ09SRV9USVRMRV9NT0RFIF1cbiAgICAgIH0sXG4gICAgICBobGpzLlFVT1RFX1NUUklOR19NT0RFLFxuICAgICAgTlVNQkVSXG4gICAgXVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1vbmtleTtcbiJdLCJzb3VyY2VSb290IjoiIn0=