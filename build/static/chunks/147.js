(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[147],{

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

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3JpYi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoic3RhdGljL2NodW5rcy8xNDcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuTGFuZ3VhZ2U6IFJlbmRlck1hbiBSSUJcbkF1dGhvcjogS29uc3RhbnRpbiBFdmRva2ltZW5rbyA8cWV3ZXJ0eUBnbWFpbC5jb20+XG5Db250cmlidXRvcnM6IFNodWVuLUh1ZWkgR3VhbiA8ZHJha2UuZ3VhbkBnbWFpbC5jb20+XG5XZWJzaXRlOiBodHRwczovL3JlbmRlcm1hbi5waXhhci5jb20vcmVzb3VyY2VzL1JlbmRlck1hbl8yMC9yaWJCaW5kaW5nLmh0bWxcbkNhdGVnb3J5OiBncmFwaGljc1xuKi9cblxuZnVuY3Rpb24gcmliKGhsanMpIHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnUmVuZGVyTWFuIFJJQicsXG4gICAga2V5d29yZHM6XG4gICAgICAnQXJjaGl2ZVJlY29yZCBBcmVhTGlnaHRTb3VyY2UgQXRtb3NwaGVyZSBBdHRyaWJ1dGUgQXR0cmlidXRlQmVnaW4gQXR0cmlidXRlRW5kIEJhc2lzICcgK1xuICAgICAgJ0JlZ2luIEJsb2JieSBCb3VuZCBDbGlwcGluZyBDbGlwcGluZ1BsYW5lIENvbG9yIENvbG9yU2FtcGxlcyBDb25jYXRUcmFuc2Zvcm0gQ29uZSAnICtcbiAgICAgICdDb29yZGluYXRlU3lzdGVtIENvb3JkU3lzVHJhbnNmb3JtIENyb3BXaW5kb3cgQ3VydmVzIEN5bGluZGVyIERlcHRoT2ZGaWVsZCBEZXRhaWwgJyArXG4gICAgICAnRGV0YWlsUmFuZ2UgRGlzayBEaXNwbGFjZW1lbnQgRGlzcGxheSBFbmQgRXJyb3JIYW5kbGVyIEV4cG9zdXJlIEV4dGVyaW9yIEZvcm1hdCAnICtcbiAgICAgICdGcmFtZUFzcGVjdFJhdGlvIEZyYW1lQmVnaW4gRnJhbWVFbmQgR2VuZXJhbFBvbHlnb24gR2VvbWV0cmljQXBwcm94aW1hdGlvbiBHZW9tZXRyeSAnICtcbiAgICAgICdIaWRlciBIeXBlcmJvbG9pZCBJZGVudGl0eSBJbGx1bWluYXRlIEltYWdlciBJbnRlcmlvciBMaWdodFNvdXJjZSAnICtcbiAgICAgICdNYWtlQ3ViZUZhY2VFbnZpcm9ubWVudCBNYWtlTGF0TG9uZ0Vudmlyb25tZW50IE1ha2VTaGFkb3cgTWFrZVRleHR1cmUgTWF0dGUgJyArXG4gICAgICAnTW90aW9uQmVnaW4gTW90aW9uRW5kIE51UGF0Y2ggT2JqZWN0QmVnaW4gT2JqZWN0RW5kIE9iamVjdEluc3RhbmNlIE9wYWNpdHkgT3B0aW9uICcgK1xuICAgICAgJ09yaWVudGF0aW9uIFBhcmFib2xvaWQgUGF0Y2ggUGF0Y2hNZXNoIFBlcnNwZWN0aXZlIFBpeGVsRmlsdGVyIFBpeGVsU2FtcGxlcyAnICtcbiAgICAgICdQaXhlbFZhcmlhbmNlIFBvaW50cyBQb2ludHNHZW5lcmFsUG9seWdvbnMgUG9pbnRzUG9seWdvbnMgUG9seWdvbiBQcm9jZWR1cmFsIFByb2plY3Rpb24gJyArXG4gICAgICAnUXVhbnRpemUgUmVhZEFyY2hpdmUgUmVsYXRpdmVEZXRhaWwgUmV2ZXJzZU9yaWVudGF0aW9uIFJvdGF0ZSBTY2FsZSBTY3JlZW5XaW5kb3cgJyArXG4gICAgICAnU2hhZGluZ0ludGVycG9sYXRpb24gU2hhZGluZ1JhdGUgU2h1dHRlciBTaWRlcyBTa2V3IFNvbGlkQmVnaW4gU29saWRFbmQgU3BoZXJlICcgK1xuICAgICAgJ1N1YmRpdmlzaW9uTWVzaCBTdXJmYWNlIFRleHR1cmVDb29yZGluYXRlcyBUb3J1cyBUcmFuc2Zvcm0gVHJhbnNmb3JtQmVnaW4gVHJhbnNmb3JtRW5kICcgK1xuICAgICAgJ1RyYW5zZm9ybVBvaW50cyBUcmFuc2xhdGUgVHJpbUN1cnZlIFdvcmxkQmVnaW4gV29ybGRFbmQnLFxuICAgIGlsbGVnYWw6ICc8LycsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIGhsanMuSEFTSF9DT01NRU5UX01PREUsXG4gICAgICBobGpzLkNfTlVNQkVSX01PREUsXG4gICAgICBobGpzLkFQT1NfU1RSSU5HX01PREUsXG4gICAgICBobGpzLlFVT1RFX1NUUklOR19NT0RFXG4gICAgXVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJpYjtcbiJdLCJzb3VyY2VSb290IjoiIn0=