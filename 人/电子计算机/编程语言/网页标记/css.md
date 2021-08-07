

# css (Cascading Style Sheets)  单纯为 HTML 使用的
为了表示盒子样式，我们要设置一种方式，根据富文本(HTML)中标签的类型，或标签名，用选择器(删选表达式)的方式进行样式说明。

## 主要内容
### 选择器
选择器的强大筛选功能 `能方便的` 定位到元素 

#### 属性选择 


| 代码                                 | 说明                                                 |
| ------------------------------------ | ---------------------------------------------------- |
| [attribute]                          | 元素有attribute的属性。                              |
| [attribute="value"]                  | 属性attribute里是value                               |
| [attribute~="value"]                 | 属性attribute里使用空白分开的字符串里其中一个是value |
| [attribute          &#124;= "value"] | 属性attribute里是value或者以value-开头的字符串       |
| [attribute^="value"]                 | 属性attribute里最前的是value                         |
| [attribute$="value"]                 | 属性attribute里最后的是value                         |
| [attribute*="value"]                 | 属性attribute里有value出现过至少一次                 |
#### 组合选择器
| 符号  | 说明                                                     |
| ----- | -------------------------------------------------------- |
| A > B | 子代选择器，选择A下一层的元素B                           |
| A ~ B | 兄弟选择器，选择与A同层的元素B                           |
| A + B | 相邻兄弟选择器，选择与A相邻的元素B（不能被任何元素相隔） |
| A B   | 后代选择器，包含选择符                                   |

#### 其他 (伪元素)

| 符号               | 说明                             |
| ------------------ | -------------------------------- |
| :link              | 选择所有未访问链接               |
| :visited	a:visited | 选择所有访问过的链接             |
| :active	a:active   | 选择正在活动链接                 |
| :hover	a:hover     | 把鼠标放在链接上的状态           |
| :focus	input:focus | 选择元素输入后具有焦点           |
| :first-letter      | 元素的第一个字母                 |
| :first-line        | 元素的第一行                     |
| :first-child       | 选择器匹配属于元素的第一个子元素 |
| :before            | 在元素之前插入内容               |
| :after             | 在元素之后插入内容               |
| :lang(language)    | 为元素的 lang 属性选择一个开始值 |
 
### 引入规则
### 行级元素与块级元素
### 方盒模型
### 浮动与定位

## 视口概念
### 视口设置

利用 \`meta\` 的标签的 \`viewport\` 来进行设置，除此之外，还可以进行页面的缩放等操作。

<meta name="viewport" content="initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />


   
## 样式

### 文本

-   文本的大小和字型(font-size / font-family)
-   粗细、样式、拉伸和装饰(font-weight / font-style / font-stretch / text-decoration)
-   行间距(line-height)、字母间距(letter-spacing)和单词间距(word-spacing)
-   对齐(text-align)方式和缩进(text-indent)
-   链接样式（:link / :visited / :active / :hover）
-   阴影效果 - text-shadow
-   首字母和首行文本(:first-letter / :first-line)
-   响应用户

### 盒子 box

-   盒子大小的控制（width / height）
-   盒子的边框、外边距和内边距（border /  margin / padding）
-   盒子的显示和隐藏（display / visibility）
-   CSS3 新属性
    -   边框图像（border-image）
    -   投影（border-shadow）
    -   圆角（border-radius）


### 链接

-   a:link  普通的、未被访问的链接
-   a:visited  用户已访问的链接
-   a:hover -鼠标指针位于链接的上方
-   a:active  链接被点击的时刻

### 列表

-   列表的项目符号（list-style）
-   表格的边框和背景（border-collapse）


### 图像

-   控制图像的大小（display: inline-block）
-   对齐图像
-   背景图像（background / background-image / background-repeat / background-position）


### 布局

-   控制元素的位置（position / z-index）
    -   普通流
    -   相对定位
    -   绝对定位
    -   固定定位
    -   浮动元素（float / clear）
-   网站布局

## 颜色值

颜色值的设定可以有好几种方式 

1.  关键字  red , yellow  用颜色的英文单词表示
2.  rgb(0,100,100) 用十进制的 rgb 混色模式
3.  \#ffffff 用十六进制的 rgb 混色模式
4.  hsl(0,100%,50%) 用色相(0-360)，饱和度，明度的混色模式表示
5.  透明 opacity

## 字体

font-family  字体类型 

-   sans-serif  无衬线 (字体边缘平滑，比较好看)
-   serif 衬线 (字体突兀)
-   monospace 等宽字体 (一般用在代码编辑器)
-   cursive 草书
-   fantasy
-   system-ui
    
    常用字体族
    
        .serif {
          font-family: Times, Times New Roman, Georgia, serif;
        }
        
        .sansserif {
          font-family: Verdana, Arial, Helvetica, sans-serif;
        }
        
        .monospace {
          font-family: Lucida Console, Courier, monospace;
        }
        
        .cursive {
          font-family: cursive;
        }
        
        .fantasy {
          font-family: fantasy;
        }


## 初始化样式

    body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,legend,button,form,fieldset,input,textarea,p,blockquote,th,td {   
      　　padding: 0;   
      　　margin: 0;   
    }
    /* 酌情修改 */
    body {
      background:#fff;color:#333;font-size:12px; margin-top:5px;font-family:"SimSun","宋体","Arial Narrow";
    }
    
    /* 短引用的内容可取值：''或"" */
    q:before,q:after {content:”;}  
    
    /* 缩写，图片等无边框 */
    fieldset,img,abbr,acronym {border: 0 none;}
    abbr,acronym {font-variant: normal;}
    legend {color:#000;}
    
    /* 清除特殊标记的字体和字号 */
    address,caption,cite,code,dfn,em,strong,th,var {   
      　　font-weight: normal;   
      　　font-style: normal;   
    }
    
    /* 上下标 */
    sup {vertical-align: text-top;}
    sub {vertical-align: text-bottom;}
    
    /* 设置表格的边框被合并为一个单一的边框, 指定分隔边框模型中单元格边界之间的距离为 0*/
    table {   
      　　border-collapse: collapse;   
      　　border-spacing: 0;   
    }   
    
    /* 表格标题及内容居左显示 */
    caption,th {text-align: left;}
    input,img,select {vertical-align:middle;}
    
    /* 清除列表样式 */
    ol,ul {list-style: none;}  
    
    /* 输入控件字体 */
    input,button,textarea,select,optgroup,option {
      font-family:inherit;
      font-size:inherit;
      font-style:inherit;
      font-weight:inherit;
    }
    
    /* 标题元素样式清除 */ 
    h1,h2,h3,h4,h5,h6 {   
      　　font-weight: normal;   
      　　font-size: 100%;   
    }   
    
    /* 链接样式，颜色可酌情修改 */
    del,ins,a {text-decoration:none;}
    a:link {color:#009;}
    a:visited {color:#800080;}
    a:hover,a:active,a:focus {color:#c00; text-decoration:underline;} 
    
    /* 鼠标样式 */
    input[type="submit"] {cursor: pointer;}
    button {cursor: pointer;}
    input::-moz-focus-inner { border: 0; padding: 0;}
    
    .clear {clear:both;}


## 高级功能

### flexbox 弹性布局 (为移动端设计的方便排版的技术)

    /* 设置 Flex 模式 */
    display: flex;
    
    /* 决定元素是横排还是竖着排，要不要倒序 */
    flex-direction: column;
    
    /* 决定元素换行格式，一行排不下的时候如何排 */
    flex-wrap: wrap;
    
    /* flex-flow = flex-direction + flex-wrap */
    flex-flow: column wrap;
    
    /* 同一排下对齐方式，空格如何隔开各个元素 */
    justify-content: space-between;
    
    /* 同一排下元素如何对齐，顶部对齐、中部对齐还是其他 */
    align-items: center;
    
    /* 多行对齐方式 */
    align-content: space-between;


### 媒体查询

三个逻辑操作符，分别是 and、not 和 only。

    @media all and (min-width: 800px) and (max-width: 1024px) {
      ...;
    }


### viewport (视窗)

1.  禁用缩放(手机默认会启用缩放)

        <meta name="viewport" content="width=device-width, initial-scale=1" />

2.  设备无关像素(dip device-independent pixel )

    width=device-width 可指示网页与屏幕宽度（以设备无关像素为单位）进行匹配。这样，网页就可以重排内容以匹配不同的屏幕尺寸。


### transform 变换

-   transform:
    -   translate(X,Y) 平移多少位置
    -   rotate() 旋转多少角度 ( 30deg )  多少圈 (0.5turn 半圈)
    -   scale(2,4) 缩放
    -   skew(30deg,20deg) 倾斜
    -   matrix() 需要六个参数，包含数学函数，旋转、缩放、移动以及倾斜
    -   transform-origin 	允许你改变被转换元素的位置


### 过渡效果 动画

    div{transition:width 2s;}
    div:hover{width:300px;}

-   transition-property 	规定应用过渡的 CSS 属性的名称
-   transition-duration 	定义过渡效果花费的时间
-   transition-timing-function 	规定过渡效果的时间曲线
-   transition-delay 	规定过渡效果何时开始


### 相对布局

一般而言，对于响应式网站，水平方向为流体网格布局，那宽度、左右间距和左右内边距的长度自然采用百分比。像高度、上下间距，还有字体大小等与垂直方向相关的属性则应该使用 em 或者 rem 单位。


### 移动优先

当用手机打开网页的时候，默认打开的只是相对比较简单的手机版样式，而复杂一些的桌面版的相应样式都在 media-query 中包裹着，所以不会加载，那么这样页面访问速度是最佳的。 参考下面代码

    .content {
      /* 一些简单的样式，专门为手机而生 */
    }
    
    @media screen and (min-width: 400px) {
      .content {
        /* 为大屏设备设计的比较复杂的样式 */
      }
    }


### 滚动条

用 max-width 代替 width 可以防止窗口太小时出现滚动条


# 伪类
## :nth-child

:nth-child(an+b) 这个 CSS 伪类首先找到所有当前元素的兄弟元素，然后按照位置先后顺序从1开始排序，选择的结果为CSS伪类:nth-child括号中表达式（an+b）匹配到的元素集合（n=0，1，2，3&#x2026;）。


# faq


## 解决子div设float后导致父div无法自动撑开(常用2种)

原因：内部的DIV因为float:left之后，就丢失了clear:both和display:block的样式，所以外部的DIV不会被撑开。
1)直接给父div设置"display: inline-block;"

2)在最后添加一个sub<sub>div用来清除浮动</sub>：<div style="clear:both;"></div>; 


# [Flex 布局教程：语法篇 - 阮一峰的网络日志](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)     :website:

<span class="timestamp-wrapper"><span class="timestamp">[2020-12-22 二 14:56]</span></span>


## Article

网页布局（layout）是 CSS 的一个重点应用。

![img](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071001.gif)

布局的传统解决方案，基于 [盒状模型](https://developer.mozilla.org/en-US/docs/Web/CSS/box_model)，依赖 [`display`](https://developer.mozilla.org/en-US/docs/Web/CSS/display) 属性 + [`position`](https://developer.mozilla.org/en-US/docs/Web/CSS/position)属性 + [`float`](https://developer.mozilla.org/en-US/docs/Web/CSS/float)属性。它对于那些特殊布局非常不方便，比如， [垂直居中](https://css-tricks.com/centering-css-complete-guide/)就不容易实现。

![img](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071002.png)

2009年，W3C 提出了一种新的方案-&#x2014;Flex 布局，可以简便、完整、响应式地实现各种页面布局。目前，它已经得到了所有浏览器的支持，这意味着，现在就能很安全地使用这项功能。

![img](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071003.jpg)

Flex 布局将成为未来布局的首选方案。本文介绍它的语法， [下一篇文章](http://www.ruanyifeng.com/blog/2015/07/flex-examples.html)给出常见布局的 Flex 写法。网友 [JailBreak](http://vgee.cn/) 为本文的所有示例制作了 [Demo](http://static.vgee.cn/static/index.html)，也可以参考。

以下内容主要参考了下面两篇文章： [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) 和 [A Visual Guide to CSS3 Flexbox Properties](https://scotch.io/tutorials/a-visual-guide-to-css3-flexbox-properties)。


### 一、Flex 布局是什么？

Flex 是 Flexible Box 的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。

任何一个容器都可以指定为 Flex 布局。

>     
>     .box{
>       display: flex;
>     }

行内元素也可以使用 Flex 布局。

>     
>     .box{
>       display: inline-flex;
>     }

Webkit 内核的浏览器，必须加上 =-webkit=前缀。

>     
>     .box{
>       display: -webkit-flex; /* Safari */
>       display: flex;
>     }

注意，设为 Flex 布局以后，子元素的 =float=、 =clear=和 =vertical-align=属性将失效。


### 二、基本概念

采用 Flex 布局的元素，称为 Flex 容器（flex container），简称"容器"。它的所有子元素自动成为容器成员，称为 Flex 项目（flex item），简称"项目"。

![img](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071004.png)

容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。主轴的开始位置（与边框的交叉点）叫做 =main start=，结束位置叫做 =main end=；交叉轴的开始位置叫做 =cross start=，结束位置叫做 =cross end=。

项目默认沿主轴排列。单个项目占据的主轴空间叫做 =main size=，占据的交叉轴空间叫做 =cross size=。


### 三、容器的属性

以下6个属性设置在容器上。

> 
> 
> -   flex-direction
> -   flex-wrap
> -   flex-flow
> -   justify-content
> -   align-items
> -   align-content

1.  3.1 flex-direction属性

    =flex-direction=属性决定主轴的方向（即项目的排列方向）。
    
    >     
    >     .box {
    >       flex-direction: row | row-reverse | column | column-reverse;
    >     }
    
    ![img](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071005.png)
    
    它可能有4个值。
    
    > 
    > 
    > -   =row=（默认值）：主轴为水平方向，起点在左端。
    > -   =row-reverse=：主轴为水平方向，起点在右端。
    > -   =column=：主轴为垂直方向，起点在上沿。
    > -   =column-reverse=：主轴为垂直方向，起点在下沿。

2.  3.2 flex-wrap属性

    默认情况下，项目都排在一条线（又称"轴线"）上。 =flex-wrap=属性定义，如果一条轴线排不下，如何换行。
    
    ![img](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071006.png)
    
    >     
    >     .box{
    >       flex-wrap: nowrap | wrap | wrap-reverse;
    >     }
    
    它可能取三个值。
    
    （1） =nowrap=（默认）：不换行。
    
    ![img](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071007.png)
    
    （2） =wrap=：换行，第一行在上方。
    
    ![img](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071008.jpg)
    
    （3） =wrap-reverse=：换行，第一行在下方。
    
    ![img](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071009.jpg)

3.  3.3 flex-flow

    =flex-flow=属性是 =flex-direction=属性和 =flex-wrap=属性的简写形式，默认值为 =row nowrap=。
    
    >     
    >     .box {
    >       flex-flow:  || ;
    >     }

4.  3.4 justify-content属性

    =justify-content=属性定义了项目在主轴上的对齐方式。
    
    >     
    >     .box {
    >       justify-content: flex-start | flex-end | center | space-between | space-around;
    >     }
    
    ![img](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071010.png)
    
    它可能取5个值，具体对齐方式与轴的方向有关。下面假设主轴为从左到右。
    
    > 
    > -   =flex-start=（默认值）：左对齐
    > -   =flex-end=：右对齐
    > -   =center=： 居中
    > -   =space-between=：两端对齐，项目之间的间隔都相等。
    > -   =space-around=：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。

5.  3.5 align-items属性

    =align-items=属性定义项目在交叉轴上如何对齐。
    
    >     
    >     .box {
    >       align-items: flex-start | flex-end | center | baseline | stretch;
    >     }
    
    ![img](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071011.png)
    
    它可能取5个值。具体的对齐方式与交叉轴的方向有关，下面假设交叉轴从上到下。
    
    > 
    > 
    > -   =flex-start=：交叉轴的起点对齐。
    > -   =flex-end=：交叉轴的终点对齐。
    > -   =center=：交叉轴的中点对齐。
    > -   `baseline`: 项目的第一行文字的基线对齐。
    > -   =stretch=（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。

6.  3.6 align-content属性

    =align-content=属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。
    
    >     
    >     .box {
    >       align-content: flex-start | flex-end | center | space-between | space-around | stretch;
    >     }
    
    ![img](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071012.png)
    
    该属性可能取6个值。
    
    > 
    > 
    > -   =flex-start=：与交叉轴的起点对齐。
    > -   =flex-end=：与交叉轴的终点对齐。
    > -   =center=：与交叉轴的中点对齐。
    > -   =space-between=：与交叉轴两端对齐，轴线之间的间隔平均分布。
    > -   =space-around=：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
    > -   =stretch=（默认值）：轴线占满整个交叉轴。

7.  四、项目的属性

    以下6个属性设置在项目上。
    
    > 
    > 
    > -   `order`
    > -   `flex-grow`
    > -   `flex-shrink`
    > -   `flex-basis`
    > -   `flex`
    > -   `align-self`

8.  4.1 order属性

    =order=属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。
    
    >     
    >     .item {
    >       order: ;
    >     }
    
    ![img](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071013.png)

9.  4.2 flex-grow属性

    =flex-grow=属性定义项目的放大比例，默认为 =0=，即如果存在剩余空间，也不放大。
    
    >     
    >     .item {
    >       flex-grow: ; /* default 0 */
    >     }
    
    ![img](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071014.png)
    
    如果所有项目的 =flex-grow=属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的 =flex-grow=属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。

10. 4.3 flex-shrink属性

    =flex-shrink=属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。
    
    >     
    >     .item {
    >       flex-shrink: ; /* default 1 */
    >     }
    
    ![img](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071015.jpg)
    
    如果所有项目的 =flex-shrink=属性都为1，当空间不足时，都将等比例缩小。如果一个项目的 =flex-shrink=属性为0，其他项目都为1，则空间不足时，前者不缩小。
    
    负值对该属性无效。

11. 4.4 flex-basis属性

    =flex-basis=属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为 =auto=，即项目的本来大小。
    
    >     
    >     .item {
    >       flex-basis:  | auto; /* default auto */
    >     }
    
    它可以设为跟 =width=或 =height=属性一样的值（比如350px），则项目将占据固定空间。

12. 4.5 flex属性

    `flex=属性是 =flex-grow`, `flex-shrink` 和 =flex-basis=的简写，默认值为 =0 1 auto=。后两个属性可选。
    
    >     
    >     .item {
    >       flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
    >     }
    
    该属性有两个快捷值： `auto` ( `1 1 auto`) 和 none ( `0 0 auto`)。
    
    建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。

13. 4.6 align-self属性

    =align-self=属性允许单个项目有与其他项目不一样的对齐方式，可覆盖 =align-items=属性。默认值为 =auto=，表示继承父元素的 =align-items=属性，如果没有父元素，则等同于 =stretch=。
    
    >     
    >     .item {
    >       align-self: auto | flex-start | flex-end | center | baseline | stretch;
    >     }
    
    ![img](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071016.png)
    
    该属性可能取6个值，除了auto，其他都与align-items属性完全一致。

## text-size-adjust

在小屏幕手机上，受到缩放，文字会很小。这里可以对文字显示大小进行调整

有点适配的意思
```
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
```
 -webkit-text-size-adjust
 -ms-text-size-adjust
```
## text-rendering 文本渲染
optimizeSpeed  速度优先
optimizeLegibility 易读性优先
geometricPrecision 精度优先


