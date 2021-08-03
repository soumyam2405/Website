exports.ids = [84];
exports.modules = {

/***/ "./node_modules/highlight.js/lib/languages/java.js":
/*!*********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/java.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://docs.oracle.com/javase/specs/jls/se15/html/jls-3.html#jls-3.10
var decimalDigits = '[0-9](_*[0-9])*';
var frac = `\\.(${decimalDigits})`;
var hexDigits = '[0-9a-fA-F](_*[0-9a-fA-F])*';
var NUMERIC = {
  className: 'number',
  variants: [
    // DecimalFloatingPointLiteral
    // including ExponentPart
    { begin: `(\\b(${decimalDigits})((${frac})|\\.)?|(${frac}))` +
      `[eE][+-]?(${decimalDigits})[fFdD]?\\b` },
    // excluding ExponentPart
    { begin: `\\b(${decimalDigits})((${frac})[fFdD]?\\b|\\.([fFdD]\\b)?)` },
    { begin: `(${frac})[fFdD]?\\b` },
    { begin: `\\b(${decimalDigits})[fFdD]\\b` },

    // HexadecimalFloatingPointLiteral
    { begin: `\\b0[xX]((${hexDigits})\\.?|(${hexDigits})?\\.(${hexDigits}))` +
      `[pP][+-]?(${decimalDigits})[fFdD]?\\b` },

    // DecimalIntegerLiteral
    { begin: '\\b(0|[1-9](_*[0-9])*)[lL]?\\b' },

    // HexIntegerLiteral
    { begin: `\\b0[xX](${hexDigits})[lL]?\\b` },

    // OctalIntegerLiteral
    { begin: '\\b0(_*[0-7])*[lL]?\\b' },

    // BinaryIntegerLiteral
    { begin: '\\b0[bB][01](_*[01])*[lL]?\\b' },
  ],
  relevance: 0
};

/*
Language: Java
Author: Vsevolod Solovyov <vsevolod.solovyov@gmail.com>
Category: common, enterprise
Website: https://www.java.com/
*/

function java(hljs) {
  var JAVA_IDENT_RE = '[\u00C0-\u02B8a-zA-Z_$][\u00C0-\u02B8a-zA-Z_$0-9]*';
  var GENERIC_IDENT_RE = JAVA_IDENT_RE + '(<' + JAVA_IDENT_RE + '(\\s*,\\s*' + JAVA_IDENT_RE + ')*>)?';
  var KEYWORDS = 'false synchronized int abstract float private char boolean var static null if const ' +
    'for true while long strictfp finally protected import native final void ' +
    'enum else break transient catch instanceof byte super volatile case assert short ' +
    'package default double public try this switch continue throws protected public private ' +
    'module requires exports do';

  var ANNOTATION = {
    className: 'meta',
    begin: '@' + JAVA_IDENT_RE,
    contains: [
      {
        begin: /\(/,
        end: /\)/,
        contains: ["self"] // allow nested () inside our annotation
      },
    ]
  };
  const NUMBER = NUMERIC;

  return {
    name: 'Java',
    aliases: ['jsp'],
    keywords: KEYWORDS,
    illegal: /<\/|#/,
    contains: [
      hljs.COMMENT(
        '/\\*\\*',
        '\\*/',
        {
          relevance: 0,
          contains: [
            {
              // eat up @'s in emails to prevent them to be recognized as doctags
              begin: /\w+@/, relevance: 0
            },
            {
              className: 'doctag',
              begin: '@[A-Za-z]+'
            }
          ]
        }
      ),
      // relevance boost
      {
        begin: /import java\.[a-z]+\./,
        keywords: "import",
        relevance: 2
      },
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE,
      {
        className: 'class',
        beginKeywords: 'class interface enum', end: /[{;=]/, excludeEnd: true,
        // TODO: can this be removed somehow?
        // an extra boost because Java is more popular than other languages with
        // this same syntax feature (this is just to preserve our tests passing
        // for now)
        relevance: 1,
        keywords: 'class interface enum',
        illegal: /[:"\[\]]/,
        contains: [
          { beginKeywords: 'extends implements' },
          hljs.UNDERSCORE_TITLE_MODE
        ]
      },
      {
        // Expression keywords prevent 'keyword Name(...)' from being
        // recognized as a function definition
        beginKeywords: 'new throw return else',
        relevance: 0
      },
      {
        className: 'class',
        begin: 'record\\s+' + hljs.UNDERSCORE_IDENT_RE + '\\s*\\(',
        returnBegin: true,
        excludeEnd: true,
        end: /[{;=]/,
        keywords: KEYWORDS,
        contains: [
          { beginKeywords: "record" },
          {
            begin: hljs.UNDERSCORE_IDENT_RE + '\\s*\\(',
            returnBegin: true,
            relevance: 0,
            contains: [hljs.UNDERSCORE_TITLE_MODE]
          },
          {
            className: 'params',
            begin: /\(/, end: /\)/,
            keywords: KEYWORDS,
            relevance: 0,
            contains: [
              hljs.C_BLOCK_COMMENT_MODE
            ]
          },
          hljs.C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE
        ]
      },
      {
        className: 'function',
        begin: '(' + GENERIC_IDENT_RE + '\\s+)+' + hljs.UNDERSCORE_IDENT_RE + '\\s*\\(', returnBegin: true, end: /[{;=]/,
        excludeEnd: true,
        keywords: KEYWORDS,
        contains: [
          {
            begin: hljs.UNDERSCORE_IDENT_RE + '\\s*\\(', returnBegin: true,
            relevance: 0,
            contains: [hljs.UNDERSCORE_TITLE_MODE]
          },
          {
            className: 'params',
            begin: /\(/, end: /\)/,
            keywords: KEYWORDS,
            relevance: 0,
            contains: [
              ANNOTATION,
              hljs.APOS_STRING_MODE,
              hljs.QUOTE_STRING_MODE,
              NUMBER,
              hljs.C_BLOCK_COMMENT_MODE
            ]
          },
          hljs.C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE
        ]
      },
      NUMBER,
      ANNOTATION
    ]
  };
}

module.exports = java;


/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvamF2YS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBLGtCQUFrQixjQUFjO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssZ0JBQWdCLGNBQWMsS0FBSyxLQUFLLFdBQVcsS0FBSztBQUM3RCxtQkFBbUIsY0FBYyxjQUFjO0FBQy9DO0FBQ0EsS0FBSyxlQUFlLGNBQWMsS0FBSyxLQUFLLCtCQUErQjtBQUMzRSxLQUFLLFlBQVksS0FBSyxjQUFjO0FBQ3BDLEtBQUssZUFBZSxjQUFjLGFBQWE7O0FBRS9DO0FBQ0EsS0FBSyxxQkFBcUIsVUFBVSxTQUFTLFVBQVUsUUFBUSxVQUFVO0FBQ3pFLG1CQUFtQixjQUFjLGNBQWM7O0FBRS9DO0FBQ0EsS0FBSywwQ0FBMEM7O0FBRS9DO0FBQ0EsS0FBSyxvQkFBb0IsVUFBVSxZQUFZOztBQUUvQztBQUNBLEtBQUssa0NBQWtDOztBQUV2QztBQUNBLEtBQUsseUNBQXlDO0FBQzlDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RDtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxzQ0FBc0M7QUFDakQ7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLFdBQVcsMEJBQTBCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLHFIQUFxSDtBQUNySDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiODQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwczovL2RvY3Mub3JhY2xlLmNvbS9qYXZhc2Uvc3BlY3MvamxzL3NlMTUvaHRtbC9qbHMtMy5odG1sI2pscy0zLjEwXG52YXIgZGVjaW1hbERpZ2l0cyA9ICdbMC05XShfKlswLTldKSonO1xudmFyIGZyYWMgPSBgXFxcXC4oJHtkZWNpbWFsRGlnaXRzfSlgO1xudmFyIGhleERpZ2l0cyA9ICdbMC05YS1mQS1GXShfKlswLTlhLWZBLUZdKSonO1xudmFyIE5VTUVSSUMgPSB7XG4gIGNsYXNzTmFtZTogJ251bWJlcicsXG4gIHZhcmlhbnRzOiBbXG4gICAgLy8gRGVjaW1hbEZsb2F0aW5nUG9pbnRMaXRlcmFsXG4gICAgLy8gaW5jbHVkaW5nIEV4cG9uZW50UGFydFxuICAgIHsgYmVnaW46IGAoXFxcXGIoJHtkZWNpbWFsRGlnaXRzfSkoKCR7ZnJhY30pfFxcXFwuKT98KCR7ZnJhY30pKWAgK1xuICAgICAgYFtlRV1bKy1dPygke2RlY2ltYWxEaWdpdHN9KVtmRmREXT9cXFxcYmAgfSxcbiAgICAvLyBleGNsdWRpbmcgRXhwb25lbnRQYXJ0XG4gICAgeyBiZWdpbjogYFxcXFxiKCR7ZGVjaW1hbERpZ2l0c30pKCgke2ZyYWN9KVtmRmREXT9cXFxcYnxcXFxcLihbZkZkRF1cXFxcYik/KWAgfSxcbiAgICB7IGJlZ2luOiBgKCR7ZnJhY30pW2ZGZERdP1xcXFxiYCB9LFxuICAgIHsgYmVnaW46IGBcXFxcYigke2RlY2ltYWxEaWdpdHN9KVtmRmREXVxcXFxiYCB9LFxuXG4gICAgLy8gSGV4YWRlY2ltYWxGbG9hdGluZ1BvaW50TGl0ZXJhbFxuICAgIHsgYmVnaW46IGBcXFxcYjBbeFhdKCgke2hleERpZ2l0c30pXFxcXC4/fCgke2hleERpZ2l0c30pP1xcXFwuKCR7aGV4RGlnaXRzfSkpYCArXG4gICAgICBgW3BQXVsrLV0/KCR7ZGVjaW1hbERpZ2l0c30pW2ZGZERdP1xcXFxiYCB9LFxuXG4gICAgLy8gRGVjaW1hbEludGVnZXJMaXRlcmFsXG4gICAgeyBiZWdpbjogJ1xcXFxiKDB8WzEtOV0oXypbMC05XSkqKVtsTF0/XFxcXGInIH0sXG5cbiAgICAvLyBIZXhJbnRlZ2VyTGl0ZXJhbFxuICAgIHsgYmVnaW46IGBcXFxcYjBbeFhdKCR7aGV4RGlnaXRzfSlbbExdP1xcXFxiYCB9LFxuXG4gICAgLy8gT2N0YWxJbnRlZ2VyTGl0ZXJhbFxuICAgIHsgYmVnaW46ICdcXFxcYjAoXypbMC03XSkqW2xMXT9cXFxcYicgfSxcblxuICAgIC8vIEJpbmFyeUludGVnZXJMaXRlcmFsXG4gICAgeyBiZWdpbjogJ1xcXFxiMFtiQl1bMDFdKF8qWzAxXSkqW2xMXT9cXFxcYicgfSxcbiAgXSxcbiAgcmVsZXZhbmNlOiAwXG59O1xuXG4vKlxuTGFuZ3VhZ2U6IEphdmFcbkF1dGhvcjogVnNldm9sb2QgU29sb3Z5b3YgPHZzZXZvbG9kLnNvbG92eW92QGdtYWlsLmNvbT5cbkNhdGVnb3J5OiBjb21tb24sIGVudGVycHJpc2VcbldlYnNpdGU6IGh0dHBzOi8vd3d3LmphdmEuY29tL1xuKi9cblxuZnVuY3Rpb24gamF2YShobGpzKSB7XG4gIHZhciBKQVZBX0lERU5UX1JFID0gJ1tcXHUwMEMwLVxcdTAyQjhhLXpBLVpfJF1bXFx1MDBDMC1cXHUwMkI4YS16QS1aXyQwLTldKic7XG4gIHZhciBHRU5FUklDX0lERU5UX1JFID0gSkFWQV9JREVOVF9SRSArICcoPCcgKyBKQVZBX0lERU5UX1JFICsgJyhcXFxccyosXFxcXHMqJyArIEpBVkFfSURFTlRfUkUgKyAnKSo+KT8nO1xuICB2YXIgS0VZV09SRFMgPSAnZmFsc2Ugc3luY2hyb25pemVkIGludCBhYnN0cmFjdCBmbG9hdCBwcml2YXRlIGNoYXIgYm9vbGVhbiB2YXIgc3RhdGljIG51bGwgaWYgY29uc3QgJyArXG4gICAgJ2ZvciB0cnVlIHdoaWxlIGxvbmcgc3RyaWN0ZnAgZmluYWxseSBwcm90ZWN0ZWQgaW1wb3J0IG5hdGl2ZSBmaW5hbCB2b2lkICcgK1xuICAgICdlbnVtIGVsc2UgYnJlYWsgdHJhbnNpZW50IGNhdGNoIGluc3RhbmNlb2YgYnl0ZSBzdXBlciB2b2xhdGlsZSBjYXNlIGFzc2VydCBzaG9ydCAnICtcbiAgICAncGFja2FnZSBkZWZhdWx0IGRvdWJsZSBwdWJsaWMgdHJ5IHRoaXMgc3dpdGNoIGNvbnRpbnVlIHRocm93cyBwcm90ZWN0ZWQgcHVibGljIHByaXZhdGUgJyArXG4gICAgJ21vZHVsZSByZXF1aXJlcyBleHBvcnRzIGRvJztcblxuICB2YXIgQU5OT1RBVElPTiA9IHtcbiAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICBiZWdpbjogJ0AnICsgSkFWQV9JREVOVF9SRSxcbiAgICBjb250YWluczogW1xuICAgICAge1xuICAgICAgICBiZWdpbjogL1xcKC8sXG4gICAgICAgIGVuZDogL1xcKS8sXG4gICAgICAgIGNvbnRhaW5zOiBbXCJzZWxmXCJdIC8vIGFsbG93IG5lc3RlZCAoKSBpbnNpZGUgb3VyIGFubm90YXRpb25cbiAgICAgIH0sXG4gICAgXVxuICB9O1xuICBjb25zdCBOVU1CRVIgPSBOVU1FUklDO1xuXG4gIHJldHVybiB7XG4gICAgbmFtZTogJ0phdmEnLFxuICAgIGFsaWFzZXM6IFsnanNwJ10sXG4gICAga2V5d29yZHM6IEtFWVdPUkRTLFxuICAgIGlsbGVnYWw6IC88XFwvfCMvLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBobGpzLkNPTU1FTlQoXG4gICAgICAgICcvXFxcXCpcXFxcKicsXG4gICAgICAgICdcXFxcKi8nLFxuICAgICAgICB7XG4gICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIC8vIGVhdCB1cCBAJ3MgaW4gZW1haWxzIHRvIHByZXZlbnQgdGhlbSB0byBiZSByZWNvZ25pemVkIGFzIGRvY3RhZ3NcbiAgICAgICAgICAgICAgYmVnaW46IC9cXHcrQC8sIHJlbGV2YW5jZTogMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnZG9jdGFnJyxcbiAgICAgICAgICAgICAgYmVnaW46ICdAW0EtWmEtel0rJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgKSxcbiAgICAgIC8vIHJlbGV2YW5jZSBib29zdFxuICAgICAge1xuICAgICAgICBiZWdpbjogL2ltcG9ydCBqYXZhXFwuW2Etel0rXFwuLyxcbiAgICAgICAga2V5d29yZHM6IFwiaW1wb3J0XCIsXG4gICAgICAgIHJlbGV2YW5jZTogMlxuICAgICAgfSxcbiAgICAgIGhsanMuQ19MSU5FX0NPTU1FTlRfTU9ERSxcbiAgICAgIGhsanMuQ19CTE9DS19DT01NRU5UX01PREUsXG4gICAgICBobGpzLkFQT1NfU1RSSU5HX01PREUsXG4gICAgICBobGpzLlFVT1RFX1NUUklOR19NT0RFLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdjbGFzcycsXG4gICAgICAgIGJlZ2luS2V5d29yZHM6ICdjbGFzcyBpbnRlcmZhY2UgZW51bScsIGVuZDogL1t7Oz1dLywgZXhjbHVkZUVuZDogdHJ1ZSxcbiAgICAgICAgLy8gVE9ETzogY2FuIHRoaXMgYmUgcmVtb3ZlZCBzb21laG93P1xuICAgICAgICAvLyBhbiBleHRyYSBib29zdCBiZWNhdXNlIEphdmEgaXMgbW9yZSBwb3B1bGFyIHRoYW4gb3RoZXIgbGFuZ3VhZ2VzIHdpdGhcbiAgICAgICAgLy8gdGhpcyBzYW1lIHN5bnRheCBmZWF0dXJlICh0aGlzIGlzIGp1c3QgdG8gcHJlc2VydmUgb3VyIHRlc3RzIHBhc3NpbmdcbiAgICAgICAgLy8gZm9yIG5vdylcbiAgICAgICAgcmVsZXZhbmNlOiAxLFxuICAgICAgICBrZXl3b3JkczogJ2NsYXNzIGludGVyZmFjZSBlbnVtJyxcbiAgICAgICAgaWxsZWdhbDogL1s6XCJcXFtcXF1dLyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICB7IGJlZ2luS2V5d29yZHM6ICdleHRlbmRzIGltcGxlbWVudHMnIH0sXG4gICAgICAgICAgaGxqcy5VTkRFUlNDT1JFX1RJVExFX01PREVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgLy8gRXhwcmVzc2lvbiBrZXl3b3JkcyBwcmV2ZW50ICdrZXl3b3JkIE5hbWUoLi4uKScgZnJvbSBiZWluZ1xuICAgICAgICAvLyByZWNvZ25pemVkIGFzIGEgZnVuY3Rpb24gZGVmaW5pdGlvblxuICAgICAgICBiZWdpbktleXdvcmRzOiAnbmV3IHRocm93IHJldHVybiBlbHNlJyxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdjbGFzcycsXG4gICAgICAgIGJlZ2luOiAncmVjb3JkXFxcXHMrJyArIGhsanMuVU5ERVJTQ09SRV9JREVOVF9SRSArICdcXFxccypcXFxcKCcsXG4gICAgICAgIHJldHVybkJlZ2luOiB0cnVlLFxuICAgICAgICBleGNsdWRlRW5kOiB0cnVlLFxuICAgICAgICBlbmQ6IC9bezs9XS8sXG4gICAgICAgIGtleXdvcmRzOiBLRVlXT1JEUyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICB7IGJlZ2luS2V5d29yZHM6IFwicmVjb3JkXCIgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogaGxqcy5VTkRFUlNDT1JFX0lERU5UX1JFICsgJ1xcXFxzKlxcXFwoJyxcbiAgICAgICAgICAgIHJldHVybkJlZ2luOiB0cnVlLFxuICAgICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgICAgY29udGFpbnM6IFtobGpzLlVOREVSU0NPUkVfVElUTEVfTU9ERV1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3BhcmFtcycsXG4gICAgICAgICAgICBiZWdpbjogL1xcKC8sIGVuZDogL1xcKS8sXG4gICAgICAgICAgICBrZXl3b3JkczogS0VZV09SRFMsXG4gICAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgICBobGpzLkNfQkxPQ0tfQ09NTUVOVF9NT0RFXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICBobGpzLkNfTElORV9DT01NRU5UX01PREUsXG4gICAgICAgICAgaGxqcy5DX0JMT0NLX0NPTU1FTlRfTU9ERVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdmdW5jdGlvbicsXG4gICAgICAgIGJlZ2luOiAnKCcgKyBHRU5FUklDX0lERU5UX1JFICsgJ1xcXFxzKykrJyArIGhsanMuVU5ERVJTQ09SRV9JREVOVF9SRSArICdcXFxccypcXFxcKCcsIHJldHVybkJlZ2luOiB0cnVlLCBlbmQ6IC9bezs9XS8sXG4gICAgICAgIGV4Y2x1ZGVFbmQ6IHRydWUsXG4gICAgICAgIGtleXdvcmRzOiBLRVlXT1JEUyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogaGxqcy5VTkRFUlNDT1JFX0lERU5UX1JFICsgJ1xcXFxzKlxcXFwoJywgcmV0dXJuQmVnaW46IHRydWUsXG4gICAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgICBjb250YWluczogW2hsanMuVU5ERVJTQ09SRV9USVRMRV9NT0RFXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAncGFyYW1zJyxcbiAgICAgICAgICAgIGJlZ2luOiAvXFwoLywgZW5kOiAvXFwpLyxcbiAgICAgICAgICAgIGtleXdvcmRzOiBLRVlXT1JEUyxcbiAgICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAgIEFOTk9UQVRJT04sXG4gICAgICAgICAgICAgIGhsanMuQVBPU19TVFJJTkdfTU9ERSxcbiAgICAgICAgICAgICAgaGxqcy5RVU9URV9TVFJJTkdfTU9ERSxcbiAgICAgICAgICAgICAgTlVNQkVSLFxuICAgICAgICAgICAgICBobGpzLkNfQkxPQ0tfQ09NTUVOVF9NT0RFXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICBobGpzLkNfTElORV9DT01NRU5UX01PREUsXG4gICAgICAgICAgaGxqcy5DX0JMT0NLX0NPTU1FTlRfTU9ERVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgTlVNQkVSLFxuICAgICAgQU5OT1RBVElPTlxuICAgIF1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBqYXZhO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==