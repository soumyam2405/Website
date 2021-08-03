(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[160],{

/***/ "./node_modules/highlight.js/lib/languages/smali.js":
/*!**********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/smali.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Smali
Author: Dennis Titze <dennis.titze@gmail.com>
Description: Basic Smali highlighting
Website: https://github.com/JesusFreke/smali
*/

function smali(hljs) {
  const smali_instr_low_prio = [
    'add',
    'and',
    'cmp',
    'cmpg',
    'cmpl',
    'const',
    'div',
    'double',
    'float',
    'goto',
    'if',
    'int',
    'long',
    'move',
    'mul',
    'neg',
    'new',
    'nop',
    'not',
    'or',
    'rem',
    'return',
    'shl',
    'shr',
    'sput',
    'sub',
    'throw',
    'ushr',
    'xor'
  ];
  const smali_instr_high_prio = [
    'aget',
    'aput',
    'array',
    'check',
    'execute',
    'fill',
    'filled',
    'goto/16',
    'goto/32',
    'iget',
    'instance',
    'invoke',
    'iput',
    'monitor',
    'packed',
    'sget',
    'sparse'
  ];
  const smali_keywords = [
    'transient',
    'constructor',
    'abstract',
    'final',
    'synthetic',
    'public',
    'private',
    'protected',
    'static',
    'bridge',
    'system'
  ];
  return {
    name: 'Smali',
    aliases: [ 'smali' ],
    contains: [
      {
        className: 'string',
        begin: '"',
        end: '"',
        relevance: 0
      },
      hljs.COMMENT(
        '#',
        '$',
        {
          relevance: 0
        }
      ),
      {
        className: 'keyword',
        variants: [
          {
            begin: '\\s*\\.end\\s[a-zA-Z0-9]*'
          },
          {
            begin: '^[ ]*\\.[a-zA-Z]*',
            relevance: 0
          },
          {
            begin: '\\s:[a-zA-Z_0-9]*',
            relevance: 0
          },
          {
            begin: '\\s(' + smali_keywords.join('|') + ')'
          }
        ]
      },
      {
        className: 'built_in',
        variants: [
          {
            begin: '\\s(' + smali_instr_low_prio.join('|') + ')\\s'
          },
          {
            begin: '\\s(' + smali_instr_low_prio.join('|') + ')((-|/)[a-zA-Z0-9]+)+\\s',
            relevance: 10
          },
          {
            begin: '\\s(' + smali_instr_high_prio.join('|') + ')((-|/)[a-zA-Z0-9]+)*\\s',
            relevance: 10
          }
        ]
      },
      {
        className: 'class',
        begin: 'L[^\(;:\n]*;',
        relevance: 0
      },
      {
        begin: '[vp][0-9]+'
      }
    ]
  };
}

module.exports = smali;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3NtYWxpLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxzQkFBc0IsTUFBTTtBQUM1QjtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoic3RhdGljL2NodW5rcy8xNjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuTGFuZ3VhZ2U6IFNtYWxpXG5BdXRob3I6IERlbm5pcyBUaXR6ZSA8ZGVubmlzLnRpdHplQGdtYWlsLmNvbT5cbkRlc2NyaXB0aW9uOiBCYXNpYyBTbWFsaSBoaWdobGlnaHRpbmdcbldlYnNpdGU6IGh0dHBzOi8vZ2l0aHViLmNvbS9KZXN1c0ZyZWtlL3NtYWxpXG4qL1xuXG5mdW5jdGlvbiBzbWFsaShobGpzKSB7XG4gIGNvbnN0IHNtYWxpX2luc3RyX2xvd19wcmlvID0gW1xuICAgICdhZGQnLFxuICAgICdhbmQnLFxuICAgICdjbXAnLFxuICAgICdjbXBnJyxcbiAgICAnY21wbCcsXG4gICAgJ2NvbnN0JyxcbiAgICAnZGl2JyxcbiAgICAnZG91YmxlJyxcbiAgICAnZmxvYXQnLFxuICAgICdnb3RvJyxcbiAgICAnaWYnLFxuICAgICdpbnQnLFxuICAgICdsb25nJyxcbiAgICAnbW92ZScsXG4gICAgJ211bCcsXG4gICAgJ25lZycsXG4gICAgJ25ldycsXG4gICAgJ25vcCcsXG4gICAgJ25vdCcsXG4gICAgJ29yJyxcbiAgICAncmVtJyxcbiAgICAncmV0dXJuJyxcbiAgICAnc2hsJyxcbiAgICAnc2hyJyxcbiAgICAnc3B1dCcsXG4gICAgJ3N1YicsXG4gICAgJ3Rocm93JyxcbiAgICAndXNocicsXG4gICAgJ3hvcidcbiAgXTtcbiAgY29uc3Qgc21hbGlfaW5zdHJfaGlnaF9wcmlvID0gW1xuICAgICdhZ2V0JyxcbiAgICAnYXB1dCcsXG4gICAgJ2FycmF5JyxcbiAgICAnY2hlY2snLFxuICAgICdleGVjdXRlJyxcbiAgICAnZmlsbCcsXG4gICAgJ2ZpbGxlZCcsXG4gICAgJ2dvdG8vMTYnLFxuICAgICdnb3RvLzMyJyxcbiAgICAnaWdldCcsXG4gICAgJ2luc3RhbmNlJyxcbiAgICAnaW52b2tlJyxcbiAgICAnaXB1dCcsXG4gICAgJ21vbml0b3InLFxuICAgICdwYWNrZWQnLFxuICAgICdzZ2V0JyxcbiAgICAnc3BhcnNlJ1xuICBdO1xuICBjb25zdCBzbWFsaV9rZXl3b3JkcyA9IFtcbiAgICAndHJhbnNpZW50JyxcbiAgICAnY29uc3RydWN0b3InLFxuICAgICdhYnN0cmFjdCcsXG4gICAgJ2ZpbmFsJyxcbiAgICAnc3ludGhldGljJyxcbiAgICAncHVibGljJyxcbiAgICAncHJpdmF0ZScsXG4gICAgJ3Byb3RlY3RlZCcsXG4gICAgJ3N0YXRpYycsXG4gICAgJ2JyaWRnZScsXG4gICAgJ3N5c3RlbSdcbiAgXTtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnU21hbGknLFxuICAgIGFsaWFzZXM6IFsgJ3NtYWxpJyBdLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgICAgIGJlZ2luOiAnXCInLFxuICAgICAgICBlbmQ6ICdcIicsXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIGhsanMuQ09NTUVOVChcbiAgICAgICAgJyMnLFxuICAgICAgICAnJCcsXG4gICAgICAgIHtcbiAgICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgICAgfVxuICAgICAgKSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAna2V5d29yZCcsXG4gICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW46ICdcXFxccypcXFxcLmVuZFxcXFxzW2EtekEtWjAtOV0qJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW46ICdeWyBdKlxcXFwuW2EtekEtWl0qJyxcbiAgICAgICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW46ICdcXFxcczpbYS16QS1aXzAtOV0qJyxcbiAgICAgICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW46ICdcXFxccygnICsgc21hbGlfa2V5d29yZHMuam9pbignfCcpICsgJyknXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdidWlsdF9pbicsXG4gICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW46ICdcXFxccygnICsgc21hbGlfaW5zdHJfbG93X3ByaW8uam9pbignfCcpICsgJylcXFxccydcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luOiAnXFxcXHMoJyArIHNtYWxpX2luc3RyX2xvd19wcmlvLmpvaW4oJ3wnKSArICcpKCgtfC8pW2EtekEtWjAtOV0rKStcXFxccycsXG4gICAgICAgICAgICByZWxldmFuY2U6IDEwXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogJ1xcXFxzKCcgKyBzbWFsaV9pbnN0cl9oaWdoX3ByaW8uam9pbignfCcpICsgJykoKC18LylbYS16QS1aMC05XSspKlxcXFxzJyxcbiAgICAgICAgICAgIHJlbGV2YW5jZTogMTBcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2NsYXNzJyxcbiAgICAgICAgYmVnaW46ICdMW15cXCg7Olxcbl0qOycsXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICdbdnBdWzAtOV0rJ1xuICAgICAgfVxuICAgIF1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzbWFsaTtcbiJdLCJzb3VyY2VSb290IjoiIn0=