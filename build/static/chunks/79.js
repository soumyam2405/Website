(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[79],{

/***/ "./node_modules/highlight.js/lib/languages/http.js":
/*!*********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/http.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @param {string} value
 * @returns {RegExp}
 * */

/**
 * @param {RegExp | string } re
 * @returns {string}
 */
function source(re) {
  if (!re) return null;
  if (typeof re === "string") return re;

  return re.source;
}

/**
 * @param {...(RegExp | string) } args
 * @returns {string}
 */
function concat(...args) {
  const joined = args.map((x) => source(x)).join("");
  return joined;
}

/*
Language: HTTP
Description: HTTP request and response headers with automatic body highlighting
Author: Ivan Sagalaev <maniac@softwaremaniacs.org>
Category: common, protocols
Website: https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview
*/

function http(hljs) {
  const VERSION = 'HTTP/(2|1\\.[01])';
  const HEADER_NAME = /[A-Za-z][A-Za-z0-9-]*/;
  const HEADERS_AND_BODY = [
    {
      className: 'attribute',
      begin: concat('^', HEADER_NAME, '(?=\\:\\s)'),
      starts: {
        contains: [
          {
            className: "punctuation",
            begin: /: /,
            relevance: 0,
            starts: {
              end: '$',
              relevance: 0
            }
          }
        ]
      }
    },
    {
      begin: '\\n\\n',
      starts: { subLanguage: [], endsWithParent: true }
    }
  ];

  return {
    name: 'HTTP',
    aliases: ['https'],
    illegal: /\S/,
    contains: [
      // response
      {
        begin: '^(?=' + VERSION + " \\d{3})",
        end: /$/,
        contains: [
          {
            className: "meta",
            begin: VERSION
          },
          {
            className: 'number', begin: '\\b\\d{3}\\b'
          }
        ],
        starts: {
          end: /\b\B/,
          illegal: /\S/,
          contains: HEADERS_AND_BODY
        }
      },
      // request
      {
        begin: '(?=^[A-Z]+ (.*?) ' + VERSION + '$)',
        end: /$/,
        contains: [
          {
            className: 'string',
            begin: ' ',
            end: ' ',
            excludeBegin: true,
            excludeEnd: true
          },
          {
            className: "meta",
            begin: VERSION
          },
          {
            className: 'keyword',
            begin: '[A-Z]+'
          }
        ],
        starts: {
          end: /\b\B/,
          illegal: /\S/,
          contains: HEADERS_AND_BODY
        }
      }
    ]
  };
}

module.exports = http;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2h0dHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYTtBQUNiOztBQUVBO0FBQ0EsV0FBVyxpQkFBaUI7QUFDNUIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLHNCQUFzQjtBQUNqQyxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxFQUFFO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxnREFBZ0QsRUFBRTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvNzkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHJldHVybnMge1JlZ0V4cH1cbiAqICovXG5cbi8qKlxuICogQHBhcmFtIHtSZWdFeHAgfCBzdHJpbmcgfSByZVxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gc291cmNlKHJlKSB7XG4gIGlmICghcmUpIHJldHVybiBudWxsO1xuICBpZiAodHlwZW9mIHJlID09PSBcInN0cmluZ1wiKSByZXR1cm4gcmU7XG5cbiAgcmV0dXJuIHJlLnNvdXJjZTtcbn1cblxuLyoqXG4gKiBAcGFyYW0gey4uLihSZWdFeHAgfCBzdHJpbmcpIH0gYXJnc1xuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gY29uY2F0KC4uLmFyZ3MpIHtcbiAgY29uc3Qgam9pbmVkID0gYXJncy5tYXAoKHgpID0+IHNvdXJjZSh4KSkuam9pbihcIlwiKTtcbiAgcmV0dXJuIGpvaW5lZDtcbn1cblxuLypcbkxhbmd1YWdlOiBIVFRQXG5EZXNjcmlwdGlvbjogSFRUUCByZXF1ZXN0IGFuZCByZXNwb25zZSBoZWFkZXJzIHdpdGggYXV0b21hdGljIGJvZHkgaGlnaGxpZ2h0aW5nXG5BdXRob3I6IEl2YW4gU2FnYWxhZXYgPG1hbmlhY0Bzb2Z0d2FyZW1hbmlhY3Mub3JnPlxuQ2F0ZWdvcnk6IGNvbW1vbiwgcHJvdG9jb2xzXG5XZWJzaXRlOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVFRQL092ZXJ2aWV3XG4qL1xuXG5mdW5jdGlvbiBodHRwKGhsanMpIHtcbiAgY29uc3QgVkVSU0lPTiA9ICdIVFRQLygyfDFcXFxcLlswMV0pJztcbiAgY29uc3QgSEVBREVSX05BTUUgPSAvW0EtWmEtel1bQS1aYS16MC05LV0qLztcbiAgY29uc3QgSEVBREVSU19BTkRfQk9EWSA9IFtcbiAgICB7XG4gICAgICBjbGFzc05hbWU6ICdhdHRyaWJ1dGUnLFxuICAgICAgYmVnaW46IGNvbmNhdCgnXicsIEhFQURFUl9OQU1FLCAnKD89XFxcXDpcXFxccyknKSxcbiAgICAgIHN0YXJ0czoge1xuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJwdW5jdHVhdGlvblwiLFxuICAgICAgICAgICAgYmVnaW46IC86IC8sXG4gICAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgICBzdGFydHM6IHtcbiAgICAgICAgICAgICAgZW5kOiAnJCcsXG4gICAgICAgICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgYmVnaW46ICdcXFxcblxcXFxuJyxcbiAgICAgIHN0YXJ0czogeyBzdWJMYW5ndWFnZTogW10sIGVuZHNXaXRoUGFyZW50OiB0cnVlIH1cbiAgICB9XG4gIF07XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnSFRUUCcsXG4gICAgYWxpYXNlczogWydodHRwcyddLFxuICAgIGlsbGVnYWw6IC9cXFMvLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICAvLyByZXNwb25zZVxuICAgICAge1xuICAgICAgICBiZWdpbjogJ14oPz0nICsgVkVSU0lPTiArIFwiIFxcXFxkezN9KVwiLFxuICAgICAgICBlbmQ6IC8kLyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6IFwibWV0YVwiLFxuICAgICAgICAgICAgYmVnaW46IFZFUlNJT05cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ251bWJlcicsIGJlZ2luOiAnXFxcXGJcXFxcZHszfVxcXFxiJ1xuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgc3RhcnRzOiB7XG4gICAgICAgICAgZW5kOiAvXFxiXFxCLyxcbiAgICAgICAgICBpbGxlZ2FsOiAvXFxTLyxcbiAgICAgICAgICBjb250YWluczogSEVBREVSU19BTkRfQk9EWVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gcmVxdWVzdFxuICAgICAge1xuICAgICAgICBiZWdpbjogJyg/PV5bQS1aXSsgKC4qPykgJyArIFZFUlNJT04gKyAnJCknLFxuICAgICAgICBlbmQ6IC8kLyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgYmVnaW46ICcgJyxcbiAgICAgICAgICAgIGVuZDogJyAnLFxuICAgICAgICAgICAgZXhjbHVkZUJlZ2luOiB0cnVlLFxuICAgICAgICAgICAgZXhjbHVkZUVuZDogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiBcIm1ldGFcIixcbiAgICAgICAgICAgIGJlZ2luOiBWRVJTSU9OXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdrZXl3b3JkJyxcbiAgICAgICAgICAgIGJlZ2luOiAnW0EtWl0rJ1xuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgc3RhcnRzOiB7XG4gICAgICAgICAgZW5kOiAvXFxiXFxCLyxcbiAgICAgICAgICBpbGxlZ2FsOiAvXFxTLyxcbiAgICAgICAgICBjb250YWluczogSEVBREVSU19BTkRfQk9EWVxuICAgICAgICB9XG4gICAgICB9XG4gICAgXVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGh0dHA7XG4iXSwic291cmNlUm9vdCI6IiJ9