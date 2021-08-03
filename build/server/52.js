exports.ids = [52];
exports.modules = {

/***/ "./node_modules/highlight.js/lib/languages/elixir.js":
/*!***********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/elixir.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Elixir
Author: Josh Adams <josh@isotope11.com>
Description: language definition for Elixir source code files (.ex and .exs).  Based on ruby language support.
Category: functional
Website: https://elixir-lang.org
*/

/** @type LanguageFn */
function elixir(hljs) {
  const ELIXIR_IDENT_RE = '[a-zA-Z_][a-zA-Z0-9_.]*(!|\\?)?';
  const ELIXIR_METHOD_RE = '[a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?';
  const ELIXIR_KEYWORDS = {
    $pattern: ELIXIR_IDENT_RE,
    keyword: 'and false then defined module in return redo retry end for true self when ' +
    'next until do begin unless nil break not case cond alias while ensure or ' +
    'include use alias fn quote require import with|0'
  };
  const SUBST = {
    className: 'subst',
    begin: /#\{/,
    end: /\}/,
    keywords: ELIXIR_KEYWORDS
  };
  const NUMBER = {
    className: 'number',
    begin: '(\\b0o[0-7_]+)|(\\b0b[01_]+)|(\\b0x[0-9a-fA-F_]+)|(-?\\b[1-9][0-9_]*(\\.[0-9_]+([eE][-+]?[0-9]+)?)?)',
    relevance: 0
  };
  const SIGIL_DELIMITERS = '[/|([{<"\']';
  const LOWERCASE_SIGIL = {
    className: 'string',
    begin: '~[a-z]' + '(?=' + SIGIL_DELIMITERS + ')',
    contains: [
      {
        endsParent: true,
        contains: [
          {
            contains: [
              hljs.BACKSLASH_ESCAPE,
              SUBST
            ],
            variants: [
              {
                begin: /"/,
                end: /"/
              },
              {
                begin: /'/,
                end: /'/
              },
              {
                begin: /\//,
                end: /\//
              },
              {
                begin: /\|/,
                end: /\|/
              },
              {
                begin: /\(/,
                end: /\)/
              },
              {
                begin: /\[/,
                end: /\]/
              },
              {
                begin: /\{/,
                end: /\}/
              },
              {
                begin: /</,
                end: />/
              }
            ]
          }
        ]
      }
    ]
  };

  const UPCASE_SIGIL = {
    className: 'string',
    begin: '~[A-Z]' + '(?=' + SIGIL_DELIMITERS + ')',
    contains: [
      {
        begin: /"/,
        end: /"/
      },
      {
        begin: /'/,
        end: /'/
      },
      {
        begin: /\//,
        end: /\//
      },
      {
        begin: /\|/,
        end: /\|/
      },
      {
        begin: /\(/,
        end: /\)/
      },
      {
        begin: /\[/,
        end: /\]/
      },
      {
        begin: /\{/,
        end: /\}/
      },
      {
        begin: /</,
        end: />/
      }
    ]
  };

  const STRING = {
    className: 'string',
    contains: [
      hljs.BACKSLASH_ESCAPE,
      SUBST
    ],
    variants: [
      {
        begin: /"""/,
        end: /"""/
      },
      {
        begin: /'''/,
        end: /'''/
      },
      {
        begin: /~S"""/,
        end: /"""/,
        contains: [] // override default
      },
      {
        begin: /~S"/,
        end: /"/,
        contains: [] // override default
      },
      {
        begin: /~S'''/,
        end: /'''/,
        contains: [] // override default
      },
      {
        begin: /~S'/,
        end: /'/,
        contains: [] // override default
      },
      {
        begin: /'/,
        end: /'/
      },
      {
        begin: /"/,
        end: /"/
      }
    ]
  };
  const FUNCTION = {
    className: 'function',
    beginKeywords: 'def defp defmacro',
    end: /\B\b/, // the mode is ended by the title
    contains: [
      hljs.inherit(hljs.TITLE_MODE, {
        begin: ELIXIR_IDENT_RE,
        endsParent: true
      })
    ]
  };
  const CLASS = hljs.inherit(FUNCTION, {
    className: 'class',
    beginKeywords: 'defimpl defmodule defprotocol defrecord',
    end: /\bdo\b|$|;/
  });
  const ELIXIR_DEFAULT_CONTAINS = [
    STRING,
    UPCASE_SIGIL,
    LOWERCASE_SIGIL,
    hljs.HASH_COMMENT_MODE,
    CLASS,
    FUNCTION,
    {
      begin: '::'
    },
    {
      className: 'symbol',
      begin: ':(?![\\s:])',
      contains: [
        STRING,
        {
          begin: ELIXIR_METHOD_RE
        }
      ],
      relevance: 0
    },
    {
      className: 'symbol',
      begin: ELIXIR_IDENT_RE + ':(?!:)',
      relevance: 0
    },
    NUMBER,
    {
      className: 'variable',
      begin: '(\\$\\W)|((\\$|@@?)(\\w+))'
    },
    {
      begin: '->'
    },
    { // regexp container
      begin: '(' + hljs.RE_STARTERS_RE + ')\\s*',
      contains: [
        hljs.HASH_COMMENT_MODE,
        {
          // to prevent false regex triggers for the division function:
          // /:
          begin: /\/: (?=\d+\s*[,\]])/,
          relevance: 0,
          contains: [NUMBER]
        },
        {
          className: 'regexp',
          illegal: '\\n',
          contains: [
            hljs.BACKSLASH_ESCAPE,
            SUBST
          ],
          variants: [
            {
              begin: '/',
              end: '/[a-z]*'
            },
            {
              begin: '%r\\[',
              end: '\\][a-z]*'
            }
          ]
        }
      ],
      relevance: 0
    }
  ];
  SUBST.contains = ELIXIR_DEFAULT_CONTAINS;

  return {
    name: 'Elixir',
    keywords: ELIXIR_KEYWORDS,
    contains: ELIXIR_DEFAULT_CONTAINS
  };
}

module.exports = elixir;


/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvZWxpeGlyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2YsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQSwwQkFBMEI7QUFDMUIsd0JBQXdCO0FBQ3hCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0Esa0JBQWtCO0FBQ2xCLGdCQUFnQjtBQUNoQixPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiNTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuTGFuZ3VhZ2U6IEVsaXhpclxuQXV0aG9yOiBKb3NoIEFkYW1zIDxqb3NoQGlzb3RvcGUxMS5jb20+XG5EZXNjcmlwdGlvbjogbGFuZ3VhZ2UgZGVmaW5pdGlvbiBmb3IgRWxpeGlyIHNvdXJjZSBjb2RlIGZpbGVzICguZXggYW5kIC5leHMpLiAgQmFzZWQgb24gcnVieSBsYW5ndWFnZSBzdXBwb3J0LlxuQ2F0ZWdvcnk6IGZ1bmN0aW9uYWxcbldlYnNpdGU6IGh0dHBzOi8vZWxpeGlyLWxhbmcub3JnXG4qL1xuXG4vKiogQHR5cGUgTGFuZ3VhZ2VGbiAqL1xuZnVuY3Rpb24gZWxpeGlyKGhsanMpIHtcbiAgY29uc3QgRUxJWElSX0lERU5UX1JFID0gJ1thLXpBLVpfXVthLXpBLVowLTlfLl0qKCF8XFxcXD8pPyc7XG4gIGNvbnN0IEVMSVhJUl9NRVRIT0RfUkUgPSAnW2EtekEtWl9dXFxcXHcqWyE/PV0/fFstK35dQHw8PHw+Pnw9fnw9PT0/fDw9PnxbPD5dPT98XFxcXCpcXFxcKnxbLS8rJV4mKn5gfF18XFxcXFtcXFxcXT0/JztcbiAgY29uc3QgRUxJWElSX0tFWVdPUkRTID0ge1xuICAgICRwYXR0ZXJuOiBFTElYSVJfSURFTlRfUkUsXG4gICAga2V5d29yZDogJ2FuZCBmYWxzZSB0aGVuIGRlZmluZWQgbW9kdWxlIGluIHJldHVybiByZWRvIHJldHJ5IGVuZCBmb3IgdHJ1ZSBzZWxmIHdoZW4gJyArXG4gICAgJ25leHQgdW50aWwgZG8gYmVnaW4gdW5sZXNzIG5pbCBicmVhayBub3QgY2FzZSBjb25kIGFsaWFzIHdoaWxlIGVuc3VyZSBvciAnICtcbiAgICAnaW5jbHVkZSB1c2UgYWxpYXMgZm4gcXVvdGUgcmVxdWlyZSBpbXBvcnQgd2l0aHwwJ1xuICB9O1xuICBjb25zdCBTVUJTVCA9IHtcbiAgICBjbGFzc05hbWU6ICdzdWJzdCcsXG4gICAgYmVnaW46IC8jXFx7LyxcbiAgICBlbmQ6IC9cXH0vLFxuICAgIGtleXdvcmRzOiBFTElYSVJfS0VZV09SRFNcbiAgfTtcbiAgY29uc3QgTlVNQkVSID0ge1xuICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgYmVnaW46ICcoXFxcXGIwb1swLTdfXSspfChcXFxcYjBiWzAxX10rKXwoXFxcXGIweFswLTlhLWZBLUZfXSspfCgtP1xcXFxiWzEtOV1bMC05X10qKFxcXFwuWzAtOV9dKyhbZUVdWy0rXT9bMC05XSspPyk/KScsXG4gICAgcmVsZXZhbmNlOiAwXG4gIH07XG4gIGNvbnN0IFNJR0lMX0RFTElNSVRFUlMgPSAnWy98KFt7PFwiXFwnXSc7XG4gIGNvbnN0IExPV0VSQ0FTRV9TSUdJTCA9IHtcbiAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgIGJlZ2luOiAnflthLXpdJyArICcoPz0nICsgU0lHSUxfREVMSU1JVEVSUyArICcpJyxcbiAgICBjb250YWluczogW1xuICAgICAge1xuICAgICAgICBlbmRzUGFyZW50OiB0cnVlLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAgIGhsanMuQkFDS1NMQVNIX0VTQ0FQRSxcbiAgICAgICAgICAgICAgU1VCU1RcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYmVnaW46IC9cIi8sXG4gICAgICAgICAgICAgICAgZW5kOiAvXCIvXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBiZWdpbjogLycvLFxuICAgICAgICAgICAgICAgIGVuZDogLycvXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBiZWdpbjogL1xcLy8sXG4gICAgICAgICAgICAgICAgZW5kOiAvXFwvL1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYmVnaW46IC9cXHwvLFxuICAgICAgICAgICAgICAgIGVuZDogL1xcfC9cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJlZ2luOiAvXFwoLyxcbiAgICAgICAgICAgICAgICBlbmQ6IC9cXCkvXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBiZWdpbjogL1xcWy8sXG4gICAgICAgICAgICAgICAgZW5kOiAvXFxdL1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYmVnaW46IC9cXHsvLFxuICAgICAgICAgICAgICAgIGVuZDogL1xcfS9cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJlZ2luOiAvPC8sXG4gICAgICAgICAgICAgICAgZW5kOiAvPi9cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfTtcblxuICBjb25zdCBVUENBU0VfU0lHSUwgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICBiZWdpbjogJ35bQS1aXScgKyAnKD89JyArIFNJR0lMX0RFTElNSVRFUlMgKyAnKScsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IC9cIi8sXG4gICAgICAgIGVuZDogL1wiL1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IC8nLyxcbiAgICAgICAgZW5kOiAvJy9cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAvXFwvLyxcbiAgICAgICAgZW5kOiAvXFwvL1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IC9cXHwvLFxuICAgICAgICBlbmQ6IC9cXHwvXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogL1xcKC8sXG4gICAgICAgIGVuZDogL1xcKS9cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAvXFxbLyxcbiAgICAgICAgZW5kOiAvXFxdL1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IC9cXHsvLFxuICAgICAgICBlbmQ6IC9cXH0vXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogLzwvLFxuICAgICAgICBlbmQ6IC8+L1xuICAgICAgfVxuICAgIF1cbiAgfTtcblxuICBjb25zdCBTVFJJTkcgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICBjb250YWluczogW1xuICAgICAgaGxqcy5CQUNLU0xBU0hfRVNDQVBFLFxuICAgICAgU1VCU1RcbiAgICBdLFxuICAgIHZhcmlhbnRzOiBbXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAvXCJcIlwiLyxcbiAgICAgICAgZW5kOiAvXCJcIlwiL1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IC8nJycvLFxuICAgICAgICBlbmQ6IC8nJycvXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogL35TXCJcIlwiLyxcbiAgICAgICAgZW5kOiAvXCJcIlwiLyxcbiAgICAgICAgY29udGFpbnM6IFtdIC8vIG92ZXJyaWRlIGRlZmF1bHRcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAvflNcIi8sXG4gICAgICAgIGVuZDogL1wiLyxcbiAgICAgICAgY29udGFpbnM6IFtdIC8vIG92ZXJyaWRlIGRlZmF1bHRcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAvflMnJycvLFxuICAgICAgICBlbmQ6IC8nJycvLFxuICAgICAgICBjb250YWluczogW10gLy8gb3ZlcnJpZGUgZGVmYXVsdFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IC9+UycvLFxuICAgICAgICBlbmQ6IC8nLyxcbiAgICAgICAgY29udGFpbnM6IFtdIC8vIG92ZXJyaWRlIGRlZmF1bHRcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAvJy8sXG4gICAgICAgIGVuZDogLycvXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogL1wiLyxcbiAgICAgICAgZW5kOiAvXCIvXG4gICAgICB9XG4gICAgXVxuICB9O1xuICBjb25zdCBGVU5DVElPTiA9IHtcbiAgICBjbGFzc05hbWU6ICdmdW5jdGlvbicsXG4gICAgYmVnaW5LZXl3b3JkczogJ2RlZiBkZWZwIGRlZm1hY3JvJyxcbiAgICBlbmQ6IC9cXEJcXGIvLCAvLyB0aGUgbW9kZSBpcyBlbmRlZCBieSB0aGUgdGl0bGVcbiAgICBjb250YWluczogW1xuICAgICAgaGxqcy5pbmhlcml0KGhsanMuVElUTEVfTU9ERSwge1xuICAgICAgICBiZWdpbjogRUxJWElSX0lERU5UX1JFLFxuICAgICAgICBlbmRzUGFyZW50OiB0cnVlXG4gICAgICB9KVxuICAgIF1cbiAgfTtcbiAgY29uc3QgQ0xBU1MgPSBobGpzLmluaGVyaXQoRlVOQ1RJT04sIHtcbiAgICBjbGFzc05hbWU6ICdjbGFzcycsXG4gICAgYmVnaW5LZXl3b3JkczogJ2RlZmltcGwgZGVmbW9kdWxlIGRlZnByb3RvY29sIGRlZnJlY29yZCcsXG4gICAgZW5kOiAvXFxiZG9cXGJ8JHw7L1xuICB9KTtcbiAgY29uc3QgRUxJWElSX0RFRkFVTFRfQ09OVEFJTlMgPSBbXG4gICAgU1RSSU5HLFxuICAgIFVQQ0FTRV9TSUdJTCxcbiAgICBMT1dFUkNBU0VfU0lHSUwsXG4gICAgaGxqcy5IQVNIX0NPTU1FTlRfTU9ERSxcbiAgICBDTEFTUyxcbiAgICBGVU5DVElPTixcbiAgICB7XG4gICAgICBiZWdpbjogJzo6J1xuICAgIH0sXG4gICAge1xuICAgICAgY2xhc3NOYW1lOiAnc3ltYm9sJyxcbiAgICAgIGJlZ2luOiAnOig/IVtcXFxcczpdKScsXG4gICAgICBjb250YWluczogW1xuICAgICAgICBTVFJJTkcsXG4gICAgICAgIHtcbiAgICAgICAgICBiZWdpbjogRUxJWElSX01FVEhPRF9SRVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgcmVsZXZhbmNlOiAwXG4gICAgfSxcbiAgICB7XG4gICAgICBjbGFzc05hbWU6ICdzeW1ib2wnLFxuICAgICAgYmVnaW46IEVMSVhJUl9JREVOVF9SRSArICc6KD8hOiknLFxuICAgICAgcmVsZXZhbmNlOiAwXG4gICAgfSxcbiAgICBOVU1CRVIsXG4gICAge1xuICAgICAgY2xhc3NOYW1lOiAndmFyaWFibGUnLFxuICAgICAgYmVnaW46ICcoXFxcXCRcXFxcVyl8KChcXFxcJHxAQD8pKFxcXFx3KykpJ1xuICAgIH0sXG4gICAge1xuICAgICAgYmVnaW46ICctPidcbiAgICB9LFxuICAgIHsgLy8gcmVnZXhwIGNvbnRhaW5lclxuICAgICAgYmVnaW46ICcoJyArIGhsanMuUkVfU1RBUlRFUlNfUkUgKyAnKVxcXFxzKicsXG4gICAgICBjb250YWluczogW1xuICAgICAgICBobGpzLkhBU0hfQ09NTUVOVF9NT0RFLFxuICAgICAgICB7XG4gICAgICAgICAgLy8gdG8gcHJldmVudCBmYWxzZSByZWdleCB0cmlnZ2VycyBmb3IgdGhlIGRpdmlzaW9uIGZ1bmN0aW9uOlxuICAgICAgICAgIC8vIC86XG4gICAgICAgICAgYmVnaW46IC9cXC86ICg/PVxcZCtcXHMqWyxcXF1dKS8sXG4gICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgIGNvbnRhaW5zOiBbTlVNQkVSXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgY2xhc3NOYW1lOiAncmVnZXhwJyxcbiAgICAgICAgICBpbGxlZ2FsOiAnXFxcXG4nLFxuICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICBobGpzLkJBQ0tTTEFTSF9FU0NBUEUsXG4gICAgICAgICAgICBTVUJTVFxuICAgICAgICAgIF0sXG4gICAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYmVnaW46ICcvJyxcbiAgICAgICAgICAgICAgZW5kOiAnL1thLXpdKidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGJlZ2luOiAnJXJcXFxcWycsXG4gICAgICAgICAgICAgIGVuZDogJ1xcXFxdW2Etel0qJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIHJlbGV2YW5jZTogMFxuICAgIH1cbiAgXTtcbiAgU1VCU1QuY29udGFpbnMgPSBFTElYSVJfREVGQVVMVF9DT05UQUlOUztcblxuICByZXR1cm4ge1xuICAgIG5hbWU6ICdFbGl4aXInLFxuICAgIGtleXdvcmRzOiBFTElYSVJfS0VZV09SRFMsXG4gICAgY29udGFpbnM6IEVMSVhJUl9ERUZBVUxUX0NPTlRBSU5TXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZWxpeGlyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==