exports.ids = [139];
exports.modules = {

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

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvcHVyZWJhc2ljLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzREFBc0Q7O0FBRXREO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxPQUFPOztBQUVQLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiIxMzkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuTGFuZ3VhZ2U6IFB1cmVCQVNJQ1xuQXV0aG9yOiBUcmlzdGFubyBBam1vbmUgPHRham1vbmVAZ21haWwuY29tPlxuRGVzY3JpcHRpb246IFN5bnRheCBoaWdobGlnaHRpbmcgZm9yIFB1cmVCQVNJQyAodi41LjAwLTUuNjApLiBObyBpbmxpbmUgQVNNIGhpZ2hsaWdodGluZy4gKHYuMS4yLCBNYXkgMjAxNylcbkNyZWRpdHM6IEkndmUgdGFrZW4gaW5zcGlyYXRpb24gZnJvbSB0aGUgUHVyZUJhc2ljIGxhbmd1YWdlIGZpbGUgZm9yIEdlU0hpLCBjcmVhdGVkIGJ5IEd1c3Rhdm8gSnVsaW8gRmlvcmVuemEgKEd1U2hIKS5cbldlYnNpdGU6IGh0dHBzOi8vd3d3LnB1cmViYXNpYy5jb21cbiovXG5cbi8vIEJhc2UgZGVhZnVsdCBjb2xvcnMgaW4gUEIgSURFOiBiYWNrZ3JvdW5kOiAjRkZGRkRGOyBmb3JlZ3JvdW5kOiAjMDAwMDAwO1xuXG5mdW5jdGlvbiBwdXJlYmFzaWMoaGxqcykge1xuICBjb25zdCBTVFJJTkdTID0geyAvLyBQQiBJREUgY29sb3I6ICMwMDgwRkYgKEF6dXJlIFJhZGlhbmNlKVxuICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgYmVnaW46ICcofik/XCInLFxuICAgIGVuZDogJ1wiJyxcbiAgICBpbGxlZ2FsOiAnXFxcXG4nXG4gIH07XG4gIGNvbnN0IENPTlNUQU5UUyA9IHsgLy8gUEIgSURFIGNvbG9yOiAjOTI0QjcyIChDYW5ub24gUGluaylcbiAgICAvLyAgXCIjXCIgKyBhIGxldHRlciBvciB1bmRlcnNjb3JlICsgbGV0dGVycywgZGlnaXRzIG9yIHVuZGVyc2NvcmVzICsgKG9wdGlvbmFsKSBcIiRcIlxuICAgIGNsYXNzTmFtZTogJ3N5bWJvbCcsXG4gICAgYmVnaW46ICcjW2EtekEtWl9dXFxcXHcqXFxcXCQ/J1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgbmFtZTogJ1B1cmVCQVNJQycsXG4gICAgYWxpYXNlczogW1xuICAgICAgJ3BiJyxcbiAgICAgICdwYmknXG4gICAgXSxcbiAgICBrZXl3b3JkczogLy8gUEIgSURFIGNvbG9yOiAjMDA2NjY2IChCbHVlIFN0b25lKSArIEJvbGRcbiAgICAgIC8vIEtleXdvcmRzIGZyb20gYWxsIHZlcnNpb24gb2YgUHVyZUJBU0lDIDUuMDAgdXB3YXJkIC4uLlxuICAgICAgJ0FsaWduIEFuZCBBcnJheSBBcyBCcmVhayBDYWxsRGVidWdnZXIgQ2FzZSBDb21waWxlckNhc2UgQ29tcGlsZXJEZWZhdWx0ICcgK1xuICAgICAgJ0NvbXBpbGVyRWxzZSBDb21waWxlckVsc2VJZiBDb21waWxlckVuZElmIENvbXBpbGVyRW5kU2VsZWN0IENvbXBpbGVyRXJyb3IgJyArXG4gICAgICAnQ29tcGlsZXJJZiBDb21waWxlclNlbGVjdCBDb21waWxlcldhcm5pbmcgQ29udGludWUgRGF0YSBEYXRhU2VjdGlvbiBEZWJ1ZyAnICtcbiAgICAgICdEZWJ1Z0xldmVsIERlY2xhcmUgRGVjbGFyZUMgRGVjbGFyZUNETEwgRGVjbGFyZURMTCBEZWNsYXJlTW9kdWxlIERlZmF1bHQgJyArXG4gICAgICAnRGVmaW5lIERpbSBEaXNhYmxlQVNNIERpc2FibGVEZWJ1Z2dlciBEaXNhYmxlRXhwbGljaXQgRWxzZSBFbHNlSWYgRW5hYmxlQVNNICcgK1xuICAgICAgJ0VuYWJsZURlYnVnZ2VyIEVuYWJsZUV4cGxpY2l0IEVuZCBFbmREYXRhU2VjdGlvbiBFbmREZWNsYXJlTW9kdWxlIEVuZEVudW1lcmF0aW9uICcgK1xuICAgICAgJ0VuZElmIEVuZEltcG9ydCBFbmRJbnRlcmZhY2UgRW5kTWFjcm8gRW5kTW9kdWxlIEVuZFByb2NlZHVyZSBFbmRTZWxlY3QgJyArXG4gICAgICAnRW5kU3RydWN0dXJlIEVuZFN0cnVjdHVyZVVuaW9uIEVuZFdpdGggRW51bWVyYXRpb24gRW51bWVyYXRpb25CaW5hcnkgRXh0ZW5kcyAnICtcbiAgICAgICdGYWtlUmV0dXJuIEZvciBGb3JFYWNoIEZvckV2ZXIgR2xvYmFsIEdvc3ViIEdvdG8gSWYgSW1wb3J0IEltcG9ydEMgJyArXG4gICAgICAnSW5jbHVkZUJpbmFyeSBJbmNsdWRlRmlsZSBJbmNsdWRlUGF0aCBJbnRlcmZhY2UgTGlzdCBNYWNybyBNYWNyb0V4cGFuZGVkQ291bnQgJyArXG4gICAgICAnTWFwIE1vZHVsZSBOZXdMaXN0IE5ld01hcCBOZXh0IE5vdCBPciBQcm9jZWR1cmUgUHJvY2VkdXJlQyAnICtcbiAgICAgICdQcm9jZWR1cmVDRExMIFByb2NlZHVyZURMTCBQcm9jZWR1cmVSZXR1cm4gUHJvdGVjdGVkIFByb3RvdHlwZSBQcm90b3R5cGVDIFJlRGltICcgK1xuICAgICAgJ1JlYWQgUmVwZWF0IFJlc3RvcmUgUmV0dXJuIFJ1bnRpbWUgU2VsZWN0IFNoYXJlZCBTdGF0aWMgU3RlcCBTdHJ1Y3R1cmUgJyArXG4gICAgICAnU3RydWN0dXJlVW5pb24gU3dhcCBUaHJlYWRlZCBUbyBVbmRlZmluZU1hY3JvIFVudGlsIFVudGlsICBVbnVzZU1vZHVsZSAnICtcbiAgICAgICdVc2VNb2R1bGUgV2VuZCBXaGlsZSBXaXRoIFhJbmNsdWRlRmlsZSBYT3InLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICAvLyBDT01NRU5UUyB8IFBCIElERSBjb2xvcjogIzAwQUFBQSAoUGVyc2lhbiBHcmVlbilcbiAgICAgIGhsanMuQ09NTUVOVCgnOycsICckJywge1xuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0pLFxuXG4gICAgICB7IC8vIFBST0NFRFVSRVMgREVGSU5JVElPTlNcbiAgICAgICAgY2xhc3NOYW1lOiAnZnVuY3Rpb24nLFxuICAgICAgICBiZWdpbjogJ1xcXFxiKFByb2NlZHVyZXxEZWNsYXJlKShDfENETEx8RExMKT9cXFxcYicsXG4gICAgICAgIGVuZDogJ1xcXFwoJyxcbiAgICAgICAgZXhjbHVkZUVuZDogdHJ1ZSxcbiAgICAgICAgcmV0dXJuQmVnaW46IHRydWUsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgeyAvLyBQUk9DRURVUkUgS0VZV09SRFMgfCBQQiBJREUgY29sb3I6ICMwMDY2NjYgKEJsdWUgU3RvbmUpICsgQm9sZFxuICAgICAgICAgICAgY2xhc3NOYW1lOiAna2V5d29yZCcsXG4gICAgICAgICAgICBiZWdpbjogJyhQcm9jZWR1cmV8RGVjbGFyZSkoQ3xDRExMfERMTCk/JyxcbiAgICAgICAgICAgIGV4Y2x1ZGVFbmQ6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHsgLy8gUFJPQ0VEVVJFIFJFVFVSTiBUWVBFIFNFVFRJTkcgfCBQQiBJREUgY29sb3I6ICMwMDAwMDAgKEJsYWNrKVxuICAgICAgICAgICAgY2xhc3NOYW1lOiAndHlwZScsXG4gICAgICAgICAgICBiZWdpbjogJ1xcXFwuXFxcXHcqJ1xuICAgICAgICAgICAgLy8gZW5kOiAnICcsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBobGpzLlVOREVSU0NPUkVfVElUTEVfTU9ERSAvLyBQUk9DRURVUkUgTkFNRSB8IFBCIElERSBjb2xvcjogIzAwNjY2NiAoQmx1ZSBTdG9uZSlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFNUUklOR1MsXG4gICAgICBDT05TVEFOVFNcbiAgICBdXG4gIH07XG59XG5cbi8qICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ0hBTkdFTE9HXG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLSB2LjEuMiAoMjAxNy0wNS0xMilcbiAgICAgICAgLS0gQlVHLUZJWDogU29tZSBrZXl3b3JkcyB3ZXJlIGFjY2lkZW50YWxseSBqb3luZWQgdG9nZXRoZXIuIE5vdyBmaXhlZC5cbiAgICAtIHYuMS4xICgyMDE3LTA0LTMwKVxuICAgICAgICAtLSBVcGRhdGVkIHRvIFB1cmVCQVNJQyA1LjYwLlxuICAgICAgICAtLSBLZXl3b3JkcyBsaXN0IG5vdyBidWlsdCBieSBleHRyYWN0aW5nIHRoZW0gZnJvbSB0aGUgUHVyZUJBU0lDIFNESydzXG4gICAgICAgICAgIFwiU3ludGF4SGlsaWdodGluZy5kbGxcIiAoZnJvbSBlYWNoIFB1cmVCQVNJQyB2ZXJzaW9uKS4gVG9rZW5zIGZyb20gZWFjaFxuICAgICAgICAgICB2ZXJzaW9uIGFyZSBhZGRlZCB0byB0aGUgbGlzdCwgYW5kIHJlbmFtZWQgb3IgcmVtb3ZlZCB0b2tlbnMgYXJlIGtlcHRcbiAgICAgICAgICAgZm9yIHRoZSBzYWtlIG9mIGNvdmVyaW5nIGFsbCB2ZXJzaW9ucyBvZiB0aGUgbGFuZ3VhZ2UgZnJvbSBQdXJlQkFTSUNcbiAgICAgICAgICAgdjUuMDAgdXB3YXJkLiAoTk9URTogY3VycmVudGx5LCB0aGVyZSBhcmUgbm8gcmVuYW1lZCBvciBkZXByZWNhdGVkXG4gICAgICAgICAgIHRva2VucyBpbiB0aGUga2V5d29yZHMgbGlzdCkuIEZvciBtb3JlIGluZm8sIHNlZTpcbiAgICAgICAgICAgLS0gaHR0cDovL3d3dy5wdXJlYmFzaWMuZnIvZW5nbGlzaC92aWV3dG9waWMucGhwPyZwPTUwNjI2OVxuICAgICAgICAgICAtLSBodHRwczovL2dpdGh1Yi5jb20vdGFqbW9uZS9wdXJlYmFzaWMtYXJjaGl2ZXMvdHJlZS9tYXN0ZXIvc3ludGF4LWhpZ2hsaWdodGluZy9ndWlkZWxpbmVzXG4gICAgLSB2LjEuMCAoQXByaWwgMjAxNilcbiAgICAgICAgLS0gRmlyc3QgcmVsZWFzZVxuICAgICAgICAtLSBLZXl3b3JkcyBsaXN0IHRha2VuIGFuZCBhZGFwdGVkIGZyb20gR3VTaEgncyAoR3VzdGF2byBKdWxpbyBGaW9yZW56YSlcbiAgICAgICAgICAgUHVyZUJhc2ljIGxhbmd1YWdlIGZpbGUgZm9yIEdlU0hpOlxuICAgICAgICAgICAtLSBodHRwczovL2dpdGh1Yi5jb20vZWFzeWJvb2svZ2VzaGkvYmxvYi9tYXN0ZXIvZ2VzaGkvcHVyZWJhc2ljLnBocFxuKi9cblxubW9kdWxlLmV4cG9ydHMgPSBwdXJlYmFzaWM7XG4iXSwic291cmNlUm9vdCI6IiJ9