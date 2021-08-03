(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[191],{

/***/ "./node_modules/highlight.js/lib/languages/zephir.js":
/*!***********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/zephir.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 Language: Zephir
 Description: Zephir, an open source, high-level language designed to ease the creation and maintainability of extensions for PHP with a focus on type and memory safety.
 Author: Oleg Efimov <efimovov@gmail.com>
 Website: https://zephir-lang.com/en
 Audit: 2020
 */

/** @type LanguageFn */
function zephir(hljs) {
  const STRING = {
    className: 'string',
    contains: [ hljs.BACKSLASH_ESCAPE ],
    variants: [
      hljs.inherit(hljs.APOS_STRING_MODE, {
        illegal: null
      }),
      hljs.inherit(hljs.QUOTE_STRING_MODE, {
        illegal: null
      })
    ]
  };
  const TITLE_MODE = hljs.UNDERSCORE_TITLE_MODE;
  const NUMBER = {
    variants: [
      hljs.BINARY_NUMBER_MODE,
      hljs.C_NUMBER_MODE
    ]
  };
  const KEYWORDS =
    // classes and objects
    'namespace class interface use extends ' +
    'function return ' +
    'abstract final public protected private static deprecated ' +
    // error handling
    'throw try catch Exception ' +
    // keyword-ish things their website does NOT seem to highlight (in their own snippets)
    // 'typeof fetch in ' +
    // operators/helpers
    'echo empty isset instanceof unset ' +
    // assignment/variables
    'let var new const self ' +
    // control
    'require ' +
    'if else elseif switch case default ' +
    'do while loop for continue break ' +
    'likely unlikely ' +
    // magic constants
    // https://github.com/phalcon/zephir/blob/master/Library/Expression/Constants.php
    '__LINE__ __FILE__ __DIR__ __FUNCTION__ __CLASS__ __TRAIT__ __METHOD__ __NAMESPACE__ ' +
    // types - https://docs.zephir-lang.com/0.12/en/types
    'array boolean float double integer object resource string ' +
    'char long unsigned bool int uint ulong uchar ' +
    // built-ins
    'true false null undefined';

  return {
    name: 'Zephir',
    aliases: [ 'zep' ],
    keywords: KEYWORDS,
    contains: [
      hljs.C_LINE_COMMENT_MODE,
      hljs.COMMENT(
        /\/\*/,
        /\*\//,
        {
          contains: [
            {
              className: 'doctag',
              begin: /@[A-Za-z]+/
            }
          ]
        }
      ),
      {
        className: 'string',
        begin: /<<<['"]?\w+['"]?$/,
        end: /^\w+;/,
        contains: [ hljs.BACKSLASH_ESCAPE ]
      },
      {
        // swallow composed identifiers to avoid parsing them as keywords
        begin: /(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/
      },
      {
        className: 'function',
        beginKeywords: 'function fn',
        end: /[;{]/,
        excludeEnd: true,
        illegal: /\$|\[|%/,
        contains: [
          TITLE_MODE,
          {
            className: 'params',
            begin: /\(/,
            end: /\)/,
            keywords: KEYWORDS,
            contains: [
              'self',
              hljs.C_BLOCK_COMMENT_MODE,
              STRING,
              NUMBER
            ]
          }
        ]
      },
      {
        className: 'class',
        beginKeywords: 'class interface',
        end: /\{/,
        excludeEnd: true,
        illegal: /[:($"]/,
        contains: [
          {
            beginKeywords: 'extends implements'
          },
          TITLE_MODE
        ]
      },
      {
        beginKeywords: 'namespace',
        end: /;/,
        illegal: /[.']/,
        contains: [ TITLE_MODE ]
      },
      {
        beginKeywords: 'use',
        end: /;/,
        contains: [ TITLE_MODE ]
      },
      {
        begin: /=>/ // No markup, just a relevance booster
      },
      STRING,
      NUMBER
    ]
  };
}

module.exports = zephir;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3plcGhpci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvMTkxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiBMYW5ndWFnZTogWmVwaGlyXG4gRGVzY3JpcHRpb246IFplcGhpciwgYW4gb3BlbiBzb3VyY2UsIGhpZ2gtbGV2ZWwgbGFuZ3VhZ2UgZGVzaWduZWQgdG8gZWFzZSB0aGUgY3JlYXRpb24gYW5kIG1haW50YWluYWJpbGl0eSBvZiBleHRlbnNpb25zIGZvciBQSFAgd2l0aCBhIGZvY3VzIG9uIHR5cGUgYW5kIG1lbW9yeSBzYWZldHkuXG4gQXV0aG9yOiBPbGVnIEVmaW1vdiA8ZWZpbW92b3ZAZ21haWwuY29tPlxuIFdlYnNpdGU6IGh0dHBzOi8vemVwaGlyLWxhbmcuY29tL2VuXG4gQXVkaXQ6IDIwMjBcbiAqL1xuXG4vKiogQHR5cGUgTGFuZ3VhZ2VGbiAqL1xuZnVuY3Rpb24gemVwaGlyKGhsanMpIHtcbiAgY29uc3QgU1RSSU5HID0ge1xuICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgY29udGFpbnM6IFsgaGxqcy5CQUNLU0xBU0hfRVNDQVBFIF0sXG4gICAgdmFyaWFudHM6IFtcbiAgICAgIGhsanMuaW5oZXJpdChobGpzLkFQT1NfU1RSSU5HX01PREUsIHtcbiAgICAgICAgaWxsZWdhbDogbnVsbFxuICAgICAgfSksXG4gICAgICBobGpzLmluaGVyaXQoaGxqcy5RVU9URV9TVFJJTkdfTU9ERSwge1xuICAgICAgICBpbGxlZ2FsOiBudWxsXG4gICAgICB9KVxuICAgIF1cbiAgfTtcbiAgY29uc3QgVElUTEVfTU9ERSA9IGhsanMuVU5ERVJTQ09SRV9USVRMRV9NT0RFO1xuICBjb25zdCBOVU1CRVIgPSB7XG4gICAgdmFyaWFudHM6IFtcbiAgICAgIGhsanMuQklOQVJZX05VTUJFUl9NT0RFLFxuICAgICAgaGxqcy5DX05VTUJFUl9NT0RFXG4gICAgXVxuICB9O1xuICBjb25zdCBLRVlXT1JEUyA9XG4gICAgLy8gY2xhc3NlcyBhbmQgb2JqZWN0c1xuICAgICduYW1lc3BhY2UgY2xhc3MgaW50ZXJmYWNlIHVzZSBleHRlbmRzICcgK1xuICAgICdmdW5jdGlvbiByZXR1cm4gJyArXG4gICAgJ2Fic3RyYWN0IGZpbmFsIHB1YmxpYyBwcm90ZWN0ZWQgcHJpdmF0ZSBzdGF0aWMgZGVwcmVjYXRlZCAnICtcbiAgICAvLyBlcnJvciBoYW5kbGluZ1xuICAgICd0aHJvdyB0cnkgY2F0Y2ggRXhjZXB0aW9uICcgK1xuICAgIC8vIGtleXdvcmQtaXNoIHRoaW5ncyB0aGVpciB3ZWJzaXRlIGRvZXMgTk9UIHNlZW0gdG8gaGlnaGxpZ2h0IChpbiB0aGVpciBvd24gc25pcHBldHMpXG4gICAgLy8gJ3R5cGVvZiBmZXRjaCBpbiAnICtcbiAgICAvLyBvcGVyYXRvcnMvaGVscGVyc1xuICAgICdlY2hvIGVtcHR5IGlzc2V0IGluc3RhbmNlb2YgdW5zZXQgJyArXG4gICAgLy8gYXNzaWdubWVudC92YXJpYWJsZXNcbiAgICAnbGV0IHZhciBuZXcgY29uc3Qgc2VsZiAnICtcbiAgICAvLyBjb250cm9sXG4gICAgJ3JlcXVpcmUgJyArXG4gICAgJ2lmIGVsc2UgZWxzZWlmIHN3aXRjaCBjYXNlIGRlZmF1bHQgJyArXG4gICAgJ2RvIHdoaWxlIGxvb3AgZm9yIGNvbnRpbnVlIGJyZWFrICcgK1xuICAgICdsaWtlbHkgdW5saWtlbHkgJyArXG4gICAgLy8gbWFnaWMgY29uc3RhbnRzXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3BoYWxjb24vemVwaGlyL2Jsb2IvbWFzdGVyL0xpYnJhcnkvRXhwcmVzc2lvbi9Db25zdGFudHMucGhwXG4gICAgJ19fTElORV9fIF9fRklMRV9fIF9fRElSX18gX19GVU5DVElPTl9fIF9fQ0xBU1NfXyBfX1RSQUlUX18gX19NRVRIT0RfXyBfX05BTUVTUEFDRV9fICcgK1xuICAgIC8vIHR5cGVzIC0gaHR0cHM6Ly9kb2NzLnplcGhpci1sYW5nLmNvbS8wLjEyL2VuL3R5cGVzXG4gICAgJ2FycmF5IGJvb2xlYW4gZmxvYXQgZG91YmxlIGludGVnZXIgb2JqZWN0IHJlc291cmNlIHN0cmluZyAnICtcbiAgICAnY2hhciBsb25nIHVuc2lnbmVkIGJvb2wgaW50IHVpbnQgdWxvbmcgdWNoYXIgJyArXG4gICAgLy8gYnVpbHQtaW5zXG4gICAgJ3RydWUgZmFsc2UgbnVsbCB1bmRlZmluZWQnO1xuXG4gIHJldHVybiB7XG4gICAgbmFtZTogJ1plcGhpcicsXG4gICAgYWxpYXNlczogWyAnemVwJyBdLFxuICAgIGtleXdvcmRzOiBLRVlXT1JEUyxcbiAgICBjb250YWluczogW1xuICAgICAgaGxqcy5DX0xJTkVfQ09NTUVOVF9NT0RFLFxuICAgICAgaGxqcy5DT01NRU5UKFxuICAgICAgICAvXFwvXFwqLyxcbiAgICAgICAgL1xcKlxcLy8sXG4gICAgICAgIHtcbiAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjbGFzc05hbWU6ICdkb2N0YWcnLFxuICAgICAgICAgICAgICBiZWdpbjogL0BbQS1aYS16XSsvXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICApLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgICBiZWdpbjogLzw8PFsnXCJdP1xcdytbJ1wiXT8kLyxcbiAgICAgICAgZW5kOiAvXlxcdys7LyxcbiAgICAgICAgY29udGFpbnM6IFsgaGxqcy5CQUNLU0xBU0hfRVNDQVBFIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIC8vIHN3YWxsb3cgY29tcG9zZWQgaWRlbnRpZmllcnMgdG8gYXZvaWQgcGFyc2luZyB0aGVtIGFzIGtleXdvcmRzXG4gICAgICAgIGJlZ2luOiAvKDo6fC0+KStbYS16QS1aX1xceDdmLVxceGZmXVthLXpBLVowLTlfXFx4N2YtXFx4ZmZdKi9cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2Z1bmN0aW9uJyxcbiAgICAgICAgYmVnaW5LZXl3b3JkczogJ2Z1bmN0aW9uIGZuJyxcbiAgICAgICAgZW5kOiAvWzt7XS8sXG4gICAgICAgIGV4Y2x1ZGVFbmQ6IHRydWUsXG4gICAgICAgIGlsbGVnYWw6IC9cXCR8XFxbfCUvLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIFRJVExFX01PREUsXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAncGFyYW1zJyxcbiAgICAgICAgICAgIGJlZ2luOiAvXFwoLyxcbiAgICAgICAgICAgIGVuZDogL1xcKS8sXG4gICAgICAgICAgICBrZXl3b3JkczogS0VZV09SRFMsXG4gICAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgICAnc2VsZicsXG4gICAgICAgICAgICAgIGhsanMuQ19CTE9DS19DT01NRU5UX01PREUsXG4gICAgICAgICAgICAgIFNUUklORyxcbiAgICAgICAgICAgICAgTlVNQkVSXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdjbGFzcycsXG4gICAgICAgIGJlZ2luS2V5d29yZHM6ICdjbGFzcyBpbnRlcmZhY2UnLFxuICAgICAgICBlbmQ6IC9cXHsvLFxuICAgICAgICBleGNsdWRlRW5kOiB0cnVlLFxuICAgICAgICBpbGxlZ2FsOiAvWzooJFwiXS8sXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW5LZXl3b3JkczogJ2V4dGVuZHMgaW1wbGVtZW50cydcbiAgICAgICAgICB9LFxuICAgICAgICAgIFRJVExFX01PREVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW5LZXl3b3JkczogJ25hbWVzcGFjZScsXG4gICAgICAgIGVuZDogLzsvLFxuICAgICAgICBpbGxlZ2FsOiAvWy4nXS8sXG4gICAgICAgIGNvbnRhaW5zOiBbIFRJVExFX01PREUgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW5LZXl3b3JkczogJ3VzZScsXG4gICAgICAgIGVuZDogLzsvLFxuICAgICAgICBjb250YWluczogWyBUSVRMRV9NT0RFIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAvPT4vIC8vIE5vIG1hcmt1cCwganVzdCBhIHJlbGV2YW5jZSBib29zdGVyXG4gICAgICB9LFxuICAgICAgU1RSSU5HLFxuICAgICAgTlVNQkVSXG4gICAgXVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHplcGhpcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=