# i3wm  https://i3wm.org/
> improved tilling wm

- 窗口(容器)有四种形态： 平铺(till)，堆栈(stacks)，标签(table)，浮动(float)
- 键盘操控窗口(工作区)方便 (配置快捷键)

## 配置
### 鼠标快捷键

i3支持在容器里按下特定的鼠标按钮时执行命令。 和键盘的绑定一样，使用bindsym命令。

句法

bindsym [--release] [--border] [--whole-window] [--exclude-titlebar] [<Modifiers> +] button <n> command

- 默认情况下，绑定仅在单击窗口的标题栏时生效。 如果给出--release标志，它将在释放鼠标按钮时生效。
- --whole-window会让鼠标绑定在出窗口边框以外的任何地方生效。
- 指定--border标志单击边框时生效。
- --exclude-titlebar标志，则不会考虑标题栏的绑定。

>例子
``` shell
# 标题栏上单击中键关闭窗口
bindsym --release button2 kill
  
# 在窗口的任意一个部分单击中键会关闭
bindsym --whole-window $mod+button2 kill
  
# 标题栏上右击进入/离开悬浮模式
bindsym button3 floating toggle
bindsym $mod+button3 floating toggle
  
# 侧面按钮可以移动窗口
bindsym button9 move left
bindsym button8 move right
```

### 限制浮动窗口大小 ###

- floating_maximum_size 设置最大尺寸，值-1时窗口的最大尺寸不受限制。
- float_maximum_size 未定义或指定为0，则i3将使用默认值来设置最大尺寸。
> floating_minimum_size的处理方式类似于floating_maximum_size。
```
floating_minimum_size <width> x <height>
floating_maximum_size <width> x <height>
```
最小尺寸 75x75，最大尺寸不做限制⇂
```
floating_minimum_size 75 x 50
floating_maximum_size -1 x -1
```

### 新窗口的边框样式
default_floating_border仅仅适用于以浮动模式打开的窗口（如对话框），不适用于以平铺模式打开，后边变成悬浮窗口的窗口。
```
default_border normal|none|pixel
default_border normal|pixel <px>
default_floating_border normal|none|pixel
default_floating_border normal|pixel <px>
```
- pilex选项会在窗口四周绘制边框。
- normal除了绘制窗口边框以外，还会显示窗口的标题栏。
- none 选项不显示边框。
- <px>用来指定边框大小


### 窗口默认形态
使用for_window命令，可以让i3在遇到特定窗口时执行命令
for_window <criteria> <command>

criteria属性里常用的条件是class，它可以匹配一个进程的所有窗口。一个窗口属于哪个class可以这样查询：
``` shell
$ xprop|grep CLASS
WM_CLASS(STRING) = "xfce4-terminal", "Xfce4-terminal"
 ```
执行命令后，鼠标将会变成十字形，用鼠标抓取窗口，获得的输出WM_CLASS的第二部分是窗口的class属性。比如，上面抓取到的xfce终端的class属性是Xfce4-terminal。

``` shell 
# 为所有XTerm窗口启用浮动模式
for_window [class="XTerm"] floating enable

# 将所有的xfce终端设置成float模式，并设置25像素的边框
for_window [class="Xfce4-terminal"] floating enable border normal 25

# 一个不太有用但相当有趣的例子：
# 一旦工作目录切换到～/work
# 窗口就会浮动
for_window [title="x200: ~/work"] floating enable
```

### 自动将窗口放置到指定工作区上 

assign <criteria> [→] [workspace] [number] <workspace>
assign <criteria> [→] output left|right|up|down|primary|<output>

例如

``` shell
#将URxvt终端分配给工作区2
assign [class="URxvt"] 2
  
# 同样的事情，但更精确（完全匹配而不是子串）
assign [class="^URxvt$"] 2
  
# 同样的事情，但有一个美丽的箭头:)
assign [class="^URxvt$"] → 2
  
# 分配给已命名的工作区
assign [class="^URxvt$"] → work
  
# 不论工作区的名字，将URxvt分配到2号工作区
assign [class="^URxvt$"] → number 2
  
# 你还可以指定数字+名称。如果存在编号为2的工作空间，则assign将跳过文本部分。
assign [class="^URxvt$"] → number "2: work"
  
# Start urxvt -name irssi
assign [class="^URxvt$" instance="^irssi$"] → 3
  
# 将URxvt分配给当前输出的右侧
assign [class="^URxvt$"] → output right
  
# 将urxvt分配给主输出
assign [class="^URxvt$"] → output primary
```

可能没有配置主输出。为此，可以这样：

``` shell 
xrandr --output <output> --primary
```
要获取类和实例，可以使用xprop。单击窗口后，可能会有这样子的输出：
```
WM_CLASS(STRING) = "irssi", "URxvt"
其中“irssi”是实例，”URxvt“是类。
```

### 窗口颜色
> <colorclass> <border> <background> <text> <indicator> <child_border>

colorclass可以是：

- client.focused___正在拥有焦点的客户端。
- client.focused_inactive___客户端时容器的焦点之一，但是还没有焦点。
- client.unfocused___客户端不是容器中的焦点
- client.urgent___紧急提示激活的客户端
- client.placeholder___用来绘制窗口中包含的占位符的背景和字体颜色。
- client.background___背景颜色将用于绘制客户端窗口的背景

颜色采用HTML十六进制格式（#rrggbb），这是i3默认情况下的颜色配置：
``` 
# class                 border  backgr. text    indicator child_border
client.focused          #4c7899 #285577 #ffffff #2e9ef4   #285577
client.focused_inactive #333333 #5f676a #ffffff #484e50   #5f676a
client.unfocused        #333333 #222222 #888888 #292d2e   #222222
client.urgent           #2f343a #900000 #ffffff #900000   #900000
client.placeholder      #000000 #0c0c0c #ffffff #000000   #0c0c0c

client.background       #ffffff
```
对于窗口装饰，子窗口周围的颜色是child_border，border颜色只是标题栏上下的两条细线。

indicator颜色用于提示新窗口的打开位置。 对于水平分割容器，右边框将以indicator颜色绘制，对于垂直分割容器，则是底部边框。

### 调整浮动窗口(虽然没什么用但还是讲一下吧……)

可以使用floating_modifier来定义一个按键。

可以在按下这个按键的同时按下左键不放，移动悬浮窗口。

### 工作区的默认拆分方向 

这是用来指定工作区在打开新窗口时是怎样拆分屏幕的。

默认情况下，宽屏幕显示器（宽度大于高度）将水平拆分屏幕，而高度大于宽度的显示器将垂直拆分屏幕。

default_orientation配置可以覆盖该行为。

### 隐藏屏幕边缘附近的边框 ###

hide_edge_borders隐藏屏幕边缘附近的容器边框。在只有一个窗口可见时， “smart”选项隐藏工作区上的边框。默认为none。

hide_edge_borders none|vertical|horizontal|both|smart

### 在窗口打开时不获取焦点 ###

出现新窗口时，它将会被聚焦。no_focus命令允许防止这种情况发生。
```
no_focus [window_role="pop-up"]
```

### 焦点跟随鼠标 ###

默认情况下，窗口焦点会跟随鼠标移动。
focus_follows_mouse yes|no


### 将工作区放到指定屏幕上 ###
workspace <workspace> output <output>
output是屏幕的RandR输出的名称。（在笔记本电脑上，可能是VGA1或LVDS1作为输出）

### 粘滞悬浮窗口 ###

如果你想让一个窗口一直留在屏幕上（即使切换工作区后，它也能一直留在屏幕上），可以用sticky命令。

用法
sticky enable|disable|toggle

```
# make a terminal sticky that was started as a notepad
for_window [instance=notepad] sticky enable
```

### 切换工作区/移动窗口至工作区 ###
move container to workspace命令将容器移动到指定工作区。
workspace next命令和workspace prev用来切换到下/上一个工作区。

### 命名工作区 ###

可以给工作区任意命名，而不是用一堆无聊的数字。比如说这样。
```
bindsym $mod+1 workspace (́◉◞౪◟◉‵)
bindsym $mod+2 workspace ヽ(́◕◞౪◟◕‵)ﾉ
bindsym $mod+3 workspace థ౪థ
bindsym $mod+4 workspace (❍ᴥ❍ʋ)
bindsym $mod+5 workspace ლ(・´ｪ`・ლ)
bindsym $mod+6 workspace ◑ω◐
bindsym $mod+7 workspace (´≖◞౪◟≖)
bindsym $mod+8 workspace (〃∀〃)
bindsym $mod+9 workspace (”・ω・)”うー！(／・ω・)／にゃー！
bindsym $mod+0 workspace (*’ｰ’*)

# 当然也可以同时使用编号和名字来命名工作区，比如说酱：

bindsym $mod+1 workspace 1: ☕
bindsym $mod+2 workspace 2: ♬
```

### 控制i3bar ###

有两个命令控制i3bar的状态。
```
bar hidden_state hide|show|toggle [<bar_id>]
bar mode dock|hide|invisible|toggle [<bar_id>]
```
如你所见，toggle同学又是用来在几种状态之间来回切换。
```
# 显示/隐藏i3bar
bindsym $mod+m bar hidden_state toggle
# dock(停靠)模式和hide(隐藏)模式之间切换
bindsym $mod+n bar mode toggle
# 将id为bar-1的i3bar切换成隐藏模式
bindsym $mod+b bar mode hide bar-1
# bar-1的i3bar始终隐藏
bindsym $mod+Shift+b bar mode invisible bar-1
```

# rofi 桌面运行程序
# 设置屏幕不同背景
feh --bg-scale cat2.jpeg cat3.jpeg
# 显示屏幕按键 screenkey
# xrandr
>打开外接显示器，双屏幕显示相同的内容--克隆，（auto为最高分辨率）
xrandr --output HDMI-1 --same-as DVI-D-1 --auto

>若要指定外接显示器的分辨率可以使用下面的命令（1280*1024）：
xrandr --output HDMI-1 --same-as DVI-D-1 --mode 1280x1024

>打开外接显示器，设置为右侧扩展
xrandr --output HDMI-1 --right-of DVI-D-1 --auto

>关闭显示器
xrandr --output DVI-D-1 --off

>打开HDMI-1接口显示器，关闭DVI-D-1接口显示器
xrandr --output HDMI-1 --auto --output DVI-D-1 --off

>设置主屏幕
xrandr --output HDMI-0 --primary

# arandr 
设置多屏的图形化软件
