(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[182],{

/***/ "./node_modules/highlight.js/lib/languages/vbscript.js":
/*!*************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/vbscript.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @param {string} value
 * @returns {RegExp}
 * */

/**
 * @param {RegExp | string } re
 * @returns {string}
 */
function source(re) {
  if (!re) return null;
  if (typeof re === "string") return re;

  return re.source;
}

/**
 * @param {...(RegExp | string) } args
 * @returns {string}
 */
function concat(...args) {
  const joined = args.map((x) => source(x)).join("");
  return joined;
}

/**
 * Any of the passed expresssions may match
 *
 * Creates a huge this | this | that | that match
 * @param {(RegExp | string)[] } args
 * @returns {string}
 */
function either(...args) {
  const joined = '(' + args.map((x) => source(x)).join("|") + ")";
  return joined;
}

/*
Language: VBScript
Description: VBScript ("Microsoft Visual Basic Scripting Edition") is an Active Scripting language developed by Microsoft that is modeled on Visual Basic.
Author: Nikita Ledyaev <lenikita@yandex.ru>
Contributors: Michal Gabrukiewicz <mgabru@gmail.com>
Website: https://en.wikipedia.org/wiki/VBScript
Category: scripting
*/

/** @type LanguageFn */
function vbscript(hljs) {
  const BUILT_IN_FUNCTIONS = ('lcase month vartype instrrev ubound setlocale getobject rgb getref string ' +
  'weekdayname rnd dateadd monthname now day minute isarray cbool round formatcurrency ' +
  'conversions csng timevalue second year space abs clng timeserial fixs len asc ' +
  'isempty maths dateserial atn timer isobject filter weekday datevalue ccur isdate ' +
  'instr datediff formatdatetime replace isnull right sgn array snumeric log cdbl hex ' +
  'chr lbound msgbox ucase getlocale cos cdate cbyte rtrim join hour oct typename trim ' +
  'strcomp int createobject loadpicture tan formatnumber mid ' +
  'split  cint sin datepart ltrim sqr ' +
  'time derived eval date formatpercent exp inputbox left ascw ' +
  'chrw regexp cstr err').split(" ");
  const BUILT_IN_OBJECTS = [
    "server",
    "response",
    "request",
    // take no arguments so can be called without ()
    "scriptengine",
    "scriptenginebuildversion",
    "scriptengineminorversion",
    "scriptenginemajorversion"
  ];

  const BUILT_IN_CALL = {
    begin: concat(either(...BUILT_IN_FUNCTIONS), "\\s*\\("),
    // relevance 0 because this is acting as a beginKeywords really
    relevance:0,
    keywords: {
      built_in: BUILT_IN_FUNCTIONS
    }
  };

  return {
    name: 'VBScript',
    aliases: ['vbs'],
    case_insensitive: true,
    keywords: {
      keyword:
        'call class const dim do loop erase execute executeglobal exit for each next function ' +
        'if then else on error option explicit new private property let get public randomize ' +
        'redim rem select case set stop sub while wend with end to elseif is or xor and not ' +
        'class_initialize class_terminate default preserve in me byval byref step resume goto',
      built_in: BUILT_IN_OBJECTS,
      literal:
        'true false null nothing empty'
    },
    illegal: '//',
    contains: [
      BUILT_IN_CALL,
      hljs.inherit(hljs.QUOTE_STRING_MODE, {contains: [{begin: '""'}]}),
      hljs.COMMENT(
        /'/,
        /$/,
        {
          relevance: 0
        }
      ),
      hljs.C_NUMBER_MODE
    ]
  };
}

module.exports = vbscript;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3Zic2NyaXB0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWE7QUFDYjs7QUFFQTtBQUNBLFdBQVcsaUJBQWlCO0FBQzVCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyxzQkFBc0I7QUFDakMsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHFCQUFxQjtBQUNoQyxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLFlBQVksWUFBWSxFQUFFO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoic3RhdGljL2NodW5rcy8xODIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHJldHVybnMge1JlZ0V4cH1cbiAqICovXG5cbi8qKlxuICogQHBhcmFtIHtSZWdFeHAgfCBzdHJpbmcgfSByZVxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gc291cmNlKHJlKSB7XG4gIGlmICghcmUpIHJldHVybiBudWxsO1xuICBpZiAodHlwZW9mIHJlID09PSBcInN0cmluZ1wiKSByZXR1cm4gcmU7XG5cbiAgcmV0dXJuIHJlLnNvdXJjZTtcbn1cblxuLyoqXG4gKiBAcGFyYW0gey4uLihSZWdFeHAgfCBzdHJpbmcpIH0gYXJnc1xuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gY29uY2F0KC4uLmFyZ3MpIHtcbiAgY29uc3Qgam9pbmVkID0gYXJncy5tYXAoKHgpID0+IHNvdXJjZSh4KSkuam9pbihcIlwiKTtcbiAgcmV0dXJuIGpvaW5lZDtcbn1cblxuLyoqXG4gKiBBbnkgb2YgdGhlIHBhc3NlZCBleHByZXNzc2lvbnMgbWF5IG1hdGNoXG4gKlxuICogQ3JlYXRlcyBhIGh1Z2UgdGhpcyB8IHRoaXMgfCB0aGF0IHwgdGhhdCBtYXRjaFxuICogQHBhcmFtIHsoUmVnRXhwIHwgc3RyaW5nKVtdIH0gYXJnc1xuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZWl0aGVyKC4uLmFyZ3MpIHtcbiAgY29uc3Qgam9pbmVkID0gJygnICsgYXJncy5tYXAoKHgpID0+IHNvdXJjZSh4KSkuam9pbihcInxcIikgKyBcIilcIjtcbiAgcmV0dXJuIGpvaW5lZDtcbn1cblxuLypcbkxhbmd1YWdlOiBWQlNjcmlwdFxuRGVzY3JpcHRpb246IFZCU2NyaXB0IChcIk1pY3Jvc29mdCBWaXN1YWwgQmFzaWMgU2NyaXB0aW5nIEVkaXRpb25cIikgaXMgYW4gQWN0aXZlIFNjcmlwdGluZyBsYW5ndWFnZSBkZXZlbG9wZWQgYnkgTWljcm9zb2Z0IHRoYXQgaXMgbW9kZWxlZCBvbiBWaXN1YWwgQmFzaWMuXG5BdXRob3I6IE5pa2l0YSBMZWR5YWV2IDxsZW5pa2l0YUB5YW5kZXgucnU+XG5Db250cmlidXRvcnM6IE1pY2hhbCBHYWJydWtpZXdpY3ogPG1nYWJydUBnbWFpbC5jb20+XG5XZWJzaXRlOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9WQlNjcmlwdFxuQ2F0ZWdvcnk6IHNjcmlwdGluZ1xuKi9cblxuLyoqIEB0eXBlIExhbmd1YWdlRm4gKi9cbmZ1bmN0aW9uIHZic2NyaXB0KGhsanMpIHtcbiAgY29uc3QgQlVJTFRfSU5fRlVOQ1RJT05TID0gKCdsY2FzZSBtb250aCB2YXJ0eXBlIGluc3RycmV2IHVib3VuZCBzZXRsb2NhbGUgZ2V0b2JqZWN0IHJnYiBnZXRyZWYgc3RyaW5nICcgK1xuICAnd2Vla2RheW5hbWUgcm5kIGRhdGVhZGQgbW9udGhuYW1lIG5vdyBkYXkgbWludXRlIGlzYXJyYXkgY2Jvb2wgcm91bmQgZm9ybWF0Y3VycmVuY3kgJyArXG4gICdjb252ZXJzaW9ucyBjc25nIHRpbWV2YWx1ZSBzZWNvbmQgeWVhciBzcGFjZSBhYnMgY2xuZyB0aW1lc2VyaWFsIGZpeHMgbGVuIGFzYyAnICtcbiAgJ2lzZW1wdHkgbWF0aHMgZGF0ZXNlcmlhbCBhdG4gdGltZXIgaXNvYmplY3QgZmlsdGVyIHdlZWtkYXkgZGF0ZXZhbHVlIGNjdXIgaXNkYXRlICcgK1xuICAnaW5zdHIgZGF0ZWRpZmYgZm9ybWF0ZGF0ZXRpbWUgcmVwbGFjZSBpc251bGwgcmlnaHQgc2duIGFycmF5IHNudW1lcmljIGxvZyBjZGJsIGhleCAnICtcbiAgJ2NociBsYm91bmQgbXNnYm94IHVjYXNlIGdldGxvY2FsZSBjb3MgY2RhdGUgY2J5dGUgcnRyaW0gam9pbiBob3VyIG9jdCB0eXBlbmFtZSB0cmltICcgK1xuICAnc3RyY29tcCBpbnQgY3JlYXRlb2JqZWN0IGxvYWRwaWN0dXJlIHRhbiBmb3JtYXRudW1iZXIgbWlkICcgK1xuICAnc3BsaXQgIGNpbnQgc2luIGRhdGVwYXJ0IGx0cmltIHNxciAnICtcbiAgJ3RpbWUgZGVyaXZlZCBldmFsIGRhdGUgZm9ybWF0cGVyY2VudCBleHAgaW5wdXRib3ggbGVmdCBhc2N3ICcgK1xuICAnY2hydyByZWdleHAgY3N0ciBlcnInKS5zcGxpdChcIiBcIik7XG4gIGNvbnN0IEJVSUxUX0lOX09CSkVDVFMgPSBbXG4gICAgXCJzZXJ2ZXJcIixcbiAgICBcInJlc3BvbnNlXCIsXG4gICAgXCJyZXF1ZXN0XCIsXG4gICAgLy8gdGFrZSBubyBhcmd1bWVudHMgc28gY2FuIGJlIGNhbGxlZCB3aXRob3V0ICgpXG4gICAgXCJzY3JpcHRlbmdpbmVcIixcbiAgICBcInNjcmlwdGVuZ2luZWJ1aWxkdmVyc2lvblwiLFxuICAgIFwic2NyaXB0ZW5naW5lbWlub3J2ZXJzaW9uXCIsXG4gICAgXCJzY3JpcHRlbmdpbmVtYWpvcnZlcnNpb25cIlxuICBdO1xuXG4gIGNvbnN0IEJVSUxUX0lOX0NBTEwgPSB7XG4gICAgYmVnaW46IGNvbmNhdChlaXRoZXIoLi4uQlVJTFRfSU5fRlVOQ1RJT05TKSwgXCJcXFxccypcXFxcKFwiKSxcbiAgICAvLyByZWxldmFuY2UgMCBiZWNhdXNlIHRoaXMgaXMgYWN0aW5nIGFzIGEgYmVnaW5LZXl3b3JkcyByZWFsbHlcbiAgICByZWxldmFuY2U6MCxcbiAgICBrZXl3b3Jkczoge1xuICAgICAgYnVpbHRfaW46IEJVSUxUX0lOX0ZVTkNUSU9OU1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4ge1xuICAgIG5hbWU6ICdWQlNjcmlwdCcsXG4gICAgYWxpYXNlczogWyd2YnMnXSxcbiAgICBjYXNlX2luc2Vuc2l0aXZlOiB0cnVlLFxuICAgIGtleXdvcmRzOiB7XG4gICAgICBrZXl3b3JkOlxuICAgICAgICAnY2FsbCBjbGFzcyBjb25zdCBkaW0gZG8gbG9vcCBlcmFzZSBleGVjdXRlIGV4ZWN1dGVnbG9iYWwgZXhpdCBmb3IgZWFjaCBuZXh0IGZ1bmN0aW9uICcgK1xuICAgICAgICAnaWYgdGhlbiBlbHNlIG9uIGVycm9yIG9wdGlvbiBleHBsaWNpdCBuZXcgcHJpdmF0ZSBwcm9wZXJ0eSBsZXQgZ2V0IHB1YmxpYyByYW5kb21pemUgJyArXG4gICAgICAgICdyZWRpbSByZW0gc2VsZWN0IGNhc2Ugc2V0IHN0b3Agc3ViIHdoaWxlIHdlbmQgd2l0aCBlbmQgdG8gZWxzZWlmIGlzIG9yIHhvciBhbmQgbm90ICcgK1xuICAgICAgICAnY2xhc3NfaW5pdGlhbGl6ZSBjbGFzc190ZXJtaW5hdGUgZGVmYXVsdCBwcmVzZXJ2ZSBpbiBtZSBieXZhbCBieXJlZiBzdGVwIHJlc3VtZSBnb3RvJyxcbiAgICAgIGJ1aWx0X2luOiBCVUlMVF9JTl9PQkpFQ1RTLFxuICAgICAgbGl0ZXJhbDpcbiAgICAgICAgJ3RydWUgZmFsc2UgbnVsbCBub3RoaW5nIGVtcHR5J1xuICAgIH0sXG4gICAgaWxsZWdhbDogJy8vJyxcbiAgICBjb250YWluczogW1xuICAgICAgQlVJTFRfSU5fQ0FMTCxcbiAgICAgIGhsanMuaW5oZXJpdChobGpzLlFVT1RFX1NUUklOR19NT0RFLCB7Y29udGFpbnM6IFt7YmVnaW46ICdcIlwiJ31dfSksXG4gICAgICBobGpzLkNPTU1FTlQoXG4gICAgICAgIC8nLyxcbiAgICAgICAgLyQvLFxuICAgICAgICB7XG4gICAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICAgIH1cbiAgICAgICksXG4gICAgICBobGpzLkNfTlVNQkVSX01PREVcbiAgICBdXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdmJzY3JpcHQ7XG4iXSwic291cmNlUm9vdCI6IiJ9