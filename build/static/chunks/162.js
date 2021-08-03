(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[162],{

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

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3NtbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvMTYyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBTTUwgKFN0YW5kYXJkIE1MKVxuQXV0aG9yOiBFZHdpbiBEYWxvcnpvIDxlZHdpbkBkYWxvcnpvLm9yZz5cbkRlc2NyaXB0aW9uOiBTTUwgbGFuZ3VhZ2UgZGVmaW5pdGlvbi5cbldlYnNpdGU6IGh0dHBzOi8vd3d3LnNtbG5qLm9yZ1xuT3JpZ2luOiBvY2FtbC5qc1xuQ2F0ZWdvcnk6IGZ1bmN0aW9uYWxcbiovXG5mdW5jdGlvbiBzbWwoaGxqcykge1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICdTTUwgKFN0YW5kYXJkIE1MKScsXG4gICAgYWxpYXNlczogWyAnbWwnIF0sXG4gICAga2V5d29yZHM6IHtcbiAgICAgICRwYXR0ZXJuOiAnW2Etel9dXFxcXHcqIT8nLFxuICAgICAga2V5d29yZDpcbiAgICAgICAgLyogYWNjb3JkaW5nIHRvIERlZmluaXRpb24gb2YgU3RhbmRhcmQgTUwgOTcgICovXG4gICAgICAgICdhYnN0eXBlIGFuZCBhbmRhbHNvIGFzIGNhc2UgZGF0YXR5cGUgZG8gZWxzZSBlbmQgZXF0eXBlICcgK1xuICAgICAgICAnZXhjZXB0aW9uIGZuIGZ1biBmdW5jdG9yIGhhbmRsZSBpZiBpbiBpbmNsdWRlIGluZml4IGluZml4ciAnICtcbiAgICAgICAgJ2xldCBsb2NhbCBub25maXggb2Ygb3Agb3BlbiBvcmVsc2UgcmFpc2UgcmVjIHNoYXJpbmcgc2lnICcgK1xuICAgICAgICAnc2lnbmF0dXJlIHN0cnVjdCBzdHJ1Y3R1cmUgdGhlbiB0eXBlIHZhbCB3aXRoIHdpdGh0eXBlIHdoZXJlIHdoaWxlJyxcbiAgICAgIGJ1aWx0X2luOlxuICAgICAgICAvKiBidWlsdC1pbiB0eXBlcyBhY2NvcmRpbmcgdG8gYmFzaXMgbGlicmFyeSAqL1xuICAgICAgICAnYXJyYXkgYm9vbCBjaGFyIGV4biBpbnQgbGlzdCBvcHRpb24gb3JkZXIgcmVhbCByZWYgc3RyaW5nIHN1YnN0cmluZyB2ZWN0b3IgdW5pdCB3b3JkJyxcbiAgICAgIGxpdGVyYWw6XG4gICAgICAgICd0cnVlIGZhbHNlIE5PTkUgU09NRSBMRVNTIEVRVUFMIEdSRUFURVIgbmlsJ1xuICAgIH0sXG4gICAgaWxsZWdhbDogL1xcL1xcL3w+Pi8sXG4gICAgY29udGFpbnM6IFtcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbGl0ZXJhbCcsXG4gICAgICAgIGJlZ2luOiAvXFxbKFxcfFxcfCk/XFxdfFxcKFxcKS8sXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIGhsanMuQ09NTUVOVChcbiAgICAgICAgJ1xcXFwoXFxcXConLFxuICAgICAgICAnXFxcXCpcXFxcKScsXG4gICAgICAgIHtcbiAgICAgICAgICBjb250YWluczogWyAnc2VsZicgXVxuICAgICAgICB9XG4gICAgICApLFxuICAgICAgeyAvKiB0eXBlIHZhcmlhYmxlICovXG4gICAgICAgIGNsYXNzTmFtZTogJ3N5bWJvbCcsXG4gICAgICAgIGJlZ2luOiAnXFwnW0EtWmEtel9dKD8hXFwnKVtcXFxcd1xcJ10qJ1xuICAgICAgICAvKiB0aGUgZ3JhbW1hciBpcyBhbWJpZ3VvdXMgb24gaG93ICdhJ2Igc2hvdWxkIGJlIGludGVycHJldGVkIGJ1dCBub3QgdGhlIGNvbXBpbGVyICovXG4gICAgICB9LFxuICAgICAgeyAvKiBwb2x5bW9ycGhpYyB2YXJpYW50ICovXG4gICAgICAgIGNsYXNzTmFtZTogJ3R5cGUnLFxuICAgICAgICBiZWdpbjogJ2BbQS1aXVtcXFxcd1xcJ10qJ1xuICAgICAgfSxcbiAgICAgIHsgLyogbW9kdWxlIG9yIGNvbnN0cnVjdG9yICovXG4gICAgICAgIGNsYXNzTmFtZTogJ3R5cGUnLFxuICAgICAgICBiZWdpbjogJ1xcXFxiW0EtWl1bXFxcXHdcXCddKicsXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIHsgLyogZG9uJ3QgY29sb3IgaWRlbnRpZmllcnMsIGJ1dCBzYWZlbHkgY2F0Y2ggYWxsIGlkZW50aWZpZXJzIHdpdGggJyAqL1xuICAgICAgICBiZWdpbjogJ1thLXpfXVxcXFx3KlxcJ1tcXFxcd1xcJ10qJ1xuICAgICAgfSxcbiAgICAgIGhsanMuaW5oZXJpdChobGpzLkFQT1NfU1RSSU5HX01PREUsIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9KSxcbiAgICAgIGhsanMuaW5oZXJpdChobGpzLlFVT1RFX1NUUklOR19NT0RFLCB7XG4gICAgICAgIGlsbGVnYWw6IG51bGxcbiAgICAgIH0pLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdudW1iZXInLFxuICAgICAgICBiZWdpbjpcbiAgICAgICAgICAnXFxcXGIoMFt4WF1bYS1mQS1GMC05X10rW0xsbl0/fCcgK1xuICAgICAgICAgICcwW29PXVswLTdfXStbTGxuXT98JyArXG4gICAgICAgICAgJzBbYkJdWzAxX10rW0xsbl0/fCcgK1xuICAgICAgICAgICdbMC05XVswLTlfXSooW0xsbl18KFxcXFwuWzAtOV9dKik/KFtlRV1bLStdP1swLTlfXSspPyk/KScsXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IC9bLT1dPi8gLy8gcmVsZXZhbmNlIGJvb3N0ZXJcbiAgICAgIH1cbiAgICBdXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc21sO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==