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

## Activity (界面)
- 创建 Activity 
- 创建布局  (逻辑与视图分离，与 Activity 分离) 布局放在 res/layout 目录下
- 在活动中加载布局 setContentView(R.layout.layoutname)   
- 在 AndroidMainfest 中注册
- 添加主活动

在活动标签中添加 
   ``` xml
   <intent-filter>
      <action android:name="android.intent.action.MAIN" />
      <category android:name="android.intent.category.LAUNCHER"/>
   </intent-filter>
   ```
### 使用 Toast

``` java
 Button button1=(Button)findViewById(R.id.button_1);
        button1.setOnClickListener(new View.OnClickListener(){
            public  void onClick(View v){
                Toast.makeText(FirstActivity.this,"您单击了按钮 Button1",Toast.LENGTH_SHORT).show();
            }
        });
```
### 使用菜单

troubleshoot

- 在 res目录建立 menu文件夹
- 建立 main 菜单文件
- 重写方法

``` java
   @Override
    public boolean onCreateOptionsMenu(Menu menu) {
       getMenuInflater().inflate(R.menu.main,menu);
       return true;
    }
    
    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        switch (item.getItemId()) {
            case R.id.add_item:
                Toast.makeText(this, "You clicked Add", Toast.LENGTH_SHORT).show();
                break;
            case R.id.remove_item:
                Toast.makeText(this, "You clicked Remove", Toast.LENGTH_SHORT).show();
                break;
            default:
        }
        return true;
    }

```


### 销毁活动 Activity
1. 按返回键
2. 通过方法 finish() 方法

## 使用 Intent 在活动之间穿梭
### 使用显式 Intent
``` java
  Intent intent =new Intent(FirstActivity.this,SecondActivity.class);
  startActivity(intent);
```
### 使用隐式Intent

