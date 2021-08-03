(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[119],{

/***/ "./node_modules/highlight.js/lib/languages/node-repl.js":
/*!**************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/node-repl.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Node REPL
Requires: javascript.js
Author: Marat Nagayev <nagaevmt@yandex.ru>
Category: scripting
*/

/** @type LanguageFn */
function nodeRepl(hljs) {
  return {
    name: 'Node REPL',
    contains: [
      {
        className: 'meta',
        starts: {
          // a space separates the REPL prefix from the actual code
          // this is purely for cleaner HTML output
          end: / |$/,
          starts: {
            end: '$',
            subLanguage: 'javascript'
          }
        },
        variants: [
          {
            begin: /^>(?=[ ]|$)/
          },
          {
            begin: /^\.\.\.(?=[ ]|$)/
          }
        ]
      }
    ]
  };
}

module.exports = nodeRepl;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL25vZGUtcmVwbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvMTE5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBOb2RlIFJFUExcblJlcXVpcmVzOiBqYXZhc2NyaXB0LmpzXG5BdXRob3I6IE1hcmF0IE5hZ2F5ZXYgPG5hZ2Fldm10QHlhbmRleC5ydT5cbkNhdGVnb3J5OiBzY3JpcHRpbmdcbiovXG5cbi8qKiBAdHlwZSBMYW5ndWFnZUZuICovXG5mdW5jdGlvbiBub2RlUmVwbChobGpzKSB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ05vZGUgUkVQTCcsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgICAgIHN0YXJ0czoge1xuICAgICAgICAgIC8vIGEgc3BhY2Ugc2VwYXJhdGVzIHRoZSBSRVBMIHByZWZpeCBmcm9tIHRoZSBhY3R1YWwgY29kZVxuICAgICAgICAgIC8vIHRoaXMgaXMgcHVyZWx5IGZvciBjbGVhbmVyIEhUTUwgb3V0cHV0XG4gICAgICAgICAgZW5kOiAvIHwkLyxcbiAgICAgICAgICBzdGFydHM6IHtcbiAgICAgICAgICAgIGVuZDogJyQnLFxuICAgICAgICAgICAgc3ViTGFuZ3VhZ2U6ICdqYXZhc2NyaXB0J1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogL14+KD89WyBdfCQpL1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW46IC9eXFwuXFwuXFwuKD89WyBdfCQpL1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBub2RlUmVwbDtcbiJdLCJzb3VyY2VSb290IjoiIn0=