(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[14],{

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

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2F1dG9ob3RrZXkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxxQkFBcUI7QUFDckI7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUIsV0FBVztBQUNYO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoic3RhdGljL2NodW5rcy8xNC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5MYW5ndWFnZTogQXV0b0hvdGtleVxuQXV0aG9yOiBTZW9uZ3dvbiBMZWUgPGRsaW1waWRAZ21haWwuY29tPlxuRGVzY3JpcHRpb246IEF1dG9Ib3RrZXkgbGFuZ3VhZ2UgZGVmaW5pdGlvblxuQ2F0ZWdvcnk6IHNjcmlwdGluZ1xuKi9cblxuLyoqIEB0eXBlIExhbmd1YWdlRm4gKi9cbmZ1bmN0aW9uIGF1dG9ob3RrZXkoaGxqcykge1xuICBjb25zdCBCQUNLVElDS19FU0NBUEUgPSB7XG4gICAgYmVnaW46ICdgW1xcXFxzXFxcXFNdJ1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgbmFtZTogJ0F1dG9Ib3RrZXknLFxuICAgIGNhc2VfaW5zZW5zaXRpdmU6IHRydWUsXG4gICAgYWxpYXNlczogWydhaGsnXSxcbiAgICBrZXl3b3Jkczoge1xuICAgICAga2V5d29yZDogJ0JyZWFrIENvbnRpbnVlIENyaXRpY2FsIEV4aXQgRXhpdEFwcCBHb3N1YiBHb3RvIE5ldyBPbkV4aXQgUGF1c2UgcmV0dXJuIFNldEJhdGNoTGluZXMgU2V0VGltZXIgU3VzcGVuZCBUaHJlYWQgVGhyb3cgVW50aWwgYWhrX2lkIGFoa19jbGFzcyBhaGtfcGlkIGFoa19leGUgYWhrX2dyb3VwJyxcbiAgICAgIGxpdGVyYWw6ICd0cnVlIGZhbHNlIE5PVCBBTkQgT1InLFxuICAgICAgYnVpbHRfaW46ICdDb21TcGVjIENsaXBib2FyZCBDbGlwYm9hcmRBbGwgRXJyb3JMZXZlbCdcbiAgICB9LFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBCQUNLVElDS19FU0NBUEUsXG4gICAgICBobGpzLmluaGVyaXQoaGxqcy5RVU9URV9TVFJJTkdfTU9ERSwge1xuICAgICAgICBjb250YWluczogW0JBQ0tUSUNLX0VTQ0FQRV1cbiAgICAgIH0pLFxuICAgICAgaGxqcy5DT01NRU5UKCc7JywgJyQnLCB7XG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSksXG4gICAgICBobGpzLkNfQkxPQ0tfQ09NTUVOVF9NT0RFLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdudW1iZXInLFxuICAgICAgICBiZWdpbjogaGxqcy5OVU1CRVJfUkUsXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgLy8gc3Vic3Qgd291bGQgYmUgdGhlIG1vc3QgYWNjdXJhdGUgaG93ZXZlciBmYWlscyB0aGUgcG9pbnQgb2ZcbiAgICAgICAgLy8gaGlnaGxpZ2h0aW5nLiB2YXJpYWJsZSBpcyBjb21wYXJhYmx5IHRoZSBtb3N0IGFjY3VyYXRlIHRoYXQgYWN0dWFsbHlcbiAgICAgICAgLy8gaGFzIHNvbWUgZWZmZWN0XG4gICAgICAgIGNsYXNzTmFtZTogJ3ZhcmlhYmxlJyxcbiAgICAgICAgYmVnaW46ICclW2EtekEtWjAtOSNfJEBdKyUnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdidWlsdF9pbicsXG4gICAgICAgIGJlZ2luOiAnXlxcXFxzKlxcXFx3K1xcXFxzKigsfCUpJ1xuICAgICAgICAvLyBJIGRvbid0IHJlYWxseSBrbm93IGlmIHRoaXMgaXMgdG90YWxseSByZWxldmFudFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgLy8gc3ltYm9sIHdvdWxkIGJlIG1vc3QgYWNjdXJhdGUgaG93ZXZlciBpcyBoaWdobGlnaHRlZCBqdXN0IGxpa2VcbiAgICAgICAgLy8gYnVpbHRfaW4gYW5kIHRoYXQgbWFrZXMgdXAgYSBsb3Qgb2YgQXV0b0hvdGtleSBjb2RlIG1lYW5pbmcgdGhhdCBpdFxuICAgICAgICAvLyB3b3VsZCBmYWlsIHRvIGhpZ2hsaWdodCBhbnl0aGluZ1xuICAgICAgICBjbGFzc05hbWU6ICd0aXRsZScsXG4gICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW46ICdeW15cXFxcblwiO10rOjooPyE9KSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luOiAnXlteXFxcXG5cIjtdKzooPyE9KScsXG4gICAgICAgICAgICAvLyB6ZXJvIHJlbGV2YW5jZSBhcyBpdCBjYXRjaGVzIGEgbG90IG9mIHRoaW5nc1xuICAgICAgICAgICAgLy8gZm9sbG93ZWQgYnkgYSBzaW5nbGUgJzonIGluIG1hbnkgbGFuZ3VhZ2VzXG4gICAgICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgICAgICBiZWdpbjogJ15cXFxccyojXFxcXHcrJyxcbiAgICAgICAgZW5kOiAnJCcsXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnYnVpbHRfaW4nLFxuICAgICAgICBiZWdpbjogJ0FfW2EtekEtWjAtOV0rJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgLy8gY29uc2VjdXRpdmUgY29tbWFzLCBub3QgZm9yIGhpZ2hsaWdodGluZyBidXQganVzdCBmb3IgcmVsZXZhbmNlXG4gICAgICAgIGJlZ2luOiAnLFxcXFxzKiwnXG4gICAgICB9XG4gICAgXVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGF1dG9ob3RrZXk7XG4iXSwic291cmNlUm9vdCI6IiJ9