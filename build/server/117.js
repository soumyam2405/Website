exports.ids = [117];
exports.modules = {

/***/ "./node_modules/highlight.js/lib/languages/nix.js":
/*!********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/nix.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Nix
Author: Domen Kožar <domen@dev.si>
Description: Nix functional language
Website: http://nixos.org/nix
*/

function nix(hljs) {
  const NIX_KEYWORDS = {
    keyword:
      'rec with let in inherit assert if else then',
    literal:
      'true false or and null',
    built_in:
      'import abort baseNameOf dirOf isNull builtins map removeAttrs throw ' +
      'toString derivation'
  };
  const ANTIQUOTE = {
    className: 'subst',
    begin: /\$\{/,
    end: /\}/,
    keywords: NIX_KEYWORDS
  };
  const ATTRS = {
    begin: /[a-zA-Z0-9-_]+(\s*=)/,
    returnBegin: true,
    relevance: 0,
    contains: [
      {
        className: 'attr',
        begin: /\S+/
      }
    ]
  };
  const STRING = {
    className: 'string',
    contains: [ ANTIQUOTE ],
    variants: [
      {
        begin: "''",
        end: "''"
      },
      {
        begin: '"',
        end: '"'
      }
    ]
  };
  const EXPRESSIONS = [
    hljs.NUMBER_MODE,
    hljs.HASH_COMMENT_MODE,
    hljs.C_BLOCK_COMMENT_MODE,
    STRING,
    ATTRS
  ];
  ANTIQUOTE.contains = EXPRESSIONS;
  return {
    name: 'Nix',
    aliases: [ "nixos" ],
    keywords: NIX_KEYWORDS,
    contains: EXPRESSIONS
  };
}

module.exports = nix;


/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvbml4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiIxMTcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuTGFuZ3VhZ2U6IE5peFxuQXV0aG9yOiBEb21lbiBLb8W+YXIgPGRvbWVuQGRldi5zaT5cbkRlc2NyaXB0aW9uOiBOaXggZnVuY3Rpb25hbCBsYW5ndWFnZVxuV2Vic2l0ZTogaHR0cDovL25peG9zLm9yZy9uaXhcbiovXG5cbmZ1bmN0aW9uIG5peChobGpzKSB7XG4gIGNvbnN0IE5JWF9LRVlXT1JEUyA9IHtcbiAgICBrZXl3b3JkOlxuICAgICAgJ3JlYyB3aXRoIGxldCBpbiBpbmhlcml0IGFzc2VydCBpZiBlbHNlIHRoZW4nLFxuICAgIGxpdGVyYWw6XG4gICAgICAndHJ1ZSBmYWxzZSBvciBhbmQgbnVsbCcsXG4gICAgYnVpbHRfaW46XG4gICAgICAnaW1wb3J0IGFib3J0IGJhc2VOYW1lT2YgZGlyT2YgaXNOdWxsIGJ1aWx0aW5zIG1hcCByZW1vdmVBdHRycyB0aHJvdyAnICtcbiAgICAgICd0b1N0cmluZyBkZXJpdmF0aW9uJ1xuICB9O1xuICBjb25zdCBBTlRJUVVPVEUgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3Vic3QnLFxuICAgIGJlZ2luOiAvXFwkXFx7LyxcbiAgICBlbmQ6IC9cXH0vLFxuICAgIGtleXdvcmRzOiBOSVhfS0VZV09SRFNcbiAgfTtcbiAgY29uc3QgQVRUUlMgPSB7XG4gICAgYmVnaW46IC9bYS16QS1aMC05LV9dKyhcXHMqPSkvLFxuICAgIHJldHVybkJlZ2luOiB0cnVlLFxuICAgIHJlbGV2YW5jZTogMCxcbiAgICBjb250YWluczogW1xuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdhdHRyJyxcbiAgICAgICAgYmVnaW46IC9cXFMrL1xuICAgICAgfVxuICAgIF1cbiAgfTtcbiAgY29uc3QgU1RSSU5HID0ge1xuICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgY29udGFpbnM6IFsgQU5USVFVT1RFIF0sXG4gICAgdmFyaWFudHM6IFtcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IFwiJydcIixcbiAgICAgICAgZW5kOiBcIicnXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnXCInLFxuICAgICAgICBlbmQ6ICdcIidcbiAgICAgIH1cbiAgICBdXG4gIH07XG4gIGNvbnN0IEVYUFJFU1NJT05TID0gW1xuICAgIGhsanMuTlVNQkVSX01PREUsXG4gICAgaGxqcy5IQVNIX0NPTU1FTlRfTU9ERSxcbiAgICBobGpzLkNfQkxPQ0tfQ09NTUVOVF9NT0RFLFxuICAgIFNUUklORyxcbiAgICBBVFRSU1xuICBdO1xuICBBTlRJUVVPVEUuY29udGFpbnMgPSBFWFBSRVNTSU9OUztcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnTml4JyxcbiAgICBhbGlhc2VzOiBbIFwibml4b3NcIiBdLFxuICAgIGtleXdvcmRzOiBOSVhfS0VZV09SRFMsXG4gICAgY29udGFpbnM6IEVYUFJFU1NJT05TXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbml4O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==