(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[22],{

/***/ "./node_modules/highlight.js/lib/languages/brainfuck.js":
/*!**************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/brainfuck.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Brainfuck
Author: Evgeny Stepanischev <imbolk@gmail.com>
Website: https://esolangs.org/wiki/Brainfuck
*/

/** @type LanguageFn */
function brainfuck(hljs) {
  const LITERAL = {
    className: 'literal',
    begin: /[+-]/,
    relevance: 0
  };
  return {
    name: 'Brainfuck',
    aliases: ['bf'],
    contains: [
      hljs.COMMENT(
        '[^\\[\\]\\.,\\+\\-<> \r\n]',
        '[\\[\\]\\.,\\+\\-<> \r\n]',
        {
          returnEnd: true,
          relevance: 0
        }
      ),
      {
        className: 'title',
        begin: '[\\[\\]]',
        relevance: 0
      },
      {
        className: 'string',
        begin: '[\\.,]',
        relevance: 0
      },
      {
        // this mode works as the only relevance counter
        begin: /(?:\+\+|--)/,
        contains: [LITERAL]
      },
      LITERAL
    ]
  };
}

module.exports = brainfuck;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2JyYWluZnVjay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoic3RhdGljL2NodW5rcy8yMi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5MYW5ndWFnZTogQnJhaW5mdWNrXG5BdXRob3I6IEV2Z2VueSBTdGVwYW5pc2NoZXYgPGltYm9sa0BnbWFpbC5jb20+XG5XZWJzaXRlOiBodHRwczovL2Vzb2xhbmdzLm9yZy93aWtpL0JyYWluZnVja1xuKi9cblxuLyoqIEB0eXBlIExhbmd1YWdlRm4gKi9cbmZ1bmN0aW9uIGJyYWluZnVjayhobGpzKSB7XG4gIGNvbnN0IExJVEVSQUwgPSB7XG4gICAgY2xhc3NOYW1lOiAnbGl0ZXJhbCcsXG4gICAgYmVnaW46IC9bKy1dLyxcbiAgICByZWxldmFuY2U6IDBcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnQnJhaW5mdWNrJyxcbiAgICBhbGlhc2VzOiBbJ2JmJ10sXG4gICAgY29udGFpbnM6IFtcbiAgICAgIGhsanMuQ09NTUVOVChcbiAgICAgICAgJ1teXFxcXFtcXFxcXVxcXFwuLFxcXFwrXFxcXC08PiBcXHJcXG5dJyxcbiAgICAgICAgJ1tcXFxcW1xcXFxdXFxcXC4sXFxcXCtcXFxcLTw+IFxcclxcbl0nLFxuICAgICAgICB7XG4gICAgICAgICAgcmV0dXJuRW5kOiB0cnVlLFxuICAgICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgICB9XG4gICAgICApLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICd0aXRsZScsXG4gICAgICAgIGJlZ2luOiAnW1xcXFxbXFxcXF1dJyxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgICBiZWdpbjogJ1tcXFxcLixdJyxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAvLyB0aGlzIG1vZGUgd29ya3MgYXMgdGhlIG9ubHkgcmVsZXZhbmNlIGNvdW50ZXJcbiAgICAgICAgYmVnaW46IC8oPzpcXCtcXCt8LS0pLyxcbiAgICAgICAgY29udGFpbnM6IFtMSVRFUkFMXVxuICAgICAgfSxcbiAgICAgIExJVEVSQUxcbiAgICBdXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYnJhaW5mdWNrO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==