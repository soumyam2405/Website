exports.ids = [160];
exports.modules = {

/***/ "./node_modules/highlight.js/lib/languages/smalltalk.js":
/*!**************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/smalltalk.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Smalltalk
Description: Smalltalk is an object-oriented, dynamically typed reflective programming language.
Author: Vladimir Gubarkov <xonixx@gmail.com>
Website: https://en.wikipedia.org/wiki/Smalltalk
*/

function smalltalk(hljs) {
  const VAR_IDENT_RE = '[a-z][a-zA-Z0-9_]*';
  const CHAR = {
    className: 'string',
    begin: '\\$.{1}'
  };
  const SYMBOL = {
    className: 'symbol',
    begin: '#' + hljs.UNDERSCORE_IDENT_RE
  };
  return {
    name: 'Smalltalk',
    aliases: [ 'st' ],
    keywords: 'self super nil true false thisContext', // only 6
    contains: [
      hljs.COMMENT('"', '"'),
      hljs.APOS_STRING_MODE,
      {
        className: 'type',
        begin: '\\b[A-Z][A-Za-z0-9_]*',
        relevance: 0
      },
      {
        begin: VAR_IDENT_RE + ':',
        relevance: 0
      },
      hljs.C_NUMBER_MODE,
      SYMBOL,
      CHAR,
      {
        // This looks more complicated than needed to avoid combinatorial
        // explosion under V8. It effectively means `| var1 var2 ... |` with
        // whitespace adjacent to `|` being optional.
        begin: '\\|[ ]*' + VAR_IDENT_RE + '([ ]+' + VAR_IDENT_RE + ')*[ ]*\\|',
        returnBegin: true,
        end: /\|/,
        illegal: /\S/,
        contains: [ {
          begin: '(\\|[ ]*)?' + VAR_IDENT_RE
        } ]
      },
      {
        begin: '#\\(',
        end: '\\)',
        contains: [
          hljs.APOS_STRING_MODE,
          CHAR,
          hljs.C_NUMBER_MODE,
          SYMBOL
        ]
      }
    ]
  };
}

module.exports = smalltalk;


/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvc21hbGx0YWxrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsRUFBRTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6IjE2MC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5MYW5ndWFnZTogU21hbGx0YWxrXG5EZXNjcmlwdGlvbjogU21hbGx0YWxrIGlzIGFuIG9iamVjdC1vcmllbnRlZCwgZHluYW1pY2FsbHkgdHlwZWQgcmVmbGVjdGl2ZSBwcm9ncmFtbWluZyBsYW5ndWFnZS5cbkF1dGhvcjogVmxhZGltaXIgR3ViYXJrb3YgPHhvbml4eEBnbWFpbC5jb20+XG5XZWJzaXRlOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9TbWFsbHRhbGtcbiovXG5cbmZ1bmN0aW9uIHNtYWxsdGFsayhobGpzKSB7XG4gIGNvbnN0IFZBUl9JREVOVF9SRSA9ICdbYS16XVthLXpBLVowLTlfXSonO1xuICBjb25zdCBDSEFSID0ge1xuICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgYmVnaW46ICdcXFxcJC57MX0nXG4gIH07XG4gIGNvbnN0IFNZTUJPTCA9IHtcbiAgICBjbGFzc05hbWU6ICdzeW1ib2wnLFxuICAgIGJlZ2luOiAnIycgKyBobGpzLlVOREVSU0NPUkVfSURFTlRfUkVcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnU21hbGx0YWxrJyxcbiAgICBhbGlhc2VzOiBbICdzdCcgXSxcbiAgICBrZXl3b3JkczogJ3NlbGYgc3VwZXIgbmlsIHRydWUgZmFsc2UgdGhpc0NvbnRleHQnLCAvLyBvbmx5IDZcbiAgICBjb250YWluczogW1xuICAgICAgaGxqcy5DT01NRU5UKCdcIicsICdcIicpLFxuICAgICAgaGxqcy5BUE9TX1NUUklOR19NT0RFLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICd0eXBlJyxcbiAgICAgICAgYmVnaW46ICdcXFxcYltBLVpdW0EtWmEtejAtOV9dKicsXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IFZBUl9JREVOVF9SRSArICc6JyxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuICAgICAgaGxqcy5DX05VTUJFUl9NT0RFLFxuICAgICAgU1lNQk9MLFxuICAgICAgQ0hBUixcbiAgICAgIHtcbiAgICAgICAgLy8gVGhpcyBsb29rcyBtb3JlIGNvbXBsaWNhdGVkIHRoYW4gbmVlZGVkIHRvIGF2b2lkIGNvbWJpbmF0b3JpYWxcbiAgICAgICAgLy8gZXhwbG9zaW9uIHVuZGVyIFY4LiBJdCBlZmZlY3RpdmVseSBtZWFucyBgfCB2YXIxIHZhcjIgLi4uIHxgIHdpdGhcbiAgICAgICAgLy8gd2hpdGVzcGFjZSBhZGphY2VudCB0byBgfGAgYmVpbmcgb3B0aW9uYWwuXG4gICAgICAgIGJlZ2luOiAnXFxcXHxbIF0qJyArIFZBUl9JREVOVF9SRSArICcoWyBdKycgKyBWQVJfSURFTlRfUkUgKyAnKSpbIF0qXFxcXHwnLFxuICAgICAgICByZXR1cm5CZWdpbjogdHJ1ZSxcbiAgICAgICAgZW5kOiAvXFx8LyxcbiAgICAgICAgaWxsZWdhbDogL1xcUy8sXG4gICAgICAgIGNvbnRhaW5zOiBbIHtcbiAgICAgICAgICBiZWdpbjogJyhcXFxcfFsgXSopPycgKyBWQVJfSURFTlRfUkVcbiAgICAgICAgfSBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogJyNcXFxcKCcsXG4gICAgICAgIGVuZDogJ1xcXFwpJyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICBobGpzLkFQT1NfU1RSSU5HX01PREUsXG4gICAgICAgICAgQ0hBUixcbiAgICAgICAgICBobGpzLkNfTlVNQkVSX01PREUsXG4gICAgICAgICAgU1lNQk9MXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc21hbGx0YWxrO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==