exports.ids = [32];
exports.modules = {

/***/ "./node_modules/highlight.js/lib/languages/coq.js":
/*!********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/coq.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Coq
Author: Stephan Boyer <stephan@stephanboyer.com>
Category: functional
Website: https://coq.inria.fr
*/

/** @type LanguageFn */
function coq(hljs) {
  return {
    name: 'Coq',
    keywords: {
      keyword:
        '_|0 as at cofix else end exists exists2 fix for forall fun if IF in let ' +
        'match mod Prop return Set then Type using where with ' +
        'Abort About Add Admit Admitted All Arguments Assumptions Axiom Back BackTo ' +
        'Backtrack Bind Blacklist Canonical Cd Check Class Classes Close Coercion ' +
        'Coercions CoFixpoint CoInductive Collection Combined Compute Conjecture ' +
        'Conjectures Constant constr Constraint Constructors Context Corollary ' +
        'CreateHintDb Cut Declare Defined Definition Delimit Dependencies Dependent ' +
        'Derive Drop eauto End Equality Eval Example Existential Existentials ' +
        'Existing Export exporting Extern Extract Extraction Fact Field Fields File ' +
        'Fixpoint Focus for From Function Functional Generalizable Global Goal Grab ' +
        'Grammar Graph Guarded Heap Hint HintDb Hints Hypotheses Hypothesis ident ' +
        'Identity If Immediate Implicit Import Include Inductive Infix Info Initial ' +
        'Inline Inspect Instance Instances Intro Intros Inversion Inversion_clear ' +
        'Language Left Lemma Let Libraries Library Load LoadPath Local Locate Ltac ML ' +
        'Mode Module Modules Monomorphic Morphism Next NoInline Notation Obligation ' +
        'Obligations Opaque Open Optimize Options Parameter Parameters Parametric ' +
        'Path Paths pattern Polymorphic Preterm Print Printing Program Projections ' +
        'Proof Proposition Pwd Qed Quit Rec Record Recursive Redirect Relation Remark ' +
        'Remove Require Reserved Reset Resolve Restart Rewrite Right Ring Rings Save ' +
        'Scheme Scope Scopes Script Search SearchAbout SearchHead SearchPattern ' +
        'SearchRewrite Section Separate Set Setoid Show Solve Sorted Step Strategies ' +
        'Strategy Structure SubClass Table Tables Tactic Term Test Theorem Time ' +
        'Timeout Transparent Type Typeclasses Types Undelimit Undo Unfocus Unfocused ' +
        'Unfold Universe Universes Unset Unshelve using Variable Variables Variant ' +
        'Verbose Visibility where with',
      built_in:
        'abstract absurd admit after apply as assert assumption at auto autorewrite ' +
        'autounfold before bottom btauto by case case_eq cbn cbv change ' +
        'classical_left classical_right clear clearbody cofix compare compute ' +
        'congruence constr_eq constructor contradict contradiction cut cutrewrite ' +
        'cycle decide decompose dependent destruct destruction dintuition ' +
        'discriminate discrR do double dtauto eapply eassumption eauto ecase ' +
        'econstructor edestruct ediscriminate eelim eexact eexists einduction ' +
        'einjection eleft elim elimtype enough equality erewrite eright ' +
        'esimplify_eq esplit evar exact exactly_once exfalso exists f_equal fail ' +
        'field field_simplify field_simplify_eq first firstorder fix fold fourier ' +
        'functional generalize generalizing gfail give_up has_evar hnf idtac in ' +
        'induction injection instantiate intro intro_pattern intros intuition ' +
        'inversion inversion_clear is_evar is_var lapply lazy left lia lra move ' +
        'native_compute nia nsatz omega once pattern pose progress proof psatz quote ' +
        'record red refine reflexivity remember rename repeat replace revert ' +
        'revgoals rewrite rewrite_strat right ring ring_simplify rtauto set ' +
        'setoid_reflexivity setoid_replace setoid_rewrite setoid_symmetry ' +
        'setoid_transitivity shelve shelve_unifiable simpl simple simplify_eq solve ' +
        'specialize split split_Rabs split_Rmult stepl stepr subst sum swap ' +
        'symmetry tactic tauto time timeout top transitivity trivial try tryif ' +
        'unfold unify until using vm_compute with'
    },
    contains: [
      hljs.QUOTE_STRING_MODE,
      hljs.COMMENT('\\(\\*', '\\*\\)'),
      hljs.C_NUMBER_MODE,
      {
        className: 'type',
        excludeBegin: true,
        begin: '\\|\\s*',
        end: '\\w+'
      },
      { // relevance booster
        begin: /[-=]>/
      }
    ]
  };
}

module.exports = coq;


/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvY29xLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiMzIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuTGFuZ3VhZ2U6IENvcVxuQXV0aG9yOiBTdGVwaGFuIEJveWVyIDxzdGVwaGFuQHN0ZXBoYW5ib3llci5jb20+XG5DYXRlZ29yeTogZnVuY3Rpb25hbFxuV2Vic2l0ZTogaHR0cHM6Ly9jb3EuaW5yaWEuZnJcbiovXG5cbi8qKiBAdHlwZSBMYW5ndWFnZUZuICovXG5mdW5jdGlvbiBjb3EoaGxqcykge1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICdDb3EnLFxuICAgIGtleXdvcmRzOiB7XG4gICAgICBrZXl3b3JkOlxuICAgICAgICAnX3wwIGFzIGF0IGNvZml4IGVsc2UgZW5kIGV4aXN0cyBleGlzdHMyIGZpeCBmb3IgZm9yYWxsIGZ1biBpZiBJRiBpbiBsZXQgJyArXG4gICAgICAgICdtYXRjaCBtb2QgUHJvcCByZXR1cm4gU2V0IHRoZW4gVHlwZSB1c2luZyB3aGVyZSB3aXRoICcgK1xuICAgICAgICAnQWJvcnQgQWJvdXQgQWRkIEFkbWl0IEFkbWl0dGVkIEFsbCBBcmd1bWVudHMgQXNzdW1wdGlvbnMgQXhpb20gQmFjayBCYWNrVG8gJyArXG4gICAgICAgICdCYWNrdHJhY2sgQmluZCBCbGFja2xpc3QgQ2Fub25pY2FsIENkIENoZWNrIENsYXNzIENsYXNzZXMgQ2xvc2UgQ29lcmNpb24gJyArXG4gICAgICAgICdDb2VyY2lvbnMgQ29GaXhwb2ludCBDb0luZHVjdGl2ZSBDb2xsZWN0aW9uIENvbWJpbmVkIENvbXB1dGUgQ29uamVjdHVyZSAnICtcbiAgICAgICAgJ0NvbmplY3R1cmVzIENvbnN0YW50IGNvbnN0ciBDb25zdHJhaW50IENvbnN0cnVjdG9ycyBDb250ZXh0IENvcm9sbGFyeSAnICtcbiAgICAgICAgJ0NyZWF0ZUhpbnREYiBDdXQgRGVjbGFyZSBEZWZpbmVkIERlZmluaXRpb24gRGVsaW1pdCBEZXBlbmRlbmNpZXMgRGVwZW5kZW50ICcgK1xuICAgICAgICAnRGVyaXZlIERyb3AgZWF1dG8gRW5kIEVxdWFsaXR5IEV2YWwgRXhhbXBsZSBFeGlzdGVudGlhbCBFeGlzdGVudGlhbHMgJyArXG4gICAgICAgICdFeGlzdGluZyBFeHBvcnQgZXhwb3J0aW5nIEV4dGVybiBFeHRyYWN0IEV4dHJhY3Rpb24gRmFjdCBGaWVsZCBGaWVsZHMgRmlsZSAnICtcbiAgICAgICAgJ0ZpeHBvaW50IEZvY3VzIGZvciBGcm9tIEZ1bmN0aW9uIEZ1bmN0aW9uYWwgR2VuZXJhbGl6YWJsZSBHbG9iYWwgR29hbCBHcmFiICcgK1xuICAgICAgICAnR3JhbW1hciBHcmFwaCBHdWFyZGVkIEhlYXAgSGludCBIaW50RGIgSGludHMgSHlwb3RoZXNlcyBIeXBvdGhlc2lzIGlkZW50ICcgK1xuICAgICAgICAnSWRlbnRpdHkgSWYgSW1tZWRpYXRlIEltcGxpY2l0IEltcG9ydCBJbmNsdWRlIEluZHVjdGl2ZSBJbmZpeCBJbmZvIEluaXRpYWwgJyArXG4gICAgICAgICdJbmxpbmUgSW5zcGVjdCBJbnN0YW5jZSBJbnN0YW5jZXMgSW50cm8gSW50cm9zIEludmVyc2lvbiBJbnZlcnNpb25fY2xlYXIgJyArXG4gICAgICAgICdMYW5ndWFnZSBMZWZ0IExlbW1hIExldCBMaWJyYXJpZXMgTGlicmFyeSBMb2FkIExvYWRQYXRoIExvY2FsIExvY2F0ZSBMdGFjIE1MICcgK1xuICAgICAgICAnTW9kZSBNb2R1bGUgTW9kdWxlcyBNb25vbW9ycGhpYyBNb3JwaGlzbSBOZXh0IE5vSW5saW5lIE5vdGF0aW9uIE9ibGlnYXRpb24gJyArXG4gICAgICAgICdPYmxpZ2F0aW9ucyBPcGFxdWUgT3BlbiBPcHRpbWl6ZSBPcHRpb25zIFBhcmFtZXRlciBQYXJhbWV0ZXJzIFBhcmFtZXRyaWMgJyArXG4gICAgICAgICdQYXRoIFBhdGhzIHBhdHRlcm4gUG9seW1vcnBoaWMgUHJldGVybSBQcmludCBQcmludGluZyBQcm9ncmFtIFByb2plY3Rpb25zICcgK1xuICAgICAgICAnUHJvb2YgUHJvcG9zaXRpb24gUHdkIFFlZCBRdWl0IFJlYyBSZWNvcmQgUmVjdXJzaXZlIFJlZGlyZWN0IFJlbGF0aW9uIFJlbWFyayAnICtcbiAgICAgICAgJ1JlbW92ZSBSZXF1aXJlIFJlc2VydmVkIFJlc2V0IFJlc29sdmUgUmVzdGFydCBSZXdyaXRlIFJpZ2h0IFJpbmcgUmluZ3MgU2F2ZSAnICtcbiAgICAgICAgJ1NjaGVtZSBTY29wZSBTY29wZXMgU2NyaXB0IFNlYXJjaCBTZWFyY2hBYm91dCBTZWFyY2hIZWFkIFNlYXJjaFBhdHRlcm4gJyArXG4gICAgICAgICdTZWFyY2hSZXdyaXRlIFNlY3Rpb24gU2VwYXJhdGUgU2V0IFNldG9pZCBTaG93IFNvbHZlIFNvcnRlZCBTdGVwIFN0cmF0ZWdpZXMgJyArXG4gICAgICAgICdTdHJhdGVneSBTdHJ1Y3R1cmUgU3ViQ2xhc3MgVGFibGUgVGFibGVzIFRhY3RpYyBUZXJtIFRlc3QgVGhlb3JlbSBUaW1lICcgK1xuICAgICAgICAnVGltZW91dCBUcmFuc3BhcmVudCBUeXBlIFR5cGVjbGFzc2VzIFR5cGVzIFVuZGVsaW1pdCBVbmRvIFVuZm9jdXMgVW5mb2N1c2VkICcgK1xuICAgICAgICAnVW5mb2xkIFVuaXZlcnNlIFVuaXZlcnNlcyBVbnNldCBVbnNoZWx2ZSB1c2luZyBWYXJpYWJsZSBWYXJpYWJsZXMgVmFyaWFudCAnICtcbiAgICAgICAgJ1ZlcmJvc2UgVmlzaWJpbGl0eSB3aGVyZSB3aXRoJyxcbiAgICAgIGJ1aWx0X2luOlxuICAgICAgICAnYWJzdHJhY3QgYWJzdXJkIGFkbWl0IGFmdGVyIGFwcGx5IGFzIGFzc2VydCBhc3N1bXB0aW9uIGF0IGF1dG8gYXV0b3Jld3JpdGUgJyArXG4gICAgICAgICdhdXRvdW5mb2xkIGJlZm9yZSBib3R0b20gYnRhdXRvIGJ5IGNhc2UgY2FzZV9lcSBjYm4gY2J2IGNoYW5nZSAnICtcbiAgICAgICAgJ2NsYXNzaWNhbF9sZWZ0IGNsYXNzaWNhbF9yaWdodCBjbGVhciBjbGVhcmJvZHkgY29maXggY29tcGFyZSBjb21wdXRlICcgK1xuICAgICAgICAnY29uZ3J1ZW5jZSBjb25zdHJfZXEgY29uc3RydWN0b3IgY29udHJhZGljdCBjb250cmFkaWN0aW9uIGN1dCBjdXRyZXdyaXRlICcgK1xuICAgICAgICAnY3ljbGUgZGVjaWRlIGRlY29tcG9zZSBkZXBlbmRlbnQgZGVzdHJ1Y3QgZGVzdHJ1Y3Rpb24gZGludHVpdGlvbiAnICtcbiAgICAgICAgJ2Rpc2NyaW1pbmF0ZSBkaXNjclIgZG8gZG91YmxlIGR0YXV0byBlYXBwbHkgZWFzc3VtcHRpb24gZWF1dG8gZWNhc2UgJyArXG4gICAgICAgICdlY29uc3RydWN0b3IgZWRlc3RydWN0IGVkaXNjcmltaW5hdGUgZWVsaW0gZWV4YWN0IGVleGlzdHMgZWluZHVjdGlvbiAnICtcbiAgICAgICAgJ2VpbmplY3Rpb24gZWxlZnQgZWxpbSBlbGltdHlwZSBlbm91Z2ggZXF1YWxpdHkgZXJld3JpdGUgZXJpZ2h0ICcgK1xuICAgICAgICAnZXNpbXBsaWZ5X2VxIGVzcGxpdCBldmFyIGV4YWN0IGV4YWN0bHlfb25jZSBleGZhbHNvIGV4aXN0cyBmX2VxdWFsIGZhaWwgJyArXG4gICAgICAgICdmaWVsZCBmaWVsZF9zaW1wbGlmeSBmaWVsZF9zaW1wbGlmeV9lcSBmaXJzdCBmaXJzdG9yZGVyIGZpeCBmb2xkIGZvdXJpZXIgJyArXG4gICAgICAgICdmdW5jdGlvbmFsIGdlbmVyYWxpemUgZ2VuZXJhbGl6aW5nIGdmYWlsIGdpdmVfdXAgaGFzX2V2YXIgaG5mIGlkdGFjIGluICcgK1xuICAgICAgICAnaW5kdWN0aW9uIGluamVjdGlvbiBpbnN0YW50aWF0ZSBpbnRybyBpbnRyb19wYXR0ZXJuIGludHJvcyBpbnR1aXRpb24gJyArXG4gICAgICAgICdpbnZlcnNpb24gaW52ZXJzaW9uX2NsZWFyIGlzX2V2YXIgaXNfdmFyIGxhcHBseSBsYXp5IGxlZnQgbGlhIGxyYSBtb3ZlICcgK1xuICAgICAgICAnbmF0aXZlX2NvbXB1dGUgbmlhIG5zYXR6IG9tZWdhIG9uY2UgcGF0dGVybiBwb3NlIHByb2dyZXNzIHByb29mIHBzYXR6IHF1b3RlICcgK1xuICAgICAgICAncmVjb3JkIHJlZCByZWZpbmUgcmVmbGV4aXZpdHkgcmVtZW1iZXIgcmVuYW1lIHJlcGVhdCByZXBsYWNlIHJldmVydCAnICtcbiAgICAgICAgJ3JldmdvYWxzIHJld3JpdGUgcmV3cml0ZV9zdHJhdCByaWdodCByaW5nIHJpbmdfc2ltcGxpZnkgcnRhdXRvIHNldCAnICtcbiAgICAgICAgJ3NldG9pZF9yZWZsZXhpdml0eSBzZXRvaWRfcmVwbGFjZSBzZXRvaWRfcmV3cml0ZSBzZXRvaWRfc3ltbWV0cnkgJyArXG4gICAgICAgICdzZXRvaWRfdHJhbnNpdGl2aXR5IHNoZWx2ZSBzaGVsdmVfdW5pZmlhYmxlIHNpbXBsIHNpbXBsZSBzaW1wbGlmeV9lcSBzb2x2ZSAnICtcbiAgICAgICAgJ3NwZWNpYWxpemUgc3BsaXQgc3BsaXRfUmFicyBzcGxpdF9SbXVsdCBzdGVwbCBzdGVwciBzdWJzdCBzdW0gc3dhcCAnICtcbiAgICAgICAgJ3N5bW1ldHJ5IHRhY3RpYyB0YXV0byB0aW1lIHRpbWVvdXQgdG9wIHRyYW5zaXRpdml0eSB0cml2aWFsIHRyeSB0cnlpZiAnICtcbiAgICAgICAgJ3VuZm9sZCB1bmlmeSB1bnRpbCB1c2luZyB2bV9jb21wdXRlIHdpdGgnXG4gICAgfSxcbiAgICBjb250YWluczogW1xuICAgICAgaGxqcy5RVU9URV9TVFJJTkdfTU9ERSxcbiAgICAgIGhsanMuQ09NTUVOVCgnXFxcXChcXFxcKicsICdcXFxcKlxcXFwpJyksXG4gICAgICBobGpzLkNfTlVNQkVSX01PREUsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3R5cGUnLFxuICAgICAgICBleGNsdWRlQmVnaW46IHRydWUsXG4gICAgICAgIGJlZ2luOiAnXFxcXHxcXFxccyonLFxuICAgICAgICBlbmQ6ICdcXFxcdysnXG4gICAgICB9LFxuICAgICAgeyAvLyByZWxldmFuY2UgYm9vc3RlclxuICAgICAgICBiZWdpbjogL1stPV0+L1xuICAgICAgfVxuICAgIF1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb3E7XG4iXSwic291cmNlUm9vdCI6IiJ9