(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[76],{

/***/ "./node_modules/highlight.js/lib/languages/haxe.js":
/*!*********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/haxe.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Haxe
Description: Haxe is an open source toolkit based on a modern, high level, strictly typed programming language.
Author: Christopher Kaster <ikasoki@gmail.com> (Based on the actionscript.js language file by Alexander Myadzel)
Contributors: Kenton Hamaluik <kentonh@gmail.com>
Website: https://haxe.org
*/

function haxe(hljs) {

  const HAXE_BASIC_TYPES = 'Int Float String Bool Dynamic Void Array ';

  return {
    name: 'Haxe',
    aliases: ['hx'],
    keywords: {
      keyword: 'break case cast catch continue default do dynamic else enum extern ' +
               'for function here if import in inline never new override package private get set ' +
               'public return static super switch this throw trace try typedef untyped using var while ' +
               HAXE_BASIC_TYPES,
      built_in:
        'trace this',
      literal:
        'true false null _'
    },
    contains: [
      {
        className: 'string', // interpolate-able strings
        begin: '\'',
        end: '\'',
        contains: [
          hljs.BACKSLASH_ESCAPE,
          {
            className: 'subst', // interpolation
            begin: '\\$\\{',
            end: '\\}'
          },
          {
            className: 'subst', // interpolation
            begin: '\\$',
            end: /\W\}/
          }
        ]
      },
      hljs.QUOTE_STRING_MODE,
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      hljs.C_NUMBER_MODE,
      {
        className: 'meta', // compiler meta
        begin: '@:',
        end: '$'
      },
      {
        className: 'meta', // compiler conditionals
        begin: '#',
        end: '$',
        keywords: {
          'meta-keyword': 'if else elseif end error'
        }
      },
      {
        className: 'type', // function types
        begin: ':[ \t]*',
        end: '[^A-Za-z0-9_ \t\\->]',
        excludeBegin: true,
        excludeEnd: true,
        relevance: 0
      },
      {
        className: 'type', // types
        begin: ':[ \t]*',
        end: '\\W',
        excludeBegin: true,
        excludeEnd: true
      },
      {
        className: 'type', // instantiation
        begin: 'new *',
        end: '\\W',
        excludeBegin: true,
        excludeEnd: true
      },
      {
        className: 'class', // enums
        beginKeywords: 'enum',
        end: '\\{',
        contains: [hljs.TITLE_MODE]
      },
      {
        className: 'class', // abstracts
        beginKeywords: 'abstract',
        end: '[\\{$]',
        contains: [
          {
            className: 'type',
            begin: '\\(',
            end: '\\)',
            excludeBegin: true,
            excludeEnd: true
          },
          {
            className: 'type',
            begin: 'from +',
            end: '\\W',
            excludeBegin: true,
            excludeEnd: true
          },
          {
            className: 'type',
            begin: 'to +',
            end: '\\W',
            excludeBegin: true,
            excludeEnd: true
          },
          hljs.TITLE_MODE
        ],
        keywords: {
          keyword: 'abstract from to'
        }
      },
      {
        className: 'class', // classes
        begin: '\\b(class|interface) +',
        end: '[\\{$]',
        excludeEnd: true,
        keywords: 'class interface',
        contains: [
          {
            className: 'keyword',
            begin: '\\b(extends|implements) +',
            keywords: 'extends implements',
            contains: [
              {
                className: 'type',
                begin: hljs.IDENT_RE,
                relevance: 0
              }
            ]
          },
          hljs.TITLE_MODE
        ]
      },
      {
        className: 'function',
        beginKeywords: 'function',
        end: '\\(',
        excludeEnd: true,
        illegal: '\\S',
        contains: [hljs.TITLE_MODE]
      }
    ],
    illegal: /<\//
  };
}

module.exports = haxe;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2hheGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQixxQkFBcUI7QUFDckIsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJzdGF0aWMvY2h1bmtzLzc2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBIYXhlXG5EZXNjcmlwdGlvbjogSGF4ZSBpcyBhbiBvcGVuIHNvdXJjZSB0b29sa2l0IGJhc2VkIG9uIGEgbW9kZXJuLCBoaWdoIGxldmVsLCBzdHJpY3RseSB0eXBlZCBwcm9ncmFtbWluZyBsYW5ndWFnZS5cbkF1dGhvcjogQ2hyaXN0b3BoZXIgS2FzdGVyIDxpa2Fzb2tpQGdtYWlsLmNvbT4gKEJhc2VkIG9uIHRoZSBhY3Rpb25zY3JpcHQuanMgbGFuZ3VhZ2UgZmlsZSBieSBBbGV4YW5kZXIgTXlhZHplbClcbkNvbnRyaWJ1dG9yczogS2VudG9uIEhhbWFsdWlrIDxrZW50b25oQGdtYWlsLmNvbT5cbldlYnNpdGU6IGh0dHBzOi8vaGF4ZS5vcmdcbiovXG5cbmZ1bmN0aW9uIGhheGUoaGxqcykge1xuXG4gIGNvbnN0IEhBWEVfQkFTSUNfVFlQRVMgPSAnSW50IEZsb2F0IFN0cmluZyBCb29sIER5bmFtaWMgVm9pZCBBcnJheSAnO1xuXG4gIHJldHVybiB7XG4gICAgbmFtZTogJ0hheGUnLFxuICAgIGFsaWFzZXM6IFsnaHgnXSxcbiAgICBrZXl3b3Jkczoge1xuICAgICAga2V5d29yZDogJ2JyZWFrIGNhc2UgY2FzdCBjYXRjaCBjb250aW51ZSBkZWZhdWx0IGRvIGR5bmFtaWMgZWxzZSBlbnVtIGV4dGVybiAnICtcbiAgICAgICAgICAgICAgICdmb3IgZnVuY3Rpb24gaGVyZSBpZiBpbXBvcnQgaW4gaW5saW5lIG5ldmVyIG5ldyBvdmVycmlkZSBwYWNrYWdlIHByaXZhdGUgZ2V0IHNldCAnICtcbiAgICAgICAgICAgICAgICdwdWJsaWMgcmV0dXJuIHN0YXRpYyBzdXBlciBzd2l0Y2ggdGhpcyB0aHJvdyB0cmFjZSB0cnkgdHlwZWRlZiB1bnR5cGVkIHVzaW5nIHZhciB3aGlsZSAnICtcbiAgICAgICAgICAgICAgIEhBWEVfQkFTSUNfVFlQRVMsXG4gICAgICBidWlsdF9pbjpcbiAgICAgICAgJ3RyYWNlIHRoaXMnLFxuICAgICAgbGl0ZXJhbDpcbiAgICAgICAgJ3RydWUgZmFsc2UgbnVsbCBfJ1xuICAgIH0sXG4gICAgY29udGFpbnM6IFtcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnc3RyaW5nJywgLy8gaW50ZXJwb2xhdGUtYWJsZSBzdHJpbmdzXG4gICAgICAgIGJlZ2luOiAnXFwnJyxcbiAgICAgICAgZW5kOiAnXFwnJyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICBobGpzLkJBQ0tTTEFTSF9FU0NBUEUsXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnc3Vic3QnLCAvLyBpbnRlcnBvbGF0aW9uXG4gICAgICAgICAgICBiZWdpbjogJ1xcXFwkXFxcXHsnLFxuICAgICAgICAgICAgZW5kOiAnXFxcXH0nXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdzdWJzdCcsIC8vIGludGVycG9sYXRpb25cbiAgICAgICAgICAgIGJlZ2luOiAnXFxcXCQnLFxuICAgICAgICAgICAgZW5kOiAvXFxXXFx9L1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIGhsanMuUVVPVEVfU1RSSU5HX01PREUsXG4gICAgICBobGpzLkNfTElORV9DT01NRU5UX01PREUsXG4gICAgICBobGpzLkNfQkxPQ0tfQ09NTUVOVF9NT0RFLFxuICAgICAgaGxqcy5DX05VTUJFUl9NT0RFLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdtZXRhJywgLy8gY29tcGlsZXIgbWV0YVxuICAgICAgICBiZWdpbjogJ0A6JyxcbiAgICAgICAgZW5kOiAnJCdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ21ldGEnLCAvLyBjb21waWxlciBjb25kaXRpb25hbHNcbiAgICAgICAgYmVnaW46ICcjJyxcbiAgICAgICAgZW5kOiAnJCcsXG4gICAgICAgIGtleXdvcmRzOiB7XG4gICAgICAgICAgJ21ldGEta2V5d29yZCc6ICdpZiBlbHNlIGVsc2VpZiBlbmQgZXJyb3InXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3R5cGUnLCAvLyBmdW5jdGlvbiB0eXBlc1xuICAgICAgICBiZWdpbjogJzpbIFxcdF0qJyxcbiAgICAgICAgZW5kOiAnW15BLVphLXowLTlfIFxcdFxcXFwtPl0nLFxuICAgICAgICBleGNsdWRlQmVnaW46IHRydWUsXG4gICAgICAgIGV4Y2x1ZGVFbmQ6IHRydWUsXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAndHlwZScsIC8vIHR5cGVzXG4gICAgICAgIGJlZ2luOiAnOlsgXFx0XSonLFxuICAgICAgICBlbmQ6ICdcXFxcVycsXG4gICAgICAgIGV4Y2x1ZGVCZWdpbjogdHJ1ZSxcbiAgICAgICAgZXhjbHVkZUVuZDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAndHlwZScsIC8vIGluc3RhbnRpYXRpb25cbiAgICAgICAgYmVnaW46ICduZXcgKicsXG4gICAgICAgIGVuZDogJ1xcXFxXJyxcbiAgICAgICAgZXhjbHVkZUJlZ2luOiB0cnVlLFxuICAgICAgICBleGNsdWRlRW5kOiB0cnVlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdjbGFzcycsIC8vIGVudW1zXG4gICAgICAgIGJlZ2luS2V5d29yZHM6ICdlbnVtJyxcbiAgICAgICAgZW5kOiAnXFxcXHsnLFxuICAgICAgICBjb250YWluczogW2hsanMuVElUTEVfTU9ERV1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2NsYXNzJywgLy8gYWJzdHJhY3RzXG4gICAgICAgIGJlZ2luS2V5d29yZHM6ICdhYnN0cmFjdCcsXG4gICAgICAgIGVuZDogJ1tcXFxceyRdJyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICd0eXBlJyxcbiAgICAgICAgICAgIGJlZ2luOiAnXFxcXCgnLFxuICAgICAgICAgICAgZW5kOiAnXFxcXCknLFxuICAgICAgICAgICAgZXhjbHVkZUJlZ2luOiB0cnVlLFxuICAgICAgICAgICAgZXhjbHVkZUVuZDogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAndHlwZScsXG4gICAgICAgICAgICBiZWdpbjogJ2Zyb20gKycsXG4gICAgICAgICAgICBlbmQ6ICdcXFxcVycsXG4gICAgICAgICAgICBleGNsdWRlQmVnaW46IHRydWUsXG4gICAgICAgICAgICBleGNsdWRlRW5kOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICd0eXBlJyxcbiAgICAgICAgICAgIGJlZ2luOiAndG8gKycsXG4gICAgICAgICAgICBlbmQ6ICdcXFxcVycsXG4gICAgICAgICAgICBleGNsdWRlQmVnaW46IHRydWUsXG4gICAgICAgICAgICBleGNsdWRlRW5kOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBobGpzLlRJVExFX01PREVcbiAgICAgICAgXSxcbiAgICAgICAga2V5d29yZHM6IHtcbiAgICAgICAgICBrZXl3b3JkOiAnYWJzdHJhY3QgZnJvbSB0bydcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnY2xhc3MnLCAvLyBjbGFzc2VzXG4gICAgICAgIGJlZ2luOiAnXFxcXGIoY2xhc3N8aW50ZXJmYWNlKSArJyxcbiAgICAgICAgZW5kOiAnW1xcXFx7JF0nLFxuICAgICAgICBleGNsdWRlRW5kOiB0cnVlLFxuICAgICAgICBrZXl3b3JkczogJ2NsYXNzIGludGVyZmFjZScsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAna2V5d29yZCcsXG4gICAgICAgICAgICBiZWdpbjogJ1xcXFxiKGV4dGVuZHN8aW1wbGVtZW50cykgKycsXG4gICAgICAgICAgICBrZXl3b3JkczogJ2V4dGVuZHMgaW1wbGVtZW50cycsXG4gICAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAndHlwZScsXG4gICAgICAgICAgICAgICAgYmVnaW46IGhsanMuSURFTlRfUkUsXG4gICAgICAgICAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGhsanMuVElUTEVfTU9ERVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdmdW5jdGlvbicsXG4gICAgICAgIGJlZ2luS2V5d29yZHM6ICdmdW5jdGlvbicsXG4gICAgICAgIGVuZDogJ1xcXFwoJyxcbiAgICAgICAgZXhjbHVkZUVuZDogdHJ1ZSxcbiAgICAgICAgaWxsZWdhbDogJ1xcXFxTJyxcbiAgICAgICAgY29udGFpbnM6IFtobGpzLlRJVExFX01PREVdXG4gICAgICB9XG4gICAgXSxcbiAgICBpbGxlZ2FsOiAvPFxcLy9cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXhlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==