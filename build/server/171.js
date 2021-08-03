exports.ids = [171];
exports.modules = {

/***/ "./node_modules/highlight.js/lib/languages/taggerscript.js":
/*!*****************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/taggerscript.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Tagger Script
Author: Philipp Wolfer <ph.wolfer@gmail.com>
Description: Syntax Highlighting for the Tagger Script as used by MusicBrainz Picard.
Website: https://picard.musicbrainz.org
 */
function taggerscript(hljs) {
  const COMMENT = {
    className: 'comment',
    begin: /\$noop\(/,
    end: /\)/,
    contains: [ {
      begin: /\(/,
      end: /\)/,
      contains: [ 'self',
        {
          begin: /\\./
        } ]
    } ],
    relevance: 10
  };

  const FUNCTION = {
    className: 'keyword',
    begin: /\$(?!noop)[a-zA-Z][_a-zA-Z0-9]*/,
    end: /\(/,
    excludeEnd: true
  };

  const VARIABLE = {
    className: 'variable',
    begin: /%[_a-zA-Z0-9:]*/,
    end: '%'
  };

  const ESCAPE_SEQUENCE = {
    className: 'symbol',
    begin: /\\./
  };

  return {
    name: 'Tagger Script',
    contains: [
      COMMENT,
      FUNCTION,
      VARIABLE,
      ESCAPE_SEQUENCE
    ]
  };
}

module.exports = taggerscript;


/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvdGFnZ2Vyc2NyaXB0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6IjE3MS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5MYW5ndWFnZTogVGFnZ2VyIFNjcmlwdFxuQXV0aG9yOiBQaGlsaXBwIFdvbGZlciA8cGgud29sZmVyQGdtYWlsLmNvbT5cbkRlc2NyaXB0aW9uOiBTeW50YXggSGlnaGxpZ2h0aW5nIGZvciB0aGUgVGFnZ2VyIFNjcmlwdCBhcyB1c2VkIGJ5IE11c2ljQnJhaW56IFBpY2FyZC5cbldlYnNpdGU6IGh0dHBzOi8vcGljYXJkLm11c2ljYnJhaW56Lm9yZ1xuICovXG5mdW5jdGlvbiB0YWdnZXJzY3JpcHQoaGxqcykge1xuICBjb25zdCBDT01NRU5UID0ge1xuICAgIGNsYXNzTmFtZTogJ2NvbW1lbnQnLFxuICAgIGJlZ2luOiAvXFwkbm9vcFxcKC8sXG4gICAgZW5kOiAvXFwpLyxcbiAgICBjb250YWluczogWyB7XG4gICAgICBiZWdpbjogL1xcKC8sXG4gICAgICBlbmQ6IC9cXCkvLFxuICAgICAgY29udGFpbnM6IFsgJ3NlbGYnLFxuICAgICAgICB7XG4gICAgICAgICAgYmVnaW46IC9cXFxcLi9cbiAgICAgICAgfSBdXG4gICAgfSBdLFxuICAgIHJlbGV2YW5jZTogMTBcbiAgfTtcblxuICBjb25zdCBGVU5DVElPTiA9IHtcbiAgICBjbGFzc05hbWU6ICdrZXl3b3JkJyxcbiAgICBiZWdpbjogL1xcJCg/IW5vb3ApW2EtekEtWl1bX2EtekEtWjAtOV0qLyxcbiAgICBlbmQ6IC9cXCgvLFxuICAgIGV4Y2x1ZGVFbmQ6IHRydWVcbiAgfTtcblxuICBjb25zdCBWQVJJQUJMRSA9IHtcbiAgICBjbGFzc05hbWU6ICd2YXJpYWJsZScsXG4gICAgYmVnaW46IC8lW19hLXpBLVowLTk6XSovLFxuICAgIGVuZDogJyUnXG4gIH07XG5cbiAgY29uc3QgRVNDQVBFX1NFUVVFTkNFID0ge1xuICAgIGNsYXNzTmFtZTogJ3N5bWJvbCcsXG4gICAgYmVnaW46IC9cXFxcLi9cbiAgfTtcblxuICByZXR1cm4ge1xuICAgIG5hbWU6ICdUYWdnZXIgU2NyaXB0JyxcbiAgICBjb250YWluczogW1xuICAgICAgQ09NTUVOVCxcbiAgICAgIEZVTkNUSU9OLFxuICAgICAgVkFSSUFCTEUsXG4gICAgICBFU0NBUEVfU0VRVUVOQ0VcbiAgICBdXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdGFnZ2Vyc2NyaXB0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==