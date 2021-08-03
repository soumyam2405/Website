(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[103],{

/***/ "./node_modules/highlight.js/lib/languages/makefile.js":
/*!*************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/makefile.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Makefile
Author: Ivan Sagalaev <maniac@softwaremaniacs.org>
Contributors: Joël Porquet <joel@porquet.org>
Website: https://www.gnu.org/software/make/manual/html_node/Introduction.html
Category: common
*/

function makefile(hljs) {
  /* Variables: simple (eg $(var)) and special (eg $@) */
  const VARIABLE = {
    className: 'variable',
    variants: [
      {
        begin: '\\$\\(' + hljs.UNDERSCORE_IDENT_RE + '\\)',
        contains: [ hljs.BACKSLASH_ESCAPE ]
      },
      {
        begin: /\$[@%<?\^\+\*]/
      }
    ]
  };
  /* Quoted string with variables inside */
  const QUOTE_STRING = {
    className: 'string',
    begin: /"/,
    end: /"/,
    contains: [
      hljs.BACKSLASH_ESCAPE,
      VARIABLE
    ]
  };
  /* Function: $(func arg,...) */
  const FUNC = {
    className: 'variable',
    begin: /\$\([\w-]+\s/,
    end: /\)/,
    keywords: {
      built_in:
        'subst patsubst strip findstring filter filter-out sort ' +
        'word wordlist firstword lastword dir notdir suffix basename ' +
        'addsuffix addprefix join wildcard realpath abspath error warning ' +
        'shell origin flavor foreach if or and call eval file value'
    },
    contains: [ VARIABLE ]
  };
  /* Variable assignment */
  const ASSIGNMENT = {
    begin: '^' + hljs.UNDERSCORE_IDENT_RE + '\\s*(?=[:+?]?=)'
  };
  /* Meta targets (.PHONY) */
  const META = {
    className: 'meta',
    begin: /^\.PHONY:/,
    end: /$/,
    keywords: {
      $pattern: /[\.\w]+/,
      'meta-keyword': '.PHONY'
    }
  };
  /* Targets */
  const TARGET = {
    className: 'section',
    begin: /^[^\s]+:/,
    end: /$/,
    contains: [ VARIABLE ]
  };
  return {
    name: 'Makefile',
    aliases: [
      'mk',
      'mak',
      'make',
    ],
    keywords: {
      $pattern: /[\w-]+/,
      keyword: 'define endef undefine ifdef ifndef ifeq ifneq else endif ' +
      'include -include sinclude override export unexport private vpath'
    },
    contains: [
      hljs.HASH_COMMENT_MODE,
      VARIABLE,
      QUOTE_STRING,
      FUNC,
      ASSIGNMENT,
      META,
      TARGET
    ]
  };
}

module.exports = makefile;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL21ha2VmaWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvMTAzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBNYWtlZmlsZVxuQXV0aG9yOiBJdmFuIFNhZ2FsYWV2IDxtYW5pYWNAc29mdHdhcmVtYW5pYWNzLm9yZz5cbkNvbnRyaWJ1dG9yczogSm/Dq2wgUG9ycXVldCA8am9lbEBwb3JxdWV0Lm9yZz5cbldlYnNpdGU6IGh0dHBzOi8vd3d3LmdudS5vcmcvc29mdHdhcmUvbWFrZS9tYW51YWwvaHRtbF9ub2RlL0ludHJvZHVjdGlvbi5odG1sXG5DYXRlZ29yeTogY29tbW9uXG4qL1xuXG5mdW5jdGlvbiBtYWtlZmlsZShobGpzKSB7XG4gIC8qIFZhcmlhYmxlczogc2ltcGxlIChlZyAkKHZhcikpIGFuZCBzcGVjaWFsIChlZyAkQCkgKi9cbiAgY29uc3QgVkFSSUFCTEUgPSB7XG4gICAgY2xhc3NOYW1lOiAndmFyaWFibGUnLFxuICAgIHZhcmlhbnRzOiBbXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnXFxcXCRcXFxcKCcgKyBobGpzLlVOREVSU0NPUkVfSURFTlRfUkUgKyAnXFxcXCknLFxuICAgICAgICBjb250YWluczogWyBobGpzLkJBQ0tTTEFTSF9FU0NBUEUgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IC9cXCRbQCU8P1xcXlxcK1xcKl0vXG4gICAgICB9XG4gICAgXVxuICB9O1xuICAvKiBRdW90ZWQgc3RyaW5nIHdpdGggdmFyaWFibGVzIGluc2lkZSAqL1xuICBjb25zdCBRVU9URV9TVFJJTkcgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICBiZWdpbjogL1wiLyxcbiAgICBlbmQ6IC9cIi8sXG4gICAgY29udGFpbnM6IFtcbiAgICAgIGhsanMuQkFDS1NMQVNIX0VTQ0FQRSxcbiAgICAgIFZBUklBQkxFXG4gICAgXVxuICB9O1xuICAvKiBGdW5jdGlvbjogJChmdW5jIGFyZywuLi4pICovXG4gIGNvbnN0IEZVTkMgPSB7XG4gICAgY2xhc3NOYW1lOiAndmFyaWFibGUnLFxuICAgIGJlZ2luOiAvXFwkXFwoW1xcdy1dK1xccy8sXG4gICAgZW5kOiAvXFwpLyxcbiAgICBrZXl3b3Jkczoge1xuICAgICAgYnVpbHRfaW46XG4gICAgICAgICdzdWJzdCBwYXRzdWJzdCBzdHJpcCBmaW5kc3RyaW5nIGZpbHRlciBmaWx0ZXItb3V0IHNvcnQgJyArXG4gICAgICAgICd3b3JkIHdvcmRsaXN0IGZpcnN0d29yZCBsYXN0d29yZCBkaXIgbm90ZGlyIHN1ZmZpeCBiYXNlbmFtZSAnICtcbiAgICAgICAgJ2FkZHN1ZmZpeCBhZGRwcmVmaXggam9pbiB3aWxkY2FyZCByZWFscGF0aCBhYnNwYXRoIGVycm9yIHdhcm5pbmcgJyArXG4gICAgICAgICdzaGVsbCBvcmlnaW4gZmxhdm9yIGZvcmVhY2ggaWYgb3IgYW5kIGNhbGwgZXZhbCBmaWxlIHZhbHVlJ1xuICAgIH0sXG4gICAgY29udGFpbnM6IFsgVkFSSUFCTEUgXVxuICB9O1xuICAvKiBWYXJpYWJsZSBhc3NpZ25tZW50ICovXG4gIGNvbnN0IEFTU0lHTk1FTlQgPSB7XG4gICAgYmVnaW46ICdeJyArIGhsanMuVU5ERVJTQ09SRV9JREVOVF9SRSArICdcXFxccyooPz1bOis/XT89KSdcbiAgfTtcbiAgLyogTWV0YSB0YXJnZXRzICguUEhPTlkpICovXG4gIGNvbnN0IE1FVEEgPSB7XG4gICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgYmVnaW46IC9eXFwuUEhPTlk6LyxcbiAgICBlbmQ6IC8kLyxcbiAgICBrZXl3b3Jkczoge1xuICAgICAgJHBhdHRlcm46IC9bXFwuXFx3XSsvLFxuICAgICAgJ21ldGEta2V5d29yZCc6ICcuUEhPTlknXG4gICAgfVxuICB9O1xuICAvKiBUYXJnZXRzICovXG4gIGNvbnN0IFRBUkdFVCA9IHtcbiAgICBjbGFzc05hbWU6ICdzZWN0aW9uJyxcbiAgICBiZWdpbjogL15bXlxcc10rOi8sXG4gICAgZW5kOiAvJC8sXG4gICAgY29udGFpbnM6IFsgVkFSSUFCTEUgXVxuICB9O1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICdNYWtlZmlsZScsXG4gICAgYWxpYXNlczogW1xuICAgICAgJ21rJyxcbiAgICAgICdtYWsnLFxuICAgICAgJ21ha2UnLFxuICAgIF0sXG4gICAga2V5d29yZHM6IHtcbiAgICAgICRwYXR0ZXJuOiAvW1xcdy1dKy8sXG4gICAgICBrZXl3b3JkOiAnZGVmaW5lIGVuZGVmIHVuZGVmaW5lIGlmZGVmIGlmbmRlZiBpZmVxIGlmbmVxIGVsc2UgZW5kaWYgJyArXG4gICAgICAnaW5jbHVkZSAtaW5jbHVkZSBzaW5jbHVkZSBvdmVycmlkZSBleHBvcnQgdW5leHBvcnQgcHJpdmF0ZSB2cGF0aCdcbiAgICB9LFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBobGpzLkhBU0hfQ09NTUVOVF9NT0RFLFxuICAgICAgVkFSSUFCTEUsXG4gICAgICBRVU9URV9TVFJJTkcsXG4gICAgICBGVU5DLFxuICAgICAgQVNTSUdOTUVOVCxcbiAgICAgIE1FVEEsXG4gICAgICBUQVJHRVRcbiAgICBdXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFrZWZpbGU7XG4iXSwic291cmNlUm9vdCI6IiJ9