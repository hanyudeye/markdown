
用于简化javascript 对 Dom 的操作方式。

# jquery
## 使用
### 初始化
```
$(document).ready(function(){
});
```

## 选择器 
```
$(document)//选择整个文档对象
$('#myId')//选择ID为myId的网页元素  
$('div.myClass')//选择class为myClass的div元素    
$('input[name=first]')//选择name属性等于first的input元素
$('a:first')//选择网页中第一个a元素  
$('tr:odd')//选择表格的奇数行  
$('#myForm :input')//选择表单中的input元素  
$('div:visible') //选择可见的div元素  
$('div:gt(2)')//选择所有的div元素，除了前三个  
$('div:animated')//选择当前处于动画状态的div元素  
```  

## 改变结果集
   #+begin_src js
     $('div').has('p'); //选择包含p元素的div元素  
     $('div').not('.myClass'); //选择class不等于myClass的div元素  
     $('div').filter('.myClass'); //选择class等于myClass的div元素  
     $('div').first(); //选择第1个div元素  
     $('div').eq(5); //选择第6个div元素  
   #+end_src

   有一些时候，我们需要从结果集出发，移动到附近的相关元素，jQuery 也提供了在 DOM 树上的移动方法：
   #+begin_src js
     $('div').next('p'); //选择div元素后面的第一个p元素  
     $('div').parent(); //选择div元素的父元素  
     $('div').closest('form'); //选择离div最近的那个form父元素  
     $('div').children(); //选择div的所有子元素  
     $('div').siblings(); //选择div的同级元素  
   #+end_src

## 链式操作
   jQuery 允许将所有操作连接在一起，以链条的形式写出来，比如：
   
   #+begin_src js
     $('div').find('h3').eq(2).html('Hello');  
   #+end_src

   我们可以这样拆封开来，就是下面这样：
   #+begin_src js
     $('div')//找到div元素  
         .find('h3')//选择其中的h3元素  
         .eq(2)//选择第3个h3元素  
         .html('Hello'); //将它的内容改为Hello  
   #+end_src
   这是 jQuery 最令人称道、最方便的特点。它的原理在于每一步的 jQuery 操作，返回的都是
   一个 jQuery 对象，所以不同操作可以连在一起。

   jQuery 还提供了.end()方法，使得结果集可以后退一步：

   #+begin_src js
     $('div')  
         .find('h3')  
         .eq(2)  
         .html('Hello')  
         .end()//退回到选中所有的h3元素的那一步  
         .eq(0)//选中第一个h3元素  
         .html('World'); //将它的内容改为World  
   #+end_src

## 元素的操作：取值和赋值
   操作网页元素，最常见的需求是取得它们的值，或者对它们进行赋值。

   jQuery 使用同一个函数，来完成取值(getter)和赋值(setter)。到底是取值还是赋值，由函数的参数决定。

   #+begin_src js
     $('h1').html(); //html()没有参数，表示取出h1的值 
     $('h1').html('Hello'); //html()有参数Hello，表示对h1进行赋值  
   #+end_src
   常见的取值和赋值函数如下：

   - .html() 取出或设置 html 内容 取出某个表单元素的值  
   - .text() 取出或设置 text 内容  
   - .attr() 取出或设置某个属性的值  
   - .width() 取出或设置某个元素的宽度  
   - .height() 取出或设置某个元素的高度  
   - .val() 取出或设置 html 内容 取出某个表单元素的值  

   #+begin_quote
   需要注意的是，如果结果集包含多个元素，那么赋值的时候，将对其中所有的元素赋值;取
   值的时候，则是只取出第一个元素的值(.text()例外，它取出所有元素的 text 内容)。
   #+end_quote

## 元素的操作：移动
   如果要移动选中的元素，有两种方法：一种是直接移动该元素，另一种是移动其他元素，使得目标元素达到我们想要的位置。

   假定我们选中了一个 div 元素，需要把它移动到 p 元素后面。

   第一种方法是使用.insertAfter()，把 div 元素移动 p 元素后面：

   #+begin_src js
     $('div').insertAfter('p');
   #+end_src

   第二种方法是使用.after()，把 p 元素加到 div 元素前面：

   #+begin_src js
     $('p').after('div');
   #+end_src
 

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

       #+begin_src js
         $('<p>Hello</p>');  
         $('<li class="new">new list item</li>');  
         $('ul').append('<li>list item</li>');  
       #+end_src

       #+begin_src js
         $('select#car-brands')
             .append($('<option>')
                     .attr({ value: 'VAG' })
                     .text('Volkswagen')
                    );
       #+end_src


     #+begin_src js
       $('<input />',{
           type:"checkbox",
           name:"cbox",
           val:"1",
           checked:"checked"
       }).appendTo("body");
     #+end_src

     这种创建的方式要好一点 
     #+begin_src js
       var e = $("", { href: "#", class: "a-class another-class", title: "..." });
     #+end_src
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

     #+begin_src js
       $('input').bind(  
           'click change'， //同时绑定click和change事件  
           function(){  
               alert('Hello');  
           }  
       );  
     #+end_src


   如果你只想让事件运行一次，这时可以使用.one()方法。

   #+begin_src js
     $("p").one("click"， function(){  
         alert("Hello"); //只运行一次，以后的点击不会运行  
     });  
   #+end_src

   .unbind()用来解除事件绑定。

   #+begin_src js
     $('p').unbind('click'); 
   #+end_src

   所有的事件处理函数，都可以接受一个事件对象(event object)作为参数，比如下面例子中的 e：

   #+begin_src js
     $("p").click(function(e){  
         alert(e.type); //"click"  
     }); 
   #+end_src

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

     #+begin_src js
       $('a').click(function(){  
           if ($(this).attr('href').match('evil')){//如果确认为有害链接  
               e.preventDefault(); //阻止打开  
               $(this).addClass('evil'); //加上表示有害的class  
           }  
       });  
     #+end_src
     有两种方法，可以自动触发一个事件。一种是直接使用事件函数，另一种是使用.trigger()或.triggerHandler()。

     #+begin_src js
       $('a').click();
       $('a').trigger('click');
     #+end_src

## 特殊效果
   jQuery 允许对象呈现某些特殊效果。

   #+begin_src js
     $('h1').show(); //展现一个h1标题 
   #+end_src

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

   #+begin_src js
     $('h1').fadeIn(300); // 300毫秒内淡入  
     $('h1').fadeOut('slow'); //缓慢地淡出 
   #+end_src

   在特效结束后，可以指定执行某个函数。

   #+begin_src js
     $('p').fadeOut(300, function(){$(this).remove(); }); 
   #+end_src

   更复杂的特效，可以用.animate()自定义。

   #+begin_src js
     $('div').animate(  
         {  
             left : "+=50"，//不断右移  
             opacity : 0.25 //指定透明度  
         },
         300,// 持续时间  
         function(){ alert('done!'); }//回调函数  
     ); 
   #+end_src

   - .stop()和.delay()用来停止或延缓特效的执行。
   - $.fx.off 如果设置为 true，则关闭所有网页特效。
## ajax  
### $.ajax
    形式：$.ajax({name:val, name:val,...});
#### 例子   
     #+begin_src js
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
     #+end_src
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
    
    #+begin_src js
    $.post(
    "/greet",
    {name: 'Brad'},
    function(data) {
        ...
    },
    "json"
);
    #+end_src

### $.get()
    形式：$.get(url, data, func, dataType);

### $.getJSON()
该方法使用GET方式执行Ajax请求，从服务器加载JSON格式数据。
形式：$.getJSON(url, data, func);

### $.load()
该方法将服务器加载的数据直接插入到指定DOM中。
形式：$.load(url, data, func);
其中data如果存在则使用POST方式发送请求，不存在则使用GET方式发送请求。

## Dom 对象 与 jQuery 对象转换
   #+begin_src js
     var $v =$("#v");    //jQuery 对象
     var v=$v[0];       //DOM 对象 
     var v=$v.get(0);   //DOM 对象 
   #+end_src

   
