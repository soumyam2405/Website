exports.ids = [26];
exports.modules = {

/***/ "./node_modules/highlight.js/lib/languages/ceylon.js":
/*!***********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/ceylon.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Ceylon
Author: Lucas Werkmeister <mail@lucaswerkmeister.de>
Website: https://ceylon-lang.org
*/

/** @type LanguageFn */
function ceylon(hljs) {
  // 2.3. Identifiers and keywords
  const KEYWORDS =
    'assembly module package import alias class interface object given value ' +
    'assign void function new of extends satisfies abstracts in out return ' +
    'break continue throw assert dynamic if else switch case for while try ' +
    'catch finally then let this outer super is exists nonempty';
  // 7.4.1 Declaration Modifiers
  const DECLARATION_MODIFIERS =
    'shared abstract formal default actual variable late native deprecated ' +
    'final sealed annotation suppressWarnings small';
  // 7.4.2 Documentation
  const DOCUMENTATION =
    'doc by license see throws tagged';
  const SUBST = {
    className: 'subst',
    excludeBegin: true,
    excludeEnd: true,
    begin: /``/,
    end: /``/,
    keywords: KEYWORDS,
    relevance: 10
  };
  const EXPRESSIONS = [
    {
      // verbatim string
      className: 'string',
      begin: '"""',
      end: '"""',
      relevance: 10
    },
    {
      // string literal or template
      className: 'string',
      begin: '"',
      end: '"',
      contains: [SUBST]
    },
    {
      // character literal
      className: 'string',
      begin: "'",
      end: "'"
    },
    {
      // numeric literal
      className: 'number',
      begin: '#[0-9a-fA-F_]+|\\$[01_]+|[0-9_]+(?:\\.[0-9_](?:[eE][+-]?\\d+)?)?[kMGTPmunpf]?',
      relevance: 0
    }
  ];
  SUBST.contains = EXPRESSIONS;

  return {
    name: 'Ceylon',
    keywords: {
      keyword: KEYWORDS + ' ' + DECLARATION_MODIFIERS,
      meta: DOCUMENTATION
    },
    illegal: '\\$[^01]|#[^0-9a-fA-F]',
    contains: [
      hljs.C_LINE_COMMENT_MODE,
      hljs.COMMENT('/\\*', '\\*/', {
        contains: ['self']
      }),
      {
        // compiler annotation
        className: 'meta',
        begin: '@[a-z]\\w*(?::"[^"]*")?'
      }
    ].concat(EXPRESSIONS)
  };
}

module.exports = ceylon;


/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvY2V5bG9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiMjYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuTGFuZ3VhZ2U6IENleWxvblxuQXV0aG9yOiBMdWNhcyBXZXJrbWVpc3RlciA8bWFpbEBsdWNhc3dlcmttZWlzdGVyLmRlPlxuV2Vic2l0ZTogaHR0cHM6Ly9jZXlsb24tbGFuZy5vcmdcbiovXG5cbi8qKiBAdHlwZSBMYW5ndWFnZUZuICovXG5mdW5jdGlvbiBjZXlsb24oaGxqcykge1xuICAvLyAyLjMuIElkZW50aWZpZXJzIGFuZCBrZXl3b3Jkc1xuICBjb25zdCBLRVlXT1JEUyA9XG4gICAgJ2Fzc2VtYmx5IG1vZHVsZSBwYWNrYWdlIGltcG9ydCBhbGlhcyBjbGFzcyBpbnRlcmZhY2Ugb2JqZWN0IGdpdmVuIHZhbHVlICcgK1xuICAgICdhc3NpZ24gdm9pZCBmdW5jdGlvbiBuZXcgb2YgZXh0ZW5kcyBzYXRpc2ZpZXMgYWJzdHJhY3RzIGluIG91dCByZXR1cm4gJyArXG4gICAgJ2JyZWFrIGNvbnRpbnVlIHRocm93IGFzc2VydCBkeW5hbWljIGlmIGVsc2Ugc3dpdGNoIGNhc2UgZm9yIHdoaWxlIHRyeSAnICtcbiAgICAnY2F0Y2ggZmluYWxseSB0aGVuIGxldCB0aGlzIG91dGVyIHN1cGVyIGlzIGV4aXN0cyBub25lbXB0eSc7XG4gIC8vIDcuNC4xIERlY2xhcmF0aW9uIE1vZGlmaWVyc1xuICBjb25zdCBERUNMQVJBVElPTl9NT0RJRklFUlMgPVxuICAgICdzaGFyZWQgYWJzdHJhY3QgZm9ybWFsIGRlZmF1bHQgYWN0dWFsIHZhcmlhYmxlIGxhdGUgbmF0aXZlIGRlcHJlY2F0ZWQgJyArXG4gICAgJ2ZpbmFsIHNlYWxlZCBhbm5vdGF0aW9uIHN1cHByZXNzV2FybmluZ3Mgc21hbGwnO1xuICAvLyA3LjQuMiBEb2N1bWVudGF0aW9uXG4gIGNvbnN0IERPQ1VNRU5UQVRJT04gPVxuICAgICdkb2MgYnkgbGljZW5zZSBzZWUgdGhyb3dzIHRhZ2dlZCc7XG4gIGNvbnN0IFNVQlNUID0ge1xuICAgIGNsYXNzTmFtZTogJ3N1YnN0JyxcbiAgICBleGNsdWRlQmVnaW46IHRydWUsXG4gICAgZXhjbHVkZUVuZDogdHJ1ZSxcbiAgICBiZWdpbjogL2BgLyxcbiAgICBlbmQ6IC9gYC8sXG4gICAga2V5d29yZHM6IEtFWVdPUkRTLFxuICAgIHJlbGV2YW5jZTogMTBcbiAgfTtcbiAgY29uc3QgRVhQUkVTU0lPTlMgPSBbXG4gICAge1xuICAgICAgLy8gdmVyYmF0aW0gc3RyaW5nXG4gICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgYmVnaW46ICdcIlwiXCInLFxuICAgICAgZW5kOiAnXCJcIlwiJyxcbiAgICAgIHJlbGV2YW5jZTogMTBcbiAgICB9LFxuICAgIHtcbiAgICAgIC8vIHN0cmluZyBsaXRlcmFsIG9yIHRlbXBsYXRlXG4gICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgYmVnaW46ICdcIicsXG4gICAgICBlbmQ6ICdcIicsXG4gICAgICBjb250YWluczogW1NVQlNUXVxuICAgIH0sXG4gICAge1xuICAgICAgLy8gY2hhcmFjdGVyIGxpdGVyYWxcbiAgICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgICBiZWdpbjogXCInXCIsXG4gICAgICBlbmQ6IFwiJ1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAvLyBudW1lcmljIGxpdGVyYWxcbiAgICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgICBiZWdpbjogJyNbMC05YS1mQS1GX10rfFxcXFwkWzAxX10rfFswLTlfXSsoPzpcXFxcLlswLTlfXSg/OltlRV1bKy1dP1xcXFxkKyk/KT9ba01HVFBtdW5wZl0/JyxcbiAgICAgIHJlbGV2YW5jZTogMFxuICAgIH1cbiAgXTtcbiAgU1VCU1QuY29udGFpbnMgPSBFWFBSRVNTSU9OUztcblxuICByZXR1cm4ge1xuICAgIG5hbWU6ICdDZXlsb24nLFxuICAgIGtleXdvcmRzOiB7XG4gICAgICBrZXl3b3JkOiBLRVlXT1JEUyArICcgJyArIERFQ0xBUkFUSU9OX01PRElGSUVSUyxcbiAgICAgIG1ldGE6IERPQ1VNRU5UQVRJT05cbiAgICB9LFxuICAgIGlsbGVnYWw6ICdcXFxcJFteMDFdfCNbXjAtOWEtZkEtRl0nLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBobGpzLkNfTElORV9DT01NRU5UX01PREUsXG4gICAgICBobGpzLkNPTU1FTlQoJy9cXFxcKicsICdcXFxcKi8nLCB7XG4gICAgICAgIGNvbnRhaW5zOiBbJ3NlbGYnXVxuICAgICAgfSksXG4gICAgICB7XG4gICAgICAgIC8vIGNvbXBpbGVyIGFubm90YXRpb25cbiAgICAgICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgICAgIGJlZ2luOiAnQFthLXpdXFxcXHcqKD86OlwiW15cIl0qXCIpPydcbiAgICAgIH1cbiAgICBdLmNvbmNhdChFWFBSRVNTSU9OUylcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjZXlsb247XG4iXSwic291cmNlUm9vdCI6IiJ9