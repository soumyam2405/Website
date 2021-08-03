exports.ids = [11];
exports.modules = {

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

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvYXNjaWlkb2MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWE7QUFDYjs7QUFFQTtBQUNBLFdBQVcsaUJBQWlCO0FBQzVCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyxzQkFBc0I7QUFDakMsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsR0FBRztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsRUFBRSxVQUFVLEVBQUU7QUFDbkMsS0FBSztBQUNMO0FBQ0Esb0JBQW9CLEVBQUUsUUFBUSxFQUFFO0FBQ2hDLEtBQUs7QUFDTDtBQUNBLG9CQUFvQixFQUFFLFFBQVEsRUFBRTtBQUNoQyxLQUFLO0FBQ0wsd0VBQXdFO0FBQ3hFLFNBQVM7QUFDVDtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsRUFBRSxZQUFZLEVBQUU7QUFDakMsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixFQUFFLFdBQVcsRUFBRTtBQUMvQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsRUFBRTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxHQUFHO0FBQ2YsY0FBYyxHQUFHO0FBQ2pCO0FBQ0EsZUFBZSxHQUFHO0FBQ2xCLGVBQWUsR0FBRztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0Esd0JBQXdCLEdBQUc7QUFDM0IseUJBQXlCLEdBQUc7QUFDNUI7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLElBQUk7QUFDNUIsV0FBVztBQUNYO0FBQ0Esb0RBQW9ELEdBQUc7QUFDdkQ7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixHQUFHO0FBQ3RCLG1CQUFtQixHQUFHO0FBQ3RCO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixHQUFHO0FBQzdCLDBCQUEwQixHQUFHO0FBQzdCO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxxQkFBcUIsR0FBRztBQUN4QixxQkFBcUIsR0FBRztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsRUFBRTtBQUNwQixrQkFBa0IsRUFBRSxHQUFHLEVBQUU7QUFDekIsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiMTEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHJldHVybnMge1JlZ0V4cH1cbiAqICovXG5cbi8qKlxuICogQHBhcmFtIHtSZWdFeHAgfCBzdHJpbmcgfSByZVxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gc291cmNlKHJlKSB7XG4gIGlmICghcmUpIHJldHVybiBudWxsO1xuICBpZiAodHlwZW9mIHJlID09PSBcInN0cmluZ1wiKSByZXR1cm4gcmU7XG5cbiAgcmV0dXJuIHJlLnNvdXJjZTtcbn1cblxuLyoqXG4gKiBAcGFyYW0gey4uLihSZWdFeHAgfCBzdHJpbmcpIH0gYXJnc1xuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gY29uY2F0KC4uLmFyZ3MpIHtcbiAgY29uc3Qgam9pbmVkID0gYXJncy5tYXAoKHgpID0+IHNvdXJjZSh4KSkuam9pbihcIlwiKTtcbiAgcmV0dXJuIGpvaW5lZDtcbn1cblxuLypcbkxhbmd1YWdlOiBBc2NpaURvY1xuUmVxdWlyZXM6IHhtbC5qc1xuQXV0aG9yOiBEYW4gQWxsZW4gPGRhbi5qLmFsbGVuQGdtYWlsLmNvbT5cbldlYnNpdGU6IGh0dHA6Ly9hc2NpaWRvYy5vcmdcbkRlc2NyaXB0aW9uOiBBIHNlbWFudGljLCB0ZXh0LWJhc2VkIGRvY3VtZW50IGZvcm1hdCB0aGF0IGNhbiBiZSBleHBvcnRlZCB0byBIVE1MLCBEb2NCb29rIGFuZCBvdGhlciBiYWNrZW5kcy5cbkNhdGVnb3J5OiBtYXJrdXBcbiovXG5cbi8qKiBAdHlwZSBMYW5ndWFnZUZuICovXG5mdW5jdGlvbiBhc2NpaWRvYyhobGpzKSB7XG4gIGNvbnN0IEhPUklaT05UQUxfUlVMRSA9IHtcbiAgICBiZWdpbjogJ15cXCd7Myx9WyBcXFxcdF0qJCcsXG4gICAgcmVsZXZhbmNlOiAxMFxuICB9O1xuICBjb25zdCBFU0NBUEVEX0ZPUk1BVFRJTkcgPSBbXG4gICAgLy8gZXNjYXBlZCBjb25zdHJhaW5lZCBmb3JtYXR0aW5nIG1hcmtzIChpLmUuLCBcXCogXFxfIG9yIFxcYClcbiAgICB7XG4gICAgICBiZWdpbjogL1xcXFxbKl9gXS9cbiAgICB9LFxuICAgIC8vIGVzY2FwZWQgdW5jb25zdHJhaW5lZCBmb3JtYXR0aW5nIG1hcmtzIChpLmUuLCBcXFxcKiogXFxcXF9fIG9yIFxcXFxgYClcbiAgICAvLyBtdXN0IGlnbm9yZSB1bnRpbCB0aGUgbmV4dCBmb3JtYXR0aW5nIG1hcmtzXG4gICAgLy8gdGhpcyBydWxlIG1pZ2h0IG5vdCBiZSAxMDAlIGNvbXBsaWFudCB3aXRoIEFzY2lpZG9jdG9yIDIuMCBidXQgd2UgYXJlIGVudGVyaW5nIHVuZGVmaW5lZCBiZWhhdmlvciB0ZXJyaXRvcnkuLi5cbiAgICB7XG4gICAgICBiZWdpbjogL1xcXFxcXFxcXFwqezJ9W15cXG5dKj9cXCp7Mn0vXG4gICAgfSxcbiAgICB7XG4gICAgICBiZWdpbjogL1xcXFxcXFxcX3syfVteXFxuXSpfezJ9L1xuICAgIH0sXG4gICAge1xuICAgICAgYmVnaW46IC9cXFxcXFxcXGB7Mn1bXlxcbl0qYHsyfS9cbiAgICB9LFxuICAgIC8vIGd1YXJkOiBjb25zdHJhaW5lZCBmb3JtYXR0aW5nIG1hcmsgbWF5IG5vdCBiZSBwcmVjZWRlZCBieSBcIjpcIiwgXCI7XCIgb3JcbiAgICAvLyBcIn1cIi4gbWF0Y2ggdGhlc2Ugc28gdGhlIGNvbnN0cmFpbmVkIHJ1bGUgZG9lc24ndCBzZWUgdGhlbVxuICAgIHtcbiAgICAgIGJlZ2luOiAvWzo7fV1bKl9gXSg/IVsqX2BdKS9cbiAgICB9XG4gIF07XG4gIGNvbnN0IFNUUk9ORyA9IFtcbiAgICAvLyBpbmxpbmUgdW5jb25zdHJhaW5lZCBzdHJvbmcgKHNpbmdsZSBsaW5lKVxuICAgIHtcbiAgICAgIGNsYXNzTmFtZTogJ3N0cm9uZycsXG4gICAgICBiZWdpbjogL1xcKnsyfShbXlxcbl0rPylcXCp7Mn0vXG4gICAgfSxcbiAgICAvLyBpbmxpbmUgdW5jb25zdHJhaW5lZCBzdHJvbmcgKG11bHRpLWxpbmUpXG4gICAge1xuICAgICAgY2xhc3NOYW1lOiAnc3Ryb25nJyxcbiAgICAgIGJlZ2luOiBjb25jYXQoXG4gICAgICAgIC9cXCpcXCovLFxuICAgICAgICAvKChcXCooPyFcXCopfFxcXFxbXlxcbl18W14qXFxuXFxcXF0pK1xcbikrLyxcbiAgICAgICAgLyhcXCooPyFcXCopfFxcXFxbXlxcbl18W14qXFxuXFxcXF0pKi8sXG4gICAgICAgIC9cXCpcXCovXG4gICAgICApLFxuICAgICAgcmVsZXZhbmNlOiAwXG4gICAgfSxcbiAgICAvLyBpbmxpbmUgY29uc3RyYWluZWQgc3Ryb25nIChzaW5nbGUgbGluZSlcbiAgICB7XG4gICAgICBjbGFzc05hbWU6ICdzdHJvbmcnLFxuICAgICAgLy8gbXVzdCBub3QgcHJlY2VkZSBvciBmb2xsb3cgYSB3b3JkIGNoYXJhY3RlclxuICAgICAgYmVnaW46IC9cXEJcXCooXFxTfFxcU1teXFxuXSo/XFxTKVxcKig/IVxcdykvXG4gICAgfSxcbiAgICAvLyBpbmxpbmUgY29uc3RyYWluZWQgc3Ryb25nIChtdWx0aS1saW5lKVxuICAgIHtcbiAgICAgIGNsYXNzTmFtZTogJ3N0cm9uZycsXG4gICAgICAvLyBtdXN0IG5vdCBwcmVjZWRlIG9yIGZvbGxvdyBhIHdvcmQgY2hhcmFjdGVyXG4gICAgICBiZWdpbjogL1xcKlteXFxzXShbXlxcbl0rXFxuKSsoW15cXG5dKylcXCovXG4gICAgfVxuICBdO1xuICBjb25zdCBFTVBIQVNJUyA9IFtcbiAgICAvLyBpbmxpbmUgdW5jb25zdHJhaW5lZCBlbXBoYXNpcyAoc2luZ2xlIGxpbmUpXG4gICAge1xuICAgICAgY2xhc3NOYW1lOiAnZW1waGFzaXMnLFxuICAgICAgYmVnaW46IC9fezJ9KFteXFxuXSs/KV97Mn0vXG4gICAgfSxcbiAgICAvLyBpbmxpbmUgdW5jb25zdHJhaW5lZCBlbXBoYXNpcyAobXVsdGktbGluZSlcbiAgICB7XG4gICAgICBjbGFzc05hbWU6ICdlbXBoYXNpcycsXG4gICAgICBiZWdpbjogY29uY2F0KFxuICAgICAgICAvX18vLFxuICAgICAgICAvKChfKD8hXyl8XFxcXFteXFxuXXxbXl9cXG5cXFxcXSkrXFxuKSsvLFxuICAgICAgICAvKF8oPyFfKXxcXFxcW15cXG5dfFteX1xcblxcXFxdKSovLFxuICAgICAgICAvX18vXG4gICAgICApLFxuICAgICAgcmVsZXZhbmNlOiAwXG4gICAgfSxcbiAgICAvLyBpbmxpbmUgY29uc3RyYWluZWQgZW1waGFzaXMgKHNpbmdsZSBsaW5lKVxuICAgIHtcbiAgICAgIGNsYXNzTmFtZTogJ2VtcGhhc2lzJyxcbiAgICAgIC8vIG11c3Qgbm90IHByZWNlZGUgb3IgZm9sbG93IGEgd29yZCBjaGFyYWN0ZXJcbiAgICAgIGJlZ2luOiAvXFxiXyhcXFN8XFxTW15cXG5dKj9cXFMpXyg/IVxcdykvXG4gICAgfSxcbiAgICAvLyBpbmxpbmUgY29uc3RyYWluZWQgZW1waGFzaXMgKG11bHRpLWxpbmUpXG4gICAge1xuICAgICAgY2xhc3NOYW1lOiAnZW1waGFzaXMnLFxuICAgICAgLy8gbXVzdCBub3QgcHJlY2VkZSBvciBmb2xsb3cgYSB3b3JkIGNoYXJhY3RlclxuICAgICAgYmVnaW46IC9fW15cXHNdKFteXFxuXStcXG4pKyhbXlxcbl0rKV8vXG4gICAgfSxcbiAgICAvLyBpbmxpbmUgY29uc3RyYWluZWQgZW1waGFzaXMgdXNpbmcgc2luZ2xlIHF1b3RlIChsZWdhY3kpXG4gICAge1xuICAgICAgY2xhc3NOYW1lOiAnZW1waGFzaXMnLFxuICAgICAgLy8gbXVzdCBub3QgZm9sbG93IGEgd29yZCBjaGFyYWN0ZXIgb3IgYmUgZm9sbG93ZWQgYnkgYSBzaW5nbGUgcXVvdGUgb3Igc3BhY2VcbiAgICAgIGJlZ2luOiAnXFxcXEJcXCcoPyFbXFwnXFxcXHNdKScsXG4gICAgICBlbmQ6ICcoXFxcXG57Mn18XFwnKScsXG4gICAgICAvLyBhbGxvdyBlc2NhcGVkIHNpbmdsZSBxdW90ZSBmb2xsb3dlZCBieSB3b3JkIGNoYXJcbiAgICAgIGNvbnRhaW5zOiBbe1xuICAgICAgICBiZWdpbjogJ1xcXFxcXFxcXFwnXFxcXHcnLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH1dLFxuICAgICAgcmVsZXZhbmNlOiAwXG4gICAgfVxuICBdO1xuICBjb25zdCBBRE1PTklUSU9OID0ge1xuICAgIGNsYXNzTmFtZTogJ3N5bWJvbCcsXG4gICAgYmVnaW46ICdeKE5PVEV8VElQfElNUE9SVEFOVHxXQVJOSU5HfENBVVRJT04pOlxcXFxzKycsXG4gICAgcmVsZXZhbmNlOiAxMFxuICB9O1xuICBjb25zdCBCVUxMRVRfTElTVCA9IHtcbiAgICBjbGFzc05hbWU6ICdidWxsZXQnLFxuICAgIGJlZ2luOiAnXihcXFxcKit8LSt8XFxcXC4rfFteXFxcXG5dKz86OilcXFxccysnXG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnQXNjaWlEb2MnLFxuICAgIGFsaWFzZXM6IFsnYWRvYyddLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICAvLyBibG9jayBjb21tZW50XG4gICAgICBobGpzLkNPTU1FTlQoXG4gICAgICAgICdeL3s0LH1cXFxcbicsXG4gICAgICAgICdcXFxcbi97NCx9JCcsXG4gICAgICAgIC8vIGNhbiBhbHNvIGJlIGRvbmUgYXMuLi5cbiAgICAgICAgLy8gJ14vezQsfSQnLFxuICAgICAgICAvLyAnXi97NCx9JCcsXG4gICAgICAgIHtcbiAgICAgICAgICByZWxldmFuY2U6IDEwXG4gICAgICAgIH1cbiAgICAgICksXG4gICAgICAvLyBsaW5lIGNvbW1lbnRcbiAgICAgIGhsanMuQ09NTUVOVChcbiAgICAgICAgJ14vLycsXG4gICAgICAgICckJyxcbiAgICAgICAge1xuICAgICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgICB9XG4gICAgICApLFxuICAgICAgLy8gdGl0bGVcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAndGl0bGUnLFxuICAgICAgICBiZWdpbjogJ15cXFxcLlxcXFx3LiokJ1xuICAgICAgfSxcbiAgICAgIC8vIGV4YW1wbGUsIGFkbW9uaXRpb24gJiBzaWRlYmFyIGJsb2Nrc1xuICAgICAge1xuICAgICAgICBiZWdpbjogJ15bPVxcXFwqXXs0LH1cXFxcbicsXG4gICAgICAgIGVuZDogJ1xcXFxuXls9XFxcXCpdezQsfSQnLFxuICAgICAgICByZWxldmFuY2U6IDEwXG4gICAgICB9LFxuICAgICAgLy8gaGVhZGluZ3NcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnc2VjdGlvbicsXG4gICAgICAgIHJlbGV2YW5jZTogMTAsXG4gICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW46ICdeKD17MSw2fSlbIFxcdF0uKz8oWyBcXHRdXFxcXDEpPyQnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogJ15bXlxcXFxbXFxcXF1cXFxcbl0rP1xcXFxuWz1cXFxcLX5cXFxcXlxcXFwrXXsyLH0kJ1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIC8vIGRvY3VtZW50IGF0dHJpYnV0ZXNcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgICAgIGJlZ2luOiAnXjouKz86JyxcbiAgICAgICAgZW5kOiAnXFxcXHMnLFxuICAgICAgICBleGNsdWRlRW5kOiB0cnVlLFxuICAgICAgICByZWxldmFuY2U6IDEwXG4gICAgICB9LFxuICAgICAgLy8gYmxvY2sgYXR0cmlidXRlc1xuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICAgICAgYmVnaW46ICdeXFxcXFsuKz9cXFxcXSQnLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICAvLyBxdW90ZWJsb2Nrc1xuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdxdW90ZScsXG4gICAgICAgIGJlZ2luOiAnXl97NCx9XFxcXG4nLFxuICAgICAgICBlbmQ6ICdcXFxcbl97NCx9JCcsXG4gICAgICAgIHJlbGV2YW5jZTogMTBcbiAgICAgIH0sXG4gICAgICAvLyBsaXN0aW5nIGFuZCBsaXRlcmFsIGJsb2Nrc1xuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdjb2RlJyxcbiAgICAgICAgYmVnaW46ICdeW1xcXFwtXFxcXC5dezQsfVxcXFxuJyxcbiAgICAgICAgZW5kOiAnXFxcXG5bXFxcXC1cXFxcLl17NCx9JCcsXG4gICAgICAgIHJlbGV2YW5jZTogMTBcbiAgICAgIH0sXG4gICAgICAvLyBwYXNzdGhyb3VnaCBibG9ja3NcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICdeXFxcXCt7NCx9XFxcXG4nLFxuICAgICAgICBlbmQ6ICdcXFxcblxcXFwrezQsfSQnLFxuICAgICAgICBjb250YWluczogW3tcbiAgICAgICAgICBiZWdpbjogJzwnLFxuICAgICAgICAgIGVuZDogJz4nLFxuICAgICAgICAgIHN1Ykxhbmd1YWdlOiAneG1sJyxcbiAgICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgICAgfV0sXG4gICAgICAgIHJlbGV2YW5jZTogMTBcbiAgICAgIH0sXG5cbiAgICAgIEJVTExFVF9MSVNULFxuICAgICAgQURNT05JVElPTixcbiAgICAgIC4uLkVTQ0FQRURfRk9STUFUVElORyxcbiAgICAgIC4uLlNUUk9ORyxcbiAgICAgIC4uLkVNUEhBU0lTLFxuXG4gICAgICAvLyBpbmxpbmUgc21hcnQgcXVvdGVzXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW46IFwiYGAuKz8nJ1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogXCJgLis/J1wiXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgLy8gaW5saW5lIHVuY29uc3RyYWluZWQgZW1waGFzaXNcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnY29kZScsXG4gICAgICAgIGJlZ2luOiAvYHsyfS8sXG4gICAgICAgIGVuZDogLyhcXG57Mn18YHsyfSkvXG4gICAgICB9LFxuICAgICAgLy8gaW5saW5lIGNvZGUgc25pcHBldHMgKFRPRE8gc2hvdWxkIGdldCBzYW1lIHRyZWF0bWVudCBhcyBzdHJvbmcgYW5kIGVtcGhhc2lzKVxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdjb2RlJyxcbiAgICAgICAgYmVnaW46ICcoYC4rP2B8XFxcXCsuKz9cXFxcKyknLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICAvLyBpbmRlbnRlZCBsaXRlcmFsIGJsb2NrXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2NvZGUnLFxuICAgICAgICBiZWdpbjogJ15bIFxcXFx0XScsXG4gICAgICAgIGVuZDogJyQnLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICBIT1JJWk9OVEFMX1JVTEUsXG4gICAgICAvLyBpbWFnZXMgYW5kIGxpbmtzXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnKGxpbms6KT8oaHR0cHxodHRwc3xmdHB8ZmlsZXxpcmN8aW1hZ2U6Pyk6XFxcXFMrP1xcXFxbW15bXSo/XFxcXF0nLFxuICAgICAgICByZXR1cm5CZWdpbjogdHJ1ZSxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogJyhsaW5rfGltYWdlOj8pOicsXG4gICAgICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2xpbmsnLFxuICAgICAgICAgICAgYmVnaW46ICdcXFxcdycsXG4gICAgICAgICAgICBlbmQ6ICdbXlxcXFxbXSsnLFxuICAgICAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgYmVnaW46ICdcXFxcWycsXG4gICAgICAgICAgICBlbmQ6ICdcXFxcXScsXG4gICAgICAgICAgICBleGNsdWRlQmVnaW46IHRydWUsXG4gICAgICAgICAgICBleGNsdWRlRW5kOiB0cnVlLFxuICAgICAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICByZWxldmFuY2U6IDEwXG4gICAgICB9XG4gICAgXVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFzY2lpZG9jO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==