# HTML (markup language)
富文本描述语言，我们想要一种超越单纯文本显示的东西，可以表示文字类型，字体，图像，音乐，视频，甚至动画（趋势） ，为了表示这种东西。需要我们设置一种结构，就是用特定标签表示这些语义即可，属性可以在标签内标记。


## 标签分类
### 结构性标签 (控制富文本组织结构)
- section
- header
- footer
- nav
- article
- aside

### 行内语义标签 (具体对象)
- meter 表示特定范围内的数值，用于数量，百分比
- time
- progress 进度条
- video
- audio

### 交互性标签
- details
- menu

## 数据传输 (数据更结构化)

- application/x-www-form-urlencoded
- multipart/form-data   (多媒体)
- application/x-www-form+xml  (xml 结构)


## 表单类型 (input)
- url 网址专用
- email 电子邮件
- date ,month ,week ,time, datetime,datetime-local日期

## viewport 屏幕大小
之前，宽度是一样的，在手机上看，需要滚动条一直往右边拖动。

``` html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
这样，宽度定义为适应设备，就会向下排版了



<input type="number" min="0" max="100" step="0.01"/>
<!-- step="0.01" :即点击的上下箭头时会以0.01的速度增加或者减少(默认是只能输入整数,否则变红提示.加上step="0.01" 默认输入到小数点后两位)-->
