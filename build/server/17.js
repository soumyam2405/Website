exports.ids = [17];
exports.modules = {

/***/ "./node_modules/highlight.js/lib/languages/axapta.js":
/*!***********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/axapta.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Microsoft X++
Description: X++ is a language used in Microsoft Dynamics 365, Dynamics AX, and Axapta.
Author: Dmitri Roudakov <dmitri@roudakov.ru>
Website: https://dynamics.microsoft.com/en-us/ax-overview/
Category: enterprise
*/

/** @type LanguageFn */
function axapta(hljs) {
  const BUILT_IN_KEYWORDS = [
    'anytype',
    'boolean',
    'byte',
    'char',
    'container',
    'date',
    'double',
    'enum',
    'guid',
    'int',
    'int64',
    'long',
    'real',
    'short',
    'str',
    'utcdatetime',
    'var'
  ];

  const LITERAL_KEYWORDS = [
    'default',
    'false',
    'null',
    'true'
  ];

  const NORMAL_KEYWORDS = [
    'abstract',
    'as',
    'asc',
    'avg',
    'break',
    'breakpoint',
    'by',
    'byref',
    'case',
    'catch',
    'changecompany',
    'class',
    'client',
    'client',
    'common',
    'const',
    'continue',
    'count',
    'crosscompany',
    'delegate',
    'delete_from',
    'desc',
    'display',
    'div',
    'do',
    'edit',
    'else',
    'eventhandler',
    'exists',
    'extends',
    'final',
    'finally',
    'firstfast',
    'firstonly',
    'firstonly1',
    'firstonly10',
    'firstonly100',
    'firstonly1000',
    'flush',
    'for',
    'forceliterals',
    'forcenestedloop',
    'forceplaceholders',
    'forceselectorder',
    'forupdate',
    'from',
    'generateonly',
    'group',
    'hint',
    'if',
    'implements',
    'in',
    'index',
    'insert_recordset',
    'interface',
    'internal',
    'is',
    'join',
    'like',
    'maxof',
    'minof',
    'mod',
    'namespace',
    'new',
    'next',
    'nofetch',
    'notexists',
    'optimisticlock',
    'order',
    'outer',
    'pessimisticlock',
    'print',
    'private',
    'protected',
    'public',
    'readonly',
    'repeatableread',
    'retry',
    'return',
    'reverse',
    'select',
    'server',
    'setting',
    'static',
    'sum',
    'super',
    'switch',
    'this',
    'throw',
    'try',
    'ttsabort',
    'ttsbegin',
    'ttscommit',
    'unchecked',
    'update_recordset',
    'using',
    'validtimestate',
    'void',
    'where',
    'while'
  ];

  const KEYWORDS = {
    keyword: NORMAL_KEYWORDS,
    built_in: BUILT_IN_KEYWORDS,
    literal: LITERAL_KEYWORDS
  };

  return {
    name: 'X++',
    aliases: ['x++'],
    keywords: KEYWORDS,
    contains: [
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE,
      hljs.C_NUMBER_MODE,
      {
        className: 'meta',
        begin: '#',
        end: '$'
      },
      {
        className: 'class',
        beginKeywords: 'class interface',
        end: /\{/,
        excludeEnd: true,
        illegal: ':',
        contains: [
          {
            beginKeywords: 'extends implements'
          },
          hljs.UNDERSCORE_TITLE_MODE
        ]
      }
    ]
  };
}

module.exports = axapta;


/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvYXhhcHRhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6IjE3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBNaWNyb3NvZnQgWCsrXG5EZXNjcmlwdGlvbjogWCsrIGlzIGEgbGFuZ3VhZ2UgdXNlZCBpbiBNaWNyb3NvZnQgRHluYW1pY3MgMzY1LCBEeW5hbWljcyBBWCwgYW5kIEF4YXB0YS5cbkF1dGhvcjogRG1pdHJpIFJvdWRha292IDxkbWl0cmlAcm91ZGFrb3YucnU+XG5XZWJzaXRlOiBodHRwczovL2R5bmFtaWNzLm1pY3Jvc29mdC5jb20vZW4tdXMvYXgtb3ZlcnZpZXcvXG5DYXRlZ29yeTogZW50ZXJwcmlzZVxuKi9cblxuLyoqIEB0eXBlIExhbmd1YWdlRm4gKi9cbmZ1bmN0aW9uIGF4YXB0YShobGpzKSB7XG4gIGNvbnN0IEJVSUxUX0lOX0tFWVdPUkRTID0gW1xuICAgICdhbnl0eXBlJyxcbiAgICAnYm9vbGVhbicsXG4gICAgJ2J5dGUnLFxuICAgICdjaGFyJyxcbiAgICAnY29udGFpbmVyJyxcbiAgICAnZGF0ZScsXG4gICAgJ2RvdWJsZScsXG4gICAgJ2VudW0nLFxuICAgICdndWlkJyxcbiAgICAnaW50JyxcbiAgICAnaW50NjQnLFxuICAgICdsb25nJyxcbiAgICAncmVhbCcsXG4gICAgJ3Nob3J0JyxcbiAgICAnc3RyJyxcbiAgICAndXRjZGF0ZXRpbWUnLFxuICAgICd2YXInXG4gIF07XG5cbiAgY29uc3QgTElURVJBTF9LRVlXT1JEUyA9IFtcbiAgICAnZGVmYXVsdCcsXG4gICAgJ2ZhbHNlJyxcbiAgICAnbnVsbCcsXG4gICAgJ3RydWUnXG4gIF07XG5cbiAgY29uc3QgTk9STUFMX0tFWVdPUkRTID0gW1xuICAgICdhYnN0cmFjdCcsXG4gICAgJ2FzJyxcbiAgICAnYXNjJyxcbiAgICAnYXZnJyxcbiAgICAnYnJlYWsnLFxuICAgICdicmVha3BvaW50JyxcbiAgICAnYnknLFxuICAgICdieXJlZicsXG4gICAgJ2Nhc2UnLFxuICAgICdjYXRjaCcsXG4gICAgJ2NoYW5nZWNvbXBhbnknLFxuICAgICdjbGFzcycsXG4gICAgJ2NsaWVudCcsXG4gICAgJ2NsaWVudCcsXG4gICAgJ2NvbW1vbicsXG4gICAgJ2NvbnN0JyxcbiAgICAnY29udGludWUnLFxuICAgICdjb3VudCcsXG4gICAgJ2Nyb3NzY29tcGFueScsXG4gICAgJ2RlbGVnYXRlJyxcbiAgICAnZGVsZXRlX2Zyb20nLFxuICAgICdkZXNjJyxcbiAgICAnZGlzcGxheScsXG4gICAgJ2RpdicsXG4gICAgJ2RvJyxcbiAgICAnZWRpdCcsXG4gICAgJ2Vsc2UnLFxuICAgICdldmVudGhhbmRsZXInLFxuICAgICdleGlzdHMnLFxuICAgICdleHRlbmRzJyxcbiAgICAnZmluYWwnLFxuICAgICdmaW5hbGx5JyxcbiAgICAnZmlyc3RmYXN0JyxcbiAgICAnZmlyc3Rvbmx5JyxcbiAgICAnZmlyc3Rvbmx5MScsXG4gICAgJ2ZpcnN0b25seTEwJyxcbiAgICAnZmlyc3Rvbmx5MTAwJyxcbiAgICAnZmlyc3Rvbmx5MTAwMCcsXG4gICAgJ2ZsdXNoJyxcbiAgICAnZm9yJyxcbiAgICAnZm9yY2VsaXRlcmFscycsXG4gICAgJ2ZvcmNlbmVzdGVkbG9vcCcsXG4gICAgJ2ZvcmNlcGxhY2Vob2xkZXJzJyxcbiAgICAnZm9yY2VzZWxlY3RvcmRlcicsXG4gICAgJ2ZvcnVwZGF0ZScsXG4gICAgJ2Zyb20nLFxuICAgICdnZW5lcmF0ZW9ubHknLFxuICAgICdncm91cCcsXG4gICAgJ2hpbnQnLFxuICAgICdpZicsXG4gICAgJ2ltcGxlbWVudHMnLFxuICAgICdpbicsXG4gICAgJ2luZGV4JyxcbiAgICAnaW5zZXJ0X3JlY29yZHNldCcsXG4gICAgJ2ludGVyZmFjZScsXG4gICAgJ2ludGVybmFsJyxcbiAgICAnaXMnLFxuICAgICdqb2luJyxcbiAgICAnbGlrZScsXG4gICAgJ21heG9mJyxcbiAgICAnbWlub2YnLFxuICAgICdtb2QnLFxuICAgICduYW1lc3BhY2UnLFxuICAgICduZXcnLFxuICAgICduZXh0JyxcbiAgICAnbm9mZXRjaCcsXG4gICAgJ25vdGV4aXN0cycsXG4gICAgJ29wdGltaXN0aWNsb2NrJyxcbiAgICAnb3JkZXInLFxuICAgICdvdXRlcicsXG4gICAgJ3Blc3NpbWlzdGljbG9jaycsXG4gICAgJ3ByaW50JyxcbiAgICAncHJpdmF0ZScsXG4gICAgJ3Byb3RlY3RlZCcsXG4gICAgJ3B1YmxpYycsXG4gICAgJ3JlYWRvbmx5JyxcbiAgICAncmVwZWF0YWJsZXJlYWQnLFxuICAgICdyZXRyeScsXG4gICAgJ3JldHVybicsXG4gICAgJ3JldmVyc2UnLFxuICAgICdzZWxlY3QnLFxuICAgICdzZXJ2ZXInLFxuICAgICdzZXR0aW5nJyxcbiAgICAnc3RhdGljJyxcbiAgICAnc3VtJyxcbiAgICAnc3VwZXInLFxuICAgICdzd2l0Y2gnLFxuICAgICd0aGlzJyxcbiAgICAndGhyb3cnLFxuICAgICd0cnknLFxuICAgICd0dHNhYm9ydCcsXG4gICAgJ3R0c2JlZ2luJyxcbiAgICAndHRzY29tbWl0JyxcbiAgICAndW5jaGVja2VkJyxcbiAgICAndXBkYXRlX3JlY29yZHNldCcsXG4gICAgJ3VzaW5nJyxcbiAgICAndmFsaWR0aW1lc3RhdGUnLFxuICAgICd2b2lkJyxcbiAgICAnd2hlcmUnLFxuICAgICd3aGlsZSdcbiAgXTtcblxuICBjb25zdCBLRVlXT1JEUyA9IHtcbiAgICBrZXl3b3JkOiBOT1JNQUxfS0VZV09SRFMsXG4gICAgYnVpbHRfaW46IEJVSUxUX0lOX0tFWVdPUkRTLFxuICAgIGxpdGVyYWw6IExJVEVSQUxfS0VZV09SRFNcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIG5hbWU6ICdYKysnLFxuICAgIGFsaWFzZXM6IFsneCsrJ10sXG4gICAga2V5d29yZHM6IEtFWVdPUkRTLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBobGpzLkNfTElORV9DT01NRU5UX01PREUsXG4gICAgICBobGpzLkNfQkxPQ0tfQ09NTUVOVF9NT0RFLFxuICAgICAgaGxqcy5BUE9TX1NUUklOR19NT0RFLFxuICAgICAgaGxqcy5RVU9URV9TVFJJTkdfTU9ERSxcbiAgICAgIGhsanMuQ19OVU1CRVJfTU9ERSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgICAgIGJlZ2luOiAnIycsXG4gICAgICAgIGVuZDogJyQnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdjbGFzcycsXG4gICAgICAgIGJlZ2luS2V5d29yZHM6ICdjbGFzcyBpbnRlcmZhY2UnLFxuICAgICAgICBlbmQ6IC9cXHsvLFxuICAgICAgICBleGNsdWRlRW5kOiB0cnVlLFxuICAgICAgICBpbGxlZ2FsOiAnOicsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW5LZXl3b3JkczogJ2V4dGVuZHMgaW1wbGVtZW50cydcbiAgICAgICAgICB9LFxuICAgICAgICAgIGhsanMuVU5ERVJTQ09SRV9USVRMRV9NT0RFXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXhhcHRhO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==