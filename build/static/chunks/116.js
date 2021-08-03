(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[116],{

/***/ "./node_modules/highlight.js/lib/languages/nginx.js":
/*!**********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/nginx.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Nginx config
Author: Peter Leonov <gojpeg@yandex.ru>
Contributors: Ivan Sagalaev <maniac@softwaremaniacs.org>
Category: common, config
Website: https://www.nginx.com
*/

function nginx(hljs) {
  const VAR = {
    className: 'variable',
    variants: [
      {
        begin: /\$\d+/
      },
      {
        begin: /\$\{/,
        end: /\}/
      },
      {
        begin: /[$@]/ + hljs.UNDERSCORE_IDENT_RE
      }
    ]
  };
  const DEFAULT = {
    endsWithParent: true,
    keywords: {
      $pattern: '[a-z/_]+',
      literal:
        'on off yes no true false none blocked debug info notice warn error crit ' +
        'select break last permanent redirect kqueue rtsig epoll poll /dev/poll'
    },
    relevance: 0,
    illegal: '=>',
    contains: [
      hljs.HASH_COMMENT_MODE,
      {
        className: 'string',
        contains: [
          hljs.BACKSLASH_ESCAPE,
          VAR
        ],
        variants: [
          {
            begin: /"/,
            end: /"/
          },
          {
            begin: /'/,
            end: /'/
          }
        ]
      },
      // this swallows entire URLs to avoid detecting numbers within
      {
        begin: '([a-z]+):/',
        end: '\\s',
        endsWithParent: true,
        excludeEnd: true,
        contains: [ VAR ]
      },
      {
        className: 'regexp',
        contains: [
          hljs.BACKSLASH_ESCAPE,
          VAR
        ],
        variants: [
          {
            begin: "\\s\\^",
            end: "\\s|\\{|;",
            returnEnd: true
          },
          // regexp locations (~, ~*)
          {
            begin: "~\\*?\\s+",
            end: "\\s|\\{|;",
            returnEnd: true
          },
          // *.example.com
          {
            begin: "\\*(\\.[a-z\\-]+)+"
          },
          // sub.example.*
          {
            begin: "([a-z\\-]+\\.)+\\*"
          }
        ]
      },
      // IP
      {
        className: 'number',
        begin: '\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b'
      },
      // units
      {
        className: 'number',
        begin: '\\b\\d+[kKmMgGdshdwy]*\\b',
        relevance: 0
      },
      VAR
    ]
  };

  return {
    name: 'Nginx config',
    aliases: [ 'nginxconf' ],
    contains: [
      hljs.HASH_COMMENT_MODE,
      {
        begin: hljs.UNDERSCORE_IDENT_RE + '\\s+\\{',
        returnBegin: true,
        end: /\{/,
        contains: [
          {
            className: 'section',
            begin: hljs.UNDERSCORE_IDENT_RE
          }
        ],
        relevance: 0
      },
      {
        begin: hljs.UNDERSCORE_IDENT_RE + '\\s',
        end: ';|\\{',
        returnBegin: true,
        contains: [
          {
            className: 'attribute',
            begin: hljs.UNDERSCORE_IDENT_RE,
            starts: DEFAULT
          }
        ],
        relevance: 0
      }
    ],
    illegal: '[^\\s\\}]'
  };
}

module.exports = nginx;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL25naW54LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLG9CQUFvQjtBQUNwQixnQkFBZ0I7QUFDaEIsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLEVBQUU7QUFDM0I7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLEVBQUU7QUFDM0I7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLElBQUksT0FBTyxJQUFJLE9BQU8sSUFBSSxPQUFPLElBQUksTUFBTSxJQUFJO0FBQ3RFLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLGVBQWUsSUFBSTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7O0FBRUEiLCJmaWxlIjoic3RhdGljL2NodW5rcy8xMTYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuTGFuZ3VhZ2U6IE5naW54IGNvbmZpZ1xuQXV0aG9yOiBQZXRlciBMZW9ub3YgPGdvanBlZ0B5YW5kZXgucnU+XG5Db250cmlidXRvcnM6IEl2YW4gU2FnYWxhZXYgPG1hbmlhY0Bzb2Z0d2FyZW1hbmlhY3Mub3JnPlxuQ2F0ZWdvcnk6IGNvbW1vbiwgY29uZmlnXG5XZWJzaXRlOiBodHRwczovL3d3dy5uZ2lueC5jb21cbiovXG5cbmZ1bmN0aW9uIG5naW54KGhsanMpIHtcbiAgY29uc3QgVkFSID0ge1xuICAgIGNsYXNzTmFtZTogJ3ZhcmlhYmxlJyxcbiAgICB2YXJpYW50czogW1xuICAgICAge1xuICAgICAgICBiZWdpbjogL1xcJFxcZCsvXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogL1xcJFxcey8sXG4gICAgICAgIGVuZDogL1xcfS9cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAvWyRAXS8gKyBobGpzLlVOREVSU0NPUkVfSURFTlRfUkVcbiAgICAgIH1cbiAgICBdXG4gIH07XG4gIGNvbnN0IERFRkFVTFQgPSB7XG4gICAgZW5kc1dpdGhQYXJlbnQ6IHRydWUsXG4gICAga2V5d29yZHM6IHtcbiAgICAgICRwYXR0ZXJuOiAnW2Etei9fXSsnLFxuICAgICAgbGl0ZXJhbDpcbiAgICAgICAgJ29uIG9mZiB5ZXMgbm8gdHJ1ZSBmYWxzZSBub25lIGJsb2NrZWQgZGVidWcgaW5mbyBub3RpY2Ugd2FybiBlcnJvciBjcml0ICcgK1xuICAgICAgICAnc2VsZWN0IGJyZWFrIGxhc3QgcGVybWFuZW50IHJlZGlyZWN0IGtxdWV1ZSBydHNpZyBlcG9sbCBwb2xsIC9kZXYvcG9sbCdcbiAgICB9LFxuICAgIHJlbGV2YW5jZTogMCxcbiAgICBpbGxlZ2FsOiAnPT4nLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBobGpzLkhBU0hfQ09NTUVOVF9NT0RFLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIGhsanMuQkFDS1NMQVNIX0VTQ0FQRSxcbiAgICAgICAgICBWQVJcbiAgICAgICAgXSxcbiAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogL1wiLyxcbiAgICAgICAgICAgIGVuZDogL1wiL1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW46IC8nLyxcbiAgICAgICAgICAgIGVuZDogLycvXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgLy8gdGhpcyBzd2FsbG93cyBlbnRpcmUgVVJMcyB0byBhdm9pZCBkZXRlY3RpbmcgbnVtYmVycyB3aXRoaW5cbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICcoW2Etel0rKTovJyxcbiAgICAgICAgZW5kOiAnXFxcXHMnLFxuICAgICAgICBlbmRzV2l0aFBhcmVudDogdHJ1ZSxcbiAgICAgICAgZXhjbHVkZUVuZDogdHJ1ZSxcbiAgICAgICAgY29udGFpbnM6IFsgVkFSIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3JlZ2V4cCcsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgaGxqcy5CQUNLU0xBU0hfRVNDQVBFLFxuICAgICAgICAgIFZBUlxuICAgICAgICBdLFxuICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luOiBcIlxcXFxzXFxcXF5cIixcbiAgICAgICAgICAgIGVuZDogXCJcXFxcc3xcXFxce3w7XCIsXG4gICAgICAgICAgICByZXR1cm5FbmQ6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIC8vIHJlZ2V4cCBsb2NhdGlvbnMgKH4sIH4qKVxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luOiBcIn5cXFxcKj9cXFxccytcIixcbiAgICAgICAgICAgIGVuZDogXCJcXFxcc3xcXFxce3w7XCIsXG4gICAgICAgICAgICByZXR1cm5FbmQ6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIC8vICouZXhhbXBsZS5jb21cbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogXCJcXFxcKihcXFxcLlthLXpcXFxcLV0rKStcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgLy8gc3ViLmV4YW1wbGUuKlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luOiBcIihbYS16XFxcXC1dK1xcXFwuKStcXFxcKlwiXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgLy8gSVBcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICAgICAgYmVnaW46ICdcXFxcYlxcXFxkezEsM31cXFxcLlxcXFxkezEsM31cXFxcLlxcXFxkezEsM31cXFxcLlxcXFxkezEsM30oOlxcXFxkezEsNX0pP1xcXFxiJ1xuICAgICAgfSxcbiAgICAgIC8vIHVuaXRzXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgICAgIGJlZ2luOiAnXFxcXGJcXFxcZCtba0ttTWdHZHNoZHd5XSpcXFxcYicsXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIFZBUlxuICAgIF1cbiAgfTtcblxuICByZXR1cm4ge1xuICAgIG5hbWU6ICdOZ2lueCBjb25maWcnLFxuICAgIGFsaWFzZXM6IFsgJ25naW54Y29uZicgXSxcbiAgICBjb250YWluczogW1xuICAgICAgaGxqcy5IQVNIX0NPTU1FTlRfTU9ERSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IGhsanMuVU5ERVJTQ09SRV9JREVOVF9SRSArICdcXFxccytcXFxceycsXG4gICAgICAgIHJldHVybkJlZ2luOiB0cnVlLFxuICAgICAgICBlbmQ6IC9cXHsvLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3NlY3Rpb24nLFxuICAgICAgICAgICAgYmVnaW46IGhsanMuVU5ERVJTQ09SRV9JREVOVF9SRVxuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogaGxqcy5VTkRFUlNDT1JFX0lERU5UX1JFICsgJ1xcXFxzJyxcbiAgICAgICAgZW5kOiAnO3xcXFxceycsXG4gICAgICAgIHJldHVybkJlZ2luOiB0cnVlLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2F0dHJpYnV0ZScsXG4gICAgICAgICAgICBiZWdpbjogaGxqcy5VTkRFUlNDT1JFX0lERU5UX1JFLFxuICAgICAgICAgICAgc3RhcnRzOiBERUZBVUxUXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH1cbiAgICBdLFxuICAgIGlsbGVnYWw6ICdbXlxcXFxzXFxcXH1dJ1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG5naW54O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==