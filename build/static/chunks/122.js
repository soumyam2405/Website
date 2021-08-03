(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[122],{

/***/ "./node_modules/highlight.js/lib/languages/ocaml.js":
/*!**********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/ocaml.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: OCaml
Author: Mehdi Dogguy <mehdi@dogguy.org>
Contributors: Nicolas Braud-Santoni <nicolas.braud-santoni@ens-cachan.fr>, Mickael Delahaye <mickael.delahaye@gmail.com>
Description: OCaml language definition.
Website: https://ocaml.org
Category: functional
*/

function ocaml(hljs) {
  /* missing support for heredoc-like string (OCaml 4.0.2+) */
  return {
    name: 'OCaml',
    aliases: ['ml'],
    keywords: {
      $pattern: '[a-z_]\\w*!?',
      keyword:
        'and as assert asr begin class constraint do done downto else end ' +
        'exception external for fun function functor if in include ' +
        'inherit! inherit initializer land lazy let lor lsl lsr lxor match method!|10 method ' +
        'mod module mutable new object of open! open or private rec sig struct ' +
        'then to try type val! val virtual when while with ' +
        /* camlp4 */
        'parser value',
      built_in:
        /* built-in types */
        'array bool bytes char exn|5 float int int32 int64 list lazy_t|5 nativeint|5 string unit ' +
        /* (some) types in Pervasives */
        'in_channel out_channel ref',
      literal:
        'true false'
    },
    illegal: /\/\/|>>/,
    contains: [
      {
        className: 'literal',
        begin: '\\[(\\|\\|)?\\]|\\(\\)',
        relevance: 0
      },
      hljs.COMMENT(
        '\\(\\*',
        '\\*\\)',
        {
          contains: ['self']
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
      { /* don't color identifiers, but safely catch all identifiers with '*/
        begin: '[a-z_]\\w*\'[\\w\']*', relevance: 0
      },
      hljs.inherit(hljs.APOS_STRING_MODE, {className: 'string', relevance: 0}),
      hljs.inherit(hljs.QUOTE_STRING_MODE, {illegal: null}),
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
        begin: /->/ // relevance booster
      }
    ]
  }
}

module.exports = ocaml;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL29jYW1sLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUCwyQ0FBMkMsa0NBQWtDO0FBQzdFLDRDQUE0QyxjQUFjO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvMTIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBPQ2FtbFxuQXV0aG9yOiBNZWhkaSBEb2dndXkgPG1laGRpQGRvZ2d1eS5vcmc+XG5Db250cmlidXRvcnM6IE5pY29sYXMgQnJhdWQtU2FudG9uaSA8bmljb2xhcy5icmF1ZC1zYW50b25pQGVucy1jYWNoYW4uZnI+LCBNaWNrYWVsIERlbGFoYXllIDxtaWNrYWVsLmRlbGFoYXllQGdtYWlsLmNvbT5cbkRlc2NyaXB0aW9uOiBPQ2FtbCBsYW5ndWFnZSBkZWZpbml0aW9uLlxuV2Vic2l0ZTogaHR0cHM6Ly9vY2FtbC5vcmdcbkNhdGVnb3J5OiBmdW5jdGlvbmFsXG4qL1xuXG5mdW5jdGlvbiBvY2FtbChobGpzKSB7XG4gIC8qIG1pc3Npbmcgc3VwcG9ydCBmb3IgaGVyZWRvYy1saWtlIHN0cmluZyAoT0NhbWwgNC4wLjIrKSAqL1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICdPQ2FtbCcsXG4gICAgYWxpYXNlczogWydtbCddLFxuICAgIGtleXdvcmRzOiB7XG4gICAgICAkcGF0dGVybjogJ1thLXpfXVxcXFx3KiE/JyxcbiAgICAgIGtleXdvcmQ6XG4gICAgICAgICdhbmQgYXMgYXNzZXJ0IGFzciBiZWdpbiBjbGFzcyBjb25zdHJhaW50IGRvIGRvbmUgZG93bnRvIGVsc2UgZW5kICcgK1xuICAgICAgICAnZXhjZXB0aW9uIGV4dGVybmFsIGZvciBmdW4gZnVuY3Rpb24gZnVuY3RvciBpZiBpbiBpbmNsdWRlICcgK1xuICAgICAgICAnaW5oZXJpdCEgaW5oZXJpdCBpbml0aWFsaXplciBsYW5kIGxhenkgbGV0IGxvciBsc2wgbHNyIGx4b3IgbWF0Y2ggbWV0aG9kIXwxMCBtZXRob2QgJyArXG4gICAgICAgICdtb2QgbW9kdWxlIG11dGFibGUgbmV3IG9iamVjdCBvZiBvcGVuISBvcGVuIG9yIHByaXZhdGUgcmVjIHNpZyBzdHJ1Y3QgJyArXG4gICAgICAgICd0aGVuIHRvIHRyeSB0eXBlIHZhbCEgdmFsIHZpcnR1YWwgd2hlbiB3aGlsZSB3aXRoICcgK1xuICAgICAgICAvKiBjYW1scDQgKi9cbiAgICAgICAgJ3BhcnNlciB2YWx1ZScsXG4gICAgICBidWlsdF9pbjpcbiAgICAgICAgLyogYnVpbHQtaW4gdHlwZXMgKi9cbiAgICAgICAgJ2FycmF5IGJvb2wgYnl0ZXMgY2hhciBleG58NSBmbG9hdCBpbnQgaW50MzIgaW50NjQgbGlzdCBsYXp5X3R8NSBuYXRpdmVpbnR8NSBzdHJpbmcgdW5pdCAnICtcbiAgICAgICAgLyogKHNvbWUpIHR5cGVzIGluIFBlcnZhc2l2ZXMgKi9cbiAgICAgICAgJ2luX2NoYW5uZWwgb3V0X2NoYW5uZWwgcmVmJyxcbiAgICAgIGxpdGVyYWw6XG4gICAgICAgICd0cnVlIGZhbHNlJ1xuICAgIH0sXG4gICAgaWxsZWdhbDogL1xcL1xcL3w+Pi8sXG4gICAgY29udGFpbnM6IFtcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbGl0ZXJhbCcsXG4gICAgICAgIGJlZ2luOiAnXFxcXFsoXFxcXHxcXFxcfCk/XFxcXF18XFxcXChcXFxcKScsXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIGhsanMuQ09NTUVOVChcbiAgICAgICAgJ1xcXFwoXFxcXConLFxuICAgICAgICAnXFxcXCpcXFxcKScsXG4gICAgICAgIHtcbiAgICAgICAgICBjb250YWluczogWydzZWxmJ11cbiAgICAgICAgfVxuICAgICAgKSxcbiAgICAgIHsgLyogdHlwZSB2YXJpYWJsZSAqL1xuICAgICAgICBjbGFzc05hbWU6ICdzeW1ib2wnLFxuICAgICAgICBiZWdpbjogJ1xcJ1tBLVphLXpfXSg/IVxcJylbXFxcXHdcXCddKidcbiAgICAgICAgLyogdGhlIGdyYW1tYXIgaXMgYW1iaWd1b3VzIG9uIGhvdyAnYSdiIHNob3VsZCBiZSBpbnRlcnByZXRlZCBidXQgbm90IHRoZSBjb21waWxlciAqL1xuICAgICAgfSxcbiAgICAgIHsgLyogcG9seW1vcnBoaWMgdmFyaWFudCAqL1xuICAgICAgICBjbGFzc05hbWU6ICd0eXBlJyxcbiAgICAgICAgYmVnaW46ICdgW0EtWl1bXFxcXHdcXCddKidcbiAgICAgIH0sXG4gICAgICB7IC8qIG1vZHVsZSBvciBjb25zdHJ1Y3RvciAqL1xuICAgICAgICBjbGFzc05hbWU6ICd0eXBlJyxcbiAgICAgICAgYmVnaW46ICdcXFxcYltBLVpdW1xcXFx3XFwnXSonLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICB7IC8qIGRvbid0IGNvbG9yIGlkZW50aWZpZXJzLCBidXQgc2FmZWx5IGNhdGNoIGFsbCBpZGVudGlmaWVycyB3aXRoICcqL1xuICAgICAgICBiZWdpbjogJ1thLXpfXVxcXFx3KlxcJ1tcXFxcd1xcJ10qJywgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuICAgICAgaGxqcy5pbmhlcml0KGhsanMuQVBPU19TVFJJTkdfTU9ERSwge2NsYXNzTmFtZTogJ3N0cmluZycsIHJlbGV2YW5jZTogMH0pLFxuICAgICAgaGxqcy5pbmhlcml0KGhsanMuUVVPVEVfU1RSSU5HX01PREUsIHtpbGxlZ2FsOiBudWxsfSksXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgICAgIGJlZ2luOlxuICAgICAgICAgICdcXFxcYigwW3hYXVthLWZBLUYwLTlfXStbTGxuXT98JyArXG4gICAgICAgICAgJzBbb09dWzAtN19dK1tMbG5dP3wnICtcbiAgICAgICAgICAnMFtiQl1bMDFfXStbTGxuXT98JyArXG4gICAgICAgICAgJ1swLTldWzAtOV9dKihbTGxuXXwoXFxcXC5bMC05X10qKT8oW2VFXVstK10/WzAtOV9dKyk/KT8pJyxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogLy0+LyAvLyByZWxldmFuY2UgYm9vc3RlclxuICAgICAgfVxuICAgIF1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG9jYW1sO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==