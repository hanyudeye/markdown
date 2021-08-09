排版组件 (CSS framework)

##  布局组件
### 容器 
最基本的是 Container （容器），分 fixed-width （固定宽度）和 fluid-width(流动宽度)

固定宽度 分为  xs,sm,md,lg,xl

- Smaller than 576 pixels
- 576–768 pixels
- 768–992 pixels
- 992–1200 pixels
- Larger than 1200 pixels
``` html
	<div class="container">
		<div class="row">
			<div class="col">
				hello
			</div>
			<div class="col">
				hello
			</div>

			<div class="w-100">col</div>

			<div class="col">
				hello
			</div>
			<div class="col">
				hello niha
			</div>

		</div>
	</div>

```

Responsive 容器响应
``` html
<div class="container-sm">100% wide until small breakpoint</div>
```

Z-index


### 栅格系统 ###

## 入门模板
``` html
<!doctype html>
<html lang="zh-CN">
  <head>
    <!-- 必须的 meta 标签 -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap 的 CSS 文件 -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-olOxEXxDwd20BlATUibkEnjPN3sVq2YWmYOnsMYutq7X8YcUdD6y/1I+f+ZOq/47" crossorigin="anonymous">

    <title>Hello, world!</title>
  </head>
  <body>

    <!-- JavaScript 文件是可选的。从以下两种建议中选择一个即可！ -->

    <!-- 选项 1：jQuery 和 Bootstrap 集成包（集成了 Popper） -->
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js"></script>

    <!-- 选项 2：Popper 和 Bootstrap 的 JS 插件各自独立 -->
    <!--
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" ></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" ></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js"></script>
    -->
  </body>
</html>
```

## float 
``` html
<div class="float-left">Float left on all viewport sizes</div><br>
<div class="float-right">Float right on all viewport sizes</div><br>
<div class="float-none">Don't float on all viewport sizes</div>

<div class="float-sm-left">Float left on viewports sized SM (small) or wider</div><br>
<div class="float-md-left">Float left on viewports sized MD (medium) or wider</div><br>
<div class="float-lg-left">Float left on viewports sized LG (large) or wider</div><br>
<div class="float-xl-left">Float left on viewports sized XL (extra-large) or wider</div><br>
```
