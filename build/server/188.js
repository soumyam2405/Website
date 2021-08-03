exports.ids = [188];
exports.modules = {

/***/ "./node_modules/highlight.js/lib/languages/xquery.js":
/*!***********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/xquery.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: XQuery
Author: Dirk Kirsten <dk@basex.org>
Contributor: Duncan Paterson
Description: Supports XQuery 3.1 including XQuery Update 3, so also XPath (as it is a superset)
Refactored to process xml constructor syntax and function-bodies. Added missing data-types, xpath operands, inbuilt functions, and query prologs
Website: https://www.w3.org/XML/Query/
Category: functional
Audit: 2020
*/

/** @type LanguageFn */
function xquery(_hljs) {
  // see https://www.w3.org/TR/xquery/#id-terminal-delimitation
  const KEYWORDS =
    'module schema namespace boundary-space preserve no-preserve strip default collation base-uri ordering context decimal-format decimal-separator copy-namespaces empty-sequence except exponent-separator external grouping-separator inherit no-inherit lax minus-sign per-mille percent schema-attribute schema-element strict unordered zero-digit ' +
    'declare import option function validate variable ' +
    'for at in let where order group by return if then else ' +
    'tumbling sliding window start when only end previous next stable ' +
    'ascending descending allowing empty greatest least some every satisfies switch case typeswitch try catch ' +
    'and or to union intersect instance of treat as castable cast map array ' +
    'delete insert into replace value rename copy modify update';

  // Node Types (sorted by inheritance)
  // atomic types (sorted by inheritance)
  const TYPE =
    'item document-node node attribute document element comment namespace namespace-node processing-instruction text construction ' +
    'xs:anyAtomicType xs:untypedAtomic xs:duration xs:time xs:decimal xs:float xs:double xs:gYearMonth xs:gYear xs:gMonthDay xs:gMonth xs:gDay xs:boolean xs:base64Binary xs:hexBinary xs:anyURI xs:QName xs:NOTATION xs:dateTime xs:dateTimeStamp xs:date xs:string xs:normalizedString xs:token xs:language xs:NMTOKEN xs:Name xs:NCName xs:ID xs:IDREF xs:ENTITY xs:integer xs:nonPositiveInteger xs:negativeInteger xs:long xs:int xs:short xs:byte xs:nonNegativeInteger xs:unisignedLong xs:unsignedInt xs:unsignedShort xs:unsignedByte xs:positiveInteger xs:yearMonthDuration xs:dayTimeDuration';

  const LITERAL =
    'eq ne lt le gt ge is ' +
    'self:: child:: descendant:: descendant-or-self:: attribute:: following:: following-sibling:: parent:: ancestor:: ancestor-or-self:: preceding:: preceding-sibling:: ' +
    'NaN';

  // functions (TODO: find regex for op: without breaking build)
  const BUILT_IN = {
    className: 'built_in',
    variants: [
      {
        begin: /\barray:/,
        end: /(?:append|filter|flatten|fold-(?:left|right)|for-each(?:-pair)?|get|head|insert-before|join|put|remove|reverse|size|sort|subarray|tail)\b/
      },
      {
        begin: /\bmap:/,
        end: /(?:contains|entry|find|for-each|get|keys|merge|put|remove|size)\b/
      },
      {
        begin: /\bmath:/,
        end: /(?:a(?:cos|sin|tan[2]?)|cos|exp(?:10)?|log(?:10)?|pi|pow|sin|sqrt|tan)\b/
      },
      {
        begin: /\bop:/,
        end: /\(/,
        excludeEnd: true
      },
      {
        begin: /\bfn:/,
        end: /\(/,
        excludeEnd: true
      },
      // do not highlight inbuilt strings as variable or xml element names
      {
        begin: /[^</$:'"-]\b(?:abs|accumulator-(?:after|before)|adjust-(?:date(?:Time)?|time)-to-timezone|analyze-string|apply|available-(?:environment-variables|system-properties)|avg|base-uri|boolean|ceiling|codepoints?-(?:equal|to-string)|collation-key|collection|compare|concat|contains(?:-token)?|copy-of|count|current(?:-)?(?:date(?:Time)?|time|group(?:ing-key)?|output-uri|merge-(?:group|key))?data|dateTime|days?-from-(?:date(?:Time)?|duration)|deep-equal|default-(?:collation|language)|distinct-values|document(?:-uri)?|doc(?:-available)?|element-(?:available|with-id)|empty|encode-for-uri|ends-with|environment-variable|error|escape-html-uri|exactly-one|exists|false|filter|floor|fold-(?:left|right)|for-each(?:-pair)?|format-(?:date(?:Time)?|time|integer|number)|function-(?:arity|available|lookup|name)|generate-id|has-children|head|hours-from-(?:dateTime|duration|time)|id(?:ref)?|implicit-timezone|in-scope-prefixes|index-of|innermost|insert-before|iri-to-uri|json-(?:doc|to-xml)|key|lang|last|load-xquery-module|local-name(?:-from-QName)?|(?:lower|upper)-case|matches|max|minutes-from-(?:dateTime|duration|time)|min|months?-from-(?:date(?:Time)?|duration)|name(?:space-uri-?(?:for-prefix|from-QName)?)?|nilled|node-name|normalize-(?:space|unicode)|not|number|one-or-more|outermost|parse-(?:ietf-date|json)|path|position|(?:prefix-from-)?QName|random-number-generator|regex-group|remove|replace|resolve-(?:QName|uri)|reverse|root|round(?:-half-to-even)?|seconds-from-(?:dateTime|duration|time)|snapshot|sort|starts-with|static-base-uri|stream-available|string-?(?:join|length|to-codepoints)?|subsequence|substring-?(?:after|before)?|sum|system-property|tail|timezone-from-(?:date(?:Time)?|time)|tokenize|trace|trans(?:form|late)|true|type-available|unordered|unparsed-(?:entity|text)?-?(?:public-id|uri|available|lines)?|uri-collection|xml-to-json|years?-from-(?:date(?:Time)?|duration)|zero-or-one)\b/
      },
      {
        begin: /\blocal:/,
        end: /\(/,
        excludeEnd: true
      },
      {
        begin: /\bzip:/,
        end: /(?:zip-file|(?:xml|html|text|binary)-entry| (?:update-)?entries)\b/
      },
      {
        begin: /\b(?:util|db|functx|app|xdmp|xmldb):/,
        end: /\(/,
        excludeEnd: true
      }
    ]
  };

  const TITLE = {
    className: 'title',
    begin: /\bxquery version "[13]\.[01]"\s?(?:encoding ".+")?/,
    end: /;/
  };

  const VAR = {
    className: 'variable',
    begin: /[$][\w\-:]+/
  };

  const NUMBER = {
    className: 'number',
    begin: /(\b0[0-7_]+)|(\b0x[0-9a-fA-F_]+)|(\b[1-9][0-9_]*(\.[0-9_]+)?)|[0_]\b/,
    relevance: 0
  };

  const STRING = {
    className: 'string',
    variants: [
      {
        begin: /"/,
        end: /"/,
        contains: [
          {
            begin: /""/,
            relevance: 0
          }
        ]
      },
      {
        begin: /'/,
        end: /'/,
        contains: [
          {
            begin: /''/,
            relevance: 0
          }
        ]
      }
    ]
  };

  const ANNOTATION = {
    className: 'meta',
    begin: /%[\w\-:]+/
  };

  const COMMENT = {
    className: 'comment',
    begin: /\(:/,
    end: /:\)/,
    relevance: 10,
    contains: [
      {
        className: 'doctag',
        begin: /@\w+/
      }
    ]
  };

  // see https://www.w3.org/TR/xquery/#id-computedConstructors
  // mocha: computed_inbuilt
  // see https://www.regexpal.com/?fam=99749
  const COMPUTED = {
    beginKeywords: 'element attribute comment document processing-instruction',
    end: /\{/,
    excludeEnd: true
  };

  // mocha: direct_method
  const DIRECT = {
    begin: /<([\w._:-]+)(\s+\S*=('|").*('|"))?>/,
    end: /(\/[\w._:-]+>)/,
    subLanguage: 'xml',
    contains: [
      {
        begin: /\{/,
        end: /\}/,
        subLanguage: 'xquery'
      },
      'self'
    ]
  };

  const CONTAINS = [
    VAR,
    BUILT_IN,
    STRING,
    NUMBER,
    COMMENT,
    ANNOTATION,
    TITLE,
    COMPUTED,
    DIRECT
  ];

  return {
    name: 'XQuery',
    aliases: [
      'xpath',
      'xq'
    ],
    case_insensitive: false,
    illegal: /(proc)|(abstract)|(extends)|(until)|(#)/,
    keywords: {
      $pattern: /[a-zA-Z$][a-zA-Z0-9_:-]*/,
      keyword: KEYWORDS,
      type: TYPE,
      literal: LITERAL
    },
    contains: CONTAINS
  };
}

module.exports = xquery;


/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMveHF1ZXJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQixnQkFBZ0I7QUFDaEI7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6IjE4OC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5MYW5ndWFnZTogWFF1ZXJ5XG5BdXRob3I6IERpcmsgS2lyc3RlbiA8ZGtAYmFzZXgub3JnPlxuQ29udHJpYnV0b3I6IER1bmNhbiBQYXRlcnNvblxuRGVzY3JpcHRpb246IFN1cHBvcnRzIFhRdWVyeSAzLjEgaW5jbHVkaW5nIFhRdWVyeSBVcGRhdGUgMywgc28gYWxzbyBYUGF0aCAoYXMgaXQgaXMgYSBzdXBlcnNldClcblJlZmFjdG9yZWQgdG8gcHJvY2VzcyB4bWwgY29uc3RydWN0b3Igc3ludGF4IGFuZCBmdW5jdGlvbi1ib2RpZXMuIEFkZGVkIG1pc3NpbmcgZGF0YS10eXBlcywgeHBhdGggb3BlcmFuZHMsIGluYnVpbHQgZnVuY3Rpb25zLCBhbmQgcXVlcnkgcHJvbG9nc1xuV2Vic2l0ZTogaHR0cHM6Ly93d3cudzMub3JnL1hNTC9RdWVyeS9cbkNhdGVnb3J5OiBmdW5jdGlvbmFsXG5BdWRpdDogMjAyMFxuKi9cblxuLyoqIEB0eXBlIExhbmd1YWdlRm4gKi9cbmZ1bmN0aW9uIHhxdWVyeShfaGxqcykge1xuICAvLyBzZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL3hxdWVyeS8jaWQtdGVybWluYWwtZGVsaW1pdGF0aW9uXG4gIGNvbnN0IEtFWVdPUkRTID1cbiAgICAnbW9kdWxlIHNjaGVtYSBuYW1lc3BhY2UgYm91bmRhcnktc3BhY2UgcHJlc2VydmUgbm8tcHJlc2VydmUgc3RyaXAgZGVmYXVsdCBjb2xsYXRpb24gYmFzZS11cmkgb3JkZXJpbmcgY29udGV4dCBkZWNpbWFsLWZvcm1hdCBkZWNpbWFsLXNlcGFyYXRvciBjb3B5LW5hbWVzcGFjZXMgZW1wdHktc2VxdWVuY2UgZXhjZXB0IGV4cG9uZW50LXNlcGFyYXRvciBleHRlcm5hbCBncm91cGluZy1zZXBhcmF0b3IgaW5oZXJpdCBuby1pbmhlcml0IGxheCBtaW51cy1zaWduIHBlci1taWxsZSBwZXJjZW50IHNjaGVtYS1hdHRyaWJ1dGUgc2NoZW1hLWVsZW1lbnQgc3RyaWN0IHVub3JkZXJlZCB6ZXJvLWRpZ2l0ICcgK1xuICAgICdkZWNsYXJlIGltcG9ydCBvcHRpb24gZnVuY3Rpb24gdmFsaWRhdGUgdmFyaWFibGUgJyArXG4gICAgJ2ZvciBhdCBpbiBsZXQgd2hlcmUgb3JkZXIgZ3JvdXAgYnkgcmV0dXJuIGlmIHRoZW4gZWxzZSAnICtcbiAgICAndHVtYmxpbmcgc2xpZGluZyB3aW5kb3cgc3RhcnQgd2hlbiBvbmx5IGVuZCBwcmV2aW91cyBuZXh0IHN0YWJsZSAnICtcbiAgICAnYXNjZW5kaW5nIGRlc2NlbmRpbmcgYWxsb3dpbmcgZW1wdHkgZ3JlYXRlc3QgbGVhc3Qgc29tZSBldmVyeSBzYXRpc2ZpZXMgc3dpdGNoIGNhc2UgdHlwZXN3aXRjaCB0cnkgY2F0Y2ggJyArXG4gICAgJ2FuZCBvciB0byB1bmlvbiBpbnRlcnNlY3QgaW5zdGFuY2Ugb2YgdHJlYXQgYXMgY2FzdGFibGUgY2FzdCBtYXAgYXJyYXkgJyArXG4gICAgJ2RlbGV0ZSBpbnNlcnQgaW50byByZXBsYWNlIHZhbHVlIHJlbmFtZSBjb3B5IG1vZGlmeSB1cGRhdGUnO1xuXG4gIC8vIE5vZGUgVHlwZXMgKHNvcnRlZCBieSBpbmhlcml0YW5jZSlcbiAgLy8gYXRvbWljIHR5cGVzIChzb3J0ZWQgYnkgaW5oZXJpdGFuY2UpXG4gIGNvbnN0IFRZUEUgPVxuICAgICdpdGVtIGRvY3VtZW50LW5vZGUgbm9kZSBhdHRyaWJ1dGUgZG9jdW1lbnQgZWxlbWVudCBjb21tZW50IG5hbWVzcGFjZSBuYW1lc3BhY2Utbm9kZSBwcm9jZXNzaW5nLWluc3RydWN0aW9uIHRleHQgY29uc3RydWN0aW9uICcgK1xuICAgICd4czphbnlBdG9taWNUeXBlIHhzOnVudHlwZWRBdG9taWMgeHM6ZHVyYXRpb24geHM6dGltZSB4czpkZWNpbWFsIHhzOmZsb2F0IHhzOmRvdWJsZSB4czpnWWVhck1vbnRoIHhzOmdZZWFyIHhzOmdNb250aERheSB4czpnTW9udGggeHM6Z0RheSB4czpib29sZWFuIHhzOmJhc2U2NEJpbmFyeSB4czpoZXhCaW5hcnkgeHM6YW55VVJJIHhzOlFOYW1lIHhzOk5PVEFUSU9OIHhzOmRhdGVUaW1lIHhzOmRhdGVUaW1lU3RhbXAgeHM6ZGF0ZSB4czpzdHJpbmcgeHM6bm9ybWFsaXplZFN0cmluZyB4czp0b2tlbiB4czpsYW5ndWFnZSB4czpOTVRPS0VOIHhzOk5hbWUgeHM6TkNOYW1lIHhzOklEIHhzOklEUkVGIHhzOkVOVElUWSB4czppbnRlZ2VyIHhzOm5vblBvc2l0aXZlSW50ZWdlciB4czpuZWdhdGl2ZUludGVnZXIgeHM6bG9uZyB4czppbnQgeHM6c2hvcnQgeHM6Ynl0ZSB4czpub25OZWdhdGl2ZUludGVnZXIgeHM6dW5pc2lnbmVkTG9uZyB4czp1bnNpZ25lZEludCB4czp1bnNpZ25lZFNob3J0IHhzOnVuc2lnbmVkQnl0ZSB4czpwb3NpdGl2ZUludGVnZXIgeHM6eWVhck1vbnRoRHVyYXRpb24geHM6ZGF5VGltZUR1cmF0aW9uJztcblxuICBjb25zdCBMSVRFUkFMID1cbiAgICAnZXEgbmUgbHQgbGUgZ3QgZ2UgaXMgJyArXG4gICAgJ3NlbGY6OiBjaGlsZDo6IGRlc2NlbmRhbnQ6OiBkZXNjZW5kYW50LW9yLXNlbGY6OiBhdHRyaWJ1dGU6OiBmb2xsb3dpbmc6OiBmb2xsb3dpbmctc2libGluZzo6IHBhcmVudDo6IGFuY2VzdG9yOjogYW5jZXN0b3Itb3Itc2VsZjo6IHByZWNlZGluZzo6IHByZWNlZGluZy1zaWJsaW5nOjogJyArXG4gICAgJ05hTic7XG5cbiAgLy8gZnVuY3Rpb25zIChUT0RPOiBmaW5kIHJlZ2V4IGZvciBvcDogd2l0aG91dCBicmVha2luZyBidWlsZClcbiAgY29uc3QgQlVJTFRfSU4gPSB7XG4gICAgY2xhc3NOYW1lOiAnYnVpbHRfaW4nLFxuICAgIHZhcmlhbnRzOiBbXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAvXFxiYXJyYXk6LyxcbiAgICAgICAgZW5kOiAvKD86YXBwZW5kfGZpbHRlcnxmbGF0dGVufGZvbGQtKD86bGVmdHxyaWdodCl8Zm9yLWVhY2goPzotcGFpcik/fGdldHxoZWFkfGluc2VydC1iZWZvcmV8am9pbnxwdXR8cmVtb3ZlfHJldmVyc2V8c2l6ZXxzb3J0fHN1YmFycmF5fHRhaWwpXFxiL1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IC9cXGJtYXA6LyxcbiAgICAgICAgZW5kOiAvKD86Y29udGFpbnN8ZW50cnl8ZmluZHxmb3ItZWFjaHxnZXR8a2V5c3xtZXJnZXxwdXR8cmVtb3ZlfHNpemUpXFxiL1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IC9cXGJtYXRoOi8sXG4gICAgICAgIGVuZDogLyg/OmEoPzpjb3N8c2lufHRhblsyXT8pfGNvc3xleHAoPzoxMCk/fGxvZyg/OjEwKT98cGl8cG93fHNpbnxzcXJ0fHRhbilcXGIvXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogL1xcYm9wOi8sXG4gICAgICAgIGVuZDogL1xcKC8sXG4gICAgICAgIGV4Y2x1ZGVFbmQ6IHRydWVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAvXFxiZm46LyxcbiAgICAgICAgZW5kOiAvXFwoLyxcbiAgICAgICAgZXhjbHVkZUVuZDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIC8vIGRvIG5vdCBoaWdobGlnaHQgaW5idWlsdCBzdHJpbmdzIGFzIHZhcmlhYmxlIG9yIHhtbCBlbGVtZW50IG5hbWVzXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAvW148LyQ6J1wiLV1cXGIoPzphYnN8YWNjdW11bGF0b3ItKD86YWZ0ZXJ8YmVmb3JlKXxhZGp1c3QtKD86ZGF0ZSg/OlRpbWUpP3x0aW1lKS10by10aW1lem9uZXxhbmFseXplLXN0cmluZ3xhcHBseXxhdmFpbGFibGUtKD86ZW52aXJvbm1lbnQtdmFyaWFibGVzfHN5c3RlbS1wcm9wZXJ0aWVzKXxhdmd8YmFzZS11cml8Ym9vbGVhbnxjZWlsaW5nfGNvZGVwb2ludHM/LSg/OmVxdWFsfHRvLXN0cmluZyl8Y29sbGF0aW9uLWtleXxjb2xsZWN0aW9ufGNvbXBhcmV8Y29uY2F0fGNvbnRhaW5zKD86LXRva2VuKT98Y29weS1vZnxjb3VudHxjdXJyZW50KD86LSk/KD86ZGF0ZSg/OlRpbWUpP3x0aW1lfGdyb3VwKD86aW5nLWtleSk/fG91dHB1dC11cml8bWVyZ2UtKD86Z3JvdXB8a2V5KSk/ZGF0YXxkYXRlVGltZXxkYXlzPy1mcm9tLSg/OmRhdGUoPzpUaW1lKT98ZHVyYXRpb24pfGRlZXAtZXF1YWx8ZGVmYXVsdC0oPzpjb2xsYXRpb258bGFuZ3VhZ2UpfGRpc3RpbmN0LXZhbHVlc3xkb2N1bWVudCg/Oi11cmkpP3xkb2MoPzotYXZhaWxhYmxlKT98ZWxlbWVudC0oPzphdmFpbGFibGV8d2l0aC1pZCl8ZW1wdHl8ZW5jb2RlLWZvci11cml8ZW5kcy13aXRofGVudmlyb25tZW50LXZhcmlhYmxlfGVycm9yfGVzY2FwZS1odG1sLXVyaXxleGFjdGx5LW9uZXxleGlzdHN8ZmFsc2V8ZmlsdGVyfGZsb29yfGZvbGQtKD86bGVmdHxyaWdodCl8Zm9yLWVhY2goPzotcGFpcik/fGZvcm1hdC0oPzpkYXRlKD86VGltZSk/fHRpbWV8aW50ZWdlcnxudW1iZXIpfGZ1bmN0aW9uLSg/OmFyaXR5fGF2YWlsYWJsZXxsb29rdXB8bmFtZSl8Z2VuZXJhdGUtaWR8aGFzLWNoaWxkcmVufGhlYWR8aG91cnMtZnJvbS0oPzpkYXRlVGltZXxkdXJhdGlvbnx0aW1lKXxpZCg/OnJlZik/fGltcGxpY2l0LXRpbWV6b25lfGluLXNjb3BlLXByZWZpeGVzfGluZGV4LW9mfGlubmVybW9zdHxpbnNlcnQtYmVmb3JlfGlyaS10by11cml8anNvbi0oPzpkb2N8dG8teG1sKXxrZXl8bGFuZ3xsYXN0fGxvYWQteHF1ZXJ5LW1vZHVsZXxsb2NhbC1uYW1lKD86LWZyb20tUU5hbWUpP3woPzpsb3dlcnx1cHBlciktY2FzZXxtYXRjaGVzfG1heHxtaW51dGVzLWZyb20tKD86ZGF0ZVRpbWV8ZHVyYXRpb258dGltZSl8bWlufG1vbnRocz8tZnJvbS0oPzpkYXRlKD86VGltZSk/fGR1cmF0aW9uKXxuYW1lKD86c3BhY2UtdXJpLT8oPzpmb3ItcHJlZml4fGZyb20tUU5hbWUpPyk/fG5pbGxlZHxub2RlLW5hbWV8bm9ybWFsaXplLSg/OnNwYWNlfHVuaWNvZGUpfG5vdHxudW1iZXJ8b25lLW9yLW1vcmV8b3V0ZXJtb3N0fHBhcnNlLSg/OmlldGYtZGF0ZXxqc29uKXxwYXRofHBvc2l0aW9ufCg/OnByZWZpeC1mcm9tLSk/UU5hbWV8cmFuZG9tLW51bWJlci1nZW5lcmF0b3J8cmVnZXgtZ3JvdXB8cmVtb3ZlfHJlcGxhY2V8cmVzb2x2ZS0oPzpRTmFtZXx1cmkpfHJldmVyc2V8cm9vdHxyb3VuZCg/Oi1oYWxmLXRvLWV2ZW4pP3xzZWNvbmRzLWZyb20tKD86ZGF0ZVRpbWV8ZHVyYXRpb258dGltZSl8c25hcHNob3R8c29ydHxzdGFydHMtd2l0aHxzdGF0aWMtYmFzZS11cml8c3RyZWFtLWF2YWlsYWJsZXxzdHJpbmctPyg/OmpvaW58bGVuZ3RofHRvLWNvZGVwb2ludHMpP3xzdWJzZXF1ZW5jZXxzdWJzdHJpbmctPyg/OmFmdGVyfGJlZm9yZSk/fHN1bXxzeXN0ZW0tcHJvcGVydHl8dGFpbHx0aW1lem9uZS1mcm9tLSg/OmRhdGUoPzpUaW1lKT98dGltZSl8dG9rZW5pemV8dHJhY2V8dHJhbnMoPzpmb3JtfGxhdGUpfHRydWV8dHlwZS1hdmFpbGFibGV8dW5vcmRlcmVkfHVucGFyc2VkLSg/OmVudGl0eXx0ZXh0KT8tPyg/OnB1YmxpYy1pZHx1cml8YXZhaWxhYmxlfGxpbmVzKT98dXJpLWNvbGxlY3Rpb258eG1sLXRvLWpzb258eWVhcnM/LWZyb20tKD86ZGF0ZSg/OlRpbWUpP3xkdXJhdGlvbil8emVyby1vci1vbmUpXFxiL1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IC9cXGJsb2NhbDovLFxuICAgICAgICBlbmQ6IC9cXCgvLFxuICAgICAgICBleGNsdWRlRW5kOiB0cnVlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogL1xcYnppcDovLFxuICAgICAgICBlbmQ6IC8oPzp6aXAtZmlsZXwoPzp4bWx8aHRtbHx0ZXh0fGJpbmFyeSktZW50cnl8ICg/OnVwZGF0ZS0pP2VudHJpZXMpXFxiL1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IC9cXGIoPzp1dGlsfGRifGZ1bmN0eHxhcHB8eGRtcHx4bWxkYik6LyxcbiAgICAgICAgZW5kOiAvXFwoLyxcbiAgICAgICAgZXhjbHVkZUVuZDogdHJ1ZVxuICAgICAgfVxuICAgIF1cbiAgfTtcblxuICBjb25zdCBUSVRMRSA9IHtcbiAgICBjbGFzc05hbWU6ICd0aXRsZScsXG4gICAgYmVnaW46IC9cXGJ4cXVlcnkgdmVyc2lvbiBcIlsxM11cXC5bMDFdXCJcXHM/KD86ZW5jb2RpbmcgXCIuK1wiKT8vLFxuICAgIGVuZDogLzsvXG4gIH07XG5cbiAgY29uc3QgVkFSID0ge1xuICAgIGNsYXNzTmFtZTogJ3ZhcmlhYmxlJyxcbiAgICBiZWdpbjogL1skXVtcXHdcXC06XSsvXG4gIH07XG5cbiAgY29uc3QgTlVNQkVSID0ge1xuICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgYmVnaW46IC8oXFxiMFswLTdfXSspfChcXGIweFswLTlhLWZBLUZfXSspfChcXGJbMS05XVswLTlfXSooXFwuWzAtOV9dKyk/KXxbMF9dXFxiLyxcbiAgICByZWxldmFuY2U6IDBcbiAgfTtcblxuICBjb25zdCBTVFJJTkcgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICB2YXJpYW50czogW1xuICAgICAge1xuICAgICAgICBiZWdpbjogL1wiLyxcbiAgICAgICAgZW5kOiAvXCIvLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luOiAvXCJcIi8sXG4gICAgICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAvJy8sXG4gICAgICAgIGVuZDogLycvLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luOiAvJycvLFxuICAgICAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9O1xuXG4gIGNvbnN0IEFOTk9UQVRJT04gPSB7XG4gICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgYmVnaW46IC8lW1xcd1xcLTpdKy9cbiAgfTtcblxuICBjb25zdCBDT01NRU5UID0ge1xuICAgIGNsYXNzTmFtZTogJ2NvbW1lbnQnLFxuICAgIGJlZ2luOiAvXFwoOi8sXG4gICAgZW5kOiAvOlxcKS8sXG4gICAgcmVsZXZhbmNlOiAxMCxcbiAgICBjb250YWluczogW1xuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdkb2N0YWcnLFxuICAgICAgICBiZWdpbjogL0BcXHcrL1xuICAgICAgfVxuICAgIF1cbiAgfTtcblxuICAvLyBzZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL3hxdWVyeS8jaWQtY29tcHV0ZWRDb25zdHJ1Y3RvcnNcbiAgLy8gbW9jaGE6IGNvbXB1dGVkX2luYnVpbHRcbiAgLy8gc2VlIGh0dHBzOi8vd3d3LnJlZ2V4cGFsLmNvbS8/ZmFtPTk5NzQ5XG4gIGNvbnN0IENPTVBVVEVEID0ge1xuICAgIGJlZ2luS2V5d29yZHM6ICdlbGVtZW50IGF0dHJpYnV0ZSBjb21tZW50IGRvY3VtZW50IHByb2Nlc3NpbmctaW5zdHJ1Y3Rpb24nLFxuICAgIGVuZDogL1xcey8sXG4gICAgZXhjbHVkZUVuZDogdHJ1ZVxuICB9O1xuXG4gIC8vIG1vY2hhOiBkaXJlY3RfbWV0aG9kXG4gIGNvbnN0IERJUkVDVCA9IHtcbiAgICBiZWdpbjogLzwoW1xcdy5fOi1dKykoXFxzK1xcUyo9KCd8XCIpLiooJ3xcIikpPz4vLFxuICAgIGVuZDogLyhcXC9bXFx3Ll86LV0rPikvLFxuICAgIHN1Ykxhbmd1YWdlOiAneG1sJyxcbiAgICBjb250YWluczogW1xuICAgICAge1xuICAgICAgICBiZWdpbjogL1xcey8sXG4gICAgICAgIGVuZDogL1xcfS8sXG4gICAgICAgIHN1Ykxhbmd1YWdlOiAneHF1ZXJ5J1xuICAgICAgfSxcbiAgICAgICdzZWxmJ1xuICAgIF1cbiAgfTtcblxuICBjb25zdCBDT05UQUlOUyA9IFtcbiAgICBWQVIsXG4gICAgQlVJTFRfSU4sXG4gICAgU1RSSU5HLFxuICAgIE5VTUJFUixcbiAgICBDT01NRU5ULFxuICAgIEFOTk9UQVRJT04sXG4gICAgVElUTEUsXG4gICAgQ09NUFVURUQsXG4gICAgRElSRUNUXG4gIF07XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnWFF1ZXJ5JyxcbiAgICBhbGlhc2VzOiBbXG4gICAgICAneHBhdGgnLFxuICAgICAgJ3hxJ1xuICAgIF0sXG4gICAgY2FzZV9pbnNlbnNpdGl2ZTogZmFsc2UsXG4gICAgaWxsZWdhbDogLyhwcm9jKXwoYWJzdHJhY3QpfChleHRlbmRzKXwodW50aWwpfCgjKS8sXG4gICAga2V5d29yZHM6IHtcbiAgICAgICRwYXR0ZXJuOiAvW2EtekEtWiRdW2EtekEtWjAtOV86LV0qLyxcbiAgICAgIGtleXdvcmQ6IEtFWVdPUkRTLFxuICAgICAgdHlwZTogVFlQRSxcbiAgICAgIGxpdGVyYWw6IExJVEVSQUxcbiAgICB9LFxuICAgIGNvbnRhaW5zOiBDT05UQUlOU1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHhxdWVyeTtcbiJdLCJzb3VyY2VSb290IjoiIn0=