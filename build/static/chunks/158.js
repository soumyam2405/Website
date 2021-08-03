(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[158],{

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

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3Njc3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsNEJBQTRCLEVBQUUsYUFBYSxFQUFFO0FBQzdDLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJzdGF0aWMvY2h1bmtzLzE1OC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IE1PREVTID0gKGhsanMpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBJTVBPUlRBTlQ6IHtcbiAgICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgICAgYmVnaW46ICchaW1wb3J0YW50J1xuICAgIH0sXG4gICAgSEVYQ09MT1I6IHtcbiAgICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgICBiZWdpbjogJyMoW2EtZkEtRjAtOV17Nn18W2EtZkEtRjAtOV17M30pJ1xuICAgIH0sXG4gICAgQVRUUklCVVRFX1NFTEVDVE9SX01PREU6IHtcbiAgICAgIGNsYXNzTmFtZTogJ3NlbGVjdG9yLWF0dHInLFxuICAgICAgYmVnaW46IC9cXFsvLFxuICAgICAgZW5kOiAvXFxdLyxcbiAgICAgIGlsbGVnYWw6ICckJyxcbiAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgIGhsanMuQVBPU19TVFJJTkdfTU9ERSxcbiAgICAgICAgaGxqcy5RVU9URV9TVFJJTkdfTU9ERVxuICAgICAgXVxuICAgIH1cbiAgfTtcbn07XG5cbmNvbnN0IFRBR1MgPSBbXG4gICdhJyxcbiAgJ2FiYnInLFxuICAnYWRkcmVzcycsXG4gICdhcnRpY2xlJyxcbiAgJ2FzaWRlJyxcbiAgJ2F1ZGlvJyxcbiAgJ2InLFxuICAnYmxvY2txdW90ZScsXG4gICdib2R5JyxcbiAgJ2J1dHRvbicsXG4gICdjYW52YXMnLFxuICAnY2FwdGlvbicsXG4gICdjaXRlJyxcbiAgJ2NvZGUnLFxuICAnZGQnLFxuICAnZGVsJyxcbiAgJ2RldGFpbHMnLFxuICAnZGZuJyxcbiAgJ2RpdicsXG4gICdkbCcsXG4gICdkdCcsXG4gICdlbScsXG4gICdmaWVsZHNldCcsXG4gICdmaWdjYXB0aW9uJyxcbiAgJ2ZpZ3VyZScsXG4gICdmb290ZXInLFxuICAnZm9ybScsXG4gICdoMScsXG4gICdoMicsXG4gICdoMycsXG4gICdoNCcsXG4gICdoNScsXG4gICdoNicsXG4gICdoZWFkZXInLFxuICAnaGdyb3VwJyxcbiAgJ2h0bWwnLFxuICAnaScsXG4gICdpZnJhbWUnLFxuICAnaW1nJyxcbiAgJ2lucHV0JyxcbiAgJ2lucycsXG4gICdrYmQnLFxuICAnbGFiZWwnLFxuICAnbGVnZW5kJyxcbiAgJ2xpJyxcbiAgJ21haW4nLFxuICAnbWFyaycsXG4gICdtZW51JyxcbiAgJ25hdicsXG4gICdvYmplY3QnLFxuICAnb2wnLFxuICAncCcsXG4gICdxJyxcbiAgJ3F1b3RlJyxcbiAgJ3NhbXAnLFxuICAnc2VjdGlvbicsXG4gICdzcGFuJyxcbiAgJ3N0cm9uZycsXG4gICdzdW1tYXJ5JyxcbiAgJ3N1cCcsXG4gICd0YWJsZScsXG4gICd0Ym9keScsXG4gICd0ZCcsXG4gICd0ZXh0YXJlYScsXG4gICd0Zm9vdCcsXG4gICd0aCcsXG4gICd0aGVhZCcsXG4gICd0aW1lJyxcbiAgJ3RyJyxcbiAgJ3VsJyxcbiAgJ3ZhcicsXG4gICd2aWRlbydcbl07XG5cbmNvbnN0IE1FRElBX0ZFQVRVUkVTID0gW1xuICAnYW55LWhvdmVyJyxcbiAgJ2FueS1wb2ludGVyJyxcbiAgJ2FzcGVjdC1yYXRpbycsXG4gICdjb2xvcicsXG4gICdjb2xvci1nYW11dCcsXG4gICdjb2xvci1pbmRleCcsXG4gICdkZXZpY2UtYXNwZWN0LXJhdGlvJyxcbiAgJ2RldmljZS1oZWlnaHQnLFxuICAnZGV2aWNlLXdpZHRoJyxcbiAgJ2Rpc3BsYXktbW9kZScsXG4gICdmb3JjZWQtY29sb3JzJyxcbiAgJ2dyaWQnLFxuICAnaGVpZ2h0JyxcbiAgJ2hvdmVyJyxcbiAgJ2ludmVydGVkLWNvbG9ycycsXG4gICdtb25vY2hyb21lJyxcbiAgJ29yaWVudGF0aW9uJyxcbiAgJ292ZXJmbG93LWJsb2NrJyxcbiAgJ292ZXJmbG93LWlubGluZScsXG4gICdwb2ludGVyJyxcbiAgJ3ByZWZlcnMtY29sb3Itc2NoZW1lJyxcbiAgJ3ByZWZlcnMtY29udHJhc3QnLFxuICAncHJlZmVycy1yZWR1Y2VkLW1vdGlvbicsXG4gICdwcmVmZXJzLXJlZHVjZWQtdHJhbnNwYXJlbmN5JyxcbiAgJ3Jlc29sdXRpb24nLFxuICAnc2NhbicsXG4gICdzY3JpcHRpbmcnLFxuICAndXBkYXRlJyxcbiAgJ3dpZHRoJyxcbiAgLy8gVE9ETzogZmluZCBhIGJldHRlciBzb2x1dGlvbj9cbiAgJ21pbi13aWR0aCcsXG4gICdtYXgtd2lkdGgnLFxuICAnbWluLWhlaWdodCcsXG4gICdtYXgtaGVpZ2h0J1xuXTtcblxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL1BzZXVkby1jbGFzc2VzXG5jb25zdCBQU0VVRE9fQ0xBU1NFUyA9IFtcbiAgJ2FjdGl2ZScsXG4gICdhbnktbGluaycsXG4gICdibGFuaycsXG4gICdjaGVja2VkJyxcbiAgJ2N1cnJlbnQnLFxuICAnZGVmYXVsdCcsXG4gICdkZWZpbmVkJyxcbiAgJ2RpcicsIC8vIGRpcigpXG4gICdkaXNhYmxlZCcsXG4gICdkcm9wJyxcbiAgJ2VtcHR5JyxcbiAgJ2VuYWJsZWQnLFxuICAnZmlyc3QnLFxuICAnZmlyc3QtY2hpbGQnLFxuICAnZmlyc3Qtb2YtdHlwZScsXG4gICdmdWxsc2NyZWVuJyxcbiAgJ2Z1dHVyZScsXG4gICdmb2N1cycsXG4gICdmb2N1cy12aXNpYmxlJyxcbiAgJ2ZvY3VzLXdpdGhpbicsXG4gICdoYXMnLCAvLyBoYXMoKVxuICAnaG9zdCcsIC8vIGhvc3Qgb3IgaG9zdCgpXG4gICdob3N0LWNvbnRleHQnLCAvLyBob3N0LWNvbnRleHQoKVxuICAnaG92ZXInLFxuICAnaW5kZXRlcm1pbmF0ZScsXG4gICdpbi1yYW5nZScsXG4gICdpbnZhbGlkJyxcbiAgJ2lzJywgLy8gaXMoKVxuICAnbGFuZycsIC8vIGxhbmcoKVxuICAnbGFzdC1jaGlsZCcsXG4gICdsYXN0LW9mLXR5cGUnLFxuICAnbGVmdCcsXG4gICdsaW5rJyxcbiAgJ2xvY2FsLWxpbmsnLFxuICAnbm90JywgLy8gbm90KClcbiAgJ250aC1jaGlsZCcsIC8vIG50aC1jaGlsZCgpXG4gICdudGgtY29sJywgLy8gbnRoLWNvbCgpXG4gICdudGgtbGFzdC1jaGlsZCcsIC8vIG50aC1sYXN0LWNoaWxkKClcbiAgJ250aC1sYXN0LWNvbCcsIC8vIG50aC1sYXN0LWNvbCgpXG4gICdudGgtbGFzdC1vZi10eXBlJywgLy9udGgtbGFzdC1vZi10eXBlKClcbiAgJ250aC1vZi10eXBlJywgLy9udGgtb2YtdHlwZSgpXG4gICdvbmx5LWNoaWxkJyxcbiAgJ29ubHktb2YtdHlwZScsXG4gICdvcHRpb25hbCcsXG4gICdvdXQtb2YtcmFuZ2UnLFxuICAncGFzdCcsXG4gICdwbGFjZWhvbGRlci1zaG93bicsXG4gICdyZWFkLW9ubHknLFxuICAncmVhZC13cml0ZScsXG4gICdyZXF1aXJlZCcsXG4gICdyaWdodCcsXG4gICdyb290JyxcbiAgJ3Njb3BlJyxcbiAgJ3RhcmdldCcsXG4gICd0YXJnZXQtd2l0aGluJyxcbiAgJ3VzZXItaW52YWxpZCcsXG4gICd2YWxpZCcsXG4gICd2aXNpdGVkJyxcbiAgJ3doZXJlJyAvLyB3aGVyZSgpXG5dO1xuXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvUHNldWRvLWVsZW1lbnRzXG5jb25zdCBQU0VVRE9fRUxFTUVOVFMgPSBbXG4gICdhZnRlcicsXG4gICdiYWNrZHJvcCcsXG4gICdiZWZvcmUnLFxuICAnY3VlJyxcbiAgJ2N1ZS1yZWdpb24nLFxuICAnZmlyc3QtbGV0dGVyJyxcbiAgJ2ZpcnN0LWxpbmUnLFxuICAnZ3JhbW1hci1lcnJvcicsXG4gICdtYXJrZXInLFxuICAncGFydCcsXG4gICdwbGFjZWhvbGRlcicsXG4gICdzZWxlY3Rpb24nLFxuICAnc2xvdHRlZCcsXG4gICdzcGVsbGluZy1lcnJvcidcbl07XG5cbmNvbnN0IEFUVFJJQlVURVMgPSBbXG4gICdhbGlnbi1jb250ZW50JyxcbiAgJ2FsaWduLWl0ZW1zJyxcbiAgJ2FsaWduLXNlbGYnLFxuICAnYW5pbWF0aW9uJyxcbiAgJ2FuaW1hdGlvbi1kZWxheScsXG4gICdhbmltYXRpb24tZGlyZWN0aW9uJyxcbiAgJ2FuaW1hdGlvbi1kdXJhdGlvbicsXG4gICdhbmltYXRpb24tZmlsbC1tb2RlJyxcbiAgJ2FuaW1hdGlvbi1pdGVyYXRpb24tY291bnQnLFxuICAnYW5pbWF0aW9uLW5hbWUnLFxuICAnYW5pbWF0aW9uLXBsYXktc3RhdGUnLFxuICAnYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbicsXG4gICdhdXRvJyxcbiAgJ2JhY2tmYWNlLXZpc2liaWxpdHknLFxuICAnYmFja2dyb3VuZCcsXG4gICdiYWNrZ3JvdW5kLWF0dGFjaG1lbnQnLFxuICAnYmFja2dyb3VuZC1jbGlwJyxcbiAgJ2JhY2tncm91bmQtY29sb3InLFxuICAnYmFja2dyb3VuZC1pbWFnZScsXG4gICdiYWNrZ3JvdW5kLW9yaWdpbicsXG4gICdiYWNrZ3JvdW5kLXBvc2l0aW9uJyxcbiAgJ2JhY2tncm91bmQtcmVwZWF0JyxcbiAgJ2JhY2tncm91bmQtc2l6ZScsXG4gICdib3JkZXInLFxuICAnYm9yZGVyLWJvdHRvbScsXG4gICdib3JkZXItYm90dG9tLWNvbG9yJyxcbiAgJ2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMnLFxuICAnYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXMnLFxuICAnYm9yZGVyLWJvdHRvbS1zdHlsZScsXG4gICdib3JkZXItYm90dG9tLXdpZHRoJyxcbiAgJ2JvcmRlci1jb2xsYXBzZScsXG4gICdib3JkZXItY29sb3InLFxuICAnYm9yZGVyLWltYWdlJyxcbiAgJ2JvcmRlci1pbWFnZS1vdXRzZXQnLFxuICAnYm9yZGVyLWltYWdlLXJlcGVhdCcsXG4gICdib3JkZXItaW1hZ2Utc2xpY2UnLFxuICAnYm9yZGVyLWltYWdlLXNvdXJjZScsXG4gICdib3JkZXItaW1hZ2Utd2lkdGgnLFxuICAnYm9yZGVyLWxlZnQnLFxuICAnYm9yZGVyLWxlZnQtY29sb3InLFxuICAnYm9yZGVyLWxlZnQtc3R5bGUnLFxuICAnYm9yZGVyLWxlZnQtd2lkdGgnLFxuICAnYm9yZGVyLXJhZGl1cycsXG4gICdib3JkZXItcmlnaHQnLFxuICAnYm9yZGVyLXJpZ2h0LWNvbG9yJyxcbiAgJ2JvcmRlci1yaWdodC1zdHlsZScsXG4gICdib3JkZXItcmlnaHQtd2lkdGgnLFxuICAnYm9yZGVyLXNwYWNpbmcnLFxuICAnYm9yZGVyLXN0eWxlJyxcbiAgJ2JvcmRlci10b3AnLFxuICAnYm9yZGVyLXRvcC1jb2xvcicsXG4gICdib3JkZXItdG9wLWxlZnQtcmFkaXVzJyxcbiAgJ2JvcmRlci10b3AtcmlnaHQtcmFkaXVzJyxcbiAgJ2JvcmRlci10b3Atc3R5bGUnLFxuICAnYm9yZGVyLXRvcC13aWR0aCcsXG4gICdib3JkZXItd2lkdGgnLFxuICAnYm90dG9tJyxcbiAgJ2JveC1kZWNvcmF0aW9uLWJyZWFrJyxcbiAgJ2JveC1zaGFkb3cnLFxuICAnYm94LXNpemluZycsXG4gICdicmVhay1hZnRlcicsXG4gICdicmVhay1iZWZvcmUnLFxuICAnYnJlYWstaW5zaWRlJyxcbiAgJ2NhcHRpb24tc2lkZScsXG4gICdjbGVhcicsXG4gICdjbGlwJyxcbiAgJ2NsaXAtcGF0aCcsXG4gICdjb2xvcicsXG4gICdjb2x1bW4tY291bnQnLFxuICAnY29sdW1uLWZpbGwnLFxuICAnY29sdW1uLWdhcCcsXG4gICdjb2x1bW4tcnVsZScsXG4gICdjb2x1bW4tcnVsZS1jb2xvcicsXG4gICdjb2x1bW4tcnVsZS1zdHlsZScsXG4gICdjb2x1bW4tcnVsZS13aWR0aCcsXG4gICdjb2x1bW4tc3BhbicsXG4gICdjb2x1bW4td2lkdGgnLFxuICAnY29sdW1ucycsXG4gICdjb250ZW50JyxcbiAgJ2NvdW50ZXItaW5jcmVtZW50JyxcbiAgJ2NvdW50ZXItcmVzZXQnLFxuICAnY3Vyc29yJyxcbiAgJ2RpcmVjdGlvbicsXG4gICdkaXNwbGF5JyxcbiAgJ2VtcHR5LWNlbGxzJyxcbiAgJ2ZpbHRlcicsXG4gICdmbGV4JyxcbiAgJ2ZsZXgtYmFzaXMnLFxuICAnZmxleC1kaXJlY3Rpb24nLFxuICAnZmxleC1mbG93JyxcbiAgJ2ZsZXgtZ3JvdycsXG4gICdmbGV4LXNocmluaycsXG4gICdmbGV4LXdyYXAnLFxuICAnZmxvYXQnLFxuICAnZm9udCcsXG4gICdmb250LWRpc3BsYXknLFxuICAnZm9udC1mYW1pbHknLFxuICAnZm9udC1mZWF0dXJlLXNldHRpbmdzJyxcbiAgJ2ZvbnQta2VybmluZycsXG4gICdmb250LWxhbmd1YWdlLW92ZXJyaWRlJyxcbiAgJ2ZvbnQtc2l6ZScsXG4gICdmb250LXNpemUtYWRqdXN0JyxcbiAgJ2ZvbnQtc3RyZXRjaCcsXG4gICdmb250LXN0eWxlJyxcbiAgJ2ZvbnQtdmFyaWFudCcsXG4gICdmb250LXZhcmlhbnQtbGlnYXR1cmVzJyxcbiAgJ2ZvbnQtdmFyaWF0aW9uLXNldHRpbmdzJyxcbiAgJ2ZvbnQtd2VpZ2h0JyxcbiAgJ2hlaWdodCcsXG4gICdoeXBoZW5zJyxcbiAgJ2ljb24nLFxuICAnaW1hZ2Utb3JpZW50YXRpb24nLFxuICAnaW1hZ2UtcmVuZGVyaW5nJyxcbiAgJ2ltYWdlLXJlc29sdXRpb24nLFxuICAnaW1lLW1vZGUnLFxuICAnaW5oZXJpdCcsXG4gICdpbml0aWFsJyxcbiAgJ2p1c3RpZnktY29udGVudCcsXG4gICdsZWZ0JyxcbiAgJ2xldHRlci1zcGFjaW5nJyxcbiAgJ2xpbmUtaGVpZ2h0JyxcbiAgJ2xpc3Qtc3R5bGUnLFxuICAnbGlzdC1zdHlsZS1pbWFnZScsXG4gICdsaXN0LXN0eWxlLXBvc2l0aW9uJyxcbiAgJ2xpc3Qtc3R5bGUtdHlwZScsXG4gICdtYXJnaW4nLFxuICAnbWFyZ2luLWJvdHRvbScsXG4gICdtYXJnaW4tbGVmdCcsXG4gICdtYXJnaW4tcmlnaHQnLFxuICAnbWFyZ2luLXRvcCcsXG4gICdtYXJrcycsXG4gICdtYXNrJyxcbiAgJ21heC1oZWlnaHQnLFxuICAnbWF4LXdpZHRoJyxcbiAgJ21pbi1oZWlnaHQnLFxuICAnbWluLXdpZHRoJyxcbiAgJ25hdi1kb3duJyxcbiAgJ25hdi1pbmRleCcsXG4gICduYXYtbGVmdCcsXG4gICduYXYtcmlnaHQnLFxuICAnbmF2LXVwJyxcbiAgJ25vbmUnLFxuICAnbm9ybWFsJyxcbiAgJ29iamVjdC1maXQnLFxuICAnb2JqZWN0LXBvc2l0aW9uJyxcbiAgJ29wYWNpdHknLFxuICAnb3JkZXInLFxuICAnb3JwaGFucycsXG4gICdvdXRsaW5lJyxcbiAgJ291dGxpbmUtY29sb3InLFxuICAnb3V0bGluZS1vZmZzZXQnLFxuICAnb3V0bGluZS1zdHlsZScsXG4gICdvdXRsaW5lLXdpZHRoJyxcbiAgJ292ZXJmbG93JyxcbiAgJ292ZXJmbG93LXdyYXAnLFxuICAnb3ZlcmZsb3cteCcsXG4gICdvdmVyZmxvdy15JyxcbiAgJ3BhZGRpbmcnLFxuICAncGFkZGluZy1ib3R0b20nLFxuICAncGFkZGluZy1sZWZ0JyxcbiAgJ3BhZGRpbmctcmlnaHQnLFxuICAncGFkZGluZy10b3AnLFxuICAncGFnZS1icmVhay1hZnRlcicsXG4gICdwYWdlLWJyZWFrLWJlZm9yZScsXG4gICdwYWdlLWJyZWFrLWluc2lkZScsXG4gICdwZXJzcGVjdGl2ZScsXG4gICdwZXJzcGVjdGl2ZS1vcmlnaW4nLFxuICAncG9pbnRlci1ldmVudHMnLFxuICAncG9zaXRpb24nLFxuICAncXVvdGVzJyxcbiAgJ3Jlc2l6ZScsXG4gICdyaWdodCcsXG4gICdzcmMnLCAvLyBAZm9udC1mYWNlXG4gICd0YWItc2l6ZScsXG4gICd0YWJsZS1sYXlvdXQnLFxuICAndGV4dC1hbGlnbicsXG4gICd0ZXh0LWFsaWduLWxhc3QnLFxuICAndGV4dC1kZWNvcmF0aW9uJyxcbiAgJ3RleHQtZGVjb3JhdGlvbi1jb2xvcicsXG4gICd0ZXh0LWRlY29yYXRpb24tbGluZScsXG4gICd0ZXh0LWRlY29yYXRpb24tc3R5bGUnLFxuICAndGV4dC1pbmRlbnQnLFxuICAndGV4dC1vdmVyZmxvdycsXG4gICd0ZXh0LXJlbmRlcmluZycsXG4gICd0ZXh0LXNoYWRvdycsXG4gICd0ZXh0LXRyYW5zZm9ybScsXG4gICd0ZXh0LXVuZGVybGluZS1wb3NpdGlvbicsXG4gICd0b3AnLFxuICAndHJhbnNmb3JtJyxcbiAgJ3RyYW5zZm9ybS1vcmlnaW4nLFxuICAndHJhbnNmb3JtLXN0eWxlJyxcbiAgJ3RyYW5zaXRpb24nLFxuICAndHJhbnNpdGlvbi1kZWxheScsXG4gICd0cmFuc2l0aW9uLWR1cmF0aW9uJyxcbiAgJ3RyYW5zaXRpb24tcHJvcGVydHknLFxuICAndHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24nLFxuICAndW5pY29kZS1iaWRpJyxcbiAgJ3ZlcnRpY2FsLWFsaWduJyxcbiAgJ3Zpc2liaWxpdHknLFxuICAnd2hpdGUtc3BhY2UnLFxuICAnd2lkb3dzJyxcbiAgJ3dpZHRoJyxcbiAgJ3dvcmQtYnJlYWsnLFxuICAnd29yZC1zcGFjaW5nJyxcbiAgJ3dvcmQtd3JhcCcsXG4gICd6LWluZGV4J1xuICAvLyByZXZlcnNlIG1ha2VzIHN1cmUgbG9uZ2VyIGF0dHJpYnV0ZXMgYGZvbnQtd2VpZ2h0YCBhcmUgbWF0Y2hlZCBmdWxseVxuICAvLyBpbnN0ZWFkIG9mIGdldHRpbmcgZmFsc2UgcG9zaXRpdmVzIG9uIHNheSBgZm9udGBcbl0ucmV2ZXJzZSgpO1xuXG4vKlxuTGFuZ3VhZ2U6IFNDU1NcbkRlc2NyaXB0aW9uOiBTY3NzIGlzIGFuIGV4dGVuc2lvbiBvZiB0aGUgc3ludGF4IG9mIENTUy5cbkF1dGhvcjogS3VydCBFbWNoIDxrdXJ0QGt1cnRlbWNoLmNvbT5cbldlYnNpdGU6IGh0dHBzOi8vc2Fzcy1sYW5nLmNvbVxuQ2F0ZWdvcnk6IGNvbW1vbiwgY3NzXG4qL1xuXG4vKiogQHR5cGUgTGFuZ3VhZ2VGbiAqL1xuZnVuY3Rpb24gc2NzcyhobGpzKSB7XG4gIGNvbnN0IG1vZGVzID0gTU9ERVMoaGxqcyk7XG4gIGNvbnN0IFBTRVVET19FTEVNRU5UUyQxID0gUFNFVURPX0VMRU1FTlRTO1xuICBjb25zdCBQU0VVRE9fQ0xBU1NFUyQxID0gUFNFVURPX0NMQVNTRVM7XG5cbiAgY29uc3QgQVRfSURFTlRJRklFUiA9ICdAW2Etei1dKyc7IC8vIEBmb250LWZhY2VcbiAgY29uc3QgQVRfTU9ESUZJRVJTID0gXCJhbmQgb3Igbm90IG9ubHlcIjtcbiAgY29uc3QgSURFTlRfUkUgPSAnW2EtekEtWi1dW2EtekEtWjAtOV8tXSonO1xuICBjb25zdCBWQVJJQUJMRSA9IHtcbiAgICBjbGFzc05hbWU6ICd2YXJpYWJsZScsXG4gICAgYmVnaW46ICcoXFxcXCQnICsgSURFTlRfUkUgKyAnKVxcXFxiJ1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgbmFtZTogJ1NDU1MnLFxuICAgIGNhc2VfaW5zZW5zaXRpdmU6IHRydWUsXG4gICAgaWxsZWdhbDogJ1s9L3xcXCddJyxcbiAgICBjb250YWluczogW1xuICAgICAgaGxqcy5DX0xJTkVfQ09NTUVOVF9NT0RFLFxuICAgICAgaGxqcy5DX0JMT0NLX0NPTU1FTlRfTU9ERSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnc2VsZWN0b3ItaWQnLFxuICAgICAgICBiZWdpbjogJyNbQS1aYS16MC05Xy1dKycsXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnc2VsZWN0b3ItY2xhc3MnLFxuICAgICAgICBiZWdpbjogJ1xcXFwuW0EtWmEtejAtOV8tXSsnLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICBtb2Rlcy5BVFRSSUJVVEVfU0VMRUNUT1JfTU9ERSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnc2VsZWN0b3ItdGFnJyxcbiAgICAgICAgYmVnaW46ICdcXFxcYignICsgVEFHUy5qb2luKCd8JykgKyAnKVxcXFxiJyxcbiAgICAgICAgLy8gd2FzIHRoZXJlLCBiZWZvcmUsIGJ1dCB3aHk/XG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnc2VsZWN0b3ItcHNldWRvJyxcbiAgICAgICAgYmVnaW46ICc6KCcgKyBQU0VVRE9fQ0xBU1NFUyQxLmpvaW4oJ3wnKSArICcpJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnc2VsZWN0b3ItcHNldWRvJyxcbiAgICAgICAgYmVnaW46ICc6OignICsgUFNFVURPX0VMRU1FTlRTJDEuam9pbignfCcpICsgJyknXG4gICAgICB9LFxuICAgICAgVkFSSUFCTEUsXG4gICAgICB7IC8vIHBzZXVkby1zZWxlY3RvciBwYXJhbXNcbiAgICAgICAgYmVnaW46IC9cXCgvLFxuICAgICAgICBlbmQ6IC9cXCkvLFxuICAgICAgICBjb250YWluczogWyBobGpzLkNTU19OVU1CRVJfTU9ERSBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdhdHRyaWJ1dGUnLFxuICAgICAgICBiZWdpbjogJ1xcXFxiKCcgKyBBVFRSSUJVVEVTLmpvaW4oJ3wnKSArICcpXFxcXGInXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogJ1xcXFxiKHdoaXRlc3BhY2V8d2FpdHx3LXJlc2l6ZXx2aXNpYmxlfHZlcnRpY2FsLXRleHR8dmVydGljYWwtaWRlb2dyYXBoaWN8dXBwZXJjYXNlfHVwcGVyLXJvbWFufHVwcGVyLWFscGhhfHVuZGVybGluZXx0cmFuc3BhcmVudHx0b3B8dGhpbnx0aGlja3x0ZXh0fHRleHQtdG9wfHRleHQtYm90dG9tfHRiLXJsfHRhYmxlLWhlYWRlci1ncm91cHx0YWJsZS1mb290ZXItZ3JvdXB8c3ctcmVzaXplfHN1cGVyfHN0cmljdHxzdGF0aWN8c3F1YXJlfHNvbGlkfHNtYWxsLWNhcHN8c2VwYXJhdGV8c2UtcmVzaXplfHNjcm9sbHxzLXJlc2l6ZXxydGx8cm93LXJlc2l6ZXxyaWRnZXxyaWdodHxyZXBlYXR8cmVwZWF0LXl8cmVwZWF0LXh8cmVsYXRpdmV8cHJvZ3Jlc3N8cG9pbnRlcnxvdmVybGluZXxvdXRzaWRlfG91dHNldHxvYmxpcXVlfG5vd3JhcHxub3QtYWxsb3dlZHxub3JtYWx8bm9uZXxudy1yZXNpemV8bm8tcmVwZWF0fG5vLWRyb3B8bmV3c3BhcGVyfG5lLXJlc2l6ZXxuLXJlc2l6ZXxtb3ZlfG1pZGRsZXxtZWRpdW18bHRyfGxyLXRifGxvd2VyY2FzZXxsb3dlci1yb21hbnxsb3dlci1hbHBoYXxsb29zZXxsaXN0LWl0ZW18bGluZXxsaW5lLXRocm91Z2h8bGluZS1lZGdlfGxpZ2h0ZXJ8bGVmdHxrZWVwLWFsbHxqdXN0aWZ5fGl0YWxpY3xpbnRlci13b3JkfGludGVyLWlkZW9ncmFwaHxpbnNpZGV8aW5zZXR8aW5saW5lfGlubGluZS1ibG9ja3xpbmhlcml0fGluYWN0aXZlfGlkZW9ncmFwaC1zcGFjZXxpZGVvZ3JhcGgtcGFyZW50aGVzaXN8aWRlb2dyYXBoLW51bWVyaWN8aWRlb2dyYXBoLWFscGhhfGhvcml6b250YWx8aGlkZGVufGhlbHB8aGFuZHxncm9vdmV8Zml4ZWR8ZWxsaXBzaXN8ZS1yZXNpemV8ZG91YmxlfGRvdHRlZHxkaXN0cmlidXRlfGRpc3RyaWJ1dGUtc3BhY2V8ZGlzdHJpYnV0ZS1sZXR0ZXJ8ZGlzdHJpYnV0ZS1hbGwtbGluZXN8ZGlzY3xkaXNhYmxlZHxkZWZhdWx0fGRlY2ltYWx8ZGFzaGVkfGNyb3NzaGFpcnxjb2xsYXBzZXxjb2wtcmVzaXplfGNpcmNsZXxjaGFyfGNlbnRlcnxjYXBpdGFsaXplfGJyZWFrLXdvcmR8YnJlYWstYWxsfGJvdHRvbXxib3RofGJvbGRlcnxib2xkfGJsb2NrfGJpZGktb3ZlcnJpZGV8YmVsb3d8YmFzZWxpbmV8YXV0b3xhbHdheXN8YWxsLXNjcm9sbHxhYnNvbHV0ZXx0YWJsZXx0YWJsZS1jZWxsKVxcXFxiJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICc6JyxcbiAgICAgICAgZW5kOiAnOycsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgVkFSSUFCTEUsXG4gICAgICAgICAgbW9kZXMuSEVYQ09MT1IsXG4gICAgICAgICAgaGxqcy5DU1NfTlVNQkVSX01PREUsXG4gICAgICAgICAgaGxqcy5RVU9URV9TVFJJTkdfTU9ERSxcbiAgICAgICAgICBobGpzLkFQT1NfU1RSSU5HX01PREUsXG4gICAgICAgICAgbW9kZXMuSU1QT1JUQU5UXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICAvLyBtYXRjaGluZyB0aGVzZSBoZXJlIGFsbG93cyB1cyB0byB0cmVhdCB0aGVtIG1vcmUgbGlrZSByZWd1bGFyIENTU1xuICAgICAgLy8gcnVsZXMgc28gZXZlcnl0aGluZyBiZXR3ZWVuIHRoZSB7fSBnZXRzIHJlZ3VsYXIgcnVsZSBoaWdobGlnaHRpbmcsXG4gICAgICAvLyB3aGljaCBpcyB3aGF0IHdlIHdhbnQgZm9yIHBhZ2UgYW5kIGZvbnQtZmFjZVxuICAgICAge1xuICAgICAgICBiZWdpbjogJ0AocGFnZXxmb250LWZhY2UpJyxcbiAgICAgICAgbGV4ZW1lczogQVRfSURFTlRJRklFUixcbiAgICAgICAga2V5d29yZHM6ICdAcGFnZSBAZm9udC1mYWNlJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICdAJyxcbiAgICAgICAgZW5kOiAnW3s7XScsXG4gICAgICAgIHJldHVybkJlZ2luOiB0cnVlLFxuICAgICAgICBrZXl3b3Jkczoge1xuICAgICAgICAgICRwYXR0ZXJuOiAvW2Etei1dKy8sXG4gICAgICAgICAga2V5d29yZDogQVRfTU9ESUZJRVJTLFxuICAgICAgICAgIGF0dHJpYnV0ZTogTUVESUFfRkVBVFVSRVMuam9pbihcIiBcIilcbiAgICAgICAgfSxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogQVRfSURFTlRJRklFUixcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJrZXl3b3JkXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luOiAvW2Etei1dKyg/PTopLyxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJhdHRyaWJ1dGVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgVkFSSUFCTEUsXG4gICAgICAgICAgaGxqcy5RVU9URV9TVFJJTkdfTU9ERSxcbiAgICAgICAgICBobGpzLkFQT1NfU1RSSU5HX01PREUsXG4gICAgICAgICAgbW9kZXMuSEVYQ09MT1IsXG4gICAgICAgICAgaGxqcy5DU1NfTlVNQkVSX01PREVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzY3NzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==