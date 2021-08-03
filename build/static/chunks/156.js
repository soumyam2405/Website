(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[156],{

/***/ "./node_modules/highlight.js/lib/languages/scheme.js":
/*!***********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/scheme.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Scheme
Description: Scheme is a programming language in the Lisp family.
             (keywords based on http://community.schemewiki.org/?scheme-keywords)
Author: JP Verkamp <me@jverkamp.com>
Contributors: Ivan Sagalaev <maniac@softwaremaniacs.org>
Origin: clojure.js
Website: http://community.schemewiki.org/?what-is-scheme
Category: lisp
*/

function scheme(hljs) {
  const SCHEME_IDENT_RE = '[^\\(\\)\\[\\]\\{\\}",\'`;#|\\\\\\s]+';
  const SCHEME_SIMPLE_NUMBER_RE = '(-|\\+)?\\d+([./]\\d+)?';
  const SCHEME_COMPLEX_NUMBER_RE = SCHEME_SIMPLE_NUMBER_RE + '[+\\-]' + SCHEME_SIMPLE_NUMBER_RE + 'i';
  const KEYWORDS = {
    $pattern: SCHEME_IDENT_RE,
    'builtin-name':
      'case-lambda call/cc class define-class exit-handler field import ' +
      'inherit init-field interface let*-values let-values let/ec mixin ' +
      'opt-lambda override protect provide public rename require ' +
      'require-for-syntax syntax syntax-case syntax-error unit/sig unless ' +
      'when with-syntax and begin call-with-current-continuation ' +
      'call-with-input-file call-with-output-file case cond define ' +
      'define-syntax delay do dynamic-wind else for-each if lambda let let* ' +
      'let-syntax letrec letrec-syntax map or syntax-rules \' * + , ,@ - ... / ' +
      '; < <= = => > >= ` abs acos angle append apply asin assoc assq assv atan ' +
      'boolean? caar cadr call-with-input-file call-with-output-file ' +
      'call-with-values car cdddar cddddr cdr ceiling char->integer ' +
      'char-alphabetic? char-ci<=? char-ci<? char-ci=? char-ci>=? char-ci>? ' +
      'char-downcase char-lower-case? char-numeric? char-ready? char-upcase ' +
      'char-upper-case? char-whitespace? char<=? char<? char=? char>=? char>? ' +
      'char? close-input-port close-output-port complex? cons cos ' +
      'current-input-port current-output-port denominator display eof-object? ' +
      'eq? equal? eqv? eval even? exact->inexact exact? exp expt floor ' +
      'force gcd imag-part inexact->exact inexact? input-port? integer->char ' +
      'integer? interaction-environment lcm length list list->string ' +
      'list->vector list-ref list-tail list? load log magnitude make-polar ' +
      'make-rectangular make-string make-vector max member memq memv min ' +
      'modulo negative? newline not null-environment null? number->string ' +
      'number? numerator odd? open-input-file open-output-file output-port? ' +
      'pair? peek-char port? positive? procedure? quasiquote quote quotient ' +
      'rational? rationalize read read-char real-part real? remainder reverse ' +
      'round scheme-report-environment set! set-car! set-cdr! sin sqrt string ' +
      'string->list string->number string->symbol string-append string-ci<=? ' +
      'string-ci<? string-ci=? string-ci>=? string-ci>? string-copy ' +
      'string-fill! string-length string-ref string-set! string<=? string<? ' +
      'string=? string>=? string>? string? substring symbol->string symbol? ' +
      'tan transcript-off transcript-on truncate values vector ' +
      'vector->list vector-fill! vector-length vector-ref vector-set! ' +
      'with-input-from-file with-output-to-file write write-char zero?'
  };

  const LITERAL = {
    className: 'literal',
    begin: '(#t|#f|#\\\\' + SCHEME_IDENT_RE + '|#\\\\.)'
  };

  const NUMBER = {
    className: 'number',
    variants: [
      {
        begin: SCHEME_SIMPLE_NUMBER_RE,
        relevance: 0
      },
      {
        begin: SCHEME_COMPLEX_NUMBER_RE,
        relevance: 0
      },
      {
        begin: '#b[0-1]+(/[0-1]+)?'
      },
      {
        begin: '#o[0-7]+(/[0-7]+)?'
      },
      {
        begin: '#x[0-9a-f]+(/[0-9a-f]+)?'
      }
    ]
  };

  const STRING = hljs.QUOTE_STRING_MODE;

  const COMMENT_MODES = [
    hljs.COMMENT(
      ';',
      '$',
      {
        relevance: 0
      }
    ),
    hljs.COMMENT('#\\|', '\\|#')
  ];

  const IDENT = {
    begin: SCHEME_IDENT_RE,
    relevance: 0
  };

  const QUOTED_IDENT = {
    className: 'symbol',
    begin: '\'' + SCHEME_IDENT_RE
  };

  const BODY = {
    endsWithParent: true,
    relevance: 0
  };

  const QUOTED_LIST = {
    variants: [
      {
        begin: /'/
      },
      {
        begin: '`'
      }
    ],
    contains: [
      {
        begin: '\\(',
        end: '\\)',
        contains: [
          'self',
          LITERAL,
          STRING,
          NUMBER,
          IDENT,
          QUOTED_IDENT
        ]
      }
    ]
  };

  const NAME = {
    className: 'name',
    relevance: 0,
    begin: SCHEME_IDENT_RE,
    keywords: KEYWORDS
  };

  const LAMBDA = {
    begin: /lambda/,
    endsWithParent: true,
    returnBegin: true,
    contains: [
      NAME,
      {
        endsParent: true,
        variants: [
          {
            begin: /\(/,
            end: /\)/
          },
          {
            begin: /\[/,
            end: /\]/
          }
        ],
        contains: [ IDENT ]
      }
    ]
  };

  const LIST = {
    variants: [
      {
        begin: '\\(',
        end: '\\)'
      },
      {
        begin: '\\[',
        end: '\\]'
      }
    ],
    contains: [
      LAMBDA,
      NAME,
      BODY
    ]
  };

  BODY.contains = [
    LITERAL,
    NUMBER,
    STRING,
    IDENT,
    QUOTED_IDENT,
    QUOTED_LIST,
    LIST
  ].concat(COMMENT_MODES);

  return {
    name: 'Scheme',
    illegal: /\S/,
    contains: [
      hljs.SHEBANG(),
      NUMBER,
      STRING,
      QUOTED_IDENT,
      QUOTED_LIST,
      LIST
    ].concat(COMMENT_MODES)
  };
}

module.exports = scheme;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3NjaGVtZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRDQUE0QyxHQUFHLE1BQU07QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoic3RhdGljL2NodW5rcy8xNTYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuTGFuZ3VhZ2U6IFNjaGVtZVxuRGVzY3JpcHRpb246IFNjaGVtZSBpcyBhIHByb2dyYW1taW5nIGxhbmd1YWdlIGluIHRoZSBMaXNwIGZhbWlseS5cbiAgICAgICAgICAgICAoa2V5d29yZHMgYmFzZWQgb24gaHR0cDovL2NvbW11bml0eS5zY2hlbWV3aWtpLm9yZy8/c2NoZW1lLWtleXdvcmRzKVxuQXV0aG9yOiBKUCBWZXJrYW1wIDxtZUBqdmVya2FtcC5jb20+XG5Db250cmlidXRvcnM6IEl2YW4gU2FnYWxhZXYgPG1hbmlhY0Bzb2Z0d2FyZW1hbmlhY3Mub3JnPlxuT3JpZ2luOiBjbG9qdXJlLmpzXG5XZWJzaXRlOiBodHRwOi8vY29tbXVuaXR5LnNjaGVtZXdpa2kub3JnLz93aGF0LWlzLXNjaGVtZVxuQ2F0ZWdvcnk6IGxpc3BcbiovXG5cbmZ1bmN0aW9uIHNjaGVtZShobGpzKSB7XG4gIGNvbnN0IFNDSEVNRV9JREVOVF9SRSA9ICdbXlxcXFwoXFxcXClcXFxcW1xcXFxdXFxcXHtcXFxcfVwiLFxcJ2A7I3xcXFxcXFxcXFxcXFxzXSsnO1xuICBjb25zdCBTQ0hFTUVfU0lNUExFX05VTUJFUl9SRSA9ICcoLXxcXFxcKyk/XFxcXGQrKFsuL11cXFxcZCspPyc7XG4gIGNvbnN0IFNDSEVNRV9DT01QTEVYX05VTUJFUl9SRSA9IFNDSEVNRV9TSU1QTEVfTlVNQkVSX1JFICsgJ1srXFxcXC1dJyArIFNDSEVNRV9TSU1QTEVfTlVNQkVSX1JFICsgJ2knO1xuICBjb25zdCBLRVlXT1JEUyA9IHtcbiAgICAkcGF0dGVybjogU0NIRU1FX0lERU5UX1JFLFxuICAgICdidWlsdGluLW5hbWUnOlxuICAgICAgJ2Nhc2UtbGFtYmRhIGNhbGwvY2MgY2xhc3MgZGVmaW5lLWNsYXNzIGV4aXQtaGFuZGxlciBmaWVsZCBpbXBvcnQgJyArXG4gICAgICAnaW5oZXJpdCBpbml0LWZpZWxkIGludGVyZmFjZSBsZXQqLXZhbHVlcyBsZXQtdmFsdWVzIGxldC9lYyBtaXhpbiAnICtcbiAgICAgICdvcHQtbGFtYmRhIG92ZXJyaWRlIHByb3RlY3QgcHJvdmlkZSBwdWJsaWMgcmVuYW1lIHJlcXVpcmUgJyArXG4gICAgICAncmVxdWlyZS1mb3Itc3ludGF4IHN5bnRheCBzeW50YXgtY2FzZSBzeW50YXgtZXJyb3IgdW5pdC9zaWcgdW5sZXNzICcgK1xuICAgICAgJ3doZW4gd2l0aC1zeW50YXggYW5kIGJlZ2luIGNhbGwtd2l0aC1jdXJyZW50LWNvbnRpbnVhdGlvbiAnICtcbiAgICAgICdjYWxsLXdpdGgtaW5wdXQtZmlsZSBjYWxsLXdpdGgtb3V0cHV0LWZpbGUgY2FzZSBjb25kIGRlZmluZSAnICtcbiAgICAgICdkZWZpbmUtc3ludGF4IGRlbGF5IGRvIGR5bmFtaWMtd2luZCBlbHNlIGZvci1lYWNoIGlmIGxhbWJkYSBsZXQgbGV0KiAnICtcbiAgICAgICdsZXQtc3ludGF4IGxldHJlYyBsZXRyZWMtc3ludGF4IG1hcCBvciBzeW50YXgtcnVsZXMgXFwnICogKyAsICxAIC0gLi4uIC8gJyArXG4gICAgICAnOyA8IDw9ID0gPT4gPiA+PSBgIGFicyBhY29zIGFuZ2xlIGFwcGVuZCBhcHBseSBhc2luIGFzc29jIGFzc3EgYXNzdiBhdGFuICcgK1xuICAgICAgJ2Jvb2xlYW4/IGNhYXIgY2FkciBjYWxsLXdpdGgtaW5wdXQtZmlsZSBjYWxsLXdpdGgtb3V0cHV0LWZpbGUgJyArXG4gICAgICAnY2FsbC13aXRoLXZhbHVlcyBjYXIgY2RkZGFyIGNkZGRkciBjZHIgY2VpbGluZyBjaGFyLT5pbnRlZ2VyICcgK1xuICAgICAgJ2NoYXItYWxwaGFiZXRpYz8gY2hhci1jaTw9PyBjaGFyLWNpPD8gY2hhci1jaT0/IGNoYXItY2k+PT8gY2hhci1jaT4/ICcgK1xuICAgICAgJ2NoYXItZG93bmNhc2UgY2hhci1sb3dlci1jYXNlPyBjaGFyLW51bWVyaWM/IGNoYXItcmVhZHk/IGNoYXItdXBjYXNlICcgK1xuICAgICAgJ2NoYXItdXBwZXItY2FzZT8gY2hhci13aGl0ZXNwYWNlPyBjaGFyPD0/IGNoYXI8PyBjaGFyPT8gY2hhcj49PyBjaGFyPj8gJyArXG4gICAgICAnY2hhcj8gY2xvc2UtaW5wdXQtcG9ydCBjbG9zZS1vdXRwdXQtcG9ydCBjb21wbGV4PyBjb25zIGNvcyAnICtcbiAgICAgICdjdXJyZW50LWlucHV0LXBvcnQgY3VycmVudC1vdXRwdXQtcG9ydCBkZW5vbWluYXRvciBkaXNwbGF5IGVvZi1vYmplY3Q/ICcgK1xuICAgICAgJ2VxPyBlcXVhbD8gZXF2PyBldmFsIGV2ZW4/IGV4YWN0LT5pbmV4YWN0IGV4YWN0PyBleHAgZXhwdCBmbG9vciAnICtcbiAgICAgICdmb3JjZSBnY2QgaW1hZy1wYXJ0IGluZXhhY3QtPmV4YWN0IGluZXhhY3Q/IGlucHV0LXBvcnQ/IGludGVnZXItPmNoYXIgJyArXG4gICAgICAnaW50ZWdlcj8gaW50ZXJhY3Rpb24tZW52aXJvbm1lbnQgbGNtIGxlbmd0aCBsaXN0IGxpc3QtPnN0cmluZyAnICtcbiAgICAgICdsaXN0LT52ZWN0b3IgbGlzdC1yZWYgbGlzdC10YWlsIGxpc3Q/IGxvYWQgbG9nIG1hZ25pdHVkZSBtYWtlLXBvbGFyICcgK1xuICAgICAgJ21ha2UtcmVjdGFuZ3VsYXIgbWFrZS1zdHJpbmcgbWFrZS12ZWN0b3IgbWF4IG1lbWJlciBtZW1xIG1lbXYgbWluICcgK1xuICAgICAgJ21vZHVsbyBuZWdhdGl2ZT8gbmV3bGluZSBub3QgbnVsbC1lbnZpcm9ubWVudCBudWxsPyBudW1iZXItPnN0cmluZyAnICtcbiAgICAgICdudW1iZXI/IG51bWVyYXRvciBvZGQ/IG9wZW4taW5wdXQtZmlsZSBvcGVuLW91dHB1dC1maWxlIG91dHB1dC1wb3J0PyAnICtcbiAgICAgICdwYWlyPyBwZWVrLWNoYXIgcG9ydD8gcG9zaXRpdmU/IHByb2NlZHVyZT8gcXVhc2lxdW90ZSBxdW90ZSBxdW90aWVudCAnICtcbiAgICAgICdyYXRpb25hbD8gcmF0aW9uYWxpemUgcmVhZCByZWFkLWNoYXIgcmVhbC1wYXJ0IHJlYWw/IHJlbWFpbmRlciByZXZlcnNlICcgK1xuICAgICAgJ3JvdW5kIHNjaGVtZS1yZXBvcnQtZW52aXJvbm1lbnQgc2V0ISBzZXQtY2FyISBzZXQtY2RyISBzaW4gc3FydCBzdHJpbmcgJyArXG4gICAgICAnc3RyaW5nLT5saXN0IHN0cmluZy0+bnVtYmVyIHN0cmluZy0+c3ltYm9sIHN0cmluZy1hcHBlbmQgc3RyaW5nLWNpPD0/ICcgK1xuICAgICAgJ3N0cmluZy1jaTw/IHN0cmluZy1jaT0/IHN0cmluZy1jaT49PyBzdHJpbmctY2k+PyBzdHJpbmctY29weSAnICtcbiAgICAgICdzdHJpbmctZmlsbCEgc3RyaW5nLWxlbmd0aCBzdHJpbmctcmVmIHN0cmluZy1zZXQhIHN0cmluZzw9PyBzdHJpbmc8PyAnICtcbiAgICAgICdzdHJpbmc9PyBzdHJpbmc+PT8gc3RyaW5nPj8gc3RyaW5nPyBzdWJzdHJpbmcgc3ltYm9sLT5zdHJpbmcgc3ltYm9sPyAnICtcbiAgICAgICd0YW4gdHJhbnNjcmlwdC1vZmYgdHJhbnNjcmlwdC1vbiB0cnVuY2F0ZSB2YWx1ZXMgdmVjdG9yICcgK1xuICAgICAgJ3ZlY3Rvci0+bGlzdCB2ZWN0b3ItZmlsbCEgdmVjdG9yLWxlbmd0aCB2ZWN0b3ItcmVmIHZlY3Rvci1zZXQhICcgK1xuICAgICAgJ3dpdGgtaW5wdXQtZnJvbS1maWxlIHdpdGgtb3V0cHV0LXRvLWZpbGUgd3JpdGUgd3JpdGUtY2hhciB6ZXJvPydcbiAgfTtcblxuICBjb25zdCBMSVRFUkFMID0ge1xuICAgIGNsYXNzTmFtZTogJ2xpdGVyYWwnLFxuICAgIGJlZ2luOiAnKCN0fCNmfCNcXFxcXFxcXCcgKyBTQ0hFTUVfSURFTlRfUkUgKyAnfCNcXFxcXFxcXC4pJ1xuICB9O1xuXG4gIGNvbnN0IE5VTUJFUiA9IHtcbiAgICBjbGFzc05hbWU6ICdudW1iZXInLFxuICAgIHZhcmlhbnRzOiBbXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiBTQ0hFTUVfU0lNUExFX05VTUJFUl9SRSxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogU0NIRU1FX0NPTVBMRVhfTlVNQkVSX1JFLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnI2JbMC0xXSsoL1swLTFdKyk/J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICcjb1swLTddKygvWzAtN10rKT8nXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogJyN4WzAtOWEtZl0rKC9bMC05YS1mXSspPydcbiAgICAgIH1cbiAgICBdXG4gIH07XG5cbiAgY29uc3QgU1RSSU5HID0gaGxqcy5RVU9URV9TVFJJTkdfTU9ERTtcblxuICBjb25zdCBDT01NRU5UX01PREVTID0gW1xuICAgIGhsanMuQ09NTUVOVChcbiAgICAgICc7JyxcbiAgICAgICckJyxcbiAgICAgIHtcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9XG4gICAgKSxcbiAgICBobGpzLkNPTU1FTlQoJyNcXFxcfCcsICdcXFxcfCMnKVxuICBdO1xuXG4gIGNvbnN0IElERU5UID0ge1xuICAgIGJlZ2luOiBTQ0hFTUVfSURFTlRfUkUsXG4gICAgcmVsZXZhbmNlOiAwXG4gIH07XG5cbiAgY29uc3QgUVVPVEVEX0lERU5UID0ge1xuICAgIGNsYXNzTmFtZTogJ3N5bWJvbCcsXG4gICAgYmVnaW46ICdcXCcnICsgU0NIRU1FX0lERU5UX1JFXG4gIH07XG5cbiAgY29uc3QgQk9EWSA9IHtcbiAgICBlbmRzV2l0aFBhcmVudDogdHJ1ZSxcbiAgICByZWxldmFuY2U6IDBcbiAgfTtcblxuICBjb25zdCBRVU9URURfTElTVCA9IHtcbiAgICB2YXJpYW50czogW1xuICAgICAge1xuICAgICAgICBiZWdpbjogLycvXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogJ2AnXG4gICAgICB9XG4gICAgXSxcbiAgICBjb250YWluczogW1xuICAgICAge1xuICAgICAgICBiZWdpbjogJ1xcXFwoJyxcbiAgICAgICAgZW5kOiAnXFxcXCknLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICdzZWxmJyxcbiAgICAgICAgICBMSVRFUkFMLFxuICAgICAgICAgIFNUUklORyxcbiAgICAgICAgICBOVU1CRVIsXG4gICAgICAgICAgSURFTlQsXG4gICAgICAgICAgUVVPVEVEX0lERU5UXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH07XG5cbiAgY29uc3QgTkFNRSA9IHtcbiAgICBjbGFzc05hbWU6ICduYW1lJyxcbiAgICByZWxldmFuY2U6IDAsXG4gICAgYmVnaW46IFNDSEVNRV9JREVOVF9SRSxcbiAgICBrZXl3b3JkczogS0VZV09SRFNcbiAgfTtcblxuICBjb25zdCBMQU1CREEgPSB7XG4gICAgYmVnaW46IC9sYW1iZGEvLFxuICAgIGVuZHNXaXRoUGFyZW50OiB0cnVlLFxuICAgIHJldHVybkJlZ2luOiB0cnVlLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBOQU1FLFxuICAgICAge1xuICAgICAgICBlbmRzUGFyZW50OiB0cnVlLFxuICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luOiAvXFwoLyxcbiAgICAgICAgICAgIGVuZDogL1xcKS9cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luOiAvXFxbLyxcbiAgICAgICAgICAgIGVuZDogL1xcXS9cbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIGNvbnRhaW5zOiBbIElERU5UIF1cbiAgICAgIH1cbiAgICBdXG4gIH07XG5cbiAgY29uc3QgTElTVCA9IHtcbiAgICB2YXJpYW50czogW1xuICAgICAge1xuICAgICAgICBiZWdpbjogJ1xcXFwoJyxcbiAgICAgICAgZW5kOiAnXFxcXCknXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogJ1xcXFxbJyxcbiAgICAgICAgZW5kOiAnXFxcXF0nXG4gICAgICB9XG4gICAgXSxcbiAgICBjb250YWluczogW1xuICAgICAgTEFNQkRBLFxuICAgICAgTkFNRSxcbiAgICAgIEJPRFlcbiAgICBdXG4gIH07XG5cbiAgQk9EWS5jb250YWlucyA9IFtcbiAgICBMSVRFUkFMLFxuICAgIE5VTUJFUixcbiAgICBTVFJJTkcsXG4gICAgSURFTlQsXG4gICAgUVVPVEVEX0lERU5ULFxuICAgIFFVT1RFRF9MSVNULFxuICAgIExJU1RcbiAgXS5jb25jYXQoQ09NTUVOVF9NT0RFUyk7XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnU2NoZW1lJyxcbiAgICBpbGxlZ2FsOiAvXFxTLyxcbiAgICBjb250YWluczogW1xuICAgICAgaGxqcy5TSEVCQU5HKCksXG4gICAgICBOVU1CRVIsXG4gICAgICBTVFJJTkcsXG4gICAgICBRVU9URURfSURFTlQsXG4gICAgICBRVU9URURfTElTVCxcbiAgICAgIExJU1RcbiAgICBdLmNvbmNhdChDT01NRU5UX01PREVTKVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNjaGVtZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=