(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[157],{

/***/ "./node_modules/highlight.js/lib/languages/scilab.js":
/*!***********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/scilab.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Scilab
Author: Sylvestre Ledru <sylvestre.ledru@scilab-enterprises.com>
Origin: matlab.js
Description: Scilab is a port from Matlab
Website: https://www.scilab.org
Category: scientific
*/

function scilab(hljs) {
  const COMMON_CONTAINS = [
    hljs.C_NUMBER_MODE,
    {
      className: 'string',
      begin: '\'|\"',
      end: '\'|\"',
      contains: [ hljs.BACKSLASH_ESCAPE,
        {
          begin: '\'\''
        } ]
    }
  ];

  return {
    name: 'Scilab',
    aliases: [ 'sci' ],
    keywords: {
      $pattern: /%?\w+/,
      keyword: 'abort break case clear catch continue do elseif else endfunction end for function ' +
        'global if pause return resume select try then while',
      literal:
        '%f %F %t %T %pi %eps %inf %nan %e %i %z %s',
      built_in: // Scilab has more than 2000 functions. Just list the most commons
       'abs and acos asin atan ceil cd chdir clearglobal cosh cos cumprod deff disp error ' +
       'exec execstr exists exp eye gettext floor fprintf fread fsolve imag isdef isempty ' +
       'isinfisnan isvector lasterror length load linspace list listfiles log10 log2 log ' +
       'max min msprintf mclose mopen ones or pathconvert poly printf prod pwd rand real ' +
       'round sinh sin size gsort sprintf sqrt strcat strcmps tring sum system tanh tan ' +
       'type typename warning zeros matrix'
    },
    illegal: '("|#|/\\*|\\s+/\\w+)',
    contains: [
      {
        className: 'function',
        beginKeywords: 'function',
        end: '$',
        contains: [
          hljs.UNDERSCORE_TITLE_MODE,
          {
            className: 'params',
            begin: '\\(',
            end: '\\)'
          }
        ]
      },
      // seems to be a guard against [ident]' or [ident].
      // perhaps to prevent attributes from flagging as keywords?
      {
        begin: '[a-zA-Z_][a-zA-Z_0-9]*[\\.\']+',
        relevance: 0
      },
      {
        begin: '\\[',
        end: '\\][\\.\']*',
        relevance: 0,
        contains: COMMON_CONTAINS
      },
      hljs.COMMENT('//', '$')
    ].concat(COMMON_CONTAINS)
  };
}

module.exports = scilab;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3NjaWxhYi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoic3RhdGljL2NodW5rcy8xNTcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuTGFuZ3VhZ2U6IFNjaWxhYlxuQXV0aG9yOiBTeWx2ZXN0cmUgTGVkcnUgPHN5bHZlc3RyZS5sZWRydUBzY2lsYWItZW50ZXJwcmlzZXMuY29tPlxuT3JpZ2luOiBtYXRsYWIuanNcbkRlc2NyaXB0aW9uOiBTY2lsYWIgaXMgYSBwb3J0IGZyb20gTWF0bGFiXG5XZWJzaXRlOiBodHRwczovL3d3dy5zY2lsYWIub3JnXG5DYXRlZ29yeTogc2NpZW50aWZpY1xuKi9cblxuZnVuY3Rpb24gc2NpbGFiKGhsanMpIHtcbiAgY29uc3QgQ09NTU9OX0NPTlRBSU5TID0gW1xuICAgIGhsanMuQ19OVU1CRVJfTU9ERSxcbiAgICB7XG4gICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgYmVnaW46ICdcXCd8XFxcIicsXG4gICAgICBlbmQ6ICdcXCd8XFxcIicsXG4gICAgICBjb250YWluczogWyBobGpzLkJBQ0tTTEFTSF9FU0NBUEUsXG4gICAgICAgIHtcbiAgICAgICAgICBiZWdpbjogJ1xcJ1xcJydcbiAgICAgICAgfSBdXG4gICAgfVxuICBdO1xuXG4gIHJldHVybiB7XG4gICAgbmFtZTogJ1NjaWxhYicsXG4gICAgYWxpYXNlczogWyAnc2NpJyBdLFxuICAgIGtleXdvcmRzOiB7XG4gICAgICAkcGF0dGVybjogLyU/XFx3Ky8sXG4gICAgICBrZXl3b3JkOiAnYWJvcnQgYnJlYWsgY2FzZSBjbGVhciBjYXRjaCBjb250aW51ZSBkbyBlbHNlaWYgZWxzZSBlbmRmdW5jdGlvbiBlbmQgZm9yIGZ1bmN0aW9uICcgK1xuICAgICAgICAnZ2xvYmFsIGlmIHBhdXNlIHJldHVybiByZXN1bWUgc2VsZWN0IHRyeSB0aGVuIHdoaWxlJyxcbiAgICAgIGxpdGVyYWw6XG4gICAgICAgICclZiAlRiAldCAlVCAlcGkgJWVwcyAlaW5mICVuYW4gJWUgJWkgJXogJXMnLFxuICAgICAgYnVpbHRfaW46IC8vIFNjaWxhYiBoYXMgbW9yZSB0aGFuIDIwMDAgZnVuY3Rpb25zLiBKdXN0IGxpc3QgdGhlIG1vc3QgY29tbW9uc1xuICAgICAgICdhYnMgYW5kIGFjb3MgYXNpbiBhdGFuIGNlaWwgY2QgY2hkaXIgY2xlYXJnbG9iYWwgY29zaCBjb3MgY3VtcHJvZCBkZWZmIGRpc3AgZXJyb3IgJyArXG4gICAgICAgJ2V4ZWMgZXhlY3N0ciBleGlzdHMgZXhwIGV5ZSBnZXR0ZXh0IGZsb29yIGZwcmludGYgZnJlYWQgZnNvbHZlIGltYWcgaXNkZWYgaXNlbXB0eSAnICtcbiAgICAgICAnaXNpbmZpc25hbiBpc3ZlY3RvciBsYXN0ZXJyb3IgbGVuZ3RoIGxvYWQgbGluc3BhY2UgbGlzdCBsaXN0ZmlsZXMgbG9nMTAgbG9nMiBsb2cgJyArXG4gICAgICAgJ21heCBtaW4gbXNwcmludGYgbWNsb3NlIG1vcGVuIG9uZXMgb3IgcGF0aGNvbnZlcnQgcG9seSBwcmludGYgcHJvZCBwd2QgcmFuZCByZWFsICcgK1xuICAgICAgICdyb3VuZCBzaW5oIHNpbiBzaXplIGdzb3J0IHNwcmludGYgc3FydCBzdHJjYXQgc3RyY21wcyB0cmluZyBzdW0gc3lzdGVtIHRhbmggdGFuICcgK1xuICAgICAgICd0eXBlIHR5cGVuYW1lIHdhcm5pbmcgemVyb3MgbWF0cml4J1xuICAgIH0sXG4gICAgaWxsZWdhbDogJyhcInwjfC9cXFxcKnxcXFxccysvXFxcXHcrKScsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnZnVuY3Rpb24nLFxuICAgICAgICBiZWdpbktleXdvcmRzOiAnZnVuY3Rpb24nLFxuICAgICAgICBlbmQ6ICckJyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICBobGpzLlVOREVSU0NPUkVfVElUTEVfTU9ERSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdwYXJhbXMnLFxuICAgICAgICAgICAgYmVnaW46ICdcXFxcKCcsXG4gICAgICAgICAgICBlbmQ6ICdcXFxcKSdcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICAvLyBzZWVtcyB0byBiZSBhIGd1YXJkIGFnYWluc3QgW2lkZW50XScgb3IgW2lkZW50XS5cbiAgICAgIC8vIHBlcmhhcHMgdG8gcHJldmVudCBhdHRyaWJ1dGVzIGZyb20gZmxhZ2dpbmcgYXMga2V5d29yZHM/XG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnW2EtekEtWl9dW2EtekEtWl8wLTldKltcXFxcLlxcJ10rJyxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogJ1xcXFxbJyxcbiAgICAgICAgZW5kOiAnXFxcXF1bXFxcXC5cXCddKicsXG4gICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgY29udGFpbnM6IENPTU1PTl9DT05UQUlOU1xuICAgICAgfSxcbiAgICAgIGhsanMuQ09NTUVOVCgnLy8nLCAnJCcpXG4gICAgXS5jb25jYXQoQ09NTU9OX0NPTlRBSU5TKVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNjaWxhYjtcbiJdLCJzb3VyY2VSb290IjoiIn0=