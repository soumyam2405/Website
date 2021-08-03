(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[49],{

/***/ "./node_modules/highlight.js/lib/languages/dsconfig.js":
/*!*************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/dsconfig.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 Language: dsconfig
 Description: dsconfig batch configuration language for LDAP directory servers
 Contributors: Jacob Childress <jacobc@gmail.com>
 Category: enterprise, config
 */

 /** @type LanguageFn */
function dsconfig(hljs) {
  const QUOTED_PROPERTY = {
    className: 'string',
    begin: /"/,
    end: /"/
  };
  const APOS_PROPERTY = {
    className: 'string',
    begin: /'/,
    end: /'/
  };
  const UNQUOTED_PROPERTY = {
    className: 'string',
    begin: /[\w\-?]+:\w+/,
    end: /\W/,
    relevance: 0
  };
  const VALUELESS_PROPERTY = {
    className: 'string',
    begin: /\w+(\-\w+)*/,
    end: /(?=\W)/,
    relevance: 0
  };

  return {
    keywords: 'dsconfig',
    contains: [
      {
        className: 'keyword',
        begin: '^dsconfig',
        end: /\s/,
        excludeEnd: true,
        relevance: 10
      },
      {
        className: 'built_in',
        begin: /(list|create|get|set|delete)-(\w+)/,
        end: /\s/,
        excludeEnd: true,
        illegal: '!@#$%^&*()',
        relevance: 10
      },
      {
        className: 'built_in',
        begin: /--(\w+)/,
        end: /\s/,
        excludeEnd: true
      },
      QUOTED_PROPERTY,
      APOS_PROPERTY,
      UNQUOTED_PROPERTY,
      VALUELESS_PROPERTY,
      hljs.HASH_COMMENT_MODE
    ]
  };
}

module.exports = dsconfig;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2RzY29uZmlnLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJzdGF0aWMvY2h1bmtzLzQ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiBMYW5ndWFnZTogZHNjb25maWdcbiBEZXNjcmlwdGlvbjogZHNjb25maWcgYmF0Y2ggY29uZmlndXJhdGlvbiBsYW5ndWFnZSBmb3IgTERBUCBkaXJlY3Rvcnkgc2VydmVyc1xuIENvbnRyaWJ1dG9yczogSmFjb2IgQ2hpbGRyZXNzIDxqYWNvYmNAZ21haWwuY29tPlxuIENhdGVnb3J5OiBlbnRlcnByaXNlLCBjb25maWdcbiAqL1xuXG4gLyoqIEB0eXBlIExhbmd1YWdlRm4gKi9cbmZ1bmN0aW9uIGRzY29uZmlnKGhsanMpIHtcbiAgY29uc3QgUVVPVEVEX1BST1BFUlRZID0ge1xuICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgYmVnaW46IC9cIi8sXG4gICAgZW5kOiAvXCIvXG4gIH07XG4gIGNvbnN0IEFQT1NfUFJPUEVSVFkgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICBiZWdpbjogLycvLFxuICAgIGVuZDogLycvXG4gIH07XG4gIGNvbnN0IFVOUVVPVEVEX1BST1BFUlRZID0ge1xuICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgYmVnaW46IC9bXFx3XFwtP10rOlxcdysvLFxuICAgIGVuZDogL1xcVy8sXG4gICAgcmVsZXZhbmNlOiAwXG4gIH07XG4gIGNvbnN0IFZBTFVFTEVTU19QUk9QRVJUWSA9IHtcbiAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgIGJlZ2luOiAvXFx3KyhcXC1cXHcrKSovLFxuICAgIGVuZDogLyg/PVxcVykvLFxuICAgIHJlbGV2YW5jZTogMFxuICB9O1xuXG4gIHJldHVybiB7XG4gICAga2V5d29yZHM6ICdkc2NvbmZpZycsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAna2V5d29yZCcsXG4gICAgICAgIGJlZ2luOiAnXmRzY29uZmlnJyxcbiAgICAgICAgZW5kOiAvXFxzLyxcbiAgICAgICAgZXhjbHVkZUVuZDogdHJ1ZSxcbiAgICAgICAgcmVsZXZhbmNlOiAxMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnYnVpbHRfaW4nLFxuICAgICAgICBiZWdpbjogLyhsaXN0fGNyZWF0ZXxnZXR8c2V0fGRlbGV0ZSktKFxcdyspLyxcbiAgICAgICAgZW5kOiAvXFxzLyxcbiAgICAgICAgZXhjbHVkZUVuZDogdHJ1ZSxcbiAgICAgICAgaWxsZWdhbDogJyFAIyQlXiYqKCknLFxuICAgICAgICByZWxldmFuY2U6IDEwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdidWlsdF9pbicsXG4gICAgICAgIGJlZ2luOiAvLS0oXFx3KykvLFxuICAgICAgICBlbmQ6IC9cXHMvLFxuICAgICAgICBleGNsdWRlRW5kOiB0cnVlXG4gICAgICB9LFxuICAgICAgUVVPVEVEX1BST1BFUlRZLFxuICAgICAgQVBPU19QUk9QRVJUWSxcbiAgICAgIFVOUVVPVEVEX1BST1BFUlRZLFxuICAgICAgVkFMVUVMRVNTX1BST1BFUlRZLFxuICAgICAgaGxqcy5IQVNIX0NPTU1FTlRfTU9ERVxuICAgIF1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkc2NvbmZpZztcbiJdLCJzb3VyY2VSb290IjoiIn0=