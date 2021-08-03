(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[38],{

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

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2NzaGFycC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsNEJBQTRCO0FBQzlFO0FBQ0E7QUFDQTtBQUNBLE9BQU8sMEJBQTBCO0FBQ2pDLE9BQU8sOEVBQThFO0FBQ3JGLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsWUFBWTtBQUM1QjtBQUNBLDZEQUE2RCxjQUFjO0FBQzNFO0FBQ0E7QUFDQSxjQUFjLFdBQVc7QUFDekI7QUFDQTtBQUNBLHlDQUF5QyxjQUFjO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFVBQVUsRUFBRSxFQUFFLEdBQUcsVUFBVSxFQUFFLEVBQUU7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsVUFBVSxFQUFFLEVBQUUsR0FBRyxVQUFVLEVBQUUsRUFBRSxHQUFHLFlBQVk7QUFDOUQ7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFVBQVUsRUFBRSxFQUFFLEdBQUcsVUFBVSxFQUFFLEVBQUUsR0FBRyxZQUFZO0FBQzlELEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxjQUFjO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyx5QkFBeUI7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLFdBQVcsK0JBQStCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJzdGF0aWMvY2h1bmtzLzM4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBDI1xuQXV0aG9yOiBKYXNvbiBEaWFtb25kIDxqYXNvbkBkaWFtb25kLm5hbWU+XG5Db250cmlidXRvcjogTmljb2xhcyBMTE9CRVJBIDxubGxvYmVyYUBnbWFpbC5jb20+LCBQaWV0ZXIgVmFudG9ycmUgPHBpZXRlcnZhbnRvcnJlQGdtYWlsLmNvbT4sIERhdmlkIFBpbmUgPGRhdmlkLnBpbmVAbWljcm9zb2Z0LmNvbT5cbldlYnNpdGU6IGh0dHBzOi8vZG9jcy5taWNyb3NvZnQuY29tL2VuLXVzL2RvdG5ldC9jc2hhcnAvXG5DYXRlZ29yeTogY29tbW9uXG4qL1xuXG4vKiogQHR5cGUgTGFuZ3VhZ2VGbiAqL1xuZnVuY3Rpb24gY3NoYXJwKGhsanMpIHtcbiAgdmFyIEJVSUxUX0lOX0tFWVdPUkRTID0gW1xuICAgICAgJ2Jvb2wnLFxuICAgICAgJ2J5dGUnLFxuICAgICAgJ2NoYXInLFxuICAgICAgJ2RlY2ltYWwnLFxuICAgICAgJ2RlbGVnYXRlJyxcbiAgICAgICdkb3VibGUnLFxuICAgICAgJ2R5bmFtaWMnLFxuICAgICAgJ2VudW0nLFxuICAgICAgJ2Zsb2F0JyxcbiAgICAgICdpbnQnLFxuICAgICAgJ2xvbmcnLFxuICAgICAgJ25pbnQnLFxuICAgICAgJ251aW50JyxcbiAgICAgICdvYmplY3QnLFxuICAgICAgJ3NieXRlJyxcbiAgICAgICdzaG9ydCcsXG4gICAgICAnc3RyaW5nJyxcbiAgICAgICd1bG9uZycsXG4gICAgICAndW5pdCcsXG4gICAgICAndXNob3J0J1xuICBdO1xuICB2YXIgRlVOQ1RJT05fTU9ESUZJRVJTID0gW1xuICAgICdwdWJsaWMnLFxuICAgICdwcml2YXRlJyxcbiAgICAncHJvdGVjdGVkJyxcbiAgICAnc3RhdGljJyxcbiAgICAnaW50ZXJuYWwnLFxuICAgICdwcm90ZWN0ZWQnLFxuICAgICdhYnN0cmFjdCcsXG4gICAgJ2FzeW5jJyxcbiAgICAnZXh0ZXJuJyxcbiAgICAnb3ZlcnJpZGUnLFxuICAgICd1bnNhZmUnLFxuICAgICd2aXJ0dWFsJyxcbiAgICAnbmV3JyxcbiAgICAnc2VhbGVkJyxcbiAgICAncGFydGlhbCdcbiAgXTtcbiAgdmFyIExJVEVSQUxfS0VZV09SRFMgPSBbXG4gICAgICAnZGVmYXVsdCcsXG4gICAgICAnZmFsc2UnLFxuICAgICAgJ251bGwnLFxuICAgICAgJ3RydWUnXG4gIF07XG4gIHZhciBOT1JNQUxfS0VZV09SRFMgPSBbXG4gICAgJ2Fic3RyYWN0JyxcbiAgICAnYXMnLFxuICAgICdiYXNlJyxcbiAgICAnYnJlYWsnLFxuICAgICdjYXNlJyxcbiAgICAnY2xhc3MnLFxuICAgICdjb25zdCcsXG4gICAgJ2NvbnRpbnVlJyxcbiAgICAnZG8nLFxuICAgICdlbHNlJyxcbiAgICAnZXZlbnQnLFxuICAgICdleHBsaWNpdCcsXG4gICAgJ2V4dGVybicsXG4gICAgJ2ZpbmFsbHknLFxuICAgICdmaXhlZCcsXG4gICAgJ2ZvcicsXG4gICAgJ2ZvcmVhY2gnLFxuICAgICdnb3RvJyxcbiAgICAnaWYnLFxuICAgICdpbXBsaWNpdCcsXG4gICAgJ2luJyxcbiAgICAnaW50ZXJmYWNlJyxcbiAgICAnaW50ZXJuYWwnLFxuICAgICdpcycsXG4gICAgJ2xvY2snLFxuICAgICduYW1lc3BhY2UnLFxuICAgICduZXcnLFxuICAgICdvcGVyYXRvcicsXG4gICAgJ291dCcsXG4gICAgJ292ZXJyaWRlJyxcbiAgICAncGFyYW1zJyxcbiAgICAncHJpdmF0ZScsXG4gICAgJ3Byb3RlY3RlZCcsXG4gICAgJ3B1YmxpYycsXG4gICAgJ3JlYWRvbmx5JyxcbiAgICAncmVjb3JkJyxcbiAgICAncmVmJyxcbiAgICAncmV0dXJuJyxcbiAgICAnc2VhbGVkJyxcbiAgICAnc2l6ZW9mJyxcbiAgICAnc3RhY2thbGxvYycsXG4gICAgJ3N0YXRpYycsXG4gICAgJ3N0cnVjdCcsXG4gICAgJ3N3aXRjaCcsXG4gICAgJ3RoaXMnLFxuICAgICd0aHJvdycsXG4gICAgJ3RyeScsXG4gICAgJ3R5cGVvZicsXG4gICAgJ3VuY2hlY2tlZCcsXG4gICAgJ3Vuc2FmZScsXG4gICAgJ3VzaW5nJyxcbiAgICAndmlydHVhbCcsXG4gICAgJ3ZvaWQnLFxuICAgICd2b2xhdGlsZScsXG4gICAgJ3doaWxlJ1xuICBdO1xuICB2YXIgQ09OVEVYVFVBTF9LRVlXT1JEUyA9IFtcbiAgICAnYWRkJyxcbiAgICAnYWxpYXMnLFxuICAgICdhbmQnLFxuICAgICdhc2NlbmRpbmcnLFxuICAgICdhc3luYycsXG4gICAgJ2F3YWl0JyxcbiAgICAnYnknLFxuICAgICdkZXNjZW5kaW5nJyxcbiAgICAnZXF1YWxzJyxcbiAgICAnZnJvbScsXG4gICAgJ2dldCcsXG4gICAgJ2dsb2JhbCcsXG4gICAgJ2dyb3VwJyxcbiAgICAnaW5pdCcsXG4gICAgJ2ludG8nLFxuICAgICdqb2luJyxcbiAgICAnbGV0JyxcbiAgICAnbmFtZW9mJyxcbiAgICAnbm90JyxcbiAgICAnbm90bnVsbCcsXG4gICAgJ29uJyxcbiAgICAnb3InLFxuICAgICdvcmRlcmJ5JyxcbiAgICAncGFydGlhbCcsXG4gICAgJ3JlbW92ZScsXG4gICAgJ3NlbGVjdCcsXG4gICAgJ3NldCcsXG4gICAgJ3VubWFuYWdlZCcsXG4gICAgJ3ZhbHVlfDAnLFxuICAgICd2YXInLFxuICAgICd3aGVuJyxcbiAgICAnd2hlcmUnLFxuICAgICd3aXRoJyxcbiAgICAneWllbGQnXG4gIF07XG5cbiAgdmFyIEtFWVdPUkRTID0ge1xuICAgIGtleXdvcmQ6IE5PUk1BTF9LRVlXT1JEUy5jb25jYXQoQ09OVEVYVFVBTF9LRVlXT1JEUyksXG4gICAgYnVpbHRfaW46IEJVSUxUX0lOX0tFWVdPUkRTLFxuICAgIGxpdGVyYWw6IExJVEVSQUxfS0VZV09SRFNcbiAgfTtcbiAgdmFyIFRJVExFX01PREUgPSBobGpzLmluaGVyaXQoaGxqcy5USVRMRV9NT0RFLCB7YmVnaW46ICdbYS16QS1aXShcXFxcLj9cXFxcdykqJ30pO1xuICB2YXIgTlVNQkVSUyA9IHtcbiAgICBjbGFzc05hbWU6ICdudW1iZXInLFxuICAgIHZhcmlhbnRzOiBbXG4gICAgICB7IGJlZ2luOiAnXFxcXGIoMGJbMDFcXCddKyknIH0sXG4gICAgICB7IGJlZ2luOiAnKC0/KVxcXFxiKFtcXFxcZFxcJ10rKFxcXFwuW1xcXFxkXFwnXSopP3xcXFxcLltcXFxcZFxcJ10rKSh1fFV8bHxMfHVsfFVMfGZ8RnxifEIpJyB9LFxuICAgICAgeyBiZWdpbjogJygtPykoXFxcXGIwW3hYXVthLWZBLUYwLTlcXCddK3woXFxcXGJbXFxcXGRcXCddKyhcXFxcLltcXFxcZFxcJ10qKT98XFxcXC5bXFxcXGRcXCddKykoW2VFXVstK10/W1xcXFxkXFwnXSspPyknIH1cbiAgICBdLFxuICAgIHJlbGV2YW5jZTogMFxuICB9O1xuICB2YXIgVkVSQkFUSU1fU1RSSU5HID0ge1xuICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgYmVnaW46ICdAXCInLCBlbmQ6ICdcIicsXG4gICAgY29udGFpbnM6IFt7YmVnaW46ICdcIlwiJ31dXG4gIH07XG4gIHZhciBWRVJCQVRJTV9TVFJJTkdfTk9fTEYgPSBobGpzLmluaGVyaXQoVkVSQkFUSU1fU1RSSU5HLCB7aWxsZWdhbDogL1xcbi99KTtcbiAgdmFyIFNVQlNUID0ge1xuICAgIGNsYXNzTmFtZTogJ3N1YnN0JyxcbiAgICBiZWdpbjogL1xcey8sIGVuZDogL1xcfS8sXG4gICAga2V5d29yZHM6IEtFWVdPUkRTXG4gIH07XG4gIHZhciBTVUJTVF9OT19MRiA9IGhsanMuaW5oZXJpdChTVUJTVCwge2lsbGVnYWw6IC9cXG4vfSk7XG4gIHZhciBJTlRFUlBPTEFURURfU1RSSU5HID0ge1xuICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgYmVnaW46IC9cXCRcIi8sIGVuZDogJ1wiJyxcbiAgICBpbGxlZ2FsOiAvXFxuLyxcbiAgICBjb250YWluczogW3tiZWdpbjogL1xce1xcey99LCB7YmVnaW46IC9cXH1cXH0vfSwgaGxqcy5CQUNLU0xBU0hfRVNDQVBFLCBTVUJTVF9OT19MRl1cbiAgfTtcbiAgdmFyIElOVEVSUE9MQVRFRF9WRVJCQVRJTV9TVFJJTkcgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICBiZWdpbjogL1xcJEBcIi8sIGVuZDogJ1wiJyxcbiAgICBjb250YWluczogW3tiZWdpbjogL1xce1xcey99LCB7YmVnaW46IC9cXH1cXH0vfSwge2JlZ2luOiAnXCJcIid9LCBTVUJTVF1cbiAgfTtcbiAgdmFyIElOVEVSUE9MQVRFRF9WRVJCQVRJTV9TVFJJTkdfTk9fTEYgPSBobGpzLmluaGVyaXQoSU5URVJQT0xBVEVEX1ZFUkJBVElNX1NUUklORywge1xuICAgIGlsbGVnYWw6IC9cXG4vLFxuICAgIGNvbnRhaW5zOiBbe2JlZ2luOiAvXFx7XFx7L30sIHtiZWdpbjogL1xcfVxcfS99LCB7YmVnaW46ICdcIlwiJ30sIFNVQlNUX05PX0xGXVxuICB9KTtcbiAgU1VCU1QuY29udGFpbnMgPSBbXG4gICAgSU5URVJQT0xBVEVEX1ZFUkJBVElNX1NUUklORyxcbiAgICBJTlRFUlBPTEFURURfU1RSSU5HLFxuICAgIFZFUkJBVElNX1NUUklORyxcbiAgICBobGpzLkFQT1NfU1RSSU5HX01PREUsXG4gICAgaGxqcy5RVU9URV9TVFJJTkdfTU9ERSxcbiAgICBOVU1CRVJTLFxuICAgIGhsanMuQ19CTE9DS19DT01NRU5UX01PREVcbiAgXTtcbiAgU1VCU1RfTk9fTEYuY29udGFpbnMgPSBbXG4gICAgSU5URVJQT0xBVEVEX1ZFUkJBVElNX1NUUklOR19OT19MRixcbiAgICBJTlRFUlBPTEFURURfU1RSSU5HLFxuICAgIFZFUkJBVElNX1NUUklOR19OT19MRixcbiAgICBobGpzLkFQT1NfU1RSSU5HX01PREUsXG4gICAgaGxqcy5RVU9URV9TVFJJTkdfTU9ERSxcbiAgICBOVU1CRVJTLFxuICAgIGhsanMuaW5oZXJpdChobGpzLkNfQkxPQ0tfQ09NTUVOVF9NT0RFLCB7aWxsZWdhbDogL1xcbi99KVxuICBdO1xuICB2YXIgU1RSSU5HID0ge1xuICAgIHZhcmlhbnRzOiBbXG4gICAgICBJTlRFUlBPTEFURURfVkVSQkFUSU1fU1RSSU5HLFxuICAgICAgSU5URVJQT0xBVEVEX1NUUklORyxcbiAgICAgIFZFUkJBVElNX1NUUklORyxcbiAgICAgIGhsanMuQVBPU19TVFJJTkdfTU9ERSxcbiAgICAgIGhsanMuUVVPVEVfU1RSSU5HX01PREVcbiAgICBdXG4gIH07XG5cbiAgdmFyIEdFTkVSSUNfTU9ESUZJRVIgPSB7XG4gICAgYmVnaW46IFwiPFwiLFxuICAgIGVuZDogXCI+XCIsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIHsgYmVnaW5LZXl3b3JkczogXCJpbiBvdXRcIn0sXG4gICAgICBUSVRMRV9NT0RFXG4gICAgXVxuICB9O1xuICB2YXIgVFlQRV9JREVOVF9SRSA9IGhsanMuSURFTlRfUkUgKyAnKDwnICsgaGxqcy5JREVOVF9SRSArICcoXFxcXHMqLFxcXFxzKicgKyBobGpzLklERU5UX1JFICsgJykqPik/KFxcXFxbXFxcXF0pPyc7XG4gIHZhciBBVF9JREVOVElGSUVSID0ge1xuICAgIC8vIHByZXZlbnRzIGV4cHJlc3Npb25zIGxpa2UgYEBjbGFzc2AgZnJvbSBpbmNvcnJlY3QgZmxhZ2dpbmdcbiAgICAvLyBgY2xhc3NgIGFzIGEga2V5d29yZFxuICAgIGJlZ2luOiBcIkBcIiArIGhsanMuSURFTlRfUkUsXG4gICAgcmVsZXZhbmNlOiAwXG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnQyMnLFxuICAgIGFsaWFzZXM6IFsnY3MnLCAnYyMnXSxcbiAgICBrZXl3b3JkczogS0VZV09SRFMsXG4gICAgaWxsZWdhbDogLzo6LyxcbiAgICBjb250YWluczogW1xuICAgICAgaGxqcy5DT01NRU5UKFxuICAgICAgICAnLy8vJyxcbiAgICAgICAgJyQnLFxuICAgICAgICB7XG4gICAgICAgICAgcmV0dXJuQmVnaW46IHRydWUsXG4gICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnZG9jdGFnJyxcbiAgICAgICAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBiZWdpbjogJy8vLycsIHJlbGV2YW5jZTogMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYmVnaW46ICc8IS0tfC0tPidcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGJlZ2luOiAnPC8/JywgZW5kOiAnPidcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgICksXG4gICAgICBobGpzLkNfTElORV9DT01NRU5UX01PREUsXG4gICAgICBobGpzLkNfQkxPQ0tfQ09NTUVOVF9NT0RFLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICAgICAgYmVnaW46ICcjJywgZW5kOiAnJCcsXG4gICAgICAgIGtleXdvcmRzOiB7XG4gICAgICAgICAgJ21ldGEta2V5d29yZCc6ICdpZiBlbHNlIGVsaWYgZW5kaWYgZGVmaW5lIHVuZGVmIHdhcm5pbmcgZXJyb3IgbGluZSByZWdpb24gZW5kcmVnaW9uIHByYWdtYSBjaGVja3N1bSdcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFNUUklORyxcbiAgICAgIE5VTUJFUlMsXG4gICAgICB7XG4gICAgICAgIGJlZ2luS2V5d29yZHM6ICdjbGFzcyBpbnRlcmZhY2UnLFxuICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgIGVuZDogL1t7Oz1dLyxcbiAgICAgICAgaWxsZWdhbDogL1teXFxzOixdLyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICB7IGJlZ2luS2V5d29yZHM6IFwid2hlcmUgY2xhc3NcIiB9LFxuICAgICAgICAgIFRJVExFX01PREUsXG4gICAgICAgICAgR0VORVJJQ19NT0RJRklFUixcbiAgICAgICAgICBobGpzLkNfTElORV9DT01NRU5UX01PREUsXG4gICAgICAgICAgaGxqcy5DX0JMT0NLX0NPTU1FTlRfTU9ERVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbktleXdvcmRzOiAnbmFtZXNwYWNlJyxcbiAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICBlbmQ6IC9bezs9XS8sXG4gICAgICAgIGlsbGVnYWw6IC9bXlxcczpdLyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICBUSVRMRV9NT0RFLFxuICAgICAgICAgIGhsanMuQ19MSU5FX0NPTU1FTlRfTU9ERSxcbiAgICAgICAgICBobGpzLkNfQkxPQ0tfQ09NTUVOVF9NT0RFXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luS2V5d29yZHM6ICdyZWNvcmQnLFxuICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgIGVuZDogL1t7Oz1dLyxcbiAgICAgICAgaWxsZWdhbDogL1teXFxzOl0vLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIFRJVExFX01PREUsXG4gICAgICAgICAgR0VORVJJQ19NT0RJRklFUixcbiAgICAgICAgICBobGpzLkNfTElORV9DT01NRU5UX01PREUsXG4gICAgICAgICAgaGxqcy5DX0JMT0NLX0NPTU1FTlRfTU9ERVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAvLyBbQXR0cmlidXRlcyhcIlwiKV1cbiAgICAgICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgICAgIGJlZ2luOiAnXlxcXFxzKlxcXFxbJywgZXhjbHVkZUJlZ2luOiB0cnVlLCBlbmQ6ICdcXFxcXScsIGV4Y2x1ZGVFbmQ6IHRydWUsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAge2NsYXNzTmFtZTogJ21ldGEtc3RyaW5nJywgYmVnaW46IC9cIi8sIGVuZDogL1wiL31cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgLy8gRXhwcmVzc2lvbiBrZXl3b3JkcyBwcmV2ZW50ICdrZXl3b3JkIE5hbWUoLi4uKScgZnJvbSBiZWluZ1xuICAgICAgICAvLyByZWNvZ25pemVkIGFzIGEgZnVuY3Rpb24gZGVmaW5pdGlvblxuICAgICAgICBiZWdpbktleXdvcmRzOiAnbmV3IHJldHVybiB0aHJvdyBhd2FpdCBlbHNlJyxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdmdW5jdGlvbicsXG4gICAgICAgIGJlZ2luOiAnKCcgKyBUWVBFX0lERU5UX1JFICsgJ1xcXFxzKykrJyArIGhsanMuSURFTlRfUkUgKyAnXFxcXHMqKDwuKz5cXFxccyopP1xcXFwoJywgcmV0dXJuQmVnaW46IHRydWUsXG4gICAgICAgIGVuZDogL1xccypbezs9XS8sIGV4Y2x1ZGVFbmQ6IHRydWUsXG4gICAgICAgIGtleXdvcmRzOiBLRVlXT1JEUyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAvLyBwcmV2ZW50cyB0aGVzZSBmcm9tIGJlaW5nIGhpZ2hsaWdodGVkIGB0aXRsZWBcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbktleXdvcmRzOiBGVU5DVElPTl9NT0RJRklFUlMuam9pbihcIiBcIiksXG4gICAgICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luOiBobGpzLklERU5UX1JFICsgJ1xcXFxzKig8Lis+XFxcXHMqKT9cXFxcKCcsIHJldHVybkJlZ2luOiB0cnVlLFxuICAgICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgICAgaGxqcy5USVRMRV9NT0RFLFxuICAgICAgICAgICAgICBHRU5FUklDX01PRElGSUVSXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdwYXJhbXMnLFxuICAgICAgICAgICAgYmVnaW46IC9cXCgvLCBlbmQ6IC9cXCkvLFxuICAgICAgICAgICAgZXhjbHVkZUJlZ2luOiB0cnVlLFxuICAgICAgICAgICAgZXhjbHVkZUVuZDogdHJ1ZSxcbiAgICAgICAgICAgIGtleXdvcmRzOiBLRVlXT1JEUyxcbiAgICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAgIFNUUklORyxcbiAgICAgICAgICAgICAgTlVNQkVSUyxcbiAgICAgICAgICAgICAgaGxqcy5DX0JMT0NLX0NPTU1FTlRfTU9ERVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAgaGxqcy5DX0xJTkVfQ09NTUVOVF9NT0RFLFxuICAgICAgICAgIGhsanMuQ19CTE9DS19DT01NRU5UX01PREVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIEFUX0lERU5USUZJRVJcbiAgICBdXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3NoYXJwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==