(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[187],{

/***/ "./node_modules/highlight.js/lib/languages/xl.js":
/*!*******************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/xl.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: XL
Author: Christophe de Dinechin <christophe@taodyne.com>
Description: An extensible programming language, based on parse tree rewriting
Website: http://xlr.sf.net
*/

function xl(hljs) {
  const BUILTIN_MODULES =
    'ObjectLoader Animate MovieCredits Slides Filters Shading Materials LensFlare Mapping VLCAudioVideo ' +
    'StereoDecoder PointCloud NetworkAccess RemoteControl RegExp ChromaKey Snowfall NodeJS Speech Charts';

  const XL_KEYWORDS = {
    $pattern: /[a-zA-Z][a-zA-Z0-9_?]*/,
    keyword:
      'if then else do while until for loop import with is as where when by data constant ' +
      'integer real text name boolean symbol infix prefix postfix block tree',
    literal:
      'true false nil',
    built_in:
      'in mod rem and or xor not abs sign floor ceil sqrt sin cos tan asin ' +
      'acos atan exp expm1 log log2 log10 log1p pi at text_length text_range ' +
      'text_find text_replace contains page slide basic_slide title_slide ' +
      'title subtitle fade_in fade_out fade_at clear_color color line_color ' +
      'line_width texture_wrap texture_transform texture scale_?x scale_?y ' +
      'scale_?z? translate_?x translate_?y translate_?z? rotate_?x rotate_?y ' +
      'rotate_?z? rectangle circle ellipse sphere path line_to move_to ' +
      'quad_to curve_to theme background contents locally time mouse_?x ' +
      'mouse_?y mouse_buttons ' +
      BUILTIN_MODULES
  };

  const DOUBLE_QUOTE_TEXT = {
    className: 'string',
    begin: '"',
    end: '"',
    illegal: '\\n'
  };
  const SINGLE_QUOTE_TEXT = {
    className: 'string',
    begin: '\'',
    end: '\'',
    illegal: '\\n'
  };
  const LONG_TEXT = {
    className: 'string',
    begin: '<<',
    end: '>>'
  };
  const BASED_NUMBER = {
    className: 'number',
    begin: '[0-9]+#[0-9A-Z_]+(\\.[0-9-A-Z_]+)?#?([Ee][+-]?[0-9]+)?'
  };
  const IMPORT = {
    beginKeywords: 'import',
    end: '$',
    keywords: XL_KEYWORDS,
    contains: [ DOUBLE_QUOTE_TEXT ]
  };
  const FUNCTION_DEFINITION = {
    className: 'function',
    begin: /[a-z][^\n]*->/,
    returnBegin: true,
    end: /->/,
    contains: [
      hljs.inherit(hljs.TITLE_MODE, {
        starts: {
          endsWithParent: true,
          keywords: XL_KEYWORDS
        }
      })
    ]
  };
  return {
    name: 'XL',
    aliases: [ 'tao' ],
    keywords: XL_KEYWORDS,
    contains: [
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      DOUBLE_QUOTE_TEXT,
      SINGLE_QUOTE_TEXT,
      LONG_TEXT,
      FUNCTION_DEFINITION,
      IMPORT,
      BASED_NUMBER,
      hljs.NUMBER_MODE
    ]
  };
}

module.exports = xl;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3hsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvMTg3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBYTFxuQXV0aG9yOiBDaHJpc3RvcGhlIGRlIERpbmVjaGluIDxjaHJpc3RvcGhlQHRhb2R5bmUuY29tPlxuRGVzY3JpcHRpb246IEFuIGV4dGVuc2libGUgcHJvZ3JhbW1pbmcgbGFuZ3VhZ2UsIGJhc2VkIG9uIHBhcnNlIHRyZWUgcmV3cml0aW5nXG5XZWJzaXRlOiBodHRwOi8veGxyLnNmLm5ldFxuKi9cblxuZnVuY3Rpb24geGwoaGxqcykge1xuICBjb25zdCBCVUlMVElOX01PRFVMRVMgPVxuICAgICdPYmplY3RMb2FkZXIgQW5pbWF0ZSBNb3ZpZUNyZWRpdHMgU2xpZGVzIEZpbHRlcnMgU2hhZGluZyBNYXRlcmlhbHMgTGVuc0ZsYXJlIE1hcHBpbmcgVkxDQXVkaW9WaWRlbyAnICtcbiAgICAnU3RlcmVvRGVjb2RlciBQb2ludENsb3VkIE5ldHdvcmtBY2Nlc3MgUmVtb3RlQ29udHJvbCBSZWdFeHAgQ2hyb21hS2V5IFNub3dmYWxsIE5vZGVKUyBTcGVlY2ggQ2hhcnRzJztcblxuICBjb25zdCBYTF9LRVlXT1JEUyA9IHtcbiAgICAkcGF0dGVybjogL1thLXpBLVpdW2EtekEtWjAtOV8/XSovLFxuICAgIGtleXdvcmQ6XG4gICAgICAnaWYgdGhlbiBlbHNlIGRvIHdoaWxlIHVudGlsIGZvciBsb29wIGltcG9ydCB3aXRoIGlzIGFzIHdoZXJlIHdoZW4gYnkgZGF0YSBjb25zdGFudCAnICtcbiAgICAgICdpbnRlZ2VyIHJlYWwgdGV4dCBuYW1lIGJvb2xlYW4gc3ltYm9sIGluZml4IHByZWZpeCBwb3N0Zml4IGJsb2NrIHRyZWUnLFxuICAgIGxpdGVyYWw6XG4gICAgICAndHJ1ZSBmYWxzZSBuaWwnLFxuICAgIGJ1aWx0X2luOlxuICAgICAgJ2luIG1vZCByZW0gYW5kIG9yIHhvciBub3QgYWJzIHNpZ24gZmxvb3IgY2VpbCBzcXJ0IHNpbiBjb3MgdGFuIGFzaW4gJyArXG4gICAgICAnYWNvcyBhdGFuIGV4cCBleHBtMSBsb2cgbG9nMiBsb2cxMCBsb2cxcCBwaSBhdCB0ZXh0X2xlbmd0aCB0ZXh0X3JhbmdlICcgK1xuICAgICAgJ3RleHRfZmluZCB0ZXh0X3JlcGxhY2UgY29udGFpbnMgcGFnZSBzbGlkZSBiYXNpY19zbGlkZSB0aXRsZV9zbGlkZSAnICtcbiAgICAgICd0aXRsZSBzdWJ0aXRsZSBmYWRlX2luIGZhZGVfb3V0IGZhZGVfYXQgY2xlYXJfY29sb3IgY29sb3IgbGluZV9jb2xvciAnICtcbiAgICAgICdsaW5lX3dpZHRoIHRleHR1cmVfd3JhcCB0ZXh0dXJlX3RyYW5zZm9ybSB0ZXh0dXJlIHNjYWxlXz94IHNjYWxlXz95ICcgK1xuICAgICAgJ3NjYWxlXz96PyB0cmFuc2xhdGVfP3ggdHJhbnNsYXRlXz95IHRyYW5zbGF0ZV8/ej8gcm90YXRlXz94IHJvdGF0ZV8/eSAnICtcbiAgICAgICdyb3RhdGVfP3o/IHJlY3RhbmdsZSBjaXJjbGUgZWxsaXBzZSBzcGhlcmUgcGF0aCBsaW5lX3RvIG1vdmVfdG8gJyArXG4gICAgICAncXVhZF90byBjdXJ2ZV90byB0aGVtZSBiYWNrZ3JvdW5kIGNvbnRlbnRzIGxvY2FsbHkgdGltZSBtb3VzZV8/eCAnICtcbiAgICAgICdtb3VzZV8/eSBtb3VzZV9idXR0b25zICcgK1xuICAgICAgQlVJTFRJTl9NT0RVTEVTXG4gIH07XG5cbiAgY29uc3QgRE9VQkxFX1FVT1RFX1RFWFQgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICBiZWdpbjogJ1wiJyxcbiAgICBlbmQ6ICdcIicsXG4gICAgaWxsZWdhbDogJ1xcXFxuJ1xuICB9O1xuICBjb25zdCBTSU5HTEVfUVVPVEVfVEVYVCA9IHtcbiAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgIGJlZ2luOiAnXFwnJyxcbiAgICBlbmQ6ICdcXCcnLFxuICAgIGlsbGVnYWw6ICdcXFxcbidcbiAgfTtcbiAgY29uc3QgTE9OR19URVhUID0ge1xuICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgYmVnaW46ICc8PCcsXG4gICAgZW5kOiAnPj4nXG4gIH07XG4gIGNvbnN0IEJBU0VEX05VTUJFUiA9IHtcbiAgICBjbGFzc05hbWU6ICdudW1iZXInLFxuICAgIGJlZ2luOiAnWzAtOV0rI1swLTlBLVpfXSsoXFxcXC5bMC05LUEtWl9dKyk/Iz8oW0VlXVsrLV0/WzAtOV0rKT8nXG4gIH07XG4gIGNvbnN0IElNUE9SVCA9IHtcbiAgICBiZWdpbktleXdvcmRzOiAnaW1wb3J0JyxcbiAgICBlbmQ6ICckJyxcbiAgICBrZXl3b3JkczogWExfS0VZV09SRFMsXG4gICAgY29udGFpbnM6IFsgRE9VQkxFX1FVT1RFX1RFWFQgXVxuICB9O1xuICBjb25zdCBGVU5DVElPTl9ERUZJTklUSU9OID0ge1xuICAgIGNsYXNzTmFtZTogJ2Z1bmN0aW9uJyxcbiAgICBiZWdpbjogL1thLXpdW15cXG5dKi0+LyxcbiAgICByZXR1cm5CZWdpbjogdHJ1ZSxcbiAgICBlbmQ6IC8tPi8sXG4gICAgY29udGFpbnM6IFtcbiAgICAgIGhsanMuaW5oZXJpdChobGpzLlRJVExFX01PREUsIHtcbiAgICAgICAgc3RhcnRzOiB7XG4gICAgICAgICAgZW5kc1dpdGhQYXJlbnQ6IHRydWUsXG4gICAgICAgICAga2V5d29yZHM6IFhMX0tFWVdPUkRTXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgXVxuICB9O1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICdYTCcsXG4gICAgYWxpYXNlczogWyAndGFvJyBdLFxuICAgIGtleXdvcmRzOiBYTF9LRVlXT1JEUyxcbiAgICBjb250YWluczogW1xuICAgICAgaGxqcy5DX0xJTkVfQ09NTUVOVF9NT0RFLFxuICAgICAgaGxqcy5DX0JMT0NLX0NPTU1FTlRfTU9ERSxcbiAgICAgIERPVUJMRV9RVU9URV9URVhULFxuICAgICAgU0lOR0xFX1FVT1RFX1RFWFQsXG4gICAgICBMT05HX1RFWFQsXG4gICAgICBGVU5DVElPTl9ERUZJTklUSU9OLFxuICAgICAgSU1QT1JULFxuICAgICAgQkFTRURfTlVNQkVSLFxuICAgICAgaGxqcy5OVU1CRVJfTU9ERVxuICAgIF1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB4bDtcbiJdLCJzb3VyY2VSb290IjoiIn0=