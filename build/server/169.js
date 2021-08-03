exports.ids = [169];
exports.modules = {

/***/ "./node_modules/highlight.js/lib/languages/subunit.js":
/*!************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/subunit.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: SubUnit
Author: Sergey Bronnikov <sergeyb@bronevichok.ru>
Website: https://pypi.org/project/python-subunit/
*/

function subunit(hljs) {
  const DETAILS = {
    className: 'string',
    begin: '\\[\n(multipart)?',
    end: '\\]\n'
  };
  const TIME = {
    className: 'string',
    begin: '\\d{4}-\\d{2}-\\d{2}(\\s+)\\d{2}:\\d{2}:\\d{2}\.\\d+Z'
  };
  const PROGRESSVALUE = {
    className: 'string',
    begin: '(\\+|-)\\d+'
  };
  const KEYWORDS = {
    className: 'keyword',
    relevance: 10,
    variants: [
      {
        begin: '^(test|testing|success|successful|failure|error|skip|xfail|uxsuccess)(:?)\\s+(test)?'
      },
      {
        begin: '^progress(:?)(\\s+)?(pop|push)?'
      },
      {
        begin: '^tags:'
      },
      {
        begin: '^time:'
      }
    ]
  };
  return {
    name: 'SubUnit',
    case_insensitive: true,
    contains: [
      DETAILS,
      TIME,
      PROGRESSVALUE,
      KEYWORDS
    ]
  };
}

module.exports = subunit;


/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvc3VidW5pdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiIxNjkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuTGFuZ3VhZ2U6IFN1YlVuaXRcbkF1dGhvcjogU2VyZ2V5IEJyb25uaWtvdiA8c2VyZ2V5YkBicm9uZXZpY2hvay5ydT5cbldlYnNpdGU6IGh0dHBzOi8vcHlwaS5vcmcvcHJvamVjdC9weXRob24tc3VidW5pdC9cbiovXG5cbmZ1bmN0aW9uIHN1YnVuaXQoaGxqcykge1xuICBjb25zdCBERVRBSUxTID0ge1xuICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgYmVnaW46ICdcXFxcW1xcbihtdWx0aXBhcnQpPycsXG4gICAgZW5kOiAnXFxcXF1cXG4nXG4gIH07XG4gIGNvbnN0IFRJTUUgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICBiZWdpbjogJ1xcXFxkezR9LVxcXFxkezJ9LVxcXFxkezJ9KFxcXFxzKylcXFxcZHsyfTpcXFxcZHsyfTpcXFxcZHsyfVxcLlxcXFxkK1onXG4gIH07XG4gIGNvbnN0IFBST0dSRVNTVkFMVUUgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICBiZWdpbjogJyhcXFxcK3wtKVxcXFxkKydcbiAgfTtcbiAgY29uc3QgS0VZV09SRFMgPSB7XG4gICAgY2xhc3NOYW1lOiAna2V5d29yZCcsXG4gICAgcmVsZXZhbmNlOiAxMCxcbiAgICB2YXJpYW50czogW1xuICAgICAge1xuICAgICAgICBiZWdpbjogJ14odGVzdHx0ZXN0aW5nfHN1Y2Nlc3N8c3VjY2Vzc2Z1bHxmYWlsdXJlfGVycm9yfHNraXB8eGZhaWx8dXhzdWNjZXNzKSg6PylcXFxccysodGVzdCk/J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICdecHJvZ3Jlc3MoOj8pKFxcXFxzKyk/KHBvcHxwdXNoKT8nXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogJ150YWdzOidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnXnRpbWU6J1xuICAgICAgfVxuICAgIF1cbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnU3ViVW5pdCcsXG4gICAgY2FzZV9pbnNlbnNpdGl2ZTogdHJ1ZSxcbiAgICBjb250YWluczogW1xuICAgICAgREVUQUlMUyxcbiAgICAgIFRJTUUsXG4gICAgICBQUk9HUkVTU1ZBTFVFLFxuICAgICAgS0VZV09SRFNcbiAgICBdXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3VidW5pdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=