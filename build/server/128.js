exports.ids = [128];
exports.modules = {

/***/ "./node_modules/highlight.js/lib/languages/php-template.js":
/*!*****************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/php-template.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: PHP Template
Requires: xml.js, php.js
Author: Josh Goebel <hello@joshgoebel.com>
Website: https://www.php.net
Category: common
*/

function phpTemplate(hljs) {
  return {
    name: "PHP template",
    subLanguage: 'xml',
    contains: [
      {
        begin: /<\?(php|=)?/,
        end: /\?>/,
        subLanguage: 'php',
        contains: [
          // We don't want the php closing tag ?> to close the PHP block when
          // inside any of the following blocks:
          {
            begin: '/\\*',
            end: '\\*/',
            skip: true
          },
          {
            begin: 'b"',
            end: '"',
            skip: true
          },
          {
            begin: 'b\'',
            end: '\'',
            skip: true
          },
          hljs.inherit(hljs.APOS_STRING_MODE, {
            illegal: null,
            className: null,
            contains: null,
            skip: true
          }),
          hljs.inherit(hljs.QUOTE_STRING_MODE, {
            illegal: null,
            className: null,
            contains: null,
            skip: true
          })
        ]
      }
    ]
  };
}

module.exports = phpTemplate;


/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvcGhwLXRlbXBsYXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiIxMjguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuTGFuZ3VhZ2U6IFBIUCBUZW1wbGF0ZVxuUmVxdWlyZXM6IHhtbC5qcywgcGhwLmpzXG5BdXRob3I6IEpvc2ggR29lYmVsIDxoZWxsb0Bqb3NoZ29lYmVsLmNvbT5cbldlYnNpdGU6IGh0dHBzOi8vd3d3LnBocC5uZXRcbkNhdGVnb3J5OiBjb21tb25cbiovXG5cbmZ1bmN0aW9uIHBocFRlbXBsYXRlKGhsanMpIHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBcIlBIUCB0ZW1wbGF0ZVwiLFxuICAgIHN1Ykxhbmd1YWdlOiAneG1sJyxcbiAgICBjb250YWluczogW1xuICAgICAge1xuICAgICAgICBiZWdpbjogLzxcXD8ocGhwfD0pPy8sXG4gICAgICAgIGVuZDogL1xcPz4vLFxuICAgICAgICBzdWJMYW5ndWFnZTogJ3BocCcsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgLy8gV2UgZG9uJ3Qgd2FudCB0aGUgcGhwIGNsb3NpbmcgdGFnID8+IHRvIGNsb3NlIHRoZSBQSFAgYmxvY2sgd2hlblxuICAgICAgICAgIC8vIGluc2lkZSBhbnkgb2YgdGhlIGZvbGxvd2luZyBibG9ja3M6XG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW46ICcvXFxcXConLFxuICAgICAgICAgICAgZW5kOiAnXFxcXCovJyxcbiAgICAgICAgICAgIHNraXA6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luOiAnYlwiJyxcbiAgICAgICAgICAgIGVuZDogJ1wiJyxcbiAgICAgICAgICAgIHNraXA6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luOiAnYlxcJycsXG4gICAgICAgICAgICBlbmQ6ICdcXCcnLFxuICAgICAgICAgICAgc2tpcDogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgaGxqcy5pbmhlcml0KGhsanMuQVBPU19TVFJJTkdfTU9ERSwge1xuICAgICAgICAgICAgaWxsZWdhbDogbnVsbCxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogbnVsbCxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBudWxsLFxuICAgICAgICAgICAgc2tpcDogdHJ1ZVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIGhsanMuaW5oZXJpdChobGpzLlFVT1RFX1NUUklOR19NT0RFLCB7XG4gICAgICAgICAgICBpbGxlZ2FsOiBudWxsLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiBudWxsLFxuICAgICAgICAgICAgY29udGFpbnM6IG51bGwsXG4gICAgICAgICAgICBza2lwOiB0cnVlXG4gICAgICAgICAgfSlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwaHBUZW1wbGF0ZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=