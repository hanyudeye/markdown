# emacs
## emacs ##

> 可编程编辑器，通过加载编程文件实现扩展

### 选项 ###

| 选项        | 说明                 |
|-------------+----------------------|
| -q          | 不装载默认的配置文件 |
| -l filepath | 装载自己的配置文件   |


## 插件 ##

### ranger 目录导航 ###

- 上层目录，下层目录，跳转目录
- 配置显示样式
- 多标签
- 文件操作（复制，删除，重命名,标记，创建目录)

### org 对 agenda 的处理 ###

- org-agenda-schedule  设置开始时间线
- org-agenda-deadline 设置死亡时间线

### agenda 日程清单 ###

| 快捷键 | 含义                                    |
|--------+-----------------------------------------|
| M-h    | earlier view 早期清单(前一天【周】清单) |
| M-l    | later view                              |
| gr     | refresh 刷新                            |
| gd     | toggle grid 切换网格                    |
| C-v    | change view 变换视图                    |
| L      | 隐藏完已经成的东西                      |
| t      | 切换Todo状态                            |


清单相当于菜单，按照菜单按部就班，不浪费时间。是一种很好的人生规划。

### 插入引用字符 ###

- quoted-insert  快捷键 C-q  默认是8进制
- 设置其他进制   (setq read-quoted-char-radix 10) 或者16进制
(setq read-quoted-char-radix 16)



### google-translate ###

#### 设置默认要翻译的语言 ####

- google-translate-default-source-language
- google-translate-default-target-language

> 支持 C-u 前缀参数

#### 翻译 ####

- google-translate-query-translate
- google-translate-query-translate-reverse 反向翻译

#### 输出方向 google-translate-output-destination ####

- nil  弹出
- echo-area
- current-buffer
- popup
- kill-ring

#### 发音监听 google-translate-listen-program ####


### go-translate ###

https://github.com/lorniu/go-translate/blob/master/README-zh.md

# spacemacs 空格编辑器
## 编辑
vim 式的文本（代码）编辑方式
## layouts 和 workspaces
工程 project
## 命令
环境变量
## 比较 diff 
## 服务


# vscode
## vscode启动layui ##
> 现在不需要用 ，直接 live-server 就可以 
周六 七月 24 15:38:52 中国标准时间 2021


1. 首先在VSCode 上装一个插件：Debugger for Chrome

创建文件配置  .vscode/launch.json

``` json
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "chrome",
            "request": "launch",
            "name": "使用本机chrom调试",
            "url": "http://localhost:8080",
            "webRoot": "${workspaceFolder}",
        }
    ]
}
```

2. 开启本地服务器
安装npm install -g live-server

安装完成后 

live-server
live修改默认端口

安装路径C:\Users\xx\AppData\Roaming\npm\node_modules\live-server下index.js中的8080修改成自己要的

## 插件
### layui

## 设置快捷键
### 删除HTML标记对
```
{
    "key": "ctrl+shift+k","command": "editor.emmet.action.removeTag"
}
```

## 快速插入一段文字 lorem 或下载 chinese Lorem 插件
jw200 200个中文
## TranslationToolbox 翻译
> 使用快捷键 ctrl+alt+t or cmd+alt+t 启用TranslationToolbox扩展
> 选中想要翻译的文本，并将鼠标移至其上，即可显示翻译结果

## 多光标编辑 
按住Option(win Alt),然后用鼠标点，鼠标点在哪里哪里就会出现一个光标

## 定义(definition)和实现(implementation)处
f12跳到函数的定义处

Cmd+f12(win Ctrl+f12)跳转到函数的实现处

引用跳转  (shift+f12)

## 代码重构
F2


# android-studio
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



# regexp正则表达式

用于字符串操作
## 匹配单个字符
| 代码 | 功能                                     |
|------+------------------------------------------|
| .    | 匹配任意1个字符（除了\n）                |
| [ ]  | 匹配[ ]中列举的字符                      |
| \d   | 匹配数字，即0-9                          |
| \D   | 匹配非数字，即不是数字                   |
| \s   | 匹配空白，即 空格，tab键                 |
| \S   | 匹配非空白                               |
| \w   | 匹配非特殊字符，即a-z、A-Z、0-9、_、汉字 |
| \W   | 匹配特殊字符，即非字母、非数字、非汉字   |

## 匹配多个字符的相关格式

| 代码  | 功能                                                |
|-------+-----------------------------------------------------|
| *     | 匹配前一个字符出现0次或者无限次，即可有可无         |
| +     | 匹配前一个字符出现1次或者无限次，即至少有1次        |
| ?     | 匹配前一个字符出现1次或者0次，即要么有1次，要么没有 |
| {m}   | 匹配前一个字符出现m次                               |
| {m,n} | 匹配前一个字符出现从m到n次                          |

## 匹配开头和结尾的正则表达式

| 代码        | 功能                   |
|-------------+------------------------|
| ^           | 匹配字符串开头         |
| $           | 匹配字符串结尾         |
| [^指定字符] | 表示除了指定字符都匹配 |

## 匹配分组相关正则表达式

| 代码      | 功能                             |
|-----------+----------------------------------|
| 竖线      | 匹配左右任意一个表达式           |
| (ab)      | 将括号中字符作为一个分组         |
| \num      | 引用分组num匹配到的字符串        |
| (?P)      | 分组起别名                       |
| (?P=name) | 引用别名为name分组匹配到的字符串 |

