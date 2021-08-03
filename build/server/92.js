exports.ids = [92];
exports.modules = {

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

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvbGF0ZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWE7QUFDYjs7QUFFQTtBQUNBLFdBQVcsaUJBQWlCO0FBQzVCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxxQkFBcUI7QUFDaEMsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixJQUFJO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixHQUFHO0FBQzFCO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxHQUFHO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLG9CQUFvQjtBQUN6QixLQUFLLHFCQUFxQjtBQUMxQjtBQUNBO0FBQ0EsS0FBSyxXQUFXLEVBQUUsU0FBUyxFQUFFLEVBQUU7QUFDL0IsS0FBSyxXQUFXLEVBQUUsU0FBUyxFQUFFLEVBQUU7QUFDL0IsS0FBSyxXQUFXLEVBQUUsU0FBUyxFQUFFLEVBQUU7QUFDL0IsS0FBSyxXQUFXLEVBQUUsU0FBUyxFQUFFLEVBQUU7QUFDL0IsS0FBSyxXQUFXLEVBQUUsU0FBUyxFQUFFLEVBQUU7QUFDL0IsS0FBSyxXQUFXLEVBQUU7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFdBQVc7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZ0RBQWdEO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsa0JBQWtCO0FBQ3ZFLG1CQUFtQiw0Q0FBNEM7QUFDL0Q7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixrQkFBa0I7QUFDM0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUIsd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELHVDQUF1QztBQUNsRyxrREFBa0QsdUNBQXVDO0FBQ3pGLHdEQUF3RCxvRUFBb0U7QUFDNUgsbUJBQW1CLGlGQUFpRjtBQUNwRyx3QkFBd0IsOENBQThDO0FBQ3RFLGtEQUFrRCw4Q0FBOEM7QUFDaEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiI5Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJucyB7UmVnRXhwfVxuICogKi9cblxuLyoqXG4gKiBAcGFyYW0ge1JlZ0V4cCB8IHN0cmluZyB9IHJlXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBzb3VyY2UocmUpIHtcbiAgaWYgKCFyZSkgcmV0dXJuIG51bGw7XG4gIGlmICh0eXBlb2YgcmUgPT09IFwic3RyaW5nXCIpIHJldHVybiByZTtcblxuICByZXR1cm4gcmUuc291cmNlO1xufVxuXG4vKipcbiAqIEFueSBvZiB0aGUgcGFzc2VkIGV4cHJlc3NzaW9ucyBtYXkgbWF0Y2hcbiAqXG4gKiBDcmVhdGVzIGEgaHVnZSB0aGlzIHwgdGhpcyB8IHRoYXQgfCB0aGF0IG1hdGNoXG4gKiBAcGFyYW0geyhSZWdFeHAgfCBzdHJpbmcpW10gfSBhcmdzXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBlaXRoZXIoLi4uYXJncykge1xuICBjb25zdCBqb2luZWQgPSAnKCcgKyBhcmdzLm1hcCgoeCkgPT4gc291cmNlKHgpKS5qb2luKFwifFwiKSArIFwiKVwiO1xuICByZXR1cm4gam9pbmVkO1xufVxuXG4vKlxuTGFuZ3VhZ2U6IExhVGVYXG5BdXRob3I6IEJlbmVkaWt0IFdpbGRlIDxid2lsZGVAcG9zdGVvLmRlPlxuV2Vic2l0ZTogaHR0cHM6Ly93d3cubGF0ZXgtcHJvamVjdC5vcmdcbkNhdGVnb3J5OiBtYXJrdXBcbiovXG5cbi8qKiBAdHlwZSBMYW5ndWFnZUZuICovXG5mdW5jdGlvbiBsYXRleChobGpzKSB7XG4gIGNvbnN0IEtOT1dOX0NPTlRST0xfV09SRFMgPSBlaXRoZXIoLi4uW1xuICAgICAgJyg/Ok5lZWRzVGVYRm9ybWF0fFJlcXVpcmVQYWNrYWdlfEdldElkSW5mbyknLFxuICAgICAgJ1Byb3ZpZGVzKD86RXhwbCk/KD86UGFja2FnZXxDbGFzc3xGaWxlKScsXG4gICAgICAnKD86RGVjbGFyZU9wdGlvbnxQcm9jZXNzT3B0aW9ucyknLFxuICAgICAgJyg/OmRvY3VtZW50Y2xhc3N8dXNlcGFja2FnZXxpbnB1dHxpbmNsdWRlKScsXG4gICAgICAnbWFrZWF0KD86bGV0dGVyfG90aGVyKScsXG4gICAgICAnRXhwbFN5bnRheCg/Ok9ufE9mZiknLFxuICAgICAgJyg/Om5ld3xyZW5ld3xwcm92aWRlKT9jb21tYW5kJyxcbiAgICAgICcoPzpyZSluZXdlbnZpcm9ubWVudCcsXG4gICAgICAnKD86TmV3fFJlbmV3fFByb3ZpZGV8RGVjbGFyZSkoPzpFeHBhbmRhYmxlKT9Eb2N1bWVudENvbW1hbmQnLFxuICAgICAgJyg/Ok5ld3xSZW5ld3xQcm92aWRlfERlY2xhcmUpRG9jdW1lbnRFbnZpcm9ubWVudCcsXG4gICAgICAnKD86KD86ZXxnfHgpP2RlZnxsZXQpJyxcbiAgICAgICcoPzpiZWdpbnxlbmQpJyxcbiAgICAgICcoPzpwYXJ0fGNoYXB0ZXJ8KD86c3ViKXswLDJ9c2VjdGlvbnwoPzpzdWIpP3BhcmFncmFwaCknLFxuICAgICAgJ2NhcHRpb24nLFxuICAgICAgJyg/OmxhYmVsfCg/OmVxfHBhZ2V8bmFtZSk/cmVmfCg/OnBhcmVufGZvb3R8c3VwZXIpP2NpdGUpJyxcbiAgICAgICcoPzphbHBoYXxiZXRhfFtHZ11hbW1hfFtEZF1lbHRhfCg/OnZhcik/ZXBzaWxvbnx6ZXRhfGV0YXxbVHRdaGV0YXx2YXJ0aGV0YSknLFxuICAgICAgJyg/OmlvdGF8KD86dmFyKT9rYXBwYXxbTGxdYW1iZGF8bXV8bnV8W1h4XWl8W1BwXWl8dmFycGl8KD86dmFyKXJobyknLFxuICAgICAgJyg/OltTc11pZ21hfHZhcnNpZ21hfHRhdXxbVXVdcHNpbG9ufFtQcF1oaXx2YXJwaGl8Y2hpfFtQcF1zaXxbT29dbWVnYSknLFxuICAgICAgJyg/OmZyYWN8c3VtfHByb2R8bGltfGluZnR5fHRpbWVzfHNxcnR8bGVxfGdlcXxsZWZ0fHJpZ2h0fG1pZGRsZXxbYkJdaWdnPyknLFxuICAgICAgJyg/Oltscl1hbmdsZXxxP3F1YWR8W2xjdmRpXT9kb3RzfGQ/ZG90fGhhdHx0aWxkZXxiYXIpJ1xuICAgIF0ubWFwKHdvcmQgPT4gd29yZCArICcoPyFbYS16QS1aQDpfXSknKSk7XG4gIGNvbnN0IEwzX1JFR0VYID0gbmV3IFJlZ0V4cChbXG4gICAgICAvLyBBIGZ1bmN0aW9uIFxcbW9kdWxlX2Z1bmN0aW9uX25hbWU6c2lnbmF0dXJlIG9yIFxcX19tb2R1bGVfZnVuY3Rpb25fbmFtZTpzaWduYXR1cmUsXG4gICAgICAvLyB3aGVyZSBib3RoIG1vZHVsZSBhbmQgZnVuY3Rpb25fbmFtZSBuZWVkIGF0IGxlYXN0IHR3byBjaGFyYWN0ZXJzIGFuZFxuICAgICAgLy8gZnVuY3Rpb25fbmFtZSBtYXkgY29udGFpbiBzaW5nbGUgdW5kZXJzY29yZXMuXG4gICAgICAnKD86X18pP1thLXpBLVpdezIsfV9bYS16QS1aXSg/Ol8/W2EtekEtWl0pKzpbYS16QS1aXSonLFxuICAgICAgLy8gQSB2YXJpYWJsZSBcXHNjb3BlX21vZHVsZV9hbmRfbmFtZV90eXBlIG9yIFxcc2NvcGVfX21vZHVsZV9hbmVfbmFtZV90eXBlLFxuICAgICAgLy8gd2hlcmUgc2NvcGUgaXMgb25lIG9mIGwsIGcgb3IgYywgdHlwZSBuZWVkcyBhdCBsZWFzdCB0d28gY2hhcmFjdGVyc1xuICAgICAgLy8gYW5kIG1vZHVsZV9hbmRfbmFtZSBtYXkgY29udGFpbiBzaW5nbGUgdW5kZXJzY29yZXMuXG4gICAgICAnW2xnY11fXz9bYS16QS1aXSg/Ol8/W2EtekEtWl0pKl9bYS16QS1aXXsyLH0nLFxuICAgICAgLy8gQSBxdWFyayBcXHFfdGhlX25hbWUgb3IgXFxxX190aGVfbmFtZSBvclxuICAgICAgLy8gc2NhbiBtYXJrIFxcc190aGVfbmFtZSBvciBcXHNfX3Z0aGVfbmFtZSxcbiAgICAgIC8vIHdoZXJlIHZhcmlhYmxlX25hbWUgbmVlZHMgYXQgbGVhc3QgdHdvIGNoYXJhY3RlcnMgYW5kXG4gICAgICAvLyBtYXkgY29udGFpbiBzaW5nbGUgdW5kZXJzY29yZXMuXG4gICAgICAnW3FzXV9fP1thLXpBLVpdKD86Xz9bYS16QS1aXSkrJyxcbiAgICAgIC8vIE90aGVyIExhVGVYMyBtYWNybyBuYW1lcyB0aGF0IGFyZSBub3QgY292ZXJlZCBieSB0aGUgdGhyZWUgcnVsZXMgYWJvdmUuXG4gICAgICAndXNlKD86X2kpPzpbYS16QS1aXSonLFxuICAgICAgJyg/OmVsc2V8Zml8b3IpOicsXG4gICAgICAnKD86aWZ8Y3N8ZXhwKTp3JyxcbiAgICAgICcoPzpoYm94fHZib3gpOm4nLFxuICAgICAgJzo6W2EtekEtWl1fdW5icmFjZWQnLFxuICAgICAgJzo6W2EtekEtWjpdJ1xuICAgIF0ubWFwKHBhdHRlcm4gPT4gcGF0dGVybiArICcoPyFbYS16QS1aOl9dKScpLmpvaW4oJ3wnKSk7XG4gIGNvbnN0IEwyX1ZBUklBTlRTID0gW1xuICAgIHtiZWdpbjogL1thLXpBLVpAXSsvfSwgLy8gY29udHJvbCB3b3JkXG4gICAge2JlZ2luOiAvW15hLXpBLVpAXT8vfSAvLyBjb250cm9sIHN5bWJvbFxuICBdO1xuICBjb25zdCBET1VCTEVfQ0FSRVRfVkFSSUFOVFMgPSBbXG4gICAge2JlZ2luOiAvXFxeezZ9WzAtOWEtZl17Nn0vfSxcbiAgICB7YmVnaW46IC9cXF57NX1bMC05YS1mXXs1fS99LFxuICAgIHtiZWdpbjogL1xcXns0fVswLTlhLWZdezR9L30sXG4gICAge2JlZ2luOiAvXFxeezN9WzAtOWEtZl17M30vfSxcbiAgICB7YmVnaW46IC9cXF57Mn1bMC05YS1mXXsyfS99LFxuICAgIHtiZWdpbjogL1xcXnsyfVtcXHUwMDAwLVxcdTAwN2ZdL31cbiAgXTtcbiAgY29uc3QgQ09OVFJPTF9TRVFVRU5DRSA9IHtcbiAgICBjbGFzc05hbWU6ICdrZXl3b3JkJyxcbiAgICBiZWdpbjogL1xcXFwvLFxuICAgIHJlbGV2YW5jZTogMCxcbiAgICBjb250YWluczogW1xuICAgICAge1xuICAgICAgICBlbmRzUGFyZW50OiB0cnVlLFxuICAgICAgICBiZWdpbjogS05PV05fQ09OVFJPTF9XT1JEU1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgZW5kc1BhcmVudDogdHJ1ZSxcbiAgICAgICAgYmVnaW46IEwzX1JFR0VYXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBlbmRzUGFyZW50OiB0cnVlLFxuICAgICAgICB2YXJpYW50czogRE9VQkxFX0NBUkVUX1ZBUklBTlRTXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBlbmRzUGFyZW50OiB0cnVlLFxuICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgIHZhcmlhbnRzOiBMMl9WQVJJQU5UU1xuICAgICAgfVxuICAgIF1cbiAgfTtcbiAgY29uc3QgTUFDUk9fUEFSQU0gPSB7XG4gICAgY2xhc3NOYW1lOiAncGFyYW1zJyxcbiAgICByZWxldmFuY2U6IDAsXG4gICAgYmVnaW46IC8jK1xcZD8vXG4gIH07XG4gIGNvbnN0IERPVUJMRV9DQVJFVF9DSEFSID0ge1xuICAgIC8vIHJlbGV2YW5jZTogMVxuICAgIHZhcmlhbnRzOiBET1VCTEVfQ0FSRVRfVkFSSUFOVFNcbiAgfTtcbiAgY29uc3QgU1BFQ0lBTF9DQVRDT0RFID0ge1xuICAgIGNsYXNzTmFtZTogJ2J1aWx0X2luJyxcbiAgICByZWxldmFuY2U6IDAsXG4gICAgYmVnaW46IC9bJCZeX10vXG4gIH07XG4gIGNvbnN0IE1BR0lDX0NPTU1FTlQgPSB7XG4gICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgYmVnaW46ICclICFUZVgnLFxuICAgIGVuZDogJyQnLFxuICAgIHJlbGV2YW5jZTogMTBcbiAgfTtcbiAgY29uc3QgQ09NTUVOVCA9IGhsanMuQ09NTUVOVChcbiAgICAnJScsXG4gICAgJyQnLFxuICAgIHtcbiAgICAgIHJlbGV2YW5jZTogMFxuICAgIH1cbiAgKTtcbiAgY29uc3QgRVZFUllUSElOR19CVVRfVkVSQkFUSU0gPSBbXG4gICAgQ09OVFJPTF9TRVFVRU5DRSxcbiAgICBNQUNST19QQVJBTSxcbiAgICBET1VCTEVfQ0FSRVRfQ0hBUixcbiAgICBTUEVDSUFMX0NBVENPREUsXG4gICAgTUFHSUNfQ09NTUVOVCxcbiAgICBDT01NRU5UXG4gIF07XG4gIGNvbnN0IEJSQUNFX0dST1VQX05PX1ZFUkJBVElNID0ge1xuICAgIGJlZ2luOiAvXFx7LywgZW5kOiAvXFx9LyxcbiAgICByZWxldmFuY2U6IDAsXG4gICAgY29udGFpbnM6IFsnc2VsZicsIC4uLkVWRVJZVEhJTkdfQlVUX1ZFUkJBVElNXVxuICB9O1xuICBjb25zdCBBUkdVTUVOVF9CUkFDRVMgPSBobGpzLmluaGVyaXQoXG4gICAgQlJBQ0VfR1JPVVBfTk9fVkVSQkFUSU0sXG4gICAge1xuICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgZW5kc1BhcmVudDogdHJ1ZSxcbiAgICAgIGNvbnRhaW5zOiBbQlJBQ0VfR1JPVVBfTk9fVkVSQkFUSU0sIC4uLkVWRVJZVEhJTkdfQlVUX1ZFUkJBVElNXVxuICAgIH1cbiAgKTtcbiAgY29uc3QgQVJHVU1FTlRfQlJBQ0tFVFMgPSB7XG4gICAgYmVnaW46IC9cXFsvLFxuICAgICAgZW5kOiAvXFxdLyxcbiAgICBlbmRzUGFyZW50OiB0cnVlLFxuICAgIHJlbGV2YW5jZTogMCxcbiAgICBjb250YWluczogW0JSQUNFX0dST1VQX05PX1ZFUkJBVElNLCAuLi5FVkVSWVRISU5HX0JVVF9WRVJCQVRJTV1cbiAgfTtcbiAgY29uc3QgU1BBQ0VfR09CQkxFUiA9IHtcbiAgICBiZWdpbjogL1xccysvLFxuICAgIHJlbGV2YW5jZTogMFxuICB9O1xuICBjb25zdCBBUkdVTUVOVF9NID0gW0FSR1VNRU5UX0JSQUNFU107XG4gIGNvbnN0IEFSR1VNRU5UX08gPSBbQVJHVU1FTlRfQlJBQ0tFVFNdO1xuICBjb25zdCBBUkdVTUVOVF9BTkRfVEhFTiA9IGZ1bmN0aW9uKGFyZywgc3RhcnRzX21vZGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY29udGFpbnM6IFtTUEFDRV9HT0JCTEVSXSxcbiAgICAgIHN0YXJ0czoge1xuICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgIGNvbnRhaW5zOiBhcmcsXG4gICAgICAgIHN0YXJ0czogc3RhcnRzX21vZGVcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuICBjb25zdCBDU05BTUUgPSBmdW5jdGlvbihjc25hbWUsIHN0YXJ0c19tb2RlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYmVnaW46ICdcXFxcXFxcXCcgKyBjc25hbWUgKyAnKD8hW2EtekEtWkA6X10pJyxcbiAgICAgICAga2V5d29yZHM6IHskcGF0dGVybjogL1xcXFxbYS16QS1aXSsvLCBrZXl3b3JkOiAnXFxcXCcgKyBjc25hbWV9LFxuICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgIGNvbnRhaW5zOiBbU1BBQ0VfR09CQkxFUl0sXG4gICAgICAgIHN0YXJ0czogc3RhcnRzX21vZGVcbiAgICAgIH07XG4gIH07XG4gIGNvbnN0IEJFR0lOX0VOViA9IGZ1bmN0aW9uKGVudm5hbWUsIHN0YXJ0c19tb2RlKSB7XG4gICAgcmV0dXJuIGhsanMuaW5oZXJpdChcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICdcXFxcXFxcXGJlZ2luKD89WyBcXHRdKihcXFxccj9cXFxcblsgXFx0XSopP1xcXFx7JyArIGVudm5hbWUgKyAnXFxcXH0pJyxcbiAgICAgICAga2V5d29yZHM6IHskcGF0dGVybjogL1xcXFxbYS16QS1aXSsvLCBrZXl3b3JkOiAnXFxcXGJlZ2luJ30sXG4gICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgIH0sXG4gICAgICBBUkdVTUVOVF9BTkRfVEhFTihBUkdVTUVOVF9NLCBzdGFydHNfbW9kZSlcbiAgICApO1xuICB9O1xuICBjb25zdCBWRVJCQVRJTV9ERUxJTUlURURfRVFVQUwgPSAoaW5uZXJOYW1lID0gXCJzdHJpbmdcIikgPT4ge1xuICAgIHJldHVybiBobGpzLkVORF9TQU1FX0FTX0JFR0lOKHtcbiAgICAgIGNsYXNzTmFtZTogaW5uZXJOYW1lLFxuICAgICAgYmVnaW46IC8oLnxcXHI/XFxuKS8sXG4gICAgICBlbmQ6IC8oLnxcXHI/XFxuKS8sXG4gICAgICBleGNsdWRlQmVnaW46IHRydWUsXG4gICAgICBleGNsdWRlRW5kOiB0cnVlLFxuICAgICAgZW5kc1BhcmVudDogdHJ1ZVxuICAgIH0pO1xuICB9O1xuICBjb25zdCBWRVJCQVRJTV9ERUxJTUlURURfRU5WID0gZnVuY3Rpb24oZW52bmFtZSkge1xuICAgIHJldHVybiB7XG4gICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgZW5kOiAnKD89XFxcXFxcXFxlbmRcXFxceycgKyBlbnZuYW1lICsgJ1xcXFx9KSdcbiAgICB9O1xuICB9O1xuXG4gIGNvbnN0IFZFUkJBVElNX0RFTElNSVRFRF9CUkFDRVMgPSAoaW5uZXJOYW1lID0gXCJzdHJpbmdcIikgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICByZWxldmFuY2U6IDAsXG4gICAgICBiZWdpbjogL1xcey8sXG4gICAgICBzdGFydHM6IHtcbiAgICAgICAgZW5kc1BhcmVudDogdHJ1ZSxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6IGlubmVyTmFtZSxcbiAgICAgICAgICAgIGVuZDogLyg/PVxcfSkvLFxuICAgICAgICAgICAgZW5kc1BhcmVudDp0cnVlLFxuICAgICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJlZ2luOiAvXFx7LyxcbiAgICAgICAgICAgICAgICBlbmQ6IC9cXH0vLFxuICAgICAgICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICAgICAgICBjb250YWluczogW1wic2VsZlwiXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIH07XG4gIH07XG4gIGNvbnN0IFZFUkJBVElNID0gW1xuICAgIC4uLlsndmVyYicsICdsc3RpbmxpbmUnXS5tYXAoY3NuYW1lID0+IENTTkFNRShjc25hbWUsIHtjb250YWluczogW1ZFUkJBVElNX0RFTElNSVRFRF9FUVVBTCgpXX0pKSxcbiAgICBDU05BTUUoJ21pbnQnLCBBUkdVTUVOVF9BTkRfVEhFTihBUkdVTUVOVF9NLCB7Y29udGFpbnM6IFtWRVJCQVRJTV9ERUxJTUlURURfRVFVQUwoKV19KSksXG4gICAgQ1NOQU1FKCdtaW50aW5saW5lJywgQVJHVU1FTlRfQU5EX1RIRU4oQVJHVU1FTlRfTSwge2NvbnRhaW5zOiBbVkVSQkFUSU1fREVMSU1JVEVEX0JSQUNFUygpLCBWRVJCQVRJTV9ERUxJTUlURURfRVFVQUwoKV19KSksXG4gICAgQ1NOQU1FKCd1cmwnLCB7Y29udGFpbnM6IFtWRVJCQVRJTV9ERUxJTUlURURfQlJBQ0VTKFwibGlua1wiKSwgVkVSQkFUSU1fREVMSU1JVEVEX0JSQUNFUyhcImxpbmtcIildfSksXG4gICAgQ1NOQU1FKCdoeXBlcnJlZicsIHtjb250YWluczogW1ZFUkJBVElNX0RFTElNSVRFRF9CUkFDRVMoXCJsaW5rXCIpXX0pLFxuICAgIENTTkFNRSgnaHJlZicsIEFSR1VNRU5UX0FORF9USEVOKEFSR1VNRU5UX08sIHtjb250YWluczogW1ZFUkJBVElNX0RFTElNSVRFRF9CUkFDRVMoXCJsaW5rXCIpXX0pKSxcbiAgICAuLi5bXS5jb25jYXQoLi4uWycnLCAnXFxcXConXS5tYXAoc3VmZml4ID0+IFtcbiAgICAgIEJFR0lOX0VOVigndmVyYmF0aW0nICsgc3VmZml4LCBWRVJCQVRJTV9ERUxJTUlURURfRU5WKCd2ZXJiYXRpbScgKyBzdWZmaXgpKSxcbiAgICAgIEJFR0lOX0VOVignZmlsZWNvbnRlbnRzJyArIHN1ZmZpeCwgIEFSR1VNRU5UX0FORF9USEVOKEFSR1VNRU5UX00sIFZFUkJBVElNX0RFTElNSVRFRF9FTlYoJ2ZpbGVjb250ZW50cycgKyBzdWZmaXgpKSksXG4gICAgICAuLi5bJycsICdCJywgJ0wnXS5tYXAocHJlZml4ID0+XG4gICAgICAgIEJFR0lOX0VOVihwcmVmaXggKyAnVmVyYmF0aW0nICsgc3VmZml4LCBBUkdVTUVOVF9BTkRfVEhFTihBUkdVTUVOVF9PLCBWRVJCQVRJTV9ERUxJTUlURURfRU5WKHByZWZpeCArICdWZXJiYXRpbScgKyBzdWZmaXgpKSlcbiAgICAgIClcbiAgICBdKSksXG4gICAgQkVHSU5fRU5WKCdtaW50ZWQnLCBBUkdVTUVOVF9BTkRfVEhFTihBUkdVTUVOVF9PLCBBUkdVTUVOVF9BTkRfVEhFTihBUkdVTUVOVF9NLCBWRVJCQVRJTV9ERUxJTUlURURfRU5WKCdtaW50ZWQnKSkpKSxcbiAgXTtcblxuICByZXR1cm4ge1xuICAgIG5hbWU6ICdMYVRlWCcsXG4gICAgYWxpYXNlczogWydUZVgnXSxcbiAgICBjb250YWluczogW1xuICAgICAgLi4uVkVSQkFUSU0sXG4gICAgICAuLi5FVkVSWVRISU5HX0JVVF9WRVJCQVRJTVxuICAgIF1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsYXRleDtcbiJdLCJzb3VyY2VSb290IjoiIn0=