https://v4.bootcss.com/docs/components/carousel/

# bootstrap4 (在bootstrap3 基础上有增加或减去了内容)
> Bootstrap4 是 Bootstrap 的最新版本，与 Bootstrap3 相比拥有了更多的具体的类以及把一些有关的部分变成了相关的组件。

## 容器 
容器分  .container(限宽且居中) 和 .container-fluid(全屏) 两种

## 网格 col
- 响应式网格 xs (< 576 pixels ),sm (576–768),md(768–992),lg (992–1200),xl (> 1200)
- bootstrap自动处理 .col

``` html
<!-- 第一个例子：控制列的宽度及在不同的设备上如何显示 -->
<div class="row">
  <div class="col-*-*"></div>
</div>
<div class="row">
  <div class="col-*-*"></div>
  <div class="col-*-*"></div>
  <div class="col-*-*"></div>
</div>
 
<!-- 第二个例子：或让 Bootstrap 者自动处理布局 -->
<div class="row">
  <div class="col"></div>
  <div class="col"></div>
  <div class="col"></div>
</div>
```

### 偏移列
``` html
<div class="row">
  <div class="col-md-4">.col-md-4</div>
  <div class="col-md-4 offset-md-4">.col-md-4 .offset-md-4</div>
</div>
<div class="row">
  <div class="col-md-3 offset-md-3">.col-md-3 .offset-md-3</div>
  <div class="col-md-3 offset-md-3">.col-md-3 .offset-md-3</div>
</div>
<div class="row">
  <div class="col-md-6 offset-md-3">.col-md-6 .offset-md-3</div>
</div>
```


## 文字排版
### Display 标题类
``` html
<div class="container">
  <h1>Display 标题</h1>
  <p>Display 标题可以输出更大更粗的字体样式。</p>
  <h1 class="display-1">Display 1</h1>
  <h1 class="display-2">Display 2</h1>
  <h1 class="display-3">Display 3</h1>
  <h1 class="display-4">Display 4</h1>
</div>
```
### <mark> 黄色背景及有一定的内边距
``` html
<div class="container">
  <h1>高亮文本</h1>    
  <p>使用 mark 元素来 <mark>高亮</mark> 文本。</p>
</div>
```
### 更多排版

| 类                  | 描述       |
|---------------------+------------|
| .font-weight-bold   | 加粗文本   |
| .font-weight-normal | 普通文本   |
| .font-weight-light  | 更细的文本 |
