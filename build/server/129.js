exports.ids = [129];
exports.modules = {

/***/ "./node_modules/highlight.js/lib/languages/php.js":
/*!********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/php.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: PHP
Author: Victor Karamzin <Victor.Karamzin@enterra-inc.com>
Contributors: Evgeny Stepanischev <imbolk@gmail.com>, Ivan Sagalaev <maniac@softwaremaniacs.org>
Website: https://www.php.net
Category: common
*/

/**
 * @param {HLJSApi} hljs
 * @returns {LanguageDetail}
 * */
function php(hljs) {
  const VARIABLE = {
    className: 'variable',
    begin: '\\$+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*' +
      // negative look-ahead tries to avoid matching patterns that are not
      // Perl at all like $ident$, @ident@, etc.
      `(?![A-Za-z0-9])(?![$])`
  };
  const PREPROCESSOR = {
    className: 'meta',
    variants: [
      { begin: /<\?php/, relevance: 10 }, // boost for obvious PHP
      { begin: /<\?[=]?/ },
      { begin: /\?>/ } // end php tag
    ]
  };
  const SUBST = {
    className: 'subst',
    variants: [
      { begin: /\$\w+/ },
      { begin: /\{\$/, end: /\}/ }
    ]
  };
  const SINGLE_QUOTED = hljs.inherit(hljs.APOS_STRING_MODE, {
    illegal: null,
  });
  const DOUBLE_QUOTED = hljs.inherit(hljs.QUOTE_STRING_MODE, {
    illegal: null,
    contains: hljs.QUOTE_STRING_MODE.contains.concat(SUBST),
  });
  const HEREDOC = hljs.END_SAME_AS_BEGIN({
    begin: /<<<[ \t]*(\w+)\n/,
    end: /[ \t]*(\w+)\b/,
    contains: hljs.QUOTE_STRING_MODE.contains.concat(SUBST),
  });
  const STRING = {
    className: 'string',
    contains: [hljs.BACKSLASH_ESCAPE, PREPROCESSOR],
    variants: [
      hljs.inherit(SINGLE_QUOTED, {
        begin: "b'", end: "'",
      }),
      hljs.inherit(DOUBLE_QUOTED, {
        begin: 'b"', end: '"',
      }),
      DOUBLE_QUOTED,
      SINGLE_QUOTED,
      HEREDOC
    ]
  };
  const NUMBER = {variants: [hljs.BINARY_NUMBER_MODE, hljs.C_NUMBER_MODE]};
  const KEYWORDS = {
    keyword:
    // Magic constants:
    // <https://www.php.net/manual/en/language.constants.predefined.php>
    '__CLASS__ __DIR__ __FILE__ __FUNCTION__ __LINE__ __METHOD__ __NAMESPACE__ __TRAIT__ ' +
    // Function that look like language construct or language construct that look like function:
    // List of keywords that may not require parenthesis
    'die echo exit include include_once print require require_once ' +
    // These are not language construct (function) but operate on the currently-executing function and can access the current symbol table
    // 'compact extract func_get_arg func_get_args func_num_args get_called_class get_parent_class ' +
    // Other keywords:
    // <https://www.php.net/manual/en/reserved.php>
    // <https://www.php.net/manual/en/language.types.type-juggling.php>
    'array abstract and as binary bool boolean break callable case catch class clone const continue declare ' +
    'default do double else elseif empty enddeclare endfor endforeach endif endswitch endwhile eval extends ' +
    'final finally float for foreach from global goto if implements instanceof insteadof int integer interface ' +
    'isset iterable list match|0 new object or private protected public real return string switch throw trait ' +
    'try unset use var void while xor yield',
    literal: 'false null true',
    built_in:
    // Standard PHP library:
    // <https://www.php.net/manual/en/book.spl.php>
    'Error|0 ' + // error is too common a name esp since PHP is case in-sensitive
    'AppendIterator ArgumentCountError ArithmeticError ArrayIterator ArrayObject AssertionError BadFunctionCallException BadMethodCallException CachingIterator CallbackFilterIterator CompileError Countable DirectoryIterator DivisionByZeroError DomainException EmptyIterator ErrorException Exception FilesystemIterator FilterIterator GlobIterator InfiniteIterator InvalidArgumentException IteratorIterator LengthException LimitIterator LogicException MultipleIterator NoRewindIterator OutOfBoundsException OutOfRangeException OuterIterator OverflowException ParentIterator ParseError RangeException RecursiveArrayIterator RecursiveCachingIterator RecursiveCallbackFilterIterator RecursiveDirectoryIterator RecursiveFilterIterator RecursiveIterator RecursiveIteratorIterator RecursiveRegexIterator RecursiveTreeIterator RegexIterator RuntimeException SeekableIterator SplDoublyLinkedList SplFileInfo SplFileObject SplFixedArray SplHeap SplMaxHeap SplMinHeap SplObjectStorage SplObserver SplObserver SplPriorityQueue SplQueue SplStack SplSubject SplSubject SplTempFileObject TypeError UnderflowException UnexpectedValueException ' +
    // Reserved interfaces:
    // <https://www.php.net/manual/en/reserved.interfaces.php>
    'ArrayAccess Closure Generator Iterator IteratorAggregate Serializable Throwable Traversable WeakReference ' +
    // Reserved classes:
    // <https://www.php.net/manual/en/reserved.classes.php>
    'Directory __PHP_Incomplete_Class parent php_user_filter self static stdClass'
  };
  return {
    aliases: ['php', 'php3', 'php4', 'php5', 'php6', 'php7', 'php8'],
    case_insensitive: true,
    keywords: KEYWORDS,
    contains: [
      hljs.HASH_COMMENT_MODE,
      hljs.COMMENT('//', '$', {contains: [PREPROCESSOR]}),
      hljs.COMMENT(
        '/\\*',
        '\\*/',
        {
          contains: [
            {
              className: 'doctag',
              begin: '@[A-Za-z]+'
            }
          ]
        }
      ),
      hljs.COMMENT(
        '__halt_compiler.+?;',
        false,
        {
          endsWithParent: true,
          keywords: '__halt_compiler'
        }
      ),
      PREPROCESSOR,
      {
        className: 'keyword', begin: /\$this\b/
      },
      VARIABLE,
      {
        // swallow composed identifiers to avoid parsing them as keywords
        begin: /(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/
      },
      {
        className: 'function',
        relevance: 0,
        beginKeywords: 'fn function', end: /[;{]/, excludeEnd: true,
        illegal: '[$%\\[]',
        contains: [
          hljs.UNDERSCORE_TITLE_MODE,
          {
            begin: '=>' // No markup, just a relevance booster
          },
          {
            className: 'params',
            begin: '\\(', end: '\\)',
            excludeBegin: true,
            excludeEnd: true,
            keywords: KEYWORDS,
            contains: [
              'self',
              VARIABLE,
              hljs.C_BLOCK_COMMENT_MODE,
              STRING,
              NUMBER
            ]
          }
        ]
      },
      {
        className: 'class',
        beginKeywords: 'class interface',
        relevance: 0,
        end: /\{/,
        excludeEnd: true,
        illegal: /[:($"]/,
        contains: [
          {beginKeywords: 'extends implements'},
          hljs.UNDERSCORE_TITLE_MODE
        ]
      },
      {
        beginKeywords: 'namespace',
        relevance: 0,
        end: ';',
        illegal: /[.']/,
        contains: [hljs.UNDERSCORE_TITLE_MODE]
      },
      {
        beginKeywords: 'use',
        relevance: 0,
        end: ';',
        contains: [hljs.UNDERSCORE_TITLE_MODE]
      },
      STRING,
      NUMBER
    ]
  };
}

module.exports = php;


/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvcGhwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxpQ0FBaUM7QUFDeEMsT0FBTyxtQkFBbUI7QUFDMUIsT0FBTyxlQUFlO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGlCQUFpQjtBQUN4QixPQUFPLFdBQVcsYUFBYTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQix5QkFBeUI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLCtDQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQSxXQUFXLG9DQUFvQztBQUMvQztBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6IjEyOS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5MYW5ndWFnZTogUEhQXG5BdXRob3I6IFZpY3RvciBLYXJhbXppbiA8VmljdG9yLkthcmFtemluQGVudGVycmEtaW5jLmNvbT5cbkNvbnRyaWJ1dG9yczogRXZnZW55IFN0ZXBhbmlzY2hldiA8aW1ib2xrQGdtYWlsLmNvbT4sIEl2YW4gU2FnYWxhZXYgPG1hbmlhY0Bzb2Z0d2FyZW1hbmlhY3Mub3JnPlxuV2Vic2l0ZTogaHR0cHM6Ly93d3cucGhwLm5ldFxuQ2F0ZWdvcnk6IGNvbW1vblxuKi9cblxuLyoqXG4gKiBAcGFyYW0ge0hMSlNBcGl9IGhsanNcbiAqIEByZXR1cm5zIHtMYW5ndWFnZURldGFpbH1cbiAqICovXG5mdW5jdGlvbiBwaHAoaGxqcykge1xuICBjb25zdCBWQVJJQUJMRSA9IHtcbiAgICBjbGFzc05hbWU6ICd2YXJpYWJsZScsXG4gICAgYmVnaW46ICdcXFxcJCtbYS16QS1aX1xceDdmLVxceGZmXVthLXpBLVowLTlfXFx4N2YtXFx4ZmZdKicgK1xuICAgICAgLy8gbmVnYXRpdmUgbG9vay1haGVhZCB0cmllcyB0byBhdm9pZCBtYXRjaGluZyBwYXR0ZXJucyB0aGF0IGFyZSBub3RcbiAgICAgIC8vIFBlcmwgYXQgYWxsIGxpa2UgJGlkZW50JCwgQGlkZW50QCwgZXRjLlxuICAgICAgYCg/IVtBLVphLXowLTldKSg/IVskXSlgXG4gIH07XG4gIGNvbnN0IFBSRVBST0NFU1NPUiA9IHtcbiAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICB2YXJpYW50czogW1xuICAgICAgeyBiZWdpbjogLzxcXD9waHAvLCByZWxldmFuY2U6IDEwIH0sIC8vIGJvb3N0IGZvciBvYnZpb3VzIFBIUFxuICAgICAgeyBiZWdpbjogLzxcXD9bPV0/LyB9LFxuICAgICAgeyBiZWdpbjogL1xcPz4vIH0gLy8gZW5kIHBocCB0YWdcbiAgICBdXG4gIH07XG4gIGNvbnN0IFNVQlNUID0ge1xuICAgIGNsYXNzTmFtZTogJ3N1YnN0JyxcbiAgICB2YXJpYW50czogW1xuICAgICAgeyBiZWdpbjogL1xcJFxcdysvIH0sXG4gICAgICB7IGJlZ2luOiAvXFx7XFwkLywgZW5kOiAvXFx9LyB9XG4gICAgXVxuICB9O1xuICBjb25zdCBTSU5HTEVfUVVPVEVEID0gaGxqcy5pbmhlcml0KGhsanMuQVBPU19TVFJJTkdfTU9ERSwge1xuICAgIGlsbGVnYWw6IG51bGwsXG4gIH0pO1xuICBjb25zdCBET1VCTEVfUVVPVEVEID0gaGxqcy5pbmhlcml0KGhsanMuUVVPVEVfU1RSSU5HX01PREUsIHtcbiAgICBpbGxlZ2FsOiBudWxsLFxuICAgIGNvbnRhaW5zOiBobGpzLlFVT1RFX1NUUklOR19NT0RFLmNvbnRhaW5zLmNvbmNhdChTVUJTVCksXG4gIH0pO1xuICBjb25zdCBIRVJFRE9DID0gaGxqcy5FTkRfU0FNRV9BU19CRUdJTih7XG4gICAgYmVnaW46IC88PDxbIFxcdF0qKFxcdyspXFxuLyxcbiAgICBlbmQ6IC9bIFxcdF0qKFxcdyspXFxiLyxcbiAgICBjb250YWluczogaGxqcy5RVU9URV9TVFJJTkdfTU9ERS5jb250YWlucy5jb25jYXQoU1VCU1QpLFxuICB9KTtcbiAgY29uc3QgU1RSSU5HID0ge1xuICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgY29udGFpbnM6IFtobGpzLkJBQ0tTTEFTSF9FU0NBUEUsIFBSRVBST0NFU1NPUl0sXG4gICAgdmFyaWFudHM6IFtcbiAgICAgIGhsanMuaW5oZXJpdChTSU5HTEVfUVVPVEVELCB7XG4gICAgICAgIGJlZ2luOiBcImInXCIsIGVuZDogXCInXCIsXG4gICAgICB9KSxcbiAgICAgIGhsanMuaW5oZXJpdChET1VCTEVfUVVPVEVELCB7XG4gICAgICAgIGJlZ2luOiAnYlwiJywgZW5kOiAnXCInLFxuICAgICAgfSksXG4gICAgICBET1VCTEVfUVVPVEVELFxuICAgICAgU0lOR0xFX1FVT1RFRCxcbiAgICAgIEhFUkVET0NcbiAgICBdXG4gIH07XG4gIGNvbnN0IE5VTUJFUiA9IHt2YXJpYW50czogW2hsanMuQklOQVJZX05VTUJFUl9NT0RFLCBobGpzLkNfTlVNQkVSX01PREVdfTtcbiAgY29uc3QgS0VZV09SRFMgPSB7XG4gICAga2V5d29yZDpcbiAgICAvLyBNYWdpYyBjb25zdGFudHM6XG4gICAgLy8gPGh0dHBzOi8vd3d3LnBocC5uZXQvbWFudWFsL2VuL2xhbmd1YWdlLmNvbnN0YW50cy5wcmVkZWZpbmVkLnBocD5cbiAgICAnX19DTEFTU19fIF9fRElSX18gX19GSUxFX18gX19GVU5DVElPTl9fIF9fTElORV9fIF9fTUVUSE9EX18gX19OQU1FU1BBQ0VfXyBfX1RSQUlUX18gJyArXG4gICAgLy8gRnVuY3Rpb24gdGhhdCBsb29rIGxpa2UgbGFuZ3VhZ2UgY29uc3RydWN0IG9yIGxhbmd1YWdlIGNvbnN0cnVjdCB0aGF0IGxvb2sgbGlrZSBmdW5jdGlvbjpcbiAgICAvLyBMaXN0IG9mIGtleXdvcmRzIHRoYXQgbWF5IG5vdCByZXF1aXJlIHBhcmVudGhlc2lzXG4gICAgJ2RpZSBlY2hvIGV4aXQgaW5jbHVkZSBpbmNsdWRlX29uY2UgcHJpbnQgcmVxdWlyZSByZXF1aXJlX29uY2UgJyArXG4gICAgLy8gVGhlc2UgYXJlIG5vdCBsYW5ndWFnZSBjb25zdHJ1Y3QgKGZ1bmN0aW9uKSBidXQgb3BlcmF0ZSBvbiB0aGUgY3VycmVudGx5LWV4ZWN1dGluZyBmdW5jdGlvbiBhbmQgY2FuIGFjY2VzcyB0aGUgY3VycmVudCBzeW1ib2wgdGFibGVcbiAgICAvLyAnY29tcGFjdCBleHRyYWN0IGZ1bmNfZ2V0X2FyZyBmdW5jX2dldF9hcmdzIGZ1bmNfbnVtX2FyZ3MgZ2V0X2NhbGxlZF9jbGFzcyBnZXRfcGFyZW50X2NsYXNzICcgK1xuICAgIC8vIE90aGVyIGtleXdvcmRzOlxuICAgIC8vIDxodHRwczovL3d3dy5waHAubmV0L21hbnVhbC9lbi9yZXNlcnZlZC5waHA+XG4gICAgLy8gPGh0dHBzOi8vd3d3LnBocC5uZXQvbWFudWFsL2VuL2xhbmd1YWdlLnR5cGVzLnR5cGUtanVnZ2xpbmcucGhwPlxuICAgICdhcnJheSBhYnN0cmFjdCBhbmQgYXMgYmluYXJ5IGJvb2wgYm9vbGVhbiBicmVhayBjYWxsYWJsZSBjYXNlIGNhdGNoIGNsYXNzIGNsb25lIGNvbnN0IGNvbnRpbnVlIGRlY2xhcmUgJyArXG4gICAgJ2RlZmF1bHQgZG8gZG91YmxlIGVsc2UgZWxzZWlmIGVtcHR5IGVuZGRlY2xhcmUgZW5kZm9yIGVuZGZvcmVhY2ggZW5kaWYgZW5kc3dpdGNoIGVuZHdoaWxlIGV2YWwgZXh0ZW5kcyAnICtcbiAgICAnZmluYWwgZmluYWxseSBmbG9hdCBmb3IgZm9yZWFjaCBmcm9tIGdsb2JhbCBnb3RvIGlmIGltcGxlbWVudHMgaW5zdGFuY2VvZiBpbnN0ZWFkb2YgaW50IGludGVnZXIgaW50ZXJmYWNlICcgK1xuICAgICdpc3NldCBpdGVyYWJsZSBsaXN0IG1hdGNofDAgbmV3IG9iamVjdCBvciBwcml2YXRlIHByb3RlY3RlZCBwdWJsaWMgcmVhbCByZXR1cm4gc3RyaW5nIHN3aXRjaCB0aHJvdyB0cmFpdCAnICtcbiAgICAndHJ5IHVuc2V0IHVzZSB2YXIgdm9pZCB3aGlsZSB4b3IgeWllbGQnLFxuICAgIGxpdGVyYWw6ICdmYWxzZSBudWxsIHRydWUnLFxuICAgIGJ1aWx0X2luOlxuICAgIC8vIFN0YW5kYXJkIFBIUCBsaWJyYXJ5OlxuICAgIC8vIDxodHRwczovL3d3dy5waHAubmV0L21hbnVhbC9lbi9ib29rLnNwbC5waHA+XG4gICAgJ0Vycm9yfDAgJyArIC8vIGVycm9yIGlzIHRvbyBjb21tb24gYSBuYW1lIGVzcCBzaW5jZSBQSFAgaXMgY2FzZSBpbi1zZW5zaXRpdmVcbiAgICAnQXBwZW5kSXRlcmF0b3IgQXJndW1lbnRDb3VudEVycm9yIEFyaXRobWV0aWNFcnJvciBBcnJheUl0ZXJhdG9yIEFycmF5T2JqZWN0IEFzc2VydGlvbkVycm9yIEJhZEZ1bmN0aW9uQ2FsbEV4Y2VwdGlvbiBCYWRNZXRob2RDYWxsRXhjZXB0aW9uIENhY2hpbmdJdGVyYXRvciBDYWxsYmFja0ZpbHRlckl0ZXJhdG9yIENvbXBpbGVFcnJvciBDb3VudGFibGUgRGlyZWN0b3J5SXRlcmF0b3IgRGl2aXNpb25CeVplcm9FcnJvciBEb21haW5FeGNlcHRpb24gRW1wdHlJdGVyYXRvciBFcnJvckV4Y2VwdGlvbiBFeGNlcHRpb24gRmlsZXN5c3RlbUl0ZXJhdG9yIEZpbHRlckl0ZXJhdG9yIEdsb2JJdGVyYXRvciBJbmZpbml0ZUl0ZXJhdG9yIEludmFsaWRBcmd1bWVudEV4Y2VwdGlvbiBJdGVyYXRvckl0ZXJhdG9yIExlbmd0aEV4Y2VwdGlvbiBMaW1pdEl0ZXJhdG9yIExvZ2ljRXhjZXB0aW9uIE11bHRpcGxlSXRlcmF0b3IgTm9SZXdpbmRJdGVyYXRvciBPdXRPZkJvdW5kc0V4Y2VwdGlvbiBPdXRPZlJhbmdlRXhjZXB0aW9uIE91dGVySXRlcmF0b3IgT3ZlcmZsb3dFeGNlcHRpb24gUGFyZW50SXRlcmF0b3IgUGFyc2VFcnJvciBSYW5nZUV4Y2VwdGlvbiBSZWN1cnNpdmVBcnJheUl0ZXJhdG9yIFJlY3Vyc2l2ZUNhY2hpbmdJdGVyYXRvciBSZWN1cnNpdmVDYWxsYmFja0ZpbHRlckl0ZXJhdG9yIFJlY3Vyc2l2ZURpcmVjdG9yeUl0ZXJhdG9yIFJlY3Vyc2l2ZUZpbHRlckl0ZXJhdG9yIFJlY3Vyc2l2ZUl0ZXJhdG9yIFJlY3Vyc2l2ZUl0ZXJhdG9ySXRlcmF0b3IgUmVjdXJzaXZlUmVnZXhJdGVyYXRvciBSZWN1cnNpdmVUcmVlSXRlcmF0b3IgUmVnZXhJdGVyYXRvciBSdW50aW1lRXhjZXB0aW9uIFNlZWthYmxlSXRlcmF0b3IgU3BsRG91Ymx5TGlua2VkTGlzdCBTcGxGaWxlSW5mbyBTcGxGaWxlT2JqZWN0IFNwbEZpeGVkQXJyYXkgU3BsSGVhcCBTcGxNYXhIZWFwIFNwbE1pbkhlYXAgU3BsT2JqZWN0U3RvcmFnZSBTcGxPYnNlcnZlciBTcGxPYnNlcnZlciBTcGxQcmlvcml0eVF1ZXVlIFNwbFF1ZXVlIFNwbFN0YWNrIFNwbFN1YmplY3QgU3BsU3ViamVjdCBTcGxUZW1wRmlsZU9iamVjdCBUeXBlRXJyb3IgVW5kZXJmbG93RXhjZXB0aW9uIFVuZXhwZWN0ZWRWYWx1ZUV4Y2VwdGlvbiAnICtcbiAgICAvLyBSZXNlcnZlZCBpbnRlcmZhY2VzOlxuICAgIC8vIDxodHRwczovL3d3dy5waHAubmV0L21hbnVhbC9lbi9yZXNlcnZlZC5pbnRlcmZhY2VzLnBocD5cbiAgICAnQXJyYXlBY2Nlc3MgQ2xvc3VyZSBHZW5lcmF0b3IgSXRlcmF0b3IgSXRlcmF0b3JBZ2dyZWdhdGUgU2VyaWFsaXphYmxlIFRocm93YWJsZSBUcmF2ZXJzYWJsZSBXZWFrUmVmZXJlbmNlICcgK1xuICAgIC8vIFJlc2VydmVkIGNsYXNzZXM6XG4gICAgLy8gPGh0dHBzOi8vd3d3LnBocC5uZXQvbWFudWFsL2VuL3Jlc2VydmVkLmNsYXNzZXMucGhwPlxuICAgICdEaXJlY3RvcnkgX19QSFBfSW5jb21wbGV0ZV9DbGFzcyBwYXJlbnQgcGhwX3VzZXJfZmlsdGVyIHNlbGYgc3RhdGljIHN0ZENsYXNzJ1xuICB9O1xuICByZXR1cm4ge1xuICAgIGFsaWFzZXM6IFsncGhwJywgJ3BocDMnLCAncGhwNCcsICdwaHA1JywgJ3BocDYnLCAncGhwNycsICdwaHA4J10sXG4gICAgY2FzZV9pbnNlbnNpdGl2ZTogdHJ1ZSxcbiAgICBrZXl3b3JkczogS0VZV09SRFMsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIGhsanMuSEFTSF9DT01NRU5UX01PREUsXG4gICAgICBobGpzLkNPTU1FTlQoJy8vJywgJyQnLCB7Y29udGFpbnM6IFtQUkVQUk9DRVNTT1JdfSksXG4gICAgICBobGpzLkNPTU1FTlQoXG4gICAgICAgICcvXFxcXConLFxuICAgICAgICAnXFxcXCovJyxcbiAgICAgICAge1xuICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogJ2RvY3RhZycsXG4gICAgICAgICAgICAgIGJlZ2luOiAnQFtBLVphLXpdKydcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgICksXG4gICAgICBobGpzLkNPTU1FTlQoXG4gICAgICAgICdfX2hhbHRfY29tcGlsZXIuKz87JyxcbiAgICAgICAgZmFsc2UsXG4gICAgICAgIHtcbiAgICAgICAgICBlbmRzV2l0aFBhcmVudDogdHJ1ZSxcbiAgICAgICAgICBrZXl3b3JkczogJ19faGFsdF9jb21waWxlcidcbiAgICAgICAgfVxuICAgICAgKSxcbiAgICAgIFBSRVBST0NFU1NPUixcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAna2V5d29yZCcsIGJlZ2luOiAvXFwkdGhpc1xcYi9cbiAgICAgIH0sXG4gICAgICBWQVJJQUJMRSxcbiAgICAgIHtcbiAgICAgICAgLy8gc3dhbGxvdyBjb21wb3NlZCBpZGVudGlmaWVycyB0byBhdm9pZCBwYXJzaW5nIHRoZW0gYXMga2V5d29yZHNcbiAgICAgICAgYmVnaW46IC8oOjp8LT4pK1thLXpBLVpfXFx4N2YtXFx4ZmZdW2EtekEtWjAtOV9cXHg3Zi1cXHhmZl0qL1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnZnVuY3Rpb24nLFxuICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgIGJlZ2luS2V5d29yZHM6ICdmbiBmdW5jdGlvbicsIGVuZDogL1s7e10vLCBleGNsdWRlRW5kOiB0cnVlLFxuICAgICAgICBpbGxlZ2FsOiAnWyQlXFxcXFtdJyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICBobGpzLlVOREVSU0NPUkVfVElUTEVfTU9ERSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogJz0+JyAvLyBObyBtYXJrdXAsIGp1c3QgYSByZWxldmFuY2UgYm9vc3RlclxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAncGFyYW1zJyxcbiAgICAgICAgICAgIGJlZ2luOiAnXFxcXCgnLCBlbmQ6ICdcXFxcKScsXG4gICAgICAgICAgICBleGNsdWRlQmVnaW46IHRydWUsXG4gICAgICAgICAgICBleGNsdWRlRW5kOiB0cnVlLFxuICAgICAgICAgICAga2V5d29yZHM6IEtFWVdPUkRTLFxuICAgICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgICAgJ3NlbGYnLFxuICAgICAgICAgICAgICBWQVJJQUJMRSxcbiAgICAgICAgICAgICAgaGxqcy5DX0JMT0NLX0NPTU1FTlRfTU9ERSxcbiAgICAgICAgICAgICAgU1RSSU5HLFxuICAgICAgICAgICAgICBOVU1CRVJcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2NsYXNzJyxcbiAgICAgICAgYmVnaW5LZXl3b3JkczogJ2NsYXNzIGludGVyZmFjZScsXG4gICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgZW5kOiAvXFx7LyxcbiAgICAgICAgZXhjbHVkZUVuZDogdHJ1ZSxcbiAgICAgICAgaWxsZWdhbDogL1s6KCRcIl0vLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIHtiZWdpbktleXdvcmRzOiAnZXh0ZW5kcyBpbXBsZW1lbnRzJ30sXG4gICAgICAgICAgaGxqcy5VTkRFUlNDT1JFX1RJVExFX01PREVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW5LZXl3b3JkczogJ25hbWVzcGFjZScsXG4gICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgZW5kOiAnOycsXG4gICAgICAgIGlsbGVnYWw6IC9bLiddLyxcbiAgICAgICAgY29udGFpbnM6IFtobGpzLlVOREVSU0NPUkVfVElUTEVfTU9ERV1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luS2V5d29yZHM6ICd1c2UnLFxuICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgIGVuZDogJzsnLFxuICAgICAgICBjb250YWluczogW2hsanMuVU5ERVJTQ09SRV9USVRMRV9NT0RFXVxuICAgICAgfSxcbiAgICAgIFNUUklORyxcbiAgICAgIE5VTUJFUlxuICAgIF1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwaHA7XG4iXSwic291cmNlUm9vdCI6IiJ9