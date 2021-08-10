基础

    1. 学习基础的bash用法，具体地说，阅读bash的man手册（man bash 并通读一遍）；很简单而且不长。其他的shell也同样可以，不过bash 是最通用的。

      2. 至少学习一种文本编辑器。最好是 vim (vi)， 在终端随机编辑文档方面通用性最强。

      3.知道怎样通过 man 来阅读文档(列出不同章节号，如：1表示普通的shell命令， 5表示文件格式和规范， 8 代表系统管理命令等)。有些bash 内置命令呢，可以使用 help 或者 help -d 来获取帮助(例如 cd)。

      4.学会使用 > 和 < 来重定向输入输出，学会使用 | 来建立管道。了解 > 用于覆盖输出文件， >> 用户追加到输出文件。 学习标准输出 stdout 和 标准错误 stderr。

      5.学习文件通配符 * (可能还有 ? 和 {…})和引用，明白双引号和单引号的区别。

    6.熟练掌握 bash 的任务管理器： &、ctrl-z、ctrl-c、jobs、fg、bg、kill 等等。

    7.熟悉 ssh, 并且知道如何通过 ssh-agent， ssh-add等实现无密码认证。

    8.基本的文件管理命令： ls 和 ls -l (特别地， 你得知道ls -l 结果中的每一列是什么意思)，less, head, tail 和 tail -f(最好也弄清楚 less +F 是嘛意思)， ln 和 ln -s (了解硬链接和软连接的区别和优缺点), chown, chmod, du (磁盘使用情况: du -hk *)。对文件系统来说， df, mount, fdisk, mkfs,lsblk。

      9.基本的网络管理命令： ip 或ifconfig， dig。

        10.熟练掌握正则表达式，以及grep/egrep 工具的多种标志。有必要知道 -i, -o, -A 以及 -B 选项的意思。

      11.学会使用 apt-get, dnf 或者 pacman(根据不同的发行版选择)来查找或者安装软件包。确保你安装了 pip 来安装 python 相关的命令行工具。

日常使用

      1.在 Bash中，使用 Tab 键来补全命令，使用 ctrl-r 来查询历史命令。

      2.在 Bash 中，使用 ctrl-w 来删除上一个单词，ctrl-u 删除整行命令。使用 alt-b 和 alt-f 来逐单词向前向后跳转，ctrl-k 将鼠标位置到行末的所有字符删除，ctrl-l清屏。查看 man readline 中的”Key Bindings”这一节了解 Bash 中默认的组合键。还有其他的很多，比如说 alt-. 可以用来上翻之前的命令。如果你偏好 vi风格的组合键，可以 set -o vi。

      3.使用history命令查看近期的命令。还有其他许多简写命令，比如 !$表示上一个参数，!!执行上一条命令等。不过通常我们更常用的是 ctrl-r和alt-. 。

      4.回到上一个工作目录： cd -

      5.如果你命令敲到一半发现还有其他事没做，想要稍后执行，怎么办呢？使用 alt-# 给这条命令行首加上#，再回车当做一条注释(或者使用 ctrl-a,#,回车)。之后通过历史命令找它回来继续往下敲。

      6.Xargs 或者 parallel 命令也很管用。我们还可以使用 -L 或者 -P 选项限制每行参数个数。如果对执行结果不确定的话，可以先用 xargs echo 查看。同样， -I{} 选项用起来也很顺手。例如：

find . -name '*.py' | xargs grep some_func

cat hosts | xargs -I{} ssh root@{} hostname

【补充 ： find . -name “.dsc” | xargs -L 2 echo 可以将当前目录下所有 .dsc 文件列出，并且限制每行显示两项。

find . -name “.dsc” | xargs -I{} mv {} {}.bak 可以将当前目录下所有后缀为 .dsc 的文件更名为 .dsc.bak

-I 选项告知 xargs 用每项的名称替换 {}

      7.Pstree -p 可以很清晰的展示进程树。使用 pgrep 和 pkill 来根据名称找出进程或者向进程发送信号 (注意 -f 的用法)了解一些发送给进程的信号。比如，可以使用 kill -STOP [pid] 来停止进程。 Man 7 signal 查看全部列表。

        8.使用 nohup 或者 disown 命令让程序在后台一直运行。

        9.通过 netstat -lntp 或者 ss -plat 命令来检查哪些进程正在监听端口(默认情况下监听 TCP 端口， 使用 -u 监听 UDP)。

        10.使用 lsof 查看所有打开的套接字和文件。详情自 man

        11.使用 alias 给常用命令创建别名。例如 alias ll=’ls -latr’ 为我们创建新的别名 ll。

        12.在 Bash 脚本中，使用 set -x 来调试输出。尽可能的使用严格模式。如果希望阻止我们的程序发生错误的情况下还继续运行，可以通过设置 set -e 来限制。还可以使用 set -o pipefail 来严格限制错误(话说这种问题比较微妙，需要多领悟)。对于比较复杂而牵扯甚多的脚本，可以使用 trap 。

        13.在 Bash 脚本中，子 shell (用括号包含)可以用来很方便的组织命令。一个常见用法是临时切换到不同的工作目录，例如：

# 在当前目录工作

(cd /some/other/dir && other-command)

# 继续在原目录工作

        14.在 Bash 中有多种变量展开的方式。

@检查某变量是否存在： ${name:?error message}。例如：如果某个 Bash 脚本需要一个参数， input_file=${1:?usage: $0 input_file} 就可以。

@数学展开式： i=$(((i+1)%5))

@序列： {1..10}

@截断字符串${var%suffix} 和 ${var#prefix}例如 :

#var=foo.pdf

# echo ${var%.pdf}.txt

# foo.txt。

        15.通过 <(some command) 这种方式可以将命令的输出视为文件。例如，比较本地和远程的 /etc/hosts 文件：

diff /etc/hosts <(ssh somehost cat /etc/hosts)

        16.要知道 Bash 中 “here documents” 的用法，比如 cat <<EOF …【man bash,搜索 Here Documents】

        17.在 Bash 中，通过 : some-command > logfile 2>&1 的方式来重定向标准输出和标准错误。通常的，为了保证你执行的命令不会在标准输入中残留一个打开的文件句柄，导致无法操作终端，最佳实践是加上 </dev/null.

        18使用 man ascii 查看十六进制和十进制值的ASCII表。man unicode，man utf-8，以及 man latin1 有助于你去了解通用的编码信息。

        19.使用 screen 或者 tmux 命令来操作多屏，尤其是在连接远程 session 、断开或者重连 session 等情况下非常实用。另一个轻量级的保存会话的工具是 dtach。

        21.ssh 中，了解如何使用 -L 或 -D（偶尔需要用 -R）去开启隧道是非常有用的，例如当你需要从一台远程服务器上访问 web。优化 ssh 配置有时候可能很管用，例如下面这个 ~/.ssh/config 修改了一些配置，相对于使用默认配置的其他服务器来说，它可以有效避免特定网络环境下连接被丢弃，使用压缩数据(有效用于低带宽连接中的 scp 操作)，以及多通道等：

TCPKeepAlive=yes

ServerAliveInterval=15

ServerAliveCountMax=6

Compression=yes

ControlMaster auto

ControlPath /tmp/%r@%h:%p

ControlPersist yes

SSH 还有其他一些安全相关的选项，须小心使用，例如在单个子网、主机或者可信任的网络中：

StrictHostKeyChecking=no，ForwardAgent=yes

        22.获取文件的八进制格式的权限，这种权限在系统配置中很管用，但是 ls 并不显示，并且很容易搞砸。可以使用这条命令：

stat -c '%A %a %n' /etc/timezone

        23.从另外一条命令中，以交互的方式选择值，可以使用 percol 或者 fzf。

        24.使用 fpp 来与其他命令输出的文件交互(如git)【facebook PathPicker, github 上的项目，例如 git status | fpp, find . -name “*.vala” | fpp】

        25.对一个简单的 web 服务器来说，将当前目录下所有的目录（包括子目录）展示给所处网络的所有用户，使用： python -m SimpleHTTPServer 7777 （使用端口 7777 和 Python 2）或python -m http.server 7777 （使用端口 7777 和 Python 3）。

        26.以某种权限来执行命令，使用sudo（root 权限）或sudo -u（其他用户）。使用su或者sudo bash来启动一个指定用户权限运行的 shell。使用su -模拟其他用户的登录。

文件和数据处理

        1.在当前目录下找到某名称的文件

# find . -name ‘something’

        2.找到其他任意位置的某个文件，使用

# locate something

但请注意： updatedb 可能无法索引到新增的文件

        3.在源代码或数据文件中搜索，使用 ag(比 grep -r 更好)。

        4.将 HTML 文件转化为文本格式：

lynx -dump -stdin

        5. pandoc 来对 Markdown、HTML 以及其他各种文件进行格式转换。

        6.如果某些情况下你需要处理 XML 数据，那么试试 xmlstarlet 吧，虽然它有点历史沧桑感但的确挺好用的。

        7.对 JSON 数据来说， 用 jq。

        8.对于 Excel 或者 CSV 文件， csvkit 提供诸如 in2csv, csvcut, csvjoin, csvgrep 等实用小工具。

        9.关于 Amazon S3， s3cmd 很方便而 s4cmd 更快。 Amazon 官方的 aws 工具是其他 AWS 相关工作的基石。

        10.了解如何使用 sort 和 uniq，包括 uniq 的 -u 参数和 -d 参数。另外可以了解一下 comm。

        11.了解如何使用 cut，paste 和 join 来更改文件。很多人都会使用 cut，但几乎都不会使用 join。

        12.了解如何运用 wc 去计算行数（-l），字符数（-m），单词数（-w）以及字节数（-c）。

        13.知道用 tee 来将标准输入的内容复制到文件或者标准输出，就像 ls -al | tee file.txt

        14.要知道语言环境可能对许多命令行工具产生微妙地影响，包括排序的顺序和性能。大多数 Linux 的安装过程会将 LANG 或其他有关的变量设置本地化。但是请注意当你改变语言环境后，排序的结果可能会随之变化。而且国际化可能会大大降低 sort 或其他命令的运行效率。某些情况下（例如集合运算、去重操作等）你可以放心的使用 export LC_ALL=C 来忽略掉国际化并使用基于字节的顺序。

        15.了解 awk 和 sed 关于数据的简单处理的用法。例如，将文本文件中第三列的所有数字求和：

awk '{ x += $3 } END { print x }'

这可比 Python 实现的代码量少三倍也快三倍。

        16.替换一个或多个文件中出现的字符串：

perl -pi.bak -e 's/old-string/new-string/g' my-files-*.txt

        17.使用 rename 完成批量文件的重命名。对于更复杂的情况，可以使用 repren[https://github.com/jlevy/repren]

# 将备份文件 foo.bak 还原至 foo

rename ‘s/.bak$//’ *.bak

# 将所有的文件名、目录、内容等全部重命名

repren --full --preserve-case --from foo --to bar .

      18.使用 shuf 从一个文件中随机选取行。

        19.了解 sort 的参数。处理数字方面，使用 -n 或者 -h 来处理可读性数字（例如 du -h 的输出）。明白关键字的工作原理（-t 和 -k）。请注意！如果你想要仅按第一个域来排序需要 -k1,1 ； -k1 意味着按整行排序。稳定排序（sort -s）在某些情况下很有用。例如，以第二个域为主关键字，第一个域为次关键字进行排序，你可以使用 sort -k1，1 | sort -s -k2，2。

        20.如果你想在 Bash 命令行中写 tab 制表符(举个栗子： sort 的 -t 参数指定分隔符：sort -t”tab ” -k2 sortfile)，按下 ctrl-v [Tab] 或键入 $’t' （后者可能更好，因为你可以复制粘贴它）。

        21.标准的源代码对比及合并工具是 diff 和 patch。使用 diffstat 查看变更总览数据。注意到 diff -r 对整个文件夹有效。使用 diff -r tree1 tree2 | diffstat 查看变更总览数据。

        22.对于二进制文件，使用 hd 使其以十六进制显示以及使用 bvi 来编辑二进制，使用 strings（加上 grep 等等）允许你查找一些文本。使用 xdelta3来对比二进制文件（Delta 压缩）。

        23.使用 iconv 更改文本编码。而更高级的用法，可以使用 uconv，它支持一些高级的 Unicode 功能。例如，这条命令将所有元音字母转为小写并移除了：

uconv -f utf-8 -t utf-8 -x '::Any-Lower; ::Any-NFD; [:Nonspacing Mark:] >; ::Any-NFC; ' < input.txt > output.txt

        24.拆分文件，查看 split（按大小拆分）和 csplit（按模式拆分）。

        25.使用 zless，zmore，zcat 和 zgrep对压缩过的文件进行操作。

系统调试

        1.对于 web 调试来说，curl 和 curl -I 都是很趁手的工具，它们的好基友 wget 也不错，或者是更时尚一点的 httpie。

        2.使用 iostat、netstat、top （htop 更佳）和 dstat 去获取硬盘、cpu 和网络的状态。熟练掌握这些工具可以使你快速的对系统的当前状态有一个大概了解。

        3.若要对系统有一个深度的总体认识，使用 glances。它在一个终端窗口中向你提供一些系统级的数据。这对于快速的检查各个子系统非常有帮助。

        4.若要了解内存状态，运行并理解 free 和 vmstat 的输出。尤其注意“cached”的值，它指的是 Linux 内核用来作为文件缓存的内存大小，因此它与空闲内存无关。

        5.Java 系统调试则是另一码事了，不过有一个简单的小技巧可以用于 Oracle 的 JVM 或其他 JVM ，运行 kill -3 <pid> 会将一个完整的栈轨迹和堆概述（包括 GC 的细节）保存到标准输出/日志文件。

        6.使用 mtr 去跟踪路由，用于确定网络问题。

        7.用 ncdu 来查看磁盘使用情况，它比常用的命令，如 du -sh *，更节省时间。

        8.查找正在使用带宽的套接字连接或进程，使用 iftop 或 nethogs。

        9.ab 工具（捆绑于 Apache）可以简单粗暴地检查 web 服务器的性能。对于更复杂的负载测试，使用 siege。

        10.wireshark，tshark 和 ngrep 可用于复杂的网络调试。

        11.了解 strace 和 ltrace。当你想知道程序运行失败、挂起甚至崩溃的原因，或者你想对性能有个总体了解的话，这两个工具十分管用。注意 profile 参数（-c）和附加到一个运行的进程参数 （-p）。

        12.了解 ldd 命令来检查共享库等等。

知道如何用 gdb 来调试运行程序并获取堆栈轨迹。

        13.学会使用 /proc。它在调试正在出现的问题的时候有时会效果惊人。比如：/proc/cpuinfo，/proc/meminfo，/proc/cmdline，/proc/xxx/cwd，/proc/xxx/exe，/proc/xxx/fd/，/proc/xxx/smaps。

如果想调试已经发生的问题，sar 显得很管用。它会列出CPU、内存、网络等历史统计数据。

关于更深层次的系统分析以及性能分析，看看 stap（SystemTap），perf，以及sysdig。

      14.查看你当前使用的系统，使用 uname 或者 uname -a （Unix／kernel 信息） or lsb_release -a （Linux 发行版信息）。

        15.如果某些问题看起来稍显搞笑，试试查看 dmesg 信息（可能是硬件或驱动问题）。

一行命令

      1.一些组合命令：当你需要对文本文件做集合交、并、差运算时， sort/uniq 联合出击显得非常管用。假设 a 与 b 是两个内容不同且去重的文件。这种方式效率很高，并且对各种大小的文件都适用，不管是在小文件还是上G的大文件。（sort 不受内存约束，不过如果 /tmp 所处的根分区容量有限，你可能需要 -T 参数），参阅前文中关于 LC_ALL 和 sort 的 -u 参数的部分。

cat a b | sort | uniq > c

# c is a union b

cat a b | sort | uniq -d > c

# c is a intersect b

cat a b b | sort | uniq -u > c

# c is set difference a - b

      2.使用 grep . * 命令来检查目录下所有文件的内容，例如那些包含许多配置设置的目录： /sys/, /proc/, /etc。

      3.对文本文件中第三列数据计算总和(相比python 快三倍，代码量却只有 python 的1/3):

awk '{ x += $3 } END { print x }' myfile

      4. 如果想查看目录树中文件的大小或者日期，下面这条命令类似递归的 ls -l,但是输出结果更易读：

find . -type f -ls

      5.假设你有一个类似于 web 服务器日志文件的文本文件，并且某个特定值只会出现在某些行上，比如会在 URL 中出现的 acct_id 参数。如果你想计算出每个 acct_id 值有多少次请求，使用如下代码：

运行这个函数从这篇文档中随机获取一条小技巧（解析 Markdown 文件并抽取项目）：

function taocl() {

curl -s https://raw.githubusercontent.com/jlevy/the-art-of-command-line/master/README.md |

pandoc -f markdown -t html |

xmlstarlet fo --html --dropdtd |

xmlstarlet sel -t -v "(html/body/ul/li[count(p)>0])[$RANDOM mod last()+1]" |

xmlstarlet unesc | fmt -80

}

管用的小冷门

expr：计算表达式、布尔操作或正则匹配

m4：简单地宏处理器

yes：多次打印字符串

cal：日历

env：执行一个命令（脚本文件中很有用）

printenv: 打印环境变量(在调试时或者脚本中很管用)

look: 找出以某字符串开头的英文单词(或者文件中的某一行)

cut, paste 和 join :数据处理

fmt: 格式化文本段落

pr : 将文本格式化为页数据或者列数据

fold ： 封装文本中的行【比如 -w 指定宽度，不使用默认的80】

Column: 将文本格式化为列或者表数据

expand 和 unexpand：制表符与空格之间转换

nl：添加行号

seq：打印序列数字

bc：计算器

factor：分解因数 【例如 factor 100，输出 2 2 5 5】

gpg：加密并签名文件

toe：终端类型列表

nc：网络调试及数据传输

socat：套接字代理，与 netcat 类似

slurm：网络负载监视器

dd：在文件或设备间传输数据

file：确定文件类型

tree：以树的形式显示路径和文件，类似于 ls，不过这条命令会递归显示

stat：文件信息

time：执行命令，并计算执行时间

tac：反向输出文件

Shuf ：将文件中的数据随机选择排列

comm： 逐行比较已排序的文件

pv： 监控通过管道的数据

hd 和 bvi：保存或者编辑二进制文件

strings： 提取二进制文件的文本内容

Tr： 字符转换与处理

Iconv 或 uconv： 文本编码的转换

Spit 和scplit ： 分割文件

Sponge: 在写之前读取所有输入，在对同一个文件读写很管用，例如： grep -v something some-file | sponge some-file 【将文件中所有匹配 something 的行都删除】

units：单位转化与计算；将一种计量单位转换为另一种等效的计量单位（参阅 /usr/share/units/definitions.units）

7z: 一种高效的压缩工具

Ldd： 查看动态库的信息

Nm： 提取可执行文件或者 obj 文件的符号

Ab：web 服务器性能分析工具

Strace： 调试系统调用

Mtr：网络调试跟踪工具

Cssh： 可视化的并发 shell

Rsync ：可用于远程文件目录同步

Wireshark 和 tshark ： 抓取包与网络调试

Ngrep： 网络层的 grep 工具

Host 和 dig： DNS 查找

Lsof ： 处理文件描述符和 socket 信息【列出所有打开的文件】

dstat ： 通用的系统统计工具

glances：高层次的多子系统概览

iostat：CPU 和硬盘使用状态

htop：top 的加强版

last：登入历史记录

w：当前登陆用户

id：用户/组 ID 信息

sar： 系统历史数据统计

iftop 或 nethogs：套接字及进程的网络利用率

ss：套接字数据统计

dmesg：引导及系统错误信息

hdparm：SATA/ATA 磁盘操作及性能分析

lsb_release：Linux 发行版信息

lsblk：列出块设备信息：树状图展示你的磁盘以及磁盘分区信息

lshw，lscpu，lspci，lsusb 和 dmidecode：查看硬件信息，包括 CPU、BIOS、RAID、显卡、其他设备等

fortune，ddate 和 sl：开个玩笑…… 如果对心灵鸡汤或者奔跑的小火车感兴趣的话，可以自己试试

仅限 MacOS

以下是仅限于 MacOS 系统的技巧

      1.用 brew （Homebrew）或者 port （MacPorts）进行包管理。这些可以用来在 Mac 系统上安装以上的大多数命令。

      2.用 pbcopy 复制任何命令的输出到桌面应用，用 pbpaste 粘贴输入。

      3.用 open 或者 open -a /Applications/Whatever.app 使用桌面应用打开文件。

      4.Spotlight： 用 mdfind 搜索文件，用 mdls 列出元数据（例如照片的 EXIF 信息）。

注意 MacOS 系统是基于 BSD UNIX 的，许多命令（例如 ps，ls，tail，awk，sed）都和 Linux 中有些微的不同，受 System V-style Unix 和 GNU 工具影响很大。你可以通过标题为 ”BSD General Commands Manual” 的 man 页面发现这些不同。在有些情况下 GNU 版本的命令也可能被安装（例如 gawk 和 gsed 对应 GNU 中的 awk 和 sed ）。如果要写跨平台的 Bash 脚本，避免使用这些命令（例如，考虑 Python 或者 perl ）或者经过仔细的测试。

19人点赞
Linux嵌入式系统设计


作者：Leon_Geo
链接：https://www.jianshu.com/p/be23feb6bc74
来源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。