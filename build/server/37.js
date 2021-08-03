exports.ids = [37];
exports.modules = {

/***/ "./node_modules/highlight.js/lib/languages/csharp.js":
/*!***********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/csharp.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: C#
Author: Jason Diamond <jason@diamond.name>
Contributor: Nicolas LLOBERA <nllobera@gmail.com>, Pieter Vantorre <pietervantorre@gmail.com>, David Pine <david.pine@microsoft.com>
Website: https://docs.microsoft.com/en-us/dotnet/csharp/
Category: common
*/

/** @type LanguageFn */
function csharp(hljs) {
  var BUILT_IN_KEYWORDS = [
      'bool',
      'byte',
      'char',
      'decimal',
      'delegate',
      'double',
      'dynamic',
      'enum',
      'float',
      'int',
      'long',
      'nint',
      'nuint',
      'object',
      'sbyte',
      'short',
      'string',
      'ulong',
      'unit',
      'ushort'
  ];
  var FUNCTION_MODIFIERS = [
    'public',
    'private',
    'protected',
    'static',
    'internal',
    'protected',
    'abstract',
    'async',
    'extern',
    'override',
    'unsafe',
    'virtual',
    'new',
    'sealed',
    'partial'
  ];
  var LITERAL_KEYWORDS = [
      'default',
      'false',
      'null',
      'true'
  ];
  var NORMAL_KEYWORDS = [
    'abstract',
    'as',
    'base',
    'break',
    'case',
    'class',
    'const',
    'continue',
    'do',
    'else',
    'event',
    'explicit',
    'extern',
    'finally',
    'fixed',
    'for',
    'foreach',
    'goto',
    'if',
    'implicit',
    'in',
    'interface',
    'internal',
    'is',
    'lock',
    'namespace',
    'new',
    'operator',
    'out',
    'override',
    'params',
    'private',
    'protected',
    'public',
    'readonly',
    'record',
    'ref',
    'return',
    'sealed',
    'sizeof',
    'stackalloc',
    'static',
    'struct',
    'switch',
    'this',
    'throw',
    'try',
    'typeof',
    'unchecked',
    'unsafe',
    'using',
    'virtual',
    'void',
    'volatile',
    'while'
  ];
  var CONTEXTUAL_KEYWORDS = [
    'add',
    'alias',
    'and',
    'ascending',
    'async',
    'await',
    'by',
    'descending',
    'equals',
    'from',
    'get',
    'global',
    'group',
    'init',
    'into',
    'join',
    'let',
    'nameof',
    'not',
    'notnull',
    'on',
    'or',
    'orderby',
    'partial',
    'remove',
    'select',
    'set',
    'unmanaged',
    'value|0',
    'var',
    'when',
    'where',
    'with',
    'yield'
  ];

  var KEYWORDS = {
    keyword: NORMAL_KEYWORDS.concat(CONTEXTUAL_KEYWORDS),
    built_in: BUILT_IN_KEYWORDS,
    literal: LITERAL_KEYWORDS
  };
  var TITLE_MODE = hljs.inherit(hljs.TITLE_MODE, {begin: '[a-zA-Z](\\.?\\w)*'});
  var NUMBERS = {
    className: 'number',
    variants: [
      { begin: '\\b(0b[01\']+)' },
      { begin: '(-?)\\b([\\d\']+(\\.[\\d\']*)?|\\.[\\d\']+)(u|U|l|L|ul|UL|f|F|b|B)' },
      { begin: '(-?)(\\b0[xX][a-fA-F0-9\']+|(\\b[\\d\']+(\\.[\\d\']*)?|\\.[\\d\']+)([eE][-+]?[\\d\']+)?)' }
    ],
    relevance: 0
  };
  var VERBATIM_STRING = {
    className: 'string',
    begin: '@"', end: '"',
    contains: [{begin: '""'}]
  };
  var VERBATIM_STRING_NO_LF = hljs.inherit(VERBATIM_STRING, {illegal: /\n/});
  var SUBST = {
    className: 'subst',
    begin: /\{/, end: /\}/,
    keywords: KEYWORDS
  };
  var SUBST_NO_LF = hljs.inherit(SUBST, {illegal: /\n/});
  var INTERPOLATED_STRING = {
    className: 'string',
    begin: /\$"/, end: '"',
    illegal: /\n/,
    contains: [{begin: /\{\{/}, {begin: /\}\}/}, hljs.BACKSLASH_ESCAPE, SUBST_NO_LF]
  };
  var INTERPOLATED_VERBATIM_STRING = {
    className: 'string',
    begin: /\$@"/, end: '"',
    contains: [{begin: /\{\{/}, {begin: /\}\}/}, {begin: '""'}, SUBST]
  };
  var INTERPOLATED_VERBATIM_STRING_NO_LF = hljs.inherit(INTERPOLATED_VERBATIM_STRING, {
    illegal: /\n/,
    contains: [{begin: /\{\{/}, {begin: /\}\}/}, {begin: '""'}, SUBST_NO_LF]
  });
  SUBST.contains = [
    INTERPOLATED_VERBATIM_STRING,
    INTERPOLATED_STRING,
    VERBATIM_STRING,
    hljs.APOS_STRING_MODE,
    hljs.QUOTE_STRING_MODE,
    NUMBERS,
    hljs.C_BLOCK_COMMENT_MODE
  ];
  SUBST_NO_LF.contains = [
    INTERPOLATED_VERBATIM_STRING_NO_LF,
    INTERPOLATED_STRING,
    VERBATIM_STRING_NO_LF,
    hljs.APOS_STRING_MODE,
    hljs.QUOTE_STRING_MODE,
    NUMBERS,
    hljs.inherit(hljs.C_BLOCK_COMMENT_MODE, {illegal: /\n/})
  ];
  var STRING = {
    variants: [
      INTERPOLATED_VERBATIM_STRING,
      INTERPOLATED_STRING,
      VERBATIM_STRING,
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE
    ]
  };

  var GENERIC_MODIFIER = {
    begin: "<",
    end: ">",
    contains: [
      { beginKeywords: "in out"},
      TITLE_MODE
    ]
  };
  var TYPE_IDENT_RE = hljs.IDENT_RE + '(<' + hljs.IDENT_RE + '(\\s*,\\s*' + hljs.IDENT_RE + ')*>)?(\\[\\])?';
  var AT_IDENTIFIER = {
    // prevents expressions like `@class` from incorrect flagging
    // `class` as a keyword
    begin: "@" + hljs.IDENT_RE,
    relevance: 0
  };

  return {
    name: 'C#',
    aliases: ['cs', 'c#'],
    keywords: KEYWORDS,
    illegal: /::/,
    contains: [
      hljs.COMMENT(
        '///',
        '$',
        {
          returnBegin: true,
          contains: [
            {
              className: 'doctag',
              variants: [
                {
                  begin: '///', relevance: 0
                },
                {
                  begin: '<!--|-->'
                },
                {
                  begin: '</?', end: '>'
                }
              ]
            }
          ]
        }
      ),
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      {
        className: 'meta',
        begin: '#', end: '$',
        keywords: {
          'meta-keyword': 'if else elif endif define undef warning error line region endregion pragma checksum'
        }
      },
      STRING,
      NUMBERS,
      {
        beginKeywords: 'class interface',
        relevance: 0,
        end: /[{;=]/,
        illegal: /[^\s:,]/,
        contains: [
          { beginKeywords: "where class" },
          TITLE_MODE,
          GENERIC_MODIFIER,
          hljs.C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE
        ]
      },
      {
        beginKeywords: 'namespace',
        relevance: 0,
        end: /[{;=]/,
        illegal: /[^\s:]/,
        contains: [
          TITLE_MODE,
          hljs.C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE
        ]
      },
      {
        beginKeywords: 'record',
        relevance: 0,
        end: /[{;=]/,
        illegal: /[^\s:]/,
        contains: [
          TITLE_MODE,
          GENERIC_MODIFIER,
          hljs.C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE
        ]
      },
      {
        // [Attributes("")]
        className: 'meta',
        begin: '^\\s*\\[', excludeBegin: true, end: '\\]', excludeEnd: true,
        contains: [
          {className: 'meta-string', begin: /"/, end: /"/}
        ]
      },
      {
        // Expression keywords prevent 'keyword Name(...)' from being
        // recognized as a function definition
        beginKeywords: 'new return throw await else',
        relevance: 0
      },
      {
        className: 'function',
        begin: '(' + TYPE_IDENT_RE + '\\s+)+' + hljs.IDENT_RE + '\\s*(<.+>\\s*)?\\(', returnBegin: true,
        end: /\s*[{;=]/, excludeEnd: true,
        keywords: KEYWORDS,
        contains: [
          // prevents these from being highlighted `title`
          {
            beginKeywords: FUNCTION_MODIFIERS.join(" "),
            relevance: 0
          },
          {
            begin: hljs.IDENT_RE + '\\s*(<.+>\\s*)?\\(', returnBegin: true,
            contains: [
              hljs.TITLE_MODE,
              GENERIC_MODIFIER
            ],
            relevance: 0
          },
          {
            className: 'params',
            begin: /\(/, end: /\)/,
            excludeBegin: true,
            excludeEnd: true,
            keywords: KEYWORDS,
            relevance: 0,
            contains: [
              STRING,
              NUMBERS,
              hljs.C_BLOCK_COMMENT_MODE
            ]
          },
          hljs.C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE
        ]
      },
      AT_IDENTIFIER
    ]
  };
}

module.exports = csharp;


/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvY3NoYXJwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsNEJBQTRCO0FBQzlFO0FBQ0E7QUFDQTtBQUNBLE9BQU8sMEJBQTBCO0FBQ2pDLE9BQU8sOEVBQThFO0FBQ3JGLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsWUFBWTtBQUM1QjtBQUNBLDZEQUE2RCxjQUFjO0FBQzNFO0FBQ0E7QUFDQSxjQUFjLFdBQVc7QUFDekI7QUFDQTtBQUNBLHlDQUF5QyxjQUFjO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFVBQVUsRUFBRSxFQUFFLEdBQUcsVUFBVSxFQUFFLEVBQUU7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsVUFBVSxFQUFFLEVBQUUsR0FBRyxVQUFVLEVBQUUsRUFBRSxHQUFHLFlBQVk7QUFDOUQ7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFVBQVUsRUFBRSxFQUFFLEdBQUcsVUFBVSxFQUFFLEVBQUUsR0FBRyxZQUFZO0FBQzlELEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxjQUFjO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyx5QkFBeUI7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLFdBQVcsK0JBQStCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiIzNy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5MYW5ndWFnZTogQyNcbkF1dGhvcjogSmFzb24gRGlhbW9uZCA8amFzb25AZGlhbW9uZC5uYW1lPlxuQ29udHJpYnV0b3I6IE5pY29sYXMgTExPQkVSQSA8bmxsb2JlcmFAZ21haWwuY29tPiwgUGlldGVyIFZhbnRvcnJlIDxwaWV0ZXJ2YW50b3JyZUBnbWFpbC5jb20+LCBEYXZpZCBQaW5lIDxkYXZpZC5waW5lQG1pY3Jvc29mdC5jb20+XG5XZWJzaXRlOiBodHRwczovL2RvY3MubWljcm9zb2Z0LmNvbS9lbi11cy9kb3RuZXQvY3NoYXJwL1xuQ2F0ZWdvcnk6IGNvbW1vblxuKi9cblxuLyoqIEB0eXBlIExhbmd1YWdlRm4gKi9cbmZ1bmN0aW9uIGNzaGFycChobGpzKSB7XG4gIHZhciBCVUlMVF9JTl9LRVlXT1JEUyA9IFtcbiAgICAgICdib29sJyxcbiAgICAgICdieXRlJyxcbiAgICAgICdjaGFyJyxcbiAgICAgICdkZWNpbWFsJyxcbiAgICAgICdkZWxlZ2F0ZScsXG4gICAgICAnZG91YmxlJyxcbiAgICAgICdkeW5hbWljJyxcbiAgICAgICdlbnVtJyxcbiAgICAgICdmbG9hdCcsXG4gICAgICAnaW50JyxcbiAgICAgICdsb25nJyxcbiAgICAgICduaW50JyxcbiAgICAgICdudWludCcsXG4gICAgICAnb2JqZWN0JyxcbiAgICAgICdzYnl0ZScsXG4gICAgICAnc2hvcnQnLFxuICAgICAgJ3N0cmluZycsXG4gICAgICAndWxvbmcnLFxuICAgICAgJ3VuaXQnLFxuICAgICAgJ3VzaG9ydCdcbiAgXTtcbiAgdmFyIEZVTkNUSU9OX01PRElGSUVSUyA9IFtcbiAgICAncHVibGljJyxcbiAgICAncHJpdmF0ZScsXG4gICAgJ3Byb3RlY3RlZCcsXG4gICAgJ3N0YXRpYycsXG4gICAgJ2ludGVybmFsJyxcbiAgICAncHJvdGVjdGVkJyxcbiAgICAnYWJzdHJhY3QnLFxuICAgICdhc3luYycsXG4gICAgJ2V4dGVybicsXG4gICAgJ292ZXJyaWRlJyxcbiAgICAndW5zYWZlJyxcbiAgICAndmlydHVhbCcsXG4gICAgJ25ldycsXG4gICAgJ3NlYWxlZCcsXG4gICAgJ3BhcnRpYWwnXG4gIF07XG4gIHZhciBMSVRFUkFMX0tFWVdPUkRTID0gW1xuICAgICAgJ2RlZmF1bHQnLFxuICAgICAgJ2ZhbHNlJyxcbiAgICAgICdudWxsJyxcbiAgICAgICd0cnVlJ1xuICBdO1xuICB2YXIgTk9STUFMX0tFWVdPUkRTID0gW1xuICAgICdhYnN0cmFjdCcsXG4gICAgJ2FzJyxcbiAgICAnYmFzZScsXG4gICAgJ2JyZWFrJyxcbiAgICAnY2FzZScsXG4gICAgJ2NsYXNzJyxcbiAgICAnY29uc3QnLFxuICAgICdjb250aW51ZScsXG4gICAgJ2RvJyxcbiAgICAnZWxzZScsXG4gICAgJ2V2ZW50JyxcbiAgICAnZXhwbGljaXQnLFxuICAgICdleHRlcm4nLFxuICAgICdmaW5hbGx5JyxcbiAgICAnZml4ZWQnLFxuICAgICdmb3InLFxuICAgICdmb3JlYWNoJyxcbiAgICAnZ290bycsXG4gICAgJ2lmJyxcbiAgICAnaW1wbGljaXQnLFxuICAgICdpbicsXG4gICAgJ2ludGVyZmFjZScsXG4gICAgJ2ludGVybmFsJyxcbiAgICAnaXMnLFxuICAgICdsb2NrJyxcbiAgICAnbmFtZXNwYWNlJyxcbiAgICAnbmV3JyxcbiAgICAnb3BlcmF0b3InLFxuICAgICdvdXQnLFxuICAgICdvdmVycmlkZScsXG4gICAgJ3BhcmFtcycsXG4gICAgJ3ByaXZhdGUnLFxuICAgICdwcm90ZWN0ZWQnLFxuICAgICdwdWJsaWMnLFxuICAgICdyZWFkb25seScsXG4gICAgJ3JlY29yZCcsXG4gICAgJ3JlZicsXG4gICAgJ3JldHVybicsXG4gICAgJ3NlYWxlZCcsXG4gICAgJ3NpemVvZicsXG4gICAgJ3N0YWNrYWxsb2MnLFxuICAgICdzdGF0aWMnLFxuICAgICdzdHJ1Y3QnLFxuICAgICdzd2l0Y2gnLFxuICAgICd0aGlzJyxcbiAgICAndGhyb3cnLFxuICAgICd0cnknLFxuICAgICd0eXBlb2YnLFxuICAgICd1bmNoZWNrZWQnLFxuICAgICd1bnNhZmUnLFxuICAgICd1c2luZycsXG4gICAgJ3ZpcnR1YWwnLFxuICAgICd2b2lkJyxcbiAgICAndm9sYXRpbGUnLFxuICAgICd3aGlsZSdcbiAgXTtcbiAgdmFyIENPTlRFWFRVQUxfS0VZV09SRFMgPSBbXG4gICAgJ2FkZCcsXG4gICAgJ2FsaWFzJyxcbiAgICAnYW5kJyxcbiAgICAnYXNjZW5kaW5nJyxcbiAgICAnYXN5bmMnLFxuICAgICdhd2FpdCcsXG4gICAgJ2J5JyxcbiAgICAnZGVzY2VuZGluZycsXG4gICAgJ2VxdWFscycsXG4gICAgJ2Zyb20nLFxuICAgICdnZXQnLFxuICAgICdnbG9iYWwnLFxuICAgICdncm91cCcsXG4gICAgJ2luaXQnLFxuICAgICdpbnRvJyxcbiAgICAnam9pbicsXG4gICAgJ2xldCcsXG4gICAgJ25hbWVvZicsXG4gICAgJ25vdCcsXG4gICAgJ25vdG51bGwnLFxuICAgICdvbicsXG4gICAgJ29yJyxcbiAgICAnb3JkZXJieScsXG4gICAgJ3BhcnRpYWwnLFxuICAgICdyZW1vdmUnLFxuICAgICdzZWxlY3QnLFxuICAgICdzZXQnLFxuICAgICd1bm1hbmFnZWQnLFxuICAgICd2YWx1ZXwwJyxcbiAgICAndmFyJyxcbiAgICAnd2hlbicsXG4gICAgJ3doZXJlJyxcbiAgICAnd2l0aCcsXG4gICAgJ3lpZWxkJ1xuICBdO1xuXG4gIHZhciBLRVlXT1JEUyA9IHtcbiAgICBrZXl3b3JkOiBOT1JNQUxfS0VZV09SRFMuY29uY2F0KENPTlRFWFRVQUxfS0VZV09SRFMpLFxuICAgIGJ1aWx0X2luOiBCVUlMVF9JTl9LRVlXT1JEUyxcbiAgICBsaXRlcmFsOiBMSVRFUkFMX0tFWVdPUkRTXG4gIH07XG4gIHZhciBUSVRMRV9NT0RFID0gaGxqcy5pbmhlcml0KGhsanMuVElUTEVfTU9ERSwge2JlZ2luOiAnW2EtekEtWl0oXFxcXC4/XFxcXHcpKid9KTtcbiAgdmFyIE5VTUJFUlMgPSB7XG4gICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICB2YXJpYW50czogW1xuICAgICAgeyBiZWdpbjogJ1xcXFxiKDBiWzAxXFwnXSspJyB9LFxuICAgICAgeyBiZWdpbjogJygtPylcXFxcYihbXFxcXGRcXCddKyhcXFxcLltcXFxcZFxcJ10qKT98XFxcXC5bXFxcXGRcXCddKykodXxVfGx8THx1bHxVTHxmfEZ8YnxCKScgfSxcbiAgICAgIHsgYmVnaW46ICcoLT8pKFxcXFxiMFt4WF1bYS1mQS1GMC05XFwnXSt8KFxcXFxiW1xcXFxkXFwnXSsoXFxcXC5bXFxcXGRcXCddKik/fFxcXFwuW1xcXFxkXFwnXSspKFtlRV1bLStdP1tcXFxcZFxcJ10rKT8pJyB9XG4gICAgXSxcbiAgICByZWxldmFuY2U6IDBcbiAgfTtcbiAgdmFyIFZFUkJBVElNX1NUUklORyA9IHtcbiAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgIGJlZ2luOiAnQFwiJywgZW5kOiAnXCInLFxuICAgIGNvbnRhaW5zOiBbe2JlZ2luOiAnXCJcIid9XVxuICB9O1xuICB2YXIgVkVSQkFUSU1fU1RSSU5HX05PX0xGID0gaGxqcy5pbmhlcml0KFZFUkJBVElNX1NUUklORywge2lsbGVnYWw6IC9cXG4vfSk7XG4gIHZhciBTVUJTVCA9IHtcbiAgICBjbGFzc05hbWU6ICdzdWJzdCcsXG4gICAgYmVnaW46IC9cXHsvLCBlbmQ6IC9cXH0vLFxuICAgIGtleXdvcmRzOiBLRVlXT1JEU1xuICB9O1xuICB2YXIgU1VCU1RfTk9fTEYgPSBobGpzLmluaGVyaXQoU1VCU1QsIHtpbGxlZ2FsOiAvXFxuL30pO1xuICB2YXIgSU5URVJQT0xBVEVEX1NUUklORyA9IHtcbiAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgIGJlZ2luOiAvXFwkXCIvLCBlbmQ6ICdcIicsXG4gICAgaWxsZWdhbDogL1xcbi8sXG4gICAgY29udGFpbnM6IFt7YmVnaW46IC9cXHtcXHsvfSwge2JlZ2luOiAvXFx9XFx9L30sIGhsanMuQkFDS1NMQVNIX0VTQ0FQRSwgU1VCU1RfTk9fTEZdXG4gIH07XG4gIHZhciBJTlRFUlBPTEFURURfVkVSQkFUSU1fU1RSSU5HID0ge1xuICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgYmVnaW46IC9cXCRAXCIvLCBlbmQ6ICdcIicsXG4gICAgY29udGFpbnM6IFt7YmVnaW46IC9cXHtcXHsvfSwge2JlZ2luOiAvXFx9XFx9L30sIHtiZWdpbjogJ1wiXCInfSwgU1VCU1RdXG4gIH07XG4gIHZhciBJTlRFUlBPTEFURURfVkVSQkFUSU1fU1RSSU5HX05PX0xGID0gaGxqcy5pbmhlcml0KElOVEVSUE9MQVRFRF9WRVJCQVRJTV9TVFJJTkcsIHtcbiAgICBpbGxlZ2FsOiAvXFxuLyxcbiAgICBjb250YWluczogW3tiZWdpbjogL1xce1xcey99LCB7YmVnaW46IC9cXH1cXH0vfSwge2JlZ2luOiAnXCJcIid9LCBTVUJTVF9OT19MRl1cbiAgfSk7XG4gIFNVQlNULmNvbnRhaW5zID0gW1xuICAgIElOVEVSUE9MQVRFRF9WRVJCQVRJTV9TVFJJTkcsXG4gICAgSU5URVJQT0xBVEVEX1NUUklORyxcbiAgICBWRVJCQVRJTV9TVFJJTkcsXG4gICAgaGxqcy5BUE9TX1NUUklOR19NT0RFLFxuICAgIGhsanMuUVVPVEVfU1RSSU5HX01PREUsXG4gICAgTlVNQkVSUyxcbiAgICBobGpzLkNfQkxPQ0tfQ09NTUVOVF9NT0RFXG4gIF07XG4gIFNVQlNUX05PX0xGLmNvbnRhaW5zID0gW1xuICAgIElOVEVSUE9MQVRFRF9WRVJCQVRJTV9TVFJJTkdfTk9fTEYsXG4gICAgSU5URVJQT0xBVEVEX1NUUklORyxcbiAgICBWRVJCQVRJTV9TVFJJTkdfTk9fTEYsXG4gICAgaGxqcy5BUE9TX1NUUklOR19NT0RFLFxuICAgIGhsanMuUVVPVEVfU1RSSU5HX01PREUsXG4gICAgTlVNQkVSUyxcbiAgICBobGpzLmluaGVyaXQoaGxqcy5DX0JMT0NLX0NPTU1FTlRfTU9ERSwge2lsbGVnYWw6IC9cXG4vfSlcbiAgXTtcbiAgdmFyIFNUUklORyA9IHtcbiAgICB2YXJpYW50czogW1xuICAgICAgSU5URVJQT0xBVEVEX1ZFUkJBVElNX1NUUklORyxcbiAgICAgIElOVEVSUE9MQVRFRF9TVFJJTkcsXG4gICAgICBWRVJCQVRJTV9TVFJJTkcsXG4gICAgICBobGpzLkFQT1NfU1RSSU5HX01PREUsXG4gICAgICBobGpzLlFVT1RFX1NUUklOR19NT0RFXG4gICAgXVxuICB9O1xuXG4gIHZhciBHRU5FUklDX01PRElGSUVSID0ge1xuICAgIGJlZ2luOiBcIjxcIixcbiAgICBlbmQ6IFwiPlwiLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICB7IGJlZ2luS2V5d29yZHM6IFwiaW4gb3V0XCJ9LFxuICAgICAgVElUTEVfTU9ERVxuICAgIF1cbiAgfTtcbiAgdmFyIFRZUEVfSURFTlRfUkUgPSBobGpzLklERU5UX1JFICsgJyg8JyArIGhsanMuSURFTlRfUkUgKyAnKFxcXFxzKixcXFxccyonICsgaGxqcy5JREVOVF9SRSArICcpKj4pPyhcXFxcW1xcXFxdKT8nO1xuICB2YXIgQVRfSURFTlRJRklFUiA9IHtcbiAgICAvLyBwcmV2ZW50cyBleHByZXNzaW9ucyBsaWtlIGBAY2xhc3NgIGZyb20gaW5jb3JyZWN0IGZsYWdnaW5nXG4gICAgLy8gYGNsYXNzYCBhcyBhIGtleXdvcmRcbiAgICBiZWdpbjogXCJAXCIgKyBobGpzLklERU5UX1JFLFxuICAgIHJlbGV2YW5jZTogMFxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgbmFtZTogJ0MjJyxcbiAgICBhbGlhc2VzOiBbJ2NzJywgJ2MjJ10sXG4gICAga2V5d29yZHM6IEtFWVdPUkRTLFxuICAgIGlsbGVnYWw6IC86Oi8sXG4gICAgY29udGFpbnM6IFtcbiAgICAgIGhsanMuQ09NTUVOVChcbiAgICAgICAgJy8vLycsXG4gICAgICAgICckJyxcbiAgICAgICAge1xuICAgICAgICAgIHJldHVybkJlZ2luOiB0cnVlLFxuICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogJ2RvY3RhZycsXG4gICAgICAgICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYmVnaW46ICcvLy8nLCByZWxldmFuY2U6IDBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGJlZ2luOiAnPCEtLXwtLT4nXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBiZWdpbjogJzwvPycsIGVuZDogJz4nXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICApLFxuICAgICAgaGxqcy5DX0xJTkVfQ09NTUVOVF9NT0RFLFxuICAgICAgaGxqcy5DX0JMT0NLX0NPTU1FTlRfTU9ERSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgICAgIGJlZ2luOiAnIycsIGVuZDogJyQnLFxuICAgICAgICBrZXl3b3Jkczoge1xuICAgICAgICAgICdtZXRhLWtleXdvcmQnOiAnaWYgZWxzZSBlbGlmIGVuZGlmIGRlZmluZSB1bmRlZiB3YXJuaW5nIGVycm9yIGxpbmUgcmVnaW9uIGVuZHJlZ2lvbiBwcmFnbWEgY2hlY2tzdW0nXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBTVFJJTkcsXG4gICAgICBOVU1CRVJTLFxuICAgICAge1xuICAgICAgICBiZWdpbktleXdvcmRzOiAnY2xhc3MgaW50ZXJmYWNlJyxcbiAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICBlbmQ6IC9bezs9XS8sXG4gICAgICAgIGlsbGVnYWw6IC9bXlxcczosXS8sXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgeyBiZWdpbktleXdvcmRzOiBcIndoZXJlIGNsYXNzXCIgfSxcbiAgICAgICAgICBUSVRMRV9NT0RFLFxuICAgICAgICAgIEdFTkVSSUNfTU9ESUZJRVIsXG4gICAgICAgICAgaGxqcy5DX0xJTkVfQ09NTUVOVF9NT0RFLFxuICAgICAgICAgIGhsanMuQ19CTE9DS19DT01NRU5UX01PREVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW5LZXl3b3JkczogJ25hbWVzcGFjZScsXG4gICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgZW5kOiAvW3s7PV0vLFxuICAgICAgICBpbGxlZ2FsOiAvW15cXHM6XS8sXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgVElUTEVfTU9ERSxcbiAgICAgICAgICBobGpzLkNfTElORV9DT01NRU5UX01PREUsXG4gICAgICAgICAgaGxqcy5DX0JMT0NLX0NPTU1FTlRfTU9ERVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbktleXdvcmRzOiAncmVjb3JkJyxcbiAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICBlbmQ6IC9bezs9XS8sXG4gICAgICAgIGlsbGVnYWw6IC9bXlxcczpdLyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICBUSVRMRV9NT0RFLFxuICAgICAgICAgIEdFTkVSSUNfTU9ESUZJRVIsXG4gICAgICAgICAgaGxqcy5DX0xJTkVfQ09NTUVOVF9NT0RFLFxuICAgICAgICAgIGhsanMuQ19CTE9DS19DT01NRU5UX01PREVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgLy8gW0F0dHJpYnV0ZXMoXCJcIildXG4gICAgICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgICAgICBiZWdpbjogJ15cXFxccypcXFxcWycsIGV4Y2x1ZGVCZWdpbjogdHJ1ZSwgZW5kOiAnXFxcXF0nLCBleGNsdWRlRW5kOiB0cnVlLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIHtjbGFzc05hbWU6ICdtZXRhLXN0cmluZycsIGJlZ2luOiAvXCIvLCBlbmQ6IC9cIi99XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIC8vIEV4cHJlc3Npb24ga2V5d29yZHMgcHJldmVudCAna2V5d29yZCBOYW1lKC4uLiknIGZyb20gYmVpbmdcbiAgICAgICAgLy8gcmVjb2duaXplZCBhcyBhIGZ1bmN0aW9uIGRlZmluaXRpb25cbiAgICAgICAgYmVnaW5LZXl3b3JkczogJ25ldyByZXR1cm4gdGhyb3cgYXdhaXQgZWxzZScsXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnZnVuY3Rpb24nLFxuICAgICAgICBiZWdpbjogJygnICsgVFlQRV9JREVOVF9SRSArICdcXFxccyspKycgKyBobGpzLklERU5UX1JFICsgJ1xcXFxzKig8Lis+XFxcXHMqKT9cXFxcKCcsIHJldHVybkJlZ2luOiB0cnVlLFxuICAgICAgICBlbmQ6IC9cXHMqW3s7PV0vLCBleGNsdWRlRW5kOiB0cnVlLFxuICAgICAgICBrZXl3b3JkczogS0VZV09SRFMsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgLy8gcHJldmVudHMgdGhlc2UgZnJvbSBiZWluZyBoaWdobGlnaHRlZCBgdGl0bGVgXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW5LZXl3b3JkczogRlVOQ1RJT05fTU9ESUZJRVJTLmpvaW4oXCIgXCIpLFxuICAgICAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogaGxqcy5JREVOVF9SRSArICdcXFxccyooPC4rPlxcXFxzKik/XFxcXCgnLCByZXR1cm5CZWdpbjogdHJ1ZSxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAgIGhsanMuVElUTEVfTU9ERSxcbiAgICAgICAgICAgICAgR0VORVJJQ19NT0RJRklFUlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAncGFyYW1zJyxcbiAgICAgICAgICAgIGJlZ2luOiAvXFwoLywgZW5kOiAvXFwpLyxcbiAgICAgICAgICAgIGV4Y2x1ZGVCZWdpbjogdHJ1ZSxcbiAgICAgICAgICAgIGV4Y2x1ZGVFbmQ6IHRydWUsXG4gICAgICAgICAgICBrZXl3b3JkczogS0VZV09SRFMsXG4gICAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgICBTVFJJTkcsXG4gICAgICAgICAgICAgIE5VTUJFUlMsXG4gICAgICAgICAgICAgIGhsanMuQ19CTE9DS19DT01NRU5UX01PREVcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGhsanMuQ19MSU5FX0NPTU1FTlRfTU9ERSxcbiAgICAgICAgICBobGpzLkNfQkxPQ0tfQ09NTUVOVF9NT0RFXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBBVF9JREVOVElGSUVSXG4gICAgXVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNzaGFycDtcbiJdLCJzb3VyY2VSb290IjoiIn0=