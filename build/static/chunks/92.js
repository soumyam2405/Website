(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[92],{

/***/ "./node_modules/highlight.js/lib/languages/lasso.js":
/*!**********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/lasso.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Lasso
Author: Eric Knibbe <eric@lassosoft.com>
Description: Lasso is a language and server platform for database-driven web applications. This definition handles Lasso 9 syntax and LassoScript for Lasso 8.6 and earlier.
Website: http://www.lassosoft.com/What-Is-Lasso
*/

function lasso(hljs) {
  const LASSO_IDENT_RE = '[a-zA-Z_][\\w.]*';
  const LASSO_ANGLE_RE = '<\\?(lasso(script)?|=)';
  const LASSO_CLOSE_RE = '\\]|\\?>';
  const LASSO_KEYWORDS = {
    $pattern: LASSO_IDENT_RE + '|&[lg]t;',
    literal:
      'true false none minimal full all void and or not ' +
      'bw nbw ew new cn ncn lt lte gt gte eq neq rx nrx ft',
    built_in:
      'array date decimal duration integer map pair string tag xml null ' +
      'boolean bytes keyword list locale queue set stack staticarray ' +
      'local var variable global data self inherited currentcapture givenblock',
    keyword:
      'cache database_names database_schemanames database_tablenames ' +
      'define_tag define_type email_batch encode_set html_comment handle ' +
      'handle_error header if inline iterate ljax_target link ' +
      'link_currentaction link_currentgroup link_currentrecord link_detail ' +
      'link_firstgroup link_firstrecord link_lastgroup link_lastrecord ' +
      'link_nextgroup link_nextrecord link_prevgroup link_prevrecord log ' +
      'loop namespace_using output_none portal private protect records ' +
      'referer referrer repeating resultset rows search_args ' +
      'search_arguments select sort_args sort_arguments thread_atomic ' +
      'value_list while abort case else fail_if fail_ifnot fail if_empty ' +
      'if_false if_null if_true loop_abort loop_continue loop_count params ' +
      'params_up return return_value run_children soap_definetag ' +
      'soap_lastrequest soap_lastresponse tag_name ascending average by ' +
      'define descending do equals frozen group handle_failure import in ' +
      'into join let match max min on order parent protected provide public ' +
      'require returnhome skip split_thread sum take thread to trait type ' +
      'where with yield yieldhome'
  };
  const HTML_COMMENT = hljs.COMMENT(
    '<!--',
    '-->',
    {
      relevance: 0
    }
  );
  const LASSO_NOPROCESS = {
    className: 'meta',
    begin: '\\[noprocess\\]',
    starts: {
      end: '\\[/noprocess\\]',
      returnEnd: true,
      contains: [HTML_COMMENT]
    }
  };
  const LASSO_START = {
    className: 'meta',
    begin: '\\[/noprocess|' + LASSO_ANGLE_RE
  };
  const LASSO_DATAMEMBER = {
    className: 'symbol',
    begin: '\'' + LASSO_IDENT_RE + '\''
  };
  const LASSO_CODE = [
    hljs.C_LINE_COMMENT_MODE,
    hljs.C_BLOCK_COMMENT_MODE,
    hljs.inherit(hljs.C_NUMBER_MODE, {
      begin: hljs.C_NUMBER_RE + '|(-?infinity|NaN)\\b'
    }),
    hljs.inherit(hljs.APOS_STRING_MODE, {
      illegal: null
    }),
    hljs.inherit(hljs.QUOTE_STRING_MODE, {
      illegal: null
    }),
    {
      className: 'string',
      begin: '`',
      end: '`'
    },
    { // variables
      variants: [
        {
          begin: '[#$]' + LASSO_IDENT_RE
        },
        {
          begin: '#',
          end: '\\d+',
          illegal: '\\W'
        }
      ]
    },
    {
      className: 'type',
      begin: '::\\s*',
      end: LASSO_IDENT_RE,
      illegal: '\\W'
    },
    {
      className: 'params',
      variants: [
        {
          begin: '-(?!infinity)' + LASSO_IDENT_RE,
          relevance: 0
        },
        {
          begin: '(\\.\\.\\.)'
        }
      ]
    },
    {
      begin: /(->|\.)\s*/,
      relevance: 0,
      contains: [LASSO_DATAMEMBER]
    },
    {
      className: 'class',
      beginKeywords: 'define',
      returnEnd: true,
      end: '\\(|=>',
      contains: [
        hljs.inherit(hljs.TITLE_MODE, {
          begin: LASSO_IDENT_RE + '(=(?!>))?|[-+*/%](?!>)'
        })
      ]
    }
  ];
  return {
    name: 'Lasso',
    aliases: [
      'ls',
      'lassoscript'
    ],
    case_insensitive: true,
    keywords: LASSO_KEYWORDS,
    contains: [
      {
        className: 'meta',
        begin: LASSO_CLOSE_RE,
        relevance: 0,
        starts: { // markup
          end: '\\[|' + LASSO_ANGLE_RE,
          returnEnd: true,
          relevance: 0,
          contains: [HTML_COMMENT]
        }
      },
      LASSO_NOPROCESS,
      LASSO_START,
      {
        className: 'meta',
        begin: '\\[no_square_brackets',
        starts: {
          end: '\\[/no_square_brackets\\]', // not implemented in the language
          keywords: LASSO_KEYWORDS,
          contains: [
            {
              className: 'meta',
              begin: LASSO_CLOSE_RE,
              relevance: 0,
              starts: {
                end: '\\[noprocess\\]|' + LASSO_ANGLE_RE,
                returnEnd: true,
                contains: [HTML_COMMENT]
              }
            },
            LASSO_NOPROCESS,
            LASSO_START
          ].concat(LASSO_CODE)
        }
      },
      {
        className: 'meta',
        begin: '\\[',
        relevance: 0
      },
      {
        className: 'meta',
        begin: '^#!',
        end: 'lasso9$',
        relevance: 10
      }
    ].concat(LASSO_CODE)
  };
}

module.exports = lasso;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2xhc3NvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJzdGF0aWMvY2h1bmtzLzkyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBMYXNzb1xuQXV0aG9yOiBFcmljIEtuaWJiZSA8ZXJpY0BsYXNzb3NvZnQuY29tPlxuRGVzY3JpcHRpb246IExhc3NvIGlzIGEgbGFuZ3VhZ2UgYW5kIHNlcnZlciBwbGF0Zm9ybSBmb3IgZGF0YWJhc2UtZHJpdmVuIHdlYiBhcHBsaWNhdGlvbnMuIFRoaXMgZGVmaW5pdGlvbiBoYW5kbGVzIExhc3NvIDkgc3ludGF4IGFuZCBMYXNzb1NjcmlwdCBmb3IgTGFzc28gOC42IGFuZCBlYXJsaWVyLlxuV2Vic2l0ZTogaHR0cDovL3d3dy5sYXNzb3NvZnQuY29tL1doYXQtSXMtTGFzc29cbiovXG5cbmZ1bmN0aW9uIGxhc3NvKGhsanMpIHtcbiAgY29uc3QgTEFTU09fSURFTlRfUkUgPSAnW2EtekEtWl9dW1xcXFx3Ll0qJztcbiAgY29uc3QgTEFTU09fQU5HTEVfUkUgPSAnPFxcXFw/KGxhc3NvKHNjcmlwdCk/fD0pJztcbiAgY29uc3QgTEFTU09fQ0xPU0VfUkUgPSAnXFxcXF18XFxcXD8+JztcbiAgY29uc3QgTEFTU09fS0VZV09SRFMgPSB7XG4gICAgJHBhdHRlcm46IExBU1NPX0lERU5UX1JFICsgJ3wmW2xnXXQ7JyxcbiAgICBsaXRlcmFsOlxuICAgICAgJ3RydWUgZmFsc2Ugbm9uZSBtaW5pbWFsIGZ1bGwgYWxsIHZvaWQgYW5kIG9yIG5vdCAnICtcbiAgICAgICdidyBuYncgZXcgbmV3IGNuIG5jbiBsdCBsdGUgZ3QgZ3RlIGVxIG5lcSByeCBucnggZnQnLFxuICAgIGJ1aWx0X2luOlxuICAgICAgJ2FycmF5IGRhdGUgZGVjaW1hbCBkdXJhdGlvbiBpbnRlZ2VyIG1hcCBwYWlyIHN0cmluZyB0YWcgeG1sIG51bGwgJyArXG4gICAgICAnYm9vbGVhbiBieXRlcyBrZXl3b3JkIGxpc3QgbG9jYWxlIHF1ZXVlIHNldCBzdGFjayBzdGF0aWNhcnJheSAnICtcbiAgICAgICdsb2NhbCB2YXIgdmFyaWFibGUgZ2xvYmFsIGRhdGEgc2VsZiBpbmhlcml0ZWQgY3VycmVudGNhcHR1cmUgZ2l2ZW5ibG9jaycsXG4gICAga2V5d29yZDpcbiAgICAgICdjYWNoZSBkYXRhYmFzZV9uYW1lcyBkYXRhYmFzZV9zY2hlbWFuYW1lcyBkYXRhYmFzZV90YWJsZW5hbWVzICcgK1xuICAgICAgJ2RlZmluZV90YWcgZGVmaW5lX3R5cGUgZW1haWxfYmF0Y2ggZW5jb2RlX3NldCBodG1sX2NvbW1lbnQgaGFuZGxlICcgK1xuICAgICAgJ2hhbmRsZV9lcnJvciBoZWFkZXIgaWYgaW5saW5lIGl0ZXJhdGUgbGpheF90YXJnZXQgbGluayAnICtcbiAgICAgICdsaW5rX2N1cnJlbnRhY3Rpb24gbGlua19jdXJyZW50Z3JvdXAgbGlua19jdXJyZW50cmVjb3JkIGxpbmtfZGV0YWlsICcgK1xuICAgICAgJ2xpbmtfZmlyc3Rncm91cCBsaW5rX2ZpcnN0cmVjb3JkIGxpbmtfbGFzdGdyb3VwIGxpbmtfbGFzdHJlY29yZCAnICtcbiAgICAgICdsaW5rX25leHRncm91cCBsaW5rX25leHRyZWNvcmQgbGlua19wcmV2Z3JvdXAgbGlua19wcmV2cmVjb3JkIGxvZyAnICtcbiAgICAgICdsb29wIG5hbWVzcGFjZV91c2luZyBvdXRwdXRfbm9uZSBwb3J0YWwgcHJpdmF0ZSBwcm90ZWN0IHJlY29yZHMgJyArXG4gICAgICAncmVmZXJlciByZWZlcnJlciByZXBlYXRpbmcgcmVzdWx0c2V0IHJvd3Mgc2VhcmNoX2FyZ3MgJyArXG4gICAgICAnc2VhcmNoX2FyZ3VtZW50cyBzZWxlY3Qgc29ydF9hcmdzIHNvcnRfYXJndW1lbnRzIHRocmVhZF9hdG9taWMgJyArXG4gICAgICAndmFsdWVfbGlzdCB3aGlsZSBhYm9ydCBjYXNlIGVsc2UgZmFpbF9pZiBmYWlsX2lmbm90IGZhaWwgaWZfZW1wdHkgJyArXG4gICAgICAnaWZfZmFsc2UgaWZfbnVsbCBpZl90cnVlIGxvb3BfYWJvcnQgbG9vcF9jb250aW51ZSBsb29wX2NvdW50IHBhcmFtcyAnICtcbiAgICAgICdwYXJhbXNfdXAgcmV0dXJuIHJldHVybl92YWx1ZSBydW5fY2hpbGRyZW4gc29hcF9kZWZpbmV0YWcgJyArXG4gICAgICAnc29hcF9sYXN0cmVxdWVzdCBzb2FwX2xhc3RyZXNwb25zZSB0YWdfbmFtZSBhc2NlbmRpbmcgYXZlcmFnZSBieSAnICtcbiAgICAgICdkZWZpbmUgZGVzY2VuZGluZyBkbyBlcXVhbHMgZnJvemVuIGdyb3VwIGhhbmRsZV9mYWlsdXJlIGltcG9ydCBpbiAnICtcbiAgICAgICdpbnRvIGpvaW4gbGV0IG1hdGNoIG1heCBtaW4gb24gb3JkZXIgcGFyZW50IHByb3RlY3RlZCBwcm92aWRlIHB1YmxpYyAnICtcbiAgICAgICdyZXF1aXJlIHJldHVybmhvbWUgc2tpcCBzcGxpdF90aHJlYWQgc3VtIHRha2UgdGhyZWFkIHRvIHRyYWl0IHR5cGUgJyArXG4gICAgICAnd2hlcmUgd2l0aCB5aWVsZCB5aWVsZGhvbWUnXG4gIH07XG4gIGNvbnN0IEhUTUxfQ09NTUVOVCA9IGhsanMuQ09NTUVOVChcbiAgICAnPCEtLScsXG4gICAgJy0tPicsXG4gICAge1xuICAgICAgcmVsZXZhbmNlOiAwXG4gICAgfVxuICApO1xuICBjb25zdCBMQVNTT19OT1BST0NFU1MgPSB7XG4gICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgYmVnaW46ICdcXFxcW25vcHJvY2Vzc1xcXFxdJyxcbiAgICBzdGFydHM6IHtcbiAgICAgIGVuZDogJ1xcXFxbL25vcHJvY2Vzc1xcXFxdJyxcbiAgICAgIHJldHVybkVuZDogdHJ1ZSxcbiAgICAgIGNvbnRhaW5zOiBbSFRNTF9DT01NRU5UXVxuICAgIH1cbiAgfTtcbiAgY29uc3QgTEFTU09fU1RBUlQgPSB7XG4gICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgYmVnaW46ICdcXFxcWy9ub3Byb2Nlc3N8JyArIExBU1NPX0FOR0xFX1JFXG4gIH07XG4gIGNvbnN0IExBU1NPX0RBVEFNRU1CRVIgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3ltYm9sJyxcbiAgICBiZWdpbjogJ1xcJycgKyBMQVNTT19JREVOVF9SRSArICdcXCcnXG4gIH07XG4gIGNvbnN0IExBU1NPX0NPREUgPSBbXG4gICAgaGxqcy5DX0xJTkVfQ09NTUVOVF9NT0RFLFxuICAgIGhsanMuQ19CTE9DS19DT01NRU5UX01PREUsXG4gICAgaGxqcy5pbmhlcml0KGhsanMuQ19OVU1CRVJfTU9ERSwge1xuICAgICAgYmVnaW46IGhsanMuQ19OVU1CRVJfUkUgKyAnfCgtP2luZmluaXR5fE5hTilcXFxcYidcbiAgICB9KSxcbiAgICBobGpzLmluaGVyaXQoaGxqcy5BUE9TX1NUUklOR19NT0RFLCB7XG4gICAgICBpbGxlZ2FsOiBudWxsXG4gICAgfSksXG4gICAgaGxqcy5pbmhlcml0KGhsanMuUVVPVEVfU1RSSU5HX01PREUsIHtcbiAgICAgIGlsbGVnYWw6IG51bGxcbiAgICB9KSxcbiAgICB7XG4gICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgYmVnaW46ICdgJyxcbiAgICAgIGVuZDogJ2AnXG4gICAgfSxcbiAgICB7IC8vIHZhcmlhYmxlc1xuICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGJlZ2luOiAnWyMkXScgKyBMQVNTT19JREVOVF9SRVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgYmVnaW46ICcjJyxcbiAgICAgICAgICBlbmQ6ICdcXFxcZCsnLFxuICAgICAgICAgIGlsbGVnYWw6ICdcXFxcVydcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgY2xhc3NOYW1lOiAndHlwZScsXG4gICAgICBiZWdpbjogJzo6XFxcXHMqJyxcbiAgICAgIGVuZDogTEFTU09fSURFTlRfUkUsXG4gICAgICBpbGxlZ2FsOiAnXFxcXFcnXG4gICAgfSxcbiAgICB7XG4gICAgICBjbGFzc05hbWU6ICdwYXJhbXMnLFxuICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGJlZ2luOiAnLSg/IWluZmluaXR5KScgKyBMQVNTT19JREVOVF9SRSxcbiAgICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGJlZ2luOiAnKFxcXFwuXFxcXC5cXFxcLiknXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIGJlZ2luOiAvKC0+fFxcLilcXHMqLyxcbiAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgIGNvbnRhaW5zOiBbTEFTU09fREFUQU1FTUJFUl1cbiAgICB9LFxuICAgIHtcbiAgICAgIGNsYXNzTmFtZTogJ2NsYXNzJyxcbiAgICAgIGJlZ2luS2V5d29yZHM6ICdkZWZpbmUnLFxuICAgICAgcmV0dXJuRW5kOiB0cnVlLFxuICAgICAgZW5kOiAnXFxcXCh8PT4nLFxuICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgaGxqcy5pbmhlcml0KGhsanMuVElUTEVfTU9ERSwge1xuICAgICAgICAgIGJlZ2luOiBMQVNTT19JREVOVF9SRSArICcoPSg/IT4pKT98Wy0rKi8lXSg/IT4pJ1xuICAgICAgICB9KVxuICAgICAgXVxuICAgIH1cbiAgXTtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnTGFzc28nLFxuICAgIGFsaWFzZXM6IFtcbiAgICAgICdscycsXG4gICAgICAnbGFzc29zY3JpcHQnXG4gICAgXSxcbiAgICBjYXNlX2luc2Vuc2l0aXZlOiB0cnVlLFxuICAgIGtleXdvcmRzOiBMQVNTT19LRVlXT1JEUyxcbiAgICBjb250YWluczogW1xuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICAgICAgYmVnaW46IExBU1NPX0NMT1NFX1JFLFxuICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgIHN0YXJ0czogeyAvLyBtYXJrdXBcbiAgICAgICAgICBlbmQ6ICdcXFxcW3wnICsgTEFTU09fQU5HTEVfUkUsXG4gICAgICAgICAgcmV0dXJuRW5kOiB0cnVlLFxuICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICBjb250YWluczogW0hUTUxfQ09NTUVOVF1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIExBU1NPX05PUFJPQ0VTUyxcbiAgICAgIExBU1NPX1NUQVJULFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICAgICAgYmVnaW46ICdcXFxcW25vX3NxdWFyZV9icmFja2V0cycsXG4gICAgICAgIHN0YXJ0czoge1xuICAgICAgICAgIGVuZDogJ1xcXFxbL25vX3NxdWFyZV9icmFja2V0c1xcXFxdJywgLy8gbm90IGltcGxlbWVudGVkIGluIHRoZSBsYW5ndWFnZVxuICAgICAgICAgIGtleXdvcmRzOiBMQVNTT19LRVlXT1JEUyxcbiAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICAgICAgICAgICAgYmVnaW46IExBU1NPX0NMT1NFX1JFLFxuICAgICAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgICAgIHN0YXJ0czoge1xuICAgICAgICAgICAgICAgIGVuZDogJ1xcXFxbbm9wcm9jZXNzXFxcXF18JyArIExBU1NPX0FOR0xFX1JFLFxuICAgICAgICAgICAgICAgIHJldHVybkVuZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjb250YWluczogW0hUTUxfQ09NTUVOVF1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIExBU1NPX05PUFJPQ0VTUyxcbiAgICAgICAgICAgIExBU1NPX1NUQVJUXG4gICAgICAgICAgXS5jb25jYXQoTEFTU09fQ09ERSlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgICAgIGJlZ2luOiAnXFxcXFsnLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgICAgICBiZWdpbjogJ14jIScsXG4gICAgICAgIGVuZDogJ2xhc3NvOSQnLFxuICAgICAgICByZWxldmFuY2U6IDEwXG4gICAgICB9XG4gICAgXS5jb25jYXQoTEFTU09fQ09ERSlcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsYXNzbztcbiJdLCJzb3VyY2VSb290IjoiIn0=