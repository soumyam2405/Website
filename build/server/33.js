exports.ids = [33];
exports.modules = {

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

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvY29zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsT0FBTztBQUNQLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQLE9BQU8sdURBQXVEO0FBQzlEO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6IjMzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBDYWNow6kgT2JqZWN0IFNjcmlwdFxuQXV0aG9yOiBOaWtpdGEgU2F2Y2hlbmtvIDx6aXRyb3MubGFiQGdtYWlsLmNvbT5cbkNhdGVnb3J5OiBlbnRlcnByaXNlLCBzY3JpcHRpbmdcbldlYnNpdGU6IGh0dHBzOi8vY2Vkb2NzLmludGVyc3lzdGVtcy5jb20vbGF0ZXN0L2NzcC9kb2Nib29rL0RvY0Jvb2suVUkuUGFnZS5jbHNcbiovXG5cbi8qKiBAdHlwZSBMYW5ndWFnZUZuICovXG5mdW5jdGlvbiBjb3MoaGxqcykge1xuICBjb25zdCBTVFJJTkdTID0ge1xuICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgdmFyaWFudHM6IFt7XG4gICAgICBiZWdpbjogJ1wiJyxcbiAgICAgIGVuZDogJ1wiJyxcbiAgICAgIGNvbnRhaW5zOiBbeyAvLyBlc2NhcGVkXG4gICAgICAgIGJlZ2luOiBcIlxcXCJcXFwiXCIsXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfV1cbiAgICB9XVxuICB9O1xuXG4gIGNvbnN0IE5VTUJFUlMgPSB7XG4gICAgY2xhc3NOYW1lOiBcIm51bWJlclwiLFxuICAgIGJlZ2luOiBcIlxcXFxiKFxcXFxkKyhcXFxcLlxcXFxkKik/fFxcXFwuXFxcXGQrKVwiLFxuICAgIHJlbGV2YW5jZTogMFxuICB9O1xuXG4gIGNvbnN0IENPU19LRVlXT1JEUyA9XG4gICAgJ3Byb3BlcnR5IHBhcmFtZXRlciBjbGFzcyBjbGFzc21ldGhvZCBjbGllbnRtZXRob2QgZXh0ZW5kcyBhcyBicmVhayAnICtcbiAgICAnY2F0Y2ggY2xvc2UgY29udGludWUgZG8gZHwwIGVsc2UgZWxzZWlmIGZvciBnb3RvIGhhbHQgaGFuZyBofDAgaWYgam9iICcgK1xuICAgICdqfDAga2lsbCBrfDAgbG9jayBsfDAgbWVyZ2UgbmV3IG9wZW4gcXVpdCBxfDAgcmVhZCByfDAgcmV0dXJuIHNldCBzfDAgJyArXG4gICAgJ3Rjb21taXQgdGhyb3cgdHJvbGxiYWNrIHRyeSB0c3RhcnQgdXNlIHZpZXcgd2hpbGUgd3JpdGUgd3wwIHhlY3V0ZSB4fDAgJyArXG4gICAgJ3praWxsIHpuc3BhY2Ugem4genRyYXAgendyaXRlIHp3IHp6ZHVtcCB6endyaXRlIHByaW50IHpicmVhayB6aW5zZXJ0ICcgK1xuICAgICd6bG9hZCB6cHJpbnQgenJlbW92ZSB6c2F2ZSB6enByaW50IG12IG12Y2FsbCBtdmNydCBtdmRpbSBtdnByaW50IHpxdWl0ICcgK1xuICAgICd6c3luYyBhc2NpaSc7XG5cbiAgLy8gcmVnaXN0ZXJlZCBmdW5jdGlvbiAtIG5vIG5lZWQgaW4gdGhlbSBkdWUgdG8gYWxsIGZ1bmN0aW9ucyBhcmUgaGlnaGxpZ2h0ZWQsXG4gIC8vIGJ1dCBJJ2xsIGp1c3QgbGVhdmUgdGhpcyBoZXJlLlxuXG4gIC8vIFwiJGJpdFwiLCBcIiRiaXRjb3VudFwiLFxuICAvLyBcIiRiaXRmaW5kXCIsIFwiJGJpdGxvZ2ljXCIsIFwiJGNhc2VcIiwgXCIkY2hhclwiLCBcIiRjbGFzc21ldGhvZFwiLCBcIiRjbGFzc25hbWVcIixcbiAgLy8gXCIkY29tcGlsZVwiLCBcIiRkYXRhXCIsIFwiJGRlY2ltYWxcIiwgXCIkZG91YmxlXCIsIFwiJGV4dHJhY3RcIiwgXCIkZmFjdG9yXCIsXG4gIC8vIFwiJGZpbmRcIiwgXCIkZm51bWJlclwiLCBcIiRnZXRcIiwgXCIkaW5jcmVtZW50XCIsIFwiJGludW1iZXJcIiwgXCIkaXNvYmplY3RcIixcbiAgLy8gXCIkaXN2YWxpZGRvdWJsZVwiLCBcIiRpc3ZhbGlkbnVtXCIsIFwiJGp1c3RpZnlcIiwgXCIkbGVuZ3RoXCIsIFwiJGxpc3RcIixcbiAgLy8gXCIkbGlzdGJ1aWxkXCIsIFwiJGxpc3RkYXRhXCIsIFwiJGxpc3RmaW5kXCIsIFwiJGxpc3Rmcm9tc3RyaW5nXCIsIFwiJGxpc3RnZXRcIixcbiAgLy8gXCIkbGlzdGxlbmd0aFwiLCBcIiRsaXN0bmV4dFwiLCBcIiRsaXN0c2FtZVwiLCBcIiRsaXN0dG9zdHJpbmdcIiwgXCIkbGlzdHZhbGlkXCIsXG4gIC8vIFwiJGxvY2F0ZVwiLCBcIiRtYXRjaFwiLCBcIiRtZXRob2RcIiwgXCIkbmFtZVwiLCBcIiRuY29udmVydFwiLCBcIiRuZXh0XCIsXG4gIC8vIFwiJG5vcm1hbGl6ZVwiLCBcIiRub3dcIiwgXCIkbnVtYmVyXCIsIFwiJG9yZGVyXCIsIFwiJHBhcmFtZXRlclwiLCBcIiRwaWVjZVwiLFxuICAvLyBcIiRwcmVmZXRjaG9mZlwiLCBcIiRwcmVmZXRjaG9uXCIsIFwiJHByb3BlcnR5XCIsIFwiJHFsZW5ndGhcIiwgXCIkcXN1YnNjcmlwdFwiLFxuICAvLyBcIiRxdWVyeVwiLCBcIiRyYW5kb21cIiwgXCIkcmVwbGFjZVwiLCBcIiRyZXZlcnNlXCIsIFwiJHNjb252ZXJ0XCIsIFwiJHNlbGVjdFwiLFxuICAvLyBcIiRzb3J0YmVnaW5cIiwgXCIkc29ydGVuZFwiLCBcIiRzdGFja1wiLCBcIiR0ZXh0XCIsIFwiJHRyYW5zbGF0ZVwiLCBcIiR2aWV3XCIsXG4gIC8vIFwiJHdhc2NpaVwiLCBcIiR3Y2hhclwiLCBcIiR3ZXh0cmFjdFwiLCBcIiR3ZmluZFwiLCBcIiR3aXN3aWRlXCIsIFwiJHdsZW5ndGhcIixcbiAgLy8gXCIkd3JldmVyc2VcIiwgXCIkeGVjdXRlXCIsIFwiJHphYnNcIiwgXCIkemFyY2Nvc1wiLCBcIiR6YXJjc2luXCIsIFwiJHphcmN0YW5cIixcbiAgLy8gXCIkemNvc1wiLCBcIiR6Y290XCIsIFwiJHpjc2NcIiwgXCIkemRhdGVcIiwgXCIkemRhdGVoXCIsIFwiJHpkYXRldGltZVwiLFxuICAvLyBcIiR6ZGF0ZXRpbWVoXCIsIFwiJHpleHBcIiwgXCIkemhleFwiLCBcIiR6bG5cIiwgXCIkemxvZ1wiLCBcIiR6cG93ZXJcIiwgXCIkenNlY1wiLFxuICAvLyBcIiR6c2luXCIsIFwiJHpzcXJcIiwgXCIkenRhblwiLCBcIiR6dGltZVwiLCBcIiR6dGltZWhcIiwgXCIkemJvb2xlYW5cIixcbiAgLy8gXCIkemNvbnZlcnRcIiwgXCIkemNyY1wiLCBcIiR6Y3ljXCIsIFwiJHpkYXNjaWlcIiwgXCIkemRjaGFyXCIsIFwiJHpmXCIsXG4gIC8vIFwiJHppc3dpZGVcIiwgXCIkemxhc2NpaVwiLCBcIiR6bGNoYXJcIiwgXCIkem5hbWVcIiwgXCIkenBvc2l0aW9uXCIsIFwiJHpxYXNjaWlcIixcbiAgLy8gXCIkenFjaGFyXCIsIFwiJHpzZWFyY2hcIiwgXCIkenNlZWtcIiwgXCIkenN0cmlwXCIsIFwiJHp3YXNjaWlcIiwgXCIkendjaGFyXCIsXG4gIC8vIFwiJHp3aWR0aFwiLCBcIiR6d3BhY2tcIiwgXCIkendicGFja1wiLCBcIiR6d3VucGFja1wiLCBcIiR6d2J1bnBhY2tcIiwgXCIkenplbmtha3VcIixcbiAgLy8gXCIkY2hhbmdlXCIsIFwiJG12XCIsIFwiJG12YXRcIiwgXCIkbXZmbXRcIiwgXCIkbXZmbXRzXCIsIFwiJG12aWNvbnZcIixcbiAgLy8gXCIkbXZpY29udnNcIiwgXCIkbXZpbm1hdFwiLCBcIiRtdmxvdmVyXCIsIFwiJG12b2NvbnZcIiwgXCIkbXZvY29udnNcIiwgXCIkbXZyYWlzZVwiLFxuICAvLyBcIiRtdnRyYW5zXCIsIFwiJG12dlwiLCBcIiRtdm5hbWVcIiwgXCIkemJpdGFuZFwiLCBcIiR6Yml0Y291bnRcIiwgXCIkemJpdGZpbmRcIixcbiAgLy8gXCIkemJpdGdldFwiLCBcIiR6Yml0bGVuXCIsIFwiJHpiaXRub3RcIiwgXCIkemJpdG9yXCIsIFwiJHpiaXRzZXRcIiwgXCIkemJpdHN0clwiLFxuICAvLyBcIiR6Yml0eG9yXCIsIFwiJHppbmNyZW1lbnRcIiwgXCIkem5leHRcIiwgXCIkem9yZGVyXCIsIFwiJHpwcmV2aW91c1wiLCBcIiR6c29ydFwiLFxuICAvLyBcImRldmljZVwiLCBcIiRlY29kZVwiLCBcIiRlc3RhY2tcIiwgXCIkZXRyYXBcIiwgXCIkaGFsdFwiLCBcIiRob3JvbG9nXCIsXG4gIC8vIFwiJGlvXCIsIFwiJGpvYlwiLCBcIiRrZXlcIiwgXCIkbmFtZXNwYWNlXCIsIFwiJHByaW5jaXBhbFwiLCBcIiRxdWl0XCIsIFwiJHJvbGVzXCIsXG4gIC8vIFwiJHN0b3JhZ2VcIiwgXCIkc3lzdGVtXCIsIFwiJHRlc3RcIiwgXCIkdGhpc1wiLCBcIiR0bGV2ZWxcIiwgXCIkdXNlcm5hbWVcIixcbiAgLy8gXCIkeFwiLCBcIiR5XCIsIFwiJHphXCIsIFwiJHpiXCIsIFwiJHpjaGlsZFwiLCBcIiR6ZW9mXCIsIFwiJHplb3NcIiwgXCIkemVycm9yXCIsXG4gIC8vIFwiJHpob3JvbG9nXCIsIFwiJHppb1wiLCBcIiR6am9iXCIsIFwiJHptb2RlXCIsIFwiJHpuc3BhY2VcIiwgXCIkenBhcmVudFwiLCBcIiR6cGlcIixcbiAgLy8gXCIkenBvc1wiLCBcIiR6cmVmZXJlbmNlXCIsIFwiJHpzdG9yYWdlXCIsIFwiJHp0aW1lc3RhbXBcIiwgXCIkenRpbWV6b25lXCIsXG4gIC8vIFwiJHp0cmFwXCIsIFwiJHp2ZXJzaW9uXCJcblxuICByZXR1cm4ge1xuICAgIG5hbWU6ICdDYWNow6kgT2JqZWN0IFNjcmlwdCcsXG4gICAgY2FzZV9pbnNlbnNpdGl2ZTogdHJ1ZSxcbiAgICBhbGlhc2VzOiBbXG4gICAgICBcImNvc1wiLFxuICAgICAgXCJjbHNcIlxuICAgIF0sXG4gICAga2V5d29yZHM6IENPU19LRVlXT1JEUyxcbiAgICBjb250YWluczogW1xuICAgICAgTlVNQkVSUyxcbiAgICAgIFNUUklOR1MsXG4gICAgICBobGpzLkNfTElORV9DT01NRU5UX01PREUsXG4gICAgICBobGpzLkNfQkxPQ0tfQ09NTUVOVF9NT0RFLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6IFwiY29tbWVudFwiLFxuICAgICAgICBiZWdpbjogLzsvLFxuICAgICAgICBlbmQ6IFwiJFwiLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICB7IC8vIEZ1bmN0aW9ucyBhbmQgdXNlci1kZWZpbmVkIGZ1bmN0aW9uczogd3JpdGUgJHp0aW1lKDYwKjYwKjMpLCAkJG15RnVuYygxMCksICQkXlZhbCgxKVxuICAgICAgICBjbGFzc05hbWU6IFwiYnVpbHRfaW5cIixcbiAgICAgICAgYmVnaW46IC8oPzpcXCRcXCQ/fFxcLlxcLilcXF4/W2EtekEtWl0rL1xuICAgICAgfSxcbiAgICAgIHsgLy8gTWFjcm8gY29tbWFuZDogcXVpdCAkJCRPS1xuICAgICAgICBjbGFzc05hbWU6IFwiYnVpbHRfaW5cIixcbiAgICAgICAgYmVnaW46IC9cXCRcXCRcXCRbYS16QS1aXSsvXG4gICAgICB9LFxuICAgICAgeyAvLyBTcGVjaWFsIChnbG9iYWwpIHZhcmlhYmxlczogd3JpdGUgJXJlcXVlc3QuQ29udGVudDsgQnVpbHQtaW4gY2xhc3NlczogJUxpYnJhcnkuSW50ZWdlclxuICAgICAgICBjbGFzc05hbWU6IFwiYnVpbHRfaW5cIixcbiAgICAgICAgYmVnaW46IC8lW2Etel0rKD86XFwuW2Etel0rKSovXG4gICAgICB9LFxuICAgICAgeyAvLyBHbG9iYWwgdmFyaWFibGU6IHNldCBeZ2xvYmFsTmFtZSA9IDEyIHdyaXRlIF5nbG9iYWxOYW1lXG4gICAgICAgIGNsYXNzTmFtZTogXCJzeW1ib2xcIixcbiAgICAgICAgYmVnaW46IC9cXF4lP1thLXpBLVpdW1xcd10qL1xuICAgICAgfSxcbiAgICAgIHsgLy8gU29tZSBjb250cm9sIGNvbnN0cnVjdGlvbnM6IGRvICMjY2xhc3MoUGFja2FnZS5DbGFzc05hbWUpLk1ldGhvZCgpLCAjI3N1cGVyKClcbiAgICAgICAgY2xhc3NOYW1lOiBcImtleXdvcmRcIixcbiAgICAgICAgYmVnaW46IC8jI2NsYXNzfCMjc3VwZXJ8I2RlZmluZXwjZGltL1xuICAgICAgfSxcbiAgICAgIC8vIHN1Yi1sYW5ndWFnZXM6IGFyZSBub3QgZnVsbHkgc3VwcG9ydGVkIGJ5IGhsanMgYnkgMTEvMTUvMjAxNVxuICAgICAgLy8gbGVmdCBmb3IgdGhlIGZ1dHVyZSBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHtcbiAgICAgICAgYmVnaW46IC8mc3FsXFwoLyxcbiAgICAgICAgZW5kOiAvXFwpLyxcbiAgICAgICAgZXhjbHVkZUJlZ2luOiB0cnVlLFxuICAgICAgICBleGNsdWRlRW5kOiB0cnVlLFxuICAgICAgICBzdWJMYW5ndWFnZTogXCJzcWxcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IC8mKGpzfGpzY3JpcHR8amF2YXNjcmlwdCk8LyxcbiAgICAgICAgZW5kOiAvPi8sXG4gICAgICAgIGV4Y2x1ZGVCZWdpbjogdHJ1ZSxcbiAgICAgICAgZXhjbHVkZUVuZDogdHJ1ZSxcbiAgICAgICAgc3ViTGFuZ3VhZ2U6IFwiamF2YXNjcmlwdFwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAvLyB0aGlzIGJyYWtlcyBmaXJzdCBhbmQgbGFzdCB0YWcsIGJ1dCB0aGlzIGlzIHRoZSBvbmx5IHdheSB0byBlbWJlZCBhIHZhbGlkIGh0bWxcbiAgICAgICAgYmVnaW46IC8maHRtbDxcXHMqPC8sXG4gICAgICAgIGVuZDogLz5cXHMqPi8sXG4gICAgICAgIHN1Ykxhbmd1YWdlOiBcInhtbFwiXG4gICAgICB9XG4gICAgXVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvcztcbiJdLCJzb3VyY2VSb290IjoiIn0=