exports.ids = [101];
exports.modules = {

/***/ "./node_modules/highlight.js/lib/languages/lua.js":
/*!********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/lua.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Lua
Description: Lua is a powerful, efficient, lightweight, embeddable scripting language.
Author: Andrew Fedorov <dmmdrs@mail.ru>
Category: common, scripting
Website: https://www.lua.org
*/

function lua(hljs) {
  const OPENING_LONG_BRACKET = '\\[=*\\[';
  const CLOSING_LONG_BRACKET = '\\]=*\\]';
  const LONG_BRACKETS = {
    begin: OPENING_LONG_BRACKET,
    end: CLOSING_LONG_BRACKET,
    contains: ['self']
  };
  const COMMENTS = [
    hljs.COMMENT('--(?!' + OPENING_LONG_BRACKET + ')', '$'),
    hljs.COMMENT(
      '--' + OPENING_LONG_BRACKET,
      CLOSING_LONG_BRACKET,
      {
        contains: [LONG_BRACKETS],
        relevance: 10
      }
    )
  ];
  return {
    name: 'Lua',
    keywords: {
      $pattern: hljs.UNDERSCORE_IDENT_RE,
      literal: "true false nil",
      keyword: "and break do else elseif end for goto if in local not or repeat return then until while",
      built_in:
        // Metatags and globals:
        '_G _ENV _VERSION __index __newindex __mode __call __metatable __tostring __len ' +
        '__gc __add __sub __mul __div __mod __pow __concat __unm __eq __lt __le assert ' +
        // Standard methods and properties:
        'collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring ' +
        'module next pairs pcall print rawequal rawget rawset require select setfenv ' +
        'setmetatable tonumber tostring type unpack xpcall arg self ' +
        // Library methods and properties (one line per library):
        'coroutine resume yield status wrap create running debug getupvalue ' +
        'debug sethook getmetatable gethook setmetatable setlocal traceback setfenv getinfo setupvalue getlocal getregistry getfenv ' +
        'io lines write close flush open output type read stderr stdin input stdout popen tmpfile ' +
        'math log max acos huge ldexp pi cos tanh pow deg tan cosh sinh random randomseed frexp ceil floor rad abs sqrt modf asin min mod fmod log10 atan2 exp sin atan ' +
        'os exit setlocale date getenv difftime remove time clock tmpname rename execute package preload loadlib loaded loaders cpath config path seeall ' +
        'string sub upper len gfind rep find match char dump gmatch reverse byte format gsub lower ' +
        'table setn insert getn foreachi maxn foreach concat sort remove'
    },
    contains: COMMENTS.concat([
      {
        className: 'function',
        beginKeywords: 'function',
        end: '\\)',
        contains: [
          hljs.inherit(hljs.TITLE_MODE, {
            begin: '([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*'
          }),
          {
            className: 'params',
            begin: '\\(',
            endsWithParent: true,
            contains: COMMENTS
          }
        ].concat(COMMENTS)
      },
      hljs.C_NUMBER_MODE,
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE,
      {
        className: 'string',
        begin: OPENING_LONG_BRACKET,
        end: CLOSING_LONG_BRACKET,
        contains: [LONG_BRACKETS],
        relevance: 5
      }
    ])
  };
}

module.exports = lua;


/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvbHVhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiMTAxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBMdWFcbkRlc2NyaXB0aW9uOiBMdWEgaXMgYSBwb3dlcmZ1bCwgZWZmaWNpZW50LCBsaWdodHdlaWdodCwgZW1iZWRkYWJsZSBzY3JpcHRpbmcgbGFuZ3VhZ2UuXG5BdXRob3I6IEFuZHJldyBGZWRvcm92IDxkbW1kcnNAbWFpbC5ydT5cbkNhdGVnb3J5OiBjb21tb24sIHNjcmlwdGluZ1xuV2Vic2l0ZTogaHR0cHM6Ly93d3cubHVhLm9yZ1xuKi9cblxuZnVuY3Rpb24gbHVhKGhsanMpIHtcbiAgY29uc3QgT1BFTklOR19MT05HX0JSQUNLRVQgPSAnXFxcXFs9KlxcXFxbJztcbiAgY29uc3QgQ0xPU0lOR19MT05HX0JSQUNLRVQgPSAnXFxcXF09KlxcXFxdJztcbiAgY29uc3QgTE9OR19CUkFDS0VUUyA9IHtcbiAgICBiZWdpbjogT1BFTklOR19MT05HX0JSQUNLRVQsXG4gICAgZW5kOiBDTE9TSU5HX0xPTkdfQlJBQ0tFVCxcbiAgICBjb250YWluczogWydzZWxmJ11cbiAgfTtcbiAgY29uc3QgQ09NTUVOVFMgPSBbXG4gICAgaGxqcy5DT01NRU5UKCctLSg/IScgKyBPUEVOSU5HX0xPTkdfQlJBQ0tFVCArICcpJywgJyQnKSxcbiAgICBobGpzLkNPTU1FTlQoXG4gICAgICAnLS0nICsgT1BFTklOR19MT05HX0JSQUNLRVQsXG4gICAgICBDTE9TSU5HX0xPTkdfQlJBQ0tFVCxcbiAgICAgIHtcbiAgICAgICAgY29udGFpbnM6IFtMT05HX0JSQUNLRVRTXSxcbiAgICAgICAgcmVsZXZhbmNlOiAxMFxuICAgICAgfVxuICAgIClcbiAgXTtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnTHVhJyxcbiAgICBrZXl3b3Jkczoge1xuICAgICAgJHBhdHRlcm46IGhsanMuVU5ERVJTQ09SRV9JREVOVF9SRSxcbiAgICAgIGxpdGVyYWw6IFwidHJ1ZSBmYWxzZSBuaWxcIixcbiAgICAgIGtleXdvcmQ6IFwiYW5kIGJyZWFrIGRvIGVsc2UgZWxzZWlmIGVuZCBmb3IgZ290byBpZiBpbiBsb2NhbCBub3Qgb3IgcmVwZWF0IHJldHVybiB0aGVuIHVudGlsIHdoaWxlXCIsXG4gICAgICBidWlsdF9pbjpcbiAgICAgICAgLy8gTWV0YXRhZ3MgYW5kIGdsb2JhbHM6XG4gICAgICAgICdfRyBfRU5WIF9WRVJTSU9OIF9faW5kZXggX19uZXdpbmRleCBfX21vZGUgX19jYWxsIF9fbWV0YXRhYmxlIF9fdG9zdHJpbmcgX19sZW4gJyArXG4gICAgICAgICdfX2djIF9fYWRkIF9fc3ViIF9fbXVsIF9fZGl2IF9fbW9kIF9fcG93IF9fY29uY2F0IF9fdW5tIF9fZXEgX19sdCBfX2xlIGFzc2VydCAnICtcbiAgICAgICAgLy8gU3RhbmRhcmQgbWV0aG9kcyBhbmQgcHJvcGVydGllczpcbiAgICAgICAgJ2NvbGxlY3RnYXJiYWdlIGRvZmlsZSBlcnJvciBnZXRmZW52IGdldG1ldGF0YWJsZSBpcGFpcnMgbG9hZCBsb2FkZmlsZSBsb2Fkc3RyaW5nICcgK1xuICAgICAgICAnbW9kdWxlIG5leHQgcGFpcnMgcGNhbGwgcHJpbnQgcmF3ZXF1YWwgcmF3Z2V0IHJhd3NldCByZXF1aXJlIHNlbGVjdCBzZXRmZW52ICcgK1xuICAgICAgICAnc2V0bWV0YXRhYmxlIHRvbnVtYmVyIHRvc3RyaW5nIHR5cGUgdW5wYWNrIHhwY2FsbCBhcmcgc2VsZiAnICtcbiAgICAgICAgLy8gTGlicmFyeSBtZXRob2RzIGFuZCBwcm9wZXJ0aWVzIChvbmUgbGluZSBwZXIgbGlicmFyeSk6XG4gICAgICAgICdjb3JvdXRpbmUgcmVzdW1lIHlpZWxkIHN0YXR1cyB3cmFwIGNyZWF0ZSBydW5uaW5nIGRlYnVnIGdldHVwdmFsdWUgJyArXG4gICAgICAgICdkZWJ1ZyBzZXRob29rIGdldG1ldGF0YWJsZSBnZXRob29rIHNldG1ldGF0YWJsZSBzZXRsb2NhbCB0cmFjZWJhY2sgc2V0ZmVudiBnZXRpbmZvIHNldHVwdmFsdWUgZ2V0bG9jYWwgZ2V0cmVnaXN0cnkgZ2V0ZmVudiAnICtcbiAgICAgICAgJ2lvIGxpbmVzIHdyaXRlIGNsb3NlIGZsdXNoIG9wZW4gb3V0cHV0IHR5cGUgcmVhZCBzdGRlcnIgc3RkaW4gaW5wdXQgc3Rkb3V0IHBvcGVuIHRtcGZpbGUgJyArXG4gICAgICAgICdtYXRoIGxvZyBtYXggYWNvcyBodWdlIGxkZXhwIHBpIGNvcyB0YW5oIHBvdyBkZWcgdGFuIGNvc2ggc2luaCByYW5kb20gcmFuZG9tc2VlZCBmcmV4cCBjZWlsIGZsb29yIHJhZCBhYnMgc3FydCBtb2RmIGFzaW4gbWluIG1vZCBmbW9kIGxvZzEwIGF0YW4yIGV4cCBzaW4gYXRhbiAnICtcbiAgICAgICAgJ29zIGV4aXQgc2V0bG9jYWxlIGRhdGUgZ2V0ZW52IGRpZmZ0aW1lIHJlbW92ZSB0aW1lIGNsb2NrIHRtcG5hbWUgcmVuYW1lIGV4ZWN1dGUgcGFja2FnZSBwcmVsb2FkIGxvYWRsaWIgbG9hZGVkIGxvYWRlcnMgY3BhdGggY29uZmlnIHBhdGggc2VlYWxsICcgK1xuICAgICAgICAnc3RyaW5nIHN1YiB1cHBlciBsZW4gZ2ZpbmQgcmVwIGZpbmQgbWF0Y2ggY2hhciBkdW1wIGdtYXRjaCByZXZlcnNlIGJ5dGUgZm9ybWF0IGdzdWIgbG93ZXIgJyArXG4gICAgICAgICd0YWJsZSBzZXRuIGluc2VydCBnZXRuIGZvcmVhY2hpIG1heG4gZm9yZWFjaCBjb25jYXQgc29ydCByZW1vdmUnXG4gICAgfSxcbiAgICBjb250YWluczogQ09NTUVOVFMuY29uY2F0KFtcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnZnVuY3Rpb24nLFxuICAgICAgICBiZWdpbktleXdvcmRzOiAnZnVuY3Rpb24nLFxuICAgICAgICBlbmQ6ICdcXFxcKScsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgaGxqcy5pbmhlcml0KGhsanMuVElUTEVfTU9ERSwge1xuICAgICAgICAgICAgYmVnaW46ICcoW19hLXpBLVpdXFxcXHcqXFxcXC4pKihbX2EtekEtWl1cXFxcdyo6KT9bX2EtekEtWl1cXFxcdyonXG4gICAgICAgICAgfSksXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAncGFyYW1zJyxcbiAgICAgICAgICAgIGJlZ2luOiAnXFxcXCgnLFxuICAgICAgICAgICAgZW5kc1dpdGhQYXJlbnQ6IHRydWUsXG4gICAgICAgICAgICBjb250YWluczogQ09NTUVOVFNcbiAgICAgICAgICB9XG4gICAgICAgIF0uY29uY2F0KENPTU1FTlRTKVxuICAgICAgfSxcbiAgICAgIGhsanMuQ19OVU1CRVJfTU9ERSxcbiAgICAgIGhsanMuQVBPU19TVFJJTkdfTU9ERSxcbiAgICAgIGhsanMuUVVPVEVfU1RSSU5HX01PREUsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgICAgIGJlZ2luOiBPUEVOSU5HX0xPTkdfQlJBQ0tFVCxcbiAgICAgICAgZW5kOiBDTE9TSU5HX0xPTkdfQlJBQ0tFVCxcbiAgICAgICAgY29udGFpbnM6IFtMT05HX0JSQUNLRVRTXSxcbiAgICAgICAgcmVsZXZhbmNlOiA1XG4gICAgICB9XG4gICAgXSlcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsdWE7XG4iXSwic291cmNlUm9vdCI6IiJ9