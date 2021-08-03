(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[60],{

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

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2ZsaXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixNQUFNLGlCQUFpQixNQUFNLHNCQUFzQixNQUFNO0FBQ3hGOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsTUFBTTtBQUNwQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJzdGF0aWMvY2h1bmtzLzYwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiBMYW5ndWFnZTogRmxpeFxuIENhdGVnb3J5OiBmdW5jdGlvbmFsXG4gQXV0aG9yOiBNYWdudXMgTWFkc2VuIDxtbWFkc2VuQHV3YXRlcmxvby5jYT5cbiBXZWJzaXRlOiBodHRwczovL2ZsaXguZGV2L1xuICovXG5cbiAvKiogQHR5cGUgTGFuZ3VhZ2VGbiAqL1xuZnVuY3Rpb24gZmxpeChobGpzKSB7XG4gIGNvbnN0IENIQVIgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICBiZWdpbjogLycoLnxcXFxcW3hYdVVdW2EtekEtWjAtOV0rKScvXG4gIH07XG5cbiAgY29uc3QgU1RSSU5HID0ge1xuICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgdmFyaWFudHM6IFt7XG4gICAgICBiZWdpbjogJ1wiJyxcbiAgICAgIGVuZDogJ1wiJ1xuICAgIH1dXG4gIH07XG5cbiAgY29uc3QgTkFNRSA9IHtcbiAgICBjbGFzc05hbWU6ICd0aXRsZScsXG4gICAgcmVsZXZhbmNlOiAwLFxuICAgIGJlZ2luOiAvW14wLTlcXG5cXHQgXCInKCksLmB7fVxcW1xcXTo7XVteXFxuXFx0IFwiJygpLC5ge31cXFtcXF06O10rfFteMC05XFxuXFx0IFwiJygpLC5ge31cXFtcXF06Oz1dL1xuICB9O1xuXG4gIGNvbnN0IE1FVEhPRCA9IHtcbiAgICBjbGFzc05hbWU6ICdmdW5jdGlvbicsXG4gICAgYmVnaW5LZXl3b3JkczogJ2RlZicsXG4gICAgZW5kOiAvWzo9e1xcWyhcXG47XS8sXG4gICAgZXhjbHVkZUVuZDogdHJ1ZSxcbiAgICBjb250YWluczogW05BTUVdXG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnRmxpeCcsXG4gICAga2V5d29yZHM6IHtcbiAgICAgIGxpdGVyYWw6ICd0cnVlIGZhbHNlJyxcbiAgICAgIGtleXdvcmQ6ICdjYXNlIGNsYXNzIGRlZiBlbHNlIGVudW0gaWYgaW1wbCBpbXBvcnQgaW4gbGF0IHJlbCBpbmRleCBsZXQgbWF0Y2ggbmFtZXNwYWNlIHN3aXRjaCB0eXBlIHlpZWxkIHdpdGgnXG4gICAgfSxcbiAgICBjb250YWluczogW1xuICAgICAgaGxqcy5DX0xJTkVfQ09NTUVOVF9NT0RFLFxuICAgICAgaGxqcy5DX0JMT0NLX0NPTU1FTlRfTU9ERSxcbiAgICAgIENIQVIsXG4gICAgICBTVFJJTkcsXG4gICAgICBNRVRIT0QsXG4gICAgICBobGpzLkNfTlVNQkVSX01PREVcbiAgICBdXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZmxpeDtcbiJdLCJzb3VyY2VSb290IjoiIn0=