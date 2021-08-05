图文多媒体表单标记语言，只有数据没有指令 (指令用 javascript语言)

## viewport 屏幕大小
之前，宽度是一样的，在手机上看，需要滚动条一直往右边拖动。

``` html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
这样，宽度定义为适应设备，就会向下排版了



<input type="number" min="0" max="100" step="0.01"/>
<!-- step="0.01" :即点击的上下箭头时会以0.01的速度增加或者减少(默认是只能输入整数,否则变红提示.加上step="0.01" 默认输入到小数点后两位)-->
