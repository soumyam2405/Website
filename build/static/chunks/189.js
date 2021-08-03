(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[189],{

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

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3hxdWVyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQixnQkFBZ0I7QUFDaEI7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvMTg5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBYUXVlcnlcbkF1dGhvcjogRGlyayBLaXJzdGVuIDxka0BiYXNleC5vcmc+XG5Db250cmlidXRvcjogRHVuY2FuIFBhdGVyc29uXG5EZXNjcmlwdGlvbjogU3VwcG9ydHMgWFF1ZXJ5IDMuMSBpbmNsdWRpbmcgWFF1ZXJ5IFVwZGF0ZSAzLCBzbyBhbHNvIFhQYXRoIChhcyBpdCBpcyBhIHN1cGVyc2V0KVxuUmVmYWN0b3JlZCB0byBwcm9jZXNzIHhtbCBjb25zdHJ1Y3RvciBzeW50YXggYW5kIGZ1bmN0aW9uLWJvZGllcy4gQWRkZWQgbWlzc2luZyBkYXRhLXR5cGVzLCB4cGF0aCBvcGVyYW5kcywgaW5idWlsdCBmdW5jdGlvbnMsIGFuZCBxdWVyeSBwcm9sb2dzXG5XZWJzaXRlOiBodHRwczovL3d3dy53My5vcmcvWE1ML1F1ZXJ5L1xuQ2F0ZWdvcnk6IGZ1bmN0aW9uYWxcbkF1ZGl0OiAyMDIwXG4qL1xuXG4vKiogQHR5cGUgTGFuZ3VhZ2VGbiAqL1xuZnVuY3Rpb24geHF1ZXJ5KF9obGpzKSB7XG4gIC8vIHNlZSBodHRwczovL3d3dy53My5vcmcvVFIveHF1ZXJ5LyNpZC10ZXJtaW5hbC1kZWxpbWl0YXRpb25cbiAgY29uc3QgS0VZV09SRFMgPVxuICAgICdtb2R1bGUgc2NoZW1hIG5hbWVzcGFjZSBib3VuZGFyeS1zcGFjZSBwcmVzZXJ2ZSBuby1wcmVzZXJ2ZSBzdHJpcCBkZWZhdWx0IGNvbGxhdGlvbiBiYXNlLXVyaSBvcmRlcmluZyBjb250ZXh0IGRlY2ltYWwtZm9ybWF0IGRlY2ltYWwtc2VwYXJhdG9yIGNvcHktbmFtZXNwYWNlcyBlbXB0eS1zZXF1ZW5jZSBleGNlcHQgZXhwb25lbnQtc2VwYXJhdG9yIGV4dGVybmFsIGdyb3VwaW5nLXNlcGFyYXRvciBpbmhlcml0IG5vLWluaGVyaXQgbGF4IG1pbnVzLXNpZ24gcGVyLW1pbGxlIHBlcmNlbnQgc2NoZW1hLWF0dHJpYnV0ZSBzY2hlbWEtZWxlbWVudCBzdHJpY3QgdW5vcmRlcmVkIHplcm8tZGlnaXQgJyArXG4gICAgJ2RlY2xhcmUgaW1wb3J0IG9wdGlvbiBmdW5jdGlvbiB2YWxpZGF0ZSB2YXJpYWJsZSAnICtcbiAgICAnZm9yIGF0IGluIGxldCB3aGVyZSBvcmRlciBncm91cCBieSByZXR1cm4gaWYgdGhlbiBlbHNlICcgK1xuICAgICd0dW1ibGluZyBzbGlkaW5nIHdpbmRvdyBzdGFydCB3aGVuIG9ubHkgZW5kIHByZXZpb3VzIG5leHQgc3RhYmxlICcgK1xuICAgICdhc2NlbmRpbmcgZGVzY2VuZGluZyBhbGxvd2luZyBlbXB0eSBncmVhdGVzdCBsZWFzdCBzb21lIGV2ZXJ5IHNhdGlzZmllcyBzd2l0Y2ggY2FzZSB0eXBlc3dpdGNoIHRyeSBjYXRjaCAnICtcbiAgICAnYW5kIG9yIHRvIHVuaW9uIGludGVyc2VjdCBpbnN0YW5jZSBvZiB0cmVhdCBhcyBjYXN0YWJsZSBjYXN0IG1hcCBhcnJheSAnICtcbiAgICAnZGVsZXRlIGluc2VydCBpbnRvIHJlcGxhY2UgdmFsdWUgcmVuYW1lIGNvcHkgbW9kaWZ5IHVwZGF0ZSc7XG5cbiAgLy8gTm9kZSBUeXBlcyAoc29ydGVkIGJ5IGluaGVyaXRhbmNlKVxuICAvLyBhdG9taWMgdHlwZXMgKHNvcnRlZCBieSBpbmhlcml0YW5jZSlcbiAgY29uc3QgVFlQRSA9XG4gICAgJ2l0ZW0gZG9jdW1lbnQtbm9kZSBub2RlIGF0dHJpYnV0ZSBkb2N1bWVudCBlbGVtZW50IGNvbW1lbnQgbmFtZXNwYWNlIG5hbWVzcGFjZS1ub2RlIHByb2Nlc3NpbmctaW5zdHJ1Y3Rpb24gdGV4dCBjb25zdHJ1Y3Rpb24gJyArXG4gICAgJ3hzOmFueUF0b21pY1R5cGUgeHM6dW50eXBlZEF0b21pYyB4czpkdXJhdGlvbiB4czp0aW1lIHhzOmRlY2ltYWwgeHM6ZmxvYXQgeHM6ZG91YmxlIHhzOmdZZWFyTW9udGggeHM6Z1llYXIgeHM6Z01vbnRoRGF5IHhzOmdNb250aCB4czpnRGF5IHhzOmJvb2xlYW4geHM6YmFzZTY0QmluYXJ5IHhzOmhleEJpbmFyeSB4czphbnlVUkkgeHM6UU5hbWUgeHM6Tk9UQVRJT04geHM6ZGF0ZVRpbWUgeHM6ZGF0ZVRpbWVTdGFtcCB4czpkYXRlIHhzOnN0cmluZyB4czpub3JtYWxpemVkU3RyaW5nIHhzOnRva2VuIHhzOmxhbmd1YWdlIHhzOk5NVE9LRU4geHM6TmFtZSB4czpOQ05hbWUgeHM6SUQgeHM6SURSRUYgeHM6RU5USVRZIHhzOmludGVnZXIgeHM6bm9uUG9zaXRpdmVJbnRlZ2VyIHhzOm5lZ2F0aXZlSW50ZWdlciB4czpsb25nIHhzOmludCB4czpzaG9ydCB4czpieXRlIHhzOm5vbk5lZ2F0aXZlSW50ZWdlciB4czp1bmlzaWduZWRMb25nIHhzOnVuc2lnbmVkSW50IHhzOnVuc2lnbmVkU2hvcnQgeHM6dW5zaWduZWRCeXRlIHhzOnBvc2l0aXZlSW50ZWdlciB4czp5ZWFyTW9udGhEdXJhdGlvbiB4czpkYXlUaW1lRHVyYXRpb24nO1xuXG4gIGNvbnN0IExJVEVSQUwgPVxuICAgICdlcSBuZSBsdCBsZSBndCBnZSBpcyAnICtcbiAgICAnc2VsZjo6IGNoaWxkOjogZGVzY2VuZGFudDo6IGRlc2NlbmRhbnQtb3Itc2VsZjo6IGF0dHJpYnV0ZTo6IGZvbGxvd2luZzo6IGZvbGxvd2luZy1zaWJsaW5nOjogcGFyZW50OjogYW5jZXN0b3I6OiBhbmNlc3Rvci1vci1zZWxmOjogcHJlY2VkaW5nOjogcHJlY2VkaW5nLXNpYmxpbmc6OiAnICtcbiAgICAnTmFOJztcblxuICAvLyBmdW5jdGlvbnMgKFRPRE86IGZpbmQgcmVnZXggZm9yIG9wOiB3aXRob3V0IGJyZWFraW5nIGJ1aWxkKVxuICBjb25zdCBCVUlMVF9JTiA9IHtcbiAgICBjbGFzc05hbWU6ICdidWlsdF9pbicsXG4gICAgdmFyaWFudHM6IFtcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IC9cXGJhcnJheTovLFxuICAgICAgICBlbmQ6IC8oPzphcHBlbmR8ZmlsdGVyfGZsYXR0ZW58Zm9sZC0oPzpsZWZ0fHJpZ2h0KXxmb3ItZWFjaCg/Oi1wYWlyKT98Z2V0fGhlYWR8aW5zZXJ0LWJlZm9yZXxqb2lufHB1dHxyZW1vdmV8cmV2ZXJzZXxzaXplfHNvcnR8c3ViYXJyYXl8dGFpbClcXGIvXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogL1xcYm1hcDovLFxuICAgICAgICBlbmQ6IC8oPzpjb250YWluc3xlbnRyeXxmaW5kfGZvci1lYWNofGdldHxrZXlzfG1lcmdlfHB1dHxyZW1vdmV8c2l6ZSlcXGIvXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogL1xcYm1hdGg6LyxcbiAgICAgICAgZW5kOiAvKD86YSg/OmNvc3xzaW58dGFuWzJdPyl8Y29zfGV4cCg/OjEwKT98bG9nKD86MTApP3xwaXxwb3d8c2lufHNxcnR8dGFuKVxcYi9cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAvXFxib3A6LyxcbiAgICAgICAgZW5kOiAvXFwoLyxcbiAgICAgICAgZXhjbHVkZUVuZDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IC9cXGJmbjovLFxuICAgICAgICBlbmQ6IC9cXCgvLFxuICAgICAgICBleGNsdWRlRW5kOiB0cnVlXG4gICAgICB9LFxuICAgICAgLy8gZG8gbm90IGhpZ2hsaWdodCBpbmJ1aWx0IHN0cmluZ3MgYXMgdmFyaWFibGUgb3IgeG1sIGVsZW1lbnQgbmFtZXNcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IC9bXjwvJDonXCItXVxcYig/OmFic3xhY2N1bXVsYXRvci0oPzphZnRlcnxiZWZvcmUpfGFkanVzdC0oPzpkYXRlKD86VGltZSk/fHRpbWUpLXRvLXRpbWV6b25lfGFuYWx5emUtc3RyaW5nfGFwcGx5fGF2YWlsYWJsZS0oPzplbnZpcm9ubWVudC12YXJpYWJsZXN8c3lzdGVtLXByb3BlcnRpZXMpfGF2Z3xiYXNlLXVyaXxib29sZWFufGNlaWxpbmd8Y29kZXBvaW50cz8tKD86ZXF1YWx8dG8tc3RyaW5nKXxjb2xsYXRpb24ta2V5fGNvbGxlY3Rpb258Y29tcGFyZXxjb25jYXR8Y29udGFpbnMoPzotdG9rZW4pP3xjb3B5LW9mfGNvdW50fGN1cnJlbnQoPzotKT8oPzpkYXRlKD86VGltZSk/fHRpbWV8Z3JvdXAoPzppbmcta2V5KT98b3V0cHV0LXVyaXxtZXJnZS0oPzpncm91cHxrZXkpKT9kYXRhfGRhdGVUaW1lfGRheXM/LWZyb20tKD86ZGF0ZSg/OlRpbWUpP3xkdXJhdGlvbil8ZGVlcC1lcXVhbHxkZWZhdWx0LSg/OmNvbGxhdGlvbnxsYW5ndWFnZSl8ZGlzdGluY3QtdmFsdWVzfGRvY3VtZW50KD86LXVyaSk/fGRvYyg/Oi1hdmFpbGFibGUpP3xlbGVtZW50LSg/OmF2YWlsYWJsZXx3aXRoLWlkKXxlbXB0eXxlbmNvZGUtZm9yLXVyaXxlbmRzLXdpdGh8ZW52aXJvbm1lbnQtdmFyaWFibGV8ZXJyb3J8ZXNjYXBlLWh0bWwtdXJpfGV4YWN0bHktb25lfGV4aXN0c3xmYWxzZXxmaWx0ZXJ8Zmxvb3J8Zm9sZC0oPzpsZWZ0fHJpZ2h0KXxmb3ItZWFjaCg/Oi1wYWlyKT98Zm9ybWF0LSg/OmRhdGUoPzpUaW1lKT98dGltZXxpbnRlZ2VyfG51bWJlcil8ZnVuY3Rpb24tKD86YXJpdHl8YXZhaWxhYmxlfGxvb2t1cHxuYW1lKXxnZW5lcmF0ZS1pZHxoYXMtY2hpbGRyZW58aGVhZHxob3Vycy1mcm9tLSg/OmRhdGVUaW1lfGR1cmF0aW9ufHRpbWUpfGlkKD86cmVmKT98aW1wbGljaXQtdGltZXpvbmV8aW4tc2NvcGUtcHJlZml4ZXN8aW5kZXgtb2Z8aW5uZXJtb3N0fGluc2VydC1iZWZvcmV8aXJpLXRvLXVyaXxqc29uLSg/OmRvY3x0by14bWwpfGtleXxsYW5nfGxhc3R8bG9hZC14cXVlcnktbW9kdWxlfGxvY2FsLW5hbWUoPzotZnJvbS1RTmFtZSk/fCg/Omxvd2VyfHVwcGVyKS1jYXNlfG1hdGNoZXN8bWF4fG1pbnV0ZXMtZnJvbS0oPzpkYXRlVGltZXxkdXJhdGlvbnx0aW1lKXxtaW58bW9udGhzPy1mcm9tLSg/OmRhdGUoPzpUaW1lKT98ZHVyYXRpb24pfG5hbWUoPzpzcGFjZS11cmktPyg/OmZvci1wcmVmaXh8ZnJvbS1RTmFtZSk/KT98bmlsbGVkfG5vZGUtbmFtZXxub3JtYWxpemUtKD86c3BhY2V8dW5pY29kZSl8bm90fG51bWJlcnxvbmUtb3ItbW9yZXxvdXRlcm1vc3R8cGFyc2UtKD86aWV0Zi1kYXRlfGpzb24pfHBhdGh8cG9zaXRpb258KD86cHJlZml4LWZyb20tKT9RTmFtZXxyYW5kb20tbnVtYmVyLWdlbmVyYXRvcnxyZWdleC1ncm91cHxyZW1vdmV8cmVwbGFjZXxyZXNvbHZlLSg/OlFOYW1lfHVyaSl8cmV2ZXJzZXxyb290fHJvdW5kKD86LWhhbGYtdG8tZXZlbik/fHNlY29uZHMtZnJvbS0oPzpkYXRlVGltZXxkdXJhdGlvbnx0aW1lKXxzbmFwc2hvdHxzb3J0fHN0YXJ0cy13aXRofHN0YXRpYy1iYXNlLXVyaXxzdHJlYW0tYXZhaWxhYmxlfHN0cmluZy0/KD86am9pbnxsZW5ndGh8dG8tY29kZXBvaW50cyk/fHN1YnNlcXVlbmNlfHN1YnN0cmluZy0/KD86YWZ0ZXJ8YmVmb3JlKT98c3VtfHN5c3RlbS1wcm9wZXJ0eXx0YWlsfHRpbWV6b25lLWZyb20tKD86ZGF0ZSg/OlRpbWUpP3x0aW1lKXx0b2tlbml6ZXx0cmFjZXx0cmFucyg/OmZvcm18bGF0ZSl8dHJ1ZXx0eXBlLWF2YWlsYWJsZXx1bm9yZGVyZWR8dW5wYXJzZWQtKD86ZW50aXR5fHRleHQpPy0/KD86cHVibGljLWlkfHVyaXxhdmFpbGFibGV8bGluZXMpP3x1cmktY29sbGVjdGlvbnx4bWwtdG8tanNvbnx5ZWFycz8tZnJvbS0oPzpkYXRlKD86VGltZSk/fGR1cmF0aW9uKXx6ZXJvLW9yLW9uZSlcXGIvXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogL1xcYmxvY2FsOi8sXG4gICAgICAgIGVuZDogL1xcKC8sXG4gICAgICAgIGV4Y2x1ZGVFbmQ6IHRydWVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAvXFxiemlwOi8sXG4gICAgICAgIGVuZDogLyg/OnppcC1maWxlfCg/OnhtbHxodG1sfHRleHR8YmluYXJ5KS1lbnRyeXwgKD86dXBkYXRlLSk/ZW50cmllcylcXGIvXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogL1xcYig/OnV0aWx8ZGJ8ZnVuY3R4fGFwcHx4ZG1wfHhtbGRiKTovLFxuICAgICAgICBlbmQ6IC9cXCgvLFxuICAgICAgICBleGNsdWRlRW5kOiB0cnVlXG4gICAgICB9XG4gICAgXVxuICB9O1xuXG4gIGNvbnN0IFRJVExFID0ge1xuICAgIGNsYXNzTmFtZTogJ3RpdGxlJyxcbiAgICBiZWdpbjogL1xcYnhxdWVyeSB2ZXJzaW9uIFwiWzEzXVxcLlswMV1cIlxccz8oPzplbmNvZGluZyBcIi4rXCIpPy8sXG4gICAgZW5kOiAvOy9cbiAgfTtcblxuICBjb25zdCBWQVIgPSB7XG4gICAgY2xhc3NOYW1lOiAndmFyaWFibGUnLFxuICAgIGJlZ2luOiAvWyRdW1xcd1xcLTpdKy9cbiAgfTtcblxuICBjb25zdCBOVU1CRVIgPSB7XG4gICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICBiZWdpbjogLyhcXGIwWzAtN19dKyl8KFxcYjB4WzAtOWEtZkEtRl9dKyl8KFxcYlsxLTldWzAtOV9dKihcXC5bMC05X10rKT8pfFswX11cXGIvLFxuICAgIHJlbGV2YW5jZTogMFxuICB9O1xuXG4gIGNvbnN0IFNUUklORyA9IHtcbiAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgIHZhcmlhbnRzOiBbXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAvXCIvLFxuICAgICAgICBlbmQ6IC9cIi8sXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW46IC9cIlwiLyxcbiAgICAgICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IC8nLyxcbiAgICAgICAgZW5kOiAvJy8sXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW46IC8nJy8sXG4gICAgICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH07XG5cbiAgY29uc3QgQU5OT1RBVElPTiA9IHtcbiAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICBiZWdpbjogLyVbXFx3XFwtOl0rL1xuICB9O1xuXG4gIGNvbnN0IENPTU1FTlQgPSB7XG4gICAgY2xhc3NOYW1lOiAnY29tbWVudCcsXG4gICAgYmVnaW46IC9cXCg6LyxcbiAgICBlbmQ6IC86XFwpLyxcbiAgICByZWxldmFuY2U6IDEwLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2RvY3RhZycsXG4gICAgICAgIGJlZ2luOiAvQFxcdysvXG4gICAgICB9XG4gICAgXVxuICB9O1xuXG4gIC8vIHNlZSBodHRwczovL3d3dy53My5vcmcvVFIveHF1ZXJ5LyNpZC1jb21wdXRlZENvbnN0cnVjdG9yc1xuICAvLyBtb2NoYTogY29tcHV0ZWRfaW5idWlsdFxuICAvLyBzZWUgaHR0cHM6Ly93d3cucmVnZXhwYWwuY29tLz9mYW09OTk3NDlcbiAgY29uc3QgQ09NUFVURUQgPSB7XG4gICAgYmVnaW5LZXl3b3JkczogJ2VsZW1lbnQgYXR0cmlidXRlIGNvbW1lbnQgZG9jdW1lbnQgcHJvY2Vzc2luZy1pbnN0cnVjdGlvbicsXG4gICAgZW5kOiAvXFx7LyxcbiAgICBleGNsdWRlRW5kOiB0cnVlXG4gIH07XG5cbiAgLy8gbW9jaGE6IGRpcmVjdF9tZXRob2RcbiAgY29uc3QgRElSRUNUID0ge1xuICAgIGJlZ2luOiAvPChbXFx3Ll86LV0rKShcXHMrXFxTKj0oJ3xcIikuKignfFwiKSk/Pi8sXG4gICAgZW5kOiAvKFxcL1tcXHcuXzotXSs+KS8sXG4gICAgc3ViTGFuZ3VhZ2U6ICd4bWwnLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAvXFx7LyxcbiAgICAgICAgZW5kOiAvXFx9LyxcbiAgICAgICAgc3ViTGFuZ3VhZ2U6ICd4cXVlcnknXG4gICAgICB9LFxuICAgICAgJ3NlbGYnXG4gICAgXVxuICB9O1xuXG4gIGNvbnN0IENPTlRBSU5TID0gW1xuICAgIFZBUixcbiAgICBCVUlMVF9JTixcbiAgICBTVFJJTkcsXG4gICAgTlVNQkVSLFxuICAgIENPTU1FTlQsXG4gICAgQU5OT1RBVElPTixcbiAgICBUSVRMRSxcbiAgICBDT01QVVRFRCxcbiAgICBESVJFQ1RcbiAgXTtcblxuICByZXR1cm4ge1xuICAgIG5hbWU6ICdYUXVlcnknLFxuICAgIGFsaWFzZXM6IFtcbiAgICAgICd4cGF0aCcsXG4gICAgICAneHEnXG4gICAgXSxcbiAgICBjYXNlX2luc2Vuc2l0aXZlOiBmYWxzZSxcbiAgICBpbGxlZ2FsOiAvKHByb2MpfChhYnN0cmFjdCl8KGV4dGVuZHMpfCh1bnRpbCl8KCMpLyxcbiAgICBrZXl3b3Jkczoge1xuICAgICAgJHBhdHRlcm46IC9bYS16QS1aJF1bYS16QS1aMC05XzotXSovLFxuICAgICAga2V5d29yZDogS0VZV09SRFMsXG4gICAgICB0eXBlOiBUWVBFLFxuICAgICAgbGl0ZXJhbDogTElURVJBTFxuICAgIH0sXG4gICAgY29udGFpbnM6IENPTlRBSU5TXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0geHF1ZXJ5O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==