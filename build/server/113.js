exports.ids = [113];
exports.modules = {

/***/ "./node_modules/highlight.js/lib/languages/moonscript.js":
/*!***************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/moonscript.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: MoonScript
Author: Billy Quith <chinbillybilbo@gmail.com>
Description: MoonScript is a programming language that transcompiles to Lua.
Origin: coffeescript.js
Website: http://moonscript.org/
Category: scripting
*/

function moonscript(hljs) {
  const KEYWORDS = {
    keyword:
      // Moonscript keywords
      'if then not for in while do return else elseif break continue switch and or ' +
      'unless when class extends super local import export from using',
    literal:
      'true false nil',
    built_in:
      '_G _VERSION assert collectgarbage dofile error getfenv getmetatable ipairs load ' +
      'loadfile loadstring module next pairs pcall print rawequal rawget rawset require ' +
      'select setfenv setmetatable tonumber tostring type unpack xpcall coroutine debug ' +
      'io math os package string table'
  };
  const JS_IDENT_RE = '[A-Za-z$_][0-9A-Za-z$_]*';
  const SUBST = {
    className: 'subst',
    begin: /#\{/,
    end: /\}/,
    keywords: KEYWORDS
  };
  const EXPRESSIONS = [
    hljs.inherit(hljs.C_NUMBER_MODE,
      {
        starts: {
          end: '(\\s*/)?',
          relevance: 0
        }
      }), // a number tries to eat the following slash to prevent treating it as a regexp
    {
      className: 'string',
      variants: [
        {
          begin: /'/,
          end: /'/,
          contains: [ hljs.BACKSLASH_ESCAPE ]
        },
        {
          begin: /"/,
          end: /"/,
          contains: [
            hljs.BACKSLASH_ESCAPE,
            SUBST
          ]
        }
      ]
    },
    {
      className: 'built_in',
      begin: '@__' + hljs.IDENT_RE
    },
    {
      begin: '@' + hljs.IDENT_RE // relevance booster on par with CoffeeScript
    },
    {
      begin: hljs.IDENT_RE + '\\\\' + hljs.IDENT_RE // inst\method
    }
  ];
  SUBST.contains = EXPRESSIONS;

  const TITLE = hljs.inherit(hljs.TITLE_MODE, {
    begin: JS_IDENT_RE
  });
  const POSSIBLE_PARAMS_RE = '(\\(.*\\)\\s*)?\\B[-=]>';
  const PARAMS = {
    className: 'params',
    begin: '\\([^\\(]',
    returnBegin: true,
    /* We need another contained nameless mode to not have every nested
    pair of parens to be called "params" */
    contains: [
      {
        begin: /\(/,
        end: /\)/,
        keywords: KEYWORDS,
        contains: [ 'self' ].concat(EXPRESSIONS)
      }
    ]
  };

  return {
    name: 'MoonScript',
    aliases: [ 'moon' ],
    keywords: KEYWORDS,
    illegal: /\/\*/,
    contains: EXPRESSIONS.concat([
      hljs.COMMENT('--', '$'),
      {
        className: 'function', // function: -> =>
        begin: '^\\s*' + JS_IDENT_RE + '\\s*=\\s*' + POSSIBLE_PARAMS_RE,
        end: '[-=]>',
        returnBegin: true,
        contains: [
          TITLE,
          PARAMS
        ]
      },
      {
        begin: /[\(,:=]\s*/, // anonymous function start
        relevance: 0,
        contains: [
          {
            className: 'function',
            begin: POSSIBLE_PARAMS_RE,
            end: '[-=]>',
            returnBegin: true,
            contains: [ PARAMS ]
          }
        ]
      },
      {
        className: 'class',
        beginKeywords: 'class',
        end: '$',
        illegal: /[:="\[\]]/,
        contains: [
          {
            beginKeywords: 'extends',
            endsWithParent: true,
            illegal: /[:="\[\]]/,
            contains: [ TITLE ]
          },
          TITLE
        ]
      },
      {
        className: 'name', // table
        begin: JS_IDENT_RE + ':',
        end: ':',
        returnBegin: true,
        returnEnd: true,
        relevance: 0
      }
    ])
  };
}

module.exports = moonscript;


/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvbW9vbnNjcmlwdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiMTEzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBNb29uU2NyaXB0XG5BdXRob3I6IEJpbGx5IFF1aXRoIDxjaGluYmlsbHliaWxib0BnbWFpbC5jb20+XG5EZXNjcmlwdGlvbjogTW9vblNjcmlwdCBpcyBhIHByb2dyYW1taW5nIGxhbmd1YWdlIHRoYXQgdHJhbnNjb21waWxlcyB0byBMdWEuXG5PcmlnaW46IGNvZmZlZXNjcmlwdC5qc1xuV2Vic2l0ZTogaHR0cDovL21vb25zY3JpcHQub3JnL1xuQ2F0ZWdvcnk6IHNjcmlwdGluZ1xuKi9cblxuZnVuY3Rpb24gbW9vbnNjcmlwdChobGpzKSB7XG4gIGNvbnN0IEtFWVdPUkRTID0ge1xuICAgIGtleXdvcmQ6XG4gICAgICAvLyBNb29uc2NyaXB0IGtleXdvcmRzXG4gICAgICAnaWYgdGhlbiBub3QgZm9yIGluIHdoaWxlIGRvIHJldHVybiBlbHNlIGVsc2VpZiBicmVhayBjb250aW51ZSBzd2l0Y2ggYW5kIG9yICcgK1xuICAgICAgJ3VubGVzcyB3aGVuIGNsYXNzIGV4dGVuZHMgc3VwZXIgbG9jYWwgaW1wb3J0IGV4cG9ydCBmcm9tIHVzaW5nJyxcbiAgICBsaXRlcmFsOlxuICAgICAgJ3RydWUgZmFsc2UgbmlsJyxcbiAgICBidWlsdF9pbjpcbiAgICAgICdfRyBfVkVSU0lPTiBhc3NlcnQgY29sbGVjdGdhcmJhZ2UgZG9maWxlIGVycm9yIGdldGZlbnYgZ2V0bWV0YXRhYmxlIGlwYWlycyBsb2FkICcgK1xuICAgICAgJ2xvYWRmaWxlIGxvYWRzdHJpbmcgbW9kdWxlIG5leHQgcGFpcnMgcGNhbGwgcHJpbnQgcmF3ZXF1YWwgcmF3Z2V0IHJhd3NldCByZXF1aXJlICcgK1xuICAgICAgJ3NlbGVjdCBzZXRmZW52IHNldG1ldGF0YWJsZSB0b251bWJlciB0b3N0cmluZyB0eXBlIHVucGFjayB4cGNhbGwgY29yb3V0aW5lIGRlYnVnICcgK1xuICAgICAgJ2lvIG1hdGggb3MgcGFja2FnZSBzdHJpbmcgdGFibGUnXG4gIH07XG4gIGNvbnN0IEpTX0lERU5UX1JFID0gJ1tBLVphLXokX11bMC05QS1aYS16JF9dKic7XG4gIGNvbnN0IFNVQlNUID0ge1xuICAgIGNsYXNzTmFtZTogJ3N1YnN0JyxcbiAgICBiZWdpbjogLyNcXHsvLFxuICAgIGVuZDogL1xcfS8sXG4gICAga2V5d29yZHM6IEtFWVdPUkRTXG4gIH07XG4gIGNvbnN0IEVYUFJFU1NJT05TID0gW1xuICAgIGhsanMuaW5oZXJpdChobGpzLkNfTlVNQkVSX01PREUsXG4gICAgICB7XG4gICAgICAgIHN0YXJ0czoge1xuICAgICAgICAgIGVuZDogJyhcXFxccyovKT8nLFxuICAgICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgICB9XG4gICAgICB9KSwgLy8gYSBudW1iZXIgdHJpZXMgdG8gZWF0IHRoZSBmb2xsb3dpbmcgc2xhc2ggdG8gcHJldmVudCB0cmVhdGluZyBpdCBhcyBhIHJlZ2V4cFxuICAgIHtcbiAgICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgICB2YXJpYW50czogW1xuICAgICAgICB7XG4gICAgICAgICAgYmVnaW46IC8nLyxcbiAgICAgICAgICBlbmQ6IC8nLyxcbiAgICAgICAgICBjb250YWluczogWyBobGpzLkJBQ0tTTEFTSF9FU0NBUEUgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgYmVnaW46IC9cIi8sXG4gICAgICAgICAgZW5kOiAvXCIvLFxuICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICBobGpzLkJBQ0tTTEFTSF9FU0NBUEUsXG4gICAgICAgICAgICBTVUJTVFxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgY2xhc3NOYW1lOiAnYnVpbHRfaW4nLFxuICAgICAgYmVnaW46ICdAX18nICsgaGxqcy5JREVOVF9SRVxuICAgIH0sXG4gICAge1xuICAgICAgYmVnaW46ICdAJyArIGhsanMuSURFTlRfUkUgLy8gcmVsZXZhbmNlIGJvb3N0ZXIgb24gcGFyIHdpdGggQ29mZmVlU2NyaXB0XG4gICAgfSxcbiAgICB7XG4gICAgICBiZWdpbjogaGxqcy5JREVOVF9SRSArICdcXFxcXFxcXCcgKyBobGpzLklERU5UX1JFIC8vIGluc3RcXG1ldGhvZFxuICAgIH1cbiAgXTtcbiAgU1VCU1QuY29udGFpbnMgPSBFWFBSRVNTSU9OUztcblxuICBjb25zdCBUSVRMRSA9IGhsanMuaW5oZXJpdChobGpzLlRJVExFX01PREUsIHtcbiAgICBiZWdpbjogSlNfSURFTlRfUkVcbiAgfSk7XG4gIGNvbnN0IFBPU1NJQkxFX1BBUkFNU19SRSA9ICcoXFxcXCguKlxcXFwpXFxcXHMqKT9cXFxcQlstPV0+JztcbiAgY29uc3QgUEFSQU1TID0ge1xuICAgIGNsYXNzTmFtZTogJ3BhcmFtcycsXG4gICAgYmVnaW46ICdcXFxcKFteXFxcXChdJyxcbiAgICByZXR1cm5CZWdpbjogdHJ1ZSxcbiAgICAvKiBXZSBuZWVkIGFub3RoZXIgY29udGFpbmVkIG5hbWVsZXNzIG1vZGUgdG8gbm90IGhhdmUgZXZlcnkgbmVzdGVkXG4gICAgcGFpciBvZiBwYXJlbnMgdG8gYmUgY2FsbGVkIFwicGFyYW1zXCIgKi9cbiAgICBjb250YWluczogW1xuICAgICAge1xuICAgICAgICBiZWdpbjogL1xcKC8sXG4gICAgICAgIGVuZDogL1xcKS8sXG4gICAgICAgIGtleXdvcmRzOiBLRVlXT1JEUyxcbiAgICAgICAgY29udGFpbnM6IFsgJ3NlbGYnIF0uY29uY2F0KEVYUFJFU1NJT05TKVxuICAgICAgfVxuICAgIF1cbiAgfTtcblxuICByZXR1cm4ge1xuICAgIG5hbWU6ICdNb29uU2NyaXB0JyxcbiAgICBhbGlhc2VzOiBbICdtb29uJyBdLFxuICAgIGtleXdvcmRzOiBLRVlXT1JEUyxcbiAgICBpbGxlZ2FsOiAvXFwvXFwqLyxcbiAgICBjb250YWluczogRVhQUkVTU0lPTlMuY29uY2F0KFtcbiAgICAgIGhsanMuQ09NTUVOVCgnLS0nLCAnJCcpLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdmdW5jdGlvbicsIC8vIGZ1bmN0aW9uOiAtPiA9PlxuICAgICAgICBiZWdpbjogJ15cXFxccyonICsgSlNfSURFTlRfUkUgKyAnXFxcXHMqPVxcXFxzKicgKyBQT1NTSUJMRV9QQVJBTVNfUkUsXG4gICAgICAgIGVuZDogJ1stPV0+JyxcbiAgICAgICAgcmV0dXJuQmVnaW46IHRydWUsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgVElUTEUsXG4gICAgICAgICAgUEFSQU1TXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAvW1xcKCw6PV1cXHMqLywgLy8gYW5vbnltb3VzIGZ1bmN0aW9uIHN0YXJ0XG4gICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdmdW5jdGlvbicsXG4gICAgICAgICAgICBiZWdpbjogUE9TU0lCTEVfUEFSQU1TX1JFLFxuICAgICAgICAgICAgZW5kOiAnWy09XT4nLFxuICAgICAgICAgICAgcmV0dXJuQmVnaW46IHRydWUsXG4gICAgICAgICAgICBjb250YWluczogWyBQQVJBTVMgXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnY2xhc3MnLFxuICAgICAgICBiZWdpbktleXdvcmRzOiAnY2xhc3MnLFxuICAgICAgICBlbmQ6ICckJyxcbiAgICAgICAgaWxsZWdhbDogL1s6PVwiXFxbXFxdXS8sXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW5LZXl3b3JkczogJ2V4dGVuZHMnLFxuICAgICAgICAgICAgZW5kc1dpdGhQYXJlbnQ6IHRydWUsXG4gICAgICAgICAgICBpbGxlZ2FsOiAvWzo9XCJcXFtcXF1dLyxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbIFRJVExFIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFRJVExFXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ25hbWUnLCAvLyB0YWJsZVxuICAgICAgICBiZWdpbjogSlNfSURFTlRfUkUgKyAnOicsXG4gICAgICAgIGVuZDogJzonLFxuICAgICAgICByZXR1cm5CZWdpbjogdHJ1ZSxcbiAgICAgICAgcmV0dXJuRW5kOiB0cnVlLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH1cbiAgICBdKVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1vb25zY3JpcHQ7XG4iXSwic291cmNlUm9vdCI6IiJ9