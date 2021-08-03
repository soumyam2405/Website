exports.ids = [132];
exports.modules = {

/***/ "./node_modules/highlight.js/lib/languages/powershell.js":
/*!***************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/powershell.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: PowerShell
Description: PowerShell is a task-based command-line shell and scripting language built on .NET.
Author: David Mohundro <david@mohundro.com>
Contributors: Nicholas Blumhardt <nblumhardt@nblumhardt.com>, Victor Zhou <OiCMudkips@users.noreply.github.com>, Nicolas Le Gall <contact@nlegall.fr>
Website: https://docs.microsoft.com/en-us/powershell/
*/

function powershell(hljs) {
  const TYPES = [
    "string",
    "char",
    "byte",
    "int",
    "long",
    "bool",
    "decimal",
    "single",
    "double",
    "DateTime",
    "xml",
    "array",
    "hashtable",
    "void"
  ];

  // https://docs.microsoft.com/en-us/powershell/scripting/developer/cmdlet/approved-verbs-for-windows-powershell-commands
  const VALID_VERBS =
    'Add|Clear|Close|Copy|Enter|Exit|Find|Format|Get|Hide|Join|Lock|' +
    'Move|New|Open|Optimize|Pop|Push|Redo|Remove|Rename|Reset|Resize|' +
    'Search|Select|Set|Show|Skip|Split|Step|Switch|Undo|Unlock|' +
    'Watch|Backup|Checkpoint|Compare|Compress|Convert|ConvertFrom|' +
    'ConvertTo|Dismount|Edit|Expand|Export|Group|Import|Initialize|' +
    'Limit|Merge|Mount|Out|Publish|Restore|Save|Sync|Unpublish|Update|' +
    'Approve|Assert|Build|Complete|Confirm|Deny|Deploy|Disable|Enable|Install|Invoke|' +
    'Register|Request|Restart|Resume|Start|Stop|Submit|Suspend|Uninstall|' +
    'Unregister|Wait|Debug|Measure|Ping|Repair|Resolve|Test|Trace|Connect|' +
    'Disconnect|Read|Receive|Send|Write|Block|Grant|Protect|Revoke|Unblock|' +
    'Unprotect|Use|ForEach|Sort|Tee|Where';

  const COMPARISON_OPERATORS =
    '-and|-as|-band|-bnot|-bor|-bxor|-casesensitive|-ccontains|-ceq|-cge|-cgt|' +
    '-cle|-clike|-clt|-cmatch|-cne|-cnotcontains|-cnotlike|-cnotmatch|-contains|' +
    '-creplace|-csplit|-eq|-exact|-f|-file|-ge|-gt|-icontains|-ieq|-ige|-igt|' +
    '-ile|-ilike|-ilt|-imatch|-in|-ine|-inotcontains|-inotlike|-inotmatch|' +
    '-ireplace|-is|-isnot|-isplit|-join|-le|-like|-lt|-match|-ne|-not|' +
    '-notcontains|-notin|-notlike|-notmatch|-or|-regex|-replace|-shl|-shr|' +
    '-split|-wildcard|-xor';

  const KEYWORDS = {
    $pattern: /-?[A-z\.\-]+\b/,
    keyword:
      'if else foreach return do while until elseif begin for trap data dynamicparam ' +
      'end break throw param continue finally in switch exit filter try process catch ' +
      'hidden static parameter',
    // "echo" relevance has been set to 0 to avoid auto-detect conflicts with shell transcripts
    built_in:
      'ac asnp cat cd CFS chdir clc clear clhy cli clp cls clv cnsn compare copy cp ' +
      'cpi cpp curl cvpa dbp del diff dir dnsn ebp echo|0 epal epcsv epsn erase etsn exsn fc fhx ' +
      'fl ft fw gal gbp gc gcb gci gcm gcs gdr gerr ghy gi gin gjb gl gm gmo gp gps gpv group ' +
      'gsn gsnp gsv gtz gu gv gwmi h history icm iex ihy ii ipal ipcsv ipmo ipsn irm ise iwmi ' +
      'iwr kill lp ls man md measure mi mount move mp mv nal ndr ni nmo npssc nsn nv ogv oh ' +
      'popd ps pushd pwd r rbp rcjb rcsn rd rdr ren ri rjb rm rmdir rmo rni rnp rp rsn rsnp ' +
      'rujb rv rvpa rwmi sajb sal saps sasv sbp sc scb select set shcm si sl sleep sls sort sp ' +
      'spjb spps spsv start stz sujb sv swmi tee trcm type wget where wjb write'
    // TODO: 'validate[A-Z]+' can't work in keywords
  };

  const TITLE_NAME_RE = /\w[\w\d]*((-)[\w\d]+)*/;

  const BACKTICK_ESCAPE = {
    begin: '`[\\s\\S]',
    relevance: 0
  };

  const VAR = {
    className: 'variable',
    variants: [
      {
        begin: /\$\B/
      },
      {
        className: 'keyword',
        begin: /\$this/
      },
      {
        begin: /\$[\w\d][\w\d_:]*/
      }
    ]
  };

  const LITERAL = {
    className: 'literal',
    begin: /\$(null|true|false)\b/
  };

  const QUOTE_STRING = {
    className: "string",
    variants: [
      {
        begin: /"/,
        end: /"/
      },
      {
        begin: /@"/,
        end: /^"@/
      }
    ],
    contains: [
      BACKTICK_ESCAPE,
      VAR,
      {
        className: 'variable',
        begin: /\$[A-z]/,
        end: /[^A-z]/
      }
    ]
  };

  const APOS_STRING = {
    className: 'string',
    variants: [
      {
        begin: /'/,
        end: /'/
      },
      {
        begin: /@'/,
        end: /^'@/
      }
    ]
  };

  const PS_HELPTAGS = {
    className: "doctag",
    variants: [
      /* no paramater help tags */
      {
        begin: /\.(synopsis|description|example|inputs|outputs|notes|link|component|role|functionality)/
      },
      /* one parameter help tags */
      {
        begin: /\.(parameter|forwardhelptargetname|forwardhelpcategory|remotehelprunspace|externalhelp)\s+\S+/
      }
    ]
  };

  const PS_COMMENT = hljs.inherit(
    hljs.COMMENT(null, null),
    {
      variants: [
        /* single-line comment */
        {
          begin: /#/,
          end: /$/
        },
        /* multi-line comment */
        {
          begin: /<#/,
          end: /#>/
        }
      ],
      contains: [ PS_HELPTAGS ]
    }
  );

  const CMDLETS = {
    className: 'built_in',
    variants: [
      {
        begin: '('.concat(VALID_VERBS, ')+(-)[\\w\\d]+')
      }
    ]
  };

  const PS_CLASS = {
    className: 'class',
    beginKeywords: 'class enum',
    end: /\s*[{]/,
    excludeEnd: true,
    relevance: 0,
    contains: [ hljs.TITLE_MODE ]
  };

  const PS_FUNCTION = {
    className: 'function',
    begin: /function\s+/,
    end: /\s*\{|$/,
    excludeEnd: true,
    returnBegin: true,
    relevance: 0,
    contains: [
      {
        begin: "function",
        relevance: 0,
        className: "keyword"
      },
      {
        className: "title",
        begin: TITLE_NAME_RE,
        relevance: 0
      },
      {
        begin: /\(/,
        end: /\)/,
        className: "params",
        relevance: 0,
        contains: [ VAR ]
      }
      // CMDLETS
    ]
  };

  // Using statment, plus type, plus assembly name.
  const PS_USING = {
    begin: /using\s/,
    end: /$/,
    returnBegin: true,
    contains: [
      QUOTE_STRING,
      APOS_STRING,
      {
        className: 'keyword',
        begin: /(using|assembly|command|module|namespace|type)/
      }
    ]
  };

  // Comperison operators & function named parameters.
  const PS_ARGUMENTS = {
    variants: [
      // PS literals are pretty verbose so it's a good idea to accent them a bit.
      {
        className: 'operator',
        begin: '('.concat(COMPARISON_OPERATORS, ')\\b')
      },
      {
        className: 'literal',
        begin: /(-)[\w\d]+/,
        relevance: 0
      }
    ]
  };

  const HASH_SIGNS = {
    className: 'selector-tag',
    begin: /@\B/,
    relevance: 0
  };

  // It's a very general rule so I'll narrow it a bit with some strict boundaries
  // to avoid any possible false-positive collisions!
  const PS_METHODS = {
    className: 'function',
    begin: /\[.*\]\s*[\w]+[ ]??\(/,
    end: /$/,
    returnBegin: true,
    relevance: 0,
    contains: [
      {
        className: 'keyword',
        begin: '('.concat(
          KEYWORDS.keyword.toString().replace(/\s/g, '|'
          ), ')\\b'),
        endsParent: true,
        relevance: 0
      },
      hljs.inherit(hljs.TITLE_MODE, {
        endsParent: true
      })
    ]
  };

  const GENTLEMANS_SET = [
    // STATIC_MEMBER,
    PS_METHODS,
    PS_COMMENT,
    BACKTICK_ESCAPE,
    hljs.NUMBER_MODE,
    QUOTE_STRING,
    APOS_STRING,
    // PS_NEW_OBJECT_TYPE,
    CMDLETS,
    VAR,
    LITERAL,
    HASH_SIGNS
  ];

  const PS_TYPE = {
    begin: /\[/,
    end: /\]/,
    excludeBegin: true,
    excludeEnd: true,
    relevance: 0,
    contains: [].concat(
      'self',
      GENTLEMANS_SET,
      {
        begin: "(" + TYPES.join("|") + ")",
        className: "built_in",
        relevance: 0
      },
      {
        className: 'type',
        begin: /[\.\w\d]+/,
        relevance: 0
      }
    )
  };

  PS_METHODS.contains.unshift(PS_TYPE);

  return {
    name: 'PowerShell',
    aliases: [
      "ps",
      "ps1"
    ],
    case_insensitive: true,
    keywords: KEYWORDS,
    contains: GENTLEMANS_SET.concat(
      PS_CLASS,
      PS_FUNCTION,
      PS_USING,
      PS_ARGUMENTS,
      PS_TYPE
    )
  };
}

module.exports = powershell;


/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvcG93ZXJzaGVsbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6IjEzMi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5MYW5ndWFnZTogUG93ZXJTaGVsbFxuRGVzY3JpcHRpb246IFBvd2VyU2hlbGwgaXMgYSB0YXNrLWJhc2VkIGNvbW1hbmQtbGluZSBzaGVsbCBhbmQgc2NyaXB0aW5nIGxhbmd1YWdlIGJ1aWx0IG9uIC5ORVQuXG5BdXRob3I6IERhdmlkIE1vaHVuZHJvIDxkYXZpZEBtb2h1bmRyby5jb20+XG5Db250cmlidXRvcnM6IE5pY2hvbGFzIEJsdW1oYXJkdCA8bmJsdW1oYXJkdEBuYmx1bWhhcmR0LmNvbT4sIFZpY3RvciBaaG91IDxPaUNNdWRraXBzQHVzZXJzLm5vcmVwbHkuZ2l0aHViLmNvbT4sIE5pY29sYXMgTGUgR2FsbCA8Y29udGFjdEBubGVnYWxsLmZyPlxuV2Vic2l0ZTogaHR0cHM6Ly9kb2NzLm1pY3Jvc29mdC5jb20vZW4tdXMvcG93ZXJzaGVsbC9cbiovXG5cbmZ1bmN0aW9uIHBvd2Vyc2hlbGwoaGxqcykge1xuICBjb25zdCBUWVBFUyA9IFtcbiAgICBcInN0cmluZ1wiLFxuICAgIFwiY2hhclwiLFxuICAgIFwiYnl0ZVwiLFxuICAgIFwiaW50XCIsXG4gICAgXCJsb25nXCIsXG4gICAgXCJib29sXCIsXG4gICAgXCJkZWNpbWFsXCIsXG4gICAgXCJzaW5nbGVcIixcbiAgICBcImRvdWJsZVwiLFxuICAgIFwiRGF0ZVRpbWVcIixcbiAgICBcInhtbFwiLFxuICAgIFwiYXJyYXlcIixcbiAgICBcImhhc2h0YWJsZVwiLFxuICAgIFwidm9pZFwiXG4gIF07XG5cbiAgLy8gaHR0cHM6Ly9kb2NzLm1pY3Jvc29mdC5jb20vZW4tdXMvcG93ZXJzaGVsbC9zY3JpcHRpbmcvZGV2ZWxvcGVyL2NtZGxldC9hcHByb3ZlZC12ZXJicy1mb3Itd2luZG93cy1wb3dlcnNoZWxsLWNvbW1hbmRzXG4gIGNvbnN0IFZBTElEX1ZFUkJTID1cbiAgICAnQWRkfENsZWFyfENsb3NlfENvcHl8RW50ZXJ8RXhpdHxGaW5kfEZvcm1hdHxHZXR8SGlkZXxKb2lufExvY2t8JyArXG4gICAgJ01vdmV8TmV3fE9wZW58T3B0aW1pemV8UG9wfFB1c2h8UmVkb3xSZW1vdmV8UmVuYW1lfFJlc2V0fFJlc2l6ZXwnICtcbiAgICAnU2VhcmNofFNlbGVjdHxTZXR8U2hvd3xTa2lwfFNwbGl0fFN0ZXB8U3dpdGNofFVuZG98VW5sb2NrfCcgK1xuICAgICdXYXRjaHxCYWNrdXB8Q2hlY2twb2ludHxDb21wYXJlfENvbXByZXNzfENvbnZlcnR8Q29udmVydEZyb218JyArXG4gICAgJ0NvbnZlcnRUb3xEaXNtb3VudHxFZGl0fEV4cGFuZHxFeHBvcnR8R3JvdXB8SW1wb3J0fEluaXRpYWxpemV8JyArXG4gICAgJ0xpbWl0fE1lcmdlfE1vdW50fE91dHxQdWJsaXNofFJlc3RvcmV8U2F2ZXxTeW5jfFVucHVibGlzaHxVcGRhdGV8JyArXG4gICAgJ0FwcHJvdmV8QXNzZXJ0fEJ1aWxkfENvbXBsZXRlfENvbmZpcm18RGVueXxEZXBsb3l8RGlzYWJsZXxFbmFibGV8SW5zdGFsbHxJbnZva2V8JyArXG4gICAgJ1JlZ2lzdGVyfFJlcXVlc3R8UmVzdGFydHxSZXN1bWV8U3RhcnR8U3RvcHxTdWJtaXR8U3VzcGVuZHxVbmluc3RhbGx8JyArXG4gICAgJ1VucmVnaXN0ZXJ8V2FpdHxEZWJ1Z3xNZWFzdXJlfFBpbmd8UmVwYWlyfFJlc29sdmV8VGVzdHxUcmFjZXxDb25uZWN0fCcgK1xuICAgICdEaXNjb25uZWN0fFJlYWR8UmVjZWl2ZXxTZW5kfFdyaXRlfEJsb2NrfEdyYW50fFByb3RlY3R8UmV2b2tlfFVuYmxvY2t8JyArXG4gICAgJ1VucHJvdGVjdHxVc2V8Rm9yRWFjaHxTb3J0fFRlZXxXaGVyZSc7XG5cbiAgY29uc3QgQ09NUEFSSVNPTl9PUEVSQVRPUlMgPVxuICAgICctYW5kfC1hc3wtYmFuZHwtYm5vdHwtYm9yfC1ieG9yfC1jYXNlc2Vuc2l0aXZlfC1jY29udGFpbnN8LWNlcXwtY2dlfC1jZ3R8JyArXG4gICAgJy1jbGV8LWNsaWtlfC1jbHR8LWNtYXRjaHwtY25lfC1jbm90Y29udGFpbnN8LWNub3RsaWtlfC1jbm90bWF0Y2h8LWNvbnRhaW5zfCcgK1xuICAgICctY3JlcGxhY2V8LWNzcGxpdHwtZXF8LWV4YWN0fC1mfC1maWxlfC1nZXwtZ3R8LWljb250YWluc3wtaWVxfC1pZ2V8LWlndHwnICtcbiAgICAnLWlsZXwtaWxpa2V8LWlsdHwtaW1hdGNofC1pbnwtaW5lfC1pbm90Y29udGFpbnN8LWlub3RsaWtlfC1pbm90bWF0Y2h8JyArXG4gICAgJy1pcmVwbGFjZXwtaXN8LWlzbm90fC1pc3BsaXR8LWpvaW58LWxlfC1saWtlfC1sdHwtbWF0Y2h8LW5lfC1ub3R8JyArXG4gICAgJy1ub3Rjb250YWluc3wtbm90aW58LW5vdGxpa2V8LW5vdG1hdGNofC1vcnwtcmVnZXh8LXJlcGxhY2V8LXNobHwtc2hyfCcgK1xuICAgICctc3BsaXR8LXdpbGRjYXJkfC14b3InO1xuXG4gIGNvbnN0IEtFWVdPUkRTID0ge1xuICAgICRwYXR0ZXJuOiAvLT9bQS16XFwuXFwtXStcXGIvLFxuICAgIGtleXdvcmQ6XG4gICAgICAnaWYgZWxzZSBmb3JlYWNoIHJldHVybiBkbyB3aGlsZSB1bnRpbCBlbHNlaWYgYmVnaW4gZm9yIHRyYXAgZGF0YSBkeW5hbWljcGFyYW0gJyArXG4gICAgICAnZW5kIGJyZWFrIHRocm93IHBhcmFtIGNvbnRpbnVlIGZpbmFsbHkgaW4gc3dpdGNoIGV4aXQgZmlsdGVyIHRyeSBwcm9jZXNzIGNhdGNoICcgK1xuICAgICAgJ2hpZGRlbiBzdGF0aWMgcGFyYW1ldGVyJyxcbiAgICAvLyBcImVjaG9cIiByZWxldmFuY2UgaGFzIGJlZW4gc2V0IHRvIDAgdG8gYXZvaWQgYXV0by1kZXRlY3QgY29uZmxpY3RzIHdpdGggc2hlbGwgdHJhbnNjcmlwdHNcbiAgICBidWlsdF9pbjpcbiAgICAgICdhYyBhc25wIGNhdCBjZCBDRlMgY2hkaXIgY2xjIGNsZWFyIGNsaHkgY2xpIGNscCBjbHMgY2x2IGNuc24gY29tcGFyZSBjb3B5IGNwICcgK1xuICAgICAgJ2NwaSBjcHAgY3VybCBjdnBhIGRicCBkZWwgZGlmZiBkaXIgZG5zbiBlYnAgZWNob3wwIGVwYWwgZXBjc3YgZXBzbiBlcmFzZSBldHNuIGV4c24gZmMgZmh4ICcgK1xuICAgICAgJ2ZsIGZ0IGZ3IGdhbCBnYnAgZ2MgZ2NiIGdjaSBnY20gZ2NzIGdkciBnZXJyIGdoeSBnaSBnaW4gZ2piIGdsIGdtIGdtbyBncCBncHMgZ3B2IGdyb3VwICcgK1xuICAgICAgJ2dzbiBnc25wIGdzdiBndHogZ3UgZ3YgZ3dtaSBoIGhpc3RvcnkgaWNtIGlleCBpaHkgaWkgaXBhbCBpcGNzdiBpcG1vIGlwc24gaXJtIGlzZSBpd21pICcgK1xuICAgICAgJ2l3ciBraWxsIGxwIGxzIG1hbiBtZCBtZWFzdXJlIG1pIG1vdW50IG1vdmUgbXAgbXYgbmFsIG5kciBuaSBubW8gbnBzc2MgbnNuIG52IG9ndiBvaCAnICtcbiAgICAgICdwb3BkIHBzIHB1c2hkIHB3ZCByIHJicCByY2piIHJjc24gcmQgcmRyIHJlbiByaSByamIgcm0gcm1kaXIgcm1vIHJuaSBybnAgcnAgcnNuIHJzbnAgJyArXG4gICAgICAncnVqYiBydiBydnBhIHJ3bWkgc2FqYiBzYWwgc2FwcyBzYXN2IHNicCBzYyBzY2Igc2VsZWN0IHNldCBzaGNtIHNpIHNsIHNsZWVwIHNscyBzb3J0IHNwICcgK1xuICAgICAgJ3NwamIgc3BwcyBzcHN2IHN0YXJ0IHN0eiBzdWpiIHN2IHN3bWkgdGVlIHRyY20gdHlwZSB3Z2V0IHdoZXJlIHdqYiB3cml0ZSdcbiAgICAvLyBUT0RPOiAndmFsaWRhdGVbQS1aXSsnIGNhbid0IHdvcmsgaW4ga2V5d29yZHNcbiAgfTtcblxuICBjb25zdCBUSVRMRV9OQU1FX1JFID0gL1xcd1tcXHdcXGRdKigoLSlbXFx3XFxkXSspKi87XG5cbiAgY29uc3QgQkFDS1RJQ0tfRVNDQVBFID0ge1xuICAgIGJlZ2luOiAnYFtcXFxcc1xcXFxTXScsXG4gICAgcmVsZXZhbmNlOiAwXG4gIH07XG5cbiAgY29uc3QgVkFSID0ge1xuICAgIGNsYXNzTmFtZTogJ3ZhcmlhYmxlJyxcbiAgICB2YXJpYW50czogW1xuICAgICAge1xuICAgICAgICBiZWdpbjogL1xcJFxcQi9cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2tleXdvcmQnLFxuICAgICAgICBiZWdpbjogL1xcJHRoaXMvXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogL1xcJFtcXHdcXGRdW1xcd1xcZF86XSovXG4gICAgICB9XG4gICAgXVxuICB9O1xuXG4gIGNvbnN0IExJVEVSQUwgPSB7XG4gICAgY2xhc3NOYW1lOiAnbGl0ZXJhbCcsXG4gICAgYmVnaW46IC9cXCQobnVsbHx0cnVlfGZhbHNlKVxcYi9cbiAgfTtcblxuICBjb25zdCBRVU9URV9TVFJJTkcgPSB7XG4gICAgY2xhc3NOYW1lOiBcInN0cmluZ1wiLFxuICAgIHZhcmlhbnRzOiBbXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAvXCIvLFxuICAgICAgICBlbmQ6IC9cIi9cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAvQFwiLyxcbiAgICAgICAgZW5kOiAvXlwiQC9cbiAgICAgIH1cbiAgICBdLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBCQUNLVElDS19FU0NBUEUsXG4gICAgICBWQVIsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3ZhcmlhYmxlJyxcbiAgICAgICAgYmVnaW46IC9cXCRbQS16XS8sXG4gICAgICAgIGVuZDogL1teQS16XS9cbiAgICAgIH1cbiAgICBdXG4gIH07XG5cbiAgY29uc3QgQVBPU19TVFJJTkcgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICB2YXJpYW50czogW1xuICAgICAge1xuICAgICAgICBiZWdpbjogLycvLFxuICAgICAgICBlbmQ6IC8nL1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IC9AJy8sXG4gICAgICAgIGVuZDogL14nQC9cbiAgICAgIH1cbiAgICBdXG4gIH07XG5cbiAgY29uc3QgUFNfSEVMUFRBR1MgPSB7XG4gICAgY2xhc3NOYW1lOiBcImRvY3RhZ1wiLFxuICAgIHZhcmlhbnRzOiBbXG4gICAgICAvKiBubyBwYXJhbWF0ZXIgaGVscCB0YWdzICovXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAvXFwuKHN5bm9wc2lzfGRlc2NyaXB0aW9ufGV4YW1wbGV8aW5wdXRzfG91dHB1dHN8bm90ZXN8bGlua3xjb21wb25lbnR8cm9sZXxmdW5jdGlvbmFsaXR5KS9cbiAgICAgIH0sXG4gICAgICAvKiBvbmUgcGFyYW1ldGVyIGhlbHAgdGFncyAqL1xuICAgICAge1xuICAgICAgICBiZWdpbjogL1xcLihwYXJhbWV0ZXJ8Zm9yd2FyZGhlbHB0YXJnZXRuYW1lfGZvcndhcmRoZWxwY2F0ZWdvcnl8cmVtb3RlaGVscHJ1bnNwYWNlfGV4dGVybmFsaGVscClcXHMrXFxTKy9cbiAgICAgIH1cbiAgICBdXG4gIH07XG5cbiAgY29uc3QgUFNfQ09NTUVOVCA9IGhsanMuaW5oZXJpdChcbiAgICBobGpzLkNPTU1FTlQobnVsbCwgbnVsbCksXG4gICAge1xuICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgLyogc2luZ2xlLWxpbmUgY29tbWVudCAqL1xuICAgICAgICB7XG4gICAgICAgICAgYmVnaW46IC8jLyxcbiAgICAgICAgICBlbmQ6IC8kL1xuICAgICAgICB9LFxuICAgICAgICAvKiBtdWx0aS1saW5lIGNvbW1lbnQgKi9cbiAgICAgICAge1xuICAgICAgICAgIGJlZ2luOiAvPCMvLFxuICAgICAgICAgIGVuZDogLyM+L1xuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgY29udGFpbnM6IFsgUFNfSEVMUFRBR1MgXVxuICAgIH1cbiAgKTtcblxuICBjb25zdCBDTURMRVRTID0ge1xuICAgIGNsYXNzTmFtZTogJ2J1aWx0X2luJyxcbiAgICB2YXJpYW50czogW1xuICAgICAge1xuICAgICAgICBiZWdpbjogJygnLmNvbmNhdChWQUxJRF9WRVJCUywgJykrKC0pW1xcXFx3XFxcXGRdKycpXG4gICAgICB9XG4gICAgXVxuICB9O1xuXG4gIGNvbnN0IFBTX0NMQVNTID0ge1xuICAgIGNsYXNzTmFtZTogJ2NsYXNzJyxcbiAgICBiZWdpbktleXdvcmRzOiAnY2xhc3MgZW51bScsXG4gICAgZW5kOiAvXFxzKlt7XS8sXG4gICAgZXhjbHVkZUVuZDogdHJ1ZSxcbiAgICByZWxldmFuY2U6IDAsXG4gICAgY29udGFpbnM6IFsgaGxqcy5USVRMRV9NT0RFIF1cbiAgfTtcblxuICBjb25zdCBQU19GVU5DVElPTiA9IHtcbiAgICBjbGFzc05hbWU6ICdmdW5jdGlvbicsXG4gICAgYmVnaW46IC9mdW5jdGlvblxccysvLFxuICAgIGVuZDogL1xccypcXHt8JC8sXG4gICAgZXhjbHVkZUVuZDogdHJ1ZSxcbiAgICByZXR1cm5CZWdpbjogdHJ1ZSxcbiAgICByZWxldmFuY2U6IDAsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IFwiZnVuY3Rpb25cIixcbiAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICBjbGFzc05hbWU6IFwia2V5d29yZFwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6IFwidGl0bGVcIixcbiAgICAgICAgYmVnaW46IFRJVExFX05BTUVfUkUsXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IC9cXCgvLFxuICAgICAgICBlbmQ6IC9cXCkvLFxuICAgICAgICBjbGFzc05hbWU6IFwicGFyYW1zXCIsXG4gICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgY29udGFpbnM6IFsgVkFSIF1cbiAgICAgIH1cbiAgICAgIC8vIENNRExFVFNcbiAgICBdXG4gIH07XG5cbiAgLy8gVXNpbmcgc3RhdG1lbnQsIHBsdXMgdHlwZSwgcGx1cyBhc3NlbWJseSBuYW1lLlxuICBjb25zdCBQU19VU0lORyA9IHtcbiAgICBiZWdpbjogL3VzaW5nXFxzLyxcbiAgICBlbmQ6IC8kLyxcbiAgICByZXR1cm5CZWdpbjogdHJ1ZSxcbiAgICBjb250YWluczogW1xuICAgICAgUVVPVEVfU1RSSU5HLFxuICAgICAgQVBPU19TVFJJTkcsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2tleXdvcmQnLFxuICAgICAgICBiZWdpbjogLyh1c2luZ3xhc3NlbWJseXxjb21tYW5kfG1vZHVsZXxuYW1lc3BhY2V8dHlwZSkvXG4gICAgICB9XG4gICAgXVxuICB9O1xuXG4gIC8vIENvbXBlcmlzb24gb3BlcmF0b3JzICYgZnVuY3Rpb24gbmFtZWQgcGFyYW1ldGVycy5cbiAgY29uc3QgUFNfQVJHVU1FTlRTID0ge1xuICAgIHZhcmlhbnRzOiBbXG4gICAgICAvLyBQUyBsaXRlcmFscyBhcmUgcHJldHR5IHZlcmJvc2Ugc28gaXQncyBhIGdvb2QgaWRlYSB0byBhY2NlbnQgdGhlbSBhIGJpdC5cbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnb3BlcmF0b3InLFxuICAgICAgICBiZWdpbjogJygnLmNvbmNhdChDT01QQVJJU09OX09QRVJBVE9SUywgJylcXFxcYicpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdsaXRlcmFsJyxcbiAgICAgICAgYmVnaW46IC8oLSlbXFx3XFxkXSsvLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH1cbiAgICBdXG4gIH07XG5cbiAgY29uc3QgSEFTSF9TSUdOUyA9IHtcbiAgICBjbGFzc05hbWU6ICdzZWxlY3Rvci10YWcnLFxuICAgIGJlZ2luOiAvQFxcQi8sXG4gICAgcmVsZXZhbmNlOiAwXG4gIH07XG5cbiAgLy8gSXQncyBhIHZlcnkgZ2VuZXJhbCBydWxlIHNvIEknbGwgbmFycm93IGl0IGEgYml0IHdpdGggc29tZSBzdHJpY3QgYm91bmRhcmllc1xuICAvLyB0byBhdm9pZCBhbnkgcG9zc2libGUgZmFsc2UtcG9zaXRpdmUgY29sbGlzaW9ucyFcbiAgY29uc3QgUFNfTUVUSE9EUyA9IHtcbiAgICBjbGFzc05hbWU6ICdmdW5jdGlvbicsXG4gICAgYmVnaW46IC9cXFsuKlxcXVxccypbXFx3XStbIF0/P1xcKC8sXG4gICAgZW5kOiAvJC8sXG4gICAgcmV0dXJuQmVnaW46IHRydWUsXG4gICAgcmVsZXZhbmNlOiAwLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2tleXdvcmQnLFxuICAgICAgICBiZWdpbjogJygnLmNvbmNhdChcbiAgICAgICAgICBLRVlXT1JEUy5rZXl3b3JkLnRvU3RyaW5nKCkucmVwbGFjZSgvXFxzL2csICd8J1xuICAgICAgICAgICksICcpXFxcXGInKSxcbiAgICAgICAgZW5kc1BhcmVudDogdHJ1ZSxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuICAgICAgaGxqcy5pbmhlcml0KGhsanMuVElUTEVfTU9ERSwge1xuICAgICAgICBlbmRzUGFyZW50OiB0cnVlXG4gICAgICB9KVxuICAgIF1cbiAgfTtcblxuICBjb25zdCBHRU5UTEVNQU5TX1NFVCA9IFtcbiAgICAvLyBTVEFUSUNfTUVNQkVSLFxuICAgIFBTX01FVEhPRFMsXG4gICAgUFNfQ09NTUVOVCxcbiAgICBCQUNLVElDS19FU0NBUEUsXG4gICAgaGxqcy5OVU1CRVJfTU9ERSxcbiAgICBRVU9URV9TVFJJTkcsXG4gICAgQVBPU19TVFJJTkcsXG4gICAgLy8gUFNfTkVXX09CSkVDVF9UWVBFLFxuICAgIENNRExFVFMsXG4gICAgVkFSLFxuICAgIExJVEVSQUwsXG4gICAgSEFTSF9TSUdOU1xuICBdO1xuXG4gIGNvbnN0IFBTX1RZUEUgPSB7XG4gICAgYmVnaW46IC9cXFsvLFxuICAgIGVuZDogL1xcXS8sXG4gICAgZXhjbHVkZUJlZ2luOiB0cnVlLFxuICAgIGV4Y2x1ZGVFbmQ6IHRydWUsXG4gICAgcmVsZXZhbmNlOiAwLFxuICAgIGNvbnRhaW5zOiBbXS5jb25jYXQoXG4gICAgICAnc2VsZicsXG4gICAgICBHRU5UTEVNQU5TX1NFVCxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IFwiKFwiICsgVFlQRVMuam9pbihcInxcIikgKyBcIilcIixcbiAgICAgICAgY2xhc3NOYW1lOiBcImJ1aWx0X2luXCIsXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAndHlwZScsXG4gICAgICAgIGJlZ2luOiAvW1xcLlxcd1xcZF0rLyxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9XG4gICAgKVxuICB9O1xuXG4gIFBTX01FVEhPRFMuY29udGFpbnMudW5zaGlmdChQU19UWVBFKTtcblxuICByZXR1cm4ge1xuICAgIG5hbWU6ICdQb3dlclNoZWxsJyxcbiAgICBhbGlhc2VzOiBbXG4gICAgICBcInBzXCIsXG4gICAgICBcInBzMVwiXG4gICAgXSxcbiAgICBjYXNlX2luc2Vuc2l0aXZlOiB0cnVlLFxuICAgIGtleXdvcmRzOiBLRVlXT1JEUyxcbiAgICBjb250YWluczogR0VOVExFTUFOU19TRVQuY29uY2F0KFxuICAgICAgUFNfQ0xBU1MsXG4gICAgICBQU19GVU5DVElPTixcbiAgICAgIFBTX1VTSU5HLFxuICAgICAgUFNfQVJHVU1FTlRTLFxuICAgICAgUFNfVFlQRVxuICAgIClcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwb3dlcnNoZWxsO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==