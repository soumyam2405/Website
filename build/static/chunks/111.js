(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[111],{

/***/ "./node_modules/highlight.js/lib/languages/mizar.js":
/*!**********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/mizar.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Mizar
Description: The Mizar Language is a formal language derived from the mathematical vernacular.
Author: Kelley van Evert <kelleyvanevert@gmail.com>
Website: http://mizar.org/language/
Category: scientific
*/

function mizar(hljs) {
  return {
    name: 'Mizar',
    keywords:
      'environ vocabularies notations constructors definitions ' +
      'registrations theorems schemes requirements begin end definition ' +
      'registration cluster existence pred func defpred deffunc theorem ' +
      'proof let take assume then thus hence ex for st holds consider ' +
      'reconsider such that and in provided of as from be being by means ' +
      'equals implies iff redefine define now not or attr is mode ' +
      'suppose per cases set thesis contradiction scheme reserve struct ' +
      'correctness compatibility coherence symmetry assymetry ' +
      'reflexivity irreflexivity connectedness uniqueness commutativity ' +
      'idempotence involutiveness projectivity',
    contains: [
      hljs.COMMENT('::', '$')
    ]
  };
}

module.exports = mizar;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL21pemFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvMTExLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBNaXphclxuRGVzY3JpcHRpb246IFRoZSBNaXphciBMYW5ndWFnZSBpcyBhIGZvcm1hbCBsYW5ndWFnZSBkZXJpdmVkIGZyb20gdGhlIG1hdGhlbWF0aWNhbCB2ZXJuYWN1bGFyLlxuQXV0aG9yOiBLZWxsZXkgdmFuIEV2ZXJ0IDxrZWxsZXl2YW5ldmVydEBnbWFpbC5jb20+XG5XZWJzaXRlOiBodHRwOi8vbWl6YXIub3JnL2xhbmd1YWdlL1xuQ2F0ZWdvcnk6IHNjaWVudGlmaWNcbiovXG5cbmZ1bmN0aW9uIG1pemFyKGhsanMpIHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnTWl6YXInLFxuICAgIGtleXdvcmRzOlxuICAgICAgJ2Vudmlyb24gdm9jYWJ1bGFyaWVzIG5vdGF0aW9ucyBjb25zdHJ1Y3RvcnMgZGVmaW5pdGlvbnMgJyArXG4gICAgICAncmVnaXN0cmF0aW9ucyB0aGVvcmVtcyBzY2hlbWVzIHJlcXVpcmVtZW50cyBiZWdpbiBlbmQgZGVmaW5pdGlvbiAnICtcbiAgICAgICdyZWdpc3RyYXRpb24gY2x1c3RlciBleGlzdGVuY2UgcHJlZCBmdW5jIGRlZnByZWQgZGVmZnVuYyB0aGVvcmVtICcgK1xuICAgICAgJ3Byb29mIGxldCB0YWtlIGFzc3VtZSB0aGVuIHRodXMgaGVuY2UgZXggZm9yIHN0IGhvbGRzIGNvbnNpZGVyICcgK1xuICAgICAgJ3JlY29uc2lkZXIgc3VjaCB0aGF0IGFuZCBpbiBwcm92aWRlZCBvZiBhcyBmcm9tIGJlIGJlaW5nIGJ5IG1lYW5zICcgK1xuICAgICAgJ2VxdWFscyBpbXBsaWVzIGlmZiByZWRlZmluZSBkZWZpbmUgbm93IG5vdCBvciBhdHRyIGlzIG1vZGUgJyArXG4gICAgICAnc3VwcG9zZSBwZXIgY2FzZXMgc2V0IHRoZXNpcyBjb250cmFkaWN0aW9uIHNjaGVtZSByZXNlcnZlIHN0cnVjdCAnICtcbiAgICAgICdjb3JyZWN0bmVzcyBjb21wYXRpYmlsaXR5IGNvaGVyZW5jZSBzeW1tZXRyeSBhc3N5bWV0cnkgJyArXG4gICAgICAncmVmbGV4aXZpdHkgaXJyZWZsZXhpdml0eSBjb25uZWN0ZWRuZXNzIHVuaXF1ZW5lc3MgY29tbXV0YXRpdml0eSAnICtcbiAgICAgICdpZGVtcG90ZW5jZSBpbnZvbHV0aXZlbmVzcyBwcm9qZWN0aXZpdHknLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBobGpzLkNPTU1FTlQoJzo6JywgJyQnKVxuICAgIF1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtaXphcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=