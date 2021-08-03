(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[65],{

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

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2djb2RlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvNjUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuIExhbmd1YWdlOiBHLWNvZGUgKElTTyA2OTgzKVxuIENvbnRyaWJ1dG9yczogQWRhbSBKb3NlcGggQ29vayA8YWRhbS5qb3NlcGguY29va0BnbWFpbC5jb20+XG4gRGVzY3JpcHRpb246IEctY29kZSBzeW50YXggaGlnaGxpZ2h0ZXIgZm9yIEZhbnVjIGFuZCBvdGhlciBjb21tb24gQ05DIG1hY2hpbmUgdG9vbCBjb250cm9scy5cbiBXZWJzaXRlOiBodHRwczovL3d3dy5zaXMuc2UvYXBpL2RvY3VtZW50L3ByZXZpZXcvOTExOTUyL1xuICovXG5cbmZ1bmN0aW9uIGdjb2RlKGhsanMpIHtcbiAgY29uc3QgR0NPREVfSURFTlRfUkUgPSAnW0EtWl9dW0EtWjAtOV8uXSonO1xuICBjb25zdCBHQ09ERV9DTE9TRV9SRSA9ICclJztcbiAgY29uc3QgR0NPREVfS0VZV09SRFMgPSB7XG4gICAgJHBhdHRlcm46IEdDT0RFX0lERU5UX1JFLFxuICAgIGtleXdvcmQ6ICdJRiBETyBXSElMRSBFTkRXSElMRSBDQUxMIEVORElGIFNVQiBFTkRTVUIgR09UTyBSRVBFQVQgRU5EUkVQRUFUICcgK1xuICAgICAgJ0VRIExUIEdUIE5FIEdFIExFIE9SIFhPUidcbiAgfTtcbiAgY29uc3QgR0NPREVfU1RBUlQgPSB7XG4gICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgYmVnaW46ICcoW09dKShbMC05XSspJ1xuICB9O1xuICBjb25zdCBOVU1CRVIgPSBobGpzLmluaGVyaXQoaGxqcy5DX05VTUJFUl9NT0RFLCB7XG4gICAgYmVnaW46ICcoWy0rXT8oKFxcXFwuXFxcXGQrKXwoXFxcXGQrKShcXFxcLlxcXFxkKik/KSl8JyArIGhsanMuQ19OVU1CRVJfUkVcbiAgfSk7XG4gIGNvbnN0IEdDT0RFX0NPREUgPSBbXG4gICAgaGxqcy5DX0xJTkVfQ09NTUVOVF9NT0RFLFxuICAgIGhsanMuQ19CTE9DS19DT01NRU5UX01PREUsXG4gICAgaGxqcy5DT01NRU5UKC9cXCgvLCAvXFwpLyksXG4gICAgTlVNQkVSLFxuICAgIGhsanMuaW5oZXJpdChobGpzLkFQT1NfU1RSSU5HX01PREUsIHtcbiAgICAgIGlsbGVnYWw6IG51bGxcbiAgICB9KSxcbiAgICBobGpzLmluaGVyaXQoaGxqcy5RVU9URV9TVFJJTkdfTU9ERSwge1xuICAgICAgaWxsZWdhbDogbnVsbFxuICAgIH0pLFxuICAgIHtcbiAgICAgIGNsYXNzTmFtZTogJ25hbWUnLFxuICAgICAgYmVnaW46ICcoW0ddKShbMC05XStcXFxcLj9bMC05XT8pJ1xuICAgIH0sXG4gICAge1xuICAgICAgY2xhc3NOYW1lOiAnbmFtZScsXG4gICAgICBiZWdpbjogJyhbTV0pKFswLTldK1xcXFwuP1swLTldPyknXG4gICAgfSxcbiAgICB7XG4gICAgICBjbGFzc05hbWU6ICdhdHRyJyxcbiAgICAgIGJlZ2luOiAnKFZDfFZTfCMpJyxcbiAgICAgIGVuZDogJyhcXFxcZCspJ1xuICAgIH0sXG4gICAge1xuICAgICAgY2xhc3NOYW1lOiAnYXR0cicsXG4gICAgICBiZWdpbjogJyhWWk9GWHxWWk9GWXxWWk9GWiknXG4gICAgfSxcbiAgICB7XG4gICAgICBjbGFzc05hbWU6ICdidWlsdF9pbicsXG4gICAgICBiZWdpbjogJyhBVEFOfEFCU3xBQ09TfEFTSU58U0lOfENPU3xFWFB8RklYfEZVUHxST1VORHxMTnxUQU4pKFxcXFxbKScsXG4gICAgICBjb250YWluczogW1xuICAgICAgICBOVU1CRVJcbiAgICAgIF0sXG4gICAgICBlbmQ6ICdcXFxcXSdcbiAgICB9LFxuICAgIHtcbiAgICAgIGNsYXNzTmFtZTogJ3N5bWJvbCcsXG4gICAgICB2YXJpYW50czogW1xuICAgICAgICB7XG4gICAgICAgICAgYmVnaW46ICdOJyxcbiAgICAgICAgICBlbmQ6ICdcXFxcZCsnLFxuICAgICAgICAgIGlsbGVnYWw6ICdcXFxcVydcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXTtcblxuICByZXR1cm4ge1xuICAgIG5hbWU6ICdHLWNvZGUgKElTTyA2OTgzKScsXG4gICAgYWxpYXNlczogWyduYyddLFxuICAgIC8vIFNvbWUgaW1wbGVtZW50YXRpb25zIChDTkMgY29udHJvbHMpIG9mIEctY29kZSBhcmUgaW50ZXJvcGVyYWJsZSB3aXRoIHVwcGVyY2FzZSBhbmQgbG93ZXJjYXNlIGxldHRlcnMgc2VhbWxlc3NseS5cbiAgICAvLyBIb3dldmVyLCBtb3N0IHByZWZlciBhbGwgdXBwZXJjYXNlIGFuZCB1cHBlcmNhc2UgaXMgY3VzdG9tYXJ5LlxuICAgIGNhc2VfaW5zZW5zaXRpdmU6IHRydWUsXG4gICAga2V5d29yZHM6IEdDT0RFX0tFWVdPUkRTLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgICAgICBiZWdpbjogR0NPREVfQ0xPU0VfUkVcbiAgICAgIH0sXG4gICAgICBHQ09ERV9TVEFSVFxuICAgIF0uY29uY2F0KEdDT0RFX0NPREUpXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2NvZGU7XG4iXSwic291cmNlUm9vdCI6IiJ9