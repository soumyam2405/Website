exports.ids = [163];
exports.modules = {

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

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvc3FsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhO0FBQ2I7O0FBRUE7QUFDQSxXQUFXLGlCQUFpQjtBQUM1QixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFdBQVcsc0JBQXNCO0FBQ2pDLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxxQkFBcUI7QUFDaEMsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsY0FBYztBQUMvQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0NBQWtDLGlCQUFpQixLQUFLO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1Asa0JBQWtCLEtBQUs7QUFDdkIsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsNEJBQTRCO0FBQy9EO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiIxNjMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHJldHVybnMge1JlZ0V4cH1cbiAqICovXG5cbi8qKlxuICogQHBhcmFtIHtSZWdFeHAgfCBzdHJpbmcgfSByZVxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gc291cmNlKHJlKSB7XG4gIGlmICghcmUpIHJldHVybiBudWxsO1xuICBpZiAodHlwZW9mIHJlID09PSBcInN0cmluZ1wiKSByZXR1cm4gcmU7XG5cbiAgcmV0dXJuIHJlLnNvdXJjZTtcbn1cblxuLyoqXG4gKiBAcGFyYW0gey4uLihSZWdFeHAgfCBzdHJpbmcpIH0gYXJnc1xuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gY29uY2F0KC4uLmFyZ3MpIHtcbiAgY29uc3Qgam9pbmVkID0gYXJncy5tYXAoKHgpID0+IHNvdXJjZSh4KSkuam9pbihcIlwiKTtcbiAgcmV0dXJuIGpvaW5lZDtcbn1cblxuLyoqXG4gKiBBbnkgb2YgdGhlIHBhc3NlZCBleHByZXNzc2lvbnMgbWF5IG1hdGNoXG4gKlxuICogQ3JlYXRlcyBhIGh1Z2UgdGhpcyB8IHRoaXMgfCB0aGF0IHwgdGhhdCBtYXRjaFxuICogQHBhcmFtIHsoUmVnRXhwIHwgc3RyaW5nKVtdIH0gYXJnc1xuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZWl0aGVyKC4uLmFyZ3MpIHtcbiAgY29uc3Qgam9pbmVkID0gJygnICsgYXJncy5tYXAoKHgpID0+IHNvdXJjZSh4KSkuam9pbihcInxcIikgKyBcIilcIjtcbiAgcmV0dXJuIGpvaW5lZDtcbn1cblxuLypcbiBMYW5ndWFnZTogU1FMXG4gV2Vic2l0ZTogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvU1FMXG4gQ2F0ZWdvcnk6IGNvbW1vbiwgZGF0YWJhc2VcbiAqL1xuXG5mdW5jdGlvbiBzcWwoaGxqcykge1xuICBjb25zdCBDT01NRU5UX01PREUgPSBobGpzLkNPTU1FTlQoJy0tJywgJyQnKTtcbiAgY29uc3QgU1RSSU5HID0ge1xuICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgdmFyaWFudHM6IFtcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IC8nLyxcbiAgICAgICAgZW5kOiAvJy8sXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAge2JlZ2luOiAvJycvIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfTtcbiAgY29uc3QgUVVPVEVEX0lERU5USUZJRVIgPSB7XG4gICAgYmVnaW46IC9cIi8sXG4gICAgZW5kOiAvXCIvLFxuICAgIGNvbnRhaW5zOiBbIHsgYmVnaW46IC9cIlwiLyB9IF1cbiAgfTtcblxuICBjb25zdCBMSVRFUkFMUyA9IFtcbiAgICBcInRydWVcIixcbiAgICBcImZhbHNlXCIsXG4gICAgLy8gTm90IHN1cmUgaXQncyBjb3JyZWN0IHRvIGNhbGwgTlVMTCBsaXRlcmFsLCBhbmQgY2xhdXNlcyBsaWtlIElTIFtOT1RdIE5VTEwgbG9vayBzdHJhbmdlIHRoYXQgd2F5LlxuICAgIC8vIFwibnVsbFwiLFxuICAgIFwidW5rbm93blwiXG4gIF07XG5cbiAgY29uc3QgTVVMVElfV09SRF9UWVBFUyA9IFtcbiAgICBcImRvdWJsZSBwcmVjaXNpb25cIixcbiAgICBcImxhcmdlIG9iamVjdFwiLFxuICAgIFwid2l0aCB0aW1lem9uZVwiLFxuICAgIFwid2l0aG91dCB0aW1lem9uZVwiXG4gIF07XG5cbiAgY29uc3QgVFlQRVMgPSBbXG4gICAgJ2JpZ2ludCcsXG4gICAgJ2JpbmFyeScsXG4gICAgJ2Jsb2InLFxuICAgICdib29sZWFuJyxcbiAgICAnY2hhcicsXG4gICAgJ2NoYXJhY3RlcicsXG4gICAgJ2Nsb2InLFxuICAgICdkYXRlJyxcbiAgICAnZGVjJyxcbiAgICAnZGVjZmxvYXQnLFxuICAgICdkZWNpbWFsJyxcbiAgICAnZmxvYXQnLFxuICAgICdpbnQnLFxuICAgICdpbnRlZ2VyJyxcbiAgICAnaW50ZXJ2YWwnLFxuICAgICduY2hhcicsXG4gICAgJ25jbG9iJyxcbiAgICAnbmF0aW9uYWwnLFxuICAgICdudW1lcmljJyxcbiAgICAncmVhbCcsXG4gICAgJ3JvdycsXG4gICAgJ3NtYWxsaW50JyxcbiAgICAndGltZScsXG4gICAgJ3RpbWVzdGFtcCcsXG4gICAgJ3ZhcmNoYXInLFxuICAgICd2YXJ5aW5nJywgLy8gbW9kaWZpZXIgKGNoYXJhY3RlciB2YXJ5aW5nKVxuICAgICd2YXJiaW5hcnknXG4gIF07XG5cbiAgY29uc3QgTk9OX1JFU0VSVkVEX1dPUkRTID0gW1xuICAgIFwiYWRkXCIsXG4gICAgXCJhc2NcIixcbiAgICBcImNvbGxhdGlvblwiLFxuICAgIFwiZGVzY1wiLFxuICAgIFwiZmluYWxcIixcbiAgICBcImZpcnN0XCIsXG4gICAgXCJsYXN0XCIsXG4gICAgXCJ2aWV3XCJcbiAgXTtcblxuICAvLyBodHRwczovL2pha2V3aGVhdC5naXRodWIuaW8vc3FsLW92ZXJ2aWV3L3NxbC0yMDE2LWZvdW5kYXRpb24tZ3JhbW1hci5odG1sI3Jlc2VydmVkLXdvcmRcbiAgY29uc3QgUkVTRVJWRURfV09SRFMgPSBbXG4gICAgXCJhYnNcIixcbiAgICBcImFjb3NcIixcbiAgICBcImFsbFwiLFxuICAgIFwiYWxsb2NhdGVcIixcbiAgICBcImFsdGVyXCIsXG4gICAgXCJhbmRcIixcbiAgICBcImFueVwiLFxuICAgIFwiYXJlXCIsXG4gICAgXCJhcnJheVwiLFxuICAgIFwiYXJyYXlfYWdnXCIsXG4gICAgXCJhcnJheV9tYXhfY2FyZGluYWxpdHlcIixcbiAgICBcImFzXCIsXG4gICAgXCJhc2Vuc2l0aXZlXCIsXG4gICAgXCJhc2luXCIsXG4gICAgXCJhc3ltbWV0cmljXCIsXG4gICAgXCJhdFwiLFxuICAgIFwiYXRhblwiLFxuICAgIFwiYXRvbWljXCIsXG4gICAgXCJhdXRob3JpemF0aW9uXCIsXG4gICAgXCJhdmdcIixcbiAgICBcImJlZ2luXCIsXG4gICAgXCJiZWdpbl9mcmFtZVwiLFxuICAgIFwiYmVnaW5fcGFydGl0aW9uXCIsXG4gICAgXCJiZXR3ZWVuXCIsXG4gICAgXCJiaWdpbnRcIixcbiAgICBcImJpbmFyeVwiLFxuICAgIFwiYmxvYlwiLFxuICAgIFwiYm9vbGVhblwiLFxuICAgIFwiYm90aFwiLFxuICAgIFwiYnlcIixcbiAgICBcImNhbGxcIixcbiAgICBcImNhbGxlZFwiLFxuICAgIFwiY2FyZGluYWxpdHlcIixcbiAgICBcImNhc2NhZGVkXCIsXG4gICAgXCJjYXNlXCIsXG4gICAgXCJjYXN0XCIsXG4gICAgXCJjZWlsXCIsXG4gICAgXCJjZWlsaW5nXCIsXG4gICAgXCJjaGFyXCIsXG4gICAgXCJjaGFyX2xlbmd0aFwiLFxuICAgIFwiY2hhcmFjdGVyXCIsXG4gICAgXCJjaGFyYWN0ZXJfbGVuZ3RoXCIsXG4gICAgXCJjaGVja1wiLFxuICAgIFwiY2xhc3NpZmllclwiLFxuICAgIFwiY2xvYlwiLFxuICAgIFwiY2xvc2VcIixcbiAgICBcImNvYWxlc2NlXCIsXG4gICAgXCJjb2xsYXRlXCIsXG4gICAgXCJjb2xsZWN0XCIsXG4gICAgXCJjb2x1bW5cIixcbiAgICBcImNvbW1pdFwiLFxuICAgIFwiY29uZGl0aW9uXCIsXG4gICAgXCJjb25uZWN0XCIsXG4gICAgXCJjb25zdHJhaW50XCIsXG4gICAgXCJjb250YWluc1wiLFxuICAgIFwiY29udmVydFwiLFxuICAgIFwiY29weVwiLFxuICAgIFwiY29yclwiLFxuICAgIFwiY29ycmVzcG9uZGluZ1wiLFxuICAgIFwiY29zXCIsXG4gICAgXCJjb3NoXCIsXG4gICAgXCJjb3VudFwiLFxuICAgIFwiY292YXJfcG9wXCIsXG4gICAgXCJjb3Zhcl9zYW1wXCIsXG4gICAgXCJjcmVhdGVcIixcbiAgICBcImNyb3NzXCIsXG4gICAgXCJjdWJlXCIsXG4gICAgXCJjdW1lX2Rpc3RcIixcbiAgICBcImN1cnJlbnRcIixcbiAgICBcImN1cnJlbnRfY2F0YWxvZ1wiLFxuICAgIFwiY3VycmVudF9kYXRlXCIsXG4gICAgXCJjdXJyZW50X2RlZmF1bHRfdHJhbnNmb3JtX2dyb3VwXCIsXG4gICAgXCJjdXJyZW50X3BhdGhcIixcbiAgICBcImN1cnJlbnRfcm9sZVwiLFxuICAgIFwiY3VycmVudF9yb3dcIixcbiAgICBcImN1cnJlbnRfc2NoZW1hXCIsXG4gICAgXCJjdXJyZW50X3RpbWVcIixcbiAgICBcImN1cnJlbnRfdGltZXN0YW1wXCIsXG4gICAgXCJjdXJyZW50X3BhdGhcIixcbiAgICBcImN1cnJlbnRfcm9sZVwiLFxuICAgIFwiY3VycmVudF90cmFuc2Zvcm1fZ3JvdXBfZm9yX3R5cGVcIixcbiAgICBcImN1cnJlbnRfdXNlclwiLFxuICAgIFwiY3Vyc29yXCIsXG4gICAgXCJjeWNsZVwiLFxuICAgIFwiZGF0ZVwiLFxuICAgIFwiZGF5XCIsXG4gICAgXCJkZWFsbG9jYXRlXCIsXG4gICAgXCJkZWNcIixcbiAgICBcImRlY2ltYWxcIixcbiAgICBcImRlY2Zsb2F0XCIsXG4gICAgXCJkZWNsYXJlXCIsXG4gICAgXCJkZWZhdWx0XCIsXG4gICAgXCJkZWZpbmVcIixcbiAgICBcImRlbGV0ZVwiLFxuICAgIFwiZGVuc2VfcmFua1wiLFxuICAgIFwiZGVyZWZcIixcbiAgICBcImRlc2NyaWJlXCIsXG4gICAgXCJkZXRlcm1pbmlzdGljXCIsXG4gICAgXCJkaXNjb25uZWN0XCIsXG4gICAgXCJkaXN0aW5jdFwiLFxuICAgIFwiZG91YmxlXCIsXG4gICAgXCJkcm9wXCIsXG4gICAgXCJkeW5hbWljXCIsXG4gICAgXCJlYWNoXCIsXG4gICAgXCJlbGVtZW50XCIsXG4gICAgXCJlbHNlXCIsXG4gICAgXCJlbXB0eVwiLFxuICAgIFwiZW5kXCIsXG4gICAgXCJlbmRfZnJhbWVcIixcbiAgICBcImVuZF9wYXJ0aXRpb25cIixcbiAgICBcImVuZC1leGVjXCIsXG4gICAgXCJlcXVhbHNcIixcbiAgICBcImVzY2FwZVwiLFxuICAgIFwiZXZlcnlcIixcbiAgICBcImV4Y2VwdFwiLFxuICAgIFwiZXhlY1wiLFxuICAgIFwiZXhlY3V0ZVwiLFxuICAgIFwiZXhpc3RzXCIsXG4gICAgXCJleHBcIixcbiAgICBcImV4dGVybmFsXCIsXG4gICAgXCJleHRyYWN0XCIsXG4gICAgXCJmYWxzZVwiLFxuICAgIFwiZmV0Y2hcIixcbiAgICBcImZpbHRlclwiLFxuICAgIFwiZmlyc3RfdmFsdWVcIixcbiAgICBcImZsb2F0XCIsXG4gICAgXCJmbG9vclwiLFxuICAgIFwiZm9yXCIsXG4gICAgXCJmb3JlaWduXCIsXG4gICAgXCJmcmFtZV9yb3dcIixcbiAgICBcImZyZWVcIixcbiAgICBcImZyb21cIixcbiAgICBcImZ1bGxcIixcbiAgICBcImZ1bmN0aW9uXCIsXG4gICAgXCJmdXNpb25cIixcbiAgICBcImdldFwiLFxuICAgIFwiZ2xvYmFsXCIsXG4gICAgXCJncmFudFwiLFxuICAgIFwiZ3JvdXBcIixcbiAgICBcImdyb3VwaW5nXCIsXG4gICAgXCJncm91cHNcIixcbiAgICBcImhhdmluZ1wiLFxuICAgIFwiaG9sZFwiLFxuICAgIFwiaG91clwiLFxuICAgIFwiaWRlbnRpdHlcIixcbiAgICBcImluXCIsXG4gICAgXCJpbmRpY2F0b3JcIixcbiAgICBcImluaXRpYWxcIixcbiAgICBcImlubmVyXCIsXG4gICAgXCJpbm91dFwiLFxuICAgIFwiaW5zZW5zaXRpdmVcIixcbiAgICBcImluc2VydFwiLFxuICAgIFwiaW50XCIsXG4gICAgXCJpbnRlZ2VyXCIsXG4gICAgXCJpbnRlcnNlY3RcIixcbiAgICBcImludGVyc2VjdGlvblwiLFxuICAgIFwiaW50ZXJ2YWxcIixcbiAgICBcImludG9cIixcbiAgICBcImlzXCIsXG4gICAgXCJqb2luXCIsXG4gICAgXCJqc29uX2FycmF5XCIsXG4gICAgXCJqc29uX2FycmF5YWdnXCIsXG4gICAgXCJqc29uX2V4aXN0c1wiLFxuICAgIFwianNvbl9vYmplY3RcIixcbiAgICBcImpzb25fb2JqZWN0YWdnXCIsXG4gICAgXCJqc29uX3F1ZXJ5XCIsXG4gICAgXCJqc29uX3RhYmxlXCIsXG4gICAgXCJqc29uX3RhYmxlX3ByaW1pdGl2ZVwiLFxuICAgIFwianNvbl92YWx1ZVwiLFxuICAgIFwibGFnXCIsXG4gICAgXCJsYW5ndWFnZVwiLFxuICAgIFwibGFyZ2VcIixcbiAgICBcImxhc3RfdmFsdWVcIixcbiAgICBcImxhdGVyYWxcIixcbiAgICBcImxlYWRcIixcbiAgICBcImxlYWRpbmdcIixcbiAgICBcImxlZnRcIixcbiAgICBcImxpa2VcIixcbiAgICBcImxpa2VfcmVnZXhcIixcbiAgICBcImxpc3RhZ2dcIixcbiAgICBcImxuXCIsXG4gICAgXCJsb2NhbFwiLFxuICAgIFwibG9jYWx0aW1lXCIsXG4gICAgXCJsb2NhbHRpbWVzdGFtcFwiLFxuICAgIFwibG9nXCIsXG4gICAgXCJsb2cxMFwiLFxuICAgIFwibG93ZXJcIixcbiAgICBcIm1hdGNoXCIsXG4gICAgXCJtYXRjaF9udW1iZXJcIixcbiAgICBcIm1hdGNoX3JlY29nbml6ZVwiLFxuICAgIFwibWF0Y2hlc1wiLFxuICAgIFwibWF4XCIsXG4gICAgXCJtZW1iZXJcIixcbiAgICBcIm1lcmdlXCIsXG4gICAgXCJtZXRob2RcIixcbiAgICBcIm1pblwiLFxuICAgIFwibWludXRlXCIsXG4gICAgXCJtb2RcIixcbiAgICBcIm1vZGlmaWVzXCIsXG4gICAgXCJtb2R1bGVcIixcbiAgICBcIm1vbnRoXCIsXG4gICAgXCJtdWx0aXNldFwiLFxuICAgIFwibmF0aW9uYWxcIixcbiAgICBcIm5hdHVyYWxcIixcbiAgICBcIm5jaGFyXCIsXG4gICAgXCJuY2xvYlwiLFxuICAgIFwibmV3XCIsXG4gICAgXCJub1wiLFxuICAgIFwibm9uZVwiLFxuICAgIFwibm9ybWFsaXplXCIsXG4gICAgXCJub3RcIixcbiAgICBcIm50aF92YWx1ZVwiLFxuICAgIFwibnRpbGVcIixcbiAgICBcIm51bGxcIixcbiAgICBcIm51bGxpZlwiLFxuICAgIFwibnVtZXJpY1wiLFxuICAgIFwib2N0ZXRfbGVuZ3RoXCIsXG4gICAgXCJvY2N1cnJlbmNlc19yZWdleFwiLFxuICAgIFwib2ZcIixcbiAgICBcIm9mZnNldFwiLFxuICAgIFwib2xkXCIsXG4gICAgXCJvbWl0XCIsXG4gICAgXCJvblwiLFxuICAgIFwib25lXCIsXG4gICAgXCJvbmx5XCIsXG4gICAgXCJvcGVuXCIsXG4gICAgXCJvclwiLFxuICAgIFwib3JkZXJcIixcbiAgICBcIm91dFwiLFxuICAgIFwib3V0ZXJcIixcbiAgICBcIm92ZXJcIixcbiAgICBcIm92ZXJsYXBzXCIsXG4gICAgXCJvdmVybGF5XCIsXG4gICAgXCJwYXJhbWV0ZXJcIixcbiAgICBcInBhcnRpdGlvblwiLFxuICAgIFwicGF0dGVyblwiLFxuICAgIFwicGVyXCIsXG4gICAgXCJwZXJjZW50XCIsXG4gICAgXCJwZXJjZW50X3JhbmtcIixcbiAgICBcInBlcmNlbnRpbGVfY29udFwiLFxuICAgIFwicGVyY2VudGlsZV9kaXNjXCIsXG4gICAgXCJwZXJpb2RcIixcbiAgICBcInBvcnRpb25cIixcbiAgICBcInBvc2l0aW9uXCIsXG4gICAgXCJwb3NpdGlvbl9yZWdleFwiLFxuICAgIFwicG93ZXJcIixcbiAgICBcInByZWNlZGVzXCIsXG4gICAgXCJwcmVjaXNpb25cIixcbiAgICBcInByZXBhcmVcIixcbiAgICBcInByaW1hcnlcIixcbiAgICBcInByb2NlZHVyZVwiLFxuICAgIFwicHRmXCIsXG4gICAgXCJyYW5nZVwiLFxuICAgIFwicmFua1wiLFxuICAgIFwicmVhZHNcIixcbiAgICBcInJlYWxcIixcbiAgICBcInJlY3Vyc2l2ZVwiLFxuICAgIFwicmVmXCIsXG4gICAgXCJyZWZlcmVuY2VzXCIsXG4gICAgXCJyZWZlcmVuY2luZ1wiLFxuICAgIFwicmVncl9hdmd4XCIsXG4gICAgXCJyZWdyX2F2Z3lcIixcbiAgICBcInJlZ3JfY291bnRcIixcbiAgICBcInJlZ3JfaW50ZXJjZXB0XCIsXG4gICAgXCJyZWdyX3IyXCIsXG4gICAgXCJyZWdyX3Nsb3BlXCIsXG4gICAgXCJyZWdyX3N4eFwiLFxuICAgIFwicmVncl9zeHlcIixcbiAgICBcInJlZ3Jfc3l5XCIsXG4gICAgXCJyZWxlYXNlXCIsXG4gICAgXCJyZXN1bHRcIixcbiAgICBcInJldHVyblwiLFxuICAgIFwicmV0dXJuc1wiLFxuICAgIFwicmV2b2tlXCIsXG4gICAgXCJyaWdodFwiLFxuICAgIFwicm9sbGJhY2tcIixcbiAgICBcInJvbGx1cFwiLFxuICAgIFwicm93XCIsXG4gICAgXCJyb3dfbnVtYmVyXCIsXG4gICAgXCJyb3dzXCIsXG4gICAgXCJydW5uaW5nXCIsXG4gICAgXCJzYXZlcG9pbnRcIixcbiAgICBcInNjb3BlXCIsXG4gICAgXCJzY3JvbGxcIixcbiAgICBcInNlYXJjaFwiLFxuICAgIFwic2Vjb25kXCIsXG4gICAgXCJzZWVrXCIsXG4gICAgXCJzZWxlY3RcIixcbiAgICBcInNlbnNpdGl2ZVwiLFxuICAgIFwic2Vzc2lvbl91c2VyXCIsXG4gICAgXCJzZXRcIixcbiAgICBcInNob3dcIixcbiAgICBcInNpbWlsYXJcIixcbiAgICBcInNpblwiLFxuICAgIFwic2luaFwiLFxuICAgIFwic2tpcFwiLFxuICAgIFwic21hbGxpbnRcIixcbiAgICBcInNvbWVcIixcbiAgICBcInNwZWNpZmljXCIsXG4gICAgXCJzcGVjaWZpY3R5cGVcIixcbiAgICBcInNxbFwiLFxuICAgIFwic3FsZXhjZXB0aW9uXCIsXG4gICAgXCJzcWxzdGF0ZVwiLFxuICAgIFwic3Fsd2FybmluZ1wiLFxuICAgIFwic3FydFwiLFxuICAgIFwic3RhcnRcIixcbiAgICBcInN0YXRpY1wiLFxuICAgIFwic3RkZGV2X3BvcFwiLFxuICAgIFwic3RkZGV2X3NhbXBcIixcbiAgICBcInN1Ym11bHRpc2V0XCIsXG4gICAgXCJzdWJzZXRcIixcbiAgICBcInN1YnN0cmluZ1wiLFxuICAgIFwic3Vic3RyaW5nX3JlZ2V4XCIsXG4gICAgXCJzdWNjZWVkc1wiLFxuICAgIFwic3VtXCIsXG4gICAgXCJzeW1tZXRyaWNcIixcbiAgICBcInN5c3RlbVwiLFxuICAgIFwic3lzdGVtX3RpbWVcIixcbiAgICBcInN5c3RlbV91c2VyXCIsXG4gICAgXCJ0YWJsZVwiLFxuICAgIFwidGFibGVzYW1wbGVcIixcbiAgICBcInRhblwiLFxuICAgIFwidGFuaFwiLFxuICAgIFwidGhlblwiLFxuICAgIFwidGltZVwiLFxuICAgIFwidGltZXN0YW1wXCIsXG4gICAgXCJ0aW1lem9uZV9ob3VyXCIsXG4gICAgXCJ0aW1lem9uZV9taW51dGVcIixcbiAgICBcInRvXCIsXG4gICAgXCJ0cmFpbGluZ1wiLFxuICAgIFwidHJhbnNsYXRlXCIsXG4gICAgXCJ0cmFuc2xhdGVfcmVnZXhcIixcbiAgICBcInRyYW5zbGF0aW9uXCIsXG4gICAgXCJ0cmVhdFwiLFxuICAgIFwidHJpZ2dlclwiLFxuICAgIFwidHJpbVwiLFxuICAgIFwidHJpbV9hcnJheVwiLFxuICAgIFwidHJ1ZVwiLFxuICAgIFwidHJ1bmNhdGVcIixcbiAgICBcInVlc2NhcGVcIixcbiAgICBcInVuaW9uXCIsXG4gICAgXCJ1bmlxdWVcIixcbiAgICBcInVua25vd25cIixcbiAgICBcInVubmVzdFwiLFxuICAgIFwidXBkYXRlICAgXCIsXG4gICAgXCJ1cHBlclwiLFxuICAgIFwidXNlclwiLFxuICAgIFwidXNpbmdcIixcbiAgICBcInZhbHVlXCIsXG4gICAgXCJ2YWx1ZXNcIixcbiAgICBcInZhbHVlX29mXCIsXG4gICAgXCJ2YXJfcG9wXCIsXG4gICAgXCJ2YXJfc2FtcFwiLFxuICAgIFwidmFyYmluYXJ5XCIsXG4gICAgXCJ2YXJjaGFyXCIsXG4gICAgXCJ2YXJ5aW5nXCIsXG4gICAgXCJ2ZXJzaW9uaW5nXCIsXG4gICAgXCJ3aGVuXCIsXG4gICAgXCJ3aGVuZXZlclwiLFxuICAgIFwid2hlcmVcIixcbiAgICBcIndpZHRoX2J1Y2tldFwiLFxuICAgIFwid2luZG93XCIsXG4gICAgXCJ3aXRoXCIsXG4gICAgXCJ3aXRoaW5cIixcbiAgICBcIndpdGhvdXRcIixcbiAgICBcInllYXJcIixcbiAgXTtcblxuICAvLyB0aGVzZSBhcmUgcmVzZXJ2ZWQgd29yZHMgd2UgaGF2ZSBpZGVudGlmaWVkIHRvIGJlIGZ1bmN0aW9uc1xuICAvLyBhbmQgc2hvdWxkIG9ubHkgYmUgaGlnaGxpZ2h0ZWQgaW4gYSBkaXNwYXRjaC1saWtlIGNvbnRleHRcbiAgLy8gaWUsIGFycmF5X2FnZyguLi4pLCBldGMuXG4gIGNvbnN0IFJFU0VSVkVEX0ZVTkNUSU9OUyA9IFtcbiAgICBcImFic1wiLFxuICAgIFwiYWNvc1wiLFxuICAgIFwiYXJyYXlfYWdnXCIsXG4gICAgXCJhc2luXCIsXG4gICAgXCJhdGFuXCIsXG4gICAgXCJhdmdcIixcbiAgICBcImNhc3RcIixcbiAgICBcImNlaWxcIixcbiAgICBcImNlaWxpbmdcIixcbiAgICBcImNvYWxlc2NlXCIsXG4gICAgXCJjb3JyXCIsXG4gICAgXCJjb3NcIixcbiAgICBcImNvc2hcIixcbiAgICBcImNvdW50XCIsXG4gICAgXCJjb3Zhcl9wb3BcIixcbiAgICBcImNvdmFyX3NhbXBcIixcbiAgICBcImN1bWVfZGlzdFwiLFxuICAgIFwiZGVuc2VfcmFua1wiLFxuICAgIFwiZGVyZWZcIixcbiAgICBcImVsZW1lbnRcIixcbiAgICBcImV4cFwiLFxuICAgIFwiZXh0cmFjdFwiLFxuICAgIFwiZmlyc3RfdmFsdWVcIixcbiAgICBcImZsb29yXCIsXG4gICAgXCJqc29uX2FycmF5XCIsXG4gICAgXCJqc29uX2FycmF5YWdnXCIsXG4gICAgXCJqc29uX2V4aXN0c1wiLFxuICAgIFwianNvbl9vYmplY3RcIixcbiAgICBcImpzb25fb2JqZWN0YWdnXCIsXG4gICAgXCJqc29uX3F1ZXJ5XCIsXG4gICAgXCJqc29uX3RhYmxlXCIsXG4gICAgXCJqc29uX3RhYmxlX3ByaW1pdGl2ZVwiLFxuICAgIFwianNvbl92YWx1ZVwiLFxuICAgIFwibGFnXCIsXG4gICAgXCJsYXN0X3ZhbHVlXCIsXG4gICAgXCJsZWFkXCIsXG4gICAgXCJsaXN0YWdnXCIsXG4gICAgXCJsblwiLFxuICAgIFwibG9nXCIsXG4gICAgXCJsb2cxMFwiLFxuICAgIFwibG93ZXJcIixcbiAgICBcIm1heFwiLFxuICAgIFwibWluXCIsXG4gICAgXCJtb2RcIixcbiAgICBcIm50aF92YWx1ZVwiLFxuICAgIFwibnRpbGVcIixcbiAgICBcIm51bGxpZlwiLFxuICAgIFwicGVyY2VudF9yYW5rXCIsXG4gICAgXCJwZXJjZW50aWxlX2NvbnRcIixcbiAgICBcInBlcmNlbnRpbGVfZGlzY1wiLFxuICAgIFwicG9zaXRpb25cIixcbiAgICBcInBvc2l0aW9uX3JlZ2V4XCIsXG4gICAgXCJwb3dlclwiLFxuICAgIFwicmFua1wiLFxuICAgIFwicmVncl9hdmd4XCIsXG4gICAgXCJyZWdyX2F2Z3lcIixcbiAgICBcInJlZ3JfY291bnRcIixcbiAgICBcInJlZ3JfaW50ZXJjZXB0XCIsXG4gICAgXCJyZWdyX3IyXCIsXG4gICAgXCJyZWdyX3Nsb3BlXCIsXG4gICAgXCJyZWdyX3N4eFwiLFxuICAgIFwicmVncl9zeHlcIixcbiAgICBcInJlZ3Jfc3l5XCIsXG4gICAgXCJyb3dfbnVtYmVyXCIsXG4gICAgXCJzaW5cIixcbiAgICBcInNpbmhcIixcbiAgICBcInNxcnRcIixcbiAgICBcInN0ZGRldl9wb3BcIixcbiAgICBcInN0ZGRldl9zYW1wXCIsXG4gICAgXCJzdWJzdHJpbmdcIixcbiAgICBcInN1YnN0cmluZ19yZWdleFwiLFxuICAgIFwic3VtXCIsXG4gICAgXCJ0YW5cIixcbiAgICBcInRhbmhcIixcbiAgICBcInRyYW5zbGF0ZVwiLFxuICAgIFwidHJhbnNsYXRlX3JlZ2V4XCIsXG4gICAgXCJ0cmVhdFwiLFxuICAgIFwidHJpbVwiLFxuICAgIFwidHJpbV9hcnJheVwiLFxuICAgIFwidW5uZXN0XCIsXG4gICAgXCJ1cHBlclwiLFxuICAgIFwidmFsdWVfb2ZcIixcbiAgICBcInZhcl9wb3BcIixcbiAgICBcInZhcl9zYW1wXCIsXG4gICAgXCJ3aWR0aF9idWNrZXRcIixcbiAgXTtcblxuICAvLyB0aGVzZSBmdW5jdGlvbnMgY2FuXG4gIGNvbnN0IFBPU1NJQkxFX1dJVEhPVVRfUEFSRU5TID0gW1xuICAgIFwiY3VycmVudF9jYXRhbG9nXCIsXG4gICAgXCJjdXJyZW50X2RhdGVcIixcbiAgICBcImN1cnJlbnRfZGVmYXVsdF90cmFuc2Zvcm1fZ3JvdXBcIixcbiAgICBcImN1cnJlbnRfcGF0aFwiLFxuICAgIFwiY3VycmVudF9yb2xlXCIsXG4gICAgXCJjdXJyZW50X3NjaGVtYVwiLFxuICAgIFwiY3VycmVudF90cmFuc2Zvcm1fZ3JvdXBfZm9yX3R5cGVcIixcbiAgICBcImN1cnJlbnRfdXNlclwiLFxuICAgIFwic2Vzc2lvbl91c2VyXCIsXG4gICAgXCJzeXN0ZW1fdGltZVwiLFxuICAgIFwic3lzdGVtX3VzZXJcIixcbiAgICBcImN1cnJlbnRfdGltZVwiLFxuICAgIFwibG9jYWx0aW1lXCIsXG4gICAgXCJjdXJyZW50X3RpbWVzdGFtcFwiLFxuICAgIFwibG9jYWx0aW1lc3RhbXBcIlxuICBdO1xuXG4gIC8vIHRob3NlIGV4aXN0IHRvIGJvb3N0IHJlbGV2YW5jZSBtYWtpbmcgdGhlc2UgdmVyeVxuICAvLyBcIlNRTCBsaWtlXCIga2V5d29yZCBjb21ib3Mgd29ydGggKzEgZXh0cmEgcmVsZXZhbmNlXG4gIGNvbnN0IENPTUJPUyA9IFtcbiAgICBcImNyZWF0ZSB0YWJsZVwiLFxuICAgIFwiaW5zZXJ0IGludG9cIixcbiAgICBcInByaW1hcnkga2V5XCIsXG4gICAgXCJmb3JlaWduIGtleVwiLFxuICAgIFwibm90IG51bGxcIixcbiAgICBcImFsdGVyIHRhYmxlXCIsXG4gICAgXCJhZGQgY29uc3RyYWludFwiLFxuICAgIFwiZ3JvdXBpbmcgc2V0c1wiLFxuICAgIFwib24gb3ZlcmZsb3dcIixcbiAgICBcImNoYXJhY3RlciBzZXRcIixcbiAgICBcInJlc3BlY3QgbnVsbHNcIixcbiAgICBcImlnbm9yZSBudWxsc1wiLFxuICAgIFwibnVsbHMgZmlyc3RcIixcbiAgICBcIm51bGxzIGxhc3RcIixcbiAgICBcImRlcHRoIGZpcnN0XCIsXG4gICAgXCJicmVhZHRoIGZpcnN0XCJcbiAgXTtcblxuICBjb25zdCBGVU5DVElPTlMgPSBSRVNFUlZFRF9GVU5DVElPTlM7XG5cbiAgY29uc3QgS0VZV09SRFMgPSBbLi4uUkVTRVJWRURfV09SRFMsIC4uLk5PTl9SRVNFUlZFRF9XT1JEU10uZmlsdGVyKChrZXl3b3JkKSA9PiB7XG4gICAgcmV0dXJuICFSRVNFUlZFRF9GVU5DVElPTlMuaW5jbHVkZXMoa2V5d29yZCk7XG4gIH0pO1xuXG4gIGNvbnN0IFZBUklBQkxFID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2YXJpYWJsZVwiLFxuICAgIGJlZ2luOiAvQFthLXowLTldKy8sXG4gIH07XG5cbiAgY29uc3QgT1BFUkFUT1IgPSB7XG4gICAgY2xhc3NOYW1lOiBcIm9wZXJhdG9yXCIsXG4gICAgYmVnaW46IC9bLSsqLz0lXn5dfCYmP3xcXHxcXHw/fCE9P3w8KD86PT4/fDx8Pik/fD5bPj1dPy8sXG4gICAgcmVsZXZhbmNlOiAwLFxuICB9O1xuXG4gIGNvbnN0IEZVTkNUSU9OX0NBTEwgPSB7XG4gICAgYmVnaW46IGNvbmNhdCgvXFxiLywgZWl0aGVyKC4uLkZVTkNUSU9OUyksIC9cXHMqXFwoLyksXG4gICAga2V5d29yZHM6IHtcbiAgICAgIGJ1aWx0X2luOiBGVU5DVElPTlNcbiAgICB9XG4gIH07XG5cbiAgLy8ga2V5d29yZHMgd2l0aCBsZXNzIHRoYW4gMyBsZXR0ZXJzIGFyZSByZWR1Y2VkIGluIHJlbGV2YW5jeVxuICBmdW5jdGlvbiByZWR1Y2VSZWxldmFuY3kobGlzdCwge2V4Y2VwdGlvbnMsIHdoZW59ID0ge30pIHtcbiAgICBjb25zdCBxdWFsaWZ5Rm4gPSB3aGVuO1xuICAgIGV4Y2VwdGlvbnMgPSBleGNlcHRpb25zIHx8IFtdO1xuICAgIHJldHVybiBsaXN0Lm1hcCgoaXRlbSkgPT4ge1xuICAgICAgaWYgKGl0ZW0ubWF0Y2goL1xcfFxcZCskLykgfHwgZXhjZXB0aW9ucy5pbmNsdWRlcyhpdGVtKSkge1xuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgIH0gZWxzZSBpZiAocXVhbGlmeUZuKGl0ZW0pKSB7XG4gICAgICAgIHJldHVybiBgJHtpdGVtfXwwYDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnU1FMJyxcbiAgICBjYXNlX2luc2Vuc2l0aXZlOiB0cnVlLFxuICAgIC8vIGRvZXMgbm90IGluY2x1ZGUge30gb3IgSFRNTCB0YWdzIGA8L2BcbiAgICBpbGxlZ2FsOiAvW3t9XXw8XFwvLyxcbiAgICBrZXl3b3Jkczoge1xuICAgICAgJHBhdHRlcm46IC9cXGJbXFx3XFwuXSsvLFxuICAgICAga2V5d29yZDpcbiAgICAgICAgcmVkdWNlUmVsZXZhbmN5KEtFWVdPUkRTLCB7IHdoZW46ICh4KSA9PiB4Lmxlbmd0aCA8IDMgfSksXG4gICAgICBsaXRlcmFsOiBMSVRFUkFMUyxcbiAgICAgIHR5cGU6IFRZUEVTLFxuICAgICAgYnVpbHRfaW46IFBPU1NJQkxFX1dJVEhPVVRfUEFSRU5TXG4gICAgfSxcbiAgICBjb250YWluczogW1xuICAgICAge1xuICAgICAgICBiZWdpbjogZWl0aGVyKC4uLkNPTUJPUyksXG4gICAgICAgIGtleXdvcmRzOiB7XG4gICAgICAgICAgJHBhdHRlcm46IC9bXFx3XFwuXSsvLFxuICAgICAgICAgIGtleXdvcmQ6IEtFWVdPUkRTLmNvbmNhdChDT01CT1MpLFxuICAgICAgICAgIGxpdGVyYWw6IExJVEVSQUxTLFxuICAgICAgICAgIHR5cGU6IFRZUEVTXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6IFwidHlwZVwiLFxuICAgICAgICBiZWdpbjogZWl0aGVyKC4uLk1VTFRJX1dPUkRfVFlQRVMpXG4gICAgICB9LFxuICAgICAgRlVOQ1RJT05fQ0FMTCxcbiAgICAgIFZBUklBQkxFLFxuICAgICAgU1RSSU5HLFxuICAgICAgUVVPVEVEX0lERU5USUZJRVIsXG4gICAgICBobGpzLkNfTlVNQkVSX01PREUsXG4gICAgICBobGpzLkNfQkxPQ0tfQ09NTUVOVF9NT0RFLFxuICAgICAgQ09NTUVOVF9NT0RFLFxuICAgICAgT1BFUkFUT1JcbiAgICBdXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3FsO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==