(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[91],{

/***/ "./node_modules/highlight.js/lib/languages/kotlin.js":
/*!***********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/kotlin.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://docs.oracle.com/javase/specs/jls/se15/html/jls-3.html#jls-3.10
var decimalDigits = '[0-9](_*[0-9])*';
var frac = `\\.(${decimalDigits})`;
var hexDigits = '[0-9a-fA-F](_*[0-9a-fA-F])*';
var NUMERIC = {
  className: 'number',
  variants: [
    // DecimalFloatingPointLiteral
    // including ExponentPart
    { begin: `(\\b(${decimalDigits})((${frac})|\\.)?|(${frac}))` +
      `[eE][+-]?(${decimalDigits})[fFdD]?\\b` },
    // excluding ExponentPart
    { begin: `\\b(${decimalDigits})((${frac})[fFdD]?\\b|\\.([fFdD]\\b)?)` },
    { begin: `(${frac})[fFdD]?\\b` },
    { begin: `\\b(${decimalDigits})[fFdD]\\b` },

    // HexadecimalFloatingPointLiteral
    { begin: `\\b0[xX]((${hexDigits})\\.?|(${hexDigits})?\\.(${hexDigits}))` +
      `[pP][+-]?(${decimalDigits})[fFdD]?\\b` },

    // DecimalIntegerLiteral
    { begin: '\\b(0|[1-9](_*[0-9])*)[lL]?\\b' },

    // HexIntegerLiteral
    { begin: `\\b0[xX](${hexDigits})[lL]?\\b` },

    // OctalIntegerLiteral
    { begin: '\\b0(_*[0-7])*[lL]?\\b' },

    // BinaryIntegerLiteral
    { begin: '\\b0[bB][01](_*[01])*[lL]?\\b' },
  ],
  relevance: 0
};

/*
 Language: Kotlin
 Description: Kotlin is an OSS statically typed programming language that targets the JVM, Android, JavaScript and Native.
 Author: Sergey Mashkov <cy6erGn0m@gmail.com>
 Website: https://kotlinlang.org
 Category: common
 */

function kotlin(hljs) {
  const KEYWORDS = {
    keyword:
      'abstract as val var vararg get set class object open private protected public noinline ' +
      'crossinline dynamic final enum if else do while for when throw try catch finally ' +
      'import package is in fun override companion reified inline lateinit init ' +
      'interface annotation data sealed internal infix operator out by constructor super ' +
      'tailrec where const inner suspend typealias external expect actual',
    built_in:
      'Byte Short Char Int Long Boolean Float Double Void Unit Nothing',
    literal:
      'true false null'
  };
  const KEYWORDS_WITH_LABEL = {
    className: 'keyword',
    begin: /\b(break|continue|return|this)\b/,
    starts: {
      contains: [
        {
          className: 'symbol',
          begin: /@\w+/
        }
      ]
    }
  };
  const LABEL = {
    className: 'symbol',
    begin: hljs.UNDERSCORE_IDENT_RE + '@'
  };

  // for string templates
  const SUBST = {
    className: 'subst',
    begin: /\$\{/,
    end: /\}/,
    contains: [ hljs.C_NUMBER_MODE ]
  };
  const VARIABLE = {
    className: 'variable',
    begin: '\\$' + hljs.UNDERSCORE_IDENT_RE
  };
  const STRING = {
    className: 'string',
    variants: [
      {
        begin: '"""',
        end: '"""(?=[^"])',
        contains: [
          VARIABLE,
          SUBST
        ]
      },
      // Can't use built-in modes easily, as we want to use STRING in the meta
      // context as 'meta-string' and there's no syntax to remove explicitly set
      // classNames in built-in modes.
      {
        begin: '\'',
        end: '\'',
        illegal: /\n/,
        contains: [ hljs.BACKSLASH_ESCAPE ]
      },
      {
        begin: '"',
        end: '"',
        illegal: /\n/,
        contains: [
          hljs.BACKSLASH_ESCAPE,
          VARIABLE,
          SUBST
        ]
      }
    ]
  };
  SUBST.contains.push(STRING);

  const ANNOTATION_USE_SITE = {
    className: 'meta',
    begin: '@(?:file|property|field|get|set|receiver|param|setparam|delegate)\\s*:(?:\\s*' + hljs.UNDERSCORE_IDENT_RE + ')?'
  };
  const ANNOTATION = {
    className: 'meta',
    begin: '@' + hljs.UNDERSCORE_IDENT_RE,
    contains: [
      {
        begin: /\(/,
        end: /\)/,
        contains: [
          hljs.inherit(STRING, {
            className: 'meta-string'
          })
        ]
      }
    ]
  };

  // https://kotlinlang.org/docs/reference/whatsnew11.html#underscores-in-numeric-literals
  // According to the doc above, the number mode of kotlin is the same as java 8,
  // so the code below is copied from java.js
  const KOTLIN_NUMBER_MODE = NUMERIC;
  const KOTLIN_NESTED_COMMENT = hljs.COMMENT(
    '/\\*', '\\*/',
    {
      contains: [ hljs.C_BLOCK_COMMENT_MODE ]
    }
  );
  const KOTLIN_PAREN_TYPE = {
    variants: [
      {
        className: 'type',
        begin: hljs.UNDERSCORE_IDENT_RE
      },
      {
        begin: /\(/,
        end: /\)/,
        contains: [] // defined later
      }
    ]
  };
  const KOTLIN_PAREN_TYPE2 = KOTLIN_PAREN_TYPE;
  KOTLIN_PAREN_TYPE2.variants[1].contains = [ KOTLIN_PAREN_TYPE ];
  KOTLIN_PAREN_TYPE.variants[1].contains = [ KOTLIN_PAREN_TYPE2 ];

  return {
    name: 'Kotlin',
    aliases: [ 'kt' ],
    keywords: KEYWORDS,
    contains: [
      hljs.COMMENT(
        '/\\*\\*',
        '\\*/',
        {
          relevance: 0,
          contains: [
            {
              className: 'doctag',
              begin: '@[A-Za-z]+'
            }
          ]
        }
      ),
      hljs.C_LINE_COMMENT_MODE,
      KOTLIN_NESTED_COMMENT,
      KEYWORDS_WITH_LABEL,
      LABEL,
      ANNOTATION_USE_SITE,
      ANNOTATION,
      {
        className: 'function',
        beginKeywords: 'fun',
        end: '[(]|$',
        returnBegin: true,
        excludeEnd: true,
        keywords: KEYWORDS,
        relevance: 5,
        contains: [
          {
            begin: hljs.UNDERSCORE_IDENT_RE + '\\s*\\(',
            returnBegin: true,
            relevance: 0,
            contains: [ hljs.UNDERSCORE_TITLE_MODE ]
          },
          {
            className: 'type',
            begin: /</,
            end: />/,
            keywords: 'reified',
            relevance: 0
          },
          {
            className: 'params',
            begin: /\(/,
            end: /\)/,
            endsParent: true,
            keywords: KEYWORDS,
            relevance: 0,
            contains: [
              {
                begin: /:/,
                end: /[=,\/]/,
                endsWithParent: true,
                contains: [
                  KOTLIN_PAREN_TYPE,
                  hljs.C_LINE_COMMENT_MODE,
                  KOTLIN_NESTED_COMMENT
                ],
                relevance: 0
              },
              hljs.C_LINE_COMMENT_MODE,
              KOTLIN_NESTED_COMMENT,
              ANNOTATION_USE_SITE,
              ANNOTATION,
              STRING,
              hljs.C_NUMBER_MODE
            ]
          },
          KOTLIN_NESTED_COMMENT
        ]
      },
      {
        className: 'class',
        beginKeywords: 'class interface trait', // remove 'trait' when removed from KEYWORDS
        end: /[:\{(]|$/,
        excludeEnd: true,
        illegal: 'extends implements',
        contains: [
          {
            beginKeywords: 'public protected internal private constructor'
          },
          hljs.UNDERSCORE_TITLE_MODE,
          {
            className: 'type',
            begin: /</,
            end: />/,
            excludeBegin: true,
            excludeEnd: true,
            relevance: 0
          },
          {
            className: 'type',
            begin: /[,:]\s*/,
            end: /[<\(,]|$/,
            excludeBegin: true,
            returnEnd: true
          },
          ANNOTATION_USE_SITE,
          ANNOTATION
        ]
      },
      STRING,
      {
        className: 'meta',
        begin: "^#!/usr/bin/env",
        end: '$',
        illegal: '\n'
      },
      KOTLIN_NUMBER_MODE
    ]
  };
}

module.exports = kotlin;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2tvdGxpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0Esa0JBQWtCLGNBQWM7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxnQkFBZ0IsY0FBYyxLQUFLLEtBQUssV0FBVyxLQUFLO0FBQzdELG1CQUFtQixjQUFjLGNBQWM7QUFDL0M7QUFDQSxLQUFLLGVBQWUsY0FBYyxLQUFLLEtBQUssK0JBQStCO0FBQzNFLEtBQUssWUFBWSxLQUFLLGNBQWM7QUFDcEMsS0FBSyxlQUFlLGNBQWMsYUFBYTs7QUFFL0M7QUFDQSxLQUFLLHFCQUFxQixVQUFVLFNBQVMsVUFBVSxRQUFRLFVBQVU7QUFDekUsbUJBQW1CLGNBQWMsY0FBYzs7QUFFL0M7QUFDQSxLQUFLLDBDQUEwQzs7QUFFL0M7QUFDQSxLQUFLLG9CQUFvQixVQUFVLFlBQVk7O0FBRS9DO0FBQ0EsS0FBSyxrQ0FBa0M7O0FBRXZDO0FBQ0EsS0FBSyx5Q0FBeUM7QUFDOUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoic3RhdGljL2NodW5rcy85MS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGh0dHBzOi8vZG9jcy5vcmFjbGUuY29tL2phdmFzZS9zcGVjcy9qbHMvc2UxNS9odG1sL2pscy0zLmh0bWwjamxzLTMuMTBcbnZhciBkZWNpbWFsRGlnaXRzID0gJ1swLTldKF8qWzAtOV0pKic7XG52YXIgZnJhYyA9IGBcXFxcLigke2RlY2ltYWxEaWdpdHN9KWA7XG52YXIgaGV4RGlnaXRzID0gJ1swLTlhLWZBLUZdKF8qWzAtOWEtZkEtRl0pKic7XG52YXIgTlVNRVJJQyA9IHtcbiAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgdmFyaWFudHM6IFtcbiAgICAvLyBEZWNpbWFsRmxvYXRpbmdQb2ludExpdGVyYWxcbiAgICAvLyBpbmNsdWRpbmcgRXhwb25lbnRQYXJ0XG4gICAgeyBiZWdpbjogYChcXFxcYigke2RlY2ltYWxEaWdpdHN9KSgoJHtmcmFjfSl8XFxcXC4pP3woJHtmcmFjfSkpYCArXG4gICAgICBgW2VFXVsrLV0/KCR7ZGVjaW1hbERpZ2l0c30pW2ZGZERdP1xcXFxiYCB9LFxuICAgIC8vIGV4Y2x1ZGluZyBFeHBvbmVudFBhcnRcbiAgICB7IGJlZ2luOiBgXFxcXGIoJHtkZWNpbWFsRGlnaXRzfSkoKCR7ZnJhY30pW2ZGZERdP1xcXFxifFxcXFwuKFtmRmREXVxcXFxiKT8pYCB9LFxuICAgIHsgYmVnaW46IGAoJHtmcmFjfSlbZkZkRF0/XFxcXGJgIH0sXG4gICAgeyBiZWdpbjogYFxcXFxiKCR7ZGVjaW1hbERpZ2l0c30pW2ZGZERdXFxcXGJgIH0sXG5cbiAgICAvLyBIZXhhZGVjaW1hbEZsb2F0aW5nUG9pbnRMaXRlcmFsXG4gICAgeyBiZWdpbjogYFxcXFxiMFt4WF0oKCR7aGV4RGlnaXRzfSlcXFxcLj98KCR7aGV4RGlnaXRzfSk/XFxcXC4oJHtoZXhEaWdpdHN9KSlgICtcbiAgICAgIGBbcFBdWystXT8oJHtkZWNpbWFsRGlnaXRzfSlbZkZkRF0/XFxcXGJgIH0sXG5cbiAgICAvLyBEZWNpbWFsSW50ZWdlckxpdGVyYWxcbiAgICB7IGJlZ2luOiAnXFxcXGIoMHxbMS05XShfKlswLTldKSopW2xMXT9cXFxcYicgfSxcblxuICAgIC8vIEhleEludGVnZXJMaXRlcmFsXG4gICAgeyBiZWdpbjogYFxcXFxiMFt4WF0oJHtoZXhEaWdpdHN9KVtsTF0/XFxcXGJgIH0sXG5cbiAgICAvLyBPY3RhbEludGVnZXJMaXRlcmFsXG4gICAgeyBiZWdpbjogJ1xcXFxiMChfKlswLTddKSpbbExdP1xcXFxiJyB9LFxuXG4gICAgLy8gQmluYXJ5SW50ZWdlckxpdGVyYWxcbiAgICB7IGJlZ2luOiAnXFxcXGIwW2JCXVswMV0oXypbMDFdKSpbbExdP1xcXFxiJyB9LFxuICBdLFxuICByZWxldmFuY2U6IDBcbn07XG5cbi8qXG4gTGFuZ3VhZ2U6IEtvdGxpblxuIERlc2NyaXB0aW9uOiBLb3RsaW4gaXMgYW4gT1NTIHN0YXRpY2FsbHkgdHlwZWQgcHJvZ3JhbW1pbmcgbGFuZ3VhZ2UgdGhhdCB0YXJnZXRzIHRoZSBKVk0sIEFuZHJvaWQsIEphdmFTY3JpcHQgYW5kIE5hdGl2ZS5cbiBBdXRob3I6IFNlcmdleSBNYXNoa292IDxjeTZlckduMG1AZ21haWwuY29tPlxuIFdlYnNpdGU6IGh0dHBzOi8va290bGlubGFuZy5vcmdcbiBDYXRlZ29yeTogY29tbW9uXG4gKi9cblxuZnVuY3Rpb24ga290bGluKGhsanMpIHtcbiAgY29uc3QgS0VZV09SRFMgPSB7XG4gICAga2V5d29yZDpcbiAgICAgICdhYnN0cmFjdCBhcyB2YWwgdmFyIHZhcmFyZyBnZXQgc2V0IGNsYXNzIG9iamVjdCBvcGVuIHByaXZhdGUgcHJvdGVjdGVkIHB1YmxpYyBub2lubGluZSAnICtcbiAgICAgICdjcm9zc2lubGluZSBkeW5hbWljIGZpbmFsIGVudW0gaWYgZWxzZSBkbyB3aGlsZSBmb3Igd2hlbiB0aHJvdyB0cnkgY2F0Y2ggZmluYWxseSAnICtcbiAgICAgICdpbXBvcnQgcGFja2FnZSBpcyBpbiBmdW4gb3ZlcnJpZGUgY29tcGFuaW9uIHJlaWZpZWQgaW5saW5lIGxhdGVpbml0IGluaXQgJyArXG4gICAgICAnaW50ZXJmYWNlIGFubm90YXRpb24gZGF0YSBzZWFsZWQgaW50ZXJuYWwgaW5maXggb3BlcmF0b3Igb3V0IGJ5IGNvbnN0cnVjdG9yIHN1cGVyICcgK1xuICAgICAgJ3RhaWxyZWMgd2hlcmUgY29uc3QgaW5uZXIgc3VzcGVuZCB0eXBlYWxpYXMgZXh0ZXJuYWwgZXhwZWN0IGFjdHVhbCcsXG4gICAgYnVpbHRfaW46XG4gICAgICAnQnl0ZSBTaG9ydCBDaGFyIEludCBMb25nIEJvb2xlYW4gRmxvYXQgRG91YmxlIFZvaWQgVW5pdCBOb3RoaW5nJyxcbiAgICBsaXRlcmFsOlxuICAgICAgJ3RydWUgZmFsc2UgbnVsbCdcbiAgfTtcbiAgY29uc3QgS0VZV09SRFNfV0lUSF9MQUJFTCA9IHtcbiAgICBjbGFzc05hbWU6ICdrZXl3b3JkJyxcbiAgICBiZWdpbjogL1xcYihicmVha3xjb250aW51ZXxyZXR1cm58dGhpcylcXGIvLFxuICAgIHN0YXJ0czoge1xuICAgICAgY29udGFpbnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGNsYXNzTmFtZTogJ3N5bWJvbCcsXG4gICAgICAgICAgYmVnaW46IC9AXFx3Ky9cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgfTtcbiAgY29uc3QgTEFCRUwgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3ltYm9sJyxcbiAgICBiZWdpbjogaGxqcy5VTkRFUlNDT1JFX0lERU5UX1JFICsgJ0AnXG4gIH07XG5cbiAgLy8gZm9yIHN0cmluZyB0ZW1wbGF0ZXNcbiAgY29uc3QgU1VCU1QgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3Vic3QnLFxuICAgIGJlZ2luOiAvXFwkXFx7LyxcbiAgICBlbmQ6IC9cXH0vLFxuICAgIGNvbnRhaW5zOiBbIGhsanMuQ19OVU1CRVJfTU9ERSBdXG4gIH07XG4gIGNvbnN0IFZBUklBQkxFID0ge1xuICAgIGNsYXNzTmFtZTogJ3ZhcmlhYmxlJyxcbiAgICBiZWdpbjogJ1xcXFwkJyArIGhsanMuVU5ERVJTQ09SRV9JREVOVF9SRVxuICB9O1xuICBjb25zdCBTVFJJTkcgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICB2YXJpYW50czogW1xuICAgICAge1xuICAgICAgICBiZWdpbjogJ1wiXCJcIicsXG4gICAgICAgIGVuZDogJ1wiXCJcIig/PVteXCJdKScsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgVkFSSUFCTEUsXG4gICAgICAgICAgU1VCU1RcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIC8vIENhbid0IHVzZSBidWlsdC1pbiBtb2RlcyBlYXNpbHksIGFzIHdlIHdhbnQgdG8gdXNlIFNUUklORyBpbiB0aGUgbWV0YVxuICAgICAgLy8gY29udGV4dCBhcyAnbWV0YS1zdHJpbmcnIGFuZCB0aGVyZSdzIG5vIHN5bnRheCB0byByZW1vdmUgZXhwbGljaXRseSBzZXRcbiAgICAgIC8vIGNsYXNzTmFtZXMgaW4gYnVpbHQtaW4gbW9kZXMuXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnXFwnJyxcbiAgICAgICAgZW5kOiAnXFwnJyxcbiAgICAgICAgaWxsZWdhbDogL1xcbi8sXG4gICAgICAgIGNvbnRhaW5zOiBbIGhsanMuQkFDS1NMQVNIX0VTQ0FQRSBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogJ1wiJyxcbiAgICAgICAgZW5kOiAnXCInLFxuICAgICAgICBpbGxlZ2FsOiAvXFxuLyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICBobGpzLkJBQ0tTTEFTSF9FU0NBUEUsXG4gICAgICAgICAgVkFSSUFCTEUsXG4gICAgICAgICAgU1VCU1RcbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfTtcbiAgU1VCU1QuY29udGFpbnMucHVzaChTVFJJTkcpO1xuXG4gIGNvbnN0IEFOTk9UQVRJT05fVVNFX1NJVEUgPSB7XG4gICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgYmVnaW46ICdAKD86ZmlsZXxwcm9wZXJ0eXxmaWVsZHxnZXR8c2V0fHJlY2VpdmVyfHBhcmFtfHNldHBhcmFtfGRlbGVnYXRlKVxcXFxzKjooPzpcXFxccyonICsgaGxqcy5VTkRFUlNDT1JFX0lERU5UX1JFICsgJyk/J1xuICB9O1xuICBjb25zdCBBTk5PVEFUSU9OID0ge1xuICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgIGJlZ2luOiAnQCcgKyBobGpzLlVOREVSU0NPUkVfSURFTlRfUkUsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IC9cXCgvLFxuICAgICAgICBlbmQ6IC9cXCkvLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIGhsanMuaW5oZXJpdChTVFJJTkcsIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ21ldGEtc3RyaW5nJ1xuICAgICAgICAgIH0pXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH07XG5cbiAgLy8gaHR0cHM6Ly9rb3RsaW5sYW5nLm9yZy9kb2NzL3JlZmVyZW5jZS93aGF0c25ldzExLmh0bWwjdW5kZXJzY29yZXMtaW4tbnVtZXJpYy1saXRlcmFsc1xuICAvLyBBY2NvcmRpbmcgdG8gdGhlIGRvYyBhYm92ZSwgdGhlIG51bWJlciBtb2RlIG9mIGtvdGxpbiBpcyB0aGUgc2FtZSBhcyBqYXZhIDgsXG4gIC8vIHNvIHRoZSBjb2RlIGJlbG93IGlzIGNvcGllZCBmcm9tIGphdmEuanNcbiAgY29uc3QgS09UTElOX05VTUJFUl9NT0RFID0gTlVNRVJJQztcbiAgY29uc3QgS09UTElOX05FU1RFRF9DT01NRU5UID0gaGxqcy5DT01NRU5UKFxuICAgICcvXFxcXConLCAnXFxcXCovJyxcbiAgICB7XG4gICAgICBjb250YWluczogWyBobGpzLkNfQkxPQ0tfQ09NTUVOVF9NT0RFIF1cbiAgICB9XG4gICk7XG4gIGNvbnN0IEtPVExJTl9QQVJFTl9UWVBFID0ge1xuICAgIHZhcmlhbnRzOiBbXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3R5cGUnLFxuICAgICAgICBiZWdpbjogaGxqcy5VTkRFUlNDT1JFX0lERU5UX1JFXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogL1xcKC8sXG4gICAgICAgIGVuZDogL1xcKS8sXG4gICAgICAgIGNvbnRhaW5zOiBbXSAvLyBkZWZpbmVkIGxhdGVyXG4gICAgICB9XG4gICAgXVxuICB9O1xuICBjb25zdCBLT1RMSU5fUEFSRU5fVFlQRTIgPSBLT1RMSU5fUEFSRU5fVFlQRTtcbiAgS09UTElOX1BBUkVOX1RZUEUyLnZhcmlhbnRzWzFdLmNvbnRhaW5zID0gWyBLT1RMSU5fUEFSRU5fVFlQRSBdO1xuICBLT1RMSU5fUEFSRU5fVFlQRS52YXJpYW50c1sxXS5jb250YWlucyA9IFsgS09UTElOX1BBUkVOX1RZUEUyIF07XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnS290bGluJyxcbiAgICBhbGlhc2VzOiBbICdrdCcgXSxcbiAgICBrZXl3b3JkczogS0VZV09SRFMsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIGhsanMuQ09NTUVOVChcbiAgICAgICAgJy9cXFxcKlxcXFwqJyxcbiAgICAgICAgJ1xcXFwqLycsXG4gICAgICAgIHtcbiAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnZG9jdGFnJyxcbiAgICAgICAgICAgICAgYmVnaW46ICdAW0EtWmEtel0rJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgKSxcbiAgICAgIGhsanMuQ19MSU5FX0NPTU1FTlRfTU9ERSxcbiAgICAgIEtPVExJTl9ORVNURURfQ09NTUVOVCxcbiAgICAgIEtFWVdPUkRTX1dJVEhfTEFCRUwsXG4gICAgICBMQUJFTCxcbiAgICAgIEFOTk9UQVRJT05fVVNFX1NJVEUsXG4gICAgICBBTk5PVEFUSU9OLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdmdW5jdGlvbicsXG4gICAgICAgIGJlZ2luS2V5d29yZHM6ICdmdW4nLFxuICAgICAgICBlbmQ6ICdbKF18JCcsXG4gICAgICAgIHJldHVybkJlZ2luOiB0cnVlLFxuICAgICAgICBleGNsdWRlRW5kOiB0cnVlLFxuICAgICAgICBrZXl3b3JkczogS0VZV09SRFMsXG4gICAgICAgIHJlbGV2YW5jZTogNSxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogaGxqcy5VTkRFUlNDT1JFX0lERU5UX1JFICsgJ1xcXFxzKlxcXFwoJyxcbiAgICAgICAgICAgIHJldHVybkJlZ2luOiB0cnVlLFxuICAgICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgICAgY29udGFpbnM6IFsgaGxqcy5VTkRFUlNDT1JFX1RJVExFX01PREUgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAndHlwZScsXG4gICAgICAgICAgICBiZWdpbjogLzwvLFxuICAgICAgICAgICAgZW5kOiAvPi8sXG4gICAgICAgICAgICBrZXl3b3JkczogJ3JlaWZpZWQnLFxuICAgICAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdwYXJhbXMnLFxuICAgICAgICAgICAgYmVnaW46IC9cXCgvLFxuICAgICAgICAgICAgZW5kOiAvXFwpLyxcbiAgICAgICAgICAgIGVuZHNQYXJlbnQ6IHRydWUsXG4gICAgICAgICAgICBrZXl3b3JkczogS0VZV09SRFMsXG4gICAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYmVnaW46IC86LyxcbiAgICAgICAgICAgICAgICBlbmQ6IC9bPSxcXC9dLyxcbiAgICAgICAgICAgICAgICBlbmRzV2l0aFBhcmVudDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgICAgICAgS09UTElOX1BBUkVOX1RZUEUsXG4gICAgICAgICAgICAgICAgICBobGpzLkNfTElORV9DT01NRU5UX01PREUsXG4gICAgICAgICAgICAgICAgICBLT1RMSU5fTkVTVEVEX0NPTU1FTlRcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBobGpzLkNfTElORV9DT01NRU5UX01PREUsXG4gICAgICAgICAgICAgIEtPVExJTl9ORVNURURfQ09NTUVOVCxcbiAgICAgICAgICAgICAgQU5OT1RBVElPTl9VU0VfU0lURSxcbiAgICAgICAgICAgICAgQU5OT1RBVElPTixcbiAgICAgICAgICAgICAgU1RSSU5HLFxuICAgICAgICAgICAgICBobGpzLkNfTlVNQkVSX01PREVcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIEtPVExJTl9ORVNURURfQ09NTUVOVFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdjbGFzcycsXG4gICAgICAgIGJlZ2luS2V5d29yZHM6ICdjbGFzcyBpbnRlcmZhY2UgdHJhaXQnLCAvLyByZW1vdmUgJ3RyYWl0JyB3aGVuIHJlbW92ZWQgZnJvbSBLRVlXT1JEU1xuICAgICAgICBlbmQ6IC9bOlxceyhdfCQvLFxuICAgICAgICBleGNsdWRlRW5kOiB0cnVlLFxuICAgICAgICBpbGxlZ2FsOiAnZXh0ZW5kcyBpbXBsZW1lbnRzJyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbktleXdvcmRzOiAncHVibGljIHByb3RlY3RlZCBpbnRlcm5hbCBwcml2YXRlIGNvbnN0cnVjdG9yJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgaGxqcy5VTkRFUlNDT1JFX1RJVExFX01PREUsXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAndHlwZScsXG4gICAgICAgICAgICBiZWdpbjogLzwvLFxuICAgICAgICAgICAgZW5kOiAvPi8sXG4gICAgICAgICAgICBleGNsdWRlQmVnaW46IHRydWUsXG4gICAgICAgICAgICBleGNsdWRlRW5kOiB0cnVlLFxuICAgICAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICd0eXBlJyxcbiAgICAgICAgICAgIGJlZ2luOiAvWyw6XVxccyovLFxuICAgICAgICAgICAgZW5kOiAvWzxcXCgsXXwkLyxcbiAgICAgICAgICAgIGV4Y2x1ZGVCZWdpbjogdHJ1ZSxcbiAgICAgICAgICAgIHJldHVybkVuZDogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgQU5OT1RBVElPTl9VU0VfU0lURSxcbiAgICAgICAgICBBTk5PVEFUSU9OXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBTVFJJTkcsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgICAgICBiZWdpbjogXCJeIyEvdXNyL2Jpbi9lbnZcIixcbiAgICAgICAgZW5kOiAnJCcsXG4gICAgICAgIGlsbGVnYWw6ICdcXG4nXG4gICAgICB9LFxuICAgICAgS09UTElOX05VTUJFUl9NT0RFXG4gICAgXVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGtvdGxpbjtcbiJdLCJzb3VyY2VSb290IjoiIn0=