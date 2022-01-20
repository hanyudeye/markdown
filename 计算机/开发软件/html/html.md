# HTML 

万维网技术的基础， 与 CSS 一起用来构建 UI (用户界面) , 用 javascript 赋予界面行为，一起组成了客户端与用户进行交互。


## 非界面部分

- title 标题
- script 包含要用到的javascript 脚本文件
- style 包含要用到的样式文件
- 包含要用到的 favicon文件  <link rel="shortcut icon" href="/img/favicon.ico" />
- viewport <meta name="viewport" content="width=device-width, initial-scale=1.0">

## 控制界面布局

- section 章节
- header 头部
- footer 尾部
- nav 导航
- article 正文
- aside 侧栏
- legend 着重部分 

## 界面元素
### 文字

- b 粗体
- strong    粗体
- big   大号
- em   强调
- i 斜体
- small 斜体
- pre   预格式文本(适合呈现代码)
- blockquote    引用
- del   删除线
- 上标 sup  下标 sub (子)
- del s   删除线

### 特殊字符

| 特殊字符 | 描述 |字符的代码 |
|:-------------|:-------------|:-----|
||空格符|`&nbsp;`|
|<|小于号|`&lt;`|
|> |大于号|`&gt;`|
|&|和号|`&amp;`|
|￥|人民币|`&yen;`|
|©|版权|`&copy;`|
|®|注册商标|`&reg;`|
|°|摄氏度|`&deg;`|
|±|正负号|`&plusmn;`|
|×|乘号|`&times;`|
|÷|除号|`&divide;`|
|²|平方2（上标2）|`&sup2;`|
|³|立方3（上标3）|`&sup3;`|


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
- application/x-www-form-urlencoded  (Form Data 表单类型)
- multipart/form-data   (含有文件的表单) (Form Data 表单类型)
- text/plain  纯文本 (php中 无法获取值)

#### 表单
<form action="" id=""form_id" name="form_name" method="" autocomplete="" enctype="">
- action 提交到的服务端地址
- method 指定提交时用哪种HTTP方法：POST或GET
- name 标识
- autocomplete="on/off" 浏览器是否可以自动填充(历史记录填充)
- enctype 指定表单内容编码
- pattern="[a-zA-Z0-9]*"  输入限制

input 
- text 文本
- tel 电话
- password 密码
- radio 单选
- checkbox 多选
- number 数字
- 小数  `<input type="number" min="0" max="100" step="0.01"/>`
- date 日期
- color 色彩
- range 范围  max min
- email 邮件
- url 
- file 文件  multiple
- button 按钮
- submit 提交按钮

select option  下拉
textarea  文本域

#### 文件上传

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

### 特殊符号

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


### 多媒体
#### audio
``` html
<audio controls>
<source src="song.ogg">
<source src="song.mp3">
</audio>
```
``` js
let audio =$('audio')
audio.currentPosition;  //得到要播放的位置
audio.play(); //播放
audio.volume //获取音量

```

#### video
>仅支持 mp4 H.264, webm和 Ogg 
``` js
<video controls id="v">
		<source src="../../../../../resource/media/a.mp4">
	</video>
```

- autoplay 自动播放
- autobuffer 自动缓冲
- loop 循环


# 例子
## google 查找

``` html
<form method="get" action="http://www.google.com/search">
<input type="text" name="q" placeholder="search">
</form>
 

# 事件

## 事件转移  

使用 
label for="IDNAME"

# 图片上传
``` js
  function bjimg(i) {
            // var obj = i[0].files[0];
            // i.prev().attr("src", URL.createObjectURL(obj));
            // 

            // console.log(formdata);return;
            // console.log(i[0].files)
            // return;
            // i.prev().attr("src", data.data.url);

            let formdata = new FormData();
            formdata.append('file', i[0].files[0]);
            //图片上传
            $.ajax({
                url: '/index/ajax/upload.html',
                type: 'POST',
                cache: false,
                data: formdata,
                processData: false,
                contentType: false,
                success: function (data) {
                    if (data.code == 1) {
                        i.next().val(data.data.url)
                        i.prev().prev().attr("src", data.data.url)
                    } else {
                        alert(data.msg)
                        i.prev().prev().attr("src", '')
                    }

                }
            });
        }
```
``` js
    //上传图片
    public function upload(){
        $file = request()->file('file');

        $info = $file->move('uploads');

        if($info) {

            $data['code'] = 0;

            $data['msg'] = '/uploads/'.$info->getSaveName();

        }else{

            $data['code'] = 1;

            $data['msg'] = $file->getError();

        }

            return json($data);
    }
```
