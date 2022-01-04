# Javascript
> 用于WEB上建立行为的脚本语言

## 数据类型 ##

### 语句结尾加;号，方便压缩 ###

### 全局变量 ###

不要用 var 修饰

``` js
function test(){
message = "hi"; // 全局变量
}
test();
alert(message); // "hi"

```

### undefined类型 ###

>使用 var 声明变量但未对其加以初始化时
```js
var message;
alert(message == undefined); //true
```

### null 类型 ###

> 用来指定对象指针

```js
var car = null;
alert(typeof car); // "object"

if (car != null){
// 对 car 对象执行某些操作
}
```

### Number ###

```js
var intNum=55; //整数
var octalNum1 = 070;//八进制的 56
var hexNum1 = 0xA; // 十六进制的 10
var floatNum2 = 0.1;

```

浮点不要等于测试
``` js
if (a + b == 0.3){
 // 不要做这样的测试!
alert("You got 0.3.");
}
```

### NaN ###

``` js
alert(isNaN(NaN));     //true
alert(isNaN(10));      //false(10 是一个数值)
alert(isNaN("10"));    //false(可以被转换成数值10)
alert(isNaN("blue"));  //true(不能转换成数值)
alert(isNaN(true));    //false(可以被转换成数值 1)
```






### String ###

### 数组 ###

``` js
var cars=new Array("Saab","Volvo","BMW");

// 数组:
var cars=new Array();
cars[0]="Saab";
cars[1]="Volvo";
cars[2]="BMW";
``` 

### Object ###

``` js
// 对象
var person={
firstname : "John",
lastname  : "Doe",
id        :  5566
};

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
	
``` js
var num1 = parseInt("AF", 16); //175
var num2 = parseInt("AF"); //NaN
```
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

### 查找
#### 匹配查找
```js
let i="youare pttpme".indexOf("http")
```
#### 正则查
/正则表达式主体/修饰符(可选)


| 修饰符 | 描述                                                 |
|--------+------------------------------------------------------|
| i      | 执行对大小写不敏感的匹配                             |
| g      | 执行全局匹配(查找所有匹配而非在找到第一个匹配后停止) |
| m      | 执行全局匹配多行匹配                                 |

``` js
//返回查找到的地方，没有则-1
var str = "Visit Runoob!"; 
var n = str.search(/Runoob/i);

```

``` js
//相同效果
var pattern1=/http/;
var pattern2=new RegExp("http");

if(pattern1.test("http://www.google.com")){
alert("match");
}else{
alert("not match")
}
```

 验证
``` 
//邮箱
var isemail=(/^/w+((-/w+)|(/./w+))*/@[A-Za-z0-9]+((/.|-)[A-Za-z0-9]+)*/.[A-Za-z0-9]+$/)

//手机号
1. <input onkeydown="this.value=this.value.replace('/\D/g','');" maxlength="11"/>

2. function inputmobile(obj) {
    obj.value = obj.value.replace(/\D+/g,'');
    if (obj.value.length >=11) { 
        obj.value = obj.value.substr(0,11);
        var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/g; 
        if(!myreg.test(obj.value)) {
            obj.value = '请输入正确的手机号';
        }  
    }
}


```


# 提高性能
## 合并脚本
## 压缩
## 利用CDN加速

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



