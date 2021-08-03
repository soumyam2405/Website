(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[123],{

/***/ "./node_modules/highlight.js/lib/languages/openscad.js":
/*!*************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/openscad.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: OpenSCAD
Author: Dan Panzarella <alsoelp@gmail.com>
Description: OpenSCAD is a language for the 3D CAD modeling software of the same name.
Website: https://www.openscad.org
Category: scientific
*/

function openscad(hljs) {
  const SPECIAL_VARS = {
    className: 'keyword',
    begin: '\\$(f[asn]|t|vp[rtd]|children)'
  };
  const LITERALS = {
    className: 'literal',
    begin: 'false|true|PI|undef'
  };
  const NUMBERS = {
    className: 'number',
    begin: '\\b\\d+(\\.\\d+)?(e-?\\d+)?', // adds 1e5, 1e-10
    relevance: 0
  };
  const STRING = hljs.inherit(hljs.QUOTE_STRING_MODE, {
    illegal: null
  });
  const PREPRO = {
    className: 'meta',
    keywords: {
      'meta-keyword': 'include use'
    },
    begin: 'include|use <',
    end: '>'
  };
  const PARAMS = {
    className: 'params',
    begin: '\\(',
    end: '\\)',
    contains: [
      'self',
      NUMBERS,
      STRING,
      SPECIAL_VARS,
      LITERALS
    ]
  };
  const MODIFIERS = {
    begin: '[*!#%]',
    relevance: 0
  };
  const FUNCTIONS = {
    className: 'function',
    beginKeywords: 'module function',
    end: /=|\{/,
    contains: [
      PARAMS,
      hljs.UNDERSCORE_TITLE_MODE
    ]
  };

  return {
    name: 'OpenSCAD',
    aliases: [ 'scad' ],
    keywords: {
      keyword: 'function module include use for intersection_for if else \\%',
      literal: 'false true PI undef',
      built_in: 'circle square polygon text sphere cube cylinder polyhedron translate rotate scale resize mirror multmatrix color offset hull minkowski union difference intersection abs sign sin cos tan acos asin atan atan2 floor round ceil ln log pow sqrt exp rands min max concat lookup str chr search version version_num norm cross parent_module echo import import_dxf dxf_linear_extrude linear_extrude rotate_extrude surface projection render children dxf_cross dxf_dim let assign'
    },
    contains: [
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      NUMBERS,
      PREPRO,
      STRING,
      SPECIAL_VARS,
      MODIFIERS,
      FUNCTIONS
    ]
  };
}

module.exports = openscad;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL29wZW5zY2FkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvMTIzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBPcGVuU0NBRFxuQXV0aG9yOiBEYW4gUGFuemFyZWxsYSA8YWxzb2VscEBnbWFpbC5jb20+XG5EZXNjcmlwdGlvbjogT3BlblNDQUQgaXMgYSBsYW5ndWFnZSBmb3IgdGhlIDNEIENBRCBtb2RlbGluZyBzb2Z0d2FyZSBvZiB0aGUgc2FtZSBuYW1lLlxuV2Vic2l0ZTogaHR0cHM6Ly93d3cub3BlbnNjYWQub3JnXG5DYXRlZ29yeTogc2NpZW50aWZpY1xuKi9cblxuZnVuY3Rpb24gb3BlbnNjYWQoaGxqcykge1xuICBjb25zdCBTUEVDSUFMX1ZBUlMgPSB7XG4gICAgY2xhc3NOYW1lOiAna2V5d29yZCcsXG4gICAgYmVnaW46ICdcXFxcJChmW2Fzbl18dHx2cFtydGRdfGNoaWxkcmVuKSdcbiAgfTtcbiAgY29uc3QgTElURVJBTFMgPSB7XG4gICAgY2xhc3NOYW1lOiAnbGl0ZXJhbCcsXG4gICAgYmVnaW46ICdmYWxzZXx0cnVlfFBJfHVuZGVmJ1xuICB9O1xuICBjb25zdCBOVU1CRVJTID0ge1xuICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgYmVnaW46ICdcXFxcYlxcXFxkKyhcXFxcLlxcXFxkKyk/KGUtP1xcXFxkKyk/JywgLy8gYWRkcyAxZTUsIDFlLTEwXG4gICAgcmVsZXZhbmNlOiAwXG4gIH07XG4gIGNvbnN0IFNUUklORyA9IGhsanMuaW5oZXJpdChobGpzLlFVT1RFX1NUUklOR19NT0RFLCB7XG4gICAgaWxsZWdhbDogbnVsbFxuICB9KTtcbiAgY29uc3QgUFJFUFJPID0ge1xuICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgIGtleXdvcmRzOiB7XG4gICAgICAnbWV0YS1rZXl3b3JkJzogJ2luY2x1ZGUgdXNlJ1xuICAgIH0sXG4gICAgYmVnaW46ICdpbmNsdWRlfHVzZSA8JyxcbiAgICBlbmQ6ICc+J1xuICB9O1xuICBjb25zdCBQQVJBTVMgPSB7XG4gICAgY2xhc3NOYW1lOiAncGFyYW1zJyxcbiAgICBiZWdpbjogJ1xcXFwoJyxcbiAgICBlbmQ6ICdcXFxcKScsXG4gICAgY29udGFpbnM6IFtcbiAgICAgICdzZWxmJyxcbiAgICAgIE5VTUJFUlMsXG4gICAgICBTVFJJTkcsXG4gICAgICBTUEVDSUFMX1ZBUlMsXG4gICAgICBMSVRFUkFMU1xuICAgIF1cbiAgfTtcbiAgY29uc3QgTU9ESUZJRVJTID0ge1xuICAgIGJlZ2luOiAnWyohIyVdJyxcbiAgICByZWxldmFuY2U6IDBcbiAgfTtcbiAgY29uc3QgRlVOQ1RJT05TID0ge1xuICAgIGNsYXNzTmFtZTogJ2Z1bmN0aW9uJyxcbiAgICBiZWdpbktleXdvcmRzOiAnbW9kdWxlIGZ1bmN0aW9uJyxcbiAgICBlbmQ6IC89fFxcey8sXG4gICAgY29udGFpbnM6IFtcbiAgICAgIFBBUkFNUyxcbiAgICAgIGhsanMuVU5ERVJTQ09SRV9USVRMRV9NT0RFXG4gICAgXVxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgbmFtZTogJ09wZW5TQ0FEJyxcbiAgICBhbGlhc2VzOiBbICdzY2FkJyBdLFxuICAgIGtleXdvcmRzOiB7XG4gICAgICBrZXl3b3JkOiAnZnVuY3Rpb24gbW9kdWxlIGluY2x1ZGUgdXNlIGZvciBpbnRlcnNlY3Rpb25fZm9yIGlmIGVsc2UgXFxcXCUnLFxuICAgICAgbGl0ZXJhbDogJ2ZhbHNlIHRydWUgUEkgdW5kZWYnLFxuICAgICAgYnVpbHRfaW46ICdjaXJjbGUgc3F1YXJlIHBvbHlnb24gdGV4dCBzcGhlcmUgY3ViZSBjeWxpbmRlciBwb2x5aGVkcm9uIHRyYW5zbGF0ZSByb3RhdGUgc2NhbGUgcmVzaXplIG1pcnJvciBtdWx0bWF0cml4IGNvbG9yIG9mZnNldCBodWxsIG1pbmtvd3NraSB1bmlvbiBkaWZmZXJlbmNlIGludGVyc2VjdGlvbiBhYnMgc2lnbiBzaW4gY29zIHRhbiBhY29zIGFzaW4gYXRhbiBhdGFuMiBmbG9vciByb3VuZCBjZWlsIGxuIGxvZyBwb3cgc3FydCBleHAgcmFuZHMgbWluIG1heCBjb25jYXQgbG9va3VwIHN0ciBjaHIgc2VhcmNoIHZlcnNpb24gdmVyc2lvbl9udW0gbm9ybSBjcm9zcyBwYXJlbnRfbW9kdWxlIGVjaG8gaW1wb3J0IGltcG9ydF9keGYgZHhmX2xpbmVhcl9leHRydWRlIGxpbmVhcl9leHRydWRlIHJvdGF0ZV9leHRydWRlIHN1cmZhY2UgcHJvamVjdGlvbiByZW5kZXIgY2hpbGRyZW4gZHhmX2Nyb3NzIGR4Zl9kaW0gbGV0IGFzc2lnbidcbiAgICB9LFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBobGpzLkNfTElORV9DT01NRU5UX01PREUsXG4gICAgICBobGpzLkNfQkxPQ0tfQ09NTUVOVF9NT0RFLFxuICAgICAgTlVNQkVSUyxcbiAgICAgIFBSRVBSTyxcbiAgICAgIFNUUklORyxcbiAgICAgIFNQRUNJQUxfVkFSUyxcbiAgICAgIE1PRElGSUVSUyxcbiAgICAgIEZVTkNUSU9OU1xuICAgIF1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvcGVuc2NhZDtcbiJdLCJzb3VyY2VSb290IjoiIn0=