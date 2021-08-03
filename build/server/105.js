exports.ids = [105];
exports.modules = {

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

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvbWF0bGFiLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUseUJBQXlCO0FBQ3hDLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxjQUFjO0FBQ3pCLE9BQU87QUFDUDtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLE9BQU87QUFDUCw2QkFBNkIsa0JBQWtCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6IjEwNS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5MYW5ndWFnZTogTWF0bGFiXG5BdXRob3I6IERlbmlzIEJhcmRhZHltIDxiYXJkYWR5bWNoaWtAZ21haWwuY29tPlxuQ29udHJpYnV0b3JzOiBFdWdlbmUgTml6aGliaXRza3kgPG5pemhpYml0c2t5QHlhLnJ1PiwgRWdvciBSb2dvdiA8ZS5yb2dvdkBwb3N0Z3Jlc3Byby5ydT5cbldlYnNpdGU6IGh0dHBzOi8vd3d3Lm1hdGh3b3Jrcy5jb20vcHJvZHVjdHMvbWF0bGFiLmh0bWxcbkNhdGVnb3J5OiBzY2llbnRpZmljXG4qL1xuXG4vKlxuICBGb3JtYWwgc3ludGF4IGlzIG5vdCBwdWJsaXNoZWQsIGhlbHBmdWwgbGluazpcbiAgaHR0cHM6Ly9naXRodWIuY29tL2tvcm5pbG92YS1sL21hdGxhYi1JbnRlbGxpSi1wbHVnaW4vYmxvYi9tYXN0ZXIvc3JjL21haW4vZ3JhbW1hci9NYXRsYWIuYm5mXG4qL1xuZnVuY3Rpb24gbWF0bGFiKGhsanMpIHtcblxuICB2YXIgVFJBTlNQT1NFX1JFID0gJyhcXCd8XFxcXC5cXCcpKyc7XG4gIHZhciBUUkFOU1BPU0UgPSB7XG4gICAgcmVsZXZhbmNlOiAwLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICB7IGJlZ2luOiBUUkFOU1BPU0VfUkUgfVxuICAgIF1cbiAgfTtcblxuICByZXR1cm4ge1xuICAgIG5hbWU6ICdNYXRsYWInLFxuICAgIGtleXdvcmRzOiB7XG4gICAgICBrZXl3b3JkOlxuICAgICAgICAnYXJndW1lbnRzIGJyZWFrIGNhc2UgY2F0Y2ggY2xhc3NkZWYgY29udGludWUgZWxzZSBlbHNlaWYgZW5kIGVudW1lcmF0aW9uIGV2ZW50cyBmb3IgZnVuY3Rpb24gJyArXG4gICAgICAgICdnbG9iYWwgaWYgbWV0aG9kcyBvdGhlcndpc2UgcGFyZm9yIHBlcnNpc3RlbnQgcHJvcGVydGllcyByZXR1cm4gc3BtZCBzd2l0Y2ggdHJ5IHdoaWxlJyxcbiAgICAgIGJ1aWx0X2luOlxuICAgICAgICAnc2luIHNpbmQgc2luaCBhc2luIGFzaW5kIGFzaW5oIGNvcyBjb3NkIGNvc2ggYWNvcyBhY29zZCBhY29zaCB0YW4gdGFuZCB0YW5oIGF0YW4gJyArXG4gICAgICAgICdhdGFuZCBhdGFuMiBhdGFuaCBzZWMgc2VjZCBzZWNoIGFzZWMgYXNlY2QgYXNlY2ggY3NjIGNzY2QgY3NjaCBhY3NjIGFjc2NkIGFjc2NoIGNvdCAnICtcbiAgICAgICAgJ2NvdGQgY290aCBhY290IGFjb3RkIGFjb3RoIGh5cG90IGV4cCBleHBtMSBsb2cgbG9nMXAgbG9nMTAgbG9nMiBwb3cyIHJlYWxwb3cgcmVhbGxvZyAnICtcbiAgICAgICAgJ3JlYWxzcXJ0IHNxcnQgbnRocm9vdCBuZXh0cG93MiBhYnMgYW5nbGUgY29tcGxleCBjb25qIGltYWcgcmVhbCB1bndyYXAgaXNyZWFsICcgK1xuICAgICAgICAnY3BseHBhaXIgZml4IGZsb29yIGNlaWwgcm91bmQgbW9kIHJlbSBzaWduIGFpcnkgYmVzc2VsaiBiZXNzZWx5IGJlc3NlbGggYmVzc2VsaSAnICtcbiAgICAgICAgJ2Jlc3NlbGsgYmV0YSBiZXRhaW5jIGJldGFsbiBlbGxpcGogZWxsaXBrZSBlcmYgZXJmYyBlcmZjeCBlcmZpbnYgZXhwaW50IGdhbW1hICcgK1xuICAgICAgICAnZ2FtbWFpbmMgZ2FtbWFsbiBwc2kgbGVnZW5kcmUgY3Jvc3MgZG90IGZhY3RvciBpc3ByaW1lIHByaW1lcyBnY2QgbGNtIHJhdCByYXRzIHBlcm1zICcgK1xuICAgICAgICAnbmNob29zZWsgZmFjdG9yaWFsIGNhcnQyc3BoIGNhcnQycG9sIHBvbDJjYXJ0IHNwaDJjYXJ0IGhzdjJyZ2IgcmdiMmhzdiB6ZXJvcyBvbmVzICcgK1xuICAgICAgICAnZXllIHJlcG1hdCByYW5kIHJhbmRuIGxpbnNwYWNlIGxvZ3NwYWNlIGZyZXFzcGFjZSBtZXNoZ3JpZCBhY2N1bWFycmF5IHNpemUgbGVuZ3RoICcgK1xuICAgICAgICAnbmRpbXMgbnVtZWwgZGlzcCBpc2VtcHR5IGlzZXF1YWwgaXNlcXVhbHdpdGhlcXVhbG5hbnMgY2F0IHJlc2hhcGUgZGlhZyBibGtkaWFnIHRyaWwgJyArXG4gICAgICAgICd0cml1IGZsaXBsciBmbGlwdWQgZmxpcGRpbSByb3Q5MCBmaW5kIHN1YjJpbmQgaW5kMnN1YiBic3hmdW4gbmRncmlkIHBlcm11dGUgaXBlcm11dGUgJyArXG4gICAgICAgICdzaGlmdGRpbSBjaXJjc2hpZnQgc3F1ZWV6ZSBpc3NjYWxhciBpc3ZlY3RvciBhbnMgZXBzIHJlYWxtYXggcmVhbG1pbiBwaSBpfDAgaW5mIG5hbiAnICtcbiAgICAgICAgJ2lzbmFuIGlzaW5mIGlzZmluaXRlIGp8MCB3aHkgY29tcGFuIGdhbGxlcnkgaGFkYW1hcmQgaGFua2VsIGhpbGIgaW52aGlsYiBtYWdpYyBwYXNjYWwgJyArXG4gICAgICAgICdyb3NzZXIgdG9lcGxpdHogdmFuZGVyIHdpbGtpbnNvbiBtYXggbWluIG5hbm1heCBuYW5taW4gbWVhbiBuYW5tZWFuIHR5cGUgdGFibGUgJyArXG4gICAgICAgICdyZWFkdGFibGUgd3JpdGV0YWJsZSBzb3J0cm93cyBzb3J0IGZpZ3VyZSBwbG90IHBsb3QzIHNjYXR0ZXIgc2NhdHRlcjMgY2VsbGZ1biAnICtcbiAgICAgICAgJ2xlZ2VuZCBpbnRlcnNlY3QgaXNtZW1iZXIgcHJvY3J1c3RlcyBob2xkIG51bTJjZWxsICdcbiAgICB9LFxuICAgIGlsbGVnYWw6ICcoLy98XCJ8I3wvXFxcXCp8XFxcXHMrL1xcXFx3KyknLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2Z1bmN0aW9uJyxcbiAgICAgICAgYmVnaW5LZXl3b3JkczogJ2Z1bmN0aW9uJywgZW5kOiAnJCcsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgaGxqcy5VTkRFUlNDT1JFX1RJVExFX01PREUsXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAncGFyYW1zJyxcbiAgICAgICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAgICAgIHtiZWdpbjogJ1xcXFwoJywgZW5kOiAnXFxcXCknfSxcbiAgICAgICAgICAgICAge2JlZ2luOiAnXFxcXFsnLCBlbmQ6ICdcXFxcXSd9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdidWlsdF9pbicsXG4gICAgICAgIGJlZ2luOiAvdHJ1ZXxmYWxzZS8sXG4gICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgc3RhcnRzOiBUUkFOU1BPU0VcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnW2EtekEtWl1bYS16QS1aXzAtOV0qJyArIFRSQU5TUE9TRV9SRSxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdudW1iZXInLFxuICAgICAgICBiZWdpbjogaGxqcy5DX05VTUJFUl9SRSxcbiAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICBzdGFydHM6IFRSQU5TUE9TRVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICAgICAgYmVnaW46ICdcXCcnLCBlbmQ6ICdcXCcnLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIGhsanMuQkFDS1NMQVNIX0VTQ0FQRSxcbiAgICAgICAgICB7YmVnaW46ICdcXCdcXCcnfV1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAvXFxdfFxcfXxcXCkvLFxuICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgIHN0YXJ0czogVFJBTlNQT1NFXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgICBiZWdpbjogJ1wiJywgZW5kOiAnXCInLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIGhsanMuQkFDS1NMQVNIX0VTQ0FQRSxcbiAgICAgICAgICB7YmVnaW46ICdcIlwiJ31cbiAgICAgICAgXSxcbiAgICAgICAgc3RhcnRzOiBUUkFOU1BPU0VcbiAgICAgIH0sXG4gICAgICBobGpzLkNPTU1FTlQoJ15cXFxccyolXFxcXHtcXFxccyokJywgJ15cXFxccyolXFxcXH1cXFxccyokJyksXG4gICAgICBobGpzLkNPTU1FTlQoJyUnLCAnJCcpXG4gICAgXVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hdGxhYjtcbiJdLCJzb3VyY2VSb290IjoiIn0=