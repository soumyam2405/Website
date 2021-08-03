(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[7],{

/***/ "./node_modules/highlight.js/lib/languages/apache.js":
/*!***********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/apache.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Apache config
Author: Ruslan Keba <rukeba@gmail.com>
Contributors: Ivan Sagalaev <maniac@softwaremaniacs.org>
Website: https://httpd.apache.org
Description: language definition for Apache configuration files (httpd.conf & .htaccess)
Category: common, config
Audit: 2020
*/

/** @type LanguageFn */
function apache(hljs) {
  const NUMBER_REF = {
    className: 'number',
    begin: /[$%]\d+/
  };
  const NUMBER = {
    className: 'number',
    begin: /\d+/
  };
  const IP_ADDRESS = {
    className: "number",
    begin: /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(:\d{1,5})?/
  };
  const PORT_NUMBER = {
    className: "number",
    begin: /:\d{1,5}/
  };
  return {
    name: 'Apache config',
    aliases: [ 'apacheconf' ],
    case_insensitive: true,
    contains: [
      hljs.HASH_COMMENT_MODE,
      {
        className: 'section',
        begin: /<\/?/,
        end: />/,
        contains: [
          IP_ADDRESS,
          PORT_NUMBER,
          // low relevance prevents us from claming XML/HTML where this rule would
          // match strings inside of XML tags
          hljs.inherit(hljs.QUOTE_STRING_MODE, { relevance: 0 })
        ]
      },
      {
        className: 'attribute',
        begin: /\w+/,
        relevance: 0,
        // keywords aren’t needed for highlighting per se, they only boost relevance
        // for a very generally defined mode (starts with a word, ends with line-end
        keywords: {
          nomarkup:
            'order deny allow setenv rewriterule rewriteengine rewritecond documentroot ' +
            'sethandler errordocument loadmodule options header listen serverroot ' +
            'servername'
        },
        starts: {
          end: /$/,
          relevance: 0,
          keywords: { literal: 'on off all deny allow' },
          contains: [
            {
              className: 'meta',
              begin: /\s\[/,
              end: /\]$/
            },
            {
              className: 'variable',
              begin: /[\$%]\{/,
              end: /\}/,
              contains: [
                'self',
                NUMBER_REF
              ]
            },
            IP_ADDRESS,
            NUMBER,
            hljs.QUOTE_STRING_MODE
          ]
        }
      }
    ],
    illegal: /\S/
  };
}

module.exports = apache;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2FwYWNoZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxJQUFJLEtBQUssSUFBSSxLQUFLLElBQUksS0FBSyxJQUFJLEtBQUssSUFBSTtBQUN2RDtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsSUFBSTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxlQUFlO0FBQy9EO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLG1DQUFtQztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0Isc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvNy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5MYW5ndWFnZTogQXBhY2hlIGNvbmZpZ1xuQXV0aG9yOiBSdXNsYW4gS2ViYSA8cnVrZWJhQGdtYWlsLmNvbT5cbkNvbnRyaWJ1dG9yczogSXZhbiBTYWdhbGFldiA8bWFuaWFjQHNvZnR3YXJlbWFuaWFjcy5vcmc+XG5XZWJzaXRlOiBodHRwczovL2h0dHBkLmFwYWNoZS5vcmdcbkRlc2NyaXB0aW9uOiBsYW5ndWFnZSBkZWZpbml0aW9uIGZvciBBcGFjaGUgY29uZmlndXJhdGlvbiBmaWxlcyAoaHR0cGQuY29uZiAmIC5odGFjY2VzcylcbkNhdGVnb3J5OiBjb21tb24sIGNvbmZpZ1xuQXVkaXQ6IDIwMjBcbiovXG5cbi8qKiBAdHlwZSBMYW5ndWFnZUZuICovXG5mdW5jdGlvbiBhcGFjaGUoaGxqcykge1xuICBjb25zdCBOVU1CRVJfUkVGID0ge1xuICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgYmVnaW46IC9bJCVdXFxkKy9cbiAgfTtcbiAgY29uc3QgTlVNQkVSID0ge1xuICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgYmVnaW46IC9cXGQrL1xuICB9O1xuICBjb25zdCBJUF9BRERSRVNTID0ge1xuICAgIGNsYXNzTmFtZTogXCJudW1iZXJcIixcbiAgICBiZWdpbjogL1xcZHsxLDN9XFwuXFxkezEsM31cXC5cXGR7MSwzfVxcLlxcZHsxLDN9KDpcXGR7MSw1fSk/L1xuICB9O1xuICBjb25zdCBQT1JUX05VTUJFUiA9IHtcbiAgICBjbGFzc05hbWU6IFwibnVtYmVyXCIsXG4gICAgYmVnaW46IC86XFxkezEsNX0vXG4gIH07XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ0FwYWNoZSBjb25maWcnLFxuICAgIGFsaWFzZXM6IFsgJ2FwYWNoZWNvbmYnIF0sXG4gICAgY2FzZV9pbnNlbnNpdGl2ZTogdHJ1ZSxcbiAgICBjb250YWluczogW1xuICAgICAgaGxqcy5IQVNIX0NPTU1FTlRfTU9ERSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnc2VjdGlvbicsXG4gICAgICAgIGJlZ2luOiAvPFxcLz8vLFxuICAgICAgICBlbmQ6IC8+LyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICBJUF9BRERSRVNTLFxuICAgICAgICAgIFBPUlRfTlVNQkVSLFxuICAgICAgICAgIC8vIGxvdyByZWxldmFuY2UgcHJldmVudHMgdXMgZnJvbSBjbGFtaW5nIFhNTC9IVE1MIHdoZXJlIHRoaXMgcnVsZSB3b3VsZFxuICAgICAgICAgIC8vIG1hdGNoIHN0cmluZ3MgaW5zaWRlIG9mIFhNTCB0YWdzXG4gICAgICAgICAgaGxqcy5pbmhlcml0KGhsanMuUVVPVEVfU1RSSU5HX01PREUsIHsgcmVsZXZhbmNlOiAwIH0pXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2F0dHJpYnV0ZScsXG4gICAgICAgIGJlZ2luOiAvXFx3Ky8sXG4gICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgLy8ga2V5d29yZHMgYXJlbuKAmXQgbmVlZGVkIGZvciBoaWdobGlnaHRpbmcgcGVyIHNlLCB0aGV5IG9ubHkgYm9vc3QgcmVsZXZhbmNlXG4gICAgICAgIC8vIGZvciBhIHZlcnkgZ2VuZXJhbGx5IGRlZmluZWQgbW9kZSAoc3RhcnRzIHdpdGggYSB3b3JkLCBlbmRzIHdpdGggbGluZS1lbmRcbiAgICAgICAga2V5d29yZHM6IHtcbiAgICAgICAgICBub21hcmt1cDpcbiAgICAgICAgICAgICdvcmRlciBkZW55IGFsbG93IHNldGVudiByZXdyaXRlcnVsZSByZXdyaXRlZW5naW5lIHJld3JpdGVjb25kIGRvY3VtZW50cm9vdCAnICtcbiAgICAgICAgICAgICdzZXRoYW5kbGVyIGVycm9yZG9jdW1lbnQgbG9hZG1vZHVsZSBvcHRpb25zIGhlYWRlciBsaXN0ZW4gc2VydmVycm9vdCAnICtcbiAgICAgICAgICAgICdzZXJ2ZXJuYW1lJ1xuICAgICAgICB9LFxuICAgICAgICBzdGFydHM6IHtcbiAgICAgICAgICBlbmQ6IC8kLyxcbiAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAga2V5d29yZHM6IHsgbGl0ZXJhbDogJ29uIG9mZiBhbGwgZGVueSBhbGxvdycgfSxcbiAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICAgICAgICAgICAgYmVnaW46IC9cXHNcXFsvLFxuICAgICAgICAgICAgICBlbmQ6IC9cXF0kL1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY2xhc3NOYW1lOiAndmFyaWFibGUnLFxuICAgICAgICAgICAgICBiZWdpbjogL1tcXCQlXVxcey8sXG4gICAgICAgICAgICAgIGVuZDogL1xcfS8sXG4gICAgICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAgICAgJ3NlbGYnLFxuICAgICAgICAgICAgICAgIE5VTUJFUl9SRUZcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIElQX0FERFJFU1MsXG4gICAgICAgICAgICBOVU1CRVIsXG4gICAgICAgICAgICBobGpzLlFVT1RFX1NUUklOR19NT0RFXG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICB9XG4gICAgXSxcbiAgICBpbGxlZ2FsOiAvXFxTL1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFwYWNoZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=