exports.ids = [155];
exports.modules = {

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

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvc2NoZW1lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRDQUE0QyxHQUFHLE1BQU07QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiMTU1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBTY2hlbWVcbkRlc2NyaXB0aW9uOiBTY2hlbWUgaXMgYSBwcm9ncmFtbWluZyBsYW5ndWFnZSBpbiB0aGUgTGlzcCBmYW1pbHkuXG4gICAgICAgICAgICAgKGtleXdvcmRzIGJhc2VkIG9uIGh0dHA6Ly9jb21tdW5pdHkuc2NoZW1ld2lraS5vcmcvP3NjaGVtZS1rZXl3b3JkcylcbkF1dGhvcjogSlAgVmVya2FtcCA8bWVAanZlcmthbXAuY29tPlxuQ29udHJpYnV0b3JzOiBJdmFuIFNhZ2FsYWV2IDxtYW5pYWNAc29mdHdhcmVtYW5pYWNzLm9yZz5cbk9yaWdpbjogY2xvanVyZS5qc1xuV2Vic2l0ZTogaHR0cDovL2NvbW11bml0eS5zY2hlbWV3aWtpLm9yZy8/d2hhdC1pcy1zY2hlbWVcbkNhdGVnb3J5OiBsaXNwXG4qL1xuXG5mdW5jdGlvbiBzY2hlbWUoaGxqcykge1xuICBjb25zdCBTQ0hFTUVfSURFTlRfUkUgPSAnW15cXFxcKFxcXFwpXFxcXFtcXFxcXVxcXFx7XFxcXH1cIixcXCdgOyN8XFxcXFxcXFxcXFxcc10rJztcbiAgY29uc3QgU0NIRU1FX1NJTVBMRV9OVU1CRVJfUkUgPSAnKC18XFxcXCspP1xcXFxkKyhbLi9dXFxcXGQrKT8nO1xuICBjb25zdCBTQ0hFTUVfQ09NUExFWF9OVU1CRVJfUkUgPSBTQ0hFTUVfU0lNUExFX05VTUJFUl9SRSArICdbK1xcXFwtXScgKyBTQ0hFTUVfU0lNUExFX05VTUJFUl9SRSArICdpJztcbiAgY29uc3QgS0VZV09SRFMgPSB7XG4gICAgJHBhdHRlcm46IFNDSEVNRV9JREVOVF9SRSxcbiAgICAnYnVpbHRpbi1uYW1lJzpcbiAgICAgICdjYXNlLWxhbWJkYSBjYWxsL2NjIGNsYXNzIGRlZmluZS1jbGFzcyBleGl0LWhhbmRsZXIgZmllbGQgaW1wb3J0ICcgK1xuICAgICAgJ2luaGVyaXQgaW5pdC1maWVsZCBpbnRlcmZhY2UgbGV0Ki12YWx1ZXMgbGV0LXZhbHVlcyBsZXQvZWMgbWl4aW4gJyArXG4gICAgICAnb3B0LWxhbWJkYSBvdmVycmlkZSBwcm90ZWN0IHByb3ZpZGUgcHVibGljIHJlbmFtZSByZXF1aXJlICcgK1xuICAgICAgJ3JlcXVpcmUtZm9yLXN5bnRheCBzeW50YXggc3ludGF4LWNhc2Ugc3ludGF4LWVycm9yIHVuaXQvc2lnIHVubGVzcyAnICtcbiAgICAgICd3aGVuIHdpdGgtc3ludGF4IGFuZCBiZWdpbiBjYWxsLXdpdGgtY3VycmVudC1jb250aW51YXRpb24gJyArXG4gICAgICAnY2FsbC13aXRoLWlucHV0LWZpbGUgY2FsbC13aXRoLW91dHB1dC1maWxlIGNhc2UgY29uZCBkZWZpbmUgJyArXG4gICAgICAnZGVmaW5lLXN5bnRheCBkZWxheSBkbyBkeW5hbWljLXdpbmQgZWxzZSBmb3ItZWFjaCBpZiBsYW1iZGEgbGV0IGxldCogJyArXG4gICAgICAnbGV0LXN5bnRheCBsZXRyZWMgbGV0cmVjLXN5bnRheCBtYXAgb3Igc3ludGF4LXJ1bGVzIFxcJyAqICsgLCAsQCAtIC4uLiAvICcgK1xuICAgICAgJzsgPCA8PSA9ID0+ID4gPj0gYCBhYnMgYWNvcyBhbmdsZSBhcHBlbmQgYXBwbHkgYXNpbiBhc3NvYyBhc3NxIGFzc3YgYXRhbiAnICtcbiAgICAgICdib29sZWFuPyBjYWFyIGNhZHIgY2FsbC13aXRoLWlucHV0LWZpbGUgY2FsbC13aXRoLW91dHB1dC1maWxlICcgK1xuICAgICAgJ2NhbGwtd2l0aC12YWx1ZXMgY2FyIGNkZGRhciBjZGRkZHIgY2RyIGNlaWxpbmcgY2hhci0+aW50ZWdlciAnICtcbiAgICAgICdjaGFyLWFscGhhYmV0aWM/IGNoYXItY2k8PT8gY2hhci1jaTw/IGNoYXItY2k9PyBjaGFyLWNpPj0/IGNoYXItY2k+PyAnICtcbiAgICAgICdjaGFyLWRvd25jYXNlIGNoYXItbG93ZXItY2FzZT8gY2hhci1udW1lcmljPyBjaGFyLXJlYWR5PyBjaGFyLXVwY2FzZSAnICtcbiAgICAgICdjaGFyLXVwcGVyLWNhc2U/IGNoYXItd2hpdGVzcGFjZT8gY2hhcjw9PyBjaGFyPD8gY2hhcj0/IGNoYXI+PT8gY2hhcj4/ICcgK1xuICAgICAgJ2NoYXI/IGNsb3NlLWlucHV0LXBvcnQgY2xvc2Utb3V0cHV0LXBvcnQgY29tcGxleD8gY29ucyBjb3MgJyArXG4gICAgICAnY3VycmVudC1pbnB1dC1wb3J0IGN1cnJlbnQtb3V0cHV0LXBvcnQgZGVub21pbmF0b3IgZGlzcGxheSBlb2Ytb2JqZWN0PyAnICtcbiAgICAgICdlcT8gZXF1YWw/IGVxdj8gZXZhbCBldmVuPyBleGFjdC0+aW5leGFjdCBleGFjdD8gZXhwIGV4cHQgZmxvb3IgJyArXG4gICAgICAnZm9yY2UgZ2NkIGltYWctcGFydCBpbmV4YWN0LT5leGFjdCBpbmV4YWN0PyBpbnB1dC1wb3J0PyBpbnRlZ2VyLT5jaGFyICcgK1xuICAgICAgJ2ludGVnZXI/IGludGVyYWN0aW9uLWVudmlyb25tZW50IGxjbSBsZW5ndGggbGlzdCBsaXN0LT5zdHJpbmcgJyArXG4gICAgICAnbGlzdC0+dmVjdG9yIGxpc3QtcmVmIGxpc3QtdGFpbCBsaXN0PyBsb2FkIGxvZyBtYWduaXR1ZGUgbWFrZS1wb2xhciAnICtcbiAgICAgICdtYWtlLXJlY3Rhbmd1bGFyIG1ha2Utc3RyaW5nIG1ha2UtdmVjdG9yIG1heCBtZW1iZXIgbWVtcSBtZW12IG1pbiAnICtcbiAgICAgICdtb2R1bG8gbmVnYXRpdmU/IG5ld2xpbmUgbm90IG51bGwtZW52aXJvbm1lbnQgbnVsbD8gbnVtYmVyLT5zdHJpbmcgJyArXG4gICAgICAnbnVtYmVyPyBudW1lcmF0b3Igb2RkPyBvcGVuLWlucHV0LWZpbGUgb3Blbi1vdXRwdXQtZmlsZSBvdXRwdXQtcG9ydD8gJyArXG4gICAgICAncGFpcj8gcGVlay1jaGFyIHBvcnQ/IHBvc2l0aXZlPyBwcm9jZWR1cmU/IHF1YXNpcXVvdGUgcXVvdGUgcXVvdGllbnQgJyArXG4gICAgICAncmF0aW9uYWw/IHJhdGlvbmFsaXplIHJlYWQgcmVhZC1jaGFyIHJlYWwtcGFydCByZWFsPyByZW1haW5kZXIgcmV2ZXJzZSAnICtcbiAgICAgICdyb3VuZCBzY2hlbWUtcmVwb3J0LWVudmlyb25tZW50IHNldCEgc2V0LWNhciEgc2V0LWNkciEgc2luIHNxcnQgc3RyaW5nICcgK1xuICAgICAgJ3N0cmluZy0+bGlzdCBzdHJpbmctPm51bWJlciBzdHJpbmctPnN5bWJvbCBzdHJpbmctYXBwZW5kIHN0cmluZy1jaTw9PyAnICtcbiAgICAgICdzdHJpbmctY2k8PyBzdHJpbmctY2k9PyBzdHJpbmctY2k+PT8gc3RyaW5nLWNpPj8gc3RyaW5nLWNvcHkgJyArXG4gICAgICAnc3RyaW5nLWZpbGwhIHN0cmluZy1sZW5ndGggc3RyaW5nLXJlZiBzdHJpbmctc2V0ISBzdHJpbmc8PT8gc3RyaW5nPD8gJyArXG4gICAgICAnc3RyaW5nPT8gc3RyaW5nPj0/IHN0cmluZz4/IHN0cmluZz8gc3Vic3RyaW5nIHN5bWJvbC0+c3RyaW5nIHN5bWJvbD8gJyArXG4gICAgICAndGFuIHRyYW5zY3JpcHQtb2ZmIHRyYW5zY3JpcHQtb24gdHJ1bmNhdGUgdmFsdWVzIHZlY3RvciAnICtcbiAgICAgICd2ZWN0b3ItPmxpc3QgdmVjdG9yLWZpbGwhIHZlY3Rvci1sZW5ndGggdmVjdG9yLXJlZiB2ZWN0b3Itc2V0ISAnICtcbiAgICAgICd3aXRoLWlucHV0LWZyb20tZmlsZSB3aXRoLW91dHB1dC10by1maWxlIHdyaXRlIHdyaXRlLWNoYXIgemVybz8nXG4gIH07XG5cbiAgY29uc3QgTElURVJBTCA9IHtcbiAgICBjbGFzc05hbWU6ICdsaXRlcmFsJyxcbiAgICBiZWdpbjogJygjdHwjZnwjXFxcXFxcXFwnICsgU0NIRU1FX0lERU5UX1JFICsgJ3wjXFxcXFxcXFwuKSdcbiAgfTtcblxuICBjb25zdCBOVU1CRVIgPSB7XG4gICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICB2YXJpYW50czogW1xuICAgICAge1xuICAgICAgICBiZWdpbjogU0NIRU1FX1NJTVBMRV9OVU1CRVJfUkUsXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IFNDSEVNRV9DT01QTEVYX05VTUJFUl9SRSxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogJyNiWzAtMV0rKC9bMC0xXSspPydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnI29bMC03XSsoL1swLTddKyk/J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICcjeFswLTlhLWZdKygvWzAtOWEtZl0rKT8nXG4gICAgICB9XG4gICAgXVxuICB9O1xuXG4gIGNvbnN0IFNUUklORyA9IGhsanMuUVVPVEVfU1RSSU5HX01PREU7XG5cbiAgY29uc3QgQ09NTUVOVF9NT0RFUyA9IFtcbiAgICBobGpzLkNPTU1FTlQoXG4gICAgICAnOycsXG4gICAgICAnJCcsXG4gICAgICB7XG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfVxuICAgICksXG4gICAgaGxqcy5DT01NRU5UKCcjXFxcXHwnLCAnXFxcXHwjJylcbiAgXTtcblxuICBjb25zdCBJREVOVCA9IHtcbiAgICBiZWdpbjogU0NIRU1FX0lERU5UX1JFLFxuICAgIHJlbGV2YW5jZTogMFxuICB9O1xuXG4gIGNvbnN0IFFVT1RFRF9JREVOVCA9IHtcbiAgICBjbGFzc05hbWU6ICdzeW1ib2wnLFxuICAgIGJlZ2luOiAnXFwnJyArIFNDSEVNRV9JREVOVF9SRVxuICB9O1xuXG4gIGNvbnN0IEJPRFkgPSB7XG4gICAgZW5kc1dpdGhQYXJlbnQ6IHRydWUsXG4gICAgcmVsZXZhbmNlOiAwXG4gIH07XG5cbiAgY29uc3QgUVVPVEVEX0xJU1QgPSB7XG4gICAgdmFyaWFudHM6IFtcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IC8nL1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICdgJ1xuICAgICAgfVxuICAgIF0sXG4gICAgY29udGFpbnM6IFtcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICdcXFxcKCcsXG4gICAgICAgIGVuZDogJ1xcXFwpJyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAnc2VsZicsXG4gICAgICAgICAgTElURVJBTCxcbiAgICAgICAgICBTVFJJTkcsXG4gICAgICAgICAgTlVNQkVSLFxuICAgICAgICAgIElERU5ULFxuICAgICAgICAgIFFVT1RFRF9JREVOVFxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9O1xuXG4gIGNvbnN0IE5BTUUgPSB7XG4gICAgY2xhc3NOYW1lOiAnbmFtZScsXG4gICAgcmVsZXZhbmNlOiAwLFxuICAgIGJlZ2luOiBTQ0hFTUVfSURFTlRfUkUsXG4gICAga2V5d29yZHM6IEtFWVdPUkRTXG4gIH07XG5cbiAgY29uc3QgTEFNQkRBID0ge1xuICAgIGJlZ2luOiAvbGFtYmRhLyxcbiAgICBlbmRzV2l0aFBhcmVudDogdHJ1ZSxcbiAgICByZXR1cm5CZWdpbjogdHJ1ZSxcbiAgICBjb250YWluczogW1xuICAgICAgTkFNRSxcbiAgICAgIHtcbiAgICAgICAgZW5kc1BhcmVudDogdHJ1ZSxcbiAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogL1xcKC8sXG4gICAgICAgICAgICBlbmQ6IC9cXCkvXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogL1xcWy8sXG4gICAgICAgICAgICBlbmQ6IC9cXF0vXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBjb250YWluczogWyBJREVOVCBdXG4gICAgICB9XG4gICAgXVxuICB9O1xuXG4gIGNvbnN0IExJU1QgPSB7XG4gICAgdmFyaWFudHM6IFtcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICdcXFxcKCcsXG4gICAgICAgIGVuZDogJ1xcXFwpJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICdcXFxcWycsXG4gICAgICAgIGVuZDogJ1xcXFxdJ1xuICAgICAgfVxuICAgIF0sXG4gICAgY29udGFpbnM6IFtcbiAgICAgIExBTUJEQSxcbiAgICAgIE5BTUUsXG4gICAgICBCT0RZXG4gICAgXVxuICB9O1xuXG4gIEJPRFkuY29udGFpbnMgPSBbXG4gICAgTElURVJBTCxcbiAgICBOVU1CRVIsXG4gICAgU1RSSU5HLFxuICAgIElERU5ULFxuICAgIFFVT1RFRF9JREVOVCxcbiAgICBRVU9URURfTElTVCxcbiAgICBMSVNUXG4gIF0uY29uY2F0KENPTU1FTlRfTU9ERVMpO1xuXG4gIHJldHVybiB7XG4gICAgbmFtZTogJ1NjaGVtZScsXG4gICAgaWxsZWdhbDogL1xcUy8sXG4gICAgY29udGFpbnM6IFtcbiAgICAgIGhsanMuU0hFQkFORygpLFxuICAgICAgTlVNQkVSLFxuICAgICAgU1RSSU5HLFxuICAgICAgUVVPVEVEX0lERU5ULFxuICAgICAgUVVPVEVEX0xJU1QsXG4gICAgICBMSVNUXG4gICAgXS5jb25jYXQoQ09NTUVOVF9NT0RFUylcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzY2hlbWU7XG4iXSwic291cmNlUm9vdCI6IiJ9