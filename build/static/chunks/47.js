(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[47],{

/***/ "./node_modules/highlight.js/lib/languages/dockerfile.js":
/*!***************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/dockerfile.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Dockerfile
Requires: bash.js
Author: Alexis Hénaut <alexis@henaut.net>
Description: language definition for Dockerfile files
Website: https://docs.docker.com/engine/reference/builder/
Category: config
*/

/** @type LanguageFn */
function dockerfile(hljs) {
  return {
    name: 'Dockerfile',
    aliases: ['docker'],
    case_insensitive: true,
    keywords: 'from maintainer expose env arg user onbuild stopsignal',
    contains: [
      hljs.HASH_COMMENT_MODE,
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE,
      hljs.NUMBER_MODE,
      {
        beginKeywords: 'run cmd entrypoint volume add copy workdir label healthcheck shell',
        starts: {
          end: /[^\\]$/,
          subLanguage: 'bash'
        }
      }
    ],
    illegal: '</'
  };
}

module.exports = dockerfile;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2RvY2tlcmZpbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvNDcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuTGFuZ3VhZ2U6IERvY2tlcmZpbGVcblJlcXVpcmVzOiBiYXNoLmpzXG5BdXRob3I6IEFsZXhpcyBIw6luYXV0IDxhbGV4aXNAaGVuYXV0Lm5ldD5cbkRlc2NyaXB0aW9uOiBsYW5ndWFnZSBkZWZpbml0aW9uIGZvciBEb2NrZXJmaWxlIGZpbGVzXG5XZWJzaXRlOiBodHRwczovL2RvY3MuZG9ja2VyLmNvbS9lbmdpbmUvcmVmZXJlbmNlL2J1aWxkZXIvXG5DYXRlZ29yeTogY29uZmlnXG4qL1xuXG4vKiogQHR5cGUgTGFuZ3VhZ2VGbiAqL1xuZnVuY3Rpb24gZG9ja2VyZmlsZShobGpzKSB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ0RvY2tlcmZpbGUnLFxuICAgIGFsaWFzZXM6IFsnZG9ja2VyJ10sXG4gICAgY2FzZV9pbnNlbnNpdGl2ZTogdHJ1ZSxcbiAgICBrZXl3b3JkczogJ2Zyb20gbWFpbnRhaW5lciBleHBvc2UgZW52IGFyZyB1c2VyIG9uYnVpbGQgc3RvcHNpZ25hbCcsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIGhsanMuSEFTSF9DT01NRU5UX01PREUsXG4gICAgICBobGpzLkFQT1NfU1RSSU5HX01PREUsXG4gICAgICBobGpzLlFVT1RFX1NUUklOR19NT0RFLFxuICAgICAgaGxqcy5OVU1CRVJfTU9ERSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW5LZXl3b3JkczogJ3J1biBjbWQgZW50cnlwb2ludCB2b2x1bWUgYWRkIGNvcHkgd29ya2RpciBsYWJlbCBoZWFsdGhjaGVjayBzaGVsbCcsXG4gICAgICAgIHN0YXJ0czoge1xuICAgICAgICAgIGVuZDogL1teXFxcXF0kLyxcbiAgICAgICAgICBzdWJMYW5ndWFnZTogJ2Jhc2gnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdLFxuICAgIGlsbGVnYWw6ICc8LydcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb2NrZXJmaWxlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==