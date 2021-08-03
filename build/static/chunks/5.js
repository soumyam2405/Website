(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[5],{

/***/ "./node_modules/highlight.js/lib/languages/ada.js":
/*!********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/ada.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Ada
Author: Lars Schulna <kartoffelbrei.mit.muskatnuss@gmail.org>
Description: Ada is a general-purpose programming language that has great support for saftey critical and real-time applications.
             It has been developed by the DoD and thus has been used in military and safety-critical applications (like civil aviation).
             The first version appeared in the 80s, but it's still actively developed today with
             the newest standard being Ada2012.
*/

// We try to support full Ada2012
//
// We highlight all appearances of types, keywords, literals (string, char, number, bool)
// and titles (user defined function/procedure/package)
// CSS classes are set accordingly
//
// Languages causing problems for language detection:
// xml (broken by Foo : Bar type), elm (broken by Foo : Bar type), vbscript-html (broken by body keyword)
// sql (ada default.txt has a lot of sql keywords)

/** @type LanguageFn */
function ada(hljs) {
  // Regular expression for Ada numeric literals.
  // stolen form the VHDL highlighter

  // Decimal literal:
  const INTEGER_RE = '\\d(_|\\d)*';
  const EXPONENT_RE = '[eE][-+]?' + INTEGER_RE;
  const DECIMAL_LITERAL_RE = INTEGER_RE + '(\\.' + INTEGER_RE + ')?' + '(' + EXPONENT_RE + ')?';

  // Based literal:
  const BASED_INTEGER_RE = '\\w+';
  const BASED_LITERAL_RE = INTEGER_RE + '#' + BASED_INTEGER_RE + '(\\.' + BASED_INTEGER_RE + ')?' + '#' + '(' + EXPONENT_RE + ')?';

  const NUMBER_RE = '\\b(' + BASED_LITERAL_RE + '|' + DECIMAL_LITERAL_RE + ')';

  // Identifier regex
  const ID_REGEX = '[A-Za-z](_?[A-Za-z0-9.])*';

  // bad chars, only allowed in literals
  const BAD_CHARS = `[]\\{\\}%#'"`;

  // Ada doesn't have block comments, only line comments
  const COMMENTS = hljs.COMMENT('--', '$');

  // variable declarations of the form
  // Foo : Bar := Baz;
  // where only Bar will be highlighted
  const VAR_DECLS = {
    // TODO: These spaces are not required by the Ada syntax
    // however, I have yet to see handwritten Ada code where
    // someone does not put spaces around :
    begin: '\\s+:\\s+',
    end: '\\s*(:=|;|\\)|=>|$)',
    // endsWithParent: true,
    // returnBegin: true,
    illegal: BAD_CHARS,
    contains: [
      {
        // workaround to avoid highlighting
        // named loops and declare blocks
        beginKeywords: 'loop for declare others',
        endsParent: true
      },
      {
        // properly highlight all modifiers
        className: 'keyword',
        beginKeywords: 'not null constant access function procedure in out aliased exception'
      },
      {
        className: 'type',
        begin: ID_REGEX,
        endsParent: true,
        relevance: 0
      }
    ]
  };

  return {
    name: 'Ada',
    case_insensitive: true,
    keywords: {
      keyword:
                'abort else new return abs elsif not reverse abstract end ' +
                'accept entry select access exception of separate aliased exit or some ' +
                'all others subtype and for out synchronized array function overriding ' +
                'at tagged generic package task begin goto pragma terminate ' +
                'body private then if procedure type case in protected constant interface ' +
                'is raise use declare range delay limited record when delta loop rem while ' +
                'digits renames with do mod requeue xor',
      literal:
                'True False'
    },
    contains: [
      COMMENTS,
      // strings "foobar"
      {
        className: 'string',
        begin: /"/,
        end: /"/,
        contains: [{
          begin: /""/,
          relevance: 0
        }]
      },
      // characters ''
      {
        // character literals always contain one char
        className: 'string',
        begin: /'.'/
      },
      {
        // number literals
        className: 'number',
        begin: NUMBER_RE,
        relevance: 0
      },
      {
        // Attributes
        className: 'symbol',
        begin: "'" + ID_REGEX
      },
      {
        // package definition, maybe inside generic
        className: 'title',
        begin: '(\\bwith\\s+)?(\\bprivate\\s+)?\\bpackage\\s+(\\bbody\\s+)?',
        end: '(is|$)',
        keywords: 'package body',
        excludeBegin: true,
        excludeEnd: true,
        illegal: BAD_CHARS
      },
      {
        // function/procedure declaration/definition
        // maybe inside generic
        begin: '(\\b(with|overriding)\\s+)?\\b(function|procedure)\\s+',
        end: '(\\bis|\\bwith|\\brenames|\\)\\s*;)',
        keywords: 'overriding function procedure with is renames return',
        // we need to re-match the 'function' keyword, so that
        // the title mode below matches only exactly once
        returnBegin: true,
        contains:
                [
                  COMMENTS,
                  {
                    // name of the function/procedure
                    className: 'title',
                    begin: '(\\bwith\\s+)?\\b(function|procedure)\\s+',
                    end: '(\\(|\\s+|$)',
                    excludeBegin: true,
                    excludeEnd: true,
                    illegal: BAD_CHARS
                  },
                  // 'self'
                  // // parameter types
                  VAR_DECLS,
                  {
                    // return type
                    className: 'type',
                    begin: '\\breturn\\s+',
                    end: '(\\s+|;|$)',
                    keywords: 'return',
                    excludeBegin: true,
                    excludeEnd: true,
                    // we are done with functions
                    endsParent: true,
                    illegal: BAD_CHARS

                  }
                ]
      },
      {
        // new type declarations
        // maybe inside generic
        className: 'type',
        begin: '\\b(sub)?type\\s+',
        end: '\\s+',
        keywords: 'type',
        excludeBegin: true,
        illegal: BAD_CHARS
      },

      // see comment above the definition
      VAR_DECLS

      // no markup
      // relevance boosters for small snippets
      // {begin: '\\s*=>\\s*'},
      // {begin: '\\s*:=\\s*'},
      // {begin: '\\s+:=\\s+'},
    ]
  };
}

module.exports = ada;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2FkYS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQixHQUFHOztBQUU3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVLG9CQUFvQjtBQUM5QixVQUFVLG9CQUFvQjtBQUM5QixVQUFVLG9CQUFvQjtBQUM5QjtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoic3RhdGljL2NodW5rcy81LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBBZGFcbkF1dGhvcjogTGFycyBTY2h1bG5hIDxrYXJ0b2ZmZWxicmVpLm1pdC5tdXNrYXRudXNzQGdtYWlsLm9yZz5cbkRlc2NyaXB0aW9uOiBBZGEgaXMgYSBnZW5lcmFsLXB1cnBvc2UgcHJvZ3JhbW1pbmcgbGFuZ3VhZ2UgdGhhdCBoYXMgZ3JlYXQgc3VwcG9ydCBmb3Igc2FmdGV5IGNyaXRpY2FsIGFuZCByZWFsLXRpbWUgYXBwbGljYXRpb25zLlxuICAgICAgICAgICAgIEl0IGhhcyBiZWVuIGRldmVsb3BlZCBieSB0aGUgRG9EIGFuZCB0aHVzIGhhcyBiZWVuIHVzZWQgaW4gbWlsaXRhcnkgYW5kIHNhZmV0eS1jcml0aWNhbCBhcHBsaWNhdGlvbnMgKGxpa2UgY2l2aWwgYXZpYXRpb24pLlxuICAgICAgICAgICAgIFRoZSBmaXJzdCB2ZXJzaW9uIGFwcGVhcmVkIGluIHRoZSA4MHMsIGJ1dCBpdCdzIHN0aWxsIGFjdGl2ZWx5IGRldmVsb3BlZCB0b2RheSB3aXRoXG4gICAgICAgICAgICAgdGhlIG5ld2VzdCBzdGFuZGFyZCBiZWluZyBBZGEyMDEyLlxuKi9cblxuLy8gV2UgdHJ5IHRvIHN1cHBvcnQgZnVsbCBBZGEyMDEyXG4vL1xuLy8gV2UgaGlnaGxpZ2h0IGFsbCBhcHBlYXJhbmNlcyBvZiB0eXBlcywga2V5d29yZHMsIGxpdGVyYWxzIChzdHJpbmcsIGNoYXIsIG51bWJlciwgYm9vbClcbi8vIGFuZCB0aXRsZXMgKHVzZXIgZGVmaW5lZCBmdW5jdGlvbi9wcm9jZWR1cmUvcGFja2FnZSlcbi8vIENTUyBjbGFzc2VzIGFyZSBzZXQgYWNjb3JkaW5nbHlcbi8vXG4vLyBMYW5ndWFnZXMgY2F1c2luZyBwcm9ibGVtcyBmb3IgbGFuZ3VhZ2UgZGV0ZWN0aW9uOlxuLy8geG1sIChicm9rZW4gYnkgRm9vIDogQmFyIHR5cGUpLCBlbG0gKGJyb2tlbiBieSBGb28gOiBCYXIgdHlwZSksIHZic2NyaXB0LWh0bWwgKGJyb2tlbiBieSBib2R5IGtleXdvcmQpXG4vLyBzcWwgKGFkYSBkZWZhdWx0LnR4dCBoYXMgYSBsb3Qgb2Ygc3FsIGtleXdvcmRzKVxuXG4vKiogQHR5cGUgTGFuZ3VhZ2VGbiAqL1xuZnVuY3Rpb24gYWRhKGhsanMpIHtcbiAgLy8gUmVndWxhciBleHByZXNzaW9uIGZvciBBZGEgbnVtZXJpYyBsaXRlcmFscy5cbiAgLy8gc3RvbGVuIGZvcm0gdGhlIFZIREwgaGlnaGxpZ2h0ZXJcblxuICAvLyBEZWNpbWFsIGxpdGVyYWw6XG4gIGNvbnN0IElOVEVHRVJfUkUgPSAnXFxcXGQoX3xcXFxcZCkqJztcbiAgY29uc3QgRVhQT05FTlRfUkUgPSAnW2VFXVstK10/JyArIElOVEVHRVJfUkU7XG4gIGNvbnN0IERFQ0lNQUxfTElURVJBTF9SRSA9IElOVEVHRVJfUkUgKyAnKFxcXFwuJyArIElOVEVHRVJfUkUgKyAnKT8nICsgJygnICsgRVhQT05FTlRfUkUgKyAnKT8nO1xuXG4gIC8vIEJhc2VkIGxpdGVyYWw6XG4gIGNvbnN0IEJBU0VEX0lOVEVHRVJfUkUgPSAnXFxcXHcrJztcbiAgY29uc3QgQkFTRURfTElURVJBTF9SRSA9IElOVEVHRVJfUkUgKyAnIycgKyBCQVNFRF9JTlRFR0VSX1JFICsgJyhcXFxcLicgKyBCQVNFRF9JTlRFR0VSX1JFICsgJyk/JyArICcjJyArICcoJyArIEVYUE9ORU5UX1JFICsgJyk/JztcblxuICBjb25zdCBOVU1CRVJfUkUgPSAnXFxcXGIoJyArIEJBU0VEX0xJVEVSQUxfUkUgKyAnfCcgKyBERUNJTUFMX0xJVEVSQUxfUkUgKyAnKSc7XG5cbiAgLy8gSWRlbnRpZmllciByZWdleFxuICBjb25zdCBJRF9SRUdFWCA9ICdbQS1aYS16XShfP1tBLVphLXowLTkuXSkqJztcblxuICAvLyBiYWQgY2hhcnMsIG9ubHkgYWxsb3dlZCBpbiBsaXRlcmFsc1xuICBjb25zdCBCQURfQ0hBUlMgPSBgW11cXFxce1xcXFx9JSMnXCJgO1xuXG4gIC8vIEFkYSBkb2Vzbid0IGhhdmUgYmxvY2sgY29tbWVudHMsIG9ubHkgbGluZSBjb21tZW50c1xuICBjb25zdCBDT01NRU5UUyA9IGhsanMuQ09NTUVOVCgnLS0nLCAnJCcpO1xuXG4gIC8vIHZhcmlhYmxlIGRlY2xhcmF0aW9ucyBvZiB0aGUgZm9ybVxuICAvLyBGb28gOiBCYXIgOj0gQmF6O1xuICAvLyB3aGVyZSBvbmx5IEJhciB3aWxsIGJlIGhpZ2hsaWdodGVkXG4gIGNvbnN0IFZBUl9ERUNMUyA9IHtcbiAgICAvLyBUT0RPOiBUaGVzZSBzcGFjZXMgYXJlIG5vdCByZXF1aXJlZCBieSB0aGUgQWRhIHN5bnRheFxuICAgIC8vIGhvd2V2ZXIsIEkgaGF2ZSB5ZXQgdG8gc2VlIGhhbmR3cml0dGVuIEFkYSBjb2RlIHdoZXJlXG4gICAgLy8gc29tZW9uZSBkb2VzIG5vdCBwdXQgc3BhY2VzIGFyb3VuZCA6XG4gICAgYmVnaW46ICdcXFxccys6XFxcXHMrJyxcbiAgICBlbmQ6ICdcXFxccyooOj18O3xcXFxcKXw9PnwkKScsXG4gICAgLy8gZW5kc1dpdGhQYXJlbnQ6IHRydWUsXG4gICAgLy8gcmV0dXJuQmVnaW46IHRydWUsXG4gICAgaWxsZWdhbDogQkFEX0NIQVJTLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICB7XG4gICAgICAgIC8vIHdvcmthcm91bmQgdG8gYXZvaWQgaGlnaGxpZ2h0aW5nXG4gICAgICAgIC8vIG5hbWVkIGxvb3BzIGFuZCBkZWNsYXJlIGJsb2Nrc1xuICAgICAgICBiZWdpbktleXdvcmRzOiAnbG9vcCBmb3IgZGVjbGFyZSBvdGhlcnMnLFxuICAgICAgICBlbmRzUGFyZW50OiB0cnVlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAvLyBwcm9wZXJseSBoaWdobGlnaHQgYWxsIG1vZGlmaWVyc1xuICAgICAgICBjbGFzc05hbWU6ICdrZXl3b3JkJyxcbiAgICAgICAgYmVnaW5LZXl3b3JkczogJ25vdCBudWxsIGNvbnN0YW50IGFjY2VzcyBmdW5jdGlvbiBwcm9jZWR1cmUgaW4gb3V0IGFsaWFzZWQgZXhjZXB0aW9uJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAndHlwZScsXG4gICAgICAgIGJlZ2luOiBJRF9SRUdFWCxcbiAgICAgICAgZW5kc1BhcmVudDogdHJ1ZSxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9XG4gICAgXVxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgbmFtZTogJ0FkYScsXG4gICAgY2FzZV9pbnNlbnNpdGl2ZTogdHJ1ZSxcbiAgICBrZXl3b3Jkczoge1xuICAgICAga2V5d29yZDpcbiAgICAgICAgICAgICAgICAnYWJvcnQgZWxzZSBuZXcgcmV0dXJuIGFicyBlbHNpZiBub3QgcmV2ZXJzZSBhYnN0cmFjdCBlbmQgJyArXG4gICAgICAgICAgICAgICAgJ2FjY2VwdCBlbnRyeSBzZWxlY3QgYWNjZXNzIGV4Y2VwdGlvbiBvZiBzZXBhcmF0ZSBhbGlhc2VkIGV4aXQgb3Igc29tZSAnICtcbiAgICAgICAgICAgICAgICAnYWxsIG90aGVycyBzdWJ0eXBlIGFuZCBmb3Igb3V0IHN5bmNocm9uaXplZCBhcnJheSBmdW5jdGlvbiBvdmVycmlkaW5nICcgK1xuICAgICAgICAgICAgICAgICdhdCB0YWdnZWQgZ2VuZXJpYyBwYWNrYWdlIHRhc2sgYmVnaW4gZ290byBwcmFnbWEgdGVybWluYXRlICcgK1xuICAgICAgICAgICAgICAgICdib2R5IHByaXZhdGUgdGhlbiBpZiBwcm9jZWR1cmUgdHlwZSBjYXNlIGluIHByb3RlY3RlZCBjb25zdGFudCBpbnRlcmZhY2UgJyArXG4gICAgICAgICAgICAgICAgJ2lzIHJhaXNlIHVzZSBkZWNsYXJlIHJhbmdlIGRlbGF5IGxpbWl0ZWQgcmVjb3JkIHdoZW4gZGVsdGEgbG9vcCByZW0gd2hpbGUgJyArXG4gICAgICAgICAgICAgICAgJ2RpZ2l0cyByZW5hbWVzIHdpdGggZG8gbW9kIHJlcXVldWUgeG9yJyxcbiAgICAgIGxpdGVyYWw6XG4gICAgICAgICAgICAgICAgJ1RydWUgRmFsc2UnXG4gICAgfSxcbiAgICBjb250YWluczogW1xuICAgICAgQ09NTUVOVFMsXG4gICAgICAvLyBzdHJpbmdzIFwiZm9vYmFyXCJcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICAgICAgYmVnaW46IC9cIi8sXG4gICAgICAgIGVuZDogL1wiLyxcbiAgICAgICAgY29udGFpbnM6IFt7XG4gICAgICAgICAgYmVnaW46IC9cIlwiLyxcbiAgICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgICAgfV1cbiAgICAgIH0sXG4gICAgICAvLyBjaGFyYWN0ZXJzICcnXG4gICAgICB7XG4gICAgICAgIC8vIGNoYXJhY3RlciBsaXRlcmFscyBhbHdheXMgY29udGFpbiBvbmUgY2hhclxuICAgICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgICBiZWdpbjogLycuJy9cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIC8vIG51bWJlciBsaXRlcmFsc1xuICAgICAgICBjbGFzc05hbWU6ICdudW1iZXInLFxuICAgICAgICBiZWdpbjogTlVNQkVSX1JFLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIC8vIEF0dHJpYnV0ZXNcbiAgICAgICAgY2xhc3NOYW1lOiAnc3ltYm9sJyxcbiAgICAgICAgYmVnaW46IFwiJ1wiICsgSURfUkVHRVhcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIC8vIHBhY2thZ2UgZGVmaW5pdGlvbiwgbWF5YmUgaW5zaWRlIGdlbmVyaWNcbiAgICAgICAgY2xhc3NOYW1lOiAndGl0bGUnLFxuICAgICAgICBiZWdpbjogJyhcXFxcYndpdGhcXFxccyspPyhcXFxcYnByaXZhdGVcXFxccyspP1xcXFxicGFja2FnZVxcXFxzKyhcXFxcYmJvZHlcXFxccyspPycsXG4gICAgICAgIGVuZDogJyhpc3wkKScsXG4gICAgICAgIGtleXdvcmRzOiAncGFja2FnZSBib2R5JyxcbiAgICAgICAgZXhjbHVkZUJlZ2luOiB0cnVlLFxuICAgICAgICBleGNsdWRlRW5kOiB0cnVlLFxuICAgICAgICBpbGxlZ2FsOiBCQURfQ0hBUlNcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIC8vIGZ1bmN0aW9uL3Byb2NlZHVyZSBkZWNsYXJhdGlvbi9kZWZpbml0aW9uXG4gICAgICAgIC8vIG1heWJlIGluc2lkZSBnZW5lcmljXG4gICAgICAgIGJlZ2luOiAnKFxcXFxiKHdpdGh8b3ZlcnJpZGluZylcXFxccyspP1xcXFxiKGZ1bmN0aW9ufHByb2NlZHVyZSlcXFxccysnLFxuICAgICAgICBlbmQ6ICcoXFxcXGJpc3xcXFxcYndpdGh8XFxcXGJyZW5hbWVzfFxcXFwpXFxcXHMqOyknLFxuICAgICAgICBrZXl3b3JkczogJ292ZXJyaWRpbmcgZnVuY3Rpb24gcHJvY2VkdXJlIHdpdGggaXMgcmVuYW1lcyByZXR1cm4nLFxuICAgICAgICAvLyB3ZSBuZWVkIHRvIHJlLW1hdGNoIHRoZSAnZnVuY3Rpb24nIGtleXdvcmQsIHNvIHRoYXRcbiAgICAgICAgLy8gdGhlIHRpdGxlIG1vZGUgYmVsb3cgbWF0Y2hlcyBvbmx5IGV4YWN0bHkgb25jZVxuICAgICAgICByZXR1cm5CZWdpbjogdHJ1ZSxcbiAgICAgICAgY29udGFpbnM6XG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgQ09NTUVOVFMsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIC8vIG5hbWUgb2YgdGhlIGZ1bmN0aW9uL3Byb2NlZHVyZVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICd0aXRsZScsXG4gICAgICAgICAgICAgICAgICAgIGJlZ2luOiAnKFxcXFxid2l0aFxcXFxzKyk/XFxcXGIoZnVuY3Rpb258cHJvY2VkdXJlKVxcXFxzKycsXG4gICAgICAgICAgICAgICAgICAgIGVuZDogJyhcXFxcKHxcXFxccyt8JCknLFxuICAgICAgICAgICAgICAgICAgICBleGNsdWRlQmVnaW46IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGV4Y2x1ZGVFbmQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGlsbGVnYWw6IEJBRF9DSEFSU1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIC8vICdzZWxmJ1xuICAgICAgICAgICAgICAgICAgLy8gLy8gcGFyYW1ldGVyIHR5cGVzXG4gICAgICAgICAgICAgICAgICBWQVJfREVDTFMsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHJldHVybiB0eXBlXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ3R5cGUnLFxuICAgICAgICAgICAgICAgICAgICBiZWdpbjogJ1xcXFxicmV0dXJuXFxcXHMrJyxcbiAgICAgICAgICAgICAgICAgICAgZW5kOiAnKFxcXFxzK3w7fCQpJyxcbiAgICAgICAgICAgICAgICAgICAga2V5d29yZHM6ICdyZXR1cm4nLFxuICAgICAgICAgICAgICAgICAgICBleGNsdWRlQmVnaW46IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGV4Y2x1ZGVFbmQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIC8vIHdlIGFyZSBkb25lIHdpdGggZnVuY3Rpb25zXG4gICAgICAgICAgICAgICAgICAgIGVuZHNQYXJlbnQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGlsbGVnYWw6IEJBRF9DSEFSU1xuXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgLy8gbmV3IHR5cGUgZGVjbGFyYXRpb25zXG4gICAgICAgIC8vIG1heWJlIGluc2lkZSBnZW5lcmljXG4gICAgICAgIGNsYXNzTmFtZTogJ3R5cGUnLFxuICAgICAgICBiZWdpbjogJ1xcXFxiKHN1Yik/dHlwZVxcXFxzKycsXG4gICAgICAgIGVuZDogJ1xcXFxzKycsXG4gICAgICAgIGtleXdvcmRzOiAndHlwZScsXG4gICAgICAgIGV4Y2x1ZGVCZWdpbjogdHJ1ZSxcbiAgICAgICAgaWxsZWdhbDogQkFEX0NIQVJTXG4gICAgICB9LFxuXG4gICAgICAvLyBzZWUgY29tbWVudCBhYm92ZSB0aGUgZGVmaW5pdGlvblxuICAgICAgVkFSX0RFQ0xTXG5cbiAgICAgIC8vIG5vIG1hcmt1cFxuICAgICAgLy8gcmVsZXZhbmNlIGJvb3N0ZXJzIGZvciBzbWFsbCBzbmlwcGV0c1xuICAgICAgLy8ge2JlZ2luOiAnXFxcXHMqPT5cXFxccyonfSxcbiAgICAgIC8vIHtiZWdpbjogJ1xcXFxzKjo9XFxcXHMqJ30sXG4gICAgICAvLyB7YmVnaW46ICdcXFxccys6PVxcXFxzKyd9LFxuICAgIF1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhZGE7XG4iXSwic291cmNlUm9vdCI6IiJ9