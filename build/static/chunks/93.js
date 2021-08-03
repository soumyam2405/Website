(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[93],{

/***/ "./node_modules/highlight.js/lib/languages/latex.js":
/*!**********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/latex.js ***!
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

/*
Language: LaTeX
Author: Benedikt Wilde <bwilde@posteo.de>
Website: https://www.latex-project.org
Category: markup
*/

/** @type LanguageFn */
function latex(hljs) {
  const KNOWN_CONTROL_WORDS = either(...[
      '(?:NeedsTeXFormat|RequirePackage|GetIdInfo)',
      'Provides(?:Expl)?(?:Package|Class|File)',
      '(?:DeclareOption|ProcessOptions)',
      '(?:documentclass|usepackage|input|include)',
      'makeat(?:letter|other)',
      'ExplSyntax(?:On|Off)',
      '(?:new|renew|provide)?command',
      '(?:re)newenvironment',
      '(?:New|Renew|Provide|Declare)(?:Expandable)?DocumentCommand',
      '(?:New|Renew|Provide|Declare)DocumentEnvironment',
      '(?:(?:e|g|x)?def|let)',
      '(?:begin|end)',
      '(?:part|chapter|(?:sub){0,2}section|(?:sub)?paragraph)',
      'caption',
      '(?:label|(?:eq|page|name)?ref|(?:paren|foot|super)?cite)',
      '(?:alpha|beta|[Gg]amma|[Dd]elta|(?:var)?epsilon|zeta|eta|[Tt]heta|vartheta)',
      '(?:iota|(?:var)?kappa|[Ll]ambda|mu|nu|[Xx]i|[Pp]i|varpi|(?:var)rho)',
      '(?:[Ss]igma|varsigma|tau|[Uu]psilon|[Pp]hi|varphi|chi|[Pp]si|[Oo]mega)',
      '(?:frac|sum|prod|lim|infty|times|sqrt|leq|geq|left|right|middle|[bB]igg?)',
      '(?:[lr]angle|q?quad|[lcvdi]?dots|d?dot|hat|tilde|bar)'
    ].map(word => word + '(?![a-zA-Z@:_])'));
  const L3_REGEX = new RegExp([
      // A function \module_function_name:signature or \__module_function_name:signature,
      // where both module and function_name need at least two characters and
      // function_name may contain single underscores.
      '(?:__)?[a-zA-Z]{2,}_[a-zA-Z](?:_?[a-zA-Z])+:[a-zA-Z]*',
      // A variable \scope_module_and_name_type or \scope__module_ane_name_type,
      // where scope is one of l, g or c, type needs at least two characters
      // and module_and_name may contain single underscores.
      '[lgc]__?[a-zA-Z](?:_?[a-zA-Z])*_[a-zA-Z]{2,}',
      // A quark \q_the_name or \q__the_name or
      // scan mark \s_the_name or \s__vthe_name,
      // where variable_name needs at least two characters and
      // may contain single underscores.
      '[qs]__?[a-zA-Z](?:_?[a-zA-Z])+',
      // Other LaTeX3 macro names that are not covered by the three rules above.
      'use(?:_i)?:[a-zA-Z]*',
      '(?:else|fi|or):',
      '(?:if|cs|exp):w',
      '(?:hbox|vbox):n',
      '::[a-zA-Z]_unbraced',
      '::[a-zA-Z:]'
    ].map(pattern => pattern + '(?![a-zA-Z:_])').join('|'));
  const L2_VARIANTS = [
    {begin: /[a-zA-Z@]+/}, // control word
    {begin: /[^a-zA-Z@]?/} // control symbol
  ];
  const DOUBLE_CARET_VARIANTS = [
    {begin: /\^{6}[0-9a-f]{6}/},
    {begin: /\^{5}[0-9a-f]{5}/},
    {begin: /\^{4}[0-9a-f]{4}/},
    {begin: /\^{3}[0-9a-f]{3}/},
    {begin: /\^{2}[0-9a-f]{2}/},
    {begin: /\^{2}[\u0000-\u007f]/}
  ];
  const CONTROL_SEQUENCE = {
    className: 'keyword',
    begin: /\\/,
    relevance: 0,
    contains: [
      {
        endsParent: true,
        begin: KNOWN_CONTROL_WORDS
      },
      {
        endsParent: true,
        begin: L3_REGEX
      },
      {
        endsParent: true,
        variants: DOUBLE_CARET_VARIANTS
      },
      {
        endsParent: true,
        relevance: 0,
        variants: L2_VARIANTS
      }
    ]
  };
  const MACRO_PARAM = {
    className: 'params',
    relevance: 0,
    begin: /#+\d?/
  };
  const DOUBLE_CARET_CHAR = {
    // relevance: 1
    variants: DOUBLE_CARET_VARIANTS
  };
  const SPECIAL_CATCODE = {
    className: 'built_in',
    relevance: 0,
    begin: /[$&^_]/
  };
  const MAGIC_COMMENT = {
    className: 'meta',
    begin: '% !TeX',
    end: '$',
    relevance: 10
  };
  const COMMENT = hljs.COMMENT(
    '%',
    '$',
    {
      relevance: 0
    }
  );
  const EVERYTHING_BUT_VERBATIM = [
    CONTROL_SEQUENCE,
    MACRO_PARAM,
    DOUBLE_CARET_CHAR,
    SPECIAL_CATCODE,
    MAGIC_COMMENT,
    COMMENT
  ];
  const BRACE_GROUP_NO_VERBATIM = {
    begin: /\{/, end: /\}/,
    relevance: 0,
    contains: ['self', ...EVERYTHING_BUT_VERBATIM]
  };
  const ARGUMENT_BRACES = hljs.inherit(
    BRACE_GROUP_NO_VERBATIM,
    {
      relevance: 0,
      endsParent: true,
      contains: [BRACE_GROUP_NO_VERBATIM, ...EVERYTHING_BUT_VERBATIM]
    }
  );
  const ARGUMENT_BRACKETS = {
    begin: /\[/,
      end: /\]/,
    endsParent: true,
    relevance: 0,
    contains: [BRACE_GROUP_NO_VERBATIM, ...EVERYTHING_BUT_VERBATIM]
  };
  const SPACE_GOBBLER = {
    begin: /\s+/,
    relevance: 0
  };
  const ARGUMENT_M = [ARGUMENT_BRACES];
  const ARGUMENT_O = [ARGUMENT_BRACKETS];
  const ARGUMENT_AND_THEN = function(arg, starts_mode) {
    return {
      contains: [SPACE_GOBBLER],
      starts: {
        relevance: 0,
        contains: arg,
        starts: starts_mode
      }
    };
  };
  const CSNAME = function(csname, starts_mode) {
    return {
        begin: '\\\\' + csname + '(?![a-zA-Z@:_])',
        keywords: {$pattern: /\\[a-zA-Z]+/, keyword: '\\' + csname},
        relevance: 0,
        contains: [SPACE_GOBBLER],
        starts: starts_mode
      };
  };
  const BEGIN_ENV = function(envname, starts_mode) {
    return hljs.inherit(
      {
        begin: '\\\\begin(?=[ \t]*(\\r?\\n[ \t]*)?\\{' + envname + '\\})',
        keywords: {$pattern: /\\[a-zA-Z]+/, keyword: '\\begin'},
        relevance: 0,
      },
      ARGUMENT_AND_THEN(ARGUMENT_M, starts_mode)
    );
  };
  const VERBATIM_DELIMITED_EQUAL = (innerName = "string") => {
    return hljs.END_SAME_AS_BEGIN({
      className: innerName,
      begin: /(.|\r?\n)/,
      end: /(.|\r?\n)/,
      excludeBegin: true,
      excludeEnd: true,
      endsParent: true
    });
  };
  const VERBATIM_DELIMITED_ENV = function(envname) {
    return {
      className: 'string',
      end: '(?=\\\\end\\{' + envname + '\\})'
    };
  };

  const VERBATIM_DELIMITED_BRACES = (innerName = "string") => {
    return {
      relevance: 0,
      begin: /\{/,
      starts: {
        endsParent: true,
        contains: [
          {
            className: innerName,
            end: /(?=\})/,
            endsParent:true,
            contains: [
              {
                begin: /\{/,
                end: /\}/,
                relevance: 0,
                contains: ["self"]
              }
            ],
          }
        ]
      }
    };
  };
  const VERBATIM = [
    ...['verb', 'lstinline'].map(csname => CSNAME(csname, {contains: [VERBATIM_DELIMITED_EQUAL()]})),
    CSNAME('mint', ARGUMENT_AND_THEN(ARGUMENT_M, {contains: [VERBATIM_DELIMITED_EQUAL()]})),
    CSNAME('mintinline', ARGUMENT_AND_THEN(ARGUMENT_M, {contains: [VERBATIM_DELIMITED_BRACES(), VERBATIM_DELIMITED_EQUAL()]})),
    CSNAME('url', {contains: [VERBATIM_DELIMITED_BRACES("link"), VERBATIM_DELIMITED_BRACES("link")]}),
    CSNAME('hyperref', {contains: [VERBATIM_DELIMITED_BRACES("link")]}),
    CSNAME('href', ARGUMENT_AND_THEN(ARGUMENT_O, {contains: [VERBATIM_DELIMITED_BRACES("link")]})),
    ...[].concat(...['', '\\*'].map(suffix => [
      BEGIN_ENV('verbatim' + suffix, VERBATIM_DELIMITED_ENV('verbatim' + suffix)),
      BEGIN_ENV('filecontents' + suffix,  ARGUMENT_AND_THEN(ARGUMENT_M, VERBATIM_DELIMITED_ENV('filecontents' + suffix))),
      ...['', 'B', 'L'].map(prefix =>
        BEGIN_ENV(prefix + 'Verbatim' + suffix, ARGUMENT_AND_THEN(ARGUMENT_O, VERBATIM_DELIMITED_ENV(prefix + 'Verbatim' + suffix)))
      )
    ])),
    BEGIN_ENV('minted', ARGUMENT_AND_THEN(ARGUMENT_O, ARGUMENT_AND_THEN(ARGUMENT_M, VERBATIM_DELIMITED_ENV('minted')))),
  ];

  return {
    name: 'LaTeX',
    aliases: ['TeX'],
    contains: [
      ...VERBATIM,
      ...EVERYTHING_BUT_VERBATIM
    ]
  };
}

module.exports = latex;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2xhdGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWE7QUFDYjs7QUFFQTtBQUNBLFdBQVcsaUJBQWlCO0FBQzVCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxxQkFBcUI7QUFDaEMsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixJQUFJO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixHQUFHO0FBQzFCO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxHQUFHO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLG9CQUFvQjtBQUN6QixLQUFLLHFCQUFxQjtBQUMxQjtBQUNBO0FBQ0EsS0FBSyxXQUFXLEVBQUUsU0FBUyxFQUFFLEVBQUU7QUFDL0IsS0FBSyxXQUFXLEVBQUUsU0FBUyxFQUFFLEVBQUU7QUFDL0IsS0FBSyxXQUFXLEVBQUUsU0FBUyxFQUFFLEVBQUU7QUFDL0IsS0FBSyxXQUFXLEVBQUUsU0FBUyxFQUFFLEVBQUU7QUFDL0IsS0FBSyxXQUFXLEVBQUUsU0FBUyxFQUFFLEVBQUU7QUFDL0IsS0FBSyxXQUFXLEVBQUU7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFdBQVc7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZ0RBQWdEO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsa0JBQWtCO0FBQ3ZFLG1CQUFtQiw0Q0FBNEM7QUFDL0Q7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixrQkFBa0I7QUFDM0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUIsd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELHVDQUF1QztBQUNsRyxrREFBa0QsdUNBQXVDO0FBQ3pGLHdEQUF3RCxvRUFBb0U7QUFDNUgsbUJBQW1CLGlGQUFpRjtBQUNwRyx3QkFBd0IsOENBQThDO0FBQ3RFLGtEQUFrRCw4Q0FBOEM7QUFDaEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJzdGF0aWMvY2h1bmtzLzkzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm5zIHtSZWdFeHB9XG4gKiAqL1xuXG4vKipcbiAqIEBwYXJhbSB7UmVnRXhwIHwgc3RyaW5nIH0gcmVcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIHNvdXJjZShyZSkge1xuICBpZiAoIXJlKSByZXR1cm4gbnVsbDtcbiAgaWYgKHR5cGVvZiByZSA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIHJlO1xuXG4gIHJldHVybiByZS5zb3VyY2U7XG59XG5cbi8qKlxuICogQW55IG9mIHRoZSBwYXNzZWQgZXhwcmVzc3Npb25zIG1heSBtYXRjaFxuICpcbiAqIENyZWF0ZXMgYSBodWdlIHRoaXMgfCB0aGlzIHwgdGhhdCB8IHRoYXQgbWF0Y2hcbiAqIEBwYXJhbSB7KFJlZ0V4cCB8IHN0cmluZylbXSB9IGFyZ3NcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGVpdGhlciguLi5hcmdzKSB7XG4gIGNvbnN0IGpvaW5lZCA9ICcoJyArIGFyZ3MubWFwKCh4KSA9PiBzb3VyY2UoeCkpLmpvaW4oXCJ8XCIpICsgXCIpXCI7XG4gIHJldHVybiBqb2luZWQ7XG59XG5cbi8qXG5MYW5ndWFnZTogTGFUZVhcbkF1dGhvcjogQmVuZWRpa3QgV2lsZGUgPGJ3aWxkZUBwb3N0ZW8uZGU+XG5XZWJzaXRlOiBodHRwczovL3d3dy5sYXRleC1wcm9qZWN0Lm9yZ1xuQ2F0ZWdvcnk6IG1hcmt1cFxuKi9cblxuLyoqIEB0eXBlIExhbmd1YWdlRm4gKi9cbmZ1bmN0aW9uIGxhdGV4KGhsanMpIHtcbiAgY29uc3QgS05PV05fQ09OVFJPTF9XT1JEUyA9IGVpdGhlciguLi5bXG4gICAgICAnKD86TmVlZHNUZVhGb3JtYXR8UmVxdWlyZVBhY2thZ2V8R2V0SWRJbmZvKScsXG4gICAgICAnUHJvdmlkZXMoPzpFeHBsKT8oPzpQYWNrYWdlfENsYXNzfEZpbGUpJyxcbiAgICAgICcoPzpEZWNsYXJlT3B0aW9ufFByb2Nlc3NPcHRpb25zKScsXG4gICAgICAnKD86ZG9jdW1lbnRjbGFzc3x1c2VwYWNrYWdlfGlucHV0fGluY2x1ZGUpJyxcbiAgICAgICdtYWtlYXQoPzpsZXR0ZXJ8b3RoZXIpJyxcbiAgICAgICdFeHBsU3ludGF4KD86T258T2ZmKScsXG4gICAgICAnKD86bmV3fHJlbmV3fHByb3ZpZGUpP2NvbW1hbmQnLFxuICAgICAgJyg/OnJlKW5ld2Vudmlyb25tZW50JyxcbiAgICAgICcoPzpOZXd8UmVuZXd8UHJvdmlkZXxEZWNsYXJlKSg/OkV4cGFuZGFibGUpP0RvY3VtZW50Q29tbWFuZCcsXG4gICAgICAnKD86TmV3fFJlbmV3fFByb3ZpZGV8RGVjbGFyZSlEb2N1bWVudEVudmlyb25tZW50JyxcbiAgICAgICcoPzooPzplfGd8eCk/ZGVmfGxldCknLFxuICAgICAgJyg/OmJlZ2lufGVuZCknLFxuICAgICAgJyg/OnBhcnR8Y2hhcHRlcnwoPzpzdWIpezAsMn1zZWN0aW9ufCg/OnN1Yik/cGFyYWdyYXBoKScsXG4gICAgICAnY2FwdGlvbicsXG4gICAgICAnKD86bGFiZWx8KD86ZXF8cGFnZXxuYW1lKT9yZWZ8KD86cGFyZW58Zm9vdHxzdXBlcik/Y2l0ZSknLFxuICAgICAgJyg/OmFscGhhfGJldGF8W0dnXWFtbWF8W0RkXWVsdGF8KD86dmFyKT9lcHNpbG9ufHpldGF8ZXRhfFtUdF1oZXRhfHZhcnRoZXRhKScsXG4gICAgICAnKD86aW90YXwoPzp2YXIpP2thcHBhfFtMbF1hbWJkYXxtdXxudXxbWHhdaXxbUHBdaXx2YXJwaXwoPzp2YXIpcmhvKScsXG4gICAgICAnKD86W1NzXWlnbWF8dmFyc2lnbWF8dGF1fFtVdV1wc2lsb258W1BwXWhpfHZhcnBoaXxjaGl8W1BwXXNpfFtPb11tZWdhKScsXG4gICAgICAnKD86ZnJhY3xzdW18cHJvZHxsaW18aW5mdHl8dGltZXN8c3FydHxsZXF8Z2VxfGxlZnR8cmlnaHR8bWlkZGxlfFtiQl1pZ2c/KScsXG4gICAgICAnKD86W2xyXWFuZ2xlfHE/cXVhZHxbbGN2ZGldP2RvdHN8ZD9kb3R8aGF0fHRpbGRlfGJhciknXG4gICAgXS5tYXAod29yZCA9PiB3b3JkICsgJyg/IVthLXpBLVpAOl9dKScpKTtcbiAgY29uc3QgTDNfUkVHRVggPSBuZXcgUmVnRXhwKFtcbiAgICAgIC8vIEEgZnVuY3Rpb24gXFxtb2R1bGVfZnVuY3Rpb25fbmFtZTpzaWduYXR1cmUgb3IgXFxfX21vZHVsZV9mdW5jdGlvbl9uYW1lOnNpZ25hdHVyZSxcbiAgICAgIC8vIHdoZXJlIGJvdGggbW9kdWxlIGFuZCBmdW5jdGlvbl9uYW1lIG5lZWQgYXQgbGVhc3QgdHdvIGNoYXJhY3RlcnMgYW5kXG4gICAgICAvLyBmdW5jdGlvbl9uYW1lIG1heSBjb250YWluIHNpbmdsZSB1bmRlcnNjb3Jlcy5cbiAgICAgICcoPzpfXyk/W2EtekEtWl17Mix9X1thLXpBLVpdKD86Xz9bYS16QS1aXSkrOlthLXpBLVpdKicsXG4gICAgICAvLyBBIHZhcmlhYmxlIFxcc2NvcGVfbW9kdWxlX2FuZF9uYW1lX3R5cGUgb3IgXFxzY29wZV9fbW9kdWxlX2FuZV9uYW1lX3R5cGUsXG4gICAgICAvLyB3aGVyZSBzY29wZSBpcyBvbmUgb2YgbCwgZyBvciBjLCB0eXBlIG5lZWRzIGF0IGxlYXN0IHR3byBjaGFyYWN0ZXJzXG4gICAgICAvLyBhbmQgbW9kdWxlX2FuZF9uYW1lIG1heSBjb250YWluIHNpbmdsZSB1bmRlcnNjb3Jlcy5cbiAgICAgICdbbGdjXV9fP1thLXpBLVpdKD86Xz9bYS16QS1aXSkqX1thLXpBLVpdezIsfScsXG4gICAgICAvLyBBIHF1YXJrIFxccV90aGVfbmFtZSBvciBcXHFfX3RoZV9uYW1lIG9yXG4gICAgICAvLyBzY2FuIG1hcmsgXFxzX3RoZV9uYW1lIG9yIFxcc19fdnRoZV9uYW1lLFxuICAgICAgLy8gd2hlcmUgdmFyaWFibGVfbmFtZSBuZWVkcyBhdCBsZWFzdCB0d28gY2hhcmFjdGVycyBhbmRcbiAgICAgIC8vIG1heSBjb250YWluIHNpbmdsZSB1bmRlcnNjb3Jlcy5cbiAgICAgICdbcXNdX18/W2EtekEtWl0oPzpfP1thLXpBLVpdKSsnLFxuICAgICAgLy8gT3RoZXIgTGFUZVgzIG1hY3JvIG5hbWVzIHRoYXQgYXJlIG5vdCBjb3ZlcmVkIGJ5IHRoZSB0aHJlZSBydWxlcyBhYm92ZS5cbiAgICAgICd1c2UoPzpfaSk/OlthLXpBLVpdKicsXG4gICAgICAnKD86ZWxzZXxmaXxvcik6JyxcbiAgICAgICcoPzppZnxjc3xleHApOncnLFxuICAgICAgJyg/Omhib3h8dmJveCk6bicsXG4gICAgICAnOjpbYS16QS1aXV91bmJyYWNlZCcsXG4gICAgICAnOjpbYS16QS1aOl0nXG4gICAgXS5tYXAocGF0dGVybiA9PiBwYXR0ZXJuICsgJyg/IVthLXpBLVo6X10pJykuam9pbignfCcpKTtcbiAgY29uc3QgTDJfVkFSSUFOVFMgPSBbXG4gICAge2JlZ2luOiAvW2EtekEtWkBdKy99LCAvLyBjb250cm9sIHdvcmRcbiAgICB7YmVnaW46IC9bXmEtekEtWkBdPy99IC8vIGNvbnRyb2wgc3ltYm9sXG4gIF07XG4gIGNvbnN0IERPVUJMRV9DQVJFVF9WQVJJQU5UUyA9IFtcbiAgICB7YmVnaW46IC9cXF57Nn1bMC05YS1mXXs2fS99LFxuICAgIHtiZWdpbjogL1xcXns1fVswLTlhLWZdezV9L30sXG4gICAge2JlZ2luOiAvXFxeezR9WzAtOWEtZl17NH0vfSxcbiAgICB7YmVnaW46IC9cXF57M31bMC05YS1mXXszfS99LFxuICAgIHtiZWdpbjogL1xcXnsyfVswLTlhLWZdezJ9L30sXG4gICAge2JlZ2luOiAvXFxeezJ9W1xcdTAwMDAtXFx1MDA3Zl0vfVxuICBdO1xuICBjb25zdCBDT05UUk9MX1NFUVVFTkNFID0ge1xuICAgIGNsYXNzTmFtZTogJ2tleXdvcmQnLFxuICAgIGJlZ2luOiAvXFxcXC8sXG4gICAgcmVsZXZhbmNlOiAwLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICB7XG4gICAgICAgIGVuZHNQYXJlbnQ6IHRydWUsXG4gICAgICAgIGJlZ2luOiBLTk9XTl9DT05UUk9MX1dPUkRTXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBlbmRzUGFyZW50OiB0cnVlLFxuICAgICAgICBiZWdpbjogTDNfUkVHRVhcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGVuZHNQYXJlbnQ6IHRydWUsXG4gICAgICAgIHZhcmlhbnRzOiBET1VCTEVfQ0FSRVRfVkFSSUFOVFNcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGVuZHNQYXJlbnQ6IHRydWUsXG4gICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgdmFyaWFudHM6IEwyX1ZBUklBTlRTXG4gICAgICB9XG4gICAgXVxuICB9O1xuICBjb25zdCBNQUNST19QQVJBTSA9IHtcbiAgICBjbGFzc05hbWU6ICdwYXJhbXMnLFxuICAgIHJlbGV2YW5jZTogMCxcbiAgICBiZWdpbjogLyMrXFxkPy9cbiAgfTtcbiAgY29uc3QgRE9VQkxFX0NBUkVUX0NIQVIgPSB7XG4gICAgLy8gcmVsZXZhbmNlOiAxXG4gICAgdmFyaWFudHM6IERPVUJMRV9DQVJFVF9WQVJJQU5UU1xuICB9O1xuICBjb25zdCBTUEVDSUFMX0NBVENPREUgPSB7XG4gICAgY2xhc3NOYW1lOiAnYnVpbHRfaW4nLFxuICAgIHJlbGV2YW5jZTogMCxcbiAgICBiZWdpbjogL1skJl5fXS9cbiAgfTtcbiAgY29uc3QgTUFHSUNfQ09NTUVOVCA9IHtcbiAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICBiZWdpbjogJyUgIVRlWCcsXG4gICAgZW5kOiAnJCcsXG4gICAgcmVsZXZhbmNlOiAxMFxuICB9O1xuICBjb25zdCBDT01NRU5UID0gaGxqcy5DT01NRU5UKFxuICAgICclJyxcbiAgICAnJCcsXG4gICAge1xuICAgICAgcmVsZXZhbmNlOiAwXG4gICAgfVxuICApO1xuICBjb25zdCBFVkVSWVRISU5HX0JVVF9WRVJCQVRJTSA9IFtcbiAgICBDT05UUk9MX1NFUVVFTkNFLFxuICAgIE1BQ1JPX1BBUkFNLFxuICAgIERPVUJMRV9DQVJFVF9DSEFSLFxuICAgIFNQRUNJQUxfQ0FUQ09ERSxcbiAgICBNQUdJQ19DT01NRU5ULFxuICAgIENPTU1FTlRcbiAgXTtcbiAgY29uc3QgQlJBQ0VfR1JPVVBfTk9fVkVSQkFUSU0gPSB7XG4gICAgYmVnaW46IC9cXHsvLCBlbmQ6IC9cXH0vLFxuICAgIHJlbGV2YW5jZTogMCxcbiAgICBjb250YWluczogWydzZWxmJywgLi4uRVZFUllUSElOR19CVVRfVkVSQkFUSU1dXG4gIH07XG4gIGNvbnN0IEFSR1VNRU5UX0JSQUNFUyA9IGhsanMuaW5oZXJpdChcbiAgICBCUkFDRV9HUk9VUF9OT19WRVJCQVRJTSxcbiAgICB7XG4gICAgICByZWxldmFuY2U6IDAsXG4gICAgICBlbmRzUGFyZW50OiB0cnVlLFxuICAgICAgY29udGFpbnM6IFtCUkFDRV9HUk9VUF9OT19WRVJCQVRJTSwgLi4uRVZFUllUSElOR19CVVRfVkVSQkFUSU1dXG4gICAgfVxuICApO1xuICBjb25zdCBBUkdVTUVOVF9CUkFDS0VUUyA9IHtcbiAgICBiZWdpbjogL1xcWy8sXG4gICAgICBlbmQ6IC9cXF0vLFxuICAgIGVuZHNQYXJlbnQ6IHRydWUsXG4gICAgcmVsZXZhbmNlOiAwLFxuICAgIGNvbnRhaW5zOiBbQlJBQ0VfR1JPVVBfTk9fVkVSQkFUSU0sIC4uLkVWRVJZVEhJTkdfQlVUX1ZFUkJBVElNXVxuICB9O1xuICBjb25zdCBTUEFDRV9HT0JCTEVSID0ge1xuICAgIGJlZ2luOiAvXFxzKy8sXG4gICAgcmVsZXZhbmNlOiAwXG4gIH07XG4gIGNvbnN0IEFSR1VNRU5UX00gPSBbQVJHVU1FTlRfQlJBQ0VTXTtcbiAgY29uc3QgQVJHVU1FTlRfTyA9IFtBUkdVTUVOVF9CUkFDS0VUU107XG4gIGNvbnN0IEFSR1VNRU5UX0FORF9USEVOID0gZnVuY3Rpb24oYXJnLCBzdGFydHNfbW9kZSkge1xuICAgIHJldHVybiB7XG4gICAgICBjb250YWluczogW1NQQUNFX0dPQkJMRVJdLFxuICAgICAgc3RhcnRzOiB7XG4gICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgY29udGFpbnM6IGFyZyxcbiAgICAgICAgc3RhcnRzOiBzdGFydHNfbW9kZVxuICAgICAgfVxuICAgIH07XG4gIH07XG4gIGNvbnN0IENTTkFNRSA9IGZ1bmN0aW9uKGNzbmFtZSwgc3RhcnRzX21vZGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBiZWdpbjogJ1xcXFxcXFxcJyArIGNzbmFtZSArICcoPyFbYS16QS1aQDpfXSknLFxuICAgICAgICBrZXl3b3JkczogeyRwYXR0ZXJuOiAvXFxcXFthLXpBLVpdKy8sIGtleXdvcmQ6ICdcXFxcJyArIGNzbmFtZX0sXG4gICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgY29udGFpbnM6IFtTUEFDRV9HT0JCTEVSXSxcbiAgICAgICAgc3RhcnRzOiBzdGFydHNfbW9kZVxuICAgICAgfTtcbiAgfTtcbiAgY29uc3QgQkVHSU5fRU5WID0gZnVuY3Rpb24oZW52bmFtZSwgc3RhcnRzX21vZGUpIHtcbiAgICByZXR1cm4gaGxqcy5pbmhlcml0KFxuICAgICAge1xuICAgICAgICBiZWdpbjogJ1xcXFxcXFxcYmVnaW4oPz1bIFxcdF0qKFxcXFxyP1xcXFxuWyBcXHRdKik/XFxcXHsnICsgZW52bmFtZSArICdcXFxcfSknLFxuICAgICAgICBrZXl3b3JkczogeyRwYXR0ZXJuOiAvXFxcXFthLXpBLVpdKy8sIGtleXdvcmQ6ICdcXFxcYmVnaW4nfSxcbiAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgfSxcbiAgICAgIEFSR1VNRU5UX0FORF9USEVOKEFSR1VNRU5UX00sIHN0YXJ0c19tb2RlKVxuICAgICk7XG4gIH07XG4gIGNvbnN0IFZFUkJBVElNX0RFTElNSVRFRF9FUVVBTCA9IChpbm5lck5hbWUgPSBcInN0cmluZ1wiKSA9PiB7XG4gICAgcmV0dXJuIGhsanMuRU5EX1NBTUVfQVNfQkVHSU4oe1xuICAgICAgY2xhc3NOYW1lOiBpbm5lck5hbWUsXG4gICAgICBiZWdpbjogLygufFxccj9cXG4pLyxcbiAgICAgIGVuZDogLygufFxccj9cXG4pLyxcbiAgICAgIGV4Y2x1ZGVCZWdpbjogdHJ1ZSxcbiAgICAgIGV4Y2x1ZGVFbmQ6IHRydWUsXG4gICAgICBlbmRzUGFyZW50OiB0cnVlXG4gICAgfSk7XG4gIH07XG4gIGNvbnN0IFZFUkJBVElNX0RFTElNSVRFRF9FTlYgPSBmdW5jdGlvbihlbnZuYW1lKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgICBlbmQ6ICcoPz1cXFxcXFxcXGVuZFxcXFx7JyArIGVudm5hbWUgKyAnXFxcXH0pJ1xuICAgIH07XG4gIH07XG5cbiAgY29uc3QgVkVSQkFUSU1fREVMSU1JVEVEX0JSQUNFUyA9IChpbm5lck5hbWUgPSBcInN0cmluZ1wiKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgIGJlZ2luOiAvXFx7LyxcbiAgICAgIHN0YXJ0czoge1xuICAgICAgICBlbmRzUGFyZW50OiB0cnVlLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogaW5uZXJOYW1lLFxuICAgICAgICAgICAgZW5kOiAvKD89XFx9KS8sXG4gICAgICAgICAgICBlbmRzUGFyZW50OnRydWUsXG4gICAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYmVnaW46IC9cXHsvLFxuICAgICAgICAgICAgICAgIGVuZDogL1xcfS8sXG4gICAgICAgICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgICAgICAgIGNvbnRhaW5zOiBbXCJzZWxmXCJdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfTtcbiAgfTtcbiAgY29uc3QgVkVSQkFUSU0gPSBbXG4gICAgLi4uWyd2ZXJiJywgJ2xzdGlubGluZSddLm1hcChjc25hbWUgPT4gQ1NOQU1FKGNzbmFtZSwge2NvbnRhaW5zOiBbVkVSQkFUSU1fREVMSU1JVEVEX0VRVUFMKCldfSkpLFxuICAgIENTTkFNRSgnbWludCcsIEFSR1VNRU5UX0FORF9USEVOKEFSR1VNRU5UX00sIHtjb250YWluczogW1ZFUkJBVElNX0RFTElNSVRFRF9FUVVBTCgpXX0pKSxcbiAgICBDU05BTUUoJ21pbnRpbmxpbmUnLCBBUkdVTUVOVF9BTkRfVEhFTihBUkdVTUVOVF9NLCB7Y29udGFpbnM6IFtWRVJCQVRJTV9ERUxJTUlURURfQlJBQ0VTKCksIFZFUkJBVElNX0RFTElNSVRFRF9FUVVBTCgpXX0pKSxcbiAgICBDU05BTUUoJ3VybCcsIHtjb250YWluczogW1ZFUkJBVElNX0RFTElNSVRFRF9CUkFDRVMoXCJsaW5rXCIpLCBWRVJCQVRJTV9ERUxJTUlURURfQlJBQ0VTKFwibGlua1wiKV19KSxcbiAgICBDU05BTUUoJ2h5cGVycmVmJywge2NvbnRhaW5zOiBbVkVSQkFUSU1fREVMSU1JVEVEX0JSQUNFUyhcImxpbmtcIildfSksXG4gICAgQ1NOQU1FKCdocmVmJywgQVJHVU1FTlRfQU5EX1RIRU4oQVJHVU1FTlRfTywge2NvbnRhaW5zOiBbVkVSQkFUSU1fREVMSU1JVEVEX0JSQUNFUyhcImxpbmtcIildfSkpLFxuICAgIC4uLltdLmNvbmNhdCguLi5bJycsICdcXFxcKiddLm1hcChzdWZmaXggPT4gW1xuICAgICAgQkVHSU5fRU5WKCd2ZXJiYXRpbScgKyBzdWZmaXgsIFZFUkJBVElNX0RFTElNSVRFRF9FTlYoJ3ZlcmJhdGltJyArIHN1ZmZpeCkpLFxuICAgICAgQkVHSU5fRU5WKCdmaWxlY29udGVudHMnICsgc3VmZml4LCAgQVJHVU1FTlRfQU5EX1RIRU4oQVJHVU1FTlRfTSwgVkVSQkFUSU1fREVMSU1JVEVEX0VOVignZmlsZWNvbnRlbnRzJyArIHN1ZmZpeCkpKSxcbiAgICAgIC4uLlsnJywgJ0InLCAnTCddLm1hcChwcmVmaXggPT5cbiAgICAgICAgQkVHSU5fRU5WKHByZWZpeCArICdWZXJiYXRpbScgKyBzdWZmaXgsIEFSR1VNRU5UX0FORF9USEVOKEFSR1VNRU5UX08sIFZFUkJBVElNX0RFTElNSVRFRF9FTlYocHJlZml4ICsgJ1ZlcmJhdGltJyArIHN1ZmZpeCkpKVxuICAgICAgKVxuICAgIF0pKSxcbiAgICBCRUdJTl9FTlYoJ21pbnRlZCcsIEFSR1VNRU5UX0FORF9USEVOKEFSR1VNRU5UX08sIEFSR1VNRU5UX0FORF9USEVOKEFSR1VNRU5UX00sIFZFUkJBVElNX0RFTElNSVRFRF9FTlYoJ21pbnRlZCcpKSkpLFxuICBdO1xuXG4gIHJldHVybiB7XG4gICAgbmFtZTogJ0xhVGVYJyxcbiAgICBhbGlhc2VzOiBbJ1RlWCddLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICAuLi5WRVJCQVRJTSxcbiAgICAgIC4uLkVWRVJZVEhJTkdfQlVUX1ZFUkJBVElNXG4gICAgXVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxhdGV4O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==