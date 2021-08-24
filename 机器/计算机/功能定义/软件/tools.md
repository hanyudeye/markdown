# 办公室软件
# 互联网软件
## youtube-dl
youtube-dl-gui 图形界面
youtube-dl --proxy socks5://127.0.0.1:42428  https://www.youtube.com/watch?v=pKauTcfL-AE&feature=youtu.be

## 网络
### natapp 内网穿透
``` shell
./natapp -authtoken=e5eb817e91aeee83
```

由于微信屏蔽了natapp的三级域名，所以如果需要进行微信支付或者微信小程序的联调时需要注册一个二级域名
如果用于联调微信小程序的话，则需要注册带有SSL证书的，因为微信小程序仅支持https协议。

## Chrome 浏览器
###  Vimium 
网页快速导航，主要是省去鼠标中键的滚动功能  

对网页的操作用键盘快捷键的方式比鼠标去点击要迅速  
历史记录的前进后退，标签的切换，很方便。  

### Dualsub
让 YouTube 显示双语字幕，翻译的大略准确，现在看外国视频也能看的懂了
> 只能用在 YouTube 上

### Proxy SwitchyOmega
切换代理
### Video Speed Controlle
用快捷键操作视频的播放速率很方便
### 彩云小译 - 网页翻译插件
可以双语对照，翻译也很精确
### 眼睛护航
可以更改网页颜色
### google 翻译 
本来一直用的，自从用了上面的翻译插件就放在旁边凉快了

### Read Aloud
文本语音朗读助理

### Tampermonkey 
油猴脚本

### similarsites 
发现相关网站

### 同步书签
1.架梯子
2.地址栏输入：chrome://sync-internals
3.中间那列中下方，点击“Stop Sync (Keep Data)”，之后点击“Request Start”
4.两个设备上的Chrome都进行一次这个操作

### 网页截长图
1. 在想要截取长图的页面上右击-检查，弹出代码页。
2. 在代码页按住Ctrl+shift+P，打开输入命令查找文件的窗口。
3. 在窗口中输入Capture full size screenshot 命令，抓取全网页面

## bt 网速
github  trackerslist
下载 qbittorrent
# 多媒体软件
## 视频
- 视频编辑器	主要用途	类型
- Kdenlive	通用视频编辑	自由开源
- OpenShot	通用视频编辑	自由开源
- Shotcut	通用视频编辑	自由开源
- Flowblade	通用视频编辑	自由开源
- Lightworks	专业级视频编辑	免费增值
- Blender	专业级三维编辑	自由开源
- Cinelerra	通用视频编辑	自由开源
- DaVinci	专业级视频处理编辑	免费增值
- VidCutter	简单视频拆分合并	自由开源
## 稿定抠图
https://www.gaoding.com/koutu?hmsr=zhongcao-kt_zh_xltx-koutu---pmzd-bdqd&utm_medium=&utm_source=zhongcao
## 图像
### 录制视频短片 peek
``` shell
sudo add-apt-repository ppa:peek-developers/stable
sudo apt update
sudo apt install peek
```
### 像素识别 pick-colour-picker
``` shell
sudo snap install pick-colour-picker 
```
### 屏幕录制 simplescreenrecorder
``` shell
sudo apt install simplescreenrecorder
```
## 视频
### 迅捷视频剪辑软件
https://link.zhihu.com/?target=https%3A//www.xunjieshipin.com/download-video-crop%3Fzhczk

### 查看公网 IP
    - curl cip.cc
    - curl icanhazip.com
    - curl ident.me
## 图片放大
https://bigjpg.com/
## 算法图表
http://sorting.at/
https://visualgo.net/zh
# 分析软件
## 工具大全
https://www.diycode.cc/sites
## 正则
[正则表达式在线工具](https://regexr.com/)
## 谷歌开源
https://github.com/google
## zsh
### zsh-proxy 
- 首次使用需要初始化 init_proxy
- 开启　proxy
- 关闭　noproxy
- 查ip myip

# 协作软件
## github
热门  https://github.com/trending
专题 https://github.com/topics

搜索
优秀项目  Awesome + 关键字  
stars: fork
qt in:name：表示在项目名称中搜索 qt 关键字
qt in:readme：表示在项目 readme 中搜索 qt 关键字
qt in:description：表示在 项目描述中搜索 qt 关键字
qt in:USERNAME：表示在 USERNAME 中搜索 qt 关键字
qt in:ORGNAME：表示在组织或机构名中搜索 qt 关键字
size:>=5000 Qt ：搜索大小超过 5M 的包含 Qt 关键字项目
language:C++ location:china 搜索国内的开发者，语言限定为 C++

后缀
stars:>20 extension:el language:elisp

# 商务软件
