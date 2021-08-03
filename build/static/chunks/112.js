(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[112],{

/***/ "./node_modules/highlight.js/lib/languages/mojolicious.js":
/*!****************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/mojolicious.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Mojolicious
Requires: xml.js, perl.js
Author: Dotan Dimet <dotan@corky.net>
Description: Mojolicious .ep (Embedded Perl) templates
Website: https://mojolicious.org
Category: template
*/
function mojolicious(hljs) {
  return {
    name: 'Mojolicious',
    subLanguage: 'xml',
    contains: [
      {
        className: 'meta',
        begin: '^__(END|DATA)__$'
      },
      // mojolicious line
      {
        begin: "^\\s*%{1,2}={0,2}",
        end: '$',
        subLanguage: 'perl'
      },
      // mojolicious block
      {
        begin: "<%{1,2}={0,2}",
        end: "={0,1}%>",
        subLanguage: 'perl',
        excludeBegin: true,
        excludeEnd: true
      }
    ]
  };
}

module.exports = mojolicious;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL21vam9saWNpb3VzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSx1QkFBdUIsSUFBSSxFQUFFLElBQUk7QUFDakM7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsbUJBQW1CLElBQUksRUFBRSxJQUFJO0FBQzdCLGdCQUFnQixJQUFJO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvMTEyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBNb2pvbGljaW91c1xuUmVxdWlyZXM6IHhtbC5qcywgcGVybC5qc1xuQXV0aG9yOiBEb3RhbiBEaW1ldCA8ZG90YW5AY29ya3kubmV0PlxuRGVzY3JpcHRpb246IE1vam9saWNpb3VzIC5lcCAoRW1iZWRkZWQgUGVybCkgdGVtcGxhdGVzXG5XZWJzaXRlOiBodHRwczovL21vam9saWNpb3VzLm9yZ1xuQ2F0ZWdvcnk6IHRlbXBsYXRlXG4qL1xuZnVuY3Rpb24gbW9qb2xpY2lvdXMoaGxqcykge1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICdNb2pvbGljaW91cycsXG4gICAgc3ViTGFuZ3VhZ2U6ICd4bWwnLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgICAgICBiZWdpbjogJ15fXyhFTkR8REFUQSlfXyQnXG4gICAgICB9LFxuICAgICAgLy8gbW9qb2xpY2lvdXMgbGluZVxuICAgICAge1xuICAgICAgICBiZWdpbjogXCJeXFxcXHMqJXsxLDJ9PXswLDJ9XCIsXG4gICAgICAgIGVuZDogJyQnLFxuICAgICAgICBzdWJMYW5ndWFnZTogJ3BlcmwnXG4gICAgICB9LFxuICAgICAgLy8gbW9qb2xpY2lvdXMgYmxvY2tcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IFwiPCV7MSwyfT17MCwyfVwiLFxuICAgICAgICBlbmQ6IFwiPXswLDF9JT5cIixcbiAgICAgICAgc3ViTGFuZ3VhZ2U6ICdwZXJsJyxcbiAgICAgICAgZXhjbHVkZUJlZ2luOiB0cnVlLFxuICAgICAgICBleGNsdWRlRW5kOiB0cnVlXG4gICAgICB9XG4gICAgXVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1vam9saWNpb3VzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==