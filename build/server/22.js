exports.ids = [22];
exports.modules = {

/***/ "./node_modules/highlight.js/lib/languages/c-like.js":
/*!***********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/c-like.js ***!
  \***********************************************************/
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
 * @param {RegExp | string } re
 * @returns {string}
 */
function optional(re) {
  return concat('(', re, ')?');
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
Language: C++
Category: common, system
Website: https://isocpp.org
*/

/** @type LanguageFn */
function cPlusPlus(hljs) {
  // added for historic reasons because `hljs.C_LINE_COMMENT_MODE` does
  // not include such support nor can we be sure all the grammars depending
  // on it would desire this behavior
  const C_LINE_COMMENT_MODE = hljs.COMMENT('//', '$', {
    contains: [
      {
        begin: /\\\n/
      }
    ]
  });
  const DECLTYPE_AUTO_RE = 'decltype\\(auto\\)';
  const NAMESPACE_RE = '[a-zA-Z_]\\w*::';
  const TEMPLATE_ARGUMENT_RE = '<[^<>]+>';
  const FUNCTION_TYPE_RE = '(' +
    DECLTYPE_AUTO_RE + '|' +
    optional(NAMESPACE_RE) +
    '[a-zA-Z_]\\w*' + optional(TEMPLATE_ARGUMENT_RE) +
  ')';
  const CPP_PRIMITIVE_TYPES = {
    className: 'keyword',
    begin: '\\b[a-z\\d_]*_t\\b'
  };

  // https://en.cppreference.com/w/cpp/language/escape
  // \\ \x \xFF \u2837 \u00323747 \374
  const CHARACTER_ESCAPES = '\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)';
  const STRINGS = {
    className: 'string',
    variants: [
      {
        begin: '(u8?|U|L)?"',
        end: '"',
        illegal: '\\n',
        contains: [ hljs.BACKSLASH_ESCAPE ]
      },
      {
        begin: '(u8?|U|L)?\'(' + CHARACTER_ESCAPES + "|.)",
        end: '\'',
        illegal: '.'
      },
      hljs.END_SAME_AS_BEGIN({
        begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,
        end: /\)([^()\\ ]{0,16})"/
      })
    ]
  };

  const NUMBERS = {
    className: 'number',
    variants: [
      {
        begin: '\\b(0b[01\']+)'
      },
      {
        begin: '(-?)\\b([\\d\']+(\\.[\\d\']*)?|\\.[\\d\']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)'
      },
      {
        begin: '(-?)(\\b0[xX][a-fA-F0-9\']+|(\\b[\\d\']+(\\.[\\d\']*)?|\\.[\\d\']+)([eE][-+]?[\\d\']+)?)'
      }
    ],
    relevance: 0
  };

  const PREPROCESSOR = {
    className: 'meta',
    begin: /#\s*[a-z]+\b/,
    end: /$/,
    keywords: {
      'meta-keyword':
        'if else elif endif define undef warning error line ' +
        'pragma _Pragma ifdef ifndef include'
    },
    contains: [
      {
        begin: /\\\n/,
        relevance: 0
      },
      hljs.inherit(STRINGS, {
        className: 'meta-string'
      }),
      {
        className: 'meta-string',
        begin: /<.*?>/,
        end: /$/,
        illegal: '\\n'
      },
      C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE
    ]
  };

  const TITLE_MODE = {
    className: 'title',
    begin: optional(NAMESPACE_RE) + hljs.IDENT_RE,
    relevance: 0
  };

  const FUNCTION_TITLE = optional(NAMESPACE_RE) + hljs.IDENT_RE + '\\s*\\(';

  const CPP_KEYWORDS = {
    keyword: 'int float while private char char8_t char16_t char32_t catch import module export virtual operator sizeof ' +
      'dynamic_cast|10 typedef const_cast|10 const for static_cast|10 union namespace ' +
      'unsigned long volatile static protected bool template mutable if public friend ' +
      'do goto auto void enum else break extern using asm case typeid wchar_t ' +
      'short reinterpret_cast|10 default double register explicit signed typename try this ' +
      'switch continue inline delete alignas alignof constexpr consteval constinit decltype ' +
      'concept co_await co_return co_yield requires ' +
      'noexcept static_assert thread_local restrict final override ' +
      'atomic_bool atomic_char atomic_schar ' +
      'atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong ' +
      'atomic_ullong new throw return ' +
      'and and_eq bitand bitor compl not not_eq or or_eq xor xor_eq',
    built_in: 'std string wstring cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream ' +
      'auto_ptr deque list queue stack vector map set pair bitset multiset multimap unordered_set ' +
      'unordered_map unordered_multiset unordered_multimap priority_queue make_pair array shared_ptr abort terminate abs acos ' +
      'asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp ' +
      'fscanf future isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper ' +
      'isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow ' +
      'printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp ' +
      'strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan ' +
      'vfprintf vprintf vsprintf endl initializer_list unique_ptr _Bool complex _Complex imaginary _Imaginary',
    literal: 'true false nullptr NULL'
  };

  const EXPRESSION_CONTAINS = [
    PREPROCESSOR,
    CPP_PRIMITIVE_TYPES,
    C_LINE_COMMENT_MODE,
    hljs.C_BLOCK_COMMENT_MODE,
    NUMBERS,
    STRINGS
  ];

  const EXPRESSION_CONTEXT = {
    // This mode covers expression context where we can't expect a function
    // definition and shouldn't highlight anything that looks like one:
    // `return some()`, `else if()`, `(x*sum(1, 2))`
    variants: [
      {
        begin: /=/,
        end: /;/
      },
      {
        begin: /\(/,
        end: /\)/
      },
      {
        beginKeywords: 'new throw return else',
        end: /;/
      }
    ],
    keywords: CPP_KEYWORDS,
    contains: EXPRESSION_CONTAINS.concat([
      {
        begin: /\(/,
        end: /\)/,
        keywords: CPP_KEYWORDS,
        contains: EXPRESSION_CONTAINS.concat([ 'self' ]),
        relevance: 0
      }
    ]),
    relevance: 0
  };

  const FUNCTION_DECLARATION = {
    className: 'function',
    begin: '(' + FUNCTION_TYPE_RE + '[\\*&\\s]+)+' + FUNCTION_TITLE,
    returnBegin: true,
    end: /[{;=]/,
    excludeEnd: true,
    keywords: CPP_KEYWORDS,
    illegal: /[^\w\s\*&:<>.]/,
    contains: [
      { // to prevent it from being confused as the function title
        begin: DECLTYPE_AUTO_RE,
        keywords: CPP_KEYWORDS,
        relevance: 0
      },
      {
        begin: FUNCTION_TITLE,
        returnBegin: true,
        contains: [ TITLE_MODE ],
        relevance: 0
      },
      {
        className: 'params',
        begin: /\(/,
        end: /\)/,
        keywords: CPP_KEYWORDS,
        relevance: 0,
        contains: [
          C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE,
          STRINGS,
          NUMBERS,
          CPP_PRIMITIVE_TYPES,
          // Count matching parentheses.
          {
            begin: /\(/,
            end: /\)/,
            keywords: CPP_KEYWORDS,
            relevance: 0,
            contains: [
              'self',
              C_LINE_COMMENT_MODE,
              hljs.C_BLOCK_COMMENT_MODE,
              STRINGS,
              NUMBERS,
              CPP_PRIMITIVE_TYPES
            ]
          }
        ]
      },
      CPP_PRIMITIVE_TYPES,
      C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      PREPROCESSOR
    ]
  };

  return {
    name: 'C++',
    aliases: [
      'cc',
      'c++',
      'h++',
      'hpp',
      'hh',
      'hxx',
      'cxx'
    ],
    keywords: CPP_KEYWORDS,
    illegal: '</',
    contains: [].concat(
      EXPRESSION_CONTEXT,
      FUNCTION_DECLARATION,
      EXPRESSION_CONTAINS,
      [
        PREPROCESSOR,
        { // containers: ie, `vector <int> rooms (9);`
          begin: '\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<',
          end: '>',
          keywords: CPP_KEYWORDS,
          contains: [
            'self',
            CPP_PRIMITIVE_TYPES
          ]
        },
        {
          begin: hljs.IDENT_RE + '::',
          keywords: CPP_KEYWORDS
        },
        {
          className: 'class',
          beginKeywords: 'enum class struct union',
          end: /[{;:<>=]/,
          contains: [
            {
              beginKeywords: "final class struct"
            },
            hljs.TITLE_MODE
          ]
        }
      ]),
    exports: {
      preprocessor: PREPROCESSOR,
      strings: STRINGS,
      keywords: CPP_KEYWORDS
    }
  };
}

/*
Language: C-like (deprecated, use C and C++ instead)
Author: Ivan Sagalaev <maniac@softwaremaniacs.org>
Contributors: Evgeny Stepanischev <imbolk@gmail.com>, Zaven Muradyan <megalivoithos@gmail.com>, Roel Deckers <admin@codingcat.nl>, Sam Wu <samsam2310@gmail.com>, Jordi Petit <jordi.petit@gmail.com>, Pieter Vantorre <pietervantorre@gmail.com>, Google Inc. (David Benjamin) <davidben@google.com>
*/

/** @type LanguageFn */
function cLike(hljs) {
  const lang = cPlusPlus(hljs);

  const C_ALIASES = [
    "c",
    "h"
  ];

  const CPP_ALIASES = [
    'cc',
    'c++',
    'h++',
    'hpp',
    'hh',
    'hxx',
    'cxx'
  ];

  lang.disableAutodetect = true;
  lang.aliases = [];
  // support users only loading c-like (legacy)
  if (!hljs.getLanguage("c")) lang.aliases.push(...C_ALIASES);
  if (!hljs.getLanguage("cpp")) lang.aliases.push(...CPP_ALIASES);

  // if c and cpp are loaded after then they will reclaim these
  // aliases for themselves

  return lang;
}

module.exports = cLike;


/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvYy1saWtlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhO0FBQ2I7O0FBRUE7QUFDQSxXQUFXLGlCQUFpQjtBQUM1QixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFdBQVcsaUJBQWlCO0FBQzVCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVcsc0JBQXNCO0FBQ2pDLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLCtDQUErQyxFQUFFLGNBQWMsSUFBSSxPQUFPLEVBQUU7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLHdDQUF3QyxLQUFLO0FBQzdDLDBCQUEwQixLQUFLO0FBQy9CLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZixPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLDRDQUE0QztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSIsImZpbGUiOiIyMi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJucyB7UmVnRXhwfVxuICogKi9cblxuLyoqXG4gKiBAcGFyYW0ge1JlZ0V4cCB8IHN0cmluZyB9IHJlXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBzb3VyY2UocmUpIHtcbiAgaWYgKCFyZSkgcmV0dXJuIG51bGw7XG4gIGlmICh0eXBlb2YgcmUgPT09IFwic3RyaW5nXCIpIHJldHVybiByZTtcblxuICByZXR1cm4gcmUuc291cmNlO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7UmVnRXhwIHwgc3RyaW5nIH0gcmVcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIG9wdGlvbmFsKHJlKSB7XG4gIHJldHVybiBjb25jYXQoJygnLCByZSwgJyk/Jyk7XG59XG5cbi8qKlxuICogQHBhcmFtIHsuLi4oUmVnRXhwIHwgc3RyaW5nKSB9IGFyZ3NcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGNvbmNhdCguLi5hcmdzKSB7XG4gIGNvbnN0IGpvaW5lZCA9IGFyZ3MubWFwKCh4KSA9PiBzb3VyY2UoeCkpLmpvaW4oXCJcIik7XG4gIHJldHVybiBqb2luZWQ7XG59XG5cbi8qXG5MYW5ndWFnZTogQysrXG5DYXRlZ29yeTogY29tbW9uLCBzeXN0ZW1cbldlYnNpdGU6IGh0dHBzOi8vaXNvY3BwLm9yZ1xuKi9cblxuLyoqIEB0eXBlIExhbmd1YWdlRm4gKi9cbmZ1bmN0aW9uIGNQbHVzUGx1cyhobGpzKSB7XG4gIC8vIGFkZGVkIGZvciBoaXN0b3JpYyByZWFzb25zIGJlY2F1c2UgYGhsanMuQ19MSU5FX0NPTU1FTlRfTU9ERWAgZG9lc1xuICAvLyBub3QgaW5jbHVkZSBzdWNoIHN1cHBvcnQgbm9yIGNhbiB3ZSBiZSBzdXJlIGFsbCB0aGUgZ3JhbW1hcnMgZGVwZW5kaW5nXG4gIC8vIG9uIGl0IHdvdWxkIGRlc2lyZSB0aGlzIGJlaGF2aW9yXG4gIGNvbnN0IENfTElORV9DT01NRU5UX01PREUgPSBobGpzLkNPTU1FTlQoJy8vJywgJyQnLCB7XG4gICAgY29udGFpbnM6IFtcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IC9cXFxcXFxuL1xuICAgICAgfVxuICAgIF1cbiAgfSk7XG4gIGNvbnN0IERFQ0xUWVBFX0FVVE9fUkUgPSAnZGVjbHR5cGVcXFxcKGF1dG9cXFxcKSc7XG4gIGNvbnN0IE5BTUVTUEFDRV9SRSA9ICdbYS16QS1aX11cXFxcdyo6Oic7XG4gIGNvbnN0IFRFTVBMQVRFX0FSR1VNRU5UX1JFID0gJzxbXjw+XSs+JztcbiAgY29uc3QgRlVOQ1RJT05fVFlQRV9SRSA9ICcoJyArXG4gICAgREVDTFRZUEVfQVVUT19SRSArICd8JyArXG4gICAgb3B0aW9uYWwoTkFNRVNQQUNFX1JFKSArXG4gICAgJ1thLXpBLVpfXVxcXFx3KicgKyBvcHRpb25hbChURU1QTEFURV9BUkdVTUVOVF9SRSkgK1xuICAnKSc7XG4gIGNvbnN0IENQUF9QUklNSVRJVkVfVFlQRVMgPSB7XG4gICAgY2xhc3NOYW1lOiAna2V5d29yZCcsXG4gICAgYmVnaW46ICdcXFxcYlthLXpcXFxcZF9dKl90XFxcXGInXG4gIH07XG5cbiAgLy8gaHR0cHM6Ly9lbi5jcHByZWZlcmVuY2UuY29tL3cvY3BwL2xhbmd1YWdlL2VzY2FwZVxuICAvLyBcXFxcIFxceCBcXHhGRiBcXHUyODM3IFxcdTAwMzIzNzQ3IFxcMzc0XG4gIGNvbnN0IENIQVJBQ1RFUl9FU0NBUEVTID0gJ1xcXFxcXFxcKHhbMC05QS1GYS1mXXsyfXx1WzAtOUEtRmEtZl17NCw4fXxbMC03XXszfXxcXFxcUyknO1xuICBjb25zdCBTVFJJTkdTID0ge1xuICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgdmFyaWFudHM6IFtcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICcodTg/fFV8TCk/XCInLFxuICAgICAgICBlbmQ6ICdcIicsXG4gICAgICAgIGlsbGVnYWw6ICdcXFxcbicsXG4gICAgICAgIGNvbnRhaW5zOiBbIGhsanMuQkFDS1NMQVNIX0VTQ0FQRSBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogJyh1OD98VXxMKT9cXCcoJyArIENIQVJBQ1RFUl9FU0NBUEVTICsgXCJ8LilcIixcbiAgICAgICAgZW5kOiAnXFwnJyxcbiAgICAgICAgaWxsZWdhbDogJy4nXG4gICAgICB9LFxuICAgICAgaGxqcy5FTkRfU0FNRV9BU19CRUdJTih7XG4gICAgICAgIGJlZ2luOiAvKD86dTg/fFV8TCk/UlwiKFteKClcXFxcIF17MCwxNn0pXFwoLyxcbiAgICAgICAgZW5kOiAvXFwpKFteKClcXFxcIF17MCwxNn0pXCIvXG4gICAgICB9KVxuICAgIF1cbiAgfTtcblxuICBjb25zdCBOVU1CRVJTID0ge1xuICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgdmFyaWFudHM6IFtcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICdcXFxcYigwYlswMVxcJ10rKSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnKC0/KVxcXFxiKFtcXFxcZFxcJ10rKFxcXFwuW1xcXFxkXFwnXSopP3xcXFxcLltcXFxcZFxcJ10rKSgobGx8TEx8bHxMKSh1fFUpP3wodXxVKShsbHxMTHxsfEwpP3xmfEZ8YnxCKSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnKC0/KShcXFxcYjBbeFhdW2EtZkEtRjAtOVxcJ10rfChcXFxcYltcXFxcZFxcJ10rKFxcXFwuW1xcXFxkXFwnXSopP3xcXFxcLltcXFxcZFxcJ10rKShbZUVdWy0rXT9bXFxcXGRcXCddKyk/KSdcbiAgICAgIH1cbiAgICBdLFxuICAgIHJlbGV2YW5jZTogMFxuICB9O1xuXG4gIGNvbnN0IFBSRVBST0NFU1NPUiA9IHtcbiAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICBiZWdpbjogLyNcXHMqW2Etel0rXFxiLyxcbiAgICBlbmQ6IC8kLyxcbiAgICBrZXl3b3Jkczoge1xuICAgICAgJ21ldGEta2V5d29yZCc6XG4gICAgICAgICdpZiBlbHNlIGVsaWYgZW5kaWYgZGVmaW5lIHVuZGVmIHdhcm5pbmcgZXJyb3IgbGluZSAnICtcbiAgICAgICAgJ3ByYWdtYSBfUHJhZ21hIGlmZGVmIGlmbmRlZiBpbmNsdWRlJ1xuICAgIH0sXG4gICAgY29udGFpbnM6IFtcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IC9cXFxcXFxuLyxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuICAgICAgaGxqcy5pbmhlcml0KFNUUklOR1MsIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbWV0YS1zdHJpbmcnXG4gICAgICB9KSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbWV0YS1zdHJpbmcnLFxuICAgICAgICBiZWdpbjogLzwuKj8+LyxcbiAgICAgICAgZW5kOiAvJC8sXG4gICAgICAgIGlsbGVnYWw6ICdcXFxcbidcbiAgICAgIH0sXG4gICAgICBDX0xJTkVfQ09NTUVOVF9NT0RFLFxuICAgICAgaGxqcy5DX0JMT0NLX0NPTU1FTlRfTU9ERVxuICAgIF1cbiAgfTtcblxuICBjb25zdCBUSVRMRV9NT0RFID0ge1xuICAgIGNsYXNzTmFtZTogJ3RpdGxlJyxcbiAgICBiZWdpbjogb3B0aW9uYWwoTkFNRVNQQUNFX1JFKSArIGhsanMuSURFTlRfUkUsXG4gICAgcmVsZXZhbmNlOiAwXG4gIH07XG5cbiAgY29uc3QgRlVOQ1RJT05fVElUTEUgPSBvcHRpb25hbChOQU1FU1BBQ0VfUkUpICsgaGxqcy5JREVOVF9SRSArICdcXFxccypcXFxcKCc7XG5cbiAgY29uc3QgQ1BQX0tFWVdPUkRTID0ge1xuICAgIGtleXdvcmQ6ICdpbnQgZmxvYXQgd2hpbGUgcHJpdmF0ZSBjaGFyIGNoYXI4X3QgY2hhcjE2X3QgY2hhcjMyX3QgY2F0Y2ggaW1wb3J0IG1vZHVsZSBleHBvcnQgdmlydHVhbCBvcGVyYXRvciBzaXplb2YgJyArXG4gICAgICAnZHluYW1pY19jYXN0fDEwIHR5cGVkZWYgY29uc3RfY2FzdHwxMCBjb25zdCBmb3Igc3RhdGljX2Nhc3R8MTAgdW5pb24gbmFtZXNwYWNlICcgK1xuICAgICAgJ3Vuc2lnbmVkIGxvbmcgdm9sYXRpbGUgc3RhdGljIHByb3RlY3RlZCBib29sIHRlbXBsYXRlIG11dGFibGUgaWYgcHVibGljIGZyaWVuZCAnICtcbiAgICAgICdkbyBnb3RvIGF1dG8gdm9pZCBlbnVtIGVsc2UgYnJlYWsgZXh0ZXJuIHVzaW5nIGFzbSBjYXNlIHR5cGVpZCB3Y2hhcl90ICcgK1xuICAgICAgJ3Nob3J0IHJlaW50ZXJwcmV0X2Nhc3R8MTAgZGVmYXVsdCBkb3VibGUgcmVnaXN0ZXIgZXhwbGljaXQgc2lnbmVkIHR5cGVuYW1lIHRyeSB0aGlzICcgK1xuICAgICAgJ3N3aXRjaCBjb250aW51ZSBpbmxpbmUgZGVsZXRlIGFsaWduYXMgYWxpZ25vZiBjb25zdGV4cHIgY29uc3RldmFsIGNvbnN0aW5pdCBkZWNsdHlwZSAnICtcbiAgICAgICdjb25jZXB0IGNvX2F3YWl0IGNvX3JldHVybiBjb195aWVsZCByZXF1aXJlcyAnICtcbiAgICAgICdub2V4Y2VwdCBzdGF0aWNfYXNzZXJ0IHRocmVhZF9sb2NhbCByZXN0cmljdCBmaW5hbCBvdmVycmlkZSAnICtcbiAgICAgICdhdG9taWNfYm9vbCBhdG9taWNfY2hhciBhdG9taWNfc2NoYXIgJyArXG4gICAgICAnYXRvbWljX3VjaGFyIGF0b21pY19zaG9ydCBhdG9taWNfdXNob3J0IGF0b21pY19pbnQgYXRvbWljX3VpbnQgYXRvbWljX2xvbmcgYXRvbWljX3Vsb25nIGF0b21pY19sbG9uZyAnICtcbiAgICAgICdhdG9taWNfdWxsb25nIG5ldyB0aHJvdyByZXR1cm4gJyArXG4gICAgICAnYW5kIGFuZF9lcSBiaXRhbmQgYml0b3IgY29tcGwgbm90IG5vdF9lcSBvciBvcl9lcSB4b3IgeG9yX2VxJyxcbiAgICBidWlsdF9pbjogJ3N0ZCBzdHJpbmcgd3N0cmluZyBjaW4gY291dCBjZXJyIGNsb2cgc3RkaW4gc3Rkb3V0IHN0ZGVyciBzdHJpbmdzdHJlYW0gaXN0cmluZ3N0cmVhbSBvc3RyaW5nc3RyZWFtICcgK1xuICAgICAgJ2F1dG9fcHRyIGRlcXVlIGxpc3QgcXVldWUgc3RhY2sgdmVjdG9yIG1hcCBzZXQgcGFpciBiaXRzZXQgbXVsdGlzZXQgbXVsdGltYXAgdW5vcmRlcmVkX3NldCAnICtcbiAgICAgICd1bm9yZGVyZWRfbWFwIHVub3JkZXJlZF9tdWx0aXNldCB1bm9yZGVyZWRfbXVsdGltYXAgcHJpb3JpdHlfcXVldWUgbWFrZV9wYWlyIGFycmF5IHNoYXJlZF9wdHIgYWJvcnQgdGVybWluYXRlIGFicyBhY29zICcgK1xuICAgICAgJ2FzaW4gYXRhbjIgYXRhbiBjYWxsb2MgY2VpbCBjb3NoIGNvcyBleGl0IGV4cCBmYWJzIGZsb29yIGZtb2QgZnByaW50ZiBmcHV0cyBmcmVlIGZyZXhwICcgK1xuICAgICAgJ2ZzY2FuZiBmdXR1cmUgaXNhbG51bSBpc2FscGhhIGlzY250cmwgaXNkaWdpdCBpc2dyYXBoIGlzbG93ZXIgaXNwcmludCBpc3B1bmN0IGlzc3BhY2UgaXN1cHBlciAnICtcbiAgICAgICdpc3hkaWdpdCB0b2xvd2VyIHRvdXBwZXIgbGFicyBsZGV4cCBsb2cxMCBsb2cgbWFsbG9jIHJlYWxsb2MgbWVtY2hyIG1lbWNtcCBtZW1jcHkgbWVtc2V0IG1vZGYgcG93ICcgK1xuICAgICAgJ3ByaW50ZiBwdXRjaGFyIHB1dHMgc2NhbmYgc2luaCBzaW4gc25wcmludGYgc3ByaW50ZiBzcXJ0IHNzY2FuZiBzdHJjYXQgc3RyY2hyIHN0cmNtcCAnICtcbiAgICAgICdzdHJjcHkgc3RyY3NwbiBzdHJsZW4gc3RybmNhdCBzdHJuY21wIHN0cm5jcHkgc3RycGJyayBzdHJyY2hyIHN0cnNwbiBzdHJzdHIgdGFuaCB0YW4gJyArXG4gICAgICAndmZwcmludGYgdnByaW50ZiB2c3ByaW50ZiBlbmRsIGluaXRpYWxpemVyX2xpc3QgdW5pcXVlX3B0ciBfQm9vbCBjb21wbGV4IF9Db21wbGV4IGltYWdpbmFyeSBfSW1hZ2luYXJ5JyxcbiAgICBsaXRlcmFsOiAndHJ1ZSBmYWxzZSBudWxscHRyIE5VTEwnXG4gIH07XG5cbiAgY29uc3QgRVhQUkVTU0lPTl9DT05UQUlOUyA9IFtcbiAgICBQUkVQUk9DRVNTT1IsXG4gICAgQ1BQX1BSSU1JVElWRV9UWVBFUyxcbiAgICBDX0xJTkVfQ09NTUVOVF9NT0RFLFxuICAgIGhsanMuQ19CTE9DS19DT01NRU5UX01PREUsXG4gICAgTlVNQkVSUyxcbiAgICBTVFJJTkdTXG4gIF07XG5cbiAgY29uc3QgRVhQUkVTU0lPTl9DT05URVhUID0ge1xuICAgIC8vIFRoaXMgbW9kZSBjb3ZlcnMgZXhwcmVzc2lvbiBjb250ZXh0IHdoZXJlIHdlIGNhbid0IGV4cGVjdCBhIGZ1bmN0aW9uXG4gICAgLy8gZGVmaW5pdGlvbiBhbmQgc2hvdWxkbid0IGhpZ2hsaWdodCBhbnl0aGluZyB0aGF0IGxvb2tzIGxpa2Ugb25lOlxuICAgIC8vIGByZXR1cm4gc29tZSgpYCwgYGVsc2UgaWYoKWAsIGAoeCpzdW0oMSwgMikpYFxuICAgIHZhcmlhbnRzOiBbXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAvPS8sXG4gICAgICAgIGVuZDogLzsvXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogL1xcKC8sXG4gICAgICAgIGVuZDogL1xcKS9cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luS2V5d29yZHM6ICduZXcgdGhyb3cgcmV0dXJuIGVsc2UnLFxuICAgICAgICBlbmQ6IC87L1xuICAgICAgfVxuICAgIF0sXG4gICAga2V5d29yZHM6IENQUF9LRVlXT1JEUyxcbiAgICBjb250YWluczogRVhQUkVTU0lPTl9DT05UQUlOUy5jb25jYXQoW1xuICAgICAge1xuICAgICAgICBiZWdpbjogL1xcKC8sXG4gICAgICAgIGVuZDogL1xcKS8sXG4gICAgICAgIGtleXdvcmRzOiBDUFBfS0VZV09SRFMsXG4gICAgICAgIGNvbnRhaW5zOiBFWFBSRVNTSU9OX0NPTlRBSU5TLmNvbmNhdChbICdzZWxmJyBdKSxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9XG4gICAgXSksXG4gICAgcmVsZXZhbmNlOiAwXG4gIH07XG5cbiAgY29uc3QgRlVOQ1RJT05fREVDTEFSQVRJT04gPSB7XG4gICAgY2xhc3NOYW1lOiAnZnVuY3Rpb24nLFxuICAgIGJlZ2luOiAnKCcgKyBGVU5DVElPTl9UWVBFX1JFICsgJ1tcXFxcKiZcXFxcc10rKSsnICsgRlVOQ1RJT05fVElUTEUsXG4gICAgcmV0dXJuQmVnaW46IHRydWUsXG4gICAgZW5kOiAvW3s7PV0vLFxuICAgIGV4Y2x1ZGVFbmQ6IHRydWUsXG4gICAga2V5d29yZHM6IENQUF9LRVlXT1JEUyxcbiAgICBpbGxlZ2FsOiAvW15cXHdcXHNcXComOjw+Ll0vLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICB7IC8vIHRvIHByZXZlbnQgaXQgZnJvbSBiZWluZyBjb25mdXNlZCBhcyB0aGUgZnVuY3Rpb24gdGl0bGVcbiAgICAgICAgYmVnaW46IERFQ0xUWVBFX0FVVE9fUkUsXG4gICAgICAgIGtleXdvcmRzOiBDUFBfS0VZV09SRFMsXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IEZVTkNUSU9OX1RJVExFLFxuICAgICAgICByZXR1cm5CZWdpbjogdHJ1ZSxcbiAgICAgICAgY29udGFpbnM6IFsgVElUTEVfTU9ERSBdLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3BhcmFtcycsXG4gICAgICAgIGJlZ2luOiAvXFwoLyxcbiAgICAgICAgZW5kOiAvXFwpLyxcbiAgICAgICAga2V5d29yZHM6IENQUF9LRVlXT1JEUyxcbiAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIENfTElORV9DT01NRU5UX01PREUsXG4gICAgICAgICAgaGxqcy5DX0JMT0NLX0NPTU1FTlRfTU9ERSxcbiAgICAgICAgICBTVFJJTkdTLFxuICAgICAgICAgIE5VTUJFUlMsXG4gICAgICAgICAgQ1BQX1BSSU1JVElWRV9UWVBFUyxcbiAgICAgICAgICAvLyBDb3VudCBtYXRjaGluZyBwYXJlbnRoZXNlcy5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogL1xcKC8sXG4gICAgICAgICAgICBlbmQ6IC9cXCkvLFxuICAgICAgICAgICAga2V5d29yZHM6IENQUF9LRVlXT1JEUyxcbiAgICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAgICdzZWxmJyxcbiAgICAgICAgICAgICAgQ19MSU5FX0NPTU1FTlRfTU9ERSxcbiAgICAgICAgICAgICAgaGxqcy5DX0JMT0NLX0NPTU1FTlRfTU9ERSxcbiAgICAgICAgICAgICAgU1RSSU5HUyxcbiAgICAgICAgICAgICAgTlVNQkVSUyxcbiAgICAgICAgICAgICAgQ1BQX1BSSU1JVElWRV9UWVBFU1xuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIENQUF9QUklNSVRJVkVfVFlQRVMsXG4gICAgICBDX0xJTkVfQ09NTUVOVF9NT0RFLFxuICAgICAgaGxqcy5DX0JMT0NLX0NPTU1FTlRfTU9ERSxcbiAgICAgIFBSRVBST0NFU1NPUlxuICAgIF1cbiAgfTtcblxuICByZXR1cm4ge1xuICAgIG5hbWU6ICdDKysnLFxuICAgIGFsaWFzZXM6IFtcbiAgICAgICdjYycsXG4gICAgICAnYysrJyxcbiAgICAgICdoKysnLFxuICAgICAgJ2hwcCcsXG4gICAgICAnaGgnLFxuICAgICAgJ2h4eCcsXG4gICAgICAnY3h4J1xuICAgIF0sXG4gICAga2V5d29yZHM6IENQUF9LRVlXT1JEUyxcbiAgICBpbGxlZ2FsOiAnPC8nLFxuICAgIGNvbnRhaW5zOiBbXS5jb25jYXQoXG4gICAgICBFWFBSRVNTSU9OX0NPTlRFWFQsXG4gICAgICBGVU5DVElPTl9ERUNMQVJBVElPTixcbiAgICAgIEVYUFJFU1NJT05fQ09OVEFJTlMsXG4gICAgICBbXG4gICAgICAgIFBSRVBST0NFU1NPUixcbiAgICAgICAgeyAvLyBjb250YWluZXJzOiBpZSwgYHZlY3RvciA8aW50PiByb29tcyAoOSk7YFxuICAgICAgICAgIGJlZ2luOiAnXFxcXGIoZGVxdWV8bGlzdHxxdWV1ZXxwcmlvcml0eV9xdWV1ZXxwYWlyfHN0YWNrfHZlY3RvcnxtYXB8c2V0fGJpdHNldHxtdWx0aXNldHxtdWx0aW1hcHx1bm9yZGVyZWRfbWFwfHVub3JkZXJlZF9zZXR8dW5vcmRlcmVkX211bHRpc2V0fHVub3JkZXJlZF9tdWx0aW1hcHxhcnJheSlcXFxccyo8JyxcbiAgICAgICAgICBlbmQ6ICc+JyxcbiAgICAgICAgICBrZXl3b3JkczogQ1BQX0tFWVdPUkRTLFxuICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAnc2VsZicsXG4gICAgICAgICAgICBDUFBfUFJJTUlUSVZFX1RZUEVTXG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgYmVnaW46IGhsanMuSURFTlRfUkUgKyAnOjonLFxuICAgICAgICAgIGtleXdvcmRzOiBDUFBfS0VZV09SRFNcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGNsYXNzTmFtZTogJ2NsYXNzJyxcbiAgICAgICAgICBiZWdpbktleXdvcmRzOiAnZW51bSBjbGFzcyBzdHJ1Y3QgdW5pb24nLFxuICAgICAgICAgIGVuZDogL1t7Ozo8Pj1dLyxcbiAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBiZWdpbktleXdvcmRzOiBcImZpbmFsIGNsYXNzIHN0cnVjdFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaGxqcy5USVRMRV9NT0RFXG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdKSxcbiAgICBleHBvcnRzOiB7XG4gICAgICBwcmVwcm9jZXNzb3I6IFBSRVBST0NFU1NPUixcbiAgICAgIHN0cmluZ3M6IFNUUklOR1MsXG4gICAgICBrZXl3b3JkczogQ1BQX0tFWVdPUkRTXG4gICAgfVxuICB9O1xufVxuXG4vKlxuTGFuZ3VhZ2U6IEMtbGlrZSAoZGVwcmVjYXRlZCwgdXNlIEMgYW5kIEMrKyBpbnN0ZWFkKVxuQXV0aG9yOiBJdmFuIFNhZ2FsYWV2IDxtYW5pYWNAc29mdHdhcmVtYW5pYWNzLm9yZz5cbkNvbnRyaWJ1dG9yczogRXZnZW55IFN0ZXBhbmlzY2hldiA8aW1ib2xrQGdtYWlsLmNvbT4sIFphdmVuIE11cmFkeWFuIDxtZWdhbGl2b2l0aG9zQGdtYWlsLmNvbT4sIFJvZWwgRGVja2VycyA8YWRtaW5AY29kaW5nY2F0Lm5sPiwgU2FtIFd1IDxzYW1zYW0yMzEwQGdtYWlsLmNvbT4sIEpvcmRpIFBldGl0IDxqb3JkaS5wZXRpdEBnbWFpbC5jb20+LCBQaWV0ZXIgVmFudG9ycmUgPHBpZXRlcnZhbnRvcnJlQGdtYWlsLmNvbT4sIEdvb2dsZSBJbmMuIChEYXZpZCBCZW5qYW1pbikgPGRhdmlkYmVuQGdvb2dsZS5jb20+XG4qL1xuXG4vKiogQHR5cGUgTGFuZ3VhZ2VGbiAqL1xuZnVuY3Rpb24gY0xpa2UoaGxqcykge1xuICBjb25zdCBsYW5nID0gY1BsdXNQbHVzKGhsanMpO1xuXG4gIGNvbnN0IENfQUxJQVNFUyA9IFtcbiAgICBcImNcIixcbiAgICBcImhcIlxuICBdO1xuXG4gIGNvbnN0IENQUF9BTElBU0VTID0gW1xuICAgICdjYycsXG4gICAgJ2MrKycsXG4gICAgJ2grKycsXG4gICAgJ2hwcCcsXG4gICAgJ2hoJyxcbiAgICAnaHh4JyxcbiAgICAnY3h4J1xuICBdO1xuXG4gIGxhbmcuZGlzYWJsZUF1dG9kZXRlY3QgPSB0cnVlO1xuICBsYW5nLmFsaWFzZXMgPSBbXTtcbiAgLy8gc3VwcG9ydCB1c2VycyBvbmx5IGxvYWRpbmcgYy1saWtlIChsZWdhY3kpXG4gIGlmICghaGxqcy5nZXRMYW5ndWFnZShcImNcIikpIGxhbmcuYWxpYXNlcy5wdXNoKC4uLkNfQUxJQVNFUyk7XG4gIGlmICghaGxqcy5nZXRMYW5ndWFnZShcImNwcFwiKSkgbGFuZy5hbGlhc2VzLnB1c2goLi4uQ1BQX0FMSUFTRVMpO1xuXG4gIC8vIGlmIGMgYW5kIGNwcCBhcmUgbG9hZGVkIGFmdGVyIHRoZW4gdGhleSB3aWxsIHJlY2xhaW0gdGhlc2VcbiAgLy8gYWxpYXNlcyBmb3IgdGhlbXNlbHZlc1xuXG4gIHJldHVybiBsYW5nO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNMaWtlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==