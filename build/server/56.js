exports.ids = [56];
exports.modules = {

/***/ "./node_modules/highlight.js/lib/languages/erlang.js":
/*!***********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/erlang.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Erlang
Description: Erlang is a general-purpose functional language, with strict evaluation, single assignment, and dynamic typing.
Author: Nikolay Zakharov <nikolay.desh@gmail.com>, Dmitry Kovega <arhibot@gmail.com>
Website: https://www.erlang.org
Category: functional
*/

/** @type LanguageFn */
function erlang(hljs) {
  const BASIC_ATOM_RE = '[a-z\'][a-zA-Z0-9_\']*';
  const FUNCTION_NAME_RE = '(' + BASIC_ATOM_RE + ':' + BASIC_ATOM_RE + '|' + BASIC_ATOM_RE + ')';
  const ERLANG_RESERVED = {
    keyword:
      'after and andalso|10 band begin bnot bor bsl bzr bxor case catch cond div end fun if ' +
      'let not of orelse|10 query receive rem try when xor',
    literal:
      'false true'
  };

  const COMMENT = hljs.COMMENT('%', '$');
  const NUMBER = {
    className: 'number',
    begin: '\\b(\\d+(_\\d+)*#[a-fA-F0-9]+(_[a-fA-F0-9]+)*|\\d+(_\\d+)*(\\.\\d+(_\\d+)*)?([eE][-+]?\\d+)?)',
    relevance: 0
  };
  const NAMED_FUN = {
    begin: 'fun\\s+' + BASIC_ATOM_RE + '/\\d+'
  };
  const FUNCTION_CALL = {
    begin: FUNCTION_NAME_RE + '\\(',
    end: '\\)',
    returnBegin: true,
    relevance: 0,
    contains: [
      {
        begin: FUNCTION_NAME_RE,
        relevance: 0
      },
      {
        begin: '\\(',
        end: '\\)',
        endsWithParent: true,
        returnEnd: true,
        relevance: 0
        // "contains" defined later
      }
    ]
  };
  const TUPLE = {
    begin: /\{/,
    end: /\}/,
    relevance: 0
    // "contains" defined later
  };
  const VAR1 = {
    begin: '\\b_([A-Z][A-Za-z0-9_]*)?',
    relevance: 0
  };
  const VAR2 = {
    begin: '[A-Z][a-zA-Z0-9_]*',
    relevance: 0
  };
  const RECORD_ACCESS = {
    begin: '#' + hljs.UNDERSCORE_IDENT_RE,
    relevance: 0,
    returnBegin: true,
    contains: [
      {
        begin: '#' + hljs.UNDERSCORE_IDENT_RE,
        relevance: 0
      },
      {
        begin: /\{/,
        end: /\}/,
        relevance: 0
        // "contains" defined later
      }
    ]
  };

  const BLOCK_STATEMENTS = {
    beginKeywords: 'fun receive if try case',
    end: 'end',
    keywords: ERLANG_RESERVED
  };
  BLOCK_STATEMENTS.contains = [
    COMMENT,
    NAMED_FUN,
    hljs.inherit(hljs.APOS_STRING_MODE, {
      className: ''
    }),
    BLOCK_STATEMENTS,
    FUNCTION_CALL,
    hljs.QUOTE_STRING_MODE,
    NUMBER,
    TUPLE,
    VAR1,
    VAR2,
    RECORD_ACCESS
  ];

  const BASIC_MODES = [
    COMMENT,
    NAMED_FUN,
    BLOCK_STATEMENTS,
    FUNCTION_CALL,
    hljs.QUOTE_STRING_MODE,
    NUMBER,
    TUPLE,
    VAR1,
    VAR2,
    RECORD_ACCESS
  ];
  FUNCTION_CALL.contains[1].contains = BASIC_MODES;
  TUPLE.contains = BASIC_MODES;
  RECORD_ACCESS.contains[1].contains = BASIC_MODES;

  const DIRECTIVES = [
    "-module",
    "-record",
    "-undef",
    "-export",
    "-ifdef",
    "-ifndef",
    "-author",
    "-copyright",
    "-doc",
    "-vsn",
    "-import",
    "-include",
    "-include_lib",
    "-compile",
    "-define",
    "-else",
    "-endif",
    "-file",
    "-behaviour",
    "-behavior",
    "-spec"
  ];

  const PARAMS = {
    className: 'params',
    begin: '\\(',
    end: '\\)',
    contains: BASIC_MODES
  };
  return {
    name: 'Erlang',
    aliases: ['erl'],
    keywords: ERLANG_RESERVED,
    illegal: '(</|\\*=|\\+=|-=|/\\*|\\*/|\\(\\*|\\*\\))',
    contains: [
      {
        className: 'function',
        begin: '^' + BASIC_ATOM_RE + '\\s*\\(',
        end: '->',
        returnBegin: true,
        illegal: '\\(|#|//|/\\*|\\\\|:|;',
        contains: [
          PARAMS,
          hljs.inherit(hljs.TITLE_MODE, {
            begin: BASIC_ATOM_RE
          })
        ],
        starts: {
          end: ';|\\.',
          keywords: ERLANG_RESERVED,
          contains: BASIC_MODES
        }
      },
      COMMENT,
      {
        begin: '^-',
        end: '\\.',
        relevance: 0,
        excludeEnd: true,
        returnBegin: true,
        keywords: {
          $pattern: '-' + hljs.IDENT_RE,
          keyword: DIRECTIVES.map(x => `${x}|1.5`).join(" ")
        },
        contains: [PARAMS]
      },
      NUMBER,
      hljs.QUOTE_STRING_MODE,
      RECORD_ACCESS,
      VAR1,
      VAR2,
      TUPLE,
      {
        begin: /\.$/
      } // relevance booster
    ]
  };
}

module.exports = erlang;


/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvZXJsYW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLGtCQUFrQjtBQUNsQixnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsRUFBRTtBQUM1QyxTQUFTO0FBQ1Q7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiNTYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuTGFuZ3VhZ2U6IEVybGFuZ1xuRGVzY3JpcHRpb246IEVybGFuZyBpcyBhIGdlbmVyYWwtcHVycG9zZSBmdW5jdGlvbmFsIGxhbmd1YWdlLCB3aXRoIHN0cmljdCBldmFsdWF0aW9uLCBzaW5nbGUgYXNzaWdubWVudCwgYW5kIGR5bmFtaWMgdHlwaW5nLlxuQXV0aG9yOiBOaWtvbGF5IFpha2hhcm92IDxuaWtvbGF5LmRlc2hAZ21haWwuY29tPiwgRG1pdHJ5IEtvdmVnYSA8YXJoaWJvdEBnbWFpbC5jb20+XG5XZWJzaXRlOiBodHRwczovL3d3dy5lcmxhbmcub3JnXG5DYXRlZ29yeTogZnVuY3Rpb25hbFxuKi9cblxuLyoqIEB0eXBlIExhbmd1YWdlRm4gKi9cbmZ1bmN0aW9uIGVybGFuZyhobGpzKSB7XG4gIGNvbnN0IEJBU0lDX0FUT01fUkUgPSAnW2EtelxcJ11bYS16QS1aMC05X1xcJ10qJztcbiAgY29uc3QgRlVOQ1RJT05fTkFNRV9SRSA9ICcoJyArIEJBU0lDX0FUT01fUkUgKyAnOicgKyBCQVNJQ19BVE9NX1JFICsgJ3wnICsgQkFTSUNfQVRPTV9SRSArICcpJztcbiAgY29uc3QgRVJMQU5HX1JFU0VSVkVEID0ge1xuICAgIGtleXdvcmQ6XG4gICAgICAnYWZ0ZXIgYW5kIGFuZGFsc298MTAgYmFuZCBiZWdpbiBibm90IGJvciBic2wgYnpyIGJ4b3IgY2FzZSBjYXRjaCBjb25kIGRpdiBlbmQgZnVuIGlmICcgK1xuICAgICAgJ2xldCBub3Qgb2Ygb3JlbHNlfDEwIHF1ZXJ5IHJlY2VpdmUgcmVtIHRyeSB3aGVuIHhvcicsXG4gICAgbGl0ZXJhbDpcbiAgICAgICdmYWxzZSB0cnVlJ1xuICB9O1xuXG4gIGNvbnN0IENPTU1FTlQgPSBobGpzLkNPTU1FTlQoJyUnLCAnJCcpO1xuICBjb25zdCBOVU1CRVIgPSB7XG4gICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICBiZWdpbjogJ1xcXFxiKFxcXFxkKyhfXFxcXGQrKSojW2EtZkEtRjAtOV0rKF9bYS1mQS1GMC05XSspKnxcXFxcZCsoX1xcXFxkKykqKFxcXFwuXFxcXGQrKF9cXFxcZCspKik/KFtlRV1bLStdP1xcXFxkKyk/KScsXG4gICAgcmVsZXZhbmNlOiAwXG4gIH07XG4gIGNvbnN0IE5BTUVEX0ZVTiA9IHtcbiAgICBiZWdpbjogJ2Z1blxcXFxzKycgKyBCQVNJQ19BVE9NX1JFICsgJy9cXFxcZCsnXG4gIH07XG4gIGNvbnN0IEZVTkNUSU9OX0NBTEwgPSB7XG4gICAgYmVnaW46IEZVTkNUSU9OX05BTUVfUkUgKyAnXFxcXCgnLFxuICAgIGVuZDogJ1xcXFwpJyxcbiAgICByZXR1cm5CZWdpbjogdHJ1ZSxcbiAgICByZWxldmFuY2U6IDAsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IEZVTkNUSU9OX05BTUVfUkUsXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICdcXFxcKCcsXG4gICAgICAgIGVuZDogJ1xcXFwpJyxcbiAgICAgICAgZW5kc1dpdGhQYXJlbnQ6IHRydWUsXG4gICAgICAgIHJldHVybkVuZDogdHJ1ZSxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICAgIC8vIFwiY29udGFpbnNcIiBkZWZpbmVkIGxhdGVyXG4gICAgICB9XG4gICAgXVxuICB9O1xuICBjb25zdCBUVVBMRSA9IHtcbiAgICBiZWdpbjogL1xcey8sXG4gICAgZW5kOiAvXFx9LyxcbiAgICByZWxldmFuY2U6IDBcbiAgICAvLyBcImNvbnRhaW5zXCIgZGVmaW5lZCBsYXRlclxuICB9O1xuICBjb25zdCBWQVIxID0ge1xuICAgIGJlZ2luOiAnXFxcXGJfKFtBLVpdW0EtWmEtejAtOV9dKik/JyxcbiAgICByZWxldmFuY2U6IDBcbiAgfTtcbiAgY29uc3QgVkFSMiA9IHtcbiAgICBiZWdpbjogJ1tBLVpdW2EtekEtWjAtOV9dKicsXG4gICAgcmVsZXZhbmNlOiAwXG4gIH07XG4gIGNvbnN0IFJFQ09SRF9BQ0NFU1MgPSB7XG4gICAgYmVnaW46ICcjJyArIGhsanMuVU5ERVJTQ09SRV9JREVOVF9SRSxcbiAgICByZWxldmFuY2U6IDAsXG4gICAgcmV0dXJuQmVnaW46IHRydWUsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICcjJyArIGhsanMuVU5ERVJTQ09SRV9JREVOVF9SRSxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogL1xcey8sXG4gICAgICAgIGVuZDogL1xcfS8sXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgICAvLyBcImNvbnRhaW5zXCIgZGVmaW5lZCBsYXRlclxuICAgICAgfVxuICAgIF1cbiAgfTtcblxuICBjb25zdCBCTE9DS19TVEFURU1FTlRTID0ge1xuICAgIGJlZ2luS2V5d29yZHM6ICdmdW4gcmVjZWl2ZSBpZiB0cnkgY2FzZScsXG4gICAgZW5kOiAnZW5kJyxcbiAgICBrZXl3b3JkczogRVJMQU5HX1JFU0VSVkVEXG4gIH07XG4gIEJMT0NLX1NUQVRFTUVOVFMuY29udGFpbnMgPSBbXG4gICAgQ09NTUVOVCxcbiAgICBOQU1FRF9GVU4sXG4gICAgaGxqcy5pbmhlcml0KGhsanMuQVBPU19TVFJJTkdfTU9ERSwge1xuICAgICAgY2xhc3NOYW1lOiAnJ1xuICAgIH0pLFxuICAgIEJMT0NLX1NUQVRFTUVOVFMsXG4gICAgRlVOQ1RJT05fQ0FMTCxcbiAgICBobGpzLlFVT1RFX1NUUklOR19NT0RFLFxuICAgIE5VTUJFUixcbiAgICBUVVBMRSxcbiAgICBWQVIxLFxuICAgIFZBUjIsXG4gICAgUkVDT1JEX0FDQ0VTU1xuICBdO1xuXG4gIGNvbnN0IEJBU0lDX01PREVTID0gW1xuICAgIENPTU1FTlQsXG4gICAgTkFNRURfRlVOLFxuICAgIEJMT0NLX1NUQVRFTUVOVFMsXG4gICAgRlVOQ1RJT05fQ0FMTCxcbiAgICBobGpzLlFVT1RFX1NUUklOR19NT0RFLFxuICAgIE5VTUJFUixcbiAgICBUVVBMRSxcbiAgICBWQVIxLFxuICAgIFZBUjIsXG4gICAgUkVDT1JEX0FDQ0VTU1xuICBdO1xuICBGVU5DVElPTl9DQUxMLmNvbnRhaW5zWzFdLmNvbnRhaW5zID0gQkFTSUNfTU9ERVM7XG4gIFRVUExFLmNvbnRhaW5zID0gQkFTSUNfTU9ERVM7XG4gIFJFQ09SRF9BQ0NFU1MuY29udGFpbnNbMV0uY29udGFpbnMgPSBCQVNJQ19NT0RFUztcblxuICBjb25zdCBESVJFQ1RJVkVTID0gW1xuICAgIFwiLW1vZHVsZVwiLFxuICAgIFwiLXJlY29yZFwiLFxuICAgIFwiLXVuZGVmXCIsXG4gICAgXCItZXhwb3J0XCIsXG4gICAgXCItaWZkZWZcIixcbiAgICBcIi1pZm5kZWZcIixcbiAgICBcIi1hdXRob3JcIixcbiAgICBcIi1jb3B5cmlnaHRcIixcbiAgICBcIi1kb2NcIixcbiAgICBcIi12c25cIixcbiAgICBcIi1pbXBvcnRcIixcbiAgICBcIi1pbmNsdWRlXCIsXG4gICAgXCItaW5jbHVkZV9saWJcIixcbiAgICBcIi1jb21waWxlXCIsXG4gICAgXCItZGVmaW5lXCIsXG4gICAgXCItZWxzZVwiLFxuICAgIFwiLWVuZGlmXCIsXG4gICAgXCItZmlsZVwiLFxuICAgIFwiLWJlaGF2aW91clwiLFxuICAgIFwiLWJlaGF2aW9yXCIsXG4gICAgXCItc3BlY1wiXG4gIF07XG5cbiAgY29uc3QgUEFSQU1TID0ge1xuICAgIGNsYXNzTmFtZTogJ3BhcmFtcycsXG4gICAgYmVnaW46ICdcXFxcKCcsXG4gICAgZW5kOiAnXFxcXCknLFxuICAgIGNvbnRhaW5zOiBCQVNJQ19NT0RFU1xuICB9O1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICdFcmxhbmcnLFxuICAgIGFsaWFzZXM6IFsnZXJsJ10sXG4gICAga2V5d29yZHM6IEVSTEFOR19SRVNFUlZFRCxcbiAgICBpbGxlZ2FsOiAnKDwvfFxcXFwqPXxcXFxcKz18LT18L1xcXFwqfFxcXFwqL3xcXFxcKFxcXFwqfFxcXFwqXFxcXCkpJyxcbiAgICBjb250YWluczogW1xuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdmdW5jdGlvbicsXG4gICAgICAgIGJlZ2luOiAnXicgKyBCQVNJQ19BVE9NX1JFICsgJ1xcXFxzKlxcXFwoJyxcbiAgICAgICAgZW5kOiAnLT4nLFxuICAgICAgICByZXR1cm5CZWdpbjogdHJ1ZSxcbiAgICAgICAgaWxsZWdhbDogJ1xcXFwofCN8Ly98L1xcXFwqfFxcXFxcXFxcfDp8OycsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgUEFSQU1TLFxuICAgICAgICAgIGhsanMuaW5oZXJpdChobGpzLlRJVExFX01PREUsIHtcbiAgICAgICAgICAgIGJlZ2luOiBCQVNJQ19BVE9NX1JFXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgc3RhcnRzOiB7XG4gICAgICAgICAgZW5kOiAnO3xcXFxcLicsXG4gICAgICAgICAga2V5d29yZHM6IEVSTEFOR19SRVNFUlZFRCxcbiAgICAgICAgICBjb250YWluczogQkFTSUNfTU9ERVNcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIENPTU1FTlQsXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnXi0nLFxuICAgICAgICBlbmQ6ICdcXFxcLicsXG4gICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgZXhjbHVkZUVuZDogdHJ1ZSxcbiAgICAgICAgcmV0dXJuQmVnaW46IHRydWUsXG4gICAgICAgIGtleXdvcmRzOiB7XG4gICAgICAgICAgJHBhdHRlcm46ICctJyArIGhsanMuSURFTlRfUkUsXG4gICAgICAgICAga2V5d29yZDogRElSRUNUSVZFUy5tYXAoeCA9PiBgJHt4fXwxLjVgKS5qb2luKFwiIFwiKVxuICAgICAgICB9LFxuICAgICAgICBjb250YWluczogW1BBUkFNU11cbiAgICAgIH0sXG4gICAgICBOVU1CRVIsXG4gICAgICBobGpzLlFVT1RFX1NUUklOR19NT0RFLFxuICAgICAgUkVDT1JEX0FDQ0VTUyxcbiAgICAgIFZBUjEsXG4gICAgICBWQVIyLFxuICAgICAgVFVQTEUsXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAvXFwuJC9cbiAgICAgIH0gLy8gcmVsZXZhbmNlIGJvb3N0ZXJcbiAgICBdXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXJsYW5nO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==