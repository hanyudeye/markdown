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

# 性能
为了性能考虑，可以合并脚本，并压缩。
## 内容分发

``` html
<script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"></script>
<script>window.jQuery || document.write('<script src="js/vendor/jquery-1.10.2.min.js"></script>')</script>
```
## blob 转 file

```js
const files = new window.File(
    [blob],
    this.files[0].name,
    { type: this.files[0].type }
);
```
