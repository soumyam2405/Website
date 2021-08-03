exports.ids = [76];
exports.modules = {

/***/ "./node_modules/highlight.js/lib/languages/hsp.js":
/*!********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/hsp.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: HSP
Author: prince <MC.prince.0203@gmail.com>
Website: https://en.wikipedia.org/wiki/Hot_Soup_Processor
Category: scripting
*/

function hsp(hljs) {
  return {
    name: 'HSP',
    case_insensitive: true,
    keywords: {
      $pattern: /[\w._]+/,
      keyword: 'goto gosub return break repeat loop continue wait await dim sdim foreach dimtype dup dupptr end stop newmod delmod mref run exgoto on mcall assert logmes newlab resume yield onexit onerror onkey onclick oncmd exist delete mkdir chdir dirlist bload bsave bcopy memfile if else poke wpoke lpoke getstr chdpm memexpand memcpy memset notesel noteadd notedel noteload notesave randomize noteunsel noteget split strrep setease button chgdisp exec dialog mmload mmplay mmstop mci pset pget syscolor mes print title pos circle cls font sysfont objsize picload color palcolor palette redraw width gsel gcopy gzoom gmode bmpsave hsvcolor getkey listbox chkbox combox input mesbox buffer screen bgscr mouse objsel groll line clrobj boxf objprm objmode stick grect grotate gsquare gradf objimage objskip objenable celload celdiv celput newcom querycom delcom cnvstow comres axobj winobj sendmsg comevent comevarg sarrayconv callfunc cnvwtos comevdisp libptr system hspstat hspver stat cnt err strsize looplev sublev iparam wparam lparam refstr refdval int rnd strlen length length2 length3 length4 vartype gettime peek wpeek lpeek varptr varuse noteinfo instr abs limit getease str strmid strf getpath strtrim sin cos tan atan sqrt double absf expf logf limitf powf geteasef mousex mousey mousew hwnd hinstance hdc ginfo objinfo dirinfo sysinfo thismod __hspver__ __hsp30__ __date__ __time__ __line__ __file__ _debug __hspdef__ and or xor not screen_normal screen_palette screen_hide screen_fixedsize screen_tool screen_frame gmode_gdi gmode_mem gmode_rgb0 gmode_alpha gmode_rgb0alpha gmode_add gmode_sub gmode_pixela ginfo_mx ginfo_my ginfo_act ginfo_sel ginfo_wx1 ginfo_wy1 ginfo_wx2 ginfo_wy2 ginfo_vx ginfo_vy ginfo_sizex ginfo_sizey ginfo_winx ginfo_winy ginfo_mesx ginfo_mesy ginfo_r ginfo_g ginfo_b ginfo_paluse ginfo_dispx ginfo_dispy ginfo_cx ginfo_cy ginfo_intid ginfo_newid ginfo_sx ginfo_sy objinfo_mode objinfo_bmscr objinfo_hwnd notemax notesize dir_cur dir_exe dir_win dir_sys dir_cmdline dir_desktop dir_mydoc dir_tv font_normal font_bold font_italic font_underline font_strikeout font_antialias objmode_normal objmode_guifont objmode_usefont gsquare_grad msgothic msmincho do until while wend for next _break _continue switch case default swbreak swend ddim ldim alloc m_pi rad2deg deg2rad ease_linear ease_quad_in ease_quad_out ease_quad_inout ease_cubic_in ease_cubic_out ease_cubic_inout ease_quartic_in ease_quartic_out ease_quartic_inout ease_bounce_in ease_bounce_out ease_bounce_inout ease_shake_in ease_shake_out ease_shake_inout ease_loop'
    },
    contains: [
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      hljs.QUOTE_STRING_MODE,
      hljs.APOS_STRING_MODE,

      {
        // multi-line string
        className: 'string',
        begin: /\{"/,
        end: /"\}/,
        contains: [hljs.BACKSLASH_ESCAPE]
      },

      hljs.COMMENT(';', '$', {
        relevance: 0
      }),

      {
        // pre-processor
        className: 'meta',
        begin: '#',
        end: '$',
        keywords: {
          'meta-keyword': 'addion cfunc cmd cmpopt comfunc const defcfunc deffunc define else endif enum epack func global if ifdef ifndef include modcfunc modfunc modinit modterm module pack packopt regcmd runtime undef usecom uselib'
        },
        contains: [
          hljs.inherit(hljs.QUOTE_STRING_MODE, {
            className: 'meta-string'
          }),
          hljs.NUMBER_MODE,
          hljs.C_NUMBER_MODE,
          hljs.C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE
        ]
      },

      {
        // label
        className: 'symbol',
        begin: '^\\*(\\w+|@)'
      },

      hljs.NUMBER_MODE,
      hljs.C_NUMBER_MODE
    ]
  };
}

module.exports = hsp;


/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvaHNwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsaUJBQWlCO0FBQ2pCO0FBQ0EsT0FBTzs7QUFFUCxxQkFBcUI7QUFDckI7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiI3Ni5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5MYW5ndWFnZTogSFNQXG5BdXRob3I6IHByaW5jZSA8TUMucHJpbmNlLjAyMDNAZ21haWwuY29tPlxuV2Vic2l0ZTogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSG90X1NvdXBfUHJvY2Vzc29yXG5DYXRlZ29yeTogc2NyaXB0aW5nXG4qL1xuXG5mdW5jdGlvbiBoc3AoaGxqcykge1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICdIU1AnLFxuICAgIGNhc2VfaW5zZW5zaXRpdmU6IHRydWUsXG4gICAga2V5d29yZHM6IHtcbiAgICAgICRwYXR0ZXJuOiAvW1xcdy5fXSsvLFxuICAgICAga2V5d29yZDogJ2dvdG8gZ29zdWIgcmV0dXJuIGJyZWFrIHJlcGVhdCBsb29wIGNvbnRpbnVlIHdhaXQgYXdhaXQgZGltIHNkaW0gZm9yZWFjaCBkaW10eXBlIGR1cCBkdXBwdHIgZW5kIHN0b3AgbmV3bW9kIGRlbG1vZCBtcmVmIHJ1biBleGdvdG8gb24gbWNhbGwgYXNzZXJ0IGxvZ21lcyBuZXdsYWIgcmVzdW1lIHlpZWxkIG9uZXhpdCBvbmVycm9yIG9ua2V5IG9uY2xpY2sgb25jbWQgZXhpc3QgZGVsZXRlIG1rZGlyIGNoZGlyIGRpcmxpc3QgYmxvYWQgYnNhdmUgYmNvcHkgbWVtZmlsZSBpZiBlbHNlIHBva2Ugd3Bva2UgbHBva2UgZ2V0c3RyIGNoZHBtIG1lbWV4cGFuZCBtZW1jcHkgbWVtc2V0IG5vdGVzZWwgbm90ZWFkZCBub3RlZGVsIG5vdGVsb2FkIG5vdGVzYXZlIHJhbmRvbWl6ZSBub3RldW5zZWwgbm90ZWdldCBzcGxpdCBzdHJyZXAgc2V0ZWFzZSBidXR0b24gY2hnZGlzcCBleGVjIGRpYWxvZyBtbWxvYWQgbW1wbGF5IG1tc3RvcCBtY2kgcHNldCBwZ2V0IHN5c2NvbG9yIG1lcyBwcmludCB0aXRsZSBwb3MgY2lyY2xlIGNscyBmb250IHN5c2ZvbnQgb2Jqc2l6ZSBwaWNsb2FkIGNvbG9yIHBhbGNvbG9yIHBhbGV0dGUgcmVkcmF3IHdpZHRoIGdzZWwgZ2NvcHkgZ3pvb20gZ21vZGUgYm1wc2F2ZSBoc3Zjb2xvciBnZXRrZXkgbGlzdGJveCBjaGtib3ggY29tYm94IGlucHV0IG1lc2JveCBidWZmZXIgc2NyZWVuIGJnc2NyIG1vdXNlIG9ianNlbCBncm9sbCBsaW5lIGNscm9iaiBib3hmIG9ianBybSBvYmptb2RlIHN0aWNrIGdyZWN0IGdyb3RhdGUgZ3NxdWFyZSBncmFkZiBvYmppbWFnZSBvYmpza2lwIG9iamVuYWJsZSBjZWxsb2FkIGNlbGRpdiBjZWxwdXQgbmV3Y29tIHF1ZXJ5Y29tIGRlbGNvbSBjbnZzdG93IGNvbXJlcyBheG9iaiB3aW5vYmogc2VuZG1zZyBjb21ldmVudCBjb21ldmFyZyBzYXJyYXljb252IGNhbGxmdW5jIGNudnd0b3MgY29tZXZkaXNwIGxpYnB0ciBzeXN0ZW0gaHNwc3RhdCBoc3B2ZXIgc3RhdCBjbnQgZXJyIHN0cnNpemUgbG9vcGxldiBzdWJsZXYgaXBhcmFtIHdwYXJhbSBscGFyYW0gcmVmc3RyIHJlZmR2YWwgaW50IHJuZCBzdHJsZW4gbGVuZ3RoIGxlbmd0aDIgbGVuZ3RoMyBsZW5ndGg0IHZhcnR5cGUgZ2V0dGltZSBwZWVrIHdwZWVrIGxwZWVrIHZhcnB0ciB2YXJ1c2Ugbm90ZWluZm8gaW5zdHIgYWJzIGxpbWl0IGdldGVhc2Ugc3RyIHN0cm1pZCBzdHJmIGdldHBhdGggc3RydHJpbSBzaW4gY29zIHRhbiBhdGFuIHNxcnQgZG91YmxlIGFic2YgZXhwZiBsb2dmIGxpbWl0ZiBwb3dmIGdldGVhc2VmIG1vdXNleCBtb3VzZXkgbW91c2V3IGh3bmQgaGluc3RhbmNlIGhkYyBnaW5mbyBvYmppbmZvIGRpcmluZm8gc3lzaW5mbyB0aGlzbW9kIF9faHNwdmVyX18gX19oc3AzMF9fIF9fZGF0ZV9fIF9fdGltZV9fIF9fbGluZV9fIF9fZmlsZV9fIF9kZWJ1ZyBfX2hzcGRlZl9fIGFuZCBvciB4b3Igbm90IHNjcmVlbl9ub3JtYWwgc2NyZWVuX3BhbGV0dGUgc2NyZWVuX2hpZGUgc2NyZWVuX2ZpeGVkc2l6ZSBzY3JlZW5fdG9vbCBzY3JlZW5fZnJhbWUgZ21vZGVfZ2RpIGdtb2RlX21lbSBnbW9kZV9yZ2IwIGdtb2RlX2FscGhhIGdtb2RlX3JnYjBhbHBoYSBnbW9kZV9hZGQgZ21vZGVfc3ViIGdtb2RlX3BpeGVsYSBnaW5mb19teCBnaW5mb19teSBnaW5mb19hY3QgZ2luZm9fc2VsIGdpbmZvX3d4MSBnaW5mb193eTEgZ2luZm9fd3gyIGdpbmZvX3d5MiBnaW5mb192eCBnaW5mb192eSBnaW5mb19zaXpleCBnaW5mb19zaXpleSBnaW5mb193aW54IGdpbmZvX3dpbnkgZ2luZm9fbWVzeCBnaW5mb19tZXN5IGdpbmZvX3IgZ2luZm9fZyBnaW5mb19iIGdpbmZvX3BhbHVzZSBnaW5mb19kaXNweCBnaW5mb19kaXNweSBnaW5mb19jeCBnaW5mb19jeSBnaW5mb19pbnRpZCBnaW5mb19uZXdpZCBnaW5mb19zeCBnaW5mb19zeSBvYmppbmZvX21vZGUgb2JqaW5mb19ibXNjciBvYmppbmZvX2h3bmQgbm90ZW1heCBub3Rlc2l6ZSBkaXJfY3VyIGRpcl9leGUgZGlyX3dpbiBkaXJfc3lzIGRpcl9jbWRsaW5lIGRpcl9kZXNrdG9wIGRpcl9teWRvYyBkaXJfdHYgZm9udF9ub3JtYWwgZm9udF9ib2xkIGZvbnRfaXRhbGljIGZvbnRfdW5kZXJsaW5lIGZvbnRfc3RyaWtlb3V0IGZvbnRfYW50aWFsaWFzIG9iam1vZGVfbm9ybWFsIG9iam1vZGVfZ3VpZm9udCBvYmptb2RlX3VzZWZvbnQgZ3NxdWFyZV9ncmFkIG1zZ290aGljIG1zbWluY2hvIGRvIHVudGlsIHdoaWxlIHdlbmQgZm9yIG5leHQgX2JyZWFrIF9jb250aW51ZSBzd2l0Y2ggY2FzZSBkZWZhdWx0IHN3YnJlYWsgc3dlbmQgZGRpbSBsZGltIGFsbG9jIG1fcGkgcmFkMmRlZyBkZWcycmFkIGVhc2VfbGluZWFyIGVhc2VfcXVhZF9pbiBlYXNlX3F1YWRfb3V0IGVhc2VfcXVhZF9pbm91dCBlYXNlX2N1YmljX2luIGVhc2VfY3ViaWNfb3V0IGVhc2VfY3ViaWNfaW5vdXQgZWFzZV9xdWFydGljX2luIGVhc2VfcXVhcnRpY19vdXQgZWFzZV9xdWFydGljX2lub3V0IGVhc2VfYm91bmNlX2luIGVhc2VfYm91bmNlX291dCBlYXNlX2JvdW5jZV9pbm91dCBlYXNlX3NoYWtlX2luIGVhc2Vfc2hha2Vfb3V0IGVhc2Vfc2hha2VfaW5vdXQgZWFzZV9sb29wJ1xuICAgIH0sXG4gICAgY29udGFpbnM6IFtcbiAgICAgIGhsanMuQ19MSU5FX0NPTU1FTlRfTU9ERSxcbiAgICAgIGhsanMuQ19CTE9DS19DT01NRU5UX01PREUsXG4gICAgICBobGpzLlFVT1RFX1NUUklOR19NT0RFLFxuICAgICAgaGxqcy5BUE9TX1NUUklOR19NT0RFLFxuXG4gICAgICB7XG4gICAgICAgIC8vIG11bHRpLWxpbmUgc3RyaW5nXG4gICAgICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgICAgIGJlZ2luOiAvXFx7XCIvLFxuICAgICAgICBlbmQ6IC9cIlxcfS8sXG4gICAgICAgIGNvbnRhaW5zOiBbaGxqcy5CQUNLU0xBU0hfRVNDQVBFXVxuICAgICAgfSxcblxuICAgICAgaGxqcy5DT01NRU5UKCc7JywgJyQnLCB7XG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSksXG5cbiAgICAgIHtcbiAgICAgICAgLy8gcHJlLXByb2Nlc3NvclxuICAgICAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICAgICAgYmVnaW46ICcjJyxcbiAgICAgICAgZW5kOiAnJCcsXG4gICAgICAgIGtleXdvcmRzOiB7XG4gICAgICAgICAgJ21ldGEta2V5d29yZCc6ICdhZGRpb24gY2Z1bmMgY21kIGNtcG9wdCBjb21mdW5jIGNvbnN0IGRlZmNmdW5jIGRlZmZ1bmMgZGVmaW5lIGVsc2UgZW5kaWYgZW51bSBlcGFjayBmdW5jIGdsb2JhbCBpZiBpZmRlZiBpZm5kZWYgaW5jbHVkZSBtb2RjZnVuYyBtb2RmdW5jIG1vZGluaXQgbW9kdGVybSBtb2R1bGUgcGFjayBwYWNrb3B0IHJlZ2NtZCBydW50aW1lIHVuZGVmIHVzZWNvbSB1c2VsaWInXG4gICAgICAgIH0sXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgaGxqcy5pbmhlcml0KGhsanMuUVVPVEVfU1RSSU5HX01PREUsIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ21ldGEtc3RyaW5nJ1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGhsanMuTlVNQkVSX01PREUsXG4gICAgICAgICAgaGxqcy5DX05VTUJFUl9NT0RFLFxuICAgICAgICAgIGhsanMuQ19MSU5FX0NPTU1FTlRfTU9ERSxcbiAgICAgICAgICBobGpzLkNfQkxPQ0tfQ09NTUVOVF9NT0RFXG4gICAgICAgIF1cbiAgICAgIH0sXG5cbiAgICAgIHtcbiAgICAgICAgLy8gbGFiZWxcbiAgICAgICAgY2xhc3NOYW1lOiAnc3ltYm9sJyxcbiAgICAgICAgYmVnaW46ICdeXFxcXCooXFxcXHcrfEApJ1xuICAgICAgfSxcblxuICAgICAgaGxqcy5OVU1CRVJfTU9ERSxcbiAgICAgIGhsanMuQ19OVU1CRVJfTU9ERVxuICAgIF1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoc3A7XG4iXSwic291cmNlUm9vdCI6IiJ9