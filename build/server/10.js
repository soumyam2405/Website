exports.ids = [10];
exports.modules = {

/***/ "./node_modules/highlight.js/lib/languages/armasm.js":
/*!***********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/armasm.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: ARM Assembly
Author: Dan Panzarella <alsoelp@gmail.com>
Description: ARM Assembly including Thumb and Thumb2 instructions
Category: assembler
*/

/** @type LanguageFn */
function armasm(hljs) {
  // local labels: %?[FB]?[AT]?\d{1,2}\w+

  const COMMENT = {
    variants: [
      hljs.COMMENT('^[ \\t]*(?=#)', '$', {
        relevance: 0,
        excludeBegin: true
      }),
      hljs.COMMENT('[;@]', '$', {
        relevance: 0
      }),
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE
    ]
  };

  return {
    name: 'ARM Assembly',
    case_insensitive: true,
    aliases: ['arm'],
    keywords: {
      $pattern: '\\.?' + hljs.IDENT_RE,
      meta:
        // GNU preprocs
        '.2byte .4byte .align .ascii .asciz .balign .byte .code .data .else .end .endif .endm .endr .equ .err .exitm .extern .global .hword .if .ifdef .ifndef .include .irp .long .macro .rept .req .section .set .skip .space .text .word .arm .thumb .code16 .code32 .force_thumb .thumb_func .ltorg ' +
        // ARM directives
        'ALIAS ALIGN ARM AREA ASSERT ATTR CN CODE CODE16 CODE32 COMMON CP DATA DCB DCD DCDU DCDO DCFD DCFDU DCI DCQ DCQU DCW DCWU DN ELIF ELSE END ENDFUNC ENDIF ENDP ENTRY EQU EXPORT EXPORTAS EXTERN FIELD FILL FUNCTION GBLA GBLL GBLS GET GLOBAL IF IMPORT INCBIN INCLUDE INFO KEEP LCLA LCLL LCLS LTORG MACRO MAP MEND MEXIT NOFP OPT PRESERVE8 PROC QN READONLY RELOC REQUIRE REQUIRE8 RLIST FN ROUT SETA SETL SETS SN SPACE SUBT THUMB THUMBX TTL WHILE WEND ',
      built_in:
        'r0 r1 r2 r3 r4 r5 r6 r7 r8 r9 r10 r11 r12 r13 r14 r15 ' + // standard registers
        'pc lr sp ip sl sb fp ' + // typical regs plus backward compatibility
        'a1 a2 a3 a4 v1 v2 v3 v4 v5 v6 v7 v8 f0 f1 f2 f3 f4 f5 f6 f7 ' + // more regs and fp
        'p0 p1 p2 p3 p4 p5 p6 p7 p8 p9 p10 p11 p12 p13 p14 p15 ' + // coprocessor regs
        'c0 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14 c15 ' + // more coproc
        'q0 q1 q2 q3 q4 q5 q6 q7 q8 q9 q10 q11 q12 q13 q14 q15 ' + // advanced SIMD NEON regs

        // program status registers
        'cpsr_c cpsr_x cpsr_s cpsr_f cpsr_cx cpsr_cxs cpsr_xs cpsr_xsf cpsr_sf cpsr_cxsf ' +
        'spsr_c spsr_x spsr_s spsr_f spsr_cx spsr_cxs spsr_xs spsr_xsf spsr_sf spsr_cxsf ' +

        // NEON and VFP registers
        's0 s1 s2 s3 s4 s5 s6 s7 s8 s9 s10 s11 s12 s13 s14 s15 ' +
        's16 s17 s18 s19 s20 s21 s22 s23 s24 s25 s26 s27 s28 s29 s30 s31 ' +
        'd0 d1 d2 d3 d4 d5 d6 d7 d8 d9 d10 d11 d12 d13 d14 d15 ' +
        'd16 d17 d18 d19 d20 d21 d22 d23 d24 d25 d26 d27 d28 d29 d30 d31 ' +

        '{PC} {VAR} {TRUE} {FALSE} {OPT} {CONFIG} {ENDIAN} {CODESIZE} {CPU} {FPU} {ARCHITECTURE} {PCSTOREOFFSET} {ARMASM_VERSION} {INTER} {ROPI} {RWPI} {SWST} {NOSWST} . @'
    },
    contains: [
      {
        className: 'keyword',
        begin: '\\b(' + // mnemonics
            'adc|' +
            '(qd?|sh?|u[qh]?)?add(8|16)?|usada?8|(q|sh?|u[qh]?)?(as|sa)x|' +
            'and|adrl?|sbc|rs[bc]|asr|b[lx]?|blx|bxj|cbn?z|tb[bh]|bic|' +
            'bfc|bfi|[su]bfx|bkpt|cdp2?|clz|clrex|cmp|cmn|cpsi[ed]|cps|' +
            'setend|dbg|dmb|dsb|eor|isb|it[te]{0,3}|lsl|lsr|ror|rrx|' +
            'ldm(([id][ab])|f[ds])?|ldr((s|ex)?[bhd])?|movt?|mvn|mra|mar|' +
            'mul|[us]mull|smul[bwt][bt]|smu[as]d|smmul|smmla|' +
            'mla|umlaal|smlal?([wbt][bt]|d)|mls|smlsl?[ds]|smc|svc|sev|' +
            'mia([bt]{2}|ph)?|mrr?c2?|mcrr2?|mrs|msr|orr|orn|pkh(tb|bt)|rbit|' +
            'rev(16|sh)?|sel|[su]sat(16)?|nop|pop|push|rfe([id][ab])?|' +
            'stm([id][ab])?|str(ex)?[bhd]?|(qd?)?sub|(sh?|q|u[qh]?)?sub(8|16)|' +
            '[su]xt(a?h|a?b(16)?)|srs([id][ab])?|swpb?|swi|smi|tst|teq|' +
            'wfe|wfi|yield' +
        ')' +
        '(eq|ne|cs|cc|mi|pl|vs|vc|hi|ls|ge|lt|gt|le|al|hs|lo)?' + // condition codes
        '[sptrx]?' + // legal postfixes
        '(?=\\s)' // followed by space
      },
      COMMENT,
      hljs.QUOTE_STRING_MODE,
      {
        className: 'string',
        begin: '\'',
        end: '[^\\\\]\'',
        relevance: 0
      },
      {
        className: 'title',
        begin: '\\|',
        end: '\\|',
        illegal: '\\n',
        relevance: 0
      },
      {
        className: 'number',
        variants: [
          { // hex
            begin: '[#$=]?0x[0-9a-f]+'
          },
          { // bin
            begin: '[#$=]?0b[01]+'
          },
          { // literal
            begin: '[#$=]\\d+'
          },
          { // bare number
            begin: '\\b\\d+'
          }
        ],
        relevance: 0
      },
      {
        className: 'symbol',
        variants: [
          { // GNU ARM syntax
            begin: '^[ \\t]*[a-z_\\.\\$][a-z0-9_\\.\\$]+:'
          },
          { // ARM syntax
            begin: '^[a-z_\\.\\$][a-z0-9_\\.\\$]+'
          },
          { // label reference
            begin: '[=#]\\w+'
          }
        ],
        relevance: 0
      }
    ]
  };
}

module.exports = armasm;


/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvYXJtYXNtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtDQUFrQyxJQUFJOztBQUV0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLHNCQUFzQjtBQUN0QjtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVUFBVSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU87QUFDdkssS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsSUFBSTtBQUNuRDtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsRUFBRTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1gsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWCxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWCxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiIxMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5MYW5ndWFnZTogQVJNIEFzc2VtYmx5XG5BdXRob3I6IERhbiBQYW56YXJlbGxhIDxhbHNvZWxwQGdtYWlsLmNvbT5cbkRlc2NyaXB0aW9uOiBBUk0gQXNzZW1ibHkgaW5jbHVkaW5nIFRodW1iIGFuZCBUaHVtYjIgaW5zdHJ1Y3Rpb25zXG5DYXRlZ29yeTogYXNzZW1ibGVyXG4qL1xuXG4vKiogQHR5cGUgTGFuZ3VhZ2VGbiAqL1xuZnVuY3Rpb24gYXJtYXNtKGhsanMpIHtcbiAgLy8gbG9jYWwgbGFiZWxzOiAlP1tGQl0/W0FUXT9cXGR7MSwyfVxcdytcblxuICBjb25zdCBDT01NRU5UID0ge1xuICAgIHZhcmlhbnRzOiBbXG4gICAgICBobGpzLkNPTU1FTlQoJ15bIFxcXFx0XSooPz0jKScsICckJywge1xuICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgIGV4Y2x1ZGVCZWdpbjogdHJ1ZVxuICAgICAgfSksXG4gICAgICBobGpzLkNPTU1FTlQoJ1s7QF0nLCAnJCcsIHtcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9KSxcbiAgICAgIGhsanMuQ19MSU5FX0NPTU1FTlRfTU9ERSxcbiAgICAgIGhsanMuQ19CTE9DS19DT01NRU5UX01PREVcbiAgICBdXG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnQVJNIEFzc2VtYmx5JyxcbiAgICBjYXNlX2luc2Vuc2l0aXZlOiB0cnVlLFxuICAgIGFsaWFzZXM6IFsnYXJtJ10sXG4gICAga2V5d29yZHM6IHtcbiAgICAgICRwYXR0ZXJuOiAnXFxcXC4/JyArIGhsanMuSURFTlRfUkUsXG4gICAgICBtZXRhOlxuICAgICAgICAvLyBHTlUgcHJlcHJvY3NcbiAgICAgICAgJy4yYnl0ZSAuNGJ5dGUgLmFsaWduIC5hc2NpaSAuYXNjaXogLmJhbGlnbiAuYnl0ZSAuY29kZSAuZGF0YSAuZWxzZSAuZW5kIC5lbmRpZiAuZW5kbSAuZW5kciAuZXF1IC5lcnIgLmV4aXRtIC5leHRlcm4gLmdsb2JhbCAuaHdvcmQgLmlmIC5pZmRlZiAuaWZuZGVmIC5pbmNsdWRlIC5pcnAgLmxvbmcgLm1hY3JvIC5yZXB0IC5yZXEgLnNlY3Rpb24gLnNldCAuc2tpcCAuc3BhY2UgLnRleHQgLndvcmQgLmFybSAudGh1bWIgLmNvZGUxNiAuY29kZTMyIC5mb3JjZV90aHVtYiAudGh1bWJfZnVuYyAubHRvcmcgJyArXG4gICAgICAgIC8vIEFSTSBkaXJlY3RpdmVzXG4gICAgICAgICdBTElBUyBBTElHTiBBUk0gQVJFQSBBU1NFUlQgQVRUUiBDTiBDT0RFIENPREUxNiBDT0RFMzIgQ09NTU9OIENQIERBVEEgRENCIERDRCBEQ0RVIERDRE8gRENGRCBEQ0ZEVSBEQ0kgRENRIERDUVUgRENXIERDV1UgRE4gRUxJRiBFTFNFIEVORCBFTkRGVU5DIEVORElGIEVORFAgRU5UUlkgRVFVIEVYUE9SVCBFWFBPUlRBUyBFWFRFUk4gRklFTEQgRklMTCBGVU5DVElPTiBHQkxBIEdCTEwgR0JMUyBHRVQgR0xPQkFMIElGIElNUE9SVCBJTkNCSU4gSU5DTFVERSBJTkZPIEtFRVAgTENMQSBMQ0xMIExDTFMgTFRPUkcgTUFDUk8gTUFQIE1FTkQgTUVYSVQgTk9GUCBPUFQgUFJFU0VSVkU4IFBST0MgUU4gUkVBRE9OTFkgUkVMT0MgUkVRVUlSRSBSRVFVSVJFOCBSTElTVCBGTiBST1VUIFNFVEEgU0VUTCBTRVRTIFNOIFNQQUNFIFNVQlQgVEhVTUIgVEhVTUJYIFRUTCBXSElMRSBXRU5EICcsXG4gICAgICBidWlsdF9pbjpcbiAgICAgICAgJ3IwIHIxIHIyIHIzIHI0IHI1IHI2IHI3IHI4IHI5IHIxMCByMTEgcjEyIHIxMyByMTQgcjE1ICcgKyAvLyBzdGFuZGFyZCByZWdpc3RlcnNcbiAgICAgICAgJ3BjIGxyIHNwIGlwIHNsIHNiIGZwICcgKyAvLyB0eXBpY2FsIHJlZ3MgcGx1cyBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XG4gICAgICAgICdhMSBhMiBhMyBhNCB2MSB2MiB2MyB2NCB2NSB2NiB2NyB2OCBmMCBmMSBmMiBmMyBmNCBmNSBmNiBmNyAnICsgLy8gbW9yZSByZWdzIGFuZCBmcFxuICAgICAgICAncDAgcDEgcDIgcDMgcDQgcDUgcDYgcDcgcDggcDkgcDEwIHAxMSBwMTIgcDEzIHAxNCBwMTUgJyArIC8vIGNvcHJvY2Vzc29yIHJlZ3NcbiAgICAgICAgJ2MwIGMxIGMyIGMzIGM0IGM1IGM2IGM3IGM4IGM5IGMxMCBjMTEgYzEyIGMxMyBjMTQgYzE1ICcgKyAvLyBtb3JlIGNvcHJvY1xuICAgICAgICAncTAgcTEgcTIgcTMgcTQgcTUgcTYgcTcgcTggcTkgcTEwIHExMSBxMTIgcTEzIHExNCBxMTUgJyArIC8vIGFkdmFuY2VkIFNJTUQgTkVPTiByZWdzXG5cbiAgICAgICAgLy8gcHJvZ3JhbSBzdGF0dXMgcmVnaXN0ZXJzXG4gICAgICAgICdjcHNyX2MgY3Bzcl94IGNwc3JfcyBjcHNyX2YgY3Bzcl9jeCBjcHNyX2N4cyBjcHNyX3hzIGNwc3JfeHNmIGNwc3Jfc2YgY3Bzcl9jeHNmICcgK1xuICAgICAgICAnc3Bzcl9jIHNwc3JfeCBzcHNyX3Mgc3Bzcl9mIHNwc3JfY3ggc3Bzcl9jeHMgc3Bzcl94cyBzcHNyX3hzZiBzcHNyX3NmIHNwc3JfY3hzZiAnICtcblxuICAgICAgICAvLyBORU9OIGFuZCBWRlAgcmVnaXN0ZXJzXG4gICAgICAgICdzMCBzMSBzMiBzMyBzNCBzNSBzNiBzNyBzOCBzOSBzMTAgczExIHMxMiBzMTMgczE0IHMxNSAnICtcbiAgICAgICAgJ3MxNiBzMTcgczE4IHMxOSBzMjAgczIxIHMyMiBzMjMgczI0IHMyNSBzMjYgczI3IHMyOCBzMjkgczMwIHMzMSAnICtcbiAgICAgICAgJ2QwIGQxIGQyIGQzIGQ0IGQ1IGQ2IGQ3IGQ4IGQ5IGQxMCBkMTEgZDEyIGQxMyBkMTQgZDE1ICcgK1xuICAgICAgICAnZDE2IGQxNyBkMTggZDE5IGQyMCBkMjEgZDIyIGQyMyBkMjQgZDI1IGQyNiBkMjcgZDI4IGQyOSBkMzAgZDMxICcgK1xuXG4gICAgICAgICd7UEN9IHtWQVJ9IHtUUlVFfSB7RkFMU0V9IHtPUFR9IHtDT05GSUd9IHtFTkRJQU59IHtDT0RFU0laRX0ge0NQVX0ge0ZQVX0ge0FSQ0hJVEVDVFVSRX0ge1BDU1RPUkVPRkZTRVR9IHtBUk1BU01fVkVSU0lPTn0ge0lOVEVSfSB7Uk9QSX0ge1JXUEl9IHtTV1NUfSB7Tk9TV1NUfSAuIEAnXG4gICAgfSxcbiAgICBjb250YWluczogW1xuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdrZXl3b3JkJyxcbiAgICAgICAgYmVnaW46ICdcXFxcYignICsgLy8gbW5lbW9uaWNzXG4gICAgICAgICAgICAnYWRjfCcgK1xuICAgICAgICAgICAgJyhxZD98c2g/fHVbcWhdPyk/YWRkKDh8MTYpP3x1c2FkYT84fChxfHNoP3x1W3FoXT8pPyhhc3xzYSl4fCcgK1xuICAgICAgICAgICAgJ2FuZHxhZHJsP3xzYmN8cnNbYmNdfGFzcnxiW2x4XT98Ymx4fGJ4anxjYm4/enx0YltiaF18YmljfCcgK1xuICAgICAgICAgICAgJ2JmY3xiZml8W3N1XWJmeHxia3B0fGNkcDI/fGNsenxjbHJleHxjbXB8Y21ufGNwc2lbZWRdfGNwc3wnICtcbiAgICAgICAgICAgICdzZXRlbmR8ZGJnfGRtYnxkc2J8ZW9yfGlzYnxpdFt0ZV17MCwzfXxsc2x8bHNyfHJvcnxycnh8JyArXG4gICAgICAgICAgICAnbGRtKChbaWRdW2FiXSl8Zltkc10pP3xsZHIoKHN8ZXgpP1tiaGRdKT98bW92dD98bXZufG1yYXxtYXJ8JyArXG4gICAgICAgICAgICAnbXVsfFt1c11tdWxsfHNtdWxbYnd0XVtidF18c211W2FzXWR8c21tdWx8c21tbGF8JyArXG4gICAgICAgICAgICAnbWxhfHVtbGFhbHxzbWxhbD8oW3didF1bYnRdfGQpfG1sc3xzbWxzbD9bZHNdfHNtY3xzdmN8c2V2fCcgK1xuICAgICAgICAgICAgJ21pYShbYnRdezJ9fHBoKT98bXJyP2MyP3xtY3JyMj98bXJzfG1zcnxvcnJ8b3JufHBraCh0YnxidCl8cmJpdHwnICtcbiAgICAgICAgICAgICdyZXYoMTZ8c2gpP3xzZWx8W3N1XXNhdCgxNik/fG5vcHxwb3B8cHVzaHxyZmUoW2lkXVthYl0pP3wnICtcbiAgICAgICAgICAgICdzdG0oW2lkXVthYl0pP3xzdHIoZXgpP1tiaGRdP3wocWQ/KT9zdWJ8KHNoP3xxfHVbcWhdPyk/c3ViKDh8MTYpfCcgK1xuICAgICAgICAgICAgJ1tzdV14dChhP2h8YT9iKDE2KT8pfHNycyhbaWRdW2FiXSk/fHN3cGI/fHN3aXxzbWl8dHN0fHRlcXwnICtcbiAgICAgICAgICAgICd3ZmV8d2ZpfHlpZWxkJyArXG4gICAgICAgICcpJyArXG4gICAgICAgICcoZXF8bmV8Y3N8Y2N8bWl8cGx8dnN8dmN8aGl8bHN8Z2V8bHR8Z3R8bGV8YWx8aHN8bG8pPycgKyAvLyBjb25kaXRpb24gY29kZXNcbiAgICAgICAgJ1tzcHRyeF0/JyArIC8vIGxlZ2FsIHBvc3RmaXhlc1xuICAgICAgICAnKD89XFxcXHMpJyAvLyBmb2xsb3dlZCBieSBzcGFjZVxuICAgICAgfSxcbiAgICAgIENPTU1FTlQsXG4gICAgICBobGpzLlFVT1RFX1NUUklOR19NT0RFLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgICBiZWdpbjogJ1xcJycsXG4gICAgICAgIGVuZDogJ1teXFxcXFxcXFxdXFwnJyxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICd0aXRsZScsXG4gICAgICAgIGJlZ2luOiAnXFxcXHwnLFxuICAgICAgICBlbmQ6ICdcXFxcfCcsXG4gICAgICAgIGlsbGVnYWw6ICdcXFxcbicsXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICB7IC8vIGhleFxuICAgICAgICAgICAgYmVnaW46ICdbIyQ9XT8weFswLTlhLWZdKydcbiAgICAgICAgICB9LFxuICAgICAgICAgIHsgLy8gYmluXG4gICAgICAgICAgICBiZWdpbjogJ1sjJD1dPzBiWzAxXSsnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7IC8vIGxpdGVyYWxcbiAgICAgICAgICAgIGJlZ2luOiAnWyMkPV1cXFxcZCsnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7IC8vIGJhcmUgbnVtYmVyXG4gICAgICAgICAgICBiZWdpbjogJ1xcXFxiXFxcXGQrJ1xuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdzeW1ib2wnLFxuICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgIHsgLy8gR05VIEFSTSBzeW50YXhcbiAgICAgICAgICAgIGJlZ2luOiAnXlsgXFxcXHRdKlthLXpfXFxcXC5cXFxcJF1bYS16MC05X1xcXFwuXFxcXCRdKzonXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7IC8vIEFSTSBzeW50YXhcbiAgICAgICAgICAgIGJlZ2luOiAnXlthLXpfXFxcXC5cXFxcJF1bYS16MC05X1xcXFwuXFxcXCRdKydcbiAgICAgICAgICB9LFxuICAgICAgICAgIHsgLy8gbGFiZWwgcmVmZXJlbmNlXG4gICAgICAgICAgICBiZWdpbjogJ1s9I11cXFxcdysnXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH1cbiAgICBdXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJtYXNtO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==