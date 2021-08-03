exports.ids = [88];
exports.modules = {

/***/ "./node_modules/highlight.js/lib/languages/julia-repl.js":
/*!***************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/julia-repl.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Julia REPL
Description: Julia REPL sessions
Author: Morten Piibeleht <morten.piibeleht@gmail.com>
Website: https://julialang.org
Requires: julia.js

The Julia REPL code blocks look something like the following:

  julia> function foo(x)
             x + 1
         end
  foo (generic function with 1 method)

They start on a new line with "julia>". Usually there should also be a space after this, but
we also allow the code to start right after the > character. The code may run over multiple
lines, but the additional lines must start with six spaces (i.e. be indented to match
"julia>"). The rest of the code is assumed to be output from the executed code and will be
left un-highlighted.

Using simply spaces to identify line continuations may get a false-positive if the output
also prints out six spaces, but such cases should be rare.
*/

function juliaRepl(hljs) {
  return {
    name: 'Julia REPL',
    contains: [
      {
        className: 'meta',
        begin: /^julia>/,
        relevance: 10,
        starts: {
          // end the highlighting if we are on a new line and the line does not have at
          // least six spaces in the beginning
          end: /^(?![ ]{6})/,
          subLanguage: 'julia'
      },
      // jldoctest Markdown blocks are used in the Julia manual and package docs indicate
      // code snippets that should be verified when the documentation is built. They can be
      // either REPL-like or script-like, but are usually REPL-like and therefore we apply
      // julia-repl highlighting to them. More information can be found in Documenter's
      // manual: https://juliadocs.github.io/Documenter.jl/latest/man/doctests.html
      aliases: ['jldoctest']
      }
    ]
  }
}

module.exports = juliaRepl;


/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvanVsaWEtcmVwbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsRUFBRTtBQUMxQjtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiI4OC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5MYW5ndWFnZTogSnVsaWEgUkVQTFxuRGVzY3JpcHRpb246IEp1bGlhIFJFUEwgc2Vzc2lvbnNcbkF1dGhvcjogTW9ydGVuIFBpaWJlbGVodCA8bW9ydGVuLnBpaWJlbGVodEBnbWFpbC5jb20+XG5XZWJzaXRlOiBodHRwczovL2p1bGlhbGFuZy5vcmdcblJlcXVpcmVzOiBqdWxpYS5qc1xuXG5UaGUgSnVsaWEgUkVQTCBjb2RlIGJsb2NrcyBsb29rIHNvbWV0aGluZyBsaWtlIHRoZSBmb2xsb3dpbmc6XG5cbiAganVsaWE+IGZ1bmN0aW9uIGZvbyh4KVxuICAgICAgICAgICAgIHggKyAxXG4gICAgICAgICBlbmRcbiAgZm9vIChnZW5lcmljIGZ1bmN0aW9uIHdpdGggMSBtZXRob2QpXG5cblRoZXkgc3RhcnQgb24gYSBuZXcgbGluZSB3aXRoIFwianVsaWE+XCIuIFVzdWFsbHkgdGhlcmUgc2hvdWxkIGFsc28gYmUgYSBzcGFjZSBhZnRlciB0aGlzLCBidXRcbndlIGFsc28gYWxsb3cgdGhlIGNvZGUgdG8gc3RhcnQgcmlnaHQgYWZ0ZXIgdGhlID4gY2hhcmFjdGVyLiBUaGUgY29kZSBtYXkgcnVuIG92ZXIgbXVsdGlwbGVcbmxpbmVzLCBidXQgdGhlIGFkZGl0aW9uYWwgbGluZXMgbXVzdCBzdGFydCB3aXRoIHNpeCBzcGFjZXMgKGkuZS4gYmUgaW5kZW50ZWQgdG8gbWF0Y2hcblwianVsaWE+XCIpLiBUaGUgcmVzdCBvZiB0aGUgY29kZSBpcyBhc3N1bWVkIHRvIGJlIG91dHB1dCBmcm9tIHRoZSBleGVjdXRlZCBjb2RlIGFuZCB3aWxsIGJlXG5sZWZ0IHVuLWhpZ2hsaWdodGVkLlxuXG5Vc2luZyBzaW1wbHkgc3BhY2VzIHRvIGlkZW50aWZ5IGxpbmUgY29udGludWF0aW9ucyBtYXkgZ2V0IGEgZmFsc2UtcG9zaXRpdmUgaWYgdGhlIG91dHB1dFxuYWxzbyBwcmludHMgb3V0IHNpeCBzcGFjZXMsIGJ1dCBzdWNoIGNhc2VzIHNob3VsZCBiZSByYXJlLlxuKi9cblxuZnVuY3Rpb24ganVsaWFSZXBsKGhsanMpIHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnSnVsaWEgUkVQTCcsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgICAgIGJlZ2luOiAvXmp1bGlhPi8sXG4gICAgICAgIHJlbGV2YW5jZTogMTAsXG4gICAgICAgIHN0YXJ0czoge1xuICAgICAgICAgIC8vIGVuZCB0aGUgaGlnaGxpZ2h0aW5nIGlmIHdlIGFyZSBvbiBhIG5ldyBsaW5lIGFuZCB0aGUgbGluZSBkb2VzIG5vdCBoYXZlIGF0XG4gICAgICAgICAgLy8gbGVhc3Qgc2l4IHNwYWNlcyBpbiB0aGUgYmVnaW5uaW5nXG4gICAgICAgICAgZW5kOiAvXig/IVsgXXs2fSkvLFxuICAgICAgICAgIHN1Ykxhbmd1YWdlOiAnanVsaWEnXG4gICAgICB9LFxuICAgICAgLy8gamxkb2N0ZXN0IE1hcmtkb3duIGJsb2NrcyBhcmUgdXNlZCBpbiB0aGUgSnVsaWEgbWFudWFsIGFuZCBwYWNrYWdlIGRvY3MgaW5kaWNhdGVcbiAgICAgIC8vIGNvZGUgc25pcHBldHMgdGhhdCBzaG91bGQgYmUgdmVyaWZpZWQgd2hlbiB0aGUgZG9jdW1lbnRhdGlvbiBpcyBidWlsdC4gVGhleSBjYW4gYmVcbiAgICAgIC8vIGVpdGhlciBSRVBMLWxpa2Ugb3Igc2NyaXB0LWxpa2UsIGJ1dCBhcmUgdXN1YWxseSBSRVBMLWxpa2UgYW5kIHRoZXJlZm9yZSB3ZSBhcHBseVxuICAgICAgLy8ganVsaWEtcmVwbCBoaWdobGlnaHRpbmcgdG8gdGhlbS4gTW9yZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgaW4gRG9jdW1lbnRlcidzXG4gICAgICAvLyBtYW51YWw6IGh0dHBzOi8vanVsaWFkb2NzLmdpdGh1Yi5pby9Eb2N1bWVudGVyLmpsL2xhdGVzdC9tYW4vZG9jdGVzdHMuaHRtbFxuICAgICAgYWxpYXNlczogWydqbGRvY3Rlc3QnXVxuICAgICAgfVxuICAgIF1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGp1bGlhUmVwbDtcbiJdLCJzb3VyY2VSb290IjoiIn0=