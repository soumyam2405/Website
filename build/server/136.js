exports.ids = [136];
exports.modules = {

/***/ "./node_modules/highlight.js/lib/languages/properties.js":
/*!***************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/properties.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: .properties
Contributors: Valentin Aitken <valentin@nalisbg.com>, Egor Rogov <e.rogov@postgrespro.ru>
Website: https://en.wikipedia.org/wiki/.properties
Category: common, config
*/

function properties(hljs) {

  // whitespaces: space, tab, formfeed
  var WS0 = '[ \\t\\f]*';
  var WS1 = '[ \\t\\f]+';
  // delimiter
  var EQUAL_DELIM = WS0+'[:=]'+WS0;
  var WS_DELIM = WS1;
  var DELIM = '(' + EQUAL_DELIM + '|' + WS_DELIM + ')';
  var KEY_ALPHANUM = '([^\\\\\\W:= \\t\\f\\n]|\\\\.)+';
  var KEY_OTHER = '([^\\\\:= \\t\\f\\n]|\\\\.)+';

  var DELIM_AND_VALUE = {
          // skip DELIM
          end: DELIM,
          relevance: 0,
          starts: {
            // value: everything until end of line (again, taking into account backslashes)
            className: 'string',
            end: /$/,
            relevance: 0,
            contains: [
              { begin: '\\\\\\\\'},
              { begin: '\\\\\\n' }
            ]
          }
        };

  return {
    name: '.properties',
    case_insensitive: true,
    illegal: /\S/,
    contains: [
      hljs.COMMENT('^\\s*[!#]', '$'),
      // key: everything until whitespace or = or : (taking into account backslashes)
      // case of a "normal" key
      {
        returnBegin: true,
        variants: [
          { begin: KEY_ALPHANUM + EQUAL_DELIM, relevance: 1 },
          { begin: KEY_ALPHANUM + WS_DELIM, relevance: 0 }
        ],
        contains: [
          {
            className: 'attr',
            begin: KEY_ALPHANUM,
            endsParent: true,
            relevance: 0
          }
        ],
        starts: DELIM_AND_VALUE
      },
      // case of key containing non-alphanumeric chars => relevance = 0
      {
        begin: KEY_OTHER + DELIM,
        returnBegin: true,
        relevance: 0,
        contains: [
          {
            className: 'meta',
            begin: KEY_OTHER,
            endsParent: true,
            relevance: 0
          }
        ],
        starts: DELIM_AND_VALUE
      },
      // case of an empty key
      {
        className: 'attr',
        relevance: 0,
        begin: KEY_OTHER + WS0 + '$'
      }
    ]
  };
}

module.exports = properties;


/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvcHJvcGVydGllcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUJBQW1CO0FBQ2xDLGVBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsa0RBQWtEO0FBQzdELFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiIxMzYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuTGFuZ3VhZ2U6IC5wcm9wZXJ0aWVzXG5Db250cmlidXRvcnM6IFZhbGVudGluIEFpdGtlbiA8dmFsZW50aW5AbmFsaXNiZy5jb20+LCBFZ29yIFJvZ292IDxlLnJvZ292QHBvc3RncmVzcHJvLnJ1PlxuV2Vic2l0ZTogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvLnByb3BlcnRpZXNcbkNhdGVnb3J5OiBjb21tb24sIGNvbmZpZ1xuKi9cblxuZnVuY3Rpb24gcHJvcGVydGllcyhobGpzKSB7XG5cbiAgLy8gd2hpdGVzcGFjZXM6IHNwYWNlLCB0YWIsIGZvcm1mZWVkXG4gIHZhciBXUzAgPSAnWyBcXFxcdFxcXFxmXSonO1xuICB2YXIgV1MxID0gJ1sgXFxcXHRcXFxcZl0rJztcbiAgLy8gZGVsaW1pdGVyXG4gIHZhciBFUVVBTF9ERUxJTSA9IFdTMCsnWzo9XScrV1MwO1xuICB2YXIgV1NfREVMSU0gPSBXUzE7XG4gIHZhciBERUxJTSA9ICcoJyArIEVRVUFMX0RFTElNICsgJ3wnICsgV1NfREVMSU0gKyAnKSc7XG4gIHZhciBLRVlfQUxQSEFOVU0gPSAnKFteXFxcXFxcXFxcXFxcVzo9IFxcXFx0XFxcXGZcXFxcbl18XFxcXFxcXFwuKSsnO1xuICB2YXIgS0VZX09USEVSID0gJyhbXlxcXFxcXFxcOj0gXFxcXHRcXFxcZlxcXFxuXXxcXFxcXFxcXC4pKyc7XG5cbiAgdmFyIERFTElNX0FORF9WQUxVRSA9IHtcbiAgICAgICAgICAvLyBza2lwIERFTElNXG4gICAgICAgICAgZW5kOiBERUxJTSxcbiAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgc3RhcnRzOiB7XG4gICAgICAgICAgICAvLyB2YWx1ZTogZXZlcnl0aGluZyB1bnRpbCBlbmQgb2YgbGluZSAoYWdhaW4sIHRha2luZyBpbnRvIGFjY291bnQgYmFja3NsYXNoZXMpXG4gICAgICAgICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgZW5kOiAvJC8sXG4gICAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgICB7IGJlZ2luOiAnXFxcXFxcXFxcXFxcXFxcXCd9LFxuICAgICAgICAgICAgICB7IGJlZ2luOiAnXFxcXFxcXFxcXFxcbicgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICByZXR1cm4ge1xuICAgIG5hbWU6ICcucHJvcGVydGllcycsXG4gICAgY2FzZV9pbnNlbnNpdGl2ZTogdHJ1ZSxcbiAgICBpbGxlZ2FsOiAvXFxTLyxcbiAgICBjb250YWluczogW1xuICAgICAgaGxqcy5DT01NRU5UKCdeXFxcXHMqWyEjXScsICckJyksXG4gICAgICAvLyBrZXk6IGV2ZXJ5dGhpbmcgdW50aWwgd2hpdGVzcGFjZSBvciA9IG9yIDogKHRha2luZyBpbnRvIGFjY291bnQgYmFja3NsYXNoZXMpXG4gICAgICAvLyBjYXNlIG9mIGEgXCJub3JtYWxcIiBrZXlcbiAgICAgIHtcbiAgICAgICAgcmV0dXJuQmVnaW46IHRydWUsXG4gICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAgeyBiZWdpbjogS0VZX0FMUEhBTlVNICsgRVFVQUxfREVMSU0sIHJlbGV2YW5jZTogMSB9LFxuICAgICAgICAgIHsgYmVnaW46IEtFWV9BTFBIQU5VTSArIFdTX0RFTElNLCByZWxldmFuY2U6IDAgfVxuICAgICAgICBdLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2F0dHInLFxuICAgICAgICAgICAgYmVnaW46IEtFWV9BTFBIQU5VTSxcbiAgICAgICAgICAgIGVuZHNQYXJlbnQ6IHRydWUsXG4gICAgICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIHN0YXJ0czogREVMSU1fQU5EX1ZBTFVFXG4gICAgICB9LFxuICAgICAgLy8gY2FzZSBvZiBrZXkgY29udGFpbmluZyBub24tYWxwaGFudW1lcmljIGNoYXJzID0+IHJlbGV2YW5jZSA9IDBcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IEtFWV9PVEhFUiArIERFTElNLFxuICAgICAgICByZXR1cm5CZWdpbjogdHJ1ZSxcbiAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgICAgICAgICAgYmVnaW46IEtFWV9PVEhFUixcbiAgICAgICAgICAgIGVuZHNQYXJlbnQ6IHRydWUsXG4gICAgICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIHN0YXJ0czogREVMSU1fQU5EX1ZBTFVFXG4gICAgICB9LFxuICAgICAgLy8gY2FzZSBvZiBhbiBlbXB0eSBrZXlcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnYXR0cicsXG4gICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgYmVnaW46IEtFWV9PVEhFUiArIFdTMCArICckJ1xuICAgICAgfVxuICAgIF1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwcm9wZXJ0aWVzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==