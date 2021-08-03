exports.ids = [39];
exports.modules = {

/***/ "./node_modules/highlight.js/lib/languages/css.js":
/*!********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/css.js ***!
  \********************************************************/
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
 * @param {RegExp | string } re
 * @returns {string}
 */
function lookahead(re) {
  return concat('(?=', re, ')');
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
Language: CSS
Category: common, css
Website: https://developer.mozilla.org/en-US/docs/Web/CSS
*/

/** @type LanguageFn */
function css(hljs) {
  const modes = MODES(hljs);
  const FUNCTION_DISPATCH = {
    className: "built_in",
    begin: /[\w-]+(?=\()/
  };
  const VENDOR_PREFIX = {
    begin: /-(webkit|moz|ms|o)-(?=[a-z])/
  };
  const AT_MODIFIERS = "and or not only";
  const AT_PROPERTY_RE = /@-?\w[\w]*(-\w+)*/; // @-webkit-keyframes
  const IDENT_RE = '[a-zA-Z-][a-zA-Z0-9_-]*';
  const STRINGS = [
    hljs.APOS_STRING_MODE,
    hljs.QUOTE_STRING_MODE
  ];

  return {
    name: 'CSS',
    case_insensitive: true,
    illegal: /[=|'\$]/,
    keywords: {
      keyframePosition: "from to"
    },
    classNameAliases: {
      // for visual continuity with `tag {}` and because we
      // don't have a great class for this?
      keyframePosition: "selector-tag"
    },
    contains: [
      hljs.C_BLOCK_COMMENT_MODE,
      VENDOR_PREFIX,
      // to recognize keyframe 40% etc which are outside the scope of our
      // attribute value mode
      hljs.CSS_NUMBER_MODE,
      {
        className: 'selector-id',
        begin: /#[A-Za-z0-9_-]+/,
        relevance: 0
      },
      {
        className: 'selector-class',
        begin: '\\.' + IDENT_RE,
        relevance: 0
      },
      modes.ATTRIBUTE_SELECTOR_MODE,
      {
        className: 'selector-pseudo',
        variants: [
          {
            begin: ':(' + PSEUDO_CLASSES.join('|') + ')'
          },
          {
            begin: '::(' + PSEUDO_ELEMENTS.join('|') + ')'
          }
        ]
      },
      // we may actually need this (12/2020)
      // { // pseudo-selector params
      //   begin: /\(/,
      //   end: /\)/,
      //   contains: [ hljs.CSS_NUMBER_MODE ]
      // },
      {
        className: 'attribute',
        begin: '\\b(' + ATTRIBUTES.join('|') + ')\\b'
      },
      // attribute values
      {
        begin: ':',
        end: '[;}]',
        contains: [
          modes.HEXCOLOR,
          modes.IMPORTANT,
          hljs.CSS_NUMBER_MODE,
          ...STRINGS,
          // needed to highlight these as strings and to avoid issues with
          // illegal characters that might be inside urls that would tigger the
          // languages illegal stack
          {
            begin: /(url|data-uri)\(/,
            end: /\)/,
            relevance: 0, // from keywords
            keywords: {
              built_in: "url data-uri"
            },
            contains: [
              {
                className: "string",
                // any character other than `)` as in `url()` will be the start
                // of a string, which ends with `)` (from the parent mode)
                begin: /[^)]/,
                endsWithParent: true,
                excludeEnd: true
              }
            ]
          },
          FUNCTION_DISPATCH
        ]
      },
      {
        begin: lookahead(/@/),
        end: '[{;]',
        relevance: 0,
        illegal: /:/, // break on Less variables @var: ...
        contains: [
          {
            className: 'keyword',
            begin: AT_PROPERTY_RE
          },
          {
            begin: /\s/,
            endsWithParent: true,
            excludeEnd: true,
            relevance: 0,
            keywords: {
              $pattern: /[a-z-]+/,
              keyword: AT_MODIFIERS,
              attribute: MEDIA_FEATURES.join(" ")
            },
            contains: [
              {
                begin: /[a-z-]+(?=:)/,
                className: "attribute"
              },
              ...STRINGS,
              hljs.CSS_NUMBER_MODE
            ]
          }
        ]
      },
      {
        className: 'selector-tag',
        begin: '\\b(' + TAGS.join('|') + ')\\b'
      }
    ]
  };
}

module.exports = css;


/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvY3NzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSw0QkFBNEIsRUFBRSxhQUFhLEVBQUU7QUFDN0MsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWE7QUFDYjs7QUFFQTtBQUNBLFdBQVcsaUJBQWlCO0FBQzVCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyxpQkFBaUI7QUFDNUIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyxzQkFBc0I7QUFDakMsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiIzOS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IE1PREVTID0gKGhsanMpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBJTVBPUlRBTlQ6IHtcbiAgICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgICAgYmVnaW46ICchaW1wb3J0YW50J1xuICAgIH0sXG4gICAgSEVYQ09MT1I6IHtcbiAgICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgICBiZWdpbjogJyMoW2EtZkEtRjAtOV17Nn18W2EtZkEtRjAtOV17M30pJ1xuICAgIH0sXG4gICAgQVRUUklCVVRFX1NFTEVDVE9SX01PREU6IHtcbiAgICAgIGNsYXNzTmFtZTogJ3NlbGVjdG9yLWF0dHInLFxuICAgICAgYmVnaW46IC9cXFsvLFxuICAgICAgZW5kOiAvXFxdLyxcbiAgICAgIGlsbGVnYWw6ICckJyxcbiAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgIGhsanMuQVBPU19TVFJJTkdfTU9ERSxcbiAgICAgICAgaGxqcy5RVU9URV9TVFJJTkdfTU9ERVxuICAgICAgXVxuICAgIH1cbiAgfTtcbn07XG5cbmNvbnN0IFRBR1MgPSBbXG4gICdhJyxcbiAgJ2FiYnInLFxuICAnYWRkcmVzcycsXG4gICdhcnRpY2xlJyxcbiAgJ2FzaWRlJyxcbiAgJ2F1ZGlvJyxcbiAgJ2InLFxuICAnYmxvY2txdW90ZScsXG4gICdib2R5JyxcbiAgJ2J1dHRvbicsXG4gICdjYW52YXMnLFxuICAnY2FwdGlvbicsXG4gICdjaXRlJyxcbiAgJ2NvZGUnLFxuICAnZGQnLFxuICAnZGVsJyxcbiAgJ2RldGFpbHMnLFxuICAnZGZuJyxcbiAgJ2RpdicsXG4gICdkbCcsXG4gICdkdCcsXG4gICdlbScsXG4gICdmaWVsZHNldCcsXG4gICdmaWdjYXB0aW9uJyxcbiAgJ2ZpZ3VyZScsXG4gICdmb290ZXInLFxuICAnZm9ybScsXG4gICdoMScsXG4gICdoMicsXG4gICdoMycsXG4gICdoNCcsXG4gICdoNScsXG4gICdoNicsXG4gICdoZWFkZXInLFxuICAnaGdyb3VwJyxcbiAgJ2h0bWwnLFxuICAnaScsXG4gICdpZnJhbWUnLFxuICAnaW1nJyxcbiAgJ2lucHV0JyxcbiAgJ2lucycsXG4gICdrYmQnLFxuICAnbGFiZWwnLFxuICAnbGVnZW5kJyxcbiAgJ2xpJyxcbiAgJ21haW4nLFxuICAnbWFyaycsXG4gICdtZW51JyxcbiAgJ25hdicsXG4gICdvYmplY3QnLFxuICAnb2wnLFxuICAncCcsXG4gICdxJyxcbiAgJ3F1b3RlJyxcbiAgJ3NhbXAnLFxuICAnc2VjdGlvbicsXG4gICdzcGFuJyxcbiAgJ3N0cm9uZycsXG4gICdzdW1tYXJ5JyxcbiAgJ3N1cCcsXG4gICd0YWJsZScsXG4gICd0Ym9keScsXG4gICd0ZCcsXG4gICd0ZXh0YXJlYScsXG4gICd0Zm9vdCcsXG4gICd0aCcsXG4gICd0aGVhZCcsXG4gICd0aW1lJyxcbiAgJ3RyJyxcbiAgJ3VsJyxcbiAgJ3ZhcicsXG4gICd2aWRlbydcbl07XG5cbmNvbnN0IE1FRElBX0ZFQVRVUkVTID0gW1xuICAnYW55LWhvdmVyJyxcbiAgJ2FueS1wb2ludGVyJyxcbiAgJ2FzcGVjdC1yYXRpbycsXG4gICdjb2xvcicsXG4gICdjb2xvci1nYW11dCcsXG4gICdjb2xvci1pbmRleCcsXG4gICdkZXZpY2UtYXNwZWN0LXJhdGlvJyxcbiAgJ2RldmljZS1oZWlnaHQnLFxuICAnZGV2aWNlLXdpZHRoJyxcbiAgJ2Rpc3BsYXktbW9kZScsXG4gICdmb3JjZWQtY29sb3JzJyxcbiAgJ2dyaWQnLFxuICAnaGVpZ2h0JyxcbiAgJ2hvdmVyJyxcbiAgJ2ludmVydGVkLWNvbG9ycycsXG4gICdtb25vY2hyb21lJyxcbiAgJ29yaWVudGF0aW9uJyxcbiAgJ292ZXJmbG93LWJsb2NrJyxcbiAgJ292ZXJmbG93LWlubGluZScsXG4gICdwb2ludGVyJyxcbiAgJ3ByZWZlcnMtY29sb3Itc2NoZW1lJyxcbiAgJ3ByZWZlcnMtY29udHJhc3QnLFxuICAncHJlZmVycy1yZWR1Y2VkLW1vdGlvbicsXG4gICdwcmVmZXJzLXJlZHVjZWQtdHJhbnNwYXJlbmN5JyxcbiAgJ3Jlc29sdXRpb24nLFxuICAnc2NhbicsXG4gICdzY3JpcHRpbmcnLFxuICAndXBkYXRlJyxcbiAgJ3dpZHRoJyxcbiAgLy8gVE9ETzogZmluZCBhIGJldHRlciBzb2x1dGlvbj9cbiAgJ21pbi13aWR0aCcsXG4gICdtYXgtd2lkdGgnLFxuICAnbWluLWhlaWdodCcsXG4gICdtYXgtaGVpZ2h0J1xuXTtcblxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL1BzZXVkby1jbGFzc2VzXG5jb25zdCBQU0VVRE9fQ0xBU1NFUyA9IFtcbiAgJ2FjdGl2ZScsXG4gICdhbnktbGluaycsXG4gICdibGFuaycsXG4gICdjaGVja2VkJyxcbiAgJ2N1cnJlbnQnLFxuICAnZGVmYXVsdCcsXG4gICdkZWZpbmVkJyxcbiAgJ2RpcicsIC8vIGRpcigpXG4gICdkaXNhYmxlZCcsXG4gICdkcm9wJyxcbiAgJ2VtcHR5JyxcbiAgJ2VuYWJsZWQnLFxuICAnZmlyc3QnLFxuICAnZmlyc3QtY2hpbGQnLFxuICAnZmlyc3Qtb2YtdHlwZScsXG4gICdmdWxsc2NyZWVuJyxcbiAgJ2Z1dHVyZScsXG4gICdmb2N1cycsXG4gICdmb2N1cy12aXNpYmxlJyxcbiAgJ2ZvY3VzLXdpdGhpbicsXG4gICdoYXMnLCAvLyBoYXMoKVxuICAnaG9zdCcsIC8vIGhvc3Qgb3IgaG9zdCgpXG4gICdob3N0LWNvbnRleHQnLCAvLyBob3N0LWNvbnRleHQoKVxuICAnaG92ZXInLFxuICAnaW5kZXRlcm1pbmF0ZScsXG4gICdpbi1yYW5nZScsXG4gICdpbnZhbGlkJyxcbiAgJ2lzJywgLy8gaXMoKVxuICAnbGFuZycsIC8vIGxhbmcoKVxuICAnbGFzdC1jaGlsZCcsXG4gICdsYXN0LW9mLXR5cGUnLFxuICAnbGVmdCcsXG4gICdsaW5rJyxcbiAgJ2xvY2FsLWxpbmsnLFxuICAnbm90JywgLy8gbm90KClcbiAgJ250aC1jaGlsZCcsIC8vIG50aC1jaGlsZCgpXG4gICdudGgtY29sJywgLy8gbnRoLWNvbCgpXG4gICdudGgtbGFzdC1jaGlsZCcsIC8vIG50aC1sYXN0LWNoaWxkKClcbiAgJ250aC1sYXN0LWNvbCcsIC8vIG50aC1sYXN0LWNvbCgpXG4gICdudGgtbGFzdC1vZi10eXBlJywgLy9udGgtbGFzdC1vZi10eXBlKClcbiAgJ250aC1vZi10eXBlJywgLy9udGgtb2YtdHlwZSgpXG4gICdvbmx5LWNoaWxkJyxcbiAgJ29ubHktb2YtdHlwZScsXG4gICdvcHRpb25hbCcsXG4gICdvdXQtb2YtcmFuZ2UnLFxuICAncGFzdCcsXG4gICdwbGFjZWhvbGRlci1zaG93bicsXG4gICdyZWFkLW9ubHknLFxuICAncmVhZC13cml0ZScsXG4gICdyZXF1aXJlZCcsXG4gICdyaWdodCcsXG4gICdyb290JyxcbiAgJ3Njb3BlJyxcbiAgJ3RhcmdldCcsXG4gICd0YXJnZXQtd2l0aGluJyxcbiAgJ3VzZXItaW52YWxpZCcsXG4gICd2YWxpZCcsXG4gICd2aXNpdGVkJyxcbiAgJ3doZXJlJyAvLyB3aGVyZSgpXG5dO1xuXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvUHNldWRvLWVsZW1lbnRzXG5jb25zdCBQU0VVRE9fRUxFTUVOVFMgPSBbXG4gICdhZnRlcicsXG4gICdiYWNrZHJvcCcsXG4gICdiZWZvcmUnLFxuICAnY3VlJyxcbiAgJ2N1ZS1yZWdpb24nLFxuICAnZmlyc3QtbGV0dGVyJyxcbiAgJ2ZpcnN0LWxpbmUnLFxuICAnZ3JhbW1hci1lcnJvcicsXG4gICdtYXJrZXInLFxuICAncGFydCcsXG4gICdwbGFjZWhvbGRlcicsXG4gICdzZWxlY3Rpb24nLFxuICAnc2xvdHRlZCcsXG4gICdzcGVsbGluZy1lcnJvcidcbl07XG5cbmNvbnN0IEFUVFJJQlVURVMgPSBbXG4gICdhbGlnbi1jb250ZW50JyxcbiAgJ2FsaWduLWl0ZW1zJyxcbiAgJ2FsaWduLXNlbGYnLFxuICAnYW5pbWF0aW9uJyxcbiAgJ2FuaW1hdGlvbi1kZWxheScsXG4gICdhbmltYXRpb24tZGlyZWN0aW9uJyxcbiAgJ2FuaW1hdGlvbi1kdXJhdGlvbicsXG4gICdhbmltYXRpb24tZmlsbC1tb2RlJyxcbiAgJ2FuaW1hdGlvbi1pdGVyYXRpb24tY291bnQnLFxuICAnYW5pbWF0aW9uLW5hbWUnLFxuICAnYW5pbWF0aW9uLXBsYXktc3RhdGUnLFxuICAnYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbicsXG4gICdhdXRvJyxcbiAgJ2JhY2tmYWNlLXZpc2liaWxpdHknLFxuICAnYmFja2dyb3VuZCcsXG4gICdiYWNrZ3JvdW5kLWF0dGFjaG1lbnQnLFxuICAnYmFja2dyb3VuZC1jbGlwJyxcbiAgJ2JhY2tncm91bmQtY29sb3InLFxuICAnYmFja2dyb3VuZC1pbWFnZScsXG4gICdiYWNrZ3JvdW5kLW9yaWdpbicsXG4gICdiYWNrZ3JvdW5kLXBvc2l0aW9uJyxcbiAgJ2JhY2tncm91bmQtcmVwZWF0JyxcbiAgJ2JhY2tncm91bmQtc2l6ZScsXG4gICdib3JkZXInLFxuICAnYm9yZGVyLWJvdHRvbScsXG4gICdib3JkZXItYm90dG9tLWNvbG9yJyxcbiAgJ2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMnLFxuICAnYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXMnLFxuICAnYm9yZGVyLWJvdHRvbS1zdHlsZScsXG4gICdib3JkZXItYm90dG9tLXdpZHRoJyxcbiAgJ2JvcmRlci1jb2xsYXBzZScsXG4gICdib3JkZXItY29sb3InLFxuICAnYm9yZGVyLWltYWdlJyxcbiAgJ2JvcmRlci1pbWFnZS1vdXRzZXQnLFxuICAnYm9yZGVyLWltYWdlLXJlcGVhdCcsXG4gICdib3JkZXItaW1hZ2Utc2xpY2UnLFxuICAnYm9yZGVyLWltYWdlLXNvdXJjZScsXG4gICdib3JkZXItaW1hZ2Utd2lkdGgnLFxuICAnYm9yZGVyLWxlZnQnLFxuICAnYm9yZGVyLWxlZnQtY29sb3InLFxuICAnYm9yZGVyLWxlZnQtc3R5bGUnLFxuICAnYm9yZGVyLWxlZnQtd2lkdGgnLFxuICAnYm9yZGVyLXJhZGl1cycsXG4gICdib3JkZXItcmlnaHQnLFxuICAnYm9yZGVyLXJpZ2h0LWNvbG9yJyxcbiAgJ2JvcmRlci1yaWdodC1zdHlsZScsXG4gICdib3JkZXItcmlnaHQtd2lkdGgnLFxuICAnYm9yZGVyLXNwYWNpbmcnLFxuICAnYm9yZGVyLXN0eWxlJyxcbiAgJ2JvcmRlci10b3AnLFxuICAnYm9yZGVyLXRvcC1jb2xvcicsXG4gICdib3JkZXItdG9wLWxlZnQtcmFkaXVzJyxcbiAgJ2JvcmRlci10b3AtcmlnaHQtcmFkaXVzJyxcbiAgJ2JvcmRlci10b3Atc3R5bGUnLFxuICAnYm9yZGVyLXRvcC13aWR0aCcsXG4gICdib3JkZXItd2lkdGgnLFxuICAnYm90dG9tJyxcbiAgJ2JveC1kZWNvcmF0aW9uLWJyZWFrJyxcbiAgJ2JveC1zaGFkb3cnLFxuICAnYm94LXNpemluZycsXG4gICdicmVhay1hZnRlcicsXG4gICdicmVhay1iZWZvcmUnLFxuICAnYnJlYWstaW5zaWRlJyxcbiAgJ2NhcHRpb24tc2lkZScsXG4gICdjbGVhcicsXG4gICdjbGlwJyxcbiAgJ2NsaXAtcGF0aCcsXG4gICdjb2xvcicsXG4gICdjb2x1bW4tY291bnQnLFxuICAnY29sdW1uLWZpbGwnLFxuICAnY29sdW1uLWdhcCcsXG4gICdjb2x1bW4tcnVsZScsXG4gICdjb2x1bW4tcnVsZS1jb2xvcicsXG4gICdjb2x1bW4tcnVsZS1zdHlsZScsXG4gICdjb2x1bW4tcnVsZS13aWR0aCcsXG4gICdjb2x1bW4tc3BhbicsXG4gICdjb2x1bW4td2lkdGgnLFxuICAnY29sdW1ucycsXG4gICdjb250ZW50JyxcbiAgJ2NvdW50ZXItaW5jcmVtZW50JyxcbiAgJ2NvdW50ZXItcmVzZXQnLFxuICAnY3Vyc29yJyxcbiAgJ2RpcmVjdGlvbicsXG4gICdkaXNwbGF5JyxcbiAgJ2VtcHR5LWNlbGxzJyxcbiAgJ2ZpbHRlcicsXG4gICdmbGV4JyxcbiAgJ2ZsZXgtYmFzaXMnLFxuICAnZmxleC1kaXJlY3Rpb24nLFxuICAnZmxleC1mbG93JyxcbiAgJ2ZsZXgtZ3JvdycsXG4gICdmbGV4LXNocmluaycsXG4gICdmbGV4LXdyYXAnLFxuICAnZmxvYXQnLFxuICAnZm9udCcsXG4gICdmb250LWRpc3BsYXknLFxuICAnZm9udC1mYW1pbHknLFxuICAnZm9udC1mZWF0dXJlLXNldHRpbmdzJyxcbiAgJ2ZvbnQta2VybmluZycsXG4gICdmb250LWxhbmd1YWdlLW92ZXJyaWRlJyxcbiAgJ2ZvbnQtc2l6ZScsXG4gICdmb250LXNpemUtYWRqdXN0JyxcbiAgJ2ZvbnQtc3RyZXRjaCcsXG4gICdmb250LXN0eWxlJyxcbiAgJ2ZvbnQtdmFyaWFudCcsXG4gICdmb250LXZhcmlhbnQtbGlnYXR1cmVzJyxcbiAgJ2ZvbnQtdmFyaWF0aW9uLXNldHRpbmdzJyxcbiAgJ2ZvbnQtd2VpZ2h0JyxcbiAgJ2hlaWdodCcsXG4gICdoeXBoZW5zJyxcbiAgJ2ljb24nLFxuICAnaW1hZ2Utb3JpZW50YXRpb24nLFxuICAnaW1hZ2UtcmVuZGVyaW5nJyxcbiAgJ2ltYWdlLXJlc29sdXRpb24nLFxuICAnaW1lLW1vZGUnLFxuICAnaW5oZXJpdCcsXG4gICdpbml0aWFsJyxcbiAgJ2p1c3RpZnktY29udGVudCcsXG4gICdsZWZ0JyxcbiAgJ2xldHRlci1zcGFjaW5nJyxcbiAgJ2xpbmUtaGVpZ2h0JyxcbiAgJ2xpc3Qtc3R5bGUnLFxuICAnbGlzdC1zdHlsZS1pbWFnZScsXG4gICdsaXN0LXN0eWxlLXBvc2l0aW9uJyxcbiAgJ2xpc3Qtc3R5bGUtdHlwZScsXG4gICdtYXJnaW4nLFxuICAnbWFyZ2luLWJvdHRvbScsXG4gICdtYXJnaW4tbGVmdCcsXG4gICdtYXJnaW4tcmlnaHQnLFxuICAnbWFyZ2luLXRvcCcsXG4gICdtYXJrcycsXG4gICdtYXNrJyxcbiAgJ21heC1oZWlnaHQnLFxuICAnbWF4LXdpZHRoJyxcbiAgJ21pbi1oZWlnaHQnLFxuICAnbWluLXdpZHRoJyxcbiAgJ25hdi1kb3duJyxcbiAgJ25hdi1pbmRleCcsXG4gICduYXYtbGVmdCcsXG4gICduYXYtcmlnaHQnLFxuICAnbmF2LXVwJyxcbiAgJ25vbmUnLFxuICAnbm9ybWFsJyxcbiAgJ29iamVjdC1maXQnLFxuICAnb2JqZWN0LXBvc2l0aW9uJyxcbiAgJ29wYWNpdHknLFxuICAnb3JkZXInLFxuICAnb3JwaGFucycsXG4gICdvdXRsaW5lJyxcbiAgJ291dGxpbmUtY29sb3InLFxuICAnb3V0bGluZS1vZmZzZXQnLFxuICAnb3V0bGluZS1zdHlsZScsXG4gICdvdXRsaW5lLXdpZHRoJyxcbiAgJ292ZXJmbG93JyxcbiAgJ292ZXJmbG93LXdyYXAnLFxuICAnb3ZlcmZsb3cteCcsXG4gICdvdmVyZmxvdy15JyxcbiAgJ3BhZGRpbmcnLFxuICAncGFkZGluZy1ib3R0b20nLFxuICAncGFkZGluZy1sZWZ0JyxcbiAgJ3BhZGRpbmctcmlnaHQnLFxuICAncGFkZGluZy10b3AnLFxuICAncGFnZS1icmVhay1hZnRlcicsXG4gICdwYWdlLWJyZWFrLWJlZm9yZScsXG4gICdwYWdlLWJyZWFrLWluc2lkZScsXG4gICdwZXJzcGVjdGl2ZScsXG4gICdwZXJzcGVjdGl2ZS1vcmlnaW4nLFxuICAncG9pbnRlci1ldmVudHMnLFxuICAncG9zaXRpb24nLFxuICAncXVvdGVzJyxcbiAgJ3Jlc2l6ZScsXG4gICdyaWdodCcsXG4gICdzcmMnLCAvLyBAZm9udC1mYWNlXG4gICd0YWItc2l6ZScsXG4gICd0YWJsZS1sYXlvdXQnLFxuICAndGV4dC1hbGlnbicsXG4gICd0ZXh0LWFsaWduLWxhc3QnLFxuICAndGV4dC1kZWNvcmF0aW9uJyxcbiAgJ3RleHQtZGVjb3JhdGlvbi1jb2xvcicsXG4gICd0ZXh0LWRlY29yYXRpb24tbGluZScsXG4gICd0ZXh0LWRlY29yYXRpb24tc3R5bGUnLFxuICAndGV4dC1pbmRlbnQnLFxuICAndGV4dC1vdmVyZmxvdycsXG4gICd0ZXh0LXJlbmRlcmluZycsXG4gICd0ZXh0LXNoYWRvdycsXG4gICd0ZXh0LXRyYW5zZm9ybScsXG4gICd0ZXh0LXVuZGVybGluZS1wb3NpdGlvbicsXG4gICd0b3AnLFxuICAndHJhbnNmb3JtJyxcbiAgJ3RyYW5zZm9ybS1vcmlnaW4nLFxuICAndHJhbnNmb3JtLXN0eWxlJyxcbiAgJ3RyYW5zaXRpb24nLFxuICAndHJhbnNpdGlvbi1kZWxheScsXG4gICd0cmFuc2l0aW9uLWR1cmF0aW9uJyxcbiAgJ3RyYW5zaXRpb24tcHJvcGVydHknLFxuICAndHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24nLFxuICAndW5pY29kZS1iaWRpJyxcbiAgJ3ZlcnRpY2FsLWFsaWduJyxcbiAgJ3Zpc2liaWxpdHknLFxuICAnd2hpdGUtc3BhY2UnLFxuICAnd2lkb3dzJyxcbiAgJ3dpZHRoJyxcbiAgJ3dvcmQtYnJlYWsnLFxuICAnd29yZC1zcGFjaW5nJyxcbiAgJ3dvcmQtd3JhcCcsXG4gICd6LWluZGV4J1xuICAvLyByZXZlcnNlIG1ha2VzIHN1cmUgbG9uZ2VyIGF0dHJpYnV0ZXMgYGZvbnQtd2VpZ2h0YCBhcmUgbWF0Y2hlZCBmdWxseVxuICAvLyBpbnN0ZWFkIG9mIGdldHRpbmcgZmFsc2UgcG9zaXRpdmVzIG9uIHNheSBgZm9udGBcbl0ucmV2ZXJzZSgpO1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHJldHVybnMge1JlZ0V4cH1cbiAqICovXG5cbi8qKlxuICogQHBhcmFtIHtSZWdFeHAgfCBzdHJpbmcgfSByZVxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gc291cmNlKHJlKSB7XG4gIGlmICghcmUpIHJldHVybiBudWxsO1xuICBpZiAodHlwZW9mIHJlID09PSBcInN0cmluZ1wiKSByZXR1cm4gcmU7XG5cbiAgcmV0dXJuIHJlLnNvdXJjZTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge1JlZ0V4cCB8IHN0cmluZyB9IHJlXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBsb29rYWhlYWQocmUpIHtcbiAgcmV0dXJuIGNvbmNhdCgnKD89JywgcmUsICcpJyk7XG59XG5cbi8qKlxuICogQHBhcmFtIHsuLi4oUmVnRXhwIHwgc3RyaW5nKSB9IGFyZ3NcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGNvbmNhdCguLi5hcmdzKSB7XG4gIGNvbnN0IGpvaW5lZCA9IGFyZ3MubWFwKCh4KSA9PiBzb3VyY2UoeCkpLmpvaW4oXCJcIik7XG4gIHJldHVybiBqb2luZWQ7XG59XG5cbi8qXG5MYW5ndWFnZTogQ1NTXG5DYXRlZ29yeTogY29tbW9uLCBjc3NcbldlYnNpdGU6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTU1xuKi9cblxuLyoqIEB0eXBlIExhbmd1YWdlRm4gKi9cbmZ1bmN0aW9uIGNzcyhobGpzKSB7XG4gIGNvbnN0IG1vZGVzID0gTU9ERVMoaGxqcyk7XG4gIGNvbnN0IEZVTkNUSU9OX0RJU1BBVENIID0ge1xuICAgIGNsYXNzTmFtZTogXCJidWlsdF9pblwiLFxuICAgIGJlZ2luOiAvW1xcdy1dKyg/PVxcKCkvXG4gIH07XG4gIGNvbnN0IFZFTkRPUl9QUkVGSVggPSB7XG4gICAgYmVnaW46IC8tKHdlYmtpdHxtb3p8bXN8byktKD89W2Etel0pL1xuICB9O1xuICBjb25zdCBBVF9NT0RJRklFUlMgPSBcImFuZCBvciBub3Qgb25seVwiO1xuICBjb25zdCBBVF9QUk9QRVJUWV9SRSA9IC9ALT9cXHdbXFx3XSooLVxcdyspKi87IC8vIEAtd2Via2l0LWtleWZyYW1lc1xuICBjb25zdCBJREVOVF9SRSA9ICdbYS16QS1aLV1bYS16QS1aMC05Xy1dKic7XG4gIGNvbnN0IFNUUklOR1MgPSBbXG4gICAgaGxqcy5BUE9TX1NUUklOR19NT0RFLFxuICAgIGhsanMuUVVPVEVfU1RSSU5HX01PREVcbiAgXTtcblxuICByZXR1cm4ge1xuICAgIG5hbWU6ICdDU1MnLFxuICAgIGNhc2VfaW5zZW5zaXRpdmU6IHRydWUsXG4gICAgaWxsZWdhbDogL1s9fCdcXCRdLyxcbiAgICBrZXl3b3Jkczoge1xuICAgICAga2V5ZnJhbWVQb3NpdGlvbjogXCJmcm9tIHRvXCJcbiAgICB9LFxuICAgIGNsYXNzTmFtZUFsaWFzZXM6IHtcbiAgICAgIC8vIGZvciB2aXN1YWwgY29udGludWl0eSB3aXRoIGB0YWcge31gIGFuZCBiZWNhdXNlIHdlXG4gICAgICAvLyBkb24ndCBoYXZlIGEgZ3JlYXQgY2xhc3MgZm9yIHRoaXM/XG4gICAgICBrZXlmcmFtZVBvc2l0aW9uOiBcInNlbGVjdG9yLXRhZ1wiXG4gICAgfSxcbiAgICBjb250YWluczogW1xuICAgICAgaGxqcy5DX0JMT0NLX0NPTU1FTlRfTU9ERSxcbiAgICAgIFZFTkRPUl9QUkVGSVgsXG4gICAgICAvLyB0byByZWNvZ25pemUga2V5ZnJhbWUgNDAlIGV0YyB3aGljaCBhcmUgb3V0c2lkZSB0aGUgc2NvcGUgb2Ygb3VyXG4gICAgICAvLyBhdHRyaWJ1dGUgdmFsdWUgbW9kZVxuICAgICAgaGxqcy5DU1NfTlVNQkVSX01PREUsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3NlbGVjdG9yLWlkJyxcbiAgICAgICAgYmVnaW46IC8jW0EtWmEtejAtOV8tXSsvLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3NlbGVjdG9yLWNsYXNzJyxcbiAgICAgICAgYmVnaW46ICdcXFxcLicgKyBJREVOVF9SRSxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuICAgICAgbW9kZXMuQVRUUklCVVRFX1NFTEVDVE9SX01PREUsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3NlbGVjdG9yLXBzZXVkbycsXG4gICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW46ICc6KCcgKyBQU0VVRE9fQ0xBU1NFUy5qb2luKCd8JykgKyAnKSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luOiAnOjooJyArIFBTRVVET19FTEVNRU5UUy5qb2luKCd8JykgKyAnKSdcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICAvLyB3ZSBtYXkgYWN0dWFsbHkgbmVlZCB0aGlzICgxMi8yMDIwKVxuICAgICAgLy8geyAvLyBwc2V1ZG8tc2VsZWN0b3IgcGFyYW1zXG4gICAgICAvLyAgIGJlZ2luOiAvXFwoLyxcbiAgICAgIC8vICAgZW5kOiAvXFwpLyxcbiAgICAgIC8vICAgY29udGFpbnM6IFsgaGxqcy5DU1NfTlVNQkVSX01PREUgXVxuICAgICAgLy8gfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnYXR0cmlidXRlJyxcbiAgICAgICAgYmVnaW46ICdcXFxcYignICsgQVRUUklCVVRFUy5qb2luKCd8JykgKyAnKVxcXFxiJ1xuICAgICAgfSxcbiAgICAgIC8vIGF0dHJpYnV0ZSB2YWx1ZXNcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICc6JyxcbiAgICAgICAgZW5kOiAnWzt9XScsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgbW9kZXMuSEVYQ09MT1IsXG4gICAgICAgICAgbW9kZXMuSU1QT1JUQU5ULFxuICAgICAgICAgIGhsanMuQ1NTX05VTUJFUl9NT0RFLFxuICAgICAgICAgIC4uLlNUUklOR1MsXG4gICAgICAgICAgLy8gbmVlZGVkIHRvIGhpZ2hsaWdodCB0aGVzZSBhcyBzdHJpbmdzIGFuZCB0byBhdm9pZCBpc3N1ZXMgd2l0aFxuICAgICAgICAgIC8vIGlsbGVnYWwgY2hhcmFjdGVycyB0aGF0IG1pZ2h0IGJlIGluc2lkZSB1cmxzIHRoYXQgd291bGQgdGlnZ2VyIHRoZVxuICAgICAgICAgIC8vIGxhbmd1YWdlcyBpbGxlZ2FsIHN0YWNrXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW46IC8odXJsfGRhdGEtdXJpKVxcKC8sXG4gICAgICAgICAgICBlbmQ6IC9cXCkvLFxuICAgICAgICAgICAgcmVsZXZhbmNlOiAwLCAvLyBmcm9tIGtleXdvcmRzXG4gICAgICAgICAgICBrZXl3b3Jkczoge1xuICAgICAgICAgICAgICBidWlsdF9pbjogXCJ1cmwgZGF0YS11cmlcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgLy8gYW55IGNoYXJhY3RlciBvdGhlciB0aGFuIGApYCBhcyBpbiBgdXJsKClgIHdpbGwgYmUgdGhlIHN0YXJ0XG4gICAgICAgICAgICAgICAgLy8gb2YgYSBzdHJpbmcsIHdoaWNoIGVuZHMgd2l0aCBgKWAgKGZyb20gdGhlIHBhcmVudCBtb2RlKVxuICAgICAgICAgICAgICAgIGJlZ2luOiAvW14pXS8sXG4gICAgICAgICAgICAgICAgZW5kc1dpdGhQYXJlbnQ6IHRydWUsXG4gICAgICAgICAgICAgICAgZXhjbHVkZUVuZDogdHJ1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICBGVU5DVElPTl9ESVNQQVRDSFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogbG9va2FoZWFkKC9ALyksXG4gICAgICAgIGVuZDogJ1t7O10nLFxuICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgIGlsbGVnYWw6IC86LywgLy8gYnJlYWsgb24gTGVzcyB2YXJpYWJsZXMgQHZhcjogLi4uXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAna2V5d29yZCcsXG4gICAgICAgICAgICBiZWdpbjogQVRfUFJPUEVSVFlfUkVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luOiAvXFxzLyxcbiAgICAgICAgICAgIGVuZHNXaXRoUGFyZW50OiB0cnVlLFxuICAgICAgICAgICAgZXhjbHVkZUVuZDogdHJ1ZSxcbiAgICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICAgIGtleXdvcmRzOiB7XG4gICAgICAgICAgICAgICRwYXR0ZXJuOiAvW2Etei1dKy8sXG4gICAgICAgICAgICAgIGtleXdvcmQ6IEFUX01PRElGSUVSUyxcbiAgICAgICAgICAgICAgYXR0cmlidXRlOiBNRURJQV9GRUFUVVJFUy5qb2luKFwiIFwiKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBiZWdpbjogL1thLXotXSsoPz06KS8sXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcImF0dHJpYnV0ZVwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIC4uLlNUUklOR1MsXG4gICAgICAgICAgICAgIGhsanMuQ1NTX05VTUJFUl9NT0RFXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdzZWxlY3Rvci10YWcnLFxuICAgICAgICBiZWdpbjogJ1xcXFxiKCcgKyBUQUdTLmpvaW4oJ3wnKSArICcpXFxcXGInXG4gICAgICB9XG4gICAgXVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNzcztcbiJdLCJzb3VyY2VSb290IjoiIn0=