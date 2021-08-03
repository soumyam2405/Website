exports.ids = [114];
exports.modules = {

/***/ "./node_modules/highlight.js/lib/languages/n1ql.js":
/*!*********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/n1ql.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 Language: N1QL
 Author: Andres Täht <andres.taht@gmail.com>
 Contributors: Rene Saarsoo <nene@triin.net>
 Description: Couchbase query language
 Website: https://www.couchbase.com/products/n1ql
 */

function n1ql(hljs) {
  return {
    name: 'N1QL',
    case_insensitive: true,
    contains: [
      {
        beginKeywords:
          'build create index delete drop explain infer|10 insert merge prepare select update upsert|10',
        end: /;/, endsWithParent: true,
        keywords: {
          // Taken from http://developer.couchbase.com/documentation/server/current/n1ql/n1ql-language-reference/reservedwords.html
          keyword:
            'all alter analyze and any array as asc begin between binary boolean break bucket build by call ' +
            'case cast cluster collate collection commit connect continue correlate cover create database ' +
            'dataset datastore declare decrement delete derived desc describe distinct do drop each element ' +
            'else end every except exclude execute exists explain fetch first flatten for force from ' +
            'function grant group gsi having if ignore ilike in include increment index infer inline inner ' +
            'insert intersect into is join key keys keyspace known last left let letting like limit lsm map ' +
            'mapping matched materialized merge minus namespace nest not number object offset on ' +
            'option or order outer over parse partition password path pool prepare primary private privilege ' +
            'procedure public raw realm reduce rename return returning revoke right role rollback satisfies ' +
            'schema select self semi set show some start statistics string system then to transaction trigger ' +
            'truncate under union unique unknown unnest unset update upsert use user using validate value ' +
            'valued values via view when where while with within work xor',
          // Taken from http://developer.couchbase.com/documentation/server/4.5/n1ql/n1ql-language-reference/literals.html
          literal:
            'true false null missing|5',
          // Taken from http://developer.couchbase.com/documentation/server/4.5/n1ql/n1ql-language-reference/functions.html
          built_in:
            'array_agg array_append array_concat array_contains array_count array_distinct array_ifnull array_length ' +
            'array_max array_min array_position array_prepend array_put array_range array_remove array_repeat array_replace ' +
            'array_reverse array_sort array_sum avg count max min sum greatest least ifmissing ifmissingornull ifnull ' +
            'missingif nullif ifinf ifnan ifnanorinf naninf neginfif posinfif clock_millis clock_str date_add_millis ' +
            'date_add_str date_diff_millis date_diff_str date_part_millis date_part_str date_trunc_millis date_trunc_str ' +
            'duration_to_str millis str_to_millis millis_to_str millis_to_utc millis_to_zone_name now_millis now_str ' +
            'str_to_duration str_to_utc str_to_zone_name decode_json encode_json encoded_size poly_length base64 base64_encode ' +
            'base64_decode meta uuid abs acos asin atan atan2 ceil cos degrees e exp ln log floor pi power radians random ' +
            'round sign sin sqrt tan trunc object_length object_names object_pairs object_inner_pairs object_values ' +
            'object_inner_values object_add object_put object_remove object_unwrap regexp_contains regexp_like regexp_position ' +
            'regexp_replace contains initcap length lower ltrim position repeat replace rtrim split substr title trim upper ' +
            'isarray isatom isboolean isnumber isobject isstring type toarray toatom toboolean tonumber toobject tostring'
        },
        contains: [
          {
            className: 'string',
            begin: '\'', end: '\'',
            contains: [hljs.BACKSLASH_ESCAPE]
          },
          {
            className: 'string',
            begin: '"', end: '"',
            contains: [hljs.BACKSLASH_ESCAPE]
          },
          {
            className: 'symbol',
            begin: '`', end: '`',
            contains: [hljs.BACKSLASH_ESCAPE],
            relevance: 2
          },
          hljs.C_NUMBER_MODE,
          hljs.C_BLOCK_COMMENT_MODE
        ]
      },
      hljs.C_BLOCK_COMMENT_MODE
    ]
  };
}

module.exports = n1ql;


/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvbjFxbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiMTE0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiBMYW5ndWFnZTogTjFRTFxuIEF1dGhvcjogQW5kcmVzIFTDpGh0IDxhbmRyZXMudGFodEBnbWFpbC5jb20+XG4gQ29udHJpYnV0b3JzOiBSZW5lIFNhYXJzb28gPG5lbmVAdHJpaW4ubmV0PlxuIERlc2NyaXB0aW9uOiBDb3VjaGJhc2UgcXVlcnkgbGFuZ3VhZ2VcbiBXZWJzaXRlOiBodHRwczovL3d3dy5jb3VjaGJhc2UuY29tL3Byb2R1Y3RzL24xcWxcbiAqL1xuXG5mdW5jdGlvbiBuMXFsKGhsanMpIHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnTjFRTCcsXG4gICAgY2FzZV9pbnNlbnNpdGl2ZTogdHJ1ZSxcbiAgICBjb250YWluczogW1xuICAgICAge1xuICAgICAgICBiZWdpbktleXdvcmRzOlxuICAgICAgICAgICdidWlsZCBjcmVhdGUgaW5kZXggZGVsZXRlIGRyb3AgZXhwbGFpbiBpbmZlcnwxMCBpbnNlcnQgbWVyZ2UgcHJlcGFyZSBzZWxlY3QgdXBkYXRlIHVwc2VydHwxMCcsXG4gICAgICAgIGVuZDogLzsvLCBlbmRzV2l0aFBhcmVudDogdHJ1ZSxcbiAgICAgICAga2V5d29yZHM6IHtcbiAgICAgICAgICAvLyBUYWtlbiBmcm9tIGh0dHA6Ly9kZXZlbG9wZXIuY291Y2hiYXNlLmNvbS9kb2N1bWVudGF0aW9uL3NlcnZlci9jdXJyZW50L24xcWwvbjFxbC1sYW5ndWFnZS1yZWZlcmVuY2UvcmVzZXJ2ZWR3b3Jkcy5odG1sXG4gICAgICAgICAga2V5d29yZDpcbiAgICAgICAgICAgICdhbGwgYWx0ZXIgYW5hbHl6ZSBhbmQgYW55IGFycmF5IGFzIGFzYyBiZWdpbiBiZXR3ZWVuIGJpbmFyeSBib29sZWFuIGJyZWFrIGJ1Y2tldCBidWlsZCBieSBjYWxsICcgK1xuICAgICAgICAgICAgJ2Nhc2UgY2FzdCBjbHVzdGVyIGNvbGxhdGUgY29sbGVjdGlvbiBjb21taXQgY29ubmVjdCBjb250aW51ZSBjb3JyZWxhdGUgY292ZXIgY3JlYXRlIGRhdGFiYXNlICcgK1xuICAgICAgICAgICAgJ2RhdGFzZXQgZGF0YXN0b3JlIGRlY2xhcmUgZGVjcmVtZW50IGRlbGV0ZSBkZXJpdmVkIGRlc2MgZGVzY3JpYmUgZGlzdGluY3QgZG8gZHJvcCBlYWNoIGVsZW1lbnQgJyArXG4gICAgICAgICAgICAnZWxzZSBlbmQgZXZlcnkgZXhjZXB0IGV4Y2x1ZGUgZXhlY3V0ZSBleGlzdHMgZXhwbGFpbiBmZXRjaCBmaXJzdCBmbGF0dGVuIGZvciBmb3JjZSBmcm9tICcgK1xuICAgICAgICAgICAgJ2Z1bmN0aW9uIGdyYW50IGdyb3VwIGdzaSBoYXZpbmcgaWYgaWdub3JlIGlsaWtlIGluIGluY2x1ZGUgaW5jcmVtZW50IGluZGV4IGluZmVyIGlubGluZSBpbm5lciAnICtcbiAgICAgICAgICAgICdpbnNlcnQgaW50ZXJzZWN0IGludG8gaXMgam9pbiBrZXkga2V5cyBrZXlzcGFjZSBrbm93biBsYXN0IGxlZnQgbGV0IGxldHRpbmcgbGlrZSBsaW1pdCBsc20gbWFwICcgK1xuICAgICAgICAgICAgJ21hcHBpbmcgbWF0Y2hlZCBtYXRlcmlhbGl6ZWQgbWVyZ2UgbWludXMgbmFtZXNwYWNlIG5lc3Qgbm90IG51bWJlciBvYmplY3Qgb2Zmc2V0IG9uICcgK1xuICAgICAgICAgICAgJ29wdGlvbiBvciBvcmRlciBvdXRlciBvdmVyIHBhcnNlIHBhcnRpdGlvbiBwYXNzd29yZCBwYXRoIHBvb2wgcHJlcGFyZSBwcmltYXJ5IHByaXZhdGUgcHJpdmlsZWdlICcgK1xuICAgICAgICAgICAgJ3Byb2NlZHVyZSBwdWJsaWMgcmF3IHJlYWxtIHJlZHVjZSByZW5hbWUgcmV0dXJuIHJldHVybmluZyByZXZva2UgcmlnaHQgcm9sZSByb2xsYmFjayBzYXRpc2ZpZXMgJyArXG4gICAgICAgICAgICAnc2NoZW1hIHNlbGVjdCBzZWxmIHNlbWkgc2V0IHNob3cgc29tZSBzdGFydCBzdGF0aXN0aWNzIHN0cmluZyBzeXN0ZW0gdGhlbiB0byB0cmFuc2FjdGlvbiB0cmlnZ2VyICcgK1xuICAgICAgICAgICAgJ3RydW5jYXRlIHVuZGVyIHVuaW9uIHVuaXF1ZSB1bmtub3duIHVubmVzdCB1bnNldCB1cGRhdGUgdXBzZXJ0IHVzZSB1c2VyIHVzaW5nIHZhbGlkYXRlIHZhbHVlICcgK1xuICAgICAgICAgICAgJ3ZhbHVlZCB2YWx1ZXMgdmlhIHZpZXcgd2hlbiB3aGVyZSB3aGlsZSB3aXRoIHdpdGhpbiB3b3JrIHhvcicsXG4gICAgICAgICAgLy8gVGFrZW4gZnJvbSBodHRwOi8vZGV2ZWxvcGVyLmNvdWNoYmFzZS5jb20vZG9jdW1lbnRhdGlvbi9zZXJ2ZXIvNC41L24xcWwvbjFxbC1sYW5ndWFnZS1yZWZlcmVuY2UvbGl0ZXJhbHMuaHRtbFxuICAgICAgICAgIGxpdGVyYWw6XG4gICAgICAgICAgICAndHJ1ZSBmYWxzZSBudWxsIG1pc3Npbmd8NScsXG4gICAgICAgICAgLy8gVGFrZW4gZnJvbSBodHRwOi8vZGV2ZWxvcGVyLmNvdWNoYmFzZS5jb20vZG9jdW1lbnRhdGlvbi9zZXJ2ZXIvNC41L24xcWwvbjFxbC1sYW5ndWFnZS1yZWZlcmVuY2UvZnVuY3Rpb25zLmh0bWxcbiAgICAgICAgICBidWlsdF9pbjpcbiAgICAgICAgICAgICdhcnJheV9hZ2cgYXJyYXlfYXBwZW5kIGFycmF5X2NvbmNhdCBhcnJheV9jb250YWlucyBhcnJheV9jb3VudCBhcnJheV9kaXN0aW5jdCBhcnJheV9pZm51bGwgYXJyYXlfbGVuZ3RoICcgK1xuICAgICAgICAgICAgJ2FycmF5X21heCBhcnJheV9taW4gYXJyYXlfcG9zaXRpb24gYXJyYXlfcHJlcGVuZCBhcnJheV9wdXQgYXJyYXlfcmFuZ2UgYXJyYXlfcmVtb3ZlIGFycmF5X3JlcGVhdCBhcnJheV9yZXBsYWNlICcgK1xuICAgICAgICAgICAgJ2FycmF5X3JldmVyc2UgYXJyYXlfc29ydCBhcnJheV9zdW0gYXZnIGNvdW50IG1heCBtaW4gc3VtIGdyZWF0ZXN0IGxlYXN0IGlmbWlzc2luZyBpZm1pc3Npbmdvcm51bGwgaWZudWxsICcgK1xuICAgICAgICAgICAgJ21pc3NpbmdpZiBudWxsaWYgaWZpbmYgaWZuYW4gaWZuYW5vcmluZiBuYW5pbmYgbmVnaW5maWYgcG9zaW5maWYgY2xvY2tfbWlsbGlzIGNsb2NrX3N0ciBkYXRlX2FkZF9taWxsaXMgJyArXG4gICAgICAgICAgICAnZGF0ZV9hZGRfc3RyIGRhdGVfZGlmZl9taWxsaXMgZGF0ZV9kaWZmX3N0ciBkYXRlX3BhcnRfbWlsbGlzIGRhdGVfcGFydF9zdHIgZGF0ZV90cnVuY19taWxsaXMgZGF0ZV90cnVuY19zdHIgJyArXG4gICAgICAgICAgICAnZHVyYXRpb25fdG9fc3RyIG1pbGxpcyBzdHJfdG9fbWlsbGlzIG1pbGxpc190b19zdHIgbWlsbGlzX3RvX3V0YyBtaWxsaXNfdG9fem9uZV9uYW1lIG5vd19taWxsaXMgbm93X3N0ciAnICtcbiAgICAgICAgICAgICdzdHJfdG9fZHVyYXRpb24gc3RyX3RvX3V0YyBzdHJfdG9fem9uZV9uYW1lIGRlY29kZV9qc29uIGVuY29kZV9qc29uIGVuY29kZWRfc2l6ZSBwb2x5X2xlbmd0aCBiYXNlNjQgYmFzZTY0X2VuY29kZSAnICtcbiAgICAgICAgICAgICdiYXNlNjRfZGVjb2RlIG1ldGEgdXVpZCBhYnMgYWNvcyBhc2luIGF0YW4gYXRhbjIgY2VpbCBjb3MgZGVncmVlcyBlIGV4cCBsbiBsb2cgZmxvb3IgcGkgcG93ZXIgcmFkaWFucyByYW5kb20gJyArXG4gICAgICAgICAgICAncm91bmQgc2lnbiBzaW4gc3FydCB0YW4gdHJ1bmMgb2JqZWN0X2xlbmd0aCBvYmplY3RfbmFtZXMgb2JqZWN0X3BhaXJzIG9iamVjdF9pbm5lcl9wYWlycyBvYmplY3RfdmFsdWVzICcgK1xuICAgICAgICAgICAgJ29iamVjdF9pbm5lcl92YWx1ZXMgb2JqZWN0X2FkZCBvYmplY3RfcHV0IG9iamVjdF9yZW1vdmUgb2JqZWN0X3Vud3JhcCByZWdleHBfY29udGFpbnMgcmVnZXhwX2xpa2UgcmVnZXhwX3Bvc2l0aW9uICcgK1xuICAgICAgICAgICAgJ3JlZ2V4cF9yZXBsYWNlIGNvbnRhaW5zIGluaXRjYXAgbGVuZ3RoIGxvd2VyIGx0cmltIHBvc2l0aW9uIHJlcGVhdCByZXBsYWNlIHJ0cmltIHNwbGl0IHN1YnN0ciB0aXRsZSB0cmltIHVwcGVyICcgK1xuICAgICAgICAgICAgJ2lzYXJyYXkgaXNhdG9tIGlzYm9vbGVhbiBpc251bWJlciBpc29iamVjdCBpc3N0cmluZyB0eXBlIHRvYXJyYXkgdG9hdG9tIHRvYm9vbGVhbiB0b251bWJlciB0b29iamVjdCB0b3N0cmluZydcbiAgICAgICAgfSxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgYmVnaW46ICdcXCcnLCBlbmQ6ICdcXCcnLFxuICAgICAgICAgICAgY29udGFpbnM6IFtobGpzLkJBQ0tTTEFTSF9FU0NBUEVdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgYmVnaW46ICdcIicsIGVuZDogJ1wiJyxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbaGxqcy5CQUNLU0xBU0hfRVNDQVBFXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnc3ltYm9sJyxcbiAgICAgICAgICAgIGJlZ2luOiAnYCcsIGVuZDogJ2AnLFxuICAgICAgICAgICAgY29udGFpbnM6IFtobGpzLkJBQ0tTTEFTSF9FU0NBUEVdLFxuICAgICAgICAgICAgcmVsZXZhbmNlOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBobGpzLkNfTlVNQkVSX01PREUsXG4gICAgICAgICAgaGxqcy5DX0JMT0NLX0NPTU1FTlRfTU9ERVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgaGxqcy5DX0JMT0NLX0NPTU1FTlRfTU9ERVxuICAgIF1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBuMXFsO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==