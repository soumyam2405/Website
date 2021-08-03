(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[117],{

/***/ "./node_modules/highlight.js/lib/languages/nim.js":
/*!********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/nim.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Nim
Description: Nim is a statically typed compiled systems programming language.
Website: https://nim-lang.org
Category: system
*/

function nim(hljs) {
  return {
    name: 'Nim',
    aliases: [ 'nim' ],
    keywords: {
      keyword:
        'addr and as asm bind block break case cast const continue converter ' +
        'discard distinct div do elif else end enum except export finally ' +
        'for from func generic if import in include interface is isnot iterator ' +
        'let macro method mixin mod nil not notin object of or out proc ptr ' +
        'raise ref return shl shr static template try tuple type using var ' +
        'when while with without xor yield',
      literal:
        'shared guarded stdin stdout stderr result true false',
      built_in:
        'int int8 int16 int32 int64 uint uint8 uint16 uint32 uint64 float ' +
        'float32 float64 bool char string cstring pointer expr stmt void ' +
        'auto any range array openarray varargs seq set clong culong cchar ' +
        'cschar cshort cint csize clonglong cfloat cdouble clongdouble ' +
        'cuchar cushort cuint culonglong cstringarray semistatic'
    },
    contains: [
      {
        className: 'meta', // Actually pragma
        begin: /\{\./,
        end: /\.\}/,
        relevance: 10
      },
      {
        className: 'string',
        begin: /[a-zA-Z]\w*"/,
        end: /"/,
        contains: [
          {
            begin: /""/
          }
        ]
      },
      {
        className: 'string',
        begin: /([a-zA-Z]\w*)?"""/,
        end: /"""/
      },
      hljs.QUOTE_STRING_MODE,
      {
        className: 'type',
        begin: /\b[A-Z]\w+\b/,
        relevance: 0
      },
      {
        className: 'number',
        relevance: 0,
        variants: [
          {
            begin: /\b(0[xX][0-9a-fA-F][_0-9a-fA-F]*)('?[iIuU](8|16|32|64))?/
          },
          {
            begin: /\b(0o[0-7][_0-7]*)('?[iIuUfF](8|16|32|64))?/
          },
          {
            begin: /\b(0(b|B)[01][_01]*)('?[iIuUfF](8|16|32|64))?/
          },
          {
            begin: /\b(\d[_\d]*)('?[iIuUfF](8|16|32|64))?/
          }
        ]
      },
      hljs.HASH_COMMENT_MODE
    ]
  };
}

module.exports = nim;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL25pbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsa0JBQWtCO0FBQ2xCO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoic3RhdGljL2NodW5rcy8xMTcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuTGFuZ3VhZ2U6IE5pbVxuRGVzY3JpcHRpb246IE5pbSBpcyBhIHN0YXRpY2FsbHkgdHlwZWQgY29tcGlsZWQgc3lzdGVtcyBwcm9ncmFtbWluZyBsYW5ndWFnZS5cbldlYnNpdGU6IGh0dHBzOi8vbmltLWxhbmcub3JnXG5DYXRlZ29yeTogc3lzdGVtXG4qL1xuXG5mdW5jdGlvbiBuaW0oaGxqcykge1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICdOaW0nLFxuICAgIGFsaWFzZXM6IFsgJ25pbScgXSxcbiAgICBrZXl3b3Jkczoge1xuICAgICAga2V5d29yZDpcbiAgICAgICAgJ2FkZHIgYW5kIGFzIGFzbSBiaW5kIGJsb2NrIGJyZWFrIGNhc2UgY2FzdCBjb25zdCBjb250aW51ZSBjb252ZXJ0ZXIgJyArXG4gICAgICAgICdkaXNjYXJkIGRpc3RpbmN0IGRpdiBkbyBlbGlmIGVsc2UgZW5kIGVudW0gZXhjZXB0IGV4cG9ydCBmaW5hbGx5ICcgK1xuICAgICAgICAnZm9yIGZyb20gZnVuYyBnZW5lcmljIGlmIGltcG9ydCBpbiBpbmNsdWRlIGludGVyZmFjZSBpcyBpc25vdCBpdGVyYXRvciAnICtcbiAgICAgICAgJ2xldCBtYWNybyBtZXRob2QgbWl4aW4gbW9kIG5pbCBub3Qgbm90aW4gb2JqZWN0IG9mIG9yIG91dCBwcm9jIHB0ciAnICtcbiAgICAgICAgJ3JhaXNlIHJlZiByZXR1cm4gc2hsIHNociBzdGF0aWMgdGVtcGxhdGUgdHJ5IHR1cGxlIHR5cGUgdXNpbmcgdmFyICcgK1xuICAgICAgICAnd2hlbiB3aGlsZSB3aXRoIHdpdGhvdXQgeG9yIHlpZWxkJyxcbiAgICAgIGxpdGVyYWw6XG4gICAgICAgICdzaGFyZWQgZ3VhcmRlZCBzdGRpbiBzdGRvdXQgc3RkZXJyIHJlc3VsdCB0cnVlIGZhbHNlJyxcbiAgICAgIGJ1aWx0X2luOlxuICAgICAgICAnaW50IGludDggaW50MTYgaW50MzIgaW50NjQgdWludCB1aW50OCB1aW50MTYgdWludDMyIHVpbnQ2NCBmbG9hdCAnICtcbiAgICAgICAgJ2Zsb2F0MzIgZmxvYXQ2NCBib29sIGNoYXIgc3RyaW5nIGNzdHJpbmcgcG9pbnRlciBleHByIHN0bXQgdm9pZCAnICtcbiAgICAgICAgJ2F1dG8gYW55IHJhbmdlIGFycmF5IG9wZW5hcnJheSB2YXJhcmdzIHNlcSBzZXQgY2xvbmcgY3Vsb25nIGNjaGFyICcgK1xuICAgICAgICAnY3NjaGFyIGNzaG9ydCBjaW50IGNzaXplIGNsb25nbG9uZyBjZmxvYXQgY2RvdWJsZSBjbG9uZ2RvdWJsZSAnICtcbiAgICAgICAgJ2N1Y2hhciBjdXNob3J0IGN1aW50IGN1bG9uZ2xvbmcgY3N0cmluZ2FycmF5IHNlbWlzdGF0aWMnXG4gICAgfSxcbiAgICBjb250YWluczogW1xuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdtZXRhJywgLy8gQWN0dWFsbHkgcHJhZ21hXG4gICAgICAgIGJlZ2luOiAvXFx7XFwuLyxcbiAgICAgICAgZW5kOiAvXFwuXFx9LyxcbiAgICAgICAgcmVsZXZhbmNlOiAxMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICAgICAgYmVnaW46IC9bYS16QS1aXVxcdypcIi8sXG4gICAgICAgIGVuZDogL1wiLyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogL1wiXCIvXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgICBiZWdpbjogLyhbYS16QS1aXVxcdyopP1wiXCJcIi8sXG4gICAgICAgIGVuZDogL1wiXCJcIi9cbiAgICAgIH0sXG4gICAgICBobGpzLlFVT1RFX1NUUklOR19NT0RFLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICd0eXBlJyxcbiAgICAgICAgYmVnaW46IC9cXGJbQS1aXVxcdytcXGIvLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogL1xcYigwW3hYXVswLTlhLWZBLUZdW18wLTlhLWZBLUZdKikoJz9baUl1VV0oOHwxNnwzMnw2NCkpPy9cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luOiAvXFxiKDBvWzAtN11bXzAtN10qKSgnP1tpSXVVZkZdKDh8MTZ8MzJ8NjQpKT8vXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogL1xcYigwKGJ8QilbMDFdW18wMV0qKSgnP1tpSXVVZkZdKDh8MTZ8MzJ8NjQpKT8vXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogL1xcYihcXGRbX1xcZF0qKSgnP1tpSXVVZkZdKDh8MTZ8MzJ8NjQpKT8vXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgaGxqcy5IQVNIX0NPTU1FTlRfTU9ERVxuICAgIF1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBuaW07XG4iXSwic291cmNlUm9vdCI6IiJ9