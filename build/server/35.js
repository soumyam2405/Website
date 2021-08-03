exports.ids = [35];
exports.modules = {

/***/ "./node_modules/highlight.js/lib/languages/crmsh.js":
/*!**********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/crmsh.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: crmsh
Author: Kristoffer Gronlund <kgronlund@suse.com>
Website: http://crmsh.github.io
Description: Syntax Highlighting for the crmsh DSL
Category: config
*/

/** @type LanguageFn */
function crmsh(hljs) {
  const RESOURCES = 'primitive rsc_template';
  const COMMANDS = 'group clone ms master location colocation order fencing_topology ' +
      'rsc_ticket acl_target acl_group user role ' +
      'tag xml';
  const PROPERTY_SETS = 'property rsc_defaults op_defaults';
  const KEYWORDS = 'params meta operations op rule attributes utilization';
  const OPERATORS = 'read write deny defined not_defined in_range date spec in ' +
      'ref reference attribute type xpath version and or lt gt tag ' +
      'lte gte eq ne \\';
  const TYPES = 'number string';
  const LITERALS = 'Master Started Slave Stopped start promote demote stop monitor true false';

  return {
    name: 'crmsh',
    aliases: [
      'crm',
      'pcmk'
    ],
    case_insensitive: true,
    keywords: {
      keyword: KEYWORDS + ' ' + OPERATORS + ' ' + TYPES,
      literal: LITERALS
    },
    contains: [
      hljs.HASH_COMMENT_MODE,
      {
        beginKeywords: 'node',
        starts: {
          end: '\\s*([\\w_-]+:)?',
          starts: {
            className: 'title',
            end: '\\s*[\\$\\w_][\\w_-]*'
          }
        }
      },
      {
        beginKeywords: RESOURCES,
        starts: {
          className: 'title',
          end: '\\s*[\\$\\w_][\\w_-]*',
          starts: {
            end: '\\s*@?[\\w_][\\w_\\.:-]*'
          }
        }
      },
      {
        begin: '\\b(' + COMMANDS.split(' ').join('|') + ')\\s+',
        keywords: COMMANDS,
        starts: {
          className: 'title',
          end: '[\\$\\w_][\\w_-]*'
        }
      },
      {
        beginKeywords: PROPERTY_SETS,
        starts: {
          className: 'title',
          end: '\\s*([\\w_-]+:)?'
        }
      },
      hljs.QUOTE_STRING_MODE,
      {
        className: 'meta',
        begin: '(ocf|systemd|service|lsb):[\\w_:-]+',
        relevance: 0
      },
      {
        className: 'number',
        begin: '\\b\\d+(\\.\\d+)?(ms|s|h|m)?',
        relevance: 0
      },
      {
        className: 'literal',
        begin: '[-]?(infinity|inf)',
        relevance: 0
      },
      {
        className: 'attr',
        begin: /([A-Za-z$_#][\w_-]+)=/,
        relevance: 0
      },
      {
        className: 'tag',
        begin: '</?',
        end: '/?>',
        relevance: 0
      }
    ]
  };
}

module.exports = crmsh;


/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvY3Jtc2guanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiIzNS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5MYW5ndWFnZTogY3Jtc2hcbkF1dGhvcjogS3Jpc3RvZmZlciBHcm9ubHVuZCA8a2dyb25sdW5kQHN1c2UuY29tPlxuV2Vic2l0ZTogaHR0cDovL2NybXNoLmdpdGh1Yi5pb1xuRGVzY3JpcHRpb246IFN5bnRheCBIaWdobGlnaHRpbmcgZm9yIHRoZSBjcm1zaCBEU0xcbkNhdGVnb3J5OiBjb25maWdcbiovXG5cbi8qKiBAdHlwZSBMYW5ndWFnZUZuICovXG5mdW5jdGlvbiBjcm1zaChobGpzKSB7XG4gIGNvbnN0IFJFU09VUkNFUyA9ICdwcmltaXRpdmUgcnNjX3RlbXBsYXRlJztcbiAgY29uc3QgQ09NTUFORFMgPSAnZ3JvdXAgY2xvbmUgbXMgbWFzdGVyIGxvY2F0aW9uIGNvbG9jYXRpb24gb3JkZXIgZmVuY2luZ190b3BvbG9neSAnICtcbiAgICAgICdyc2NfdGlja2V0IGFjbF90YXJnZXQgYWNsX2dyb3VwIHVzZXIgcm9sZSAnICtcbiAgICAgICd0YWcgeG1sJztcbiAgY29uc3QgUFJPUEVSVFlfU0VUUyA9ICdwcm9wZXJ0eSByc2NfZGVmYXVsdHMgb3BfZGVmYXVsdHMnO1xuICBjb25zdCBLRVlXT1JEUyA9ICdwYXJhbXMgbWV0YSBvcGVyYXRpb25zIG9wIHJ1bGUgYXR0cmlidXRlcyB1dGlsaXphdGlvbic7XG4gIGNvbnN0IE9QRVJBVE9SUyA9ICdyZWFkIHdyaXRlIGRlbnkgZGVmaW5lZCBub3RfZGVmaW5lZCBpbl9yYW5nZSBkYXRlIHNwZWMgaW4gJyArXG4gICAgICAncmVmIHJlZmVyZW5jZSBhdHRyaWJ1dGUgdHlwZSB4cGF0aCB2ZXJzaW9uIGFuZCBvciBsdCBndCB0YWcgJyArXG4gICAgICAnbHRlIGd0ZSBlcSBuZSBcXFxcJztcbiAgY29uc3QgVFlQRVMgPSAnbnVtYmVyIHN0cmluZyc7XG4gIGNvbnN0IExJVEVSQUxTID0gJ01hc3RlciBTdGFydGVkIFNsYXZlIFN0b3BwZWQgc3RhcnQgcHJvbW90ZSBkZW1vdGUgc3RvcCBtb25pdG9yIHRydWUgZmFsc2UnO1xuXG4gIHJldHVybiB7XG4gICAgbmFtZTogJ2NybXNoJyxcbiAgICBhbGlhc2VzOiBbXG4gICAgICAnY3JtJyxcbiAgICAgICdwY21rJ1xuICAgIF0sXG4gICAgY2FzZV9pbnNlbnNpdGl2ZTogdHJ1ZSxcbiAgICBrZXl3b3Jkczoge1xuICAgICAga2V5d29yZDogS0VZV09SRFMgKyAnICcgKyBPUEVSQVRPUlMgKyAnICcgKyBUWVBFUyxcbiAgICAgIGxpdGVyYWw6IExJVEVSQUxTXG4gICAgfSxcbiAgICBjb250YWluczogW1xuICAgICAgaGxqcy5IQVNIX0NPTU1FTlRfTU9ERSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW5LZXl3b3JkczogJ25vZGUnLFxuICAgICAgICBzdGFydHM6IHtcbiAgICAgICAgICBlbmQ6ICdcXFxccyooW1xcXFx3Xy1dKzopPycsXG4gICAgICAgICAgc3RhcnRzOiB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICd0aXRsZScsXG4gICAgICAgICAgICBlbmQ6ICdcXFxccypbXFxcXCRcXFxcd19dW1xcXFx3Xy1dKidcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luS2V5d29yZHM6IFJFU09VUkNFUyxcbiAgICAgICAgc3RhcnRzOiB7XG4gICAgICAgICAgY2xhc3NOYW1lOiAndGl0bGUnLFxuICAgICAgICAgIGVuZDogJ1xcXFxzKltcXFxcJFxcXFx3X11bXFxcXHdfLV0qJyxcbiAgICAgICAgICBzdGFydHM6IHtcbiAgICAgICAgICAgIGVuZDogJ1xcXFxzKkA/W1xcXFx3X11bXFxcXHdfXFxcXC46LV0qJ1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICdcXFxcYignICsgQ09NTUFORFMuc3BsaXQoJyAnKS5qb2luKCd8JykgKyAnKVxcXFxzKycsXG4gICAgICAgIGtleXdvcmRzOiBDT01NQU5EUyxcbiAgICAgICAgc3RhcnRzOiB7XG4gICAgICAgICAgY2xhc3NOYW1lOiAndGl0bGUnLFxuICAgICAgICAgIGVuZDogJ1tcXFxcJFxcXFx3X11bXFxcXHdfLV0qJ1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbktleXdvcmRzOiBQUk9QRVJUWV9TRVRTLFxuICAgICAgICBzdGFydHM6IHtcbiAgICAgICAgICBjbGFzc05hbWU6ICd0aXRsZScsXG4gICAgICAgICAgZW5kOiAnXFxcXHMqKFtcXFxcd18tXSs6KT8nXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBobGpzLlFVT1RFX1NUUklOR19NT0RFLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICAgICAgYmVnaW46ICcob2NmfHN5c3RlbWR8c2VydmljZXxsc2IpOltcXFxcd186LV0rJyxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdudW1iZXInLFxuICAgICAgICBiZWdpbjogJ1xcXFxiXFxcXGQrKFxcXFwuXFxcXGQrKT8obXN8c3xofG0pPycsXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbGl0ZXJhbCcsXG4gICAgICAgIGJlZ2luOiAnWy1dPyhpbmZpbml0eXxpbmYpJyxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdhdHRyJyxcbiAgICAgICAgYmVnaW46IC8oW0EtWmEteiRfI11bXFx3Xy1dKyk9LyxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICd0YWcnLFxuICAgICAgICBiZWdpbjogJzwvPycsXG4gICAgICAgIGVuZDogJy8/PicsXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfVxuICAgIF1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcm1zaDtcbiJdLCJzb3VyY2VSb290IjoiIn0=