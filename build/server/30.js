exports.ids = [30];
exports.modules = {

/***/ "./node_modules/highlight.js/lib/languages/cmake.js":
/*!**********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/cmake.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: CMake
Description: CMake is an open-source cross-platform system for build automation.
Author: Igor Kalnitsky <igor@kalnitsky.org>
Website: https://cmake.org
*/

/** @type LanguageFn */
function cmake(hljs) {
  return {
    name: 'CMake',
    aliases: ['cmake.in'],
    case_insensitive: true,
    keywords: {
      keyword:
        // scripting commands
        'break cmake_host_system_information cmake_minimum_required cmake_parse_arguments ' +
        'cmake_policy configure_file continue elseif else endforeach endfunction endif endmacro ' +
        'endwhile execute_process file find_file find_library find_package find_path ' +
        'find_program foreach function get_cmake_property get_directory_property ' +
        'get_filename_component get_property if include include_guard list macro ' +
        'mark_as_advanced math message option return separate_arguments ' +
        'set_directory_properties set_property set site_name string unset variable_watch while ' +
        // project commands
        'add_compile_definitions add_compile_options add_custom_command add_custom_target ' +
        'add_definitions add_dependencies add_executable add_library add_link_options ' +
        'add_subdirectory add_test aux_source_directory build_command create_test_sourcelist ' +
        'define_property enable_language enable_testing export fltk_wrap_ui ' +
        'get_source_file_property get_target_property get_test_property include_directories ' +
        'include_external_msproject include_regular_expression install link_directories ' +
        'link_libraries load_cache project qt_wrap_cpp qt_wrap_ui remove_definitions ' +
        'set_source_files_properties set_target_properties set_tests_properties source_group ' +
        'target_compile_definitions target_compile_features target_compile_options ' +
        'target_include_directories target_link_directories target_link_libraries ' +
        'target_link_options target_sources try_compile try_run ' +
        // CTest commands
        'ctest_build ctest_configure ctest_coverage ctest_empty_binary_directory ctest_memcheck ' +
        'ctest_read_custom_files ctest_run_script ctest_sleep ctest_start ctest_submit ' +
        'ctest_test ctest_update ctest_upload ' +
        // deprecated commands
        'build_name exec_program export_library_dependencies install_files install_programs ' +
        'install_targets load_command make_directory output_required_files remove ' +
        'subdir_depends subdirs use_mangled_mesa utility_source variable_requires write_file ' +
        'qt5_use_modules qt5_use_package qt5_wrap_cpp ' +
        // core keywords
        'on off true false and or not command policy target test exists is_newer_than ' +
        'is_directory is_symlink is_absolute matches less greater equal less_equal ' +
        'greater_equal strless strgreater strequal strless_equal strgreater_equal version_less ' +
        'version_greater version_equal version_less_equal version_greater_equal in_list defined'
    },
    contains: [
      {
        className: 'variable',
        begin: /\$\{/,
        end: /\}/
      },
      hljs.HASH_COMMENT_MODE,
      hljs.QUOTE_STRING_MODE,
      hljs.NUMBER_MODE
    ]
  };
}

module.exports = cmake;


/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvY21ha2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCLGdCQUFnQjtBQUNoQixPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6IjMwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBDTWFrZVxuRGVzY3JpcHRpb246IENNYWtlIGlzIGFuIG9wZW4tc291cmNlIGNyb3NzLXBsYXRmb3JtIHN5c3RlbSBmb3IgYnVpbGQgYXV0b21hdGlvbi5cbkF1dGhvcjogSWdvciBLYWxuaXRza3kgPGlnb3JAa2Fsbml0c2t5Lm9yZz5cbldlYnNpdGU6IGh0dHBzOi8vY21ha2Uub3JnXG4qL1xuXG4vKiogQHR5cGUgTGFuZ3VhZ2VGbiAqL1xuZnVuY3Rpb24gY21ha2UoaGxqcykge1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICdDTWFrZScsXG4gICAgYWxpYXNlczogWydjbWFrZS5pbiddLFxuICAgIGNhc2VfaW5zZW5zaXRpdmU6IHRydWUsXG4gICAga2V5d29yZHM6IHtcbiAgICAgIGtleXdvcmQ6XG4gICAgICAgIC8vIHNjcmlwdGluZyBjb21tYW5kc1xuICAgICAgICAnYnJlYWsgY21ha2VfaG9zdF9zeXN0ZW1faW5mb3JtYXRpb24gY21ha2VfbWluaW11bV9yZXF1aXJlZCBjbWFrZV9wYXJzZV9hcmd1bWVudHMgJyArXG4gICAgICAgICdjbWFrZV9wb2xpY3kgY29uZmlndXJlX2ZpbGUgY29udGludWUgZWxzZWlmIGVsc2UgZW5kZm9yZWFjaCBlbmRmdW5jdGlvbiBlbmRpZiBlbmRtYWNybyAnICtcbiAgICAgICAgJ2VuZHdoaWxlIGV4ZWN1dGVfcHJvY2VzcyBmaWxlIGZpbmRfZmlsZSBmaW5kX2xpYnJhcnkgZmluZF9wYWNrYWdlIGZpbmRfcGF0aCAnICtcbiAgICAgICAgJ2ZpbmRfcHJvZ3JhbSBmb3JlYWNoIGZ1bmN0aW9uIGdldF9jbWFrZV9wcm9wZXJ0eSBnZXRfZGlyZWN0b3J5X3Byb3BlcnR5ICcgK1xuICAgICAgICAnZ2V0X2ZpbGVuYW1lX2NvbXBvbmVudCBnZXRfcHJvcGVydHkgaWYgaW5jbHVkZSBpbmNsdWRlX2d1YXJkIGxpc3QgbWFjcm8gJyArXG4gICAgICAgICdtYXJrX2FzX2FkdmFuY2VkIG1hdGggbWVzc2FnZSBvcHRpb24gcmV0dXJuIHNlcGFyYXRlX2FyZ3VtZW50cyAnICtcbiAgICAgICAgJ3NldF9kaXJlY3RvcnlfcHJvcGVydGllcyBzZXRfcHJvcGVydHkgc2V0IHNpdGVfbmFtZSBzdHJpbmcgdW5zZXQgdmFyaWFibGVfd2F0Y2ggd2hpbGUgJyArXG4gICAgICAgIC8vIHByb2plY3QgY29tbWFuZHNcbiAgICAgICAgJ2FkZF9jb21waWxlX2RlZmluaXRpb25zIGFkZF9jb21waWxlX29wdGlvbnMgYWRkX2N1c3RvbV9jb21tYW5kIGFkZF9jdXN0b21fdGFyZ2V0ICcgK1xuICAgICAgICAnYWRkX2RlZmluaXRpb25zIGFkZF9kZXBlbmRlbmNpZXMgYWRkX2V4ZWN1dGFibGUgYWRkX2xpYnJhcnkgYWRkX2xpbmtfb3B0aW9ucyAnICtcbiAgICAgICAgJ2FkZF9zdWJkaXJlY3RvcnkgYWRkX3Rlc3QgYXV4X3NvdXJjZV9kaXJlY3RvcnkgYnVpbGRfY29tbWFuZCBjcmVhdGVfdGVzdF9zb3VyY2VsaXN0ICcgK1xuICAgICAgICAnZGVmaW5lX3Byb3BlcnR5IGVuYWJsZV9sYW5ndWFnZSBlbmFibGVfdGVzdGluZyBleHBvcnQgZmx0a193cmFwX3VpICcgK1xuICAgICAgICAnZ2V0X3NvdXJjZV9maWxlX3Byb3BlcnR5IGdldF90YXJnZXRfcHJvcGVydHkgZ2V0X3Rlc3RfcHJvcGVydHkgaW5jbHVkZV9kaXJlY3RvcmllcyAnICtcbiAgICAgICAgJ2luY2x1ZGVfZXh0ZXJuYWxfbXNwcm9qZWN0IGluY2x1ZGVfcmVndWxhcl9leHByZXNzaW9uIGluc3RhbGwgbGlua19kaXJlY3RvcmllcyAnICtcbiAgICAgICAgJ2xpbmtfbGlicmFyaWVzIGxvYWRfY2FjaGUgcHJvamVjdCBxdF93cmFwX2NwcCBxdF93cmFwX3VpIHJlbW92ZV9kZWZpbml0aW9ucyAnICtcbiAgICAgICAgJ3NldF9zb3VyY2VfZmlsZXNfcHJvcGVydGllcyBzZXRfdGFyZ2V0X3Byb3BlcnRpZXMgc2V0X3Rlc3RzX3Byb3BlcnRpZXMgc291cmNlX2dyb3VwICcgK1xuICAgICAgICAndGFyZ2V0X2NvbXBpbGVfZGVmaW5pdGlvbnMgdGFyZ2V0X2NvbXBpbGVfZmVhdHVyZXMgdGFyZ2V0X2NvbXBpbGVfb3B0aW9ucyAnICtcbiAgICAgICAgJ3RhcmdldF9pbmNsdWRlX2RpcmVjdG9yaWVzIHRhcmdldF9saW5rX2RpcmVjdG9yaWVzIHRhcmdldF9saW5rX2xpYnJhcmllcyAnICtcbiAgICAgICAgJ3RhcmdldF9saW5rX29wdGlvbnMgdGFyZ2V0X3NvdXJjZXMgdHJ5X2NvbXBpbGUgdHJ5X3J1biAnICtcbiAgICAgICAgLy8gQ1Rlc3QgY29tbWFuZHNcbiAgICAgICAgJ2N0ZXN0X2J1aWxkIGN0ZXN0X2NvbmZpZ3VyZSBjdGVzdF9jb3ZlcmFnZSBjdGVzdF9lbXB0eV9iaW5hcnlfZGlyZWN0b3J5IGN0ZXN0X21lbWNoZWNrICcgK1xuICAgICAgICAnY3Rlc3RfcmVhZF9jdXN0b21fZmlsZXMgY3Rlc3RfcnVuX3NjcmlwdCBjdGVzdF9zbGVlcCBjdGVzdF9zdGFydCBjdGVzdF9zdWJtaXQgJyArXG4gICAgICAgICdjdGVzdF90ZXN0IGN0ZXN0X3VwZGF0ZSBjdGVzdF91cGxvYWQgJyArXG4gICAgICAgIC8vIGRlcHJlY2F0ZWQgY29tbWFuZHNcbiAgICAgICAgJ2J1aWxkX25hbWUgZXhlY19wcm9ncmFtIGV4cG9ydF9saWJyYXJ5X2RlcGVuZGVuY2llcyBpbnN0YWxsX2ZpbGVzIGluc3RhbGxfcHJvZ3JhbXMgJyArXG4gICAgICAgICdpbnN0YWxsX3RhcmdldHMgbG9hZF9jb21tYW5kIG1ha2VfZGlyZWN0b3J5IG91dHB1dF9yZXF1aXJlZF9maWxlcyByZW1vdmUgJyArXG4gICAgICAgICdzdWJkaXJfZGVwZW5kcyBzdWJkaXJzIHVzZV9tYW5nbGVkX21lc2EgdXRpbGl0eV9zb3VyY2UgdmFyaWFibGVfcmVxdWlyZXMgd3JpdGVfZmlsZSAnICtcbiAgICAgICAgJ3F0NV91c2VfbW9kdWxlcyBxdDVfdXNlX3BhY2thZ2UgcXQ1X3dyYXBfY3BwICcgK1xuICAgICAgICAvLyBjb3JlIGtleXdvcmRzXG4gICAgICAgICdvbiBvZmYgdHJ1ZSBmYWxzZSBhbmQgb3Igbm90IGNvbW1hbmQgcG9saWN5IHRhcmdldCB0ZXN0IGV4aXN0cyBpc19uZXdlcl90aGFuICcgK1xuICAgICAgICAnaXNfZGlyZWN0b3J5IGlzX3N5bWxpbmsgaXNfYWJzb2x1dGUgbWF0Y2hlcyBsZXNzIGdyZWF0ZXIgZXF1YWwgbGVzc19lcXVhbCAnICtcbiAgICAgICAgJ2dyZWF0ZXJfZXF1YWwgc3RybGVzcyBzdHJncmVhdGVyIHN0cmVxdWFsIHN0cmxlc3NfZXF1YWwgc3RyZ3JlYXRlcl9lcXVhbCB2ZXJzaW9uX2xlc3MgJyArXG4gICAgICAgICd2ZXJzaW9uX2dyZWF0ZXIgdmVyc2lvbl9lcXVhbCB2ZXJzaW9uX2xlc3NfZXF1YWwgdmVyc2lvbl9ncmVhdGVyX2VxdWFsIGluX2xpc3QgZGVmaW5lZCdcbiAgICB9LFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3ZhcmlhYmxlJyxcbiAgICAgICAgYmVnaW46IC9cXCRcXHsvLFxuICAgICAgICBlbmQ6IC9cXH0vXG4gICAgICB9LFxuICAgICAgaGxqcy5IQVNIX0NPTU1FTlRfTU9ERSxcbiAgICAgIGhsanMuUVVPVEVfU1RSSU5HX01PREUsXG4gICAgICBobGpzLk5VTUJFUl9NT0RFXG4gICAgXVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNtYWtlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==