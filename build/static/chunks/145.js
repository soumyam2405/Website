(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[145],{

/***/ "./node_modules/highlight.js/lib/languages/r.js":
/*!******************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/r.js ***!
  \******************************************************/
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
Language: R
Description: R is a free software environment for statistical computing and graphics.
Author: Joe Cheng <joe@rstudio.org>
Contributors: Konrad Rudolph <konrad.rudolph@gmail.com>
Website: https://www.r-project.org
Category: common,scientific
*/

/** @type LanguageFn */
function r(hljs) {
  // Identifiers in R cannot start with `_`, but they can start with `.` if it
  // is not immediately followed by a digit.
  // R also supports quoted identifiers, which are near-arbitrary sequences
  // delimited by backticks (`…`), which may contain escape sequences. These are
  // handled in a separate mode. See `test/markup/r/names.txt` for examples.
  // FIXME: Support Unicode identifiers.
  const IDENT_RE = /(?:(?:[a-zA-Z]|\.[._a-zA-Z])[._a-zA-Z0-9]*)|\.(?!\d)/;
  const SIMPLE_IDENT = /[a-zA-Z][a-zA-Z_0-9]*/;

  return {
    name: 'R',

    // only in Haskell, not R
    illegal: /->/,
    keywords: {
      $pattern: IDENT_RE,
      keyword:
        'function if in break next repeat else for while',
      literal:
        'NULL NA TRUE FALSE Inf NaN NA_integer_|10 NA_real_|10 ' +
        'NA_character_|10 NA_complex_|10',
      built_in:
        // Builtin constants
        'LETTERS letters month.abb month.name pi T F ' +
        // Primitive functions
        // These are all the functions in `base` that are implemented as a
        // `.Primitive`, minus those functions that are also keywords.
        'abs acos acosh all any anyNA Arg as.call as.character ' +
        'as.complex as.double as.environment as.integer as.logical ' +
        'as.null.default as.numeric as.raw asin asinh atan atanh attr ' +
        'attributes baseenv browser c call ceiling class Conj cos cosh ' +
        'cospi cummax cummin cumprod cumsum digamma dim dimnames ' +
        'emptyenv exp expression floor forceAndCall gamma gc.time ' +
        'globalenv Im interactive invisible is.array is.atomic is.call ' +
        'is.character is.complex is.double is.environment is.expression ' +
        'is.finite is.function is.infinite is.integer is.language ' +
        'is.list is.logical is.matrix is.na is.name is.nan is.null ' +
        'is.numeric is.object is.pairlist is.raw is.recursive is.single ' +
        'is.symbol lazyLoadDBfetch length lgamma list log max min ' +
        'missing Mod names nargs nzchar oldClass on.exit pos.to.env ' +
        'proc.time prod quote range Re rep retracemem return round ' +
        'seq_along seq_len seq.int sign signif sin sinh sinpi sqrt ' +
        'standardGeneric substitute sum switch tan tanh tanpi tracemem ' +
        'trigamma trunc unclass untracemem UseMethod xtfrm',
    },
    compilerExtensions: [
      // allow beforeMatch to act as a "qualifier" for the match
      // the full match begin must be [beforeMatch][begin]
      (mode, parent) => {
        if (!mode.beforeMatch) return;
        // starts conflicts with endsParent which we need to make sure the child
        // rule is not matched multiple times
        if (mode.starts) throw new Error("beforeMatch cannot be used with starts");

        const originalMode = Object.assign({}, mode);
        Object.keys(mode).forEach((key) => { delete mode[key]; });

        mode.begin = concat(originalMode.beforeMatch, lookahead(originalMode.begin));
        mode.starts = {
          relevance: 0,
          contains: [
            Object.assign(originalMode, { endsParent: true })
          ]
        };
        mode.relevance = 0;

        delete originalMode.beforeMatch;
      }
    ],
    contains: [
      // Roxygen comments
      hljs.COMMENT(
        /#'/,
        /$/,
        {
          contains: [
            {
              // Handle `@examples` separately to cause all subsequent code
              // until the next `@`-tag on its own line to be kept as-is,
              // preventing highlighting. This code is example R code, so nested
              // doctags shouldn’t be treated as such. See
              // `test/markup/r/roxygen.txt` for an example.
              className: 'doctag',
              begin: '@examples',
              starts: {
                contains: [
                  { begin: /\n/ },
                  {
                    begin: /#'\s*(?=@[a-zA-Z]+)/,
                    endsParent: true,
                  },
                  {
                    begin: /#'/,
                    end: /$/,
                    excludeBegin: true,
                  }
                ]
              }
            },
            {
              // Handle `@param` to highlight the parameter name following
              // after.
              className: 'doctag',
              begin: '@param',
              end: /$/,
              contains: [
                {
                  className: 'variable',
                  variants: [
                    { begin: IDENT_RE },
                    { begin: /`(?:\\.|[^`\\])+`/ }
                  ],
                  endsParent: true
                }
              ]
            },
            {
              className: 'doctag',
              begin: /@[a-zA-Z]+/
            },
            {
              className: 'meta-keyword',
              begin: /\\[a-zA-Z]+/,
            }
          ]
        }
      ),

      hljs.HASH_COMMENT_MODE,

      {
        className: 'string',
        contains: [hljs.BACKSLASH_ESCAPE],
        variants: [
          hljs.END_SAME_AS_BEGIN({ begin: /[rR]"(-*)\(/, end: /\)(-*)"/ }),
          hljs.END_SAME_AS_BEGIN({ begin: /[rR]"(-*)\{/, end: /\}(-*)"/ }),
          hljs.END_SAME_AS_BEGIN({ begin: /[rR]"(-*)\[/, end: /\](-*)"/ }),
          hljs.END_SAME_AS_BEGIN({ begin: /[rR]'(-*)\(/, end: /\)(-*)'/ }),
          hljs.END_SAME_AS_BEGIN({ begin: /[rR]'(-*)\{/, end: /\}(-*)'/ }),
          hljs.END_SAME_AS_BEGIN({ begin: /[rR]'(-*)\[/, end: /\](-*)'/ }),
          {begin: '"', end: '"', relevance: 0},
          {begin: "'", end: "'", relevance: 0}
        ],
      },
      {
        className: 'number',
        relevance: 0,
        beforeMatch: /([^a-zA-Z0-9._])/, // not part of an identifier
        variants: [
          // TODO: replace with negative look-behind when available
          // { begin: /(?<![a-zA-Z0-9._])0[xX][0-9a-fA-F]+\.[0-9a-fA-F]*[pP][+-]?\d+i?/ },
          // { begin: /(?<![a-zA-Z0-9._])0[xX][0-9a-fA-F]+([pP][+-]?\d+)?[Li]?/ },
          // { begin: /(?<![a-zA-Z0-9._])(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?[Li]?/ }
          {
            // Special case: only hexadecimal binary powers can contain fractions.
            match: /0[xX][0-9a-fA-F]+\.[0-9a-fA-F]*[pP][+-]?\d+i?/,
          },
          {
            match: /0[xX][0-9a-fA-F]+([pP][+-]?\d+)?[Li]?/
          },
          {
            match: /(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?[Li]?/,
          }
        ],
      },
      {
        // infix operator
        begin: '%',
        end: '%'
      },
      // relevance boost for assignment
      {
        begin: concat(SIMPLE_IDENT, "\\s+<-\\s+")
      },
      {
        // escaped identifier
        begin: '`',
        end: '`',
        contains: [
          { begin: /\\./ }
        ]
      }
    ]
  };
}

module.exports = r;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYTtBQUNiOztBQUVBO0FBQ0EsV0FBVyxpQkFBaUI7QUFDNUIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLGlCQUFpQjtBQUM1QixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLHNCQUFzQjtBQUNqQyxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZDQUE2QztBQUM3Qyw0Q0FBNEMsa0JBQWtCLEVBQUU7O0FBRWhFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLG1CQUFtQjtBQUM1RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixjQUFjO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixrQkFBa0I7QUFDdkMscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyx1Q0FBdUM7QUFDekUsa0NBQWtDLG9CQUFvQixXQUFXLFFBQVE7QUFDekUsa0NBQWtDLHVDQUF1QztBQUN6RSxrQ0FBa0MsdUNBQXVDO0FBQ3pFLGtDQUFrQyxvQkFBb0IsV0FBVyxRQUFRO0FBQ3pFLGtDQUFrQyx1Q0FBdUM7QUFDekUsV0FBVyxtQ0FBbUM7QUFDOUMsV0FBVztBQUNYO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsMkVBQTJFO0FBQ3pGLGNBQWMsbUVBQW1FO0FBQ2pGLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvMTQ1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm5zIHtSZWdFeHB9XG4gKiAqL1xuXG4vKipcbiAqIEBwYXJhbSB7UmVnRXhwIHwgc3RyaW5nIH0gcmVcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIHNvdXJjZShyZSkge1xuICBpZiAoIXJlKSByZXR1cm4gbnVsbDtcbiAgaWYgKHR5cGVvZiByZSA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIHJlO1xuXG4gIHJldHVybiByZS5zb3VyY2U7XG59XG5cbi8qKlxuICogQHBhcmFtIHtSZWdFeHAgfCBzdHJpbmcgfSByZVxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gbG9va2FoZWFkKHJlKSB7XG4gIHJldHVybiBjb25jYXQoJyg/PScsIHJlLCAnKScpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7Li4uKFJlZ0V4cCB8IHN0cmluZykgfSBhcmdzXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBjb25jYXQoLi4uYXJncykge1xuICBjb25zdCBqb2luZWQgPSBhcmdzLm1hcCgoeCkgPT4gc291cmNlKHgpKS5qb2luKFwiXCIpO1xuICByZXR1cm4gam9pbmVkO1xufVxuXG4vKlxuTGFuZ3VhZ2U6IFJcbkRlc2NyaXB0aW9uOiBSIGlzIGEgZnJlZSBzb2Z0d2FyZSBlbnZpcm9ubWVudCBmb3Igc3RhdGlzdGljYWwgY29tcHV0aW5nIGFuZCBncmFwaGljcy5cbkF1dGhvcjogSm9lIENoZW5nIDxqb2VAcnN0dWRpby5vcmc+XG5Db250cmlidXRvcnM6IEtvbnJhZCBSdWRvbHBoIDxrb25yYWQucnVkb2xwaEBnbWFpbC5jb20+XG5XZWJzaXRlOiBodHRwczovL3d3dy5yLXByb2plY3Qub3JnXG5DYXRlZ29yeTogY29tbW9uLHNjaWVudGlmaWNcbiovXG5cbi8qKiBAdHlwZSBMYW5ndWFnZUZuICovXG5mdW5jdGlvbiByKGhsanMpIHtcbiAgLy8gSWRlbnRpZmllcnMgaW4gUiBjYW5ub3Qgc3RhcnQgd2l0aCBgX2AsIGJ1dCB0aGV5IGNhbiBzdGFydCB3aXRoIGAuYCBpZiBpdFxuICAvLyBpcyBub3QgaW1tZWRpYXRlbHkgZm9sbG93ZWQgYnkgYSBkaWdpdC5cbiAgLy8gUiBhbHNvIHN1cHBvcnRzIHF1b3RlZCBpZGVudGlmaWVycywgd2hpY2ggYXJlIG5lYXItYXJiaXRyYXJ5IHNlcXVlbmNlc1xuICAvLyBkZWxpbWl0ZWQgYnkgYmFja3RpY2tzIChg4oCmYCksIHdoaWNoIG1heSBjb250YWluIGVzY2FwZSBzZXF1ZW5jZXMuIFRoZXNlIGFyZVxuICAvLyBoYW5kbGVkIGluIGEgc2VwYXJhdGUgbW9kZS4gU2VlIGB0ZXN0L21hcmt1cC9yL25hbWVzLnR4dGAgZm9yIGV4YW1wbGVzLlxuICAvLyBGSVhNRTogU3VwcG9ydCBVbmljb2RlIGlkZW50aWZpZXJzLlxuICBjb25zdCBJREVOVF9SRSA9IC8oPzooPzpbYS16QS1aXXxcXC5bLl9hLXpBLVpdKVsuX2EtekEtWjAtOV0qKXxcXC4oPyFcXGQpLztcbiAgY29uc3QgU0lNUExFX0lERU5UID0gL1thLXpBLVpdW2EtekEtWl8wLTldKi87XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnUicsXG5cbiAgICAvLyBvbmx5IGluIEhhc2tlbGwsIG5vdCBSXG4gICAgaWxsZWdhbDogLy0+LyxcbiAgICBrZXl3b3Jkczoge1xuICAgICAgJHBhdHRlcm46IElERU5UX1JFLFxuICAgICAga2V5d29yZDpcbiAgICAgICAgJ2Z1bmN0aW9uIGlmIGluIGJyZWFrIG5leHQgcmVwZWF0IGVsc2UgZm9yIHdoaWxlJyxcbiAgICAgIGxpdGVyYWw6XG4gICAgICAgICdOVUxMIE5BIFRSVUUgRkFMU0UgSW5mIE5hTiBOQV9pbnRlZ2VyX3wxMCBOQV9yZWFsX3wxMCAnICtcbiAgICAgICAgJ05BX2NoYXJhY3Rlcl98MTAgTkFfY29tcGxleF98MTAnLFxuICAgICAgYnVpbHRfaW46XG4gICAgICAgIC8vIEJ1aWx0aW4gY29uc3RhbnRzXG4gICAgICAgICdMRVRURVJTIGxldHRlcnMgbW9udGguYWJiIG1vbnRoLm5hbWUgcGkgVCBGICcgK1xuICAgICAgICAvLyBQcmltaXRpdmUgZnVuY3Rpb25zXG4gICAgICAgIC8vIFRoZXNlIGFyZSBhbGwgdGhlIGZ1bmN0aW9ucyBpbiBgYmFzZWAgdGhhdCBhcmUgaW1wbGVtZW50ZWQgYXMgYVxuICAgICAgICAvLyBgLlByaW1pdGl2ZWAsIG1pbnVzIHRob3NlIGZ1bmN0aW9ucyB0aGF0IGFyZSBhbHNvIGtleXdvcmRzLlxuICAgICAgICAnYWJzIGFjb3MgYWNvc2ggYWxsIGFueSBhbnlOQSBBcmcgYXMuY2FsbCBhcy5jaGFyYWN0ZXIgJyArXG4gICAgICAgICdhcy5jb21wbGV4IGFzLmRvdWJsZSBhcy5lbnZpcm9ubWVudCBhcy5pbnRlZ2VyIGFzLmxvZ2ljYWwgJyArXG4gICAgICAgICdhcy5udWxsLmRlZmF1bHQgYXMubnVtZXJpYyBhcy5yYXcgYXNpbiBhc2luaCBhdGFuIGF0YW5oIGF0dHIgJyArXG4gICAgICAgICdhdHRyaWJ1dGVzIGJhc2VlbnYgYnJvd3NlciBjIGNhbGwgY2VpbGluZyBjbGFzcyBDb25qIGNvcyBjb3NoICcgK1xuICAgICAgICAnY29zcGkgY3VtbWF4IGN1bW1pbiBjdW1wcm9kIGN1bXN1bSBkaWdhbW1hIGRpbSBkaW1uYW1lcyAnICtcbiAgICAgICAgJ2VtcHR5ZW52IGV4cCBleHByZXNzaW9uIGZsb29yIGZvcmNlQW5kQ2FsbCBnYW1tYSBnYy50aW1lICcgK1xuICAgICAgICAnZ2xvYmFsZW52IEltIGludGVyYWN0aXZlIGludmlzaWJsZSBpcy5hcnJheSBpcy5hdG9taWMgaXMuY2FsbCAnICtcbiAgICAgICAgJ2lzLmNoYXJhY3RlciBpcy5jb21wbGV4IGlzLmRvdWJsZSBpcy5lbnZpcm9ubWVudCBpcy5leHByZXNzaW9uICcgK1xuICAgICAgICAnaXMuZmluaXRlIGlzLmZ1bmN0aW9uIGlzLmluZmluaXRlIGlzLmludGVnZXIgaXMubGFuZ3VhZ2UgJyArXG4gICAgICAgICdpcy5saXN0IGlzLmxvZ2ljYWwgaXMubWF0cml4IGlzLm5hIGlzLm5hbWUgaXMubmFuIGlzLm51bGwgJyArXG4gICAgICAgICdpcy5udW1lcmljIGlzLm9iamVjdCBpcy5wYWlybGlzdCBpcy5yYXcgaXMucmVjdXJzaXZlIGlzLnNpbmdsZSAnICtcbiAgICAgICAgJ2lzLnN5bWJvbCBsYXp5TG9hZERCZmV0Y2ggbGVuZ3RoIGxnYW1tYSBsaXN0IGxvZyBtYXggbWluICcgK1xuICAgICAgICAnbWlzc2luZyBNb2QgbmFtZXMgbmFyZ3MgbnpjaGFyIG9sZENsYXNzIG9uLmV4aXQgcG9zLnRvLmVudiAnICtcbiAgICAgICAgJ3Byb2MudGltZSBwcm9kIHF1b3RlIHJhbmdlIFJlIHJlcCByZXRyYWNlbWVtIHJldHVybiByb3VuZCAnICtcbiAgICAgICAgJ3NlcV9hbG9uZyBzZXFfbGVuIHNlcS5pbnQgc2lnbiBzaWduaWYgc2luIHNpbmggc2lucGkgc3FydCAnICtcbiAgICAgICAgJ3N0YW5kYXJkR2VuZXJpYyBzdWJzdGl0dXRlIHN1bSBzd2l0Y2ggdGFuIHRhbmggdGFucGkgdHJhY2VtZW0gJyArXG4gICAgICAgICd0cmlnYW1tYSB0cnVuYyB1bmNsYXNzIHVudHJhY2VtZW0gVXNlTWV0aG9kIHh0ZnJtJyxcbiAgICB9LFxuICAgIGNvbXBpbGVyRXh0ZW5zaW9uczogW1xuICAgICAgLy8gYWxsb3cgYmVmb3JlTWF0Y2ggdG8gYWN0IGFzIGEgXCJxdWFsaWZpZXJcIiBmb3IgdGhlIG1hdGNoXG4gICAgICAvLyB0aGUgZnVsbCBtYXRjaCBiZWdpbiBtdXN0IGJlIFtiZWZvcmVNYXRjaF1bYmVnaW5dXG4gICAgICAobW9kZSwgcGFyZW50KSA9PiB7XG4gICAgICAgIGlmICghbW9kZS5iZWZvcmVNYXRjaCkgcmV0dXJuO1xuICAgICAgICAvLyBzdGFydHMgY29uZmxpY3RzIHdpdGggZW5kc1BhcmVudCB3aGljaCB3ZSBuZWVkIHRvIG1ha2Ugc3VyZSB0aGUgY2hpbGRcbiAgICAgICAgLy8gcnVsZSBpcyBub3QgbWF0Y2hlZCBtdWx0aXBsZSB0aW1lc1xuICAgICAgICBpZiAobW9kZS5zdGFydHMpIHRocm93IG5ldyBFcnJvcihcImJlZm9yZU1hdGNoIGNhbm5vdCBiZSB1c2VkIHdpdGggc3RhcnRzXCIpO1xuXG4gICAgICAgIGNvbnN0IG9yaWdpbmFsTW9kZSA9IE9iamVjdC5hc3NpZ24oe30sIG1vZGUpO1xuICAgICAgICBPYmplY3Qua2V5cyhtb2RlKS5mb3JFYWNoKChrZXkpID0+IHsgZGVsZXRlIG1vZGVba2V5XTsgfSk7XG5cbiAgICAgICAgbW9kZS5iZWdpbiA9IGNvbmNhdChvcmlnaW5hbE1vZGUuYmVmb3JlTWF0Y2gsIGxvb2thaGVhZChvcmlnaW5hbE1vZGUuYmVnaW4pKTtcbiAgICAgICAgbW9kZS5zdGFydHMgPSB7XG4gICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKG9yaWdpbmFsTW9kZSwgeyBlbmRzUGFyZW50OiB0cnVlIH0pXG4gICAgICAgICAgXVxuICAgICAgICB9O1xuICAgICAgICBtb2RlLnJlbGV2YW5jZSA9IDA7XG5cbiAgICAgICAgZGVsZXRlIG9yaWdpbmFsTW9kZS5iZWZvcmVNYXRjaDtcbiAgICAgIH1cbiAgICBdLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICAvLyBSb3h5Z2VuIGNvbW1lbnRzXG4gICAgICBobGpzLkNPTU1FTlQoXG4gICAgICAgIC8jJy8sXG4gICAgICAgIC8kLyxcbiAgICAgICAge1xuICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIC8vIEhhbmRsZSBgQGV4YW1wbGVzYCBzZXBhcmF0ZWx5IHRvIGNhdXNlIGFsbCBzdWJzZXF1ZW50IGNvZGVcbiAgICAgICAgICAgICAgLy8gdW50aWwgdGhlIG5leHQgYEBgLXRhZyBvbiBpdHMgb3duIGxpbmUgdG8gYmUga2VwdCBhcy1pcyxcbiAgICAgICAgICAgICAgLy8gcHJldmVudGluZyBoaWdobGlnaHRpbmcuIFRoaXMgY29kZSBpcyBleGFtcGxlIFIgY29kZSwgc28gbmVzdGVkXG4gICAgICAgICAgICAgIC8vIGRvY3RhZ3Mgc2hvdWxkbuKAmXQgYmUgdHJlYXRlZCBhcyBzdWNoLiBTZWVcbiAgICAgICAgICAgICAgLy8gYHRlc3QvbWFya3VwL3Ivcm94eWdlbi50eHRgIGZvciBhbiBleGFtcGxlLlxuICAgICAgICAgICAgICBjbGFzc05hbWU6ICdkb2N0YWcnLFxuICAgICAgICAgICAgICBiZWdpbjogJ0BleGFtcGxlcycsXG4gICAgICAgICAgICAgIHN0YXJ0czoge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAgICAgICB7IGJlZ2luOiAvXFxuLyB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBiZWdpbjogLyMnXFxzKig/PUBbYS16QS1aXSspLyxcbiAgICAgICAgICAgICAgICAgICAgZW5kc1BhcmVudDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJlZ2luOiAvIycvLFxuICAgICAgICAgICAgICAgICAgICBlbmQ6IC8kLyxcbiAgICAgICAgICAgICAgICAgICAgZXhjbHVkZUJlZ2luOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgLy8gSGFuZGxlIGBAcGFyYW1gIHRvIGhpZ2hsaWdodCB0aGUgcGFyYW1ldGVyIG5hbWUgZm9sbG93aW5nXG4gICAgICAgICAgICAgIC8vIGFmdGVyLlxuICAgICAgICAgICAgICBjbGFzc05hbWU6ICdkb2N0YWcnLFxuICAgICAgICAgICAgICBiZWdpbjogJ0BwYXJhbScsXG4gICAgICAgICAgICAgIGVuZDogLyQvLFxuICAgICAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ3ZhcmlhYmxlJyxcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgYmVnaW46IElERU5UX1JFIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgYmVnaW46IC9gKD86XFxcXC58W15gXFxcXF0pK2AvIH1cbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBlbmRzUGFyZW50OiB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjbGFzc05hbWU6ICdkb2N0YWcnLFxuICAgICAgICAgICAgICBiZWdpbjogL0BbYS16QS1aXSsvXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjbGFzc05hbWU6ICdtZXRhLWtleXdvcmQnLFxuICAgICAgICAgICAgICBiZWdpbjogL1xcXFxbYS16QS1aXSsvLFxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgKSxcblxuICAgICAgaGxqcy5IQVNIX0NPTU1FTlRfTU9ERSxcblxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgICBjb250YWluczogW2hsanMuQkFDS1NMQVNIX0VTQ0FQRV0sXG4gICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAgaGxqcy5FTkRfU0FNRV9BU19CRUdJTih7IGJlZ2luOiAvW3JSXVwiKC0qKVxcKC8sIGVuZDogL1xcKSgtKilcIi8gfSksXG4gICAgICAgICAgaGxqcy5FTkRfU0FNRV9BU19CRUdJTih7IGJlZ2luOiAvW3JSXVwiKC0qKVxcey8sIGVuZDogL1xcfSgtKilcIi8gfSksXG4gICAgICAgICAgaGxqcy5FTkRfU0FNRV9BU19CRUdJTih7IGJlZ2luOiAvW3JSXVwiKC0qKVxcWy8sIGVuZDogL1xcXSgtKilcIi8gfSksXG4gICAgICAgICAgaGxqcy5FTkRfU0FNRV9BU19CRUdJTih7IGJlZ2luOiAvW3JSXScoLSopXFwoLywgZW5kOiAvXFwpKC0qKScvIH0pLFxuICAgICAgICAgIGhsanMuRU5EX1NBTUVfQVNfQkVHSU4oeyBiZWdpbjogL1tyUl0nKC0qKVxcey8sIGVuZDogL1xcfSgtKiknLyB9KSxcbiAgICAgICAgICBobGpzLkVORF9TQU1FX0FTX0JFR0lOKHsgYmVnaW46IC9bclJdJygtKilcXFsvLCBlbmQ6IC9cXF0oLSopJy8gfSksXG4gICAgICAgICAge2JlZ2luOiAnXCInLCBlbmQ6ICdcIicsIHJlbGV2YW5jZTogMH0sXG4gICAgICAgICAge2JlZ2luOiBcIidcIiwgZW5kOiBcIidcIiwgcmVsZXZhbmNlOiAwfVxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICBiZWZvcmVNYXRjaDogLyhbXmEtekEtWjAtOS5fXSkvLCAvLyBub3QgcGFydCBvZiBhbiBpZGVudGlmaWVyXG4gICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAgLy8gVE9ETzogcmVwbGFjZSB3aXRoIG5lZ2F0aXZlIGxvb2stYmVoaW5kIHdoZW4gYXZhaWxhYmxlXG4gICAgICAgICAgLy8geyBiZWdpbjogLyg/PCFbYS16QS1aMC05Ll9dKTBbeFhdWzAtOWEtZkEtRl0rXFwuWzAtOWEtZkEtRl0qW3BQXVsrLV0/XFxkK2k/LyB9LFxuICAgICAgICAgIC8vIHsgYmVnaW46IC8oPzwhW2EtekEtWjAtOS5fXSkwW3hYXVswLTlhLWZBLUZdKyhbcFBdWystXT9cXGQrKT9bTGldPy8gfSxcbiAgICAgICAgICAvLyB7IGJlZ2luOiAvKD88IVthLXpBLVowLTkuX10pKFxcZCsoXFwuXFxkKik/fFxcLlxcZCspKFtlRV1bKy1dP1xcZCspP1tMaV0/LyB9XG4gICAgICAgICAge1xuICAgICAgICAgICAgLy8gU3BlY2lhbCBjYXNlOiBvbmx5IGhleGFkZWNpbWFsIGJpbmFyeSBwb3dlcnMgY2FuIGNvbnRhaW4gZnJhY3Rpb25zLlxuICAgICAgICAgICAgbWF0Y2g6IC8wW3hYXVswLTlhLWZBLUZdK1xcLlswLTlhLWZBLUZdKltwUF1bKy1dP1xcZCtpPy8sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBtYXRjaDogLzBbeFhdWzAtOWEtZkEtRl0rKFtwUF1bKy1dP1xcZCspP1tMaV0/L1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbWF0Y2g6IC8oXFxkKyhcXC5cXGQqKT98XFwuXFxkKykoW2VFXVsrLV0/XFxkKyk/W0xpXT8vLFxuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIC8vIGluZml4IG9wZXJhdG9yXG4gICAgICAgIGJlZ2luOiAnJScsXG4gICAgICAgIGVuZDogJyUnXG4gICAgICB9LFxuICAgICAgLy8gcmVsZXZhbmNlIGJvb3N0IGZvciBhc3NpZ25tZW50XG4gICAgICB7XG4gICAgICAgIGJlZ2luOiBjb25jYXQoU0lNUExFX0lERU5ULCBcIlxcXFxzKzwtXFxcXHMrXCIpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAvLyBlc2NhcGVkIGlkZW50aWZpZXJcbiAgICAgICAgYmVnaW46ICdgJyxcbiAgICAgICAgZW5kOiAnYCcsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgeyBiZWdpbjogL1xcXFwuLyB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=