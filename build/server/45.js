exports.ids = [45];
exports.modules = {

/***/ "./node_modules/highlight.js/lib/languages/dns.js":
/*!********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/dns.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: DNS Zone
Author: Tim Schumacher <tim@datenknoten.me>
Category: config
Website: https://en.wikipedia.org/wiki/Zone_file
*/

/** @type LanguageFn */
function dns(hljs) {
  return {
    name: 'DNS Zone',
    aliases: [
      'bind',
      'zone'
    ],
    keywords: {
      keyword:
        'IN A AAAA AFSDB APL CAA CDNSKEY CDS CERT CNAME DHCID DLV DNAME DNSKEY DS HIP IPSECKEY KEY KX ' +
        'LOC MX NAPTR NS NSEC NSEC3 NSEC3PARAM PTR RRSIG RP SIG SOA SRV SSHFP TA TKEY TLSA TSIG TXT'
    },
    contains: [
      hljs.COMMENT(';', '$', {
        relevance: 0
      }),
      {
        className: 'meta',
        begin: /^\$(TTL|GENERATE|INCLUDE|ORIGIN)\b/
      },
      // IPv6
      {
        className: 'number',
        begin: '((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:)))\\b'
      },
      // IPv4
      {
        className: 'number',
        begin: '((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\b'
      },
      hljs.inherit(hljs.NUMBER_MODE, {
        begin: /\b\d+[dhwm]?/
      })
    ]
  };
}

module.exports = dns;


/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvZG5zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsSUFBSSxHQUFHLEVBQUUsYUFBYSxJQUFJLG1CQUFtQixJQUFJLEdBQUcsRUFBRSxjQUFjLElBQUksa0ZBQWtGLEVBQUUsb0JBQW9CLElBQUksR0FBRyxFQUFFLGdCQUFnQixJQUFJLEVBQUUsSUFBSSxvRkFBb0YsRUFBRSxvQkFBb0IsSUFBSSxHQUFHLEVBQUUsZ0JBQWdCLElBQUksRUFBRSxJQUFJLGlCQUFpQixJQUFJLG9GQUFvRixFQUFFLHFCQUFxQixJQUFJLEdBQUcsRUFBRSxnQkFBZ0IsSUFBSSxFQUFFLElBQUksaUJBQWlCLElBQUksRUFBRSxJQUFJLGtGQUFrRixFQUFFLHFCQUFxQixJQUFJLEdBQUcsRUFBRSxnQkFBZ0IsSUFBSSxFQUFFLElBQUksaUJBQWlCLElBQUksRUFBRSxJQUFJLGtGQUFrRixFQUFFLHFCQUFxQixJQUFJLEdBQUcsRUFBRSxnQkFBZ0IsSUFBSSxFQUFFLElBQUksaUJBQWlCLElBQUksRUFBRSxJQUFJLGtGQUFrRixFQUFFLHlCQUF5QixJQUFJLEVBQUUsSUFBSSxpQkFBaUIsSUFBSSxFQUFFLElBQUksa0ZBQWtGLEVBQUU7QUFDam5DLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsSUFBSSxPQUFPLElBQUksVUFBVSxJQUFJLG1CQUFtQixJQUFJLE9BQU8sSUFBSTtBQUNuRyxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiNDUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuTGFuZ3VhZ2U6IEROUyBab25lXG5BdXRob3I6IFRpbSBTY2h1bWFjaGVyIDx0aW1AZGF0ZW5rbm90ZW4ubWU+XG5DYXRlZ29yeTogY29uZmlnXG5XZWJzaXRlOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9ab25lX2ZpbGVcbiovXG5cbi8qKiBAdHlwZSBMYW5ndWFnZUZuICovXG5mdW5jdGlvbiBkbnMoaGxqcykge1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICdETlMgWm9uZScsXG4gICAgYWxpYXNlczogW1xuICAgICAgJ2JpbmQnLFxuICAgICAgJ3pvbmUnXG4gICAgXSxcbiAgICBrZXl3b3Jkczoge1xuICAgICAga2V5d29yZDpcbiAgICAgICAgJ0lOIEEgQUFBQSBBRlNEQiBBUEwgQ0FBIENETlNLRVkgQ0RTIENFUlQgQ05BTUUgREhDSUQgRExWIEROQU1FIEROU0tFWSBEUyBISVAgSVBTRUNLRVkgS0VZIEtYICcgK1xuICAgICAgICAnTE9DIE1YIE5BUFRSIE5TIE5TRUMgTlNFQzMgTlNFQzNQQVJBTSBQVFIgUlJTSUcgUlAgU0lHIFNPQSBTUlYgU1NIRlAgVEEgVEtFWSBUTFNBIFRTSUcgVFhUJ1xuICAgIH0sXG4gICAgY29udGFpbnM6IFtcbiAgICAgIGhsanMuQ09NTUVOVCgnOycsICckJywge1xuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0pLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICAgICAgYmVnaW46IC9eXFwkKFRUTHxHRU5FUkFURXxJTkNMVURFfE9SSUdJTilcXGIvXG4gICAgICB9LFxuICAgICAgLy8gSVB2NlxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdudW1iZXInLFxuICAgICAgICBiZWdpbjogJygoKFswLTlBLUZhLWZdezEsNH06KXs3fShbMC05QS1GYS1mXXsxLDR9fDopKXwoKFswLTlBLUZhLWZdezEsNH06KXs2fSg6WzAtOUEtRmEtZl17MSw0fXwoKDI1WzAtNV18MlswLTRdXFxcXGR8MVxcXFxkXFxcXGR8WzEtOV0/XFxcXGQpKFxcXFwuKDI1WzAtNV18MlswLTRdXFxcXGR8MVxcXFxkXFxcXGR8WzEtOV0/XFxcXGQpKXszfSl8OikpfCgoWzAtOUEtRmEtZl17MSw0fTopezV9KCgoOlswLTlBLUZhLWZdezEsNH0pezEsMn0pfDooKDI1WzAtNV18MlswLTRdXFxcXGR8MVxcXFxkXFxcXGR8WzEtOV0/XFxcXGQpKFxcXFwuKDI1WzAtNV18MlswLTRdXFxcXGR8MVxcXFxkXFxcXGR8WzEtOV0/XFxcXGQpKXszfSl8OikpfCgoWzAtOUEtRmEtZl17MSw0fTopezR9KCgoOlswLTlBLUZhLWZdezEsNH0pezEsM30pfCgoOlswLTlBLUZhLWZdezEsNH0pPzooKDI1WzAtNV18MlswLTRdXFxcXGR8MVxcXFxkXFxcXGR8WzEtOV0/XFxcXGQpKFxcXFwuKDI1WzAtNV18MlswLTRdXFxcXGR8MVxcXFxkXFxcXGR8WzEtOV0/XFxcXGQpKXszfSkpfDopKXwoKFswLTlBLUZhLWZdezEsNH06KXszfSgoKDpbMC05QS1GYS1mXXsxLDR9KXsxLDR9KXwoKDpbMC05QS1GYS1mXXsxLDR9KXswLDJ9OigoMjVbMC01XXwyWzAtNF1cXFxcZHwxXFxcXGRcXFxcZHxbMS05XT9cXFxcZCkoXFxcXC4oMjVbMC01XXwyWzAtNF1cXFxcZHwxXFxcXGRcXFxcZHxbMS05XT9cXFxcZCkpezN9KSl8OikpfCgoWzAtOUEtRmEtZl17MSw0fTopezJ9KCgoOlswLTlBLUZhLWZdezEsNH0pezEsNX0pfCgoOlswLTlBLUZhLWZdezEsNH0pezAsM306KCgyNVswLTVdfDJbMC00XVxcXFxkfDFcXFxcZFxcXFxkfFsxLTldP1xcXFxkKShcXFxcLigyNVswLTVdfDJbMC00XVxcXFxkfDFcXFxcZFxcXFxkfFsxLTldP1xcXFxkKSl7M30pKXw6KSl8KChbMC05QS1GYS1mXXsxLDR9Oil7MX0oKCg6WzAtOUEtRmEtZl17MSw0fSl7MSw2fSl8KCg6WzAtOUEtRmEtZl17MSw0fSl7MCw0fTooKDI1WzAtNV18MlswLTRdXFxcXGR8MVxcXFxkXFxcXGR8WzEtOV0/XFxcXGQpKFxcXFwuKDI1WzAtNV18MlswLTRdXFxcXGR8MVxcXFxkXFxcXGR8WzEtOV0/XFxcXGQpKXszfSkpfDopKXwoOigoKDpbMC05QS1GYS1mXXsxLDR9KXsxLDd9KXwoKDpbMC05QS1GYS1mXXsxLDR9KXswLDV9OigoMjVbMC01XXwyWzAtNF1cXFxcZHwxXFxcXGRcXFxcZHxbMS05XT9cXFxcZCkoXFxcXC4oMjVbMC01XXwyWzAtNF1cXFxcZHwxXFxcXGRcXFxcZHxbMS05XT9cXFxcZCkpezN9KSl8OikpKVxcXFxiJ1xuICAgICAgfSxcbiAgICAgIC8vIElQdjRcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICAgICAgYmVnaW46ICcoKDI1WzAtNV18KDJbMC00XXwxezAsMX1bMC05XSl7MCwxfVswLTldKVxcLil7MywzfSgyNVswLTVdfCgyWzAtNF18MXswLDF9WzAtOV0pezAsMX1bMC05XSlcXFxcYidcbiAgICAgIH0sXG4gICAgICBobGpzLmluaGVyaXQoaGxqcy5OVU1CRVJfTU9ERSwge1xuICAgICAgICBiZWdpbjogL1xcYlxcZCtbZGh3bV0/L1xuICAgICAgfSlcbiAgICBdXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG5zO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==