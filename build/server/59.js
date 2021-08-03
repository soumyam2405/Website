exports.ids = [59];
exports.modules = {

/***/ "./node_modules/highlight.js/lib/languages/flix.js":
/*!*********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/flix.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 Language: Flix
 Category: functional
 Author: Magnus Madsen <mmadsen@uwaterloo.ca>
 Website: https://flix.dev/
 */

 /** @type LanguageFn */
function flix(hljs) {
  const CHAR = {
    className: 'string',
    begin: /'(.|\\[xXuU][a-zA-Z0-9]+)'/
  };

  const STRING = {
    className: 'string',
    variants: [{
      begin: '"',
      end: '"'
    }]
  };

  const NAME = {
    className: 'title',
    relevance: 0,
    begin: /[^0-9\n\t "'(),.`{}\[\]:;][^\n\t "'(),.`{}\[\]:;]+|[^0-9\n\t "'(),.`{}\[\]:;=]/
  };

  const METHOD = {
    className: 'function',
    beginKeywords: 'def',
    end: /[:={\[(\n;]/,
    excludeEnd: true,
    contains: [NAME]
  };

  return {
    name: 'Flix',
    keywords: {
      literal: 'true false',
      keyword: 'case class def else enum if impl import in lat rel index let match namespace switch type yield with'
    },
    contains: [
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      CHAR,
      STRING,
      METHOD,
      hljs.C_NUMBER_MODE
    ]
  };
}

module.exports = flix;


/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvZmxpeC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixNQUFNLGlCQUFpQixNQUFNLHNCQUFzQixNQUFNO0FBQ3hGOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsTUFBTTtBQUNwQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiI1OS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gTGFuZ3VhZ2U6IEZsaXhcbiBDYXRlZ29yeTogZnVuY3Rpb25hbFxuIEF1dGhvcjogTWFnbnVzIE1hZHNlbiA8bW1hZHNlbkB1d2F0ZXJsb28uY2E+XG4gV2Vic2l0ZTogaHR0cHM6Ly9mbGl4LmRldi9cbiAqL1xuXG4gLyoqIEB0eXBlIExhbmd1YWdlRm4gKi9cbmZ1bmN0aW9uIGZsaXgoaGxqcykge1xuICBjb25zdCBDSEFSID0ge1xuICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgYmVnaW46IC8nKC58XFxcXFt4WHVVXVthLXpBLVowLTldKyknL1xuICB9O1xuXG4gIGNvbnN0IFNUUklORyA9IHtcbiAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgIHZhcmlhbnRzOiBbe1xuICAgICAgYmVnaW46ICdcIicsXG4gICAgICBlbmQ6ICdcIidcbiAgICB9XVxuICB9O1xuXG4gIGNvbnN0IE5BTUUgPSB7XG4gICAgY2xhc3NOYW1lOiAndGl0bGUnLFxuICAgIHJlbGV2YW5jZTogMCxcbiAgICBiZWdpbjogL1teMC05XFxuXFx0IFwiJygpLC5ge31cXFtcXF06O11bXlxcblxcdCBcIicoKSwuYHt9XFxbXFxdOjtdK3xbXjAtOVxcblxcdCBcIicoKSwuYHt9XFxbXFxdOjs9XS9cbiAgfTtcblxuICBjb25zdCBNRVRIT0QgPSB7XG4gICAgY2xhc3NOYW1lOiAnZnVuY3Rpb24nLFxuICAgIGJlZ2luS2V5d29yZHM6ICdkZWYnLFxuICAgIGVuZDogL1s6PXtcXFsoXFxuO10vLFxuICAgIGV4Y2x1ZGVFbmQ6IHRydWUsXG4gICAgY29udGFpbnM6IFtOQU1FXVxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgbmFtZTogJ0ZsaXgnLFxuICAgIGtleXdvcmRzOiB7XG4gICAgICBsaXRlcmFsOiAndHJ1ZSBmYWxzZScsXG4gICAgICBrZXl3b3JkOiAnY2FzZSBjbGFzcyBkZWYgZWxzZSBlbnVtIGlmIGltcGwgaW1wb3J0IGluIGxhdCByZWwgaW5kZXggbGV0IG1hdGNoIG5hbWVzcGFjZSBzd2l0Y2ggdHlwZSB5aWVsZCB3aXRoJ1xuICAgIH0sXG4gICAgY29udGFpbnM6IFtcbiAgICAgIGhsanMuQ19MSU5FX0NPTU1FTlRfTU9ERSxcbiAgICAgIGhsanMuQ19CTE9DS19DT01NRU5UX01PREUsXG4gICAgICBDSEFSLFxuICAgICAgU1RSSU5HLFxuICAgICAgTUVUSE9ELFxuICAgICAgaGxqcy5DX05VTUJFUl9NT0RFXG4gICAgXVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZsaXg7XG4iXSwic291cmNlUm9vdCI6IiJ9