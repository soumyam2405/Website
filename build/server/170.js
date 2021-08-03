exports.ids = [170];
exports.modules = {

/***/ "./node_modules/highlight.js/lib/languages/swift.js":
/*!**********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/swift.js ***!
  \**********************************************************/
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

/**
 * Any of the passed expresssions may match
 *
 * Creates a huge this | this | that | that match
 * @param {(RegExp | string)[] } args
 * @returns {string}
 */
function either(...args) {
  const joined = '(' + args.map((x) => source(x)).join("|") + ")";
  return joined;
}

const keywordWrapper = keyword => concat(
  /\b/,
  keyword,
  /\w$/.test(keyword) ? /\b/ : /\B/
);

// Keywords that require a leading dot.
const dotKeywords = [
  'Protocol', // contextual
  'Type' // contextual
].map(keywordWrapper);

// Keywords that may have a leading dot.
const optionalDotKeywords = [
  'init',
  'self'
].map(keywordWrapper);

// should register as keyword, not type
const keywordTypes = [
  'Any',
  'Self'
];

// Regular keywords and literals.
const keywords = [
  // strings below will be fed into the regular `keywords` engine while regex
  // will result in additional modes being created to scan for those keywords to
  // avoid conflicts with other rules
  'associatedtype',
  /as\?/, // operator
  /as!/, // operator
  'as', // operator
  'break',
  'case',
  'catch',
  'class',
  'continue',
  'convenience', // contextual
  'default',
  'defer',
  'deinit',
  'didSet', // contextual
  'do',
  'dynamic', // contextual
  'else',
  'enum',
  'extension',
  'fallthrough',
  /fileprivate\(set\)/,
  'fileprivate',
  'final', // contextual
  'for',
  'func',
  'get', // contextual
  'guard',
  'if',
  'import',
  'indirect', // contextual
  'infix', // contextual
  /init\?/,
  /init!/,
  'inout',
  /internal\(set\)/,
  'internal',
  'in',
  'is', // operator
  'lazy', // contextual
  'let',
  'mutating', // contextual
  'nonmutating', // contextual
  /open\(set\)/, // contextual
  'open', // contextual
  'operator',
  'optional', // contextual
  'override', // contextual
  'postfix', // contextual
  'precedencegroup',
  'prefix', // contextual
  /private\(set\)/,
  'private',
  'protocol',
  /public\(set\)/,
  'public',
  'repeat',
  'required', // contextual
  'rethrows',
  'return',
  'set', // contextual
  'some', // contextual
  'static',
  'struct',
  'subscript',
  'super',
  'switch',
  'throws',
  'throw',
  /try\?/, // operator
  /try!/, // operator
  'try', // operator
  'typealias',
  /unowned\(safe\)/, // contextual
  /unowned\(unsafe\)/, // contextual
  'unowned', // contextual
  'var',
  'weak', // contextual
  'where',
  'while',
  'willSet' // contextual
];

// NOTE: Contextual keywords are reserved only in specific contexts.
// Ideally, these should be matched using modes to avoid false positives.

// Literals.
const literals = [
  'false',
  'nil',
  'true'
];

// Keywords used in precedence groups.
const precedencegroupKeywords = [
  'assignment',
  'associativity',
  'higherThan',
  'left',
  'lowerThan',
  'none',
  'right'
];

// Keywords that start with a number sign (#).
// #available is handled separately.
const numberSignKeywords = [
  '#colorLiteral',
  '#column',
  '#dsohandle',
  '#else',
  '#elseif',
  '#endif',
  '#error',
  '#file',
  '#fileID',
  '#fileLiteral',
  '#filePath',
  '#function',
  '#if',
  '#imageLiteral',
  '#keyPath',
  '#line',
  '#selector',
  '#sourceLocation',
  '#warn_unqualified_access',
  '#warning'
];

// Global functions in the Standard Library.
const builtIns = [
  'abs',
  'all',
  'any',
  'assert',
  'assertionFailure',
  'debugPrint',
  'dump',
  'fatalError',
  'getVaList',
  'isKnownUniquelyReferenced',
  'max',
  'min',
  'numericCast',
  'pointwiseMax',
  'pointwiseMin',
  'precondition',
  'preconditionFailure',
  'print',
  'readLine',
  'repeatElement',
  'sequence',
  'stride',
  'swap',
  'swift_unboxFromSwiftValueWithType',
  'transcode',
  'type',
  'unsafeBitCast',
  'unsafeDowncast',
  'withExtendedLifetime',
  'withUnsafeMutablePointer',
  'withUnsafePointer',
  'withVaList',
  'withoutActuallyEscaping',
  'zip'
];

// Valid first characters for operators.
const operatorHead = either(
  /[/=\-+!*%<>&|^~?]/,
  /[\u00A1-\u00A7]/,
  /[\u00A9\u00AB]/,
  /[\u00AC\u00AE]/,
  /[\u00B0\u00B1]/,
  /[\u00B6\u00BB\u00BF\u00D7\u00F7]/,
  /[\u2016-\u2017]/,
  /[\u2020-\u2027]/,
  /[\u2030-\u203E]/,
  /[\u2041-\u2053]/,
  /[\u2055-\u205E]/,
  /[\u2190-\u23FF]/,
  /[\u2500-\u2775]/,
  /[\u2794-\u2BFF]/,
  /[\u2E00-\u2E7F]/,
  /[\u3001-\u3003]/,
  /[\u3008-\u3020]/,
  /[\u3030]/
);

// Valid characters for operators.
const operatorCharacter = either(
  operatorHead,
  /[\u0300-\u036F]/,
  /[\u1DC0-\u1DFF]/,
  /[\u20D0-\u20FF]/,
  /[\uFE00-\uFE0F]/,
  /[\uFE20-\uFE2F]/
  // TODO: The following characters are also allowed, but the regex isn't supported yet.
  // /[\u{E0100}-\u{E01EF}]/u
);

// Valid operator.
const operator = concat(operatorHead, operatorCharacter, '*');

// Valid first characters for identifiers.
const identifierHead = either(
  /[a-zA-Z_]/,
  /[\u00A8\u00AA\u00AD\u00AF\u00B2-\u00B5\u00B7-\u00BA]/,
  /[\u00BC-\u00BE\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]/,
  /[\u0100-\u02FF\u0370-\u167F\u1681-\u180D\u180F-\u1DBF]/,
  /[\u1E00-\u1FFF]/,
  /[\u200B-\u200D\u202A-\u202E\u203F-\u2040\u2054\u2060-\u206F]/,
  /[\u2070-\u20CF\u2100-\u218F\u2460-\u24FF\u2776-\u2793]/,
  /[\u2C00-\u2DFF\u2E80-\u2FFF]/,
  /[\u3004-\u3007\u3021-\u302F\u3031-\u303F\u3040-\uD7FF]/,
  /[\uF900-\uFD3D\uFD40-\uFDCF\uFDF0-\uFE1F\uFE30-\uFE44]/,
  /[\uFE47-\uFEFE\uFF00-\uFFFD]/ // Should be /[\uFE47-\uFFFD]/, but we have to exclude FEFF.
  // The following characters are also allowed, but the regexes aren't supported yet.
  // /[\u{10000}-\u{1FFFD}\u{20000-\u{2FFFD}\u{30000}-\u{3FFFD}\u{40000}-\u{4FFFD}]/u,
  // /[\u{50000}-\u{5FFFD}\u{60000-\u{6FFFD}\u{70000}-\u{7FFFD}\u{80000}-\u{8FFFD}]/u,
  // /[\u{90000}-\u{9FFFD}\u{A0000-\u{AFFFD}\u{B0000}-\u{BFFFD}\u{C0000}-\u{CFFFD}]/u,
  // /[\u{D0000}-\u{DFFFD}\u{E0000-\u{EFFFD}]/u
);

// Valid characters for identifiers.
const identifierCharacter = either(
  identifierHead,
  /\d/,
  /[\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]/
);

// Valid identifier.
const identifier = concat(identifierHead, identifierCharacter, '*');

// Valid type identifier.
const typeIdentifier = concat(/[A-Z]/, identifierCharacter, '*');

// Built-in attributes, which are highlighted as keywords.
// @available is handled separately.
const keywordAttributes = [
  'autoclosure',
  concat(/convention\(/, either('swift', 'block', 'c'), /\)/),
  'discardableResult',
  'dynamicCallable',
  'dynamicMemberLookup',
  'escaping',
  'frozen',
  'GKInspectable',
  'IBAction',
  'IBDesignable',
  'IBInspectable',
  'IBOutlet',
  'IBSegueAction',
  'inlinable',
  'main',
  'nonobjc',
  'NSApplicationMain',
  'NSCopying',
  'NSManaged',
  concat(/objc\(/, identifier, /\)/),
  'objc',
  'objcMembers',
  'propertyWrapper',
  'requires_stored_property_inits',
  'testable',
  'UIApplicationMain',
  'unknown',
  'usableFromInline'
];

// Contextual keywords used in @available and #available.
const availabilityKeywords = [
  'iOS',
  'iOSApplicationExtension',
  'macOS',
  'macOSApplicationExtension',
  'macCatalyst',
  'macCatalystApplicationExtension',
  'watchOS',
  'watchOSApplicationExtension',
  'tvOS',
  'tvOSApplicationExtension',
  'swift'
];

/*
Language: Swift
Description: Swift is a general-purpose programming language built using a modern approach to safety, performance, and software design patterns.
Author: Steven Van Impe <steven.vanimpe@icloud.com>
Contributors: Chris Eidhof <chris@eidhof.nl>, Nate Cook <natecook@gmail.com>, Alexander Lichter <manniL@gmx.net>, Richard Gibson <gibson042@github>
Website: https://swift.org
Category: common, system
*/

/** @type LanguageFn */
function swift(hljs) {
  const WHITESPACE = {
    match: /\s+/,
    relevance: 0
  };
  // https://docs.swift.org/swift-book/ReferenceManual/LexicalStructure.html#ID411
  const BLOCK_COMMENT = hljs.COMMENT(
    '/\\*',
    '\\*/',
    {
      contains: [ 'self' ]
    }
  );
  const COMMENTS = [
    hljs.C_LINE_COMMENT_MODE,
    BLOCK_COMMENT
  ];

  // https://docs.swift.org/swift-book/ReferenceManual/LexicalStructure.html#ID413
  // https://docs.swift.org/swift-book/ReferenceManual/zzSummaryOfTheGrammar.html
  const DOT_KEYWORD = {
    className: 'keyword',
    begin: concat(/\./, lookahead(either(...dotKeywords, ...optionalDotKeywords))),
    end: either(...dotKeywords, ...optionalDotKeywords),
    excludeBegin: true
  };
  const KEYWORD_GUARD = {
    // Consume .keyword to prevent highlighting properties and methods as keywords.
    match: concat(/\./, either(...keywords)),
    relevance: 0
  };
  const PLAIN_KEYWORDS = keywords
    .filter(kw => typeof kw === 'string')
    .concat([ "_|0" ]); // seems common, so 0 relevance
  const REGEX_KEYWORDS = keywords
    .filter(kw => typeof kw !== 'string') // find regex
    .concat(keywordTypes)
    .map(keywordWrapper);
  const KEYWORD = {
    variants: [
      {
        className: 'keyword',
        match: either(...REGEX_KEYWORDS, ...optionalDotKeywords)
      }
    ]
  };
  // find all the regular keywords
  const KEYWORDS = {
    $pattern: either(
      /\b\w+/, // regular keywords
      /#\w+/ // number keywords
    ),
    keyword: PLAIN_KEYWORDS
      .concat(numberSignKeywords),
    literal: literals
  };
  const KEYWORD_MODES = [
    DOT_KEYWORD,
    KEYWORD_GUARD,
    KEYWORD
  ];

  // https://github.com/apple/swift/tree/main/stdlib/public/core
  const BUILT_IN_GUARD = {
    // Consume .built_in to prevent highlighting properties and methods.
    match: concat(/\./, either(...builtIns)),
    relevance: 0
  };
  const BUILT_IN = {
    className: 'built_in',
    match: concat(/\b/, either(...builtIns), /(?=\()/)
  };
  const BUILT_INS = [
    BUILT_IN_GUARD,
    BUILT_IN
  ];

  // https://docs.swift.org/swift-book/ReferenceManual/LexicalStructure.html#ID418
  const OPERATOR_GUARD = {
    // Prevent -> from being highlighting as an operator.
    match: /->/,
    relevance: 0
  };
  const OPERATOR = {
    className: 'operator',
    relevance: 0,
    variants: [
      {
        match: operator
      },
      {
        // dot-operator: only operators that start with a dot are allowed to use dots as
        // characters (..., ...<, .*, etc). So there rule here is: a dot followed by one or more
        // characters that may also include dots.
        match: `\\.(\\.|${operatorCharacter})+`
      }
    ]
  };
  const OPERATORS = [
    OPERATOR_GUARD,
    OPERATOR
  ];

  // https://docs.swift.org/swift-book/ReferenceManual/LexicalStructure.html#grammar_numeric-literal
  // TODO: Update for leading `-` after lookbehind is supported everywhere
  const decimalDigits = '([0-9]_*)+';
  const hexDigits = '([0-9a-fA-F]_*)+';
  const NUMBER = {
    className: 'number',
    relevance: 0,
    variants: [
      // decimal floating-point-literal (subsumes decimal-literal)
      {
        match: `\\b(${decimalDigits})(\\.(${decimalDigits}))?` + `([eE][+-]?(${decimalDigits}))?\\b`
      },
      // hexadecimal floating-point-literal (subsumes hexadecimal-literal)
      {
        match: `\\b0x(${hexDigits})(\\.(${hexDigits}))?` + `([pP][+-]?(${decimalDigits}))?\\b`
      },
      // octal-literal
      {
        match: /\b0o([0-7]_*)+\b/
      },
      // binary-literal
      {
        match: /\b0b([01]_*)+\b/
      }
    ]
  };

  // https://docs.swift.org/swift-book/ReferenceManual/LexicalStructure.html#grammar_string-literal
  const ESCAPED_CHARACTER = (rawDelimiter = "") => ({
    className: 'subst',
    variants: [
      {
        match: concat(/\\/, rawDelimiter, /[0\\tnr"']/)
      },
      {
        match: concat(/\\/, rawDelimiter, /u\{[0-9a-fA-F]{1,8}\}/)
      }
    ]
  });
  const ESCAPED_NEWLINE = (rawDelimiter = "") => ({
    className: 'subst',
    match: concat(/\\/, rawDelimiter, /[\t ]*(?:[\r\n]|\r\n)/)
  });
  const INTERPOLATION = (rawDelimiter = "") => ({
    className: 'subst',
    label: "interpol",
    begin: concat(/\\/, rawDelimiter, /\(/),
    end: /\)/
  });
  const MULTILINE_STRING = (rawDelimiter = "") => ({
    begin: concat(rawDelimiter, /"""/),
    end: concat(/"""/, rawDelimiter),
    contains: [
      ESCAPED_CHARACTER(rawDelimiter),
      ESCAPED_NEWLINE(rawDelimiter),
      INTERPOLATION(rawDelimiter)
    ]
  });
  const SINGLE_LINE_STRING = (rawDelimiter = "") => ({
    begin: concat(rawDelimiter, /"/),
    end: concat(/"/, rawDelimiter),
    contains: [
      ESCAPED_CHARACTER(rawDelimiter),
      INTERPOLATION(rawDelimiter)
    ]
  });
  const STRING = {
    className: 'string',
    variants: [
      MULTILINE_STRING(),
      MULTILINE_STRING("#"),
      MULTILINE_STRING("##"),
      MULTILINE_STRING("###"),
      SINGLE_LINE_STRING(),
      SINGLE_LINE_STRING("#"),
      SINGLE_LINE_STRING("##"),
      SINGLE_LINE_STRING("###")
    ]
  };

  // https://docs.swift.org/swift-book/ReferenceManual/LexicalStructure.html#ID412
  const QUOTED_IDENTIFIER = {
    match: concat(/`/, identifier, /`/)
  };
  const IMPLICIT_PARAMETER = {
    className: 'variable',
    match: /\$\d+/
  };
  const PROPERTY_WRAPPER_PROJECTION = {
    className: 'variable',
    match: `\\$${identifierCharacter}+`
  };
  const IDENTIFIERS = [
    QUOTED_IDENTIFIER,
    IMPLICIT_PARAMETER,
    PROPERTY_WRAPPER_PROJECTION
  ];

  // https://docs.swift.org/swift-book/ReferenceManual/Attributes.html
  const AVAILABLE_ATTRIBUTE = {
    match: /(@|#)available/,
    className: "keyword",
    starts: {
      contains: [
        {
          begin: /\(/,
          end: /\)/,
          keywords: availabilityKeywords,
          contains: [
            ...OPERATORS,
            NUMBER,
            STRING
          ]
        }
      ]
    }
  };
  const KEYWORD_ATTRIBUTE = {
    className: 'keyword',
    match: concat(/@/, either(...keywordAttributes))
  };
  const USER_DEFINED_ATTRIBUTE = {
    className: 'meta',
    match: concat(/@/, identifier)
  };
  const ATTRIBUTES = [
    AVAILABLE_ATTRIBUTE,
    KEYWORD_ATTRIBUTE,
    USER_DEFINED_ATTRIBUTE
  ];

  // https://docs.swift.org/swift-book/ReferenceManual/Types.html
  const TYPE = {
    match: lookahead(/\b[A-Z]/),
    relevance: 0,
    contains: [
      { // Common Apple frameworks, for relevance boost
        className: 'type',
        match: concat(/(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)/, identifierCharacter, '+')
      },
      { // Type identifier
        className: 'type',
        match: typeIdentifier,
        relevance: 0
      },
      { // Optional type
        match: /[?!]+/,
        relevance: 0
      },
      { // Variadic parameter
        match: /\.\.\./,
        relevance: 0
      },
      { // Protocol composition
        match: concat(/\s+&\s+/, lookahead(typeIdentifier)),
        relevance: 0
      }
    ]
  };
  const GENERIC_ARGUMENTS = {
    begin: /</,
    end: />/,
    keywords: KEYWORDS,
    contains: [
      ...COMMENTS,
      ...KEYWORD_MODES,
      ...ATTRIBUTES,
      OPERATOR_GUARD,
      TYPE
    ]
  };
  TYPE.contains.push(GENERIC_ARGUMENTS);

  // https://docs.swift.org/swift-book/ReferenceManual/Expressions.html#ID552
  // Prevents element names from being highlighted as keywords.
  const TUPLE_ELEMENT_NAME = {
    match: concat(identifier, /\s*:/),
    keywords: "_|0",
    relevance: 0
  };
  // Matches tuples as well as the parameter list of a function type.
  const TUPLE = {
    begin: /\(/,
    end: /\)/,
    relevance: 0,
    keywords: KEYWORDS,
    contains: [
      'self',
      TUPLE_ELEMENT_NAME,
      ...COMMENTS,
      ...KEYWORD_MODES,
      ...BUILT_INS,
      ...OPERATORS,
      NUMBER,
      STRING,
      ...IDENTIFIERS,
      ...ATTRIBUTES,
      TYPE
    ]
  };

  // https://docs.swift.org/swift-book/ReferenceManual/Declarations.html#ID362
  // Matches both the keyword func and the function title.
  // Grouping these lets us differentiate between the operator function <
  // and the start of the generic parameter clause (also <).
  const FUNC_PLUS_TITLE = {
    beginKeywords: 'func',
    contains: [
      {
        className: 'title',
        match: either(QUOTED_IDENTIFIER.match, identifier, operator),
        // Required to make sure the opening < of the generic parameter clause
        // isn't parsed as a second title.
        endsParent: true,
        relevance: 0
      },
      WHITESPACE
    ]
  };
  const GENERIC_PARAMETERS = {
    begin: /</,
    end: />/,
    contains: [
      ...COMMENTS,
      TYPE
    ]
  };
  const FUNCTION_PARAMETER_NAME = {
    begin: either(
      lookahead(concat(identifier, /\s*:/)),
      lookahead(concat(identifier, /\s+/, identifier, /\s*:/))
    ),
    end: /:/,
    relevance: 0,
    contains: [
      {
        className: 'keyword',
        match: /\b_\b/
      },
      {
        className: 'params',
        match: identifier
      }
    ]
  };
  const FUNCTION_PARAMETERS = {
    begin: /\(/,
    end: /\)/,
    keywords: KEYWORDS,
    contains: [
      FUNCTION_PARAMETER_NAME,
      ...COMMENTS,
      ...KEYWORD_MODES,
      ...OPERATORS,
      NUMBER,
      STRING,
      ...ATTRIBUTES,
      TYPE,
      TUPLE
    ],
    endsParent: true,
    illegal: /["']/
  };
  const FUNCTION = {
    className: 'function',
    match: lookahead(/\bfunc\b/),
    contains: [
      FUNC_PLUS_TITLE,
      GENERIC_PARAMETERS,
      FUNCTION_PARAMETERS,
      WHITESPACE
    ],
    illegal: [
      /\[/,
      /%/
    ]
  };

  // https://docs.swift.org/swift-book/ReferenceManual/Declarations.html#ID375
  // https://docs.swift.org/swift-book/ReferenceManual/Declarations.html#ID379
  const INIT_SUBSCRIPT = {
    className: 'function',
    match: /\b(subscript|init[?!]?)\s*(?=[<(])/,
    keywords: {
      keyword: "subscript init init? init!",
      $pattern: /\w+[?!]?/
    },
    contains: [
      GENERIC_PARAMETERS,
      FUNCTION_PARAMETERS,
      WHITESPACE
    ],
    illegal: /\[|%/
  };
  // https://docs.swift.org/swift-book/ReferenceManual/Declarations.html#ID380
  const OPERATOR_DECLARATION = {
    beginKeywords: 'operator',
    end: hljs.MATCH_NOTHING_RE,
    contains: [
      {
        className: 'title',
        match: operator,
        endsParent: true,
        relevance: 0
      }
    ]
  };

  // https://docs.swift.org/swift-book/ReferenceManual/Declarations.html#ID550
  const PRECEDENCEGROUP = {
    beginKeywords: 'precedencegroup',
    end: hljs.MATCH_NOTHING_RE,
    contains: [
      {
        className: 'title',
        match: typeIdentifier,
        relevance: 0
      },
      {
        begin: /{/,
        end: /}/,
        relevance: 0,
        endsParent: true,
        keywords: [
          ...precedencegroupKeywords,
          ...literals
        ],
        contains: [ TYPE ]
      }
    ]
  };

  // Add supported submodes to string interpolation.
  for (const variant of STRING.variants) {
    const interpolation = variant.contains.find(mode => mode.label === "interpol");
    // TODO: Interpolation can contain any expression, so there's room for improvement here.
    interpolation.keywords = KEYWORDS;
    const submodes = [
      ...KEYWORD_MODES,
      ...BUILT_INS,
      ...OPERATORS,
      NUMBER,
      STRING,
      ...IDENTIFIERS
    ];
    interpolation.contains = [
      ...submodes,
      {
        begin: /\(/,
        end: /\)/,
        contains: [
          'self',
          ...submodes
        ]
      }
    ];
  }

  return {
    name: 'Swift',
    keywords: KEYWORDS,
    contains: [
      ...COMMENTS,
      FUNCTION,
      INIT_SUBSCRIPT,
      {
        className: 'class',
        beginKeywords: 'struct protocol class extension enum',
        end: '\\{',
        excludeEnd: true,
        keywords: KEYWORDS,
        contains: [
          hljs.inherit(hljs.TITLE_MODE, {
            begin: /[A-Za-z$_][\u00C0-\u02B80-9A-Za-z$_]*/
          }),
          ...KEYWORD_MODES
        ]
      },
      OPERATOR_DECLARATION,
      PRECEDENCEGROUP,
      {
        beginKeywords: 'import',
        end: /$/,
        contains: [ ...COMMENTS ],
        relevance: 0
      },
      ...KEYWORD_MODES,
      ...BUILT_INS,
      ...OPERATORS,
      NUMBER,
      STRING,
      ...IDENTIFIERS,
      ...ATTRIBUTES,
      TYPE,
      TUPLE
    ]
  };
}

module.exports = swift;


/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvc3dpZnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWE7QUFDYjs7QUFFQTtBQUNBLFdBQVcsaUJBQWlCO0FBQzVCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyxpQkFBaUI7QUFDNUIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyxzQkFBc0I7QUFDakMsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHFCQUFxQjtBQUNoQyxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLE1BQU0sSUFBSSxNQUFNO0FBQzFCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsTUFBTSxJQUFJLE1BQU0sR0FBRyxTQUFTLE1BQU0sR0FBRyxNQUFNLElBQUksTUFBTSxHQUFHLE1BQU0sSUFBSSxNQUFNO0FBQ2xGLFVBQVUsTUFBTSxJQUFJLE1BQU0sR0FBRyxTQUFTLE1BQU0sR0FBRyxNQUFNLElBQUksTUFBTSxHQUFHLE1BQU0sSUFBSSxNQUFNO0FBQ2xGLFVBQVUsTUFBTSxJQUFJLE1BQU0sR0FBRyxTQUFTLE1BQU0sR0FBRyxNQUFNLElBQUksTUFBTSxHQUFHLE1BQU0sSUFBSSxNQUFNO0FBQ2xGLFVBQVUsTUFBTSxJQUFJLE1BQU0sR0FBRyxTQUFTLE1BQU07QUFDNUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixrQkFBa0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsY0FBYyxRQUFRLGNBQWMscUJBQXFCLGNBQWM7QUFDN0YsT0FBTztBQUNQO0FBQ0E7QUFDQSx3QkFBd0IsVUFBVSxRQUFRLFVBQVUscUJBQXFCLGNBQWM7QUFDdkYsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsOENBQThDLFlBQVksSUFBSSxFQUFFO0FBQ2hFO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixvQkFBb0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxpQkFBaUI7QUFDakIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiMTcwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm5zIHtSZWdFeHB9XG4gKiAqL1xuXG4vKipcbiAqIEBwYXJhbSB7UmVnRXhwIHwgc3RyaW5nIH0gcmVcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIHNvdXJjZShyZSkge1xuICBpZiAoIXJlKSByZXR1cm4gbnVsbDtcbiAgaWYgKHR5cGVvZiByZSA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIHJlO1xuXG4gIHJldHVybiByZS5zb3VyY2U7XG59XG5cbi8qKlxuICogQHBhcmFtIHtSZWdFeHAgfCBzdHJpbmcgfSByZVxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gbG9va2FoZWFkKHJlKSB7XG4gIHJldHVybiBjb25jYXQoJyg/PScsIHJlLCAnKScpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7Li4uKFJlZ0V4cCB8IHN0cmluZykgfSBhcmdzXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBjb25jYXQoLi4uYXJncykge1xuICBjb25zdCBqb2luZWQgPSBhcmdzLm1hcCgoeCkgPT4gc291cmNlKHgpKS5qb2luKFwiXCIpO1xuICByZXR1cm4gam9pbmVkO1xufVxuXG4vKipcbiAqIEFueSBvZiB0aGUgcGFzc2VkIGV4cHJlc3NzaW9ucyBtYXkgbWF0Y2hcbiAqXG4gKiBDcmVhdGVzIGEgaHVnZSB0aGlzIHwgdGhpcyB8IHRoYXQgfCB0aGF0IG1hdGNoXG4gKiBAcGFyYW0geyhSZWdFeHAgfCBzdHJpbmcpW10gfSBhcmdzXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBlaXRoZXIoLi4uYXJncykge1xuICBjb25zdCBqb2luZWQgPSAnKCcgKyBhcmdzLm1hcCgoeCkgPT4gc291cmNlKHgpKS5qb2luKFwifFwiKSArIFwiKVwiO1xuICByZXR1cm4gam9pbmVkO1xufVxuXG5jb25zdCBrZXl3b3JkV3JhcHBlciA9IGtleXdvcmQgPT4gY29uY2F0KFxuICAvXFxiLyxcbiAga2V5d29yZCxcbiAgL1xcdyQvLnRlc3Qoa2V5d29yZCkgPyAvXFxiLyA6IC9cXEIvXG4pO1xuXG4vLyBLZXl3b3JkcyB0aGF0IHJlcXVpcmUgYSBsZWFkaW5nIGRvdC5cbmNvbnN0IGRvdEtleXdvcmRzID0gW1xuICAnUHJvdG9jb2wnLCAvLyBjb250ZXh0dWFsXG4gICdUeXBlJyAvLyBjb250ZXh0dWFsXG5dLm1hcChrZXl3b3JkV3JhcHBlcik7XG5cbi8vIEtleXdvcmRzIHRoYXQgbWF5IGhhdmUgYSBsZWFkaW5nIGRvdC5cbmNvbnN0IG9wdGlvbmFsRG90S2V5d29yZHMgPSBbXG4gICdpbml0JyxcbiAgJ3NlbGYnXG5dLm1hcChrZXl3b3JkV3JhcHBlcik7XG5cbi8vIHNob3VsZCByZWdpc3RlciBhcyBrZXl3b3JkLCBub3QgdHlwZVxuY29uc3Qga2V5d29yZFR5cGVzID0gW1xuICAnQW55JyxcbiAgJ1NlbGYnXG5dO1xuXG4vLyBSZWd1bGFyIGtleXdvcmRzIGFuZCBsaXRlcmFscy5cbmNvbnN0IGtleXdvcmRzID0gW1xuICAvLyBzdHJpbmdzIGJlbG93IHdpbGwgYmUgZmVkIGludG8gdGhlIHJlZ3VsYXIgYGtleXdvcmRzYCBlbmdpbmUgd2hpbGUgcmVnZXhcbiAgLy8gd2lsbCByZXN1bHQgaW4gYWRkaXRpb25hbCBtb2RlcyBiZWluZyBjcmVhdGVkIHRvIHNjYW4gZm9yIHRob3NlIGtleXdvcmRzIHRvXG4gIC8vIGF2b2lkIGNvbmZsaWN0cyB3aXRoIG90aGVyIHJ1bGVzXG4gICdhc3NvY2lhdGVkdHlwZScsXG4gIC9hc1xcPy8sIC8vIG9wZXJhdG9yXG4gIC9hcyEvLCAvLyBvcGVyYXRvclxuICAnYXMnLCAvLyBvcGVyYXRvclxuICAnYnJlYWsnLFxuICAnY2FzZScsXG4gICdjYXRjaCcsXG4gICdjbGFzcycsXG4gICdjb250aW51ZScsXG4gICdjb252ZW5pZW5jZScsIC8vIGNvbnRleHR1YWxcbiAgJ2RlZmF1bHQnLFxuICAnZGVmZXInLFxuICAnZGVpbml0JyxcbiAgJ2RpZFNldCcsIC8vIGNvbnRleHR1YWxcbiAgJ2RvJyxcbiAgJ2R5bmFtaWMnLCAvLyBjb250ZXh0dWFsXG4gICdlbHNlJyxcbiAgJ2VudW0nLFxuICAnZXh0ZW5zaW9uJyxcbiAgJ2ZhbGx0aHJvdWdoJyxcbiAgL2ZpbGVwcml2YXRlXFwoc2V0XFwpLyxcbiAgJ2ZpbGVwcml2YXRlJyxcbiAgJ2ZpbmFsJywgLy8gY29udGV4dHVhbFxuICAnZm9yJyxcbiAgJ2Z1bmMnLFxuICAnZ2V0JywgLy8gY29udGV4dHVhbFxuICAnZ3VhcmQnLFxuICAnaWYnLFxuICAnaW1wb3J0JyxcbiAgJ2luZGlyZWN0JywgLy8gY29udGV4dHVhbFxuICAnaW5maXgnLCAvLyBjb250ZXh0dWFsXG4gIC9pbml0XFw/LyxcbiAgL2luaXQhLyxcbiAgJ2lub3V0JyxcbiAgL2ludGVybmFsXFwoc2V0XFwpLyxcbiAgJ2ludGVybmFsJyxcbiAgJ2luJyxcbiAgJ2lzJywgLy8gb3BlcmF0b3JcbiAgJ2xhenknLCAvLyBjb250ZXh0dWFsXG4gICdsZXQnLFxuICAnbXV0YXRpbmcnLCAvLyBjb250ZXh0dWFsXG4gICdub25tdXRhdGluZycsIC8vIGNvbnRleHR1YWxcbiAgL29wZW5cXChzZXRcXCkvLCAvLyBjb250ZXh0dWFsXG4gICdvcGVuJywgLy8gY29udGV4dHVhbFxuICAnb3BlcmF0b3InLFxuICAnb3B0aW9uYWwnLCAvLyBjb250ZXh0dWFsXG4gICdvdmVycmlkZScsIC8vIGNvbnRleHR1YWxcbiAgJ3Bvc3RmaXgnLCAvLyBjb250ZXh0dWFsXG4gICdwcmVjZWRlbmNlZ3JvdXAnLFxuICAncHJlZml4JywgLy8gY29udGV4dHVhbFxuICAvcHJpdmF0ZVxcKHNldFxcKS8sXG4gICdwcml2YXRlJyxcbiAgJ3Byb3RvY29sJyxcbiAgL3B1YmxpY1xcKHNldFxcKS8sXG4gICdwdWJsaWMnLFxuICAncmVwZWF0JyxcbiAgJ3JlcXVpcmVkJywgLy8gY29udGV4dHVhbFxuICAncmV0aHJvd3MnLFxuICAncmV0dXJuJyxcbiAgJ3NldCcsIC8vIGNvbnRleHR1YWxcbiAgJ3NvbWUnLCAvLyBjb250ZXh0dWFsXG4gICdzdGF0aWMnLFxuICAnc3RydWN0JyxcbiAgJ3N1YnNjcmlwdCcsXG4gICdzdXBlcicsXG4gICdzd2l0Y2gnLFxuICAndGhyb3dzJyxcbiAgJ3Rocm93JyxcbiAgL3RyeVxcPy8sIC8vIG9wZXJhdG9yXG4gIC90cnkhLywgLy8gb3BlcmF0b3JcbiAgJ3RyeScsIC8vIG9wZXJhdG9yXG4gICd0eXBlYWxpYXMnLFxuICAvdW5vd25lZFxcKHNhZmVcXCkvLCAvLyBjb250ZXh0dWFsXG4gIC91bm93bmVkXFwodW5zYWZlXFwpLywgLy8gY29udGV4dHVhbFxuICAndW5vd25lZCcsIC8vIGNvbnRleHR1YWxcbiAgJ3ZhcicsXG4gICd3ZWFrJywgLy8gY29udGV4dHVhbFxuICAnd2hlcmUnLFxuICAnd2hpbGUnLFxuICAnd2lsbFNldCcgLy8gY29udGV4dHVhbFxuXTtcblxuLy8gTk9URTogQ29udGV4dHVhbCBrZXl3b3JkcyBhcmUgcmVzZXJ2ZWQgb25seSBpbiBzcGVjaWZpYyBjb250ZXh0cy5cbi8vIElkZWFsbHksIHRoZXNlIHNob3VsZCBiZSBtYXRjaGVkIHVzaW5nIG1vZGVzIHRvIGF2b2lkIGZhbHNlIHBvc2l0aXZlcy5cblxuLy8gTGl0ZXJhbHMuXG5jb25zdCBsaXRlcmFscyA9IFtcbiAgJ2ZhbHNlJyxcbiAgJ25pbCcsXG4gICd0cnVlJ1xuXTtcblxuLy8gS2V5d29yZHMgdXNlZCBpbiBwcmVjZWRlbmNlIGdyb3Vwcy5cbmNvbnN0IHByZWNlZGVuY2Vncm91cEtleXdvcmRzID0gW1xuICAnYXNzaWdubWVudCcsXG4gICdhc3NvY2lhdGl2aXR5JyxcbiAgJ2hpZ2hlclRoYW4nLFxuICAnbGVmdCcsXG4gICdsb3dlclRoYW4nLFxuICAnbm9uZScsXG4gICdyaWdodCdcbl07XG5cbi8vIEtleXdvcmRzIHRoYXQgc3RhcnQgd2l0aCBhIG51bWJlciBzaWduICgjKS5cbi8vICNhdmFpbGFibGUgaXMgaGFuZGxlZCBzZXBhcmF0ZWx5LlxuY29uc3QgbnVtYmVyU2lnbktleXdvcmRzID0gW1xuICAnI2NvbG9yTGl0ZXJhbCcsXG4gICcjY29sdW1uJyxcbiAgJyNkc29oYW5kbGUnLFxuICAnI2Vsc2UnLFxuICAnI2Vsc2VpZicsXG4gICcjZW5kaWYnLFxuICAnI2Vycm9yJyxcbiAgJyNmaWxlJyxcbiAgJyNmaWxlSUQnLFxuICAnI2ZpbGVMaXRlcmFsJyxcbiAgJyNmaWxlUGF0aCcsXG4gICcjZnVuY3Rpb24nLFxuICAnI2lmJyxcbiAgJyNpbWFnZUxpdGVyYWwnLFxuICAnI2tleVBhdGgnLFxuICAnI2xpbmUnLFxuICAnI3NlbGVjdG9yJyxcbiAgJyNzb3VyY2VMb2NhdGlvbicsXG4gICcjd2Fybl91bnF1YWxpZmllZF9hY2Nlc3MnLFxuICAnI3dhcm5pbmcnXG5dO1xuXG4vLyBHbG9iYWwgZnVuY3Rpb25zIGluIHRoZSBTdGFuZGFyZCBMaWJyYXJ5LlxuY29uc3QgYnVpbHRJbnMgPSBbXG4gICdhYnMnLFxuICAnYWxsJyxcbiAgJ2FueScsXG4gICdhc3NlcnQnLFxuICAnYXNzZXJ0aW9uRmFpbHVyZScsXG4gICdkZWJ1Z1ByaW50JyxcbiAgJ2R1bXAnLFxuICAnZmF0YWxFcnJvcicsXG4gICdnZXRWYUxpc3QnLFxuICAnaXNLbm93blVuaXF1ZWx5UmVmZXJlbmNlZCcsXG4gICdtYXgnLFxuICAnbWluJyxcbiAgJ251bWVyaWNDYXN0JyxcbiAgJ3BvaW50d2lzZU1heCcsXG4gICdwb2ludHdpc2VNaW4nLFxuICAncHJlY29uZGl0aW9uJyxcbiAgJ3ByZWNvbmRpdGlvbkZhaWx1cmUnLFxuICAncHJpbnQnLFxuICAncmVhZExpbmUnLFxuICAncmVwZWF0RWxlbWVudCcsXG4gICdzZXF1ZW5jZScsXG4gICdzdHJpZGUnLFxuICAnc3dhcCcsXG4gICdzd2lmdF91bmJveEZyb21Td2lmdFZhbHVlV2l0aFR5cGUnLFxuICAndHJhbnNjb2RlJyxcbiAgJ3R5cGUnLFxuICAndW5zYWZlQml0Q2FzdCcsXG4gICd1bnNhZmVEb3duY2FzdCcsXG4gICd3aXRoRXh0ZW5kZWRMaWZldGltZScsXG4gICd3aXRoVW5zYWZlTXV0YWJsZVBvaW50ZXInLFxuICAnd2l0aFVuc2FmZVBvaW50ZXInLFxuICAnd2l0aFZhTGlzdCcsXG4gICd3aXRob3V0QWN0dWFsbHlFc2NhcGluZycsXG4gICd6aXAnXG5dO1xuXG4vLyBWYWxpZCBmaXJzdCBjaGFyYWN0ZXJzIGZvciBvcGVyYXRvcnMuXG5jb25zdCBvcGVyYXRvckhlYWQgPSBlaXRoZXIoXG4gIC9bLz1cXC0rISolPD4mfF5+P10vLFxuICAvW1xcdTAwQTEtXFx1MDBBN10vLFxuICAvW1xcdTAwQTlcXHUwMEFCXS8sXG4gIC9bXFx1MDBBQ1xcdTAwQUVdLyxcbiAgL1tcXHUwMEIwXFx1MDBCMV0vLFxuICAvW1xcdTAwQjZcXHUwMEJCXFx1MDBCRlxcdTAwRDdcXHUwMEY3XS8sXG4gIC9bXFx1MjAxNi1cXHUyMDE3XS8sXG4gIC9bXFx1MjAyMC1cXHUyMDI3XS8sXG4gIC9bXFx1MjAzMC1cXHUyMDNFXS8sXG4gIC9bXFx1MjA0MS1cXHUyMDUzXS8sXG4gIC9bXFx1MjA1NS1cXHUyMDVFXS8sXG4gIC9bXFx1MjE5MC1cXHUyM0ZGXS8sXG4gIC9bXFx1MjUwMC1cXHUyNzc1XS8sXG4gIC9bXFx1Mjc5NC1cXHUyQkZGXS8sXG4gIC9bXFx1MkUwMC1cXHUyRTdGXS8sXG4gIC9bXFx1MzAwMS1cXHUzMDAzXS8sXG4gIC9bXFx1MzAwOC1cXHUzMDIwXS8sXG4gIC9bXFx1MzAzMF0vXG4pO1xuXG4vLyBWYWxpZCBjaGFyYWN0ZXJzIGZvciBvcGVyYXRvcnMuXG5jb25zdCBvcGVyYXRvckNoYXJhY3RlciA9IGVpdGhlcihcbiAgb3BlcmF0b3JIZWFkLFxuICAvW1xcdTAzMDAtXFx1MDM2Rl0vLFxuICAvW1xcdTFEQzAtXFx1MURGRl0vLFxuICAvW1xcdTIwRDAtXFx1MjBGRl0vLFxuICAvW1xcdUZFMDAtXFx1RkUwRl0vLFxuICAvW1xcdUZFMjAtXFx1RkUyRl0vXG4gIC8vIFRPRE86IFRoZSBmb2xsb3dpbmcgY2hhcmFjdGVycyBhcmUgYWxzbyBhbGxvd2VkLCBidXQgdGhlIHJlZ2V4IGlzbid0IHN1cHBvcnRlZCB5ZXQuXG4gIC8vIC9bXFx1e0UwMTAwfS1cXHV7RTAxRUZ9XS91XG4pO1xuXG4vLyBWYWxpZCBvcGVyYXRvci5cbmNvbnN0IG9wZXJhdG9yID0gY29uY2F0KG9wZXJhdG9ySGVhZCwgb3BlcmF0b3JDaGFyYWN0ZXIsICcqJyk7XG5cbi8vIFZhbGlkIGZpcnN0IGNoYXJhY3RlcnMgZm9yIGlkZW50aWZpZXJzLlxuY29uc3QgaWRlbnRpZmllckhlYWQgPSBlaXRoZXIoXG4gIC9bYS16QS1aX10vLFxuICAvW1xcdTAwQThcXHUwMEFBXFx1MDBBRFxcdTAwQUZcXHUwMEIyLVxcdTAwQjVcXHUwMEI3LVxcdTAwQkFdLyxcbiAgL1tcXHUwMEJDLVxcdTAwQkVcXHUwMEMwLVxcdTAwRDZcXHUwMEQ4LVxcdTAwRjZcXHUwMEY4LVxcdTAwRkZdLyxcbiAgL1tcXHUwMTAwLVxcdTAyRkZcXHUwMzcwLVxcdTE2N0ZcXHUxNjgxLVxcdTE4MERcXHUxODBGLVxcdTFEQkZdLyxcbiAgL1tcXHUxRTAwLVxcdTFGRkZdLyxcbiAgL1tcXHUyMDBCLVxcdTIwMERcXHUyMDJBLVxcdTIwMkVcXHUyMDNGLVxcdTIwNDBcXHUyMDU0XFx1MjA2MC1cXHUyMDZGXS8sXG4gIC9bXFx1MjA3MC1cXHUyMENGXFx1MjEwMC1cXHUyMThGXFx1MjQ2MC1cXHUyNEZGXFx1Mjc3Ni1cXHUyNzkzXS8sXG4gIC9bXFx1MkMwMC1cXHUyREZGXFx1MkU4MC1cXHUyRkZGXS8sXG4gIC9bXFx1MzAwNC1cXHUzMDA3XFx1MzAyMS1cXHUzMDJGXFx1MzAzMS1cXHUzMDNGXFx1MzA0MC1cXHVEN0ZGXS8sXG4gIC9bXFx1RjkwMC1cXHVGRDNEXFx1RkQ0MC1cXHVGRENGXFx1RkRGMC1cXHVGRTFGXFx1RkUzMC1cXHVGRTQ0XS8sXG4gIC9bXFx1RkU0Ny1cXHVGRUZFXFx1RkYwMC1cXHVGRkZEXS8gLy8gU2hvdWxkIGJlIC9bXFx1RkU0Ny1cXHVGRkZEXS8sIGJ1dCB3ZSBoYXZlIHRvIGV4Y2x1ZGUgRkVGRi5cbiAgLy8gVGhlIGZvbGxvd2luZyBjaGFyYWN0ZXJzIGFyZSBhbHNvIGFsbG93ZWQsIGJ1dCB0aGUgcmVnZXhlcyBhcmVuJ3Qgc3VwcG9ydGVkIHlldC5cbiAgLy8gL1tcXHV7MTAwMDB9LVxcdXsxRkZGRH1cXHV7MjAwMDAtXFx1ezJGRkZEfVxcdXszMDAwMH0tXFx1ezNGRkZEfVxcdXs0MDAwMH0tXFx1ezRGRkZEfV0vdSxcbiAgLy8gL1tcXHV7NTAwMDB9LVxcdXs1RkZGRH1cXHV7NjAwMDAtXFx1ezZGRkZEfVxcdXs3MDAwMH0tXFx1ezdGRkZEfVxcdXs4MDAwMH0tXFx1ezhGRkZEfV0vdSxcbiAgLy8gL1tcXHV7OTAwMDB9LVxcdXs5RkZGRH1cXHV7QTAwMDAtXFx1e0FGRkZEfVxcdXtCMDAwMH0tXFx1e0JGRkZEfVxcdXtDMDAwMH0tXFx1e0NGRkZEfV0vdSxcbiAgLy8gL1tcXHV7RDAwMDB9LVxcdXtERkZGRH1cXHV7RTAwMDAtXFx1e0VGRkZEfV0vdVxuKTtcblxuLy8gVmFsaWQgY2hhcmFjdGVycyBmb3IgaWRlbnRpZmllcnMuXG5jb25zdCBpZGVudGlmaWVyQ2hhcmFjdGVyID0gZWl0aGVyKFxuICBpZGVudGlmaWVySGVhZCxcbiAgL1xcZC8sXG4gIC9bXFx1MDMwMC1cXHUwMzZGXFx1MURDMC1cXHUxREZGXFx1MjBEMC1cXHUyMEZGXFx1RkUyMC1cXHVGRTJGXS9cbik7XG5cbi8vIFZhbGlkIGlkZW50aWZpZXIuXG5jb25zdCBpZGVudGlmaWVyID0gY29uY2F0KGlkZW50aWZpZXJIZWFkLCBpZGVudGlmaWVyQ2hhcmFjdGVyLCAnKicpO1xuXG4vLyBWYWxpZCB0eXBlIGlkZW50aWZpZXIuXG5jb25zdCB0eXBlSWRlbnRpZmllciA9IGNvbmNhdCgvW0EtWl0vLCBpZGVudGlmaWVyQ2hhcmFjdGVyLCAnKicpO1xuXG4vLyBCdWlsdC1pbiBhdHRyaWJ1dGVzLCB3aGljaCBhcmUgaGlnaGxpZ2h0ZWQgYXMga2V5d29yZHMuXG4vLyBAYXZhaWxhYmxlIGlzIGhhbmRsZWQgc2VwYXJhdGVseS5cbmNvbnN0IGtleXdvcmRBdHRyaWJ1dGVzID0gW1xuICAnYXV0b2Nsb3N1cmUnLFxuICBjb25jYXQoL2NvbnZlbnRpb25cXCgvLCBlaXRoZXIoJ3N3aWZ0JywgJ2Jsb2NrJywgJ2MnKSwgL1xcKS8pLFxuICAnZGlzY2FyZGFibGVSZXN1bHQnLFxuICAnZHluYW1pY0NhbGxhYmxlJyxcbiAgJ2R5bmFtaWNNZW1iZXJMb29rdXAnLFxuICAnZXNjYXBpbmcnLFxuICAnZnJvemVuJyxcbiAgJ0dLSW5zcGVjdGFibGUnLFxuICAnSUJBY3Rpb24nLFxuICAnSUJEZXNpZ25hYmxlJyxcbiAgJ0lCSW5zcGVjdGFibGUnLFxuICAnSUJPdXRsZXQnLFxuICAnSUJTZWd1ZUFjdGlvbicsXG4gICdpbmxpbmFibGUnLFxuICAnbWFpbicsXG4gICdub25vYmpjJyxcbiAgJ05TQXBwbGljYXRpb25NYWluJyxcbiAgJ05TQ29weWluZycsXG4gICdOU01hbmFnZWQnLFxuICBjb25jYXQoL29iamNcXCgvLCBpZGVudGlmaWVyLCAvXFwpLyksXG4gICdvYmpjJyxcbiAgJ29iamNNZW1iZXJzJyxcbiAgJ3Byb3BlcnR5V3JhcHBlcicsXG4gICdyZXF1aXJlc19zdG9yZWRfcHJvcGVydHlfaW5pdHMnLFxuICAndGVzdGFibGUnLFxuICAnVUlBcHBsaWNhdGlvbk1haW4nLFxuICAndW5rbm93bicsXG4gICd1c2FibGVGcm9tSW5saW5lJ1xuXTtcblxuLy8gQ29udGV4dHVhbCBrZXl3b3JkcyB1c2VkIGluIEBhdmFpbGFibGUgYW5kICNhdmFpbGFibGUuXG5jb25zdCBhdmFpbGFiaWxpdHlLZXl3b3JkcyA9IFtcbiAgJ2lPUycsXG4gICdpT1NBcHBsaWNhdGlvbkV4dGVuc2lvbicsXG4gICdtYWNPUycsXG4gICdtYWNPU0FwcGxpY2F0aW9uRXh0ZW5zaW9uJyxcbiAgJ21hY0NhdGFseXN0JyxcbiAgJ21hY0NhdGFseXN0QXBwbGljYXRpb25FeHRlbnNpb24nLFxuICAnd2F0Y2hPUycsXG4gICd3YXRjaE9TQXBwbGljYXRpb25FeHRlbnNpb24nLFxuICAndHZPUycsXG4gICd0dk9TQXBwbGljYXRpb25FeHRlbnNpb24nLFxuICAnc3dpZnQnXG5dO1xuXG4vKlxuTGFuZ3VhZ2U6IFN3aWZ0XG5EZXNjcmlwdGlvbjogU3dpZnQgaXMgYSBnZW5lcmFsLXB1cnBvc2UgcHJvZ3JhbW1pbmcgbGFuZ3VhZ2UgYnVpbHQgdXNpbmcgYSBtb2Rlcm4gYXBwcm9hY2ggdG8gc2FmZXR5LCBwZXJmb3JtYW5jZSwgYW5kIHNvZnR3YXJlIGRlc2lnbiBwYXR0ZXJucy5cbkF1dGhvcjogU3RldmVuIFZhbiBJbXBlIDxzdGV2ZW4udmFuaW1wZUBpY2xvdWQuY29tPlxuQ29udHJpYnV0b3JzOiBDaHJpcyBFaWRob2YgPGNocmlzQGVpZGhvZi5ubD4sIE5hdGUgQ29vayA8bmF0ZWNvb2tAZ21haWwuY29tPiwgQWxleGFuZGVyIExpY2h0ZXIgPG1hbm5pTEBnbXgubmV0PiwgUmljaGFyZCBHaWJzb24gPGdpYnNvbjA0MkBnaXRodWI+XG5XZWJzaXRlOiBodHRwczovL3N3aWZ0Lm9yZ1xuQ2F0ZWdvcnk6IGNvbW1vbiwgc3lzdGVtXG4qL1xuXG4vKiogQHR5cGUgTGFuZ3VhZ2VGbiAqL1xuZnVuY3Rpb24gc3dpZnQoaGxqcykge1xuICBjb25zdCBXSElURVNQQUNFID0ge1xuICAgIG1hdGNoOiAvXFxzKy8sXG4gICAgcmVsZXZhbmNlOiAwXG4gIH07XG4gIC8vIGh0dHBzOi8vZG9jcy5zd2lmdC5vcmcvc3dpZnQtYm9vay9SZWZlcmVuY2VNYW51YWwvTGV4aWNhbFN0cnVjdHVyZS5odG1sI0lENDExXG4gIGNvbnN0IEJMT0NLX0NPTU1FTlQgPSBobGpzLkNPTU1FTlQoXG4gICAgJy9cXFxcKicsXG4gICAgJ1xcXFwqLycsXG4gICAge1xuICAgICAgY29udGFpbnM6IFsgJ3NlbGYnIF1cbiAgICB9XG4gICk7XG4gIGNvbnN0IENPTU1FTlRTID0gW1xuICAgIGhsanMuQ19MSU5FX0NPTU1FTlRfTU9ERSxcbiAgICBCTE9DS19DT01NRU5UXG4gIF07XG5cbiAgLy8gaHR0cHM6Ly9kb2NzLnN3aWZ0Lm9yZy9zd2lmdC1ib29rL1JlZmVyZW5jZU1hbnVhbC9MZXhpY2FsU3RydWN0dXJlLmh0bWwjSUQ0MTNcbiAgLy8gaHR0cHM6Ly9kb2NzLnN3aWZ0Lm9yZy9zd2lmdC1ib29rL1JlZmVyZW5jZU1hbnVhbC96elN1bW1hcnlPZlRoZUdyYW1tYXIuaHRtbFxuICBjb25zdCBET1RfS0VZV09SRCA9IHtcbiAgICBjbGFzc05hbWU6ICdrZXl3b3JkJyxcbiAgICBiZWdpbjogY29uY2F0KC9cXC4vLCBsb29rYWhlYWQoZWl0aGVyKC4uLmRvdEtleXdvcmRzLCAuLi5vcHRpb25hbERvdEtleXdvcmRzKSkpLFxuICAgIGVuZDogZWl0aGVyKC4uLmRvdEtleXdvcmRzLCAuLi5vcHRpb25hbERvdEtleXdvcmRzKSxcbiAgICBleGNsdWRlQmVnaW46IHRydWVcbiAgfTtcbiAgY29uc3QgS0VZV09SRF9HVUFSRCA9IHtcbiAgICAvLyBDb25zdW1lIC5rZXl3b3JkIHRvIHByZXZlbnQgaGlnaGxpZ2h0aW5nIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgYXMga2V5d29yZHMuXG4gICAgbWF0Y2g6IGNvbmNhdCgvXFwuLywgZWl0aGVyKC4uLmtleXdvcmRzKSksXG4gICAgcmVsZXZhbmNlOiAwXG4gIH07XG4gIGNvbnN0IFBMQUlOX0tFWVdPUkRTID0ga2V5d29yZHNcbiAgICAuZmlsdGVyKGt3ID0+IHR5cGVvZiBrdyA9PT0gJ3N0cmluZycpXG4gICAgLmNvbmNhdChbIFwiX3wwXCIgXSk7IC8vIHNlZW1zIGNvbW1vbiwgc28gMCByZWxldmFuY2VcbiAgY29uc3QgUkVHRVhfS0VZV09SRFMgPSBrZXl3b3Jkc1xuICAgIC5maWx0ZXIoa3cgPT4gdHlwZW9mIGt3ICE9PSAnc3RyaW5nJykgLy8gZmluZCByZWdleFxuICAgIC5jb25jYXQoa2V5d29yZFR5cGVzKVxuICAgIC5tYXAoa2V5d29yZFdyYXBwZXIpO1xuICBjb25zdCBLRVlXT1JEID0ge1xuICAgIHZhcmlhbnRzOiBbXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2tleXdvcmQnLFxuICAgICAgICBtYXRjaDogZWl0aGVyKC4uLlJFR0VYX0tFWVdPUkRTLCAuLi5vcHRpb25hbERvdEtleXdvcmRzKVxuICAgICAgfVxuICAgIF1cbiAgfTtcbiAgLy8gZmluZCBhbGwgdGhlIHJlZ3VsYXIga2V5d29yZHNcbiAgY29uc3QgS0VZV09SRFMgPSB7XG4gICAgJHBhdHRlcm46IGVpdGhlcihcbiAgICAgIC9cXGJcXHcrLywgLy8gcmVndWxhciBrZXl3b3Jkc1xuICAgICAgLyNcXHcrLyAvLyBudW1iZXIga2V5d29yZHNcbiAgICApLFxuICAgIGtleXdvcmQ6IFBMQUlOX0tFWVdPUkRTXG4gICAgICAuY29uY2F0KG51bWJlclNpZ25LZXl3b3JkcyksXG4gICAgbGl0ZXJhbDogbGl0ZXJhbHNcbiAgfTtcbiAgY29uc3QgS0VZV09SRF9NT0RFUyA9IFtcbiAgICBET1RfS0VZV09SRCxcbiAgICBLRVlXT1JEX0dVQVJELFxuICAgIEtFWVdPUkRcbiAgXTtcblxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vYXBwbGUvc3dpZnQvdHJlZS9tYWluL3N0ZGxpYi9wdWJsaWMvY29yZVxuICBjb25zdCBCVUlMVF9JTl9HVUFSRCA9IHtcbiAgICAvLyBDb25zdW1lIC5idWlsdF9pbiB0byBwcmV2ZW50IGhpZ2hsaWdodGluZyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzLlxuICAgIG1hdGNoOiBjb25jYXQoL1xcLi8sIGVpdGhlciguLi5idWlsdElucykpLFxuICAgIHJlbGV2YW5jZTogMFxuICB9O1xuICBjb25zdCBCVUlMVF9JTiA9IHtcbiAgICBjbGFzc05hbWU6ICdidWlsdF9pbicsXG4gICAgbWF0Y2g6IGNvbmNhdCgvXFxiLywgZWl0aGVyKC4uLmJ1aWx0SW5zKSwgLyg/PVxcKCkvKVxuICB9O1xuICBjb25zdCBCVUlMVF9JTlMgPSBbXG4gICAgQlVJTFRfSU5fR1VBUkQsXG4gICAgQlVJTFRfSU5cbiAgXTtcblxuICAvLyBodHRwczovL2RvY3Muc3dpZnQub3JnL3N3aWZ0LWJvb2svUmVmZXJlbmNlTWFudWFsL0xleGljYWxTdHJ1Y3R1cmUuaHRtbCNJRDQxOFxuICBjb25zdCBPUEVSQVRPUl9HVUFSRCA9IHtcbiAgICAvLyBQcmV2ZW50IC0+IGZyb20gYmVpbmcgaGlnaGxpZ2h0aW5nIGFzIGFuIG9wZXJhdG9yLlxuICAgIG1hdGNoOiAvLT4vLFxuICAgIHJlbGV2YW5jZTogMFxuICB9O1xuICBjb25zdCBPUEVSQVRPUiA9IHtcbiAgICBjbGFzc05hbWU6ICdvcGVyYXRvcicsXG4gICAgcmVsZXZhbmNlOiAwLFxuICAgIHZhcmlhbnRzOiBbXG4gICAgICB7XG4gICAgICAgIG1hdGNoOiBvcGVyYXRvclxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgLy8gZG90LW9wZXJhdG9yOiBvbmx5IG9wZXJhdG9ycyB0aGF0IHN0YXJ0IHdpdGggYSBkb3QgYXJlIGFsbG93ZWQgdG8gdXNlIGRvdHMgYXNcbiAgICAgICAgLy8gY2hhcmFjdGVycyAoLi4uLCAuLi48LCAuKiwgZXRjKS4gU28gdGhlcmUgcnVsZSBoZXJlIGlzOiBhIGRvdCBmb2xsb3dlZCBieSBvbmUgb3IgbW9yZVxuICAgICAgICAvLyBjaGFyYWN0ZXJzIHRoYXQgbWF5IGFsc28gaW5jbHVkZSBkb3RzLlxuICAgICAgICBtYXRjaDogYFxcXFwuKFxcXFwufCR7b3BlcmF0b3JDaGFyYWN0ZXJ9KStgXG4gICAgICB9XG4gICAgXVxuICB9O1xuICBjb25zdCBPUEVSQVRPUlMgPSBbXG4gICAgT1BFUkFUT1JfR1VBUkQsXG4gICAgT1BFUkFUT1JcbiAgXTtcblxuICAvLyBodHRwczovL2RvY3Muc3dpZnQub3JnL3N3aWZ0LWJvb2svUmVmZXJlbmNlTWFudWFsL0xleGljYWxTdHJ1Y3R1cmUuaHRtbCNncmFtbWFyX251bWVyaWMtbGl0ZXJhbFxuICAvLyBUT0RPOiBVcGRhdGUgZm9yIGxlYWRpbmcgYC1gIGFmdGVyIGxvb2tiZWhpbmQgaXMgc3VwcG9ydGVkIGV2ZXJ5d2hlcmVcbiAgY29uc3QgZGVjaW1hbERpZ2l0cyA9ICcoWzAtOV1fKikrJztcbiAgY29uc3QgaGV4RGlnaXRzID0gJyhbMC05YS1mQS1GXV8qKSsnO1xuICBjb25zdCBOVU1CRVIgPSB7XG4gICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICByZWxldmFuY2U6IDAsXG4gICAgdmFyaWFudHM6IFtcbiAgICAgIC8vIGRlY2ltYWwgZmxvYXRpbmctcG9pbnQtbGl0ZXJhbCAoc3Vic3VtZXMgZGVjaW1hbC1saXRlcmFsKVxuICAgICAge1xuICAgICAgICBtYXRjaDogYFxcXFxiKCR7ZGVjaW1hbERpZ2l0c30pKFxcXFwuKCR7ZGVjaW1hbERpZ2l0c30pKT9gICsgYChbZUVdWystXT8oJHtkZWNpbWFsRGlnaXRzfSkpP1xcXFxiYFxuICAgICAgfSxcbiAgICAgIC8vIGhleGFkZWNpbWFsIGZsb2F0aW5nLXBvaW50LWxpdGVyYWwgKHN1YnN1bWVzIGhleGFkZWNpbWFsLWxpdGVyYWwpXG4gICAgICB7XG4gICAgICAgIG1hdGNoOiBgXFxcXGIweCgke2hleERpZ2l0c30pKFxcXFwuKCR7aGV4RGlnaXRzfSkpP2AgKyBgKFtwUF1bKy1dPygke2RlY2ltYWxEaWdpdHN9KSk/XFxcXGJgXG4gICAgICB9LFxuICAgICAgLy8gb2N0YWwtbGl0ZXJhbFxuICAgICAge1xuICAgICAgICBtYXRjaDogL1xcYjBvKFswLTddXyopK1xcYi9cbiAgICAgIH0sXG4gICAgICAvLyBiaW5hcnktbGl0ZXJhbFxuICAgICAge1xuICAgICAgICBtYXRjaDogL1xcYjBiKFswMV1fKikrXFxiL1xuICAgICAgfVxuICAgIF1cbiAgfTtcblxuICAvLyBodHRwczovL2RvY3Muc3dpZnQub3JnL3N3aWZ0LWJvb2svUmVmZXJlbmNlTWFudWFsL0xleGljYWxTdHJ1Y3R1cmUuaHRtbCNncmFtbWFyX3N0cmluZy1saXRlcmFsXG4gIGNvbnN0IEVTQ0FQRURfQ0hBUkFDVEVSID0gKHJhd0RlbGltaXRlciA9IFwiXCIpID0+ICh7XG4gICAgY2xhc3NOYW1lOiAnc3Vic3QnLFxuICAgIHZhcmlhbnRzOiBbXG4gICAgICB7XG4gICAgICAgIG1hdGNoOiBjb25jYXQoL1xcXFwvLCByYXdEZWxpbWl0ZXIsIC9bMFxcXFx0bnJcIiddLylcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG1hdGNoOiBjb25jYXQoL1xcXFwvLCByYXdEZWxpbWl0ZXIsIC91XFx7WzAtOWEtZkEtRl17MSw4fVxcfS8pXG4gICAgICB9XG4gICAgXVxuICB9KTtcbiAgY29uc3QgRVNDQVBFRF9ORVdMSU5FID0gKHJhd0RlbGltaXRlciA9IFwiXCIpID0+ICh7XG4gICAgY2xhc3NOYW1lOiAnc3Vic3QnLFxuICAgIG1hdGNoOiBjb25jYXQoL1xcXFwvLCByYXdEZWxpbWl0ZXIsIC9bXFx0IF0qKD86W1xcclxcbl18XFxyXFxuKS8pXG4gIH0pO1xuICBjb25zdCBJTlRFUlBPTEFUSU9OID0gKHJhd0RlbGltaXRlciA9IFwiXCIpID0+ICh7XG4gICAgY2xhc3NOYW1lOiAnc3Vic3QnLFxuICAgIGxhYmVsOiBcImludGVycG9sXCIsXG4gICAgYmVnaW46IGNvbmNhdCgvXFxcXC8sIHJhd0RlbGltaXRlciwgL1xcKC8pLFxuICAgIGVuZDogL1xcKS9cbiAgfSk7XG4gIGNvbnN0IE1VTFRJTElORV9TVFJJTkcgPSAocmF3RGVsaW1pdGVyID0gXCJcIikgPT4gKHtcbiAgICBiZWdpbjogY29uY2F0KHJhd0RlbGltaXRlciwgL1wiXCJcIi8pLFxuICAgIGVuZDogY29uY2F0KC9cIlwiXCIvLCByYXdEZWxpbWl0ZXIpLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBFU0NBUEVEX0NIQVJBQ1RFUihyYXdEZWxpbWl0ZXIpLFxuICAgICAgRVNDQVBFRF9ORVdMSU5FKHJhd0RlbGltaXRlciksXG4gICAgICBJTlRFUlBPTEFUSU9OKHJhd0RlbGltaXRlcilcbiAgICBdXG4gIH0pO1xuICBjb25zdCBTSU5HTEVfTElORV9TVFJJTkcgPSAocmF3RGVsaW1pdGVyID0gXCJcIikgPT4gKHtcbiAgICBiZWdpbjogY29uY2F0KHJhd0RlbGltaXRlciwgL1wiLyksXG4gICAgZW5kOiBjb25jYXQoL1wiLywgcmF3RGVsaW1pdGVyKSxcbiAgICBjb250YWluczogW1xuICAgICAgRVNDQVBFRF9DSEFSQUNURVIocmF3RGVsaW1pdGVyKSxcbiAgICAgIElOVEVSUE9MQVRJT04ocmF3RGVsaW1pdGVyKVxuICAgIF1cbiAgfSk7XG4gIGNvbnN0IFNUUklORyA9IHtcbiAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgIHZhcmlhbnRzOiBbXG4gICAgICBNVUxUSUxJTkVfU1RSSU5HKCksXG4gICAgICBNVUxUSUxJTkVfU1RSSU5HKFwiI1wiKSxcbiAgICAgIE1VTFRJTElORV9TVFJJTkcoXCIjI1wiKSxcbiAgICAgIE1VTFRJTElORV9TVFJJTkcoXCIjIyNcIiksXG4gICAgICBTSU5HTEVfTElORV9TVFJJTkcoKSxcbiAgICAgIFNJTkdMRV9MSU5FX1NUUklORyhcIiNcIiksXG4gICAgICBTSU5HTEVfTElORV9TVFJJTkcoXCIjI1wiKSxcbiAgICAgIFNJTkdMRV9MSU5FX1NUUklORyhcIiMjI1wiKVxuICAgIF1cbiAgfTtcblxuICAvLyBodHRwczovL2RvY3Muc3dpZnQub3JnL3N3aWZ0LWJvb2svUmVmZXJlbmNlTWFudWFsL0xleGljYWxTdHJ1Y3R1cmUuaHRtbCNJRDQxMlxuICBjb25zdCBRVU9URURfSURFTlRJRklFUiA9IHtcbiAgICBtYXRjaDogY29uY2F0KC9gLywgaWRlbnRpZmllciwgL2AvKVxuICB9O1xuICBjb25zdCBJTVBMSUNJVF9QQVJBTUVURVIgPSB7XG4gICAgY2xhc3NOYW1lOiAndmFyaWFibGUnLFxuICAgIG1hdGNoOiAvXFwkXFxkKy9cbiAgfTtcbiAgY29uc3QgUFJPUEVSVFlfV1JBUFBFUl9QUk9KRUNUSU9OID0ge1xuICAgIGNsYXNzTmFtZTogJ3ZhcmlhYmxlJyxcbiAgICBtYXRjaDogYFxcXFwkJHtpZGVudGlmaWVyQ2hhcmFjdGVyfStgXG4gIH07XG4gIGNvbnN0IElERU5USUZJRVJTID0gW1xuICAgIFFVT1RFRF9JREVOVElGSUVSLFxuICAgIElNUExJQ0lUX1BBUkFNRVRFUixcbiAgICBQUk9QRVJUWV9XUkFQUEVSX1BST0pFQ1RJT05cbiAgXTtcblxuICAvLyBodHRwczovL2RvY3Muc3dpZnQub3JnL3N3aWZ0LWJvb2svUmVmZXJlbmNlTWFudWFsL0F0dHJpYnV0ZXMuaHRtbFxuICBjb25zdCBBVkFJTEFCTEVfQVRUUklCVVRFID0ge1xuICAgIG1hdGNoOiAvKEB8IylhdmFpbGFibGUvLFxuICAgIGNsYXNzTmFtZTogXCJrZXl3b3JkXCIsXG4gICAgc3RhcnRzOiB7XG4gICAgICBjb250YWluczogW1xuICAgICAgICB7XG4gICAgICAgICAgYmVnaW46IC9cXCgvLFxuICAgICAgICAgIGVuZDogL1xcKS8sXG4gICAgICAgICAga2V5d29yZHM6IGF2YWlsYWJpbGl0eUtleXdvcmRzLFxuICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAuLi5PUEVSQVRPUlMsXG4gICAgICAgICAgICBOVU1CRVIsXG4gICAgICAgICAgICBTVFJJTkdcbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIH07XG4gIGNvbnN0IEtFWVdPUkRfQVRUUklCVVRFID0ge1xuICAgIGNsYXNzTmFtZTogJ2tleXdvcmQnLFxuICAgIG1hdGNoOiBjb25jYXQoL0AvLCBlaXRoZXIoLi4ua2V5d29yZEF0dHJpYnV0ZXMpKVxuICB9O1xuICBjb25zdCBVU0VSX0RFRklORURfQVRUUklCVVRFID0ge1xuICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgIG1hdGNoOiBjb25jYXQoL0AvLCBpZGVudGlmaWVyKVxuICB9O1xuICBjb25zdCBBVFRSSUJVVEVTID0gW1xuICAgIEFWQUlMQUJMRV9BVFRSSUJVVEUsXG4gICAgS0VZV09SRF9BVFRSSUJVVEUsXG4gICAgVVNFUl9ERUZJTkVEX0FUVFJJQlVURVxuICBdO1xuXG4gIC8vIGh0dHBzOi8vZG9jcy5zd2lmdC5vcmcvc3dpZnQtYm9vay9SZWZlcmVuY2VNYW51YWwvVHlwZXMuaHRtbFxuICBjb25zdCBUWVBFID0ge1xuICAgIG1hdGNoOiBsb29rYWhlYWQoL1xcYltBLVpdLyksXG4gICAgcmVsZXZhbmNlOiAwLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICB7IC8vIENvbW1vbiBBcHBsZSBmcmFtZXdvcmtzLCBmb3IgcmVsZXZhbmNlIGJvb3N0XG4gICAgICAgIGNsYXNzTmFtZTogJ3R5cGUnLFxuICAgICAgICBtYXRjaDogY29uY2F0KC8oQVZ8Q0F8Q0Z8Q0d8Q0l8Q0x8Q018Q058Q1R8TUt8TVB8TVRLfE1UTHxOU3xTQ058U0t8VUl8V0t8WEMpLywgaWRlbnRpZmllckNoYXJhY3RlciwgJysnKVxuICAgICAgfSxcbiAgICAgIHsgLy8gVHlwZSBpZGVudGlmaWVyXG4gICAgICAgIGNsYXNzTmFtZTogJ3R5cGUnLFxuICAgICAgICBtYXRjaDogdHlwZUlkZW50aWZpZXIsXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIHsgLy8gT3B0aW9uYWwgdHlwZVxuICAgICAgICBtYXRjaDogL1s/IV0rLyxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuICAgICAgeyAvLyBWYXJpYWRpYyBwYXJhbWV0ZXJcbiAgICAgICAgbWF0Y2g6IC9cXC5cXC5cXC4vLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICB7IC8vIFByb3RvY29sIGNvbXBvc2l0aW9uXG4gICAgICAgIG1hdGNoOiBjb25jYXQoL1xccysmXFxzKy8sIGxvb2thaGVhZCh0eXBlSWRlbnRpZmllcikpLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH1cbiAgICBdXG4gIH07XG4gIGNvbnN0IEdFTkVSSUNfQVJHVU1FTlRTID0ge1xuICAgIGJlZ2luOiAvPC8sXG4gICAgZW5kOiAvPi8sXG4gICAga2V5d29yZHM6IEtFWVdPUkRTLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICAuLi5DT01NRU5UUyxcbiAgICAgIC4uLktFWVdPUkRfTU9ERVMsXG4gICAgICAuLi5BVFRSSUJVVEVTLFxuICAgICAgT1BFUkFUT1JfR1VBUkQsXG4gICAgICBUWVBFXG4gICAgXVxuICB9O1xuICBUWVBFLmNvbnRhaW5zLnB1c2goR0VORVJJQ19BUkdVTUVOVFMpO1xuXG4gIC8vIGh0dHBzOi8vZG9jcy5zd2lmdC5vcmcvc3dpZnQtYm9vay9SZWZlcmVuY2VNYW51YWwvRXhwcmVzc2lvbnMuaHRtbCNJRDU1MlxuICAvLyBQcmV2ZW50cyBlbGVtZW50IG5hbWVzIGZyb20gYmVpbmcgaGlnaGxpZ2h0ZWQgYXMga2V5d29yZHMuXG4gIGNvbnN0IFRVUExFX0VMRU1FTlRfTkFNRSA9IHtcbiAgICBtYXRjaDogY29uY2F0KGlkZW50aWZpZXIsIC9cXHMqOi8pLFxuICAgIGtleXdvcmRzOiBcIl98MFwiLFxuICAgIHJlbGV2YW5jZTogMFxuICB9O1xuICAvLyBNYXRjaGVzIHR1cGxlcyBhcyB3ZWxsIGFzIHRoZSBwYXJhbWV0ZXIgbGlzdCBvZiBhIGZ1bmN0aW9uIHR5cGUuXG4gIGNvbnN0IFRVUExFID0ge1xuICAgIGJlZ2luOiAvXFwoLyxcbiAgICBlbmQ6IC9cXCkvLFxuICAgIHJlbGV2YW5jZTogMCxcbiAgICBrZXl3b3JkczogS0VZV09SRFMsXG4gICAgY29udGFpbnM6IFtcbiAgICAgICdzZWxmJyxcbiAgICAgIFRVUExFX0VMRU1FTlRfTkFNRSxcbiAgICAgIC4uLkNPTU1FTlRTLFxuICAgICAgLi4uS0VZV09SRF9NT0RFUyxcbiAgICAgIC4uLkJVSUxUX0lOUyxcbiAgICAgIC4uLk9QRVJBVE9SUyxcbiAgICAgIE5VTUJFUixcbiAgICAgIFNUUklORyxcbiAgICAgIC4uLklERU5USUZJRVJTLFxuICAgICAgLi4uQVRUUklCVVRFUyxcbiAgICAgIFRZUEVcbiAgICBdXG4gIH07XG5cbiAgLy8gaHR0cHM6Ly9kb2NzLnN3aWZ0Lm9yZy9zd2lmdC1ib29rL1JlZmVyZW5jZU1hbnVhbC9EZWNsYXJhdGlvbnMuaHRtbCNJRDM2MlxuICAvLyBNYXRjaGVzIGJvdGggdGhlIGtleXdvcmQgZnVuYyBhbmQgdGhlIGZ1bmN0aW9uIHRpdGxlLlxuICAvLyBHcm91cGluZyB0aGVzZSBsZXRzIHVzIGRpZmZlcmVudGlhdGUgYmV0d2VlbiB0aGUgb3BlcmF0b3IgZnVuY3Rpb24gPFxuICAvLyBhbmQgdGhlIHN0YXJ0IG9mIHRoZSBnZW5lcmljIHBhcmFtZXRlciBjbGF1c2UgKGFsc28gPCkuXG4gIGNvbnN0IEZVTkNfUExVU19USVRMRSA9IHtcbiAgICBiZWdpbktleXdvcmRzOiAnZnVuYycsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAndGl0bGUnLFxuICAgICAgICBtYXRjaDogZWl0aGVyKFFVT1RFRF9JREVOVElGSUVSLm1hdGNoLCBpZGVudGlmaWVyLCBvcGVyYXRvciksXG4gICAgICAgIC8vIFJlcXVpcmVkIHRvIG1ha2Ugc3VyZSB0aGUgb3BlbmluZyA8IG9mIHRoZSBnZW5lcmljIHBhcmFtZXRlciBjbGF1c2VcbiAgICAgICAgLy8gaXNuJ3QgcGFyc2VkIGFzIGEgc2Vjb25kIHRpdGxlLlxuICAgICAgICBlbmRzUGFyZW50OiB0cnVlLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICBXSElURVNQQUNFXG4gICAgXVxuICB9O1xuICBjb25zdCBHRU5FUklDX1BBUkFNRVRFUlMgPSB7XG4gICAgYmVnaW46IC88LyxcbiAgICBlbmQ6IC8+LyxcbiAgICBjb250YWluczogW1xuICAgICAgLi4uQ09NTUVOVFMsXG4gICAgICBUWVBFXG4gICAgXVxuICB9O1xuICBjb25zdCBGVU5DVElPTl9QQVJBTUVURVJfTkFNRSA9IHtcbiAgICBiZWdpbjogZWl0aGVyKFxuICAgICAgbG9va2FoZWFkKGNvbmNhdChpZGVudGlmaWVyLCAvXFxzKjovKSksXG4gICAgICBsb29rYWhlYWQoY29uY2F0KGlkZW50aWZpZXIsIC9cXHMrLywgaWRlbnRpZmllciwgL1xccyo6LykpXG4gICAgKSxcbiAgICBlbmQ6IC86LyxcbiAgICByZWxldmFuY2U6IDAsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAna2V5d29yZCcsXG4gICAgICAgIG1hdGNoOiAvXFxiX1xcYi9cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3BhcmFtcycsXG4gICAgICAgIG1hdGNoOiBpZGVudGlmaWVyXG4gICAgICB9XG4gICAgXVxuICB9O1xuICBjb25zdCBGVU5DVElPTl9QQVJBTUVURVJTID0ge1xuICAgIGJlZ2luOiAvXFwoLyxcbiAgICBlbmQ6IC9cXCkvLFxuICAgIGtleXdvcmRzOiBLRVlXT1JEUyxcbiAgICBjb250YWluczogW1xuICAgICAgRlVOQ1RJT05fUEFSQU1FVEVSX05BTUUsXG4gICAgICAuLi5DT01NRU5UUyxcbiAgICAgIC4uLktFWVdPUkRfTU9ERVMsXG4gICAgICAuLi5PUEVSQVRPUlMsXG4gICAgICBOVU1CRVIsXG4gICAgICBTVFJJTkcsXG4gICAgICAuLi5BVFRSSUJVVEVTLFxuICAgICAgVFlQRSxcbiAgICAgIFRVUExFXG4gICAgXSxcbiAgICBlbmRzUGFyZW50OiB0cnVlLFxuICAgIGlsbGVnYWw6IC9bXCInXS9cbiAgfTtcbiAgY29uc3QgRlVOQ1RJT04gPSB7XG4gICAgY2xhc3NOYW1lOiAnZnVuY3Rpb24nLFxuICAgIG1hdGNoOiBsb29rYWhlYWQoL1xcYmZ1bmNcXGIvKSxcbiAgICBjb250YWluczogW1xuICAgICAgRlVOQ19QTFVTX1RJVExFLFxuICAgICAgR0VORVJJQ19QQVJBTUVURVJTLFxuICAgICAgRlVOQ1RJT05fUEFSQU1FVEVSUyxcbiAgICAgIFdISVRFU1BBQ0VcbiAgICBdLFxuICAgIGlsbGVnYWw6IFtcbiAgICAgIC9cXFsvLFxuICAgICAgLyUvXG4gICAgXVxuICB9O1xuXG4gIC8vIGh0dHBzOi8vZG9jcy5zd2lmdC5vcmcvc3dpZnQtYm9vay9SZWZlcmVuY2VNYW51YWwvRGVjbGFyYXRpb25zLmh0bWwjSUQzNzVcbiAgLy8gaHR0cHM6Ly9kb2NzLnN3aWZ0Lm9yZy9zd2lmdC1ib29rL1JlZmVyZW5jZU1hbnVhbC9EZWNsYXJhdGlvbnMuaHRtbCNJRDM3OVxuICBjb25zdCBJTklUX1NVQlNDUklQVCA9IHtcbiAgICBjbGFzc05hbWU6ICdmdW5jdGlvbicsXG4gICAgbWF0Y2g6IC9cXGIoc3Vic2NyaXB0fGluaXRbPyFdPylcXHMqKD89WzwoXSkvLFxuICAgIGtleXdvcmRzOiB7XG4gICAgICBrZXl3b3JkOiBcInN1YnNjcmlwdCBpbml0IGluaXQ/IGluaXQhXCIsXG4gICAgICAkcGF0dGVybjogL1xcdytbPyFdPy9cbiAgICB9LFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBHRU5FUklDX1BBUkFNRVRFUlMsXG4gICAgICBGVU5DVElPTl9QQVJBTUVURVJTLFxuICAgICAgV0hJVEVTUEFDRVxuICAgIF0sXG4gICAgaWxsZWdhbDogL1xcW3wlL1xuICB9O1xuICAvLyBodHRwczovL2RvY3Muc3dpZnQub3JnL3N3aWZ0LWJvb2svUmVmZXJlbmNlTWFudWFsL0RlY2xhcmF0aW9ucy5odG1sI0lEMzgwXG4gIGNvbnN0IE9QRVJBVE9SX0RFQ0xBUkFUSU9OID0ge1xuICAgIGJlZ2luS2V5d29yZHM6ICdvcGVyYXRvcicsXG4gICAgZW5kOiBobGpzLk1BVENIX05PVEhJTkdfUkUsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAndGl0bGUnLFxuICAgICAgICBtYXRjaDogb3BlcmF0b3IsXG4gICAgICAgIGVuZHNQYXJlbnQ6IHRydWUsXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfVxuICAgIF1cbiAgfTtcblxuICAvLyBodHRwczovL2RvY3Muc3dpZnQub3JnL3N3aWZ0LWJvb2svUmVmZXJlbmNlTWFudWFsL0RlY2xhcmF0aW9ucy5odG1sI0lENTUwXG4gIGNvbnN0IFBSRUNFREVOQ0VHUk9VUCA9IHtcbiAgICBiZWdpbktleXdvcmRzOiAncHJlY2VkZW5jZWdyb3VwJyxcbiAgICBlbmQ6IGhsanMuTUFUQ0hfTk9USElOR19SRSxcbiAgICBjb250YWluczogW1xuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICd0aXRsZScsXG4gICAgICAgIG1hdGNoOiB0eXBlSWRlbnRpZmllcixcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogL3svLFxuICAgICAgICBlbmQ6IC99LyxcbiAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICBlbmRzUGFyZW50OiB0cnVlLFxuICAgICAgICBrZXl3b3JkczogW1xuICAgICAgICAgIC4uLnByZWNlZGVuY2Vncm91cEtleXdvcmRzLFxuICAgICAgICAgIC4uLmxpdGVyYWxzXG4gICAgICAgIF0sXG4gICAgICAgIGNvbnRhaW5zOiBbIFRZUEUgXVxuICAgICAgfVxuICAgIF1cbiAgfTtcblxuICAvLyBBZGQgc3VwcG9ydGVkIHN1Ym1vZGVzIHRvIHN0cmluZyBpbnRlcnBvbGF0aW9uLlxuICBmb3IgKGNvbnN0IHZhcmlhbnQgb2YgU1RSSU5HLnZhcmlhbnRzKSB7XG4gICAgY29uc3QgaW50ZXJwb2xhdGlvbiA9IHZhcmlhbnQuY29udGFpbnMuZmluZChtb2RlID0+IG1vZGUubGFiZWwgPT09IFwiaW50ZXJwb2xcIik7XG4gICAgLy8gVE9ETzogSW50ZXJwb2xhdGlvbiBjYW4gY29udGFpbiBhbnkgZXhwcmVzc2lvbiwgc28gdGhlcmUncyByb29tIGZvciBpbXByb3ZlbWVudCBoZXJlLlxuICAgIGludGVycG9sYXRpb24ua2V5d29yZHMgPSBLRVlXT1JEUztcbiAgICBjb25zdCBzdWJtb2RlcyA9IFtcbiAgICAgIC4uLktFWVdPUkRfTU9ERVMsXG4gICAgICAuLi5CVUlMVF9JTlMsXG4gICAgICAuLi5PUEVSQVRPUlMsXG4gICAgICBOVU1CRVIsXG4gICAgICBTVFJJTkcsXG4gICAgICAuLi5JREVOVElGSUVSU1xuICAgIF07XG4gICAgaW50ZXJwb2xhdGlvbi5jb250YWlucyA9IFtcbiAgICAgIC4uLnN1Ym1vZGVzLFxuICAgICAge1xuICAgICAgICBiZWdpbjogL1xcKC8sXG4gICAgICAgIGVuZDogL1xcKS8sXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgJ3NlbGYnLFxuICAgICAgICAgIC4uLnN1Ym1vZGVzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnU3dpZnQnLFxuICAgIGtleXdvcmRzOiBLRVlXT1JEUyxcbiAgICBjb250YWluczogW1xuICAgICAgLi4uQ09NTUVOVFMsXG4gICAgICBGVU5DVElPTixcbiAgICAgIElOSVRfU1VCU0NSSVBULFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdjbGFzcycsXG4gICAgICAgIGJlZ2luS2V5d29yZHM6ICdzdHJ1Y3QgcHJvdG9jb2wgY2xhc3MgZXh0ZW5zaW9uIGVudW0nLFxuICAgICAgICBlbmQ6ICdcXFxceycsXG4gICAgICAgIGV4Y2x1ZGVFbmQ6IHRydWUsXG4gICAgICAgIGtleXdvcmRzOiBLRVlXT1JEUyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICBobGpzLmluaGVyaXQoaGxqcy5USVRMRV9NT0RFLCB7XG4gICAgICAgICAgICBiZWdpbjogL1tBLVphLXokX11bXFx1MDBDMC1cXHUwMkI4MC05QS1aYS16JF9dKi9cbiAgICAgICAgICB9KSxcbiAgICAgICAgICAuLi5LRVlXT1JEX01PREVTXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBPUEVSQVRPUl9ERUNMQVJBVElPTixcbiAgICAgIFBSRUNFREVOQ0VHUk9VUCxcbiAgICAgIHtcbiAgICAgICAgYmVnaW5LZXl3b3JkczogJ2ltcG9ydCcsXG4gICAgICAgIGVuZDogLyQvLFxuICAgICAgICBjb250YWluczogWyAuLi5DT01NRU5UUyBdLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICAuLi5LRVlXT1JEX01PREVTLFxuICAgICAgLi4uQlVJTFRfSU5TLFxuICAgICAgLi4uT1BFUkFUT1JTLFxuICAgICAgTlVNQkVSLFxuICAgICAgU1RSSU5HLFxuICAgICAgLi4uSURFTlRJRklFUlMsXG4gICAgICAuLi5BVFRSSUJVVEVTLFxuICAgICAgVFlQRSxcbiAgICAgIFRVUExFXG4gICAgXVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN3aWZ0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==