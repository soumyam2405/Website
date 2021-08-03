exports.ids = [38];
exports.modules = {

/***/ "./node_modules/highlight.js/lib/languages/csp.js":
/*!********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/csp.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: CSP
Description: Content Security Policy definition highlighting
Author: Taras <oxdef@oxdef.info>
Website: https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP

vim: ts=2 sw=2 st=2
*/

/** @type LanguageFn */
function csp(hljs) {
  return {
    name: 'CSP',
    case_insensitive: false,
    keywords: {
      $pattern: '[a-zA-Z][a-zA-Z0-9_-]*',
      keyword: 'base-uri child-src connect-src default-src font-src form-action ' +
        'frame-ancestors frame-src img-src media-src object-src plugin-types ' +
        'report-uri sandbox script-src style-src'
    },
    contains: [
      {
        className: 'string',
        begin: "'",
        end: "'"
      },
      {
        className: 'attribute',
        begin: '^Content',
        end: ':',
        excludeEnd: true
      }
    ]
  };
}

module.exports = csp;


/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvY3NwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiMzguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuTGFuZ3VhZ2U6IENTUFxuRGVzY3JpcHRpb246IENvbnRlbnQgU2VjdXJpdHkgUG9saWN5IGRlZmluaXRpb24gaGlnaGxpZ2h0aW5nXG5BdXRob3I6IFRhcmFzIDxveGRlZkBveGRlZi5pbmZvPlxuV2Vic2l0ZTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRUUC9DU1BcblxudmltOiB0cz0yIHN3PTIgc3Q9MlxuKi9cblxuLyoqIEB0eXBlIExhbmd1YWdlRm4gKi9cbmZ1bmN0aW9uIGNzcChobGpzKSB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ0NTUCcsXG4gICAgY2FzZV9pbnNlbnNpdGl2ZTogZmFsc2UsXG4gICAga2V5d29yZHM6IHtcbiAgICAgICRwYXR0ZXJuOiAnW2EtekEtWl1bYS16QS1aMC05Xy1dKicsXG4gICAgICBrZXl3b3JkOiAnYmFzZS11cmkgY2hpbGQtc3JjIGNvbm5lY3Qtc3JjIGRlZmF1bHQtc3JjIGZvbnQtc3JjIGZvcm0tYWN0aW9uICcgK1xuICAgICAgICAnZnJhbWUtYW5jZXN0b3JzIGZyYW1lLXNyYyBpbWctc3JjIG1lZGlhLXNyYyBvYmplY3Qtc3JjIHBsdWdpbi10eXBlcyAnICtcbiAgICAgICAgJ3JlcG9ydC11cmkgc2FuZGJveCBzY3JpcHQtc3JjIHN0eWxlLXNyYydcbiAgICB9LFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgICAgIGJlZ2luOiBcIidcIixcbiAgICAgICAgZW5kOiBcIidcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnYXR0cmlidXRlJyxcbiAgICAgICAgYmVnaW46ICdeQ29udGVudCcsXG4gICAgICAgIGVuZDogJzonLFxuICAgICAgICBleGNsdWRlRW5kOiB0cnVlXG4gICAgICB9XG4gICAgXVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNzcDtcbiJdLCJzb3VyY2VSb290IjoiIn0=