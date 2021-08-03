exports.ids = [173];
exports.modules = {

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

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvdGNsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0IsaUNBQWlDO0FBQ2pDLFdBQVc7QUFDWDtBQUNBLDJCQUEyQjtBQUMzQix1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxjQUFjO0FBQzlEO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6IjE3My5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5MYW5ndWFnZTogVGNsXG5EZXNjcmlwdGlvbjogVGNsIGlzIGEgdmVyeSBzaW1wbGUgcHJvZ3JhbW1pbmcgbGFuZ3VhZ2UuXG5BdXRob3I6IFJhZGVrIExpc2thIDxyYWRla2xpc2thQGdtYWlsLmNvbT5cbldlYnNpdGU6IGh0dHBzOi8vd3d3LnRjbC50ay9hYm91dC9sYW5ndWFnZS5odG1sXG4qL1xuXG5mdW5jdGlvbiB0Y2woaGxqcykge1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICdUY2wnLFxuICAgIGFsaWFzZXM6IFsndGsnXSxcbiAgICBrZXl3b3JkczogJ2FmdGVyIGFwcGVuZCBhcHBseSBhcnJheSBhdXRvX2V4ZWNvayBhdXRvX2ltcG9ydCBhdXRvX2xvYWQgYXV0b19ta2luZGV4ICcgK1xuICAgICAgJ2F1dG9fbWtpbmRleF9vbGQgYXV0b19xdWFsaWZ5IGF1dG9fcmVzZXQgYmdlcnJvciBiaW5hcnkgYnJlYWsgY2F0Y2ggY2QgY2hhbiBjbG9jayAnICtcbiAgICAgICdjbG9zZSBjb25jYXQgY29udGludWUgZGRlIGRpY3QgZW5jb2RpbmcgZW9mIGVycm9yIGV2YWwgZXhlYyBleGl0IGV4cHIgZmJsb2NrZWQgJyArXG4gICAgICAnZmNvbmZpZ3VyZSBmY29weSBmaWxlIGZpbGVldmVudCBmaWxlbmFtZSBmbHVzaCBmb3IgZm9yZWFjaCBmb3JtYXQgZ2V0cyBnbG9iIGdsb2JhbCAnICtcbiAgICAgICdoaXN0b3J5IGh0dHAgaWYgaW5jciBpbmZvIGludGVycCBqb2luIGxhcHBlbmR8MTAgbGFzc2lnbnwxMCBsaW5kZXh8MTAgbGluc2VydHwxMCBsaXN0ICcgK1xuICAgICAgJ2xsZW5ndGh8MTAgbG9hZCBscmFuZ2V8MTAgbHJlcGVhdHwxMCBscmVwbGFjZXwxMCBscmV2ZXJzZXwxMCBsc2VhcmNofDEwIGxzZXR8MTAgbHNvcnR8MTAgJytcbiAgICAgICdtYXRoZnVuYyBtYXRob3AgbWVtb3J5IG1zZ2NhdCBuYW1lc3BhY2Ugb3BlbiBwYWNrYWdlIHBhcnJheSBwaWQgcGtnOjpjcmVhdGUgcGtnX21rSW5kZXggJytcbiAgICAgICdwbGF0Zm9ybSBwbGF0Zm9ybTo6c2hlbGwgcHJvYyBwdXRzIHB3ZCByZWFkIHJlZmNoYW4gcmVnZXhwIHJlZ2lzdHJ5IHJlZ3N1YnwxMCByZW5hbWUgJytcbiAgICAgICdyZXR1cm4gc2FmZSBzY2FuIHNlZWsgc2V0IHNvY2tldCBzb3VyY2Ugc3BsaXQgc3RyaW5nIHN1YnN0IHN3aXRjaCB0Y2xfZW5kT2ZXb3JkICcrXG4gICAgICAndGNsX2ZpbmRMaWJyYXJ5IHRjbF9zdGFydE9mTmV4dFdvcmQgdGNsX3N0YXJ0T2ZQcmV2aW91c1dvcmQgdGNsX3dvcmRCcmVha0FmdGVyICcrXG4gICAgICAndGNsX3dvcmRCcmVha0JlZm9yZSB0Y2x0ZXN0IHRjbHZhcnMgdGVsbCB0aW1lIHRtIHRyYWNlIHVua25vd24gdW5sb2FkIHVuc2V0IHVwZGF0ZSAnK1xuICAgICAgJ3VwbGV2ZWwgdXB2YXIgdmFyaWFibGUgdndhaXQgd2hpbGUnLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBobGpzLkNPTU1FTlQoJztbIFxcXFx0XSojJywgJyQnKSxcbiAgICAgIGhsanMuQ09NTUVOVCgnXlsgXFxcXHRdKiMnLCAnJCcpLFxuICAgICAge1xuICAgICAgICBiZWdpbktleXdvcmRzOiAncHJvYycsXG4gICAgICAgIGVuZDogJ1tcXFxce10nLFxuICAgICAgICBleGNsdWRlRW5kOiB0cnVlLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3RpdGxlJyxcbiAgICAgICAgICAgIGJlZ2luOiAnWyBcXFxcdFxcXFxuXFxcXHJdKyg6Oik/W2EtekEtWl9dKCg6Oik/W2EtekEtWjAtOV9dKSonLFxuICAgICAgICAgICAgZW5kOiAnWyBcXFxcdFxcXFxuXFxcXHJdJyxcbiAgICAgICAgICAgIGVuZHNXaXRoUGFyZW50OiB0cnVlLFxuICAgICAgICAgICAgZXhjbHVkZUVuZDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgZXhjbHVkZUVuZDogdHJ1ZSxcbiAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogJ1xcXFwkKFxcXFx7KT8oOjopP1thLXpBLVpfXSgoOjopP1thLXpBLVowLTlfXSkqXFxcXCgoW2EtekEtWjAtOV9dKSpcXFxcKScsXG4gICAgICAgICAgICBlbmQ6ICdbXmEtekEtWjAtOV9cXFxcfVxcXFwkXSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luOiAnXFxcXCQoXFxcXHspPyg6Oik/W2EtekEtWl9dKCg6Oik/W2EtekEtWjAtOV9dKSonLFxuICAgICAgICAgICAgZW5kOiAnKFxcXFwpKT9bXmEtekEtWjAtOV9cXFxcfVxcXFwkXSdcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgICAgIGNvbnRhaW5zOiBbaGxqcy5CQUNLU0xBU0hfRVNDQVBFXSxcbiAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICBobGpzLmluaGVyaXQoaGxqcy5RVU9URV9TVFJJTkdfTU9ERSwge2lsbGVnYWw6IG51bGx9KVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdudW1iZXInLFxuICAgICAgICB2YXJpYW50czogW2hsanMuQklOQVJZX05VTUJFUl9NT0RFLCBobGpzLkNfTlVNQkVSX01PREVdXG4gICAgICB9XG4gICAgXVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdGNsO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==