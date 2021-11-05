http://hemin.cn/jq/

# jQuery
> **JavaScript** 对 DOM 选择的语法糖 

## 核心
- jQuery 核心函数
- jQuery([sel,[context]])
- jQuery(html,[ownerDoc])1.8*
- jQuery(callback)
- jQuery.holdReady(hold)
- jQuery 对象访问
- each(callback)
- size()
- length
- selector
- context
- get([index])
- index([selector|element])
- 数据缓存
- data([key],[value])
- removeData([name|list])1.7*
- $.data(ele,[key],[val])1.8-
- 队列控制
- queue(e,[q])
- dequeue([queueName])
- clearQueue([queueName])
- 插件机制
- jQuery.fn.extend(object)
- jQuery.extend(object)
- 多库共存
- jQuery.noConflict([ex])

## 选择器 
``` js
$(document)//选择整个文档对象
$('#myId')//选择ID为myId的网页元素  
$('div.myClass')//选择class为myClass的div元素    
$('tagA,tagB,tagC')//选择3个
$('input[name=first]')//选择name属性等于first的input元素
$('a:first')//选择网页中第一个a元素  
$('tr:odd')//选择表格的奇数行  
$('tag:nth-child(n)')
$('#myForm :input')//选择表单中的input元素  
$('div:visible') //选择可见的div元素  
$('div:gt(2)')//选择所有的div元素，除了前三个  
$('div:animated')//选择当前处于动画状态的div元素  
```  


### 基本
- #id
- element
- .class
- *
- selector1,selector2,selectorN
### 层级
- ancestor(祖先) descendant(后代)
- parent > child
- prev + next
- prev ~ siblings(兄弟)
### 基本筛选器
- :first
- :not(selector)
- :even
- :odd
- :eq(index)
- :gt(index)
- :lang1.9+
- :last
- :lt(index)
- :header
- :animated
- :focus
- :root1.9+
- :target1.9+
### 内容
- :contains(text)
- :empty
- :has(selector)
- :parent
### 可见性
- :hidden
- :visible
### 属性
- [attribute]
- [attribute=value]
- [attribute!=value]
- [attribute^=value]
- [attribute$=value]
- [attribute*=value]
- [attrSel1][attrSel2][attrSelN]
### 子元素
- :first-child
- :first-of-type1.9+
- :last-child
- :last-of-type1.9+
- :nth-child
- :nth-last-child()1.9+
- :nth-last-of-type()1.9+
- :nth-of-type()1.9+
- :only-child
- :only-of-type1.9+
### 表单
- :input
- :text
- :password
- :radio
- :checkbox
- :submit
- :image
- :reset
- :button
- :file
### 表单对象属性
- :enabled
- :disabled
- :checked
- :selected
### 混淆选择器
- $.escapeSelector(selector)
- 
## 改变结果集
``` js
$('div').has('p'); //选择包含p元素的div元素  
$('div').not('.myClass'); //选择class不等于myClass的div元素  
$('div').filter('.myClass'); //选择class等于myClass的div元素  
$('div').first(); //选择第1个div元素  
$('div').eq(5); //选择第6个div元素  
```

有一些时候，我们需要从结果集出发，移动到附近的相关元素，jQuery 也提供了在 DOM 树上的移动方法：
``` js
$('div').next('p'); //选择div元素后面的第一个p元素  
$('div').parent(); //选择div元素的父元素  
$('div').closest('form'); //选择离div最近的那个form父元素  
$('div').children(); //选择div的所有子元素  
$('div').siblings(); //选择div的同级元素  
```

## 链式操作
jQuery 允许将所有操作连接在一起，以链条的形式写出来，比如：

   ``` js
     $('div').find('h3').eq(2).html('Hello');  
   ```

我们可以这样拆封开来，就是下面这样：
   ``` js
   $('div')//找到div元素  
   .find('h3')//选择其中的h3元素  
   .eq(2)//选择第3个h3元素  
   .html('Hello'); //将它的内容改为Hello  
   ```
   这是 jQuery 最令人称道、最方便的特点。它的原理在于每一步的 jQuery 操作，返回的都是
   一个 jQuery 对象，所以不同操作可以连在一起。

jQuery 还提供了.end()方法，使得结果集可以后退一步：

   ``` js
     $('div')  
         .find('h3')  
         .eq(2)  
         .html('Hello')  
         .end()//退回到选中所有的h3元素的那一步  
         .eq(0)//选中第一个h3元素  
         .html('World'); //将它的内容改为World  
   ```

## 元素的操作：取值和赋值
操作网页元素，最常见的需求是取得它们的值，或者对它们进行赋值。

jQuery 使用同一个函数，来完成取值(getter)和赋值(setter)。到底是取值还是赋值，由函数的参数决定。

   ``` js
     $('h1').html(); //html()没有参数，表示取出h1的值 
     $('h1').html('Hello'); //html()有参数Hello，表示对h1进行赋值  
   ```
   常见的取值和赋值函数如下：

- .html() 取出或设置 html 内容 取出某个表单元素的值  
- .text() 取出或设置 text 内容  
- .attr() 取出或设置某个属性的值  
- .width() 取出或设置某个元素的宽度  
- .height() 取出或设置某个元素的高度  
- .val() 取出或设置 html 内容 取出某个表单元素的值  


>   需要注意的是，如果结果集包含多个元素，那么赋值的时候，将对其中所有的元素赋值;取
>   值的时候，则是只取出第一个元素的值(.text()例外，它取出所有元素的 text 内容)。

## 元素的操作：移动
如果要移动选中的元素，有两种方法：一种是直接移动该元素，另一种是移动其他元素，使得目标元素达到我们想要的位置。

假定我们选中了一个 div 元素，需要把它移动到 p 元素后面。

第一种方法是使用.insertAfter()，把 div 元素移动 p 元素后面：

   ``` js
     $('div').insertAfter('p');
   ```

第二种方法是使用.after()，把 p 元素加到 div 元素前面：

   ``` js
     $('p').after('div');
   ```
   

表面上看，这两种方法的效果是一样的，唯一的不同似乎只是操作视角的不同。但是实际上，它们有一个重大差别，那就是返回的元素不一样。第一种方法返回 div 元素，第二种方法返回 p 元素。你可以根据需要，选择到底使用哪一种方法。

使用这种模式的操作方法，一共有四对

- .insertAfter()和.after()：在现存元素的外部，从后面插入元素  
- .insertBefore()和.before()：在现存元素的外部，从前面插入元素  
- .appendTo()和.append()：在现存元素的内部，从后面插入元素  
- .prependTo()和.prepend() ：在现存元素的内部，从前面插入元素

## 元素的操作：复制、删除和创建

     - 复制元素使用.clone()。
     - 删除元素使用.remove()和.detach()。两者的区别在于，前者不保留被删除元素的事件，后者保留，有利于重新插入文档时使用。
     - 清空元素内容(但是不删除该元素)使用.empty()。
     - 创建新元素的方法非常简单，只要把新元素直接传入 jQuery 的构造函数就行了：

       ``` js
         $('<p>Hello</p>');  
         $('<li class="new">new list item</li>');  
         $('ul').append('<li>list item</li>');  
       ```

       ``` js
         $('select#car-brands')
             .append($('<option>')
                     .attr({ value: 'VAG' })
                     .text('Volkswagen')
                    );
       ```


     ``` js
       $('<input />',{
           type:"checkbox",
           name:"cbox",
           val:"1",
           checked:"checked"
       }).appendTo("body");
     ```

     这种创建的方式要好一点 
     ``` js
       var e = $("", { href: "#", class: "a-class another-class", title: "..." });
     ```
## 工具方法
   除了对选中的元素进行操作以外，jQuery 还提供一些工具方法(utility)，不必选中元素，就可以直接使用。

   如果你懂得 Javascript 语言的继承原理，那么就能理解工具方法的实质。它是定义在 jQuery 构造函数上的方法，即 jQuery.method()，所以可以直接使用。而那些操作元素的方法，是定义在构造函数的 prototype 对象上的方法，即 jQuery.prototype.method()，所以必须生成实例(即选中元素)后使用。如果不理解这种区别，问题也不大，只要把工具方法理解成，是像 javascript 原生函数那样，可以直接使用的方法就行了。

   常用的工具方法有以下几种：

   - $.trim() 去除字符串两端的空格。  
   - $.each() 遍历一个数组或对象。  
   - $.inArray() 返回一个值在数组中的索引位置。如果该值不在数组中，则返回-1。  
   - $.grep() 返回数组中符合某种标准的元素。   
   - $.extend() 将多个对象，合并到第一个对象。   
   - $.makeArray() 将对象转化为数组。  
   - $.type() 判断对象的类别（函数对象、日期对象、数组对象、正则对象等等）。  
   - $.isArray() 判断某个参数是否为数组。  
   - $.isEmptyObject() 判断某个对象是否为空（不含有任何属性）。  
   - $.isFunction() 判断某个参数是否为函数。  
   - $.isPlainObject() 判断某个参数是否为用"{}"或"new Object"建立的对象。  
   - $.support() 判断浏览器是否支持某个特性。  

## 事件操作
   jQuery 可以对网页元素绑定事件。根据不同的事件，运行相应的函数。

   目前，jQuery 主要支持以下事件：

   - .blur() 表单元素失去焦点。  
   - .change() 表单元素的值发生变化  
   - .click() 鼠标单击  
   - .dblclick() 鼠标双击  
   - .focus() 表单元素获得焦点  
   - .focusin() 子元素获得焦点  
   - .focusout() 子元素失去焦点  
   - .hover() 同时为 mouseenter 和 mouseleave 事件指定处理函数  
   - .keydown() 按下键盘（长时间按键，只返回一个事件）  
   - .keypress() 按下键盘（长时间按键，将返回多个事件）  
   - .keyup() 松开键盘  
   - .load() 元素加载完毕  
   - .mousedown() 按下鼠标  
   - .mouseenter() 鼠标进入（进入子元素不触发）  
   - .mouseleave() 鼠标离开（离开子元素不触发）  
   - .mousemove() 鼠标在元素内部移动  
   - .mouseout() 鼠标离开（离开子元素也触发）  
   - .mouseover() 鼠标进入（进入子元素也触发）  
   - .mouseup() 松开鼠标  
   - .ready() DOM 加载完成  
   - .resize() 浏览器窗口的大小发生改变  
   - .scroll() 滚动条的位置发生变化  
   - .select() 用户选中文本框中的内容  
   - .submit() 用户递交表单  
   - .toggle() 根据鼠标点击的次数，依次运行多个函数  
   - .unload()  用户离开页面  

     以上这些事件在 jQuery 内部，都是.bind()的便捷方式。使用.bind()可以更灵活地控制事件，比如为多个事件绑定同一个函数：

     ``` js
       $('input').bind(  
           'click change'， //同时绑定click和change事件  
           function(){  
               alert('Hello');  
           }  
       );  
     ```


   如果你只想让事件运行一次，这时可以使用.one()方法。

   ``` js
     $("p").one("click"， function(){  
         alert("Hello"); //只运行一次，以后的点击不会运行  
     });  
   ```

   .unbind()用来解除事件绑定。

   ``` js
     $('p').unbind('click'); 
   ```

   所有的事件处理函数，都可以接受一个事件对象(event object)作为参数，比如下面例子中的 e：

   ``` js
     $("p").click(function(e){  
         alert(e.type); //"click"  
     }); 
   ```

   这个事件对象有一些很有用的属性和方法：

   - event.pageX 事件发生时，鼠标距离网页左上角的水平距离
   - event.pageY 事件发生时，鼠标距离网页左上角的垂直距离
   - event.type 事件的类型(比如 click)
   - event.which 按下了哪一个键
   - event.data 在事件对象上绑定数据，然后传入事件处理函数
   - event.target 事件针对的网页元素
   - event.preventDefault() 阻止事件的默认行为(比如点击链接，会自动打开新页面)
   - event.stopPropagation() 停止事件向上层元素冒泡

     在事件处理函数中，可以用 this 关键字，返回事件针对的 DOM 元素：

     ``` js
       $('a').click(function(){  
           if ($(this).attr('href').match('evil')){//如果确认为有害链接  
               e.preventDefault(); //阻止打开  
               $(this).addClass('evil'); //加上表示有害的class  
           }  
       });  
     ```
     有两种方法，可以自动触发一个事件。一种是直接使用事件函数，另一种是使用.trigger()或.triggerHandler()。

     ``` js
       $('a').click();
       $('a').trigger('click');
     ```

## 特殊效果
   jQuery 允许对象呈现某些特殊效果。

   ``` js
     $('h1').show(); //展现一个h1标题 
   ```

   常用的特殊效果如下：

   - .fadeIn() 淡入
   - .fadeOut() 淡出
   - .fadeTo() 调整透明度
   - .hide() 隐藏元素
   - .show() 显示元素
   - .slideDown() 向下展开
   - .slideUp() 向上卷起
   - .slideToggle() 依次展开或卷起某个元素
   - .toggle() 依次展示或隐藏某个元素


   除了.show()和.hide()，所有其他特效的默认执行时间都是 400ms(毫秒)，但是你可以改变这个设置。

   ``` js
     $('h1').fadeIn(300); // 300毫秒内淡入  
     $('h1').fadeOut('slow'); //缓慢地淡出 
   ```

   在特效结束后，可以指定执行某个函数。

   ``` js
     $('p').fadeOut(300, function(){$(this).remove(); }); 
   ```

   更复杂的特效，可以用.animate()自定义。

   ``` js
     $('div').animate(  
         {  
             left : "+=50"，//不断右移  
             opacity : 0.25 //指定透明度  
         },
         300,// 持续时间  
         function(){ alert('done!'); }//回调函数  
     ); 
   ```

   - .stop()和.delay()用来停止或延缓特效的执行。
   - $.fx.off 如果设置为 true，则关闭所有网页特效。
## ajax  
### $.ajax
    形式：$.ajax({name:val, name:val,...});
#### 例子   
     ``` js
       $.ajax({
           type: 'POST',
           url: '/process/submit.php',
           data: {
               name : 'John',
               location : 'Boston',
           },
       }).then(function(msg) {
           alert('Data Saved: ' + msg);
       }).catch(function(xmlHttpRequest, statusText, errorThrown) {
           alert(
               'Your form submission failed.\n\n'
                   + 'XML Http Request: ' + JSON.stringify(xmlHttpRequest)
                   + ',\nStatus Text: ' + statusText
                   + ',\nError Thrown: ' + errorThrown);
       });
     ```
     
    ``` js
    
    $.ajax({
      url: file.url,
      data: formData,
      processData: false,
      contentType: false,
      type: 'POST',
      headers: {
        'X-File-Name': encodeURIComponent(file.name)
      },
      xhr: function() {
        var req;
        req = $.ajaxSettings.xhr();
        if (req) {
          req.upload.onprogress = (function(_this) {
            return function(e) {
              return _this.progress(e);
            };
          })(this);
        }
        return req;
      },
      progress: (function(_this) {
        return function(e) {
          if (!e.lengthComputable) {
            return;
          }
          return _this.trigger('uploadprogress', [file, e.loaded, e.total]);
        };
      })(this),
      error: (function(_this) {
        return function(xhr, status, err) {
          return _this.trigger('uploaderror', [file, xhr, status]);
        };
      })(this),
      success: (function(_this) {
        return function(result) {
          _this.trigger('uploadprogress', [file, file.size, file.size]);
          _this.trigger('uploadsuccess', [file, result]);
          return $(document).trigger('uploadsuccess', [file, result, _this]);
        };
      })(this),
      complete: (function(_this) {
        return function(xhr, status) {
          return _this.trigger('uploadcomplete', [file, xhr.responseText]);
        };
      })(this)
    });
  };


    
    ``` 
#### 可选字段：
 1）url：链接地址，字符串表示
 2）data：需发送到服务器的数据，GET与POST都可以，格式为{A: '...', B: '...'}
 3）type："POST" 或 "GET"，请求类型
 4）timeout：请求超时时间，单位为毫秒，数值表示
 5）cache：是否缓存请求结果，bool表示
 6）contentType：内容类型，默认为"application/x-www-form-urlencoded"
 7）dataType：服务器响应的数据类型，字符串表示；当填写为json时，回调函数中无需再对数据反序列化为json
 8）success：请求成功后，服务器回调的函数
 9）error：请求失败后，服务器回调的函数
 10）complete：请求完成后调用的函数，无论请求是成功还是失败，都会调用该函数；如果设置了success与error函数，则该函数在它们之后被调用
 11）async：是否异步处理，bool表示，默认为true；设置该值为false后，JS不会向下执行，而是原地等待服务器返回数据，并完成相应的回调函数后，再向下执行
 12）username：访问认证请求中携带的用户名，字符串表示
 13）password：返回认证请求中携带的密码，字符串表示
### $.post
    该方法使用POST方式执行Ajax请求，从服务器加载数据。

    形式：$.post(url, data, func, dataType);

    可选参数：
    1）url：链接地址，字符串表示
    2）data：需要发送到服务器的数据，格式为{A: '...', B: '...'}
    3）func：请求成功后，服务器回调的函数；function(data, status, xhr)，其中data为服务器回传的数据，status为响应状态，xhr为XMLHttpRequest对象，个人感觉关注data参数即可
    4）dataType：服务器返回数据的格式
    
    ``` js
    $.post(
    "/greet",
    {name: 'Brad'},
    function(data) {
        ...
    },
    "json"
);
    ```

### $.get()
    形式：$.get(url, data, func, dataType);

### $.getJSON()
该方法使用GET方式执行Ajax请求，从服务器加载JSON格式数据。
形式：$.getJSON(url, data, func);

### $.load()
该方法将服务器加载的数据直接插入到指定DOM中。
形式：$.load(url, data, func);
其中data如果存在则使用POST方式发送请求，不存在则使用GET方式发送请求。

### $(selector).serialize()

## Dom 对象 与 jQuery 对象转换
   ``` js
     var $v =$("#v");    //jQuery 对象
     var v=$v[0];       //DOM 对象 
     var v=$v.get(0);   //DOM 对象 
   ```

   
##  jQuery获取和设置checkbox的checked属性小结
今天写静态页面，需要拿jquery去控制checkbox的check属性，开始用的attr，每次设置完成后，点开f12观察elements，后面每次，无论怎么点击checkbox，它的checked属性都是选中的，于是上网查找，得以解决，下面是是转载的内容

在jquery里，有两种操作元素属性的方法，一种是attr()，另一种是prop()。

attr()的属性在页面首次加载时就确定。当页面初始状态checkbox没有选中，("#cb1").attr("checked")为undefined，点击选中后，还是undefined，不管选中与否(“#cb1”).attr(“checked”)始终都是undefined；当页面初试状态checkbox选中，$(“#cb1”).attr(“checked”)为checked，之后取消选中还是checked。

prop()方法随checked属性改变而改变，选中时为true，为选中时为false。

最后，总结下获取和设置checked属性的方法。

得到选中属性
$("#id").prop("checked")
$("#id").get(0).checked)
document.getElementById("#id").checked
$("#id").is(":checked")

设置选中
$("#id").prop("checked",true)
$("#id").get(0).checked = true

document.getElementById("#id").checked = true

* 实用 jQuery 代码
** 2. 重用你的元素查询
   #+begin_src js
     var allItems = $("div.item");  
     var keepList = $("div#container1 div.item");
     $(formToLookAt + " input:checked").each(function() {     keepListkeepList = keepList.filter("." + $(this).attr("name")); });
   #+end_src
     
** 3. 使用 has()来判断一个元素是否包含特定的 class 或者元素
   #+begin_src js
     $("input").has(".email").addClass("email_icon");
   #+end_src
    
** 4. 使用 jQuery 切换样式
   #+begin_src js
     //Look for the media-type you wish to switch then set the href to your new style sheet  
     $('link[media='screen']').attr('href', 'Alternative.css');
   #+end_src
    
** 5. 限制选择的区域
   #+begin_src html
     <ul id="shopping_cart_items">  
       <li>  
         <input value="Item-X" name="item" class="is_in_stock" type="radio"> Item X</li>  
       <li>  
         <input value="Item-Y" name="item" class="3-5_days" type="radio"> Item Y</li>  
       <li>  
         <input value="Item-Z" name="item" class="unknown" type="radio"> Item Z</li>  
     </ul>
   #+end_src
   #+begin_src js
     //Where possible, pre-fix your class names with a tag name  
     //so that jQuery doesn't have to spend more time searching  
     //for the element you're after. Also remember that anything  
     //you can do to be more specific about where the element is  
     //on your page will cut down on execution/search times  
     var in_stock = $('#shopping_cart_items input.is_in_stock');
   #+end_src
     
** 6. 如何正确使用 ToggleClass
   #+begin_src js
     //Toggle class allows you to add or remove a class  
     //from an element depending on the presence of that  
     //class. Where some developers would use:  
     a.hasClass('blueButton') ? a.removeClass('blueButton') : a.addClass('blueButton');  
     //toggleClass allows you to easily do this using  
     a.toggleClass('blueButton');
   #+end_src
     
** 7. 设置 IE 指定的功能
   #+begin_src js
     if ($.browser.msie) { // Internet Explorer is a sadist. }
   #+end_src
    
** 8. 使用 jQuery 来替换一个元素
   #+begin_src js
     $('#thatdiv').replaceWith('fnuh');
   #+end_src
** 9. 验证一个元素是否为空
   #+begin_src js
     if ($('#keks').html()) { //Nothing found ;}
   #+end_src
** 10. 在无序的 set 中查找一个元素的索引
   #+begin_src js
     $("ul > li").click(function () {  
         var index = $(this).prevAll().length;  
     });
   #+end_src
** 14. 使用过滤器过滤多属性
   #+begin_src js
     var elements = $('#someid input[type=sometype][value=somevalue]').get();
   #+end_src
** 15. 使用 jQuery 预加载图片
   #+begin_src js
     jQuery.preloadImages = function() { for(var i = 0; i').attr('src', arguments[i]); } };  
     // Usage $.preloadImages('image1.gif', '/path/to/image2.png', 'some/image3.jpg');
   #+end_src
** 16. 设置任何匹配一个选择器的事件处理程序
   #+begin_src js
     $('button.someClass').live('click', someFunction);
     //Note that in jQuery 1.4.2, the delegate and undelegate options have been
     //introduced to replace live as they offer better support for context
     //For example, in terms of a table where before you would use..
     // .live()
     $("table").each(function(){
         $("td", this).live("hover", function(){
             $(this).toggleClass("hover");
         });
     });
     //Now use..
     $("table").delegate("td", "hover", function(){
         $(this).toggleClass("hover");
     });
   #+end_src
** 17. 找到被选择到的选项(option)元素
   #+begin_src js
     $('#someElement').find('option:selected');
   #+end_src
** 18. 隐藏包含特定值的元素
   #+begin_src js
     $("p.value:contains('thetextvalue')").hide();
   #+end_src
** 19. 自动的滚动到页面特定区域
   #+begin_src js
     jQuery.fn.autoscroll = function(selector) {
         $('html,body').animate(
             {scrollTop: $(selector).offset().top},
             500
         );
     }
     //Then to scroll to the class/area you wish to get to like this:
     $('.area_name').autoscroll();
   #+end_src
** 20. 检测各种浏览器
   #+begin_src js
     Detect Safari (if( $.browser.safari)),
     Detect IE6 and over (if ($.browser.msie && $.browser.version > 6 )),
     Detect IE6 and below (if ($.browser.msie && $.browser.version <= 6 )),
     Detect FireFox 2 and above (if ($.browser.mozilla && $.browser.version >= '1.8' ))
   #+end_src
** 21. 替换字符串中的单词
   #+begin_src js
     var el = $('#id');
     el.html(el.html().replace(/word/ig, ''));
   #+end_src
** 22. 关闭右键的菜单
   #+begin_src js
     $(document).bind('contextmenu',function(e){ return false; });
   #+end_src
** 23. 定义一个定制的选择器
   #+begin_src js
     $.expr[':'].mycustomselector = function(element, index, meta, stack){
         // element- is a DOM element
         // index - the current loop index in stack
         // meta - meta data about your selector
         // stack - stack of all elements to loop
         // Return true to include current element
         // Return false to explude current element
     };
     // Custom Selector usage:
     $('.someClasses:test').doSomething();
   #+end_src
** 24. 判断一个元素是否存在
   #+begin_src js
     if ($('#someDiv').length) {//hooray!!! it exists...}
   #+end_src
** 25. 使用 jQuery 判断鼠标的左右键点击
   #+begin_src js
     $("#someelement").live('click', function(e) {
         if( (!$.browser.msie && e.button == 0) || ($.browser.msie && e.button == 1) ) {
             alert("Left Mouse Button Clicked");
         }
         else if(e.button == 2)
             alert("Right Mouse Button Clicked");
     });
   #+end_src
** 26. 显示或者删除输入框的缺省值
   #+begin_src js
     //This snippet will show you how to keep a default value
     //in a text input field for when a user hasn't entered in
     //a value to replace it
     swap_val = [];
     $(".swap").each(function(i){
         swap_val[i] = $(this).val();
         $(this).focusin(function(){
             if ($(this).val() == swap_val[i]) {
                 $(this).val("");
             }
         }).focusout(function(){
             if ($.trim($(this).val()) == "") {
                 $(this).val(swap_val[i]);
             }
         });
     });
   #+end_src

   <input class="swap" type="text" value="Enter Username here.." />
** 27. 指定时间后自动隐藏或者关闭元素(1.4 支持）
   #+begin_src js
     //Here's how we used to do it in 1.3.2 using setTimeout
     setTimeout(function() {
         $('.mydiv').hide('blind', {}, 500)
     }, 5000);
     //And here's how you can do it with 1.4 using the delay() feature (this is a lot like sleep)
     $(".mydiv").delay(5000).hide('blind', {}, 500);
   #+end_src
** 28. 动态创建元素到 DOM
   #+begin_src js
     var newgbin1Div = $('');
     newgbin1Div.attr('id','gbin1.com').appendTo('body');
   #+end_src
** 29. 限制 textarea 的字符数量
   #+begin_src js
     jQuery.fn.maxLength = function(max){
         this.each(function(){
             var type = this.tagName.toLowerCase();
             var inputType = this.type? this.type.toLowerCase() : null;
             if(type == "input" && inputType == "text" || inputType == "password"){
                 //Apply the standard maxLength
                 this.maxLength = max;
             }
             else if(type == "textarea"){
                 this.onkeypress = function(e){
                     var ob = e || event;
                     var keyCode = ob.keyCode;
                     var hasSelection = document.selection? document.selection.createRange().text.length > 0 : this.selectionStart != this.selectionEnd;
                     return !(this.value.length >= max && (keyCode > 50 || keyCode == 32 || keyCode == 0 || keyCode == 13) && !ob.ctrlKey && !ob.altKey && !hasSelection);
                 };
                 this.onkeyup = function(){
                     if(this.value.length > max){
                         this.value = this.value.substring(0,max);
                     }
                 };
             }
         });
     };
     //Usage:
     $('#gbin1textarea').maxLength(500);
   #+end_src
** 30. 为函数创建一个基本测试用例
   #+begin_src js
     //Separate tests into modules.
     module("Module B");
     test("some other gbin1.com test", function() {
         //Specify how many assertions are expected to run within a test.
         expect(2);
         //A comparison assertion, equivalent to JUnit's assertEquals.
         equals( true, false, "failing test" );
         equals( true, true, "passing test" );
     });
   #+end_src
** 31. 使用 jQuery 克隆元素
   #+begin_src js
     var cloned = $('#gbin1div').clone();
   #+end_src
** 32. 测试一个元素在 jQuery 中是否可见
   #+begin_src js
     if($(element).is(':visible') == 'true') { //The element is Visible }
   #+end_src
** 33. 元素屏幕居中
   #+begin_src js
     jQuery.fn.center = function () {
         this.css('position','absolute');
         this.css('top', ( $(window).height() - this.height() ) / +$(window).scrollTop() + 'px');
         this.css('left', ( $(window).width() - this.width() ) / 2+$(window).scrollLeft() + 'px');return this;
     }
     //Use the above function as: $('#gbin1div').center();
     34. 使用特定名字的元素对应的值生成一个数组
     var arrInputValues = new Array();
     $("input[name='table[]']").each(function(){
         arrInputValues.push($(this).val());
     });
   #+end_src
** 35. 剔除元素中的 HTML
   #+begin_src js
     (function($) {
         $.fn.stripHtml = function() {
             var regexp = /<("[^"]*"|'[^']*'|[^'">])*>/gi;
             this.each(function() {
                 $(this).html(
                     $(this).html().replace(regexp,"")
                 );
             });
             return $(this);
         }
     })(jQuery);
     //usage:
     $('p').stripHtml();
   #+end_src
** 36. 使用 closest 来得到父元素
   #+begin_src js
     $('#searchBox').closest('div');
   #+end_src
** 37. 使用 firebug 来记录 jQuery 事件
   #+begin_src js
     // Allows chainable logging
     // Usage: $('#someDiv').hide().log('div hidden').addClass('someClass');
     jQuery.log = jQuery.fn.log = function (msg) {
         if (console){
             console.log("%s: %o", msg, this);
         }
         return this;
     };
   #+end_src
** 38. 点击链接强制弹出新窗口
   #+begin_src js
     jQuery('a.popup').live('click', function(){
         newwindow=window.open($(this).attr('href'),'','height=200,width=150');
         if (window.focus) {newwindow.focus()}
         return false;
     });
   #+end_src
** 39. 点击链接强制打开新标签页
   #+begin_src js
     jQuery('a.newTab').live('click', function(){
         newwindow=window.open($(this).href);
         jQuery(this).target = "_blank";
         return false;
     });
   #+end_src
** 40. 使用 siblings()来处理同类元素
   #+begin_src js
     // Rather than doing this
     $('#nav li').click(function(){
         $('#nav li').removeClass('active');
         $(this).addClass('active');
     });
     // Do this instead
     $('#nav li').click(function(){
         $(this).addClass('active').siblings().removeClass('active');
     });
   #+end_src
** 41. 选择或者不选页面上全部复选框
   #+begin_src js
     var tog = false; // or true if they are checked on load
     $('a').click(function() {
         $("input[type=checkbox]").attr("checked",!tog);
         tog = !tog;
     });
   #+end_src
** 42. 基于输入文字过滤页面元素
   #+begin_src js
     //If the value of the element matches that of the entered text
     //it will be returned
     $('.gbin1Class').filter(function() {
         return $(this).attr('value') == $('input#gbin1Id').val() ;
     })
   #+end_src
** 43. 取得鼠标的 X 和 Y 坐标
   #+begin_src js
     $(document).mousemove(function(e){
         $(document).ready(function() {
             $().mousemove(function(e){
                 $('#XY').html("Gbin1 X Axis : " + e.pageX + " | Gbin1 Y Axis " + e.pageY);
             });
         });
   #+end_src
** 44. 使得整个列表元素(LI)可点击
   #+begin_src js
     $("ul li").click(function(){
         window.location=$(this).find("a").attr("href"); return false;
     });
   #+end_src
** 45. 使用 jQuery 来解析 XML
   #+begin_src js
     function parseXml(xml) {
         //find every Tutorial and print the author
         $(xml).find("Tutorial").each(function()
                                      {
                                          $("#output").append($(this).attr("author") + "");
                                      });
     }
   #+end_src
** 46. 判断一个图片是否加载完全
   #+begin_src js
     $('#theGBin1Image').attr('src', 'image.jpg').load(function() {
         alert('This Image Has Been Loaded');
     });
   #+end_src
** 47. 使用 jQuery 命名事件
   #+begin_src js
     //Events can be namespaced like this
     $('input').bind('blur.validation', function(e){
         // ...
     });
     //The data method also accept namespaces
     $('input').data('validation.isValid', true);
   #+end_src
** 48. 判断 cookie 是否激活或者关闭
   #+begin_src js
     var dt = new Date();
     dt.setSeconds(dt.getSeconds() + 60);
     document.cookie = "cookietest=1; expires=" + dt.toGMTString();
     var cookiesEnabled = document.cookie.indexOf("cookietest=") != -1;
     if(!cookiesEnabled)
     {
         //cookies have not been enabled
     }
   #+end_src
** 49. 强制过期 cookie
   #+begin_src js
     var date = new Date();
     date.setTime(date.getTime() + (x * 60 * 1000));
     $.cookie('example', 'foo', { expires: date });
   #+end_src
** 50. 使用一个可点击的链接替换页面中所有 URL
   #+begin_src js
     $.fn.replaceUrl = function() {
         var regexp = /((ftp|http|https)://(w+:{0,1}w*@)?(S+)(:[0-9]+)?(/|/([w#!:.?+=&%@!-/]))?)/gi;
     this.each(function() {
         $(this).html(
             $(this).html().replace(regexp,'<a href="$1">$1</a>')
         );
     });
     return $(this);
     }
     //usage
     $('#GBin1div').replaceUrl();
   #+end_src
** 51: 在表单中禁用“回车键”
   大家可能在表单的操作中需要防止用户意外的提交表单，那么下面这段代码肯定非常有帮助：
   #+begin_src js
     $("#form").keypress(function(e) {
         if (e.which == 13) {
             return false;
         }
     });
   #+end_src
** 52: 清除所有的表单数据
   可能针对不同的表单形式，你需要调用不同类型的清楚方法，不过使用下面这个现成方法，绝对能让你省不少功夫。
   #+begin_src js
     function clearForm(form) {
         // iterate over all of the inputs for the form
         // element that was passed in
         $(':input', form).each(function() {
             var type = this.type;
             var tag = this.tagName.toLowerCase(); // normalize case
             // it's ok to reset the value attr of text inputs,
             // password inputs, and textareas
             if (type == 'text' || type == 'password' || tag == 'textarea')
                 this.value = "";
             // checkboxes and radios need to have their checked state cleared
             // but should *not* have their 'value' changed
             else if (type == 'checkbox' || type == 'radio')
                 this.checked = false;
             // select elements need to have their 'selectedIndex' property set to -1
             // (this works for both single and multiple select elements)
             else if (tag == 'select')
                 this.selectedIndex = -1;
         });
     };
   #+end_src
** 53: 将表单中的按钮禁用

   下面的代码对于 ajax 操作非常有用，你可以有效的避免用户多次提交数据，个人也经常使用：
   #+begin_src js
     $("#somebutton").attr("disabled", true);//禁用按钮
     $("#submit-button").removeAttr("disabled");//启动按钮
   #+end_src
   可能大家往往会使用.attr(‘disabled’,false);，不过这是不正确的调用。
** 54: 输入内容后启用递交按钮
   这个代码和上面类似，都属于帮助用户控制表单递交按钮。使用这段代码后，递交按钮只有在用户输入指定内容后才可以启动。
   #+begin_src js
     $('#username').keyup(function() {
         $('#submit').attr('disabled', !$('#username').val()); 
     });
   #+end_src
** 55: 禁止多次递交表单
   多次递交表单对于 web 应用来说是个比较头疼的问题，下面的代码能够很好的帮助你解决这个问题：
   #+begin_src js
     $(document).ready(function() {
         $('form').submit(function() {
             if(typeof jQuery.data(this, "disabledOnSubmit") == 'undefined') {
                 jQuery.data(this, "disabledOnSubmit", { submited: true });
                 $('input[type=submit], input[type=button]', this).each(function() {
                     $(this).attr("disabled", "disabled");
                 });
                 return true;
             }
             else
             {
                 return false;
             }
         });
     });
   #+end_src
** 56: 高亮显示目前聚焦的输入框标示
   有时候你需要提示用户目前操作的输入框，你可以使用下面代码高亮显示标示：
   #+begin_src js
     $("form :input").focus(function() {
         $("label[for='" + this.id + "']").addClass("labelfocus");
     }).blur(function() {
         $("label").removeClass("labelfocus");
     });
   #+end_src
** 57: 动态方式添加表单元素
   这个方法可以帮助你动态的添加表单中的元素，比如，input 等：
   #+begin_src js
     //change event on password1 field to prompt new input
     $('#password1').change(function() {
         //dynamically create new input and insert after password1
         $("#password1").append("<input id="password2" name="password2" type="text" />");
     });
   #+end_src
** 自动将数据导入 selectbox 中

   下面代码能够使用 ajax 数据自动生成选择框的内容
   #+begin_src js
     $(function(){
         $("select#ctlJob").change(function(){
             $.getJSON("/select.php",{id: $(this).val(), ajax: 'true'}, function(j){
                 var options = '';
                 for (var i = 0; i < j.length; i++) {
                     options += '' + j[i].optionDisplay + '';
                 }
                 $("select#ctlPerson").html(options);
             })
         })
     })
   #+end_src
** 59: 判断一个复选框是否被选中
   #+begin_src js
     $('#checkBox').attr('checked');
   #+end_src
** 60: 使用代码来递交表单
   #+begin_src js
   $("#myform").submit();
   #+end_src

* [[http://jquery.cuishifeng.cn/index.html][速查表]]
** 选择符 
   | 选择符              | 匹配                                                     |
   | *                   | 所有元素                                                 |
   | #id                 | 带有给定 ID 的元素                                       |
   | element             | 给定类型的所有元素，比如说 html 标签                     |
   | .class              | 带有给定类的所有元素                                     |
   | a,b                 | 匹配 a 或者匹配 b 的元素                                 |
   | a b                 | 作为 a 后代的匹配 b 的元素（包括孙子辈的）               |
   | a > b               | 作为 a 子元素的匹配 b 的元素（只包括儿子辈）             |
   | :first              | 结果集中的第一个元素                                     |
   | :last               | 结果集中的最后一个元素                                   |
   | :not(a)             | 结果集中与 a 不匹配的所有元素                            |
   | :even               | 结果集中的偶数元素（从 0 开始计数）                      |
   | :odd                | 结果集中的奇数元素（从 0 开始计数）                      |
   | :eq(index)          | 结果集中索引为 index 的元素（从 0 开始计数）             |
   | :gt(index)          | 结果集中所有位于给定索引之后的元素（从 0 开始计数）      |
   | :lt(index)          | 结果集中所有位于给定索引之前的元素（从 0 开始计数）      |
   | :header            | 标题元素（<h1><h2>）                                     |
   | :animated          | 其动画正在播放的元素                                     |
   | :contains(text)    | 包含给定文本 text 的元素                                 |
   | :empty              | 不包含子节点的元素                                       |
   | :has(a)             | 后代元素中至少有一个匹配 a 的元素                        |
   | :parent             | 当前元素的直接父元素                                     |
   | :hidden             | 隐藏的元素，包括通过 css 隐藏以及<input type="hidden" /> |
   | :visible            | 与:hidden 匹配的元素相反                                |
   | [attr]              | 带有属性 attr 的元素                                     |
   | [attr=value]        | attr 属性的值为 value 的元素                             |
   | [attr!=value]       | attr 属性的值不为 value 的元素                           |
   | [attr^=value]       | attr 属性的值以 value 开头的元素                         |
   | [attr$=value]       | attr 属性的值以 value 结尾的元素                         |
   | [attr*=value]       | attr 属性的值包含字符串 value 的元素                     |
   | :nth-child(index)   | 匹配集合中每个元素的第 index 个子元素（从 1 开始计数）   |
   | :nth-child(even)    | 匹配集合中每个元素的排在偶数位的子元素（从 1 开始计数）  |
   | :nth-child(formula) | Formula 是个公式，格式为 an+b，a、b 为整数               |
   | :first-child        | 匹配集合中每个元素的第一个子元素                         |
   | :last-child         | 匹配集合中每个元素的最后一个子元素                       |
   | :only-child         | 匹配集合中每个元素的惟一子元素,如果不唯一,则不执行       |
   | :input              | 所有<input><select><textarea>和<button>元素              |
   | :text               | Type＝“text”的<input>元素                              |
   | :password           | Type＝“password”的<input>元素                          |
   | :radio              | Type=“radio”的<input>元素                              |
   | :checkbox           | Type＝“checkbox”的<input>元素                          |
   | :submit             | Type＝“submit”的<input>元素                            |
   | :image              | Type＝“image”的<input>元素                             |
   | :reset              | Type＝“reset”的<input>元素                             |
   | :button             | Type＝“button”的<input>元素及<button>元素              |
   | :file               | Type＝“file”的<input>元素                              |
   | :enabled            | 启用的表单元素                                           |
   | :disabled           | 禁用的表单元素                                           |
   | :checked            | 选中的复选框和单选按钮元素                               |
   | :selected           | 选中的<option>元素                                       |
** 遍历方法
   |遍历方法| 返回值的 jQuery 对象包含|
   |.filter(selector)| 与给定的选择符匹配的选中元素|
   |.filter(callback)| 回调函数 callback 返回 true 的选中元素|
   |.eq(index)| 从 0 开始计数的第 index 个选中元素|
   |.slice(start,[end])| 从 0 开始计数的给定范围的选中元素|
   |.not(selector)| 与给定的选择符不匹配的选中元素|
   |.add(selector)| 选中元素再加上与给定选择符匹配的元素|
   |.find(selector)| 与给定选择符匹配的后代元素|
   |.contents| 子节点，包括文本节点|
   |.children([selector])| 匹配选择符的子节点|
   |.next([selector])| 每个选中元素的下一个匹配选择符的同辈元素|
   |.nextAll([selector])| 每个选中元素之后的所有匹配选择符的同辈元素|
   |.prev([selector])| 每个选中元素的上一个匹配选择符的同辈元素|
   |.prevAll([selector])| 每个选中元素之后的所有匹配选择符的同辈元素|
   |.siblings([selector])| 匹配选择符的所有同辈元素|
   |.parent([selector])| 每个选中元素的匹配选择符的父元素|
   |.parents([selector])| 每个选中元素的匹配选择符的所有祖先元素|
   |.offsetParent()| 第一个选中元素被定位的父元素(用 relative 或者 absolute 定位)|
   |.andSelf()| 选中元素再加上内部 jQuery 栈中之前选中的元素|
   |.end()| 内部 jQuery 栈中之前选中的元素|
   |.map(callback)| 对每个选中元素调用回调函数 callback 之后的结果|
** 事件方法
   | 事件方法                     | 说明                                                       |
   | .ready(fun)                  | 绑定在 DOM 和 CSS 完全加载后调用的处理程序 fun             |
   | .bind(type,[data],fun)       | 绑定在给定类型的事件 type 发送到元素时调用的处理程序 fun   |
   | .one(type,[data],fun)        | fun 方法只执行一次                                         |
   | .unbind(type,[fun])          | 解除元素上绑定的处理程序                                   |
   | .live(type,fun)              | 绑定当给定事件发送到元素后调用的处理程序，动态生成使用这个 |
   | .die(type,[fun])             | 移除前面通过 live()绑定到元素上的处理程序                  |
   | .blur(fun)                   | 失去焦点事件                                               |
   | .change(fun)                 | 当前值改变事件                                             |
   | .click(fun)                  | 点击事件                                                   |
   | .dbclick(fun)                | 双击事件                                                   |
   | .error(fun)                  | 错误事件                                                   |
   | .focus(fun)                  | 获取键盘焦点事件                                           |
   | .keydown(fun)                | 获取键盘焦点且有键被按下事件                               |
   | .keypress(fun)               | 获取键盘焦点且有按键事件发生事件                           |
   | .keyup(fun)                  | 获取键盘焦点且有键被释放事件                               |
   | .load(fun)                   | 元素加载完成事件                                           |
   | .mousedown(fun)              | 按下鼠标键事件                                             |
   | .mouseenter(fun)             | 鼠标指针进入元素事件，不受事件冒泡影响                     |
   | .mouseleave(fun)             | 鼠标指针离开元素事件，不受事件冒泡影响                     |
   | .mousemove(fun)              | 移动鼠标指针事件                                           |
   | .mouseout(fun)               | 鼠标指针离开事件                                           |
   | .mouseover(fun)              | 鼠标指针进入事件                                           |
   | .mouseup(fun)                | 鼠标指针释放事件                                           |
   | .resize(fun)                 | 调整元素大小事件                                           |
   | .scroll(fun)                 | 元素滚动位置改变事件                                       |
   | .select(fun)                 | 文本被选中事件                                             |
   | .submit(fun)                 | 提交事件                                                   |
   | .unload(fun)                 | 元素从内存被卸载后调用事件                                 |
   | .hover(enter,leave)          | 进入执行 enter，离开执行 leave                             |
   | .toggle(fun1,fun2)           | 顺序执行事件，来回循环                                     |
   | .trigger(type,[data])        | 触发元素事件，并执行该事件默认操作                         |
   | .triggerHandler(type,[data]) | 触发元素事件，不执行该事件默认操作                         |
   | .blur()                      | 触发 blur 事件，下面道理一样，方法变动                     |
   | .change()                    |                                                            |
   | .click()                     | ...                                                        |
   | .dbclick()                   | ...                                                        |
   | .error()                     | ...                                                        |
   | .focus()                     | ...                                                        |
   | .keydown()                   | ...                                                        |
   | .keypress()                  | ...                                                        |
   | .keyup()                     | ...                                                        |
   | .select()                    | ...                                                        |
   | .submit()                    | ...                                                        |
** 效果方法
   | 效果方法                          | 说明                                 |
   | .show()                           | 显示                                 |
   | .hide()                           | 隐藏                                 |
   | .show(speed,[callback])           | 显示速度                             |
   | .hide(speed,[callback])           | 隐藏速度                             |
   | .toggle(speed,[callback])         | 显示或者隐藏                         |
   | .slideDown(speed,[callback])      | 滑入显示                             |
   | .slideUp(speed,[callback])        | 滑出显示                             |
   | .slideToggle(speed,[callback])    | 滑动显示或者隐藏                     |
   | .fadeIn(speed,[callback])         | 淡入显示                             |
   | .fadeOut(speed,[callback])        | 淡入隐藏                             |
   | .fadeTo(speed,opacity,[callback]) | 匹配调整元素的不透明度               |
   | .animate(attr,[speed],[easing])   | 针对指定的 css 属性执行自定义动画    |
   | .animate(attr,options)            | 动画队列                             |
   | .stop([clearQueue],[jumpToEnd])   | 停止当前播放动画，然后启动排列的动画 |
   | .queue()                          | 取得第一个匹配元素上的动画队列       |
   | .queue(callback)                  | 动画队列最后添加函数                 |
   | .queue(newQueue)                  | 新队列替换原队列                     |
   | .dequeue()                        | 执行队列中的下一个动画               |
** 方法                        
   | 方法                        | 说明                                                          |
   | .attr(key)                  | 获取属性 key 的值                                             |
   | .attr(key,value)            | 设置属性 key 的值为 value                                     |
   | .attr(key,fun)              | 设置属性 key 的值为 fun 函数的返回值                          |
   | .attr(map)                  | 根据传入的键值对参数设置属性的值                              |
   | .removeAttr(key)            | 移除属性 key                                                  |
   | .addClass(class)            | 添加 css 样式                                                 |
   | .removeClass(class)         | 移除 css 样式                                                 |
   | .toggleClass(class)         | 不存在就添加，存在就删除 css                                  |
   | .hasClass(class)            | 匹配元素至少有一个包含传入的类，就返回 true                   |
   | .html()                     | 取得第一个匹配元素的 html 内容                                |
   | .html(value)                | 将每个匹配元素的 html 内容设置为传入的 value                  |
   | .text()                     | 取得所有匹配元素的文本内容，返回一个字符串                    |
   | .text(value)                | 设置每个匹配元素的文本内容为 value                            |
   | .val()                      | 取得第一个匹配元素的 value 属性的值                           |
   | .val(value)                 | 设置每个匹配元素的 value 属性值为传入的 value                 |
   | .css(key)                   | 取得 css 属性的 key 的值                                      |
   | .css(key,value)             | 设置 css 属性的 key 值为传入的 value                          |
   | .css(map)                   | 根据传入的键值对参数设置 css 属性的值                         |
   | .offset()                   | 取得第一个匹配元素相对于适口的上左坐标值（单位为像素）        |
   | .position()                 | 取得第一个匹配元素相对于.offsetParent()返回元素的上、左坐标值 |
   | .scrollTop()                | 取得第一个匹配元素的垂直滚动位置                              |
   | .scrollTop(value)           | 设置每个匹配元素的垂直滚动位置为传入的 vlaue                  |
   | .scrollLeft()               | 取得第一个匹配元素的水平滚动位置                              |
   | .scrollLeft(value)          | 设置每个匹配元素的水平滚动位置为传入的 vlaue                  |
   | .height()                   | 取得第一个匹配元素的高度                                      |
   | .height(value)              | 设置每个匹配元素的高度为传入的 value                          |
   | .width()                    | 取得第一个匹配元素的宽度                                      |
   | .width(value)               | 设置每个匹配元素的宽度为传入的 value                          |
   | .innerHeight()              | 取得第一个匹配元素的包含内边距但不包含边框的高度              |
   | .innerWidth()               | 取得第一个匹配元素的包含内边距但不包含边框的宽度              |
   | .outerHeight(includeMargin) | 取得第一个匹配元素的包含内边距、边框及可选的外边距的高度      |
   | .outWidth(includeMargin)    | 取得第一个匹配元素的包含内边距、边框及可选的外边距的宽度      |
   | .append(content)            | 在每个匹配元素内部的末尾插入 content                          |
   | .appendTo(selector)         | 将匹配的元素插入到 selector 选择符匹配的元素内部的末尾        |
   | .prepend(content)           | 在每个匹配元素内部的开头插入 content                          |
   | .prependTo(selector)        | 将匹配的元素插入到 selector 选择符匹配的元素内部的开头        |
   | .after(content)             | 在每个匹配元素的后面插入 content                              |
   | .insertAfter(selector)      | 将匹配元素插入到 selector 选择符匹配的元素的后面              |
   | .before(content)            | 在每个匹配元素的前面插入 content                              |
   | .insertBefore(selector)     | 将匹配元素插入到 selector 选择符匹配的元素的前面              |
   | .wrap(content)              | 将匹配的每个元素包装在 content 中                             |
   | .wrapAll(content)           | 将匹配的所有元素作为一个单元包装在 content 中                 |
   | .wrapInner(content)         | 将匹配的每个元素内部的内容包装在 content 中                   |
   | .replaceWith(content)       | 将匹配的元素替换成 content                                    |
   | .replaceAll(selector)       | 将 selector 选择符匹配的元素替换成匹配的元素                  |
   | .empty()                    | 移除每个匹配元素的子节点                                      |
   | .remove([selector])         | 从 dom 中移除匹配的节点，可以通过 selector 筛选               |
   | .clone([withHandlers])      | 返回所有匹配元素的副本                                        |
   | .data(key)                  | 取得与第一个匹配元素关联的 key 键的数据项                     |
   | .data(key,value)            | 设置与每个匹配元素关联的 key 键的数据项为 value               |
   | .removeData(key)            | 移除与每个匹配元素关联的 key 键的数据项                       |
** AJAX方法
   | AJAX 方法                                  | 说明                                                    |
   | $.ajax(options)                            | 使用传入的 options 生成一次 ajax 请求                   |
   | .load(url,[data],[callback])               | 向传入的 url 生成一次 ajax 请求，然后将响应放入匹配元素 |
   | $.get(url,[data],[callback],[returnType])  | 使用 get 方法向传入的 url 生成一次 ajax 请求            |
   | $.getJSON(url,[data],[callback])           | 向传入的 url 生成一次请求，将响应作为 json 数据结构解析 |
   | $.getScript(url,[callback])                | 向传入的 url 生成一次请求，将响应作为 js 脚本执行       |
   | $.post(url,[data],[callback],[returnType]) | 使用 post 方法向传入的 url 生成一次 ajax 请求           |
   | .ajaxComplete(handler)                     | 绑定当任意 ajax 事务完成后调用 fun                      |
   | .ajaxError(handler)                        | 绑定当任意 ajax 事务发生错误时调用 fun                  |
   | .ajaxSend(handler)                         | 绑定当任意 ajax 事务开始时调用 fun                      |
   | .ajaxStart(handler)                        | 绑定当任意 ajax 事务开始没有其他事务还在活动时调用 fun  |
   | .ajaxStop(handler)                         | 绑定当任意 ajax 事务结束没有其他事务还在活动时调用 fun  |
   | .ajaxSuccess(handler)                      | 绑定当任意 ajax 事务成功完成时调用的程序                |
   | $.ajaxSetup(options)                       | 为后续的 ajax 事务设置默认选项                          |
   | .serialize()                               | 将一组表单控件的值编码为一个查询字符串                  |
   | .serializeArray()                          | 将一组表单控件的值编码为一个 json 数据结构              |
   | $.param(map)                               | 将任意值的映射编码为一个查询字符串                      |
** 方法或属性                     
   | 方法或属性                    | 说明                                                   |
   | $.support                     | 返回一个属性的映射，表示浏览器是否支持各种特性和标准   |
   | $.each(collection,callback)   | 迭代遍历集合，针对集合中的每一项执行回调函数           |
   | $.extend(target,addition,...) | 扩展 target 对象，即将后面传入对象的属性添加入这个对象 |
   | $.makeArray(object)           | 将对象转换为一个数组                                   |
   | $.map(array,callback)         | 针对数组中每一项执行回调函数，返回新数组               |
   | $.inArray(value,array)        | 确定数组 array 中是否包含值 value                      |
   | $.merge(array1,array2)        | 合并两个数组                                           |
   | $.unique(array)               | 从数组中移除重复的 dom 元素                            |
   | $.isFunction(object)          | 确定对象是否一个函数                                   |
   | $.trim(String)                | 从字符串末尾移除空白符                                 |
   | $.noConflict([extreme])       | 让渡$符号使用权，恢复使用 jquery 标识符                |
   | .hasClass(className)          | 确定匹配元素是否包含给定的类                           |
   | .is(selector)                 | 确定是否有匹配元素与给定的选择符表达式匹配             |
   | .each(callback)               | 迭代遍历匹配元素，针对每个元素执行回调函数             |
   | .length                       | 取得匹配元素的个数                                     |
   | .get()                        | 取得与匹配元素对应的 dom 节点的数组                    |
   | .get(index)                   | 取得匹配元素中与传入的索引值对应的 dom 节点            |
   | .index(element)               | 取得给定 dom 节点在匹配元素集合中的索引值              |

## 获取表单数据
``` js 
 var form = new FormData();
  form.append("username","zxj");
  form.append("password",123456);
```

还能提交文件

``` js  
var form = new FormData(document.getElementById("tf"));
```

## ajax 提交的两种方式
``` html
   <form id="formAddHandlingFee" name="formAddHandlingFee" enctype="multipart/form-data" onsubmit="AddHandlingFeeToRefund()">
```

方法1
``` js 
function AddHandlingFeeToRefund()
        {
            var AjaxURL= "../OrderManagement/AjaxModifyOrderService.aspx";      
            alert($('#formAddHandlingFee').serialize());
                $.ajax({
                    type: "POST",
                    dataType: "html",
                    url: AjaxURL + '?Action=' + 'SubmitHandlingFee' + '&OrderNumber=' + $.trim($("#<%=this.txtOrderNumber.ClientID %>").val()),
                    data: $('#formAddHandlingFee').serialize(),
                    success: function (result) {
                        var strresult=result;
                        alert(strresult);
                        //加载最大可退金额
                        $("#spanMaxAmount").html(strresult);
                    },
                    error: function(data) {
                        alert("error:"+data.responseText);
                     }

                });
        }

```

方法2

``` js 
        //ajax提交form表单的方式
        $('#formAddHandlingFee').submit(function() {
            var AjaxURL= "../OrderManagement/AjaxModifyOrderService.aspx";      
            alert($('#formAddHandlingFee').serialize());
                $.ajax({
                    type: "POST",
                    dataType: "html",
                    url: AjaxURL + '?Action=' + 'SubmitHandlingFee' + '&OrderNumber=' + $.trim($("#<%=this.txtOrderNumber.ClientID %>").val()),
                    data: $('#formAddHandlingFee').serialize(),
                    success: function (data) {
                        var strresult=data;
                        alert(strresult);
                        //加载最大可退金额
                        $("#spanMaxAmount").html(strresult);
                    },
                    error: function(data) {
                        alert("error:"+data.responseText);
                     }
                });

               //非常重要
               return false;
        }

    );
```
## 获取文件上传内容
``` js
$("#fileUpload").change(function () {
    console.log($("#fileUpload")[0].files);
});

```

## ajax 文件上传
>form 表单需要设置 enctype="multipart/form-data" 属性

### 1：没使用插件，单个文件的上传（注意：ajax实现文件上传的话用到的是：绝对路径） ###

``` html
<!DOCTYPE html> 
<html> 
<head lang="en"> 
 <meta charset="UTF-8"> 
 <script src="https://cdn.bootcss.com/jquery/1.10.2/jquery.min.js"></script> 
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
```

### 2：Ajax实现多文件的上传 （这个是多选上传，关键是multiple="multiple"这个属性，另外使用的接口也是多文件上传的接口） ###

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

## 代码小片段
### 置顶
``` html
<a href="javascript:;" onclick="$('html,body').animate({scrollTop: '0px'}, 800)" class="btn_top">TOP ↑</a>
```



## 方法
### animate 动画

