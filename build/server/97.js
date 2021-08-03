exports.ids = [97];
exports.modules = {

/***/ "./node_modules/highlight.js/lib/languages/livecodeserver.js":
/*!*******************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/livecodeserver.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: LiveCode
Author: Ralf Bitter <rabit@revigniter.com>
Description: Language definition for LiveCode server accounting for revIgniter (a web application framework) characteristics.
Version: 1.1
Date: 2019-04-17
Category: enterprise
*/

function livecodeserver(hljs) {
  const VARIABLE = {
    className: 'variable',
    variants: [
      {
        begin: '\\b([gtps][A-Z]{1}[a-zA-Z0-9]*)(\\[.+\\])?(?:\\s*?)'
      },
      {
        begin: '\\$_[A-Z]+'
      }
    ],
    relevance: 0
  };
  const COMMENT_MODES = [
    hljs.C_BLOCK_COMMENT_MODE,
    hljs.HASH_COMMENT_MODE,
    hljs.COMMENT('--', '$'),
    hljs.COMMENT('[^:]//', '$')
  ];
  const TITLE1 = hljs.inherit(hljs.TITLE_MODE, {
    variants: [
      {
        begin: '\\b_*rig[A-Z][A-Za-z0-9_\\-]*'
      },
      {
        begin: '\\b_[a-z0-9\\-]+'
      }
    ]
  });
  const TITLE2 = hljs.inherit(hljs.TITLE_MODE, {
    begin: '\\b([A-Za-z0-9_\\-]+)\\b'
  });
  return {
    name: 'LiveCode',
    case_insensitive: false,
    keywords: {
      keyword:
        '$_COOKIE $_FILES $_GET $_GET_BINARY $_GET_RAW $_POST $_POST_BINARY $_POST_RAW $_SESSION $_SERVER ' +
        'codepoint codepoints segment segments codeunit codeunits sentence sentences trueWord trueWords paragraph ' +
        'after byte bytes english the until http forever descending using line real8 with seventh ' +
        'for stdout finally element word words fourth before black ninth sixth characters chars stderr ' +
        'uInt1 uInt1s uInt2 uInt2s stdin string lines relative rel any fifth items from middle mid ' +
        'at else of catch then third it file milliseconds seconds second secs sec int1 int1s int4 ' +
        'int4s internet int2 int2s normal text item last long detailed effective uInt4 uInt4s repeat ' +
        'end repeat URL in try into switch to words https token binfile each tenth as ticks tick ' +
        'system real4 by dateItems without char character ascending eighth whole dateTime numeric short ' +
        'first ftp integer abbreviated abbr abbrev private case while if ' +
        'div mod wrap and or bitAnd bitNot bitOr bitXor among not in a an within ' +
        'contains ends with begins the keys of keys',
      literal:
        'SIX TEN FORMFEED NINE ZERO NONE SPACE FOUR FALSE COLON CRLF PI COMMA ENDOFFILE EOF EIGHT FIVE ' +
        'QUOTE EMPTY ONE TRUE RETURN CR LINEFEED RIGHT BACKSLASH NULL SEVEN TAB THREE TWO ' +
        'six ten formfeed nine zero none space four false colon crlf pi comma endoffile eof eight five ' +
        'quote empty one true return cr linefeed right backslash null seven tab three two ' +
        'RIVERSION RISTATE FILE_READ_MODE FILE_WRITE_MODE FILE_WRITE_MODE DIR_WRITE_MODE FILE_READ_UMASK ' +
        'FILE_WRITE_UMASK DIR_READ_UMASK DIR_WRITE_UMASK',
      built_in:
        'put abs acos aliasReference annuity arrayDecode arrayEncode asin atan atan2 average avg avgDev base64Decode ' +
        'base64Encode baseConvert binaryDecode binaryEncode byteOffset byteToNum cachedURL cachedURLs charToNum ' +
        'cipherNames codepointOffset codepointProperty codepointToNum codeunitOffset commandNames compound compress ' +
        'constantNames cos date dateFormat decompress difference directories ' +
        'diskSpace DNSServers exp exp1 exp2 exp10 extents files flushEvents folders format functionNames geometricMean global ' +
        'globals hasMemory harmonicMean hostAddress hostAddressToName hostName hostNameToAddress isNumber ISOToMac itemOffset ' +
        'keys len length libURLErrorData libUrlFormData libURLftpCommand libURLLastHTTPHeaders libURLLastRHHeaders ' +
        'libUrlMultipartFormAddPart libUrlMultipartFormData libURLVersion lineOffset ln ln1 localNames log log2 log10 ' +
        'longFilePath lower macToISO matchChunk matchText matrixMultiply max md5Digest median merge messageAuthenticationCode messageDigest millisec ' +
        'millisecs millisecond milliseconds min monthNames nativeCharToNum normalizeText num number numToByte numToChar ' +
        'numToCodepoint numToNativeChar offset open openfiles openProcesses openProcessIDs openSockets ' +
        'paragraphOffset paramCount param params peerAddress pendingMessages platform popStdDev populationStandardDeviation ' +
        'populationVariance popVariance processID random randomBytes replaceText result revCreateXMLTree revCreateXMLTreeFromFile ' +
        'revCurrentRecord revCurrentRecordIsFirst revCurrentRecordIsLast revDatabaseColumnCount revDatabaseColumnIsNull ' +
        'revDatabaseColumnLengths revDatabaseColumnNames revDatabaseColumnNamed revDatabaseColumnNumbered ' +
        'revDatabaseColumnTypes revDatabaseConnectResult revDatabaseCursors revDatabaseID revDatabaseTableNames ' +
        'revDatabaseType revDataFromQuery revdb_closeCursor revdb_columnbynumber revdb_columncount revdb_columnisnull ' +
        'revdb_columnlengths revdb_columnnames revdb_columntypes revdb_commit revdb_connect revdb_connections ' +
        'revdb_connectionerr revdb_currentrecord revdb_cursorconnection revdb_cursorerr revdb_cursors revdb_dbtype ' +
        'revdb_disconnect revdb_execute revdb_iseof revdb_isbof revdb_movefirst revdb_movelast revdb_movenext ' +
        'revdb_moveprev revdb_query revdb_querylist revdb_recordcount revdb_rollback revdb_tablenames ' +
        'revGetDatabaseDriverPath revNumberOfRecords revOpenDatabase revOpenDatabases revQueryDatabase ' +
        'revQueryDatabaseBlob revQueryResult revQueryIsAtStart revQueryIsAtEnd revUnixFromMacPath revXMLAttribute ' +
        'revXMLAttributes revXMLAttributeValues revXMLChildContents revXMLChildNames revXMLCreateTreeFromFileWithNamespaces ' +
        'revXMLCreateTreeWithNamespaces revXMLDataFromXPathQuery revXMLEvaluateXPath revXMLFirstChild revXMLMatchingNode ' +
        'revXMLNextSibling revXMLNodeContents revXMLNumberOfChildren revXMLParent revXMLPreviousSibling ' +
        'revXMLRootNode revXMLRPC_CreateRequest revXMLRPC_Documents revXMLRPC_Error ' +
        'revXMLRPC_GetHost revXMLRPC_GetMethod revXMLRPC_GetParam revXMLText revXMLRPC_Execute ' +
        'revXMLRPC_GetParamCount revXMLRPC_GetParamNode revXMLRPC_GetParamType revXMLRPC_GetPath revXMLRPC_GetPort ' +
        'revXMLRPC_GetProtocol revXMLRPC_GetRequest revXMLRPC_GetResponse revXMLRPC_GetSocket revXMLTree ' +
        'revXMLTrees revXMLValidateDTD revZipDescribeItem revZipEnumerateItems revZipOpenArchives round sampVariance ' +
        'sec secs seconds sentenceOffset sha1Digest shell shortFilePath sin specialFolderPath sqrt standardDeviation statRound ' +
        'stdDev sum sysError systemVersion tan tempName textDecode textEncode tick ticks time to tokenOffset toLower toUpper ' +
        'transpose truewordOffset trunc uniDecode uniEncode upper URLDecode URLEncode URLStatus uuid value variableNames ' +
        'variance version waitDepth weekdayNames wordOffset xsltApplyStylesheet xsltApplyStylesheetFromFile xsltLoadStylesheet ' +
        'xsltLoadStylesheetFromFile add breakpoint cancel clear local variable file word line folder directory URL close socket process ' +
        'combine constant convert create new alias folder directory decrypt delete variable word line folder ' +
        'directory URL dispatch divide do encrypt filter get include intersect kill libURLDownloadToFile ' +
        'libURLFollowHttpRedirects libURLftpUpload libURLftpUploadFile libURLresetAll libUrlSetAuthCallback libURLSetDriver ' +
        'libURLSetCustomHTTPHeaders libUrlSetExpect100 libURLSetFTPListCommand libURLSetFTPMode libURLSetFTPStopTime ' +
        'libURLSetStatusCallback load extension loadedExtensions multiply socket prepare process post seek rel relative read from process rename ' +
        'replace require resetAll resolve revAddXMLNode revAppendXML revCloseCursor revCloseDatabase revCommitDatabase ' +
        'revCopyFile revCopyFolder revCopyXMLNode revDeleteFolder revDeleteXMLNode revDeleteAllXMLTrees ' +
        'revDeleteXMLTree revExecuteSQL revGoURL revInsertXMLNode revMoveFolder revMoveToFirstRecord revMoveToLastRecord ' +
        'revMoveToNextRecord revMoveToPreviousRecord revMoveToRecord revMoveXMLNode revPutIntoXMLNode revRollBackDatabase ' +
        'revSetDatabaseDriverPath revSetXMLAttribute revXMLRPC_AddParam revXMLRPC_DeleteAllDocuments revXMLAddDTD ' +
        'revXMLRPC_Free revXMLRPC_FreeAll revXMLRPC_DeleteDocument revXMLRPC_DeleteParam revXMLRPC_SetHost ' +
        'revXMLRPC_SetMethod revXMLRPC_SetPort revXMLRPC_SetProtocol revXMLRPC_SetSocket revZipAddItemWithData ' +
        'revZipAddItemWithFile revZipAddUncompressedItemWithData revZipAddUncompressedItemWithFile revZipCancel ' +
        'revZipCloseArchive revZipDeleteItem revZipExtractItemToFile revZipExtractItemToVariable revZipSetProgressCallback ' +
        'revZipRenameItem revZipReplaceItemWithData revZipReplaceItemWithFile revZipOpenArchive send set sort split start stop ' +
        'subtract symmetric union unload vectorDotProduct wait write'
    },
    contains: [
      VARIABLE,
      {
        className: 'keyword',
        begin: '\\bend\\sif\\b'
      },
      {
        className: 'function',
        beginKeywords: 'function',
        end: '$',
        contains: [
          VARIABLE,
          TITLE2,
          hljs.APOS_STRING_MODE,
          hljs.QUOTE_STRING_MODE,
          hljs.BINARY_NUMBER_MODE,
          hljs.C_NUMBER_MODE,
          TITLE1
        ]
      },
      {
        className: 'function',
        begin: '\\bend\\s+',
        end: '$',
        keywords: 'end',
        contains: [
          TITLE2,
          TITLE1
        ],
        relevance: 0
      },
      {
        beginKeywords: 'command on',
        end: '$',
        contains: [
          VARIABLE,
          TITLE2,
          hljs.APOS_STRING_MODE,
          hljs.QUOTE_STRING_MODE,
          hljs.BINARY_NUMBER_MODE,
          hljs.C_NUMBER_MODE,
          TITLE1
        ]
      },
      {
        className: 'meta',
        variants: [
          {
            begin: '<\\?(rev|lc|livecode)',
            relevance: 10
          },
          {
            begin: '<\\?'
          },
          {
            begin: '\\?>'
          }
        ]
      },
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE,
      hljs.BINARY_NUMBER_MODE,
      hljs.C_NUMBER_MODE,
      TITLE1
    ].concat(COMMENT_MODES),
    illegal: ';$|^\\[|^=|&|\\{'
  };
}

module.exports = livecodeserver;


/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvbGl2ZWNvZGVzZXJ2ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxFQUFFO0FBQ2xDLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxlQUFlO0FBQzlCO0FBQ0E7O0FBRUEiLCJmaWxlIjoiOTcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuTGFuZ3VhZ2U6IExpdmVDb2RlXG5BdXRob3I6IFJhbGYgQml0dGVyIDxyYWJpdEByZXZpZ25pdGVyLmNvbT5cbkRlc2NyaXB0aW9uOiBMYW5ndWFnZSBkZWZpbml0aW9uIGZvciBMaXZlQ29kZSBzZXJ2ZXIgYWNjb3VudGluZyBmb3IgcmV2SWduaXRlciAoYSB3ZWIgYXBwbGljYXRpb24gZnJhbWV3b3JrKSBjaGFyYWN0ZXJpc3RpY3MuXG5WZXJzaW9uOiAxLjFcbkRhdGU6IDIwMTktMDQtMTdcbkNhdGVnb3J5OiBlbnRlcnByaXNlXG4qL1xuXG5mdW5jdGlvbiBsaXZlY29kZXNlcnZlcihobGpzKSB7XG4gIGNvbnN0IFZBUklBQkxFID0ge1xuICAgIGNsYXNzTmFtZTogJ3ZhcmlhYmxlJyxcbiAgICB2YXJpYW50czogW1xuICAgICAge1xuICAgICAgICBiZWdpbjogJ1xcXFxiKFtndHBzXVtBLVpdezF9W2EtekEtWjAtOV0qKShcXFxcWy4rXFxcXF0pPyg/OlxcXFxzKj8pJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICdcXFxcJF9bQS1aXSsnXG4gICAgICB9XG4gICAgXSxcbiAgICByZWxldmFuY2U6IDBcbiAgfTtcbiAgY29uc3QgQ09NTUVOVF9NT0RFUyA9IFtcbiAgICBobGpzLkNfQkxPQ0tfQ09NTUVOVF9NT0RFLFxuICAgIGhsanMuSEFTSF9DT01NRU5UX01PREUsXG4gICAgaGxqcy5DT01NRU5UKCctLScsICckJyksXG4gICAgaGxqcy5DT01NRU5UKCdbXjpdLy8nLCAnJCcpXG4gIF07XG4gIGNvbnN0IFRJVExFMSA9IGhsanMuaW5oZXJpdChobGpzLlRJVExFX01PREUsIHtcbiAgICB2YXJpYW50czogW1xuICAgICAge1xuICAgICAgICBiZWdpbjogJ1xcXFxiXypyaWdbQS1aXVtBLVphLXowLTlfXFxcXC1dKidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnXFxcXGJfW2EtejAtOVxcXFwtXSsnXG4gICAgICB9XG4gICAgXVxuICB9KTtcbiAgY29uc3QgVElUTEUyID0gaGxqcy5pbmhlcml0KGhsanMuVElUTEVfTU9ERSwge1xuICAgIGJlZ2luOiAnXFxcXGIoW0EtWmEtejAtOV9cXFxcLV0rKVxcXFxiJ1xuICB9KTtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnTGl2ZUNvZGUnLFxuICAgIGNhc2VfaW5zZW5zaXRpdmU6IGZhbHNlLFxuICAgIGtleXdvcmRzOiB7XG4gICAgICBrZXl3b3JkOlxuICAgICAgICAnJF9DT09LSUUgJF9GSUxFUyAkX0dFVCAkX0dFVF9CSU5BUlkgJF9HRVRfUkFXICRfUE9TVCAkX1BPU1RfQklOQVJZICRfUE9TVF9SQVcgJF9TRVNTSU9OICRfU0VSVkVSICcgK1xuICAgICAgICAnY29kZXBvaW50IGNvZGVwb2ludHMgc2VnbWVudCBzZWdtZW50cyBjb2RldW5pdCBjb2RldW5pdHMgc2VudGVuY2Ugc2VudGVuY2VzIHRydWVXb3JkIHRydWVXb3JkcyBwYXJhZ3JhcGggJyArXG4gICAgICAgICdhZnRlciBieXRlIGJ5dGVzIGVuZ2xpc2ggdGhlIHVudGlsIGh0dHAgZm9yZXZlciBkZXNjZW5kaW5nIHVzaW5nIGxpbmUgcmVhbDggd2l0aCBzZXZlbnRoICcgK1xuICAgICAgICAnZm9yIHN0ZG91dCBmaW5hbGx5IGVsZW1lbnQgd29yZCB3b3JkcyBmb3VydGggYmVmb3JlIGJsYWNrIG5pbnRoIHNpeHRoIGNoYXJhY3RlcnMgY2hhcnMgc3RkZXJyICcgK1xuICAgICAgICAndUludDEgdUludDFzIHVJbnQyIHVJbnQycyBzdGRpbiBzdHJpbmcgbGluZXMgcmVsYXRpdmUgcmVsIGFueSBmaWZ0aCBpdGVtcyBmcm9tIG1pZGRsZSBtaWQgJyArXG4gICAgICAgICdhdCBlbHNlIG9mIGNhdGNoIHRoZW4gdGhpcmQgaXQgZmlsZSBtaWxsaXNlY29uZHMgc2Vjb25kcyBzZWNvbmQgc2VjcyBzZWMgaW50MSBpbnQxcyBpbnQ0ICcgK1xuICAgICAgICAnaW50NHMgaW50ZXJuZXQgaW50MiBpbnQycyBub3JtYWwgdGV4dCBpdGVtIGxhc3QgbG9uZyBkZXRhaWxlZCBlZmZlY3RpdmUgdUludDQgdUludDRzIHJlcGVhdCAnICtcbiAgICAgICAgJ2VuZCByZXBlYXQgVVJMIGluIHRyeSBpbnRvIHN3aXRjaCB0byB3b3JkcyBodHRwcyB0b2tlbiBiaW5maWxlIGVhY2ggdGVudGggYXMgdGlja3MgdGljayAnICtcbiAgICAgICAgJ3N5c3RlbSByZWFsNCBieSBkYXRlSXRlbXMgd2l0aG91dCBjaGFyIGNoYXJhY3RlciBhc2NlbmRpbmcgZWlnaHRoIHdob2xlIGRhdGVUaW1lIG51bWVyaWMgc2hvcnQgJyArXG4gICAgICAgICdmaXJzdCBmdHAgaW50ZWdlciBhYmJyZXZpYXRlZCBhYmJyIGFiYnJldiBwcml2YXRlIGNhc2Ugd2hpbGUgaWYgJyArXG4gICAgICAgICdkaXYgbW9kIHdyYXAgYW5kIG9yIGJpdEFuZCBiaXROb3QgYml0T3IgYml0WG9yIGFtb25nIG5vdCBpbiBhIGFuIHdpdGhpbiAnICtcbiAgICAgICAgJ2NvbnRhaW5zIGVuZHMgd2l0aCBiZWdpbnMgdGhlIGtleXMgb2Yga2V5cycsXG4gICAgICBsaXRlcmFsOlxuICAgICAgICAnU0lYIFRFTiBGT1JNRkVFRCBOSU5FIFpFUk8gTk9ORSBTUEFDRSBGT1VSIEZBTFNFIENPTE9OIENSTEYgUEkgQ09NTUEgRU5ET0ZGSUxFIEVPRiBFSUdIVCBGSVZFICcgK1xuICAgICAgICAnUVVPVEUgRU1QVFkgT05FIFRSVUUgUkVUVVJOIENSIExJTkVGRUVEIFJJR0hUIEJBQ0tTTEFTSCBOVUxMIFNFVkVOIFRBQiBUSFJFRSBUV08gJyArXG4gICAgICAgICdzaXggdGVuIGZvcm1mZWVkIG5pbmUgemVybyBub25lIHNwYWNlIGZvdXIgZmFsc2UgY29sb24gY3JsZiBwaSBjb21tYSBlbmRvZmZpbGUgZW9mIGVpZ2h0IGZpdmUgJyArXG4gICAgICAgICdxdW90ZSBlbXB0eSBvbmUgdHJ1ZSByZXR1cm4gY3IgbGluZWZlZWQgcmlnaHQgYmFja3NsYXNoIG51bGwgc2V2ZW4gdGFiIHRocmVlIHR3byAnICtcbiAgICAgICAgJ1JJVkVSU0lPTiBSSVNUQVRFIEZJTEVfUkVBRF9NT0RFIEZJTEVfV1JJVEVfTU9ERSBGSUxFX1dSSVRFX01PREUgRElSX1dSSVRFX01PREUgRklMRV9SRUFEX1VNQVNLICcgK1xuICAgICAgICAnRklMRV9XUklURV9VTUFTSyBESVJfUkVBRF9VTUFTSyBESVJfV1JJVEVfVU1BU0snLFxuICAgICAgYnVpbHRfaW46XG4gICAgICAgICdwdXQgYWJzIGFjb3MgYWxpYXNSZWZlcmVuY2UgYW5udWl0eSBhcnJheURlY29kZSBhcnJheUVuY29kZSBhc2luIGF0YW4gYXRhbjIgYXZlcmFnZSBhdmcgYXZnRGV2IGJhc2U2NERlY29kZSAnICtcbiAgICAgICAgJ2Jhc2U2NEVuY29kZSBiYXNlQ29udmVydCBiaW5hcnlEZWNvZGUgYmluYXJ5RW5jb2RlIGJ5dGVPZmZzZXQgYnl0ZVRvTnVtIGNhY2hlZFVSTCBjYWNoZWRVUkxzIGNoYXJUb051bSAnICtcbiAgICAgICAgJ2NpcGhlck5hbWVzIGNvZGVwb2ludE9mZnNldCBjb2RlcG9pbnRQcm9wZXJ0eSBjb2RlcG9pbnRUb051bSBjb2RldW5pdE9mZnNldCBjb21tYW5kTmFtZXMgY29tcG91bmQgY29tcHJlc3MgJyArXG4gICAgICAgICdjb25zdGFudE5hbWVzIGNvcyBkYXRlIGRhdGVGb3JtYXQgZGVjb21wcmVzcyBkaWZmZXJlbmNlIGRpcmVjdG9yaWVzICcgK1xuICAgICAgICAnZGlza1NwYWNlIEROU1NlcnZlcnMgZXhwIGV4cDEgZXhwMiBleHAxMCBleHRlbnRzIGZpbGVzIGZsdXNoRXZlbnRzIGZvbGRlcnMgZm9ybWF0IGZ1bmN0aW9uTmFtZXMgZ2VvbWV0cmljTWVhbiBnbG9iYWwgJyArXG4gICAgICAgICdnbG9iYWxzIGhhc01lbW9yeSBoYXJtb25pY01lYW4gaG9zdEFkZHJlc3MgaG9zdEFkZHJlc3NUb05hbWUgaG9zdE5hbWUgaG9zdE5hbWVUb0FkZHJlc3MgaXNOdW1iZXIgSVNPVG9NYWMgaXRlbU9mZnNldCAnICtcbiAgICAgICAgJ2tleXMgbGVuIGxlbmd0aCBsaWJVUkxFcnJvckRhdGEgbGliVXJsRm9ybURhdGEgbGliVVJMZnRwQ29tbWFuZCBsaWJVUkxMYXN0SFRUUEhlYWRlcnMgbGliVVJMTGFzdFJISGVhZGVycyAnICtcbiAgICAgICAgJ2xpYlVybE11bHRpcGFydEZvcm1BZGRQYXJ0IGxpYlVybE11bHRpcGFydEZvcm1EYXRhIGxpYlVSTFZlcnNpb24gbGluZU9mZnNldCBsbiBsbjEgbG9jYWxOYW1lcyBsb2cgbG9nMiBsb2cxMCAnICtcbiAgICAgICAgJ2xvbmdGaWxlUGF0aCBsb3dlciBtYWNUb0lTTyBtYXRjaENodW5rIG1hdGNoVGV4dCBtYXRyaXhNdWx0aXBseSBtYXggbWQ1RGlnZXN0IG1lZGlhbiBtZXJnZSBtZXNzYWdlQXV0aGVudGljYXRpb25Db2RlIG1lc3NhZ2VEaWdlc3QgbWlsbGlzZWMgJyArXG4gICAgICAgICdtaWxsaXNlY3MgbWlsbGlzZWNvbmQgbWlsbGlzZWNvbmRzIG1pbiBtb250aE5hbWVzIG5hdGl2ZUNoYXJUb051bSBub3JtYWxpemVUZXh0IG51bSBudW1iZXIgbnVtVG9CeXRlIG51bVRvQ2hhciAnICtcbiAgICAgICAgJ251bVRvQ29kZXBvaW50IG51bVRvTmF0aXZlQ2hhciBvZmZzZXQgb3BlbiBvcGVuZmlsZXMgb3BlblByb2Nlc3NlcyBvcGVuUHJvY2Vzc0lEcyBvcGVuU29ja2V0cyAnICtcbiAgICAgICAgJ3BhcmFncmFwaE9mZnNldCBwYXJhbUNvdW50IHBhcmFtIHBhcmFtcyBwZWVyQWRkcmVzcyBwZW5kaW5nTWVzc2FnZXMgcGxhdGZvcm0gcG9wU3RkRGV2IHBvcHVsYXRpb25TdGFuZGFyZERldmlhdGlvbiAnICtcbiAgICAgICAgJ3BvcHVsYXRpb25WYXJpYW5jZSBwb3BWYXJpYW5jZSBwcm9jZXNzSUQgcmFuZG9tIHJhbmRvbUJ5dGVzIHJlcGxhY2VUZXh0IHJlc3VsdCByZXZDcmVhdGVYTUxUcmVlIHJldkNyZWF0ZVhNTFRyZWVGcm9tRmlsZSAnICtcbiAgICAgICAgJ3JldkN1cnJlbnRSZWNvcmQgcmV2Q3VycmVudFJlY29yZElzRmlyc3QgcmV2Q3VycmVudFJlY29yZElzTGFzdCByZXZEYXRhYmFzZUNvbHVtbkNvdW50IHJldkRhdGFiYXNlQ29sdW1uSXNOdWxsICcgK1xuICAgICAgICAncmV2RGF0YWJhc2VDb2x1bW5MZW5ndGhzIHJldkRhdGFiYXNlQ29sdW1uTmFtZXMgcmV2RGF0YWJhc2VDb2x1bW5OYW1lZCByZXZEYXRhYmFzZUNvbHVtbk51bWJlcmVkICcgK1xuICAgICAgICAncmV2RGF0YWJhc2VDb2x1bW5UeXBlcyByZXZEYXRhYmFzZUNvbm5lY3RSZXN1bHQgcmV2RGF0YWJhc2VDdXJzb3JzIHJldkRhdGFiYXNlSUQgcmV2RGF0YWJhc2VUYWJsZU5hbWVzICcgK1xuICAgICAgICAncmV2RGF0YWJhc2VUeXBlIHJldkRhdGFGcm9tUXVlcnkgcmV2ZGJfY2xvc2VDdXJzb3IgcmV2ZGJfY29sdW1uYnludW1iZXIgcmV2ZGJfY29sdW1uY291bnQgcmV2ZGJfY29sdW1uaXNudWxsICcgK1xuICAgICAgICAncmV2ZGJfY29sdW1ubGVuZ3RocyByZXZkYl9jb2x1bW5uYW1lcyByZXZkYl9jb2x1bW50eXBlcyByZXZkYl9jb21taXQgcmV2ZGJfY29ubmVjdCByZXZkYl9jb25uZWN0aW9ucyAnICtcbiAgICAgICAgJ3JldmRiX2Nvbm5lY3Rpb25lcnIgcmV2ZGJfY3VycmVudHJlY29yZCByZXZkYl9jdXJzb3Jjb25uZWN0aW9uIHJldmRiX2N1cnNvcmVyciByZXZkYl9jdXJzb3JzIHJldmRiX2RidHlwZSAnICtcbiAgICAgICAgJ3JldmRiX2Rpc2Nvbm5lY3QgcmV2ZGJfZXhlY3V0ZSByZXZkYl9pc2VvZiByZXZkYl9pc2JvZiByZXZkYl9tb3ZlZmlyc3QgcmV2ZGJfbW92ZWxhc3QgcmV2ZGJfbW92ZW5leHQgJyArXG4gICAgICAgICdyZXZkYl9tb3ZlcHJldiByZXZkYl9xdWVyeSByZXZkYl9xdWVyeWxpc3QgcmV2ZGJfcmVjb3JkY291bnQgcmV2ZGJfcm9sbGJhY2sgcmV2ZGJfdGFibGVuYW1lcyAnICtcbiAgICAgICAgJ3JldkdldERhdGFiYXNlRHJpdmVyUGF0aCByZXZOdW1iZXJPZlJlY29yZHMgcmV2T3BlbkRhdGFiYXNlIHJldk9wZW5EYXRhYmFzZXMgcmV2UXVlcnlEYXRhYmFzZSAnICtcbiAgICAgICAgJ3JldlF1ZXJ5RGF0YWJhc2VCbG9iIHJldlF1ZXJ5UmVzdWx0IHJldlF1ZXJ5SXNBdFN0YXJ0IHJldlF1ZXJ5SXNBdEVuZCByZXZVbml4RnJvbU1hY1BhdGggcmV2WE1MQXR0cmlidXRlICcgK1xuICAgICAgICAncmV2WE1MQXR0cmlidXRlcyByZXZYTUxBdHRyaWJ1dGVWYWx1ZXMgcmV2WE1MQ2hpbGRDb250ZW50cyByZXZYTUxDaGlsZE5hbWVzIHJldlhNTENyZWF0ZVRyZWVGcm9tRmlsZVdpdGhOYW1lc3BhY2VzICcgK1xuICAgICAgICAncmV2WE1MQ3JlYXRlVHJlZVdpdGhOYW1lc3BhY2VzIHJldlhNTERhdGFGcm9tWFBhdGhRdWVyeSByZXZYTUxFdmFsdWF0ZVhQYXRoIHJldlhNTEZpcnN0Q2hpbGQgcmV2WE1MTWF0Y2hpbmdOb2RlICcgK1xuICAgICAgICAncmV2WE1MTmV4dFNpYmxpbmcgcmV2WE1MTm9kZUNvbnRlbnRzIHJldlhNTE51bWJlck9mQ2hpbGRyZW4gcmV2WE1MUGFyZW50IHJldlhNTFByZXZpb3VzU2libGluZyAnICtcbiAgICAgICAgJ3JldlhNTFJvb3ROb2RlIHJldlhNTFJQQ19DcmVhdGVSZXF1ZXN0IHJldlhNTFJQQ19Eb2N1bWVudHMgcmV2WE1MUlBDX0Vycm9yICcgK1xuICAgICAgICAncmV2WE1MUlBDX0dldEhvc3QgcmV2WE1MUlBDX0dldE1ldGhvZCByZXZYTUxSUENfR2V0UGFyYW0gcmV2WE1MVGV4dCByZXZYTUxSUENfRXhlY3V0ZSAnICtcbiAgICAgICAgJ3JldlhNTFJQQ19HZXRQYXJhbUNvdW50IHJldlhNTFJQQ19HZXRQYXJhbU5vZGUgcmV2WE1MUlBDX0dldFBhcmFtVHlwZSByZXZYTUxSUENfR2V0UGF0aCByZXZYTUxSUENfR2V0UG9ydCAnICtcbiAgICAgICAgJ3JldlhNTFJQQ19HZXRQcm90b2NvbCByZXZYTUxSUENfR2V0UmVxdWVzdCByZXZYTUxSUENfR2V0UmVzcG9uc2UgcmV2WE1MUlBDX0dldFNvY2tldCByZXZYTUxUcmVlICcgK1xuICAgICAgICAncmV2WE1MVHJlZXMgcmV2WE1MVmFsaWRhdGVEVEQgcmV2WmlwRGVzY3JpYmVJdGVtIHJldlppcEVudW1lcmF0ZUl0ZW1zIHJldlppcE9wZW5BcmNoaXZlcyByb3VuZCBzYW1wVmFyaWFuY2UgJyArXG4gICAgICAgICdzZWMgc2VjcyBzZWNvbmRzIHNlbnRlbmNlT2Zmc2V0IHNoYTFEaWdlc3Qgc2hlbGwgc2hvcnRGaWxlUGF0aCBzaW4gc3BlY2lhbEZvbGRlclBhdGggc3FydCBzdGFuZGFyZERldmlhdGlvbiBzdGF0Um91bmQgJyArXG4gICAgICAgICdzdGREZXYgc3VtIHN5c0Vycm9yIHN5c3RlbVZlcnNpb24gdGFuIHRlbXBOYW1lIHRleHREZWNvZGUgdGV4dEVuY29kZSB0aWNrIHRpY2tzIHRpbWUgdG8gdG9rZW5PZmZzZXQgdG9Mb3dlciB0b1VwcGVyICcgK1xuICAgICAgICAndHJhbnNwb3NlIHRydWV3b3JkT2Zmc2V0IHRydW5jIHVuaURlY29kZSB1bmlFbmNvZGUgdXBwZXIgVVJMRGVjb2RlIFVSTEVuY29kZSBVUkxTdGF0dXMgdXVpZCB2YWx1ZSB2YXJpYWJsZU5hbWVzICcgK1xuICAgICAgICAndmFyaWFuY2UgdmVyc2lvbiB3YWl0RGVwdGggd2Vla2RheU5hbWVzIHdvcmRPZmZzZXQgeHNsdEFwcGx5U3R5bGVzaGVldCB4c2x0QXBwbHlTdHlsZXNoZWV0RnJvbUZpbGUgeHNsdExvYWRTdHlsZXNoZWV0ICcgK1xuICAgICAgICAneHNsdExvYWRTdHlsZXNoZWV0RnJvbUZpbGUgYWRkIGJyZWFrcG9pbnQgY2FuY2VsIGNsZWFyIGxvY2FsIHZhcmlhYmxlIGZpbGUgd29yZCBsaW5lIGZvbGRlciBkaXJlY3RvcnkgVVJMIGNsb3NlIHNvY2tldCBwcm9jZXNzICcgK1xuICAgICAgICAnY29tYmluZSBjb25zdGFudCBjb252ZXJ0IGNyZWF0ZSBuZXcgYWxpYXMgZm9sZGVyIGRpcmVjdG9yeSBkZWNyeXB0IGRlbGV0ZSB2YXJpYWJsZSB3b3JkIGxpbmUgZm9sZGVyICcgK1xuICAgICAgICAnZGlyZWN0b3J5IFVSTCBkaXNwYXRjaCBkaXZpZGUgZG8gZW5jcnlwdCBmaWx0ZXIgZ2V0IGluY2x1ZGUgaW50ZXJzZWN0IGtpbGwgbGliVVJMRG93bmxvYWRUb0ZpbGUgJyArXG4gICAgICAgICdsaWJVUkxGb2xsb3dIdHRwUmVkaXJlY3RzIGxpYlVSTGZ0cFVwbG9hZCBsaWJVUkxmdHBVcGxvYWRGaWxlIGxpYlVSTHJlc2V0QWxsIGxpYlVybFNldEF1dGhDYWxsYmFjayBsaWJVUkxTZXREcml2ZXIgJyArXG4gICAgICAgICdsaWJVUkxTZXRDdXN0b21IVFRQSGVhZGVycyBsaWJVcmxTZXRFeHBlY3QxMDAgbGliVVJMU2V0RlRQTGlzdENvbW1hbmQgbGliVVJMU2V0RlRQTW9kZSBsaWJVUkxTZXRGVFBTdG9wVGltZSAnICtcbiAgICAgICAgJ2xpYlVSTFNldFN0YXR1c0NhbGxiYWNrIGxvYWQgZXh0ZW5zaW9uIGxvYWRlZEV4dGVuc2lvbnMgbXVsdGlwbHkgc29ja2V0IHByZXBhcmUgcHJvY2VzcyBwb3N0IHNlZWsgcmVsIHJlbGF0aXZlIHJlYWQgZnJvbSBwcm9jZXNzIHJlbmFtZSAnICtcbiAgICAgICAgJ3JlcGxhY2UgcmVxdWlyZSByZXNldEFsbCByZXNvbHZlIHJldkFkZFhNTE5vZGUgcmV2QXBwZW5kWE1MIHJldkNsb3NlQ3Vyc29yIHJldkNsb3NlRGF0YWJhc2UgcmV2Q29tbWl0RGF0YWJhc2UgJyArXG4gICAgICAgICdyZXZDb3B5RmlsZSByZXZDb3B5Rm9sZGVyIHJldkNvcHlYTUxOb2RlIHJldkRlbGV0ZUZvbGRlciByZXZEZWxldGVYTUxOb2RlIHJldkRlbGV0ZUFsbFhNTFRyZWVzICcgK1xuICAgICAgICAncmV2RGVsZXRlWE1MVHJlZSByZXZFeGVjdXRlU1FMIHJldkdvVVJMIHJldkluc2VydFhNTE5vZGUgcmV2TW92ZUZvbGRlciByZXZNb3ZlVG9GaXJzdFJlY29yZCByZXZNb3ZlVG9MYXN0UmVjb3JkICcgK1xuICAgICAgICAncmV2TW92ZVRvTmV4dFJlY29yZCByZXZNb3ZlVG9QcmV2aW91c1JlY29yZCByZXZNb3ZlVG9SZWNvcmQgcmV2TW92ZVhNTE5vZGUgcmV2UHV0SW50b1hNTE5vZGUgcmV2Um9sbEJhY2tEYXRhYmFzZSAnICtcbiAgICAgICAgJ3JldlNldERhdGFiYXNlRHJpdmVyUGF0aCByZXZTZXRYTUxBdHRyaWJ1dGUgcmV2WE1MUlBDX0FkZFBhcmFtIHJldlhNTFJQQ19EZWxldGVBbGxEb2N1bWVudHMgcmV2WE1MQWRkRFREICcgK1xuICAgICAgICAncmV2WE1MUlBDX0ZyZWUgcmV2WE1MUlBDX0ZyZWVBbGwgcmV2WE1MUlBDX0RlbGV0ZURvY3VtZW50IHJldlhNTFJQQ19EZWxldGVQYXJhbSByZXZYTUxSUENfU2V0SG9zdCAnICtcbiAgICAgICAgJ3JldlhNTFJQQ19TZXRNZXRob2QgcmV2WE1MUlBDX1NldFBvcnQgcmV2WE1MUlBDX1NldFByb3RvY29sIHJldlhNTFJQQ19TZXRTb2NrZXQgcmV2WmlwQWRkSXRlbVdpdGhEYXRhICcgK1xuICAgICAgICAncmV2WmlwQWRkSXRlbVdpdGhGaWxlIHJldlppcEFkZFVuY29tcHJlc3NlZEl0ZW1XaXRoRGF0YSByZXZaaXBBZGRVbmNvbXByZXNzZWRJdGVtV2l0aEZpbGUgcmV2WmlwQ2FuY2VsICcgK1xuICAgICAgICAncmV2WmlwQ2xvc2VBcmNoaXZlIHJldlppcERlbGV0ZUl0ZW0gcmV2WmlwRXh0cmFjdEl0ZW1Ub0ZpbGUgcmV2WmlwRXh0cmFjdEl0ZW1Ub1ZhcmlhYmxlIHJldlppcFNldFByb2dyZXNzQ2FsbGJhY2sgJyArXG4gICAgICAgICdyZXZaaXBSZW5hbWVJdGVtIHJldlppcFJlcGxhY2VJdGVtV2l0aERhdGEgcmV2WmlwUmVwbGFjZUl0ZW1XaXRoRmlsZSByZXZaaXBPcGVuQXJjaGl2ZSBzZW5kIHNldCBzb3J0IHNwbGl0IHN0YXJ0IHN0b3AgJyArXG4gICAgICAgICdzdWJ0cmFjdCBzeW1tZXRyaWMgdW5pb24gdW5sb2FkIHZlY3RvckRvdFByb2R1Y3Qgd2FpdCB3cml0ZSdcbiAgICB9LFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBWQVJJQUJMRSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAna2V5d29yZCcsXG4gICAgICAgIGJlZ2luOiAnXFxcXGJlbmRcXFxcc2lmXFxcXGInXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdmdW5jdGlvbicsXG4gICAgICAgIGJlZ2luS2V5d29yZHM6ICdmdW5jdGlvbicsXG4gICAgICAgIGVuZDogJyQnLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIFZBUklBQkxFLFxuICAgICAgICAgIFRJVExFMixcbiAgICAgICAgICBobGpzLkFQT1NfU1RSSU5HX01PREUsXG4gICAgICAgICAgaGxqcy5RVU9URV9TVFJJTkdfTU9ERSxcbiAgICAgICAgICBobGpzLkJJTkFSWV9OVU1CRVJfTU9ERSxcbiAgICAgICAgICBobGpzLkNfTlVNQkVSX01PREUsXG4gICAgICAgICAgVElUTEUxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2Z1bmN0aW9uJyxcbiAgICAgICAgYmVnaW46ICdcXFxcYmVuZFxcXFxzKycsXG4gICAgICAgIGVuZDogJyQnLFxuICAgICAgICBrZXl3b3JkczogJ2VuZCcsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgVElUTEUyLFxuICAgICAgICAgIFRJVExFMVxuICAgICAgICBdLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luS2V5d29yZHM6ICdjb21tYW5kIG9uJyxcbiAgICAgICAgZW5kOiAnJCcsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgVkFSSUFCTEUsXG4gICAgICAgICAgVElUTEUyLFxuICAgICAgICAgIGhsanMuQVBPU19TVFJJTkdfTU9ERSxcbiAgICAgICAgICBobGpzLlFVT1RFX1NUUklOR19NT0RFLFxuICAgICAgICAgIGhsanMuQklOQVJZX05VTUJFUl9NT0RFLFxuICAgICAgICAgIGhsanMuQ19OVU1CRVJfTU9ERSxcbiAgICAgICAgICBUSVRMRTFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW46ICc8XFxcXD8ocmV2fGxjfGxpdmVjb2RlKScsXG4gICAgICAgICAgICByZWxldmFuY2U6IDEwXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogJzxcXFxcPydcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luOiAnXFxcXD8+J1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIGhsanMuQVBPU19TVFJJTkdfTU9ERSxcbiAgICAgIGhsanMuUVVPVEVfU1RSSU5HX01PREUsXG4gICAgICBobGpzLkJJTkFSWV9OVU1CRVJfTU9ERSxcbiAgICAgIGhsanMuQ19OVU1CRVJfTU9ERSxcbiAgICAgIFRJVExFMVxuICAgIF0uY29uY2F0KENPTU1FTlRfTU9ERVMpLFxuICAgIGlsbGVnYWw6ICc7JHxeXFxcXFt8Xj18JnxcXFxceydcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXZlY29kZXNlcnZlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=