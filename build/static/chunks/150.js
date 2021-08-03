(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[150],{

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

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3JzbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoic3RhdGljL2NodW5rcy8xNTAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuTGFuZ3VhZ2U6IFJlbmRlck1hbiBSU0xcbkF1dGhvcjogS29uc3RhbnRpbiBFdmRva2ltZW5rbyA8cWV3ZXJ0eUBnbWFpbC5jb20+XG5Db250cmlidXRvcnM6IFNodWVuLUh1ZWkgR3VhbiA8ZHJha2UuZ3VhbkBnbWFpbC5jb20+XG5XZWJzaXRlOiBodHRwczovL3JlbmRlcm1hbi5waXhhci5jb20vcmVzb3VyY2VzL1JlbmRlck1hbl8yMC9zaGFkaW5nTGFuZ3VhZ2UuaHRtbFxuQ2F0ZWdvcnk6IGdyYXBoaWNzXG4qL1xuXG5mdW5jdGlvbiByc2woaGxqcykge1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICdSZW5kZXJNYW4gUlNMJyxcbiAgICBrZXl3b3Jkczoge1xuICAgICAga2V5d29yZDpcbiAgICAgICAgJ2Zsb2F0IGNvbG9yIHBvaW50IG5vcm1hbCB2ZWN0b3IgbWF0cml4IHdoaWxlIGZvciBpZiBkbyByZXR1cm4gZWxzZSBicmVhayBleHRlcm4gY29udGludWUnLFxuICAgICAgYnVpbHRfaW46XG4gICAgICAgICdhYnMgYWNvcyBhbWJpZW50IGFyZWEgYXNpbiBhdGFuIGF0bW9zcGhlcmUgYXR0cmlidXRlIGNhbGN1bGF0ZW5vcm1hbCBjZWlsIGNlbGxub2lzZSAnICtcbiAgICAgICAgJ2NsYW1wIGNvbXAgY29uY2F0IGNvcyBkZWdyZWVzIGRlcHRoIERlcml2IGRpZmZ1c2UgZGlzdGFuY2UgRHUgRHYgZW52aXJvbm1lbnQgZXhwICcgK1xuICAgICAgICAnZmFjZWZvcndhcmQgZmlsdGVyc3RlcCBmbG9vciBmb3JtYXQgZnJlc25lbCBpbmNpZGVudCBsZW5ndGggbGlnaHRzb3VyY2UgbG9nIG1hdGNoICcgK1xuICAgICAgICAnbWF4IG1pbiBtb2Qgbm9pc2Ugbm9ybWFsaXplIG50cmFuc2Zvcm0gb3Bwb3NpdGUgb3B0aW9uIHBob25nIHBub2lzZSBwb3cgcHJpbnRmICcgK1xuICAgICAgICAncHRsaW5lZCByYWRpYW5zIHJhbmRvbSByZWZsZWN0IHJlZnJhY3QgcmVuZGVyaW5mbyByb3VuZCBzZXRjb21wIHNldHhjb21wIHNldHljb21wICcgK1xuICAgICAgICAnc2V0emNvbXAgc2hhZG93IHNpZ24gc2luIHNtb290aHN0ZXAgc3BlY3VsYXIgc3BlY3VsYXJicmRmIHNwbGluZSBzcXJ0IHN0ZXAgdGFuICcgK1xuICAgICAgICAndGV4dHVyZSB0ZXh0dXJlaW5mbyB0cmFjZSB0cmFuc2Zvcm0gdnRyYW5zZm9ybSB4Y29tcCB5Y29tcCB6Y29tcCdcbiAgICB9LFxuICAgIGlsbGVnYWw6ICc8LycsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIGhsanMuQ19MSU5FX0NPTU1FTlRfTU9ERSxcbiAgICAgIGhsanMuQ19CTE9DS19DT01NRU5UX01PREUsXG4gICAgICBobGpzLlFVT1RFX1NUUklOR19NT0RFLFxuICAgICAgaGxqcy5BUE9TX1NUUklOR19NT0RFLFxuICAgICAgaGxqcy5DX05VTUJFUl9NT0RFLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICAgICAgYmVnaW46ICcjJyxcbiAgICAgICAgZW5kOiAnJCdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2NsYXNzJyxcbiAgICAgICAgYmVnaW5LZXl3b3JkczogJ3N1cmZhY2UgZGlzcGxhY2VtZW50IGxpZ2h0IHZvbHVtZSBpbWFnZXInLFxuICAgICAgICBlbmQ6ICdcXFxcKCdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luS2V5d29yZHM6ICdpbGx1bWluYXRlIGlsbHVtaW5hbmNlIGdhdGhlcicsXG4gICAgICAgIGVuZDogJ1xcXFwoJ1xuICAgICAgfVxuICAgIF1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSByc2w7XG4iXSwic291cmNlUm9vdCI6IiJ9