(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[177],{

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

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3R3aWcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUscUJBQXFCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHNEQUFzRCxpQkFBaUI7O0FBRXZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixRQUFRO0FBQzlCO0FBQ0E7QUFDQSxrQkFBa0IsYUFBYTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLGtCQUFrQixFQUFFLFdBQVcsRUFBRTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvMTc3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBUd2lnXG5SZXF1aXJlczogeG1sLmpzXG5BdXRob3I6IEx1a2UgSG9sZGVyIDxsdWtlbWhAZ21haWwuY29tPlxuRGVzY3JpcHRpb246IFR3aWcgaXMgYSB0ZW1wbGF0aW5nIGxhbmd1YWdlIGZvciBQSFBcbldlYnNpdGU6IGh0dHBzOi8vdHdpZy5zeW1mb255LmNvbVxuQ2F0ZWdvcnk6IHRlbXBsYXRlXG4qL1xuXG5mdW5jdGlvbiB0d2lnKGhsanMpIHtcbiAgdmFyIFBBUkFNUyA9IHtcbiAgICBjbGFzc05hbWU6ICdwYXJhbXMnLFxuICAgIGJlZ2luOiAnXFxcXCgnLCBlbmQ6ICdcXFxcKSdcbiAgfTtcblxuICB2YXIgRlVOQ1RJT05fTkFNRVMgPSAnYXR0cmlidXRlIGJsb2NrIGNvbnN0YW50IGN5Y2xlIGRhdGUgZHVtcCBpbmNsdWRlICcgK1xuICAgICAgICAgICAgICAgICAgJ21heCBtaW4gcGFyZW50IHJhbmRvbSByYW5nZSBzb3VyY2UgdGVtcGxhdGVfZnJvbV9zdHJpbmcnO1xuXG4gIHZhciBGVU5DVElPTlMgPSB7XG4gICAgYmVnaW5LZXl3b3JkczogRlVOQ1RJT05fTkFNRVMsXG4gICAga2V5d29yZHM6IHtuYW1lOiBGVU5DVElPTl9OQU1FU30sXG4gICAgcmVsZXZhbmNlOiAwLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBQQVJBTVNcbiAgICBdXG4gIH07XG5cbiAgdmFyIEZJTFRFUiA9IHtcbiAgICBiZWdpbjogL1xcfFtBLVphLXpfXSs6Py8sXG4gICAga2V5d29yZHM6XG4gICAgICAnYWJzIGJhdGNoIGNhcGl0YWxpemUgY29sdW1uIGNvbnZlcnRfZW5jb2RpbmcgZGF0ZSBkYXRlX21vZGlmeSBkZWZhdWx0ICcgK1xuICAgICAgJ2VzY2FwZSBmaWx0ZXIgZmlyc3QgZm9ybWF0IGlua3lfdG9faHRtbCBpbmxpbmVfY3NzIGpvaW4ganNvbl9lbmNvZGUga2V5cyBsYXN0ICcgK1xuICAgICAgJ2xlbmd0aCBsb3dlciBtYXAgbWFya2Rvd24gbWVyZ2UgbmwyYnIgbnVtYmVyX2Zvcm1hdCByYXcgcmVkdWNlIHJlcGxhY2UgJyArXG4gICAgICAncmV2ZXJzZSByb3VuZCBzbGljZSBzb3J0IHNwYWNlbGVzcyBzcGxpdCBzdHJpcHRhZ3MgdGl0bGUgdHJpbSB1cHBlciB1cmxfZW5jb2RlJyxcbiAgICBjb250YWluczogW1xuICAgICAgRlVOQ1RJT05TXG4gICAgXVxuICB9O1xuXG4gIHZhciBUQUdTID0gJ2FwcGx5IGF1dG9lc2NhcGUgYmxvY2sgZGVwcmVjYXRlZCBkbyBlbWJlZCBleHRlbmRzIGZpbHRlciBmbHVzaCBmb3IgZnJvbSAnICtcbiAgICAnaWYgaW1wb3J0IGluY2x1ZGUgbWFjcm8gc2FuZGJveCBzZXQgdXNlIHZlcmJhdGltIHdpdGgnO1xuXG4gIFRBR1MgPSBUQUdTICsgJyAnICsgVEFHUy5zcGxpdCgnICcpLm1hcChmdW5jdGlvbih0KXtyZXR1cm4gJ2VuZCcgKyB0fSkuam9pbignICcpO1xuXG4gIHJldHVybiB7XG4gICAgbmFtZTogJ1R3aWcnLFxuICAgIGFsaWFzZXM6IFsnY3JhZnRjbXMnXSxcbiAgICBjYXNlX2luc2Vuc2l0aXZlOiB0cnVlLFxuICAgIHN1Ykxhbmd1YWdlOiAneG1sJyxcbiAgICBjb250YWluczogW1xuICAgICAgaGxqcy5DT01NRU5UKC9cXHsjLywgLyNcXH0vKSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAndGVtcGxhdGUtdGFnJyxcbiAgICAgICAgYmVnaW46IC9cXHslLywgZW5kOiAvJVxcfS8sXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnbmFtZScsXG4gICAgICAgICAgICBiZWdpbjogL1xcdysvLFxuICAgICAgICAgICAga2V5d29yZHM6IFRBR1MsXG4gICAgICAgICAgICBzdGFydHM6IHtcbiAgICAgICAgICAgICAgZW5kc1dpdGhQYXJlbnQ6IHRydWUsXG4gICAgICAgICAgICAgIGNvbnRhaW5zOiBbRklMVEVSLCBGVU5DVElPTlNdLFxuICAgICAgICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3RlbXBsYXRlLXZhcmlhYmxlJyxcbiAgICAgICAgYmVnaW46IC9cXHtcXHsvLCBlbmQ6IC9cXH1cXH0vLFxuICAgICAgICBjb250YWluczogWydzZWxmJywgRklMVEVSLCBGVU5DVElPTlNdXG4gICAgICB9XG4gICAgXVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHR3aWc7XG4iXSwic291cmNlUm9vdCI6IiJ9