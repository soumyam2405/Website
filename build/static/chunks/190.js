(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[190],{

/***/ "./node_modules/highlight.js/lib/languages/yaml.js":
/*!*********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/yaml.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: YAML
Description: Yet Another Markdown Language
Author: Stefan Wienert <stwienert@gmail.com>
Contributors: Carl Baxter <carl@cbax.tech>
Requires: ruby.js
Website: https://yaml.org
Category: common, config
*/
function yaml(hljs) {
  var LITERALS = 'true false yes no null';

  // YAML spec allows non-reserved URI characters in tags.
  var URI_CHARACTERS = '[\\w#;/?:@&=+$,.~*\'()[\\]]+';

  // Define keys as starting with a word character
  // ...containing word chars, spaces, colons, forward-slashes, hyphens and periods
  // ...and ending with a colon followed immediately by a space, tab or newline.
  // The YAML spec allows for much more than this, but this covers most use-cases.
  var KEY = {
    className: 'attr',
    variants: [
      { begin: '\\w[\\w :\\/.-]*:(?=[ \t]|$)' },
      { begin: '"\\w[\\w :\\/.-]*":(?=[ \t]|$)' }, // double quoted keys
      { begin: '\'\\w[\\w :\\/.-]*\':(?=[ \t]|$)' } // single quoted keys
    ]
  };

  var TEMPLATE_VARIABLES = {
    className: 'template-variable',
    variants: [
      { begin: /\{\{/, end: /\}\}/ }, // jinja templates Ansible
      { begin: /%\{/, end: /\}/ } // Ruby i18n
    ]
  };
  var STRING = {
    className: 'string',
    relevance: 0,
    variants: [
      { begin: /'/, end: /'/ },
      { begin: /"/, end: /"/ },
      { begin: /\S+/ }
    ],
    contains: [
      hljs.BACKSLASH_ESCAPE,
      TEMPLATE_VARIABLES
    ]
  };

  // Strings inside of value containers (objects) can't contain braces,
  // brackets, or commas
  var CONTAINER_STRING = hljs.inherit(STRING, {
    variants: [
      { begin: /'/, end: /'/ },
      { begin: /"/, end: /"/ },
      { begin: /[^\s,{}[\]]+/ }
    ]
  });

  var DATE_RE = '[0-9]{4}(-[0-9][0-9]){0,2}';
  var TIME_RE = '([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?';
  var FRACTION_RE = '(\\.[0-9]*)?';
  var ZONE_RE = '([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?';
  var TIMESTAMP = {
    className: 'number',
    begin: '\\b' + DATE_RE + TIME_RE + FRACTION_RE + ZONE_RE + '\\b'
  };

  var VALUE_CONTAINER = {
    end: ',',
    endsWithParent: true,
    excludeEnd: true,
    keywords: LITERALS,
    relevance: 0
  };
  var OBJECT = {
    begin: /\{/,
    end: /\}/,
    contains: [VALUE_CONTAINER],
    illegal: '\\n',
    relevance: 0
  };
  var ARRAY = {
    begin: '\\[',
    end: '\\]',
    contains: [VALUE_CONTAINER],
    illegal: '\\n',
    relevance: 0
  };

  var MODES = [
    KEY,
    {
      className: 'meta',
      begin: '^---\\s*$',
      relevance: 10
    },
    { // multi line string
      // Blocks start with a | or > followed by a newline
      //
      // Indentation of subsequent lines must be the same to
      // be considered part of the block
      className: 'string',
      begin: '[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*'
    },
    { // Ruby/Rails erb
      begin: '<%[%=-]?',
      end: '[%-]?%>',
      subLanguage: 'ruby',
      excludeBegin: true,
      excludeEnd: true,
      relevance: 0
    },
    { // named tags
      className: 'type',
      begin: '!\\w+!' + URI_CHARACTERS
    },
    // https://yaml.org/spec/1.2/spec.html#id2784064
    { // verbatim tags
      className: 'type',
      begin: '!<' + URI_CHARACTERS + ">"
    },
    { // primary tags
      className: 'type',
      begin: '!' + URI_CHARACTERS
    },
    { // secondary tags
      className: 'type',
      begin: '!!' + URI_CHARACTERS
    },
    { // fragment id &ref
      className: 'meta',
      begin: '&' + hljs.UNDERSCORE_IDENT_RE + '$'
    },
    { // fragment reference *ref
      className: 'meta',
      begin: '\\*' + hljs.UNDERSCORE_IDENT_RE + '$'
    },
    { // array listing
      className: 'bullet',
      // TODO: remove |$ hack when we have proper look-ahead support
      begin: '-(?=[ ]|$)',
      relevance: 0
    },
    hljs.HASH_COMMENT_MODE,
    {
      beginKeywords: LITERALS,
      keywords: { literal: LITERALS }
    },
    TIMESTAMP,
    // numbers are any valid C-style number that
    // sit isolated from other words
    {
      className: 'number',
      begin: hljs.C_NUMBER_RE + '\\b',
      relevance: 0
    },
    OBJECT,
    ARRAY,
    STRING
  ];

  var VALUE_MODES = [...MODES];
  VALUE_MODES.pop();
  VALUE_MODES.push(CONTAINER_STRING);
  VALUE_CONTAINER.contains = VALUE_MODES;

  return {
    name: 'YAML',
    case_insensitive: true,
    aliases: ['yml', 'YAML'],
    contains: MODES
  };
}

module.exports = yaml;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3lhbWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhCQUE4Qjs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHdDQUF3QztBQUMvQyxPQUFPLDBDQUEwQztBQUNqRCxPQUFPLDRDQUE0QztBQUNuRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sV0FBVyxFQUFFLFdBQVcsRUFBRSxHQUFHO0FBQ3BDLE9BQU8sWUFBWSxXQUFXLEdBQUc7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyx1QkFBdUI7QUFDOUIsT0FBTyx1QkFBdUI7QUFDOUIsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sdUJBQXVCO0FBQzlCLE9BQU8sdUJBQXVCO0FBQzlCLE9BQU8sZ0JBQWdCO0FBQ3ZCO0FBQ0EsR0FBRzs7QUFFSCx1QkFBdUIsRUFBRSxjQUFjLElBQUk7QUFDM0MsbURBQW1ELEVBQUU7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2QsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvMTkwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBZQU1MXG5EZXNjcmlwdGlvbjogWWV0IEFub3RoZXIgTWFya2Rvd24gTGFuZ3VhZ2VcbkF1dGhvcjogU3RlZmFuIFdpZW5lcnQgPHN0d2llbmVydEBnbWFpbC5jb20+XG5Db250cmlidXRvcnM6IENhcmwgQmF4dGVyIDxjYXJsQGNiYXgudGVjaD5cblJlcXVpcmVzOiBydWJ5LmpzXG5XZWJzaXRlOiBodHRwczovL3lhbWwub3JnXG5DYXRlZ29yeTogY29tbW9uLCBjb25maWdcbiovXG5mdW5jdGlvbiB5YW1sKGhsanMpIHtcbiAgdmFyIExJVEVSQUxTID0gJ3RydWUgZmFsc2UgeWVzIG5vIG51bGwnO1xuXG4gIC8vIFlBTUwgc3BlYyBhbGxvd3Mgbm9uLXJlc2VydmVkIFVSSSBjaGFyYWN0ZXJzIGluIHRhZ3MuXG4gIHZhciBVUklfQ0hBUkFDVEVSUyA9ICdbXFxcXHcjOy8/OkAmPSskLC5+KlxcJygpW1xcXFxdXSsnO1xuXG4gIC8vIERlZmluZSBrZXlzIGFzIHN0YXJ0aW5nIHdpdGggYSB3b3JkIGNoYXJhY3RlclxuICAvLyAuLi5jb250YWluaW5nIHdvcmQgY2hhcnMsIHNwYWNlcywgY29sb25zLCBmb3J3YXJkLXNsYXNoZXMsIGh5cGhlbnMgYW5kIHBlcmlvZHNcbiAgLy8gLi4uYW5kIGVuZGluZyB3aXRoIGEgY29sb24gZm9sbG93ZWQgaW1tZWRpYXRlbHkgYnkgYSBzcGFjZSwgdGFiIG9yIG5ld2xpbmUuXG4gIC8vIFRoZSBZQU1MIHNwZWMgYWxsb3dzIGZvciBtdWNoIG1vcmUgdGhhbiB0aGlzLCBidXQgdGhpcyBjb3ZlcnMgbW9zdCB1c2UtY2FzZXMuXG4gIHZhciBLRVkgPSB7XG4gICAgY2xhc3NOYW1lOiAnYXR0cicsXG4gICAgdmFyaWFudHM6IFtcbiAgICAgIHsgYmVnaW46ICdcXFxcd1tcXFxcdyA6XFxcXC8uLV0qOig/PVsgXFx0XXwkKScgfSxcbiAgICAgIHsgYmVnaW46ICdcIlxcXFx3W1xcXFx3IDpcXFxcLy4tXSpcIjooPz1bIFxcdF18JCknIH0sIC8vIGRvdWJsZSBxdW90ZWQga2V5c1xuICAgICAgeyBiZWdpbjogJ1xcJ1xcXFx3W1xcXFx3IDpcXFxcLy4tXSpcXCc6KD89WyBcXHRdfCQpJyB9IC8vIHNpbmdsZSBxdW90ZWQga2V5c1xuICAgIF1cbiAgfTtcblxuICB2YXIgVEVNUExBVEVfVkFSSUFCTEVTID0ge1xuICAgIGNsYXNzTmFtZTogJ3RlbXBsYXRlLXZhcmlhYmxlJyxcbiAgICB2YXJpYW50czogW1xuICAgICAgeyBiZWdpbjogL1xce1xcey8sIGVuZDogL1xcfVxcfS8gfSwgLy8gamluamEgdGVtcGxhdGVzIEFuc2libGVcbiAgICAgIHsgYmVnaW46IC8lXFx7LywgZW5kOiAvXFx9LyB9IC8vIFJ1YnkgaTE4blxuICAgIF1cbiAgfTtcbiAgdmFyIFNUUklORyA9IHtcbiAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgIHJlbGV2YW5jZTogMCxcbiAgICB2YXJpYW50czogW1xuICAgICAgeyBiZWdpbjogLycvLCBlbmQ6IC8nLyB9LFxuICAgICAgeyBiZWdpbjogL1wiLywgZW5kOiAvXCIvIH0sXG4gICAgICB7IGJlZ2luOiAvXFxTKy8gfVxuICAgIF0sXG4gICAgY29udGFpbnM6IFtcbiAgICAgIGhsanMuQkFDS1NMQVNIX0VTQ0FQRSxcbiAgICAgIFRFTVBMQVRFX1ZBUklBQkxFU1xuICAgIF1cbiAgfTtcblxuICAvLyBTdHJpbmdzIGluc2lkZSBvZiB2YWx1ZSBjb250YWluZXJzIChvYmplY3RzKSBjYW4ndCBjb250YWluIGJyYWNlcyxcbiAgLy8gYnJhY2tldHMsIG9yIGNvbW1hc1xuICB2YXIgQ09OVEFJTkVSX1NUUklORyA9IGhsanMuaW5oZXJpdChTVFJJTkcsIHtcbiAgICB2YXJpYW50czogW1xuICAgICAgeyBiZWdpbjogLycvLCBlbmQ6IC8nLyB9LFxuICAgICAgeyBiZWdpbjogL1wiLywgZW5kOiAvXCIvIH0sXG4gICAgICB7IGJlZ2luOiAvW15cXHMse31bXFxdXSsvIH1cbiAgICBdXG4gIH0pO1xuXG4gIHZhciBEQVRFX1JFID0gJ1swLTldezR9KC1bMC05XVswLTldKXswLDJ9JztcbiAgdmFyIFRJTUVfUkUgPSAnKFtUdCBcXFxcdF1bMC05XVswLTldPyg6WzAtOV1bMC05XSl7Mn0pPyc7XG4gIHZhciBGUkFDVElPTl9SRSA9ICcoXFxcXC5bMC05XSopPyc7XG4gIHZhciBaT05FX1JFID0gJyhbIFxcXFx0XSkqKFp8Wy0rXVswLTldWzAtOV0/KDpbMC05XVswLTldKT8pPyc7XG4gIHZhciBUSU1FU1RBTVAgPSB7XG4gICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICBiZWdpbjogJ1xcXFxiJyArIERBVEVfUkUgKyBUSU1FX1JFICsgRlJBQ1RJT05fUkUgKyBaT05FX1JFICsgJ1xcXFxiJ1xuICB9O1xuXG4gIHZhciBWQUxVRV9DT05UQUlORVIgPSB7XG4gICAgZW5kOiAnLCcsXG4gICAgZW5kc1dpdGhQYXJlbnQ6IHRydWUsXG4gICAgZXhjbHVkZUVuZDogdHJ1ZSxcbiAgICBrZXl3b3JkczogTElURVJBTFMsXG4gICAgcmVsZXZhbmNlOiAwXG4gIH07XG4gIHZhciBPQkpFQ1QgPSB7XG4gICAgYmVnaW46IC9cXHsvLFxuICAgIGVuZDogL1xcfS8sXG4gICAgY29udGFpbnM6IFtWQUxVRV9DT05UQUlORVJdLFxuICAgIGlsbGVnYWw6ICdcXFxcbicsXG4gICAgcmVsZXZhbmNlOiAwXG4gIH07XG4gIHZhciBBUlJBWSA9IHtcbiAgICBiZWdpbjogJ1xcXFxbJyxcbiAgICBlbmQ6ICdcXFxcXScsXG4gICAgY29udGFpbnM6IFtWQUxVRV9DT05UQUlORVJdLFxuICAgIGlsbGVnYWw6ICdcXFxcbicsXG4gICAgcmVsZXZhbmNlOiAwXG4gIH07XG5cbiAgdmFyIE1PREVTID0gW1xuICAgIEtFWSxcbiAgICB7XG4gICAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICAgIGJlZ2luOiAnXi0tLVxcXFxzKiQnLFxuICAgICAgcmVsZXZhbmNlOiAxMFxuICAgIH0sXG4gICAgeyAvLyBtdWx0aSBsaW5lIHN0cmluZ1xuICAgICAgLy8gQmxvY2tzIHN0YXJ0IHdpdGggYSB8IG9yID4gZm9sbG93ZWQgYnkgYSBuZXdsaW5lXG4gICAgICAvL1xuICAgICAgLy8gSW5kZW50YXRpb24gb2Ygc3Vic2VxdWVudCBsaW5lcyBtdXN0IGJlIHRoZSBzYW1lIHRvXG4gICAgICAvLyBiZSBjb25zaWRlcmVkIHBhcnQgb2YgdGhlIGJsb2NrXG4gICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgYmVnaW46ICdbXFxcXHw+XShbMS05XT9bKy1dKT9bIF0qXFxcXG4oICspW14gXVteXFxcXG5dKlxcXFxuKFxcXFwyW15cXFxcbl0rXFxcXG4/KSonXG4gICAgfSxcbiAgICB7IC8vIFJ1YnkvUmFpbHMgZXJiXG4gICAgICBiZWdpbjogJzwlWyU9LV0/JyxcbiAgICAgIGVuZDogJ1slLV0/JT4nLFxuICAgICAgc3ViTGFuZ3VhZ2U6ICdydWJ5JyxcbiAgICAgIGV4Y2x1ZGVCZWdpbjogdHJ1ZSxcbiAgICAgIGV4Y2x1ZGVFbmQ6IHRydWUsXG4gICAgICByZWxldmFuY2U6IDBcbiAgICB9LFxuICAgIHsgLy8gbmFtZWQgdGFnc1xuICAgICAgY2xhc3NOYW1lOiAndHlwZScsXG4gICAgICBiZWdpbjogJyFcXFxcdyshJyArIFVSSV9DSEFSQUNURVJTXG4gICAgfSxcbiAgICAvLyBodHRwczovL3lhbWwub3JnL3NwZWMvMS4yL3NwZWMuaHRtbCNpZDI3ODQwNjRcbiAgICB7IC8vIHZlcmJhdGltIHRhZ3NcbiAgICAgIGNsYXNzTmFtZTogJ3R5cGUnLFxuICAgICAgYmVnaW46ICchPCcgKyBVUklfQ0hBUkFDVEVSUyArIFwiPlwiXG4gICAgfSxcbiAgICB7IC8vIHByaW1hcnkgdGFnc1xuICAgICAgY2xhc3NOYW1lOiAndHlwZScsXG4gICAgICBiZWdpbjogJyEnICsgVVJJX0NIQVJBQ1RFUlNcbiAgICB9LFxuICAgIHsgLy8gc2Vjb25kYXJ5IHRhZ3NcbiAgICAgIGNsYXNzTmFtZTogJ3R5cGUnLFxuICAgICAgYmVnaW46ICchIScgKyBVUklfQ0hBUkFDVEVSU1xuICAgIH0sXG4gICAgeyAvLyBmcmFnbWVudCBpZCAmcmVmXG4gICAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICAgIGJlZ2luOiAnJicgKyBobGpzLlVOREVSU0NPUkVfSURFTlRfUkUgKyAnJCdcbiAgICB9LFxuICAgIHsgLy8gZnJhZ21lbnQgcmVmZXJlbmNlICpyZWZcbiAgICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgICAgYmVnaW46ICdcXFxcKicgKyBobGpzLlVOREVSU0NPUkVfSURFTlRfUkUgKyAnJCdcbiAgICB9LFxuICAgIHsgLy8gYXJyYXkgbGlzdGluZ1xuICAgICAgY2xhc3NOYW1lOiAnYnVsbGV0JyxcbiAgICAgIC8vIFRPRE86IHJlbW92ZSB8JCBoYWNrIHdoZW4gd2UgaGF2ZSBwcm9wZXIgbG9vay1haGVhZCBzdXBwb3J0XG4gICAgICBiZWdpbjogJy0oPz1bIF18JCknLFxuICAgICAgcmVsZXZhbmNlOiAwXG4gICAgfSxcbiAgICBobGpzLkhBU0hfQ09NTUVOVF9NT0RFLFxuICAgIHtcbiAgICAgIGJlZ2luS2V5d29yZHM6IExJVEVSQUxTLFxuICAgICAga2V5d29yZHM6IHsgbGl0ZXJhbDogTElURVJBTFMgfVxuICAgIH0sXG4gICAgVElNRVNUQU1QLFxuICAgIC8vIG51bWJlcnMgYXJlIGFueSB2YWxpZCBDLXN0eWxlIG51bWJlciB0aGF0XG4gICAgLy8gc2l0IGlzb2xhdGVkIGZyb20gb3RoZXIgd29yZHNcbiAgICB7XG4gICAgICBjbGFzc05hbWU6ICdudW1iZXInLFxuICAgICAgYmVnaW46IGhsanMuQ19OVU1CRVJfUkUgKyAnXFxcXGInLFxuICAgICAgcmVsZXZhbmNlOiAwXG4gICAgfSxcbiAgICBPQkpFQ1QsXG4gICAgQVJSQVksXG4gICAgU1RSSU5HXG4gIF07XG5cbiAgdmFyIFZBTFVFX01PREVTID0gWy4uLk1PREVTXTtcbiAgVkFMVUVfTU9ERVMucG9wKCk7XG4gIFZBTFVFX01PREVTLnB1c2goQ09OVEFJTkVSX1NUUklORyk7XG4gIFZBTFVFX0NPTlRBSU5FUi5jb250YWlucyA9IFZBTFVFX01PREVTO1xuXG4gIHJldHVybiB7XG4gICAgbmFtZTogJ1lBTUwnLFxuICAgIGNhc2VfaW5zZW5zaXRpdmU6IHRydWUsXG4gICAgYWxpYXNlczogWyd5bWwnLCAnWUFNTCddLFxuICAgIGNvbnRhaW5zOiBNT0RFU1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHlhbWw7XG4iXSwic291cmNlUm9vdCI6IiJ9