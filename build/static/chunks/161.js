(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[161],{

/***/ "./node_modules/highlight.js/lib/languages/smalltalk.js":
/*!**************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/smalltalk.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Smalltalk
Description: Smalltalk is an object-oriented, dynamically typed reflective programming language.
Author: Vladimir Gubarkov <xonixx@gmail.com>
Website: https://en.wikipedia.org/wiki/Smalltalk
*/

function smalltalk(hljs) {
  const VAR_IDENT_RE = '[a-z][a-zA-Z0-9_]*';
  const CHAR = {
    className: 'string',
    begin: '\\$.{1}'
  };
  const SYMBOL = {
    className: 'symbol',
    begin: '#' + hljs.UNDERSCORE_IDENT_RE
  };
  return {
    name: 'Smalltalk',
    aliases: [ 'st' ],
    keywords: 'self super nil true false thisContext', // only 6
    contains: [
      hljs.COMMENT('"', '"'),
      hljs.APOS_STRING_MODE,
      {
        className: 'type',
        begin: '\\b[A-Z][A-Za-z0-9_]*',
        relevance: 0
      },
      {
        begin: VAR_IDENT_RE + ':',
        relevance: 0
      },
      hljs.C_NUMBER_MODE,
      SYMBOL,
      CHAR,
      {
        // This looks more complicated than needed to avoid combinatorial
        // explosion under V8. It effectively means `| var1 var2 ... |` with
        // whitespace adjacent to `|` being optional.
        begin: '\\|[ ]*' + VAR_IDENT_RE + '([ ]+' + VAR_IDENT_RE + ')*[ ]*\\|',
        returnBegin: true,
        end: /\|/,
        illegal: /\S/,
        contains: [ {
          begin: '(\\|[ ]*)?' + VAR_IDENT_RE
        } ]
      },
      {
        begin: '#\\(',
        end: '\\)',
        contains: [
          hljs.APOS_STRING_MODE,
          CHAR,
          hljs.C_NUMBER_MODE,
          SYMBOL
        ]
      }
    ]
  };
}

module.exports = smalltalk;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3NtYWxsdGFsay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsRUFBRTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvMTYxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBTbWFsbHRhbGtcbkRlc2NyaXB0aW9uOiBTbWFsbHRhbGsgaXMgYW4gb2JqZWN0LW9yaWVudGVkLCBkeW5hbWljYWxseSB0eXBlZCByZWZsZWN0aXZlIHByb2dyYW1taW5nIGxhbmd1YWdlLlxuQXV0aG9yOiBWbGFkaW1pciBHdWJhcmtvdiA8eG9uaXh4QGdtYWlsLmNvbT5cbldlYnNpdGU6IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1NtYWxsdGFsa1xuKi9cblxuZnVuY3Rpb24gc21hbGx0YWxrKGhsanMpIHtcbiAgY29uc3QgVkFSX0lERU5UX1JFID0gJ1thLXpdW2EtekEtWjAtOV9dKic7XG4gIGNvbnN0IENIQVIgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICBiZWdpbjogJ1xcXFwkLnsxfSdcbiAgfTtcbiAgY29uc3QgU1lNQk9MID0ge1xuICAgIGNsYXNzTmFtZTogJ3N5bWJvbCcsXG4gICAgYmVnaW46ICcjJyArIGhsanMuVU5ERVJTQ09SRV9JREVOVF9SRVxuICB9O1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICdTbWFsbHRhbGsnLFxuICAgIGFsaWFzZXM6IFsgJ3N0JyBdLFxuICAgIGtleXdvcmRzOiAnc2VsZiBzdXBlciBuaWwgdHJ1ZSBmYWxzZSB0aGlzQ29udGV4dCcsIC8vIG9ubHkgNlxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBobGpzLkNPTU1FTlQoJ1wiJywgJ1wiJyksXG4gICAgICBobGpzLkFQT1NfU1RSSU5HX01PREUsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3R5cGUnLFxuICAgICAgICBiZWdpbjogJ1xcXFxiW0EtWl1bQS1aYS16MC05X10qJyxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogVkFSX0lERU5UX1JFICsgJzonLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICBobGpzLkNfTlVNQkVSX01PREUsXG4gICAgICBTWU1CT0wsXG4gICAgICBDSEFSLFxuICAgICAge1xuICAgICAgICAvLyBUaGlzIGxvb2tzIG1vcmUgY29tcGxpY2F0ZWQgdGhhbiBuZWVkZWQgdG8gYXZvaWQgY29tYmluYXRvcmlhbFxuICAgICAgICAvLyBleHBsb3Npb24gdW5kZXIgVjguIEl0IGVmZmVjdGl2ZWx5IG1lYW5zIGB8IHZhcjEgdmFyMiAuLi4gfGAgd2l0aFxuICAgICAgICAvLyB3aGl0ZXNwYWNlIGFkamFjZW50IHRvIGB8YCBiZWluZyBvcHRpb25hbC5cbiAgICAgICAgYmVnaW46ICdcXFxcfFsgXSonICsgVkFSX0lERU5UX1JFICsgJyhbIF0rJyArIFZBUl9JREVOVF9SRSArICcpKlsgXSpcXFxcfCcsXG4gICAgICAgIHJldHVybkJlZ2luOiB0cnVlLFxuICAgICAgICBlbmQ6IC9cXHwvLFxuICAgICAgICBpbGxlZ2FsOiAvXFxTLyxcbiAgICAgICAgY29udGFpbnM6IFsge1xuICAgICAgICAgIGJlZ2luOiAnKFxcXFx8WyBdKik/JyArIFZBUl9JREVOVF9SRVxuICAgICAgICB9IF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnI1xcXFwoJyxcbiAgICAgICAgZW5kOiAnXFxcXCknLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIGhsanMuQVBPU19TVFJJTkdfTU9ERSxcbiAgICAgICAgICBDSEFSLFxuICAgICAgICAgIGhsanMuQ19OVU1CRVJfTU9ERSxcbiAgICAgICAgICBTWU1CT0xcbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzbWFsbHRhbGs7XG4iXSwic291cmNlUm9vdCI6IiJ9