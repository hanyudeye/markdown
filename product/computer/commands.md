
# 基本管理
## 日常处理

沟通
| Command | Action                                                 |
|---------+--------------------------------------------------------|
| dig     | Query DNS server.                                      |
| ftp     | File Transfer Protocol.                                |
| login   | Sign on.                                               |
| rsync   | Transfer files, particularly across a network.         |
| scp     | Securely copy files to remote system.                  |
| sftp    | Secure file transfer program.                          |
| ssh     | Run shell or single command on remote system (secure). |

比较

| Command | Action                                     |
|---------+--------------------------------------------|
| cmp     | Compare two files, byte by byte.           |
| comm    | Compare items in two sorted files.         |
| diff    | Compare two files, line by line.           |
| diff3   | Compare three files.                       |
| sdiff   | Compare and interactively merge two files. |

File Management

| Command | Action                                                                  |
|---------+-------------------------------------------------------------------------|
| cat     | Concatenate files or display them.                                      |
| chattr  | Change attributes on an ext2 file.                                      |
| chgrp   | Change group of files.                                                  |
| chmod   | Change access modes on files.                                           |
| chown   | Change ownership of files.                                              |
| chsh    | Change login shell.                                                     |
| cp      | Copy files.                                                             |
| csplit  | Split a file into pieces with a specific size or at specific locations. |
| dd      | Copy files in raw disk form.                                            |
| file    | Determine a file’s type.                                               |
| head    | Show the first few lines of a file.                                     |
| hexdump | Display files in hexadecimal format.                                    |
| less    | Display files by screenful, forward and backward.                       |
| ln      | Create filename aliases.                                                |
| ls      | List files and directories.                                             |
| md5sum  | Compute MD5 checksum.                                                   |
| merge   | Merge changes from different files.                                     |
| mkdir   | Create a directory.                                                     |
| more    | Display files by screenful, forward only.                               |
| mv      | Move or rename files or directories.                                    |
| newgrp  | Change current group.                                                   |
| od      | Display files in octal format.                                          |
| pwd     | Print working directory.                                                |
| rm      | Remove files.                                                           |
| rmdir   | Remove directories.                                                     |
| sha1sum | Compute SHA1 checksum                                                   |
| shred   | Securely delete files.                                                  |
| split   | Split files evenly.                                                     |
| tac     | Print lines of a file in reverse order.                                 |

Media

| Command     | Action                                                    |
|-------------+-----------------------------------------------------------|
| cdparanoia  | Rip a CD while providing extra features.                  |
| cdrdao      | Copy a CD.                                                |
| eject       | Eject a removable disk or tape.                           |
| genisoimage | Generate a binary image from a directory tree.            |
| icedax      | Rip a CD or DVD to create a computer-friendly WAV format. |
| readom      | Read or write a data CD or DVD.                           |
| volname     | Provide the volume name of a CD-ROM.                      |
| wodim       | Record to a CD or DVD                                     |

Printing

| Command | Action                           |
|---------+----------------------------------|
| lpq     | Show status of print jobs.       |
| lpr     | Send to the printer.             |
| lprm    | Remove print job.                |
| lpstat  | Get printer status.              |
| pr      | Format and paginate for printing |

Program Maintenance (维护)
| Command | Action                                                       |
|---------+--------------------------------------------------------------|
| ctags   | Generate symbol list for use with thevi editor.              |
| etags   | Generate symbol list for use with the Emacs editor.          |
| gdb     | GNU debugger.                                                |
| git     | Scalable, distributed revision control system.               |
| gprof   | Display object file’s profile data.                         |
| make    | Maintain, update, and regenerate related programs and files. |
| nm      | Display object file’s symbol table.                         |
| objcopy | Copy and translate object files.                             |
| objdump | Display information about object files.                      |
| patch   | Apply patches to source code.                                |
| pmap    | Print the memory map of a process.                           |
| size    | Print the size of an object file in bytes.                   |
| strace  | Trace system calls and signals.                              |
| strip   | Strip symbols from an object file.                           |
| svn     | Subversion revision control system                           |

Searching

| Command  | Action                                                                    |
|----------+---------------------------------------------------------------------------|
| apropos  | Search manpages for topic.                                                |
| egrep    | Extended version of grep.                                                 |
| fgrep    | Search files for literal words.                                           |
| find     | Search the system for files by name and take a range of possible actions. |
| grep     | Search files for text patterns.                                           |
| locate   | Search a preexisting database to show where files are on the system.      |
| look     | Search file for string at the beginning of lines.                         |
| strings  | Search binary files for text patterns.                                    |
| updatedb | Update thelocate database.                                                |
| whereis  | Find command.                                                             |
| which    | Print pathname of a command                                               |





| 命令                                   | 功能                                                        |
| --------------                         | -----------                                                 |
| expr                                   | 计算表达式、布尔操作或正则匹配                              |
| m4                                     | 简单地宏处理器                                              |
| yes                                    | 多次打印字符串                                              |
| cal                                    | 日历                                                        |
| env                                    | 执行一个命令（脚本文件中很有用）                            |
| printenv                               | 打印环境变量(在调试时或者脚本中很管用)                      |
| look                                   | 找出以某字符串开头的英文单词(或者文件中的某一行)            |
| cut, paste 和 join                     | 数据处理                                                    |
| sort                                   | -b 忽略开头的空白 -f 不区分大小写                           |
| uniq                                   | 重复行只显示一次                                            |
| fmt                                    | 格式化文本段落                                              |
| pr                                     | 将文本格式化为页数据或者列数据                              |
| fold                                   | 封装文本中的行【比如 -w 指定宽度，不使用默认的80】          |
| Column                                 | 将文本格式化为列或者表数据                                  |
| expand 和 unexpand                     | 制表符与空格之间转换                                        |
| nl                                     | 添加行号                                                    |
| seq                                    | 打印序列数字                                                |
| bc                                     | 计算器                                                      |
| factor                                 | 分解因数 【例如 factor 100，输出 2 2 5 5】                  |
| gpg                                    | 加密并签名文件                                              |
| toe                                    | 终端类型列表                                                |
| nc                                     | 网络调试及数据传输                                          |
| socat                                  | 套接字代理，与 netcat 类似                                  |
| slurm                                  | 网络负载监视器                                              |
| dd                                     | 在文件或设备间传输数据                                      |
| file                                   | 确定文件类型                                                |
| tree                                   | 以树的形式显示路径和文件，类似于 ls，不过这条命令会递归显示 |
| stat                                   | 文件信息                                                    |
| time                                   | 执行命令，并计算执行时间                                    |
| tac                                    | 反向输出文件                                                |
| Shuf                                   | 将文件中的数据随机选择排列                                  |
| comm                                   | 逐行比较已排序的文件                                        |
| pv                                     | 监控通过管道的数据                                          |
| hd 和 bvi                              | 保存或者编辑二进制文件                                      |
| strings                                | 提取二进制文件的文本内容                                    |
| Tr                                     | 字符转换与处理                                              |
| Iconv 或 uconv                         | 文本编码的转换                                              |
| Spit 和scplit                          | 分割文件                                                    |
| 7z                                     | 一种高效的压缩工具                                          |
| Ldd                                    | 查看动态库的信息                                            |
| Nm                                     | 提取可执行文件或者 obj 文件的符号                           |
| Ab                                     | web 服务器性能分析工具                                      |
| Strace                                 | 调试系统调用                                                |
| Mtr                                    | 网络调试跟踪工具                                            |
| Cssh                                   | 可视化的并发 shell                                          |
| Rsync                                  | 可用于远程文件目录同步                                      |
| Wireshark 和 tshark                    | 抓取包与网络调试                                            |
| Ngrep                                  | 网络层的 grep 工具                                          |
| Host 和 dig                            | DNS 查找                                                    |
| Lsof                                   | 处理文件描述符和 socket 信息【列出所有打开的文件】          |
| dstat                                  | 通用的系统统计工具                                          |
| glances                                | 高层次的多子系统概览                                        |
| iostat                                 | CPU 和硬盘使用状态                                          |
| htop                                   | top 的加强版                                                |
| last                                   | 登入历史记录                                                |
| w                                      | 当前登陆用户                                                |
| id                                     | 用户/组 ID 信息                                             |
| sar                                    | 系统历史数据统计                                            |
| iftop 或 nethogs                       | 套接字及进程的网络利用率                                    |
| ss                                     | 套接字数据统计                                              |
| dmesg                                  | 引导及系统错误信息                                          |
| hdparm                                 | SATA/ATA 磁盘操作及性能分析                                 |
| lsb_release                            | Linux 发行版信息                                            |
| lsblk                                  | 列出块设备信息                                              |
| lshw，lscpu，lspci，lsusb 和 dmidecode | 查看硬件信息，包括 CPU、BIOS、RAID、显卡、其他设备等        |
| bg nohup                               | 后台执行                                                    |

## 用户管理
## 文件系统管理
## 文件管理
## 周期任务
## 备份
## 系统日志
## 软件安装
- yum (rpm-based)
- aptitude/synaptic (debian-based)


# 网络管理

## TCP/IP网络
## 路由选择
## 网络硬件
## 网络文件系统
## 共享系统文件
## 电子邮件
## 安全
## Web主机托管和Internet服务器







## 网络 ##

### 下载 ###

#### youtube视频下载 ####

youtube-dl-gui 图形界面  
youtube-dl --proxy socks5://127.0.0.1:42428  https://www.youtube.com/watch?v=pKauTcfL-AE&feature=youtu.be

### 内网穿透 ###

#### natapp ####

natapp -authtoken=e5eb817e91aeee83  

由于微信屏蔽了natapp的三级域名，所以如果需要进行微信支付或者微信小程序的联调时需要注册一个二级域名
如果用于联调微信小程序的话，则需要注册带有SSL证书的，因为微信小程序仅支持https协议。


### 查看公网 IP ###

- curl cip.cc
- curl icanhazip.com
- curl ident.me

### 文件传输 ftp ###

- ftp ftp.oreilly.com
- 匿名登录 anonymous
- pwd /cd /ls
- binary (对于二进制文件，需要切换传输模式)
- 获取文件 get filename
- 退出

## 多媒体 ##

### 视频处理 ###

| 视频编辑器 | 主要用途           |
|------------+--------------------|
| Kdenlive   | 通用视频编辑       |
| OpenShot   | 通用视频编辑       |
| Shotcut    | 通用视频编辑       |
| Flowblade  | 通用视频编辑       |
| Lightworks | 专业级视频编辑     |
| Blender    | 专业级三维编辑     |
| Cinelerra  | 通用视频编辑       |
| DaVinci    | 专业级视频处理编辑 |
| VidCutter  | 简单视频拆分合并   |

### 视频录制 ###

#### 录制SVG 动画 ####

输入 asciinema rec 即可开始录制。完成后按 Ctrl+D，选择本地保存或上传 asciinema.org

转换录制文件为 SVG 动画，需要提供录制 ID （公开 asciinema 页面后可以在 URL 中找到 ID），输出文件名，还有其他一些可选参数。例如，我使用如下命令将上面例子中的终端录制 (asciinema.org/a/219486) 转换为 SVG 文件：

> svg-term --cast=219486 --out ~/somewhere/out.svg --padding 18 --height 8 --width 80

或者 直接 录制 ，然后转到 svg
``` shell
asciinema rec cast.json
cat cast.json | svg-term-cli
```
> 我在ubuntu 下是 **svg-term**

### 图片处理 ###

#### 抠图 ####

- [稿定抠图](https://www.gaoding.com/koutu?hmsr=zhongcao-kt_zh_xltx-koutu---pmzd-bdqd&utm_medium=&utm_source=zhongcao) 

#### 录制视频短片 ####

 - peek

#### 像素识别 ####

- pick-colour-picker

#### 屏幕录制 ####

- simplescreenrecorder

### 图片放大 ###

- https://bigjpg.com/

### 算法图表 ###

- http://sorting.at/
- https://visualgo.net/zh

## Web

- [工具大全](https://www.diycode.cc/sites)  
- [正则表达式在线工具](https://regexr.com/)
- [谷歌开源](https://github.com/google)

## 协作 ##

### github ###

- 热门  https://github.com/trending
- 专题 https://github.com/topics

搜索
``` 
优秀项目  Awesome + 关键字  
stars: fork
qt in:name：表示在项目名称中搜索 qt 关键字
qt in:readme：表示在项目 readme 中搜索 qt 关键字
qt in:description：表示在 项目描述中搜索 qt 关键字
qt in:USERNAME：表示在 USERNAME 中搜索 qt 关键字
qt in:ORGNAME：表示在组织或机构名中搜索 qt 关键字
size:>=5000 Qt ：搜索大小超过 5M 的包含 Qt 关键字项目
language:C++ location:china 搜索国内的开发者，语言限定为 C++
``` 
后缀
```
stars:>20 extension:el language:elisp
```

## Tools ##
## 文件管理 ##

### 查找 ###

- fzf 模糊查找
- fd/fdfind

``` sh
fd -e jpg -x convert {} {.}.png
```
![图片](images/commandlineTools/1.svg)


- find 
``` 
查找最近30分钟修改的当前目录下的.php文件
find . -name '*.php' -mmin -30

查找最近24小时修改的当前目录下的.php文件
find . -name '*.php' -mtime 0

查找最近24小时修改的当前目录下的.php文件，并列出详细信息
find . -name '*.inc' -mtime 0 -ls

查找当前目录下，最近24-48小时修改过的常规文件。
find . -type f -mtime 1

查找当前目录下，最近1天前修改过的常规文件。
find . -type f -mtime +1
``` 

### 内容查找 ###

- rg
- grep 

### 内容交互式过滤 ###

- peco
将任何命令的输出通过管道传给 peco，便能交互式地过滤输出，查找所需信息。你可以把它想成交互式 grep，随着输入实时更新结果，让搜索过程更直观。

![图片](images/commandlineTools/2.webp)

### 十六进制查看器 ###

- hexyl 

## 目录管理 ##

### 跳转 ###

- z 模糊跳转 
- autojump

### ranger ###

#### rifle ####

ranger 通过 rifle 打开文件 ，配置文件为下，默认用第一个匹配的打开
> ~/.config/ranger/rifle.conf

## 编程工具 ##

### bench 代码性能测试 ###

### wrk,Locust 和 JMeter 性能测试工具 ###

### ncdu 分析、清理磁盘空间 ###

主要是 node_modules

### HTTPie curl 的现代替代品 ###

HTTPie 是一个更简单（不像 curl，每次使用都要 Google 下用法）、功能更多、更美观的 curl 替代品，可以在命令行调用 HTTP 的 API。到目前为止，我介绍的工具中，它是最流行的，而且有很精良的[文档](https://httpie.org/doc)。

![图片](images/commandlineTools/3.webp)

### tldr 使用命令行工具的实用示例 ###

tldr 的例子由社区维护，存储于 tldr 的 GitHub 仓库。

### gron 查看 JSON ###

gron 将 JSON 文本转换为离散的赋值语句，以便查找。我特别喜欢组合 fzf 使用  

![图片](images/commandlineTools/1.gif)

### 解释命令 explainshell ###

如果你手头有一行很复杂的命令，想要了解它做了什么，又不想一个个查 man 或 tldr，那么你可以使用 explainshell

### 计划任务 ###

``` crontab
crontab -e
#insert this line to execute the script every 10 min
*/10 * * * *   DISPLAY=:0 path/to/ng_wallpaper.py > /tmp/ng_wpp
```

## 在线工具 ##

- 查找 1. CodeIf ：                     https://unbug.github.io/codelf
- 2. DocsChina ：            https://www.docschina.org
- 3. any-rule：                  http://github.com/any86/any-rule
- 5. baomitu：                  https://cdn.baomitu.com
- 7. 549.tv：                       http://www.549.tv


## 压缩解压 ##

#### gz 文件 ####

``` shell
gzip -dc file.tar.gz | tar -xvf -
``` 

## 手机相关 ##

### 手机投屏 scrcpy ###

## 仓库管理 ##

### tig 交互式地浏览 git 仓库 ###


## 系统
### 绘图板 ###

#### wacom ####

``` sh
 $ xsetwacom --set "Wacom Bamboo 16FG 4x5 Finger touch" ScrollDistance 50  # change scrolling speed
 $ xsetwacom --set "Wacom Bamboo 16FG 4x5 Finger touch" Gesture off        # disable multitouch gestures
 $ xsetwacom --set "Wacom Bamboo 16FG 4x5 Finger touch" Touch off          # disable touch
```  

 我的设备

Wacom Intuos5 touch M Pad pad   	id: 19	type: PAD      ( 左边键盘区) 
Wacom Intuos5 touch M Pen stylus	id: 20	type: STYLUS  (笔尖)  
Wacom Intuos5 touch M Pen eraser	id: 21	type: ERASER   (橡皮差) 
Wacom Intuos5 touch M Pen cursor	id: 22	type: CURSOR   (光标) 
Wacom Intuos5 touch M Finger touch	id: 23	type: TOUCH   (手指触控区) 


1. xsetwacom --set "Wacom Intuos5 touch M Finger touch" Touch off          # disable touch  (关闭手指触控)
2. xsetwacom --set "Wacom Intuos5 touch M Pad pad" Button 1 'key a'   #映射按键,映射到中间的圆点
xsetwacom --set "Wacom Intuos5 touch M Pad pad" Button 2 'key b'   #映射按键,映射不到

3. xsetwacom --set 20 MapToOutput "DP-0"  # 映射到单独的一个显示器
xinput map-to-output 20 DP-0   # 这个有用,可能有引号什么原因

#### turn Wacom Touch off. ####

xsetwacom --set "Wacom Intuos5 touch M Finger touch" TOUCH off

#### Turn Wacom Ring off. ####

xsetwacom --set 'Wacom Intuos5 touch M Pen pad' 'AbsWheelUp' 'button 0'
xsetwacom --set 'Wacom Intuos5 touch M Pen pad' 'AbsWheelDown' 'button 0'
xsetwacom --set 'Wacom Intuos5 touch M Pen pad' 'AbsWheel2Up' 'button 0'
xsetwacom --set 'Wacom Intuos5 touch M Pen pad' 'AbsWheel2Down' 'button 0'
xsetwacom --set 'Wacom Intuos5 touch M Pen pad' 'RelWheelUp' 'button 0'
xsetwacom --set 'Wacom Intuos5 touch M Pen pad' 'RelWheelDown' 'button 0'

#### Turn Wacom ExpressKeys off. ####

Note: Buttons 4 -7 are not adjustable.
xsetwacom -s --set "Wacom Intuos5 touch M Pen pad" Button 1 "button 0"
xsetwacom -s --set "Wacom Intuos5 touch M Pen pad" Button 2 "button 0"
xsetwacom -s --set "Wacom Intuos5 touch M Pen pad" Button 3 "button 0"
xsetwacom -s --set "Wacom Intuos5 touch M Pen pad" Button 8 "button 0"
xsetwacom -s --set "Wacom Intuos5 touch M Pen pad" Button 9 "button 0"
xsetwacom -s --set "Wacom Intuos5 touch M Pen pad" Button 10 "button 0"
xsetwacom -s --set "Wacom Intuos5 touch M Pen pad" Button 11 "button 0"
xsetwacom -s --set "Wacom Intuos5 touch M Pen pad" Button 12 "button 0"
xsetwacom -s --set "Wacom Intuos5 touch M Pen pad" Button 13 "button 0"

### 声音处理 ###

#### establishing connection to pulseaudio.please wait ####

- 显示设备 cat /proc/asound/cards
- kill进程 pulseaudio -k 
- 重启 pulseaudio -D


# 其他管理技术 
## X窗口系统
## 打印
## 维护与环境
## 性能分析
## 同Windows协作
## 串行设备
## 驱动程序和内核
## 守护进程
## 管理政策与策略
