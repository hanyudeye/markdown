# HTML (markup language)
> 供浏览器展示的文本，与 CSS ，JavaScript 共同构建了网页。  
> 文本中包含 用 xml 标签括起来的元素。  

## 头部标签
``` html
<!DOCTYPE html> 声明html文件
<html>  文件的开始与结尾
<head>  头部信息，非实体
<script> 脚本
<style> 内部样式
<link>  链接外部资源
<meta> 属性
```
内容显示方式
``` html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

## 内容标签
### 控制内容结构
``` html
<header> 头部
<section> 章节
<footer> 内容结尾
<nav> 导航
<article> 文章具体内容，主栏
<aside> 侧栏
<legend> 着重部分 
<div> 标示一块区域
```

### 文字格式化
``` html
<b> 粗体
<strong>    粗体
<big>   大号
<em>    强调
<i> 斜体
<small> 斜体
<pre>   预格式文本(适合呈现代码)
<blockquote>    引用
<del>   删除线
```

### 表格
``` html
<table border="" cepadding="" cellspacing="">
    <thead>
        <tr>
            <th colspan=""></th>
            <th rowspan></th>
        </tr>
    </thead>
    <tfoot>
        <tr>
            <td ></td>
            <td></td>
        </tr>
    </tfoot>
    <tbody align="">
        <tr>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>

```

* border 边框
* cellspacing 单元格间距
* cepadding 单元格边距
* colspan 单元格跨列
* rowspan 单元格跨行
* align 内容对齐
### 表单
#### 表单编码 enctype
- application/x-www-form-urlencoded
- multipart/form-data   (含有文件的表单)
- application/x-www-form+xml  (xml 结构)

#### 表单
``` html
<form action="" id=""form_id" name="form_name" method="" autocomplete="" enctype="">
    <input type="text">文本 <br>
    <input type="tel">电话 <br>
    <input type="password">密码  <br>
    <input type="radio" name="">单选  <br>
    <input type="checkbox" name="">多选  <br>
    <input type="number">数字输入框  <br>
    <input type="date">日期输入框  <br>
    <input type="color">颜色选择  <br>
    <input type="range" max="" min="">范围选择  <br>
    <input type="emaill">邮件(自带校验）  <br>
    <input type="url">地址（自带校验）  <br>
    <input type="file" multiple="">文件上传 <br>
    <select name="" id="">选择输入框
        <option></option>
    </select><br>
    <textarea>文本域</textarea><br>
    <input type="button" value="按钮"> <br>
    <input type="submit"><br>
    <button type="sumit" form="form_id">提交
</form>

```
- action 提交到的服务端地址
- method 指定提交时用哪种HTTP方法：POST或GET
- name 标识
- autocomplete 浏览器是否可以自动填充
- enctype 指定表单内容编码

- 小数  `<input type="number" min="0" max="100" step="0.01"/>`

#### 文件上传
表单结构
```  html
<form action="/index/index/upload" enctype="multipart/form-data" method="post">
<input type="file" name=""  id="" accept="image/*" >

```
上传类型
- audio 音频，视频
- text 文本
- image 图像
- application 其它应用格式

| 文件类型 | accept                 |
|----------+------------------------|
| *.3gpp   | audio/3gpp, video/3gpp |
| .ac3     | audio/ac3              |
| .mp3     | audio/mpeg             |
| .mp4     | audio/mp4, video/mp4   |
| .css     | text/css               |
| .csv     | text/csv               |
| .jpeg    | image/jpeg             |

#### 表单限制
##### input number类型 长度限制
``` html
<input type="number" oninput="if(value.length>5)value=value.slice(0,5)">
```

##### 限制input输入框只能输入数字

``` html
<input type="text" oninput="value=value.replace(/[^\d]/g,'')">
``` 

##### 手机号码输入验证
``` js
 function isPhoneNum(str) {
                return /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(str)
            }
            
            
            
if ($('#phone').val()!="") 
{
 var Phonenumber = $('#phone').val();
   if (!isPhoneNum(Phonenumber))
   {
       layer.msg("手机号码输入不正确！")
       $('#phone').focus();
       return false;
   };       
}
```
``` html
<input type="number" class="input-text radius size-MINI" style="width:120px" id="phone" name="phone" >

```

## 事件
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

## 常用特殊符号

| HTML    | 显示结果 | 描述                   |
|---------+----------+------------------------|
| &lt;    | <        | 小于号或显示标记       |
| &gt;    | >        | 大于号或显示标记       |
| &amp;   | &        | 可用于显示其它特殊字符 |
| &quot;  | “       | 引号                   |
| &reg;   | ®        | 已注册                 |
| &copy;  | ©        | 版权                   |
| &trade; | ™        | 商标                   |
| &ensp;  |          | 半个空白位             |
| &emsp;  |          | 一个空白位             |
| &nbsp;  |          | 不断行的空白           |


