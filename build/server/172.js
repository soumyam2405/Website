exports.ids = [172];
exports.modules = {

/***/ "./node_modules/highlight.js/lib/languages/tap.js":
/*!********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/tap.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Test Anything Protocol
Description: TAP, the Test Anything Protocol, is a simple text-based interface between testing modules in a test harness.
Requires: yaml.js
Author: Sergey Bronnikov <sergeyb@bronevichok.ru>
Website: https://testanything.org
*/

function tap(hljs) {
  return {
    name: 'Test Anything Protocol',
    case_insensitive: true,
    contains: [
      hljs.HASH_COMMENT_MODE,
      // version of format and total amount of testcases
      {
        className: 'meta',
        variants: [
          {
            begin: '^TAP version (\\d+)$'
          },
          {
            begin: '^1\\.\\.(\\d+)$'
          }
        ]
      },
      // YAML block
      {
        begin: /---$/,
        end: '\\.\\.\\.$',
        subLanguage: 'yaml',
        relevance: 0
      },
      // testcase number
      {
        className: 'number',
        begin: ' (\\d+) '
      },
      // testcase status and description
      {
        className: 'symbol',
        variants: [
          {
            begin: '^ok'
          },
          {
            begin: '^not ok'
          }
        ]
      }
    ]
  };
}

module.exports = tap;


/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvdGFwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6IjE3Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5MYW5ndWFnZTogVGVzdCBBbnl0aGluZyBQcm90b2NvbFxuRGVzY3JpcHRpb246IFRBUCwgdGhlIFRlc3QgQW55dGhpbmcgUHJvdG9jb2wsIGlzIGEgc2ltcGxlIHRleHQtYmFzZWQgaW50ZXJmYWNlIGJldHdlZW4gdGVzdGluZyBtb2R1bGVzIGluIGEgdGVzdCBoYXJuZXNzLlxuUmVxdWlyZXM6IHlhbWwuanNcbkF1dGhvcjogU2VyZ2V5IEJyb25uaWtvdiA8c2VyZ2V5YkBicm9uZXZpY2hvay5ydT5cbldlYnNpdGU6IGh0dHBzOi8vdGVzdGFueXRoaW5nLm9yZ1xuKi9cblxuZnVuY3Rpb24gdGFwKGhsanMpIHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnVGVzdCBBbnl0aGluZyBQcm90b2NvbCcsXG4gICAgY2FzZV9pbnNlbnNpdGl2ZTogdHJ1ZSxcbiAgICBjb250YWluczogW1xuICAgICAgaGxqcy5IQVNIX0NPTU1FTlRfTU9ERSxcbiAgICAgIC8vIHZlcnNpb24gb2YgZm9ybWF0IGFuZCB0b3RhbCBhbW91bnQgb2YgdGVzdGNhc2VzXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luOiAnXlRBUCB2ZXJzaW9uIChcXFxcZCspJCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luOiAnXjFcXFxcLlxcXFwuKFxcXFxkKykkJ1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIC8vIFlBTUwgYmxvY2tcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IC8tLS0kLyxcbiAgICAgICAgZW5kOiAnXFxcXC5cXFxcLlxcXFwuJCcsXG4gICAgICAgIHN1Ykxhbmd1YWdlOiAneWFtbCcsXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIC8vIHRlc3RjYXNlIG51bWJlclxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdudW1iZXInLFxuICAgICAgICBiZWdpbjogJyAoXFxcXGQrKSAnXG4gICAgICB9LFxuICAgICAgLy8gdGVzdGNhc2Ugc3RhdHVzIGFuZCBkZXNjcmlwdGlvblxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdzeW1ib2wnLFxuICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luOiAnXm9rJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW46ICdebm90IG9rJ1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0YXA7XG4iXSwic291cmNlUm9vdCI6IiJ9