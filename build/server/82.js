exports.ids = [82];
exports.modules = {

/***/ "./node_modules/highlight.js/lib/languages/irpf90.js":
/*!***********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/irpf90.js ***!
  \***********************************************************/
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

/*
Language: IRPF90
Author: Anthony Scemama <scemama@irsamc.ups-tlse.fr>
Description: IRPF90 is an open-source Fortran code generator
Website: http://irpf90.ups-tlse.fr
Category: scientific
*/

/** @type LanguageFn */
function irpf90(hljs) {
  const PARAMS = {
    className: 'params',
    begin: '\\(',
    end: '\\)'
  };

  // regex in both fortran and irpf90 should match
  const OPTIONAL_NUMBER_SUFFIX = /(_[a-z_\d]+)?/;
  const OPTIONAL_NUMBER_EXP = /([de][+-]?\d+)?/;
  const NUMBER = {
    className: 'number',
    variants: [
      {
        begin: concat(/\b\d+/, /\.(\d*)/, OPTIONAL_NUMBER_EXP, OPTIONAL_NUMBER_SUFFIX)
      },
      {
        begin: concat(/\b\d+/, OPTIONAL_NUMBER_EXP, OPTIONAL_NUMBER_SUFFIX)
      },
      {
        begin: concat(/\.\d+/, OPTIONAL_NUMBER_EXP, OPTIONAL_NUMBER_SUFFIX)
      }
    ],
    relevance: 0
  };

  const F_KEYWORDS = {
    literal: '.False. .True.',
    keyword: 'kind do while private call intrinsic where elsewhere ' +
      'type endtype endmodule endselect endinterface end enddo endif if forall endforall only contains default return stop then ' +
      'public subroutine|10 function program .and. .or. .not. .le. .eq. .ge. .gt. .lt. ' +
      'goto save else use module select case ' +
      'access blank direct exist file fmt form formatted iostat name named nextrec number opened rec recl sequential status unformatted unit ' +
      'continue format pause cycle exit ' +
      'c_null_char c_alert c_backspace c_form_feed flush wait decimal round iomsg ' +
      'synchronous nopass non_overridable pass protected volatile abstract extends import ' +
      'non_intrinsic value deferred generic final enumerator class associate bind enum ' +
      'c_int c_short c_long c_long_long c_signed_char c_size_t c_int8_t c_int16_t c_int32_t c_int64_t c_int_least8_t c_int_least16_t ' +
      'c_int_least32_t c_int_least64_t c_int_fast8_t c_int_fast16_t c_int_fast32_t c_int_fast64_t c_intmax_t C_intptr_t c_float c_double ' +
      'c_long_double c_float_complex c_double_complex c_long_double_complex c_bool c_char c_null_ptr c_null_funptr ' +
      'c_new_line c_carriage_return c_horizontal_tab c_vertical_tab iso_c_binding c_loc c_funloc c_associated  c_f_pointer ' +
      'c_ptr c_funptr iso_fortran_env character_storage_size error_unit file_storage_size input_unit iostat_end iostat_eor ' +
      'numeric_storage_size output_unit c_f_procpointer ieee_arithmetic ieee_support_underflow_control ' +
      'ieee_get_underflow_mode ieee_set_underflow_mode newunit contiguous recursive ' +
      'pad position action delim readwrite eor advance nml interface procedure namelist include sequence elemental pure ' +
      'integer real character complex logical dimension allocatable|10 parameter ' +
      'external implicit|10 none double precision assign intent optional pointer ' +
      'target in out common equivalence data ' +
      // IRPF90 special keywords
      'begin_provider &begin_provider end_provider begin_shell end_shell begin_template end_template subst assert touch ' +
      'soft_touch provide no_dep free irp_if irp_else irp_endif irp_write irp_read',
    built_in: 'alog alog10 amax0 amax1 amin0 amin1 amod cabs ccos cexp clog csin csqrt dabs dacos dasin datan datan2 dcos dcosh ddim dexp dint ' +
      'dlog dlog10 dmax1 dmin1 dmod dnint dsign dsin dsinh dsqrt dtan dtanh float iabs idim idint idnint ifix isign max0 max1 min0 min1 sngl ' +
      'algama cdabs cdcos cdexp cdlog cdsin cdsqrt cqabs cqcos cqexp cqlog cqsin cqsqrt dcmplx dconjg derf derfc dfloat dgamma dimag dlgama ' +
      'iqint qabs qacos qasin qatan qatan2 qcmplx qconjg qcos qcosh qdim qerf qerfc qexp qgamma qimag qlgama qlog qlog10 qmax1 qmin1 qmod ' +
      'qnint qsign qsin qsinh qsqrt qtan qtanh abs acos aimag aint anint asin atan atan2 char cmplx conjg cos cosh exp ichar index int log ' +
      'log10 max min nint sign sin sinh sqrt tan tanh print write dim lge lgt lle llt mod nullify allocate deallocate ' +
      'adjustl adjustr all allocated any associated bit_size btest ceiling count cshift date_and_time digits dot_product ' +
      'eoshift epsilon exponent floor fraction huge iand ibclr ibits ibset ieor ior ishft ishftc lbound len_trim matmul ' +
      'maxexponent maxloc maxval merge minexponent minloc minval modulo mvbits nearest pack present product ' +
      'radix random_number random_seed range repeat reshape rrspacing scale scan selected_int_kind selected_real_kind ' +
      'set_exponent shape size spacing spread sum system_clock tiny transpose trim ubound unpack verify achar iachar transfer ' +
      'dble entry dprod cpu_time command_argument_count get_command get_command_argument get_environment_variable is_iostat_end ' +
      'ieee_arithmetic ieee_support_underflow_control ieee_get_underflow_mode ieee_set_underflow_mode ' +
      'is_iostat_eor move_alloc new_line selected_char_kind same_type_as extends_type_of ' +
      'acosh asinh atanh bessel_j0 bessel_j1 bessel_jn bessel_y0 bessel_y1 bessel_yn erf erfc erfc_scaled gamma log_gamma hypot norm2 ' +
      'atomic_define atomic_ref execute_command_line leadz trailz storage_size merge_bits ' +
      'bge bgt ble blt dshiftl dshiftr findloc iall iany iparity image_index lcobound ucobound maskl maskr ' +
      'num_images parity popcnt poppar shifta shiftl shiftr this_image ' +
      // IRPF90 special built_ins
      'IRP_ALIGN irp_here'
  };
  return {
    name: 'IRPF90',
    case_insensitive: true,
    keywords: F_KEYWORDS,
    illegal: /\/\*/,
    contains: [
      hljs.inherit(hljs.APOS_STRING_MODE, {
        className: 'string',
        relevance: 0
      }),
      hljs.inherit(hljs.QUOTE_STRING_MODE, {
        className: 'string',
        relevance: 0
      }),
      {
        className: 'function',
        beginKeywords: 'subroutine function program',
        illegal: '[${=\\n]',
        contains: [
          hljs.UNDERSCORE_TITLE_MODE,
          PARAMS
        ]
      },
      hljs.COMMENT('!', '$', {
        relevance: 0
      }),
      hljs.COMMENT('begin_doc', 'end_doc', {
        relevance: 10
      }),
      NUMBER
    ]
  };
}

module.exports = irpf90;


/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvaXJwZjkwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhO0FBQ2I7O0FBRUE7QUFDQSxXQUFXLGlCQUFpQjtBQUM1QixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFdBQVcsc0JBQXNCO0FBQ2pDLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiODIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHJldHVybnMge1JlZ0V4cH1cbiAqICovXG5cbi8qKlxuICogQHBhcmFtIHtSZWdFeHAgfCBzdHJpbmcgfSByZVxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gc291cmNlKHJlKSB7XG4gIGlmICghcmUpIHJldHVybiBudWxsO1xuICBpZiAodHlwZW9mIHJlID09PSBcInN0cmluZ1wiKSByZXR1cm4gcmU7XG5cbiAgcmV0dXJuIHJlLnNvdXJjZTtcbn1cblxuLyoqXG4gKiBAcGFyYW0gey4uLihSZWdFeHAgfCBzdHJpbmcpIH0gYXJnc1xuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gY29uY2F0KC4uLmFyZ3MpIHtcbiAgY29uc3Qgam9pbmVkID0gYXJncy5tYXAoKHgpID0+IHNvdXJjZSh4KSkuam9pbihcIlwiKTtcbiAgcmV0dXJuIGpvaW5lZDtcbn1cblxuLypcbkxhbmd1YWdlOiBJUlBGOTBcbkF1dGhvcjogQW50aG9ueSBTY2VtYW1hIDxzY2VtYW1hQGlyc2FtYy51cHMtdGxzZS5mcj5cbkRlc2NyaXB0aW9uOiBJUlBGOTAgaXMgYW4gb3Blbi1zb3VyY2UgRm9ydHJhbiBjb2RlIGdlbmVyYXRvclxuV2Vic2l0ZTogaHR0cDovL2lycGY5MC51cHMtdGxzZS5mclxuQ2F0ZWdvcnk6IHNjaWVudGlmaWNcbiovXG5cbi8qKiBAdHlwZSBMYW5ndWFnZUZuICovXG5mdW5jdGlvbiBpcnBmOTAoaGxqcykge1xuICBjb25zdCBQQVJBTVMgPSB7XG4gICAgY2xhc3NOYW1lOiAncGFyYW1zJyxcbiAgICBiZWdpbjogJ1xcXFwoJyxcbiAgICBlbmQ6ICdcXFxcKSdcbiAgfTtcblxuICAvLyByZWdleCBpbiBib3RoIGZvcnRyYW4gYW5kIGlycGY5MCBzaG91bGQgbWF0Y2hcbiAgY29uc3QgT1BUSU9OQUxfTlVNQkVSX1NVRkZJWCA9IC8oX1thLXpfXFxkXSspPy87XG4gIGNvbnN0IE9QVElPTkFMX05VTUJFUl9FWFAgPSAvKFtkZV1bKy1dP1xcZCspPy87XG4gIGNvbnN0IE5VTUJFUiA9IHtcbiAgICBjbGFzc05hbWU6ICdudW1iZXInLFxuICAgIHZhcmlhbnRzOiBbXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiBjb25jYXQoL1xcYlxcZCsvLCAvXFwuKFxcZCopLywgT1BUSU9OQUxfTlVNQkVSX0VYUCwgT1BUSU9OQUxfTlVNQkVSX1NVRkZJWClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiBjb25jYXQoL1xcYlxcZCsvLCBPUFRJT05BTF9OVU1CRVJfRVhQLCBPUFRJT05BTF9OVU1CRVJfU1VGRklYKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IGNvbmNhdCgvXFwuXFxkKy8sIE9QVElPTkFMX05VTUJFUl9FWFAsIE9QVElPTkFMX05VTUJFUl9TVUZGSVgpXG4gICAgICB9XG4gICAgXSxcbiAgICByZWxldmFuY2U6IDBcbiAgfTtcblxuICBjb25zdCBGX0tFWVdPUkRTID0ge1xuICAgIGxpdGVyYWw6ICcuRmFsc2UuIC5UcnVlLicsXG4gICAga2V5d29yZDogJ2tpbmQgZG8gd2hpbGUgcHJpdmF0ZSBjYWxsIGludHJpbnNpYyB3aGVyZSBlbHNld2hlcmUgJyArXG4gICAgICAndHlwZSBlbmR0eXBlIGVuZG1vZHVsZSBlbmRzZWxlY3QgZW5kaW50ZXJmYWNlIGVuZCBlbmRkbyBlbmRpZiBpZiBmb3JhbGwgZW5kZm9yYWxsIG9ubHkgY29udGFpbnMgZGVmYXVsdCByZXR1cm4gc3RvcCB0aGVuICcgK1xuICAgICAgJ3B1YmxpYyBzdWJyb3V0aW5lfDEwIGZ1bmN0aW9uIHByb2dyYW0gLmFuZC4gLm9yLiAubm90LiAubGUuIC5lcS4gLmdlLiAuZ3QuIC5sdC4gJyArXG4gICAgICAnZ290byBzYXZlIGVsc2UgdXNlIG1vZHVsZSBzZWxlY3QgY2FzZSAnICtcbiAgICAgICdhY2Nlc3MgYmxhbmsgZGlyZWN0IGV4aXN0IGZpbGUgZm10IGZvcm0gZm9ybWF0dGVkIGlvc3RhdCBuYW1lIG5hbWVkIG5leHRyZWMgbnVtYmVyIG9wZW5lZCByZWMgcmVjbCBzZXF1ZW50aWFsIHN0YXR1cyB1bmZvcm1hdHRlZCB1bml0ICcgK1xuICAgICAgJ2NvbnRpbnVlIGZvcm1hdCBwYXVzZSBjeWNsZSBleGl0ICcgK1xuICAgICAgJ2NfbnVsbF9jaGFyIGNfYWxlcnQgY19iYWNrc3BhY2UgY19mb3JtX2ZlZWQgZmx1c2ggd2FpdCBkZWNpbWFsIHJvdW5kIGlvbXNnICcgK1xuICAgICAgJ3N5bmNocm9ub3VzIG5vcGFzcyBub25fb3ZlcnJpZGFibGUgcGFzcyBwcm90ZWN0ZWQgdm9sYXRpbGUgYWJzdHJhY3QgZXh0ZW5kcyBpbXBvcnQgJyArXG4gICAgICAnbm9uX2ludHJpbnNpYyB2YWx1ZSBkZWZlcnJlZCBnZW5lcmljIGZpbmFsIGVudW1lcmF0b3IgY2xhc3MgYXNzb2NpYXRlIGJpbmQgZW51bSAnICtcbiAgICAgICdjX2ludCBjX3Nob3J0IGNfbG9uZyBjX2xvbmdfbG9uZyBjX3NpZ25lZF9jaGFyIGNfc2l6ZV90IGNfaW50OF90IGNfaW50MTZfdCBjX2ludDMyX3QgY19pbnQ2NF90IGNfaW50X2xlYXN0OF90IGNfaW50X2xlYXN0MTZfdCAnICtcbiAgICAgICdjX2ludF9sZWFzdDMyX3QgY19pbnRfbGVhc3Q2NF90IGNfaW50X2Zhc3Q4X3QgY19pbnRfZmFzdDE2X3QgY19pbnRfZmFzdDMyX3QgY19pbnRfZmFzdDY0X3QgY19pbnRtYXhfdCBDX2ludHB0cl90IGNfZmxvYXQgY19kb3VibGUgJyArXG4gICAgICAnY19sb25nX2RvdWJsZSBjX2Zsb2F0X2NvbXBsZXggY19kb3VibGVfY29tcGxleCBjX2xvbmdfZG91YmxlX2NvbXBsZXggY19ib29sIGNfY2hhciBjX251bGxfcHRyIGNfbnVsbF9mdW5wdHIgJyArXG4gICAgICAnY19uZXdfbGluZSBjX2NhcnJpYWdlX3JldHVybiBjX2hvcml6b250YWxfdGFiIGNfdmVydGljYWxfdGFiIGlzb19jX2JpbmRpbmcgY19sb2MgY19mdW5sb2MgY19hc3NvY2lhdGVkICBjX2ZfcG9pbnRlciAnICtcbiAgICAgICdjX3B0ciBjX2Z1bnB0ciBpc29fZm9ydHJhbl9lbnYgY2hhcmFjdGVyX3N0b3JhZ2Vfc2l6ZSBlcnJvcl91bml0IGZpbGVfc3RvcmFnZV9zaXplIGlucHV0X3VuaXQgaW9zdGF0X2VuZCBpb3N0YXRfZW9yICcgK1xuICAgICAgJ251bWVyaWNfc3RvcmFnZV9zaXplIG91dHB1dF91bml0IGNfZl9wcm9jcG9pbnRlciBpZWVlX2FyaXRobWV0aWMgaWVlZV9zdXBwb3J0X3VuZGVyZmxvd19jb250cm9sICcgK1xuICAgICAgJ2llZWVfZ2V0X3VuZGVyZmxvd19tb2RlIGllZWVfc2V0X3VuZGVyZmxvd19tb2RlIG5ld3VuaXQgY29udGlndW91cyByZWN1cnNpdmUgJyArXG4gICAgICAncGFkIHBvc2l0aW9uIGFjdGlvbiBkZWxpbSByZWFkd3JpdGUgZW9yIGFkdmFuY2Ugbm1sIGludGVyZmFjZSBwcm9jZWR1cmUgbmFtZWxpc3QgaW5jbHVkZSBzZXF1ZW5jZSBlbGVtZW50YWwgcHVyZSAnICtcbiAgICAgICdpbnRlZ2VyIHJlYWwgY2hhcmFjdGVyIGNvbXBsZXggbG9naWNhbCBkaW1lbnNpb24gYWxsb2NhdGFibGV8MTAgcGFyYW1ldGVyICcgK1xuICAgICAgJ2V4dGVybmFsIGltcGxpY2l0fDEwIG5vbmUgZG91YmxlIHByZWNpc2lvbiBhc3NpZ24gaW50ZW50IG9wdGlvbmFsIHBvaW50ZXIgJyArXG4gICAgICAndGFyZ2V0IGluIG91dCBjb21tb24gZXF1aXZhbGVuY2UgZGF0YSAnICtcbiAgICAgIC8vIElSUEY5MCBzcGVjaWFsIGtleXdvcmRzXG4gICAgICAnYmVnaW5fcHJvdmlkZXIgJmJlZ2luX3Byb3ZpZGVyIGVuZF9wcm92aWRlciBiZWdpbl9zaGVsbCBlbmRfc2hlbGwgYmVnaW5fdGVtcGxhdGUgZW5kX3RlbXBsYXRlIHN1YnN0IGFzc2VydCB0b3VjaCAnICtcbiAgICAgICdzb2Z0X3RvdWNoIHByb3ZpZGUgbm9fZGVwIGZyZWUgaXJwX2lmIGlycF9lbHNlIGlycF9lbmRpZiBpcnBfd3JpdGUgaXJwX3JlYWQnLFxuICAgIGJ1aWx0X2luOiAnYWxvZyBhbG9nMTAgYW1heDAgYW1heDEgYW1pbjAgYW1pbjEgYW1vZCBjYWJzIGNjb3MgY2V4cCBjbG9nIGNzaW4gY3NxcnQgZGFicyBkYWNvcyBkYXNpbiBkYXRhbiBkYXRhbjIgZGNvcyBkY29zaCBkZGltIGRleHAgZGludCAnICtcbiAgICAgICdkbG9nIGRsb2cxMCBkbWF4MSBkbWluMSBkbW9kIGRuaW50IGRzaWduIGRzaW4gZHNpbmggZHNxcnQgZHRhbiBkdGFuaCBmbG9hdCBpYWJzIGlkaW0gaWRpbnQgaWRuaW50IGlmaXggaXNpZ24gbWF4MCBtYXgxIG1pbjAgbWluMSBzbmdsICcgK1xuICAgICAgJ2FsZ2FtYSBjZGFicyBjZGNvcyBjZGV4cCBjZGxvZyBjZHNpbiBjZHNxcnQgY3FhYnMgY3Fjb3MgY3FleHAgY3Fsb2cgY3FzaW4gY3FzcXJ0IGRjbXBseCBkY29uamcgZGVyZiBkZXJmYyBkZmxvYXQgZGdhbW1hIGRpbWFnIGRsZ2FtYSAnICtcbiAgICAgICdpcWludCBxYWJzIHFhY29zIHFhc2luIHFhdGFuIHFhdGFuMiBxY21wbHggcWNvbmpnIHFjb3MgcWNvc2ggcWRpbSBxZXJmIHFlcmZjIHFleHAgcWdhbW1hIHFpbWFnIHFsZ2FtYSBxbG9nIHFsb2cxMCBxbWF4MSBxbWluMSBxbW9kICcgK1xuICAgICAgJ3FuaW50IHFzaWduIHFzaW4gcXNpbmggcXNxcnQgcXRhbiBxdGFuaCBhYnMgYWNvcyBhaW1hZyBhaW50IGFuaW50IGFzaW4gYXRhbiBhdGFuMiBjaGFyIGNtcGx4IGNvbmpnIGNvcyBjb3NoIGV4cCBpY2hhciBpbmRleCBpbnQgbG9nICcgK1xuICAgICAgJ2xvZzEwIG1heCBtaW4gbmludCBzaWduIHNpbiBzaW5oIHNxcnQgdGFuIHRhbmggcHJpbnQgd3JpdGUgZGltIGxnZSBsZ3QgbGxlIGxsdCBtb2QgbnVsbGlmeSBhbGxvY2F0ZSBkZWFsbG9jYXRlICcgK1xuICAgICAgJ2FkanVzdGwgYWRqdXN0ciBhbGwgYWxsb2NhdGVkIGFueSBhc3NvY2lhdGVkIGJpdF9zaXplIGJ0ZXN0IGNlaWxpbmcgY291bnQgY3NoaWZ0IGRhdGVfYW5kX3RpbWUgZGlnaXRzIGRvdF9wcm9kdWN0ICcgK1xuICAgICAgJ2Vvc2hpZnQgZXBzaWxvbiBleHBvbmVudCBmbG9vciBmcmFjdGlvbiBodWdlIGlhbmQgaWJjbHIgaWJpdHMgaWJzZXQgaWVvciBpb3IgaXNoZnQgaXNoZnRjIGxib3VuZCBsZW5fdHJpbSBtYXRtdWwgJyArXG4gICAgICAnbWF4ZXhwb25lbnQgbWF4bG9jIG1heHZhbCBtZXJnZSBtaW5leHBvbmVudCBtaW5sb2MgbWludmFsIG1vZHVsbyBtdmJpdHMgbmVhcmVzdCBwYWNrIHByZXNlbnQgcHJvZHVjdCAnICtcbiAgICAgICdyYWRpeCByYW5kb21fbnVtYmVyIHJhbmRvbV9zZWVkIHJhbmdlIHJlcGVhdCByZXNoYXBlIHJyc3BhY2luZyBzY2FsZSBzY2FuIHNlbGVjdGVkX2ludF9raW5kIHNlbGVjdGVkX3JlYWxfa2luZCAnICtcbiAgICAgICdzZXRfZXhwb25lbnQgc2hhcGUgc2l6ZSBzcGFjaW5nIHNwcmVhZCBzdW0gc3lzdGVtX2Nsb2NrIHRpbnkgdHJhbnNwb3NlIHRyaW0gdWJvdW5kIHVucGFjayB2ZXJpZnkgYWNoYXIgaWFjaGFyIHRyYW5zZmVyICcgK1xuICAgICAgJ2RibGUgZW50cnkgZHByb2QgY3B1X3RpbWUgY29tbWFuZF9hcmd1bWVudF9jb3VudCBnZXRfY29tbWFuZCBnZXRfY29tbWFuZF9hcmd1bWVudCBnZXRfZW52aXJvbm1lbnRfdmFyaWFibGUgaXNfaW9zdGF0X2VuZCAnICtcbiAgICAgICdpZWVlX2FyaXRobWV0aWMgaWVlZV9zdXBwb3J0X3VuZGVyZmxvd19jb250cm9sIGllZWVfZ2V0X3VuZGVyZmxvd19tb2RlIGllZWVfc2V0X3VuZGVyZmxvd19tb2RlICcgK1xuICAgICAgJ2lzX2lvc3RhdF9lb3IgbW92ZV9hbGxvYyBuZXdfbGluZSBzZWxlY3RlZF9jaGFyX2tpbmQgc2FtZV90eXBlX2FzIGV4dGVuZHNfdHlwZV9vZiAnICtcbiAgICAgICdhY29zaCBhc2luaCBhdGFuaCBiZXNzZWxfajAgYmVzc2VsX2oxIGJlc3NlbF9qbiBiZXNzZWxfeTAgYmVzc2VsX3kxIGJlc3NlbF95biBlcmYgZXJmYyBlcmZjX3NjYWxlZCBnYW1tYSBsb2dfZ2FtbWEgaHlwb3Qgbm9ybTIgJyArXG4gICAgICAnYXRvbWljX2RlZmluZSBhdG9taWNfcmVmIGV4ZWN1dGVfY29tbWFuZF9saW5lIGxlYWR6IHRyYWlseiBzdG9yYWdlX3NpemUgbWVyZ2VfYml0cyAnICtcbiAgICAgICdiZ2UgYmd0IGJsZSBibHQgZHNoaWZ0bCBkc2hpZnRyIGZpbmRsb2MgaWFsbCBpYW55IGlwYXJpdHkgaW1hZ2VfaW5kZXggbGNvYm91bmQgdWNvYm91bmQgbWFza2wgbWFza3IgJyArXG4gICAgICAnbnVtX2ltYWdlcyBwYXJpdHkgcG9wY250IHBvcHBhciBzaGlmdGEgc2hpZnRsIHNoaWZ0ciB0aGlzX2ltYWdlICcgK1xuICAgICAgLy8gSVJQRjkwIHNwZWNpYWwgYnVpbHRfaW5zXG4gICAgICAnSVJQX0FMSUdOIGlycF9oZXJlJ1xuICB9O1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICdJUlBGOTAnLFxuICAgIGNhc2VfaW5zZW5zaXRpdmU6IHRydWUsXG4gICAga2V5d29yZHM6IEZfS0VZV09SRFMsXG4gICAgaWxsZWdhbDogL1xcL1xcKi8sXG4gICAgY29udGFpbnM6IFtcbiAgICAgIGhsanMuaW5oZXJpdChobGpzLkFQT1NfU1RSSU5HX01PREUsIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9KSxcbiAgICAgIGhsanMuaW5oZXJpdChobGpzLlFVT1RFX1NUUklOR19NT0RFLCB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSksXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2Z1bmN0aW9uJyxcbiAgICAgICAgYmVnaW5LZXl3b3JkczogJ3N1YnJvdXRpbmUgZnVuY3Rpb24gcHJvZ3JhbScsXG4gICAgICAgIGlsbGVnYWw6ICdbJHs9XFxcXG5dJyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICBobGpzLlVOREVSU0NPUkVfVElUTEVfTU9ERSxcbiAgICAgICAgICBQQVJBTVNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIGhsanMuQ09NTUVOVCgnIScsICckJywge1xuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0pLFxuICAgICAgaGxqcy5DT01NRU5UKCdiZWdpbl9kb2MnLCAnZW5kX2RvYycsIHtcbiAgICAgICAgcmVsZXZhbmNlOiAxMFxuICAgICAgfSksXG4gICAgICBOVU1CRVJcbiAgICBdXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXJwZjkwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==