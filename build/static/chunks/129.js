(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[129],{

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

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3BocC10ZW1wbGF0ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJzdGF0aWMvY2h1bmtzLzEyOS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5MYW5ndWFnZTogUEhQIFRlbXBsYXRlXG5SZXF1aXJlczogeG1sLmpzLCBwaHAuanNcbkF1dGhvcjogSm9zaCBHb2ViZWwgPGhlbGxvQGpvc2hnb2ViZWwuY29tPlxuV2Vic2l0ZTogaHR0cHM6Ly93d3cucGhwLm5ldFxuQ2F0ZWdvcnk6IGNvbW1vblxuKi9cblxuZnVuY3Rpb24gcGhwVGVtcGxhdGUoaGxqcykge1xuICByZXR1cm4ge1xuICAgIG5hbWU6IFwiUEhQIHRlbXBsYXRlXCIsXG4gICAgc3ViTGFuZ3VhZ2U6ICd4bWwnLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAvPFxcPyhwaHB8PSk/LyxcbiAgICAgICAgZW5kOiAvXFw/Pi8sXG4gICAgICAgIHN1Ykxhbmd1YWdlOiAncGhwJyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAvLyBXZSBkb24ndCB3YW50IHRoZSBwaHAgY2xvc2luZyB0YWcgPz4gdG8gY2xvc2UgdGhlIFBIUCBibG9jayB3aGVuXG4gICAgICAgICAgLy8gaW5zaWRlIGFueSBvZiB0aGUgZm9sbG93aW5nIGJsb2NrczpcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogJy9cXFxcKicsXG4gICAgICAgICAgICBlbmQ6ICdcXFxcKi8nLFxuICAgICAgICAgICAgc2tpcDogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW46ICdiXCInLFxuICAgICAgICAgICAgZW5kOiAnXCInLFxuICAgICAgICAgICAgc2tpcDogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW46ICdiXFwnJyxcbiAgICAgICAgICAgIGVuZDogJ1xcJycsXG4gICAgICAgICAgICBza2lwOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBobGpzLmluaGVyaXQoaGxqcy5BUE9TX1NUUklOR19NT0RFLCB7XG4gICAgICAgICAgICBpbGxlZ2FsOiBudWxsLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiBudWxsLFxuICAgICAgICAgICAgY29udGFpbnM6IG51bGwsXG4gICAgICAgICAgICBza2lwOiB0cnVlXG4gICAgICAgICAgfSksXG4gICAgICAgICAgaGxqcy5pbmhlcml0KGhsanMuUVVPVEVfU1RSSU5HX01PREUsIHtcbiAgICAgICAgICAgIGlsbGVnYWw6IG51bGwsXG4gICAgICAgICAgICBjbGFzc05hbWU6IG51bGwsXG4gICAgICAgICAgICBjb250YWluczogbnVsbCxcbiAgICAgICAgICAgIHNraXA6IHRydWVcbiAgICAgICAgICB9KVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHBocFRlbXBsYXRlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==