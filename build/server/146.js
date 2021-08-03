exports.ids = [146];
exports.modules = {

/***/ "./node_modules/highlight.js/lib/languages/rib.js":
/*!********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/rib.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: RenderMan RIB
Author: Konstantin Evdokimenko <qewerty@gmail.com>
Contributors: Shuen-Huei Guan <drake.guan@gmail.com>
Website: https://renderman.pixar.com/resources/RenderMan_20/ribBinding.html
Category: graphics
*/

function rib(hljs) {
  return {
    name: 'RenderMan RIB',
    keywords:
      'ArchiveRecord AreaLightSource Atmosphere Attribute AttributeBegin AttributeEnd Basis ' +
      'Begin Blobby Bound Clipping ClippingPlane Color ColorSamples ConcatTransform Cone ' +
      'CoordinateSystem CoordSysTransform CropWindow Curves Cylinder DepthOfField Detail ' +
      'DetailRange Disk Displacement Display End ErrorHandler Exposure Exterior Format ' +
      'FrameAspectRatio FrameBegin FrameEnd GeneralPolygon GeometricApproximation Geometry ' +
      'Hider Hyperboloid Identity Illuminate Imager Interior LightSource ' +
      'MakeCubeFaceEnvironment MakeLatLongEnvironment MakeShadow MakeTexture Matte ' +
      'MotionBegin MotionEnd NuPatch ObjectBegin ObjectEnd ObjectInstance Opacity Option ' +
      'Orientation Paraboloid Patch PatchMesh Perspective PixelFilter PixelSamples ' +
      'PixelVariance Points PointsGeneralPolygons PointsPolygons Polygon Procedural Projection ' +
      'Quantize ReadArchive RelativeDetail ReverseOrientation Rotate Scale ScreenWindow ' +
      'ShadingInterpolation ShadingRate Shutter Sides Skew SolidBegin SolidEnd Sphere ' +
      'SubdivisionMesh Surface TextureCoordinates Torus Transform TransformBegin TransformEnd ' +
      'TransformPoints Translate TrimCurve WorldBegin WorldEnd',
    illegal: '</',
    contains: [
      hljs.HASH_COMMENT_MODE,
      hljs.C_NUMBER_MODE,
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE
    ]
  };
}

module.exports = rib;


/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvcmliLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiMTQ2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBSZW5kZXJNYW4gUklCXG5BdXRob3I6IEtvbnN0YW50aW4gRXZkb2tpbWVua28gPHFld2VydHlAZ21haWwuY29tPlxuQ29udHJpYnV0b3JzOiBTaHVlbi1IdWVpIEd1YW4gPGRyYWtlLmd1YW5AZ21haWwuY29tPlxuV2Vic2l0ZTogaHR0cHM6Ly9yZW5kZXJtYW4ucGl4YXIuY29tL3Jlc291cmNlcy9SZW5kZXJNYW5fMjAvcmliQmluZGluZy5odG1sXG5DYXRlZ29yeTogZ3JhcGhpY3NcbiovXG5cbmZ1bmN0aW9uIHJpYihobGpzKSB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ1JlbmRlck1hbiBSSUInLFxuICAgIGtleXdvcmRzOlxuICAgICAgJ0FyY2hpdmVSZWNvcmQgQXJlYUxpZ2h0U291cmNlIEF0bW9zcGhlcmUgQXR0cmlidXRlIEF0dHJpYnV0ZUJlZ2luIEF0dHJpYnV0ZUVuZCBCYXNpcyAnICtcbiAgICAgICdCZWdpbiBCbG9iYnkgQm91bmQgQ2xpcHBpbmcgQ2xpcHBpbmdQbGFuZSBDb2xvciBDb2xvclNhbXBsZXMgQ29uY2F0VHJhbnNmb3JtIENvbmUgJyArXG4gICAgICAnQ29vcmRpbmF0ZVN5c3RlbSBDb29yZFN5c1RyYW5zZm9ybSBDcm9wV2luZG93IEN1cnZlcyBDeWxpbmRlciBEZXB0aE9mRmllbGQgRGV0YWlsICcgK1xuICAgICAgJ0RldGFpbFJhbmdlIERpc2sgRGlzcGxhY2VtZW50IERpc3BsYXkgRW5kIEVycm9ySGFuZGxlciBFeHBvc3VyZSBFeHRlcmlvciBGb3JtYXQgJyArXG4gICAgICAnRnJhbWVBc3BlY3RSYXRpbyBGcmFtZUJlZ2luIEZyYW1lRW5kIEdlbmVyYWxQb2x5Z29uIEdlb21ldHJpY0FwcHJveGltYXRpb24gR2VvbWV0cnkgJyArXG4gICAgICAnSGlkZXIgSHlwZXJib2xvaWQgSWRlbnRpdHkgSWxsdW1pbmF0ZSBJbWFnZXIgSW50ZXJpb3IgTGlnaHRTb3VyY2UgJyArXG4gICAgICAnTWFrZUN1YmVGYWNlRW52aXJvbm1lbnQgTWFrZUxhdExvbmdFbnZpcm9ubWVudCBNYWtlU2hhZG93IE1ha2VUZXh0dXJlIE1hdHRlICcgK1xuICAgICAgJ01vdGlvbkJlZ2luIE1vdGlvbkVuZCBOdVBhdGNoIE9iamVjdEJlZ2luIE9iamVjdEVuZCBPYmplY3RJbnN0YW5jZSBPcGFjaXR5IE9wdGlvbiAnICtcbiAgICAgICdPcmllbnRhdGlvbiBQYXJhYm9sb2lkIFBhdGNoIFBhdGNoTWVzaCBQZXJzcGVjdGl2ZSBQaXhlbEZpbHRlciBQaXhlbFNhbXBsZXMgJyArXG4gICAgICAnUGl4ZWxWYXJpYW5jZSBQb2ludHMgUG9pbnRzR2VuZXJhbFBvbHlnb25zIFBvaW50c1BvbHlnb25zIFBvbHlnb24gUHJvY2VkdXJhbCBQcm9qZWN0aW9uICcgK1xuICAgICAgJ1F1YW50aXplIFJlYWRBcmNoaXZlIFJlbGF0aXZlRGV0YWlsIFJldmVyc2VPcmllbnRhdGlvbiBSb3RhdGUgU2NhbGUgU2NyZWVuV2luZG93ICcgK1xuICAgICAgJ1NoYWRpbmdJbnRlcnBvbGF0aW9uIFNoYWRpbmdSYXRlIFNodXR0ZXIgU2lkZXMgU2tldyBTb2xpZEJlZ2luIFNvbGlkRW5kIFNwaGVyZSAnICtcbiAgICAgICdTdWJkaXZpc2lvbk1lc2ggU3VyZmFjZSBUZXh0dXJlQ29vcmRpbmF0ZXMgVG9ydXMgVHJhbnNmb3JtIFRyYW5zZm9ybUJlZ2luIFRyYW5zZm9ybUVuZCAnICtcbiAgICAgICdUcmFuc2Zvcm1Qb2ludHMgVHJhbnNsYXRlIFRyaW1DdXJ2ZSBXb3JsZEJlZ2luIFdvcmxkRW5kJyxcbiAgICBpbGxlZ2FsOiAnPC8nLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBobGpzLkhBU0hfQ09NTUVOVF9NT0RFLFxuICAgICAgaGxqcy5DX05VTUJFUl9NT0RFLFxuICAgICAgaGxqcy5BUE9TX1NUUklOR19NT0RFLFxuICAgICAgaGxqcy5RVU9URV9TVFJJTkdfTU9ERVxuICAgIF1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSByaWI7XG4iXSwic291cmNlUm9vdCI6IiJ9