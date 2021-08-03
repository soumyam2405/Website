exports.ids = [161];
exports.modules = {

/***/ "./node_modules/highlight.js/lib/languages/sml.js":
/*!********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/sml.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: SML (Standard ML)
Author: Edwin Dalorzo <edwin@dalorzo.org>
Description: SML language definition.
Website: https://www.smlnj.org
Origin: ocaml.js
Category: functional
*/
function sml(hljs) {
  return {
    name: 'SML (Standard ML)',
    aliases: [ 'ml' ],
    keywords: {
      $pattern: '[a-z_]\\w*!?',
      keyword:
        /* according to Definition of Standard ML 97  */
        'abstype and andalso as case datatype do else end eqtype ' +
        'exception fn fun functor handle if in include infix infixr ' +
        'let local nonfix of op open orelse raise rec sharing sig ' +
        'signature struct structure then type val with withtype where while',
      built_in:
        /* built-in types according to basis library */
        'array bool char exn int list option order real ref string substring vector unit word',
      literal:
        'true false NONE SOME LESS EQUAL GREATER nil'
    },
    illegal: /\/\/|>>/,
    contains: [
      {
        className: 'literal',
        begin: /\[(\|\|)?\]|\(\)/,
        relevance: 0
      },
      hljs.COMMENT(
        '\\(\\*',
        '\\*\\)',
        {
          contains: [ 'self' ]
        }
      ),
      { /* type variable */
        className: 'symbol',
        begin: '\'[A-Za-z_](?!\')[\\w\']*'
        /* the grammar is ambiguous on how 'a'b should be interpreted but not the compiler */
      },
      { /* polymorphic variant */
        className: 'type',
        begin: '`[A-Z][\\w\']*'
      },
      { /* module or constructor */
        className: 'type',
        begin: '\\b[A-Z][\\w\']*',
        relevance: 0
      },
      { /* don't color identifiers, but safely catch all identifiers with ' */
        begin: '[a-z_]\\w*\'[\\w\']*'
      },
      hljs.inherit(hljs.APOS_STRING_MODE, {
        className: 'string',
        relevance: 0
      }),
      hljs.inherit(hljs.QUOTE_STRING_MODE, {
        illegal: null
      }),
      {
        className: 'number',
        begin:
          '\\b(0[xX][a-fA-F0-9_]+[Lln]?|' +
          '0[oO][0-7_]+[Lln]?|' +
          '0[bB][01_]+[Lln]?|' +
          '[0-9][0-9_]*([Lln]|(\\.[0-9_]*)?([eE][-+]?[0-9_]+)?)?)',
        relevance: 0
      },
      {
        begin: /[-=]>/ // relevance booster
      }
    ]
  };
}

module.exports = sml;


/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvc21sLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6IjE2MS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5MYW5ndWFnZTogU01MIChTdGFuZGFyZCBNTClcbkF1dGhvcjogRWR3aW4gRGFsb3J6byA8ZWR3aW5AZGFsb3J6by5vcmc+XG5EZXNjcmlwdGlvbjogU01MIGxhbmd1YWdlIGRlZmluaXRpb24uXG5XZWJzaXRlOiBodHRwczovL3d3dy5zbWxuai5vcmdcbk9yaWdpbjogb2NhbWwuanNcbkNhdGVnb3J5OiBmdW5jdGlvbmFsXG4qL1xuZnVuY3Rpb24gc21sKGhsanMpIHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnU01MIChTdGFuZGFyZCBNTCknLFxuICAgIGFsaWFzZXM6IFsgJ21sJyBdLFxuICAgIGtleXdvcmRzOiB7XG4gICAgICAkcGF0dGVybjogJ1thLXpfXVxcXFx3KiE/JyxcbiAgICAgIGtleXdvcmQ6XG4gICAgICAgIC8qIGFjY29yZGluZyB0byBEZWZpbml0aW9uIG9mIFN0YW5kYXJkIE1MIDk3ICAqL1xuICAgICAgICAnYWJzdHlwZSBhbmQgYW5kYWxzbyBhcyBjYXNlIGRhdGF0eXBlIGRvIGVsc2UgZW5kIGVxdHlwZSAnICtcbiAgICAgICAgJ2V4Y2VwdGlvbiBmbiBmdW4gZnVuY3RvciBoYW5kbGUgaWYgaW4gaW5jbHVkZSBpbmZpeCBpbmZpeHIgJyArXG4gICAgICAgICdsZXQgbG9jYWwgbm9uZml4IG9mIG9wIG9wZW4gb3JlbHNlIHJhaXNlIHJlYyBzaGFyaW5nIHNpZyAnICtcbiAgICAgICAgJ3NpZ25hdHVyZSBzdHJ1Y3Qgc3RydWN0dXJlIHRoZW4gdHlwZSB2YWwgd2l0aCB3aXRodHlwZSB3aGVyZSB3aGlsZScsXG4gICAgICBidWlsdF9pbjpcbiAgICAgICAgLyogYnVpbHQtaW4gdHlwZXMgYWNjb3JkaW5nIHRvIGJhc2lzIGxpYnJhcnkgKi9cbiAgICAgICAgJ2FycmF5IGJvb2wgY2hhciBleG4gaW50IGxpc3Qgb3B0aW9uIG9yZGVyIHJlYWwgcmVmIHN0cmluZyBzdWJzdHJpbmcgdmVjdG9yIHVuaXQgd29yZCcsXG4gICAgICBsaXRlcmFsOlxuICAgICAgICAndHJ1ZSBmYWxzZSBOT05FIFNPTUUgTEVTUyBFUVVBTCBHUkVBVEVSIG5pbCdcbiAgICB9LFxuICAgIGlsbGVnYWw6IC9cXC9cXC98Pj4vLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2xpdGVyYWwnLFxuICAgICAgICBiZWdpbjogL1xcWyhcXHxcXHwpP1xcXXxcXChcXCkvLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICBobGpzLkNPTU1FTlQoXG4gICAgICAgICdcXFxcKFxcXFwqJyxcbiAgICAgICAgJ1xcXFwqXFxcXCknLFxuICAgICAgICB7XG4gICAgICAgICAgY29udGFpbnM6IFsgJ3NlbGYnIF1cbiAgICAgICAgfVxuICAgICAgKSxcbiAgICAgIHsgLyogdHlwZSB2YXJpYWJsZSAqL1xuICAgICAgICBjbGFzc05hbWU6ICdzeW1ib2wnLFxuICAgICAgICBiZWdpbjogJ1xcJ1tBLVphLXpfXSg/IVxcJylbXFxcXHdcXCddKidcbiAgICAgICAgLyogdGhlIGdyYW1tYXIgaXMgYW1iaWd1b3VzIG9uIGhvdyAnYSdiIHNob3VsZCBiZSBpbnRlcnByZXRlZCBidXQgbm90IHRoZSBjb21waWxlciAqL1xuICAgICAgfSxcbiAgICAgIHsgLyogcG9seW1vcnBoaWMgdmFyaWFudCAqL1xuICAgICAgICBjbGFzc05hbWU6ICd0eXBlJyxcbiAgICAgICAgYmVnaW46ICdgW0EtWl1bXFxcXHdcXCddKidcbiAgICAgIH0sXG4gICAgICB7IC8qIG1vZHVsZSBvciBjb25zdHJ1Y3RvciAqL1xuICAgICAgICBjbGFzc05hbWU6ICd0eXBlJyxcbiAgICAgICAgYmVnaW46ICdcXFxcYltBLVpdW1xcXFx3XFwnXSonLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICB7IC8qIGRvbid0IGNvbG9yIGlkZW50aWZpZXJzLCBidXQgc2FmZWx5IGNhdGNoIGFsbCBpZGVudGlmaWVycyB3aXRoICcgKi9cbiAgICAgICAgYmVnaW46ICdbYS16X11cXFxcdypcXCdbXFxcXHdcXCddKidcbiAgICAgIH0sXG4gICAgICBobGpzLmluaGVyaXQoaGxqcy5BUE9TX1NUUklOR19NT0RFLCB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSksXG4gICAgICBobGpzLmluaGVyaXQoaGxqcy5RVU9URV9TVFJJTkdfTU9ERSwge1xuICAgICAgICBpbGxlZ2FsOiBudWxsXG4gICAgICB9KSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICAgICAgYmVnaW46XG4gICAgICAgICAgJ1xcXFxiKDBbeFhdW2EtZkEtRjAtOV9dK1tMbG5dP3wnICtcbiAgICAgICAgICAnMFtvT11bMC03X10rW0xsbl0/fCcgK1xuICAgICAgICAgICcwW2JCXVswMV9dK1tMbG5dP3wnICtcbiAgICAgICAgICAnWzAtOV1bMC05X10qKFtMbG5dfChcXFxcLlswLTlfXSopPyhbZUVdWy0rXT9bMC05X10rKT8pPyknLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAvWy09XT4vIC8vIHJlbGV2YW5jZSBib29zdGVyXG4gICAgICB9XG4gICAgXVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNtbDtcbiJdLCJzb3VyY2VSb290IjoiIn0=