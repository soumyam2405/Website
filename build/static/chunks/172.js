(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[172],{

/***/ "./node_modules/highlight.js/lib/languages/taggerscript.js":
/*!*****************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/taggerscript.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Tagger Script
Author: Philipp Wolfer <ph.wolfer@gmail.com>
Description: Syntax Highlighting for the Tagger Script as used by MusicBrainz Picard.
Website: https://picard.musicbrainz.org
 */
function taggerscript(hljs) {
  const COMMENT = {
    className: 'comment',
    begin: /\$noop\(/,
    end: /\)/,
    contains: [ {
      begin: /\(/,
      end: /\)/,
      contains: [ 'self',
        {
          begin: /\\./
        } ]
    } ],
    relevance: 10
  };

  const FUNCTION = {
    className: 'keyword',
    begin: /\$(?!noop)[a-zA-Z][_a-zA-Z0-9]*/,
    end: /\(/,
    excludeEnd: true
  };

  const VARIABLE = {
    className: 'variable',
    begin: /%[_a-zA-Z0-9:]*/,
    end: '%'
  };

  const ESCAPE_SEQUENCE = {
    className: 'symbol',
    begin: /\\./
  };

  return {
    name: 'Tagger Script',
    contains: [
      COMMENT,
      FUNCTION,
      VARIABLE,
      ESCAPE_SEQUENCE
    ]
  };
}

module.exports = taggerscript;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3RhZ2dlcnNjcmlwdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvMTcyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBUYWdnZXIgU2NyaXB0XG5BdXRob3I6IFBoaWxpcHAgV29sZmVyIDxwaC53b2xmZXJAZ21haWwuY29tPlxuRGVzY3JpcHRpb246IFN5bnRheCBIaWdobGlnaHRpbmcgZm9yIHRoZSBUYWdnZXIgU2NyaXB0IGFzIHVzZWQgYnkgTXVzaWNCcmFpbnogUGljYXJkLlxuV2Vic2l0ZTogaHR0cHM6Ly9waWNhcmQubXVzaWNicmFpbnoub3JnXG4gKi9cbmZ1bmN0aW9uIHRhZ2dlcnNjcmlwdChobGpzKSB7XG4gIGNvbnN0IENPTU1FTlQgPSB7XG4gICAgY2xhc3NOYW1lOiAnY29tbWVudCcsXG4gICAgYmVnaW46IC9cXCRub29wXFwoLyxcbiAgICBlbmQ6IC9cXCkvLFxuICAgIGNvbnRhaW5zOiBbIHtcbiAgICAgIGJlZ2luOiAvXFwoLyxcbiAgICAgIGVuZDogL1xcKS8sXG4gICAgICBjb250YWluczogWyAnc2VsZicsXG4gICAgICAgIHtcbiAgICAgICAgICBiZWdpbjogL1xcXFwuL1xuICAgICAgICB9IF1cbiAgICB9IF0sXG4gICAgcmVsZXZhbmNlOiAxMFxuICB9O1xuXG4gIGNvbnN0IEZVTkNUSU9OID0ge1xuICAgIGNsYXNzTmFtZTogJ2tleXdvcmQnLFxuICAgIGJlZ2luOiAvXFwkKD8hbm9vcClbYS16QS1aXVtfYS16QS1aMC05XSovLFxuICAgIGVuZDogL1xcKC8sXG4gICAgZXhjbHVkZUVuZDogdHJ1ZVxuICB9O1xuXG4gIGNvbnN0IFZBUklBQkxFID0ge1xuICAgIGNsYXNzTmFtZTogJ3ZhcmlhYmxlJyxcbiAgICBiZWdpbjogLyVbX2EtekEtWjAtOTpdKi8sXG4gICAgZW5kOiAnJSdcbiAgfTtcblxuICBjb25zdCBFU0NBUEVfU0VRVUVOQ0UgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3ltYm9sJyxcbiAgICBiZWdpbjogL1xcXFwuL1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgbmFtZTogJ1RhZ2dlciBTY3JpcHQnLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBDT01NRU5ULFxuICAgICAgRlVOQ1RJT04sXG4gICAgICBWQVJJQUJMRSxcbiAgICAgIEVTQ0FQRV9TRVFVRU5DRVxuICAgIF1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0YWdnZXJzY3JpcHQ7XG4iXSwic291cmNlUm9vdCI6IiJ9