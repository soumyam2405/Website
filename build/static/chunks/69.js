(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[69],{

/***/ "./node_modules/highlight.js/lib/languages/go.js":
/*!*******************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/go.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Go
Author: Stephan Kountso aka StepLg <steplg@gmail.com>
Contributors: Evgeny Stepanischev <imbolk@gmail.com>
Description: Google go language (golang). For info about language
Website: http://golang.org/
Category: common, system
*/

function go(hljs) {
  const GO_KEYWORDS = {
    keyword:
      'break default func interface select case map struct chan else goto package switch ' +
      'const fallthrough if range type continue for import return var go defer ' +
      'bool byte complex64 complex128 float32 float64 int8 int16 int32 int64 string uint8 ' +
      'uint16 uint32 uint64 int uint uintptr rune',
    literal:
       'true false iota nil',
    built_in:
      'append cap close complex copy imag len make new panic print println real recover delete'
  };
  return {
    name: 'Go',
    aliases: ['golang'],
    keywords: GO_KEYWORDS,
    illegal: '</',
    contains: [
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      {
        className: 'string',
        variants: [
          hljs.QUOTE_STRING_MODE,
          hljs.APOS_STRING_MODE,
          {
            begin: '`',
            end: '`'
          }
        ]
      },
      {
        className: 'number',
        variants: [
          {
            begin: hljs.C_NUMBER_RE + '[i]',
            relevance: 1
          },
          hljs.C_NUMBER_MODE
        ]
      },
      {
        begin: /:=/ // relevance booster
      },
      {
        className: 'function',
        beginKeywords: 'func',
        end: '\\s*(\\{|$)',
        excludeEnd: true,
        contains: [
          hljs.TITLE_MODE,
          {
            className: 'params',
            begin: /\(/,
            end: /\)/,
            keywords: GO_KEYWORDS,
            illegal: /["']/
          }
        ]
      }
    ]
  };
}

module.exports = go;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2dvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJzdGF0aWMvY2h1bmtzLzY5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBHb1xuQXV0aG9yOiBTdGVwaGFuIEtvdW50c28gYWthIFN0ZXBMZyA8c3RlcGxnQGdtYWlsLmNvbT5cbkNvbnRyaWJ1dG9yczogRXZnZW55IFN0ZXBhbmlzY2hldiA8aW1ib2xrQGdtYWlsLmNvbT5cbkRlc2NyaXB0aW9uOiBHb29nbGUgZ28gbGFuZ3VhZ2UgKGdvbGFuZykuIEZvciBpbmZvIGFib3V0IGxhbmd1YWdlXG5XZWJzaXRlOiBodHRwOi8vZ29sYW5nLm9yZy9cbkNhdGVnb3J5OiBjb21tb24sIHN5c3RlbVxuKi9cblxuZnVuY3Rpb24gZ28oaGxqcykge1xuICBjb25zdCBHT19LRVlXT1JEUyA9IHtcbiAgICBrZXl3b3JkOlxuICAgICAgJ2JyZWFrIGRlZmF1bHQgZnVuYyBpbnRlcmZhY2Ugc2VsZWN0IGNhc2UgbWFwIHN0cnVjdCBjaGFuIGVsc2UgZ290byBwYWNrYWdlIHN3aXRjaCAnICtcbiAgICAgICdjb25zdCBmYWxsdGhyb3VnaCBpZiByYW5nZSB0eXBlIGNvbnRpbnVlIGZvciBpbXBvcnQgcmV0dXJuIHZhciBnbyBkZWZlciAnICtcbiAgICAgICdib29sIGJ5dGUgY29tcGxleDY0IGNvbXBsZXgxMjggZmxvYXQzMiBmbG9hdDY0IGludDggaW50MTYgaW50MzIgaW50NjQgc3RyaW5nIHVpbnQ4ICcgK1xuICAgICAgJ3VpbnQxNiB1aW50MzIgdWludDY0IGludCB1aW50IHVpbnRwdHIgcnVuZScsXG4gICAgbGl0ZXJhbDpcbiAgICAgICAndHJ1ZSBmYWxzZSBpb3RhIG5pbCcsXG4gICAgYnVpbHRfaW46XG4gICAgICAnYXBwZW5kIGNhcCBjbG9zZSBjb21wbGV4IGNvcHkgaW1hZyBsZW4gbWFrZSBuZXcgcGFuaWMgcHJpbnQgcHJpbnRsbiByZWFsIHJlY292ZXIgZGVsZXRlJ1xuICB9O1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICdHbycsXG4gICAgYWxpYXNlczogWydnb2xhbmcnXSxcbiAgICBrZXl3b3JkczogR09fS0VZV09SRFMsXG4gICAgaWxsZWdhbDogJzwvJyxcbiAgICBjb250YWluczogW1xuICAgICAgaGxqcy5DX0xJTkVfQ09NTUVOVF9NT0RFLFxuICAgICAgaGxqcy5DX0JMT0NLX0NPTU1FTlRfTU9ERSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICBobGpzLlFVT1RFX1NUUklOR19NT0RFLFxuICAgICAgICAgIGhsanMuQVBPU19TVFJJTkdfTU9ERSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogJ2AnLFxuICAgICAgICAgICAgZW5kOiAnYCdcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW46IGhsanMuQ19OVU1CRVJfUkUgKyAnW2ldJyxcbiAgICAgICAgICAgIHJlbGV2YW5jZTogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgaGxqcy5DX05VTUJFUl9NT0RFXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAvOj0vIC8vIHJlbGV2YW5jZSBib29zdGVyXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdmdW5jdGlvbicsXG4gICAgICAgIGJlZ2luS2V5d29yZHM6ICdmdW5jJyxcbiAgICAgICAgZW5kOiAnXFxcXHMqKFxcXFx7fCQpJyxcbiAgICAgICAgZXhjbHVkZUVuZDogdHJ1ZSxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICBobGpzLlRJVExFX01PREUsXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAncGFyYW1zJyxcbiAgICAgICAgICAgIGJlZ2luOiAvXFwoLyxcbiAgICAgICAgICAgIGVuZDogL1xcKS8sXG4gICAgICAgICAgICBrZXl3b3JkczogR09fS0VZV09SRFMsXG4gICAgICAgICAgICBpbGxlZ2FsOiAvW1wiJ10vXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdvO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==