(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[12],{

/***/ "./node_modules/highlight.js/lib/languages/asciidoc.js":
/*!*************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/asciidoc.js ***!
  \*************************************************************/
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
Language: AsciiDoc
Requires: xml.js
Author: Dan Allen <dan.j.allen@gmail.com>
Website: http://asciidoc.org
Description: A semantic, text-based document format that can be exported to HTML, DocBook and other backends.
Category: markup
*/

/** @type LanguageFn */
function asciidoc(hljs) {
  const HORIZONTAL_RULE = {
    begin: '^\'{3,}[ \\t]*$',
    relevance: 10
  };
  const ESCAPED_FORMATTING = [
    // escaped constrained formatting marks (i.e., \* \_ or \`)
    {
      begin: /\\[*_`]/
    },
    // escaped unconstrained formatting marks (i.e., \\** \\__ or \\``)
    // must ignore until the next formatting marks
    // this rule might not be 100% compliant with Asciidoctor 2.0 but we are entering undefined behavior territory...
    {
      begin: /\\\\\*{2}[^\n]*?\*{2}/
    },
    {
      begin: /\\\\_{2}[^\n]*_{2}/
    },
    {
      begin: /\\\\`{2}[^\n]*`{2}/
    },
    // guard: constrained formatting mark may not be preceded by ":", ";" or
    // "}". match these so the constrained rule doesn't see them
    {
      begin: /[:;}][*_`](?![*_`])/
    }
  ];
  const STRONG = [
    // inline unconstrained strong (single line)
    {
      className: 'strong',
      begin: /\*{2}([^\n]+?)\*{2}/
    },
    // inline unconstrained strong (multi-line)
    {
      className: 'strong',
      begin: concat(
        /\*\*/,
        /((\*(?!\*)|\\[^\n]|[^*\n\\])+\n)+/,
        /(\*(?!\*)|\\[^\n]|[^*\n\\])*/,
        /\*\*/
      ),
      relevance: 0
    },
    // inline constrained strong (single line)
    {
      className: 'strong',
      // must not precede or follow a word character
      begin: /\B\*(\S|\S[^\n]*?\S)\*(?!\w)/
    },
    // inline constrained strong (multi-line)
    {
      className: 'strong',
      // must not precede or follow a word character
      begin: /\*[^\s]([^\n]+\n)+([^\n]+)\*/
    }
  ];
  const EMPHASIS = [
    // inline unconstrained emphasis (single line)
    {
      className: 'emphasis',
      begin: /_{2}([^\n]+?)_{2}/
    },
    // inline unconstrained emphasis (multi-line)
    {
      className: 'emphasis',
      begin: concat(
        /__/,
        /((_(?!_)|\\[^\n]|[^_\n\\])+\n)+/,
        /(_(?!_)|\\[^\n]|[^_\n\\])*/,
        /__/
      ),
      relevance: 0
    },
    // inline constrained emphasis (single line)
    {
      className: 'emphasis',
      // must not precede or follow a word character
      begin: /\b_(\S|\S[^\n]*?\S)_(?!\w)/
    },
    // inline constrained emphasis (multi-line)
    {
      className: 'emphasis',
      // must not precede or follow a word character
      begin: /_[^\s]([^\n]+\n)+([^\n]+)_/
    },
    // inline constrained emphasis using single quote (legacy)
    {
      className: 'emphasis',
      // must not follow a word character or be followed by a single quote or space
      begin: '\\B\'(?![\'\\s])',
      end: '(\\n{2}|\')',
      // allow escaped single quote followed by word char
      contains: [{
        begin: '\\\\\'\\w',
        relevance: 0
      }],
      relevance: 0
    }
  ];
  const ADMONITION = {
    className: 'symbol',
    begin: '^(NOTE|TIP|IMPORTANT|WARNING|CAUTION):\\s+',
    relevance: 10
  };
  const BULLET_LIST = {
    className: 'bullet',
    begin: '^(\\*+|-+|\\.+|[^\\n]+?::)\\s+'
  };

  return {
    name: 'AsciiDoc',
    aliases: ['adoc'],
    contains: [
      // block comment
      hljs.COMMENT(
        '^/{4,}\\n',
        '\\n/{4,}$',
        // can also be done as...
        // '^/{4,}$',
        // '^/{4,}$',
        {
          relevance: 10
        }
      ),
      // line comment
      hljs.COMMENT(
        '^//',
        '$',
        {
          relevance: 0
        }
      ),
      // title
      {
        className: 'title',
        begin: '^\\.\\w.*$'
      },
      // example, admonition & sidebar blocks
      {
        begin: '^[=\\*]{4,}\\n',
        end: '\\n^[=\\*]{4,}$',
        relevance: 10
      },
      // headings
      {
        className: 'section',
        relevance: 10,
        variants: [
          {
            begin: '^(={1,6})[ \t].+?([ \t]\\1)?$'
          },
          {
            begin: '^[^\\[\\]\\n]+?\\n[=\\-~\\^\\+]{2,}$'
          }
        ]
      },
      // document attributes
      {
        className: 'meta',
        begin: '^:.+?:',
        end: '\\s',
        excludeEnd: true,
        relevance: 10
      },
      // block attributes
      {
        className: 'meta',
        begin: '^\\[.+?\\]$',
        relevance: 0
      },
      // quoteblocks
      {
        className: 'quote',
        begin: '^_{4,}\\n',
        end: '\\n_{4,}$',
        relevance: 10
      },
      // listing and literal blocks
      {
        className: 'code',
        begin: '^[\\-\\.]{4,}\\n',
        end: '\\n[\\-\\.]{4,}$',
        relevance: 10
      },
      // passthrough blocks
      {
        begin: '^\\+{4,}\\n',
        end: '\\n\\+{4,}$',
        contains: [{
          begin: '<',
          end: '>',
          subLanguage: 'xml',
          relevance: 0
        }],
        relevance: 10
      },

      BULLET_LIST,
      ADMONITION,
      ...ESCAPED_FORMATTING,
      ...STRONG,
      ...EMPHASIS,

      // inline smart quotes
      {
        className: 'string',
        variants: [
          {
            begin: "``.+?''"
          },
          {
            begin: "`.+?'"
          }
        ]
      },
      // inline unconstrained emphasis
      {
        className: 'code',
        begin: /`{2}/,
        end: /(\n{2}|`{2})/
      },
      // inline code snippets (TODO should get same treatment as strong and emphasis)
      {
        className: 'code',
        begin: '(`.+?`|\\+.+?\\+)',
        relevance: 0
      },
      // indented literal block
      {
        className: 'code',
        begin: '^[ \\t]',
        end: '$',
        relevance: 0
      },
      HORIZONTAL_RULE,
      // images and links
      {
        begin: '(link:)?(http|https|ftp|file|irc|image:?):\\S+?\\[[^[]*?\\]',
        returnBegin: true,
        contains: [
          {
            begin: '(link|image:?):',
            relevance: 0
          },
          {
            className: 'link',
            begin: '\\w',
            end: '[^\\[]+',
            relevance: 0
          },
          {
            className: 'string',
            begin: '\\[',
            end: '\\]',
            excludeBegin: true,
            excludeEnd: true,
            relevance: 0
          }
        ],
        relevance: 10
      }
    ]
  };
}

module.exports = asciidoc;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2FzY2lpZG9jLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWE7QUFDYjs7QUFFQTtBQUNBLFdBQVcsaUJBQWlCO0FBQzVCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyxzQkFBc0I7QUFDakMsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsR0FBRztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsRUFBRSxVQUFVLEVBQUU7QUFDbkMsS0FBSztBQUNMO0FBQ0Esb0JBQW9CLEVBQUUsUUFBUSxFQUFFO0FBQ2hDLEtBQUs7QUFDTDtBQUNBLG9CQUFvQixFQUFFLFFBQVEsRUFBRTtBQUNoQyxLQUFLO0FBQ0wsd0VBQXdFO0FBQ3hFLFNBQVM7QUFDVDtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsRUFBRSxZQUFZLEVBQUU7QUFDakMsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixFQUFFLFdBQVcsRUFBRTtBQUMvQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsRUFBRTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxHQUFHO0FBQ2YsY0FBYyxHQUFHO0FBQ2pCO0FBQ0EsZUFBZSxHQUFHO0FBQ2xCLGVBQWUsR0FBRztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0Esd0JBQXdCLEdBQUc7QUFDM0IseUJBQXlCLEdBQUc7QUFDNUI7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLElBQUk7QUFDNUIsV0FBVztBQUNYO0FBQ0Esb0RBQW9ELEdBQUc7QUFDdkQ7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixHQUFHO0FBQ3RCLG1CQUFtQixHQUFHO0FBQ3RCO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixHQUFHO0FBQzdCLDBCQUEwQixHQUFHO0FBQzdCO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxxQkFBcUIsR0FBRztBQUN4QixxQkFBcUIsR0FBRztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsRUFBRTtBQUNwQixrQkFBa0IsRUFBRSxHQUFHLEVBQUU7QUFDekIsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoic3RhdGljL2NodW5rcy8xMi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJucyB7UmVnRXhwfVxuICogKi9cblxuLyoqXG4gKiBAcGFyYW0ge1JlZ0V4cCB8IHN0cmluZyB9IHJlXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBzb3VyY2UocmUpIHtcbiAgaWYgKCFyZSkgcmV0dXJuIG51bGw7XG4gIGlmICh0eXBlb2YgcmUgPT09IFwic3RyaW5nXCIpIHJldHVybiByZTtcblxuICByZXR1cm4gcmUuc291cmNlO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7Li4uKFJlZ0V4cCB8IHN0cmluZykgfSBhcmdzXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBjb25jYXQoLi4uYXJncykge1xuICBjb25zdCBqb2luZWQgPSBhcmdzLm1hcCgoeCkgPT4gc291cmNlKHgpKS5qb2luKFwiXCIpO1xuICByZXR1cm4gam9pbmVkO1xufVxuXG4vKlxuTGFuZ3VhZ2U6IEFzY2lpRG9jXG5SZXF1aXJlczogeG1sLmpzXG5BdXRob3I6IERhbiBBbGxlbiA8ZGFuLmouYWxsZW5AZ21haWwuY29tPlxuV2Vic2l0ZTogaHR0cDovL2FzY2lpZG9jLm9yZ1xuRGVzY3JpcHRpb246IEEgc2VtYW50aWMsIHRleHQtYmFzZWQgZG9jdW1lbnQgZm9ybWF0IHRoYXQgY2FuIGJlIGV4cG9ydGVkIHRvIEhUTUwsIERvY0Jvb2sgYW5kIG90aGVyIGJhY2tlbmRzLlxuQ2F0ZWdvcnk6IG1hcmt1cFxuKi9cblxuLyoqIEB0eXBlIExhbmd1YWdlRm4gKi9cbmZ1bmN0aW9uIGFzY2lpZG9jKGhsanMpIHtcbiAgY29uc3QgSE9SSVpPTlRBTF9SVUxFID0ge1xuICAgIGJlZ2luOiAnXlxcJ3szLH1bIFxcXFx0XSokJyxcbiAgICByZWxldmFuY2U6IDEwXG4gIH07XG4gIGNvbnN0IEVTQ0FQRURfRk9STUFUVElORyA9IFtcbiAgICAvLyBlc2NhcGVkIGNvbnN0cmFpbmVkIGZvcm1hdHRpbmcgbWFya3MgKGkuZS4sIFxcKiBcXF8gb3IgXFxgKVxuICAgIHtcbiAgICAgIGJlZ2luOiAvXFxcXFsqX2BdL1xuICAgIH0sXG4gICAgLy8gZXNjYXBlZCB1bmNvbnN0cmFpbmVkIGZvcm1hdHRpbmcgbWFya3MgKGkuZS4sIFxcXFwqKiBcXFxcX18gb3IgXFxcXGBgKVxuICAgIC8vIG11c3QgaWdub3JlIHVudGlsIHRoZSBuZXh0IGZvcm1hdHRpbmcgbWFya3NcbiAgICAvLyB0aGlzIHJ1bGUgbWlnaHQgbm90IGJlIDEwMCUgY29tcGxpYW50IHdpdGggQXNjaWlkb2N0b3IgMi4wIGJ1dCB3ZSBhcmUgZW50ZXJpbmcgdW5kZWZpbmVkIGJlaGF2aW9yIHRlcnJpdG9yeS4uLlxuICAgIHtcbiAgICAgIGJlZ2luOiAvXFxcXFxcXFxcXCp7Mn1bXlxcbl0qP1xcKnsyfS9cbiAgICB9LFxuICAgIHtcbiAgICAgIGJlZ2luOiAvXFxcXFxcXFxfezJ9W15cXG5dKl97Mn0vXG4gICAgfSxcbiAgICB7XG4gICAgICBiZWdpbjogL1xcXFxcXFxcYHsyfVteXFxuXSpgezJ9L1xuICAgIH0sXG4gICAgLy8gZ3VhcmQ6IGNvbnN0cmFpbmVkIGZvcm1hdHRpbmcgbWFyayBtYXkgbm90IGJlIHByZWNlZGVkIGJ5IFwiOlwiLCBcIjtcIiBvclxuICAgIC8vIFwifVwiLiBtYXRjaCB0aGVzZSBzbyB0aGUgY29uc3RyYWluZWQgcnVsZSBkb2Vzbid0IHNlZSB0aGVtXG4gICAge1xuICAgICAgYmVnaW46IC9bOjt9XVsqX2BdKD8hWypfYF0pL1xuICAgIH1cbiAgXTtcbiAgY29uc3QgU1RST05HID0gW1xuICAgIC8vIGlubGluZSB1bmNvbnN0cmFpbmVkIHN0cm9uZyAoc2luZ2xlIGxpbmUpXG4gICAge1xuICAgICAgY2xhc3NOYW1lOiAnc3Ryb25nJyxcbiAgICAgIGJlZ2luOiAvXFwqezJ9KFteXFxuXSs/KVxcKnsyfS9cbiAgICB9LFxuICAgIC8vIGlubGluZSB1bmNvbnN0cmFpbmVkIHN0cm9uZyAobXVsdGktbGluZSlcbiAgICB7XG4gICAgICBjbGFzc05hbWU6ICdzdHJvbmcnLFxuICAgICAgYmVnaW46IGNvbmNhdChcbiAgICAgICAgL1xcKlxcKi8sXG4gICAgICAgIC8oKFxcKig/IVxcKil8XFxcXFteXFxuXXxbXipcXG5cXFxcXSkrXFxuKSsvLFxuICAgICAgICAvKFxcKig/IVxcKil8XFxcXFteXFxuXXxbXipcXG5cXFxcXSkqLyxcbiAgICAgICAgL1xcKlxcKi9cbiAgICAgICksXG4gICAgICByZWxldmFuY2U6IDBcbiAgICB9LFxuICAgIC8vIGlubGluZSBjb25zdHJhaW5lZCBzdHJvbmcgKHNpbmdsZSBsaW5lKVxuICAgIHtcbiAgICAgIGNsYXNzTmFtZTogJ3N0cm9uZycsXG4gICAgICAvLyBtdXN0IG5vdCBwcmVjZWRlIG9yIGZvbGxvdyBhIHdvcmQgY2hhcmFjdGVyXG4gICAgICBiZWdpbjogL1xcQlxcKihcXFN8XFxTW15cXG5dKj9cXFMpXFwqKD8hXFx3KS9cbiAgICB9LFxuICAgIC8vIGlubGluZSBjb25zdHJhaW5lZCBzdHJvbmcgKG11bHRpLWxpbmUpXG4gICAge1xuICAgICAgY2xhc3NOYW1lOiAnc3Ryb25nJyxcbiAgICAgIC8vIG11c3Qgbm90IHByZWNlZGUgb3IgZm9sbG93IGEgd29yZCBjaGFyYWN0ZXJcbiAgICAgIGJlZ2luOiAvXFwqW15cXHNdKFteXFxuXStcXG4pKyhbXlxcbl0rKVxcKi9cbiAgICB9XG4gIF07XG4gIGNvbnN0IEVNUEhBU0lTID0gW1xuICAgIC8vIGlubGluZSB1bmNvbnN0cmFpbmVkIGVtcGhhc2lzIChzaW5nbGUgbGluZSlcbiAgICB7XG4gICAgICBjbGFzc05hbWU6ICdlbXBoYXNpcycsXG4gICAgICBiZWdpbjogL197Mn0oW15cXG5dKz8pX3syfS9cbiAgICB9LFxuICAgIC8vIGlubGluZSB1bmNvbnN0cmFpbmVkIGVtcGhhc2lzIChtdWx0aS1saW5lKVxuICAgIHtcbiAgICAgIGNsYXNzTmFtZTogJ2VtcGhhc2lzJyxcbiAgICAgIGJlZ2luOiBjb25jYXQoXG4gICAgICAgIC9fXy8sXG4gICAgICAgIC8oKF8oPyFfKXxcXFxcW15cXG5dfFteX1xcblxcXFxdKStcXG4pKy8sXG4gICAgICAgIC8oXyg/IV8pfFxcXFxbXlxcbl18W15fXFxuXFxcXF0pKi8sXG4gICAgICAgIC9fXy9cbiAgICAgICksXG4gICAgICByZWxldmFuY2U6IDBcbiAgICB9LFxuICAgIC8vIGlubGluZSBjb25zdHJhaW5lZCBlbXBoYXNpcyAoc2luZ2xlIGxpbmUpXG4gICAge1xuICAgICAgY2xhc3NOYW1lOiAnZW1waGFzaXMnLFxuICAgICAgLy8gbXVzdCBub3QgcHJlY2VkZSBvciBmb2xsb3cgYSB3b3JkIGNoYXJhY3RlclxuICAgICAgYmVnaW46IC9cXGJfKFxcU3xcXFNbXlxcbl0qP1xcUylfKD8hXFx3KS9cbiAgICB9LFxuICAgIC8vIGlubGluZSBjb25zdHJhaW5lZCBlbXBoYXNpcyAobXVsdGktbGluZSlcbiAgICB7XG4gICAgICBjbGFzc05hbWU6ICdlbXBoYXNpcycsXG4gICAgICAvLyBtdXN0IG5vdCBwcmVjZWRlIG9yIGZvbGxvdyBhIHdvcmQgY2hhcmFjdGVyXG4gICAgICBiZWdpbjogL19bXlxcc10oW15cXG5dK1xcbikrKFteXFxuXSspXy9cbiAgICB9LFxuICAgIC8vIGlubGluZSBjb25zdHJhaW5lZCBlbXBoYXNpcyB1c2luZyBzaW5nbGUgcXVvdGUgKGxlZ2FjeSlcbiAgICB7XG4gICAgICBjbGFzc05hbWU6ICdlbXBoYXNpcycsXG4gICAgICAvLyBtdXN0IG5vdCBmb2xsb3cgYSB3b3JkIGNoYXJhY3RlciBvciBiZSBmb2xsb3dlZCBieSBhIHNpbmdsZSBxdW90ZSBvciBzcGFjZVxuICAgICAgYmVnaW46ICdcXFxcQlxcJyg/IVtcXCdcXFxcc10pJyxcbiAgICAgIGVuZDogJyhcXFxcbnsyfXxcXCcpJyxcbiAgICAgIC8vIGFsbG93IGVzY2FwZWQgc2luZ2xlIHF1b3RlIGZvbGxvd2VkIGJ5IHdvcmQgY2hhclxuICAgICAgY29udGFpbnM6IFt7XG4gICAgICAgIGJlZ2luOiAnXFxcXFxcXFxcXCdcXFxcdycsXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfV0sXG4gICAgICByZWxldmFuY2U6IDBcbiAgICB9XG4gIF07XG4gIGNvbnN0IEFETU9OSVRJT04gPSB7XG4gICAgY2xhc3NOYW1lOiAnc3ltYm9sJyxcbiAgICBiZWdpbjogJ14oTk9URXxUSVB8SU1QT1JUQU5UfFdBUk5JTkd8Q0FVVElPTik6XFxcXHMrJyxcbiAgICByZWxldmFuY2U6IDEwXG4gIH07XG4gIGNvbnN0IEJVTExFVF9MSVNUID0ge1xuICAgIGNsYXNzTmFtZTogJ2J1bGxldCcsXG4gICAgYmVnaW46ICdeKFxcXFwqK3wtK3xcXFxcLit8W15cXFxcbl0rPzo6KVxcXFxzKydcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIG5hbWU6ICdBc2NpaURvYycsXG4gICAgYWxpYXNlczogWydhZG9jJ10sXG4gICAgY29udGFpbnM6IFtcbiAgICAgIC8vIGJsb2NrIGNvbW1lbnRcbiAgICAgIGhsanMuQ09NTUVOVChcbiAgICAgICAgJ14vezQsfVxcXFxuJyxcbiAgICAgICAgJ1xcXFxuL3s0LH0kJyxcbiAgICAgICAgLy8gY2FuIGFsc28gYmUgZG9uZSBhcy4uLlxuICAgICAgICAvLyAnXi97NCx9JCcsXG4gICAgICAgIC8vICdeL3s0LH0kJyxcbiAgICAgICAge1xuICAgICAgICAgIHJlbGV2YW5jZTogMTBcbiAgICAgICAgfVxuICAgICAgKSxcbiAgICAgIC8vIGxpbmUgY29tbWVudFxuICAgICAgaGxqcy5DT01NRU5UKFxuICAgICAgICAnXi8vJyxcbiAgICAgICAgJyQnLFxuICAgICAgICB7XG4gICAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICAgIH1cbiAgICAgICksXG4gICAgICAvLyB0aXRsZVxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICd0aXRsZScsXG4gICAgICAgIGJlZ2luOiAnXlxcXFwuXFxcXHcuKiQnXG4gICAgICB9LFxuICAgICAgLy8gZXhhbXBsZSwgYWRtb25pdGlvbiAmIHNpZGViYXIgYmxvY2tzXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnXls9XFxcXCpdezQsfVxcXFxuJyxcbiAgICAgICAgZW5kOiAnXFxcXG5eWz1cXFxcKl17NCx9JCcsXG4gICAgICAgIHJlbGV2YW5jZTogMTBcbiAgICAgIH0sXG4gICAgICAvLyBoZWFkaW5nc1xuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdzZWN0aW9uJyxcbiAgICAgICAgcmVsZXZhbmNlOiAxMCxcbiAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogJ14oPXsxLDZ9KVsgXFx0XS4rPyhbIFxcdF1cXFxcMSk/JCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luOiAnXlteXFxcXFtcXFxcXVxcXFxuXSs/XFxcXG5bPVxcXFwtflxcXFxeXFxcXCtdezIsfSQnXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgLy8gZG9jdW1lbnQgYXR0cmlidXRlc1xuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICAgICAgYmVnaW46ICdeOi4rPzonLFxuICAgICAgICBlbmQ6ICdcXFxccycsXG4gICAgICAgIGV4Y2x1ZGVFbmQ6IHRydWUsXG4gICAgICAgIHJlbGV2YW5jZTogMTBcbiAgICAgIH0sXG4gICAgICAvLyBibG9jayBhdHRyaWJ1dGVzXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgICAgICBiZWdpbjogJ15cXFxcWy4rP1xcXFxdJCcsXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIC8vIHF1b3RlYmxvY2tzXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3F1b3RlJyxcbiAgICAgICAgYmVnaW46ICdeX3s0LH1cXFxcbicsXG4gICAgICAgIGVuZDogJ1xcXFxuX3s0LH0kJyxcbiAgICAgICAgcmVsZXZhbmNlOiAxMFxuICAgICAgfSxcbiAgICAgIC8vIGxpc3RpbmcgYW5kIGxpdGVyYWwgYmxvY2tzXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2NvZGUnLFxuICAgICAgICBiZWdpbjogJ15bXFxcXC1cXFxcLl17NCx9XFxcXG4nLFxuICAgICAgICBlbmQ6ICdcXFxcbltcXFxcLVxcXFwuXXs0LH0kJyxcbiAgICAgICAgcmVsZXZhbmNlOiAxMFxuICAgICAgfSxcbiAgICAgIC8vIHBhc3N0aHJvdWdoIGJsb2Nrc1xuICAgICAge1xuICAgICAgICBiZWdpbjogJ15cXFxcK3s0LH1cXFxcbicsXG4gICAgICAgIGVuZDogJ1xcXFxuXFxcXCt7NCx9JCcsXG4gICAgICAgIGNvbnRhaW5zOiBbe1xuICAgICAgICAgIGJlZ2luOiAnPCcsXG4gICAgICAgICAgZW5kOiAnPicsXG4gICAgICAgICAgc3ViTGFuZ3VhZ2U6ICd4bWwnLFxuICAgICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgICB9XSxcbiAgICAgICAgcmVsZXZhbmNlOiAxMFxuICAgICAgfSxcblxuICAgICAgQlVMTEVUX0xJU1QsXG4gICAgICBBRE1PTklUSU9OLFxuICAgICAgLi4uRVNDQVBFRF9GT1JNQVRUSU5HLFxuICAgICAgLi4uU1RST05HLFxuICAgICAgLi4uRU1QSEFTSVMsXG5cbiAgICAgIC8vIGlubGluZSBzbWFydCBxdW90ZXNcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogXCJgYC4rPycnXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luOiBcImAuKz8nXCJcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICAvLyBpbmxpbmUgdW5jb25zdHJhaW5lZCBlbXBoYXNpc1xuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdjb2RlJyxcbiAgICAgICAgYmVnaW46IC9gezJ9LyxcbiAgICAgICAgZW5kOiAvKFxcbnsyfXxgezJ9KS9cbiAgICAgIH0sXG4gICAgICAvLyBpbmxpbmUgY29kZSBzbmlwcGV0cyAoVE9ETyBzaG91bGQgZ2V0IHNhbWUgdHJlYXRtZW50IGFzIHN0cm9uZyBhbmQgZW1waGFzaXMpXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2NvZGUnLFxuICAgICAgICBiZWdpbjogJyhgLis/YHxcXFxcKy4rP1xcXFwrKScsXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIC8vIGluZGVudGVkIGxpdGVyYWwgYmxvY2tcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnY29kZScsXG4gICAgICAgIGJlZ2luOiAnXlsgXFxcXHRdJyxcbiAgICAgICAgZW5kOiAnJCcsXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIEhPUklaT05UQUxfUlVMRSxcbiAgICAgIC8vIGltYWdlcyBhbmQgbGlua3NcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICcobGluazopPyhodHRwfGh0dHBzfGZ0cHxmaWxlfGlyY3xpbWFnZTo/KTpcXFxcUys/XFxcXFtbXltdKj9cXFxcXScsXG4gICAgICAgIHJldHVybkJlZ2luOiB0cnVlLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luOiAnKGxpbmt8aW1hZ2U6Pyk6JyxcbiAgICAgICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnbGluaycsXG4gICAgICAgICAgICBiZWdpbjogJ1xcXFx3JyxcbiAgICAgICAgICAgIGVuZDogJ1teXFxcXFtdKycsXG4gICAgICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgICAgICAgICBiZWdpbjogJ1xcXFxbJyxcbiAgICAgICAgICAgIGVuZDogJ1xcXFxdJyxcbiAgICAgICAgICAgIGV4Y2x1ZGVCZWdpbjogdHJ1ZSxcbiAgICAgICAgICAgIGV4Y2x1ZGVFbmQ6IHRydWUsXG4gICAgICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIHJlbGV2YW5jZTogMTBcbiAgICAgIH1cbiAgICBdXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXNjaWlkb2M7XG4iXSwic291cmNlUm9vdCI6IiJ9