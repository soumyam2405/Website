exports.ids = [138];
exports.modules = {

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

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvcHVwcGV0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixFQUFFO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxzQkFBc0I7QUFDdEIsb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiMTM4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBQdXBwZXRcbkF1dGhvcjogSm9zZSBNb2xpbmEgQ29sbWVuZXJvIDxnYXVkeTQxQGdtYWlsLmNvbT5cbldlYnNpdGU6IGh0dHBzOi8vcHVwcGV0LmNvbS9kb2NzXG5DYXRlZ29yeTogY29uZmlnXG4qL1xuXG5mdW5jdGlvbiBwdXBwZXQoaGxqcykge1xuICBjb25zdCBQVVBQRVRfS0VZV09SRFMgPSB7XG4gICAga2V5d29yZDpcbiAgICAvKiBsYW5ndWFnZSBrZXl3b3JkcyAqL1xuICAgICAgJ2FuZCBjYXNlIGRlZmF1bHQgZWxzZSBlbHNpZiBmYWxzZSBpZiBpbiBpbXBvcnQgZW5oZXJpdHMgbm9kZSBvciB0cnVlIHVuZGVmIHVubGVzcyBtYWluIHNldHRpbmdzICRzdHJpbmcgJyxcbiAgICBsaXRlcmFsOlxuICAgIC8qIG1ldGFwYXJhbWV0ZXJzICovXG4gICAgICAnYWxpYXMgYXVkaXQgYmVmb3JlIGxvZ2xldmVsIG5vb3AgcmVxdWlyZSBzdWJzY3JpYmUgdGFnICcgK1xuICAgICAgLyogbm9ybWFsIGF0dHJpYnV0ZXMgKi9cbiAgICAgICdvd25lciBlbnN1cmUgZ3JvdXAgbW9kZSBuYW1lfDAgY2hhbmdlcyBjb250ZXh0IGZvcmNlIGluY2wgbGVucyBsb2FkX3BhdGggb25seWlmIHByb3ZpZGVyIHJldHVybnMgcm9vdCBzaG93X2RpZmYgdHlwZV9jaGVjayAnICtcbiAgICAgICdlbl9hZGRyZXNzIGlwX2FkZHJlc3MgcmVhbG5hbWUgY29tbWFuZCBlbnZpcm9ubWVudCBob3VyIG1vbnV0ZSBtb250aCBtb250aGRheSBzcGVjaWFsIHRhcmdldCB3ZWVrZGF5ICcgK1xuICAgICAgJ2NyZWF0ZXMgY3dkIG9nb3V0cHV0IHJlZnJlc2ggcmVmcmVzaG9ubHkgdHJpZXMgdHJ5X3NsZWVwIHVtYXNrIGJhY2t1cCBjaGVja3N1bSBjb250ZW50IGN0aW1lIGZvcmNlIGlnbm9yZSAnICtcbiAgICAgICdsaW5rcyBtdGltZSBwdXJnZSByZWN1cnNlIHJlY3Vyc2VsaW1pdCByZXBsYWNlIHNlbGludXhfaWdub3JlX2RlZmF1bHRzIHNlbHJhbmdlIHNlbHJvbGUgc2VsdHlwZSBzZWx1c2VyIHNvdXJjZSAnICtcbiAgICAgICdzb3VpcmNlX3Blcm1pc3Npb25zIHNvdXJjZXNlbGVjdCB2YWxpZGF0ZV9jbWQgdmFsaWRhdGVfcmVwbGFjZW1lbnQgYWxsb3dkdXBlIGF0dHJpYnV0ZV9tZW1iZXJzaGlwIGF1dGhfbWVtYmVyc2hpcCBmb3JjZWxvY2FsIGdpZCAnICtcbiAgICAgICdpYV9sb2FkX21vZHVsZSBtZW1iZXJzIHN5c3RlbSBob3N0X2FsaWFzZXMgaXAgYWxsb3dlZF90cnVua192bGFucyBkZXNjcmlwdGlvbiBkZXZpY2VfdXJsIGR1cGxleCBlbmNhcHN1bGF0aW9uIGV0aGVyY2hhbm5lbCAnICtcbiAgICAgICduYXRpdmVfdmxhbiBzcGVlZCBwcmluY2lwYWxzIGFsbG93X3Jvb3QgYXV0aF9jbGFzcyBhdXRoX3R5cGUgYXV0aGVudGljYXRlX3VzZXIga19vZl9uIG1lY2hhbmlzbXMgcnVsZSBzZXNzaW9uX293bmVyIHNoYXJlZCBvcHRpb25zICcgK1xuICAgICAgJ2RldmljZSBmc3R5cGUgZW5hYmxlIGhhc3Jlc3RhcnQgZGlyZWN0b3J5IHByZXNlbnQgYWJzZW50IGxpbmsgYXRib290IGJsb2NrZGV2aWNlIGRldmljZSBkdW1wIHBhc3MgcmVtb3VudHMgcG9sbGVyX3RhZyB1c2UgJyArXG4gICAgICAnbWVzc2FnZSB3aXRocGF0aCBhZG1pbmZpbGUgYWxsb3dfdmlydHVhbCBhbGxvd2Nkcm9tIGNhdGVnb3J5IGNvbmZpZ2ZpbGVzIGZsYXZvciBpbnN0YWxsX29wdGlvbnMgaW5zdGFuY2UgcGFja2FnZV9zZXR0aW5ncyBwbGF0Zm9ybSAnICtcbiAgICAgICdyZXNwb25zZWZpbGUgc3RhdHVzIHVuaW5zdGFsbF9vcHRpb25zIHZlbmRvciB1bmxlc3Nfc3lzdGVtX3VzZXIgdW5sZXNzX3VpZCBiaW5hcnkgY29udHJvbCBmbGFncyBoYXNzdGF0dXMgbWFuaWZlc3QgcGF0dGVybiByZXN0YXJ0IHJ1bm5pbmcgJyArXG4gICAgICAnc3RhcnQgc3RvcCBhbGxvd2R1cGUgYXV0aHMgZXhwaXJ5IGdpZCBncm91cHMgaG9tZSBpdGVyYXRpb25zIGtleV9tZW1iZXJzaGlwIGtleXMgbWFuYWdlaG9tZSBtZW1iZXJzaGlwIHBhc3N3b3JkIHBhc3N3b3JkX21heF9hZ2UgJyArXG4gICAgICAncGFzc3dvcmRfbWluX2FnZSBwcm9maWxlX21lbWJlcnNoaXAgcHJvZmlsZXMgcHJvamVjdCBwdXJnZV9zc2hfa2V5cyByb2xlX21lbWJlcnNoaXAgcm9sZXMgc2FsdCBzaGVsbCB1aWQgYmFzZXVybCBjb3N0IGRlc2NyIGVuYWJsZWQgJyArXG4gICAgICAnZW5hYmxlZ3JvdXBzIGV4Y2x1ZGUgZmFpbG92ZXJtZXRob2QgZ3BnY2hlY2sgZ3Bna2V5IGh0dHBfY2FjaGluZyBpbmNsdWRlIGluY2x1ZGVwa2dzIGtlZXBhbGl2ZSBtZXRhZGF0YV9leHBpcmUgbWV0YWxpbmsgbWlycm9ybGlzdCAnICtcbiAgICAgICdwcmlvcml0eSBwcm90ZWN0IHByb3h5IHByb3h5X3Bhc3N3b3JkIHByb3h5X3VzZXJuYW1lIHJlcG9fZ3BnY2hlY2sgczNfZW5hYmxlZCBza2lwX2lmX3VuYXZhaWxhYmxlIHNzbGNhY2VydCBzc2xjbGllbnRjZXJ0IHNzbGNsaWVudGtleSAnICtcbiAgICAgICdzc2x2ZXJpZnkgbW91bnRlZCcsXG4gICAgYnVpbHRfaW46XG4gICAgLyogY29yZSBmYWN0cyAqL1xuICAgICAgJ2FyY2hpdGVjdHVyZSBhdWdlYXN2ZXJzaW9uIGJsb2NrZGV2aWNlcyBib2FyZG1hbnVmYWN0dXJlciBib2FyZHByb2R1Y3RuYW1lIGJvYXJkc2VyaWFsbnVtYmVyIGNma2V5IGRoY3Bfc2VydmVycyAnICtcbiAgICAgICdkb21haW4gZWMyXyBlYzJfdXNlcmRhdGEgZmFjdGVydmVyc2lvbiBmaWxlc3lzdGVtcyBsZG9tIGZxZG4gZ2lkIGhhcmR3YXJlaXNhIGhhcmR3YXJlbW9kZWwgaG9zdG5hbWUgaWR8MCBpbnRlcmZhY2VzICcgK1xuICAgICAgJ2lwYWRkcmVzcyBpcGFkZHJlc3NfIGlwYWRkcmVzczYgaXBhZGRyZXNzNl8gaXBob3N0bnVtYmVyIGlzX3ZpcnR1YWwga2VybmVsIGtlcm5lbG1hanZlcnNpb24ga2VybmVscmVsZWFzZSBrZXJuZWx2ZXJzaW9uICcgK1xuICAgICAgJ2tlcm5lbHJlbGVhc2Uga2VybmVsdmVyc2lvbiBsc2JkaXN0Y29kZW5hbWUgbHNiZGlzdGRlc2NyaXB0aW9uIGxzYmRpc3RpZCBsc2JkaXN0cmVsZWFzZSBsc2JtYWpkaXN0cmVsZWFzZSBsc2JtaW5vcmRpc3RyZWxlYXNlICcgK1xuICAgICAgJ2xzYnJlbGVhc2UgbWFjYWRkcmVzcyBtYWNhZGRyZXNzXyBtYWNvc3hfYnVpbGR2ZXJzaW9uIG1hY29zeF9wcm9kdWN0bmFtZSBtYWNvc3hfcHJvZHVjdHZlcnNpb24gbWFjb3N4X3Byb2R1Y3R2ZXJzb25fbWFqb3IgJyArXG4gICAgICAnbWFjb3N4X3Byb2R1Y3R2ZXJzaW9uX21pbm9yIG1hbnVmYWN0dXJlciBtZW1vcnlmcmVlIG1lbW9yeXNpemUgbmV0bWFzayBtZXRtYXNrXyBuZXR3b3JrXyBvcGVyYXRpbmdzeXN0ZW0gb3BlcmF0aW5nc3lzdGVtbWFqcmVsZWFzZSAnICtcbiAgICAgICdvcGVyYXRpbmdzeXN0ZW1yZWxlYXNlIG9zZmFtaWx5IHBhcnRpdGlvbnMgcGF0aCBwaHlzaWNhbHByb2Nlc3NvcmNvdW50IHByb2Nlc3NvciBwcm9jZXNzb3Jjb3VudCBwcm9kdWN0bmFtZSBwcyBwdXBwZXR2ZXJzaW9uICcgK1xuICAgICAgJ3J1YnlzaXRlZGlyIHJ1Ynl2ZXJzaW9uIHNlbGludXggc2VsaW51eF9jb25maWdfbW9kZSBzZWxpbnV4X2NvbmZpZ19wb2xpY3kgc2VsaW51eF9jdXJyZW50X21vZGUgc2VsaW51eF9jdXJyZW50X21vZGUgc2VsaW51eF9lbmZvcmNlZCAnICtcbiAgICAgICdzZWxpbnV4X3BvbGljeXZlcnNpb24gc2VyaWFsbnVtYmVyIHNwXyBzc2hkc2FrZXkgc3NoZWNkc2FrZXkgc3NocnNha2V5IHN3YXBlbmNyeXB0ZWQgc3dhcGZyZWUgc3dhcHNpemUgdGltZXpvbmUgdHlwZSB1bmlxdWVpZCB1cHRpbWUgJyArXG4gICAgICAndXB0aW1lX2RheXMgdXB0aW1lX2hvdXJzIHVwdGltZV9zZWNvbmRzIHV1aWQgdmlydHVhbCB2bGFucyB4ZW5kb21haW5zIHpmc192ZXJzaW9uIHpvbmVuYWUgem9uZXMgenBvb2xfdmVyc2lvbidcbiAgfTtcblxuICBjb25zdCBDT01NRU5UID0gaGxqcy5DT01NRU5UKCcjJywgJyQnKTtcblxuICBjb25zdCBJREVOVF9SRSA9ICcoW0EtWmEtel9dfDo6KShcXFxcd3w6OikqJztcblxuICBjb25zdCBUSVRMRSA9IGhsanMuaW5oZXJpdChobGpzLlRJVExFX01PREUsIHtcbiAgICBiZWdpbjogSURFTlRfUkVcbiAgfSk7XG5cbiAgY29uc3QgVkFSSUFCTEUgPSB7XG4gICAgY2xhc3NOYW1lOiAndmFyaWFibGUnLFxuICAgIGJlZ2luOiAnXFxcXCQnICsgSURFTlRfUkVcbiAgfTtcblxuICBjb25zdCBTVFJJTkcgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICBjb250YWluczogW1xuICAgICAgaGxqcy5CQUNLU0xBU0hfRVNDQVBFLFxuICAgICAgVkFSSUFCTEVcbiAgICBdLFxuICAgIHZhcmlhbnRzOiBbXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAvJy8sXG4gICAgICAgIGVuZDogLycvXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogL1wiLyxcbiAgICAgICAgZW5kOiAvXCIvXG4gICAgICB9XG4gICAgXVxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgbmFtZTogJ1B1cHBldCcsXG4gICAgYWxpYXNlczogWyAncHAnIF0sXG4gICAgY29udGFpbnM6IFtcbiAgICAgIENPTU1FTlQsXG4gICAgICBWQVJJQUJMRSxcbiAgICAgIFNUUklORyxcbiAgICAgIHtcbiAgICAgICAgYmVnaW5LZXl3b3JkczogJ2NsYXNzJyxcbiAgICAgICAgZW5kOiAnXFxcXHt8OycsXG4gICAgICAgIGlsbGVnYWw6IC89LyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICBUSVRMRSxcbiAgICAgICAgICBDT01NRU5UXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luS2V5d29yZHM6ICdkZWZpbmUnLFxuICAgICAgICBlbmQ6IC9cXHsvLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3NlY3Rpb24nLFxuICAgICAgICAgICAgYmVnaW46IGhsanMuSURFTlRfUkUsXG4gICAgICAgICAgICBlbmRzUGFyZW50OiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogaGxqcy5JREVOVF9SRSArICdcXFxccytcXFxceycsXG4gICAgICAgIHJldHVybkJlZ2luOiB0cnVlLFxuICAgICAgICBlbmQ6IC9cXFMvLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2tleXdvcmQnLFxuICAgICAgICAgICAgYmVnaW46IGhsanMuSURFTlRfUkVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luOiAvXFx7LyxcbiAgICAgICAgICAgIGVuZDogL1xcfS8sXG4gICAgICAgICAgICBrZXl3b3JkczogUFVQUEVUX0tFWVdPUkRTLFxuICAgICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgICAgU1RSSU5HLFxuICAgICAgICAgICAgICBDT01NRU5ULFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYmVnaW46ICdbYS16QS1aX10rXFxcXHMqPT4nLFxuICAgICAgICAgICAgICAgIHJldHVybkJlZ2luOiB0cnVlLFxuICAgICAgICAgICAgICAgIGVuZDogJz0+JyxcbiAgICAgICAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdhdHRyJyxcbiAgICAgICAgICAgICAgICAgICAgYmVnaW46IGhsanMuSURFTlRfUkVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdudW1iZXInLFxuICAgICAgICAgICAgICAgIGJlZ2luOiAnKFxcXFxiMFswLTdfXSspfChcXFxcYjB4WzAtOWEtZkEtRl9dKyl8KFxcXFxiWzEtOV1bMC05X10qKFxcXFwuWzAtOV9dKyk/KXxbMF9dXFxcXGInLFxuICAgICAgICAgICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBWQVJJQUJMRVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9XG4gICAgXVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHB1cHBldDtcbiJdLCJzb3VyY2VSb290IjoiIn0=