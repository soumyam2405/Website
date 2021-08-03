exports.ids = [108];
exports.modules = {

/***/ "./node_modules/highlight.js/lib/languages/mercury.js":
/*!************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/mercury.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Mercury
Author: mucaho <mkucko@gmail.com>
Description: Mercury is a logic/functional programming language which combines the clarity and expressiveness of declarative programming with advanced static analysis and error detection features.
Website: https://www.mercurylang.org
*/

function mercury(hljs) {
  const KEYWORDS = {
    keyword:
      'module use_module import_module include_module end_module initialise ' +
      'mutable initialize finalize finalise interface implementation pred ' +
      'mode func type inst solver any_pred any_func is semidet det nondet ' +
      'multi erroneous failure cc_nondet cc_multi typeclass instance where ' +
      'pragma promise external trace atomic or_else require_complete_switch ' +
      'require_det require_semidet require_multi require_nondet ' +
      'require_cc_multi require_cc_nondet require_erroneous require_failure',
    meta:
      // pragma
      'inline no_inline type_spec source_file fact_table obsolete memo ' +
      'loop_check minimal_model terminates does_not_terminate ' +
      'check_termination promise_equivalent_clauses ' +
      // preprocessor
      'foreign_proc foreign_decl foreign_code foreign_type ' +
      'foreign_import_module foreign_export_enum foreign_export ' +
      'foreign_enum may_call_mercury will_not_call_mercury thread_safe ' +
      'not_thread_safe maybe_thread_safe promise_pure promise_semipure ' +
      'tabled_for_io local untrailed trailed attach_to_io_state ' +
      'can_pass_as_mercury_type stable will_not_throw_exception ' +
      'may_modify_trail will_not_modify_trail may_duplicate ' +
      'may_not_duplicate affects_liveness does_not_affect_liveness ' +
      'doesnt_affect_liveness no_sharing unknown_sharing sharing',
    built_in:
      'some all not if then else true fail false try catch catch_any ' +
      'semidet_true semidet_false semidet_fail impure_true impure semipure'
  };

  const COMMENT = hljs.COMMENT('%', '$');

  const NUMCODE = {
    className: 'number',
    begin: "0'.\\|0[box][0-9a-fA-F]*"
  };

  const ATOM = hljs.inherit(hljs.APOS_STRING_MODE, {
    relevance: 0
  });
  const STRING = hljs.inherit(hljs.QUOTE_STRING_MODE, {
    relevance: 0
  });
  const STRING_FMT = {
    className: 'subst',
    begin: '\\\\[abfnrtv]\\|\\\\x[0-9a-fA-F]*\\\\\\|%[-+# *.0-9]*[dioxXucsfeEgGp]',
    relevance: 0
  };
  STRING.contains = STRING.contains.slice(); // we need our own copy of contains
  STRING.contains.push(STRING_FMT);

  const IMPLICATION = {
    className: 'built_in',
    variants: [
      {
        begin: '<=>'
      },
      {
        begin: '<=',
        relevance: 0
      },
      {
        begin: '=>',
        relevance: 0
      },
      {
        begin: '/\\\\'
      },
      {
        begin: '\\\\/'
      }
    ]
  };

  const HEAD_BODY_CONJUNCTION = {
    className: 'built_in',
    variants: [
      {
        begin: ':-\\|-->'
      },
      {
        begin: '=',
        relevance: 0
      }
    ]
  };

  return {
    name: 'Mercury',
    aliases: [
      'm',
      'moo'
    ],
    keywords: KEYWORDS,
    contains: [
      IMPLICATION,
      HEAD_BODY_CONJUNCTION,
      COMMENT,
      hljs.C_BLOCK_COMMENT_MODE,
      NUMCODE,
      hljs.NUMBER_MODE,
      ATOM,
      STRING,
      { // relevance booster
        begin: /:-/
      },
      { // relevance booster
        begin: /\.$/
      }
    ]
  };
}

module.exports = mercury;


/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvbWVyY3VyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiIxMDguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuTGFuZ3VhZ2U6IE1lcmN1cnlcbkF1dGhvcjogbXVjYWhvIDxta3Vja29AZ21haWwuY29tPlxuRGVzY3JpcHRpb246IE1lcmN1cnkgaXMgYSBsb2dpYy9mdW5jdGlvbmFsIHByb2dyYW1taW5nIGxhbmd1YWdlIHdoaWNoIGNvbWJpbmVzIHRoZSBjbGFyaXR5IGFuZCBleHByZXNzaXZlbmVzcyBvZiBkZWNsYXJhdGl2ZSBwcm9ncmFtbWluZyB3aXRoIGFkdmFuY2VkIHN0YXRpYyBhbmFseXNpcyBhbmQgZXJyb3IgZGV0ZWN0aW9uIGZlYXR1cmVzLlxuV2Vic2l0ZTogaHR0cHM6Ly93d3cubWVyY3VyeWxhbmcub3JnXG4qL1xuXG5mdW5jdGlvbiBtZXJjdXJ5KGhsanMpIHtcbiAgY29uc3QgS0VZV09SRFMgPSB7XG4gICAga2V5d29yZDpcbiAgICAgICdtb2R1bGUgdXNlX21vZHVsZSBpbXBvcnRfbW9kdWxlIGluY2x1ZGVfbW9kdWxlIGVuZF9tb2R1bGUgaW5pdGlhbGlzZSAnICtcbiAgICAgICdtdXRhYmxlIGluaXRpYWxpemUgZmluYWxpemUgZmluYWxpc2UgaW50ZXJmYWNlIGltcGxlbWVudGF0aW9uIHByZWQgJyArXG4gICAgICAnbW9kZSBmdW5jIHR5cGUgaW5zdCBzb2x2ZXIgYW55X3ByZWQgYW55X2Z1bmMgaXMgc2VtaWRldCBkZXQgbm9uZGV0ICcgK1xuICAgICAgJ211bHRpIGVycm9uZW91cyBmYWlsdXJlIGNjX25vbmRldCBjY19tdWx0aSB0eXBlY2xhc3MgaW5zdGFuY2Ugd2hlcmUgJyArXG4gICAgICAncHJhZ21hIHByb21pc2UgZXh0ZXJuYWwgdHJhY2UgYXRvbWljIG9yX2Vsc2UgcmVxdWlyZV9jb21wbGV0ZV9zd2l0Y2ggJyArXG4gICAgICAncmVxdWlyZV9kZXQgcmVxdWlyZV9zZW1pZGV0IHJlcXVpcmVfbXVsdGkgcmVxdWlyZV9ub25kZXQgJyArXG4gICAgICAncmVxdWlyZV9jY19tdWx0aSByZXF1aXJlX2NjX25vbmRldCByZXF1aXJlX2Vycm9uZW91cyByZXF1aXJlX2ZhaWx1cmUnLFxuICAgIG1ldGE6XG4gICAgICAvLyBwcmFnbWFcbiAgICAgICdpbmxpbmUgbm9faW5saW5lIHR5cGVfc3BlYyBzb3VyY2VfZmlsZSBmYWN0X3RhYmxlIG9ic29sZXRlIG1lbW8gJyArXG4gICAgICAnbG9vcF9jaGVjayBtaW5pbWFsX21vZGVsIHRlcm1pbmF0ZXMgZG9lc19ub3RfdGVybWluYXRlICcgK1xuICAgICAgJ2NoZWNrX3Rlcm1pbmF0aW9uIHByb21pc2VfZXF1aXZhbGVudF9jbGF1c2VzICcgK1xuICAgICAgLy8gcHJlcHJvY2Vzc29yXG4gICAgICAnZm9yZWlnbl9wcm9jIGZvcmVpZ25fZGVjbCBmb3JlaWduX2NvZGUgZm9yZWlnbl90eXBlICcgK1xuICAgICAgJ2ZvcmVpZ25faW1wb3J0X21vZHVsZSBmb3JlaWduX2V4cG9ydF9lbnVtIGZvcmVpZ25fZXhwb3J0ICcgK1xuICAgICAgJ2ZvcmVpZ25fZW51bSBtYXlfY2FsbF9tZXJjdXJ5IHdpbGxfbm90X2NhbGxfbWVyY3VyeSB0aHJlYWRfc2FmZSAnICtcbiAgICAgICdub3RfdGhyZWFkX3NhZmUgbWF5YmVfdGhyZWFkX3NhZmUgcHJvbWlzZV9wdXJlIHByb21pc2Vfc2VtaXB1cmUgJyArXG4gICAgICAndGFibGVkX2Zvcl9pbyBsb2NhbCB1bnRyYWlsZWQgdHJhaWxlZCBhdHRhY2hfdG9faW9fc3RhdGUgJyArXG4gICAgICAnY2FuX3Bhc3NfYXNfbWVyY3VyeV90eXBlIHN0YWJsZSB3aWxsX25vdF90aHJvd19leGNlcHRpb24gJyArXG4gICAgICAnbWF5X21vZGlmeV90cmFpbCB3aWxsX25vdF9tb2RpZnlfdHJhaWwgbWF5X2R1cGxpY2F0ZSAnICtcbiAgICAgICdtYXlfbm90X2R1cGxpY2F0ZSBhZmZlY3RzX2xpdmVuZXNzIGRvZXNfbm90X2FmZmVjdF9saXZlbmVzcyAnICtcbiAgICAgICdkb2VzbnRfYWZmZWN0X2xpdmVuZXNzIG5vX3NoYXJpbmcgdW5rbm93bl9zaGFyaW5nIHNoYXJpbmcnLFxuICAgIGJ1aWx0X2luOlxuICAgICAgJ3NvbWUgYWxsIG5vdCBpZiB0aGVuIGVsc2UgdHJ1ZSBmYWlsIGZhbHNlIHRyeSBjYXRjaCBjYXRjaF9hbnkgJyArXG4gICAgICAnc2VtaWRldF90cnVlIHNlbWlkZXRfZmFsc2Ugc2VtaWRldF9mYWlsIGltcHVyZV90cnVlIGltcHVyZSBzZW1pcHVyZSdcbiAgfTtcblxuICBjb25zdCBDT01NRU5UID0gaGxqcy5DT01NRU5UKCclJywgJyQnKTtcblxuICBjb25zdCBOVU1DT0RFID0ge1xuICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgYmVnaW46IFwiMCcuXFxcXHwwW2JveF1bMC05YS1mQS1GXSpcIlxuICB9O1xuXG4gIGNvbnN0IEFUT00gPSBobGpzLmluaGVyaXQoaGxqcy5BUE9TX1NUUklOR19NT0RFLCB7XG4gICAgcmVsZXZhbmNlOiAwXG4gIH0pO1xuICBjb25zdCBTVFJJTkcgPSBobGpzLmluaGVyaXQoaGxqcy5RVU9URV9TVFJJTkdfTU9ERSwge1xuICAgIHJlbGV2YW5jZTogMFxuICB9KTtcbiAgY29uc3QgU1RSSU5HX0ZNVCA9IHtcbiAgICBjbGFzc05hbWU6ICdzdWJzdCcsXG4gICAgYmVnaW46ICdcXFxcXFxcXFthYmZucnR2XVxcXFx8XFxcXFxcXFx4WzAtOWEtZkEtRl0qXFxcXFxcXFxcXFxcfCVbLSsjICouMC05XSpbZGlveFh1Y3NmZUVnR3BdJyxcbiAgICByZWxldmFuY2U6IDBcbiAgfTtcbiAgU1RSSU5HLmNvbnRhaW5zID0gU1RSSU5HLmNvbnRhaW5zLnNsaWNlKCk7IC8vIHdlIG5lZWQgb3VyIG93biBjb3B5IG9mIGNvbnRhaW5zXG4gIFNUUklORy5jb250YWlucy5wdXNoKFNUUklOR19GTVQpO1xuXG4gIGNvbnN0IElNUExJQ0FUSU9OID0ge1xuICAgIGNsYXNzTmFtZTogJ2J1aWx0X2luJyxcbiAgICB2YXJpYW50czogW1xuICAgICAge1xuICAgICAgICBiZWdpbjogJzw9PidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnPD0nLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnPT4nLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnL1xcXFxcXFxcJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICdcXFxcXFxcXC8nXG4gICAgICB9XG4gICAgXVxuICB9O1xuXG4gIGNvbnN0IEhFQURfQk9EWV9DT05KVU5DVElPTiA9IHtcbiAgICBjbGFzc05hbWU6ICdidWlsdF9pbicsXG4gICAgdmFyaWFudHM6IFtcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICc6LVxcXFx8LS0+J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICc9JyxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9XG4gICAgXVxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgbmFtZTogJ01lcmN1cnknLFxuICAgIGFsaWFzZXM6IFtcbiAgICAgICdtJyxcbiAgICAgICdtb28nXG4gICAgXSxcbiAgICBrZXl3b3JkczogS0VZV09SRFMsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIElNUExJQ0FUSU9OLFxuICAgICAgSEVBRF9CT0RZX0NPTkpVTkNUSU9OLFxuICAgICAgQ09NTUVOVCxcbiAgICAgIGhsanMuQ19CTE9DS19DT01NRU5UX01PREUsXG4gICAgICBOVU1DT0RFLFxuICAgICAgaGxqcy5OVU1CRVJfTU9ERSxcbiAgICAgIEFUT00sXG4gICAgICBTVFJJTkcsXG4gICAgICB7IC8vIHJlbGV2YW5jZSBib29zdGVyXG4gICAgICAgIGJlZ2luOiAvOi0vXG4gICAgICB9LFxuICAgICAgeyAvLyByZWxldmFuY2UgYm9vc3RlclxuICAgICAgICBiZWdpbjogL1xcLiQvXG4gICAgICB9XG4gICAgXVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1lcmN1cnk7XG4iXSwic291cmNlUm9vdCI6IiJ9