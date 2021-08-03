(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[148],{

/***/ "./node_modules/highlight.js/lib/languages/roboconf.js":
/*!*************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/roboconf.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Roboconf
Author: Vincent Zurczak <vzurczak@linagora.com>
Description: Syntax highlighting for Roboconf's DSL
Website: http://roboconf.net
Category: config
*/

function roboconf(hljs) {
  const IDENTIFIER = '[a-zA-Z-_][^\\n{]+\\{';

  const PROPERTY = {
    className: 'attribute',
    begin: /[a-zA-Z-_]+/,
    end: /\s*:/,
    excludeEnd: true,
    starts: {
      end: ';',
      relevance: 0,
      contains: [
        {
          className: 'variable',
          begin: /\.[a-zA-Z-_]+/
        },
        {
          className: 'keyword',
          begin: /\(optional\)/
        }
      ]
    }
  };

  return {
    name: 'Roboconf',
    aliases: [
      'graph',
      'instances'
    ],
    case_insensitive: true,
    keywords: 'import',
    contains: [
      // Facet sections
      {
        begin: '^facet ' + IDENTIFIER,
        end: /\}/,
        keywords: 'facet',
        contains: [
          PROPERTY,
          hljs.HASH_COMMENT_MODE
        ]
      },

      // Instance sections
      {
        begin: '^\\s*instance of ' + IDENTIFIER,
        end: /\}/,
        keywords: 'name count channels instance-data instance-state instance of',
        illegal: /\S/,
        contains: [
          'self',
          PROPERTY,
          hljs.HASH_COMMENT_MODE
        ]
      },

      // Component sections
      {
        begin: '^' + IDENTIFIER,
        end: /\}/,
        contains: [
          PROPERTY,
          hljs.HASH_COMMENT_MODE
        ]
      },

      // Comments
      hljs.HASH_COMMENT_MODE
    ]
  };
}

module.exports = roboconf;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3JvYm9jb25mLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0NBQXNDLEtBQUs7O0FBRTNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJzdGF0aWMvY2h1bmtzLzE0OC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5MYW5ndWFnZTogUm9ib2NvbmZcbkF1dGhvcjogVmluY2VudCBadXJjemFrIDx2enVyY3pha0BsaW5hZ29yYS5jb20+XG5EZXNjcmlwdGlvbjogU3ludGF4IGhpZ2hsaWdodGluZyBmb3IgUm9ib2NvbmYncyBEU0xcbldlYnNpdGU6IGh0dHA6Ly9yb2JvY29uZi5uZXRcbkNhdGVnb3J5OiBjb25maWdcbiovXG5cbmZ1bmN0aW9uIHJvYm9jb25mKGhsanMpIHtcbiAgY29uc3QgSURFTlRJRklFUiA9ICdbYS16QS1aLV9dW15cXFxcbntdK1xcXFx7JztcblxuICBjb25zdCBQUk9QRVJUWSA9IHtcbiAgICBjbGFzc05hbWU6ICdhdHRyaWJ1dGUnLFxuICAgIGJlZ2luOiAvW2EtekEtWi1fXSsvLFxuICAgIGVuZDogL1xccyo6LyxcbiAgICBleGNsdWRlRW5kOiB0cnVlLFxuICAgIHN0YXJ0czoge1xuICAgICAgZW5kOiAnOycsXG4gICAgICByZWxldmFuY2U6IDAsXG4gICAgICBjb250YWluczogW1xuICAgICAgICB7XG4gICAgICAgICAgY2xhc3NOYW1lOiAndmFyaWFibGUnLFxuICAgICAgICAgIGJlZ2luOiAvXFwuW2EtekEtWi1fXSsvXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBjbGFzc05hbWU6ICdrZXl3b3JkJyxcbiAgICAgICAgICBiZWdpbjogL1xcKG9wdGlvbmFsXFwpL1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgbmFtZTogJ1JvYm9jb25mJyxcbiAgICBhbGlhc2VzOiBbXG4gICAgICAnZ3JhcGgnLFxuICAgICAgJ2luc3RhbmNlcydcbiAgICBdLFxuICAgIGNhc2VfaW5zZW5zaXRpdmU6IHRydWUsXG4gICAga2V5d29yZHM6ICdpbXBvcnQnLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICAvLyBGYWNldCBzZWN0aW9uc1xuICAgICAge1xuICAgICAgICBiZWdpbjogJ15mYWNldCAnICsgSURFTlRJRklFUixcbiAgICAgICAgZW5kOiAvXFx9LyxcbiAgICAgICAga2V5d29yZHM6ICdmYWNldCcsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgUFJPUEVSVFksXG4gICAgICAgICAgaGxqcy5IQVNIX0NPTU1FTlRfTU9ERVxuICAgICAgICBdXG4gICAgICB9LFxuXG4gICAgICAvLyBJbnN0YW5jZSBzZWN0aW9uc1xuICAgICAge1xuICAgICAgICBiZWdpbjogJ15cXFxccyppbnN0YW5jZSBvZiAnICsgSURFTlRJRklFUixcbiAgICAgICAgZW5kOiAvXFx9LyxcbiAgICAgICAga2V5d29yZHM6ICduYW1lIGNvdW50IGNoYW5uZWxzIGluc3RhbmNlLWRhdGEgaW5zdGFuY2Utc3RhdGUgaW5zdGFuY2Ugb2YnLFxuICAgICAgICBpbGxlZ2FsOiAvXFxTLyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAnc2VsZicsXG4gICAgICAgICAgUFJPUEVSVFksXG4gICAgICAgICAgaGxqcy5IQVNIX0NPTU1FTlRfTU9ERVxuICAgICAgICBdXG4gICAgICB9LFxuXG4gICAgICAvLyBDb21wb25lbnQgc2VjdGlvbnNcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICdeJyArIElERU5USUZJRVIsXG4gICAgICAgIGVuZDogL1xcfS8sXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgUFJPUEVSVFksXG4gICAgICAgICAgaGxqcy5IQVNIX0NPTU1FTlRfTU9ERVxuICAgICAgICBdXG4gICAgICB9LFxuXG4gICAgICAvLyBDb21tZW50c1xuICAgICAgaGxqcy5IQVNIX0NPTU1FTlRfTU9ERVxuICAgIF1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSByb2JvY29uZjtcbiJdLCJzb3VyY2VSb290IjoiIn0=