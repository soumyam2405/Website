exports.ids = [86];
exports.modules = {

/***/ "./node_modules/highlight.js/lib/languages/jboss-cli.js":
/*!**************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/jboss-cli.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 Language: JBoss CLI
 Author: Raphaël Parrëe <rparree@edc4it.com>
 Description: language definition jboss cli
 Website: https://docs.jboss.org/author/display/WFLY/Command+Line+Interface
 Category: config
 */

function jbossCli(hljs) {
  const PARAM = {
    begin: /[\w-]+ *=/,
    returnBegin: true,
    relevance: 0,
    contains: [
      {
        className: 'attr',
        begin: /[\w-]+/
      }
    ]
  };
  const PARAMSBLOCK = {
    className: 'params',
    begin: /\(/,
    end: /\)/,
    contains: [PARAM],
    relevance: 0
  };
  const OPERATION = {
    className: 'function',
    begin: /:[\w\-.]+/,
    relevance: 0
  };
  const PATH = {
    className: 'string',
    begin: /\B([\/.])[\w\-.\/=]+/
  };
  const COMMAND_PARAMS = {
    className: 'params',
    begin: /--[\w\-=\/]+/
  };
  return {
    name: 'JBoss CLI',
    aliases: ['wildfly-cli'],
    keywords: {
      $pattern: '[a-z\-]+',
      keyword: 'alias batch cd clear command connect connection-factory connection-info data-source deploy ' +
      'deployment-info deployment-overlay echo echo-dmr help history if jdbc-driver-info jms-queue|20 jms-topic|20 ls ' +
      'patch pwd quit read-attribute read-operation reload rollout-plan run-batch set shutdown try unalias ' +
      'undeploy unset version xa-data-source', // module
      literal: 'true false'
    },
    contains: [
      hljs.HASH_COMMENT_MODE,
      hljs.QUOTE_STRING_MODE,
      COMMAND_PARAMS,
      OPERATION,
      PATH,
      PARAMSBLOCK
    ]
  };
}

module.exports = jbossCli;


/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvamJvc3MtY2xpLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiODYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuIExhbmd1YWdlOiBKQm9zcyBDTElcbiBBdXRob3I6IFJhcGhhw6tsIFBhcnLDq2UgPHJwYXJyZWVAZWRjNGl0LmNvbT5cbiBEZXNjcmlwdGlvbjogbGFuZ3VhZ2UgZGVmaW5pdGlvbiBqYm9zcyBjbGlcbiBXZWJzaXRlOiBodHRwczovL2RvY3MuamJvc3Mub3JnL2F1dGhvci9kaXNwbGF5L1dGTFkvQ29tbWFuZCtMaW5lK0ludGVyZmFjZVxuIENhdGVnb3J5OiBjb25maWdcbiAqL1xuXG5mdW5jdGlvbiBqYm9zc0NsaShobGpzKSB7XG4gIGNvbnN0IFBBUkFNID0ge1xuICAgIGJlZ2luOiAvW1xcdy1dKyAqPS8sXG4gICAgcmV0dXJuQmVnaW46IHRydWUsXG4gICAgcmVsZXZhbmNlOiAwLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2F0dHInLFxuICAgICAgICBiZWdpbjogL1tcXHctXSsvXG4gICAgICB9XG4gICAgXVxuICB9O1xuICBjb25zdCBQQVJBTVNCTE9DSyA9IHtcbiAgICBjbGFzc05hbWU6ICdwYXJhbXMnLFxuICAgIGJlZ2luOiAvXFwoLyxcbiAgICBlbmQ6IC9cXCkvLFxuICAgIGNvbnRhaW5zOiBbUEFSQU1dLFxuICAgIHJlbGV2YW5jZTogMFxuICB9O1xuICBjb25zdCBPUEVSQVRJT04gPSB7XG4gICAgY2xhc3NOYW1lOiAnZnVuY3Rpb24nLFxuICAgIGJlZ2luOiAvOltcXHdcXC0uXSsvLFxuICAgIHJlbGV2YW5jZTogMFxuICB9O1xuICBjb25zdCBQQVRIID0ge1xuICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgYmVnaW46IC9cXEIoW1xcLy5dKVtcXHdcXC0uXFwvPV0rL1xuICB9O1xuICBjb25zdCBDT01NQU5EX1BBUkFNUyA9IHtcbiAgICBjbGFzc05hbWU6ICdwYXJhbXMnLFxuICAgIGJlZ2luOiAvLS1bXFx3XFwtPVxcL10rL1xuICB9O1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICdKQm9zcyBDTEknLFxuICAgIGFsaWFzZXM6IFsnd2lsZGZseS1jbGknXSxcbiAgICBrZXl3b3Jkczoge1xuICAgICAgJHBhdHRlcm46ICdbYS16XFwtXSsnLFxuICAgICAga2V5d29yZDogJ2FsaWFzIGJhdGNoIGNkIGNsZWFyIGNvbW1hbmQgY29ubmVjdCBjb25uZWN0aW9uLWZhY3RvcnkgY29ubmVjdGlvbi1pbmZvIGRhdGEtc291cmNlIGRlcGxveSAnICtcbiAgICAgICdkZXBsb3ltZW50LWluZm8gZGVwbG95bWVudC1vdmVybGF5IGVjaG8gZWNoby1kbXIgaGVscCBoaXN0b3J5IGlmIGpkYmMtZHJpdmVyLWluZm8gam1zLXF1ZXVlfDIwIGptcy10b3BpY3wyMCBscyAnICtcbiAgICAgICdwYXRjaCBwd2QgcXVpdCByZWFkLWF0dHJpYnV0ZSByZWFkLW9wZXJhdGlvbiByZWxvYWQgcm9sbG91dC1wbGFuIHJ1bi1iYXRjaCBzZXQgc2h1dGRvd24gdHJ5IHVuYWxpYXMgJyArXG4gICAgICAndW5kZXBsb3kgdW5zZXQgdmVyc2lvbiB4YS1kYXRhLXNvdXJjZScsIC8vIG1vZHVsZVxuICAgICAgbGl0ZXJhbDogJ3RydWUgZmFsc2UnXG4gICAgfSxcbiAgICBjb250YWluczogW1xuICAgICAgaGxqcy5IQVNIX0NPTU1FTlRfTU9ERSxcbiAgICAgIGhsanMuUVVPVEVfU1RSSU5HX01PREUsXG4gICAgICBDT01NQU5EX1BBUkFNUyxcbiAgICAgIE9QRVJBVElPTixcbiAgICAgIFBBVEgsXG4gICAgICBQQVJBTVNCTE9DS1xuICAgIF1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBqYm9zc0NsaTtcbiJdLCJzb3VyY2VSb290IjoiIn0=