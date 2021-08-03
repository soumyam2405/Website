(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[51],{

/***/ "./node_modules/highlight.js/lib/languages/dust.js":
/*!*********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/dust.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Dust
Requires: xml.js
Author: Michael Allen <michael.allen@benefitfocus.com>
Description: Matcher for dust.js templates.
Website: https://www.dustjs.com
Category: template
*/

/** @type LanguageFn */
function dust(hljs) {
  const EXPRESSION_KEYWORDS = 'if eq ne lt lte gt gte select default math sep';
  return {
    name: 'Dust',
    aliases: ['dst'],
    case_insensitive: true,
    subLanguage: 'xml',
    contains: [
      {
        className: 'template-tag',
        begin: /\{[#\/]/,
        end: /\}/,
        illegal: /;/,
        contains: [{
          className: 'name',
          begin: /[a-zA-Z\.-]+/,
          starts: {
            endsWithParent: true,
            relevance: 0,
            contains: [hljs.QUOTE_STRING_MODE]
          }
        }]
      },
      {
        className: 'template-variable',
        begin: /\{/,
        end: /\}/,
        illegal: /;/,
        keywords: EXPRESSION_KEYWORDS
      }
    ]
  };
}

module.exports = dust;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2R1c3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLGdCQUFnQjtBQUNoQixtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQixnQkFBZ0I7QUFDaEIsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoic3RhdGljL2NodW5rcy81MS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5MYW5ndWFnZTogRHVzdFxuUmVxdWlyZXM6IHhtbC5qc1xuQXV0aG9yOiBNaWNoYWVsIEFsbGVuIDxtaWNoYWVsLmFsbGVuQGJlbmVmaXRmb2N1cy5jb20+XG5EZXNjcmlwdGlvbjogTWF0Y2hlciBmb3IgZHVzdC5qcyB0ZW1wbGF0ZXMuXG5XZWJzaXRlOiBodHRwczovL3d3dy5kdXN0anMuY29tXG5DYXRlZ29yeTogdGVtcGxhdGVcbiovXG5cbi8qKiBAdHlwZSBMYW5ndWFnZUZuICovXG5mdW5jdGlvbiBkdXN0KGhsanMpIHtcbiAgY29uc3QgRVhQUkVTU0lPTl9LRVlXT1JEUyA9ICdpZiBlcSBuZSBsdCBsdGUgZ3QgZ3RlIHNlbGVjdCBkZWZhdWx0IG1hdGggc2VwJztcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnRHVzdCcsXG4gICAgYWxpYXNlczogWydkc3QnXSxcbiAgICBjYXNlX2luc2Vuc2l0aXZlOiB0cnVlLFxuICAgIHN1Ykxhbmd1YWdlOiAneG1sJyxcbiAgICBjb250YWluczogW1xuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICd0ZW1wbGF0ZS10YWcnLFxuICAgICAgICBiZWdpbjogL1xce1sjXFwvXS8sXG4gICAgICAgIGVuZDogL1xcfS8sXG4gICAgICAgIGlsbGVnYWw6IC87LyxcbiAgICAgICAgY29udGFpbnM6IFt7XG4gICAgICAgICAgY2xhc3NOYW1lOiAnbmFtZScsXG4gICAgICAgICAgYmVnaW46IC9bYS16QS1aXFwuLV0rLyxcbiAgICAgICAgICBzdGFydHM6IHtcbiAgICAgICAgICAgIGVuZHNXaXRoUGFyZW50OiB0cnVlLFxuICAgICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgICAgY29udGFpbnM6IFtobGpzLlFVT1RFX1NUUklOR19NT0RFXVxuICAgICAgICAgIH1cbiAgICAgICAgfV1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3RlbXBsYXRlLXZhcmlhYmxlJyxcbiAgICAgICAgYmVnaW46IC9cXHsvLFxuICAgICAgICBlbmQ6IC9cXH0vLFxuICAgICAgICBpbGxlZ2FsOiAvOy8sXG4gICAgICAgIGtleXdvcmRzOiBFWFBSRVNTSU9OX0tFWVdPUkRTXG4gICAgICB9XG4gICAgXVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGR1c3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9