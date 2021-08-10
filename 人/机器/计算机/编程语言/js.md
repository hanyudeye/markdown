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
| 方法       | 描述                                               |
|------------+----------------------------------------------------|
| toString() | 把对象的值转化为字符串                             |
| toFixed()  | 把数字转换为字符串，结果的小数点后有指定位数的数字 |

	
