(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[185],{

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

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3ZpbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvMTg1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBWaW0gU2NyaXB0XG5BdXRob3I6IEp1biBZYW5nIDx5YW5nanZuQDEyNi5jb20+XG5EZXNjcmlwdGlvbjogZnVsbCBrZXl3b3JkIGFuZCBidWlsdC1pbiBmcm9tIGh0dHA6Ly92aW1kb2Muc291cmNlZm9yZ2UubmV0L2h0bWxkb2MvXG5XZWJzaXRlOiBodHRwczovL3d3dy52aW0ub3JnXG5DYXRlZ29yeTogc2NyaXB0aW5nXG4qL1xuXG5mdW5jdGlvbiB2aW0oaGxqcykge1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICdWaW0gU2NyaXB0JyxcbiAgICBrZXl3b3Jkczoge1xuICAgICAgJHBhdHRlcm46IC9bISNAXFx3XSsvLFxuICAgICAga2V5d29yZDpcbiAgICAgICAgLy8gZXhwcmVzcyB2ZXJzaW9uIGV4Y2VwdDogISAmICogPCA9ID4gISEgIyBAIEBAXG4gICAgICAgICdOfDAgUHwwIFh8MCBhfDAgYWIgYWJjIGFibyBhbCBhbSBhbnwwIGFyIGFyZ2EgYXJnZCBhcmdlIGFyZ2RvIGFyZ2cgYXJnbCBhcmd1IGFzIGF1IGF1ZyBhdW4gYnwwIGJOIGJhIGJhZCBiZCBiZSBiZWwgYmYgYmwgYm0gYm4gYm8gYnAgYnIgYnJlYSBicmVha2EgYnJlYWtkIGJyZWFrbCBicm8gYnVmZG8gYnVmZmVycyBidW4gYncgY3wwIGNOIGNOZiBjYSBjYWJjIGNhZGRiIGNhZCBjYWRkZiBjYWwgY2F0IGNiIGNjIGNjbCBjZCBjZSBjZXggY2YgY2ZpciBjZ2V0YiBjZ2V0ZSBjZyBjaGFuZ2VzIGNoZCBjaGUgY2hlY2t0IGNsIGNsYSBjbG8gY20gY21hcGMgY21lIGNuIGNuZXcgY25mIGNubyBjbm9yZWEgY25vcmVtZSBjbyBjb2wgY29sbyBjb20gY29tYyBjb21wIGNvbiBjb25mIGNvcGUgJyArXG4gICAgICAgICdjcCBjcGYgY3EgY3IgY3MgY3N0IGN1IGN1bmEgY3VubWUgY3cgZGVsbSBkZWIgZGVidWdnIGRlbGMgZGVsZiBkaWYgZGlmZmcgZGlmZm8gZGlmZnAgZGlmZnB1IGRpZmZzIGRpZmZ0aGlzIGRpZyBkaSBkbCBkZWxsIGRqIGRsaSBkbyBkb2F1dG9hIGRwIGRyIGRzIGRzcCBlfDAgZWEgZWMgZWNob2UgZWNob2ggZWNob20gZWNob24gZWwgZWxzZWkgZW0gZW4gZW5kZm8gZW5kZiBlbmR0IGVuZHcgZW5lIGV4IGV4ZSBleGkgZXh1IGZ8MCBmaWxlcyBmaWxldCBmaW4gZmluYSBmaW5pIGZpciBmaXggZm8gZm9sZGMgZm9sZGQgZm9sZGRvYyBmb2xkbyBmb3IgZnUgZ28gZ3IgZ3JlcGEgZ3UgZ3YgaGEgaGVscGYgaGVscGcgaGVscHQgaGkgaGlkIGhpcyBpYSBpYWJjIGlmIGlqIGlsIGltIGltYXBjICcgK1xuICAgICAgICAnaW1lIGlubyBpbm9yZWEgaW5vcmVtZSBpbnQgaXMgaXNwIGl1IGl1bmEgaXVubWUganwwIGp1IGt8MCBrZWVwYSBrZWUga2VlcGogbE4gbE5mIGx8MCBsYWQgbGFkZGIgbGFkZGYgbGEgbGFuIGxhdCBsYiBsYyBsY2ggbGNsIGxjcyBsZSBsZWZ0YSBsZXQgbGV4IGxmIGxmaXIgbGdldGIgbGdldGUgbGcgbGdyIGxncmVwYSBsaCBsbCBsbGEgbGxpIGxtYWsgbG0gbG1hcGMgbG5lIGxuZXcgbG5mIGxuIGxvYWRrIGxvIGxvYyBsb2NrdiBsb2wgbG9wZSBscCBscGYgbHIgbHMgbHQgbHUgbHVhIGx1YWQgbHVhZiBsdiBsdmltZ3JlcGEgbHcgbXwwIG1hIG1hayBtYXAgbWFwYyBtYXJrcyBtYXQgbWUgbWVudXQgbWVzIG1rIG1rcyBta3NwIG1rdiBta3ZpZSBtb2QgbXogbXpmIG5iYyBuYiBuYnMgbmV3IG5tIG5tYXBjIG5tZSBubiBubm9yZW1lIG5vYSBubyBub2ggbm9yZWEgbm9yZW1lIG5vcm0gbnUgbnVuIG51bm1lIG9sIG98MCBvbSBvbWFwYyBvbWUgb24gb25vIG9ub3JlbWUgb3B0IG91IG91bm1lIG93IHB8MCAnICtcbiAgICAgICAgJ3Byb2ZkIHByb2YgcHJvIHByb21wdHIgcGMgcGVkIHBlIHBlcmxkIHBvIHBvcHUgcHAgcHJlIHByZXYgcHMgcHQgcHROIHB0ZiBwdGogcHRsIHB0biBwdHAgcHRyIHB0cyBwdSBwdyBweTMgcHl0aG9uMyBweTNkIHB5M2YgcHkgcHlkIHB5ZiBxdWl0YSBxYSByZWMgcmVkIHJlZGkgcmVkciByZWRyYXdzIHJlZyByZXMgcmV0IHJldHUgcmV3IHJpIHJpZ2h0YiBydWIgcnVieWQgcnVieWYgcnVuZCBydSBydiBzTiBzYW4gc2Egc2FsIHNhdiBzYiBzYk4gc2JhIHNiZiBzYmwgc2JtIHNibiBzYnAgc2JyIHNjcmlwIHNjcmlwdGUgc2NzIHNlIHNldGYgc2V0ZyBzZXRsIHNmIHNmaXIgc2ggc2ltIHNpZyBzaWwgc2wgc2xhIHNtIHNtYXAgc21hcGMgc21lIHNuIHNuaSBzbm8gc25vciBzbm9yZW1lIHNvciAnICtcbiAgICAgICAgJ3NvIHNwZWxsZCBzcGUgc3BlbGxpIHNwZWxsciBzcGVsbHUgc3BlbGx3IHNwIHNwciBzcmUgc3Qgc3RhIHN0YXJ0ZyBzdGFydHIgc3RhciBzdG9waSBzdGogc3RzIHN1biBzdW5tIHN1bm1lIHN1cyBzdiBzdyBzeSBzeW50aSBzeW5jIHROIHRhYk4gdGFiYyB0YWJkbyB0YWJlIHRhYmYgdGFiZmlyIHRhYmwgdGFibSB0YWJuZXcgJyArXG4gICAgICAgICd0YWJuIHRhYm8gdGFicCB0YWJyIHRhYnMgdGFiIHRhIHRhZ3MgdGMgdGNsZCB0Y2xmIHRlIHRmIHRoIHRqIHRsIHRtIHRuIHRvIHRwIHRyIHRyeSB0cyB0dSB1fDAgdW5kb2ogdW5kb2wgdW5hIHVuaCB1bmwgdW5sbyB1bm0gdW5tZSB1bnMgdXAgdmUgdmVyYiB2ZXJ0IHZpbSB2aW1ncmVwYSB2aSB2aXUgdmllIHZtIHZtYXBjIHZtZSB2bmUgdm4gdm5vcmVtZSB2cyB2dSB2dW5tZSB3aW5kbyB3fDAgd04gd2Egd2ggd2kgd2luYyB3aW5wIHduIHdwIHdxIHdxYSB3cyB3dSB3diB4fDAgeGEgeG1hcGMgeG0geG1lIHhuIHhub3JlbWUgeHUgeHVubWUgeXwwIHp8MCB+ICcgK1xuICAgICAgICAvLyBmdWxsIHZlcnNpb25cbiAgICAgICAgJ05leHQgUHJpbnQgYXBwZW5kIGFiYnJldmlhdGUgYWJjbGVhciBhYm92ZWxlZnQgYWxsIGFtZW51IGFub3JlbWVudSBhcmdzIGFyZ2FkZCBhcmdkZWxldGUgYXJnZWRpdCBhcmdnbG9iYWwgYXJnbG9jYWwgYXJndW1lbnQgYXNjaWkgYXV0b2NtZCBhdWdyb3VwIGF1bm1lbnUgYnVmZmVyIGJOZXh0IGJhbGwgYmFkZCBiZGVsZXRlIGJlaGF2ZSBiZWxvd3JpZ2h0IGJmaXJzdCBibGFzdCBibW9kaWZpZWQgYm5leHQgYm90cmlnaHQgYnByZXZpb3VzIGJyZXdpbmQgYnJlYWsgYnJlYWthZGQgYnJlYWtkZWwgYnJlYWtsaXN0IGJyb3dzZSBidW5sb2FkICcgK1xuICAgICAgICAnYndpcGVvdXQgY2hhbmdlIGNOZXh0IGNOZmlsZSBjYWJicmV2IGNhYmNsZWFyIGNhZGRidWZmZXIgY2FkZGV4cHIgY2FkZGZpbGUgY2FsbCBjYXRjaCBjYnVmZmVyIGNjbG9zZSBjZW50ZXIgY2V4cHIgY2ZpbGUgY2ZpcnN0IGNnZXRidWZmZXIgY2dldGV4cHIgY2dldGZpbGUgY2hkaXIgY2hlY2twYXRoIGNoZWNrdGltZSBjbGlzdCBjbGFzdCBjbG9zZSBjbWFwIGNtYXBjbGVhciBjbWVudSBjbmV4dCBjbmV3ZXIgY25maWxlIGNub3JlbWFwIGNub3JlYWJicmV2IGNub3JlbWVudSBjb3B5IGNvbGRlciBjb2xvcnNjaGVtZSBjb21tYW5kIGNvbWNsZWFyIGNvbXBpbGVyIGNvbnRpbnVlIGNvbmZpcm0gY29wZW4gY3ByZXZpb3VzIGNwZmlsZSBjcXVpdCBjcmV3aW5kIGNzY29wZSBjc3RhZyBjdW5tYXAgJyArXG4gICAgICAgICdjdW5hYmJyZXYgY3VubWVudSBjd2luZG93IGRlbGV0ZSBkZWxtYXJrcyBkZWJ1ZyBkZWJ1Z2dyZWVkeSBkZWxjb21tYW5kIGRlbGZ1bmN0aW9uIGRpZmZ1cGRhdGUgZGlmZmdldCBkaWZmb2ZmIGRpZmZwYXRjaCBkaWZmcHV0IGRpZmZzcGxpdCBkaWdyYXBocyBkaXNwbGF5IGRlbGV0ZWwgZGp1bXAgZGxpc3QgZG9hdXRvY21kIGRvYXV0b2FsbCBkZWxldGVwIGRyb3AgZHNlYXJjaCBkc3BsaXQgZWRpdCBlYXJsaWVyIGVjaG8gZWNob2VyciBlY2hvaGwgZWNob21zZyBlbHNlIGVsc2VpZiBlbWVudSBlbmRpZiBlbmRmb3IgJyArXG4gICAgICAgICdlbmRmdW5jdGlvbiBlbmR0cnkgZW5kd2hpbGUgZW5ldyBleGVjdXRlIGV4aXQgZXh1c2FnZSBmaWxlIGZpbGV0eXBlIGZpbmQgZmluYWxseSBmaW5pc2ggZmlyc3QgZml4ZGVsIGZvbGQgZm9sZGNsb3NlIGZvbGRkb29wZW4gZm9sZGRvY2xvc2VkIGZvbGRvcGVuIGZ1bmN0aW9uIGdsb2JhbCBnb3RvIGdyZXAgZ3JlcGFkZCBndWkgZ3ZpbSBoYXJkY29weSBoZWxwIGhlbHBmaW5kIGhlbHBncmVwIGhlbHB0YWdzIGhpZ2hsaWdodCBoaWRlIGhpc3RvcnkgaW5zZXJ0IGlhYmJyZXYgaWFiY2xlYXIgaWp1bXAgaWxpc3QgaW1hcCAnICtcbiAgICAgICAgJ2ltYXBjbGVhciBpbWVudSBpbm9yZW1hcCBpbm9yZWFiYnJldiBpbm9yZW1lbnUgaW50cm8gaXNlYXJjaCBpc3BsaXQgaXVubWFwIGl1bmFiYnJldiBpdW5tZW51IGpvaW4ganVtcHMga2VlcGFsdCBrZWVwbWFya3Mga2VlcGp1bXBzIGxOZXh0IGxOZmlsZSBsaXN0IGxhZGRleHByIGxhZGRidWZmZXIgbGFkZGZpbGUgbGFzdCBsYW5ndWFnZSBsYXRlciBsYnVmZmVyIGxjZCBsY2hkaXIgbGNsb3NlIGxjc2NvcGUgbGVmdCBsZWZ0YWJvdmUgbGV4cHIgbGZpbGUgbGZpcnN0IGxnZXRidWZmZXIgbGdldGV4cHIgbGdldGZpbGUgbGdyZXAgbGdyZXBhZGQgbGhlbHBncmVwIGxsYXN0IGxsaXN0IGxtYWtlIGxtYXAgbG1hcGNsZWFyIGxuZXh0IGxuZXdlciBsbmZpbGUgbG5vcmVtYXAgbG9hZGtleW1hcCBsb2FkdmlldyAnICtcbiAgICAgICAgJ2xvY2ttYXJrcyBsb2NrdmFyIGxvbGRlciBsb3BlbiBscHJldmlvdXMgbHBmaWxlIGxyZXdpbmQgbHRhZyBsdW5tYXAgbHVhZG8gbHVhZmlsZSBsdmltZ3JlcCBsdmltZ3JlcGFkZCBsd2luZG93IG1vdmUgbWFyayBtYWtlIG1hcGNsZWFyIG1hdGNoIG1lbnUgbWVudXRyYW5zbGF0ZSBtZXNzYWdlcyBta2V4cmMgbWtzZXNzaW9uIG1rc3BlbGwgbWt2aW1yYyBta3ZpZXcgbW9kZSBtenNjaGVtZSBtemZpbGUgbmJjbG9zZSBuYmtleSBuYnNhcnQgbmV4dCBubWFwIG5tYXBjbGVhciBubWVudSBubm9yZW1hcCAnICtcbiAgICAgICAgJ25ub3JlbWVudSBub2F1dG9jbWQgbm9yZW1hcCBub2hsc2VhcmNoIG5vcmVhYmJyZXYgbm9yZW1lbnUgbm9ybWFsIG51bWJlciBudW5tYXAgbnVubWVudSBvbGRmaWxlcyBvcGVuIG9tYXAgb21hcGNsZWFyIG9tZW51IG9ubHkgb25vcmVtYXAgb25vcmVtZW51IG9wdGlvbnMgb3VubWFwIG91bm1lbnUgb3duc3ludGF4IHByaW50IHByb2ZkZWwgcHJvZmlsZSBwcm9tcHRmaW5kIHByb21wdHJlcGwgcGNsb3NlIHBlZGl0IHBlcmwgcGVybGRvIHBvcCBwb3B1cCBwcG9wIHByZXNlcnZlIHByZXZpb3VzIHBzZWFyY2ggcHRhZyBwdE5leHQgJyArXG4gICAgICAgICdwdGZpcnN0IHB0anVtcCBwdGxhc3QgcHRuZXh0IHB0cHJldmlvdXMgcHRyZXdpbmQgcHRzZWxlY3QgcHV0IHB3ZCBweTNkbyBweTNmaWxlIHB5dGhvbiBweWRvIHB5ZmlsZSBxdWl0IHF1aXRhbGwgcWFsbCByZWFkIHJlY292ZXIgcmVkbyByZWRpciByZWRyYXcgcmVkcmF3c3RhdHVzIHJlZ2lzdGVycyByZXNpemUgcmV0YWIgcmV0dXJuIHJld2luZCByaWdodCByaWdodGJlbG93IHJ1YnkgcnVieWRvIHJ1YnlmaWxlIHJ1bmRvIHJ1bnRpbWUgcnZpbWluZm8gc3Vic3RpdHV0ZSBzTmV4dCBzYW5kYm94IHNhcmd1bWVudCBzYWxsIHNhdmVhcyBzYnVmZmVyIHNiTmV4dCBzYmFsbCBzYmZpcnN0IHNibGFzdCBzYm1vZGlmaWVkIHNibmV4dCBzYnByZXZpb3VzIHNicmV3aW5kIHNjcmlwdG5hbWVzIHNjcmlwdGVuY29kaW5nICcgK1xuICAgICAgICAnc2NzY29wZSBzZXQgc2V0ZmlsZXR5cGUgc2V0Z2xvYmFsIHNldGxvY2FsIHNmaW5kIHNmaXJzdCBzaGVsbCBzaW1hbHQgc2lnbiBzaWxlbnQgc2xlZXAgc2xhc3Qgc21hZ2ljIHNtYXBjbGVhciBzbWVudSBzbmV4dCBzbmlmZiBzbm9tYWdpYyBzbm9yZW1hcCBzbm9yZW1lbnUgc29ydCBzb3VyY2Ugc3BlbGxkdW1wIHNwZWxsZ29vZCBzcGVsbGluZm8gc3BlbGxyZXBhbGwgc3BlbGx1bmRvIHNwZWxsd3Jvbmcgc3BsaXQgc3ByZXZpb3VzIHNyZXdpbmQgc3RvcCBzdGFnIHN0YXJ0Z3JlcGxhY2Ugc3RhcnRyZXBsYWNlICcgK1xuICAgICAgICAnc3RhcnRpbnNlcnQgc3RvcGluc2VydCBzdGp1bXAgc3RzZWxlY3Qgc3VuaGlkZSBzdW5tYXAgc3VubWVudSBzdXNwZW5kIHN2aWV3IHN3YXBuYW1lIHN5bnRheCBzeW50aW1lIHN5bmNiaW5kIHROZXh0IHRhYk5leHQgdGFiY2xvc2UgdGFiZWRpdCB0YWJmaW5kIHRhYmZpcnN0IHRhYmxhc3QgdGFibW92ZSB0YWJuZXh0IHRhYm9ubHkgdGFicHJldmlvdXMgdGFicmV3aW5kIHRhZyB0Y2wgdGNsZG8gdGNsZmlsZSB0ZWFyb2ZmIHRmaXJzdCB0aHJvdyB0anVtcCB0bGFzdCB0bWVudSB0bmV4dCB0b3BsZWZ0IHRwcmV2aW91cyAnICsgJ3RyZXdpbmQgdHNlbGVjdCB0dW5tZW51IHVuZG8gdW5kb2pvaW4gdW5kb2xpc3QgdW5hYmJyZXZpYXRlIHVuaGlkZSB1bmxldCB1bmxvY2t2YXIgdW5tYXAgdW5tZW51IHVuc2lsZW50IHVwZGF0ZSB2Z2xvYmFsIHZlcnNpb24gdmVyYm9zZSB2ZXJ0aWNhbCB2aW1ncmVwIHZpbWdyZXBhZGQgdmlzdWFsIHZpdXNhZ2UgdmlldyB2bWFwIHZtYXBjbGVhciB2bWVudSB2bmV3ICcgK1xuICAgICAgICAndm5vcmVtYXAgdm5vcmVtZW51IHZzcGxpdCB2dW5tYXAgdnVubWVudSB3cml0ZSB3TmV4dCB3YWxsIHdoaWxlIHdpbnNpemUgd2luY21kIHdpbnBvcyB3bmV4dCB3cHJldmlvdXMgd3FhbGwgd3N2ZXJiIHd1bmRvIHd2aW1pbmZvIHhpdCB4YWxsIHhtYXBjbGVhciB4bWFwIHhtZW51IHhub3JlbWFwIHhub3JlbWVudSB4dW5tYXAgeHVubWVudSB5YW5rJyxcbiAgICAgIGJ1aWx0X2luOiAvLyBidWlsdCBpbiBmdW5jXG4gICAgICAgICdzeW5JRHRyYW5zIGF0YW4yIHJhbmdlIG1hdGNoYXJnIGRpZF9maWxldHlwZSBhc2luIGZlZWRrZXlzIHhvciBhcmd2ICcgK1xuICAgICAgICAnY29tcGxldGVfY2hlY2sgYWRkIGdldHdpbnBvc3ggZ2V0cWZsaXN0IGdldHdpbnBvc3kgc2NyZWVuY29sICcgK1xuICAgICAgICAnY2xlYXJtYXRjaGVzIGVtcHR5IGV4dGVuZCBnZXRjbWRwb3MgbXpldmFsIGdhcmJhZ2Vjb2xsZWN0IHNldHJlZyAnICtcbiAgICAgICAgJ2NlaWwgc3FydCBkaWZmX2hsSUQgaW5wdXRzZWNyZXQgZ2V0IGdldGZwZXJtIGdldHBpZCBmaWxld3JpdGFibGUgJyArXG4gICAgICAgICdzaGlmdHdpZHRoIG1heCBzaW5oIGlzZGlyZWN0b3J5IHN5bklEIHN5c3RlbSBpbnB1dHJlc3RvcmUgd2lubGluZSAnICtcbiAgICAgICAgJ2F0YW4gdmlzdWFsbW9kZSBpbnB1dGxpc3QgdGFicGFnZXdpbm5yIHJvdW5kIGdldHJlZ3R5cGUgbWFwY2hlY2sgJyArXG4gICAgICAgICdoYXNtYXB0byBoaXN0ZGVsIGFyZ2lkeCBmaW5kZmlsZSBzaGEyNTYgZXhpc3RzIHRvdXBwZXIgZ2V0Y21kbGluZSAnICtcbiAgICAgICAgJ3RhZ2xpc3Qgc3RyaW5nIGdldG1hdGNoZXMgYnVmbnIgc3RyZnRpbWUgd2lud2lkdGggYnVmZXhpc3RzICcgK1xuICAgICAgICAnc3RydHJhbnMgdGFicGFnZWJ1Zmxpc3Qgc2V0Y21kcG9zIHJlbW90ZV9yZWFkIHByaW50ZiBzZXRsb2NsaXN0ICcgK1xuICAgICAgICAnZ2V0cG9zIGdldGxpbmUgYnVmd2lubnIgZmxvYXQybnIgbGVuIGdldGNtZHR5cGUgZGlmZl9maWxsZXIgbHVhZXZhbCAnICtcbiAgICAgICAgJ3Jlc29sdmUgbGliY2FsbG5yIGZvbGRjbG9zZWRlbmQgcmV2ZXJzZSBmaWx0ZXIgaGFzX2tleSBidWZuYW1lICcgK1xuICAgICAgICAnc3RyMmZsb2F0IHN0cmxlbiBzZXRsaW5lIGdldGNoYXJtb2Qgc2V0YnVmdmFyIGluZGV4IHNlYXJjaHBvcyAnICtcbiAgICAgICAgJ3NoZWxsZXNjYXBlIHVuZG9maWxlIGZvbGRjbG9zZWQgc2V0cWZsaXN0IGJ1Zmxpc3RlZCBzdHJjaGFycyBzdHIybnIgJyArXG4gICAgICAgICd2aXJ0Y29sIGZsb29yIHJlbW92ZSB1bmRvdHJlZSByZW1vdGVfZXhwciB3aW5oZWlnaHQgZ2V0dGFid2ludmFyICcgK1xuICAgICAgICAncmVsdGltZSBjdXJzb3IgdGFicGFnZW5yIGZpbmRkaXIgbG9jYWx0aW1lIGFjb3MgZ2V0bG9jbGlzdCBzZWFyY2ggJyArXG4gICAgICAgICd0YW5oIG1hdGNoZW5kIHJlbmFtZSBnZXR0YWJ2YXIgc3RyZGlzcGxheXdpZHRoIHR5cGUgYWJzIHB5M2V2YWwgJyArXG4gICAgICAgICdzZXR3aW52YXIgdG9sb3dlciB3aWxkbWVudW1vZGUgbG9nMTAgc3BlbGxzdWdnZXN0IGJ1ZmxvYWRlZCAnICtcbiAgICAgICAgJ3N5bmNvbmNlYWxlZCBuZXh0bm9uYmxhbmsgc2VydmVyMmNsaWVudCBjb21wbGV0ZSBzZXR0YWJ3aW52YXIgJyArXG4gICAgICAgICdleGVjdXRhYmxlIGlucHV0IHdpbmNvbCBzZXRtYXRjaGVzIGdldGZ0eXBlIGhsSUQgaW5wdXRzYXZlICcgK1xuICAgICAgICAnc2VhcmNocGFpciBvciBzY3JlZW5yb3cgbGluZSBzZXR0YWJ2YXIgaGlzdGFkZCBkZWVwY29weSBzdHJwYXJ0ICcgK1xuICAgICAgICAncmVtb3RlX3BlZWsgYW5kIGV2YWwgZ2V0ZnRpbWUgc3VibWF0Y2ggc2NyZWVuY2hhciB3aW5zYXZldmlldyAnICtcbiAgICAgICAgJ21hdGNoYWRkIG1rZGlyIHNjcmVlbmF0dHIgZ2V0Zm9udG5hbWUgbGliY2FsbCByZWx0aW1lc3RyIGdldGZzaXplICcgK1xuICAgICAgICAnd2lubnIgaW52ZXJ0IHBvdyBnZXRidWZsaW5lIGJ5dGUybGluZSBzb3VuZGZvbGQgcmVwZWF0IGZuYW1lZXNjYXBlICcgK1xuICAgICAgICAndGFnZmlsZXMgc2luIHN0cndpZHRoIHNwZWxsYmFkd29yZCB0cnVuYyBtYXBhcmcgbG9nIGxpc3BpbmRlbnQgJyArXG4gICAgICAgICdob3N0bmFtZSBzZXRwb3MgZ2xvYnBhdGggcmVtb3RlX2ZvcmVncm91bmQgZ2V0Y2hhciBzeW5JRGF0dHIgJyArXG4gICAgICAgICdmbmFtZW1vZGlmeSBjc2NvcGVfY29ubmVjdGlvbiBzdHJpZHggd2luYnVmbnIgaW5kZW50IG1pbiAnICtcbiAgICAgICAgJ2NvbXBsZXRlX2FkZCBucjJjaGFyIHNlYXJjaHBhaXJwb3MgaW5wdXRkaWFsb2cgdmFsdWVzIG1hdGNobGlzdCAnICtcbiAgICAgICAgJ2l0ZW1zIGhsZXhpc3RzIHN0cnJpZHggYnJvd3NlZGlyIGV4cGFuZCBmbW9kIHBhdGhzaG9ydGVuIGxpbmUyYnl0ZSAnICtcbiAgICAgICAgJ2FyZ2MgY291bnQgZ2V0d2ludmFyIGdsb2IgZm9sZHRleHRyZXN1bHQgZ2V0cmVnIGZvcmVncm91bmQgY29zaCAnICtcbiAgICAgICAgJ21hdGNoZGVsZXRlIGhhcyBjaGFyMm5yIHNpbXBsaWZ5IGhpc3RnZXQgc2VhcmNoZGVjbCBpY29udiAnICtcbiAgICAgICAgJ3dpbnJlc3RjbWQgcHVtdmlzaWJsZSB3cml0ZWZpbGUgZm9sZGxldmVsIGhhc2xvY2FsZGlyIGtleXMgY29zICcgK1xuICAgICAgICAnbWF0Y2hzdHIgZm9sZHRleHQgaGlzdG5yIHRhbiB0ZW1wbmFtZSBnZXRjd2QgYnl0ZWlkeCBnZXRidWZ2YXIgJyArXG4gICAgICAgICdpc2xvY2tlZCBlc2NhcGUgZXZlbnRoYW5kbGVyIHJlbW90ZV9zZW5kIHNlcnZlcmxpc3Qgd2lucmVzdHZpZXcgJyArXG4gICAgICAgICdzeW5zdGFjayBweWV2YWwgcHJldm5vbmJsYW5rIHJlYWRmaWxlIGNpbmRlbnQgZmlsZXJlYWRhYmxlIGNoYW5nZW5yICcgK1xuICAgICAgICAnZXhwJ1xuICAgIH0sXG4gICAgaWxsZWdhbDogLzsvLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBobGpzLk5VTUJFUl9NT0RFLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgICBiZWdpbjogJ1xcJycsXG4gICAgICAgIGVuZDogJ1xcJycsXG4gICAgICAgIGlsbGVnYWw6ICdcXFxcbidcbiAgICAgIH0sXG5cbiAgICAgIC8qXG4gICAgICBBIGRvdWJsZSBxdW90ZSBjYW4gc3RhcnQgZWl0aGVyIGEgc3RyaW5nIG9yIGEgbGluZSBjb21tZW50LiBTdHJpbmdzIGFyZVxuICAgICAgZW5kZWQgYmVmb3JlIHRoZSBlbmQgb2YgYSBsaW5lIGJ5IGFub3RoZXIgZG91YmxlIHF1b3RlIGFuZCBjYW4gY29udGFpblxuICAgICAgZXNjYXBlZCBkb3VibGUtcXVvdGVzIGFuZCBwb3N0LWVzY2FwZWQgbGluZSBicmVha3MuXG5cbiAgICAgIEFsc28sIGFueSBkb3VibGUgcXVvdGUgYXQgdGhlIGJlZ2lubmluZyBvZiBhIGxpbmUgaXMgYSBjb21tZW50IGJ1dCB3ZVxuICAgICAgZG9uJ3QgaGFuZGxlIHRoYXQgcHJvcGVybHkgYXQgdGhlIG1vbWVudDogYW55IGRvdWJsZSBxdW90ZSBpbnNpZGUgd2lsbFxuICAgICAgdHVybiB0aGVtIGludG8gYSBzdHJpbmcuIEhhbmRsaW5nIGl0IHByb3Blcmx5IHdpbGwgcmVxdWlyZSBhIHNtYXJ0ZXJcbiAgICAgIHBhcnNlci5cbiAgICAgICovXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgICAgIGJlZ2luOiAvXCIoXFxcXFwifFxcblxcXFx8W15cIlxcbl0pKlwiL1xuICAgICAgfSxcbiAgICAgIGhsanMuQ09NTUVOVCgnXCInLCAnJCcpLFxuXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3ZhcmlhYmxlJyxcbiAgICAgICAgYmVnaW46IC9bYnd0Z2xzYXZdOltcXHdcXGRfXSovXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdmdW5jdGlvbicsXG4gICAgICAgIGJlZ2luS2V5d29yZHM6ICdmdW5jdGlvbiBmdW5jdGlvbiEnLFxuICAgICAgICBlbmQ6ICckJyxcbiAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIGhsanMuVElUTEVfTU9ERSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdwYXJhbXMnLFxuICAgICAgICAgICAgYmVnaW46ICdcXFxcKCcsXG4gICAgICAgICAgICBlbmQ6ICdcXFxcKSdcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3N5bWJvbCcsXG4gICAgICAgIGJlZ2luOiAvPFtcXHctXSs+L1xuICAgICAgfVxuICAgIF1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB2aW07XG4iXSwic291cmNlUm9vdCI6IiJ9