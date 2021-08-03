exports.ids = [48];
exports.modules = {

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

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvZHNjb25maWcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiI0OC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gTGFuZ3VhZ2U6IGRzY29uZmlnXG4gRGVzY3JpcHRpb246IGRzY29uZmlnIGJhdGNoIGNvbmZpZ3VyYXRpb24gbGFuZ3VhZ2UgZm9yIExEQVAgZGlyZWN0b3J5IHNlcnZlcnNcbiBDb250cmlidXRvcnM6IEphY29iIENoaWxkcmVzcyA8amFjb2JjQGdtYWlsLmNvbT5cbiBDYXRlZ29yeTogZW50ZXJwcmlzZSwgY29uZmlnXG4gKi9cblxuIC8qKiBAdHlwZSBMYW5ndWFnZUZuICovXG5mdW5jdGlvbiBkc2NvbmZpZyhobGpzKSB7XG4gIGNvbnN0IFFVT1RFRF9QUk9QRVJUWSA9IHtcbiAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgIGJlZ2luOiAvXCIvLFxuICAgIGVuZDogL1wiL1xuICB9O1xuICBjb25zdCBBUE9TX1BST1BFUlRZID0ge1xuICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgYmVnaW46IC8nLyxcbiAgICBlbmQ6IC8nL1xuICB9O1xuICBjb25zdCBVTlFVT1RFRF9QUk9QRVJUWSA9IHtcbiAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgIGJlZ2luOiAvW1xcd1xcLT9dKzpcXHcrLyxcbiAgICBlbmQ6IC9cXFcvLFxuICAgIHJlbGV2YW5jZTogMFxuICB9O1xuICBjb25zdCBWQUxVRUxFU1NfUFJPUEVSVFkgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICBiZWdpbjogL1xcdysoXFwtXFx3KykqLyxcbiAgICBlbmQ6IC8oPz1cXFcpLyxcbiAgICByZWxldmFuY2U6IDBcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGtleXdvcmRzOiAnZHNjb25maWcnLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2tleXdvcmQnLFxuICAgICAgICBiZWdpbjogJ15kc2NvbmZpZycsXG4gICAgICAgIGVuZDogL1xccy8sXG4gICAgICAgIGV4Y2x1ZGVFbmQ6IHRydWUsXG4gICAgICAgIHJlbGV2YW5jZTogMTBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2J1aWx0X2luJyxcbiAgICAgICAgYmVnaW46IC8obGlzdHxjcmVhdGV8Z2V0fHNldHxkZWxldGUpLShcXHcrKS8sXG4gICAgICAgIGVuZDogL1xccy8sXG4gICAgICAgIGV4Y2x1ZGVFbmQ6IHRydWUsXG4gICAgICAgIGlsbGVnYWw6ICchQCMkJV4mKigpJyxcbiAgICAgICAgcmVsZXZhbmNlOiAxMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnYnVpbHRfaW4nLFxuICAgICAgICBiZWdpbjogLy0tKFxcdyspLyxcbiAgICAgICAgZW5kOiAvXFxzLyxcbiAgICAgICAgZXhjbHVkZUVuZDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIFFVT1RFRF9QUk9QRVJUWSxcbiAgICAgIEFQT1NfUFJPUEVSVFksXG4gICAgICBVTlFVT1RFRF9QUk9QRVJUWSxcbiAgICAgIFZBTFVFTEVTU19QUk9QRVJUWSxcbiAgICAgIGhsanMuSEFTSF9DT01NRU5UX01PREVcbiAgICBdXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZHNjb25maWc7XG4iXSwic291cmNlUm9vdCI6IiJ9