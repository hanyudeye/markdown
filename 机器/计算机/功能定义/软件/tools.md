
# 产品
## 办公表格处理
### office

# 日常处理
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


# 网络
## 下载

### youtube视频下载 ###

youtube-dl-gui 图形界面  
youtube-dl --proxy socks5://127.0.0.1:42428  https://www.youtube.com/watch?v=pKauTcfL-AE&feature=youtu.be

## 内网穿透
### natapp 
natapp -authtoken=e5eb817e91aeee83  

由于微信屏蔽了natapp的三级域名，所以如果需要进行微信支付或者微信小程序的联调时需要注册一个二级域名
如果用于联调微信小程序的话，则需要注册带有SSL证书的，因为微信小程序仅支持https协议。


## 查看公网 IP 
- curl cip.cc
- curl icanhazip.com
- curl ident.me
# 多媒体
## 视频处理
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
## 图片处理

### 抠图 ###
- [稿定抠图](https://www.gaoding.com/koutu?hmsr=zhongcao-kt_zh_xltx-koutu---pmzd-bdqd&utm_medium=&utm_source=zhongcao) 

### 录制视频短片
 - peek
### 像素识别 
- pick-colour-picker
### 屏幕录制 
- simplescreenrecorder
## 图片放大
- https://bigjpg.com/
## 算法图表
- http://sorting.at/
- https://visualgo.net/zh
# 在线工具
- [工具大全](https://www.diycode.cc/sites)  
- [正则表达式在线工具](https://regexr.com/)
- [谷歌开源](https://github.com/google)

# zsh插件 #

## zsh-proxy ##

- 首次使用需要初始化 init_proxy
- 开启　proxy
- 关闭　noproxy
- 查ip myip

# 协作
## github
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

## ranger
### rifle
ranger 通过 rifle 打开文件 ，配置文件为下，默认用第一个匹配的打开
> ~/.config/ranger/rifle.conf

## find 查找最近修改的文件
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

## 手机投屏 scrcpy
