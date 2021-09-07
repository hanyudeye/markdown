## 事件
### 鼠标事件
| 名称                | 含义 |
|---------------------+------|
| window.onmousewheel | 滚轮 |
|                     |      |


### 键盘事件
## 表单重复提交
- 1、js禁掉提交按钮

 表单提交后使用Javascript使提交按钮disable。这种方法防止心急的用户多次点击按钮。
 但有个问题，如果客户端把Javascript给禁止掉，这种方法就无效了。

- 2、使用 Post/Redirect/Get模式。
在提交后执行页面重定向，简言之，当用户提交了表单后，你去执行一个客户端的重定向，转到提交成功信息页面。
 这能避免用户按F5导致的重复提交，而其也不会出现浏览器表单重复提交的警告，也能消除按浏览器前进和后退按导致的同样问题。

- 3、在session中存放一个特殊标志 (token)。

 在服务器端，生成一个唯一的标识符，将它存入session，同时将它写入表单的隐藏字段中，然后将表单页面发给浏览器，用户录入信息后点击提交，在服务器端，获取表单中隐藏字段的值，与session中的唯一标识符比较，相等说明是首次提交，就处理本次请求，然后将session中的唯一标识符移除；不相等说明是重复提交，就不再处理。

 这使你的web应用有了更高级的XSRF保护。

- 4．使用header函数转向

 除了上面的方法之外，还有一个更简单的方法，那就是当用户提交表单，服务器端处理后立即转向其他的页面
```
 if (isset($_POST['action']) && $_POST['action'] == 'submitted') {
 //处理数据，如插入数据后，立即转向到其他页面
 header('location:submits_success.php');
 }
```
 这样，即使用户使用刷新键，也不会导致表单的重复提交，因为已经转向新的页面，而这个页面脚本已经不理会任何提交的数据了。

- 5.表单过期的处理

 在开发过程中，经常会出现表单出错而返回页面的时候填写的信息全部丢失的情况，为了支持页面回跳，可以通过以下两种方法实现。

 1．使用header头设置缓存控制头Cache-control。
``` php
 header('Cache-control: private, must-revalidate'); //支持页面回跳
```
 2．使用session_cache_limiter方法。
``` php
 session_cache_limiter('private, must-revalidate'); //要写在session_start方法之前
```
 下面的代码片断可以防止用户填写表单的时候，单击“提交”按钮返回时，刚刚在表单上填写的内容不会被清除：
``` php
 session_cache_limiter('nocache');
 session_cache_limiter('private');
 session_cache_limiter('public');
 session_start();
```
 //以下是表单内容，这样在用户返回该表单时，已经填写的内容不会被清空

 将该段代码贴到所要应用的脚本顶部即可。

## div+css实现简单的弹出窗（背景变灰色）
自己做了一个网站，需要用到弹出框的功能，以前没做过这个，就去网上查了下资料，然后试着写了一个最简单的弹出框效果。\\
需求：点击弹出框按钮，在原页面基础上弹出一个弹出框，并且背景要变成灰色，原页面不能被编辑知道关闭弹出框。\\
原理：在原页面的基础上添加两个div，一个是弹出框，一个是弹出框后面的背景层（页面变灰）。首先这两个div是跟原页面的代码在一起存放的，只不过使用了 =display：none=这个css属性先将其隐藏不显示，在触发弹出框效果时再使用 =display：block=让这两个div显示出来即可。\\
完整代码如下：

``` html
      
     < html>
     < head>
     < meta  http-equiv= 'Content-Type'  content= 'text/html; charset=UTF-8'>
     < title>div+css实现弹出层 title>
     < style> 

     #popBox {
          position:  absolute;
          display: none;
          width:  300px;
          height:  200px;
          left:  40%;
          top:  20%;
          z-index:  11;
          background:  #B8F764; 
     }

     #popLayer {
          position:  absolute;
          display: none;
          left:  0;
          top:  0;
          z-index:  10;
          background:  #DCDBDC;
          -moz-opacity:   0.8;
          opacity: . 80;
          filter:   alpha(opacity= 80); /* 只支持IE6、7、8、9 */
     }

     style>
     < script  type= "text/javascript"> 
          function  popBox (){
             var popBox = document.getElementById( 'popBox');
             var popLayer = document.getElementById( 'popLayer');

            popLayer.style.width = document.body.scrollWidth +  "px";
            popLayer.style.height = document.body.scrollHeight +  "px";

            popLayer.style.display =  "block";
            popBox.style.display =  "block";
        } //end func popBox()

          function  closeBox (){
             var popBox = document.getElementById( 'popBox');
             var popLayer = document.getElementById( 'popLayer');

            popLayer.style.display =  "none";
            popBox.style.display =  "none";

        } //end func closeBox()

     script>
     head>
     < body>

     < input  type= "button"  name= "popBox"  value= "弹出框"  onclick= "popBox()" />

     < div  id= "popLayer" >
        背景层  
     div>
     < div  id= "popBox" >
         < div> < a  href= "javascript:void(0)"  onclick= "closeBox()">关闭 a> div>
         < div>弹出框 div>
     div>

     body>
     html>
```

其他需要注意事项：1、两个弹出层的上下位置；2、弹出的背景层的透明设置；\\
首先，两个div都要使用 =position: absolute;=这个属性，然后使用z-index这个属性可以设置层的上下顺序，值越大越靠上显示；\\
其次，背景透明需要使用滤镜等功能，具体代码如下：\\
=-moz-opacity: 0.8;   opacity:.80;   filter: alpha(opacity=80);/* 只支持IE6、7、8、9 */=\\
3、如果页面高度超过屏幕高度，弹出的背景层只有屏幕大小，这是因为使用了position:absolute;的话高度width:100%;就无效了。解决办法，使用js获取页面的宽度和高度进行设置。


## Jquery的$.ajax防止重复提交的方法
**** 1、第一种，对于onclick事件触发的的ajax


  可以采用如下方法：\\
  即在beforeSend中使点击按钮不可用，ajax结果返回后置为可用

  #+BEGIN_EXAMPLE
          $.ajax(
          {
              type:  'POST',
              url: APP+ '?m=Shopping&a=ajaxSubmitorder&sid='+sid+ '&src='+src,
              cache: false,
              dataType:  'json',
              data: { 'src':src, "uid": uid, 'shipping_id':shipping_id, 'order_amount':order_amount, 'amount':amount, 'postscript':postscript, 'addr_id':addr_id},
              async:  false,
              beforeSend:  function ()
              {    //触发ajax请求开始时执行
                  $( '#submit_font').text( '提交订单中...');
                  $( '.pay_alipay').attr( 'onclick', 'javascript:void();'); //改变提交按钮上的文字并将按钮设置为不可点击
              },                
              success:   function  (msg, textStatus) 
              {
                   if(msg.result== 1)
                  {
                      $.Alert( '成功提交订单',  160);
                      window.location.href=APP+ '?m=Pay&a=index&sid='+ sid +  '&fuid='+ fuid +  '&parent_order_sn='+msg.parent_order_sn;
                  }
                   else
                  {
                      $.Alert(msg.msg,  160);
                      $( '#submit_font').text( '提交订单');
                      $( '.pay_alipay').attr( 'onclick', 'submitorder();'); //改变提交按钮上的文字并将按钮设置为可点击                    
                  }
              },
              error:   function  (textStatus) 
              {
                  $.Alert( '网络繁忙，请稍后再试...',  160);
                  $( '#submit_font').text( '提交订单');
                  $( '.pay_alipay').attr( 'onclick', 'submitorder();'); //改变提交按钮上的文字并将按钮设置为可点击                    
              },
              complete:   function (msg, textStatus)
              {   
                       //ajax请求完成时执行
                   if(msg.result== 1)
                  {
                      $( '#submit_font').text( '提交订单');
                      $( '.pay_alipay').attr( 'onclick', 'javascript:void();'); //改变提交按钮上的文字并将按钮设置为可以点击
                  }
              }                
          });   
  #+END_EXAMPLE

**** 2、利用jquery ajaxPrefilter中断请求


  1）Prefilters是一个预过滤器，在每个请求之前被发送和$.ajax()处理它们前处理。

  #+BEGIN_EXAMPLE
         options 是请求的选项

       originalOptions 值作为提供给Ajax方法未经修改的选项，因此，没有ajaxSettings设置中的默认值

       jqXHR 是请求的jqXHR对象
  #+END_EXAMPLE

  以上内容的核心思想是维护一个队列，发送请求时，将请求加入队列，请求响应后，从队列中清除，这就保证了在任一时刻只能有一个同样的请求发送.

  局限性：仅仅是前台防止jquery的ajax请求。对于非jquery的ajax请求，不起作用。因为使用的是jquery的ajaxPreFilter函数，仅仅对jquery的ajax请求有作用。

  2）按钮每次点击都会向后端发送请求，下面的demo实现了多次点击按钮之后，只保证最后一次点击的请求能够成功。

  #+BEGIN_EXAMPLE
       "button1">button1
      "button2">button2
      "button3">button3       
       "text/javascript"</span> src= <span class="hljs-string">"jquery.min.js"</span>>

               <span class="hljs-keyword">var</span> pendingRequests = {};
              jQuery.ajaxPrefilter( <span class="hljs-function"> <span class="hljs-keyword">function</span> <span class="hljs-params">( options, originalOptions, jqXHR )</span> {</span>
                   <span class="hljs-keyword">var</span> key = options.url;
                  console.log(key);
                   <span class="hljs-keyword">if</span> (!pendingRequests[key]) {
                      pendingRequests[key] = jqXHR;
                  } <span class="hljs-keyword">else</span>{
                       <span class="hljs-comment">//jqXHR.abort();    //放弃后触发的提交</span>
                      pendingRequests[key].abort();    <span class="hljs-comment">// 放弃先触发的提交</span>
                  }

                   <span class="hljs-keyword">var</span> complete = options.complete;
                  options.complete =  <span class="hljs-function"> <span class="hljs-keyword">function</span> <span class="hljs-params">(jqXHR, textStatus)</span> {</span>
                      pendingRequests[key] =  <span class="hljs-literal">null</span>;
                       <span class="hljs-keyword">if</span> (jQuery.isFunction(complete)) {
                      complete.apply( <span class="hljs-keyword">this</span>, arguments);
                      }
                  };
              });
              <!-- 异步加载应用列表开始 -->

              $( <span class="hljs-string">"#button1"</span>).live( <span class="hljs-string">"click"</span>,  <span class="hljs-function"> <span class="hljs-keyword">function</span> <span class="hljs-params">()</span> {</span>
                    $.ajax( <span class="hljs-string">'config/ajax/appinfoListFetcher.json'</span>, {
                      type: <span class="hljs-string">'POST'</span>,
                      data:   {param1: <span class="hljs-number">1</span>,
                               param2: <span class="hljs-number">2</span>,
                            },
                      success:  <span class="hljs-function"> <span class="hljs-keyword">function</span> <span class="hljs-params">(res)</span>{</span>
                               <span class="hljs-comment">//后端数据回写到页面中</span>
                      },
                      error: <span class="hljs-function"> <span class="hljs-keyword">function</span> <span class="hljs-params">(jqXHR, textStatus, errorThrown)</span>{</span>
                           <span class="hljs-keyword">if</span>(errorThrown !=  <span class="hljs-string">'abort'</span>){
                              alert( <span class="hljs-string">'应用加载失败！'</span>);
                          }
                      }
                    });
                    <!-- 异步加载应用列表结束 -->
               });
  #+END_EXAMPLE

  调用abort后jquery会执行error的方法，抛出abort的异常信息。可以使用以下方式区分出该类型的异常。

  *3）注意事项：对于嵌套的点击事件的代码，是不起作用的。*

  #+BEGIN_EXAMPLE
       $( '.btn-cancel-all').live( 'click',  function ()
      {
          $( '.confirm-dialog .confirm').live( 'click',  function ()
          {
              $.ajax({
                   //这里面的ajax事件是不能起作用的
              })
          }
      }
  #+END_EXAMPLE

  参考链接： [[http://www.hollischuang.com/archives/931]]

## jquery 防止重复点击提交
**** 方法一： 使用 css 禁用属性 ------ disable
       该方法只能点击一次，若想再次点击需要页面重新进行了加载或者跳转；

#+BEGIN_EXAMPLE
        $(function(){
            $('#submitBtn').on('click‘，function(){
                    $(this).attr('disabled',true); //点击后就禁用，若想再次点击需刷新页面；
                    $(this).val('登录中...');  //此处设置 value 值给以提示
                    this.form.submit();
            });
        });
#+END_EXAMPLE

**** 方法二： 使用 jquery 中 one() 方法

同样是上面 Html 例子，也是只可点击一次；再次点击需要页面重新进行了加载或者跳转；该方式是将绑定 on 方法 改为 one 方法 ，如下：

#+BEGIN_EXAMPLE
     
        $(function(){
            $('#submitBtn').one('click‘，function(){
                    $(this).attr('disabled',true); //点击后就禁用，若想再次点击需刷新页面；
                    $(this).val('登录中...');  //此处设置 value 值给以提示
                    this.form.submit();
            });
        });
#+END_EXAMPLE

**** 方法三： 针对 ajax 请求方式

异步请求更好的适应用户的体验，为防止多次提交，可在提交前做处理；

#+BEGIN_EXAMPLE
     $(function () {
        $('#submitBtn').click(function () {
            //1.先进行表单验证
            //......
            //2.异步提交
            $.ajax({
                url: url+'/login',
                data: $('form').serialize(),
                type: 'post',
                beforeSend: function () {
                    //3.设置提交按钮失效，以实现防止按钮重复点击
                    $(this).attr('disabled', true);
                    //4.给用户提示
                    $(this).val('登录中...');
                },
                complete: function () {
                    //5.提交完成后按钮重新设置有效
                    $(this).removeAttr('disabled');
                },
                success: function(data){
                    if (data === 'ok') {
                        alert('登录成功！');
                        //做逻辑处理
                        //......
                    } else {
                        alert('登录失败，请重新登录！');
                    }
                }
            }); 
        });
    });
#+END_EXAMPLE

