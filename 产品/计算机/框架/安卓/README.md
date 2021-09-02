# android
教程 http://c.biancheng.net/android/
## 安装
1. 安装 jdk
https://www.oracle.com/java/technologies/javase-downloads.html

配置环境
``` shell 
setenv PATH /usr/local/jdk1.6.0_15/bin:$PATH
setenv JAVA_HOME /usr/local/jdk1.6.0_15
```

2. 安装 android-studio
https://developer.android.google.cn/studio


## Android 架构
### Linux内核
### 程序库
在 Linux 内核层的上面是一系列程序库的集合，包括开源的 Web 浏览器引擎 Webkit ，知名的 libc 库，用于仓库存储和应用数据共享的 SQLite 数据库，用于播放、录制音视频的库，用于网络安全的 SSL 库等。

### Android程序库
这个类别包括了专门为 Android 开发的基于 Java 的程序库。这个类别程序库的示例包括应用程序框架库，如用户界面构建，图形绘制和数据库访问。一些 Android 开发者可用的 Android 核心程序库总结如下：

android.app - 提供应用程序模型的访问，是所有 Android 应用程序的基石。
android.content - 方便应用程序之间，应用程序组件之间的内容访问，发布，消息传递。
android.database - 用于访问内容提供者发布的数据，包含 SQLite 数据库管理类。
android.opengl - OpenGL ES 3D 图片渲染 API 的 Java 接口。
android.os - 提供应用程序访问标注操作系统服务的能力，包括消息，系统服务和进程间通信。
android.text - 在设备显示上渲染和操作文本。
android.view - 应用程序用户界面的基础构建块。
android.widget - 丰富的预置用户界面组件集合，包括按钮，标签，列表，布局管理，单选按钮等。
android.webkit - 一系列类的集合，允许为应用程序提供内建的 Web 浏览能力。
看过了 Android 运行层内的基于 Java 的核心程序库，是时候关注一下 Android 软件栈中的基于 C/C++ 的程序库。

### Android运行时
### 应用框架
应用框架层以 Java 类的形式为应用程序提供许多高级的服务。应用程序开发者被允许在应用中使用这些服务。

活动管理者 - 控制应用程序生命周期和活动栈的所有方面。
内容提供者 - 允许应用程序之间发布和分享数据。
资源管理器 - 提供对非代码嵌入资源的访问，如字符串，颜色设置和用户界面布局。
通知管理器 - 允许应用程序显示对话框或者通知给用户。
视图系统 - 一个可扩展的视图集合，用于创建应用程序用户界面。

### 应用程序
顶层中有所有的 Android 应用程序。你写的应用程序也将被安装在这层。这些应用程序包括通讯录，浏览器，游戏等。
