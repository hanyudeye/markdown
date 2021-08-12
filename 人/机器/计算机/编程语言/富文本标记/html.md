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
