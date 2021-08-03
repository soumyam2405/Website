(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[19],{

/***/ "./node_modules/highlight.js/lib/languages/bash.js":
/*!*********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/bash.js ***!
  \*********************************************************/
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
Language: Bash
Author: vah <vahtenberg@gmail.com>
Contributrors: Benjamin Pannell <contact@sierrasoftworks.com>
Website: https://www.gnu.org/software/bash/
Category: common
*/

/** @type LanguageFn */
function bash(hljs) {
  const VAR = {};
  const BRACED_VAR = {
    begin: /\$\{/,
    end:/\}/,
    contains: [
      "self",
      {
        begin: /:-/,
        contains: [ VAR ]
      } // default values
    ]
  };
  Object.assign(VAR,{
    className: 'variable',
    variants: [
      {begin: concat(/\$[\w\d#@][\w\d_]*/,
        // negative look-ahead tries to avoid matching patterns that are not
        // Perl at all like $ident$, @ident@, etc.
        `(?![\\w\\d])(?![$])`) },
      BRACED_VAR
    ]
  });

  const SUBST = {
    className: 'subst',
    begin: /\$\(/, end: /\)/,
    contains: [hljs.BACKSLASH_ESCAPE]
  };
  const HERE_DOC = {
    begin: /<<-?\s*(?=\w+)/,
    starts: {
      contains: [
        hljs.END_SAME_AS_BEGIN({
          begin: /(\w+)/,
          end: /(\w+)/,
          className: 'string'
        })
      ]
    }
  };
  const QUOTE_STRING = {
    className: 'string',
    begin: /"/, end: /"/,
    contains: [
      hljs.BACKSLASH_ESCAPE,
      VAR,
      SUBST
    ]
  };
  SUBST.contains.push(QUOTE_STRING);
  const ESCAPED_QUOTE = {
    className: '',
    begin: /\\"/

  };
  const APOS_STRING = {
    className: 'string',
    begin: /'/, end: /'/
  };
  const ARITHMETIC = {
    begin: /\$\(\(/,
    end: /\)\)/,
    contains: [
      { begin: /\d+#[0-9a-f]+/, className: "number" },
      hljs.NUMBER_MODE,
      VAR
    ]
  };
  const SH_LIKE_SHELLS = [
    "fish",
    "bash",
    "zsh",
    "sh",
    "csh",
    "ksh",
    "tcsh",
    "dash",
    "scsh",
  ];
  const KNOWN_SHEBANG = hljs.SHEBANG({
    binary: `(${SH_LIKE_SHELLS.join("|")})`,
    relevance: 10
  });
  const FUNCTION = {
    className: 'function',
    begin: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
    returnBegin: true,
    contains: [hljs.inherit(hljs.TITLE_MODE, {begin: /\w[\w\d_]*/})],
    relevance: 0
  };

  return {
    name: 'Bash',
    aliases: ['sh', 'zsh'],
    keywords: {
      $pattern: /\b[a-z._-]+\b/,
      keyword:
        'if then else elif fi for while in do done case esac function',
      literal:
        'true false',
      built_in:
        // Shell built-ins
        // http://www.gnu.org/software/bash/manual/html_node/Shell-Builtin-Commands.html
        'break cd continue eval exec exit export getopts hash pwd readonly return shift test times ' +
        'trap umask unset ' +
        // Bash built-ins
        'alias bind builtin caller command declare echo enable help let local logout mapfile printf ' +
        'read readarray source type typeset ulimit unalias ' +
        // Shell modifiers
        'set shopt ' +
        // Zsh built-ins
        'autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles ' +
        'compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate ' +
        'fc fg float functions getcap getln history integer jobs kill limit log noglob popd print ' +
        'pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit ' +
        'unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof ' +
        'zpty zregexparse zsocket zstyle ztcp'
    },
    contains: [
      KNOWN_SHEBANG, // to catch known shells and boost relevancy
      hljs.SHEBANG(), // to catch unknown shells but still highlight the shebang
      FUNCTION,
      ARITHMETIC,
      hljs.HASH_COMMENT_MODE,
      HERE_DOC,
      QUOTE_STRING,
      ESCAPED_QUOTE,
      APOS_STRING,
      VAR
    ]
  };
}

module.exports = bash;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2Jhc2guanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYTtBQUNiOztBQUVBO0FBQ0EsV0FBVyxpQkFBaUI7QUFDNUIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLHNCQUFzQjtBQUNqQyxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQixXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyw4Q0FBOEM7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IseUJBQXlCO0FBQ3pDO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQSw4Q0FBOEMsb0JBQW9CO0FBQ2xFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvMTkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHJldHVybnMge1JlZ0V4cH1cbiAqICovXG5cbi8qKlxuICogQHBhcmFtIHtSZWdFeHAgfCBzdHJpbmcgfSByZVxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gc291cmNlKHJlKSB7XG4gIGlmICghcmUpIHJldHVybiBudWxsO1xuICBpZiAodHlwZW9mIHJlID09PSBcInN0cmluZ1wiKSByZXR1cm4gcmU7XG5cbiAgcmV0dXJuIHJlLnNvdXJjZTtcbn1cblxuLyoqXG4gKiBAcGFyYW0gey4uLihSZWdFeHAgfCBzdHJpbmcpIH0gYXJnc1xuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gY29uY2F0KC4uLmFyZ3MpIHtcbiAgY29uc3Qgam9pbmVkID0gYXJncy5tYXAoKHgpID0+IHNvdXJjZSh4KSkuam9pbihcIlwiKTtcbiAgcmV0dXJuIGpvaW5lZDtcbn1cblxuLypcbkxhbmd1YWdlOiBCYXNoXG5BdXRob3I6IHZhaCA8dmFodGVuYmVyZ0BnbWFpbC5jb20+XG5Db250cmlidXRyb3JzOiBCZW5qYW1pbiBQYW5uZWxsIDxjb250YWN0QHNpZXJyYXNvZnR3b3Jrcy5jb20+XG5XZWJzaXRlOiBodHRwczovL3d3dy5nbnUub3JnL3NvZnR3YXJlL2Jhc2gvXG5DYXRlZ29yeTogY29tbW9uXG4qL1xuXG4vKiogQHR5cGUgTGFuZ3VhZ2VGbiAqL1xuZnVuY3Rpb24gYmFzaChobGpzKSB7XG4gIGNvbnN0IFZBUiA9IHt9O1xuICBjb25zdCBCUkFDRURfVkFSID0ge1xuICAgIGJlZ2luOiAvXFwkXFx7LyxcbiAgICBlbmQ6L1xcfS8sXG4gICAgY29udGFpbnM6IFtcbiAgICAgIFwic2VsZlwiLFxuICAgICAge1xuICAgICAgICBiZWdpbjogLzotLyxcbiAgICAgICAgY29udGFpbnM6IFsgVkFSIF1cbiAgICAgIH0gLy8gZGVmYXVsdCB2YWx1ZXNcbiAgICBdXG4gIH07XG4gIE9iamVjdC5hc3NpZ24oVkFSLHtcbiAgICBjbGFzc05hbWU6ICd2YXJpYWJsZScsXG4gICAgdmFyaWFudHM6IFtcbiAgICAgIHtiZWdpbjogY29uY2F0KC9cXCRbXFx3XFxkI0BdW1xcd1xcZF9dKi8sXG4gICAgICAgIC8vIG5lZ2F0aXZlIGxvb2stYWhlYWQgdHJpZXMgdG8gYXZvaWQgbWF0Y2hpbmcgcGF0dGVybnMgdGhhdCBhcmUgbm90XG4gICAgICAgIC8vIFBlcmwgYXQgYWxsIGxpa2UgJGlkZW50JCwgQGlkZW50QCwgZXRjLlxuICAgICAgICBgKD8hW1xcXFx3XFxcXGRdKSg/IVskXSlgKSB9LFxuICAgICAgQlJBQ0VEX1ZBUlxuICAgIF1cbiAgfSk7XG5cbiAgY29uc3QgU1VCU1QgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3Vic3QnLFxuICAgIGJlZ2luOiAvXFwkXFwoLywgZW5kOiAvXFwpLyxcbiAgICBjb250YWluczogW2hsanMuQkFDS1NMQVNIX0VTQ0FQRV1cbiAgfTtcbiAgY29uc3QgSEVSRV9ET0MgPSB7XG4gICAgYmVnaW46IC88PC0/XFxzKig/PVxcdyspLyxcbiAgICBzdGFydHM6IHtcbiAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgIGhsanMuRU5EX1NBTUVfQVNfQkVHSU4oe1xuICAgICAgICAgIGJlZ2luOiAvKFxcdyspLyxcbiAgICAgICAgICBlbmQ6IC8oXFx3KykvLFxuICAgICAgICAgIGNsYXNzTmFtZTogJ3N0cmluZydcbiAgICAgICAgfSlcbiAgICAgIF1cbiAgICB9XG4gIH07XG4gIGNvbnN0IFFVT1RFX1NUUklORyA9IHtcbiAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgIGJlZ2luOiAvXCIvLCBlbmQ6IC9cIi8sXG4gICAgY29udGFpbnM6IFtcbiAgICAgIGhsanMuQkFDS1NMQVNIX0VTQ0FQRSxcbiAgICAgIFZBUixcbiAgICAgIFNVQlNUXG4gICAgXVxuICB9O1xuICBTVUJTVC5jb250YWlucy5wdXNoKFFVT1RFX1NUUklORyk7XG4gIGNvbnN0IEVTQ0FQRURfUVVPVEUgPSB7XG4gICAgY2xhc3NOYW1lOiAnJyxcbiAgICBiZWdpbjogL1xcXFxcIi9cblxuICB9O1xuICBjb25zdCBBUE9TX1NUUklORyA9IHtcbiAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgIGJlZ2luOiAvJy8sIGVuZDogLycvXG4gIH07XG4gIGNvbnN0IEFSSVRITUVUSUMgPSB7XG4gICAgYmVnaW46IC9cXCRcXChcXCgvLFxuICAgIGVuZDogL1xcKVxcKS8sXG4gICAgY29udGFpbnM6IFtcbiAgICAgIHsgYmVnaW46IC9cXGQrI1swLTlhLWZdKy8sIGNsYXNzTmFtZTogXCJudW1iZXJcIiB9LFxuICAgICAgaGxqcy5OVU1CRVJfTU9ERSxcbiAgICAgIFZBUlxuICAgIF1cbiAgfTtcbiAgY29uc3QgU0hfTElLRV9TSEVMTFMgPSBbXG4gICAgXCJmaXNoXCIsXG4gICAgXCJiYXNoXCIsXG4gICAgXCJ6c2hcIixcbiAgICBcInNoXCIsXG4gICAgXCJjc2hcIixcbiAgICBcImtzaFwiLFxuICAgIFwidGNzaFwiLFxuICAgIFwiZGFzaFwiLFxuICAgIFwic2NzaFwiLFxuICBdO1xuICBjb25zdCBLTk9XTl9TSEVCQU5HID0gaGxqcy5TSEVCQU5HKHtcbiAgICBiaW5hcnk6IGAoJHtTSF9MSUtFX1NIRUxMUy5qb2luKFwifFwiKX0pYCxcbiAgICByZWxldmFuY2U6IDEwXG4gIH0pO1xuICBjb25zdCBGVU5DVElPTiA9IHtcbiAgICBjbGFzc05hbWU6ICdmdW5jdGlvbicsXG4gICAgYmVnaW46IC9cXHdbXFx3XFxkX10qXFxzKlxcKFxccypcXClcXHMqXFx7LyxcbiAgICByZXR1cm5CZWdpbjogdHJ1ZSxcbiAgICBjb250YWluczogW2hsanMuaW5oZXJpdChobGpzLlRJVExFX01PREUsIHtiZWdpbjogL1xcd1tcXHdcXGRfXSovfSldLFxuICAgIHJlbGV2YW5jZTogMFxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgbmFtZTogJ0Jhc2gnLFxuICAgIGFsaWFzZXM6IFsnc2gnLCAnenNoJ10sXG4gICAga2V5d29yZHM6IHtcbiAgICAgICRwYXR0ZXJuOiAvXFxiW2Etei5fLV0rXFxiLyxcbiAgICAgIGtleXdvcmQ6XG4gICAgICAgICdpZiB0aGVuIGVsc2UgZWxpZiBmaSBmb3Igd2hpbGUgaW4gZG8gZG9uZSBjYXNlIGVzYWMgZnVuY3Rpb24nLFxuICAgICAgbGl0ZXJhbDpcbiAgICAgICAgJ3RydWUgZmFsc2UnLFxuICAgICAgYnVpbHRfaW46XG4gICAgICAgIC8vIFNoZWxsIGJ1aWx0LWluc1xuICAgICAgICAvLyBodHRwOi8vd3d3LmdudS5vcmcvc29mdHdhcmUvYmFzaC9tYW51YWwvaHRtbF9ub2RlL1NoZWxsLUJ1aWx0aW4tQ29tbWFuZHMuaHRtbFxuICAgICAgICAnYnJlYWsgY2QgY29udGludWUgZXZhbCBleGVjIGV4aXQgZXhwb3J0IGdldG9wdHMgaGFzaCBwd2QgcmVhZG9ubHkgcmV0dXJuIHNoaWZ0IHRlc3QgdGltZXMgJyArXG4gICAgICAgICd0cmFwIHVtYXNrIHVuc2V0ICcgK1xuICAgICAgICAvLyBCYXNoIGJ1aWx0LWluc1xuICAgICAgICAnYWxpYXMgYmluZCBidWlsdGluIGNhbGxlciBjb21tYW5kIGRlY2xhcmUgZWNobyBlbmFibGUgaGVscCBsZXQgbG9jYWwgbG9nb3V0IG1hcGZpbGUgcHJpbnRmICcgK1xuICAgICAgICAncmVhZCByZWFkYXJyYXkgc291cmNlIHR5cGUgdHlwZXNldCB1bGltaXQgdW5hbGlhcyAnICtcbiAgICAgICAgLy8gU2hlbGwgbW9kaWZpZXJzXG4gICAgICAgICdzZXQgc2hvcHQgJyArXG4gICAgICAgIC8vIFpzaCBidWlsdC1pbnNcbiAgICAgICAgJ2F1dG9sb2FkIGJnIGJpbmRrZXkgYnllIGNhcCBjaGRpciBjbG9uZSBjb21wYXJndW1lbnRzIGNvbXBjYWxsIGNvbXBjdGwgY29tcGRlc2NyaWJlIGNvbXBmaWxlcyAnICtcbiAgICAgICAgJ2NvbXBncm91cHMgY29tcHF1b3RlIGNvbXB0YWdzIGNvbXB0cnkgY29tcHZhbHVlcyBkaXJzIGRpc2FibGUgZGlzb3duIGVjaG90YyBlY2hvdGkgZW11bGF0ZSAnICtcbiAgICAgICAgJ2ZjIGZnIGZsb2F0IGZ1bmN0aW9ucyBnZXRjYXAgZ2V0bG4gaGlzdG9yeSBpbnRlZ2VyIGpvYnMga2lsbCBsaW1pdCBsb2cgbm9nbG9iIHBvcGQgcHJpbnQgJyArXG4gICAgICAgICdwdXNoZCBwdXNobG4gcmVoYXNoIHNjaGVkIHNldGNhcCBzZXRvcHQgc3RhdCBzdXNwZW5kIHR0eWN0bCB1bmZ1bmN0aW9uIHVuaGFzaCB1bmxpbWl0ICcgK1xuICAgICAgICAndW5zZXRvcHQgdmFyZWQgd2FpdCB3aGVuY2Ugd2hlcmUgd2hpY2ggemNvbXBpbGUgemZvcm1hdCB6ZnRwIHpsZSB6bW9kbG9hZCB6cGFyc2VvcHRzIHpwcm9mICcgK1xuICAgICAgICAnenB0eSB6cmVnZXhwYXJzZSB6c29ja2V0IHpzdHlsZSB6dGNwJ1xuICAgIH0sXG4gICAgY29udGFpbnM6IFtcbiAgICAgIEtOT1dOX1NIRUJBTkcsIC8vIHRvIGNhdGNoIGtub3duIHNoZWxscyBhbmQgYm9vc3QgcmVsZXZhbmN5XG4gICAgICBobGpzLlNIRUJBTkcoKSwgLy8gdG8gY2F0Y2ggdW5rbm93biBzaGVsbHMgYnV0IHN0aWxsIGhpZ2hsaWdodCB0aGUgc2hlYmFuZ1xuICAgICAgRlVOQ1RJT04sXG4gICAgICBBUklUSE1FVElDLFxuICAgICAgaGxqcy5IQVNIX0NPTU1FTlRfTU9ERSxcbiAgICAgIEhFUkVfRE9DLFxuICAgICAgUVVPVEVfU1RSSU5HLFxuICAgICAgRVNDQVBFRF9RVU9URSxcbiAgICAgIEFQT1NfU1RSSU5HLFxuICAgICAgVkFSXG4gICAgXVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2g7XG4iXSwic291cmNlUm9vdCI6IiJ9