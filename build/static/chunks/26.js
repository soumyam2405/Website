(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[26],{

/***/ "./node_modules/highlight.js/lib/languages/capnproto.js":
/*!**************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/capnproto.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Cap’n Proto
Author: Oleg Efimov <efimovov@gmail.com>
Description: Cap’n Proto message definition format
Website: https://capnproto.org/capnp-tool.html
Category: protocols
*/

/** @type LanguageFn */
function capnproto(hljs) {
  return {
    name: 'Cap’n Proto',
    aliases: ['capnp'],
    keywords: {
      keyword:
        'struct enum interface union group import using const annotation extends in of on as with from fixed',
      built_in:
        'Void Bool Int8 Int16 Int32 Int64 UInt8 UInt16 UInt32 UInt64 Float32 Float64 ' +
        'Text Data AnyPointer AnyStruct Capability List',
      literal:
        'true false'
    },
    contains: [
      hljs.QUOTE_STRING_MODE,
      hljs.NUMBER_MODE,
      hljs.HASH_COMMENT_MODE,
      {
        className: 'meta',
        begin: /@0x[\w\d]{16};/,
        illegal: /\n/
      },
      {
        className: 'symbol',
        begin: /@\d+\b/
      },
      {
        className: 'class',
        beginKeywords: 'struct enum',
        end: /\{/,
        illegal: /\n/,
        contains: [hljs.inherit(hljs.TITLE_MODE, {
          starts: {
            endsWithParent: true,
            excludeEnd: true
          } // hack: eating everything after the first title
        })]
      },
      {
        className: 'class',
        beginKeywords: 'interface',
        end: /\{/,
        illegal: /\n/,
        contains: [hljs.inherit(hljs.TITLE_MODE, {
          starts: {
            endsWithParent: true,
            excludeEnd: true
          } // hack: eating everything after the first title
        })]
      }
    ]
  };
}

module.exports = capnproto;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2NhcG5wcm90by5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsSUFBSTtBQUM5QjtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoic3RhdGljL2NodW5rcy8yNi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5MYW5ndWFnZTogQ2Fw4oCZbiBQcm90b1xuQXV0aG9yOiBPbGVnIEVmaW1vdiA8ZWZpbW92b3ZAZ21haWwuY29tPlxuRGVzY3JpcHRpb246IENhcOKAmW4gUHJvdG8gbWVzc2FnZSBkZWZpbml0aW9uIGZvcm1hdFxuV2Vic2l0ZTogaHR0cHM6Ly9jYXBucHJvdG8ub3JnL2NhcG5wLXRvb2wuaHRtbFxuQ2F0ZWdvcnk6IHByb3RvY29sc1xuKi9cblxuLyoqIEB0eXBlIExhbmd1YWdlRm4gKi9cbmZ1bmN0aW9uIGNhcG5wcm90byhobGpzKSB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ0NhcOKAmW4gUHJvdG8nLFxuICAgIGFsaWFzZXM6IFsnY2FwbnAnXSxcbiAgICBrZXl3b3Jkczoge1xuICAgICAga2V5d29yZDpcbiAgICAgICAgJ3N0cnVjdCBlbnVtIGludGVyZmFjZSB1bmlvbiBncm91cCBpbXBvcnQgdXNpbmcgY29uc3QgYW5ub3RhdGlvbiBleHRlbmRzIGluIG9mIG9uIGFzIHdpdGggZnJvbSBmaXhlZCcsXG4gICAgICBidWlsdF9pbjpcbiAgICAgICAgJ1ZvaWQgQm9vbCBJbnQ4IEludDE2IEludDMyIEludDY0IFVJbnQ4IFVJbnQxNiBVSW50MzIgVUludDY0IEZsb2F0MzIgRmxvYXQ2NCAnICtcbiAgICAgICAgJ1RleHQgRGF0YSBBbnlQb2ludGVyIEFueVN0cnVjdCBDYXBhYmlsaXR5IExpc3QnLFxuICAgICAgbGl0ZXJhbDpcbiAgICAgICAgJ3RydWUgZmFsc2UnXG4gICAgfSxcbiAgICBjb250YWluczogW1xuICAgICAgaGxqcy5RVU9URV9TVFJJTkdfTU9ERSxcbiAgICAgIGhsanMuTlVNQkVSX01PREUsXG4gICAgICBobGpzLkhBU0hfQ09NTUVOVF9NT0RFLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICAgICAgYmVnaW46IC9AMHhbXFx3XFxkXXsxNn07LyxcbiAgICAgICAgaWxsZWdhbDogL1xcbi9cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3N5bWJvbCcsXG4gICAgICAgIGJlZ2luOiAvQFxcZCtcXGIvXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdjbGFzcycsXG4gICAgICAgIGJlZ2luS2V5d29yZHM6ICdzdHJ1Y3QgZW51bScsXG4gICAgICAgIGVuZDogL1xcey8sXG4gICAgICAgIGlsbGVnYWw6IC9cXG4vLFxuICAgICAgICBjb250YWluczogW2hsanMuaW5oZXJpdChobGpzLlRJVExFX01PREUsIHtcbiAgICAgICAgICBzdGFydHM6IHtcbiAgICAgICAgICAgIGVuZHNXaXRoUGFyZW50OiB0cnVlLFxuICAgICAgICAgICAgZXhjbHVkZUVuZDogdHJ1ZVxuICAgICAgICAgIH0gLy8gaGFjazogZWF0aW5nIGV2ZXJ5dGhpbmcgYWZ0ZXIgdGhlIGZpcnN0IHRpdGxlXG4gICAgICAgIH0pXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnY2xhc3MnLFxuICAgICAgICBiZWdpbktleXdvcmRzOiAnaW50ZXJmYWNlJyxcbiAgICAgICAgZW5kOiAvXFx7LyxcbiAgICAgICAgaWxsZWdhbDogL1xcbi8sXG4gICAgICAgIGNvbnRhaW5zOiBbaGxqcy5pbmhlcml0KGhsanMuVElUTEVfTU9ERSwge1xuICAgICAgICAgIHN0YXJ0czoge1xuICAgICAgICAgICAgZW5kc1dpdGhQYXJlbnQ6IHRydWUsXG4gICAgICAgICAgICBleGNsdWRlRW5kOiB0cnVlXG4gICAgICAgICAgfSAvLyBoYWNrOiBlYXRpbmcgZXZlcnl0aGluZyBhZnRlciB0aGUgZmlyc3QgdGl0bGVcbiAgICAgICAgfSldXG4gICAgICB9XG4gICAgXVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNhcG5wcm90bztcbiJdLCJzb3VyY2VSb290IjoiIn0=