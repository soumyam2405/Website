exports.ids = [148];
exports.modules = {

/***/ "./node_modules/highlight.js/lib/languages/routeros.js":
/*!*************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/routeros.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Microtik RouterOS script
Author: Ivan Dementev <ivan_div@mail.ru>
Description: Scripting host provides a way to automate some router maintenance tasks by means of executing user-defined scripts bounded to some event occurrence
Website: https://wiki.mikrotik.com/wiki/Manual:Scripting
*/

// Colors from RouterOS terminal:
//   green        - #0E9A00
//   teal         - #0C9A9A
//   purple       - #99069A
//   light-brown  - #9A9900

function routeros(hljs) {
  const STATEMENTS = 'foreach do while for if from to step else on-error and or not in';

  // Global commands: Every global command should start with ":" token, otherwise it will be treated as variable.
  const GLOBAL_COMMANDS = 'global local beep delay put len typeof pick log time set find environment terminal error execute parse resolve toarray tobool toid toip toip6 tonum tostr totime';

  // Common commands: Following commands available from most sub-menus:
  const COMMON_COMMANDS = 'add remove enable disable set get print export edit find run debug error info warning';

  const LITERALS = 'true false yes no nothing nil null';

  const OBJECTS = 'traffic-flow traffic-generator firewall scheduler aaa accounting address-list address align area bandwidth-server bfd bgp bridge client clock community config connection console customer default dhcp-client dhcp-server discovery dns e-mail ethernet filter firmware gps graphing group hardware health hotspot identity igmp-proxy incoming instance interface ip ipsec ipv6 irq l2tp-server lcd ldp logging mac-server mac-winbox mangle manual mirror mme mpls nat nd neighbor network note ntp ospf ospf-v3 ovpn-server page peer pim ping policy pool port ppp pppoe-client pptp-server prefix profile proposal proxy queue radius resource rip ripng route routing screen script security-profiles server service service-port settings shares smb sms sniffer snmp snooper socks sstp-server system tool tracking type upgrade upnp user-manager users user vlan secret vrrp watchdog web-access wireless pptp pppoe lan wan layer7-protocol lease simple raw';

  const VAR = {
    className: 'variable',
    variants: [
      {
        begin: /\$[\w\d#@][\w\d_]*/
      },
      {
        begin: /\$\{(.*?)\}/
      }
    ]
  };

  const QUOTE_STRING = {
    className: 'string',
    begin: /"/,
    end: /"/,
    contains: [
      hljs.BACKSLASH_ESCAPE,
      VAR,
      {
        className: 'variable',
        begin: /\$\(/,
        end: /\)/,
        contains: [ hljs.BACKSLASH_ESCAPE ]
      }
    ]
  };

  const APOS_STRING = {
    className: 'string',
    begin: /'/,
    end: /'/
  };

  return {
    name: 'Microtik RouterOS script',
    aliases: [
      'routeros',
      'mikrotik'
    ],
    case_insensitive: true,
    keywords: {
      $pattern: /:?[\w-]+/,
      literal: LITERALS,
      keyword: STATEMENTS + ' :' + STATEMENTS.split(' ').join(' :') + ' :' + GLOBAL_COMMANDS.split(' ').join(' :')
    },
    contains: [
      { // illegal syntax
        variants: [
          { // -- comment
            begin: /\/\*/,
            end: /\*\//
          },
          { // Stan comment
            begin: /\/\//,
            end: /$/
          },
          { // HTML tags
            begin: /<\//,
            end: />/
          }
        ],
        illegal: /./
      },
      hljs.COMMENT('^#', '$'),
      QUOTE_STRING,
      APOS_STRING,
      VAR,
      // attribute=value
      {
        // > is to avoid matches with => in other grammars
        begin: /[\w-]+=([^\s{}[\]()>]+)/,
        relevance: 0,
        returnBegin: true,
        contains: [
          {
            className: 'attribute',
            begin: /[^=]+/
          },
          {
            begin: /=/,
            endsWithParent: true,
            relevance: 0,
            contains: [
              QUOTE_STRING,
              APOS_STRING,
              VAR,
              {
                className: 'literal',
                begin: '\\b(' + LITERALS.split(' ').join('|') + ')\\b'
              },
              {
                // Do not format unclassified values. Needed to exclude highlighting of values as built_in.
                begin: /("[^"]*"|[^\s{}[\]]+)/
              }
              /*
              {
                // IPv4 addresses and subnets
                className: 'number',
                variants: [
                  {begin: IPADDR_wBITMASK+'(,'+IPADDR_wBITMASK+')*'}, //192.168.0.0/24,1.2.3.0/24
                  {begin: IPADDR+'-'+IPADDR},       // 192.168.0.1-192.168.0.3
                  {begin: IPADDR+'(,'+IPADDR+')*'}, // 192.168.0.1,192.168.0.34,192.168.24.1,192.168.0.1
                ]
              },
              {
                // MAC addresses and DHCP Client IDs
                className: 'number',
                begin: /\b(1:)?([0-9A-Fa-f]{1,2}[:-]){5}([0-9A-Fa-f]){1,2}\b/,
              },
              */
            ]
          }
        ]
      },
      {
        // HEX values
        className: 'number',
        begin: /\*[0-9a-fA-F]+/
      },
      {
        begin: '\\b(' + COMMON_COMMANDS.split(' ').join('|') + ')([\\s[(\\]|])',
        returnBegin: true,
        contains: [
          {
            className: 'builtin-name', // 'function',
            begin: /\w+/
          }
        ]
      },
      {
        className: 'built_in',
        variants: [
          {
            begin: '(\\.\\./|/|\\s)((' + OBJECTS.split(' ').join('|') + ');?\\s)+'
          },
          {
            begin: /\.\./,
            relevance: 0
          }
        ]
      }
    ]
  };
}

module.exports = routeros;


/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvcm91dGVyb3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLE9BQU87QUFDUDtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsV0FBVztBQUNYLFdBQVc7QUFDWDtBQUNBO0FBQ0EsV0FBVztBQUNYLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGlEQUFpRDtBQUNwRSxtQkFBbUIseUJBQXlCO0FBQzVDLG1CQUFtQiwrQkFBK0I7QUFDbEQ7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLElBQUksTUFBTSxFQUFFLGNBQWMsSUFBSTtBQUMxRSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkVBQTJFO0FBQzNFLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiMTQ4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBNaWNyb3RpayBSb3V0ZXJPUyBzY3JpcHRcbkF1dGhvcjogSXZhbiBEZW1lbnRldiA8aXZhbl9kaXZAbWFpbC5ydT5cbkRlc2NyaXB0aW9uOiBTY3JpcHRpbmcgaG9zdCBwcm92aWRlcyBhIHdheSB0byBhdXRvbWF0ZSBzb21lIHJvdXRlciBtYWludGVuYW5jZSB0YXNrcyBieSBtZWFucyBvZiBleGVjdXRpbmcgdXNlci1kZWZpbmVkIHNjcmlwdHMgYm91bmRlZCB0byBzb21lIGV2ZW50IG9jY3VycmVuY2VcbldlYnNpdGU6IGh0dHBzOi8vd2lraS5taWtyb3Rpay5jb20vd2lraS9NYW51YWw6U2NyaXB0aW5nXG4qL1xuXG4vLyBDb2xvcnMgZnJvbSBSb3V0ZXJPUyB0ZXJtaW5hbDpcbi8vICAgZ3JlZW4gICAgICAgIC0gIzBFOUEwMFxuLy8gICB0ZWFsICAgICAgICAgLSAjMEM5QTlBXG4vLyAgIHB1cnBsZSAgICAgICAtICM5OTA2OUFcbi8vICAgbGlnaHQtYnJvd24gIC0gIzlBOTkwMFxuXG5mdW5jdGlvbiByb3V0ZXJvcyhobGpzKSB7XG4gIGNvbnN0IFNUQVRFTUVOVFMgPSAnZm9yZWFjaCBkbyB3aGlsZSBmb3IgaWYgZnJvbSB0byBzdGVwIGVsc2Ugb24tZXJyb3IgYW5kIG9yIG5vdCBpbic7XG5cbiAgLy8gR2xvYmFsIGNvbW1hbmRzOiBFdmVyeSBnbG9iYWwgY29tbWFuZCBzaG91bGQgc3RhcnQgd2l0aCBcIjpcIiB0b2tlbiwgb3RoZXJ3aXNlIGl0IHdpbGwgYmUgdHJlYXRlZCBhcyB2YXJpYWJsZS5cbiAgY29uc3QgR0xPQkFMX0NPTU1BTkRTID0gJ2dsb2JhbCBsb2NhbCBiZWVwIGRlbGF5IHB1dCBsZW4gdHlwZW9mIHBpY2sgbG9nIHRpbWUgc2V0IGZpbmQgZW52aXJvbm1lbnQgdGVybWluYWwgZXJyb3IgZXhlY3V0ZSBwYXJzZSByZXNvbHZlIHRvYXJyYXkgdG9ib29sIHRvaWQgdG9pcCB0b2lwNiB0b251bSB0b3N0ciB0b3RpbWUnO1xuXG4gIC8vIENvbW1vbiBjb21tYW5kczogRm9sbG93aW5nIGNvbW1hbmRzIGF2YWlsYWJsZSBmcm9tIG1vc3Qgc3ViLW1lbnVzOlxuICBjb25zdCBDT01NT05fQ09NTUFORFMgPSAnYWRkIHJlbW92ZSBlbmFibGUgZGlzYWJsZSBzZXQgZ2V0IHByaW50IGV4cG9ydCBlZGl0IGZpbmQgcnVuIGRlYnVnIGVycm9yIGluZm8gd2FybmluZyc7XG5cbiAgY29uc3QgTElURVJBTFMgPSAndHJ1ZSBmYWxzZSB5ZXMgbm8gbm90aGluZyBuaWwgbnVsbCc7XG5cbiAgY29uc3QgT0JKRUNUUyA9ICd0cmFmZmljLWZsb3cgdHJhZmZpYy1nZW5lcmF0b3IgZmlyZXdhbGwgc2NoZWR1bGVyIGFhYSBhY2NvdW50aW5nIGFkZHJlc3MtbGlzdCBhZGRyZXNzIGFsaWduIGFyZWEgYmFuZHdpZHRoLXNlcnZlciBiZmQgYmdwIGJyaWRnZSBjbGllbnQgY2xvY2sgY29tbXVuaXR5IGNvbmZpZyBjb25uZWN0aW9uIGNvbnNvbGUgY3VzdG9tZXIgZGVmYXVsdCBkaGNwLWNsaWVudCBkaGNwLXNlcnZlciBkaXNjb3ZlcnkgZG5zIGUtbWFpbCBldGhlcm5ldCBmaWx0ZXIgZmlybXdhcmUgZ3BzIGdyYXBoaW5nIGdyb3VwIGhhcmR3YXJlIGhlYWx0aCBob3RzcG90IGlkZW50aXR5IGlnbXAtcHJveHkgaW5jb21pbmcgaW5zdGFuY2UgaW50ZXJmYWNlIGlwIGlwc2VjIGlwdjYgaXJxIGwydHAtc2VydmVyIGxjZCBsZHAgbG9nZ2luZyBtYWMtc2VydmVyIG1hYy13aW5ib3ggbWFuZ2xlIG1hbnVhbCBtaXJyb3IgbW1lIG1wbHMgbmF0IG5kIG5laWdoYm9yIG5ldHdvcmsgbm90ZSBudHAgb3NwZiBvc3BmLXYzIG92cG4tc2VydmVyIHBhZ2UgcGVlciBwaW0gcGluZyBwb2xpY3kgcG9vbCBwb3J0IHBwcCBwcHBvZS1jbGllbnQgcHB0cC1zZXJ2ZXIgcHJlZml4IHByb2ZpbGUgcHJvcG9zYWwgcHJveHkgcXVldWUgcmFkaXVzIHJlc291cmNlIHJpcCByaXBuZyByb3V0ZSByb3V0aW5nIHNjcmVlbiBzY3JpcHQgc2VjdXJpdHktcHJvZmlsZXMgc2VydmVyIHNlcnZpY2Ugc2VydmljZS1wb3J0IHNldHRpbmdzIHNoYXJlcyBzbWIgc21zIHNuaWZmZXIgc25tcCBzbm9vcGVyIHNvY2tzIHNzdHAtc2VydmVyIHN5c3RlbSB0b29sIHRyYWNraW5nIHR5cGUgdXBncmFkZSB1cG5wIHVzZXItbWFuYWdlciB1c2VycyB1c2VyIHZsYW4gc2VjcmV0IHZycnAgd2F0Y2hkb2cgd2ViLWFjY2VzcyB3aXJlbGVzcyBwcHRwIHBwcG9lIGxhbiB3YW4gbGF5ZXI3LXByb3RvY29sIGxlYXNlIHNpbXBsZSByYXcnO1xuXG4gIGNvbnN0IFZBUiA9IHtcbiAgICBjbGFzc05hbWU6ICd2YXJpYWJsZScsXG4gICAgdmFyaWFudHM6IFtcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IC9cXCRbXFx3XFxkI0BdW1xcd1xcZF9dKi9cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAvXFwkXFx7KC4qPylcXH0vXG4gICAgICB9XG4gICAgXVxuICB9O1xuXG4gIGNvbnN0IFFVT1RFX1NUUklORyA9IHtcbiAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgIGJlZ2luOiAvXCIvLFxuICAgIGVuZDogL1wiLyxcbiAgICBjb250YWluczogW1xuICAgICAgaGxqcy5CQUNLU0xBU0hfRVNDQVBFLFxuICAgICAgVkFSLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICd2YXJpYWJsZScsXG4gICAgICAgIGJlZ2luOiAvXFwkXFwoLyxcbiAgICAgICAgZW5kOiAvXFwpLyxcbiAgICAgICAgY29udGFpbnM6IFsgaGxqcy5CQUNLU0xBU0hfRVNDQVBFIF1cbiAgICAgIH1cbiAgICBdXG4gIH07XG5cbiAgY29uc3QgQVBPU19TVFJJTkcgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICBiZWdpbjogLycvLFxuICAgIGVuZDogLycvXG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnTWljcm90aWsgUm91dGVyT1Mgc2NyaXB0JyxcbiAgICBhbGlhc2VzOiBbXG4gICAgICAncm91dGVyb3MnLFxuICAgICAgJ21pa3JvdGlrJ1xuICAgIF0sXG4gICAgY2FzZV9pbnNlbnNpdGl2ZTogdHJ1ZSxcbiAgICBrZXl3b3Jkczoge1xuICAgICAgJHBhdHRlcm46IC86P1tcXHctXSsvLFxuICAgICAgbGl0ZXJhbDogTElURVJBTFMsXG4gICAgICBrZXl3b3JkOiBTVEFURU1FTlRTICsgJyA6JyArIFNUQVRFTUVOVFMuc3BsaXQoJyAnKS5qb2luKCcgOicpICsgJyA6JyArIEdMT0JBTF9DT01NQU5EUy5zcGxpdCgnICcpLmpvaW4oJyA6JylcbiAgICB9LFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICB7IC8vIGlsbGVnYWwgc3ludGF4XG4gICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAgeyAvLyAtLSBjb21tZW50XG4gICAgICAgICAgICBiZWdpbjogL1xcL1xcKi8sXG4gICAgICAgICAgICBlbmQ6IC9cXCpcXC8vXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7IC8vIFN0YW4gY29tbWVudFxuICAgICAgICAgICAgYmVnaW46IC9cXC9cXC8vLFxuICAgICAgICAgICAgZW5kOiAvJC9cbiAgICAgICAgICB9LFxuICAgICAgICAgIHsgLy8gSFRNTCB0YWdzXG4gICAgICAgICAgICBiZWdpbjogLzxcXC8vLFxuICAgICAgICAgICAgZW5kOiAvPi9cbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIGlsbGVnYWw6IC8uL1xuICAgICAgfSxcbiAgICAgIGhsanMuQ09NTUVOVCgnXiMnLCAnJCcpLFxuICAgICAgUVVPVEVfU1RSSU5HLFxuICAgICAgQVBPU19TVFJJTkcsXG4gICAgICBWQVIsXG4gICAgICAvLyBhdHRyaWJ1dGU9dmFsdWVcbiAgICAgIHtcbiAgICAgICAgLy8gPiBpcyB0byBhdm9pZCBtYXRjaGVzIHdpdGggPT4gaW4gb3RoZXIgZ3JhbW1hcnNcbiAgICAgICAgYmVnaW46IC9bXFx3LV0rPShbXlxcc3t9W1xcXSgpPl0rKS8sXG4gICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgcmV0dXJuQmVnaW46IHRydWUsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnYXR0cmlidXRlJyxcbiAgICAgICAgICAgIGJlZ2luOiAvW149XSsvXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogLz0vLFxuICAgICAgICAgICAgZW5kc1dpdGhQYXJlbnQ6IHRydWUsXG4gICAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgICBRVU9URV9TVFJJTkcsXG4gICAgICAgICAgICAgIEFQT1NfU1RSSU5HLFxuICAgICAgICAgICAgICBWQVIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdsaXRlcmFsJyxcbiAgICAgICAgICAgICAgICBiZWdpbjogJ1xcXFxiKCcgKyBMSVRFUkFMUy5zcGxpdCgnICcpLmpvaW4oJ3wnKSArICcpXFxcXGInXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvLyBEbyBub3QgZm9ybWF0IHVuY2xhc3NpZmllZCB2YWx1ZXMuIE5lZWRlZCB0byBleGNsdWRlIGhpZ2hsaWdodGluZyBvZiB2YWx1ZXMgYXMgYnVpbHRfaW4uXG4gICAgICAgICAgICAgICAgYmVnaW46IC8oXCJbXlwiXSpcInxbXlxcc3t9W1xcXV0rKS9cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAvKlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy8gSVB2NCBhZGRyZXNzZXMgYW5kIHN1Ym5ldHNcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdudW1iZXInLFxuICAgICAgICAgICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAgICAgICAgICB7YmVnaW46IElQQUREUl93QklUTUFTSysnKCwnK0lQQUREUl93QklUTUFTSysnKSonfSwgLy8xOTIuMTY4LjAuMC8yNCwxLjIuMy4wLzI0XG4gICAgICAgICAgICAgICAgICB7YmVnaW46IElQQUREUisnLScrSVBBRERSfSwgICAgICAgLy8gMTkyLjE2OC4wLjEtMTkyLjE2OC4wLjNcbiAgICAgICAgICAgICAgICAgIHtiZWdpbjogSVBBRERSKycoLCcrSVBBRERSKycpKid9LCAvLyAxOTIuMTY4LjAuMSwxOTIuMTY4LjAuMzQsMTkyLjE2OC4yNC4xLDE5Mi4xNjguMC4xXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy8gTUFDIGFkZHJlc3NlcyBhbmQgREhDUCBDbGllbnQgSURzXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICAgICAgICAgICAgICBiZWdpbjogL1xcYigxOik/KFswLTlBLUZhLWZdezEsMn1bOi1dKXs1fShbMC05QS1GYS1mXSl7MSwyfVxcYi8sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICovXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAvLyBIRVggdmFsdWVzXG4gICAgICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgICAgIGJlZ2luOiAvXFwqWzAtOWEtZkEtRl0rL1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICdcXFxcYignICsgQ09NTU9OX0NPTU1BTkRTLnNwbGl0KCcgJykuam9pbignfCcpICsgJykoW1xcXFxzWyhcXFxcXXxdKScsXG4gICAgICAgIHJldHVybkJlZ2luOiB0cnVlLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2J1aWx0aW4tbmFtZScsIC8vICdmdW5jdGlvbicsXG4gICAgICAgICAgICBiZWdpbjogL1xcdysvXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdidWlsdF9pbicsXG4gICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW46ICcoXFxcXC5cXFxcLi98L3xcXFxccykoKCcgKyBPQkpFQ1RTLnNwbGl0KCcgJykuam9pbignfCcpICsgJyk7P1xcXFxzKSsnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogL1xcLlxcLi8sXG4gICAgICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcm91dGVyb3M7XG4iXSwic291cmNlUm9vdCI6IiJ9