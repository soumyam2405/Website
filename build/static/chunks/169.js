(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[169],{

/***/ "./node_modules/highlight.js/lib/languages/stylus.js":
/*!***********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/stylus.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const MODES = (hljs) => {
  return {
    IMPORTANT: {
      className: 'meta',
      begin: '!important'
    },
    HEXCOLOR: {
      className: 'number',
      begin: '#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})'
    },
    ATTRIBUTE_SELECTOR_MODE: {
      className: 'selector-attr',
      begin: /\[/,
      end: /\]/,
      illegal: '$',
      contains: [
        hljs.APOS_STRING_MODE,
        hljs.QUOTE_STRING_MODE
      ]
    }
  };
};

const TAGS = [
  'a',
  'abbr',
  'address',
  'article',
  'aside',
  'audio',
  'b',
  'blockquote',
  'body',
  'button',
  'canvas',
  'caption',
  'cite',
  'code',
  'dd',
  'del',
  'details',
  'dfn',
  'div',
  'dl',
  'dt',
  'em',
  'fieldset',
  'figcaption',
  'figure',
  'footer',
  'form',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'header',
  'hgroup',
  'html',
  'i',
  'iframe',
  'img',
  'input',
  'ins',
  'kbd',
  'label',
  'legend',
  'li',
  'main',
  'mark',
  'menu',
  'nav',
  'object',
  'ol',
  'p',
  'q',
  'quote',
  'samp',
  'section',
  'span',
  'strong',
  'summary',
  'sup',
  'table',
  'tbody',
  'td',
  'textarea',
  'tfoot',
  'th',
  'thead',
  'time',
  'tr',
  'ul',
  'var',
  'video'
];

const MEDIA_FEATURES = [
  'any-hover',
  'any-pointer',
  'aspect-ratio',
  'color',
  'color-gamut',
  'color-index',
  'device-aspect-ratio',
  'device-height',
  'device-width',
  'display-mode',
  'forced-colors',
  'grid',
  'height',
  'hover',
  'inverted-colors',
  'monochrome',
  'orientation',
  'overflow-block',
  'overflow-inline',
  'pointer',
  'prefers-color-scheme',
  'prefers-contrast',
  'prefers-reduced-motion',
  'prefers-reduced-transparency',
  'resolution',
  'scan',
  'scripting',
  'update',
  'width',
  // TODO: find a better solution?
  'min-width',
  'max-width',
  'min-height',
  'max-height'
];

// https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes
const PSEUDO_CLASSES = [
  'active',
  'any-link',
  'blank',
  'checked',
  'current',
  'default',
  'defined',
  'dir', // dir()
  'disabled',
  'drop',
  'empty',
  'enabled',
  'first',
  'first-child',
  'first-of-type',
  'fullscreen',
  'future',
  'focus',
  'focus-visible',
  'focus-within',
  'has', // has()
  'host', // host or host()
  'host-context', // host-context()
  'hover',
  'indeterminate',
  'in-range',
  'invalid',
  'is', // is()
  'lang', // lang()
  'last-child',
  'last-of-type',
  'left',
  'link',
  'local-link',
  'not', // not()
  'nth-child', // nth-child()
  'nth-col', // nth-col()
  'nth-last-child', // nth-last-child()
  'nth-last-col', // nth-last-col()
  'nth-last-of-type', //nth-last-of-type()
  'nth-of-type', //nth-of-type()
  'only-child',
  'only-of-type',
  'optional',
  'out-of-range',
  'past',
  'placeholder-shown',
  'read-only',
  'read-write',
  'required',
  'right',
  'root',
  'scope',
  'target',
  'target-within',
  'user-invalid',
  'valid',
  'visited',
  'where' // where()
];

// https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements
const PSEUDO_ELEMENTS = [
  'after',
  'backdrop',
  'before',
  'cue',
  'cue-region',
  'first-letter',
  'first-line',
  'grammar-error',
  'marker',
  'part',
  'placeholder',
  'selection',
  'slotted',
  'spelling-error'
];

const ATTRIBUTES = [
  'align-content',
  'align-items',
  'align-self',
  'animation',
  'animation-delay',
  'animation-direction',
  'animation-duration',
  'animation-fill-mode',
  'animation-iteration-count',
  'animation-name',
  'animation-play-state',
  'animation-timing-function',
  'auto',
  'backface-visibility',
  'background',
  'background-attachment',
  'background-clip',
  'background-color',
  'background-image',
  'background-origin',
  'background-position',
  'background-repeat',
  'background-size',
  'border',
  'border-bottom',
  'border-bottom-color',
  'border-bottom-left-radius',
  'border-bottom-right-radius',
  'border-bottom-style',
  'border-bottom-width',
  'border-collapse',
  'border-color',
  'border-image',
  'border-image-outset',
  'border-image-repeat',
  'border-image-slice',
  'border-image-source',
  'border-image-width',
  'border-left',
  'border-left-color',
  'border-left-style',
  'border-left-width',
  'border-radius',
  'border-right',
  'border-right-color',
  'border-right-style',
  'border-right-width',
  'border-spacing',
  'border-style',
  'border-top',
  'border-top-color',
  'border-top-left-radius',
  'border-top-right-radius',
  'border-top-style',
  'border-top-width',
  'border-width',
  'bottom',
  'box-decoration-break',
  'box-shadow',
  'box-sizing',
  'break-after',
  'break-before',
  'break-inside',
  'caption-side',
  'clear',
  'clip',
  'clip-path',
  'color',
  'column-count',
  'column-fill',
  'column-gap',
  'column-rule',
  'column-rule-color',
  'column-rule-style',
  'column-rule-width',
  'column-span',
  'column-width',
  'columns',
  'content',
  'counter-increment',
  'counter-reset',
  'cursor',
  'direction',
  'display',
  'empty-cells',
  'filter',
  'flex',
  'flex-basis',
  'flex-direction',
  'flex-flow',
  'flex-grow',
  'flex-shrink',
  'flex-wrap',
  'float',
  'font',
  'font-display',
  'font-family',
  'font-feature-settings',
  'font-kerning',
  'font-language-override',
  'font-size',
  'font-size-adjust',
  'font-stretch',
  'font-style',
  'font-variant',
  'font-variant-ligatures',
  'font-variation-settings',
  'font-weight',
  'height',
  'hyphens',
  'icon',
  'image-orientation',
  'image-rendering',
  'image-resolution',
  'ime-mode',
  'inherit',
  'initial',
  'justify-content',
  'left',
  'letter-spacing',
  'line-height',
  'list-style',
  'list-style-image',
  'list-style-position',
  'list-style-type',
  'margin',
  'margin-bottom',
  'margin-left',
  'margin-right',
  'margin-top',
  'marks',
  'mask',
  'max-height',
  'max-width',
  'min-height',
  'min-width',
  'nav-down',
  'nav-index',
  'nav-left',
  'nav-right',
  'nav-up',
  'none',
  'normal',
  'object-fit',
  'object-position',
  'opacity',
  'order',
  'orphans',
  'outline',
  'outline-color',
  'outline-offset',
  'outline-style',
  'outline-width',
  'overflow',
  'overflow-wrap',
  'overflow-x',
  'overflow-y',
  'padding',
  'padding-bottom',
  'padding-left',
  'padding-right',
  'padding-top',
  'page-break-after',
  'page-break-before',
  'page-break-inside',
  'perspective',
  'perspective-origin',
  'pointer-events',
  'position',
  'quotes',
  'resize',
  'right',
  'src', // @font-face
  'tab-size',
  'table-layout',
  'text-align',
  'text-align-last',
  'text-decoration',
  'text-decoration-color',
  'text-decoration-line',
  'text-decoration-style',
  'text-indent',
  'text-overflow',
  'text-rendering',
  'text-shadow',
  'text-transform',
  'text-underline-position',
  'top',
  'transform',
  'transform-origin',
  'transform-style',
  'transition',
  'transition-delay',
  'transition-duration',
  'transition-property',
  'transition-timing-function',
  'unicode-bidi',
  'vertical-align',
  'visibility',
  'white-space',
  'widows',
  'width',
  'word-break',
  'word-spacing',
  'word-wrap',
  'z-index'
  // reverse makes sure longer attributes `font-weight` are matched fully
  // instead of getting false positives on say `font`
].reverse();

/*
Language: Stylus
Author: Bryant Williams <b.n.williams@gmail.com>
Description: Stylus is an expressive, robust, feature-rich CSS language built for nodejs.
Website: https://github.com/stylus/stylus
Category: css
*/

/** @type LanguageFn */
function stylus(hljs) {
  const modes = MODES(hljs);

  const AT_MODIFIERS = "and or not only";
  const VARIABLE = {
    className: 'variable',
    begin: '\\$' + hljs.IDENT_RE
  };

  const AT_KEYWORDS = [
    'charset',
    'css',
    'debug',
    'extend',
    'font-face',
    'for',
    'import',
    'include',
    'keyframes',
    'media',
    'mixin',
    'page',
    'warn',
    'while'
  ];

  const LOOKAHEAD_TAG_END = '(?=[.\\s\\n[:,(])';

  // illegals
  const ILLEGAL = [
    '\\?',
    '(\\bReturn\\b)', // monkey
    '(\\bEnd\\b)', // monkey
    '(\\bend\\b)', // vbscript
    '(\\bdef\\b)', // gradle
    ';', // a whole lot of languages
    '#\\s', // markdown
    '\\*\\s', // markdown
    '===\\s', // markdown
    '\\|',
    '%' // prolog
  ];

  return {
    name: 'Stylus',
    aliases: [ 'styl' ],
    case_insensitive: false,
    keywords: 'if else for in',
    illegal: '(' + ILLEGAL.join('|') + ')',
    contains: [

      // strings
      hljs.QUOTE_STRING_MODE,
      hljs.APOS_STRING_MODE,

      // comments
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,

      // hex colors
      modes.HEXCOLOR,

      // class tag
      {
        begin: '\\.[a-zA-Z][a-zA-Z0-9_-]*' + LOOKAHEAD_TAG_END,
        className: 'selector-class'
      },

      // id tag
      {
        begin: '#[a-zA-Z][a-zA-Z0-9_-]*' + LOOKAHEAD_TAG_END,
        className: 'selector-id'
      },

      // tags
      {
        begin: '\\b(' + TAGS.join('|') + ')' + LOOKAHEAD_TAG_END,
        className: 'selector-tag'
      },

      // psuedo selectors
      {
        className: 'selector-pseudo',
        begin: '&?:(' + PSEUDO_CLASSES.join('|') + ')' + LOOKAHEAD_TAG_END
      },
      {
        className: 'selector-pseudo',
        begin: '&?::(' + PSEUDO_ELEMENTS.join('|') + ')' + LOOKAHEAD_TAG_END
      },

      modes.ATTRIBUTE_SELECTOR_MODE,

      {
        className: "keyword",
        begin: /@media/,
        starts: {
          end: /[{;}]/,
          keywords: {
            $pattern: /[a-z-]+/,
            keyword: AT_MODIFIERS,
            attribute: MEDIA_FEATURES.join(" ")
          },
          contains: [ hljs.CSS_NUMBER_MODE ]
        }
      },

      // @ keywords
      {
        className: 'keyword',
        begin: '\@((-(o|moz|ms|webkit)-)?(' + AT_KEYWORDS.join('|') + '))\\b'
      },

      // variables
      VARIABLE,

      // dimension
      hljs.CSS_NUMBER_MODE,

      // functions
      //  - only from beginning of line + whitespace
      {
        className: 'function',
        begin: '^[a-zA-Z][a-zA-Z0-9_\-]*\\(.*\\)',
        illegal: '[\\n]',
        returnBegin: true,
        contains: [
          {
            className: 'title',
            begin: '\\b[a-zA-Z][a-zA-Z0-9_\-]*'
          },
          {
            className: 'params',
            begin: /\(/,
            end: /\)/,
            contains: [
              modes.HEXCOLOR,
              VARIABLE,
              hljs.APOS_STRING_MODE,
              hljs.CSS_NUMBER_MODE,
              hljs.QUOTE_STRING_MODE
            ]
          }
        ]
      },

      // attributes
      //  - only from beginning of line + whitespace
      //  - must have whitespace after it
      {
        className: 'attribute',
        begin: '\\b(' + ATTRIBUTES.join('|') + ')\\b',
        starts: {
          // value container
          end: /;|$/,
          contains: [
            modes.HEXCOLOR,
            VARIABLE,
            hljs.APOS_STRING_MODE,
            hljs.QUOTE_STRING_MODE,
            hljs.CSS_NUMBER_MODE,
            hljs.C_BLOCK_COMMENT_MODE,
            modes.IMPORTANT
          ],
          illegal: /\./,
          relevance: 0
        }
      }
    ]
  };
}

module.exports = stylus;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3N0eWx1cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSw0QkFBNEIsRUFBRSxhQUFhLEVBQUU7QUFDN0MsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoic3RhdGljL2NodW5rcy8xNjkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBNT0RFUyA9IChobGpzKSA9PiB7XG4gIHJldHVybiB7XG4gICAgSU1QT1JUQU5UOiB7XG4gICAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICAgIGJlZ2luOiAnIWltcG9ydGFudCdcbiAgICB9LFxuICAgIEhFWENPTE9SOiB7XG4gICAgICBjbGFzc05hbWU6ICdudW1iZXInLFxuICAgICAgYmVnaW46ICcjKFthLWZBLUYwLTldezZ9fFthLWZBLUYwLTldezN9KSdcbiAgICB9LFxuICAgIEFUVFJJQlVURV9TRUxFQ1RPUl9NT0RFOiB7XG4gICAgICBjbGFzc05hbWU6ICdzZWxlY3Rvci1hdHRyJyxcbiAgICAgIGJlZ2luOiAvXFxbLyxcbiAgICAgIGVuZDogL1xcXS8sXG4gICAgICBpbGxlZ2FsOiAnJCcsXG4gICAgICBjb250YWluczogW1xuICAgICAgICBobGpzLkFQT1NfU1RSSU5HX01PREUsXG4gICAgICAgIGhsanMuUVVPVEVfU1RSSU5HX01PREVcbiAgICAgIF1cbiAgICB9XG4gIH07XG59O1xuXG5jb25zdCBUQUdTID0gW1xuICAnYScsXG4gICdhYmJyJyxcbiAgJ2FkZHJlc3MnLFxuICAnYXJ0aWNsZScsXG4gICdhc2lkZScsXG4gICdhdWRpbycsXG4gICdiJyxcbiAgJ2Jsb2NrcXVvdGUnLFxuICAnYm9keScsXG4gICdidXR0b24nLFxuICAnY2FudmFzJyxcbiAgJ2NhcHRpb24nLFxuICAnY2l0ZScsXG4gICdjb2RlJyxcbiAgJ2RkJyxcbiAgJ2RlbCcsXG4gICdkZXRhaWxzJyxcbiAgJ2RmbicsXG4gICdkaXYnLFxuICAnZGwnLFxuICAnZHQnLFxuICAnZW0nLFxuICAnZmllbGRzZXQnLFxuICAnZmlnY2FwdGlvbicsXG4gICdmaWd1cmUnLFxuICAnZm9vdGVyJyxcbiAgJ2Zvcm0nLFxuICAnaDEnLFxuICAnaDInLFxuICAnaDMnLFxuICAnaDQnLFxuICAnaDUnLFxuICAnaDYnLFxuICAnaGVhZGVyJyxcbiAgJ2hncm91cCcsXG4gICdodG1sJyxcbiAgJ2knLFxuICAnaWZyYW1lJyxcbiAgJ2ltZycsXG4gICdpbnB1dCcsXG4gICdpbnMnLFxuICAna2JkJyxcbiAgJ2xhYmVsJyxcbiAgJ2xlZ2VuZCcsXG4gICdsaScsXG4gICdtYWluJyxcbiAgJ21hcmsnLFxuICAnbWVudScsXG4gICduYXYnLFxuICAnb2JqZWN0JyxcbiAgJ29sJyxcbiAgJ3AnLFxuICAncScsXG4gICdxdW90ZScsXG4gICdzYW1wJyxcbiAgJ3NlY3Rpb24nLFxuICAnc3BhbicsXG4gICdzdHJvbmcnLFxuICAnc3VtbWFyeScsXG4gICdzdXAnLFxuICAndGFibGUnLFxuICAndGJvZHknLFxuICAndGQnLFxuICAndGV4dGFyZWEnLFxuICAndGZvb3QnLFxuICAndGgnLFxuICAndGhlYWQnLFxuICAndGltZScsXG4gICd0cicsXG4gICd1bCcsXG4gICd2YXInLFxuICAndmlkZW8nXG5dO1xuXG5jb25zdCBNRURJQV9GRUFUVVJFUyA9IFtcbiAgJ2FueS1ob3ZlcicsXG4gICdhbnktcG9pbnRlcicsXG4gICdhc3BlY3QtcmF0aW8nLFxuICAnY29sb3InLFxuICAnY29sb3ItZ2FtdXQnLFxuICAnY29sb3ItaW5kZXgnLFxuICAnZGV2aWNlLWFzcGVjdC1yYXRpbycsXG4gICdkZXZpY2UtaGVpZ2h0JyxcbiAgJ2RldmljZS13aWR0aCcsXG4gICdkaXNwbGF5LW1vZGUnLFxuICAnZm9yY2VkLWNvbG9ycycsXG4gICdncmlkJyxcbiAgJ2hlaWdodCcsXG4gICdob3ZlcicsXG4gICdpbnZlcnRlZC1jb2xvcnMnLFxuICAnbW9ub2Nocm9tZScsXG4gICdvcmllbnRhdGlvbicsXG4gICdvdmVyZmxvdy1ibG9jaycsXG4gICdvdmVyZmxvdy1pbmxpbmUnLFxuICAncG9pbnRlcicsXG4gICdwcmVmZXJzLWNvbG9yLXNjaGVtZScsXG4gICdwcmVmZXJzLWNvbnRyYXN0JyxcbiAgJ3ByZWZlcnMtcmVkdWNlZC1tb3Rpb24nLFxuICAncHJlZmVycy1yZWR1Y2VkLXRyYW5zcGFyZW5jeScsXG4gICdyZXNvbHV0aW9uJyxcbiAgJ3NjYW4nLFxuICAnc2NyaXB0aW5nJyxcbiAgJ3VwZGF0ZScsXG4gICd3aWR0aCcsXG4gIC8vIFRPRE86IGZpbmQgYSBiZXR0ZXIgc29sdXRpb24/XG4gICdtaW4td2lkdGgnLFxuICAnbWF4LXdpZHRoJyxcbiAgJ21pbi1oZWlnaHQnLFxuICAnbWF4LWhlaWdodCdcbl07XG5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9Qc2V1ZG8tY2xhc3Nlc1xuY29uc3QgUFNFVURPX0NMQVNTRVMgPSBbXG4gICdhY3RpdmUnLFxuICAnYW55LWxpbmsnLFxuICAnYmxhbmsnLFxuICAnY2hlY2tlZCcsXG4gICdjdXJyZW50JyxcbiAgJ2RlZmF1bHQnLFxuICAnZGVmaW5lZCcsXG4gICdkaXInLCAvLyBkaXIoKVxuICAnZGlzYWJsZWQnLFxuICAnZHJvcCcsXG4gICdlbXB0eScsXG4gICdlbmFibGVkJyxcbiAgJ2ZpcnN0JyxcbiAgJ2ZpcnN0LWNoaWxkJyxcbiAgJ2ZpcnN0LW9mLXR5cGUnLFxuICAnZnVsbHNjcmVlbicsXG4gICdmdXR1cmUnLFxuICAnZm9jdXMnLFxuICAnZm9jdXMtdmlzaWJsZScsXG4gICdmb2N1cy13aXRoaW4nLFxuICAnaGFzJywgLy8gaGFzKClcbiAgJ2hvc3QnLCAvLyBob3N0IG9yIGhvc3QoKVxuICAnaG9zdC1jb250ZXh0JywgLy8gaG9zdC1jb250ZXh0KClcbiAgJ2hvdmVyJyxcbiAgJ2luZGV0ZXJtaW5hdGUnLFxuICAnaW4tcmFuZ2UnLFxuICAnaW52YWxpZCcsXG4gICdpcycsIC8vIGlzKClcbiAgJ2xhbmcnLCAvLyBsYW5nKClcbiAgJ2xhc3QtY2hpbGQnLFxuICAnbGFzdC1vZi10eXBlJyxcbiAgJ2xlZnQnLFxuICAnbGluaycsXG4gICdsb2NhbC1saW5rJyxcbiAgJ25vdCcsIC8vIG5vdCgpXG4gICdudGgtY2hpbGQnLCAvLyBudGgtY2hpbGQoKVxuICAnbnRoLWNvbCcsIC8vIG50aC1jb2woKVxuICAnbnRoLWxhc3QtY2hpbGQnLCAvLyBudGgtbGFzdC1jaGlsZCgpXG4gICdudGgtbGFzdC1jb2wnLCAvLyBudGgtbGFzdC1jb2woKVxuICAnbnRoLWxhc3Qtb2YtdHlwZScsIC8vbnRoLWxhc3Qtb2YtdHlwZSgpXG4gICdudGgtb2YtdHlwZScsIC8vbnRoLW9mLXR5cGUoKVxuICAnb25seS1jaGlsZCcsXG4gICdvbmx5LW9mLXR5cGUnLFxuICAnb3B0aW9uYWwnLFxuICAnb3V0LW9mLXJhbmdlJyxcbiAgJ3Bhc3QnLFxuICAncGxhY2Vob2xkZXItc2hvd24nLFxuICAncmVhZC1vbmx5JyxcbiAgJ3JlYWQtd3JpdGUnLFxuICAncmVxdWlyZWQnLFxuICAncmlnaHQnLFxuICAncm9vdCcsXG4gICdzY29wZScsXG4gICd0YXJnZXQnLFxuICAndGFyZ2V0LXdpdGhpbicsXG4gICd1c2VyLWludmFsaWQnLFxuICAndmFsaWQnLFxuICAndmlzaXRlZCcsXG4gICd3aGVyZScgLy8gd2hlcmUoKVxuXTtcblxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL1BzZXVkby1lbGVtZW50c1xuY29uc3QgUFNFVURPX0VMRU1FTlRTID0gW1xuICAnYWZ0ZXInLFxuICAnYmFja2Ryb3AnLFxuICAnYmVmb3JlJyxcbiAgJ2N1ZScsXG4gICdjdWUtcmVnaW9uJyxcbiAgJ2ZpcnN0LWxldHRlcicsXG4gICdmaXJzdC1saW5lJyxcbiAgJ2dyYW1tYXItZXJyb3InLFxuICAnbWFya2VyJyxcbiAgJ3BhcnQnLFxuICAncGxhY2Vob2xkZXInLFxuICAnc2VsZWN0aW9uJyxcbiAgJ3Nsb3R0ZWQnLFxuICAnc3BlbGxpbmctZXJyb3InXG5dO1xuXG5jb25zdCBBVFRSSUJVVEVTID0gW1xuICAnYWxpZ24tY29udGVudCcsXG4gICdhbGlnbi1pdGVtcycsXG4gICdhbGlnbi1zZWxmJyxcbiAgJ2FuaW1hdGlvbicsXG4gICdhbmltYXRpb24tZGVsYXknLFxuICAnYW5pbWF0aW9uLWRpcmVjdGlvbicsXG4gICdhbmltYXRpb24tZHVyYXRpb24nLFxuICAnYW5pbWF0aW9uLWZpbGwtbW9kZScsXG4gICdhbmltYXRpb24taXRlcmF0aW9uLWNvdW50JyxcbiAgJ2FuaW1hdGlvbi1uYW1lJyxcbiAgJ2FuaW1hdGlvbi1wbGF5LXN0YXRlJyxcbiAgJ2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb24nLFxuICAnYXV0bycsXG4gICdiYWNrZmFjZS12aXNpYmlsaXR5JyxcbiAgJ2JhY2tncm91bmQnLFxuICAnYmFja2dyb3VuZC1hdHRhY2htZW50JyxcbiAgJ2JhY2tncm91bmQtY2xpcCcsXG4gICdiYWNrZ3JvdW5kLWNvbG9yJyxcbiAgJ2JhY2tncm91bmQtaW1hZ2UnLFxuICAnYmFja2dyb3VuZC1vcmlnaW4nLFxuICAnYmFja2dyb3VuZC1wb3NpdGlvbicsXG4gICdiYWNrZ3JvdW5kLXJlcGVhdCcsXG4gICdiYWNrZ3JvdW5kLXNpemUnLFxuICAnYm9yZGVyJyxcbiAgJ2JvcmRlci1ib3R0b20nLFxuICAnYm9yZGVyLWJvdHRvbS1jb2xvcicsXG4gICdib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzJyxcbiAgJ2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzJyxcbiAgJ2JvcmRlci1ib3R0b20tc3R5bGUnLFxuICAnYm9yZGVyLWJvdHRvbS13aWR0aCcsXG4gICdib3JkZXItY29sbGFwc2UnLFxuICAnYm9yZGVyLWNvbG9yJyxcbiAgJ2JvcmRlci1pbWFnZScsXG4gICdib3JkZXItaW1hZ2Utb3V0c2V0JyxcbiAgJ2JvcmRlci1pbWFnZS1yZXBlYXQnLFxuICAnYm9yZGVyLWltYWdlLXNsaWNlJyxcbiAgJ2JvcmRlci1pbWFnZS1zb3VyY2UnLFxuICAnYm9yZGVyLWltYWdlLXdpZHRoJyxcbiAgJ2JvcmRlci1sZWZ0JyxcbiAgJ2JvcmRlci1sZWZ0LWNvbG9yJyxcbiAgJ2JvcmRlci1sZWZ0LXN0eWxlJyxcbiAgJ2JvcmRlci1sZWZ0LXdpZHRoJyxcbiAgJ2JvcmRlci1yYWRpdXMnLFxuICAnYm9yZGVyLXJpZ2h0JyxcbiAgJ2JvcmRlci1yaWdodC1jb2xvcicsXG4gICdib3JkZXItcmlnaHQtc3R5bGUnLFxuICAnYm9yZGVyLXJpZ2h0LXdpZHRoJyxcbiAgJ2JvcmRlci1zcGFjaW5nJyxcbiAgJ2JvcmRlci1zdHlsZScsXG4gICdib3JkZXItdG9wJyxcbiAgJ2JvcmRlci10b3AtY29sb3InLFxuICAnYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cycsXG4gICdib3JkZXItdG9wLXJpZ2h0LXJhZGl1cycsXG4gICdib3JkZXItdG9wLXN0eWxlJyxcbiAgJ2JvcmRlci10b3Atd2lkdGgnLFxuICAnYm9yZGVyLXdpZHRoJyxcbiAgJ2JvdHRvbScsXG4gICdib3gtZGVjb3JhdGlvbi1icmVhaycsXG4gICdib3gtc2hhZG93JyxcbiAgJ2JveC1zaXppbmcnLFxuICAnYnJlYWstYWZ0ZXInLFxuICAnYnJlYWstYmVmb3JlJyxcbiAgJ2JyZWFrLWluc2lkZScsXG4gICdjYXB0aW9uLXNpZGUnLFxuICAnY2xlYXInLFxuICAnY2xpcCcsXG4gICdjbGlwLXBhdGgnLFxuICAnY29sb3InLFxuICAnY29sdW1uLWNvdW50JyxcbiAgJ2NvbHVtbi1maWxsJyxcbiAgJ2NvbHVtbi1nYXAnLFxuICAnY29sdW1uLXJ1bGUnLFxuICAnY29sdW1uLXJ1bGUtY29sb3InLFxuICAnY29sdW1uLXJ1bGUtc3R5bGUnLFxuICAnY29sdW1uLXJ1bGUtd2lkdGgnLFxuICAnY29sdW1uLXNwYW4nLFxuICAnY29sdW1uLXdpZHRoJyxcbiAgJ2NvbHVtbnMnLFxuICAnY29udGVudCcsXG4gICdjb3VudGVyLWluY3JlbWVudCcsXG4gICdjb3VudGVyLXJlc2V0JyxcbiAgJ2N1cnNvcicsXG4gICdkaXJlY3Rpb24nLFxuICAnZGlzcGxheScsXG4gICdlbXB0eS1jZWxscycsXG4gICdmaWx0ZXInLFxuICAnZmxleCcsXG4gICdmbGV4LWJhc2lzJyxcbiAgJ2ZsZXgtZGlyZWN0aW9uJyxcbiAgJ2ZsZXgtZmxvdycsXG4gICdmbGV4LWdyb3cnLFxuICAnZmxleC1zaHJpbmsnLFxuICAnZmxleC13cmFwJyxcbiAgJ2Zsb2F0JyxcbiAgJ2ZvbnQnLFxuICAnZm9udC1kaXNwbGF5JyxcbiAgJ2ZvbnQtZmFtaWx5JyxcbiAgJ2ZvbnQtZmVhdHVyZS1zZXR0aW5ncycsXG4gICdmb250LWtlcm5pbmcnLFxuICAnZm9udC1sYW5ndWFnZS1vdmVycmlkZScsXG4gICdmb250LXNpemUnLFxuICAnZm9udC1zaXplLWFkanVzdCcsXG4gICdmb250LXN0cmV0Y2gnLFxuICAnZm9udC1zdHlsZScsXG4gICdmb250LXZhcmlhbnQnLFxuICAnZm9udC12YXJpYW50LWxpZ2F0dXJlcycsXG4gICdmb250LXZhcmlhdGlvbi1zZXR0aW5ncycsXG4gICdmb250LXdlaWdodCcsXG4gICdoZWlnaHQnLFxuICAnaHlwaGVucycsXG4gICdpY29uJyxcbiAgJ2ltYWdlLW9yaWVudGF0aW9uJyxcbiAgJ2ltYWdlLXJlbmRlcmluZycsXG4gICdpbWFnZS1yZXNvbHV0aW9uJyxcbiAgJ2ltZS1tb2RlJyxcbiAgJ2luaGVyaXQnLFxuICAnaW5pdGlhbCcsXG4gICdqdXN0aWZ5LWNvbnRlbnQnLFxuICAnbGVmdCcsXG4gICdsZXR0ZXItc3BhY2luZycsXG4gICdsaW5lLWhlaWdodCcsXG4gICdsaXN0LXN0eWxlJyxcbiAgJ2xpc3Qtc3R5bGUtaW1hZ2UnLFxuICAnbGlzdC1zdHlsZS1wb3NpdGlvbicsXG4gICdsaXN0LXN0eWxlLXR5cGUnLFxuICAnbWFyZ2luJyxcbiAgJ21hcmdpbi1ib3R0b20nLFxuICAnbWFyZ2luLWxlZnQnLFxuICAnbWFyZ2luLXJpZ2h0JyxcbiAgJ21hcmdpbi10b3AnLFxuICAnbWFya3MnLFxuICAnbWFzaycsXG4gICdtYXgtaGVpZ2h0JyxcbiAgJ21heC13aWR0aCcsXG4gICdtaW4taGVpZ2h0JyxcbiAgJ21pbi13aWR0aCcsXG4gICduYXYtZG93bicsXG4gICduYXYtaW5kZXgnLFxuICAnbmF2LWxlZnQnLFxuICAnbmF2LXJpZ2h0JyxcbiAgJ25hdi11cCcsXG4gICdub25lJyxcbiAgJ25vcm1hbCcsXG4gICdvYmplY3QtZml0JyxcbiAgJ29iamVjdC1wb3NpdGlvbicsXG4gICdvcGFjaXR5JyxcbiAgJ29yZGVyJyxcbiAgJ29ycGhhbnMnLFxuICAnb3V0bGluZScsXG4gICdvdXRsaW5lLWNvbG9yJyxcbiAgJ291dGxpbmUtb2Zmc2V0JyxcbiAgJ291dGxpbmUtc3R5bGUnLFxuICAnb3V0bGluZS13aWR0aCcsXG4gICdvdmVyZmxvdycsXG4gICdvdmVyZmxvdy13cmFwJyxcbiAgJ292ZXJmbG93LXgnLFxuICAnb3ZlcmZsb3cteScsXG4gICdwYWRkaW5nJyxcbiAgJ3BhZGRpbmctYm90dG9tJyxcbiAgJ3BhZGRpbmctbGVmdCcsXG4gICdwYWRkaW5nLXJpZ2h0JyxcbiAgJ3BhZGRpbmctdG9wJyxcbiAgJ3BhZ2UtYnJlYWstYWZ0ZXInLFxuICAncGFnZS1icmVhay1iZWZvcmUnLFxuICAncGFnZS1icmVhay1pbnNpZGUnLFxuICAncGVyc3BlY3RpdmUnLFxuICAncGVyc3BlY3RpdmUtb3JpZ2luJyxcbiAgJ3BvaW50ZXItZXZlbnRzJyxcbiAgJ3Bvc2l0aW9uJyxcbiAgJ3F1b3RlcycsXG4gICdyZXNpemUnLFxuICAncmlnaHQnLFxuICAnc3JjJywgLy8gQGZvbnQtZmFjZVxuICAndGFiLXNpemUnLFxuICAndGFibGUtbGF5b3V0JyxcbiAgJ3RleHQtYWxpZ24nLFxuICAndGV4dC1hbGlnbi1sYXN0JyxcbiAgJ3RleHQtZGVjb3JhdGlvbicsXG4gICd0ZXh0LWRlY29yYXRpb24tY29sb3InLFxuICAndGV4dC1kZWNvcmF0aW9uLWxpbmUnLFxuICAndGV4dC1kZWNvcmF0aW9uLXN0eWxlJyxcbiAgJ3RleHQtaW5kZW50JyxcbiAgJ3RleHQtb3ZlcmZsb3cnLFxuICAndGV4dC1yZW5kZXJpbmcnLFxuICAndGV4dC1zaGFkb3cnLFxuICAndGV4dC10cmFuc2Zvcm0nLFxuICAndGV4dC11bmRlcmxpbmUtcG9zaXRpb24nLFxuICAndG9wJyxcbiAgJ3RyYW5zZm9ybScsXG4gICd0cmFuc2Zvcm0tb3JpZ2luJyxcbiAgJ3RyYW5zZm9ybS1zdHlsZScsXG4gICd0cmFuc2l0aW9uJyxcbiAgJ3RyYW5zaXRpb24tZGVsYXknLFxuICAndHJhbnNpdGlvbi1kdXJhdGlvbicsXG4gICd0cmFuc2l0aW9uLXByb3BlcnR5JyxcbiAgJ3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uJyxcbiAgJ3VuaWNvZGUtYmlkaScsXG4gICd2ZXJ0aWNhbC1hbGlnbicsXG4gICd2aXNpYmlsaXR5JyxcbiAgJ3doaXRlLXNwYWNlJyxcbiAgJ3dpZG93cycsXG4gICd3aWR0aCcsXG4gICd3b3JkLWJyZWFrJyxcbiAgJ3dvcmQtc3BhY2luZycsXG4gICd3b3JkLXdyYXAnLFxuICAnei1pbmRleCdcbiAgLy8gcmV2ZXJzZSBtYWtlcyBzdXJlIGxvbmdlciBhdHRyaWJ1dGVzIGBmb250LXdlaWdodGAgYXJlIG1hdGNoZWQgZnVsbHlcbiAgLy8gaW5zdGVhZCBvZiBnZXR0aW5nIGZhbHNlIHBvc2l0aXZlcyBvbiBzYXkgYGZvbnRgXG5dLnJldmVyc2UoKTtcblxuLypcbkxhbmd1YWdlOiBTdHlsdXNcbkF1dGhvcjogQnJ5YW50IFdpbGxpYW1zIDxiLm4ud2lsbGlhbXNAZ21haWwuY29tPlxuRGVzY3JpcHRpb246IFN0eWx1cyBpcyBhbiBleHByZXNzaXZlLCByb2J1c3QsIGZlYXR1cmUtcmljaCBDU1MgbGFuZ3VhZ2UgYnVpbHQgZm9yIG5vZGVqcy5cbldlYnNpdGU6IGh0dHBzOi8vZ2l0aHViLmNvbS9zdHlsdXMvc3R5bHVzXG5DYXRlZ29yeTogY3NzXG4qL1xuXG4vKiogQHR5cGUgTGFuZ3VhZ2VGbiAqL1xuZnVuY3Rpb24gc3R5bHVzKGhsanMpIHtcbiAgY29uc3QgbW9kZXMgPSBNT0RFUyhobGpzKTtcblxuICBjb25zdCBBVF9NT0RJRklFUlMgPSBcImFuZCBvciBub3Qgb25seVwiO1xuICBjb25zdCBWQVJJQUJMRSA9IHtcbiAgICBjbGFzc05hbWU6ICd2YXJpYWJsZScsXG4gICAgYmVnaW46ICdcXFxcJCcgKyBobGpzLklERU5UX1JFXG4gIH07XG5cbiAgY29uc3QgQVRfS0VZV09SRFMgPSBbXG4gICAgJ2NoYXJzZXQnLFxuICAgICdjc3MnLFxuICAgICdkZWJ1ZycsXG4gICAgJ2V4dGVuZCcsXG4gICAgJ2ZvbnQtZmFjZScsXG4gICAgJ2ZvcicsXG4gICAgJ2ltcG9ydCcsXG4gICAgJ2luY2x1ZGUnLFxuICAgICdrZXlmcmFtZXMnLFxuICAgICdtZWRpYScsXG4gICAgJ21peGluJyxcbiAgICAncGFnZScsXG4gICAgJ3dhcm4nLFxuICAgICd3aGlsZSdcbiAgXTtcblxuICBjb25zdCBMT09LQUhFQURfVEFHX0VORCA9ICcoPz1bLlxcXFxzXFxcXG5bOiwoXSknO1xuXG4gIC8vIGlsbGVnYWxzXG4gIGNvbnN0IElMTEVHQUwgPSBbXG4gICAgJ1xcXFw/JyxcbiAgICAnKFxcXFxiUmV0dXJuXFxcXGIpJywgLy8gbW9ua2V5XG4gICAgJyhcXFxcYkVuZFxcXFxiKScsIC8vIG1vbmtleVxuICAgICcoXFxcXGJlbmRcXFxcYiknLCAvLyB2YnNjcmlwdFxuICAgICcoXFxcXGJkZWZcXFxcYiknLCAvLyBncmFkbGVcbiAgICAnOycsIC8vIGEgd2hvbGUgbG90IG9mIGxhbmd1YWdlc1xuICAgICcjXFxcXHMnLCAvLyBtYXJrZG93blxuICAgICdcXFxcKlxcXFxzJywgLy8gbWFya2Rvd25cbiAgICAnPT09XFxcXHMnLCAvLyBtYXJrZG93blxuICAgICdcXFxcfCcsXG4gICAgJyUnIC8vIHByb2xvZ1xuICBdO1xuXG4gIHJldHVybiB7XG4gICAgbmFtZTogJ1N0eWx1cycsXG4gICAgYWxpYXNlczogWyAnc3R5bCcgXSxcbiAgICBjYXNlX2luc2Vuc2l0aXZlOiBmYWxzZSxcbiAgICBrZXl3b3JkczogJ2lmIGVsc2UgZm9yIGluJyxcbiAgICBpbGxlZ2FsOiAnKCcgKyBJTExFR0FMLmpvaW4oJ3wnKSArICcpJyxcbiAgICBjb250YWluczogW1xuXG4gICAgICAvLyBzdHJpbmdzXG4gICAgICBobGpzLlFVT1RFX1NUUklOR19NT0RFLFxuICAgICAgaGxqcy5BUE9TX1NUUklOR19NT0RFLFxuXG4gICAgICAvLyBjb21tZW50c1xuICAgICAgaGxqcy5DX0xJTkVfQ09NTUVOVF9NT0RFLFxuICAgICAgaGxqcy5DX0JMT0NLX0NPTU1FTlRfTU9ERSxcblxuICAgICAgLy8gaGV4IGNvbG9yc1xuICAgICAgbW9kZXMuSEVYQ09MT1IsXG5cbiAgICAgIC8vIGNsYXNzIHRhZ1xuICAgICAge1xuICAgICAgICBiZWdpbjogJ1xcXFwuW2EtekEtWl1bYS16QS1aMC05Xy1dKicgKyBMT09LQUhFQURfVEFHX0VORCxcbiAgICAgICAgY2xhc3NOYW1lOiAnc2VsZWN0b3ItY2xhc3MnXG4gICAgICB9LFxuXG4gICAgICAvLyBpZCB0YWdcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICcjW2EtekEtWl1bYS16QS1aMC05Xy1dKicgKyBMT09LQUhFQURfVEFHX0VORCxcbiAgICAgICAgY2xhc3NOYW1lOiAnc2VsZWN0b3ItaWQnXG4gICAgICB9LFxuXG4gICAgICAvLyB0YWdzXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnXFxcXGIoJyArIFRBR1Muam9pbignfCcpICsgJyknICsgTE9PS0FIRUFEX1RBR19FTkQsXG4gICAgICAgIGNsYXNzTmFtZTogJ3NlbGVjdG9yLXRhZydcbiAgICAgIH0sXG5cbiAgICAgIC8vIHBzdWVkbyBzZWxlY3RvcnNcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnc2VsZWN0b3ItcHNldWRvJyxcbiAgICAgICAgYmVnaW46ICcmPzooJyArIFBTRVVET19DTEFTU0VTLmpvaW4oJ3wnKSArICcpJyArIExPT0tBSEVBRF9UQUdfRU5EXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdzZWxlY3Rvci1wc2V1ZG8nLFxuICAgICAgICBiZWdpbjogJyY/OjooJyArIFBTRVVET19FTEVNRU5UUy5qb2luKCd8JykgKyAnKScgKyBMT09LQUhFQURfVEFHX0VORFxuICAgICAgfSxcblxuICAgICAgbW9kZXMuQVRUUklCVVRFX1NFTEVDVE9SX01PREUsXG5cbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiBcImtleXdvcmRcIixcbiAgICAgICAgYmVnaW46IC9AbWVkaWEvLFxuICAgICAgICBzdGFydHM6IHtcbiAgICAgICAgICBlbmQ6IC9bezt9XS8sXG4gICAgICAgICAga2V5d29yZHM6IHtcbiAgICAgICAgICAgICRwYXR0ZXJuOiAvW2Etei1dKy8sXG4gICAgICAgICAgICBrZXl3b3JkOiBBVF9NT0RJRklFUlMsXG4gICAgICAgICAgICBhdHRyaWJ1dGU6IE1FRElBX0ZFQVRVUkVTLmpvaW4oXCIgXCIpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjb250YWluczogWyBobGpzLkNTU19OVU1CRVJfTU9ERSBdXG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIC8vIEAga2V5d29yZHNcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAna2V5d29yZCcsXG4gICAgICAgIGJlZ2luOiAnXFxAKCgtKG98bW96fG1zfHdlYmtpdCktKT8oJyArIEFUX0tFWVdPUkRTLmpvaW4oJ3wnKSArICcpKVxcXFxiJ1xuICAgICAgfSxcblxuICAgICAgLy8gdmFyaWFibGVzXG4gICAgICBWQVJJQUJMRSxcblxuICAgICAgLy8gZGltZW5zaW9uXG4gICAgICBobGpzLkNTU19OVU1CRVJfTU9ERSxcblxuICAgICAgLy8gZnVuY3Rpb25zXG4gICAgICAvLyAgLSBvbmx5IGZyb20gYmVnaW5uaW5nIG9mIGxpbmUgKyB3aGl0ZXNwYWNlXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2Z1bmN0aW9uJyxcbiAgICAgICAgYmVnaW46ICdeW2EtekEtWl1bYS16QS1aMC05X1xcLV0qXFxcXCguKlxcXFwpJyxcbiAgICAgICAgaWxsZWdhbDogJ1tcXFxcbl0nLFxuICAgICAgICByZXR1cm5CZWdpbjogdHJ1ZSxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICd0aXRsZScsXG4gICAgICAgICAgICBiZWdpbjogJ1xcXFxiW2EtekEtWl1bYS16QS1aMC05X1xcLV0qJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAncGFyYW1zJyxcbiAgICAgICAgICAgIGJlZ2luOiAvXFwoLyxcbiAgICAgICAgICAgIGVuZDogL1xcKS8sXG4gICAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgICBtb2Rlcy5IRVhDT0xPUixcbiAgICAgICAgICAgICAgVkFSSUFCTEUsXG4gICAgICAgICAgICAgIGhsanMuQVBPU19TVFJJTkdfTU9ERSxcbiAgICAgICAgICAgICAgaGxqcy5DU1NfTlVNQkVSX01PREUsXG4gICAgICAgICAgICAgIGhsanMuUVVPVEVfU1RSSU5HX01PREVcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG5cbiAgICAgIC8vIGF0dHJpYnV0ZXNcbiAgICAgIC8vICAtIG9ubHkgZnJvbSBiZWdpbm5pbmcgb2YgbGluZSArIHdoaXRlc3BhY2VcbiAgICAgIC8vICAtIG11c3QgaGF2ZSB3aGl0ZXNwYWNlIGFmdGVyIGl0XG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2F0dHJpYnV0ZScsXG4gICAgICAgIGJlZ2luOiAnXFxcXGIoJyArIEFUVFJJQlVURVMuam9pbignfCcpICsgJylcXFxcYicsXG4gICAgICAgIHN0YXJ0czoge1xuICAgICAgICAgIC8vIHZhbHVlIGNvbnRhaW5lclxuICAgICAgICAgIGVuZDogLzt8JC8sXG4gICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgIG1vZGVzLkhFWENPTE9SLFxuICAgICAgICAgICAgVkFSSUFCTEUsXG4gICAgICAgICAgICBobGpzLkFQT1NfU1RSSU5HX01PREUsXG4gICAgICAgICAgICBobGpzLlFVT1RFX1NUUklOR19NT0RFLFxuICAgICAgICAgICAgaGxqcy5DU1NfTlVNQkVSX01PREUsXG4gICAgICAgICAgICBobGpzLkNfQkxPQ0tfQ09NTUVOVF9NT0RFLFxuICAgICAgICAgICAgbW9kZXMuSU1QT1JUQU5UXG4gICAgICAgICAgXSxcbiAgICAgICAgICBpbGxlZ2FsOiAvXFwuLyxcbiAgICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsdXM7XG4iXSwic291cmNlUm9vdCI6IiJ9