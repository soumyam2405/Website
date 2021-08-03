(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[70],{

/***/ "./node_modules/highlight.js/lib/languages/golo.js":
/*!*********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/golo.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Golo
Author: Philippe Charriere <ph.charriere@gmail.com>
Description: a lightweight dynamic language for the JVM
Website: http://golo-lang.org/
*/

function golo(hljs) {
  return {
    name: 'Golo',
    keywords: {
      keyword:
          'println readln print import module function local return let var ' +
          'while for foreach times in case when match with break continue ' +
          'augment augmentation each find filter reduce ' +
          'if then else otherwise try catch finally raise throw orIfNull ' +
          'DynamicObject|10 DynamicVariable struct Observable map set vector list array',
      literal:
          'true false null'
    },
    contains: [
      hljs.HASH_COMMENT_MODE,
      hljs.QUOTE_STRING_MODE,
      hljs.C_NUMBER_MODE,
      {
        className: 'meta',
        begin: '@[A-Za-z]+'
      }
    ]
  };
}

module.exports = golo;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2dvbG8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvNzAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuTGFuZ3VhZ2U6IEdvbG9cbkF1dGhvcjogUGhpbGlwcGUgQ2hhcnJpZXJlIDxwaC5jaGFycmllcmVAZ21haWwuY29tPlxuRGVzY3JpcHRpb246IGEgbGlnaHR3ZWlnaHQgZHluYW1pYyBsYW5ndWFnZSBmb3IgdGhlIEpWTVxuV2Vic2l0ZTogaHR0cDovL2dvbG8tbGFuZy5vcmcvXG4qL1xuXG5mdW5jdGlvbiBnb2xvKGhsanMpIHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnR29sbycsXG4gICAga2V5d29yZHM6IHtcbiAgICAgIGtleXdvcmQ6XG4gICAgICAgICAgJ3ByaW50bG4gcmVhZGxuIHByaW50IGltcG9ydCBtb2R1bGUgZnVuY3Rpb24gbG9jYWwgcmV0dXJuIGxldCB2YXIgJyArXG4gICAgICAgICAgJ3doaWxlIGZvciBmb3JlYWNoIHRpbWVzIGluIGNhc2Ugd2hlbiBtYXRjaCB3aXRoIGJyZWFrIGNvbnRpbnVlICcgK1xuICAgICAgICAgICdhdWdtZW50IGF1Z21lbnRhdGlvbiBlYWNoIGZpbmQgZmlsdGVyIHJlZHVjZSAnICtcbiAgICAgICAgICAnaWYgdGhlbiBlbHNlIG90aGVyd2lzZSB0cnkgY2F0Y2ggZmluYWxseSByYWlzZSB0aHJvdyBvcklmTnVsbCAnICtcbiAgICAgICAgICAnRHluYW1pY09iamVjdHwxMCBEeW5hbWljVmFyaWFibGUgc3RydWN0IE9ic2VydmFibGUgbWFwIHNldCB2ZWN0b3IgbGlzdCBhcnJheScsXG4gICAgICBsaXRlcmFsOlxuICAgICAgICAgICd0cnVlIGZhbHNlIG51bGwnXG4gICAgfSxcbiAgICBjb250YWluczogW1xuICAgICAgaGxqcy5IQVNIX0NPTU1FTlRfTU9ERSxcbiAgICAgIGhsanMuUVVPVEVfU1RSSU5HX01PREUsXG4gICAgICBobGpzLkNfTlVNQkVSX01PREUsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgICAgICBiZWdpbjogJ0BbQS1aYS16XSsnXG4gICAgICB9XG4gICAgXVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdvbG87XG4iXSwic291cmNlUm9vdCI6IiJ9