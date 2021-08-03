exports.ids = [158];
exports.modules = {

/***/ "./node_modules/highlight.js/lib/languages/shell.js":
/*!**********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/shell.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Shell Session
Requires: bash.js
Author: TSUYUSATO Kitsune <make.just.on@gmail.com>
Category: common
Audit: 2020
*/

/** @type LanguageFn */
function shell(hljs) {
  return {
    name: 'Shell Session',
    aliases: [ 'console' ],
    contains: [
      {
        className: 'meta',
        // We cannot add \s (spaces) in the regular expression otherwise it will be too broad and produce unexpected result.
        // For instance, in the following example, it would match "echo /path/to/home >" as a prompt:
        // echo /path/to/home > t.exe
        begin: /^\s{0,3}[/~\w\d[\]()@-]*[>%$#]/,
        starts: {
          end: /[^\\](?=\s*$)/,
          subLanguage: 'bash'
        }
      }
    ]
  };
}

module.exports = shell;


/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvc2hlbGwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsSUFBSTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6IjE1OC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5MYW5ndWFnZTogU2hlbGwgU2Vzc2lvblxuUmVxdWlyZXM6IGJhc2guanNcbkF1dGhvcjogVFNVWVVTQVRPIEtpdHN1bmUgPG1ha2UuanVzdC5vbkBnbWFpbC5jb20+XG5DYXRlZ29yeTogY29tbW9uXG5BdWRpdDogMjAyMFxuKi9cblxuLyoqIEB0eXBlIExhbmd1YWdlRm4gKi9cbmZ1bmN0aW9uIHNoZWxsKGhsanMpIHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnU2hlbGwgU2Vzc2lvbicsXG4gICAgYWxpYXNlczogWyAnY29uc29sZScgXSxcbiAgICBjb250YWluczogW1xuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICAgICAgLy8gV2UgY2Fubm90IGFkZCBcXHMgKHNwYWNlcykgaW4gdGhlIHJlZ3VsYXIgZXhwcmVzc2lvbiBvdGhlcndpc2UgaXQgd2lsbCBiZSB0b28gYnJvYWQgYW5kIHByb2R1Y2UgdW5leHBlY3RlZCByZXN1bHQuXG4gICAgICAgIC8vIEZvciBpbnN0YW5jZSwgaW4gdGhlIGZvbGxvd2luZyBleGFtcGxlLCBpdCB3b3VsZCBtYXRjaCBcImVjaG8gL3BhdGgvdG8vaG9tZSA+XCIgYXMgYSBwcm9tcHQ6XG4gICAgICAgIC8vIGVjaG8gL3BhdGgvdG8vaG9tZSA+IHQuZXhlXG4gICAgICAgIGJlZ2luOiAvXlxcc3swLDN9Wy9+XFx3XFxkW1xcXSgpQC1dKls+JSQjXS8sXG4gICAgICAgIHN0YXJ0czoge1xuICAgICAgICAgIGVuZDogL1teXFxcXF0oPz1cXHMqJCkvLFxuICAgICAgICAgIHN1Ykxhbmd1YWdlOiAnYmFzaCdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaGVsbDtcbiJdLCJzb3VyY2VSb290IjoiIn0=