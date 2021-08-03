(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[181],{

/***/ "./node_modules/highlight.js/lib/languages/vbscript-html.js":
/*!******************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/vbscript-html.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: VBScript in HTML
Requires: xml.js, vbscript.js
Author: Ivan Sagalaev <maniac@softwaremaniacs.org>
Description: "Bridge" language defining fragments of VBScript in HTML within <% .. %>
Website: https://en.wikipedia.org/wiki/VBScript
Category: scripting
*/

function vbscriptHtml(hljs) {
  return {
    name: 'VBScript in HTML',
    subLanguage: 'xml',
    contains: [
      {
        begin: '<%',
        end: '%>',
        subLanguage: 'vbscript'
      }
    ]
  };
}

module.exports = vbscriptHtml;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3Zic2NyaXB0LWh0bWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJzdGF0aWMvY2h1bmtzLzE4MS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5MYW5ndWFnZTogVkJTY3JpcHQgaW4gSFRNTFxuUmVxdWlyZXM6IHhtbC5qcywgdmJzY3JpcHQuanNcbkF1dGhvcjogSXZhbiBTYWdhbGFldiA8bWFuaWFjQHNvZnR3YXJlbWFuaWFjcy5vcmc+XG5EZXNjcmlwdGlvbjogXCJCcmlkZ2VcIiBsYW5ndWFnZSBkZWZpbmluZyBmcmFnbWVudHMgb2YgVkJTY3JpcHQgaW4gSFRNTCB3aXRoaW4gPCUgLi4gJT5cbldlYnNpdGU6IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1ZCU2NyaXB0XG5DYXRlZ29yeTogc2NyaXB0aW5nXG4qL1xuXG5mdW5jdGlvbiB2YnNjcmlwdEh0bWwoaGxqcykge1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICdWQlNjcmlwdCBpbiBIVE1MJyxcbiAgICBzdWJMYW5ndWFnZTogJ3htbCcsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICc8JScsXG4gICAgICAgIGVuZDogJyU+JyxcbiAgICAgICAgc3ViTGFuZ3VhZ2U6ICd2YnNjcmlwdCdcbiAgICAgIH1cbiAgICBdXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdmJzY3JpcHRIdG1sO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==