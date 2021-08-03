exports.ids = [178];
exports.modules = {

/***/ "./node_modules/highlight.js/lib/languages/vala.js":
/*!*********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/vala.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Vala
Author: Antono Vasiljev <antono.vasiljev@gmail.com>
Description: Vala is a new programming language that aims to bring modern programming language features to GNOME developers without imposing any additional runtime requirements and without using a different ABI compared to applications and libraries written in C.
Website: https://wiki.gnome.org/Projects/Vala
*/

function vala(hljs) {
  return {
    name: 'Vala',
    keywords: {
      keyword:
        // Value types
        'char uchar unichar int uint long ulong short ushort int8 int16 int32 int64 uint8 ' +
        'uint16 uint32 uint64 float double bool struct enum string void ' +
        // Reference types
        'weak unowned owned ' +
        // Modifiers
        'async signal static abstract interface override virtual delegate ' +
        // Control Structures
        'if while do for foreach else switch case break default return try catch ' +
        // Visibility
        'public private protected internal ' +
        // Other
        'using new this get set const stdout stdin stderr var',
      built_in:
        'DBus GLib CCode Gee Object Gtk Posix',
      literal:
        'false true null'
    },
    contains: [
      {
        className: 'class',
        beginKeywords: 'class interface namespace',
        end: /\{/,
        excludeEnd: true,
        illegal: '[^,:\\n\\s\\.]',
        contains: [ hljs.UNDERSCORE_TITLE_MODE ]
      },
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      {
        className: 'string',
        begin: '"""',
        end: '"""',
        relevance: 5
      },
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE,
      hljs.C_NUMBER_MODE,
      {
        className: 'meta',
        begin: '^#',
        end: '$',
        relevance: 2
      }
    ]
  };
}

module.exports = vala;


/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvdmFsYS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiMTc4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBWYWxhXG5BdXRob3I6IEFudG9ubyBWYXNpbGpldiA8YW50b25vLnZhc2lsamV2QGdtYWlsLmNvbT5cbkRlc2NyaXB0aW9uOiBWYWxhIGlzIGEgbmV3IHByb2dyYW1taW5nIGxhbmd1YWdlIHRoYXQgYWltcyB0byBicmluZyBtb2Rlcm4gcHJvZ3JhbW1pbmcgbGFuZ3VhZ2UgZmVhdHVyZXMgdG8gR05PTUUgZGV2ZWxvcGVycyB3aXRob3V0IGltcG9zaW5nIGFueSBhZGRpdGlvbmFsIHJ1bnRpbWUgcmVxdWlyZW1lbnRzIGFuZCB3aXRob3V0IHVzaW5nIGEgZGlmZmVyZW50IEFCSSBjb21wYXJlZCB0byBhcHBsaWNhdGlvbnMgYW5kIGxpYnJhcmllcyB3cml0dGVuIGluIEMuXG5XZWJzaXRlOiBodHRwczovL3dpa2kuZ25vbWUub3JnL1Byb2plY3RzL1ZhbGFcbiovXG5cbmZ1bmN0aW9uIHZhbGEoaGxqcykge1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICdWYWxhJyxcbiAgICBrZXl3b3Jkczoge1xuICAgICAga2V5d29yZDpcbiAgICAgICAgLy8gVmFsdWUgdHlwZXNcbiAgICAgICAgJ2NoYXIgdWNoYXIgdW5pY2hhciBpbnQgdWludCBsb25nIHVsb25nIHNob3J0IHVzaG9ydCBpbnQ4IGludDE2IGludDMyIGludDY0IHVpbnQ4ICcgK1xuICAgICAgICAndWludDE2IHVpbnQzMiB1aW50NjQgZmxvYXQgZG91YmxlIGJvb2wgc3RydWN0IGVudW0gc3RyaW5nIHZvaWQgJyArXG4gICAgICAgIC8vIFJlZmVyZW5jZSB0eXBlc1xuICAgICAgICAnd2VhayB1bm93bmVkIG93bmVkICcgK1xuICAgICAgICAvLyBNb2RpZmllcnNcbiAgICAgICAgJ2FzeW5jIHNpZ25hbCBzdGF0aWMgYWJzdHJhY3QgaW50ZXJmYWNlIG92ZXJyaWRlIHZpcnR1YWwgZGVsZWdhdGUgJyArXG4gICAgICAgIC8vIENvbnRyb2wgU3RydWN0dXJlc1xuICAgICAgICAnaWYgd2hpbGUgZG8gZm9yIGZvcmVhY2ggZWxzZSBzd2l0Y2ggY2FzZSBicmVhayBkZWZhdWx0IHJldHVybiB0cnkgY2F0Y2ggJyArXG4gICAgICAgIC8vIFZpc2liaWxpdHlcbiAgICAgICAgJ3B1YmxpYyBwcml2YXRlIHByb3RlY3RlZCBpbnRlcm5hbCAnICtcbiAgICAgICAgLy8gT3RoZXJcbiAgICAgICAgJ3VzaW5nIG5ldyB0aGlzIGdldCBzZXQgY29uc3Qgc3Rkb3V0IHN0ZGluIHN0ZGVyciB2YXInLFxuICAgICAgYnVpbHRfaW46XG4gICAgICAgICdEQnVzIEdMaWIgQ0NvZGUgR2VlIE9iamVjdCBHdGsgUG9zaXgnLFxuICAgICAgbGl0ZXJhbDpcbiAgICAgICAgJ2ZhbHNlIHRydWUgbnVsbCdcbiAgICB9LFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2NsYXNzJyxcbiAgICAgICAgYmVnaW5LZXl3b3JkczogJ2NsYXNzIGludGVyZmFjZSBuYW1lc3BhY2UnLFxuICAgICAgICBlbmQ6IC9cXHsvLFxuICAgICAgICBleGNsdWRlRW5kOiB0cnVlLFxuICAgICAgICBpbGxlZ2FsOiAnW14sOlxcXFxuXFxcXHNcXFxcLl0nLFxuICAgICAgICBjb250YWluczogWyBobGpzLlVOREVSU0NPUkVfVElUTEVfTU9ERSBdXG4gICAgICB9LFxuICAgICAgaGxqcy5DX0xJTkVfQ09NTUVOVF9NT0RFLFxuICAgICAgaGxqcy5DX0JMT0NLX0NPTU1FTlRfTU9ERSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICAgICAgYmVnaW46ICdcIlwiXCInLFxuICAgICAgICBlbmQ6ICdcIlwiXCInLFxuICAgICAgICByZWxldmFuY2U6IDVcbiAgICAgIH0sXG4gICAgICBobGpzLkFQT1NfU1RSSU5HX01PREUsXG4gICAgICBobGpzLlFVT1RFX1NUUklOR19NT0RFLFxuICAgICAgaGxqcy5DX05VTUJFUl9NT0RFLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICAgICAgYmVnaW46ICdeIycsXG4gICAgICAgIGVuZDogJyQnLFxuICAgICAgICByZWxldmFuY2U6IDJcbiAgICAgIH1cbiAgICBdXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdmFsYTtcbiJdLCJzb3VyY2VSb290IjoiIn0=