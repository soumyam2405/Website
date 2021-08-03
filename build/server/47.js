exports.ids = [47];
exports.modules = {

/***/ "./node_modules/highlight.js/lib/languages/dos.js":
/*!********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/dos.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Batch file (DOS)
Author: Alexander Makarov <sam@rmcreative.ru>
Contributors: Anton Kochkov <anton.kochkov@gmail.com>
Website: https://en.wikipedia.org/wiki/Batch_file
*/

/** @type LanguageFn */
function dos(hljs) {
  const COMMENT = hljs.COMMENT(
    /^\s*@?rem\b/, /$/,
    {
      relevance: 10
    }
  );
  const LABEL = {
    className: 'symbol',
    begin: '^\\s*[A-Za-z._?][A-Za-z0-9_$#@~.?]*(:|\\s+label)',
    relevance: 0
  };
  return {
    name: 'Batch file (DOS)',
    aliases: [
      'bat',
      'cmd'
    ],
    case_insensitive: true,
    illegal: /\/\*/,
    keywords: {
      keyword:
        'if else goto for in do call exit not exist errorlevel defined ' +
        'equ neq lss leq gtr geq',
      built_in:
        'prn nul lpt3 lpt2 lpt1 con com4 com3 com2 com1 aux ' +
        'shift cd dir echo setlocal endlocal set pause copy ' +
        'append assoc at attrib break cacls cd chcp chdir chkdsk chkntfs cls cmd color ' +
        'comp compact convert date dir diskcomp diskcopy doskey erase fs ' +
        'find findstr format ftype graftabl help keyb label md mkdir mode more move path ' +
        'pause print popd pushd promt rd recover rem rename replace restore rmdir shift ' +
        'sort start subst time title tree type ver verify vol ' +
        // winutils
        'ping net ipconfig taskkill xcopy ren del'
    },
    contains: [
      {
        className: 'variable',
        begin: /%%[^ ]|%[^ ]+?%|![^ ]+?!/
      },
      {
        className: 'function',
        begin: LABEL.begin,
        end: 'goto:eof',
        contains: [
          hljs.inherit(hljs.TITLE_MODE, {
            begin: '([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*'
          }),
          COMMENT
        ]
      },
      {
        className: 'number',
        begin: '\\b\\d+',
        relevance: 0
      },
      COMMENT
    ]
  };
}

module.exports = dos;


/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvZG9zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6IjQ3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBCYXRjaCBmaWxlIChET1MpXG5BdXRob3I6IEFsZXhhbmRlciBNYWthcm92IDxzYW1Acm1jcmVhdGl2ZS5ydT5cbkNvbnRyaWJ1dG9yczogQW50b24gS29jaGtvdiA8YW50b24ua29jaGtvdkBnbWFpbC5jb20+XG5XZWJzaXRlOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9CYXRjaF9maWxlXG4qL1xuXG4vKiogQHR5cGUgTGFuZ3VhZ2VGbiAqL1xuZnVuY3Rpb24gZG9zKGhsanMpIHtcbiAgY29uc3QgQ09NTUVOVCA9IGhsanMuQ09NTUVOVChcbiAgICAvXlxccypAP3JlbVxcYi8sIC8kLyxcbiAgICB7XG4gICAgICByZWxldmFuY2U6IDEwXG4gICAgfVxuICApO1xuICBjb25zdCBMQUJFTCA9IHtcbiAgICBjbGFzc05hbWU6ICdzeW1ib2wnLFxuICAgIGJlZ2luOiAnXlxcXFxzKltBLVphLXouXz9dW0EtWmEtejAtOV8kI0B+Lj9dKig6fFxcXFxzK2xhYmVsKScsXG4gICAgcmVsZXZhbmNlOiAwXG4gIH07XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ0JhdGNoIGZpbGUgKERPUyknLFxuICAgIGFsaWFzZXM6IFtcbiAgICAgICdiYXQnLFxuICAgICAgJ2NtZCdcbiAgICBdLFxuICAgIGNhc2VfaW5zZW5zaXRpdmU6IHRydWUsXG4gICAgaWxsZWdhbDogL1xcL1xcKi8sXG4gICAga2V5d29yZHM6IHtcbiAgICAgIGtleXdvcmQ6XG4gICAgICAgICdpZiBlbHNlIGdvdG8gZm9yIGluIGRvIGNhbGwgZXhpdCBub3QgZXhpc3QgZXJyb3JsZXZlbCBkZWZpbmVkICcgK1xuICAgICAgICAnZXF1IG5lcSBsc3MgbGVxIGd0ciBnZXEnLFxuICAgICAgYnVpbHRfaW46XG4gICAgICAgICdwcm4gbnVsIGxwdDMgbHB0MiBscHQxIGNvbiBjb200IGNvbTMgY29tMiBjb20xIGF1eCAnICtcbiAgICAgICAgJ3NoaWZ0IGNkIGRpciBlY2hvIHNldGxvY2FsIGVuZGxvY2FsIHNldCBwYXVzZSBjb3B5ICcgK1xuICAgICAgICAnYXBwZW5kIGFzc29jIGF0IGF0dHJpYiBicmVhayBjYWNscyBjZCBjaGNwIGNoZGlyIGNoa2RzayBjaGtudGZzIGNscyBjbWQgY29sb3IgJyArXG4gICAgICAgICdjb21wIGNvbXBhY3QgY29udmVydCBkYXRlIGRpciBkaXNrY29tcCBkaXNrY29weSBkb3NrZXkgZXJhc2UgZnMgJyArXG4gICAgICAgICdmaW5kIGZpbmRzdHIgZm9ybWF0IGZ0eXBlIGdyYWZ0YWJsIGhlbHAga2V5YiBsYWJlbCBtZCBta2RpciBtb2RlIG1vcmUgbW92ZSBwYXRoICcgK1xuICAgICAgICAncGF1c2UgcHJpbnQgcG9wZCBwdXNoZCBwcm9tdCByZCByZWNvdmVyIHJlbSByZW5hbWUgcmVwbGFjZSByZXN0b3JlIHJtZGlyIHNoaWZ0ICcgK1xuICAgICAgICAnc29ydCBzdGFydCBzdWJzdCB0aW1lIHRpdGxlIHRyZWUgdHlwZSB2ZXIgdmVyaWZ5IHZvbCAnICtcbiAgICAgICAgLy8gd2ludXRpbHNcbiAgICAgICAgJ3BpbmcgbmV0IGlwY29uZmlnIHRhc2traWxsIHhjb3B5IHJlbiBkZWwnXG4gICAgfSxcbiAgICBjb250YWluczogW1xuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICd2YXJpYWJsZScsXG4gICAgICAgIGJlZ2luOiAvJSVbXiBdfCVbXiBdKz8lfCFbXiBdKz8hL1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnZnVuY3Rpb24nLFxuICAgICAgICBiZWdpbjogTEFCRUwuYmVnaW4sXG4gICAgICAgIGVuZDogJ2dvdG86ZW9mJyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICBobGpzLmluaGVyaXQoaGxqcy5USVRMRV9NT0RFLCB7XG4gICAgICAgICAgICBiZWdpbjogJyhbX2EtekEtWl1cXFxcdypcXFxcLikqKFtfYS16QS1aXVxcXFx3KjopP1tfYS16QS1aXVxcXFx3KidcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBDT01NRU5UXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgICAgIGJlZ2luOiAnXFxcXGJcXFxcZCsnLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICBDT01NRU5UXG4gICAgXVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvcztcbiJdLCJzb3VyY2VSb290IjoiIn0=