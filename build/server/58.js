exports.ids = [58];
exports.modules = {

/***/ "./node_modules/highlight.js/lib/languages/fix.js":
/*!********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/fix.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: FIX
Author: Brent Bradbury <brent@brentium.com>
*/

/** @type LanguageFn */
function fix(hljs) {
  return {
    name: 'FIX',
    contains: [{
      begin: /[^\u2401\u0001]+/,
      end: /[\u2401\u0001]/,
      excludeEnd: true,
      returnBegin: true,
      returnEnd: false,
      contains: [
        {
          begin: /([^\u2401\u0001=]+)/,
          end: /=([^\u2401\u0001=]+)/,
          returnEnd: true,
          returnBegin: false,
          className: 'attr'
        },
        {
          begin: /=/,
          end: /([\u2401\u0001])/,
          excludeEnd: true,
          excludeBegin: true,
          className: 'string'
        }
      ]
    }],
    case_insensitive: true
  };
}

module.exports = fix;


/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvZml4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6IjU4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBGSVhcbkF1dGhvcjogQnJlbnQgQnJhZGJ1cnkgPGJyZW50QGJyZW50aXVtLmNvbT5cbiovXG5cbi8qKiBAdHlwZSBMYW5ndWFnZUZuICovXG5mdW5jdGlvbiBmaXgoaGxqcykge1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICdGSVgnLFxuICAgIGNvbnRhaW5zOiBbe1xuICAgICAgYmVnaW46IC9bXlxcdTI0MDFcXHUwMDAxXSsvLFxuICAgICAgZW5kOiAvW1xcdTI0MDFcXHUwMDAxXS8sXG4gICAgICBleGNsdWRlRW5kOiB0cnVlLFxuICAgICAgcmV0dXJuQmVnaW46IHRydWUsXG4gICAgICByZXR1cm5FbmQ6IGZhbHNlLFxuICAgICAgY29udGFpbnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGJlZ2luOiAvKFteXFx1MjQwMVxcdTAwMDE9XSspLyxcbiAgICAgICAgICBlbmQ6IC89KFteXFx1MjQwMVxcdTAwMDE9XSspLyxcbiAgICAgICAgICByZXR1cm5FbmQ6IHRydWUsXG4gICAgICAgICAgcmV0dXJuQmVnaW46IGZhbHNlLFxuICAgICAgICAgIGNsYXNzTmFtZTogJ2F0dHInXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBiZWdpbjogLz0vLFxuICAgICAgICAgIGVuZDogLyhbXFx1MjQwMVxcdTAwMDFdKS8sXG4gICAgICAgICAgZXhjbHVkZUVuZDogdHJ1ZSxcbiAgICAgICAgICBleGNsdWRlQmVnaW46IHRydWUsXG4gICAgICAgICAgY2xhc3NOYW1lOiAnc3RyaW5nJ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfV0sXG4gICAgY2FzZV9pbnNlbnNpdGl2ZTogdHJ1ZVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZpeDtcbiJdLCJzb3VyY2VSb290IjoiIn0=