(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[180],{

/***/ "./node_modules/highlight.js/lib/languages/vbnet.js":
/*!**********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/vbnet.js ***!
  \**********************************************************/
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
Language: Visual Basic .NET
Description: Visual Basic .NET (VB.NET) is a multi-paradigm, object-oriented programming language, implemented on the .NET Framework.
Authors: Poren Chiang <ren.chiang@gmail.com>, Jan Pilzer
Website: https://docs.microsoft.com/dotnet/visual-basic/getting-started
Category: common
*/

/** @type LanguageFn */
function vbnet(hljs) {
  /**
   * Character Literal
   * Either a single character ("a"C) or an escaped double quote (""""C).
   */
  const CHARACTER = {
    className: 'string',
    begin: /"(""|[^/n])"C\b/
  };

  const STRING = {
    className: 'string',
    begin: /"/,
    end: /"/,
    illegal: /\n/,
    contains: [
      {
        // double quote escape
        begin: /""/
      }
    ]
  };

  /** Date Literals consist of a date, a time, or both separated by whitespace, surrounded by # */
  const MM_DD_YYYY = /\d{1,2}\/\d{1,2}\/\d{4}/;
  const YYYY_MM_DD = /\d{4}-\d{1,2}-\d{1,2}/;
  const TIME_12H = /(\d|1[012])(:\d+){0,2} *(AM|PM)/;
  const TIME_24H = /\d{1,2}(:\d{1,2}){1,2}/;
  const DATE = {
    className: 'literal',
    variants: [
      {
        // #YYYY-MM-DD# (ISO-Date) or #M/D/YYYY# (US-Date)
        begin: concat(/# */, either(YYYY_MM_DD, MM_DD_YYYY), / *#/)
      },
      {
        // #H:mm[:ss]# (24h Time)
        begin: concat(/# */, TIME_24H, / *#/)
      },
      {
        // #h[:mm[:ss]] A# (12h Time)
        begin: concat(/# */, TIME_12H, / *#/)
      },
      {
        // date plus time
        begin: concat(
          /# */,
          either(YYYY_MM_DD, MM_DD_YYYY),
          / +/,
          either(TIME_12H, TIME_24H),
          / *#/
        )
      }
    ]
  };

  const NUMBER = {
    className: 'number',
    relevance: 0,
    variants: [
      {
        // Float
        begin: /\b\d[\d_]*((\.[\d_]+(E[+-]?[\d_]+)?)|(E[+-]?[\d_]+))[RFD@!#]?/
      },
      {
        // Integer (base 10)
        begin: /\b\d[\d_]*((U?[SIL])|[%&])?/
      },
      {
        // Integer (base 16)
        begin: /&H[\dA-F_]+((U?[SIL])|[%&])?/
      },
      {
        // Integer (base 8)
        begin: /&O[0-7_]+((U?[SIL])|[%&])?/
      },
      {
        // Integer (base 2)
        begin: /&B[01_]+((U?[SIL])|[%&])?/
      }
    ]
  };

  const LABEL = {
    className: 'label',
    begin: /^\w+:/
  };

  const DOC_COMMENT = hljs.COMMENT(/'''/, /$/, {
    contains: [
      {
        className: 'doctag',
        begin: /<\/?/,
        end: />/
      }
    ]
  });

  const COMMENT = hljs.COMMENT(null, /$/, {
    variants: [
      {
        begin: /'/
      },
      {
        // TODO: Use `beforeMatch:` for leading spaces
        begin: /([\t ]|^)REM(?=\s)/
      }
    ]
  });

  const DIRECTIVES = {
    className: 'meta',
    // TODO: Use `beforeMatch:` for indentation once available
    begin: /[\t ]*#(const|disable|else|elseif|enable|end|externalsource|if|region)\b/,
    end: /$/,
    keywords: {
      'meta-keyword':
        'const disable else elseif enable end externalsource if region then'
    },
    contains: [ COMMENT ]
  };

  return {
    name: 'Visual Basic .NET',
    aliases: [ 'vb' ],
    case_insensitive: true,
    classNameAliases: {
      label: 'symbol'
    },
    keywords: {
      keyword:
        'addhandler alias aggregate ansi as async assembly auto binary by byref byval ' + /* a-b */
        'call case catch class compare const continue custom declare default delegate dim distinct do ' + /* c-d */
        'each equals else elseif end enum erase error event exit explicit finally for friend from function ' + /* e-f */
        'get global goto group handles if implements imports in inherits interface into iterator ' + /* g-i */
        'join key let lib loop me mid module mustinherit mustoverride mybase myclass ' + /* j-m */
        'namespace narrowing new next notinheritable notoverridable ' + /* n */
        'of off on operator option optional order overloads overridable overrides ' + /* o */
        'paramarray partial preserve private property protected public ' + /* p */
        'raiseevent readonly redim removehandler resume return ' + /* r */
        'select set shadows shared skip static step stop structure strict sub synclock ' + /* s */
        'take text then throw to try unicode until using when where while widening with withevents writeonly yield' /* t-y */,
      built_in:
        // Operators https://docs.microsoft.com/dotnet/visual-basic/language-reference/operators
        'addressof and andalso await directcast gettype getxmlnamespace is isfalse isnot istrue like mod nameof new not or orelse trycast typeof xor ' +
        // Type Conversion Functions https://docs.microsoft.com/dotnet/visual-basic/language-reference/functions/type-conversion-functions
        'cbool cbyte cchar cdate cdbl cdec cint clng cobj csbyte cshort csng cstr cuint culng cushort',
      type:
        // Data types https://docs.microsoft.com/dotnet/visual-basic/language-reference/data-types
        'boolean byte char date decimal double integer long object sbyte short single string uinteger ulong ushort',
      literal: 'true false nothing'
    },
    illegal:
      '//|\\{|\\}|endif|gosub|variant|wend|^\\$ ' /* reserved deprecated keywords */,
    contains: [
      CHARACTER,
      STRING,
      DATE,
      NUMBER,
      LABEL,
      DOC_COMMENT,
      COMMENT,
      DIRECTIVES
    ]
  };
}

module.exports = vbnet;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3ZibmV0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWE7QUFDYjs7QUFFQTtBQUNBLFdBQVcsaUJBQWlCO0FBQzVCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyxzQkFBc0I7QUFDakMsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHFCQUFxQjtBQUNoQyxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUIsSUFBSSxLQUFLLElBQUksS0FBSyxFQUFFO0FBQzdDLHlCQUF5QixFQUFFLElBQUksSUFBSSxJQUFJLElBQUk7QUFDM0Msc0NBQXNDLElBQUk7QUFDMUMsdUJBQXVCLElBQUksS0FBSyxJQUFJLEVBQUUsSUFBSTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxhQUFhLElBQUk7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvMTgwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm5zIHtSZWdFeHB9XG4gKiAqL1xuXG4vKipcbiAqIEBwYXJhbSB7UmVnRXhwIHwgc3RyaW5nIH0gcmVcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIHNvdXJjZShyZSkge1xuICBpZiAoIXJlKSByZXR1cm4gbnVsbDtcbiAgaWYgKHR5cGVvZiByZSA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIHJlO1xuXG4gIHJldHVybiByZS5zb3VyY2U7XG59XG5cbi8qKlxuICogQHBhcmFtIHsuLi4oUmVnRXhwIHwgc3RyaW5nKSB9IGFyZ3NcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGNvbmNhdCguLi5hcmdzKSB7XG4gIGNvbnN0IGpvaW5lZCA9IGFyZ3MubWFwKCh4KSA9PiBzb3VyY2UoeCkpLmpvaW4oXCJcIik7XG4gIHJldHVybiBqb2luZWQ7XG59XG5cbi8qKlxuICogQW55IG9mIHRoZSBwYXNzZWQgZXhwcmVzc3Npb25zIG1heSBtYXRjaFxuICpcbiAqIENyZWF0ZXMgYSBodWdlIHRoaXMgfCB0aGlzIHwgdGhhdCB8IHRoYXQgbWF0Y2hcbiAqIEBwYXJhbSB7KFJlZ0V4cCB8IHN0cmluZylbXSB9IGFyZ3NcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGVpdGhlciguLi5hcmdzKSB7XG4gIGNvbnN0IGpvaW5lZCA9ICcoJyArIGFyZ3MubWFwKCh4KSA9PiBzb3VyY2UoeCkpLmpvaW4oXCJ8XCIpICsgXCIpXCI7XG4gIHJldHVybiBqb2luZWQ7XG59XG5cbi8qXG5MYW5ndWFnZTogVmlzdWFsIEJhc2ljIC5ORVRcbkRlc2NyaXB0aW9uOiBWaXN1YWwgQmFzaWMgLk5FVCAoVkIuTkVUKSBpcyBhIG11bHRpLXBhcmFkaWdtLCBvYmplY3Qtb3JpZW50ZWQgcHJvZ3JhbW1pbmcgbGFuZ3VhZ2UsIGltcGxlbWVudGVkIG9uIHRoZSAuTkVUIEZyYW1ld29yay5cbkF1dGhvcnM6IFBvcmVuIENoaWFuZyA8cmVuLmNoaWFuZ0BnbWFpbC5jb20+LCBKYW4gUGlsemVyXG5XZWJzaXRlOiBodHRwczovL2RvY3MubWljcm9zb2Z0LmNvbS9kb3RuZXQvdmlzdWFsLWJhc2ljL2dldHRpbmctc3RhcnRlZFxuQ2F0ZWdvcnk6IGNvbW1vblxuKi9cblxuLyoqIEB0eXBlIExhbmd1YWdlRm4gKi9cbmZ1bmN0aW9uIHZibmV0KGhsanMpIHtcbiAgLyoqXG4gICAqIENoYXJhY3RlciBMaXRlcmFsXG4gICAqIEVpdGhlciBhIHNpbmdsZSBjaGFyYWN0ZXIgKFwiYVwiQykgb3IgYW4gZXNjYXBlZCBkb3VibGUgcXVvdGUgKFwiXCJcIlwiQykuXG4gICAqL1xuICBjb25zdCBDSEFSQUNURVIgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICBiZWdpbjogL1wiKFwiXCJ8W14vbl0pXCJDXFxiL1xuICB9O1xuXG4gIGNvbnN0IFNUUklORyA9IHtcbiAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgIGJlZ2luOiAvXCIvLFxuICAgIGVuZDogL1wiLyxcbiAgICBpbGxlZ2FsOiAvXFxuLyxcbiAgICBjb250YWluczogW1xuICAgICAge1xuICAgICAgICAvLyBkb3VibGUgcXVvdGUgZXNjYXBlXG4gICAgICAgIGJlZ2luOiAvXCJcIi9cbiAgICAgIH1cbiAgICBdXG4gIH07XG5cbiAgLyoqIERhdGUgTGl0ZXJhbHMgY29uc2lzdCBvZiBhIGRhdGUsIGEgdGltZSwgb3IgYm90aCBzZXBhcmF0ZWQgYnkgd2hpdGVzcGFjZSwgc3Vycm91bmRlZCBieSAjICovXG4gIGNvbnN0IE1NX0REX1lZWVkgPSAvXFxkezEsMn1cXC9cXGR7MSwyfVxcL1xcZHs0fS87XG4gIGNvbnN0IFlZWVlfTU1fREQgPSAvXFxkezR9LVxcZHsxLDJ9LVxcZHsxLDJ9LztcbiAgY29uc3QgVElNRV8xMkggPSAvKFxcZHwxWzAxMl0pKDpcXGQrKXswLDJ9ICooQU18UE0pLztcbiAgY29uc3QgVElNRV8yNEggPSAvXFxkezEsMn0oOlxcZHsxLDJ9KXsxLDJ9LztcbiAgY29uc3QgREFURSA9IHtcbiAgICBjbGFzc05hbWU6ICdsaXRlcmFsJyxcbiAgICB2YXJpYW50czogW1xuICAgICAge1xuICAgICAgICAvLyAjWVlZWS1NTS1ERCMgKElTTy1EYXRlKSBvciAjTS9EL1lZWVkjIChVUy1EYXRlKVxuICAgICAgICBiZWdpbjogY29uY2F0KC8jICovLCBlaXRoZXIoWVlZWV9NTV9ERCwgTU1fRERfWVlZWSksIC8gKiMvKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgLy8gI0g6bW1bOnNzXSMgKDI0aCBUaW1lKVxuICAgICAgICBiZWdpbjogY29uY2F0KC8jICovLCBUSU1FXzI0SCwgLyAqIy8pXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAvLyAjaFs6bW1bOnNzXV0gQSMgKDEyaCBUaW1lKVxuICAgICAgICBiZWdpbjogY29uY2F0KC8jICovLCBUSU1FXzEySCwgLyAqIy8pXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAvLyBkYXRlIHBsdXMgdGltZVxuICAgICAgICBiZWdpbjogY29uY2F0KFxuICAgICAgICAgIC8jICovLFxuICAgICAgICAgIGVpdGhlcihZWVlZX01NX0RELCBNTV9ERF9ZWVlZKSxcbiAgICAgICAgICAvICsvLFxuICAgICAgICAgIGVpdGhlcihUSU1FXzEySCwgVElNRV8yNEgpLFxuICAgICAgICAgIC8gKiMvXG4gICAgICAgIClcbiAgICAgIH1cbiAgICBdXG4gIH07XG5cbiAgY29uc3QgTlVNQkVSID0ge1xuICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgcmVsZXZhbmNlOiAwLFxuICAgIHZhcmlhbnRzOiBbXG4gICAgICB7XG4gICAgICAgIC8vIEZsb2F0XG4gICAgICAgIGJlZ2luOiAvXFxiXFxkW1xcZF9dKigoXFwuW1xcZF9dKyhFWystXT9bXFxkX10rKT8pfChFWystXT9bXFxkX10rKSlbUkZEQCEjXT8vXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAvLyBJbnRlZ2VyIChiYXNlIDEwKVxuICAgICAgICBiZWdpbjogL1xcYlxcZFtcXGRfXSooKFU/W1NJTF0pfFslJl0pPy9cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIC8vIEludGVnZXIgKGJhc2UgMTYpXG4gICAgICAgIGJlZ2luOiAvJkhbXFxkQS1GX10rKChVP1tTSUxdKXxbJSZdKT8vXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAvLyBJbnRlZ2VyIChiYXNlIDgpXG4gICAgICAgIGJlZ2luOiAvJk9bMC03X10rKChVP1tTSUxdKXxbJSZdKT8vXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAvLyBJbnRlZ2VyIChiYXNlIDIpXG4gICAgICAgIGJlZ2luOiAvJkJbMDFfXSsoKFU/W1NJTF0pfFslJl0pPy9cbiAgICAgIH1cbiAgICBdXG4gIH07XG5cbiAgY29uc3QgTEFCRUwgPSB7XG4gICAgY2xhc3NOYW1lOiAnbGFiZWwnLFxuICAgIGJlZ2luOiAvXlxcdys6L1xuICB9O1xuXG4gIGNvbnN0IERPQ19DT01NRU5UID0gaGxqcy5DT01NRU5UKC8nJycvLCAvJC8sIHtcbiAgICBjb250YWluczogW1xuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdkb2N0YWcnLFxuICAgICAgICBiZWdpbjogLzxcXC8/LyxcbiAgICAgICAgZW5kOiAvPi9cbiAgICAgIH1cbiAgICBdXG4gIH0pO1xuXG4gIGNvbnN0IENPTU1FTlQgPSBobGpzLkNPTU1FTlQobnVsbCwgLyQvLCB7XG4gICAgdmFyaWFudHM6IFtcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IC8nL1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgLy8gVE9ETzogVXNlIGBiZWZvcmVNYXRjaDpgIGZvciBsZWFkaW5nIHNwYWNlc1xuICAgICAgICBiZWdpbjogLyhbXFx0IF18XilSRU0oPz1cXHMpL1xuICAgICAgfVxuICAgIF1cbiAgfSk7XG5cbiAgY29uc3QgRElSRUNUSVZFUyA9IHtcbiAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICAvLyBUT0RPOiBVc2UgYGJlZm9yZU1hdGNoOmAgZm9yIGluZGVudGF0aW9uIG9uY2UgYXZhaWxhYmxlXG4gICAgYmVnaW46IC9bXFx0IF0qIyhjb25zdHxkaXNhYmxlfGVsc2V8ZWxzZWlmfGVuYWJsZXxlbmR8ZXh0ZXJuYWxzb3VyY2V8aWZ8cmVnaW9uKVxcYi8sXG4gICAgZW5kOiAvJC8sXG4gICAga2V5d29yZHM6IHtcbiAgICAgICdtZXRhLWtleXdvcmQnOlxuICAgICAgICAnY29uc3QgZGlzYWJsZSBlbHNlIGVsc2VpZiBlbmFibGUgZW5kIGV4dGVybmFsc291cmNlIGlmIHJlZ2lvbiB0aGVuJ1xuICAgIH0sXG4gICAgY29udGFpbnM6IFsgQ09NTUVOVCBdXG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnVmlzdWFsIEJhc2ljIC5ORVQnLFxuICAgIGFsaWFzZXM6IFsgJ3ZiJyBdLFxuICAgIGNhc2VfaW5zZW5zaXRpdmU6IHRydWUsXG4gICAgY2xhc3NOYW1lQWxpYXNlczoge1xuICAgICAgbGFiZWw6ICdzeW1ib2wnXG4gICAgfSxcbiAgICBrZXl3b3Jkczoge1xuICAgICAga2V5d29yZDpcbiAgICAgICAgJ2FkZGhhbmRsZXIgYWxpYXMgYWdncmVnYXRlIGFuc2kgYXMgYXN5bmMgYXNzZW1ibHkgYXV0byBiaW5hcnkgYnkgYnlyZWYgYnl2YWwgJyArIC8qIGEtYiAqL1xuICAgICAgICAnY2FsbCBjYXNlIGNhdGNoIGNsYXNzIGNvbXBhcmUgY29uc3QgY29udGludWUgY3VzdG9tIGRlY2xhcmUgZGVmYXVsdCBkZWxlZ2F0ZSBkaW0gZGlzdGluY3QgZG8gJyArIC8qIGMtZCAqL1xuICAgICAgICAnZWFjaCBlcXVhbHMgZWxzZSBlbHNlaWYgZW5kIGVudW0gZXJhc2UgZXJyb3IgZXZlbnQgZXhpdCBleHBsaWNpdCBmaW5hbGx5IGZvciBmcmllbmQgZnJvbSBmdW5jdGlvbiAnICsgLyogZS1mICovXG4gICAgICAgICdnZXQgZ2xvYmFsIGdvdG8gZ3JvdXAgaGFuZGxlcyBpZiBpbXBsZW1lbnRzIGltcG9ydHMgaW4gaW5oZXJpdHMgaW50ZXJmYWNlIGludG8gaXRlcmF0b3IgJyArIC8qIGctaSAqL1xuICAgICAgICAnam9pbiBrZXkgbGV0IGxpYiBsb29wIG1lIG1pZCBtb2R1bGUgbXVzdGluaGVyaXQgbXVzdG92ZXJyaWRlIG15YmFzZSBteWNsYXNzICcgKyAvKiBqLW0gKi9cbiAgICAgICAgJ25hbWVzcGFjZSBuYXJyb3dpbmcgbmV3IG5leHQgbm90aW5oZXJpdGFibGUgbm90b3ZlcnJpZGFibGUgJyArIC8qIG4gKi9cbiAgICAgICAgJ29mIG9mZiBvbiBvcGVyYXRvciBvcHRpb24gb3B0aW9uYWwgb3JkZXIgb3ZlcmxvYWRzIG92ZXJyaWRhYmxlIG92ZXJyaWRlcyAnICsgLyogbyAqL1xuICAgICAgICAncGFyYW1hcnJheSBwYXJ0aWFsIHByZXNlcnZlIHByaXZhdGUgcHJvcGVydHkgcHJvdGVjdGVkIHB1YmxpYyAnICsgLyogcCAqL1xuICAgICAgICAncmFpc2VldmVudCByZWFkb25seSByZWRpbSByZW1vdmVoYW5kbGVyIHJlc3VtZSByZXR1cm4gJyArIC8qIHIgKi9cbiAgICAgICAgJ3NlbGVjdCBzZXQgc2hhZG93cyBzaGFyZWQgc2tpcCBzdGF0aWMgc3RlcCBzdG9wIHN0cnVjdHVyZSBzdHJpY3Qgc3ViIHN5bmNsb2NrICcgKyAvKiBzICovXG4gICAgICAgICd0YWtlIHRleHQgdGhlbiB0aHJvdyB0byB0cnkgdW5pY29kZSB1bnRpbCB1c2luZyB3aGVuIHdoZXJlIHdoaWxlIHdpZGVuaW5nIHdpdGggd2l0aGV2ZW50cyB3cml0ZW9ubHkgeWllbGQnIC8qIHQteSAqLyxcbiAgICAgIGJ1aWx0X2luOlxuICAgICAgICAvLyBPcGVyYXRvcnMgaHR0cHM6Ly9kb2NzLm1pY3Jvc29mdC5jb20vZG90bmV0L3Zpc3VhbC1iYXNpYy9sYW5ndWFnZS1yZWZlcmVuY2Uvb3BlcmF0b3JzXG4gICAgICAgICdhZGRyZXNzb2YgYW5kIGFuZGFsc28gYXdhaXQgZGlyZWN0Y2FzdCBnZXR0eXBlIGdldHhtbG5hbWVzcGFjZSBpcyBpc2ZhbHNlIGlzbm90IGlzdHJ1ZSBsaWtlIG1vZCBuYW1lb2YgbmV3IG5vdCBvciBvcmVsc2UgdHJ5Y2FzdCB0eXBlb2YgeG9yICcgK1xuICAgICAgICAvLyBUeXBlIENvbnZlcnNpb24gRnVuY3Rpb25zIGh0dHBzOi8vZG9jcy5taWNyb3NvZnQuY29tL2RvdG5ldC92aXN1YWwtYmFzaWMvbGFuZ3VhZ2UtcmVmZXJlbmNlL2Z1bmN0aW9ucy90eXBlLWNvbnZlcnNpb24tZnVuY3Rpb25zXG4gICAgICAgICdjYm9vbCBjYnl0ZSBjY2hhciBjZGF0ZSBjZGJsIGNkZWMgY2ludCBjbG5nIGNvYmogY3NieXRlIGNzaG9ydCBjc25nIGNzdHIgY3VpbnQgY3VsbmcgY3VzaG9ydCcsXG4gICAgICB0eXBlOlxuICAgICAgICAvLyBEYXRhIHR5cGVzIGh0dHBzOi8vZG9jcy5taWNyb3NvZnQuY29tL2RvdG5ldC92aXN1YWwtYmFzaWMvbGFuZ3VhZ2UtcmVmZXJlbmNlL2RhdGEtdHlwZXNcbiAgICAgICAgJ2Jvb2xlYW4gYnl0ZSBjaGFyIGRhdGUgZGVjaW1hbCBkb3VibGUgaW50ZWdlciBsb25nIG9iamVjdCBzYnl0ZSBzaG9ydCBzaW5nbGUgc3RyaW5nIHVpbnRlZ2VyIHVsb25nIHVzaG9ydCcsXG4gICAgICBsaXRlcmFsOiAndHJ1ZSBmYWxzZSBub3RoaW5nJ1xuICAgIH0sXG4gICAgaWxsZWdhbDpcbiAgICAgICcvL3xcXFxce3xcXFxcfXxlbmRpZnxnb3N1Ynx2YXJpYW50fHdlbmR8XlxcXFwkICcgLyogcmVzZXJ2ZWQgZGVwcmVjYXRlZCBrZXl3b3JkcyAqLyxcbiAgICBjb250YWluczogW1xuICAgICAgQ0hBUkFDVEVSLFxuICAgICAgU1RSSU5HLFxuICAgICAgREFURSxcbiAgICAgIE5VTUJFUixcbiAgICAgIExBQkVMLFxuICAgICAgRE9DX0NPTU1FTlQsXG4gICAgICBDT01NRU5ULFxuICAgICAgRElSRUNUSVZFU1xuICAgIF1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB2Ym5ldDtcbiJdLCJzb3VyY2VSb290IjoiIn0=