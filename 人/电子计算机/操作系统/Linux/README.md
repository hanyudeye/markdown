## linux (免费开源，操作稍微复杂)

## 基本思想
Linux的基本思想有两点：第一，一切都是文件；第二，每个文件都有确定的用途

命令、硬件和软件设备、操作系统、进程等等对于操作系统内核而言，都被视为拥有各自特性或类型的文件

## 常用命令及技巧
1、date：打印或者设置系统的日期和时间
2、stty-a：可以查看或者打印控制字符（Ctrl-C、Ctrl-D、Ctrl-Z等）
3、passwd：用passwd-h查看
4、logout，login：登录shell的登录和注销命令
5、more，less，head tail：显示或部分显示文件内容
6、lp/lpstat/cancel，lpr/lpq/lprm：打印文件
7、chmod u+x：更改文件权限
8、rm -fr dir：删除非空目录
9、cp -R dir：拷贝目录
10、fg jobid：可以将一个后台进程放到前台
11、kill的作用：send a signal to a process、eg：kill-9发送的是SIG_KILL信号，具体发送什么信号可以通过man kill查看、
12、ps的用法，ps-e或ps-o pid，ppid，session，tpgid，comm（其中session显示的sessionid，tpgid显示前台进程组id，comm显示命令名称）
13 ip a 查看ip地址信息的命令
14 zcat /proc/config.gz > config 到内核配置文件
