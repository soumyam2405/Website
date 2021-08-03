(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[149],{

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

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3JvdXRlcm9zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLE9BQU87QUFDUDtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsV0FBVztBQUNYLFdBQVc7QUFDWDtBQUNBO0FBQ0EsV0FBVztBQUNYLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGlEQUFpRDtBQUNwRSxtQkFBbUIseUJBQXlCO0FBQzVDLG1CQUFtQiwrQkFBK0I7QUFDbEQ7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLElBQUksTUFBTSxFQUFFLGNBQWMsSUFBSTtBQUMxRSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkVBQTJFO0FBQzNFLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoic3RhdGljL2NodW5rcy8xNDkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuTGFuZ3VhZ2U6IE1pY3JvdGlrIFJvdXRlck9TIHNjcmlwdFxuQXV0aG9yOiBJdmFuIERlbWVudGV2IDxpdmFuX2RpdkBtYWlsLnJ1PlxuRGVzY3JpcHRpb246IFNjcmlwdGluZyBob3N0IHByb3ZpZGVzIGEgd2F5IHRvIGF1dG9tYXRlIHNvbWUgcm91dGVyIG1haW50ZW5hbmNlIHRhc2tzIGJ5IG1lYW5zIG9mIGV4ZWN1dGluZyB1c2VyLWRlZmluZWQgc2NyaXB0cyBib3VuZGVkIHRvIHNvbWUgZXZlbnQgb2NjdXJyZW5jZVxuV2Vic2l0ZTogaHR0cHM6Ly93aWtpLm1pa3JvdGlrLmNvbS93aWtpL01hbnVhbDpTY3JpcHRpbmdcbiovXG5cbi8vIENvbG9ycyBmcm9tIFJvdXRlck9TIHRlcm1pbmFsOlxuLy8gICBncmVlbiAgICAgICAgLSAjMEU5QTAwXG4vLyAgIHRlYWwgICAgICAgICAtICMwQzlBOUFcbi8vICAgcHVycGxlICAgICAgIC0gIzk5MDY5QVxuLy8gICBsaWdodC1icm93biAgLSAjOUE5OTAwXG5cbmZ1bmN0aW9uIHJvdXRlcm9zKGhsanMpIHtcbiAgY29uc3QgU1RBVEVNRU5UUyA9ICdmb3JlYWNoIGRvIHdoaWxlIGZvciBpZiBmcm9tIHRvIHN0ZXAgZWxzZSBvbi1lcnJvciBhbmQgb3Igbm90IGluJztcblxuICAvLyBHbG9iYWwgY29tbWFuZHM6IEV2ZXJ5IGdsb2JhbCBjb21tYW5kIHNob3VsZCBzdGFydCB3aXRoIFwiOlwiIHRva2VuLCBvdGhlcndpc2UgaXQgd2lsbCBiZSB0cmVhdGVkIGFzIHZhcmlhYmxlLlxuICBjb25zdCBHTE9CQUxfQ09NTUFORFMgPSAnZ2xvYmFsIGxvY2FsIGJlZXAgZGVsYXkgcHV0IGxlbiB0eXBlb2YgcGljayBsb2cgdGltZSBzZXQgZmluZCBlbnZpcm9ubWVudCB0ZXJtaW5hbCBlcnJvciBleGVjdXRlIHBhcnNlIHJlc29sdmUgdG9hcnJheSB0b2Jvb2wgdG9pZCB0b2lwIHRvaXA2IHRvbnVtIHRvc3RyIHRvdGltZSc7XG5cbiAgLy8gQ29tbW9uIGNvbW1hbmRzOiBGb2xsb3dpbmcgY29tbWFuZHMgYXZhaWxhYmxlIGZyb20gbW9zdCBzdWItbWVudXM6XG4gIGNvbnN0IENPTU1PTl9DT01NQU5EUyA9ICdhZGQgcmVtb3ZlIGVuYWJsZSBkaXNhYmxlIHNldCBnZXQgcHJpbnQgZXhwb3J0IGVkaXQgZmluZCBydW4gZGVidWcgZXJyb3IgaW5mbyB3YXJuaW5nJztcblxuICBjb25zdCBMSVRFUkFMUyA9ICd0cnVlIGZhbHNlIHllcyBubyBub3RoaW5nIG5pbCBudWxsJztcblxuICBjb25zdCBPQkpFQ1RTID0gJ3RyYWZmaWMtZmxvdyB0cmFmZmljLWdlbmVyYXRvciBmaXJld2FsbCBzY2hlZHVsZXIgYWFhIGFjY291bnRpbmcgYWRkcmVzcy1saXN0IGFkZHJlc3MgYWxpZ24gYXJlYSBiYW5kd2lkdGgtc2VydmVyIGJmZCBiZ3AgYnJpZGdlIGNsaWVudCBjbG9jayBjb21tdW5pdHkgY29uZmlnIGNvbm5lY3Rpb24gY29uc29sZSBjdXN0b21lciBkZWZhdWx0IGRoY3AtY2xpZW50IGRoY3Atc2VydmVyIGRpc2NvdmVyeSBkbnMgZS1tYWlsIGV0aGVybmV0IGZpbHRlciBmaXJtd2FyZSBncHMgZ3JhcGhpbmcgZ3JvdXAgaGFyZHdhcmUgaGVhbHRoIGhvdHNwb3QgaWRlbnRpdHkgaWdtcC1wcm94eSBpbmNvbWluZyBpbnN0YW5jZSBpbnRlcmZhY2UgaXAgaXBzZWMgaXB2NiBpcnEgbDJ0cC1zZXJ2ZXIgbGNkIGxkcCBsb2dnaW5nIG1hYy1zZXJ2ZXIgbWFjLXdpbmJveCBtYW5nbGUgbWFudWFsIG1pcnJvciBtbWUgbXBscyBuYXQgbmQgbmVpZ2hib3IgbmV0d29yayBub3RlIG50cCBvc3BmIG9zcGYtdjMgb3Zwbi1zZXJ2ZXIgcGFnZSBwZWVyIHBpbSBwaW5nIHBvbGljeSBwb29sIHBvcnQgcHBwIHBwcG9lLWNsaWVudCBwcHRwLXNlcnZlciBwcmVmaXggcHJvZmlsZSBwcm9wb3NhbCBwcm94eSBxdWV1ZSByYWRpdXMgcmVzb3VyY2UgcmlwIHJpcG5nIHJvdXRlIHJvdXRpbmcgc2NyZWVuIHNjcmlwdCBzZWN1cml0eS1wcm9maWxlcyBzZXJ2ZXIgc2VydmljZSBzZXJ2aWNlLXBvcnQgc2V0dGluZ3Mgc2hhcmVzIHNtYiBzbXMgc25pZmZlciBzbm1wIHNub29wZXIgc29ja3Mgc3N0cC1zZXJ2ZXIgc3lzdGVtIHRvb2wgdHJhY2tpbmcgdHlwZSB1cGdyYWRlIHVwbnAgdXNlci1tYW5hZ2VyIHVzZXJzIHVzZXIgdmxhbiBzZWNyZXQgdnJycCB3YXRjaGRvZyB3ZWItYWNjZXNzIHdpcmVsZXNzIHBwdHAgcHBwb2UgbGFuIHdhbiBsYXllcjctcHJvdG9jb2wgbGVhc2Ugc2ltcGxlIHJhdyc7XG5cbiAgY29uc3QgVkFSID0ge1xuICAgIGNsYXNzTmFtZTogJ3ZhcmlhYmxlJyxcbiAgICB2YXJpYW50czogW1xuICAgICAge1xuICAgICAgICBiZWdpbjogL1xcJFtcXHdcXGQjQF1bXFx3XFxkX10qL1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IC9cXCRcXHsoLio/KVxcfS9cbiAgICAgIH1cbiAgICBdXG4gIH07XG5cbiAgY29uc3QgUVVPVEVfU1RSSU5HID0ge1xuICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgYmVnaW46IC9cIi8sXG4gICAgZW5kOiAvXCIvLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBobGpzLkJBQ0tTTEFTSF9FU0NBUEUsXG4gICAgICBWQVIsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3ZhcmlhYmxlJyxcbiAgICAgICAgYmVnaW46IC9cXCRcXCgvLFxuICAgICAgICBlbmQ6IC9cXCkvLFxuICAgICAgICBjb250YWluczogWyBobGpzLkJBQ0tTTEFTSF9FU0NBUEUgXVxuICAgICAgfVxuICAgIF1cbiAgfTtcblxuICBjb25zdCBBUE9TX1NUUklORyA9IHtcbiAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgIGJlZ2luOiAvJy8sXG4gICAgZW5kOiAvJy9cbiAgfTtcblxuICByZXR1cm4ge1xuICAgIG5hbWU6ICdNaWNyb3RpayBSb3V0ZXJPUyBzY3JpcHQnLFxuICAgIGFsaWFzZXM6IFtcbiAgICAgICdyb3V0ZXJvcycsXG4gICAgICAnbWlrcm90aWsnXG4gICAgXSxcbiAgICBjYXNlX2luc2Vuc2l0aXZlOiB0cnVlLFxuICAgIGtleXdvcmRzOiB7XG4gICAgICAkcGF0dGVybjogLzo/W1xcdy1dKy8sXG4gICAgICBsaXRlcmFsOiBMSVRFUkFMUyxcbiAgICAgIGtleXdvcmQ6IFNUQVRFTUVOVFMgKyAnIDonICsgU1RBVEVNRU5UUy5zcGxpdCgnICcpLmpvaW4oJyA6JykgKyAnIDonICsgR0xPQkFMX0NPTU1BTkRTLnNwbGl0KCcgJykuam9pbignIDonKVxuICAgIH0sXG4gICAgY29udGFpbnM6IFtcbiAgICAgIHsgLy8gaWxsZWdhbCBzeW50YXhcbiAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICB7IC8vIC0tIGNvbW1lbnRcbiAgICAgICAgICAgIGJlZ2luOiAvXFwvXFwqLyxcbiAgICAgICAgICAgIGVuZDogL1xcKlxcLy9cbiAgICAgICAgICB9LFxuICAgICAgICAgIHsgLy8gU3RhbiBjb21tZW50XG4gICAgICAgICAgICBiZWdpbjogL1xcL1xcLy8sXG4gICAgICAgICAgICBlbmQ6IC8kL1xuICAgICAgICAgIH0sXG4gICAgICAgICAgeyAvLyBIVE1MIHRhZ3NcbiAgICAgICAgICAgIGJlZ2luOiAvPFxcLy8sXG4gICAgICAgICAgICBlbmQ6IC8+L1xuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgaWxsZWdhbDogLy4vXG4gICAgICB9LFxuICAgICAgaGxqcy5DT01NRU5UKCdeIycsICckJyksXG4gICAgICBRVU9URV9TVFJJTkcsXG4gICAgICBBUE9TX1NUUklORyxcbiAgICAgIFZBUixcbiAgICAgIC8vIGF0dHJpYnV0ZT12YWx1ZVxuICAgICAge1xuICAgICAgICAvLyA+IGlzIHRvIGF2b2lkIG1hdGNoZXMgd2l0aCA9PiBpbiBvdGhlciBncmFtbWFyc1xuICAgICAgICBiZWdpbjogL1tcXHctXSs9KFteXFxze31bXFxdKCk+XSspLyxcbiAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICByZXR1cm5CZWdpbjogdHJ1ZSxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdhdHRyaWJ1dGUnLFxuICAgICAgICAgICAgYmVnaW46IC9bXj1dKy9cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luOiAvPS8sXG4gICAgICAgICAgICBlbmRzV2l0aFBhcmVudDogdHJ1ZSxcbiAgICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAgIFFVT1RFX1NUUklORyxcbiAgICAgICAgICAgICAgQVBPU19TVFJJTkcsXG4gICAgICAgICAgICAgIFZBUixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ2xpdGVyYWwnLFxuICAgICAgICAgICAgICAgIGJlZ2luOiAnXFxcXGIoJyArIExJVEVSQUxTLnNwbGl0KCcgJykuam9pbignfCcpICsgJylcXFxcYidcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vIERvIG5vdCBmb3JtYXQgdW5jbGFzc2lmaWVkIHZhbHVlcy4gTmVlZGVkIHRvIGV4Y2x1ZGUgaGlnaGxpZ2h0aW5nIG9mIHZhbHVlcyBhcyBidWlsdF9pbi5cbiAgICAgICAgICAgICAgICBiZWdpbjogLyhcIlteXCJdKlwifFteXFxze31bXFxdXSspL1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvLyBJUHY0IGFkZHJlc3NlcyBhbmQgc3VibmV0c1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgICAgICAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICAgICAgICAgIHtiZWdpbjogSVBBRERSX3dCSVRNQVNLKycoLCcrSVBBRERSX3dCSVRNQVNLKycpKid9LCAvLzE5Mi4xNjguMC4wLzI0LDEuMi4zLjAvMjRcbiAgICAgICAgICAgICAgICAgIHtiZWdpbjogSVBBRERSKyctJytJUEFERFJ9LCAgICAgICAvLyAxOTIuMTY4LjAuMS0xOTIuMTY4LjAuM1xuICAgICAgICAgICAgICAgICAge2JlZ2luOiBJUEFERFIrJygsJytJUEFERFIrJykqJ30sIC8vIDE5Mi4xNjguMC4xLDE5Mi4xNjguMC4zNCwxOTIuMTY4LjI0LjEsMTkyLjE2OC4wLjFcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvLyBNQUMgYWRkcmVzc2VzIGFuZCBESENQIENsaWVudCBJRHNcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdudW1iZXInLFxuICAgICAgICAgICAgICAgIGJlZ2luOiAvXFxiKDE6KT8oWzAtOUEtRmEtZl17MSwyfVs6LV0pezV9KFswLTlBLUZhLWZdKXsxLDJ9XFxiLyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIC8vIEhFWCB2YWx1ZXNcbiAgICAgICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICAgICAgYmVnaW46IC9cXCpbMC05YS1mQS1GXSsvXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogJ1xcXFxiKCcgKyBDT01NT05fQ09NTUFORFMuc3BsaXQoJyAnKS5qb2luKCd8JykgKyAnKShbXFxcXHNbKFxcXFxdfF0pJyxcbiAgICAgICAgcmV0dXJuQmVnaW46IHRydWUsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnYnVpbHRpbi1uYW1lJywgLy8gJ2Z1bmN0aW9uJyxcbiAgICAgICAgICAgIGJlZ2luOiAvXFx3Ky9cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2J1aWx0X2luJyxcbiAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogJyhcXFxcLlxcXFwuL3wvfFxcXFxzKSgoJyArIE9CSkVDVFMuc3BsaXQoJyAnKS5qb2luKCd8JykgKyAnKTs/XFxcXHMpKydcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luOiAvXFwuXFwuLyxcbiAgICAgICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXJvcztcbiJdLCJzb3VyY2VSb290IjoiIn0=