(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[41],{

/***/ "./node_modules/highlight.js/lib/languages/d.js":
/*!******************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/d.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: D
Author: Aleksandar Ruzicic <aleksandar@ruzicic.info>
Description: D is a language with C-like syntax and static typing. It pragmatically combines efficiency, control, and modeling power, with safety and programmer productivity.
Version: 1.0a
Website: https://dlang.org
Date: 2012-04-08
*/

/**
 * Known issues:
 *
 * - invalid hex string literals will be recognized as a double quoted strings
 *   but 'x' at the beginning of string will not be matched
 *
 * - delimited string literals are not checked for matching end delimiter
 *   (not possible to do with js regexp)
 *
 * - content of token string is colored as a string (i.e. no keyword coloring inside a token string)
 *   also, content of token string is not validated to contain only valid D tokens
 *
 * - special token sequence rule is not strictly following D grammar (anything following #line
 *   up to the end of line is matched as special token sequence)
 */

/** @type LanguageFn */
function d(hljs) {
  /**
   * Language keywords
   *
   * @type {Object}
   */
  const D_KEYWORDS = {
    $pattern: hljs.UNDERSCORE_IDENT_RE,
    keyword:
      'abstract alias align asm assert auto body break byte case cast catch class ' +
      'const continue debug default delete deprecated do else enum export extern final ' +
      'finally for foreach foreach_reverse|10 goto if immutable import in inout int ' +
      'interface invariant is lazy macro mixin module new nothrow out override package ' +
      'pragma private protected public pure ref return scope shared static struct ' +
      'super switch synchronized template this throw try typedef typeid typeof union ' +
      'unittest version void volatile while with __FILE__ __LINE__ __gshared|10 ' +
      '__thread __traits __DATE__ __EOF__ __TIME__ __TIMESTAMP__ __VENDOR__ __VERSION__',
    built_in:
      'bool cdouble cent cfloat char creal dchar delegate double dstring float function ' +
      'idouble ifloat ireal long real short string ubyte ucent uint ulong ushort wchar ' +
      'wstring',
    literal:
      'false null true'
  };

  /**
   * Number literal regexps
   *
   * @type {String}
   */
  const decimal_integer_re = '(0|[1-9][\\d_]*)';
  const decimal_integer_nosus_re = '(0|[1-9][\\d_]*|\\d[\\d_]*|[\\d_]+?\\d)';
  const binary_integer_re = '0[bB][01_]+';
  const hexadecimal_digits_re = '([\\da-fA-F][\\da-fA-F_]*|_[\\da-fA-F][\\da-fA-F_]*)';
  const hexadecimal_integer_re = '0[xX]' + hexadecimal_digits_re;

  const decimal_exponent_re = '([eE][+-]?' + decimal_integer_nosus_re + ')';
  const decimal_float_re = '(' + decimal_integer_nosus_re + '(\\.\\d*|' + decimal_exponent_re + ')|' +
                '\\d+\\.' + decimal_integer_nosus_re + '|' +
                '\\.' + decimal_integer_re + decimal_exponent_re + '?' +
              ')';
  const hexadecimal_float_re = '(0[xX](' +
                  hexadecimal_digits_re + '\\.' + hexadecimal_digits_re + '|' +
                  '\\.?' + hexadecimal_digits_re +
                 ')[pP][+-]?' + decimal_integer_nosus_re + ')';

  const integer_re = '(' +
      decimal_integer_re + '|' +
      binary_integer_re + '|' +
       hexadecimal_integer_re +
    ')';

  const float_re = '(' +
      hexadecimal_float_re + '|' +
      decimal_float_re +
    ')';

  /**
   * Escape sequence supported in D string and character literals
   *
   * @type {String}
   */
  const escape_sequence_re = '\\\\(' +
              '[\'"\\?\\\\abfnrtv]|' + // common escapes
              'u[\\dA-Fa-f]{4}|' + // four hex digit unicode codepoint
              '[0-7]{1,3}|' + // one to three octal digit ascii char code
              'x[\\dA-Fa-f]{2}|' + // two hex digit ascii char code
              'U[\\dA-Fa-f]{8}' + // eight hex digit unicode codepoint
              ')|' +
              '&[a-zA-Z\\d]{2,};'; // named character entity

  /**
   * D integer number literals
   *
   * @type {Object}
   */
  const D_INTEGER_MODE = {
    className: 'number',
    begin: '\\b' + integer_re + '(L|u|U|Lu|LU|uL|UL)?',
    relevance: 0
  };

  /**
   * [D_FLOAT_MODE description]
   * @type {Object}
   */
  const D_FLOAT_MODE = {
    className: 'number',
    begin: '\\b(' +
        float_re + '([fF]|L|i|[fF]i|Li)?|' +
        integer_re + '(i|[fF]i|Li)' +
      ')',
    relevance: 0
  };

  /**
   * D character literal
   *
   * @type {Object}
   */
  const D_CHARACTER_MODE = {
    className: 'string',
    begin: '\'(' + escape_sequence_re + '|.)',
    end: '\'',
    illegal: '.'
  };

  /**
   * D string escape sequence
   *
   * @type {Object}
   */
  const D_ESCAPE_SEQUENCE = {
    begin: escape_sequence_re,
    relevance: 0
  };

  /**
   * D double quoted string literal
   *
   * @type {Object}
   */
  const D_STRING_MODE = {
    className: 'string',
    begin: '"',
    contains: [D_ESCAPE_SEQUENCE],
    end: '"[cwd]?'
  };

  /**
   * D wysiwyg and delimited string literals
   *
   * @type {Object}
   */
  const D_WYSIWYG_DELIMITED_STRING_MODE = {
    className: 'string',
    begin: '[rq]"',
    end: '"[cwd]?',
    relevance: 5
  };

  /**
   * D alternate wysiwyg string literal
   *
   * @type {Object}
   */
  const D_ALTERNATE_WYSIWYG_STRING_MODE = {
    className: 'string',
    begin: '`',
    end: '`[cwd]?'
  };

  /**
   * D hexadecimal string literal
   *
   * @type {Object}
   */
  const D_HEX_STRING_MODE = {
    className: 'string',
    begin: 'x"[\\da-fA-F\\s\\n\\r]*"[cwd]?',
    relevance: 10
  };

  /**
   * D delimited string literal
   *
   * @type {Object}
   */
  const D_TOKEN_STRING_MODE = {
    className: 'string',
    begin: 'q"\\{',
    end: '\\}"'
  };

  /**
   * Hashbang support
   *
   * @type {Object}
   */
  const D_HASHBANG_MODE = {
    className: 'meta',
    begin: '^#!',
    end: '$',
    relevance: 5
  };

  /**
   * D special token sequence
   *
   * @type {Object}
   */
  const D_SPECIAL_TOKEN_SEQUENCE_MODE = {
    className: 'meta',
    begin: '#(line)',
    end: '$',
    relevance: 5
  };

  /**
   * D attributes
   *
   * @type {Object}
   */
  const D_ATTRIBUTE_MODE = {
    className: 'keyword',
    begin: '@[a-zA-Z_][a-zA-Z_\\d]*'
  };

  /**
   * D nesting comment
   *
   * @type {Object}
   */
  const D_NESTING_COMMENT_MODE = hljs.COMMENT(
    '\\/\\+',
    '\\+\\/',
    {
      contains: ['self'],
      relevance: 10
    }
  );

  return {
    name: 'D',
    keywords: D_KEYWORDS,
    contains: [
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      D_NESTING_COMMENT_MODE,
      D_HEX_STRING_MODE,
      D_STRING_MODE,
      D_WYSIWYG_DELIMITED_STRING_MODE,
      D_ALTERNATE_WYSIWYG_STRING_MODE,
      D_TOKEN_STRING_MODE,
      D_FLOAT_MODE,
      D_INTEGER_MODE,
      D_CHARACTER_MODE,
      D_HASHBANG_MODE,
      D_SPECIAL_TOKEN_SEQUENCE_MODE,
      D_ATTRIBUTE_MODE
    ]
  };
}

module.exports = d;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsRUFBRTtBQUM5QixxQkFBcUIsSUFBSTtBQUN6Qiw0QkFBNEIsRUFBRTtBQUM5Qiw0QkFBNEIsRUFBRTtBQUM5QjtBQUNBLDRCQUE0QixJQUFJLEVBQUU7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoic3RhdGljL2NodW5rcy80MS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5MYW5ndWFnZTogRFxuQXV0aG9yOiBBbGVrc2FuZGFyIFJ1emljaWMgPGFsZWtzYW5kYXJAcnV6aWNpYy5pbmZvPlxuRGVzY3JpcHRpb246IEQgaXMgYSBsYW5ndWFnZSB3aXRoIEMtbGlrZSBzeW50YXggYW5kIHN0YXRpYyB0eXBpbmcuIEl0IHByYWdtYXRpY2FsbHkgY29tYmluZXMgZWZmaWNpZW5jeSwgY29udHJvbCwgYW5kIG1vZGVsaW5nIHBvd2VyLCB3aXRoIHNhZmV0eSBhbmQgcHJvZ3JhbW1lciBwcm9kdWN0aXZpdHkuXG5WZXJzaW9uOiAxLjBhXG5XZWJzaXRlOiBodHRwczovL2RsYW5nLm9yZ1xuRGF0ZTogMjAxMi0wNC0wOFxuKi9cblxuLyoqXG4gKiBLbm93biBpc3N1ZXM6XG4gKlxuICogLSBpbnZhbGlkIGhleCBzdHJpbmcgbGl0ZXJhbHMgd2lsbCBiZSByZWNvZ25pemVkIGFzIGEgZG91YmxlIHF1b3RlZCBzdHJpbmdzXG4gKiAgIGJ1dCAneCcgYXQgdGhlIGJlZ2lubmluZyBvZiBzdHJpbmcgd2lsbCBub3QgYmUgbWF0Y2hlZFxuICpcbiAqIC0gZGVsaW1pdGVkIHN0cmluZyBsaXRlcmFscyBhcmUgbm90IGNoZWNrZWQgZm9yIG1hdGNoaW5nIGVuZCBkZWxpbWl0ZXJcbiAqICAgKG5vdCBwb3NzaWJsZSB0byBkbyB3aXRoIGpzIHJlZ2V4cClcbiAqXG4gKiAtIGNvbnRlbnQgb2YgdG9rZW4gc3RyaW5nIGlzIGNvbG9yZWQgYXMgYSBzdHJpbmcgKGkuZS4gbm8ga2V5d29yZCBjb2xvcmluZyBpbnNpZGUgYSB0b2tlbiBzdHJpbmcpXG4gKiAgIGFsc28sIGNvbnRlbnQgb2YgdG9rZW4gc3RyaW5nIGlzIG5vdCB2YWxpZGF0ZWQgdG8gY29udGFpbiBvbmx5IHZhbGlkIEQgdG9rZW5zXG4gKlxuICogLSBzcGVjaWFsIHRva2VuIHNlcXVlbmNlIHJ1bGUgaXMgbm90IHN0cmljdGx5IGZvbGxvd2luZyBEIGdyYW1tYXIgKGFueXRoaW5nIGZvbGxvd2luZyAjbGluZVxuICogICB1cCB0byB0aGUgZW5kIG9mIGxpbmUgaXMgbWF0Y2hlZCBhcyBzcGVjaWFsIHRva2VuIHNlcXVlbmNlKVxuICovXG5cbi8qKiBAdHlwZSBMYW5ndWFnZUZuICovXG5mdW5jdGlvbiBkKGhsanMpIHtcbiAgLyoqXG4gICAqIExhbmd1YWdlIGtleXdvcmRzXG4gICAqXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuICBjb25zdCBEX0tFWVdPUkRTID0ge1xuICAgICRwYXR0ZXJuOiBobGpzLlVOREVSU0NPUkVfSURFTlRfUkUsXG4gICAga2V5d29yZDpcbiAgICAgICdhYnN0cmFjdCBhbGlhcyBhbGlnbiBhc20gYXNzZXJ0IGF1dG8gYm9keSBicmVhayBieXRlIGNhc2UgY2FzdCBjYXRjaCBjbGFzcyAnICtcbiAgICAgICdjb25zdCBjb250aW51ZSBkZWJ1ZyBkZWZhdWx0IGRlbGV0ZSBkZXByZWNhdGVkIGRvIGVsc2UgZW51bSBleHBvcnQgZXh0ZXJuIGZpbmFsICcgK1xuICAgICAgJ2ZpbmFsbHkgZm9yIGZvcmVhY2ggZm9yZWFjaF9yZXZlcnNlfDEwIGdvdG8gaWYgaW1tdXRhYmxlIGltcG9ydCBpbiBpbm91dCBpbnQgJyArXG4gICAgICAnaW50ZXJmYWNlIGludmFyaWFudCBpcyBsYXp5IG1hY3JvIG1peGluIG1vZHVsZSBuZXcgbm90aHJvdyBvdXQgb3ZlcnJpZGUgcGFja2FnZSAnICtcbiAgICAgICdwcmFnbWEgcHJpdmF0ZSBwcm90ZWN0ZWQgcHVibGljIHB1cmUgcmVmIHJldHVybiBzY29wZSBzaGFyZWQgc3RhdGljIHN0cnVjdCAnICtcbiAgICAgICdzdXBlciBzd2l0Y2ggc3luY2hyb25pemVkIHRlbXBsYXRlIHRoaXMgdGhyb3cgdHJ5IHR5cGVkZWYgdHlwZWlkIHR5cGVvZiB1bmlvbiAnICtcbiAgICAgICd1bml0dGVzdCB2ZXJzaW9uIHZvaWQgdm9sYXRpbGUgd2hpbGUgd2l0aCBfX0ZJTEVfXyBfX0xJTkVfXyBfX2dzaGFyZWR8MTAgJyArXG4gICAgICAnX190aHJlYWQgX190cmFpdHMgX19EQVRFX18gX19FT0ZfXyBfX1RJTUVfXyBfX1RJTUVTVEFNUF9fIF9fVkVORE9SX18gX19WRVJTSU9OX18nLFxuICAgIGJ1aWx0X2luOlxuICAgICAgJ2Jvb2wgY2RvdWJsZSBjZW50IGNmbG9hdCBjaGFyIGNyZWFsIGRjaGFyIGRlbGVnYXRlIGRvdWJsZSBkc3RyaW5nIGZsb2F0IGZ1bmN0aW9uICcgK1xuICAgICAgJ2lkb3VibGUgaWZsb2F0IGlyZWFsIGxvbmcgcmVhbCBzaG9ydCBzdHJpbmcgdWJ5dGUgdWNlbnQgdWludCB1bG9uZyB1c2hvcnQgd2NoYXIgJyArXG4gICAgICAnd3N0cmluZycsXG4gICAgbGl0ZXJhbDpcbiAgICAgICdmYWxzZSBudWxsIHRydWUnXG4gIH07XG5cbiAgLyoqXG4gICAqIE51bWJlciBsaXRlcmFsIHJlZ2V4cHNcbiAgICpcbiAgICogQHR5cGUge1N0cmluZ31cbiAgICovXG4gIGNvbnN0IGRlY2ltYWxfaW50ZWdlcl9yZSA9ICcoMHxbMS05XVtcXFxcZF9dKiknO1xuICBjb25zdCBkZWNpbWFsX2ludGVnZXJfbm9zdXNfcmUgPSAnKDB8WzEtOV1bXFxcXGRfXSp8XFxcXGRbXFxcXGRfXSp8W1xcXFxkX10rP1xcXFxkKSc7XG4gIGNvbnN0IGJpbmFyeV9pbnRlZ2VyX3JlID0gJzBbYkJdWzAxX10rJztcbiAgY29uc3QgaGV4YWRlY2ltYWxfZGlnaXRzX3JlID0gJyhbXFxcXGRhLWZBLUZdW1xcXFxkYS1mQS1GX10qfF9bXFxcXGRhLWZBLUZdW1xcXFxkYS1mQS1GX10qKSc7XG4gIGNvbnN0IGhleGFkZWNpbWFsX2ludGVnZXJfcmUgPSAnMFt4WF0nICsgaGV4YWRlY2ltYWxfZGlnaXRzX3JlO1xuXG4gIGNvbnN0IGRlY2ltYWxfZXhwb25lbnRfcmUgPSAnKFtlRV1bKy1dPycgKyBkZWNpbWFsX2ludGVnZXJfbm9zdXNfcmUgKyAnKSc7XG4gIGNvbnN0IGRlY2ltYWxfZmxvYXRfcmUgPSAnKCcgKyBkZWNpbWFsX2ludGVnZXJfbm9zdXNfcmUgKyAnKFxcXFwuXFxcXGQqfCcgKyBkZWNpbWFsX2V4cG9uZW50X3JlICsgJyl8JyArXG4gICAgICAgICAgICAgICAgJ1xcXFxkK1xcXFwuJyArIGRlY2ltYWxfaW50ZWdlcl9ub3N1c19yZSArICd8JyArXG4gICAgICAgICAgICAgICAgJ1xcXFwuJyArIGRlY2ltYWxfaW50ZWdlcl9yZSArIGRlY2ltYWxfZXhwb25lbnRfcmUgKyAnPycgK1xuICAgICAgICAgICAgICAnKSc7XG4gIGNvbnN0IGhleGFkZWNpbWFsX2Zsb2F0X3JlID0gJygwW3hYXSgnICtcbiAgICAgICAgICAgICAgICAgIGhleGFkZWNpbWFsX2RpZ2l0c19yZSArICdcXFxcLicgKyBoZXhhZGVjaW1hbF9kaWdpdHNfcmUgKyAnfCcgK1xuICAgICAgICAgICAgICAgICAgJ1xcXFwuPycgKyBoZXhhZGVjaW1hbF9kaWdpdHNfcmUgK1xuICAgICAgICAgICAgICAgICAnKVtwUF1bKy1dPycgKyBkZWNpbWFsX2ludGVnZXJfbm9zdXNfcmUgKyAnKSc7XG5cbiAgY29uc3QgaW50ZWdlcl9yZSA9ICcoJyArXG4gICAgICBkZWNpbWFsX2ludGVnZXJfcmUgKyAnfCcgK1xuICAgICAgYmluYXJ5X2ludGVnZXJfcmUgKyAnfCcgK1xuICAgICAgIGhleGFkZWNpbWFsX2ludGVnZXJfcmUgK1xuICAgICcpJztcblxuICBjb25zdCBmbG9hdF9yZSA9ICcoJyArXG4gICAgICBoZXhhZGVjaW1hbF9mbG9hdF9yZSArICd8JyArXG4gICAgICBkZWNpbWFsX2Zsb2F0X3JlICtcbiAgICAnKSc7XG5cbiAgLyoqXG4gICAqIEVzY2FwZSBzZXF1ZW5jZSBzdXBwb3J0ZWQgaW4gRCBzdHJpbmcgYW5kIGNoYXJhY3RlciBsaXRlcmFsc1xuICAgKlxuICAgKiBAdHlwZSB7U3RyaW5nfVxuICAgKi9cbiAgY29uc3QgZXNjYXBlX3NlcXVlbmNlX3JlID0gJ1xcXFxcXFxcKCcgK1xuICAgICAgICAgICAgICAnW1xcJ1wiXFxcXD9cXFxcXFxcXGFiZm5ydHZdfCcgKyAvLyBjb21tb24gZXNjYXBlc1xuICAgICAgICAgICAgICAndVtcXFxcZEEtRmEtZl17NH18JyArIC8vIGZvdXIgaGV4IGRpZ2l0IHVuaWNvZGUgY29kZXBvaW50XG4gICAgICAgICAgICAgICdbMC03XXsxLDN9fCcgKyAvLyBvbmUgdG8gdGhyZWUgb2N0YWwgZGlnaXQgYXNjaWkgY2hhciBjb2RlXG4gICAgICAgICAgICAgICd4W1xcXFxkQS1GYS1mXXsyfXwnICsgLy8gdHdvIGhleCBkaWdpdCBhc2NpaSBjaGFyIGNvZGVcbiAgICAgICAgICAgICAgJ1VbXFxcXGRBLUZhLWZdezh9JyArIC8vIGVpZ2h0IGhleCBkaWdpdCB1bmljb2RlIGNvZGVwb2ludFxuICAgICAgICAgICAgICAnKXwnICtcbiAgICAgICAgICAgICAgJyZbYS16QS1aXFxcXGRdezIsfTsnOyAvLyBuYW1lZCBjaGFyYWN0ZXIgZW50aXR5XG5cbiAgLyoqXG4gICAqIEQgaW50ZWdlciBudW1iZXIgbGl0ZXJhbHNcbiAgICpcbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIGNvbnN0IERfSU5URUdFUl9NT0RFID0ge1xuICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgYmVnaW46ICdcXFxcYicgKyBpbnRlZ2VyX3JlICsgJyhMfHV8VXxMdXxMVXx1THxVTCk/JyxcbiAgICByZWxldmFuY2U6IDBcbiAgfTtcblxuICAvKipcbiAgICogW0RfRkxPQVRfTU9ERSBkZXNjcmlwdGlvbl1cbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIGNvbnN0IERfRkxPQVRfTU9ERSA9IHtcbiAgICBjbGFzc05hbWU6ICdudW1iZXInLFxuICAgIGJlZ2luOiAnXFxcXGIoJyArXG4gICAgICAgIGZsb2F0X3JlICsgJyhbZkZdfEx8aXxbZkZdaXxMaSk/fCcgK1xuICAgICAgICBpbnRlZ2VyX3JlICsgJyhpfFtmRl1pfExpKScgK1xuICAgICAgJyknLFxuICAgIHJlbGV2YW5jZTogMFxuICB9O1xuXG4gIC8qKlxuICAgKiBEIGNoYXJhY3RlciBsaXRlcmFsXG4gICAqXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuICBjb25zdCBEX0NIQVJBQ1RFUl9NT0RFID0ge1xuICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgYmVnaW46ICdcXCcoJyArIGVzY2FwZV9zZXF1ZW5jZV9yZSArICd8LiknLFxuICAgIGVuZDogJ1xcJycsXG4gICAgaWxsZWdhbDogJy4nXG4gIH07XG5cbiAgLyoqXG4gICAqIEQgc3RyaW5nIGVzY2FwZSBzZXF1ZW5jZVxuICAgKlxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgY29uc3QgRF9FU0NBUEVfU0VRVUVOQ0UgPSB7XG4gICAgYmVnaW46IGVzY2FwZV9zZXF1ZW5jZV9yZSxcbiAgICByZWxldmFuY2U6IDBcbiAgfTtcblxuICAvKipcbiAgICogRCBkb3VibGUgcXVvdGVkIHN0cmluZyBsaXRlcmFsXG4gICAqXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuICBjb25zdCBEX1NUUklOR19NT0RFID0ge1xuICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgYmVnaW46ICdcIicsXG4gICAgY29udGFpbnM6IFtEX0VTQ0FQRV9TRVFVRU5DRV0sXG4gICAgZW5kOiAnXCJbY3dkXT8nXG4gIH07XG5cbiAgLyoqXG4gICAqIEQgd3lzaXd5ZyBhbmQgZGVsaW1pdGVkIHN0cmluZyBsaXRlcmFsc1xuICAgKlxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgY29uc3QgRF9XWVNJV1lHX0RFTElNSVRFRF9TVFJJTkdfTU9ERSA9IHtcbiAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgIGJlZ2luOiAnW3JxXVwiJyxcbiAgICBlbmQ6ICdcIltjd2RdPycsXG4gICAgcmVsZXZhbmNlOiA1XG4gIH07XG5cbiAgLyoqXG4gICAqIEQgYWx0ZXJuYXRlIHd5c2l3eWcgc3RyaW5nIGxpdGVyYWxcbiAgICpcbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIGNvbnN0IERfQUxURVJOQVRFX1dZU0lXWUdfU1RSSU5HX01PREUgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICBiZWdpbjogJ2AnLFxuICAgIGVuZDogJ2BbY3dkXT8nXG4gIH07XG5cbiAgLyoqXG4gICAqIEQgaGV4YWRlY2ltYWwgc3RyaW5nIGxpdGVyYWxcbiAgICpcbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIGNvbnN0IERfSEVYX1NUUklOR19NT0RFID0ge1xuICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgYmVnaW46ICd4XCJbXFxcXGRhLWZBLUZcXFxcc1xcXFxuXFxcXHJdKlwiW2N3ZF0/JyxcbiAgICByZWxldmFuY2U6IDEwXG4gIH07XG5cbiAgLyoqXG4gICAqIEQgZGVsaW1pdGVkIHN0cmluZyBsaXRlcmFsXG4gICAqXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuICBjb25zdCBEX1RPS0VOX1NUUklOR19NT0RFID0ge1xuICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgYmVnaW46ICdxXCJcXFxceycsXG4gICAgZW5kOiAnXFxcXH1cIidcbiAgfTtcblxuICAvKipcbiAgICogSGFzaGJhbmcgc3VwcG9ydFxuICAgKlxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgY29uc3QgRF9IQVNIQkFOR19NT0RFID0ge1xuICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgIGJlZ2luOiAnXiMhJyxcbiAgICBlbmQ6ICckJyxcbiAgICByZWxldmFuY2U6IDVcbiAgfTtcblxuICAvKipcbiAgICogRCBzcGVjaWFsIHRva2VuIHNlcXVlbmNlXG4gICAqXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuICBjb25zdCBEX1NQRUNJQUxfVE9LRU5fU0VRVUVOQ0VfTU9ERSA9IHtcbiAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICBiZWdpbjogJyMobGluZSknLFxuICAgIGVuZDogJyQnLFxuICAgIHJlbGV2YW5jZTogNVxuICB9O1xuXG4gIC8qKlxuICAgKiBEIGF0dHJpYnV0ZXNcbiAgICpcbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIGNvbnN0IERfQVRUUklCVVRFX01PREUgPSB7XG4gICAgY2xhc3NOYW1lOiAna2V5d29yZCcsXG4gICAgYmVnaW46ICdAW2EtekEtWl9dW2EtekEtWl9cXFxcZF0qJ1xuICB9O1xuXG4gIC8qKlxuICAgKiBEIG5lc3RpbmcgY29tbWVudFxuICAgKlxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgY29uc3QgRF9ORVNUSU5HX0NPTU1FTlRfTU9ERSA9IGhsanMuQ09NTUVOVChcbiAgICAnXFxcXC9cXFxcKycsXG4gICAgJ1xcXFwrXFxcXC8nLFxuICAgIHtcbiAgICAgIGNvbnRhaW5zOiBbJ3NlbGYnXSxcbiAgICAgIHJlbGV2YW5jZTogMTBcbiAgICB9XG4gICk7XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnRCcsXG4gICAga2V5d29yZHM6IERfS0VZV09SRFMsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIGhsanMuQ19MSU5FX0NPTU1FTlRfTU9ERSxcbiAgICAgIGhsanMuQ19CTE9DS19DT01NRU5UX01PREUsXG4gICAgICBEX05FU1RJTkdfQ09NTUVOVF9NT0RFLFxuICAgICAgRF9IRVhfU1RSSU5HX01PREUsXG4gICAgICBEX1NUUklOR19NT0RFLFxuICAgICAgRF9XWVNJV1lHX0RFTElNSVRFRF9TVFJJTkdfTU9ERSxcbiAgICAgIERfQUxURVJOQVRFX1dZU0lXWUdfU1RSSU5HX01PREUsXG4gICAgICBEX1RPS0VOX1NUUklOR19NT0RFLFxuICAgICAgRF9GTE9BVF9NT0RFLFxuICAgICAgRF9JTlRFR0VSX01PREUsXG4gICAgICBEX0NIQVJBQ1RFUl9NT0RFLFxuICAgICAgRF9IQVNIQkFOR19NT0RFLFxuICAgICAgRF9TUEVDSUFMX1RPS0VOX1NFUVVFTkNFX01PREUsXG4gICAgICBEX0FUVFJJQlVURV9NT0RFXG4gICAgXVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGQ7XG4iXSwic291cmNlUm9vdCI6IiJ9