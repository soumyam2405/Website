(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[87],{

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

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2pib3NzLWNsaS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoic3RhdGljL2NodW5rcy84Ny5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gTGFuZ3VhZ2U6IEpCb3NzIENMSVxuIEF1dGhvcjogUmFwaGHDq2wgUGFycsOrZSA8cnBhcnJlZUBlZGM0aXQuY29tPlxuIERlc2NyaXB0aW9uOiBsYW5ndWFnZSBkZWZpbml0aW9uIGpib3NzIGNsaVxuIFdlYnNpdGU6IGh0dHBzOi8vZG9jcy5qYm9zcy5vcmcvYXV0aG9yL2Rpc3BsYXkvV0ZMWS9Db21tYW5kK0xpbmUrSW50ZXJmYWNlXG4gQ2F0ZWdvcnk6IGNvbmZpZ1xuICovXG5cbmZ1bmN0aW9uIGpib3NzQ2xpKGhsanMpIHtcbiAgY29uc3QgUEFSQU0gPSB7XG4gICAgYmVnaW46IC9bXFx3LV0rICo9LyxcbiAgICByZXR1cm5CZWdpbjogdHJ1ZSxcbiAgICByZWxldmFuY2U6IDAsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnYXR0cicsXG4gICAgICAgIGJlZ2luOiAvW1xcdy1dKy9cbiAgICAgIH1cbiAgICBdXG4gIH07XG4gIGNvbnN0IFBBUkFNU0JMT0NLID0ge1xuICAgIGNsYXNzTmFtZTogJ3BhcmFtcycsXG4gICAgYmVnaW46IC9cXCgvLFxuICAgIGVuZDogL1xcKS8sXG4gICAgY29udGFpbnM6IFtQQVJBTV0sXG4gICAgcmVsZXZhbmNlOiAwXG4gIH07XG4gIGNvbnN0IE9QRVJBVElPTiA9IHtcbiAgICBjbGFzc05hbWU6ICdmdW5jdGlvbicsXG4gICAgYmVnaW46IC86W1xcd1xcLS5dKy8sXG4gICAgcmVsZXZhbmNlOiAwXG4gIH07XG4gIGNvbnN0IFBBVEggPSB7XG4gICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICBiZWdpbjogL1xcQihbXFwvLl0pW1xcd1xcLS5cXC89XSsvXG4gIH07XG4gIGNvbnN0IENPTU1BTkRfUEFSQU1TID0ge1xuICAgIGNsYXNzTmFtZTogJ3BhcmFtcycsXG4gICAgYmVnaW46IC8tLVtcXHdcXC09XFwvXSsvXG4gIH07XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ0pCb3NzIENMSScsXG4gICAgYWxpYXNlczogWyd3aWxkZmx5LWNsaSddLFxuICAgIGtleXdvcmRzOiB7XG4gICAgICAkcGF0dGVybjogJ1thLXpcXC1dKycsXG4gICAgICBrZXl3b3JkOiAnYWxpYXMgYmF0Y2ggY2QgY2xlYXIgY29tbWFuZCBjb25uZWN0IGNvbm5lY3Rpb24tZmFjdG9yeSBjb25uZWN0aW9uLWluZm8gZGF0YS1zb3VyY2UgZGVwbG95ICcgK1xuICAgICAgJ2RlcGxveW1lbnQtaW5mbyBkZXBsb3ltZW50LW92ZXJsYXkgZWNobyBlY2hvLWRtciBoZWxwIGhpc3RvcnkgaWYgamRiYy1kcml2ZXItaW5mbyBqbXMtcXVldWV8MjAgam1zLXRvcGljfDIwIGxzICcgK1xuICAgICAgJ3BhdGNoIHB3ZCBxdWl0IHJlYWQtYXR0cmlidXRlIHJlYWQtb3BlcmF0aW9uIHJlbG9hZCByb2xsb3V0LXBsYW4gcnVuLWJhdGNoIHNldCBzaHV0ZG93biB0cnkgdW5hbGlhcyAnICtcbiAgICAgICd1bmRlcGxveSB1bnNldCB2ZXJzaW9uIHhhLWRhdGEtc291cmNlJywgLy8gbW9kdWxlXG4gICAgICBsaXRlcmFsOiAndHJ1ZSBmYWxzZSdcbiAgICB9LFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBobGpzLkhBU0hfQ09NTUVOVF9NT0RFLFxuICAgICAgaGxqcy5RVU9URV9TVFJJTkdfTU9ERSxcbiAgICAgIENPTU1BTkRfUEFSQU1TLFxuICAgICAgT1BFUkFUSU9OLFxuICAgICAgUEFUSCxcbiAgICAgIFBBUkFNU0JMT0NLXG4gICAgXVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGpib3NzQ2xpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==