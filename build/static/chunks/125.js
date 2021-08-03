(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[125],{

/***/ "./node_modules/highlight.js/lib/languages/parser3.js":
/*!************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/parser3.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Parser3
Requires: xml.js
Author: Oleg Volchkov <oleg@volchkov.net>
Website: https://www.parser.ru/en/
Category: template
*/

function parser3(hljs) {
  const CURLY_SUBCOMMENT = hljs.COMMENT(
    /\{/,
    /\}/,
    {
      contains: [ 'self' ]
    }
  );
  return {
    name: 'Parser3',
    subLanguage: 'xml',
    relevance: 0,
    contains: [
      hljs.COMMENT('^#', '$'),
      hljs.COMMENT(
        /\^rem\{/,
        /\}/,
        {
          relevance: 10,
          contains: [ CURLY_SUBCOMMENT ]
        }
      ),
      {
        className: 'meta',
        begin: '^@(?:BASE|USE|CLASS|OPTIONS)$',
        relevance: 10
      },
      {
        className: 'title',
        begin: '@[\\w\\-]+\\[[\\w^;\\-]*\\](?:\\[[\\w^;\\-]*\\])?(?:.*)$'
      },
      {
        className: 'variable',
        begin: /\$\{?[\w\-.:]+\}?/
      },
      {
        className: 'keyword',
        begin: /\^[\w\-.:]+/
      },
      {
        className: 'number',
        begin: '\\^#[0-9a-fA-F]+'
      },
      hljs.C_NUMBER_MODE
    ]
  };
}

module.exports = parser3;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3BhcnNlcjMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQixXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxtQ0FBbUMsb0JBQW9CO0FBQ3ZELE9BQU87QUFDUDtBQUNBO0FBQ0Esb0JBQW9CLFlBQVk7QUFDaEMsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoic3RhdGljL2NodW5rcy8xMjUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuTGFuZ3VhZ2U6IFBhcnNlcjNcblJlcXVpcmVzOiB4bWwuanNcbkF1dGhvcjogT2xlZyBWb2xjaGtvdiA8b2xlZ0B2b2xjaGtvdi5uZXQ+XG5XZWJzaXRlOiBodHRwczovL3d3dy5wYXJzZXIucnUvZW4vXG5DYXRlZ29yeTogdGVtcGxhdGVcbiovXG5cbmZ1bmN0aW9uIHBhcnNlcjMoaGxqcykge1xuICBjb25zdCBDVVJMWV9TVUJDT01NRU5UID0gaGxqcy5DT01NRU5UKFxuICAgIC9cXHsvLFxuICAgIC9cXH0vLFxuICAgIHtcbiAgICAgIGNvbnRhaW5zOiBbICdzZWxmJyBdXG4gICAgfVxuICApO1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICdQYXJzZXIzJyxcbiAgICBzdWJMYW5ndWFnZTogJ3htbCcsXG4gICAgcmVsZXZhbmNlOiAwLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBobGpzLkNPTU1FTlQoJ14jJywgJyQnKSxcbiAgICAgIGhsanMuQ09NTUVOVChcbiAgICAgICAgL1xcXnJlbVxcey8sXG4gICAgICAgIC9cXH0vLFxuICAgICAgICB7XG4gICAgICAgICAgcmVsZXZhbmNlOiAxMCxcbiAgICAgICAgICBjb250YWluczogWyBDVVJMWV9TVUJDT01NRU5UIF1cbiAgICAgICAgfVxuICAgICAgKSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgICAgIGJlZ2luOiAnXkAoPzpCQVNFfFVTRXxDTEFTU3xPUFRJT05TKSQnLFxuICAgICAgICByZWxldmFuY2U6IDEwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICd0aXRsZScsXG4gICAgICAgIGJlZ2luOiAnQFtcXFxcd1xcXFwtXStcXFxcW1tcXFxcd147XFxcXC1dKlxcXFxdKD86XFxcXFtbXFxcXHdeO1xcXFwtXSpcXFxcXSk/KD86LiopJCdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3ZhcmlhYmxlJyxcbiAgICAgICAgYmVnaW46IC9cXCRcXHs/W1xcd1xcLS46XStcXH0/L1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAna2V5d29yZCcsXG4gICAgICAgIGJlZ2luOiAvXFxeW1xcd1xcLS46XSsvXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdudW1iZXInLFxuICAgICAgICBiZWdpbjogJ1xcXFxeI1swLTlhLWZBLUZdKydcbiAgICAgIH0sXG4gICAgICBobGpzLkNfTlVNQkVSX01PREVcbiAgICBdXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcGFyc2VyMztcbiJdLCJzb3VyY2VSb290IjoiIn0=