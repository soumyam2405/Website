exports.ids = [64];
exports.modules = {

/***/ "./node_modules/highlight.js/lib/languages/gcode.js":
/*!**********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/gcode.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 Language: G-code (ISO 6983)
 Contributors: Adam Joseph Cook <adam.joseph.cook@gmail.com>
 Description: G-code syntax highlighter for Fanuc and other common CNC machine tool controls.
 Website: https://www.sis.se/api/document/preview/911952/
 */

function gcode(hljs) {
  const GCODE_IDENT_RE = '[A-Z_][A-Z0-9_.]*';
  const GCODE_CLOSE_RE = '%';
  const GCODE_KEYWORDS = {
    $pattern: GCODE_IDENT_RE,
    keyword: 'IF DO WHILE ENDWHILE CALL ENDIF SUB ENDSUB GOTO REPEAT ENDREPEAT ' +
      'EQ LT GT NE GE LE OR XOR'
  };
  const GCODE_START = {
    className: 'meta',
    begin: '([O])([0-9]+)'
  };
  const NUMBER = hljs.inherit(hljs.C_NUMBER_MODE, {
    begin: '([-+]?((\\.\\d+)|(\\d+)(\\.\\d*)?))|' + hljs.C_NUMBER_RE
  });
  const GCODE_CODE = [
    hljs.C_LINE_COMMENT_MODE,
    hljs.C_BLOCK_COMMENT_MODE,
    hljs.COMMENT(/\(/, /\)/),
    NUMBER,
    hljs.inherit(hljs.APOS_STRING_MODE, {
      illegal: null
    }),
    hljs.inherit(hljs.QUOTE_STRING_MODE, {
      illegal: null
    }),
    {
      className: 'name',
      begin: '([G])([0-9]+\\.?[0-9]?)'
    },
    {
      className: 'name',
      begin: '([M])([0-9]+\\.?[0-9]?)'
    },
    {
      className: 'attr',
      begin: '(VC|VS|#)',
      end: '(\\d+)'
    },
    {
      className: 'attr',
      begin: '(VZOFX|VZOFY|VZOFZ)'
    },
    {
      className: 'built_in',
      begin: '(ATAN|ABS|ACOS|ASIN|SIN|COS|EXP|FIX|FUP|ROUND|LN|TAN)(\\[)',
      contains: [
        NUMBER
      ],
      end: '\\]'
    },
    {
      className: 'symbol',
      variants: [
        {
          begin: 'N',
          end: '\\d+',
          illegal: '\\W'
        }
      ]
    }
  ];

  return {
    name: 'G-code (ISO 6983)',
    aliases: ['nc'],
    // Some implementations (CNC controls) of G-code are interoperable with uppercase and lowercase letters seamlessly.
    // However, most prefer all uppercase and uppercase is customary.
    case_insensitive: true,
    keywords: GCODE_KEYWORDS,
    contains: [
      {
        className: 'meta',
        begin: GCODE_CLOSE_RE
      },
      GCODE_START
    ].concat(GCODE_CODE)
  };
}

module.exports = gcode;


/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvZ2NvZGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6IjY0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiBMYW5ndWFnZTogRy1jb2RlIChJU08gNjk4MylcbiBDb250cmlidXRvcnM6IEFkYW0gSm9zZXBoIENvb2sgPGFkYW0uam9zZXBoLmNvb2tAZ21haWwuY29tPlxuIERlc2NyaXB0aW9uOiBHLWNvZGUgc3ludGF4IGhpZ2hsaWdodGVyIGZvciBGYW51YyBhbmQgb3RoZXIgY29tbW9uIENOQyBtYWNoaW5lIHRvb2wgY29udHJvbHMuXG4gV2Vic2l0ZTogaHR0cHM6Ly93d3cuc2lzLnNlL2FwaS9kb2N1bWVudC9wcmV2aWV3LzkxMTk1Mi9cbiAqL1xuXG5mdW5jdGlvbiBnY29kZShobGpzKSB7XG4gIGNvbnN0IEdDT0RFX0lERU5UX1JFID0gJ1tBLVpfXVtBLVowLTlfLl0qJztcbiAgY29uc3QgR0NPREVfQ0xPU0VfUkUgPSAnJSc7XG4gIGNvbnN0IEdDT0RFX0tFWVdPUkRTID0ge1xuICAgICRwYXR0ZXJuOiBHQ09ERV9JREVOVF9SRSxcbiAgICBrZXl3b3JkOiAnSUYgRE8gV0hJTEUgRU5EV0hJTEUgQ0FMTCBFTkRJRiBTVUIgRU5EU1VCIEdPVE8gUkVQRUFUIEVORFJFUEVBVCAnICtcbiAgICAgICdFUSBMVCBHVCBORSBHRSBMRSBPUiBYT1InXG4gIH07XG4gIGNvbnN0IEdDT0RFX1NUQVJUID0ge1xuICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgIGJlZ2luOiAnKFtPXSkoWzAtOV0rKSdcbiAgfTtcbiAgY29uc3QgTlVNQkVSID0gaGxqcy5pbmhlcml0KGhsanMuQ19OVU1CRVJfTU9ERSwge1xuICAgIGJlZ2luOiAnKFstK10/KChcXFxcLlxcXFxkKyl8KFxcXFxkKykoXFxcXC5cXFxcZCopPykpfCcgKyBobGpzLkNfTlVNQkVSX1JFXG4gIH0pO1xuICBjb25zdCBHQ09ERV9DT0RFID0gW1xuICAgIGhsanMuQ19MSU5FX0NPTU1FTlRfTU9ERSxcbiAgICBobGpzLkNfQkxPQ0tfQ09NTUVOVF9NT0RFLFxuICAgIGhsanMuQ09NTUVOVCgvXFwoLywgL1xcKS8pLFxuICAgIE5VTUJFUixcbiAgICBobGpzLmluaGVyaXQoaGxqcy5BUE9TX1NUUklOR19NT0RFLCB7XG4gICAgICBpbGxlZ2FsOiBudWxsXG4gICAgfSksXG4gICAgaGxqcy5pbmhlcml0KGhsanMuUVVPVEVfU1RSSU5HX01PREUsIHtcbiAgICAgIGlsbGVnYWw6IG51bGxcbiAgICB9KSxcbiAgICB7XG4gICAgICBjbGFzc05hbWU6ICduYW1lJyxcbiAgICAgIGJlZ2luOiAnKFtHXSkoWzAtOV0rXFxcXC4/WzAtOV0/KSdcbiAgICB9LFxuICAgIHtcbiAgICAgIGNsYXNzTmFtZTogJ25hbWUnLFxuICAgICAgYmVnaW46ICcoW01dKShbMC05XStcXFxcLj9bMC05XT8pJ1xuICAgIH0sXG4gICAge1xuICAgICAgY2xhc3NOYW1lOiAnYXR0cicsXG4gICAgICBiZWdpbjogJyhWQ3xWU3wjKScsXG4gICAgICBlbmQ6ICcoXFxcXGQrKSdcbiAgICB9LFxuICAgIHtcbiAgICAgIGNsYXNzTmFtZTogJ2F0dHInLFxuICAgICAgYmVnaW46ICcoVlpPRlh8VlpPRll8VlpPRlopJ1xuICAgIH0sXG4gICAge1xuICAgICAgY2xhc3NOYW1lOiAnYnVpbHRfaW4nLFxuICAgICAgYmVnaW46ICcoQVRBTnxBQlN8QUNPU3xBU0lOfFNJTnxDT1N8RVhQfEZJWHxGVVB8Uk9VTkR8TE58VEFOKShcXFxcWyknLFxuICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgTlVNQkVSXG4gICAgICBdLFxuICAgICAgZW5kOiAnXFxcXF0nXG4gICAgfSxcbiAgICB7XG4gICAgICBjbGFzc05hbWU6ICdzeW1ib2wnLFxuICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGJlZ2luOiAnTicsXG4gICAgICAgICAgZW5kOiAnXFxcXGQrJyxcbiAgICAgICAgICBpbGxlZ2FsOiAnXFxcXFcnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF07XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnRy1jb2RlIChJU08gNjk4MyknLFxuICAgIGFsaWFzZXM6IFsnbmMnXSxcbiAgICAvLyBTb21lIGltcGxlbWVudGF0aW9ucyAoQ05DIGNvbnRyb2xzKSBvZiBHLWNvZGUgYXJlIGludGVyb3BlcmFibGUgd2l0aCB1cHBlcmNhc2UgYW5kIGxvd2VyY2FzZSBsZXR0ZXJzIHNlYW1sZXNzbHkuXG4gICAgLy8gSG93ZXZlciwgbW9zdCBwcmVmZXIgYWxsIHVwcGVyY2FzZSBhbmQgdXBwZXJjYXNlIGlzIGN1c3RvbWFyeS5cbiAgICBjYXNlX2luc2Vuc2l0aXZlOiB0cnVlLFxuICAgIGtleXdvcmRzOiBHQ09ERV9LRVlXT1JEUyxcbiAgICBjb250YWluczogW1xuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICAgICAgYmVnaW46IEdDT0RFX0NMT1NFX1JFXG4gICAgICB9LFxuICAgICAgR0NPREVfU1RBUlRcbiAgICBdLmNvbmNhdChHQ09ERV9DT0RFKVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdjb2RlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==