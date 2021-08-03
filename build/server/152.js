exports.ids = [152];
exports.modules = {

/***/ "./node_modules/highlight.js/lib/languages/rust.js":
/*!*********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/rust.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Rust
Author: Andrey Vlasovskikh <andrey.vlasovskikh@gmail.com>
Contributors: Roman Shmatov <romanshmatov@gmail.com>, Kasper Andersen <kma_untrusted@protonmail.com>
Website: https://www.rust-lang.org
Category: common, system
*/

function rust(hljs) {
  const NUM_SUFFIX = '([ui](8|16|32|64|128|size)|f(32|64))\?';
  const KEYWORDS =
    'abstract as async await become box break const continue crate do dyn ' +
    'else enum extern false final fn for if impl in let loop macro match mod ' +
    'move mut override priv pub ref return self Self static struct super ' +
    'trait true try type typeof unsafe unsized use virtual where while yield';
  const BUILTINS =
    // functions
    'drop ' +
    // types
    'i8 i16 i32 i64 i128 isize ' +
    'u8 u16 u32 u64 u128 usize ' +
    'f32 f64 ' +
    'str char bool ' +
    'Box Option Result String Vec ' +
    // traits
    'Copy Send Sized Sync Drop Fn FnMut FnOnce ToOwned Clone Debug ' +
    'PartialEq PartialOrd Eq Ord AsRef AsMut Into From Default Iterator ' +
    'Extend IntoIterator DoubleEndedIterator ExactSizeIterator ' +
    'SliceConcatExt ToString ' +
    // macros
    'assert! assert_eq! bitflags! bytes! cfg! col! concat! concat_idents! ' +
    'debug_assert! debug_assert_eq! env! panic! file! format! format_args! ' +
    'include_bin! include_str! line! local_data_key! module_path! ' +
    'option_env! print! println! select! stringify! try! unimplemented! ' +
    'unreachable! vec! write! writeln! macro_rules! assert_ne! debug_assert_ne!';
  return {
    name: 'Rust',
    aliases: [ 'rs' ],
    keywords: {
      $pattern: hljs.IDENT_RE + '!?',
      keyword:
        KEYWORDS,
      literal:
        'true false Some None Ok Err',
      built_in:
        BUILTINS
    },
    illegal: '</',
    contains: [
      hljs.C_LINE_COMMENT_MODE,
      hljs.COMMENT('/\\*', '\\*/', {
        contains: [ 'self' ]
      }),
      hljs.inherit(hljs.QUOTE_STRING_MODE, {
        begin: /b?"/,
        illegal: null
      }),
      {
        className: 'string',
        variants: [
          {
            begin: /r(#*)"(.|\n)*?"\1(?!#)/
          },
          {
            begin: /b?'\\?(x\w{2}|u\w{4}|U\w{8}|.)'/
          }
        ]
      },
      {
        className: 'symbol',
        begin: /'[a-zA-Z_][a-zA-Z0-9_]*/
      },
      {
        className: 'number',
        variants: [
          {
            begin: '\\b0b([01_]+)' + NUM_SUFFIX
          },
          {
            begin: '\\b0o([0-7_]+)' + NUM_SUFFIX
          },
          {
            begin: '\\b0x([A-Fa-f0-9_]+)' + NUM_SUFFIX
          },
          {
            begin: '\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)' +
                   NUM_SUFFIX
          }
        ],
        relevance: 0
      },
      {
        className: 'function',
        beginKeywords: 'fn',
        end: '(\\(|<)',
        excludeEnd: true,
        contains: [ hljs.UNDERSCORE_TITLE_MODE ]
      },
      {
        className: 'meta',
        begin: '#!?\\[',
        end: '\\]',
        contains: [
          {
            className: 'meta-string',
            begin: /"/,
            end: /"/
          }
        ]
      },
      {
        className: 'class',
        beginKeywords: 'type',
        end: ';',
        contains: [
          hljs.inherit(hljs.UNDERSCORE_TITLE_MODE, {
            endsParent: true
          })
        ],
        illegal: '\\S'
      },
      {
        className: 'class',
        beginKeywords: 'trait enum struct union',
        end: /\{/,
        contains: [
          hljs.inherit(hljs.UNDERSCORE_TITLE_MODE, {
            endsParent: true
          })
        ],
        illegal: '[\\w\\d]'
      },
      {
        begin: hljs.IDENT_RE + '::',
        keywords: {
          built_in: BUILTINS
        }
      },
      {
        begin: '->'
      }
    ]
  };
}

module.exports = rust;


/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvcnVzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsK0JBQStCLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtBQUMvQztBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiIxNTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuTGFuZ3VhZ2U6IFJ1c3RcbkF1dGhvcjogQW5kcmV5IFZsYXNvdnNraWtoIDxhbmRyZXkudmxhc292c2tpa2hAZ21haWwuY29tPlxuQ29udHJpYnV0b3JzOiBSb21hbiBTaG1hdG92IDxyb21hbnNobWF0b3ZAZ21haWwuY29tPiwgS2FzcGVyIEFuZGVyc2VuIDxrbWFfdW50cnVzdGVkQHByb3Rvbm1haWwuY29tPlxuV2Vic2l0ZTogaHR0cHM6Ly93d3cucnVzdC1sYW5nLm9yZ1xuQ2F0ZWdvcnk6IGNvbW1vbiwgc3lzdGVtXG4qL1xuXG5mdW5jdGlvbiBydXN0KGhsanMpIHtcbiAgY29uc3QgTlVNX1NVRkZJWCA9ICcoW3VpXSg4fDE2fDMyfDY0fDEyOHxzaXplKXxmKDMyfDY0KSlcXD8nO1xuICBjb25zdCBLRVlXT1JEUyA9XG4gICAgJ2Fic3RyYWN0IGFzIGFzeW5jIGF3YWl0IGJlY29tZSBib3ggYnJlYWsgY29uc3QgY29udGludWUgY3JhdGUgZG8gZHluICcgK1xuICAgICdlbHNlIGVudW0gZXh0ZXJuIGZhbHNlIGZpbmFsIGZuIGZvciBpZiBpbXBsIGluIGxldCBsb29wIG1hY3JvIG1hdGNoIG1vZCAnICtcbiAgICAnbW92ZSBtdXQgb3ZlcnJpZGUgcHJpdiBwdWIgcmVmIHJldHVybiBzZWxmIFNlbGYgc3RhdGljIHN0cnVjdCBzdXBlciAnICtcbiAgICAndHJhaXQgdHJ1ZSB0cnkgdHlwZSB0eXBlb2YgdW5zYWZlIHVuc2l6ZWQgdXNlIHZpcnR1YWwgd2hlcmUgd2hpbGUgeWllbGQnO1xuICBjb25zdCBCVUlMVElOUyA9XG4gICAgLy8gZnVuY3Rpb25zXG4gICAgJ2Ryb3AgJyArXG4gICAgLy8gdHlwZXNcbiAgICAnaTggaTE2IGkzMiBpNjQgaTEyOCBpc2l6ZSAnICtcbiAgICAndTggdTE2IHUzMiB1NjQgdTEyOCB1c2l6ZSAnICtcbiAgICAnZjMyIGY2NCAnICtcbiAgICAnc3RyIGNoYXIgYm9vbCAnICtcbiAgICAnQm94IE9wdGlvbiBSZXN1bHQgU3RyaW5nIFZlYyAnICtcbiAgICAvLyB0cmFpdHNcbiAgICAnQ29weSBTZW5kIFNpemVkIFN5bmMgRHJvcCBGbiBGbk11dCBGbk9uY2UgVG9Pd25lZCBDbG9uZSBEZWJ1ZyAnICtcbiAgICAnUGFydGlhbEVxIFBhcnRpYWxPcmQgRXEgT3JkIEFzUmVmIEFzTXV0IEludG8gRnJvbSBEZWZhdWx0IEl0ZXJhdG9yICcgK1xuICAgICdFeHRlbmQgSW50b0l0ZXJhdG9yIERvdWJsZUVuZGVkSXRlcmF0b3IgRXhhY3RTaXplSXRlcmF0b3IgJyArXG4gICAgJ1NsaWNlQ29uY2F0RXh0IFRvU3RyaW5nICcgK1xuICAgIC8vIG1hY3Jvc1xuICAgICdhc3NlcnQhIGFzc2VydF9lcSEgYml0ZmxhZ3MhIGJ5dGVzISBjZmchIGNvbCEgY29uY2F0ISBjb25jYXRfaWRlbnRzISAnICtcbiAgICAnZGVidWdfYXNzZXJ0ISBkZWJ1Z19hc3NlcnRfZXEhIGVudiEgcGFuaWMhIGZpbGUhIGZvcm1hdCEgZm9ybWF0X2FyZ3MhICcgK1xuICAgICdpbmNsdWRlX2JpbiEgaW5jbHVkZV9zdHIhIGxpbmUhIGxvY2FsX2RhdGFfa2V5ISBtb2R1bGVfcGF0aCEgJyArXG4gICAgJ29wdGlvbl9lbnYhIHByaW50ISBwcmludGxuISBzZWxlY3QhIHN0cmluZ2lmeSEgdHJ5ISB1bmltcGxlbWVudGVkISAnICtcbiAgICAndW5yZWFjaGFibGUhIHZlYyEgd3JpdGUhIHdyaXRlbG4hIG1hY3JvX3J1bGVzISBhc3NlcnRfbmUhIGRlYnVnX2Fzc2VydF9uZSEnO1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICdSdXN0JyxcbiAgICBhbGlhc2VzOiBbICdycycgXSxcbiAgICBrZXl3b3Jkczoge1xuICAgICAgJHBhdHRlcm46IGhsanMuSURFTlRfUkUgKyAnIT8nLFxuICAgICAga2V5d29yZDpcbiAgICAgICAgS0VZV09SRFMsXG4gICAgICBsaXRlcmFsOlxuICAgICAgICAndHJ1ZSBmYWxzZSBTb21lIE5vbmUgT2sgRXJyJyxcbiAgICAgIGJ1aWx0X2luOlxuICAgICAgICBCVUlMVElOU1xuICAgIH0sXG4gICAgaWxsZWdhbDogJzwvJyxcbiAgICBjb250YWluczogW1xuICAgICAgaGxqcy5DX0xJTkVfQ09NTUVOVF9NT0RFLFxuICAgICAgaGxqcy5DT01NRU5UKCcvXFxcXConLCAnXFxcXCovJywge1xuICAgICAgICBjb250YWluczogWyAnc2VsZicgXVxuICAgICAgfSksXG4gICAgICBobGpzLmluaGVyaXQoaGxqcy5RVU9URV9TVFJJTkdfTU9ERSwge1xuICAgICAgICBiZWdpbjogL2I/XCIvLFxuICAgICAgICBpbGxlZ2FsOiBudWxsXG4gICAgICB9KSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogL3IoIyopXCIoLnxcXG4pKj9cIlxcMSg/ISMpL1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW46IC9iPydcXFxcPyh4XFx3ezJ9fHVcXHd7NH18VVxcd3s4fXwuKScvXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdzeW1ib2wnLFxuICAgICAgICBiZWdpbjogLydbYS16QS1aX11bYS16QS1aMC05X10qL1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogJ1xcXFxiMGIoWzAxX10rKScgKyBOVU1fU1VGRklYXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogJ1xcXFxiMG8oWzAtN19dKyknICsgTlVNX1NVRkZJWFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW46ICdcXFxcYjB4KFtBLUZhLWYwLTlfXSspJyArIE5VTV9TVUZGSVhcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luOiAnXFxcXGIoXFxcXGRbXFxcXGRfXSooXFxcXC5bMC05X10rKT8oW2VFXVsrLV0/WzAtOV9dKyk/KScgK1xuICAgICAgICAgICAgICAgICAgIE5VTV9TVUZGSVhcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnZnVuY3Rpb24nLFxuICAgICAgICBiZWdpbktleXdvcmRzOiAnZm4nLFxuICAgICAgICBlbmQ6ICcoXFxcXCh8PCknLFxuICAgICAgICBleGNsdWRlRW5kOiB0cnVlLFxuICAgICAgICBjb250YWluczogWyBobGpzLlVOREVSU0NPUkVfVElUTEVfTU9ERSBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICAgICAgYmVnaW46ICcjIT9cXFxcWycsXG4gICAgICAgIGVuZDogJ1xcXFxdJyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdtZXRhLXN0cmluZycsXG4gICAgICAgICAgICBiZWdpbjogL1wiLyxcbiAgICAgICAgICAgIGVuZDogL1wiL1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnY2xhc3MnLFxuICAgICAgICBiZWdpbktleXdvcmRzOiAndHlwZScsXG4gICAgICAgIGVuZDogJzsnLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIGhsanMuaW5oZXJpdChobGpzLlVOREVSU0NPUkVfVElUTEVfTU9ERSwge1xuICAgICAgICAgICAgZW5kc1BhcmVudDogdHJ1ZVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIGlsbGVnYWw6ICdcXFxcUydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2NsYXNzJyxcbiAgICAgICAgYmVnaW5LZXl3b3JkczogJ3RyYWl0IGVudW0gc3RydWN0IHVuaW9uJyxcbiAgICAgICAgZW5kOiAvXFx7LyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICBobGpzLmluaGVyaXQoaGxqcy5VTkRFUlNDT1JFX1RJVExFX01PREUsIHtcbiAgICAgICAgICAgIGVuZHNQYXJlbnQ6IHRydWVcbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICBpbGxlZ2FsOiAnW1xcXFx3XFxcXGRdJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IGhsanMuSURFTlRfUkUgKyAnOjonLFxuICAgICAgICBrZXl3b3Jkczoge1xuICAgICAgICAgIGJ1aWx0X2luOiBCVUlMVElOU1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogJy0+J1xuICAgICAgfVxuICAgIF1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBydXN0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==