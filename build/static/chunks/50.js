(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[50],{

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

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2R0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNDQUFzQztBQUN0QyxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvNTAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuTGFuZ3VhZ2U6IERldmljZSBUcmVlXG5EZXNjcmlwdGlvbjogKi5kdHMgZmlsZXMgdXNlZCBpbiB0aGUgTGludXgga2VybmVsXG5BdXRob3I6IE1hcnRpbiBCcmF1biA8bWFydGluLmJyYXVuQGV0dHVzLmNvbT4sIE1vcml0eiBGaXNjaGVyIDxtb3JpdHouZmlzY2hlckBldHR1cy5jb20+XG5XZWJzaXRlOiBodHRwczovL2VsaW51eC5vcmcvRGV2aWNlX1RyZWVfUmVmZXJlbmNlXG5DYXRlZ29yeTogY29uZmlnXG4qL1xuXG4vKiogQHR5cGUgTGFuZ3VhZ2VGbiAqL1xuZnVuY3Rpb24gZHRzKGhsanMpIHtcbiAgY29uc3QgU1RSSU5HUyA9IHtcbiAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgIHZhcmlhbnRzOiBbXG4gICAgICBobGpzLmluaGVyaXQoaGxqcy5RVU9URV9TVFJJTkdfTU9ERSwge1xuICAgICAgICBiZWdpbjogJygodTg/fFUpfEwpP1wiJ1xuICAgICAgfSksXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnKHU4P3xVKT9SXCInLFxuICAgICAgICBlbmQ6ICdcIicsXG4gICAgICAgIGNvbnRhaW5zOiBbaGxqcy5CQUNLU0xBU0hfRVNDQVBFXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICdcXCdcXFxcXFxcXD8uJyxcbiAgICAgICAgZW5kOiAnXFwnJyxcbiAgICAgICAgaWxsZWdhbDogJy4nXG4gICAgICB9XG4gICAgXVxuICB9O1xuXG4gIGNvbnN0IE5VTUJFUlMgPSB7XG4gICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICB2YXJpYW50czogW1xuICAgICAge1xuICAgICAgICBiZWdpbjogJ1xcXFxiKFxcXFxkKyhcXFxcLlxcXFxkKik/fFxcXFwuXFxcXGQrKSh1fFV8bHxMfHVsfFVMfGZ8RiknXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogaGxqcy5DX05VTUJFUl9SRVxuICAgICAgfVxuICAgIF0sXG4gICAgcmVsZXZhbmNlOiAwXG4gIH07XG5cbiAgY29uc3QgUFJFUFJPQ0VTU09SID0ge1xuICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgIGJlZ2luOiAnIycsXG4gICAgZW5kOiAnJCcsXG4gICAga2V5d29yZHM6IHtcbiAgICAgICdtZXRhLWtleXdvcmQnOiAnaWYgZWxzZSBlbGlmIGVuZGlmIGRlZmluZSB1bmRlZiBpZmRlZiBpZm5kZWYnXG4gICAgfSxcbiAgICBjb250YWluczogW1xuICAgICAge1xuICAgICAgICBiZWdpbjogL1xcXFxcXG4vLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luS2V5d29yZHM6ICdpbmNsdWRlJyxcbiAgICAgICAgZW5kOiAnJCcsXG4gICAgICAgIGtleXdvcmRzOiB7XG4gICAgICAgICAgJ21ldGEta2V5d29yZCc6ICdpbmNsdWRlJ1xuICAgICAgICB9LFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIGhsanMuaW5oZXJpdChTVFJJTkdTLCB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdtZXRhLXN0cmluZydcbiAgICAgICAgICB9KSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdtZXRhLXN0cmluZycsXG4gICAgICAgICAgICBiZWdpbjogJzwnLFxuICAgICAgICAgICAgZW5kOiAnPicsXG4gICAgICAgICAgICBpbGxlZ2FsOiAnXFxcXG4nXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgU1RSSU5HUyxcbiAgICAgIGhsanMuQ19MSU5FX0NPTU1FTlRfTU9ERSxcbiAgICAgIGhsanMuQ19CTE9DS19DT01NRU5UX01PREVcbiAgICBdXG4gIH07XG5cbiAgY29uc3QgRFRTX1JFRkVSRU5DRSA9IHtcbiAgICBjbGFzc05hbWU6ICd2YXJpYWJsZScsXG4gICAgYmVnaW46IC8mW2EtelxcZF9dKlxcYi9cbiAgfTtcblxuICBjb25zdCBEVFNfS0VZV09SRCA9IHtcbiAgICBjbGFzc05hbWU6ICdtZXRhLWtleXdvcmQnLFxuICAgIGJlZ2luOiAnL1thLXpdW2EtelxcXFxkLV0qLydcbiAgfTtcblxuICBjb25zdCBEVFNfTEFCRUwgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3ltYm9sJyxcbiAgICBiZWdpbjogJ15cXFxccypbYS16QS1aX11bYS16QS1aXFxcXGRfXSo6J1xuICB9O1xuXG4gIGNvbnN0IERUU19DRUxMX1BST1BFUlRZID0ge1xuICAgIGNsYXNzTmFtZTogJ3BhcmFtcycsXG4gICAgYmVnaW46ICc8JyxcbiAgICBlbmQ6ICc+JyxcbiAgICBjb250YWluczogW1xuICAgICAgTlVNQkVSUyxcbiAgICAgIERUU19SRUZFUkVOQ0VcbiAgICBdXG4gIH07XG5cbiAgY29uc3QgRFRTX05PREUgPSB7XG4gICAgY2xhc3NOYW1lOiAnY2xhc3MnLFxuICAgIGJlZ2luOiAvW2EtekEtWl9dW2EtekEtWlxcZF9AXSpcXHNcXHsvLFxuICAgIGVuZDogL1t7Oz1dLyxcbiAgICByZXR1cm5CZWdpbjogdHJ1ZSxcbiAgICBleGNsdWRlRW5kOiB0cnVlXG4gIH07XG5cbiAgY29uc3QgRFRTX1JPT1RfTk9ERSA9IHtcbiAgICBjbGFzc05hbWU6ICdjbGFzcycsXG4gICAgYmVnaW46ICcvXFxcXHMqXFxcXHsnLFxuICAgIGVuZDogL1xcfTsvLFxuICAgIHJlbGV2YW5jZTogMTAsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIERUU19SRUZFUkVOQ0UsXG4gICAgICBEVFNfS0VZV09SRCxcbiAgICAgIERUU19MQUJFTCxcbiAgICAgIERUU19OT0RFLFxuICAgICAgRFRTX0NFTExfUFJPUEVSVFksXG4gICAgICBobGpzLkNfTElORV9DT01NRU5UX01PREUsXG4gICAgICBobGpzLkNfQkxPQ0tfQ09NTUVOVF9NT0RFLFxuICAgICAgTlVNQkVSUyxcbiAgICAgIFNUUklOR1NcbiAgICBdXG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnRGV2aWNlIFRyZWUnLFxuICAgIGtleXdvcmRzOiBcIlwiLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBEVFNfUk9PVF9OT0RFLFxuICAgICAgRFRTX1JFRkVSRU5DRSxcbiAgICAgIERUU19LRVlXT1JELFxuICAgICAgRFRTX0xBQkVMLFxuICAgICAgRFRTX05PREUsXG4gICAgICBEVFNfQ0VMTF9QUk9QRVJUWSxcbiAgICAgIGhsanMuQ19MSU5FX0NPTU1FTlRfTU9ERSxcbiAgICAgIGhsanMuQ19CTE9DS19DT01NRU5UX01PREUsXG4gICAgICBOVU1CRVJTLFxuICAgICAgU1RSSU5HUyxcbiAgICAgIFBSRVBST0NFU1NPUixcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IGhsanMuSURFTlRfUkUgKyAnOjonLFxuICAgICAgICBrZXl3b3JkczogXCJcIlxuICAgICAgfVxuICAgIF1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkdHM7XG4iXSwic291cmNlUm9vdCI6IiJ9