(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[171],{

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

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3N3aWZ0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWE7QUFDYjs7QUFFQTtBQUNBLFdBQVcsaUJBQWlCO0FBQzVCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyxpQkFBaUI7QUFDNUIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyxzQkFBc0I7QUFDakMsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHFCQUFxQjtBQUNoQyxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLE1BQU0sSUFBSSxNQUFNO0FBQzFCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsTUFBTSxJQUFJLE1BQU0sR0FBRyxTQUFTLE1BQU0sR0FBRyxNQUFNLElBQUksTUFBTSxHQUFHLE1BQU0sSUFBSSxNQUFNO0FBQ2xGLFVBQVUsTUFBTSxJQUFJLE1BQU0sR0FBRyxTQUFTLE1BQU0sR0FBRyxNQUFNLElBQUksTUFBTSxHQUFHLE1BQU0sSUFBSSxNQUFNO0FBQ2xGLFVBQVUsTUFBTSxJQUFJLE1BQU0sR0FBRyxTQUFTLE1BQU0sR0FBRyxNQUFNLElBQUksTUFBTSxHQUFHLE1BQU0sSUFBSSxNQUFNO0FBQ2xGLFVBQVUsTUFBTSxJQUFJLE1BQU0sR0FBRyxTQUFTLE1BQU07QUFDNUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixrQkFBa0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsY0FBYyxRQUFRLGNBQWMscUJBQXFCLGNBQWM7QUFDN0YsT0FBTztBQUNQO0FBQ0E7QUFDQSx3QkFBd0IsVUFBVSxRQUFRLFVBQVUscUJBQXFCLGNBQWM7QUFDdkYsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsOENBQThDLFlBQVksSUFBSSxFQUFFO0FBQ2hFO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixvQkFBb0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxpQkFBaUI7QUFDakIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoic3RhdGljL2NodW5rcy8xNzEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHJldHVybnMge1JlZ0V4cH1cbiAqICovXG5cbi8qKlxuICogQHBhcmFtIHtSZWdFeHAgfCBzdHJpbmcgfSByZVxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gc291cmNlKHJlKSB7XG4gIGlmICghcmUpIHJldHVybiBudWxsO1xuICBpZiAodHlwZW9mIHJlID09PSBcInN0cmluZ1wiKSByZXR1cm4gcmU7XG5cbiAgcmV0dXJuIHJlLnNvdXJjZTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge1JlZ0V4cCB8IHN0cmluZyB9IHJlXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBsb29rYWhlYWQocmUpIHtcbiAgcmV0dXJuIGNvbmNhdCgnKD89JywgcmUsICcpJyk7XG59XG5cbi8qKlxuICogQHBhcmFtIHsuLi4oUmVnRXhwIHwgc3RyaW5nKSB9IGFyZ3NcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGNvbmNhdCguLi5hcmdzKSB7XG4gIGNvbnN0IGpvaW5lZCA9IGFyZ3MubWFwKCh4KSA9PiBzb3VyY2UoeCkpLmpvaW4oXCJcIik7XG4gIHJldHVybiBqb2luZWQ7XG59XG5cbi8qKlxuICogQW55IG9mIHRoZSBwYXNzZWQgZXhwcmVzc3Npb25zIG1heSBtYXRjaFxuICpcbiAqIENyZWF0ZXMgYSBodWdlIHRoaXMgfCB0aGlzIHwgdGhhdCB8IHRoYXQgbWF0Y2hcbiAqIEBwYXJhbSB7KFJlZ0V4cCB8IHN0cmluZylbXSB9IGFyZ3NcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGVpdGhlciguLi5hcmdzKSB7XG4gIGNvbnN0IGpvaW5lZCA9ICcoJyArIGFyZ3MubWFwKCh4KSA9PiBzb3VyY2UoeCkpLmpvaW4oXCJ8XCIpICsgXCIpXCI7XG4gIHJldHVybiBqb2luZWQ7XG59XG5cbmNvbnN0IGtleXdvcmRXcmFwcGVyID0ga2V5d29yZCA9PiBjb25jYXQoXG4gIC9cXGIvLFxuICBrZXl3b3JkLFxuICAvXFx3JC8udGVzdChrZXl3b3JkKSA/IC9cXGIvIDogL1xcQi9cbik7XG5cbi8vIEtleXdvcmRzIHRoYXQgcmVxdWlyZSBhIGxlYWRpbmcgZG90LlxuY29uc3QgZG90S2V5d29yZHMgPSBbXG4gICdQcm90b2NvbCcsIC8vIGNvbnRleHR1YWxcbiAgJ1R5cGUnIC8vIGNvbnRleHR1YWxcbl0ubWFwKGtleXdvcmRXcmFwcGVyKTtcblxuLy8gS2V5d29yZHMgdGhhdCBtYXkgaGF2ZSBhIGxlYWRpbmcgZG90LlxuY29uc3Qgb3B0aW9uYWxEb3RLZXl3b3JkcyA9IFtcbiAgJ2luaXQnLFxuICAnc2VsZidcbl0ubWFwKGtleXdvcmRXcmFwcGVyKTtcblxuLy8gc2hvdWxkIHJlZ2lzdGVyIGFzIGtleXdvcmQsIG5vdCB0eXBlXG5jb25zdCBrZXl3b3JkVHlwZXMgPSBbXG4gICdBbnknLFxuICAnU2VsZidcbl07XG5cbi8vIFJlZ3VsYXIga2V5d29yZHMgYW5kIGxpdGVyYWxzLlxuY29uc3Qga2V5d29yZHMgPSBbXG4gIC8vIHN0cmluZ3MgYmVsb3cgd2lsbCBiZSBmZWQgaW50byB0aGUgcmVndWxhciBga2V5d29yZHNgIGVuZ2luZSB3aGlsZSByZWdleFxuICAvLyB3aWxsIHJlc3VsdCBpbiBhZGRpdGlvbmFsIG1vZGVzIGJlaW5nIGNyZWF0ZWQgdG8gc2NhbiBmb3IgdGhvc2Uga2V5d29yZHMgdG9cbiAgLy8gYXZvaWQgY29uZmxpY3RzIHdpdGggb3RoZXIgcnVsZXNcbiAgJ2Fzc29jaWF0ZWR0eXBlJyxcbiAgL2FzXFw/LywgLy8gb3BlcmF0b3JcbiAgL2FzIS8sIC8vIG9wZXJhdG9yXG4gICdhcycsIC8vIG9wZXJhdG9yXG4gICdicmVhaycsXG4gICdjYXNlJyxcbiAgJ2NhdGNoJyxcbiAgJ2NsYXNzJyxcbiAgJ2NvbnRpbnVlJyxcbiAgJ2NvbnZlbmllbmNlJywgLy8gY29udGV4dHVhbFxuICAnZGVmYXVsdCcsXG4gICdkZWZlcicsXG4gICdkZWluaXQnLFxuICAnZGlkU2V0JywgLy8gY29udGV4dHVhbFxuICAnZG8nLFxuICAnZHluYW1pYycsIC8vIGNvbnRleHR1YWxcbiAgJ2Vsc2UnLFxuICAnZW51bScsXG4gICdleHRlbnNpb24nLFxuICAnZmFsbHRocm91Z2gnLFxuICAvZmlsZXByaXZhdGVcXChzZXRcXCkvLFxuICAnZmlsZXByaXZhdGUnLFxuICAnZmluYWwnLCAvLyBjb250ZXh0dWFsXG4gICdmb3InLFxuICAnZnVuYycsXG4gICdnZXQnLCAvLyBjb250ZXh0dWFsXG4gICdndWFyZCcsXG4gICdpZicsXG4gICdpbXBvcnQnLFxuICAnaW5kaXJlY3QnLCAvLyBjb250ZXh0dWFsXG4gICdpbmZpeCcsIC8vIGNvbnRleHR1YWxcbiAgL2luaXRcXD8vLFxuICAvaW5pdCEvLFxuICAnaW5vdXQnLFxuICAvaW50ZXJuYWxcXChzZXRcXCkvLFxuICAnaW50ZXJuYWwnLFxuICAnaW4nLFxuICAnaXMnLCAvLyBvcGVyYXRvclxuICAnbGF6eScsIC8vIGNvbnRleHR1YWxcbiAgJ2xldCcsXG4gICdtdXRhdGluZycsIC8vIGNvbnRleHR1YWxcbiAgJ25vbm11dGF0aW5nJywgLy8gY29udGV4dHVhbFxuICAvb3BlblxcKHNldFxcKS8sIC8vIGNvbnRleHR1YWxcbiAgJ29wZW4nLCAvLyBjb250ZXh0dWFsXG4gICdvcGVyYXRvcicsXG4gICdvcHRpb25hbCcsIC8vIGNvbnRleHR1YWxcbiAgJ292ZXJyaWRlJywgLy8gY29udGV4dHVhbFxuICAncG9zdGZpeCcsIC8vIGNvbnRleHR1YWxcbiAgJ3ByZWNlZGVuY2Vncm91cCcsXG4gICdwcmVmaXgnLCAvLyBjb250ZXh0dWFsXG4gIC9wcml2YXRlXFwoc2V0XFwpLyxcbiAgJ3ByaXZhdGUnLFxuICAncHJvdG9jb2wnLFxuICAvcHVibGljXFwoc2V0XFwpLyxcbiAgJ3B1YmxpYycsXG4gICdyZXBlYXQnLFxuICAncmVxdWlyZWQnLCAvLyBjb250ZXh0dWFsXG4gICdyZXRocm93cycsXG4gICdyZXR1cm4nLFxuICAnc2V0JywgLy8gY29udGV4dHVhbFxuICAnc29tZScsIC8vIGNvbnRleHR1YWxcbiAgJ3N0YXRpYycsXG4gICdzdHJ1Y3QnLFxuICAnc3Vic2NyaXB0JyxcbiAgJ3N1cGVyJyxcbiAgJ3N3aXRjaCcsXG4gICd0aHJvd3MnLFxuICAndGhyb3cnLFxuICAvdHJ5XFw/LywgLy8gb3BlcmF0b3JcbiAgL3RyeSEvLCAvLyBvcGVyYXRvclxuICAndHJ5JywgLy8gb3BlcmF0b3JcbiAgJ3R5cGVhbGlhcycsXG4gIC91bm93bmVkXFwoc2FmZVxcKS8sIC8vIGNvbnRleHR1YWxcbiAgL3Vub3duZWRcXCh1bnNhZmVcXCkvLCAvLyBjb250ZXh0dWFsXG4gICd1bm93bmVkJywgLy8gY29udGV4dHVhbFxuICAndmFyJyxcbiAgJ3dlYWsnLCAvLyBjb250ZXh0dWFsXG4gICd3aGVyZScsXG4gICd3aGlsZScsXG4gICd3aWxsU2V0JyAvLyBjb250ZXh0dWFsXG5dO1xuXG4vLyBOT1RFOiBDb250ZXh0dWFsIGtleXdvcmRzIGFyZSByZXNlcnZlZCBvbmx5IGluIHNwZWNpZmljIGNvbnRleHRzLlxuLy8gSWRlYWxseSwgdGhlc2Ugc2hvdWxkIGJlIG1hdGNoZWQgdXNpbmcgbW9kZXMgdG8gYXZvaWQgZmFsc2UgcG9zaXRpdmVzLlxuXG4vLyBMaXRlcmFscy5cbmNvbnN0IGxpdGVyYWxzID0gW1xuICAnZmFsc2UnLFxuICAnbmlsJyxcbiAgJ3RydWUnXG5dO1xuXG4vLyBLZXl3b3JkcyB1c2VkIGluIHByZWNlZGVuY2UgZ3JvdXBzLlxuY29uc3QgcHJlY2VkZW5jZWdyb3VwS2V5d29yZHMgPSBbXG4gICdhc3NpZ25tZW50JyxcbiAgJ2Fzc29jaWF0aXZpdHknLFxuICAnaGlnaGVyVGhhbicsXG4gICdsZWZ0JyxcbiAgJ2xvd2VyVGhhbicsXG4gICdub25lJyxcbiAgJ3JpZ2h0J1xuXTtcblxuLy8gS2V5d29yZHMgdGhhdCBzdGFydCB3aXRoIGEgbnVtYmVyIHNpZ24gKCMpLlxuLy8gI2F2YWlsYWJsZSBpcyBoYW5kbGVkIHNlcGFyYXRlbHkuXG5jb25zdCBudW1iZXJTaWduS2V5d29yZHMgPSBbXG4gICcjY29sb3JMaXRlcmFsJyxcbiAgJyNjb2x1bW4nLFxuICAnI2Rzb2hhbmRsZScsXG4gICcjZWxzZScsXG4gICcjZWxzZWlmJyxcbiAgJyNlbmRpZicsXG4gICcjZXJyb3InLFxuICAnI2ZpbGUnLFxuICAnI2ZpbGVJRCcsXG4gICcjZmlsZUxpdGVyYWwnLFxuICAnI2ZpbGVQYXRoJyxcbiAgJyNmdW5jdGlvbicsXG4gICcjaWYnLFxuICAnI2ltYWdlTGl0ZXJhbCcsXG4gICcja2V5UGF0aCcsXG4gICcjbGluZScsXG4gICcjc2VsZWN0b3InLFxuICAnI3NvdXJjZUxvY2F0aW9uJyxcbiAgJyN3YXJuX3VucXVhbGlmaWVkX2FjY2VzcycsXG4gICcjd2FybmluZydcbl07XG5cbi8vIEdsb2JhbCBmdW5jdGlvbnMgaW4gdGhlIFN0YW5kYXJkIExpYnJhcnkuXG5jb25zdCBidWlsdElucyA9IFtcbiAgJ2FicycsXG4gICdhbGwnLFxuICAnYW55JyxcbiAgJ2Fzc2VydCcsXG4gICdhc3NlcnRpb25GYWlsdXJlJyxcbiAgJ2RlYnVnUHJpbnQnLFxuICAnZHVtcCcsXG4gICdmYXRhbEVycm9yJyxcbiAgJ2dldFZhTGlzdCcsXG4gICdpc0tub3duVW5pcXVlbHlSZWZlcmVuY2VkJyxcbiAgJ21heCcsXG4gICdtaW4nLFxuICAnbnVtZXJpY0Nhc3QnLFxuICAncG9pbnR3aXNlTWF4JyxcbiAgJ3BvaW50d2lzZU1pbicsXG4gICdwcmVjb25kaXRpb24nLFxuICAncHJlY29uZGl0aW9uRmFpbHVyZScsXG4gICdwcmludCcsXG4gICdyZWFkTGluZScsXG4gICdyZXBlYXRFbGVtZW50JyxcbiAgJ3NlcXVlbmNlJyxcbiAgJ3N0cmlkZScsXG4gICdzd2FwJyxcbiAgJ3N3aWZ0X3VuYm94RnJvbVN3aWZ0VmFsdWVXaXRoVHlwZScsXG4gICd0cmFuc2NvZGUnLFxuICAndHlwZScsXG4gICd1bnNhZmVCaXRDYXN0JyxcbiAgJ3Vuc2FmZURvd25jYXN0JyxcbiAgJ3dpdGhFeHRlbmRlZExpZmV0aW1lJyxcbiAgJ3dpdGhVbnNhZmVNdXRhYmxlUG9pbnRlcicsXG4gICd3aXRoVW5zYWZlUG9pbnRlcicsXG4gICd3aXRoVmFMaXN0JyxcbiAgJ3dpdGhvdXRBY3R1YWxseUVzY2FwaW5nJyxcbiAgJ3ppcCdcbl07XG5cbi8vIFZhbGlkIGZpcnN0IGNoYXJhY3RlcnMgZm9yIG9wZXJhdG9ycy5cbmNvbnN0IG9wZXJhdG9ySGVhZCA9IGVpdGhlcihcbiAgL1svPVxcLSshKiU8PiZ8Xn4/XS8sXG4gIC9bXFx1MDBBMS1cXHUwMEE3XS8sXG4gIC9bXFx1MDBBOVxcdTAwQUJdLyxcbiAgL1tcXHUwMEFDXFx1MDBBRV0vLFxuICAvW1xcdTAwQjBcXHUwMEIxXS8sXG4gIC9bXFx1MDBCNlxcdTAwQkJcXHUwMEJGXFx1MDBEN1xcdTAwRjddLyxcbiAgL1tcXHUyMDE2LVxcdTIwMTddLyxcbiAgL1tcXHUyMDIwLVxcdTIwMjddLyxcbiAgL1tcXHUyMDMwLVxcdTIwM0VdLyxcbiAgL1tcXHUyMDQxLVxcdTIwNTNdLyxcbiAgL1tcXHUyMDU1LVxcdTIwNUVdLyxcbiAgL1tcXHUyMTkwLVxcdTIzRkZdLyxcbiAgL1tcXHUyNTAwLVxcdTI3NzVdLyxcbiAgL1tcXHUyNzk0LVxcdTJCRkZdLyxcbiAgL1tcXHUyRTAwLVxcdTJFN0ZdLyxcbiAgL1tcXHUzMDAxLVxcdTMwMDNdLyxcbiAgL1tcXHUzMDA4LVxcdTMwMjBdLyxcbiAgL1tcXHUzMDMwXS9cbik7XG5cbi8vIFZhbGlkIGNoYXJhY3RlcnMgZm9yIG9wZXJhdG9ycy5cbmNvbnN0IG9wZXJhdG9yQ2hhcmFjdGVyID0gZWl0aGVyKFxuICBvcGVyYXRvckhlYWQsXG4gIC9bXFx1MDMwMC1cXHUwMzZGXS8sXG4gIC9bXFx1MURDMC1cXHUxREZGXS8sXG4gIC9bXFx1MjBEMC1cXHUyMEZGXS8sXG4gIC9bXFx1RkUwMC1cXHVGRTBGXS8sXG4gIC9bXFx1RkUyMC1cXHVGRTJGXS9cbiAgLy8gVE9ETzogVGhlIGZvbGxvd2luZyBjaGFyYWN0ZXJzIGFyZSBhbHNvIGFsbG93ZWQsIGJ1dCB0aGUgcmVnZXggaXNuJ3Qgc3VwcG9ydGVkIHlldC5cbiAgLy8gL1tcXHV7RTAxMDB9LVxcdXtFMDFFRn1dL3Vcbik7XG5cbi8vIFZhbGlkIG9wZXJhdG9yLlxuY29uc3Qgb3BlcmF0b3IgPSBjb25jYXQob3BlcmF0b3JIZWFkLCBvcGVyYXRvckNoYXJhY3RlciwgJyonKTtcblxuLy8gVmFsaWQgZmlyc3QgY2hhcmFjdGVycyBmb3IgaWRlbnRpZmllcnMuXG5jb25zdCBpZGVudGlmaWVySGVhZCA9IGVpdGhlcihcbiAgL1thLXpBLVpfXS8sXG4gIC9bXFx1MDBBOFxcdTAwQUFcXHUwMEFEXFx1MDBBRlxcdTAwQjItXFx1MDBCNVxcdTAwQjctXFx1MDBCQV0vLFxuICAvW1xcdTAwQkMtXFx1MDBCRVxcdTAwQzAtXFx1MDBENlxcdTAwRDgtXFx1MDBGNlxcdTAwRjgtXFx1MDBGRl0vLFxuICAvW1xcdTAxMDAtXFx1MDJGRlxcdTAzNzAtXFx1MTY3RlxcdTE2ODEtXFx1MTgwRFxcdTE4MEYtXFx1MURCRl0vLFxuICAvW1xcdTFFMDAtXFx1MUZGRl0vLFxuICAvW1xcdTIwMEItXFx1MjAwRFxcdTIwMkEtXFx1MjAyRVxcdTIwM0YtXFx1MjA0MFxcdTIwNTRcXHUyMDYwLVxcdTIwNkZdLyxcbiAgL1tcXHUyMDcwLVxcdTIwQ0ZcXHUyMTAwLVxcdTIxOEZcXHUyNDYwLVxcdTI0RkZcXHUyNzc2LVxcdTI3OTNdLyxcbiAgL1tcXHUyQzAwLVxcdTJERkZcXHUyRTgwLVxcdTJGRkZdLyxcbiAgL1tcXHUzMDA0LVxcdTMwMDdcXHUzMDIxLVxcdTMwMkZcXHUzMDMxLVxcdTMwM0ZcXHUzMDQwLVxcdUQ3RkZdLyxcbiAgL1tcXHVGOTAwLVxcdUZEM0RcXHVGRDQwLVxcdUZEQ0ZcXHVGREYwLVxcdUZFMUZcXHVGRTMwLVxcdUZFNDRdLyxcbiAgL1tcXHVGRTQ3LVxcdUZFRkVcXHVGRjAwLVxcdUZGRkRdLyAvLyBTaG91bGQgYmUgL1tcXHVGRTQ3LVxcdUZGRkRdLywgYnV0IHdlIGhhdmUgdG8gZXhjbHVkZSBGRUZGLlxuICAvLyBUaGUgZm9sbG93aW5nIGNoYXJhY3RlcnMgYXJlIGFsc28gYWxsb3dlZCwgYnV0IHRoZSByZWdleGVzIGFyZW4ndCBzdXBwb3J0ZWQgeWV0LlxuICAvLyAvW1xcdXsxMDAwMH0tXFx1ezFGRkZEfVxcdXsyMDAwMC1cXHV7MkZGRkR9XFx1ezMwMDAwfS1cXHV7M0ZGRkR9XFx1ezQwMDAwfS1cXHV7NEZGRkR9XS91LFxuICAvLyAvW1xcdXs1MDAwMH0tXFx1ezVGRkZEfVxcdXs2MDAwMC1cXHV7NkZGRkR9XFx1ezcwMDAwfS1cXHV7N0ZGRkR9XFx1ezgwMDAwfS1cXHV7OEZGRkR9XS91LFxuICAvLyAvW1xcdXs5MDAwMH0tXFx1ezlGRkZEfVxcdXtBMDAwMC1cXHV7QUZGRkR9XFx1e0IwMDAwfS1cXHV7QkZGRkR9XFx1e0MwMDAwfS1cXHV7Q0ZGRkR9XS91LFxuICAvLyAvW1xcdXtEMDAwMH0tXFx1e0RGRkZEfVxcdXtFMDAwMC1cXHV7RUZGRkR9XS91XG4pO1xuXG4vLyBWYWxpZCBjaGFyYWN0ZXJzIGZvciBpZGVudGlmaWVycy5cbmNvbnN0IGlkZW50aWZpZXJDaGFyYWN0ZXIgPSBlaXRoZXIoXG4gIGlkZW50aWZpZXJIZWFkLFxuICAvXFxkLyxcbiAgL1tcXHUwMzAwLVxcdTAzNkZcXHUxREMwLVxcdTFERkZcXHUyMEQwLVxcdTIwRkZcXHVGRTIwLVxcdUZFMkZdL1xuKTtcblxuLy8gVmFsaWQgaWRlbnRpZmllci5cbmNvbnN0IGlkZW50aWZpZXIgPSBjb25jYXQoaWRlbnRpZmllckhlYWQsIGlkZW50aWZpZXJDaGFyYWN0ZXIsICcqJyk7XG5cbi8vIFZhbGlkIHR5cGUgaWRlbnRpZmllci5cbmNvbnN0IHR5cGVJZGVudGlmaWVyID0gY29uY2F0KC9bQS1aXS8sIGlkZW50aWZpZXJDaGFyYWN0ZXIsICcqJyk7XG5cbi8vIEJ1aWx0LWluIGF0dHJpYnV0ZXMsIHdoaWNoIGFyZSBoaWdobGlnaHRlZCBhcyBrZXl3b3Jkcy5cbi8vIEBhdmFpbGFibGUgaXMgaGFuZGxlZCBzZXBhcmF0ZWx5LlxuY29uc3Qga2V5d29yZEF0dHJpYnV0ZXMgPSBbXG4gICdhdXRvY2xvc3VyZScsXG4gIGNvbmNhdCgvY29udmVudGlvblxcKC8sIGVpdGhlcignc3dpZnQnLCAnYmxvY2snLCAnYycpLCAvXFwpLyksXG4gICdkaXNjYXJkYWJsZVJlc3VsdCcsXG4gICdkeW5hbWljQ2FsbGFibGUnLFxuICAnZHluYW1pY01lbWJlckxvb2t1cCcsXG4gICdlc2NhcGluZycsXG4gICdmcm96ZW4nLFxuICAnR0tJbnNwZWN0YWJsZScsXG4gICdJQkFjdGlvbicsXG4gICdJQkRlc2lnbmFibGUnLFxuICAnSUJJbnNwZWN0YWJsZScsXG4gICdJQk91dGxldCcsXG4gICdJQlNlZ3VlQWN0aW9uJyxcbiAgJ2lubGluYWJsZScsXG4gICdtYWluJyxcbiAgJ25vbm9iamMnLFxuICAnTlNBcHBsaWNhdGlvbk1haW4nLFxuICAnTlNDb3B5aW5nJyxcbiAgJ05TTWFuYWdlZCcsXG4gIGNvbmNhdCgvb2JqY1xcKC8sIGlkZW50aWZpZXIsIC9cXCkvKSxcbiAgJ29iamMnLFxuICAnb2JqY01lbWJlcnMnLFxuICAncHJvcGVydHlXcmFwcGVyJyxcbiAgJ3JlcXVpcmVzX3N0b3JlZF9wcm9wZXJ0eV9pbml0cycsXG4gICd0ZXN0YWJsZScsXG4gICdVSUFwcGxpY2F0aW9uTWFpbicsXG4gICd1bmtub3duJyxcbiAgJ3VzYWJsZUZyb21JbmxpbmUnXG5dO1xuXG4vLyBDb250ZXh0dWFsIGtleXdvcmRzIHVzZWQgaW4gQGF2YWlsYWJsZSBhbmQgI2F2YWlsYWJsZS5cbmNvbnN0IGF2YWlsYWJpbGl0eUtleXdvcmRzID0gW1xuICAnaU9TJyxcbiAgJ2lPU0FwcGxpY2F0aW9uRXh0ZW5zaW9uJyxcbiAgJ21hY09TJyxcbiAgJ21hY09TQXBwbGljYXRpb25FeHRlbnNpb24nLFxuICAnbWFjQ2F0YWx5c3QnLFxuICAnbWFjQ2F0YWx5c3RBcHBsaWNhdGlvbkV4dGVuc2lvbicsXG4gICd3YXRjaE9TJyxcbiAgJ3dhdGNoT1NBcHBsaWNhdGlvbkV4dGVuc2lvbicsXG4gICd0dk9TJyxcbiAgJ3R2T1NBcHBsaWNhdGlvbkV4dGVuc2lvbicsXG4gICdzd2lmdCdcbl07XG5cbi8qXG5MYW5ndWFnZTogU3dpZnRcbkRlc2NyaXB0aW9uOiBTd2lmdCBpcyBhIGdlbmVyYWwtcHVycG9zZSBwcm9ncmFtbWluZyBsYW5ndWFnZSBidWlsdCB1c2luZyBhIG1vZGVybiBhcHByb2FjaCB0byBzYWZldHksIHBlcmZvcm1hbmNlLCBhbmQgc29mdHdhcmUgZGVzaWduIHBhdHRlcm5zLlxuQXV0aG9yOiBTdGV2ZW4gVmFuIEltcGUgPHN0ZXZlbi52YW5pbXBlQGljbG91ZC5jb20+XG5Db250cmlidXRvcnM6IENocmlzIEVpZGhvZiA8Y2hyaXNAZWlkaG9mLm5sPiwgTmF0ZSBDb29rIDxuYXRlY29va0BnbWFpbC5jb20+LCBBbGV4YW5kZXIgTGljaHRlciA8bWFubmlMQGdteC5uZXQ+LCBSaWNoYXJkIEdpYnNvbiA8Z2lic29uMDQyQGdpdGh1Yj5cbldlYnNpdGU6IGh0dHBzOi8vc3dpZnQub3JnXG5DYXRlZ29yeTogY29tbW9uLCBzeXN0ZW1cbiovXG5cbi8qKiBAdHlwZSBMYW5ndWFnZUZuICovXG5mdW5jdGlvbiBzd2lmdChobGpzKSB7XG4gIGNvbnN0IFdISVRFU1BBQ0UgPSB7XG4gICAgbWF0Y2g6IC9cXHMrLyxcbiAgICByZWxldmFuY2U6IDBcbiAgfTtcbiAgLy8gaHR0cHM6Ly9kb2NzLnN3aWZ0Lm9yZy9zd2lmdC1ib29rL1JlZmVyZW5jZU1hbnVhbC9MZXhpY2FsU3RydWN0dXJlLmh0bWwjSUQ0MTFcbiAgY29uc3QgQkxPQ0tfQ09NTUVOVCA9IGhsanMuQ09NTUVOVChcbiAgICAnL1xcXFwqJyxcbiAgICAnXFxcXCovJyxcbiAgICB7XG4gICAgICBjb250YWluczogWyAnc2VsZicgXVxuICAgIH1cbiAgKTtcbiAgY29uc3QgQ09NTUVOVFMgPSBbXG4gICAgaGxqcy5DX0xJTkVfQ09NTUVOVF9NT0RFLFxuICAgIEJMT0NLX0NPTU1FTlRcbiAgXTtcblxuICAvLyBodHRwczovL2RvY3Muc3dpZnQub3JnL3N3aWZ0LWJvb2svUmVmZXJlbmNlTWFudWFsL0xleGljYWxTdHJ1Y3R1cmUuaHRtbCNJRDQxM1xuICAvLyBodHRwczovL2RvY3Muc3dpZnQub3JnL3N3aWZ0LWJvb2svUmVmZXJlbmNlTWFudWFsL3p6U3VtbWFyeU9mVGhlR3JhbW1hci5odG1sXG4gIGNvbnN0IERPVF9LRVlXT1JEID0ge1xuICAgIGNsYXNzTmFtZTogJ2tleXdvcmQnLFxuICAgIGJlZ2luOiBjb25jYXQoL1xcLi8sIGxvb2thaGVhZChlaXRoZXIoLi4uZG90S2V5d29yZHMsIC4uLm9wdGlvbmFsRG90S2V5d29yZHMpKSksXG4gICAgZW5kOiBlaXRoZXIoLi4uZG90S2V5d29yZHMsIC4uLm9wdGlvbmFsRG90S2V5d29yZHMpLFxuICAgIGV4Y2x1ZGVCZWdpbjogdHJ1ZVxuICB9O1xuICBjb25zdCBLRVlXT1JEX0dVQVJEID0ge1xuICAgIC8vIENvbnN1bWUgLmtleXdvcmQgdG8gcHJldmVudCBoaWdobGlnaHRpbmcgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBhcyBrZXl3b3Jkcy5cbiAgICBtYXRjaDogY29uY2F0KC9cXC4vLCBlaXRoZXIoLi4ua2V5d29yZHMpKSxcbiAgICByZWxldmFuY2U6IDBcbiAgfTtcbiAgY29uc3QgUExBSU5fS0VZV09SRFMgPSBrZXl3b3Jkc1xuICAgIC5maWx0ZXIoa3cgPT4gdHlwZW9mIGt3ID09PSAnc3RyaW5nJylcbiAgICAuY29uY2F0KFsgXCJffDBcIiBdKTsgLy8gc2VlbXMgY29tbW9uLCBzbyAwIHJlbGV2YW5jZVxuICBjb25zdCBSRUdFWF9LRVlXT1JEUyA9IGtleXdvcmRzXG4gICAgLmZpbHRlcihrdyA9PiB0eXBlb2Yga3cgIT09ICdzdHJpbmcnKSAvLyBmaW5kIHJlZ2V4XG4gICAgLmNvbmNhdChrZXl3b3JkVHlwZXMpXG4gICAgLm1hcChrZXl3b3JkV3JhcHBlcik7XG4gIGNvbnN0IEtFWVdPUkQgPSB7XG4gICAgdmFyaWFudHM6IFtcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAna2V5d29yZCcsXG4gICAgICAgIG1hdGNoOiBlaXRoZXIoLi4uUkVHRVhfS0VZV09SRFMsIC4uLm9wdGlvbmFsRG90S2V5d29yZHMpXG4gICAgICB9XG4gICAgXVxuICB9O1xuICAvLyBmaW5kIGFsbCB0aGUgcmVndWxhciBrZXl3b3Jkc1xuICBjb25zdCBLRVlXT1JEUyA9IHtcbiAgICAkcGF0dGVybjogZWl0aGVyKFxuICAgICAgL1xcYlxcdysvLCAvLyByZWd1bGFyIGtleXdvcmRzXG4gICAgICAvI1xcdysvIC8vIG51bWJlciBrZXl3b3Jkc1xuICAgICksXG4gICAga2V5d29yZDogUExBSU5fS0VZV09SRFNcbiAgICAgIC5jb25jYXQobnVtYmVyU2lnbktleXdvcmRzKSxcbiAgICBsaXRlcmFsOiBsaXRlcmFsc1xuICB9O1xuICBjb25zdCBLRVlXT1JEX01PREVTID0gW1xuICAgIERPVF9LRVlXT1JELFxuICAgIEtFWVdPUkRfR1VBUkQsXG4gICAgS0VZV09SRFxuICBdO1xuXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hcHBsZS9zd2lmdC90cmVlL21haW4vc3RkbGliL3B1YmxpYy9jb3JlXG4gIGNvbnN0IEJVSUxUX0lOX0dVQVJEID0ge1xuICAgIC8vIENvbnN1bWUgLmJ1aWx0X2luIHRvIHByZXZlbnQgaGlnaGxpZ2h0aW5nIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMuXG4gICAgbWF0Y2g6IGNvbmNhdCgvXFwuLywgZWl0aGVyKC4uLmJ1aWx0SW5zKSksXG4gICAgcmVsZXZhbmNlOiAwXG4gIH07XG4gIGNvbnN0IEJVSUxUX0lOID0ge1xuICAgIGNsYXNzTmFtZTogJ2J1aWx0X2luJyxcbiAgICBtYXRjaDogY29uY2F0KC9cXGIvLCBlaXRoZXIoLi4uYnVpbHRJbnMpLCAvKD89XFwoKS8pXG4gIH07XG4gIGNvbnN0IEJVSUxUX0lOUyA9IFtcbiAgICBCVUlMVF9JTl9HVUFSRCxcbiAgICBCVUlMVF9JTlxuICBdO1xuXG4gIC8vIGh0dHBzOi8vZG9jcy5zd2lmdC5vcmcvc3dpZnQtYm9vay9SZWZlcmVuY2VNYW51YWwvTGV4aWNhbFN0cnVjdHVyZS5odG1sI0lENDE4XG4gIGNvbnN0IE9QRVJBVE9SX0dVQVJEID0ge1xuICAgIC8vIFByZXZlbnQgLT4gZnJvbSBiZWluZyBoaWdobGlnaHRpbmcgYXMgYW4gb3BlcmF0b3IuXG4gICAgbWF0Y2g6IC8tPi8sXG4gICAgcmVsZXZhbmNlOiAwXG4gIH07XG4gIGNvbnN0IE9QRVJBVE9SID0ge1xuICAgIGNsYXNzTmFtZTogJ29wZXJhdG9yJyxcbiAgICByZWxldmFuY2U6IDAsXG4gICAgdmFyaWFudHM6IFtcbiAgICAgIHtcbiAgICAgICAgbWF0Y2g6IG9wZXJhdG9yXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAvLyBkb3Qtb3BlcmF0b3I6IG9ubHkgb3BlcmF0b3JzIHRoYXQgc3RhcnQgd2l0aCBhIGRvdCBhcmUgYWxsb3dlZCB0byB1c2UgZG90cyBhc1xuICAgICAgICAvLyBjaGFyYWN0ZXJzICguLi4sIC4uLjwsIC4qLCBldGMpLiBTbyB0aGVyZSBydWxlIGhlcmUgaXM6IGEgZG90IGZvbGxvd2VkIGJ5IG9uZSBvciBtb3JlXG4gICAgICAgIC8vIGNoYXJhY3RlcnMgdGhhdCBtYXkgYWxzbyBpbmNsdWRlIGRvdHMuXG4gICAgICAgIG1hdGNoOiBgXFxcXC4oXFxcXC58JHtvcGVyYXRvckNoYXJhY3Rlcn0pK2BcbiAgICAgIH1cbiAgICBdXG4gIH07XG4gIGNvbnN0IE9QRVJBVE9SUyA9IFtcbiAgICBPUEVSQVRPUl9HVUFSRCxcbiAgICBPUEVSQVRPUlxuICBdO1xuXG4gIC8vIGh0dHBzOi8vZG9jcy5zd2lmdC5vcmcvc3dpZnQtYm9vay9SZWZlcmVuY2VNYW51YWwvTGV4aWNhbFN0cnVjdHVyZS5odG1sI2dyYW1tYXJfbnVtZXJpYy1saXRlcmFsXG4gIC8vIFRPRE86IFVwZGF0ZSBmb3IgbGVhZGluZyBgLWAgYWZ0ZXIgbG9va2JlaGluZCBpcyBzdXBwb3J0ZWQgZXZlcnl3aGVyZVxuICBjb25zdCBkZWNpbWFsRGlnaXRzID0gJyhbMC05XV8qKSsnO1xuICBjb25zdCBoZXhEaWdpdHMgPSAnKFswLTlhLWZBLUZdXyopKyc7XG4gIGNvbnN0IE5VTUJFUiA9IHtcbiAgICBjbGFzc05hbWU6ICdudW1iZXInLFxuICAgIHJlbGV2YW5jZTogMCxcbiAgICB2YXJpYW50czogW1xuICAgICAgLy8gZGVjaW1hbCBmbG9hdGluZy1wb2ludC1saXRlcmFsIChzdWJzdW1lcyBkZWNpbWFsLWxpdGVyYWwpXG4gICAgICB7XG4gICAgICAgIG1hdGNoOiBgXFxcXGIoJHtkZWNpbWFsRGlnaXRzfSkoXFxcXC4oJHtkZWNpbWFsRGlnaXRzfSkpP2AgKyBgKFtlRV1bKy1dPygke2RlY2ltYWxEaWdpdHN9KSk/XFxcXGJgXG4gICAgICB9LFxuICAgICAgLy8gaGV4YWRlY2ltYWwgZmxvYXRpbmctcG9pbnQtbGl0ZXJhbCAoc3Vic3VtZXMgaGV4YWRlY2ltYWwtbGl0ZXJhbClcbiAgICAgIHtcbiAgICAgICAgbWF0Y2g6IGBcXFxcYjB4KCR7aGV4RGlnaXRzfSkoXFxcXC4oJHtoZXhEaWdpdHN9KSk/YCArIGAoW3BQXVsrLV0/KCR7ZGVjaW1hbERpZ2l0c30pKT9cXFxcYmBcbiAgICAgIH0sXG4gICAgICAvLyBvY3RhbC1saXRlcmFsXG4gICAgICB7XG4gICAgICAgIG1hdGNoOiAvXFxiMG8oWzAtN11fKikrXFxiL1xuICAgICAgfSxcbiAgICAgIC8vIGJpbmFyeS1saXRlcmFsXG4gICAgICB7XG4gICAgICAgIG1hdGNoOiAvXFxiMGIoWzAxXV8qKStcXGIvXG4gICAgICB9XG4gICAgXVxuICB9O1xuXG4gIC8vIGh0dHBzOi8vZG9jcy5zd2lmdC5vcmcvc3dpZnQtYm9vay9SZWZlcmVuY2VNYW51YWwvTGV4aWNhbFN0cnVjdHVyZS5odG1sI2dyYW1tYXJfc3RyaW5nLWxpdGVyYWxcbiAgY29uc3QgRVNDQVBFRF9DSEFSQUNURVIgPSAocmF3RGVsaW1pdGVyID0gXCJcIikgPT4gKHtcbiAgICBjbGFzc05hbWU6ICdzdWJzdCcsXG4gICAgdmFyaWFudHM6IFtcbiAgICAgIHtcbiAgICAgICAgbWF0Y2g6IGNvbmNhdCgvXFxcXC8sIHJhd0RlbGltaXRlciwgL1swXFxcXHRuclwiJ10vKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbWF0Y2g6IGNvbmNhdCgvXFxcXC8sIHJhd0RlbGltaXRlciwgL3VcXHtbMC05YS1mQS1GXXsxLDh9XFx9LylcbiAgICAgIH1cbiAgICBdXG4gIH0pO1xuICBjb25zdCBFU0NBUEVEX05FV0xJTkUgPSAocmF3RGVsaW1pdGVyID0gXCJcIikgPT4gKHtcbiAgICBjbGFzc05hbWU6ICdzdWJzdCcsXG4gICAgbWF0Y2g6IGNvbmNhdCgvXFxcXC8sIHJhd0RlbGltaXRlciwgL1tcXHQgXSooPzpbXFxyXFxuXXxcXHJcXG4pLylcbiAgfSk7XG4gIGNvbnN0IElOVEVSUE9MQVRJT04gPSAocmF3RGVsaW1pdGVyID0gXCJcIikgPT4gKHtcbiAgICBjbGFzc05hbWU6ICdzdWJzdCcsXG4gICAgbGFiZWw6IFwiaW50ZXJwb2xcIixcbiAgICBiZWdpbjogY29uY2F0KC9cXFxcLywgcmF3RGVsaW1pdGVyLCAvXFwoLyksXG4gICAgZW5kOiAvXFwpL1xuICB9KTtcbiAgY29uc3QgTVVMVElMSU5FX1NUUklORyA9IChyYXdEZWxpbWl0ZXIgPSBcIlwiKSA9PiAoe1xuICAgIGJlZ2luOiBjb25jYXQocmF3RGVsaW1pdGVyLCAvXCJcIlwiLyksXG4gICAgZW5kOiBjb25jYXQoL1wiXCJcIi8sIHJhd0RlbGltaXRlciksXG4gICAgY29udGFpbnM6IFtcbiAgICAgIEVTQ0FQRURfQ0hBUkFDVEVSKHJhd0RlbGltaXRlciksXG4gICAgICBFU0NBUEVEX05FV0xJTkUocmF3RGVsaW1pdGVyKSxcbiAgICAgIElOVEVSUE9MQVRJT04ocmF3RGVsaW1pdGVyKVxuICAgIF1cbiAgfSk7XG4gIGNvbnN0IFNJTkdMRV9MSU5FX1NUUklORyA9IChyYXdEZWxpbWl0ZXIgPSBcIlwiKSA9PiAoe1xuICAgIGJlZ2luOiBjb25jYXQocmF3RGVsaW1pdGVyLCAvXCIvKSxcbiAgICBlbmQ6IGNvbmNhdCgvXCIvLCByYXdEZWxpbWl0ZXIpLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBFU0NBUEVEX0NIQVJBQ1RFUihyYXdEZWxpbWl0ZXIpLFxuICAgICAgSU5URVJQT0xBVElPTihyYXdEZWxpbWl0ZXIpXG4gICAgXVxuICB9KTtcbiAgY29uc3QgU1RSSU5HID0ge1xuICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgdmFyaWFudHM6IFtcbiAgICAgIE1VTFRJTElORV9TVFJJTkcoKSxcbiAgICAgIE1VTFRJTElORV9TVFJJTkcoXCIjXCIpLFxuICAgICAgTVVMVElMSU5FX1NUUklORyhcIiMjXCIpLFxuICAgICAgTVVMVElMSU5FX1NUUklORyhcIiMjI1wiKSxcbiAgICAgIFNJTkdMRV9MSU5FX1NUUklORygpLFxuICAgICAgU0lOR0xFX0xJTkVfU1RSSU5HKFwiI1wiKSxcbiAgICAgIFNJTkdMRV9MSU5FX1NUUklORyhcIiMjXCIpLFxuICAgICAgU0lOR0xFX0xJTkVfU1RSSU5HKFwiIyMjXCIpXG4gICAgXVxuICB9O1xuXG4gIC8vIGh0dHBzOi8vZG9jcy5zd2lmdC5vcmcvc3dpZnQtYm9vay9SZWZlcmVuY2VNYW51YWwvTGV4aWNhbFN0cnVjdHVyZS5odG1sI0lENDEyXG4gIGNvbnN0IFFVT1RFRF9JREVOVElGSUVSID0ge1xuICAgIG1hdGNoOiBjb25jYXQoL2AvLCBpZGVudGlmaWVyLCAvYC8pXG4gIH07XG4gIGNvbnN0IElNUExJQ0lUX1BBUkFNRVRFUiA9IHtcbiAgICBjbGFzc05hbWU6ICd2YXJpYWJsZScsXG4gICAgbWF0Y2g6IC9cXCRcXGQrL1xuICB9O1xuICBjb25zdCBQUk9QRVJUWV9XUkFQUEVSX1BST0pFQ1RJT04gPSB7XG4gICAgY2xhc3NOYW1lOiAndmFyaWFibGUnLFxuICAgIG1hdGNoOiBgXFxcXCQke2lkZW50aWZpZXJDaGFyYWN0ZXJ9K2BcbiAgfTtcbiAgY29uc3QgSURFTlRJRklFUlMgPSBbXG4gICAgUVVPVEVEX0lERU5USUZJRVIsXG4gICAgSU1QTElDSVRfUEFSQU1FVEVSLFxuICAgIFBST1BFUlRZX1dSQVBQRVJfUFJPSkVDVElPTlxuICBdO1xuXG4gIC8vIGh0dHBzOi8vZG9jcy5zd2lmdC5vcmcvc3dpZnQtYm9vay9SZWZlcmVuY2VNYW51YWwvQXR0cmlidXRlcy5odG1sXG4gIGNvbnN0IEFWQUlMQUJMRV9BVFRSSUJVVEUgPSB7XG4gICAgbWF0Y2g6IC8oQHwjKWF2YWlsYWJsZS8sXG4gICAgY2xhc3NOYW1lOiBcImtleXdvcmRcIixcbiAgICBzdGFydHM6IHtcbiAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBiZWdpbjogL1xcKC8sXG4gICAgICAgICAgZW5kOiAvXFwpLyxcbiAgICAgICAgICBrZXl3b3JkczogYXZhaWxhYmlsaXR5S2V5d29yZHMsXG4gICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgIC4uLk9QRVJBVE9SUyxcbiAgICAgICAgICAgIE5VTUJFUixcbiAgICAgICAgICAgIFNUUklOR1xuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgfTtcbiAgY29uc3QgS0VZV09SRF9BVFRSSUJVVEUgPSB7XG4gICAgY2xhc3NOYW1lOiAna2V5d29yZCcsXG4gICAgbWF0Y2g6IGNvbmNhdCgvQC8sIGVpdGhlciguLi5rZXl3b3JkQXR0cmlidXRlcykpXG4gIH07XG4gIGNvbnN0IFVTRVJfREVGSU5FRF9BVFRSSUJVVEUgPSB7XG4gICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgbWF0Y2g6IGNvbmNhdCgvQC8sIGlkZW50aWZpZXIpXG4gIH07XG4gIGNvbnN0IEFUVFJJQlVURVMgPSBbXG4gICAgQVZBSUxBQkxFX0FUVFJJQlVURSxcbiAgICBLRVlXT1JEX0FUVFJJQlVURSxcbiAgICBVU0VSX0RFRklORURfQVRUUklCVVRFXG4gIF07XG5cbiAgLy8gaHR0cHM6Ly9kb2NzLnN3aWZ0Lm9yZy9zd2lmdC1ib29rL1JlZmVyZW5jZU1hbnVhbC9UeXBlcy5odG1sXG4gIGNvbnN0IFRZUEUgPSB7XG4gICAgbWF0Y2g6IGxvb2thaGVhZCgvXFxiW0EtWl0vKSxcbiAgICByZWxldmFuY2U6IDAsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIHsgLy8gQ29tbW9uIEFwcGxlIGZyYW1ld29ya3MsIGZvciByZWxldmFuY2UgYm9vc3RcbiAgICAgICAgY2xhc3NOYW1lOiAndHlwZScsXG4gICAgICAgIG1hdGNoOiBjb25jYXQoLyhBVnxDQXxDRnxDR3xDSXxDTHxDTXxDTnxDVHxNS3xNUHxNVEt8TVRMfE5TfFNDTnxTS3xVSXxXS3xYQykvLCBpZGVudGlmaWVyQ2hhcmFjdGVyLCAnKycpXG4gICAgICB9LFxuICAgICAgeyAvLyBUeXBlIGlkZW50aWZpZXJcbiAgICAgICAgY2xhc3NOYW1lOiAndHlwZScsXG4gICAgICAgIG1hdGNoOiB0eXBlSWRlbnRpZmllcixcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuICAgICAgeyAvLyBPcHRpb25hbCB0eXBlXG4gICAgICAgIG1hdGNoOiAvWz8hXSsvLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICB7IC8vIFZhcmlhZGljIHBhcmFtZXRlclxuICAgICAgICBtYXRjaDogL1xcLlxcLlxcLi8sXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIHsgLy8gUHJvdG9jb2wgY29tcG9zaXRpb25cbiAgICAgICAgbWF0Y2g6IGNvbmNhdCgvXFxzKyZcXHMrLywgbG9va2FoZWFkKHR5cGVJZGVudGlmaWVyKSksXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfVxuICAgIF1cbiAgfTtcbiAgY29uc3QgR0VORVJJQ19BUkdVTUVOVFMgPSB7XG4gICAgYmVnaW46IC88LyxcbiAgICBlbmQ6IC8+LyxcbiAgICBrZXl3b3JkczogS0VZV09SRFMsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIC4uLkNPTU1FTlRTLFxuICAgICAgLi4uS0VZV09SRF9NT0RFUyxcbiAgICAgIC4uLkFUVFJJQlVURVMsXG4gICAgICBPUEVSQVRPUl9HVUFSRCxcbiAgICAgIFRZUEVcbiAgICBdXG4gIH07XG4gIFRZUEUuY29udGFpbnMucHVzaChHRU5FUklDX0FSR1VNRU5UUyk7XG5cbiAgLy8gaHR0cHM6Ly9kb2NzLnN3aWZ0Lm9yZy9zd2lmdC1ib29rL1JlZmVyZW5jZU1hbnVhbC9FeHByZXNzaW9ucy5odG1sI0lENTUyXG4gIC8vIFByZXZlbnRzIGVsZW1lbnQgbmFtZXMgZnJvbSBiZWluZyBoaWdobGlnaHRlZCBhcyBrZXl3b3Jkcy5cbiAgY29uc3QgVFVQTEVfRUxFTUVOVF9OQU1FID0ge1xuICAgIG1hdGNoOiBjb25jYXQoaWRlbnRpZmllciwgL1xccyo6LyksXG4gICAga2V5d29yZHM6IFwiX3wwXCIsXG4gICAgcmVsZXZhbmNlOiAwXG4gIH07XG4gIC8vIE1hdGNoZXMgdHVwbGVzIGFzIHdlbGwgYXMgdGhlIHBhcmFtZXRlciBsaXN0IG9mIGEgZnVuY3Rpb24gdHlwZS5cbiAgY29uc3QgVFVQTEUgPSB7XG4gICAgYmVnaW46IC9cXCgvLFxuICAgIGVuZDogL1xcKS8sXG4gICAgcmVsZXZhbmNlOiAwLFxuICAgIGtleXdvcmRzOiBLRVlXT1JEUyxcbiAgICBjb250YWluczogW1xuICAgICAgJ3NlbGYnLFxuICAgICAgVFVQTEVfRUxFTUVOVF9OQU1FLFxuICAgICAgLi4uQ09NTUVOVFMsXG4gICAgICAuLi5LRVlXT1JEX01PREVTLFxuICAgICAgLi4uQlVJTFRfSU5TLFxuICAgICAgLi4uT1BFUkFUT1JTLFxuICAgICAgTlVNQkVSLFxuICAgICAgU1RSSU5HLFxuICAgICAgLi4uSURFTlRJRklFUlMsXG4gICAgICAuLi5BVFRSSUJVVEVTLFxuICAgICAgVFlQRVxuICAgIF1cbiAgfTtcblxuICAvLyBodHRwczovL2RvY3Muc3dpZnQub3JnL3N3aWZ0LWJvb2svUmVmZXJlbmNlTWFudWFsL0RlY2xhcmF0aW9ucy5odG1sI0lEMzYyXG4gIC8vIE1hdGNoZXMgYm90aCB0aGUga2V5d29yZCBmdW5jIGFuZCB0aGUgZnVuY3Rpb24gdGl0bGUuXG4gIC8vIEdyb3VwaW5nIHRoZXNlIGxldHMgdXMgZGlmZmVyZW50aWF0ZSBiZXR3ZWVuIHRoZSBvcGVyYXRvciBmdW5jdGlvbiA8XG4gIC8vIGFuZCB0aGUgc3RhcnQgb2YgdGhlIGdlbmVyaWMgcGFyYW1ldGVyIGNsYXVzZSAoYWxzbyA8KS5cbiAgY29uc3QgRlVOQ19QTFVTX1RJVExFID0ge1xuICAgIGJlZ2luS2V5d29yZHM6ICdmdW5jJyxcbiAgICBjb250YWluczogW1xuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICd0aXRsZScsXG4gICAgICAgIG1hdGNoOiBlaXRoZXIoUVVPVEVEX0lERU5USUZJRVIubWF0Y2gsIGlkZW50aWZpZXIsIG9wZXJhdG9yKSxcbiAgICAgICAgLy8gUmVxdWlyZWQgdG8gbWFrZSBzdXJlIHRoZSBvcGVuaW5nIDwgb2YgdGhlIGdlbmVyaWMgcGFyYW1ldGVyIGNsYXVzZVxuICAgICAgICAvLyBpc24ndCBwYXJzZWQgYXMgYSBzZWNvbmQgdGl0bGUuXG4gICAgICAgIGVuZHNQYXJlbnQ6IHRydWUsXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIFdISVRFU1BBQ0VcbiAgICBdXG4gIH07XG4gIGNvbnN0IEdFTkVSSUNfUEFSQU1FVEVSUyA9IHtcbiAgICBiZWdpbjogLzwvLFxuICAgIGVuZDogLz4vLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICAuLi5DT01NRU5UUyxcbiAgICAgIFRZUEVcbiAgICBdXG4gIH07XG4gIGNvbnN0IEZVTkNUSU9OX1BBUkFNRVRFUl9OQU1FID0ge1xuICAgIGJlZ2luOiBlaXRoZXIoXG4gICAgICBsb29rYWhlYWQoY29uY2F0KGlkZW50aWZpZXIsIC9cXHMqOi8pKSxcbiAgICAgIGxvb2thaGVhZChjb25jYXQoaWRlbnRpZmllciwgL1xccysvLCBpZGVudGlmaWVyLCAvXFxzKjovKSlcbiAgICApLFxuICAgIGVuZDogLzovLFxuICAgIHJlbGV2YW5jZTogMCxcbiAgICBjb250YWluczogW1xuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdrZXl3b3JkJyxcbiAgICAgICAgbWF0Y2g6IC9cXGJfXFxiL1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAncGFyYW1zJyxcbiAgICAgICAgbWF0Y2g6IGlkZW50aWZpZXJcbiAgICAgIH1cbiAgICBdXG4gIH07XG4gIGNvbnN0IEZVTkNUSU9OX1BBUkFNRVRFUlMgPSB7XG4gICAgYmVnaW46IC9cXCgvLFxuICAgIGVuZDogL1xcKS8sXG4gICAga2V5d29yZHM6IEtFWVdPUkRTLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBGVU5DVElPTl9QQVJBTUVURVJfTkFNRSxcbiAgICAgIC4uLkNPTU1FTlRTLFxuICAgICAgLi4uS0VZV09SRF9NT0RFUyxcbiAgICAgIC4uLk9QRVJBVE9SUyxcbiAgICAgIE5VTUJFUixcbiAgICAgIFNUUklORyxcbiAgICAgIC4uLkFUVFJJQlVURVMsXG4gICAgICBUWVBFLFxuICAgICAgVFVQTEVcbiAgICBdLFxuICAgIGVuZHNQYXJlbnQ6IHRydWUsXG4gICAgaWxsZWdhbDogL1tcIiddL1xuICB9O1xuICBjb25zdCBGVU5DVElPTiA9IHtcbiAgICBjbGFzc05hbWU6ICdmdW5jdGlvbicsXG4gICAgbWF0Y2g6IGxvb2thaGVhZCgvXFxiZnVuY1xcYi8pLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBGVU5DX1BMVVNfVElUTEUsXG4gICAgICBHRU5FUklDX1BBUkFNRVRFUlMsXG4gICAgICBGVU5DVElPTl9QQVJBTUVURVJTLFxuICAgICAgV0hJVEVTUEFDRVxuICAgIF0sXG4gICAgaWxsZWdhbDogW1xuICAgICAgL1xcWy8sXG4gICAgICAvJS9cbiAgICBdXG4gIH07XG5cbiAgLy8gaHR0cHM6Ly9kb2NzLnN3aWZ0Lm9yZy9zd2lmdC1ib29rL1JlZmVyZW5jZU1hbnVhbC9EZWNsYXJhdGlvbnMuaHRtbCNJRDM3NVxuICAvLyBodHRwczovL2RvY3Muc3dpZnQub3JnL3N3aWZ0LWJvb2svUmVmZXJlbmNlTWFudWFsL0RlY2xhcmF0aW9ucy5odG1sI0lEMzc5XG4gIGNvbnN0IElOSVRfU1VCU0NSSVBUID0ge1xuICAgIGNsYXNzTmFtZTogJ2Z1bmN0aW9uJyxcbiAgICBtYXRjaDogL1xcYihzdWJzY3JpcHR8aW5pdFs/IV0/KVxccyooPz1bPChdKS8sXG4gICAga2V5d29yZHM6IHtcbiAgICAgIGtleXdvcmQ6IFwic3Vic2NyaXB0IGluaXQgaW5pdD8gaW5pdCFcIixcbiAgICAgICRwYXR0ZXJuOiAvXFx3K1s/IV0/L1xuICAgIH0sXG4gICAgY29udGFpbnM6IFtcbiAgICAgIEdFTkVSSUNfUEFSQU1FVEVSUyxcbiAgICAgIEZVTkNUSU9OX1BBUkFNRVRFUlMsXG4gICAgICBXSElURVNQQUNFXG4gICAgXSxcbiAgICBpbGxlZ2FsOiAvXFxbfCUvXG4gIH07XG4gIC8vIGh0dHBzOi8vZG9jcy5zd2lmdC5vcmcvc3dpZnQtYm9vay9SZWZlcmVuY2VNYW51YWwvRGVjbGFyYXRpb25zLmh0bWwjSUQzODBcbiAgY29uc3QgT1BFUkFUT1JfREVDTEFSQVRJT04gPSB7XG4gICAgYmVnaW5LZXl3b3JkczogJ29wZXJhdG9yJyxcbiAgICBlbmQ6IGhsanMuTUFUQ0hfTk9USElOR19SRSxcbiAgICBjb250YWluczogW1xuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICd0aXRsZScsXG4gICAgICAgIG1hdGNoOiBvcGVyYXRvcixcbiAgICAgICAgZW5kc1BhcmVudDogdHJ1ZSxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9XG4gICAgXVxuICB9O1xuXG4gIC8vIGh0dHBzOi8vZG9jcy5zd2lmdC5vcmcvc3dpZnQtYm9vay9SZWZlcmVuY2VNYW51YWwvRGVjbGFyYXRpb25zLmh0bWwjSUQ1NTBcbiAgY29uc3QgUFJFQ0VERU5DRUdST1VQID0ge1xuICAgIGJlZ2luS2V5d29yZHM6ICdwcmVjZWRlbmNlZ3JvdXAnLFxuICAgIGVuZDogaGxqcy5NQVRDSF9OT1RISU5HX1JFLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3RpdGxlJyxcbiAgICAgICAgbWF0Y2g6IHR5cGVJZGVudGlmaWVyLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAvey8sXG4gICAgICAgIGVuZDogL30vLFxuICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgIGVuZHNQYXJlbnQ6IHRydWUsXG4gICAgICAgIGtleXdvcmRzOiBbXG4gICAgICAgICAgLi4ucHJlY2VkZW5jZWdyb3VwS2V5d29yZHMsXG4gICAgICAgICAgLi4ubGl0ZXJhbHNcbiAgICAgICAgXSxcbiAgICAgICAgY29udGFpbnM6IFsgVFlQRSBdXG4gICAgICB9XG4gICAgXVxuICB9O1xuXG4gIC8vIEFkZCBzdXBwb3J0ZWQgc3VibW9kZXMgdG8gc3RyaW5nIGludGVycG9sYXRpb24uXG4gIGZvciAoY29uc3QgdmFyaWFudCBvZiBTVFJJTkcudmFyaWFudHMpIHtcbiAgICBjb25zdCBpbnRlcnBvbGF0aW9uID0gdmFyaWFudC5jb250YWlucy5maW5kKG1vZGUgPT4gbW9kZS5sYWJlbCA9PT0gXCJpbnRlcnBvbFwiKTtcbiAgICAvLyBUT0RPOiBJbnRlcnBvbGF0aW9uIGNhbiBjb250YWluIGFueSBleHByZXNzaW9uLCBzbyB0aGVyZSdzIHJvb20gZm9yIGltcHJvdmVtZW50IGhlcmUuXG4gICAgaW50ZXJwb2xhdGlvbi5rZXl3b3JkcyA9IEtFWVdPUkRTO1xuICAgIGNvbnN0IHN1Ym1vZGVzID0gW1xuICAgICAgLi4uS0VZV09SRF9NT0RFUyxcbiAgICAgIC4uLkJVSUxUX0lOUyxcbiAgICAgIC4uLk9QRVJBVE9SUyxcbiAgICAgIE5VTUJFUixcbiAgICAgIFNUUklORyxcbiAgICAgIC4uLklERU5USUZJRVJTXG4gICAgXTtcbiAgICBpbnRlcnBvbGF0aW9uLmNvbnRhaW5zID0gW1xuICAgICAgLi4uc3VibW9kZXMsXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAvXFwoLyxcbiAgICAgICAgZW5kOiAvXFwpLyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAnc2VsZicsXG4gICAgICAgICAgLi4uc3VibW9kZXNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIF07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG5hbWU6ICdTd2lmdCcsXG4gICAga2V5d29yZHM6IEtFWVdPUkRTLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICAuLi5DT01NRU5UUyxcbiAgICAgIEZVTkNUSU9OLFxuICAgICAgSU5JVF9TVUJTQ1JJUFQsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2NsYXNzJyxcbiAgICAgICAgYmVnaW5LZXl3b3JkczogJ3N0cnVjdCBwcm90b2NvbCBjbGFzcyBleHRlbnNpb24gZW51bScsXG4gICAgICAgIGVuZDogJ1xcXFx7JyxcbiAgICAgICAgZXhjbHVkZUVuZDogdHJ1ZSxcbiAgICAgICAga2V5d29yZHM6IEtFWVdPUkRTLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIGhsanMuaW5oZXJpdChobGpzLlRJVExFX01PREUsIHtcbiAgICAgICAgICAgIGJlZ2luOiAvW0EtWmEteiRfXVtcXHUwMEMwLVxcdTAyQjgwLTlBLVphLXokX10qL1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIC4uLktFWVdPUkRfTU9ERVNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIE9QRVJBVE9SX0RFQ0xBUkFUSU9OLFxuICAgICAgUFJFQ0VERU5DRUdST1VQLFxuICAgICAge1xuICAgICAgICBiZWdpbktleXdvcmRzOiAnaW1wb3J0JyxcbiAgICAgICAgZW5kOiAvJC8sXG4gICAgICAgIGNvbnRhaW5zOiBbIC4uLkNPTU1FTlRTIF0sXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIC4uLktFWVdPUkRfTU9ERVMsXG4gICAgICAuLi5CVUlMVF9JTlMsXG4gICAgICAuLi5PUEVSQVRPUlMsXG4gICAgICBOVU1CRVIsXG4gICAgICBTVFJJTkcsXG4gICAgICAuLi5JREVOVElGSUVSUyxcbiAgICAgIC4uLkFUVFJJQlVURVMsXG4gICAgICBUWVBFLFxuICAgICAgVFVQTEVcbiAgICBdXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3dpZnQ7XG4iXSwic291cmNlUm9vdCI6IiJ9