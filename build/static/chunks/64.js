(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[64],{

/***/ "./node_modules/highlight.js/lib/languages/gauss.js":
/*!**********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/gauss.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: GAUSS
Author: Matt Evans <matt@aptech.com>
Description: GAUSS Mathematical and Statistical language
Website: https://www.aptech.com
Category: scientific
*/
function gauss(hljs) {
  const KEYWORDS = {
    keyword: 'bool break call callexe checkinterrupt clear clearg closeall cls comlog compile ' +
              'continue create debug declare delete disable dlibrary dllcall do dos ed edit else ' +
              'elseif enable end endfor endif endp endo errorlog errorlogat expr external fn ' +
              'for format goto gosub graph if keyword let lib library line load loadarray loadexe ' +
              'loadf loadk loadm loadp loads loadx local locate loopnextindex lprint lpwidth lshow ' +
              'matrix msym ndpclex new open output outwidth plot plotsym pop prcsn print ' +
              'printdos proc push retp return rndcon rndmod rndmult rndseed run save saveall screen ' +
              'scroll setarray show sparse stop string struct system trace trap threadfor ' +
              'threadendfor threadbegin threadjoin threadstat threadend until use while winprint ' +
              'ne ge le gt lt and xor or not eq eqv',
    built_in: 'abs acf aconcat aeye amax amean AmericanBinomCall AmericanBinomCall_Greeks AmericanBinomCall_ImpVol ' +
              'AmericanBinomPut AmericanBinomPut_Greeks AmericanBinomPut_ImpVol AmericanBSCall AmericanBSCall_Greeks ' +
              'AmericanBSCall_ImpVol AmericanBSPut AmericanBSPut_Greeks AmericanBSPut_ImpVol amin amult annotationGetDefaults ' +
              'annotationSetBkd annotationSetFont annotationSetLineColor annotationSetLineStyle annotationSetLineThickness ' +
              'annualTradingDays arccos arcsin areshape arrayalloc arrayindex arrayinit arraytomat asciiload asclabel astd ' +
              'astds asum atan atan2 atranspose axmargin balance band bandchol bandcholsol bandltsol bandrv bandsolpd bar ' +
              'base10 begwind besselj bessely beta box boxcox cdfBeta cdfBetaInv cdfBinomial cdfBinomialInv cdfBvn cdfBvn2 ' +
              'cdfBvn2e cdfCauchy cdfCauchyInv cdfChic cdfChii cdfChinc cdfChincInv cdfExp cdfExpInv cdfFc cdfFnc cdfFncInv ' +
              'cdfGam cdfGenPareto cdfHyperGeo cdfLaplace cdfLaplaceInv cdfLogistic cdfLogisticInv cdfmControlCreate cdfMvn ' +
              'cdfMvn2e cdfMvnce cdfMvne cdfMvt2e cdfMvtce cdfMvte cdfN cdfN2 cdfNc cdfNegBinomial cdfNegBinomialInv cdfNi ' +
              'cdfPoisson cdfPoissonInv cdfRayleigh cdfRayleighInv cdfTc cdfTci cdfTnc cdfTvn cdfWeibull cdfWeibullInv cdir ' +
              'ceil ChangeDir chdir chiBarSquare chol choldn cholsol cholup chrs close code cols colsf combinate combinated ' +
              'complex con cond conj cons ConScore contour conv convertsatostr convertstrtosa corrm corrms corrvc corrx corrxs ' +
              'cos cosh counts countwts crossprd crout croutp csrcol csrlin csvReadM csvReadSA cumprodc cumsumc curve cvtos ' +
              'datacreate datacreatecomplex datalist dataload dataloop dataopen datasave date datestr datestring datestrymd ' +
              'dayinyr dayofweek dbAddDatabase dbClose dbCommit dbCreateQuery dbExecQuery dbGetConnectOptions dbGetDatabaseName ' +
              'dbGetDriverName dbGetDrivers dbGetHostName dbGetLastErrorNum dbGetLastErrorText dbGetNumericalPrecPolicy ' +
              'dbGetPassword dbGetPort dbGetTableHeaders dbGetTables dbGetUserName dbHasFeature dbIsDriverAvailable dbIsOpen ' +
              'dbIsOpenError dbOpen dbQueryBindValue dbQueryClear dbQueryCols dbQueryExecPrepared dbQueryFetchAllM dbQueryFetchAllSA ' +
              'dbQueryFetchOneM dbQueryFetchOneSA dbQueryFinish dbQueryGetBoundValue dbQueryGetBoundValues dbQueryGetField ' +
              'dbQueryGetLastErrorNum dbQueryGetLastErrorText dbQueryGetLastInsertID dbQueryGetLastQuery dbQueryGetPosition ' +
              'dbQueryIsActive dbQueryIsForwardOnly dbQueryIsNull dbQueryIsSelect dbQueryIsValid dbQueryPrepare dbQueryRows ' +
              'dbQuerySeek dbQuerySeekFirst dbQuerySeekLast dbQuerySeekNext dbQuerySeekPrevious dbQuerySetForwardOnly ' +
              'dbRemoveDatabase dbRollback dbSetConnectOptions dbSetDatabaseName dbSetHostName dbSetNumericalPrecPolicy ' +
              'dbSetPort dbSetUserName dbTransaction DeleteFile delif delrows denseToSp denseToSpRE denToZero design det detl ' +
              'dfft dffti diag diagrv digamma doswin DOSWinCloseall DOSWinOpen dotfeq dotfeqmt dotfge dotfgemt dotfgt dotfgtmt ' +
              'dotfle dotflemt dotflt dotfltmt dotfne dotfnemt draw drop dsCreate dstat dstatmt dstatmtControlCreate dtdate dtday ' +
              'dttime dttodtv dttostr dttoutc dtvnormal dtvtodt dtvtoutc dummy dummybr dummydn eig eigh eighv eigv elapsedTradingDays ' +
              'endwind envget eof eqSolve eqSolvemt eqSolvemtControlCreate eqSolvemtOutCreate eqSolveset erf erfc erfccplx erfcplx error ' +
              'etdays ethsec etstr EuropeanBinomCall EuropeanBinomCall_Greeks EuropeanBinomCall_ImpVol EuropeanBinomPut ' +
              'EuropeanBinomPut_Greeks EuropeanBinomPut_ImpVol EuropeanBSCall EuropeanBSCall_Greeks EuropeanBSCall_ImpVol ' +
              'EuropeanBSPut EuropeanBSPut_Greeks EuropeanBSPut_ImpVol exctsmpl exec execbg exp extern eye fcheckerr fclearerr feq ' +
              'feqmt fflush fft ffti fftm fftmi fftn fge fgemt fgets fgetsa fgetsat fgetst fgt fgtmt fileinfo filesa fle flemt ' +
              'floor flt fltmt fmod fne fnemt fonts fopen formatcv formatnv fputs fputst fseek fstrerror ftell ftocv ftos ftostrC ' +
              'gamma gammacplx gammaii gausset gdaAppend gdaCreate gdaDStat gdaDStatMat gdaGetIndex gdaGetName gdaGetNames gdaGetOrders ' +
              'gdaGetType gdaGetTypes gdaGetVarInfo gdaIsCplx gdaLoad gdaPack gdaRead gdaReadByIndex gdaReadSome gdaReadSparse ' +
              'gdaReadStruct gdaReportVarInfo gdaSave gdaUpdate gdaUpdateAndPack gdaVars gdaWrite gdaWrite32 gdaWriteSome getarray ' +
              'getdims getf getGAUSShome getmatrix getmatrix4D getname getnamef getNextTradingDay getNextWeekDay getnr getorders ' +
              'getpath getPreviousTradingDay getPreviousWeekDay getRow getscalar3D getscalar4D getTrRow getwind glm gradcplx gradMT ' +
              'gradMTm gradMTT gradMTTm gradp graphprt graphset hasimag header headermt hess hessMT hessMTg hessMTgw hessMTm ' +
              'hessMTmw hessMTT hessMTTg hessMTTgw hessMTTm hessMTw hessp hist histf histp hsec imag indcv indexcat indices indices2 ' +
              'indicesf indicesfn indnv indsav integrate1d integrateControlCreate intgrat2 intgrat3 inthp1 inthp2 inthp3 inthp4 ' +
              'inthpControlCreate intquad1 intquad2 intquad3 intrleav intrleavsa intrsect intsimp inv invpd invswp iscplx iscplxf ' +
              'isden isinfnanmiss ismiss key keyav keyw lag lag1 lagn lapEighb lapEighi lapEighvb lapEighvi lapgEig lapgEigh lapgEighv ' +
              'lapgEigv lapgSchur lapgSvdcst lapgSvds lapgSvdst lapSvdcusv lapSvds lapSvdusv ldlp ldlsol linSolve listwise ln lncdfbvn ' +
              'lncdfbvn2 lncdfmvn lncdfn lncdfn2 lncdfnc lnfact lngammacplx lnpdfmvn lnpdfmvt lnpdfn lnpdft loadd loadstruct loadwind ' +
              'loess loessmt loessmtControlCreate log loglog logx logy lower lowmat lowmat1 ltrisol lu lusol machEpsilon make makevars ' +
              'makewind margin matalloc matinit mattoarray maxbytes maxc maxindc maxv maxvec mbesselei mbesselei0 mbesselei1 mbesseli ' +
              'mbesseli0 mbesseli1 meanc median mergeby mergevar minc minindc minv miss missex missrv moment momentd movingave ' +
              'movingaveExpwgt movingaveWgt nextindex nextn nextnevn nextwind ntos null null1 numCombinations ols olsmt olsmtControlCreate ' +
              'olsqr olsqr2 olsqrmt ones optn optnevn orth outtyp pacf packedToSp packr parse pause pdfCauchy pdfChi pdfExp pdfGenPareto ' +
              'pdfHyperGeo pdfLaplace pdfLogistic pdfn pdfPoisson pdfRayleigh pdfWeibull pi pinv pinvmt plotAddArrow plotAddBar plotAddBox ' +
              'plotAddHist plotAddHistF plotAddHistP plotAddPolar plotAddScatter plotAddShape plotAddTextbox plotAddTS plotAddXY plotArea ' +
              'plotBar plotBox plotClearLayout plotContour plotCustomLayout plotGetDefaults plotHist plotHistF plotHistP plotLayout ' +
              'plotLogLog plotLogX plotLogY plotOpenWindow plotPolar plotSave plotScatter plotSetAxesPen plotSetBar plotSetBarFill ' +
              'plotSetBarStacked plotSetBkdColor plotSetFill plotSetGrid plotSetLegend plotSetLineColor plotSetLineStyle plotSetLineSymbol ' +
              'plotSetLineThickness plotSetNewWindow plotSetTitle plotSetWhichYAxis plotSetXAxisShow plotSetXLabel plotSetXRange ' +
              'plotSetXTicInterval plotSetXTicLabel plotSetYAxisShow plotSetYLabel plotSetYRange plotSetZAxisShow plotSetZLabel ' +
              'plotSurface plotTS plotXY polar polychar polyeval polygamma polyint polymake polymat polymroot polymult polyroot ' +
              'pqgwin previousindex princomp printfm printfmt prodc psi putarray putf putvals pvCreate pvGetIndex pvGetParNames ' +
              'pvGetParVector pvLength pvList pvPack pvPacki pvPackm pvPackmi pvPacks pvPacksi pvPacksm pvPacksmi pvPutParVector ' +
              'pvTest pvUnpack QNewton QNewtonmt QNewtonmtControlCreate QNewtonmtOutCreate QNewtonSet QProg QProgmt QProgmtInCreate ' +
              'qqr qqre qqrep qr qre qrep qrsol qrtsol qtyr qtyre qtyrep quantile quantiled qyr qyre qyrep qz rank rankindx readr ' +
              'real reclassify reclassifyCuts recode recserar recsercp recserrc rerun rescale reshape rets rev rfft rffti rfftip rfftn ' +
              'rfftnp rfftp rndBernoulli rndBeta rndBinomial rndCauchy rndChiSquare rndCon rndCreateState rndExp rndGamma rndGeo rndGumbel ' +
              'rndHyperGeo rndi rndKMbeta rndKMgam rndKMi rndKMn rndKMnb rndKMp rndKMu rndKMvm rndLaplace rndLCbeta rndLCgam rndLCi rndLCn ' +
              'rndLCnb rndLCp rndLCu rndLCvm rndLogNorm rndMTu rndMVn rndMVt rndn rndnb rndNegBinomial rndp rndPoisson rndRayleigh ' +
              'rndStateSkip rndu rndvm rndWeibull rndWishart rotater round rows rowsf rref sampleData satostrC saved saveStruct savewind ' +
              'scale scale3d scalerr scalinfnanmiss scalmiss schtoc schur searchsourcepath seekr select selif seqa seqm setdif setdifsa ' +
              'setvars setvwrmode setwind shell shiftr sin singleindex sinh sleep solpd sortc sortcc sortd sorthc sorthcc sortind ' +
              'sortindc sortmc sortr sortrc spBiconjGradSol spChol spConjGradSol spCreate spDenseSubmat spDiagRvMat spEigv spEye spLDL ' +
              'spline spLU spNumNZE spOnes spreadSheetReadM spreadSheetReadSA spreadSheetWrite spScale spSubmat spToDense spTrTDense ' +
              'spTScalar spZeros sqpSolve sqpSolveMT sqpSolveMTControlCreate sqpSolveMTlagrangeCreate sqpSolveMToutCreate sqpSolveSet ' +
              'sqrt statements stdc stdsc stocv stof strcombine strindx strlen strput strrindx strsect strsplit strsplitPad strtodt ' +
              'strtof strtofcplx strtriml strtrimr strtrunc strtruncl strtruncpad strtruncr submat subscat substute subvec sumc sumr ' +
              'surface svd svd1 svd2 svdcusv svds svdusv sysstate tab tan tanh tempname ' +
              'time timedt timestr timeutc title tkf2eps tkf2ps tocart todaydt toeplitz token topolar trapchk ' +
              'trigamma trimr trunc type typecv typef union unionsa uniqindx uniqindxsa unique uniquesa upmat upmat1 upper utctodt ' +
              'utctodtv utrisol vals varCovMS varCovXS varget vargetl varmall varmares varput varputl vartypef vcm vcms vcx vcxs ' +
              'vec vech vecr vector vget view viewxyz vlist vnamecv volume vput vread vtypecv wait waitc walkindex where window ' +
              'writer xlabel xlsGetSheetCount xlsGetSheetSize xlsGetSheetTypes xlsMakeRange xlsReadM xlsReadSA xlsWrite xlsWriteM ' +
              'xlsWriteSA xpnd xtics xy xyz ylabel ytics zeros zeta zlabel ztics cdfEmpirical dot h5create h5open h5read h5readAttribute ' +
              'h5write h5writeAttribute ldl plotAddErrorBar plotAddSurface plotCDFEmpirical plotSetColormap plotSetContourLabels ' +
              'plotSetLegendFont plotSetTextInterpreter plotSetXTicCount plotSetYTicCount plotSetZLevels powerm strjoin sylvester ' +
              'strtrim',
    literal: 'DB_AFTER_LAST_ROW DB_ALL_TABLES DB_BATCH_OPERATIONS DB_BEFORE_FIRST_ROW DB_BLOB DB_EVENT_NOTIFICATIONS ' +
             'DB_FINISH_QUERY DB_HIGH_PRECISION DB_LAST_INSERT_ID DB_LOW_PRECISION_DOUBLE DB_LOW_PRECISION_INT32 ' +
             'DB_LOW_PRECISION_INT64 DB_LOW_PRECISION_NUMBERS DB_MULTIPLE_RESULT_SETS DB_NAMED_PLACEHOLDERS ' +
             'DB_POSITIONAL_PLACEHOLDERS DB_PREPARED_QUERIES DB_QUERY_SIZE DB_SIMPLE_LOCKING DB_SYSTEM_TABLES DB_TABLES ' +
             'DB_TRANSACTIONS DB_UNICODE DB_VIEWS __STDIN __STDOUT __STDERR __FILE_DIR'
  };

  const AT_COMMENT_MODE = hljs.COMMENT('@', '@');

  const PREPROCESSOR =
  {
    className: 'meta',
    begin: '#',
    end: '$',
    keywords: {
      'meta-keyword': 'define definecs|10 undef ifdef ifndef iflight ifdllcall ifmac ifos2win ifunix else endif lineson linesoff srcfile srcline'
    },
    contains: [
      {
        begin: /\\\n/,
        relevance: 0
      },
      {
        beginKeywords: 'include',
        end: '$',
        keywords: {
          'meta-keyword': 'include'
        },
        contains: [
          {
            className: 'meta-string',
            begin: '"',
            end: '"',
            illegal: '\\n'
          }
        ]
      },
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      AT_COMMENT_MODE
    ]
  };

  const STRUCT_TYPE =
  {
    begin: /\bstruct\s+/,
    end: /\s/,
    keywords: "struct",
    contains: [
      {
        className: "type",
        begin: hljs.UNDERSCORE_IDENT_RE,
        relevance: 0
      }
    ]
  };

  // only for definitions
  const PARSE_PARAMS = [
    {
      className: 'params',
      begin: /\(/,
      end: /\)/,
      excludeBegin: true,
      excludeEnd: true,
      endsWithParent: true,
      relevance: 0,
      contains: [
        { // dots
          className: 'literal',
          begin: /\.\.\./
        },
        hljs.C_NUMBER_MODE,
        hljs.C_BLOCK_COMMENT_MODE,
        AT_COMMENT_MODE,
        STRUCT_TYPE
      ]
    }
  ];

  const FUNCTION_DEF =
  {
    className: "title",
    begin: hljs.UNDERSCORE_IDENT_RE,
    relevance: 0
  };

  const DEFINITION = function(beginKeywords, end, inherits) {
    const mode = hljs.inherit(
      {
        className: "function",
        beginKeywords: beginKeywords,
        end: end,
        excludeEnd: true,
        contains: [].concat(PARSE_PARAMS)
      },
      inherits || {}
    );
    mode.contains.push(FUNCTION_DEF);
    mode.contains.push(hljs.C_NUMBER_MODE);
    mode.contains.push(hljs.C_BLOCK_COMMENT_MODE);
    mode.contains.push(AT_COMMENT_MODE);
    return mode;
  };

  const BUILT_IN_REF =
  { // these are explicitly named internal function calls
    className: 'built_in',
    begin: '\\b(' + KEYWORDS.built_in.split(' ').join('|') + ')\\b'
  };

  const STRING_REF =
  {
    className: 'string',
    begin: '"',
    end: '"',
    contains: [hljs.BACKSLASH_ESCAPE],
    relevance: 0
  };

  const FUNCTION_REF =
  {
    // className: "fn_ref",
    begin: hljs.UNDERSCORE_IDENT_RE + '\\s*\\(',
    returnBegin: true,
    keywords: KEYWORDS,
    relevance: 0,
    contains: [
      {
        beginKeywords: KEYWORDS.keyword
      },
      BUILT_IN_REF,
      { // ambiguously named function calls get a relevance of 0
        className: 'built_in',
        begin: hljs.UNDERSCORE_IDENT_RE,
        relevance: 0
      }
    ]
  };

  const FUNCTION_REF_PARAMS =
  {
    // className: "fn_ref_params",
    begin: /\(/,
    end: /\)/,
    relevance: 0,
    keywords: {
      built_in: KEYWORDS.built_in,
      literal: KEYWORDS.literal
    },
    contains: [
      hljs.C_NUMBER_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      AT_COMMENT_MODE,
      BUILT_IN_REF,
      FUNCTION_REF,
      STRING_REF,
      'self'
    ]
  };

  FUNCTION_REF.contains.push(FUNCTION_REF_PARAMS);

  return {
    name: 'GAUSS',
    aliases: ['gss'],
    case_insensitive: true, // language is case-insensitive
    keywords: KEYWORDS,
    illegal: /(\{[%#]|[%#]\}| <- )/,
    contains: [
      hljs.C_NUMBER_MODE,
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      AT_COMMENT_MODE,
      STRING_REF,
      PREPROCESSOR,
      {
        className: 'keyword',
        begin: /\bexternal (matrix|string|array|sparse matrix|struct|proc|keyword|fn)/
      },
      DEFINITION('proc keyword', ';'),
      DEFINITION('fn', '='),
      {
        beginKeywords: 'for threadfor',
        end: /;/,
        // end: /\(/,
        relevance: 0,
        contains: [
          hljs.C_BLOCK_COMMENT_MODE,
          AT_COMMENT_MODE,
          FUNCTION_REF_PARAMS
        ]
      },
      { // custom method guard
        // excludes method names from keyword processing
        variants: [
          {
            begin: hljs.UNDERSCORE_IDENT_RE + '\\.' + hljs.UNDERSCORE_IDENT_RE
          },
          {
            begin: hljs.UNDERSCORE_IDENT_RE + '\\s*='
          }
        ],
        relevance: 0
      },
      FUNCTION_REF,
      STRUCT_TYPE
    ]
  };
}

module.exports = gauss;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2dhdXNzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFdBQVc7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvNjQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuTGFuZ3VhZ2U6IEdBVVNTXG5BdXRob3I6IE1hdHQgRXZhbnMgPG1hdHRAYXB0ZWNoLmNvbT5cbkRlc2NyaXB0aW9uOiBHQVVTUyBNYXRoZW1hdGljYWwgYW5kIFN0YXRpc3RpY2FsIGxhbmd1YWdlXG5XZWJzaXRlOiBodHRwczovL3d3dy5hcHRlY2guY29tXG5DYXRlZ29yeTogc2NpZW50aWZpY1xuKi9cbmZ1bmN0aW9uIGdhdXNzKGhsanMpIHtcbiAgY29uc3QgS0VZV09SRFMgPSB7XG4gICAga2V5d29yZDogJ2Jvb2wgYnJlYWsgY2FsbCBjYWxsZXhlIGNoZWNraW50ZXJydXB0IGNsZWFyIGNsZWFyZyBjbG9zZWFsbCBjbHMgY29tbG9nIGNvbXBpbGUgJyArXG4gICAgICAgICAgICAgICdjb250aW51ZSBjcmVhdGUgZGVidWcgZGVjbGFyZSBkZWxldGUgZGlzYWJsZSBkbGlicmFyeSBkbGxjYWxsIGRvIGRvcyBlZCBlZGl0IGVsc2UgJyArXG4gICAgICAgICAgICAgICdlbHNlaWYgZW5hYmxlIGVuZCBlbmRmb3IgZW5kaWYgZW5kcCBlbmRvIGVycm9ybG9nIGVycm9ybG9nYXQgZXhwciBleHRlcm5hbCBmbiAnICtcbiAgICAgICAgICAgICAgJ2ZvciBmb3JtYXQgZ290byBnb3N1YiBncmFwaCBpZiBrZXl3b3JkIGxldCBsaWIgbGlicmFyeSBsaW5lIGxvYWQgbG9hZGFycmF5IGxvYWRleGUgJyArXG4gICAgICAgICAgICAgICdsb2FkZiBsb2FkayBsb2FkbSBsb2FkcCBsb2FkcyBsb2FkeCBsb2NhbCBsb2NhdGUgbG9vcG5leHRpbmRleCBscHJpbnQgbHB3aWR0aCBsc2hvdyAnICtcbiAgICAgICAgICAgICAgJ21hdHJpeCBtc3ltIG5kcGNsZXggbmV3IG9wZW4gb3V0cHV0IG91dHdpZHRoIHBsb3QgcGxvdHN5bSBwb3AgcHJjc24gcHJpbnQgJyArXG4gICAgICAgICAgICAgICdwcmludGRvcyBwcm9jIHB1c2ggcmV0cCByZXR1cm4gcm5kY29uIHJuZG1vZCBybmRtdWx0IHJuZHNlZWQgcnVuIHNhdmUgc2F2ZWFsbCBzY3JlZW4gJyArXG4gICAgICAgICAgICAgICdzY3JvbGwgc2V0YXJyYXkgc2hvdyBzcGFyc2Ugc3RvcCBzdHJpbmcgc3RydWN0IHN5c3RlbSB0cmFjZSB0cmFwIHRocmVhZGZvciAnICtcbiAgICAgICAgICAgICAgJ3RocmVhZGVuZGZvciB0aHJlYWRiZWdpbiB0aHJlYWRqb2luIHRocmVhZHN0YXQgdGhyZWFkZW5kIHVudGlsIHVzZSB3aGlsZSB3aW5wcmludCAnICtcbiAgICAgICAgICAgICAgJ25lIGdlIGxlIGd0IGx0IGFuZCB4b3Igb3Igbm90IGVxIGVxdicsXG4gICAgYnVpbHRfaW46ICdhYnMgYWNmIGFjb25jYXQgYWV5ZSBhbWF4IGFtZWFuIEFtZXJpY2FuQmlub21DYWxsIEFtZXJpY2FuQmlub21DYWxsX0dyZWVrcyBBbWVyaWNhbkJpbm9tQ2FsbF9JbXBWb2wgJyArXG4gICAgICAgICAgICAgICdBbWVyaWNhbkJpbm9tUHV0IEFtZXJpY2FuQmlub21QdXRfR3JlZWtzIEFtZXJpY2FuQmlub21QdXRfSW1wVm9sIEFtZXJpY2FuQlNDYWxsIEFtZXJpY2FuQlNDYWxsX0dyZWVrcyAnICtcbiAgICAgICAgICAgICAgJ0FtZXJpY2FuQlNDYWxsX0ltcFZvbCBBbWVyaWNhbkJTUHV0IEFtZXJpY2FuQlNQdXRfR3JlZWtzIEFtZXJpY2FuQlNQdXRfSW1wVm9sIGFtaW4gYW11bHQgYW5ub3RhdGlvbkdldERlZmF1bHRzICcgK1xuICAgICAgICAgICAgICAnYW5ub3RhdGlvblNldEJrZCBhbm5vdGF0aW9uU2V0Rm9udCBhbm5vdGF0aW9uU2V0TGluZUNvbG9yIGFubm90YXRpb25TZXRMaW5lU3R5bGUgYW5ub3RhdGlvblNldExpbmVUaGlja25lc3MgJyArXG4gICAgICAgICAgICAgICdhbm51YWxUcmFkaW5nRGF5cyBhcmNjb3MgYXJjc2luIGFyZXNoYXBlIGFycmF5YWxsb2MgYXJyYXlpbmRleCBhcnJheWluaXQgYXJyYXl0b21hdCBhc2NpaWxvYWQgYXNjbGFiZWwgYXN0ZCAnICtcbiAgICAgICAgICAgICAgJ2FzdGRzIGFzdW0gYXRhbiBhdGFuMiBhdHJhbnNwb3NlIGF4bWFyZ2luIGJhbGFuY2UgYmFuZCBiYW5kY2hvbCBiYW5kY2hvbHNvbCBiYW5kbHRzb2wgYmFuZHJ2IGJhbmRzb2xwZCBiYXIgJyArXG4gICAgICAgICAgICAgICdiYXNlMTAgYmVnd2luZCBiZXNzZWxqIGJlc3NlbHkgYmV0YSBib3ggYm94Y294IGNkZkJldGEgY2RmQmV0YUludiBjZGZCaW5vbWlhbCBjZGZCaW5vbWlhbEludiBjZGZCdm4gY2RmQnZuMiAnICtcbiAgICAgICAgICAgICAgJ2NkZkJ2bjJlIGNkZkNhdWNoeSBjZGZDYXVjaHlJbnYgY2RmQ2hpYyBjZGZDaGlpIGNkZkNoaW5jIGNkZkNoaW5jSW52IGNkZkV4cCBjZGZFeHBJbnYgY2RmRmMgY2RmRm5jIGNkZkZuY0ludiAnICtcbiAgICAgICAgICAgICAgJ2NkZkdhbSBjZGZHZW5QYXJldG8gY2RmSHlwZXJHZW8gY2RmTGFwbGFjZSBjZGZMYXBsYWNlSW52IGNkZkxvZ2lzdGljIGNkZkxvZ2lzdGljSW52IGNkZm1Db250cm9sQ3JlYXRlIGNkZk12biAnICtcbiAgICAgICAgICAgICAgJ2NkZk12bjJlIGNkZk12bmNlIGNkZk12bmUgY2RmTXZ0MmUgY2RmTXZ0Y2UgY2RmTXZ0ZSBjZGZOIGNkZk4yIGNkZk5jIGNkZk5lZ0Jpbm9taWFsIGNkZk5lZ0Jpbm9taWFsSW52IGNkZk5pICcgK1xuICAgICAgICAgICAgICAnY2RmUG9pc3NvbiBjZGZQb2lzc29uSW52IGNkZlJheWxlaWdoIGNkZlJheWxlaWdoSW52IGNkZlRjIGNkZlRjaSBjZGZUbmMgY2RmVHZuIGNkZldlaWJ1bGwgY2RmV2VpYnVsbEludiBjZGlyICcgK1xuICAgICAgICAgICAgICAnY2VpbCBDaGFuZ2VEaXIgY2hkaXIgY2hpQmFyU3F1YXJlIGNob2wgY2hvbGRuIGNob2xzb2wgY2hvbHVwIGNocnMgY2xvc2UgY29kZSBjb2xzIGNvbHNmIGNvbWJpbmF0ZSBjb21iaW5hdGVkICcgK1xuICAgICAgICAgICAgICAnY29tcGxleCBjb24gY29uZCBjb25qIGNvbnMgQ29uU2NvcmUgY29udG91ciBjb252IGNvbnZlcnRzYXRvc3RyIGNvbnZlcnRzdHJ0b3NhIGNvcnJtIGNvcnJtcyBjb3JydmMgY29ycnggY29ycnhzICcgK1xuICAgICAgICAgICAgICAnY29zIGNvc2ggY291bnRzIGNvdW50d3RzIGNyb3NzcHJkIGNyb3V0IGNyb3V0cCBjc3Jjb2wgY3NybGluIGNzdlJlYWRNIGNzdlJlYWRTQSBjdW1wcm9kYyBjdW1zdW1jIGN1cnZlIGN2dG9zICcgK1xuICAgICAgICAgICAgICAnZGF0YWNyZWF0ZSBkYXRhY3JlYXRlY29tcGxleCBkYXRhbGlzdCBkYXRhbG9hZCBkYXRhbG9vcCBkYXRhb3BlbiBkYXRhc2F2ZSBkYXRlIGRhdGVzdHIgZGF0ZXN0cmluZyBkYXRlc3RyeW1kICcgK1xuICAgICAgICAgICAgICAnZGF5aW55ciBkYXlvZndlZWsgZGJBZGREYXRhYmFzZSBkYkNsb3NlIGRiQ29tbWl0IGRiQ3JlYXRlUXVlcnkgZGJFeGVjUXVlcnkgZGJHZXRDb25uZWN0T3B0aW9ucyBkYkdldERhdGFiYXNlTmFtZSAnICtcbiAgICAgICAgICAgICAgJ2RiR2V0RHJpdmVyTmFtZSBkYkdldERyaXZlcnMgZGJHZXRIb3N0TmFtZSBkYkdldExhc3RFcnJvck51bSBkYkdldExhc3RFcnJvclRleHQgZGJHZXROdW1lcmljYWxQcmVjUG9saWN5ICcgK1xuICAgICAgICAgICAgICAnZGJHZXRQYXNzd29yZCBkYkdldFBvcnQgZGJHZXRUYWJsZUhlYWRlcnMgZGJHZXRUYWJsZXMgZGJHZXRVc2VyTmFtZSBkYkhhc0ZlYXR1cmUgZGJJc0RyaXZlckF2YWlsYWJsZSBkYklzT3BlbiAnICtcbiAgICAgICAgICAgICAgJ2RiSXNPcGVuRXJyb3IgZGJPcGVuIGRiUXVlcnlCaW5kVmFsdWUgZGJRdWVyeUNsZWFyIGRiUXVlcnlDb2xzIGRiUXVlcnlFeGVjUHJlcGFyZWQgZGJRdWVyeUZldGNoQWxsTSBkYlF1ZXJ5RmV0Y2hBbGxTQSAnICtcbiAgICAgICAgICAgICAgJ2RiUXVlcnlGZXRjaE9uZU0gZGJRdWVyeUZldGNoT25lU0EgZGJRdWVyeUZpbmlzaCBkYlF1ZXJ5R2V0Qm91bmRWYWx1ZSBkYlF1ZXJ5R2V0Qm91bmRWYWx1ZXMgZGJRdWVyeUdldEZpZWxkICcgK1xuICAgICAgICAgICAgICAnZGJRdWVyeUdldExhc3RFcnJvck51bSBkYlF1ZXJ5R2V0TGFzdEVycm9yVGV4dCBkYlF1ZXJ5R2V0TGFzdEluc2VydElEIGRiUXVlcnlHZXRMYXN0UXVlcnkgZGJRdWVyeUdldFBvc2l0aW9uICcgK1xuICAgICAgICAgICAgICAnZGJRdWVyeUlzQWN0aXZlIGRiUXVlcnlJc0ZvcndhcmRPbmx5IGRiUXVlcnlJc051bGwgZGJRdWVyeUlzU2VsZWN0IGRiUXVlcnlJc1ZhbGlkIGRiUXVlcnlQcmVwYXJlIGRiUXVlcnlSb3dzICcgK1xuICAgICAgICAgICAgICAnZGJRdWVyeVNlZWsgZGJRdWVyeVNlZWtGaXJzdCBkYlF1ZXJ5U2Vla0xhc3QgZGJRdWVyeVNlZWtOZXh0IGRiUXVlcnlTZWVrUHJldmlvdXMgZGJRdWVyeVNldEZvcndhcmRPbmx5ICcgK1xuICAgICAgICAgICAgICAnZGJSZW1vdmVEYXRhYmFzZSBkYlJvbGxiYWNrIGRiU2V0Q29ubmVjdE9wdGlvbnMgZGJTZXREYXRhYmFzZU5hbWUgZGJTZXRIb3N0TmFtZSBkYlNldE51bWVyaWNhbFByZWNQb2xpY3kgJyArXG4gICAgICAgICAgICAgICdkYlNldFBvcnQgZGJTZXRVc2VyTmFtZSBkYlRyYW5zYWN0aW9uIERlbGV0ZUZpbGUgZGVsaWYgZGVscm93cyBkZW5zZVRvU3AgZGVuc2VUb1NwUkUgZGVuVG9aZXJvIGRlc2lnbiBkZXQgZGV0bCAnICtcbiAgICAgICAgICAgICAgJ2RmZnQgZGZmdGkgZGlhZyBkaWFncnYgZGlnYW1tYSBkb3N3aW4gRE9TV2luQ2xvc2VhbGwgRE9TV2luT3BlbiBkb3RmZXEgZG90ZmVxbXQgZG90ZmdlIGRvdGZnZW10IGRvdGZndCBkb3RmZ3RtdCAnICtcbiAgICAgICAgICAgICAgJ2RvdGZsZSBkb3RmbGVtdCBkb3RmbHQgZG90Zmx0bXQgZG90Zm5lIGRvdGZuZW10IGRyYXcgZHJvcCBkc0NyZWF0ZSBkc3RhdCBkc3RhdG10IGRzdGF0bXRDb250cm9sQ3JlYXRlIGR0ZGF0ZSBkdGRheSAnICtcbiAgICAgICAgICAgICAgJ2R0dGltZSBkdHRvZHR2IGR0dG9zdHIgZHR0b3V0YyBkdHZub3JtYWwgZHR2dG9kdCBkdHZ0b3V0YyBkdW1teSBkdW1teWJyIGR1bW15ZG4gZWlnIGVpZ2ggZWlnaHYgZWlndiBlbGFwc2VkVHJhZGluZ0RheXMgJyArXG4gICAgICAgICAgICAgICdlbmR3aW5kIGVudmdldCBlb2YgZXFTb2x2ZSBlcVNvbHZlbXQgZXFTb2x2ZW10Q29udHJvbENyZWF0ZSBlcVNvbHZlbXRPdXRDcmVhdGUgZXFTb2x2ZXNldCBlcmYgZXJmYyBlcmZjY3BseCBlcmZjcGx4IGVycm9yICcgK1xuICAgICAgICAgICAgICAnZXRkYXlzIGV0aHNlYyBldHN0ciBFdXJvcGVhbkJpbm9tQ2FsbCBFdXJvcGVhbkJpbm9tQ2FsbF9HcmVla3MgRXVyb3BlYW5CaW5vbUNhbGxfSW1wVm9sIEV1cm9wZWFuQmlub21QdXQgJyArXG4gICAgICAgICAgICAgICdFdXJvcGVhbkJpbm9tUHV0X0dyZWVrcyBFdXJvcGVhbkJpbm9tUHV0X0ltcFZvbCBFdXJvcGVhbkJTQ2FsbCBFdXJvcGVhbkJTQ2FsbF9HcmVla3MgRXVyb3BlYW5CU0NhbGxfSW1wVm9sICcgK1xuICAgICAgICAgICAgICAnRXVyb3BlYW5CU1B1dCBFdXJvcGVhbkJTUHV0X0dyZWVrcyBFdXJvcGVhbkJTUHV0X0ltcFZvbCBleGN0c21wbCBleGVjIGV4ZWNiZyBleHAgZXh0ZXJuIGV5ZSBmY2hlY2tlcnIgZmNsZWFyZXJyIGZlcSAnICtcbiAgICAgICAgICAgICAgJ2ZlcW10IGZmbHVzaCBmZnQgZmZ0aSBmZnRtIGZmdG1pIGZmdG4gZmdlIGZnZW10IGZnZXRzIGZnZXRzYSBmZ2V0c2F0IGZnZXRzdCBmZ3QgZmd0bXQgZmlsZWluZm8gZmlsZXNhIGZsZSBmbGVtdCAnICtcbiAgICAgICAgICAgICAgJ2Zsb29yIGZsdCBmbHRtdCBmbW9kIGZuZSBmbmVtdCBmb250cyBmb3BlbiBmb3JtYXRjdiBmb3JtYXRudiBmcHV0cyBmcHV0c3QgZnNlZWsgZnN0cmVycm9yIGZ0ZWxsIGZ0b2N2IGZ0b3MgZnRvc3RyQyAnICtcbiAgICAgICAgICAgICAgJ2dhbW1hIGdhbW1hY3BseCBnYW1tYWlpIGdhdXNzZXQgZ2RhQXBwZW5kIGdkYUNyZWF0ZSBnZGFEU3RhdCBnZGFEU3RhdE1hdCBnZGFHZXRJbmRleCBnZGFHZXROYW1lIGdkYUdldE5hbWVzIGdkYUdldE9yZGVycyAnICtcbiAgICAgICAgICAgICAgJ2dkYUdldFR5cGUgZ2RhR2V0VHlwZXMgZ2RhR2V0VmFySW5mbyBnZGFJc0NwbHggZ2RhTG9hZCBnZGFQYWNrIGdkYVJlYWQgZ2RhUmVhZEJ5SW5kZXggZ2RhUmVhZFNvbWUgZ2RhUmVhZFNwYXJzZSAnICtcbiAgICAgICAgICAgICAgJ2dkYVJlYWRTdHJ1Y3QgZ2RhUmVwb3J0VmFySW5mbyBnZGFTYXZlIGdkYVVwZGF0ZSBnZGFVcGRhdGVBbmRQYWNrIGdkYVZhcnMgZ2RhV3JpdGUgZ2RhV3JpdGUzMiBnZGFXcml0ZVNvbWUgZ2V0YXJyYXkgJyArXG4gICAgICAgICAgICAgICdnZXRkaW1zIGdldGYgZ2V0R0FVU1Nob21lIGdldG1hdHJpeCBnZXRtYXRyaXg0RCBnZXRuYW1lIGdldG5hbWVmIGdldE5leHRUcmFkaW5nRGF5IGdldE5leHRXZWVrRGF5IGdldG5yIGdldG9yZGVycyAnICtcbiAgICAgICAgICAgICAgJ2dldHBhdGggZ2V0UHJldmlvdXNUcmFkaW5nRGF5IGdldFByZXZpb3VzV2Vla0RheSBnZXRSb3cgZ2V0c2NhbGFyM0QgZ2V0c2NhbGFyNEQgZ2V0VHJSb3cgZ2V0d2luZCBnbG0gZ3JhZGNwbHggZ3JhZE1UICcgK1xuICAgICAgICAgICAgICAnZ3JhZE1UbSBncmFkTVRUIGdyYWRNVFRtIGdyYWRwIGdyYXBocHJ0IGdyYXBoc2V0IGhhc2ltYWcgaGVhZGVyIGhlYWRlcm10IGhlc3MgaGVzc01UIGhlc3NNVGcgaGVzc01UZ3cgaGVzc01UbSAnICtcbiAgICAgICAgICAgICAgJ2hlc3NNVG13IGhlc3NNVFQgaGVzc01UVGcgaGVzc01UVGd3IGhlc3NNVFRtIGhlc3NNVHcgaGVzc3AgaGlzdCBoaXN0ZiBoaXN0cCBoc2VjIGltYWcgaW5kY3YgaW5kZXhjYXQgaW5kaWNlcyBpbmRpY2VzMiAnICtcbiAgICAgICAgICAgICAgJ2luZGljZXNmIGluZGljZXNmbiBpbmRudiBpbmRzYXYgaW50ZWdyYXRlMWQgaW50ZWdyYXRlQ29udHJvbENyZWF0ZSBpbnRncmF0MiBpbnRncmF0MyBpbnRocDEgaW50aHAyIGludGhwMyBpbnRocDQgJyArXG4gICAgICAgICAgICAgICdpbnRocENvbnRyb2xDcmVhdGUgaW50cXVhZDEgaW50cXVhZDIgaW50cXVhZDMgaW50cmxlYXYgaW50cmxlYXZzYSBpbnRyc2VjdCBpbnRzaW1wIGludiBpbnZwZCBpbnZzd3AgaXNjcGx4IGlzY3BseGYgJyArXG4gICAgICAgICAgICAgICdpc2RlbiBpc2luZm5hbm1pc3MgaXNtaXNzIGtleSBrZXlhdiBrZXl3IGxhZyBsYWcxIGxhZ24gbGFwRWlnaGIgbGFwRWlnaGkgbGFwRWlnaHZiIGxhcEVpZ2h2aSBsYXBnRWlnIGxhcGdFaWdoIGxhcGdFaWdodiAnICtcbiAgICAgICAgICAgICAgJ2xhcGdFaWd2IGxhcGdTY2h1ciBsYXBnU3ZkY3N0IGxhcGdTdmRzIGxhcGdTdmRzdCBsYXBTdmRjdXN2IGxhcFN2ZHMgbGFwU3ZkdXN2IGxkbHAgbGRsc29sIGxpblNvbHZlIGxpc3R3aXNlIGxuIGxuY2RmYnZuICcgK1xuICAgICAgICAgICAgICAnbG5jZGZidm4yIGxuY2RmbXZuIGxuY2RmbiBsbmNkZm4yIGxuY2RmbmMgbG5mYWN0IGxuZ2FtbWFjcGx4IGxucGRmbXZuIGxucGRmbXZ0IGxucGRmbiBsbnBkZnQgbG9hZGQgbG9hZHN0cnVjdCBsb2Fkd2luZCAnICtcbiAgICAgICAgICAgICAgJ2xvZXNzIGxvZXNzbXQgbG9lc3NtdENvbnRyb2xDcmVhdGUgbG9nIGxvZ2xvZyBsb2d4IGxvZ3kgbG93ZXIgbG93bWF0IGxvd21hdDEgbHRyaXNvbCBsdSBsdXNvbCBtYWNoRXBzaWxvbiBtYWtlIG1ha2V2YXJzICcgK1xuICAgICAgICAgICAgICAnbWFrZXdpbmQgbWFyZ2luIG1hdGFsbG9jIG1hdGluaXQgbWF0dG9hcnJheSBtYXhieXRlcyBtYXhjIG1heGluZGMgbWF4diBtYXh2ZWMgbWJlc3NlbGVpIG1iZXNzZWxlaTAgbWJlc3NlbGVpMSBtYmVzc2VsaSAnICtcbiAgICAgICAgICAgICAgJ21iZXNzZWxpMCBtYmVzc2VsaTEgbWVhbmMgbWVkaWFuIG1lcmdlYnkgbWVyZ2V2YXIgbWluYyBtaW5pbmRjIG1pbnYgbWlzcyBtaXNzZXggbWlzc3J2IG1vbWVudCBtb21lbnRkIG1vdmluZ2F2ZSAnICtcbiAgICAgICAgICAgICAgJ21vdmluZ2F2ZUV4cHdndCBtb3ZpbmdhdmVXZ3QgbmV4dGluZGV4IG5leHRuIG5leHRuZXZuIG5leHR3aW5kIG50b3MgbnVsbCBudWxsMSBudW1Db21iaW5hdGlvbnMgb2xzIG9sc210IG9sc210Q29udHJvbENyZWF0ZSAnICtcbiAgICAgICAgICAgICAgJ29sc3FyIG9sc3FyMiBvbHNxcm10IG9uZXMgb3B0biBvcHRuZXZuIG9ydGggb3V0dHlwIHBhY2YgcGFja2VkVG9TcCBwYWNrciBwYXJzZSBwYXVzZSBwZGZDYXVjaHkgcGRmQ2hpIHBkZkV4cCBwZGZHZW5QYXJldG8gJyArXG4gICAgICAgICAgICAgICdwZGZIeXBlckdlbyBwZGZMYXBsYWNlIHBkZkxvZ2lzdGljIHBkZm4gcGRmUG9pc3NvbiBwZGZSYXlsZWlnaCBwZGZXZWlidWxsIHBpIHBpbnYgcGludm10IHBsb3RBZGRBcnJvdyBwbG90QWRkQmFyIHBsb3RBZGRCb3ggJyArXG4gICAgICAgICAgICAgICdwbG90QWRkSGlzdCBwbG90QWRkSGlzdEYgcGxvdEFkZEhpc3RQIHBsb3RBZGRQb2xhciBwbG90QWRkU2NhdHRlciBwbG90QWRkU2hhcGUgcGxvdEFkZFRleHRib3ggcGxvdEFkZFRTIHBsb3RBZGRYWSBwbG90QXJlYSAnICtcbiAgICAgICAgICAgICAgJ3Bsb3RCYXIgcGxvdEJveCBwbG90Q2xlYXJMYXlvdXQgcGxvdENvbnRvdXIgcGxvdEN1c3RvbUxheW91dCBwbG90R2V0RGVmYXVsdHMgcGxvdEhpc3QgcGxvdEhpc3RGIHBsb3RIaXN0UCBwbG90TGF5b3V0ICcgK1xuICAgICAgICAgICAgICAncGxvdExvZ0xvZyBwbG90TG9nWCBwbG90TG9nWSBwbG90T3BlbldpbmRvdyBwbG90UG9sYXIgcGxvdFNhdmUgcGxvdFNjYXR0ZXIgcGxvdFNldEF4ZXNQZW4gcGxvdFNldEJhciBwbG90U2V0QmFyRmlsbCAnICtcbiAgICAgICAgICAgICAgJ3Bsb3RTZXRCYXJTdGFja2VkIHBsb3RTZXRCa2RDb2xvciBwbG90U2V0RmlsbCBwbG90U2V0R3JpZCBwbG90U2V0TGVnZW5kIHBsb3RTZXRMaW5lQ29sb3IgcGxvdFNldExpbmVTdHlsZSBwbG90U2V0TGluZVN5bWJvbCAnICtcbiAgICAgICAgICAgICAgJ3Bsb3RTZXRMaW5lVGhpY2tuZXNzIHBsb3RTZXROZXdXaW5kb3cgcGxvdFNldFRpdGxlIHBsb3RTZXRXaGljaFlBeGlzIHBsb3RTZXRYQXhpc1Nob3cgcGxvdFNldFhMYWJlbCBwbG90U2V0WFJhbmdlICcgK1xuICAgICAgICAgICAgICAncGxvdFNldFhUaWNJbnRlcnZhbCBwbG90U2V0WFRpY0xhYmVsIHBsb3RTZXRZQXhpc1Nob3cgcGxvdFNldFlMYWJlbCBwbG90U2V0WVJhbmdlIHBsb3RTZXRaQXhpc1Nob3cgcGxvdFNldFpMYWJlbCAnICtcbiAgICAgICAgICAgICAgJ3Bsb3RTdXJmYWNlIHBsb3RUUyBwbG90WFkgcG9sYXIgcG9seWNoYXIgcG9seWV2YWwgcG9seWdhbW1hIHBvbHlpbnQgcG9seW1ha2UgcG9seW1hdCBwb2x5bXJvb3QgcG9seW11bHQgcG9seXJvb3QgJyArXG4gICAgICAgICAgICAgICdwcWd3aW4gcHJldmlvdXNpbmRleCBwcmluY29tcCBwcmludGZtIHByaW50Zm10IHByb2RjIHBzaSBwdXRhcnJheSBwdXRmIHB1dHZhbHMgcHZDcmVhdGUgcHZHZXRJbmRleCBwdkdldFBhck5hbWVzICcgK1xuICAgICAgICAgICAgICAncHZHZXRQYXJWZWN0b3IgcHZMZW5ndGggcHZMaXN0IHB2UGFjayBwdlBhY2tpIHB2UGFja20gcHZQYWNrbWkgcHZQYWNrcyBwdlBhY2tzaSBwdlBhY2tzbSBwdlBhY2tzbWkgcHZQdXRQYXJWZWN0b3IgJyArXG4gICAgICAgICAgICAgICdwdlRlc3QgcHZVbnBhY2sgUU5ld3RvbiBRTmV3dG9ubXQgUU5ld3Rvbm10Q29udHJvbENyZWF0ZSBRTmV3dG9ubXRPdXRDcmVhdGUgUU5ld3RvblNldCBRUHJvZyBRUHJvZ210IFFQcm9nbXRJbkNyZWF0ZSAnICtcbiAgICAgICAgICAgICAgJ3FxciBxcXJlIHFxcmVwIHFyIHFyZSBxcmVwIHFyc29sIHFydHNvbCBxdHlyIHF0eXJlIHF0eXJlcCBxdWFudGlsZSBxdWFudGlsZWQgcXlyIHF5cmUgcXlyZXAgcXogcmFuayByYW5raW5keCByZWFkciAnICtcbiAgICAgICAgICAgICAgJ3JlYWwgcmVjbGFzc2lmeSByZWNsYXNzaWZ5Q3V0cyByZWNvZGUgcmVjc2VyYXIgcmVjc2VyY3AgcmVjc2VycmMgcmVydW4gcmVzY2FsZSByZXNoYXBlIHJldHMgcmV2IHJmZnQgcmZmdGkgcmZmdGlwIHJmZnRuICcgK1xuICAgICAgICAgICAgICAncmZmdG5wIHJmZnRwIHJuZEJlcm5vdWxsaSBybmRCZXRhIHJuZEJpbm9taWFsIHJuZENhdWNoeSBybmRDaGlTcXVhcmUgcm5kQ29uIHJuZENyZWF0ZVN0YXRlIHJuZEV4cCBybmRHYW1tYSBybmRHZW8gcm5kR3VtYmVsICcgK1xuICAgICAgICAgICAgICAncm5kSHlwZXJHZW8gcm5kaSBybmRLTWJldGEgcm5kS01nYW0gcm5kS01pIHJuZEtNbiBybmRLTW5iIHJuZEtNcCBybmRLTXUgcm5kS012bSBybmRMYXBsYWNlIHJuZExDYmV0YSBybmRMQ2dhbSBybmRMQ2kgcm5kTENuICcgK1xuICAgICAgICAgICAgICAncm5kTENuYiBybmRMQ3Agcm5kTEN1IHJuZExDdm0gcm5kTG9nTm9ybSBybmRNVHUgcm5kTVZuIHJuZE1WdCBybmRuIHJuZG5iIHJuZE5lZ0Jpbm9taWFsIHJuZHAgcm5kUG9pc3NvbiBybmRSYXlsZWlnaCAnICtcbiAgICAgICAgICAgICAgJ3JuZFN0YXRlU2tpcCBybmR1IHJuZHZtIHJuZFdlaWJ1bGwgcm5kV2lzaGFydCByb3RhdGVyIHJvdW5kIHJvd3Mgcm93c2YgcnJlZiBzYW1wbGVEYXRhIHNhdG9zdHJDIHNhdmVkIHNhdmVTdHJ1Y3Qgc2F2ZXdpbmQgJyArXG4gICAgICAgICAgICAgICdzY2FsZSBzY2FsZTNkIHNjYWxlcnIgc2NhbGluZm5hbm1pc3Mgc2NhbG1pc3Mgc2NodG9jIHNjaHVyIHNlYXJjaHNvdXJjZXBhdGggc2Vla3Igc2VsZWN0IHNlbGlmIHNlcWEgc2VxbSBzZXRkaWYgc2V0ZGlmc2EgJyArXG4gICAgICAgICAgICAgICdzZXR2YXJzIHNldHZ3cm1vZGUgc2V0d2luZCBzaGVsbCBzaGlmdHIgc2luIHNpbmdsZWluZGV4IHNpbmggc2xlZXAgc29scGQgc29ydGMgc29ydGNjIHNvcnRkIHNvcnRoYyBzb3J0aGNjIHNvcnRpbmQgJyArXG4gICAgICAgICAgICAgICdzb3J0aW5kYyBzb3J0bWMgc29ydHIgc29ydHJjIHNwQmljb25qR3JhZFNvbCBzcENob2wgc3BDb25qR3JhZFNvbCBzcENyZWF0ZSBzcERlbnNlU3VibWF0IHNwRGlhZ1J2TWF0IHNwRWlndiBzcEV5ZSBzcExETCAnICtcbiAgICAgICAgICAgICAgJ3NwbGluZSBzcExVIHNwTnVtTlpFIHNwT25lcyBzcHJlYWRTaGVldFJlYWRNIHNwcmVhZFNoZWV0UmVhZFNBIHNwcmVhZFNoZWV0V3JpdGUgc3BTY2FsZSBzcFN1Ym1hdCBzcFRvRGVuc2Ugc3BUclREZW5zZSAnICtcbiAgICAgICAgICAgICAgJ3NwVFNjYWxhciBzcFplcm9zIHNxcFNvbHZlIHNxcFNvbHZlTVQgc3FwU29sdmVNVENvbnRyb2xDcmVhdGUgc3FwU29sdmVNVGxhZ3JhbmdlQ3JlYXRlIHNxcFNvbHZlTVRvdXRDcmVhdGUgc3FwU29sdmVTZXQgJyArXG4gICAgICAgICAgICAgICdzcXJ0IHN0YXRlbWVudHMgc3RkYyBzdGRzYyBzdG9jdiBzdG9mIHN0cmNvbWJpbmUgc3RyaW5keCBzdHJsZW4gc3RycHV0IHN0cnJpbmR4IHN0cnNlY3Qgc3Ryc3BsaXQgc3Ryc3BsaXRQYWQgc3RydG9kdCAnICtcbiAgICAgICAgICAgICAgJ3N0cnRvZiBzdHJ0b2ZjcGx4IHN0cnRyaW1sIHN0cnRyaW1yIHN0cnRydW5jIHN0cnRydW5jbCBzdHJ0cnVuY3BhZCBzdHJ0cnVuY3Igc3VibWF0IHN1YnNjYXQgc3Vic3R1dGUgc3VidmVjIHN1bWMgc3VtciAnICtcbiAgICAgICAgICAgICAgJ3N1cmZhY2Ugc3ZkIHN2ZDEgc3ZkMiBzdmRjdXN2IHN2ZHMgc3ZkdXN2IHN5c3N0YXRlIHRhYiB0YW4gdGFuaCB0ZW1wbmFtZSAnICtcbiAgICAgICAgICAgICAgJ3RpbWUgdGltZWR0IHRpbWVzdHIgdGltZXV0YyB0aXRsZSB0a2YyZXBzIHRrZjJwcyB0b2NhcnQgdG9kYXlkdCB0b2VwbGl0eiB0b2tlbiB0b3BvbGFyIHRyYXBjaGsgJyArXG4gICAgICAgICAgICAgICd0cmlnYW1tYSB0cmltciB0cnVuYyB0eXBlIHR5cGVjdiB0eXBlZiB1bmlvbiB1bmlvbnNhIHVuaXFpbmR4IHVuaXFpbmR4c2EgdW5pcXVlIHVuaXF1ZXNhIHVwbWF0IHVwbWF0MSB1cHBlciB1dGN0b2R0ICcgK1xuICAgICAgICAgICAgICAndXRjdG9kdHYgdXRyaXNvbCB2YWxzIHZhckNvdk1TIHZhckNvdlhTIHZhcmdldCB2YXJnZXRsIHZhcm1hbGwgdmFybWFyZXMgdmFycHV0IHZhcnB1dGwgdmFydHlwZWYgdmNtIHZjbXMgdmN4IHZjeHMgJyArXG4gICAgICAgICAgICAgICd2ZWMgdmVjaCB2ZWNyIHZlY3RvciB2Z2V0IHZpZXcgdmlld3h5eiB2bGlzdCB2bmFtZWN2IHZvbHVtZSB2cHV0IHZyZWFkIHZ0eXBlY3Ygd2FpdCB3YWl0YyB3YWxraW5kZXggd2hlcmUgd2luZG93ICcgK1xuICAgICAgICAgICAgICAnd3JpdGVyIHhsYWJlbCB4bHNHZXRTaGVldENvdW50IHhsc0dldFNoZWV0U2l6ZSB4bHNHZXRTaGVldFR5cGVzIHhsc01ha2VSYW5nZSB4bHNSZWFkTSB4bHNSZWFkU0EgeGxzV3JpdGUgeGxzV3JpdGVNICcgK1xuICAgICAgICAgICAgICAneGxzV3JpdGVTQSB4cG5kIHh0aWNzIHh5IHh5eiB5bGFiZWwgeXRpY3MgemVyb3MgemV0YSB6bGFiZWwgenRpY3MgY2RmRW1waXJpY2FsIGRvdCBoNWNyZWF0ZSBoNW9wZW4gaDVyZWFkIGg1cmVhZEF0dHJpYnV0ZSAnICtcbiAgICAgICAgICAgICAgJ2g1d3JpdGUgaDV3cml0ZUF0dHJpYnV0ZSBsZGwgcGxvdEFkZEVycm9yQmFyIHBsb3RBZGRTdXJmYWNlIHBsb3RDREZFbXBpcmljYWwgcGxvdFNldENvbG9ybWFwIHBsb3RTZXRDb250b3VyTGFiZWxzICcgK1xuICAgICAgICAgICAgICAncGxvdFNldExlZ2VuZEZvbnQgcGxvdFNldFRleHRJbnRlcnByZXRlciBwbG90U2V0WFRpY0NvdW50IHBsb3RTZXRZVGljQ291bnQgcGxvdFNldFpMZXZlbHMgcG93ZXJtIHN0cmpvaW4gc3lsdmVzdGVyICcgK1xuICAgICAgICAgICAgICAnc3RydHJpbScsXG4gICAgbGl0ZXJhbDogJ0RCX0FGVEVSX0xBU1RfUk9XIERCX0FMTF9UQUJMRVMgREJfQkFUQ0hfT1BFUkFUSU9OUyBEQl9CRUZPUkVfRklSU1RfUk9XIERCX0JMT0IgREJfRVZFTlRfTk9USUZJQ0FUSU9OUyAnICtcbiAgICAgICAgICAgICAnREJfRklOSVNIX1FVRVJZIERCX0hJR0hfUFJFQ0lTSU9OIERCX0xBU1RfSU5TRVJUX0lEIERCX0xPV19QUkVDSVNJT05fRE9VQkxFIERCX0xPV19QUkVDSVNJT05fSU5UMzIgJyArXG4gICAgICAgICAgICAgJ0RCX0xPV19QUkVDSVNJT05fSU5UNjQgREJfTE9XX1BSRUNJU0lPTl9OVU1CRVJTIERCX01VTFRJUExFX1JFU1VMVF9TRVRTIERCX05BTUVEX1BMQUNFSE9MREVSUyAnICtcbiAgICAgICAgICAgICAnREJfUE9TSVRJT05BTF9QTEFDRUhPTERFUlMgREJfUFJFUEFSRURfUVVFUklFUyBEQl9RVUVSWV9TSVpFIERCX1NJTVBMRV9MT0NLSU5HIERCX1NZU1RFTV9UQUJMRVMgREJfVEFCTEVTICcgK1xuICAgICAgICAgICAgICdEQl9UUkFOU0FDVElPTlMgREJfVU5JQ09ERSBEQl9WSUVXUyBfX1NURElOIF9fU1RET1VUIF9fU1RERVJSIF9fRklMRV9ESVInXG4gIH07XG5cbiAgY29uc3QgQVRfQ09NTUVOVF9NT0RFID0gaGxqcy5DT01NRU5UKCdAJywgJ0AnKTtcblxuICBjb25zdCBQUkVQUk9DRVNTT1IgPVxuICB7XG4gICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgYmVnaW46ICcjJyxcbiAgICBlbmQ6ICckJyxcbiAgICBrZXl3b3Jkczoge1xuICAgICAgJ21ldGEta2V5d29yZCc6ICdkZWZpbmUgZGVmaW5lY3N8MTAgdW5kZWYgaWZkZWYgaWZuZGVmIGlmbGlnaHQgaWZkbGxjYWxsIGlmbWFjIGlmb3Myd2luIGlmdW5peCBlbHNlIGVuZGlmIGxpbmVzb24gbGluZXNvZmYgc3JjZmlsZSBzcmNsaW5lJ1xuICAgIH0sXG4gICAgY29udGFpbnM6IFtcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IC9cXFxcXFxuLyxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbktleXdvcmRzOiAnaW5jbHVkZScsXG4gICAgICAgIGVuZDogJyQnLFxuICAgICAgICBrZXl3b3Jkczoge1xuICAgICAgICAgICdtZXRhLWtleXdvcmQnOiAnaW5jbHVkZSdcbiAgICAgICAgfSxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdtZXRhLXN0cmluZycsXG4gICAgICAgICAgICBiZWdpbjogJ1wiJyxcbiAgICAgICAgICAgIGVuZDogJ1wiJyxcbiAgICAgICAgICAgIGlsbGVnYWw6ICdcXFxcbidcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBobGpzLkNfTElORV9DT01NRU5UX01PREUsXG4gICAgICBobGpzLkNfQkxPQ0tfQ09NTUVOVF9NT0RFLFxuICAgICAgQVRfQ09NTUVOVF9NT0RFXG4gICAgXVxuICB9O1xuXG4gIGNvbnN0IFNUUlVDVF9UWVBFID1cbiAge1xuICAgIGJlZ2luOiAvXFxic3RydWN0XFxzKy8sXG4gICAgZW5kOiAvXFxzLyxcbiAgICBrZXl3b3JkczogXCJzdHJ1Y3RcIixcbiAgICBjb250YWluczogW1xuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6IFwidHlwZVwiLFxuICAgICAgICBiZWdpbjogaGxqcy5VTkRFUlNDT1JFX0lERU5UX1JFLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH1cbiAgICBdXG4gIH07XG5cbiAgLy8gb25seSBmb3IgZGVmaW5pdGlvbnNcbiAgY29uc3QgUEFSU0VfUEFSQU1TID0gW1xuICAgIHtcbiAgICAgIGNsYXNzTmFtZTogJ3BhcmFtcycsXG4gICAgICBiZWdpbjogL1xcKC8sXG4gICAgICBlbmQ6IC9cXCkvLFxuICAgICAgZXhjbHVkZUJlZ2luOiB0cnVlLFxuICAgICAgZXhjbHVkZUVuZDogdHJ1ZSxcbiAgICAgIGVuZHNXaXRoUGFyZW50OiB0cnVlLFxuICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgeyAvLyBkb3RzXG4gICAgICAgICAgY2xhc3NOYW1lOiAnbGl0ZXJhbCcsXG4gICAgICAgICAgYmVnaW46IC9cXC5cXC5cXC4vXG4gICAgICAgIH0sXG4gICAgICAgIGhsanMuQ19OVU1CRVJfTU9ERSxcbiAgICAgICAgaGxqcy5DX0JMT0NLX0NPTU1FTlRfTU9ERSxcbiAgICAgICAgQVRfQ09NTUVOVF9NT0RFLFxuICAgICAgICBTVFJVQ1RfVFlQRVxuICAgICAgXVxuICAgIH1cbiAgXTtcblxuICBjb25zdCBGVU5DVElPTl9ERUYgPVxuICB7XG4gICAgY2xhc3NOYW1lOiBcInRpdGxlXCIsXG4gICAgYmVnaW46IGhsanMuVU5ERVJTQ09SRV9JREVOVF9SRSxcbiAgICByZWxldmFuY2U6IDBcbiAgfTtcblxuICBjb25zdCBERUZJTklUSU9OID0gZnVuY3Rpb24oYmVnaW5LZXl3b3JkcywgZW5kLCBpbmhlcml0cykge1xuICAgIGNvbnN0IG1vZGUgPSBobGpzLmluaGVyaXQoXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJmdW5jdGlvblwiLFxuICAgICAgICBiZWdpbktleXdvcmRzOiBiZWdpbktleXdvcmRzLFxuICAgICAgICBlbmQ6IGVuZCxcbiAgICAgICAgZXhjbHVkZUVuZDogdHJ1ZSxcbiAgICAgICAgY29udGFpbnM6IFtdLmNvbmNhdChQQVJTRV9QQVJBTVMpXG4gICAgICB9LFxuICAgICAgaW5oZXJpdHMgfHwge31cbiAgICApO1xuICAgIG1vZGUuY29udGFpbnMucHVzaChGVU5DVElPTl9ERUYpO1xuICAgIG1vZGUuY29udGFpbnMucHVzaChobGpzLkNfTlVNQkVSX01PREUpO1xuICAgIG1vZGUuY29udGFpbnMucHVzaChobGpzLkNfQkxPQ0tfQ09NTUVOVF9NT0RFKTtcbiAgICBtb2RlLmNvbnRhaW5zLnB1c2goQVRfQ09NTUVOVF9NT0RFKTtcbiAgICByZXR1cm4gbW9kZTtcbiAgfTtcblxuICBjb25zdCBCVUlMVF9JTl9SRUYgPVxuICB7IC8vIHRoZXNlIGFyZSBleHBsaWNpdGx5IG5hbWVkIGludGVybmFsIGZ1bmN0aW9uIGNhbGxzXG4gICAgY2xhc3NOYW1lOiAnYnVpbHRfaW4nLFxuICAgIGJlZ2luOiAnXFxcXGIoJyArIEtFWVdPUkRTLmJ1aWx0X2luLnNwbGl0KCcgJykuam9pbignfCcpICsgJylcXFxcYidcbiAgfTtcblxuICBjb25zdCBTVFJJTkdfUkVGID1cbiAge1xuICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgYmVnaW46ICdcIicsXG4gICAgZW5kOiAnXCInLFxuICAgIGNvbnRhaW5zOiBbaGxqcy5CQUNLU0xBU0hfRVNDQVBFXSxcbiAgICByZWxldmFuY2U6IDBcbiAgfTtcblxuICBjb25zdCBGVU5DVElPTl9SRUYgPVxuICB7XG4gICAgLy8gY2xhc3NOYW1lOiBcImZuX3JlZlwiLFxuICAgIGJlZ2luOiBobGpzLlVOREVSU0NPUkVfSURFTlRfUkUgKyAnXFxcXHMqXFxcXCgnLFxuICAgIHJldHVybkJlZ2luOiB0cnVlLFxuICAgIGtleXdvcmRzOiBLRVlXT1JEUyxcbiAgICByZWxldmFuY2U6IDAsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIHtcbiAgICAgICAgYmVnaW5LZXl3b3JkczogS0VZV09SRFMua2V5d29yZFxuICAgICAgfSxcbiAgICAgIEJVSUxUX0lOX1JFRixcbiAgICAgIHsgLy8gYW1iaWd1b3VzbHkgbmFtZWQgZnVuY3Rpb24gY2FsbHMgZ2V0IGEgcmVsZXZhbmNlIG9mIDBcbiAgICAgICAgY2xhc3NOYW1lOiAnYnVpbHRfaW4nLFxuICAgICAgICBiZWdpbjogaGxqcy5VTkRFUlNDT1JFX0lERU5UX1JFLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH1cbiAgICBdXG4gIH07XG5cbiAgY29uc3QgRlVOQ1RJT05fUkVGX1BBUkFNUyA9XG4gIHtcbiAgICAvLyBjbGFzc05hbWU6IFwiZm5fcmVmX3BhcmFtc1wiLFxuICAgIGJlZ2luOiAvXFwoLyxcbiAgICBlbmQ6IC9cXCkvLFxuICAgIHJlbGV2YW5jZTogMCxcbiAgICBrZXl3b3Jkczoge1xuICAgICAgYnVpbHRfaW46IEtFWVdPUkRTLmJ1aWx0X2luLFxuICAgICAgbGl0ZXJhbDogS0VZV09SRFMubGl0ZXJhbFxuICAgIH0sXG4gICAgY29udGFpbnM6IFtcbiAgICAgIGhsanMuQ19OVU1CRVJfTU9ERSxcbiAgICAgIGhsanMuQ19CTE9DS19DT01NRU5UX01PREUsXG4gICAgICBBVF9DT01NRU5UX01PREUsXG4gICAgICBCVUlMVF9JTl9SRUYsXG4gICAgICBGVU5DVElPTl9SRUYsXG4gICAgICBTVFJJTkdfUkVGLFxuICAgICAgJ3NlbGYnXG4gICAgXVxuICB9O1xuXG4gIEZVTkNUSU9OX1JFRi5jb250YWlucy5wdXNoKEZVTkNUSU9OX1JFRl9QQVJBTVMpO1xuXG4gIHJldHVybiB7XG4gICAgbmFtZTogJ0dBVVNTJyxcbiAgICBhbGlhc2VzOiBbJ2dzcyddLFxuICAgIGNhc2VfaW5zZW5zaXRpdmU6IHRydWUsIC8vIGxhbmd1YWdlIGlzIGNhc2UtaW5zZW5zaXRpdmVcbiAgICBrZXl3b3JkczogS0VZV09SRFMsXG4gICAgaWxsZWdhbDogLyhcXHtbJSNdfFslI11cXH18IDwtICkvLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBobGpzLkNfTlVNQkVSX01PREUsXG4gICAgICBobGpzLkNfTElORV9DT01NRU5UX01PREUsXG4gICAgICBobGpzLkNfQkxPQ0tfQ09NTUVOVF9NT0RFLFxuICAgICAgQVRfQ09NTUVOVF9NT0RFLFxuICAgICAgU1RSSU5HX1JFRixcbiAgICAgIFBSRVBST0NFU1NPUixcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAna2V5d29yZCcsXG4gICAgICAgIGJlZ2luOiAvXFxiZXh0ZXJuYWwgKG1hdHJpeHxzdHJpbmd8YXJyYXl8c3BhcnNlIG1hdHJpeHxzdHJ1Y3R8cHJvY3xrZXl3b3JkfGZuKS9cbiAgICAgIH0sXG4gICAgICBERUZJTklUSU9OKCdwcm9jIGtleXdvcmQnLCAnOycpLFxuICAgICAgREVGSU5JVElPTignZm4nLCAnPScpLFxuICAgICAge1xuICAgICAgICBiZWdpbktleXdvcmRzOiAnZm9yIHRocmVhZGZvcicsXG4gICAgICAgIGVuZDogLzsvLFxuICAgICAgICAvLyBlbmQ6IC9cXCgvLFxuICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgaGxqcy5DX0JMT0NLX0NPTU1FTlRfTU9ERSxcbiAgICAgICAgICBBVF9DT01NRU5UX01PREUsXG4gICAgICAgICAgRlVOQ1RJT05fUkVGX1BBUkFNU1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgeyAvLyBjdXN0b20gbWV0aG9kIGd1YXJkXG4gICAgICAgIC8vIGV4Y2x1ZGVzIG1ldGhvZCBuYW1lcyBmcm9tIGtleXdvcmQgcHJvY2Vzc2luZ1xuICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luOiBobGpzLlVOREVSU0NPUkVfSURFTlRfUkUgKyAnXFxcXC4nICsgaGxqcy5VTkRFUlNDT1JFX0lERU5UX1JFXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogaGxqcy5VTkRFUlNDT1JFX0lERU5UX1JFICsgJ1xcXFxzKj0nXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICBGVU5DVElPTl9SRUYsXG4gICAgICBTVFJVQ1RfVFlQRVxuICAgIF1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnYXVzcztcbiJdLCJzb3VyY2VSb290IjoiIn0=