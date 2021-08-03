exports.ids = [49];
exports.modules = {

/***/ "./node_modules/highlight.js/lib/languages/dts.js":
/*!********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/dts.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Device Tree
Description: *.dts files used in the Linux kernel
Author: Martin Braun <martin.braun@ettus.com>, Moritz Fischer <moritz.fischer@ettus.com>
Website: https://elinux.org/Device_Tree_Reference
Category: config
*/

/** @type LanguageFn */
function dts(hljs) {
  const STRINGS = {
    className: 'string',
    variants: [
      hljs.inherit(hljs.QUOTE_STRING_MODE, {
        begin: '((u8?|U)|L)?"'
      }),
      {
        begin: '(u8?|U)?R"',
        end: '"',
        contains: [hljs.BACKSLASH_ESCAPE]
      },
      {
        begin: '\'\\\\?.',
        end: '\'',
        illegal: '.'
      }
    ]
  };

  const NUMBERS = {
    className: 'number',
    variants: [
      {
        begin: '\\b(\\d+(\\.\\d*)?|\\.\\d+)(u|U|l|L|ul|UL|f|F)'
      },
      {
        begin: hljs.C_NUMBER_RE
      }
    ],
    relevance: 0
  };

  const PREPROCESSOR = {
    className: 'meta',
    begin: '#',
    end: '$',
    keywords: {
      'meta-keyword': 'if else elif endif define undef ifdef ifndef'
    },
    contains: [
      {
        begin: /\\\n/,
        relevance: 0
      },
      {
        beginKeywords: 'include',
        end: '$',
        keywords: {
          'meta-keyword': 'include'
        },
        contains: [
          hljs.inherit(STRINGS, {
            className: 'meta-string'
          }),
          {
            className: 'meta-string',
            begin: '<',
            end: '>',
            illegal: '\\n'
          }
        ]
      },
      STRINGS,
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE
    ]
  };

  const DTS_REFERENCE = {
    className: 'variable',
    begin: /&[a-z\d_]*\b/
  };

  const DTS_KEYWORD = {
    className: 'meta-keyword',
    begin: '/[a-z][a-z\\d-]*/'
  };

  const DTS_LABEL = {
    className: 'symbol',
    begin: '^\\s*[a-zA-Z_][a-zA-Z\\d_]*:'
  };

  const DTS_CELL_PROPERTY = {
    className: 'params',
    begin: '<',
    end: '>',
    contains: [
      NUMBERS,
      DTS_REFERENCE
    ]
  };

  const DTS_NODE = {
    className: 'class',
    begin: /[a-zA-Z_][a-zA-Z\d_@]*\s\{/,
    end: /[{;=]/,
    returnBegin: true,
    excludeEnd: true
  };

  const DTS_ROOT_NODE = {
    className: 'class',
    begin: '/\\s*\\{',
    end: /\};/,
    relevance: 10,
    contains: [
      DTS_REFERENCE,
      DTS_KEYWORD,
      DTS_LABEL,
      DTS_NODE,
      DTS_CELL_PROPERTY,
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      NUMBERS,
      STRINGS
    ]
  };

  return {
    name: 'Device Tree',
    keywords: "",
    contains: [
      DTS_ROOT_NODE,
      DTS_REFERENCE,
      DTS_KEYWORD,
      DTS_LABEL,
      DTS_NODE,
      DTS_CELL_PROPERTY,
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      NUMBERS,
      STRINGS,
      PREPROCESSOR,
      {
        begin: hljs.IDENT_RE + '::',
        keywords: ""
      }
    ]
  };
}

module.exports = dts;


/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvZHRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNDQUFzQztBQUN0QyxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6IjQ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBEZXZpY2UgVHJlZVxuRGVzY3JpcHRpb246ICouZHRzIGZpbGVzIHVzZWQgaW4gdGhlIExpbnV4IGtlcm5lbFxuQXV0aG9yOiBNYXJ0aW4gQnJhdW4gPG1hcnRpbi5icmF1bkBldHR1cy5jb20+LCBNb3JpdHogRmlzY2hlciA8bW9yaXR6LmZpc2NoZXJAZXR0dXMuY29tPlxuV2Vic2l0ZTogaHR0cHM6Ly9lbGludXgub3JnL0RldmljZV9UcmVlX1JlZmVyZW5jZVxuQ2F0ZWdvcnk6IGNvbmZpZ1xuKi9cblxuLyoqIEB0eXBlIExhbmd1YWdlRm4gKi9cbmZ1bmN0aW9uIGR0cyhobGpzKSB7XG4gIGNvbnN0IFNUUklOR1MgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICB2YXJpYW50czogW1xuICAgICAgaGxqcy5pbmhlcml0KGhsanMuUVVPVEVfU1RSSU5HX01PREUsIHtcbiAgICAgICAgYmVnaW46ICcoKHU4P3xVKXxMKT9cIidcbiAgICAgIH0pLFxuICAgICAge1xuICAgICAgICBiZWdpbjogJyh1OD98VSk/UlwiJyxcbiAgICAgICAgZW5kOiAnXCInLFxuICAgICAgICBjb250YWluczogW2hsanMuQkFDS1NMQVNIX0VTQ0FQRV1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnXFwnXFxcXFxcXFw/LicsXG4gICAgICAgIGVuZDogJ1xcJycsXG4gICAgICAgIGlsbGVnYWw6ICcuJ1xuICAgICAgfVxuICAgIF1cbiAgfTtcblxuICBjb25zdCBOVU1CRVJTID0ge1xuICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgdmFyaWFudHM6IFtcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICdcXFxcYihcXFxcZCsoXFxcXC5cXFxcZCopP3xcXFxcLlxcXFxkKykodXxVfGx8THx1bHxVTHxmfEYpJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IGhsanMuQ19OVU1CRVJfUkVcbiAgICAgIH1cbiAgICBdLFxuICAgIHJlbGV2YW5jZTogMFxuICB9O1xuXG4gIGNvbnN0IFBSRVBST0NFU1NPUiA9IHtcbiAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICBiZWdpbjogJyMnLFxuICAgIGVuZDogJyQnLFxuICAgIGtleXdvcmRzOiB7XG4gICAgICAnbWV0YS1rZXl3b3JkJzogJ2lmIGVsc2UgZWxpZiBlbmRpZiBkZWZpbmUgdW5kZWYgaWZkZWYgaWZuZGVmJ1xuICAgIH0sXG4gICAgY29udGFpbnM6IFtcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IC9cXFxcXFxuLyxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbktleXdvcmRzOiAnaW5jbHVkZScsXG4gICAgICAgIGVuZDogJyQnLFxuICAgICAgICBrZXl3b3Jkczoge1xuICAgICAgICAgICdtZXRhLWtleXdvcmQnOiAnaW5jbHVkZSdcbiAgICAgICAgfSxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICBobGpzLmluaGVyaXQoU1RSSU5HUywge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnbWV0YS1zdHJpbmcnXG4gICAgICAgICAgfSksXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnbWV0YS1zdHJpbmcnLFxuICAgICAgICAgICAgYmVnaW46ICc8JyxcbiAgICAgICAgICAgIGVuZDogJz4nLFxuICAgICAgICAgICAgaWxsZWdhbDogJ1xcXFxuJ1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFNUUklOR1MsXG4gICAgICBobGpzLkNfTElORV9DT01NRU5UX01PREUsXG4gICAgICBobGpzLkNfQkxPQ0tfQ09NTUVOVF9NT0RFXG4gICAgXVxuICB9O1xuXG4gIGNvbnN0IERUU19SRUZFUkVOQ0UgPSB7XG4gICAgY2xhc3NOYW1lOiAndmFyaWFibGUnLFxuICAgIGJlZ2luOiAvJlthLXpcXGRfXSpcXGIvXG4gIH07XG5cbiAgY29uc3QgRFRTX0tFWVdPUkQgPSB7XG4gICAgY2xhc3NOYW1lOiAnbWV0YS1rZXl3b3JkJyxcbiAgICBiZWdpbjogJy9bYS16XVthLXpcXFxcZC1dKi8nXG4gIH07XG5cbiAgY29uc3QgRFRTX0xBQkVMID0ge1xuICAgIGNsYXNzTmFtZTogJ3N5bWJvbCcsXG4gICAgYmVnaW46ICdeXFxcXHMqW2EtekEtWl9dW2EtekEtWlxcXFxkX10qOidcbiAgfTtcblxuICBjb25zdCBEVFNfQ0VMTF9QUk9QRVJUWSA9IHtcbiAgICBjbGFzc05hbWU6ICdwYXJhbXMnLFxuICAgIGJlZ2luOiAnPCcsXG4gICAgZW5kOiAnPicsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIE5VTUJFUlMsXG4gICAgICBEVFNfUkVGRVJFTkNFXG4gICAgXVxuICB9O1xuXG4gIGNvbnN0IERUU19OT0RFID0ge1xuICAgIGNsYXNzTmFtZTogJ2NsYXNzJyxcbiAgICBiZWdpbjogL1thLXpBLVpfXVthLXpBLVpcXGRfQF0qXFxzXFx7LyxcbiAgICBlbmQ6IC9bezs9XS8sXG4gICAgcmV0dXJuQmVnaW46IHRydWUsXG4gICAgZXhjbHVkZUVuZDogdHJ1ZVxuICB9O1xuXG4gIGNvbnN0IERUU19ST09UX05PREUgPSB7XG4gICAgY2xhc3NOYW1lOiAnY2xhc3MnLFxuICAgIGJlZ2luOiAnL1xcXFxzKlxcXFx7JyxcbiAgICBlbmQ6IC9cXH07LyxcbiAgICByZWxldmFuY2U6IDEwLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBEVFNfUkVGRVJFTkNFLFxuICAgICAgRFRTX0tFWVdPUkQsXG4gICAgICBEVFNfTEFCRUwsXG4gICAgICBEVFNfTk9ERSxcbiAgICAgIERUU19DRUxMX1BST1BFUlRZLFxuICAgICAgaGxqcy5DX0xJTkVfQ09NTUVOVF9NT0RFLFxuICAgICAgaGxqcy5DX0JMT0NLX0NPTU1FTlRfTU9ERSxcbiAgICAgIE5VTUJFUlMsXG4gICAgICBTVFJJTkdTXG4gICAgXVxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgbmFtZTogJ0RldmljZSBUcmVlJyxcbiAgICBrZXl3b3JkczogXCJcIixcbiAgICBjb250YWluczogW1xuICAgICAgRFRTX1JPT1RfTk9ERSxcbiAgICAgIERUU19SRUZFUkVOQ0UsXG4gICAgICBEVFNfS0VZV09SRCxcbiAgICAgIERUU19MQUJFTCxcbiAgICAgIERUU19OT0RFLFxuICAgICAgRFRTX0NFTExfUFJPUEVSVFksXG4gICAgICBobGpzLkNfTElORV9DT01NRU5UX01PREUsXG4gICAgICBobGpzLkNfQkxPQ0tfQ09NTUVOVF9NT0RFLFxuICAgICAgTlVNQkVSUyxcbiAgICAgIFNUUklOR1MsXG4gICAgICBQUkVQUk9DRVNTT1IsXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiBobGpzLklERU5UX1JFICsgJzo6JyxcbiAgICAgICAga2V5d29yZHM6IFwiXCJcbiAgICAgIH1cbiAgICBdXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZHRzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==