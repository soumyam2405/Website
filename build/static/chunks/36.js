(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[36],{

/***/ "./node_modules/highlight.js/lib/languages/crmsh.js":
/*!**********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/crmsh.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: crmsh
Author: Kristoffer Gronlund <kgronlund@suse.com>
Website: http://crmsh.github.io
Description: Syntax Highlighting for the crmsh DSL
Category: config
*/

/** @type LanguageFn */
function crmsh(hljs) {
  const RESOURCES = 'primitive rsc_template';
  const COMMANDS = 'group clone ms master location colocation order fencing_topology ' +
      'rsc_ticket acl_target acl_group user role ' +
      'tag xml';
  const PROPERTY_SETS = 'property rsc_defaults op_defaults';
  const KEYWORDS = 'params meta operations op rule attributes utilization';
  const OPERATORS = 'read write deny defined not_defined in_range date spec in ' +
      'ref reference attribute type xpath version and or lt gt tag ' +
      'lte gte eq ne \\';
  const TYPES = 'number string';
  const LITERALS = 'Master Started Slave Stopped start promote demote stop monitor true false';

  return {
    name: 'crmsh',
    aliases: [
      'crm',
      'pcmk'
    ],
    case_insensitive: true,
    keywords: {
      keyword: KEYWORDS + ' ' + OPERATORS + ' ' + TYPES,
      literal: LITERALS
    },
    contains: [
      hljs.HASH_COMMENT_MODE,
      {
        beginKeywords: 'node',
        starts: {
          end: '\\s*([\\w_-]+:)?',
          starts: {
            className: 'title',
            end: '\\s*[\\$\\w_][\\w_-]*'
          }
        }
      },
      {
        beginKeywords: RESOURCES,
        starts: {
          className: 'title',
          end: '\\s*[\\$\\w_][\\w_-]*',
          starts: {
            end: '\\s*@?[\\w_][\\w_\\.:-]*'
          }
        }
      },
      {
        begin: '\\b(' + COMMANDS.split(' ').join('|') + ')\\s+',
        keywords: COMMANDS,
        starts: {
          className: 'title',
          end: '[\\$\\w_][\\w_-]*'
        }
      },
      {
        beginKeywords: PROPERTY_SETS,
        starts: {
          className: 'title',
          end: '\\s*([\\w_-]+:)?'
        }
      },
      hljs.QUOTE_STRING_MODE,
      {
        className: 'meta',
        begin: '(ocf|systemd|service|lsb):[\\w_:-]+',
        relevance: 0
      },
      {
        className: 'number',
        begin: '\\b\\d+(\\.\\d+)?(ms|s|h|m)?',
        relevance: 0
      },
      {
        className: 'literal',
        begin: '[-]?(infinity|inf)',
        relevance: 0
      },
      {
        className: 'attr',
        begin: /([A-Za-z$_#][\w_-]+)=/,
        relevance: 0
      },
      {
        className: 'tag',
        begin: '</?',
        end: '/?>',
        relevance: 0
      }
    ]
  };
}

module.exports = crmsh;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2NybXNoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJzdGF0aWMvY2h1bmtzLzM2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBjcm1zaFxuQXV0aG9yOiBLcmlzdG9mZmVyIEdyb25sdW5kIDxrZ3Jvbmx1bmRAc3VzZS5jb20+XG5XZWJzaXRlOiBodHRwOi8vY3Jtc2guZ2l0aHViLmlvXG5EZXNjcmlwdGlvbjogU3ludGF4IEhpZ2hsaWdodGluZyBmb3IgdGhlIGNybXNoIERTTFxuQ2F0ZWdvcnk6IGNvbmZpZ1xuKi9cblxuLyoqIEB0eXBlIExhbmd1YWdlRm4gKi9cbmZ1bmN0aW9uIGNybXNoKGhsanMpIHtcbiAgY29uc3QgUkVTT1VSQ0VTID0gJ3ByaW1pdGl2ZSByc2NfdGVtcGxhdGUnO1xuICBjb25zdCBDT01NQU5EUyA9ICdncm91cCBjbG9uZSBtcyBtYXN0ZXIgbG9jYXRpb24gY29sb2NhdGlvbiBvcmRlciBmZW5jaW5nX3RvcG9sb2d5ICcgK1xuICAgICAgJ3JzY190aWNrZXQgYWNsX3RhcmdldCBhY2xfZ3JvdXAgdXNlciByb2xlICcgK1xuICAgICAgJ3RhZyB4bWwnO1xuICBjb25zdCBQUk9QRVJUWV9TRVRTID0gJ3Byb3BlcnR5IHJzY19kZWZhdWx0cyBvcF9kZWZhdWx0cyc7XG4gIGNvbnN0IEtFWVdPUkRTID0gJ3BhcmFtcyBtZXRhIG9wZXJhdGlvbnMgb3AgcnVsZSBhdHRyaWJ1dGVzIHV0aWxpemF0aW9uJztcbiAgY29uc3QgT1BFUkFUT1JTID0gJ3JlYWQgd3JpdGUgZGVueSBkZWZpbmVkIG5vdF9kZWZpbmVkIGluX3JhbmdlIGRhdGUgc3BlYyBpbiAnICtcbiAgICAgICdyZWYgcmVmZXJlbmNlIGF0dHJpYnV0ZSB0eXBlIHhwYXRoIHZlcnNpb24gYW5kIG9yIGx0IGd0IHRhZyAnICtcbiAgICAgICdsdGUgZ3RlIGVxIG5lIFxcXFwnO1xuICBjb25zdCBUWVBFUyA9ICdudW1iZXIgc3RyaW5nJztcbiAgY29uc3QgTElURVJBTFMgPSAnTWFzdGVyIFN0YXJ0ZWQgU2xhdmUgU3RvcHBlZCBzdGFydCBwcm9tb3RlIGRlbW90ZSBzdG9wIG1vbml0b3IgdHJ1ZSBmYWxzZSc7XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnY3Jtc2gnLFxuICAgIGFsaWFzZXM6IFtcbiAgICAgICdjcm0nLFxuICAgICAgJ3BjbWsnXG4gICAgXSxcbiAgICBjYXNlX2luc2Vuc2l0aXZlOiB0cnVlLFxuICAgIGtleXdvcmRzOiB7XG4gICAgICBrZXl3b3JkOiBLRVlXT1JEUyArICcgJyArIE9QRVJBVE9SUyArICcgJyArIFRZUEVTLFxuICAgICAgbGl0ZXJhbDogTElURVJBTFNcbiAgICB9LFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBobGpzLkhBU0hfQ09NTUVOVF9NT0RFLFxuICAgICAge1xuICAgICAgICBiZWdpbktleXdvcmRzOiAnbm9kZScsXG4gICAgICAgIHN0YXJ0czoge1xuICAgICAgICAgIGVuZDogJ1xcXFxzKihbXFxcXHdfLV0rOik/JyxcbiAgICAgICAgICBzdGFydHM6IHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3RpdGxlJyxcbiAgICAgICAgICAgIGVuZDogJ1xcXFxzKltcXFxcJFxcXFx3X11bXFxcXHdfLV0qJ1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW5LZXl3b3JkczogUkVTT1VSQ0VTLFxuICAgICAgICBzdGFydHM6IHtcbiAgICAgICAgICBjbGFzc05hbWU6ICd0aXRsZScsXG4gICAgICAgICAgZW5kOiAnXFxcXHMqW1xcXFwkXFxcXHdfXVtcXFxcd18tXSonLFxuICAgICAgICAgIHN0YXJ0czoge1xuICAgICAgICAgICAgZW5kOiAnXFxcXHMqQD9bXFxcXHdfXVtcXFxcd19cXFxcLjotXSonXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogJ1xcXFxiKCcgKyBDT01NQU5EUy5zcGxpdCgnICcpLmpvaW4oJ3wnKSArICcpXFxcXHMrJyxcbiAgICAgICAga2V5d29yZHM6IENPTU1BTkRTLFxuICAgICAgICBzdGFydHM6IHtcbiAgICAgICAgICBjbGFzc05hbWU6ICd0aXRsZScsXG4gICAgICAgICAgZW5kOiAnW1xcXFwkXFxcXHdfXVtcXFxcd18tXSonXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luS2V5d29yZHM6IFBST1BFUlRZX1NFVFMsXG4gICAgICAgIHN0YXJ0czoge1xuICAgICAgICAgIGNsYXNzTmFtZTogJ3RpdGxlJyxcbiAgICAgICAgICBlbmQ6ICdcXFxccyooW1xcXFx3Xy1dKzopPydcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGhsanMuUVVPVEVfU1RSSU5HX01PREUsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgICAgICBiZWdpbjogJyhvY2Z8c3lzdGVtZHxzZXJ2aWNlfGxzYik6W1xcXFx3XzotXSsnLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgICAgIGJlZ2luOiAnXFxcXGJcXFxcZCsoXFxcXC5cXFxcZCspPyhtc3xzfGh8bSk/JyxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdsaXRlcmFsJyxcbiAgICAgICAgYmVnaW46ICdbLV0/KGluZmluaXR5fGluZiknLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2F0dHInLFxuICAgICAgICBiZWdpbjogLyhbQS1aYS16JF8jXVtcXHdfLV0rKT0vLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3RhZycsXG4gICAgICAgIGJlZ2luOiAnPC8/JyxcbiAgICAgICAgZW5kOiAnLz8+JyxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9XG4gICAgXVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNybXNoO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==