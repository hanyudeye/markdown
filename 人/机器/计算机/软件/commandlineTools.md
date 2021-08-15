# Tools
## 模糊跳转 z ##

相似的有  autojump

## 历史记录模糊查找 fzf ##
快捷键 **Ctrl+T**

## bench 代码性能测试
## asciinema和 svg-term录制终端 为 SVG 动画
我使用 asciinema 录制终端。输入 asciinema rec 即可开始录制。完成后按 Ctrl+D，选择本地保存或上传 asciinema.org

转换录制文件为 SVG 动画，需要提供录制 ID （公开 asciinema 页面后可以在 URL 中找到 ID），输出文件名，还有其他一些可选参数。例如，我使用如下命令将上面例子中的终端录制 (asciinema.org/a/219486) 转换为 SVG 文件：

svg-term --cast=219486 --out ~/somewhere/out.svg --padding 18 --height 8 --width 80

或者 直接 录制 ，然后转到 svg
``` shell
asciinema rec cast.json
cat cast.json | svg-term-cli
```
> 我在ubuntu 下是 **svg-term**

##  wrk,Locust 和 JMeter 性能测试工具

## 文件查找 fd/fdfind
查找所有 jpg 文件并转换 
``` sh
fd -e jpg -x convert {} {.}.png
```
![图片](images/commandlineTools/1.svg)

## 内容查找 rg 代替 grep 
## peco交互式过滤
将任何命令的输出通过管道传给 peco，便能交互式地过滤输出，查找所需信息。你可以把它想成交互式 grep，随着输入实时更新结果，让搜索过程更直观。

![图片](images/commandlineTools/2.webp)
## hexyl 十六进制查看器
检查二进制文件时通常查看文件的十六进制表示

## pomo 番茄钟计时器 (对有些人有效)

Start a 4 pomodoro session at 25 minute intervals:
``` shell
pomo start -t my-project "write some codes"
```

## ncdu 分析、清理磁盘空间
主要是 node_modules
## HTTPie curl 的现代替代品
HTTPie 是一个更简单（不像 curl，每次使用都要 Google 下用法）、功能更多、更美观的 curl 替代品，可以在命令行调用 HTTP 的 API。到目前为止，我介绍的工具中，它是最流行的，而且有很精良的[文档](https://httpie.org/doc)。

![图片](images/commandlineTools/3.webp)

## tldr 使用命令行工具的实用示例
tldr 的例子由社区维护，存储于 tldr 的 GitHub 仓库。

## gron 查看 JSON
gron 将 JSON 文本转换为离散的赋值语句，以便查找。我特别喜欢组合 fzf 使用（我在本系列的第一篇文章中提到过这个工具），这样可以交互式地查看 API：

![图片](images/commandlineTools/1.gif)

## explainshell，解释命令
如果你手头有一行很复杂的命令，想要了解它做了什么，又不想一个个查 man 或 tldr，那么你可以使用 explainshell

## tig 交互式地浏览 git 仓库
## 在线工具
1. CodeIf ：                     https://unbug.github.io/codelf
2. DocsChina ：            https://www.docschina.org
3. any-rule：                  http://github.com/any86/any-rule
4. tool.lu：                      https://tool.lu
5. baomitu：                  https://cdn.baomitu.com
6. typora：                      https://www.typora.io
7. 549.tv：                       http://www.549.tv

## ftp 命令行文件传输
- ftp ftp.oreilly.com
- 匿名登录 anonymous
- pwd /cd /ls
- binary (对于二进制文件，需要切换传输模式)
- 获取文件 get filename
- 退出

## 压缩解压
### gz 文件 
``` shell
gzip -dc file.tar.gz | tar -xvf -
``` 

## 计划任务
``` crontab
crontab -e
#insert this line to execute the script every 10 min
*/10 * * * *   DISPLAY=:0 path/to/ng_wallpaper.py > /tmp/ng_wpp
```

# on-my-Zsh 插件
``` config
plugins=(git autojump fd shell-proxy wd web-search history history-substring-search ssh-agent tmux extract gitignore zsh-autosuggestions fzf)
``` 

