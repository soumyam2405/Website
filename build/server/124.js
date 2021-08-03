exports.ids = [124];
exports.modules = {

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

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvcGFyc2VyMy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQixXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxtQ0FBbUMsb0JBQW9CO0FBQ3ZELE9BQU87QUFDUDtBQUNBO0FBQ0Esb0JBQW9CLFlBQVk7QUFDaEMsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiMTI0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBQYXJzZXIzXG5SZXF1aXJlczogeG1sLmpzXG5BdXRob3I6IE9sZWcgVm9sY2hrb3YgPG9sZWdAdm9sY2hrb3YubmV0PlxuV2Vic2l0ZTogaHR0cHM6Ly93d3cucGFyc2VyLnJ1L2VuL1xuQ2F0ZWdvcnk6IHRlbXBsYXRlXG4qL1xuXG5mdW5jdGlvbiBwYXJzZXIzKGhsanMpIHtcbiAgY29uc3QgQ1VSTFlfU1VCQ09NTUVOVCA9IGhsanMuQ09NTUVOVChcbiAgICAvXFx7LyxcbiAgICAvXFx9LyxcbiAgICB7XG4gICAgICBjb250YWluczogWyAnc2VsZicgXVxuICAgIH1cbiAgKTtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnUGFyc2VyMycsXG4gICAgc3ViTGFuZ3VhZ2U6ICd4bWwnLFxuICAgIHJlbGV2YW5jZTogMCxcbiAgICBjb250YWluczogW1xuICAgICAgaGxqcy5DT01NRU5UKCdeIycsICckJyksXG4gICAgICBobGpzLkNPTU1FTlQoXG4gICAgICAgIC9cXF5yZW1cXHsvLFxuICAgICAgICAvXFx9LyxcbiAgICAgICAge1xuICAgICAgICAgIHJlbGV2YW5jZTogMTAsXG4gICAgICAgICAgY29udGFpbnM6IFsgQ1VSTFlfU1VCQ09NTUVOVCBdXG4gICAgICAgIH1cbiAgICAgICksXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgICAgICBiZWdpbjogJ15AKD86QkFTRXxVU0V8Q0xBU1N8T1BUSU9OUykkJyxcbiAgICAgICAgcmVsZXZhbmNlOiAxMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAndGl0bGUnLFxuICAgICAgICBiZWdpbjogJ0BbXFxcXHdcXFxcLV0rXFxcXFtbXFxcXHdeO1xcXFwtXSpcXFxcXSg/OlxcXFxbW1xcXFx3XjtcXFxcLV0qXFxcXF0pPyg/Oi4qKSQnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICd2YXJpYWJsZScsXG4gICAgICAgIGJlZ2luOiAvXFwkXFx7P1tcXHdcXC0uOl0rXFx9Py9cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2tleXdvcmQnLFxuICAgICAgICBiZWdpbjogL1xcXltcXHdcXC0uOl0rL1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICAgICAgYmVnaW46ICdcXFxcXiNbMC05YS1mQS1GXSsnXG4gICAgICB9LFxuICAgICAgaGxqcy5DX05VTUJFUl9NT0RFXG4gICAgXVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHBhcnNlcjM7XG4iXSwic291cmNlUm9vdCI6IiJ9