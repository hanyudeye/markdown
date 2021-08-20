## plug-in
### ideavim
IdeaVim 要使用IDE内置的一些功能，可以通过在命令行模式输入相应的action执行。
在 Vim 命名模式中输入：:actionlist就可以得到 IDE 提供的所有的内置功能列表显示，然后我们就可以从中找出我们想要的功能，进行按键映射即可。
c
注：
在配置action时，可以把这个action直接在IDE内输入:action {pattern}看下效果。
然后，配置.ideavimrc/_ideavimrc后，直接输入:source ~/.ideavimrc（source C:\Users\<YourName>\_ideavimrc）就可以直接看到效果。

``` 
source ~/.vim/basic/settings.vim
source ~/.vim/basic/mappings.vim

" no backup
set noundofile
set nobackup
set noswapfile

" No annoying sound on errors
set noerrorbells
set novisualbell
set t_vb=
set tm=500

" disable window search style
" nnoremap <C-f> /
" inoremap <C-f> <ESC>/
" vnoremap <C-f> <ESC>/<C-r><C-w>
" " command mode
" cnoremap <C-f> <C-r><C-w>


" ==================================================
" Show all the provided actions via `:actionlist`
" ==================================================
nnoremap <Leader>su :action ShowUsages<CR>
nnoremap <Leader>fu :action FindUsages<CR>
nnoremap <Leader><space> a<space><ESC>:action CodeCompletion<CR>
inoremap <Leader><space> <space><ESC>:action CodeCompletion<CR>
" copy
vnoremap <C-c> :action $Copy<CR>
" paste
nnoremap <C-v> :action $Paste<CR>
inoremap <C-v> <C-o>:action $Paste<CR>
vnoremap <C-v> "_d:action $Paste<CR>
" cut
vnoremap <C-x> "+d
nnoremap <C-x> :action $Cut<CR>
" <C-N>
nnoremap <C-n> :action GotoClass<CR>
inoremap <C-n> <ESC>:action GotoClass<CR>
nnoremap <leader>gc :action GotoClass<CR>
inoremap <leader>gc <ESC>:action GotoClass<CR>
" <C-e>
nnoremap <leader>cf :action RecentFiles<CR>
" <C-S-N>
nnoremap <C-S-n> :action GotoFile<CR>
inoremap <C-S-n> <ESC>:action GotoFile<CR>

" <C-o>
nnoremap <C-o> :action OverrideMethods<CR>
" <C-F12>
nnoremap <leader>ss :action FileStructurePopup<CR>
" <C-P>
nnoremap <C-P> :action ParameterInfo<CR>
inoremap <C-P> <ESC>:action ParameterInfo<CR>a
" <C-Q>
nnoremap <C-q> :action QuickJavaDoc<CR>

" <C-H> Hierarchy Class
nnoremap <C-H> :action TypeHierarchy<CR>
" <C-S-H> Hierarchy Method
nnoremap <C-S-H> :action MethodHierarchy<CR>
nnoremap <leader>hm :action MethodHierarchy<CR>
" as mouse clicked
nnoremap <leader>gd :action GotoDeclaration<CR>
inoremap <leader>gd <ESC>:action GotoDeclaration<CR>
" mean going to see the real implementation,aka method
nnoremap <Leader>gi :action GotoImplementation<CR>

" back
nnoremap <leader>gb :action Back<CR>
" forward
nnoremap <leader>fw :action Forward<CR>
" <C-A-L>
nnoremap <C-A-l> :action ReformatCode<CR>
inoremap <C-A-l> <ESC>:action ReformatCode<CR>a
nnoremap <leader>fm :action ReformatCode<CR>
inoremap <leader>fm <ESC>:action ReformatCode<CR>a

nnoremap <Leader>oi :action OptimizeImports<CR>
nnoremap <space>oi :action OptimizeImports<CR>

" built in search looks better
map <C-f> <ESC>:action Find<CR>
" comment
nnoremap <Leader>cc :action CommentByLineComment<CR>
vnoremap <Leader>cc :action CommentByLineComment<CR>
" pretend :) uncomment 
nnoremap <Leader>cu :action CommentByLineComment<CR>
vnoremap <Leader>cu :action CommentByLineComment<CR>

nnoremap <Leader>br :action ToggleLineBreakpoint<CR>
" see all breakpoints
nnoremap <Leader>abr :action ViewBreakpoints<CR>

nnoremap <Leader>fs :action ToggleFullScreen<CR>

nnoremap <leader>sew :action SearchEverywhere<CR>

nnoremap <Leader>cmd :action ChooseRunConfiguration<CR>

nnoremap <Leader>sel :action ActivateTerminalToolWindow<CR>
" <C-S-F<F4>> close windows just popup
nnoremap <leader>cw :action CloseActiveTab<CR>
" <C-j>
inoremap <C-j> <ESC>:action InsertLiveTemplate<CR>

" <C-R>
nnoremap <C-r> :action $Redo<CR>

nnoremap <Leader>w :action SaveDocument<CR>




" ==================================================
" Emulated Vim Plugins
" ==================================================
set surround

" 屏幕滚动时在光标上下方保留5行预览代码
set so=5


```

### intellimacs 
