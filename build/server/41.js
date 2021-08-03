exports.ids = [41];
exports.modules = {

/***/ "./node_modules/highlight.js/lib/languages/dart.js":
/*!*********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/dart.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Dart
Requires: markdown.js
Author: Maxim Dikun <dikmax@gmail.com>
Description: Dart a modern, object-oriented language developed by Google. For more information see https://www.dartlang.org/
Website: https://dart.dev
Category: scripting
*/

/** @type LanguageFn */
function dart(hljs) {
  const SUBST = {
    className: 'subst',
    variants: [{
      begin: '\\$[A-Za-z0-9_]+'
    }]
  };

  const BRACED_SUBST = {
    className: 'subst',
    variants: [{
      begin: /\$\{/,
      end: /\}/
    }],
    keywords: 'true false null this is new super'
  };

  const STRING = {
    className: 'string',
    variants: [
      {
        begin: 'r\'\'\'',
        end: '\'\'\''
      },
      {
        begin: 'r"""',
        end: '"""'
      },
      {
        begin: 'r\'',
        end: '\'',
        illegal: '\\n'
      },
      {
        begin: 'r"',
        end: '"',
        illegal: '\\n'
      },
      {
        begin: '\'\'\'',
        end: '\'\'\'',
        contains: [
          hljs.BACKSLASH_ESCAPE,
          SUBST,
          BRACED_SUBST
        ]
      },
      {
        begin: '"""',
        end: '"""',
        contains: [
          hljs.BACKSLASH_ESCAPE,
          SUBST,
          BRACED_SUBST
        ]
      },
      {
        begin: '\'',
        end: '\'',
        illegal: '\\n',
        contains: [
          hljs.BACKSLASH_ESCAPE,
          SUBST,
          BRACED_SUBST
        ]
      },
      {
        begin: '"',
        end: '"',
        illegal: '\\n',
        contains: [
          hljs.BACKSLASH_ESCAPE,
          SUBST,
          BRACED_SUBST
        ]
      }
    ]
  };
  BRACED_SUBST.contains = [
    hljs.C_NUMBER_MODE,
    STRING
  ];

  const BUILT_IN_TYPES = [
    // dart:core
    'Comparable',
    'DateTime',
    'Duration',
    'Function',
    'Iterable',
    'Iterator',
    'List',
    'Map',
    'Match',
    'Object',
    'Pattern',
    'RegExp',
    'Set',
    'Stopwatch',
    'String',
    'StringBuffer',
    'StringSink',
    'Symbol',
    'Type',
    'Uri',
    'bool',
    'double',
    'int',
    'num',
    // dart:html
    'Element',
    'ElementList'
  ];
  const NULLABLE_BUILT_IN_TYPES = BUILT_IN_TYPES.map((e) => `${e}?`);

  const KEYWORDS = {
    keyword: 'abstract as assert async await break case catch class const continue covariant default deferred do ' +
      'dynamic else enum export extends extension external factory false final finally for Function get hide if ' +
      'implements import in inferface is late library mixin new null on operator part required rethrow return set ' +
      'show static super switch sync this throw true try typedef var void while with yield',
    built_in:
      BUILT_IN_TYPES
        .concat(NULLABLE_BUILT_IN_TYPES)
        .concat([
          // dart:core
          'Never',
          'Null',
          'dynamic',
          'print',
          // dart:html
          'document',
          'querySelector',
          'querySelectorAll',
          'window'
        ]),
    $pattern: /[A-Za-z][A-Za-z0-9_]*\??/
  };

  return {
    name: 'Dart',
    keywords: KEYWORDS,
    contains: [
      STRING,
      hljs.COMMENT(
        /\/\*\*(?!\/)/,
        /\*\//,
        {
          subLanguage: 'markdown',
          relevance: 0
        }
      ),
      hljs.COMMENT(
        /\/{3,} ?/,
        /$/, {
          contains: [{
            subLanguage: 'markdown',
            begin: '.',
            end: '$',
            relevance: 0
          }]
        }
      ),
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      {
        className: 'class',
        beginKeywords: 'class interface',
        end: /\{/,
        excludeEnd: true,
        contains: [
          {
            beginKeywords: 'extends implements'
          },
          hljs.UNDERSCORE_TITLE_MODE
        ]
      },
      hljs.C_NUMBER_MODE,
      {
        className: 'meta',
        begin: '@[A-Za-z]+'
      },
      {
        begin: '=>' // No markup, just a relevance booster
      }
    ]
  };
}

module.exports = dart;


/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvZGFydC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLGNBQWM7QUFDZCxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0RBQStELEVBQUU7O0FBRWpFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLEdBQUc7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiNDEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuTGFuZ3VhZ2U6IERhcnRcblJlcXVpcmVzOiBtYXJrZG93bi5qc1xuQXV0aG9yOiBNYXhpbSBEaWt1biA8ZGlrbWF4QGdtYWlsLmNvbT5cbkRlc2NyaXB0aW9uOiBEYXJ0IGEgbW9kZXJuLCBvYmplY3Qtb3JpZW50ZWQgbGFuZ3VhZ2UgZGV2ZWxvcGVkIGJ5IEdvb2dsZS4gRm9yIG1vcmUgaW5mb3JtYXRpb24gc2VlIGh0dHBzOi8vd3d3LmRhcnRsYW5nLm9yZy9cbldlYnNpdGU6IGh0dHBzOi8vZGFydC5kZXZcbkNhdGVnb3J5OiBzY3JpcHRpbmdcbiovXG5cbi8qKiBAdHlwZSBMYW5ndWFnZUZuICovXG5mdW5jdGlvbiBkYXJ0KGhsanMpIHtcbiAgY29uc3QgU1VCU1QgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3Vic3QnLFxuICAgIHZhcmlhbnRzOiBbe1xuICAgICAgYmVnaW46ICdcXFxcJFtBLVphLXowLTlfXSsnXG4gICAgfV1cbiAgfTtcblxuICBjb25zdCBCUkFDRURfU1VCU1QgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3Vic3QnLFxuICAgIHZhcmlhbnRzOiBbe1xuICAgICAgYmVnaW46IC9cXCRcXHsvLFxuICAgICAgZW5kOiAvXFx9L1xuICAgIH1dLFxuICAgIGtleXdvcmRzOiAndHJ1ZSBmYWxzZSBudWxsIHRoaXMgaXMgbmV3IHN1cGVyJ1xuICB9O1xuXG4gIGNvbnN0IFNUUklORyA9IHtcbiAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgIHZhcmlhbnRzOiBbXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnclxcJ1xcJ1xcJycsXG4gICAgICAgIGVuZDogJ1xcJ1xcJ1xcJydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnclwiXCJcIicsXG4gICAgICAgIGVuZDogJ1wiXCJcIidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnclxcJycsXG4gICAgICAgIGVuZDogJ1xcJycsXG4gICAgICAgIGlsbGVnYWw6ICdcXFxcbidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnclwiJyxcbiAgICAgICAgZW5kOiAnXCInLFxuICAgICAgICBpbGxlZ2FsOiAnXFxcXG4nXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogJ1xcJ1xcJ1xcJycsXG4gICAgICAgIGVuZDogJ1xcJ1xcJ1xcJycsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgaGxqcy5CQUNLU0xBU0hfRVNDQVBFLFxuICAgICAgICAgIFNVQlNULFxuICAgICAgICAgIEJSQUNFRF9TVUJTVFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogJ1wiXCJcIicsXG4gICAgICAgIGVuZDogJ1wiXCJcIicsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgaGxqcy5CQUNLU0xBU0hfRVNDQVBFLFxuICAgICAgICAgIFNVQlNULFxuICAgICAgICAgIEJSQUNFRF9TVUJTVFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogJ1xcJycsXG4gICAgICAgIGVuZDogJ1xcJycsXG4gICAgICAgIGlsbGVnYWw6ICdcXFxcbicsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgaGxqcy5CQUNLU0xBU0hfRVNDQVBFLFxuICAgICAgICAgIFNVQlNULFxuICAgICAgICAgIEJSQUNFRF9TVUJTVFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogJ1wiJyxcbiAgICAgICAgZW5kOiAnXCInLFxuICAgICAgICBpbGxlZ2FsOiAnXFxcXG4nLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIGhsanMuQkFDS1NMQVNIX0VTQ0FQRSxcbiAgICAgICAgICBTVUJTVCxcbiAgICAgICAgICBCUkFDRURfU1VCU1RcbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfTtcbiAgQlJBQ0VEX1NVQlNULmNvbnRhaW5zID0gW1xuICAgIGhsanMuQ19OVU1CRVJfTU9ERSxcbiAgICBTVFJJTkdcbiAgXTtcblxuICBjb25zdCBCVUlMVF9JTl9UWVBFUyA9IFtcbiAgICAvLyBkYXJ0OmNvcmVcbiAgICAnQ29tcGFyYWJsZScsXG4gICAgJ0RhdGVUaW1lJyxcbiAgICAnRHVyYXRpb24nLFxuICAgICdGdW5jdGlvbicsXG4gICAgJ0l0ZXJhYmxlJyxcbiAgICAnSXRlcmF0b3InLFxuICAgICdMaXN0JyxcbiAgICAnTWFwJyxcbiAgICAnTWF0Y2gnLFxuICAgICdPYmplY3QnLFxuICAgICdQYXR0ZXJuJyxcbiAgICAnUmVnRXhwJyxcbiAgICAnU2V0JyxcbiAgICAnU3RvcHdhdGNoJyxcbiAgICAnU3RyaW5nJyxcbiAgICAnU3RyaW5nQnVmZmVyJyxcbiAgICAnU3RyaW5nU2luaycsXG4gICAgJ1N5bWJvbCcsXG4gICAgJ1R5cGUnLFxuICAgICdVcmknLFxuICAgICdib29sJyxcbiAgICAnZG91YmxlJyxcbiAgICAnaW50JyxcbiAgICAnbnVtJyxcbiAgICAvLyBkYXJ0Omh0bWxcbiAgICAnRWxlbWVudCcsXG4gICAgJ0VsZW1lbnRMaXN0J1xuICBdO1xuICBjb25zdCBOVUxMQUJMRV9CVUlMVF9JTl9UWVBFUyA9IEJVSUxUX0lOX1RZUEVTLm1hcCgoZSkgPT4gYCR7ZX0/YCk7XG5cbiAgY29uc3QgS0VZV09SRFMgPSB7XG4gICAga2V5d29yZDogJ2Fic3RyYWN0IGFzIGFzc2VydCBhc3luYyBhd2FpdCBicmVhayBjYXNlIGNhdGNoIGNsYXNzIGNvbnN0IGNvbnRpbnVlIGNvdmFyaWFudCBkZWZhdWx0IGRlZmVycmVkIGRvICcgK1xuICAgICAgJ2R5bmFtaWMgZWxzZSBlbnVtIGV4cG9ydCBleHRlbmRzIGV4dGVuc2lvbiBleHRlcm5hbCBmYWN0b3J5IGZhbHNlIGZpbmFsIGZpbmFsbHkgZm9yIEZ1bmN0aW9uIGdldCBoaWRlIGlmICcgK1xuICAgICAgJ2ltcGxlbWVudHMgaW1wb3J0IGluIGluZmVyZmFjZSBpcyBsYXRlIGxpYnJhcnkgbWl4aW4gbmV3IG51bGwgb24gb3BlcmF0b3IgcGFydCByZXF1aXJlZCByZXRocm93IHJldHVybiBzZXQgJyArXG4gICAgICAnc2hvdyBzdGF0aWMgc3VwZXIgc3dpdGNoIHN5bmMgdGhpcyB0aHJvdyB0cnVlIHRyeSB0eXBlZGVmIHZhciB2b2lkIHdoaWxlIHdpdGggeWllbGQnLFxuICAgIGJ1aWx0X2luOlxuICAgICAgQlVJTFRfSU5fVFlQRVNcbiAgICAgICAgLmNvbmNhdChOVUxMQUJMRV9CVUlMVF9JTl9UWVBFUylcbiAgICAgICAgLmNvbmNhdChbXG4gICAgICAgICAgLy8gZGFydDpjb3JlXG4gICAgICAgICAgJ05ldmVyJyxcbiAgICAgICAgICAnTnVsbCcsXG4gICAgICAgICAgJ2R5bmFtaWMnLFxuICAgICAgICAgICdwcmludCcsXG4gICAgICAgICAgLy8gZGFydDpodG1sXG4gICAgICAgICAgJ2RvY3VtZW50JyxcbiAgICAgICAgICAncXVlcnlTZWxlY3RvcicsXG4gICAgICAgICAgJ3F1ZXJ5U2VsZWN0b3JBbGwnLFxuICAgICAgICAgICd3aW5kb3cnXG4gICAgICAgIF0pLFxuICAgICRwYXR0ZXJuOiAvW0EtWmEtel1bQS1aYS16MC05X10qXFw/Py9cbiAgfTtcblxuICByZXR1cm4ge1xuICAgIG5hbWU6ICdEYXJ0JyxcbiAgICBrZXl3b3JkczogS0VZV09SRFMsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIFNUUklORyxcbiAgICAgIGhsanMuQ09NTUVOVChcbiAgICAgICAgL1xcL1xcKlxcKig/IVxcLykvLFxuICAgICAgICAvXFwqXFwvLyxcbiAgICAgICAge1xuICAgICAgICAgIHN1Ykxhbmd1YWdlOiAnbWFya2Rvd24nLFxuICAgICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgICB9XG4gICAgICApLFxuICAgICAgaGxqcy5DT01NRU5UKFxuICAgICAgICAvXFwvezMsfSA/LyxcbiAgICAgICAgLyQvLCB7XG4gICAgICAgICAgY29udGFpbnM6IFt7XG4gICAgICAgICAgICBzdWJMYW5ndWFnZTogJ21hcmtkb3duJyxcbiAgICAgICAgICAgIGJlZ2luOiAnLicsXG4gICAgICAgICAgICBlbmQ6ICckJyxcbiAgICAgICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgICAgIH1dXG4gICAgICAgIH1cbiAgICAgICksXG4gICAgICBobGpzLkNfTElORV9DT01NRU5UX01PREUsXG4gICAgICBobGpzLkNfQkxPQ0tfQ09NTUVOVF9NT0RFLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdjbGFzcycsXG4gICAgICAgIGJlZ2luS2V5d29yZHM6ICdjbGFzcyBpbnRlcmZhY2UnLFxuICAgICAgICBlbmQ6IC9cXHsvLFxuICAgICAgICBleGNsdWRlRW5kOiB0cnVlLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luS2V5d29yZHM6ICdleHRlbmRzIGltcGxlbWVudHMnXG4gICAgICAgICAgfSxcbiAgICAgICAgICBobGpzLlVOREVSU0NPUkVfVElUTEVfTU9ERVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgaGxqcy5DX05VTUJFUl9NT0RFLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICAgICAgYmVnaW46ICdAW0EtWmEtel0rJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICc9PicgLy8gTm8gbWFya3VwLCBqdXN0IGEgcmVsZXZhbmNlIGJvb3N0ZXJcbiAgICAgIH1cbiAgICBdXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZGFydDtcbiJdLCJzb3VyY2VSb290IjoiIn0=