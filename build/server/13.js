exports.ids = [13];
exports.modules = {

/***/ "./node_modules/highlight.js/lib/languages/autohotkey.js":
/*!***************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/autohotkey.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: AutoHotkey
Author: Seongwon Lee <dlimpid@gmail.com>
Description: AutoHotkey language definition
Category: scripting
*/

/** @type LanguageFn */
function autohotkey(hljs) {
  const BACKTICK_ESCAPE = {
    begin: '`[\\s\\S]'
  };

  return {
    name: 'AutoHotkey',
    case_insensitive: true,
    aliases: ['ahk'],
    keywords: {
      keyword: 'Break Continue Critical Exit ExitApp Gosub Goto New OnExit Pause return SetBatchLines SetTimer Suspend Thread Throw Until ahk_id ahk_class ahk_pid ahk_exe ahk_group',
      literal: 'true false NOT AND OR',
      built_in: 'ComSpec Clipboard ClipboardAll ErrorLevel'
    },
    contains: [
      BACKTICK_ESCAPE,
      hljs.inherit(hljs.QUOTE_STRING_MODE, {
        contains: [BACKTICK_ESCAPE]
      }),
      hljs.COMMENT(';', '$', {
        relevance: 0
      }),
      hljs.C_BLOCK_COMMENT_MODE,
      {
        className: 'number',
        begin: hljs.NUMBER_RE,
        relevance: 0
      },
      {
        // subst would be the most accurate however fails the point of
        // highlighting. variable is comparably the most accurate that actually
        // has some effect
        className: 'variable',
        begin: '%[a-zA-Z0-9#_$@]+%'
      },
      {
        className: 'built_in',
        begin: '^\\s*\\w+\\s*(,|%)'
        // I don't really know if this is totally relevant
      },
      {
        // symbol would be most accurate however is highlighted just like
        // built_in and that makes up a lot of AutoHotkey code meaning that it
        // would fail to highlight anything
        className: 'title',
        variants: [
          {
            begin: '^[^\\n";]+::(?!=)'
          },
          {
            begin: '^[^\\n";]+:(?!=)',
            // zero relevance as it catches a lot of things
            // followed by a single ':' in many languages
            relevance: 0
          }
        ]
      },
      {
        className: 'meta',
        begin: '^\\s*#\\w+',
        end: '$',
        relevance: 0
      },
      {
        className: 'built_in',
        begin: 'A_[a-zA-Z0-9]+'
      },
      {
        // consecutive commas, not for highlighting but just for relevance
        begin: ',\\s*,'
      }
    ]
  };
}

module.exports = autohotkey;


/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvYXV0b2hvdGtleS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxxQkFBcUI7QUFDckI7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUIsV0FBVztBQUNYO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiMTMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuTGFuZ3VhZ2U6IEF1dG9Ib3RrZXlcbkF1dGhvcjogU2Vvbmd3b24gTGVlIDxkbGltcGlkQGdtYWlsLmNvbT5cbkRlc2NyaXB0aW9uOiBBdXRvSG90a2V5IGxhbmd1YWdlIGRlZmluaXRpb25cbkNhdGVnb3J5OiBzY3JpcHRpbmdcbiovXG5cbi8qKiBAdHlwZSBMYW5ndWFnZUZuICovXG5mdW5jdGlvbiBhdXRvaG90a2V5KGhsanMpIHtcbiAgY29uc3QgQkFDS1RJQ0tfRVNDQVBFID0ge1xuICAgIGJlZ2luOiAnYFtcXFxcc1xcXFxTXSdcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIG5hbWU6ICdBdXRvSG90a2V5JyxcbiAgICBjYXNlX2luc2Vuc2l0aXZlOiB0cnVlLFxuICAgIGFsaWFzZXM6IFsnYWhrJ10sXG4gICAga2V5d29yZHM6IHtcbiAgICAgIGtleXdvcmQ6ICdCcmVhayBDb250aW51ZSBDcml0aWNhbCBFeGl0IEV4aXRBcHAgR29zdWIgR290byBOZXcgT25FeGl0IFBhdXNlIHJldHVybiBTZXRCYXRjaExpbmVzIFNldFRpbWVyIFN1c3BlbmQgVGhyZWFkIFRocm93IFVudGlsIGFoa19pZCBhaGtfY2xhc3MgYWhrX3BpZCBhaGtfZXhlIGFoa19ncm91cCcsXG4gICAgICBsaXRlcmFsOiAndHJ1ZSBmYWxzZSBOT1QgQU5EIE9SJyxcbiAgICAgIGJ1aWx0X2luOiAnQ29tU3BlYyBDbGlwYm9hcmQgQ2xpcGJvYXJkQWxsIEVycm9yTGV2ZWwnXG4gICAgfSxcbiAgICBjb250YWluczogW1xuICAgICAgQkFDS1RJQ0tfRVNDQVBFLFxuICAgICAgaGxqcy5pbmhlcml0KGhsanMuUVVPVEVfU1RSSU5HX01PREUsIHtcbiAgICAgICAgY29udGFpbnM6IFtCQUNLVElDS19FU0NBUEVdXG4gICAgICB9KSxcbiAgICAgIGhsanMuQ09NTUVOVCgnOycsICckJywge1xuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0pLFxuICAgICAgaGxqcy5DX0JMT0NLX0NPTU1FTlRfTU9ERSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICAgICAgYmVnaW46IGhsanMuTlVNQkVSX1JFLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIC8vIHN1YnN0IHdvdWxkIGJlIHRoZSBtb3N0IGFjY3VyYXRlIGhvd2V2ZXIgZmFpbHMgdGhlIHBvaW50IG9mXG4gICAgICAgIC8vIGhpZ2hsaWdodGluZy4gdmFyaWFibGUgaXMgY29tcGFyYWJseSB0aGUgbW9zdCBhY2N1cmF0ZSB0aGF0IGFjdHVhbGx5XG4gICAgICAgIC8vIGhhcyBzb21lIGVmZmVjdFxuICAgICAgICBjbGFzc05hbWU6ICd2YXJpYWJsZScsXG4gICAgICAgIGJlZ2luOiAnJVthLXpBLVowLTkjXyRAXSslJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnYnVpbHRfaW4nLFxuICAgICAgICBiZWdpbjogJ15cXFxccypcXFxcdytcXFxccyooLHwlKSdcbiAgICAgICAgLy8gSSBkb24ndCByZWFsbHkga25vdyBpZiB0aGlzIGlzIHRvdGFsbHkgcmVsZXZhbnRcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIC8vIHN5bWJvbCB3b3VsZCBiZSBtb3N0IGFjY3VyYXRlIGhvd2V2ZXIgaXMgaGlnaGxpZ2h0ZWQganVzdCBsaWtlXG4gICAgICAgIC8vIGJ1aWx0X2luIGFuZCB0aGF0IG1ha2VzIHVwIGEgbG90IG9mIEF1dG9Ib3RrZXkgY29kZSBtZWFuaW5nIHRoYXQgaXRcbiAgICAgICAgLy8gd291bGQgZmFpbCB0byBoaWdobGlnaHQgYW55dGhpbmdcbiAgICAgICAgY2xhc3NOYW1lOiAndGl0bGUnLFxuICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luOiAnXlteXFxcXG5cIjtdKzo6KD8hPSknXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogJ15bXlxcXFxuXCI7XSs6KD8hPSknLFxuICAgICAgICAgICAgLy8gemVybyByZWxldmFuY2UgYXMgaXQgY2F0Y2hlcyBhIGxvdCBvZiB0aGluZ3NcbiAgICAgICAgICAgIC8vIGZvbGxvd2VkIGJ5IGEgc2luZ2xlICc6JyBpbiBtYW55IGxhbmd1YWdlc1xuICAgICAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICAgICAgYmVnaW46ICdeXFxcXHMqI1xcXFx3KycsXG4gICAgICAgIGVuZDogJyQnLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2J1aWx0X2luJyxcbiAgICAgICAgYmVnaW46ICdBX1thLXpBLVowLTldKydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIC8vIGNvbnNlY3V0aXZlIGNvbW1hcywgbm90IGZvciBoaWdobGlnaHRpbmcgYnV0IGp1c3QgZm9yIHJlbGV2YW5jZVxuICAgICAgICBiZWdpbjogJyxcXFxccyosJ1xuICAgICAgfVxuICAgIF1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhdXRvaG90a2V5O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==