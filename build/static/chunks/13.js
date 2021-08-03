(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[13],{

/***/ "./node_modules/highlight.js/lib/languages/aspectj.js":
/*!************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/aspectj.js ***!
  \************************************************************/
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
Language: AspectJ
Author: Hakan Ozler <ozler.hakan@gmail.com>
Website: https://www.eclipse.org/aspectj/
Description: Syntax Highlighting for the AspectJ Language which is a general-purpose aspect-oriented extension to the Java programming language.
Audit: 2020
*/

/** @type LanguageFn */
function aspectj(hljs) {
  const KEYWORDS =
    'false synchronized int abstract float private char boolean static null if const ' +
    'for true while long throw strictfp finally protected import native final return void ' +
    'enum else extends implements break transient new catch instanceof byte super volatile case ' +
    'assert short package default double public try this switch continue throws privileged ' +
    'aspectOf adviceexecution proceed cflowbelow cflow initialization preinitialization ' +
    'staticinitialization withincode target within execution getWithinTypeName handler ' +
    'thisJoinPoint thisJoinPointStaticPart thisEnclosingJoinPointStaticPart declare parents ' +
    'warning error soft precedence thisAspectInstance';
  const SHORTKEYS = 'get set args call';

  return {
    name: 'AspectJ',
    keywords: KEYWORDS,
    illegal: /<\/|#/,
    contains: [
      hljs.COMMENT(
        /\/\*\*/,
        /\*\//,
        {
          relevance: 0,
          contains: [
            {
              // eat up @'s in emails to prevent them to be recognized as doctags
              begin: /\w+@/,
              relevance: 0
            },
            {
              className: 'doctag',
              begin: /@[A-Za-z]+/
            }
          ]
        }
      ),
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE,
      {
        className: 'class',
        beginKeywords: 'aspect',
        end: /[{;=]/,
        excludeEnd: true,
        illegal: /[:;"\[\]]/,
        contains: [
          {
            beginKeywords: 'extends implements pertypewithin perthis pertarget percflowbelow percflow issingleton'
          },
          hljs.UNDERSCORE_TITLE_MODE,
          {
            begin: /\([^\)]*/,
            end: /[)]+/,
            keywords: KEYWORDS + ' ' + SHORTKEYS,
            excludeEnd: false
          }
        ]
      },
      {
        className: 'class',
        beginKeywords: 'class interface',
        end: /[{;=]/,
        excludeEnd: true,
        relevance: 0,
        keywords: 'class interface',
        illegal: /[:"\[\]]/,
        contains: [
          {
            beginKeywords: 'extends implements'
          },
          hljs.UNDERSCORE_TITLE_MODE
        ]
      },
      {
        // AspectJ Constructs
        beginKeywords: 'pointcut after before around throwing returning',
        end: /[)]/,
        excludeEnd: false,
        illegal: /["\[\]]/,
        contains: [
          {
            begin: concat(hljs.UNDERSCORE_IDENT_RE, /\s*\(/),
            returnBegin: true,
            contains: [ hljs.UNDERSCORE_TITLE_MODE ]
          }
        ]
      },
      {
        begin: /[:]/,
        returnBegin: true,
        end: /[{;]/,
        relevance: 0,
        excludeEnd: false,
        keywords: KEYWORDS,
        illegal: /["\[\]]/,
        contains: [
          {
            begin: concat(hljs.UNDERSCORE_IDENT_RE, /\s*\(/),
            keywords: KEYWORDS + ' ' + SHORTKEYS,
            relevance: 0
          },
          hljs.QUOTE_STRING_MODE
        ]
      },
      {
        // this prevents 'new Name(...), or throw ...' from being recognized as a function definition
        beginKeywords: 'new throw',
        relevance: 0
      },
      {
        // the function class is a bit different for AspectJ compared to the Java language
        className: 'function',
        begin: /\w+ +\w+(\.\w+)?\s*\([^\)]*\)\s*((throws)[\w\s,]+)?[\{;]/,
        returnBegin: true,
        end: /[{;=]/,
        keywords: KEYWORDS,
        excludeEnd: true,
        contains: [
          {
            begin: concat(hljs.UNDERSCORE_IDENT_RE, /\s*\(/),
            returnBegin: true,
            relevance: 0,
            contains: [ hljs.UNDERSCORE_TITLE_MODE ]
          },
          {
            className: 'params',
            begin: /\(/,
            end: /\)/,
            relevance: 0,
            keywords: KEYWORDS,
            contains: [
              hljs.APOS_STRING_MODE,
              hljs.QUOTE_STRING_MODE,
              hljs.C_NUMBER_MODE,
              hljs.C_BLOCK_COMMENT_MODE
            ]
          },
          hljs.C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE
        ]
      },
      hljs.C_NUMBER_MODE,
      {
        // annotation is also used in this language
        className: 'meta',
        begin: /@[A-Za-z]+/
      }
    ]
  };
}

module.exports = aspectj;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2FzcGVjdGouanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYTtBQUNiOztBQUVBO0FBQ0EsV0FBVyxpQkFBaUI7QUFDNUIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLHNCQUFzQjtBQUNqQyxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLHVFQUF1RTtBQUN2RTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvMTMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHJldHVybnMge1JlZ0V4cH1cbiAqICovXG5cbi8qKlxuICogQHBhcmFtIHtSZWdFeHAgfCBzdHJpbmcgfSByZVxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gc291cmNlKHJlKSB7XG4gIGlmICghcmUpIHJldHVybiBudWxsO1xuICBpZiAodHlwZW9mIHJlID09PSBcInN0cmluZ1wiKSByZXR1cm4gcmU7XG5cbiAgcmV0dXJuIHJlLnNvdXJjZTtcbn1cblxuLyoqXG4gKiBAcGFyYW0gey4uLihSZWdFeHAgfCBzdHJpbmcpIH0gYXJnc1xuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gY29uY2F0KC4uLmFyZ3MpIHtcbiAgY29uc3Qgam9pbmVkID0gYXJncy5tYXAoKHgpID0+IHNvdXJjZSh4KSkuam9pbihcIlwiKTtcbiAgcmV0dXJuIGpvaW5lZDtcbn1cblxuLypcbkxhbmd1YWdlOiBBc3BlY3RKXG5BdXRob3I6IEhha2FuIE96bGVyIDxvemxlci5oYWthbkBnbWFpbC5jb20+XG5XZWJzaXRlOiBodHRwczovL3d3dy5lY2xpcHNlLm9yZy9hc3BlY3RqL1xuRGVzY3JpcHRpb246IFN5bnRheCBIaWdobGlnaHRpbmcgZm9yIHRoZSBBc3BlY3RKIExhbmd1YWdlIHdoaWNoIGlzIGEgZ2VuZXJhbC1wdXJwb3NlIGFzcGVjdC1vcmllbnRlZCBleHRlbnNpb24gdG8gdGhlIEphdmEgcHJvZ3JhbW1pbmcgbGFuZ3VhZ2UuXG5BdWRpdDogMjAyMFxuKi9cblxuLyoqIEB0eXBlIExhbmd1YWdlRm4gKi9cbmZ1bmN0aW9uIGFzcGVjdGooaGxqcykge1xuICBjb25zdCBLRVlXT1JEUyA9XG4gICAgJ2ZhbHNlIHN5bmNocm9uaXplZCBpbnQgYWJzdHJhY3QgZmxvYXQgcHJpdmF0ZSBjaGFyIGJvb2xlYW4gc3RhdGljIG51bGwgaWYgY29uc3QgJyArXG4gICAgJ2ZvciB0cnVlIHdoaWxlIGxvbmcgdGhyb3cgc3RyaWN0ZnAgZmluYWxseSBwcm90ZWN0ZWQgaW1wb3J0IG5hdGl2ZSBmaW5hbCByZXR1cm4gdm9pZCAnICtcbiAgICAnZW51bSBlbHNlIGV4dGVuZHMgaW1wbGVtZW50cyBicmVhayB0cmFuc2llbnQgbmV3IGNhdGNoIGluc3RhbmNlb2YgYnl0ZSBzdXBlciB2b2xhdGlsZSBjYXNlICcgK1xuICAgICdhc3NlcnQgc2hvcnQgcGFja2FnZSBkZWZhdWx0IGRvdWJsZSBwdWJsaWMgdHJ5IHRoaXMgc3dpdGNoIGNvbnRpbnVlIHRocm93cyBwcml2aWxlZ2VkICcgK1xuICAgICdhc3BlY3RPZiBhZHZpY2VleGVjdXRpb24gcHJvY2VlZCBjZmxvd2JlbG93IGNmbG93IGluaXRpYWxpemF0aW9uIHByZWluaXRpYWxpemF0aW9uICcgK1xuICAgICdzdGF0aWNpbml0aWFsaXphdGlvbiB3aXRoaW5jb2RlIHRhcmdldCB3aXRoaW4gZXhlY3V0aW9uIGdldFdpdGhpblR5cGVOYW1lIGhhbmRsZXIgJyArXG4gICAgJ3RoaXNKb2luUG9pbnQgdGhpc0pvaW5Qb2ludFN0YXRpY1BhcnQgdGhpc0VuY2xvc2luZ0pvaW5Qb2ludFN0YXRpY1BhcnQgZGVjbGFyZSBwYXJlbnRzICcgK1xuICAgICd3YXJuaW5nIGVycm9yIHNvZnQgcHJlY2VkZW5jZSB0aGlzQXNwZWN0SW5zdGFuY2UnO1xuICBjb25zdCBTSE9SVEtFWVMgPSAnZ2V0IHNldCBhcmdzIGNhbGwnO1xuXG4gIHJldHVybiB7XG4gICAgbmFtZTogJ0FzcGVjdEonLFxuICAgIGtleXdvcmRzOiBLRVlXT1JEUyxcbiAgICBpbGxlZ2FsOiAvPFxcL3wjLyxcbiAgICBjb250YWluczogW1xuICAgICAgaGxqcy5DT01NRU5UKFxuICAgICAgICAvXFwvXFwqXFwqLyxcbiAgICAgICAgL1xcKlxcLy8sXG4gICAgICAgIHtcbiAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgLy8gZWF0IHVwIEAncyBpbiBlbWFpbHMgdG8gcHJldmVudCB0aGVtIHRvIGJlIHJlY29nbml6ZWQgYXMgZG9jdGFnc1xuICAgICAgICAgICAgICBiZWdpbjogL1xcdytALyxcbiAgICAgICAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjbGFzc05hbWU6ICdkb2N0YWcnLFxuICAgICAgICAgICAgICBiZWdpbjogL0BbQS1aYS16XSsvXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICApLFxuICAgICAgaGxqcy5DX0xJTkVfQ09NTUVOVF9NT0RFLFxuICAgICAgaGxqcy5DX0JMT0NLX0NPTU1FTlRfTU9ERSxcbiAgICAgIGhsanMuQVBPU19TVFJJTkdfTU9ERSxcbiAgICAgIGhsanMuUVVPVEVfU1RSSU5HX01PREUsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2NsYXNzJyxcbiAgICAgICAgYmVnaW5LZXl3b3JkczogJ2FzcGVjdCcsXG4gICAgICAgIGVuZDogL1t7Oz1dLyxcbiAgICAgICAgZXhjbHVkZUVuZDogdHJ1ZSxcbiAgICAgICAgaWxsZWdhbDogL1s6O1wiXFxbXFxdXS8sXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW5LZXl3b3JkczogJ2V4dGVuZHMgaW1wbGVtZW50cyBwZXJ0eXBld2l0aGluIHBlcnRoaXMgcGVydGFyZ2V0IHBlcmNmbG93YmVsb3cgcGVyY2Zsb3cgaXNzaW5nbGV0b24nXG4gICAgICAgICAgfSxcbiAgICAgICAgICBobGpzLlVOREVSU0NPUkVfVElUTEVfTU9ERSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogL1xcKFteXFwpXSovLFxuICAgICAgICAgICAgZW5kOiAvWyldKy8sXG4gICAgICAgICAgICBrZXl3b3JkczogS0VZV09SRFMgKyAnICcgKyBTSE9SVEtFWVMsXG4gICAgICAgICAgICBleGNsdWRlRW5kOiBmYWxzZVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnY2xhc3MnLFxuICAgICAgICBiZWdpbktleXdvcmRzOiAnY2xhc3MgaW50ZXJmYWNlJyxcbiAgICAgICAgZW5kOiAvW3s7PV0vLFxuICAgICAgICBleGNsdWRlRW5kOiB0cnVlLFxuICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgIGtleXdvcmRzOiAnY2xhc3MgaW50ZXJmYWNlJyxcbiAgICAgICAgaWxsZWdhbDogL1s6XCJcXFtcXF1dLyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbktleXdvcmRzOiAnZXh0ZW5kcyBpbXBsZW1lbnRzJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgaGxqcy5VTkRFUlNDT1JFX1RJVExFX01PREVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgLy8gQXNwZWN0SiBDb25zdHJ1Y3RzXG4gICAgICAgIGJlZ2luS2V5d29yZHM6ICdwb2ludGN1dCBhZnRlciBiZWZvcmUgYXJvdW5kIHRocm93aW5nIHJldHVybmluZycsXG4gICAgICAgIGVuZDogL1spXS8sXG4gICAgICAgIGV4Y2x1ZGVFbmQ6IGZhbHNlLFxuICAgICAgICBpbGxlZ2FsOiAvW1wiXFxbXFxdXS8sXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW46IGNvbmNhdChobGpzLlVOREVSU0NPUkVfSURFTlRfUkUsIC9cXHMqXFwoLyksXG4gICAgICAgICAgICByZXR1cm5CZWdpbjogdHJ1ZSxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbIGhsanMuVU5ERVJTQ09SRV9USVRMRV9NT0RFIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAvWzpdLyxcbiAgICAgICAgcmV0dXJuQmVnaW46IHRydWUsXG4gICAgICAgIGVuZDogL1t7O10vLFxuICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgIGV4Y2x1ZGVFbmQ6IGZhbHNlLFxuICAgICAgICBrZXl3b3JkczogS0VZV09SRFMsXG4gICAgICAgIGlsbGVnYWw6IC9bXCJcXFtcXF1dLyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogY29uY2F0KGhsanMuVU5ERVJTQ09SRV9JREVOVF9SRSwgL1xccypcXCgvKSxcbiAgICAgICAgICAgIGtleXdvcmRzOiBLRVlXT1JEUyArICcgJyArIFNIT1JUS0VZUyxcbiAgICAgICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgaGxqcy5RVU9URV9TVFJJTkdfTU9ERVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAvLyB0aGlzIHByZXZlbnRzICduZXcgTmFtZSguLi4pLCBvciB0aHJvdyAuLi4nIGZyb20gYmVpbmcgcmVjb2duaXplZCBhcyBhIGZ1bmN0aW9uIGRlZmluaXRpb25cbiAgICAgICAgYmVnaW5LZXl3b3JkczogJ25ldyB0aHJvdycsXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgLy8gdGhlIGZ1bmN0aW9uIGNsYXNzIGlzIGEgYml0IGRpZmZlcmVudCBmb3IgQXNwZWN0SiBjb21wYXJlZCB0byB0aGUgSmF2YSBsYW5ndWFnZVxuICAgICAgICBjbGFzc05hbWU6ICdmdW5jdGlvbicsXG4gICAgICAgIGJlZ2luOiAvXFx3KyArXFx3KyhcXC5cXHcrKT9cXHMqXFwoW15cXCldKlxcKVxccyooKHRocm93cylbXFx3XFxzLF0rKT9bXFx7O10vLFxuICAgICAgICByZXR1cm5CZWdpbjogdHJ1ZSxcbiAgICAgICAgZW5kOiAvW3s7PV0vLFxuICAgICAgICBrZXl3b3JkczogS0VZV09SRFMsXG4gICAgICAgIGV4Y2x1ZGVFbmQ6IHRydWUsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW46IGNvbmNhdChobGpzLlVOREVSU0NPUkVfSURFTlRfUkUsIC9cXHMqXFwoLyksXG4gICAgICAgICAgICByZXR1cm5CZWdpbjogdHJ1ZSxcbiAgICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbIGhsanMuVU5ERVJTQ09SRV9USVRMRV9NT0RFIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3BhcmFtcycsXG4gICAgICAgICAgICBiZWdpbjogL1xcKC8sXG4gICAgICAgICAgICBlbmQ6IC9cXCkvLFxuICAgICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgICAga2V5d29yZHM6IEtFWVdPUkRTLFxuICAgICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgICAgaGxqcy5BUE9TX1NUUklOR19NT0RFLFxuICAgICAgICAgICAgICBobGpzLlFVT1RFX1NUUklOR19NT0RFLFxuICAgICAgICAgICAgICBobGpzLkNfTlVNQkVSX01PREUsXG4gICAgICAgICAgICAgIGhsanMuQ19CTE9DS19DT01NRU5UX01PREVcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGhsanMuQ19MSU5FX0NPTU1FTlRfTU9ERSxcbiAgICAgICAgICBobGpzLkNfQkxPQ0tfQ09NTUVOVF9NT0RFXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBobGpzLkNfTlVNQkVSX01PREUsXG4gICAgICB7XG4gICAgICAgIC8vIGFubm90YXRpb24gaXMgYWxzbyB1c2VkIGluIHRoaXMgbGFuZ3VhZ2VcbiAgICAgICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgICAgIGJlZ2luOiAvQFtBLVphLXpdKy9cbiAgICAgIH1cbiAgICBdXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXNwZWN0ajtcbiJdLCJzb3VyY2VSb290IjoiIn0=