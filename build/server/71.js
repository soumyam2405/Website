exports.ids = [71];
exports.modules = {

/***/ "./node_modules/highlight.js/lib/languages/groovy.js":
/*!***********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/groovy.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @param {string} value
 * @returns {RegExp}
 * */

/**
 * @param {RegExp | string } re
 * @returns {string}
 */
function source(re) {
  if (!re) return null;
  if (typeof re === "string") return re;

  return re.source;
}

/**
 * @param {RegExp | string } re
 * @returns {string}
 */
function lookahead(re) {
  return concat('(?=', re, ')');
}

/**
 * @param {...(RegExp | string) } args
 * @returns {string}
 */
function concat(...args) {
  const joined = args.map((x) => source(x)).join("");
  return joined;
}

/*
 Language: Groovy
 Author: Guillaume Laforge <glaforge@gmail.com>
 Description: Groovy programming language implementation inspired from Vsevolod's Java mode
 Website: https://groovy-lang.org
 */

function variants(variants, obj = {}) {
  obj.variants = variants;
  return obj;
}

function groovy(hljs) {
  const IDENT_RE = '[A-Za-z0-9_$]+';
  const COMMENT = variants([
    hljs.C_LINE_COMMENT_MODE,
    hljs.C_BLOCK_COMMENT_MODE,
    hljs.COMMENT(
      '/\\*\\*',
      '\\*/',
      {
        relevance: 0,
        contains: [
          {
            // eat up @'s in emails to prevent them to be recognized as doctags
            begin: /\w+@/,
            relevance: 0
          },
          {
            className: 'doctag',
            begin: '@[A-Za-z]+'
          }
        ]
      }
    )
  ]);
  const REGEXP = {
    className: 'regexp',
    begin: /~?\/[^\/\n]+\//,
    contains: [ hljs.BACKSLASH_ESCAPE ]
  };
  const NUMBER = variants([
    hljs.BINARY_NUMBER_MODE,
    hljs.C_NUMBER_MODE
  ]);
  const STRING = variants([
    {
      begin: /"""/,
      end: /"""/
    },
    {
      begin: /'''/,
      end: /'''/
    },
    {
      begin: "\\$/",
      end: "/\\$",
      relevance: 10
    },
    hljs.APOS_STRING_MODE,
    hljs.QUOTE_STRING_MODE
  ],
  {
    className: "string"
  }
  );

  return {
    name: 'Groovy',
    keywords: {
      built_in: 'this super',
      literal: 'true false null',
      keyword:
            'byte short char int long boolean float double void ' +
            // groovy specific keywords
            'def as in assert trait ' +
            // common keywords with Java
            'abstract static volatile transient public private protected synchronized final ' +
            'class interface enum if else for while switch case break default continue ' +
            'throw throws try catch finally implements extends new import package return instanceof'
    },
    contains: [
      hljs.SHEBANG({
        binary: "groovy",
        relevance: 10
      }),
      COMMENT,
      STRING,
      REGEXP,
      NUMBER,
      {
        className: 'class',
        beginKeywords: 'class interface trait enum',
        end: /\{/,
        illegal: ':',
        contains: [
          {
            beginKeywords: 'extends implements'
          },
          hljs.UNDERSCORE_TITLE_MODE
        ]
      },
      {
        className: 'meta',
        begin: '@[A-Za-z]+',
        relevance: 0
      },
      {
        // highlight map keys and named parameters as attrs
        className: 'attr',
        begin: IDENT_RE + '[ \t]*:',
        relevance: 0
      },
      {
        // catch middle element of the ternary operator
        // to avoid highlight it as a label, named parameter, or map key
        begin: /\?/,
        end: /:/,
        relevance: 0,
        contains: [
          COMMENT,
          STRING,
          REGEXP,
          NUMBER,
          'self'
        ]
      },
      {
        // highlight labeled statements
        className: 'symbol',
        begin: '^[ \t]*' + lookahead(IDENT_RE + ':'),
        excludeBegin: true,
        end: IDENT_RE + ':',
        relevance: 0
      }
    ],
    illegal: /#|<\//
  };
}

module.exports = groovy;


/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvZ3Jvb3Z5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhO0FBQ2I7O0FBRUE7QUFDQSxXQUFXLGlCQUFpQjtBQUM1QixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFdBQVcsaUJBQWlCO0FBQzVCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVcsc0JBQXNCO0FBQ2pDLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiNzEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHJldHVybnMge1JlZ0V4cH1cbiAqICovXG5cbi8qKlxuICogQHBhcmFtIHtSZWdFeHAgfCBzdHJpbmcgfSByZVxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gc291cmNlKHJlKSB7XG4gIGlmICghcmUpIHJldHVybiBudWxsO1xuICBpZiAodHlwZW9mIHJlID09PSBcInN0cmluZ1wiKSByZXR1cm4gcmU7XG5cbiAgcmV0dXJuIHJlLnNvdXJjZTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge1JlZ0V4cCB8IHN0cmluZyB9IHJlXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBsb29rYWhlYWQocmUpIHtcbiAgcmV0dXJuIGNvbmNhdCgnKD89JywgcmUsICcpJyk7XG59XG5cbi8qKlxuICogQHBhcmFtIHsuLi4oUmVnRXhwIHwgc3RyaW5nKSB9IGFyZ3NcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGNvbmNhdCguLi5hcmdzKSB7XG4gIGNvbnN0IGpvaW5lZCA9IGFyZ3MubWFwKCh4KSA9PiBzb3VyY2UoeCkpLmpvaW4oXCJcIik7XG4gIHJldHVybiBqb2luZWQ7XG59XG5cbi8qXG4gTGFuZ3VhZ2U6IEdyb292eVxuIEF1dGhvcjogR3VpbGxhdW1lIExhZm9yZ2UgPGdsYWZvcmdlQGdtYWlsLmNvbT5cbiBEZXNjcmlwdGlvbjogR3Jvb3Z5IHByb2dyYW1taW5nIGxhbmd1YWdlIGltcGxlbWVudGF0aW9uIGluc3BpcmVkIGZyb20gVnNldm9sb2QncyBKYXZhIG1vZGVcbiBXZWJzaXRlOiBodHRwczovL2dyb292eS1sYW5nLm9yZ1xuICovXG5cbmZ1bmN0aW9uIHZhcmlhbnRzKHZhcmlhbnRzLCBvYmogPSB7fSkge1xuICBvYmoudmFyaWFudHMgPSB2YXJpYW50cztcbiAgcmV0dXJuIG9iajtcbn1cblxuZnVuY3Rpb24gZ3Jvb3Z5KGhsanMpIHtcbiAgY29uc3QgSURFTlRfUkUgPSAnW0EtWmEtejAtOV8kXSsnO1xuICBjb25zdCBDT01NRU5UID0gdmFyaWFudHMoW1xuICAgIGhsanMuQ19MSU5FX0NPTU1FTlRfTU9ERSxcbiAgICBobGpzLkNfQkxPQ0tfQ09NTUVOVF9NT0RFLFxuICAgIGhsanMuQ09NTUVOVChcbiAgICAgICcvXFxcXCpcXFxcKicsXG4gICAgICAnXFxcXCovJyxcbiAgICAgIHtcbiAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIC8vIGVhdCB1cCBAJ3MgaW4gZW1haWxzIHRvIHByZXZlbnQgdGhlbSB0byBiZSByZWNvZ25pemVkIGFzIGRvY3RhZ3NcbiAgICAgICAgICAgIGJlZ2luOiAvXFx3K0AvLFxuICAgICAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdkb2N0YWcnLFxuICAgICAgICAgICAgYmVnaW46ICdAW0EtWmEtel0rJ1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIClcbiAgXSk7XG4gIGNvbnN0IFJFR0VYUCA9IHtcbiAgICBjbGFzc05hbWU6ICdyZWdleHAnLFxuICAgIGJlZ2luOiAvfj9cXC9bXlxcL1xcbl0rXFwvLyxcbiAgICBjb250YWluczogWyBobGpzLkJBQ0tTTEFTSF9FU0NBUEUgXVxuICB9O1xuICBjb25zdCBOVU1CRVIgPSB2YXJpYW50cyhbXG4gICAgaGxqcy5CSU5BUllfTlVNQkVSX01PREUsXG4gICAgaGxqcy5DX05VTUJFUl9NT0RFXG4gIF0pO1xuICBjb25zdCBTVFJJTkcgPSB2YXJpYW50cyhbXG4gICAge1xuICAgICAgYmVnaW46IC9cIlwiXCIvLFxuICAgICAgZW5kOiAvXCJcIlwiL1xuICAgIH0sXG4gICAge1xuICAgICAgYmVnaW46IC8nJycvLFxuICAgICAgZW5kOiAvJycnL1xuICAgIH0sXG4gICAge1xuICAgICAgYmVnaW46IFwiXFxcXCQvXCIsXG4gICAgICBlbmQ6IFwiL1xcXFwkXCIsXG4gICAgICByZWxldmFuY2U6IDEwXG4gICAgfSxcbiAgICBobGpzLkFQT1NfU1RSSU5HX01PREUsXG4gICAgaGxqcy5RVU9URV9TVFJJTkdfTU9ERVxuICBdLFxuICB7XG4gICAgY2xhc3NOYW1lOiBcInN0cmluZ1wiXG4gIH1cbiAgKTtcblxuICByZXR1cm4ge1xuICAgIG5hbWU6ICdHcm9vdnknLFxuICAgIGtleXdvcmRzOiB7XG4gICAgICBidWlsdF9pbjogJ3RoaXMgc3VwZXInLFxuICAgICAgbGl0ZXJhbDogJ3RydWUgZmFsc2UgbnVsbCcsXG4gICAgICBrZXl3b3JkOlxuICAgICAgICAgICAgJ2J5dGUgc2hvcnQgY2hhciBpbnQgbG9uZyBib29sZWFuIGZsb2F0IGRvdWJsZSB2b2lkICcgK1xuICAgICAgICAgICAgLy8gZ3Jvb3Z5IHNwZWNpZmljIGtleXdvcmRzXG4gICAgICAgICAgICAnZGVmIGFzIGluIGFzc2VydCB0cmFpdCAnICtcbiAgICAgICAgICAgIC8vIGNvbW1vbiBrZXl3b3JkcyB3aXRoIEphdmFcbiAgICAgICAgICAgICdhYnN0cmFjdCBzdGF0aWMgdm9sYXRpbGUgdHJhbnNpZW50IHB1YmxpYyBwcml2YXRlIHByb3RlY3RlZCBzeW5jaHJvbml6ZWQgZmluYWwgJyArXG4gICAgICAgICAgICAnY2xhc3MgaW50ZXJmYWNlIGVudW0gaWYgZWxzZSBmb3Igd2hpbGUgc3dpdGNoIGNhc2UgYnJlYWsgZGVmYXVsdCBjb250aW51ZSAnICtcbiAgICAgICAgICAgICd0aHJvdyB0aHJvd3MgdHJ5IGNhdGNoIGZpbmFsbHkgaW1wbGVtZW50cyBleHRlbmRzIG5ldyBpbXBvcnQgcGFja2FnZSByZXR1cm4gaW5zdGFuY2VvZidcbiAgICB9LFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBobGpzLlNIRUJBTkcoe1xuICAgICAgICBiaW5hcnk6IFwiZ3Jvb3Z5XCIsXG4gICAgICAgIHJlbGV2YW5jZTogMTBcbiAgICAgIH0pLFxuICAgICAgQ09NTUVOVCxcbiAgICAgIFNUUklORyxcbiAgICAgIFJFR0VYUCxcbiAgICAgIE5VTUJFUixcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnY2xhc3MnLFxuICAgICAgICBiZWdpbktleXdvcmRzOiAnY2xhc3MgaW50ZXJmYWNlIHRyYWl0IGVudW0nLFxuICAgICAgICBlbmQ6IC9cXHsvLFxuICAgICAgICBpbGxlZ2FsOiAnOicsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW5LZXl3b3JkczogJ2V4dGVuZHMgaW1wbGVtZW50cydcbiAgICAgICAgICB9LFxuICAgICAgICAgIGhsanMuVU5ERVJTQ09SRV9USVRMRV9NT0RFXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgICAgICBiZWdpbjogJ0BbQS1aYS16XSsnLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIC8vIGhpZ2hsaWdodCBtYXAga2V5cyBhbmQgbmFtZWQgcGFyYW1ldGVycyBhcyBhdHRyc1xuICAgICAgICBjbGFzc05hbWU6ICdhdHRyJyxcbiAgICAgICAgYmVnaW46IElERU5UX1JFICsgJ1sgXFx0XSo6JyxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAvLyBjYXRjaCBtaWRkbGUgZWxlbWVudCBvZiB0aGUgdGVybmFyeSBvcGVyYXRvclxuICAgICAgICAvLyB0byBhdm9pZCBoaWdobGlnaHQgaXQgYXMgYSBsYWJlbCwgbmFtZWQgcGFyYW1ldGVyLCBvciBtYXAga2V5XG4gICAgICAgIGJlZ2luOiAvXFw/LyxcbiAgICAgICAgZW5kOiAvOi8sXG4gICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICBDT01NRU5ULFxuICAgICAgICAgIFNUUklORyxcbiAgICAgICAgICBSRUdFWFAsXG4gICAgICAgICAgTlVNQkVSLFxuICAgICAgICAgICdzZWxmJ1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAvLyBoaWdobGlnaHQgbGFiZWxlZCBzdGF0ZW1lbnRzXG4gICAgICAgIGNsYXNzTmFtZTogJ3N5bWJvbCcsXG4gICAgICAgIGJlZ2luOiAnXlsgXFx0XSonICsgbG9va2FoZWFkKElERU5UX1JFICsgJzonKSxcbiAgICAgICAgZXhjbHVkZUJlZ2luOiB0cnVlLFxuICAgICAgICBlbmQ6IElERU5UX1JFICsgJzonLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH1cbiAgICBdLFxuICAgIGlsbGVnYWw6IC8jfDxcXC8vXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ3Jvb3Z5O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==