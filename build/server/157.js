exports.ids = [157];
exports.modules = {

/***/ "./node_modules/highlight.js/lib/languages/scss.js":
/*!*********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/scss.js ***!
  \*********************************************************/
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
Language: SCSS
Description: Scss is an extension of the syntax of CSS.
Author: Kurt Emch <kurt@kurtemch.com>
Website: https://sass-lang.com
Category: common, css
*/

/** @type LanguageFn */
function scss(hljs) {
  const modes = MODES(hljs);
  const PSEUDO_ELEMENTS$1 = PSEUDO_ELEMENTS;
  const PSEUDO_CLASSES$1 = PSEUDO_CLASSES;

  const AT_IDENTIFIER = '@[a-z-]+'; // @font-face
  const AT_MODIFIERS = "and or not only";
  const IDENT_RE = '[a-zA-Z-][a-zA-Z0-9_-]*';
  const VARIABLE = {
    className: 'variable',
    begin: '(\\$' + IDENT_RE + ')\\b'
  };

  return {
    name: 'SCSS',
    case_insensitive: true,
    illegal: '[=/|\']',
    contains: [
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      {
        className: 'selector-id',
        begin: '#[A-Za-z0-9_-]+',
        relevance: 0
      },
      {
        className: 'selector-class',
        begin: '\\.[A-Za-z0-9_-]+',
        relevance: 0
      },
      modes.ATTRIBUTE_SELECTOR_MODE,
      {
        className: 'selector-tag',
        begin: '\\b(' + TAGS.join('|') + ')\\b',
        // was there, before, but why?
        relevance: 0
      },
      {
        className: 'selector-pseudo',
        begin: ':(' + PSEUDO_CLASSES$1.join('|') + ')'
      },
      {
        className: 'selector-pseudo',
        begin: '::(' + PSEUDO_ELEMENTS$1.join('|') + ')'
      },
      VARIABLE,
      { // pseudo-selector params
        begin: /\(/,
        end: /\)/,
        contains: [ hljs.CSS_NUMBER_MODE ]
      },
      {
        className: 'attribute',
        begin: '\\b(' + ATTRIBUTES.join('|') + ')\\b'
      },
      {
        begin: '\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b'
      },
      {
        begin: ':',
        end: ';',
        contains: [
          VARIABLE,
          modes.HEXCOLOR,
          hljs.CSS_NUMBER_MODE,
          hljs.QUOTE_STRING_MODE,
          hljs.APOS_STRING_MODE,
          modes.IMPORTANT
        ]
      },
      // matching these here allows us to treat them more like regular CSS
      // rules so everything between the {} gets regular rule highlighting,
      // which is what we want for page and font-face
      {
        begin: '@(page|font-face)',
        lexemes: AT_IDENTIFIER,
        keywords: '@page @font-face'
      },
      {
        begin: '@',
        end: '[{;]',
        returnBegin: true,
        keywords: {
          $pattern: /[a-z-]+/,
          keyword: AT_MODIFIERS,
          attribute: MEDIA_FEATURES.join(" ")
        },
        contains: [
          {
            begin: AT_IDENTIFIER,
            className: "keyword"
          },
          {
            begin: /[a-z-]+(?=:)/,
            className: "attribute"
          },
          VARIABLE,
          hljs.QUOTE_STRING_MODE,
          hljs.APOS_STRING_MODE,
          modes.HEXCOLOR,
          hljs.CSS_NUMBER_MODE
        ]
      }
    ]
  };
}

module.exports = scss;


/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvc2Nzcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsNEJBQTRCLEVBQUUsYUFBYSxFQUFFO0FBQzdDLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiIxNTcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBNT0RFUyA9IChobGpzKSA9PiB7XG4gIHJldHVybiB7XG4gICAgSU1QT1JUQU5UOiB7XG4gICAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICAgIGJlZ2luOiAnIWltcG9ydGFudCdcbiAgICB9LFxuICAgIEhFWENPTE9SOiB7XG4gICAgICBjbGFzc05hbWU6ICdudW1iZXInLFxuICAgICAgYmVnaW46ICcjKFthLWZBLUYwLTldezZ9fFthLWZBLUYwLTldezN9KSdcbiAgICB9LFxuICAgIEFUVFJJQlVURV9TRUxFQ1RPUl9NT0RFOiB7XG4gICAgICBjbGFzc05hbWU6ICdzZWxlY3Rvci1hdHRyJyxcbiAgICAgIGJlZ2luOiAvXFxbLyxcbiAgICAgIGVuZDogL1xcXS8sXG4gICAgICBpbGxlZ2FsOiAnJCcsXG4gICAgICBjb250YWluczogW1xuICAgICAgICBobGpzLkFQT1NfU1RSSU5HX01PREUsXG4gICAgICAgIGhsanMuUVVPVEVfU1RSSU5HX01PREVcbiAgICAgIF1cbiAgICB9XG4gIH07XG59O1xuXG5jb25zdCBUQUdTID0gW1xuICAnYScsXG4gICdhYmJyJyxcbiAgJ2FkZHJlc3MnLFxuICAnYXJ0aWNsZScsXG4gICdhc2lkZScsXG4gICdhdWRpbycsXG4gICdiJyxcbiAgJ2Jsb2NrcXVvdGUnLFxuICAnYm9keScsXG4gICdidXR0b24nLFxuICAnY2FudmFzJyxcbiAgJ2NhcHRpb24nLFxuICAnY2l0ZScsXG4gICdjb2RlJyxcbiAgJ2RkJyxcbiAgJ2RlbCcsXG4gICdkZXRhaWxzJyxcbiAgJ2RmbicsXG4gICdkaXYnLFxuICAnZGwnLFxuICAnZHQnLFxuICAnZW0nLFxuICAnZmllbGRzZXQnLFxuICAnZmlnY2FwdGlvbicsXG4gICdmaWd1cmUnLFxuICAnZm9vdGVyJyxcbiAgJ2Zvcm0nLFxuICAnaDEnLFxuICAnaDInLFxuICAnaDMnLFxuICAnaDQnLFxuICAnaDUnLFxuICAnaDYnLFxuICAnaGVhZGVyJyxcbiAgJ2hncm91cCcsXG4gICdodG1sJyxcbiAgJ2knLFxuICAnaWZyYW1lJyxcbiAgJ2ltZycsXG4gICdpbnB1dCcsXG4gICdpbnMnLFxuICAna2JkJyxcbiAgJ2xhYmVsJyxcbiAgJ2xlZ2VuZCcsXG4gICdsaScsXG4gICdtYWluJyxcbiAgJ21hcmsnLFxuICAnbWVudScsXG4gICduYXYnLFxuICAnb2JqZWN0JyxcbiAgJ29sJyxcbiAgJ3AnLFxuICAncScsXG4gICdxdW90ZScsXG4gICdzYW1wJyxcbiAgJ3NlY3Rpb24nLFxuICAnc3BhbicsXG4gICdzdHJvbmcnLFxuICAnc3VtbWFyeScsXG4gICdzdXAnLFxuICAndGFibGUnLFxuICAndGJvZHknLFxuICAndGQnLFxuICAndGV4dGFyZWEnLFxuICAndGZvb3QnLFxuICAndGgnLFxuICAndGhlYWQnLFxuICAndGltZScsXG4gICd0cicsXG4gICd1bCcsXG4gICd2YXInLFxuICAndmlkZW8nXG5dO1xuXG5jb25zdCBNRURJQV9GRUFUVVJFUyA9IFtcbiAgJ2FueS1ob3ZlcicsXG4gICdhbnktcG9pbnRlcicsXG4gICdhc3BlY3QtcmF0aW8nLFxuICAnY29sb3InLFxuICAnY29sb3ItZ2FtdXQnLFxuICAnY29sb3ItaW5kZXgnLFxuICAnZGV2aWNlLWFzcGVjdC1yYXRpbycsXG4gICdkZXZpY2UtaGVpZ2h0JyxcbiAgJ2RldmljZS13aWR0aCcsXG4gICdkaXNwbGF5LW1vZGUnLFxuICAnZm9yY2VkLWNvbG9ycycsXG4gICdncmlkJyxcbiAgJ2hlaWdodCcsXG4gICdob3ZlcicsXG4gICdpbnZlcnRlZC1jb2xvcnMnLFxuICAnbW9ub2Nocm9tZScsXG4gICdvcmllbnRhdGlvbicsXG4gICdvdmVyZmxvdy1ibG9jaycsXG4gICdvdmVyZmxvdy1pbmxpbmUnLFxuICAncG9pbnRlcicsXG4gICdwcmVmZXJzLWNvbG9yLXNjaGVtZScsXG4gICdwcmVmZXJzLWNvbnRyYXN0JyxcbiAgJ3ByZWZlcnMtcmVkdWNlZC1tb3Rpb24nLFxuICAncHJlZmVycy1yZWR1Y2VkLXRyYW5zcGFyZW5jeScsXG4gICdyZXNvbHV0aW9uJyxcbiAgJ3NjYW4nLFxuICAnc2NyaXB0aW5nJyxcbiAgJ3VwZGF0ZScsXG4gICd3aWR0aCcsXG4gIC8vIFRPRE86IGZpbmQgYSBiZXR0ZXIgc29sdXRpb24/XG4gICdtaW4td2lkdGgnLFxuICAnbWF4LXdpZHRoJyxcbiAgJ21pbi1oZWlnaHQnLFxuICAnbWF4LWhlaWdodCdcbl07XG5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9Qc2V1ZG8tY2xhc3Nlc1xuY29uc3QgUFNFVURPX0NMQVNTRVMgPSBbXG4gICdhY3RpdmUnLFxuICAnYW55LWxpbmsnLFxuICAnYmxhbmsnLFxuICAnY2hlY2tlZCcsXG4gICdjdXJyZW50JyxcbiAgJ2RlZmF1bHQnLFxuICAnZGVmaW5lZCcsXG4gICdkaXInLCAvLyBkaXIoKVxuICAnZGlzYWJsZWQnLFxuICAnZHJvcCcsXG4gICdlbXB0eScsXG4gICdlbmFibGVkJyxcbiAgJ2ZpcnN0JyxcbiAgJ2ZpcnN0LWNoaWxkJyxcbiAgJ2ZpcnN0LW9mLXR5cGUnLFxuICAnZnVsbHNjcmVlbicsXG4gICdmdXR1cmUnLFxuICAnZm9jdXMnLFxuICAnZm9jdXMtdmlzaWJsZScsXG4gICdmb2N1cy13aXRoaW4nLFxuICAnaGFzJywgLy8gaGFzKClcbiAgJ2hvc3QnLCAvLyBob3N0IG9yIGhvc3QoKVxuICAnaG9zdC1jb250ZXh0JywgLy8gaG9zdC1jb250ZXh0KClcbiAgJ2hvdmVyJyxcbiAgJ2luZGV0ZXJtaW5hdGUnLFxuICAnaW4tcmFuZ2UnLFxuICAnaW52YWxpZCcsXG4gICdpcycsIC8vIGlzKClcbiAgJ2xhbmcnLCAvLyBsYW5nKClcbiAgJ2xhc3QtY2hpbGQnLFxuICAnbGFzdC1vZi10eXBlJyxcbiAgJ2xlZnQnLFxuICAnbGluaycsXG4gICdsb2NhbC1saW5rJyxcbiAgJ25vdCcsIC8vIG5vdCgpXG4gICdudGgtY2hpbGQnLCAvLyBudGgtY2hpbGQoKVxuICAnbnRoLWNvbCcsIC8vIG50aC1jb2woKVxuICAnbnRoLWxhc3QtY2hpbGQnLCAvLyBudGgtbGFzdC1jaGlsZCgpXG4gICdudGgtbGFzdC1jb2wnLCAvLyBudGgtbGFzdC1jb2woKVxuICAnbnRoLWxhc3Qtb2YtdHlwZScsIC8vbnRoLWxhc3Qtb2YtdHlwZSgpXG4gICdudGgtb2YtdHlwZScsIC8vbnRoLW9mLXR5cGUoKVxuICAnb25seS1jaGlsZCcsXG4gICdvbmx5LW9mLXR5cGUnLFxuICAnb3B0aW9uYWwnLFxuICAnb3V0LW9mLXJhbmdlJyxcbiAgJ3Bhc3QnLFxuICAncGxhY2Vob2xkZXItc2hvd24nLFxuICAncmVhZC1vbmx5JyxcbiAgJ3JlYWQtd3JpdGUnLFxuICAncmVxdWlyZWQnLFxuICAncmlnaHQnLFxuICAncm9vdCcsXG4gICdzY29wZScsXG4gICd0YXJnZXQnLFxuICAndGFyZ2V0LXdpdGhpbicsXG4gICd1c2VyLWludmFsaWQnLFxuICAndmFsaWQnLFxuICAndmlzaXRlZCcsXG4gICd3aGVyZScgLy8gd2hlcmUoKVxuXTtcblxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL1BzZXVkby1lbGVtZW50c1xuY29uc3QgUFNFVURPX0VMRU1FTlRTID0gW1xuICAnYWZ0ZXInLFxuICAnYmFja2Ryb3AnLFxuICAnYmVmb3JlJyxcbiAgJ2N1ZScsXG4gICdjdWUtcmVnaW9uJyxcbiAgJ2ZpcnN0LWxldHRlcicsXG4gICdmaXJzdC1saW5lJyxcbiAgJ2dyYW1tYXItZXJyb3InLFxuICAnbWFya2VyJyxcbiAgJ3BhcnQnLFxuICAncGxhY2Vob2xkZXInLFxuICAnc2VsZWN0aW9uJyxcbiAgJ3Nsb3R0ZWQnLFxuICAnc3BlbGxpbmctZXJyb3InXG5dO1xuXG5jb25zdCBBVFRSSUJVVEVTID0gW1xuICAnYWxpZ24tY29udGVudCcsXG4gICdhbGlnbi1pdGVtcycsXG4gICdhbGlnbi1zZWxmJyxcbiAgJ2FuaW1hdGlvbicsXG4gICdhbmltYXRpb24tZGVsYXknLFxuICAnYW5pbWF0aW9uLWRpcmVjdGlvbicsXG4gICdhbmltYXRpb24tZHVyYXRpb24nLFxuICAnYW5pbWF0aW9uLWZpbGwtbW9kZScsXG4gICdhbmltYXRpb24taXRlcmF0aW9uLWNvdW50JyxcbiAgJ2FuaW1hdGlvbi1uYW1lJyxcbiAgJ2FuaW1hdGlvbi1wbGF5LXN0YXRlJyxcbiAgJ2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb24nLFxuICAnYXV0bycsXG4gICdiYWNrZmFjZS12aXNpYmlsaXR5JyxcbiAgJ2JhY2tncm91bmQnLFxuICAnYmFja2dyb3VuZC1hdHRhY2htZW50JyxcbiAgJ2JhY2tncm91bmQtY2xpcCcsXG4gICdiYWNrZ3JvdW5kLWNvbG9yJyxcbiAgJ2JhY2tncm91bmQtaW1hZ2UnLFxuICAnYmFja2dyb3VuZC1vcmlnaW4nLFxuICAnYmFja2dyb3VuZC1wb3NpdGlvbicsXG4gICdiYWNrZ3JvdW5kLXJlcGVhdCcsXG4gICdiYWNrZ3JvdW5kLXNpemUnLFxuICAnYm9yZGVyJyxcbiAgJ2JvcmRlci1ib3R0b20nLFxuICAnYm9yZGVyLWJvdHRvbS1jb2xvcicsXG4gICdib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzJyxcbiAgJ2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzJyxcbiAgJ2JvcmRlci1ib3R0b20tc3R5bGUnLFxuICAnYm9yZGVyLWJvdHRvbS13aWR0aCcsXG4gICdib3JkZXItY29sbGFwc2UnLFxuICAnYm9yZGVyLWNvbG9yJyxcbiAgJ2JvcmRlci1pbWFnZScsXG4gICdib3JkZXItaW1hZ2Utb3V0c2V0JyxcbiAgJ2JvcmRlci1pbWFnZS1yZXBlYXQnLFxuICAnYm9yZGVyLWltYWdlLXNsaWNlJyxcbiAgJ2JvcmRlci1pbWFnZS1zb3VyY2UnLFxuICAnYm9yZGVyLWltYWdlLXdpZHRoJyxcbiAgJ2JvcmRlci1sZWZ0JyxcbiAgJ2JvcmRlci1sZWZ0LWNvbG9yJyxcbiAgJ2JvcmRlci1sZWZ0LXN0eWxlJyxcbiAgJ2JvcmRlci1sZWZ0LXdpZHRoJyxcbiAgJ2JvcmRlci1yYWRpdXMnLFxuICAnYm9yZGVyLXJpZ2h0JyxcbiAgJ2JvcmRlci1yaWdodC1jb2xvcicsXG4gICdib3JkZXItcmlnaHQtc3R5bGUnLFxuICAnYm9yZGVyLXJpZ2h0LXdpZHRoJyxcbiAgJ2JvcmRlci1zcGFjaW5nJyxcbiAgJ2JvcmRlci1zdHlsZScsXG4gICdib3JkZXItdG9wJyxcbiAgJ2JvcmRlci10b3AtY29sb3InLFxuICAnYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cycsXG4gICdib3JkZXItdG9wLXJpZ2h0LXJhZGl1cycsXG4gICdib3JkZXItdG9wLXN0eWxlJyxcbiAgJ2JvcmRlci10b3Atd2lkdGgnLFxuICAnYm9yZGVyLXdpZHRoJyxcbiAgJ2JvdHRvbScsXG4gICdib3gtZGVjb3JhdGlvbi1icmVhaycsXG4gICdib3gtc2hhZG93JyxcbiAgJ2JveC1zaXppbmcnLFxuICAnYnJlYWstYWZ0ZXInLFxuICAnYnJlYWstYmVmb3JlJyxcbiAgJ2JyZWFrLWluc2lkZScsXG4gICdjYXB0aW9uLXNpZGUnLFxuICAnY2xlYXInLFxuICAnY2xpcCcsXG4gICdjbGlwLXBhdGgnLFxuICAnY29sb3InLFxuICAnY29sdW1uLWNvdW50JyxcbiAgJ2NvbHVtbi1maWxsJyxcbiAgJ2NvbHVtbi1nYXAnLFxuICAnY29sdW1uLXJ1bGUnLFxuICAnY29sdW1uLXJ1bGUtY29sb3InLFxuICAnY29sdW1uLXJ1bGUtc3R5bGUnLFxuICAnY29sdW1uLXJ1bGUtd2lkdGgnLFxuICAnY29sdW1uLXNwYW4nLFxuICAnY29sdW1uLXdpZHRoJyxcbiAgJ2NvbHVtbnMnLFxuICAnY29udGVudCcsXG4gICdjb3VudGVyLWluY3JlbWVudCcsXG4gICdjb3VudGVyLXJlc2V0JyxcbiAgJ2N1cnNvcicsXG4gICdkaXJlY3Rpb24nLFxuICAnZGlzcGxheScsXG4gICdlbXB0eS1jZWxscycsXG4gICdmaWx0ZXInLFxuICAnZmxleCcsXG4gICdmbGV4LWJhc2lzJyxcbiAgJ2ZsZXgtZGlyZWN0aW9uJyxcbiAgJ2ZsZXgtZmxvdycsXG4gICdmbGV4LWdyb3cnLFxuICAnZmxleC1zaHJpbmsnLFxuICAnZmxleC13cmFwJyxcbiAgJ2Zsb2F0JyxcbiAgJ2ZvbnQnLFxuICAnZm9udC1kaXNwbGF5JyxcbiAgJ2ZvbnQtZmFtaWx5JyxcbiAgJ2ZvbnQtZmVhdHVyZS1zZXR0aW5ncycsXG4gICdmb250LWtlcm5pbmcnLFxuICAnZm9udC1sYW5ndWFnZS1vdmVycmlkZScsXG4gICdmb250LXNpemUnLFxuICAnZm9udC1zaXplLWFkanVzdCcsXG4gICdmb250LXN0cmV0Y2gnLFxuICAnZm9udC1zdHlsZScsXG4gICdmb250LXZhcmlhbnQnLFxuICAnZm9udC12YXJpYW50LWxpZ2F0dXJlcycsXG4gICdmb250LXZhcmlhdGlvbi1zZXR0aW5ncycsXG4gICdmb250LXdlaWdodCcsXG4gICdoZWlnaHQnLFxuICAnaHlwaGVucycsXG4gICdpY29uJyxcbiAgJ2ltYWdlLW9yaWVudGF0aW9uJyxcbiAgJ2ltYWdlLXJlbmRlcmluZycsXG4gICdpbWFnZS1yZXNvbHV0aW9uJyxcbiAgJ2ltZS1tb2RlJyxcbiAgJ2luaGVyaXQnLFxuICAnaW5pdGlhbCcsXG4gICdqdXN0aWZ5LWNvbnRlbnQnLFxuICAnbGVmdCcsXG4gICdsZXR0ZXItc3BhY2luZycsXG4gICdsaW5lLWhlaWdodCcsXG4gICdsaXN0LXN0eWxlJyxcbiAgJ2xpc3Qtc3R5bGUtaW1hZ2UnLFxuICAnbGlzdC1zdHlsZS1wb3NpdGlvbicsXG4gICdsaXN0LXN0eWxlLXR5cGUnLFxuICAnbWFyZ2luJyxcbiAgJ21hcmdpbi1ib3R0b20nLFxuICAnbWFyZ2luLWxlZnQnLFxuICAnbWFyZ2luLXJpZ2h0JyxcbiAgJ21hcmdpbi10b3AnLFxuICAnbWFya3MnLFxuICAnbWFzaycsXG4gICdtYXgtaGVpZ2h0JyxcbiAgJ21heC13aWR0aCcsXG4gICdtaW4taGVpZ2h0JyxcbiAgJ21pbi13aWR0aCcsXG4gICduYXYtZG93bicsXG4gICduYXYtaW5kZXgnLFxuICAnbmF2LWxlZnQnLFxuICAnbmF2LXJpZ2h0JyxcbiAgJ25hdi11cCcsXG4gICdub25lJyxcbiAgJ25vcm1hbCcsXG4gICdvYmplY3QtZml0JyxcbiAgJ29iamVjdC1wb3NpdGlvbicsXG4gICdvcGFjaXR5JyxcbiAgJ29yZGVyJyxcbiAgJ29ycGhhbnMnLFxuICAnb3V0bGluZScsXG4gICdvdXRsaW5lLWNvbG9yJyxcbiAgJ291dGxpbmUtb2Zmc2V0JyxcbiAgJ291dGxpbmUtc3R5bGUnLFxuICAnb3V0bGluZS13aWR0aCcsXG4gICdvdmVyZmxvdycsXG4gICdvdmVyZmxvdy13cmFwJyxcbiAgJ292ZXJmbG93LXgnLFxuICAnb3ZlcmZsb3cteScsXG4gICdwYWRkaW5nJyxcbiAgJ3BhZGRpbmctYm90dG9tJyxcbiAgJ3BhZGRpbmctbGVmdCcsXG4gICdwYWRkaW5nLXJpZ2h0JyxcbiAgJ3BhZGRpbmctdG9wJyxcbiAgJ3BhZ2UtYnJlYWstYWZ0ZXInLFxuICAncGFnZS1icmVhay1iZWZvcmUnLFxuICAncGFnZS1icmVhay1pbnNpZGUnLFxuICAncGVyc3BlY3RpdmUnLFxuICAncGVyc3BlY3RpdmUtb3JpZ2luJyxcbiAgJ3BvaW50ZXItZXZlbnRzJyxcbiAgJ3Bvc2l0aW9uJyxcbiAgJ3F1b3RlcycsXG4gICdyZXNpemUnLFxuICAncmlnaHQnLFxuICAnc3JjJywgLy8gQGZvbnQtZmFjZVxuICAndGFiLXNpemUnLFxuICAndGFibGUtbGF5b3V0JyxcbiAgJ3RleHQtYWxpZ24nLFxuICAndGV4dC1hbGlnbi1sYXN0JyxcbiAgJ3RleHQtZGVjb3JhdGlvbicsXG4gICd0ZXh0LWRlY29yYXRpb24tY29sb3InLFxuICAndGV4dC1kZWNvcmF0aW9uLWxpbmUnLFxuICAndGV4dC1kZWNvcmF0aW9uLXN0eWxlJyxcbiAgJ3RleHQtaW5kZW50JyxcbiAgJ3RleHQtb3ZlcmZsb3cnLFxuICAndGV4dC1yZW5kZXJpbmcnLFxuICAndGV4dC1zaGFkb3cnLFxuICAndGV4dC10cmFuc2Zvcm0nLFxuICAndGV4dC11bmRlcmxpbmUtcG9zaXRpb24nLFxuICAndG9wJyxcbiAgJ3RyYW5zZm9ybScsXG4gICd0cmFuc2Zvcm0tb3JpZ2luJyxcbiAgJ3RyYW5zZm9ybS1zdHlsZScsXG4gICd0cmFuc2l0aW9uJyxcbiAgJ3RyYW5zaXRpb24tZGVsYXknLFxuICAndHJhbnNpdGlvbi1kdXJhdGlvbicsXG4gICd0cmFuc2l0aW9uLXByb3BlcnR5JyxcbiAgJ3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uJyxcbiAgJ3VuaWNvZGUtYmlkaScsXG4gICd2ZXJ0aWNhbC1hbGlnbicsXG4gICd2aXNpYmlsaXR5JyxcbiAgJ3doaXRlLXNwYWNlJyxcbiAgJ3dpZG93cycsXG4gICd3aWR0aCcsXG4gICd3b3JkLWJyZWFrJyxcbiAgJ3dvcmQtc3BhY2luZycsXG4gICd3b3JkLXdyYXAnLFxuICAnei1pbmRleCdcbiAgLy8gcmV2ZXJzZSBtYWtlcyBzdXJlIGxvbmdlciBhdHRyaWJ1dGVzIGBmb250LXdlaWdodGAgYXJlIG1hdGNoZWQgZnVsbHlcbiAgLy8gaW5zdGVhZCBvZiBnZXR0aW5nIGZhbHNlIHBvc2l0aXZlcyBvbiBzYXkgYGZvbnRgXG5dLnJldmVyc2UoKTtcblxuLypcbkxhbmd1YWdlOiBTQ1NTXG5EZXNjcmlwdGlvbjogU2NzcyBpcyBhbiBleHRlbnNpb24gb2YgdGhlIHN5bnRheCBvZiBDU1MuXG5BdXRob3I6IEt1cnQgRW1jaCA8a3VydEBrdXJ0ZW1jaC5jb20+XG5XZWJzaXRlOiBodHRwczovL3Nhc3MtbGFuZy5jb21cbkNhdGVnb3J5OiBjb21tb24sIGNzc1xuKi9cblxuLyoqIEB0eXBlIExhbmd1YWdlRm4gKi9cbmZ1bmN0aW9uIHNjc3MoaGxqcykge1xuICBjb25zdCBtb2RlcyA9IE1PREVTKGhsanMpO1xuICBjb25zdCBQU0VVRE9fRUxFTUVOVFMkMSA9IFBTRVVET19FTEVNRU5UUztcbiAgY29uc3QgUFNFVURPX0NMQVNTRVMkMSA9IFBTRVVET19DTEFTU0VTO1xuXG4gIGNvbnN0IEFUX0lERU5USUZJRVIgPSAnQFthLXotXSsnOyAvLyBAZm9udC1mYWNlXG4gIGNvbnN0IEFUX01PRElGSUVSUyA9IFwiYW5kIG9yIG5vdCBvbmx5XCI7XG4gIGNvbnN0IElERU5UX1JFID0gJ1thLXpBLVotXVthLXpBLVowLTlfLV0qJztcbiAgY29uc3QgVkFSSUFCTEUgPSB7XG4gICAgY2xhc3NOYW1lOiAndmFyaWFibGUnLFxuICAgIGJlZ2luOiAnKFxcXFwkJyArIElERU5UX1JFICsgJylcXFxcYidcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIG5hbWU6ICdTQ1NTJyxcbiAgICBjYXNlX2luc2Vuc2l0aXZlOiB0cnVlLFxuICAgIGlsbGVnYWw6ICdbPS98XFwnXScsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIGhsanMuQ19MSU5FX0NPTU1FTlRfTU9ERSxcbiAgICAgIGhsanMuQ19CTE9DS19DT01NRU5UX01PREUsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3NlbGVjdG9yLWlkJyxcbiAgICAgICAgYmVnaW46ICcjW0EtWmEtejAtOV8tXSsnLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3NlbGVjdG9yLWNsYXNzJyxcbiAgICAgICAgYmVnaW46ICdcXFxcLltBLVphLXowLTlfLV0rJyxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuICAgICAgbW9kZXMuQVRUUklCVVRFX1NFTEVDVE9SX01PREUsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3NlbGVjdG9yLXRhZycsXG4gICAgICAgIGJlZ2luOiAnXFxcXGIoJyArIFRBR1Muam9pbignfCcpICsgJylcXFxcYicsXG4gICAgICAgIC8vIHdhcyB0aGVyZSwgYmVmb3JlLCBidXQgd2h5P1xuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3NlbGVjdG9yLXBzZXVkbycsXG4gICAgICAgIGJlZ2luOiAnOignICsgUFNFVURPX0NMQVNTRVMkMS5qb2luKCd8JykgKyAnKSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3NlbGVjdG9yLXBzZXVkbycsXG4gICAgICAgIGJlZ2luOiAnOjooJyArIFBTRVVET19FTEVNRU5UUyQxLmpvaW4oJ3wnKSArICcpJ1xuICAgICAgfSxcbiAgICAgIFZBUklBQkxFLFxuICAgICAgeyAvLyBwc2V1ZG8tc2VsZWN0b3IgcGFyYW1zXG4gICAgICAgIGJlZ2luOiAvXFwoLyxcbiAgICAgICAgZW5kOiAvXFwpLyxcbiAgICAgICAgY29udGFpbnM6IFsgaGxqcy5DU1NfTlVNQkVSX01PREUgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnYXR0cmlidXRlJyxcbiAgICAgICAgYmVnaW46ICdcXFxcYignICsgQVRUUklCVVRFUy5qb2luKCd8JykgKyAnKVxcXFxiJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICdcXFxcYih3aGl0ZXNwYWNlfHdhaXR8dy1yZXNpemV8dmlzaWJsZXx2ZXJ0aWNhbC10ZXh0fHZlcnRpY2FsLWlkZW9ncmFwaGljfHVwcGVyY2FzZXx1cHBlci1yb21hbnx1cHBlci1hbHBoYXx1bmRlcmxpbmV8dHJhbnNwYXJlbnR8dG9wfHRoaW58dGhpY2t8dGV4dHx0ZXh0LXRvcHx0ZXh0LWJvdHRvbXx0Yi1ybHx0YWJsZS1oZWFkZXItZ3JvdXB8dGFibGUtZm9vdGVyLWdyb3VwfHN3LXJlc2l6ZXxzdXBlcnxzdHJpY3R8c3RhdGljfHNxdWFyZXxzb2xpZHxzbWFsbC1jYXBzfHNlcGFyYXRlfHNlLXJlc2l6ZXxzY3JvbGx8cy1yZXNpemV8cnRsfHJvdy1yZXNpemV8cmlkZ2V8cmlnaHR8cmVwZWF0fHJlcGVhdC15fHJlcGVhdC14fHJlbGF0aXZlfHByb2dyZXNzfHBvaW50ZXJ8b3ZlcmxpbmV8b3V0c2lkZXxvdXRzZXR8b2JsaXF1ZXxub3dyYXB8bm90LWFsbG93ZWR8bm9ybWFsfG5vbmV8bnctcmVzaXplfG5vLXJlcGVhdHxuby1kcm9wfG5ld3NwYXBlcnxuZS1yZXNpemV8bi1yZXNpemV8bW92ZXxtaWRkbGV8bWVkaXVtfGx0cnxsci10Ynxsb3dlcmNhc2V8bG93ZXItcm9tYW58bG93ZXItYWxwaGF8bG9vc2V8bGlzdC1pdGVtfGxpbmV8bGluZS10aHJvdWdofGxpbmUtZWRnZXxsaWdodGVyfGxlZnR8a2VlcC1hbGx8anVzdGlmeXxpdGFsaWN8aW50ZXItd29yZHxpbnRlci1pZGVvZ3JhcGh8aW5zaWRlfGluc2V0fGlubGluZXxpbmxpbmUtYmxvY2t8aW5oZXJpdHxpbmFjdGl2ZXxpZGVvZ3JhcGgtc3BhY2V8aWRlb2dyYXBoLXBhcmVudGhlc2lzfGlkZW9ncmFwaC1udW1lcmljfGlkZW9ncmFwaC1hbHBoYXxob3Jpem9udGFsfGhpZGRlbnxoZWxwfGhhbmR8Z3Jvb3ZlfGZpeGVkfGVsbGlwc2lzfGUtcmVzaXplfGRvdWJsZXxkb3R0ZWR8ZGlzdHJpYnV0ZXxkaXN0cmlidXRlLXNwYWNlfGRpc3RyaWJ1dGUtbGV0dGVyfGRpc3RyaWJ1dGUtYWxsLWxpbmVzfGRpc2N8ZGlzYWJsZWR8ZGVmYXVsdHxkZWNpbWFsfGRhc2hlZHxjcm9zc2hhaXJ8Y29sbGFwc2V8Y29sLXJlc2l6ZXxjaXJjbGV8Y2hhcnxjZW50ZXJ8Y2FwaXRhbGl6ZXxicmVhay13b3JkfGJyZWFrLWFsbHxib3R0b218Ym90aHxib2xkZXJ8Ym9sZHxibG9ja3xiaWRpLW92ZXJyaWRlfGJlbG93fGJhc2VsaW5lfGF1dG98YWx3YXlzfGFsbC1zY3JvbGx8YWJzb2x1dGV8dGFibGV8dGFibGUtY2VsbClcXFxcYidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnOicsXG4gICAgICAgIGVuZDogJzsnLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIFZBUklBQkxFLFxuICAgICAgICAgIG1vZGVzLkhFWENPTE9SLFxuICAgICAgICAgIGhsanMuQ1NTX05VTUJFUl9NT0RFLFxuICAgICAgICAgIGhsanMuUVVPVEVfU1RSSU5HX01PREUsXG4gICAgICAgICAgaGxqcy5BUE9TX1NUUklOR19NT0RFLFxuICAgICAgICAgIG1vZGVzLklNUE9SVEFOVFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgLy8gbWF0Y2hpbmcgdGhlc2UgaGVyZSBhbGxvd3MgdXMgdG8gdHJlYXQgdGhlbSBtb3JlIGxpa2UgcmVndWxhciBDU1NcbiAgICAgIC8vIHJ1bGVzIHNvIGV2ZXJ5dGhpbmcgYmV0d2VlbiB0aGUge30gZ2V0cyByZWd1bGFyIHJ1bGUgaGlnaGxpZ2h0aW5nLFxuICAgICAgLy8gd2hpY2ggaXMgd2hhdCB3ZSB3YW50IGZvciBwYWdlIGFuZCBmb250LWZhY2VcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICdAKHBhZ2V8Zm9udC1mYWNlKScsXG4gICAgICAgIGxleGVtZXM6IEFUX0lERU5USUZJRVIsXG4gICAgICAgIGtleXdvcmRzOiAnQHBhZ2UgQGZvbnQtZmFjZSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnQCcsXG4gICAgICAgIGVuZDogJ1t7O10nLFxuICAgICAgICByZXR1cm5CZWdpbjogdHJ1ZSxcbiAgICAgICAga2V5d29yZHM6IHtcbiAgICAgICAgICAkcGF0dGVybjogL1thLXotXSsvLFxuICAgICAgICAgIGtleXdvcmQ6IEFUX01PRElGSUVSUyxcbiAgICAgICAgICBhdHRyaWJ1dGU6IE1FRElBX0ZFQVRVUkVTLmpvaW4oXCIgXCIpXG4gICAgICAgIH0sXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW46IEFUX0lERU5USUZJRVIsXG4gICAgICAgICAgICBjbGFzc05hbWU6IFwia2V5d29yZFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogL1thLXotXSsoPz06KS8sXG4gICAgICAgICAgICBjbGFzc05hbWU6IFwiYXR0cmlidXRlXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFZBUklBQkxFLFxuICAgICAgICAgIGhsanMuUVVPVEVfU1RSSU5HX01PREUsXG4gICAgICAgICAgaGxqcy5BUE9TX1NUUklOR19NT0RFLFxuICAgICAgICAgIG1vZGVzLkhFWENPTE9SLFxuICAgICAgICAgIGhsanMuQ1NTX05VTUJFUl9NT0RFXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2NzcztcbiJdLCJzb3VyY2VSb290IjoiIn0=