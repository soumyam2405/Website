(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[28],{

/***/ "./node_modules/highlight.js/lib/languages/clean.js":
/*!**********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/clean.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Clean
Author: Camil Staps <info@camilstaps.nl>
Category: functional
Website: http://clean.cs.ru.nl
*/

/** @type LanguageFn */
function clean(hljs) {
  return {
    name: 'Clean',
    aliases: [
      'clean',
      'icl',
      'dcl'
    ],
    keywords: {
      keyword:
        'if let in with where case of class instance otherwise ' +
        'implementation definition system module from import qualified as ' +
        'special code inline foreign export ccall stdcall generic derive ' +
        'infix infixl infixr',
      built_in:
        'Int Real Char Bool',
      literal:
        'True False'
    },
    contains: [
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE,
      hljs.C_NUMBER_MODE,
      { // relevance booster
        begin: '->|<-[|:]?|#!?|>>=|\\{\\||\\|\\}|:==|=:|<>'
      }
    ]
  };
}

module.exports = clean;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2NsZWFuLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1Asc0NBQXNDLFVBQVU7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoic3RhdGljL2NodW5rcy8yOC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5MYW5ndWFnZTogQ2xlYW5cbkF1dGhvcjogQ2FtaWwgU3RhcHMgPGluZm9AY2FtaWxzdGFwcy5ubD5cbkNhdGVnb3J5OiBmdW5jdGlvbmFsXG5XZWJzaXRlOiBodHRwOi8vY2xlYW4uY3MucnUubmxcbiovXG5cbi8qKiBAdHlwZSBMYW5ndWFnZUZuICovXG5mdW5jdGlvbiBjbGVhbihobGpzKSB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ0NsZWFuJyxcbiAgICBhbGlhc2VzOiBbXG4gICAgICAnY2xlYW4nLFxuICAgICAgJ2ljbCcsXG4gICAgICAnZGNsJ1xuICAgIF0sXG4gICAga2V5d29yZHM6IHtcbiAgICAgIGtleXdvcmQ6XG4gICAgICAgICdpZiBsZXQgaW4gd2l0aCB3aGVyZSBjYXNlIG9mIGNsYXNzIGluc3RhbmNlIG90aGVyd2lzZSAnICtcbiAgICAgICAgJ2ltcGxlbWVudGF0aW9uIGRlZmluaXRpb24gc3lzdGVtIG1vZHVsZSBmcm9tIGltcG9ydCBxdWFsaWZpZWQgYXMgJyArXG4gICAgICAgICdzcGVjaWFsIGNvZGUgaW5saW5lIGZvcmVpZ24gZXhwb3J0IGNjYWxsIHN0ZGNhbGwgZ2VuZXJpYyBkZXJpdmUgJyArXG4gICAgICAgICdpbmZpeCBpbmZpeGwgaW5maXhyJyxcbiAgICAgIGJ1aWx0X2luOlxuICAgICAgICAnSW50IFJlYWwgQ2hhciBCb29sJyxcbiAgICAgIGxpdGVyYWw6XG4gICAgICAgICdUcnVlIEZhbHNlJ1xuICAgIH0sXG4gICAgY29udGFpbnM6IFtcbiAgICAgIGhsanMuQ19MSU5FX0NPTU1FTlRfTU9ERSxcbiAgICAgIGhsanMuQ19CTE9DS19DT01NRU5UX01PREUsXG4gICAgICBobGpzLkFQT1NfU1RSSU5HX01PREUsXG4gICAgICBobGpzLlFVT1RFX1NUUklOR19NT0RFLFxuICAgICAgaGxqcy5DX05VTUJFUl9NT0RFLFxuICAgICAgeyAvLyByZWxldmFuY2UgYm9vc3RlclxuICAgICAgICBiZWdpbjogJy0+fDwtW3w6XT98IyE/fD4+PXxcXFxce1xcXFx8fFxcXFx8XFxcXH18Oj09fD06fDw+J1xuICAgICAgfVxuICAgIF1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbGVhbjtcbiJdLCJzb3VyY2VSb290IjoiIn0=