exports.ids = [116];
exports.modules = {

/***/ "./node_modules/highlight.js/lib/languages/nim.js":
/*!********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/nim.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Nim
Description: Nim is a statically typed compiled systems programming language.
Website: https://nim-lang.org
Category: system
*/

function nim(hljs) {
  return {
    name: 'Nim',
    aliases: [ 'nim' ],
    keywords: {
      keyword:
        'addr and as asm bind block break case cast const continue converter ' +
        'discard distinct div do elif else end enum except export finally ' +
        'for from func generic if import in include interface is isnot iterator ' +
        'let macro method mixin mod nil not notin object of or out proc ptr ' +
        'raise ref return shl shr static template try tuple type using var ' +
        'when while with without xor yield',
      literal:
        'shared guarded stdin stdout stderr result true false',
      built_in:
        'int int8 int16 int32 int64 uint uint8 uint16 uint32 uint64 float ' +
        'float32 float64 bool char string cstring pointer expr stmt void ' +
        'auto any range array openarray varargs seq set clong culong cchar ' +
        'cschar cshort cint csize clonglong cfloat cdouble clongdouble ' +
        'cuchar cushort cuint culonglong cstringarray semistatic'
    },
    contains: [
      {
        className: 'meta', // Actually pragma
        begin: /\{\./,
        end: /\.\}/,
        relevance: 10
      },
      {
        className: 'string',
        begin: /[a-zA-Z]\w*"/,
        end: /"/,
        contains: [
          {
            begin: /""/
          }
        ]
      },
      {
        className: 'string',
        begin: /([a-zA-Z]\w*)?"""/,
        end: /"""/
      },
      hljs.QUOTE_STRING_MODE,
      {
        className: 'type',
        begin: /\b[A-Z]\w+\b/,
        relevance: 0
      },
      {
        className: 'number',
        relevance: 0,
        variants: [
          {
            begin: /\b(0[xX][0-9a-fA-F][_0-9a-fA-F]*)('?[iIuU](8|16|32|64))?/
          },
          {
            begin: /\b(0o[0-7][_0-7]*)('?[iIuUfF](8|16|32|64))?/
          },
          {
            begin: /\b(0(b|B)[01][_01]*)('?[iIuUfF](8|16|32|64))?/
          },
          {
            begin: /\b(\d[_\d]*)('?[iIuUfF](8|16|32|64))?/
          }
        ]
      },
      hljs.HASH_COMMENT_MODE
    ]
  };
}

module.exports = nim;


/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvbmltLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsa0JBQWtCO0FBQ2xCO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiMTE2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBOaW1cbkRlc2NyaXB0aW9uOiBOaW0gaXMgYSBzdGF0aWNhbGx5IHR5cGVkIGNvbXBpbGVkIHN5c3RlbXMgcHJvZ3JhbW1pbmcgbGFuZ3VhZ2UuXG5XZWJzaXRlOiBodHRwczovL25pbS1sYW5nLm9yZ1xuQ2F0ZWdvcnk6IHN5c3RlbVxuKi9cblxuZnVuY3Rpb24gbmltKGhsanMpIHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnTmltJyxcbiAgICBhbGlhc2VzOiBbICduaW0nIF0sXG4gICAga2V5d29yZHM6IHtcbiAgICAgIGtleXdvcmQ6XG4gICAgICAgICdhZGRyIGFuZCBhcyBhc20gYmluZCBibG9jayBicmVhayBjYXNlIGNhc3QgY29uc3QgY29udGludWUgY29udmVydGVyICcgK1xuICAgICAgICAnZGlzY2FyZCBkaXN0aW5jdCBkaXYgZG8gZWxpZiBlbHNlIGVuZCBlbnVtIGV4Y2VwdCBleHBvcnQgZmluYWxseSAnICtcbiAgICAgICAgJ2ZvciBmcm9tIGZ1bmMgZ2VuZXJpYyBpZiBpbXBvcnQgaW4gaW5jbHVkZSBpbnRlcmZhY2UgaXMgaXNub3QgaXRlcmF0b3IgJyArXG4gICAgICAgICdsZXQgbWFjcm8gbWV0aG9kIG1peGluIG1vZCBuaWwgbm90IG5vdGluIG9iamVjdCBvZiBvciBvdXQgcHJvYyBwdHIgJyArXG4gICAgICAgICdyYWlzZSByZWYgcmV0dXJuIHNobCBzaHIgc3RhdGljIHRlbXBsYXRlIHRyeSB0dXBsZSB0eXBlIHVzaW5nIHZhciAnICtcbiAgICAgICAgJ3doZW4gd2hpbGUgd2l0aCB3aXRob3V0IHhvciB5aWVsZCcsXG4gICAgICBsaXRlcmFsOlxuICAgICAgICAnc2hhcmVkIGd1YXJkZWQgc3RkaW4gc3Rkb3V0IHN0ZGVyciByZXN1bHQgdHJ1ZSBmYWxzZScsXG4gICAgICBidWlsdF9pbjpcbiAgICAgICAgJ2ludCBpbnQ4IGludDE2IGludDMyIGludDY0IHVpbnQgdWludDggdWludDE2IHVpbnQzMiB1aW50NjQgZmxvYXQgJyArXG4gICAgICAgICdmbG9hdDMyIGZsb2F0NjQgYm9vbCBjaGFyIHN0cmluZyBjc3RyaW5nIHBvaW50ZXIgZXhwciBzdG10IHZvaWQgJyArXG4gICAgICAgICdhdXRvIGFueSByYW5nZSBhcnJheSBvcGVuYXJyYXkgdmFyYXJncyBzZXEgc2V0IGNsb25nIGN1bG9uZyBjY2hhciAnICtcbiAgICAgICAgJ2NzY2hhciBjc2hvcnQgY2ludCBjc2l6ZSBjbG9uZ2xvbmcgY2Zsb2F0IGNkb3VibGUgY2xvbmdkb3VibGUgJyArXG4gICAgICAgICdjdWNoYXIgY3VzaG9ydCBjdWludCBjdWxvbmdsb25nIGNzdHJpbmdhcnJheSBzZW1pc3RhdGljJ1xuICAgIH0sXG4gICAgY29udGFpbnM6IFtcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbWV0YScsIC8vIEFjdHVhbGx5IHByYWdtYVxuICAgICAgICBiZWdpbjogL1xce1xcLi8sXG4gICAgICAgIGVuZDogL1xcLlxcfS8sXG4gICAgICAgIHJlbGV2YW5jZTogMTBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgICAgIGJlZ2luOiAvW2EtekEtWl1cXHcqXCIvLFxuICAgICAgICBlbmQ6IC9cIi8sXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW46IC9cIlwiL1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICAgICAgYmVnaW46IC8oW2EtekEtWl1cXHcqKT9cIlwiXCIvLFxuICAgICAgICBlbmQ6IC9cIlwiXCIvXG4gICAgICB9LFxuICAgICAgaGxqcy5RVU9URV9TVFJJTkdfTU9ERSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAndHlwZScsXG4gICAgICAgIGJlZ2luOiAvXFxiW0EtWl1cXHcrXFxiLyxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdudW1iZXInLFxuICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW46IC9cXGIoMFt4WF1bMC05YS1mQS1GXVtfMC05YS1mQS1GXSopKCc/W2lJdVVdKDh8MTZ8MzJ8NjQpKT8vXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogL1xcYigwb1swLTddW18wLTddKikoJz9baUl1VWZGXSg4fDE2fDMyfDY0KSk/L1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW46IC9cXGIoMChifEIpWzAxXVtfMDFdKikoJz9baUl1VWZGXSg4fDE2fDMyfDY0KSk/L1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW46IC9cXGIoXFxkW19cXGRdKikoJz9baUl1VWZGXSg4fDE2fDMyfDY0KSk/L1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIGhsanMuSEFTSF9DT01NRU5UX01PREVcbiAgICBdXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbmltO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==