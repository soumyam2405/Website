exports.ids = [123];
exports.modules = {

/***/ "./node_modules/highlight.js/lib/languages/oxygene.js":
/*!************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/oxygene.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Oxygene
Author: Carlo Kok <ck@remobjects.com>
Description: Oxygene is built on the foundation of Object Pascal, revamped and extended to be a modern language for the twenty-first century.
Website: https://www.elementscompiler.com/elements/default.aspx
*/

function oxygene(hljs) {
  const OXYGENE_KEYWORDS = {
    $pattern: /\.?\w+/,
    keyword:
      'abstract add and array as asc aspect assembly async begin break block by case class concat const copy constructor continue ' +
      'create default delegate desc distinct div do downto dynamic each else empty end ensure enum equals event except exit extension external false ' +
      'final finalize finalizer finally flags for forward from function future global group has if implementation implements implies in index inherited ' +
      'inline interface into invariants is iterator join locked locking loop matching method mod module namespace nested new nil not notify nullable of ' +
      'old on operator or order out override parallel params partial pinned private procedure property protected public queryable raise read readonly ' +
      'record reintroduce remove repeat require result reverse sealed select self sequence set shl shr skip static step soft take then to true try tuple ' +
      'type union unit unsafe until uses using var virtual raises volatile where while with write xor yield await mapped deprecated stdcall cdecl pascal ' +
      'register safecall overload library platform reference packed strict published autoreleasepool selector strong weak unretained'
  };
  const CURLY_COMMENT = hljs.COMMENT(
    /\{/,
    /\}/,
    {
      relevance: 0
    }
  );
  const PAREN_COMMENT = hljs.COMMENT(
    '\\(\\*',
    '\\*\\)',
    {
      relevance: 10
    }
  );
  const STRING = {
    className: 'string',
    begin: '\'',
    end: '\'',
    contains: [
      {
        begin: '\'\''
      }
    ]
  };
  const CHAR_STRING = {
    className: 'string',
    begin: '(#\\d+)+'
  };
  const FUNCTION = {
    className: 'function',
    beginKeywords: 'function constructor destructor procedure method',
    end: '[:;]',
    keywords: 'function constructor|10 destructor|10 procedure|10 method|10',
    contains: [
      hljs.TITLE_MODE,
      {
        className: 'params',
        begin: '\\(',
        end: '\\)',
        keywords: OXYGENE_KEYWORDS,
        contains: [
          STRING,
          CHAR_STRING
        ]
      },
      CURLY_COMMENT,
      PAREN_COMMENT
    ]
  };
  return {
    name: 'Oxygene',
    case_insensitive: true,
    keywords: OXYGENE_KEYWORDS,
    illegal: '("|\\$[G-Zg-z]|\\/\\*|</|=>|->)',
    contains: [
      CURLY_COMMENT,
      PAREN_COMMENT,
      hljs.C_LINE_COMMENT_MODE,
      STRING,
      CHAR_STRING,
      hljs.NUMBER_MODE,
      FUNCTION,
      {
        className: 'class',
        begin: '=\\bclass\\b',
        end: 'end;',
        keywords: OXYGENE_KEYWORDS,
        contains: [
          STRING,
          CHAR_STRING,
          CURLY_COMMENT,
          PAREN_COMMENT,
          hljs.C_LINE_COMMENT_MODE,
          FUNCTION
        ]
      }
    ]
  };
}

module.exports = oxygene;


/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvb3h5Z2VuZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6IjEyMy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5MYW5ndWFnZTogT3h5Z2VuZVxuQXV0aG9yOiBDYXJsbyBLb2sgPGNrQHJlbW9iamVjdHMuY29tPlxuRGVzY3JpcHRpb246IE94eWdlbmUgaXMgYnVpbHQgb24gdGhlIGZvdW5kYXRpb24gb2YgT2JqZWN0IFBhc2NhbCwgcmV2YW1wZWQgYW5kIGV4dGVuZGVkIHRvIGJlIGEgbW9kZXJuIGxhbmd1YWdlIGZvciB0aGUgdHdlbnR5LWZpcnN0IGNlbnR1cnkuXG5XZWJzaXRlOiBodHRwczovL3d3dy5lbGVtZW50c2NvbXBpbGVyLmNvbS9lbGVtZW50cy9kZWZhdWx0LmFzcHhcbiovXG5cbmZ1bmN0aW9uIG94eWdlbmUoaGxqcykge1xuICBjb25zdCBPWFlHRU5FX0tFWVdPUkRTID0ge1xuICAgICRwYXR0ZXJuOiAvXFwuP1xcdysvLFxuICAgIGtleXdvcmQ6XG4gICAgICAnYWJzdHJhY3QgYWRkIGFuZCBhcnJheSBhcyBhc2MgYXNwZWN0IGFzc2VtYmx5IGFzeW5jIGJlZ2luIGJyZWFrIGJsb2NrIGJ5IGNhc2UgY2xhc3MgY29uY2F0IGNvbnN0IGNvcHkgY29uc3RydWN0b3IgY29udGludWUgJyArXG4gICAgICAnY3JlYXRlIGRlZmF1bHQgZGVsZWdhdGUgZGVzYyBkaXN0aW5jdCBkaXYgZG8gZG93bnRvIGR5bmFtaWMgZWFjaCBlbHNlIGVtcHR5IGVuZCBlbnN1cmUgZW51bSBlcXVhbHMgZXZlbnQgZXhjZXB0IGV4aXQgZXh0ZW5zaW9uIGV4dGVybmFsIGZhbHNlICcgK1xuICAgICAgJ2ZpbmFsIGZpbmFsaXplIGZpbmFsaXplciBmaW5hbGx5IGZsYWdzIGZvciBmb3J3YXJkIGZyb20gZnVuY3Rpb24gZnV0dXJlIGdsb2JhbCBncm91cCBoYXMgaWYgaW1wbGVtZW50YXRpb24gaW1wbGVtZW50cyBpbXBsaWVzIGluIGluZGV4IGluaGVyaXRlZCAnICtcbiAgICAgICdpbmxpbmUgaW50ZXJmYWNlIGludG8gaW52YXJpYW50cyBpcyBpdGVyYXRvciBqb2luIGxvY2tlZCBsb2NraW5nIGxvb3AgbWF0Y2hpbmcgbWV0aG9kIG1vZCBtb2R1bGUgbmFtZXNwYWNlIG5lc3RlZCBuZXcgbmlsIG5vdCBub3RpZnkgbnVsbGFibGUgb2YgJyArXG4gICAgICAnb2xkIG9uIG9wZXJhdG9yIG9yIG9yZGVyIG91dCBvdmVycmlkZSBwYXJhbGxlbCBwYXJhbXMgcGFydGlhbCBwaW5uZWQgcHJpdmF0ZSBwcm9jZWR1cmUgcHJvcGVydHkgcHJvdGVjdGVkIHB1YmxpYyBxdWVyeWFibGUgcmFpc2UgcmVhZCByZWFkb25seSAnICtcbiAgICAgICdyZWNvcmQgcmVpbnRyb2R1Y2UgcmVtb3ZlIHJlcGVhdCByZXF1aXJlIHJlc3VsdCByZXZlcnNlIHNlYWxlZCBzZWxlY3Qgc2VsZiBzZXF1ZW5jZSBzZXQgc2hsIHNociBza2lwIHN0YXRpYyBzdGVwIHNvZnQgdGFrZSB0aGVuIHRvIHRydWUgdHJ5IHR1cGxlICcgK1xuICAgICAgJ3R5cGUgdW5pb24gdW5pdCB1bnNhZmUgdW50aWwgdXNlcyB1c2luZyB2YXIgdmlydHVhbCByYWlzZXMgdm9sYXRpbGUgd2hlcmUgd2hpbGUgd2l0aCB3cml0ZSB4b3IgeWllbGQgYXdhaXQgbWFwcGVkIGRlcHJlY2F0ZWQgc3RkY2FsbCBjZGVjbCBwYXNjYWwgJyArXG4gICAgICAncmVnaXN0ZXIgc2FmZWNhbGwgb3ZlcmxvYWQgbGlicmFyeSBwbGF0Zm9ybSByZWZlcmVuY2UgcGFja2VkIHN0cmljdCBwdWJsaXNoZWQgYXV0b3JlbGVhc2Vwb29sIHNlbGVjdG9yIHN0cm9uZyB3ZWFrIHVucmV0YWluZWQnXG4gIH07XG4gIGNvbnN0IENVUkxZX0NPTU1FTlQgPSBobGpzLkNPTU1FTlQoXG4gICAgL1xcey8sXG4gICAgL1xcfS8sXG4gICAge1xuICAgICAgcmVsZXZhbmNlOiAwXG4gICAgfVxuICApO1xuICBjb25zdCBQQVJFTl9DT01NRU5UID0gaGxqcy5DT01NRU5UKFxuICAgICdcXFxcKFxcXFwqJyxcbiAgICAnXFxcXCpcXFxcKScsXG4gICAge1xuICAgICAgcmVsZXZhbmNlOiAxMFxuICAgIH1cbiAgKTtcbiAgY29uc3QgU1RSSU5HID0ge1xuICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgYmVnaW46ICdcXCcnLFxuICAgIGVuZDogJ1xcJycsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICdcXCdcXCcnXG4gICAgICB9XG4gICAgXVxuICB9O1xuICBjb25zdCBDSEFSX1NUUklORyA9IHtcbiAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgIGJlZ2luOiAnKCNcXFxcZCspKydcbiAgfTtcbiAgY29uc3QgRlVOQ1RJT04gPSB7XG4gICAgY2xhc3NOYW1lOiAnZnVuY3Rpb24nLFxuICAgIGJlZ2luS2V5d29yZHM6ICdmdW5jdGlvbiBjb25zdHJ1Y3RvciBkZXN0cnVjdG9yIHByb2NlZHVyZSBtZXRob2QnLFxuICAgIGVuZDogJ1s6O10nLFxuICAgIGtleXdvcmRzOiAnZnVuY3Rpb24gY29uc3RydWN0b3J8MTAgZGVzdHJ1Y3RvcnwxMCBwcm9jZWR1cmV8MTAgbWV0aG9kfDEwJyxcbiAgICBjb250YWluczogW1xuICAgICAgaGxqcy5USVRMRV9NT0RFLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdwYXJhbXMnLFxuICAgICAgICBiZWdpbjogJ1xcXFwoJyxcbiAgICAgICAgZW5kOiAnXFxcXCknLFxuICAgICAgICBrZXl3b3JkczogT1hZR0VORV9LRVlXT1JEUyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICBTVFJJTkcsXG4gICAgICAgICAgQ0hBUl9TVFJJTkdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIENVUkxZX0NPTU1FTlQsXG4gICAgICBQQVJFTl9DT01NRU5UXG4gICAgXVxuICB9O1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICdPeHlnZW5lJyxcbiAgICBjYXNlX2luc2Vuc2l0aXZlOiB0cnVlLFxuICAgIGtleXdvcmRzOiBPWFlHRU5FX0tFWVdPUkRTLFxuICAgIGlsbGVnYWw6ICcoXCJ8XFxcXCRbRy1aZy16XXxcXFxcL1xcXFwqfDwvfD0+fC0+KScsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIENVUkxZX0NPTU1FTlQsXG4gICAgICBQQVJFTl9DT01NRU5ULFxuICAgICAgaGxqcy5DX0xJTkVfQ09NTUVOVF9NT0RFLFxuICAgICAgU1RSSU5HLFxuICAgICAgQ0hBUl9TVFJJTkcsXG4gICAgICBobGpzLk5VTUJFUl9NT0RFLFxuICAgICAgRlVOQ1RJT04sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2NsYXNzJyxcbiAgICAgICAgYmVnaW46ICc9XFxcXGJjbGFzc1xcXFxiJyxcbiAgICAgICAgZW5kOiAnZW5kOycsXG4gICAgICAgIGtleXdvcmRzOiBPWFlHRU5FX0tFWVdPUkRTLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIFNUUklORyxcbiAgICAgICAgICBDSEFSX1NUUklORyxcbiAgICAgICAgICBDVVJMWV9DT01NRU5ULFxuICAgICAgICAgIFBBUkVOX0NPTU1FTlQsXG4gICAgICAgICAgaGxqcy5DX0xJTkVfQ09NTUVOVF9NT0RFLFxuICAgICAgICAgIEZVTkNUSU9OXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb3h5Z2VuZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=