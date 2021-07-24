# layui 界面组件
## 安装  
   下载 https://www.layui.com/

   引入
  ``` html
     <link rel="stylesheet" href="./static/css/layui.css" media="all">
     <script src="./static/layui.js" charset="utf-8"></script>
```


``` html
     <!-- 引入 layui.css -->
     <link rel="stylesheet" href="//unpkg.com/layui@2.6.8/dist/css/layui.css">
     <!-- 引入 layui.js -->
       <script src="//unpkg.com/layui@2.6.8/dist/layui.js"></script>
 ``` 

   
   使用
   ``` html
         <script>
            //一般直接写在一个js文件中
            layui.use(['layer', 'form'], function(){
            var layer = layui.layer
            ,form = layui.form;

            layer.msg('Hello World');
            });
          </script> 
```
##  页面元素
### 栅格系统
栅格布局规则：

 1. xs（超小屏幕，如手机）、sm（小屏幕，如平板）、md（桌面中等屏幕 990px）、lg（桌面大型屏幕）
 2. layui-col-space5 (列间距，单位 px)、 layui-col-md-offset3 ( 列偏移 )
      
         移动设备、平板、桌面端的不同表现：
   ```  html
         <div class="layui-row">
           <div class="layui-col-xs6 layui-col-sm6 layui-col-md4">
             移动：6/12 | 平板：6/12 | 桌面：4/12
           </div>
           <div class="layui-col-xs6 layui-col-sm6 layui-col-md4">
             移动：6/12 | 平板：6/12 | 桌面：4/12
           </div>
           <div class="layui-col-xs4 layui-col-sm12 layui-col-md4">
             移动：4/12 | 平板：12/12 | 桌面：4/12
           </div>
           <div class="layui-col-xs4 layui-col-sm7 layui-col-md8">
             移动：4/12 | 平板：7/12 | 桌面：8/12
           </div>
           <div class="layui-col-xs4 layui-col-sm5 layui-col-md4">
             移动：4/12 | 平板：5/12 | 桌面：4/12
           </div>
         </div>
       </div>
```
          
 响应式公共类：
    | 类名（class）             | 说明                                                        |
    | layui-show-*-block        | 定义不同设备下的 display: block; * 可选值有：xs、sm、md、lg |
    | layui-show-*-inline       | 定义不同设备下的 display: inline; * 可选值同上              |
    | layui-show-*-inline-block | 定义不同设备下的 display: inline-block; * 可选值同上        |
    | layui-hide-*              | 定义不同设备下的隐藏类，即： display: none; * 可选值同上    |
### 颜色设计 https://www.layui.com/doc/element/color.html
    ![](../../../../color.png)    
   ![hh](../../../../color.png "h") 
    
   - 赤色：class="layui-bg-red"
   - 橙色：class="layui-bg-orange"
   - 墨绿：class="layui-bg-green"
   - 藏青：class="layui-bg-cyan"
   - 蓝色：class="layui-bg-blue"
   - 雅黑：class="layui-bg-black"
   - 银灰：class="layui-bg-gray"
    
### 字体图标 https://www.layui.com/doc/element/icon.html
``` html
<i class="layui-icon layui-icon-face-smile"></i>   
<i class="layui-icon layui-icon-face-smile" style="font-size: 30px; color: #1E9FFF;"></i>
      ```


跨域问题的解决

     由于浏览器存在同源策略，所以如果 layui（里面含图标字体文件）所在的地址与你当
     前的页面地址不在同一个域下，即会出现图标跨域问题。所以要么你就把layui 与网站
     放在同一服务器，要么就对 layui 所在的资源服务器的 Response Headers 加上属性：
     Access-Control-Allow-Origin: *

### CSS3 动画类 https://www.layui.com/doc/element/anim.html
  直接对元素赋值动画特定的 class 类名即可

``` html
      <!-- 其中 layui-anim 是必须的，后面跟着的即是不同的动画类 -->
      <div class="layui-anim layui-anim-up"></div>
     
      <!-- 循环动画，追加：layui-anim-loop -->
      <div class="layui-anim layui-anim-up layui-anim-loop"></div>
 
```
         
| 属性             | 值                    |
|------------------|-----------------------|
| 从最底部往上滑入 | layui-anim-up         |
| 微微往上滑入     | layui-anim-upbit      |
| 平滑放大         | layui-anim-scale      |
| 平滑放小         | layui-anim-scalesmall |
| 渐现             | layui-anim-fadein     |
| 360度旋转        | layui-anim-rotate     |

### 按钮 https://www.layui.com/doc/element/button.html
``` html
     <button type="button" class="layui-btn">一个标准的按钮</button>
     <a href="http://www.layui.com" class="layui-btn">一个可跳转的按钮</a>
```
### 表单 
引入 form

``` html
      <form class="layui-form" action="">
         <div class="layui-form-item">
           <label class="layui-form-label">输入框</label>
           <div class="layui-input-block">
             <input type="text" name="title" required  lay-verify="required" placeholder="请输入标题" autocomplete="off" class="layui-input">
           </div>
         </div>
         <div class="layui-form-item">
           <label class="layui-form-label">密码框</label>
           <div class="layui-input-inline">
             <input type="password" name="password" required lay-verify="required" placeholder="请输入密码" autocomplete="off" class="layui-input">
           </div>
           <div class="layui-form-mid layui-word-aux">辅助文字</div>
         </div>
         <div class="layui-form-item">
           <label class="layui-form-label">选择框</label>
           <div class="layui-input-block">
             <select name="city" lay-verify="required">
               <option value=""></option>
               <option value="0">北京</option>
               <option value="1">上海</option>
               <option value="2">广州</option>
               <option value="3">深圳</option>
               <option value="4">杭州</option>
             </select>
           </div>
         </div>
         <div class="layui-form-item">
           <label class="layui-form-label">复选框</label>
           <div class="layui-input-block">
             <input type="checkbox" name="like[write]" title="写作">
             <input type="checkbox" name="like[read]" title="阅读" checked>
             <input type="checkbox" name="like[dai]" title="发呆">
           </div>
         </div>
         <div class="layui-form-item">
           <label class="layui-form-label">开关</label>
           <div class="layui-input-block">
             <input type="checkbox" name="switch" lay-skin="switch">
           </div>
         </div>
         <div class="layui-form-item">
           <label class="layui-form-label">单选框</label>
           <div class="layui-input-block">
             <input type="radio" name="sex" value="男" title="男">
             <input type="radio" name="sex" value="女" title="女" checked>
           </div>
         </div>
         <div class="layui-form-item layui-form-text">
           <label class="layui-form-label">文本域</label>
           <div class="layui-input-block">
             <textarea name="desc" placeholder="请输入内容" class="layui-textarea"></textarea>
           </div>
         </div>
         <div class="layui-form-item">
           <div class="layui-input-block">
             <button class="layui-btn" lay-submit lay-filter="formDemo">立即提交</button>
             <button type="reset" class="layui-btn layui-btn-primary">重置</button>
           </div>
         </div>
       </form>
     
       <script>
       //Demo
       layui.use('form', function(){
         var form = layui.form;
      
         //监听提交
         form.on('submit(formDemo)', function(data){
           layer.msg(JSON.stringify(data.field));
           return false;
         });
       });
       </script>
    ```
          
   给 select 分组：
``` html
       <select name="quiz">
         <option value="">请选择</option>
         <optgroup label="城市记忆">
           <option value="你工作的第一个城市">你工作的第一个城市？</option>
         </optgroup>
         <optgroup label="学生时代">
           <option value="你的工号">你的工号？</option>
           <option value="你最喜欢的老师">你最喜欢的老师？</option>
         </optgroup>
       </select>
```
          
**** 复选框
       默认风格：
       #+begin_src html
       <input type="checkbox" name="" title="写作" checked>
       <input type="checkbox" name="" title="发呆"> 
       <input type="checkbox" name="" title="禁用" disabled> 
       #+end_src
     
       原始风格：
       #+begin_src html
       <input type="checkbox" name="" title="写作" lay-skin="primary" checked>
       <input type="checkbox" name="" title="发呆" lay-skin="primary"> 
       <input type="checkbox" name="" title="禁用" lay-skin="primary" disabled> 
       #+end_src
          
   属性title可自定义文本（温馨提示：如果只想显示复选框，可以不用设置 title）
   属性checked可设定默认选中
   属性lay-skin可设置复选框的风格
   设置value="1"可自定义值，否则选中时返回的就是默认的 on

**** 开关
     其实就是 checkbox 复选框的“变种”，通过设定 lay-skin="switch" 形成了开关风格

       #+begin_src html
       <input type="checkbox" name="xxx" lay-skin="switch">
       <input type="checkbox" name="yyy" lay-skin="switch" lay-text="ON|OFF" checked>
       <input type="checkbox" name="zzz" lay-skin="switch" lay-text="开启|关闭">
       <input type="checkbox" name="aaa" lay-skin="switch" disabled>
       #+end_src
          
       属性checked可设定默认开
       属性disabled开启禁用
       属性lay-text可自定义开关两种状态的文本
       设置value="1"可自定义值，否则选中时返回的就是默认的 on

**** 单选框
 #+begin_src html
       <input type="radio" name="sex" value="nan" title="男">
       <input type="radio" name="sex" value="nv" title="女" checked>
       <input type="radio" name="sex" value="" title="中性" disabled>
 #+end_src
          
   属性title可自定义文本
   属性disabled开启禁用
   设置value="xxx"可自定义值，否则选中时返回的就是默认的 on

**** 文本域
     #+begin_src html
       <textarea name="" required lay-verify="required" placeholder="请输入" class="layui-textarea"></textarea>
     #+end_src

     class="layui-textarea"：layui.css 提供的通用 CSS 类

**** 组装行内表单

     #+begin_src html
       <div class="layui-form-item">

         <div class="layui-inline">
           <label class="layui-form-label">范围</label>
           <div class="layui-input-inline" style="width: 100px;">
             <input type="text" name="price_min" placeholder="￥" autocomplete="off" class="layui-input">
           </div>
           <div class="layui-form-mid">-</div>
           <div class="layui-input-inline" style="width: 100px;">
             <input type="text" name="price_max" placeholder="￥" autocomplete="off" class="layui-input">
           </div>
         </div>

         <div class="layui-inline">
           <label class="layui-form-label">密码</label>
           <div class="layui-input-inline" style="width: 100px;">
             <input type="password" name="" autocomplete="off" class="layui-input">
           </div>
         </div>

       </div>
     #+end_src
          
     class="layui-inline"：定义外层行内
     class="layui-input-inline"：定义内层行内

**** 忽略美化渲染

     你可以对表单元素增加属性 lay-ignore 设置后，将不会对该标签进行美化渲染，即保留系统风格，比如：

     #+begin_src html
       <select lay-ignore>
         <option>…</option>
       </select>
     #+end_src
          
     一般不推荐这样做。事实上 form 组件所提供的接口，对其渲染过的元素，足以应付几乎所有的业务需求。如果忽略渲染，可能会让 UI 风格不和谐

**** 表单方框风格
     通过追加 layui-form-pane 的 class，来设定表单的方框风格。内部结构不变。我们的 Fly 社区用的就是这个风格。

     #+begin_src html

       <form class="layui-form layui-form-pane" action="">
         内部结构都一样，值得注意的是 复选框/开关/单选框 这些组合在该风格下需要额外添加 pane属性（否则会看起来比较别扭），如：
         <div class="layui-form-item" pane>
           <label class="layui-form-label">单选框</label>
           <div class="layui-input-block">
             <input type="radio" name="sex" value="男" title="男">
             <input type="radio" name="sex" value="女" title="女" checked>
           </div>
         </div>
       </form>
     #+end_src
          
*** 导航
*** 选项卡
*** 进度条
*** 面板 
*** 表格
*** 徽章
*** 时间线
*** 简单辅助元素 

  #+BEGIN_QUOTE
    本篇主要集中罗列页面中的一些简单辅助元素，如：引用块、字段集区块、横线等等，这些元素都无需依赖任何模块

  #+END_QUOTE

  - 引用区块



  #+BEGIN_QUOTE
    引用区域的文字
  #+END_QUOTE

  #+BEGIN_QUOTE
    引用区域的文字
  #+END_QUOTE

  目前内置了上述两种风格

 
      <blockquote class="layui-elem-quote">引用区域的文字</blockquote>
      <blockquote class="layui-elem-quote layui-quote-nm">引用区域的文字</blockquote>
          



  - 字段集区块



  - 字段集区块 - 默认风格

  内容区域。



  同样内置了两种风格，另一种风格即该文档的标题横线：字段集一行

 
      <fieldset class="layui-elem-field">
        <legend>字段集区块 - 默认风格</legend>
        <div class="layui-field-box">
          内容区域
        </div>
      </fieldset>
     
      <fieldset class="layui-elem-field layui-field-title">
        <legend>字段集区块 - 横线风格</legend>
        <div class="layui-field-box">
          内容区域
        </div>
      </fieldset>
      你可以把它看作是一个有标题的横线
          



  - 横线



  默认分割线

  --------------

  赤色分割线

  --------------

  橙色分割线

  --------------

  墨绿分割线

  --------------

  青色分割线

  --------------

  蓝色分割线

  --------------

  黑色分割线

  --------------

  灰色分割线

  --------------

 
      默认分割线
      <hr>
     
      赤色分割线
      <hr class="layui-bg-red">
     
      橙色分割线
      <hr class="layui-bg-orange">
     
      墨绿分割线
      <hr class="layui-bg-green">
     
      青色分割线
      <hr class="layui-bg-cyan">
     
      蓝色分割线
      <hr class="layui-bg-blue">
     
      黑色分割线
      <hr class="layui-bg-black">
     
      灰色分割线
      <hr class="layui-bg-gray">
** 内置模块 
*** 弹层组件
*** 日期和时间
*** 分页模块
*** 模板引擎
*** table 数据表格
*** 表单模块
*** 图片/文件上传
*** 穿梭框组件
*** 树形组件
*** 颜色选择器
*** 常用元素操作 - layui.element

  #+BEGIN_QUOTE
    页面中有许多元素需要自动去完成一些处理，譬如导航菜单的小滑块、Tab 的切换等操作，他们往往不需要去单独调用一个方法来开启一项功能，而页面上恰恰有太多这样的小交互，所以我们统一归类为 element 组件。跟表单一样，基于元素属性和事件驱动的接口书写方式。
  #+END_QUOTE

  #+BEGIN_QUOTE
    模块加载名称：/element/
  #+END_QUOTE






  - 使用



  元素功能的开启只需要加载 element 模块即会自动完成，所以不用跟其它模块一样为某一个功能而调用一个方法。她只需要找到她支持的元素，如你的页面存在一个
  Tab 元素块，那么 element 模块会自动赋予她该有的功能。

 
      <div class="layui-tab" lay-filter="demo">
        <ul class="layui-tab-title">
          <li class="layui-this">网站设置</li>
          <li>商品管理</li>
          <li>订单管理</li>
        </ul>
        <div class="layui-tab-content">
          <div class="layui-tab-item layui-show">内容1</div>
          <div class="layui-tab-item">内容2</div>
          <div class="layui-tab-item">内容3</div>
        </div>
      </div>
          


  前提是你要加载 element 模块

 
      layui.use('element', function(){
        var element = layui.element;
      
        //一些事件监听
        element.on('tab(demo)', function(data){
          console.log(data);
        });
      });
          



  - 预设元素属性



  我们通过自定义元素属性来作为元素的功能参数，他们一般配置在容器外层，如：

 
      <div class="layui-tab" lay-allowClose="true" lay-filter="demo">…</div>      
      <span class="layui-breadcrumb" lay-separator="|"></span>
     
       And So On
          


  element 模块支持的元素如下表：

  | 属性名           | 可选值       | 说明                                                                     |
  |------------------|--------------|--------------------------------------------------------------------------|
  | lay-filter       | 任意字符     | 事件过滤器（公用属性），主要用于事件的精确匹配，跟选择器是比较类似的。   |
  | lay-allowClose   | true         | 针对于 Tab 容器，是否允许选项卡关闭。默认不允许，即不用设置该属性          |
  | lay-separator    | 任意分隔符   | 针对于面包屑容器                                                         |


  - 基础方法



  基础方法允许你在外部主动对元素发起一起操作，目前 element 模块提供的方法如下：

  | 方法名                               | 描述                                                                                   |
  |--------------------------------------|----------------------------------------------------------------------------------------|
  | var element = layui.element;         | element 模块的实例                                                                    |
  |                                      | 返回的/element/变量为该实例的对象，携带一些用于元素操作的基础方法                      |
  | element.on(filter, callback);        | 用于元素的一些事件监听                                                                 |
  | element.tabAdd(filter, options);     | 用于新增一个 Tab 选项                                                                  |
  |                                      | 参数/filter/：tab 元素的 lay-filter="value" 过滤器的值（value）                       |
  |                                      | 参数/options/：设定可选值的对象，目前支持的选项如下述示例：                            |
  |                                      |                                                                         |
  |                                      |     element.tabAdd('demo', {                                                           |
  |                                      |       title: '选项卡的标题'                                                            |
  |                                      |       ,content: '选项卡的内容' //支持传入 html                                          |
  |                                      |       ,id: '选项卡标题的 lay-id 属性值'                                                  |
  |                                      |     });                                                                                |
  |                                      |                                                                                        |
  |                                      |                                                                          |
  | element.tabDelete(filter, layid);    | 用于删除指定的 Tab 选项                                                                |
  |                                      | 参数/filter/：tab 元素的 lay-filter="value" 过滤器的值（value）                       |
  |                                      | 参数/layid/：选项卡标题列表的 属性 lay-id 的值                                         |
  |                                      |                                                                         |
  |                                      |     element.tabDelete('demo', 'xxx'); //删除 lay-id="xxx" 的这一项                     |
  |                                      |                                                                                        |
  |                                      |                                                                          |
  | element.tabChange(filter, layid);    | 用于外部切换到指定的 Tab 项上，参数同上，如：                                          |
  |                                      | element.tabChange('demo', 'layid'); //切换到 lay-id="yyy" 的这一项                     |
  | element.tab(options);                | 用于绑定自定义 Tab 元素（即非 layui 自带的 tab 结构）。/该方法为 layui 2.1.6 新增/   |
  |                                      | 参数/options/：设定可选值的对象，目前支持的选项如下述示例：                            |
  |                                      |                                                                         |
  |                                      |     //HTML                                                                             |
  |                                      |     <ul id="tabHeader">                                                                |
  |                                      |       <li>标题 1</li>                                                                   |
  |                                      |       <li>标题 2</li>                                                                   |
  |                                      |       <li>标题 3</li>                                                                   |
  |                                      |     </ul>                                                                              |
  |                                      |     <div id="tabBody">                                                                 |
  |                                      |       <div class="xxx">内容 1</div>                                                     |
  |                                      |       <div class="xxx">内容 2</div>                                                     |
  |                                      |       <div class="xxx">内容 4</div>                                                     |
  |                                      |     </div>                                                                             |
  |                                      |                                                                                        |
  |                                      |     //JavaScript                                                                       |
  |                                      |     element.tab({                                                                      |
  |                                      |       headerElem: '#tabHeader>li' //指定 tab 头元素项                                    |
  |                                      |       ,bodyElem: '#tabBody>.xxx' //指定 tab 主体元素项                                   |
  |                                      |     });                                                                                |
  |                                      |                                                                                        |
  |                                      |                                                                          |
  | element.progress(filter, percent);   | 用于动态改变进度条百分比：                                                           |
  |                                      | element.progress('demo', '30%');                                                       |


  更新渲染

  - 更新渲染



  跟表单元素一样，很多时候你的页面元素可能是动态生成的，这时 element 的相关功能将不会对其有效，你必须手工执行
  /element.init(type, filter)/ 方法即可。注意：2.1.6 开始，可以用
  /element.render(type, filter);/ 方法替代

  第一个参数：type，为表单的 type 类型，可选。默认对全部类型的表单进行一次更新。可局部刷新的 type 如下表：

  | 参数（type）值   | 描述                            |
  |------------------|---------------------------------|
  | tab              | 重新对 tab 选项卡进行初始化渲染   |
  | nav              | 重新对导航进行渲染              |
  | breadcrumb       | 重新对面包屑进行渲染            |
  | progress         | 重新对进度条进行渲染            |
  | collapse         | 重新对折叠面板进行渲染          |

 
      element.init(); //更新全部  2.1.6 可用 element.render() 方法替代
      element.render('nav'); //重新对导航进行渲染。注：layui 2.1.6 版本新增
      //……
          


  第二个参数：filter，为元素的 lay-filter=""
  的值。你可以借助该参数，完成指定元素的局部更新。

 
      【HTML】
      <div class="layui-nav" lay-filter="test1">
        …
      </div>
     
      <div class="layui-nav" lay-filter="test2">
        …
      </div>
          
      【JavaScript】
      //比如当你对导航动态插入了二级菜单，这时你需要重新去对它进行渲染
      element.render('nav', 'test1'); //对 lay-filter="test1" 所在导航重新渲染。注：layui 2.1.6 版本新增
      //……      
          



  - 事件监听



  语法：/element.on('event(过滤器值)', callback);/

  element 模块在 layui 事件机制中注册了 element 模块事件，所以当你使用
  layui.onevent() 自定义模块事件时，请勿占用 element 名。目前 element
  模块所支持的事件如下表：

  | event       | 描述                          |
  |-------------|-------------------------------|
  | tab         | 监听 Tab 选项卡切换事件       |
  | tabDelete   | 监听 Tab 监听选项卡删除事件   |
  | nav         | 监听导航菜单的点击事件        |
  | collapse    | 监听折叠面板展开或收缩事件    |

  默认情况下，事件所监听的是全部的元素，但如果你只想监听某一个元素，使用事件过滤器即可。
  如：/<div class="layui-tab" lay-filter="test"></div>/

 
      element.on('tab(test)', function(data){
        console.log(data);
      });
          



  - 监听选项卡切换



  Tab 选项卡点击切换时触发，回调函数返回一个 object 参数，携带两个成员：

 
      element.on('tab(filter)', function(data){
        console.log(this); //当前Tab标题所在的原始DOM元素
        console.log(data.index); //得到当前Tab的所在下标
        console.log(data.elem); //得到当前的Tab大容器
      });
          



  - 监听选项卡删除



  Tab 选项卡被删除时触发，回调函数返回一个 object 参数，携带两个成员：

 
      element.on('tabDelete(filter)', function(data){
        console.log(this); //当前Tab标题所在的原始DOM元素
        console.log(data.index); //得到当前Tab的所在下标
        console.log(data.elem); //得到当前的Tab大容器
      });
          


  /注：该事件为 layui 2.1.6 新增/


  - 监听导航菜单的点击


  当点击导航父级菜单和二级菜单时触发，回调函数返回所点击的菜单 DOM 对象：

 
      element.on('nav(filter)', function(elem){
        console.log(elem); //得到当前点击的DOM对象
      });
          



  - 监听折叠面板


  当折叠面板点击展开或收缩时触发，回调函数返回一个 object 参数，携带三个成员：

 
      element.on('collapse(filter)', function(data){
        console.log(data.show); //得到当前面板的展开状态，true或者false
        console.log(data.title); //得到当前点击面板的标题区域DOM对象
        console.log(data.content); //得到当前点击面板的内容区域DOM对象
      });
          



  - 动态操作进度条



  你肯定不仅仅是满足于进度条的初始化显示，通常情况下你需要动态改变它的进度值，element 模块提供了这样的基础方法：/element.progress(filter,
  percent);/。

 
      <div class="layui-progress layui-progress-big" lay-filter="demo" lay-showPercent="true">
        <div class="layui-progress-bar" lay-percent="0%"></div>
      </div>
     
      上述是一个已经设置了过滤器（lay-filter="demo"）的进度条
      现在你只需要在某个事件或者语句中执行方法：element.progress('demo', '50%');
      即可改变进度
          


  如果你需要进度条更直观的例子，建议浏览：[[https://www.layui.com/demo/progress.html][进度条演示页面]]


  - 结语



  事实上元素模块的大部分操作都是内部自动完成的，所以目前你发现他的接口很少呢。当然，我们也会不断增加 element 模块所支持的页面元素。






  --------------

  [[https://www.layui.com/doc/modules/element.html]]

 
 











  --------------

*** 滑块文档 - layui.slider

  #+BEGIN_QUOTE
    作为一个拖拽式的交互性组件，滑块往往能给产品带来更好的操作体验。layui
    深以为然，slider
    模块包含了你能想到的大部分功能，尽管它可以作为一个独立的个体，但很多时候它往往会出现
    form 元素中，想象一下吧。
  #+END_QUOTE

  #+BEGIN_QUOTE
    模块加载名称：/slider/

    注意：/slider 为 layui 2.4.0 新增模块/
  #+END_QUOTE






  - 使用


  通过对 slider
  模块的使用，你可以在页面构建出可拖动的滑动元素，如下是一个最基本的用法：

 
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>滑块</title>
        <link rel="stylesheet" href="../src/css/layui.css">
      </head>
      <body>
      <div id="slideTest1"></div>
      <script src="../src/layui.js"></script>
      <script>
      layui.use('slider', function(){
        var slider = layui.slider;
      
        //渲染
        slider.render({
          elem: '#slideTest1'  //绑定元素
        });
      });
      </script>
      </body>
      </html>
          



  - 基础参数


  slider 组件支持以下参数

  | 参数选项   | 说明                                                                                                                          | 类型            | 默认值    |
  |------------|-------------------------------------------------------------------------------------------------------------------------------|-----------------|-----------|
  | elem       | 指向容器选择器                                                                                                                | string/object   | -         |
  | type       | 滑块类型，可选值有：/default/（水平滑块）、/vertical/（垂直滑块）                                                             | string          | default   |
  | min        | 滑动条最小值，正整数，默认为 0                                                                                                | number          | 0         |
  | max        | 滑动条最大值                                                                                                                  | number          | 100       |
  | range      | 是否开启滑块的范围拖拽，若设为 true，则滑块将出现两个可拖拽的环                                                               | boolean         | false     |
  | value      | 滑块初始值，默认为数字，若开启了滑块为范围拖拽（即 range: true），则需赋值数组，异表示开始和结尾的区间，如：value: [30, 60]   | number/Array    | 0         |
  | step       | 拖动的步长                                                                                                                    | number          | 1         |
  | showstep   | 是否显示间断点                                                                                                                | boolean         | false     |
  | tips       | 是否显示文字提示                                                                                                              | boolean         | true      |
  | input      | 是否显示输入框（注意：若 range 参数为 true 则强制无效）                                                                     | boolean         | false     |
  |            | 点击输入框的上下按钮，以及输入任意数字后回车或失去焦点，均可动态改变滑块                                                      |                 |           |
  | height     | 滑动条高度，需配合 type:"vertical" 参数使用                                                                                   | number          | 200       |
  | disabled   | 是否将滑块禁用拖拽                                                                                                            | boolean         | false     |
  | theme      | 主题颜色，以便用在不同的主题风格下                                                                                            | string          | #009688   |


  - 自定义提示文本


  当鼠标放在圆点和滑块拖拽时均会触发提示层。其默认显示的文本是它的对应数值，你也可以自定义提示内容：

 
      slider.render({
        elem: '#slideTest1'
        ,setTips: function(value){ //自定义提示文本
          return value + '%';
        }
      });
          



  - 数值改变的回调


  在滑块数值被改变时触发。该回调非常重要，可动态获得滑块当前的数值。你可以将得到的数值，赋值给隐藏域，或者进行一些其它操作。

 
      //当滑块为普通模式，回调返回的 value 是一个数值
      slider.render({
        elem: '#slideTest1'
        ,change: function(value){
          console.log(value) //动态获取滑块数值
          //do something
        }
      });
     
      //当滑块为范围模式，回调返回的 value 是一个数组，包含开始和结尾
      slider.render({
        elem: '#slideTest1'
        ,range: true
        ,change: function(value){
          console.log(value[0]) //得到开始值
          console.log(value[1]) //得到结尾值
          //do something
        }
      });
          



  - 实例方法


  执行 slider
  实例时，会返回一个当前实例的对象，里面包含针对当前实例的方法和属性。
  语法：/var ins1 = slider.render(options);/

 
      var ins1 = slider.render(options); //获得实例对象
     
      ins1.config //获得当前实例的配置项
      ins1.setValue(nums); //动态给滑块赋值
          



  - 动态改变滑块数值


  你可以通过外部方法动态改变滑块数值，如：

 
      var ins1 = slider.render({
        elem: '#test1'
        //…
      });      
     
      //改变指定滑块实例的数值
      ins1.setValue(20)
     
      //若滑块开启了范围（range: true）
      ins1.setValue(20, 0) //设置开始值
      ins1.setValue(60, 1) //设置结尾值
          



  - 结语


  layui.slider 可以大幅度提升你 Web 应用中的很多操作体验，可尽情发挥。






  --------------

  [[https://www.layui.com/doc/modules/slider.html]]

 
 











  --------------

*** 评分组件文档 - layui.rate

  #+BEGIN_QUOTE
    rate 评分组件在电商和 O2O
    平台尤为常见，一般用于对商家进行服务满意度评价。rate 组件是 layui
    团队新成员 [[https://github.com/star1029/][@star1029]]
    的第一款组件，外形依然小巧自然，功能依旧灵活实用。其中评分对应的自定义内容功能，可让它有更多的发挥空间。该组件为
    2.3.0 版本新增
  #+END_QUOTE

  #+BEGIN_QUOTE
    模块加载名称：/rate/
  #+END_QUOTE






  - 使用


  rate
  组件可以用来进行展示或评价，你只需要通过更改参数设定来开启你想要的功能，如下是一个最基本的例子：

 
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>评分组件</title>
        <link rel="stylesheet" href="../src/css/layui.css">
      </head>
      <body>
        <div id="test1"></div>
        <script src="../src/layui.js"></script>
        <script>
        layui.use('rate', function(){
          var rate = layui.rate;
       
          //渲染
          var ins1 = rate.render({
            elem: '#test1'  //绑定元素
          });
        });
        </script>
      </body>
      </html>
          


  这真的就是个小例子，所以下文对组件的参数进行了说明，请仔细阅读奥


  - 基础参数


  目前 rate 组件提供了以下基础参数，你可根据实际场景进行相应的设置

  | 参数选项   | 说明                                                                                                       | 类型            | 默认值    |
  |------------|------------------------------------------------------------------------------------------------------------|-----------------|-----------|
  | elem       | 指向容器选择器                                                                                             | string/object   | -         |
  | length     | 评分组件中具体星星的个数。个数当然是整数啦，残缺的星星很可怜的，所以设置了小数点的组件我们会默认向下取整   | number          | 5         |
  | value      | 评分的初始值                                                                                               | number          | 0         |
  | theme      | 主题颜色。我们默认的组件颜色是/#FFB800/，你可以根据自身喜好来更改组件的颜色，以适用不同场景                | string          | #FFB800   |
  | half       | 设定组件是否可以选择半星                                                                                   | boolean         | false     |
  | text       | 是否显示评分对应的内容                                                                                     | boolean         | false     |
  | readonly   | 是否只读，即只用于展示而不可点                                                                             | boolean         | false     |


  - 分数设置


  如若你设置分数，我们会根据你是否开启半星功能，来做一个具体的规范：

****** *关闭半星功能:*
 
 


  -  /小数值大于 0.5 ：分数向上取整，如 3.6 分，则系统自动更改为 4 分/
  -  /小数值小于等于 0.5 ：分数向下取整，如 3.2 分，则系统自动更改为 3 分/
  -  /如果在关闭半星功能的情况下开启了文本，你会发现你的分数也相应的变成了整数/

****** *开启半星功能:*
 
 


  -  /不论你的小数值是 0.1 还是 0.9，都统一规划为
     0.5，在文本开启的情况下，你可以看见你的分数并没有发生变化/


  - 自定义文本的回调


  通过 setText
  函数，在组件初次渲染和点击后时产生回调。我们默认文本以星级显示，你可以根据自己设定的文字来替换我们的默认文本，如
  “讨厌” “喜欢”
  。若用户选择分数而没有设定对应文字的情况下，系统会使用我们的默认文本

 
     
      rate.render({
        elem: '#test1'
        ,setText: function(value){
          var arrs = {
            '1': '极差'
            ,'2': '差'
            ,'3': '中等'
            ,'4': '好'
          };
          this.span.text(arrs[value] || ( value + "星"));
        }
      });
          


  当你点击 3 星时，文本内容是中等，点击 5
  星时，由于没有设定对应文字，所以文本会显示 5 星


  - 点击产生的回调


  通过 choose
  实现函数，在组件被点击后触发，回调分数，用户可根据分数来设置效果，比如出现弹出层

 
      rate.render({
        elem: '#test1'
        ,choose: function(value){
          if(value > 4) alert( '么么哒' )
        }
      });
          


  那么当你点击 5
  星或更高星级时，页面就会弹出“么么哒”啦，你可根据相应需求在 choose
  里完善你的代码


  - 结语


  评分组件非常简单，重点在于参数选项的设置，你可以前往示例页面进行更为直观的了解。






  --------------

  [[https://www.layui.com/doc/modules/rate.html]]

 
 




  <<index.html>>






  --------------

*** 通用轮播组件文档 - layui.carousel

  #+BEGIN_QUOTE
    carousel 是 layui 2.0
    版本中新增的全新模块，主要适用于跑马灯/轮播等交互场景。它并非单纯地为焦点图而生，准确地说，它可以满足任何类型内容的轮播式切换操作，更可以胜任
    FullPage （全屏上下轮播）的需求，简洁而不失强劲，灵活而优雅。
  #+END_QUOTE

  #+BEGIN_QUOTE
    模块加载名称：/carousel/
  #+END_QUOTE






  - 快速使用


  如下是几个常用的轮播示例，其中背景色是为了区分条目单独加的，在 layui 框架中并不会包含。条目区域可以放上文字列表、图片等任意内容



 



 


  条目 1


  条目 2


  条目 3


  条目 4


  条目 5




 
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>carousel模块快速使用</title>
        <link rel="stylesheet" href="/static/build/layui.css" media="all">
      </head>
      <body>
     
      <div class="layui-carousel" id="test1">
        <div carousel-item>
          <div>条目1</div>
          <div>条目2</div>
          <div>条目3</div>
          <div>条目4</div>
          <div>条目5</div>
        </div>
      </div>
      <!-- 条目中可以是任意内容，如：<img src=""> -->
     
      <script src="/static/build/layui.js"></script>
      <script>
      layui.use('carousel', function(){
        var carousel = layui.carousel;
        //建造实例
        carousel.render({
          elem: '#test1'
          ,width: '100%' //设置容器宽度
          ,arrow: 'always' //始终显示箭头
          //,anim: 'updown' //切换动画方式
        });
      });
      </script>
      </body>
      </html>


  在 HTML 结构中，只需要简单地注意这两项：
  1) 外层元素的 /class="layui-carousel"/ 用来标识为一个轮播容器
  2) 内层元素的属性 /carousel-item/ 用来标识条目

  而 /id/
  则用于 carousel 模块建造实例的元素指向，剩下的工作，就是按照你的实际需求，给方法设置不同的基础参数了。


  - 基础参数选项


  通过核心方法：/carousel.render(options)/
  来对轮播设置基础参数，也可以通过方法：/carousel.set(options)/
  来设定全局基础参数.


  | 可选项      | 说明                                                | 类型            | 默认值      |
  |-------------|-----------------------------------------------------|-----------------|-------------|
  | elem        | 指向容器选择器，如：elem: '#id'。也可以是 DOM 对象    | string/object   | 无          |
  | width       | 设定轮播容器宽度，支持像素和百分比                  | string          | '600px'     |
  | height      | 设定轮播容器高度，支持像素和百分比                  | string          | '280px'     |
  | full        | 是否全屏轮播                                        | boolean         | false       |
  | anim        | 轮播切换动画方式，可选值为：                        | string          | 'default'   |
  |             |                                                     |                 |             |
  |             | -  default（左右切换）                              |                 |             |
  |             | -  updown（上下切换）                               |                 |             |
  |             | -  fade（渐隐渐显切换）                             |                 |             |
  | autoplay    | 是否自动切换                                        | boolean         | true        |
  | interval    | 自动切换的时间间隔，单位：ms（毫秒），不能低于 800   | number          | 3000        |
  | index       | 初始开始的条目索引                                  | number          | 0           |
  | arrow       | 切换箭头默认显示状态，可选值为：                    | string          | 'hover'     |
  |             |                                                     |                 |             |
  |             | -  hover（悬停显示）                                |                 |             |
  |             | -  always（始终显示）                               |                 |             |
  |             | -  none（始终不显示）                               |                 |             |
  | indicator   | 指示器位置，可选值为：                              | string          | 'inside'    |
  |             |                                                     |                 |             |
  |             | -  inside（容器内部）                               |                 |             |
  |             | -  outside（容器外部）                              |                 |             |
  |             | -  none（不显示）                                   |                 |             |
  |             |                                                     |                 |             |
  |             |                                                   |                 |             |
  |             | 注意：如果设定了 /anim:'updown'/，该参数将无效      |                 |             |
  | trigger     | 指示器的触发事件                                    | string          | 'click'     |

  - 切换事件
  轮播的每一次切换时触发，回调函数返回一个 object 参数，携带的成员如下：
      var carousel = layui.carousel;
     
      //监听轮播切换事件
      carousel.on('change(test1)', function(obj){ //test1来源于对应HTML容器的 lay-filter="test1" 属性值
        console.log(obj.index); //当前条目的索引
        console.log(obj.prevIndex); //上一个条目的索引
        console.log(obj.item); //当前条目的元素对象
      });     
          
  - 重置轮播
  事实上，在执行 carousel.render(options) 方法时，有返回一个当前实例的对象。该对象包含了用于操作当前轮播的一些属性和方法。
      var ins = carousel.render(options);
     
      //重置轮播
      ins.reload(options);
  - 结语
  由于轮播的使用非常简单，所以本篇不做过于详细的讲解，核心在于基础参数选项的设置。你也可以前往示例页面进行更为直观的了解。
*** 流加载文档 - layui.flow
 #+BEGIN_QUOTE
   该模块包含/信息流加载/和/图片懒加载/两大核心支持，无论是对服务端、还是前端体验，都有非常大的性能帮助。你可能已经在太多的地方看到她们的身影了，但不妨现在开始，体验一下 Layui 更为简单和高效的 Flow 吧。
 #+END_QUOTE

   模块加载名称：flow
 - 使用
 flow 模块包含两个核心方法，如下所示：

     layui.use('flow', function(){
       var flow = layui.flow;
       //信息流
       flow.load(options);
      
       //图片懒加载
       flow.lazyimg(options);
     });
          


 下面将对她们进行详细介绍。
 - 信息流

 信息流即异步逐页渲染列表元素，这是你页面已经存在的一段列表，你页面初始时只显示了 6 个

       <li>1</li>
       <li>2</li>
       ……
       <li>6</li>

 你想通过加载更多来显示余下列表，那么你只需要执行方法：flow.load(options) 即可


     layui.use('flow', function(){
       var $ = layui.jquery; //不用额外加载jQuery，flow模块本身是有依赖jQuery的，直接用即可。
       var flow = layui.flow;
       flow.load({
         elem: '#demo' //指定列表容器
         ,done: function(page, next){ //到达临界点（默认滚动触发），触发下一页
           var lis = [];
           //以jQuery的Ajax请求为例，请求下一页数据（注意：page是从2开始返回）
           $.get('/api/list?page='+page, function(res){
             //假设你的列表返回在data集合中
             layui.each(res.data, function(index, item){
               lis.push(''+ item.title +'');
             }); 
            
             //执行下一页渲染，第二参数为：满足“加载更多”的条件，即后面仍有分页
             //pages为Ajax返回的总页数，只有当前页小于总页数的情况下，才会继续出现加载更多
             next(lis.join(''), page < res.pages);    
           });
         }
       });
     });
          


 上述是一个比较简单的例子，以下是信息流完整的参数支撑（即 options 对象），它们将有助于你更灵活地应对各种场景

 | 参数         | 类型       | 描述                                                                                                                                                                             |
 |--------------|------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
 | elem         | string     | 指定列表容器的选择器                                                                                                                                                             |
 | scrollElem   | string     | 滚动条所在元素选择器，默认 document。如果你不是通过窗口滚动来触发流加载，而是页面中的某一个容器的滚动条，那么通过该参数指定即可。                                                 |
 | isAuto       | boolean    | 是否自动加载。默认 true。如果设为 false，点会在列表底部生成一个“加载更多”的 button，则只能点击它才会加载下一页数据。                                                                |
 | end          | string     | 用于显示末页内容，可传入任意 HTML 字符。默认为：没有更多了                                                                                                                         |
 | isLazyimg    | boolean    | 是否开启图片懒加载。默认 false。如果设为 true，则只会对在可视区域的图片进行按需加载。但与此同时，在拼接列表字符的时候，你不能给列表中的 img 元素赋值 src，必须要用 lay-src 取代，如：   |
 |              |            |                                                                                                                                                                   |
 |              |            |                                                                                                                                                                                  |
 |              |            |     layui.each(res.data, function(index, item){                                                                                                                                  |
 |              |            |       lis.push('<li><img lay-src="'+ item.src +'"></li>');                                                                                                                       |
 |              |            |     });                                                                                                                                                                          |
 |              |            |                                                                                                                                                                                  |
 |              |            |                                                                                                                                                                    |
 | mb           | number     | 与底部的临界距离，默认 50。即当滚动条与底部产生该距离时，触发加载。注意：只有在 isAuto 为 true 时有效。                                                                             |
 |              |            | 额，等等。。mb=margin-bottom，可不是骂人的呀。                                                                                                                                   |
 | done         | function   | 到达临界点触发加载的回调。信息流最重要的一个存在。携带两个参数：                                                                                                                 |
 |              |            |                                                                                                                                                                   |
 |              |            |     done: function(page, next){                                                                                                                                                  |
 |              |            |       //请注意：layui 1.0.5 之前的版本是从第 2 页开始返回，也就是说你的第一页数据并非 done 来触发加载                                                                                |
 |              |            |       （为之前这个愚蠢的设计表示抱歉）                                                                                                                                           |
 |              |            |       //从 layui 1.0.5 的版本开始，page 是从 1 开始返回，初始时即会执行一次 done 回调。                                                                                               |
 |              |            |       //console.log(page) //获得当前页                                                                                                                                           |
 |              |            |                                                                                                                                                                                  |
 |              |            |       //执行下一页渲染，第二参数为：满足“加载更多”的条件，即后面仍有分页                                                                                                         |
 |              |            |       //只有当前页小于总页数的情况下，才会继续出现加载更多                                                                                                                       |
 |              |            |       next('列表 HTML 片段', page < res.pages);                                                                                                                                    |
 |              |            |     }                                                                                                                                                                            |
 |              |            |                                                                                                                                                                                  |
 |              |            |                                                                                                                                                                    |


 - 图片懒加载

 应该说比当前市面上任何一个懒加载的实现都更为强劲和轻量，她用不足 80 行代码巧妙地提供了一个始终加载当前屏图片的高性能方案（无论上滑还是下滑）。对你的网站因为图片可能带来的压力，可做出很好的应对。

 语法：flow.lazyimg(options)

     layui.use('flow', function(){
       var flow = layui.flow;
       //当你执行这样一个方法时，即对页面中的全部带有lay-src的img元素开启了懒加载（当然你也可以指定相关img）
       flow.lazyimg(); 
     });

 如上所述，它只会针对以下 img 元素有效：

     <img lay-src="aaa.jpg"> 
     <img src="bbb.jpg" alt="該图不会懒加载">
     <img lay-src="ccc.jpg">       

 图片懒加载的使用极其简单，其参数（options 对象）可支持的 key 如下表所示：
*** 工具集文档 - layui.util

  #+BEGIN_QUOTE
    我们将一些工具性元素放入 util
    模块中，以供选择性使用。其内部由多个小工具组件组成，他们也许不是必须的，但很多时候却能为你的页面提供良好的辅助作用。
  #+END_QUOTE

  #+BEGIN_QUOTE
    模块加载名称：util
  #+END_QUOTE

  - 固定块
  看到页面右下角的那个包含 top 的 bar 了吗？对，就是她。她通常会出现在那个固定位置，由两个可选的 bar 和一个默认必选的 TopBar 组成。

  语法：util.fixbar(options)
  其中参数 options 是一个对象，可支持的 key 如下表：
 
      layui.use('util', function(){
        var util = layui.util;
      
        //执行
        util.fixbar({
          bar1: true
          ,click: function(type){
            console.log(type);
            if(type === 'bar1'){
              alert('点击了bar1')
            }
          }
        });
      });
          

  - 倒计时


  这是一个精致的封装，它并不负责 UI 元素的呈现，而仅仅只是返回倒计时的数据，这意味着你可以将它应用在任何倒计时相关的业务中。

  语法：util.countdown(endTime, serverTime, callback)

  | 参数         | 说明                                                                                                                                                                                                 |
  |--------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
  | endTime      | 结束时间戳或 Date 对象，如：4073558400000，或：new Date(2099,1,1).                                                                                                                                     |
  | serverTime   | 当前服务器时间戳或 Date 对象                                                                                                                                                                           |
  | callback     | 回调函数。如果倒计时尚在运行，则每一秒都会执行一次。并且返回三个参数： /date/（包含天/时/分/秒的对象）、 /serverTime/（当前服务器时间戳或 Date 对象）, /timer/（计时器返回的 ID 值，用于 clearTimeout）   |

    
      #+begin_src js
      <script>
      layui.use('util', function(){
        var util = layui.util;
      
        //示例
        var endTime = new Date(2099,1,1).getTime() //假设为结束日期
        ,serverTime = new Date().getTime(); //假设为当前服务器时间，这里采用的是本地时间，实际使用一般是取服务端的
       
        util.countdown(endTime, serverTime, function(date, serverTime, timer){
          var str = date[0] + '天' + date[1] + '时' +  date[2] + '分' + date[3] + '秒';
          layui.$('#test').html('距离2099年1月1日还有：'+ str);
        });
      });
      </script>
      #+end_src
         
  - 其它方法


  | 方法                               | 说明                                                                                           |
  |------------------------------------|------------------------------------------------------------------------------------------------|
  | util.timeAgo(time, onlyDate)       | 某个时间在当前时间的多久前。                                                                 |
  |                                    | 参数 /time/：即为某个时间的时间戳或日期对象                                                  |
  |                                    | 参数 /onlyDate/：是否在超过 30 天后，只返回日期字符，而不返回时分秒                            |
  |                                    |                                                                                              |
  |                                    | 如果在 3 分钟以内，返回：/刚刚/                                                                |
  |                                    | 如果在 30 天以内，返回：/若干分钟前/、/若干小时前/、/若干天前/，如：5分钟前                    |
  |                                    | 如果在 30 天以上，返回：/日期字符/，如：2017-01-01                                               |
  | util.toDateString(time, format)    | 转化时间戳或日期对象为日期格式字符                                                           |
  |                                    | 参数 /time/：可以是日期对象，也可以是毫秒数                                                  |
  |                                    | 参数 /format/：日期字符格式（默认：yyyy-MM-dd HH:mm:ss），可随意定义，如：yyyy 年 MM 月 dd 日       |
  | util.digit(num, length)            | 数字前置补零                                                                                 |
  |                                    | 参数 /num/：原始数字                                                                         |
  |                                    | 参数 /length/：数字长度，如果原始数字长度小于 length，则前面补零，如：util.digit(7, 3) //007   |
  | util.escape(str)                   | 转义 xss 字符                                                                                |
  |                                    | 参数 /str/：任意字符                                                                           |
  | util.event(attr, obj, eventType)   | 用于更好地批量处理事件。                                                                     |
  |                                    | 参数 /attr/：绑定需要监听事件的元素属性                                                      |
  |                                    | 参数 /obj/：事件回调链                                                                       |
  |                                    | 参数 /eventType/：事件类型（默认 click）                                                     |
  |                                    |                                                                                              |
  |                                    | 示例：                                                                                         |
  |                                    |                                                                                 |
  |                                    |     HTML：                                                                                     |
  |                                    |     <button class="layui-btn" lay-active="e1">事件 1</button>                                   |
  |                                    |     <button class="layui-btn" lay-active="e2">事件 2</button>                                   |
  |                                    |     <button class="layui-btn" lay-active="e3">事件 3</button>                                   |
  |                                    |                                                                                                |
  |                                    |     JavaScript：                                                                               |
  |                                    |     <script>                                                                                   |
  |                                    |     layui.use('util', function(){                                                              |
  |                                    |       var util = layui.util;                                                                   |
  |                                    |                                                                                                |
  |                                    |       //处理属性 为 lay-active 的所有元素事件                                                  |
  |                                    |       util.event('lay-active', {                                                               |
  |                                    |         e1: function(){                                                                        |
  |                                    |           alert('触发了事件 1');                                                                |
  |                                    |         }                                                                                      |
  |                                    |         ,e2: function(){                                                                       |
  |                                    |           alert('触发了事件 2');                                                                |
  |                                    |         }                                                                                      |
  |                                    |         ,e3: function(){                                                                       |
  |                                    |           alert('触发了事件 3');                                                                |
  |                                    |         }                                                                                      |
  |                                    |       });                                                                                      |
  |                                    |     });                                                                                        |
  |                                    |     </script>                                                                                  |
  |                                    |                                                                                                |
  |                                    |                                                                                  |

  - 结语


  工具模块往往应用在边边角角，将不定期增加。
*** 代码修饰器文档 - layui.code
    code 模块通常针对于程序员，它是 layui 中一个极其轻量的组成。通俗而言，该模块就是对你的 pre 元素进行一个修饰，从而保证你展现的代码更具可读性。目前它没有对不同的语言进行颜色高亮（因为目前感觉没有太大必要，后面 layui 全面稳定后，可能会完善该功能），但这丝毫不会影响它对你带来的便捷。

  #+BEGIN_QUOTE
    模块加载名称：code
  #+END_QUOTE

  - 使用
  code 模块的使用非常简单，请直接看代码，假设你在页面有这样一段 pre 标签：
      #+begin_src html
      <pre class="layui-code">
      //代码区域
      var a = 'hello layui';
        
      #+end_src
  那么你只需要经过下面的方式：
 
      #+begin_src js
      layui.use('code', function(){ //加载code模块
        layui.code(); //引用code方法
      });
      #+end_src
          


  就可以将那段 pre 区块显示成你现在看到的这个样子：

 
      //代码区域
      var a = 'hello layui';
          





  - 基础参数



  方法：layui.code(options)
  它接受一个对象参数 options，支持以下 key 的设定

  | 参数     | 类型      | 描述                          |
  |----------|-----------|-------------------------------|
  | elem     | string    | 指定元素的选择器              |
  | title    | string    | 设定标题                      |
  | height   | string    | 设置最大高度                  |
  | encode   | boolean   | 是否转义 html 标签，默认 false   |
  | skin     | string    | 风格选择（值见下文）          |
  | about    | boolean   | 是否剔除右上关于              |

  特别提示：/除了上述方式的设置，我们还允许你直接在 pre 标签上设置属性来替代，如：/

 
      <pre class="layui-code" lay-title="" lay-height="" lay-skin="" lay-encode="">
      这样有木有觉得更方便些
       
          


  下面将针对每一个参数做进一步讲解。




  - 指定元素



  code 模块会去自动查找 class 为 layui-code 的类，如果你初始给的不是该类，仅仅只是一个 pre 标签，那么需要通过 elem 设置选择器来指向元素：

 
      layui.code({
        elem: 'pre' //默认值为.layui-code
      });
          





  - 设置标题



  即左上角显示的文本，默认值为 code

 
      layui.code({
        title: 'JavaScript'
      });
          


  或者直接在 pre 标签上设置属性<pre lay-title="JavaScript"></pre>




  - 设置最大高度



  你可以设置以下 key 来控制修饰器的最大高度。如果内容低于该高度，则会自适应内容高度；如果内容超过了该高度，则会自动出现滚动条。

 
      layui.code({
        height: '100px' //请注意必须加px。如果该key不设定，则会自适应高度，且不会出现滚动条。
      });
     
     
     
     
       Hi，我是充数的 ^_^
     
          


  或者直接在 pre 标签上设置属性<pre lay-height="100px"></pre>




  - 转义 html 标签



  事实上很多时候你都需要在 pre 标签中展现 html 标签，而不希望它被浏览器解析。那么 code 模块允许你这么做，只需要开启 encode 即可，如：

 
      layui.code({
        encode: true //是否转义html标签。默认不开启
      });
          


  开启了 encode 后的效果如下：

 
        HTML将不会被解析
        有木有感觉非常方便


          


  或者直接在 pre 标签上设置属性<pre lay-encode="true"></pre>




  - 风格选择



  你肯定不会满足于 code 的某一种显示风格，而 skin 参数则允许你设定许多种显示风格，我们目前内置了两种，分别为默认和 notepad

 
      layui.code({
        title: 'NotePad++的风格'
        ,skin: 'notepad' //如果要默认风格，不用设定该key。
      });
          
  上述的设定后，你会看到下面的样子

 
      i'm code.
      i'm code too.     
          


  或者直接在 pre 标签上设置属性<pre lay-skin="notepad"></pre>




  - 剔除关于


  如果你不喜欢出现右上角的 layui.code 字眼，你是可以剔除的。设置 about:
  false 即可，请叫我雷锋。

