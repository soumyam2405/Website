(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[58],{

/***/ "./node_modules/highlight.js/lib/languages/excel.js":
/*!**********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/excel.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Excel formulae
Author: Victor Zhou <OiCMudkips@users.noreply.github.com>
Description: Excel formulae
Website: https://products.office.com/en-us/excel/
*/

/** @type LanguageFn */
function excel(hljs) {
  return {
    name: 'Excel formulae',
    aliases: [
      'xlsx',
      'xls'
    ],
    case_insensitive: true,
    // built-in functions imported from https://web.archive.org/web/20160513042710/https://support.office.com/en-us/article/Excel-functions-alphabetical-b3944572-255d-4efb-bb96-c6d90033e188
    keywords: {
      $pattern: /[a-zA-Z][\w\.]*/,
      built_in: 'ABS ACCRINT ACCRINTM ACOS ACOSH ACOT ACOTH AGGREGATE ADDRESS AMORDEGRC AMORLINC AND ARABIC AREAS ASC ASIN ASINH ATAN ATAN2 ATANH AVEDEV AVERAGE AVERAGEA AVERAGEIF AVERAGEIFS BAHTTEXT BASE BESSELI BESSELJ BESSELK BESSELY BETADIST BETA.DIST BETAINV BETA.INV BIN2DEC BIN2HEX BIN2OCT BINOMDIST BINOM.DIST BINOM.DIST.RANGE BINOM.INV BITAND BITLSHIFT BITOR BITRSHIFT BITXOR CALL CEILING CEILING.MATH CEILING.PRECISE CELL CHAR CHIDIST CHIINV CHITEST CHISQ.DIST CHISQ.DIST.RT CHISQ.INV CHISQ.INV.RT CHISQ.TEST CHOOSE CLEAN CODE COLUMN COLUMNS COMBIN COMBINA COMPLEX CONCAT CONCATENATE CONFIDENCE CONFIDENCE.NORM CONFIDENCE.T CONVERT CORREL COS COSH COT COTH COUNT COUNTA COUNTBLANK COUNTIF COUNTIFS COUPDAYBS COUPDAYS COUPDAYSNC COUPNCD COUPNUM COUPPCD COVAR COVARIANCE.P COVARIANCE.S CRITBINOM CSC CSCH CUBEKPIMEMBER CUBEMEMBER CUBEMEMBERPROPERTY CUBERANKEDMEMBER CUBESET CUBESETCOUNT CUBEVALUE CUMIPMT CUMPRINC DATE DATEDIF DATEVALUE DAVERAGE DAY DAYS DAYS360 DB DBCS DCOUNT DCOUNTA DDB DEC2BIN DEC2HEX DEC2OCT DECIMAL DEGREES DELTA DEVSQ DGET DISC DMAX DMIN DOLLAR DOLLARDE DOLLARFR DPRODUCT DSTDEV DSTDEVP DSUM DURATION DVAR DVARP EDATE EFFECT ENCODEURL EOMONTH ERF ERF.PRECISE ERFC ERFC.PRECISE ERROR.TYPE EUROCONVERT EVEN EXACT EXP EXPON.DIST EXPONDIST FACT FACTDOUBLE FALSE|0 F.DIST FDIST F.DIST.RT FILTERXML FIND FINDB F.INV F.INV.RT FINV FISHER FISHERINV FIXED FLOOR FLOOR.MATH FLOOR.PRECISE FORECAST FORECAST.ETS FORECAST.ETS.CONFINT FORECAST.ETS.SEASONALITY FORECAST.ETS.STAT FORECAST.LINEAR FORMULATEXT FREQUENCY F.TEST FTEST FV FVSCHEDULE GAMMA GAMMA.DIST GAMMADIST GAMMA.INV GAMMAINV GAMMALN GAMMALN.PRECISE GAUSS GCD GEOMEAN GESTEP GETPIVOTDATA GROWTH HARMEAN HEX2BIN HEX2DEC HEX2OCT HLOOKUP HOUR HYPERLINK HYPGEOM.DIST HYPGEOMDIST IF IFERROR IFNA IFS IMABS IMAGINARY IMARGUMENT IMCONJUGATE IMCOS IMCOSH IMCOT IMCSC IMCSCH IMDIV IMEXP IMLN IMLOG10 IMLOG2 IMPOWER IMPRODUCT IMREAL IMSEC IMSECH IMSIN IMSINH IMSQRT IMSUB IMSUM IMTAN INDEX INDIRECT INFO INT INTERCEPT INTRATE IPMT IRR ISBLANK ISERR ISERROR ISEVEN ISFORMULA ISLOGICAL ISNA ISNONTEXT ISNUMBER ISODD ISREF ISTEXT ISO.CEILING ISOWEEKNUM ISPMT JIS KURT LARGE LCM LEFT LEFTB LEN LENB LINEST LN LOG LOG10 LOGEST LOGINV LOGNORM.DIST LOGNORMDIST LOGNORM.INV LOOKUP LOWER MATCH MAX MAXA MAXIFS MDETERM MDURATION MEDIAN MID MIDBs MIN MINIFS MINA MINUTE MINVERSE MIRR MMULT MOD MODE MODE.MULT MODE.SNGL MONTH MROUND MULTINOMIAL MUNIT N NA NEGBINOM.DIST NEGBINOMDIST NETWORKDAYS NETWORKDAYS.INTL NOMINAL NORM.DIST NORMDIST NORMINV NORM.INV NORM.S.DIST NORMSDIST NORM.S.INV NORMSINV NOT NOW NPER NPV NUMBERVALUE OCT2BIN OCT2DEC OCT2HEX ODD ODDFPRICE ODDFYIELD ODDLPRICE ODDLYIELD OFFSET OR PDURATION PEARSON PERCENTILE.EXC PERCENTILE.INC PERCENTILE PERCENTRANK.EXC PERCENTRANK.INC PERCENTRANK PERMUT PERMUTATIONA PHI PHONETIC PI PMT POISSON.DIST POISSON POWER PPMT PRICE PRICEDISC PRICEMAT PROB PRODUCT PROPER PV QUARTILE QUARTILE.EXC QUARTILE.INC QUOTIENT RADIANS RAND RANDBETWEEN RANK.AVG RANK.EQ RANK RATE RECEIVED REGISTER.ID REPLACE REPLACEB REPT RIGHT RIGHTB ROMAN ROUND ROUNDDOWN ROUNDUP ROW ROWS RRI RSQ RTD SEARCH SEARCHB SEC SECH SECOND SERIESSUM SHEET SHEETS SIGN SIN SINH SKEW SKEW.P SLN SLOPE SMALL SQL.REQUEST SQRT SQRTPI STANDARDIZE STDEV STDEV.P STDEV.S STDEVA STDEVP STDEVPA STEYX SUBSTITUTE SUBTOTAL SUM SUMIF SUMIFS SUMPRODUCT SUMSQ SUMX2MY2 SUMX2PY2 SUMXMY2 SWITCH SYD T TAN TANH TBILLEQ TBILLPRICE TBILLYIELD T.DIST T.DIST.2T T.DIST.RT TDIST TEXT TEXTJOIN TIME TIMEVALUE T.INV T.INV.2T TINV TODAY TRANSPOSE TREND TRIM TRIMMEAN TRUE|0 TRUNC T.TEST TTEST TYPE UNICHAR UNICODE UPPER VALUE VAR VAR.P VAR.S VARA VARP VARPA VDB VLOOKUP WEBSERVICE WEEKDAY WEEKNUM WEIBULL WEIBULL.DIST WORKDAY WORKDAY.INTL XIRR XNPV XOR YEAR YEARFRAC YIELD YIELDDISC YIELDMAT Z.TEST ZTEST'
    },
    contains: [
      {
        /* matches a beginning equal sign found in Excel formula examples */
        begin: /^=/,
        end: /[^=]/,
        returnEnd: true,
        illegal: /=/, /* only allow single equal sign at front of line */
        relevance: 10
      },
      /* technically, there can be more than 2 letters in column names, but this prevents conflict with some keywords */
      {
        /* matches a reference to a single cell */
        className: 'symbol',
        begin: /\b[A-Z]{1,2}\d+\b/,
        end: /[^\d]/,
        excludeEnd: true,
        relevance: 0
      },
      {
        /* matches a reference to a range of cells */
        className: 'symbol',
        begin: /[A-Z]{0,2}\d*:[A-Z]{0,2}\d*/,
        relevance: 0
      },
      hljs.BACKSLASH_ESCAPE,
      hljs.QUOTE_STRING_MODE,
      {
        className: 'number',
        begin: hljs.NUMBER_RE + '(%)?',
        relevance: 0
      },
      /* Excel formula comments are done by putting the comment in a function call to N() */
      hljs.COMMENT(/\bN\(/, /\)/,
        {
          excludeBegin: true,
          excludeEnd: true,
          illegal: /\n/
        })
    ]
  };
}

module.exports = excel;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2V4Y2VsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLElBQUk7QUFDNUI7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixJQUFJLFVBQVUsSUFBSTtBQUN4QztBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJzdGF0aWMvY2h1bmtzLzU4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBFeGNlbCBmb3JtdWxhZVxuQXV0aG9yOiBWaWN0b3IgWmhvdSA8T2lDTXVka2lwc0B1c2Vycy5ub3JlcGx5LmdpdGh1Yi5jb20+XG5EZXNjcmlwdGlvbjogRXhjZWwgZm9ybXVsYWVcbldlYnNpdGU6IGh0dHBzOi8vcHJvZHVjdHMub2ZmaWNlLmNvbS9lbi11cy9leGNlbC9cbiovXG5cbi8qKiBAdHlwZSBMYW5ndWFnZUZuICovXG5mdW5jdGlvbiBleGNlbChobGpzKSB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ0V4Y2VsIGZvcm11bGFlJyxcbiAgICBhbGlhc2VzOiBbXG4gICAgICAneGxzeCcsXG4gICAgICAneGxzJ1xuICAgIF0sXG4gICAgY2FzZV9pbnNlbnNpdGl2ZTogdHJ1ZSxcbiAgICAvLyBidWlsdC1pbiBmdW5jdGlvbnMgaW1wb3J0ZWQgZnJvbSBodHRwczovL3dlYi5hcmNoaXZlLm9yZy93ZWIvMjAxNjA1MTMwNDI3MTAvaHR0cHM6Ly9zdXBwb3J0Lm9mZmljZS5jb20vZW4tdXMvYXJ0aWNsZS9FeGNlbC1mdW5jdGlvbnMtYWxwaGFiZXRpY2FsLWIzOTQ0NTcyLTI1NWQtNGVmYi1iYjk2LWM2ZDkwMDMzZTE4OFxuICAgIGtleXdvcmRzOiB7XG4gICAgICAkcGF0dGVybjogL1thLXpBLVpdW1xcd1xcLl0qLyxcbiAgICAgIGJ1aWx0X2luOiAnQUJTIEFDQ1JJTlQgQUNDUklOVE0gQUNPUyBBQ09TSCBBQ09UIEFDT1RIIEFHR1JFR0FURSBBRERSRVNTIEFNT1JERUdSQyBBTU9STElOQyBBTkQgQVJBQklDIEFSRUFTIEFTQyBBU0lOIEFTSU5IIEFUQU4gQVRBTjIgQVRBTkggQVZFREVWIEFWRVJBR0UgQVZFUkFHRUEgQVZFUkFHRUlGIEFWRVJBR0VJRlMgQkFIVFRFWFQgQkFTRSBCRVNTRUxJIEJFU1NFTEogQkVTU0VMSyBCRVNTRUxZIEJFVEFESVNUIEJFVEEuRElTVCBCRVRBSU5WIEJFVEEuSU5WIEJJTjJERUMgQklOMkhFWCBCSU4yT0NUIEJJTk9NRElTVCBCSU5PTS5ESVNUIEJJTk9NLkRJU1QuUkFOR0UgQklOT00uSU5WIEJJVEFORCBCSVRMU0hJRlQgQklUT1IgQklUUlNISUZUIEJJVFhPUiBDQUxMIENFSUxJTkcgQ0VJTElORy5NQVRIIENFSUxJTkcuUFJFQ0lTRSBDRUxMIENIQVIgQ0hJRElTVCBDSElJTlYgQ0hJVEVTVCBDSElTUS5ESVNUIENISVNRLkRJU1QuUlQgQ0hJU1EuSU5WIENISVNRLklOVi5SVCBDSElTUS5URVNUIENIT09TRSBDTEVBTiBDT0RFIENPTFVNTiBDT0xVTU5TIENPTUJJTiBDT01CSU5BIENPTVBMRVggQ09OQ0FUIENPTkNBVEVOQVRFIENPTkZJREVOQ0UgQ09ORklERU5DRS5OT1JNIENPTkZJREVOQ0UuVCBDT05WRVJUIENPUlJFTCBDT1MgQ09TSCBDT1QgQ09USCBDT1VOVCBDT1VOVEEgQ09VTlRCTEFOSyBDT1VOVElGIENPVU5USUZTIENPVVBEQVlCUyBDT1VQREFZUyBDT1VQREFZU05DIENPVVBOQ0QgQ09VUE5VTSBDT1VQUENEIENPVkFSIENPVkFSSUFOQ0UuUCBDT1ZBUklBTkNFLlMgQ1JJVEJJTk9NIENTQyBDU0NIIENVQkVLUElNRU1CRVIgQ1VCRU1FTUJFUiBDVUJFTUVNQkVSUFJPUEVSVFkgQ1VCRVJBTktFRE1FTUJFUiBDVUJFU0VUIENVQkVTRVRDT1VOVCBDVUJFVkFMVUUgQ1VNSVBNVCBDVU1QUklOQyBEQVRFIERBVEVESUYgREFURVZBTFVFIERBVkVSQUdFIERBWSBEQVlTIERBWVMzNjAgREIgREJDUyBEQ09VTlQgRENPVU5UQSBEREIgREVDMkJJTiBERUMySEVYIERFQzJPQ1QgREVDSU1BTCBERUdSRUVTIERFTFRBIERFVlNRIERHRVQgRElTQyBETUFYIERNSU4gRE9MTEFSIERPTExBUkRFIERPTExBUkZSIERQUk9EVUNUIERTVERFViBEU1RERVZQIERTVU0gRFVSQVRJT04gRFZBUiBEVkFSUCBFREFURSBFRkZFQ1QgRU5DT0RFVVJMIEVPTU9OVEggRVJGIEVSRi5QUkVDSVNFIEVSRkMgRVJGQy5QUkVDSVNFIEVSUk9SLlRZUEUgRVVST0NPTlZFUlQgRVZFTiBFWEFDVCBFWFAgRVhQT04uRElTVCBFWFBPTkRJU1QgRkFDVCBGQUNURE9VQkxFIEZBTFNFfDAgRi5ESVNUIEZESVNUIEYuRElTVC5SVCBGSUxURVJYTUwgRklORCBGSU5EQiBGLklOViBGLklOVi5SVCBGSU5WIEZJU0hFUiBGSVNIRVJJTlYgRklYRUQgRkxPT1IgRkxPT1IuTUFUSCBGTE9PUi5QUkVDSVNFIEZPUkVDQVNUIEZPUkVDQVNULkVUUyBGT1JFQ0FTVC5FVFMuQ09ORklOVCBGT1JFQ0FTVC5FVFMuU0VBU09OQUxJVFkgRk9SRUNBU1QuRVRTLlNUQVQgRk9SRUNBU1QuTElORUFSIEZPUk1VTEFURVhUIEZSRVFVRU5DWSBGLlRFU1QgRlRFU1QgRlYgRlZTQ0hFRFVMRSBHQU1NQSBHQU1NQS5ESVNUIEdBTU1BRElTVCBHQU1NQS5JTlYgR0FNTUFJTlYgR0FNTUFMTiBHQU1NQUxOLlBSRUNJU0UgR0FVU1MgR0NEIEdFT01FQU4gR0VTVEVQIEdFVFBJVk9UREFUQSBHUk9XVEggSEFSTUVBTiBIRVgyQklOIEhFWDJERUMgSEVYMk9DVCBITE9PS1VQIEhPVVIgSFlQRVJMSU5LIEhZUEdFT00uRElTVCBIWVBHRU9NRElTVCBJRiBJRkVSUk9SIElGTkEgSUZTIElNQUJTIElNQUdJTkFSWSBJTUFSR1VNRU5UIElNQ09OSlVHQVRFIElNQ09TIElNQ09TSCBJTUNPVCBJTUNTQyBJTUNTQ0ggSU1ESVYgSU1FWFAgSU1MTiBJTUxPRzEwIElNTE9HMiBJTVBPV0VSIElNUFJPRFVDVCBJTVJFQUwgSU1TRUMgSU1TRUNIIElNU0lOIElNU0lOSCBJTVNRUlQgSU1TVUIgSU1TVU0gSU1UQU4gSU5ERVggSU5ESVJFQ1QgSU5GTyBJTlQgSU5URVJDRVBUIElOVFJBVEUgSVBNVCBJUlIgSVNCTEFOSyBJU0VSUiBJU0VSUk9SIElTRVZFTiBJU0ZPUk1VTEEgSVNMT0dJQ0FMIElTTkEgSVNOT05URVhUIElTTlVNQkVSIElTT0REIElTUkVGIElTVEVYVCBJU08uQ0VJTElORyBJU09XRUVLTlVNIElTUE1UIEpJUyBLVVJUIExBUkdFIExDTSBMRUZUIExFRlRCIExFTiBMRU5CIExJTkVTVCBMTiBMT0cgTE9HMTAgTE9HRVNUIExPR0lOViBMT0dOT1JNLkRJU1QgTE9HTk9STURJU1QgTE9HTk9STS5JTlYgTE9PS1VQIExPV0VSIE1BVENIIE1BWCBNQVhBIE1BWElGUyBNREVURVJNIE1EVVJBVElPTiBNRURJQU4gTUlEIE1JREJzIE1JTiBNSU5JRlMgTUlOQSBNSU5VVEUgTUlOVkVSU0UgTUlSUiBNTVVMVCBNT0QgTU9ERSBNT0RFLk1VTFQgTU9ERS5TTkdMIE1PTlRIIE1ST1VORCBNVUxUSU5PTUlBTCBNVU5JVCBOIE5BIE5FR0JJTk9NLkRJU1QgTkVHQklOT01ESVNUIE5FVFdPUktEQVlTIE5FVFdPUktEQVlTLklOVEwgTk9NSU5BTCBOT1JNLkRJU1QgTk9STURJU1QgTk9STUlOViBOT1JNLklOViBOT1JNLlMuRElTVCBOT1JNU0RJU1QgTk9STS5TLklOViBOT1JNU0lOViBOT1QgTk9XIE5QRVIgTlBWIE5VTUJFUlZBTFVFIE9DVDJCSU4gT0NUMkRFQyBPQ1QySEVYIE9ERCBPRERGUFJJQ0UgT0RERllJRUxEIE9ERExQUklDRSBPRERMWUlFTEQgT0ZGU0VUIE9SIFBEVVJBVElPTiBQRUFSU09OIFBFUkNFTlRJTEUuRVhDIFBFUkNFTlRJTEUuSU5DIFBFUkNFTlRJTEUgUEVSQ0VOVFJBTksuRVhDIFBFUkNFTlRSQU5LLklOQyBQRVJDRU5UUkFOSyBQRVJNVVQgUEVSTVVUQVRJT05BIFBISSBQSE9ORVRJQyBQSSBQTVQgUE9JU1NPTi5ESVNUIFBPSVNTT04gUE9XRVIgUFBNVCBQUklDRSBQUklDRURJU0MgUFJJQ0VNQVQgUFJPQiBQUk9EVUNUIFBST1BFUiBQViBRVUFSVElMRSBRVUFSVElMRS5FWEMgUVVBUlRJTEUuSU5DIFFVT1RJRU5UIFJBRElBTlMgUkFORCBSQU5EQkVUV0VFTiBSQU5LLkFWRyBSQU5LLkVRIFJBTksgUkFURSBSRUNFSVZFRCBSRUdJU1RFUi5JRCBSRVBMQUNFIFJFUExBQ0VCIFJFUFQgUklHSFQgUklHSFRCIFJPTUFOIFJPVU5EIFJPVU5ERE9XTiBST1VORFVQIFJPVyBST1dTIFJSSSBSU1EgUlREIFNFQVJDSCBTRUFSQ0hCIFNFQyBTRUNIIFNFQ09ORCBTRVJJRVNTVU0gU0hFRVQgU0hFRVRTIFNJR04gU0lOIFNJTkggU0tFVyBTS0VXLlAgU0xOIFNMT1BFIFNNQUxMIFNRTC5SRVFVRVNUIFNRUlQgU1FSVFBJIFNUQU5EQVJESVpFIFNUREVWIFNUREVWLlAgU1RERVYuUyBTVERFVkEgU1RERVZQIFNUREVWUEEgU1RFWVggU1VCU1RJVFVURSBTVUJUT1RBTCBTVU0gU1VNSUYgU1VNSUZTIFNVTVBST0RVQ1QgU1VNU1EgU1VNWDJNWTIgU1VNWDJQWTIgU1VNWE1ZMiBTV0lUQ0ggU1lEIFQgVEFOIFRBTkggVEJJTExFUSBUQklMTFBSSUNFIFRCSUxMWUlFTEQgVC5ESVNUIFQuRElTVC4yVCBULkRJU1QuUlQgVERJU1QgVEVYVCBURVhUSk9JTiBUSU1FIFRJTUVWQUxVRSBULklOViBULklOVi4yVCBUSU5WIFRPREFZIFRSQU5TUE9TRSBUUkVORCBUUklNIFRSSU1NRUFOIFRSVUV8MCBUUlVOQyBULlRFU1QgVFRFU1QgVFlQRSBVTklDSEFSIFVOSUNPREUgVVBQRVIgVkFMVUUgVkFSIFZBUi5QIFZBUi5TIFZBUkEgVkFSUCBWQVJQQSBWREIgVkxPT0tVUCBXRUJTRVJWSUNFIFdFRUtEQVkgV0VFS05VTSBXRUlCVUxMIFdFSUJVTEwuRElTVCBXT1JLREFZIFdPUktEQVkuSU5UTCBYSVJSIFhOUFYgWE9SIFlFQVIgWUVBUkZSQUMgWUlFTEQgWUlFTERESVNDIFlJRUxETUFUIFouVEVTVCBaVEVTVCdcbiAgICB9LFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICB7XG4gICAgICAgIC8qIG1hdGNoZXMgYSBiZWdpbm5pbmcgZXF1YWwgc2lnbiBmb3VuZCBpbiBFeGNlbCBmb3JtdWxhIGV4YW1wbGVzICovXG4gICAgICAgIGJlZ2luOiAvXj0vLFxuICAgICAgICBlbmQ6IC9bXj1dLyxcbiAgICAgICAgcmV0dXJuRW5kOiB0cnVlLFxuICAgICAgICBpbGxlZ2FsOiAvPS8sIC8qIG9ubHkgYWxsb3cgc2luZ2xlIGVxdWFsIHNpZ24gYXQgZnJvbnQgb2YgbGluZSAqL1xuICAgICAgICByZWxldmFuY2U6IDEwXG4gICAgICB9LFxuICAgICAgLyogdGVjaG5pY2FsbHksIHRoZXJlIGNhbiBiZSBtb3JlIHRoYW4gMiBsZXR0ZXJzIGluIGNvbHVtbiBuYW1lcywgYnV0IHRoaXMgcHJldmVudHMgY29uZmxpY3Qgd2l0aCBzb21lIGtleXdvcmRzICovXG4gICAgICB7XG4gICAgICAgIC8qIG1hdGNoZXMgYSByZWZlcmVuY2UgdG8gYSBzaW5nbGUgY2VsbCAqL1xuICAgICAgICBjbGFzc05hbWU6ICdzeW1ib2wnLFxuICAgICAgICBiZWdpbjogL1xcYltBLVpdezEsMn1cXGQrXFxiLyxcbiAgICAgICAgZW5kOiAvW15cXGRdLyxcbiAgICAgICAgZXhjbHVkZUVuZDogdHJ1ZSxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAvKiBtYXRjaGVzIGEgcmVmZXJlbmNlIHRvIGEgcmFuZ2Ugb2YgY2VsbHMgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnc3ltYm9sJyxcbiAgICAgICAgYmVnaW46IC9bQS1aXXswLDJ9XFxkKjpbQS1aXXswLDJ9XFxkKi8sXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIGhsanMuQkFDS1NMQVNIX0VTQ0FQRSxcbiAgICAgIGhsanMuUVVPVEVfU1RSSU5HX01PREUsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgICAgIGJlZ2luOiBobGpzLk5VTUJFUl9SRSArICcoJSk/JyxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuICAgICAgLyogRXhjZWwgZm9ybXVsYSBjb21tZW50cyBhcmUgZG9uZSBieSBwdXR0aW5nIHRoZSBjb21tZW50IGluIGEgZnVuY3Rpb24gY2FsbCB0byBOKCkgKi9cbiAgICAgIGhsanMuQ09NTUVOVCgvXFxiTlxcKC8sIC9cXCkvLFxuICAgICAgICB7XG4gICAgICAgICAgZXhjbHVkZUJlZ2luOiB0cnVlLFxuICAgICAgICAgIGV4Y2x1ZGVFbmQ6IHRydWUsXG4gICAgICAgICAgaWxsZWdhbDogL1xcbi9cbiAgICAgICAgfSlcbiAgICBdXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhjZWw7XG4iXSwic291cmNlUm9vdCI6IiJ9