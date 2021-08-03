(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[164],{

/***/ "./node_modules/highlight.js/lib/languages/sql.js":
/*!********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/sql.js ***!
  \********************************************************/
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

/**
 * Any of the passed expresssions may match
 *
 * Creates a huge this | this | that | that match
 * @param {(RegExp | string)[] } args
 * @returns {string}
 */
function either(...args) {
  const joined = '(' + args.map((x) => source(x)).join("|") + ")";
  return joined;
}

/*
 Language: SQL
 Website: https://en.wikipedia.org/wiki/SQL
 Category: common, database
 */

function sql(hljs) {
  const COMMENT_MODE = hljs.COMMENT('--', '$');
  const STRING = {
    className: 'string',
    variants: [
      {
        begin: /'/,
        end: /'/,
        contains: [
          {begin: /''/ }
        ]
      }
    ]
  };
  const QUOTED_IDENTIFIER = {
    begin: /"/,
    end: /"/,
    contains: [ { begin: /""/ } ]
  };

  const LITERALS = [
    "true",
    "false",
    // Not sure it's correct to call NULL literal, and clauses like IS [NOT] NULL look strange that way.
    // "null",
    "unknown"
  ];

  const MULTI_WORD_TYPES = [
    "double precision",
    "large object",
    "with timezone",
    "without timezone"
  ];

  const TYPES = [
    'bigint',
    'binary',
    'blob',
    'boolean',
    'char',
    'character',
    'clob',
    'date',
    'dec',
    'decfloat',
    'decimal',
    'float',
    'int',
    'integer',
    'interval',
    'nchar',
    'nclob',
    'national',
    'numeric',
    'real',
    'row',
    'smallint',
    'time',
    'timestamp',
    'varchar',
    'varying', // modifier (character varying)
    'varbinary'
  ];

  const NON_RESERVED_WORDS = [
    "add",
    "asc",
    "collation",
    "desc",
    "final",
    "first",
    "last",
    "view"
  ];

  // https://jakewheat.github.io/sql-overview/sql-2016-foundation-grammar.html#reserved-word
  const RESERVED_WORDS = [
    "abs",
    "acos",
    "all",
    "allocate",
    "alter",
    "and",
    "any",
    "are",
    "array",
    "array_agg",
    "array_max_cardinality",
    "as",
    "asensitive",
    "asin",
    "asymmetric",
    "at",
    "atan",
    "atomic",
    "authorization",
    "avg",
    "begin",
    "begin_frame",
    "begin_partition",
    "between",
    "bigint",
    "binary",
    "blob",
    "boolean",
    "both",
    "by",
    "call",
    "called",
    "cardinality",
    "cascaded",
    "case",
    "cast",
    "ceil",
    "ceiling",
    "char",
    "char_length",
    "character",
    "character_length",
    "check",
    "classifier",
    "clob",
    "close",
    "coalesce",
    "collate",
    "collect",
    "column",
    "commit",
    "condition",
    "connect",
    "constraint",
    "contains",
    "convert",
    "copy",
    "corr",
    "corresponding",
    "cos",
    "cosh",
    "count",
    "covar_pop",
    "covar_samp",
    "create",
    "cross",
    "cube",
    "cume_dist",
    "current",
    "current_catalog",
    "current_date",
    "current_default_transform_group",
    "current_path",
    "current_role",
    "current_row",
    "current_schema",
    "current_time",
    "current_timestamp",
    "current_path",
    "current_role",
    "current_transform_group_for_type",
    "current_user",
    "cursor",
    "cycle",
    "date",
    "day",
    "deallocate",
    "dec",
    "decimal",
    "decfloat",
    "declare",
    "default",
    "define",
    "delete",
    "dense_rank",
    "deref",
    "describe",
    "deterministic",
    "disconnect",
    "distinct",
    "double",
    "drop",
    "dynamic",
    "each",
    "element",
    "else",
    "empty",
    "end",
    "end_frame",
    "end_partition",
    "end-exec",
    "equals",
    "escape",
    "every",
    "except",
    "exec",
    "execute",
    "exists",
    "exp",
    "external",
    "extract",
    "false",
    "fetch",
    "filter",
    "first_value",
    "float",
    "floor",
    "for",
    "foreign",
    "frame_row",
    "free",
    "from",
    "full",
    "function",
    "fusion",
    "get",
    "global",
    "grant",
    "group",
    "grouping",
    "groups",
    "having",
    "hold",
    "hour",
    "identity",
    "in",
    "indicator",
    "initial",
    "inner",
    "inout",
    "insensitive",
    "insert",
    "int",
    "integer",
    "intersect",
    "intersection",
    "interval",
    "into",
    "is",
    "join",
    "json_array",
    "json_arrayagg",
    "json_exists",
    "json_object",
    "json_objectagg",
    "json_query",
    "json_table",
    "json_table_primitive",
    "json_value",
    "lag",
    "language",
    "large",
    "last_value",
    "lateral",
    "lead",
    "leading",
    "left",
    "like",
    "like_regex",
    "listagg",
    "ln",
    "local",
    "localtime",
    "localtimestamp",
    "log",
    "log10",
    "lower",
    "match",
    "match_number",
    "match_recognize",
    "matches",
    "max",
    "member",
    "merge",
    "method",
    "min",
    "minute",
    "mod",
    "modifies",
    "module",
    "month",
    "multiset",
    "national",
    "natural",
    "nchar",
    "nclob",
    "new",
    "no",
    "none",
    "normalize",
    "not",
    "nth_value",
    "ntile",
    "null",
    "nullif",
    "numeric",
    "octet_length",
    "occurrences_regex",
    "of",
    "offset",
    "old",
    "omit",
    "on",
    "one",
    "only",
    "open",
    "or",
    "order",
    "out",
    "outer",
    "over",
    "overlaps",
    "overlay",
    "parameter",
    "partition",
    "pattern",
    "per",
    "percent",
    "percent_rank",
    "percentile_cont",
    "percentile_disc",
    "period",
    "portion",
    "position",
    "position_regex",
    "power",
    "precedes",
    "precision",
    "prepare",
    "primary",
    "procedure",
    "ptf",
    "range",
    "rank",
    "reads",
    "real",
    "recursive",
    "ref",
    "references",
    "referencing",
    "regr_avgx",
    "regr_avgy",
    "regr_count",
    "regr_intercept",
    "regr_r2",
    "regr_slope",
    "regr_sxx",
    "regr_sxy",
    "regr_syy",
    "release",
    "result",
    "return",
    "returns",
    "revoke",
    "right",
    "rollback",
    "rollup",
    "row",
    "row_number",
    "rows",
    "running",
    "savepoint",
    "scope",
    "scroll",
    "search",
    "second",
    "seek",
    "select",
    "sensitive",
    "session_user",
    "set",
    "show",
    "similar",
    "sin",
    "sinh",
    "skip",
    "smallint",
    "some",
    "specific",
    "specifictype",
    "sql",
    "sqlexception",
    "sqlstate",
    "sqlwarning",
    "sqrt",
    "start",
    "static",
    "stddev_pop",
    "stddev_samp",
    "submultiset",
    "subset",
    "substring",
    "substring_regex",
    "succeeds",
    "sum",
    "symmetric",
    "system",
    "system_time",
    "system_user",
    "table",
    "tablesample",
    "tan",
    "tanh",
    "then",
    "time",
    "timestamp",
    "timezone_hour",
    "timezone_minute",
    "to",
    "trailing",
    "translate",
    "translate_regex",
    "translation",
    "treat",
    "trigger",
    "trim",
    "trim_array",
    "true",
    "truncate",
    "uescape",
    "union",
    "unique",
    "unknown",
    "unnest",
    "update   ",
    "upper",
    "user",
    "using",
    "value",
    "values",
    "value_of",
    "var_pop",
    "var_samp",
    "varbinary",
    "varchar",
    "varying",
    "versioning",
    "when",
    "whenever",
    "where",
    "width_bucket",
    "window",
    "with",
    "within",
    "without",
    "year",
  ];

  // these are reserved words we have identified to be functions
  // and should only be highlighted in a dispatch-like context
  // ie, array_agg(...), etc.
  const RESERVED_FUNCTIONS = [
    "abs",
    "acos",
    "array_agg",
    "asin",
    "atan",
    "avg",
    "cast",
    "ceil",
    "ceiling",
    "coalesce",
    "corr",
    "cos",
    "cosh",
    "count",
    "covar_pop",
    "covar_samp",
    "cume_dist",
    "dense_rank",
    "deref",
    "element",
    "exp",
    "extract",
    "first_value",
    "floor",
    "json_array",
    "json_arrayagg",
    "json_exists",
    "json_object",
    "json_objectagg",
    "json_query",
    "json_table",
    "json_table_primitive",
    "json_value",
    "lag",
    "last_value",
    "lead",
    "listagg",
    "ln",
    "log",
    "log10",
    "lower",
    "max",
    "min",
    "mod",
    "nth_value",
    "ntile",
    "nullif",
    "percent_rank",
    "percentile_cont",
    "percentile_disc",
    "position",
    "position_regex",
    "power",
    "rank",
    "regr_avgx",
    "regr_avgy",
    "regr_count",
    "regr_intercept",
    "regr_r2",
    "regr_slope",
    "regr_sxx",
    "regr_sxy",
    "regr_syy",
    "row_number",
    "sin",
    "sinh",
    "sqrt",
    "stddev_pop",
    "stddev_samp",
    "substring",
    "substring_regex",
    "sum",
    "tan",
    "tanh",
    "translate",
    "translate_regex",
    "treat",
    "trim",
    "trim_array",
    "unnest",
    "upper",
    "value_of",
    "var_pop",
    "var_samp",
    "width_bucket",
  ];

  // these functions can
  const POSSIBLE_WITHOUT_PARENS = [
    "current_catalog",
    "current_date",
    "current_default_transform_group",
    "current_path",
    "current_role",
    "current_schema",
    "current_transform_group_for_type",
    "current_user",
    "session_user",
    "system_time",
    "system_user",
    "current_time",
    "localtime",
    "current_timestamp",
    "localtimestamp"
  ];

  // those exist to boost relevance making these very
  // "SQL like" keyword combos worth +1 extra relevance
  const COMBOS = [
    "create table",
    "insert into",
    "primary key",
    "foreign key",
    "not null",
    "alter table",
    "add constraint",
    "grouping sets",
    "on overflow",
    "character set",
    "respect nulls",
    "ignore nulls",
    "nulls first",
    "nulls last",
    "depth first",
    "breadth first"
  ];

  const FUNCTIONS = RESERVED_FUNCTIONS;

  const KEYWORDS = [...RESERVED_WORDS, ...NON_RESERVED_WORDS].filter((keyword) => {
    return !RESERVED_FUNCTIONS.includes(keyword);
  });

  const VARIABLE = {
    className: "variable",
    begin: /@[a-z0-9]+/,
  };

  const OPERATOR = {
    className: "operator",
    begin: /[-+*/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?/,
    relevance: 0,
  };

  const FUNCTION_CALL = {
    begin: concat(/\b/, either(...FUNCTIONS), /\s*\(/),
    keywords: {
      built_in: FUNCTIONS
    }
  };

  // keywords with less than 3 letters are reduced in relevancy
  function reduceRelevancy(list, {exceptions, when} = {}) {
    const qualifyFn = when;
    exceptions = exceptions || [];
    return list.map((item) => {
      if (item.match(/\|\d+$/) || exceptions.includes(item)) {
        return item;
      } else if (qualifyFn(item)) {
        return `${item}|0`;
      } else {
        return item;
      }
    });
  }

  return {
    name: 'SQL',
    case_insensitive: true,
    // does not include {} or HTML tags `</`
    illegal: /[{}]|<\//,
    keywords: {
      $pattern: /\b[\w\.]+/,
      keyword:
        reduceRelevancy(KEYWORDS, { when: (x) => x.length < 3 }),
      literal: LITERALS,
      type: TYPES,
      built_in: POSSIBLE_WITHOUT_PARENS
    },
    contains: [
      {
        begin: either(...COMBOS),
        keywords: {
          $pattern: /[\w\.]+/,
          keyword: KEYWORDS.concat(COMBOS),
          literal: LITERALS,
          type: TYPES
        },
      },
      {
        className: "type",
        begin: either(...MULTI_WORD_TYPES)
      },
      FUNCTION_CALL,
      VARIABLE,
      STRING,
      QUOTED_IDENTIFIER,
      hljs.C_NUMBER_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      COMMENT_MODE,
      OPERATOR
    ]
  };
}

module.exports = sql;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3NxbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhO0FBQ2I7O0FBRUE7QUFDQSxXQUFXLGlCQUFpQjtBQUM1QixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFdBQVcsc0JBQXNCO0FBQ2pDLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxxQkFBcUI7QUFDaEMsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsY0FBYztBQUMvQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0NBQWtDLGlCQUFpQixLQUFLO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1Asa0JBQWtCLEtBQUs7QUFDdkIsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsNEJBQTRCO0FBQy9EO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJzdGF0aWMvY2h1bmtzLzE2NC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJucyB7UmVnRXhwfVxuICogKi9cblxuLyoqXG4gKiBAcGFyYW0ge1JlZ0V4cCB8IHN0cmluZyB9IHJlXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBzb3VyY2UocmUpIHtcbiAgaWYgKCFyZSkgcmV0dXJuIG51bGw7XG4gIGlmICh0eXBlb2YgcmUgPT09IFwic3RyaW5nXCIpIHJldHVybiByZTtcblxuICByZXR1cm4gcmUuc291cmNlO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7Li4uKFJlZ0V4cCB8IHN0cmluZykgfSBhcmdzXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBjb25jYXQoLi4uYXJncykge1xuICBjb25zdCBqb2luZWQgPSBhcmdzLm1hcCgoeCkgPT4gc291cmNlKHgpKS5qb2luKFwiXCIpO1xuICByZXR1cm4gam9pbmVkO1xufVxuXG4vKipcbiAqIEFueSBvZiB0aGUgcGFzc2VkIGV4cHJlc3NzaW9ucyBtYXkgbWF0Y2hcbiAqXG4gKiBDcmVhdGVzIGEgaHVnZSB0aGlzIHwgdGhpcyB8IHRoYXQgfCB0aGF0IG1hdGNoXG4gKiBAcGFyYW0geyhSZWdFeHAgfCBzdHJpbmcpW10gfSBhcmdzXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBlaXRoZXIoLi4uYXJncykge1xuICBjb25zdCBqb2luZWQgPSAnKCcgKyBhcmdzLm1hcCgoeCkgPT4gc291cmNlKHgpKS5qb2luKFwifFwiKSArIFwiKVwiO1xuICByZXR1cm4gam9pbmVkO1xufVxuXG4vKlxuIExhbmd1YWdlOiBTUUxcbiBXZWJzaXRlOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9TUUxcbiBDYXRlZ29yeTogY29tbW9uLCBkYXRhYmFzZVxuICovXG5cbmZ1bmN0aW9uIHNxbChobGpzKSB7XG4gIGNvbnN0IENPTU1FTlRfTU9ERSA9IGhsanMuQ09NTUVOVCgnLS0nLCAnJCcpO1xuICBjb25zdCBTVFJJTkcgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICB2YXJpYW50czogW1xuICAgICAge1xuICAgICAgICBiZWdpbjogLycvLFxuICAgICAgICBlbmQ6IC8nLyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICB7YmVnaW46IC8nJy8gfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9O1xuICBjb25zdCBRVU9URURfSURFTlRJRklFUiA9IHtcbiAgICBiZWdpbjogL1wiLyxcbiAgICBlbmQ6IC9cIi8sXG4gICAgY29udGFpbnM6IFsgeyBiZWdpbjogL1wiXCIvIH0gXVxuICB9O1xuXG4gIGNvbnN0IExJVEVSQUxTID0gW1xuICAgIFwidHJ1ZVwiLFxuICAgIFwiZmFsc2VcIixcbiAgICAvLyBOb3Qgc3VyZSBpdCdzIGNvcnJlY3QgdG8gY2FsbCBOVUxMIGxpdGVyYWwsIGFuZCBjbGF1c2VzIGxpa2UgSVMgW05PVF0gTlVMTCBsb29rIHN0cmFuZ2UgdGhhdCB3YXkuXG4gICAgLy8gXCJudWxsXCIsXG4gICAgXCJ1bmtub3duXCJcbiAgXTtcblxuICBjb25zdCBNVUxUSV9XT1JEX1RZUEVTID0gW1xuICAgIFwiZG91YmxlIHByZWNpc2lvblwiLFxuICAgIFwibGFyZ2Ugb2JqZWN0XCIsXG4gICAgXCJ3aXRoIHRpbWV6b25lXCIsXG4gICAgXCJ3aXRob3V0IHRpbWV6b25lXCJcbiAgXTtcblxuICBjb25zdCBUWVBFUyA9IFtcbiAgICAnYmlnaW50JyxcbiAgICAnYmluYXJ5JyxcbiAgICAnYmxvYicsXG4gICAgJ2Jvb2xlYW4nLFxuICAgICdjaGFyJyxcbiAgICAnY2hhcmFjdGVyJyxcbiAgICAnY2xvYicsXG4gICAgJ2RhdGUnLFxuICAgICdkZWMnLFxuICAgICdkZWNmbG9hdCcsXG4gICAgJ2RlY2ltYWwnLFxuICAgICdmbG9hdCcsXG4gICAgJ2ludCcsXG4gICAgJ2ludGVnZXInLFxuICAgICdpbnRlcnZhbCcsXG4gICAgJ25jaGFyJyxcbiAgICAnbmNsb2InLFxuICAgICduYXRpb25hbCcsXG4gICAgJ251bWVyaWMnLFxuICAgICdyZWFsJyxcbiAgICAncm93JyxcbiAgICAnc21hbGxpbnQnLFxuICAgICd0aW1lJyxcbiAgICAndGltZXN0YW1wJyxcbiAgICAndmFyY2hhcicsXG4gICAgJ3ZhcnlpbmcnLCAvLyBtb2RpZmllciAoY2hhcmFjdGVyIHZhcnlpbmcpXG4gICAgJ3ZhcmJpbmFyeSdcbiAgXTtcblxuICBjb25zdCBOT05fUkVTRVJWRURfV09SRFMgPSBbXG4gICAgXCJhZGRcIixcbiAgICBcImFzY1wiLFxuICAgIFwiY29sbGF0aW9uXCIsXG4gICAgXCJkZXNjXCIsXG4gICAgXCJmaW5hbFwiLFxuICAgIFwiZmlyc3RcIixcbiAgICBcImxhc3RcIixcbiAgICBcInZpZXdcIlxuICBdO1xuXG4gIC8vIGh0dHBzOi8vamFrZXdoZWF0LmdpdGh1Yi5pby9zcWwtb3ZlcnZpZXcvc3FsLTIwMTYtZm91bmRhdGlvbi1ncmFtbWFyLmh0bWwjcmVzZXJ2ZWQtd29yZFxuICBjb25zdCBSRVNFUlZFRF9XT1JEUyA9IFtcbiAgICBcImFic1wiLFxuICAgIFwiYWNvc1wiLFxuICAgIFwiYWxsXCIsXG4gICAgXCJhbGxvY2F0ZVwiLFxuICAgIFwiYWx0ZXJcIixcbiAgICBcImFuZFwiLFxuICAgIFwiYW55XCIsXG4gICAgXCJhcmVcIixcbiAgICBcImFycmF5XCIsXG4gICAgXCJhcnJheV9hZ2dcIixcbiAgICBcImFycmF5X21heF9jYXJkaW5hbGl0eVwiLFxuICAgIFwiYXNcIixcbiAgICBcImFzZW5zaXRpdmVcIixcbiAgICBcImFzaW5cIixcbiAgICBcImFzeW1tZXRyaWNcIixcbiAgICBcImF0XCIsXG4gICAgXCJhdGFuXCIsXG4gICAgXCJhdG9taWNcIixcbiAgICBcImF1dGhvcml6YXRpb25cIixcbiAgICBcImF2Z1wiLFxuICAgIFwiYmVnaW5cIixcbiAgICBcImJlZ2luX2ZyYW1lXCIsXG4gICAgXCJiZWdpbl9wYXJ0aXRpb25cIixcbiAgICBcImJldHdlZW5cIixcbiAgICBcImJpZ2ludFwiLFxuICAgIFwiYmluYXJ5XCIsXG4gICAgXCJibG9iXCIsXG4gICAgXCJib29sZWFuXCIsXG4gICAgXCJib3RoXCIsXG4gICAgXCJieVwiLFxuICAgIFwiY2FsbFwiLFxuICAgIFwiY2FsbGVkXCIsXG4gICAgXCJjYXJkaW5hbGl0eVwiLFxuICAgIFwiY2FzY2FkZWRcIixcbiAgICBcImNhc2VcIixcbiAgICBcImNhc3RcIixcbiAgICBcImNlaWxcIixcbiAgICBcImNlaWxpbmdcIixcbiAgICBcImNoYXJcIixcbiAgICBcImNoYXJfbGVuZ3RoXCIsXG4gICAgXCJjaGFyYWN0ZXJcIixcbiAgICBcImNoYXJhY3Rlcl9sZW5ndGhcIixcbiAgICBcImNoZWNrXCIsXG4gICAgXCJjbGFzc2lmaWVyXCIsXG4gICAgXCJjbG9iXCIsXG4gICAgXCJjbG9zZVwiLFxuICAgIFwiY29hbGVzY2VcIixcbiAgICBcImNvbGxhdGVcIixcbiAgICBcImNvbGxlY3RcIixcbiAgICBcImNvbHVtblwiLFxuICAgIFwiY29tbWl0XCIsXG4gICAgXCJjb25kaXRpb25cIixcbiAgICBcImNvbm5lY3RcIixcbiAgICBcImNvbnN0cmFpbnRcIixcbiAgICBcImNvbnRhaW5zXCIsXG4gICAgXCJjb252ZXJ0XCIsXG4gICAgXCJjb3B5XCIsXG4gICAgXCJjb3JyXCIsXG4gICAgXCJjb3JyZXNwb25kaW5nXCIsXG4gICAgXCJjb3NcIixcbiAgICBcImNvc2hcIixcbiAgICBcImNvdW50XCIsXG4gICAgXCJjb3Zhcl9wb3BcIixcbiAgICBcImNvdmFyX3NhbXBcIixcbiAgICBcImNyZWF0ZVwiLFxuICAgIFwiY3Jvc3NcIixcbiAgICBcImN1YmVcIixcbiAgICBcImN1bWVfZGlzdFwiLFxuICAgIFwiY3VycmVudFwiLFxuICAgIFwiY3VycmVudF9jYXRhbG9nXCIsXG4gICAgXCJjdXJyZW50X2RhdGVcIixcbiAgICBcImN1cnJlbnRfZGVmYXVsdF90cmFuc2Zvcm1fZ3JvdXBcIixcbiAgICBcImN1cnJlbnRfcGF0aFwiLFxuICAgIFwiY3VycmVudF9yb2xlXCIsXG4gICAgXCJjdXJyZW50X3Jvd1wiLFxuICAgIFwiY3VycmVudF9zY2hlbWFcIixcbiAgICBcImN1cnJlbnRfdGltZVwiLFxuICAgIFwiY3VycmVudF90aW1lc3RhbXBcIixcbiAgICBcImN1cnJlbnRfcGF0aFwiLFxuICAgIFwiY3VycmVudF9yb2xlXCIsXG4gICAgXCJjdXJyZW50X3RyYW5zZm9ybV9ncm91cF9mb3JfdHlwZVwiLFxuICAgIFwiY3VycmVudF91c2VyXCIsXG4gICAgXCJjdXJzb3JcIixcbiAgICBcImN5Y2xlXCIsXG4gICAgXCJkYXRlXCIsXG4gICAgXCJkYXlcIixcbiAgICBcImRlYWxsb2NhdGVcIixcbiAgICBcImRlY1wiLFxuICAgIFwiZGVjaW1hbFwiLFxuICAgIFwiZGVjZmxvYXRcIixcbiAgICBcImRlY2xhcmVcIixcbiAgICBcImRlZmF1bHRcIixcbiAgICBcImRlZmluZVwiLFxuICAgIFwiZGVsZXRlXCIsXG4gICAgXCJkZW5zZV9yYW5rXCIsXG4gICAgXCJkZXJlZlwiLFxuICAgIFwiZGVzY3JpYmVcIixcbiAgICBcImRldGVybWluaXN0aWNcIixcbiAgICBcImRpc2Nvbm5lY3RcIixcbiAgICBcImRpc3RpbmN0XCIsXG4gICAgXCJkb3VibGVcIixcbiAgICBcImRyb3BcIixcbiAgICBcImR5bmFtaWNcIixcbiAgICBcImVhY2hcIixcbiAgICBcImVsZW1lbnRcIixcbiAgICBcImVsc2VcIixcbiAgICBcImVtcHR5XCIsXG4gICAgXCJlbmRcIixcbiAgICBcImVuZF9mcmFtZVwiLFxuICAgIFwiZW5kX3BhcnRpdGlvblwiLFxuICAgIFwiZW5kLWV4ZWNcIixcbiAgICBcImVxdWFsc1wiLFxuICAgIFwiZXNjYXBlXCIsXG4gICAgXCJldmVyeVwiLFxuICAgIFwiZXhjZXB0XCIsXG4gICAgXCJleGVjXCIsXG4gICAgXCJleGVjdXRlXCIsXG4gICAgXCJleGlzdHNcIixcbiAgICBcImV4cFwiLFxuICAgIFwiZXh0ZXJuYWxcIixcbiAgICBcImV4dHJhY3RcIixcbiAgICBcImZhbHNlXCIsXG4gICAgXCJmZXRjaFwiLFxuICAgIFwiZmlsdGVyXCIsXG4gICAgXCJmaXJzdF92YWx1ZVwiLFxuICAgIFwiZmxvYXRcIixcbiAgICBcImZsb29yXCIsXG4gICAgXCJmb3JcIixcbiAgICBcImZvcmVpZ25cIixcbiAgICBcImZyYW1lX3Jvd1wiLFxuICAgIFwiZnJlZVwiLFxuICAgIFwiZnJvbVwiLFxuICAgIFwiZnVsbFwiLFxuICAgIFwiZnVuY3Rpb25cIixcbiAgICBcImZ1c2lvblwiLFxuICAgIFwiZ2V0XCIsXG4gICAgXCJnbG9iYWxcIixcbiAgICBcImdyYW50XCIsXG4gICAgXCJncm91cFwiLFxuICAgIFwiZ3JvdXBpbmdcIixcbiAgICBcImdyb3Vwc1wiLFxuICAgIFwiaGF2aW5nXCIsXG4gICAgXCJob2xkXCIsXG4gICAgXCJob3VyXCIsXG4gICAgXCJpZGVudGl0eVwiLFxuICAgIFwiaW5cIixcbiAgICBcImluZGljYXRvclwiLFxuICAgIFwiaW5pdGlhbFwiLFxuICAgIFwiaW5uZXJcIixcbiAgICBcImlub3V0XCIsXG4gICAgXCJpbnNlbnNpdGl2ZVwiLFxuICAgIFwiaW5zZXJ0XCIsXG4gICAgXCJpbnRcIixcbiAgICBcImludGVnZXJcIixcbiAgICBcImludGVyc2VjdFwiLFxuICAgIFwiaW50ZXJzZWN0aW9uXCIsXG4gICAgXCJpbnRlcnZhbFwiLFxuICAgIFwiaW50b1wiLFxuICAgIFwiaXNcIixcbiAgICBcImpvaW5cIixcbiAgICBcImpzb25fYXJyYXlcIixcbiAgICBcImpzb25fYXJyYXlhZ2dcIixcbiAgICBcImpzb25fZXhpc3RzXCIsXG4gICAgXCJqc29uX29iamVjdFwiLFxuICAgIFwianNvbl9vYmplY3RhZ2dcIixcbiAgICBcImpzb25fcXVlcnlcIixcbiAgICBcImpzb25fdGFibGVcIixcbiAgICBcImpzb25fdGFibGVfcHJpbWl0aXZlXCIsXG4gICAgXCJqc29uX3ZhbHVlXCIsXG4gICAgXCJsYWdcIixcbiAgICBcImxhbmd1YWdlXCIsXG4gICAgXCJsYXJnZVwiLFxuICAgIFwibGFzdF92YWx1ZVwiLFxuICAgIFwibGF0ZXJhbFwiLFxuICAgIFwibGVhZFwiLFxuICAgIFwibGVhZGluZ1wiLFxuICAgIFwibGVmdFwiLFxuICAgIFwibGlrZVwiLFxuICAgIFwibGlrZV9yZWdleFwiLFxuICAgIFwibGlzdGFnZ1wiLFxuICAgIFwibG5cIixcbiAgICBcImxvY2FsXCIsXG4gICAgXCJsb2NhbHRpbWVcIixcbiAgICBcImxvY2FsdGltZXN0YW1wXCIsXG4gICAgXCJsb2dcIixcbiAgICBcImxvZzEwXCIsXG4gICAgXCJsb3dlclwiLFxuICAgIFwibWF0Y2hcIixcbiAgICBcIm1hdGNoX251bWJlclwiLFxuICAgIFwibWF0Y2hfcmVjb2duaXplXCIsXG4gICAgXCJtYXRjaGVzXCIsXG4gICAgXCJtYXhcIixcbiAgICBcIm1lbWJlclwiLFxuICAgIFwibWVyZ2VcIixcbiAgICBcIm1ldGhvZFwiLFxuICAgIFwibWluXCIsXG4gICAgXCJtaW51dGVcIixcbiAgICBcIm1vZFwiLFxuICAgIFwibW9kaWZpZXNcIixcbiAgICBcIm1vZHVsZVwiLFxuICAgIFwibW9udGhcIixcbiAgICBcIm11bHRpc2V0XCIsXG4gICAgXCJuYXRpb25hbFwiLFxuICAgIFwibmF0dXJhbFwiLFxuICAgIFwibmNoYXJcIixcbiAgICBcIm5jbG9iXCIsXG4gICAgXCJuZXdcIixcbiAgICBcIm5vXCIsXG4gICAgXCJub25lXCIsXG4gICAgXCJub3JtYWxpemVcIixcbiAgICBcIm5vdFwiLFxuICAgIFwibnRoX3ZhbHVlXCIsXG4gICAgXCJudGlsZVwiLFxuICAgIFwibnVsbFwiLFxuICAgIFwibnVsbGlmXCIsXG4gICAgXCJudW1lcmljXCIsXG4gICAgXCJvY3RldF9sZW5ndGhcIixcbiAgICBcIm9jY3VycmVuY2VzX3JlZ2V4XCIsXG4gICAgXCJvZlwiLFxuICAgIFwib2Zmc2V0XCIsXG4gICAgXCJvbGRcIixcbiAgICBcIm9taXRcIixcbiAgICBcIm9uXCIsXG4gICAgXCJvbmVcIixcbiAgICBcIm9ubHlcIixcbiAgICBcIm9wZW5cIixcbiAgICBcIm9yXCIsXG4gICAgXCJvcmRlclwiLFxuICAgIFwib3V0XCIsXG4gICAgXCJvdXRlclwiLFxuICAgIFwib3ZlclwiLFxuICAgIFwib3ZlcmxhcHNcIixcbiAgICBcIm92ZXJsYXlcIixcbiAgICBcInBhcmFtZXRlclwiLFxuICAgIFwicGFydGl0aW9uXCIsXG4gICAgXCJwYXR0ZXJuXCIsXG4gICAgXCJwZXJcIixcbiAgICBcInBlcmNlbnRcIixcbiAgICBcInBlcmNlbnRfcmFua1wiLFxuICAgIFwicGVyY2VudGlsZV9jb250XCIsXG4gICAgXCJwZXJjZW50aWxlX2Rpc2NcIixcbiAgICBcInBlcmlvZFwiLFxuICAgIFwicG9ydGlvblwiLFxuICAgIFwicG9zaXRpb25cIixcbiAgICBcInBvc2l0aW9uX3JlZ2V4XCIsXG4gICAgXCJwb3dlclwiLFxuICAgIFwicHJlY2VkZXNcIixcbiAgICBcInByZWNpc2lvblwiLFxuICAgIFwicHJlcGFyZVwiLFxuICAgIFwicHJpbWFyeVwiLFxuICAgIFwicHJvY2VkdXJlXCIsXG4gICAgXCJwdGZcIixcbiAgICBcInJhbmdlXCIsXG4gICAgXCJyYW5rXCIsXG4gICAgXCJyZWFkc1wiLFxuICAgIFwicmVhbFwiLFxuICAgIFwicmVjdXJzaXZlXCIsXG4gICAgXCJyZWZcIixcbiAgICBcInJlZmVyZW5jZXNcIixcbiAgICBcInJlZmVyZW5jaW5nXCIsXG4gICAgXCJyZWdyX2F2Z3hcIixcbiAgICBcInJlZ3JfYXZneVwiLFxuICAgIFwicmVncl9jb3VudFwiLFxuICAgIFwicmVncl9pbnRlcmNlcHRcIixcbiAgICBcInJlZ3JfcjJcIixcbiAgICBcInJlZ3Jfc2xvcGVcIixcbiAgICBcInJlZ3Jfc3h4XCIsXG4gICAgXCJyZWdyX3N4eVwiLFxuICAgIFwicmVncl9zeXlcIixcbiAgICBcInJlbGVhc2VcIixcbiAgICBcInJlc3VsdFwiLFxuICAgIFwicmV0dXJuXCIsXG4gICAgXCJyZXR1cm5zXCIsXG4gICAgXCJyZXZva2VcIixcbiAgICBcInJpZ2h0XCIsXG4gICAgXCJyb2xsYmFja1wiLFxuICAgIFwicm9sbHVwXCIsXG4gICAgXCJyb3dcIixcbiAgICBcInJvd19udW1iZXJcIixcbiAgICBcInJvd3NcIixcbiAgICBcInJ1bm5pbmdcIixcbiAgICBcInNhdmVwb2ludFwiLFxuICAgIFwic2NvcGVcIixcbiAgICBcInNjcm9sbFwiLFxuICAgIFwic2VhcmNoXCIsXG4gICAgXCJzZWNvbmRcIixcbiAgICBcInNlZWtcIixcbiAgICBcInNlbGVjdFwiLFxuICAgIFwic2Vuc2l0aXZlXCIsXG4gICAgXCJzZXNzaW9uX3VzZXJcIixcbiAgICBcInNldFwiLFxuICAgIFwic2hvd1wiLFxuICAgIFwic2ltaWxhclwiLFxuICAgIFwic2luXCIsXG4gICAgXCJzaW5oXCIsXG4gICAgXCJza2lwXCIsXG4gICAgXCJzbWFsbGludFwiLFxuICAgIFwic29tZVwiLFxuICAgIFwic3BlY2lmaWNcIixcbiAgICBcInNwZWNpZmljdHlwZVwiLFxuICAgIFwic3FsXCIsXG4gICAgXCJzcWxleGNlcHRpb25cIixcbiAgICBcInNxbHN0YXRlXCIsXG4gICAgXCJzcWx3YXJuaW5nXCIsXG4gICAgXCJzcXJ0XCIsXG4gICAgXCJzdGFydFwiLFxuICAgIFwic3RhdGljXCIsXG4gICAgXCJzdGRkZXZfcG9wXCIsXG4gICAgXCJzdGRkZXZfc2FtcFwiLFxuICAgIFwic3VibXVsdGlzZXRcIixcbiAgICBcInN1YnNldFwiLFxuICAgIFwic3Vic3RyaW5nXCIsXG4gICAgXCJzdWJzdHJpbmdfcmVnZXhcIixcbiAgICBcInN1Y2NlZWRzXCIsXG4gICAgXCJzdW1cIixcbiAgICBcInN5bW1ldHJpY1wiLFxuICAgIFwic3lzdGVtXCIsXG4gICAgXCJzeXN0ZW1fdGltZVwiLFxuICAgIFwic3lzdGVtX3VzZXJcIixcbiAgICBcInRhYmxlXCIsXG4gICAgXCJ0YWJsZXNhbXBsZVwiLFxuICAgIFwidGFuXCIsXG4gICAgXCJ0YW5oXCIsXG4gICAgXCJ0aGVuXCIsXG4gICAgXCJ0aW1lXCIsXG4gICAgXCJ0aW1lc3RhbXBcIixcbiAgICBcInRpbWV6b25lX2hvdXJcIixcbiAgICBcInRpbWV6b25lX21pbnV0ZVwiLFxuICAgIFwidG9cIixcbiAgICBcInRyYWlsaW5nXCIsXG4gICAgXCJ0cmFuc2xhdGVcIixcbiAgICBcInRyYW5zbGF0ZV9yZWdleFwiLFxuICAgIFwidHJhbnNsYXRpb25cIixcbiAgICBcInRyZWF0XCIsXG4gICAgXCJ0cmlnZ2VyXCIsXG4gICAgXCJ0cmltXCIsXG4gICAgXCJ0cmltX2FycmF5XCIsXG4gICAgXCJ0cnVlXCIsXG4gICAgXCJ0cnVuY2F0ZVwiLFxuICAgIFwidWVzY2FwZVwiLFxuICAgIFwidW5pb25cIixcbiAgICBcInVuaXF1ZVwiLFxuICAgIFwidW5rbm93blwiLFxuICAgIFwidW5uZXN0XCIsXG4gICAgXCJ1cGRhdGUgICBcIixcbiAgICBcInVwcGVyXCIsXG4gICAgXCJ1c2VyXCIsXG4gICAgXCJ1c2luZ1wiLFxuICAgIFwidmFsdWVcIixcbiAgICBcInZhbHVlc1wiLFxuICAgIFwidmFsdWVfb2ZcIixcbiAgICBcInZhcl9wb3BcIixcbiAgICBcInZhcl9zYW1wXCIsXG4gICAgXCJ2YXJiaW5hcnlcIixcbiAgICBcInZhcmNoYXJcIixcbiAgICBcInZhcnlpbmdcIixcbiAgICBcInZlcnNpb25pbmdcIixcbiAgICBcIndoZW5cIixcbiAgICBcIndoZW5ldmVyXCIsXG4gICAgXCJ3aGVyZVwiLFxuICAgIFwid2lkdGhfYnVja2V0XCIsXG4gICAgXCJ3aW5kb3dcIixcbiAgICBcIndpdGhcIixcbiAgICBcIndpdGhpblwiLFxuICAgIFwid2l0aG91dFwiLFxuICAgIFwieWVhclwiLFxuICBdO1xuXG4gIC8vIHRoZXNlIGFyZSByZXNlcnZlZCB3b3JkcyB3ZSBoYXZlIGlkZW50aWZpZWQgdG8gYmUgZnVuY3Rpb25zXG4gIC8vIGFuZCBzaG91bGQgb25seSBiZSBoaWdobGlnaHRlZCBpbiBhIGRpc3BhdGNoLWxpa2UgY29udGV4dFxuICAvLyBpZSwgYXJyYXlfYWdnKC4uLiksIGV0Yy5cbiAgY29uc3QgUkVTRVJWRURfRlVOQ1RJT05TID0gW1xuICAgIFwiYWJzXCIsXG4gICAgXCJhY29zXCIsXG4gICAgXCJhcnJheV9hZ2dcIixcbiAgICBcImFzaW5cIixcbiAgICBcImF0YW5cIixcbiAgICBcImF2Z1wiLFxuICAgIFwiY2FzdFwiLFxuICAgIFwiY2VpbFwiLFxuICAgIFwiY2VpbGluZ1wiLFxuICAgIFwiY29hbGVzY2VcIixcbiAgICBcImNvcnJcIixcbiAgICBcImNvc1wiLFxuICAgIFwiY29zaFwiLFxuICAgIFwiY291bnRcIixcbiAgICBcImNvdmFyX3BvcFwiLFxuICAgIFwiY292YXJfc2FtcFwiLFxuICAgIFwiY3VtZV9kaXN0XCIsXG4gICAgXCJkZW5zZV9yYW5rXCIsXG4gICAgXCJkZXJlZlwiLFxuICAgIFwiZWxlbWVudFwiLFxuICAgIFwiZXhwXCIsXG4gICAgXCJleHRyYWN0XCIsXG4gICAgXCJmaXJzdF92YWx1ZVwiLFxuICAgIFwiZmxvb3JcIixcbiAgICBcImpzb25fYXJyYXlcIixcbiAgICBcImpzb25fYXJyYXlhZ2dcIixcbiAgICBcImpzb25fZXhpc3RzXCIsXG4gICAgXCJqc29uX29iamVjdFwiLFxuICAgIFwianNvbl9vYmplY3RhZ2dcIixcbiAgICBcImpzb25fcXVlcnlcIixcbiAgICBcImpzb25fdGFibGVcIixcbiAgICBcImpzb25fdGFibGVfcHJpbWl0aXZlXCIsXG4gICAgXCJqc29uX3ZhbHVlXCIsXG4gICAgXCJsYWdcIixcbiAgICBcImxhc3RfdmFsdWVcIixcbiAgICBcImxlYWRcIixcbiAgICBcImxpc3RhZ2dcIixcbiAgICBcImxuXCIsXG4gICAgXCJsb2dcIixcbiAgICBcImxvZzEwXCIsXG4gICAgXCJsb3dlclwiLFxuICAgIFwibWF4XCIsXG4gICAgXCJtaW5cIixcbiAgICBcIm1vZFwiLFxuICAgIFwibnRoX3ZhbHVlXCIsXG4gICAgXCJudGlsZVwiLFxuICAgIFwibnVsbGlmXCIsXG4gICAgXCJwZXJjZW50X3JhbmtcIixcbiAgICBcInBlcmNlbnRpbGVfY29udFwiLFxuICAgIFwicGVyY2VudGlsZV9kaXNjXCIsXG4gICAgXCJwb3NpdGlvblwiLFxuICAgIFwicG9zaXRpb25fcmVnZXhcIixcbiAgICBcInBvd2VyXCIsXG4gICAgXCJyYW5rXCIsXG4gICAgXCJyZWdyX2F2Z3hcIixcbiAgICBcInJlZ3JfYXZneVwiLFxuICAgIFwicmVncl9jb3VudFwiLFxuICAgIFwicmVncl9pbnRlcmNlcHRcIixcbiAgICBcInJlZ3JfcjJcIixcbiAgICBcInJlZ3Jfc2xvcGVcIixcbiAgICBcInJlZ3Jfc3h4XCIsXG4gICAgXCJyZWdyX3N4eVwiLFxuICAgIFwicmVncl9zeXlcIixcbiAgICBcInJvd19udW1iZXJcIixcbiAgICBcInNpblwiLFxuICAgIFwic2luaFwiLFxuICAgIFwic3FydFwiLFxuICAgIFwic3RkZGV2X3BvcFwiLFxuICAgIFwic3RkZGV2X3NhbXBcIixcbiAgICBcInN1YnN0cmluZ1wiLFxuICAgIFwic3Vic3RyaW5nX3JlZ2V4XCIsXG4gICAgXCJzdW1cIixcbiAgICBcInRhblwiLFxuICAgIFwidGFuaFwiLFxuICAgIFwidHJhbnNsYXRlXCIsXG4gICAgXCJ0cmFuc2xhdGVfcmVnZXhcIixcbiAgICBcInRyZWF0XCIsXG4gICAgXCJ0cmltXCIsXG4gICAgXCJ0cmltX2FycmF5XCIsXG4gICAgXCJ1bm5lc3RcIixcbiAgICBcInVwcGVyXCIsXG4gICAgXCJ2YWx1ZV9vZlwiLFxuICAgIFwidmFyX3BvcFwiLFxuICAgIFwidmFyX3NhbXBcIixcbiAgICBcIndpZHRoX2J1Y2tldFwiLFxuICBdO1xuXG4gIC8vIHRoZXNlIGZ1bmN0aW9ucyBjYW5cbiAgY29uc3QgUE9TU0lCTEVfV0lUSE9VVF9QQVJFTlMgPSBbXG4gICAgXCJjdXJyZW50X2NhdGFsb2dcIixcbiAgICBcImN1cnJlbnRfZGF0ZVwiLFxuICAgIFwiY3VycmVudF9kZWZhdWx0X3RyYW5zZm9ybV9ncm91cFwiLFxuICAgIFwiY3VycmVudF9wYXRoXCIsXG4gICAgXCJjdXJyZW50X3JvbGVcIixcbiAgICBcImN1cnJlbnRfc2NoZW1hXCIsXG4gICAgXCJjdXJyZW50X3RyYW5zZm9ybV9ncm91cF9mb3JfdHlwZVwiLFxuICAgIFwiY3VycmVudF91c2VyXCIsXG4gICAgXCJzZXNzaW9uX3VzZXJcIixcbiAgICBcInN5c3RlbV90aW1lXCIsXG4gICAgXCJzeXN0ZW1fdXNlclwiLFxuICAgIFwiY3VycmVudF90aW1lXCIsXG4gICAgXCJsb2NhbHRpbWVcIixcbiAgICBcImN1cnJlbnRfdGltZXN0YW1wXCIsXG4gICAgXCJsb2NhbHRpbWVzdGFtcFwiXG4gIF07XG5cbiAgLy8gdGhvc2UgZXhpc3QgdG8gYm9vc3QgcmVsZXZhbmNlIG1ha2luZyB0aGVzZSB2ZXJ5XG4gIC8vIFwiU1FMIGxpa2VcIiBrZXl3b3JkIGNvbWJvcyB3b3J0aCArMSBleHRyYSByZWxldmFuY2VcbiAgY29uc3QgQ09NQk9TID0gW1xuICAgIFwiY3JlYXRlIHRhYmxlXCIsXG4gICAgXCJpbnNlcnQgaW50b1wiLFxuICAgIFwicHJpbWFyeSBrZXlcIixcbiAgICBcImZvcmVpZ24ga2V5XCIsXG4gICAgXCJub3QgbnVsbFwiLFxuICAgIFwiYWx0ZXIgdGFibGVcIixcbiAgICBcImFkZCBjb25zdHJhaW50XCIsXG4gICAgXCJncm91cGluZyBzZXRzXCIsXG4gICAgXCJvbiBvdmVyZmxvd1wiLFxuICAgIFwiY2hhcmFjdGVyIHNldFwiLFxuICAgIFwicmVzcGVjdCBudWxsc1wiLFxuICAgIFwiaWdub3JlIG51bGxzXCIsXG4gICAgXCJudWxscyBmaXJzdFwiLFxuICAgIFwibnVsbHMgbGFzdFwiLFxuICAgIFwiZGVwdGggZmlyc3RcIixcbiAgICBcImJyZWFkdGggZmlyc3RcIlxuICBdO1xuXG4gIGNvbnN0IEZVTkNUSU9OUyA9IFJFU0VSVkVEX0ZVTkNUSU9OUztcblxuICBjb25zdCBLRVlXT1JEUyA9IFsuLi5SRVNFUlZFRF9XT1JEUywgLi4uTk9OX1JFU0VSVkVEX1dPUkRTXS5maWx0ZXIoKGtleXdvcmQpID0+IHtcbiAgICByZXR1cm4gIVJFU0VSVkVEX0ZVTkNUSU9OUy5pbmNsdWRlcyhrZXl3b3JkKTtcbiAgfSk7XG5cbiAgY29uc3QgVkFSSUFCTEUgPSB7XG4gICAgY2xhc3NOYW1lOiBcInZhcmlhYmxlXCIsXG4gICAgYmVnaW46IC9AW2EtejAtOV0rLyxcbiAgfTtcblxuICBjb25zdCBPUEVSQVRPUiA9IHtcbiAgICBjbGFzc05hbWU6IFwib3BlcmF0b3JcIixcbiAgICBiZWdpbjogL1stKyovPSVefl18JiY/fFxcfFxcfD98IT0/fDwoPzo9Pj98PHw+KT98Pls+PV0/LyxcbiAgICByZWxldmFuY2U6IDAsXG4gIH07XG5cbiAgY29uc3QgRlVOQ1RJT05fQ0FMTCA9IHtcbiAgICBiZWdpbjogY29uY2F0KC9cXGIvLCBlaXRoZXIoLi4uRlVOQ1RJT05TKSwgL1xccypcXCgvKSxcbiAgICBrZXl3b3Jkczoge1xuICAgICAgYnVpbHRfaW46IEZVTkNUSU9OU1xuICAgIH1cbiAgfTtcblxuICAvLyBrZXl3b3JkcyB3aXRoIGxlc3MgdGhhbiAzIGxldHRlcnMgYXJlIHJlZHVjZWQgaW4gcmVsZXZhbmN5XG4gIGZ1bmN0aW9uIHJlZHVjZVJlbGV2YW5jeShsaXN0LCB7ZXhjZXB0aW9ucywgd2hlbn0gPSB7fSkge1xuICAgIGNvbnN0IHF1YWxpZnlGbiA9IHdoZW47XG4gICAgZXhjZXB0aW9ucyA9IGV4Y2VwdGlvbnMgfHwgW107XG4gICAgcmV0dXJuIGxpc3QubWFwKChpdGVtKSA9PiB7XG4gICAgICBpZiAoaXRlbS5tYXRjaCgvXFx8XFxkKyQvKSB8fCBleGNlcHRpb25zLmluY2x1ZGVzKGl0ZW0pKSB7XG4gICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgfSBlbHNlIGlmIChxdWFsaWZ5Rm4oaXRlbSkpIHtcbiAgICAgICAgcmV0dXJuIGAke2l0ZW19fDBgO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG5hbWU6ICdTUUwnLFxuICAgIGNhc2VfaW5zZW5zaXRpdmU6IHRydWUsXG4gICAgLy8gZG9lcyBub3QgaW5jbHVkZSB7fSBvciBIVE1MIHRhZ3MgYDwvYFxuICAgIGlsbGVnYWw6IC9be31dfDxcXC8vLFxuICAgIGtleXdvcmRzOiB7XG4gICAgICAkcGF0dGVybjogL1xcYltcXHdcXC5dKy8sXG4gICAgICBrZXl3b3JkOlxuICAgICAgICByZWR1Y2VSZWxldmFuY3koS0VZV09SRFMsIHsgd2hlbjogKHgpID0+IHgubGVuZ3RoIDwgMyB9KSxcbiAgICAgIGxpdGVyYWw6IExJVEVSQUxTLFxuICAgICAgdHlwZTogVFlQRVMsXG4gICAgICBidWlsdF9pbjogUE9TU0lCTEVfV0lUSE9VVF9QQVJFTlNcbiAgICB9LFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiBlaXRoZXIoLi4uQ09NQk9TKSxcbiAgICAgICAga2V5d29yZHM6IHtcbiAgICAgICAgICAkcGF0dGVybjogL1tcXHdcXC5dKy8sXG4gICAgICAgICAga2V5d29yZDogS0VZV09SRFMuY29uY2F0KENPTUJPUyksXG4gICAgICAgICAgbGl0ZXJhbDogTElURVJBTFMsXG4gICAgICAgICAgdHlwZTogVFlQRVNcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJ0eXBlXCIsXG4gICAgICAgIGJlZ2luOiBlaXRoZXIoLi4uTVVMVElfV09SRF9UWVBFUylcbiAgICAgIH0sXG4gICAgICBGVU5DVElPTl9DQUxMLFxuICAgICAgVkFSSUFCTEUsXG4gICAgICBTVFJJTkcsXG4gICAgICBRVU9URURfSURFTlRJRklFUixcbiAgICAgIGhsanMuQ19OVU1CRVJfTU9ERSxcbiAgICAgIGhsanMuQ19CTE9DS19DT01NRU5UX01PREUsXG4gICAgICBDT01NRU5UX01PREUsXG4gICAgICBPUEVSQVRPUlxuICAgIF1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzcWw7XG4iXSwic291cmNlUm9vdCI6IiJ9