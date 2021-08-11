# Javascript

## 数据类型

``` js
var cars=new Array("Saab","Volvo","BMW");

// 数组:
var cars=new Array();
cars[0]="Saab";
cars[1]="Volvo";
cars[2]="BMW";

// 对象
var person={
firstname : "John",
lastname  : "Doe",
id        :  5566
};

// Undefined 和 Null:
cars=null;
person=null;

// 布尔:
var x=true;
var y=false;
``` 

## 事件 (能接收反馈的对象[DOC对象]的特殊属性)

| 事件        | 描述                           |
|-------------+--------------------------------|
| onchange    | HTML 元素改变                  |
| onclick     | 用户点击 HTML 元素             |
| onmouseover | 用户在一个 HTML 元素上移动鼠标 |
| onmouseout  | 用户在一个 HTML 元素上移开鼠标 |
| onkeydown   | 用户按下键盘按键               |
| onload      | 浏览器已完成页面的加载         |

## 函数
### 数据转换
| 方法         | 描述                                               |
|--------------+----------------------------------------------------|
| toString()   | 把对象的值转化为字符串                             |
| toFixed()    | 把数字转换为字符串，结果的小数点后有指定位数的数字 |
| parseFloat() | 解析一个字符串，并返回一个浮点数                   |
| parseInt()   | 解析一个字符串，并返回一个整数                     |
	
### 时间处理
| 方法              | 描述                                      |
|-------------------+-------------------------------------------|
| getDate()         | 从 Date 对象返回一个月中的某一天 (1 ~ 31) |
| getDay()          | 从 Date 对象返回一周中的某一天 (0 ~ 6)    |
| getFullYear()     | 从 Date 对象以四位数字返回年份            |
| getHours()        | 返回 Date 对象的小时 (0 ~ 23)             |
| getMilliseconds() | 返回 Date 对象的毫秒 (0 ~ 999)            |
| getMinutes()      | 返回 Date 对象的分钟 (0 ~ 59)             |
| getMonth()        | 从 Date 对象返回月份 (0 ~ 11)             |
| getSeconds()      | 返回 Date 对象的秒数 (0 ~ 59)             |
| getTime()         | 返回1970年1月1日至今的毫秒数              |

### 正则表达式
/正则表达式主体/修饰符(可选)


| 修饰符 | 描述                                                 |
|--------+------------------------------------------------------|
| i      | 执行对大小写不敏感的匹配                             |
| g      | 执行全局匹配(查找所有匹配而非在找到第一个匹配后停止) |
| m      | 执行全局匹配多行匹配                                 |

``` js
var str = "Visit Runoob!"; 
var n = str.search(/Runoob/i);
```

# DOM 
浏览器对 HTML 与 CSS 进行 **树** 的**节点**化， DOM 是可以操作这些节点的**接口**。
Ajax 的出现，加强了 DOM 的使用

## 获取元素
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
### 鼠标事件
- onclick
### 键盘事件
- onkeypress

## 动态创建标记
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

# 性能
为了性能考虑，可以合并脚本，并压缩。
## 内容分发

``` html
<script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"></script>
<script>window.jQuery || document.write('<script src="js/vendor/jquery-1.10.2.min.js"></script>')</script>
```
