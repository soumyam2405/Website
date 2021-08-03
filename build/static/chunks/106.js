(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[106],{

/***/ "./node_modules/highlight.js/lib/languages/matlab.js":
/*!***********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/matlab.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Matlab
Author: Denis Bardadym <bardadymchik@gmail.com>
Contributors: Eugene Nizhibitsky <nizhibitsky@ya.ru>, Egor Rogov <e.rogov@postgrespro.ru>
Website: https://www.mathworks.com/products/matlab.html
Category: scientific
*/

/*
  Formal syntax is not published, helpful link:
  https://github.com/kornilova-l/matlab-IntelliJ-plugin/blob/master/src/main/grammar/Matlab.bnf
*/
function matlab(hljs) {

  var TRANSPOSE_RE = '(\'|\\.\')+';
  var TRANSPOSE = {
    relevance: 0,
    contains: [
      { begin: TRANSPOSE_RE }
    ]
  };

  return {
    name: 'Matlab',
    keywords: {
      keyword:
        'arguments break case catch classdef continue else elseif end enumeration events for function ' +
        'global if methods otherwise parfor persistent properties return spmd switch try while',
      built_in:
        'sin sind sinh asin asind asinh cos cosd cosh acos acosd acosh tan tand tanh atan ' +
        'atand atan2 atanh sec secd sech asec asecd asech csc cscd csch acsc acscd acsch cot ' +
        'cotd coth acot acotd acoth hypot exp expm1 log log1p log10 log2 pow2 realpow reallog ' +
        'realsqrt sqrt nthroot nextpow2 abs angle complex conj imag real unwrap isreal ' +
        'cplxpair fix floor ceil round mod rem sign airy besselj bessely besselh besseli ' +
        'besselk beta betainc betaln ellipj ellipke erf erfc erfcx erfinv expint gamma ' +
        'gammainc gammaln psi legendre cross dot factor isprime primes gcd lcm rat rats perms ' +
        'nchoosek factorial cart2sph cart2pol pol2cart sph2cart hsv2rgb rgb2hsv zeros ones ' +
        'eye repmat rand randn linspace logspace freqspace meshgrid accumarray size length ' +
        'ndims numel disp isempty isequal isequalwithequalnans cat reshape diag blkdiag tril ' +
        'triu fliplr flipud flipdim rot90 find sub2ind ind2sub bsxfun ndgrid permute ipermute ' +
        'shiftdim circshift squeeze isscalar isvector ans eps realmax realmin pi i|0 inf nan ' +
        'isnan isinf isfinite j|0 why compan gallery hadamard hankel hilb invhilb magic pascal ' +
        'rosser toeplitz vander wilkinson max min nanmax nanmin mean nanmean type table ' +
        'readtable writetable sortrows sort figure plot plot3 scatter scatter3 cellfun ' +
        'legend intersect ismember procrustes hold num2cell '
    },
    illegal: '(//|"|#|/\\*|\\s+/\\w+)',
    contains: [
      {
        className: 'function',
        beginKeywords: 'function', end: '$',
        contains: [
          hljs.UNDERSCORE_TITLE_MODE,
          {
            className: 'params',
            variants: [
              {begin: '\\(', end: '\\)'},
              {begin: '\\[', end: '\\]'}
            ]
          }
        ]
      },
      {
        className: 'built_in',
        begin: /true|false/,
        relevance: 0,
        starts: TRANSPOSE
      },
      {
        begin: '[a-zA-Z][a-zA-Z_0-9]*' + TRANSPOSE_RE,
        relevance: 0
      },
      {
        className: 'number',
        begin: hljs.C_NUMBER_RE,
        relevance: 0,
        starts: TRANSPOSE
      },
      {
        className: 'string',
        begin: '\'', end: '\'',
        contains: [
          hljs.BACKSLASH_ESCAPE,
          {begin: '\'\''}]
      },
      {
        begin: /\]|\}|\)/,
        relevance: 0,
        starts: TRANSPOSE
      },
      {
        className: 'string',
        begin: '"', end: '"',
        contains: [
          hljs.BACKSLASH_ESCAPE,
          {begin: '""'}
        ],
        starts: TRANSPOSE
      },
      hljs.COMMENT('^\\s*%\\{\\s*$', '^\\s*%\\}\\s*$'),
      hljs.COMMENT('%', '$')
    ]
  };
}

module.exports = matlab;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL21hdGxhYi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUseUJBQXlCO0FBQ3hDLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxjQUFjO0FBQ3pCLE9BQU87QUFDUDtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLE9BQU87QUFDUCw2QkFBNkIsa0JBQWtCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvMTA2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBNYXRsYWJcbkF1dGhvcjogRGVuaXMgQmFyZGFkeW0gPGJhcmRhZHltY2hpa0BnbWFpbC5jb20+XG5Db250cmlidXRvcnM6IEV1Z2VuZSBOaXpoaWJpdHNreSA8bml6aGliaXRza3lAeWEucnU+LCBFZ29yIFJvZ292IDxlLnJvZ292QHBvc3RncmVzcHJvLnJ1PlxuV2Vic2l0ZTogaHR0cHM6Ly93d3cubWF0aHdvcmtzLmNvbS9wcm9kdWN0cy9tYXRsYWIuaHRtbFxuQ2F0ZWdvcnk6IHNjaWVudGlmaWNcbiovXG5cbi8qXG4gIEZvcm1hbCBzeW50YXggaXMgbm90IHB1Ymxpc2hlZCwgaGVscGZ1bCBsaW5rOlxuICBodHRwczovL2dpdGh1Yi5jb20va29ybmlsb3ZhLWwvbWF0bGFiLUludGVsbGlKLXBsdWdpbi9ibG9iL21hc3Rlci9zcmMvbWFpbi9ncmFtbWFyL01hdGxhYi5ibmZcbiovXG5mdW5jdGlvbiBtYXRsYWIoaGxqcykge1xuXG4gIHZhciBUUkFOU1BPU0VfUkUgPSAnKFxcJ3xcXFxcLlxcJykrJztcbiAgdmFyIFRSQU5TUE9TRSA9IHtcbiAgICByZWxldmFuY2U6IDAsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIHsgYmVnaW46IFRSQU5TUE9TRV9SRSB9XG4gICAgXVxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgbmFtZTogJ01hdGxhYicsXG4gICAga2V5d29yZHM6IHtcbiAgICAgIGtleXdvcmQ6XG4gICAgICAgICdhcmd1bWVudHMgYnJlYWsgY2FzZSBjYXRjaCBjbGFzc2RlZiBjb250aW51ZSBlbHNlIGVsc2VpZiBlbmQgZW51bWVyYXRpb24gZXZlbnRzIGZvciBmdW5jdGlvbiAnICtcbiAgICAgICAgJ2dsb2JhbCBpZiBtZXRob2RzIG90aGVyd2lzZSBwYXJmb3IgcGVyc2lzdGVudCBwcm9wZXJ0aWVzIHJldHVybiBzcG1kIHN3aXRjaCB0cnkgd2hpbGUnLFxuICAgICAgYnVpbHRfaW46XG4gICAgICAgICdzaW4gc2luZCBzaW5oIGFzaW4gYXNpbmQgYXNpbmggY29zIGNvc2QgY29zaCBhY29zIGFjb3NkIGFjb3NoIHRhbiB0YW5kIHRhbmggYXRhbiAnICtcbiAgICAgICAgJ2F0YW5kIGF0YW4yIGF0YW5oIHNlYyBzZWNkIHNlY2ggYXNlYyBhc2VjZCBhc2VjaCBjc2MgY3NjZCBjc2NoIGFjc2MgYWNzY2QgYWNzY2ggY290ICcgK1xuICAgICAgICAnY290ZCBjb3RoIGFjb3QgYWNvdGQgYWNvdGggaHlwb3QgZXhwIGV4cG0xIGxvZyBsb2cxcCBsb2cxMCBsb2cyIHBvdzIgcmVhbHBvdyByZWFsbG9nICcgK1xuICAgICAgICAncmVhbHNxcnQgc3FydCBudGhyb290IG5leHRwb3cyIGFicyBhbmdsZSBjb21wbGV4IGNvbmogaW1hZyByZWFsIHVud3JhcCBpc3JlYWwgJyArXG4gICAgICAgICdjcGx4cGFpciBmaXggZmxvb3IgY2VpbCByb3VuZCBtb2QgcmVtIHNpZ24gYWlyeSBiZXNzZWxqIGJlc3NlbHkgYmVzc2VsaCBiZXNzZWxpICcgK1xuICAgICAgICAnYmVzc2VsayBiZXRhIGJldGFpbmMgYmV0YWxuIGVsbGlwaiBlbGxpcGtlIGVyZiBlcmZjIGVyZmN4IGVyZmludiBleHBpbnQgZ2FtbWEgJyArXG4gICAgICAgICdnYW1tYWluYyBnYW1tYWxuIHBzaSBsZWdlbmRyZSBjcm9zcyBkb3QgZmFjdG9yIGlzcHJpbWUgcHJpbWVzIGdjZCBsY20gcmF0IHJhdHMgcGVybXMgJyArXG4gICAgICAgICduY2hvb3NlayBmYWN0b3JpYWwgY2FydDJzcGggY2FydDJwb2wgcG9sMmNhcnQgc3BoMmNhcnQgaHN2MnJnYiByZ2IyaHN2IHplcm9zIG9uZXMgJyArXG4gICAgICAgICdleWUgcmVwbWF0IHJhbmQgcmFuZG4gbGluc3BhY2UgbG9nc3BhY2UgZnJlcXNwYWNlIG1lc2hncmlkIGFjY3VtYXJyYXkgc2l6ZSBsZW5ndGggJyArXG4gICAgICAgICduZGltcyBudW1lbCBkaXNwIGlzZW1wdHkgaXNlcXVhbCBpc2VxdWFsd2l0aGVxdWFsbmFucyBjYXQgcmVzaGFwZSBkaWFnIGJsa2RpYWcgdHJpbCAnICtcbiAgICAgICAgJ3RyaXUgZmxpcGxyIGZsaXB1ZCBmbGlwZGltIHJvdDkwIGZpbmQgc3ViMmluZCBpbmQyc3ViIGJzeGZ1biBuZGdyaWQgcGVybXV0ZSBpcGVybXV0ZSAnICtcbiAgICAgICAgJ3NoaWZ0ZGltIGNpcmNzaGlmdCBzcXVlZXplIGlzc2NhbGFyIGlzdmVjdG9yIGFucyBlcHMgcmVhbG1heCByZWFsbWluIHBpIGl8MCBpbmYgbmFuICcgK1xuICAgICAgICAnaXNuYW4gaXNpbmYgaXNmaW5pdGUganwwIHdoeSBjb21wYW4gZ2FsbGVyeSBoYWRhbWFyZCBoYW5rZWwgaGlsYiBpbnZoaWxiIG1hZ2ljIHBhc2NhbCAnICtcbiAgICAgICAgJ3Jvc3NlciB0b2VwbGl0eiB2YW5kZXIgd2lsa2luc29uIG1heCBtaW4gbmFubWF4IG5hbm1pbiBtZWFuIG5hbm1lYW4gdHlwZSB0YWJsZSAnICtcbiAgICAgICAgJ3JlYWR0YWJsZSB3cml0ZXRhYmxlIHNvcnRyb3dzIHNvcnQgZmlndXJlIHBsb3QgcGxvdDMgc2NhdHRlciBzY2F0dGVyMyBjZWxsZnVuICcgK1xuICAgICAgICAnbGVnZW5kIGludGVyc2VjdCBpc21lbWJlciBwcm9jcnVzdGVzIGhvbGQgbnVtMmNlbGwgJ1xuICAgIH0sXG4gICAgaWxsZWdhbDogJygvL3xcInwjfC9cXFxcKnxcXFxccysvXFxcXHcrKScsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnZnVuY3Rpb24nLFxuICAgICAgICBiZWdpbktleXdvcmRzOiAnZnVuY3Rpb24nLCBlbmQ6ICckJyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICBobGpzLlVOREVSU0NPUkVfVElUTEVfTU9ERSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdwYXJhbXMnLFxuICAgICAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICAgICAge2JlZ2luOiAnXFxcXCgnLCBlbmQ6ICdcXFxcKSd9LFxuICAgICAgICAgICAgICB7YmVnaW46ICdcXFxcWycsIGVuZDogJ1xcXFxdJ31cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2J1aWx0X2luJyxcbiAgICAgICAgYmVnaW46IC90cnVlfGZhbHNlLyxcbiAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICBzdGFydHM6IFRSQU5TUE9TRVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICdbYS16QS1aXVthLXpBLVpfMC05XSonICsgVFJBTlNQT1NFX1JFLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgICAgIGJlZ2luOiBobGpzLkNfTlVNQkVSX1JFLFxuICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgIHN0YXJ0czogVFJBTlNQT1NFXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgICBiZWdpbjogJ1xcJycsIGVuZDogJ1xcJycsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgaGxqcy5CQUNLU0xBU0hfRVNDQVBFLFxuICAgICAgICAgIHtiZWdpbjogJ1xcJ1xcJyd9XVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IC9cXF18XFx9fFxcKS8sXG4gICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgc3RhcnRzOiBUUkFOU1BPU0VcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgICAgIGJlZ2luOiAnXCInLCBlbmQ6ICdcIicsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgaGxqcy5CQUNLU0xBU0hfRVNDQVBFLFxuICAgICAgICAgIHtiZWdpbjogJ1wiXCInfVxuICAgICAgICBdLFxuICAgICAgICBzdGFydHM6IFRSQU5TUE9TRVxuICAgICAgfSxcbiAgICAgIGhsanMuQ09NTUVOVCgnXlxcXFxzKiVcXFxce1xcXFxzKiQnLCAnXlxcXFxzKiVcXFxcfVxcXFxzKiQnKSxcbiAgICAgIGhsanMuQ09NTUVOVCgnJScsICckJylcbiAgICBdXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWF0bGFiO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==