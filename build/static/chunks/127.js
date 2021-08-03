(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[127],{

/***/ "./node_modules/highlight.js/lib/languages/pf.js":
/*!*******************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/pf.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Packet Filter config
Description: pf.conf — packet filter configuration file (OpenBSD)
Author: Peter Piwowarski <oldlaptop654@aol.com>
Website: http://man.openbsd.org/pf.conf
Category: config
*/

function pf(hljs) {
  const MACRO = {
    className: 'variable',
    begin: /\$[\w\d#@][\w\d_]*/
  };
  const TABLE = {
    className: 'variable',
    begin: /<(?!\/)/,
    end: />/
  };

  return {
    name: 'Packet Filter config',
    aliases: [ 'pf.conf' ],
    keywords: {
      $pattern: /[a-z0-9_<>-]+/,
      built_in: /* block match pass are "actions" in pf.conf(5), the rest are
                 * lexically similar top-level commands.
                 */
        'block match pass load anchor|5 antispoof|10 set table',
      keyword:
        'in out log quick on rdomain inet inet6 proto from port os to route ' +
        'allow-opts divert-packet divert-reply divert-to flags group icmp-type ' +
        'icmp6-type label once probability recieved-on rtable prio queue ' +
        'tos tag tagged user keep fragment for os drop ' +
        'af-to|10 binat-to|10 nat-to|10 rdr-to|10 bitmask least-stats random round-robin ' +
        'source-hash static-port ' +
        'dup-to reply-to route-to ' +
        'parent bandwidth default min max qlimit ' +
        'block-policy debug fingerprints hostid limit loginterface optimization ' +
        'reassemble ruleset-optimization basic none profile skip state-defaults ' +
        'state-policy timeout ' +
        'const counters persist ' +
        'no modulate synproxy state|5 floating if-bound no-sync pflow|10 sloppy ' +
        'source-track global rule max-src-nodes max-src-states max-src-conn ' +
        'max-src-conn-rate overload flush ' +
        'scrub|5 max-mss min-ttl no-df|10 random-id',
      literal:
        'all any no-route self urpf-failed egress|5 unknown'
    },
    contains: [
      hljs.HASH_COMMENT_MODE,
      hljs.NUMBER_MODE,
      hljs.QUOTE_STRING_MODE,
      MACRO,
      TABLE
    ]
  };
}

module.exports = pf;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3BmLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJzdGF0aWMvY2h1bmtzLzEyNy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5MYW5ndWFnZTogUGFja2V0IEZpbHRlciBjb25maWdcbkRlc2NyaXB0aW9uOiBwZi5jb25mIOKAlCBwYWNrZXQgZmlsdGVyIGNvbmZpZ3VyYXRpb24gZmlsZSAoT3BlbkJTRClcbkF1dGhvcjogUGV0ZXIgUGl3b3dhcnNraSA8b2xkbGFwdG9wNjU0QGFvbC5jb20+XG5XZWJzaXRlOiBodHRwOi8vbWFuLm9wZW5ic2Qub3JnL3BmLmNvbmZcbkNhdGVnb3J5OiBjb25maWdcbiovXG5cbmZ1bmN0aW9uIHBmKGhsanMpIHtcbiAgY29uc3QgTUFDUk8gPSB7XG4gICAgY2xhc3NOYW1lOiAndmFyaWFibGUnLFxuICAgIGJlZ2luOiAvXFwkW1xcd1xcZCNAXVtcXHdcXGRfXSovXG4gIH07XG4gIGNvbnN0IFRBQkxFID0ge1xuICAgIGNsYXNzTmFtZTogJ3ZhcmlhYmxlJyxcbiAgICBiZWdpbjogLzwoPyFcXC8pLyxcbiAgICBlbmQ6IC8+L1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgbmFtZTogJ1BhY2tldCBGaWx0ZXIgY29uZmlnJyxcbiAgICBhbGlhc2VzOiBbICdwZi5jb25mJyBdLFxuICAgIGtleXdvcmRzOiB7XG4gICAgICAkcGF0dGVybjogL1thLXowLTlfPD4tXSsvLFxuICAgICAgYnVpbHRfaW46IC8qIGJsb2NrIG1hdGNoIHBhc3MgYXJlIFwiYWN0aW9uc1wiIGluIHBmLmNvbmYoNSksIHRoZSByZXN0IGFyZVxuICAgICAgICAgICAgICAgICAqIGxleGljYWxseSBzaW1pbGFyIHRvcC1sZXZlbCBjb21tYW5kcy5cbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgJ2Jsb2NrIG1hdGNoIHBhc3MgbG9hZCBhbmNob3J8NSBhbnRpc3Bvb2Z8MTAgc2V0IHRhYmxlJyxcbiAgICAgIGtleXdvcmQ6XG4gICAgICAgICdpbiBvdXQgbG9nIHF1aWNrIG9uIHJkb21haW4gaW5ldCBpbmV0NiBwcm90byBmcm9tIHBvcnQgb3MgdG8gcm91dGUgJyArXG4gICAgICAgICdhbGxvdy1vcHRzIGRpdmVydC1wYWNrZXQgZGl2ZXJ0LXJlcGx5IGRpdmVydC10byBmbGFncyBncm91cCBpY21wLXR5cGUgJyArXG4gICAgICAgICdpY21wNi10eXBlIGxhYmVsIG9uY2UgcHJvYmFiaWxpdHkgcmVjaWV2ZWQtb24gcnRhYmxlIHByaW8gcXVldWUgJyArXG4gICAgICAgICd0b3MgdGFnIHRhZ2dlZCB1c2VyIGtlZXAgZnJhZ21lbnQgZm9yIG9zIGRyb3AgJyArXG4gICAgICAgICdhZi10b3wxMCBiaW5hdC10b3wxMCBuYXQtdG98MTAgcmRyLXRvfDEwIGJpdG1hc2sgbGVhc3Qtc3RhdHMgcmFuZG9tIHJvdW5kLXJvYmluICcgK1xuICAgICAgICAnc291cmNlLWhhc2ggc3RhdGljLXBvcnQgJyArXG4gICAgICAgICdkdXAtdG8gcmVwbHktdG8gcm91dGUtdG8gJyArXG4gICAgICAgICdwYXJlbnQgYmFuZHdpZHRoIGRlZmF1bHQgbWluIG1heCBxbGltaXQgJyArXG4gICAgICAgICdibG9jay1wb2xpY3kgZGVidWcgZmluZ2VycHJpbnRzIGhvc3RpZCBsaW1pdCBsb2dpbnRlcmZhY2Ugb3B0aW1pemF0aW9uICcgK1xuICAgICAgICAncmVhc3NlbWJsZSBydWxlc2V0LW9wdGltaXphdGlvbiBiYXNpYyBub25lIHByb2ZpbGUgc2tpcCBzdGF0ZS1kZWZhdWx0cyAnICtcbiAgICAgICAgJ3N0YXRlLXBvbGljeSB0aW1lb3V0ICcgK1xuICAgICAgICAnY29uc3QgY291bnRlcnMgcGVyc2lzdCAnICtcbiAgICAgICAgJ25vIG1vZHVsYXRlIHN5bnByb3h5IHN0YXRlfDUgZmxvYXRpbmcgaWYtYm91bmQgbm8tc3luYyBwZmxvd3wxMCBzbG9wcHkgJyArXG4gICAgICAgICdzb3VyY2UtdHJhY2sgZ2xvYmFsIHJ1bGUgbWF4LXNyYy1ub2RlcyBtYXgtc3JjLXN0YXRlcyBtYXgtc3JjLWNvbm4gJyArXG4gICAgICAgICdtYXgtc3JjLWNvbm4tcmF0ZSBvdmVybG9hZCBmbHVzaCAnICtcbiAgICAgICAgJ3NjcnVifDUgbWF4LW1zcyBtaW4tdHRsIG5vLWRmfDEwIHJhbmRvbS1pZCcsXG4gICAgICBsaXRlcmFsOlxuICAgICAgICAnYWxsIGFueSBuby1yb3V0ZSBzZWxmIHVycGYtZmFpbGVkIGVncmVzc3w1IHVua25vd24nXG4gICAgfSxcbiAgICBjb250YWluczogW1xuICAgICAgaGxqcy5IQVNIX0NPTU1FTlRfTU9ERSxcbiAgICAgIGhsanMuTlVNQkVSX01PREUsXG4gICAgICBobGpzLlFVT1RFX1NUUklOR19NT0RFLFxuICAgICAgTUFDUk8sXG4gICAgICBUQUJMRVxuICAgIF1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwZjtcbiJdLCJzb3VyY2VSb290IjoiIn0=