exports.ids = [23];
exports.modules = {

/***/ "./node_modules/highlight.js/lib/languages/c.js":
/*!******************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/c.js ***!
  \******************************************************/
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
Language: C
Category: common, system
Website: https://en.wikipedia.org/wiki/C_(programming_language)
*/

/** @type LanguageFn */
function c(hljs) {
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
    name: "C",
    aliases: [
      'c',
      'h'
    ],
    keywords: CPP_KEYWORDS,
    // Until differentiations are added between `c` and `cpp`, `c` will
    // not be auto-detected to avoid auto-detect conflicts between C and C++
    disableAutodetect: true,
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

module.exports = c;


/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvYy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYTtBQUNiOztBQUVBO0FBQ0EsV0FBVyxpQkFBaUI7QUFDNUIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLGlCQUFpQjtBQUM1QixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLHNCQUFzQjtBQUNqQyxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQ0FBK0MsRUFBRSxjQUFjLElBQUksT0FBTyxFQUFFO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSx3Q0FBd0MsS0FBSztBQUM3QywwQkFBMEIsS0FBSztBQUMvQixPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2YsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLDRDQUE0QztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6IjIzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm5zIHtSZWdFeHB9XG4gKiAqL1xuXG4vKipcbiAqIEBwYXJhbSB7UmVnRXhwIHwgc3RyaW5nIH0gcmVcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIHNvdXJjZShyZSkge1xuICBpZiAoIXJlKSByZXR1cm4gbnVsbDtcbiAgaWYgKHR5cGVvZiByZSA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIHJlO1xuXG4gIHJldHVybiByZS5zb3VyY2U7XG59XG5cbi8qKlxuICogQHBhcmFtIHtSZWdFeHAgfCBzdHJpbmcgfSByZVxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gb3B0aW9uYWwocmUpIHtcbiAgcmV0dXJuIGNvbmNhdCgnKCcsIHJlLCAnKT8nKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0gey4uLihSZWdFeHAgfCBzdHJpbmcpIH0gYXJnc1xuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gY29uY2F0KC4uLmFyZ3MpIHtcbiAgY29uc3Qgam9pbmVkID0gYXJncy5tYXAoKHgpID0+IHNvdXJjZSh4KSkuam9pbihcIlwiKTtcbiAgcmV0dXJuIGpvaW5lZDtcbn1cblxuLypcbkxhbmd1YWdlOiBDXG5DYXRlZ29yeTogY29tbW9uLCBzeXN0ZW1cbldlYnNpdGU6IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0NfKHByb2dyYW1taW5nX2xhbmd1YWdlKVxuKi9cblxuLyoqIEB0eXBlIExhbmd1YWdlRm4gKi9cbmZ1bmN0aW9uIGMoaGxqcykge1xuICAvLyBhZGRlZCBmb3IgaGlzdG9yaWMgcmVhc29ucyBiZWNhdXNlIGBobGpzLkNfTElORV9DT01NRU5UX01PREVgIGRvZXNcbiAgLy8gbm90IGluY2x1ZGUgc3VjaCBzdXBwb3J0IG5vciBjYW4gd2UgYmUgc3VyZSBhbGwgdGhlIGdyYW1tYXJzIGRlcGVuZGluZ1xuICAvLyBvbiBpdCB3b3VsZCBkZXNpcmUgdGhpcyBiZWhhdmlvclxuICBjb25zdCBDX0xJTkVfQ09NTUVOVF9NT0RFID0gaGxqcy5DT01NRU5UKCcvLycsICckJywge1xuICAgIGNvbnRhaW5zOiBbXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAvXFxcXFxcbi9cbiAgICAgIH1cbiAgICBdXG4gIH0pO1xuICBjb25zdCBERUNMVFlQRV9BVVRPX1JFID0gJ2RlY2x0eXBlXFxcXChhdXRvXFxcXCknO1xuICBjb25zdCBOQU1FU1BBQ0VfUkUgPSAnW2EtekEtWl9dXFxcXHcqOjonO1xuICBjb25zdCBURU1QTEFURV9BUkdVTUVOVF9SRSA9ICc8W148Pl0rPic7XG4gIGNvbnN0IEZVTkNUSU9OX1RZUEVfUkUgPSAnKCcgK1xuICAgIERFQ0xUWVBFX0FVVE9fUkUgKyAnfCcgK1xuICAgIG9wdGlvbmFsKE5BTUVTUEFDRV9SRSkgK1xuICAgICdbYS16QS1aX11cXFxcdyonICsgb3B0aW9uYWwoVEVNUExBVEVfQVJHVU1FTlRfUkUpICtcbiAgJyknO1xuICBjb25zdCBDUFBfUFJJTUlUSVZFX1RZUEVTID0ge1xuICAgIGNsYXNzTmFtZTogJ2tleXdvcmQnLFxuICAgIGJlZ2luOiAnXFxcXGJbYS16XFxcXGRfXSpfdFxcXFxiJ1xuICB9O1xuXG4gIC8vIGh0dHBzOi8vZW4uY3BwcmVmZXJlbmNlLmNvbS93L2NwcC9sYW5ndWFnZS9lc2NhcGVcbiAgLy8gXFxcXCBcXHggXFx4RkYgXFx1MjgzNyBcXHUwMDMyMzc0NyBcXDM3NFxuICBjb25zdCBDSEFSQUNURVJfRVNDQVBFUyA9ICdcXFxcXFxcXCh4WzAtOUEtRmEtZl17Mn18dVswLTlBLUZhLWZdezQsOH18WzAtN117M318XFxcXFMpJztcbiAgY29uc3QgU1RSSU5HUyA9IHtcbiAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgIHZhcmlhbnRzOiBbXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnKHU4P3xVfEwpP1wiJyxcbiAgICAgICAgZW5kOiAnXCInLFxuICAgICAgICBpbGxlZ2FsOiAnXFxcXG4nLFxuICAgICAgICBjb250YWluczogWyBobGpzLkJBQ0tTTEFTSF9FU0NBUEUgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICcodTg/fFV8TCk/XFwnKCcgKyBDSEFSQUNURVJfRVNDQVBFUyArIFwifC4pXCIsXG4gICAgICAgIGVuZDogJ1xcJycsXG4gICAgICAgIGlsbGVnYWw6ICcuJ1xuICAgICAgfSxcbiAgICAgIGhsanMuRU5EX1NBTUVfQVNfQkVHSU4oe1xuICAgICAgICBiZWdpbjogLyg/OnU4P3xVfEwpP1JcIihbXigpXFxcXCBdezAsMTZ9KVxcKC8sXG4gICAgICAgIGVuZDogL1xcKShbXigpXFxcXCBdezAsMTZ9KVwiL1xuICAgICAgfSlcbiAgICBdXG4gIH07XG5cbiAgY29uc3QgTlVNQkVSUyA9IHtcbiAgICBjbGFzc05hbWU6ICdudW1iZXInLFxuICAgIHZhcmlhbnRzOiBbXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnXFxcXGIoMGJbMDFcXCddKyknXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogJygtPylcXFxcYihbXFxcXGRcXCddKyhcXFxcLltcXFxcZFxcJ10qKT98XFxcXC5bXFxcXGRcXCddKykoKGxsfExMfGx8TCkodXxVKT98KHV8VSkobGx8TEx8bHxMKT98ZnxGfGJ8QiknXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogJygtPykoXFxcXGIwW3hYXVthLWZBLUYwLTlcXCddK3woXFxcXGJbXFxcXGRcXCddKyhcXFxcLltcXFxcZFxcJ10qKT98XFxcXC5bXFxcXGRcXCddKykoW2VFXVstK10/W1xcXFxkXFwnXSspPyknXG4gICAgICB9XG4gICAgXSxcbiAgICByZWxldmFuY2U6IDBcbiAgfTtcblxuICBjb25zdCBQUkVQUk9DRVNTT1IgPSB7XG4gICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgYmVnaW46IC8jXFxzKlthLXpdK1xcYi8sXG4gICAgZW5kOiAvJC8sXG4gICAga2V5d29yZHM6IHtcbiAgICAgICdtZXRhLWtleXdvcmQnOlxuICAgICAgICAnaWYgZWxzZSBlbGlmIGVuZGlmIGRlZmluZSB1bmRlZiB3YXJuaW5nIGVycm9yIGxpbmUgJyArXG4gICAgICAgICdwcmFnbWEgX1ByYWdtYSBpZmRlZiBpZm5kZWYgaW5jbHVkZSdcbiAgICB9LFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAvXFxcXFxcbi8sXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIGhsanMuaW5oZXJpdChTVFJJTkdTLCB7XG4gICAgICAgIGNsYXNzTmFtZTogJ21ldGEtc3RyaW5nJ1xuICAgICAgfSksXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ21ldGEtc3RyaW5nJyxcbiAgICAgICAgYmVnaW46IC88Lio/Pi8sXG4gICAgICAgIGVuZDogLyQvLFxuICAgICAgICBpbGxlZ2FsOiAnXFxcXG4nXG4gICAgICB9LFxuICAgICAgQ19MSU5FX0NPTU1FTlRfTU9ERSxcbiAgICAgIGhsanMuQ19CTE9DS19DT01NRU5UX01PREVcbiAgICBdXG4gIH07XG5cbiAgY29uc3QgVElUTEVfTU9ERSA9IHtcbiAgICBjbGFzc05hbWU6ICd0aXRsZScsXG4gICAgYmVnaW46IG9wdGlvbmFsKE5BTUVTUEFDRV9SRSkgKyBobGpzLklERU5UX1JFLFxuICAgIHJlbGV2YW5jZTogMFxuICB9O1xuXG4gIGNvbnN0IEZVTkNUSU9OX1RJVExFID0gb3B0aW9uYWwoTkFNRVNQQUNFX1JFKSArIGhsanMuSURFTlRfUkUgKyAnXFxcXHMqXFxcXCgnO1xuXG4gIGNvbnN0IENQUF9LRVlXT1JEUyA9IHtcbiAgICBrZXl3b3JkOiAnaW50IGZsb2F0IHdoaWxlIHByaXZhdGUgY2hhciBjaGFyOF90IGNoYXIxNl90IGNoYXIzMl90IGNhdGNoIGltcG9ydCBtb2R1bGUgZXhwb3J0IHZpcnR1YWwgb3BlcmF0b3Igc2l6ZW9mICcgK1xuICAgICAgJ2R5bmFtaWNfY2FzdHwxMCB0eXBlZGVmIGNvbnN0X2Nhc3R8MTAgY29uc3QgZm9yIHN0YXRpY19jYXN0fDEwIHVuaW9uIG5hbWVzcGFjZSAnICtcbiAgICAgICd1bnNpZ25lZCBsb25nIHZvbGF0aWxlIHN0YXRpYyBwcm90ZWN0ZWQgYm9vbCB0ZW1wbGF0ZSBtdXRhYmxlIGlmIHB1YmxpYyBmcmllbmQgJyArXG4gICAgICAnZG8gZ290byBhdXRvIHZvaWQgZW51bSBlbHNlIGJyZWFrIGV4dGVybiB1c2luZyBhc20gY2FzZSB0eXBlaWQgd2NoYXJfdCAnICtcbiAgICAgICdzaG9ydCByZWludGVycHJldF9jYXN0fDEwIGRlZmF1bHQgZG91YmxlIHJlZ2lzdGVyIGV4cGxpY2l0IHNpZ25lZCB0eXBlbmFtZSB0cnkgdGhpcyAnICtcbiAgICAgICdzd2l0Y2ggY29udGludWUgaW5saW5lIGRlbGV0ZSBhbGlnbmFzIGFsaWdub2YgY29uc3RleHByIGNvbnN0ZXZhbCBjb25zdGluaXQgZGVjbHR5cGUgJyArXG4gICAgICAnY29uY2VwdCBjb19hd2FpdCBjb19yZXR1cm4gY29feWllbGQgcmVxdWlyZXMgJyArXG4gICAgICAnbm9leGNlcHQgc3RhdGljX2Fzc2VydCB0aHJlYWRfbG9jYWwgcmVzdHJpY3QgZmluYWwgb3ZlcnJpZGUgJyArXG4gICAgICAnYXRvbWljX2Jvb2wgYXRvbWljX2NoYXIgYXRvbWljX3NjaGFyICcgK1xuICAgICAgJ2F0b21pY191Y2hhciBhdG9taWNfc2hvcnQgYXRvbWljX3VzaG9ydCBhdG9taWNfaW50IGF0b21pY191aW50IGF0b21pY19sb25nIGF0b21pY191bG9uZyBhdG9taWNfbGxvbmcgJyArXG4gICAgICAnYXRvbWljX3VsbG9uZyBuZXcgdGhyb3cgcmV0dXJuICcgK1xuICAgICAgJ2FuZCBhbmRfZXEgYml0YW5kIGJpdG9yIGNvbXBsIG5vdCBub3RfZXEgb3Igb3JfZXEgeG9yIHhvcl9lcScsXG4gICAgYnVpbHRfaW46ICdzdGQgc3RyaW5nIHdzdHJpbmcgY2luIGNvdXQgY2VyciBjbG9nIHN0ZGluIHN0ZG91dCBzdGRlcnIgc3RyaW5nc3RyZWFtIGlzdHJpbmdzdHJlYW0gb3N0cmluZ3N0cmVhbSAnICtcbiAgICAgICdhdXRvX3B0ciBkZXF1ZSBsaXN0IHF1ZXVlIHN0YWNrIHZlY3RvciBtYXAgc2V0IHBhaXIgYml0c2V0IG11bHRpc2V0IG11bHRpbWFwIHVub3JkZXJlZF9zZXQgJyArXG4gICAgICAndW5vcmRlcmVkX21hcCB1bm9yZGVyZWRfbXVsdGlzZXQgdW5vcmRlcmVkX211bHRpbWFwIHByaW9yaXR5X3F1ZXVlIG1ha2VfcGFpciBhcnJheSBzaGFyZWRfcHRyIGFib3J0IHRlcm1pbmF0ZSBhYnMgYWNvcyAnICtcbiAgICAgICdhc2luIGF0YW4yIGF0YW4gY2FsbG9jIGNlaWwgY29zaCBjb3MgZXhpdCBleHAgZmFicyBmbG9vciBmbW9kIGZwcmludGYgZnB1dHMgZnJlZSBmcmV4cCAnICtcbiAgICAgICdmc2NhbmYgZnV0dXJlIGlzYWxudW0gaXNhbHBoYSBpc2NudHJsIGlzZGlnaXQgaXNncmFwaCBpc2xvd2VyIGlzcHJpbnQgaXNwdW5jdCBpc3NwYWNlIGlzdXBwZXIgJyArXG4gICAgICAnaXN4ZGlnaXQgdG9sb3dlciB0b3VwcGVyIGxhYnMgbGRleHAgbG9nMTAgbG9nIG1hbGxvYyByZWFsbG9jIG1lbWNociBtZW1jbXAgbWVtY3B5IG1lbXNldCBtb2RmIHBvdyAnICtcbiAgICAgICdwcmludGYgcHV0Y2hhciBwdXRzIHNjYW5mIHNpbmggc2luIHNucHJpbnRmIHNwcmludGYgc3FydCBzc2NhbmYgc3RyY2F0IHN0cmNociBzdHJjbXAgJyArXG4gICAgICAnc3RyY3B5IHN0cmNzcG4gc3RybGVuIHN0cm5jYXQgc3RybmNtcCBzdHJuY3B5IHN0cnBicmsgc3RycmNociBzdHJzcG4gc3Ryc3RyIHRhbmggdGFuICcgK1xuICAgICAgJ3ZmcHJpbnRmIHZwcmludGYgdnNwcmludGYgZW5kbCBpbml0aWFsaXplcl9saXN0IHVuaXF1ZV9wdHIgX0Jvb2wgY29tcGxleCBfQ29tcGxleCBpbWFnaW5hcnkgX0ltYWdpbmFyeScsXG4gICAgbGl0ZXJhbDogJ3RydWUgZmFsc2UgbnVsbHB0ciBOVUxMJ1xuICB9O1xuXG4gIGNvbnN0IEVYUFJFU1NJT05fQ09OVEFJTlMgPSBbXG4gICAgUFJFUFJPQ0VTU09SLFxuICAgIENQUF9QUklNSVRJVkVfVFlQRVMsXG4gICAgQ19MSU5FX0NPTU1FTlRfTU9ERSxcbiAgICBobGpzLkNfQkxPQ0tfQ09NTUVOVF9NT0RFLFxuICAgIE5VTUJFUlMsXG4gICAgU1RSSU5HU1xuICBdO1xuXG4gIGNvbnN0IEVYUFJFU1NJT05fQ09OVEVYVCA9IHtcbiAgICAvLyBUaGlzIG1vZGUgY292ZXJzIGV4cHJlc3Npb24gY29udGV4dCB3aGVyZSB3ZSBjYW4ndCBleHBlY3QgYSBmdW5jdGlvblxuICAgIC8vIGRlZmluaXRpb24gYW5kIHNob3VsZG4ndCBoaWdobGlnaHQgYW55dGhpbmcgdGhhdCBsb29rcyBsaWtlIG9uZTpcbiAgICAvLyBgcmV0dXJuIHNvbWUoKWAsIGBlbHNlIGlmKClgLCBgKHgqc3VtKDEsIDIpKWBcbiAgICB2YXJpYW50czogW1xuICAgICAge1xuICAgICAgICBiZWdpbjogLz0vLFxuICAgICAgICBlbmQ6IC87L1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IC9cXCgvLFxuICAgICAgICBlbmQ6IC9cXCkvXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbktleXdvcmRzOiAnbmV3IHRocm93IHJldHVybiBlbHNlJyxcbiAgICAgICAgZW5kOiAvOy9cbiAgICAgIH1cbiAgICBdLFxuICAgIGtleXdvcmRzOiBDUFBfS0VZV09SRFMsXG4gICAgY29udGFpbnM6IEVYUFJFU1NJT05fQ09OVEFJTlMuY29uY2F0KFtcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IC9cXCgvLFxuICAgICAgICBlbmQ6IC9cXCkvLFxuICAgICAgICBrZXl3b3JkczogQ1BQX0tFWVdPUkRTLFxuICAgICAgICBjb250YWluczogRVhQUkVTU0lPTl9DT05UQUlOUy5jb25jYXQoWyAnc2VsZicgXSksXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfVxuICAgIF0pLFxuICAgIHJlbGV2YW5jZTogMFxuICB9O1xuXG4gIGNvbnN0IEZVTkNUSU9OX0RFQ0xBUkFUSU9OID0ge1xuICAgIGNsYXNzTmFtZTogJ2Z1bmN0aW9uJyxcbiAgICBiZWdpbjogJygnICsgRlVOQ1RJT05fVFlQRV9SRSArICdbXFxcXComXFxcXHNdKykrJyArIEZVTkNUSU9OX1RJVExFLFxuICAgIHJldHVybkJlZ2luOiB0cnVlLFxuICAgIGVuZDogL1t7Oz1dLyxcbiAgICBleGNsdWRlRW5kOiB0cnVlLFxuICAgIGtleXdvcmRzOiBDUFBfS0VZV09SRFMsXG4gICAgaWxsZWdhbDogL1teXFx3XFxzXFwqJjo8Pi5dLyxcbiAgICBjb250YWluczogW1xuICAgICAgeyAvLyB0byBwcmV2ZW50IGl0IGZyb20gYmVpbmcgY29uZnVzZWQgYXMgdGhlIGZ1bmN0aW9uIHRpdGxlXG4gICAgICAgIGJlZ2luOiBERUNMVFlQRV9BVVRPX1JFLFxuICAgICAgICBrZXl3b3JkczogQ1BQX0tFWVdPUkRTLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiBGVU5DVElPTl9USVRMRSxcbiAgICAgICAgcmV0dXJuQmVnaW46IHRydWUsXG4gICAgICAgIGNvbnRhaW5zOiBbIFRJVExFX01PREUgXSxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdwYXJhbXMnLFxuICAgICAgICBiZWdpbjogL1xcKC8sXG4gICAgICAgIGVuZDogL1xcKS8sXG4gICAgICAgIGtleXdvcmRzOiBDUFBfS0VZV09SRFMsXG4gICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICBDX0xJTkVfQ09NTUVOVF9NT0RFLFxuICAgICAgICAgIGhsanMuQ19CTE9DS19DT01NRU5UX01PREUsXG4gICAgICAgICAgU1RSSU5HUyxcbiAgICAgICAgICBOVU1CRVJTLFxuICAgICAgICAgIENQUF9QUklNSVRJVkVfVFlQRVMsXG4gICAgICAgICAgLy8gQ291bnQgbWF0Y2hpbmcgcGFyZW50aGVzZXMuXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW46IC9cXCgvLFxuICAgICAgICAgICAgZW5kOiAvXFwpLyxcbiAgICAgICAgICAgIGtleXdvcmRzOiBDUFBfS0VZV09SRFMsXG4gICAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgICAnc2VsZicsXG4gICAgICAgICAgICAgIENfTElORV9DT01NRU5UX01PREUsXG4gICAgICAgICAgICAgIGhsanMuQ19CTE9DS19DT01NRU5UX01PREUsXG4gICAgICAgICAgICAgIFNUUklOR1MsXG4gICAgICAgICAgICAgIE5VTUJFUlMsXG4gICAgICAgICAgICAgIENQUF9QUklNSVRJVkVfVFlQRVNcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBDUFBfUFJJTUlUSVZFX1RZUEVTLFxuICAgICAgQ19MSU5FX0NPTU1FTlRfTU9ERSxcbiAgICAgIGhsanMuQ19CTE9DS19DT01NRU5UX01PREUsXG4gICAgICBQUkVQUk9DRVNTT1JcbiAgICBdXG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBcIkNcIixcbiAgICBhbGlhc2VzOiBbXG4gICAgICAnYycsXG4gICAgICAnaCdcbiAgICBdLFxuICAgIGtleXdvcmRzOiBDUFBfS0VZV09SRFMsXG4gICAgLy8gVW50aWwgZGlmZmVyZW50aWF0aW9ucyBhcmUgYWRkZWQgYmV0d2VlbiBgY2AgYW5kIGBjcHBgLCBgY2Agd2lsbFxuICAgIC8vIG5vdCBiZSBhdXRvLWRldGVjdGVkIHRvIGF2b2lkIGF1dG8tZGV0ZWN0IGNvbmZsaWN0cyBiZXR3ZWVuIEMgYW5kIEMrK1xuICAgIGRpc2FibGVBdXRvZGV0ZWN0OiB0cnVlLFxuICAgIGlsbGVnYWw6ICc8LycsXG4gICAgY29udGFpbnM6IFtdLmNvbmNhdChcbiAgICAgIEVYUFJFU1NJT05fQ09OVEVYVCxcbiAgICAgIEZVTkNUSU9OX0RFQ0xBUkFUSU9OLFxuICAgICAgRVhQUkVTU0lPTl9DT05UQUlOUyxcbiAgICAgIFtcbiAgICAgICAgUFJFUFJPQ0VTU09SLFxuICAgICAgICB7IC8vIGNvbnRhaW5lcnM6IGllLCBgdmVjdG9yIDxpbnQ+IHJvb21zICg5KTtgXG4gICAgICAgICAgYmVnaW46ICdcXFxcYihkZXF1ZXxsaXN0fHF1ZXVlfHByaW9yaXR5X3F1ZXVlfHBhaXJ8c3RhY2t8dmVjdG9yfG1hcHxzZXR8Yml0c2V0fG11bHRpc2V0fG11bHRpbWFwfHVub3JkZXJlZF9tYXB8dW5vcmRlcmVkX3NldHx1bm9yZGVyZWRfbXVsdGlzZXR8dW5vcmRlcmVkX211bHRpbWFwfGFycmF5KVxcXFxzKjwnLFxuICAgICAgICAgIGVuZDogJz4nLFxuICAgICAgICAgIGtleXdvcmRzOiBDUFBfS0VZV09SRFMsXG4gICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgICdzZWxmJyxcbiAgICAgICAgICAgIENQUF9QUklNSVRJVkVfVFlQRVNcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBiZWdpbjogaGxqcy5JREVOVF9SRSArICc6OicsXG4gICAgICAgICAga2V5d29yZHM6IENQUF9LRVlXT1JEU1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgY2xhc3NOYW1lOiAnY2xhc3MnLFxuICAgICAgICAgIGJlZ2luS2V5d29yZHM6ICdlbnVtIGNsYXNzIHN0cnVjdCB1bmlvbicsXG4gICAgICAgICAgZW5kOiAvW3s7Ojw+PV0vLFxuICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGJlZ2luS2V5d29yZHM6IFwiZmluYWwgY2xhc3Mgc3RydWN0XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBobGpzLlRJVExFX01PREVcbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF0pLFxuICAgIGV4cG9ydHM6IHtcbiAgICAgIHByZXByb2Nlc3NvcjogUFJFUFJPQ0VTU09SLFxuICAgICAgc3RyaW5nczogU1RSSU5HUyxcbiAgICAgIGtleXdvcmRzOiBDUFBfS0VZV09SRFNcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYztcbiJdLCJzb3VyY2VSb290IjoiIn0=