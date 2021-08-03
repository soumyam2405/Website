(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[86],{

/***/ "./node_modules/highlight.js/lib/languages/javascript.js":
/*!***************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/javascript.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const IDENT_RE = '[A-Za-z$_][0-9A-Za-z$_]*';
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
Language: JavaScript
Description: JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions.
Category: common, scripting
Website: https://developer.mozilla.org/en-US/docs/Web/JavaScript
*/

/** @type LanguageFn */
function javascript(hljs) {
  /**
   * Takes a string like "<Booger" and checks to see
   * if we can find a matching "</Booger" later in the
   * content.
   * @param {RegExpMatchArray} match
   * @param {{after:number}} param1
   */
  const hasClosingTag = (match, { after }) => {
    const tag = "</" + match[0].slice(1);
    const pos = match.input.indexOf(tag, after);
    return pos !== -1;
  };

  const IDENT_RE$1 = IDENT_RE;
  const FRAGMENT = {
    begin: '<>',
    end: '</>'
  };
  const XML_TAG = {
    begin: /<[A-Za-z0-9\\._:-]+/,
    end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
    /**
     * @param {RegExpMatchArray} match
     * @param {CallbackResponse} response
     */
    isTrulyOpeningTag: (match, response) => {
      const afterMatchIndex = match[0].length + match.index;
      const nextChar = match.input[afterMatchIndex];
      // nested type?
      // HTML should not include another raw `<` inside a tag
      // But a type might: `<Array<Array<number>>`, etc.
      if (nextChar === "<") {
        response.ignoreMatch();
        return;
      }
      // <something>
      // This is now either a tag or a type.
      if (nextChar === ">") {
        // if we cannot find a matching closing tag, then we
        // will ignore it
        if (!hasClosingTag(match, { after: afterMatchIndex })) {
          response.ignoreMatch();
        }
      }
    }
  };
  const KEYWORDS$1 = {
    $pattern: IDENT_RE,
    keyword: KEYWORDS,
    literal: LITERALS,
    built_in: BUILT_INS
  };

  // https://tc39.es/ecma262/#sec-literals-numeric-literals
  const decimalDigits = '[0-9](_?[0-9])*';
  const frac = `\\.(${decimalDigits})`;
  // DecimalIntegerLiteral, including Annex B NonOctalDecimalIntegerLiteral
  // https://tc39.es/ecma262/#sec-additional-syntax-numeric-literals
  const decimalInteger = `0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*`;
  const NUMBER = {
    className: 'number',
    variants: [
      // DecimalLiteral
      { begin: `(\\b(${decimalInteger})((${frac})|\\.)?|(${frac}))` +
        `[eE][+-]?(${decimalDigits})\\b` },
      { begin: `\\b(${decimalInteger})\\b((${frac})\\b|\\.)?|(${frac})\\b` },

      // DecimalBigIntegerLiteral
      { begin: `\\b(0|[1-9](_?[0-9])*)n\\b` },

      // NonDecimalIntegerLiteral
      { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
      { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
      { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },

      // LegacyOctalIntegerLiteral (does not include underscore separators)
      // https://tc39.es/ecma262/#sec-additional-syntax-numeric-literals
      { begin: "\\b0[0-7]+n?\\b" },
    ],
    relevance: 0
  };

  const SUBST = {
    className: 'subst',
    begin: '\\$\\{',
    end: '\\}',
    keywords: KEYWORDS$1,
    contains: [] // defined later
  };
  const HTML_TEMPLATE = {
    begin: 'html`',
    end: '',
    starts: {
      end: '`',
      returnEnd: false,
      contains: [
        hljs.BACKSLASH_ESCAPE,
        SUBST
      ],
      subLanguage: 'xml'
    }
  };
  const CSS_TEMPLATE = {
    begin: 'css`',
    end: '',
    starts: {
      end: '`',
      returnEnd: false,
      contains: [
        hljs.BACKSLASH_ESCAPE,
        SUBST
      ],
      subLanguage: 'css'
    }
  };
  const TEMPLATE_STRING = {
    className: 'string',
    begin: '`',
    end: '`',
    contains: [
      hljs.BACKSLASH_ESCAPE,
      SUBST
    ]
  };
  const JSDOC_COMMENT = hljs.COMMENT(
    /\/\*\*(?!\/)/,
    '\\*/',
    {
      relevance: 0,
      contains: [
        {
          className: 'doctag',
          begin: '@[A-Za-z]+',
          contains: [
            {
              className: 'type',
              begin: '\\{',
              end: '\\}',
              relevance: 0
            },
            {
              className: 'variable',
              begin: IDENT_RE$1 + '(?=\\s*(-)|$)',
              endsParent: true,
              relevance: 0
            },
            // eat spaces (not newlines) so we can find
            // types or variables
            {
              begin: /(?=[^\n])\s/,
              relevance: 0
            }
          ]
        }
      ]
    }
  );
  const COMMENT = {
    className: "comment",
    variants: [
      JSDOC_COMMENT,
      hljs.C_BLOCK_COMMENT_MODE,
      hljs.C_LINE_COMMENT_MODE
    ]
  };
  const SUBST_INTERNALS = [
    hljs.APOS_STRING_MODE,
    hljs.QUOTE_STRING_MODE,
    HTML_TEMPLATE,
    CSS_TEMPLATE,
    TEMPLATE_STRING,
    NUMBER,
    hljs.REGEXP_MODE
  ];
  SUBST.contains = SUBST_INTERNALS
    .concat({
      // we need to pair up {} inside our subst to prevent
      // it from ending too early by matching another }
      begin: /\{/,
      end: /\}/,
      keywords: KEYWORDS$1,
      contains: [
        "self"
      ].concat(SUBST_INTERNALS)
    });
  const SUBST_AND_COMMENTS = [].concat(COMMENT, SUBST.contains);
  const PARAMS_CONTAINS = SUBST_AND_COMMENTS.concat([
    // eat recursive parens in sub expressions
    {
      begin: /\(/,
      end: /\)/,
      keywords: KEYWORDS$1,
      contains: ["self"].concat(SUBST_AND_COMMENTS)
    }
  ]);
  const PARAMS = {
    className: 'params',
    begin: /\(/,
    end: /\)/,
    excludeBegin: true,
    excludeEnd: true,
    keywords: KEYWORDS$1,
    contains: PARAMS_CONTAINS
  };

  return {
    name: 'Javascript',
    aliases: ['js', 'jsx', 'mjs', 'cjs'],
    keywords: KEYWORDS$1,
    // this will be extended by TypeScript
    exports: { PARAMS_CONTAINS },
    illegal: /#(?![$_A-z])/,
    contains: [
      hljs.SHEBANG({
        label: "shebang",
        binary: "node",
        relevance: 5
      }),
      {
        label: "use_strict",
        className: 'meta',
        relevance: 10,
        begin: /^\s*['"]use (strict|asm)['"]/
      },
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE,
      HTML_TEMPLATE,
      CSS_TEMPLATE,
      TEMPLATE_STRING,
      COMMENT,
      NUMBER,
      { // object attr container
        begin: concat(/[{,\n]\s*/,
          // we need to look ahead to make sure that we actually have an
          // attribute coming up so we don't steal a comma from a potential
          // "value" container
          //
          // NOTE: this might not work how you think.  We don't actually always
          // enter this mode and stay.  Instead it might merely match `,
          // <comments up next>` and then immediately end after the , because it
          // fails to find any actual attrs. But this still does the job because
          // it prevents the value contain rule from grabbing this instead and
          // prevening this rule from firing when we actually DO have keys.
          lookahead(concat(
            // we also need to allow for multiple possible comments inbetween
            // the first key:value pairing
            /(((\/\/.*$)|(\/\*(\*[^/]|[^*])*\*\/))\s*)*/,
            IDENT_RE$1 + '\\s*:'))),
        relevance: 0,
        contains: [
          {
            className: 'attr',
            begin: IDENT_RE$1 + lookahead('\\s*:'),
            relevance: 0
          }
        ]
      },
      { // "value" container
        begin: '(' + hljs.RE_STARTERS_RE + '|\\b(case|return|throw)\\b)\\s*',
        keywords: 'return throw case',
        contains: [
          COMMENT,
          hljs.REGEXP_MODE,
          {
            className: 'function',
            // we have to count the parens to make sure we actually have the
            // correct bounding ( ) before the =>.  There could be any number of
            // sub-expressions inside also surrounded by parens.
            begin: '(\\(' +
            '[^()]*(\\(' +
            '[^()]*(\\(' +
            '[^()]*' +
            '\\)[^()]*)*' +
            '\\)[^()]*)*' +
            '\\)|' + hljs.UNDERSCORE_IDENT_RE + ')\\s*=>',
            returnBegin: true,
            end: '\\s*=>',
            contains: [
              {
                className: 'params',
                variants: [
                  {
                    begin: hljs.UNDERSCORE_IDENT_RE,
                    relevance: 0
                  },
                  {
                    className: null,
                    begin: /\(\s*\)/,
                    skip: true
                  },
                  {
                    begin: /\(/,
                    end: /\)/,
                    excludeBegin: true,
                    excludeEnd: true,
                    keywords: KEYWORDS$1,
                    contains: PARAMS_CONTAINS
                  }
                ]
              }
            ]
          },
          { // could be a comma delimited list of params to a function call
            begin: /,/, relevance: 0
          },
          {
            className: '',
            begin: /\s/,
            end: /\s*/,
            skip: true
          },
          { // JSX
            variants: [
              { begin: FRAGMENT.begin, end: FRAGMENT.end },
              {
                begin: XML_TAG.begin,
                // we carefully check the opening tag to see if it truly
                // is a tag and not a false positive
                'on:begin': XML_TAG.isTrulyOpeningTag,
                end: XML_TAG.end
              }
            ],
            subLanguage: 'xml',
            contains: [
              {
                begin: XML_TAG.begin,
                end: XML_TAG.end,
                skip: true,
                contains: ['self']
              }
            ]
          }
        ],
        relevance: 0
      },
      {
        className: 'function',
        beginKeywords: 'function',
        end: /[{;]/,
        excludeEnd: true,
        keywords: KEYWORDS$1,
        contains: [
          'self',
          hljs.inherit(hljs.TITLE_MODE, { begin: IDENT_RE$1 }),
          PARAMS
        ],
        illegal: /%/
      },
      {
        // prevent this from getting swallowed up by function
        // since they appear "function like"
        beginKeywords: "while if switch catch for"
      },
      {
        className: 'function',
        // we have to count the parens to make sure we actually have the correct
        // bounding ( ).  There could be any number of sub-expressions inside
        // also surrounded by parens.
        begin: hljs.UNDERSCORE_IDENT_RE +
          '\\(' + // first parens
          '[^()]*(\\(' +
            '[^()]*(\\(' +
              '[^()]*' +
            '\\)[^()]*)*' +
          '\\)[^()]*)*' +
          '\\)\\s*\\{', // end parens
        returnBegin:true,
        contains: [
          PARAMS,
          hljs.inherit(hljs.TITLE_MODE, { begin: IDENT_RE$1 }),
        ]
      },
      // hack: prevents detection of keywords in some circumstances
      // .keyword()
      // $keyword = x
      {
        variants: [
          { begin: '\\.' + IDENT_RE$1 },
          { begin: '\\$' + IDENT_RE$1 }
        ],
        relevance: 0
      },
      { // ES6 class
        className: 'class',
        beginKeywords: 'class',
        end: /[{;=]/,
        excludeEnd: true,
        illegal: /[:"[\]]/,
        contains: [
          { beginKeywords: 'extends' },
          hljs.UNDERSCORE_TITLE_MODE
        ]
      },
      {
        begin: /\b(?=constructor)/,
        end: /[{;]/,
        excludeEnd: true,
        contains: [
          hljs.inherit(hljs.TITLE_MODE, { begin: IDENT_RE$1 }),
          'self',
          PARAMS
        ]
      },
      {
        begin: '(get|set)\\s+(?=' + IDENT_RE$1 + '\\()',
        end: /\{/,
        keywords: "get set",
        contains: [
          hljs.inherit(hljs.TITLE_MODE, { begin: IDENT_RE$1 }),
          { begin: /\(\)/ }, // eat to avoid empty params
          PARAMS
        ]
      },
      {
        begin: /\$[(.]/ // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
      }
    ]
  };
}

module.exports = javascript;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2phdmFzY3JpcHQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWE7QUFDYjs7QUFFQTtBQUNBLFdBQVcsaUJBQWlCO0FBQzVCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyxpQkFBaUI7QUFDNUIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyxzQkFBc0I7QUFDakMsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsaUJBQWlCO0FBQzlCLGNBQWMsY0FBYztBQUM1QjtBQUNBLGlDQUFpQyxRQUFRO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsaUJBQWlCO0FBQ2hDLGVBQWUsaUJBQWlCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLHlCQUF5QjtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0IsY0FBYztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0JBQWdCLGVBQWUsS0FBSyxLQUFLLFdBQVcsS0FBSztBQUNoRSxxQkFBcUIsY0FBYyxPQUFPO0FBQzFDLE9BQU8sZUFBZSxlQUFlLFFBQVEsS0FBSyxjQUFjLEtBQUssT0FBTzs7QUFFNUU7QUFDQSxPQUFPLHNDQUFzQzs7QUFFN0M7QUFDQSxPQUFPLG9EQUFvRDtBQUMzRCxPQUFPLHdDQUF3QztBQUMvQyxPQUFPLHdDQUF3Qzs7QUFFL0M7QUFDQTtBQUNBLE9BQU8sMkJBQTJCO0FBQ2xDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLHVCQUF1QjtBQUN2QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBLGdCQUFnQjtBQUNoQixjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsa0JBQWtCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsV0FBVztBQUNYO0FBQ0EsZUFBZSwyQ0FBMkM7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsb0JBQW9CO0FBQzdEO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLG9CQUFvQjtBQUM3RDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyw0QkFBNEI7QUFDdkMsV0FBVztBQUNYO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsT0FBTztBQUNQO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsV0FBVywyQkFBMkI7QUFDdEM7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSx5Q0FBeUMsb0JBQW9CO0FBQzdEO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQSx5Q0FBeUMsb0JBQW9CO0FBQzdELFdBQVcsZ0JBQWdCO0FBQzNCO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvODYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBJREVOVF9SRSA9ICdbQS1aYS16JF9dWzAtOUEtWmEteiRfXSonO1xuY29uc3QgS0VZV09SRFMgPSBbXG4gIFwiYXNcIiwgLy8gZm9yIGV4cG9ydHNcbiAgXCJpblwiLFxuICBcIm9mXCIsXG4gIFwiaWZcIixcbiAgXCJmb3JcIixcbiAgXCJ3aGlsZVwiLFxuICBcImZpbmFsbHlcIixcbiAgXCJ2YXJcIixcbiAgXCJuZXdcIixcbiAgXCJmdW5jdGlvblwiLFxuICBcImRvXCIsXG4gIFwicmV0dXJuXCIsXG4gIFwidm9pZFwiLFxuICBcImVsc2VcIixcbiAgXCJicmVha1wiLFxuICBcImNhdGNoXCIsXG4gIFwiaW5zdGFuY2VvZlwiLFxuICBcIndpdGhcIixcbiAgXCJ0aHJvd1wiLFxuICBcImNhc2VcIixcbiAgXCJkZWZhdWx0XCIsXG4gIFwidHJ5XCIsXG4gIFwic3dpdGNoXCIsXG4gIFwiY29udGludWVcIixcbiAgXCJ0eXBlb2ZcIixcbiAgXCJkZWxldGVcIixcbiAgXCJsZXRcIixcbiAgXCJ5aWVsZFwiLFxuICBcImNvbnN0XCIsXG4gIFwiY2xhc3NcIixcbiAgLy8gSlMgaGFuZGxlcyB0aGVzZSB3aXRoIGEgc3BlY2lhbCBydWxlXG4gIC8vIFwiZ2V0XCIsXG4gIC8vIFwic2V0XCIsXG4gIFwiZGVidWdnZXJcIixcbiAgXCJhc3luY1wiLFxuICBcImF3YWl0XCIsXG4gIFwic3RhdGljXCIsXG4gIFwiaW1wb3J0XCIsXG4gIFwiZnJvbVwiLFxuICBcImV4cG9ydFwiLFxuICBcImV4dGVuZHNcIlxuXTtcbmNvbnN0IExJVEVSQUxTID0gW1xuICBcInRydWVcIixcbiAgXCJmYWxzZVwiLFxuICBcIm51bGxcIixcbiAgXCJ1bmRlZmluZWRcIixcbiAgXCJOYU5cIixcbiAgXCJJbmZpbml0eVwiXG5dO1xuXG5jb25zdCBUWVBFUyA9IFtcbiAgXCJJbnRsXCIsXG4gIFwiRGF0YVZpZXdcIixcbiAgXCJOdW1iZXJcIixcbiAgXCJNYXRoXCIsXG4gIFwiRGF0ZVwiLFxuICBcIlN0cmluZ1wiLFxuICBcIlJlZ0V4cFwiLFxuICBcIk9iamVjdFwiLFxuICBcIkZ1bmN0aW9uXCIsXG4gIFwiQm9vbGVhblwiLFxuICBcIkVycm9yXCIsXG4gIFwiU3ltYm9sXCIsXG4gIFwiU2V0XCIsXG4gIFwiTWFwXCIsXG4gIFwiV2Vha1NldFwiLFxuICBcIldlYWtNYXBcIixcbiAgXCJQcm94eVwiLFxuICBcIlJlZmxlY3RcIixcbiAgXCJKU09OXCIsXG4gIFwiUHJvbWlzZVwiLFxuICBcIkZsb2F0NjRBcnJheVwiLFxuICBcIkludDE2QXJyYXlcIixcbiAgXCJJbnQzMkFycmF5XCIsXG4gIFwiSW50OEFycmF5XCIsXG4gIFwiVWludDE2QXJyYXlcIixcbiAgXCJVaW50MzJBcnJheVwiLFxuICBcIkZsb2F0MzJBcnJheVwiLFxuICBcIkFycmF5XCIsXG4gIFwiVWludDhBcnJheVwiLFxuICBcIlVpbnQ4Q2xhbXBlZEFycmF5XCIsXG4gIFwiQXJyYXlCdWZmZXJcIlxuXTtcblxuY29uc3QgRVJST1JfVFlQRVMgPSBbXG4gIFwiRXZhbEVycm9yXCIsXG4gIFwiSW50ZXJuYWxFcnJvclwiLFxuICBcIlJhbmdlRXJyb3JcIixcbiAgXCJSZWZlcmVuY2VFcnJvclwiLFxuICBcIlN5bnRheEVycm9yXCIsXG4gIFwiVHlwZUVycm9yXCIsXG4gIFwiVVJJRXJyb3JcIlxuXTtcblxuY29uc3QgQlVJTFRfSU5fR0xPQkFMUyA9IFtcbiAgXCJzZXRJbnRlcnZhbFwiLFxuICBcInNldFRpbWVvdXRcIixcbiAgXCJjbGVhckludGVydmFsXCIsXG4gIFwiY2xlYXJUaW1lb3V0XCIsXG5cbiAgXCJyZXF1aXJlXCIsXG4gIFwiZXhwb3J0c1wiLFxuXG4gIFwiZXZhbFwiLFxuICBcImlzRmluaXRlXCIsXG4gIFwiaXNOYU5cIixcbiAgXCJwYXJzZUZsb2F0XCIsXG4gIFwicGFyc2VJbnRcIixcbiAgXCJkZWNvZGVVUklcIixcbiAgXCJkZWNvZGVVUklDb21wb25lbnRcIixcbiAgXCJlbmNvZGVVUklcIixcbiAgXCJlbmNvZGVVUklDb21wb25lbnRcIixcbiAgXCJlc2NhcGVcIixcbiAgXCJ1bmVzY2FwZVwiXG5dO1xuXG5jb25zdCBCVUlMVF9JTl9WQVJJQUJMRVMgPSBbXG4gIFwiYXJndW1lbnRzXCIsXG4gIFwidGhpc1wiLFxuICBcInN1cGVyXCIsXG4gIFwiY29uc29sZVwiLFxuICBcIndpbmRvd1wiLFxuICBcImRvY3VtZW50XCIsXG4gIFwibG9jYWxTdG9yYWdlXCIsXG4gIFwibW9kdWxlXCIsXG4gIFwiZ2xvYmFsXCIgLy8gTm9kZS5qc1xuXTtcblxuY29uc3QgQlVJTFRfSU5TID0gW10uY29uY2F0KFxuICBCVUlMVF9JTl9HTE9CQUxTLFxuICBCVUlMVF9JTl9WQVJJQUJMRVMsXG4gIFRZUEVTLFxuICBFUlJPUl9UWVBFU1xuKTtcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm5zIHtSZWdFeHB9XG4gKiAqL1xuXG4vKipcbiAqIEBwYXJhbSB7UmVnRXhwIHwgc3RyaW5nIH0gcmVcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIHNvdXJjZShyZSkge1xuICBpZiAoIXJlKSByZXR1cm4gbnVsbDtcbiAgaWYgKHR5cGVvZiByZSA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIHJlO1xuXG4gIHJldHVybiByZS5zb3VyY2U7XG59XG5cbi8qKlxuICogQHBhcmFtIHtSZWdFeHAgfCBzdHJpbmcgfSByZVxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gbG9va2FoZWFkKHJlKSB7XG4gIHJldHVybiBjb25jYXQoJyg/PScsIHJlLCAnKScpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7Li4uKFJlZ0V4cCB8IHN0cmluZykgfSBhcmdzXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBjb25jYXQoLi4uYXJncykge1xuICBjb25zdCBqb2luZWQgPSBhcmdzLm1hcCgoeCkgPT4gc291cmNlKHgpKS5qb2luKFwiXCIpO1xuICByZXR1cm4gam9pbmVkO1xufVxuXG4vKlxuTGFuZ3VhZ2U6IEphdmFTY3JpcHRcbkRlc2NyaXB0aW9uOiBKYXZhU2NyaXB0IChKUykgaXMgYSBsaWdodHdlaWdodCwgaW50ZXJwcmV0ZWQsIG9yIGp1c3QtaW4tdGltZSBjb21waWxlZCBwcm9ncmFtbWluZyBsYW5ndWFnZSB3aXRoIGZpcnN0LWNsYXNzIGZ1bmN0aW9ucy5cbkNhdGVnb3J5OiBjb21tb24sIHNjcmlwdGluZ1xuV2Vic2l0ZTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdFxuKi9cblxuLyoqIEB0eXBlIExhbmd1YWdlRm4gKi9cbmZ1bmN0aW9uIGphdmFzY3JpcHQoaGxqcykge1xuICAvKipcbiAgICogVGFrZXMgYSBzdHJpbmcgbGlrZSBcIjxCb29nZXJcIiBhbmQgY2hlY2tzIHRvIHNlZVxuICAgKiBpZiB3ZSBjYW4gZmluZCBhIG1hdGNoaW5nIFwiPC9Cb29nZXJcIiBsYXRlciBpbiB0aGVcbiAgICogY29udGVudC5cbiAgICogQHBhcmFtIHtSZWdFeHBNYXRjaEFycmF5fSBtYXRjaFxuICAgKiBAcGFyYW0ge3thZnRlcjpudW1iZXJ9fSBwYXJhbTFcbiAgICovXG4gIGNvbnN0IGhhc0Nsb3NpbmdUYWcgPSAobWF0Y2gsIHsgYWZ0ZXIgfSkgPT4ge1xuICAgIGNvbnN0IHRhZyA9IFwiPC9cIiArIG1hdGNoWzBdLnNsaWNlKDEpO1xuICAgIGNvbnN0IHBvcyA9IG1hdGNoLmlucHV0LmluZGV4T2YodGFnLCBhZnRlcik7XG4gICAgcmV0dXJuIHBvcyAhPT0gLTE7XG4gIH07XG5cbiAgY29uc3QgSURFTlRfUkUkMSA9IElERU5UX1JFO1xuICBjb25zdCBGUkFHTUVOVCA9IHtcbiAgICBiZWdpbjogJzw+JyxcbiAgICBlbmQ6ICc8Lz4nXG4gIH07XG4gIGNvbnN0IFhNTF9UQUcgPSB7XG4gICAgYmVnaW46IC88W0EtWmEtejAtOVxcXFwuXzotXSsvLFxuICAgIGVuZDogL1xcL1tBLVphLXowLTlcXFxcLl86LV0rPnxcXC8+LyxcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1JlZ0V4cE1hdGNoQXJyYXl9IG1hdGNoXG4gICAgICogQHBhcmFtIHtDYWxsYmFja1Jlc3BvbnNlfSByZXNwb25zZVxuICAgICAqL1xuICAgIGlzVHJ1bHlPcGVuaW5nVGFnOiAobWF0Y2gsIHJlc3BvbnNlKSA9PiB7XG4gICAgICBjb25zdCBhZnRlck1hdGNoSW5kZXggPSBtYXRjaFswXS5sZW5ndGggKyBtYXRjaC5pbmRleDtcbiAgICAgIGNvbnN0IG5leHRDaGFyID0gbWF0Y2guaW5wdXRbYWZ0ZXJNYXRjaEluZGV4XTtcbiAgICAgIC8vIG5lc3RlZCB0eXBlP1xuICAgICAgLy8gSFRNTCBzaG91bGQgbm90IGluY2x1ZGUgYW5vdGhlciByYXcgYDxgIGluc2lkZSBhIHRhZ1xuICAgICAgLy8gQnV0IGEgdHlwZSBtaWdodDogYDxBcnJheTxBcnJheTxudW1iZXI+PmAsIGV0Yy5cbiAgICAgIGlmIChuZXh0Q2hhciA9PT0gXCI8XCIpIHtcbiAgICAgICAgcmVzcG9uc2UuaWdub3JlTWF0Y2goKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy8gPHNvbWV0aGluZz5cbiAgICAgIC8vIFRoaXMgaXMgbm93IGVpdGhlciBhIHRhZyBvciBhIHR5cGUuXG4gICAgICBpZiAobmV4dENoYXIgPT09IFwiPlwiKSB7XG4gICAgICAgIC8vIGlmIHdlIGNhbm5vdCBmaW5kIGEgbWF0Y2hpbmcgY2xvc2luZyB0YWcsIHRoZW4gd2VcbiAgICAgICAgLy8gd2lsbCBpZ25vcmUgaXRcbiAgICAgICAgaWYgKCFoYXNDbG9zaW5nVGFnKG1hdGNoLCB7IGFmdGVyOiBhZnRlck1hdGNoSW5kZXggfSkpIHtcbiAgICAgICAgICByZXNwb25zZS5pZ25vcmVNYXRjaCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuICBjb25zdCBLRVlXT1JEUyQxID0ge1xuICAgICRwYXR0ZXJuOiBJREVOVF9SRSxcbiAgICBrZXl3b3JkOiBLRVlXT1JEUyxcbiAgICBsaXRlcmFsOiBMSVRFUkFMUyxcbiAgICBidWlsdF9pbjogQlVJTFRfSU5TXG4gIH07XG5cbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1saXRlcmFscy1udW1lcmljLWxpdGVyYWxzXG4gIGNvbnN0IGRlY2ltYWxEaWdpdHMgPSAnWzAtOV0oXz9bMC05XSkqJztcbiAgY29uc3QgZnJhYyA9IGBcXFxcLigke2RlY2ltYWxEaWdpdHN9KWA7XG4gIC8vIERlY2ltYWxJbnRlZ2VyTGl0ZXJhbCwgaW5jbHVkaW5nIEFubmV4IEIgTm9uT2N0YWxEZWNpbWFsSW50ZWdlckxpdGVyYWxcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hZGRpdGlvbmFsLXN5bnRheC1udW1lcmljLWxpdGVyYWxzXG4gIGNvbnN0IGRlY2ltYWxJbnRlZ2VyID0gYDB8WzEtOV0oXz9bMC05XSkqfDBbMC03XSpbODldWzAtOV0qYDtcbiAgY29uc3QgTlVNQkVSID0ge1xuICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgdmFyaWFudHM6IFtcbiAgICAgIC8vIERlY2ltYWxMaXRlcmFsXG4gICAgICB7IGJlZ2luOiBgKFxcXFxiKCR7ZGVjaW1hbEludGVnZXJ9KSgoJHtmcmFjfSl8XFxcXC4pP3woJHtmcmFjfSkpYCArXG4gICAgICAgIGBbZUVdWystXT8oJHtkZWNpbWFsRGlnaXRzfSlcXFxcYmAgfSxcbiAgICAgIHsgYmVnaW46IGBcXFxcYigke2RlY2ltYWxJbnRlZ2VyfSlcXFxcYigoJHtmcmFjfSlcXFxcYnxcXFxcLik/fCgke2ZyYWN9KVxcXFxiYCB9LFxuXG4gICAgICAvLyBEZWNpbWFsQmlnSW50ZWdlckxpdGVyYWxcbiAgICAgIHsgYmVnaW46IGBcXFxcYigwfFsxLTldKF8/WzAtOV0pKiluXFxcXGJgIH0sXG5cbiAgICAgIC8vIE5vbkRlY2ltYWxJbnRlZ2VyTGl0ZXJhbFxuICAgICAgeyBiZWdpbjogXCJcXFxcYjBbeFhdWzAtOWEtZkEtRl0oXz9bMC05YS1mQS1GXSkqbj9cXFxcYlwiIH0sXG4gICAgICB7IGJlZ2luOiBcIlxcXFxiMFtiQl1bMC0xXShfP1swLTFdKSpuP1xcXFxiXCIgfSxcbiAgICAgIHsgYmVnaW46IFwiXFxcXGIwW29PXVswLTddKF8/WzAtN10pKm4/XFxcXGJcIiB9LFxuXG4gICAgICAvLyBMZWdhY3lPY3RhbEludGVnZXJMaXRlcmFsIChkb2VzIG5vdCBpbmNsdWRlIHVuZGVyc2NvcmUgc2VwYXJhdG9ycylcbiAgICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYWRkaXRpb25hbC1zeW50YXgtbnVtZXJpYy1saXRlcmFsc1xuICAgICAgeyBiZWdpbjogXCJcXFxcYjBbMC03XStuP1xcXFxiXCIgfSxcbiAgICBdLFxuICAgIHJlbGV2YW5jZTogMFxuICB9O1xuXG4gIGNvbnN0IFNVQlNUID0ge1xuICAgIGNsYXNzTmFtZTogJ3N1YnN0JyxcbiAgICBiZWdpbjogJ1xcXFwkXFxcXHsnLFxuICAgIGVuZDogJ1xcXFx9JyxcbiAgICBrZXl3b3JkczogS0VZV09SRFMkMSxcbiAgICBjb250YWluczogW10gLy8gZGVmaW5lZCBsYXRlclxuICB9O1xuICBjb25zdCBIVE1MX1RFTVBMQVRFID0ge1xuICAgIGJlZ2luOiAnaHRtbGAnLFxuICAgIGVuZDogJycsXG4gICAgc3RhcnRzOiB7XG4gICAgICBlbmQ6ICdgJyxcbiAgICAgIHJldHVybkVuZDogZmFsc2UsXG4gICAgICBjb250YWluczogW1xuICAgICAgICBobGpzLkJBQ0tTTEFTSF9FU0NBUEUsXG4gICAgICAgIFNVQlNUXG4gICAgICBdLFxuICAgICAgc3ViTGFuZ3VhZ2U6ICd4bWwnXG4gICAgfVxuICB9O1xuICBjb25zdCBDU1NfVEVNUExBVEUgPSB7XG4gICAgYmVnaW46ICdjc3NgJyxcbiAgICBlbmQ6ICcnLFxuICAgIHN0YXJ0czoge1xuICAgICAgZW5kOiAnYCcsXG4gICAgICByZXR1cm5FbmQ6IGZhbHNlLFxuICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgaGxqcy5CQUNLU0xBU0hfRVNDQVBFLFxuICAgICAgICBTVUJTVFxuICAgICAgXSxcbiAgICAgIHN1Ykxhbmd1YWdlOiAnY3NzJ1xuICAgIH1cbiAgfTtcbiAgY29uc3QgVEVNUExBVEVfU1RSSU5HID0ge1xuICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgYmVnaW46ICdgJyxcbiAgICBlbmQ6ICdgJyxcbiAgICBjb250YWluczogW1xuICAgICAgaGxqcy5CQUNLU0xBU0hfRVNDQVBFLFxuICAgICAgU1VCU1RcbiAgICBdXG4gIH07XG4gIGNvbnN0IEpTRE9DX0NPTU1FTlQgPSBobGpzLkNPTU1FTlQoXG4gICAgL1xcL1xcKlxcKig/IVxcLykvLFxuICAgICdcXFxcKi8nLFxuICAgIHtcbiAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBjbGFzc05hbWU6ICdkb2N0YWcnLFxuICAgICAgICAgIGJlZ2luOiAnQFtBLVphLXpdKycsXG4gICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY2xhc3NOYW1lOiAndHlwZScsXG4gICAgICAgICAgICAgIGJlZ2luOiAnXFxcXHsnLFxuICAgICAgICAgICAgICBlbmQ6ICdcXFxcfScsXG4gICAgICAgICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY2xhc3NOYW1lOiAndmFyaWFibGUnLFxuICAgICAgICAgICAgICBiZWdpbjogSURFTlRfUkUkMSArICcoPz1cXFxccyooLSl8JCknLFxuICAgICAgICAgICAgICBlbmRzUGFyZW50OiB0cnVlLFxuICAgICAgICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyBlYXQgc3BhY2VzIChub3QgbmV3bGluZXMpIHNvIHdlIGNhbiBmaW5kXG4gICAgICAgICAgICAvLyB0eXBlcyBvciB2YXJpYWJsZXNcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYmVnaW46IC8oPz1bXlxcbl0pXFxzLyxcbiAgICAgICAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICApO1xuICBjb25zdCBDT01NRU5UID0ge1xuICAgIGNsYXNzTmFtZTogXCJjb21tZW50XCIsXG4gICAgdmFyaWFudHM6IFtcbiAgICAgIEpTRE9DX0NPTU1FTlQsXG4gICAgICBobGpzLkNfQkxPQ0tfQ09NTUVOVF9NT0RFLFxuICAgICAgaGxqcy5DX0xJTkVfQ09NTUVOVF9NT0RFXG4gICAgXVxuICB9O1xuICBjb25zdCBTVUJTVF9JTlRFUk5BTFMgPSBbXG4gICAgaGxqcy5BUE9TX1NUUklOR19NT0RFLFxuICAgIGhsanMuUVVPVEVfU1RSSU5HX01PREUsXG4gICAgSFRNTF9URU1QTEFURSxcbiAgICBDU1NfVEVNUExBVEUsXG4gICAgVEVNUExBVEVfU1RSSU5HLFxuICAgIE5VTUJFUixcbiAgICBobGpzLlJFR0VYUF9NT0RFXG4gIF07XG4gIFNVQlNULmNvbnRhaW5zID0gU1VCU1RfSU5URVJOQUxTXG4gICAgLmNvbmNhdCh7XG4gICAgICAvLyB3ZSBuZWVkIHRvIHBhaXIgdXAge30gaW5zaWRlIG91ciBzdWJzdCB0byBwcmV2ZW50XG4gICAgICAvLyBpdCBmcm9tIGVuZGluZyB0b28gZWFybHkgYnkgbWF0Y2hpbmcgYW5vdGhlciB9XG4gICAgICBiZWdpbjogL1xcey8sXG4gICAgICBlbmQ6IC9cXH0vLFxuICAgICAga2V5d29yZHM6IEtFWVdPUkRTJDEsXG4gICAgICBjb250YWluczogW1xuICAgICAgICBcInNlbGZcIlxuICAgICAgXS5jb25jYXQoU1VCU1RfSU5URVJOQUxTKVxuICAgIH0pO1xuICBjb25zdCBTVUJTVF9BTkRfQ09NTUVOVFMgPSBbXS5jb25jYXQoQ09NTUVOVCwgU1VCU1QuY29udGFpbnMpO1xuICBjb25zdCBQQVJBTVNfQ09OVEFJTlMgPSBTVUJTVF9BTkRfQ09NTUVOVFMuY29uY2F0KFtcbiAgICAvLyBlYXQgcmVjdXJzaXZlIHBhcmVucyBpbiBzdWIgZXhwcmVzc2lvbnNcbiAgICB7XG4gICAgICBiZWdpbjogL1xcKC8sXG4gICAgICBlbmQ6IC9cXCkvLFxuICAgICAga2V5d29yZHM6IEtFWVdPUkRTJDEsXG4gICAgICBjb250YWluczogW1wic2VsZlwiXS5jb25jYXQoU1VCU1RfQU5EX0NPTU1FTlRTKVxuICAgIH1cbiAgXSk7XG4gIGNvbnN0IFBBUkFNUyA9IHtcbiAgICBjbGFzc05hbWU6ICdwYXJhbXMnLFxuICAgIGJlZ2luOiAvXFwoLyxcbiAgICBlbmQ6IC9cXCkvLFxuICAgIGV4Y2x1ZGVCZWdpbjogdHJ1ZSxcbiAgICBleGNsdWRlRW5kOiB0cnVlLFxuICAgIGtleXdvcmRzOiBLRVlXT1JEUyQxLFxuICAgIGNvbnRhaW5zOiBQQVJBTVNfQ09OVEFJTlNcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIG5hbWU6ICdKYXZhc2NyaXB0JyxcbiAgICBhbGlhc2VzOiBbJ2pzJywgJ2pzeCcsICdtanMnLCAnY2pzJ10sXG4gICAga2V5d29yZHM6IEtFWVdPUkRTJDEsXG4gICAgLy8gdGhpcyB3aWxsIGJlIGV4dGVuZGVkIGJ5IFR5cGVTY3JpcHRcbiAgICBleHBvcnRzOiB7IFBBUkFNU19DT05UQUlOUyB9LFxuICAgIGlsbGVnYWw6IC8jKD8hWyRfQS16XSkvLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBobGpzLlNIRUJBTkcoe1xuICAgICAgICBsYWJlbDogXCJzaGViYW5nXCIsXG4gICAgICAgIGJpbmFyeTogXCJub2RlXCIsXG4gICAgICAgIHJlbGV2YW5jZTogNVxuICAgICAgfSksXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcInVzZV9zdHJpY3RcIixcbiAgICAgICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgICAgIHJlbGV2YW5jZTogMTAsXG4gICAgICAgIGJlZ2luOiAvXlxccypbJ1wiXXVzZSAoc3RyaWN0fGFzbSlbJ1wiXS9cbiAgICAgIH0sXG4gICAgICBobGpzLkFQT1NfU1RSSU5HX01PREUsXG4gICAgICBobGpzLlFVT1RFX1NUUklOR19NT0RFLFxuICAgICAgSFRNTF9URU1QTEFURSxcbiAgICAgIENTU19URU1QTEFURSxcbiAgICAgIFRFTVBMQVRFX1NUUklORyxcbiAgICAgIENPTU1FTlQsXG4gICAgICBOVU1CRVIsXG4gICAgICB7IC8vIG9iamVjdCBhdHRyIGNvbnRhaW5lclxuICAgICAgICBiZWdpbjogY29uY2F0KC9beyxcXG5dXFxzKi8sXG4gICAgICAgICAgLy8gd2UgbmVlZCB0byBsb29rIGFoZWFkIHRvIG1ha2Ugc3VyZSB0aGF0IHdlIGFjdHVhbGx5IGhhdmUgYW5cbiAgICAgICAgICAvLyBhdHRyaWJ1dGUgY29taW5nIHVwIHNvIHdlIGRvbid0IHN0ZWFsIGEgY29tbWEgZnJvbSBhIHBvdGVudGlhbFxuICAgICAgICAgIC8vIFwidmFsdWVcIiBjb250YWluZXJcbiAgICAgICAgICAvL1xuICAgICAgICAgIC8vIE5PVEU6IHRoaXMgbWlnaHQgbm90IHdvcmsgaG93IHlvdSB0aGluay4gIFdlIGRvbid0IGFjdHVhbGx5IGFsd2F5c1xuICAgICAgICAgIC8vIGVudGVyIHRoaXMgbW9kZSBhbmQgc3RheS4gIEluc3RlYWQgaXQgbWlnaHQgbWVyZWx5IG1hdGNoIGAsXG4gICAgICAgICAgLy8gPGNvbW1lbnRzIHVwIG5leHQ+YCBhbmQgdGhlbiBpbW1lZGlhdGVseSBlbmQgYWZ0ZXIgdGhlICwgYmVjYXVzZSBpdFxuICAgICAgICAgIC8vIGZhaWxzIHRvIGZpbmQgYW55IGFjdHVhbCBhdHRycy4gQnV0IHRoaXMgc3RpbGwgZG9lcyB0aGUgam9iIGJlY2F1c2VcbiAgICAgICAgICAvLyBpdCBwcmV2ZW50cyB0aGUgdmFsdWUgY29udGFpbiBydWxlIGZyb20gZ3JhYmJpbmcgdGhpcyBpbnN0ZWFkIGFuZFxuICAgICAgICAgIC8vIHByZXZlbmluZyB0aGlzIHJ1bGUgZnJvbSBmaXJpbmcgd2hlbiB3ZSBhY3R1YWxseSBETyBoYXZlIGtleXMuXG4gICAgICAgICAgbG9va2FoZWFkKGNvbmNhdChcbiAgICAgICAgICAgIC8vIHdlIGFsc28gbmVlZCB0byBhbGxvdyBmb3IgbXVsdGlwbGUgcG9zc2libGUgY29tbWVudHMgaW5iZXR3ZWVuXG4gICAgICAgICAgICAvLyB0aGUgZmlyc3Qga2V5OnZhbHVlIHBhaXJpbmdcbiAgICAgICAgICAgIC8oKChcXC9cXC8uKiQpfChcXC9cXCooXFwqW14vXXxbXipdKSpcXCpcXC8pKVxccyopKi8sXG4gICAgICAgICAgICBJREVOVF9SRSQxICsgJ1xcXFxzKjonKSkpLFxuICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnYXR0cicsXG4gICAgICAgICAgICBiZWdpbjogSURFTlRfUkUkMSArIGxvb2thaGVhZCgnXFxcXHMqOicpLFxuICAgICAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgeyAvLyBcInZhbHVlXCIgY29udGFpbmVyXG4gICAgICAgIGJlZ2luOiAnKCcgKyBobGpzLlJFX1NUQVJURVJTX1JFICsgJ3xcXFxcYihjYXNlfHJldHVybnx0aHJvdylcXFxcYilcXFxccyonLFxuICAgICAgICBrZXl3b3JkczogJ3JldHVybiB0aHJvdyBjYXNlJyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICBDT01NRU5ULFxuICAgICAgICAgIGhsanMuUkVHRVhQX01PREUsXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnZnVuY3Rpb24nLFxuICAgICAgICAgICAgLy8gd2UgaGF2ZSB0byBjb3VudCB0aGUgcGFyZW5zIHRvIG1ha2Ugc3VyZSB3ZSBhY3R1YWxseSBoYXZlIHRoZVxuICAgICAgICAgICAgLy8gY29ycmVjdCBib3VuZGluZyAoICkgYmVmb3JlIHRoZSA9Pi4gIFRoZXJlIGNvdWxkIGJlIGFueSBudW1iZXIgb2ZcbiAgICAgICAgICAgIC8vIHN1Yi1leHByZXNzaW9ucyBpbnNpZGUgYWxzbyBzdXJyb3VuZGVkIGJ5IHBhcmVucy5cbiAgICAgICAgICAgIGJlZ2luOiAnKFxcXFwoJyArXG4gICAgICAgICAgICAnW14oKV0qKFxcXFwoJyArXG4gICAgICAgICAgICAnW14oKV0qKFxcXFwoJyArXG4gICAgICAgICAgICAnW14oKV0qJyArXG4gICAgICAgICAgICAnXFxcXClbXigpXSopKicgK1xuICAgICAgICAgICAgJ1xcXFwpW14oKV0qKSonICtcbiAgICAgICAgICAgICdcXFxcKXwnICsgaGxqcy5VTkRFUlNDT1JFX0lERU5UX1JFICsgJylcXFxccyo9PicsXG4gICAgICAgICAgICByZXR1cm5CZWdpbjogdHJ1ZSxcbiAgICAgICAgICAgIGVuZDogJ1xcXFxzKj0+JyxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdwYXJhbXMnLFxuICAgICAgICAgICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJlZ2luOiBobGpzLlVOREVSU0NPUkVfSURFTlRfUkUsXG4gICAgICAgICAgICAgICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBiZWdpbjogL1xcKFxccypcXCkvLFxuICAgICAgICAgICAgICAgICAgICBza2lwOiB0cnVlXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBiZWdpbjogL1xcKC8sXG4gICAgICAgICAgICAgICAgICAgIGVuZDogL1xcKS8sXG4gICAgICAgICAgICAgICAgICAgIGV4Y2x1ZGVCZWdpbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZXhjbHVkZUVuZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAga2V5d29yZHM6IEtFWVdPUkRTJDEsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5zOiBQQVJBTVNfQ09OVEFJTlNcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHsgLy8gY291bGQgYmUgYSBjb21tYSBkZWxpbWl0ZWQgbGlzdCBvZiBwYXJhbXMgdG8gYSBmdW5jdGlvbiBjYWxsXG4gICAgICAgICAgICBiZWdpbjogLywvLCByZWxldmFuY2U6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJycsXG4gICAgICAgICAgICBiZWdpbjogL1xccy8sXG4gICAgICAgICAgICBlbmQ6IC9cXHMqLyxcbiAgICAgICAgICAgIHNraXA6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHsgLy8gSlNYXG4gICAgICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgICAgICB7IGJlZ2luOiBGUkFHTUVOVC5iZWdpbiwgZW5kOiBGUkFHTUVOVC5lbmQgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJlZ2luOiBYTUxfVEFHLmJlZ2luLFxuICAgICAgICAgICAgICAgIC8vIHdlIGNhcmVmdWxseSBjaGVjayB0aGUgb3BlbmluZyB0YWcgdG8gc2VlIGlmIGl0IHRydWx5XG4gICAgICAgICAgICAgICAgLy8gaXMgYSB0YWcgYW5kIG5vdCBhIGZhbHNlIHBvc2l0aXZlXG4gICAgICAgICAgICAgICAgJ29uOmJlZ2luJzogWE1MX1RBRy5pc1RydWx5T3BlbmluZ1RhZyxcbiAgICAgICAgICAgICAgICBlbmQ6IFhNTF9UQUcuZW5kXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBzdWJMYW5ndWFnZTogJ3htbCcsXG4gICAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYmVnaW46IFhNTF9UQUcuYmVnaW4sXG4gICAgICAgICAgICAgICAgZW5kOiBYTUxfVEFHLmVuZCxcbiAgICAgICAgICAgICAgICBza2lwOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNvbnRhaW5zOiBbJ3NlbGYnXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2Z1bmN0aW9uJyxcbiAgICAgICAgYmVnaW5LZXl3b3JkczogJ2Z1bmN0aW9uJyxcbiAgICAgICAgZW5kOiAvW3s7XS8sXG4gICAgICAgIGV4Y2x1ZGVFbmQ6IHRydWUsXG4gICAgICAgIGtleXdvcmRzOiBLRVlXT1JEUyQxLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICdzZWxmJyxcbiAgICAgICAgICBobGpzLmluaGVyaXQoaGxqcy5USVRMRV9NT0RFLCB7IGJlZ2luOiBJREVOVF9SRSQxIH0pLFxuICAgICAgICAgIFBBUkFNU1xuICAgICAgICBdLFxuICAgICAgICBpbGxlZ2FsOiAvJS9cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIC8vIHByZXZlbnQgdGhpcyBmcm9tIGdldHRpbmcgc3dhbGxvd2VkIHVwIGJ5IGZ1bmN0aW9uXG4gICAgICAgIC8vIHNpbmNlIHRoZXkgYXBwZWFyIFwiZnVuY3Rpb24gbGlrZVwiXG4gICAgICAgIGJlZ2luS2V5d29yZHM6IFwid2hpbGUgaWYgc3dpdGNoIGNhdGNoIGZvclwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdmdW5jdGlvbicsXG4gICAgICAgIC8vIHdlIGhhdmUgdG8gY291bnQgdGhlIHBhcmVucyB0byBtYWtlIHN1cmUgd2UgYWN0dWFsbHkgaGF2ZSB0aGUgY29ycmVjdFxuICAgICAgICAvLyBib3VuZGluZyAoICkuICBUaGVyZSBjb3VsZCBiZSBhbnkgbnVtYmVyIG9mIHN1Yi1leHByZXNzaW9ucyBpbnNpZGVcbiAgICAgICAgLy8gYWxzbyBzdXJyb3VuZGVkIGJ5IHBhcmVucy5cbiAgICAgICAgYmVnaW46IGhsanMuVU5ERVJTQ09SRV9JREVOVF9SRSArXG4gICAgICAgICAgJ1xcXFwoJyArIC8vIGZpcnN0IHBhcmVuc1xuICAgICAgICAgICdbXigpXSooXFxcXCgnICtcbiAgICAgICAgICAgICdbXigpXSooXFxcXCgnICtcbiAgICAgICAgICAgICAgJ1teKCldKicgK1xuICAgICAgICAgICAgJ1xcXFwpW14oKV0qKSonICtcbiAgICAgICAgICAnXFxcXClbXigpXSopKicgK1xuICAgICAgICAgICdcXFxcKVxcXFxzKlxcXFx7JywgLy8gZW5kIHBhcmVuc1xuICAgICAgICByZXR1cm5CZWdpbjp0cnVlLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIFBBUkFNUyxcbiAgICAgICAgICBobGpzLmluaGVyaXQoaGxqcy5USVRMRV9NT0RFLCB7IGJlZ2luOiBJREVOVF9SRSQxIH0pLFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgLy8gaGFjazogcHJldmVudHMgZGV0ZWN0aW9uIG9mIGtleXdvcmRzIGluIHNvbWUgY2lyY3Vtc3RhbmNlc1xuICAgICAgLy8gLmtleXdvcmQoKVxuICAgICAgLy8gJGtleXdvcmQgPSB4XG4gICAgICB7XG4gICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAgeyBiZWdpbjogJ1xcXFwuJyArIElERU5UX1JFJDEgfSxcbiAgICAgICAgICB7IGJlZ2luOiAnXFxcXCQnICsgSURFTlRfUkUkMSB9XG4gICAgICAgIF0sXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIHsgLy8gRVM2IGNsYXNzXG4gICAgICAgIGNsYXNzTmFtZTogJ2NsYXNzJyxcbiAgICAgICAgYmVnaW5LZXl3b3JkczogJ2NsYXNzJyxcbiAgICAgICAgZW5kOiAvW3s7PV0vLFxuICAgICAgICBleGNsdWRlRW5kOiB0cnVlLFxuICAgICAgICBpbGxlZ2FsOiAvWzpcIltcXF1dLyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICB7IGJlZ2luS2V5d29yZHM6ICdleHRlbmRzJyB9LFxuICAgICAgICAgIGhsanMuVU5ERVJTQ09SRV9USVRMRV9NT0RFXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAvXFxiKD89Y29uc3RydWN0b3IpLyxcbiAgICAgICAgZW5kOiAvW3s7XS8sXG4gICAgICAgIGV4Y2x1ZGVFbmQ6IHRydWUsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgaGxqcy5pbmhlcml0KGhsanMuVElUTEVfTU9ERSwgeyBiZWdpbjogSURFTlRfUkUkMSB9KSxcbiAgICAgICAgICAnc2VsZicsXG4gICAgICAgICAgUEFSQU1TXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnKGdldHxzZXQpXFxcXHMrKD89JyArIElERU5UX1JFJDEgKyAnXFxcXCgpJyxcbiAgICAgICAgZW5kOiAvXFx7LyxcbiAgICAgICAga2V5d29yZHM6IFwiZ2V0IHNldFwiLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIGhsanMuaW5oZXJpdChobGpzLlRJVExFX01PREUsIHsgYmVnaW46IElERU5UX1JFJDEgfSksXG4gICAgICAgICAgeyBiZWdpbjogL1xcKFxcKS8gfSwgLy8gZWF0IHRvIGF2b2lkIGVtcHR5IHBhcmFtc1xuICAgICAgICAgIFBBUkFNU1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogL1xcJFsoLl0vIC8vIHJlbGV2YW5jZSBib29zdGVyIGZvciBhIHBhdHRlcm4gY29tbW9uIHRvIEpTIGxpYnM6IGAkKHNvbWV0aGluZylgIGFuZCBgJC5zb21ldGhpbmdgXG4gICAgICB9XG4gICAgXVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGphdmFzY3JpcHQ7XG4iXSwic291cmNlUm9vdCI6IiJ9