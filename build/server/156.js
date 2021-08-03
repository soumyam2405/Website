exports.ids = [156];
exports.modules = {

/***/ "./node_modules/highlight.js/lib/languages/scilab.js":
/*!***********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/scilab.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Scilab
Author: Sylvestre Ledru <sylvestre.ledru@scilab-enterprises.com>
Origin: matlab.js
Description: Scilab is a port from Matlab
Website: https://www.scilab.org
Category: scientific
*/

function scilab(hljs) {
  const COMMON_CONTAINS = [
    hljs.C_NUMBER_MODE,
    {
      className: 'string',
      begin: '\'|\"',
      end: '\'|\"',
      contains: [ hljs.BACKSLASH_ESCAPE,
        {
          begin: '\'\''
        } ]
    }
  ];

  return {
    name: 'Scilab',
    aliases: [ 'sci' ],
    keywords: {
      $pattern: /%?\w+/,
      keyword: 'abort break case clear catch continue do elseif else endfunction end for function ' +
        'global if pause return resume select try then while',
      literal:
        '%f %F %t %T %pi %eps %inf %nan %e %i %z %s',
      built_in: // Scilab has more than 2000 functions. Just list the most commons
       'abs and acos asin atan ceil cd chdir clearglobal cosh cos cumprod deff disp error ' +
       'exec execstr exists exp eye gettext floor fprintf fread fsolve imag isdef isempty ' +
       'isinfisnan isvector lasterror length load linspace list listfiles log10 log2 log ' +
       'max min msprintf mclose mopen ones or pathconvert poly printf prod pwd rand real ' +
       'round sinh sin size gsort sprintf sqrt strcat strcmps tring sum system tanh tan ' +
       'type typename warning zeros matrix'
    },
    illegal: '("|#|/\\*|\\s+/\\w+)',
    contains: [
      {
        className: 'function',
        beginKeywords: 'function',
        end: '$',
        contains: [
          hljs.UNDERSCORE_TITLE_MODE,
          {
            className: 'params',
            begin: '\\(',
            end: '\\)'
          }
        ]
      },
      // seems to be a guard against [ident]' or [ident].
      // perhaps to prevent attributes from flagging as keywords?
      {
        begin: '[a-zA-Z_][a-zA-Z_0-9]*[\\.\']+',
        relevance: 0
      },
      {
        begin: '\\[',
        end: '\\][\\.\']*',
        relevance: 0,
        contains: COMMON_CONTAINS
      },
      hljs.COMMENT('//', '$')
    ].concat(COMMON_CONTAINS)
  };
}

module.exports = scilab;


/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvc2NpbGFiLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiMTU2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBTY2lsYWJcbkF1dGhvcjogU3lsdmVzdHJlIExlZHJ1IDxzeWx2ZXN0cmUubGVkcnVAc2NpbGFiLWVudGVycHJpc2VzLmNvbT5cbk9yaWdpbjogbWF0bGFiLmpzXG5EZXNjcmlwdGlvbjogU2NpbGFiIGlzIGEgcG9ydCBmcm9tIE1hdGxhYlxuV2Vic2l0ZTogaHR0cHM6Ly93d3cuc2NpbGFiLm9yZ1xuQ2F0ZWdvcnk6IHNjaWVudGlmaWNcbiovXG5cbmZ1bmN0aW9uIHNjaWxhYihobGpzKSB7XG4gIGNvbnN0IENPTU1PTl9DT05UQUlOUyA9IFtcbiAgICBobGpzLkNfTlVNQkVSX01PREUsXG4gICAge1xuICAgICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICAgIGJlZ2luOiAnXFwnfFxcXCInLFxuICAgICAgZW5kOiAnXFwnfFxcXCInLFxuICAgICAgY29udGFpbnM6IFsgaGxqcy5CQUNLU0xBU0hfRVNDQVBFLFxuICAgICAgICB7XG4gICAgICAgICAgYmVnaW46ICdcXCdcXCcnXG4gICAgICAgIH0gXVxuICAgIH1cbiAgXTtcblxuICByZXR1cm4ge1xuICAgIG5hbWU6ICdTY2lsYWInLFxuICAgIGFsaWFzZXM6IFsgJ3NjaScgXSxcbiAgICBrZXl3b3Jkczoge1xuICAgICAgJHBhdHRlcm46IC8lP1xcdysvLFxuICAgICAga2V5d29yZDogJ2Fib3J0IGJyZWFrIGNhc2UgY2xlYXIgY2F0Y2ggY29udGludWUgZG8gZWxzZWlmIGVsc2UgZW5kZnVuY3Rpb24gZW5kIGZvciBmdW5jdGlvbiAnICtcbiAgICAgICAgJ2dsb2JhbCBpZiBwYXVzZSByZXR1cm4gcmVzdW1lIHNlbGVjdCB0cnkgdGhlbiB3aGlsZScsXG4gICAgICBsaXRlcmFsOlxuICAgICAgICAnJWYgJUYgJXQgJVQgJXBpICVlcHMgJWluZiAlbmFuICVlICVpICV6ICVzJyxcbiAgICAgIGJ1aWx0X2luOiAvLyBTY2lsYWIgaGFzIG1vcmUgdGhhbiAyMDAwIGZ1bmN0aW9ucy4gSnVzdCBsaXN0IHRoZSBtb3N0IGNvbW1vbnNcbiAgICAgICAnYWJzIGFuZCBhY29zIGFzaW4gYXRhbiBjZWlsIGNkIGNoZGlyIGNsZWFyZ2xvYmFsIGNvc2ggY29zIGN1bXByb2QgZGVmZiBkaXNwIGVycm9yICcgK1xuICAgICAgICdleGVjIGV4ZWNzdHIgZXhpc3RzIGV4cCBleWUgZ2V0dGV4dCBmbG9vciBmcHJpbnRmIGZyZWFkIGZzb2x2ZSBpbWFnIGlzZGVmIGlzZW1wdHkgJyArXG4gICAgICAgJ2lzaW5maXNuYW4gaXN2ZWN0b3IgbGFzdGVycm9yIGxlbmd0aCBsb2FkIGxpbnNwYWNlIGxpc3QgbGlzdGZpbGVzIGxvZzEwIGxvZzIgbG9nICcgK1xuICAgICAgICdtYXggbWluIG1zcHJpbnRmIG1jbG9zZSBtb3BlbiBvbmVzIG9yIHBhdGhjb252ZXJ0IHBvbHkgcHJpbnRmIHByb2QgcHdkIHJhbmQgcmVhbCAnICtcbiAgICAgICAncm91bmQgc2luaCBzaW4gc2l6ZSBnc29ydCBzcHJpbnRmIHNxcnQgc3RyY2F0IHN0cmNtcHMgdHJpbmcgc3VtIHN5c3RlbSB0YW5oIHRhbiAnICtcbiAgICAgICAndHlwZSB0eXBlbmFtZSB3YXJuaW5nIHplcm9zIG1hdHJpeCdcbiAgICB9LFxuICAgIGlsbGVnYWw6ICcoXCJ8I3wvXFxcXCp8XFxcXHMrL1xcXFx3KyknLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2Z1bmN0aW9uJyxcbiAgICAgICAgYmVnaW5LZXl3b3JkczogJ2Z1bmN0aW9uJyxcbiAgICAgICAgZW5kOiAnJCcsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgaGxqcy5VTkRFUlNDT1JFX1RJVExFX01PREUsXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAncGFyYW1zJyxcbiAgICAgICAgICAgIGJlZ2luOiAnXFxcXCgnLFxuICAgICAgICAgICAgZW5kOiAnXFxcXCknXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgLy8gc2VlbXMgdG8gYmUgYSBndWFyZCBhZ2FpbnN0IFtpZGVudF0nIG9yIFtpZGVudF0uXG4gICAgICAvLyBwZXJoYXBzIHRvIHByZXZlbnQgYXR0cmlidXRlcyBmcm9tIGZsYWdnaW5nIGFzIGtleXdvcmRzP1xuICAgICAge1xuICAgICAgICBiZWdpbjogJ1thLXpBLVpfXVthLXpBLVpfMC05XSpbXFxcXC5cXCddKycsXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICdcXFxcWycsXG4gICAgICAgIGVuZDogJ1xcXFxdW1xcXFwuXFwnXSonLFxuICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgIGNvbnRhaW5zOiBDT01NT05fQ09OVEFJTlNcbiAgICAgIH0sXG4gICAgICBobGpzLkNPTU1FTlQoJy8vJywgJyQnKVxuICAgIF0uY29uY2F0KENPTU1PTl9DT05UQUlOUylcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzY2lsYWI7XG4iXSwic291cmNlUm9vdCI6IiJ9