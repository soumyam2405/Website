(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[139],{

/***/ "./node_modules/highlight.js/lib/languages/puppet.js":
/*!***********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/puppet.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Puppet
Author: Jose Molina Colmenero <gaudy41@gmail.com>
Website: https://puppet.com/docs
Category: config
*/

function puppet(hljs) {
  const PUPPET_KEYWORDS = {
    keyword:
    /* language keywords */
      'and case default else elsif false if in import enherits node or true undef unless main settings $string ',
    literal:
    /* metaparameters */
      'alias audit before loglevel noop require subscribe tag ' +
      /* normal attributes */
      'owner ensure group mode name|0 changes context force incl lens load_path onlyif provider returns root show_diff type_check ' +
      'en_address ip_address realname command environment hour monute month monthday special target weekday ' +
      'creates cwd ogoutput refresh refreshonly tries try_sleep umask backup checksum content ctime force ignore ' +
      'links mtime purge recurse recurselimit replace selinux_ignore_defaults selrange selrole seltype seluser source ' +
      'souirce_permissions sourceselect validate_cmd validate_replacement allowdupe attribute_membership auth_membership forcelocal gid ' +
      'ia_load_module members system host_aliases ip allowed_trunk_vlans description device_url duplex encapsulation etherchannel ' +
      'native_vlan speed principals allow_root auth_class auth_type authenticate_user k_of_n mechanisms rule session_owner shared options ' +
      'device fstype enable hasrestart directory present absent link atboot blockdevice device dump pass remounts poller_tag use ' +
      'message withpath adminfile allow_virtual allowcdrom category configfiles flavor install_options instance package_settings platform ' +
      'responsefile status uninstall_options vendor unless_system_user unless_uid binary control flags hasstatus manifest pattern restart running ' +
      'start stop allowdupe auths expiry gid groups home iterations key_membership keys managehome membership password password_max_age ' +
      'password_min_age profile_membership profiles project purge_ssh_keys role_membership roles salt shell uid baseurl cost descr enabled ' +
      'enablegroups exclude failovermethod gpgcheck gpgkey http_caching include includepkgs keepalive metadata_expire metalink mirrorlist ' +
      'priority protect proxy proxy_password proxy_username repo_gpgcheck s3_enabled skip_if_unavailable sslcacert sslclientcert sslclientkey ' +
      'sslverify mounted',
    built_in:
    /* core facts */
      'architecture augeasversion blockdevices boardmanufacturer boardproductname boardserialnumber cfkey dhcp_servers ' +
      'domain ec2_ ec2_userdata facterversion filesystems ldom fqdn gid hardwareisa hardwaremodel hostname id|0 interfaces ' +
      'ipaddress ipaddress_ ipaddress6 ipaddress6_ iphostnumber is_virtual kernel kernelmajversion kernelrelease kernelversion ' +
      'kernelrelease kernelversion lsbdistcodename lsbdistdescription lsbdistid lsbdistrelease lsbmajdistrelease lsbminordistrelease ' +
      'lsbrelease macaddress macaddress_ macosx_buildversion macosx_productname macosx_productversion macosx_productverson_major ' +
      'macosx_productversion_minor manufacturer memoryfree memorysize netmask metmask_ network_ operatingsystem operatingsystemmajrelease ' +
      'operatingsystemrelease osfamily partitions path physicalprocessorcount processor processorcount productname ps puppetversion ' +
      'rubysitedir rubyversion selinux selinux_config_mode selinux_config_policy selinux_current_mode selinux_current_mode selinux_enforced ' +
      'selinux_policyversion serialnumber sp_ sshdsakey sshecdsakey sshrsakey swapencrypted swapfree swapsize timezone type uniqueid uptime ' +
      'uptime_days uptime_hours uptime_seconds uuid virtual vlans xendomains zfs_version zonenae zones zpool_version'
  };

  const COMMENT = hljs.COMMENT('#', '$');

  const IDENT_RE = '([A-Za-z_]|::)(\\w|::)*';

  const TITLE = hljs.inherit(hljs.TITLE_MODE, {
    begin: IDENT_RE
  });

  const VARIABLE = {
    className: 'variable',
    begin: '\\$' + IDENT_RE
  };

  const STRING = {
    className: 'string',
    contains: [
      hljs.BACKSLASH_ESCAPE,
      VARIABLE
    ],
    variants: [
      {
        begin: /'/,
        end: /'/
      },
      {
        begin: /"/,
        end: /"/
      }
    ]
  };

  return {
    name: 'Puppet',
    aliases: [ 'pp' ],
    contains: [
      COMMENT,
      VARIABLE,
      STRING,
      {
        beginKeywords: 'class',
        end: '\\{|;',
        illegal: /=/,
        contains: [
          TITLE,
          COMMENT
        ]
      },
      {
        beginKeywords: 'define',
        end: /\{/,
        contains: [
          {
            className: 'section',
            begin: hljs.IDENT_RE,
            endsParent: true
          }
        ]
      },
      {
        begin: hljs.IDENT_RE + '\\s+\\{',
        returnBegin: true,
        end: /\S/,
        contains: [
          {
            className: 'keyword',
            begin: hljs.IDENT_RE
          },
          {
            begin: /\{/,
            end: /\}/,
            keywords: PUPPET_KEYWORDS,
            relevance: 0,
            contains: [
              STRING,
              COMMENT,
              {
                begin: '[a-zA-Z_]+\\s*=>',
                returnBegin: true,
                end: '=>',
                contains: [
                  {
                    className: 'attr',
                    begin: hljs.IDENT_RE
                  }
                ]
              },
              {
                className: 'number',
                begin: '(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b',
                relevance: 0
              },
              VARIABLE
            ]
          }
        ],
        relevance: 0
      }
    ]
  };
}

module.exports = puppet;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3B1cHBldC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixFQUFFO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxzQkFBc0I7QUFDdEIsb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoic3RhdGljL2NodW5rcy8xMzkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuTGFuZ3VhZ2U6IFB1cHBldFxuQXV0aG9yOiBKb3NlIE1vbGluYSBDb2xtZW5lcm8gPGdhdWR5NDFAZ21haWwuY29tPlxuV2Vic2l0ZTogaHR0cHM6Ly9wdXBwZXQuY29tL2RvY3NcbkNhdGVnb3J5OiBjb25maWdcbiovXG5cbmZ1bmN0aW9uIHB1cHBldChobGpzKSB7XG4gIGNvbnN0IFBVUFBFVF9LRVlXT1JEUyA9IHtcbiAgICBrZXl3b3JkOlxuICAgIC8qIGxhbmd1YWdlIGtleXdvcmRzICovXG4gICAgICAnYW5kIGNhc2UgZGVmYXVsdCBlbHNlIGVsc2lmIGZhbHNlIGlmIGluIGltcG9ydCBlbmhlcml0cyBub2RlIG9yIHRydWUgdW5kZWYgdW5sZXNzIG1haW4gc2V0dGluZ3MgJHN0cmluZyAnLFxuICAgIGxpdGVyYWw6XG4gICAgLyogbWV0YXBhcmFtZXRlcnMgKi9cbiAgICAgICdhbGlhcyBhdWRpdCBiZWZvcmUgbG9nbGV2ZWwgbm9vcCByZXF1aXJlIHN1YnNjcmliZSB0YWcgJyArXG4gICAgICAvKiBub3JtYWwgYXR0cmlidXRlcyAqL1xuICAgICAgJ293bmVyIGVuc3VyZSBncm91cCBtb2RlIG5hbWV8MCBjaGFuZ2VzIGNvbnRleHQgZm9yY2UgaW5jbCBsZW5zIGxvYWRfcGF0aCBvbmx5aWYgcHJvdmlkZXIgcmV0dXJucyByb290IHNob3dfZGlmZiB0eXBlX2NoZWNrICcgK1xuICAgICAgJ2VuX2FkZHJlc3MgaXBfYWRkcmVzcyByZWFsbmFtZSBjb21tYW5kIGVudmlyb25tZW50IGhvdXIgbW9udXRlIG1vbnRoIG1vbnRoZGF5IHNwZWNpYWwgdGFyZ2V0IHdlZWtkYXkgJyArXG4gICAgICAnY3JlYXRlcyBjd2Qgb2dvdXRwdXQgcmVmcmVzaCByZWZyZXNob25seSB0cmllcyB0cnlfc2xlZXAgdW1hc2sgYmFja3VwIGNoZWNrc3VtIGNvbnRlbnQgY3RpbWUgZm9yY2UgaWdub3JlICcgK1xuICAgICAgJ2xpbmtzIG10aW1lIHB1cmdlIHJlY3Vyc2UgcmVjdXJzZWxpbWl0IHJlcGxhY2Ugc2VsaW51eF9pZ25vcmVfZGVmYXVsdHMgc2VscmFuZ2Ugc2Vscm9sZSBzZWx0eXBlIHNlbHVzZXIgc291cmNlICcgK1xuICAgICAgJ3NvdWlyY2VfcGVybWlzc2lvbnMgc291cmNlc2VsZWN0IHZhbGlkYXRlX2NtZCB2YWxpZGF0ZV9yZXBsYWNlbWVudCBhbGxvd2R1cGUgYXR0cmlidXRlX21lbWJlcnNoaXAgYXV0aF9tZW1iZXJzaGlwIGZvcmNlbG9jYWwgZ2lkICcgK1xuICAgICAgJ2lhX2xvYWRfbW9kdWxlIG1lbWJlcnMgc3lzdGVtIGhvc3RfYWxpYXNlcyBpcCBhbGxvd2VkX3RydW5rX3ZsYW5zIGRlc2NyaXB0aW9uIGRldmljZV91cmwgZHVwbGV4IGVuY2Fwc3VsYXRpb24gZXRoZXJjaGFubmVsICcgK1xuICAgICAgJ25hdGl2ZV92bGFuIHNwZWVkIHByaW5jaXBhbHMgYWxsb3dfcm9vdCBhdXRoX2NsYXNzIGF1dGhfdHlwZSBhdXRoZW50aWNhdGVfdXNlciBrX29mX24gbWVjaGFuaXNtcyBydWxlIHNlc3Npb25fb3duZXIgc2hhcmVkIG9wdGlvbnMgJyArXG4gICAgICAnZGV2aWNlIGZzdHlwZSBlbmFibGUgaGFzcmVzdGFydCBkaXJlY3RvcnkgcHJlc2VudCBhYnNlbnQgbGluayBhdGJvb3QgYmxvY2tkZXZpY2UgZGV2aWNlIGR1bXAgcGFzcyByZW1vdW50cyBwb2xsZXJfdGFnIHVzZSAnICtcbiAgICAgICdtZXNzYWdlIHdpdGhwYXRoIGFkbWluZmlsZSBhbGxvd192aXJ0dWFsIGFsbG93Y2Ryb20gY2F0ZWdvcnkgY29uZmlnZmlsZXMgZmxhdm9yIGluc3RhbGxfb3B0aW9ucyBpbnN0YW5jZSBwYWNrYWdlX3NldHRpbmdzIHBsYXRmb3JtICcgK1xuICAgICAgJ3Jlc3BvbnNlZmlsZSBzdGF0dXMgdW5pbnN0YWxsX29wdGlvbnMgdmVuZG9yIHVubGVzc19zeXN0ZW1fdXNlciB1bmxlc3NfdWlkIGJpbmFyeSBjb250cm9sIGZsYWdzIGhhc3N0YXR1cyBtYW5pZmVzdCBwYXR0ZXJuIHJlc3RhcnQgcnVubmluZyAnICtcbiAgICAgICdzdGFydCBzdG9wIGFsbG93ZHVwZSBhdXRocyBleHBpcnkgZ2lkIGdyb3VwcyBob21lIGl0ZXJhdGlvbnMga2V5X21lbWJlcnNoaXAga2V5cyBtYW5hZ2Vob21lIG1lbWJlcnNoaXAgcGFzc3dvcmQgcGFzc3dvcmRfbWF4X2FnZSAnICtcbiAgICAgICdwYXNzd29yZF9taW5fYWdlIHByb2ZpbGVfbWVtYmVyc2hpcCBwcm9maWxlcyBwcm9qZWN0IHB1cmdlX3NzaF9rZXlzIHJvbGVfbWVtYmVyc2hpcCByb2xlcyBzYWx0IHNoZWxsIHVpZCBiYXNldXJsIGNvc3QgZGVzY3IgZW5hYmxlZCAnICtcbiAgICAgICdlbmFibGVncm91cHMgZXhjbHVkZSBmYWlsb3Zlcm1ldGhvZCBncGdjaGVjayBncGdrZXkgaHR0cF9jYWNoaW5nIGluY2x1ZGUgaW5jbHVkZXBrZ3Mga2VlcGFsaXZlIG1ldGFkYXRhX2V4cGlyZSBtZXRhbGluayBtaXJyb3JsaXN0ICcgK1xuICAgICAgJ3ByaW9yaXR5IHByb3RlY3QgcHJveHkgcHJveHlfcGFzc3dvcmQgcHJveHlfdXNlcm5hbWUgcmVwb19ncGdjaGVjayBzM19lbmFibGVkIHNraXBfaWZfdW5hdmFpbGFibGUgc3NsY2FjZXJ0IHNzbGNsaWVudGNlcnQgc3NsY2xpZW50a2V5ICcgK1xuICAgICAgJ3NzbHZlcmlmeSBtb3VudGVkJyxcbiAgICBidWlsdF9pbjpcbiAgICAvKiBjb3JlIGZhY3RzICovXG4gICAgICAnYXJjaGl0ZWN0dXJlIGF1Z2Vhc3ZlcnNpb24gYmxvY2tkZXZpY2VzIGJvYXJkbWFudWZhY3R1cmVyIGJvYXJkcHJvZHVjdG5hbWUgYm9hcmRzZXJpYWxudW1iZXIgY2ZrZXkgZGhjcF9zZXJ2ZXJzICcgK1xuICAgICAgJ2RvbWFpbiBlYzJfIGVjMl91c2VyZGF0YSBmYWN0ZXJ2ZXJzaW9uIGZpbGVzeXN0ZW1zIGxkb20gZnFkbiBnaWQgaGFyZHdhcmVpc2EgaGFyZHdhcmVtb2RlbCBob3N0bmFtZSBpZHwwIGludGVyZmFjZXMgJyArXG4gICAgICAnaXBhZGRyZXNzIGlwYWRkcmVzc18gaXBhZGRyZXNzNiBpcGFkZHJlc3M2XyBpcGhvc3RudW1iZXIgaXNfdmlydHVhbCBrZXJuZWwga2VybmVsbWFqdmVyc2lvbiBrZXJuZWxyZWxlYXNlIGtlcm5lbHZlcnNpb24gJyArXG4gICAgICAna2VybmVscmVsZWFzZSBrZXJuZWx2ZXJzaW9uIGxzYmRpc3Rjb2RlbmFtZSBsc2JkaXN0ZGVzY3JpcHRpb24gbHNiZGlzdGlkIGxzYmRpc3RyZWxlYXNlIGxzYm1hamRpc3RyZWxlYXNlIGxzYm1pbm9yZGlzdHJlbGVhc2UgJyArXG4gICAgICAnbHNicmVsZWFzZSBtYWNhZGRyZXNzIG1hY2FkZHJlc3NfIG1hY29zeF9idWlsZHZlcnNpb24gbWFjb3N4X3Byb2R1Y3RuYW1lIG1hY29zeF9wcm9kdWN0dmVyc2lvbiBtYWNvc3hfcHJvZHVjdHZlcnNvbl9tYWpvciAnICtcbiAgICAgICdtYWNvc3hfcHJvZHVjdHZlcnNpb25fbWlub3IgbWFudWZhY3R1cmVyIG1lbW9yeWZyZWUgbWVtb3J5c2l6ZSBuZXRtYXNrIG1ldG1hc2tfIG5ldHdvcmtfIG9wZXJhdGluZ3N5c3RlbSBvcGVyYXRpbmdzeXN0ZW1tYWpyZWxlYXNlICcgK1xuICAgICAgJ29wZXJhdGluZ3N5c3RlbXJlbGVhc2Ugb3NmYW1pbHkgcGFydGl0aW9ucyBwYXRoIHBoeXNpY2FscHJvY2Vzc29yY291bnQgcHJvY2Vzc29yIHByb2Nlc3NvcmNvdW50IHByb2R1Y3RuYW1lIHBzIHB1cHBldHZlcnNpb24gJyArXG4gICAgICAncnVieXNpdGVkaXIgcnVieXZlcnNpb24gc2VsaW51eCBzZWxpbnV4X2NvbmZpZ19tb2RlIHNlbGludXhfY29uZmlnX3BvbGljeSBzZWxpbnV4X2N1cnJlbnRfbW9kZSBzZWxpbnV4X2N1cnJlbnRfbW9kZSBzZWxpbnV4X2VuZm9yY2VkICcgK1xuICAgICAgJ3NlbGludXhfcG9saWN5dmVyc2lvbiBzZXJpYWxudW1iZXIgc3BfIHNzaGRzYWtleSBzc2hlY2RzYWtleSBzc2hyc2FrZXkgc3dhcGVuY3J5cHRlZCBzd2FwZnJlZSBzd2Fwc2l6ZSB0aW1lem9uZSB0eXBlIHVuaXF1ZWlkIHVwdGltZSAnICtcbiAgICAgICd1cHRpbWVfZGF5cyB1cHRpbWVfaG91cnMgdXB0aW1lX3NlY29uZHMgdXVpZCB2aXJ0dWFsIHZsYW5zIHhlbmRvbWFpbnMgemZzX3ZlcnNpb24gem9uZW5hZSB6b25lcyB6cG9vbF92ZXJzaW9uJ1xuICB9O1xuXG4gIGNvbnN0IENPTU1FTlQgPSBobGpzLkNPTU1FTlQoJyMnLCAnJCcpO1xuXG4gIGNvbnN0IElERU5UX1JFID0gJyhbQS1aYS16X118OjopKFxcXFx3fDo6KSonO1xuXG4gIGNvbnN0IFRJVExFID0gaGxqcy5pbmhlcml0KGhsanMuVElUTEVfTU9ERSwge1xuICAgIGJlZ2luOiBJREVOVF9SRVxuICB9KTtcblxuICBjb25zdCBWQVJJQUJMRSA9IHtcbiAgICBjbGFzc05hbWU6ICd2YXJpYWJsZScsXG4gICAgYmVnaW46ICdcXFxcJCcgKyBJREVOVF9SRVxuICB9O1xuXG4gIGNvbnN0IFNUUklORyA9IHtcbiAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBobGpzLkJBQ0tTTEFTSF9FU0NBUEUsXG4gICAgICBWQVJJQUJMRVxuICAgIF0sXG4gICAgdmFyaWFudHM6IFtcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IC8nLyxcbiAgICAgICAgZW5kOiAvJy9cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAvXCIvLFxuICAgICAgICBlbmQ6IC9cIi9cbiAgICAgIH1cbiAgICBdXG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnUHVwcGV0JyxcbiAgICBhbGlhc2VzOiBbICdwcCcgXSxcbiAgICBjb250YWluczogW1xuICAgICAgQ09NTUVOVCxcbiAgICAgIFZBUklBQkxFLFxuICAgICAgU1RSSU5HLFxuICAgICAge1xuICAgICAgICBiZWdpbktleXdvcmRzOiAnY2xhc3MnLFxuICAgICAgICBlbmQ6ICdcXFxce3w7JyxcbiAgICAgICAgaWxsZWdhbDogLz0vLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIFRJVExFLFxuICAgICAgICAgIENPTU1FTlRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW5LZXl3b3JkczogJ2RlZmluZScsXG4gICAgICAgIGVuZDogL1xcey8sXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnc2VjdGlvbicsXG4gICAgICAgICAgICBiZWdpbjogaGxqcy5JREVOVF9SRSxcbiAgICAgICAgICAgIGVuZHNQYXJlbnQ6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiBobGpzLklERU5UX1JFICsgJ1xcXFxzK1xcXFx7JyxcbiAgICAgICAgcmV0dXJuQmVnaW46IHRydWUsXG4gICAgICAgIGVuZDogL1xcUy8sXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAna2V5d29yZCcsXG4gICAgICAgICAgICBiZWdpbjogaGxqcy5JREVOVF9SRVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW46IC9cXHsvLFxuICAgICAgICAgICAgZW5kOiAvXFx9LyxcbiAgICAgICAgICAgIGtleXdvcmRzOiBQVVBQRVRfS0VZV09SRFMsXG4gICAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgICBTVFJJTkcsXG4gICAgICAgICAgICAgIENPTU1FTlQsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBiZWdpbjogJ1thLXpBLVpfXStcXFxccyo9PicsXG4gICAgICAgICAgICAgICAgcmV0dXJuQmVnaW46IHRydWUsXG4gICAgICAgICAgICAgICAgZW5kOiAnPT4nLFxuICAgICAgICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ2F0dHInLFxuICAgICAgICAgICAgICAgICAgICBiZWdpbjogaGxqcy5JREVOVF9SRVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgICAgICAgICAgICAgYmVnaW46ICcoXFxcXGIwWzAtN19dKyl8KFxcXFxiMHhbMC05YS1mQS1GX10rKXwoXFxcXGJbMS05XVswLTlfXSooXFxcXC5bMC05X10rKT8pfFswX11cXFxcYicsXG4gICAgICAgICAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFZBUklBQkxFXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH1cbiAgICBdXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcHVwcGV0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==