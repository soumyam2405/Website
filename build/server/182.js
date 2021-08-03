exports.ids = [182];
exports.modules = {

/***/ "./node_modules/highlight.js/lib/languages/verilog.js":
/*!************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/verilog.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Verilog
Author: Jon Evans <jon@craftyjon.com>
Contributors: Boone Severson <boone.severson@gmail.com>
Description: Verilog is a hardware description language used in electronic design automation to describe digital and mixed-signal systems. This highlighter supports Verilog and SystemVerilog through IEEE 1800-2012.
Website: http://www.verilog.com
*/

function verilog(hljs) {
  const SV_KEYWORDS = {
    $pattern: /[\w\$]+/,
    keyword:
      'accept_on alias always always_comb always_ff always_latch and assert assign ' +
      'assume automatic before begin bind bins binsof bit break buf|0 bufif0 bufif1 ' +
      'byte case casex casez cell chandle checker class clocking cmos config const ' +
      'constraint context continue cover covergroup coverpoint cross deassign default ' +
      'defparam design disable dist do edge else end endcase endchecker endclass ' +
      'endclocking endconfig endfunction endgenerate endgroup endinterface endmodule ' +
      'endpackage endprimitive endprogram endproperty endspecify endsequence endtable ' +
      'endtask enum event eventually expect export extends extern final first_match for ' +
      'force foreach forever fork forkjoin function generate|5 genvar global highz0 highz1 ' +
      'if iff ifnone ignore_bins illegal_bins implements implies import incdir include ' +
      'initial inout input inside instance int integer interconnect interface intersect ' +
      'join join_any join_none large let liblist library local localparam logic longint ' +
      'macromodule matches medium modport module nand negedge nettype new nexttime nmos ' +
      'nor noshowcancelled not notif0 notif1 or output package packed parameter pmos ' +
      'posedge primitive priority program property protected pull0 pull1 pulldown pullup ' +
      'pulsestyle_ondetect pulsestyle_onevent pure rand randc randcase randsequence rcmos ' +
      'real realtime ref reg reject_on release repeat restrict return rnmos rpmos rtran ' +
      'rtranif0 rtranif1 s_always s_eventually s_nexttime s_until s_until_with scalared ' +
      'sequence shortint shortreal showcancelled signed small soft solve specify specparam ' +
      'static string strong strong0 strong1 struct super supply0 supply1 sync_accept_on ' +
      'sync_reject_on table tagged task this throughout time timeprecision timeunit tran ' +
      'tranif0 tranif1 tri tri0 tri1 triand trior trireg type typedef union unique unique0 ' +
      'unsigned until until_with untyped use uwire var vectored virtual void wait wait_order ' +
      'wand weak weak0 weak1 while wildcard wire with within wor xnor xor',
    literal:
      'null',
    built_in:
      '$finish $stop $exit $fatal $error $warning $info $realtime $time $printtimescale ' +
      '$bitstoreal $bitstoshortreal $itor $signed $cast $bits $stime $timeformat ' +
      '$realtobits $shortrealtobits $rtoi $unsigned $asserton $assertkill $assertpasson ' +
      '$assertfailon $assertnonvacuouson $assertoff $assertcontrol $assertpassoff ' +
      '$assertfailoff $assertvacuousoff $isunbounded $sampled $fell $changed $past_gclk ' +
      '$fell_gclk $changed_gclk $rising_gclk $steady_gclk $coverage_control ' +
      '$coverage_get $coverage_save $set_coverage_db_name $rose $stable $past ' +
      '$rose_gclk $stable_gclk $future_gclk $falling_gclk $changing_gclk $display ' +
      '$coverage_get_max $coverage_merge $get_coverage $load_coverage_db $typename ' +
      '$unpacked_dimensions $left $low $increment $clog2 $ln $log10 $exp $sqrt $pow ' +
      '$floor $ceil $sin $cos $tan $countbits $onehot $isunknown $fatal $warning ' +
      '$dimensions $right $high $size $asin $acos $atan $atan2 $hypot $sinh $cosh ' +
      '$tanh $asinh $acosh $atanh $countones $onehot0 $error $info $random ' +
      '$dist_chi_square $dist_erlang $dist_exponential $dist_normal $dist_poisson ' +
      '$dist_t $dist_uniform $q_initialize $q_remove $q_exam $async$and$array ' +
      '$async$nand$array $async$or$array $async$nor$array $sync$and$array ' +
      '$sync$nand$array $sync$or$array $sync$nor$array $q_add $q_full $psprintf ' +
      '$async$and$plane $async$nand$plane $async$or$plane $async$nor$plane ' +
      '$sync$and$plane $sync$nand$plane $sync$or$plane $sync$nor$plane $system ' +
      '$display $displayb $displayh $displayo $strobe $strobeb $strobeh $strobeo ' +
      '$write $readmemb $readmemh $writememh $value$plusargs ' +
      '$dumpvars $dumpon $dumplimit $dumpports $dumpportson $dumpportslimit ' +
      '$writeb $writeh $writeo $monitor $monitorb $monitorh $monitoro $writememb ' +
      '$dumpfile $dumpoff $dumpall $dumpflush $dumpportsoff $dumpportsall ' +
      '$dumpportsflush $fclose $fdisplay $fdisplayb $fdisplayh $fdisplayo ' +
      '$fstrobe $fstrobeb $fstrobeh $fstrobeo $swrite $swriteb $swriteh ' +
      '$swriteo $fscanf $fread $fseek $fflush $feof $fopen $fwrite $fwriteb ' +
      '$fwriteh $fwriteo $fmonitor $fmonitorb $fmonitorh $fmonitoro $sformat ' +
      '$sformatf $fgetc $ungetc $fgets $sscanf $rewind $ftell $ferror'
  };

  return {
    name: 'Verilog',
    aliases: [
      'v',
      'sv',
      'svh'
    ],
    case_insensitive: false,
    keywords: SV_KEYWORDS,
    contains: [
      hljs.C_BLOCK_COMMENT_MODE,
      hljs.C_LINE_COMMENT_MODE,
      hljs.QUOTE_STRING_MODE,
      {
        className: 'number',
        contains: [ hljs.BACKSLASH_ESCAPE ],
        variants: [
          {
            begin: '\\b((\\d+\'(b|h|o|d|B|H|O|D))[0-9xzXZa-fA-F_]+)'
          },
          {
            begin: '\\B((\'(b|h|o|d|B|H|O|D))[0-9xzXZa-fA-F_]+)'
          },
          {
            begin: '\\b([0-9_])+',
            relevance: 0
          }
        ]
      },
      /* parameters to instances */
      {
        className: 'variable',
        variants: [
          {
            begin: '#\\((?!parameter).+\\)'
          },
          {
            begin: '\\.\\w+',
            relevance: 0
          }
        ]
      },
      {
        className: 'meta',
        begin: '`',
        end: '$',
        keywords: {
          'meta-keyword':
            'define __FILE__ ' +
            '__LINE__ begin_keywords celldefine default_nettype define ' +
            'else elsif end_keywords endcelldefine endif ifdef ifndef ' +
            'include line nounconnected_drive pragma resetall timescale ' +
            'unconnected_drive undef undefineall'
        },
        relevance: 0
      }
    ]
  };
}

module.exports = verilog;


/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvdmVyaWxvZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiIxODIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuTGFuZ3VhZ2U6IFZlcmlsb2dcbkF1dGhvcjogSm9uIEV2YW5zIDxqb25AY3JhZnR5am9uLmNvbT5cbkNvbnRyaWJ1dG9yczogQm9vbmUgU2V2ZXJzb24gPGJvb25lLnNldmVyc29uQGdtYWlsLmNvbT5cbkRlc2NyaXB0aW9uOiBWZXJpbG9nIGlzIGEgaGFyZHdhcmUgZGVzY3JpcHRpb24gbGFuZ3VhZ2UgdXNlZCBpbiBlbGVjdHJvbmljIGRlc2lnbiBhdXRvbWF0aW9uIHRvIGRlc2NyaWJlIGRpZ2l0YWwgYW5kIG1peGVkLXNpZ25hbCBzeXN0ZW1zLiBUaGlzIGhpZ2hsaWdodGVyIHN1cHBvcnRzIFZlcmlsb2cgYW5kIFN5c3RlbVZlcmlsb2cgdGhyb3VnaCBJRUVFIDE4MDAtMjAxMi5cbldlYnNpdGU6IGh0dHA6Ly93d3cudmVyaWxvZy5jb21cbiovXG5cbmZ1bmN0aW9uIHZlcmlsb2coaGxqcykge1xuICBjb25zdCBTVl9LRVlXT1JEUyA9IHtcbiAgICAkcGF0dGVybjogL1tcXHdcXCRdKy8sXG4gICAga2V5d29yZDpcbiAgICAgICdhY2NlcHRfb24gYWxpYXMgYWx3YXlzIGFsd2F5c19jb21iIGFsd2F5c19mZiBhbHdheXNfbGF0Y2ggYW5kIGFzc2VydCBhc3NpZ24gJyArXG4gICAgICAnYXNzdW1lIGF1dG9tYXRpYyBiZWZvcmUgYmVnaW4gYmluZCBiaW5zIGJpbnNvZiBiaXQgYnJlYWsgYnVmfDAgYnVmaWYwIGJ1ZmlmMSAnICtcbiAgICAgICdieXRlIGNhc2UgY2FzZXggY2FzZXogY2VsbCBjaGFuZGxlIGNoZWNrZXIgY2xhc3MgY2xvY2tpbmcgY21vcyBjb25maWcgY29uc3QgJyArXG4gICAgICAnY29uc3RyYWludCBjb250ZXh0IGNvbnRpbnVlIGNvdmVyIGNvdmVyZ3JvdXAgY292ZXJwb2ludCBjcm9zcyBkZWFzc2lnbiBkZWZhdWx0ICcgK1xuICAgICAgJ2RlZnBhcmFtIGRlc2lnbiBkaXNhYmxlIGRpc3QgZG8gZWRnZSBlbHNlIGVuZCBlbmRjYXNlIGVuZGNoZWNrZXIgZW5kY2xhc3MgJyArXG4gICAgICAnZW5kY2xvY2tpbmcgZW5kY29uZmlnIGVuZGZ1bmN0aW9uIGVuZGdlbmVyYXRlIGVuZGdyb3VwIGVuZGludGVyZmFjZSBlbmRtb2R1bGUgJyArXG4gICAgICAnZW5kcGFja2FnZSBlbmRwcmltaXRpdmUgZW5kcHJvZ3JhbSBlbmRwcm9wZXJ0eSBlbmRzcGVjaWZ5IGVuZHNlcXVlbmNlIGVuZHRhYmxlICcgK1xuICAgICAgJ2VuZHRhc2sgZW51bSBldmVudCBldmVudHVhbGx5IGV4cGVjdCBleHBvcnQgZXh0ZW5kcyBleHRlcm4gZmluYWwgZmlyc3RfbWF0Y2ggZm9yICcgK1xuICAgICAgJ2ZvcmNlIGZvcmVhY2ggZm9yZXZlciBmb3JrIGZvcmtqb2luIGZ1bmN0aW9uIGdlbmVyYXRlfDUgZ2VudmFyIGdsb2JhbCBoaWdoejAgaGlnaHoxICcgK1xuICAgICAgJ2lmIGlmZiBpZm5vbmUgaWdub3JlX2JpbnMgaWxsZWdhbF9iaW5zIGltcGxlbWVudHMgaW1wbGllcyBpbXBvcnQgaW5jZGlyIGluY2x1ZGUgJyArXG4gICAgICAnaW5pdGlhbCBpbm91dCBpbnB1dCBpbnNpZGUgaW5zdGFuY2UgaW50IGludGVnZXIgaW50ZXJjb25uZWN0IGludGVyZmFjZSBpbnRlcnNlY3QgJyArXG4gICAgICAnam9pbiBqb2luX2FueSBqb2luX25vbmUgbGFyZ2UgbGV0IGxpYmxpc3QgbGlicmFyeSBsb2NhbCBsb2NhbHBhcmFtIGxvZ2ljIGxvbmdpbnQgJyArXG4gICAgICAnbWFjcm9tb2R1bGUgbWF0Y2hlcyBtZWRpdW0gbW9kcG9ydCBtb2R1bGUgbmFuZCBuZWdlZGdlIG5ldHR5cGUgbmV3IG5leHR0aW1lIG5tb3MgJyArXG4gICAgICAnbm9yIG5vc2hvd2NhbmNlbGxlZCBub3Qgbm90aWYwIG5vdGlmMSBvciBvdXRwdXQgcGFja2FnZSBwYWNrZWQgcGFyYW1ldGVyIHBtb3MgJyArXG4gICAgICAncG9zZWRnZSBwcmltaXRpdmUgcHJpb3JpdHkgcHJvZ3JhbSBwcm9wZXJ0eSBwcm90ZWN0ZWQgcHVsbDAgcHVsbDEgcHVsbGRvd24gcHVsbHVwICcgK1xuICAgICAgJ3B1bHNlc3R5bGVfb25kZXRlY3QgcHVsc2VzdHlsZV9vbmV2ZW50IHB1cmUgcmFuZCByYW5kYyByYW5kY2FzZSByYW5kc2VxdWVuY2UgcmNtb3MgJyArXG4gICAgICAncmVhbCByZWFsdGltZSByZWYgcmVnIHJlamVjdF9vbiByZWxlYXNlIHJlcGVhdCByZXN0cmljdCByZXR1cm4gcm5tb3MgcnBtb3MgcnRyYW4gJyArXG4gICAgICAncnRyYW5pZjAgcnRyYW5pZjEgc19hbHdheXMgc19ldmVudHVhbGx5IHNfbmV4dHRpbWUgc191bnRpbCBzX3VudGlsX3dpdGggc2NhbGFyZWQgJyArXG4gICAgICAnc2VxdWVuY2Ugc2hvcnRpbnQgc2hvcnRyZWFsIHNob3djYW5jZWxsZWQgc2lnbmVkIHNtYWxsIHNvZnQgc29sdmUgc3BlY2lmeSBzcGVjcGFyYW0gJyArXG4gICAgICAnc3RhdGljIHN0cmluZyBzdHJvbmcgc3Ryb25nMCBzdHJvbmcxIHN0cnVjdCBzdXBlciBzdXBwbHkwIHN1cHBseTEgc3luY19hY2NlcHRfb24gJyArXG4gICAgICAnc3luY19yZWplY3Rfb24gdGFibGUgdGFnZ2VkIHRhc2sgdGhpcyB0aHJvdWdob3V0IHRpbWUgdGltZXByZWNpc2lvbiB0aW1ldW5pdCB0cmFuICcgK1xuICAgICAgJ3RyYW5pZjAgdHJhbmlmMSB0cmkgdHJpMCB0cmkxIHRyaWFuZCB0cmlvciB0cmlyZWcgdHlwZSB0eXBlZGVmIHVuaW9uIHVuaXF1ZSB1bmlxdWUwICcgK1xuICAgICAgJ3Vuc2lnbmVkIHVudGlsIHVudGlsX3dpdGggdW50eXBlZCB1c2UgdXdpcmUgdmFyIHZlY3RvcmVkIHZpcnR1YWwgdm9pZCB3YWl0IHdhaXRfb3JkZXIgJyArXG4gICAgICAnd2FuZCB3ZWFrIHdlYWswIHdlYWsxIHdoaWxlIHdpbGRjYXJkIHdpcmUgd2l0aCB3aXRoaW4gd29yIHhub3IgeG9yJyxcbiAgICBsaXRlcmFsOlxuICAgICAgJ251bGwnLFxuICAgIGJ1aWx0X2luOlxuICAgICAgJyRmaW5pc2ggJHN0b3AgJGV4aXQgJGZhdGFsICRlcnJvciAkd2FybmluZyAkaW5mbyAkcmVhbHRpbWUgJHRpbWUgJHByaW50dGltZXNjYWxlICcgK1xuICAgICAgJyRiaXRzdG9yZWFsICRiaXRzdG9zaG9ydHJlYWwgJGl0b3IgJHNpZ25lZCAkY2FzdCAkYml0cyAkc3RpbWUgJHRpbWVmb3JtYXQgJyArXG4gICAgICAnJHJlYWx0b2JpdHMgJHNob3J0cmVhbHRvYml0cyAkcnRvaSAkdW5zaWduZWQgJGFzc2VydG9uICRhc3NlcnRraWxsICRhc3NlcnRwYXNzb24gJyArXG4gICAgICAnJGFzc2VydGZhaWxvbiAkYXNzZXJ0bm9udmFjdW91c29uICRhc3NlcnRvZmYgJGFzc2VydGNvbnRyb2wgJGFzc2VydHBhc3NvZmYgJyArXG4gICAgICAnJGFzc2VydGZhaWxvZmYgJGFzc2VydHZhY3VvdXNvZmYgJGlzdW5ib3VuZGVkICRzYW1wbGVkICRmZWxsICRjaGFuZ2VkICRwYXN0X2djbGsgJyArXG4gICAgICAnJGZlbGxfZ2NsayAkY2hhbmdlZF9nY2xrICRyaXNpbmdfZ2NsayAkc3RlYWR5X2djbGsgJGNvdmVyYWdlX2NvbnRyb2wgJyArXG4gICAgICAnJGNvdmVyYWdlX2dldCAkY292ZXJhZ2Vfc2F2ZSAkc2V0X2NvdmVyYWdlX2RiX25hbWUgJHJvc2UgJHN0YWJsZSAkcGFzdCAnICtcbiAgICAgICckcm9zZV9nY2xrICRzdGFibGVfZ2NsayAkZnV0dXJlX2djbGsgJGZhbGxpbmdfZ2NsayAkY2hhbmdpbmdfZ2NsayAkZGlzcGxheSAnICtcbiAgICAgICckY292ZXJhZ2VfZ2V0X21heCAkY292ZXJhZ2VfbWVyZ2UgJGdldF9jb3ZlcmFnZSAkbG9hZF9jb3ZlcmFnZV9kYiAkdHlwZW5hbWUgJyArXG4gICAgICAnJHVucGFja2VkX2RpbWVuc2lvbnMgJGxlZnQgJGxvdyAkaW5jcmVtZW50ICRjbG9nMiAkbG4gJGxvZzEwICRleHAgJHNxcnQgJHBvdyAnICtcbiAgICAgICckZmxvb3IgJGNlaWwgJHNpbiAkY29zICR0YW4gJGNvdW50Yml0cyAkb25laG90ICRpc3Vua25vd24gJGZhdGFsICR3YXJuaW5nICcgK1xuICAgICAgJyRkaW1lbnNpb25zICRyaWdodCAkaGlnaCAkc2l6ZSAkYXNpbiAkYWNvcyAkYXRhbiAkYXRhbjIgJGh5cG90ICRzaW5oICRjb3NoICcgK1xuICAgICAgJyR0YW5oICRhc2luaCAkYWNvc2ggJGF0YW5oICRjb3VudG9uZXMgJG9uZWhvdDAgJGVycm9yICRpbmZvICRyYW5kb20gJyArXG4gICAgICAnJGRpc3RfY2hpX3NxdWFyZSAkZGlzdF9lcmxhbmcgJGRpc3RfZXhwb25lbnRpYWwgJGRpc3Rfbm9ybWFsICRkaXN0X3BvaXNzb24gJyArXG4gICAgICAnJGRpc3RfdCAkZGlzdF91bmlmb3JtICRxX2luaXRpYWxpemUgJHFfcmVtb3ZlICRxX2V4YW0gJGFzeW5jJGFuZCRhcnJheSAnICtcbiAgICAgICckYXN5bmMkbmFuZCRhcnJheSAkYXN5bmMkb3IkYXJyYXkgJGFzeW5jJG5vciRhcnJheSAkc3luYyRhbmQkYXJyYXkgJyArXG4gICAgICAnJHN5bmMkbmFuZCRhcnJheSAkc3luYyRvciRhcnJheSAkc3luYyRub3IkYXJyYXkgJHFfYWRkICRxX2Z1bGwgJHBzcHJpbnRmICcgK1xuICAgICAgJyRhc3luYyRhbmQkcGxhbmUgJGFzeW5jJG5hbmQkcGxhbmUgJGFzeW5jJG9yJHBsYW5lICRhc3luYyRub3IkcGxhbmUgJyArXG4gICAgICAnJHN5bmMkYW5kJHBsYW5lICRzeW5jJG5hbmQkcGxhbmUgJHN5bmMkb3IkcGxhbmUgJHN5bmMkbm9yJHBsYW5lICRzeXN0ZW0gJyArXG4gICAgICAnJGRpc3BsYXkgJGRpc3BsYXliICRkaXNwbGF5aCAkZGlzcGxheW8gJHN0cm9iZSAkc3Ryb2JlYiAkc3Ryb2JlaCAkc3Ryb2JlbyAnICtcbiAgICAgICckd3JpdGUgJHJlYWRtZW1iICRyZWFkbWVtaCAkd3JpdGVtZW1oICR2YWx1ZSRwbHVzYXJncyAnICtcbiAgICAgICckZHVtcHZhcnMgJGR1bXBvbiAkZHVtcGxpbWl0ICRkdW1wcG9ydHMgJGR1bXBwb3J0c29uICRkdW1wcG9ydHNsaW1pdCAnICtcbiAgICAgICckd3JpdGViICR3cml0ZWggJHdyaXRlbyAkbW9uaXRvciAkbW9uaXRvcmIgJG1vbml0b3JoICRtb25pdG9ybyAkd3JpdGVtZW1iICcgK1xuICAgICAgJyRkdW1wZmlsZSAkZHVtcG9mZiAkZHVtcGFsbCAkZHVtcGZsdXNoICRkdW1wcG9ydHNvZmYgJGR1bXBwb3J0c2FsbCAnICtcbiAgICAgICckZHVtcHBvcnRzZmx1c2ggJGZjbG9zZSAkZmRpc3BsYXkgJGZkaXNwbGF5YiAkZmRpc3BsYXloICRmZGlzcGxheW8gJyArXG4gICAgICAnJGZzdHJvYmUgJGZzdHJvYmViICRmc3Ryb2JlaCAkZnN0cm9iZW8gJHN3cml0ZSAkc3dyaXRlYiAkc3dyaXRlaCAnICtcbiAgICAgICckc3dyaXRlbyAkZnNjYW5mICRmcmVhZCAkZnNlZWsgJGZmbHVzaCAkZmVvZiAkZm9wZW4gJGZ3cml0ZSAkZndyaXRlYiAnICtcbiAgICAgICckZndyaXRlaCAkZndyaXRlbyAkZm1vbml0b3IgJGZtb25pdG9yYiAkZm1vbml0b3JoICRmbW9uaXRvcm8gJHNmb3JtYXQgJyArXG4gICAgICAnJHNmb3JtYXRmICRmZ2V0YyAkdW5nZXRjICRmZ2V0cyAkc3NjYW5mICRyZXdpbmQgJGZ0ZWxsICRmZXJyb3InXG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnVmVyaWxvZycsXG4gICAgYWxpYXNlczogW1xuICAgICAgJ3YnLFxuICAgICAgJ3N2JyxcbiAgICAgICdzdmgnXG4gICAgXSxcbiAgICBjYXNlX2luc2Vuc2l0aXZlOiBmYWxzZSxcbiAgICBrZXl3b3JkczogU1ZfS0VZV09SRFMsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIGhsanMuQ19CTE9DS19DT01NRU5UX01PREUsXG4gICAgICBobGpzLkNfTElORV9DT01NRU5UX01PREUsXG4gICAgICBobGpzLlFVT1RFX1NUUklOR19NT0RFLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdudW1iZXInLFxuICAgICAgICBjb250YWluczogWyBobGpzLkJBQ0tTTEFTSF9FU0NBUEUgXSxcbiAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogJ1xcXFxiKChcXFxcZCtcXCcoYnxofG98ZHxCfEh8T3xEKSlbMC05eHpYWmEtZkEtRl9dKyknXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogJ1xcXFxCKChcXCcoYnxofG98ZHxCfEh8T3xEKSlbMC05eHpYWmEtZkEtRl9dKyknXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogJ1xcXFxiKFswLTlfXSkrJyxcbiAgICAgICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIC8qIHBhcmFtZXRlcnMgdG8gaW5zdGFuY2VzICovXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3ZhcmlhYmxlJyxcbiAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogJyNcXFxcKCg/IXBhcmFtZXRlcikuK1xcXFwpJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW46ICdcXFxcLlxcXFx3KycsXG4gICAgICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgICAgICBiZWdpbjogJ2AnLFxuICAgICAgICBlbmQ6ICckJyxcbiAgICAgICAga2V5d29yZHM6IHtcbiAgICAgICAgICAnbWV0YS1rZXl3b3JkJzpcbiAgICAgICAgICAgICdkZWZpbmUgX19GSUxFX18gJyArXG4gICAgICAgICAgICAnX19MSU5FX18gYmVnaW5fa2V5d29yZHMgY2VsbGRlZmluZSBkZWZhdWx0X25ldHR5cGUgZGVmaW5lICcgK1xuICAgICAgICAgICAgJ2Vsc2UgZWxzaWYgZW5kX2tleXdvcmRzIGVuZGNlbGxkZWZpbmUgZW5kaWYgaWZkZWYgaWZuZGVmICcgK1xuICAgICAgICAgICAgJ2luY2x1ZGUgbGluZSBub3VuY29ubmVjdGVkX2RyaXZlIHByYWdtYSByZXNldGFsbCB0aW1lc2NhbGUgJyArXG4gICAgICAgICAgICAndW5jb25uZWN0ZWRfZHJpdmUgdW5kZWYgdW5kZWZpbmVhbGwnXG4gICAgICAgIH0sXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfVxuICAgIF1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB2ZXJpbG9nO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==