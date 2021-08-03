exports.ids = [93];
exports.modules = {

/***/ "./node_modules/highlight.js/lib/languages/ldif.js":
/*!*********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/ldif.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: LDIF
Contributors: Jacob Childress <jacobc@gmail.com>
Category: enterprise, config
Website: https://en.wikipedia.org/wiki/LDAP_Data_Interchange_Format
*/
function ldif(hljs) {
  return {
    name: 'LDIF',
    contains: [
      {
        className: 'attribute',
        begin: '^dn',
        end: ': ',
        excludeEnd: true,
        starts: {
          end: '$',
          relevance: 0
        },
        relevance: 10
      },
      {
        className: 'attribute',
        begin: '^\\w',
        end: ': ',
        excludeEnd: true,
        starts: {
          end: '$',
          relevance: 0
        }
      },
      {
        className: 'literal',
        begin: '^-',
        end: '$'
      },
      hljs.HASH_COMMENT_MODE
    ]
  };
}

module.exports = ldif;


/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvbGRpZi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiI5My5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5MYW5ndWFnZTogTERJRlxuQ29udHJpYnV0b3JzOiBKYWNvYiBDaGlsZHJlc3MgPGphY29iY0BnbWFpbC5jb20+XG5DYXRlZ29yeTogZW50ZXJwcmlzZSwgY29uZmlnXG5XZWJzaXRlOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9MREFQX0RhdGFfSW50ZXJjaGFuZ2VfRm9ybWF0XG4qL1xuZnVuY3Rpb24gbGRpZihobGpzKSB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ0xESUYnLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2F0dHJpYnV0ZScsXG4gICAgICAgIGJlZ2luOiAnXmRuJyxcbiAgICAgICAgZW5kOiAnOiAnLFxuICAgICAgICBleGNsdWRlRW5kOiB0cnVlLFxuICAgICAgICBzdGFydHM6IHtcbiAgICAgICAgICBlbmQ6ICckJyxcbiAgICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgICAgfSxcbiAgICAgICAgcmVsZXZhbmNlOiAxMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnYXR0cmlidXRlJyxcbiAgICAgICAgYmVnaW46ICdeXFxcXHcnLFxuICAgICAgICBlbmQ6ICc6ICcsXG4gICAgICAgIGV4Y2x1ZGVFbmQ6IHRydWUsXG4gICAgICAgIHN0YXJ0czoge1xuICAgICAgICAgIGVuZDogJyQnLFxuICAgICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdsaXRlcmFsJyxcbiAgICAgICAgYmVnaW46ICdeLScsXG4gICAgICAgIGVuZDogJyQnXG4gICAgICB9LFxuICAgICAgaGxqcy5IQVNIX0NPTU1FTlRfTU9ERVxuICAgIF1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsZGlmO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==