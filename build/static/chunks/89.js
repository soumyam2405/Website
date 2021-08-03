(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[89],{

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

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2p1bGlhLXJlcGwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsRUFBRTtBQUMxQjtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJzdGF0aWMvY2h1bmtzLzg5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBKdWxpYSBSRVBMXG5EZXNjcmlwdGlvbjogSnVsaWEgUkVQTCBzZXNzaW9uc1xuQXV0aG9yOiBNb3J0ZW4gUGlpYmVsZWh0IDxtb3J0ZW4ucGlpYmVsZWh0QGdtYWlsLmNvbT5cbldlYnNpdGU6IGh0dHBzOi8vanVsaWFsYW5nLm9yZ1xuUmVxdWlyZXM6IGp1bGlhLmpzXG5cblRoZSBKdWxpYSBSRVBMIGNvZGUgYmxvY2tzIGxvb2sgc29tZXRoaW5nIGxpa2UgdGhlIGZvbGxvd2luZzpcblxuICBqdWxpYT4gZnVuY3Rpb24gZm9vKHgpXG4gICAgICAgICAgICAgeCArIDFcbiAgICAgICAgIGVuZFxuICBmb28gKGdlbmVyaWMgZnVuY3Rpb24gd2l0aCAxIG1ldGhvZClcblxuVGhleSBzdGFydCBvbiBhIG5ldyBsaW5lIHdpdGggXCJqdWxpYT5cIi4gVXN1YWxseSB0aGVyZSBzaG91bGQgYWxzbyBiZSBhIHNwYWNlIGFmdGVyIHRoaXMsIGJ1dFxud2UgYWxzbyBhbGxvdyB0aGUgY29kZSB0byBzdGFydCByaWdodCBhZnRlciB0aGUgPiBjaGFyYWN0ZXIuIFRoZSBjb2RlIG1heSBydW4gb3ZlciBtdWx0aXBsZVxubGluZXMsIGJ1dCB0aGUgYWRkaXRpb25hbCBsaW5lcyBtdXN0IHN0YXJ0IHdpdGggc2l4IHNwYWNlcyAoaS5lLiBiZSBpbmRlbnRlZCB0byBtYXRjaFxuXCJqdWxpYT5cIikuIFRoZSByZXN0IG9mIHRoZSBjb2RlIGlzIGFzc3VtZWQgdG8gYmUgb3V0cHV0IGZyb20gdGhlIGV4ZWN1dGVkIGNvZGUgYW5kIHdpbGwgYmVcbmxlZnQgdW4taGlnaGxpZ2h0ZWQuXG5cblVzaW5nIHNpbXBseSBzcGFjZXMgdG8gaWRlbnRpZnkgbGluZSBjb250aW51YXRpb25zIG1heSBnZXQgYSBmYWxzZS1wb3NpdGl2ZSBpZiB0aGUgb3V0cHV0XG5hbHNvIHByaW50cyBvdXQgc2l4IHNwYWNlcywgYnV0IHN1Y2ggY2FzZXMgc2hvdWxkIGJlIHJhcmUuXG4qL1xuXG5mdW5jdGlvbiBqdWxpYVJlcGwoaGxqcykge1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICdKdWxpYSBSRVBMJyxcbiAgICBjb250YWluczogW1xuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICAgICAgYmVnaW46IC9eanVsaWE+LyxcbiAgICAgICAgcmVsZXZhbmNlOiAxMCxcbiAgICAgICAgc3RhcnRzOiB7XG4gICAgICAgICAgLy8gZW5kIHRoZSBoaWdobGlnaHRpbmcgaWYgd2UgYXJlIG9uIGEgbmV3IGxpbmUgYW5kIHRoZSBsaW5lIGRvZXMgbm90IGhhdmUgYXRcbiAgICAgICAgICAvLyBsZWFzdCBzaXggc3BhY2VzIGluIHRoZSBiZWdpbm5pbmdcbiAgICAgICAgICBlbmQ6IC9eKD8hWyBdezZ9KS8sXG4gICAgICAgICAgc3ViTGFuZ3VhZ2U6ICdqdWxpYSdcbiAgICAgIH0sXG4gICAgICAvLyBqbGRvY3Rlc3QgTWFya2Rvd24gYmxvY2tzIGFyZSB1c2VkIGluIHRoZSBKdWxpYSBtYW51YWwgYW5kIHBhY2thZ2UgZG9jcyBpbmRpY2F0ZVxuICAgICAgLy8gY29kZSBzbmlwcGV0cyB0aGF0IHNob3VsZCBiZSB2ZXJpZmllZCB3aGVuIHRoZSBkb2N1bWVudGF0aW9uIGlzIGJ1aWx0LiBUaGV5IGNhbiBiZVxuICAgICAgLy8gZWl0aGVyIFJFUEwtbGlrZSBvciBzY3JpcHQtbGlrZSwgYnV0IGFyZSB1c3VhbGx5IFJFUEwtbGlrZSBhbmQgdGhlcmVmb3JlIHdlIGFwcGx5XG4gICAgICAvLyBqdWxpYS1yZXBsIGhpZ2hsaWdodGluZyB0byB0aGVtLiBNb3JlIGluZm9ybWF0aW9uIGNhbiBiZSBmb3VuZCBpbiBEb2N1bWVudGVyJ3NcbiAgICAgIC8vIG1hbnVhbDogaHR0cHM6Ly9qdWxpYWRvY3MuZ2l0aHViLmlvL0RvY3VtZW50ZXIuamwvbGF0ZXN0L21hbi9kb2N0ZXN0cy5odG1sXG4gICAgICBhbGlhc2VzOiBbJ2psZG9jdGVzdCddXG4gICAgICB9XG4gICAgXVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ganVsaWFSZXBsO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==