exports.ids = [61];
exports.modules = {

/***/ "./node_modules/highlight.js/lib/languages/fsharp.js":
/*!***********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/fsharp.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: F#
Author: Jonas Follesø <jonas@follesoe.no>
Contributors: Troy Kershaw <hello@troykershaw.com>, Henrik Feldt <henrik@haf.se>
Website: https://docs.microsoft.com/en-us/dotnet/fsharp/
Category: functional
*/

/** @type LanguageFn */
function fsharp(hljs) {
  const TYPEPARAM = {
    begin: '<',
    end: '>',
    contains: [
      hljs.inherit(hljs.TITLE_MODE, {
        begin: /'[a-zA-Z0-9_]+/
      })
    ]
  };

  return {
    name: 'F#',
    aliases: ['fs'],
    keywords:
      'abstract and as assert base begin class default delegate do done ' +
      'downcast downto elif else end exception extern false finally for ' +
      'fun function global if in inherit inline interface internal lazy let ' +
      'match member module mutable namespace new null of open or ' +
      'override private public rec return sig static struct then to ' +
      'true try type upcast use val void when while with yield',
    illegal: /\/\*/,
    contains: [
      {
        // monad builder keywords (matches before non-bang kws)
        className: 'keyword',
        begin: /\b(yield|return|let|do)!/
      },
      {
        className: 'string',
        begin: '@"',
        end: '"',
        contains: [
          {
            begin: '""'
          }
        ]
      },
      {
        className: 'string',
        begin: '"""',
        end: '"""'
      },
      hljs.COMMENT('\\(\\*(\\s)', '\\*\\)', {
        contains: ["self"]
      }),
      {
        className: 'class',
        beginKeywords: 'type',
        end: '\\(|=|$',
        excludeEnd: true,
        contains: [
          hljs.UNDERSCORE_TITLE_MODE,
          TYPEPARAM
        ]
      },
      {
        className: 'meta',
        begin: '\\[<',
        end: '>\\]',
        relevance: 10
      },
      {
        className: 'symbol',
        begin: '\\B(\'[A-Za-z])\\b',
        contains: [hljs.BACKSLASH_ESCAPE]
      },
      hljs.C_LINE_COMMENT_MODE,
      hljs.inherit(hljs.QUOTE_STRING_MODE, {
        illegal: null
      }),
      hljs.C_NUMBER_MODE
    ]
  };
}

module.exports = fsharp;


/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvZnNoYXJwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6IjYxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBGI1xuQXV0aG9yOiBKb25hcyBGb2xsZXPDuCA8am9uYXNAZm9sbGVzb2Uubm8+XG5Db250cmlidXRvcnM6IFRyb3kgS2Vyc2hhdyA8aGVsbG9AdHJveWtlcnNoYXcuY29tPiwgSGVucmlrIEZlbGR0IDxoZW5yaWtAaGFmLnNlPlxuV2Vic2l0ZTogaHR0cHM6Ly9kb2NzLm1pY3Jvc29mdC5jb20vZW4tdXMvZG90bmV0L2ZzaGFycC9cbkNhdGVnb3J5OiBmdW5jdGlvbmFsXG4qL1xuXG4vKiogQHR5cGUgTGFuZ3VhZ2VGbiAqL1xuZnVuY3Rpb24gZnNoYXJwKGhsanMpIHtcbiAgY29uc3QgVFlQRVBBUkFNID0ge1xuICAgIGJlZ2luOiAnPCcsXG4gICAgZW5kOiAnPicsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIGhsanMuaW5oZXJpdChobGpzLlRJVExFX01PREUsIHtcbiAgICAgICAgYmVnaW46IC8nW2EtekEtWjAtOV9dKy9cbiAgICAgIH0pXG4gICAgXVxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgbmFtZTogJ0YjJyxcbiAgICBhbGlhc2VzOiBbJ2ZzJ10sXG4gICAga2V5d29yZHM6XG4gICAgICAnYWJzdHJhY3QgYW5kIGFzIGFzc2VydCBiYXNlIGJlZ2luIGNsYXNzIGRlZmF1bHQgZGVsZWdhdGUgZG8gZG9uZSAnICtcbiAgICAgICdkb3duY2FzdCBkb3dudG8gZWxpZiBlbHNlIGVuZCBleGNlcHRpb24gZXh0ZXJuIGZhbHNlIGZpbmFsbHkgZm9yICcgK1xuICAgICAgJ2Z1biBmdW5jdGlvbiBnbG9iYWwgaWYgaW4gaW5oZXJpdCBpbmxpbmUgaW50ZXJmYWNlIGludGVybmFsIGxhenkgbGV0ICcgK1xuICAgICAgJ21hdGNoIG1lbWJlciBtb2R1bGUgbXV0YWJsZSBuYW1lc3BhY2UgbmV3IG51bGwgb2Ygb3BlbiBvciAnICtcbiAgICAgICdvdmVycmlkZSBwcml2YXRlIHB1YmxpYyByZWMgcmV0dXJuIHNpZyBzdGF0aWMgc3RydWN0IHRoZW4gdG8gJyArXG4gICAgICAndHJ1ZSB0cnkgdHlwZSB1cGNhc3QgdXNlIHZhbCB2b2lkIHdoZW4gd2hpbGUgd2l0aCB5aWVsZCcsXG4gICAgaWxsZWdhbDogL1xcL1xcKi8sXG4gICAgY29udGFpbnM6IFtcbiAgICAgIHtcbiAgICAgICAgLy8gbW9uYWQgYnVpbGRlciBrZXl3b3JkcyAobWF0Y2hlcyBiZWZvcmUgbm9uLWJhbmcga3dzKVxuICAgICAgICBjbGFzc05hbWU6ICdrZXl3b3JkJyxcbiAgICAgICAgYmVnaW46IC9cXGIoeWllbGR8cmV0dXJufGxldHxkbykhL1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICAgICAgYmVnaW46ICdAXCInLFxuICAgICAgICBlbmQ6ICdcIicsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW46ICdcIlwiJ1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICAgICAgYmVnaW46ICdcIlwiXCInLFxuICAgICAgICBlbmQ6ICdcIlwiXCInXG4gICAgICB9LFxuICAgICAgaGxqcy5DT01NRU5UKCdcXFxcKFxcXFwqKFxcXFxzKScsICdcXFxcKlxcXFwpJywge1xuICAgICAgICBjb250YWluczogW1wic2VsZlwiXVxuICAgICAgfSksXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2NsYXNzJyxcbiAgICAgICAgYmVnaW5LZXl3b3JkczogJ3R5cGUnLFxuICAgICAgICBlbmQ6ICdcXFxcKHw9fCQnLFxuICAgICAgICBleGNsdWRlRW5kOiB0cnVlLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIGhsanMuVU5ERVJTQ09SRV9USVRMRV9NT0RFLFxuICAgICAgICAgIFRZUEVQQVJBTVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICAgICAgYmVnaW46ICdcXFxcWzwnLFxuICAgICAgICBlbmQ6ICc+XFxcXF0nLFxuICAgICAgICByZWxldmFuY2U6IDEwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdzeW1ib2wnLFxuICAgICAgICBiZWdpbjogJ1xcXFxCKFxcJ1tBLVphLXpdKVxcXFxiJyxcbiAgICAgICAgY29udGFpbnM6IFtobGpzLkJBQ0tTTEFTSF9FU0NBUEVdXG4gICAgICB9LFxuICAgICAgaGxqcy5DX0xJTkVfQ09NTUVOVF9NT0RFLFxuICAgICAgaGxqcy5pbmhlcml0KGhsanMuUVVPVEVfU1RSSU5HX01PREUsIHtcbiAgICAgICAgaWxsZWdhbDogbnVsbFxuICAgICAgfSksXG4gICAgICBobGpzLkNfTlVNQkVSX01PREVcbiAgICBdXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnNoYXJwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==