(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[66],{

/***/ "./node_modules/highlight.js/lib/languages/gherkin.js":
/*!************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/gherkin.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 Language: Gherkin
 Author: Sam Pikesley (@pikesley) <sam.pikesley@theodi.org>
 Description: Gherkin is the format for cucumber specifications. It is a domain specific language which helps you to describe business behavior without the need to go into detail of implementation.
 Website: https://cucumber.io/docs/gherkin/
 */

function gherkin(hljs) {
  return {
    name: 'Gherkin',
    aliases: ['feature'],
    keywords: 'Feature Background Ability Business\ Need Scenario Scenarios Scenario\ Outline Scenario\ Template Examples Given And Then But When',
    contains: [
      {
        className: 'symbol',
        begin: '\\*',
        relevance: 0
      },
      {
        className: 'meta',
        begin: '@[^@\\s]+'
      },
      {
        begin: '\\|',
        end: '\\|\\w*$',
        contains: [
          {
            className: 'string',
            begin: '[^|]+'
          }
        ]
      },
      {
        className: 'variable',
        begin: '<',
        end: '>'
      },
      hljs.HASH_COMMENT_MODE,
      {
        className: 'string',
        begin: '"""',
        end: '"""'
      },
      hljs.QUOTE_STRING_MODE
    ]
  };
}

module.exports = gherkin;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2doZXJraW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJzdGF0aWMvY2h1bmtzLzY2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiBMYW5ndWFnZTogR2hlcmtpblxuIEF1dGhvcjogU2FtIFBpa2VzbGV5IChAcGlrZXNsZXkpIDxzYW0ucGlrZXNsZXlAdGhlb2RpLm9yZz5cbiBEZXNjcmlwdGlvbjogR2hlcmtpbiBpcyB0aGUgZm9ybWF0IGZvciBjdWN1bWJlciBzcGVjaWZpY2F0aW9ucy4gSXQgaXMgYSBkb21haW4gc3BlY2lmaWMgbGFuZ3VhZ2Ugd2hpY2ggaGVscHMgeW91IHRvIGRlc2NyaWJlIGJ1c2luZXNzIGJlaGF2aW9yIHdpdGhvdXQgdGhlIG5lZWQgdG8gZ28gaW50byBkZXRhaWwgb2YgaW1wbGVtZW50YXRpb24uXG4gV2Vic2l0ZTogaHR0cHM6Ly9jdWN1bWJlci5pby9kb2NzL2doZXJraW4vXG4gKi9cblxuZnVuY3Rpb24gZ2hlcmtpbihobGpzKSB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ0doZXJraW4nLFxuICAgIGFsaWFzZXM6IFsnZmVhdHVyZSddLFxuICAgIGtleXdvcmRzOiAnRmVhdHVyZSBCYWNrZ3JvdW5kIEFiaWxpdHkgQnVzaW5lc3NcXCBOZWVkIFNjZW5hcmlvIFNjZW5hcmlvcyBTY2VuYXJpb1xcIE91dGxpbmUgU2NlbmFyaW9cXCBUZW1wbGF0ZSBFeGFtcGxlcyBHaXZlbiBBbmQgVGhlbiBCdXQgV2hlbicsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnc3ltYm9sJyxcbiAgICAgICAgYmVnaW46ICdcXFxcKicsXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgICAgIGJlZ2luOiAnQFteQFxcXFxzXSsnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogJ1xcXFx8JyxcbiAgICAgICAgZW5kOiAnXFxcXHxcXFxcdyokJyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgYmVnaW46ICdbXnxdKydcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3ZhcmlhYmxlJyxcbiAgICAgICAgYmVnaW46ICc8JyxcbiAgICAgICAgZW5kOiAnPidcbiAgICAgIH0sXG4gICAgICBobGpzLkhBU0hfQ09NTUVOVF9NT0RFLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgICBiZWdpbjogJ1wiXCJcIicsXG4gICAgICAgIGVuZDogJ1wiXCJcIidcbiAgICAgIH0sXG4gICAgICBobGpzLlFVT1RFX1NUUklOR19NT0RFXG4gICAgXVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdoZXJraW47XG4iXSwic291cmNlUm9vdCI6IiJ9