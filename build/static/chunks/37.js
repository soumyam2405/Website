(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[37],{

/***/ "./node_modules/highlight.js/lib/languages/crystal.js":
/*!************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/crystal.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Crystal
Author: TSUYUSATO Kitsune <make.just.on@gmail.com>
Website: https://crystal-lang.org
*/

/** @type LanguageFn */
function crystal(hljs) {
  const INT_SUFFIX = '(_?[ui](8|16|32|64|128))?';
  const FLOAT_SUFFIX = '(_?f(32|64))?';
  const CRYSTAL_IDENT_RE = '[a-zA-Z_]\\w*[!?=]?';
  const CRYSTAL_METHOD_RE = '[a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|[=!]~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~|]|//|//=|&[-+*]=?|&\\*\\*|\\[\\][=?]?';
  const CRYSTAL_PATH_RE = '[A-Za-z_]\\w*(::\\w+)*(\\?|!)?';
  const CRYSTAL_KEYWORDS = {
    $pattern: CRYSTAL_IDENT_RE,
    keyword:
      'abstract alias annotation as as? asm begin break case class def do else elsif end ensure enum extend for fun if ' +
      'include instance_sizeof is_a? lib macro module next nil? of out pointerof private protected rescue responds_to? ' +
      'return require select self sizeof struct super then type typeof union uninitialized unless until verbatim when while with yield ' +
      '__DIR__ __END_LINE__ __FILE__ __LINE__',
    literal: 'false nil true'
  };
  const SUBST = {
    className: 'subst',
    begin: /#\{/,
    end: /\}/,
    keywords: CRYSTAL_KEYWORDS
  };
  const EXPANSION = {
    className: 'template-variable',
    variants: [
      {
        begin: '\\{\\{',
        end: '\\}\\}'
      },
      {
        begin: '\\{%',
        end: '%\\}'
      }
    ],
    keywords: CRYSTAL_KEYWORDS
  };

  function recursiveParen(begin, end) {
    const
        contains = [
          {
            begin: begin,
            end: end
          }
        ];
    contains[0].contains = contains;
    return contains;
  }
  const STRING = {
    className: 'string',
    contains: [
      hljs.BACKSLASH_ESCAPE,
      SUBST
    ],
    variants: [
      {
        begin: /'/,
        end: /'/
      },
      {
        begin: /"/,
        end: /"/
      },
      {
        begin: /`/,
        end: /`/
      },
      {
        begin: '%[Qwi]?\\(',
        end: '\\)',
        contains: recursiveParen('\\(', '\\)')
      },
      {
        begin: '%[Qwi]?\\[',
        end: '\\]',
        contains: recursiveParen('\\[', '\\]')
      },
      {
        begin: '%[Qwi]?\\{',
        end: /\}/,
        contains: recursiveParen(/\{/, /\}/)
      },
      {
        begin: '%[Qwi]?<',
        end: '>',
        contains: recursiveParen('<', '>')
      },
      {
        begin: '%[Qwi]?\\|',
        end: '\\|'
      },
      {
        begin: /<<-\w+$/,
        end: /^\s*\w+$/
      }
    ],
    relevance: 0
  };
  const Q_STRING = {
    className: 'string',
    variants: [
      {
        begin: '%q\\(',
        end: '\\)',
        contains: recursiveParen('\\(', '\\)')
      },
      {
        begin: '%q\\[',
        end: '\\]',
        contains: recursiveParen('\\[', '\\]')
      },
      {
        begin: '%q\\{',
        end: /\}/,
        contains: recursiveParen(/\{/, /\}/)
      },
      {
        begin: '%q<',
        end: '>',
        contains: recursiveParen('<', '>')
      },
      {
        begin: '%q\\|',
        end: '\\|'
      },
      {
        begin: /<<-'\w+'$/,
        end: /^\s*\w+$/
      }
    ],
    relevance: 0
  };
  const REGEXP = {
    begin: '(?!%\\})(' + hljs.RE_STARTERS_RE + '|\\n|\\b(case|if|select|unless|until|when|while)\\b)\\s*',
    keywords: 'case if select unless until when while',
    contains: [
      {
        className: 'regexp',
        contains: [
          hljs.BACKSLASH_ESCAPE,
          SUBST
        ],
        variants: [
          {
            begin: '//[a-z]*',
            relevance: 0
          },
          {
            begin: '/(?!\\/)',
            end: '/[a-z]*'
          }
        ]
      }
    ],
    relevance: 0
  };
  const REGEXP2 = {
    className: 'regexp',
    contains: [
      hljs.BACKSLASH_ESCAPE,
      SUBST
    ],
    variants: [
      {
        begin: '%r\\(',
        end: '\\)',
        contains: recursiveParen('\\(', '\\)')
      },
      {
        begin: '%r\\[',
        end: '\\]',
        contains: recursiveParen('\\[', '\\]')
      },
      {
        begin: '%r\\{',
        end: /\}/,
        contains: recursiveParen(/\{/, /\}/)
      },
      {
        begin: '%r<',
        end: '>',
        contains: recursiveParen('<', '>')
      },
      {
        begin: '%r\\|',
        end: '\\|'
      }
    ],
    relevance: 0
  };
  const ATTRIBUTE = {
    className: 'meta',
    begin: '@\\[',
    end: '\\]',
    contains: [
      hljs.inherit(hljs.QUOTE_STRING_MODE, {
        className: 'meta-string'
      })
    ]
  };
  const CRYSTAL_DEFAULT_CONTAINS = [
    EXPANSION,
    STRING,
    Q_STRING,
    REGEXP2,
    REGEXP,
    ATTRIBUTE,
    hljs.HASH_COMMENT_MODE,
    {
      className: 'class',
      beginKeywords: 'class module struct',
      end: '$|;',
      illegal: /=/,
      contains: [
        hljs.HASH_COMMENT_MODE,
        hljs.inherit(hljs.TITLE_MODE, {
          begin: CRYSTAL_PATH_RE
        }),
        { // relevance booster for inheritance
          begin: '<'
        }
      ]
    },
    {
      className: 'class',
      beginKeywords: 'lib enum union',
      end: '$|;',
      illegal: /=/,
      contains: [
        hljs.HASH_COMMENT_MODE,
        hljs.inherit(hljs.TITLE_MODE, {
          begin: CRYSTAL_PATH_RE
        })
      ]
    },
    {
      beginKeywords: 'annotation',
      end: '$|;',
      illegal: /=/,
      contains: [
        hljs.HASH_COMMENT_MODE,
        hljs.inherit(hljs.TITLE_MODE, {
          begin: CRYSTAL_PATH_RE
        })
      ],
      relevance: 2
    },
    {
      className: 'function',
      beginKeywords: 'def',
      end: /\B\b/,
      contains: [
        hljs.inherit(hljs.TITLE_MODE, {
          begin: CRYSTAL_METHOD_RE,
          endsParent: true
        })
      ]
    },
    {
      className: 'function',
      beginKeywords: 'fun macro',
      end: /\B\b/,
      contains: [
        hljs.inherit(hljs.TITLE_MODE, {
          begin: CRYSTAL_METHOD_RE,
          endsParent: true
        })
      ],
      relevance: 2
    },
    {
      className: 'symbol',
      begin: hljs.UNDERSCORE_IDENT_RE + '(!|\\?)?:',
      relevance: 0
    },
    {
      className: 'symbol',
      begin: ':',
      contains: [
        STRING,
        {
          begin: CRYSTAL_METHOD_RE
        }
      ],
      relevance: 0
    },
    {
      className: 'number',
      variants: [
        {
          begin: '\\b0b([01_]+)' + INT_SUFFIX
        },
        {
          begin: '\\b0o([0-7_]+)' + INT_SUFFIX
        },
        {
          begin: '\\b0x([A-Fa-f0-9_]+)' + INT_SUFFIX
        },
        {
          begin: '\\b([1-9][0-9_]*[0-9]|[0-9])(\\.[0-9][0-9_]*)?([eE]_?[-+]?[0-9_]*)?' + FLOAT_SUFFIX + '(?!_)'
        },
        {
          begin: '\\b([1-9][0-9_]*|0)' + INT_SUFFIX
        }
      ],
      relevance: 0
    }
  ];
  SUBST.contains = CRYSTAL_DEFAULT_CONTAINS;
  EXPANSION.contains = CRYSTAL_DEFAULT_CONTAINS.slice(1); // without EXPANSION

  return {
    name: 'Crystal',
    aliases: [ 'cr' ],
    keywords: CRYSTAL_KEYWORDS,
    contains: CRYSTAL_DEFAULT_CONTAINS
  };
}

module.exports = crystal;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2NyeXN0YWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2YsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixHQUFHO0FBQ3RCLGlCQUFpQixHQUFHO0FBQ3BCLE9BQU87QUFDUDtBQUNBLG1CQUFtQjtBQUNuQixrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSwwQkFBMEI7QUFDMUIsZ0JBQWdCO0FBQ2hCLG9DQUFvQyxNQUFNO0FBQzFDLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLHFCQUFxQjtBQUNyQixnQkFBZ0I7QUFDaEIsb0NBQW9DLE1BQU07QUFDMUMsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EscUJBQXFCO0FBQ3JCLGdCQUFnQjtBQUNoQixvQ0FBb0MsTUFBTTtBQUMxQyxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlEOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJzdGF0aWMvY2h1bmtzLzM3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBDcnlzdGFsXG5BdXRob3I6IFRTVVlVU0FUTyBLaXRzdW5lIDxtYWtlLmp1c3Qub25AZ21haWwuY29tPlxuV2Vic2l0ZTogaHR0cHM6Ly9jcnlzdGFsLWxhbmcub3JnXG4qL1xuXG4vKiogQHR5cGUgTGFuZ3VhZ2VGbiAqL1xuZnVuY3Rpb24gY3J5c3RhbChobGpzKSB7XG4gIGNvbnN0IElOVF9TVUZGSVggPSAnKF8/W3VpXSg4fDE2fDMyfDY0fDEyOCkpPyc7XG4gIGNvbnN0IEZMT0FUX1NVRkZJWCA9ICcoXz9mKDMyfDY0KSk/JztcbiAgY29uc3QgQ1JZU1RBTF9JREVOVF9SRSA9ICdbYS16QS1aX11cXFxcdypbIT89XT8nO1xuICBjb25zdCBDUllTVEFMX01FVEhPRF9SRSA9ICdbYS16QS1aX11cXFxcdypbIT89XT98Wy0rfl1AfDw8fD4+fFs9IV1+fD09PT98PD0+fFs8Pl09P3xcXFxcKlxcXFwqfFstLyslXiYqfnxdfC8vfC8vPXwmWy0rKl09P3wmXFxcXCpcXFxcKnxcXFxcW1xcXFxdWz0/XT8nO1xuICBjb25zdCBDUllTVEFMX1BBVEhfUkUgPSAnW0EtWmEtel9dXFxcXHcqKDo6XFxcXHcrKSooXFxcXD98ISk/JztcbiAgY29uc3QgQ1JZU1RBTF9LRVlXT1JEUyA9IHtcbiAgICAkcGF0dGVybjogQ1JZU1RBTF9JREVOVF9SRSxcbiAgICBrZXl3b3JkOlxuICAgICAgJ2Fic3RyYWN0IGFsaWFzIGFubm90YXRpb24gYXMgYXM/IGFzbSBiZWdpbiBicmVhayBjYXNlIGNsYXNzIGRlZiBkbyBlbHNlIGVsc2lmIGVuZCBlbnN1cmUgZW51bSBleHRlbmQgZm9yIGZ1biBpZiAnICtcbiAgICAgICdpbmNsdWRlIGluc3RhbmNlX3NpemVvZiBpc19hPyBsaWIgbWFjcm8gbW9kdWxlIG5leHQgbmlsPyBvZiBvdXQgcG9pbnRlcm9mIHByaXZhdGUgcHJvdGVjdGVkIHJlc2N1ZSByZXNwb25kc190bz8gJyArXG4gICAgICAncmV0dXJuIHJlcXVpcmUgc2VsZWN0IHNlbGYgc2l6ZW9mIHN0cnVjdCBzdXBlciB0aGVuIHR5cGUgdHlwZW9mIHVuaW9uIHVuaW5pdGlhbGl6ZWQgdW5sZXNzIHVudGlsIHZlcmJhdGltIHdoZW4gd2hpbGUgd2l0aCB5aWVsZCAnICtcbiAgICAgICdfX0RJUl9fIF9fRU5EX0xJTkVfXyBfX0ZJTEVfXyBfX0xJTkVfXycsXG4gICAgbGl0ZXJhbDogJ2ZhbHNlIG5pbCB0cnVlJ1xuICB9O1xuICBjb25zdCBTVUJTVCA9IHtcbiAgICBjbGFzc05hbWU6ICdzdWJzdCcsXG4gICAgYmVnaW46IC8jXFx7LyxcbiAgICBlbmQ6IC9cXH0vLFxuICAgIGtleXdvcmRzOiBDUllTVEFMX0tFWVdPUkRTXG4gIH07XG4gIGNvbnN0IEVYUEFOU0lPTiA9IHtcbiAgICBjbGFzc05hbWU6ICd0ZW1wbGF0ZS12YXJpYWJsZScsXG4gICAgdmFyaWFudHM6IFtcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICdcXFxce1xcXFx7JyxcbiAgICAgICAgZW5kOiAnXFxcXH1cXFxcfSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnXFxcXHslJyxcbiAgICAgICAgZW5kOiAnJVxcXFx9J1xuICAgICAgfVxuICAgIF0sXG4gICAga2V5d29yZHM6IENSWVNUQUxfS0VZV09SRFNcbiAgfTtcblxuICBmdW5jdGlvbiByZWN1cnNpdmVQYXJlbihiZWdpbiwgZW5kKSB7XG4gICAgY29uc3RcbiAgICAgICAgY29udGFpbnMgPSBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW46IGJlZ2luLFxuICAgICAgICAgICAgZW5kOiBlbmRcbiAgICAgICAgICB9XG4gICAgICAgIF07XG4gICAgY29udGFpbnNbMF0uY29udGFpbnMgPSBjb250YWlucztcbiAgICByZXR1cm4gY29udGFpbnM7XG4gIH1cbiAgY29uc3QgU1RSSU5HID0ge1xuICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIGhsanMuQkFDS1NMQVNIX0VTQ0FQRSxcbiAgICAgIFNVQlNUXG4gICAgXSxcbiAgICB2YXJpYW50czogW1xuICAgICAge1xuICAgICAgICBiZWdpbjogLycvLFxuICAgICAgICBlbmQ6IC8nL1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IC9cIi8sXG4gICAgICAgIGVuZDogL1wiL1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IC9gLyxcbiAgICAgICAgZW5kOiAvYC9cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnJVtRd2ldP1xcXFwoJyxcbiAgICAgICAgZW5kOiAnXFxcXCknLFxuICAgICAgICBjb250YWluczogcmVjdXJzaXZlUGFyZW4oJ1xcXFwoJywgJ1xcXFwpJylcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnJVtRd2ldP1xcXFxbJyxcbiAgICAgICAgZW5kOiAnXFxcXF0nLFxuICAgICAgICBjb250YWluczogcmVjdXJzaXZlUGFyZW4oJ1xcXFxbJywgJ1xcXFxdJylcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnJVtRd2ldP1xcXFx7JyxcbiAgICAgICAgZW5kOiAvXFx9LyxcbiAgICAgICAgY29udGFpbnM6IHJlY3Vyc2l2ZVBhcmVuKC9cXHsvLCAvXFx9LylcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnJVtRd2ldPzwnLFxuICAgICAgICBlbmQ6ICc+JyxcbiAgICAgICAgY29udGFpbnM6IHJlY3Vyc2l2ZVBhcmVuKCc8JywgJz4nKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICclW1F3aV0/XFxcXHwnLFxuICAgICAgICBlbmQ6ICdcXFxcfCdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAvPDwtXFx3KyQvLFxuICAgICAgICBlbmQ6IC9eXFxzKlxcdyskL1xuICAgICAgfVxuICAgIF0sXG4gICAgcmVsZXZhbmNlOiAwXG4gIH07XG4gIGNvbnN0IFFfU1RSSU5HID0ge1xuICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgdmFyaWFudHM6IFtcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICclcVxcXFwoJyxcbiAgICAgICAgZW5kOiAnXFxcXCknLFxuICAgICAgICBjb250YWluczogcmVjdXJzaXZlUGFyZW4oJ1xcXFwoJywgJ1xcXFwpJylcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnJXFcXFxcWycsXG4gICAgICAgIGVuZDogJ1xcXFxdJyxcbiAgICAgICAgY29udGFpbnM6IHJlY3Vyc2l2ZVBhcmVuKCdcXFxcWycsICdcXFxcXScpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogJyVxXFxcXHsnLFxuICAgICAgICBlbmQ6IC9cXH0vLFxuICAgICAgICBjb250YWluczogcmVjdXJzaXZlUGFyZW4oL1xcey8sIC9cXH0vKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICclcTwnLFxuICAgICAgICBlbmQ6ICc+JyxcbiAgICAgICAgY29udGFpbnM6IHJlY3Vyc2l2ZVBhcmVuKCc8JywgJz4nKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICclcVxcXFx8JyxcbiAgICAgICAgZW5kOiAnXFxcXHwnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogLzw8LSdcXHcrJyQvLFxuICAgICAgICBlbmQ6IC9eXFxzKlxcdyskL1xuICAgICAgfVxuICAgIF0sXG4gICAgcmVsZXZhbmNlOiAwXG4gIH07XG4gIGNvbnN0IFJFR0VYUCA9IHtcbiAgICBiZWdpbjogJyg/ISVcXFxcfSkoJyArIGhsanMuUkVfU1RBUlRFUlNfUkUgKyAnfFxcXFxufFxcXFxiKGNhc2V8aWZ8c2VsZWN0fHVubGVzc3x1bnRpbHx3aGVufHdoaWxlKVxcXFxiKVxcXFxzKicsXG4gICAga2V5d29yZHM6ICdjYXNlIGlmIHNlbGVjdCB1bmxlc3MgdW50aWwgd2hlbiB3aGlsZScsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAncmVnZXhwJyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICBobGpzLkJBQ0tTTEFTSF9FU0NBUEUsXG4gICAgICAgICAgU1VCU1RcbiAgICAgICAgXSxcbiAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogJy8vW2Etel0qJyxcbiAgICAgICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW46ICcvKD8hXFxcXC8pJyxcbiAgICAgICAgICAgIGVuZDogJy9bYS16XSonXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXSxcbiAgICByZWxldmFuY2U6IDBcbiAgfTtcbiAgY29uc3QgUkVHRVhQMiA9IHtcbiAgICBjbGFzc05hbWU6ICdyZWdleHAnLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBobGpzLkJBQ0tTTEFTSF9FU0NBUEUsXG4gICAgICBTVUJTVFxuICAgIF0sXG4gICAgdmFyaWFudHM6IFtcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICclclxcXFwoJyxcbiAgICAgICAgZW5kOiAnXFxcXCknLFxuICAgICAgICBjb250YWluczogcmVjdXJzaXZlUGFyZW4oJ1xcXFwoJywgJ1xcXFwpJylcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnJXJcXFxcWycsXG4gICAgICAgIGVuZDogJ1xcXFxdJyxcbiAgICAgICAgY29udGFpbnM6IHJlY3Vyc2l2ZVBhcmVuKCdcXFxcWycsICdcXFxcXScpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogJyVyXFxcXHsnLFxuICAgICAgICBlbmQ6IC9cXH0vLFxuICAgICAgICBjb250YWluczogcmVjdXJzaXZlUGFyZW4oL1xcey8sIC9cXH0vKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICclcjwnLFxuICAgICAgICBlbmQ6ICc+JyxcbiAgICAgICAgY29udGFpbnM6IHJlY3Vyc2l2ZVBhcmVuKCc8JywgJz4nKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICclclxcXFx8JyxcbiAgICAgICAgZW5kOiAnXFxcXHwnXG4gICAgICB9XG4gICAgXSxcbiAgICByZWxldmFuY2U6IDBcbiAgfTtcbiAgY29uc3QgQVRUUklCVVRFID0ge1xuICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgIGJlZ2luOiAnQFxcXFxbJyxcbiAgICBlbmQ6ICdcXFxcXScsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIGhsanMuaW5oZXJpdChobGpzLlFVT1RFX1NUUklOR19NT0RFLCB7XG4gICAgICAgIGNsYXNzTmFtZTogJ21ldGEtc3RyaW5nJ1xuICAgICAgfSlcbiAgICBdXG4gIH07XG4gIGNvbnN0IENSWVNUQUxfREVGQVVMVF9DT05UQUlOUyA9IFtcbiAgICBFWFBBTlNJT04sXG4gICAgU1RSSU5HLFxuICAgIFFfU1RSSU5HLFxuICAgIFJFR0VYUDIsXG4gICAgUkVHRVhQLFxuICAgIEFUVFJJQlVURSxcbiAgICBobGpzLkhBU0hfQ09NTUVOVF9NT0RFLFxuICAgIHtcbiAgICAgIGNsYXNzTmFtZTogJ2NsYXNzJyxcbiAgICAgIGJlZ2luS2V5d29yZHM6ICdjbGFzcyBtb2R1bGUgc3RydWN0JyxcbiAgICAgIGVuZDogJyR8OycsXG4gICAgICBpbGxlZ2FsOiAvPS8sXG4gICAgICBjb250YWluczogW1xuICAgICAgICBobGpzLkhBU0hfQ09NTUVOVF9NT0RFLFxuICAgICAgICBobGpzLmluaGVyaXQoaGxqcy5USVRMRV9NT0RFLCB7XG4gICAgICAgICAgYmVnaW46IENSWVNUQUxfUEFUSF9SRVxuICAgICAgICB9KSxcbiAgICAgICAgeyAvLyByZWxldmFuY2UgYm9vc3RlciBmb3IgaW5oZXJpdGFuY2VcbiAgICAgICAgICBiZWdpbjogJzwnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIGNsYXNzTmFtZTogJ2NsYXNzJyxcbiAgICAgIGJlZ2luS2V5d29yZHM6ICdsaWIgZW51bSB1bmlvbicsXG4gICAgICBlbmQ6ICckfDsnLFxuICAgICAgaWxsZWdhbDogLz0vLFxuICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgaGxqcy5IQVNIX0NPTU1FTlRfTU9ERSxcbiAgICAgICAgaGxqcy5pbmhlcml0KGhsanMuVElUTEVfTU9ERSwge1xuICAgICAgICAgIGJlZ2luOiBDUllTVEFMX1BBVEhfUkVcbiAgICAgICAgfSlcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIGJlZ2luS2V5d29yZHM6ICdhbm5vdGF0aW9uJyxcbiAgICAgIGVuZDogJyR8OycsXG4gICAgICBpbGxlZ2FsOiAvPS8sXG4gICAgICBjb250YWluczogW1xuICAgICAgICBobGpzLkhBU0hfQ09NTUVOVF9NT0RFLFxuICAgICAgICBobGpzLmluaGVyaXQoaGxqcy5USVRMRV9NT0RFLCB7XG4gICAgICAgICAgYmVnaW46IENSWVNUQUxfUEFUSF9SRVxuICAgICAgICB9KVxuICAgICAgXSxcbiAgICAgIHJlbGV2YW5jZTogMlxuICAgIH0sXG4gICAge1xuICAgICAgY2xhc3NOYW1lOiAnZnVuY3Rpb24nLFxuICAgICAgYmVnaW5LZXl3b3JkczogJ2RlZicsXG4gICAgICBlbmQ6IC9cXEJcXGIvLFxuICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgaGxqcy5pbmhlcml0KGhsanMuVElUTEVfTU9ERSwge1xuICAgICAgICAgIGJlZ2luOiBDUllTVEFMX01FVEhPRF9SRSxcbiAgICAgICAgICBlbmRzUGFyZW50OiB0cnVlXG4gICAgICAgIH0pXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBjbGFzc05hbWU6ICdmdW5jdGlvbicsXG4gICAgICBiZWdpbktleXdvcmRzOiAnZnVuIG1hY3JvJyxcbiAgICAgIGVuZDogL1xcQlxcYi8sXG4gICAgICBjb250YWluczogW1xuICAgICAgICBobGpzLmluaGVyaXQoaGxqcy5USVRMRV9NT0RFLCB7XG4gICAgICAgICAgYmVnaW46IENSWVNUQUxfTUVUSE9EX1JFLFxuICAgICAgICAgIGVuZHNQYXJlbnQ6IHRydWVcbiAgICAgICAgfSlcbiAgICAgIF0sXG4gICAgICByZWxldmFuY2U6IDJcbiAgICB9LFxuICAgIHtcbiAgICAgIGNsYXNzTmFtZTogJ3N5bWJvbCcsXG4gICAgICBiZWdpbjogaGxqcy5VTkRFUlNDT1JFX0lERU5UX1JFICsgJyghfFxcXFw/KT86JyxcbiAgICAgIHJlbGV2YW5jZTogMFxuICAgIH0sXG4gICAge1xuICAgICAgY2xhc3NOYW1lOiAnc3ltYm9sJyxcbiAgICAgIGJlZ2luOiAnOicsXG4gICAgICBjb250YWluczogW1xuICAgICAgICBTVFJJTkcsXG4gICAgICAgIHtcbiAgICAgICAgICBiZWdpbjogQ1JZU1RBTF9NRVRIT0RfUkVcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIHJlbGV2YW5jZTogMFxuICAgIH0sXG4gICAge1xuICAgICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBiZWdpbjogJ1xcXFxiMGIoWzAxX10rKScgKyBJTlRfU1VGRklYXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBiZWdpbjogJ1xcXFxiMG8oWzAtN19dKyknICsgSU5UX1NVRkZJWFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgYmVnaW46ICdcXFxcYjB4KFtBLUZhLWYwLTlfXSspJyArIElOVF9TVUZGSVhcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGJlZ2luOiAnXFxcXGIoWzEtOV1bMC05X10qWzAtOV18WzAtOV0pKFxcXFwuWzAtOV1bMC05X10qKT8oW2VFXV8/Wy0rXT9bMC05X10qKT8nICsgRkxPQVRfU1VGRklYICsgJyg/IV8pJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgYmVnaW46ICdcXFxcYihbMS05XVswLTlfXSp8MCknICsgSU5UX1NVRkZJWFxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgcmVsZXZhbmNlOiAwXG4gICAgfVxuICBdO1xuICBTVUJTVC5jb250YWlucyA9IENSWVNUQUxfREVGQVVMVF9DT05UQUlOUztcbiAgRVhQQU5TSU9OLmNvbnRhaW5zID0gQ1JZU1RBTF9ERUZBVUxUX0NPTlRBSU5TLnNsaWNlKDEpOyAvLyB3aXRob3V0IEVYUEFOU0lPTlxuXG4gIHJldHVybiB7XG4gICAgbmFtZTogJ0NyeXN0YWwnLFxuICAgIGFsaWFzZXM6IFsgJ2NyJyBdLFxuICAgIGtleXdvcmRzOiBDUllTVEFMX0tFWVdPUkRTLFxuICAgIGNvbnRhaW5zOiBDUllTVEFMX0RFRkFVTFRfQ09OVEFJTlNcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcnlzdGFsO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==