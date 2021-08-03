(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[31],{

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

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2NtYWtlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCLGdCQUFnQjtBQUNoQixPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvMzEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuTGFuZ3VhZ2U6IENNYWtlXG5EZXNjcmlwdGlvbjogQ01ha2UgaXMgYW4gb3Blbi1zb3VyY2UgY3Jvc3MtcGxhdGZvcm0gc3lzdGVtIGZvciBidWlsZCBhdXRvbWF0aW9uLlxuQXV0aG9yOiBJZ29yIEthbG5pdHNreSA8aWdvckBrYWxuaXRza3kub3JnPlxuV2Vic2l0ZTogaHR0cHM6Ly9jbWFrZS5vcmdcbiovXG5cbi8qKiBAdHlwZSBMYW5ndWFnZUZuICovXG5mdW5jdGlvbiBjbWFrZShobGpzKSB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ0NNYWtlJyxcbiAgICBhbGlhc2VzOiBbJ2NtYWtlLmluJ10sXG4gICAgY2FzZV9pbnNlbnNpdGl2ZTogdHJ1ZSxcbiAgICBrZXl3b3Jkczoge1xuICAgICAga2V5d29yZDpcbiAgICAgICAgLy8gc2NyaXB0aW5nIGNvbW1hbmRzXG4gICAgICAgICdicmVhayBjbWFrZV9ob3N0X3N5c3RlbV9pbmZvcm1hdGlvbiBjbWFrZV9taW5pbXVtX3JlcXVpcmVkIGNtYWtlX3BhcnNlX2FyZ3VtZW50cyAnICtcbiAgICAgICAgJ2NtYWtlX3BvbGljeSBjb25maWd1cmVfZmlsZSBjb250aW51ZSBlbHNlaWYgZWxzZSBlbmRmb3JlYWNoIGVuZGZ1bmN0aW9uIGVuZGlmIGVuZG1hY3JvICcgK1xuICAgICAgICAnZW5kd2hpbGUgZXhlY3V0ZV9wcm9jZXNzIGZpbGUgZmluZF9maWxlIGZpbmRfbGlicmFyeSBmaW5kX3BhY2thZ2UgZmluZF9wYXRoICcgK1xuICAgICAgICAnZmluZF9wcm9ncmFtIGZvcmVhY2ggZnVuY3Rpb24gZ2V0X2NtYWtlX3Byb3BlcnR5IGdldF9kaXJlY3RvcnlfcHJvcGVydHkgJyArXG4gICAgICAgICdnZXRfZmlsZW5hbWVfY29tcG9uZW50IGdldF9wcm9wZXJ0eSBpZiBpbmNsdWRlIGluY2x1ZGVfZ3VhcmQgbGlzdCBtYWNybyAnICtcbiAgICAgICAgJ21hcmtfYXNfYWR2YW5jZWQgbWF0aCBtZXNzYWdlIG9wdGlvbiByZXR1cm4gc2VwYXJhdGVfYXJndW1lbnRzICcgK1xuICAgICAgICAnc2V0X2RpcmVjdG9yeV9wcm9wZXJ0aWVzIHNldF9wcm9wZXJ0eSBzZXQgc2l0ZV9uYW1lIHN0cmluZyB1bnNldCB2YXJpYWJsZV93YXRjaCB3aGlsZSAnICtcbiAgICAgICAgLy8gcHJvamVjdCBjb21tYW5kc1xuICAgICAgICAnYWRkX2NvbXBpbGVfZGVmaW5pdGlvbnMgYWRkX2NvbXBpbGVfb3B0aW9ucyBhZGRfY3VzdG9tX2NvbW1hbmQgYWRkX2N1c3RvbV90YXJnZXQgJyArXG4gICAgICAgICdhZGRfZGVmaW5pdGlvbnMgYWRkX2RlcGVuZGVuY2llcyBhZGRfZXhlY3V0YWJsZSBhZGRfbGlicmFyeSBhZGRfbGlua19vcHRpb25zICcgK1xuICAgICAgICAnYWRkX3N1YmRpcmVjdG9yeSBhZGRfdGVzdCBhdXhfc291cmNlX2RpcmVjdG9yeSBidWlsZF9jb21tYW5kIGNyZWF0ZV90ZXN0X3NvdXJjZWxpc3QgJyArXG4gICAgICAgICdkZWZpbmVfcHJvcGVydHkgZW5hYmxlX2xhbmd1YWdlIGVuYWJsZV90ZXN0aW5nIGV4cG9ydCBmbHRrX3dyYXBfdWkgJyArXG4gICAgICAgICdnZXRfc291cmNlX2ZpbGVfcHJvcGVydHkgZ2V0X3RhcmdldF9wcm9wZXJ0eSBnZXRfdGVzdF9wcm9wZXJ0eSBpbmNsdWRlX2RpcmVjdG9yaWVzICcgK1xuICAgICAgICAnaW5jbHVkZV9leHRlcm5hbF9tc3Byb2plY3QgaW5jbHVkZV9yZWd1bGFyX2V4cHJlc3Npb24gaW5zdGFsbCBsaW5rX2RpcmVjdG9yaWVzICcgK1xuICAgICAgICAnbGlua19saWJyYXJpZXMgbG9hZF9jYWNoZSBwcm9qZWN0IHF0X3dyYXBfY3BwIHF0X3dyYXBfdWkgcmVtb3ZlX2RlZmluaXRpb25zICcgK1xuICAgICAgICAnc2V0X3NvdXJjZV9maWxlc19wcm9wZXJ0aWVzIHNldF90YXJnZXRfcHJvcGVydGllcyBzZXRfdGVzdHNfcHJvcGVydGllcyBzb3VyY2VfZ3JvdXAgJyArXG4gICAgICAgICd0YXJnZXRfY29tcGlsZV9kZWZpbml0aW9ucyB0YXJnZXRfY29tcGlsZV9mZWF0dXJlcyB0YXJnZXRfY29tcGlsZV9vcHRpb25zICcgK1xuICAgICAgICAndGFyZ2V0X2luY2x1ZGVfZGlyZWN0b3JpZXMgdGFyZ2V0X2xpbmtfZGlyZWN0b3JpZXMgdGFyZ2V0X2xpbmtfbGlicmFyaWVzICcgK1xuICAgICAgICAndGFyZ2V0X2xpbmtfb3B0aW9ucyB0YXJnZXRfc291cmNlcyB0cnlfY29tcGlsZSB0cnlfcnVuICcgK1xuICAgICAgICAvLyBDVGVzdCBjb21tYW5kc1xuICAgICAgICAnY3Rlc3RfYnVpbGQgY3Rlc3RfY29uZmlndXJlIGN0ZXN0X2NvdmVyYWdlIGN0ZXN0X2VtcHR5X2JpbmFyeV9kaXJlY3RvcnkgY3Rlc3RfbWVtY2hlY2sgJyArXG4gICAgICAgICdjdGVzdF9yZWFkX2N1c3RvbV9maWxlcyBjdGVzdF9ydW5fc2NyaXB0IGN0ZXN0X3NsZWVwIGN0ZXN0X3N0YXJ0IGN0ZXN0X3N1Ym1pdCAnICtcbiAgICAgICAgJ2N0ZXN0X3Rlc3QgY3Rlc3RfdXBkYXRlIGN0ZXN0X3VwbG9hZCAnICtcbiAgICAgICAgLy8gZGVwcmVjYXRlZCBjb21tYW5kc1xuICAgICAgICAnYnVpbGRfbmFtZSBleGVjX3Byb2dyYW0gZXhwb3J0X2xpYnJhcnlfZGVwZW5kZW5jaWVzIGluc3RhbGxfZmlsZXMgaW5zdGFsbF9wcm9ncmFtcyAnICtcbiAgICAgICAgJ2luc3RhbGxfdGFyZ2V0cyBsb2FkX2NvbW1hbmQgbWFrZV9kaXJlY3Rvcnkgb3V0cHV0X3JlcXVpcmVkX2ZpbGVzIHJlbW92ZSAnICtcbiAgICAgICAgJ3N1YmRpcl9kZXBlbmRzIHN1YmRpcnMgdXNlX21hbmdsZWRfbWVzYSB1dGlsaXR5X3NvdXJjZSB2YXJpYWJsZV9yZXF1aXJlcyB3cml0ZV9maWxlICcgK1xuICAgICAgICAncXQ1X3VzZV9tb2R1bGVzIHF0NV91c2VfcGFja2FnZSBxdDVfd3JhcF9jcHAgJyArXG4gICAgICAgIC8vIGNvcmUga2V5d29yZHNcbiAgICAgICAgJ29uIG9mZiB0cnVlIGZhbHNlIGFuZCBvciBub3QgY29tbWFuZCBwb2xpY3kgdGFyZ2V0IHRlc3QgZXhpc3RzIGlzX25ld2VyX3RoYW4gJyArXG4gICAgICAgICdpc19kaXJlY3RvcnkgaXNfc3ltbGluayBpc19hYnNvbHV0ZSBtYXRjaGVzIGxlc3MgZ3JlYXRlciBlcXVhbCBsZXNzX2VxdWFsICcgK1xuICAgICAgICAnZ3JlYXRlcl9lcXVhbCBzdHJsZXNzIHN0cmdyZWF0ZXIgc3RyZXF1YWwgc3RybGVzc19lcXVhbCBzdHJncmVhdGVyX2VxdWFsIHZlcnNpb25fbGVzcyAnICtcbiAgICAgICAgJ3ZlcnNpb25fZ3JlYXRlciB2ZXJzaW9uX2VxdWFsIHZlcnNpb25fbGVzc19lcXVhbCB2ZXJzaW9uX2dyZWF0ZXJfZXF1YWwgaW5fbGlzdCBkZWZpbmVkJ1xuICAgIH0sXG4gICAgY29udGFpbnM6IFtcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAndmFyaWFibGUnLFxuICAgICAgICBiZWdpbjogL1xcJFxcey8sXG4gICAgICAgIGVuZDogL1xcfS9cbiAgICAgIH0sXG4gICAgICBobGpzLkhBU0hfQ09NTUVOVF9NT0RFLFxuICAgICAgaGxqcy5RVU9URV9TVFJJTkdfTU9ERSxcbiAgICAgIGhsanMuTlVNQkVSX01PREVcbiAgICBdXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY21ha2U7XG4iXSwic291cmNlUm9vdCI6IiJ9