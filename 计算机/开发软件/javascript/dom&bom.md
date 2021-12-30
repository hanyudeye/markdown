
# DOM 命令 (js解析器命令)
## 获取节点元素
### getElementById 
```js
document.getElementById 
``` 
> 是 document特有的属性

### getElemetnsByTagName / getElementsByClassName 

``` js
element.getElemetnsByTagName(tag)
element.getElementsByClassName(classname)
```
### childNodes
### nodeValue
### firstChild lastChild属性
## 获取/设置属性 getAttribute /setAttribute
object.getAttribute(attribute)
object.setAttribute(attribute,value)
## 获取/设置样式 style
object.style.stylename

*.style.fontFamily
*.style.color=value

更好的方法是修改 className 属性
``` js
element.className=value
```

## 事件
>在 html 中是 on属性 ，在 addEventListener 中去掉 on
### 事件类型
#### Window事件
| 属性     | 描述                         |
|----------+------------------------------|
| onload   | 页面结束加载之后触发         |
| onresize | 当浏览器窗口被调整大小时触发 |

#### Form 事件

| 属性         | 描述                           |
|--------------+--------------------------------|
| onblur       | 元素失去焦点时运行的脚本       |
| onchange     | 在元素值被改变时运行的脚本     |
| onfocus      | 当元素获得焦点时运行的脚本     |
| onformchange | 在表单改变时运行的脚本         |
| onforminput  | 当表单获得用户输入时运行的脚本 |
| oninput      | 当元素获得用户输入时运行的脚本 |
| onsubmit     | 在提交表单时触发               |

#### Keyboard事件

| 属性       | 描述                 |
|------------+----------------------|
| onkeydown  | 在用户按下按键时触发 |
| onkeypress | 在用户敲击按钮时触发 |
| onkeyup    | 当用户释放按键时触发 |

触发顺序  
> onkeydown onkeypress onkeyup

 在所有浏览器中 onkeypress 事件只能监听字母和数字，不能监听一些特殊按键（ALT、CTRL、SHIFT、ESC、箭头等）。监听一个用户是否按下按键请使用 onkeydown 事件,所有浏览器都支持 onkeydown 事件
 
 ``` js
 document.addEventListener("keydown",keydown);
//键盘监听，注意：在非ie浏览器和非ie内核的浏览器
//参数1：表示事件，keydown:键盘向下按；参数2：表示要触发的事件
function keydown(event){
//表示键盘监听所触发的事件，同时传递传递参数event
    document.write(event.keyCode);//keyCode表示键盘编码
}
 ```
 keydown(16进制输出),keypress(10进制输出) keyCode 
#### Mouse 事件

| 属性         | 描述                                         |
|--------------+----------------------------------------------|
| onclick      | 元素上发生鼠标点击时触发                     |
| ondblclick   | 元素上发生鼠标双击时触发                     |
| ondrag       | 元素被拖动时运行的脚本                       |
| ondragend    | 在拖动操作末端运行的脚本                     |
| ondragenter  | 当元素元素已被拖动到有效拖放区域时运行的脚本 |
| ondragleave  | 当元素离开有效拖放目标时运行的脚本           |
| ondragover   | 当元素在有效拖放目标上正在被拖动时运行的脚本 |
| ondragstart  | 在拖动操作开端运行的脚本                     |
| ondrop       | 当被拖元素正在被拖放时运行的脚本             |
| onmousedown  | 当元素上按下鼠标按钮时触发                   |
| onmousemove  | 当鼠标指针移动到元素上时触发                 |
| onmouseout   | 当鼠标指针移出元素时触发                     |
| onmouseover  | 当鼠标指针移动到元素上时触发                 |
| onmouseup    | 当在元素上释放鼠标按钮时触发                 |
| onmousewheel | 当鼠标滚轮正在被滚动时运行的脚本             |
| onscroll     | 当元素滚动条被滚动时运行的脚本               |
#### Media 事件
由媒介（比如视频、图像和音频）触发的事件（适用于所有 HTML 元素，但常见于媒介元素中，比如 <audio>、<embed>、<img>、<object> 以及 <video>）:

| 属性               | 描述                                                                     |
|--------------------+--------------------------------------------------------------------------|
| onabort            | 在退出时运行的脚本                                                       |
| oncanplay          | 当文件就绪可以开始播放时运行的脚本（缓冲已足够开始时）                   |
| oncanplaythrough   | 当媒介能够无需因缓冲而停止即可播放至结尾时运行的脚本                     |
| ondurationchange   | 当媒介长度改变时运行的脚本                                               |
| onemptied          | 当发生故障并且文件突然不可用时运行的脚本（比如连接意外断开时）           |
| onended            | 当媒介已到达结尾时运行的脚本（可发送类似“感谢观看”之类的消息）         |
| onerror            | 当在文件加载期间发生错误时运行的脚本                                     |
| onloadeddata       | 当媒介数据已加载时运行的脚本                                             |
| onloadedmetadata   | 当元数据（比如分辨率和时长）被加载时运行的脚本                           |
| onloadstart        | 在文件开始加载且未实际加载任何数据前运行的脚本                           |
| onpause            | 当媒介被用户或程序暂停时运行的脚本                                       |
| onplay             | 当媒介已就绪可以开始播放时运行的脚本                                     |
| onplaying          | 当媒介已开始播放时运行的脚本                                             |
| onprogress         | 当浏览器正在获取媒介数据时运行的脚本                                     |
| onratechange       | 每当回放速率改变时运行的脚本（比如当用户切换到慢动作或快进模式）         |
| onreadystatechange | 每当就绪状态改变时运行的脚本（就绪状态监测媒介数据的状态）               |
| onseeked           | 当 seeking 属性设置为 false（指示定位已结束）时运行的脚本                |
| onseeking          | 当 seeking 属性设置为 true（指示定位是活动的）时运行的脚本               |
| onstalled          | 在浏览器不论何种原因未能取回媒介数据时运行的脚本                         |
| onsuspend          | 在媒介数据完全加载之前不论何种原因终止取回媒介数据时运行的脚本           |
| ontimeupdate       | 当播放位置改变时（比如当用户快进到媒介中一个不同的位置时）运行的脚本     |
| onvolumechange     | 每当音量改变时（包括将音量设置为静音）时运行的脚本                       |
| onwaiting          | 当媒介已停止播放但打算继续播放时（比如当媒介暂停已缓冲更多数据）运行脚本 |

## 动态创建标签
* document.createElement(nodeName)
* document.createTextNode(text)
* appendChild(child)
* innerHTML

## 动画 setTimeout
``` js
// if(!elem.style.left)
function pom() {
  if (!document.getElementById) return false;
  if (!document.getElementsByTagName) return false;
  var elem = document.getElementById("message");
  elem.style.position = "absolute";
  elem.style.left = "50px";
  elem.style.top = "100px";
  move("message", 200, 100, 10);
}
function move(tag, movex, movey, movetime) {
  var elem = document.getElementById(tag);
  var x = parseInt(elem.style.left);
  var y = parseInt(elem.style.top);
  if (x == movex && y == movey) return true;
  if (x < movex) x++;
  if (x > movex) x--;
  if (y < movey) y++;
  if (y > movey) y--;
  elem.style.left = x + "px";
  elem.style.left = y + "px";
  setTimeout("move(tag,movex,movey,movetime)", movetime);
}
addLoadEvent(pom);

```
## canvas

``` js
var eleFile = document.querySelector('#file');
// 压缩图片需要的一些元素和对象
var reader = new FileReader(), img = new Image();
// 选择的文件对象
var file = null;
// 缩放图片需要的canvas
var canvas = document.createElement('canvas');
var context = canvas.getContext('2d');

// base64地址图片加载完毕后
img.onload = function () {
    // 图片原始尺寸
    var originWidth = this.width;
    var originHeight = this.height;
    // 最大尺寸限制
    var maxWidth = 400, maxHeight = 400;
    // 目标尺寸
    var targetWidth = originWidth, targetHeight = originHeight;
    // 图片尺寸超过400x400的限制
    if ((originWidth > maxWidth) || (originHeight > maxHeight)) {
        if ((originWidth/originHeight)>(maxWidth / maxHeight)) {
            // 更宽，按照宽度限定尺寸
            targetWidth = maxWidth;
            targetHeight = Math.round(maxWidth * (originHeight / originWidth));
        } else {
            targetHeight = maxHeight;
            targetWidth = Math.round(maxHeight * (originWidth / originHeight));
        }
    }
        
    // canvas对图片进行缩放
    canvas.width = targetWidth;
    canvas.height = targetHeight;
    // 清除画布
    context.clearRect(0, 0, targetWidth, targetHeight);
    // 图片压缩
    context.drawImage(img, 0, 0, targetWidth, targetHeight);
    //本地预览
    var type = 'image/jpeg';
        //第一种：将canvas元素中的图像转变为DataURL
        var dataurl = canvas.toDataURL(type);
        $("#ceshi1").attr("src",dataurl);

//第二种
        //抽取DataURL中的数据部分，从Base64格式转换为二进制格式
        var bin = atob(dataurl.split(',')[1]);
        //创建空的Uint8Array
        var buffer = new Uint8Array(bin.length);
        //将图像数据逐字节放入Uint8Array中
        for (var i = 0; i < bin.length; i++) {
            buffer[i] = bin.charCodeAt(i);
        }
        //利用Uint8Array创建Blob对象
        var blob = new Blob([buffer.buffer], {type: type});
        var url = window.URL.createObjectURL(blob);
        $("#ceshi").attr("src",url);

    
    // canvas转为blob并上传
    canvas.toBlob(function (blob) {
        // 图片ajax上传
        var xhr = new XMLHttpRequest();
        // 文件上传成功
        xhr.onreadystatechange = function() {
            if (xhr.status == 200) {
                // xhr.responseText就是返回的数据
            }
        };
        // 开始上传
        xhr.open("POST", 'upload.php', true);
        xhr.send(blob);    
    }, file.type || 'image/png');
};

// 文件base64化，以便获知图片原始尺寸
reader.onload = function(e) {
    img.src = e.target.result;
};
eleFile.addEventListener('change', function (event) {
    file = event.target.files[0];
    // 选择的文件是图片
    if (file.type.indexOf("image") == 0) {
     reader.readAsDataURL(file);  
     
    }
});
```
## Ajax技术
用到了异步发送请求 XMLHttpRequest

方法
``` js
new XMLHttpRequest().open("GET","http://..",true)
onreadystatechange
send
``` 

## base64
window.atob('hello world')
> ascii 转 base64

window.atob
# BOM (浏览器命令)
## history
- window.history.back()
- window.history.forward()
- window.history.go()
- window.history.length
- window.history.pushState()
- window.history.replaceState()

## 跨源通信
### 有安全问题
1. 使用 iframe 或 Frameset 调用其它网站的页面
2. Web Service 为代表的主动服务模式

CSRF(Cross-Site Request Forgery) 跨站请求伪造
>伪装来自受信任用户的请求
### 安全使用
sandbox  
``` html
<iframe sandbox src="frame1.html"></iframe>
<iframe sandbox="allow-forms allow-scripts" src="frame1.html"></iframe>
```

### 跨文档消息通信
#### window.postMessage
#### 服务器端推送事件
#### 管道消息传送  MessageChannel



## Notification Api ##
> window.webkitNotifications



# websocket与ajax的区别浅析

1.本质不同
 Ajax,即异步JavaScript和XML，是一种创建交互式网页应用的网页开发技术；
 WebSocket是HTML5一种新的协议，实现了浏览器与服务器全双工通信。其本质是先通过HTTP/HTTPS协议进行握手后创建一个用于交换数据的TCP连接，服务端与客户端通过此TCP连接进行实时通信。
2.生命周期不同。
websocket建立的是长连接，在一个会话中一直保持连接；而ajax是短连接，数据发送和接受完成后就会断开连接。
3.适用范围不同
websocket一般用于前后端实时数据交互，而ajax前后端非实时数据交互。
4.发起人不同
Ajax技术需要客户端发起请求，而WebSocket服务器和客户端可以相互推送信息。
5.用法不同
``` js
ajax：
$.ajax({
type:"post",
url:"http://localhost:8080/target",
data:"state = yes",
dataType:"json",
success:funciont(data){
}
});
 ```
websocket:
``` js
var monitor = new WebSocket("ws://"+ip+path)
onOpen()、onMessage()、onClose()
```


# localstorage

web storage 有  localstorage 和 sessionstorage 组成

# 离线应用 

## 判断浏览器是否在线
``` js
if(navigator.onLine){
}

window.addEventListener("online",function(evt){})
window.addEventListener("offline",function(evt){})
```
