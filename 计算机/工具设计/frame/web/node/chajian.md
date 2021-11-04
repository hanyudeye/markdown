
## toastr 基于 jquery
引入
``` html
	<link rel="stylesheet" href="/assets/libs/toastr/toastr.min.css">
	<script src="/assets/libs/toastr/toastr.min.js"></script>
```
使用
``` js
	toastr.warning("两次密码不一样，请返回确认！");

```

- info
- success
- warning
- error

配置
``` js
 toastr.options = {
            "closeButton": false,
            "debug": false,
            "positionClass": "toast-bottom-right",
            "onclick": null,
            "showDuration": "300",
            "hideDuration": "1000",
            "timeOut": "5000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        };

```

默认的放置位置positionClass只有上top下bottom，并没有垂直居中

oast-top-left 顶端左边 
toast-top-right 顶端右边
 toast-top-center 顶端中间
 toast-top-full-width 顶端，宽度铺满整个屏幕 
toast-botton-right
 toast-bottom-left
 toast-bottom-center
 toast-bottom-full-width
 

这时候，我们需要去原生的css中添加以下代码，

  .toast-center-center {
           top: 50%;
           left: 50%;
           margin-top: -30px;
           margin-left: -150px;
        }
在应用的时候，把默认positionClass的值修改为.toast-center-center，这样就可以水平垂直都居中啦~

toastr.options.positionClass = 'toast-center-center';
