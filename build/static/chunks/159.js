(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[159],{

/***/ "./node_modules/highlight.js/lib/languages/shell.js":
/*!**********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/shell.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Shell Session
Requires: bash.js
Author: TSUYUSATO Kitsune <make.just.on@gmail.com>
Category: common
Audit: 2020
*/

/** @type LanguageFn */
function shell(hljs) {
  return {
    name: 'Shell Session',
    aliases: [ 'console' ],
    contains: [
      {
        className: 'meta',
        // We cannot add \s (spaces) in the regular expression otherwise it will be too broad and produce unexpected result.
        // For instance, in the following example, it would match "echo /path/to/home >" as a prompt:
        // echo /path/to/home > t.exe
        begin: /^\s{0,3}[/~\w\d[\]()@-]*[>%$#]/,
        starts: {
          end: /[^\\](?=\s*$)/,
          subLanguage: 'bash'
        }
      }
    ]
  };
}

module.exports = shell;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3NoZWxsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsSUFBSTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvMTU5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBTaGVsbCBTZXNzaW9uXG5SZXF1aXJlczogYmFzaC5qc1xuQXV0aG9yOiBUU1VZVVNBVE8gS2l0c3VuZSA8bWFrZS5qdXN0Lm9uQGdtYWlsLmNvbT5cbkNhdGVnb3J5OiBjb21tb25cbkF1ZGl0OiAyMDIwXG4qL1xuXG4vKiogQHR5cGUgTGFuZ3VhZ2VGbiAqL1xuZnVuY3Rpb24gc2hlbGwoaGxqcykge1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICdTaGVsbCBTZXNzaW9uJyxcbiAgICBhbGlhc2VzOiBbICdjb25zb2xlJyBdLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgICAgICAvLyBXZSBjYW5ub3QgYWRkIFxccyAoc3BhY2VzKSBpbiB0aGUgcmVndWxhciBleHByZXNzaW9uIG90aGVyd2lzZSBpdCB3aWxsIGJlIHRvbyBicm9hZCBhbmQgcHJvZHVjZSB1bmV4cGVjdGVkIHJlc3VsdC5cbiAgICAgICAgLy8gRm9yIGluc3RhbmNlLCBpbiB0aGUgZm9sbG93aW5nIGV4YW1wbGUsIGl0IHdvdWxkIG1hdGNoIFwiZWNobyAvcGF0aC90by9ob21lID5cIiBhcyBhIHByb21wdDpcbiAgICAgICAgLy8gZWNobyAvcGF0aC90by9ob21lID4gdC5leGVcbiAgICAgICAgYmVnaW46IC9eXFxzezAsM31bL35cXHdcXGRbXFxdKClALV0qWz4lJCNdLyxcbiAgICAgICAgc3RhcnRzOiB7XG4gICAgICAgICAgZW5kOiAvW15cXFxcXSg/PVxccyokKS8sXG4gICAgICAgICAgc3ViTGFuZ3VhZ2U6ICdiYXNoJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgXVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNoZWxsO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==