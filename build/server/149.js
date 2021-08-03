exports.ids = [149];
exports.modules = {

/***/ "./node_modules/highlight.js/lib/languages/rsl.js":
/*!********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/rsl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: RenderMan RSL
Author: Konstantin Evdokimenko <qewerty@gmail.com>
Contributors: Shuen-Huei Guan <drake.guan@gmail.com>
Website: https://renderman.pixar.com/resources/RenderMan_20/shadingLanguage.html
Category: graphics
*/

function rsl(hljs) {
  return {
    name: 'RenderMan RSL',
    keywords: {
      keyword:
        'float color point normal vector matrix while for if do return else break extern continue',
      built_in:
        'abs acos ambient area asin atan atmosphere attribute calculatenormal ceil cellnoise ' +
        'clamp comp concat cos degrees depth Deriv diffuse distance Du Dv environment exp ' +
        'faceforward filterstep floor format fresnel incident length lightsource log match ' +
        'max min mod noise normalize ntransform opposite option phong pnoise pow printf ' +
        'ptlined radians random reflect refract renderinfo round setcomp setxcomp setycomp ' +
        'setzcomp shadow sign sin smoothstep specular specularbrdf spline sqrt step tan ' +
        'texture textureinfo trace transform vtransform xcomp ycomp zcomp'
    },
    illegal: '</',
    contains: [
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      hljs.QUOTE_STRING_MODE,
      hljs.APOS_STRING_MODE,
      hljs.C_NUMBER_MODE,
      {
        className: 'meta',
        begin: '#',
        end: '$'
      },
      {
        className: 'class',
        beginKeywords: 'surface displacement light volume imager',
        end: '\\('
      },
      {
        beginKeywords: 'illuminate illuminance gather',
        end: '\\('
      }
    ]
  };
}

module.exports = rsl;


/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvcnNsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiMTQ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBSZW5kZXJNYW4gUlNMXG5BdXRob3I6IEtvbnN0YW50aW4gRXZkb2tpbWVua28gPHFld2VydHlAZ21haWwuY29tPlxuQ29udHJpYnV0b3JzOiBTaHVlbi1IdWVpIEd1YW4gPGRyYWtlLmd1YW5AZ21haWwuY29tPlxuV2Vic2l0ZTogaHR0cHM6Ly9yZW5kZXJtYW4ucGl4YXIuY29tL3Jlc291cmNlcy9SZW5kZXJNYW5fMjAvc2hhZGluZ0xhbmd1YWdlLmh0bWxcbkNhdGVnb3J5OiBncmFwaGljc1xuKi9cblxuZnVuY3Rpb24gcnNsKGhsanMpIHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnUmVuZGVyTWFuIFJTTCcsXG4gICAga2V5d29yZHM6IHtcbiAgICAgIGtleXdvcmQ6XG4gICAgICAgICdmbG9hdCBjb2xvciBwb2ludCBub3JtYWwgdmVjdG9yIG1hdHJpeCB3aGlsZSBmb3IgaWYgZG8gcmV0dXJuIGVsc2UgYnJlYWsgZXh0ZXJuIGNvbnRpbnVlJyxcbiAgICAgIGJ1aWx0X2luOlxuICAgICAgICAnYWJzIGFjb3MgYW1iaWVudCBhcmVhIGFzaW4gYXRhbiBhdG1vc3BoZXJlIGF0dHJpYnV0ZSBjYWxjdWxhdGVub3JtYWwgY2VpbCBjZWxsbm9pc2UgJyArXG4gICAgICAgICdjbGFtcCBjb21wIGNvbmNhdCBjb3MgZGVncmVlcyBkZXB0aCBEZXJpdiBkaWZmdXNlIGRpc3RhbmNlIER1IER2IGVudmlyb25tZW50IGV4cCAnICtcbiAgICAgICAgJ2ZhY2Vmb3J3YXJkIGZpbHRlcnN0ZXAgZmxvb3IgZm9ybWF0IGZyZXNuZWwgaW5jaWRlbnQgbGVuZ3RoIGxpZ2h0c291cmNlIGxvZyBtYXRjaCAnICtcbiAgICAgICAgJ21heCBtaW4gbW9kIG5vaXNlIG5vcm1hbGl6ZSBudHJhbnNmb3JtIG9wcG9zaXRlIG9wdGlvbiBwaG9uZyBwbm9pc2UgcG93IHByaW50ZiAnICtcbiAgICAgICAgJ3B0bGluZWQgcmFkaWFucyByYW5kb20gcmVmbGVjdCByZWZyYWN0IHJlbmRlcmluZm8gcm91bmQgc2V0Y29tcCBzZXR4Y29tcCBzZXR5Y29tcCAnICtcbiAgICAgICAgJ3NldHpjb21wIHNoYWRvdyBzaWduIHNpbiBzbW9vdGhzdGVwIHNwZWN1bGFyIHNwZWN1bGFyYnJkZiBzcGxpbmUgc3FydCBzdGVwIHRhbiAnICtcbiAgICAgICAgJ3RleHR1cmUgdGV4dHVyZWluZm8gdHJhY2UgdHJhbnNmb3JtIHZ0cmFuc2Zvcm0geGNvbXAgeWNvbXAgemNvbXAnXG4gICAgfSxcbiAgICBpbGxlZ2FsOiAnPC8nLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBobGpzLkNfTElORV9DT01NRU5UX01PREUsXG4gICAgICBobGpzLkNfQkxPQ0tfQ09NTUVOVF9NT0RFLFxuICAgICAgaGxqcy5RVU9URV9TVFJJTkdfTU9ERSxcbiAgICAgIGhsanMuQVBPU19TVFJJTkdfTU9ERSxcbiAgICAgIGhsanMuQ19OVU1CRVJfTU9ERSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgICAgIGJlZ2luOiAnIycsXG4gICAgICAgIGVuZDogJyQnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdjbGFzcycsXG4gICAgICAgIGJlZ2luS2V5d29yZHM6ICdzdXJmYWNlIGRpc3BsYWNlbWVudCBsaWdodCB2b2x1bWUgaW1hZ2VyJyxcbiAgICAgICAgZW5kOiAnXFxcXCgnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbktleXdvcmRzOiAnaWxsdW1pbmF0ZSBpbGx1bWluYW5jZSBnYXRoZXInLFxuICAgICAgICBlbmQ6ICdcXFxcKCdcbiAgICAgIH1cbiAgICBdXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcnNsO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==