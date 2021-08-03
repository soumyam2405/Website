exports.ids = [54];
exports.modules = {

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

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvZXJiLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiI1NC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5MYW5ndWFnZTogRVJCIChFbWJlZGRlZCBSdWJ5KVxuUmVxdWlyZXM6IHhtbC5qcywgcnVieS5qc1xuQXV0aG9yOiBMdWNhcyBNYXp6YSA8bHVjYXN0bWF6emFAZ21haWwuY29tPlxuQ29udHJpYnV0b3JzOiBLYXNzaW8gQm9yZ2VzIDxrYXNzaW9ib3JnZXNtQGdtYWlsLmNvbT5cbkRlc2NyaXB0aW9uOiBcIkJyaWRnZVwiIGxhbmd1YWdlIGRlZmluaW5nIGZyYWdtZW50cyBvZiBSdWJ5IGluIEhUTUwgd2l0aGluIDwlIC4uICU+XG5XZWJzaXRlOiBodHRwczovL3J1YnktZG9jLm9yZy9zdGRsaWItMi42LjUvbGliZG9jL2VyYi9yZG9jL0VSQi5odG1sXG5DYXRlZ29yeTogdGVtcGxhdGVcbiovXG5cbi8qKiBAdHlwZSBMYW5ndWFnZUZuICovXG5mdW5jdGlvbiBlcmIoaGxqcykge1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICdFUkInLFxuICAgIHN1Ykxhbmd1YWdlOiAneG1sJyxcbiAgICBjb250YWluczogW1xuICAgICAgaGxqcy5DT01NRU5UKCc8JSMnLCAnJT4nKSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICc8JVslPS1dPycsXG4gICAgICAgIGVuZDogJ1slLV0/JT4nLFxuICAgICAgICBzdWJMYW5ndWFnZTogJ3J1YnknLFxuICAgICAgICBleGNsdWRlQmVnaW46IHRydWUsXG4gICAgICAgIGV4Y2x1ZGVFbmQ6IHRydWVcbiAgICAgIH1cbiAgICBdXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXJiO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==