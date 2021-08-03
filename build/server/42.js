exports.ids = [42];
exports.modules = {

/***/ "./node_modules/highlight.js/lib/languages/delphi.js":
/*!***********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/delphi.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Delphi
Website: https://www.embarcadero.com/products/delphi
*/

/** @type LanguageFn */
function delphi(hljs) {
  const KEYWORDS =
    'exports register file shl array record property for mod while set ally label uses raise not ' +
    'stored class safecall var interface or private static exit index inherited to else stdcall ' +
    'override shr asm far resourcestring finalization packed virtual out and protected library do ' +
    'xorwrite goto near function end div overload object unit begin string on inline repeat until ' +
    'destructor write message program with read initialization except default nil if case cdecl in ' +
    'downto threadvar of try pascal const external constructor type public then implementation ' +
    'finally published procedure absolute reintroduce operator as is abstract alias assembler ' +
    'bitpacked break continue cppdecl cvar enumerator experimental platform deprecated ' +
    'unimplemented dynamic export far16 forward generic helper implements interrupt iochecks ' +
    'local name nodefault noreturn nostackframe oldfpccall otherwise saveregisters softfloat ' +
    'specialize strict unaligned varargs ';
  const COMMENT_MODES = [
    hljs.C_LINE_COMMENT_MODE,
    hljs.COMMENT(/\{/, /\}/, {
      relevance: 0
    }),
    hljs.COMMENT(/\(\*/, /\*\)/, {
      relevance: 10
    })
  ];
  const DIRECTIVE = {
    className: 'meta',
    variants: [
      {
        begin: /\{\$/,
        end: /\}/
      },
      {
        begin: /\(\*\$/,
        end: /\*\)/
      }
    ]
  };
  const STRING = {
    className: 'string',
    begin: /'/,
    end: /'/,
    contains: [{
      begin: /''/
    }]
  };
  const NUMBER = {
    className: 'number',
    relevance: 0,
    // Source: https://www.freepascal.org/docs-html/ref/refse6.html
    variants: [
      {
        // Hexadecimal notation, e.g., $7F.
        begin: '\\$[0-9A-Fa-f]+'
      },
      {
        // Octal notation, e.g., &42.
        begin: '&[0-7]+'
      },
      {
        // Binary notation, e.g., %1010.
        begin: '%[01]+'
      }
    ]
  };
  const CHAR_STRING = {
    className: 'string',
    begin: /(#\d+)+/
  };
  const CLASS = {
    begin: hljs.IDENT_RE + '\\s*=\\s*class\\s*\\(',
    returnBegin: true,
    contains: [hljs.TITLE_MODE]
  };
  const FUNCTION = {
    className: 'function',
    beginKeywords: 'function constructor destructor procedure',
    end: /[:;]/,
    keywords: 'function constructor|10 destructor|10 procedure|10',
    contains: [
      hljs.TITLE_MODE,
      {
        className: 'params',
        begin: /\(/,
        end: /\)/,
        keywords: KEYWORDS,
        contains: [
          STRING,
          CHAR_STRING,
          DIRECTIVE
        ].concat(COMMENT_MODES)
      },
      DIRECTIVE
    ].concat(COMMENT_MODES)
  };
  return {
    name: 'Delphi',
    aliases: [
      'dpr',
      'dfm',
      'pas',
      'pascal',
      'freepascal',
      'lazarus',
      'lpr',
      'lfm'
    ],
    case_insensitive: true,
    keywords: KEYWORDS,
    illegal: /"|\$[G-Zg-z]|\/\*|<\/|\|/,
    contains: [
      STRING,
      CHAR_STRING,
      hljs.NUMBER_MODE,
      NUMBER,
      CLASS,
      FUNCTION,
      DIRECTIVE
    ].concat(COMMENT_MODES)
  };
}

module.exports = delphi;


/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvZGVscGhpLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixNQUFNO0FBQzFCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQixnQkFBZ0I7QUFDaEIsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6IjQyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBEZWxwaGlcbldlYnNpdGU6IGh0dHBzOi8vd3d3LmVtYmFyY2FkZXJvLmNvbS9wcm9kdWN0cy9kZWxwaGlcbiovXG5cbi8qKiBAdHlwZSBMYW5ndWFnZUZuICovXG5mdW5jdGlvbiBkZWxwaGkoaGxqcykge1xuICBjb25zdCBLRVlXT1JEUyA9XG4gICAgJ2V4cG9ydHMgcmVnaXN0ZXIgZmlsZSBzaGwgYXJyYXkgcmVjb3JkIHByb3BlcnR5IGZvciBtb2Qgd2hpbGUgc2V0IGFsbHkgbGFiZWwgdXNlcyByYWlzZSBub3QgJyArXG4gICAgJ3N0b3JlZCBjbGFzcyBzYWZlY2FsbCB2YXIgaW50ZXJmYWNlIG9yIHByaXZhdGUgc3RhdGljIGV4aXQgaW5kZXggaW5oZXJpdGVkIHRvIGVsc2Ugc3RkY2FsbCAnICtcbiAgICAnb3ZlcnJpZGUgc2hyIGFzbSBmYXIgcmVzb3VyY2VzdHJpbmcgZmluYWxpemF0aW9uIHBhY2tlZCB2aXJ0dWFsIG91dCBhbmQgcHJvdGVjdGVkIGxpYnJhcnkgZG8gJyArXG4gICAgJ3hvcndyaXRlIGdvdG8gbmVhciBmdW5jdGlvbiBlbmQgZGl2IG92ZXJsb2FkIG9iamVjdCB1bml0IGJlZ2luIHN0cmluZyBvbiBpbmxpbmUgcmVwZWF0IHVudGlsICcgK1xuICAgICdkZXN0cnVjdG9yIHdyaXRlIG1lc3NhZ2UgcHJvZ3JhbSB3aXRoIHJlYWQgaW5pdGlhbGl6YXRpb24gZXhjZXB0IGRlZmF1bHQgbmlsIGlmIGNhc2UgY2RlY2wgaW4gJyArXG4gICAgJ2Rvd250byB0aHJlYWR2YXIgb2YgdHJ5IHBhc2NhbCBjb25zdCBleHRlcm5hbCBjb25zdHJ1Y3RvciB0eXBlIHB1YmxpYyB0aGVuIGltcGxlbWVudGF0aW9uICcgK1xuICAgICdmaW5hbGx5IHB1Ymxpc2hlZCBwcm9jZWR1cmUgYWJzb2x1dGUgcmVpbnRyb2R1Y2Ugb3BlcmF0b3IgYXMgaXMgYWJzdHJhY3QgYWxpYXMgYXNzZW1ibGVyICcgK1xuICAgICdiaXRwYWNrZWQgYnJlYWsgY29udGludWUgY3BwZGVjbCBjdmFyIGVudW1lcmF0b3IgZXhwZXJpbWVudGFsIHBsYXRmb3JtIGRlcHJlY2F0ZWQgJyArXG4gICAgJ3VuaW1wbGVtZW50ZWQgZHluYW1pYyBleHBvcnQgZmFyMTYgZm9yd2FyZCBnZW5lcmljIGhlbHBlciBpbXBsZW1lbnRzIGludGVycnVwdCBpb2NoZWNrcyAnICtcbiAgICAnbG9jYWwgbmFtZSBub2RlZmF1bHQgbm9yZXR1cm4gbm9zdGFja2ZyYW1lIG9sZGZwY2NhbGwgb3RoZXJ3aXNlIHNhdmVyZWdpc3RlcnMgc29mdGZsb2F0ICcgK1xuICAgICdzcGVjaWFsaXplIHN0cmljdCB1bmFsaWduZWQgdmFyYXJncyAnO1xuICBjb25zdCBDT01NRU5UX01PREVTID0gW1xuICAgIGhsanMuQ19MSU5FX0NPTU1FTlRfTU9ERSxcbiAgICBobGpzLkNPTU1FTlQoL1xcey8sIC9cXH0vLCB7XG4gICAgICByZWxldmFuY2U6IDBcbiAgICB9KSxcbiAgICBobGpzLkNPTU1FTlQoL1xcKFxcKi8sIC9cXCpcXCkvLCB7XG4gICAgICByZWxldmFuY2U6IDEwXG4gICAgfSlcbiAgXTtcbiAgY29uc3QgRElSRUNUSVZFID0ge1xuICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgIHZhcmlhbnRzOiBbXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAvXFx7XFwkLyxcbiAgICAgICAgZW5kOiAvXFx9L1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IC9cXChcXCpcXCQvLFxuICAgICAgICBlbmQ6IC9cXCpcXCkvXG4gICAgICB9XG4gICAgXVxuICB9O1xuICBjb25zdCBTVFJJTkcgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICBiZWdpbjogLycvLFxuICAgIGVuZDogLycvLFxuICAgIGNvbnRhaW5zOiBbe1xuICAgICAgYmVnaW46IC8nJy9cbiAgICB9XVxuICB9O1xuICBjb25zdCBOVU1CRVIgPSB7XG4gICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICByZWxldmFuY2U6IDAsXG4gICAgLy8gU291cmNlOiBodHRwczovL3d3dy5mcmVlcGFzY2FsLm9yZy9kb2NzLWh0bWwvcmVmL3JlZnNlNi5odG1sXG4gICAgdmFyaWFudHM6IFtcbiAgICAgIHtcbiAgICAgICAgLy8gSGV4YWRlY2ltYWwgbm90YXRpb24sIGUuZy4sICQ3Ri5cbiAgICAgICAgYmVnaW46ICdcXFxcJFswLTlBLUZhLWZdKydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIC8vIE9jdGFsIG5vdGF0aW9uLCBlLmcuLCAmNDIuXG4gICAgICAgIGJlZ2luOiAnJlswLTddKydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIC8vIEJpbmFyeSBub3RhdGlvbiwgZS5nLiwgJTEwMTAuXG4gICAgICAgIGJlZ2luOiAnJVswMV0rJ1xuICAgICAgfVxuICAgIF1cbiAgfTtcbiAgY29uc3QgQ0hBUl9TVFJJTkcgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICBiZWdpbjogLygjXFxkKykrL1xuICB9O1xuICBjb25zdCBDTEFTUyA9IHtcbiAgICBiZWdpbjogaGxqcy5JREVOVF9SRSArICdcXFxccyo9XFxcXHMqY2xhc3NcXFxccypcXFxcKCcsXG4gICAgcmV0dXJuQmVnaW46IHRydWUsXG4gICAgY29udGFpbnM6IFtobGpzLlRJVExFX01PREVdXG4gIH07XG4gIGNvbnN0IEZVTkNUSU9OID0ge1xuICAgIGNsYXNzTmFtZTogJ2Z1bmN0aW9uJyxcbiAgICBiZWdpbktleXdvcmRzOiAnZnVuY3Rpb24gY29uc3RydWN0b3IgZGVzdHJ1Y3RvciBwcm9jZWR1cmUnLFxuICAgIGVuZDogL1s6O10vLFxuICAgIGtleXdvcmRzOiAnZnVuY3Rpb24gY29uc3RydWN0b3J8MTAgZGVzdHJ1Y3RvcnwxMCBwcm9jZWR1cmV8MTAnLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBobGpzLlRJVExFX01PREUsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3BhcmFtcycsXG4gICAgICAgIGJlZ2luOiAvXFwoLyxcbiAgICAgICAgZW5kOiAvXFwpLyxcbiAgICAgICAga2V5d29yZHM6IEtFWVdPUkRTLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIFNUUklORyxcbiAgICAgICAgICBDSEFSX1NUUklORyxcbiAgICAgICAgICBESVJFQ1RJVkVcbiAgICAgICAgXS5jb25jYXQoQ09NTUVOVF9NT0RFUylcbiAgICAgIH0sXG4gICAgICBESVJFQ1RJVkVcbiAgICBdLmNvbmNhdChDT01NRU5UX01PREVTKVxuICB9O1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICdEZWxwaGknLFxuICAgIGFsaWFzZXM6IFtcbiAgICAgICdkcHInLFxuICAgICAgJ2RmbScsXG4gICAgICAncGFzJyxcbiAgICAgICdwYXNjYWwnLFxuICAgICAgJ2ZyZWVwYXNjYWwnLFxuICAgICAgJ2xhemFydXMnLFxuICAgICAgJ2xwcicsXG4gICAgICAnbGZtJ1xuICAgIF0sXG4gICAgY2FzZV9pbnNlbnNpdGl2ZTogdHJ1ZSxcbiAgICBrZXl3b3JkczogS0VZV09SRFMsXG4gICAgaWxsZWdhbDogL1wifFxcJFtHLVpnLXpdfFxcL1xcKnw8XFwvfFxcfC8sXG4gICAgY29udGFpbnM6IFtcbiAgICAgIFNUUklORyxcbiAgICAgIENIQVJfU1RSSU5HLFxuICAgICAgaGxqcy5OVU1CRVJfTU9ERSxcbiAgICAgIE5VTUJFUixcbiAgICAgIENMQVNTLFxuICAgICAgRlVOQ1RJT04sXG4gICAgICBESVJFQ1RJVkVcbiAgICBdLmNvbmNhdChDT01NRU5UX01PREVTKVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRlbHBoaTtcbiJdLCJzb3VyY2VSb290IjoiIn0=