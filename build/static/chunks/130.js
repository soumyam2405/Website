(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[130],{

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

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3BocC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxpQ0FBaUM7QUFDeEMsT0FBTyxtQkFBbUI7QUFDMUIsT0FBTyxlQUFlO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGlCQUFpQjtBQUN4QixPQUFPLFdBQVcsYUFBYTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQix5QkFBeUI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLCtDQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQSxXQUFXLG9DQUFvQztBQUMvQztBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvMTMwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBQSFBcbkF1dGhvcjogVmljdG9yIEthcmFtemluIDxWaWN0b3IuS2FyYW16aW5AZW50ZXJyYS1pbmMuY29tPlxuQ29udHJpYnV0b3JzOiBFdmdlbnkgU3RlcGFuaXNjaGV2IDxpbWJvbGtAZ21haWwuY29tPiwgSXZhbiBTYWdhbGFldiA8bWFuaWFjQHNvZnR3YXJlbWFuaWFjcy5vcmc+XG5XZWJzaXRlOiBodHRwczovL3d3dy5waHAubmV0XG5DYXRlZ29yeTogY29tbW9uXG4qL1xuXG4vKipcbiAqIEBwYXJhbSB7SExKU0FwaX0gaGxqc1xuICogQHJldHVybnMge0xhbmd1YWdlRGV0YWlsfVxuICogKi9cbmZ1bmN0aW9uIHBocChobGpzKSB7XG4gIGNvbnN0IFZBUklBQkxFID0ge1xuICAgIGNsYXNzTmFtZTogJ3ZhcmlhYmxlJyxcbiAgICBiZWdpbjogJ1xcXFwkK1thLXpBLVpfXFx4N2YtXFx4ZmZdW2EtekEtWjAtOV9cXHg3Zi1cXHhmZl0qJyArXG4gICAgICAvLyBuZWdhdGl2ZSBsb29rLWFoZWFkIHRyaWVzIHRvIGF2b2lkIG1hdGNoaW5nIHBhdHRlcm5zIHRoYXQgYXJlIG5vdFxuICAgICAgLy8gUGVybCBhdCBhbGwgbGlrZSAkaWRlbnQkLCBAaWRlbnRALCBldGMuXG4gICAgICBgKD8hW0EtWmEtejAtOV0pKD8hWyRdKWBcbiAgfTtcbiAgY29uc3QgUFJFUFJPQ0VTU09SID0ge1xuICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgIHZhcmlhbnRzOiBbXG4gICAgICB7IGJlZ2luOiAvPFxcP3BocC8sIHJlbGV2YW5jZTogMTAgfSwgLy8gYm9vc3QgZm9yIG9idmlvdXMgUEhQXG4gICAgICB7IGJlZ2luOiAvPFxcP1s9XT8vIH0sXG4gICAgICB7IGJlZ2luOiAvXFw/Pi8gfSAvLyBlbmQgcGhwIHRhZ1xuICAgIF1cbiAgfTtcbiAgY29uc3QgU1VCU1QgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3Vic3QnLFxuICAgIHZhcmlhbnRzOiBbXG4gICAgICB7IGJlZ2luOiAvXFwkXFx3Ky8gfSxcbiAgICAgIHsgYmVnaW46IC9cXHtcXCQvLCBlbmQ6IC9cXH0vIH1cbiAgICBdXG4gIH07XG4gIGNvbnN0IFNJTkdMRV9RVU9URUQgPSBobGpzLmluaGVyaXQoaGxqcy5BUE9TX1NUUklOR19NT0RFLCB7XG4gICAgaWxsZWdhbDogbnVsbCxcbiAgfSk7XG4gIGNvbnN0IERPVUJMRV9RVU9URUQgPSBobGpzLmluaGVyaXQoaGxqcy5RVU9URV9TVFJJTkdfTU9ERSwge1xuICAgIGlsbGVnYWw6IG51bGwsXG4gICAgY29udGFpbnM6IGhsanMuUVVPVEVfU1RSSU5HX01PREUuY29udGFpbnMuY29uY2F0KFNVQlNUKSxcbiAgfSk7XG4gIGNvbnN0IEhFUkVET0MgPSBobGpzLkVORF9TQU1FX0FTX0JFR0lOKHtcbiAgICBiZWdpbjogLzw8PFsgXFx0XSooXFx3KylcXG4vLFxuICAgIGVuZDogL1sgXFx0XSooXFx3KylcXGIvLFxuICAgIGNvbnRhaW5zOiBobGpzLlFVT1RFX1NUUklOR19NT0RFLmNvbnRhaW5zLmNvbmNhdChTVUJTVCksXG4gIH0pO1xuICBjb25zdCBTVFJJTkcgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICBjb250YWluczogW2hsanMuQkFDS1NMQVNIX0VTQ0FQRSwgUFJFUFJPQ0VTU09SXSxcbiAgICB2YXJpYW50czogW1xuICAgICAgaGxqcy5pbmhlcml0KFNJTkdMRV9RVU9URUQsIHtcbiAgICAgICAgYmVnaW46IFwiYidcIiwgZW5kOiBcIidcIixcbiAgICAgIH0pLFxuICAgICAgaGxqcy5pbmhlcml0KERPVUJMRV9RVU9URUQsIHtcbiAgICAgICAgYmVnaW46ICdiXCInLCBlbmQ6ICdcIicsXG4gICAgICB9KSxcbiAgICAgIERPVUJMRV9RVU9URUQsXG4gICAgICBTSU5HTEVfUVVPVEVELFxuICAgICAgSEVSRURPQ1xuICAgIF1cbiAgfTtcbiAgY29uc3QgTlVNQkVSID0ge3ZhcmlhbnRzOiBbaGxqcy5CSU5BUllfTlVNQkVSX01PREUsIGhsanMuQ19OVU1CRVJfTU9ERV19O1xuICBjb25zdCBLRVlXT1JEUyA9IHtcbiAgICBrZXl3b3JkOlxuICAgIC8vIE1hZ2ljIGNvbnN0YW50czpcbiAgICAvLyA8aHR0cHM6Ly93d3cucGhwLm5ldC9tYW51YWwvZW4vbGFuZ3VhZ2UuY29uc3RhbnRzLnByZWRlZmluZWQucGhwPlxuICAgICdfX0NMQVNTX18gX19ESVJfXyBfX0ZJTEVfXyBfX0ZVTkNUSU9OX18gX19MSU5FX18gX19NRVRIT0RfXyBfX05BTUVTUEFDRV9fIF9fVFJBSVRfXyAnICtcbiAgICAvLyBGdW5jdGlvbiB0aGF0IGxvb2sgbGlrZSBsYW5ndWFnZSBjb25zdHJ1Y3Qgb3IgbGFuZ3VhZ2UgY29uc3RydWN0IHRoYXQgbG9vayBsaWtlIGZ1bmN0aW9uOlxuICAgIC8vIExpc3Qgb2Yga2V5d29yZHMgdGhhdCBtYXkgbm90IHJlcXVpcmUgcGFyZW50aGVzaXNcbiAgICAnZGllIGVjaG8gZXhpdCBpbmNsdWRlIGluY2x1ZGVfb25jZSBwcmludCByZXF1aXJlIHJlcXVpcmVfb25jZSAnICtcbiAgICAvLyBUaGVzZSBhcmUgbm90IGxhbmd1YWdlIGNvbnN0cnVjdCAoZnVuY3Rpb24pIGJ1dCBvcGVyYXRlIG9uIHRoZSBjdXJyZW50bHktZXhlY3V0aW5nIGZ1bmN0aW9uIGFuZCBjYW4gYWNjZXNzIHRoZSBjdXJyZW50IHN5bWJvbCB0YWJsZVxuICAgIC8vICdjb21wYWN0IGV4dHJhY3QgZnVuY19nZXRfYXJnIGZ1bmNfZ2V0X2FyZ3MgZnVuY19udW1fYXJncyBnZXRfY2FsbGVkX2NsYXNzIGdldF9wYXJlbnRfY2xhc3MgJyArXG4gICAgLy8gT3RoZXIga2V5d29yZHM6XG4gICAgLy8gPGh0dHBzOi8vd3d3LnBocC5uZXQvbWFudWFsL2VuL3Jlc2VydmVkLnBocD5cbiAgICAvLyA8aHR0cHM6Ly93d3cucGhwLm5ldC9tYW51YWwvZW4vbGFuZ3VhZ2UudHlwZXMudHlwZS1qdWdnbGluZy5waHA+XG4gICAgJ2FycmF5IGFic3RyYWN0IGFuZCBhcyBiaW5hcnkgYm9vbCBib29sZWFuIGJyZWFrIGNhbGxhYmxlIGNhc2UgY2F0Y2ggY2xhc3MgY2xvbmUgY29uc3QgY29udGludWUgZGVjbGFyZSAnICtcbiAgICAnZGVmYXVsdCBkbyBkb3VibGUgZWxzZSBlbHNlaWYgZW1wdHkgZW5kZGVjbGFyZSBlbmRmb3IgZW5kZm9yZWFjaCBlbmRpZiBlbmRzd2l0Y2ggZW5kd2hpbGUgZXZhbCBleHRlbmRzICcgK1xuICAgICdmaW5hbCBmaW5hbGx5IGZsb2F0IGZvciBmb3JlYWNoIGZyb20gZ2xvYmFsIGdvdG8gaWYgaW1wbGVtZW50cyBpbnN0YW5jZW9mIGluc3RlYWRvZiBpbnQgaW50ZWdlciBpbnRlcmZhY2UgJyArXG4gICAgJ2lzc2V0IGl0ZXJhYmxlIGxpc3QgbWF0Y2h8MCBuZXcgb2JqZWN0IG9yIHByaXZhdGUgcHJvdGVjdGVkIHB1YmxpYyByZWFsIHJldHVybiBzdHJpbmcgc3dpdGNoIHRocm93IHRyYWl0ICcgK1xuICAgICd0cnkgdW5zZXQgdXNlIHZhciB2b2lkIHdoaWxlIHhvciB5aWVsZCcsXG4gICAgbGl0ZXJhbDogJ2ZhbHNlIG51bGwgdHJ1ZScsXG4gICAgYnVpbHRfaW46XG4gICAgLy8gU3RhbmRhcmQgUEhQIGxpYnJhcnk6XG4gICAgLy8gPGh0dHBzOi8vd3d3LnBocC5uZXQvbWFudWFsL2VuL2Jvb2suc3BsLnBocD5cbiAgICAnRXJyb3J8MCAnICsgLy8gZXJyb3IgaXMgdG9vIGNvbW1vbiBhIG5hbWUgZXNwIHNpbmNlIFBIUCBpcyBjYXNlIGluLXNlbnNpdGl2ZVxuICAgICdBcHBlbmRJdGVyYXRvciBBcmd1bWVudENvdW50RXJyb3IgQXJpdGhtZXRpY0Vycm9yIEFycmF5SXRlcmF0b3IgQXJyYXlPYmplY3QgQXNzZXJ0aW9uRXJyb3IgQmFkRnVuY3Rpb25DYWxsRXhjZXB0aW9uIEJhZE1ldGhvZENhbGxFeGNlcHRpb24gQ2FjaGluZ0l0ZXJhdG9yIENhbGxiYWNrRmlsdGVySXRlcmF0b3IgQ29tcGlsZUVycm9yIENvdW50YWJsZSBEaXJlY3RvcnlJdGVyYXRvciBEaXZpc2lvbkJ5WmVyb0Vycm9yIERvbWFpbkV4Y2VwdGlvbiBFbXB0eUl0ZXJhdG9yIEVycm9yRXhjZXB0aW9uIEV4Y2VwdGlvbiBGaWxlc3lzdGVtSXRlcmF0b3IgRmlsdGVySXRlcmF0b3IgR2xvYkl0ZXJhdG9yIEluZmluaXRlSXRlcmF0b3IgSW52YWxpZEFyZ3VtZW50RXhjZXB0aW9uIEl0ZXJhdG9ySXRlcmF0b3IgTGVuZ3RoRXhjZXB0aW9uIExpbWl0SXRlcmF0b3IgTG9naWNFeGNlcHRpb24gTXVsdGlwbGVJdGVyYXRvciBOb1Jld2luZEl0ZXJhdG9yIE91dE9mQm91bmRzRXhjZXB0aW9uIE91dE9mUmFuZ2VFeGNlcHRpb24gT3V0ZXJJdGVyYXRvciBPdmVyZmxvd0V4Y2VwdGlvbiBQYXJlbnRJdGVyYXRvciBQYXJzZUVycm9yIFJhbmdlRXhjZXB0aW9uIFJlY3Vyc2l2ZUFycmF5SXRlcmF0b3IgUmVjdXJzaXZlQ2FjaGluZ0l0ZXJhdG9yIFJlY3Vyc2l2ZUNhbGxiYWNrRmlsdGVySXRlcmF0b3IgUmVjdXJzaXZlRGlyZWN0b3J5SXRlcmF0b3IgUmVjdXJzaXZlRmlsdGVySXRlcmF0b3IgUmVjdXJzaXZlSXRlcmF0b3IgUmVjdXJzaXZlSXRlcmF0b3JJdGVyYXRvciBSZWN1cnNpdmVSZWdleEl0ZXJhdG9yIFJlY3Vyc2l2ZVRyZWVJdGVyYXRvciBSZWdleEl0ZXJhdG9yIFJ1bnRpbWVFeGNlcHRpb24gU2Vla2FibGVJdGVyYXRvciBTcGxEb3VibHlMaW5rZWRMaXN0IFNwbEZpbGVJbmZvIFNwbEZpbGVPYmplY3QgU3BsRml4ZWRBcnJheSBTcGxIZWFwIFNwbE1heEhlYXAgU3BsTWluSGVhcCBTcGxPYmplY3RTdG9yYWdlIFNwbE9ic2VydmVyIFNwbE9ic2VydmVyIFNwbFByaW9yaXR5UXVldWUgU3BsUXVldWUgU3BsU3RhY2sgU3BsU3ViamVjdCBTcGxTdWJqZWN0IFNwbFRlbXBGaWxlT2JqZWN0IFR5cGVFcnJvciBVbmRlcmZsb3dFeGNlcHRpb24gVW5leHBlY3RlZFZhbHVlRXhjZXB0aW9uICcgK1xuICAgIC8vIFJlc2VydmVkIGludGVyZmFjZXM6XG4gICAgLy8gPGh0dHBzOi8vd3d3LnBocC5uZXQvbWFudWFsL2VuL3Jlc2VydmVkLmludGVyZmFjZXMucGhwPlxuICAgICdBcnJheUFjY2VzcyBDbG9zdXJlIEdlbmVyYXRvciBJdGVyYXRvciBJdGVyYXRvckFnZ3JlZ2F0ZSBTZXJpYWxpemFibGUgVGhyb3dhYmxlIFRyYXZlcnNhYmxlIFdlYWtSZWZlcmVuY2UgJyArXG4gICAgLy8gUmVzZXJ2ZWQgY2xhc3NlczpcbiAgICAvLyA8aHR0cHM6Ly93d3cucGhwLm5ldC9tYW51YWwvZW4vcmVzZXJ2ZWQuY2xhc3Nlcy5waHA+XG4gICAgJ0RpcmVjdG9yeSBfX1BIUF9JbmNvbXBsZXRlX0NsYXNzIHBhcmVudCBwaHBfdXNlcl9maWx0ZXIgc2VsZiBzdGF0aWMgc3RkQ2xhc3MnXG4gIH07XG4gIHJldHVybiB7XG4gICAgYWxpYXNlczogWydwaHAnLCAncGhwMycsICdwaHA0JywgJ3BocDUnLCAncGhwNicsICdwaHA3JywgJ3BocDgnXSxcbiAgICBjYXNlX2luc2Vuc2l0aXZlOiB0cnVlLFxuICAgIGtleXdvcmRzOiBLRVlXT1JEUyxcbiAgICBjb250YWluczogW1xuICAgICAgaGxqcy5IQVNIX0NPTU1FTlRfTU9ERSxcbiAgICAgIGhsanMuQ09NTUVOVCgnLy8nLCAnJCcsIHtjb250YWluczogW1BSRVBST0NFU1NPUl19KSxcbiAgICAgIGhsanMuQ09NTUVOVChcbiAgICAgICAgJy9cXFxcKicsXG4gICAgICAgICdcXFxcKi8nLFxuICAgICAgICB7XG4gICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnZG9jdGFnJyxcbiAgICAgICAgICAgICAgYmVnaW46ICdAW0EtWmEtel0rJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgKSxcbiAgICAgIGhsanMuQ09NTUVOVChcbiAgICAgICAgJ19faGFsdF9jb21waWxlci4rPzsnLFxuICAgICAgICBmYWxzZSxcbiAgICAgICAge1xuICAgICAgICAgIGVuZHNXaXRoUGFyZW50OiB0cnVlLFxuICAgICAgICAgIGtleXdvcmRzOiAnX19oYWx0X2NvbXBpbGVyJ1xuICAgICAgICB9XG4gICAgICApLFxuICAgICAgUFJFUFJPQ0VTU09SLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdrZXl3b3JkJywgYmVnaW46IC9cXCR0aGlzXFxiL1xuICAgICAgfSxcbiAgICAgIFZBUklBQkxFLFxuICAgICAge1xuICAgICAgICAvLyBzd2FsbG93IGNvbXBvc2VkIGlkZW50aWZpZXJzIHRvIGF2b2lkIHBhcnNpbmcgdGhlbSBhcyBrZXl3b3Jkc1xuICAgICAgICBiZWdpbjogLyg6OnwtPikrW2EtekEtWl9cXHg3Zi1cXHhmZl1bYS16QS1aMC05X1xceDdmLVxceGZmXSovXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdmdW5jdGlvbicsXG4gICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgYmVnaW5LZXl3b3JkczogJ2ZuIGZ1bmN0aW9uJywgZW5kOiAvWzt7XS8sIGV4Y2x1ZGVFbmQ6IHRydWUsXG4gICAgICAgIGlsbGVnYWw6ICdbJCVcXFxcW10nLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIGhsanMuVU5ERVJTQ09SRV9USVRMRV9NT0RFLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luOiAnPT4nIC8vIE5vIG1hcmt1cCwganVzdCBhIHJlbGV2YW5jZSBib29zdGVyXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdwYXJhbXMnLFxuICAgICAgICAgICAgYmVnaW46ICdcXFxcKCcsIGVuZDogJ1xcXFwpJyxcbiAgICAgICAgICAgIGV4Y2x1ZGVCZWdpbjogdHJ1ZSxcbiAgICAgICAgICAgIGV4Y2x1ZGVFbmQ6IHRydWUsXG4gICAgICAgICAgICBrZXl3b3JkczogS0VZV09SRFMsXG4gICAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgICAnc2VsZicsXG4gICAgICAgICAgICAgIFZBUklBQkxFLFxuICAgICAgICAgICAgICBobGpzLkNfQkxPQ0tfQ09NTUVOVF9NT0RFLFxuICAgICAgICAgICAgICBTVFJJTkcsXG4gICAgICAgICAgICAgIE5VTUJFUlxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnY2xhc3MnLFxuICAgICAgICBiZWdpbktleXdvcmRzOiAnY2xhc3MgaW50ZXJmYWNlJyxcbiAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICBlbmQ6IC9cXHsvLFxuICAgICAgICBleGNsdWRlRW5kOiB0cnVlLFxuICAgICAgICBpbGxlZ2FsOiAvWzooJFwiXS8sXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAge2JlZ2luS2V5d29yZHM6ICdleHRlbmRzIGltcGxlbWVudHMnfSxcbiAgICAgICAgICBobGpzLlVOREVSU0NPUkVfVElUTEVfTU9ERVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbktleXdvcmRzOiAnbmFtZXNwYWNlJyxcbiAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICBlbmQ6ICc7JyxcbiAgICAgICAgaWxsZWdhbDogL1suJ10vLFxuICAgICAgICBjb250YWluczogW2hsanMuVU5ERVJTQ09SRV9USVRMRV9NT0RFXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW5LZXl3b3JkczogJ3VzZScsXG4gICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgZW5kOiAnOycsXG4gICAgICAgIGNvbnRhaW5zOiBbaGxqcy5VTkRFUlNDT1JFX1RJVExFX01PREVdXG4gICAgICB9LFxuICAgICAgU1RSSU5HLFxuICAgICAgTlVNQkVSXG4gICAgXVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHBocDtcbiJdLCJzb3VyY2VSb290IjoiIn0=