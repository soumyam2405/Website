exports.ids = [125];
exports.modules = {

/***/ "./node_modules/highlight.js/lib/languages/perl.js":
/*!*********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/perl.js ***!
  \*********************************************************/
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

/*
Language: Perl
Author: Peter Leonov <gojpeg@yandex.ru>
Website: https://www.perl.org
Category: common
*/

/** @type LanguageFn */
function perl(hljs) {
  const KEYWORDS = [
    'abs',
    'accept',
    'alarm',
    'and',
    'atan2',
    'bind',
    'binmode',
    'bless',
    'break',
    'caller',
    'chdir',
    'chmod',
    'chomp',
    'chop',
    'chown',
    'chr',
    'chroot',
    'close',
    'closedir',
    'connect',
    'continue',
    'cos',
    'crypt',
    'dbmclose',
    'dbmopen',
    'defined',
    'delete',
    'die',
    'do',
    'dump',
    'each',
    'else',
    'elsif',
    'endgrent',
    'endhostent',
    'endnetent',
    'endprotoent',
    'endpwent',
    'endservent',
    'eof',
    'eval',
    'exec',
    'exists',
    'exit',
    'exp',
    'fcntl',
    'fileno',
    'flock',
    'for',
    'foreach',
    'fork',
    'format',
    'formline',
    'getc',
    'getgrent',
    'getgrgid',
    'getgrnam',
    'gethostbyaddr',
    'gethostbyname',
    'gethostent',
    'getlogin',
    'getnetbyaddr',
    'getnetbyname',
    'getnetent',
    'getpeername',
    'getpgrp',
    'getpriority',
    'getprotobyname',
    'getprotobynumber',
    'getprotoent',
    'getpwent',
    'getpwnam',
    'getpwuid',
    'getservbyname',
    'getservbyport',
    'getservent',
    'getsockname',
    'getsockopt',
    'given',
    'glob',
    'gmtime',
    'goto',
    'grep',
    'gt',
    'hex',
    'if',
    'index',
    'int',
    'ioctl',
    'join',
    'keys',
    'kill',
    'last',
    'lc',
    'lcfirst',
    'length',
    'link',
    'listen',
    'local',
    'localtime',
    'log',
    'lstat',
    'lt',
    'ma',
    'map',
    'mkdir',
    'msgctl',
    'msgget',
    'msgrcv',
    'msgsnd',
    'my',
    'ne',
    'next',
    'no',
    'not',
    'oct',
    'open',
    'opendir',
    'or',
    'ord',
    'our',
    'pack',
    'package',
    'pipe',
    'pop',
    'pos',
    'print',
    'printf',
    'prototype',
    'push',
    'q|0',
    'qq',
    'quotemeta',
    'qw',
    'qx',
    'rand',
    'read',
    'readdir',
    'readline',
    'readlink',
    'readpipe',
    'recv',
    'redo',
    'ref',
    'rename',
    'require',
    'reset',
    'return',
    'reverse',
    'rewinddir',
    'rindex',
    'rmdir',
    'say',
    'scalar',
    'seek',
    'seekdir',
    'select',
    'semctl',
    'semget',
    'semop',
    'send',
    'setgrent',
    'sethostent',
    'setnetent',
    'setpgrp',
    'setpriority',
    'setprotoent',
    'setpwent',
    'setservent',
    'setsockopt',
    'shift',
    'shmctl',
    'shmget',
    'shmread',
    'shmwrite',
    'shutdown',
    'sin',
    'sleep',
    'socket',
    'socketpair',
    'sort',
    'splice',
    'split',
    'sprintf',
    'sqrt',
    'srand',
    'stat',
    'state',
    'study',
    'sub',
    'substr',
    'symlink',
    'syscall',
    'sysopen',
    'sysread',
    'sysseek',
    'system',
    'syswrite',
    'tell',
    'telldir',
    'tie',
    'tied',
    'time',
    'times',
    'tr',
    'truncate',
    'uc',
    'ucfirst',
    'umask',
    'undef',
    'unless',
    'unlink',
    'unpack',
    'unshift',
    'untie',
    'until',
    'use',
    'utime',
    'values',
    'vec',
    'wait',
    'waitpid',
    'wantarray',
    'warn',
    'when',
    'while',
    'write',
    'x|0',
    'xor',
    'y|0'
  ];

  // https://perldoc.perl.org/perlre#Modifiers
  const REGEX_MODIFIERS = /[dualxmsipngr]{0,12}/; // aa and xx are valid, making max length 12
  const PERL_KEYWORDS = {
    $pattern: /[\w.]+/,
    keyword: KEYWORDS.join(" ")
  };
  const SUBST = {
    className: 'subst',
    begin: '[$@]\\{',
    end: '\\}',
    keywords: PERL_KEYWORDS
  };
  const METHOD = {
    begin: /->\{/,
    end: /\}/
    // contains defined later
  };
  const VAR = {
    variants: [
      {
        begin: /\$\d/
      },
      {
        begin: concat(
          /[$%@](\^\w\b|#\w+(::\w+)*|\{\w+\}|\w+(::\w*)*)/,
          // negative look-ahead tries to avoid matching patterns that are not
          // Perl at all like $ident$, @ident@, etc.
          `(?![A-Za-z])(?![@$%])`
        )
      },
      {
        begin: /[$%@][^\s\w{]/,
        relevance: 0
      }
    ]
  };
  const STRING_CONTAINS = [
    hljs.BACKSLASH_ESCAPE,
    SUBST,
    VAR
  ];
  const REGEX_DELIMS = [
    /!/,
    /\//,
    /\|/,
    /\?/,
    /'/,
    /"/, // valid but infrequent and weird
    /#/ // valid but infrequent and weird
  ];
  /**
   * @param {string|RegExp} prefix
   * @param {string|RegExp} open
   * @param {string|RegExp} close
   */
  const PAIRED_DOUBLE_RE = (prefix, open, close = '\\1') => {
    const middle = (close === '\\1')
      ? close
      : concat(close, open);
    return concat(
      concat("(?:", prefix, ")"),
      open,
      /(?:\\.|[^\\\/])*?/,
      middle,
      /(?:\\.|[^\\\/])*?/,
      close,
      REGEX_MODIFIERS
    );
  };
  /**
   * @param {string|RegExp} prefix
   * @param {string|RegExp} open
   * @param {string|RegExp} close
   */
  const PAIRED_RE = (prefix, open, close) => {
    return concat(
      concat("(?:", prefix, ")"),
      open,
      /(?:\\.|[^\\\/])*?/,
      close,
      REGEX_MODIFIERS
    );
  };
  const PERL_DEFAULT_CONTAINS = [
    VAR,
    hljs.HASH_COMMENT_MODE,
    hljs.COMMENT(
      /^=\w/,
      /=cut/,
      {
        endsWithParent: true
      }
    ),
    METHOD,
    {
      className: 'string',
      contains: STRING_CONTAINS,
      variants: [
        {
          begin: 'q[qwxr]?\\s*\\(',
          end: '\\)',
          relevance: 5
        },
        {
          begin: 'q[qwxr]?\\s*\\[',
          end: '\\]',
          relevance: 5
        },
        {
          begin: 'q[qwxr]?\\s*\\{',
          end: '\\}',
          relevance: 5
        },
        {
          begin: 'q[qwxr]?\\s*\\|',
          end: '\\|',
          relevance: 5
        },
        {
          begin: 'q[qwxr]?\\s*<',
          end: '>',
          relevance: 5
        },
        {
          begin: 'qw\\s+q',
          end: 'q',
          relevance: 5
        },
        {
          begin: '\'',
          end: '\'',
          contains: [ hljs.BACKSLASH_ESCAPE ]
        },
        {
          begin: '"',
          end: '"'
        },
        {
          begin: '`',
          end: '`',
          contains: [ hljs.BACKSLASH_ESCAPE ]
        },
        {
          begin: /\{\w+\}/,
          relevance: 0
        },
        {
          begin: '-?\\w+\\s*=>',
          relevance: 0
        }
      ]
    },
    {
      className: 'number',
      begin: '(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b',
      relevance: 0
    },
    { // regexp container
      begin: '(\\/\\/|' + hljs.RE_STARTERS_RE + '|\\b(split|return|print|reverse|grep)\\b)\\s*',
      keywords: 'split return print reverse grep',
      relevance: 0,
      contains: [
        hljs.HASH_COMMENT_MODE,
        {
          className: 'regexp',
          variants: [
            // allow matching common delimiters
            { begin: PAIRED_DOUBLE_RE("s|tr|y", either(...REGEX_DELIMS)) },
            // and then paired delmis
            { begin: PAIRED_DOUBLE_RE("s|tr|y", "\\(", "\\)") },
            { begin: PAIRED_DOUBLE_RE("s|tr|y", "\\[", "\\]") },
            { begin: PAIRED_DOUBLE_RE("s|tr|y", "\\{", "\\}") }
          ],
          relevance: 2
        },
        {
          className: 'regexp',
          variants: [
            {
              // could be a comment in many languages so do not count
              // as relevant
              begin: /(m|qr)\/\//,
              relevance: 0
            },
            // prefix is optional with /regex/
            { begin: PAIRED_RE("(?:m|qr)?", /\//, /\//)},
            // allow matching common delimiters
            { begin: PAIRED_RE("m|qr", either(...REGEX_DELIMS), /\1/)},
            // allow common paired delmins
            { begin: PAIRED_RE("m|qr", /\(/, /\)/)},
            { begin: PAIRED_RE("m|qr", /\[/, /\]/)},
            { begin: PAIRED_RE("m|qr", /\{/, /\}/)}
          ]
        }
      ]
    },
    {
      className: 'function',
      beginKeywords: 'sub',
      end: '(\\s*\\(.*?\\))?[;{]',
      excludeEnd: true,
      relevance: 5,
      contains: [ hljs.TITLE_MODE ]
    },
    {
      begin: '-\\w\\b',
      relevance: 0
    },
    {
      begin: "^__DATA__$",
      end: "^__END__$",
      subLanguage: 'mojolicious',
      contains: [
        {
          begin: "^@@.*",
          end: "$",
          className: "comment"
        }
      ]
    }
  ];
  SUBST.contains = PERL_DEFAULT_CONTAINS;
  METHOD.contains = PERL_DEFAULT_CONTAINS;

  return {
    name: 'Perl',
    aliases: [
      'pl',
      'pm'
    ],
    keywords: PERL_KEYWORDS,
    contains: PERL_DEFAULT_CONTAINS
  };
}

module.exports = perl;


/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvcGVybC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYTtBQUNiOztBQUVBO0FBQ0EsV0FBVyxpQkFBaUI7QUFDNUIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLHNCQUFzQjtBQUNqQyxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcscUJBQXFCO0FBQ2hDLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QXVDLE9BQU87QUFDM0Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsYUFBYSwyQ0FBMkM7QUFDeEQ7QUFDQSxhQUFhLHlEQUF5RDtBQUN0RTtBQUNBLGFBQWEsc0NBQXNDO0FBQ25ELGFBQWEsc0NBQXNDO0FBQ25ELGFBQWEsNkJBQTZCLE1BQU07QUFDaEQ7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiIxMjUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHJldHVybnMge1JlZ0V4cH1cbiAqICovXG5cbi8qKlxuICogQHBhcmFtIHtSZWdFeHAgfCBzdHJpbmcgfSByZVxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gc291cmNlKHJlKSB7XG4gIGlmICghcmUpIHJldHVybiBudWxsO1xuICBpZiAodHlwZW9mIHJlID09PSBcInN0cmluZ1wiKSByZXR1cm4gcmU7XG5cbiAgcmV0dXJuIHJlLnNvdXJjZTtcbn1cblxuLyoqXG4gKiBAcGFyYW0gey4uLihSZWdFeHAgfCBzdHJpbmcpIH0gYXJnc1xuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gY29uY2F0KC4uLmFyZ3MpIHtcbiAgY29uc3Qgam9pbmVkID0gYXJncy5tYXAoKHgpID0+IHNvdXJjZSh4KSkuam9pbihcIlwiKTtcbiAgcmV0dXJuIGpvaW5lZDtcbn1cblxuLyoqXG4gKiBBbnkgb2YgdGhlIHBhc3NlZCBleHByZXNzc2lvbnMgbWF5IG1hdGNoXG4gKlxuICogQ3JlYXRlcyBhIGh1Z2UgdGhpcyB8IHRoaXMgfCB0aGF0IHwgdGhhdCBtYXRjaFxuICogQHBhcmFtIHsoUmVnRXhwIHwgc3RyaW5nKVtdIH0gYXJnc1xuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZWl0aGVyKC4uLmFyZ3MpIHtcbiAgY29uc3Qgam9pbmVkID0gJygnICsgYXJncy5tYXAoKHgpID0+IHNvdXJjZSh4KSkuam9pbihcInxcIikgKyBcIilcIjtcbiAgcmV0dXJuIGpvaW5lZDtcbn1cblxuLypcbkxhbmd1YWdlOiBQZXJsXG5BdXRob3I6IFBldGVyIExlb25vdiA8Z29qcGVnQHlhbmRleC5ydT5cbldlYnNpdGU6IGh0dHBzOi8vd3d3LnBlcmwub3JnXG5DYXRlZ29yeTogY29tbW9uXG4qL1xuXG4vKiogQHR5cGUgTGFuZ3VhZ2VGbiAqL1xuZnVuY3Rpb24gcGVybChobGpzKSB7XG4gIGNvbnN0IEtFWVdPUkRTID0gW1xuICAgICdhYnMnLFxuICAgICdhY2NlcHQnLFxuICAgICdhbGFybScsXG4gICAgJ2FuZCcsXG4gICAgJ2F0YW4yJyxcbiAgICAnYmluZCcsXG4gICAgJ2Jpbm1vZGUnLFxuICAgICdibGVzcycsXG4gICAgJ2JyZWFrJyxcbiAgICAnY2FsbGVyJyxcbiAgICAnY2hkaXInLFxuICAgICdjaG1vZCcsXG4gICAgJ2Nob21wJyxcbiAgICAnY2hvcCcsXG4gICAgJ2Nob3duJyxcbiAgICAnY2hyJyxcbiAgICAnY2hyb290JyxcbiAgICAnY2xvc2UnLFxuICAgICdjbG9zZWRpcicsXG4gICAgJ2Nvbm5lY3QnLFxuICAgICdjb250aW51ZScsXG4gICAgJ2NvcycsXG4gICAgJ2NyeXB0JyxcbiAgICAnZGJtY2xvc2UnLFxuICAgICdkYm1vcGVuJyxcbiAgICAnZGVmaW5lZCcsXG4gICAgJ2RlbGV0ZScsXG4gICAgJ2RpZScsXG4gICAgJ2RvJyxcbiAgICAnZHVtcCcsXG4gICAgJ2VhY2gnLFxuICAgICdlbHNlJyxcbiAgICAnZWxzaWYnLFxuICAgICdlbmRncmVudCcsXG4gICAgJ2VuZGhvc3RlbnQnLFxuICAgICdlbmRuZXRlbnQnLFxuICAgICdlbmRwcm90b2VudCcsXG4gICAgJ2VuZHB3ZW50JyxcbiAgICAnZW5kc2VydmVudCcsXG4gICAgJ2VvZicsXG4gICAgJ2V2YWwnLFxuICAgICdleGVjJyxcbiAgICAnZXhpc3RzJyxcbiAgICAnZXhpdCcsXG4gICAgJ2V4cCcsXG4gICAgJ2ZjbnRsJyxcbiAgICAnZmlsZW5vJyxcbiAgICAnZmxvY2snLFxuICAgICdmb3InLFxuICAgICdmb3JlYWNoJyxcbiAgICAnZm9yaycsXG4gICAgJ2Zvcm1hdCcsXG4gICAgJ2Zvcm1saW5lJyxcbiAgICAnZ2V0YycsXG4gICAgJ2dldGdyZW50JyxcbiAgICAnZ2V0Z3JnaWQnLFxuICAgICdnZXRncm5hbScsXG4gICAgJ2dldGhvc3RieWFkZHInLFxuICAgICdnZXRob3N0YnluYW1lJyxcbiAgICAnZ2V0aG9zdGVudCcsXG4gICAgJ2dldGxvZ2luJyxcbiAgICAnZ2V0bmV0YnlhZGRyJyxcbiAgICAnZ2V0bmV0YnluYW1lJyxcbiAgICAnZ2V0bmV0ZW50JyxcbiAgICAnZ2V0cGVlcm5hbWUnLFxuICAgICdnZXRwZ3JwJyxcbiAgICAnZ2V0cHJpb3JpdHknLFxuICAgICdnZXRwcm90b2J5bmFtZScsXG4gICAgJ2dldHByb3RvYnludW1iZXInLFxuICAgICdnZXRwcm90b2VudCcsXG4gICAgJ2dldHB3ZW50JyxcbiAgICAnZ2V0cHduYW0nLFxuICAgICdnZXRwd3VpZCcsXG4gICAgJ2dldHNlcnZieW5hbWUnLFxuICAgICdnZXRzZXJ2Ynlwb3J0JyxcbiAgICAnZ2V0c2VydmVudCcsXG4gICAgJ2dldHNvY2tuYW1lJyxcbiAgICAnZ2V0c29ja29wdCcsXG4gICAgJ2dpdmVuJyxcbiAgICAnZ2xvYicsXG4gICAgJ2dtdGltZScsXG4gICAgJ2dvdG8nLFxuICAgICdncmVwJyxcbiAgICAnZ3QnLFxuICAgICdoZXgnLFxuICAgICdpZicsXG4gICAgJ2luZGV4JyxcbiAgICAnaW50JyxcbiAgICAnaW9jdGwnLFxuICAgICdqb2luJyxcbiAgICAna2V5cycsXG4gICAgJ2tpbGwnLFxuICAgICdsYXN0JyxcbiAgICAnbGMnLFxuICAgICdsY2ZpcnN0JyxcbiAgICAnbGVuZ3RoJyxcbiAgICAnbGluaycsXG4gICAgJ2xpc3RlbicsXG4gICAgJ2xvY2FsJyxcbiAgICAnbG9jYWx0aW1lJyxcbiAgICAnbG9nJyxcbiAgICAnbHN0YXQnLFxuICAgICdsdCcsXG4gICAgJ21hJyxcbiAgICAnbWFwJyxcbiAgICAnbWtkaXInLFxuICAgICdtc2djdGwnLFxuICAgICdtc2dnZXQnLFxuICAgICdtc2dyY3YnLFxuICAgICdtc2dzbmQnLFxuICAgICdteScsXG4gICAgJ25lJyxcbiAgICAnbmV4dCcsXG4gICAgJ25vJyxcbiAgICAnbm90JyxcbiAgICAnb2N0JyxcbiAgICAnb3BlbicsXG4gICAgJ29wZW5kaXInLFxuICAgICdvcicsXG4gICAgJ29yZCcsXG4gICAgJ291cicsXG4gICAgJ3BhY2snLFxuICAgICdwYWNrYWdlJyxcbiAgICAncGlwZScsXG4gICAgJ3BvcCcsXG4gICAgJ3BvcycsXG4gICAgJ3ByaW50JyxcbiAgICAncHJpbnRmJyxcbiAgICAncHJvdG90eXBlJyxcbiAgICAncHVzaCcsXG4gICAgJ3F8MCcsXG4gICAgJ3FxJyxcbiAgICAncXVvdGVtZXRhJyxcbiAgICAncXcnLFxuICAgICdxeCcsXG4gICAgJ3JhbmQnLFxuICAgICdyZWFkJyxcbiAgICAncmVhZGRpcicsXG4gICAgJ3JlYWRsaW5lJyxcbiAgICAncmVhZGxpbmsnLFxuICAgICdyZWFkcGlwZScsXG4gICAgJ3JlY3YnLFxuICAgICdyZWRvJyxcbiAgICAncmVmJyxcbiAgICAncmVuYW1lJyxcbiAgICAncmVxdWlyZScsXG4gICAgJ3Jlc2V0JyxcbiAgICAncmV0dXJuJyxcbiAgICAncmV2ZXJzZScsXG4gICAgJ3Jld2luZGRpcicsXG4gICAgJ3JpbmRleCcsXG4gICAgJ3JtZGlyJyxcbiAgICAnc2F5JyxcbiAgICAnc2NhbGFyJyxcbiAgICAnc2VlaycsXG4gICAgJ3NlZWtkaXInLFxuICAgICdzZWxlY3QnLFxuICAgICdzZW1jdGwnLFxuICAgICdzZW1nZXQnLFxuICAgICdzZW1vcCcsXG4gICAgJ3NlbmQnLFxuICAgICdzZXRncmVudCcsXG4gICAgJ3NldGhvc3RlbnQnLFxuICAgICdzZXRuZXRlbnQnLFxuICAgICdzZXRwZ3JwJyxcbiAgICAnc2V0cHJpb3JpdHknLFxuICAgICdzZXRwcm90b2VudCcsXG4gICAgJ3NldHB3ZW50JyxcbiAgICAnc2V0c2VydmVudCcsXG4gICAgJ3NldHNvY2tvcHQnLFxuICAgICdzaGlmdCcsXG4gICAgJ3NobWN0bCcsXG4gICAgJ3NobWdldCcsXG4gICAgJ3NobXJlYWQnLFxuICAgICdzaG13cml0ZScsXG4gICAgJ3NodXRkb3duJyxcbiAgICAnc2luJyxcbiAgICAnc2xlZXAnLFxuICAgICdzb2NrZXQnLFxuICAgICdzb2NrZXRwYWlyJyxcbiAgICAnc29ydCcsXG4gICAgJ3NwbGljZScsXG4gICAgJ3NwbGl0JyxcbiAgICAnc3ByaW50ZicsXG4gICAgJ3NxcnQnLFxuICAgICdzcmFuZCcsXG4gICAgJ3N0YXQnLFxuICAgICdzdGF0ZScsXG4gICAgJ3N0dWR5JyxcbiAgICAnc3ViJyxcbiAgICAnc3Vic3RyJyxcbiAgICAnc3ltbGluaycsXG4gICAgJ3N5c2NhbGwnLFxuICAgICdzeXNvcGVuJyxcbiAgICAnc3lzcmVhZCcsXG4gICAgJ3N5c3NlZWsnLFxuICAgICdzeXN0ZW0nLFxuICAgICdzeXN3cml0ZScsXG4gICAgJ3RlbGwnLFxuICAgICd0ZWxsZGlyJyxcbiAgICAndGllJyxcbiAgICAndGllZCcsXG4gICAgJ3RpbWUnLFxuICAgICd0aW1lcycsXG4gICAgJ3RyJyxcbiAgICAndHJ1bmNhdGUnLFxuICAgICd1YycsXG4gICAgJ3VjZmlyc3QnLFxuICAgICd1bWFzaycsXG4gICAgJ3VuZGVmJyxcbiAgICAndW5sZXNzJyxcbiAgICAndW5saW5rJyxcbiAgICAndW5wYWNrJyxcbiAgICAndW5zaGlmdCcsXG4gICAgJ3VudGllJyxcbiAgICAndW50aWwnLFxuICAgICd1c2UnLFxuICAgICd1dGltZScsXG4gICAgJ3ZhbHVlcycsXG4gICAgJ3ZlYycsXG4gICAgJ3dhaXQnLFxuICAgICd3YWl0cGlkJyxcbiAgICAnd2FudGFycmF5JyxcbiAgICAnd2FybicsXG4gICAgJ3doZW4nLFxuICAgICd3aGlsZScsXG4gICAgJ3dyaXRlJyxcbiAgICAneHwwJyxcbiAgICAneG9yJyxcbiAgICAneXwwJ1xuICBdO1xuXG4gIC8vIGh0dHBzOi8vcGVybGRvYy5wZXJsLm9yZy9wZXJscmUjTW9kaWZpZXJzXG4gIGNvbnN0IFJFR0VYX01PRElGSUVSUyA9IC9bZHVhbHhtc2lwbmdyXXswLDEyfS87IC8vIGFhIGFuZCB4eCBhcmUgdmFsaWQsIG1ha2luZyBtYXggbGVuZ3RoIDEyXG4gIGNvbnN0IFBFUkxfS0VZV09SRFMgPSB7XG4gICAgJHBhdHRlcm46IC9bXFx3Ll0rLyxcbiAgICBrZXl3b3JkOiBLRVlXT1JEUy5qb2luKFwiIFwiKVxuICB9O1xuICBjb25zdCBTVUJTVCA9IHtcbiAgICBjbGFzc05hbWU6ICdzdWJzdCcsXG4gICAgYmVnaW46ICdbJEBdXFxcXHsnLFxuICAgIGVuZDogJ1xcXFx9JyxcbiAgICBrZXl3b3JkczogUEVSTF9LRVlXT1JEU1xuICB9O1xuICBjb25zdCBNRVRIT0QgPSB7XG4gICAgYmVnaW46IC8tPlxcey8sXG4gICAgZW5kOiAvXFx9L1xuICAgIC8vIGNvbnRhaW5zIGRlZmluZWQgbGF0ZXJcbiAgfTtcbiAgY29uc3QgVkFSID0ge1xuICAgIHZhcmlhbnRzOiBbXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAvXFwkXFxkL1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IGNvbmNhdChcbiAgICAgICAgICAvWyQlQF0oXFxeXFx3XFxifCNcXHcrKDo6XFx3KykqfFxce1xcdytcXH18XFx3Kyg6OlxcdyopKikvLFxuICAgICAgICAgIC8vIG5lZ2F0aXZlIGxvb2stYWhlYWQgdHJpZXMgdG8gYXZvaWQgbWF0Y2hpbmcgcGF0dGVybnMgdGhhdCBhcmUgbm90XG4gICAgICAgICAgLy8gUGVybCBhdCBhbGwgbGlrZSAkaWRlbnQkLCBAaWRlbnRALCBldGMuXG4gICAgICAgICAgYCg/IVtBLVphLXpdKSg/IVtAJCVdKWBcbiAgICAgICAgKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IC9bJCVAXVteXFxzXFx3e10vLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH1cbiAgICBdXG4gIH07XG4gIGNvbnN0IFNUUklOR19DT05UQUlOUyA9IFtcbiAgICBobGpzLkJBQ0tTTEFTSF9FU0NBUEUsXG4gICAgU1VCU1QsXG4gICAgVkFSXG4gIF07XG4gIGNvbnN0IFJFR0VYX0RFTElNUyA9IFtcbiAgICAvIS8sXG4gICAgL1xcLy8sXG4gICAgL1xcfC8sXG4gICAgL1xcPy8sXG4gICAgLycvLFxuICAgIC9cIi8sIC8vIHZhbGlkIGJ1dCBpbmZyZXF1ZW50IGFuZCB3ZWlyZFxuICAgIC8jLyAvLyB2YWxpZCBidXQgaW5mcmVxdWVudCBhbmQgd2VpcmRcbiAgXTtcbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfFJlZ0V4cH0gcHJlZml4XG4gICAqIEBwYXJhbSB7c3RyaW5nfFJlZ0V4cH0gb3BlblxuICAgKiBAcGFyYW0ge3N0cmluZ3xSZWdFeHB9IGNsb3NlXG4gICAqL1xuICBjb25zdCBQQUlSRURfRE9VQkxFX1JFID0gKHByZWZpeCwgb3BlbiwgY2xvc2UgPSAnXFxcXDEnKSA9PiB7XG4gICAgY29uc3QgbWlkZGxlID0gKGNsb3NlID09PSAnXFxcXDEnKVxuICAgICAgPyBjbG9zZVxuICAgICAgOiBjb25jYXQoY2xvc2UsIG9wZW4pO1xuICAgIHJldHVybiBjb25jYXQoXG4gICAgICBjb25jYXQoXCIoPzpcIiwgcHJlZml4LCBcIilcIiksXG4gICAgICBvcGVuLFxuICAgICAgLyg/OlxcXFwufFteXFxcXFxcL10pKj8vLFxuICAgICAgbWlkZGxlLFxuICAgICAgLyg/OlxcXFwufFteXFxcXFxcL10pKj8vLFxuICAgICAgY2xvc2UsXG4gICAgICBSRUdFWF9NT0RJRklFUlNcbiAgICApO1xuICB9O1xuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd8UmVnRXhwfSBwcmVmaXhcbiAgICogQHBhcmFtIHtzdHJpbmd8UmVnRXhwfSBvcGVuXG4gICAqIEBwYXJhbSB7c3RyaW5nfFJlZ0V4cH0gY2xvc2VcbiAgICovXG4gIGNvbnN0IFBBSVJFRF9SRSA9IChwcmVmaXgsIG9wZW4sIGNsb3NlKSA9PiB7XG4gICAgcmV0dXJuIGNvbmNhdChcbiAgICAgIGNvbmNhdChcIig/OlwiLCBwcmVmaXgsIFwiKVwiKSxcbiAgICAgIG9wZW4sXG4gICAgICAvKD86XFxcXC58W15cXFxcXFwvXSkqPy8sXG4gICAgICBjbG9zZSxcbiAgICAgIFJFR0VYX01PRElGSUVSU1xuICAgICk7XG4gIH07XG4gIGNvbnN0IFBFUkxfREVGQVVMVF9DT05UQUlOUyA9IFtcbiAgICBWQVIsXG4gICAgaGxqcy5IQVNIX0NPTU1FTlRfTU9ERSxcbiAgICBobGpzLkNPTU1FTlQoXG4gICAgICAvXj1cXHcvLFxuICAgICAgLz1jdXQvLFxuICAgICAge1xuICAgICAgICBlbmRzV2l0aFBhcmVudDogdHJ1ZVxuICAgICAgfVxuICAgICksXG4gICAgTUVUSE9ELFxuICAgIHtcbiAgICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgICBjb250YWluczogU1RSSU5HX0NPTlRBSU5TLFxuICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGJlZ2luOiAncVtxd3hyXT9cXFxccypcXFxcKCcsXG4gICAgICAgICAgZW5kOiAnXFxcXCknLFxuICAgICAgICAgIHJlbGV2YW5jZTogNVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgYmVnaW46ICdxW3F3eHJdP1xcXFxzKlxcXFxbJyxcbiAgICAgICAgICBlbmQ6ICdcXFxcXScsXG4gICAgICAgICAgcmVsZXZhbmNlOiA1XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBiZWdpbjogJ3FbcXd4cl0/XFxcXHMqXFxcXHsnLFxuICAgICAgICAgIGVuZDogJ1xcXFx9JyxcbiAgICAgICAgICByZWxldmFuY2U6IDVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGJlZ2luOiAncVtxd3hyXT9cXFxccypcXFxcfCcsXG4gICAgICAgICAgZW5kOiAnXFxcXHwnLFxuICAgICAgICAgIHJlbGV2YW5jZTogNVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgYmVnaW46ICdxW3F3eHJdP1xcXFxzKjwnLFxuICAgICAgICAgIGVuZDogJz4nLFxuICAgICAgICAgIHJlbGV2YW5jZTogNVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgYmVnaW46ICdxd1xcXFxzK3EnLFxuICAgICAgICAgIGVuZDogJ3EnLFxuICAgICAgICAgIHJlbGV2YW5jZTogNVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgYmVnaW46ICdcXCcnLFxuICAgICAgICAgIGVuZDogJ1xcJycsXG4gICAgICAgICAgY29udGFpbnM6IFsgaGxqcy5CQUNLU0xBU0hfRVNDQVBFIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGJlZ2luOiAnXCInLFxuICAgICAgICAgIGVuZDogJ1wiJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgYmVnaW46ICdgJyxcbiAgICAgICAgICBlbmQ6ICdgJyxcbiAgICAgICAgICBjb250YWluczogWyBobGpzLkJBQ0tTTEFTSF9FU0NBUEUgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgYmVnaW46IC9cXHtcXHcrXFx9LyxcbiAgICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGJlZ2luOiAnLT9cXFxcdytcXFxccyo9PicsXG4gICAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgICBiZWdpbjogJyhcXFxcYjBbMC03X10rKXwoXFxcXGIweFswLTlhLWZBLUZfXSspfChcXFxcYlsxLTldWzAtOV9dKihcXFxcLlswLTlfXSspPyl8WzBfXVxcXFxiJyxcbiAgICAgIHJlbGV2YW5jZTogMFxuICAgIH0sXG4gICAgeyAvLyByZWdleHAgY29udGFpbmVyXG4gICAgICBiZWdpbjogJyhcXFxcL1xcXFwvfCcgKyBobGpzLlJFX1NUQVJURVJTX1JFICsgJ3xcXFxcYihzcGxpdHxyZXR1cm58cHJpbnR8cmV2ZXJzZXxncmVwKVxcXFxiKVxcXFxzKicsXG4gICAgICBrZXl3b3JkczogJ3NwbGl0IHJldHVybiBwcmludCByZXZlcnNlIGdyZXAnLFxuICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgaGxqcy5IQVNIX0NPTU1FTlRfTU9ERSxcbiAgICAgICAge1xuICAgICAgICAgIGNsYXNzTmFtZTogJ3JlZ2V4cCcsXG4gICAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICAgIC8vIGFsbG93IG1hdGNoaW5nIGNvbW1vbiBkZWxpbWl0ZXJzXG4gICAgICAgICAgICB7IGJlZ2luOiBQQUlSRURfRE9VQkxFX1JFKFwic3x0cnx5XCIsIGVpdGhlciguLi5SRUdFWF9ERUxJTVMpKSB9LFxuICAgICAgICAgICAgLy8gYW5kIHRoZW4gcGFpcmVkIGRlbG1pc1xuICAgICAgICAgICAgeyBiZWdpbjogUEFJUkVEX0RPVUJMRV9SRShcInN8dHJ8eVwiLCBcIlxcXFwoXCIsIFwiXFxcXClcIikgfSxcbiAgICAgICAgICAgIHsgYmVnaW46IFBBSVJFRF9ET1VCTEVfUkUoXCJzfHRyfHlcIiwgXCJcXFxcW1wiLCBcIlxcXFxdXCIpIH0sXG4gICAgICAgICAgICB7IGJlZ2luOiBQQUlSRURfRE9VQkxFX1JFKFwic3x0cnx5XCIsIFwiXFxcXHtcIiwgXCJcXFxcfVwiKSB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICByZWxldmFuY2U6IDJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGNsYXNzTmFtZTogJ3JlZ2V4cCcsXG4gICAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgLy8gY291bGQgYmUgYSBjb21tZW50IGluIG1hbnkgbGFuZ3VhZ2VzIHNvIGRvIG5vdCBjb3VudFxuICAgICAgICAgICAgICAvLyBhcyByZWxldmFudFxuICAgICAgICAgICAgICBiZWdpbjogLyhtfHFyKVxcL1xcLy8sXG4gICAgICAgICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIHByZWZpeCBpcyBvcHRpb25hbCB3aXRoIC9yZWdleC9cbiAgICAgICAgICAgIHsgYmVnaW46IFBBSVJFRF9SRShcIig/Om18cXIpP1wiLCAvXFwvLywgL1xcLy8pfSxcbiAgICAgICAgICAgIC8vIGFsbG93IG1hdGNoaW5nIGNvbW1vbiBkZWxpbWl0ZXJzXG4gICAgICAgICAgICB7IGJlZ2luOiBQQUlSRURfUkUoXCJtfHFyXCIsIGVpdGhlciguLi5SRUdFWF9ERUxJTVMpLCAvXFwxLyl9LFxuICAgICAgICAgICAgLy8gYWxsb3cgY29tbW9uIHBhaXJlZCBkZWxtaW5zXG4gICAgICAgICAgICB7IGJlZ2luOiBQQUlSRURfUkUoXCJtfHFyXCIsIC9cXCgvLCAvXFwpLyl9LFxuICAgICAgICAgICAgeyBiZWdpbjogUEFJUkVEX1JFKFwibXxxclwiLCAvXFxbLywgL1xcXS8pfSxcbiAgICAgICAgICAgIHsgYmVnaW46IFBBSVJFRF9SRShcIm18cXJcIiwgL1xcey8sIC9cXH0vKX1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIGNsYXNzTmFtZTogJ2Z1bmN0aW9uJyxcbiAgICAgIGJlZ2luS2V5d29yZHM6ICdzdWInLFxuICAgICAgZW5kOiAnKFxcXFxzKlxcXFwoLio/XFxcXCkpP1s7e10nLFxuICAgICAgZXhjbHVkZUVuZDogdHJ1ZSxcbiAgICAgIHJlbGV2YW5jZTogNSxcbiAgICAgIGNvbnRhaW5zOiBbIGhsanMuVElUTEVfTU9ERSBdXG4gICAgfSxcbiAgICB7XG4gICAgICBiZWdpbjogJy1cXFxcd1xcXFxiJyxcbiAgICAgIHJlbGV2YW5jZTogMFxuICAgIH0sXG4gICAge1xuICAgICAgYmVnaW46IFwiXl9fREFUQV9fJFwiLFxuICAgICAgZW5kOiBcIl5fX0VORF9fJFwiLFxuICAgICAgc3ViTGFuZ3VhZ2U6ICdtb2pvbGljaW91cycsXG4gICAgICBjb250YWluczogW1xuICAgICAgICB7XG4gICAgICAgICAgYmVnaW46IFwiXkBALipcIixcbiAgICAgICAgICBlbmQ6IFwiJFwiLFxuICAgICAgICAgIGNsYXNzTmFtZTogXCJjb21tZW50XCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXTtcbiAgU1VCU1QuY29udGFpbnMgPSBQRVJMX0RFRkFVTFRfQ09OVEFJTlM7XG4gIE1FVEhPRC5jb250YWlucyA9IFBFUkxfREVGQVVMVF9DT05UQUlOUztcblxuICByZXR1cm4ge1xuICAgIG5hbWU6ICdQZXJsJyxcbiAgICBhbGlhc2VzOiBbXG4gICAgICAncGwnLFxuICAgICAgJ3BtJ1xuICAgIF0sXG4gICAga2V5d29yZHM6IFBFUkxfS0VZV09SRFMsXG4gICAgY29udGFpbnM6IFBFUkxfREVGQVVMVF9DT05UQUlOU1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHBlcmw7XG4iXSwic291cmNlUm9vdCI6IiJ9