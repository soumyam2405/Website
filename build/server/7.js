exports.ids = [7];
exports.modules = {

/***/ "./node_modules/highlight.js/lib/languages/applescript.js":
/*!****************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/applescript.js ***!
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

/**
 * Any of the passed expresssions may match
 *
 * Creates a huge this | this | that | that match
 * @param {(RegExp | string)[] } args
 * @returns {string}
 */
function either(...args) {
  const joined = '(' + args.map((x) => source(x)).join("|") + ")";
  return joined;
}

/*
Language: AppleScript
Authors: Nathan Grigg <nathan@nathanamy.org>, Dr. Drang <drdrang@gmail.com>
Category: scripting
Website: https://developer.apple.com/library/archive/documentation/AppleScript/Conceptual/AppleScriptLangGuide/introduction/ASLR_intro.html
Audit: 2020
*/

/** @type LanguageFn */
function applescript(hljs) {
  const STRING = hljs.inherit(
    hljs.QUOTE_STRING_MODE, {
      illegal: null
    });
  const PARAMS = {
    className: 'params',
    begin: /\(/,
    end: /\)/,
    contains: [
      'self',
      hljs.C_NUMBER_MODE,
      STRING
    ]
  };
  const COMMENT_MODE_1 = hljs.COMMENT(/--/, /$/);
  const COMMENT_MODE_2 = hljs.COMMENT(
    /\(\*/,
    /\*\)/,
    {
      contains: [
        'self', // allow nesting
        COMMENT_MODE_1
      ]
    }
  );
  const COMMENTS = [
    COMMENT_MODE_1,
    COMMENT_MODE_2,
    hljs.HASH_COMMENT_MODE
  ];

  const KEYWORD_PATTERNS = [
    /apart from/,
    /aside from/,
    /instead of/,
    /out of/,
    /greater than/,
    /isn't|(doesn't|does not) (equal|come before|come after|contain)/,
    /(greater|less) than( or equal)?/,
    /(starts?|ends|begins?) with/,
    /contained by/,
    /comes (before|after)/,
    /a (ref|reference)/,
    /POSIX (file|path)/,
    /(date|time) string/,
    /quoted form/
  ];

  const BUILT_IN_PATTERNS = [
    /clipboard info/,
    /the clipboard/,
    /info for/,
    /list (disks|folder)/,
    /mount volume/,
    /path to/,
    /(close|open for) access/,
    /(get|set) eof/,
    /current date/,
    /do shell script/,
    /get volume settings/,
    /random number/,
    /set volume/,
    /system attribute/,
    /system info/,
    /time to GMT/,
    /(load|run|store) script/,
    /scripting components/,
    /ASCII (character|number)/,
    /localized string/,
    /choose (application|color|file|file name|folder|from list|remote application|URL)/,
    /display (alert|dialog)/
  ];

  return {
    name: 'AppleScript',
    aliases: [ 'osascript' ],
    keywords: {
      keyword:
        'about above after against and around as at back before beginning ' +
        'behind below beneath beside between but by considering ' +
        'contain contains continue copy div does eighth else end equal ' +
        'equals error every exit fifth first for fourth from front ' +
        'get given global if ignoring in into is it its last local me ' +
        'middle mod my ninth not of on onto or over prop property put ref ' +
        'reference repeat returning script second set seventh since ' +
        'sixth some tell tenth that the|0 then third through thru ' +
        'timeout times to transaction try until where while whose with ' +
        'without',
      literal:
        'AppleScript false linefeed return pi quote result space tab true',
      built_in:
        'alias application boolean class constant date file integer list ' +
        'number real record string text ' +
        'activate beep count delay launch log offset read round ' +
        'run say summarize write ' +
        'character characters contents day frontmost id item length ' +
        'month name paragraph paragraphs rest reverse running time version ' +
        'weekday word words year'
    },
    contains: [
      STRING,
      hljs.C_NUMBER_MODE,
      {
        className: 'built_in',
        begin: concat(
          /\b/,
          either(...BUILT_IN_PATTERNS),
          /\b/
        )
      },
      {
        className: 'built_in',
        begin: /^\s*return\b/
      },
      {
        className: 'literal',
        begin:
          /\b(text item delimiters|current application|missing value)\b/
      },
      {
        className: 'keyword',
        begin: concat(
          /\b/,
          either(...KEYWORD_PATTERNS),
          /\b/
        )
      },
      {
        beginKeywords: 'on',
        illegal: /[${=;\n]/,
        contains: [
          hljs.UNDERSCORE_TITLE_MODE,
          PARAMS
        ]
      },
      ...COMMENTS
    ],
    illegal: /\/\/|->|=>|\[\[/
  };
}

module.exports = applescript;


/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvYXBwbGVzY3JpcHQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWE7QUFDYjs7QUFFQTtBQUNBLFdBQVcsaUJBQWlCO0FBQzVCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyxzQkFBc0I7QUFDakMsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHFCQUFxQjtBQUNoQyxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EscUJBQXFCLEVBQUU7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiI3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm5zIHtSZWdFeHB9XG4gKiAqL1xuXG4vKipcbiAqIEBwYXJhbSB7UmVnRXhwIHwgc3RyaW5nIH0gcmVcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIHNvdXJjZShyZSkge1xuICBpZiAoIXJlKSByZXR1cm4gbnVsbDtcbiAgaWYgKHR5cGVvZiByZSA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIHJlO1xuXG4gIHJldHVybiByZS5zb3VyY2U7XG59XG5cbi8qKlxuICogQHBhcmFtIHsuLi4oUmVnRXhwIHwgc3RyaW5nKSB9IGFyZ3NcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGNvbmNhdCguLi5hcmdzKSB7XG4gIGNvbnN0IGpvaW5lZCA9IGFyZ3MubWFwKCh4KSA9PiBzb3VyY2UoeCkpLmpvaW4oXCJcIik7XG4gIHJldHVybiBqb2luZWQ7XG59XG5cbi8qKlxuICogQW55IG9mIHRoZSBwYXNzZWQgZXhwcmVzc3Npb25zIG1heSBtYXRjaFxuICpcbiAqIENyZWF0ZXMgYSBodWdlIHRoaXMgfCB0aGlzIHwgdGhhdCB8IHRoYXQgbWF0Y2hcbiAqIEBwYXJhbSB7KFJlZ0V4cCB8IHN0cmluZylbXSB9IGFyZ3NcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGVpdGhlciguLi5hcmdzKSB7XG4gIGNvbnN0IGpvaW5lZCA9ICcoJyArIGFyZ3MubWFwKCh4KSA9PiBzb3VyY2UoeCkpLmpvaW4oXCJ8XCIpICsgXCIpXCI7XG4gIHJldHVybiBqb2luZWQ7XG59XG5cbi8qXG5MYW5ndWFnZTogQXBwbGVTY3JpcHRcbkF1dGhvcnM6IE5hdGhhbiBHcmlnZyA8bmF0aGFuQG5hdGhhbmFteS5vcmc+LCBEci4gRHJhbmcgPGRyZHJhbmdAZ21haWwuY29tPlxuQ2F0ZWdvcnk6IHNjcmlwdGluZ1xuV2Vic2l0ZTogaHR0cHM6Ly9kZXZlbG9wZXIuYXBwbGUuY29tL2xpYnJhcnkvYXJjaGl2ZS9kb2N1bWVudGF0aW9uL0FwcGxlU2NyaXB0L0NvbmNlcHR1YWwvQXBwbGVTY3JpcHRMYW5nR3VpZGUvaW50cm9kdWN0aW9uL0FTTFJfaW50cm8uaHRtbFxuQXVkaXQ6IDIwMjBcbiovXG5cbi8qKiBAdHlwZSBMYW5ndWFnZUZuICovXG5mdW5jdGlvbiBhcHBsZXNjcmlwdChobGpzKSB7XG4gIGNvbnN0IFNUUklORyA9IGhsanMuaW5oZXJpdChcbiAgICBobGpzLlFVT1RFX1NUUklOR19NT0RFLCB7XG4gICAgICBpbGxlZ2FsOiBudWxsXG4gICAgfSk7XG4gIGNvbnN0IFBBUkFNUyA9IHtcbiAgICBjbGFzc05hbWU6ICdwYXJhbXMnLFxuICAgIGJlZ2luOiAvXFwoLyxcbiAgICBlbmQ6IC9cXCkvLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICAnc2VsZicsXG4gICAgICBobGpzLkNfTlVNQkVSX01PREUsXG4gICAgICBTVFJJTkdcbiAgICBdXG4gIH07XG4gIGNvbnN0IENPTU1FTlRfTU9ERV8xID0gaGxqcy5DT01NRU5UKC8tLS8sIC8kLyk7XG4gIGNvbnN0IENPTU1FTlRfTU9ERV8yID0gaGxqcy5DT01NRU5UKFxuICAgIC9cXChcXCovLFxuICAgIC9cXCpcXCkvLFxuICAgIHtcbiAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICdzZWxmJywgLy8gYWxsb3cgbmVzdGluZ1xuICAgICAgICBDT01NRU5UX01PREVfMVxuICAgICAgXVxuICAgIH1cbiAgKTtcbiAgY29uc3QgQ09NTUVOVFMgPSBbXG4gICAgQ09NTUVOVF9NT0RFXzEsXG4gICAgQ09NTUVOVF9NT0RFXzIsXG4gICAgaGxqcy5IQVNIX0NPTU1FTlRfTU9ERVxuICBdO1xuXG4gIGNvbnN0IEtFWVdPUkRfUEFUVEVSTlMgPSBbXG4gICAgL2FwYXJ0IGZyb20vLFxuICAgIC9hc2lkZSBmcm9tLyxcbiAgICAvaW5zdGVhZCBvZi8sXG4gICAgL291dCBvZi8sXG4gICAgL2dyZWF0ZXIgdGhhbi8sXG4gICAgL2lzbid0fChkb2Vzbid0fGRvZXMgbm90KSAoZXF1YWx8Y29tZSBiZWZvcmV8Y29tZSBhZnRlcnxjb250YWluKS8sXG4gICAgLyhncmVhdGVyfGxlc3MpIHRoYW4oIG9yIGVxdWFsKT8vLFxuICAgIC8oc3RhcnRzP3xlbmRzfGJlZ2lucz8pIHdpdGgvLFxuICAgIC9jb250YWluZWQgYnkvLFxuICAgIC9jb21lcyAoYmVmb3JlfGFmdGVyKS8sXG4gICAgL2EgKHJlZnxyZWZlcmVuY2UpLyxcbiAgICAvUE9TSVggKGZpbGV8cGF0aCkvLFxuICAgIC8oZGF0ZXx0aW1lKSBzdHJpbmcvLFxuICAgIC9xdW90ZWQgZm9ybS9cbiAgXTtcblxuICBjb25zdCBCVUlMVF9JTl9QQVRURVJOUyA9IFtcbiAgICAvY2xpcGJvYXJkIGluZm8vLFxuICAgIC90aGUgY2xpcGJvYXJkLyxcbiAgICAvaW5mbyBmb3IvLFxuICAgIC9saXN0IChkaXNrc3xmb2xkZXIpLyxcbiAgICAvbW91bnQgdm9sdW1lLyxcbiAgICAvcGF0aCB0by8sXG4gICAgLyhjbG9zZXxvcGVuIGZvcikgYWNjZXNzLyxcbiAgICAvKGdldHxzZXQpIGVvZi8sXG4gICAgL2N1cnJlbnQgZGF0ZS8sXG4gICAgL2RvIHNoZWxsIHNjcmlwdC8sXG4gICAgL2dldCB2b2x1bWUgc2V0dGluZ3MvLFxuICAgIC9yYW5kb20gbnVtYmVyLyxcbiAgICAvc2V0IHZvbHVtZS8sXG4gICAgL3N5c3RlbSBhdHRyaWJ1dGUvLFxuICAgIC9zeXN0ZW0gaW5mby8sXG4gICAgL3RpbWUgdG8gR01ULyxcbiAgICAvKGxvYWR8cnVufHN0b3JlKSBzY3JpcHQvLFxuICAgIC9zY3JpcHRpbmcgY29tcG9uZW50cy8sXG4gICAgL0FTQ0lJIChjaGFyYWN0ZXJ8bnVtYmVyKS8sXG4gICAgL2xvY2FsaXplZCBzdHJpbmcvLFxuICAgIC9jaG9vc2UgKGFwcGxpY2F0aW9ufGNvbG9yfGZpbGV8ZmlsZSBuYW1lfGZvbGRlcnxmcm9tIGxpc3R8cmVtb3RlIGFwcGxpY2F0aW9ufFVSTCkvLFxuICAgIC9kaXNwbGF5IChhbGVydHxkaWFsb2cpL1xuICBdO1xuXG4gIHJldHVybiB7XG4gICAgbmFtZTogJ0FwcGxlU2NyaXB0JyxcbiAgICBhbGlhc2VzOiBbICdvc2FzY3JpcHQnIF0sXG4gICAga2V5d29yZHM6IHtcbiAgICAgIGtleXdvcmQ6XG4gICAgICAgICdhYm91dCBhYm92ZSBhZnRlciBhZ2FpbnN0IGFuZCBhcm91bmQgYXMgYXQgYmFjayBiZWZvcmUgYmVnaW5uaW5nICcgK1xuICAgICAgICAnYmVoaW5kIGJlbG93IGJlbmVhdGggYmVzaWRlIGJldHdlZW4gYnV0IGJ5IGNvbnNpZGVyaW5nICcgK1xuICAgICAgICAnY29udGFpbiBjb250YWlucyBjb250aW51ZSBjb3B5IGRpdiBkb2VzIGVpZ2h0aCBlbHNlIGVuZCBlcXVhbCAnICtcbiAgICAgICAgJ2VxdWFscyBlcnJvciBldmVyeSBleGl0IGZpZnRoIGZpcnN0IGZvciBmb3VydGggZnJvbSBmcm9udCAnICtcbiAgICAgICAgJ2dldCBnaXZlbiBnbG9iYWwgaWYgaWdub3JpbmcgaW4gaW50byBpcyBpdCBpdHMgbGFzdCBsb2NhbCBtZSAnICtcbiAgICAgICAgJ21pZGRsZSBtb2QgbXkgbmludGggbm90IG9mIG9uIG9udG8gb3Igb3ZlciBwcm9wIHByb3BlcnR5IHB1dCByZWYgJyArXG4gICAgICAgICdyZWZlcmVuY2UgcmVwZWF0IHJldHVybmluZyBzY3JpcHQgc2Vjb25kIHNldCBzZXZlbnRoIHNpbmNlICcgK1xuICAgICAgICAnc2l4dGggc29tZSB0ZWxsIHRlbnRoIHRoYXQgdGhlfDAgdGhlbiB0aGlyZCB0aHJvdWdoIHRocnUgJyArXG4gICAgICAgICd0aW1lb3V0IHRpbWVzIHRvIHRyYW5zYWN0aW9uIHRyeSB1bnRpbCB3aGVyZSB3aGlsZSB3aG9zZSB3aXRoICcgK1xuICAgICAgICAnd2l0aG91dCcsXG4gICAgICBsaXRlcmFsOlxuICAgICAgICAnQXBwbGVTY3JpcHQgZmFsc2UgbGluZWZlZWQgcmV0dXJuIHBpIHF1b3RlIHJlc3VsdCBzcGFjZSB0YWIgdHJ1ZScsXG4gICAgICBidWlsdF9pbjpcbiAgICAgICAgJ2FsaWFzIGFwcGxpY2F0aW9uIGJvb2xlYW4gY2xhc3MgY29uc3RhbnQgZGF0ZSBmaWxlIGludGVnZXIgbGlzdCAnICtcbiAgICAgICAgJ251bWJlciByZWFsIHJlY29yZCBzdHJpbmcgdGV4dCAnICtcbiAgICAgICAgJ2FjdGl2YXRlIGJlZXAgY291bnQgZGVsYXkgbGF1bmNoIGxvZyBvZmZzZXQgcmVhZCByb3VuZCAnICtcbiAgICAgICAgJ3J1biBzYXkgc3VtbWFyaXplIHdyaXRlICcgK1xuICAgICAgICAnY2hhcmFjdGVyIGNoYXJhY3RlcnMgY29udGVudHMgZGF5IGZyb250bW9zdCBpZCBpdGVtIGxlbmd0aCAnICtcbiAgICAgICAgJ21vbnRoIG5hbWUgcGFyYWdyYXBoIHBhcmFncmFwaHMgcmVzdCByZXZlcnNlIHJ1bm5pbmcgdGltZSB2ZXJzaW9uICcgK1xuICAgICAgICAnd2Vla2RheSB3b3JkIHdvcmRzIHllYXInXG4gICAgfSxcbiAgICBjb250YWluczogW1xuICAgICAgU1RSSU5HLFxuICAgICAgaGxqcy5DX05VTUJFUl9NT0RFLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdidWlsdF9pbicsXG4gICAgICAgIGJlZ2luOiBjb25jYXQoXG4gICAgICAgICAgL1xcYi8sXG4gICAgICAgICAgZWl0aGVyKC4uLkJVSUxUX0lOX1BBVFRFUk5TKSxcbiAgICAgICAgICAvXFxiL1xuICAgICAgICApXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdidWlsdF9pbicsXG4gICAgICAgIGJlZ2luOiAvXlxccypyZXR1cm5cXGIvXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdsaXRlcmFsJyxcbiAgICAgICAgYmVnaW46XG4gICAgICAgICAgL1xcYih0ZXh0IGl0ZW0gZGVsaW1pdGVyc3xjdXJyZW50IGFwcGxpY2F0aW9ufG1pc3NpbmcgdmFsdWUpXFxiL1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAna2V5d29yZCcsXG4gICAgICAgIGJlZ2luOiBjb25jYXQoXG4gICAgICAgICAgL1xcYi8sXG4gICAgICAgICAgZWl0aGVyKC4uLktFWVdPUkRfUEFUVEVSTlMpLFxuICAgICAgICAgIC9cXGIvXG4gICAgICAgIClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luS2V5d29yZHM6ICdvbicsXG4gICAgICAgIGlsbGVnYWw6IC9bJHs9O1xcbl0vLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIGhsanMuVU5ERVJTQ09SRV9USVRMRV9NT0RFLFxuICAgICAgICAgIFBBUkFNU1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgLi4uQ09NTUVOVFNcbiAgICBdLFxuICAgIGlsbGVnYWw6IC9cXC9cXC98LT58PT58XFxbXFxbL1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFwcGxlc2NyaXB0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==