exports.ids = [184];
exports.modules = {

/***/ "./node_modules/highlight.js/lib/languages/vim.js":
/*!********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/vim.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Vim Script
Author: Jun Yang <yangjvn@126.com>
Description: full keyword and built-in from http://vimdoc.sourceforge.net/htmldoc/
Website: https://www.vim.org
Category: scripting
*/

function vim(hljs) {
  return {
    name: 'Vim Script',
    keywords: {
      $pattern: /[!#@\w]+/,
      keyword:
        // express version except: ! & * < = > !! # @ @@
        'N|0 P|0 X|0 a|0 ab abc abo al am an|0 ar arga argd arge argdo argg argl argu as au aug aun b|0 bN ba bad bd be bel bf bl bm bn bo bp br brea breaka breakd breakl bro bufdo buffers bun bw c|0 cN cNf ca cabc caddb cad caddf cal cat cb cc ccl cd ce cex cf cfir cgetb cgete cg changes chd che checkt cl cla clo cm cmapc cme cn cnew cnf cno cnorea cnoreme co col colo com comc comp con conf cope ' +
        'cp cpf cq cr cs cst cu cuna cunme cw delm deb debugg delc delf dif diffg diffo diffp diffpu diffs diffthis dig di dl dell dj dli do doautoa dp dr ds dsp e|0 ea ec echoe echoh echom echon el elsei em en endfo endf endt endw ene ex exe exi exu f|0 files filet fin fina fini fir fix fo foldc foldd folddoc foldo for fu go gr grepa gu gv ha helpf helpg helpt hi hid his ia iabc if ij il im imapc ' +
        'ime ino inorea inoreme int is isp iu iuna iunme j|0 ju k|0 keepa kee keepj lN lNf l|0 lad laddb laddf la lan lat lb lc lch lcl lcs le lefta let lex lf lfir lgetb lgete lg lgr lgrepa lh ll lla lli lmak lm lmapc lne lnew lnf ln loadk lo loc lockv lol lope lp lpf lr ls lt lu lua luad luaf lv lvimgrepa lw m|0 ma mak map mapc marks mat me menut mes mk mks mksp mkv mkvie mod mz mzf nbc nb nbs new nm nmapc nme nn nnoreme noa no noh norea noreme norm nu nun nunme ol o|0 om omapc ome on ono onoreme opt ou ounme ow p|0 ' +
        'profd prof pro promptr pc ped pe perld po popu pp pre prev ps pt ptN ptf ptj ptl ptn ptp ptr pts pu pw py3 python3 py3d py3f py pyd pyf quita qa rec red redi redr redraws reg res ret retu rew ri rightb rub rubyd rubyf rund ru rv sN san sa sal sav sb sbN sba sbf sbl sbm sbn sbp sbr scrip scripte scs se setf setg setl sf sfir sh sim sig sil sl sla sm smap smapc sme sn sni sno snor snoreme sor ' +
        'so spelld spe spelli spellr spellu spellw sp spr sre st sta startg startr star stopi stj sts sun sunm sunme sus sv sw sy synti sync tN tabN tabc tabdo tabe tabf tabfir tabl tabm tabnew ' +
        'tabn tabo tabp tabr tabs tab ta tags tc tcld tclf te tf th tj tl tm tn to tp tr try ts tu u|0 undoj undol una unh unl unlo unm unme uns up ve verb vert vim vimgrepa vi viu vie vm vmapc vme vne vn vnoreme vs vu vunme windo w|0 wN wa wh wi winc winp wn wp wq wqa ws wu wv x|0 xa xmapc xm xme xn xnoreme xu xunme y|0 z|0 ~ ' +
        // full version
        'Next Print append abbreviate abclear aboveleft all amenu anoremenu args argadd argdelete argedit argglobal arglocal argument ascii autocmd augroup aunmenu buffer bNext ball badd bdelete behave belowright bfirst blast bmodified bnext botright bprevious brewind break breakadd breakdel breaklist browse bunload ' +
        'bwipeout change cNext cNfile cabbrev cabclear caddbuffer caddexpr caddfile call catch cbuffer cclose center cexpr cfile cfirst cgetbuffer cgetexpr cgetfile chdir checkpath checktime clist clast close cmap cmapclear cmenu cnext cnewer cnfile cnoremap cnoreabbrev cnoremenu copy colder colorscheme command comclear compiler continue confirm copen cprevious cpfile cquit crewind cscope cstag cunmap ' +
        'cunabbrev cunmenu cwindow delete delmarks debug debuggreedy delcommand delfunction diffupdate diffget diffoff diffpatch diffput diffsplit digraphs display deletel djump dlist doautocmd doautoall deletep drop dsearch dsplit edit earlier echo echoerr echohl echomsg else elseif emenu endif endfor ' +
        'endfunction endtry endwhile enew execute exit exusage file filetype find finally finish first fixdel fold foldclose folddoopen folddoclosed foldopen function global goto grep grepadd gui gvim hardcopy help helpfind helpgrep helptags highlight hide history insert iabbrev iabclear ijump ilist imap ' +
        'imapclear imenu inoremap inoreabbrev inoremenu intro isearch isplit iunmap iunabbrev iunmenu join jumps keepalt keepmarks keepjumps lNext lNfile list laddexpr laddbuffer laddfile last language later lbuffer lcd lchdir lclose lcscope left leftabove lexpr lfile lfirst lgetbuffer lgetexpr lgetfile lgrep lgrepadd lhelpgrep llast llist lmake lmap lmapclear lnext lnewer lnfile lnoremap loadkeymap loadview ' +
        'lockmarks lockvar lolder lopen lprevious lpfile lrewind ltag lunmap luado luafile lvimgrep lvimgrepadd lwindow move mark make mapclear match menu menutranslate messages mkexrc mksession mkspell mkvimrc mkview mode mzscheme mzfile nbclose nbkey nbsart next nmap nmapclear nmenu nnoremap ' +
        'nnoremenu noautocmd noremap nohlsearch noreabbrev noremenu normal number nunmap nunmenu oldfiles open omap omapclear omenu only onoremap onoremenu options ounmap ounmenu ownsyntax print profdel profile promptfind promptrepl pclose pedit perl perldo pop popup ppop preserve previous psearch ptag ptNext ' +
        'ptfirst ptjump ptlast ptnext ptprevious ptrewind ptselect put pwd py3do py3file python pydo pyfile quit quitall qall read recover redo redir redraw redrawstatus registers resize retab return rewind right rightbelow ruby rubydo rubyfile rundo runtime rviminfo substitute sNext sandbox sargument sall saveas sbuffer sbNext sball sbfirst sblast sbmodified sbnext sbprevious sbrewind scriptnames scriptencoding ' +
        'scscope set setfiletype setglobal setlocal sfind sfirst shell simalt sign silent sleep slast smagic smapclear smenu snext sniff snomagic snoremap snoremenu sort source spelldump spellgood spellinfo spellrepall spellundo spellwrong split sprevious srewind stop stag startgreplace startreplace ' +
        'startinsert stopinsert stjump stselect sunhide sunmap sunmenu suspend sview swapname syntax syntime syncbind tNext tabNext tabclose tabedit tabfind tabfirst tablast tabmove tabnext tabonly tabprevious tabrewind tag tcl tcldo tclfile tearoff tfirst throw tjump tlast tmenu tnext topleft tprevious ' + 'trewind tselect tunmenu undo undojoin undolist unabbreviate unhide unlet unlockvar unmap unmenu unsilent update vglobal version verbose vertical vimgrep vimgrepadd visual viusage view vmap vmapclear vmenu vnew ' +
        'vnoremap vnoremenu vsplit vunmap vunmenu write wNext wall while winsize wincmd winpos wnext wprevious wqall wsverb wundo wviminfo xit xall xmapclear xmap xmenu xnoremap xnoremenu xunmap xunmenu yank',
      built_in: // built in func
        'synIDtrans atan2 range matcharg did_filetype asin feedkeys xor argv ' +
        'complete_check add getwinposx getqflist getwinposy screencol ' +
        'clearmatches empty extend getcmdpos mzeval garbagecollect setreg ' +
        'ceil sqrt diff_hlID inputsecret get getfperm getpid filewritable ' +
        'shiftwidth max sinh isdirectory synID system inputrestore winline ' +
        'atan visualmode inputlist tabpagewinnr round getregtype mapcheck ' +
        'hasmapto histdel argidx findfile sha256 exists toupper getcmdline ' +
        'taglist string getmatches bufnr strftime winwidth bufexists ' +
        'strtrans tabpagebuflist setcmdpos remote_read printf setloclist ' +
        'getpos getline bufwinnr float2nr len getcmdtype diff_filler luaeval ' +
        'resolve libcallnr foldclosedend reverse filter has_key bufname ' +
        'str2float strlen setline getcharmod setbufvar index searchpos ' +
        'shellescape undofile foldclosed setqflist buflisted strchars str2nr ' +
        'virtcol floor remove undotree remote_expr winheight gettabwinvar ' +
        'reltime cursor tabpagenr finddir localtime acos getloclist search ' +
        'tanh matchend rename gettabvar strdisplaywidth type abs py3eval ' +
        'setwinvar tolower wildmenumode log10 spellsuggest bufloaded ' +
        'synconcealed nextnonblank server2client complete settabwinvar ' +
        'executable input wincol setmatches getftype hlID inputsave ' +
        'searchpair or screenrow line settabvar histadd deepcopy strpart ' +
        'remote_peek and eval getftime submatch screenchar winsaveview ' +
        'matchadd mkdir screenattr getfontname libcall reltimestr getfsize ' +
        'winnr invert pow getbufline byte2line soundfold repeat fnameescape ' +
        'tagfiles sin strwidth spellbadword trunc maparg log lispindent ' +
        'hostname setpos globpath remote_foreground getchar synIDattr ' +
        'fnamemodify cscope_connection stridx winbufnr indent min ' +
        'complete_add nr2char searchpairpos inputdialog values matchlist ' +
        'items hlexists strridx browsedir expand fmod pathshorten line2byte ' +
        'argc count getwinvar glob foldtextresult getreg foreground cosh ' +
        'matchdelete has char2nr simplify histget searchdecl iconv ' +
        'winrestcmd pumvisible writefile foldlevel haslocaldir keys cos ' +
        'matchstr foldtext histnr tan tempname getcwd byteidx getbufvar ' +
        'islocked escape eventhandler remote_send serverlist winrestview ' +
        'synstack pyeval prevnonblank readfile cindent filereadable changenr ' +
        'exp'
    },
    illegal: /;/,
    contains: [
      hljs.NUMBER_MODE,
      {
        className: 'string',
        begin: '\'',
        end: '\'',
        illegal: '\\n'
      },

      /*
      A double quote can start either a string or a line comment. Strings are
      ended before the end of a line by another double quote and can contain
      escaped double-quotes and post-escaped line breaks.

      Also, any double quote at the beginning of a line is a comment but we
      don't handle that properly at the moment: any double quote inside will
      turn them into a string. Handling it properly will require a smarter
      parser.
      */
      {
        className: 'string',
        begin: /"(\\"|\n\\|[^"\n])*"/
      },
      hljs.COMMENT('"', '$'),

      {
        className: 'variable',
        begin: /[bwtglsav]:[\w\d_]*/
      },
      {
        className: 'function',
        beginKeywords: 'function function!',
        end: '$',
        relevance: 0,
        contains: [
          hljs.TITLE_MODE,
          {
            className: 'params',
            begin: '\\(',
            end: '\\)'
          }
        ]
      },
      {
        className: 'symbol',
        begin: /<[\w-]+>/
      }
    ]
  };
}

module.exports = vim;


/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvdmltLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6IjE4NC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5MYW5ndWFnZTogVmltIFNjcmlwdFxuQXV0aG9yOiBKdW4gWWFuZyA8eWFuZ2p2bkAxMjYuY29tPlxuRGVzY3JpcHRpb246IGZ1bGwga2V5d29yZCBhbmQgYnVpbHQtaW4gZnJvbSBodHRwOi8vdmltZG9jLnNvdXJjZWZvcmdlLm5ldC9odG1sZG9jL1xuV2Vic2l0ZTogaHR0cHM6Ly93d3cudmltLm9yZ1xuQ2F0ZWdvcnk6IHNjcmlwdGluZ1xuKi9cblxuZnVuY3Rpb24gdmltKGhsanMpIHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnVmltIFNjcmlwdCcsXG4gICAga2V5d29yZHM6IHtcbiAgICAgICRwYXR0ZXJuOiAvWyEjQFxcd10rLyxcbiAgICAgIGtleXdvcmQ6XG4gICAgICAgIC8vIGV4cHJlc3MgdmVyc2lvbiBleGNlcHQ6ICEgJiAqIDwgPSA+ICEhICMgQCBAQFxuICAgICAgICAnTnwwIFB8MCBYfDAgYXwwIGFiIGFiYyBhYm8gYWwgYW0gYW58MCBhciBhcmdhIGFyZ2QgYXJnZSBhcmdkbyBhcmdnIGFyZ2wgYXJndSBhcyBhdSBhdWcgYXVuIGJ8MCBiTiBiYSBiYWQgYmQgYmUgYmVsIGJmIGJsIGJtIGJuIGJvIGJwIGJyIGJyZWEgYnJlYWthIGJyZWFrZCBicmVha2wgYnJvIGJ1ZmRvIGJ1ZmZlcnMgYnVuIGJ3IGN8MCBjTiBjTmYgY2EgY2FiYyBjYWRkYiBjYWQgY2FkZGYgY2FsIGNhdCBjYiBjYyBjY2wgY2QgY2UgY2V4IGNmIGNmaXIgY2dldGIgY2dldGUgY2cgY2hhbmdlcyBjaGQgY2hlIGNoZWNrdCBjbCBjbGEgY2xvIGNtIGNtYXBjIGNtZSBjbiBjbmV3IGNuZiBjbm8gY25vcmVhIGNub3JlbWUgY28gY29sIGNvbG8gY29tIGNvbWMgY29tcCBjb24gY29uZiBjb3BlICcgK1xuICAgICAgICAnY3AgY3BmIGNxIGNyIGNzIGNzdCBjdSBjdW5hIGN1bm1lIGN3IGRlbG0gZGViIGRlYnVnZyBkZWxjIGRlbGYgZGlmIGRpZmZnIGRpZmZvIGRpZmZwIGRpZmZwdSBkaWZmcyBkaWZmdGhpcyBkaWcgZGkgZGwgZGVsbCBkaiBkbGkgZG8gZG9hdXRvYSBkcCBkciBkcyBkc3AgZXwwIGVhIGVjIGVjaG9lIGVjaG9oIGVjaG9tIGVjaG9uIGVsIGVsc2VpIGVtIGVuIGVuZGZvIGVuZGYgZW5kdCBlbmR3IGVuZSBleCBleGUgZXhpIGV4dSBmfDAgZmlsZXMgZmlsZXQgZmluIGZpbmEgZmluaSBmaXIgZml4IGZvIGZvbGRjIGZvbGRkIGZvbGRkb2MgZm9sZG8gZm9yIGZ1IGdvIGdyIGdyZXBhIGd1IGd2IGhhIGhlbHBmIGhlbHBnIGhlbHB0IGhpIGhpZCBoaXMgaWEgaWFiYyBpZiBpaiBpbCBpbSBpbWFwYyAnICtcbiAgICAgICAgJ2ltZSBpbm8gaW5vcmVhIGlub3JlbWUgaW50IGlzIGlzcCBpdSBpdW5hIGl1bm1lIGp8MCBqdSBrfDAga2VlcGEga2VlIGtlZXBqIGxOIGxOZiBsfDAgbGFkIGxhZGRiIGxhZGRmIGxhIGxhbiBsYXQgbGIgbGMgbGNoIGxjbCBsY3MgbGUgbGVmdGEgbGV0IGxleCBsZiBsZmlyIGxnZXRiIGxnZXRlIGxnIGxnciBsZ3JlcGEgbGggbGwgbGxhIGxsaSBsbWFrIGxtIGxtYXBjIGxuZSBsbmV3IGxuZiBsbiBsb2FkayBsbyBsb2MgbG9ja3YgbG9sIGxvcGUgbHAgbHBmIGxyIGxzIGx0IGx1IGx1YSBsdWFkIGx1YWYgbHYgbHZpbWdyZXBhIGx3IG18MCBtYSBtYWsgbWFwIG1hcGMgbWFya3MgbWF0IG1lIG1lbnV0IG1lcyBtayBta3MgbWtzcCBta3YgbWt2aWUgbW9kIG16IG16ZiBuYmMgbmIgbmJzIG5ldyBubSBubWFwYyBubWUgbm4gbm5vcmVtZSBub2Egbm8gbm9oIG5vcmVhIG5vcmVtZSBub3JtIG51IG51biBudW5tZSBvbCBvfDAgb20gb21hcGMgb21lIG9uIG9ubyBvbm9yZW1lIG9wdCBvdSBvdW5tZSBvdyBwfDAgJyArXG4gICAgICAgICdwcm9mZCBwcm9mIHBybyBwcm9tcHRyIHBjIHBlZCBwZSBwZXJsZCBwbyBwb3B1IHBwIHByZSBwcmV2IHBzIHB0IHB0TiBwdGYgcHRqIHB0bCBwdG4gcHRwIHB0ciBwdHMgcHUgcHcgcHkzIHB5dGhvbjMgcHkzZCBweTNmIHB5IHB5ZCBweWYgcXVpdGEgcWEgcmVjIHJlZCByZWRpIHJlZHIgcmVkcmF3cyByZWcgcmVzIHJldCByZXR1IHJldyByaSByaWdodGIgcnViIHJ1YnlkIHJ1YnlmIHJ1bmQgcnUgcnYgc04gc2FuIHNhIHNhbCBzYXYgc2Igc2JOIHNiYSBzYmYgc2JsIHNibSBzYm4gc2JwIHNiciBzY3JpcCBzY3JpcHRlIHNjcyBzZSBzZXRmIHNldGcgc2V0bCBzZiBzZmlyIHNoIHNpbSBzaWcgc2lsIHNsIHNsYSBzbSBzbWFwIHNtYXBjIHNtZSBzbiBzbmkgc25vIHNub3Igc25vcmVtZSBzb3IgJyArXG4gICAgICAgICdzbyBzcGVsbGQgc3BlIHNwZWxsaSBzcGVsbHIgc3BlbGx1IHNwZWxsdyBzcCBzcHIgc3JlIHN0IHN0YSBzdGFydGcgc3RhcnRyIHN0YXIgc3RvcGkgc3RqIHN0cyBzdW4gc3VubSBzdW5tZSBzdXMgc3Ygc3cgc3kgc3ludGkgc3luYyB0TiB0YWJOIHRhYmMgdGFiZG8gdGFiZSB0YWJmIHRhYmZpciB0YWJsIHRhYm0gdGFibmV3ICcgK1xuICAgICAgICAndGFibiB0YWJvIHRhYnAgdGFiciB0YWJzIHRhYiB0YSB0YWdzIHRjIHRjbGQgdGNsZiB0ZSB0ZiB0aCB0aiB0bCB0bSB0biB0byB0cCB0ciB0cnkgdHMgdHUgdXwwIHVuZG9qIHVuZG9sIHVuYSB1bmggdW5sIHVubG8gdW5tIHVubWUgdW5zIHVwIHZlIHZlcmIgdmVydCB2aW0gdmltZ3JlcGEgdmkgdml1IHZpZSB2bSB2bWFwYyB2bWUgdm5lIHZuIHZub3JlbWUgdnMgdnUgdnVubWUgd2luZG8gd3wwIHdOIHdhIHdoIHdpIHdpbmMgd2lucCB3biB3cCB3cSB3cWEgd3Mgd3Ugd3YgeHwwIHhhIHhtYXBjIHhtIHhtZSB4biB4bm9yZW1lIHh1IHh1bm1lIHl8MCB6fDAgfiAnICtcbiAgICAgICAgLy8gZnVsbCB2ZXJzaW9uXG4gICAgICAgICdOZXh0IFByaW50IGFwcGVuZCBhYmJyZXZpYXRlIGFiY2xlYXIgYWJvdmVsZWZ0IGFsbCBhbWVudSBhbm9yZW1lbnUgYXJncyBhcmdhZGQgYXJnZGVsZXRlIGFyZ2VkaXQgYXJnZ2xvYmFsIGFyZ2xvY2FsIGFyZ3VtZW50IGFzY2lpIGF1dG9jbWQgYXVncm91cCBhdW5tZW51IGJ1ZmZlciBiTmV4dCBiYWxsIGJhZGQgYmRlbGV0ZSBiZWhhdmUgYmVsb3dyaWdodCBiZmlyc3QgYmxhc3QgYm1vZGlmaWVkIGJuZXh0IGJvdHJpZ2h0IGJwcmV2aW91cyBicmV3aW5kIGJyZWFrIGJyZWFrYWRkIGJyZWFrZGVsIGJyZWFrbGlzdCBicm93c2UgYnVubG9hZCAnICtcbiAgICAgICAgJ2J3aXBlb3V0IGNoYW5nZSBjTmV4dCBjTmZpbGUgY2FiYnJldiBjYWJjbGVhciBjYWRkYnVmZmVyIGNhZGRleHByIGNhZGRmaWxlIGNhbGwgY2F0Y2ggY2J1ZmZlciBjY2xvc2UgY2VudGVyIGNleHByIGNmaWxlIGNmaXJzdCBjZ2V0YnVmZmVyIGNnZXRleHByIGNnZXRmaWxlIGNoZGlyIGNoZWNrcGF0aCBjaGVja3RpbWUgY2xpc3QgY2xhc3QgY2xvc2UgY21hcCBjbWFwY2xlYXIgY21lbnUgY25leHQgY25ld2VyIGNuZmlsZSBjbm9yZW1hcCBjbm9yZWFiYnJldiBjbm9yZW1lbnUgY29weSBjb2xkZXIgY29sb3JzY2hlbWUgY29tbWFuZCBjb21jbGVhciBjb21waWxlciBjb250aW51ZSBjb25maXJtIGNvcGVuIGNwcmV2aW91cyBjcGZpbGUgY3F1aXQgY3Jld2luZCBjc2NvcGUgY3N0YWcgY3VubWFwICcgK1xuICAgICAgICAnY3VuYWJicmV2IGN1bm1lbnUgY3dpbmRvdyBkZWxldGUgZGVsbWFya3MgZGVidWcgZGVidWdncmVlZHkgZGVsY29tbWFuZCBkZWxmdW5jdGlvbiBkaWZmdXBkYXRlIGRpZmZnZXQgZGlmZm9mZiBkaWZmcGF0Y2ggZGlmZnB1dCBkaWZmc3BsaXQgZGlncmFwaHMgZGlzcGxheSBkZWxldGVsIGRqdW1wIGRsaXN0IGRvYXV0b2NtZCBkb2F1dG9hbGwgZGVsZXRlcCBkcm9wIGRzZWFyY2ggZHNwbGl0IGVkaXQgZWFybGllciBlY2hvIGVjaG9lcnIgZWNob2hsIGVjaG9tc2cgZWxzZSBlbHNlaWYgZW1lbnUgZW5kaWYgZW5kZm9yICcgK1xuICAgICAgICAnZW5kZnVuY3Rpb24gZW5kdHJ5IGVuZHdoaWxlIGVuZXcgZXhlY3V0ZSBleGl0IGV4dXNhZ2UgZmlsZSBmaWxldHlwZSBmaW5kIGZpbmFsbHkgZmluaXNoIGZpcnN0IGZpeGRlbCBmb2xkIGZvbGRjbG9zZSBmb2xkZG9vcGVuIGZvbGRkb2Nsb3NlZCBmb2xkb3BlbiBmdW5jdGlvbiBnbG9iYWwgZ290byBncmVwIGdyZXBhZGQgZ3VpIGd2aW0gaGFyZGNvcHkgaGVscCBoZWxwZmluZCBoZWxwZ3JlcCBoZWxwdGFncyBoaWdobGlnaHQgaGlkZSBoaXN0b3J5IGluc2VydCBpYWJicmV2IGlhYmNsZWFyIGlqdW1wIGlsaXN0IGltYXAgJyArXG4gICAgICAgICdpbWFwY2xlYXIgaW1lbnUgaW5vcmVtYXAgaW5vcmVhYmJyZXYgaW5vcmVtZW51IGludHJvIGlzZWFyY2ggaXNwbGl0IGl1bm1hcCBpdW5hYmJyZXYgaXVubWVudSBqb2luIGp1bXBzIGtlZXBhbHQga2VlcG1hcmtzIGtlZXBqdW1wcyBsTmV4dCBsTmZpbGUgbGlzdCBsYWRkZXhwciBsYWRkYnVmZmVyIGxhZGRmaWxlIGxhc3QgbGFuZ3VhZ2UgbGF0ZXIgbGJ1ZmZlciBsY2QgbGNoZGlyIGxjbG9zZSBsY3Njb3BlIGxlZnQgbGVmdGFib3ZlIGxleHByIGxmaWxlIGxmaXJzdCBsZ2V0YnVmZmVyIGxnZXRleHByIGxnZXRmaWxlIGxncmVwIGxncmVwYWRkIGxoZWxwZ3JlcCBsbGFzdCBsbGlzdCBsbWFrZSBsbWFwIGxtYXBjbGVhciBsbmV4dCBsbmV3ZXIgbG5maWxlIGxub3JlbWFwIGxvYWRrZXltYXAgbG9hZHZpZXcgJyArXG4gICAgICAgICdsb2NrbWFya3MgbG9ja3ZhciBsb2xkZXIgbG9wZW4gbHByZXZpb3VzIGxwZmlsZSBscmV3aW5kIGx0YWcgbHVubWFwIGx1YWRvIGx1YWZpbGUgbHZpbWdyZXAgbHZpbWdyZXBhZGQgbHdpbmRvdyBtb3ZlIG1hcmsgbWFrZSBtYXBjbGVhciBtYXRjaCBtZW51IG1lbnV0cmFuc2xhdGUgbWVzc2FnZXMgbWtleHJjIG1rc2Vzc2lvbiBta3NwZWxsIG1rdmltcmMgbWt2aWV3IG1vZGUgbXpzY2hlbWUgbXpmaWxlIG5iY2xvc2UgbmJrZXkgbmJzYXJ0IG5leHQgbm1hcCBubWFwY2xlYXIgbm1lbnUgbm5vcmVtYXAgJyArXG4gICAgICAgICdubm9yZW1lbnUgbm9hdXRvY21kIG5vcmVtYXAgbm9obHNlYXJjaCBub3JlYWJicmV2IG5vcmVtZW51IG5vcm1hbCBudW1iZXIgbnVubWFwIG51bm1lbnUgb2xkZmlsZXMgb3BlbiBvbWFwIG9tYXBjbGVhciBvbWVudSBvbmx5IG9ub3JlbWFwIG9ub3JlbWVudSBvcHRpb25zIG91bm1hcCBvdW5tZW51IG93bnN5bnRheCBwcmludCBwcm9mZGVsIHByb2ZpbGUgcHJvbXB0ZmluZCBwcm9tcHRyZXBsIHBjbG9zZSBwZWRpdCBwZXJsIHBlcmxkbyBwb3AgcG9wdXAgcHBvcCBwcmVzZXJ2ZSBwcmV2aW91cyBwc2VhcmNoIHB0YWcgcHROZXh0ICcgK1xuICAgICAgICAncHRmaXJzdCBwdGp1bXAgcHRsYXN0IHB0bmV4dCBwdHByZXZpb3VzIHB0cmV3aW5kIHB0c2VsZWN0IHB1dCBwd2QgcHkzZG8gcHkzZmlsZSBweXRob24gcHlkbyBweWZpbGUgcXVpdCBxdWl0YWxsIHFhbGwgcmVhZCByZWNvdmVyIHJlZG8gcmVkaXIgcmVkcmF3IHJlZHJhd3N0YXR1cyByZWdpc3RlcnMgcmVzaXplIHJldGFiIHJldHVybiByZXdpbmQgcmlnaHQgcmlnaHRiZWxvdyBydWJ5IHJ1YnlkbyBydWJ5ZmlsZSBydW5kbyBydW50aW1lIHJ2aW1pbmZvIHN1YnN0aXR1dGUgc05leHQgc2FuZGJveCBzYXJndW1lbnQgc2FsbCBzYXZlYXMgc2J1ZmZlciBzYk5leHQgc2JhbGwgc2JmaXJzdCBzYmxhc3Qgc2Jtb2RpZmllZCBzYm5leHQgc2JwcmV2aW91cyBzYnJld2luZCBzY3JpcHRuYW1lcyBzY3JpcHRlbmNvZGluZyAnICtcbiAgICAgICAgJ3Njc2NvcGUgc2V0IHNldGZpbGV0eXBlIHNldGdsb2JhbCBzZXRsb2NhbCBzZmluZCBzZmlyc3Qgc2hlbGwgc2ltYWx0IHNpZ24gc2lsZW50IHNsZWVwIHNsYXN0IHNtYWdpYyBzbWFwY2xlYXIgc21lbnUgc25leHQgc25pZmYgc25vbWFnaWMgc25vcmVtYXAgc25vcmVtZW51IHNvcnQgc291cmNlIHNwZWxsZHVtcCBzcGVsbGdvb2Qgc3BlbGxpbmZvIHNwZWxscmVwYWxsIHNwZWxsdW5kbyBzcGVsbHdyb25nIHNwbGl0IHNwcmV2aW91cyBzcmV3aW5kIHN0b3Agc3RhZyBzdGFydGdyZXBsYWNlIHN0YXJ0cmVwbGFjZSAnICtcbiAgICAgICAgJ3N0YXJ0aW5zZXJ0IHN0b3BpbnNlcnQgc3RqdW1wIHN0c2VsZWN0IHN1bmhpZGUgc3VubWFwIHN1bm1lbnUgc3VzcGVuZCBzdmlldyBzd2FwbmFtZSBzeW50YXggc3ludGltZSBzeW5jYmluZCB0TmV4dCB0YWJOZXh0IHRhYmNsb3NlIHRhYmVkaXQgdGFiZmluZCB0YWJmaXJzdCB0YWJsYXN0IHRhYm1vdmUgdGFibmV4dCB0YWJvbmx5IHRhYnByZXZpb3VzIHRhYnJld2luZCB0YWcgdGNsIHRjbGRvIHRjbGZpbGUgdGVhcm9mZiB0Zmlyc3QgdGhyb3cgdGp1bXAgdGxhc3QgdG1lbnUgdG5leHQgdG9wbGVmdCB0cHJldmlvdXMgJyArICd0cmV3aW5kIHRzZWxlY3QgdHVubWVudSB1bmRvIHVuZG9qb2luIHVuZG9saXN0IHVuYWJicmV2aWF0ZSB1bmhpZGUgdW5sZXQgdW5sb2NrdmFyIHVubWFwIHVubWVudSB1bnNpbGVudCB1cGRhdGUgdmdsb2JhbCB2ZXJzaW9uIHZlcmJvc2UgdmVydGljYWwgdmltZ3JlcCB2aW1ncmVwYWRkIHZpc3VhbCB2aXVzYWdlIHZpZXcgdm1hcCB2bWFwY2xlYXIgdm1lbnUgdm5ldyAnICtcbiAgICAgICAgJ3Zub3JlbWFwIHZub3JlbWVudSB2c3BsaXQgdnVubWFwIHZ1bm1lbnUgd3JpdGUgd05leHQgd2FsbCB3aGlsZSB3aW5zaXplIHdpbmNtZCB3aW5wb3Mgd25leHQgd3ByZXZpb3VzIHdxYWxsIHdzdmVyYiB3dW5kbyB3dmltaW5mbyB4aXQgeGFsbCB4bWFwY2xlYXIgeG1hcCB4bWVudSB4bm9yZW1hcCB4bm9yZW1lbnUgeHVubWFwIHh1bm1lbnUgeWFuaycsXG4gICAgICBidWlsdF9pbjogLy8gYnVpbHQgaW4gZnVuY1xuICAgICAgICAnc3luSUR0cmFucyBhdGFuMiByYW5nZSBtYXRjaGFyZyBkaWRfZmlsZXR5cGUgYXNpbiBmZWVka2V5cyB4b3IgYXJndiAnICtcbiAgICAgICAgJ2NvbXBsZXRlX2NoZWNrIGFkZCBnZXR3aW5wb3N4IGdldHFmbGlzdCBnZXR3aW5wb3N5IHNjcmVlbmNvbCAnICtcbiAgICAgICAgJ2NsZWFybWF0Y2hlcyBlbXB0eSBleHRlbmQgZ2V0Y21kcG9zIG16ZXZhbCBnYXJiYWdlY29sbGVjdCBzZXRyZWcgJyArXG4gICAgICAgICdjZWlsIHNxcnQgZGlmZl9obElEIGlucHV0c2VjcmV0IGdldCBnZXRmcGVybSBnZXRwaWQgZmlsZXdyaXRhYmxlICcgK1xuICAgICAgICAnc2hpZnR3aWR0aCBtYXggc2luaCBpc2RpcmVjdG9yeSBzeW5JRCBzeXN0ZW0gaW5wdXRyZXN0b3JlIHdpbmxpbmUgJyArXG4gICAgICAgICdhdGFuIHZpc3VhbG1vZGUgaW5wdXRsaXN0IHRhYnBhZ2V3aW5uciByb3VuZCBnZXRyZWd0eXBlIG1hcGNoZWNrICcgK1xuICAgICAgICAnaGFzbWFwdG8gaGlzdGRlbCBhcmdpZHggZmluZGZpbGUgc2hhMjU2IGV4aXN0cyB0b3VwcGVyIGdldGNtZGxpbmUgJyArXG4gICAgICAgICd0YWdsaXN0IHN0cmluZyBnZXRtYXRjaGVzIGJ1Zm5yIHN0cmZ0aW1lIHdpbndpZHRoIGJ1ZmV4aXN0cyAnICtcbiAgICAgICAgJ3N0cnRyYW5zIHRhYnBhZ2VidWZsaXN0IHNldGNtZHBvcyByZW1vdGVfcmVhZCBwcmludGYgc2V0bG9jbGlzdCAnICtcbiAgICAgICAgJ2dldHBvcyBnZXRsaW5lIGJ1Zndpbm5yIGZsb2F0Mm5yIGxlbiBnZXRjbWR0eXBlIGRpZmZfZmlsbGVyIGx1YWV2YWwgJyArXG4gICAgICAgICdyZXNvbHZlIGxpYmNhbGxuciBmb2xkY2xvc2VkZW5kIHJldmVyc2UgZmlsdGVyIGhhc19rZXkgYnVmbmFtZSAnICtcbiAgICAgICAgJ3N0cjJmbG9hdCBzdHJsZW4gc2V0bGluZSBnZXRjaGFybW9kIHNldGJ1ZnZhciBpbmRleCBzZWFyY2hwb3MgJyArXG4gICAgICAgICdzaGVsbGVzY2FwZSB1bmRvZmlsZSBmb2xkY2xvc2VkIHNldHFmbGlzdCBidWZsaXN0ZWQgc3RyY2hhcnMgc3RyMm5yICcgK1xuICAgICAgICAndmlydGNvbCBmbG9vciByZW1vdmUgdW5kb3RyZWUgcmVtb3RlX2V4cHIgd2luaGVpZ2h0IGdldHRhYndpbnZhciAnICtcbiAgICAgICAgJ3JlbHRpbWUgY3Vyc29yIHRhYnBhZ2VuciBmaW5kZGlyIGxvY2FsdGltZSBhY29zIGdldGxvY2xpc3Qgc2VhcmNoICcgK1xuICAgICAgICAndGFuaCBtYXRjaGVuZCByZW5hbWUgZ2V0dGFidmFyIHN0cmRpc3BsYXl3aWR0aCB0eXBlIGFicyBweTNldmFsICcgK1xuICAgICAgICAnc2V0d2ludmFyIHRvbG93ZXIgd2lsZG1lbnVtb2RlIGxvZzEwIHNwZWxsc3VnZ2VzdCBidWZsb2FkZWQgJyArXG4gICAgICAgICdzeW5jb25jZWFsZWQgbmV4dG5vbmJsYW5rIHNlcnZlcjJjbGllbnQgY29tcGxldGUgc2V0dGFid2ludmFyICcgK1xuICAgICAgICAnZXhlY3V0YWJsZSBpbnB1dCB3aW5jb2wgc2V0bWF0Y2hlcyBnZXRmdHlwZSBobElEIGlucHV0c2F2ZSAnICtcbiAgICAgICAgJ3NlYXJjaHBhaXIgb3Igc2NyZWVucm93IGxpbmUgc2V0dGFidmFyIGhpc3RhZGQgZGVlcGNvcHkgc3RycGFydCAnICtcbiAgICAgICAgJ3JlbW90ZV9wZWVrIGFuZCBldmFsIGdldGZ0aW1lIHN1Ym1hdGNoIHNjcmVlbmNoYXIgd2luc2F2ZXZpZXcgJyArXG4gICAgICAgICdtYXRjaGFkZCBta2RpciBzY3JlZW5hdHRyIGdldGZvbnRuYW1lIGxpYmNhbGwgcmVsdGltZXN0ciBnZXRmc2l6ZSAnICtcbiAgICAgICAgJ3dpbm5yIGludmVydCBwb3cgZ2V0YnVmbGluZSBieXRlMmxpbmUgc291bmRmb2xkIHJlcGVhdCBmbmFtZWVzY2FwZSAnICtcbiAgICAgICAgJ3RhZ2ZpbGVzIHNpbiBzdHJ3aWR0aCBzcGVsbGJhZHdvcmQgdHJ1bmMgbWFwYXJnIGxvZyBsaXNwaW5kZW50ICcgK1xuICAgICAgICAnaG9zdG5hbWUgc2V0cG9zIGdsb2JwYXRoIHJlbW90ZV9mb3JlZ3JvdW5kIGdldGNoYXIgc3luSURhdHRyICcgK1xuICAgICAgICAnZm5hbWVtb2RpZnkgY3Njb3BlX2Nvbm5lY3Rpb24gc3RyaWR4IHdpbmJ1Zm5yIGluZGVudCBtaW4gJyArXG4gICAgICAgICdjb21wbGV0ZV9hZGQgbnIyY2hhciBzZWFyY2hwYWlycG9zIGlucHV0ZGlhbG9nIHZhbHVlcyBtYXRjaGxpc3QgJyArXG4gICAgICAgICdpdGVtcyBobGV4aXN0cyBzdHJyaWR4IGJyb3dzZWRpciBleHBhbmQgZm1vZCBwYXRoc2hvcnRlbiBsaW5lMmJ5dGUgJyArXG4gICAgICAgICdhcmdjIGNvdW50IGdldHdpbnZhciBnbG9iIGZvbGR0ZXh0cmVzdWx0IGdldHJlZyBmb3JlZ3JvdW5kIGNvc2ggJyArXG4gICAgICAgICdtYXRjaGRlbGV0ZSBoYXMgY2hhcjJuciBzaW1wbGlmeSBoaXN0Z2V0IHNlYXJjaGRlY2wgaWNvbnYgJyArXG4gICAgICAgICd3aW5yZXN0Y21kIHB1bXZpc2libGUgd3JpdGVmaWxlIGZvbGRsZXZlbCBoYXNsb2NhbGRpciBrZXlzIGNvcyAnICtcbiAgICAgICAgJ21hdGNoc3RyIGZvbGR0ZXh0IGhpc3RuciB0YW4gdGVtcG5hbWUgZ2V0Y3dkIGJ5dGVpZHggZ2V0YnVmdmFyICcgK1xuICAgICAgICAnaXNsb2NrZWQgZXNjYXBlIGV2ZW50aGFuZGxlciByZW1vdGVfc2VuZCBzZXJ2ZXJsaXN0IHdpbnJlc3R2aWV3ICcgK1xuICAgICAgICAnc3luc3RhY2sgcHlldmFsIHByZXZub25ibGFuayByZWFkZmlsZSBjaW5kZW50IGZpbGVyZWFkYWJsZSBjaGFuZ2VuciAnICtcbiAgICAgICAgJ2V4cCdcbiAgICB9LFxuICAgIGlsbGVnYWw6IC87LyxcbiAgICBjb250YWluczogW1xuICAgICAgaGxqcy5OVU1CRVJfTU9ERSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICAgICAgYmVnaW46ICdcXCcnLFxuICAgICAgICBlbmQ6ICdcXCcnLFxuICAgICAgICBpbGxlZ2FsOiAnXFxcXG4nXG4gICAgICB9LFxuXG4gICAgICAvKlxuICAgICAgQSBkb3VibGUgcXVvdGUgY2FuIHN0YXJ0IGVpdGhlciBhIHN0cmluZyBvciBhIGxpbmUgY29tbWVudC4gU3RyaW5ncyBhcmVcbiAgICAgIGVuZGVkIGJlZm9yZSB0aGUgZW5kIG9mIGEgbGluZSBieSBhbm90aGVyIGRvdWJsZSBxdW90ZSBhbmQgY2FuIGNvbnRhaW5cbiAgICAgIGVzY2FwZWQgZG91YmxlLXF1b3RlcyBhbmQgcG9zdC1lc2NhcGVkIGxpbmUgYnJlYWtzLlxuXG4gICAgICBBbHNvLCBhbnkgZG91YmxlIHF1b3RlIGF0IHRoZSBiZWdpbm5pbmcgb2YgYSBsaW5lIGlzIGEgY29tbWVudCBidXQgd2VcbiAgICAgIGRvbid0IGhhbmRsZSB0aGF0IHByb3Blcmx5IGF0IHRoZSBtb21lbnQ6IGFueSBkb3VibGUgcXVvdGUgaW5zaWRlIHdpbGxcbiAgICAgIHR1cm4gdGhlbSBpbnRvIGEgc3RyaW5nLiBIYW5kbGluZyBpdCBwcm9wZXJseSB3aWxsIHJlcXVpcmUgYSBzbWFydGVyXG4gICAgICBwYXJzZXIuXG4gICAgICAqL1xuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgICBiZWdpbjogL1wiKFxcXFxcInxcXG5cXFxcfFteXCJcXG5dKSpcIi9cbiAgICAgIH0sXG4gICAgICBobGpzLkNPTU1FTlQoJ1wiJywgJyQnKSxcblxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICd2YXJpYWJsZScsXG4gICAgICAgIGJlZ2luOiAvW2J3dGdsc2F2XTpbXFx3XFxkX10qL1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnZnVuY3Rpb24nLFxuICAgICAgICBiZWdpbktleXdvcmRzOiAnZnVuY3Rpb24gZnVuY3Rpb24hJyxcbiAgICAgICAgZW5kOiAnJCcsXG4gICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICBobGpzLlRJVExFX01PREUsXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAncGFyYW1zJyxcbiAgICAgICAgICAgIGJlZ2luOiAnXFxcXCgnLFxuICAgICAgICAgICAgZW5kOiAnXFxcXCknXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdzeW1ib2wnLFxuICAgICAgICBiZWdpbjogLzxbXFx3LV0rPi9cbiAgICAgIH1cbiAgICBdXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdmltO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==