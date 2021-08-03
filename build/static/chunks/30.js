(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[30],{

/***/ "./node_modules/highlight.js/lib/languages/clojure.js":
/*!************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/clojure.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Clojure
Description: Clojure syntax (based on lisp.js)
Author: mfornos
Website: https://clojure.org
Category: lisp
*/

/** @type LanguageFn */
function clojure(hljs) {
  const SYMBOLSTART = 'a-zA-Z_\\-!.?+*=<>&#\'';
  const SYMBOL_RE = '[' + SYMBOLSTART + '][' + SYMBOLSTART + '0-9/;:]*';
  const globals = 'def defonce defprotocol defstruct defmulti defmethod defn- defn defmacro deftype defrecord';
  const keywords = {
    $pattern: SYMBOL_RE,
    'builtin-name':
      // Clojure keywords
      globals + ' ' +
      'cond apply if-not if-let if not not= =|0 <|0 >|0 <=|0 >=|0 ==|0 +|0 /|0 *|0 -|0 rem ' +
      'quot neg? pos? delay? symbol? keyword? true? false? integer? empty? coll? list? ' +
      'set? ifn? fn? associative? sequential? sorted? counted? reversible? number? decimal? ' +
      'class? distinct? isa? float? rational? reduced? ratio? odd? even? char? seq? vector? ' +
      'string? map? nil? contains? zero? instance? not-every? not-any? libspec? -> ->> .. . ' +
      'inc compare do dotimes mapcat take remove take-while drop letfn drop-last take-last ' +
      'drop-while while intern condp case reduced cycle split-at split-with repeat replicate ' +
      'iterate range merge zipmap declare line-seq sort comparator sort-by dorun doall nthnext ' +
      'nthrest partition eval doseq await await-for let agent atom send send-off release-pending-sends ' +
      'add-watch mapv filterv remove-watch agent-error restart-agent set-error-handler error-handler ' +
      'set-error-mode! error-mode shutdown-agents quote var fn loop recur throw try monitor-enter ' +
      'monitor-exit macroexpand macroexpand-1 for dosync and or ' +
      'when when-not when-let comp juxt partial sequence memoize constantly complement identity assert ' +
      'peek pop doto proxy first rest cons cast coll last butlast ' +
      'sigs reify second ffirst fnext nfirst nnext meta with-meta ns in-ns create-ns import ' +
      'refer keys select-keys vals key val rseq name namespace promise into transient persistent! conj! ' +
      'assoc! dissoc! pop! disj! use class type num float double short byte boolean bigint biginteger ' +
      'bigdec print-method print-dup throw-if printf format load compile get-in update-in pr pr-on newline ' +
      'flush read slurp read-line subvec with-open memfn time re-find re-groups rand-int rand mod locking ' +
      'assert-valid-fdecl alias resolve ref deref refset swap! reset! set-validator! compare-and-set! alter-meta! ' +
      'reset-meta! commute get-validator alter ref-set ref-history-count ref-min-history ref-max-history ensure sync io! ' +
      'new next conj set! to-array future future-call into-array aset gen-class reduce map filter find empty ' +
      'hash-map hash-set sorted-map sorted-map-by sorted-set sorted-set-by vec vector seq flatten reverse assoc dissoc list ' +
      'disj get union difference intersection extend extend-type extend-protocol int nth delay count concat chunk chunk-buffer ' +
      'chunk-append chunk-first chunk-rest max min dec unchecked-inc-int unchecked-inc unchecked-dec-inc unchecked-dec unchecked-negate ' +
      'unchecked-add-int unchecked-add unchecked-subtract-int unchecked-subtract chunk-next chunk-cons chunked-seq? prn vary-meta ' +
      'lazy-seq spread list* str find-keyword keyword symbol gensym force rationalize'
  };

  const SIMPLE_NUMBER_RE = '[-+]?\\d+(\\.\\d+)?';

  const SYMBOL = {
    begin: SYMBOL_RE,
    relevance: 0
  };
  const NUMBER = {
    className: 'number',
    begin: SIMPLE_NUMBER_RE,
    relevance: 0
  };
  const STRING = hljs.inherit(hljs.QUOTE_STRING_MODE, {
    illegal: null
  });
  const COMMENT = hljs.COMMENT(
    ';',
    '$',
    {
      relevance: 0
    }
  );
  const LITERAL = {
    className: 'literal',
    begin: /\b(true|false|nil)\b/
  };
  const COLLECTION = {
    begin: '[\\[\\{]',
    end: '[\\]\\}]'
  };
  const HINT = {
    className: 'comment',
    begin: '\\^' + SYMBOL_RE
  };
  const HINT_COL = hljs.COMMENT('\\^\\{', '\\}');
  const KEY = {
    className: 'symbol',
    begin: '[:]{1,2}' + SYMBOL_RE
  };
  const LIST = {
    begin: '\\(',
    end: '\\)'
  };
  const BODY = {
    endsWithParent: true,
    relevance: 0
  };
  const NAME = {
    keywords: keywords,
    className: 'name',
    begin: SYMBOL_RE,
    relevance: 0,
    starts: BODY
  };
  const DEFAULT_CONTAINS = [
    LIST,
    STRING,
    HINT,
    HINT_COL,
    COMMENT,
    KEY,
    COLLECTION,
    NUMBER,
    LITERAL,
    SYMBOL
  ];

  const GLOBAL = {
    beginKeywords: globals,
    lexemes: SYMBOL_RE,
    end: '(\\[|#|\\d|"|:|\\{|\\)|\\(|$)',
    contains: [
      {
        className: 'title',
        begin: SYMBOL_RE,
        relevance: 0,
        excludeEnd: true,
        // we can only have a single title
        endsParent: true
      }
    ].concat(DEFAULT_CONTAINS)
  };

  LIST.contains = [
    hljs.COMMENT('comment', ''),
    GLOBAL,
    NAME,
    BODY
  ];
  BODY.contains = DEFAULT_CONTAINS;
  COLLECTION.contains = DEFAULT_CONTAINS;
  HINT_COL.contains = [ COLLECTION ];

  return {
    name: 'Clojure',
    aliases: [ 'clj' ],
    illegal: /\S/,
    contains: [
      LIST,
      STRING,
      HINT,
      HINT_COL,
      COMMENT,
      KEY,
      COLLECTION,
      NUMBER,
      LITERAL
    ]
  };
}

module.exports = clojure;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2Nsb2p1cmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUVBQW1FO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsT0FBTztBQUM5QztBQUNBO0FBQ0EsZ0JBQWdCLElBQUk7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoic3RhdGljL2NodW5rcy8zMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5MYW5ndWFnZTogQ2xvanVyZVxuRGVzY3JpcHRpb246IENsb2p1cmUgc3ludGF4IChiYXNlZCBvbiBsaXNwLmpzKVxuQXV0aG9yOiBtZm9ybm9zXG5XZWJzaXRlOiBodHRwczovL2Nsb2p1cmUub3JnXG5DYXRlZ29yeTogbGlzcFxuKi9cblxuLyoqIEB0eXBlIExhbmd1YWdlRm4gKi9cbmZ1bmN0aW9uIGNsb2p1cmUoaGxqcykge1xuICBjb25zdCBTWU1CT0xTVEFSVCA9ICdhLXpBLVpfXFxcXC0hLj8rKj08PiYjXFwnJztcbiAgY29uc3QgU1lNQk9MX1JFID0gJ1snICsgU1lNQk9MU1RBUlQgKyAnXVsnICsgU1lNQk9MU1RBUlQgKyAnMC05Lzs6XSonO1xuICBjb25zdCBnbG9iYWxzID0gJ2RlZiBkZWZvbmNlIGRlZnByb3RvY29sIGRlZnN0cnVjdCBkZWZtdWx0aSBkZWZtZXRob2QgZGVmbi0gZGVmbiBkZWZtYWNybyBkZWZ0eXBlIGRlZnJlY29yZCc7XG4gIGNvbnN0IGtleXdvcmRzID0ge1xuICAgICRwYXR0ZXJuOiBTWU1CT0xfUkUsXG4gICAgJ2J1aWx0aW4tbmFtZSc6XG4gICAgICAvLyBDbG9qdXJlIGtleXdvcmRzXG4gICAgICBnbG9iYWxzICsgJyAnICtcbiAgICAgICdjb25kIGFwcGx5IGlmLW5vdCBpZi1sZXQgaWYgbm90IG5vdD0gPXwwIDx8MCA+fDAgPD18MCA+PXwwID09fDAgK3wwIC98MCAqfDAgLXwwIHJlbSAnICtcbiAgICAgICdxdW90IG5lZz8gcG9zPyBkZWxheT8gc3ltYm9sPyBrZXl3b3JkPyB0cnVlPyBmYWxzZT8gaW50ZWdlcj8gZW1wdHk/IGNvbGw/IGxpc3Q/ICcgK1xuICAgICAgJ3NldD8gaWZuPyBmbj8gYXNzb2NpYXRpdmU/IHNlcXVlbnRpYWw/IHNvcnRlZD8gY291bnRlZD8gcmV2ZXJzaWJsZT8gbnVtYmVyPyBkZWNpbWFsPyAnICtcbiAgICAgICdjbGFzcz8gZGlzdGluY3Q/IGlzYT8gZmxvYXQ/IHJhdGlvbmFsPyByZWR1Y2VkPyByYXRpbz8gb2RkPyBldmVuPyBjaGFyPyBzZXE/IHZlY3Rvcj8gJyArXG4gICAgICAnc3RyaW5nPyBtYXA/IG5pbD8gY29udGFpbnM/IHplcm8/IGluc3RhbmNlPyBub3QtZXZlcnk/IG5vdC1hbnk/IGxpYnNwZWM/IC0+IC0+PiAuLiAuICcgK1xuICAgICAgJ2luYyBjb21wYXJlIGRvIGRvdGltZXMgbWFwY2F0IHRha2UgcmVtb3ZlIHRha2Utd2hpbGUgZHJvcCBsZXRmbiBkcm9wLWxhc3QgdGFrZS1sYXN0ICcgK1xuICAgICAgJ2Ryb3Atd2hpbGUgd2hpbGUgaW50ZXJuIGNvbmRwIGNhc2UgcmVkdWNlZCBjeWNsZSBzcGxpdC1hdCBzcGxpdC13aXRoIHJlcGVhdCByZXBsaWNhdGUgJyArXG4gICAgICAnaXRlcmF0ZSByYW5nZSBtZXJnZSB6aXBtYXAgZGVjbGFyZSBsaW5lLXNlcSBzb3J0IGNvbXBhcmF0b3Igc29ydC1ieSBkb3J1biBkb2FsbCBudGhuZXh0ICcgK1xuICAgICAgJ250aHJlc3QgcGFydGl0aW9uIGV2YWwgZG9zZXEgYXdhaXQgYXdhaXQtZm9yIGxldCBhZ2VudCBhdG9tIHNlbmQgc2VuZC1vZmYgcmVsZWFzZS1wZW5kaW5nLXNlbmRzICcgK1xuICAgICAgJ2FkZC13YXRjaCBtYXB2IGZpbHRlcnYgcmVtb3ZlLXdhdGNoIGFnZW50LWVycm9yIHJlc3RhcnQtYWdlbnQgc2V0LWVycm9yLWhhbmRsZXIgZXJyb3ItaGFuZGxlciAnICtcbiAgICAgICdzZXQtZXJyb3ItbW9kZSEgZXJyb3ItbW9kZSBzaHV0ZG93bi1hZ2VudHMgcXVvdGUgdmFyIGZuIGxvb3AgcmVjdXIgdGhyb3cgdHJ5IG1vbml0b3ItZW50ZXIgJyArXG4gICAgICAnbW9uaXRvci1leGl0IG1hY3JvZXhwYW5kIG1hY3JvZXhwYW5kLTEgZm9yIGRvc3luYyBhbmQgb3IgJyArXG4gICAgICAnd2hlbiB3aGVuLW5vdCB3aGVuLWxldCBjb21wIGp1eHQgcGFydGlhbCBzZXF1ZW5jZSBtZW1vaXplIGNvbnN0YW50bHkgY29tcGxlbWVudCBpZGVudGl0eSBhc3NlcnQgJyArXG4gICAgICAncGVlayBwb3AgZG90byBwcm94eSBmaXJzdCByZXN0IGNvbnMgY2FzdCBjb2xsIGxhc3QgYnV0bGFzdCAnICtcbiAgICAgICdzaWdzIHJlaWZ5IHNlY29uZCBmZmlyc3QgZm5leHQgbmZpcnN0IG5uZXh0IG1ldGEgd2l0aC1tZXRhIG5zIGluLW5zIGNyZWF0ZS1ucyBpbXBvcnQgJyArXG4gICAgICAncmVmZXIga2V5cyBzZWxlY3Qta2V5cyB2YWxzIGtleSB2YWwgcnNlcSBuYW1lIG5hbWVzcGFjZSBwcm9taXNlIGludG8gdHJhbnNpZW50IHBlcnNpc3RlbnQhIGNvbmohICcgK1xuICAgICAgJ2Fzc29jISBkaXNzb2MhIHBvcCEgZGlzaiEgdXNlIGNsYXNzIHR5cGUgbnVtIGZsb2F0IGRvdWJsZSBzaG9ydCBieXRlIGJvb2xlYW4gYmlnaW50IGJpZ2ludGVnZXIgJyArXG4gICAgICAnYmlnZGVjIHByaW50LW1ldGhvZCBwcmludC1kdXAgdGhyb3ctaWYgcHJpbnRmIGZvcm1hdCBsb2FkIGNvbXBpbGUgZ2V0LWluIHVwZGF0ZS1pbiBwciBwci1vbiBuZXdsaW5lICcgK1xuICAgICAgJ2ZsdXNoIHJlYWQgc2x1cnAgcmVhZC1saW5lIHN1YnZlYyB3aXRoLW9wZW4gbWVtZm4gdGltZSByZS1maW5kIHJlLWdyb3VwcyByYW5kLWludCByYW5kIG1vZCBsb2NraW5nICcgK1xuICAgICAgJ2Fzc2VydC12YWxpZC1mZGVjbCBhbGlhcyByZXNvbHZlIHJlZiBkZXJlZiByZWZzZXQgc3dhcCEgcmVzZXQhIHNldC12YWxpZGF0b3IhIGNvbXBhcmUtYW5kLXNldCEgYWx0ZXItbWV0YSEgJyArXG4gICAgICAncmVzZXQtbWV0YSEgY29tbXV0ZSBnZXQtdmFsaWRhdG9yIGFsdGVyIHJlZi1zZXQgcmVmLWhpc3RvcnktY291bnQgcmVmLW1pbi1oaXN0b3J5IHJlZi1tYXgtaGlzdG9yeSBlbnN1cmUgc3luYyBpbyEgJyArXG4gICAgICAnbmV3IG5leHQgY29uaiBzZXQhIHRvLWFycmF5IGZ1dHVyZSBmdXR1cmUtY2FsbCBpbnRvLWFycmF5IGFzZXQgZ2VuLWNsYXNzIHJlZHVjZSBtYXAgZmlsdGVyIGZpbmQgZW1wdHkgJyArXG4gICAgICAnaGFzaC1tYXAgaGFzaC1zZXQgc29ydGVkLW1hcCBzb3J0ZWQtbWFwLWJ5IHNvcnRlZC1zZXQgc29ydGVkLXNldC1ieSB2ZWMgdmVjdG9yIHNlcSBmbGF0dGVuIHJldmVyc2UgYXNzb2MgZGlzc29jIGxpc3QgJyArXG4gICAgICAnZGlzaiBnZXQgdW5pb24gZGlmZmVyZW5jZSBpbnRlcnNlY3Rpb24gZXh0ZW5kIGV4dGVuZC10eXBlIGV4dGVuZC1wcm90b2NvbCBpbnQgbnRoIGRlbGF5IGNvdW50IGNvbmNhdCBjaHVuayBjaHVuay1idWZmZXIgJyArXG4gICAgICAnY2h1bmstYXBwZW5kIGNodW5rLWZpcnN0IGNodW5rLXJlc3QgbWF4IG1pbiBkZWMgdW5jaGVja2VkLWluYy1pbnQgdW5jaGVja2VkLWluYyB1bmNoZWNrZWQtZGVjLWluYyB1bmNoZWNrZWQtZGVjIHVuY2hlY2tlZC1uZWdhdGUgJyArXG4gICAgICAndW5jaGVja2VkLWFkZC1pbnQgdW5jaGVja2VkLWFkZCB1bmNoZWNrZWQtc3VidHJhY3QtaW50IHVuY2hlY2tlZC1zdWJ0cmFjdCBjaHVuay1uZXh0IGNodW5rLWNvbnMgY2h1bmtlZC1zZXE/IHBybiB2YXJ5LW1ldGEgJyArXG4gICAgICAnbGF6eS1zZXEgc3ByZWFkIGxpc3QqIHN0ciBmaW5kLWtleXdvcmQga2V5d29yZCBzeW1ib2wgZ2Vuc3ltIGZvcmNlIHJhdGlvbmFsaXplJ1xuICB9O1xuXG4gIGNvbnN0IFNJTVBMRV9OVU1CRVJfUkUgPSAnWy0rXT9cXFxcZCsoXFxcXC5cXFxcZCspPyc7XG5cbiAgY29uc3QgU1lNQk9MID0ge1xuICAgIGJlZ2luOiBTWU1CT0xfUkUsXG4gICAgcmVsZXZhbmNlOiAwXG4gIH07XG4gIGNvbnN0IE5VTUJFUiA9IHtcbiAgICBjbGFzc05hbWU6ICdudW1iZXInLFxuICAgIGJlZ2luOiBTSU1QTEVfTlVNQkVSX1JFLFxuICAgIHJlbGV2YW5jZTogMFxuICB9O1xuICBjb25zdCBTVFJJTkcgPSBobGpzLmluaGVyaXQoaGxqcy5RVU9URV9TVFJJTkdfTU9ERSwge1xuICAgIGlsbGVnYWw6IG51bGxcbiAgfSk7XG4gIGNvbnN0IENPTU1FTlQgPSBobGpzLkNPTU1FTlQoXG4gICAgJzsnLFxuICAgICckJyxcbiAgICB7XG4gICAgICByZWxldmFuY2U6IDBcbiAgICB9XG4gICk7XG4gIGNvbnN0IExJVEVSQUwgPSB7XG4gICAgY2xhc3NOYW1lOiAnbGl0ZXJhbCcsXG4gICAgYmVnaW46IC9cXGIodHJ1ZXxmYWxzZXxuaWwpXFxiL1xuICB9O1xuICBjb25zdCBDT0xMRUNUSU9OID0ge1xuICAgIGJlZ2luOiAnW1xcXFxbXFxcXHtdJyxcbiAgICBlbmQ6ICdbXFxcXF1cXFxcfV0nXG4gIH07XG4gIGNvbnN0IEhJTlQgPSB7XG4gICAgY2xhc3NOYW1lOiAnY29tbWVudCcsXG4gICAgYmVnaW46ICdcXFxcXicgKyBTWU1CT0xfUkVcbiAgfTtcbiAgY29uc3QgSElOVF9DT0wgPSBobGpzLkNPTU1FTlQoJ1xcXFxeXFxcXHsnLCAnXFxcXH0nKTtcbiAgY29uc3QgS0VZID0ge1xuICAgIGNsYXNzTmFtZTogJ3N5bWJvbCcsXG4gICAgYmVnaW46ICdbOl17MSwyfScgKyBTWU1CT0xfUkVcbiAgfTtcbiAgY29uc3QgTElTVCA9IHtcbiAgICBiZWdpbjogJ1xcXFwoJyxcbiAgICBlbmQ6ICdcXFxcKSdcbiAgfTtcbiAgY29uc3QgQk9EWSA9IHtcbiAgICBlbmRzV2l0aFBhcmVudDogdHJ1ZSxcbiAgICByZWxldmFuY2U6IDBcbiAgfTtcbiAgY29uc3QgTkFNRSA9IHtcbiAgICBrZXl3b3Jkczoga2V5d29yZHMsXG4gICAgY2xhc3NOYW1lOiAnbmFtZScsXG4gICAgYmVnaW46IFNZTUJPTF9SRSxcbiAgICByZWxldmFuY2U6IDAsXG4gICAgc3RhcnRzOiBCT0RZXG4gIH07XG4gIGNvbnN0IERFRkFVTFRfQ09OVEFJTlMgPSBbXG4gICAgTElTVCxcbiAgICBTVFJJTkcsXG4gICAgSElOVCxcbiAgICBISU5UX0NPTCxcbiAgICBDT01NRU5ULFxuICAgIEtFWSxcbiAgICBDT0xMRUNUSU9OLFxuICAgIE5VTUJFUixcbiAgICBMSVRFUkFMLFxuICAgIFNZTUJPTFxuICBdO1xuXG4gIGNvbnN0IEdMT0JBTCA9IHtcbiAgICBiZWdpbktleXdvcmRzOiBnbG9iYWxzLFxuICAgIGxleGVtZXM6IFNZTUJPTF9SRSxcbiAgICBlbmQ6ICcoXFxcXFt8I3xcXFxcZHxcInw6fFxcXFx7fFxcXFwpfFxcXFwofCQpJyxcbiAgICBjb250YWluczogW1xuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICd0aXRsZScsXG4gICAgICAgIGJlZ2luOiBTWU1CT0xfUkUsXG4gICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgZXhjbHVkZUVuZDogdHJ1ZSxcbiAgICAgICAgLy8gd2UgY2FuIG9ubHkgaGF2ZSBhIHNpbmdsZSB0aXRsZVxuICAgICAgICBlbmRzUGFyZW50OiB0cnVlXG4gICAgICB9XG4gICAgXS5jb25jYXQoREVGQVVMVF9DT05UQUlOUylcbiAgfTtcblxuICBMSVNULmNvbnRhaW5zID0gW1xuICAgIGhsanMuQ09NTUVOVCgnY29tbWVudCcsICcnKSxcbiAgICBHTE9CQUwsXG4gICAgTkFNRSxcbiAgICBCT0RZXG4gIF07XG4gIEJPRFkuY29udGFpbnMgPSBERUZBVUxUX0NPTlRBSU5TO1xuICBDT0xMRUNUSU9OLmNvbnRhaW5zID0gREVGQVVMVF9DT05UQUlOUztcbiAgSElOVF9DT0wuY29udGFpbnMgPSBbIENPTExFQ1RJT04gXTtcblxuICByZXR1cm4ge1xuICAgIG5hbWU6ICdDbG9qdXJlJyxcbiAgICBhbGlhc2VzOiBbICdjbGonIF0sXG4gICAgaWxsZWdhbDogL1xcUy8sXG4gICAgY29udGFpbnM6IFtcbiAgICAgIExJU1QsXG4gICAgICBTVFJJTkcsXG4gICAgICBISU5ULFxuICAgICAgSElOVF9DT0wsXG4gICAgICBDT01NRU5ULFxuICAgICAgS0VZLFxuICAgICAgQ09MTEVDVElPTixcbiAgICAgIE5VTUJFUixcbiAgICAgIExJVEVSQUxcbiAgICBdXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvanVyZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=