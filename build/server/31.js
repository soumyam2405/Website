exports.ids = [31];
exports.modules = {

/***/ "./node_modules/highlight.js/lib/languages/coffeescript.js":
/*!*****************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/coffeescript.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const KEYWORDS = [
  "as", // for exports
  "in",
  "of",
  "if",
  "for",
  "while",
  "finally",
  "var",
  "new",
  "function",
  "do",
  "return",
  "void",
  "else",
  "break",
  "catch",
  "instanceof",
  "with",
  "throw",
  "case",
  "default",
  "try",
  "switch",
  "continue",
  "typeof",
  "delete",
  "let",
  "yield",
  "const",
  "class",
  // JS handles these with a special rule
  // "get",
  // "set",
  "debugger",
  "async",
  "await",
  "static",
  "import",
  "from",
  "export",
  "extends"
];
const LITERALS = [
  "true",
  "false",
  "null",
  "undefined",
  "NaN",
  "Infinity"
];

const TYPES = [
  "Intl",
  "DataView",
  "Number",
  "Math",
  "Date",
  "String",
  "RegExp",
  "Object",
  "Function",
  "Boolean",
  "Error",
  "Symbol",
  "Set",
  "Map",
  "WeakSet",
  "WeakMap",
  "Proxy",
  "Reflect",
  "JSON",
  "Promise",
  "Float64Array",
  "Int16Array",
  "Int32Array",
  "Int8Array",
  "Uint16Array",
  "Uint32Array",
  "Float32Array",
  "Array",
  "Uint8Array",
  "Uint8ClampedArray",
  "ArrayBuffer"
];

const ERROR_TYPES = [
  "EvalError",
  "InternalError",
  "RangeError",
  "ReferenceError",
  "SyntaxError",
  "TypeError",
  "URIError"
];

const BUILT_IN_GLOBALS = [
  "setInterval",
  "setTimeout",
  "clearInterval",
  "clearTimeout",

  "require",
  "exports",

  "eval",
  "isFinite",
  "isNaN",
  "parseFloat",
  "parseInt",
  "decodeURI",
  "decodeURIComponent",
  "encodeURI",
  "encodeURIComponent",
  "escape",
  "unescape"
];

const BUILT_IN_VARIABLES = [
  "arguments",
  "this",
  "super",
  "console",
  "window",
  "document",
  "localStorage",
  "module",
  "global" // Node.js
];

const BUILT_INS = [].concat(
  BUILT_IN_GLOBALS,
  BUILT_IN_VARIABLES,
  TYPES,
  ERROR_TYPES
);

/*
Language: CoffeeScript
Author: Dmytrii Nagirniak <dnagir@gmail.com>
Contributors: Oleg Efimov <efimovov@gmail.com>, Cédric Néhémie <cedric.nehemie@gmail.com>
Description: CoffeeScript is a programming language that transcompiles to JavaScript. For info about language see http://coffeescript.org/
Category: common, scripting
Website: https://coffeescript.org
*/

/** @type LanguageFn */
function coffeescript(hljs) {
  const COFFEE_BUILT_INS = [
    'npm',
    'print'
  ];
  const COFFEE_LITERALS = [
    'yes',
    'no',
    'on',
    'off'
  ];
  const COFFEE_KEYWORDS = [
    'then',
    'unless',
    'until',
    'loop',
    'by',
    'when',
    'and',
    'or',
    'is',
    'isnt',
    'not'
  ];
  const NOT_VALID_KEYWORDS = [
    "var",
    "const",
    "let",
    "function",
    "static"
  ];
  const excluding = (list) =>
    (kw) => !list.includes(kw);
  const KEYWORDS$1 = {
    keyword: KEYWORDS.concat(COFFEE_KEYWORDS).filter(excluding(NOT_VALID_KEYWORDS)),
    literal: LITERALS.concat(COFFEE_LITERALS),
    built_in: BUILT_INS.concat(COFFEE_BUILT_INS)
  };
  const JS_IDENT_RE = '[A-Za-z$_][0-9A-Za-z$_]*';
  const SUBST = {
    className: 'subst',
    begin: /#\{/,
    end: /\}/,
    keywords: KEYWORDS$1
  };
  const EXPRESSIONS = [
    hljs.BINARY_NUMBER_MODE,
    hljs.inherit(hljs.C_NUMBER_MODE, {
      starts: {
        end: '(\\s*/)?',
        relevance: 0
      }
    }), // a number tries to eat the following slash to prevent treating it as a regexp
    {
      className: 'string',
      variants: [
        {
          begin: /'''/,
          end: /'''/,
          contains: [hljs.BACKSLASH_ESCAPE]
        },
        {
          begin: /'/,
          end: /'/,
          contains: [hljs.BACKSLASH_ESCAPE]
        },
        {
          begin: /"""/,
          end: /"""/,
          contains: [
            hljs.BACKSLASH_ESCAPE,
            SUBST
          ]
        },
        {
          begin: /"/,
          end: /"/,
          contains: [
            hljs.BACKSLASH_ESCAPE,
            SUBST
          ]
        }
      ]
    },
    {
      className: 'regexp',
      variants: [
        {
          begin: '///',
          end: '///',
          contains: [
            SUBST,
            hljs.HASH_COMMENT_MODE
          ]
        },
        {
          begin: '//[gim]{0,3}(?=\\W)',
          relevance: 0
        },
        {
          // regex can't start with space to parse x / 2 / 3 as two divisions
          // regex can't start with *, and it supports an "illegal" in the main mode
          begin: /\/(?![ *]).*?(?![\\]).\/[gim]{0,3}(?=\W)/
        }
      ]
    },
    {
      begin: '@' + JS_IDENT_RE // relevance booster
    },
    {
      subLanguage: 'javascript',
      excludeBegin: true,
      excludeEnd: true,
      variants: [
        {
          begin: '```',
          end: '```'
        },
        {
          begin: '`',
          end: '`'
        }
      ]
    }
  ];
  SUBST.contains = EXPRESSIONS;

  const TITLE = hljs.inherit(hljs.TITLE_MODE, {
    begin: JS_IDENT_RE
  });
  const POSSIBLE_PARAMS_RE = '(\\(.*\\)\\s*)?\\B[-=]>';
  const PARAMS = {
    className: 'params',
    begin: '\\([^\\(]',
    returnBegin: true,
    /* We need another contained nameless mode to not have every nested
    pair of parens to be called "params" */
    contains: [{
      begin: /\(/,
      end: /\)/,
      keywords: KEYWORDS$1,
      contains: ['self'].concat(EXPRESSIONS)
    }]
  };

  return {
    name: 'CoffeeScript',
    aliases: [
      'coffee',
      'cson',
      'iced'
    ],
    keywords: KEYWORDS$1,
    illegal: /\/\*/,
    contains: EXPRESSIONS.concat([
      hljs.COMMENT('###', '###'),
      hljs.HASH_COMMENT_MODE,
      {
        className: 'function',
        begin: '^\\s*' + JS_IDENT_RE + '\\s*=\\s*' + POSSIBLE_PARAMS_RE,
        end: '[-=]>',
        returnBegin: true,
        contains: [
          TITLE,
          PARAMS
        ]
      },
      {
        // anonymous function start
        begin: /[:\(,=]\s*/,
        relevance: 0,
        contains: [{
          className: 'function',
          begin: POSSIBLE_PARAMS_RE,
          end: '[-=]>',
          returnBegin: true,
          contains: [PARAMS]
        }]
      },
      {
        className: 'class',
        beginKeywords: 'class',
        end: '$',
        illegal: /[:="\[\]]/,
        contains: [
          {
            beginKeywords: 'extends',
            endsWithParent: true,
            illegal: /[:="\[\]]/,
            contains: [TITLE]
          },
          TITLE
        ]
      },
      {
        begin: JS_IDENT_RE + ':',
        end: ':',
        returnBegin: true,
        returnEnd: true,
        relevance: 0
      }
    ])
  };
}

module.exports = coffeescript;


/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvY29mZmVlc2NyaXB0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsMEJBQTBCLElBQUk7QUFDOUI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELElBQUk7QUFDcEQ7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiIzMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEtFWVdPUkRTID0gW1xuICBcImFzXCIsIC8vIGZvciBleHBvcnRzXG4gIFwiaW5cIixcbiAgXCJvZlwiLFxuICBcImlmXCIsXG4gIFwiZm9yXCIsXG4gIFwid2hpbGVcIixcbiAgXCJmaW5hbGx5XCIsXG4gIFwidmFyXCIsXG4gIFwibmV3XCIsXG4gIFwiZnVuY3Rpb25cIixcbiAgXCJkb1wiLFxuICBcInJldHVyblwiLFxuICBcInZvaWRcIixcbiAgXCJlbHNlXCIsXG4gIFwiYnJlYWtcIixcbiAgXCJjYXRjaFwiLFxuICBcImluc3RhbmNlb2ZcIixcbiAgXCJ3aXRoXCIsXG4gIFwidGhyb3dcIixcbiAgXCJjYXNlXCIsXG4gIFwiZGVmYXVsdFwiLFxuICBcInRyeVwiLFxuICBcInN3aXRjaFwiLFxuICBcImNvbnRpbnVlXCIsXG4gIFwidHlwZW9mXCIsXG4gIFwiZGVsZXRlXCIsXG4gIFwibGV0XCIsXG4gIFwieWllbGRcIixcbiAgXCJjb25zdFwiLFxuICBcImNsYXNzXCIsXG4gIC8vIEpTIGhhbmRsZXMgdGhlc2Ugd2l0aCBhIHNwZWNpYWwgcnVsZVxuICAvLyBcImdldFwiLFxuICAvLyBcInNldFwiLFxuICBcImRlYnVnZ2VyXCIsXG4gIFwiYXN5bmNcIixcbiAgXCJhd2FpdFwiLFxuICBcInN0YXRpY1wiLFxuICBcImltcG9ydFwiLFxuICBcImZyb21cIixcbiAgXCJleHBvcnRcIixcbiAgXCJleHRlbmRzXCJcbl07XG5jb25zdCBMSVRFUkFMUyA9IFtcbiAgXCJ0cnVlXCIsXG4gIFwiZmFsc2VcIixcbiAgXCJudWxsXCIsXG4gIFwidW5kZWZpbmVkXCIsXG4gIFwiTmFOXCIsXG4gIFwiSW5maW5pdHlcIlxuXTtcblxuY29uc3QgVFlQRVMgPSBbXG4gIFwiSW50bFwiLFxuICBcIkRhdGFWaWV3XCIsXG4gIFwiTnVtYmVyXCIsXG4gIFwiTWF0aFwiLFxuICBcIkRhdGVcIixcbiAgXCJTdHJpbmdcIixcbiAgXCJSZWdFeHBcIixcbiAgXCJPYmplY3RcIixcbiAgXCJGdW5jdGlvblwiLFxuICBcIkJvb2xlYW5cIixcbiAgXCJFcnJvclwiLFxuICBcIlN5bWJvbFwiLFxuICBcIlNldFwiLFxuICBcIk1hcFwiLFxuICBcIldlYWtTZXRcIixcbiAgXCJXZWFrTWFwXCIsXG4gIFwiUHJveHlcIixcbiAgXCJSZWZsZWN0XCIsXG4gIFwiSlNPTlwiLFxuICBcIlByb21pc2VcIixcbiAgXCJGbG9hdDY0QXJyYXlcIixcbiAgXCJJbnQxNkFycmF5XCIsXG4gIFwiSW50MzJBcnJheVwiLFxuICBcIkludDhBcnJheVwiLFxuICBcIlVpbnQxNkFycmF5XCIsXG4gIFwiVWludDMyQXJyYXlcIixcbiAgXCJGbG9hdDMyQXJyYXlcIixcbiAgXCJBcnJheVwiLFxuICBcIlVpbnQ4QXJyYXlcIixcbiAgXCJVaW50OENsYW1wZWRBcnJheVwiLFxuICBcIkFycmF5QnVmZmVyXCJcbl07XG5cbmNvbnN0IEVSUk9SX1RZUEVTID0gW1xuICBcIkV2YWxFcnJvclwiLFxuICBcIkludGVybmFsRXJyb3JcIixcbiAgXCJSYW5nZUVycm9yXCIsXG4gIFwiUmVmZXJlbmNlRXJyb3JcIixcbiAgXCJTeW50YXhFcnJvclwiLFxuICBcIlR5cGVFcnJvclwiLFxuICBcIlVSSUVycm9yXCJcbl07XG5cbmNvbnN0IEJVSUxUX0lOX0dMT0JBTFMgPSBbXG4gIFwic2V0SW50ZXJ2YWxcIixcbiAgXCJzZXRUaW1lb3V0XCIsXG4gIFwiY2xlYXJJbnRlcnZhbFwiLFxuICBcImNsZWFyVGltZW91dFwiLFxuXG4gIFwicmVxdWlyZVwiLFxuICBcImV4cG9ydHNcIixcblxuICBcImV2YWxcIixcbiAgXCJpc0Zpbml0ZVwiLFxuICBcImlzTmFOXCIsXG4gIFwicGFyc2VGbG9hdFwiLFxuICBcInBhcnNlSW50XCIsXG4gIFwiZGVjb2RlVVJJXCIsXG4gIFwiZGVjb2RlVVJJQ29tcG9uZW50XCIsXG4gIFwiZW5jb2RlVVJJXCIsXG4gIFwiZW5jb2RlVVJJQ29tcG9uZW50XCIsXG4gIFwiZXNjYXBlXCIsXG4gIFwidW5lc2NhcGVcIlxuXTtcblxuY29uc3QgQlVJTFRfSU5fVkFSSUFCTEVTID0gW1xuICBcImFyZ3VtZW50c1wiLFxuICBcInRoaXNcIixcbiAgXCJzdXBlclwiLFxuICBcImNvbnNvbGVcIixcbiAgXCJ3aW5kb3dcIixcbiAgXCJkb2N1bWVudFwiLFxuICBcImxvY2FsU3RvcmFnZVwiLFxuICBcIm1vZHVsZVwiLFxuICBcImdsb2JhbFwiIC8vIE5vZGUuanNcbl07XG5cbmNvbnN0IEJVSUxUX0lOUyA9IFtdLmNvbmNhdChcbiAgQlVJTFRfSU5fR0xPQkFMUyxcbiAgQlVJTFRfSU5fVkFSSUFCTEVTLFxuICBUWVBFUyxcbiAgRVJST1JfVFlQRVNcbik7XG5cbi8qXG5MYW5ndWFnZTogQ29mZmVlU2NyaXB0XG5BdXRob3I6IERteXRyaWkgTmFnaXJuaWFrIDxkbmFnaXJAZ21haWwuY29tPlxuQ29udHJpYnV0b3JzOiBPbGVnIEVmaW1vdiA8ZWZpbW92b3ZAZ21haWwuY29tPiwgQ8OpZHJpYyBOw6low6ltaWUgPGNlZHJpYy5uZWhlbWllQGdtYWlsLmNvbT5cbkRlc2NyaXB0aW9uOiBDb2ZmZWVTY3JpcHQgaXMgYSBwcm9ncmFtbWluZyBsYW5ndWFnZSB0aGF0IHRyYW5zY29tcGlsZXMgdG8gSmF2YVNjcmlwdC4gRm9yIGluZm8gYWJvdXQgbGFuZ3VhZ2Ugc2VlIGh0dHA6Ly9jb2ZmZWVzY3JpcHQub3JnL1xuQ2F0ZWdvcnk6IGNvbW1vbiwgc2NyaXB0aW5nXG5XZWJzaXRlOiBodHRwczovL2NvZmZlZXNjcmlwdC5vcmdcbiovXG5cbi8qKiBAdHlwZSBMYW5ndWFnZUZuICovXG5mdW5jdGlvbiBjb2ZmZWVzY3JpcHQoaGxqcykge1xuICBjb25zdCBDT0ZGRUVfQlVJTFRfSU5TID0gW1xuICAgICducG0nLFxuICAgICdwcmludCdcbiAgXTtcbiAgY29uc3QgQ09GRkVFX0xJVEVSQUxTID0gW1xuICAgICd5ZXMnLFxuICAgICdubycsXG4gICAgJ29uJyxcbiAgICAnb2ZmJ1xuICBdO1xuICBjb25zdCBDT0ZGRUVfS0VZV09SRFMgPSBbXG4gICAgJ3RoZW4nLFxuICAgICd1bmxlc3MnLFxuICAgICd1bnRpbCcsXG4gICAgJ2xvb3AnLFxuICAgICdieScsXG4gICAgJ3doZW4nLFxuICAgICdhbmQnLFxuICAgICdvcicsXG4gICAgJ2lzJyxcbiAgICAnaXNudCcsXG4gICAgJ25vdCdcbiAgXTtcbiAgY29uc3QgTk9UX1ZBTElEX0tFWVdPUkRTID0gW1xuICAgIFwidmFyXCIsXG4gICAgXCJjb25zdFwiLFxuICAgIFwibGV0XCIsXG4gICAgXCJmdW5jdGlvblwiLFxuICAgIFwic3RhdGljXCJcbiAgXTtcbiAgY29uc3QgZXhjbHVkaW5nID0gKGxpc3QpID0+XG4gICAgKGt3KSA9PiAhbGlzdC5pbmNsdWRlcyhrdyk7XG4gIGNvbnN0IEtFWVdPUkRTJDEgPSB7XG4gICAga2V5d29yZDogS0VZV09SRFMuY29uY2F0KENPRkZFRV9LRVlXT1JEUykuZmlsdGVyKGV4Y2x1ZGluZyhOT1RfVkFMSURfS0VZV09SRFMpKSxcbiAgICBsaXRlcmFsOiBMSVRFUkFMUy5jb25jYXQoQ09GRkVFX0xJVEVSQUxTKSxcbiAgICBidWlsdF9pbjogQlVJTFRfSU5TLmNvbmNhdChDT0ZGRUVfQlVJTFRfSU5TKVxuICB9O1xuICBjb25zdCBKU19JREVOVF9SRSA9ICdbQS1aYS16JF9dWzAtOUEtWmEteiRfXSonO1xuICBjb25zdCBTVUJTVCA9IHtcbiAgICBjbGFzc05hbWU6ICdzdWJzdCcsXG4gICAgYmVnaW46IC8jXFx7LyxcbiAgICBlbmQ6IC9cXH0vLFxuICAgIGtleXdvcmRzOiBLRVlXT1JEUyQxXG4gIH07XG4gIGNvbnN0IEVYUFJFU1NJT05TID0gW1xuICAgIGhsanMuQklOQVJZX05VTUJFUl9NT0RFLFxuICAgIGhsanMuaW5oZXJpdChobGpzLkNfTlVNQkVSX01PREUsIHtcbiAgICAgIHN0YXJ0czoge1xuICAgICAgICBlbmQ6ICcoXFxcXHMqLyk/JyxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9XG4gICAgfSksIC8vIGEgbnVtYmVyIHRyaWVzIHRvIGVhdCB0aGUgZm9sbG93aW5nIHNsYXNoIHRvIHByZXZlbnQgdHJlYXRpbmcgaXQgYXMgYSByZWdleHBcbiAgICB7XG4gICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGJlZ2luOiAvJycnLyxcbiAgICAgICAgICBlbmQ6IC8nJycvLFxuICAgICAgICAgIGNvbnRhaW5zOiBbaGxqcy5CQUNLU0xBU0hfRVNDQVBFXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgYmVnaW46IC8nLyxcbiAgICAgICAgICBlbmQ6IC8nLyxcbiAgICAgICAgICBjb250YWluczogW2hsanMuQkFDS1NMQVNIX0VTQ0FQRV1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGJlZ2luOiAvXCJcIlwiLyxcbiAgICAgICAgICBlbmQ6IC9cIlwiXCIvLFxuICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICBobGpzLkJBQ0tTTEFTSF9FU0NBUEUsXG4gICAgICAgICAgICBTVUJTVFxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGJlZ2luOiAvXCIvLFxuICAgICAgICAgIGVuZDogL1wiLyxcbiAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgaGxqcy5CQUNLU0xBU0hfRVNDQVBFLFxuICAgICAgICAgICAgU1VCU1RcbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIGNsYXNzTmFtZTogJ3JlZ2V4cCcsXG4gICAgICB2YXJpYW50czogW1xuICAgICAgICB7XG4gICAgICAgICAgYmVnaW46ICcvLy8nLFxuICAgICAgICAgIGVuZDogJy8vLycsXG4gICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgIFNVQlNULFxuICAgICAgICAgICAgaGxqcy5IQVNIX0NPTU1FTlRfTU9ERVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGJlZ2luOiAnLy9bZ2ltXXswLDN9KD89XFxcXFcpJyxcbiAgICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIC8vIHJlZ2V4IGNhbid0IHN0YXJ0IHdpdGggc3BhY2UgdG8gcGFyc2UgeCAvIDIgLyAzIGFzIHR3byBkaXZpc2lvbnNcbiAgICAgICAgICAvLyByZWdleCBjYW4ndCBzdGFydCB3aXRoICosIGFuZCBpdCBzdXBwb3J0cyBhbiBcImlsbGVnYWxcIiBpbiB0aGUgbWFpbiBtb2RlXG4gICAgICAgICAgYmVnaW46IC9cXC8oPyFbICpdKS4qPyg/IVtcXFxcXSkuXFwvW2dpbV17MCwzfSg/PVxcVykvXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIGJlZ2luOiAnQCcgKyBKU19JREVOVF9SRSAvLyByZWxldmFuY2UgYm9vc3RlclxuICAgIH0sXG4gICAge1xuICAgICAgc3ViTGFuZ3VhZ2U6ICdqYXZhc2NyaXB0JyxcbiAgICAgIGV4Y2x1ZGVCZWdpbjogdHJ1ZSxcbiAgICAgIGV4Y2x1ZGVFbmQ6IHRydWUsXG4gICAgICB2YXJpYW50czogW1xuICAgICAgICB7XG4gICAgICAgICAgYmVnaW46ICdgYGAnLFxuICAgICAgICAgIGVuZDogJ2BgYCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGJlZ2luOiAnYCcsXG4gICAgICAgICAgZW5kOiAnYCdcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXTtcbiAgU1VCU1QuY29udGFpbnMgPSBFWFBSRVNTSU9OUztcblxuICBjb25zdCBUSVRMRSA9IGhsanMuaW5oZXJpdChobGpzLlRJVExFX01PREUsIHtcbiAgICBiZWdpbjogSlNfSURFTlRfUkVcbiAgfSk7XG4gIGNvbnN0IFBPU1NJQkxFX1BBUkFNU19SRSA9ICcoXFxcXCguKlxcXFwpXFxcXHMqKT9cXFxcQlstPV0+JztcbiAgY29uc3QgUEFSQU1TID0ge1xuICAgIGNsYXNzTmFtZTogJ3BhcmFtcycsXG4gICAgYmVnaW46ICdcXFxcKFteXFxcXChdJyxcbiAgICByZXR1cm5CZWdpbjogdHJ1ZSxcbiAgICAvKiBXZSBuZWVkIGFub3RoZXIgY29udGFpbmVkIG5hbWVsZXNzIG1vZGUgdG8gbm90IGhhdmUgZXZlcnkgbmVzdGVkXG4gICAgcGFpciBvZiBwYXJlbnMgdG8gYmUgY2FsbGVkIFwicGFyYW1zXCIgKi9cbiAgICBjb250YWluczogW3tcbiAgICAgIGJlZ2luOiAvXFwoLyxcbiAgICAgIGVuZDogL1xcKS8sXG4gICAgICBrZXl3b3JkczogS0VZV09SRFMkMSxcbiAgICAgIGNvbnRhaW5zOiBbJ3NlbGYnXS5jb25jYXQoRVhQUkVTU0lPTlMpXG4gICAgfV1cbiAgfTtcblxuICByZXR1cm4ge1xuICAgIG5hbWU6ICdDb2ZmZWVTY3JpcHQnLFxuICAgIGFsaWFzZXM6IFtcbiAgICAgICdjb2ZmZWUnLFxuICAgICAgJ2Nzb24nLFxuICAgICAgJ2ljZWQnXG4gICAgXSxcbiAgICBrZXl3b3JkczogS0VZV09SRFMkMSxcbiAgICBpbGxlZ2FsOiAvXFwvXFwqLyxcbiAgICBjb250YWluczogRVhQUkVTU0lPTlMuY29uY2F0KFtcbiAgICAgIGhsanMuQ09NTUVOVCgnIyMjJywgJyMjIycpLFxuICAgICAgaGxqcy5IQVNIX0NPTU1FTlRfTU9ERSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnZnVuY3Rpb24nLFxuICAgICAgICBiZWdpbjogJ15cXFxccyonICsgSlNfSURFTlRfUkUgKyAnXFxcXHMqPVxcXFxzKicgKyBQT1NTSUJMRV9QQVJBTVNfUkUsXG4gICAgICAgIGVuZDogJ1stPV0+JyxcbiAgICAgICAgcmV0dXJuQmVnaW46IHRydWUsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgVElUTEUsXG4gICAgICAgICAgUEFSQU1TXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIC8vIGFub255bW91cyBmdW5jdGlvbiBzdGFydFxuICAgICAgICBiZWdpbjogL1s6XFwoLD1dXFxzKi8sXG4gICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgY29udGFpbnM6IFt7XG4gICAgICAgICAgY2xhc3NOYW1lOiAnZnVuY3Rpb24nLFxuICAgICAgICAgIGJlZ2luOiBQT1NTSUJMRV9QQVJBTVNfUkUsXG4gICAgICAgICAgZW5kOiAnWy09XT4nLFxuICAgICAgICAgIHJldHVybkJlZ2luOiB0cnVlLFxuICAgICAgICAgIGNvbnRhaW5zOiBbUEFSQU1TXVxuICAgICAgICB9XVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnY2xhc3MnLFxuICAgICAgICBiZWdpbktleXdvcmRzOiAnY2xhc3MnLFxuICAgICAgICBlbmQ6ICckJyxcbiAgICAgICAgaWxsZWdhbDogL1s6PVwiXFxbXFxdXS8sXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW5LZXl3b3JkczogJ2V4dGVuZHMnLFxuICAgICAgICAgICAgZW5kc1dpdGhQYXJlbnQ6IHRydWUsXG4gICAgICAgICAgICBpbGxlZ2FsOiAvWzo9XCJcXFtcXF1dLyxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbVElUTEVdXG4gICAgICAgICAgfSxcbiAgICAgICAgICBUSVRMRVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogSlNfSURFTlRfUkUgKyAnOicsXG4gICAgICAgIGVuZDogJzonLFxuICAgICAgICByZXR1cm5CZWdpbjogdHJ1ZSxcbiAgICAgICAgcmV0dXJuRW5kOiB0cnVlLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH1cbiAgICBdKVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvZmZlZXNjcmlwdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=