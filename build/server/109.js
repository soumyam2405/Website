exports.ids = [109];
exports.modules = {

/***/ "./node_modules/highlight.js/lib/languages/mipsasm.js":
/*!************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/mipsasm.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: MIPS Assembly
Author: Nebuleon Fumika <nebuleon.fumika@gmail.com>
Description: MIPS Assembly (up to MIPS32R2)
Website: https://en.wikipedia.org/wiki/MIPS_architecture
Category: assembler
*/

function mipsasm(hljs) {
  // local labels: %?[FB]?[AT]?\d{1,2}\w+
  return {
    name: 'MIPS Assembly',
    case_insensitive: true,
    aliases: [ 'mips' ],
    keywords: {
      $pattern: '\\.?' + hljs.IDENT_RE,
      meta:
        // GNU preprocs
        '.2byte .4byte .align .ascii .asciz .balign .byte .code .data .else .end .endif .endm .endr .equ .err .exitm .extern .global .hword .if .ifdef .ifndef .include .irp .long .macro .rept .req .section .set .skip .space .text .word .ltorg ',
      built_in:
        '$0 $1 $2 $3 $4 $5 $6 $7 $8 $9 $10 $11 $12 $13 $14 $15 ' + // integer registers
        '$16 $17 $18 $19 $20 $21 $22 $23 $24 $25 $26 $27 $28 $29 $30 $31 ' + // integer registers
        'zero at v0 v1 a0 a1 a2 a3 a4 a5 a6 a7 ' + // integer register aliases
        't0 t1 t2 t3 t4 t5 t6 t7 t8 t9 s0 s1 s2 s3 s4 s5 s6 s7 s8 ' + // integer register aliases
        'k0 k1 gp sp fp ra ' + // integer register aliases
        '$f0 $f1 $f2 $f2 $f4 $f5 $f6 $f7 $f8 $f9 $f10 $f11 $f12 $f13 $f14 $f15 ' + // floating-point registers
        '$f16 $f17 $f18 $f19 $f20 $f21 $f22 $f23 $f24 $f25 $f26 $f27 $f28 $f29 $f30 $f31 ' + // floating-point registers
        'Context Random EntryLo0 EntryLo1 Context PageMask Wired EntryHi ' + // Coprocessor 0 registers
        'HWREna BadVAddr Count Compare SR IntCtl SRSCtl SRSMap Cause EPC PRId ' + // Coprocessor 0 registers
        'EBase Config Config1 Config2 Config3 LLAddr Debug DEPC DESAVE CacheErr ' + // Coprocessor 0 registers
        'ECC ErrorEPC TagLo DataLo TagHi DataHi WatchLo WatchHi PerfCtl PerfCnt ' // Coprocessor 0 registers
    },
    contains: [
      {
        className: 'keyword',
        begin: '\\b(' + // mnemonics
            // 32-bit integer instructions
            'addi?u?|andi?|b(al)?|beql?|bgez(al)?l?|bgtzl?|blezl?|bltz(al)?l?|' +
            'bnel?|cl[oz]|divu?|ext|ins|j(al)?|jalr(\\.hb)?|jr(\\.hb)?|lbu?|lhu?|' +
            'll|lui|lw[lr]?|maddu?|mfhi|mflo|movn|movz|move|msubu?|mthi|mtlo|mul|' +
            'multu?|nop|nor|ori?|rotrv?|sb|sc|se[bh]|sh|sllv?|slti?u?|srav?|' +
            'srlv?|subu?|sw[lr]?|xori?|wsbh|' +
            // floating-point instructions
            'abs\\.[sd]|add\\.[sd]|alnv.ps|bc1[ft]l?|' +
            'c\\.(s?f|un|u?eq|[ou]lt|[ou]le|ngle?|seq|l[et]|ng[et])\\.[sd]|' +
            '(ceil|floor|round|trunc)\\.[lw]\\.[sd]|cfc1|cvt\\.d\\.[lsw]|' +
            'cvt\\.l\\.[dsw]|cvt\\.ps\\.s|cvt\\.s\\.[dlw]|cvt\\.s\\.p[lu]|cvt\\.w\\.[dls]|' +
            'div\\.[ds]|ldx?c1|luxc1|lwx?c1|madd\\.[sd]|mfc1|mov[fntz]?\\.[ds]|' +
            'msub\\.[sd]|mth?c1|mul\\.[ds]|neg\\.[ds]|nmadd\\.[ds]|nmsub\\.[ds]|' +
            'p[lu][lu]\\.ps|recip\\.fmt|r?sqrt\\.[ds]|sdx?c1|sub\\.[ds]|suxc1|' +
            'swx?c1|' +
            // system control instructions
            'break|cache|d?eret|[de]i|ehb|mfc0|mtc0|pause|prefx?|rdhwr|' +
            'rdpgpr|sdbbp|ssnop|synci?|syscall|teqi?|tgei?u?|tlb(p|r|w[ir])|' +
            'tlti?u?|tnei?|wait|wrpgpr' +
        ')',
        end: '\\s'
      },
      // lines ending with ; or # aren't really comments, probably auto-detect fail
      hljs.COMMENT('[;#](?!\\s*$)', '$'),
      hljs.C_BLOCK_COMMENT_MODE,
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
            begin: '0x[0-9a-f]+'
          },
          { // bare number
            begin: '\\b-?\\d+'
          }
        ],
        relevance: 0
      },
      {
        className: 'symbol',
        variants: [
          { // GNU MIPS syntax
            begin: '^\\s*[a-z_\\.\\$][a-z0-9_\\.\\$]+:'
          },
          { // numbered local labels
            begin: '^\\s*[0-9]+:'
          },
          { // number local label reference (backwards, forwards)
            begin: '[0-9]+[bf]'
          }
        ],
        relevance: 0
      }
    ],
    // forward slashes are not allowed
    illegal: /\//
  };
}

module.exports = mipsasm;


/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvbWlwc2FzbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQ0FBa0MsSUFBSTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsNEJBQTRCO0FBQzVCLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1gsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiIxMDkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuTGFuZ3VhZ2U6IE1JUFMgQXNzZW1ibHlcbkF1dGhvcjogTmVidWxlb24gRnVtaWthIDxuZWJ1bGVvbi5mdW1pa2FAZ21haWwuY29tPlxuRGVzY3JpcHRpb246IE1JUFMgQXNzZW1ibHkgKHVwIHRvIE1JUFMzMlIyKVxuV2Vic2l0ZTogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTUlQU19hcmNoaXRlY3R1cmVcbkNhdGVnb3J5OiBhc3NlbWJsZXJcbiovXG5cbmZ1bmN0aW9uIG1pcHNhc20oaGxqcykge1xuICAvLyBsb2NhbCBsYWJlbHM6ICU/W0ZCXT9bQVRdP1xcZHsxLDJ9XFx3K1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICdNSVBTIEFzc2VtYmx5JyxcbiAgICBjYXNlX2luc2Vuc2l0aXZlOiB0cnVlLFxuICAgIGFsaWFzZXM6IFsgJ21pcHMnIF0sXG4gICAga2V5d29yZHM6IHtcbiAgICAgICRwYXR0ZXJuOiAnXFxcXC4/JyArIGhsanMuSURFTlRfUkUsXG4gICAgICBtZXRhOlxuICAgICAgICAvLyBHTlUgcHJlcHJvY3NcbiAgICAgICAgJy4yYnl0ZSAuNGJ5dGUgLmFsaWduIC5hc2NpaSAuYXNjaXogLmJhbGlnbiAuYnl0ZSAuY29kZSAuZGF0YSAuZWxzZSAuZW5kIC5lbmRpZiAuZW5kbSAuZW5kciAuZXF1IC5lcnIgLmV4aXRtIC5leHRlcm4gLmdsb2JhbCAuaHdvcmQgLmlmIC5pZmRlZiAuaWZuZGVmIC5pbmNsdWRlIC5pcnAgLmxvbmcgLm1hY3JvIC5yZXB0IC5yZXEgLnNlY3Rpb24gLnNldCAuc2tpcCAuc3BhY2UgLnRleHQgLndvcmQgLmx0b3JnICcsXG4gICAgICBidWlsdF9pbjpcbiAgICAgICAgJyQwICQxICQyICQzICQ0ICQ1ICQ2ICQ3ICQ4ICQ5ICQxMCAkMTEgJDEyICQxMyAkMTQgJDE1ICcgKyAvLyBpbnRlZ2VyIHJlZ2lzdGVyc1xuICAgICAgICAnJDE2ICQxNyAkMTggJDE5ICQyMCAkMjEgJDIyICQyMyAkMjQgJDI1ICQyNiAkMjcgJDI4ICQyOSAkMzAgJDMxICcgKyAvLyBpbnRlZ2VyIHJlZ2lzdGVyc1xuICAgICAgICAnemVybyBhdCB2MCB2MSBhMCBhMSBhMiBhMyBhNCBhNSBhNiBhNyAnICsgLy8gaW50ZWdlciByZWdpc3RlciBhbGlhc2VzXG4gICAgICAgICd0MCB0MSB0MiB0MyB0NCB0NSB0NiB0NyB0OCB0OSBzMCBzMSBzMiBzMyBzNCBzNSBzNiBzNyBzOCAnICsgLy8gaW50ZWdlciByZWdpc3RlciBhbGlhc2VzXG4gICAgICAgICdrMCBrMSBncCBzcCBmcCByYSAnICsgLy8gaW50ZWdlciByZWdpc3RlciBhbGlhc2VzXG4gICAgICAgICckZjAgJGYxICRmMiAkZjIgJGY0ICRmNSAkZjYgJGY3ICRmOCAkZjkgJGYxMCAkZjExICRmMTIgJGYxMyAkZjE0ICRmMTUgJyArIC8vIGZsb2F0aW5nLXBvaW50IHJlZ2lzdGVyc1xuICAgICAgICAnJGYxNiAkZjE3ICRmMTggJGYxOSAkZjIwICRmMjEgJGYyMiAkZjIzICRmMjQgJGYyNSAkZjI2ICRmMjcgJGYyOCAkZjI5ICRmMzAgJGYzMSAnICsgLy8gZmxvYXRpbmctcG9pbnQgcmVnaXN0ZXJzXG4gICAgICAgICdDb250ZXh0IFJhbmRvbSBFbnRyeUxvMCBFbnRyeUxvMSBDb250ZXh0IFBhZ2VNYXNrIFdpcmVkIEVudHJ5SGkgJyArIC8vIENvcHJvY2Vzc29yIDAgcmVnaXN0ZXJzXG4gICAgICAgICdIV1JFbmEgQmFkVkFkZHIgQ291bnQgQ29tcGFyZSBTUiBJbnRDdGwgU1JTQ3RsIFNSU01hcCBDYXVzZSBFUEMgUFJJZCAnICsgLy8gQ29wcm9jZXNzb3IgMCByZWdpc3RlcnNcbiAgICAgICAgJ0VCYXNlIENvbmZpZyBDb25maWcxIENvbmZpZzIgQ29uZmlnMyBMTEFkZHIgRGVidWcgREVQQyBERVNBVkUgQ2FjaGVFcnIgJyArIC8vIENvcHJvY2Vzc29yIDAgcmVnaXN0ZXJzXG4gICAgICAgICdFQ0MgRXJyb3JFUEMgVGFnTG8gRGF0YUxvIFRhZ0hpIERhdGFIaSBXYXRjaExvIFdhdGNoSGkgUGVyZkN0bCBQZXJmQ250ICcgLy8gQ29wcm9jZXNzb3IgMCByZWdpc3RlcnNcbiAgICB9LFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2tleXdvcmQnLFxuICAgICAgICBiZWdpbjogJ1xcXFxiKCcgKyAvLyBtbmVtb25pY3NcbiAgICAgICAgICAgIC8vIDMyLWJpdCBpbnRlZ2VyIGluc3RydWN0aW9uc1xuICAgICAgICAgICAgJ2FkZGk/dT98YW5kaT98YihhbCk/fGJlcWw/fGJnZXooYWwpP2w/fGJndHpsP3xibGV6bD98Ymx0eihhbCk/bD98JyArXG4gICAgICAgICAgICAnYm5lbD98Y2xbb3pdfGRpdnU/fGV4dHxpbnN8aihhbCk/fGphbHIoXFxcXC5oYik/fGpyKFxcXFwuaGIpP3xsYnU/fGxodT98JyArXG4gICAgICAgICAgICAnbGx8bHVpfGx3W2xyXT98bWFkZHU/fG1maGl8bWZsb3xtb3ZufG1vdnp8bW92ZXxtc3VidT98bXRoaXxtdGxvfG11bHwnICtcbiAgICAgICAgICAgICdtdWx0dT98bm9wfG5vcnxvcmk/fHJvdHJ2P3xzYnxzY3xzZVtiaF18c2h8c2xsdj98c2x0aT91P3xzcmF2P3wnICtcbiAgICAgICAgICAgICdzcmx2P3xzdWJ1P3xzd1tscl0/fHhvcmk/fHdzYmh8JyArXG4gICAgICAgICAgICAvLyBmbG9hdGluZy1wb2ludCBpbnN0cnVjdGlvbnNcbiAgICAgICAgICAgICdhYnNcXFxcLltzZF18YWRkXFxcXC5bc2RdfGFsbnYucHN8YmMxW2Z0XWw/fCcgK1xuICAgICAgICAgICAgJ2NcXFxcLihzP2Z8dW58dT9lcXxbb3VdbHR8W291XWxlfG5nbGU/fHNlcXxsW2V0XXxuZ1tldF0pXFxcXC5bc2RdfCcgK1xuICAgICAgICAgICAgJyhjZWlsfGZsb29yfHJvdW5kfHRydW5jKVxcXFwuW2x3XVxcXFwuW3NkXXxjZmMxfGN2dFxcXFwuZFxcXFwuW2xzd118JyArXG4gICAgICAgICAgICAnY3Z0XFxcXC5sXFxcXC5bZHN3XXxjdnRcXFxcLnBzXFxcXC5zfGN2dFxcXFwuc1xcXFwuW2Rsd118Y3Z0XFxcXC5zXFxcXC5wW2x1XXxjdnRcXFxcLndcXFxcLltkbHNdfCcgK1xuICAgICAgICAgICAgJ2RpdlxcXFwuW2RzXXxsZHg/YzF8bHV4YzF8bHd4P2MxfG1hZGRcXFxcLltzZF18bWZjMXxtb3ZbZm50el0/XFxcXC5bZHNdfCcgK1xuICAgICAgICAgICAgJ21zdWJcXFxcLltzZF18bXRoP2MxfG11bFxcXFwuW2RzXXxuZWdcXFxcLltkc118bm1hZGRcXFxcLltkc118bm1zdWJcXFxcLltkc118JyArXG4gICAgICAgICAgICAncFtsdV1bbHVdXFxcXC5wc3xyZWNpcFxcXFwuZm10fHI/c3FydFxcXFwuW2RzXXxzZHg/YzF8c3ViXFxcXC5bZHNdfHN1eGMxfCcgK1xuICAgICAgICAgICAgJ3N3eD9jMXwnICtcbiAgICAgICAgICAgIC8vIHN5c3RlbSBjb250cm9sIGluc3RydWN0aW9uc1xuICAgICAgICAgICAgJ2JyZWFrfGNhY2hlfGQ/ZXJldHxbZGVdaXxlaGJ8bWZjMHxtdGMwfHBhdXNlfHByZWZ4P3xyZGh3cnwnICtcbiAgICAgICAgICAgICdyZHBncHJ8c2RiYnB8c3Nub3B8c3luY2k/fHN5c2NhbGx8dGVxaT98dGdlaT91P3x0bGIocHxyfHdbaXJdKXwnICtcbiAgICAgICAgICAgICd0bHRpP3U/fHRuZWk/fHdhaXR8d3JwZ3ByJyArXG4gICAgICAgICcpJyxcbiAgICAgICAgZW5kOiAnXFxcXHMnXG4gICAgICB9LFxuICAgICAgLy8gbGluZXMgZW5kaW5nIHdpdGggOyBvciAjIGFyZW4ndCByZWFsbHkgY29tbWVudHMsIHByb2JhYmx5IGF1dG8tZGV0ZWN0IGZhaWxcbiAgICAgIGhsanMuQ09NTUVOVCgnWzsjXSg/IVxcXFxzKiQpJywgJyQnKSxcbiAgICAgIGhsanMuQ19CTE9DS19DT01NRU5UX01PREUsXG4gICAgICBobGpzLlFVT1RFX1NUUklOR19NT0RFLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgICBiZWdpbjogJ1xcJycsXG4gICAgICAgIGVuZDogJ1teXFxcXFxcXFxdXFwnJyxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICd0aXRsZScsXG4gICAgICAgIGJlZ2luOiAnXFxcXHwnLFxuICAgICAgICBlbmQ6ICdcXFxcfCcsXG4gICAgICAgIGlsbGVnYWw6ICdcXFxcbicsXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICB7IC8vIGhleFxuICAgICAgICAgICAgYmVnaW46ICcweFswLTlhLWZdKydcbiAgICAgICAgICB9LFxuICAgICAgICAgIHsgLy8gYmFyZSBudW1iZXJcbiAgICAgICAgICAgIGJlZ2luOiAnXFxcXGItP1xcXFxkKydcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnc3ltYm9sJyxcbiAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICB7IC8vIEdOVSBNSVBTIHN5bnRheFxuICAgICAgICAgICAgYmVnaW46ICdeXFxcXHMqW2Etel9cXFxcLlxcXFwkXVthLXowLTlfXFxcXC5cXFxcJF0rOidcbiAgICAgICAgICB9LFxuICAgICAgICAgIHsgLy8gbnVtYmVyZWQgbG9jYWwgbGFiZWxzXG4gICAgICAgICAgICBiZWdpbjogJ15cXFxccypbMC05XSs6J1xuICAgICAgICAgIH0sXG4gICAgICAgICAgeyAvLyBudW1iZXIgbG9jYWwgbGFiZWwgcmVmZXJlbmNlIChiYWNrd2FyZHMsIGZvcndhcmRzKVxuICAgICAgICAgICAgYmVnaW46ICdbMC05XStbYmZdJ1xuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9XG4gICAgXSxcbiAgICAvLyBmb3J3YXJkIHNsYXNoZXMgYXJlIG5vdCBhbGxvd2VkXG4gICAgaWxsZWdhbDogL1xcLy9cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtaXBzYXNtO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==