(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[55],{

/***/ "./node_modules/highlight.js/lib/languages/erb.js":
/*!********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/erb.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: ERB (Embedded Ruby)
Requires: xml.js, ruby.js
Author: Lucas Mazza <lucastmazza@gmail.com>
Contributors: Kassio Borges <kassioborgesm@gmail.com>
Description: "Bridge" language defining fragments of Ruby in HTML within <% .. %>
Website: https://ruby-doc.org/stdlib-2.6.5/libdoc/erb/rdoc/ERB.html
Category: template
*/

/** @type LanguageFn */
function erb(hljs) {
  return {
    name: 'ERB',
    subLanguage: 'xml',
    contains: [
      hljs.COMMENT('<%#', '%>'),
      {
        begin: '<%[%=-]?',
        end: '[%-]?%>',
        subLanguage: 'ruby',
        excludeBegin: true,
        excludeEnd: true
      }
    ]
  };
}

module.exports = erb;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2VyYi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJzdGF0aWMvY2h1bmtzLzU1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBFUkIgKEVtYmVkZGVkIFJ1YnkpXG5SZXF1aXJlczogeG1sLmpzLCBydWJ5LmpzXG5BdXRob3I6IEx1Y2FzIE1henphIDxsdWNhc3RtYXp6YUBnbWFpbC5jb20+XG5Db250cmlidXRvcnM6IEthc3NpbyBCb3JnZXMgPGthc3Npb2Jvcmdlc21AZ21haWwuY29tPlxuRGVzY3JpcHRpb246IFwiQnJpZGdlXCIgbGFuZ3VhZ2UgZGVmaW5pbmcgZnJhZ21lbnRzIG9mIFJ1YnkgaW4gSFRNTCB3aXRoaW4gPCUgLi4gJT5cbldlYnNpdGU6IGh0dHBzOi8vcnVieS1kb2Mub3JnL3N0ZGxpYi0yLjYuNS9saWJkb2MvZXJiL3Jkb2MvRVJCLmh0bWxcbkNhdGVnb3J5OiB0ZW1wbGF0ZVxuKi9cblxuLyoqIEB0eXBlIExhbmd1YWdlRm4gKi9cbmZ1bmN0aW9uIGVyYihobGpzKSB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ0VSQicsXG4gICAgc3ViTGFuZ3VhZ2U6ICd4bWwnLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBobGpzLkNPTU1FTlQoJzwlIycsICclPicpLFxuICAgICAge1xuICAgICAgICBiZWdpbjogJzwlWyU9LV0/JyxcbiAgICAgICAgZW5kOiAnWyUtXT8lPicsXG4gICAgICAgIHN1Ykxhbmd1YWdlOiAncnVieScsXG4gICAgICAgIGV4Y2x1ZGVCZWdpbjogdHJ1ZSxcbiAgICAgICAgZXhjbHVkZUVuZDogdHJ1ZVxuICAgICAgfVxuICAgIF1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlcmI7XG4iXSwic291cmNlUm9vdCI6IiJ9