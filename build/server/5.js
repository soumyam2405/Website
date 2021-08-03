exports.ids = [5];
exports.modules = {

/***/ "./node_modules/highlight.js/lib/languages/angelscript.js":
/*!****************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/angelscript.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: AngelScript
Author: Melissa Geels <melissa@nimble.tools>
Category: scripting
Website: https://www.angelcode.com/angelscript/
*/

/** @type LanguageFn */
function angelscript(hljs) {
  var builtInTypeMode = {
    className: 'built_in',
    begin: '\\b(void|bool|int|int8|int16|int32|int64|uint|uint8|uint16|uint32|uint64|string|ref|array|double|float|auto|dictionary)'
  };

  var objectHandleMode = {
    className: 'symbol',
    begin: '[a-zA-Z0-9_]+@'
  };

  var genericMode = {
    className: 'keyword',
    begin: '<', end: '>',
    contains: [ builtInTypeMode, objectHandleMode ]
  };

  builtInTypeMode.contains = [ genericMode ];
  objectHandleMode.contains = [ genericMode ];

  return {
    name: 'AngelScript',
    aliases: ['asc'],

    keywords:
      'for in|0 break continue while do|0 return if else case switch namespace is cast ' +
      'or and xor not get|0 in inout|10 out override set|0 private public const default|0 ' +
      'final shared external mixin|10 enum typedef funcdef this super import from interface ' +
      'abstract|0 try catch protected explicit property',

    // avoid close detection with C# and JS
    illegal: '(^using\\s+[A-Za-z0-9_\\.]+;$|\\bfunction\\s*[^\\(])',

    contains: [
      { // 'strings'
        className: 'string',
        begin: '\'', end: '\'',
        illegal: '\\n',
        contains: [ hljs.BACKSLASH_ESCAPE ],
        relevance: 0
      },

      // """heredoc strings"""
      {
        className: 'string',
        begin: '"""', end: '"""'
      },

      { // "strings"
        className: 'string',
        begin: '"', end: '"',
        illegal: '\\n',
        contains: [ hljs.BACKSLASH_ESCAPE ],
        relevance: 0
      },

      hljs.C_LINE_COMMENT_MODE, // single-line comments
      hljs.C_BLOCK_COMMENT_MODE, // comment blocks

      { // metadata
        className: 'string',
        begin: '^\\s*\\[', end: '\\]',
      },

      { // interface or namespace declaration
        beginKeywords: 'interface namespace', end: /\{/,
        illegal: '[;.\\-]',
        contains: [
          { // interface or namespace name
            className: 'symbol',
            begin: '[a-zA-Z0-9_]+'
          }
        ]
      },

      { // class declaration
        beginKeywords: 'class', end: /\{/,
        illegal: '[;.\\-]',
        contains: [
          { // class name
            className: 'symbol',
            begin: '[a-zA-Z0-9_]+',
            contains: [
              {
                begin: '[:,]\\s*',
                contains: [
                  {
                    className: 'symbol',
                    begin: '[a-zA-Z0-9_]+'
                  }
                ]
              }
            ]
          }
        ]
      },

      builtInTypeMode, // built-in types
      objectHandleMode, // object handles

      { // literals
        className: 'literal',
        begin: '\\b(null|true|false)'
      },

      { // numbers
        className: 'number',
        relevance: 0,
        begin: '(-?)(\\b0[xXbBoOdD][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?f?|\\.\\d+f?)([eE][-+]?\\d+f?)?)'
      }
    ]
  };
}

module.exports = angelscript;


/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvYW5nZWxzY3JpcHQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMENBQTBDOztBQUUxQztBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVAsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7O0FBRUEsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPOztBQUVQLE9BQU87QUFDUCxzREFBc0Q7QUFDdEQsb0JBQW9CO0FBQ3BCO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUCxPQUFPO0FBQ1Asd0NBQXdDO0FBQ3hDLG9CQUFvQjtBQUNwQjtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7O0FBRUEsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPOztBQUVQLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBBbmdlbFNjcmlwdFxuQXV0aG9yOiBNZWxpc3NhIEdlZWxzIDxtZWxpc3NhQG5pbWJsZS50b29scz5cbkNhdGVnb3J5OiBzY3JpcHRpbmdcbldlYnNpdGU6IGh0dHBzOi8vd3d3LmFuZ2VsY29kZS5jb20vYW5nZWxzY3JpcHQvXG4qL1xuXG4vKiogQHR5cGUgTGFuZ3VhZ2VGbiAqL1xuZnVuY3Rpb24gYW5nZWxzY3JpcHQoaGxqcykge1xuICB2YXIgYnVpbHRJblR5cGVNb2RlID0ge1xuICAgIGNsYXNzTmFtZTogJ2J1aWx0X2luJyxcbiAgICBiZWdpbjogJ1xcXFxiKHZvaWR8Ym9vbHxpbnR8aW50OHxpbnQxNnxpbnQzMnxpbnQ2NHx1aW50fHVpbnQ4fHVpbnQxNnx1aW50MzJ8dWludDY0fHN0cmluZ3xyZWZ8YXJyYXl8ZG91YmxlfGZsb2F0fGF1dG98ZGljdGlvbmFyeSknXG4gIH07XG5cbiAgdmFyIG9iamVjdEhhbmRsZU1vZGUgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3ltYm9sJyxcbiAgICBiZWdpbjogJ1thLXpBLVowLTlfXStAJ1xuICB9O1xuXG4gIHZhciBnZW5lcmljTW9kZSA9IHtcbiAgICBjbGFzc05hbWU6ICdrZXl3b3JkJyxcbiAgICBiZWdpbjogJzwnLCBlbmQ6ICc+JyxcbiAgICBjb250YWluczogWyBidWlsdEluVHlwZU1vZGUsIG9iamVjdEhhbmRsZU1vZGUgXVxuICB9O1xuXG4gIGJ1aWx0SW5UeXBlTW9kZS5jb250YWlucyA9IFsgZ2VuZXJpY01vZGUgXTtcbiAgb2JqZWN0SGFuZGxlTW9kZS5jb250YWlucyA9IFsgZ2VuZXJpY01vZGUgXTtcblxuICByZXR1cm4ge1xuICAgIG5hbWU6ICdBbmdlbFNjcmlwdCcsXG4gICAgYWxpYXNlczogWydhc2MnXSxcblxuICAgIGtleXdvcmRzOlxuICAgICAgJ2ZvciBpbnwwIGJyZWFrIGNvbnRpbnVlIHdoaWxlIGRvfDAgcmV0dXJuIGlmIGVsc2UgY2FzZSBzd2l0Y2ggbmFtZXNwYWNlIGlzIGNhc3QgJyArXG4gICAgICAnb3IgYW5kIHhvciBub3QgZ2V0fDAgaW4gaW5vdXR8MTAgb3V0IG92ZXJyaWRlIHNldHwwIHByaXZhdGUgcHVibGljIGNvbnN0IGRlZmF1bHR8MCAnICtcbiAgICAgICdmaW5hbCBzaGFyZWQgZXh0ZXJuYWwgbWl4aW58MTAgZW51bSB0eXBlZGVmIGZ1bmNkZWYgdGhpcyBzdXBlciBpbXBvcnQgZnJvbSBpbnRlcmZhY2UgJyArXG4gICAgICAnYWJzdHJhY3R8MCB0cnkgY2F0Y2ggcHJvdGVjdGVkIGV4cGxpY2l0IHByb3BlcnR5JyxcblxuICAgIC8vIGF2b2lkIGNsb3NlIGRldGVjdGlvbiB3aXRoIEMjIGFuZCBKU1xuICAgIGlsbGVnYWw6ICcoXnVzaW5nXFxcXHMrW0EtWmEtejAtOV9cXFxcLl0rOyR8XFxcXGJmdW5jdGlvblxcXFxzKlteXFxcXChdKScsXG5cbiAgICBjb250YWluczogW1xuICAgICAgeyAvLyAnc3RyaW5ncydcbiAgICAgICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICAgICAgYmVnaW46ICdcXCcnLCBlbmQ6ICdcXCcnLFxuICAgICAgICBpbGxlZ2FsOiAnXFxcXG4nLFxuICAgICAgICBjb250YWluczogWyBobGpzLkJBQ0tTTEFTSF9FU0NBUEUgXSxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuXG4gICAgICAvLyBcIlwiXCJoZXJlZG9jIHN0cmluZ3NcIlwiXCJcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICAgICAgYmVnaW46ICdcIlwiXCInLCBlbmQ6ICdcIlwiXCInXG4gICAgICB9LFxuXG4gICAgICB7IC8vIFwic3RyaW5nc1wiXG4gICAgICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgICAgIGJlZ2luOiAnXCInLCBlbmQ6ICdcIicsXG4gICAgICAgIGlsbGVnYWw6ICdcXFxcbicsXG4gICAgICAgIGNvbnRhaW5zOiBbIGhsanMuQkFDS1NMQVNIX0VTQ0FQRSBdLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG5cbiAgICAgIGhsanMuQ19MSU5FX0NPTU1FTlRfTU9ERSwgLy8gc2luZ2xlLWxpbmUgY29tbWVudHNcbiAgICAgIGhsanMuQ19CTE9DS19DT01NRU5UX01PREUsIC8vIGNvbW1lbnQgYmxvY2tzXG5cbiAgICAgIHsgLy8gbWV0YWRhdGFcbiAgICAgICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICAgICAgYmVnaW46ICdeXFxcXHMqXFxcXFsnLCBlbmQ6ICdcXFxcXScsXG4gICAgICB9LFxuXG4gICAgICB7IC8vIGludGVyZmFjZSBvciBuYW1lc3BhY2UgZGVjbGFyYXRpb25cbiAgICAgICAgYmVnaW5LZXl3b3JkczogJ2ludGVyZmFjZSBuYW1lc3BhY2UnLCBlbmQ6IC9cXHsvLFxuICAgICAgICBpbGxlZ2FsOiAnWzsuXFxcXC1dJyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICB7IC8vIGludGVyZmFjZSBvciBuYW1lc3BhY2UgbmFtZVxuICAgICAgICAgICAgY2xhc3NOYW1lOiAnc3ltYm9sJyxcbiAgICAgICAgICAgIGJlZ2luOiAnW2EtekEtWjAtOV9dKydcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG5cbiAgICAgIHsgLy8gY2xhc3MgZGVjbGFyYXRpb25cbiAgICAgICAgYmVnaW5LZXl3b3JkczogJ2NsYXNzJywgZW5kOiAvXFx7LyxcbiAgICAgICAgaWxsZWdhbDogJ1s7LlxcXFwtXScsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgeyAvLyBjbGFzcyBuYW1lXG4gICAgICAgICAgICBjbGFzc05hbWU6ICdzeW1ib2wnLFxuICAgICAgICAgICAgYmVnaW46ICdbYS16QS1aMC05X10rJyxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBiZWdpbjogJ1s6LF1cXFxccyonLFxuICAgICAgICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ3N5bWJvbCcsXG4gICAgICAgICAgICAgICAgICAgIGJlZ2luOiAnW2EtekEtWjAtOV9dKydcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG5cbiAgICAgIGJ1aWx0SW5UeXBlTW9kZSwgLy8gYnVpbHQtaW4gdHlwZXNcbiAgICAgIG9iamVjdEhhbmRsZU1vZGUsIC8vIG9iamVjdCBoYW5kbGVzXG5cbiAgICAgIHsgLy8gbGl0ZXJhbHNcbiAgICAgICAgY2xhc3NOYW1lOiAnbGl0ZXJhbCcsXG4gICAgICAgIGJlZ2luOiAnXFxcXGIobnVsbHx0cnVlfGZhbHNlKSdcbiAgICAgIH0sXG5cbiAgICAgIHsgLy8gbnVtYmVyc1xuICAgICAgICBjbGFzc05hbWU6ICdudW1iZXInLFxuICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgIGJlZ2luOiAnKC0/KShcXFxcYjBbeFhiQm9PZERdW2EtZkEtRjAtOV0rfChcXFxcYlxcXFxkKyhcXFxcLlxcXFxkKik/Zj98XFxcXC5cXFxcZCtmPykoW2VFXVstK10/XFxcXGQrZj8pPyknXG4gICAgICB9XG4gICAgXVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ2Vsc2NyaXB0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==