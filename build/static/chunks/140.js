(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[140],{

/***/ "./node_modules/highlight.js/lib/languages/purebasic.js":
/*!**************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/purebasic.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: PureBASIC
Author: Tristano Ajmone <tajmone@gmail.com>
Description: Syntax highlighting for PureBASIC (v.5.00-5.60). No inline ASM highlighting. (v.1.2, May 2017)
Credits: I've taken inspiration from the PureBasic language file for GeSHi, created by Gustavo Julio Fiorenza (GuShH).
Website: https://www.purebasic.com
*/

// Base deafult colors in PB IDE: background: #FFFFDF; foreground: #000000;

function purebasic(hljs) {
  const STRINGS = { // PB IDE color: #0080FF (Azure Radiance)
    className: 'string',
    begin: '(~)?"',
    end: '"',
    illegal: '\\n'
  };
  const CONSTANTS = { // PB IDE color: #924B72 (Cannon Pink)
    //  "#" + a letter or underscore + letters, digits or underscores + (optional) "$"
    className: 'symbol',
    begin: '#[a-zA-Z_]\\w*\\$?'
  };

  return {
    name: 'PureBASIC',
    aliases: [
      'pb',
      'pbi'
    ],
    keywords: // PB IDE color: #006666 (Blue Stone) + Bold
      // Keywords from all version of PureBASIC 5.00 upward ...
      'Align And Array As Break CallDebugger Case CompilerCase CompilerDefault ' +
      'CompilerElse CompilerElseIf CompilerEndIf CompilerEndSelect CompilerError ' +
      'CompilerIf CompilerSelect CompilerWarning Continue Data DataSection Debug ' +
      'DebugLevel Declare DeclareC DeclareCDLL DeclareDLL DeclareModule Default ' +
      'Define Dim DisableASM DisableDebugger DisableExplicit Else ElseIf EnableASM ' +
      'EnableDebugger EnableExplicit End EndDataSection EndDeclareModule EndEnumeration ' +
      'EndIf EndImport EndInterface EndMacro EndModule EndProcedure EndSelect ' +
      'EndStructure EndStructureUnion EndWith Enumeration EnumerationBinary Extends ' +
      'FakeReturn For ForEach ForEver Global Gosub Goto If Import ImportC ' +
      'IncludeBinary IncludeFile IncludePath Interface List Macro MacroExpandedCount ' +
      'Map Module NewList NewMap Next Not Or Procedure ProcedureC ' +
      'ProcedureCDLL ProcedureDLL ProcedureReturn Protected Prototype PrototypeC ReDim ' +
      'Read Repeat Restore Return Runtime Select Shared Static Step Structure ' +
      'StructureUnion Swap Threaded To UndefineMacro Until Until  UnuseModule ' +
      'UseModule Wend While With XIncludeFile XOr',
    contains: [
      // COMMENTS | PB IDE color: #00AAAA (Persian Green)
      hljs.COMMENT(';', '$', {
        relevance: 0
      }),

      { // PROCEDURES DEFINITIONS
        className: 'function',
        begin: '\\b(Procedure|Declare)(C|CDLL|DLL)?\\b',
        end: '\\(',
        excludeEnd: true,
        returnBegin: true,
        contains: [
          { // PROCEDURE KEYWORDS | PB IDE color: #006666 (Blue Stone) + Bold
            className: 'keyword',
            begin: '(Procedure|Declare)(C|CDLL|DLL)?',
            excludeEnd: true
          },
          { // PROCEDURE RETURN TYPE SETTING | PB IDE color: #000000 (Black)
            className: 'type',
            begin: '\\.\\w*'
            // end: ' ',
          },
          hljs.UNDERSCORE_TITLE_MODE // PROCEDURE NAME | PB IDE color: #006666 (Blue Stone)
        ]
      },
      STRINGS,
      CONSTANTS
    ]
  };
}

/*  ==============================================================================
                                      CHANGELOG
    ==============================================================================
    - v.1.2 (2017-05-12)
        -- BUG-FIX: Some keywords were accidentally joyned together. Now fixed.
    - v.1.1 (2017-04-30)
        -- Updated to PureBASIC 5.60.
        -- Keywords list now built by extracting them from the PureBASIC SDK's
           "SyntaxHilighting.dll" (from each PureBASIC version). Tokens from each
           version are added to the list, and renamed or removed tokens are kept
           for the sake of covering all versions of the language from PureBASIC
           v5.00 upward. (NOTE: currently, there are no renamed or deprecated
           tokens in the keywords list). For more info, see:
           -- http://www.purebasic.fr/english/viewtopic.php?&p=506269
           -- https://github.com/tajmone/purebasic-archives/tree/master/syntax-highlighting/guidelines
    - v.1.0 (April 2016)
        -- First release
        -- Keywords list taken and adapted from GuShH's (Gustavo Julio Fiorenza)
           PureBasic language file for GeSHi:
           -- https://github.com/easybook/geshi/blob/master/geshi/purebasic.php
*/

module.exports = purebasic;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3B1cmViYXNpYy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzREFBc0Q7O0FBRXREO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxPQUFPOztBQUVQLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJzdGF0aWMvY2h1bmtzLzE0MC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5MYW5ndWFnZTogUHVyZUJBU0lDXG5BdXRob3I6IFRyaXN0YW5vIEFqbW9uZSA8dGFqbW9uZUBnbWFpbC5jb20+XG5EZXNjcmlwdGlvbjogU3ludGF4IGhpZ2hsaWdodGluZyBmb3IgUHVyZUJBU0lDICh2LjUuMDAtNS42MCkuIE5vIGlubGluZSBBU00gaGlnaGxpZ2h0aW5nLiAodi4xLjIsIE1heSAyMDE3KVxuQ3JlZGl0czogSSd2ZSB0YWtlbiBpbnNwaXJhdGlvbiBmcm9tIHRoZSBQdXJlQmFzaWMgbGFuZ3VhZ2UgZmlsZSBmb3IgR2VTSGksIGNyZWF0ZWQgYnkgR3VzdGF2byBKdWxpbyBGaW9yZW56YSAoR3VTaEgpLlxuV2Vic2l0ZTogaHR0cHM6Ly93d3cucHVyZWJhc2ljLmNvbVxuKi9cblxuLy8gQmFzZSBkZWFmdWx0IGNvbG9ycyBpbiBQQiBJREU6IGJhY2tncm91bmQ6ICNGRkZGREY7IGZvcmVncm91bmQ6ICMwMDAwMDA7XG5cbmZ1bmN0aW9uIHB1cmViYXNpYyhobGpzKSB7XG4gIGNvbnN0IFNUUklOR1MgPSB7IC8vIFBCIElERSBjb2xvcjogIzAwODBGRiAoQXp1cmUgUmFkaWFuY2UpXG4gICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICBiZWdpbjogJyh+KT9cIicsXG4gICAgZW5kOiAnXCInLFxuICAgIGlsbGVnYWw6ICdcXFxcbidcbiAgfTtcbiAgY29uc3QgQ09OU1RBTlRTID0geyAvLyBQQiBJREUgY29sb3I6ICM5MjRCNzIgKENhbm5vbiBQaW5rKVxuICAgIC8vICBcIiNcIiArIGEgbGV0dGVyIG9yIHVuZGVyc2NvcmUgKyBsZXR0ZXJzLCBkaWdpdHMgb3IgdW5kZXJzY29yZXMgKyAob3B0aW9uYWwpIFwiJFwiXG4gICAgY2xhc3NOYW1lOiAnc3ltYm9sJyxcbiAgICBiZWdpbjogJyNbYS16QS1aX11cXFxcdypcXFxcJD8nXG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnUHVyZUJBU0lDJyxcbiAgICBhbGlhc2VzOiBbXG4gICAgICAncGInLFxuICAgICAgJ3BiaSdcbiAgICBdLFxuICAgIGtleXdvcmRzOiAvLyBQQiBJREUgY29sb3I6ICMwMDY2NjYgKEJsdWUgU3RvbmUpICsgQm9sZFxuICAgICAgLy8gS2V5d29yZHMgZnJvbSBhbGwgdmVyc2lvbiBvZiBQdXJlQkFTSUMgNS4wMCB1cHdhcmQgLi4uXG4gICAgICAnQWxpZ24gQW5kIEFycmF5IEFzIEJyZWFrIENhbGxEZWJ1Z2dlciBDYXNlIENvbXBpbGVyQ2FzZSBDb21waWxlckRlZmF1bHQgJyArXG4gICAgICAnQ29tcGlsZXJFbHNlIENvbXBpbGVyRWxzZUlmIENvbXBpbGVyRW5kSWYgQ29tcGlsZXJFbmRTZWxlY3QgQ29tcGlsZXJFcnJvciAnICtcbiAgICAgICdDb21waWxlcklmIENvbXBpbGVyU2VsZWN0IENvbXBpbGVyV2FybmluZyBDb250aW51ZSBEYXRhIERhdGFTZWN0aW9uIERlYnVnICcgK1xuICAgICAgJ0RlYnVnTGV2ZWwgRGVjbGFyZSBEZWNsYXJlQyBEZWNsYXJlQ0RMTCBEZWNsYXJlRExMIERlY2xhcmVNb2R1bGUgRGVmYXVsdCAnICtcbiAgICAgICdEZWZpbmUgRGltIERpc2FibGVBU00gRGlzYWJsZURlYnVnZ2VyIERpc2FibGVFeHBsaWNpdCBFbHNlIEVsc2VJZiBFbmFibGVBU00gJyArXG4gICAgICAnRW5hYmxlRGVidWdnZXIgRW5hYmxlRXhwbGljaXQgRW5kIEVuZERhdGFTZWN0aW9uIEVuZERlY2xhcmVNb2R1bGUgRW5kRW51bWVyYXRpb24gJyArXG4gICAgICAnRW5kSWYgRW5kSW1wb3J0IEVuZEludGVyZmFjZSBFbmRNYWNybyBFbmRNb2R1bGUgRW5kUHJvY2VkdXJlIEVuZFNlbGVjdCAnICtcbiAgICAgICdFbmRTdHJ1Y3R1cmUgRW5kU3RydWN0dXJlVW5pb24gRW5kV2l0aCBFbnVtZXJhdGlvbiBFbnVtZXJhdGlvbkJpbmFyeSBFeHRlbmRzICcgK1xuICAgICAgJ0Zha2VSZXR1cm4gRm9yIEZvckVhY2ggRm9yRXZlciBHbG9iYWwgR29zdWIgR290byBJZiBJbXBvcnQgSW1wb3J0QyAnICtcbiAgICAgICdJbmNsdWRlQmluYXJ5IEluY2x1ZGVGaWxlIEluY2x1ZGVQYXRoIEludGVyZmFjZSBMaXN0IE1hY3JvIE1hY3JvRXhwYW5kZWRDb3VudCAnICtcbiAgICAgICdNYXAgTW9kdWxlIE5ld0xpc3QgTmV3TWFwIE5leHQgTm90IE9yIFByb2NlZHVyZSBQcm9jZWR1cmVDICcgK1xuICAgICAgJ1Byb2NlZHVyZUNETEwgUHJvY2VkdXJlRExMIFByb2NlZHVyZVJldHVybiBQcm90ZWN0ZWQgUHJvdG90eXBlIFByb3RvdHlwZUMgUmVEaW0gJyArXG4gICAgICAnUmVhZCBSZXBlYXQgUmVzdG9yZSBSZXR1cm4gUnVudGltZSBTZWxlY3QgU2hhcmVkIFN0YXRpYyBTdGVwIFN0cnVjdHVyZSAnICtcbiAgICAgICdTdHJ1Y3R1cmVVbmlvbiBTd2FwIFRocmVhZGVkIFRvIFVuZGVmaW5lTWFjcm8gVW50aWwgVW50aWwgIFVudXNlTW9kdWxlICcgK1xuICAgICAgJ1VzZU1vZHVsZSBXZW5kIFdoaWxlIFdpdGggWEluY2x1ZGVGaWxlIFhPcicsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIC8vIENPTU1FTlRTIHwgUEIgSURFIGNvbG9yOiAjMDBBQUFBIChQZXJzaWFuIEdyZWVuKVxuICAgICAgaGxqcy5DT01NRU5UKCc7JywgJyQnLCB7XG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSksXG5cbiAgICAgIHsgLy8gUFJPQ0VEVVJFUyBERUZJTklUSU9OU1xuICAgICAgICBjbGFzc05hbWU6ICdmdW5jdGlvbicsXG4gICAgICAgIGJlZ2luOiAnXFxcXGIoUHJvY2VkdXJlfERlY2xhcmUpKEN8Q0RMTHxETEwpP1xcXFxiJyxcbiAgICAgICAgZW5kOiAnXFxcXCgnLFxuICAgICAgICBleGNsdWRlRW5kOiB0cnVlLFxuICAgICAgICByZXR1cm5CZWdpbjogdHJ1ZSxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICB7IC8vIFBST0NFRFVSRSBLRVlXT1JEUyB8IFBCIElERSBjb2xvcjogIzAwNjY2NiAoQmx1ZSBTdG9uZSkgKyBCb2xkXG4gICAgICAgICAgICBjbGFzc05hbWU6ICdrZXl3b3JkJyxcbiAgICAgICAgICAgIGJlZ2luOiAnKFByb2NlZHVyZXxEZWNsYXJlKShDfENETEx8RExMKT8nLFxuICAgICAgICAgICAgZXhjbHVkZUVuZDogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgeyAvLyBQUk9DRURVUkUgUkVUVVJOIFRZUEUgU0VUVElORyB8IFBCIElERSBjb2xvcjogIzAwMDAwMCAoQmxhY2spXG4gICAgICAgICAgICBjbGFzc05hbWU6ICd0eXBlJyxcbiAgICAgICAgICAgIGJlZ2luOiAnXFxcXC5cXFxcdyonXG4gICAgICAgICAgICAvLyBlbmQ6ICcgJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGhsanMuVU5ERVJTQ09SRV9USVRMRV9NT0RFIC8vIFBST0NFRFVSRSBOQU1FIHwgUEIgSURFIGNvbG9yOiAjMDA2NjY2IChCbHVlIFN0b25lKVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgU1RSSU5HUyxcbiAgICAgIENPTlNUQU5UU1xuICAgIF1cbiAgfTtcbn1cblxuLyogID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDSEFOR0VMT0dcbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAtIHYuMS4yICgyMDE3LTA1LTEyKVxuICAgICAgICAtLSBCVUctRklYOiBTb21lIGtleXdvcmRzIHdlcmUgYWNjaWRlbnRhbGx5IGpveW5lZCB0b2dldGhlci4gTm93IGZpeGVkLlxuICAgIC0gdi4xLjEgKDIwMTctMDQtMzApXG4gICAgICAgIC0tIFVwZGF0ZWQgdG8gUHVyZUJBU0lDIDUuNjAuXG4gICAgICAgIC0tIEtleXdvcmRzIGxpc3Qgbm93IGJ1aWx0IGJ5IGV4dHJhY3RpbmcgdGhlbSBmcm9tIHRoZSBQdXJlQkFTSUMgU0RLJ3NcbiAgICAgICAgICAgXCJTeW50YXhIaWxpZ2h0aW5nLmRsbFwiIChmcm9tIGVhY2ggUHVyZUJBU0lDIHZlcnNpb24pLiBUb2tlbnMgZnJvbSBlYWNoXG4gICAgICAgICAgIHZlcnNpb24gYXJlIGFkZGVkIHRvIHRoZSBsaXN0LCBhbmQgcmVuYW1lZCBvciByZW1vdmVkIHRva2VucyBhcmUga2VwdFxuICAgICAgICAgICBmb3IgdGhlIHNha2Ugb2YgY292ZXJpbmcgYWxsIHZlcnNpb25zIG9mIHRoZSBsYW5ndWFnZSBmcm9tIFB1cmVCQVNJQ1xuICAgICAgICAgICB2NS4wMCB1cHdhcmQuIChOT1RFOiBjdXJyZW50bHksIHRoZXJlIGFyZSBubyByZW5hbWVkIG9yIGRlcHJlY2F0ZWRcbiAgICAgICAgICAgdG9rZW5zIGluIHRoZSBrZXl3b3JkcyBsaXN0KS4gRm9yIG1vcmUgaW5mbywgc2VlOlxuICAgICAgICAgICAtLSBodHRwOi8vd3d3LnB1cmViYXNpYy5mci9lbmdsaXNoL3ZpZXd0b3BpYy5waHA/JnA9NTA2MjY5XG4gICAgICAgICAgIC0tIGh0dHBzOi8vZ2l0aHViLmNvbS90YWptb25lL3B1cmViYXNpYy1hcmNoaXZlcy90cmVlL21hc3Rlci9zeW50YXgtaGlnaGxpZ2h0aW5nL2d1aWRlbGluZXNcbiAgICAtIHYuMS4wIChBcHJpbCAyMDE2KVxuICAgICAgICAtLSBGaXJzdCByZWxlYXNlXG4gICAgICAgIC0tIEtleXdvcmRzIGxpc3QgdGFrZW4gYW5kIGFkYXB0ZWQgZnJvbSBHdVNoSCdzIChHdXN0YXZvIEp1bGlvIEZpb3JlbnphKVxuICAgICAgICAgICBQdXJlQmFzaWMgbGFuZ3VhZ2UgZmlsZSBmb3IgR2VTSGk6XG4gICAgICAgICAgIC0tIGh0dHBzOi8vZ2l0aHViLmNvbS9lYXN5Ym9vay9nZXNoaS9ibG9iL21hc3Rlci9nZXNoaS9wdXJlYmFzaWMucGhwXG4qL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHB1cmViYXNpYztcbiJdLCJzb3VyY2VSb290IjoiIn0=