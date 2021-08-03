(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[174],{

/***/ "./node_modules/highlight.js/lib/languages/tcl.js":
/*!********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/tcl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Tcl
Description: Tcl is a very simple programming language.
Author: Radek Liska <radekliska@gmail.com>
Website: https://www.tcl.tk/about/language.html
*/

function tcl(hljs) {
  return {
    name: 'Tcl',
    aliases: ['tk'],
    keywords: 'after append apply array auto_execok auto_import auto_load auto_mkindex ' +
      'auto_mkindex_old auto_qualify auto_reset bgerror binary break catch cd chan clock ' +
      'close concat continue dde dict encoding eof error eval exec exit expr fblocked ' +
      'fconfigure fcopy file fileevent filename flush for foreach format gets glob global ' +
      'history http if incr info interp join lappend|10 lassign|10 lindex|10 linsert|10 list ' +
      'llength|10 load lrange|10 lrepeat|10 lreplace|10 lreverse|10 lsearch|10 lset|10 lsort|10 '+
      'mathfunc mathop memory msgcat namespace open package parray pid pkg::create pkg_mkIndex '+
      'platform platform::shell proc puts pwd read refchan regexp registry regsub|10 rename '+
      'return safe scan seek set socket source split string subst switch tcl_endOfWord '+
      'tcl_findLibrary tcl_startOfNextWord tcl_startOfPreviousWord tcl_wordBreakAfter '+
      'tcl_wordBreakBefore tcltest tclvars tell time tm trace unknown unload unset update '+
      'uplevel upvar variable vwait while',
    contains: [
      hljs.COMMENT(';[ \\t]*#', '$'),
      hljs.COMMENT('^[ \\t]*#', '$'),
      {
        beginKeywords: 'proc',
        end: '[\\{]',
        excludeEnd: true,
        contains: [
          {
            className: 'title',
            begin: '[ \\t\\n\\r]+(::)?[a-zA-Z_]((::)?[a-zA-Z0-9_])*',
            end: '[ \\t\\n\\r]',
            endsWithParent: true,
            excludeEnd: true
          }
        ]
      },
      {
        excludeEnd: true,
        variants: [
          {
            begin: '\\$(\\{)?(::)?[a-zA-Z_]((::)?[a-zA-Z0-9_])*\\(([a-zA-Z0-9_])*\\)',
            end: '[^a-zA-Z0-9_\\}\\$]'
          },
          {
            begin: '\\$(\\{)?(::)?[a-zA-Z_]((::)?[a-zA-Z0-9_])*',
            end: '(\\))?[^a-zA-Z0-9_\\}\\$]'
          }
        ]
      },
      {
        className: 'string',
        contains: [hljs.BACKSLASH_ESCAPE],
        variants: [
          hljs.inherit(hljs.QUOTE_STRING_MODE, {illegal: null})
        ]
      },
      {
        className: 'number',
        variants: [hljs.BINARY_NUMBER_MODE, hljs.C_NUMBER_MODE]
      }
    ]
  }
}

module.exports = tcl;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3RjbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0IsaUNBQWlDO0FBQ2pDLFdBQVc7QUFDWDtBQUNBLDJCQUEyQjtBQUMzQix1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxjQUFjO0FBQzlEO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvMTc0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBUY2xcbkRlc2NyaXB0aW9uOiBUY2wgaXMgYSB2ZXJ5IHNpbXBsZSBwcm9ncmFtbWluZyBsYW5ndWFnZS5cbkF1dGhvcjogUmFkZWsgTGlza2EgPHJhZGVrbGlza2FAZ21haWwuY29tPlxuV2Vic2l0ZTogaHR0cHM6Ly93d3cudGNsLnRrL2Fib3V0L2xhbmd1YWdlLmh0bWxcbiovXG5cbmZ1bmN0aW9uIHRjbChobGpzKSB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ1RjbCcsXG4gICAgYWxpYXNlczogWyd0ayddLFxuICAgIGtleXdvcmRzOiAnYWZ0ZXIgYXBwZW5kIGFwcGx5IGFycmF5IGF1dG9fZXhlY29rIGF1dG9faW1wb3J0IGF1dG9fbG9hZCBhdXRvX21raW5kZXggJyArXG4gICAgICAnYXV0b19ta2luZGV4X29sZCBhdXRvX3F1YWxpZnkgYXV0b19yZXNldCBiZ2Vycm9yIGJpbmFyeSBicmVhayBjYXRjaCBjZCBjaGFuIGNsb2NrICcgK1xuICAgICAgJ2Nsb3NlIGNvbmNhdCBjb250aW51ZSBkZGUgZGljdCBlbmNvZGluZyBlb2YgZXJyb3IgZXZhbCBleGVjIGV4aXQgZXhwciBmYmxvY2tlZCAnICtcbiAgICAgICdmY29uZmlndXJlIGZjb3B5IGZpbGUgZmlsZWV2ZW50IGZpbGVuYW1lIGZsdXNoIGZvciBmb3JlYWNoIGZvcm1hdCBnZXRzIGdsb2IgZ2xvYmFsICcgK1xuICAgICAgJ2hpc3RvcnkgaHR0cCBpZiBpbmNyIGluZm8gaW50ZXJwIGpvaW4gbGFwcGVuZHwxMCBsYXNzaWdufDEwIGxpbmRleHwxMCBsaW5zZXJ0fDEwIGxpc3QgJyArXG4gICAgICAnbGxlbmd0aHwxMCBsb2FkIGxyYW5nZXwxMCBscmVwZWF0fDEwIGxyZXBsYWNlfDEwIGxyZXZlcnNlfDEwIGxzZWFyY2h8MTAgbHNldHwxMCBsc29ydHwxMCAnK1xuICAgICAgJ21hdGhmdW5jIG1hdGhvcCBtZW1vcnkgbXNnY2F0IG5hbWVzcGFjZSBvcGVuIHBhY2thZ2UgcGFycmF5IHBpZCBwa2c6OmNyZWF0ZSBwa2dfbWtJbmRleCAnK1xuICAgICAgJ3BsYXRmb3JtIHBsYXRmb3JtOjpzaGVsbCBwcm9jIHB1dHMgcHdkIHJlYWQgcmVmY2hhbiByZWdleHAgcmVnaXN0cnkgcmVnc3VifDEwIHJlbmFtZSAnK1xuICAgICAgJ3JldHVybiBzYWZlIHNjYW4gc2VlayBzZXQgc29ja2V0IHNvdXJjZSBzcGxpdCBzdHJpbmcgc3Vic3Qgc3dpdGNoIHRjbF9lbmRPZldvcmQgJytcbiAgICAgICd0Y2xfZmluZExpYnJhcnkgdGNsX3N0YXJ0T2ZOZXh0V29yZCB0Y2xfc3RhcnRPZlByZXZpb3VzV29yZCB0Y2xfd29yZEJyZWFrQWZ0ZXIgJytcbiAgICAgICd0Y2xfd29yZEJyZWFrQmVmb3JlIHRjbHRlc3QgdGNsdmFycyB0ZWxsIHRpbWUgdG0gdHJhY2UgdW5rbm93biB1bmxvYWQgdW5zZXQgdXBkYXRlICcrXG4gICAgICAndXBsZXZlbCB1cHZhciB2YXJpYWJsZSB2d2FpdCB3aGlsZScsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIGhsanMuQ09NTUVOVCgnO1sgXFxcXHRdKiMnLCAnJCcpLFxuICAgICAgaGxqcy5DT01NRU5UKCdeWyBcXFxcdF0qIycsICckJyksXG4gICAgICB7XG4gICAgICAgIGJlZ2luS2V5d29yZHM6ICdwcm9jJyxcbiAgICAgICAgZW5kOiAnW1xcXFx7XScsXG4gICAgICAgIGV4Y2x1ZGVFbmQ6IHRydWUsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAndGl0bGUnLFxuICAgICAgICAgICAgYmVnaW46ICdbIFxcXFx0XFxcXG5cXFxccl0rKDo6KT9bYS16QS1aX10oKDo6KT9bYS16QS1aMC05X10pKicsXG4gICAgICAgICAgICBlbmQ6ICdbIFxcXFx0XFxcXG5cXFxccl0nLFxuICAgICAgICAgICAgZW5kc1dpdGhQYXJlbnQ6IHRydWUsXG4gICAgICAgICAgICBleGNsdWRlRW5kOiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBleGNsdWRlRW5kOiB0cnVlLFxuICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luOiAnXFxcXCQoXFxcXHspPyg6Oik/W2EtekEtWl9dKCg6Oik/W2EtekEtWjAtOV9dKSpcXFxcKChbYS16QS1aMC05X10pKlxcXFwpJyxcbiAgICAgICAgICAgIGVuZDogJ1teYS16QS1aMC05X1xcXFx9XFxcXCRdJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW46ICdcXFxcJChcXFxceyk/KDo6KT9bYS16QS1aX10oKDo6KT9bYS16QS1aMC05X10pKicsXG4gICAgICAgICAgICBlbmQ6ICcoXFxcXCkpP1teYS16QS1aMC05X1xcXFx9XFxcXCRdJ1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICAgICAgY29udGFpbnM6IFtobGpzLkJBQ0tTTEFTSF9FU0NBUEVdLFxuICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgIGhsanMuaW5oZXJpdChobGpzLlFVT1RFX1NUUklOR19NT0RFLCB7aWxsZWdhbDogbnVsbH0pXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgICAgIHZhcmlhbnRzOiBbaGxqcy5CSU5BUllfTlVNQkVSX01PREUsIGhsanMuQ19OVU1CRVJfTU9ERV1cbiAgICAgIH1cbiAgICBdXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0Y2w7XG4iXSwic291cmNlUm9vdCI6IiJ9