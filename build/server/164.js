exports.ids = [164];
exports.modules = {

/***/ "./node_modules/highlight.js/lib/languages/sql_more.js":
/*!*************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/sql_more.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 Language: SQL More (mix of MySQL, Oracle, etc)
 Contributors: Nikolay Lisienko <info@neor.ru>, Heiko August <post@auge8472.de>, Travis Odom <travis.a.odom@gmail.com>, Vadimtro <vadimtro@yahoo.com>, Benjamin Auder <benjamin.auder@gmail.com>
 Website: https://en.wikipedia.org/wiki/SQL
 Category: database
 */

/*

This is a preservation of the old bloated SQL grammar which includes pretty much
the kitchen sink because no one was keeping track of which keywords belong to
which databases.  This is likely to be removed in the future.

- Oracle SQL should be factored into it's own 3rd party grammar.
- MySQL should be factored out into it's own 3rd party grammar.

*/

function sql_more(hljs) {
  var COMMENT_MODE = hljs.COMMENT('--', '$');
  return {
    name: 'SQL (more)',
    aliases: ["mysql", "oracle"],
    disableAutodetect: true,
    case_insensitive: true,
    illegal: /[<>{}*]/,
    contains: [
      {
        beginKeywords:
          'begin end start commit rollback savepoint lock alter create drop rename call ' +
          'delete do handler insert load replace select truncate update set show pragma grant ' +
          'merge describe use explain help declare prepare execute deallocate release ' +
          'unlock purge reset change stop analyze cache flush optimize repair kill ' +
          'install uninstall checksum restore check backup revoke comment values with',
        end: /;/, endsWithParent: true,
        keywords: {
          $pattern: /[\w\.]+/,
          keyword:
            'as abort abs absolute acc acce accep accept access accessed accessible account acos action activate add ' +
            'addtime admin administer advanced advise aes_decrypt aes_encrypt after agent aggregate ali alia alias ' +
            'all allocate allow alter always analyze ancillary and anti any anydata anydataset anyschema anytype apply ' +
            'archive archived archivelog are as asc ascii asin assembly assertion associate asynchronous at atan ' +
            'atn2 attr attri attrib attribu attribut attribute attributes audit authenticated authentication authid ' +
            'authors auto autoallocate autodblink autoextend automatic availability avg backup badfile basicfile ' +
            'before begin beginning benchmark between bfile bfile_base big bigfile bin binary_double binary_float ' +
            'binlog bit_and bit_count bit_length bit_or bit_xor bitmap blob_base block blocksize body both bound ' +
            'bucket buffer_cache buffer_pool build bulk by byte byteordermark bytes cache caching call calling cancel ' +
            'capacity cascade cascaded case cast catalog category ceil ceiling chain change changed char_base ' +
            'char_length character_length characters characterset charindex charset charsetform charsetid check ' +
            'checksum checksum_agg child choose chr chunk class cleanup clear client clob clob_base clone close ' +
            'cluster_id cluster_probability cluster_set clustering coalesce coercibility col collate collation ' +
            'collect colu colum column column_value columns columns_updated comment commit compact compatibility ' +
            'compiled complete composite_limit compound compress compute concat concat_ws concurrent confirm conn ' +
            'connec connect connect_by_iscycle connect_by_isleaf connect_by_root connect_time connection ' +
            'consider consistent constant constraint constraints constructor container content contents context ' +
            'contributors controlfile conv convert convert_tz corr corr_k corr_s corresponding corruption cos cost ' +
            'count count_big counted covar_pop covar_samp cpu_per_call cpu_per_session crc32 create creation ' +
            'critical cross cube cume_dist curdate current current_date current_time current_timestamp current_user ' +
            'cursor curtime customdatum cycle data database databases datafile datafiles datalength date_add ' +
            'date_cache date_format date_sub dateadd datediff datefromparts datename datepart datetime2fromparts ' +
            'day day_to_second dayname dayofmonth dayofweek dayofyear days db_role_change dbtimezone ddl deallocate ' +
            'declare decode decompose decrement decrypt deduplicate def defa defau defaul default defaults ' +
            'deferred defi defin define degrees delayed delegate delete delete_all delimited demand dense_rank ' +
            'depth dequeue des_decrypt des_encrypt des_key_file desc descr descri describ describe descriptor ' +
            'deterministic diagnostics difference dimension direct_load directory disable disable_all ' +
            'disallow disassociate discardfile disconnect diskgroup distinct distinctrow distribute distributed div ' +
            'do document domain dotnet double downgrade drop dumpfile duplicate duration each edition editionable ' +
            'editions element ellipsis else elsif elt empty enable enable_all enclosed encode encoding encrypt ' +
            'end end-exec endian enforced engine engines enqueue enterprise entityescaping eomonth error errors ' +
            'escaped evalname evaluate event eventdata events except exception exceptions exchange exclude excluding ' +
            'execu execut execute exempt exists exit exp expire explain explode export export_set extended extent external ' +
            'external_1 external_2 externally extract failed failed_login_attempts failover failure far fast ' +
            'feature_set feature_value fetch field fields file file_name_convert filesystem_like_logging final ' +
            'finish first first_value fixed flash_cache flashback floor flush following follows for forall force foreign ' +
            'form forma format found found_rows freelist freelists freepools fresh from from_base64 from_days ' +
            'ftp full function general generated get get_format get_lock getdate getutcdate global global_name ' +
            'globally go goto grant grants greatest group group_concat group_id grouping grouping_id groups ' +
            'gtid_subtract guarantee guard handler hash hashkeys having hea head headi headin heading heap help hex ' +
            'hierarchy high high_priority hosts hour hours http id ident_current ident_incr ident_seed identified ' +
            'identity idle_time if ifnull ignore iif ilike ilm immediate import in include including increment ' +
            'index indexes indexing indextype indicator indices inet6_aton inet6_ntoa inet_aton inet_ntoa infile ' +
            'initial initialized initially initrans inmemory inner innodb input insert install instance instantiable ' +
            'instr interface interleaved intersect into invalidate invisible is is_free_lock is_ipv4 is_ipv4_compat ' +
            'is_not is_not_null is_used_lock isdate isnull isolation iterate java join json json_exists ' +
            'keep keep_duplicates key keys kill language large last last_day last_insert_id last_value lateral lax lcase ' +
            'lead leading least leaves left len lenght length less level levels library like like2 like4 likec limit ' +
            'lines link list listagg little ln load load_file lob lobs local localtime localtimestamp locate ' +
            'locator lock locked log log10 log2 logfile logfiles logging logical logical_reads_per_call ' +
            'logoff logon logs long loop low low_priority lower lpad lrtrim ltrim main make_set makedate maketime ' +
            'managed management manual map mapping mask master master_pos_wait match matched materialized max ' +
            'maxextents maximize maxinstances maxlen maxlogfiles maxloghistory maxlogmembers maxsize maxtrans ' +
            'md5 measures median medium member memcompress memory merge microsecond mid migration min minextents ' +
            'minimum mining minus minute minutes minvalue missing mod mode model modification modify module monitoring month ' +
            'months mount move movement multiset mutex name name_const names nan national native natural nav nchar ' +
            'nclob nested never new newline next nextval no no_write_to_binlog noarchivelog noaudit nobadfile ' +
            'nocheck nocompress nocopy nocycle nodelay nodiscardfile noentityescaping noguarantee nokeep nologfile ' +
            'nomapping nomaxvalue nominimize nominvalue nomonitoring none noneditionable nonschema noorder ' +
            'nopr nopro noprom nopromp noprompt norely noresetlogs noreverse normal norowdependencies noschemacheck ' +
            'noswitch not nothing notice notnull notrim novalidate now nowait nth_value nullif nulls num numb numbe ' +
            'nvarchar nvarchar2 object ocicoll ocidate ocidatetime ociduration ociinterval ociloblocator ocinumber ' +
            'ociref ocirefcursor ocirowid ocistring ocitype oct octet_length of off offline offset oid oidindex old ' +
            'on online only opaque open operations operator optimal optimize option optionally or oracle oracle_date ' +
            'oradata ord ordaudio orddicom orddoc order ordimage ordinality ordvideo organization orlany orlvary ' +
            'out outer outfile outline output over overflow overriding package pad parallel parallel_enable ' +
            'parameters parent parse partial partition partitions pascal passing password password_grace_time ' +
            'password_lock_time password_reuse_max password_reuse_time password_verify_function patch path patindex ' +
            'pctincrease pctthreshold pctused pctversion percent percent_rank percentile_cont percentile_disc ' +
            'performance period period_add period_diff permanent physical pi pipe pipelined pivot pluggable plugin ' +
            'policy position post_transaction pow power pragma prebuilt precedes preceding precision prediction ' +
            'prediction_cost prediction_details prediction_probability prediction_set prepare present preserve ' +
            'prior priority private private_sga privileges procedural procedure procedure_analyze processlist ' +
            'profiles project prompt protection public publishingservername purge quarter query quick quiesce quota ' +
            'quotename radians raise rand range rank raw read reads readsize rebuild record records ' +
            'recover recovery recursive recycle redo reduced ref reference referenced references referencing refresh ' +
            'regexp_like register regr_avgx regr_avgy regr_count regr_intercept regr_r2 regr_slope regr_sxx regr_sxy ' +
            'reject rekey relational relative relaylog release release_lock relies_on relocate rely rem remainder rename ' +
            'repair repeat replace replicate replication required reset resetlogs resize resource respect restore ' +
            'restricted result result_cache resumable resume retention return returning returns reuse reverse revoke ' +
            'right rlike role roles rollback rolling rollup round row row_count rowdependencies rowid rownum rows ' +
            'rtrim rules safe salt sample save savepoint sb1 sb2 sb4 scan schema schemacheck scn scope scroll ' +
            'sdo_georaster sdo_topo_geometry search sec_to_time second seconds section securefile security seed segment select ' +
            'self semi sequence sequential serializable server servererror session session_user sessions_per_user set ' +
            'sets settings sha sha1 sha2 share shared shared_pool short show shrink shutdown si_averagecolor ' +
            'si_colorhistogram si_featurelist si_positionalcolor si_stillimage si_texture siblings sid sign sin ' +
            'size size_t sizes skip slave sleep smalldatetimefromparts smallfile snapshot some soname sort soundex ' +
            'source space sparse spfile split sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows ' +
            'sql_small_result sql_variant_property sqlcode sqldata sqlerror sqlname sqlstate sqrt square standalone ' +
            'standby start starting startup statement static statistics stats_binomial_test stats_crosstab ' +
            'stats_ks_test stats_mode stats_mw_test stats_one_way_anova stats_t_test_ stats_t_test_indep ' +
            'stats_t_test_one stats_t_test_paired stats_wsr_test status std stddev stddev_pop stddev_samp stdev ' +
            'stop storage store stored str str_to_date straight_join strcmp strict string struct stuff style subdate ' +
            'subpartition subpartitions substitutable substr substring subtime subtring_index subtype success sum ' +
            'suspend switch switchoffset switchover sync synchronous synonym sys sys_xmlagg sysasm sysaux sysdate ' +
            'sysdatetimeoffset sysdba sysoper system system_user sysutcdatetime table tables tablespace tablesample tan tdo ' +
            'template temporary terminated tertiary_weights test than then thread through tier ties time time_format ' +
            'time_zone timediff timefromparts timeout timestamp timestampadd timestampdiff timezone_abbr ' +
            'timezone_minute timezone_region to to_base64 to_date to_days to_seconds todatetimeoffset trace tracking ' +
            'transaction transactional translate translation treat trigger trigger_nestlevel triggers trim truncate ' +
            'try_cast try_convert try_parse type ub1 ub2 ub4 ucase unarchived unbounded uncompress ' +
            'under undo unhex unicode uniform uninstall union unique unix_timestamp unknown unlimited unlock unnest unpivot ' +
            'unrecoverable unsafe unsigned until untrusted unusable unused update updated upgrade upped upper upsert ' +
            'url urowid usable usage use use_stored_outlines user user_data user_resources users using utc_date ' +
            'utc_timestamp uuid uuid_short validate validate_password_strength validation valist value values var ' +
            'var_samp varcharc vari varia variab variabl variable variables variance varp varraw varrawc varray ' +
            'verify version versions view virtual visible void wait wallet warning warnings week weekday weekofyear ' +
            'wellformed when whene whenev wheneve whenever where while whitespace window with within without work wrapped ' +
            'xdb xml xmlagg xmlattributes xmlcast xmlcolattval xmlelement xmlexists xmlforest xmlindex xmlnamespaces ' +
            'xmlpi xmlquery xmlroot xmlschema xmlserialize xmltable xmltype xor year year_to_month years yearweek',
          literal:
            'true false null unknown',
          built_in:
            'array bigint binary bit blob bool boolean char character date dec decimal float int int8 integer interval number ' +
            'numeric real record serial serial8 smallint text time timestamp tinyint varchar varchar2 varying void'
        },
        contains: [
          {
            className: 'string',
            begin: '\'', end: '\'',
            contains: [{begin: '\'\''}]
          },
          {
            className: 'string',
            begin: '"', end: '"',
            contains: [{begin: '""'}]
          },
          {
            className: 'string',
            begin: '`', end: '`'
          },
          hljs.C_NUMBER_MODE,
          hljs.C_BLOCK_COMMENT_MODE,
          COMMENT_MODE,
          hljs.HASH_COMMENT_MODE
        ]
      },
      hljs.C_BLOCK_COMMENT_MODE,
      COMMENT_MODE,
      hljs.HASH_COMMENT_MODE
    ]
  };
}

module.exports = sql_more;


/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvc3FsX21vcmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGNBQWM7QUFDdEMsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixZQUFZO0FBQ3BDLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiMTY0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiBMYW5ndWFnZTogU1FMIE1vcmUgKG1peCBvZiBNeVNRTCwgT3JhY2xlLCBldGMpXG4gQ29udHJpYnV0b3JzOiBOaWtvbGF5IExpc2llbmtvIDxpbmZvQG5lb3IucnU+LCBIZWlrbyBBdWd1c3QgPHBvc3RAYXVnZTg0NzIuZGU+LCBUcmF2aXMgT2RvbSA8dHJhdmlzLmEub2RvbUBnbWFpbC5jb20+LCBWYWRpbXRybyA8dmFkaW10cm9AeWFob28uY29tPiwgQmVuamFtaW4gQXVkZXIgPGJlbmphbWluLmF1ZGVyQGdtYWlsLmNvbT5cbiBXZWJzaXRlOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9TUUxcbiBDYXRlZ29yeTogZGF0YWJhc2VcbiAqL1xuXG4vKlxuXG5UaGlzIGlzIGEgcHJlc2VydmF0aW9uIG9mIHRoZSBvbGQgYmxvYXRlZCBTUUwgZ3JhbW1hciB3aGljaCBpbmNsdWRlcyBwcmV0dHkgbXVjaFxudGhlIGtpdGNoZW4gc2luayBiZWNhdXNlIG5vIG9uZSB3YXMga2VlcGluZyB0cmFjayBvZiB3aGljaCBrZXl3b3JkcyBiZWxvbmcgdG9cbndoaWNoIGRhdGFiYXNlcy4gIFRoaXMgaXMgbGlrZWx5IHRvIGJlIHJlbW92ZWQgaW4gdGhlIGZ1dHVyZS5cblxuLSBPcmFjbGUgU1FMIHNob3VsZCBiZSBmYWN0b3JlZCBpbnRvIGl0J3Mgb3duIDNyZCBwYXJ0eSBncmFtbWFyLlxuLSBNeVNRTCBzaG91bGQgYmUgZmFjdG9yZWQgb3V0IGludG8gaXQncyBvd24gM3JkIHBhcnR5IGdyYW1tYXIuXG5cbiovXG5cbmZ1bmN0aW9uIHNxbF9tb3JlKGhsanMpIHtcbiAgdmFyIENPTU1FTlRfTU9ERSA9IGhsanMuQ09NTUVOVCgnLS0nLCAnJCcpO1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICdTUUwgKG1vcmUpJyxcbiAgICBhbGlhc2VzOiBbXCJteXNxbFwiLCBcIm9yYWNsZVwiXSxcbiAgICBkaXNhYmxlQXV0b2RldGVjdDogdHJ1ZSxcbiAgICBjYXNlX2luc2Vuc2l0aXZlOiB0cnVlLFxuICAgIGlsbGVnYWw6IC9bPD57fSpdLyxcbiAgICBjb250YWluczogW1xuICAgICAge1xuICAgICAgICBiZWdpbktleXdvcmRzOlxuICAgICAgICAgICdiZWdpbiBlbmQgc3RhcnQgY29tbWl0IHJvbGxiYWNrIHNhdmVwb2ludCBsb2NrIGFsdGVyIGNyZWF0ZSBkcm9wIHJlbmFtZSBjYWxsICcgK1xuICAgICAgICAgICdkZWxldGUgZG8gaGFuZGxlciBpbnNlcnQgbG9hZCByZXBsYWNlIHNlbGVjdCB0cnVuY2F0ZSB1cGRhdGUgc2V0IHNob3cgcHJhZ21hIGdyYW50ICcgK1xuICAgICAgICAgICdtZXJnZSBkZXNjcmliZSB1c2UgZXhwbGFpbiBoZWxwIGRlY2xhcmUgcHJlcGFyZSBleGVjdXRlIGRlYWxsb2NhdGUgcmVsZWFzZSAnICtcbiAgICAgICAgICAndW5sb2NrIHB1cmdlIHJlc2V0IGNoYW5nZSBzdG9wIGFuYWx5emUgY2FjaGUgZmx1c2ggb3B0aW1pemUgcmVwYWlyIGtpbGwgJyArXG4gICAgICAgICAgJ2luc3RhbGwgdW5pbnN0YWxsIGNoZWNrc3VtIHJlc3RvcmUgY2hlY2sgYmFja3VwIHJldm9rZSBjb21tZW50IHZhbHVlcyB3aXRoJyxcbiAgICAgICAgZW5kOiAvOy8sIGVuZHNXaXRoUGFyZW50OiB0cnVlLFxuICAgICAgICBrZXl3b3Jkczoge1xuICAgICAgICAgICRwYXR0ZXJuOiAvW1xcd1xcLl0rLyxcbiAgICAgICAgICBrZXl3b3JkOlxuICAgICAgICAgICAgJ2FzIGFib3J0IGFicyBhYnNvbHV0ZSBhY2MgYWNjZSBhY2NlcCBhY2NlcHQgYWNjZXNzIGFjY2Vzc2VkIGFjY2Vzc2libGUgYWNjb3VudCBhY29zIGFjdGlvbiBhY3RpdmF0ZSBhZGQgJyArXG4gICAgICAgICAgICAnYWRkdGltZSBhZG1pbiBhZG1pbmlzdGVyIGFkdmFuY2VkIGFkdmlzZSBhZXNfZGVjcnlwdCBhZXNfZW5jcnlwdCBhZnRlciBhZ2VudCBhZ2dyZWdhdGUgYWxpIGFsaWEgYWxpYXMgJyArXG4gICAgICAgICAgICAnYWxsIGFsbG9jYXRlIGFsbG93IGFsdGVyIGFsd2F5cyBhbmFseXplIGFuY2lsbGFyeSBhbmQgYW50aSBhbnkgYW55ZGF0YSBhbnlkYXRhc2V0IGFueXNjaGVtYSBhbnl0eXBlIGFwcGx5ICcgK1xuICAgICAgICAgICAgJ2FyY2hpdmUgYXJjaGl2ZWQgYXJjaGl2ZWxvZyBhcmUgYXMgYXNjIGFzY2lpIGFzaW4gYXNzZW1ibHkgYXNzZXJ0aW9uIGFzc29jaWF0ZSBhc3luY2hyb25vdXMgYXQgYXRhbiAnICtcbiAgICAgICAgICAgICdhdG4yIGF0dHIgYXR0cmkgYXR0cmliIGF0dHJpYnUgYXR0cmlidXQgYXR0cmlidXRlIGF0dHJpYnV0ZXMgYXVkaXQgYXV0aGVudGljYXRlZCBhdXRoZW50aWNhdGlvbiBhdXRoaWQgJyArXG4gICAgICAgICAgICAnYXV0aG9ycyBhdXRvIGF1dG9hbGxvY2F0ZSBhdXRvZGJsaW5rIGF1dG9leHRlbmQgYXV0b21hdGljIGF2YWlsYWJpbGl0eSBhdmcgYmFja3VwIGJhZGZpbGUgYmFzaWNmaWxlICcgK1xuICAgICAgICAgICAgJ2JlZm9yZSBiZWdpbiBiZWdpbm5pbmcgYmVuY2htYXJrIGJldHdlZW4gYmZpbGUgYmZpbGVfYmFzZSBiaWcgYmlnZmlsZSBiaW4gYmluYXJ5X2RvdWJsZSBiaW5hcnlfZmxvYXQgJyArXG4gICAgICAgICAgICAnYmlubG9nIGJpdF9hbmQgYml0X2NvdW50IGJpdF9sZW5ndGggYml0X29yIGJpdF94b3IgYml0bWFwIGJsb2JfYmFzZSBibG9jayBibG9ja3NpemUgYm9keSBib3RoIGJvdW5kICcgK1xuICAgICAgICAgICAgJ2J1Y2tldCBidWZmZXJfY2FjaGUgYnVmZmVyX3Bvb2wgYnVpbGQgYnVsayBieSBieXRlIGJ5dGVvcmRlcm1hcmsgYnl0ZXMgY2FjaGUgY2FjaGluZyBjYWxsIGNhbGxpbmcgY2FuY2VsICcgK1xuICAgICAgICAgICAgJ2NhcGFjaXR5IGNhc2NhZGUgY2FzY2FkZWQgY2FzZSBjYXN0IGNhdGFsb2cgY2F0ZWdvcnkgY2VpbCBjZWlsaW5nIGNoYWluIGNoYW5nZSBjaGFuZ2VkIGNoYXJfYmFzZSAnICtcbiAgICAgICAgICAgICdjaGFyX2xlbmd0aCBjaGFyYWN0ZXJfbGVuZ3RoIGNoYXJhY3RlcnMgY2hhcmFjdGVyc2V0IGNoYXJpbmRleCBjaGFyc2V0IGNoYXJzZXRmb3JtIGNoYXJzZXRpZCBjaGVjayAnICtcbiAgICAgICAgICAgICdjaGVja3N1bSBjaGVja3N1bV9hZ2cgY2hpbGQgY2hvb3NlIGNociBjaHVuayBjbGFzcyBjbGVhbnVwIGNsZWFyIGNsaWVudCBjbG9iIGNsb2JfYmFzZSBjbG9uZSBjbG9zZSAnICtcbiAgICAgICAgICAgICdjbHVzdGVyX2lkIGNsdXN0ZXJfcHJvYmFiaWxpdHkgY2x1c3Rlcl9zZXQgY2x1c3RlcmluZyBjb2FsZXNjZSBjb2VyY2liaWxpdHkgY29sIGNvbGxhdGUgY29sbGF0aW9uICcgK1xuICAgICAgICAgICAgJ2NvbGxlY3QgY29sdSBjb2x1bSBjb2x1bW4gY29sdW1uX3ZhbHVlIGNvbHVtbnMgY29sdW1uc191cGRhdGVkIGNvbW1lbnQgY29tbWl0IGNvbXBhY3QgY29tcGF0aWJpbGl0eSAnICtcbiAgICAgICAgICAgICdjb21waWxlZCBjb21wbGV0ZSBjb21wb3NpdGVfbGltaXQgY29tcG91bmQgY29tcHJlc3MgY29tcHV0ZSBjb25jYXQgY29uY2F0X3dzIGNvbmN1cnJlbnQgY29uZmlybSBjb25uICcgK1xuICAgICAgICAgICAgJ2Nvbm5lYyBjb25uZWN0IGNvbm5lY3RfYnlfaXNjeWNsZSBjb25uZWN0X2J5X2lzbGVhZiBjb25uZWN0X2J5X3Jvb3QgY29ubmVjdF90aW1lIGNvbm5lY3Rpb24gJyArXG4gICAgICAgICAgICAnY29uc2lkZXIgY29uc2lzdGVudCBjb25zdGFudCBjb25zdHJhaW50IGNvbnN0cmFpbnRzIGNvbnN0cnVjdG9yIGNvbnRhaW5lciBjb250ZW50IGNvbnRlbnRzIGNvbnRleHQgJyArXG4gICAgICAgICAgICAnY29udHJpYnV0b3JzIGNvbnRyb2xmaWxlIGNvbnYgY29udmVydCBjb252ZXJ0X3R6IGNvcnIgY29ycl9rIGNvcnJfcyBjb3JyZXNwb25kaW5nIGNvcnJ1cHRpb24gY29zIGNvc3QgJyArXG4gICAgICAgICAgICAnY291bnQgY291bnRfYmlnIGNvdW50ZWQgY292YXJfcG9wIGNvdmFyX3NhbXAgY3B1X3Blcl9jYWxsIGNwdV9wZXJfc2Vzc2lvbiBjcmMzMiBjcmVhdGUgY3JlYXRpb24gJyArXG4gICAgICAgICAgICAnY3JpdGljYWwgY3Jvc3MgY3ViZSBjdW1lX2Rpc3QgY3VyZGF0ZSBjdXJyZW50IGN1cnJlbnRfZGF0ZSBjdXJyZW50X3RpbWUgY3VycmVudF90aW1lc3RhbXAgY3VycmVudF91c2VyICcgK1xuICAgICAgICAgICAgJ2N1cnNvciBjdXJ0aW1lIGN1c3RvbWRhdHVtIGN5Y2xlIGRhdGEgZGF0YWJhc2UgZGF0YWJhc2VzIGRhdGFmaWxlIGRhdGFmaWxlcyBkYXRhbGVuZ3RoIGRhdGVfYWRkICcgK1xuICAgICAgICAgICAgJ2RhdGVfY2FjaGUgZGF0ZV9mb3JtYXQgZGF0ZV9zdWIgZGF0ZWFkZCBkYXRlZGlmZiBkYXRlZnJvbXBhcnRzIGRhdGVuYW1lIGRhdGVwYXJ0IGRhdGV0aW1lMmZyb21wYXJ0cyAnICtcbiAgICAgICAgICAgICdkYXkgZGF5X3RvX3NlY29uZCBkYXluYW1lIGRheW9mbW9udGggZGF5b2Z3ZWVrIGRheW9meWVhciBkYXlzIGRiX3JvbGVfY2hhbmdlIGRidGltZXpvbmUgZGRsIGRlYWxsb2NhdGUgJyArXG4gICAgICAgICAgICAnZGVjbGFyZSBkZWNvZGUgZGVjb21wb3NlIGRlY3JlbWVudCBkZWNyeXB0IGRlZHVwbGljYXRlIGRlZiBkZWZhIGRlZmF1IGRlZmF1bCBkZWZhdWx0IGRlZmF1bHRzICcgK1xuICAgICAgICAgICAgJ2RlZmVycmVkIGRlZmkgZGVmaW4gZGVmaW5lIGRlZ3JlZXMgZGVsYXllZCBkZWxlZ2F0ZSBkZWxldGUgZGVsZXRlX2FsbCBkZWxpbWl0ZWQgZGVtYW5kIGRlbnNlX3JhbmsgJyArXG4gICAgICAgICAgICAnZGVwdGggZGVxdWV1ZSBkZXNfZGVjcnlwdCBkZXNfZW5jcnlwdCBkZXNfa2V5X2ZpbGUgZGVzYyBkZXNjciBkZXNjcmkgZGVzY3JpYiBkZXNjcmliZSBkZXNjcmlwdG9yICcgK1xuICAgICAgICAgICAgJ2RldGVybWluaXN0aWMgZGlhZ25vc3RpY3MgZGlmZmVyZW5jZSBkaW1lbnNpb24gZGlyZWN0X2xvYWQgZGlyZWN0b3J5IGRpc2FibGUgZGlzYWJsZV9hbGwgJyArXG4gICAgICAgICAgICAnZGlzYWxsb3cgZGlzYXNzb2NpYXRlIGRpc2NhcmRmaWxlIGRpc2Nvbm5lY3QgZGlza2dyb3VwIGRpc3RpbmN0IGRpc3RpbmN0cm93IGRpc3RyaWJ1dGUgZGlzdHJpYnV0ZWQgZGl2ICcgK1xuICAgICAgICAgICAgJ2RvIGRvY3VtZW50IGRvbWFpbiBkb3RuZXQgZG91YmxlIGRvd25ncmFkZSBkcm9wIGR1bXBmaWxlIGR1cGxpY2F0ZSBkdXJhdGlvbiBlYWNoIGVkaXRpb24gZWRpdGlvbmFibGUgJyArXG4gICAgICAgICAgICAnZWRpdGlvbnMgZWxlbWVudCBlbGxpcHNpcyBlbHNlIGVsc2lmIGVsdCBlbXB0eSBlbmFibGUgZW5hYmxlX2FsbCBlbmNsb3NlZCBlbmNvZGUgZW5jb2RpbmcgZW5jcnlwdCAnICtcbiAgICAgICAgICAgICdlbmQgZW5kLWV4ZWMgZW5kaWFuIGVuZm9yY2VkIGVuZ2luZSBlbmdpbmVzIGVucXVldWUgZW50ZXJwcmlzZSBlbnRpdHllc2NhcGluZyBlb21vbnRoIGVycm9yIGVycm9ycyAnICtcbiAgICAgICAgICAgICdlc2NhcGVkIGV2YWxuYW1lIGV2YWx1YXRlIGV2ZW50IGV2ZW50ZGF0YSBldmVudHMgZXhjZXB0IGV4Y2VwdGlvbiBleGNlcHRpb25zIGV4Y2hhbmdlIGV4Y2x1ZGUgZXhjbHVkaW5nICcgK1xuICAgICAgICAgICAgJ2V4ZWN1IGV4ZWN1dCBleGVjdXRlIGV4ZW1wdCBleGlzdHMgZXhpdCBleHAgZXhwaXJlIGV4cGxhaW4gZXhwbG9kZSBleHBvcnQgZXhwb3J0X3NldCBleHRlbmRlZCBleHRlbnQgZXh0ZXJuYWwgJyArXG4gICAgICAgICAgICAnZXh0ZXJuYWxfMSBleHRlcm5hbF8yIGV4dGVybmFsbHkgZXh0cmFjdCBmYWlsZWQgZmFpbGVkX2xvZ2luX2F0dGVtcHRzIGZhaWxvdmVyIGZhaWx1cmUgZmFyIGZhc3QgJyArXG4gICAgICAgICAgICAnZmVhdHVyZV9zZXQgZmVhdHVyZV92YWx1ZSBmZXRjaCBmaWVsZCBmaWVsZHMgZmlsZSBmaWxlX25hbWVfY29udmVydCBmaWxlc3lzdGVtX2xpa2VfbG9nZ2luZyBmaW5hbCAnICtcbiAgICAgICAgICAgICdmaW5pc2ggZmlyc3QgZmlyc3RfdmFsdWUgZml4ZWQgZmxhc2hfY2FjaGUgZmxhc2hiYWNrIGZsb29yIGZsdXNoIGZvbGxvd2luZyBmb2xsb3dzIGZvciBmb3JhbGwgZm9yY2UgZm9yZWlnbiAnICtcbiAgICAgICAgICAgICdmb3JtIGZvcm1hIGZvcm1hdCBmb3VuZCBmb3VuZF9yb3dzIGZyZWVsaXN0IGZyZWVsaXN0cyBmcmVlcG9vbHMgZnJlc2ggZnJvbSBmcm9tX2Jhc2U2NCBmcm9tX2RheXMgJyArXG4gICAgICAgICAgICAnZnRwIGZ1bGwgZnVuY3Rpb24gZ2VuZXJhbCBnZW5lcmF0ZWQgZ2V0IGdldF9mb3JtYXQgZ2V0X2xvY2sgZ2V0ZGF0ZSBnZXR1dGNkYXRlIGdsb2JhbCBnbG9iYWxfbmFtZSAnICtcbiAgICAgICAgICAgICdnbG9iYWxseSBnbyBnb3RvIGdyYW50IGdyYW50cyBncmVhdGVzdCBncm91cCBncm91cF9jb25jYXQgZ3JvdXBfaWQgZ3JvdXBpbmcgZ3JvdXBpbmdfaWQgZ3JvdXBzICcgK1xuICAgICAgICAgICAgJ2d0aWRfc3VidHJhY3QgZ3VhcmFudGVlIGd1YXJkIGhhbmRsZXIgaGFzaCBoYXNoa2V5cyBoYXZpbmcgaGVhIGhlYWQgaGVhZGkgaGVhZGluIGhlYWRpbmcgaGVhcCBoZWxwIGhleCAnICtcbiAgICAgICAgICAgICdoaWVyYXJjaHkgaGlnaCBoaWdoX3ByaW9yaXR5IGhvc3RzIGhvdXIgaG91cnMgaHR0cCBpZCBpZGVudF9jdXJyZW50IGlkZW50X2luY3IgaWRlbnRfc2VlZCBpZGVudGlmaWVkICcgK1xuICAgICAgICAgICAgJ2lkZW50aXR5IGlkbGVfdGltZSBpZiBpZm51bGwgaWdub3JlIGlpZiBpbGlrZSBpbG0gaW1tZWRpYXRlIGltcG9ydCBpbiBpbmNsdWRlIGluY2x1ZGluZyBpbmNyZW1lbnQgJyArXG4gICAgICAgICAgICAnaW5kZXggaW5kZXhlcyBpbmRleGluZyBpbmRleHR5cGUgaW5kaWNhdG9yIGluZGljZXMgaW5ldDZfYXRvbiBpbmV0Nl9udG9hIGluZXRfYXRvbiBpbmV0X250b2EgaW5maWxlICcgK1xuICAgICAgICAgICAgJ2luaXRpYWwgaW5pdGlhbGl6ZWQgaW5pdGlhbGx5IGluaXRyYW5zIGlubWVtb3J5IGlubmVyIGlubm9kYiBpbnB1dCBpbnNlcnQgaW5zdGFsbCBpbnN0YW5jZSBpbnN0YW50aWFibGUgJyArXG4gICAgICAgICAgICAnaW5zdHIgaW50ZXJmYWNlIGludGVybGVhdmVkIGludGVyc2VjdCBpbnRvIGludmFsaWRhdGUgaW52aXNpYmxlIGlzIGlzX2ZyZWVfbG9jayBpc19pcHY0IGlzX2lwdjRfY29tcGF0ICcgK1xuICAgICAgICAgICAgJ2lzX25vdCBpc19ub3RfbnVsbCBpc191c2VkX2xvY2sgaXNkYXRlIGlzbnVsbCBpc29sYXRpb24gaXRlcmF0ZSBqYXZhIGpvaW4ganNvbiBqc29uX2V4aXN0cyAnICtcbiAgICAgICAgICAgICdrZWVwIGtlZXBfZHVwbGljYXRlcyBrZXkga2V5cyBraWxsIGxhbmd1YWdlIGxhcmdlIGxhc3QgbGFzdF9kYXkgbGFzdF9pbnNlcnRfaWQgbGFzdF92YWx1ZSBsYXRlcmFsIGxheCBsY2FzZSAnICtcbiAgICAgICAgICAgICdsZWFkIGxlYWRpbmcgbGVhc3QgbGVhdmVzIGxlZnQgbGVuIGxlbmdodCBsZW5ndGggbGVzcyBsZXZlbCBsZXZlbHMgbGlicmFyeSBsaWtlIGxpa2UyIGxpa2U0IGxpa2VjIGxpbWl0ICcgK1xuICAgICAgICAgICAgJ2xpbmVzIGxpbmsgbGlzdCBsaXN0YWdnIGxpdHRsZSBsbiBsb2FkIGxvYWRfZmlsZSBsb2IgbG9icyBsb2NhbCBsb2NhbHRpbWUgbG9jYWx0aW1lc3RhbXAgbG9jYXRlICcgK1xuICAgICAgICAgICAgJ2xvY2F0b3IgbG9jayBsb2NrZWQgbG9nIGxvZzEwIGxvZzIgbG9nZmlsZSBsb2dmaWxlcyBsb2dnaW5nIGxvZ2ljYWwgbG9naWNhbF9yZWFkc19wZXJfY2FsbCAnICtcbiAgICAgICAgICAgICdsb2dvZmYgbG9nb24gbG9ncyBsb25nIGxvb3AgbG93IGxvd19wcmlvcml0eSBsb3dlciBscGFkIGxydHJpbSBsdHJpbSBtYWluIG1ha2Vfc2V0IG1ha2VkYXRlIG1ha2V0aW1lICcgK1xuICAgICAgICAgICAgJ21hbmFnZWQgbWFuYWdlbWVudCBtYW51YWwgbWFwIG1hcHBpbmcgbWFzayBtYXN0ZXIgbWFzdGVyX3Bvc193YWl0IG1hdGNoIG1hdGNoZWQgbWF0ZXJpYWxpemVkIG1heCAnICtcbiAgICAgICAgICAgICdtYXhleHRlbnRzIG1heGltaXplIG1heGluc3RhbmNlcyBtYXhsZW4gbWF4bG9nZmlsZXMgbWF4bG9naGlzdG9yeSBtYXhsb2dtZW1iZXJzIG1heHNpemUgbWF4dHJhbnMgJyArXG4gICAgICAgICAgICAnbWQ1IG1lYXN1cmVzIG1lZGlhbiBtZWRpdW0gbWVtYmVyIG1lbWNvbXByZXNzIG1lbW9yeSBtZXJnZSBtaWNyb3NlY29uZCBtaWQgbWlncmF0aW9uIG1pbiBtaW5leHRlbnRzICcgK1xuICAgICAgICAgICAgJ21pbmltdW0gbWluaW5nIG1pbnVzIG1pbnV0ZSBtaW51dGVzIG1pbnZhbHVlIG1pc3NpbmcgbW9kIG1vZGUgbW9kZWwgbW9kaWZpY2F0aW9uIG1vZGlmeSBtb2R1bGUgbW9uaXRvcmluZyBtb250aCAnICtcbiAgICAgICAgICAgICdtb250aHMgbW91bnQgbW92ZSBtb3ZlbWVudCBtdWx0aXNldCBtdXRleCBuYW1lIG5hbWVfY29uc3QgbmFtZXMgbmFuIG5hdGlvbmFsIG5hdGl2ZSBuYXR1cmFsIG5hdiBuY2hhciAnICtcbiAgICAgICAgICAgICduY2xvYiBuZXN0ZWQgbmV2ZXIgbmV3IG5ld2xpbmUgbmV4dCBuZXh0dmFsIG5vIG5vX3dyaXRlX3RvX2JpbmxvZyBub2FyY2hpdmVsb2cgbm9hdWRpdCBub2JhZGZpbGUgJyArXG4gICAgICAgICAgICAnbm9jaGVjayBub2NvbXByZXNzIG5vY29weSBub2N5Y2xlIG5vZGVsYXkgbm9kaXNjYXJkZmlsZSBub2VudGl0eWVzY2FwaW5nIG5vZ3VhcmFudGVlIG5va2VlcCBub2xvZ2ZpbGUgJyArXG4gICAgICAgICAgICAnbm9tYXBwaW5nIG5vbWF4dmFsdWUgbm9taW5pbWl6ZSBub21pbnZhbHVlIG5vbW9uaXRvcmluZyBub25lIG5vbmVkaXRpb25hYmxlIG5vbnNjaGVtYSBub29yZGVyICcgK1xuICAgICAgICAgICAgJ25vcHIgbm9wcm8gbm9wcm9tIG5vcHJvbXAgbm9wcm9tcHQgbm9yZWx5IG5vcmVzZXRsb2dzIG5vcmV2ZXJzZSBub3JtYWwgbm9yb3dkZXBlbmRlbmNpZXMgbm9zY2hlbWFjaGVjayAnICtcbiAgICAgICAgICAgICdub3N3aXRjaCBub3Qgbm90aGluZyBub3RpY2Ugbm90bnVsbCBub3RyaW0gbm92YWxpZGF0ZSBub3cgbm93YWl0IG50aF92YWx1ZSBudWxsaWYgbnVsbHMgbnVtIG51bWIgbnVtYmUgJyArXG4gICAgICAgICAgICAnbnZhcmNoYXIgbnZhcmNoYXIyIG9iamVjdCBvY2ljb2xsIG9jaWRhdGUgb2NpZGF0ZXRpbWUgb2NpZHVyYXRpb24gb2NpaW50ZXJ2YWwgb2NpbG9ibG9jYXRvciBvY2ludW1iZXIgJyArXG4gICAgICAgICAgICAnb2NpcmVmIG9jaXJlZmN1cnNvciBvY2lyb3dpZCBvY2lzdHJpbmcgb2NpdHlwZSBvY3Qgb2N0ZXRfbGVuZ3RoIG9mIG9mZiBvZmZsaW5lIG9mZnNldCBvaWQgb2lkaW5kZXggb2xkICcgK1xuICAgICAgICAgICAgJ29uIG9ubGluZSBvbmx5IG9wYXF1ZSBvcGVuIG9wZXJhdGlvbnMgb3BlcmF0b3Igb3B0aW1hbCBvcHRpbWl6ZSBvcHRpb24gb3B0aW9uYWxseSBvciBvcmFjbGUgb3JhY2xlX2RhdGUgJyArXG4gICAgICAgICAgICAnb3JhZGF0YSBvcmQgb3JkYXVkaW8gb3JkZGljb20gb3JkZG9jIG9yZGVyIG9yZGltYWdlIG9yZGluYWxpdHkgb3JkdmlkZW8gb3JnYW5pemF0aW9uIG9ybGFueSBvcmx2YXJ5ICcgK1xuICAgICAgICAgICAgJ291dCBvdXRlciBvdXRmaWxlIG91dGxpbmUgb3V0cHV0IG92ZXIgb3ZlcmZsb3cgb3ZlcnJpZGluZyBwYWNrYWdlIHBhZCBwYXJhbGxlbCBwYXJhbGxlbF9lbmFibGUgJyArXG4gICAgICAgICAgICAncGFyYW1ldGVycyBwYXJlbnQgcGFyc2UgcGFydGlhbCBwYXJ0aXRpb24gcGFydGl0aW9ucyBwYXNjYWwgcGFzc2luZyBwYXNzd29yZCBwYXNzd29yZF9ncmFjZV90aW1lICcgK1xuICAgICAgICAgICAgJ3Bhc3N3b3JkX2xvY2tfdGltZSBwYXNzd29yZF9yZXVzZV9tYXggcGFzc3dvcmRfcmV1c2VfdGltZSBwYXNzd29yZF92ZXJpZnlfZnVuY3Rpb24gcGF0Y2ggcGF0aCBwYXRpbmRleCAnICtcbiAgICAgICAgICAgICdwY3RpbmNyZWFzZSBwY3R0aHJlc2hvbGQgcGN0dXNlZCBwY3R2ZXJzaW9uIHBlcmNlbnQgcGVyY2VudF9yYW5rIHBlcmNlbnRpbGVfY29udCBwZXJjZW50aWxlX2Rpc2MgJyArXG4gICAgICAgICAgICAncGVyZm9ybWFuY2UgcGVyaW9kIHBlcmlvZF9hZGQgcGVyaW9kX2RpZmYgcGVybWFuZW50IHBoeXNpY2FsIHBpIHBpcGUgcGlwZWxpbmVkIHBpdm90IHBsdWdnYWJsZSBwbHVnaW4gJyArXG4gICAgICAgICAgICAncG9saWN5IHBvc2l0aW9uIHBvc3RfdHJhbnNhY3Rpb24gcG93IHBvd2VyIHByYWdtYSBwcmVidWlsdCBwcmVjZWRlcyBwcmVjZWRpbmcgcHJlY2lzaW9uIHByZWRpY3Rpb24gJyArXG4gICAgICAgICAgICAncHJlZGljdGlvbl9jb3N0IHByZWRpY3Rpb25fZGV0YWlscyBwcmVkaWN0aW9uX3Byb2JhYmlsaXR5IHByZWRpY3Rpb25fc2V0IHByZXBhcmUgcHJlc2VudCBwcmVzZXJ2ZSAnICtcbiAgICAgICAgICAgICdwcmlvciBwcmlvcml0eSBwcml2YXRlIHByaXZhdGVfc2dhIHByaXZpbGVnZXMgcHJvY2VkdXJhbCBwcm9jZWR1cmUgcHJvY2VkdXJlX2FuYWx5emUgcHJvY2Vzc2xpc3QgJyArXG4gICAgICAgICAgICAncHJvZmlsZXMgcHJvamVjdCBwcm9tcHQgcHJvdGVjdGlvbiBwdWJsaWMgcHVibGlzaGluZ3NlcnZlcm5hbWUgcHVyZ2UgcXVhcnRlciBxdWVyeSBxdWljayBxdWllc2NlIHF1b3RhICcgK1xuICAgICAgICAgICAgJ3F1b3RlbmFtZSByYWRpYW5zIHJhaXNlIHJhbmQgcmFuZ2UgcmFuayByYXcgcmVhZCByZWFkcyByZWFkc2l6ZSByZWJ1aWxkIHJlY29yZCByZWNvcmRzICcgK1xuICAgICAgICAgICAgJ3JlY292ZXIgcmVjb3ZlcnkgcmVjdXJzaXZlIHJlY3ljbGUgcmVkbyByZWR1Y2VkIHJlZiByZWZlcmVuY2UgcmVmZXJlbmNlZCByZWZlcmVuY2VzIHJlZmVyZW5jaW5nIHJlZnJlc2ggJyArXG4gICAgICAgICAgICAncmVnZXhwX2xpa2UgcmVnaXN0ZXIgcmVncl9hdmd4IHJlZ3JfYXZneSByZWdyX2NvdW50IHJlZ3JfaW50ZXJjZXB0IHJlZ3JfcjIgcmVncl9zbG9wZSByZWdyX3N4eCByZWdyX3N4eSAnICtcbiAgICAgICAgICAgICdyZWplY3QgcmVrZXkgcmVsYXRpb25hbCByZWxhdGl2ZSByZWxheWxvZyByZWxlYXNlIHJlbGVhc2VfbG9jayByZWxpZXNfb24gcmVsb2NhdGUgcmVseSByZW0gcmVtYWluZGVyIHJlbmFtZSAnICtcbiAgICAgICAgICAgICdyZXBhaXIgcmVwZWF0IHJlcGxhY2UgcmVwbGljYXRlIHJlcGxpY2F0aW9uIHJlcXVpcmVkIHJlc2V0IHJlc2V0bG9ncyByZXNpemUgcmVzb3VyY2UgcmVzcGVjdCByZXN0b3JlICcgK1xuICAgICAgICAgICAgJ3Jlc3RyaWN0ZWQgcmVzdWx0IHJlc3VsdF9jYWNoZSByZXN1bWFibGUgcmVzdW1lIHJldGVudGlvbiByZXR1cm4gcmV0dXJuaW5nIHJldHVybnMgcmV1c2UgcmV2ZXJzZSByZXZva2UgJyArXG4gICAgICAgICAgICAncmlnaHQgcmxpa2Ugcm9sZSByb2xlcyByb2xsYmFjayByb2xsaW5nIHJvbGx1cCByb3VuZCByb3cgcm93X2NvdW50IHJvd2RlcGVuZGVuY2llcyByb3dpZCByb3dudW0gcm93cyAnICtcbiAgICAgICAgICAgICdydHJpbSBydWxlcyBzYWZlIHNhbHQgc2FtcGxlIHNhdmUgc2F2ZXBvaW50IHNiMSBzYjIgc2I0IHNjYW4gc2NoZW1hIHNjaGVtYWNoZWNrIHNjbiBzY29wZSBzY3JvbGwgJyArXG4gICAgICAgICAgICAnc2RvX2dlb3Jhc3RlciBzZG9fdG9wb19nZW9tZXRyeSBzZWFyY2ggc2VjX3RvX3RpbWUgc2Vjb25kIHNlY29uZHMgc2VjdGlvbiBzZWN1cmVmaWxlIHNlY3VyaXR5IHNlZWQgc2VnbWVudCBzZWxlY3QgJyArXG4gICAgICAgICAgICAnc2VsZiBzZW1pIHNlcXVlbmNlIHNlcXVlbnRpYWwgc2VyaWFsaXphYmxlIHNlcnZlciBzZXJ2ZXJlcnJvciBzZXNzaW9uIHNlc3Npb25fdXNlciBzZXNzaW9uc19wZXJfdXNlciBzZXQgJyArXG4gICAgICAgICAgICAnc2V0cyBzZXR0aW5ncyBzaGEgc2hhMSBzaGEyIHNoYXJlIHNoYXJlZCBzaGFyZWRfcG9vbCBzaG9ydCBzaG93IHNocmluayBzaHV0ZG93biBzaV9hdmVyYWdlY29sb3IgJyArXG4gICAgICAgICAgICAnc2lfY29sb3JoaXN0b2dyYW0gc2lfZmVhdHVyZWxpc3Qgc2lfcG9zaXRpb25hbGNvbG9yIHNpX3N0aWxsaW1hZ2Ugc2lfdGV4dHVyZSBzaWJsaW5ncyBzaWQgc2lnbiBzaW4gJyArXG4gICAgICAgICAgICAnc2l6ZSBzaXplX3Qgc2l6ZXMgc2tpcCBzbGF2ZSBzbGVlcCBzbWFsbGRhdGV0aW1lZnJvbXBhcnRzIHNtYWxsZmlsZSBzbmFwc2hvdCBzb21lIHNvbmFtZSBzb3J0IHNvdW5kZXggJyArXG4gICAgICAgICAgICAnc291cmNlIHNwYWNlIHNwYXJzZSBzcGZpbGUgc3BsaXQgc3FsIHNxbF9iaWdfcmVzdWx0IHNxbF9idWZmZXJfcmVzdWx0IHNxbF9jYWNoZSBzcWxfY2FsY19mb3VuZF9yb3dzICcgK1xuICAgICAgICAgICAgJ3NxbF9zbWFsbF9yZXN1bHQgc3FsX3ZhcmlhbnRfcHJvcGVydHkgc3FsY29kZSBzcWxkYXRhIHNxbGVycm9yIHNxbG5hbWUgc3Fsc3RhdGUgc3FydCBzcXVhcmUgc3RhbmRhbG9uZSAnICtcbiAgICAgICAgICAgICdzdGFuZGJ5IHN0YXJ0IHN0YXJ0aW5nIHN0YXJ0dXAgc3RhdGVtZW50IHN0YXRpYyBzdGF0aXN0aWNzIHN0YXRzX2Jpbm9taWFsX3Rlc3Qgc3RhdHNfY3Jvc3N0YWIgJyArXG4gICAgICAgICAgICAnc3RhdHNfa3NfdGVzdCBzdGF0c19tb2RlIHN0YXRzX213X3Rlc3Qgc3RhdHNfb25lX3dheV9hbm92YSBzdGF0c190X3Rlc3RfIHN0YXRzX3RfdGVzdF9pbmRlcCAnICtcbiAgICAgICAgICAgICdzdGF0c190X3Rlc3Rfb25lIHN0YXRzX3RfdGVzdF9wYWlyZWQgc3RhdHNfd3NyX3Rlc3Qgc3RhdHVzIHN0ZCBzdGRkZXYgc3RkZGV2X3BvcCBzdGRkZXZfc2FtcCBzdGRldiAnICtcbiAgICAgICAgICAgICdzdG9wIHN0b3JhZ2Ugc3RvcmUgc3RvcmVkIHN0ciBzdHJfdG9fZGF0ZSBzdHJhaWdodF9qb2luIHN0cmNtcCBzdHJpY3Qgc3RyaW5nIHN0cnVjdCBzdHVmZiBzdHlsZSBzdWJkYXRlICcgK1xuICAgICAgICAgICAgJ3N1YnBhcnRpdGlvbiBzdWJwYXJ0aXRpb25zIHN1YnN0aXR1dGFibGUgc3Vic3RyIHN1YnN0cmluZyBzdWJ0aW1lIHN1YnRyaW5nX2luZGV4IHN1YnR5cGUgc3VjY2VzcyBzdW0gJyArXG4gICAgICAgICAgICAnc3VzcGVuZCBzd2l0Y2ggc3dpdGNob2Zmc2V0IHN3aXRjaG92ZXIgc3luYyBzeW5jaHJvbm91cyBzeW5vbnltIHN5cyBzeXNfeG1sYWdnIHN5c2FzbSBzeXNhdXggc3lzZGF0ZSAnICtcbiAgICAgICAgICAgICdzeXNkYXRldGltZW9mZnNldCBzeXNkYmEgc3lzb3BlciBzeXN0ZW0gc3lzdGVtX3VzZXIgc3lzdXRjZGF0ZXRpbWUgdGFibGUgdGFibGVzIHRhYmxlc3BhY2UgdGFibGVzYW1wbGUgdGFuIHRkbyAnICtcbiAgICAgICAgICAgICd0ZW1wbGF0ZSB0ZW1wb3JhcnkgdGVybWluYXRlZCB0ZXJ0aWFyeV93ZWlnaHRzIHRlc3QgdGhhbiB0aGVuIHRocmVhZCB0aHJvdWdoIHRpZXIgdGllcyB0aW1lIHRpbWVfZm9ybWF0ICcgK1xuICAgICAgICAgICAgJ3RpbWVfem9uZSB0aW1lZGlmZiB0aW1lZnJvbXBhcnRzIHRpbWVvdXQgdGltZXN0YW1wIHRpbWVzdGFtcGFkZCB0aW1lc3RhbXBkaWZmIHRpbWV6b25lX2FiYnIgJyArXG4gICAgICAgICAgICAndGltZXpvbmVfbWludXRlIHRpbWV6b25lX3JlZ2lvbiB0byB0b19iYXNlNjQgdG9fZGF0ZSB0b19kYXlzIHRvX3NlY29uZHMgdG9kYXRldGltZW9mZnNldCB0cmFjZSB0cmFja2luZyAnICtcbiAgICAgICAgICAgICd0cmFuc2FjdGlvbiB0cmFuc2FjdGlvbmFsIHRyYW5zbGF0ZSB0cmFuc2xhdGlvbiB0cmVhdCB0cmlnZ2VyIHRyaWdnZXJfbmVzdGxldmVsIHRyaWdnZXJzIHRyaW0gdHJ1bmNhdGUgJyArXG4gICAgICAgICAgICAndHJ5X2Nhc3QgdHJ5X2NvbnZlcnQgdHJ5X3BhcnNlIHR5cGUgdWIxIHViMiB1YjQgdWNhc2UgdW5hcmNoaXZlZCB1bmJvdW5kZWQgdW5jb21wcmVzcyAnICtcbiAgICAgICAgICAgICd1bmRlciB1bmRvIHVuaGV4IHVuaWNvZGUgdW5pZm9ybSB1bmluc3RhbGwgdW5pb24gdW5pcXVlIHVuaXhfdGltZXN0YW1wIHVua25vd24gdW5saW1pdGVkIHVubG9jayB1bm5lc3QgdW5waXZvdCAnICtcbiAgICAgICAgICAgICd1bnJlY292ZXJhYmxlIHVuc2FmZSB1bnNpZ25lZCB1bnRpbCB1bnRydXN0ZWQgdW51c2FibGUgdW51c2VkIHVwZGF0ZSB1cGRhdGVkIHVwZ3JhZGUgdXBwZWQgdXBwZXIgdXBzZXJ0ICcgK1xuICAgICAgICAgICAgJ3VybCB1cm93aWQgdXNhYmxlIHVzYWdlIHVzZSB1c2Vfc3RvcmVkX291dGxpbmVzIHVzZXIgdXNlcl9kYXRhIHVzZXJfcmVzb3VyY2VzIHVzZXJzIHVzaW5nIHV0Y19kYXRlICcgK1xuICAgICAgICAgICAgJ3V0Y190aW1lc3RhbXAgdXVpZCB1dWlkX3Nob3J0IHZhbGlkYXRlIHZhbGlkYXRlX3Bhc3N3b3JkX3N0cmVuZ3RoIHZhbGlkYXRpb24gdmFsaXN0IHZhbHVlIHZhbHVlcyB2YXIgJyArXG4gICAgICAgICAgICAndmFyX3NhbXAgdmFyY2hhcmMgdmFyaSB2YXJpYSB2YXJpYWIgdmFyaWFibCB2YXJpYWJsZSB2YXJpYWJsZXMgdmFyaWFuY2UgdmFycCB2YXJyYXcgdmFycmF3YyB2YXJyYXkgJyArXG4gICAgICAgICAgICAndmVyaWZ5IHZlcnNpb24gdmVyc2lvbnMgdmlldyB2aXJ0dWFsIHZpc2libGUgdm9pZCB3YWl0IHdhbGxldCB3YXJuaW5nIHdhcm5pbmdzIHdlZWsgd2Vla2RheSB3ZWVrb2Z5ZWFyICcgK1xuICAgICAgICAgICAgJ3dlbGxmb3JtZWQgd2hlbiB3aGVuZSB3aGVuZXYgd2hlbmV2ZSB3aGVuZXZlciB3aGVyZSB3aGlsZSB3aGl0ZXNwYWNlIHdpbmRvdyB3aXRoIHdpdGhpbiB3aXRob3V0IHdvcmsgd3JhcHBlZCAnICtcbiAgICAgICAgICAgICd4ZGIgeG1sIHhtbGFnZyB4bWxhdHRyaWJ1dGVzIHhtbGNhc3QgeG1sY29sYXR0dmFsIHhtbGVsZW1lbnQgeG1sZXhpc3RzIHhtbGZvcmVzdCB4bWxpbmRleCB4bWxuYW1lc3BhY2VzICcgK1xuICAgICAgICAgICAgJ3htbHBpIHhtbHF1ZXJ5IHhtbHJvb3QgeG1sc2NoZW1hIHhtbHNlcmlhbGl6ZSB4bWx0YWJsZSB4bWx0eXBlIHhvciB5ZWFyIHllYXJfdG9fbW9udGggeWVhcnMgeWVhcndlZWsnLFxuICAgICAgICAgIGxpdGVyYWw6XG4gICAgICAgICAgICAndHJ1ZSBmYWxzZSBudWxsIHVua25vd24nLFxuICAgICAgICAgIGJ1aWx0X2luOlxuICAgICAgICAgICAgJ2FycmF5IGJpZ2ludCBiaW5hcnkgYml0IGJsb2IgYm9vbCBib29sZWFuIGNoYXIgY2hhcmFjdGVyIGRhdGUgZGVjIGRlY2ltYWwgZmxvYXQgaW50IGludDggaW50ZWdlciBpbnRlcnZhbCBudW1iZXIgJyArXG4gICAgICAgICAgICAnbnVtZXJpYyByZWFsIHJlY29yZCBzZXJpYWwgc2VyaWFsOCBzbWFsbGludCB0ZXh0IHRpbWUgdGltZXN0YW1wIHRpbnlpbnQgdmFyY2hhciB2YXJjaGFyMiB2YXJ5aW5nIHZvaWQnXG4gICAgICAgIH0sXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICAgICAgICAgIGJlZ2luOiAnXFwnJywgZW5kOiAnXFwnJyxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbe2JlZ2luOiAnXFwnXFwnJ31dXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgYmVnaW46ICdcIicsIGVuZDogJ1wiJyxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbe2JlZ2luOiAnXCJcIid9XVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICAgICAgICAgIGJlZ2luOiAnYCcsIGVuZDogJ2AnXG4gICAgICAgICAgfSxcbiAgICAgICAgICBobGpzLkNfTlVNQkVSX01PREUsXG4gICAgICAgICAgaGxqcy5DX0JMT0NLX0NPTU1FTlRfTU9ERSxcbiAgICAgICAgICBDT01NRU5UX01PREUsXG4gICAgICAgICAgaGxqcy5IQVNIX0NPTU1FTlRfTU9ERVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgaGxqcy5DX0JMT0NLX0NPTU1FTlRfTU9ERSxcbiAgICAgIENPTU1FTlRfTU9ERSxcbiAgICAgIGhsanMuSEFTSF9DT01NRU5UX01PREVcbiAgICBdXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3FsX21vcmU7XG4iXSwic291cmNlUm9vdCI6IiJ9