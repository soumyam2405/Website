exports.ids = [120];
exports.modules = {

/***/ "./node_modules/highlight.js/lib/languages/objectivec.js":
/*!***************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/objectivec.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Objective-C
Author: Valerii Hiora <valerii.hiora@gmail.com>
Contributors: Angel G. Olloqui <angelgarcia.mail@gmail.com>, Matt Diephouse <matt@diephouse.com>, Andrew Farmer <ahfarmer@gmail.com>, Minh Nguyễn <mxn@1ec5.org>
Website: https://developer.apple.com/documentation/objectivec
Category: common
*/

function objectivec(hljs) {
  const API_CLASS = {
    className: 'built_in',
    begin: '\\b(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)\\w+'
  };
  const IDENTIFIER_RE = /[a-zA-Z@][a-zA-Z0-9_]*/;
  const OBJC_KEYWORDS = {
    $pattern: IDENTIFIER_RE,
    keyword:
      'int float while char export sizeof typedef const struct for union ' +
      'unsigned long volatile static bool mutable if do return goto void ' +
      'enum else break extern asm case short default double register explicit ' +
      'signed typename this switch continue wchar_t inline readonly assign ' +
      'readwrite self @synchronized id typeof ' +
      'nonatomic super unichar IBOutlet IBAction strong weak copy ' +
      'in out inout bycopy byref oneway __strong __weak __block __autoreleasing ' +
      '@private @protected @public @try @property @end @throw @catch @finally ' +
      '@autoreleasepool @synthesize @dynamic @selector @optional @required ' +
      '@encode @package @import @defs @compatibility_alias ' +
      '__bridge __bridge_transfer __bridge_retained __bridge_retain ' +
      '__covariant __contravariant __kindof ' +
      '_Nonnull _Nullable _Null_unspecified ' +
      '__FUNCTION__ __PRETTY_FUNCTION__ __attribute__ ' +
      'getter setter retain unsafe_unretained ' +
      'nonnull nullable null_unspecified null_resettable class instancetype ' +
      'NS_DESIGNATED_INITIALIZER NS_UNAVAILABLE NS_REQUIRES_SUPER ' +
      'NS_RETURNS_INNER_POINTER NS_INLINE NS_AVAILABLE NS_DEPRECATED ' +
      'NS_ENUM NS_OPTIONS NS_SWIFT_UNAVAILABLE ' +
      'NS_ASSUME_NONNULL_BEGIN NS_ASSUME_NONNULL_END ' +
      'NS_REFINED_FOR_SWIFT NS_SWIFT_NAME NS_SWIFT_NOTHROW ' +
      'NS_DURING NS_HANDLER NS_ENDHANDLER NS_VALUERETURN NS_VOIDRETURN',
    literal:
      'false true FALSE TRUE nil YES NO NULL',
    built_in:
      'BOOL dispatch_once_t dispatch_queue_t dispatch_sync dispatch_async dispatch_once'
  };
  const CLASS_KEYWORDS = {
    $pattern: IDENTIFIER_RE,
    keyword: '@interface @class @protocol @implementation'
  };
  return {
    name: 'Objective-C',
    aliases: [
      'mm',
      'objc',
      'obj-c',
      'obj-c++',
      'objective-c++'
    ],
    keywords: OBJC_KEYWORDS,
    illegal: '</',
    contains: [
      API_CLASS,
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      hljs.C_NUMBER_MODE,
      hljs.QUOTE_STRING_MODE,
      hljs.APOS_STRING_MODE,
      {
        className: 'string',
        variants: [
          {
            begin: '@"',
            end: '"',
            illegal: '\\n',
            contains: [ hljs.BACKSLASH_ESCAPE ]
          }
        ]
      },
      {
        className: 'meta',
        begin: /#\s*[a-z]+\b/,
        end: /$/,
        keywords: {
          'meta-keyword':
            'if else elif endif define undef warning error line ' +
            'pragma ifdef ifndef include'
        },
        contains: [
          {
            begin: /\\\n/,
            relevance: 0
          },
          hljs.inherit(hljs.QUOTE_STRING_MODE, {
            className: 'meta-string'
          }),
          {
            className: 'meta-string',
            begin: /<.*?>/,
            end: /$/,
            illegal: '\\n'
          },
          hljs.C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE
        ]
      },
      {
        className: 'class',
        begin: '(' + CLASS_KEYWORDS.keyword.split(' ').join('|') + ')\\b',
        end: /(\{|$)/,
        excludeEnd: true,
        keywords: CLASS_KEYWORDS,
        contains: [ hljs.UNDERSCORE_TITLE_MODE ]
      },
      {
        begin: '\\.' + hljs.UNDERSCORE_IDENT_RE,
        relevance: 0
      }
    ]
  };
}

module.exports = objectivec;


/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvb2JqZWN0aXZlYy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiIxMjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuTGFuZ3VhZ2U6IE9iamVjdGl2ZS1DXG5BdXRob3I6IFZhbGVyaWkgSGlvcmEgPHZhbGVyaWkuaGlvcmFAZ21haWwuY29tPlxuQ29udHJpYnV0b3JzOiBBbmdlbCBHLiBPbGxvcXVpIDxhbmdlbGdhcmNpYS5tYWlsQGdtYWlsLmNvbT4sIE1hdHQgRGllcGhvdXNlIDxtYXR0QGRpZXBob3VzZS5jb20+LCBBbmRyZXcgRmFybWVyIDxhaGZhcm1lckBnbWFpbC5jb20+LCBNaW5oIE5ndXnhu4VuIDxteG5AMWVjNS5vcmc+XG5XZWJzaXRlOiBodHRwczovL2RldmVsb3Blci5hcHBsZS5jb20vZG9jdW1lbnRhdGlvbi9vYmplY3RpdmVjXG5DYXRlZ29yeTogY29tbW9uXG4qL1xuXG5mdW5jdGlvbiBvYmplY3RpdmVjKGhsanMpIHtcbiAgY29uc3QgQVBJX0NMQVNTID0ge1xuICAgIGNsYXNzTmFtZTogJ2J1aWx0X2luJyxcbiAgICBiZWdpbjogJ1xcXFxiKEFWfENBfENGfENHfENJfENMfENNfENOfENUfE1LfE1QfE1US3xNVEx8TlN8U0NOfFNLfFVJfFdLfFhDKVxcXFx3KydcbiAgfTtcbiAgY29uc3QgSURFTlRJRklFUl9SRSA9IC9bYS16QS1aQF1bYS16QS1aMC05X10qLztcbiAgY29uc3QgT0JKQ19LRVlXT1JEUyA9IHtcbiAgICAkcGF0dGVybjogSURFTlRJRklFUl9SRSxcbiAgICBrZXl3b3JkOlxuICAgICAgJ2ludCBmbG9hdCB3aGlsZSBjaGFyIGV4cG9ydCBzaXplb2YgdHlwZWRlZiBjb25zdCBzdHJ1Y3QgZm9yIHVuaW9uICcgK1xuICAgICAgJ3Vuc2lnbmVkIGxvbmcgdm9sYXRpbGUgc3RhdGljIGJvb2wgbXV0YWJsZSBpZiBkbyByZXR1cm4gZ290byB2b2lkICcgK1xuICAgICAgJ2VudW0gZWxzZSBicmVhayBleHRlcm4gYXNtIGNhc2Ugc2hvcnQgZGVmYXVsdCBkb3VibGUgcmVnaXN0ZXIgZXhwbGljaXQgJyArXG4gICAgICAnc2lnbmVkIHR5cGVuYW1lIHRoaXMgc3dpdGNoIGNvbnRpbnVlIHdjaGFyX3QgaW5saW5lIHJlYWRvbmx5IGFzc2lnbiAnICtcbiAgICAgICdyZWFkd3JpdGUgc2VsZiBAc3luY2hyb25pemVkIGlkIHR5cGVvZiAnICtcbiAgICAgICdub25hdG9taWMgc3VwZXIgdW5pY2hhciBJQk91dGxldCBJQkFjdGlvbiBzdHJvbmcgd2VhayBjb3B5ICcgK1xuICAgICAgJ2luIG91dCBpbm91dCBieWNvcHkgYnlyZWYgb25ld2F5IF9fc3Ryb25nIF9fd2VhayBfX2Jsb2NrIF9fYXV0b3JlbGVhc2luZyAnICtcbiAgICAgICdAcHJpdmF0ZSBAcHJvdGVjdGVkIEBwdWJsaWMgQHRyeSBAcHJvcGVydHkgQGVuZCBAdGhyb3cgQGNhdGNoIEBmaW5hbGx5ICcgK1xuICAgICAgJ0BhdXRvcmVsZWFzZXBvb2wgQHN5bnRoZXNpemUgQGR5bmFtaWMgQHNlbGVjdG9yIEBvcHRpb25hbCBAcmVxdWlyZWQgJyArXG4gICAgICAnQGVuY29kZSBAcGFja2FnZSBAaW1wb3J0IEBkZWZzIEBjb21wYXRpYmlsaXR5X2FsaWFzICcgK1xuICAgICAgJ19fYnJpZGdlIF9fYnJpZGdlX3RyYW5zZmVyIF9fYnJpZGdlX3JldGFpbmVkIF9fYnJpZGdlX3JldGFpbiAnICtcbiAgICAgICdfX2NvdmFyaWFudCBfX2NvbnRyYXZhcmlhbnQgX19raW5kb2YgJyArXG4gICAgICAnX05vbm51bGwgX051bGxhYmxlIF9OdWxsX3Vuc3BlY2lmaWVkICcgK1xuICAgICAgJ19fRlVOQ1RJT05fXyBfX1BSRVRUWV9GVU5DVElPTl9fIF9fYXR0cmlidXRlX18gJyArXG4gICAgICAnZ2V0dGVyIHNldHRlciByZXRhaW4gdW5zYWZlX3VucmV0YWluZWQgJyArXG4gICAgICAnbm9ubnVsbCBudWxsYWJsZSBudWxsX3Vuc3BlY2lmaWVkIG51bGxfcmVzZXR0YWJsZSBjbGFzcyBpbnN0YW5jZXR5cGUgJyArXG4gICAgICAnTlNfREVTSUdOQVRFRF9JTklUSUFMSVpFUiBOU19VTkFWQUlMQUJMRSBOU19SRVFVSVJFU19TVVBFUiAnICtcbiAgICAgICdOU19SRVRVUk5TX0lOTkVSX1BPSU5URVIgTlNfSU5MSU5FIE5TX0FWQUlMQUJMRSBOU19ERVBSRUNBVEVEICcgK1xuICAgICAgJ05TX0VOVU0gTlNfT1BUSU9OUyBOU19TV0lGVF9VTkFWQUlMQUJMRSAnICtcbiAgICAgICdOU19BU1NVTUVfTk9OTlVMTF9CRUdJTiBOU19BU1NVTUVfTk9OTlVMTF9FTkQgJyArXG4gICAgICAnTlNfUkVGSU5FRF9GT1JfU1dJRlQgTlNfU1dJRlRfTkFNRSBOU19TV0lGVF9OT1RIUk9XICcgK1xuICAgICAgJ05TX0RVUklORyBOU19IQU5ETEVSIE5TX0VOREhBTkRMRVIgTlNfVkFMVUVSRVRVUk4gTlNfVk9JRFJFVFVSTicsXG4gICAgbGl0ZXJhbDpcbiAgICAgICdmYWxzZSB0cnVlIEZBTFNFIFRSVUUgbmlsIFlFUyBOTyBOVUxMJyxcbiAgICBidWlsdF9pbjpcbiAgICAgICdCT09MIGRpc3BhdGNoX29uY2VfdCBkaXNwYXRjaF9xdWV1ZV90IGRpc3BhdGNoX3N5bmMgZGlzcGF0Y2hfYXN5bmMgZGlzcGF0Y2hfb25jZSdcbiAgfTtcbiAgY29uc3QgQ0xBU1NfS0VZV09SRFMgPSB7XG4gICAgJHBhdHRlcm46IElERU5USUZJRVJfUkUsXG4gICAga2V5d29yZDogJ0BpbnRlcmZhY2UgQGNsYXNzIEBwcm90b2NvbCBAaW1wbGVtZW50YXRpb24nXG4gIH07XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ09iamVjdGl2ZS1DJyxcbiAgICBhbGlhc2VzOiBbXG4gICAgICAnbW0nLFxuICAgICAgJ29iamMnLFxuICAgICAgJ29iai1jJyxcbiAgICAgICdvYmotYysrJyxcbiAgICAgICdvYmplY3RpdmUtYysrJ1xuICAgIF0sXG4gICAga2V5d29yZHM6IE9CSkNfS0VZV09SRFMsXG4gICAgaWxsZWdhbDogJzwvJyxcbiAgICBjb250YWluczogW1xuICAgICAgQVBJX0NMQVNTLFxuICAgICAgaGxqcy5DX0xJTkVfQ09NTUVOVF9NT0RFLFxuICAgICAgaGxqcy5DX0JMT0NLX0NPTU1FTlRfTU9ERSxcbiAgICAgIGhsanMuQ19OVU1CRVJfTU9ERSxcbiAgICAgIGhsanMuUVVPVEVfU1RSSU5HX01PREUsXG4gICAgICBobGpzLkFQT1NfU1RSSU5HX01PREUsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW46ICdAXCInLFxuICAgICAgICAgICAgZW5kOiAnXCInLFxuICAgICAgICAgICAgaWxsZWdhbDogJ1xcXFxuJyxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbIGhsanMuQkFDS1NMQVNIX0VTQ0FQRSBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICAgICAgYmVnaW46IC8jXFxzKlthLXpdK1xcYi8sXG4gICAgICAgIGVuZDogLyQvLFxuICAgICAgICBrZXl3b3Jkczoge1xuICAgICAgICAgICdtZXRhLWtleXdvcmQnOlxuICAgICAgICAgICAgJ2lmIGVsc2UgZWxpZiBlbmRpZiBkZWZpbmUgdW5kZWYgd2FybmluZyBlcnJvciBsaW5lICcgK1xuICAgICAgICAgICAgJ3ByYWdtYSBpZmRlZiBpZm5kZWYgaW5jbHVkZSdcbiAgICAgICAgfSxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogL1xcXFxcXG4vLFxuICAgICAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBobGpzLmluaGVyaXQoaGxqcy5RVU9URV9TVFJJTkdfTU9ERSwge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnbWV0YS1zdHJpbmcnXG4gICAgICAgICAgfSksXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnbWV0YS1zdHJpbmcnLFxuICAgICAgICAgICAgYmVnaW46IC88Lio/Pi8sXG4gICAgICAgICAgICBlbmQ6IC8kLyxcbiAgICAgICAgICAgIGlsbGVnYWw6ICdcXFxcbidcbiAgICAgICAgICB9LFxuICAgICAgICAgIGhsanMuQ19MSU5FX0NPTU1FTlRfTU9ERSxcbiAgICAgICAgICBobGpzLkNfQkxPQ0tfQ09NTUVOVF9NT0RFXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2NsYXNzJyxcbiAgICAgICAgYmVnaW46ICcoJyArIENMQVNTX0tFWVdPUkRTLmtleXdvcmQuc3BsaXQoJyAnKS5qb2luKCd8JykgKyAnKVxcXFxiJyxcbiAgICAgICAgZW5kOiAvKFxce3wkKS8sXG4gICAgICAgIGV4Y2x1ZGVFbmQ6IHRydWUsXG4gICAgICAgIGtleXdvcmRzOiBDTEFTU19LRVlXT1JEUyxcbiAgICAgICAgY29udGFpbnM6IFsgaGxqcy5VTkRFUlNDT1JFX1RJVExFX01PREUgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICdcXFxcLicgKyBobGpzLlVOREVSU0NPUkVfSURFTlRfUkUsXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfVxuICAgIF1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvYmplY3RpdmVjO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==