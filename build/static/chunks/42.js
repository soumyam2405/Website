(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[42],{

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

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2RhcnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLGNBQWM7QUFDZCxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0RBQStELEVBQUU7O0FBRWpFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLEdBQUc7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoic3RhdGljL2NodW5rcy80Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5MYW5ndWFnZTogRGFydFxuUmVxdWlyZXM6IG1hcmtkb3duLmpzXG5BdXRob3I6IE1heGltIERpa3VuIDxkaWttYXhAZ21haWwuY29tPlxuRGVzY3JpcHRpb246IERhcnQgYSBtb2Rlcm4sIG9iamVjdC1vcmllbnRlZCBsYW5ndWFnZSBkZXZlbG9wZWQgYnkgR29vZ2xlLiBGb3IgbW9yZSBpbmZvcm1hdGlvbiBzZWUgaHR0cHM6Ly93d3cuZGFydGxhbmcub3JnL1xuV2Vic2l0ZTogaHR0cHM6Ly9kYXJ0LmRldlxuQ2F0ZWdvcnk6IHNjcmlwdGluZ1xuKi9cblxuLyoqIEB0eXBlIExhbmd1YWdlRm4gKi9cbmZ1bmN0aW9uIGRhcnQoaGxqcykge1xuICBjb25zdCBTVUJTVCA9IHtcbiAgICBjbGFzc05hbWU6ICdzdWJzdCcsXG4gICAgdmFyaWFudHM6IFt7XG4gICAgICBiZWdpbjogJ1xcXFwkW0EtWmEtejAtOV9dKydcbiAgICB9XVxuICB9O1xuXG4gIGNvbnN0IEJSQUNFRF9TVUJTVCA9IHtcbiAgICBjbGFzc05hbWU6ICdzdWJzdCcsXG4gICAgdmFyaWFudHM6IFt7XG4gICAgICBiZWdpbjogL1xcJFxcey8sXG4gICAgICBlbmQ6IC9cXH0vXG4gICAgfV0sXG4gICAga2V5d29yZHM6ICd0cnVlIGZhbHNlIG51bGwgdGhpcyBpcyBuZXcgc3VwZXInXG4gIH07XG5cbiAgY29uc3QgU1RSSU5HID0ge1xuICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgdmFyaWFudHM6IFtcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICdyXFwnXFwnXFwnJyxcbiAgICAgICAgZW5kOiAnXFwnXFwnXFwnJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICdyXCJcIlwiJyxcbiAgICAgICAgZW5kOiAnXCJcIlwiJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICdyXFwnJyxcbiAgICAgICAgZW5kOiAnXFwnJyxcbiAgICAgICAgaWxsZWdhbDogJ1xcXFxuJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICdyXCInLFxuICAgICAgICBlbmQ6ICdcIicsXG4gICAgICAgIGlsbGVnYWw6ICdcXFxcbidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnXFwnXFwnXFwnJyxcbiAgICAgICAgZW5kOiAnXFwnXFwnXFwnJyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICBobGpzLkJBQ0tTTEFTSF9FU0NBUEUsXG4gICAgICAgICAgU1VCU1QsXG4gICAgICAgICAgQlJBQ0VEX1NVQlNUXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnXCJcIlwiJyxcbiAgICAgICAgZW5kOiAnXCJcIlwiJyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICBobGpzLkJBQ0tTTEFTSF9FU0NBUEUsXG4gICAgICAgICAgU1VCU1QsXG4gICAgICAgICAgQlJBQ0VEX1NVQlNUXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnXFwnJyxcbiAgICAgICAgZW5kOiAnXFwnJyxcbiAgICAgICAgaWxsZWdhbDogJ1xcXFxuJyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICBobGpzLkJBQ0tTTEFTSF9FU0NBUEUsXG4gICAgICAgICAgU1VCU1QsXG4gICAgICAgICAgQlJBQ0VEX1NVQlNUXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnXCInLFxuICAgICAgICBlbmQ6ICdcIicsXG4gICAgICAgIGlsbGVnYWw6ICdcXFxcbicsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgaGxqcy5CQUNLU0xBU0hfRVNDQVBFLFxuICAgICAgICAgIFNVQlNULFxuICAgICAgICAgIEJSQUNFRF9TVUJTVFxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9O1xuICBCUkFDRURfU1VCU1QuY29udGFpbnMgPSBbXG4gICAgaGxqcy5DX05VTUJFUl9NT0RFLFxuICAgIFNUUklOR1xuICBdO1xuXG4gIGNvbnN0IEJVSUxUX0lOX1RZUEVTID0gW1xuICAgIC8vIGRhcnQ6Y29yZVxuICAgICdDb21wYXJhYmxlJyxcbiAgICAnRGF0ZVRpbWUnLFxuICAgICdEdXJhdGlvbicsXG4gICAgJ0Z1bmN0aW9uJyxcbiAgICAnSXRlcmFibGUnLFxuICAgICdJdGVyYXRvcicsXG4gICAgJ0xpc3QnLFxuICAgICdNYXAnLFxuICAgICdNYXRjaCcsXG4gICAgJ09iamVjdCcsXG4gICAgJ1BhdHRlcm4nLFxuICAgICdSZWdFeHAnLFxuICAgICdTZXQnLFxuICAgICdTdG9wd2F0Y2gnLFxuICAgICdTdHJpbmcnLFxuICAgICdTdHJpbmdCdWZmZXInLFxuICAgICdTdHJpbmdTaW5rJyxcbiAgICAnU3ltYm9sJyxcbiAgICAnVHlwZScsXG4gICAgJ1VyaScsXG4gICAgJ2Jvb2wnLFxuICAgICdkb3VibGUnLFxuICAgICdpbnQnLFxuICAgICdudW0nLFxuICAgIC8vIGRhcnQ6aHRtbFxuICAgICdFbGVtZW50JyxcbiAgICAnRWxlbWVudExpc3QnXG4gIF07XG4gIGNvbnN0IE5VTExBQkxFX0JVSUxUX0lOX1RZUEVTID0gQlVJTFRfSU5fVFlQRVMubWFwKChlKSA9PiBgJHtlfT9gKTtcblxuICBjb25zdCBLRVlXT1JEUyA9IHtcbiAgICBrZXl3b3JkOiAnYWJzdHJhY3QgYXMgYXNzZXJ0IGFzeW5jIGF3YWl0IGJyZWFrIGNhc2UgY2F0Y2ggY2xhc3MgY29uc3QgY29udGludWUgY292YXJpYW50IGRlZmF1bHQgZGVmZXJyZWQgZG8gJyArXG4gICAgICAnZHluYW1pYyBlbHNlIGVudW0gZXhwb3J0IGV4dGVuZHMgZXh0ZW5zaW9uIGV4dGVybmFsIGZhY3RvcnkgZmFsc2UgZmluYWwgZmluYWxseSBmb3IgRnVuY3Rpb24gZ2V0IGhpZGUgaWYgJyArXG4gICAgICAnaW1wbGVtZW50cyBpbXBvcnQgaW4gaW5mZXJmYWNlIGlzIGxhdGUgbGlicmFyeSBtaXhpbiBuZXcgbnVsbCBvbiBvcGVyYXRvciBwYXJ0IHJlcXVpcmVkIHJldGhyb3cgcmV0dXJuIHNldCAnICtcbiAgICAgICdzaG93IHN0YXRpYyBzdXBlciBzd2l0Y2ggc3luYyB0aGlzIHRocm93IHRydWUgdHJ5IHR5cGVkZWYgdmFyIHZvaWQgd2hpbGUgd2l0aCB5aWVsZCcsXG4gICAgYnVpbHRfaW46XG4gICAgICBCVUlMVF9JTl9UWVBFU1xuICAgICAgICAuY29uY2F0KE5VTExBQkxFX0JVSUxUX0lOX1RZUEVTKVxuICAgICAgICAuY29uY2F0KFtcbiAgICAgICAgICAvLyBkYXJ0OmNvcmVcbiAgICAgICAgICAnTmV2ZXInLFxuICAgICAgICAgICdOdWxsJyxcbiAgICAgICAgICAnZHluYW1pYycsXG4gICAgICAgICAgJ3ByaW50JyxcbiAgICAgICAgICAvLyBkYXJ0Omh0bWxcbiAgICAgICAgICAnZG9jdW1lbnQnLFxuICAgICAgICAgICdxdWVyeVNlbGVjdG9yJyxcbiAgICAgICAgICAncXVlcnlTZWxlY3RvckFsbCcsXG4gICAgICAgICAgJ3dpbmRvdydcbiAgICAgICAgXSksXG4gICAgJHBhdHRlcm46IC9bQS1aYS16XVtBLVphLXowLTlfXSpcXD8/L1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgbmFtZTogJ0RhcnQnLFxuICAgIGtleXdvcmRzOiBLRVlXT1JEUyxcbiAgICBjb250YWluczogW1xuICAgICAgU1RSSU5HLFxuICAgICAgaGxqcy5DT01NRU5UKFxuICAgICAgICAvXFwvXFwqXFwqKD8hXFwvKS8sXG4gICAgICAgIC9cXCpcXC8vLFxuICAgICAgICB7XG4gICAgICAgICAgc3ViTGFuZ3VhZ2U6ICdtYXJrZG93bicsXG4gICAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICAgIH1cbiAgICAgICksXG4gICAgICBobGpzLkNPTU1FTlQoXG4gICAgICAgIC9cXC97Myx9ID8vLFxuICAgICAgICAvJC8sIHtcbiAgICAgICAgICBjb250YWluczogW3tcbiAgICAgICAgICAgIHN1Ykxhbmd1YWdlOiAnbWFya2Rvd24nLFxuICAgICAgICAgICAgYmVnaW46ICcuJyxcbiAgICAgICAgICAgIGVuZDogJyQnLFxuICAgICAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICAgICAgfV1cbiAgICAgICAgfVxuICAgICAgKSxcbiAgICAgIGhsanMuQ19MSU5FX0NPTU1FTlRfTU9ERSxcbiAgICAgIGhsanMuQ19CTE9DS19DT01NRU5UX01PREUsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2NsYXNzJyxcbiAgICAgICAgYmVnaW5LZXl3b3JkczogJ2NsYXNzIGludGVyZmFjZScsXG4gICAgICAgIGVuZDogL1xcey8sXG4gICAgICAgIGV4Y2x1ZGVFbmQ6IHRydWUsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW5LZXl3b3JkczogJ2V4dGVuZHMgaW1wbGVtZW50cydcbiAgICAgICAgICB9LFxuICAgICAgICAgIGhsanMuVU5ERVJTQ09SRV9USVRMRV9NT0RFXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBobGpzLkNfTlVNQkVSX01PREUsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgICAgICBiZWdpbjogJ0BbQS1aYS16XSsnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogJz0+JyAvLyBObyBtYXJrdXAsIGp1c3QgYSByZWxldmFuY2UgYm9vc3RlclxuICAgICAgfVxuICAgIF1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkYXJ0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==