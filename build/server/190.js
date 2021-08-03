exports.ids = [190];
exports.modules = {

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

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvemVwaGlyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6IjE5MC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gTGFuZ3VhZ2U6IFplcGhpclxuIERlc2NyaXB0aW9uOiBaZXBoaXIsIGFuIG9wZW4gc291cmNlLCBoaWdoLWxldmVsIGxhbmd1YWdlIGRlc2lnbmVkIHRvIGVhc2UgdGhlIGNyZWF0aW9uIGFuZCBtYWludGFpbmFiaWxpdHkgb2YgZXh0ZW5zaW9ucyBmb3IgUEhQIHdpdGggYSBmb2N1cyBvbiB0eXBlIGFuZCBtZW1vcnkgc2FmZXR5LlxuIEF1dGhvcjogT2xlZyBFZmltb3YgPGVmaW1vdm92QGdtYWlsLmNvbT5cbiBXZWJzaXRlOiBodHRwczovL3plcGhpci1sYW5nLmNvbS9lblxuIEF1ZGl0OiAyMDIwXG4gKi9cblxuLyoqIEB0eXBlIExhbmd1YWdlRm4gKi9cbmZ1bmN0aW9uIHplcGhpcihobGpzKSB7XG4gIGNvbnN0IFNUUklORyA9IHtcbiAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgIGNvbnRhaW5zOiBbIGhsanMuQkFDS1NMQVNIX0VTQ0FQRSBdLFxuICAgIHZhcmlhbnRzOiBbXG4gICAgICBobGpzLmluaGVyaXQoaGxqcy5BUE9TX1NUUklOR19NT0RFLCB7XG4gICAgICAgIGlsbGVnYWw6IG51bGxcbiAgICAgIH0pLFxuICAgICAgaGxqcy5pbmhlcml0KGhsanMuUVVPVEVfU1RSSU5HX01PREUsIHtcbiAgICAgICAgaWxsZWdhbDogbnVsbFxuICAgICAgfSlcbiAgICBdXG4gIH07XG4gIGNvbnN0IFRJVExFX01PREUgPSBobGpzLlVOREVSU0NPUkVfVElUTEVfTU9ERTtcbiAgY29uc3QgTlVNQkVSID0ge1xuICAgIHZhcmlhbnRzOiBbXG4gICAgICBobGpzLkJJTkFSWV9OVU1CRVJfTU9ERSxcbiAgICAgIGhsanMuQ19OVU1CRVJfTU9ERVxuICAgIF1cbiAgfTtcbiAgY29uc3QgS0VZV09SRFMgPVxuICAgIC8vIGNsYXNzZXMgYW5kIG9iamVjdHNcbiAgICAnbmFtZXNwYWNlIGNsYXNzIGludGVyZmFjZSB1c2UgZXh0ZW5kcyAnICtcbiAgICAnZnVuY3Rpb24gcmV0dXJuICcgK1xuICAgICdhYnN0cmFjdCBmaW5hbCBwdWJsaWMgcHJvdGVjdGVkIHByaXZhdGUgc3RhdGljIGRlcHJlY2F0ZWQgJyArXG4gICAgLy8gZXJyb3IgaGFuZGxpbmdcbiAgICAndGhyb3cgdHJ5IGNhdGNoIEV4Y2VwdGlvbiAnICtcbiAgICAvLyBrZXl3b3JkLWlzaCB0aGluZ3MgdGhlaXIgd2Vic2l0ZSBkb2VzIE5PVCBzZWVtIHRvIGhpZ2hsaWdodCAoaW4gdGhlaXIgb3duIHNuaXBwZXRzKVxuICAgIC8vICd0eXBlb2YgZmV0Y2ggaW4gJyArXG4gICAgLy8gb3BlcmF0b3JzL2hlbHBlcnNcbiAgICAnZWNobyBlbXB0eSBpc3NldCBpbnN0YW5jZW9mIHVuc2V0ICcgK1xuICAgIC8vIGFzc2lnbm1lbnQvdmFyaWFibGVzXG4gICAgJ2xldCB2YXIgbmV3IGNvbnN0IHNlbGYgJyArXG4gICAgLy8gY29udHJvbFxuICAgICdyZXF1aXJlICcgK1xuICAgICdpZiBlbHNlIGVsc2VpZiBzd2l0Y2ggY2FzZSBkZWZhdWx0ICcgK1xuICAgICdkbyB3aGlsZSBsb29wIGZvciBjb250aW51ZSBicmVhayAnICtcbiAgICAnbGlrZWx5IHVubGlrZWx5ICcgK1xuICAgIC8vIG1hZ2ljIGNvbnN0YW50c1xuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9waGFsY29uL3plcGhpci9ibG9iL21hc3Rlci9MaWJyYXJ5L0V4cHJlc3Npb24vQ29uc3RhbnRzLnBocFxuICAgICdfX0xJTkVfXyBfX0ZJTEVfXyBfX0RJUl9fIF9fRlVOQ1RJT05fXyBfX0NMQVNTX18gX19UUkFJVF9fIF9fTUVUSE9EX18gX19OQU1FU1BBQ0VfXyAnICtcbiAgICAvLyB0eXBlcyAtIGh0dHBzOi8vZG9jcy56ZXBoaXItbGFuZy5jb20vMC4xMi9lbi90eXBlc1xuICAgICdhcnJheSBib29sZWFuIGZsb2F0IGRvdWJsZSBpbnRlZ2VyIG9iamVjdCByZXNvdXJjZSBzdHJpbmcgJyArXG4gICAgJ2NoYXIgbG9uZyB1bnNpZ25lZCBib29sIGludCB1aW50IHVsb25nIHVjaGFyICcgK1xuICAgIC8vIGJ1aWx0LWluc1xuICAgICd0cnVlIGZhbHNlIG51bGwgdW5kZWZpbmVkJztcblxuICByZXR1cm4ge1xuICAgIG5hbWU6ICdaZXBoaXInLFxuICAgIGFsaWFzZXM6IFsgJ3plcCcgXSxcbiAgICBrZXl3b3JkczogS0VZV09SRFMsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIGhsanMuQ19MSU5FX0NPTU1FTlRfTU9ERSxcbiAgICAgIGhsanMuQ09NTUVOVChcbiAgICAgICAgL1xcL1xcKi8sXG4gICAgICAgIC9cXCpcXC8vLFxuICAgICAgICB7XG4gICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnZG9jdGFnJyxcbiAgICAgICAgICAgICAgYmVnaW46IC9AW0EtWmEtel0rL1xuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgKSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICAgICAgYmVnaW46IC88PDxbJ1wiXT9cXHcrWydcIl0/JC8sXG4gICAgICAgIGVuZDogL15cXHcrOy8sXG4gICAgICAgIGNvbnRhaW5zOiBbIGhsanMuQkFDS1NMQVNIX0VTQ0FQRSBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAvLyBzd2FsbG93IGNvbXBvc2VkIGlkZW50aWZpZXJzIHRvIGF2b2lkIHBhcnNpbmcgdGhlbSBhcyBrZXl3b3Jkc1xuICAgICAgICBiZWdpbjogLyg6OnwtPikrW2EtekEtWl9cXHg3Zi1cXHhmZl1bYS16QS1aMC05X1xceDdmLVxceGZmXSovXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdmdW5jdGlvbicsXG4gICAgICAgIGJlZ2luS2V5d29yZHM6ICdmdW5jdGlvbiBmbicsXG4gICAgICAgIGVuZDogL1s7e10vLFxuICAgICAgICBleGNsdWRlRW5kOiB0cnVlLFxuICAgICAgICBpbGxlZ2FsOiAvXFwkfFxcW3wlLyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICBUSVRMRV9NT0RFLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3BhcmFtcycsXG4gICAgICAgICAgICBiZWdpbjogL1xcKC8sXG4gICAgICAgICAgICBlbmQ6IC9cXCkvLFxuICAgICAgICAgICAga2V5d29yZHM6IEtFWVdPUkRTLFxuICAgICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgICAgJ3NlbGYnLFxuICAgICAgICAgICAgICBobGpzLkNfQkxPQ0tfQ09NTUVOVF9NT0RFLFxuICAgICAgICAgICAgICBTVFJJTkcsXG4gICAgICAgICAgICAgIE5VTUJFUlxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnY2xhc3MnLFxuICAgICAgICBiZWdpbktleXdvcmRzOiAnY2xhc3MgaW50ZXJmYWNlJyxcbiAgICAgICAgZW5kOiAvXFx7LyxcbiAgICAgICAgZXhjbHVkZUVuZDogdHJ1ZSxcbiAgICAgICAgaWxsZWdhbDogL1s6KCRcIl0vLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luS2V5d29yZHM6ICdleHRlbmRzIGltcGxlbWVudHMnXG4gICAgICAgICAgfSxcbiAgICAgICAgICBUSVRMRV9NT0RFXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luS2V5d29yZHM6ICduYW1lc3BhY2UnLFxuICAgICAgICBlbmQ6IC87LyxcbiAgICAgICAgaWxsZWdhbDogL1suJ10vLFxuICAgICAgICBjb250YWluczogWyBUSVRMRV9NT0RFIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luS2V5d29yZHM6ICd1c2UnLFxuICAgICAgICBlbmQ6IC87LyxcbiAgICAgICAgY29udGFpbnM6IFsgVElUTEVfTU9ERSBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogLz0+LyAvLyBObyBtYXJrdXAsIGp1c3QgYSByZWxldmFuY2UgYm9vc3RlclxuICAgICAgfSxcbiAgICAgIFNUUklORyxcbiAgICAgIE5VTUJFUlxuICAgIF1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB6ZXBoaXI7XG4iXSwic291cmNlUm9vdCI6IiJ9