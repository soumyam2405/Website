(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[75],{

/***/ "./node_modules/highlight.js/lib/languages/haskell.js":
/*!************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/haskell.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Haskell
Author: Jeremy Hull <sourdrums@gmail.com>
Contributors: Zena Treep <zena.treep@gmail.com>
Website: https://www.haskell.org
Category: functional
*/

function haskell(hljs) {
  const COMMENT = {
    variants: [
      hljs.COMMENT('--', '$'),
      hljs.COMMENT(
        /\{-/,
        /-\}/,
        {
          contains: ['self']
        }
      )
    ]
  };

  const PRAGMA = {
    className: 'meta',
    begin: /\{-#/,
    end: /#-\}/
  };

  const PREPROCESSOR = {
    className: 'meta',
    begin: '^#',
    end: '$'
  };

  const CONSTRUCTOR = {
    className: 'type',
    begin: '\\b[A-Z][\\w\']*', // TODO: other constructors (build-in, infix).
    relevance: 0
  };

  const LIST = {
    begin: '\\(',
    end: '\\)',
    illegal: '"',
    contains: [
      PRAGMA,
      PREPROCESSOR,
      {
        className: 'type',
        begin: '\\b[A-Z][\\w]*(\\((\\.\\.|,|\\w+)\\))?'
      },
      hljs.inherit(hljs.TITLE_MODE, {
        begin: '[_a-z][\\w\']*'
      }),
      COMMENT
    ]
  };

  const RECORD = {
    begin: /\{/,
    end: /\}/,
    contains: LIST.contains
  };

  return {
    name: 'Haskell',
    aliases: ['hs'],
    keywords:
      'let in if then else case of where do module import hiding ' +
      'qualified type data newtype deriving class instance as default ' +
      'infix infixl infixr foreign export ccall stdcall cplusplus ' +
      'jvm dotnet safe unsafe family forall mdo proc rec',
    contains: [
      // Top-level constructions.
      {
        beginKeywords: 'module',
        end: 'where',
        keywords: 'module where',
        contains: [
          LIST,
          COMMENT
        ],
        illegal: '\\W\\.|;'
      },
      {
        begin: '\\bimport\\b',
        end: '$',
        keywords: 'import qualified as hiding',
        contains: [
          LIST,
          COMMENT
        ],
        illegal: '\\W\\.|;'
      },
      {
        className: 'class',
        begin: '^(\\s*)?(class|instance)\\b',
        end: 'where',
        keywords: 'class family instance where',
        contains: [
          CONSTRUCTOR,
          LIST,
          COMMENT
        ]
      },
      {
        className: 'class',
        begin: '\\b(data|(new)?type)\\b',
        end: '$',
        keywords: 'data family type newtype deriving',
        contains: [
          PRAGMA,
          CONSTRUCTOR,
          LIST,
          RECORD,
          COMMENT
        ]
      },
      {
        beginKeywords: 'default',
        end: '$',
        contains: [
          CONSTRUCTOR,
          LIST,
          COMMENT
        ]
      },
      {
        beginKeywords: 'infix infixl infixr',
        end: '$',
        contains: [
          hljs.C_NUMBER_MODE,
          COMMENT
        ]
      },
      {
        begin: '\\bforeign\\b',
        end: '$',
        keywords: 'foreign import export ccall stdcall cplusplus jvm ' +
                  'dotnet safe unsafe',
        contains: [
          CONSTRUCTOR,
          hljs.QUOTE_STRING_MODE,
          COMMENT
        ]
      },
      {
        className: 'meta',
        begin: '#!\\/usr\\/bin\\/env\ runhaskell',
        end: '$'
      },
      // "Whitespaces".
      PRAGMA,
      PREPROCESSOR,

      // Literals and names.

      // TODO: characters.
      hljs.QUOTE_STRING_MODE,
      hljs.C_NUMBER_MODE,
      CONSTRUCTOR,
      hljs.inherit(hljs.TITLE_MODE, {
        begin: '^[_a-z][\\w\']*'
      }),
      COMMENT,
      { // No markup, relevance booster
        begin: '->|<-'
      }
    ]
  };
}

module.exports = haskell;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2hhc2tlbGwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjO0FBQ2QsY0FBYztBQUNkOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGNBQWM7QUFDZCxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUIsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUIsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJzdGF0aWMvY2h1bmtzLzc1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBIYXNrZWxsXG5BdXRob3I6IEplcmVteSBIdWxsIDxzb3VyZHJ1bXNAZ21haWwuY29tPlxuQ29udHJpYnV0b3JzOiBaZW5hIFRyZWVwIDx6ZW5hLnRyZWVwQGdtYWlsLmNvbT5cbldlYnNpdGU6IGh0dHBzOi8vd3d3Lmhhc2tlbGwub3JnXG5DYXRlZ29yeTogZnVuY3Rpb25hbFxuKi9cblxuZnVuY3Rpb24gaGFza2VsbChobGpzKSB7XG4gIGNvbnN0IENPTU1FTlQgPSB7XG4gICAgdmFyaWFudHM6IFtcbiAgICAgIGhsanMuQ09NTUVOVCgnLS0nLCAnJCcpLFxuICAgICAgaGxqcy5DT01NRU5UKFxuICAgICAgICAvXFx7LS8sXG4gICAgICAgIC8tXFx9LyxcbiAgICAgICAge1xuICAgICAgICAgIGNvbnRhaW5zOiBbJ3NlbGYnXVxuICAgICAgICB9XG4gICAgICApXG4gICAgXVxuICB9O1xuXG4gIGNvbnN0IFBSQUdNQSA9IHtcbiAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICBiZWdpbjogL1xcey0jLyxcbiAgICBlbmQ6IC8jLVxcfS9cbiAgfTtcblxuICBjb25zdCBQUkVQUk9DRVNTT1IgPSB7XG4gICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgYmVnaW46ICdeIycsXG4gICAgZW5kOiAnJCdcbiAgfTtcblxuICBjb25zdCBDT05TVFJVQ1RPUiA9IHtcbiAgICBjbGFzc05hbWU6ICd0eXBlJyxcbiAgICBiZWdpbjogJ1xcXFxiW0EtWl1bXFxcXHdcXCddKicsIC8vIFRPRE86IG90aGVyIGNvbnN0cnVjdG9ycyAoYnVpbGQtaW4sIGluZml4KS5cbiAgICByZWxldmFuY2U6IDBcbiAgfTtcblxuICBjb25zdCBMSVNUID0ge1xuICAgIGJlZ2luOiAnXFxcXCgnLFxuICAgIGVuZDogJ1xcXFwpJyxcbiAgICBpbGxlZ2FsOiAnXCInLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBQUkFHTUEsXG4gICAgICBQUkVQUk9DRVNTT1IsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3R5cGUnLFxuICAgICAgICBiZWdpbjogJ1xcXFxiW0EtWl1bXFxcXHddKihcXFxcKChcXFxcLlxcXFwufCx8XFxcXHcrKVxcXFwpKT8nXG4gICAgICB9LFxuICAgICAgaGxqcy5pbmhlcml0KGhsanMuVElUTEVfTU9ERSwge1xuICAgICAgICBiZWdpbjogJ1tfYS16XVtcXFxcd1xcJ10qJ1xuICAgICAgfSksXG4gICAgICBDT01NRU5UXG4gICAgXVxuICB9O1xuXG4gIGNvbnN0IFJFQ09SRCA9IHtcbiAgICBiZWdpbjogL1xcey8sXG4gICAgZW5kOiAvXFx9LyxcbiAgICBjb250YWluczogTElTVC5jb250YWluc1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgbmFtZTogJ0hhc2tlbGwnLFxuICAgIGFsaWFzZXM6IFsnaHMnXSxcbiAgICBrZXl3b3JkczpcbiAgICAgICdsZXQgaW4gaWYgdGhlbiBlbHNlIGNhc2Ugb2Ygd2hlcmUgZG8gbW9kdWxlIGltcG9ydCBoaWRpbmcgJyArXG4gICAgICAncXVhbGlmaWVkIHR5cGUgZGF0YSBuZXd0eXBlIGRlcml2aW5nIGNsYXNzIGluc3RhbmNlIGFzIGRlZmF1bHQgJyArXG4gICAgICAnaW5maXggaW5maXhsIGluZml4ciBmb3JlaWduIGV4cG9ydCBjY2FsbCBzdGRjYWxsIGNwbHVzcGx1cyAnICtcbiAgICAgICdqdm0gZG90bmV0IHNhZmUgdW5zYWZlIGZhbWlseSBmb3JhbGwgbWRvIHByb2MgcmVjJyxcbiAgICBjb250YWluczogW1xuICAgICAgLy8gVG9wLWxldmVsIGNvbnN0cnVjdGlvbnMuXG4gICAgICB7XG4gICAgICAgIGJlZ2luS2V5d29yZHM6ICdtb2R1bGUnLFxuICAgICAgICBlbmQ6ICd3aGVyZScsXG4gICAgICAgIGtleXdvcmRzOiAnbW9kdWxlIHdoZXJlJyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICBMSVNULFxuICAgICAgICAgIENPTU1FTlRcbiAgICAgICAgXSxcbiAgICAgICAgaWxsZWdhbDogJ1xcXFxXXFxcXC58OydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnXFxcXGJpbXBvcnRcXFxcYicsXG4gICAgICAgIGVuZDogJyQnLFxuICAgICAgICBrZXl3b3JkczogJ2ltcG9ydCBxdWFsaWZpZWQgYXMgaGlkaW5nJyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICBMSVNULFxuICAgICAgICAgIENPTU1FTlRcbiAgICAgICAgXSxcbiAgICAgICAgaWxsZWdhbDogJ1xcXFxXXFxcXC58OydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2NsYXNzJyxcbiAgICAgICAgYmVnaW46ICdeKFxcXFxzKik/KGNsYXNzfGluc3RhbmNlKVxcXFxiJyxcbiAgICAgICAgZW5kOiAnd2hlcmUnLFxuICAgICAgICBrZXl3b3JkczogJ2NsYXNzIGZhbWlseSBpbnN0YW5jZSB3aGVyZScsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgQ09OU1RSVUNUT1IsXG4gICAgICAgICAgTElTVCxcbiAgICAgICAgICBDT01NRU5UXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2NsYXNzJyxcbiAgICAgICAgYmVnaW46ICdcXFxcYihkYXRhfChuZXcpP3R5cGUpXFxcXGInLFxuICAgICAgICBlbmQ6ICckJyxcbiAgICAgICAga2V5d29yZHM6ICdkYXRhIGZhbWlseSB0eXBlIG5ld3R5cGUgZGVyaXZpbmcnLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIFBSQUdNQSxcbiAgICAgICAgICBDT05TVFJVQ1RPUixcbiAgICAgICAgICBMSVNULFxuICAgICAgICAgIFJFQ09SRCxcbiAgICAgICAgICBDT01NRU5UXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luS2V5d29yZHM6ICdkZWZhdWx0JyxcbiAgICAgICAgZW5kOiAnJCcsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgQ09OU1RSVUNUT1IsXG4gICAgICAgICAgTElTVCxcbiAgICAgICAgICBDT01NRU5UXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luS2V5d29yZHM6ICdpbmZpeCBpbmZpeGwgaW5maXhyJyxcbiAgICAgICAgZW5kOiAnJCcsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgaGxqcy5DX05VTUJFUl9NT0RFLFxuICAgICAgICAgIENPTU1FTlRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICdcXFxcYmZvcmVpZ25cXFxcYicsXG4gICAgICAgIGVuZDogJyQnLFxuICAgICAgICBrZXl3b3JkczogJ2ZvcmVpZ24gaW1wb3J0IGV4cG9ydCBjY2FsbCBzdGRjYWxsIGNwbHVzcGx1cyBqdm0gJyArXG4gICAgICAgICAgICAgICAgICAnZG90bmV0IHNhZmUgdW5zYWZlJyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICBDT05TVFJVQ1RPUixcbiAgICAgICAgICBobGpzLlFVT1RFX1NUUklOR19NT0RFLFxuICAgICAgICAgIENPTU1FTlRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgICAgIGJlZ2luOiAnIyFcXFxcL3VzclxcXFwvYmluXFxcXC9lbnZcXCBydW5oYXNrZWxsJyxcbiAgICAgICAgZW5kOiAnJCdcbiAgICAgIH0sXG4gICAgICAvLyBcIldoaXRlc3BhY2VzXCIuXG4gICAgICBQUkFHTUEsXG4gICAgICBQUkVQUk9DRVNTT1IsXG5cbiAgICAgIC8vIExpdGVyYWxzIGFuZCBuYW1lcy5cblxuICAgICAgLy8gVE9ETzogY2hhcmFjdGVycy5cbiAgICAgIGhsanMuUVVPVEVfU1RSSU5HX01PREUsXG4gICAgICBobGpzLkNfTlVNQkVSX01PREUsXG4gICAgICBDT05TVFJVQ1RPUixcbiAgICAgIGhsanMuaW5oZXJpdChobGpzLlRJVExFX01PREUsIHtcbiAgICAgICAgYmVnaW46ICdeW19hLXpdW1xcXFx3XFwnXSonXG4gICAgICB9KSxcbiAgICAgIENPTU1FTlQsXG4gICAgICB7IC8vIE5vIG1hcmt1cCwgcmVsZXZhbmNlIGJvb3N0ZXJcbiAgICAgICAgYmVnaW46ICctPnw8LSdcbiAgICAgIH1cbiAgICBdXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFza2VsbDtcbiJdLCJzb3VyY2VSb290IjoiIn0=