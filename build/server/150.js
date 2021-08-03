exports.ids = [150];
exports.modules = {

/***/ "./node_modules/highlight.js/lib/languages/ruby.js":
/*!*********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/ruby.js ***!
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
 * @param {RegExp | string } re
 * @returns {string}
 */
function lookahead(re) {
  return concat('(?=', re, ')');
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
Language: Ruby
Description: Ruby is a dynamic, open source programming language with a focus on simplicity and productivity.
Website: https://www.ruby-lang.org/
Author: Anton Kovalyov <anton@kovalyov.net>
Contributors: Peter Leonov <gojpeg@yandex.ru>, Vasily Polovnyov <vast@whiteants.net>, Loren Segal <lsegal@soen.ca>, Pascal Hurni <phi@ruby-reactive.org>, Cedric Sohrauer <sohrauer@googlemail.com>
Category: common
*/

function ruby(hljs) {
  const RUBY_METHOD_RE = '([a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?)';
  const RUBY_KEYWORDS = {
    keyword:
      'and then defined module in return redo if BEGIN retry end for self when ' +
      'next until do begin unless END rescue else break undef not super class case ' +
      'require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor ' +
      '__FILE__',
    built_in: 'proc lambda',
    literal:
      'true false nil'
  };
  const YARDOCTAG = {
    className: 'doctag',
    begin: '@[A-Za-z]+'
  };
  const IRB_OBJECT = {
    begin: '#<',
    end: '>'
  };
  const COMMENT_MODES = [
    hljs.COMMENT(
      '#',
      '$',
      {
        contains: [ YARDOCTAG ]
      }
    ),
    hljs.COMMENT(
      '^=begin',
      '^=end',
      {
        contains: [ YARDOCTAG ],
        relevance: 10
      }
    ),
    hljs.COMMENT('^__END__', '\\n$')
  ];
  const SUBST = {
    className: 'subst',
    begin: /#\{/,
    end: /\}/,
    keywords: RUBY_KEYWORDS
  };
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
        begin: /%[qQwWx]?\(/,
        end: /\)/
      },
      {
        begin: /%[qQwWx]?\[/,
        end: /\]/
      },
      {
        begin: /%[qQwWx]?\{/,
        end: /\}/
      },
      {
        begin: /%[qQwWx]?</,
        end: />/
      },
      {
        begin: /%[qQwWx]?\//,
        end: /\//
      },
      {
        begin: /%[qQwWx]?%/,
        end: /%/
      },
      {
        begin: /%[qQwWx]?-/,
        end: /-/
      },
      {
        begin: /%[qQwWx]?\|/,
        end: /\|/
      },
      // in the following expressions, \B in the beginning suppresses recognition of ?-sequences
      // where ? is the last character of a preceding identifier, as in: `func?4`
      {
        begin: /\B\?(\\\d{1,3})/
      },
      {
        begin: /\B\?(\\x[A-Fa-f0-9]{1,2})/
      },
      {
        begin: /\B\?(\\u\{?[A-Fa-f0-9]{1,6}\}?)/
      },
      {
        begin: /\B\?(\\M-\\C-|\\M-\\c|\\c\\M-|\\M-|\\C-\\M-)[\x20-\x7e]/
      },
      {
        begin: /\B\?\\(c|C-)[\x20-\x7e]/
      },
      {
        begin: /\B\?\\?\S/
      },
      { // heredocs
        begin: /<<[-~]?'?(\w+)\n(?:[^\n]*\n)*?\s*\1\b/,
        returnBegin: true,
        contains: [
          {
            begin: /<<[-~]?'?/
          },
          hljs.END_SAME_AS_BEGIN({
            begin: /(\w+)/,
            end: /(\w+)/,
            contains: [
              hljs.BACKSLASH_ESCAPE,
              SUBST
            ]
          })
        ]
      }
    ]
  };

  // Ruby syntax is underdocumented, but this grammar seems to be accurate
  // as of version 2.7.2 (confirmed with (irb and `Ripper.sexp(...)`)
  // https://docs.ruby-lang.org/en/2.7.0/doc/syntax/literals_rdoc.html#label-Numbers
  const decimal = '[1-9](_?[0-9])*|0';
  const digits = '[0-9](_?[0-9])*';
  const NUMBER = {
    className: 'number',
    relevance: 0,
    variants: [
      // decimal integer/float, optionally exponential or rational, optionally imaginary
      {
        begin: `\\b(${decimal})(\\.(${digits}))?([eE][+-]?(${digits})|r)?i?\\b`
      },

      // explicit decimal/binary/octal/hexadecimal integer,
      // optionally rational and/or imaginary
      {
        begin: "\\b0[dD][0-9](_?[0-9])*r?i?\\b"
      },
      {
        begin: "\\b0[bB][0-1](_?[0-1])*r?i?\\b"
      },
      {
        begin: "\\b0[oO][0-7](_?[0-7])*r?i?\\b"
      },
      {
        begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*r?i?\\b"
      },

      // 0-prefixed implicit octal integer, optionally rational and/or imaginary
      {
        begin: "\\b0(_?[0-7])+r?i?\\b"
      }
    ]
  };

  const PARAMS = {
    className: 'params',
    begin: '\\(',
    end: '\\)',
    endsParent: true,
    keywords: RUBY_KEYWORDS
  };

  const RUBY_DEFAULT_CONTAINS = [
    STRING,
    {
      className: 'class',
      beginKeywords: 'class module',
      end: '$|;',
      illegal: /=/,
      contains: [
        hljs.inherit(hljs.TITLE_MODE, {
          begin: '[A-Za-z_]\\w*(::\\w+)*(\\?|!)?'
        }),
        {
          begin: '<\\s*',
          contains: [
            {
              begin: '(' + hljs.IDENT_RE + '::)?' + hljs.IDENT_RE,
              // we already get points for <, we don't need poitns
              // for the name also
              relevance: 0
            }
          ]
        }
      ].concat(COMMENT_MODES)
    },
    {
      className: 'function',
      // def method_name(
      // def method_name;
      // def method_name (end of line)
      begin: concat(/def\s*/, lookahead(RUBY_METHOD_RE + "\\s*(\\(|;|$)")),
      relevance: 0, // relevance comes from kewords
      keywords: "def",
      end: '$|;',
      contains: [
        hljs.inherit(hljs.TITLE_MODE, {
          begin: RUBY_METHOD_RE
        }),
        PARAMS
      ].concat(COMMENT_MODES)
    },
    {
      // swallow namespace qualifiers before symbols
      begin: hljs.IDENT_RE + '::'
    },
    {
      className: 'symbol',
      begin: hljs.UNDERSCORE_IDENT_RE + '(!|\\?)?:',
      relevance: 0
    },
    {
      className: 'symbol',
      begin: ':(?!\\s)',
      contains: [
        STRING,
        {
          begin: RUBY_METHOD_RE
        }
      ],
      relevance: 0
    },
    NUMBER,
    {
      // negative-look forward attemps to prevent false matches like:
      // @ident@ or $ident$ that might indicate this is not ruby at all
      className: "variable",
      begin: '(\\$\\W)|((\\$|@@?)(\\w+))(?=[^@$?])' + `(?![A-Za-z])(?![@$?'])`
    },
    {
      className: 'params',
      begin: /\|/,
      end: /\|/,
      relevance: 0, // this could be a lot of things (in other languages) other than params
      keywords: RUBY_KEYWORDS
    },
    { // regexp container
      begin: '(' + hljs.RE_STARTERS_RE + '|unless)\\s*',
      keywords: 'unless',
      contains: [
        {
          className: 'regexp',
          contains: [
            hljs.BACKSLASH_ESCAPE,
            SUBST
          ],
          illegal: /\n/,
          variants: [
            {
              begin: '/',
              end: '/[a-z]*'
            },
            {
              begin: /%r\{/,
              end: /\}[a-z]*/
            },
            {
              begin: '%r\\(',
              end: '\\)[a-z]*'
            },
            {
              begin: '%r!',
              end: '![a-z]*'
            },
            {
              begin: '%r\\[',
              end: '\\][a-z]*'
            }
          ]
        }
      ].concat(IRB_OBJECT, COMMENT_MODES),
      relevance: 0
    }
  ].concat(IRB_OBJECT, COMMENT_MODES);

  SUBST.contains = RUBY_DEFAULT_CONTAINS;
  PARAMS.contains = RUBY_DEFAULT_CONTAINS;

  // >>
  // ?>
  const SIMPLE_PROMPT = "[>?]>";
  // irb(main):001:0>
  const DEFAULT_PROMPT = "[\\w#]+\\(\\w+\\):\\d+:\\d+>";
  const RVM_PROMPT = "(\\w+-)?\\d+\\.\\d+\\.\\d+(p\\d+)?[^\\d][^>]+>";

  const IRB_DEFAULT = [
    {
      begin: /^\s*=>/,
      starts: {
        end: '$',
        contains: RUBY_DEFAULT_CONTAINS
      }
    },
    {
      className: 'meta',
      begin: '^(' + SIMPLE_PROMPT + "|" + DEFAULT_PROMPT + '|' + RVM_PROMPT + ')(?=[ ])',
      starts: {
        end: '$',
        contains: RUBY_DEFAULT_CONTAINS
      }
    }
  ];

  COMMENT_MODES.unshift(IRB_OBJECT);

  return {
    name: 'Ruby',
    aliases: [
      'rb',
      'gemspec',
      'podspec',
      'thor',
      'irb'
    ],
    keywords: RUBY_KEYWORDS,
    illegal: /\/\*/,
    contains: [
      hljs.SHEBANG({
        binary: "ruby"
      })
    ]
      .concat(IRB_DEFAULT)
      .concat(COMMENT_MODES)
      .concat(RUBY_DEFAULT_CONTAINS)
  };
}

module.exports = ruby;


/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvcnVieS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYTtBQUNiOztBQUVBO0FBQ0EsV0FBVyxpQkFBaUI7QUFDNUIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLGlCQUFpQjtBQUM1QixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLHNCQUFzQjtBQUNqQyxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsMkJBQTJCO0FBQzNCLGdCQUFnQjtBQUNoQixPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsSUFBSTtBQUM5QixPQUFPO0FBQ1A7QUFDQSxvQ0FBb0MsSUFBSTtBQUN4QyxPQUFPO0FBQ1A7QUFDQSwwQkFBMEIsYUFBYSxJQUFJLEVBQUU7QUFDN0MsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsUUFBUSxRQUFRLE9BQU8sZ0JBQWdCLE9BQU87QUFDcEUsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRUFBb0U7QUFDcEU7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDBCQUEwQjtBQUMxQixzQkFBc0I7QUFDdEIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6IjE1MC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJucyB7UmVnRXhwfVxuICogKi9cblxuLyoqXG4gKiBAcGFyYW0ge1JlZ0V4cCB8IHN0cmluZyB9IHJlXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBzb3VyY2UocmUpIHtcbiAgaWYgKCFyZSkgcmV0dXJuIG51bGw7XG4gIGlmICh0eXBlb2YgcmUgPT09IFwic3RyaW5nXCIpIHJldHVybiByZTtcblxuICByZXR1cm4gcmUuc291cmNlO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7UmVnRXhwIHwgc3RyaW5nIH0gcmVcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGxvb2thaGVhZChyZSkge1xuICByZXR1cm4gY29uY2F0KCcoPz0nLCByZSwgJyknKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0gey4uLihSZWdFeHAgfCBzdHJpbmcpIH0gYXJnc1xuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gY29uY2F0KC4uLmFyZ3MpIHtcbiAgY29uc3Qgam9pbmVkID0gYXJncy5tYXAoKHgpID0+IHNvdXJjZSh4KSkuam9pbihcIlwiKTtcbiAgcmV0dXJuIGpvaW5lZDtcbn1cblxuLypcbkxhbmd1YWdlOiBSdWJ5XG5EZXNjcmlwdGlvbjogUnVieSBpcyBhIGR5bmFtaWMsIG9wZW4gc291cmNlIHByb2dyYW1taW5nIGxhbmd1YWdlIHdpdGggYSBmb2N1cyBvbiBzaW1wbGljaXR5IGFuZCBwcm9kdWN0aXZpdHkuXG5XZWJzaXRlOiBodHRwczovL3d3dy5ydWJ5LWxhbmcub3JnL1xuQXV0aG9yOiBBbnRvbiBLb3ZhbHlvdiA8YW50b25Aa292YWx5b3YubmV0PlxuQ29udHJpYnV0b3JzOiBQZXRlciBMZW9ub3YgPGdvanBlZ0B5YW5kZXgucnU+LCBWYXNpbHkgUG9sb3ZueW92IDx2YXN0QHdoaXRlYW50cy5uZXQ+LCBMb3JlbiBTZWdhbCA8bHNlZ2FsQHNvZW4uY2E+LCBQYXNjYWwgSHVybmkgPHBoaUBydWJ5LXJlYWN0aXZlLm9yZz4sIENlZHJpYyBTb2hyYXVlciA8c29ocmF1ZXJAZ29vZ2xlbWFpbC5jb20+XG5DYXRlZ29yeTogY29tbW9uXG4qL1xuXG5mdW5jdGlvbiBydWJ5KGhsanMpIHtcbiAgY29uc3QgUlVCWV9NRVRIT0RfUkUgPSAnKFthLXpBLVpfXVxcXFx3KlshPz1dP3xbLSt+XUB8PDx8Pj58PX58PT09P3w8PT58Wzw+XT0/fFxcXFwqXFxcXCp8Wy0vKyVeJip+YHxdfFxcXFxbXFxcXF09PyknO1xuICBjb25zdCBSVUJZX0tFWVdPUkRTID0ge1xuICAgIGtleXdvcmQ6XG4gICAgICAnYW5kIHRoZW4gZGVmaW5lZCBtb2R1bGUgaW4gcmV0dXJuIHJlZG8gaWYgQkVHSU4gcmV0cnkgZW5kIGZvciBzZWxmIHdoZW4gJyArXG4gICAgICAnbmV4dCB1bnRpbCBkbyBiZWdpbiB1bmxlc3MgRU5EIHJlc2N1ZSBlbHNlIGJyZWFrIHVuZGVmIG5vdCBzdXBlciBjbGFzcyBjYXNlICcgK1xuICAgICAgJ3JlcXVpcmUgeWllbGQgYWxpYXMgd2hpbGUgZW5zdXJlIGVsc2lmIG9yIGluY2x1ZGUgYXR0cl9yZWFkZXIgYXR0cl93cml0ZXIgYXR0cl9hY2Nlc3NvciAnICtcbiAgICAgICdfX0ZJTEVfXycsXG4gICAgYnVpbHRfaW46ICdwcm9jIGxhbWJkYScsXG4gICAgbGl0ZXJhbDpcbiAgICAgICd0cnVlIGZhbHNlIG5pbCdcbiAgfTtcbiAgY29uc3QgWUFSRE9DVEFHID0ge1xuICAgIGNsYXNzTmFtZTogJ2RvY3RhZycsXG4gICAgYmVnaW46ICdAW0EtWmEtel0rJ1xuICB9O1xuICBjb25zdCBJUkJfT0JKRUNUID0ge1xuICAgIGJlZ2luOiAnIzwnLFxuICAgIGVuZDogJz4nXG4gIH07XG4gIGNvbnN0IENPTU1FTlRfTU9ERVMgPSBbXG4gICAgaGxqcy5DT01NRU5UKFxuICAgICAgJyMnLFxuICAgICAgJyQnLFxuICAgICAge1xuICAgICAgICBjb250YWluczogWyBZQVJET0NUQUcgXVxuICAgICAgfVxuICAgICksXG4gICAgaGxqcy5DT01NRU5UKFxuICAgICAgJ149YmVnaW4nLFxuICAgICAgJ149ZW5kJyxcbiAgICAgIHtcbiAgICAgICAgY29udGFpbnM6IFsgWUFSRE9DVEFHIF0sXG4gICAgICAgIHJlbGV2YW5jZTogMTBcbiAgICAgIH1cbiAgICApLFxuICAgIGhsanMuQ09NTUVOVCgnXl9fRU5EX18nLCAnXFxcXG4kJylcbiAgXTtcbiAgY29uc3QgU1VCU1QgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3Vic3QnLFxuICAgIGJlZ2luOiAvI1xcey8sXG4gICAgZW5kOiAvXFx9LyxcbiAgICBrZXl3b3JkczogUlVCWV9LRVlXT1JEU1xuICB9O1xuICBjb25zdCBTVFJJTkcgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICBjb250YWluczogW1xuICAgICAgaGxqcy5CQUNLU0xBU0hfRVNDQVBFLFxuICAgICAgU1VCU1RcbiAgICBdLFxuICAgIHZhcmlhbnRzOiBbXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAvJy8sXG4gICAgICAgIGVuZDogLycvXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogL1wiLyxcbiAgICAgICAgZW5kOiAvXCIvXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogL2AvLFxuICAgICAgICBlbmQ6IC9gL1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IC8lW3FRd1d4XT9cXCgvLFxuICAgICAgICBlbmQ6IC9cXCkvXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogLyVbcVF3V3hdP1xcWy8sXG4gICAgICAgIGVuZDogL1xcXS9cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAvJVtxUXdXeF0/XFx7LyxcbiAgICAgICAgZW5kOiAvXFx9L1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IC8lW3FRd1d4XT88LyxcbiAgICAgICAgZW5kOiAvPi9cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAvJVtxUXdXeF0/XFwvLyxcbiAgICAgICAgZW5kOiAvXFwvL1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IC8lW3FRd1d4XT8lLyxcbiAgICAgICAgZW5kOiAvJS9cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAvJVtxUXdXeF0/LS8sXG4gICAgICAgIGVuZDogLy0vXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogLyVbcVF3V3hdP1xcfC8sXG4gICAgICAgIGVuZDogL1xcfC9cbiAgICAgIH0sXG4gICAgICAvLyBpbiB0aGUgZm9sbG93aW5nIGV4cHJlc3Npb25zLCBcXEIgaW4gdGhlIGJlZ2lubmluZyBzdXBwcmVzc2VzIHJlY29nbml0aW9uIG9mID8tc2VxdWVuY2VzXG4gICAgICAvLyB3aGVyZSA/IGlzIHRoZSBsYXN0IGNoYXJhY3RlciBvZiBhIHByZWNlZGluZyBpZGVudGlmaWVyLCBhcyBpbjogYGZ1bmM/NGBcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IC9cXEJcXD8oXFxcXFxcZHsxLDN9KS9cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAvXFxCXFw/KFxcXFx4W0EtRmEtZjAtOV17MSwyfSkvXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogL1xcQlxcPyhcXFxcdVxcez9bQS1GYS1mMC05XXsxLDZ9XFx9PykvXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogL1xcQlxcPyhcXFxcTS1cXFxcQy18XFxcXE0tXFxcXGN8XFxcXGNcXFxcTS18XFxcXE0tfFxcXFxDLVxcXFxNLSlbXFx4MjAtXFx4N2VdL1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IC9cXEJcXD9cXFxcKGN8Qy0pW1xceDIwLVxceDdlXS9cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAvXFxCXFw/XFxcXD9cXFMvXG4gICAgICB9LFxuICAgICAgeyAvLyBoZXJlZG9jc1xuICAgICAgICBiZWdpbjogLzw8Wy1+XT8nPyhcXHcrKVxcbig/OlteXFxuXSpcXG4pKj9cXHMqXFwxXFxiLyxcbiAgICAgICAgcmV0dXJuQmVnaW46IHRydWUsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW46IC88PFstfl0/Jz8vXG4gICAgICAgICAgfSxcbiAgICAgICAgICBobGpzLkVORF9TQU1FX0FTX0JFR0lOKHtcbiAgICAgICAgICAgIGJlZ2luOiAvKFxcdyspLyxcbiAgICAgICAgICAgIGVuZDogLyhcXHcrKS8sXG4gICAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgICBobGpzLkJBQ0tTTEFTSF9FU0NBUEUsXG4gICAgICAgICAgICAgIFNVQlNUXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfTtcblxuICAvLyBSdWJ5IHN5bnRheCBpcyB1bmRlcmRvY3VtZW50ZWQsIGJ1dCB0aGlzIGdyYW1tYXIgc2VlbXMgdG8gYmUgYWNjdXJhdGVcbiAgLy8gYXMgb2YgdmVyc2lvbiAyLjcuMiAoY29uZmlybWVkIHdpdGggKGlyYiBhbmQgYFJpcHBlci5zZXhwKC4uLilgKVxuICAvLyBodHRwczovL2RvY3MucnVieS1sYW5nLm9yZy9lbi8yLjcuMC9kb2Mvc3ludGF4L2xpdGVyYWxzX3Jkb2MuaHRtbCNsYWJlbC1OdW1iZXJzXG4gIGNvbnN0IGRlY2ltYWwgPSAnWzEtOV0oXz9bMC05XSkqfDAnO1xuICBjb25zdCBkaWdpdHMgPSAnWzAtOV0oXz9bMC05XSkqJztcbiAgY29uc3QgTlVNQkVSID0ge1xuICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgcmVsZXZhbmNlOiAwLFxuICAgIHZhcmlhbnRzOiBbXG4gICAgICAvLyBkZWNpbWFsIGludGVnZXIvZmxvYXQsIG9wdGlvbmFsbHkgZXhwb25lbnRpYWwgb3IgcmF0aW9uYWwsIG9wdGlvbmFsbHkgaW1hZ2luYXJ5XG4gICAgICB7XG4gICAgICAgIGJlZ2luOiBgXFxcXGIoJHtkZWNpbWFsfSkoXFxcXC4oJHtkaWdpdHN9KSk/KFtlRV1bKy1dPygke2RpZ2l0c30pfHIpP2k/XFxcXGJgXG4gICAgICB9LFxuXG4gICAgICAvLyBleHBsaWNpdCBkZWNpbWFsL2JpbmFyeS9vY3RhbC9oZXhhZGVjaW1hbCBpbnRlZ2VyLFxuICAgICAgLy8gb3B0aW9uYWxseSByYXRpb25hbCBhbmQvb3IgaW1hZ2luYXJ5XG4gICAgICB7XG4gICAgICAgIGJlZ2luOiBcIlxcXFxiMFtkRF1bMC05XShfP1swLTldKSpyP2k/XFxcXGJcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IFwiXFxcXGIwW2JCXVswLTFdKF8/WzAtMV0pKnI/aT9cXFxcYlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogXCJcXFxcYjBbb09dWzAtN10oXz9bMC03XSkqcj9pP1xcXFxiXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiBcIlxcXFxiMFt4WF1bMC05YS1mQS1GXShfP1swLTlhLWZBLUZdKSpyP2k/XFxcXGJcIlxuICAgICAgfSxcblxuICAgICAgLy8gMC1wcmVmaXhlZCBpbXBsaWNpdCBvY3RhbCBpbnRlZ2VyLCBvcHRpb25hbGx5IHJhdGlvbmFsIGFuZC9vciBpbWFnaW5hcnlcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IFwiXFxcXGIwKF8/WzAtN10pK3I/aT9cXFxcYlwiXG4gICAgICB9XG4gICAgXVxuICB9O1xuXG4gIGNvbnN0IFBBUkFNUyA9IHtcbiAgICBjbGFzc05hbWU6ICdwYXJhbXMnLFxuICAgIGJlZ2luOiAnXFxcXCgnLFxuICAgIGVuZDogJ1xcXFwpJyxcbiAgICBlbmRzUGFyZW50OiB0cnVlLFxuICAgIGtleXdvcmRzOiBSVUJZX0tFWVdPUkRTXG4gIH07XG5cbiAgY29uc3QgUlVCWV9ERUZBVUxUX0NPTlRBSU5TID0gW1xuICAgIFNUUklORyxcbiAgICB7XG4gICAgICBjbGFzc05hbWU6ICdjbGFzcycsXG4gICAgICBiZWdpbktleXdvcmRzOiAnY2xhc3MgbW9kdWxlJyxcbiAgICAgIGVuZDogJyR8OycsXG4gICAgICBpbGxlZ2FsOiAvPS8sXG4gICAgICBjb250YWluczogW1xuICAgICAgICBobGpzLmluaGVyaXQoaGxqcy5USVRMRV9NT0RFLCB7XG4gICAgICAgICAgYmVnaW46ICdbQS1aYS16X11cXFxcdyooOjpcXFxcdyspKihcXFxcP3whKT8nXG4gICAgICAgIH0pLFxuICAgICAgICB7XG4gICAgICAgICAgYmVnaW46ICc8XFxcXHMqJyxcbiAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBiZWdpbjogJygnICsgaGxqcy5JREVOVF9SRSArICc6Oik/JyArIGhsanMuSURFTlRfUkUsXG4gICAgICAgICAgICAgIC8vIHdlIGFscmVhZHkgZ2V0IHBvaW50cyBmb3IgPCwgd2UgZG9uJ3QgbmVlZCBwb2l0bnNcbiAgICAgICAgICAgICAgLy8gZm9yIHRoZSBuYW1lIGFsc29cbiAgICAgICAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdLmNvbmNhdChDT01NRU5UX01PREVTKVxuICAgIH0sXG4gICAge1xuICAgICAgY2xhc3NOYW1lOiAnZnVuY3Rpb24nLFxuICAgICAgLy8gZGVmIG1ldGhvZF9uYW1lKFxuICAgICAgLy8gZGVmIG1ldGhvZF9uYW1lO1xuICAgICAgLy8gZGVmIG1ldGhvZF9uYW1lIChlbmQgb2YgbGluZSlcbiAgICAgIGJlZ2luOiBjb25jYXQoL2RlZlxccyovLCBsb29rYWhlYWQoUlVCWV9NRVRIT0RfUkUgKyBcIlxcXFxzKihcXFxcKHw7fCQpXCIpKSxcbiAgICAgIHJlbGV2YW5jZTogMCwgLy8gcmVsZXZhbmNlIGNvbWVzIGZyb20ga2V3b3Jkc1xuICAgICAga2V5d29yZHM6IFwiZGVmXCIsXG4gICAgICBlbmQ6ICckfDsnLFxuICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgaGxqcy5pbmhlcml0KGhsanMuVElUTEVfTU9ERSwge1xuICAgICAgICAgIGJlZ2luOiBSVUJZX01FVEhPRF9SRVxuICAgICAgICB9KSxcbiAgICAgICAgUEFSQU1TXG4gICAgICBdLmNvbmNhdChDT01NRU5UX01PREVTKVxuICAgIH0sXG4gICAge1xuICAgICAgLy8gc3dhbGxvdyBuYW1lc3BhY2UgcXVhbGlmaWVycyBiZWZvcmUgc3ltYm9sc1xuICAgICAgYmVnaW46IGhsanMuSURFTlRfUkUgKyAnOjonXG4gICAgfSxcbiAgICB7XG4gICAgICBjbGFzc05hbWU6ICdzeW1ib2wnLFxuICAgICAgYmVnaW46IGhsanMuVU5ERVJTQ09SRV9JREVOVF9SRSArICcoIXxcXFxcPyk/OicsXG4gICAgICByZWxldmFuY2U6IDBcbiAgICB9LFxuICAgIHtcbiAgICAgIGNsYXNzTmFtZTogJ3N5bWJvbCcsXG4gICAgICBiZWdpbjogJzooPyFcXFxccyknLFxuICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgU1RSSU5HLFxuICAgICAgICB7XG4gICAgICAgICAgYmVnaW46IFJVQllfTUVUSE9EX1JFXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICByZWxldmFuY2U6IDBcbiAgICB9LFxuICAgIE5VTUJFUixcbiAgICB7XG4gICAgICAvLyBuZWdhdGl2ZS1sb29rIGZvcndhcmQgYXR0ZW1wcyB0byBwcmV2ZW50IGZhbHNlIG1hdGNoZXMgbGlrZTpcbiAgICAgIC8vIEBpZGVudEAgb3IgJGlkZW50JCB0aGF0IG1pZ2h0IGluZGljYXRlIHRoaXMgaXMgbm90IHJ1YnkgYXQgYWxsXG4gICAgICBjbGFzc05hbWU6IFwidmFyaWFibGVcIixcbiAgICAgIGJlZ2luOiAnKFxcXFwkXFxcXFcpfCgoXFxcXCR8QEA/KShcXFxcdyspKSg/PVteQCQ/XSknICsgYCg/IVtBLVphLXpdKSg/IVtAJD8nXSlgXG4gICAgfSxcbiAgICB7XG4gICAgICBjbGFzc05hbWU6ICdwYXJhbXMnLFxuICAgICAgYmVnaW46IC9cXHwvLFxuICAgICAgZW5kOiAvXFx8LyxcbiAgICAgIHJlbGV2YW5jZTogMCwgLy8gdGhpcyBjb3VsZCBiZSBhIGxvdCBvZiB0aGluZ3MgKGluIG90aGVyIGxhbmd1YWdlcykgb3RoZXIgdGhhbiBwYXJhbXNcbiAgICAgIGtleXdvcmRzOiBSVUJZX0tFWVdPUkRTXG4gICAgfSxcbiAgICB7IC8vIHJlZ2V4cCBjb250YWluZXJcbiAgICAgIGJlZ2luOiAnKCcgKyBobGpzLlJFX1NUQVJURVJTX1JFICsgJ3x1bmxlc3MpXFxcXHMqJyxcbiAgICAgIGtleXdvcmRzOiAndW5sZXNzJyxcbiAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBjbGFzc05hbWU6ICdyZWdleHAnLFxuICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICBobGpzLkJBQ0tTTEFTSF9FU0NBUEUsXG4gICAgICAgICAgICBTVUJTVFxuICAgICAgICAgIF0sXG4gICAgICAgICAgaWxsZWdhbDogL1xcbi8sXG4gICAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYmVnaW46ICcvJyxcbiAgICAgICAgICAgICAgZW5kOiAnL1thLXpdKidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGJlZ2luOiAvJXJcXHsvLFxuICAgICAgICAgICAgICBlbmQ6IC9cXH1bYS16XSovXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBiZWdpbjogJyVyXFxcXCgnLFxuICAgICAgICAgICAgICBlbmQ6ICdcXFxcKVthLXpdKidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGJlZ2luOiAnJXIhJyxcbiAgICAgICAgICAgICAgZW5kOiAnIVthLXpdKidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGJlZ2luOiAnJXJcXFxcWycsXG4gICAgICAgICAgICAgIGVuZDogJ1xcXFxdW2Etel0qJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXS5jb25jYXQoSVJCX09CSkVDVCwgQ09NTUVOVF9NT0RFUyksXG4gICAgICByZWxldmFuY2U6IDBcbiAgICB9XG4gIF0uY29uY2F0KElSQl9PQkpFQ1QsIENPTU1FTlRfTU9ERVMpO1xuXG4gIFNVQlNULmNvbnRhaW5zID0gUlVCWV9ERUZBVUxUX0NPTlRBSU5TO1xuICBQQVJBTVMuY29udGFpbnMgPSBSVUJZX0RFRkFVTFRfQ09OVEFJTlM7XG5cbiAgLy8gPj5cbiAgLy8gPz5cbiAgY29uc3QgU0lNUExFX1BST01QVCA9IFwiWz4/XT5cIjtcbiAgLy8gaXJiKG1haW4pOjAwMTowPlxuICBjb25zdCBERUZBVUxUX1BST01QVCA9IFwiW1xcXFx3I10rXFxcXChcXFxcdytcXFxcKTpcXFxcZCs6XFxcXGQrPlwiO1xuICBjb25zdCBSVk1fUFJPTVBUID0gXCIoXFxcXHcrLSk/XFxcXGQrXFxcXC5cXFxcZCtcXFxcLlxcXFxkKyhwXFxcXGQrKT9bXlxcXFxkXVtePl0rPlwiO1xuXG4gIGNvbnN0IElSQl9ERUZBVUxUID0gW1xuICAgIHtcbiAgICAgIGJlZ2luOiAvXlxccyo9Pi8sXG4gICAgICBzdGFydHM6IHtcbiAgICAgICAgZW5kOiAnJCcsXG4gICAgICAgIGNvbnRhaW5zOiBSVUJZX0RFRkFVTFRfQ09OVEFJTlNcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgICAgYmVnaW46ICdeKCcgKyBTSU1QTEVfUFJPTVBUICsgXCJ8XCIgKyBERUZBVUxUX1BST01QVCArICd8JyArIFJWTV9QUk9NUFQgKyAnKSg/PVsgXSknLFxuICAgICAgc3RhcnRzOiB7XG4gICAgICAgIGVuZDogJyQnLFxuICAgICAgICBjb250YWluczogUlVCWV9ERUZBVUxUX0NPTlRBSU5TXG4gICAgICB9XG4gICAgfVxuICBdO1xuXG4gIENPTU1FTlRfTU9ERVMudW5zaGlmdChJUkJfT0JKRUNUKTtcblxuICByZXR1cm4ge1xuICAgIG5hbWU6ICdSdWJ5JyxcbiAgICBhbGlhc2VzOiBbXG4gICAgICAncmInLFxuICAgICAgJ2dlbXNwZWMnLFxuICAgICAgJ3BvZHNwZWMnLFxuICAgICAgJ3Rob3InLFxuICAgICAgJ2lyYidcbiAgICBdLFxuICAgIGtleXdvcmRzOiBSVUJZX0tFWVdPUkRTLFxuICAgIGlsbGVnYWw6IC9cXC9cXCovLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBobGpzLlNIRUJBTkcoe1xuICAgICAgICBiaW5hcnk6IFwicnVieVwiXG4gICAgICB9KVxuICAgIF1cbiAgICAgIC5jb25jYXQoSVJCX0RFRkFVTFQpXG4gICAgICAuY29uY2F0KENPTU1FTlRfTU9ERVMpXG4gICAgICAuY29uY2F0KFJVQllfREVGQVVMVF9DT05UQUlOUylcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBydWJ5O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==