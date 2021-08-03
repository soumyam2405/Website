(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[81],{

/***/ "./node_modules/highlight.js/lib/languages/inform7.js":
/*!************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/inform7.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Inform 7
Author: Bruno Dias <bruno.r.dias@gmail.com>
Description: Language definition for Inform 7, a DSL for writing parser interactive fiction.
Website: http://inform7.com
*/

function inform7(hljs) {
  const START_BRACKET = '\\[';
  const END_BRACKET = '\\]';
  return {
    name: 'Inform 7',
    aliases: ['i7'],
    case_insensitive: true,
    keywords: {
      // Some keywords more or less unique to I7, for relevance.
      keyword:
        // kind:
        'thing room person man woman animal container ' +
        'supporter backdrop door ' +
        // characteristic:
        'scenery open closed locked inside gender ' +
        // verb:
        'is are say understand ' +
        // misc keyword:
        'kind of rule'
    },
    contains: [
      {
        className: 'string',
        begin: '"',
        end: '"',
        relevance: 0,
        contains: [
          {
            className: 'subst',
            begin: START_BRACKET,
            end: END_BRACKET
          }
        ]
      },
      {
        className: 'section',
        begin: /^(Volume|Book|Part|Chapter|Section|Table)\b/,
        end: '$'
      },
      {
        // Rule definition
        // This is here for relevance.
        begin: /^(Check|Carry out|Report|Instead of|To|Rule|When|Before|After)\b/,
        end: ':',
        contains: [
          {
            // Rule name
            begin: '\\(This',
            end: '\\)'
          }
        ]
      },
      {
        className: 'comment',
        begin: START_BRACKET,
        end: END_BRACKET,
        contains: ['self']
      }
    ]
  };
}

module.exports = inform7;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2luZm9ybTcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoic3RhdGljL2NodW5rcy84MS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5MYW5ndWFnZTogSW5mb3JtIDdcbkF1dGhvcjogQnJ1bm8gRGlhcyA8YnJ1bm8uci5kaWFzQGdtYWlsLmNvbT5cbkRlc2NyaXB0aW9uOiBMYW5ndWFnZSBkZWZpbml0aW9uIGZvciBJbmZvcm0gNywgYSBEU0wgZm9yIHdyaXRpbmcgcGFyc2VyIGludGVyYWN0aXZlIGZpY3Rpb24uXG5XZWJzaXRlOiBodHRwOi8vaW5mb3JtNy5jb21cbiovXG5cbmZ1bmN0aW9uIGluZm9ybTcoaGxqcykge1xuICBjb25zdCBTVEFSVF9CUkFDS0VUID0gJ1xcXFxbJztcbiAgY29uc3QgRU5EX0JSQUNLRVQgPSAnXFxcXF0nO1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICdJbmZvcm0gNycsXG4gICAgYWxpYXNlczogWydpNyddLFxuICAgIGNhc2VfaW5zZW5zaXRpdmU6IHRydWUsXG4gICAga2V5d29yZHM6IHtcbiAgICAgIC8vIFNvbWUga2V5d29yZHMgbW9yZSBvciBsZXNzIHVuaXF1ZSB0byBJNywgZm9yIHJlbGV2YW5jZS5cbiAgICAgIGtleXdvcmQ6XG4gICAgICAgIC8vIGtpbmQ6XG4gICAgICAgICd0aGluZyByb29tIHBlcnNvbiBtYW4gd29tYW4gYW5pbWFsIGNvbnRhaW5lciAnICtcbiAgICAgICAgJ3N1cHBvcnRlciBiYWNrZHJvcCBkb29yICcgK1xuICAgICAgICAvLyBjaGFyYWN0ZXJpc3RpYzpcbiAgICAgICAgJ3NjZW5lcnkgb3BlbiBjbG9zZWQgbG9ja2VkIGluc2lkZSBnZW5kZXIgJyArXG4gICAgICAgIC8vIHZlcmI6XG4gICAgICAgICdpcyBhcmUgc2F5IHVuZGVyc3RhbmQgJyArXG4gICAgICAgIC8vIG1pc2Mga2V5d29yZDpcbiAgICAgICAgJ2tpbmQgb2YgcnVsZSdcbiAgICB9LFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgICAgIGJlZ2luOiAnXCInLFxuICAgICAgICBlbmQ6ICdcIicsXG4gICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdzdWJzdCcsXG4gICAgICAgICAgICBiZWdpbjogU1RBUlRfQlJBQ0tFVCxcbiAgICAgICAgICAgIGVuZDogRU5EX0JSQUNLRVRcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3NlY3Rpb24nLFxuICAgICAgICBiZWdpbjogL14oVm9sdW1lfEJvb2t8UGFydHxDaGFwdGVyfFNlY3Rpb258VGFibGUpXFxiLyxcbiAgICAgICAgZW5kOiAnJCdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIC8vIFJ1bGUgZGVmaW5pdGlvblxuICAgICAgICAvLyBUaGlzIGlzIGhlcmUgZm9yIHJlbGV2YW5jZS5cbiAgICAgICAgYmVnaW46IC9eKENoZWNrfENhcnJ5IG91dHxSZXBvcnR8SW5zdGVhZCBvZnxUb3xSdWxlfFdoZW58QmVmb3JlfEFmdGVyKVxcYi8sXG4gICAgICAgIGVuZDogJzonLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIC8vIFJ1bGUgbmFtZVxuICAgICAgICAgICAgYmVnaW46ICdcXFxcKFRoaXMnLFxuICAgICAgICAgICAgZW5kOiAnXFxcXCknXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdjb21tZW50JyxcbiAgICAgICAgYmVnaW46IFNUQVJUX0JSQUNLRVQsXG4gICAgICAgIGVuZDogRU5EX0JSQUNLRVQsXG4gICAgICAgIGNvbnRhaW5zOiBbJ3NlbGYnXVxuICAgICAgfVxuICAgIF1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbmZvcm03O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==