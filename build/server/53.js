exports.ids = [53];
exports.modules = {

/***/ "./node_modules/highlight.js/lib/languages/elm.js":
/*!********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/elm.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Elm
Author: Janis Voigtlaender <janis.voigtlaender@gmail.com>
Website: https://elm-lang.org
Category: functional
*/

/** @type LanguageFn */
function elm(hljs) {
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

  const CONSTRUCTOR = {
    className: 'type',
    begin: '\\b[A-Z][\\w\']*', // TODO: other constructors (built-in, infix).
    relevance: 0
  };

  const LIST = {
    begin: '\\(',
    end: '\\)',
    illegal: '"',
    contains: [
      {
        className: 'type',
        begin: '\\b[A-Z][\\w]*(\\((\\.\\.|,|\\w+)\\))?'
      },
      COMMENT
    ]
  };

  const RECORD = {
    begin: /\{/,
    end: /\}/,
    contains: LIST.contains
  };

  const CHARACTER = {
    className: 'string',
    begin: '\'\\\\?.',
    end: '\'',
    illegal: '.'
  };

  return {
    name: 'Elm',
    keywords:
      'let in if then else case of where module import exposing ' +
      'type alias as infix infixl infixr port effect command subscription',
    contains: [

      // Top-level constructions.

      {
        beginKeywords: 'port effect module',
        end: 'exposing',
        keywords: 'port effect module where command subscription exposing',
        contains: [
          LIST,
          COMMENT
        ],
        illegal: '\\W\\.|;'
      },
      {
        begin: 'import',
        end: '$',
        keywords: 'import as exposing',
        contains: [
          LIST,
          COMMENT
        ],
        illegal: '\\W\\.|;'
      },
      {
        begin: 'type',
        end: '$',
        keywords: 'type alias',
        contains: [
          CONSTRUCTOR,
          LIST,
          RECORD,
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
        begin: 'port',
        end: '$',
        keywords: 'port',
        contains: [COMMENT]
      },

      // Literals and names.

      CHARACTER,
      hljs.QUOTE_STRING_MODE,
      hljs.C_NUMBER_MODE,
      CONSTRUCTOR,
      hljs.inherit(hljs.TITLE_MODE, {
        begin: '^[_a-z][\\w\']*'
      }),
      COMMENT,

      {
        begin: '->|<-'
      } // No markup, relevance booster
    ],
    illegal: /;/
  };
}

module.exports = elm;


/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvZWxtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGNBQWM7QUFDZCxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUIsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUIsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7O0FBRUEiLCJmaWxlIjoiNTMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuTGFuZ3VhZ2U6IEVsbVxuQXV0aG9yOiBKYW5pcyBWb2lndGxhZW5kZXIgPGphbmlzLnZvaWd0bGFlbmRlckBnbWFpbC5jb20+XG5XZWJzaXRlOiBodHRwczovL2VsbS1sYW5nLm9yZ1xuQ2F0ZWdvcnk6IGZ1bmN0aW9uYWxcbiovXG5cbi8qKiBAdHlwZSBMYW5ndWFnZUZuICovXG5mdW5jdGlvbiBlbG0oaGxqcykge1xuICBjb25zdCBDT01NRU5UID0ge1xuICAgIHZhcmlhbnRzOiBbXG4gICAgICBobGpzLkNPTU1FTlQoJy0tJywgJyQnKSxcbiAgICAgIGhsanMuQ09NTUVOVChcbiAgICAgICAgL1xcey0vLFxuICAgICAgICAvLVxcfS8sXG4gICAgICAgIHtcbiAgICAgICAgICBjb250YWluczogWydzZWxmJ11cbiAgICAgICAgfVxuICAgICAgKVxuICAgIF1cbiAgfTtcblxuICBjb25zdCBDT05TVFJVQ1RPUiA9IHtcbiAgICBjbGFzc05hbWU6ICd0eXBlJyxcbiAgICBiZWdpbjogJ1xcXFxiW0EtWl1bXFxcXHdcXCddKicsIC8vIFRPRE86IG90aGVyIGNvbnN0cnVjdG9ycyAoYnVpbHQtaW4sIGluZml4KS5cbiAgICByZWxldmFuY2U6IDBcbiAgfTtcblxuICBjb25zdCBMSVNUID0ge1xuICAgIGJlZ2luOiAnXFxcXCgnLFxuICAgIGVuZDogJ1xcXFwpJyxcbiAgICBpbGxlZ2FsOiAnXCInLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3R5cGUnLFxuICAgICAgICBiZWdpbjogJ1xcXFxiW0EtWl1bXFxcXHddKihcXFxcKChcXFxcLlxcXFwufCx8XFxcXHcrKVxcXFwpKT8nXG4gICAgICB9LFxuICAgICAgQ09NTUVOVFxuICAgIF1cbiAgfTtcblxuICBjb25zdCBSRUNPUkQgPSB7XG4gICAgYmVnaW46IC9cXHsvLFxuICAgIGVuZDogL1xcfS8sXG4gICAgY29udGFpbnM6IExJU1QuY29udGFpbnNcbiAgfTtcblxuICBjb25zdCBDSEFSQUNURVIgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICBiZWdpbjogJ1xcJ1xcXFxcXFxcPy4nLFxuICAgIGVuZDogJ1xcJycsXG4gICAgaWxsZWdhbDogJy4nXG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnRWxtJyxcbiAgICBrZXl3b3JkczpcbiAgICAgICdsZXQgaW4gaWYgdGhlbiBlbHNlIGNhc2Ugb2Ygd2hlcmUgbW9kdWxlIGltcG9ydCBleHBvc2luZyAnICtcbiAgICAgICd0eXBlIGFsaWFzIGFzIGluZml4IGluZml4bCBpbmZpeHIgcG9ydCBlZmZlY3QgY29tbWFuZCBzdWJzY3JpcHRpb24nLFxuICAgIGNvbnRhaW5zOiBbXG5cbiAgICAgIC8vIFRvcC1sZXZlbCBjb25zdHJ1Y3Rpb25zLlxuXG4gICAgICB7XG4gICAgICAgIGJlZ2luS2V5d29yZHM6ICdwb3J0IGVmZmVjdCBtb2R1bGUnLFxuICAgICAgICBlbmQ6ICdleHBvc2luZycsXG4gICAgICAgIGtleXdvcmRzOiAncG9ydCBlZmZlY3QgbW9kdWxlIHdoZXJlIGNvbW1hbmQgc3Vic2NyaXB0aW9uIGV4cG9zaW5nJyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICBMSVNULFxuICAgICAgICAgIENPTU1FTlRcbiAgICAgICAgXSxcbiAgICAgICAgaWxsZWdhbDogJ1xcXFxXXFxcXC58OydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnaW1wb3J0JyxcbiAgICAgICAgZW5kOiAnJCcsXG4gICAgICAgIGtleXdvcmRzOiAnaW1wb3J0IGFzIGV4cG9zaW5nJyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICBMSVNULFxuICAgICAgICAgIENPTU1FTlRcbiAgICAgICAgXSxcbiAgICAgICAgaWxsZWdhbDogJ1xcXFxXXFxcXC58OydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAndHlwZScsXG4gICAgICAgIGVuZDogJyQnLFxuICAgICAgICBrZXl3b3JkczogJ3R5cGUgYWxpYXMnLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIENPTlNUUlVDVE9SLFxuICAgICAgICAgIExJU1QsXG4gICAgICAgICAgUkVDT1JELFxuICAgICAgICAgIENPTU1FTlRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW5LZXl3b3JkczogJ2luZml4IGluZml4bCBpbmZpeHInLFxuICAgICAgICBlbmQ6ICckJyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICBobGpzLkNfTlVNQkVSX01PREUsXG4gICAgICAgICAgQ09NTUVOVFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogJ3BvcnQnLFxuICAgICAgICBlbmQ6ICckJyxcbiAgICAgICAga2V5d29yZHM6ICdwb3J0JyxcbiAgICAgICAgY29udGFpbnM6IFtDT01NRU5UXVxuICAgICAgfSxcblxuICAgICAgLy8gTGl0ZXJhbHMgYW5kIG5hbWVzLlxuXG4gICAgICBDSEFSQUNURVIsXG4gICAgICBobGpzLlFVT1RFX1NUUklOR19NT0RFLFxuICAgICAgaGxqcy5DX05VTUJFUl9NT0RFLFxuICAgICAgQ09OU1RSVUNUT1IsXG4gICAgICBobGpzLmluaGVyaXQoaGxqcy5USVRMRV9NT0RFLCB7XG4gICAgICAgIGJlZ2luOiAnXltfYS16XVtcXFxcd1xcJ10qJ1xuICAgICAgfSksXG4gICAgICBDT01NRU5ULFxuXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnLT58PC0nXG4gICAgICB9IC8vIE5vIG1hcmt1cCwgcmVsZXZhbmNlIGJvb3N0ZXJcbiAgICBdLFxuICAgIGlsbGVnYWw6IC87L1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVsbTtcbiJdLCJzb3VyY2VSb290IjoiIn0=