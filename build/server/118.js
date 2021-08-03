exports.ids = [118];
exports.modules = {

/***/ "./node_modules/highlight.js/lib/languages/node-repl.js":
/*!**************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/node-repl.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Node REPL
Requires: javascript.js
Author: Marat Nagayev <nagaevmt@yandex.ru>
Category: scripting
*/

/** @type LanguageFn */
function nodeRepl(hljs) {
  return {
    name: 'Node REPL',
    contains: [
      {
        className: 'meta',
        starts: {
          // a space separates the REPL prefix from the actual code
          // this is purely for cleaner HTML output
          end: / |$/,
          starts: {
            end: '$',
            subLanguage: 'javascript'
          }
        },
        variants: [
          {
            begin: /^>(?=[ ]|$)/
          },
          {
            begin: /^\.\.\.(?=[ ]|$)/
          }
        ]
      }
    ]
  };
}

module.exports = nodeRepl;


/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvbm9kZS1yZXBsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6IjExOC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5MYW5ndWFnZTogTm9kZSBSRVBMXG5SZXF1aXJlczogamF2YXNjcmlwdC5qc1xuQXV0aG9yOiBNYXJhdCBOYWdheWV2IDxuYWdhZXZtdEB5YW5kZXgucnU+XG5DYXRlZ29yeTogc2NyaXB0aW5nXG4qL1xuXG4vKiogQHR5cGUgTGFuZ3VhZ2VGbiAqL1xuZnVuY3Rpb24gbm9kZVJlcGwoaGxqcykge1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICdOb2RlIFJFUEwnLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgICAgICBzdGFydHM6IHtcbiAgICAgICAgICAvLyBhIHNwYWNlIHNlcGFyYXRlcyB0aGUgUkVQTCBwcmVmaXggZnJvbSB0aGUgYWN0dWFsIGNvZGVcbiAgICAgICAgICAvLyB0aGlzIGlzIHB1cmVseSBmb3IgY2xlYW5lciBIVE1MIG91dHB1dFxuICAgICAgICAgIGVuZDogLyB8JC8sXG4gICAgICAgICAgc3RhcnRzOiB7XG4gICAgICAgICAgICBlbmQ6ICckJyxcbiAgICAgICAgICAgIHN1Ykxhbmd1YWdlOiAnamF2YXNjcmlwdCdcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW46IC9ePig/PVsgXXwkKS9cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luOiAvXlxcLlxcLlxcLig/PVsgXXwkKS9cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbm9kZVJlcGw7XG4iXSwic291cmNlUm9vdCI6IiJ9