exports.ids = [27];
exports.modules = {

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

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvY2xlYW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1Asc0NBQXNDLFVBQVU7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiMjcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuTGFuZ3VhZ2U6IENsZWFuXG5BdXRob3I6IENhbWlsIFN0YXBzIDxpbmZvQGNhbWlsc3RhcHMubmw+XG5DYXRlZ29yeTogZnVuY3Rpb25hbFxuV2Vic2l0ZTogaHR0cDovL2NsZWFuLmNzLnJ1Lm5sXG4qL1xuXG4vKiogQHR5cGUgTGFuZ3VhZ2VGbiAqL1xuZnVuY3Rpb24gY2xlYW4oaGxqcykge1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICdDbGVhbicsXG4gICAgYWxpYXNlczogW1xuICAgICAgJ2NsZWFuJyxcbiAgICAgICdpY2wnLFxuICAgICAgJ2RjbCdcbiAgICBdLFxuICAgIGtleXdvcmRzOiB7XG4gICAgICBrZXl3b3JkOlxuICAgICAgICAnaWYgbGV0IGluIHdpdGggd2hlcmUgY2FzZSBvZiBjbGFzcyBpbnN0YW5jZSBvdGhlcndpc2UgJyArXG4gICAgICAgICdpbXBsZW1lbnRhdGlvbiBkZWZpbml0aW9uIHN5c3RlbSBtb2R1bGUgZnJvbSBpbXBvcnQgcXVhbGlmaWVkIGFzICcgK1xuICAgICAgICAnc3BlY2lhbCBjb2RlIGlubGluZSBmb3JlaWduIGV4cG9ydCBjY2FsbCBzdGRjYWxsIGdlbmVyaWMgZGVyaXZlICcgK1xuICAgICAgICAnaW5maXggaW5maXhsIGluZml4cicsXG4gICAgICBidWlsdF9pbjpcbiAgICAgICAgJ0ludCBSZWFsIENoYXIgQm9vbCcsXG4gICAgICBsaXRlcmFsOlxuICAgICAgICAnVHJ1ZSBGYWxzZSdcbiAgICB9LFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBobGpzLkNfTElORV9DT01NRU5UX01PREUsXG4gICAgICBobGpzLkNfQkxPQ0tfQ09NTUVOVF9NT0RFLFxuICAgICAgaGxqcy5BUE9TX1NUUklOR19NT0RFLFxuICAgICAgaGxqcy5RVU9URV9TVFJJTkdfTU9ERSxcbiAgICAgIGhsanMuQ19OVU1CRVJfTU9ERSxcbiAgICAgIHsgLy8gcmVsZXZhbmNlIGJvb3N0ZXJcbiAgICAgICAgYmVnaW46ICctPnw8LVt8Ol0/fCMhP3w+Pj18XFxcXHtcXFxcfHxcXFxcfFxcXFx9fDo9PXw9Onw8PidcbiAgICAgIH1cbiAgICBdXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xlYW47XG4iXSwic291cmNlUm9vdCI6IiJ9