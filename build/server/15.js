exports.ids = [15];
exports.modules = {

/***/ "./node_modules/highlight.js/lib/languages/avrasm.js":
/*!***********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/avrasm.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: AVR Assembly
Author: Vladimir Ermakov <vooon341@gmail.com>
Category: assembler
Website: https://www.microchip.com/webdoc/avrassembler/avrassembler.wb_instruction_list.html
*/

/** @type LanguageFn */
function avrasm(hljs) {
  return {
    name: 'AVR Assembly',
    case_insensitive: true,
    keywords: {
      $pattern: '\\.?' + hljs.IDENT_RE,
      keyword:
        /* mnemonic */
        'adc add adiw and andi asr bclr bld brbc brbs brcc brcs break breq brge brhc brhs ' +
        'brid brie brlo brlt brmi brne brpl brsh brtc brts brvc brvs bset bst call cbi cbr ' +
        'clc clh cli cln clr cls clt clv clz com cp cpc cpi cpse dec eicall eijmp elpm eor ' +
        'fmul fmuls fmulsu icall ijmp in inc jmp ld ldd ldi lds lpm lsl lsr mov movw mul ' +
        'muls mulsu neg nop or ori out pop push rcall ret reti rjmp rol ror sbc sbr sbrc sbrs ' +
        'sec seh sbi sbci sbic sbis sbiw sei sen ser ses set sev sez sleep spm st std sts sub ' +
        'subi swap tst wdr',
      built_in:
        /* general purpose registers */
        'r0 r1 r2 r3 r4 r5 r6 r7 r8 r9 r10 r11 r12 r13 r14 r15 r16 r17 r18 r19 r20 r21 r22 ' +
        'r23 r24 r25 r26 r27 r28 r29 r30 r31 x|0 xh xl y|0 yh yl z|0 zh zl ' +
        /* IO Registers (ATMega128) */
        'ucsr1c udr1 ucsr1a ucsr1b ubrr1l ubrr1h ucsr0c ubrr0h tccr3c tccr3a tccr3b tcnt3h ' +
        'tcnt3l ocr3ah ocr3al ocr3bh ocr3bl ocr3ch ocr3cl icr3h icr3l etimsk etifr tccr1c ' +
        'ocr1ch ocr1cl twcr twdr twar twsr twbr osccal xmcra xmcrb eicra spmcsr spmcr portg ' +
        'ddrg ping portf ddrf sreg sph spl xdiv rampz eicrb eimsk gimsk gicr eifr gifr timsk ' +
        'tifr mcucr mcucsr tccr0 tcnt0 ocr0 assr tccr1a tccr1b tcnt1h tcnt1l ocr1ah ocr1al ' +
        'ocr1bh ocr1bl icr1h icr1l tccr2 tcnt2 ocr2 ocdr wdtcr sfior eearh eearl eedr eecr ' +
        'porta ddra pina portb ddrb pinb portc ddrc pinc portd ddrd pind spdr spsr spcr udr0 ' +
        'ucsr0a ucsr0b ubrr0l acsr admux adcsr adch adcl porte ddre pine pinf',
      meta:
        '.byte .cseg .db .def .device .dseg .dw .endmacro .equ .eseg .exit .include .list ' +
        '.listmac .macro .nolist .org .set'
    },
    contains: [
      hljs.C_BLOCK_COMMENT_MODE,
      hljs.COMMENT(
        ';',
        '$',
        {
          relevance: 0
        }
      ),
      hljs.C_NUMBER_MODE, // 0x..., decimal, float
      hljs.BINARY_NUMBER_MODE, // 0b...
      {
        className: 'number',
        begin: '\\b(\\$[a-zA-Z0-9]+|0o[0-7]+)' // $..., 0o...
      },
      hljs.QUOTE_STRING_MODE,
      {
        className: 'string',
        begin: '\'',
        end: '[^\\\\]\'',
        illegal: '[^\\\\][^\']'
      },
      {
        className: 'symbol',
        begin: '^[A-Za-z0-9_.$]+:'
      },
      {
        className: 'meta',
        begin: '#',
        end: '$'
      },
      { // substitution within a macro
        className: 'subst',
        begin: '@[0-9]+'
      }
    ]
  };
}

module.exports = avrasm;


/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvYXZyYXNtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6IjE1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBBVlIgQXNzZW1ibHlcbkF1dGhvcjogVmxhZGltaXIgRXJtYWtvdiA8dm9vb24zNDFAZ21haWwuY29tPlxuQ2F0ZWdvcnk6IGFzc2VtYmxlclxuV2Vic2l0ZTogaHR0cHM6Ly93d3cubWljcm9jaGlwLmNvbS93ZWJkb2MvYXZyYXNzZW1ibGVyL2F2cmFzc2VtYmxlci53Yl9pbnN0cnVjdGlvbl9saXN0Lmh0bWxcbiovXG5cbi8qKiBAdHlwZSBMYW5ndWFnZUZuICovXG5mdW5jdGlvbiBhdnJhc20oaGxqcykge1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICdBVlIgQXNzZW1ibHknLFxuICAgIGNhc2VfaW5zZW5zaXRpdmU6IHRydWUsXG4gICAga2V5d29yZHM6IHtcbiAgICAgICRwYXR0ZXJuOiAnXFxcXC4/JyArIGhsanMuSURFTlRfUkUsXG4gICAgICBrZXl3b3JkOlxuICAgICAgICAvKiBtbmVtb25pYyAqL1xuICAgICAgICAnYWRjIGFkZCBhZGl3IGFuZCBhbmRpIGFzciBiY2xyIGJsZCBicmJjIGJyYnMgYnJjYyBicmNzIGJyZWFrIGJyZXEgYnJnZSBicmhjIGJyaHMgJyArXG4gICAgICAgICdicmlkIGJyaWUgYnJsbyBicmx0IGJybWkgYnJuZSBicnBsIGJyc2ggYnJ0YyBicnRzIGJydmMgYnJ2cyBic2V0IGJzdCBjYWxsIGNiaSBjYnIgJyArXG4gICAgICAgICdjbGMgY2xoIGNsaSBjbG4gY2xyIGNscyBjbHQgY2x2IGNseiBjb20gY3AgY3BjIGNwaSBjcHNlIGRlYyBlaWNhbGwgZWlqbXAgZWxwbSBlb3IgJyArXG4gICAgICAgICdmbXVsIGZtdWxzIGZtdWxzdSBpY2FsbCBpam1wIGluIGluYyBqbXAgbGQgbGRkIGxkaSBsZHMgbHBtIGxzbCBsc3IgbW92IG1vdncgbXVsICcgK1xuICAgICAgICAnbXVscyBtdWxzdSBuZWcgbm9wIG9yIG9yaSBvdXQgcG9wIHB1c2ggcmNhbGwgcmV0IHJldGkgcmptcCByb2wgcm9yIHNiYyBzYnIgc2JyYyBzYnJzICcgK1xuICAgICAgICAnc2VjIHNlaCBzYmkgc2JjaSBzYmljIHNiaXMgc2JpdyBzZWkgc2VuIHNlciBzZXMgc2V0IHNldiBzZXogc2xlZXAgc3BtIHN0IHN0ZCBzdHMgc3ViICcgK1xuICAgICAgICAnc3ViaSBzd2FwIHRzdCB3ZHInLFxuICAgICAgYnVpbHRfaW46XG4gICAgICAgIC8qIGdlbmVyYWwgcHVycG9zZSByZWdpc3RlcnMgKi9cbiAgICAgICAgJ3IwIHIxIHIyIHIzIHI0IHI1IHI2IHI3IHI4IHI5IHIxMCByMTEgcjEyIHIxMyByMTQgcjE1IHIxNiByMTcgcjE4IHIxOSByMjAgcjIxIHIyMiAnICtcbiAgICAgICAgJ3IyMyByMjQgcjI1IHIyNiByMjcgcjI4IHIyOSByMzAgcjMxIHh8MCB4aCB4bCB5fDAgeWggeWwgenwwIHpoIHpsICcgK1xuICAgICAgICAvKiBJTyBSZWdpc3RlcnMgKEFUTWVnYTEyOCkgKi9cbiAgICAgICAgJ3Vjc3IxYyB1ZHIxIHVjc3IxYSB1Y3NyMWIgdWJycjFsIHVicnIxaCB1Y3NyMGMgdWJycjBoIHRjY3IzYyB0Y2NyM2EgdGNjcjNiIHRjbnQzaCAnICtcbiAgICAgICAgJ3RjbnQzbCBvY3IzYWggb2NyM2FsIG9jcjNiaCBvY3IzYmwgb2NyM2NoIG9jcjNjbCBpY3IzaCBpY3IzbCBldGltc2sgZXRpZnIgdGNjcjFjICcgK1xuICAgICAgICAnb2NyMWNoIG9jcjFjbCB0d2NyIHR3ZHIgdHdhciB0d3NyIHR3YnIgb3NjY2FsIHhtY3JhIHhtY3JiIGVpY3JhIHNwbWNzciBzcG1jciBwb3J0ZyAnICtcbiAgICAgICAgJ2RkcmcgcGluZyBwb3J0ZiBkZHJmIHNyZWcgc3BoIHNwbCB4ZGl2IHJhbXB6IGVpY3JiIGVpbXNrIGdpbXNrIGdpY3IgZWlmciBnaWZyIHRpbXNrICcgK1xuICAgICAgICAndGlmciBtY3VjciBtY3Vjc3IgdGNjcjAgdGNudDAgb2NyMCBhc3NyIHRjY3IxYSB0Y2NyMWIgdGNudDFoIHRjbnQxbCBvY3IxYWggb2NyMWFsICcgK1xuICAgICAgICAnb2NyMWJoIG9jcjFibCBpY3IxaCBpY3IxbCB0Y2NyMiB0Y250MiBvY3IyIG9jZHIgd2R0Y3Igc2Zpb3IgZWVhcmggZWVhcmwgZWVkciBlZWNyICcgK1xuICAgICAgICAncG9ydGEgZGRyYSBwaW5hIHBvcnRiIGRkcmIgcGluYiBwb3J0YyBkZHJjIHBpbmMgcG9ydGQgZGRyZCBwaW5kIHNwZHIgc3BzciBzcGNyIHVkcjAgJyArXG4gICAgICAgICd1Y3NyMGEgdWNzcjBiIHVicnIwbCBhY3NyIGFkbXV4IGFkY3NyIGFkY2ggYWRjbCBwb3J0ZSBkZHJlIHBpbmUgcGluZicsXG4gICAgICBtZXRhOlxuICAgICAgICAnLmJ5dGUgLmNzZWcgLmRiIC5kZWYgLmRldmljZSAuZHNlZyAuZHcgLmVuZG1hY3JvIC5lcXUgLmVzZWcgLmV4aXQgLmluY2x1ZGUgLmxpc3QgJyArXG4gICAgICAgICcubGlzdG1hYyAubWFjcm8gLm5vbGlzdCAub3JnIC5zZXQnXG4gICAgfSxcbiAgICBjb250YWluczogW1xuICAgICAgaGxqcy5DX0JMT0NLX0NPTU1FTlRfTU9ERSxcbiAgICAgIGhsanMuQ09NTUVOVChcbiAgICAgICAgJzsnLFxuICAgICAgICAnJCcsXG4gICAgICAgIHtcbiAgICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgICAgfVxuICAgICAgKSxcbiAgICAgIGhsanMuQ19OVU1CRVJfTU9ERSwgLy8gMHguLi4sIGRlY2ltYWwsIGZsb2F0XG4gICAgICBobGpzLkJJTkFSWV9OVU1CRVJfTU9ERSwgLy8gMGIuLi5cbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICAgICAgYmVnaW46ICdcXFxcYihcXFxcJFthLXpBLVowLTldK3wwb1swLTddKyknIC8vICQuLi4sIDBvLi4uXG4gICAgICB9LFxuICAgICAgaGxqcy5RVU9URV9TVFJJTkdfTU9ERSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICAgICAgYmVnaW46ICdcXCcnLFxuICAgICAgICBlbmQ6ICdbXlxcXFxcXFxcXVxcJycsXG4gICAgICAgIGlsbGVnYWw6ICdbXlxcXFxcXFxcXVteXFwnXSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3N5bWJvbCcsXG4gICAgICAgIGJlZ2luOiAnXltBLVphLXowLTlfLiRdKzonXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICAgICAgYmVnaW46ICcjJyxcbiAgICAgICAgZW5kOiAnJCdcbiAgICAgIH0sXG4gICAgICB7IC8vIHN1YnN0aXR1dGlvbiB3aXRoaW4gYSBtYWNyb1xuICAgICAgICBjbGFzc05hbWU6ICdzdWJzdCcsXG4gICAgICAgIGJlZ2luOiAnQFswLTldKydcbiAgICAgIH1cbiAgICBdXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXZyYXNtO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==