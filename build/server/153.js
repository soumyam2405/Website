exports.ids = [153];
exports.modules = {

/***/ "./node_modules/highlight.js/lib/languages/sas.js":
/*!********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/sas.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: SAS
Author: Mauricio Caceres <mauricio.caceres.bravo@gmail.com>
Description: Syntax Highlighting for SAS
*/

function sas(hljs) {
  // Data step and PROC SQL statements
  const SAS_KEYWORDS =
    'do if then else end until while ' +
    '' +
    'abort array attrib by call cards cards4 catname continue ' +
    'datalines datalines4 delete delim delimiter display dm drop ' +
    'endsas error file filename footnote format goto in infile ' +
    'informat input keep label leave length libname link list ' +
    'lostcard merge missing modify options output out page put ' +
    'redirect remove rename replace retain return select set skip ' +
    'startsas stop title update waitsas where window x systask ' +
    '' +
    'add and alter as cascade check create delete describe ' +
    'distinct drop foreign from group having index insert into in ' +
    'key like message modify msgtype not null on or order primary ' +
    'references reset restrict select set table unique update ' +
    'validate view where';

  // Built-in SAS functions
  const SAS_FUN =
    'abs|addr|airy|arcos|arsin|atan|attrc|attrn|band|' +
    'betainv|blshift|bnot|bor|brshift|bxor|byte|cdf|ceil|' +
    'cexist|cinv|close|cnonct|collate|compbl|compound|' +
    'compress|cos|cosh|css|curobs|cv|daccdb|daccdbsl|' +
    'daccsl|daccsyd|dacctab|dairy|date|datejul|datepart|' +
    'datetime|day|dclose|depdb|depdbsl|depdbsl|depsl|' +
    'depsl|depsyd|depsyd|deptab|deptab|dequote|dhms|dif|' +
    'digamma|dim|dinfo|dnum|dopen|doptname|doptnum|dread|' +
    'dropnote|dsname|erf|erfc|exist|exp|fappend|fclose|' +
    'fcol|fdelete|fetch|fetchobs|fexist|fget|fileexist|' +
    'filename|fileref|finfo|finv|fipname|fipnamel|' +
    'fipstate|floor|fnonct|fnote|fopen|foptname|foptnum|' +
    'fpoint|fpos|fput|fread|frewind|frlen|fsep|fuzz|' +
    'fwrite|gaminv|gamma|getoption|getvarc|getvarn|hbound|' +
    'hms|hosthelp|hour|ibessel|index|indexc|indexw|input|' +
    'inputc|inputn|int|intck|intnx|intrr|irr|jbessel|' +
    'juldate|kurtosis|lag|lbound|left|length|lgamma|' +
    'libname|libref|log|log10|log2|logpdf|logpmf|logsdf|' +
    'lowcase|max|mdy|mean|min|minute|mod|month|mopen|' +
    'mort|n|netpv|nmiss|normal|note|npv|open|ordinal|' +
    'pathname|pdf|peek|peekc|pmf|point|poisson|poke|' +
    'probbeta|probbnml|probchi|probf|probgam|probhypr|' +
    'probit|probnegb|probnorm|probt|put|putc|putn|qtr|' +
    'quote|ranbin|rancau|ranexp|rangam|range|rank|rannor|' +
    'ranpoi|rantbl|rantri|ranuni|repeat|resolve|reverse|' +
    'rewind|right|round|saving|scan|sdf|second|sign|' +
    'sin|sinh|skewness|soundex|spedis|sqrt|std|stderr|' +
    'stfips|stname|stnamel|substr|sum|symget|sysget|' +
    'sysmsg|sysprod|sysrc|system|tan|tanh|time|timepart|' +
    'tinv|tnonct|today|translate|tranwrd|trigamma|' +
    'trim|trimn|trunc|uniform|upcase|uss|var|varfmt|' +
    'varinfmt|varlabel|varlen|varname|varnum|varray|' +
    'varrayx|vartype|verify|vformat|vformatd|vformatdx|' +
    'vformatn|vformatnx|vformatw|vformatwx|vformatx|' +
    'vinarray|vinarrayx|vinformat|vinformatd|vinformatdx|' +
    'vinformatn|vinformatnx|vinformatw|vinformatwx|' +
    'vinformatx|vlabel|vlabelx|vlength|vlengthx|vname|' +
    'vnamex|vtype|vtypex|weekday|year|yyq|zipfips|zipname|' +
    'zipnamel|zipstate';

  // Built-in macro functions
  const SAS_MACRO_FUN =
    'bquote|nrbquote|cmpres|qcmpres|compstor|' +
    'datatyp|display|do|else|end|eval|global|goto|' +
    'if|index|input|keydef|label|left|length|let|' +
    'local|lowcase|macro|mend|nrbquote|nrquote|' +
    'nrstr|put|qcmpres|qleft|qlowcase|qscan|' +
    'qsubstr|qsysfunc|qtrim|quote|qupcase|scan|str|' +
    'substr|superq|syscall|sysevalf|sysexec|sysfunc|' +
    'sysget|syslput|sysprod|sysrc|sysrput|then|to|' +
    'trim|unquote|until|upcase|verify|while|window';

  return {
    name: 'SAS',
    aliases: [
      'sas',
      'SAS'
    ],
    case_insensitive: true, // SAS is case-insensitive
    keywords: {
      literal:
        'null missing _all_ _automatic_ _character_ _infile_ ' +
        '_n_ _name_ _null_ _numeric_ _user_ _webout_',
      meta:
        SAS_KEYWORDS
    },
    contains: [
      {
        // Distinct highlight for proc <proc>, data, run, quit
        className: 'keyword',
        begin: /^\s*(proc [\w\d_]+|data|run|quit)[\s;]/
      },
      {
        // Macro variables
        className: 'variable',
        begin: /&[a-zA-Z_&][a-zA-Z0-9_]*\.?/
      },
      {
        // Special emphasis for datalines|cards
        className: 'emphasis',
        begin: /^\s*datalines|cards.*;/,
        end: /^\s*;\s*$/
      },
      { // Built-in macro variables take precedence
        className: 'built_in',
        begin: '%(' + SAS_MACRO_FUN + ')'
      },
      {
        // User-defined macro functions highlighted after
        className: 'name',
        begin: /%[a-zA-Z_][a-zA-Z_0-9]*/
      },
      {
        className: 'meta',
        begin: '[^%](' + SAS_FUN + ')[\(]'
      },
      {
        className: 'string',
        variants: [
          hljs.APOS_STRING_MODE,
          hljs.QUOTE_STRING_MODE
        ]
      },
      hljs.COMMENT('\\*', ';'),
      hljs.C_BLOCK_COMMENT_MODE
    ]
  };
}

module.exports = sas;


/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvc2FzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0QyxtQkFBbUI7QUFDbkIsT0FBTztBQUNQLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6IjE1My5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5MYW5ndWFnZTogU0FTXG5BdXRob3I6IE1hdXJpY2lvIENhY2VyZXMgPG1hdXJpY2lvLmNhY2VyZXMuYnJhdm9AZ21haWwuY29tPlxuRGVzY3JpcHRpb246IFN5bnRheCBIaWdobGlnaHRpbmcgZm9yIFNBU1xuKi9cblxuZnVuY3Rpb24gc2FzKGhsanMpIHtcbiAgLy8gRGF0YSBzdGVwIGFuZCBQUk9DIFNRTCBzdGF0ZW1lbnRzXG4gIGNvbnN0IFNBU19LRVlXT1JEUyA9XG4gICAgJ2RvIGlmIHRoZW4gZWxzZSBlbmQgdW50aWwgd2hpbGUgJyArXG4gICAgJycgK1xuICAgICdhYm9ydCBhcnJheSBhdHRyaWIgYnkgY2FsbCBjYXJkcyBjYXJkczQgY2F0bmFtZSBjb250aW51ZSAnICtcbiAgICAnZGF0YWxpbmVzIGRhdGFsaW5lczQgZGVsZXRlIGRlbGltIGRlbGltaXRlciBkaXNwbGF5IGRtIGRyb3AgJyArXG4gICAgJ2VuZHNhcyBlcnJvciBmaWxlIGZpbGVuYW1lIGZvb3Rub3RlIGZvcm1hdCBnb3RvIGluIGluZmlsZSAnICtcbiAgICAnaW5mb3JtYXQgaW5wdXQga2VlcCBsYWJlbCBsZWF2ZSBsZW5ndGggbGlibmFtZSBsaW5rIGxpc3QgJyArXG4gICAgJ2xvc3RjYXJkIG1lcmdlIG1pc3NpbmcgbW9kaWZ5IG9wdGlvbnMgb3V0cHV0IG91dCBwYWdlIHB1dCAnICtcbiAgICAncmVkaXJlY3QgcmVtb3ZlIHJlbmFtZSByZXBsYWNlIHJldGFpbiByZXR1cm4gc2VsZWN0IHNldCBza2lwICcgK1xuICAgICdzdGFydHNhcyBzdG9wIHRpdGxlIHVwZGF0ZSB3YWl0c2FzIHdoZXJlIHdpbmRvdyB4IHN5c3Rhc2sgJyArXG4gICAgJycgK1xuICAgICdhZGQgYW5kIGFsdGVyIGFzIGNhc2NhZGUgY2hlY2sgY3JlYXRlIGRlbGV0ZSBkZXNjcmliZSAnICtcbiAgICAnZGlzdGluY3QgZHJvcCBmb3JlaWduIGZyb20gZ3JvdXAgaGF2aW5nIGluZGV4IGluc2VydCBpbnRvIGluICcgK1xuICAgICdrZXkgbGlrZSBtZXNzYWdlIG1vZGlmeSBtc2d0eXBlIG5vdCBudWxsIG9uIG9yIG9yZGVyIHByaW1hcnkgJyArXG4gICAgJ3JlZmVyZW5jZXMgcmVzZXQgcmVzdHJpY3Qgc2VsZWN0IHNldCB0YWJsZSB1bmlxdWUgdXBkYXRlICcgK1xuICAgICd2YWxpZGF0ZSB2aWV3IHdoZXJlJztcblxuICAvLyBCdWlsdC1pbiBTQVMgZnVuY3Rpb25zXG4gIGNvbnN0IFNBU19GVU4gPVxuICAgICdhYnN8YWRkcnxhaXJ5fGFyY29zfGFyc2lufGF0YW58YXR0cmN8YXR0cm58YmFuZHwnICtcbiAgICAnYmV0YWludnxibHNoaWZ0fGJub3R8Ym9yfGJyc2hpZnR8YnhvcnxieXRlfGNkZnxjZWlsfCcgK1xuICAgICdjZXhpc3R8Y2ludnxjbG9zZXxjbm9uY3R8Y29sbGF0ZXxjb21wYmx8Y29tcG91bmR8JyArXG4gICAgJ2NvbXByZXNzfGNvc3xjb3NofGNzc3xjdXJvYnN8Y3Z8ZGFjY2RifGRhY2NkYnNsfCcgK1xuICAgICdkYWNjc2x8ZGFjY3N5ZHxkYWNjdGFifGRhaXJ5fGRhdGV8ZGF0ZWp1bHxkYXRlcGFydHwnICtcbiAgICAnZGF0ZXRpbWV8ZGF5fGRjbG9zZXxkZXBkYnxkZXBkYnNsfGRlcGRic2x8ZGVwc2x8JyArXG4gICAgJ2RlcHNsfGRlcHN5ZHxkZXBzeWR8ZGVwdGFifGRlcHRhYnxkZXF1b3RlfGRobXN8ZGlmfCcgK1xuICAgICdkaWdhbW1hfGRpbXxkaW5mb3xkbnVtfGRvcGVufGRvcHRuYW1lfGRvcHRudW18ZHJlYWR8JyArXG4gICAgJ2Ryb3Bub3RlfGRzbmFtZXxlcmZ8ZXJmY3xleGlzdHxleHB8ZmFwcGVuZHxmY2xvc2V8JyArXG4gICAgJ2Zjb2x8ZmRlbGV0ZXxmZXRjaHxmZXRjaG9ic3xmZXhpc3R8ZmdldHxmaWxlZXhpc3R8JyArXG4gICAgJ2ZpbGVuYW1lfGZpbGVyZWZ8ZmluZm98ZmludnxmaXBuYW1lfGZpcG5hbWVsfCcgK1xuICAgICdmaXBzdGF0ZXxmbG9vcnxmbm9uY3R8Zm5vdGV8Zm9wZW58Zm9wdG5hbWV8Zm9wdG51bXwnICtcbiAgICAnZnBvaW50fGZwb3N8ZnB1dHxmcmVhZHxmcmV3aW5kfGZybGVufGZzZXB8ZnV6enwnICtcbiAgICAnZndyaXRlfGdhbWludnxnYW1tYXxnZXRvcHRpb258Z2V0dmFyY3xnZXR2YXJufGhib3VuZHwnICtcbiAgICAnaG1zfGhvc3RoZWxwfGhvdXJ8aWJlc3NlbHxpbmRleHxpbmRleGN8aW5kZXh3fGlucHV0fCcgK1xuICAgICdpbnB1dGN8aW5wdXRufGludHxpbnRja3xpbnRueHxpbnRycnxpcnJ8amJlc3NlbHwnICtcbiAgICAnanVsZGF0ZXxrdXJ0b3Npc3xsYWd8bGJvdW5kfGxlZnR8bGVuZ3RofGxnYW1tYXwnICtcbiAgICAnbGlibmFtZXxsaWJyZWZ8bG9nfGxvZzEwfGxvZzJ8bG9ncGRmfGxvZ3BtZnxsb2dzZGZ8JyArXG4gICAgJ2xvd2Nhc2V8bWF4fG1keXxtZWFufG1pbnxtaW51dGV8bW9kfG1vbnRofG1vcGVufCcgK1xuICAgICdtb3J0fG58bmV0cHZ8bm1pc3N8bm9ybWFsfG5vdGV8bnB2fG9wZW58b3JkaW5hbHwnICtcbiAgICAncGF0aG5hbWV8cGRmfHBlZWt8cGVla2N8cG1mfHBvaW50fHBvaXNzb258cG9rZXwnICtcbiAgICAncHJvYmJldGF8cHJvYmJubWx8cHJvYmNoaXxwcm9iZnxwcm9iZ2FtfHByb2JoeXByfCcgK1xuICAgICdwcm9iaXR8cHJvYm5lZ2J8cHJvYm5vcm18cHJvYnR8cHV0fHB1dGN8cHV0bnxxdHJ8JyArXG4gICAgJ3F1b3RlfHJhbmJpbnxyYW5jYXV8cmFuZXhwfHJhbmdhbXxyYW5nZXxyYW5rfHJhbm5vcnwnICtcbiAgICAncmFucG9pfHJhbnRibHxyYW50cml8cmFudW5pfHJlcGVhdHxyZXNvbHZlfHJldmVyc2V8JyArXG4gICAgJ3Jld2luZHxyaWdodHxyb3VuZHxzYXZpbmd8c2NhbnxzZGZ8c2Vjb25kfHNpZ258JyArXG4gICAgJ3NpbnxzaW5ofHNrZXduZXNzfHNvdW5kZXh8c3BlZGlzfHNxcnR8c3RkfHN0ZGVycnwnICtcbiAgICAnc3RmaXBzfHN0bmFtZXxzdG5hbWVsfHN1YnN0cnxzdW18c3ltZ2V0fHN5c2dldHwnICtcbiAgICAnc3lzbXNnfHN5c3Byb2R8c3lzcmN8c3lzdGVtfHRhbnx0YW5ofHRpbWV8dGltZXBhcnR8JyArXG4gICAgJ3RpbnZ8dG5vbmN0fHRvZGF5fHRyYW5zbGF0ZXx0cmFud3JkfHRyaWdhbW1hfCcgK1xuICAgICd0cmltfHRyaW1ufHRydW5jfHVuaWZvcm18dXBjYXNlfHVzc3x2YXJ8dmFyZm10fCcgK1xuICAgICd2YXJpbmZtdHx2YXJsYWJlbHx2YXJsZW58dmFybmFtZXx2YXJudW18dmFycmF5fCcgK1xuICAgICd2YXJyYXl4fHZhcnR5cGV8dmVyaWZ5fHZmb3JtYXR8dmZvcm1hdGR8dmZvcm1hdGR4fCcgK1xuICAgICd2Zm9ybWF0bnx2Zm9ybWF0bnh8dmZvcm1hdHd8dmZvcm1hdHd4fHZmb3JtYXR4fCcgK1xuICAgICd2aW5hcnJheXx2aW5hcnJheXh8dmluZm9ybWF0fHZpbmZvcm1hdGR8dmluZm9ybWF0ZHh8JyArXG4gICAgJ3ZpbmZvcm1hdG58dmluZm9ybWF0bnh8dmluZm9ybWF0d3x2aW5mb3JtYXR3eHwnICtcbiAgICAndmluZm9ybWF0eHx2bGFiZWx8dmxhYmVseHx2bGVuZ3RofHZsZW5ndGh4fHZuYW1lfCcgK1xuICAgICd2bmFtZXh8dnR5cGV8dnR5cGV4fHdlZWtkYXl8eWVhcnx5eXF8emlwZmlwc3x6aXBuYW1lfCcgK1xuICAgICd6aXBuYW1lbHx6aXBzdGF0ZSc7XG5cbiAgLy8gQnVpbHQtaW4gbWFjcm8gZnVuY3Rpb25zXG4gIGNvbnN0IFNBU19NQUNST19GVU4gPVxuICAgICdicXVvdGV8bnJicXVvdGV8Y21wcmVzfHFjbXByZXN8Y29tcHN0b3J8JyArXG4gICAgJ2RhdGF0eXB8ZGlzcGxheXxkb3xlbHNlfGVuZHxldmFsfGdsb2JhbHxnb3RvfCcgK1xuICAgICdpZnxpbmRleHxpbnB1dHxrZXlkZWZ8bGFiZWx8bGVmdHxsZW5ndGh8bGV0fCcgK1xuICAgICdsb2NhbHxsb3djYXNlfG1hY3JvfG1lbmR8bnJicXVvdGV8bnJxdW90ZXwnICtcbiAgICAnbnJzdHJ8cHV0fHFjbXByZXN8cWxlZnR8cWxvd2Nhc2V8cXNjYW58JyArXG4gICAgJ3FzdWJzdHJ8cXN5c2Z1bmN8cXRyaW18cXVvdGV8cXVwY2FzZXxzY2FufHN0cnwnICtcbiAgICAnc3Vic3RyfHN1cGVycXxzeXNjYWxsfHN5c2V2YWxmfHN5c2V4ZWN8c3lzZnVuY3wnICtcbiAgICAnc3lzZ2V0fHN5c2xwdXR8c3lzcHJvZHxzeXNyY3xzeXNycHV0fHRoZW58dG98JyArXG4gICAgJ3RyaW18dW5xdW90ZXx1bnRpbHx1cGNhc2V8dmVyaWZ5fHdoaWxlfHdpbmRvdyc7XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnU0FTJyxcbiAgICBhbGlhc2VzOiBbXG4gICAgICAnc2FzJyxcbiAgICAgICdTQVMnXG4gICAgXSxcbiAgICBjYXNlX2luc2Vuc2l0aXZlOiB0cnVlLCAvLyBTQVMgaXMgY2FzZS1pbnNlbnNpdGl2ZVxuICAgIGtleXdvcmRzOiB7XG4gICAgICBsaXRlcmFsOlxuICAgICAgICAnbnVsbCBtaXNzaW5nIF9hbGxfIF9hdXRvbWF0aWNfIF9jaGFyYWN0ZXJfIF9pbmZpbGVfICcgK1xuICAgICAgICAnX25fIF9uYW1lXyBfbnVsbF8gX251bWVyaWNfIF91c2VyXyBfd2Vib3V0XycsXG4gICAgICBtZXRhOlxuICAgICAgICBTQVNfS0VZV09SRFNcbiAgICB9LFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICB7XG4gICAgICAgIC8vIERpc3RpbmN0IGhpZ2hsaWdodCBmb3IgcHJvYyA8cHJvYz4sIGRhdGEsIHJ1biwgcXVpdFxuICAgICAgICBjbGFzc05hbWU6ICdrZXl3b3JkJyxcbiAgICAgICAgYmVnaW46IC9eXFxzKihwcm9jIFtcXHdcXGRfXSt8ZGF0YXxydW58cXVpdClbXFxzO10vXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAvLyBNYWNybyB2YXJpYWJsZXNcbiAgICAgICAgY2xhc3NOYW1lOiAndmFyaWFibGUnLFxuICAgICAgICBiZWdpbjogLyZbYS16QS1aXyZdW2EtekEtWjAtOV9dKlxcLj8vXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAvLyBTcGVjaWFsIGVtcGhhc2lzIGZvciBkYXRhbGluZXN8Y2FyZHNcbiAgICAgICAgY2xhc3NOYW1lOiAnZW1waGFzaXMnLFxuICAgICAgICBiZWdpbjogL15cXHMqZGF0YWxpbmVzfGNhcmRzLio7LyxcbiAgICAgICAgZW5kOiAvXlxccyo7XFxzKiQvXG4gICAgICB9LFxuICAgICAgeyAvLyBCdWlsdC1pbiBtYWNybyB2YXJpYWJsZXMgdGFrZSBwcmVjZWRlbmNlXG4gICAgICAgIGNsYXNzTmFtZTogJ2J1aWx0X2luJyxcbiAgICAgICAgYmVnaW46ICclKCcgKyBTQVNfTUFDUk9fRlVOICsgJyknXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAvLyBVc2VyLWRlZmluZWQgbWFjcm8gZnVuY3Rpb25zIGhpZ2hsaWdodGVkIGFmdGVyXG4gICAgICAgIGNsYXNzTmFtZTogJ25hbWUnLFxuICAgICAgICBiZWdpbjogLyVbYS16QS1aX11bYS16QS1aXzAtOV0qL1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgICAgIGJlZ2luOiAnW14lXSgnICsgU0FTX0ZVTiArICcpW1xcKF0nXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgIGhsanMuQVBPU19TVFJJTkdfTU9ERSxcbiAgICAgICAgICBobGpzLlFVT1RFX1NUUklOR19NT0RFXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBobGpzLkNPTU1FTlQoJ1xcXFwqJywgJzsnKSxcbiAgICAgIGhsanMuQ19CTE9DS19DT01NRU5UX01PREVcbiAgICBdXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2FzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==