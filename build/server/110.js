exports.ids = [110];
exports.modules = {

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

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvbWl6YXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6IjExMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5MYW5ndWFnZTogTWl6YXJcbkRlc2NyaXB0aW9uOiBUaGUgTWl6YXIgTGFuZ3VhZ2UgaXMgYSBmb3JtYWwgbGFuZ3VhZ2UgZGVyaXZlZCBmcm9tIHRoZSBtYXRoZW1hdGljYWwgdmVybmFjdWxhci5cbkF1dGhvcjogS2VsbGV5IHZhbiBFdmVydCA8a2VsbGV5dmFuZXZlcnRAZ21haWwuY29tPlxuV2Vic2l0ZTogaHR0cDovL21pemFyLm9yZy9sYW5ndWFnZS9cbkNhdGVnb3J5OiBzY2llbnRpZmljXG4qL1xuXG5mdW5jdGlvbiBtaXphcihobGpzKSB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ01pemFyJyxcbiAgICBrZXl3b3JkczpcbiAgICAgICdlbnZpcm9uIHZvY2FidWxhcmllcyBub3RhdGlvbnMgY29uc3RydWN0b3JzIGRlZmluaXRpb25zICcgK1xuICAgICAgJ3JlZ2lzdHJhdGlvbnMgdGhlb3JlbXMgc2NoZW1lcyByZXF1aXJlbWVudHMgYmVnaW4gZW5kIGRlZmluaXRpb24gJyArXG4gICAgICAncmVnaXN0cmF0aW9uIGNsdXN0ZXIgZXhpc3RlbmNlIHByZWQgZnVuYyBkZWZwcmVkIGRlZmZ1bmMgdGhlb3JlbSAnICtcbiAgICAgICdwcm9vZiBsZXQgdGFrZSBhc3N1bWUgdGhlbiB0aHVzIGhlbmNlIGV4IGZvciBzdCBob2xkcyBjb25zaWRlciAnICtcbiAgICAgICdyZWNvbnNpZGVyIHN1Y2ggdGhhdCBhbmQgaW4gcHJvdmlkZWQgb2YgYXMgZnJvbSBiZSBiZWluZyBieSBtZWFucyAnICtcbiAgICAgICdlcXVhbHMgaW1wbGllcyBpZmYgcmVkZWZpbmUgZGVmaW5lIG5vdyBub3Qgb3IgYXR0ciBpcyBtb2RlICcgK1xuICAgICAgJ3N1cHBvc2UgcGVyIGNhc2VzIHNldCB0aGVzaXMgY29udHJhZGljdGlvbiBzY2hlbWUgcmVzZXJ2ZSBzdHJ1Y3QgJyArXG4gICAgICAnY29ycmVjdG5lc3MgY29tcGF0aWJpbGl0eSBjb2hlcmVuY2Ugc3ltbWV0cnkgYXNzeW1ldHJ5ICcgK1xuICAgICAgJ3JlZmxleGl2aXR5IGlycmVmbGV4aXZpdHkgY29ubmVjdGVkbmVzcyB1bmlxdWVuZXNzIGNvbW11dGF0aXZpdHkgJyArXG4gICAgICAnaWRlbXBvdGVuY2UgaW52b2x1dGl2ZW5lc3MgcHJvamVjdGl2aXR5JyxcbiAgICBjb250YWluczogW1xuICAgICAgaGxqcy5DT01NRU5UKCc6OicsICckJylcbiAgICBdXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWl6YXI7XG4iXSwic291cmNlUm9vdCI6IiJ9