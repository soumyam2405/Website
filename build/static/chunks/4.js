(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[4],{

/***/ "./node_modules/highlight.js/lib/languages/actionscript.js":
/*!*****************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/actionscript.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @param {string} value
 * @returns {RegExp}
 * */

/**
 * @param {RegExp | string } re
 * @returns {string}
 */
function source(re) {
  if (!re) return null;
  if (typeof re === "string") return re;

  return re.source;
}

/**
 * @param {...(RegExp | string) } args
 * @returns {string}
 */
function concat(...args) {
  const joined = args.map((x) => source(x)).join("");
  return joined;
}

/*
Language: ActionScript
Author: Alexander Myadzel <myadzel@gmail.com>
Category: scripting
Audit: 2020
*/

/** @type LanguageFn */
function actionscript(hljs) {
  const IDENT_RE = /[a-zA-Z_$][a-zA-Z0-9_$]*/;
  const IDENT_FUNC_RETURN_TYPE_RE = /([*]|[a-zA-Z_$][a-zA-Z0-9_$]*)/;

  const AS3_REST_ARG_MODE = {
    className: 'rest_arg',
    begin: /[.]{3}/,
    end: IDENT_RE,
    relevance: 10
  };

  return {
    name: 'ActionScript',
    aliases: [ 'as' ],
    keywords: {
      keyword: 'as break case catch class const continue default delete do dynamic each ' +
        'else extends final finally for function get if implements import in include ' +
        'instanceof interface internal is namespace native new override package private ' +
        'protected public return set static super switch this throw try typeof use var void ' +
        'while with',
      literal: 'true false null undefined'
    },
    contains: [
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE,
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      hljs.C_NUMBER_MODE,
      {
        className: 'class',
        beginKeywords: 'package',
        end: /\{/,
        contains: [ hljs.TITLE_MODE ]
      },
      {
        className: 'class',
        beginKeywords: 'class interface',
        end: /\{/,
        excludeEnd: true,
        contains: [
          { beginKeywords: 'extends implements' },
          hljs.TITLE_MODE
        ]
      },
      {
        className: 'meta',
        beginKeywords: 'import include',
        end: /;/,
        keywords: { 'meta-keyword': 'import include' }
      },
      {
        className: 'function',
        beginKeywords: 'function',
        end: /[{;]/,
        excludeEnd: true,
        illegal: /\S/,
        contains: [
          hljs.TITLE_MODE,
          {
            className: 'params',
            begin: /\(/,
            end: /\)/,
            contains: [
              hljs.APOS_STRING_MODE,
              hljs.QUOTE_STRING_MODE,
              hljs.C_LINE_COMMENT_MODE,
              hljs.C_BLOCK_COMMENT_MODE,
              AS3_REST_ARG_MODE
            ]
          },
          { begin: concat(/:\s*/, IDENT_FUNC_RETURN_TYPE_RE) }
        ]
      },
      hljs.METHOD_GUARD
    ],
    illegal: /#/
  };
}

module.exports = actionscript;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2FjdGlvbnNjcmlwdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhO0FBQ2I7O0FBRUE7QUFDQSxXQUFXLGlCQUFpQjtBQUM1QixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFdBQVcsc0JBQXNCO0FBQ2pDLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCLEVBQUU7QUFDbEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBLFdBQVcsc0NBQXNDO0FBQ2pEO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmLG1CQUFtQjtBQUNuQixPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxXQUFXO0FBQ1g7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJzdGF0aWMvY2h1bmtzLzQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHJldHVybnMge1JlZ0V4cH1cbiAqICovXG5cbi8qKlxuICogQHBhcmFtIHtSZWdFeHAgfCBzdHJpbmcgfSByZVxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gc291cmNlKHJlKSB7XG4gIGlmICghcmUpIHJldHVybiBudWxsO1xuICBpZiAodHlwZW9mIHJlID09PSBcInN0cmluZ1wiKSByZXR1cm4gcmU7XG5cbiAgcmV0dXJuIHJlLnNvdXJjZTtcbn1cblxuLyoqXG4gKiBAcGFyYW0gey4uLihSZWdFeHAgfCBzdHJpbmcpIH0gYXJnc1xuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gY29uY2F0KC4uLmFyZ3MpIHtcbiAgY29uc3Qgam9pbmVkID0gYXJncy5tYXAoKHgpID0+IHNvdXJjZSh4KSkuam9pbihcIlwiKTtcbiAgcmV0dXJuIGpvaW5lZDtcbn1cblxuLypcbkxhbmd1YWdlOiBBY3Rpb25TY3JpcHRcbkF1dGhvcjogQWxleGFuZGVyIE15YWR6ZWwgPG15YWR6ZWxAZ21haWwuY29tPlxuQ2F0ZWdvcnk6IHNjcmlwdGluZ1xuQXVkaXQ6IDIwMjBcbiovXG5cbi8qKiBAdHlwZSBMYW5ndWFnZUZuICovXG5mdW5jdGlvbiBhY3Rpb25zY3JpcHQoaGxqcykge1xuICBjb25zdCBJREVOVF9SRSA9IC9bYS16QS1aXyRdW2EtekEtWjAtOV8kXSovO1xuICBjb25zdCBJREVOVF9GVU5DX1JFVFVSTl9UWVBFX1JFID0gLyhbKl18W2EtekEtWl8kXVthLXpBLVowLTlfJF0qKS87XG5cbiAgY29uc3QgQVMzX1JFU1RfQVJHX01PREUgPSB7XG4gICAgY2xhc3NOYW1lOiAncmVzdF9hcmcnLFxuICAgIGJlZ2luOiAvWy5dezN9LyxcbiAgICBlbmQ6IElERU5UX1JFLFxuICAgIHJlbGV2YW5jZTogMTBcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIG5hbWU6ICdBY3Rpb25TY3JpcHQnLFxuICAgIGFsaWFzZXM6IFsgJ2FzJyBdLFxuICAgIGtleXdvcmRzOiB7XG4gICAgICBrZXl3b3JkOiAnYXMgYnJlYWsgY2FzZSBjYXRjaCBjbGFzcyBjb25zdCBjb250aW51ZSBkZWZhdWx0IGRlbGV0ZSBkbyBkeW5hbWljIGVhY2ggJyArXG4gICAgICAgICdlbHNlIGV4dGVuZHMgZmluYWwgZmluYWxseSBmb3IgZnVuY3Rpb24gZ2V0IGlmIGltcGxlbWVudHMgaW1wb3J0IGluIGluY2x1ZGUgJyArXG4gICAgICAgICdpbnN0YW5jZW9mIGludGVyZmFjZSBpbnRlcm5hbCBpcyBuYW1lc3BhY2UgbmF0aXZlIG5ldyBvdmVycmlkZSBwYWNrYWdlIHByaXZhdGUgJyArXG4gICAgICAgICdwcm90ZWN0ZWQgcHVibGljIHJldHVybiBzZXQgc3RhdGljIHN1cGVyIHN3aXRjaCB0aGlzIHRocm93IHRyeSB0eXBlb2YgdXNlIHZhciB2b2lkICcgK1xuICAgICAgICAnd2hpbGUgd2l0aCcsXG4gICAgICBsaXRlcmFsOiAndHJ1ZSBmYWxzZSBudWxsIHVuZGVmaW5lZCdcbiAgICB9LFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBobGpzLkFQT1NfU1RSSU5HX01PREUsXG4gICAgICBobGpzLlFVT1RFX1NUUklOR19NT0RFLFxuICAgICAgaGxqcy5DX0xJTkVfQ09NTUVOVF9NT0RFLFxuICAgICAgaGxqcy5DX0JMT0NLX0NPTU1FTlRfTU9ERSxcbiAgICAgIGhsanMuQ19OVU1CRVJfTU9ERSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnY2xhc3MnLFxuICAgICAgICBiZWdpbktleXdvcmRzOiAncGFja2FnZScsXG4gICAgICAgIGVuZDogL1xcey8sXG4gICAgICAgIGNvbnRhaW5zOiBbIGhsanMuVElUTEVfTU9ERSBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdjbGFzcycsXG4gICAgICAgIGJlZ2luS2V5d29yZHM6ICdjbGFzcyBpbnRlcmZhY2UnLFxuICAgICAgICBlbmQ6IC9cXHsvLFxuICAgICAgICBleGNsdWRlRW5kOiB0cnVlLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIHsgYmVnaW5LZXl3b3JkczogJ2V4dGVuZHMgaW1wbGVtZW50cycgfSxcbiAgICAgICAgICBobGpzLlRJVExFX01PREVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgICAgIGJlZ2luS2V5d29yZHM6ICdpbXBvcnQgaW5jbHVkZScsXG4gICAgICAgIGVuZDogLzsvLFxuICAgICAgICBrZXl3b3JkczogeyAnbWV0YS1rZXl3b3JkJzogJ2ltcG9ydCBpbmNsdWRlJyB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdmdW5jdGlvbicsXG4gICAgICAgIGJlZ2luS2V5d29yZHM6ICdmdW5jdGlvbicsXG4gICAgICAgIGVuZDogL1t7O10vLFxuICAgICAgICBleGNsdWRlRW5kOiB0cnVlLFxuICAgICAgICBpbGxlZ2FsOiAvXFxTLyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICBobGpzLlRJVExFX01PREUsXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAncGFyYW1zJyxcbiAgICAgICAgICAgIGJlZ2luOiAvXFwoLyxcbiAgICAgICAgICAgIGVuZDogL1xcKS8sXG4gICAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgICBobGpzLkFQT1NfU1RSSU5HX01PREUsXG4gICAgICAgICAgICAgIGhsanMuUVVPVEVfU1RSSU5HX01PREUsXG4gICAgICAgICAgICAgIGhsanMuQ19MSU5FX0NPTU1FTlRfTU9ERSxcbiAgICAgICAgICAgICAgaGxqcy5DX0JMT0NLX0NPTU1FTlRfTU9ERSxcbiAgICAgICAgICAgICAgQVMzX1JFU1RfQVJHX01PREVcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHsgYmVnaW46IGNvbmNhdCgvOlxccyovLCBJREVOVF9GVU5DX1JFVFVSTl9UWVBFX1JFKSB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBobGpzLk1FVEhPRF9HVUFSRFxuICAgIF0sXG4gICAgaWxsZWdhbDogLyMvXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYWN0aW9uc2NyaXB0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==