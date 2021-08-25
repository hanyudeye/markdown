# HTML (markup language)
 **网页** 中的内容部分，用不同标签标示不同内容[含不可见内容]。

## 不可见标签
``` html
<!DOCTYPE html> 声明html文件
<html>  文件的开始与结尾
<head>  头部信息，非实体
<body>  实体部分
<script>    样式
<style> 脚本
<link>  链接外部资源
<meta> 属性
```
* 屏幕大小 
``` html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

## 可见标签
### 结构性标签 (控制富文本组织结构)
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
### 表单 ###
#### 数据传输 (数据更结构化) ####

- application/x-www-form-urlencoded
- multipart/form-data   (多媒体)
- application/x-www-form+xml  (xml 结构)


#### 表单类型 (input) ####
- date ,month ,week ,time, datetime,datetime-local日期
- 小数  `<input type="number" min="0" max="100" step="0.01"/>`

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



#### 表单限制
##### input number类型 长度限制
``` html
<input type="number" oninput="if(value.length>5)value=value.slice(0,5)">
```

##### 限制input输入框只能输入数字

``` html
<input type="text" oninput="value=value.replace(/[^\d]/g,'')">
``` 

##### 手机号码输入验证：
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
### 文件上传
input file 对象 用change 事件触发，用 ajax 提交

``` js
   document.getElementById("input").addEventListener("focus",function () {
        console.log("focus");
    });
 
    document.getElementById("input").addEventListener("mousedown",function () {
        console.log("mousedown");
    });
 
    document.getElementById("input").addEventListener("mouseup",function () {
        console.log("mouseup");
    });
 
    document.getElementById("input").addEventListener("input",function () {
        console.log("input");
    });
 
    document.getElementById("input").addEventListener("change",function () {
        console.log("change");
    });
 
    document.getElementById("input").addEventListener("blur",function () {
        console.log("blur");
    });
 
    document.getElementById("input").addEventListener("click",function () {
        console.log("click");
    });
 
```

### 文件类型
```  html
<!-- 全部图片 -->
<input type="file" name=""  id="" accept="image/*" >

```
- audio 音频，视频
- text 文本
- image 图像
- application 富文本

| 文件类型 | accept                 |
|----------+------------------------|
| *.3gpp   | audio/3gpp, video/3gpp |
| .ac3     | audio/ac3              |
| .mp3     | audio/mpeg             |
| .mp4     | audio/mp4, video/mp4   |
| .css     | text/css               |
| .csv     | text/csv               |
| .jpeg    | image/jpeg             |

###  ajax 文件上传
这里简单的介绍一下FormData，有兴趣的朋友可以自己私下看看；

 下面给大家介绍两种实现文件上传 

1：没使用插件，单个文件的上传（注意：ajax实现文件上传的话用到的是：绝对路径）

<!DOCTYPE html> 
<html> 
<head lang="en"> 
 <meta charset="UTF-8"> 
 <script src="https://cdn.bootcss.com/jquery/1.10.2/jquery.min.js"></script> 
 <title></title> 
</head> 
<body> 
       <form id="uploadForm" enctype="multipart/form-data"> 
             文件:<input id="file" type="file" name="file"/> 
       </form> 
            <button id="upload">上传文件</button> 
</body> 
      <script type="text/javascript"> 
             $(function () { 
               $("#upload").click(function () { 
               var formData = new FormData($('#uploadForm')[0]); 
                $.ajax({ 
                type: 'post', 
                url: "http://192.168.1.101:8080/springbootdemo/file/upload", //上传文件的请求路径必须是绝对路劲
                data: formData, 
                cache: false, 
                processData: false, 
                contentType: false, 
            }).success(function (data) { 
                alert(data); 
           }).error(function () { 
                alert("上传失败"); 
       }); 
    }); 
 }); 
</script> 
</html>
2：Ajax实现多文件的上传 （这个是多选上传，关键是multiple="multiple"这个属性，另外使用的接口也是多文件上传的接口）

<!DOCTYPE html> 
<html> 
<head lang="en"> 
 <meta charset="UTF-8"> 
 <script src="https://cdn.bootcss.com/jquery/1.10.2/jquery.min.js"></script> 
 <title></title> 
</head> 
<body> 
        <form id="uploadForm" enctype="multipart/form-data"> 
             文件:<input type="file" name="file" multiple="multiple"/><br> 
        </form> 
            <button id="upload">上传文件</button> 
</body> 
<script type="text/javascript"> 
         $(function () { 
             $("#upload").click(function () { 
              var formData = new FormData($('#uploadForm')[0]); 
          $.ajax({ 
          type: 'post', 
              url: "http://192.168.1.101:8080/springbootdemo/file/uploadFiles", 
              data: formData, 
              cache: false, 
              processData: false, 
              contentType: false, 
         }).success(function (data) { 
            alert(data); 
         }).error(function () { 
             alert("上传失败"); 
          }); 
     }); 
 }); 
</script> 
</html>
这边都是前端代码，后台代码也之间简单的文件上传用法一样。

## FormData使用方法详解
FormData的主要用途有两个：
1、将form表单元素的name与value进行组合，实现表单数据的序列化，从而减少表单元素的拼接，提高工作效率。
2、异步上传文件

### 一、创建formData对象
1、创建一个空对象：
``` js
//通过FormData构造函数创建一个空对象
var formdata=new FormData();
//可以通过append()方法来追加数据
formdata.append("name","laotie");
//通过get方法对值进行读取
console.log(formdata.get("name"));//laotie
//通过set方法对值进行设置
formdata.set("name","laoliu");
console.log(formdata.get("name"));//laoliu
```

2、通过表单对formData进行初始化
创建表单：
``` js

<form id="advForm">
    <p>广告名称：<input type="text" name="advName"  value="xixi"></p>
    <p>广告类别：<select name="advType">
        <option value="1">轮播图</option>
        <option value="2">轮播图底部广告</option>
        <option value="3">热门回收广告</option>
        <option value="4">优品精选广告</option>
    </select></p>
    <p><input type="button" id="btn" value="添加"></p>
</form>
```
通过表单元素作为参数，实现对formData的初始化：

``` js
//获得表单按钮元素
var btn=document.querySelector("#btn");
//为按钮添加点击事件
btn.onclick=function(){
    //根据ID获得页面当中的form表单元素
    var form=document.querySelector("#advForm");
    //将获得的表单元素作为参数，对formData进行初始化
    var formdata=new FormData(form);
    //通过get方法获得name为advName元素的value值
    console.log(formdata.get("advName"));//xixi
    //通过get方法获得name为advType元素的value值
    console.log(formdata.get("advType"));//1 
}
```

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


