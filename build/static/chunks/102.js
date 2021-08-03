(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[102],{

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

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2x1YS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoic3RhdGljL2NodW5rcy8xMDIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuTGFuZ3VhZ2U6IEx1YVxuRGVzY3JpcHRpb246IEx1YSBpcyBhIHBvd2VyZnVsLCBlZmZpY2llbnQsIGxpZ2h0d2VpZ2h0LCBlbWJlZGRhYmxlIHNjcmlwdGluZyBsYW5ndWFnZS5cbkF1dGhvcjogQW5kcmV3IEZlZG9yb3YgPGRtbWRyc0BtYWlsLnJ1PlxuQ2F0ZWdvcnk6IGNvbW1vbiwgc2NyaXB0aW5nXG5XZWJzaXRlOiBodHRwczovL3d3dy5sdWEub3JnXG4qL1xuXG5mdW5jdGlvbiBsdWEoaGxqcykge1xuICBjb25zdCBPUEVOSU5HX0xPTkdfQlJBQ0tFVCA9ICdcXFxcWz0qXFxcXFsnO1xuICBjb25zdCBDTE9TSU5HX0xPTkdfQlJBQ0tFVCA9ICdcXFxcXT0qXFxcXF0nO1xuICBjb25zdCBMT05HX0JSQUNLRVRTID0ge1xuICAgIGJlZ2luOiBPUEVOSU5HX0xPTkdfQlJBQ0tFVCxcbiAgICBlbmQ6IENMT1NJTkdfTE9OR19CUkFDS0VULFxuICAgIGNvbnRhaW5zOiBbJ3NlbGYnXVxuICB9O1xuICBjb25zdCBDT01NRU5UUyA9IFtcbiAgICBobGpzLkNPTU1FTlQoJy0tKD8hJyArIE9QRU5JTkdfTE9OR19CUkFDS0VUICsgJyknLCAnJCcpLFxuICAgIGhsanMuQ09NTUVOVChcbiAgICAgICctLScgKyBPUEVOSU5HX0xPTkdfQlJBQ0tFVCxcbiAgICAgIENMT1NJTkdfTE9OR19CUkFDS0VULFxuICAgICAge1xuICAgICAgICBjb250YWluczogW0xPTkdfQlJBQ0tFVFNdLFxuICAgICAgICByZWxldmFuY2U6IDEwXG4gICAgICB9XG4gICAgKVxuICBdO1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICdMdWEnLFxuICAgIGtleXdvcmRzOiB7XG4gICAgICAkcGF0dGVybjogaGxqcy5VTkRFUlNDT1JFX0lERU5UX1JFLFxuICAgICAgbGl0ZXJhbDogXCJ0cnVlIGZhbHNlIG5pbFwiLFxuICAgICAga2V5d29yZDogXCJhbmQgYnJlYWsgZG8gZWxzZSBlbHNlaWYgZW5kIGZvciBnb3RvIGlmIGluIGxvY2FsIG5vdCBvciByZXBlYXQgcmV0dXJuIHRoZW4gdW50aWwgd2hpbGVcIixcbiAgICAgIGJ1aWx0X2luOlxuICAgICAgICAvLyBNZXRhdGFncyBhbmQgZ2xvYmFsczpcbiAgICAgICAgJ19HIF9FTlYgX1ZFUlNJT04gX19pbmRleCBfX25ld2luZGV4IF9fbW9kZSBfX2NhbGwgX19tZXRhdGFibGUgX190b3N0cmluZyBfX2xlbiAnICtcbiAgICAgICAgJ19fZ2MgX19hZGQgX19zdWIgX19tdWwgX19kaXYgX19tb2QgX19wb3cgX19jb25jYXQgX191bm0gX19lcSBfX2x0IF9fbGUgYXNzZXJ0ICcgK1xuICAgICAgICAvLyBTdGFuZGFyZCBtZXRob2RzIGFuZCBwcm9wZXJ0aWVzOlxuICAgICAgICAnY29sbGVjdGdhcmJhZ2UgZG9maWxlIGVycm9yIGdldGZlbnYgZ2V0bWV0YXRhYmxlIGlwYWlycyBsb2FkIGxvYWRmaWxlIGxvYWRzdHJpbmcgJyArXG4gICAgICAgICdtb2R1bGUgbmV4dCBwYWlycyBwY2FsbCBwcmludCByYXdlcXVhbCByYXdnZXQgcmF3c2V0IHJlcXVpcmUgc2VsZWN0IHNldGZlbnYgJyArXG4gICAgICAgICdzZXRtZXRhdGFibGUgdG9udW1iZXIgdG9zdHJpbmcgdHlwZSB1bnBhY2sgeHBjYWxsIGFyZyBzZWxmICcgK1xuICAgICAgICAvLyBMaWJyYXJ5IG1ldGhvZHMgYW5kIHByb3BlcnRpZXMgKG9uZSBsaW5lIHBlciBsaWJyYXJ5KTpcbiAgICAgICAgJ2Nvcm91dGluZSByZXN1bWUgeWllbGQgc3RhdHVzIHdyYXAgY3JlYXRlIHJ1bm5pbmcgZGVidWcgZ2V0dXB2YWx1ZSAnICtcbiAgICAgICAgJ2RlYnVnIHNldGhvb2sgZ2V0bWV0YXRhYmxlIGdldGhvb2sgc2V0bWV0YXRhYmxlIHNldGxvY2FsIHRyYWNlYmFjayBzZXRmZW52IGdldGluZm8gc2V0dXB2YWx1ZSBnZXRsb2NhbCBnZXRyZWdpc3RyeSBnZXRmZW52ICcgK1xuICAgICAgICAnaW8gbGluZXMgd3JpdGUgY2xvc2UgZmx1c2ggb3BlbiBvdXRwdXQgdHlwZSByZWFkIHN0ZGVyciBzdGRpbiBpbnB1dCBzdGRvdXQgcG9wZW4gdG1wZmlsZSAnICtcbiAgICAgICAgJ21hdGggbG9nIG1heCBhY29zIGh1Z2UgbGRleHAgcGkgY29zIHRhbmggcG93IGRlZyB0YW4gY29zaCBzaW5oIHJhbmRvbSByYW5kb21zZWVkIGZyZXhwIGNlaWwgZmxvb3IgcmFkIGFicyBzcXJ0IG1vZGYgYXNpbiBtaW4gbW9kIGZtb2QgbG9nMTAgYXRhbjIgZXhwIHNpbiBhdGFuICcgK1xuICAgICAgICAnb3MgZXhpdCBzZXRsb2NhbGUgZGF0ZSBnZXRlbnYgZGlmZnRpbWUgcmVtb3ZlIHRpbWUgY2xvY2sgdG1wbmFtZSByZW5hbWUgZXhlY3V0ZSBwYWNrYWdlIHByZWxvYWQgbG9hZGxpYiBsb2FkZWQgbG9hZGVycyBjcGF0aCBjb25maWcgcGF0aCBzZWVhbGwgJyArXG4gICAgICAgICdzdHJpbmcgc3ViIHVwcGVyIGxlbiBnZmluZCByZXAgZmluZCBtYXRjaCBjaGFyIGR1bXAgZ21hdGNoIHJldmVyc2UgYnl0ZSBmb3JtYXQgZ3N1YiBsb3dlciAnICtcbiAgICAgICAgJ3RhYmxlIHNldG4gaW5zZXJ0IGdldG4gZm9yZWFjaGkgbWF4biBmb3JlYWNoIGNvbmNhdCBzb3J0IHJlbW92ZSdcbiAgICB9LFxuICAgIGNvbnRhaW5zOiBDT01NRU5UUy5jb25jYXQoW1xuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdmdW5jdGlvbicsXG4gICAgICAgIGJlZ2luS2V5d29yZHM6ICdmdW5jdGlvbicsXG4gICAgICAgIGVuZDogJ1xcXFwpJyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICBobGpzLmluaGVyaXQoaGxqcy5USVRMRV9NT0RFLCB7XG4gICAgICAgICAgICBiZWdpbjogJyhbX2EtekEtWl1cXFxcdypcXFxcLikqKFtfYS16QS1aXVxcXFx3KjopP1tfYS16QS1aXVxcXFx3KidcbiAgICAgICAgICB9KSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdwYXJhbXMnLFxuICAgICAgICAgICAgYmVnaW46ICdcXFxcKCcsXG4gICAgICAgICAgICBlbmRzV2l0aFBhcmVudDogdHJ1ZSxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBDT01NRU5UU1xuICAgICAgICAgIH1cbiAgICAgICAgXS5jb25jYXQoQ09NTUVOVFMpXG4gICAgICB9LFxuICAgICAgaGxqcy5DX05VTUJFUl9NT0RFLFxuICAgICAgaGxqcy5BUE9TX1NUUklOR19NT0RFLFxuICAgICAgaGxqcy5RVU9URV9TVFJJTkdfTU9ERSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICAgICAgYmVnaW46IE9QRU5JTkdfTE9OR19CUkFDS0VULFxuICAgICAgICBlbmQ6IENMT1NJTkdfTE9OR19CUkFDS0VULFxuICAgICAgICBjb250YWluczogW0xPTkdfQlJBQ0tFVFNdLFxuICAgICAgICByZWxldmFuY2U6IDVcbiAgICAgIH1cbiAgICBdKVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGx1YTtcbiJdLCJzb3VyY2VSb290IjoiIn0=