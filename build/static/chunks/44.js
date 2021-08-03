(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[44],{

/***/ "./node_modules/highlight.js/lib/languages/diff.js":
/*!*********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/diff.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Diff
Description: Unified and context diff
Author: Vasily Polovnyov <vast@whiteants.net>
Website: https://www.gnu.org/software/diffutils/
Category: common
*/

/** @type LanguageFn */
function diff(hljs) {
  return {
    name: 'Diff',
    aliases: ['patch'],
    contains: [
      {
        className: 'meta',
        relevance: 10,
        variants: [
          {
            begin: /^@@ +-\d+,\d+ +\+\d+,\d+ +@@/
          },
          {
            begin: /^\*\*\* +\d+,\d+ +\*\*\*\*$/
          },
          {
            begin: /^--- +\d+,\d+ +----$/
          }
        ]
      },
      {
        className: 'comment',
        variants: [
          {
            begin: /Index: /,
            end: /$/
          },
          {
            begin: /^index/,
            end: /$/
          },
          {
            begin: /={3,}/,
            end: /$/
          },
          {
            begin: /^-{3}/,
            end: /$/
          },
          {
            begin: /^\*{3} /,
            end: /$/
          },
          {
            begin: /^\+{3}/,
            end: /$/
          },
          {
            begin: /^\*{15}$/
          },
          {
            begin: /^diff --git/,
            end: /$/
          }
        ]
      },
      {
        className: 'addition',
        begin: /^\+/,
        end: /$/
      },
      {
        className: 'deletion',
        begin: /^-/,
        end: /$/
      },
      {
        className: 'addition',
        begin: /^!/,
        end: /$/
      }
    ]
  };
}

module.exports = diff;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2RpZmYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLHNCQUFzQixHQUFHO0FBQ3pCO0FBQ0EsV0FBVztBQUNYO0FBQ0EsdUJBQXVCLEVBQUU7QUFDekI7QUFDQSxXQUFXO0FBQ1g7QUFDQSx3QkFBd0IsRUFBRTtBQUMxQjtBQUNBLFdBQVc7QUFDWDtBQUNBLHdCQUF3QixFQUFFO0FBQzFCO0FBQ0EsV0FBVztBQUNYO0FBQ0Esd0JBQXdCLEdBQUc7QUFDM0IsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJzdGF0aWMvY2h1bmtzLzQ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBEaWZmXG5EZXNjcmlwdGlvbjogVW5pZmllZCBhbmQgY29udGV4dCBkaWZmXG5BdXRob3I6IFZhc2lseSBQb2xvdm55b3YgPHZhc3RAd2hpdGVhbnRzLm5ldD5cbldlYnNpdGU6IGh0dHBzOi8vd3d3LmdudS5vcmcvc29mdHdhcmUvZGlmZnV0aWxzL1xuQ2F0ZWdvcnk6IGNvbW1vblxuKi9cblxuLyoqIEB0eXBlIExhbmd1YWdlRm4gKi9cbmZ1bmN0aW9uIGRpZmYoaGxqcykge1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICdEaWZmJyxcbiAgICBhbGlhc2VzOiBbJ3BhdGNoJ10sXG4gICAgY29udGFpbnM6IFtcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgICAgIHJlbGV2YW5jZTogMTAsXG4gICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW46IC9eQEAgKy1cXGQrLFxcZCsgK1xcK1xcZCssXFxkKyArQEAvXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogL15cXCpcXCpcXCogK1xcZCssXFxkKyArXFwqXFwqXFwqXFwqJC9cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luOiAvXi0tLSArXFxkKyxcXGQrICstLS0tJC9cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2NvbW1lbnQnLFxuICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luOiAvSW5kZXg6IC8sXG4gICAgICAgICAgICBlbmQ6IC8kL1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW46IC9eaW5kZXgvLFxuICAgICAgICAgICAgZW5kOiAvJC9cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luOiAvPXszLH0vLFxuICAgICAgICAgICAgZW5kOiAvJC9cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luOiAvXi17M30vLFxuICAgICAgICAgICAgZW5kOiAvJC9cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luOiAvXlxcKnszfSAvLFxuICAgICAgICAgICAgZW5kOiAvJC9cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luOiAvXlxcK3szfS8sXG4gICAgICAgICAgICBlbmQ6IC8kL1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW46IC9eXFwqezE1fSQvXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogL15kaWZmIC0tZ2l0LyxcbiAgICAgICAgICAgIGVuZDogLyQvXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdhZGRpdGlvbicsXG4gICAgICAgIGJlZ2luOiAvXlxcKy8sXG4gICAgICAgIGVuZDogLyQvXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdkZWxldGlvbicsXG4gICAgICAgIGJlZ2luOiAvXi0vLFxuICAgICAgICBlbmQ6IC8kL1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnYWRkaXRpb24nLFxuICAgICAgICBiZWdpbjogL14hLyxcbiAgICAgICAgZW5kOiAvJC9cbiAgICAgIH1cbiAgICBdXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZGlmZjtcbiJdLCJzb3VyY2VSb290IjoiIn0=