(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[146],{

/***/ "./node_modules/highlight.js/lib/languages/reasonml.js":
/*!*************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/reasonml.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: ReasonML
Description: Reason lets you write simple, fast and quality type safe code while leveraging both the JavaScript & OCaml ecosystems.
Website: https://reasonml.github.io
Author: Gidi Meir Morris <oss@gidi.io>
Category: functional
*/
function reasonml(hljs) {
  function orReValues(ops) {
    return ops
      .map(function(op) {
        return op
          .split('')
          .map(function(char) {
            return '\\' + char;
          })
          .join('');
      })
      .join('|');
  }

  const RE_IDENT = '~?[a-z$_][0-9a-zA-Z$_]*';
  const RE_MODULE_IDENT = '`?[A-Z$_][0-9a-zA-Z$_]*';

  const RE_PARAM_TYPEPARAM = '\'?[a-z$_][0-9a-z$_]*';
  const RE_PARAM_TYPE = '\\s*:\\s*[a-z$_][0-9a-z$_]*(\\(\\s*(' + RE_PARAM_TYPEPARAM + '\\s*(,' + RE_PARAM_TYPEPARAM + '\\s*)*)?\\))?';
  const RE_PARAM = RE_IDENT + '(' + RE_PARAM_TYPE + '){0,2}';
  const RE_OPERATOR = "(" + orReValues([
    '||',
    '++',
    '**',
    '+.',
    '*',
    '/',
    '*.',
    '/.',
    '...'
  ]) + "|\\|>|&&|==|===)";
  const RE_OPERATOR_SPACED = "\\s+" + RE_OPERATOR + "\\s+";

  const KEYWORDS = {
    keyword:
      'and as asr assert begin class constraint do done downto else end exception external ' +
      'for fun function functor if in include inherit initializer ' +
      'land lazy let lor lsl lsr lxor match method mod module mutable new nonrec ' +
      'object of open or private rec sig struct then to try type val virtual when while with',
    built_in:
      'array bool bytes char exn|5 float int int32 int64 list lazy_t|5 nativeint|5 ref string unit ',
    literal:
      'true false'
  };

  const RE_NUMBER = '\\b(0[xX][a-fA-F0-9_]+[Lln]?|' +
    '0[oO][0-7_]+[Lln]?|' +
    '0[bB][01_]+[Lln]?|' +
    '[0-9][0-9_]*([Lln]|(\\.[0-9_]*)?([eE][-+]?[0-9_]+)?)?)';

  const NUMBER_MODE = {
    className: 'number',
    relevance: 0,
    variants: [
      {
        begin: RE_NUMBER
      },
      {
        begin: '\\(-' + RE_NUMBER + '\\)'
      }
    ]
  };

  const OPERATOR_MODE = {
    className: 'operator',
    relevance: 0,
    begin: RE_OPERATOR
  };
  const LIST_CONTENTS_MODES = [
    {
      className: 'identifier',
      relevance: 0,
      begin: RE_IDENT
    },
    OPERATOR_MODE,
    NUMBER_MODE
  ];

  const MODULE_ACCESS_CONTENTS = [
    hljs.QUOTE_STRING_MODE,
    OPERATOR_MODE,
    {
      className: 'module',
      begin: "\\b" + RE_MODULE_IDENT,
      returnBegin: true,
      end: "\.",
      contains: [
        {
          className: 'identifier',
          begin: RE_MODULE_IDENT,
          relevance: 0
        }
      ]
    }
  ];

  const PARAMS_CONTENTS = [
    {
      className: 'module',
      begin: "\\b" + RE_MODULE_IDENT,
      returnBegin: true,
      end: "\.",
      relevance: 0,
      contains: [
        {
          className: 'identifier',
          begin: RE_MODULE_IDENT,
          relevance: 0
        }
      ]
    }
  ];

  const PARAMS_MODE = {
    begin: RE_IDENT,
    end: '(,|\\n|\\))',
    relevance: 0,
    contains: [
      OPERATOR_MODE,
      {
        className: 'typing',
        begin: ':',
        end: '(,|\\n)',
        returnBegin: true,
        relevance: 0,
        contains: PARAMS_CONTENTS
      }
    ]
  };

  const FUNCTION_BLOCK_MODE = {
    className: 'function',
    relevance: 0,
    keywords: KEYWORDS,
    variants: [
      {
        begin: '\\s(\\(\\.?.*?\\)|' + RE_IDENT + ')\\s*=>',
        end: '\\s*=>',
        returnBegin: true,
        relevance: 0,
        contains: [
          {
            className: 'params',
            variants: [
              {
                begin: RE_IDENT
              },
              {
                begin: RE_PARAM
              },
              {
                begin: /\(\s*\)/
              }
            ]
          }
        ]
      },
      {
        begin: '\\s\\(\\.?[^;\\|]*\\)\\s*=>',
        end: '\\s=>',
        returnBegin: true,
        relevance: 0,
        contains: [
          {
            className: 'params',
            relevance: 0,
            variants: [ PARAMS_MODE ]
          }
        ]
      },
      {
        begin: '\\(\\.\\s' + RE_IDENT + '\\)\\s*=>'
      }
    ]
  };
  MODULE_ACCESS_CONTENTS.push(FUNCTION_BLOCK_MODE);

  const CONSTRUCTOR_MODE = {
    className: 'constructor',
    begin: RE_MODULE_IDENT + '\\(',
    end: '\\)',
    illegal: '\\n',
    keywords: KEYWORDS,
    contains: [
      hljs.QUOTE_STRING_MODE,
      OPERATOR_MODE,
      {
        className: 'params',
        begin: '\\b' + RE_IDENT
      }
    ]
  };

  const PATTERN_MATCH_BLOCK_MODE = {
    className: 'pattern-match',
    begin: '\\|',
    returnBegin: true,
    keywords: KEYWORDS,
    end: '=>',
    relevance: 0,
    contains: [
      CONSTRUCTOR_MODE,
      OPERATOR_MODE,
      {
        relevance: 0,
        className: 'constructor',
        begin: RE_MODULE_IDENT
      }
    ]
  };

  const MODULE_ACCESS_MODE = {
    className: 'module-access',
    keywords: KEYWORDS,
    returnBegin: true,
    variants: [
      {
        begin: "\\b(" + RE_MODULE_IDENT + "\\.)+" + RE_IDENT
      },
      {
        begin: "\\b(" + RE_MODULE_IDENT + "\\.)+\\(",
        end: "\\)",
        returnBegin: true,
        contains: [
          FUNCTION_BLOCK_MODE,
          {
            begin: '\\(',
            end: '\\)',
            skip: true
          }
        ].concat(MODULE_ACCESS_CONTENTS)
      },
      {
        begin: "\\b(" + RE_MODULE_IDENT + "\\.)+\\{",
        end: /\}/
      }
    ],
    contains: MODULE_ACCESS_CONTENTS
  };

  PARAMS_CONTENTS.push(MODULE_ACCESS_MODE);

  return {
    name: 'ReasonML',
    aliases: [ 're' ],
    keywords: KEYWORDS,
    illegal: '(:-|:=|\\$\\{|\\+=)',
    contains: [
      hljs.COMMENT('/\\*', '\\*/', {
        illegal: '^(#,\\/\\/)'
      }),
      {
        className: 'character',
        begin: '\'(\\\\[^\']+|[^\'])\'',
        illegal: '\\n',
        relevance: 0
      },
      hljs.QUOTE_STRING_MODE,
      {
        className: 'literal',
        begin: '\\(\\)',
        relevance: 0
      },
      {
        className: 'literal',
        begin: '\\[\\|',
        end: '\\|\\]',
        relevance: 0,
        contains: LIST_CONTENTS_MODES
      },
      {
        className: 'literal',
        begin: '\\[',
        end: '\\]',
        relevance: 0,
        contains: LIST_CONTENTS_MODES
      },
      CONSTRUCTOR_MODE,
      {
        className: 'operator',
        begin: RE_OPERATOR_SPACED,
        illegal: '-->',
        relevance: 0
      },
      NUMBER_MODE,
      hljs.C_LINE_COMMENT_MODE,
      PATTERN_MATCH_BLOCK_MODE,
      FUNCTION_BLOCK_MODE,
      {
        className: 'module-def',
        begin: "\\bmodule\\s+" + RE_IDENT + "\\s+" + RE_MODULE_IDENT + "\\s+=\\s+\\{",
        end: /\}/,
        returnBegin: true,
        keywords: KEYWORDS,
        relevance: 0,
        contains: [
          {
            className: 'module',
            relevance: 0,
            begin: RE_MODULE_IDENT
          },
          {
            begin: /\{/,
            end: /\}/,
            skip: true
          }
        ].concat(MODULE_ACCESS_CONTENTS)
      },
      MODULE_ACCESS_MODE
    ]
  };
}

module.exports = reasonml;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3JlYXNvbm1sLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxJQUFJO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxtREFBbUQ7QUFDbkQsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0ZBQW9GO0FBQ3BGLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0Esc0JBQXNCO0FBQ3RCLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoic3RhdGljL2NodW5rcy8xNDYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuTGFuZ3VhZ2U6IFJlYXNvbk1MXG5EZXNjcmlwdGlvbjogUmVhc29uIGxldHMgeW91IHdyaXRlIHNpbXBsZSwgZmFzdCBhbmQgcXVhbGl0eSB0eXBlIHNhZmUgY29kZSB3aGlsZSBsZXZlcmFnaW5nIGJvdGggdGhlIEphdmFTY3JpcHQgJiBPQ2FtbCBlY29zeXN0ZW1zLlxuV2Vic2l0ZTogaHR0cHM6Ly9yZWFzb25tbC5naXRodWIuaW9cbkF1dGhvcjogR2lkaSBNZWlyIE1vcnJpcyA8b3NzQGdpZGkuaW8+XG5DYXRlZ29yeTogZnVuY3Rpb25hbFxuKi9cbmZ1bmN0aW9uIHJlYXNvbm1sKGhsanMpIHtcbiAgZnVuY3Rpb24gb3JSZVZhbHVlcyhvcHMpIHtcbiAgICByZXR1cm4gb3BzXG4gICAgICAubWFwKGZ1bmN0aW9uKG9wKSB7XG4gICAgICAgIHJldHVybiBvcFxuICAgICAgICAgIC5zcGxpdCgnJylcbiAgICAgICAgICAubWFwKGZ1bmN0aW9uKGNoYXIpIHtcbiAgICAgICAgICAgIHJldHVybiAnXFxcXCcgKyBjaGFyO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmpvaW4oJycpO1xuICAgICAgfSlcbiAgICAgIC5qb2luKCd8Jyk7XG4gIH1cblxuICBjb25zdCBSRV9JREVOVCA9ICd+P1thLXokX11bMC05YS16QS1aJF9dKic7XG4gIGNvbnN0IFJFX01PRFVMRV9JREVOVCA9ICdgP1tBLVokX11bMC05YS16QS1aJF9dKic7XG5cbiAgY29uc3QgUkVfUEFSQU1fVFlQRVBBUkFNID0gJ1xcJz9bYS16JF9dWzAtOWEteiRfXSonO1xuICBjb25zdCBSRV9QQVJBTV9UWVBFID0gJ1xcXFxzKjpcXFxccypbYS16JF9dWzAtOWEteiRfXSooXFxcXChcXFxccyooJyArIFJFX1BBUkFNX1RZUEVQQVJBTSArICdcXFxccyooLCcgKyBSRV9QQVJBTV9UWVBFUEFSQU0gKyAnXFxcXHMqKSopP1xcXFwpKT8nO1xuICBjb25zdCBSRV9QQVJBTSA9IFJFX0lERU5UICsgJygnICsgUkVfUEFSQU1fVFlQRSArICcpezAsMn0nO1xuICBjb25zdCBSRV9PUEVSQVRPUiA9IFwiKFwiICsgb3JSZVZhbHVlcyhbXG4gICAgJ3x8JyxcbiAgICAnKysnLFxuICAgICcqKicsXG4gICAgJysuJyxcbiAgICAnKicsXG4gICAgJy8nLFxuICAgICcqLicsXG4gICAgJy8uJyxcbiAgICAnLi4uJ1xuICBdKSArIFwifFxcXFx8PnwmJnw9PXw9PT0pXCI7XG4gIGNvbnN0IFJFX09QRVJBVE9SX1NQQUNFRCA9IFwiXFxcXHMrXCIgKyBSRV9PUEVSQVRPUiArIFwiXFxcXHMrXCI7XG5cbiAgY29uc3QgS0VZV09SRFMgPSB7XG4gICAga2V5d29yZDpcbiAgICAgICdhbmQgYXMgYXNyIGFzc2VydCBiZWdpbiBjbGFzcyBjb25zdHJhaW50IGRvIGRvbmUgZG93bnRvIGVsc2UgZW5kIGV4Y2VwdGlvbiBleHRlcm5hbCAnICtcbiAgICAgICdmb3IgZnVuIGZ1bmN0aW9uIGZ1bmN0b3IgaWYgaW4gaW5jbHVkZSBpbmhlcml0IGluaXRpYWxpemVyICcgK1xuICAgICAgJ2xhbmQgbGF6eSBsZXQgbG9yIGxzbCBsc3IgbHhvciBtYXRjaCBtZXRob2QgbW9kIG1vZHVsZSBtdXRhYmxlIG5ldyBub25yZWMgJyArXG4gICAgICAnb2JqZWN0IG9mIG9wZW4gb3IgcHJpdmF0ZSByZWMgc2lnIHN0cnVjdCB0aGVuIHRvIHRyeSB0eXBlIHZhbCB2aXJ0dWFsIHdoZW4gd2hpbGUgd2l0aCcsXG4gICAgYnVpbHRfaW46XG4gICAgICAnYXJyYXkgYm9vbCBieXRlcyBjaGFyIGV4bnw1IGZsb2F0IGludCBpbnQzMiBpbnQ2NCBsaXN0IGxhenlfdHw1IG5hdGl2ZWludHw1IHJlZiBzdHJpbmcgdW5pdCAnLFxuICAgIGxpdGVyYWw6XG4gICAgICAndHJ1ZSBmYWxzZSdcbiAgfTtcblxuICBjb25zdCBSRV9OVU1CRVIgPSAnXFxcXGIoMFt4WF1bYS1mQS1GMC05X10rW0xsbl0/fCcgK1xuICAgICcwW29PXVswLTdfXStbTGxuXT98JyArXG4gICAgJzBbYkJdWzAxX10rW0xsbl0/fCcgK1xuICAgICdbMC05XVswLTlfXSooW0xsbl18KFxcXFwuWzAtOV9dKik/KFtlRV1bLStdP1swLTlfXSspPyk/KSc7XG5cbiAgY29uc3QgTlVNQkVSX01PREUgPSB7XG4gICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICByZWxldmFuY2U6IDAsXG4gICAgdmFyaWFudHM6IFtcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IFJFX05VTUJFUlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICdcXFxcKC0nICsgUkVfTlVNQkVSICsgJ1xcXFwpJ1xuICAgICAgfVxuICAgIF1cbiAgfTtcblxuICBjb25zdCBPUEVSQVRPUl9NT0RFID0ge1xuICAgIGNsYXNzTmFtZTogJ29wZXJhdG9yJyxcbiAgICByZWxldmFuY2U6IDAsXG4gICAgYmVnaW46IFJFX09QRVJBVE9SXG4gIH07XG4gIGNvbnN0IExJU1RfQ09OVEVOVFNfTU9ERVMgPSBbXG4gICAge1xuICAgICAgY2xhc3NOYW1lOiAnaWRlbnRpZmllcicsXG4gICAgICByZWxldmFuY2U6IDAsXG4gICAgICBiZWdpbjogUkVfSURFTlRcbiAgICB9LFxuICAgIE9QRVJBVE9SX01PREUsXG4gICAgTlVNQkVSX01PREVcbiAgXTtcblxuICBjb25zdCBNT0RVTEVfQUNDRVNTX0NPTlRFTlRTID0gW1xuICAgIGhsanMuUVVPVEVfU1RSSU5HX01PREUsXG4gICAgT1BFUkFUT1JfTU9ERSxcbiAgICB7XG4gICAgICBjbGFzc05hbWU6ICdtb2R1bGUnLFxuICAgICAgYmVnaW46IFwiXFxcXGJcIiArIFJFX01PRFVMRV9JREVOVCxcbiAgICAgIHJldHVybkJlZ2luOiB0cnVlLFxuICAgICAgZW5kOiBcIlxcLlwiLFxuICAgICAgY29udGFpbnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGNsYXNzTmFtZTogJ2lkZW50aWZpZXInLFxuICAgICAgICAgIGJlZ2luOiBSRV9NT0RVTEVfSURFTlQsXG4gICAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF07XG5cbiAgY29uc3QgUEFSQU1TX0NPTlRFTlRTID0gW1xuICAgIHtcbiAgICAgIGNsYXNzTmFtZTogJ21vZHVsZScsXG4gICAgICBiZWdpbjogXCJcXFxcYlwiICsgUkVfTU9EVUxFX0lERU5ULFxuICAgICAgcmV0dXJuQmVnaW46IHRydWUsXG4gICAgICBlbmQ6IFwiXFwuXCIsXG4gICAgICByZWxldmFuY2U6IDAsXG4gICAgICBjb250YWluczogW1xuICAgICAgICB7XG4gICAgICAgICAgY2xhc3NOYW1lOiAnaWRlbnRpZmllcicsXG4gICAgICAgICAgYmVnaW46IFJFX01PRFVMRV9JREVOVCxcbiAgICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXTtcblxuICBjb25zdCBQQVJBTVNfTU9ERSA9IHtcbiAgICBiZWdpbjogUkVfSURFTlQsXG4gICAgZW5kOiAnKCx8XFxcXG58XFxcXCkpJyxcbiAgICByZWxldmFuY2U6IDAsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIE9QRVJBVE9SX01PREUsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3R5cGluZycsXG4gICAgICAgIGJlZ2luOiAnOicsXG4gICAgICAgIGVuZDogJygsfFxcXFxuKScsXG4gICAgICAgIHJldHVybkJlZ2luOiB0cnVlLFxuICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgIGNvbnRhaW5zOiBQQVJBTVNfQ09OVEVOVFNcbiAgICAgIH1cbiAgICBdXG4gIH07XG5cbiAgY29uc3QgRlVOQ1RJT05fQkxPQ0tfTU9ERSA9IHtcbiAgICBjbGFzc05hbWU6ICdmdW5jdGlvbicsXG4gICAgcmVsZXZhbmNlOiAwLFxuICAgIGtleXdvcmRzOiBLRVlXT1JEUyxcbiAgICB2YXJpYW50czogW1xuICAgICAge1xuICAgICAgICBiZWdpbjogJ1xcXFxzKFxcXFwoXFxcXC4/Lio/XFxcXCl8JyArIFJFX0lERU5UICsgJylcXFxccyo9PicsXG4gICAgICAgIGVuZDogJ1xcXFxzKj0+JyxcbiAgICAgICAgcmV0dXJuQmVnaW46IHRydWUsXG4gICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdwYXJhbXMnLFxuICAgICAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJlZ2luOiBSRV9JREVOVFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYmVnaW46IFJFX1BBUkFNXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBiZWdpbjogL1xcKFxccypcXCkvXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnXFxcXHNcXFxcKFxcXFwuP1teO1xcXFx8XSpcXFxcKVxcXFxzKj0+JyxcbiAgICAgICAgZW5kOiAnXFxcXHM9PicsXG4gICAgICAgIHJldHVybkJlZ2luOiB0cnVlLFxuICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAncGFyYW1zJyxcbiAgICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICAgIHZhcmlhbnRzOiBbIFBBUkFNU19NT0RFIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnXFxcXChcXFxcLlxcXFxzJyArIFJFX0lERU5UICsgJ1xcXFwpXFxcXHMqPT4nXG4gICAgICB9XG4gICAgXVxuICB9O1xuICBNT0RVTEVfQUNDRVNTX0NPTlRFTlRTLnB1c2goRlVOQ1RJT05fQkxPQ0tfTU9ERSk7XG5cbiAgY29uc3QgQ09OU1RSVUNUT1JfTU9ERSA9IHtcbiAgICBjbGFzc05hbWU6ICdjb25zdHJ1Y3RvcicsXG4gICAgYmVnaW46IFJFX01PRFVMRV9JREVOVCArICdcXFxcKCcsXG4gICAgZW5kOiAnXFxcXCknLFxuICAgIGlsbGVnYWw6ICdcXFxcbicsXG4gICAga2V5d29yZHM6IEtFWVdPUkRTLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBobGpzLlFVT1RFX1NUUklOR19NT0RFLFxuICAgICAgT1BFUkFUT1JfTU9ERSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAncGFyYW1zJyxcbiAgICAgICAgYmVnaW46ICdcXFxcYicgKyBSRV9JREVOVFxuICAgICAgfVxuICAgIF1cbiAgfTtcblxuICBjb25zdCBQQVRURVJOX01BVENIX0JMT0NLX01PREUgPSB7XG4gICAgY2xhc3NOYW1lOiAncGF0dGVybi1tYXRjaCcsXG4gICAgYmVnaW46ICdcXFxcfCcsXG4gICAgcmV0dXJuQmVnaW46IHRydWUsXG4gICAga2V5d29yZHM6IEtFWVdPUkRTLFxuICAgIGVuZDogJz0+JyxcbiAgICByZWxldmFuY2U6IDAsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIENPTlNUUlVDVE9SX01PREUsXG4gICAgICBPUEVSQVRPUl9NT0RFLFxuICAgICAge1xuICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgIGNsYXNzTmFtZTogJ2NvbnN0cnVjdG9yJyxcbiAgICAgICAgYmVnaW46IFJFX01PRFVMRV9JREVOVFxuICAgICAgfVxuICAgIF1cbiAgfTtcblxuICBjb25zdCBNT0RVTEVfQUNDRVNTX01PREUgPSB7XG4gICAgY2xhc3NOYW1lOiAnbW9kdWxlLWFjY2VzcycsXG4gICAga2V5d29yZHM6IEtFWVdPUkRTLFxuICAgIHJldHVybkJlZ2luOiB0cnVlLFxuICAgIHZhcmlhbnRzOiBbXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiBcIlxcXFxiKFwiICsgUkVfTU9EVUxFX0lERU5UICsgXCJcXFxcLikrXCIgKyBSRV9JREVOVFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IFwiXFxcXGIoXCIgKyBSRV9NT0RVTEVfSURFTlQgKyBcIlxcXFwuKStcXFxcKFwiLFxuICAgICAgICBlbmQ6IFwiXFxcXClcIixcbiAgICAgICAgcmV0dXJuQmVnaW46IHRydWUsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgRlVOQ1RJT05fQkxPQ0tfTU9ERSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogJ1xcXFwoJyxcbiAgICAgICAgICAgIGVuZDogJ1xcXFwpJyxcbiAgICAgICAgICAgIHNraXA6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIF0uY29uY2F0KE1PRFVMRV9BQ0NFU1NfQ09OVEVOVFMpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogXCJcXFxcYihcIiArIFJFX01PRFVMRV9JREVOVCArIFwiXFxcXC4pK1xcXFx7XCIsXG4gICAgICAgIGVuZDogL1xcfS9cbiAgICAgIH1cbiAgICBdLFxuICAgIGNvbnRhaW5zOiBNT0RVTEVfQUNDRVNTX0NPTlRFTlRTXG4gIH07XG5cbiAgUEFSQU1TX0NPTlRFTlRTLnB1c2goTU9EVUxFX0FDQ0VTU19NT0RFKTtcblxuICByZXR1cm4ge1xuICAgIG5hbWU6ICdSZWFzb25NTCcsXG4gICAgYWxpYXNlczogWyAncmUnIF0sXG4gICAga2V5d29yZHM6IEtFWVdPUkRTLFxuICAgIGlsbGVnYWw6ICcoOi18Oj18XFxcXCRcXFxce3xcXFxcKz0pJyxcbiAgICBjb250YWluczogW1xuICAgICAgaGxqcy5DT01NRU5UKCcvXFxcXConLCAnXFxcXCovJywge1xuICAgICAgICBpbGxlZ2FsOiAnXigjLFxcXFwvXFxcXC8pJ1xuICAgICAgfSksXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2NoYXJhY3RlcicsXG4gICAgICAgIGJlZ2luOiAnXFwnKFxcXFxcXFxcW15cXCddK3xbXlxcJ10pXFwnJyxcbiAgICAgICAgaWxsZWdhbDogJ1xcXFxuJyxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuICAgICAgaGxqcy5RVU9URV9TVFJJTkdfTU9ERSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbGl0ZXJhbCcsXG4gICAgICAgIGJlZ2luOiAnXFxcXChcXFxcKScsXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbGl0ZXJhbCcsXG4gICAgICAgIGJlZ2luOiAnXFxcXFtcXFxcfCcsXG4gICAgICAgIGVuZDogJ1xcXFx8XFxcXF0nLFxuICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgIGNvbnRhaW5zOiBMSVNUX0NPTlRFTlRTX01PREVTXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdsaXRlcmFsJyxcbiAgICAgICAgYmVnaW46ICdcXFxcWycsXG4gICAgICAgIGVuZDogJ1xcXFxdJyxcbiAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICBjb250YWluczogTElTVF9DT05URU5UU19NT0RFU1xuICAgICAgfSxcbiAgICAgIENPTlNUUlVDVE9SX01PREUsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ29wZXJhdG9yJyxcbiAgICAgICAgYmVnaW46IFJFX09QRVJBVE9SX1NQQUNFRCxcbiAgICAgICAgaWxsZWdhbDogJy0tPicsXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIE5VTUJFUl9NT0RFLFxuICAgICAgaGxqcy5DX0xJTkVfQ09NTUVOVF9NT0RFLFxuICAgICAgUEFUVEVSTl9NQVRDSF9CTE9DS19NT0RFLFxuICAgICAgRlVOQ1RJT05fQkxPQ0tfTU9ERSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbW9kdWxlLWRlZicsXG4gICAgICAgIGJlZ2luOiBcIlxcXFxibW9kdWxlXFxcXHMrXCIgKyBSRV9JREVOVCArIFwiXFxcXHMrXCIgKyBSRV9NT0RVTEVfSURFTlQgKyBcIlxcXFxzKz1cXFxccytcXFxce1wiLFxuICAgICAgICBlbmQ6IC9cXH0vLFxuICAgICAgICByZXR1cm5CZWdpbjogdHJ1ZSxcbiAgICAgICAga2V5d29yZHM6IEtFWVdPUkRTLFxuICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnbW9kdWxlJyxcbiAgICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICAgIGJlZ2luOiBSRV9NT0RVTEVfSURFTlRcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luOiAvXFx7LyxcbiAgICAgICAgICAgIGVuZDogL1xcfS8sXG4gICAgICAgICAgICBza2lwOiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICBdLmNvbmNhdChNT0RVTEVfQUNDRVNTX0NPTlRFTlRTKVxuICAgICAgfSxcbiAgICAgIE1PRFVMRV9BQ0NFU1NfTU9ERVxuICAgIF1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSByZWFzb25tbDtcbiJdLCJzb3VyY2VSb290IjoiIn0=