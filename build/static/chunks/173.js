(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[173],{

/***/ "./node_modules/highlight.js/lib/languages/tap.js":
/*!********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/tap.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Test Anything Protocol
Description: TAP, the Test Anything Protocol, is a simple text-based interface between testing modules in a test harness.
Requires: yaml.js
Author: Sergey Bronnikov <sergeyb@bronevichok.ru>
Website: https://testanything.org
*/

function tap(hljs) {
  return {
    name: 'Test Anything Protocol',
    case_insensitive: true,
    contains: [
      hljs.HASH_COMMENT_MODE,
      // version of format and total amount of testcases
      {
        className: 'meta',
        variants: [
          {
            begin: '^TAP version (\\d+)$'
          },
          {
            begin: '^1\\.\\.(\\d+)$'
          }
        ]
      },
      // YAML block
      {
        begin: /---$/,
        end: '\\.\\.\\.$',
        subLanguage: 'yaml',
        relevance: 0
      },
      // testcase number
      {
        className: 'number',
        begin: ' (\\d+) '
      },
      // testcase status and description
      {
        className: 'symbol',
        variants: [
          {
            begin: '^ok'
          },
          {
            begin: '^not ok'
          }
        ]
      }
    ]
  };
}

module.exports = tap;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3RhcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvMTczLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBUZXN0IEFueXRoaW5nIFByb3RvY29sXG5EZXNjcmlwdGlvbjogVEFQLCB0aGUgVGVzdCBBbnl0aGluZyBQcm90b2NvbCwgaXMgYSBzaW1wbGUgdGV4dC1iYXNlZCBpbnRlcmZhY2UgYmV0d2VlbiB0ZXN0aW5nIG1vZHVsZXMgaW4gYSB0ZXN0IGhhcm5lc3MuXG5SZXF1aXJlczogeWFtbC5qc1xuQXV0aG9yOiBTZXJnZXkgQnJvbm5pa292IDxzZXJnZXliQGJyb25ldmljaG9rLnJ1PlxuV2Vic2l0ZTogaHR0cHM6Ly90ZXN0YW55dGhpbmcub3JnXG4qL1xuXG5mdW5jdGlvbiB0YXAoaGxqcykge1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICdUZXN0IEFueXRoaW5nIFByb3RvY29sJyxcbiAgICBjYXNlX2luc2Vuc2l0aXZlOiB0cnVlLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBobGpzLkhBU0hfQ09NTUVOVF9NT0RFLFxuICAgICAgLy8gdmVyc2lvbiBvZiBmb3JtYXQgYW5kIHRvdGFsIGFtb3VudCBvZiB0ZXN0Y2FzZXNcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW46ICdeVEFQIHZlcnNpb24gKFxcXFxkKykkJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW46ICdeMVxcXFwuXFxcXC4oXFxcXGQrKSQnXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgLy8gWUFNTCBibG9ja1xuICAgICAge1xuICAgICAgICBiZWdpbjogLy0tLSQvLFxuICAgICAgICBlbmQ6ICdcXFxcLlxcXFwuXFxcXC4kJyxcbiAgICAgICAgc3ViTGFuZ3VhZ2U6ICd5YW1sJyxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuICAgICAgLy8gdGVzdGNhc2UgbnVtYmVyXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgICAgIGJlZ2luOiAnIChcXFxcZCspICdcbiAgICAgIH0sXG4gICAgICAvLyB0ZXN0Y2FzZSBzdGF0dXMgYW5kIGRlc2NyaXB0aW9uXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3N5bWJvbCcsXG4gICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW46ICdeb2snXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogJ15ub3Qgb2snXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRhcDtcbiJdLCJzb3VyY2VSb290IjoiIn0=