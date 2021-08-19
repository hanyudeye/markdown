# android
# 第一行代码
github.com/guolindev/booksource

## android系统架构
- Linux 内核层
- 系统运行库层
- 应用架构层
- 应用层

## 开发特色
- 四大组件 活动(Activity)、服务(Service)、广播接收器(Broadcast Receiver) 和内容提供器(Content Provider)
- 系统组件
- 多媒体
- 地理定位

## Activity (互动界面)
- 创建 Activity 
- 创建布局  (逻辑与视图分离，与 Activity 分离) 布局放在 res/layout 目录下
- 在活动中加载布局 setContentView(R.layout.layoutname)   
- 在 AndroidMainfest 中注册
- 添加主活动

   子 活动 标签中添加 
   ``` xml
<intent-filter>
                <action android:name="android.intent.action.MAIN" />
                <category android:name="android.intent.category.LAUNCHER"/>
            </intent-filter>
        </
   ```
