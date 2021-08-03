(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[56],{

/***/ "./node_modules/highlight.js/lib/languages/erlang-repl.js":
/*!****************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/erlang-repl.js ***!
  \****************************************************************/
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
Language: Erlang REPL
Author: Sergey Ignatov <sergey@ignatov.spb.su>
Website: https://www.erlang.org
Category: functional
*/

/** @type LanguageFn */
function erlangRepl(hljs) {
  return {
    name: 'Erlang REPL',
    keywords: {
      built_in:
        'spawn spawn_link self',
      keyword:
        'after and andalso|10 band begin bnot bor bsl bsr bxor case catch cond div end fun if ' +
        'let not of or orelse|10 query receive rem try when xor'
    },
    contains: [
      {
        className: 'meta',
        begin: '^[0-9]+> ',
        relevance: 10
      },
      hljs.COMMENT('%', '$'),
      {
        className: 'number',
        begin: '\\b(\\d+(_\\d+)*#[a-fA-F0-9]+(_[a-fA-F0-9]+)*|\\d+(_\\d+)*(\\.\\d+(_\\d+)*)?([eE][-+]?\\d+)?)',
        relevance: 0
      },
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE,
      {
        begin: concat(
          /\?(::)?/,
          /([A-Z]\w*)/, // at least one identifier
          /((::)[A-Z]\w*)*/ // perhaps more
        )
      },
      {
        begin: '->'
      },
      {
        begin: 'ok'
      },
      {
        begin: '!'
      },
      {
        begin: '(\\b[a-z\'][a-zA-Z0-9_\']*:[a-z\'][a-zA-Z0-9_\']*)|(\\b[a-z\'][a-zA-Z0-9_\']*)',
        relevance: 0
      },
      {
        begin: '[A-Z][a-zA-Z0-9_\']*',
        relevance: 0
      }
    ]
  };
}

module.exports = erlangRepl;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2VybGFuZy1yZXBsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWE7QUFDYjs7QUFFQTtBQUNBLFdBQVcsaUJBQWlCO0FBQzVCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyxzQkFBc0I7QUFDakMsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJzdGF0aWMvY2h1bmtzLzU2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm5zIHtSZWdFeHB9XG4gKiAqL1xuXG4vKipcbiAqIEBwYXJhbSB7UmVnRXhwIHwgc3RyaW5nIH0gcmVcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIHNvdXJjZShyZSkge1xuICBpZiAoIXJlKSByZXR1cm4gbnVsbDtcbiAgaWYgKHR5cGVvZiByZSA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIHJlO1xuXG4gIHJldHVybiByZS5zb3VyY2U7XG59XG5cbi8qKlxuICogQHBhcmFtIHsuLi4oUmVnRXhwIHwgc3RyaW5nKSB9IGFyZ3NcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGNvbmNhdCguLi5hcmdzKSB7XG4gIGNvbnN0IGpvaW5lZCA9IGFyZ3MubWFwKCh4KSA9PiBzb3VyY2UoeCkpLmpvaW4oXCJcIik7XG4gIHJldHVybiBqb2luZWQ7XG59XG5cbi8qXG5MYW5ndWFnZTogRXJsYW5nIFJFUExcbkF1dGhvcjogU2VyZ2V5IElnbmF0b3YgPHNlcmdleUBpZ25hdG92LnNwYi5zdT5cbldlYnNpdGU6IGh0dHBzOi8vd3d3LmVybGFuZy5vcmdcbkNhdGVnb3J5OiBmdW5jdGlvbmFsXG4qL1xuXG4vKiogQHR5cGUgTGFuZ3VhZ2VGbiAqL1xuZnVuY3Rpb24gZXJsYW5nUmVwbChobGpzKSB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ0VybGFuZyBSRVBMJyxcbiAgICBrZXl3b3Jkczoge1xuICAgICAgYnVpbHRfaW46XG4gICAgICAgICdzcGF3biBzcGF3bl9saW5rIHNlbGYnLFxuICAgICAga2V5d29yZDpcbiAgICAgICAgJ2FmdGVyIGFuZCBhbmRhbHNvfDEwIGJhbmQgYmVnaW4gYm5vdCBib3IgYnNsIGJzciBieG9yIGNhc2UgY2F0Y2ggY29uZCBkaXYgZW5kIGZ1biBpZiAnICtcbiAgICAgICAgJ2xldCBub3Qgb2Ygb3Igb3JlbHNlfDEwIHF1ZXJ5IHJlY2VpdmUgcmVtIHRyeSB3aGVuIHhvcidcbiAgICB9LFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgICAgICBiZWdpbjogJ15bMC05XSs+ICcsXG4gICAgICAgIHJlbGV2YW5jZTogMTBcbiAgICAgIH0sXG4gICAgICBobGpzLkNPTU1FTlQoJyUnLCAnJCcpLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdudW1iZXInLFxuICAgICAgICBiZWdpbjogJ1xcXFxiKFxcXFxkKyhfXFxcXGQrKSojW2EtZkEtRjAtOV0rKF9bYS1mQS1GMC05XSspKnxcXFxcZCsoX1xcXFxkKykqKFxcXFwuXFxcXGQrKF9cXFxcZCspKik/KFtlRV1bLStdP1xcXFxkKyk/KScsXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIGhsanMuQVBPU19TVFJJTkdfTU9ERSxcbiAgICAgIGhsanMuUVVPVEVfU1RSSU5HX01PREUsXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiBjb25jYXQoXG4gICAgICAgICAgL1xcPyg6Oik/LyxcbiAgICAgICAgICAvKFtBLVpdXFx3KikvLCAvLyBhdCBsZWFzdCBvbmUgaWRlbnRpZmllclxuICAgICAgICAgIC8oKDo6KVtBLVpdXFx3KikqLyAvLyBwZXJoYXBzIG1vcmVcbiAgICAgICAgKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICctPidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnb2snXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogJyEnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogJyhcXFxcYlthLXpcXCddW2EtekEtWjAtOV9cXCddKjpbYS16XFwnXVthLXpBLVowLTlfXFwnXSopfChcXFxcYlthLXpcXCddW2EtekEtWjAtOV9cXCddKiknLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnW0EtWl1bYS16QS1aMC05X1xcJ10qJyxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9XG4gICAgXVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVybGFuZ1JlcGw7XG4iXSwic291cmNlUm9vdCI6IiJ9