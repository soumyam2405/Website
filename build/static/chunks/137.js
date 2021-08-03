(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[137],{

/***/ "./node_modules/highlight.js/lib/languages/properties.js":
/*!***************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/properties.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: .properties
Contributors: Valentin Aitken <valentin@nalisbg.com>, Egor Rogov <e.rogov@postgrespro.ru>
Website: https://en.wikipedia.org/wiki/.properties
Category: common, config
*/

function properties(hljs) {

  // whitespaces: space, tab, formfeed
  var WS0 = '[ \\t\\f]*';
  var WS1 = '[ \\t\\f]+';
  // delimiter
  var EQUAL_DELIM = WS0+'[:=]'+WS0;
  var WS_DELIM = WS1;
  var DELIM = '(' + EQUAL_DELIM + '|' + WS_DELIM + ')';
  var KEY_ALPHANUM = '([^\\\\\\W:= \\t\\f\\n]|\\\\.)+';
  var KEY_OTHER = '([^\\\\:= \\t\\f\\n]|\\\\.)+';

  var DELIM_AND_VALUE = {
          // skip DELIM
          end: DELIM,
          relevance: 0,
          starts: {
            // value: everything until end of line (again, taking into account backslashes)
            className: 'string',
            end: /$/,
            relevance: 0,
            contains: [
              { begin: '\\\\\\\\'},
              { begin: '\\\\\\n' }
            ]
          }
        };

  return {
    name: '.properties',
    case_insensitive: true,
    illegal: /\S/,
    contains: [
      hljs.COMMENT('^\\s*[!#]', '$'),
      // key: everything until whitespace or = or : (taking into account backslashes)
      // case of a "normal" key
      {
        returnBegin: true,
        variants: [
          { begin: KEY_ALPHANUM + EQUAL_DELIM, relevance: 1 },
          { begin: KEY_ALPHANUM + WS_DELIM, relevance: 0 }
        ],
        contains: [
          {
            className: 'attr',
            begin: KEY_ALPHANUM,
            endsParent: true,
            relevance: 0
          }
        ],
        starts: DELIM_AND_VALUE
      },
      // case of key containing non-alphanumeric chars => relevance = 0
      {
        begin: KEY_OTHER + DELIM,
        returnBegin: true,
        relevance: 0,
        contains: [
          {
            className: 'meta',
            begin: KEY_OTHER,
            endsParent: true,
            relevance: 0
          }
        ],
        starts: DELIM_AND_VALUE
      },
      // case of an empty key
      {
        className: 'attr',
        relevance: 0,
        begin: KEY_OTHER + WS0 + '$'
      }
    ]
  };
}

module.exports = properties;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3Byb3BlcnRpZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUJBQW1CO0FBQ2xDLGVBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsa0RBQWtEO0FBQzdELFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJzdGF0aWMvY2h1bmtzLzEzNy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5MYW5ndWFnZTogLnByb3BlcnRpZXNcbkNvbnRyaWJ1dG9yczogVmFsZW50aW4gQWl0a2VuIDx2YWxlbnRpbkBuYWxpc2JnLmNvbT4sIEVnb3IgUm9nb3YgPGUucm9nb3ZAcG9zdGdyZXNwcm8ucnU+XG5XZWJzaXRlOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS8ucHJvcGVydGllc1xuQ2F0ZWdvcnk6IGNvbW1vbiwgY29uZmlnXG4qL1xuXG5mdW5jdGlvbiBwcm9wZXJ0aWVzKGhsanMpIHtcblxuICAvLyB3aGl0ZXNwYWNlczogc3BhY2UsIHRhYiwgZm9ybWZlZWRcbiAgdmFyIFdTMCA9ICdbIFxcXFx0XFxcXGZdKic7XG4gIHZhciBXUzEgPSAnWyBcXFxcdFxcXFxmXSsnO1xuICAvLyBkZWxpbWl0ZXJcbiAgdmFyIEVRVUFMX0RFTElNID0gV1MwKydbOj1dJytXUzA7XG4gIHZhciBXU19ERUxJTSA9IFdTMTtcbiAgdmFyIERFTElNID0gJygnICsgRVFVQUxfREVMSU0gKyAnfCcgKyBXU19ERUxJTSArICcpJztcbiAgdmFyIEtFWV9BTFBIQU5VTSA9ICcoW15cXFxcXFxcXFxcXFxXOj0gXFxcXHRcXFxcZlxcXFxuXXxcXFxcXFxcXC4pKyc7XG4gIHZhciBLRVlfT1RIRVIgPSAnKFteXFxcXFxcXFw6PSBcXFxcdFxcXFxmXFxcXG5dfFxcXFxcXFxcLikrJztcblxuICB2YXIgREVMSU1fQU5EX1ZBTFVFID0ge1xuICAgICAgICAgIC8vIHNraXAgREVMSU1cbiAgICAgICAgICBlbmQ6IERFTElNLFxuICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICBzdGFydHM6IHtcbiAgICAgICAgICAgIC8vIHZhbHVlOiBldmVyeXRoaW5nIHVudGlsIGVuZCBvZiBsaW5lIChhZ2FpbiwgdGFraW5nIGludG8gYWNjb3VudCBiYWNrc2xhc2hlcylcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgICAgICAgICBlbmQ6IC8kLyxcbiAgICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAgIHsgYmVnaW46ICdcXFxcXFxcXFxcXFxcXFxcJ30sXG4gICAgICAgICAgICAgIHsgYmVnaW46ICdcXFxcXFxcXFxcXFxuJyB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gIHJldHVybiB7XG4gICAgbmFtZTogJy5wcm9wZXJ0aWVzJyxcbiAgICBjYXNlX2luc2Vuc2l0aXZlOiB0cnVlLFxuICAgIGlsbGVnYWw6IC9cXFMvLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBobGpzLkNPTU1FTlQoJ15cXFxccypbISNdJywgJyQnKSxcbiAgICAgIC8vIGtleTogZXZlcnl0aGluZyB1bnRpbCB3aGl0ZXNwYWNlIG9yID0gb3IgOiAodGFraW5nIGludG8gYWNjb3VudCBiYWNrc2xhc2hlcylcbiAgICAgIC8vIGNhc2Ugb2YgYSBcIm5vcm1hbFwiIGtleVxuICAgICAge1xuICAgICAgICByZXR1cm5CZWdpbjogdHJ1ZSxcbiAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICB7IGJlZ2luOiBLRVlfQUxQSEFOVU0gKyBFUVVBTF9ERUxJTSwgcmVsZXZhbmNlOiAxIH0sXG4gICAgICAgICAgeyBiZWdpbjogS0VZX0FMUEhBTlVNICsgV1NfREVMSU0sIHJlbGV2YW5jZTogMCB9XG4gICAgICAgIF0sXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnYXR0cicsXG4gICAgICAgICAgICBiZWdpbjogS0VZX0FMUEhBTlVNLFxuICAgICAgICAgICAgZW5kc1BhcmVudDogdHJ1ZSxcbiAgICAgICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgc3RhcnRzOiBERUxJTV9BTkRfVkFMVUVcbiAgICAgIH0sXG4gICAgICAvLyBjYXNlIG9mIGtleSBjb250YWluaW5nIG5vbi1hbHBoYW51bWVyaWMgY2hhcnMgPT4gcmVsZXZhbmNlID0gMFxuICAgICAge1xuICAgICAgICBiZWdpbjogS0VZX09USEVSICsgREVMSU0sXG4gICAgICAgIHJldHVybkJlZ2luOiB0cnVlLFxuICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgICAgICAgICBiZWdpbjogS0VZX09USEVSLFxuICAgICAgICAgICAgZW5kc1BhcmVudDogdHJ1ZSxcbiAgICAgICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgc3RhcnRzOiBERUxJTV9BTkRfVkFMVUVcbiAgICAgIH0sXG4gICAgICAvLyBjYXNlIG9mIGFuIGVtcHR5IGtleVxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdhdHRyJyxcbiAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICBiZWdpbjogS0VZX09USEVSICsgV1MwICsgJyQnXG4gICAgICB9XG4gICAgXVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHByb3BlcnRpZXM7XG4iXSwic291cmNlUm9vdCI6IiJ9