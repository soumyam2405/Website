(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[34],{

/***/ "./node_modules/highlight.js/lib/languages/cos.js":
/*!********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/cos.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Caché Object Script
Author: Nikita Savchenko <zitros.lab@gmail.com>
Category: enterprise, scripting
Website: https://cedocs.intersystems.com/latest/csp/docbook/DocBook.UI.Page.cls
*/

/** @type LanguageFn */
function cos(hljs) {
  const STRINGS = {
    className: 'string',
    variants: [{
      begin: '"',
      end: '"',
      contains: [{ // escaped
        begin: "\"\"",
        relevance: 0
      }]
    }]
  };

  const NUMBERS = {
    className: "number",
    begin: "\\b(\\d+(\\.\\d*)?|\\.\\d+)",
    relevance: 0
  };

  const COS_KEYWORDS =
    'property parameter class classmethod clientmethod extends as break ' +
    'catch close continue do d|0 else elseif for goto halt hang h|0 if job ' +
    'j|0 kill k|0 lock l|0 merge new open quit q|0 read r|0 return set s|0 ' +
    'tcommit throw trollback try tstart use view while write w|0 xecute x|0 ' +
    'zkill znspace zn ztrap zwrite zw zzdump zzwrite print zbreak zinsert ' +
    'zload zprint zremove zsave zzprint mv mvcall mvcrt mvdim mvprint zquit ' +
    'zsync ascii';

  // registered function - no need in them due to all functions are highlighted,
  // but I'll just leave this here.

  // "$bit", "$bitcount",
  // "$bitfind", "$bitlogic", "$case", "$char", "$classmethod", "$classname",
  // "$compile", "$data", "$decimal", "$double", "$extract", "$factor",
  // "$find", "$fnumber", "$get", "$increment", "$inumber", "$isobject",
  // "$isvaliddouble", "$isvalidnum", "$justify", "$length", "$list",
  // "$listbuild", "$listdata", "$listfind", "$listfromstring", "$listget",
  // "$listlength", "$listnext", "$listsame", "$listtostring", "$listvalid",
  // "$locate", "$match", "$method", "$name", "$nconvert", "$next",
  // "$normalize", "$now", "$number", "$order", "$parameter", "$piece",
  // "$prefetchoff", "$prefetchon", "$property", "$qlength", "$qsubscript",
  // "$query", "$random", "$replace", "$reverse", "$sconvert", "$select",
  // "$sortbegin", "$sortend", "$stack", "$text", "$translate", "$view",
  // "$wascii", "$wchar", "$wextract", "$wfind", "$wiswide", "$wlength",
  // "$wreverse", "$xecute", "$zabs", "$zarccos", "$zarcsin", "$zarctan",
  // "$zcos", "$zcot", "$zcsc", "$zdate", "$zdateh", "$zdatetime",
  // "$zdatetimeh", "$zexp", "$zhex", "$zln", "$zlog", "$zpower", "$zsec",
  // "$zsin", "$zsqr", "$ztan", "$ztime", "$ztimeh", "$zboolean",
  // "$zconvert", "$zcrc", "$zcyc", "$zdascii", "$zdchar", "$zf",
  // "$ziswide", "$zlascii", "$zlchar", "$zname", "$zposition", "$zqascii",
  // "$zqchar", "$zsearch", "$zseek", "$zstrip", "$zwascii", "$zwchar",
  // "$zwidth", "$zwpack", "$zwbpack", "$zwunpack", "$zwbunpack", "$zzenkaku",
  // "$change", "$mv", "$mvat", "$mvfmt", "$mvfmts", "$mviconv",
  // "$mviconvs", "$mvinmat", "$mvlover", "$mvoconv", "$mvoconvs", "$mvraise",
  // "$mvtrans", "$mvv", "$mvname", "$zbitand", "$zbitcount", "$zbitfind",
  // "$zbitget", "$zbitlen", "$zbitnot", "$zbitor", "$zbitset", "$zbitstr",
  // "$zbitxor", "$zincrement", "$znext", "$zorder", "$zprevious", "$zsort",
  // "device", "$ecode", "$estack", "$etrap", "$halt", "$horolog",
  // "$io", "$job", "$key", "$namespace", "$principal", "$quit", "$roles",
  // "$storage", "$system", "$test", "$this", "$tlevel", "$username",
  // "$x", "$y", "$za", "$zb", "$zchild", "$zeof", "$zeos", "$zerror",
  // "$zhorolog", "$zio", "$zjob", "$zmode", "$znspace", "$zparent", "$zpi",
  // "$zpos", "$zreference", "$zstorage", "$ztimestamp", "$ztimezone",
  // "$ztrap", "$zversion"

  return {
    name: 'Caché Object Script',
    case_insensitive: true,
    aliases: [
      "cos",
      "cls"
    ],
    keywords: COS_KEYWORDS,
    contains: [
      NUMBERS,
      STRINGS,
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      {
        className: "comment",
        begin: /;/,
        end: "$",
        relevance: 0
      },
      { // Functions and user-defined functions: write $ztime(60*60*3), $$myFunc(10), $$^Val(1)
        className: "built_in",
        begin: /(?:\$\$?|\.\.)\^?[a-zA-Z]+/
      },
      { // Macro command: quit $$$OK
        className: "built_in",
        begin: /\$\$\$[a-zA-Z]+/
      },
      { // Special (global) variables: write %request.Content; Built-in classes: %Library.Integer
        className: "built_in",
        begin: /%[a-z]+(?:\.[a-z]+)*/
      },
      { // Global variable: set ^globalName = 12 write ^globalName
        className: "symbol",
        begin: /\^%?[a-zA-Z][\w]*/
      },
      { // Some control constructions: do ##class(Package.ClassName).Method(), ##super()
        className: "keyword",
        begin: /##class|##super|#define|#dim/
      },
      // sub-languages: are not fully supported by hljs by 11/15/2015
      // left for the future implementation.
      {
        begin: /&sql\(/,
        end: /\)/,
        excludeBegin: true,
        excludeEnd: true,
        subLanguage: "sql"
      },
      {
        begin: /&(js|jscript|javascript)</,
        end: />/,
        excludeBegin: true,
        excludeEnd: true,
        subLanguage: "javascript"
      },
      {
        // this brakes first and last tag, but this is the only way to embed a valid html
        begin: /&html<\s*</,
        end: />\s*>/,
        subLanguage: "xml"
      }
    ]
  };
}

module.exports = cos;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2Nvcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsT0FBTztBQUNQLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQLE9BQU8sdURBQXVEO0FBQzlEO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvMzQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuTGFuZ3VhZ2U6IENhY2jDqSBPYmplY3QgU2NyaXB0XG5BdXRob3I6IE5pa2l0YSBTYXZjaGVua28gPHppdHJvcy5sYWJAZ21haWwuY29tPlxuQ2F0ZWdvcnk6IGVudGVycHJpc2UsIHNjcmlwdGluZ1xuV2Vic2l0ZTogaHR0cHM6Ly9jZWRvY3MuaW50ZXJzeXN0ZW1zLmNvbS9sYXRlc3QvY3NwL2RvY2Jvb2svRG9jQm9vay5VSS5QYWdlLmNsc1xuKi9cblxuLyoqIEB0eXBlIExhbmd1YWdlRm4gKi9cbmZ1bmN0aW9uIGNvcyhobGpzKSB7XG4gIGNvbnN0IFNUUklOR1MgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICB2YXJpYW50czogW3tcbiAgICAgIGJlZ2luOiAnXCInLFxuICAgICAgZW5kOiAnXCInLFxuICAgICAgY29udGFpbnM6IFt7IC8vIGVzY2FwZWRcbiAgICAgICAgYmVnaW46IFwiXFxcIlxcXCJcIixcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9XVxuICAgIH1dXG4gIH07XG5cbiAgY29uc3QgTlVNQkVSUyA9IHtcbiAgICBjbGFzc05hbWU6IFwibnVtYmVyXCIsXG4gICAgYmVnaW46IFwiXFxcXGIoXFxcXGQrKFxcXFwuXFxcXGQqKT98XFxcXC5cXFxcZCspXCIsXG4gICAgcmVsZXZhbmNlOiAwXG4gIH07XG5cbiAgY29uc3QgQ09TX0tFWVdPUkRTID1cbiAgICAncHJvcGVydHkgcGFyYW1ldGVyIGNsYXNzIGNsYXNzbWV0aG9kIGNsaWVudG1ldGhvZCBleHRlbmRzIGFzIGJyZWFrICcgK1xuICAgICdjYXRjaCBjbG9zZSBjb250aW51ZSBkbyBkfDAgZWxzZSBlbHNlaWYgZm9yIGdvdG8gaGFsdCBoYW5nIGh8MCBpZiBqb2IgJyArXG4gICAgJ2p8MCBraWxsIGt8MCBsb2NrIGx8MCBtZXJnZSBuZXcgb3BlbiBxdWl0IHF8MCByZWFkIHJ8MCByZXR1cm4gc2V0IHN8MCAnICtcbiAgICAndGNvbW1pdCB0aHJvdyB0cm9sbGJhY2sgdHJ5IHRzdGFydCB1c2UgdmlldyB3aGlsZSB3cml0ZSB3fDAgeGVjdXRlIHh8MCAnICtcbiAgICAnemtpbGwgem5zcGFjZSB6biB6dHJhcCB6d3JpdGUgencgenpkdW1wIHp6d3JpdGUgcHJpbnQgemJyZWFrIHppbnNlcnQgJyArXG4gICAgJ3psb2FkIHpwcmludCB6cmVtb3ZlIHpzYXZlIHp6cHJpbnQgbXYgbXZjYWxsIG12Y3J0IG12ZGltIG12cHJpbnQgenF1aXQgJyArXG4gICAgJ3pzeW5jIGFzY2lpJztcblxuICAvLyByZWdpc3RlcmVkIGZ1bmN0aW9uIC0gbm8gbmVlZCBpbiB0aGVtIGR1ZSB0byBhbGwgZnVuY3Rpb25zIGFyZSBoaWdobGlnaHRlZCxcbiAgLy8gYnV0IEknbGwganVzdCBsZWF2ZSB0aGlzIGhlcmUuXG5cbiAgLy8gXCIkYml0XCIsIFwiJGJpdGNvdW50XCIsXG4gIC8vIFwiJGJpdGZpbmRcIiwgXCIkYml0bG9naWNcIiwgXCIkY2FzZVwiLCBcIiRjaGFyXCIsIFwiJGNsYXNzbWV0aG9kXCIsIFwiJGNsYXNzbmFtZVwiLFxuICAvLyBcIiRjb21waWxlXCIsIFwiJGRhdGFcIiwgXCIkZGVjaW1hbFwiLCBcIiRkb3VibGVcIiwgXCIkZXh0cmFjdFwiLCBcIiRmYWN0b3JcIixcbiAgLy8gXCIkZmluZFwiLCBcIiRmbnVtYmVyXCIsIFwiJGdldFwiLCBcIiRpbmNyZW1lbnRcIiwgXCIkaW51bWJlclwiLCBcIiRpc29iamVjdFwiLFxuICAvLyBcIiRpc3ZhbGlkZG91YmxlXCIsIFwiJGlzdmFsaWRudW1cIiwgXCIkanVzdGlmeVwiLCBcIiRsZW5ndGhcIiwgXCIkbGlzdFwiLFxuICAvLyBcIiRsaXN0YnVpbGRcIiwgXCIkbGlzdGRhdGFcIiwgXCIkbGlzdGZpbmRcIiwgXCIkbGlzdGZyb21zdHJpbmdcIiwgXCIkbGlzdGdldFwiLFxuICAvLyBcIiRsaXN0bGVuZ3RoXCIsIFwiJGxpc3RuZXh0XCIsIFwiJGxpc3RzYW1lXCIsIFwiJGxpc3R0b3N0cmluZ1wiLCBcIiRsaXN0dmFsaWRcIixcbiAgLy8gXCIkbG9jYXRlXCIsIFwiJG1hdGNoXCIsIFwiJG1ldGhvZFwiLCBcIiRuYW1lXCIsIFwiJG5jb252ZXJ0XCIsIFwiJG5leHRcIixcbiAgLy8gXCIkbm9ybWFsaXplXCIsIFwiJG5vd1wiLCBcIiRudW1iZXJcIiwgXCIkb3JkZXJcIiwgXCIkcGFyYW1ldGVyXCIsIFwiJHBpZWNlXCIsXG4gIC8vIFwiJHByZWZldGNob2ZmXCIsIFwiJHByZWZldGNob25cIiwgXCIkcHJvcGVydHlcIiwgXCIkcWxlbmd0aFwiLCBcIiRxc3Vic2NyaXB0XCIsXG4gIC8vIFwiJHF1ZXJ5XCIsIFwiJHJhbmRvbVwiLCBcIiRyZXBsYWNlXCIsIFwiJHJldmVyc2VcIiwgXCIkc2NvbnZlcnRcIiwgXCIkc2VsZWN0XCIsXG4gIC8vIFwiJHNvcnRiZWdpblwiLCBcIiRzb3J0ZW5kXCIsIFwiJHN0YWNrXCIsIFwiJHRleHRcIiwgXCIkdHJhbnNsYXRlXCIsIFwiJHZpZXdcIixcbiAgLy8gXCIkd2FzY2lpXCIsIFwiJHdjaGFyXCIsIFwiJHdleHRyYWN0XCIsIFwiJHdmaW5kXCIsIFwiJHdpc3dpZGVcIiwgXCIkd2xlbmd0aFwiLFxuICAvLyBcIiR3cmV2ZXJzZVwiLCBcIiR4ZWN1dGVcIiwgXCIkemFic1wiLCBcIiR6YXJjY29zXCIsIFwiJHphcmNzaW5cIiwgXCIkemFyY3RhblwiLFxuICAvLyBcIiR6Y29zXCIsIFwiJHpjb3RcIiwgXCIkemNzY1wiLCBcIiR6ZGF0ZVwiLCBcIiR6ZGF0ZWhcIiwgXCIkemRhdGV0aW1lXCIsXG4gIC8vIFwiJHpkYXRldGltZWhcIiwgXCIkemV4cFwiLCBcIiR6aGV4XCIsIFwiJHpsblwiLCBcIiR6bG9nXCIsIFwiJHpwb3dlclwiLCBcIiR6c2VjXCIsXG4gIC8vIFwiJHpzaW5cIiwgXCIkenNxclwiLCBcIiR6dGFuXCIsIFwiJHp0aW1lXCIsIFwiJHp0aW1laFwiLCBcIiR6Ym9vbGVhblwiLFxuICAvLyBcIiR6Y29udmVydFwiLCBcIiR6Y3JjXCIsIFwiJHpjeWNcIiwgXCIkemRhc2NpaVwiLCBcIiR6ZGNoYXJcIiwgXCIkemZcIixcbiAgLy8gXCIkemlzd2lkZVwiLCBcIiR6bGFzY2lpXCIsIFwiJHpsY2hhclwiLCBcIiR6bmFtZVwiLCBcIiR6cG9zaXRpb25cIiwgXCIkenFhc2NpaVwiLFxuICAvLyBcIiR6cWNoYXJcIiwgXCIkenNlYXJjaFwiLCBcIiR6c2Vla1wiLCBcIiR6c3RyaXBcIiwgXCIkendhc2NpaVwiLCBcIiR6d2NoYXJcIixcbiAgLy8gXCIkendpZHRoXCIsIFwiJHp3cGFja1wiLCBcIiR6d2JwYWNrXCIsIFwiJHp3dW5wYWNrXCIsIFwiJHp3YnVucGFja1wiLCBcIiR6emVua2FrdVwiLFxuICAvLyBcIiRjaGFuZ2VcIiwgXCIkbXZcIiwgXCIkbXZhdFwiLCBcIiRtdmZtdFwiLCBcIiRtdmZtdHNcIiwgXCIkbXZpY29udlwiLFxuICAvLyBcIiRtdmljb252c1wiLCBcIiRtdmlubWF0XCIsIFwiJG12bG92ZXJcIiwgXCIkbXZvY29udlwiLCBcIiRtdm9jb252c1wiLCBcIiRtdnJhaXNlXCIsXG4gIC8vIFwiJG12dHJhbnNcIiwgXCIkbXZ2XCIsIFwiJG12bmFtZVwiLCBcIiR6Yml0YW5kXCIsIFwiJHpiaXRjb3VudFwiLCBcIiR6Yml0ZmluZFwiLFxuICAvLyBcIiR6Yml0Z2V0XCIsIFwiJHpiaXRsZW5cIiwgXCIkemJpdG5vdFwiLCBcIiR6Yml0b3JcIiwgXCIkemJpdHNldFwiLCBcIiR6Yml0c3RyXCIsXG4gIC8vIFwiJHpiaXR4b3JcIiwgXCIkemluY3JlbWVudFwiLCBcIiR6bmV4dFwiLCBcIiR6b3JkZXJcIiwgXCIkenByZXZpb3VzXCIsIFwiJHpzb3J0XCIsXG4gIC8vIFwiZGV2aWNlXCIsIFwiJGVjb2RlXCIsIFwiJGVzdGFja1wiLCBcIiRldHJhcFwiLCBcIiRoYWx0XCIsIFwiJGhvcm9sb2dcIixcbiAgLy8gXCIkaW9cIiwgXCIkam9iXCIsIFwiJGtleVwiLCBcIiRuYW1lc3BhY2VcIiwgXCIkcHJpbmNpcGFsXCIsIFwiJHF1aXRcIiwgXCIkcm9sZXNcIixcbiAgLy8gXCIkc3RvcmFnZVwiLCBcIiRzeXN0ZW1cIiwgXCIkdGVzdFwiLCBcIiR0aGlzXCIsIFwiJHRsZXZlbFwiLCBcIiR1c2VybmFtZVwiLFxuICAvLyBcIiR4XCIsIFwiJHlcIiwgXCIkemFcIiwgXCIkemJcIiwgXCIkemNoaWxkXCIsIFwiJHplb2ZcIiwgXCIkemVvc1wiLCBcIiR6ZXJyb3JcIixcbiAgLy8gXCIkemhvcm9sb2dcIiwgXCIkemlvXCIsIFwiJHpqb2JcIiwgXCIkem1vZGVcIiwgXCIkem5zcGFjZVwiLCBcIiR6cGFyZW50XCIsIFwiJHpwaVwiLFxuICAvLyBcIiR6cG9zXCIsIFwiJHpyZWZlcmVuY2VcIiwgXCIkenN0b3JhZ2VcIiwgXCIkenRpbWVzdGFtcFwiLCBcIiR6dGltZXpvbmVcIixcbiAgLy8gXCIkenRyYXBcIiwgXCIkenZlcnNpb25cIlxuXG4gIHJldHVybiB7XG4gICAgbmFtZTogJ0NhY2jDqSBPYmplY3QgU2NyaXB0JyxcbiAgICBjYXNlX2luc2Vuc2l0aXZlOiB0cnVlLFxuICAgIGFsaWFzZXM6IFtcbiAgICAgIFwiY29zXCIsXG4gICAgICBcImNsc1wiXG4gICAgXSxcbiAgICBrZXl3b3JkczogQ09TX0tFWVdPUkRTLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBOVU1CRVJTLFxuICAgICAgU1RSSU5HUyxcbiAgICAgIGhsanMuQ19MSU5FX0NPTU1FTlRfTU9ERSxcbiAgICAgIGhsanMuQ19CTE9DS19DT01NRU5UX01PREUsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJjb21tZW50XCIsXG4gICAgICAgIGJlZ2luOiAvOy8sXG4gICAgICAgIGVuZDogXCIkXCIsXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIHsgLy8gRnVuY3Rpb25zIGFuZCB1c2VyLWRlZmluZWQgZnVuY3Rpb25zOiB3cml0ZSAkenRpbWUoNjAqNjAqMyksICQkbXlGdW5jKDEwKSwgJCReVmFsKDEpXG4gICAgICAgIGNsYXNzTmFtZTogXCJidWlsdF9pblwiLFxuICAgICAgICBiZWdpbjogLyg/OlxcJFxcJD98XFwuXFwuKVxcXj9bYS16QS1aXSsvXG4gICAgICB9LFxuICAgICAgeyAvLyBNYWNybyBjb21tYW5kOiBxdWl0ICQkJE9LXG4gICAgICAgIGNsYXNzTmFtZTogXCJidWlsdF9pblwiLFxuICAgICAgICBiZWdpbjogL1xcJFxcJFxcJFthLXpBLVpdKy9cbiAgICAgIH0sXG4gICAgICB7IC8vIFNwZWNpYWwgKGdsb2JhbCkgdmFyaWFibGVzOiB3cml0ZSAlcmVxdWVzdC5Db250ZW50OyBCdWlsdC1pbiBjbGFzc2VzOiAlTGlicmFyeS5JbnRlZ2VyXG4gICAgICAgIGNsYXNzTmFtZTogXCJidWlsdF9pblwiLFxuICAgICAgICBiZWdpbjogLyVbYS16XSsoPzpcXC5bYS16XSspKi9cbiAgICAgIH0sXG4gICAgICB7IC8vIEdsb2JhbCB2YXJpYWJsZTogc2V0IF5nbG9iYWxOYW1lID0gMTIgd3JpdGUgXmdsb2JhbE5hbWVcbiAgICAgICAgY2xhc3NOYW1lOiBcInN5bWJvbFwiLFxuICAgICAgICBiZWdpbjogL1xcXiU/W2EtekEtWl1bXFx3XSovXG4gICAgICB9LFxuICAgICAgeyAvLyBTb21lIGNvbnRyb2wgY29uc3RydWN0aW9uczogZG8gIyNjbGFzcyhQYWNrYWdlLkNsYXNzTmFtZSkuTWV0aG9kKCksICMjc3VwZXIoKVxuICAgICAgICBjbGFzc05hbWU6IFwia2V5d29yZFwiLFxuICAgICAgICBiZWdpbjogLyMjY2xhc3N8IyNzdXBlcnwjZGVmaW5lfCNkaW0vXG4gICAgICB9LFxuICAgICAgLy8gc3ViLWxhbmd1YWdlczogYXJlIG5vdCBmdWxseSBzdXBwb3J0ZWQgYnkgaGxqcyBieSAxMS8xNS8yMDE1XG4gICAgICAvLyBsZWZ0IGZvciB0aGUgZnV0dXJlIGltcGxlbWVudGF0aW9uLlxuICAgICAge1xuICAgICAgICBiZWdpbjogLyZzcWxcXCgvLFxuICAgICAgICBlbmQ6IC9cXCkvLFxuICAgICAgICBleGNsdWRlQmVnaW46IHRydWUsXG4gICAgICAgIGV4Y2x1ZGVFbmQ6IHRydWUsXG4gICAgICAgIHN1Ykxhbmd1YWdlOiBcInNxbFwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogLyYoanN8anNjcmlwdHxqYXZhc2NyaXB0KTwvLFxuICAgICAgICBlbmQ6IC8+LyxcbiAgICAgICAgZXhjbHVkZUJlZ2luOiB0cnVlLFxuICAgICAgICBleGNsdWRlRW5kOiB0cnVlLFxuICAgICAgICBzdWJMYW5ndWFnZTogXCJqYXZhc2NyaXB0XCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIC8vIHRoaXMgYnJha2VzIGZpcnN0IGFuZCBsYXN0IHRhZywgYnV0IHRoaXMgaXMgdGhlIG9ubHkgd2F5IHRvIGVtYmVkIGEgdmFsaWQgaHRtbFxuICAgICAgICBiZWdpbjogLyZodG1sPFxccyo8LyxcbiAgICAgICAgZW5kOiAvPlxccyo+LyxcbiAgICAgICAgc3ViTGFuZ3VhZ2U6IFwieG1sXCJcbiAgICAgIH1cbiAgICBdXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29zO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==