exports.ids = [176];
exports.modules = {

/***/ "./node_modules/highlight.js/lib/languages/twig.js":
/*!*********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/twig.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Twig
Requires: xml.js
Author: Luke Holder <lukemh@gmail.com>
Description: Twig is a templating language for PHP
Website: https://twig.symfony.com
Category: template
*/

function twig(hljs) {
  var PARAMS = {
    className: 'params',
    begin: '\\(', end: '\\)'
  };

  var FUNCTION_NAMES = 'attribute block constant cycle date dump include ' +
                  'max min parent random range source template_from_string';

  var FUNCTIONS = {
    beginKeywords: FUNCTION_NAMES,
    keywords: {name: FUNCTION_NAMES},
    relevance: 0,
    contains: [
      PARAMS
    ]
  };

  var FILTER = {
    begin: /\|[A-Za-z_]+:?/,
    keywords:
      'abs batch capitalize column convert_encoding date date_modify default ' +
      'escape filter first format inky_to_html inline_css join json_encode keys last ' +
      'length lower map markdown merge nl2br number_format raw reduce replace ' +
      'reverse round slice sort spaceless split striptags title trim upper url_encode',
    contains: [
      FUNCTIONS
    ]
  };

  var TAGS = 'apply autoescape block deprecated do embed extends filter flush for from ' +
    'if import include macro sandbox set use verbatim with';

  TAGS = TAGS + ' ' + TAGS.split(' ').map(function(t){return 'end' + t}).join(' ');

  return {
    name: 'Twig',
    aliases: ['craftcms'],
    case_insensitive: true,
    subLanguage: 'xml',
    contains: [
      hljs.COMMENT(/\{#/, /#\}/),
      {
        className: 'template-tag',
        begin: /\{%/, end: /%\}/,
        contains: [
          {
            className: 'name',
            begin: /\w+/,
            keywords: TAGS,
            starts: {
              endsWithParent: true,
              contains: [FILTER, FUNCTIONS],
              relevance: 0
            }
          }
        ]
      },
      {
        className: 'template-variable',
        begin: /\{\{/, end: /\}\}/,
        contains: ['self', FILTER, FUNCTIONS]
      }
    ]
  };
}

module.exports = twig;


/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvdHdpZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUscUJBQXFCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHNEQUFzRCxpQkFBaUI7O0FBRXZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixRQUFRO0FBQzlCO0FBQ0E7QUFDQSxrQkFBa0IsYUFBYTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLGtCQUFrQixFQUFFLFdBQVcsRUFBRTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6IjE3Ni5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5MYW5ndWFnZTogVHdpZ1xuUmVxdWlyZXM6IHhtbC5qc1xuQXV0aG9yOiBMdWtlIEhvbGRlciA8bHVrZW1oQGdtYWlsLmNvbT5cbkRlc2NyaXB0aW9uOiBUd2lnIGlzIGEgdGVtcGxhdGluZyBsYW5ndWFnZSBmb3IgUEhQXG5XZWJzaXRlOiBodHRwczovL3R3aWcuc3ltZm9ueS5jb21cbkNhdGVnb3J5OiB0ZW1wbGF0ZVxuKi9cblxuZnVuY3Rpb24gdHdpZyhobGpzKSB7XG4gIHZhciBQQVJBTVMgPSB7XG4gICAgY2xhc3NOYW1lOiAncGFyYW1zJyxcbiAgICBiZWdpbjogJ1xcXFwoJywgZW5kOiAnXFxcXCknXG4gIH07XG5cbiAgdmFyIEZVTkNUSU9OX05BTUVTID0gJ2F0dHJpYnV0ZSBibG9jayBjb25zdGFudCBjeWNsZSBkYXRlIGR1bXAgaW5jbHVkZSAnICtcbiAgICAgICAgICAgICAgICAgICdtYXggbWluIHBhcmVudCByYW5kb20gcmFuZ2Ugc291cmNlIHRlbXBsYXRlX2Zyb21fc3RyaW5nJztcblxuICB2YXIgRlVOQ1RJT05TID0ge1xuICAgIGJlZ2luS2V5d29yZHM6IEZVTkNUSU9OX05BTUVTLFxuICAgIGtleXdvcmRzOiB7bmFtZTogRlVOQ1RJT05fTkFNRVN9LFxuICAgIHJlbGV2YW5jZTogMCxcbiAgICBjb250YWluczogW1xuICAgICAgUEFSQU1TXG4gICAgXVxuICB9O1xuXG4gIHZhciBGSUxURVIgPSB7XG4gICAgYmVnaW46IC9cXHxbQS1aYS16X10rOj8vLFxuICAgIGtleXdvcmRzOlxuICAgICAgJ2FicyBiYXRjaCBjYXBpdGFsaXplIGNvbHVtbiBjb252ZXJ0X2VuY29kaW5nIGRhdGUgZGF0ZV9tb2RpZnkgZGVmYXVsdCAnICtcbiAgICAgICdlc2NhcGUgZmlsdGVyIGZpcnN0IGZvcm1hdCBpbmt5X3RvX2h0bWwgaW5saW5lX2NzcyBqb2luIGpzb25fZW5jb2RlIGtleXMgbGFzdCAnICtcbiAgICAgICdsZW5ndGggbG93ZXIgbWFwIG1hcmtkb3duIG1lcmdlIG5sMmJyIG51bWJlcl9mb3JtYXQgcmF3IHJlZHVjZSByZXBsYWNlICcgK1xuICAgICAgJ3JldmVyc2Ugcm91bmQgc2xpY2Ugc29ydCBzcGFjZWxlc3Mgc3BsaXQgc3RyaXB0YWdzIHRpdGxlIHRyaW0gdXBwZXIgdXJsX2VuY29kZScsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIEZVTkNUSU9OU1xuICAgIF1cbiAgfTtcblxuICB2YXIgVEFHUyA9ICdhcHBseSBhdXRvZXNjYXBlIGJsb2NrIGRlcHJlY2F0ZWQgZG8gZW1iZWQgZXh0ZW5kcyBmaWx0ZXIgZmx1c2ggZm9yIGZyb20gJyArXG4gICAgJ2lmIGltcG9ydCBpbmNsdWRlIG1hY3JvIHNhbmRib3ggc2V0IHVzZSB2ZXJiYXRpbSB3aXRoJztcblxuICBUQUdTID0gVEFHUyArICcgJyArIFRBR1Muc3BsaXQoJyAnKS5tYXAoZnVuY3Rpb24odCl7cmV0dXJuICdlbmQnICsgdH0pLmpvaW4oJyAnKTtcblxuICByZXR1cm4ge1xuICAgIG5hbWU6ICdUd2lnJyxcbiAgICBhbGlhc2VzOiBbJ2NyYWZ0Y21zJ10sXG4gICAgY2FzZV9pbnNlbnNpdGl2ZTogdHJ1ZSxcbiAgICBzdWJMYW5ndWFnZTogJ3htbCcsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIGhsanMuQ09NTUVOVCgvXFx7Iy8sIC8jXFx9LyksXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3RlbXBsYXRlLXRhZycsXG4gICAgICAgIGJlZ2luOiAvXFx7JS8sIGVuZDogLyVcXH0vLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ25hbWUnLFxuICAgICAgICAgICAgYmVnaW46IC9cXHcrLyxcbiAgICAgICAgICAgIGtleXdvcmRzOiBUQUdTLFxuICAgICAgICAgICAgc3RhcnRzOiB7XG4gICAgICAgICAgICAgIGVuZHNXaXRoUGFyZW50OiB0cnVlLFxuICAgICAgICAgICAgICBjb250YWluczogW0ZJTFRFUiwgRlVOQ1RJT05TXSxcbiAgICAgICAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICd0ZW1wbGF0ZS12YXJpYWJsZScsXG4gICAgICAgIGJlZ2luOiAvXFx7XFx7LywgZW5kOiAvXFx9XFx9LyxcbiAgICAgICAgY29udGFpbnM6IFsnc2VsZicsIEZJTFRFUiwgRlVOQ1RJT05TXVxuICAgICAgfVxuICAgIF1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0d2lnO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==