exports.ids = [177];
exports.modules = {

/***/ "./node_modules/highlight.js/lib/languages/typescript.js":
/*!***************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/typescript.js ***!
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

/*
Language: TypeScript
Author: Panu Horsmalahti <panu.horsmalahti@iki.fi>
Contributors: Ike Ku <dempfi@yahoo.com>
Description: TypeScript is a strict superset of JavaScript
Website: https://www.typescriptlang.org
Category: common, scripting
*/

/** @type LanguageFn */
function typescript(hljs) {
  const IDENT_RE$1 = IDENT_RE;
  const NAMESPACE = {
    beginKeywords: 'namespace', end: /\{/, excludeEnd: true
  };
  const INTERFACE = {
    beginKeywords: 'interface', end: /\{/, excludeEnd: true,
    keywords: 'interface extends'
  };
  const USE_STRICT = {
    className: 'meta',
    relevance: 10,
    begin: /^\s*['"]use strict['"]/
  };
  const TYPES = [
    "any",
    "void",
    "number",
    "boolean",
    "string",
    "object",
    "never",
    "enum"
  ];
  const TS_SPECIFIC_KEYWORDS = [
    "type",
    "namespace",
    "typedef",
    "interface",
    "public",
    "private",
    "protected",
    "implements",
    "declare",
    "abstract",
    "readonly"
  ];
  const KEYWORDS$1 = {
    $pattern: IDENT_RE,
    keyword: KEYWORDS.concat(TS_SPECIFIC_KEYWORDS),
    literal: LITERALS,
    built_in: BUILT_INS.concat(TYPES)
  };
  const DECORATOR = {
    className: 'meta',
    begin: '@' + IDENT_RE$1,
  };

  const swapMode = (mode, label, replacement) => {
    const indx = mode.contains.findIndex(m => m.label === label);
    if (indx === -1) { throw new Error("can not find mode to replace"); }
    mode.contains.splice(indx, 1, replacement);
  };

  const tsLanguage = javascript(hljs);

  // this should update anywhere keywords is used since
  // it will be the same actual JS object
  Object.assign(tsLanguage.keywords, KEYWORDS$1);

  tsLanguage.exports.PARAMS_CONTAINS.push(DECORATOR);
  tsLanguage.contains = tsLanguage.contains.concat([
    DECORATOR,
    NAMESPACE,
    INTERFACE,
  ]);

  // TS gets a simpler shebang rule than JS
  swapMode(tsLanguage, "shebang", hljs.SHEBANG());
  // JS use strict rule purposely excludes `asm` which makes no sense
  swapMode(tsLanguage, "use_strict", USE_STRICT);

  const functionDeclaration = tsLanguage.contains.find(m => m.className === "function");
  functionDeclaration.relevance = 0; // () => {} is more typical in TypeScript

  Object.assign(tsLanguage, {
    name: 'TypeScript',
    aliases: ['ts']
  });

  return tsLanguage;
}

module.exports = typescript;


/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvdHlwZXNjcmlwdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWE7QUFDYjs7QUFFQTtBQUNBLFdBQVcsaUJBQWlCO0FBQzVCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsV0FB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QUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQSx5Q0FBeUMsb0JBQW9CO0FBQzdELFdBQVcsZ0JBQWdCO0FBQzNCO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCLGlEQUFpRDtBQUN2RTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsWUFBWTs7QUFFaEQ7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBIiwiZmlsZSI6IjE3Ny5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IElERU5UX1JFID0gJ1tBLVphLXokX11bMC05QS1aYS16JF9dKic7XG5jb25zdCBLRVlXT1JEUyA9IFtcbiAgXCJhc1wiLCAvLyBmb3IgZXhwb3J0c1xuICBcImluXCIsXG4gIFwib2ZcIixcbiAgXCJpZlwiLFxuICBcImZvclwiLFxuICBcIndoaWxlXCIsXG4gIFwiZmluYWxseVwiLFxuICBcInZhclwiLFxuICBcIm5ld1wiLFxuICBcImZ1bmN0aW9uXCIsXG4gIFwiZG9cIixcbiAgXCJyZXR1cm5cIixcbiAgXCJ2b2lkXCIsXG4gIFwiZWxzZVwiLFxuICBcImJyZWFrXCIsXG4gIFwiY2F0Y2hcIixcbiAgXCJpbnN0YW5jZW9mXCIsXG4gIFwid2l0aFwiLFxuICBcInRocm93XCIsXG4gIFwiY2FzZVwiLFxuICBcImRlZmF1bHRcIixcbiAgXCJ0cnlcIixcbiAgXCJzd2l0Y2hcIixcbiAgXCJjb250aW51ZVwiLFxuICBcInR5cGVvZlwiLFxuICBcImRlbGV0ZVwiLFxuICBcImxldFwiLFxuICBcInlpZWxkXCIsXG4gIFwiY29uc3RcIixcbiAgXCJjbGFzc1wiLFxuICAvLyBKUyBoYW5kbGVzIHRoZXNlIHdpdGggYSBzcGVjaWFsIHJ1bGVcbiAgLy8gXCJnZXRcIixcbiAgLy8gXCJzZXRcIixcbiAgXCJkZWJ1Z2dlclwiLFxuICBcImFzeW5jXCIsXG4gIFwiYXdhaXRcIixcbiAgXCJzdGF0aWNcIixcbiAgXCJpbXBvcnRcIixcbiAgXCJmcm9tXCIsXG4gIFwiZXhwb3J0XCIsXG4gIFwiZXh0ZW5kc1wiXG5dO1xuY29uc3QgTElURVJBTFMgPSBbXG4gIFwidHJ1ZVwiLFxuICBcImZhbHNlXCIsXG4gIFwibnVsbFwiLFxuICBcInVuZGVmaW5lZFwiLFxuICBcIk5hTlwiLFxuICBcIkluZmluaXR5XCJcbl07XG5cbmNvbnN0IFRZUEVTID0gW1xuICBcIkludGxcIixcbiAgXCJEYXRhVmlld1wiLFxuICBcIk51bWJlclwiLFxuICBcIk1hdGhcIixcbiAgXCJEYXRlXCIsXG4gIFwiU3RyaW5nXCIsXG4gIFwiUmVnRXhwXCIsXG4gIFwiT2JqZWN0XCIsXG4gIFwiRnVuY3Rpb25cIixcbiAgXCJCb29sZWFuXCIsXG4gIFwiRXJyb3JcIixcbiAgXCJTeW1ib2xcIixcbiAgXCJTZXRcIixcbiAgXCJNYXBcIixcbiAgXCJXZWFrU2V0XCIsXG4gIFwiV2Vha01hcFwiLFxuICBcIlByb3h5XCIsXG4gIFwiUmVmbGVjdFwiLFxuICBcIkpTT05cIixcbiAgXCJQcm9taXNlXCIsXG4gIFwiRmxvYXQ2NEFycmF5XCIsXG4gIFwiSW50MTZBcnJheVwiLFxuICBcIkludDMyQXJyYXlcIixcbiAgXCJJbnQ4QXJyYXlcIixcbiAgXCJVaW50MTZBcnJheVwiLFxuICBcIlVpbnQzMkFycmF5XCIsXG4gIFwiRmxvYXQzMkFycmF5XCIsXG4gIFwiQXJyYXlcIixcbiAgXCJVaW50OEFycmF5XCIsXG4gIFwiVWludDhDbGFtcGVkQXJyYXlcIixcbiAgXCJBcnJheUJ1ZmZlclwiXG5dO1xuXG5jb25zdCBFUlJPUl9UWVBFUyA9IFtcbiAgXCJFdmFsRXJyb3JcIixcbiAgXCJJbnRlcm5hbEVycm9yXCIsXG4gIFwiUmFuZ2VFcnJvclwiLFxuICBcIlJlZmVyZW5jZUVycm9yXCIsXG4gIFwiU3ludGF4RXJyb3JcIixcbiAgXCJUeXBlRXJyb3JcIixcbiAgXCJVUklFcnJvclwiXG5dO1xuXG5jb25zdCBCVUlMVF9JTl9HTE9CQUxTID0gW1xuICBcInNldEludGVydmFsXCIsXG4gIFwic2V0VGltZW91dFwiLFxuICBcImNsZWFySW50ZXJ2YWxcIixcbiAgXCJjbGVhclRpbWVvdXRcIixcblxuICBcInJlcXVpcmVcIixcbiAgXCJleHBvcnRzXCIsXG5cbiAgXCJldmFsXCIsXG4gIFwiaXNGaW5pdGVcIixcbiAgXCJpc05hTlwiLFxuICBcInBhcnNlRmxvYXRcIixcbiAgXCJwYXJzZUludFwiLFxuICBcImRlY29kZVVSSVwiLFxuICBcImRlY29kZVVSSUNvbXBvbmVudFwiLFxuICBcImVuY29kZVVSSVwiLFxuICBcImVuY29kZVVSSUNvbXBvbmVudFwiLFxuICBcImVzY2FwZVwiLFxuICBcInVuZXNjYXBlXCJcbl07XG5cbmNvbnN0IEJVSUxUX0lOX1ZBUklBQkxFUyA9IFtcbiAgXCJhcmd1bWVudHNcIixcbiAgXCJ0aGlzXCIsXG4gIFwic3VwZXJcIixcbiAgXCJjb25zb2xlXCIsXG4gIFwid2luZG93XCIsXG4gIFwiZG9jdW1lbnRcIixcbiAgXCJsb2NhbFN0b3JhZ2VcIixcbiAgXCJtb2R1bGVcIixcbiAgXCJnbG9iYWxcIiAvLyBOb2RlLmpzXG5dO1xuXG5jb25zdCBCVUlMVF9JTlMgPSBbXS5jb25jYXQoXG4gIEJVSUxUX0lOX0dMT0JBTFMsXG4gIEJVSUxUX0lOX1ZBUklBQkxFUyxcbiAgVFlQRVMsXG4gIEVSUk9SX1RZUEVTXG4pO1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHJldHVybnMge1JlZ0V4cH1cbiAqICovXG5cbi8qKlxuICogQHBhcmFtIHtSZWdFeHAgfCBzdHJpbmcgfSByZVxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gc291cmNlKHJlKSB7XG4gIGlmICghcmUpIHJldHVybiBudWxsO1xuICBpZiAodHlwZW9mIHJlID09PSBcInN0cmluZ1wiKSByZXR1cm4gcmU7XG5cbiAgcmV0dXJuIHJlLnNvdXJjZTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge1JlZ0V4cCB8IHN0cmluZyB9IHJlXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBsb29rYWhlYWQocmUpIHtcbiAgcmV0dXJuIGNvbmNhdCgnKD89JywgcmUsICcpJyk7XG59XG5cbi8qKlxuICogQHBhcmFtIHsuLi4oUmVnRXhwIHwgc3RyaW5nKSB9IGFyZ3NcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGNvbmNhdCguLi5hcmdzKSB7XG4gIGNvbnN0IGpvaW5lZCA9IGFyZ3MubWFwKCh4KSA9PiBzb3VyY2UoeCkpLmpvaW4oXCJcIik7XG4gIHJldHVybiBqb2luZWQ7XG59XG5cbi8qXG5MYW5ndWFnZTogSmF2YVNjcmlwdFxuRGVzY3JpcHRpb246IEphdmFTY3JpcHQgKEpTKSBpcyBhIGxpZ2h0d2VpZ2h0LCBpbnRlcnByZXRlZCwgb3IganVzdC1pbi10aW1lIGNvbXBpbGVkIHByb2dyYW1taW5nIGxhbmd1YWdlIHdpdGggZmlyc3QtY2xhc3MgZnVuY3Rpb25zLlxuQ2F0ZWdvcnk6IGNvbW1vbiwgc2NyaXB0aW5nXG5XZWJzaXRlOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0XG4qL1xuXG4vKiogQHR5cGUgTGFuZ3VhZ2VGbiAqL1xuZnVuY3Rpb24gamF2YXNjcmlwdChobGpzKSB7XG4gIC8qKlxuICAgKiBUYWtlcyBhIHN0cmluZyBsaWtlIFwiPEJvb2dlclwiIGFuZCBjaGVja3MgdG8gc2VlXG4gICAqIGlmIHdlIGNhbiBmaW5kIGEgbWF0Y2hpbmcgXCI8L0Jvb2dlclwiIGxhdGVyIGluIHRoZVxuICAgKiBjb250ZW50LlxuICAgKiBAcGFyYW0ge1JlZ0V4cE1hdGNoQXJyYXl9IG1hdGNoXG4gICAqIEBwYXJhbSB7e2FmdGVyOm51bWJlcn19IHBhcmFtMVxuICAgKi9cbiAgY29uc3QgaGFzQ2xvc2luZ1RhZyA9IChtYXRjaCwgeyBhZnRlciB9KSA9PiB7XG4gICAgY29uc3QgdGFnID0gXCI8L1wiICsgbWF0Y2hbMF0uc2xpY2UoMSk7XG4gICAgY29uc3QgcG9zID0gbWF0Y2guaW5wdXQuaW5kZXhPZih0YWcsIGFmdGVyKTtcbiAgICByZXR1cm4gcG9zICE9PSAtMTtcbiAgfTtcblxuICBjb25zdCBJREVOVF9SRSQxID0gSURFTlRfUkU7XG4gIGNvbnN0IEZSQUdNRU5UID0ge1xuICAgIGJlZ2luOiAnPD4nLFxuICAgIGVuZDogJzwvPidcbiAgfTtcbiAgY29uc3QgWE1MX1RBRyA9IHtcbiAgICBiZWdpbjogLzxbQS1aYS16MC05XFxcXC5fOi1dKy8sXG4gICAgZW5kOiAvXFwvW0EtWmEtejAtOVxcXFwuXzotXSs+fFxcLz4vLFxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7UmVnRXhwTWF0Y2hBcnJheX0gbWF0Y2hcbiAgICAgKiBAcGFyYW0ge0NhbGxiYWNrUmVzcG9uc2V9IHJlc3BvbnNlXG4gICAgICovXG4gICAgaXNUcnVseU9wZW5pbmdUYWc6IChtYXRjaCwgcmVzcG9uc2UpID0+IHtcbiAgICAgIGNvbnN0IGFmdGVyTWF0Y2hJbmRleCA9IG1hdGNoWzBdLmxlbmd0aCArIG1hdGNoLmluZGV4O1xuICAgICAgY29uc3QgbmV4dENoYXIgPSBtYXRjaC5pbnB1dFthZnRlck1hdGNoSW5kZXhdO1xuICAgICAgLy8gbmVzdGVkIHR5cGU/XG4gICAgICAvLyBIVE1MIHNob3VsZCBub3QgaW5jbHVkZSBhbm90aGVyIHJhdyBgPGAgaW5zaWRlIGEgdGFnXG4gICAgICAvLyBCdXQgYSB0eXBlIG1pZ2h0OiBgPEFycmF5PEFycmF5PG51bWJlcj4+YCwgZXRjLlxuICAgICAgaWYgKG5leHRDaGFyID09PSBcIjxcIikge1xuICAgICAgICByZXNwb25zZS5pZ25vcmVNYXRjaCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyA8c29tZXRoaW5nPlxuICAgICAgLy8gVGhpcyBpcyBub3cgZWl0aGVyIGEgdGFnIG9yIGEgdHlwZS5cbiAgICAgIGlmIChuZXh0Q2hhciA9PT0gXCI+XCIpIHtcbiAgICAgICAgLy8gaWYgd2UgY2Fubm90IGZpbmQgYSBtYXRjaGluZyBjbG9zaW5nIHRhZywgdGhlbiB3ZVxuICAgICAgICAvLyB3aWxsIGlnbm9yZSBpdFxuICAgICAgICBpZiAoIWhhc0Nsb3NpbmdUYWcobWF0Y2gsIHsgYWZ0ZXI6IGFmdGVyTWF0Y2hJbmRleCB9KSkge1xuICAgICAgICAgIHJlc3BvbnNlLmlnbm9yZU1hdGNoKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIGNvbnN0IEtFWVdPUkRTJDEgPSB7XG4gICAgJHBhdHRlcm46IElERU5UX1JFLFxuICAgIGtleXdvcmQ6IEtFWVdPUkRTLFxuICAgIGxpdGVyYWw6IExJVEVSQUxTLFxuICAgIGJ1aWx0X2luOiBCVUlMVF9JTlNcbiAgfTtcblxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWxpdGVyYWxzLW51bWVyaWMtbGl0ZXJhbHNcbiAgY29uc3QgZGVjaW1hbERpZ2l0cyA9ICdbMC05XShfP1swLTldKSonO1xuICBjb25zdCBmcmFjID0gYFxcXFwuKCR7ZGVjaW1hbERpZ2l0c30pYDtcbiAgLy8gRGVjaW1hbEludGVnZXJMaXRlcmFsLCBpbmNsdWRpbmcgQW5uZXggQiBOb25PY3RhbERlY2ltYWxJbnRlZ2VyTGl0ZXJhbFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFkZGl0aW9uYWwtc3ludGF4LW51bWVyaWMtbGl0ZXJhbHNcbiAgY29uc3QgZGVjaW1hbEludGVnZXIgPSBgMHxbMS05XShfP1swLTldKSp8MFswLTddKls4OV1bMC05XSpgO1xuICBjb25zdCBOVU1CRVIgPSB7XG4gICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICB2YXJpYW50czogW1xuICAgICAgLy8gRGVjaW1hbExpdGVyYWxcbiAgICAgIHsgYmVnaW46IGAoXFxcXGIoJHtkZWNpbWFsSW50ZWdlcn0pKCgke2ZyYWN9KXxcXFxcLik/fCgke2ZyYWN9KSlgICtcbiAgICAgICAgYFtlRV1bKy1dPygke2RlY2ltYWxEaWdpdHN9KVxcXFxiYCB9LFxuICAgICAgeyBiZWdpbjogYFxcXFxiKCR7ZGVjaW1hbEludGVnZXJ9KVxcXFxiKCgke2ZyYWN9KVxcXFxifFxcXFwuKT98KCR7ZnJhY30pXFxcXGJgIH0sXG5cbiAgICAgIC8vIERlY2ltYWxCaWdJbnRlZ2VyTGl0ZXJhbFxuICAgICAgeyBiZWdpbjogYFxcXFxiKDB8WzEtOV0oXz9bMC05XSkqKW5cXFxcYmAgfSxcblxuICAgICAgLy8gTm9uRGVjaW1hbEludGVnZXJMaXRlcmFsXG4gICAgICB7IGJlZ2luOiBcIlxcXFxiMFt4WF1bMC05YS1mQS1GXShfP1swLTlhLWZBLUZdKSpuP1xcXFxiXCIgfSxcbiAgICAgIHsgYmVnaW46IFwiXFxcXGIwW2JCXVswLTFdKF8/WzAtMV0pKm4/XFxcXGJcIiB9LFxuICAgICAgeyBiZWdpbjogXCJcXFxcYjBbb09dWzAtN10oXz9bMC03XSkqbj9cXFxcYlwiIH0sXG5cbiAgICAgIC8vIExlZ2FjeU9jdGFsSW50ZWdlckxpdGVyYWwgKGRvZXMgbm90IGluY2x1ZGUgdW5kZXJzY29yZSBzZXBhcmF0b3JzKVxuICAgICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hZGRpdGlvbmFsLXN5bnRheC1udW1lcmljLWxpdGVyYWxzXG4gICAgICB7IGJlZ2luOiBcIlxcXFxiMFswLTddK24/XFxcXGJcIiB9LFxuICAgIF0sXG4gICAgcmVsZXZhbmNlOiAwXG4gIH07XG5cbiAgY29uc3QgU1VCU1QgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3Vic3QnLFxuICAgIGJlZ2luOiAnXFxcXCRcXFxceycsXG4gICAgZW5kOiAnXFxcXH0nLFxuICAgIGtleXdvcmRzOiBLRVlXT1JEUyQxLFxuICAgIGNvbnRhaW5zOiBbXSAvLyBkZWZpbmVkIGxhdGVyXG4gIH07XG4gIGNvbnN0IEhUTUxfVEVNUExBVEUgPSB7XG4gICAgYmVnaW46ICdodG1sYCcsXG4gICAgZW5kOiAnJyxcbiAgICBzdGFydHM6IHtcbiAgICAgIGVuZDogJ2AnLFxuICAgICAgcmV0dXJuRW5kOiBmYWxzZSxcbiAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgIGhsanMuQkFDS1NMQVNIX0VTQ0FQRSxcbiAgICAgICAgU1VCU1RcbiAgICAgIF0sXG4gICAgICBzdWJMYW5ndWFnZTogJ3htbCdcbiAgICB9XG4gIH07XG4gIGNvbnN0IENTU19URU1QTEFURSA9IHtcbiAgICBiZWdpbjogJ2Nzc2AnLFxuICAgIGVuZDogJycsXG4gICAgc3RhcnRzOiB7XG4gICAgICBlbmQ6ICdgJyxcbiAgICAgIHJldHVybkVuZDogZmFsc2UsXG4gICAgICBjb250YWluczogW1xuICAgICAgICBobGpzLkJBQ0tTTEFTSF9FU0NBUEUsXG4gICAgICAgIFNVQlNUXG4gICAgICBdLFxuICAgICAgc3ViTGFuZ3VhZ2U6ICdjc3MnXG4gICAgfVxuICB9O1xuICBjb25zdCBURU1QTEFURV9TVFJJTkcgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICBiZWdpbjogJ2AnLFxuICAgIGVuZDogJ2AnLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBobGpzLkJBQ0tTTEFTSF9FU0NBUEUsXG4gICAgICBTVUJTVFxuICAgIF1cbiAgfTtcbiAgY29uc3QgSlNET0NfQ09NTUVOVCA9IGhsanMuQ09NTUVOVChcbiAgICAvXFwvXFwqXFwqKD8hXFwvKS8sXG4gICAgJ1xcXFwqLycsXG4gICAge1xuICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgY29udGFpbnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGNsYXNzTmFtZTogJ2RvY3RhZycsXG4gICAgICAgICAgYmVnaW46ICdAW0EtWmEtel0rJyxcbiAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjbGFzc05hbWU6ICd0eXBlJyxcbiAgICAgICAgICAgICAgYmVnaW46ICdcXFxceycsXG4gICAgICAgICAgICAgIGVuZDogJ1xcXFx9JyxcbiAgICAgICAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjbGFzc05hbWU6ICd2YXJpYWJsZScsXG4gICAgICAgICAgICAgIGJlZ2luOiBJREVOVF9SRSQxICsgJyg/PVxcXFxzKigtKXwkKScsXG4gICAgICAgICAgICAgIGVuZHNQYXJlbnQ6IHRydWUsXG4gICAgICAgICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIGVhdCBzcGFjZXMgKG5vdCBuZXdsaW5lcykgc28gd2UgY2FuIGZpbmRcbiAgICAgICAgICAgIC8vIHR5cGVzIG9yIHZhcmlhYmxlc1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBiZWdpbjogLyg/PVteXFxuXSlcXHMvLFxuICAgICAgICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gICk7XG4gIGNvbnN0IENPTU1FTlQgPSB7XG4gICAgY2xhc3NOYW1lOiBcImNvbW1lbnRcIixcbiAgICB2YXJpYW50czogW1xuICAgICAgSlNET0NfQ09NTUVOVCxcbiAgICAgIGhsanMuQ19CTE9DS19DT01NRU5UX01PREUsXG4gICAgICBobGpzLkNfTElORV9DT01NRU5UX01PREVcbiAgICBdXG4gIH07XG4gIGNvbnN0IFNVQlNUX0lOVEVSTkFMUyA9IFtcbiAgICBobGpzLkFQT1NfU1RSSU5HX01PREUsXG4gICAgaGxqcy5RVU9URV9TVFJJTkdfTU9ERSxcbiAgICBIVE1MX1RFTVBMQVRFLFxuICAgIENTU19URU1QTEFURSxcbiAgICBURU1QTEFURV9TVFJJTkcsXG4gICAgTlVNQkVSLFxuICAgIGhsanMuUkVHRVhQX01PREVcbiAgXTtcbiAgU1VCU1QuY29udGFpbnMgPSBTVUJTVF9JTlRFUk5BTFNcbiAgICAuY29uY2F0KHtcbiAgICAgIC8vIHdlIG5lZWQgdG8gcGFpciB1cCB7fSBpbnNpZGUgb3VyIHN1YnN0IHRvIHByZXZlbnRcbiAgICAgIC8vIGl0IGZyb20gZW5kaW5nIHRvbyBlYXJseSBieSBtYXRjaGluZyBhbm90aGVyIH1cbiAgICAgIGJlZ2luOiAvXFx7LyxcbiAgICAgIGVuZDogL1xcfS8sXG4gICAgICBrZXl3b3JkczogS0VZV09SRFMkMSxcbiAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgIFwic2VsZlwiXG4gICAgICBdLmNvbmNhdChTVUJTVF9JTlRFUk5BTFMpXG4gICAgfSk7XG4gIGNvbnN0IFNVQlNUX0FORF9DT01NRU5UUyA9IFtdLmNvbmNhdChDT01NRU5ULCBTVUJTVC5jb250YWlucyk7XG4gIGNvbnN0IFBBUkFNU19DT05UQUlOUyA9IFNVQlNUX0FORF9DT01NRU5UUy5jb25jYXQoW1xuICAgIC8vIGVhdCByZWN1cnNpdmUgcGFyZW5zIGluIHN1YiBleHByZXNzaW9uc1xuICAgIHtcbiAgICAgIGJlZ2luOiAvXFwoLyxcbiAgICAgIGVuZDogL1xcKS8sXG4gICAgICBrZXl3b3JkczogS0VZV09SRFMkMSxcbiAgICAgIGNvbnRhaW5zOiBbXCJzZWxmXCJdLmNvbmNhdChTVUJTVF9BTkRfQ09NTUVOVFMpXG4gICAgfVxuICBdKTtcbiAgY29uc3QgUEFSQU1TID0ge1xuICAgIGNsYXNzTmFtZTogJ3BhcmFtcycsXG4gICAgYmVnaW46IC9cXCgvLFxuICAgIGVuZDogL1xcKS8sXG4gICAgZXhjbHVkZUJlZ2luOiB0cnVlLFxuICAgIGV4Y2x1ZGVFbmQ6IHRydWUsXG4gICAga2V5d29yZHM6IEtFWVdPUkRTJDEsXG4gICAgY29udGFpbnM6IFBBUkFNU19DT05UQUlOU1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgbmFtZTogJ0phdmFzY3JpcHQnLFxuICAgIGFsaWFzZXM6IFsnanMnLCAnanN4JywgJ21qcycsICdjanMnXSxcbiAgICBrZXl3b3JkczogS0VZV09SRFMkMSxcbiAgICAvLyB0aGlzIHdpbGwgYmUgZXh0ZW5kZWQgYnkgVHlwZVNjcmlwdFxuICAgIGV4cG9ydHM6IHsgUEFSQU1TX0NPTlRBSU5TIH0sXG4gICAgaWxsZWdhbDogLyMoPyFbJF9BLXpdKS8sXG4gICAgY29udGFpbnM6IFtcbiAgICAgIGhsanMuU0hFQkFORyh7XG4gICAgICAgIGxhYmVsOiBcInNoZWJhbmdcIixcbiAgICAgICAgYmluYXJ5OiBcIm5vZGVcIixcbiAgICAgICAgcmVsZXZhbmNlOiA1XG4gICAgICB9KSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IFwidXNlX3N0cmljdFwiLFxuICAgICAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICAgICAgcmVsZXZhbmNlOiAxMCxcbiAgICAgICAgYmVnaW46IC9eXFxzKlsnXCJddXNlIChzdHJpY3R8YXNtKVsnXCJdL1xuICAgICAgfSxcbiAgICAgIGhsanMuQVBPU19TVFJJTkdfTU9ERSxcbiAgICAgIGhsanMuUVVPVEVfU1RSSU5HX01PREUsXG4gICAgICBIVE1MX1RFTVBMQVRFLFxuICAgICAgQ1NTX1RFTVBMQVRFLFxuICAgICAgVEVNUExBVEVfU1RSSU5HLFxuICAgICAgQ09NTUVOVCxcbiAgICAgIE5VTUJFUixcbiAgICAgIHsgLy8gb2JqZWN0IGF0dHIgY29udGFpbmVyXG4gICAgICAgIGJlZ2luOiBjb25jYXQoL1t7LFxcbl1cXHMqLyxcbiAgICAgICAgICAvLyB3ZSBuZWVkIHRvIGxvb2sgYWhlYWQgdG8gbWFrZSBzdXJlIHRoYXQgd2UgYWN0dWFsbHkgaGF2ZSBhblxuICAgICAgICAgIC8vIGF0dHJpYnV0ZSBjb21pbmcgdXAgc28gd2UgZG9uJ3Qgc3RlYWwgYSBjb21tYSBmcm9tIGEgcG90ZW50aWFsXG4gICAgICAgICAgLy8gXCJ2YWx1ZVwiIGNvbnRhaW5lclxuICAgICAgICAgIC8vXG4gICAgICAgICAgLy8gTk9URTogdGhpcyBtaWdodCBub3Qgd29yayBob3cgeW91IHRoaW5rLiAgV2UgZG9uJ3QgYWN0dWFsbHkgYWx3YXlzXG4gICAgICAgICAgLy8gZW50ZXIgdGhpcyBtb2RlIGFuZCBzdGF5LiAgSW5zdGVhZCBpdCBtaWdodCBtZXJlbHkgbWF0Y2ggYCxcbiAgICAgICAgICAvLyA8Y29tbWVudHMgdXAgbmV4dD5gIGFuZCB0aGVuIGltbWVkaWF0ZWx5IGVuZCBhZnRlciB0aGUgLCBiZWNhdXNlIGl0XG4gICAgICAgICAgLy8gZmFpbHMgdG8gZmluZCBhbnkgYWN0dWFsIGF0dHJzLiBCdXQgdGhpcyBzdGlsbCBkb2VzIHRoZSBqb2IgYmVjYXVzZVxuICAgICAgICAgIC8vIGl0IHByZXZlbnRzIHRoZSB2YWx1ZSBjb250YWluIHJ1bGUgZnJvbSBncmFiYmluZyB0aGlzIGluc3RlYWQgYW5kXG4gICAgICAgICAgLy8gcHJldmVuaW5nIHRoaXMgcnVsZSBmcm9tIGZpcmluZyB3aGVuIHdlIGFjdHVhbGx5IERPIGhhdmUga2V5cy5cbiAgICAgICAgICBsb29rYWhlYWQoY29uY2F0KFxuICAgICAgICAgICAgLy8gd2UgYWxzbyBuZWVkIHRvIGFsbG93IGZvciBtdWx0aXBsZSBwb3NzaWJsZSBjb21tZW50cyBpbmJldHdlZW5cbiAgICAgICAgICAgIC8vIHRoZSBmaXJzdCBrZXk6dmFsdWUgcGFpcmluZ1xuICAgICAgICAgICAgLygoKFxcL1xcLy4qJCl8KFxcL1xcKihcXCpbXi9dfFteKl0pKlxcKlxcLykpXFxzKikqLyxcbiAgICAgICAgICAgIElERU5UX1JFJDEgKyAnXFxcXHMqOicpKSksXG4gICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdhdHRyJyxcbiAgICAgICAgICAgIGJlZ2luOiBJREVOVF9SRSQxICsgbG9va2FoZWFkKCdcXFxccyo6JyksXG4gICAgICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7IC8vIFwidmFsdWVcIiBjb250YWluZXJcbiAgICAgICAgYmVnaW46ICcoJyArIGhsanMuUkVfU1RBUlRFUlNfUkUgKyAnfFxcXFxiKGNhc2V8cmV0dXJufHRocm93KVxcXFxiKVxcXFxzKicsXG4gICAgICAgIGtleXdvcmRzOiAncmV0dXJuIHRocm93IGNhc2UnLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIENPTU1FTlQsXG4gICAgICAgICAgaGxqcy5SRUdFWFBfTU9ERSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdmdW5jdGlvbicsXG4gICAgICAgICAgICAvLyB3ZSBoYXZlIHRvIGNvdW50IHRoZSBwYXJlbnMgdG8gbWFrZSBzdXJlIHdlIGFjdHVhbGx5IGhhdmUgdGhlXG4gICAgICAgICAgICAvLyBjb3JyZWN0IGJvdW5kaW5nICggKSBiZWZvcmUgdGhlID0+LiAgVGhlcmUgY291bGQgYmUgYW55IG51bWJlciBvZlxuICAgICAgICAgICAgLy8gc3ViLWV4cHJlc3Npb25zIGluc2lkZSBhbHNvIHN1cnJvdW5kZWQgYnkgcGFyZW5zLlxuICAgICAgICAgICAgYmVnaW46ICcoXFxcXCgnICtcbiAgICAgICAgICAgICdbXigpXSooXFxcXCgnICtcbiAgICAgICAgICAgICdbXigpXSooXFxcXCgnICtcbiAgICAgICAgICAgICdbXigpXSonICtcbiAgICAgICAgICAgICdcXFxcKVteKCldKikqJyArXG4gICAgICAgICAgICAnXFxcXClbXigpXSopKicgK1xuICAgICAgICAgICAgJ1xcXFwpfCcgKyBobGpzLlVOREVSU0NPUkVfSURFTlRfUkUgKyAnKVxcXFxzKj0+JyxcbiAgICAgICAgICAgIHJldHVybkJlZ2luOiB0cnVlLFxuICAgICAgICAgICAgZW5kOiAnXFxcXHMqPT4nLFxuICAgICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ3BhcmFtcycsXG4gICAgICAgICAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYmVnaW46IGhsanMuVU5ERVJTQ09SRV9JREVOVF9SRSxcbiAgICAgICAgICAgICAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIGJlZ2luOiAvXFwoXFxzKlxcKS8sXG4gICAgICAgICAgICAgICAgICAgIHNraXA6IHRydWVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJlZ2luOiAvXFwoLyxcbiAgICAgICAgICAgICAgICAgICAgZW5kOiAvXFwpLyxcbiAgICAgICAgICAgICAgICAgICAgZXhjbHVkZUJlZ2luOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBleGNsdWRlRW5kOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBrZXl3b3JkczogS0VZV09SRFMkMSxcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbnM6IFBBUkFNU19DT05UQUlOU1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAgeyAvLyBjb3VsZCBiZSBhIGNvbW1hIGRlbGltaXRlZCBsaXN0IG9mIHBhcmFtcyB0byBhIGZ1bmN0aW9uIGNhbGxcbiAgICAgICAgICAgIGJlZ2luOiAvLC8sIHJlbGV2YW5jZTogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnJyxcbiAgICAgICAgICAgIGJlZ2luOiAvXFxzLyxcbiAgICAgICAgICAgIGVuZDogL1xccyovLFxuICAgICAgICAgICAgc2tpcDogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgeyAvLyBKU1hcbiAgICAgICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAgICAgIHsgYmVnaW46IEZSQUdNRU5ULmJlZ2luLCBlbmQ6IEZSQUdNRU5ULmVuZCB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYmVnaW46IFhNTF9UQUcuYmVnaW4sXG4gICAgICAgICAgICAgICAgLy8gd2UgY2FyZWZ1bGx5IGNoZWNrIHRoZSBvcGVuaW5nIHRhZyB0byBzZWUgaWYgaXQgdHJ1bHlcbiAgICAgICAgICAgICAgICAvLyBpcyBhIHRhZyBhbmQgbm90IGEgZmFsc2UgcG9zaXRpdmVcbiAgICAgICAgICAgICAgICAnb246YmVnaW4nOiBYTUxfVEFHLmlzVHJ1bHlPcGVuaW5nVGFnLFxuICAgICAgICAgICAgICAgIGVuZDogWE1MX1RBRy5lbmRcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHN1Ykxhbmd1YWdlOiAneG1sJyxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBiZWdpbjogWE1MX1RBRy5iZWdpbixcbiAgICAgICAgICAgICAgICBlbmQ6IFhNTF9UQUcuZW5kLFxuICAgICAgICAgICAgICAgIHNraXA6IHRydWUsXG4gICAgICAgICAgICAgICAgY29udGFpbnM6IFsnc2VsZiddXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnZnVuY3Rpb24nLFxuICAgICAgICBiZWdpbktleXdvcmRzOiAnZnVuY3Rpb24nLFxuICAgICAgICBlbmQ6IC9beztdLyxcbiAgICAgICAgZXhjbHVkZUVuZDogdHJ1ZSxcbiAgICAgICAga2V5d29yZHM6IEtFWVdPUkRTJDEsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgJ3NlbGYnLFxuICAgICAgICAgIGhsanMuaW5oZXJpdChobGpzLlRJVExFX01PREUsIHsgYmVnaW46IElERU5UX1JFJDEgfSksXG4gICAgICAgICAgUEFSQU1TXG4gICAgICAgIF0sXG4gICAgICAgIGlsbGVnYWw6IC8lL1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgLy8gcHJldmVudCB0aGlzIGZyb20gZ2V0dGluZyBzd2FsbG93ZWQgdXAgYnkgZnVuY3Rpb25cbiAgICAgICAgLy8gc2luY2UgdGhleSBhcHBlYXIgXCJmdW5jdGlvbiBsaWtlXCJcbiAgICAgICAgYmVnaW5LZXl3b3JkczogXCJ3aGlsZSBpZiBzd2l0Y2ggY2F0Y2ggZm9yXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2Z1bmN0aW9uJyxcbiAgICAgICAgLy8gd2UgaGF2ZSB0byBjb3VudCB0aGUgcGFyZW5zIHRvIG1ha2Ugc3VyZSB3ZSBhY3R1YWxseSBoYXZlIHRoZSBjb3JyZWN0XG4gICAgICAgIC8vIGJvdW5kaW5nICggKS4gIFRoZXJlIGNvdWxkIGJlIGFueSBudW1iZXIgb2Ygc3ViLWV4cHJlc3Npb25zIGluc2lkZVxuICAgICAgICAvLyBhbHNvIHN1cnJvdW5kZWQgYnkgcGFyZW5zLlxuICAgICAgICBiZWdpbjogaGxqcy5VTkRFUlNDT1JFX0lERU5UX1JFICtcbiAgICAgICAgICAnXFxcXCgnICsgLy8gZmlyc3QgcGFyZW5zXG4gICAgICAgICAgJ1teKCldKihcXFxcKCcgK1xuICAgICAgICAgICAgJ1teKCldKihcXFxcKCcgK1xuICAgICAgICAgICAgICAnW14oKV0qJyArXG4gICAgICAgICAgICAnXFxcXClbXigpXSopKicgK1xuICAgICAgICAgICdcXFxcKVteKCldKikqJyArXG4gICAgICAgICAgJ1xcXFwpXFxcXHMqXFxcXHsnLCAvLyBlbmQgcGFyZW5zXG4gICAgICAgIHJldHVybkJlZ2luOnRydWUsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgUEFSQU1TLFxuICAgICAgICAgIGhsanMuaW5oZXJpdChobGpzLlRJVExFX01PREUsIHsgYmVnaW46IElERU5UX1JFJDEgfSksXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICAvLyBoYWNrOiBwcmV2ZW50cyBkZXRlY3Rpb24gb2Yga2V5d29yZHMgaW4gc29tZSBjaXJjdW1zdGFuY2VzXG4gICAgICAvLyAua2V5d29yZCgpXG4gICAgICAvLyAka2V5d29yZCA9IHhcbiAgICAgIHtcbiAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICB7IGJlZ2luOiAnXFxcXC4nICsgSURFTlRfUkUkMSB9LFxuICAgICAgICAgIHsgYmVnaW46ICdcXFxcJCcgKyBJREVOVF9SRSQxIH1cbiAgICAgICAgXSxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuICAgICAgeyAvLyBFUzYgY2xhc3NcbiAgICAgICAgY2xhc3NOYW1lOiAnY2xhc3MnLFxuICAgICAgICBiZWdpbktleXdvcmRzOiAnY2xhc3MnLFxuICAgICAgICBlbmQ6IC9bezs9XS8sXG4gICAgICAgIGV4Y2x1ZGVFbmQ6IHRydWUsXG4gICAgICAgIGlsbGVnYWw6IC9bOlwiW1xcXV0vLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIHsgYmVnaW5LZXl3b3JkczogJ2V4dGVuZHMnIH0sXG4gICAgICAgICAgaGxqcy5VTkRFUlNDT1JFX1RJVExFX01PREVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IC9cXGIoPz1jb25zdHJ1Y3RvcikvLFxuICAgICAgICBlbmQ6IC9beztdLyxcbiAgICAgICAgZXhjbHVkZUVuZDogdHJ1ZSxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICBobGpzLmluaGVyaXQoaGxqcy5USVRMRV9NT0RFLCB7IGJlZ2luOiBJREVOVF9SRSQxIH0pLFxuICAgICAgICAgICdzZWxmJyxcbiAgICAgICAgICBQQVJBTVNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICcoZ2V0fHNldClcXFxccysoPz0nICsgSURFTlRfUkUkMSArICdcXFxcKCknLFxuICAgICAgICBlbmQ6IC9cXHsvLFxuICAgICAgICBrZXl3b3JkczogXCJnZXQgc2V0XCIsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgaGxqcy5pbmhlcml0KGhsanMuVElUTEVfTU9ERSwgeyBiZWdpbjogSURFTlRfUkUkMSB9KSxcbiAgICAgICAgICB7IGJlZ2luOiAvXFwoXFwpLyB9LCAvLyBlYXQgdG8gYXZvaWQgZW1wdHkgcGFyYW1zXG4gICAgICAgICAgUEFSQU1TXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAvXFwkWyguXS8gLy8gcmVsZXZhbmNlIGJvb3N0ZXIgZm9yIGEgcGF0dGVybiBjb21tb24gdG8gSlMgbGliczogYCQoc29tZXRoaW5nKWAgYW5kIGAkLnNvbWV0aGluZ2BcbiAgICAgIH1cbiAgICBdXG4gIH07XG59XG5cbi8qXG5MYW5ndWFnZTogVHlwZVNjcmlwdFxuQXV0aG9yOiBQYW51IEhvcnNtYWxhaHRpIDxwYW51LmhvcnNtYWxhaHRpQGlraS5maT5cbkNvbnRyaWJ1dG9yczogSWtlIEt1IDxkZW1wZmlAeWFob28uY29tPlxuRGVzY3JpcHRpb246IFR5cGVTY3JpcHQgaXMgYSBzdHJpY3Qgc3VwZXJzZXQgb2YgSmF2YVNjcmlwdFxuV2Vic2l0ZTogaHR0cHM6Ly93d3cudHlwZXNjcmlwdGxhbmcub3JnXG5DYXRlZ29yeTogY29tbW9uLCBzY3JpcHRpbmdcbiovXG5cbi8qKiBAdHlwZSBMYW5ndWFnZUZuICovXG5mdW5jdGlvbiB0eXBlc2NyaXB0KGhsanMpIHtcbiAgY29uc3QgSURFTlRfUkUkMSA9IElERU5UX1JFO1xuICBjb25zdCBOQU1FU1BBQ0UgPSB7XG4gICAgYmVnaW5LZXl3b3JkczogJ25hbWVzcGFjZScsIGVuZDogL1xcey8sIGV4Y2x1ZGVFbmQ6IHRydWVcbiAgfTtcbiAgY29uc3QgSU5URVJGQUNFID0ge1xuICAgIGJlZ2luS2V5d29yZHM6ICdpbnRlcmZhY2UnLCBlbmQ6IC9cXHsvLCBleGNsdWRlRW5kOiB0cnVlLFxuICAgIGtleXdvcmRzOiAnaW50ZXJmYWNlIGV4dGVuZHMnXG4gIH07XG4gIGNvbnN0IFVTRV9TVFJJQ1QgPSB7XG4gICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgcmVsZXZhbmNlOiAxMCxcbiAgICBiZWdpbjogL15cXHMqWydcIl11c2Ugc3RyaWN0WydcIl0vXG4gIH07XG4gIGNvbnN0IFRZUEVTID0gW1xuICAgIFwiYW55XCIsXG4gICAgXCJ2b2lkXCIsXG4gICAgXCJudW1iZXJcIixcbiAgICBcImJvb2xlYW5cIixcbiAgICBcInN0cmluZ1wiLFxuICAgIFwib2JqZWN0XCIsXG4gICAgXCJuZXZlclwiLFxuICAgIFwiZW51bVwiXG4gIF07XG4gIGNvbnN0IFRTX1NQRUNJRklDX0tFWVdPUkRTID0gW1xuICAgIFwidHlwZVwiLFxuICAgIFwibmFtZXNwYWNlXCIsXG4gICAgXCJ0eXBlZGVmXCIsXG4gICAgXCJpbnRlcmZhY2VcIixcbiAgICBcInB1YmxpY1wiLFxuICAgIFwicHJpdmF0ZVwiLFxuICAgIFwicHJvdGVjdGVkXCIsXG4gICAgXCJpbXBsZW1lbnRzXCIsXG4gICAgXCJkZWNsYXJlXCIsXG4gICAgXCJhYnN0cmFjdFwiLFxuICAgIFwicmVhZG9ubHlcIlxuICBdO1xuICBjb25zdCBLRVlXT1JEUyQxID0ge1xuICAgICRwYXR0ZXJuOiBJREVOVF9SRSxcbiAgICBrZXl3b3JkOiBLRVlXT1JEUy5jb25jYXQoVFNfU1BFQ0lGSUNfS0VZV09SRFMpLFxuICAgIGxpdGVyYWw6IExJVEVSQUxTLFxuICAgIGJ1aWx0X2luOiBCVUlMVF9JTlMuY29uY2F0KFRZUEVTKVxuICB9O1xuICBjb25zdCBERUNPUkFUT1IgPSB7XG4gICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgYmVnaW46ICdAJyArIElERU5UX1JFJDEsXG4gIH07XG5cbiAgY29uc3Qgc3dhcE1vZGUgPSAobW9kZSwgbGFiZWwsIHJlcGxhY2VtZW50KSA9PiB7XG4gICAgY29uc3QgaW5keCA9IG1vZGUuY29udGFpbnMuZmluZEluZGV4KG0gPT4gbS5sYWJlbCA9PT0gbGFiZWwpO1xuICAgIGlmIChpbmR4ID09PSAtMSkgeyB0aHJvdyBuZXcgRXJyb3IoXCJjYW4gbm90IGZpbmQgbW9kZSB0byByZXBsYWNlXCIpOyB9XG4gICAgbW9kZS5jb250YWlucy5zcGxpY2UoaW5keCwgMSwgcmVwbGFjZW1lbnQpO1xuICB9O1xuXG4gIGNvbnN0IHRzTGFuZ3VhZ2UgPSBqYXZhc2NyaXB0KGhsanMpO1xuXG4gIC8vIHRoaXMgc2hvdWxkIHVwZGF0ZSBhbnl3aGVyZSBrZXl3b3JkcyBpcyB1c2VkIHNpbmNlXG4gIC8vIGl0IHdpbGwgYmUgdGhlIHNhbWUgYWN0dWFsIEpTIG9iamVjdFxuICBPYmplY3QuYXNzaWduKHRzTGFuZ3VhZ2Uua2V5d29yZHMsIEtFWVdPUkRTJDEpO1xuXG4gIHRzTGFuZ3VhZ2UuZXhwb3J0cy5QQVJBTVNfQ09OVEFJTlMucHVzaChERUNPUkFUT1IpO1xuICB0c0xhbmd1YWdlLmNvbnRhaW5zID0gdHNMYW5ndWFnZS5jb250YWlucy5jb25jYXQoW1xuICAgIERFQ09SQVRPUixcbiAgICBOQU1FU1BBQ0UsXG4gICAgSU5URVJGQUNFLFxuICBdKTtcblxuICAvLyBUUyBnZXRzIGEgc2ltcGxlciBzaGViYW5nIHJ1bGUgdGhhbiBKU1xuICBzd2FwTW9kZSh0c0xhbmd1YWdlLCBcInNoZWJhbmdcIiwgaGxqcy5TSEVCQU5HKCkpO1xuICAvLyBKUyB1c2Ugc3RyaWN0IHJ1bGUgcHVycG9zZWx5IGV4Y2x1ZGVzIGBhc21gIHdoaWNoIG1ha2VzIG5vIHNlbnNlXG4gIHN3YXBNb2RlKHRzTGFuZ3VhZ2UsIFwidXNlX3N0cmljdFwiLCBVU0VfU1RSSUNUKTtcblxuICBjb25zdCBmdW5jdGlvbkRlY2xhcmF0aW9uID0gdHNMYW5ndWFnZS5jb250YWlucy5maW5kKG0gPT4gbS5jbGFzc05hbWUgPT09IFwiZnVuY3Rpb25cIik7XG4gIGZ1bmN0aW9uRGVjbGFyYXRpb24ucmVsZXZhbmNlID0gMDsgLy8gKCkgPT4ge30gaXMgbW9yZSB0eXBpY2FsIGluIFR5cGVTY3JpcHRcblxuICBPYmplY3QuYXNzaWduKHRzTGFuZ3VhZ2UsIHtcbiAgICBuYW1lOiAnVHlwZVNjcmlwdCcsXG4gICAgYWxpYXNlczogWyd0cyddXG4gIH0pO1xuXG4gIHJldHVybiB0c0xhbmd1YWdlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHR5cGVzY3JpcHQ7XG4iXSwic291cmNlUm9vdCI6IiJ9