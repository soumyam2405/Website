exports.ids = [140];
exports.modules = {

/***/ "./node_modules/highlight.js/lib/languages/python-repl.js":
/*!****************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/python-repl.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Python REPL
Requires: python.js
Author: Josh Goebel <hello@joshgoebel.com>
Category: common
*/

function pythonRepl(hljs) {
  return {
    aliases: [ 'pycon' ],
    contains: [
      {
        className: 'meta',
        starts: {
          // a space separates the REPL prefix from the actual code
          // this is purely for cleaner HTML output
          end: / |$/,
          starts: {
            end: '$',
            subLanguage: 'python'
          }
        },
        variants: [
          {
            begin: /^>>>(?=[ ]|$)/
          },
          {
            begin: /^\.\.\.(?=[ ]|$)/
          }
        ]
      }
    ]
  };
}

module.exports = pythonRepl;


/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvcHl0aG9uLXJlcGwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6IjE0MC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5MYW5ndWFnZTogUHl0aG9uIFJFUExcblJlcXVpcmVzOiBweXRob24uanNcbkF1dGhvcjogSm9zaCBHb2ViZWwgPGhlbGxvQGpvc2hnb2ViZWwuY29tPlxuQ2F0ZWdvcnk6IGNvbW1vblxuKi9cblxuZnVuY3Rpb24gcHl0aG9uUmVwbChobGpzKSB7XG4gIHJldHVybiB7XG4gICAgYWxpYXNlczogWyAncHljb24nIF0sXG4gICAgY29udGFpbnM6IFtcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgICAgIHN0YXJ0czoge1xuICAgICAgICAgIC8vIGEgc3BhY2Ugc2VwYXJhdGVzIHRoZSBSRVBMIHByZWZpeCBmcm9tIHRoZSBhY3R1YWwgY29kZVxuICAgICAgICAgIC8vIHRoaXMgaXMgcHVyZWx5IGZvciBjbGVhbmVyIEhUTUwgb3V0cHV0XG4gICAgICAgICAgZW5kOiAvIHwkLyxcbiAgICAgICAgICBzdGFydHM6IHtcbiAgICAgICAgICAgIGVuZDogJyQnLFxuICAgICAgICAgICAgc3ViTGFuZ3VhZ2U6ICdweXRob24nXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luOiAvXj4+Pig/PVsgXXwkKS9cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luOiAvXlxcLlxcLlxcLig/PVsgXXwkKS9cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcHl0aG9uUmVwbDtcbiJdLCJzb3VyY2VSb290IjoiIn0=