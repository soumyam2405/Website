exports.ids = [91];
exports.modules = {

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

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvbGFzc28uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiI5MS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5MYW5ndWFnZTogTGFzc29cbkF1dGhvcjogRXJpYyBLbmliYmUgPGVyaWNAbGFzc29zb2Z0LmNvbT5cbkRlc2NyaXB0aW9uOiBMYXNzbyBpcyBhIGxhbmd1YWdlIGFuZCBzZXJ2ZXIgcGxhdGZvcm0gZm9yIGRhdGFiYXNlLWRyaXZlbiB3ZWIgYXBwbGljYXRpb25zLiBUaGlzIGRlZmluaXRpb24gaGFuZGxlcyBMYXNzbyA5IHN5bnRheCBhbmQgTGFzc29TY3JpcHQgZm9yIExhc3NvIDguNiBhbmQgZWFybGllci5cbldlYnNpdGU6IGh0dHA6Ly93d3cubGFzc29zb2Z0LmNvbS9XaGF0LUlzLUxhc3NvXG4qL1xuXG5mdW5jdGlvbiBsYXNzbyhobGpzKSB7XG4gIGNvbnN0IExBU1NPX0lERU5UX1JFID0gJ1thLXpBLVpfXVtcXFxcdy5dKic7XG4gIGNvbnN0IExBU1NPX0FOR0xFX1JFID0gJzxcXFxcPyhsYXNzbyhzY3JpcHQpP3w9KSc7XG4gIGNvbnN0IExBU1NPX0NMT1NFX1JFID0gJ1xcXFxdfFxcXFw/Pic7XG4gIGNvbnN0IExBU1NPX0tFWVdPUkRTID0ge1xuICAgICRwYXR0ZXJuOiBMQVNTT19JREVOVF9SRSArICd8JltsZ110OycsXG4gICAgbGl0ZXJhbDpcbiAgICAgICd0cnVlIGZhbHNlIG5vbmUgbWluaW1hbCBmdWxsIGFsbCB2b2lkIGFuZCBvciBub3QgJyArXG4gICAgICAnYncgbmJ3IGV3IG5ldyBjbiBuY24gbHQgbHRlIGd0IGd0ZSBlcSBuZXEgcnggbnJ4IGZ0JyxcbiAgICBidWlsdF9pbjpcbiAgICAgICdhcnJheSBkYXRlIGRlY2ltYWwgZHVyYXRpb24gaW50ZWdlciBtYXAgcGFpciBzdHJpbmcgdGFnIHhtbCBudWxsICcgK1xuICAgICAgJ2Jvb2xlYW4gYnl0ZXMga2V5d29yZCBsaXN0IGxvY2FsZSBxdWV1ZSBzZXQgc3RhY2sgc3RhdGljYXJyYXkgJyArXG4gICAgICAnbG9jYWwgdmFyIHZhcmlhYmxlIGdsb2JhbCBkYXRhIHNlbGYgaW5oZXJpdGVkIGN1cnJlbnRjYXB0dXJlIGdpdmVuYmxvY2snLFxuICAgIGtleXdvcmQ6XG4gICAgICAnY2FjaGUgZGF0YWJhc2VfbmFtZXMgZGF0YWJhc2Vfc2NoZW1hbmFtZXMgZGF0YWJhc2VfdGFibGVuYW1lcyAnICtcbiAgICAgICdkZWZpbmVfdGFnIGRlZmluZV90eXBlIGVtYWlsX2JhdGNoIGVuY29kZV9zZXQgaHRtbF9jb21tZW50IGhhbmRsZSAnICtcbiAgICAgICdoYW5kbGVfZXJyb3IgaGVhZGVyIGlmIGlubGluZSBpdGVyYXRlIGxqYXhfdGFyZ2V0IGxpbmsgJyArXG4gICAgICAnbGlua19jdXJyZW50YWN0aW9uIGxpbmtfY3VycmVudGdyb3VwIGxpbmtfY3VycmVudHJlY29yZCBsaW5rX2RldGFpbCAnICtcbiAgICAgICdsaW5rX2ZpcnN0Z3JvdXAgbGlua19maXJzdHJlY29yZCBsaW5rX2xhc3Rncm91cCBsaW5rX2xhc3RyZWNvcmQgJyArXG4gICAgICAnbGlua19uZXh0Z3JvdXAgbGlua19uZXh0cmVjb3JkIGxpbmtfcHJldmdyb3VwIGxpbmtfcHJldnJlY29yZCBsb2cgJyArXG4gICAgICAnbG9vcCBuYW1lc3BhY2VfdXNpbmcgb3V0cHV0X25vbmUgcG9ydGFsIHByaXZhdGUgcHJvdGVjdCByZWNvcmRzICcgK1xuICAgICAgJ3JlZmVyZXIgcmVmZXJyZXIgcmVwZWF0aW5nIHJlc3VsdHNldCByb3dzIHNlYXJjaF9hcmdzICcgK1xuICAgICAgJ3NlYXJjaF9hcmd1bWVudHMgc2VsZWN0IHNvcnRfYXJncyBzb3J0X2FyZ3VtZW50cyB0aHJlYWRfYXRvbWljICcgK1xuICAgICAgJ3ZhbHVlX2xpc3Qgd2hpbGUgYWJvcnQgY2FzZSBlbHNlIGZhaWxfaWYgZmFpbF9pZm5vdCBmYWlsIGlmX2VtcHR5ICcgK1xuICAgICAgJ2lmX2ZhbHNlIGlmX251bGwgaWZfdHJ1ZSBsb29wX2Fib3J0IGxvb3BfY29udGludWUgbG9vcF9jb3VudCBwYXJhbXMgJyArXG4gICAgICAncGFyYW1zX3VwIHJldHVybiByZXR1cm5fdmFsdWUgcnVuX2NoaWxkcmVuIHNvYXBfZGVmaW5ldGFnICcgK1xuICAgICAgJ3NvYXBfbGFzdHJlcXVlc3Qgc29hcF9sYXN0cmVzcG9uc2UgdGFnX25hbWUgYXNjZW5kaW5nIGF2ZXJhZ2UgYnkgJyArXG4gICAgICAnZGVmaW5lIGRlc2NlbmRpbmcgZG8gZXF1YWxzIGZyb3plbiBncm91cCBoYW5kbGVfZmFpbHVyZSBpbXBvcnQgaW4gJyArXG4gICAgICAnaW50byBqb2luIGxldCBtYXRjaCBtYXggbWluIG9uIG9yZGVyIHBhcmVudCBwcm90ZWN0ZWQgcHJvdmlkZSBwdWJsaWMgJyArXG4gICAgICAncmVxdWlyZSByZXR1cm5ob21lIHNraXAgc3BsaXRfdGhyZWFkIHN1bSB0YWtlIHRocmVhZCB0byB0cmFpdCB0eXBlICcgK1xuICAgICAgJ3doZXJlIHdpdGggeWllbGQgeWllbGRob21lJ1xuICB9O1xuICBjb25zdCBIVE1MX0NPTU1FTlQgPSBobGpzLkNPTU1FTlQoXG4gICAgJzwhLS0nLFxuICAgICctLT4nLFxuICAgIHtcbiAgICAgIHJlbGV2YW5jZTogMFxuICAgIH1cbiAgKTtcbiAgY29uc3QgTEFTU09fTk9QUk9DRVNTID0ge1xuICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgIGJlZ2luOiAnXFxcXFtub3Byb2Nlc3NcXFxcXScsXG4gICAgc3RhcnRzOiB7XG4gICAgICBlbmQ6ICdcXFxcWy9ub3Byb2Nlc3NcXFxcXScsXG4gICAgICByZXR1cm5FbmQ6IHRydWUsXG4gICAgICBjb250YWluczogW0hUTUxfQ09NTUVOVF1cbiAgICB9XG4gIH07XG4gIGNvbnN0IExBU1NPX1NUQVJUID0ge1xuICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgIGJlZ2luOiAnXFxcXFsvbm9wcm9jZXNzfCcgKyBMQVNTT19BTkdMRV9SRVxuICB9O1xuICBjb25zdCBMQVNTT19EQVRBTUVNQkVSID0ge1xuICAgIGNsYXNzTmFtZTogJ3N5bWJvbCcsXG4gICAgYmVnaW46ICdcXCcnICsgTEFTU09fSURFTlRfUkUgKyAnXFwnJ1xuICB9O1xuICBjb25zdCBMQVNTT19DT0RFID0gW1xuICAgIGhsanMuQ19MSU5FX0NPTU1FTlRfTU9ERSxcbiAgICBobGpzLkNfQkxPQ0tfQ09NTUVOVF9NT0RFLFxuICAgIGhsanMuaW5oZXJpdChobGpzLkNfTlVNQkVSX01PREUsIHtcbiAgICAgIGJlZ2luOiBobGpzLkNfTlVNQkVSX1JFICsgJ3woLT9pbmZpbml0eXxOYU4pXFxcXGInXG4gICAgfSksXG4gICAgaGxqcy5pbmhlcml0KGhsanMuQVBPU19TVFJJTkdfTU9ERSwge1xuICAgICAgaWxsZWdhbDogbnVsbFxuICAgIH0pLFxuICAgIGhsanMuaW5oZXJpdChobGpzLlFVT1RFX1NUUklOR19NT0RFLCB7XG4gICAgICBpbGxlZ2FsOiBudWxsXG4gICAgfSksXG4gICAge1xuICAgICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICAgIGJlZ2luOiAnYCcsXG4gICAgICBlbmQ6ICdgJ1xuICAgIH0sXG4gICAgeyAvLyB2YXJpYWJsZXNcbiAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBiZWdpbjogJ1sjJF0nICsgTEFTU09fSURFTlRfUkVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGJlZ2luOiAnIycsXG4gICAgICAgICAgZW5kOiAnXFxcXGQrJyxcbiAgICAgICAgICBpbGxlZ2FsOiAnXFxcXFcnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIGNsYXNzTmFtZTogJ3R5cGUnLFxuICAgICAgYmVnaW46ICc6OlxcXFxzKicsXG4gICAgICBlbmQ6IExBU1NPX0lERU5UX1JFLFxuICAgICAgaWxsZWdhbDogJ1xcXFxXJ1xuICAgIH0sXG4gICAge1xuICAgICAgY2xhc3NOYW1lOiAncGFyYW1zJyxcbiAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBiZWdpbjogJy0oPyFpbmZpbml0eSknICsgTEFTU09fSURFTlRfUkUsXG4gICAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBiZWdpbjogJyhcXFxcLlxcXFwuXFxcXC4pJ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBiZWdpbjogLygtPnxcXC4pXFxzKi8sXG4gICAgICByZWxldmFuY2U6IDAsXG4gICAgICBjb250YWluczogW0xBU1NPX0RBVEFNRU1CRVJdXG4gICAgfSxcbiAgICB7XG4gICAgICBjbGFzc05hbWU6ICdjbGFzcycsXG4gICAgICBiZWdpbktleXdvcmRzOiAnZGVmaW5lJyxcbiAgICAgIHJldHVybkVuZDogdHJ1ZSxcbiAgICAgIGVuZDogJ1xcXFwofD0+JyxcbiAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgIGhsanMuaW5oZXJpdChobGpzLlRJVExFX01PREUsIHtcbiAgICAgICAgICBiZWdpbjogTEFTU09fSURFTlRfUkUgKyAnKD0oPyE+KSk/fFstKyovJV0oPyE+KSdcbiAgICAgICAgfSlcbiAgICAgIF1cbiAgICB9XG4gIF07XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ0xhc3NvJyxcbiAgICBhbGlhc2VzOiBbXG4gICAgICAnbHMnLFxuICAgICAgJ2xhc3Nvc2NyaXB0J1xuICAgIF0sXG4gICAgY2FzZV9pbnNlbnNpdGl2ZTogdHJ1ZSxcbiAgICBrZXl3b3JkczogTEFTU09fS0VZV09SRFMsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgICAgIGJlZ2luOiBMQVNTT19DTE9TRV9SRSxcbiAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICBzdGFydHM6IHsgLy8gbWFya3VwXG4gICAgICAgICAgZW5kOiAnXFxcXFt8JyArIExBU1NPX0FOR0xFX1JFLFxuICAgICAgICAgIHJldHVybkVuZDogdHJ1ZSxcbiAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgY29udGFpbnM6IFtIVE1MX0NPTU1FTlRdXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBMQVNTT19OT1BST0NFU1MsXG4gICAgICBMQVNTT19TVEFSVCxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgICAgIGJlZ2luOiAnXFxcXFtub19zcXVhcmVfYnJhY2tldHMnLFxuICAgICAgICBzdGFydHM6IHtcbiAgICAgICAgICBlbmQ6ICdcXFxcWy9ub19zcXVhcmVfYnJhY2tldHNcXFxcXScsIC8vIG5vdCBpbXBsZW1lbnRlZCBpbiB0aGUgbGFuZ3VhZ2VcbiAgICAgICAgICBrZXl3b3JkczogTEFTU09fS0VZV09SRFMsXG4gICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgICAgICAgICAgIGJlZ2luOiBMQVNTT19DTE9TRV9SRSxcbiAgICAgICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgICAgICBzdGFydHM6IHtcbiAgICAgICAgICAgICAgICBlbmQ6ICdcXFxcW25vcHJvY2Vzc1xcXFxdfCcgKyBMQVNTT19BTkdMRV9SRSxcbiAgICAgICAgICAgICAgICByZXR1cm5FbmQ6IHRydWUsXG4gICAgICAgICAgICAgICAgY29udGFpbnM6IFtIVE1MX0NPTU1FTlRdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBMQVNTT19OT1BST0NFU1MsXG4gICAgICAgICAgICBMQVNTT19TVEFSVFxuICAgICAgICAgIF0uY29uY2F0KExBU1NPX0NPREUpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgICAgICBiZWdpbjogJ1xcXFxbJyxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICAgICAgYmVnaW46ICdeIyEnLFxuICAgICAgICBlbmQ6ICdsYXNzbzkkJyxcbiAgICAgICAgcmVsZXZhbmNlOiAxMFxuICAgICAgfVxuICAgIF0uY29uY2F0KExBU1NPX0NPREUpXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGFzc287XG4iXSwic291cmNlUm9vdCI6IiJ9