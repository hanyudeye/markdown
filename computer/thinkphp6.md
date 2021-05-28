# thinkphp6
## config (设置)
### environment-variables
think\facade\Env
```
Env::get('database.username');
```
### config-file
think\facade\Config;
```
 Config::get('app.app_name');
 Config::has('route.route_rule_merge');
```
      
### system-config-files
| 文件           | 配置                     |
| -------------- | ------------------------ |
| app.php        | 'show_error_msg' => true |
| cache.php      |                          |
| console.php    |                          |
| cookie.php     |                          |
| database.php   |                          |
| filesystem.php |                          |
| lang.php       |                          |
| log.php        |                          |
| middleware.php | 中间件配置               |
| route.php      |                          |
| session.php    |                          |
| trace.php      |                          |
| view.php       | 视图配置                 |

  
## 路由 (指针)
### 路由
路由地址不能跨__应用__（除非采用重定向路由） 
    
路由定义文件
![](image/computer/language/php/Snipaste_2021-05-27_16-18-39.png)

路由定义     
![](image/computer/language/php/Snipaste_2021-05-27_16-22-05.png)

关闭路由
```
// 关闭应用的路由功能
'with_route' =>false,
```

### 路由定义
```
Route::get('new/<id>','News/read'); // 定义GET请求路由规则
Route::post('new/<id>','News/update'); // 定义POST请求路由规则
Route::put('new/:id','News/update'); // 定义PUT请求路由规则
Route::delete('new/:id','News/delete'); // 定义DELETE请求路由规则
Route::any('new/:id','News/read'); // 所有请求都支持的路由规则
```
规则表达式
```
Route::rule('/', 'index'); // 首页访问路由
Route::rule('my', 'Member/myinfo'); // 静态地址路由
Route::rule('blog/:id', 'Blog/read'); // 静态地址和动态地址结合
Route::rule('new/:year/:month/:day', 'News/read'); // 静态地址和动态地址结合
Route::rule(':user/:blog_id', 'Blog/read'); // 全动态地址
```
### 路由地址
#### 路由到控制器/操作
![](image/computer/language/php/Snipaste_2021-05-27_16-55-04.png)
#### 路由到类的方法
![](image/computer/language/php/Snipaste_2021-05-27_16-56-48.png)
#### 重定向路由
```
Route::redirect('blog/:id', 'http://blog.thinkphp.cn/read/:id', 302);
```
#### 路由到模板
```
// 路由到模板文件
Route::view('hello/:name', 'index/hello');
```


### 资源路由
![](image/computer/language/php/Snipaste_2021-05-27_16-59-46.png)
### 路由绑定
  可以使用路由绑定简化 URL 或者路由规则的定义
#### 绑定到控制器/操作


#### 绑定到命名空间
## 控制器
### 控制器定义
控制器后缀
![](image/computer/language/php/Snipaste_2021-05-27_17-04-35.png)

渲染输出
> halt('输出测试');

### 资源控制器

资源控制器可以让你轻松的创建RESTFul资源控制器，可以通过命令行生成需要的资源控制器，例如生成index应用的Blog资源控制器使用：

php think make:controller index@Blog
或者使用完整的命名空间生成

php think make:controller app\index\controller\Blog
如果只是用于接口开发，可以使用

php think make:controller index@Blog --api
然后你只需要为资源控制器注册一个资源路由：

Route::resource('blog', 'Blog');
设置后会自动注册7个路由规则，对应资源控制器的7个方法，更多内容请参考资源路由章节。

## 请求
### 请求对象 
操作方法注入
```
<?php
namespace app\index\controller;
use think\Request;

class Index
{
    
    public function index(Request $request)
    {
		return $request->param('name');
    }    
}
```

助手函数
```
<?php

namespace app\index\controller;


class Index
{

    public function index()
    {
        return request()->param('name');
    }
}
```
### 请求信息
#### 请求信息

``` 
use think\facade\Request;
// 获取完整URL地址 不带域名
Request::url();
// 获取完整URL地址 包含域名
Request::url(true);
// 获取当前URL（不含QUERY_STRING） 不带域名
Request::baseFile();
// 获取当前URL（不含QUERY_STRING） 包含域名
Request::baseFile(true);
// 获取URL访问根地址 不带域名
Request::root();
// 获取URL访问根地址 包含域名
Request::root(true);
```

#### 获取当前控制器/操作
Request::controller();
Request::action();

如果使用了多应用模式，可以通过下面的方法来获取当前应用
```
app('http')->getName();
```

  可以通过请求对象获取当前请求的控制器/操作名。

  | 方法           | 含义                 |
  |----------------+----------------------|
  | =controller=   | 当前请求的控制器名   |
  | =action=       | 当前请求的操作名     |

  获取当前控制器

       Request : : controller ( ) ;

  返回的是控制器的驼峰形式（首字母大写），和控制器类名保持一致（不含后缀）。

  如果需要返回小写可以使用

       Request : : controller ( true ) ;

  如果要返回小写+下划线的方式，可以使用

        parse_name (Request : : controller ( ) ) ;

  获取当前操作

       Request : : action ( ) ;

  返回的是当前操作方法的实际名称，如果需要返回小写可以使用

       Request : : action ( true ) ;

  如果要返回小写+下划线的方式，可以使用

        parse_name (Request : : action ( ) ) ;

  如果使用了多应用模式，可以通过下面的方法来获取当前应用

        app ( 'http' ) - > getName ( ) ;

### 输入变量


  可以通过 =Request=对象完成全局输入变量的检测、获取和安全过滤，支持包括 =$_GET=、 =$_POST=、 =$_REQUEST=、 =$_SERVER=、 =$_SESSION=、 =$_COOKIE=、 =$_ENV=等系统变量，以及文件上传信息。

  为了方便说明，本篇内容的所有示例代码均使用 =Facade=方式，因此需要首先引入

       use think\facade\Request ;

  如果你使用的是依赖注入，请自行调整代码为动态调用即可。

  主要内容包括：

  -  [[calibre_link-106][检测变量是否设置]]
  -  [[calibre_link-107][变量获取]]
  -  [[calibre_link-108][默认值]]
  -  [[calibre_link-109][变量过滤]]
  -  [[calibre_link-110][获取部分变量]]
  -  [[calibre_link-111][变量修饰符]]
  -  [[calibre_link-112][中间件变量]]
  -  [[calibre_link-113][助手函数]]

#### 检测变量是否设置


  可以使用 =has=方法来检测一个变量参数是否设置，如下：

       Request : : has ( 'id' , 'get' ) ;
      Request : : has ( 'name' , 'post' ) ;

  变量检测可以支持所有支持的系统变量，包括 =get/post/put/request/cookie/server/session/env/file=。

#### 变量获取
     变量获取使用 =\think\Request=类的如下方法及参数：


##### 变量类型方法('变量名/变量修饰符','默认值','过滤方法')

   变量类型方法包括：

   | 方法         | 描述                             |
   |--------------+----------------------------------|
   | param        | 获取当前请求的变量               |
   | get          | 获取 $_GET 变量                  |
   | post         | 获取 $_POST 变量                |
   | put          | 获取 PUT 变量                    |
   | delete       | 获取 DELETE 变量                 |
   | session      | 获取 SESSION 变量                |
   | cookie       | 获取 $_COOKIE 变量              |
   | request      | 获取 $_REQUEST 变量             |
   | server       | 获取 $_SERVER 变量              |
   | env          | 获取 $_ENV 变量                 |
   | route        | 获取 路由（包括 PATHINFO） 变量   |
   | middleware   | 获取 中间件赋值/传递的变量       |
   | file         | 获取 $_FILES 变量               |

##### 获取 =PARAM=变量


  =PARAM=类型变量是框架提供的用于自动识别当前请求的一种变量获取方式，是系统推荐的获取请求参数的方法，用法如下：

        // 获取当前请求的name变量
      Request : : param ( 'name' ) ;
       // 获取当前请求的所有变量（经过过滤）
      Request : : param ( ) ;
       // 获取当前请求未经过滤的所有变量
      Request : : param ( false ) ;
       // 获取部分变量
      Request : : param ( [ 'name' ,  'email' ] ) ;


    =param=方法会把当前请求类型的参数和路由变量以及 GET 请求合并，并且路由变量是优先的。
  

  其它的输入变量获取方法和 =param=方法用法基本一致。

  你无法使用 #get 方法获取路由变量#，例如当访问地址是

       http : / /localhost /index .php /index /index /hello /name /thinkphp

  下面的用法是错误的

       echo Request : : get ( 'name' ) ;  // 输出为空

  正确的用法是

       echo Request : : param ( 'name' ) ;  // 输出thinkphp


    除了 =server=和 =env=方法的变量名不区分大小写（会自动转为大写后获取），其它变量名区分大小写。
  

#### 默认值
  获取输入变量的时候，可以支持默认值，例如当 URL 中不包含 =$_GET['name']=的时候，使用下面的方式输出的结果比较。

  Request : : get ( 'name' ) ;  // 返回值为null
  Request : : get ( 'name' , '' ) ;  // 返回值为空字符串
  Request : : get ( 'name' , 'default' ) ;  // 返回值为default

  前面提到的方法都支持在第二个参数中传入默认值的方式。

#### 变量过滤



    框架默认没有设置任何全局过滤规则，你可以在 =app\Request=对象中设置 =filter=全局过滤属性：
  

       namespace app ;

      class  Request extends   \think \Request
       {
          protected $filter  =  [ 'htmlspecialchars' ] ;
       }

  也支持使用 =Request=对象进行全局变量的获取过滤，过滤方式包括函数、方法过滤，以及 PHP 内置的 Types of filters，我们可以设置全局变量过滤方法，支持设置多个过滤方法，例如：

       Request : : filter ( [ 'strip_tags' , 'htmlspecialchars' ] ) ,

  也可以在获取变量的时候添加过滤方法，例如：

       Request : : get ( 'name' , '' , 'htmlspecialchars' ) ;  // 获取get变量 并用htmlspecialchars函数过滤
      Request : : param ( 'username' , '' , 'strip_tags' ) ;  // 获取param变量 并用strip_tags函数过滤
      Request : : post ( 'name' , '' , 'org\Filter::safeHtml' ) ;  // 获取post变量 并用org\Filter类的safeHtml方法过滤

  可以支持传入多个过滤规则，例如：

       Request : : param ( 'username' , '' , 'strip_tags,strtolower' ) ;  // 获取param变量 并依次调用strip_tags、strtolower函数过滤

  如果当前不需要进行任何过滤的话，可以使用

        // 获取get变量 并且不进行任何过滤 即使设置了全局过滤
      Request : : get ( 'name' ,  '' ,  null ) ;


    对于 body 中提交的 =json=对象，你无需使用 =php://input=去获取，可以直接当做表单提交的数据使用，因为系统已经自动处理过了
  

#### 获取部分变量


  如果你只需要获取当前请求的部分参数，可以使用：

        // 只获取当前请求的id和name变量
      Request : : only ( [ 'id' , 'name' ] ) ;


    采用 =only=方法能够安全的获取你需要的变量，避免额外变量影响数据处理和写入。
  

  =only=方法可以支持批量设置默认值，如下：

        // 设置默认值
      Request : : only ( [ 'id' = > 0 , 'name' = > '' ] ) ;

  表示 =id=的默认值为 0， =name=的默认值为空字符串。

  默认获取的是当前请求参数（ =PARAM=类型变量），如果需要获取其它类型的参数，可以在第二个参数传入，例如：

        // 只获取GET请求的id和name变量
      Request : : only ( [ 'id' , 'name' ] ,  'get' ) ;
       // 等效于
      Request : : get ( [ 'id' ,  'name' ] ) ;
       // 只获取POST请求的id和name变量
      Request : : only ( [ 'id' , 'name' ] ,  'post' ) ;
       // 等效于
      Request : : post ( [ 'id' ,  'name' ] ) ;

  也支持排除某些变量后获取，例如

        // 排除id和name变量
      Request : : except ( [ 'id' , 'name' ] ) ;

  同样支持指定变量类型获取：

        // 排除GET请求的id和name变量
      Request : : except ( [ 'id' , 'name' ] ,  'get' ) ;
       // 排除POST请求的id和name变量
      Request : : except ( [ 'id' , 'name' ] ,  'post' ) ;

#### 变量修饰符
  支持对变量使用修饰符功能，可以一定程度上简单过滤变量，更为严格的过滤请使用前面提过的变量过滤功能。

  用法如下：


    ### Request::变量类型('变量名/修饰符');
  支持的变量修饰符，包括：

  | 修饰符   | 作用                   |
  |----------+------------------------|
  | s        | 强制转换为字符串类型   |
  | d        | 强制转换为整型类型     |
  | b        | 强制转换为布尔类型     |
  | a        | 强制转换为数组类型     |
  | f        | 强制转换为浮点类型     |

  下面是一些例子：

       Request : : get ( 'id/d' ) ;
      Request : : post ( 'name/s' ) ;
      Request : : post ( 'ids/a' ) ;

#### 中间件变量


  可以在中间件里面设置和获取请求变量的值，这个值的改变不会影响 =PARAM=变量的获取。

        < ?php

      namespace app\http\middleware ;

      class  Check
       {
          public  function  handle ($request , \Closure $next )
           {
               if  ( 'think'  == $request - >name )  {
                  $request - >name  =  'ThinkPHP' ;
               }

               return $ next ($request ) ;
           }
       }

#### 助手函数


  为了简化使用，还可以使用系统提供的 =input=助手函数完成上述大部分功能。

  判断变量是否定义

        input ( '?get.id' ) ;
       input ( '?post.name' ) ;

  获取 PARAM 参数

        input ( 'param.name' ) ;  // 获取单个参数
       input ('param.' ) ;  // 获取全部参数
       // 下面是等效的
       input ( 'name' ) ; 
       input ( '' ) ;

  获取 GET 参数

        // 获取单个变量
       input ( 'get.id' ) ;
       // 使用过滤方法获取 默认为空字符串
       input ( 'get.name' ) ;
       // 获取全部变量
       input ( 'get.' ) ;

  使用过滤方法
        input ( 'get.name' , '' , 'htmlspecialchars' ) ;  // 获取get变量 并用htmlspecialchars函数过滤
       input ( 'username' , '' , 'strip_tags' ) ;  // 获取param变量 并用strip_tags函数过滤
       input ( 'post.name' , '' , 'org\Filter::safeHtml' ) ;  // 获取post变量 并用org\Filter类的safeHtml方法过滤

  使用变量修饰符

        input ( 'get.id/d' ) ;
       input ( 'post.name/s' ) ;
       input ( 'post.ids/a' ) ;

### 请求类型
#### 获取请求类型
  在很多情况下面，我们需要判断当前操作的请求类型是 =GET=、 =POST=、 =PUT=、 =DELETE=或者 =HEAD=，一方面可以针对请求类型作出不同的逻辑处理，另外一方面有些情况下面需要验证安全性，过滤不安全的请求。

  请求对象 =Request=类提供了下列方法来获取或判断当前请求类型：

  | 用途                  | 方法        |
  |-----------------------+-------------|
  | 获取当前请求类型      | method      |
  | 判断是否 GET 请求       | isGet       |
  | 判断是否 POST 请求      | isPost      |
  | 判断是否 PUT 请求       | isPut       |
  | 判断是否 DELETE 请求    | isDelete    |
  | 判断是否 AJAX 请求      | isAjax      |
  | 判断是否 PJAX 请求      | isPjax      |
  | 判断是否 JSON 请求      | isJson      |
  | 判断是否手机访问      | isMobile    |
  | 判断是否 HEAD 请求      | isHead      |
  | 判断是否 PATCH 请求     | isPatch     |
  | 判断是否 OPTIONS 请求   | isOptions   |
  | 判断是否为 CLI 执行     | isCli       |
  | 判断是否为 CGI 模式     | isCgi       |


    =method=方法返回的请求类型始终是大写，这些方法都不需要传入任何参数。

    没有必要在控制器中判断请求类型再来执行不同的逻辑，完全可以在路由中进行设置。
  

#### 请求类型伪装
  支持请求类型伪装，可以在 =POST=表单里面提交 =_method=变量，传入需要伪装的请求类型，例如：

        <form method = "post" action = "" >
           <input type = "text" name = "name" value = "Hello" >
           <input type = "hidden" name = "_method" value = "PUT"  >
           <input type = "submit" value = "提交" >
       < /form >

  提交后的请求类型会被系统识别为 =PUT=请求。


    你可以设置为任何合法的请求类型，包括 =GET=、 =POST=、 =PUT=和 =DELETE=等，但伪装变量 =_method=只能通过 POST 请求进行提交。
  

  如果要获取原始的请求类型，可以使用

       Request : : method ( true ) ;


    在命令行下面执行的话，请求类型返回的始终是 =GET=。
  

  如果你需要改变伪装请求的变量名，可以修改自定义 Request 类的 =varMethod=属性：

####  =AJAX/PJAX=伪装


  可以对请求进行 =AJAX=请求伪装，如下：

       http : / /localhost /index ?_ajax = 1

  或者 =PJAX=请求伪装

       http : / /localhost /index ?_pjax = 1

  如果你需要改变伪装请求的变量名，可以修改自定义 Request 类的 =varAjax=和 =varPjax=属性：


    =_ajax=和 =_pjax=可以通过 =GET/POST/PUT=等请求变量伪装。
  
### HTTP 头信息
  可以使用 =Request=对象的 =header=方法获取当前请求的 =HTTP=请求头信息，例如：

  $info  = Request : : header ( ) ;
      echo $info [ 'accept' ] ;
      echo $info [ 'accept-encoding' ] ;
      echo $info [ 'user-agent' ] ;

  也可以直接获取某个请求头信息，例如：

       $agent  = Request : : header ( 'user-agent' ) ;

  =HTTP=请求头信息的名称不区分大小写，并且 =_=会自动转换为 =-=，所以下面的写法都是等效的：

       $agent  = Request : : header ( 'user-agent' ) ;
      $agent  = Request : : header ( 'USER_AGENT' ) ;

### 参数绑定
  参数绑定是把当前请求的变量作为操作方法（也包括架构方法）的参数直接传入，参数绑
  定并不区分请求类型。


    参数绑定传入的值会经过全局过滤，如果你有额外的过滤需求可以在操作方法中单独处理。
  

  参数绑定方式默认是按照变量名进行绑定，例如，我们给 =Blog=控制器定义了两个操作
  方法 =read=和 =archive=方法，由于 =read=操作需要指定一个 =id=参数， =archive=
  方法需要指定年份（ =year=）和月份（ =month=）两个参数，那么我们可以如下定义：

        < ?php
      namespace app\controller ;

      class  Blog 
       {
          public  function  read ($id )
           {
               return  'id='  . $id ;
           }

          public  function  archive ($year , $month = '01' )
           {
               return  'year='  . $year  .  '&month='  . $month ;
           }
       }

    注意这里的操作方法并没有具体的业务逻辑，只是简单的示范。
  

  URL 的访问地址分别是：

       http : / /serverName /index .php /blog /read /id / 5
      http : / /serverName /index .php /blog /archive /year / 2016 /month / 06

  两个 URL 地址中的 =id=参数和 =year=和 =month=参数会自动和 =read=操作方法以及 =archive=操作方法的 =同名参数=绑定。


    变量名绑定不一定由访问 URL 决定，路由地址也能起到相同的作用
  

  输出的结果依次是：

       id = 5
      year = 2016 &month = 06

  按照变量名进行参数绑定的参数必须和 URL 中传入的变量名称一致，但是参数顺序不需要一致。也就是说

       http : / /serverName /index .php /blog /archive /month / 06 /year / 2016

  和上面的访问结果是一致的，URL 中的参数顺序和操作方法中的参数顺序都可以随意调整，关键是确保参数名称一致即可。

  如果用户访问的 URL 地址是：

       http : / /serverName /index .php /blog /read

  那么会抛出下面的异常提示： =参数错误:id=

  报错的原因很简单，因为在执行 read 操作方法的时候，id 参数是必须传入参数的，但是方法无法从 URL 地址中获取正确的 id 参数信息。由于我们不能相信用户的任何输入，因此建议你给 read 方法的 id 参数添加默认值，例如：

       public  function  read ($id  =  0 )
       {
           return  'id='  . $id ;
       }

  这样，当我们访问 =http://serverName/index.php/blog/read/= 的时候 就会输出

       id = 0


    始终给操作方法的参数定义默认值是一个避免报错的好办法（依赖注入参数除外）
  

  为了更好的配合前端规范，支持自动识别小写+下划线的请求变量使用驼峰注入，例如：

       http : / /serverName /index .php /blog /read /blog_id / 5

  可以使用下面的方式接收 =blog_id=变量，所以请确保在方法的参数使用驼峰（首字母小写）规范。

       public  function  read ($blogId  =  0 )
       {
           return  'id='  . $blogId ;
       }

## 响应 
### 响应
#### 响应
    响应（ =Response=）对象用于动态响应客户端请求，控制发送给用户的信息。通常用于输出数据给客户端或者浏览器。

  =ThinkPHP=的 =Response=响应对象由 =think\Response=类或者子类完成，ThinkPHP 的响应输出是自动的（命令行模式除外），最终会调用 =Response=对象的 =send=方法完成输出。

    =Response=类不能直接实例化，必须使用 =Response::make()= 静态方式创建，建议直接使用系统提供的助手函数完成。
    
### 响应输出
  大多数情况，我们不需要关注 =Response=对象本身，只需要在控制器的操作方法中返回数据即可。

  最简单的响应输出是直接在路由闭包或者控制器操作方法中返回一个字符串，例如：

       Route : : get ( 'hello/:name' ,  function  ($name )  {
           return  'Hello,'  . $name  .  '!' ;
       } ) ;

        < ?php
      namespace app\controller ;

      class  Index
       {
          public  function  hello ($name = 'thinkphp' )
           {
               return  'Hello,'  . $name  .  '!' ;
           }
       }

  由于默认是输出 =Html=输出，所以直接以 html 页面方式输出响应内容。如果你发起一个 JSON 请求的话，输出就会自动使用 JSON 格式响应输出。

  为了规范和清晰起见，最佳的方式是在控制器最后明确输出类型（毕竟一个确定的请求是有明确的响应输出类型），默认支持的输出类型包括：

  | 输出类型       | 快捷方法   | 对应 Response 类             |
  |----------------+------------+----------------------------|
  | HTML 输出       | response   | \think\Response            |
  | 渲染模板输出   | view       | \think\response\View       |
  | JSON 输出       | json       | \think\response\Json       |
  | JSONP 输出      | jsonp      | \think\response\Jsonp      |
  | XML 输出        | xml        | \think\response\Xml        |
  | 页面重定向     | redirect   | \think\response\Redirect   |
  | 附件下载       | download   | \think\response\Download   |

  每一种输出类型其实对应了一个不同的 =Response=子类（ =response()=函数对应的是 =Response=基类），也可以在应用中自定义 =Response=子类满足特殊需求的输出。

  例如我们需要输出一个 JSON 数据给客户端（或者 AJAX 请求），可以使用：

        < ?php
      namespace app\controller ;

      class  Index
       {
          public  function  hello ( )
           {
              $data  =  [ 'name'  = >  'thinkphp' ,  'status'  = >  '1' ] ;
               return  json ($data ) ;
           }
       }


    这些助手函数的返回值都是 =Response=类或者子类的对象实例，所以后续可以调用 =Response=基类或者当前子类的相关方法，后面我们会讲解相关方法。
  

  如果你只需要输出一个 html 格式的内容，可以直接使用

        < ?php
      namespace app\controller ;

      class  Index
       {
          public  function  hello ( )
           {
              $data  =  'Hello,ThinkPHP!' ;
               return  response ($data ) ;
           }
       }

  或者使用 =return=直接返回输出的字符串。

        < ?php
      namespace app\controller ;

      class  Index
       {
          public  function  hello ( )
           {
               return  'Hello,ThinkPHP!' ;
           }
       }

### 响应参数
  =Response=对象提供了一系列方法用于设置响应参数，包括设置输出内容、状态码及 =header=信息等，并且支持链式调用以及多次调用。

#### 设置数据


  =Response=基类提供了 =data=方法用于设置响应数据。

        response ( ) - > data ($data ) ;
       json ( ) - > data ($data ) ;

  不过需要注意的是 =data=方法设置的只是原始数据，并不一定是最终的输出数据，最终的响应输出数据是会根据当前的 =Response=响应类型做自动转换的，例如：

        json ( ) - > data ($data ) ;

  最终的输出数据就是 =json_encode($data)=转换后的数据。


    如果要获取当前响应对象实例的实际输出数据可以使用 =getContent=方法。
  
#### 设置状态码
  =Response=基类提供了 =code=方法用于设置响应数据，但大部分情况一般我们是直接在调用助手函数的时候直接传入状态码，例如：

        json ($data , 201 ) ;
       view ($data , 401 ) ;

  或者在后面链式调用 =code=方法是等效的：

        json ($data ) - > code ( 201 ) ;


    除了 =redirect=函数的默认返回状态码是 =302=之外，其它方法没有指定状态码都是返回 =200=状态码。
  

  如果要获取当前响应对象实例的状态码的值，可以使用 =getCode=方法。

#### 设置头信息


  可以使用 =Response=类的 =header=设置响应的头信息

        json ($data ) - > code ( 201 ) - > header ( [
           'Cache-control'  = >  'no-cache,must-revalidate'
       ] ) ;

  除了 =header=方法之外， =Response=基类还提供了常用头信息的快捷设置方法：

  | 方法名           | 作用                         |
  |------------------+------------------------------|
  | =lastModified=   | 设置 =Last-Modified=头信息   |
  | =expires=        | 设置 =Expires=头信息         |
  | =eTag=           | 设置 =ETag=头信息            |
  | =cacheControl=   | 设置 =Cache-control=头信息   |
  | =contentType=    | 设置 =Content-Type=头信息    |

  除非你要清楚自己在做什么，否则不要随便更改这些头信息，每个 =Response=子类都有默认的 =contentType=信息，一般无需设置。

  你可以使用 =getHeader=方法获取当前响应对象实例的头信息。

#### 写入 Cookie


        response ( ) - > cookie ( 'name' ,  'value' ,  600 ) ;

#### 设置额外参数


  有些时候，响应输出需要设置一些额外的参数，例如：\\
  在进行 =json=输出的时候需要设置 =json_encode=方法的额外参数， =jsonp=输出的时候需要设置 =jsonp_handler=等参数，这些都可以使用 =options=方法来进行处理，例如：

        jsonp ($data ) - > options ( [
           'var_jsonp_handler'      = >  'callback' ,
           'default_jsonp_handler'  = >  'jsonpReturn' ,
           'json_encode_param'      = > JSON_PRETTY_PRINT ,
       ] ) ;

#### 关闭当前的请求缓存


  支持使用 =allowCache=方法动态控制是否需要使用请求缓存。

        // 关闭当前页面的请求缓存
       json ($data ) - > code ( 201 ) - > allowCache ( false ) ;

#### 自定义响应


  如果需要特别的自定义响应输出，可以自定义一个 =Response=子类，并且在控制器的操作方法中直接返回。又或者通过设置响应参数的方式进行响应设置输出。

### 重定向
  可以使用 =redirect=助手函数进行重定向

        < ?php
      namespace app\controller ;

      class  Index
       {
          public  function  hello ( )
           {
               return  redirect ( 'http://www.thinkphp.cn' ) ;
           }
       }

##### 重定向传参


  如果是站内重定向的话，可以支持 URL 组装，有两种方式组装 URL，第一种是直接使用完整地址（ =/=打头）

        redirect ( '/index/hello/name/thinkphp' ) ;

  如果你需要自动生成 URL 地址，应该在调用之前调用 url 函数先生成最终的 URL 地址。

        redirect ( (string )  url ( 'hello' , [ 'name'  = >  'think' ] ) ) ;

  还可以支持使用 =with=方法附加 =Session=闪存数据重定向。

        < ?php
      namespace app\controller ;

      class  Index
       {
          public  function  index ( )
           {
               return  redirect ( '/hello' ) - > with ( 'name' , 'thinkphp' ) ;
           }
        
          public  function  hello ( )
           {
              $name  =  session ( 'name' ) ;
               return  'hello,' .$name . '!' ;
           }    
       }

  从示例可以看到重定向隐式传值使用的是 =Session=闪存数据隐式传值，并且 #仅在下一次请求有效#，再次访问重定向地址的时候无效。

##### 记住请求地址


  在很多时候，我们重定向的时候需要记住当前请求地址（为了便于跳转回来），我们可以使用 =remember=方法记住重定向之前的请求地址。

  下面是一个示例，我们第一次访问 =index=操作的时候会重定向到 =hello=操作并记住当前请求地址，然后操作完成后到 =restore=方法， =restore=方法则会自动重定向到之前记住的请求地址，完成一次重定向的回归，回到原点！（再次刷新页面又可以继续执行）

        < ?php
      namespace app\controller ;

      class  Index
       {
          public  function  index ( )
           {
               // 判断session完成标记是否存在
               if  ( session ( '?complete' ) )  {
                   // 删除session
                   session ( 'complete' ,  null ) ;
                   return  '重定向完成，回到原点!' ;
               }  else  {
                   // 记住当前地址并重定向
                   return  redirect ( 'hello' )
                       - > with ( 'name' ,  'thinkphp' )
                       - > remember ( ) ;
               }
           }

          public  function  hello ( )
           {
              $name  =  session ( 'name' ) ;
               return  'hello,'  . $name  .  '! 
      点击回到来源地址' ;
           }

          public  function  restore ( )
           {
               // 设置session标记完成
               session ( 'complete' ,  true ) ;
               // 跳回之前的来源地址
               return  redirect ( ) - > restore ( ) ;
           }
       }

### 文件下载
  支持文件下载功能，可以更简单的读取文件进行下载操作，支持直接下载输出内容。

  你可以在控制器的操作方法中添加如下代码：

       public  function  download ( )
           {
               // download是系统封装的一个助手函数
               return  download ( 'image.jpg' ,  'my.jpg' ) ;
           }

  访问 =download=操作就会下载命名为 =my.jpg=的图像文件。


    下载文件的路径是服务器路径而不是 URL 路径，如果要下载的文件不存在，系统会抛出异常。
  

  下载文件名可以省略后缀，会自动判断（后面的代码都以助手函数为例）

       public  function  download ( )
           {
               // 和上面的下载文件名是一样的效果
               return  download ( 'image.jpg' ,  'my' ) ;
           }

  如果需要设置文件下载的有效期，可以使用

       public  function  download ( )
           {
               // 设置300秒有效期
               return  download ( 'image.jpg' ,  'my' ) - > expire ( 300 ) ;
           }

  除了 =expire=方法外，还支持下面的方法：

  | 方法        | 描述                         |
  |-------------+------------------------------|
  | name        | 命名下载文件                 |
  | expire      | 下载有效期                   |
  | isContent   | 是否为内容下载               |
  | mimeType    | 设置文件的 mimeType 类型       |
  | force       | 是否强制下载（ =V6.0.3+=）   |

  助手函数提供了内容下载的参数，如果需要直接下载内容，可以在第三个参数传入 =true=：

       public  function  download ( )
       {
          $data  =  '这是一个测试文件' ;
           return  download ($data ,  'test.txt' ,  true ) ;
       }

  =V6.0.3+=版本开始，支持设置是否强制下载，例如需要打开图像文件而不是浏览器下载的话，可以使用：

       public  function  download ( )
       {
           return  download ( 'image.jpg' ,  'my.jpg' ) - > force ( false ) ;
       }
       
## 数据库 
### 数据库
   要使用 Db 类必须使用门面方式（ =think\facade\Db=）调用
### 连接数据库
  如果应用需要使用数据库，必须配置数据库连接信息，数据库的配置文件有多种定义方式。

#### 配置文件
  在全局或者应用配置目录（不清楚配置目录位置的话参考配置章节）下面的 =database.php=中（后面统称为数据库配置文件）配置下面的数据库参数：

        return  [
           'default'     = >     'mysql' ,
           'connections'     = >     [
               'mysql'     = >     [
                   // 数据库类型
                   'type'         = >  'mysql' ,
                   // 服务器地址
                   'hostname'     = >  '127.0.0.1' ,
                   // 数据库名
                   'database'     = >  'thinkphp' ,
                   // 数据库用户名
                   'username'     = >  'root' ,
                   // 数据库密码
                   'password'     = >  '' ,
                   // 数据库连接端口
                   'hostport'     = >  '' ,
                   // 数据库连接参数
                   'params'       = >  [ ] ,
                   // 数据库编码默认采用utf8
                   'charset'      = >  'utf8' ,
                   // 数据库表前缀
                   'prefix'       = >  'think_' ,
               ] ,
           ] ,
       ] ;

  新版采用多类型的方式配置，方便切换数据库。

  =default=配置用于设置默认使用的数据库连接配置。\\
  =connections=配置具体的数据库连接信息， =default=配置参数定义的连接配置必须要存在。

  =type=参数用于指定数据库类型

  | type     | 数据库       |
  |----------+--------------|
  | mysql    | MySQL        |
  | sqlite   | SqLite       |
  | pgsql    | PostgreSQL   |
  | sqlsrv   | SqlServer    |
  | mongo    | MongoDb      |
  | oracle   | Oracle       |

  每个应用可以设置独立的数据库连接参数，通常直接更改 =default=参数即可：

        return  [
           'default'     = >     'admin' , 
       ] ;

##### 连接参数
  可以针对不同的连接需要添加数据库的连接参数（具体的连接参数可以参考 PHP 手册），内置采用的参数包括如下：

  #+begin_src php
    PDO::ATTR_CASE       => PDO::CASE_NATURAL,
        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_ORACLE_NULLS       => PDO::NULL_NATURAL ,
        PDO::ATTR_STRINGIFY_FETCHES  =>  false ,
        PDO::ATTR_EMULATE_PREPARES   =>  false ,
  #+end_src

  在数据库配置文件中设置的 =params=参数中的连接配置将会和内置的设置参数合并，如果需要使用长连接，并且返回数据库的小写列名，可以在数据库配置文件中增加下面的定义：

  #+begin_src php
    'params' =>[
        \PDO : :ATTR_PERSISTENT    =>  true ,
        \PDO : :ATTR_CASE          => \PDO : :CASE_LOWER ,
    ] ,
  #+end_src


    你可以在 =params= 参数里面配置任何 PDO 支持的连接参数。
  
#### 切换连接

  我们可以在数据库配置文件中定义多个连接信息

        #+begin_src php
        return  [
           'default'     = >     'mysql' ,
           'connections'     = >     [
               'mysql'     = >     [
                   // 数据库类型
                   'type'         = >  'mysql' ,
                   // 服务器地址
                   'hostname'     = >  '127.0.0.1' ,
                   // 数据库名
                   'database'     = >  'thinkphp' ,
                   // 数据库用户名
                   'username'     = >  'root' ,
                   // 数据库密码
                   'password'     = >  '' ,
                   // 数据库连接端口
                   'hostport'     = >  '' ,
                   // 数据库连接参数
                   'params'       = >  [ ] ,
                   // 数据库编码默认采用utf8
                   'charset'      = >  'utf8' ,
                   // 数据库表前缀
                   'prefix'       = >  'think_' ,
               ] ,
               'demo'     = >     [
                   // 数据库类型
                   'type'         = >  'mysql' ,
                   // 服务器地址
                   'hostname'     = >  '127.0.0.1' ,
                   // 数据库名
                   'database'     = >  'demo' ,
                   // 数据库用户名
                   'username'     = >  'root' ,
                   // 数据库密码
                   'password'     = >  '' ,
                   // 数据库连接端口
                   'hostport'     = >  '' ,
                   // 数据库连接参数
                   'params'       = >  [ ] ,
                   // 数据库编码默认采用utf8
                   'charset'      = >  'utf8' ,
                   // 数据库表前缀
                   'prefix'       = >  'think_' ,
               ] ,
           ] ,
       ] ;
        #+end_src

  我们可以调用 =Db::connect=方法动态配置数据库连接信息，例如：

       #+begin_src php
       \think\facade\Db::connect('demo')
           ->table( 'user' )
           ->find( ) ;
       #+end_src


    =connect= 方法必须在查询的最开始调用，而且必须紧跟着调用查询方法，否则可能会导致部分查询失效或者依然使用默认的数据库连接。
  
  动态连接数据库的 =connect=方法仅对当次查询有效。
  
  这种方式的动态连接和切换数据库比较方便，经常用于多数据库连接的应用需求。

#### 模型类定义
     如果某个模型类里面定义了 =connection= 属性的话，则该模型操作的时候会自动按照给定的数据库配置进行连接，而不是配置文件中设置的默认连接信息，例如：

     #+begin_src php
       <?php
       namespace app\index\model ;
       use think\Model ;

       class  User extends  Model
       {
           protected $connection  =  'demo' ;
       }
        #+end_src

    需要注意的是，ThinkPHP 的数据库连接是惰性的，所以并不是在实例化的时候就连接数据库，而是在有实际的数据操作的时候才会去连接数据库。
#### 配置参数参考

  下面是默认支持的数据库连接信息：

  | 参数名                | 描述                                                       | 默认值           |
  |-----------------------+------------------------------------------------------------+------------------|
  | type                  | 数据库类型                                                 | 无               |
  | hostname              | 数据库地址                                                 | 127.0.0.1        |
  | database              | 数据库名称                                                 | 无               |
  | username              | 数据库用户名                                               | 无               |
  | password              | 数据库密码                                                 | 无               |
  | hostport              | 数据库端口号                                               | 无               |
  | dsn                   | 数据库连接 dsn 信息                                          | 无               |
  | params                | 数据库连接参数                                             | 空               |
  | charset               | 数据库编码                                                 | utf8             |
  | prefix                | 数据库的表前缀                                             | 无               |
  | deploy                | 数据库部署方式:0 集中式(单一服务器),1 分布式(主从服务器)   | 0                |
  | rw\_separate          | 数据库读写是否分离 主从式有效                              | false            |
  | master\_num           | 读写分离后 主服务器数量                                    | 1                |
  | slave\_no             | 指定从服务器序号                                           | 无               |
  | fields\_strict        | 是否严格检查字段是否存在                                   | true             |
  | fields\_cache         | 是否开启字段缓存                                           | false            |
  | schema\_cache\_path   | 字段缓存目录                                               | 无               |
  | trigger\_sql          | 是否开启 SQL 监听                                            | true             |
  | auto\_timestamp       | 自动写入时间戳字段                                         | false            |
  | query                 | 指定查询对象                                               | think\db\Query   |

  常用数据库连接参数（ =params=）可以参考 [[http://php.net/manual/zh/pdo.constants.php][PHP在线手册]]中的以 =PDO::ATTR_=开头的常量。

  如果同时定义了 参数化数据库连接信息 和 dsn 信息，则会优先使用 dsn 信息。


    如果是使用 =pgsql=数据库驱动的话，请先导入 =thinkphp/library/think/db/connector/pgsql.sql=文件到数据库执行。
  

#### 断线重连
  如果你使用的是长连接或者命令行，在超出一定时间后，数据库连接会断开，这个时候你需要开启断线重连才能确保应用不中断。

  在数据库连接配置中设置：

        // 开启断线重连
       'break_reconnect'  = >  true ,

  开启后，系统会自动判断数据库断线并尝试重新连接。大多数情况下都能自动识别，如果在一些特殊的情况下或者某些数据库驱动的断线标识错误还没有定义，支持配置下面的信息：

        // 断线标识字符串
       'break_match_str'  = >  [
           'error with' ,
       ] ,

  在 =break_match_str=配置中加入你的数据库错误信息关键词。

### 分布式数据库
#### 分布式支持


  数据访问层支持分布式数据库，包括读写分离，要启用分布式数据库，需要开启数据库配置文件中的 =deploy=参数：

        return  [
           'default'     = >     'mysql' ,
           'connections'     = >     [
               'mysql'     = >     [
                   // 启用分布式数据库
                   'deploy'     = >   1 ,
                   // 数据库类型
                   'type'         = >  'mysql' ,
                   // 服务器地址
                   'hostname'     = >  '192.168.1.1,192.168.1.2' ,
                   // 数据库名
                   'database'     = >  'demo' ,
                   // 数据库用户名
                   'username'     = >  'root' ,
                   // 数据库密码
                   'password'     = >  '' ,
                   // 数据库连接端口
                   'hostport'     = >  '' ,
               ] ,
           ] ,
       ] ;


    启用分布式数据库后， =hostname=参数是关键， =hostname=的个数决定了分布式数据库的数量，默认情况下第一个地址就是主服务器。
  

  主从服务器支持设置不同的连接参数，包括：

  | 连接参数 |
  | -------- |
  | username |
  | password |
  | hostport |
  | database |
  | dsn      |
  | charset  |

  如果主从服务器的上述参数一致的话，只需要设置一个，对于不同的参数，可以分别设置，例如：

        return  [
           'default'     = >     'mysql' ,
           'connections'     = >     [
               'mysql'     = >     [
                   // 启用分布式数据库
                   'deploy'    = >  1 ,
                   // 数据库类型
                   'type'      = >  'mysql' ,
                   // 服务器地址
                   'hostname'  = >  '192.168.1.1,192.168.1.2,192.168.1.3' ,
                   // 数据库名
                   'database'  = >  'demo' ,
                   // 数据库用户名
                   'username'  = >  'root,slave,slave' ,
                   // 数据库密码
                   'password'  = >  '123456' ,
                   // 数据库连接端口
                   'hostport'  = >  '' ,
                   // 数据库字符集
                   'charset'   = >  'utf8' ,
               ] ,
           ] ,
       ] ;


    记住，要么相同，要么每个都要设置。
  

  分布式的数据库参数支持使用数组定义（通常为了避免多个账号和密码的误解析），例如：

        return  [
           'default'     = >     'mysql' ,
           'connections'     = >     [
               'mysql'     = >     [
                   // 启用分布式数据库
                   'deploy'    = >  1 ,
                   // 数据库类型
                   'type'      = >  'mysql' ,
                   // 服务器地址
                   'hostname'  = > [  '192.168.1.1' , '192.168.1.2' , '192.168.1.3' ] ,
                   // 数据库名
                   'database'  = >  'demo' ,
                   // 数据库用户名
                   'username'  = >  'root,slave,slave' ,
                   // 数据库密码
                   'password'  = >  [ '123456' , 'abc,def' , 'hello' ]
                   // 数据库连接端口
                   'hostport'  = >  '' ,
                   // 数据库字符集
                   'charset'   = >  'utf8' ,
               ] ,
           ] ,
       ] ;

#### 读写分离


  还可以设置分布式数据库的读写是否分离，默认的情况下读写不分离，也就是每台服务器都可以进行读写操作，对于主从式数据库而言，需要设置读写分离，通过下面的设置就可以：

            'rw_separate'  = >  true ,

  在读写分离的情况下，默认第一个数据库配置是主服务器的配置信息，负责写入数据，如果设置了 =master_num=参数，则可以支持多个主服务器写入（每次随机连接其中一个主服务器）。其它的地址都是从数据库，负责读取数据，数量不限制。每次连接从服务器并且进行读取操作的时候，系统会随机进行在从服务器中选择。同一个数据库连接的每次请求只会连接一次主服务器和从服务器，如果某次请求的从服务器连接不上，会自动切换到主服务器进行查询操作。

  如果不希望随机读取，或者某种情况下其它从服务器暂时不可用，还可以设置 =slave_no= 指定固定服务器进行读操作， =slave_no=指定的序号表示 =hostname=中数据库地址的序号，从 =0=开始。

  调用查询类或者模型的 =CURD=操作的话，系统会自动判断当前执行的方法是读操作还是写操作并自动连接主从服务器，如果你用的是原生 SQL，那么需要注意系统的默认规则： 写操作必须用数据库的 =execute=方法，读操作必须用数据库的 =query=方法，否则会发生主从读写错乱的情况。

  发生下列情况的话，会自动连接主服务器：

  -  使用了数据库的写操作方法（ =execute=/ =insert=/ =update=/ =delete=以及衍生方法）；
  -  如果调用了数据库事务方法的话，会自动连接主服务器；
  -  从服务器连接失败，会自动连接主服务器；
  -  调用了查询构造器的 =lock=方法；
  -  调用了查询构造器的 =master=/ =readMaster=方法


    主从数据库的数据同步工作不在框架实现，需要数据库考虑自身的同步或者复制机制。如果在大数据量或者特殊的情况下写入数据后可能会存在同步延迟的情况，可以调用 =master()=方法进行主库查询操作。
  


    在实际生产环境中，很多云主机的数据库分布式实现机制和本地开发会有所区别，但通常会采下面用两种方式：

    -  第一种：提供了写 IP 和读 IP（一般是虚拟 IP），进行数据库的读写分离操作；
    -  第二种：始终保持同一个 IP 连接数据库，内部会进行读写分离 IP 调度（阿里云就是采用该方式）。
  

#### 主库读取


  有些情况下，需要直接从主库读取数据，例如刚写入数据之后，从库数据还没来得及同步完成，你可以使用

       Db : : name ( 'user' )
           - > where ( 'id' ,  1 )
           - > update ( [ 'name'  = >  'thinkphp' ] ) ;
      Db : : name ( 'user' )
           - > master ( true )
           - > find ( 1 ) ;

  不过，实际情况远比这个要复杂，因为你并不清楚后续的方法里面是否还存在相关查询操作，这个时候我们可以配置开启数据库的 =read_master=配置参数。

        // 开启自动主库读取
       'read_master'  = >  true ,

  开启后，一旦我们对某个数据表进行了写操作，那么当前请求的后续所有对该表的查询都会使用主库读取。

### 查询构造器
#### 查询数据
##### 查询单个数据
      查询单个数据使用 =find=方法：

      // table方法必须指定完整的数据表名
      Db : : table ( 'think_user' ) - > where ( 'id' ,  1 ) - > find ( ) ;
 
      最终生成的 SQL 语句可能是：

      SELECT  # FROM `think_user` WHERE  `id`  =  1 LIMIT  1
      =find=方法查询结果不存在，返回 =null=，否则返回结果数组
  

      如果希望查询数据不存在的时候返回空数组，可以使用

      // table方法必须指定完整的数据表名
      Db : : table ( 'think_user' ) - > where ( 'id' ,  1 ) - > findOrEmpty ( ) ;
 
      如果希望在没有找到数据后抛出异常可以使用

      Db : : table ( 'think_user' ) - > where ( 'id' ,  1 ) - > findOrFail ( ) ;
 
      如果没有查找到数据，则会抛出一个 =think\db\exception\DataNotFoundException=异常。

##### 查询数据集
      查询多个数据（数据集）使用 =select=方法：

      Db : : table ( 'think_user' ) - > where ( 'status' ,  1 ) - > select ( ) ;
 
      最终生成的 SQL 语句可能是：

      SELECT  # FROM `think_user` WHERE `status`  =  1
 

      =select= 方法查询结果是一个数据集对象，如果需要转换为数组可以使用

      Db : : table ( 'think_user' ) - > where ( 'status' ,  1 ) - > select ( ) - > toArray ( ) ;
 
      如果希望在没有查找到数据后抛出异常可以使用

      Db : : table ( 'think_user' ) - > where ( 'status' , 1 ) - > selectOrFail ( ) ;
 
      如果没有查找到数据，同样也会抛出一个 =think\db\exception\DataNotFoundException=异常。

      如果设置了数据表前缀参数的话，可以使用

      Db : : name ( 'user' ) - > where ( 'id' ,  1 ) - > find ( ) ;
      Db : : name ( 'user' ) - > where ( 'status' ,  1 ) - > select ( ) ;
 

      如果你的数据表没有设置表前缀的话，那么 =name=和 =table=方法效果一致。
  

      在 =find=和 =select=方法之前可以使用所有的链式操作（参考链式操作章节）方法。

##### 值和列查询


      查询某个字段的值可以用

      // 返回某个字段的值
      Db : : table ( 'think_user' ) - > where ( 'id' ,  1 ) - > value ( 'name' ) ;
 

      value 方法查询结果不存在，返回 null
  

      查询某一列的值可以用

      // 返回数组
      Db : : table ( 'think_user' ) - > where ( 'status' , 1 ) - > column ( 'name' ) ;
      // 指定id字段的值作为索引
      Db : : table ( 'think_user' ) - > where ( 'status' , 1 ) - > column ( 'name' ,  'id' ) ;
 
      如果要返回完整数据，并且添加一个索引值的话，可以使用

      // 指定id字段的值作为索引 返回所有数据
      Db : : table ( 'think_user' ) - > where ( 'status' , 1 ) - > column ( '#' , 'id' ) ;
 

      =column=方法查询结果不存在，返回空数组
  

##### 数据分批处理


      如果你需要处理成千上百条数据库记录，可以考虑使用 =chunk=方法，该方法一次获取结果集的一小块，然后填充每一小块数据到要处理的闭包，该方法在编写处理大量数据库记录的时候非常有用。

      比如，我们可以全部用户表数据进行分批处理，每次处理 100 个用户记录：

      Db : : table ( 'think_user' ) - > chunk ( 100 ,  function ($users )  {
      foreach  ($users as $user )  {
      //
      }
      } ) ;
 
      你可以通过从闭包函数中返回 =false=来中止对后续数据集的处理：

      Db : : table ( 'think_user' ) - > chunk ( 100 ,  function ($users )  {
      foreach  ($users as $user )  {
      // 处理结果集...
      if ($user - >status == 0 ) {
      return  false ;
      }
      }
      } ) ;
 
      也支持在 =chunk=方法之前调用其它的查询方法，例如：

      Db : : table ( 'think_user' )
             - > where ( 'score' , '>' , 80 )
             - > chunk ( 100 ,  function ($users )  {
               foreach  ($users as $user )  {
               //
               }
               } ) ;

               =chunk=方法的处理默认是根据主键查询，支持指定字段，例如：

               Db : : table ( 'think_user' ) - > chunk ( 100 ,  function ($users )  {
               // 处理结果集...
               return  false ;
               } , 'create_time' ) ;

               并且支持指定处理数据的顺序。

               Db : : table ( 'think_user' ) - > chunk ( 100 ,  function ($users )  {
               // 处理结果集...
               return  false ;
               } , 'create_time' ,  'desc' ) ;


             =chunk=方法一般用于命令行操作批处理数据库的数据，不适合 WEB 访问处理大量数据，很容易导致超时。
  
##### 游标查询


      如果你需要处理大量的数据，可以使用新版提供的游标查询功能，该查询方式利用了 PHP 的生成器特性，可以大幅减少大量数据查询的内存开销问题。

      $cursor  = Db : : table ( 'user' ) - > where ( 'status' ,  1 ) - > cursor ( ) ;
      foreach ($cursor as $user ) {
      echo $user [ 'name' ] ;
      }
 
      =cursor=方法返回的是一个生成器对象， =user=变量是数据表的一条数据（数组）。

#### 添加数据
##### 添加一条数据
      可以使用 =save=方法统一写入数据，自动判断是新增还是更新数据（以写入数据中是否存在主键数据为依据）。

      $data  =  [ 'foo'  = >  'bar' ,  'bar'  = >  'foo' ] ;
      Db : : name ( 'user' ) - > save ($data ) ;
 
      或者使用 =insert= 方法向数据库提交数据

      $data  =  [ 'foo'  = >  'bar' ,  'bar'  = >  'foo' ] ;
      Db : : name ( 'user' ) - > insert ($data ) ;
 

      =insert= 方法添加数据成功返回添加成功的条数，通常情况返回 1
  


      如果你的数据表里面没有 =foo=或者 =bar=字段，那么就会抛出异常。
  

      如果不希望抛出异常，可以使用下面的方法：

      $data  =  [ 'foo'  = >  'bar' ,  'bar'  = >  'foo' ] ;
      Db : : name ( 'user' ) - > strict ( false ) - > insert ($data ) ;
 
      不存在字段的值将会直接抛弃。

      如果是 mysql 数据库，支持 =replace=写入，例如：

      $data  =  [ 'foo'  = >  'bar' ,  'bar'  = >  'foo' ] ;
      Db : : name ( 'user' ) - > replace ( ) - > insert ($data ) ;
 
      添加数据后如果需要返回新增数据的自增主键，可以使用 =insertGetId=方法新增数据并返回主键值：
   
      $userId  = Db : : name ( 'user' ) - > insertGetId ($data ) ;
         
      =insertGetId= 方法添加数据成功返回添加数据的自增主键

##### 添加多条数据
      添加多条数据直接向 Db 类的 =insertAll= 方法传入需要添加的数据（通常是二维数组）即可。

      $data  =  [
      [ 'foo'  = >  'bar' ,  'bar'  = >  'foo' ] ,
      [ 'foo'  = >  'bar1' ,  'bar'  = >  'foo1' ] ,
      [ 'foo'  = >  'bar2' ,  'bar'  = >  'foo2' ]
      ] ;
      Db : : name ( 'user' ) - > insertAll ($data ) ;
 

      =insertAll=方法添加数据成功返回添加成功的条数
  

      如果是 mysql 数据库，支持 =replace=写入，例如：

      $data  =  [
      [ 'foo'  = >  'bar' ,  'bar'  = >  'foo' ] ,
      [ 'foo'  = >  'bar1' ,  'bar'  = >  'foo1' ] ,
      [ 'foo'  = >  'bar2' ,  'bar'  = >  'foo2' ]
      ] ;
      Db : : name ( 'user' ) - > replace ( ) - > insertAll ($data ) ;
 

      确保要批量添加的数据字段是一致的
  

      如果批量插入的数据比较多，可以指定分批插入，使用 =limit=方法指定每次插入的数量限制。

      $data  =  [
      [ 'foo'  = >  'bar' ,  'bar'  = >  'foo' ] ,
      [ 'foo'  = >  'bar1' ,  'bar'  = >  'foo1' ] ,
      [ 'foo'  = >  'bar2' ,  'bar'  = >  'foo2' ]
      . . .
      ] ;
      // 分批写入 每次最多100条数据
      Db : : name ( 'user' )
      - > limit ( 100 )
      - > insertAll ($data ) ;

#### 更新数据
##### 更新数据
      可以使用 save 方法更新数据

      Db : : name ( 'user' )
      - > save ( [ 'id'  = >  1 ,  'name'  = >  'thinkphp' ] ) ;

      或者使用 =update=方法。

      Db : : name ( 'user' )
      - > where ( 'id' ,  1 )
      - > update ( [ 'name'  = >  'thinkphp' ] ) ;

      实际生成的 SQL 语句可能是：

      UPDATE `think_user`  SET `name` = 'thinkphp'  WHERE  `id`  =  1
 

      =update=方法返回影响数据的条数，没修改任何数据返回 0
  

      支持使用 =data=方法传入要更新的数据

      Db : : name ( 'user' )
      - > where ( 'id' ,  1 )
      - > data ( [ 'name'  = >  'thinkphp' ] )
      - > update ( ) ;


      如果 =update=方法和 =data=方法同时传入更新数据，则以 =update=方法为准。
  

      如果数据中包含主键，可以直接使用：

      Db : : name ( 'user' )
      - > update ( [ 'name'  = >  'thinkphp' , 'id'  = >  1 ] ) ;

      实际生成的 SQL 语句和前面用法是一样的：

      UPDATE `think_user`  SET `name` = 'thinkphp'  WHERE  `id`  =  1
 
      如果要更新的数据需要使用 =SQL=函数或者其它字段，可以使用下面的方式：

      Db : : name ( 'user' )
      - > where ( 'id' , 1 )
      - > exp ( 'name' , 'UPPER(name)' )
      - > update ( ) ;

      实际生成的 SQL 语句：

      UPDATE `think_user`  SET `name`  =  UPPER (name )  WHERE  `id`  =  1
 
      支持使用 =raw=方法进行数据更新。

      Db : : name ( 'user' )
      - > where ( 'id' ,  1 )
      - > update ( [
        'name'      = >  Db : : raw ( 'UPPER(name)' ) ,
        'score'         = >  Db : : raw ( 'score-3' ) ,
        'read_time'     = >  Db : : raw ( 'read_time+1' )
        ] ) ;

##### 自增/自减
      可以使用 =inc/dec=方法自增或自减一个字段的值（ 如不加第二个参数，默认步长为 1）。

      // score 字段加 1
      Db::table( 'think_user' )
               ->where ( 'id' ,  1 )
               ->inc ( 'score' )
               ->update ( ) ;

                 // score 字段加 5
                 Db : : table ( 'think_user' )
                 ->where ( 'id' ,  1 )
                 ->inc ( 'score' ,  5 )
                 ->update ( ) ;

                 // score 字段减 1
                 Db : : table ( 'think_user' )
                 - > where ( 'id' ,  1 )
                 - > dec ( 'score' )
                 - > update ( ) ;

                 // score 字段减 5
                 Db : : table ( 'think_user' )
                 - > where ( 'id' ,  1 )
                 - > dec ( 'score' ,  5 )
                 - > update ( ) ;

                   最终生成的 SQL 语句可能是：

                   UPDATE `think_user`  SET `score`  = `score`  +  1  WHERE  `id`  =  1 
                   UPDATE `think_user`  SET `score`  = `score`  +  5  WHERE  `id`  =  1
                   UPDATE `think_user`  SET `score`  = `score`  -  1  WHERE  `id`  =  1
                   UPDATE `think_user`  SET `score`  = `score`  -  5  WHERE  `id`  =  1

#### 删除数据
##### 删除数据
      // 根据主键删除
      Db : : table ( 'think_user' ) - > delete ( 1 ) ;
      Db : : table ( 'think_user' ) - > delete ( [ 1 , 2 , 3 ] ) ;

      // 条件删除    
      Db : : table ( 'think_user' ) - > where ( 'id' , 1 ) - > delete ( ) ;
      Db : : table ( 'think_user' ) - > where ( 'id' , '<' , 10 ) - > delete ( ) ;
 
      最终生成的 SQL 语句可能是：

      DELETE FROM `think_user` WHERE  `id`  =  1 
      DELETE FROM `think_user` WHERE  `id` IN  ( 1 , 2 , 3 ) 
      DELETE FROM `think_user` WHERE  `id`  =  1 
      DELETE FROM `think_user` WHERE  `id`  <  10
 

      =delete=方法返回影响数据的条数，没有删除返回 0
  

      如果不带任何条件调用 =delete=方法会提示错误，如果你确实需要删除所有数据，可以使用

      // 无条件删除所有数据
      Db : : name ( 'user' ) - > delete ( true ) ;
 
      最终生成的 SQL 语句是（删除了表的所有数据）：

      DELETE FROM `think_user`
 

      一般情况下，业务数据不建议真实删除数据，系统提供了软删除机制（模型中使用软删除更为方便）。
  

      // 软删除数据 使用delete_time字段标记删除
      Db : : name ( 'user' )
      - > where ( 'id' ,  1 )
      - > useSoftDelete ( 'delete_time' , time ( ) )
      - > delete ( ) ;

      实际生成的 SQL 语句可能如下（执行的是 =UPDATE=操作）：

      UPDATE `think_user`  SET `delete_time`  =  '1515745214'  WHERE  `id`  =  1
 
      =useSoftDelete=方法表示使用软删除，并且指定软删除字段为 =delete_time=，写入数据为当前的时间戳。

#### 查询表达式
##### 查询表达式


      查询表达式支持大部分的 SQL 查询语法，也是 =ThinkPHP=查询语言的精髓，查询表达式的使用格式：

      where ( '字段名' , '查询表达式' , '查询条件' ) ;
 
      除了 =where=方法外，还可以支持 =whereOr=，用法是一样的。为了更加方便查询，大多数的查询表达式都提供了快捷查询方法。

      表达式不分大小写，支持的查询表达式有下面几种：

      | 表达式               | 含义                                | 快捷查询方法                     |
      |----------------------+-------------------------------------+----------------------------------|
      | =                    | 等于                                |                                  |
      | <>                   | 不等于                              |                                  |
      | >                    | 大于                                |                                  |
      | >=                   | 大于等于                            |                                  |
      | <                    | 小于                                |                                  |
      | <=                   | 小于等于                            |                                  |
      | [NOT] LIKE           | 模糊查询                            | =whereLike/whereNotLike=         |
      | [NOT] BETWEEN        | （不在）区间查询                    | =whereBetween/whereNotBetween=   |
      | [NOT] IN             | （不在）IN 查询                     | =whereIn/whereNotIn=             |
      | [NOT] NULL           | 查询字段是否（不）是 NULL            | =whereNull/whereNotNull=         |
      | [NOT] EXISTS         | EXISTS 查询                          | =whereExists/whereNotExists=     |
      | [NOT] REGEXP         | 正则（不）匹配查询（仅支持 Mysql）   |                                  |
      | [NOT] BETWEEN TIME   | 时间区间比较                        | whereBetweenTime                 |
      | > TIME               | 大于某个时间                        | =whereTime=                      |
      | < TIME               | 小于某个时间                        | =whereTime=                      |
      | >= TIME              | 大于等于某个时间                    | =whereTime=                      |
      | <= TIME              | 小于等于某个时间                    | =whereTime=                      |
      | EXP                  | 表达式查询，支持 SQL 语法             | =whereExp=                       |
      | find in set          | FIND\_IN\_SET 查询                   | =whereFindInSet=                 |

      表达式查询的用法示例如下：

##### 等于（=）


      例如：

      Db : : name ( 'user' ) - > where ( 'id' , '=' , 100 ) - > select ( ) ;
 
      和下面的查询等效

      Db : : name ( 'user' ) - > where ( 'id' , 100 ) - > select ( ) ;
 
      最终生成的 SQL 语句是：

      SELECT  # FROM `think_user` WHERE  `id`  =  100
 
##### 不等于（<>）


      例如：

      Db : : name ( 'user' ) - > where ( 'id' , '<>' , 100 ) - > select ( ) ;
 
      最终生成的 SQL 语句是：

      SELECT  # FROM `think_user` WHERE  `id`  < >  100
 
##### 大于（>）


      例如：

      Db : : name ( 'user' ) - > where ( 'id' , '>' , 100 ) - > select ( ) ;
 
      最终生成的 SQL 语句是：

      SELECT  # FROM `think_user` WHERE  `id`  >  100
 
##### 大于等于（>=）


      例如：

      Db : : name ( 'user' ) - > where ( 'id' , '>=' , 100 ) - > select ( ) ;
 
      最终生成的 SQL 语句是：

      SELECT  # FROM `think_user` WHERE  `id`  >=  100
 
##### 小于（<）


      例如：

      Db : : name ( 'user' ) - > where ( 'id' ,  '<' ,  100 ) - > select ( ) ;
 
      最终生成的 SQL 语句是：

      SELECT  # FROM `think_user` WHERE  `id`  <  100
 
##### 小于等于（<=）


      例如：

      Db : : name ( 'user' ) - > where ( 'id' ,  '<=' ,  100 ) - > select ( ) ;
 
      最终生成的 SQL 语句是：

      SELECT  # FROM `think_user` WHERE  `id`  <=  100
 
##### [NOT] LIKE： 同 sql 的 LIKE


      例如：

      Db : : name ( 'user' ) - > where ( 'name' ,  'like' ,  'thinkphp%' ) - > select ( ) ;
 
      最终生成的 SQL 语句是：

      SELECT  # FROM `think_user` WHERE  `name` LIKE  'thinkphp%'
 
      =like=查询支持使用数组

      Db : : name ( 'user' ) - > where ( 'name' ,  'like' ,  [ '%think' , 'php%' ] , 'OR' ) - > select ( ) ;
 
      实际生成的 SQL 语句为：

      SELECT  # FROM `think_user` WHERE   (`name` LIKE  '%think' OR `name` LIKE  'php%' )
 
      为了更加方便，应该直接使用 =whereLike=方法

      Db : : name ( 'user' ) - > whereLike ( 'name' , 'thinkphp%' ) - > select ( ) ;
      Db : : name ( 'user' ) - > whereNotLike ( 'name' , 'thinkphp%' ) - > select ( ) ;
 
##### [NOT] BETWEEN ：同 sql 的[not] between


      查询条件支持字符串或者数组，例如：

      Db : : name ( 'user' ) - > where ( 'id' , 'between' , '1,8' ) - > select ( ) ;
 
      和下面的等效：

      Db : : name ( 'user' ) - > where ( 'id' , 'between' , [ 1 , 8 ] ) - > select ( ) ;
 
      最终生成的 SQL 语句都是：

      SELECT  # FROM `think_user` WHERE  `id` BETWEEN  1 AND  8
 
      或者使用快捷查询方法：

      Db : : name ( 'user' ) - > whereBetween ( 'id' , '1,8' ) - > select ( ) ;
      Db : : name ( 'user' ) - > whereNotBetween ( 'id' , '1,8' ) - > select ( ) ;
 
##### [NOT] IN： 同 sql 的[not] in
      查询条件支持字符串或者数组，例如：
      Db : : name ( 'user' ) - > where ( 'id' , 'in' , '1,5,8' ) - > select ( ) ;
 
      和下面的等效：

      Db : : name ( 'user' ) - > where ( 'id' , 'in' , [ 1 , 5 , 8 ] ) - > select ( ) ;
 
      最终的 SQL 语句为：

      SELECT  # FROM `think_user` WHERE  `id` IN  ( 1 , 5 , 8 )
 
      或者使用快捷查询方法：

      Db : : name ( 'user' ) - > whereIn ( 'id' , '1,5,8' ) - > select ( ) ;
      Db : : name ( 'user' ) - > whereNotIn ( 'id' , '1,5,8' ) - > select ( ) ;
 

      =[NOT] IN=查询支持使用闭包方式
  

##### [NOT] NULL ：
      查询字段是否（不）是 =Null=，例如：

      Db : : name ( 'user' ) - > where ( 'name' ,  null )
      - > where ( 'email' , 'null' )
      - > where ( 'name' , 'not null' )
      - > select ( ) ;

      实际生成的 SQL 语句为：

      SELECT  # FROM `think_user` WHERE  `name` IS NULL  AND `email` IS NULL  AND `name` IS NOT NULL
 
      如果你需要查询一个字段的值为字符串 =null=或者 =not null=，应该使用：

      Db : : name ( 'user' ) - > where ( 'title' , '=' ,  'null' )
      - > where ( 'name' , '=' ,  'not null' )
      - > select ( ) ;

      推荐的方式是使用 =whereNull=和 =whereNotNull=方法查询。

      Db : : name ( 'user' ) - > whereNull ( 'name' )
      - > whereNull ( 'email' )
      - > whereNotNull ( 'name' )
      - > select ( ) ;

##### EXP：表达式
      支持更复杂的查询情况 例如：

      Db : : name ( 'user' ) - > where ( 'id' , 'in' , '1,3,8' ) - > select ( ) ;
 
      可以改成：

      Db : : name ( 'user' ) - > where ( 'id' , 'exp' , ' IN (1,3,8) ' ) - > select ( ) ;
 
      =exp=查询的条件不会被当成字符串，所以后面的查询条件可以使用任何 SQL 支持的语法，包括使用函数和字段名称。

      推荐使用 =whereExp=方法查询

      Db : : name ( 'user' ) - > whereExp ( 'id' ,  'IN (1,3,8) ' ) - > select ( ) ;
 
#### 链式操作
     数据库提供的链式操作方法，可以有效的提高数据存取的代码清晰度和开发效率，并且支持所有的 CURD 操作（原生查询不支持链式操作）。

     使用也比较简单，假如我们现在要查询一个 User 表的满足状态为 1 的前 10 条记录，并希望按照用户的创建时间排序 ，代码如下：

     Db : : table ( 'think_user' )
     - > where ( 'status' , 1 )
     - > order ( 'create_time' )
     - > limit ( 10 )
     - > select ( ) ;

     这里的 =where=、 =order=和 =limit=方法就被称之为链式操作方法，除了 =select=方法必须放到最后一个外（因为 =select=方法并不是链式操作方法），链式操作的方法调用顺序没有先后，例如，下面的代码和上面的等效：

     Db : : table ( 'think_user' )
     - > order ( 'create_time' )
     - > limit ( 10 )
     - > where ( 'status' , 1 )
     - > select ( ) ;

     其实不仅仅是查询方法可以使用连贯操作，包括所有的 CURD 方法都可以使用，例如：

     Db : : table ( 'think_user' )
             - > where ( 'id' , 1 )
             - > field ( 'id,name,email' )
             - > find ( ) ; 

               Db : : table ( 'think_user' )
               - > where ( 'status' , 1 )
               - > where ( 'id' , 1 )
               - > delete ( ) ;

             每次 =Db=类的静态方法调用是创建一个新的查询对象实例，如果你需要多次复用使用链式操作值，可以使用下面的方法。

             $user  = Db : : table ( 'user' ) ;
             $user - > order ( 'create_time' )
             - > where ( 'status' , 1 )
             - > select ( ) ;

             // 会自动带上前面的where条件和order排序的值    
             $user - > where ( 'id' ,  '>' ,  0 ) - > select ( ) ;
 
             当前查询对象在查询之后仍然会保留链式操作的值，除非你调用 =removeOption=方法清空链式操作的值。

             $user  = Db : : table ( 'think_user' ) ;
             $user - > order ( 'create_time' )
             - > where ( 'status' , 1 )
             - > select ( ) ;

             // 清空where查询条件值 保留其它链式操作   
             $user - > removeOption ( 'where' )
             - > where ( 'id' ,  '>' ,  0 )
             - > select ( ) ;

             系统支持的链式操作方法包含：

             | 连贯操作        | 作用                                   | 支持的参数类型       |
             |-----------------+----------------------------------------+----------------------|
             | where#          | 用于 AND 查询                            | 字符串、数组和对象   |
             | whereOr#        | 用于 OR 查询                             | 字符串、数组和对象   |
             | whereTime#      | 用于时间日期的快捷查询                 | 字符串               |
             | table           | 用于定义要操作的数据表名称             | 字符串和数组         |
             | alias           | 用于给当前数据表定义别名               | 字符串               |
             | field#          | 用于定义要查询的字段（支持字段排除）   | 字符串和数组         |
             | order#          | 用于对结果排序                         | 字符串和数组         |
             | limit           | 用于限制查询结果数量                   | 字符串和数字         |
             | page            | 用于查询分页（内部会转换成 limit）      | 字符串和数字         |
             | group           | 用于对查询的 group 支持                  | 字符串               |
             | having          | 用于对查询的 having 支持                 | 字符串               |
             | join#           | 用于对查询的 join 支持                   | 字符串和数组         |
             | union#          | 用于对查询的 union 支持                  | 字符串、数组和对象   |
             | view#           | 用于视图查询                           | 字符串、数组         |
             | distinct        | 用于查询的 distinct 支持                 | 布尔值               |
             | lock            | 用于数据库的锁机制                     | 布尔值               |
             | cache           | 用于查询缓存                           | 支持多个参数         |
             | with#           | 用于关联预载入                         | 字符串、数组         |
             | bind#           | 用于数据绑定操作                       | 数组或多个参数       |
             | comment         | 用于 SQL 注释                            | 字符串               |
             | force           | 用于数据集的强制索引                   | 字符串               |
             | master          | 用于设置主服务器读取数据               | 布尔值               |
             | strict          | 用于设置是否严格检测字段名是否存在     | 布尔值               |
             | sequence        | 用于设置 Pgsql 的自增序列名              | 字符串               |
             | failException   | 用于设置没有查询到数据是否抛出异常     | 布尔值               |
             | partition       | 用于设置分区信息                       | 数组 字符串          |
             | replace         | 用于设置使用 REPLACE 方式写入            | 布尔值               |
             | extra           | 用于设置额外查询规则                   | 字符串               |
             | duplicate       | 用于设置 DUPLCATE 信息                   | 数组 字符串          |


             所有的连贯操作都返回当前的模型实例对象（this），其中带#标识的表示支持多次调用。
  

##### where


      =where=方法的用法是 ThinkPHP 查询语言的精髓，也是 ThinkPHP =ORM=的重要组成部分和亮点所在，可以完成包括普通查询、表达式查询、快捷查询、区间查询、组合查询在内的查询操作。 =where=方法的参数支持的变量类型包括字符串、数组和闭包。


      和 =where=方法相同用法的方法还包括 =whereOr=、 =whereIn=等一系列快捷查询方法，下面仅以 =where=为例说明用法。
  

###### 表达式查询



       表达式查询是官方推荐使用的查询方式
  

       查询表达式的使用格式：

       Db : : table ( 'think_user' )
       - > where ( 'id' , '>' , 1 )
       - > where ( 'name' , 'thinkphp' )
       - > select ( ) ; 

       更多的表达式查询语法，可以参考前面的查询表达式部分。

###### 数组条件


       数组方式有两种查询条件类型：关联数组和索引数组。

####### 关联数组


        主要用于等值 =AND=条件，例如：

        // 传入数组作为查询条件
        Db : : table ( 'think_user' ) - > where ( [
        'name'  = >   'thinkphp' ,
        'status' = >  1
        ] ) - > select ( ) ; 
  
        最后生成的 SQL 语句是

        SELECT  # FROM think_user WHERE `name` = 'thinkphp' AND status  =  1
  
####### 索引数组


        索引数组方式批量设置查询条件，使用方式如下：

        // 传入数组作为查询条件
        Db : : table ( 'think_user' ) - > where ( [
        [ 'name' , '=' , 'thinkphp' ] ,
        [ 'status' , '=' , 1 ]
        ] ) - > select ( ) ; 
  
        最后生成的 SQL 语句是

        SELECT  # FROM think_user WHERE `name` = 'thinkphp' AND status  =  1
  
        如果需要事先组装数组查询条件，可以使用：

        $map [ ]  =  [ 'name' , 'like' , 'think' ] ;
        $map [ ]  =  [ 'status' , '=' , 1 ] ;
  

        数组方式查询还有一些额外的复杂用法，我们会在后面的高级查询章节提及。
  

###### 字符串条件


       使用字符串条件直接查询和操作，例如：

       Db : : table ( 'think_user' ) - > whereRaw ( 'type=1 AND status=1' ) - > select ( ) ; 
  
       最后生成的 SQL 语句是

       SELECT  # FROM think_user WHERE type = 1 AND status = 1
  

       注意使用字符串查询条件和表达式查询的一个区别在于，不会对查询字段进行避免关键词冲突处理。
  

       使用字符串条件的时候，如果需要传入变量，建议配合预处理机制，确保更加安全，例如：

       Db : : table ( 'think_user' )
       - > whereRaw ( "id=:id and username=:name" ,  [ 'id'  = >  1  ,  'name'  = >  'thinkphp' ] )
       - > select ( ) ;

##### table


      =table=方法主要用于指定操作的数据表。

###### 用法


       一般情况下，操作模型的时候系统能够自动识别当前对应的数据表，所以，使用 =table=方法的情况通常是为了：

       -  切换操作的数据表；
       -  对多表进行操作；

       例如：

       Db : : table ( 'think_user' ) - > where ( 'status>1' ) - > select ( ) ;
  
       也可以在 table 方法中指定数据库，例如：

       Db : : table ( 'db_name.think_user' ) - > where ( 'status>1' ) - > select ( ) ;
  
       table 方法指定的数据表需要完整的表名，但可以采用 =name=方式简化数据表前缀的传入，例如：

       Db : : name ( 'user' ) - > where ( 'status>1' ) - > select ( ) ;
  
       会自动获取当前模型对应的数据表前缀来生成 =think_user= 数据表名称。

       需要注意的是 =table=方法不会改变数据库的连接，所以你要确保当前连接的用户有权限操作相应的数据库和数据表。

       如果需要对多表进行操作，可以这样使用：

       Db : : field ( 'user.name,role.title' )
       - > table ( 'think_user user,think_role role' )
       - > limit ( 10 ) - > select ( ) ;

       为了尽量避免和 mysql 的关键字冲突，可以建议使用数组方式定义，例如：

       Db : : field ( 'user.name,role.title' )
                - > table ( [
                  'think_user' = > 'user' ,
                  'think_role' = > 'role'
                  ] )
                  - > limit ( 10 ) - > select ( ) ;

                使用数组方式定义的优势是可以避免因为表名和关键字冲突而出错的情况。

##### alias


      =alias=用于设置当前数据表的别名，便于使用其他的连贯操作例如 join 方法等。

      示例：

      Db : : table ( 'think_user' )
      - > alias ( 'a' )
      - > join ( 'think_dept b ' , 'b.user_id= a.id' )
      - > select ( ) ;

      最终生成的 SQL 语句类似于：

      SELECT  # FROM think_user a INNER JOIN think_dept b ON b .user_id = a .id
  
      可以传入数组批量设置数据表以及别名，例如：

      Db : : table ( 'think_user' )
      - > alias ( [ 'think_user' = > 'user' , 'think_dept' = > 'dept' ] )
      - > join ( 'think_dept' , 'dept.user_id= user.id' )
      - > select ( ) ;

      最终生成的 SQL 语句类似于：

      SELECT  # FROM think_user user INNER JOIN think_dept dept ON dept .user_id = user .id
  
##### field


      =field=方法主要作用是标识要返回或者操作的字段，可以用于查询和写入操作。

###### 用于查询


####### 指定字段


        在查询操作中 =field=方法是使用最频繁的。

        Db : : table ( 'user' ) - > field ( 'id,title,content' ) - > select ( ) ;
  
        这里使用 field 方法指定了查询的结果集中包含 id,title,content 三个字段的值。执行的 SQL 相当于：

        SELECT id ,title ,content FROM user
  
        可以给某个字段设置别名，例如：

        Db : : table ( 'user' ) - > field ( 'id,nickname as name' ) - > select ( ) ;
  
        执行的 SQL 语句相当于：

        SELECT id ,nickname as name FROM user
  
####### 使用 SQL 函数


        可以在 =fieldRaw=方法中直接使用函数，例如：

        Db : : table ( 'user' ) - > fieldRaw ( 'id,SUM(score)' ) - > select ( ) ;
  
        执行的 SQL 相当于：

        SELECT id , SUM (score ) FROM user
  

        除了 =select=方法之外，所有的查询方法，包括 =find=等都可以使用 =field=方法。
  

####### 使用数组参数


        =field=方法的参数可以支持数组，例如：

        Db : : table ( 'user' ) - > field ( [ 'id' , 'title' , 'content' ] ) - > select ( ) ;
  
        最终执行的 SQL 和前面用字符串方式是等效的。

        数组方式的定义可以为某些字段定义别名，例如：

        Db : : table ( 'user' ) - > field ( [ 'id' , 'nickname' = > 'name' ] ) - > select ( ) ;
  
        执行的 SQL 相当于：

        SELECT id ,nickname as name FROM user
  
####### 获取所有字段


        如果有一个表有非常多的字段，需要获取所有的字段（这个也许很简单，因为不调用 field 方法或者直接使用空的 field 方法都能做到）：

        Db : : table ( 'user' ) - > select ( ) ;
        Db : : table ( 'user' ) - > field ( '#' ) - > select ( ) ;
  
        上面的用法是等效的，都相当于执行 SQL：

        SELECT  # FROM user
  
        但是这并不是我说的获取所有字段，而是显式的调用所有字段（对于对性能要求比较高的系统，这个要求并不过分，起码是一个比较好的习惯），下面的用法可以完成预期的作用：

        Db : : table ( 'user' ) - > field ( true ) - > select ( ) ;
  
        =field(true)=的用法会显式的获取数据表的所有字段列表，哪怕你的数据表有 100 个字段。

####### 字段排除


        如果我希望获取排除数据表中的 =content=字段（文本字段的值非常耗内存）之外的所有字段值，我们就可以使用 field 方法的排除功能，例如下面的方式就可以实现所说的功能：

        Db : : table ( 'user' ) - > withoutField ( 'content' ) - > select ( ) ;
  
        则表示获取除了 content 之外的所有字段，要排除更多的字段也可以：

        Db : : table ( 'user' ) - > withoutField ( 'user_id,content' ) - > select ( ) ;
        //或者用
        Db : : table ( 'user' ) - > withoutField ( [ 'user_id' , 'content' ] ) - > select ( ) ;
  

        注意的是 字段排除功能不支持跨表和 join 操作。
  

###### 用于写入


       除了查询操作之外， =field=方法还有一个非常重要的安全功能-- #字段合法性检测#。 =field=方法结合数据库的写入方法使用就可以完成表单提交的字段合法性检测，如果我们在表单提交的处理方法中使用了：

       Db : : table ( 'user' ) - > field ( 'title,email,content' ) - > insert ($data ) ;
  
       即表示表单中的合法字段只有 =title=, =email=和 =content=字段，无论用户通过什么手段更改或者添加了浏览器的提交字段，都会直接屏蔽。因为，其他所有字段我们都不希望由用户提交来决定，你可以通过自动完成功能定义额外需要自动写入的字段。


       在开启数据表字段严格检查的情况下，提交了非法字段会抛出异常，可以在数据库设置文件中设置：

       // 关闭严格字段检查
       'fields_strict'     = >   false ,
  

##### strict


      =strict=方法用于设置是否严格检查字段名，用法如下：

      // 关闭字段严格检查
      Db : : name ( 'user' )
      - > strict ( false )
      - > insert ($data ) ;

      注意，系统默认值是由数据库配置参数 =fields_strict=决定，因此修改数据库配置参数可以进行全局的严格检查配置，如下：

      // 关闭严格检查字段是否存在
      'fields_strict'   = >  false ,
      如果开启字段严格检查的话，在更新和写入数据库的时候，一旦存在非数据表字段的值，则会抛出异常。
  

##### limit
      =limit=方法主要用于指定查询和操作的数量。
      =limit=方法可以兼容所有的数据库驱动类的

###### 限制结果数量

       例如获取满足要求的 10 个用户，如下调用即可：

       Db : : table ( 'user' )
       - > where ( 'status' , 1 )
       - > field ( 'id,name' )
       - > limit ( 10 )
       - > select ( ) ;

       =limit=方法也可以用于写操作，例如更新满足要求的 3 条数据：

       Db : : table ( 'user' )
       - > where ( 'score' , 100 )
       - > limit ( 3 )
       - > update ( [ 'level' = > 'A' ] ) ;

       如果用于 =insertAll=方法的话，则可以分批多次写入，每次最多写入 =limit=方法指定的数量。

       Db : : table ( 'user' )
       - > limit ( 100 )
       - > insertAll ($userList ) ;

###### 分页查询
       用于文章分页查询是 =limit=方法比较常用的场合，例如：

       Db : : table ( 'article' ) - > limit ( 10 , 25 ) - > select ( ) ;
  
       表示查询文章数据，从第 10 行开始的 25 条数据（可能还取决于 where 条件和 order 排序的影响 这个暂且不提）。

       对于大数据表，尽量使用 =limit=限制查询结果，否则会导致很大的内存开销和性能问题。

##### page


      page 方法主要用于分页查询。

      我们在前面已经了解了关于 =limit=方法用于分页查询的情况，而 =page=方法则是更人性化的进行分页查询的方法，例如还是以文章列表分页为例来说，如果使用 =limit=方法，我们要查询第一页和第二页（假设我们每页输出 10 条数据）写法如下：

      // 查询第一页数据
      Db : : table ( 'article' ) - > limit ( 0 , 10 ) - > select ( ) ; 
      // 查询第二页数据
      Db : : table ( 'article' ) - > limit ( 10 , 10 ) - > select ( ) ; 
  
      虽然利用扩展类库中的分页类 Page 可以自动计算出每个分页的 =limit=参数，但是如果要自己写就比较费力了，如果用 =page=方法来写则简单多了，例如：

      // 查询第一页数据
      Db : : table ( 'article' ) - > page ( 1 , 10 ) - > select ( ) ; 
      // 查询第二页数据
      Db : : table ( 'article' ) - > page ( 2 , 10 ) - > select ( ) ; 
  
      显而易见的是，使用 =page=方法你不需要计算每个分页数据的起始位置， =page=方法内部会自动计算。

      =page=方法还可以和 =limit=方法配合使用，例如：

      Db : : table ( 'article' ) - > limit ( 25 ) - > page ( 3 ) - > select ( ) ;
  
      当 =page=方法只有一个值传入的时候，表示第几页，而 =limit=方法则用于设置每页显示的数量，也就是说上面的写法等同于：

      Db : : table ( 'article' ) - > page ( 3 , 25 ) - > select ( ) ; 
  
##### order


      =order=方法用于对操作的结果排序或者优先级限制。

      用法如下：

      Db : : table ( 'user' )
      - > where ( 'status' ,  1 )
      - > order ( 'id' ,  'desc' )
      - > limit ( 5 )
      - > select ( ) ;

        SELECT  # FROM `user` WHERE `status`  =  1 ORDER BY `id` desc LIMIT  5


      如果没有指定 =desc=或者 =asc=排序规则的话，默认为 =asc=。
  

      支持使用数组对多个字段的排序，例如：

      #+begin_src php
        Db::table( 'user' )
            ->where( 'status' ,  1 )
            ->order( [ 'order' , 'id' => 'desc' ] )
            ->limit( 5 )
            ->select( ) ; 
      #+end_src

      最终的查询 SQL 可能是

      #+begin_src sql
      SELECT  # FROM `user` WHERE `status`  =  1 ORDER BY `order` ,`id` desc LIMIT  5
      #+end_src
  
      对于更新数据或者删除数据的时候可以用于优先级限制

      #+begin_src php
      Db::table ( 'user' )
      ->where ( 'status' ,  1 )
      ->order ( 'id' ,  'desc' )
      ->limit ( 5 )
      ->delete ( ) ; 
      #+end_src

      生成的 SQL

      DELETE FROM `user` WHERE `status`  =  1 ORDER BY `id` desc LIMIT  5
  
      如果你需要在 =order=方法中使用 mysql 函数的话，必须使用下面的方式：

      Db : : table ( 'user' )
      - > where ( 'status' ,  1 )
      - > orderRaw ( "field(name,'thinkphp','onethink','kancloud')" )
      - > limit ( 5 )
      - > select ( ) ;

##### group
      =GROUP=方法通常用于结合合计函数，根据一个或多个列对结果集进行分组 。

      =group=方法只有一个参数，并且只能使用字符串。

      例如，我们都查询结果按照用户 id 进行分组统计：

      Db : : table ( 'user' )
      - > field ( 'user_id,username,max(score)' )
      - > group ( 'user_id' )
      - > select ( ) ;

      生成的 SQL 语句是：

      SELECT user_id ,username , max (score ) FROM score GROUP BY user_id
  
      也支持对多个字段进行分组，例如：

      Db : : table ( 'user' )
      - > field ( 'user_id,test_time,username,max(score)' )
      - > group ( 'user_id,test_time' )
      - > select ( ) ;

      生成的 SQL 语句是：

      SELECT user_id ,test_time ,username , max (score ) FROM user GROUP BY user_id ,test_time
  
##### having
      =HAVING=方法用于配合 group 方法完成从分组的结果中筛选（通常是聚合条件）数据。

      =having=方法只有一个参数，并且只能使用字符串，例如：

      Db : : table ( 'score' )
      - > field ( 'username,max(score)' )
      - > group ( 'user_id' )
      - > having ( 'count(test_time)>3' )
      - > select ( ) ; 

      生成的 SQL 语句是：

      SELECT username , max (score ) FROM score GROUP BY user_id HAVING  count (test_time ) > 3
  
##### join


      =JOIN=方法用于根据两个或多个表中的列之间的关系，从这些表中查询数据。join 通常有下面几种类型，不同类型的 join 操作会影响返回的数据结果。

      -  #INNER JOIN#: 等同于 JOIN（默认的 JOIN 类型）,如果表中有至少一个匹配，则返回行
      -  #LEFT JOIN#: 即使右表中没有匹配，也从左表返回所有的行
      -  #RIGHT JOIN#: 即使左表中没有匹配，也从右表返回所有的行
      -  #FULL JOIN#: 只要其中一个表中存在匹配，就返回行

###### 说明
       join  ( mixed join  [ , mixed $condition  =  null  [ , string $type  =  'INNER' ] ]  )
       leftJoin  ( mixed join  [ , mixed $condition  =  null  ]  )
       rightJoin  ( mixed join  [ , mixed $condition  =  null  ]  )
       fullJoin  ( mixed join  [ , mixed $condition  =  null  ]  )
  
       #参数#

####### join


        要关联的（完整）表名以及别名
  
        支持的写法：

        -  写法 1：[ '完整表名或者子查询'=>'别名' ]
        -  写法 2：'不带数据表前缀的表名'（自动作为别名）
        -  写法 2：'不带数据表前缀的表名 别名'

####### condition


        关联条件，只能是字符串。
  
####### type


        关联类型。可以为 :`INNER`、`LEFT`、`RIGHT`、`FULL`，不区分大小写，默认为`INNER`。
  
        #返回值#\\
        模型对象

###### 举例


       Db : : table ( 'think_artist' )
       - > alias ( 'a' )
       - > join ( 'work w' , 'a.id = w.artist_id' )
       - > join ( 'card c' , 'a.card_id = c.id' )
       - > select ( ) ;

         Db : : table ( 'think_user' )
       - > alias ( 'a' )
       - > join ( [ 'think_work' = > 'w' ] , 'a.id=w.artist_id' )
       - > join ( [ 'think_card' = > 'c' ] , 'a.card_id=c.id' )
       - > select ( ) ;

       默认采用 INNER JOIN 方式，如果需要用其他的 JOIN 方式，可以改成

       Db::table('think_user')
       ->alias ( 'a' )
       ->leftJoin ( 'word w' , 'a.id = w.artist_id' )
       ->select ( ) ;
  
       表名也可以是一个子查询

       $subsql  = Db : : table ( 'think_work' )
       - > where ( 'status' , 1 )
       - > field ( 'artist_id,count(id) count' )
       - > group ( 'artist_id' )
       - > buildSql ( ) ;

         Db : : table ( 'think_user' )
         - > alias ( 'a' )
         - > join ( [$subsql = >  'w' ] ,  'a.artist_id = w.artist_id' )
         - > select ( ) ;
  
##### union
      UNION 操作用于合并两个或多个 SELECT 语句的结果集。

      使用示例：
      Db::field ('name')
      ->table('think_user_0')
      ->union('SELECT name FROM think_user_1')
      ->union('SELECT name FROM think_user_2')
      ->select( ) ;
  
      闭包用法：

      Db : : field ( 'name' )
                - > table ( 'think_user_0' )
                - > union ( function  ($query )  {
                  $query - > field ( 'name' ) - > table ( 'think_user_1' ) ;
                  } )
                  - > union ( function  ($query )  {
                    $query - > field ( 'name' ) - > table ( 'think_user_2' ) ;
                    } )
                    - > select ( ) ;

                或者

                Db : : field ( 'name' )
                - > table ( 'think_user_0' )
                - > union ( [
                  'SELECT name FROM think_user_1' ,
                  'SELECT name FROM think_user_2' ,
                ] )
                - > select ( ) ;

                支持 UNION ALL 操作，例如：

                Db : : field ( 'name' )
                - > table ( 'think_user_0' )
                - > unionAll ( 'SELECT name FROM think_user_1' )
                - > unionAll ( 'SELECT name FROM think_user_2' )
                - > select ( ) ;

                或者

                Db : : field ( 'name' )
                - > table ( 'think_user_0' )
                - > union ( [ 'SELECT name FROM think_user_1' ,  'SELECT name FROM think_user_2' ] ,  true )
                - > select ( ) ;

                每个 union 方法相当于一个独立的 SELECT 语句。

                UNION 内部的 SELECT 语句必须拥有相同数量的列。列也必须拥有相似的数据类型。同时，每条 SELECT 语句中的列的顺序必须相同。
  
##### distinct
      DISTINCT 方法用于返回唯一不同的值 。

      例如数据库表中有以下数据

      以下代码会返回 =user_login=字段不同的数据

      Db : : table ( 'think_user' ) - > distinct ( true ) - > field ( 'user_login' ) - > select ( ) ;
  
      生成的 SQL 语句是：

      SELECT DISTINCT user_login FROM think_user
  
      返回以下数组

      array ( 2 )  {
      [ 0 ]  = >  array ( 1 )  {
      [ "user_login" ]  = >  string ( 7 )  "chunice"
      }
      [ 1 ]  = >  array ( 1 )  {
      [ "user_login" ]  = >  string ( 5 )  "admin"
      }
      }
  
      =distinct=方法的参数是一个布尔值。

##### lock


      =Lock=方法是用于数据库的锁机制，如果在查询或者执行操作的时候使用：

      Db : : name ( 'user' ) - > where ( 'id' , 1 ) - > lock ( true ) - > find ( ) ;
  
      就会自动在生成的 SQL 语句最后加上 =FOR UPDATE=或者 =FOR UPDATE NOWAIT=（Oracle 数据库）。

      lock 方法支持传入字符串用于一些特殊的锁定要求，例如：

      Db : : name ( 'user' ) - > where ( 'id' , 1 ) - > lock ( 'lock in share mode' ) - > find ( ) ;
  
##### cache
      =cache=方法用于查询缓存操作，也是连贯操作方法之一。

      #cache#可以用于 =select=、 =find=、 =value=和 =column=方法，以及其衍生方法，使用 =cache=方法后，在缓存有效期之内不会再次进行数据库查询操作，而是直接获取缓存中的数据，关于数据缓存的类型和设置可以参考缓存部分。

      下面举例说明，例如，我们对 find 方法使用 cache 方法如下：
    
      Db : : table ( 'user' ) - > where ( 'id' , 5 ) - > cache ( true ) - > find ( ) ;
  
      第一次查询结果会被缓存，第二次查询相同的数据的时候就会直接返回缓存中的内容，而不需要再次进行数据库查询操作。

      默认情况下， 缓存有效期是由默认的缓存配置参数决定的，但 =cache=方法可以单独指定，例如：

      Db : : table ( 'user' ) - > cache ( true , 60 ) - > find ( ) ;
      // 或者使用下面的方式 是等效的
      Db : : table ( 'user' ) - > cache ( 60 ) - > find ( ) ;
  
      表示对查询结果的缓存有效期 60 秒。

      cache 方法可以指定缓存标识：

      Db : : table ( 'user' ) - > cache ( 'key' , 60 ) - > find ( ) ;
  

      指定查询缓存的标识可以使得查询缓存更有效率。
  

      这样，在外部就可以通过 =\think\Cache=类直接获取查询缓存的数据，例如：

      $result  = Db : : table ( 'user' ) - > cache ( 'key' , 60 ) - > find ( ) ;
      $data  = \think\facade\Cache : : get ( 'key' ) ;
  
      =cache=方法支持设置缓存标签，例如：

      Db : : table ( 'user' ) - > cache ( 'key' , 60 , 'tagName' ) - > find ( ) ;
  
###### 缓存自动更新


       这里的缓存自动更新是指一旦数据更新或者删除后会自动清理缓存（下次获取的时候会自动重新缓存）。

       当你删除或者更新数据的时候，可以调用相同 =key=的 =cache=方法，会自动更新（清除）缓存，例如：

       Db : : table ( 'user' ) - > cache ( 'user_data' ) - > select ( [ 1 , 3 , 5 ] ) ;
       Db : : table ( 'user' ) - > cache ( 'user_data' ) - > update ( [ 'id' = > 1 , 'name' = > 'thinkphp' ] ) ;
       Db : : table ( 'user' ) - > cache ( 'user_data' ) - > select ( [ 1 , 3 , 5 ] ) ;
  
       最后查询的数据不会受第一条查询缓存的影响，确保查询和更新或者删除使用相同的缓存标识才能自动清除缓存。

       如果使用主键进行查询和更新(或者删除）的话，无需指定缓存标识会自动更新缓存

       Db : : table ( 'user' ) - > cache ( true ) - > find ( 1 ) ;
       Db : : table ( 'user' ) - > cache ( true ) - > where ( 'id' ,  1 ) - > update ( [ 'name' = > 'thinkphp' ] ) ;
       Db : : table ( 'user' ) - > cache ( true ) - > find ( 1 ) ;
  
##### comment


      COMMENT 方法 用于在生成的 SQL 语句中添加注释内容，例如：

      Db : : table ( 'think_score' ) - > comment ( '查询考试前十名分数' )
      - > field ( 'username,score' )
      - > limit ( 10 )
      - > order ( 'score desc' )
      - > select ( ) ;

      最终生成的 SQL 语句是：

      SELECT username ,score FROM think_score ORDER BY score desc LIMIT  10  /# 查询考试前十名分数 #/
  
##### fetchSql


      =fetchSql=用于直接返回 SQL 而不是执行查询，适用于任何的 CURD 操作方法。 例如：

      echo Db : : table ( 'user' ) - > fetchSql ( true ) - > find ( 1 ) ;
  
      输出结果为：

      SELECT  # FROM user where `id`  =  1
  

      对于某些 NoSQL 数据库可能不支持 fetchSql 方法
  

##### force


      force 方法用于数据集的强制索引操作，例如：

      Db : : table ( 'user' ) - > force ( 'user' ) - > select ( ) ;
  
      对查询强制使用 =user=索引， =user=必须是数据表实际创建的索引名称。

##### partition


      =partition= 方法用于 =MySQL=数据库的分区查询，用法如下：

      // 用于查询
      Db : : name ( 'log' )
      - > partition ( [ 'p1' , 'p2' ] )
      - > select ( ) ;

        // 用于写入
        Db : : name ( 'user' )
        - > partition ( 'p1' )
        - > insert ( [ 'name'  = >  'think' ,  'score'  = >  100' ] ) ;
  
##### failException


      =failException=设置查询数据为空时是否需要抛出异常，用于 =select=和 =find=方法，例如：

      // 数据不存在的话直接抛出异常
      Db : : name ( 'blog' )
              - > where ( 'status' , 1 )
              - > failException ( )
              - > select ( ) ;

                // 数据不存在返回空数组 不抛异常
                Db : : name ( 'blog' )
                - > where ( 'status' , 1 )
                - > failException ( false )
                - > select ( ) ;

              或者可以使用更方便的查空报错

              // 查询多条
              Db : : name ( 'blog' )
              - > where ( 'status' ,  1 )
              - > selectOrFail ( ) ;

              // 查询单条
              Db : : name ( 'blog' )
              - > where ( 'status' ,  1 )
              - > findOrFail ( ) ;

##### sequence
      =sequence=方法用于 =pgsql=数据库指定自增序列名，其它数据库不必使用，用法为：

      Db : : name ( 'user' )
      - > sequence ( 'user_id_seq' )
      - > insert ( [ 'name' = > 'thinkphp' ] ) ;

##### replace
      =replace=方法用于设置 =MySQL=数据库 =insert=方法或者 =insertAll=方法写入数据的时候是否适用 =REPLACE=方式。

      Db : : name ( 'user' )
      - > replace ( )
      - > insert ($data ) ;

##### extra
      =extra=方法可以用于 =CURD=查询，例如：

      Db : : name ( 'user' )
              - > extra ( 'IGNORE' )
              - > insert ( [ 'name'  = >  'think' ] ) ;

                Db : : name ( 'user' )
                - > extra ( 'DELAYED' )
                - > insert ( [ 'name'  = >  'think' ] ) ;

                Db : : name ( 'user' )
                - > extra ( 'SQL_BUFFER_RESULT' )
                - > select ( ) ;

##### duplicate
      用于设置 =DUPLICATE=查询，用法示例：

      Db : : name ( 'user' )
      - > duplicate ( [ 'score'  = >  10 ] )
      - > insert ( [ 'name'  = >  'think' ] ) ;

##### procedure
      =procedure=方法用于设置当前查询是否为存储过程查询，用法如下：

      $resultSet  = Db : : procedure ( true )
      - > query ( 'call procedure_name' ) ;

#### 聚合查询
     在应用中我们经常会用到一些统计数据，例如当前所有（或者满足某些条件）的用户数、所有用户的最大积分、用户的平均成绩等等，ThinkPHP 为这些统计操作提供了一系列的内置方法，包括：

     | 方法    | 说明                                       |
     |---------+--------------------------------------------|
     | count   | 统计数量，参数是要统计的字段名（可选）     |
     | max     | 获取最大值，参数是要统计的字段名（必须）   |
     | min     | 获取最小值，参数是要统计的字段名（必须）   |
     | avg     | 获取平均值，参数是要统计的字段名（必须）   |
     | sum     | 获取总分，参数是要统计的字段名（必须）     |


     聚合方法如果没有数据，默认都是 0，聚合查询都可以配合其它查询条件
  

##### 用法示例
      获取用户数： Db : : table ( 'think_user' ) - > count ( ) ;
 
      实际生成的 SQL 语句是： SELECT  COUNT ( # ) AS tp_count FROM `think_user` LIMIT  1
 
      或者根据字段统计： Db : : table ( 'think_user' ) - > count ( 'id' ) ;
 
      生成的 SQL 语句是：

      SELECT  COUNT (id ) AS tp_count FROM `think_user` LIMIT  1
 
      获取用户的最大积分：

      Db : : table ( 'think_user' ) - > max ( 'score' ) ;
 
      生成的 SQL 语句是：

      SELECT  MAX (score ) AS tp_max FROM `think_user` LIMIT  1
 
      如果你要获取的最大值不是一个数值，可以使用第二个参数关闭强制转换

      Db : : table ( 'think_user' ) - > max ( 'name' , false ) ;
 
      获取积分大于 0 的用户的最小积分：

      Db : : table ( 'think_user' ) - > where ( 'score' ,  '>' ,  0 ) - > min ( 'score' ) ;
 
      和 max 方法一样，min 也支持第二个参数用法

      Db : : table ( 'think_user' ) - > where ( 'score' ,  '>' ,  0 ) - > min ( 'name' , false ) ;
 
      获取用户的平均积分：

      Db : : table ( 'think_user' ) - > avg ( 'score' ) ;
 
      生成的 SQL 语句是：

      SELECT  AVG (score ) AS tp_avg FROM `think_user` LIMIT  1
 
      统计用户的总成绩：

      Db : : table ( 'think_user' ) - > where ( 'id' , 10 ) - > sum ( 'score' ) ;
 
      生成的 SQL 语句是：

      SELECT  SUM (score ) AS tp_sum FROM `think_user` LIMIT  1
 
      如果你要使用 =group=进行聚合查询，需要自己实现查询，例如：

      Db : : table ( 'score' ) - > field ( 'user_id,SUM(score) AS sum_score' ) - > group ( 'user_id' ) - > select ( ) ;
 
#### 分页查询
##### 分页实现
      =ThinkPHP=内置了分页实现，要给数据添加分页输出功能变得非常简单，可以直接在 =Db=类查询的时候调用 =paginate=方法：

      // 查询状态为1的用户数据 并且每页显示10条数据
      $list  = Db : : name ( 'user' ) - > where ( 'status' , 1 ) - > order ( 'id' ,  'desc' ) - > paginate ( 10 ) ;

      // 渲染模板输出
      return  view ( 'index' ,  [ 'list'  = > $list ] ) ;
 
      模板文件中分页输出代码如下：

      #+begin_src html
        <div >
          <ul >
            {volist name='list' id='user'}
            <li > {$user.nickname}   </li >
            {/volist}
          </ul>
        </div >
        {$list|raw}
      #+end_src
 
      也可以单独赋值分页输出的模板变量

      // 查询状态为1的用户数据 并且每页显示10条数据
      $list=Db::name('user') ->where('status' , 1) ->order('id' ,  'desc') ->paginate(10);

      // 获取分页显示
      $page  = $list - > render ( ) ;

      return  view ( 'index' ,  [ 'list'  = > $list ,  'page'  = > $page ] ) ;
 
      模板文件中分页输出代码如下：

      #+begin_src html
      <div >
      <ul >
      {volist name='list' id='user'}
      <li > {$user.nickname}   li >
      {/volist}
      ul >
      div >
      {$page|raw}
      #+end_src
 
      默认情况下，生成的分页输出是完整分页功能，带总分页数据和上下页码，分页样式只需要通过样式修改即可，完整分页默认生成的分页输出代码为：

      #+begin_src html
        <ul class = "pagination" >
          <li > <a href = "?page=1" > &laquo ; </a > </li >
          <li > <a href = "?page=1" > 1 </a > </li >
          <li class = "active" > <span> 2 </span > </li >
          <li class = "disabled" > <span > &raquo ; </span > </li >
        </ul >
        #+end_src
 
      如果你需要单独获取总的数据，可以使用

      #+begin_src php
      // 查询状态为1的用户数据 并且每页显示10条数据
      $list  = Db : : name ( 'user' ) - > where ( 'status' , 1 ) - > order ( 'id'  , 'desc' ) - > paginate ( 10 ) ;
      // 获取总记录数
      $count  = $list - > total ( ) ;
      return  view ( 'index' ,  [ 'list'  = > $list ,  'count'  = > $count ] ) ;
      #+end_src
 
###### 传入总记录数

       支持传入总记录数而不会自动进行总数计算，例如：

       // 查询状态为1的用户数据 并且每页显示10条数据 总记录数为1000
       $list  = Db : : name ( 'user' ) - > where ( 'status' , 1 ) - > paginate ( 10 , 1000 ) ;
       // 获取分页显示
       $page  = $list - > render ( ) ;

       return  view ( 'index' ,  [ 'list'  = > $list ,  'page'  = > $page ] ) ;
 

       对于 =UNION=查询以及一些特殊的复杂查询，推荐使用这种方式首先单独查询总记录数，然后再传入分页方法
  

###### 分页后数据处理


       支持分页类后数据直接 =each=遍历处理，方便修改分页后的数据，而不是只能通过模型的获取器来补充字段。

       #+begin_src php
       $list  = Db : : name ( 'user' ) - > where ( 'status' , 1 ) - > order ( 'id' ,  'desc' ) - > paginate ( ) - > each ( function ($item , $key ) {
       $item [ 'nickname' ]  =  'think' ;
       return $item ;
       } ) ;
       #+end_src
 
       如果是模型类操作分页数据的话， =each=方法的闭包函数中不需要使用返回值，例如：

       $list  = User : : where ( 'status' , 1 ) - > order ( 'id' ,  'desc' ) - > paginate ( ) - > each ( function ($item , $key ) {
       $item - >nickname  =  'think' ;
       } ) ;
 
##### 简洁分页
      如果你仅仅需要输出一个 仅仅只有上下页的分页输出，可以使用下面的简洁分页代码：

      // 查询状态为1的用户数据 并且每页显示10条数据
      $list  = Db : : name ( 'user' ) - > where ( 'status' , 1 ) - > order ( 'id' ,  'desc' ) - > paginate ( 10 ,  true ) ;

      // 渲染模板输出
      return  view ( 'index' ,  [ 'list'  = > $list ] ) ;
 
      简洁分页模式的输出代码为：

      #+begin_src html
        <ul class = "pager" >
          <li > <a href = "?page=1" > &laquo ; </a> </li >
          <li class = "disabled"> <span > &raquo ; </span > </li >
        </ul>
      #+end_src
 

      由于简洁分页模式不需要查询总数据数，因此可以提高查询性能。
  
##### 分页参数
      主要的分页参数如下：

      | 参数         | 描述          |
      |--------------+---------------|
      | list\_rows   | 每页数量      |
      | page         | 当前页        |
      | path         | url 路径       |
      | query        | url 额外参数   |
      | fragment     | url 锚点       |
      | var\_page    | 分页变量      |

      分页参数的设置可以在调用分页方法的时候传入，例如：

      $list  = Db : : name ( 'user' ) - > where ( 'status' , 1 ) - > paginate ( [
      'list_rows' = >  20 ,
      'var_page'  = >  'page' ,
      ] ) ;
 

      如果需要在分页的时候传入查询条件，可以使用 =query=参数拼接额外的查询参数
  

##### 大数据分页


      对于大量数据的分页查询，系统提供了一个高性能的 =paginateX=分页查询方法，用法和 =paginate=分页查询存在一定区别。如果你要分页查询的数据量在百万级以上，使用 =paginateX=方法会有明显的提升，尤其是在分页数较大的情况下。并且由于针对大数据量而设计，该分页查询只能采用简洁分页模式，所以没有总数。


      分页查询的排序字段一定要使用索引字段，并且是连续的整型，否则会有数据遗漏。
  

      主要场景是针对主键进行分页查询，默认使用主键倒序查询分页数据。

      $list  = Db : : name ( 'user' ) - > where ( 'status' , 1 ) - > paginateX ( 20 ) ;
 
      也可以在查询的时候可以指定主键和排序

      $list  = Db : : name ( 'user' ) - > where ( 'status' , 1 ) - > paginateX ( 20 ,  'id' ,  'desc' ) ;
 
      查询方法会执行两次查询，第一次查询用于查找满足当前查询条件的最大或者最小值，然后配合主键查询条件来进行分页数据查询。

##### 自定义分页类


      如果你需要自定义分页，可以扩展一个分页驱动。

      然后在 =provider.php=定义文件中重新绑定

      return  [
      'think\Paginator'     = >     'app\common\Bootstrap'
      ] ;
 
#### 时间查询
##### 时间比较

      框架内置了常用的时间查询方法，并且可以自动识别时间字段的类型，所以无论采用什么类型的时间字段，都可以统一使用本章的时间查询用法。
  

###### 使用 =whereTime=方法


       =whereTime=方法提供了日期和时间字段的快捷查询，示例如下：

       // 大于某个时间
       Db : : name ( 'user' )
       - > whereTime ( 'birthday' ,  '>=' ,  '1970-10-1' )
       - > select ( ) ;
         // 小于某个时间
       Db : : name ( 'user' )
       - > whereTime ( 'birthday' ,  '<' ,  '2000-10-1' )
       - > select ( ) ;
         // 时间区间查询
       Db : : name ( 'user' )
       - > whereTime ( 'birthday' ,  'between' ,  [ '1970-10-1' ,  '2000-10-1' ] )
       - > select ( ) ;
         // 不在某个时间区间
       Db : : name ( 'user' )
       - > whereTime ( 'birthday' ,  'not between' ,  [ '1970-10-1' ,  '2000-10-1' ] )
       - > select ( ) ;

       还可以使用下面的时间表达式进行时间查询

       // 查询两个小时内的博客
       Db : : name ( 'blog' )
       - > whereTime ( 'create_time' , '-2 hours' )
       - > select ( ) ;

##### 查询某个时间区间


      针对时间的区间查询，系统还提供了 =whereBetweenTime/whereNotBetweenTime=快捷方法。

      // 查询2017年上半年注册的用户
      Db : : name ( 'user' )
      - > whereBetweenTime ( 'create_time' ,  '2017-01-01' ,  '2017-06-30' )
      - > select ( ) ;

        // 查询不是2017年上半年注册的用户
        Db : : name ( 'user' )
        - > whereNotBetweenTime ( 'create_time' ,  '2017-01-01' ,  '2017-06-30' )
        - > select ( ) ;
 
##### 查询某年


      查询今年注册的用户

      Db : : name ( 'user' )
      - > whereYear ( 'create_time' )
      - > select ( ) ;   

      查询去年注册的用户

      Db : : name ( 'user' )
      - > whereYear ( 'create_time' ,  'last year' )
      - > select ( ) ;   

      查询某一年的数据使用

      // 查询2018年注册的用户
      Db : : name ( 'user' )
      - > whereYear ( 'create_time' ,  '2018' )
      - > select ( ) ;    

##### 查询某月


      查询本月注册的用户

      Db : : name ( 'user' )
      - > whereMonth ( 'create_time' )
      - > select ( ) ;   

      查询上月注册用户

      Db : : name ( 'user' )
      - > whereMonth ( 'create_time' , 'last month' )
      - > select ( ) ;   

      查询 2018 年 6 月注册的用户

      Db : : name ( 'user' )
      - > whereMonth ( 'create_time' ,  '2018-06' )
      - > select ( ) ;    

##### 查询某周


      查询本周数据

      Db : : name ( 'user' )
      - > whereWeek ( 'create_time' )
      - > select ( ) ;    

      查询上周数据

      Db : : name ( 'user' )
      - > whereWeek ( 'create_time' ,  'last week' )
      - > select ( ) ;    

      查询指定某天开始的一周数据

      // 查询2019-1-1到2019-1-7的注册用户
      Db : : name ( 'user' )
      - > whereWeek ( 'create_time' ,  '2019-1-1' )
      - > select ( ) ;    

##### 查询某天


      查询当天注册的用户

      Db : : name ( 'user' )
      - > whereDay ( 'create_time' )
      - > select ( ) ;   

      查询昨天注册的用户

      Db : : name ( 'user' )
      - > whereDay ( 'create_time' ,  'yesterday' )
      - > select ( ) ;   

      查询某天的数据使用

      // 查询2018年6月1日注册的用户
      Db : : name ( 'user' )
      - > whereDay ( 'create_time' ,  '2018-06-01' )
      - > select ( ) ;    

##### 时间字段区间比较


      可以支持对两个时间字段的区间比较

      // 查询有效期内的活动
      Db : : name ( 'event' )
      - > whereBetweenTimeField ( 'start_time' ,  'end_time' )
      - > select ( ) ;

      上面的查询相当于

      // 查询有效期内的活动
      Db : : name ( 'event' )
      - > whereTime ( 'start_time' ,  '<=' ,  time ( ) )
      - > whereTime ( 'end_time' ,  '>=' ,  time ( ) )
      - > select ( ) ;

##### 自定义时间查询规则
      你可以通过在数据库配置文件中设置 =time_query_rule=添加自定义的时间查询规则，

      'time_query_rule'     = >     [
      'hour'     = >     [ '1 hour ago' ,  'now' ] ,
      ] ,
 
#### 高级查询
##### 快捷查询
      快捷查询方式是 #一种多字段相同查询条件#的简化写法，可以进一步简化查询条件的写法，在多个字段之间用 =|=分割表示 =OR=查询，用 =&=分割表示 =AND=查询，可以实现下面的查询，例如：

      Db : : table ( 'think_user' )
      - > where ( 'name|title' , 'like' , 'thinkphp%' )
      - > where ( 'create_time&update_time' , '>' , 0 )
      - > find ( ) ;

      生成的查询 SQL 是：

      SELECT  #  FROM  `think_user `  WHERE  (  `name `  LIKE  'thinkphp%'  OR  `title `  LIKE  'thinkphp%'  )  AND  (  `create_time `  >  0  AND  `update_time `  >  0  )  LIMIT  1
 

      快捷查询支持所有的查询表达式。
  

##### 批量（字段）查询

      可以进行多个条件的批量条件查询定义，例如：

      Db : : table ( 'think_user' )
               - > where ( [
                 [ 'name' ,  'like' ,  'thinkphp%' ] ,
                 [ 'title' ,  'like' ,  '%thinkphp' ] ,
                 [ 'id' ,  '>' ,  0 ] ,
                 [ 'status' ,  '=' ,  1 ] ,
                 ] )
                 - > select ( ) ;

               生成的 SQL 语句为：

               SELECT  #  FROM  `think_user `  WHERE  `name `  LIKE  'thinkphp%'  AND  `title `  LIKE  '%thinkphp'  AND  `id `  >  0  AND  ` status `  =  '1'
 
               数组方式如果使用 =exp=查询的话，一定要用 =raw=方法。

               Db : : table ( 'think_user' )
               - > where ( [
                 [ 'name' ,  'like' ,  'thinkphp%' ] ,
                 [ 'title' ,  'like' ,  '%thinkphp' ] ,
                 [ 'id' ,  'exp' , Db : : raw ( '>score' ) ] ,
                 [ 'status' ,  '=' ,  1 ] ,
               ] )
               - > select ( ) ;

               数组查询方式，确保你的查询数组不能被用户提交数据控制，用户提交的表单数据应该是作为查询数组的一个元素传入，如下：

               Db : : table ( 'think_user' )
               - > where ( [
                 [ 'name' ,  'like' , $name  .  '%' ] ,
                 [ 'title' ,  'like' ,  '%'  . $title ] ,
                 [ 'id' ,  '>' , $id ] ,
                 [ 'status' ,  '=' , $status ] ,
               ] )
               - > select ( ) ;


               注意，相同的字段的多次查询条件可能会合并，如果希望某一个 =where=方法里面的条件单独处理，可以使用下面的方式，避免被其它条件影响。
  

               $map  =  [
               [ 'name' ,  'like' ,  'thinkphp%' ] ,
               [ 'title' ,  'like' ,  '%thinkphp' ] ,
               [ 'id' ,  '>' ,  0 ] ,
               ] ;
               Db : : table ( 'think_user' )
               - > where ( [ $map  ] )
               - > where ( 'status' , 1 )
               - > select ( ) ;

               生成的 SQL 语句为：

               SELECT  #  FROM  `think_user `  WHERE  (  `name `  LIKE  'thinkphp%'  AND  `title `  LIKE  '%thinkphp'  AND  `id `  >  0  )  AND  ` status `  =  '1'
 
               如果使用下面的多个条件组合

               $map1  =  [
               [ 'name' ,  'like' ,  'thinkphp%' ] ,
               [ 'title' ,  'like' ,  '%thinkphp' ] ,
               ] ;
        
               $map2  =  [
               [ 'name' ,  'like' ,  'kancloud%' ] ,
               [ 'title' ,  'like' ,  '%kancloud' ] ,
               ] ;    
        
               Db : : table ( 'think_user' )
               - > whereOr ( [ $map1 , $map2  ] )
               - > select ( ) ;

               生成的 SQL 语句为：

               SELECT  #  FROM  `think_user `  WHERE  (  `name `  LIKE  'thinkphp%'  AND  `title `  LIKE  '%thinkphp'  )  OR  (  `name `  LIKE  'kancloud%'  AND  `title `  LIKE  '%kancloud'  )
 

               善用多维数组查询，可以很方便的拼装出各种复杂的 SQL 语句
  

##### 闭包查询
      #+begin_src php
        $name  =  'thinkphp' ;
        $id  =  10 ;
        Db::table ( 'think_user' ) - > where ( function  ($query )  use ($name , $id )  {
            $query - > where ( 'name' , $name )
                - > whereOr ( 'id' ,  '>' , $id ) ;
        } ) - > select ( ) ;
      #+end_src
 
      生成的 SQL 语句为：

      SELECT  #  FROM  `think_user `  WHERE  (  `name `  =  'thinkphp'  OR  `id `  >  10  )
 
      可见每个闭包条件两边也会自动加上括号。
  
##### 混合查询
      可以结合前面提到的所有方式进行混合查询，例如：

      #+begin_src php
        Db : : table ( 'think_user' )
            - > where ( 'name' ,  'like' ,  'thinkphp%' )
            - > where ( function  ($query )  {
                $query - > where ( 'id' ,  '<' ,  10 ) ;
            } )
            - > select ( ) ;
      #+end_src
 
      生成的 SQL 语句是：

      SELECT  #  FROM  `think_user `  WHERE   `name `  LIKE  'thinkphp%'  AND  (  `id `  <  10  )
 
##### 字符串条件查询


      对于一些实在复杂的查询，也可以直接使用原生 SQL 语句进行查询，例如：

      Db : : table ( 'think_user' )
      - > whereRaw ( 'id > 0 AND name LIKE "thinkphp%"' )
      - > select ( ) ;

      为了安全起见，我们可以对字符串查询条件使用参数绑定，例如：

      Db : : table ( 'think_user' )
      - > whereRaw ( 'id > :id AND name LIKE :name ' ,  [ 'id'  = >  0 ,  'name'  = >  'thinkphp%' ] )
      - > select ( ) ;

##### 快捷方法


      系统封装了一系列快捷方法，用于简化查询，包括：

      | 方法                | 作用                   |
      |---------------------+------------------------|
      | =whereOr=           | 字段 OR 查询             |
      | =whereXor=          | 字段 XOR 查询            |
      | =whereNull=         | 查询字段是否为 Null     |
      | =whereNotNull=      | 查询字段是否不为 Null   |
      | =whereIn=           | 字段 IN 查询             |
      | =whereNotIn=        | 字段 NOT IN 查询         |
      | =whereBetween=      | 字段 BETWEEN 查询        |
      | =whereNotBetween=   | 字段 NOT BETWEEN 查询    |
      | =whereLike=         | 字段 LIKE 查询           |
      | =whereNotLike=      | 字段 NOT LIKE 查询       |
      | =whereExists=       | EXISTS 条件查询         |
      | =whereNotExists=    | NOT EXISTS 条件查询     |
      | =whereExp=          | 表达式查询             |
      | =whereColumn=       | 比较两个字段           |

      下面举例说明下两个字段比较的查询条件 =whereColumn=方法的用法。

      查询 =update_time=大于 =create_time=的用户数据

      Db : : table ( 'think_user' )
      - > whereColumn ( 'update_time' , '>' , 'create_time' )
      - > select ( ) ;

      生成的 SQL 语句是：

      SELECT  # FROM `think_user` WHERE  ( `update_time`  > `create_time`  ) 
 
      查询 =name=和 =nickname=相同的用户数据

      Db : : table ( 'think_user' )
      - > whereColumn ( 'name' , '=' , 'nickname' )
      - > select ( ) ;

      生成的 SQL 语句是：

      SELECT  # FROM `think_user` WHERE  ( `name`  = `nickname`  )
 
      相同字段条件也可以简化为

      Db : : table ( 'think_user' )
      - > whereColumn ( 'name' , 'nickname' )
      - > select ( ) ;

      支持数组方式比较多个字段

      Db : : name ( 'user' ) - > whereColumn ( [
      [ 'title' ,  '=' ,  'name' ] ,
      [ 'update_time' ,  '>=' ,  'create_time' ] ,
      ] ) - > select ( ) ;
 
      生成的 SQL 语句是：

      SELECT  # FROM `think_user` WHERE  ( `name`  = `nickname` AND `update_time`  > `create_time`  ) 
 
##### 动态查询


      查询构造器还提供了动态查询机制，用于简化查询条件，包括：

      | 动态查询                | 描述                     |
      |-------------------------+--------------------------|
      | =whereFieldName=        | 查询某个字段的值         |
      | =whereOrFieldName=      | 查询某个字段的值         |
      | =getByFieldName=        | 根据某个字段查询         |
      | =getFieldByFieldName=   | 根据某个字段获取某个值   |

      其中 =FieldName=表示数据表的实际字段名称的驼峰法表示，假设数据表 =user=中有 =email=和 =nick_name=字段，我们可以这样来查询。

      // 根据邮箱（email）查询用户信息
      $user  = Db : : table ( 'user' )
               - > whereEmail ( 'thinkphp@qq.com' )
               - > find ( ) ;

                 // 根据昵称（nick_name）查询用户
                 $email  = Db : : table ( 'user' )
                 - > whereNickName ( 'like' ,  '%流年%' )
                 - > select ( ) ;

                 // 根据邮箱查询用户信息
                 $user  = Db : : table ( 'user' )
                 - > getByEmail ( 'thinkphp@qq.com' ) ;

                 // 根据昵称（nick_name）查询用户信息
                 $user  = Db : : table ( 'user' )
                 - > field ( 'id,name,nick_name,email' )
                 - > getByNickName ( '流年' ) ;

                 // 根据邮箱查询用户的昵称
                 $nickname  = Db : : table ( 'user' )
                 - > getFieldByEmail ( 'thinkphp@qq.com' ,  'nick_name' ) ;

                 // 根据昵称（nick_name）查询用户邮箱
                 $email  = Db : : table ( 'user' )
                 - > getFieldByNickName ( '流年' ,  'email' ) ;


               =getBy=和 =getFieldBy=方法只会查询一条记录，可以和其它的链式方法搭配使用
  

##### 条件查询


      查询构造器支持条件查询，例如：

      Db : : name ( 'user' ) - > when ($condition ,  function  ($query )  {
      // 满足条件后执行
      $query - > where ( 'score' ,  '>' ,  80 ) - > limit ( 10 ) ;
      } ) - > select ( ) ;
 
      并且支持不满足条件的分支查询

      Db : : name ( 'user' ) - > when ($condition ,  function  ($query )  {
      // 满足条件后执行
      $query - > where ( 'score' ,  '>' ,  80 ) - > limit ( 10 ) ;
      } ,  function  ($query )  {
      // 不满足条件执行
      $query - > where ( 'score' ,  '>' ,  60 ) ;
      } ) ;
 
#### 视图查询


     视图查询可以实现不依赖数据库视图的多表查询，并不需要数据库支持视图，是 JOIN 方法的推荐替代方法，例如：

     Db : : view ( 'User' ,  'id,name' )
     - > view ( 'Profile' ,  'truename,phone,email' ,  'Profile.user_id=User.id' )
     - > view ( 'Score' ,  'score' ,  'Score.user_id=Profile.id' )
     - > where ( 'score' ,  '>' ,  80 )
     - > select ( ) ;

     生成的 SQL 语句类似于：

     SELECT  User .id , User .name ,Profile .truename ,Profile .phone ,Profile .email ,Score .score  FROM think_user  User  INNER  JOIN think_profile Profile  ON Profile .user_id = User .id  INNER  JOIN think_socre Score  ON Score .user_id =Profile .id  WHERE Score .score  >  80
 

     注意，视图查询无需调用 =table=和 =join=方法，并且在调用 =where=和 =order=方法的时候只需要使用字段名而不需要加表名。
  

     默认使用 =INNER join=查询，如果需要更改，可以使用：

     Db : : view ( 'User' ,  'id,name' )
     - > view ( 'Profile' ,  'truename,phone,email' ,  'Profile.user_id=User.id' ,  'LEFT' )
     - > view ( 'Score' ,  'score' ,  'Score.user_id=Profile.id' ,  'RIGHT' )
     - > where ( 'score' ,  '>' ,  80 )
     - > select ( ) ;

     生成的 SQL 语句类似于：

     SELECT  User .id , User .name ,Profile .truename ,Profile .phone ,Profile .email ,Score .score  FROM think_user  User  LEFT  JOIN think_profile Profile  ON Profile .user_id = User .id  RIGHT  JOIN think_socre Score  ON Score .user_id =Profile .id  WHERE Score .score  >  80
 
     可以使用别名：

     Db : : view ( 'User' ,  [ 'id'  = >  'uid' ,  'name'  = >  'account' ] )
     - > view ( 'Profile' ,  'truename,phone,email' ,  'Profile.user_id=User.id' )
     - > view ( 'Score' ,  'score' ,  'Score.user_id=Profile.id' )
     - > where ( 'score' ,  '>' ,  80 )
     - > select ( ) ;

     生成的 SQL 语句变成：

     SELECT  User .id  AS uid , User .name  AS account ,Profile .truename ,Profile .phone ,Profile .email ,Score .score  FROM think_user  User  INNER  JOIN think_profile Profile  ON Profile .user_id = User .id  INNER  JOIN think_socre Score  ON Score .user_id =Profile .id  WHERE Score .score  >  80
 
     可以使用数组的方式定义表名以及别名，例如：

     Db : : view ( [ 'think_user'  = >  'member' ] ,  [ 'id'  = >  'uid' ,  'name'  = >  'account' ] )
     - > view ( 'Profile' ,  'truename,phone,email' ,  'Profile.user_id=member.id' )
     - > view ( 'Score' ,  'score' ,  'Score.user_id=Profile.id' )
     - > where ( 'score' ,  '>' ,  80 )
     - > select ( ) ;

     生成的 SQL 语句变成：

     SELECT member .id  AS uid ,member .name  AS account ,Profile .truename ,Profile .phone ,Profile .email ,Score .score  FROM think_user member  INNER  JOIN think_profile Profile  ON Profile .user_id =member .id  INNER  JOIN think_socre Score  ON Score .user_id =Profile .id  WHERE Score .score  >  80
 
#### JSON 字段


     如果你的 =user=表有一个 =info=字段是 =JSON=类型的（或者说你存储的是 JSON 格式，但并非是要 JSON 字段类型），你可以使用下面的方式操作数据。

##### JSON 数据写入


      $user [ 'name' ]  =  'thinkphp' ;
      $user [ 'info' ]  =  [
      'email'     = >  'thinkphp@qq.com' ,
      'nickname'  = >  '流年' ,
      ] ;
      Db : : name ( 'user' )
      - > json ( [ 'info' ] )
      - > insert ($user ) ;

##### JSON 数据查询


      查询整个 JSON 数据：

      $user  = Db : : name ( 'user' )
             - > json ( [ 'info' ] )
             - > find ( 1 ) ;
               dump ($user ) ;

             查询条件为 JSON 数据

             $user  = Db : : name ( 'user' )
             - > json ( [ 'info' ] )
             - > where ( 'info->nickname' , 'ThinkPHP' )
             - > find ( ) ;
             dump ($user ) ;
 
             由于 JSON 字段的属性类型并不会自动获取，所以，如果是整型数据查询的话，可以设置 JSON 字段类型，例如：

             $user  = Db : : name ( 'user' )
             - > json ( [ 'info' ] )
             - > where ( 'info->user_id' ,  10 )
             - > setFieldType ( [ 'info->user_id'  = >  'int' ] )
             - > find ( ) ;
             dump ($user ) ;
 
##### JSON 数据更新


      完整 JSON 数据更新

      $data [ 'info' ]  =  [
      'email'     = >  'kancloud@qq.com' ,
      'nickname'  = >  'kancloud' ,
      ] ;
      Db : : name ( 'user' )
      - > json ( [ 'info' ] )
      - > where ( 'id' , 1 )
      - > update ($data ) ;

      单个 JSON 数据更新

      $data [ 'info->nickname' ]  =  'ThinkPHP' ;
      Db : : name ( 'user' )
      - > json ( [ 'info' ] )
      - > where ( 'id' , 1 )
      - > update ($data ) ;

#### 子查询


     首先构造子查询 SQL，可以使用下面三种的方式来构建子查询。

##### 使用 =fetchSql=方法


      fetchSql 方法表示不进行查询而只是返回构建的 SQL 语句，并且不仅仅支持 =select=，而是支持所有的 CURD 查询。

      $subQuery  = Db : : table ( 'think_user' )
      - > field ( 'id,name' )
      - > where ( 'id' ,  '>' ,  10 )
      - > fetchSql ( true )
      - > select ( ) ;

      生成的 subQuery 结果为：

      SELECT  `id ` , `name `  FROM  `think_user `  WHERE  `id `  >  10 
 
##### 使用 =buildSql=构造子查询
      $subQuery  = Db : : table ( 'think_user' )
      - > field ( 'id,name' )
      - > where ( 'id' ,  '>' ,  10 )
      - > buildSql ( ) ;

      生成的 subQuery 结果为：

      (  SELECT  `id ` , `name `  FROM  `think_user `  WHERE  `id `  >  10  )
 
      调用 =buildSql=方法后不会进行实际的查询操作，而只是生成该次查询的 SQL 语句（为了避免混淆，会在 SQL 两边加上括号），然后我们直接在后续的查询中直接调用。
          
      然后使用子查询构造新的查询：

      Db : : table ($subQuery  .  ' a' )
      - > where ( 'a.name' ,  'like' ,  'thinkphp' )
      - > order ( 'id' ,  'desc' )
      - > select ( ) ;

      生成的 SQL 语句为：

      SELECT  #  FROM  (  SELECT  `id ` , `name `  FROM  `think_user `  WHERE  `id `  >  10  ) a  WHERE a .name  LIKE  'thinkphp'  ORDER  BY  `id `  desc
 
##### 使用闭包构造子查询


      =IN/NOT IN=和 =EXISTS/NOT EXISTS=之类的查询可以直接使用闭包作为子查询，例如：

      Db : : table ( 'think_user' )
               - > where ( 'id' ,  'IN' ,  function  ($query )  {
                 $query - > table ( 'think_profile' ) - > where ( 'status' ,  1 ) - > field ( 'id' ) ;
                 } )
                 - > select ( ) ;

               生成的 SQL 语句是

               SELECT  #  FROM  `think_user `  WHERE  `id `  IN  (  SELECT  `id `  FROM  `think_profile `  WHERE  ` status `  =  1  )
 
               Db : : table ( 'think_user' )
               - > whereExists ( function  ($query )  {
                 $query - > table ( 'think_profile' ) - > where ( 'status' ,  1 ) ;
               } ) - > find ( ) ;
 
               生成的 SQL 语句为

               SELECT  # FROM `think_user` WHERE EXISTS  ( SELECT  # FROM `think_profile` WHERE `status`  =  1  ) 
 

               除了上述查询条件外，比较运算也支持使用闭包子查询
  
#### 原生查询
     =Db=类支持原生 =SQL=查询操作，主要包括下面两个方法：


     =V6.0.3+=版本开始，原生查询仅支持 Db 类操作，不支持在模型中调用原生查询方法（包括 =query=和 =execute=方法）。
#####  =query=方法  ! 注意，数组索引不能重复，要变一下

      =query=方法用于执行 =SQL=查询操作，返回查询结果数据集（数组）。

      使用示例：
      Db : : query ( "select # from think_user where status=:id" ,  [ 'id'  = >  1 ] ) ;
 
      如果你当前采用了分布式数据库，并且设置了读写分离的话， =query=方法默认是在读服务器执行，而不管你的 SQL 语句是什么。
  
      如果希望从主库读取，可以使用

      Db : : query ( "select # from think_user where status=:id" ,  [ 'id'  = >  1 ] ,  true ) ;
 
#####  =execute=方法


      =execute=用于更新和写入数据的 sql 操作，如果数据非法或者查询错误则返回 =false=，否则返回影响的记录数。

      使用示例：

      Db : : execute ( "update think_user set name='thinkphp' where status=1" ) ;
 

      如果你当前采用了分布式数据库，并且设置了读写分离的话， =execute=方法始终是在写服务器执行，而不管你的 SQL 语句是什么。
  

##### 参数绑定


      支持在原生查询的时候使用参数绑定，包括问号占位符或者命名占位符，例如：

      Db : : query ( "select # from think_user where id=? AND status=?" ,  [ 8 ,  1 ] ) ;
      // 命名绑定
      Db : : execute ( "update think_user set name=:name where status=:status" ,  [ 'name'  = >  'thinkphp' ,  'status'  = >  1 ] ) ;
 

      注意不支持对表名使用参数绑定
  
### 查询事件
#### 查询事件
     数据库操作的回调也称为查询事件，是针对数据库的 CURD 操作而设计的回调方法，主要包括：

     | 事件             | 描述                     |
     |------------------+--------------------------|
     | before\_select   | =select=查询前回调       |
     | before\_find     | =find=查询前回调         |
     | after\_insert    | =insert=操作成功后回调   |
     | after\_update    | =update=操作成功后回调   |
     | after\_delete    | =delete=操作成功后回调   |

     使用下面的方法注册数据库查询事件

     \think\facade\Db : : event ( 'before_select' ,  function  ($query )  {
     // 事件处理
     return $result ;
     } ) ;

     同一个查询事件可以注册多个响应执行。查询事件在新版里面也已经被事件系统接管了，因此如果你注册了一个 =before_select=查询事件监听，底层其实是向标识为 =db.before_select=的事件注册了一个监听。


     查询事件的方法参数只有一个：当前的查询对象。但你可以通过依赖注入的方式添加额外的参数。
  
### 获取器
#### 获取器


     Db 类也可以支持获取器定义，例如：

     Db : : name ( 'user' ) - > withAttr ( 'name' ,  function ($value , $data )  {
     return  strtolower ($value ) ;
     } ) - > select ( ) ;

     获取器方法支持传入两个参数，第一个参数是当前字段的值，第二个参数是所有的数据。

     上面的代码，查询的数据集数据中的 =name=字段的值会统一进行小写转换。


     =withAttr=方法可以多次调用，对多个字段定义获取器。
  

     支持对 =JSON=字段定义获取器，例如：

     $user  = Db : : name ( 'user' )
            - > json ( [ 'info' ] )
            - > withAttr ( 'info.name' ,  function ($value , $data )  {
              return  strtolower ($value ) ;
              } ) - > find ( 1 ) ;
              dump ($user ) ;    

            查询结果返回的时候，会自动对 =info=字段（ =JSON=字段）的 =name=属性使用获取器操作。

### 事务操作

    使用事务处理的话，需要数据库引擎支持事务处理。比如 =MySQL= 的 =MyISAM= 不支持事务处理，需要使用 =InnoDB= 引擎。
  

    最简单的方式是使用 =transaction= 方法操作数据库事务，当闭包中的代码发生异常会自动回滚，例如：

    Db : : transaction ( function  ( )  {
    Db : : table ( 'think_user' ) - > find ( 1 ) ;
    Db : : table ( 'think_user' ) - > delete ( 1 ) ;
    } ) ;

    也可以手动控制事务，例如：

    // 启动事务
    Db : : startTrans ( ) ;
    try  {
    Db : : table ( 'think_user' ) - > find ( 1 ) ;
    Db : : table ( 'think_user' ) - > delete ( 1 ) ;
    // 提交事务
    Db : : commit ( ) ;
    }  catch  (  \Exception $e )  {
    // 回滚事务
    Db : : rollback ( ) ;
    }


    注意在事务操作的时候，确保你的数据库连接使用的是同一个。
  

    可以支持 MySQL 的 =XA=事务用于实现全局（分布式）事务，你可以使用：

    Db : : transactionXa ( function  ( )  {
    Db : : connect ( 'db1' ) - > table ( 'think_user' ) - > delete ( 1 ) ;
    Db : : connect ( 'db2' ) - > table ( 'think_user' ) - > delete ( 1 ) ;
    } ,  [Db : : connect ( 'db1' ) ,Db : : connect ( 'db2' ) ] ) ;


    要确保你的数据表引擎为 =InnoDB=，并且开启 XA 事务支持。
  
### 存储过程


    数据访问层支持存储过程调用，调用数据库存储过程使用下面的方法：

    $resultSet  = Db : : query ( 'call procedure_name' ) ;
    foreach  ($resultSet as $result )  {

    }

    存储过程返回的是一个数据集，如果你的存储过程不需要返回任何的数据，那么也可以使用 execute 方法：

    Db : : execute ( 'call procedure_name' ) ;

    存储过程可以支持输入和输出参数，以及进行参数绑定操作。

    $resultSet  = Db : : query ( 'call procedure_name(:in_param1,:in_param2,:out_param)' ,  [
    'in_param1'  = > $param1 ,
    'in_param2'  = >  [$param2 , PDO : :PARAM_INT ] ,
    'out_param'  = >  [$outParam , PDO : :PARAM_STR  | PDO : :PARAM_INPUT_OUTPUT ,  4000 ] ,
    ] ) ;

    输出参数的绑定必须额外使用 =PDO::PARAM_INPUT_OUTPUT=，并且可以和输入参数公用一个参数。


    无论存储过程内部做了什么操作，每次存储过程调用仅仅被当成一次查询。
  
### 数据集
    数据库的查询结果默认返回数据集对象。

    // 获取数据集
    $users  = Db : : name ( 'user' ) - > select ( ) ;
    // 遍历数据集
    foreach ($users as $user ) {
    echo $user [ 'name' ] ;
    echo $user [ 'id' ] ;
    }

    返回的数据集对象是 =think\Collection=，提供了和数组无差别用法，并且另外封装了一些额外的方法。


    在模型中进行数据集查询，全部返回数据集对象，但使用的是 =think\model\Collection=类（继承 =think\Collection=），但用法是一致的。
  

    可以直接使用数组的方式操作数据集对象，例如：

    // 获取数据集
    $users  = Db : : name ( 'user' ) - > select ( ) ;
    // 直接操作第一个元素
    $item   = $users [ 0 ] ;
    // 获取数据集记录数
    $count  =  count ($users ) ;
    // 遍历数据集
    foreach ($users as $user ) {
    echo $user [ 'name' ] ;
    echo $user [ 'id' ] ;
    }

    需要注意的是，如果要判断数据集是否为空，不能直接使用 =empty=判断，而必须使用数据集对象的 =isEmpty=方法判断，例如：

    $users  = Db : : name ( 'user' ) - > select ( ) ;
    if ($users - > isEmpty ( ) ) {
    echo  '数据集为空' ;
    }

    =Collection=类包含了下列主要方法：

    | 方法              | 描述                                       |
    |-------------------+--------------------------------------------|
    | isEmpty           | 是否为空                                   |
    | toArray           | 转换为数组                                 |
    | all               | 所有数据                                   |
    | merge             | 合并其它数据                               |
    | diff              | 比较数组，返回差集                         |
    | flip              | 交换数据中的键和值                         |
    | intersect         | 比较数组，返回交集                         |
    | keys              | 返回数据中的所有键名                       |
    | pop               | 删除数据中的最后一个元素                   |
    | shift             | 删除数据中的第一个元素                     |
    | unshift           | 在数据开头插入一个元素                     |
    | push              | 在结尾插入一个元素                         |
    | reduce            | 通过使用用户自定义函数，以字符串返回数组   |
    | reverse           | 数据倒序重排                               |
    | chunk             | 数据分隔为多个数据块                       |
    | each              | 给数据的每个元素执行回调                   |
    | filter            | 用回调函数过滤数据中的元素                 |
    | column            | 返回数据中的指定列                         |
    | sort              | 对数据排序                                 |
    | order             | 指定字段排序                               |
    | shuffle           | 将数据打乱                                 |
    | slice             | 截取数据中的一部分                         |
    | map               | 用回调函数处理数组中的元素                 |
    | where             | 根据字段条件过滤数组中的元素               |
    | whereLike         | Like 查询过滤元素                           |
    | whereNotLike      | Not Like 过滤元素                           |
    | whereIn           | IN 查询过滤数组中的元素                     |
    | whereNotIn        | Not IN 查询过滤数组中的元素                 |
    | whereBetween      | Between 查询过滤数组中的元素                |
    | whereNotBetween   | Not Between 查询过滤数组中的元素            |

## 模型 
### 定义
#### 模型定义
     定义一个模型类很简单，例如下面是一个 =User=模型：

     #+begin_src php
       < ?php
           namespace app\model ;

       use think\Model ;

       class  User extends  Model
       {
       }
     #+end_src


     请确保你已经在数据库配置文件中配置了数据库连接信息，如不清楚请参考数据库一章
  

     模型会自动对应数据表，模型类的命名规则是除去表前缀的数据表名称，采用驼峰法命名，并且首字母大写，例如：

     | 模型名     | 约定对应数据表（假设数据库的前缀定义是 =think_=）   |
     |------------+-----------------------------------------------------|
     | User       | think\_user                                         |
     | UserType   | think\_user\_type                                   |

     如果你的规则和上面的系统约定不符合，那么需要设置 Model 类的数据表名称属性，以确保能够找到对应的数据表。


     模型自动对应的数据表名称都是遵循小写+下划线规范，如果你的表名有大写的情况，必须通过设置模型的 =table=属性。
  

     如果你希望给模型类添加后缀，需要设置 =name=属性或者 =table=属性。

     < ?php
     namespace app\model ;

     use think\Model ;

     class  UserModel extends  Model
     {
     protected $name  =  'user' ;
     }

#### 模型设置


     默认主键为 =id=，如果你没有使用 =id=作为主键名，需要在模型中设置属性：

     < ?php
     namespace app\model ;

     use think\Model ;

     class  User extends  Model
     {
     protected $pk  =  'uid' ;
     }

     如果你想指定数据表甚至数据库连接的话，可以使用：

     < ?php
     namespace app\model ;

     use think\Model ;

     class  User extends  Model
     {
     // 设置当前模型对应的完整数据表名称
     protected $table  =  'think_user' ;
        
     // 设置当前模型的数据库连接
     protected $connection  =  'db_config' ;
     }


     =connection=属性使用用配置参数名（需要在数据库配置文件中的 =connections=参数中添加对应标识）。
  

     常用的模型设置属性包括（以下属性都不是必须设置）：

     | 属性         | 描述                                                         |
     |--------------+--------------------------------------------------------------|
     | name         | 模型名（相当于不带数据表前后缀的表名，默认为当前模型类名）   |
     | table        | 数据表名（默认自动获取）                                     |
     | suffix       | 数据表后缀（默认为空）                                       |
     | pk           | 主键名（默认为 =id=）                                        |
     | connection   | 数据库连接（默认读取数据库配置）                             |
     | query        | 模型使用的查询类名称                                         |
     | field        | 模型允许写入的字段列表（数组）                               |
     | schema       | 模型对应数据表字段及类型                                     |
     | type         | 模型需要自动转换的字段及类型                                 |
     | strict       | 是否严格区分字段大小写（默认为 true）                         |
     | disuse       | 数据表废弃字段（数组）                                       |


     模型不支持对数据表的前缀单独设置，并且也不推荐使用数据表的前缀设计，应该用不同的库区分。当你的数据表没有前缀的时候， =name=和 =table=属性的定义是没有区别的，定义任何一个即可。
  
#### 模型初始化


     模型支持初始化，只需要定义 =init=方法，例如：

     < ?php
     namespace app\model ;

     use think\Model ;

     class  User extends  Model
     {
     // 模型初始化
     protected static  function  init ( )
     {
     //TODO:初始化内容
     }
     }


     =init=必须是静态方法，并且只在第一次实例化的时候执行，并且只会执行一次
  
#### 模型操作



     在模型中除了可以调用数据库类的方法之外（换句话说， #数据库的所有查询构造器方法模型中都可以支持#），可以定义自己的方法，所以也可以把模型看成是数据库的增强版。
  

     模型的操作方法无需和数据库查询一样调用必须首先调用 =table=或者 =name=方法，因为模型会按照规则自动匹配对应的数据表，例如：

     Db : : name ( 'user' ) - > where ( 'id' , '>' , 10 ) - > select ( ) ;

     改成模型操作的话就变成

     User : : where ( 'id' , '>' , 10 ) - > select ( ) ;

     虽然看起来是相同的查询条件，但一个最明显的区别是 #查询结果的类型#不同。第一种方式的查询结果是一个（二维）数组，而第二种方式的查询结果是包含了模型（集合）的数据集。不过，在大多数情况下，这二种返回类型的使用方式并无明显区别。

     模型操作和数据库操作的另外一个显著区别是模型支持包括获取器、修改器、自动时间写入在内的一系列自动化操作和事件，简化了数据的存取操作，但随之而来的是性能有所下降（其实并没下降，而是自动帮你处理了一些原本需要手动处理的操作），后面会逐步领略到模型的这些特色功能。

#### 动态切换后缀


     新版模型增加了一个数据表后缀属性，可以用于多语言或者数据分表的模型查询，省去为多个相同结构的表定义多个模型的麻烦。

     默认的数据表后缀可以在模型类里面直接定义 =suffix=属性。

     < ?php
     namespace app\model ;

     use think\Model ;

     class  Blog extends  Model
     {
     // 定义默认的表后缀（默认查询中文数据）
     protected $suffix  = _cn' ;
     }


     你在模型里面定义的 =name=和 =table=属性无需包含后缀定义
  

     模型提供了动态切换方法 =suffix=和 =setSuffix=，例如：

     // suffix方法用于静态查询
     $blog  = Blog : : suffix ( '_en' ) - > find ( ) ;
     $blog - >name  =  'test' ;
     $blog - > save ( ) ;

     // setSuffix用于动态设置
     $blog  =  new  Blog ($data ) ;
     $blog - > setSuffix ( '_en' ) - > save ( ) ;

#### 模型方法依赖注入


     如果你需要对模型的方法支持依赖注入，可以把模型的方法改成闭包的方式，例如，你需要对获取器方法增加依赖注入

     public  function  getTestFieldAttr ($value ,$data )  {
     return $this - > invoke ( function (Request $request )   use ($value ,$data )  {
     return $data [ 'name' ]  . $request - > action ( ) ;
     } ) ;
     }

     不仅仅是获取器方法，在任何需要依赖注入的方法都可以改造为调用 =invoke=方法的方式， =invoke=方法第二个参数用于传入需要调用的（数组）参数。

     如果你需要直接调用某个已经定义的模型方法（假设已经使用了依赖注入），可以使用

     protected  function  bar ($name , Request $request )  {
     // ...
     }

     protected  function  invokeCall ( ) {
     return $this - > invoke ( 'bar' , [ 'think' ] ) ;
     }

### 模型字段
#### 模型字段
     模型的数据字段和对应数据表的字段是对应的，默认会自动获取（包括字段类型），但自动获取会导致增加一次查询，因此你可以在模型中明确定义字段信息避免多一次查询的开销。

     #+begin_src php
       < ?php
           namespace app\model ;

       use think\Model ;

       class  User extends  Model
       {
           // 设置字段信息
           protected $schema  =  [
               'id'           = >  'int' ,
               'name'         = >  'string' ,
               'status'       = >  'int' ,
               'score'        = >  'float' ,
               'create_time'  = >  'datetime' ,
               'update_time'  = >  'datetime' ,
           ] ;
       }
     #+end_src


     字段类型的定义可以使用 PHP 类型或者数据库的字段类型都可以，字段类型定义的作用主要用于查询的参数自动绑定类型。
  


     时间字段尽量采用实际的数据库类型定义，便于时间查询的字段自动识别。如果是 =json=类型直接定义为 =json=即可。
  

     如果你没有定义 =schema=属性的话，可以在部署完成后运行如下指令。

     php think optimize :schema

     运行后会自动生成数据表的字段信息缓存。使用命令行缓存的优势是 Db 类的查询仍然有效。

#### 字段类型
     =schema=属性一旦定义，就必须定义完整的数据表字段类型。\\
     如果你只希望对某个字段定义需要自动转换的类型，可以使用 =type=属性，例如：

     #+begin_src php
       < ?php
           namespace app\model ;

       use think\Model ;

       class  User extends  Model
       {
           // 设置字段自动转换类型
           protected $type  =  [
               'score'        = >  'float' ,
           ] ;
       }
     #+end_src

     =type=属性定义的不一定是实际的字段，也有可能是你的字段别名。

#### 废弃字段


     如果因为历史遗留问题 ，你的数据表存在很多的废弃字段，你可以在模型里面定义这些不再使用的字段。

     < ?php
     namespace app\model ;

     use think\Model ;

     class  User extends  Model
     {
     // 设置废弃字段
     protected $disuse  =  [  'status' ,  'type'  ] ;
     }

     在查询和写入的时候会忽略定义的 =status=和 =type=废弃字段。

#### 获取数据


     在模型外部获取数据的方法如下

     $user  = User : : find ( 1 ) ;
     echo $user - >create_time ;  
     echo $user - >name ;

     由于模型类实现了 =ArrayAccess=接口，所以可以当成数组使用。

     $user  = User : : find ( 1 ) ;
     echo $user [ 'create_time' ] ;  
     echo $user [ 'name' ] ;

     如果你是在模型内部获取数据的话，需要改成：

     $user  = $this - > find ( 1 ) ;
     echo $user - > getAttr ( 'create_time' ) ;  
     echo $user - > getAttr ( 'name' ) ;

     否则可能会出现意想不到的错误。

#### 模型赋值


     可以使用下面的代码给模型对象赋值

     $user  =  new  User ( ) ;
     $user - >name  =  'thinkphp' ;
     $user - >score  =  100 ;

     该方式赋值会自动执行模型的修改器，如果不希望执行修改器操作，可以使用

     $data [ 'name' ]  =  'thinkphp' ;
     $data [ 'score' ]  =  100 ;
     $user  =  new  User ($data ) ;

     或者使用

     $user  =  new  User ( ) ;
     $data [ 'name' ]  =  'thinkphp' ;
     $data [ 'score' ]  =  100 ;
     $user - > data ($data ) ;

     =data=方法支持使用修改器

     $user  =  new  User ( ) ;
     $data [ 'name' ]  =  'thinkphp' ;
     $data [ 'score' ]  =  100 ;
     $user - > data ($data ,  true ) ;

     如果需要对数据进行过滤，可以使用

     $user  =  new  User ( ) ;
     $data [ 'name' ]  =  'thinkphp' ;
     $data [ 'score' ]  =  100 ;
     $user - > data ($data ,  true ,  [ 'name' , 'score' ] ) ;

     表示只设置 =data=数组的 =name=和 =score=数据。

#### 严格区分字段大小写


     默认情况下，你的模型数据名称和数据表字段应该保持严格一致，也就是说区分大小写。

     $user  = User : : find ( 1 ) ;
     echo $user - >create_time ;   // 正确
     echo $user - >createTime ;   // 错误


     严格区分字段大小写的情况下，如果你的数据表字段是大写，模型获取的时候也必须使用大写。
  

     如果你希望在获取模型数据的时候不区分大小写（前提是数据表的字段命名必须规范，即小写+下划线），可以设置模型的 =strict=属性。

     < ?php
     namespace app\model ;

     use think\Model ;

     class  User extends  Model 
     {
     // 模型数据不区分大小写
     protected $strict  =  false ,
     }

     你现在可以使用

     $user  = User : : find ( 1 ) ;
     // 下面两种方式都有效
     echo $user - >createTime ; 
     echo $user - >create_time ; 

### 新增
    模型数据的新增和数据库的新增数据有所区别，数据库的新增只是单纯的写入给定的数据，而模型的数据写入会包含修改器、自动完成以及模型事件等环节，数据库的数据写入参考数据库章节。
    
#### 添加一条数据
     第一种是实例化模型对象后赋值并保存：

     $user            =  new  User ;
     $user - >name      =  'thinkphp' ;
     $user - >email     =  'thinkphp@qq.com' ;
     $user - > save ( ) ;

     =save=方法成功会返回 =true=，并且只有当 =before_insert=事件返回 =false=的时候返回 =false=，一旦有错误就会抛出异常。所以无需判断返回类型。
  

     也可以直接传入数据到 =save=方法批量赋值：
     $user  =  new  User ;
     $user - > save ( [
     'name'   = >   'thinkphp' ,
     'email'  = >   'thinkphp@qq.com'
     ] ) ;

     默认只会写入数据表已有的字段，如果你通过外部提交赋值给模型，并且希望指定某些字段写入，可以使用：

     $user  =  new  User ;
     // post数组中只有name和email字段会写入
     $user - > allowField ( [ 'name' , 'email' ] ) - > save ($_POST ) ;

     最佳的建议是模型数据赋值之前就进行数据过滤，例如：

     $user  =  new  User ;
     // 过滤post数组中的非数据表字段数据
     $data  = Request : : only ( [ 'name' , 'email' ] ) ;
     $user - > save ($data ) ;


     =save=方法新增数据返回的是写入的记录数（通常是 =1=），而不是自增主键值。
  
####  =Replace=写入


     =save=方法可以支持 =replace=写入。

     $user            =  new  User ;
     $user - >name      =  'thinkphp' ;
     $user - >email     =  'thinkphp@qq.com' ;
     $user - > replace ( ) - > save ( ) ;

#### 获取自增 ID
     如果要获取新增数据的自增 ID，可以使用下面的方式：

     $user            =  new  User ;
     $user - >name      =  'thinkphp' ;
     $user - >email     =  'thinkphp@qq.com' ;
     $user - > save ( ) ;
     // 获取自增ID
     echo $user - >id ;

     这里其实是获取模型的主键，如果你的主键不是 =id=，而是 =user_id=的话，其实获取自增 ID 就变成这样：

     $user            =  new  User ;
     $user - >name      =  'thinkphp' ;
     $user - >email     =  'thinkphp@qq.com' ;
     $user - > save ( ) ;
     // 获取自增ID
     echo $user - >user_id ;


     不要在同一个实例里面多次新增数据，如果确实需要多次新增，可以使用后面的静态方法处理。
  
#### 批量增加数据
     支持批量新增，可以使用：

     $user  =  new  User ;
     $list  =  [
     [ 'name' = > 'thinkphp' , 'email' = > 'thinkphp@qq.com' ] ,
     [ 'name' = > 'onethink' , 'email' = > 'onethink@qq.com' ]
     ] ;
     $user - > saveAll ($list ) ;


     saveAll 方法新增数据返回的是包含新增模型（带自增 ID）的数据集对象。

     =saveAll=方法新增数据默认会自动识别数据是需要新增还是更新操作，当数据中存在主键的时候会认为是更新操作。

#### 静态方法
     还可以直接静态调用 =create=方法创建并写入：

     $user  = User : : create ( [
     'name'   = >   'thinkphp' ,
     'email'  = >   'thinkphp@qq.com'
     ] ) ;
     echo $user - >name ;
     echo $user - >email ;
     echo $user - >id ;  // 获取自增ID


     和 =save=方法不同的是， =create=方法返回的是当前模型的对象实例。
  

     =create=方法默认会过滤不是数据表的字段信息，可以在第二个参数可以传入允许写入的字段列表，例如：

     // 只允许写入name和email字段的数据
     $user  = User : : create ( [
     'name'   = >   'thinkphp' ,
     'email'  = >   'thinkphp@qq.com'
     ] ,  [ 'name' ,  'email' ] ) ;
     echo $user - >name ;
     echo $user - >email ;
     echo $user - >id ;  // 获取自增ID

     支持 =replace=操作，使用下面的方法：

     $user  = User : : create ( [
     'name'   = >   'thinkphp' ,
     'email'  = >   'thinkphp@qq.com'
     ] ,  [ 'name' , 'email' ] ,  true ) ;

#### 最佳实践



     新增数据的最佳实践原则：使用 =create=方法新增数据，使用 =saveAll=批量新增数据。
  
### 更新
    和模型新增一样，更新操作同样也会经过修改器、自动完成以及模型事件等处理，并不等同于数据库的数据更新，而且更新方法和新增方法使用的是同一个方法，通常系统会自动判断需要新增还是更新数据。

#### 查找并更新
     在取出数据后，更改字段内容后使用 =save=方法更新数据。 #这种方式是最佳的更新方式#。

     $user  = User : : find ( 1 ) ;
     $user - >name      =  'thinkphp' ;
     $user - >email     =  'thinkphp@qq.com' ;
     $user - > save ( ) ;


     =save=方法成功返回 =true=，并只有当 =before_update=事件返回 =false=的时候返回 =false=，有错误则会抛出异常。
  

     对于复杂的查询条件，也可以使用查询构造器来查询数据并更新

     $user  = User : : where ( 'status' , 1 )
            - > where ( 'name' , 'liuchen' )
            - > find ( ) ;
              $user - >name      =  'thinkphp' ;
              $user - >email     =  'thinkphp@qq.com' ;
              $user - > save ( ) ;

            =save=方法更新数据，只会更新变化的数据，对于没有变化的数据是不会进行重新更新的。如果你需要强制更新数据，可以使用下面的方法：

            $user  = User : : find ( 1 ) ;
            $user - >name      =  'thinkphp' ;
            $user - >email     =  'thinkphp@qq.com' ;
            $user - > force ( ) - > save ( ) ;

            这样无论你的修改后的数据是否和之前一样都会强制更新该字段的值。

            如果要执行 SQL 函数更新，可以使用下面的方法

            $user  = User : : find ( 1 ) ;
            $user - >name      =  'thinkphp' ;
            $user - >email     =  'thinkphp@qq.com' ;
            $user - >score     =  Db : : raw ( 'score+1' ) ;
            $user - > save ( ) ;
      
#### 字段过滤


     默认情况下会过滤非数据表字段的数据，如果你通过外部提交赋值给模型，并且希望指定某些字段写入，可以使用：

     $user  = User : : find ( 1 ) ;
     // post数组中只有name和email字段会写入
     $user - > allowField ( [ 'name' ,  'email' ] ) - > save ($_POST ) ;

     最佳用法是在传入模型数据之前就进行过滤，例如：

     $user  = User : : find ( 1 ) ;
     // post数组中只有name和email字段会写入
     $data  = Request : : only ( [ 'name' , 'email' ] ) ;
     $user - > save ($data ) ;

#### 批量更新数据


     可以使用 =saveAll=方法批量更新数据，只需要在批量更新的数据中包含主键即可，例如：

     $user  =  new  User ;
     $list  =  [
     [ 'id' = > 1 ,  'name' = > 'thinkphp' ,  'email' = > 'thinkphp@qq.com' ] ,
     [ 'id' = > 2 ,  'name' = > 'onethink' ,  'email' = > 'onethink@qq.com' ]
     ] ;
     $user - > saveAll ($list ) ;

     批量更新方法返回的是一个数据集对象。


     批量更新仅能根据主键值进行更新，其它情况请自行处理。
  
#### 直接更新（静态方法）


     使用模型的静态 =update=方法更新：

     User : : update ( [ 'name'  = >  'thinkphp' ] ,  [ 'id'  = >  1 ] ) ;


     模型的 =update=方法返回模型的对象实例
  

     如果你的第一个参数中包含主键数据，可以无需传入第二个参数（更新条件）

     User : : update ( [ 'name'  = >  'thinkphp' ,  'id'  = >  1 ] ) ;

     如果你需要只允许更新指定字段，可以使用

     User : : update ( [ 'name'  = >  'thinkphp' ,  'email'  = >  'thinkphp@qq.com' ] ,  [ 'id'  = >  1 ] ,  [ 'name' ] ) ;

     上面的代码只会更新 =name=字段的数据。

#### 自动识别


     我们已经看到，模型的新增和更新方法都是 =save=方法，系统有一套默认的规则来识别当前的数据需要更新还是新增。

     -  实例化模型后调用 =save=方法表示新增；
     -  查询数据后调用 =save=方法表示更新；

     不要在一个模型实例里面做多次更新，会导致部分重复数据不再更新，正确的方式应该是先查询后更新或者使用模型类的 =update=方法更新。


     不要调用 =save=方法进行多次数据写入。
  
#### 最佳实践



     更新的最佳实践原则是：如果需要使用模型事件，那么就先查询后更新，如果不需要使用事件或者不查询直接更新，直接使用静态的 =Update=方法进行条件更新，如非必要，尽量不要使用批量更新。
  
### 删除


    模型的删除和数据库的删除方法区别在于，模型的删除会包含模型的事件处理。

#### 删除当前模型


     删除模型数据，可以在查询后调用 =delete=方法。

     $user  = User : : find ( 1 ) ;
     $user - > delete ( ) ;


     =delete=方法返回布尔值
  

#### 根据主键删除


     或者直接调用静态方法（根据主键删除）

     User : : destroy ( 1 ) ;
     // 支持批量删除多个数据
     User : : destroy ( [ 1 , 2 , 3 ] ) ;


     当 =destroy=方法传入空值（包括空字符串和空数组）的时候不会做任何的数据删除操作，但传入 0 则是有效的
  

#### 条件删除


     还支持使用闭包删除，例如：

     User : : destroy ( function ($query ) {
     $query - > where ( 'id' , '>' , 10 ) ;
     } ) ;

     或者通过数据库类的查询条件删除

     User : : where ( 'id' , '>' , 10 ) - > delete ( ) ;


     直接调用数据库的 =delete=方法的话无法调用模型事件。
  

#### 最佳实践



     删除的最佳实践原则是：如果删除当前模型数据，用 =delete=方法，如果需要直接删除数据，使用 =destroy=静态方法。
  
### 查询
    模型查询和数据库查询方法的区别主要在于，模型中的查询的数据在获取的时候会经过获取器的处理，以及更加对象化的获取方式。

    模型查询除了使用自身的查询方法外，一样可以使用数据库的查询构造器，返回的都是模型对象实例。但如果直接调用查询对象的方法，IDE 可能无法完成自动提示。
#### 获取单个数据


     获取单个数据的方法包括：

     // 取出主键为1的数据
     $user  = User : : find ( 1 ) ;
     echo $user - >name ;

     // 使用查询构造器查询满足条件的数据
     $user  = User : : where ( 'name' ,  'thinkphp' ) - > find ( ) ;
     echo $user - >name ;

     模型使用 =find=方法查询，如果数据不存在返回 =Null=，否则返回当前模型的对象实例。如果希望查询数据不存在则返回一个空模型，可以使用。

     $user  = User : : findOrEmpty ( 1 ) ;

     你可以用 =isEmpty=方法来判断当前是否为一个空模型。

     $user  = User : : where ( 'name' ,  'thinkphp' ) - > findOrEmpty ( ) ;
     if  ( !$user ->isEmpty() )  {
     echo $user->name;
     }


     如果你是在模型内部获取数据，请不要使用 =$this->name=的方式来获取数据，请使用 =$this->getAttr('name')= 替代。
  
#### 获取多个数据
     取出多个数据：

     #+begin_src php
       // 根据主键获取多个数据
       $list  = User::select ( [ 1 , 2 , 3 ] ) ;
       // 对数据集进行遍历操作
       foreach ($list as $key = >$user ) {
           echo $user ->name ;
       }
     #+end_src

     要更多的查询支持，一样可以使用查询构造器：

     #+begin_src php
       // 使用查询构造器查询
       $list  = User:: where ( 'status' ,  1 ) - > limit ( 3 ) - > order ( 'id' ,  'asc' ) - > select ( ) ;
       foreach ($list as $key = >$user ) {
           echo $user - >name ;
       }
     #+end_src
     查询构造器方式的查询可以支持更多的连贯操作，包括排序、数量限制等。

##### 自定义数据集对象
      模型的 =select=方法返回的是一个包含多个模型实例的数据集对象（默认为 =\think\model\Collection=），支持在模型中单独设置查询数据集的返回对象的名称，例如：

      #+begin_src php
        < ?php
            namespace app\index\model ;

        use think\Model ;

        class  User extends  Model
        {
            // 设置返回数据集的对象名
            protected $resultSetType  =  '\app\common\Collection' ;
        }
      #+end_src

      =resultSetType=属性用于设置自定义的数据集使用的类名，该类应当继承系统的 =think\model\Collection=类。

#### 使用查询构造器
     在模型中仍然可以调用数据库的链式操作和查询方法，可以充分利用数据库的查询构造器的优势。

     例如：

     #+begin_src php
       User : : where ( 'id' , 10 ) - > find ( ) ;
       User : : where ( 'status' , 1 ) - > order ( 'id desc' ) - > select ( ) ;
       User : : where ( 'status' , 1 ) - > limit ( 10 ) - > select ( ) ;
     #+end_src

     使用查询构造器直接使用静态方法调用即可，无需先实例化模型。

##### 获取某个字段或者某个列的值


      // 获取某个用户的积分
      User : : where ( 'id' , 10 ) - > value ( 'score' ) ;
      // 获取某个列的所有值
      User : : where ( 'status' , 1 ) - > column ( 'name' ) ;
      // 以id为索引
      User : : where ( 'status' , 1 ) - > column ( 'name' , 'id' ) ;


      =value=和 =column=方法返回的不再是一个模型对象实例，而是纯粹的值或者某个列的数组。
  

##### 动态查询


      支持数据库的动态查询方法，例如：

      // 根据name字段查询用户
      $user  = User : : getByName ( 'thinkphp' ) ;

      // 根据email字段查询用户
      $user  = User : : getByEmail ( 'thinkphp@qq.com' ) ;

##### 聚合查询


      同样在模型中也可以调用数据库的聚合方法查询，例如：

      User : : count ( ) ;
      User : : where ( 'status' , '>' , 0 ) - > count ( ) ;
      User : : where ( 'status' , 1 ) - > avg ( 'score' ) ;
      User : : max ( 'score' ) ;

      注意，如果你的字段不是数字类型，是使用 =max=/ =min=的时候，需要加上第二个参数。

      User : : max ( 'name' ,  false ) ;

##### 数据分批处理


      模型也可以支持对返回的数据分批处理，这在处理大量数据的时候非常有用，例如：

      User : : chunk ( 100 ,  function  ($users )  {
      foreach ($users as $user ) {
      // 处理user模型对象
      }
      } ) ;

#### 使用游标查询
     模型也可以使用数据库的 =cursor=方法进行游标查询，返回生成器对象

     #+begin_src php
       foreach (User : : where ( 'status' ,  1 ) - > cursor ( ) as $user ) {
           echo $user - >name ;
       }
     #+end_src

     =user=变量是一个模型对象实例。

#### 最佳实践
     模型查询的最佳实践原则是：在模型外部使用静态方法进行查询，内部使用动态方法查询，包括使用数据库的查询构造器。
  
### 查询范围
    可以对模型的查询和写入操作进行封装，例如：
    #+begin_src php

      < ?php
          namespace app\model ;

      use think\Model ;

      class  User extends  Model
      {

          public  function  scopeThinkphp ($query )
          {
              $query - > where ( 'name' , 'thinkphp' ) - > field ( 'id,name' ) ;
          }

          public  function  scopeAge ($query )
          {
              $query - > where ( 'age' , '>' , 20 ) - > limit ( 10 ) ;
          }    

      }
    #+end_src

    就可以进行下面的条件查询：

    // 查找name为thinkphp的用户
    User : : scope ( 'thinkphp' ) - > find ( ) ;
    // 查找年龄大于20的10个用户
    User : : scope ( 'age' ) - > select ( ) ;
    // 查找name为thinkphp的用户并且年龄大于20的10个用户
    User : : scope ( 'thinkphp,age' ) - > select ( ) ;

    查询范围的方法可以定义额外的参数，例如 User 模型类定义如下：

    < ?php
    namespace app\model ;

    use think\Model ;

    class  User extends  Model
    {
    public  function  scopeEmail ($query , $email )
    {
    $query - > where ( 'email' ,  'like' ,  '%'  . $email  .  '%' ) ;
    }
        
    public  function  scopeScore ($query , $score )
    {
    $query - > where ( 'score' ,  '>' , $score ) ;
    }
        
    }

    在查询的时候可以如下使用：

    // 查询email包含thinkphp和分数大于80的用户
    User : : email ( 'thinkphp' ) - > score ( 80 ) - > select ( ) ;

    可以直接使用闭包函数进行查询，例如：

    User : : scope ( function ($query ) {
    $query - > where ( 'age' , '>' , 20 ) - > limit ( 10 ) ;
    } ) - > select ( ) ;


    使用查询范围后，只能使用 =find=或者 =select=查询。
  

#### 全局查询范围


     支持在模型里面设置 =globalScope=属性，定义全局的查询范围

     < ?php
     namespace app\model ;

     use think\Model ;

     class  User extends  Model
     {
     // 定义全局的查询范围
     protected $globalScope  =  [ 'status' ] ;

     public  function  scopeStatus ($query )
     {
     $query - > where ( 'status' , 1 ) ;
     }
     }

     然后，执行下面的代码：

     $user  = User : : find ( 1 ) ;

     最终的查询条件会是

     status  =  1 AND id  =  1

     如果需要动态关闭所有的全局查询范围，可以使用：

     // 关闭全局查询范围
     User : : withoutGlobalScope ( ) - > select ( ) ;

     可以使用 =withoutGlobalScope=方法动态关闭部分全局查询范围。

     User : : withoutGlobalScope ( [ 'status' ] ) - > select ( ) ;

### JSON 字段
    可以更为方便的操作模型的 JSON 数据字段。


    这里指的 JSON 数据包括 JSON 类型以及 JSON 格式（但并不是 JSON 类型字段）的数据
  

    我们修改下 User 模型类

    < ?php
    namespace app\model ;

    use think\Model ;
    class  User extends  Model
    {
    // 设置json类型字段
    protected $json  =  [ 'info' ] ;
    }

    定义后，可以进行如下 JSON 数据操作。

#### 写入 JSON 数据


     使用数组方式写入 JSON 数据：

     $user  =  new  User ;
     $user - >name  =  'thinkphp' ;
     $user - >info  =  [
     'email'     = >  'thinkphp@qq.com' ,
     'nickname ' = >  '流年' ,
     ] ;
     $user - > save ( ) ;

     使用对象方式写入 JSON 数据

     $user  =  new  User ;
     $user - >name  =  'thinkphp' ;
     $info  =  new   \StdClass ( ) ;
     $info - >email  =  'thinkphp@qq.com' ;
     $info - >nickname  =  '流年' ;
     $user - >info  = $info ;
     $user - > save ( ) ;

#### 查询 JSON 数据


     $user  = User : : find ( 1 ) ;
     echo $user - >name ;  // thinkphp
     echo $user - >info - >email ;  // thinkphp@qq.com
     echo $user - >info - >nickname ;  // 流年

     查询条件为 JSON 数据

     $user  = User : : where ( 'info->nickname' , '流年' ) - > find ( ) ;
     echo $user - >name ;  // thinkphp
     echo $user - >info - >email ;  // thinkphp@qq.com
     echo $user - >info - >nickname ;  // 流年

     如果你需要查询的 JSON 属性是整型类型的话，可以在模型类里面定义 JSON 字段的属性类型，就会自动进行相应类型的参数绑定查询。

     < ?php
     namespace app\model ;

     use think\Model ;

     class  User extends  Model
     {
     // 设置json类型字段
     protected $json  =  [ 'info' ] ;
        
     // 设置JSON字段的类型
     protected $jsonType  =  [
     'info->user_id'     = >   'int'
     ] ;
     }

     没有定义类型的属性默认为字符串类型，因此字符串类型的属性可以无需定义。

     可以设置模型的 =JSON=数据返回数组，只需要在模型设置 =jsonAssoc=属性为 =true=。

     < ?php
     namespace app\model ;

     use think\Model ;

     class  User extends  Model
     {
     // 设置json类型字段
     protected $json  =  [ 'info' ] ;
        
     // 设置JSON数据返回数组
     protected $jsonAssoc  =  true ;
     }

     设置后，查询代码调整为：

     $user  = User : : find ( 1 ) ;
     echo $user - >name ;  // thinkphp
     echo $user - >info [ 'email' ] ;  // thinkphp@qq.com
     echo $user - >info [ 'nickname' ] ;  // 流年

#### 更新 JSON 数据


     $user  = User : : find ( 1 ) ;
     $user - >name  =  'kancloud' ;
     $user - >info - >email  =  'kancloud@qq.com' ;
     $user - >info - >nickname  =  'kancloud' ;
     $user - > save ( ) ;

     如果设置模型的 =JSON=数据返回数组，那么更新操作需要调整如下。

     $user  = User : : find ( 1 ) ;
     $user - >name  =  'kancloud' ;
     $info [ 'email' ]  =  'kancloud@qq.com' ;
     $info [ 'nickname' ]  =  'kancloud' ;
     $user - >info  = $info ;
     $user - > save ( ) ;

### 获取器


#### 获取器


     获取器的作用是对模型实例的（原始）数据做出自动处理。一个获取器对应模型的一个特殊方法（该方法必须为 =public=类型），方法命名规范为：


     ### get =FieldName=Attr
     :PROPERTIES:
     :CUSTOM_ID: get-fieldnameattr
     :CLASS: calibre6
     :END:
  

     =FieldName=为数据表字段的驼峰转换，定义了获取器之后会在下列情况自动触发：

     -  模型的数据对象取值操作（ =$model->field_name=）；
     -  模型的序列化输出操作（ =$model->toArray()=及 =toJson()=）；
     -  显式调用 =getAttr=方法（ =$this->getAttr('field_name')=）；

     获取器的场景包括：

     -  时间日期字段的格式化输出；
     -  集合或枚举类型的输出；
     -  数字状态字段的输出；
     -  组合字段的输出；

     例如，我们需要对状态值进行转换，可以使用：

     < ?php
     namespace app\model ;

     use think\Model ;

     class  User extends  Model 
     {
     public  function  getStatusAttr ($value )
     {
     $status  =  [ - 1 = > '删除' , 0 = > '禁用' , 1 = > '正常' , 2 = > '待审核' ] ;
     return $status [$value ] ;
     }
     }

     数据表的字段会自动转换为驼峰法，一般 =status=字段的值采用数值类型，我们可以通过获取器定义，自动转换为字符串描述。

     $user  = User : : find ( 1 ) ;
     echo $user - >status ;  // 例如输出“正常”

     获取器还可以定义数据表中不存在的字段，例如：

     < ?php
     namespace app\model ;

     use think\Model ;

     class  User extends  Model 
     {
     public  function  getStatusTextAttr ($value ,$data )
     {
     $status  =  [ - 1 = > '删除' , 0 = > '禁用' , 1 = > '正常' , 2 = > '待审核' ] ;
     return $status [$data [ 'status' ] ] ;
     }
     }


     获取器方法的第二个参数传入的是当前的所有数据数组。
  

     我们就可以直接使用 status\_text 字段的值了，例如：

     $user  = User : : find ( 1 ) ;
     echo $user - >status_text ;  // 例如输出“正常”

#### 获取原始数据


     如果你定义了获取器的情况下，希望获取数据表中的原始数据，可以使用：

     $user  = User : : find ( 1 ) ;
     // 通过获取器获取字段
     echo $user - >status ;
     // 获取原始字段数据
     echo $user - > getData ( 'status' ) ;
     // 获取全部原始数据
     dump ($user - > getData ( ) ) ;

#### 动态获取器


     可以支持对模型使用动态获取器，无需在模型类中定义获取器方法。

     User : : withAttr ( 'name' ,  function ($value , $data )  {
     return  strtolower ($value ) ;
     } ) - > select ( ) ;


     =withAttr=方法支持多次调用，定义多个字段的获取器。另外注意， =withAttr=方法之后不能再使用模型的查询方法，必须使用 Db 类的查询方法。
  


     如果同时还在模型里面定义了相同字段的获取器，则动态获取器优先，也就是可以临时覆盖定义某个字段的获取器。
  

     支持对关联模型的字段使用动态获取器，例如：

     User : : with ( 'profile' ) - > withAttr ( 'profile.name' ,  function ($value , $data )  {
     return  strtolower ($value ) ;
     } ) - > select ( ) ;


     注意：对于 =MorphTo=关联不支持使用动态获取器。
  

     并且支持对 =JSON=字段使用获取器，例如在模型中定义了 =JSON=字段的话：

     < ?php
     namespace app\index\model ;

     use think\Model ;

     class  User extends  Model
     {
     // 设置json类型字段
     protected $json  =  [ 'info' ] ;
     }

     可以使用下面的代码定义 JSON 字段的获取器。

     User : : withAttr ( 'info.name' ,  function ($value , $data )  {
     return  strtolower ($value ) ;
     } ) - > select ( ) ;

     可以在查询之后使用 =withAttr=方法，例如：

     User : : select ( ) - > withAttr ( 'name' ,  function ($value , $data )  {
     return  strtolower ($value ) ;
     } ) ;

### 修改器


#### 修改器


     和获取器相反，修改器的主要作用是对模型设置的数据对象值进行处理。

     修改器方法的命名规范为：


     ### set =FieldName=Attr
     :PROPERTIES:
     :CUSTOM_ID: set-fieldnameattr
     :CLASS: calibre6
     :END:
  

     修改器的使用场景和读取器类似：

     -  时间日期字段的转换写入；
     -  集合或枚举类型的写入；
     -  数字状态字段的写入；
     -  某个字段涉及其它字段的条件或者组合写入；

     定义了修改器之后会在下列情况下触发：

     -  模型对象赋值；
     -  调用模型的 =data=方法，并且第二个参数传入 =true=；
     -  调用模型的 =save=方法，并且传入数据；
     -  显式调用模型的 =setAttr=方法；

     例如：

     < ?php
     namespace app\model ;

     use think\Model ;

     class  User extends  Model 
     {
     public  function  setNameAttr ($value )
     {
     return  strtolower ($value ) ;
     }
     }

     如下代码实际保存到数据库中的时候会转为小写

     $user  =  new  User ( ) ;
     $user - >name  =  'THINKPHP' ;
     $user - > save ( ) ;
     echo $user - >name ;  // thinkphp

     也可以进行序列化字段的组装：

     namespace app\model ;

     use think\Model ;

     class  User extends  Model 
     {
     public  function  setSerializeAttr ($value ,$data )
     {
     return  serialize ($data ) ;
     }
     }


     修改器方法的第二个参数会自动传入当前的所有数据数组。
  

     如果你需要在修改器中修改其它数据，可以使用

     < ?php
     namespace app\model ;

     use think\Model ;

     class  User extends  Model 
     {
     public  function  setTestFieldAttr ($value , $data )
     {
     $this - > set ( 'other_field' , $data [ 'some_field' ] ) ;
     }
     }

     上面的例子，在 =test_field=字段的修改器中修改了 =other_field=字段数据，并且没有返回值（表示不对 =test_field=字段做任何修改）。

#### 批量修改


     除了赋值的方式可以触发修改器外，还可以用下面的方法批量触发修改器：

     $user  =  new  User ( ) ;
     $data [ 'name' ]  =  'THINKPHP' ;
     $data [ 'email' ]  =  'thinkphp@qq.com' ;
     $user - > data ($data ,  true ) ;
     $user - > save ( ) ;
     echo $user - >name ;  // thinkphp

     如果为 =name=和 =email=字段都定义了修改器的话，都会进行处理。

     或者直接使用 save 方法触发，例如：

     $user  =  new  User ( ) ;
     $data [ 'name' ]  =  'THINKPHP' ;
     $data [ 'email' ]  =  'thinkphp@qq.com' ;
     $user - > save ($data ) ;
     echo $user - >name ;  // thinkphp


     修改器方法仅对模型的写入方法有效，调用数据库的写入方法写入无效，例如下面的方式修改器无效。
  

     $user  =  new  User ( ) ;
     $data [ 'name' ]  =  'THINKPHP' ;
     $data [ 'email' ]  =  'thinkphp@qq.com' ;
     $user - > insert ($data ) ;

### 搜索器


#### 搜索器


     搜索器的作用是用于封装字段（或者搜索标识）的查询条件表达式，一个搜索器对应一个特殊的方法（该方法必须是 =public=类型），方法命名规范为：


     ### search =FieldName=Attr
     :PROPERTIES:
     :CUSTOM_ID: search-fieldnameattr
     :CLASS: calibre6
     :END:
  

     =FieldName=为数据表字段的驼峰转换，搜索器仅在调用 =withSearch=方法的时候触发。

     搜索器的场景包括：

     -  限制和规范表单的搜索条件；
     -  预定义查询条件简化查询；

     例如，我们需要给 User 模型定义 =name=字段和时间字段的搜索器，可以使用：

     < ?php
     namespace app\model ;

     use think\Model ;

     class  User extends  Model 
     {
     public  function  searchNameAttr ($query , $value , $data )
     {
     $query - > where ( 'name' , 'like' , $value  .  '%' ) ;
     }
        
     public  function  searchCreateTimeAttr ($query , $value , $data )
     {
     $query - > whereBetweenTime ( 'create_time' , $value [ 0 ] , $value [ 1 ] ) ;
     }    
     }

     然后，我们可以使用下面的查询

     User : : withSearch ( [ 'name' , 'create_time' ] ,  [
     'name'          = >   'think' ,
     'create_time'   = >   [ '2018-8-1' , '2018-8-5' ] ,
     'status'        = >   1
     ] )
     - > select ( ) ;

     最终生成的 SQL 语句类似于

     SELECT  # FROM `think_user` WHERE  `name` LIKE  'think%' AND `create_time` BETWEEN  '2018-08-01 00:00:00' AND  '2018-08-05 00:00:00' 

     可以看到查询条件中并没有 =status=字段的数据，因此可以很好的避免表单的非法查询条件传入，在这个示例中仅能使用 =name=和 =create_time=条件进行查询。


     事实上，除了在搜索器中使用查询表达式外，还可以使用其它的任何查询构造器以及链式操作。
  

     例如，你需要通过表单定义的排序字段进行搜索结果的排序，可以使用

     < ?php
     namespace app\model ;

     use think\Model ;

     class  User extends  Model 
     {
     public  function  searchNameAttr ($query , $value , $data )
     {
     $query - > where ( 'name' , 'like' , $value  .  '%' ) ;
     if  ( isset ($data [ 'sort' ] ) )  {
     $query - > order ($data [ 'sort' ] ) ;
     }        
     }
        
     public  function  searchCreateTimeAttr ($query , $value , $data )
     {
     $query - > whereBetweenTime ( 'create_time' , $value [ 0 ] , $value [ 1 ] ) ;
     }      
     }

     然后，我们可以使用下面的查询

     User : : withSearch ( [ 'name' , 'create_time' ,  'status' ] ,  [
     'name'          = >   'think' ,
     'create_time'   = >   [ '2018-8-1' , '2018-8-5' ] ,
     'status'        = >   1 ,
     'sort'          = >   [ 'status' = > 'desc' ] ,
     ] )
     - > select ( ) ;

     最终查询的 SQL 可能是

     SELECT  # FROM `think_user` WHERE  `name` LIKE  'think%' AND `create_time` BETWEEN  '2018-08-01 00:00:00' AND  '2018-08-05 00:00:00' ORDER BY `status` DESC

     你可以给搜索器定义字段别名，例如：

     User : : withSearch ( [ 'name' = > 'nickname' , 'create_time' ,  'status' ] ,  [
     'nickname'      = >   'think' ,
     'create_time'   = >   [ '2018-8-1' , '2018-8-5' ] ,
     'status'        = >   1 ,
     'sort'          = >   [ 'status' = > 'desc' ] ,
     ] )
     - > select ( ) ;


     搜索器通常会和查询范围进行比较，搜索器无论定义了多少，只需要一次调用，查询范围如果需要组合查询的时候就需要多次调用。
  
### 数据集


#### 数据集



     模型的 =select=查询方法返回数据集对象 =think\model\Collection=，该对象继承自 =think\Collection=，因此具有数据库的 [[calibre_link-30][数据集类]]的所有方法，而且还提供了额外的模型操作方法。
  

     基本用法和数组一样，例如可以遍历和直接获取某个元素。

     // 模型查询返回数据集对象
     $list  = User : : where ( 'id' ,  '>' ,  0 ) - > select ( ) ;
     // 获取数据集的数量
     echo  count ($list ) ;
     // 直接获取其中的某个元素
     dump ($list [ 0 ] ) ;
     // 遍历数据集对象
     foreach  ($list as $user )  {
     dump ($user ) ;
     }
     // 删除某个元素
     unset ($list [ 0 ] ) ;

     需要注意的是，如果要判断数据集是否为空，不能直接使用 =empty=判断，而必须使用数据集对象的 =isEmpty=方法判断，例如：

     $users  = User : : select ( ) ;
     if ($users - > isEmpty ( ) ) {
     echo  '数据集为空' ;
     }

     你可以使用模型的 =hidden=/ =visible=/ =append=/ =withAttr=方法进行数据集的输出处理，例如：

     // 模型查询返回数据集对象
     $list  = User : : where ( 'id' ,  '>' ,  0 ) - > select ( ) ;
     // 对输出字段进行处理
     $list - > hidden ( [ 'password' ] ) 
            - > append ( [ 'status_text' ] )
            - > withAttr ( 'name' ,  function ($value , $data )  {
              return  strtolower ($value ) ;
              } ) ;
              dump ($list ) ;

            如果需要对数据集的结果进行筛选，可以使用：

            // 模型查询返回数据集对象
            $list  = User : : where ( 'id' ,  '>' ,  0 ) - > select ( )
            - > where ( 'name' ,  'think' )
            - > where ( 'score' ,  '>' ,  80 ) ;
            dump ($list ) ;

            支持 =whereLike=/ =whereIn=/ =whereBetween=等快捷方法。

            // 模型查询返回数据集对象
            $list  = User : : where ( 'id' ,  '>' ,  0 ) - > select ( )
            - > whereLike ( 'name' ,  'think%' )
            - > whereBetween ( 'score' ,  [ 80 , 100 ] ) ;
            dump ($list ) ;

            支持数据集的 =order=排序操作。

            // 模型查询返回数据集对象
            $list  = User : : where ( 'id' ,  '>' ,  0 ) - > select ( )
            - > where ( 'name' ,  'think' )
            - > where ( 'score' ,  '>' ,  80 )
            - > order ( 'create_time' , 'desc' ) ;
            dump ($list ) ;

            支持数据集的 =diff/intersect=操作。

            // 模型查询返回数据集对象
            $list1  = User : : where ( 'status' ,  1 ) - > field ( 'id,name' ) - > select ( ) ;
            $list2  = User : : where ( 'name' ,  'like' ,  'think' ) - > field ( 'id,name' ) - > select ( ) ;
            // 计算差集
            dump ($list1 - > diff ($list2 ) ) ;
            // 计算交集
            dump ($list1 - > intersect ($list2 ) ) ;

#### 批量删除和更新数据


     支持对数据集的数据进行批量删除和更新操作，例如：

     $list  = User : : where ( 'status' ,  1 ) - > select ( ) ;
     $list - > update ( [ 'name'  = >  'php' ] ) ;

     $list  = User : : where ( 'status' ,  1 ) - > select ( ) ;
     $list - > delete ( ) ;

### 自动时间戳


    系统支持自动写入创建和更新的时间戳字段（默认关闭），有两种方式配置支持。

    第一种方式是全局开启，在数据库配置文件中进行设置：

    // 开启自动写入时间戳字段
    'auto_timestamp'  = >  true ,

    第二种是在需要的模型类里面单独开启：

    < ?php
    namespace app\model ;

    use think\Model ;

    class  User extends  Model
    {
    protected $autoWriteTimestamp  =  true ;
    }

    又或者首先在数据库配置文件中全局开启，然后在个别不需要使用自动时间戳写入的模型类中单独关闭：

    < ?php
    namespace app\model ;

    use think\Model ;

    class  User extends  Model
    {
    protected $autoWriteTimestamp  =  false ;
    }

    一旦配置开启的话，会自动写入 =create_time=和 =update_time=两个字段的值，默认为整型（ =int=），如果你的时间字段不是 =int=类型的话，可以直接使用：

    // 开启自动写入时间戳字段
    'auto_timestamp'  = >  'datetime' ,

    或者

    < ?php
    namespace app\model ;

    use think\Model ;

    class  User extends  Model
    {
    protected $autoWriteTimestamp  =  'datetime' ;
    }

    默认的创建时间字段为 =create_time=，更新时间字段为 =update_time=，支持的字段类型包括 =timestamp/datetime/int=。

    写入数据的时候，系统会自动写入 =create_time=和 =update_time=字段，而不需要定义修改器，例如：

    $user  =  new  User ( ) ;
    $user - >name  =  'thinkphp' ;
    $user - > save ( ) ;
    echo $user - >create_time ;  // 输出类似 2016-10-12 14:20:10
    echo $user - >update_time ;  // 输出类似 2016-10-12 14:20:10


    时间字段的自动写入仅针对模型的写入方法，如果使用数据库的更新或者写入方法则无效。
  


    时间字段输出的时候会自动进行格式转换，如果不希望自动格式化输出，可以把数据库配置文件的 =datetime_format= 参数值改为 =false=
  

    =datetime_format=参数支持设置为一个时间类名，这样便于你进行更多的时间处理，例如：

    // 设置时间字段的格式化类
    'datetime_format'  = >  '\org\util\DateTime' ,

    该类应该包含一个 =__toString=方法定义以确保能正常写入数据库。

    如果你的数据表字段不是默认值的话，可以按照下面的方式定义：

    < ?php
    namespace app\model ;

    use think\Model ;

    class  User extends  Model 
    {
    // 定义时间戳字段名
    protected $createTime  =  'create_at' ;
    protected $updateTime  =  'update_at' ;
    }

    下面是修改字段后的输出代码：

    $user  =  new  User ( ) ;
    $user - >name  =  'thinkphp' ;
    $user - > save ( ) ;
    echo $user - >create_at ;  // 输出类似 2016-10-12 14:20:10
    echo $user - >update_at ;  // 输出类似 2016-10-12 14:20:10

    如果你只需要使用 =create_time=字段而不需要自动写入 =update_time=，则可以单独关闭某个字段，例如：

    namespace app\model ;

    use think\Model ;

    class  User extends  Model 
    {
    // 关闭自动写入update_time字段
    protected $updateTime  =  false ;
    }

    支持动态关闭时间戳写入功能，例如你希望更新阅读数的时候不修改更新时间，可以使用 =isAutoWriteTimestamp=方法：

    $user  = User : : find ( 1 ) ;
    $user - >read  + = 1 ;
    $user - > isAutoWriteTimestamp ( false ) - > save ( ) ;

### 只读字段


    只读字段用来保护某些特殊的字段值不被更改，这个字段的值一旦写入，就无法更改。 要使用只读字段的功能，我们只需要在模型中定义 =readonly=属性：

    < ?php
    namespace app\model ;

    use think\Model ;

    class  User extends  Model
    {
    protected $readonly  =  [ 'name' ,  'email' ] ;
    }

    例如，上面定义了当前模型的 =name=和 =email=字段为只读字段，不允许被更改。也就是说当执行更新方法之前会自动过滤掉只读字段的值，避免更新到数据库。

    下面举个例子说明下：

    $user  = User : : find ( 5 ) ;
    // 更改某些字段的值
    $user - >name  =  'TOPThink' ;
    $user - >email  =  'Topthink@gmail.com' ;
    $user - >address  =  '上海静安区' ;
    // 保存更改后的用户数据
    $user - > save ( ) ;

    事实上，由于我们对 =name=和 =email=字段设置了只读，因此只有 =address=字段的值被更新了，而 =name=和 =email=的值仍然还是更新之前的值。

    支持动态设置只读字段，例如：

    $user  = User : : find ( 5 ) ;
    // 更改某些字段的值
    $user - >name  =  'TOPThink' ;
    $user - >email  =  'Topthink@gmail.com' ;
    $user - >address  =  '上海静安区' ;
    // 保存更改后的用户数据
    $user - > readonly ( [ 'name' , 'email' ] ) - > save ( ) ;


    只读字段仅针对模型的更新方法，如果使用数据库的更新方法则无效，例如下面的方式无效。
  

    $user  =  new  User ;
    // 要更改字段值
    $data [ 'name' ]  =  'TOPThink' ;
    $data [ 'email' ]  =  'Topthink@gmail.com' ;
    $data [ 'address' ]  =  '上海静安区' ;
    // 保存更改后的用户数据
    $user - > where ( 'id' ,  5 ) - > update ($data ) ;

### 软删除


#### 软删除


     在实际项目中，对数据频繁使用删除操作会导致性能问题，软删除的作用就是把数据加上删除标记，而不是真正的删除，同时也便于需要的时候进行数据的恢复。

     要使用软删除功能，需要引入 =SoftDelete= trait，例如 =User=模型按照下面的定义就可以使用软删除功能：

     < ?php
     namespace app\model ;

     use think\Model ;
     use think\model\concern\SoftDelete ;

     class  User extends  Model
     {
     use SoftDelete ;
     protected $deleteTime  =  'delete_time' ;
     }

     =deleteTime=属性用于定义你的软删除标记字段， =ThinkPHP=的软删除功能使用时间戳类型（数据表默认值为 =Null=），用于记录数据的删除时间。

     可以支持 =defaultSoftDelete=属性来定义软删除字段的默认值，在此之前的版本，软删除字段的默认值必须为 =null=。

     < ?php
     namespace app\model ;

     use think\Model ;
     use think\model\concern\SoftDelete ;

     class  User extends  Model
     {
     use SoftDelete ;
     protected $deleteTime  =  'delete_time' ;
     protected $defaultSoftDelete  =  0 ;
     }


     可以用类型转换指定软删除字段的类型，建议数据表的所有时间字段统一一种类型。
  

     定义好模型后，我们就可以使用：

     // 软删除
     User : : destroy ( 1 ) ;
     // 真实删除
     User : : destroy ( 1 , true ) ;

     $user  = User : : find ( 1 ) ;
     // 软删除
     $user - > delete ( ) ;
     // 真实删除
     $user - > force ( ) - > delete ( ) ;

     默认情况下查询的数据不包含软删除数据，如果需要包含软删除的数据，可以使用下面的方式查询：

     User : : withTrashed ( ) - > find ( ) ;
     User : : withTrashed ( ) - > select ( ) ;

     如果仅仅需要查询软删除的数据，可以使用：

     User : : onlyTrashed ( ) - > find ( ) ;
     User : : onlyTrashed ( ) - > select ( ) ;

     恢复被软删除的数据

     $user  = User : : onlyTrashed ( ) - > find ( 1 ) ;
     $user - > restore ( ) ;


     软删除的删除操作仅对模型的删除方法有效，如果直接使用数据库的删除方法则无效，例如下面的方式无效。
  

     $user  =  new  User ;
     $user - > where ( 'id' , 1 ) - > delete ( ) ;

### 类型转换
    支持给字段设置类型自动转换，会在写入和读取的时候自动进行类型转换处理，例如：

    < ?php
    namespace app\model ;

    use think\Model ;

    class  User extends  Model 
    {
    protected $type  =  [
    'status'     = >   'integer' ,
    'score'      = >   'float' ,
    'birthday'   = >   'datetime' ,
    'info'       = >   'array' ,
    ] ;
    }

    下面是一个类型自动转换的示例：

    $user  =  new  User ;
    $user - >status  =  '1' ;
    $user - >score  =  '90.50' ;
    $user - >birthday  =  '2015/5/1' ;
    $user - >info  =  [ 'a' = > 1 , 'b' = > 2 ] ;
    $user - > save ( ) ;
    var_dump ($user - >status ) ;  // int 1
    var_dump ($user - >score ) ;  // float 90.5;
    var_dump ($user - >birthday ) ;  // string '2015-05-01 00:00:00'
    var_dump ($user - >info ) ; // array (size=2) 'a' => int 1  'b' => int 2

    数据库查询默认取出来的数据都是字符串类型，如果需要转换为其他的类型，需要设置，支持的类型包括如下类型：

####  =integer=


     设置为 integer（整型）后，该字段写入和输出的时候都会自动转换为整型。

####  =float=


     该字段的值写入和输出的时候自动转换为浮点型。

####  =boolean=


     该字段的值写入和输出的时候自动转换为布尔型。

####  =array=


     如果设置为强制转换为 =array=类型，系统会自动把数组编码为 json 格式字符串写入数据库，取出来的时候会自动解码。

####  =object=


     该字段的值在写入的时候会自动编码为 json 字符串，输出的时候会自动转换为 =stdclass=对象。

####  =serialize=


     指定为序列化类型的话，数据会自动序列化写入，并且在读取的时候自动反序列化。

####  =json=


     指定为 =json=类型的话，数据会自动 =json_encode=写入，并且在读取的时候自动 =json_decode=处理。

####  =timestamp=


     指定为时间戳字段类型的话，该字段的值在写入时候会自动使用 =strtotime=生成对应的时间戳，输出的时候会自动转换为 =dateFormat=属性定义的时间字符串格式，默认的格式为 =Y-m-d H:i:s=，如果希望改变其他格式，可以定义如下：

     < ?php
     namespace app\model ;

     use think\Model ;

     class  User extends  Model 
     {
     protected $dateFormat  =  'Y/m/d' ;
     protected $type  =  [
     'status'     = >   'integer' ,
     'score'      = >   'float' ,
     'birthday'   = >   'timestamp' ,
     ] ;
     }

     或者在类型转换定义的时候使用：

     < ?php
     namespace app\model ;

     use think\Model ;

     class  User extends  Model 
     {
     protected $type  =  [
     'status'     = >   'integer' ,
     'score'      = >   'float' ,
     'birthday'   = >   'timestamp:Y/m/d' ,
     ] ;
     }

     然后就可以

     $user  = User : : find ( 1 ) ;
     echo $user - >birthday ;  // 2015/5/1

####  =datetime=


     和 =timestamp=类似，区别在于写入和读取数据的时候都会自动处理成时间字符串 =Y-m-d H:i:s=的格式。

### 模型输出
#### 模型输出
     模型数据的模板输出可以直接把模型对象实例赋值给模板变量，在模板中可以直接输出，例如：

     < ?php
     namespace app\controller ;

     use app\model\User ;
     use think\facade\View ;

     class  Index
     {
     public  function  index ( )
     {
     $user  = User : : find ( 1 ) ;
     View : : assign ( 'user' , $user ) ;
            
     return View : : fetch ( ) ;
     }
     }

     在模板文件中可以使用

     {$user .name }
     {$user .email }


     模板中的模型数据输出一样会调用获取器。
  

#### 数组转换


     可以使用 =toArray=方法将当前的模型实例输出为数组，例如：

     $user  = User : : find ( 1 ) ;
     dump ($user - > toArray ( ) ) ;

     支持设置不输出的字段属性：

     $user  = User : : find ( 1 ) ;
     dump ($user - > hidden ( [ 'create_time' , 'update_time' ] ) - > toArray ( ) ) ;

     数组输出的字段值会经过获取器的处理，也可以支持追加其它获取器定义（不在数据表字段列表中）的字段，例如：

     $user  = User : : find ( 1 ) ;
     dump ($user - > append ( [ 'status_text' ] ) - > toArray ( ) ) ;

     支持设置允许输出的属性，例如：

     $user  = User : : find ( 1 ) ;
     dump ($user - > visible ( [ 'id' , 'name' , 'email' ] ) - > toArray ( ) ) ;

     对于数据集结果一样可以直接使用（包括 =append=、 =visible=和 =hidden=方法）

     $list  = User : : select ( ) ;
     $list  = $list - > toArray ( ) ;

     可以在查询之前定义 =hidden=/ =visible=/ =append=方法，例如：

     dump (User : : where ( 'id' , 10 ) - > hidden ( [ 'create_time' , 'update_time' ] ) - > append ( [ 'status_text' ] ) - > find ( ) - > toArray ( ) ) ;

     注意，必须要首先调用一次 Db 类的方法后才能调用 =hidden=/ =visible=/ =append=方法。

##### 追加关联属性


      支持追加关联模型的属性到当前模型，例如：

      $user  = User : : find ( 1 ) ;
      dump ($user - > append ( [ 'profile'  = >  [ 'email' ,  'nickname' ] ] ) - > toArray ( ) ) ;

      =profile=是关联定义方法名， =email=和 =nickname=是 =Profile=模型的属性。

      模型的 =visible=、 =hidden=和 =append=方法支持关联属性操作，例如：

      $user  = User : : with ( 'profile' ) - > find ( 1 ) ;
      // 隐藏profile关联属性的email属性
      dump ($user - > hidden ( [ 'profile' = > [ 'email' ] ] ) - > toArray ( ) ) ;
      // 或者使用
      dump ($user - > hidden ( [ 'profile.email' ] ) - > toArray ( ) ) ;

      =hidden=、 =visible=和 =append=方法同样支持数据集对象。

#### JSON 序列化


     可以调用模型的 =toJson=方法进行 =JSON=序列化， =toJson=方法的使用和 =toArray=一样。

     $user  = User : : find ( 1 ) ;
     echo $user - > toJson ( ) ;

     可以设置需要隐藏的字段，例如：

     $user  = User : : find ( 1 ) ;
     echo $user - > hidden ( [ 'create_time' , 'update_time' ] ) - > toJson ( ) ;

     或者追加其它的字段（该字段必须有定义获取器）：

     $user  = User : : find ( 1 ) ;
     echo $user - > append ( [ 'status_text' ] ) - > toJson ( ) ;

     设置允许输出的属性：

     $user  = User : : find ( 1 ) ;
     echo $user - > visible ( [ 'id' , 'name' , 'email' ] ) - > toJson ( ) ;

     模型对象可以直接被 JSON 序列化，例如：

     echo  json_encode (User : : find ( 1 ) ) ;

     输出结果类似于：

     { "id" : "1" , "name" : "" , "title" : "" , "status" : "1" , "update_time" : "1430409600" , "score" : "90.5" }

     如果直接 =echo= 一个模型对象会自动调用模型的 =toJson=方法输出，例如：

     echo User : : find ( 1 ) ;

     输出的结果和上面是一样的。

### 模型事件


#### 模型事件


     模型事件是指在进行模型的查询和写入操作的时候触发的操作行为。

  
     模型事件只在调用模型的方法生效，使用查询构造器操作是无效的
 

     模型支持如下事件：

     | 事件              | 描述     | 事件方法名        |
     |-------------------+----------+-------------------|
     | after\_read       | 查询后   | onAfterRead       |
     | before\_insert    | 新增前   | onBeforeInsert    |
     | after\_insert     | 新增后   | onAfterInsert     |
     | before\_update    | 更新前   | onBeforeUpdate    |
     | after\_update     | 更新后   | onAfterUpdate     |
     | before\_write     | 写入前   | onBeforeWrite     |
     | after\_write      | 写入后   | onAfterWrite      |
     | before\_delete    | 删除前   | onBeforeDelete    |
     | after\_delete     | 删除后   | onAfterDelete     |
     | before\_restore   | 恢复前   | onBeforeRestore   |
     | after\_restore    | 恢复后   | onAfterRestore    |

     注册的回调方法支持传入一个参数（当前的模型对象实例），但支持依赖注入的方式增加额外参数。

  
     如果 =before_write=、 =before_insert=、 =before_update= 、 =before_delete=事件方法中返回 =false=或者抛出 =think\exception\ModelEventException=异常的话，则不会继续执行后续的操作。
 

#### 模型事件定义


     最简单的方式是在模型类里面定义静态方法来定义模型的相关事件响应。

     < ?php
     namespace app\model ;

     use think\Model ;
     use app\model\Profile ;

     class  User extends  Model
     {
     public static  function  onBeforeUpdate ($user )
     {
     if  ( 'thinkphp'  == $user - >name )  {
     return  false ;
     }
     }
        
     public static  function  onAfterDelete ($user )
     {
     Profile : : destroy ($user - >id ) ;
     }
     }

     参数是当前的模型对象实例，支持使用依赖注入传入更多的参数。

### 模型关联


#### 模型关联


     通过模型关联操作把数据表的关联关系对象化，解决了大部分常用的关联场景，封装的关联操作比起常规的数据库联表操作更加智能和高效，并且直观。

  
     避免在模型内部使用复杂的 =join=查询和视图查询。
 

     从面向对象的角度来看关联的话，模型的关联其实应该是模型的某个属性，比如用户的档案关联，就应该是下面的情况：

     // 获取用户模型实例
     $user  = User : : find ( 1 ) ;
     // 获取用户的档案
     $user - >profile ;
     // 获取用户的档案中的手机资料
     $user - >profile - >mobile ;

     为了更方便和灵活的定义模型的关联关系，框架选择了方法定义而不是属性定义的方式，每个 #关联属性#其实是对应了一个模型的（关联）方法，这个关联属性和模型的数据一样是动态的，并非模型类的实体属性。

     例如上面的关联属性就是在 =User=模型类中定义了一个 =profile=方法（ =mobile=属性是 =Profile=模型的属性）：

     < ?php

     namespace app\model ;

     use think\Model ;

     class  User extends  Model
     {
     public  function  profile ( )
     {
     return $this - > hasOne (Profile : :class ) ;
     }
     }

 
     一个模型可以定义多个不同的关联，增加不同的关联方法即可
 

     同时，我们必须定义一个 =Profile=模型（即使是一个空模型）。

     < ?php

     namespace app\model ;

     use think\Model ;

     class  Profile extends  Model
     {
     }

     关联方法返回的是不同的关联对象，例如这里的 =profile=方法返回的是一个 =HasOne=关联对象（ =think\model\relation\HasOne=）实例。

     当我们访问 =User=模型对象实例的 =profile=属性的时候，其实就是调用了 =profile=方法来完成关联查询。

     按照 =PSR-2=规范，模型的方法名都是驼峰命名的，所以系统做了一个兼容处理，如果我们定义了一个 =userProfile=的关联方法的时候，在获取关联属性的时候，下面两种方式都是有效的：

     $user - >userProfile ;
     $user - >user_profile ;  // 建议使用

 
     推荐关联属性统一使用后者，和数据表的字段命名规范一致，因此在很多时候系统自动获取关联属性的时候采用的也是后者。
 

     可以简单的理解为关联定义就是在模型类中添加一个方法（注意不要和模型的对象属性以及其它业务逻辑方法冲突），一般情况下无需任何参数，并在方法中指定一种关联关系，比如上面的 =hasOne=关联关系， =6.0=版本支持的关联关系包括下面 8 种，后面会给大家陆续介绍：

     | 模型方法           | 关联类型     |
     |--------------------+--------------|
     | =hasOne=           | 一对一       |
     | =belongsTo=        | 一对一       |
     | =hasMany=          | 一对多       |
     | =hasOneThrough=    | 远程一对一   |
     | =hasManyThrough=   | 远程一对多   |
     | =belongsToMany=    | 多对多       |
     | =morphMany=        | 多态一对多   |
     | =morphOne=         | 多态一对一   |
     | =morphTo=          | 多态         |

     关联方法的第一个参数就是要关联的模型名称，也就是说当前模型的关联模型必须也是已经定义好的一个模型。

     也可以使用完整命名空间定义，例如：

     < ?php

     namespace app\model ;

     use think\Model ;

     class  User extends  Model
     {
     public  function  profile ( )
     {
     return $this - > hasOne (Profile : :class ) ;
     }
     }

     两个模型之间因为参照模型的不同就会产生相对的但不一定相同的关联关系，并且相对的关联关系只有在需要调用的时候才需要定义，下面是每个关联类型的相对关联关系对照：

     | 类型         | 关联关系           | 相对的关联关系    |
     |--------------+--------------------+-------------------|
     | 一对一       | =hasOne=           | =belongsTo=       |
     | 一对多       | =hasMany=          | =belongsTo=       |
     | 多对多       | =belongsToMany=    | =belongsToMany=   |
     | 远程一对多   | =hasManyThrough=   | 不支持            |
     | 多态一对一   | =morphOne=         | =morphTo=         |
     | 多态一对多   | =morphMany=        | =morphTo=         |

     例如， =Profile=模型中就可以定义一个相对的关联关系。

     < ?php

     namespace app\model ;

     use think\Model ;

     class  Profile extends  Model
     {
     public  function  user ( )
     {
     return $this - > belongsTo (User : :class ) ;
     }
     }

     在进行关联查询的时候，也是类似，只是当前模型不同。

     // 获取档案实例
     $profile  = Profile : : find ( 1 ) ;
     // 获取档案所属的用户名称
     echo $profile - >user - >name ;

     如果是数据集查询的话，关联获取的用法如下：

     // 获取档案实例
     $profiles  = Profile : : where ( 'id' ,  '>' ,  1 ) - > select ( ) ;
     foreach ($profiles as $profile )  {
     // 获取档案所属的用户名称
     echo $profile - >user - >name ;
     }

     如果你需要对关联模型进行更多的查询约束，可以在关联方法的定义方法后面追加额外的查询链式方法（但切忌不要滥用，并且不要使用实际的查询方法），例如：

     < ?php

     namespace app\model ;

     use think\Model ;

     class  User extends  Model
     {
     public  function  book ( )
     {
     return $this - > hasMany (Book : :class ) - > order ( 'pub_time' ) ;
     }
     }

 
     模型关联支持调用模型的方法
 

 
     具体不同的关联关系的详细使用，请继续参考后面的内容。
 

#### 一对一关联


##### 一对一关联


###### 关联定义


       定义一对一关联，例如，一个用户都有一个个人资料，我们定义 =User=模型如下：

       < ?php
       namespace app\model ;

       use think\Model ;

       class  User extends  Model
       {
       public  function  profile ( )
       {
       return $this - > hasOne (Profile : :class ) ;
       }
       }
 
       =hasOne=方法的参数包括：

 
       ### hasOne('关联模型类名', '外键', '主键');
       :PROPERTIES:
       :CUSTOM_ID: hasone 关联模型类名-外键-主键
       :CLASS: calibre6
       :END:
 

       除了关联模型外，其它参数都是可选。

       -  #关联模型#（必须）：关联模型类名
       -  #外键#：默认的外键规则是当前模型名（不含命名空间，下同）+ =_id= ，例如 =user_id=
       -  #主键#：当前模型主键，默认会自动获取也可以指定传入

       一对一关联定义的时候还支持额外的方法，包括：

       | 方法名     | 描述                                     |
       |------------+------------------------------------------|
       | bind       | 绑定关联属性到父模型                     |
       | joinType   | JOIN 方式查询的 JOIN 方式，默认为 =INNER=   |

 
       如果使用了 JOIN 方式的关联查询方式，你可以在额外的查询条件中使用关联对象名（不含命名空间）作为表的别名。
 

###### 关联查询


       定义好关联之后，就可以使用下面的方法获取关联数据：

       $user  = User : : find ( 1 ) ;
       // 输出Profile关联模型的email属性
       echo $user - >profile - >email ;
 
       默认情况下， 我们使用的是 =user_id= 作为外键关联，如果不是的话则需要在关联定义的时候指定，例如：

       < ?php
       namespace app\model ;

       use think\Model ;

       class  User extends  Model 
       {
       public  function  profile ( )
       {
       return $this - > hasOne (Profile : :class ,  'uid' ) ;
       }
       }
 
 
       有一点需要注意的是，关联方法的命名规范是驼峰法，而关联属性则一般是小写+下划线的方式，系统在获取的时候会自动转换对应，读取 =user_profile=关联属性则对应的关联方法应该是 =userProfile=。
 

###### 根据关联数据查询


       可以根据关联条件来查询当前模型对象数据，例如：

       // 查询用户昵称是think的用户
       // 注意第一个参数是关联方法名（不是关联模型名）
       $users  = User : : hasWhere ( 'profile' ,  [ 'nickname' = > 'think' ] ) - > select ( ) ;

       // 可以使用闭包查询
       $users  = User : : hasWhere ( 'profile' ,  function ($query )  {
       $query - > where ( 'nickname' ,  'like' ,  'think%' ) ;
       } ) - > select ( ) ;
 
###### 预载入查询


       可以使用预载入查询解决典型的 =N+1=查询问题，使用：

       $users  = User : : with ( 'profile' ) - > select ( ) ;
       foreach  ($users as $user )  {
       echo $user - >profile - >name ;
       }
 
       上面的代码使用的是 =IN=查询，只会产生 2 条 SQL 查询。

       如果要对关联模型进行约束，可以使用闭包的方式。

       $users  = User : : with ( [ 'profile'   = >  function ($query )  {
       $query - > field ( 'id,user_id,name,email' ) ;
       } ] ) - > select ( ) ;
       foreach  ($users as $user )  {
       echo $user - >profile - >name ;
       }
 
       =with=方法可以传入数组，表示同时对多个关联模型（支持不同的关联类型）进行预载入查询。

       $users  = User : : with ( [ 'profile' , 'book' ] ) - > select ( ) ;
       foreach  ($users as $user )  {
       echo $user - >profile - >name ;
       foreach ($user - >book as $book )  {
       echo $book - >name ;
       }
       }
 
       如果需要使用 =JOIN=方式的查询，直接使用 =withJoin=方法，如下：

       $users  = User : : withJoin ( 'profile' ) - > select ( ) ;
       foreach  ($users as $user )  {
       echo $user - >profile - >name ;
       }
 
       =withJoin=方法默认使用的是 =INNER JOIN=方式，如果需要使用其它的，可以改成

       $users  = User : : withJoin ( 'profile' ,  'LEFT' ) - > select ( ) ;
       foreach  ($users as $user )  {
       echo $user - >profile - >name ;
       }
 
       需要注意的是 =withJoin=方式不支持嵌套关联，通常你可以直接传入多个需要关联的模型。

       如果需要约束关联字段，可以使用下面的简便方法。

       #+begin_src php
         $users  = User : : withJoin ( [
             'profile'   =>   [ 'user_id' ,  'name' ,  'email' ]
         ] ) -> select ( ) ;
         foreach  ($users as $user )  {
             echo $user ->profile - >name ;
         }

       #+end_src
 
###### 关联保存
       $user  = User : : find ( 1 ) ;
       // 如果还没有关联数据 则进行新增
       $user - > profile ( ) - > save ( [ 'email'  = >  'thinkphp' ] ) ;
 
       系统会自动把当前模型的主键传入 =Profile=模型。

       和新增一样使用 =save=方法进行更新关联数据。

       #+begin_src php
         $user  = User : : find ( 1 ) ;
         $user - >profile - >email  =  'thinkphp' ;
         $user - >profile - > save ( ) ;
         // 或者
         $user - >profile - > save ( [ 'email'  = >  'thinkphp' ] ) ;
       #+end_src
 
###### 定义相对关联


       我们可以在 =Profile=模型中定义一个相对的关联关系，例如：

       < ?php
       namespace app\model ;

       use think\Model ;

       class  Profile extends  Model 
       {
       public  function  user ( )
       {
       return $this - > belongsTo (User : :class ) ;
       }
       }
 
       =belongsTo=的参数包括：

 
       ### belongsTo('关联模型','外键', '关联主键');
       :PROPERTIES:
       :CUSTOM_ID: belongsto 关联模型外键-关联主键
       :CLASS: calibre6
       :END:
 

       除了关联模型外，其它参数都是可选。

       -  #关联模型#（必须）：关联模型类名
       -  #外键#：当前模型外键，默认的外键名规则是关联模型名+ =_id=
       -  #关联主键#：关联模型主键，一般会自动获取也可以指定传入

       默认的关联外键是 =user_id=，如果不是，需要在第二个参数定义

       < ?php
       namespace app\model ;

       use think\Model ;

       class  Profile extends  Model 
       {
       public  function  user ( )
       {
       return $this - > belongsTo (User : :class ,  'uid' ) ;
       }
       }
 
       我们就可以根据档案资料来获取用户模型的信息

       $profile  = Profile : : find ( 1 ) ;
       // 输出User关联模型的属性
       echo $profile - >user - >account ;
 
##### 绑定属性到父模型


      可以在定义关联的时候使用 =bind=方法绑定属性到父模型，例如：

      < ?php
      namespace app\model ;

      use think\Model ;

      class  User extends  Model 
      {
      public  function  profile ( )
      {
      return $this - > hasOne (Profile : :class ,  'uid' ) - > bind ( [ 'nickname' ,  'email' ] ) ;
      }
      }
 
      或者指定绑定属性别名

      < ?php
      namespace app\model ;

      use think\Model ;

      class  User extends  Model 
      {
      public  function  profile ( )
      {
      return $this - > hasOne (Profile : :class ,  'uid' ) - > bind ( [
      'email' ,
      'truename'  = >  'nickname' ,
      ] ) ;
      }
      }
 
      然后使用关联预载入查询的时候，可以使用

      $user  = User : : with ( 'profile' ) - > find ( 1 ) ;
      // 直接输出Profile关联模型的绑定属性
      echo $user - >email ;
      echo $user - >truename ;
 
      绑定关联模型的属性支持读取器。

 
      如果不是预载入查询，请使用模型的 =appendRelationAttr=方法追加属性。
 

      也可以使用动态绑定关联属性，可以使用

      $user  = User : : find ( 1 ) - > bindAttr ( 'profile' , [ 'email' , 'nickname' ] ) ;
      // 输出Profile关联模型的email属性
      echo $user - >email ;
      echo $user - >nickname ;
 
      同样支持指定属性别名

      $user  = User : : find ( 1 ) - > bindAttr ( 'profile' , [
      'email' ,
      'truename'  = >  'nickname' ,
      ] ) ;
      // 输出Profile关联模型的email属性
      echo $user - >email ;
      echo $user - >truename ;
 
##### 关联自动写入


      我们可以使用 =together=方法更方便的进行关联自动写入操作。

      写入

      $blog  =  new  Blog ;
      $blog - >name  =  'thinkphp' ;
      $blog - >title  =  'ThinkPHP5关联实例' ;
      $content  =  new  Content ;
      $content - >data  =  '实例内容' ;
      $blog - >content  = $content ;
      $blog - > together ( [ 'content' ] ) - > save ( ) ;
 
      如果绑定了子模型的属性到当前模型，可以指定子模型的属性

      $blog  =  new  Blog ;
      $blog - >name  =  'thinkphp' ;
      $blog - >title  =  'ThinkPHP5关联实例' ;
      $blog - >content  =  '实例内容' ;
      // title和content是子模型的属性
      $blog - > together ( [ 'content'  = >  [ 'title' ,  'content' ] ] ) - > save ( ) ;
 
      更新

      // 查询
      $blog  = Blog : : find ( 1 ) ;
      $blog - >title  =  '更改标题' ;
      $blog - >content - >data  =  '更新内容' ;
      // 更新当前模型及关联模型
      $blog - > together ( [ 'content' ] ) - > save ( ) ;
 
      删除

      // 查询
      $blog  = Blog : : with ( 'content' ) - > find ( 1 ) ;
      // 删除当前及关联模型
      $blog - > together ( [ 'content' ] ) - > delete ( ) ;
 
#### 一对多关联


##### 一对多关联


###### 关联定义


       一对多关联的情况也比较常见，使用 =hasMany=方法定义，参数包括：

 
       ### hasMany('关联模型','外键','主键');

       除了关联模型外，其它参数都是可选。

       -  #关联模型#（必须）：关联模型类名
       -  #外键#：关联模型外键，默认的外键名规则是当前模型名+ =_id=
       -  #主键#：当前模型主键，一般会自动获取也可以指定传入

       例如一篇文章可以有多个评论

       < ?php
       namespace app\model ;

       use think\Model ;

       class  Article extends  Model 
       {
       public  function  comments ( )
       {
       return $this - > hasMany (Comment : :class ) ;
       }
       }
 
       同样，也可以定义外键的名称

       < ?php
       namespace app\model ;

       use think\Model ;

       class  Article extends  Model 
       {
       public  function  comments ( )
       {
       return $this - > hasMany (Comment : :class , 'art_id' ) ;
       }
       }
 
###### 关联查询


       我们可以通过下面的方式获取关联数据

       $article  = Article : : find ( 1 ) ;
       // 获取文章的所有评论
       dump ($article - >comments ) ;
       // 也可以进行条件搜索
       dump ($article - > comments ( ) - > where ( 'status' , 1 ) - > select ( ) ) ;
 
###### 根据关联条件查询


       可以根据关联条件来查询当前模型对象数据，例如：

       // 查询评论超过3个的文章
       $list  = Article : : has ( 'comments' , '>' , 3 ) - > select ( ) ;
       // 查询评论状态正常的文章
       $list  = Article : : hasWhere ( 'comments' , [ 'status' = > 1 ] ) - > select ( ) ;
 
       如果需要更复杂的关联条件查询，可以使用

       $where  = Comment : : where ( 'status' , 1 ) - > where ( 'content' ,  'like' ,  '%think%' ) ;
       $list  = Article : : hasWhere ( 'comments' , $where ) - > select ( ) ;
 
###### 关联新增


       $article  = Article : : find ( 1 ) ;
       // 增加一个关联数据
       $article - > comments ( ) - > save ( [ 'content' = > 'test' ] ) ;
       // 批量增加关联数据
       $article - > comments ( ) - > saveAll ( [
       [ 'content' = > 'thinkphp' ] ,
       [ 'content' = > 'onethink' ] ,
       ] ) ;
 
###### 定义相对的关联


       要在 Comment 模型定义相对应的关联，可使用 =belongsTo= 方法：

       < ?php
       name app\model ;

       use think\Model ;

       class  Comment extends  Model 
       {
       public  function  article ( )
       {
       return $this - > belongsTo (Article : :class ) ;
       }
       }
 
###### 关联删除


       在删除文章的同时删除下面的评论

       $article  = Article : : with ( 'comments' ) - > find ( 1 ) ;
       $article - > together ( [ 'comments' ] ) - > delete ( ) ;
 
#### 远程一对多


     远程一对多关联用于定义有跨表的一对多关系，例如：

     -  每个城市有多个用户
     -  每个用户有多个话题
     -  城市和话题之间并无关联

##### 关联定义


      就可以直接通过远程一对多关联获取每个城市的多个话题， =City=模型定义如下：

      < ?php
      namespace app\model ;

      use think\Model ;

      class  City extends  Model 
      {
      public  function  topics ( )
      {
      return $this - > hasManyThrough (Topic : :class , User : :class ) ;
      }
      }
 
 
      远程一对多关联，需要同时存在 =Topic=和 =User=模型，当前模型和中间模型的关联关系可以是一对一或者一对多。
 

      =hasManyThrough=方法的参数如下：

 
      ### hasManyThrough('关联模型', '中间模型', '外键', '中间表关联键','当前模型主键','中间模型主键');


      -  #关联模型#（必须）：关联模型类名
      -  #中间模型#（必须）：中间模型类名
      -  #外键#：默认的外键名规则是当前模型名+ =_id=
      -  #中间表关联键#：默认的中间表关联键名的规则是中间模型名+ =_id=
      -  #当前模型主键#：一般会自动获取也可以指定传入
      -  #中间模型主键#：一般会自动获取也可以指定传入

##### 关联查询


      我们可以通过下面的方式获取关联数据

      $city  = City : : find ( 1 ) ;
      // 获取同城的所有话题
      dump ($city - >topics ) ;
      // 也可以进行条件搜索
      dump ($city - > topics ( ) - > where ( 'topic.status' , 1 ) - > select ( ) ) ;
 
 
      条件搜索的时候，需要带上模型名作为前缀
 

###### 根据关联条件查询


       如果需要根据关联条件来查询当前模型，可以使用

       $list  = City : : hasWhere ( 'topics' ,  [ 'status'  = >  1 ] ) - > select ( ) ;
 
       更复杂的查询条件可以使用

       $where  = Topic : : where ( 'status' ,  1 ) - > where ( 'title' ,  'like' ,  '%think%' ) ;
       $list  = City : : hasWhere ( 'topics' ,$where ) - > select ( ) ;
 
#### 远程一对一


     远程一对一关联用于定义有跨表的一对一关系，例如：

     -  每个用户有一个档案
     -  每个档案有一个档案卡
     -  用户和档案卡之间并无关联

##### 关联定义


      就可以直接通过远程一对一关联获取每个用户的档案卡， =User=模型定义如下：

      < ?php
      namespace app\model ;

      use think\Model ;

      class  User extends  Model 
      {
      public  function  card ( )
      {
      return $this - > hasOneThrough (Card : :class ,Profile : :class ) ;
      }
      }
 
      远程一对一关联，需要同时存在 =Card=和 =Profile=模型。

      =hasOneThrough=方法的参数如下：

 
      ### hasOneThrough('关联模型', '中间模型', '外键', '中间表关联键','当前模型主键','中间模型主键');
     
      -  #关联模型#（必须）：关联模型类名
      -  #中间模型#（必须）：中间模型类名
      -  #外键#：默认的外键名规则是当前模型名+ =_id=
      -  #中间表关联键#：默认的中间表关联键名的规则是中间模型名+ =_id=
      -  #当前模型主键#：一般会自动获取也可以指定传入
      -  #中间模型主键#：一般会自动获取也可以指定传入

##### 关联查询


      我们可以通过下面的方式获取关联数据

      $user  = User : : find ( 1 ) ;
      // 获取用户的档案卡
      dump ($user - >card ) ;
 
#### 多对多关联


##### 多对多关联


##### 关联定义


      例如，我们的用户和角色就是一种多对多的关系，我们在 =User=模型定义如下：

      < ?php
      namespace app\model ;

      use think\Model ;

      class  User extends  Model 
      {
      public  function  roles ( )
      {
      return $this - > belongsToMany (Role : :class ,  'access' ) ;
      }
      }
 
      =belongsToMany=方法的参数如下：

 
      ### belongsToMany('关联模型','中间表','外键','关联键');


      -  #关联模型#（必须）：关联模型类名
      -  #中间表#：默认规则是当前模型名+ =_=+关联模型名 （可以指定模型名）
      -  #外键#：中间表的当前模型外键，默认的外键名规则是关联模型名+ =_id=
      -  #关联键#：中间表的当前模型关联键名，默认规则是当前模型名+ =_id=

      中间表名无需添加表前缀，并支持定义中间表模型，例如：

      public  function  roles ( )
      {
      return $this - > belongsToMany (Role : :class , Access : :class ) ;
      }
 
      中间表模型类必须继承 =think\model\Pivot=，例如：

      < ?php
      namespace app\model ;

      use think\model\Pivot ;

      class  Access extends  Pivot
      {
      protected $autoWriteTimestamp  =  true ;
      }
 
      中间表模型的基类 =Pivot=默认关闭了时间戳自动写入，上面的中间表模型则开启了时间戳字段自动写入。

###### 关联查询


       我们可以通过下面的方式获取关联数据

       $user  = User : : find ( 1 ) ;
       // 获取用户的所有角色
       $roles  = $user - >roles ;
       foreach  ($roles as $role )  {
       // 输出用户的角色名
       echo $role - >name ;
       // 获取中间表模型
       dump ($role - >pivot ) ;
       }
 
###### 关联新增


       $user  = User : : find ( 1 ) ;
       // 给用户增加管理员权限 会自动写入角色表和中间表数据
       $user - > roles ( ) - > save ( [ 'name' = > '管理员' ] ) ;
       // 批量授权
       $user - > roles ( ) - > saveAll ( [
       [ 'name' = > '管理员' ] ,
       [ 'name' = > '操作员' ] ,
       ] ) ;
 
       只新增中间表数据（角色已经提前创建完成），可以使用

       $user  = User : : find ( 1 ) ;
       // 仅增加管理员权限（假设管理员的角色ID是1）
       $user - > roles ( ) - > save ( 1 ) ;
       // 或者
       $role  = Role : : find ( 1 ) ;
       $user - > roles ( ) - > save ($role ) ;
       // 批量增加关联数据
       $user - > roles ( ) - > saveAll ( [ 1 , 2 , 3 ] ) ;
 
       单独更新中间表数据，可以使用：

       $user  = User : : find ( 1 ) ;
       // 增加关联的中间表数据
       $user - > roles ( ) - > attach ( 1 ) ;
       // 传入中间表的额外属性
       $user - > roles ( ) - > attach ( 1 , [ 'remark' = > 'test' ] ) ;
       // 删除中间表数据
       $user - > roles ( ) - > detach ( [ 1 , 2 , 3 ] ) ;
 
 
       =attach=方法的返回值是一个 =Pivot=对象实例，如果是附加多个关联数据，则返回 =Pivot=对象实例的数组。
 

###### 定义相对的关联


       我们可以在 =Role=模型中定义一个相对的关联关系，例如：

       < ?php
       namespace app\model ;

       use think\Model ;

       class  Role extends  Model 
       {
       public  function  users ( )
       {
       return $this - > belongsToMany (User : :class , Access : :class ) ;
       }
       }
 
#### 多态关联


##### 多态一对多关联


      多态关联允许一个模型在单个关联定义方法中从属一个以上其它模型，例如用户可以评论书和文章，但评论表通常都是同一个数据表的设计。多态一对多关联关系，就是为了满足类似的使用场景而设计。

      下面是关联表的数据表结构：

      article
      id  - integer
      title  - string
      content  - text

      book
      id  - integer
      title  - string

      comment
      id  - integer
      content  - text
      commentable_id  - integer
      commentable_type  - string
 
      有两个需要注意的字段是 =comment= 表中的 =commentable_id= 和 =commentable_type=我们称之为多态字段。其中， =commentable_id= 用于存放书或者文章的 id（主键） ，而 =commentable_type= 用于存放所属模型的类型。通常的设计是多态字段有一个公共的前缀（例如这里用的 =commentable=），当然，也支持设置完全不同的字段名（例如使用 =data_id=和 =type=）。

###### 多态关联定义


       接着，让我们来查看创建这种关联所需的模型定义：

       文章模型：

       < ?php
       namespace app\model ;

       use think\Model ;

       class  Article extends  Model
       {
       /##
               # 获取所有针对文章的评论。
                 #/
                 public  function  comments ( )
                 {
                 return $this - > morphMany (Comment : :class ,  'commentable' ) ;
                 }
                 }

               =morphMany=方法的参数如下：

 
               ### morphMany('关联模型','多态字段','多态类型');


               #关联模型#（必须）：关联的模型类名

               #多态字段#（可选）：支持两种方式定义 如果是字符串表示多态字段的前缀，多态字段使用 =多态前缀_type=和 =多态前缀_id=，如果是数组，表示使用['多态类型字段名','多态 ID 字段名']，默认为当前的关联方法名作为字段前缀。

               #多态类型#（可选）：当前模型对应的多态类型，默认为当前模型名，可以使用模型名（如 =Article=）或者完整的命名空间模型名（如 =app\index\model\Article=）。

               书籍模型：

               < ?php
               namespace app\model ;

               use think\Model ;

               class  Book extends  Model
               {
               /##
               # 获取所有针对书籍的评论。
               #/
               public  function  comments ( )
               {
               return $this - > morphMany (Comment : :class ,  'commentable' ) ;
               }
               }
 
               书籍模型的设置方法同文章模型一致，区别在于多态类型不同，但由于多态类型默认会取当前模型名，因此不需要单独设置。

               下面是评论模型的关联定义：

               < ?php
               namespace app\model ;

               use think\Model ;

               class  Comment extends  Model
               {
               /##
               # 获取评论对应的多态模型。
               #/
               public  function  commentable ( )
               {
               return $this - > morphTo ( ) ;
               }
               }
 
               =morphTo=方法的参数如下：

 
               ### morphTo('多态字段',['多态类型别名']);


               #多态字段#（可选）：支持两种方式定义 如果是字符串表示多态字段的前缀，多态字段使用 =多态前缀_type=和 =多态前缀_id=，如果是数组，表示使用['多态类型字段名','多态 ID 字段名']，默认为当前的关联方法名作为字段前缀\\
               #多态类型别名#（可选）：数组方式定义

###### 获取多态关联


       一旦你的数据表及模型被定义，则可以通过模型来访问关联。例如，若要访问某篇文章的所有评论，则可以简单的使用 =comments= 动态属性：

       $article  = Article : : find ( 1 ) ;

       foreach  ($article - >comments as $comment )  {
       dump ($comment ) ;
       }
 
       你也可以从多态模型的多态关联中，通过访问调用 =morphTo= 的方法名称来获取拥有者，也就是此例子中 =Comment= 模型的 =commentable= 方法。所以，我们可以使用动态属性来访问这个方法：

       $comment  = Comment : : find ( 1 ) ;
       $commentable  = $comment - >commentable ;
 
       =Comment= 模型的 =commentable= 关联会返回 =Article= 或 =Book= 模型的对象实例，这取决于评论所属模型的类型。

###### 自定义多态关联的类型字段


       默认情况下，ThinkPHP 会使用模型名作为多态表的类型区分，例如， =Comment=属于 =Article= 或者 =Book= , =commentable_type= 的默认值可以分别是 =Article= 或者 =Book= 。我们可以通过定义多态的时候传入参数来对数据库进行解耦。

       public  function  commentable ( )
       {
       return $this - > morphTo ( 'commentable' , [
       'book'  = >   'app\index\model\Book' ,
       'post'  = >   'app\admin\model\Article' ,
       ] ) ;
       }
 
##### 多态一对一关联


      多态一对一相比多态一对多关联的区别是动态的一对一关联，举个例子说有一个个人和团队表，而无论个人还是团队都有一个头像需要保存但都会对应同一个头像表

      member
      id  - integer
      name  - string
        
      team
      id  - integer
      name  - string
        
      avatar
      id  - integer
      avatar  - string
      imageable_id  - integer
      imageable_type  - string 
 
      会员模型：

      < ?php
      namespace app\model ;

      use think\Model ;

      class  Member extends  Model
      {
      /##
             # 获取用户的头像
               #/
               public  function  avatar ( )
               {
               return $this - > morphOne (Avatar : :class ,  'imageable' ) ;
               }
               }

             团队模型：

             < ?php
             namespace app\model ;

             use think\Model ;

             class  Team extends  Model
             {
             /##
             # 获取团队的头像
             #/
             public  function  avatar ( )
             {
             return $this - > morphOne (Avatar : :class ,  'imageable' ) ;
             }
             }
 
             =morphOne=方法的参数如下：

 
             ### morphOne('关联模型','多态字段','多态类型');

             #关联模型#（必须）：关联的模型类名。

             #多态字段#（可选）：支持两种方式定义 如果是字符串表示多态字段的前缀，多态字段使用 =多态前缀_type=和 =多态前缀_id=，如果是数组，表示使用['多态类型字段名','多态 ID 字段名']，默认为当前的关联方法名作为字段前缀。

             #多态类型#（可选）：当前模型对应的多态类型，默认为当前模型名，可以使用模型名（如 =Member=）或者完整的命名空间模型名（如 =app\index\model\Member=）。

             下面是头像模型的关联定义：

             < ?php
             namespace app\model ;

             use think\Model ;

             class  Avatar extends  Model
             {
             /##
             # 获取头像对应的多态模型。
             #/
             public  function  imageable ( )
             {
             return $this - > morphTo ( ) ;
             }
             }
 
             理解了多态一对多关联后，多态一对一关联其实就很容易理解了，区别就是当前模型和动态关联的模型之间的关联属于一对一关系。

#### 关联预载入


##### 关联预载入


      关联查询的预查询载入功能，主要解决了 =N+1=次查询的问题，例如下面的查询如果有 3 个记录，会执行 4 次查询：

      $list  = User : : select ( [ 1 , 2 , 3 ] ) ;
      foreach ($list as $user ) {
      // 获取用户关联的profile模型数据
      dump ($user - >profile ) ;
      }
 
      如果使用关联预查询功能，就可以变成 2 次查询（对于一对一关联来说，如果使用 =withJoin=方式只有一次查询），有效提高性能。

      $list  = User : : with ( [ 'profile' ] ) - > select ( [ 1 , 2 , 3 ] ) ;
      foreach ($list as $user ) {
      // 获取用户关联的profile模型数据
      dump ($user - >profile ) ;
      }
 
      支持预载入多个关联，例如：

      $list  = User : : with ( [ 'profile' ,  'book' ] ) - > select ( [ 1 , 2 , 3 ] ) ;
 
 
      =with=方法只能调用一次，请不要多次调用，如果需要对多个关联模型预载入使用数组即可。
 

      也可以支持嵌套预载入，例如：

      $list  = User : : with ( [ 'profile.phone' ] ) - > select ( [ 1 , 2 , 3 ] ) ;
      foreach ($list as $user ) {
      // 获取用户关联的phone模型
      dump ($user - >profile - >phone ) ;
      }
 
      支持使用数组方式定义嵌套预载入，例如下面的预载入要同时获取用户的 =Profile=关联模型的 =Phone=、 =Job=和 =Img=子关联模型数据：

      $list  = User : : with ( [ 'profile' = > [ 'phone' , 'job' , 'img' ] ] ) - > select ( [ 1 , 2 , 3 ] ) ;
      foreach ($list as $user ) {
      // 获取用户关联
      dump ($user - >profile - >phone ) ;
      dump ($user - >profile - >job ) ;    
      dump ($user - >profile - >img ) ;    
      }
 
      如果要指定属性查询，可以使用：

      $list  = User : : field ( 'id,name' ) - > with ( [ 'profile'  = >  function ($query ) {
      $query - > field ( 'user_id,email,phone' ) ;
      } ] ) - > select ( [ 1 , 2 , 3 ] ) ;

      foreach ($list as $user ) {
      // 获取用户关联的profile模型数据
      dump ($user - >profile ) ;
      }
 
 
      记得指定属性的时候一定要包含关联键。
 

      对于一对多关联来说，如果需要设置返回的关联数据数量，可以使用 =withLimit=方法。

      Article : : with ( [ 'comments'  = >  function (Relation $query )  {
      $query - > order ( 'create_time' ,  'desc' ) - > withLimit ( 3 ) ;
      } ] ) - > select ( ) ;
 
 
      注意这里的类型约束必须使用 =think\model\Relation=，因为 =withLimit=方法是关联类才有的方法
 

      关联预载入名称是关联方法名，支持传入方法名的小写和下划线定义方式，例如如果关联方法名是 =userProfile=和 =userBook=的话：

      $list  = User : : with ( [ 'userProfile' , 'userBook' ] ) - > select ( [ 1 , 2 , 3 ] ) ;
 
      和下面的方法是等效的：

      $list  = User : : with ( [ 'user_profile' , 'user_book' ] ) - > select ( [ 1 , 2 , 3 ] ) ;
 
      区别在于你获取关联数据的时候必须和传入的关联名称保持一致。

      $user  = User : : with ( [ 'userProfile' ] ) - > find ( 1 ) ;
      dump ($user - >userProfile ) ;

      $user  = User : : with ( [ 'user_profile' ] ) - > find ( 1 ) ;
      dump ($user - >user_profile ) ;
 
      一对一关联预载入支持两种方式： =JOIN=方式（一次查询）和 =IN=方式（两次查询，默认方式），如果要使用 =JOIN=方式关联预载入，可以使用 =withJoin=方法。

      $list  = User : : withJoin ( [ 'profile'  = >  function (Relation $query ) {
      $query - > withField ( 'truename,email' ) ;
      } ] ) - > select ( [ 1 , 2 , 3 ] ) ;
 
##### 延迟预载入
      有些情况下，需要根据查询出来的数据来决定是否需要使用关联预载入，当然关联查询本身就能解决这个问题，因为关联查询是惰性的，不过用预载入的理由也很明显，性能具有优势。

      延迟预载入仅针对多个数据的查询，因为单个数据的查询用延迟预载入和关联惰性查询没有任何区别，所以不需要使用延迟预载入。

      如果你的数据集查询返回的是数据集对象，可以使用调用数据集对象的 =load=实现延迟预载入：

      #+begin_src php
        // 查询数据集
        $list  = User : : select ( [ 1 , 2 , 3 ] ) ;
        // 延迟预载入
        $list - > load ( [ 'cards' ] ) ;
        foreach ($list as $user ) {
            // 获取用户关联的card模型数据
            dump ($user - >cards ) ;
        }
      #+end_src
 
##### 关联预载入缓存
      关联预载入可以支持查询缓存，例如：
#+begin_src php
      $list  = User : : with ( [ 'profile' ] ) - > withCache ( 30 ) - > select ( [ 1 , 2 , 3 ] ) ;
#+end_src
 
      表示对关联数据缓存 30 秒。

      如果你有多个关联数据，也可以仅仅缓存部分关联

      #+begin_src php
        $list  = User : : with ( [ 'profile' ,  'book' ] ) - > withCache ( [ 'profile' ] , 30 ) - > select ( [ 1 , 2 , 3 ] ) ;
      #+end_src
 
      对于延迟预载入查询的话，可以在第二个参数传入缓存参数。

      #+begin_src php
      // 查询数据集
      $list  = User : : select ( [ 1 , 2 , 3 ] ) ;
      // 延迟预载入
      $list - > load ( [ 'cards' ] ,  30 ) ;
      #+end_src
 
#### 关联统计


##### 关联统计


      有些时候，并不需要获取关联数据，而只是希望获取关联数据的统计，这个时候可以使用 =withCount=方法进行指定关联的统计。

      $list  = User : : withCount ( 'cards' ) - > select ( [ 1 , 2 , 3 ] ) ;
      foreach ($list as $user ) {
      // 获取用户关联的card关联统计
      echo $user - >cards_count ;
      }
 
 
      你必须给 User 模型定义一个名称是 =cards=的关联方法。
 

      关联统计功能会在模型的对象属性中自动添加一个以“关联方法名+ =_count=”为名称的动态属性来保存相关的关联统计数据。

      可以通过数组的方式同时查询多个统计字段。

      $list  = User : : withCount ( [ 'cards' ,  'phone' ] ) - > select ( [ 1 , 2 , 3 ] ) ;
      foreach ($list as $user ) {
      // 获取用户关联关联统计
      echo $user - >cards_count ;
      echo $user - >phone_count ;
      }
 
      支持给关联统计指定统计属性名，例如：

      $list  = User : : withCount ( [ 'cards'  = >  'card_count' ] ) - > select ( [ 1 , 2 , 3 ] ) ;
      foreach ($list as $user ) {
      // 获取用户关联的card关联统计
      echo $user - >card_count ;
      }
 
 
      关联统计暂不支持多态关联
 

      如果需要对关联统计进行条件过滤，可以使用闭包方式。

      $list  = User : : withCount ( [ 'cards'  = >  function ($query )  {
      $query - > where ( 'status' , 1 ) ;
      } ] ) - > select ( [ 1 , 2 , 3 ] ) ;

      foreach ($list as $user ) {
      // 获取用户关联的card关联统计
      echo $user - >cards_count ;
      }
 
      使用闭包的方式，如果需要自定义统计字段名称，可以使用

      $list  = User : : withCount ( [ 'cards'  = >  function ($query ,  &$alias )  {
      $query - > where ( 'status' , 1 ) ;
      $alias  =  'card_count' ;
      } ] ) - > select ( [ 1 , 2 , 3 ] ) ;

      foreach ($list as $user ) {
      // 获取用户关联的card关联统计
      echo $user - >card_count ;
      }
 
      和 =withCount=类似的方法，还包括：

      | 关联统计方法   | 描述          |
      |----------------+---------------|
      | =withSum=      | 关联 SUM 统计   |
      | =withMax=      | 关联 Max 统计   |
      | =withMin=      | 关联 Min 统计   |
      | =withAvg=      | 关联 Avg 统计   |

      除了 =withCount=之外的统计方法需要在第二个字段传入统计字段名，用法如下：

      $list  = User : : withSum ( 'cards' ,  'total' ) - > select ( [ 1 , 2 , 3 ] ) ;

      foreach ($list as $user ) {
      // 获取用户关联的card关联余额统计
      echo $user - >cards_sum ;
      }
 
      同样，也可以指定统计字段名

      $list  = User : : withSum ( [ 'cards'  = >  'card_total' ] ,  'total' ) - > select ( [ 1 , 2 , 3 ] ) ;

      foreach ($list as $user ) {
      // 获取用户关联的card关联余额统计
      echo $user - >card_total ;
      }
 
      所有的关联统计方法可以多次调用，每次查询不同的关联统计数据。

      $list  = User : : withSum ( 'cards' ,  'total' )
      - > withSum ( 'score' ,  'score' ) 
      - > select ( [ 1 , 2 , 3 ] ) ;

        foreach ($list as $user ) {
        // 获取用户关联的card关联余额统计
        echo $user - >card_total ;
        }
 
#### 关联输出


     关联数据的输出也可以使用 =hidden=、 =visible=和 =append=方法进行控制，下面举例说明。

##### 隐藏关联属性


      如果要隐藏关联模型的属性，可以使用

      $list  = User : : with ( 'profile' ) - > select ( ) ;
      $list - > hidden ( [ 'profile.email' ] ) - > toArray ( ) ;
 
      输出的结果中就不会包含 =Profile=模型的 =email=属性，如果需要隐藏多个属性可以使用

      $list  = User : : with ( 'profile' ) - > select ( ) ;
      $list - > hidden ( [ 'profile'  = >  [ 'address' , 'phone' , 'email' ] ] ) - > toArray ( ) ;
 
##### 显示关联属性


      同样，可以使用 visible 方法来显示关联属性：

      $list  = User : : with ( 'profile' ) - > select ( ) ;
      $list - > visible ( [ 'profile'  = >  [ 'address' , 'phone' , 'email' ] ] ) - > toArray ( ) ;
 
##### 追加关联属性


      追加一个 =Profile=模型的额外属性（非实际数据，可能是定义了获取器方法）

      $list  = User : : with ( 'profile' ) - > select ( ) ;
      $list - > append ( [ 'profile.status' ] ) - > toArray ( ) ;
 
      也可以追加一个额外关联对象的属性

      $list  = User : : with ( 'profile' ) - > select ( ) ;
      $list - > append ( [ 'Book.name' ] ) - > toArray ( ) ;
 
## 视图 
### 视图
    如果你需要使用 =think-template=模板引擎，只需要安装 =think-view= 模板引擎驱动。
    composer require topthink /think -view
    
    视图相关的配置在配置目录的 =view.php= 配置文件中进行定义。 通常可以直接使用 =think\facade\View= 来操作视图。

### 模板变量
#### 模板赋值
     模板中的变量（除了一些系统变量外）必须先进行模板赋值后才能使用，可以使用 =assign=方法进行全局模板变量赋值。

    #+begin_src php
      // 模板变量赋值
      View::assign('name' ,'ThinkPHP' ) ;
      View::assign('email' , 'thinkphp@qq.com' ) ;
      // 或者批量赋值
      View::assign( [
          'name'   =>  'ThinkPHP' ,
          'email'  =>  'thinkphp@qq.com'
      ] ) ;
    #+end_src
     
     =assign= 方法赋值属于全局变量赋值，如果你需要单次赋值的话，可以直接在 =fetch=方法中传入。
     #+begin_src php
       // 模板输出并变量赋值
       return View::fetch( 'index' ,  [
           'name'   =>  'ThinkPHP' ,
           'email'  =>  'thinkphp@qq.com'
       ] ) ;
     #+end_src
     
##### 助手函数
      如果使用 =view= 助手函数渲染输出的话，可以使用下面的方法进行模板变量赋值：

      #+begin_src php
        return  view( 'index' ,  [
            'name'   =>  'ThinkPHP' ,
            'email'  =>  'thinkphp@qq.com'
        ] ) ;
      #+end_src

### 视图过滤
    可以对视图的渲染输出进行过滤
    #+begin_src php
      // 使用视图输出过滤
      return View::filter ( function ($content ) {
          return  str_replace ( "\r\n" , '
       ' ,$content ) ;
      } ) ->fetch ( ) ;
   #+end_src

    如果使用 =view= 助手函数进行模板渲染输出的话，可以使用下面的方式
    #+begin_src php
      // 使用视图输出过滤
      return  view() ->filter( function ($content ) {
          return  str_replace ( "\r\n" , '
       ' ,$content ) ;
      } ) ;
   #+end_src

### 模板渲染
#### 模板路径
     默认情况下，框架会自动定位你的模板文件路径，优先定位应用目录下的 =view= 目录，这种方式的视图目录下就是应用的控制器目录。
#### 模板渲染
     模板渲染的最典型用法是直接使用 =fetch= 方法，不带任何参数：

     #+begin_src php
       // 不带任何参数 自动定位当前操作的模板文件
       return View::fetch ( ) ;

       // 指定模板输出
       return View::fetch ( 'edit' ) ; 
       return View::fetch ( 'member/read' ) ;

       # 跨应用渲染模板
       return View::fetch ( 'admin@member/edit' ) ;
    #+end_src

    如果你的模板文件位置比较特殊或者需要自定义模板文件的位置，可以采用下面的方式处理。
     return View : : fetch ( '../template/public/menu.html' ) ;
     这种方式需要带模板路径和后缀指定一个完整的模板文件位置，这里的 =../template/public= 目录是相对于当前项目入口文件位置

#### 助手函数
     可以使用系统提供的助手函数 =view= ，可以完成相同的功能：

     #+begin_src php
    // 渲染模板输出
     return  view ( 'hello' ,  [ 'name'  = >  'thinkphp' ] ) ;
    #+end_src

#### 渲染内容
     如果希望直接解析内容而不通过模板文件的话，可以使用 =display= 方法：
     #+begin_src php
       // 直接渲染内容
       $content  =  '{$name}-{$email}' ;
       return View::display ($content ,  [ 'name'  =>  'thinkphp' ,  'email'  =>  'thinkphp@qq.com' ] ) ;
     #+end_src

#### 模板函数使用三元运算符
     {:date('Y-m-d H:i:s',$abc ? $abc : time())}

#### 循环
     | 标签名  | 作用               | 包含属性                      |
     | volist  | 循环数组数据输出   | name,id,offset,length,key,mod |
     | foreach | 数组或对象遍历输出 | name,item,key                 |

### 引入公共部分head和foot(多种方法)
#### include 
     首先在view下面新建一个文件夹(common)，用来存放公共模板，然后使用include在需要的地方引用该板块：
     
     {include file="common/head" /}

     可以一次包含多个模版，例如：

     {include file="public/header,public/menu" /}

     模板参数
     {include file="Public/header" title="$title" keywords="开源WEB开发框架" /}

     #+begin_src html
       <html xmlns="http://www.w3.org/1999/xhtml">
         <head>
           <title>[title]</title>
           <meta name="keywords" content="[keywords]" />
         </head>
     #+end_src
#### 模板布局

## 错误和日志 
### 异常处理
#### 异常处理接管
     框架支持异常处理由开发者自定义类进行接管，需要在 =app=目录下面的 =provider.php=文件中绑定异常处理类，例如：

     #+begin_src php
       // 绑定自定义异常处理handle类
       'think\exception\Handle'        = >  '\app\exception\Http' ,
     #+end_src

     自定义类需要继承 =think\exception\Handle= 并且实现 =render= 方法，可以参考如下代码：

     < ?php
     namespace app\common\exception ;

     use think\exception\Handle ;
     use think\exception\HttpException ;
     use think\exception\ValidateException ;
     use think\Response ;
     use Throwable ;

     class  Http extends  Handle
     {
     public  function  render ($request , Throwable $e ) : Response
     {
     // 参数验证错误
     if  ($e  instanceof  ValidateException )  {
     return  json ($e - > getError ( ) ,  422 ) ;
     }

     // 请求异常
     if  ($e  instanceof  HttpException  && $request - > isAjax ( ) )  {
     return  response ($e - > getMessage ( ) , $e - > getStatusCode ( ) ) ;
     }

     // 其他错误交给系统处理
     return parent : : render ($request , $e ) ;
     }

     }
     自定义异常处理的主要作用是根据不同的异常类型发送不同的状态码和响应输出格式。

 
     事实上，默认安装应用后，已经帮你内置了一个 =app\ExceptionHandle=异常处理类，直接修改该类的相关方法即可完成应用的自定义异常处理机制。
 

 
     需要注意的是，如果自定义异常处理类没有再次调用系统 =render=方法的话，配置 =http_exception_template=就不再生效，具体可以参考 =Handle=类内实现的功能。
 
#### 手动抛出和捕获异常
     ThinkPHP 大部分情况异常都是自动抛出和捕获的，你也可以手动使用 =throw=来抛出一个异常，例如：

     // 使用think自带异常类抛出异常
     throw  new   \think \Exception ( '异常消息' ,  10006 ) ;

     手动捕获异常方式是使用 =try-catch=，例如：

     try  {
     // 这里是主体代码
     }  catch  ( ValidateException $e )  {
     // 这是进行验证异常捕获
     return  json ($e - > getError ( ) ) ;
     }  catch  (  \Exception $e )  {
     // 这是进行异常捕获
     return  json ($e - > getMessage ( ) ) ;
     }

 
     支持使用 =try-catch-finally=结构捕获异常。
 
#### HTTP 异常
     可以使用 =\think\exception\HttpException=类来抛出异常\\
     框架提供了一个 =abort=助手函数快速抛出一个 HTTP 异常：

     < ?php
     namespace app\index\controller ;


     class  Index
     {
     public  function  index ( )
     {
     // 抛出 HTTP 异常
     throw  new   \think \exception \HttpException ( 404 ,  '异常消息' ) ;
     }
     }

     系统提供了助手函数 =abort=简化 HTTP 异常的处理，例如：\\
     框架提供了一个 =abort=助手函数快速抛出一个 HTTP 异常：

     < ?php
     namespace app\index\controller ;


     class  Index
     {
     public  function  index ( )
     {
     // 抛出404异常
     abort ( 404 ,  '页面异常' ) ;
     }
     }

     如果你的应用是 API 接口，那么请注意在客户端首先判断 HTTP 状态码是否正常，然后再进行数据处理，当遇到错误的状态码的话，应该根据状态码自行给出错误提示，或者采用下面的方法进行自定义异常处理。

     #部署模式#下一旦抛出了 =HttpException=异常，可以定义单独的异常页面模板，只需要在 =app.php=配置文件中增加：

     'http_exception_template'     = >   [
     // 定义404错误的模板文件地址
     404  = >  \think\facade\App : : getAppPath ( )  .  '404.html' ,
     // 还可以定义其它的HTTP status
     401  = >  \think\facade\App : : getAppPath ( )  .  '401.html' ,
     ]

     模板文件支持模板引擎中的标签。

 
     =http_exception_template=配置仅在部署模式下面生效。
 
### 日志处理
    日志记录和写入由 =\think\Log=类完成，通常我们使用 =think\facade\Log=类进行静态调用。

    由于日志记录了所有的运行错误，因此养成经常查看日志文件的习惯，可以避免和及早发现很多的错误隐患。
 
#### 日志配置
     日志的配置文件是配置文件目录下的 =log.php=文件，系统在进行日志写入之前会读取该配置文件进行初始化。

     新版的日志配置支持多通道，默认配置如下：

     #+begin_src php
       return  [
           // 默认日志记录通道
           'default'       = >  'file' ,
           // 日志记录级别
           'level'         = >  [ ] ,
           // 日志类型记录的通道 ['error'=>'email',...]
           'type_channel'  = >  [ ] ,

           // 日志通道列表
           'channels'      = >  [
               'file'  = >  [
                   // 日志记录方式
                   'type'         = >  'File' ,
                   // 日志保存目录
                   'path'         = >  '' ,
                   // 单文件日志写入
                   'single'       = >  false ,
                   // 独立日志级别
                   'apart_level'  = >  [ ] ,
                   // 最大日志文件数量
                   'max_files'    = >  0 ,
               ] ,
               // 其它日志通道配置
           ] ,
       ] ;
     #+end_src

     可以添加多个日志通道，每个通道可以设置不同的日志类型。日志配置参数根据不同的日志类型有所区别，内置的日志类型包括： =file=，日志类型使用 =type=参数配置即可。

     如果是自定义驱动， =type=的值则为自定义驱动的类名（包含命名空间）

     日志的全局配置参数包含：

     | 参数            | 描述                 |
     |-----------------+----------------------|
     | default         | 默认的日志通道       |
     | level           | 允许记录的日志级别   |
     | type_channel    | 日志类型记录的通道   |

 
     默认的日志类型是 =File=方式，可以通过驱动的方式来扩展支持更多的记录方式。
 

     文件类型日志的话，还支持下列配置参数：

     | 参数              | 描述                                     |
     |-------------------+------------------------------------------|
     | path              | 日志存储路径                             |
     | file_size         | 日志文件大小限制（超出会生成多个文件）   |
     | apart_level       | 独立记录的日志级别                       |
     | time_format       | 时间记录格式                             |
     | single            | 是否单一文件日志                         |
     | max_files         | 最大日志文件数（超过自动清理 ）          |
     | format            | 日志输出格式                             |
     | realtime_write    | 是否实时写入                             |

 
     为了避免同一个目录下面的日志文件过多的性能问题，日志文件会自动生成日期子目录。
 
#### 日志写入
##### 手动记录
      一般情况下，系统的错误日志记录是自动的，如果需要记录应用的业务日志或者额外的日志信息，就需要手动记录日志信息，Log 类主要提供了 2 个方法用于记录日志。

      | 方法       | 描述                   |
      |------------+------------------------|
      | record()   | 记录日志信息到内存     |
      | write()    | 实时写入一条日志信息   |

      系统在请求结束后会自动调用 =Log::save=方法统一进行日志信息写入。

      =record=方法用法如下：

      Log : : record ( '测试日志信息' ) ;

      默认记录的日志级别是 =info=，也可以指定日志级别：

      Log : : record ( '测试日志信息，这是警告级别' , 'notice' ) ;

      采用 =record=方法记录的日志信息不是实时保存的，如果需要实时记录的话，可以采用 =write=方法，例如：

      Log : : write ( '测试日志信息，这是警告级别，并且实时写入' , 'notice' ) ;

      你可以在日志通道配置开启实时写入，每次记录日志信息的时候就会实时写入。

      'file'  = >  [
      // 日志记录方式
      'type'         = >  'File' ,
      // 日志保存目录
      'path'         = >  '' ,
      // 单文件日志写入
      'single'       = >  false ,
      // 独立日志级别
      'apart_level'  = >  [ ] ,
      // 最大日志文件数量
      'max_files'    = >  0 ,
      // 日志处理
      'processor'    = >  null ,
      // 实时写入
      'realtime_write'     = >     true ,
      ] ,

 
      为避免内存溢出，在命令行下面执行的话日志信息会自动实时写入。
 

##### 关闭日志
      要关闭日志功能，可以调用 =Log::close()=方法关闭本次请求的日志写入。

      // 关闭当前日志写入
      Log : : close ( ) ;

##### 日志级别
      ThinkPHP 对系统的日志按照级别来分类记录，按照 =PSR-3=日志规范，日志的级别从低到高依次为： =debug=, =info=, =notice=, =warning=, =error=, =critical=, =alert=, =emergency=，ThinkPHP 额外增加了一个 =sql=日志级别仅用于记录 =SQL=日志（并且仅当开启数据库调试模式有效）。

 
      系统发生异常后记录的日志级别是 =error=
 

      系统提供了不同日志级别的快速记录方法，例如：

      Log : : error ( '错误信息' ) ;
      Log : : info ( '日志信息' ) ;

      还封装了一个助手函数用于日志记录，例如：

      trace ( '错误信息' ,  'error' ) ;
      trace ( '日志信息' ,  'info' ) ;

      事实上，你可以增加自定义的日志类型，例如：

      Log : : diy ( '这是一个自定义日志类型' ) ;

      也支持指定级别日志的写入，需要配置信息：

      return  [
      // 日志记录级别，使用数组表示
      'level'  = >  [ 'error' ,  'alert' ] ,
      ] ;

      上面的配置表示只记录 =error=和 =alert=级别的日志信息。

 
      默认情况下是不会记录 HTTP 异常日志（避免受一些攻击的影响写入大量日志），除非你接管了系统的异常处理，重写了 =report=方法。
    
##### 上下文信息
      日志可以传入上下文信息（数组），并且被替换到日志内容中，例如：

      Log : : info ( '日志信息{user}' ,  [ 'user'  = >  '流年' ] ) ;

      实际写入日志的时候， ={user}=会被替换为流年。

##### 独立日志
      为了便于分析， =File=类型的日志还支持设置某些级别的日志信息单独文件记录，例如：

      return  [
      'default'       = >  'file' ,
      'channels'     = >     [
      'file'     = >     [
      'type'           = >  'file' , 
      // error和sql日志单独记录
      'apart_level'    = >   [ 'error' , 'sql' ] ,
      ] ,
      ] ,
      ] ;

      设置后，就会单独生成 =error= 和 =sql=两个类型的日志文件，主日志文件中将不再包含这两个级别的日志信息。

 
      如果 =apart_level=设置为 =true=，则表示所有的日志类型都会独立记录。
 

##### 单文件日志


      默认情况下，日志是按照日期为目录，按天为文件生成的，但如果希望仅生成单个文件（方便其它的工具或者服务读取以及分析日志）。

      return  [
      'default'       = >  'file' ,
      'channels'     = >     [
      'file'     = >     [
      'type'           = >  'file' , 
      'single'        = >   true ,
      'file_size'     = >   1024 # 1024 # 10 ,    
      ] ,
      ] ,
      ] ;

      开启生成单个文件后， =file_size=和 =apart_level=参数依然有效，超过文件大小限制后，系统会自动生成备份日志文件。

      默认的单文件日志名是 =single.log=，如果需要更改日志文件名，可以设置

      return  [
      'default'       = >  'file' ,
      'channels'     = >     [
      'file'     = >     [
      'type'           = >  'file' , 
      'single'        = >   'single_file' ,
      'file_size'     = >   1024 # 1024 # 10 ,    
      ] ,
      ] ,
      ] ;

      那么实际生成的日志文件名是 =single_file.log=，如果设置了 =apart_level=的话，可能还会生成 =single_file_error.log=之类的日志。

 
      单文件日志也支持 =max_files=参数设置，因为单文件日志同样会生成多个日志备份文件而导致日志文件数据过大。
 

##### 写入处理


      日志支持写入回调处理，通过事件的方式处理。

      Event : : listen ( 'think\event\LogWrite' ,  function ($event )  {
      if ( 'file'  == $event - >channel )  {
      $event - >log [ 'info' ] [ ]  =  'test info' ;
      }
      } ) ;

##### 格式化日志信息


      系统提供了两个参数用于日志信息的格式化，第一个是用于自定义时间显示格式的 =time_format=，第二个是调整日志输出格式的 =format=参数。

      return   [
      'default'       = >  'file' ,
      'channels'     = >     [
      'file'     = >     [
      'type'           = >  'file' , 
      'json'          = >   true
      'file_size'     = >   1024 # 1024 # 10 ,    
      'time_format'    = >     'Y-m-d H:i:s' ,
      'format'         = >     '[%s][%s]:%s' ,
      ] ,
      ] ,
      ] ;

##### 清空日志


      一旦执行 =save=方法后，内存中的日志信息就会被自动清空，如果需要手动清空可以使用：

      Log : : clear ( ) ;

      在清空日志方法之前，你可以使用 =getLog=方法获取内存中的日志。

      // 获取全部日志
      $logs  = Log : : getLog ( ) ;

 
      日志清空仅仅是清空内存中的日志。
 

##### 日志自动清理


      文件类型的日志支持自动清理。可以设置 =max_files=参数，超过数量的最早日志将会自动删除。

      例如，下面设置日志最多保存数量为 30 个

      return  [
      'default'       = >  'file' ,
      'channels'     = >     [
      'file'     = >     [
      'type'           = >  'file' , 
      'max_files'     = >   30 ,
      'file_size'     = >   1024 # 1024 # 10 ,    
      ] ,
      ] ,
      ] ;

 
      设置 =max_files=参数后，日志文件将不会分日期子目录存放。
 

##### JSON 格式日志


      可以支持 =JSON=格式记录文件日志，更加方便一些第三方日志分析工具进行日志分析。

      在日志配置文件中，添加

      return  [
      'default'       = >  'file' ,
      'channels'     = >     [
      'file'     = >     [
      'type'           = >  'file' , 
      'json'          = >   true
      'file_size'     = >   1024 # 1024 # 10 ,    
      ] ,
      ] ,
      ] ;

      即可开启 =JSON=格式记录，CLI 命令行的日志记录同样有效。

      使用 JSON 格式记录后，每次请求是一行 JSON 数据，但如果使用 =Log::write=记录的日志是例外的单独一行 JSON 数据。

#### 日志通道
     你可以配置不同的日志通道，并且把不同的日志记录到不同的通道。

     Log : : channel ( 'email' ) - > info ( '一条测试日志' ) ;
     Log : : channel ( 'socket' ) - > error ( '记录错误日志' ) ;

     你可以配置不同的日志类型，记录到不同的日志通道，这样在记录日志的时候会自动选择对应的通道写入。

     return  [
     'default'     = >     'file' ,
     'type_channel'     = >     [
     'error'     = >     'email' ,
     'sql'     = >     'sql' ,
     ] ,
     'channels'     = >     [
     'file'     = >     [
     'type'     = >     'file' ,
     ] ,
     'email'     = >     [
     'type'     = >     'email' ,
     ] ,
     'sql'     = >     [
     'type'     = >     'sql' ,
     ] ,
     ] ,
     ] ;

     表示如果是 =error=日志和 =sql=日志，会分别记录到指定的通道。同时你还需要在日志配置文件中，添加 =email=和 =sql=日志通道的配置。核心只有 =file=日志类型，其它的可能需要自己扩展或者安装扩展。

     如果需要获取内存中的通道日志信息，可以使用

     // 获取某个日志通道的日志
     $error  = Log : : getLog ( 'file' ) ;

     可以单独关闭某个通道的日志写入，只需要把日志通道的 =close=配置参数设置为 =true=，或者使用方法关闭。

     Log : : close ( 'file' ) ;

     可以单独清空某个通道的日志（如果没有开启实时写入的话）

     Log : : clear ( 'file' ) ;

## 调试 
### 调试模式
    ThinkPHP 有专门为开发过程而设置的调试模式，开启调试模式后，会牺牲一定的执行效率，但带来的方便和除错功能非常值得。

 
    强烈建议在开发阶段始终开启调试模式（直到正式部署后关闭调试模式），方便及时发现隐患问题和分析、解决问题。
 

    应用默认是部署模式，在开发阶段，可以修改环境变量 =APP_DEBUG=开启调试模式，上线部署后切换到部署模式。

    本地开发的时候可以在应用根目录下面定义 =.env=文件。

 
    通过 =create-project=默认安装的话， 会在根目录自带一个 =.example..env=文件，你可以直接更名为 =.env=文件。
 

    =.env=文件的定义格式如下：

    // 设置开启调试模式
    APP_DEBUG  =   true
    // 其它的环境变量设置
    // ...

    调试模式的优势在于：

    -  开启日志记录，任何错误信息和调试信息都会详细记录，便于调试；
    -  会详细记录整个执行过程；
    -  模板修改可以即时生效；
    -  通过 Trace 功能更好的调试和发现错误；
    -  发生异常的时候会显示详细的异常信息；


    由于调试模式没有任何缓存，因此涉及到较多的文件 IO 操作和模板实时编译，所以在开启调试模式的情况下，性能会有一定的下降，但不会影响部署模式的性能。
 

    一旦关闭调试模式，发生错误后不会提示具体的错误信息，如果你仍然希望看到具体的错误信息，那么可以在 =app.php=文件中如下设置：

    // 显示错误信息
    'show_error_msg'         = >   true ,    

 
    出于安全考虑， =V6.0.3+=版本开始已经取消了调试模式的默认异常页面中的环境变量显示。
 
### Trace 调试


    调试模式并不能完全满足我们调试的需要，有时候我们需要手动的输出一些调试信息。除了本身可以借助一些开发工具进行调试外，ThinkPHP 还提供了一些内置的调试工具和函数。

    =Trace=调试功能就是 ThinkPHP 提供给开发人员的一个用于开发调试的辅助工具。可以实时显示当前页面或者请求的请求信息、运行情况、SQL 执行、错误信息和调试信息等，并支持自定义显示，并且支持没有页面输出的操作调试。最新版本页面 Trace 功能已经不再内置在核心，但默认安装的时候会自动安装 =topthink/think-trace=扩展，所以你可以在项目里面直接使用。

    如果部署到服务器的话，你可以通过下面方式安装

    composer install  --no -dev

    就不会安装页面 Trace 扩展。

#### 使用


 
     页面 Trace 功能仅在调试模式下有效
 

     安装页面 Trace 扩展后，如果开启调试模式并且运行后有页面有输出的话，页面右下角会显示 =ThinkPHP=的 LOGO：

     [[file:images/000004.png]]

     LOGO 后面的数字就是当前页面的执行时间（单位是秒） 点击该图标后，会展开详细的 Trace 信息，如图：

     [[file:images/000002.png]]

     Trace 框架有 6 个选项卡，分别是基本、文件、流程、错误、SQL 和调试，点击不同的选项卡会切换到不同的 Trace 信息窗口。

     | 选项卡   | 描述                                                                       |
     |----------+----------------------------------------------------------------------------|
     | 基本     | 当前页面的基本摘要信息，例如执行时间、内存开销、文件加载数、查询次数等等   |
     | 文件     | 详细列出当前页面执行过程中加载的文件及其大小                               |
     | 流程     | 会列出当前页面执行到的行为和相关流程                                       |
     | 错误     | 当前页面执行过程中的一些错误信息，包括警告错误                             |
     | SQL      | 当前页面执行到的 SQL 语句信息                                                |
     | 调试     | 开发人员在程序中进行的调试输出                                             |

     Trace 的选项卡是可以定制和扩展的，如果你希望增加新的选项卡，则可以修改配置目录下的 =trace.php=文件中的配置参数如下：

     return  [
     'type'  = >  'Html' ,
     'tabs'  = >  [
     'base'   = >  '基本' ,
     'file'   = >  '文件' ,
     'info'   = >  '流程' ,
     'error'  = >  '错误' ,
     'sql'    = >  'SQL' ,
     'debug'  = >  '调试' ,
     'user'   = >  '用户' ,
     ] ,
     ] ;

 
     =base=和 =file=是系统内置的，其它的选项其实都属于日志的等级（user 是用户自定义的日志等级）。
 

     也可以把某几个选项卡合并，例如：

     return  [
     'type'  = >  'Html' ,
     'tabs'  = >  [
     'base'                  = >  '基本' ,
     'file'                  = >  '文件' ,
     'error|notice|warning'  = >  '错误' ,
     'sql'                   = >  'SQL' ,
     'debug|info'            = >  '调试' ,
     ] ,
     ] ;

     更改后的 Trace 显示效果如图：

     [[file:images/000012.png]]

     如果需要更改页面 Trace 输出的样式，可以自定义模板文件（可以复制内置模板文件 =vendor/topthink/think-trace/src/tpl/page_trace.tpl=的内容），然后配置 =file=参数指定模板文件位置。

     'file'     = >     'app\trace\page_trace.html' ,

#### 浏览器控制台输出


     trace 功能支持在浏览器的 =console=直接输出，这样可以方便没有页面输出的操作功能调试，只需要在配置文件中设置：

     // 使用浏览器console输出trace信息
     'type'   = >   'console' ,

     运行后打开浏览器的 console 控制台可以看到如图所示的信息：

     [[file:images/000001.png]]

     浏览器 Trace 输出同样支持 =tabs=设置。

 
     由于页面 Trace 功能是通过中间件来执行，所以命令行下面不会显示任何的页面 Trace 信息
 
### SQL 调试


#### 查看页面 Trace


     通过查看页面 Trace 信息可以看到当前请求所有执行的 SQL 语句，例如：

     [[file:images/000007.png]]

#### 查看 SQL 日志


     如果开启了数据库的日志监听（ =trigger_sql=)的话，可以在日志文件（或者设置的日志输出类型）中看到详细的 SQL 执行记录。

 
     通常我们建议设置把 SQL 日志级别写入到单独的日志文件中，具体可以参考日志处理部分。
 

     下面是一个典型的 SQL 日志：

     [ SQL  ] SHOW COLUMNS FROM `think_user`  [ RunTime : 0.001339s  ]
     [ SQL  ] SELECT  # FROM `think_user` LIMIT  1  [ RunTime : 0.000539s  ]

     如果需要增加额外的 SQL 监听，可以使用

     Db : : listen ( function ($sql , $runtime , $master )  {
     // 进行监听处理
     } ) ;

     监听方法支持三个参数，依次是执行的 SQL 语句，运行时间（秒），以及主从标记（如果没有开启分布式的话，该参数为 null，否则为布尔值）。

#### 调试执行的 SQL 语句


     在模型操作中 ，为了更好的查明错误，经常需要查看下最近使用的 SQL 语句，我们可以用 =getLastsql=方法来输出上次执行的 sql 语句。例如：

     User : : find ( 1 ) ;
     echo User : : getLastSql ( ) ;

     输出结果是

     SELECT  # FROM  'think_user' WHERE `id`  =  1

 
     =getLastSql=方法只能获取最后执行的 =SQL=记录。
 

     也可以使用 =fetchSql=方法直接返回当前的查询 SQL 而不执行，例如：

     echo User : : fetchSql ( ) - > find ( 1 ) ;

     输出的结果是一样的。

### 变量调试
    输出某个变量是开发过程中经常会用到的调试方法，除了使用 php 内置的 =var_dump=
    和 =print_r=之外，ThinkPHP 框架内置了一个对浏览器友好的 =dump=方法，用于输出
    变量的信息到浏览器查看。

    用法和 PHP 内置的 =var_dump=一致：

    dump ($var1 ,  . . .$varN )

    使用示例：

    $blog  = Db : : name ( 'blog' ) - > where ( 'id' ,  3 ) - > find ( ) ;
    $user  = User : : find ( ) ;
    dump ($blog , $user ) ;

    如果需要在调试变量输出后中止程序的执行，可以使用 =halt=函数，例如：

    $blog  = Db : : name ( 'blog' ) - > where ( 'id' ,  3 ) - > find ( ) ;
    $user  = User : : find ( ) ;
    halt ($blog , $user ) ;
    echo  '这里的信息是看不到的' ;

    执行后会输出同样的结果并中止执行后续的程序。
    为了方便查看，某些核心对象由于定义了 =__debugInfo=方法，因此在 =dump=输出的时候属性可能做了简化。
 
### 远程调试
    =ThinkPHP=提供了 =Socket=日志驱动用于本地和远程调试。

    首先需要安装 =think-socketlog=扩展
    composer require topthink /think -socketlog
####  Socket调试
     只需要在 =log.php=配置文件中设置如下：

     return  [
     'type'                 = >  'SocketLog' ,
     'host'                 = >  'slog.thinkphp.cn' ,
     //日志强制记录到配置的client_id
     'force_client_ids'     = >  [ ] ,
     //限制允许读取日志的client_id
     'allow_client_ids'     = >  [ ] ,
     ]

 
     上面的 host 配置地址是官方提供的公用服务端，首先需要去 [[http://slog.thinkphp.cn][申请client\_id]] 。
 

     使用 Chrome 浏览器运行后，打开 =审查元素->Console=，可以看到如下所示：\\

     =SocketLog=通过 =websocket=将调试日志打印到浏览器的 =console=中。你还可以用它来分析开源程序，分析 SQL 性能，结合 taint 分析程序漏洞。

##### 安装 Chrome 插件


      =SocketLog=首先需要安装 =chrome=插件，Chrome [[https://chrome.google.com/webstore/detail/socketlog/apkmbfpihjhongonfcgdagliaglghcod][插件安装页面]] （需翻墙）

##### 使用方法


      -  首先，请在 chrome 浏览器上安装好插件。
      -  安装服务端 =npm install -g socketlog-server= , 运行命令 =socketlog-server= 即可启动服务。 将会在本地起一个 websocket 服务 ，监听端口是 1229 。
      -  如果想服务后台运行： =socketlog-server > /dev/null &=

##### 参数


      -  =client_id=: 在 chrome 浏览器中，可以设置插件的 =Client_ID= ， #Client\_ID#是你任意指定的字符串。\\
        [[file:images/000008.png]]

      -  设置 =client_id=后能实现以下功能：

      -  1，配置 =allow_client_ids= 配置项，让指定的浏览器才能获得日志，这样就可以把调试代码带上线。 普通用户访问不会触发调试，不会发送日志。 开发人员访问就能看的调试日志， 这样利于找线上 bug。 #Client\_ID# 建议设置为姓名拼音加上随机字符串，这样如果有员工离职可以将其对应的 =client_id=从配置项 =allow_client_ids=中移除。 =client_id=除了姓名拼音，加上随机字符串的目的，以防别人根据你公司员工姓名猜测出 =client_id=,获取线上的调试日志。

      -  设置 =allow_client_ids=示例代码：

        'allow_client_ids' = > [ 'thinkphp_zfH5NbLn' , 'luofei_DJq0z80H' ] ,

      -  2, 设置 =force_client_ids=配置项，让后台脚本也能输出日志到chrome。 网站有可能用了队列，一些业务逻辑通过后台脚本处理， 如果后台脚本需要调试，你也可以将日志打印到浏览器的console中， 当然后台脚本不和浏览器接触，不知道当前触发程序的是哪个浏览器，所以我们需要强制将日志打印到指定 =client_id=的浏览器上面。 我们在后台脚本中使用SocketLog时设置 =force_client_ids= 配置项指定要强制输出浏览器的 =client_id= 即可。

## 杂项 
### 缓存
#### 概述
     ThinkPHP 采用 =think\Cache=类（实际使用 =think\facade\Cache=类即可）提供缓存功能支持。

     内置支持的缓存类型包括 file、memcache、wincache、sqlite、redis。

 
     ThinkPHP 的缓存类遵循 =PSR-16=规范。
 
#### 设置
     全局的缓存配置直接修改配置目录下面的 =cache.php=文件。

     新版的缓存支持多通道，你可以事先定义好所有的缓存类型及配置参数，然后在使用的时候可以随时切换。默认使用的是文件缓存类型，你可以添加 =redis=缓存支持，例如：

     #+begin_src php
       return  [
           'default'     = >     'file' ,
           'stores'     = >     [
               // 文件缓存
               'file'    = >   [
                   // 驱动方式
                   'type'    = >  'file' ,
                   // 设置不同的缓存保存目录
                   'path'    = >  '../runtime/file/' ,
               ] ,  
               // redis缓存
               'redis'    = >   [
                   // 驱动方式
                   'type'    = >  'redis' ,
                   // 服务器地址
                   'host'        = >  '127.0.0.1' ,
               ] ,  
           ] ,
       ] ;
     #+end_src

     缓存参数根据不同的缓存方式会有所区别，通用的缓存参数如下：

     | 参数        | 描述                                  |
     |-------------+---------------------------------------|
     | type        | 缓存类型                              |
     | expire      | 缓存有效期 （默认为 0 表示永久缓存）   |
     | prefix      | 缓存前缀（默认为空）                  |
     | serialize   | 缓存序列化和反序列化方法              |

 
     如果是自定义驱动， =type=的值则为自定义驱动的类名（包含命名空间）
 
#### 使用
##### 设置缓存
      设置缓存有效期
      // 缓存在3600秒之后过期
      
      Cache : : set ( 'name' , $value ,  3600 ) ;

      可以使用 =DateTime=对象设置过期时间

      Cache : : set ( 'name' , $value ,  new  DateTime ( '2019-10-01 12:00:00' ) ) ;

      如果设置成功返回 true，否则返回 false。

##### 缓存自增


      针对数值类型的缓存数据，可以使用自增操作，例如：

      Cache : : set ( 'name' ,  1 ) ;
      // name自增（步进值为1）
      Cache : : inc ( 'name' ) ;
      // name自增（步进值为3）
      Cache : : inc ( 'name' , 3 ) ;

 
      只能对数字或者浮点型数据进行自增和自减操作。
 

##### 缓存自减


      针对数值类型的缓存数据，可以使用自减操作，例如：

      // name自减（步进值为1）
      Cache : : dec ( 'name' ) ;
      // name自减（步进值为3）
      Cache : : dec ( 'name' , 3 ) ;

##### 获取缓存


      获取缓存数据可以使用：

      Cache : : get ( 'name' ) ; 

      如果 =name=值不存在，则默认返回 =false=。

      支持指定默认值，例如：

      Cache : : get ( 'name' , '' ) ; 

      表示如果 =name=值不存在，则返回空字符串。

##### 追加一个缓存数据


      如果缓存数据是一个数组，可以通过 =push=方法追加一个数据。

      Cache : : set ( 'name' ,  [ 1 , 2 , 3 ] ) ;
      Cache : : push ( 'name' ,  4 ) ;
      Cache : : get ( 'name' ) ;  // [1,2,3,4]

##### 删除缓存


      Cache : : delete ( 'name' ) ; 

##### 获取并删除缓存


      Cache : : pull ( 'name' ) ; 

      如果 =name=值不存在，则返回 =null=。

##### 清空缓存


      Cache : : clear ( ) ; 

##### 不存在则写入缓存数据后返回


      Cache : : remember ( 'start_time' ,  time ( ) ) ;

      如果 start\_time 缓存数据不存在，则会设置缓存数据为当前时间。

      第二个参数可以使用闭包方法获取缓存数据，并支持依赖注入。

      Cache : : remember ( 'start_time' ,  function (Request $request ) {
      return $request - > time ( ) ;
      } ) ;

      remember 方法的第三个参数可以设置缓存的有效期。

##### 缓存标签


      支持给缓存数据打标签，例如：

      Cache : : tag ( 'tag' ) - > set ( 'name1' , 'value1' ) ;
      Cache : : tag ( 'tag' ) - > set ( 'name2' , 'value2' ) ;

      // 清除tag标签的缓存数据
      Cache : : tag ( 'tag' ) - > clear ( ) ;

      并支持同时指定多个缓存标签操作

      Cache : : tag ( [ 'tag1' ,  'tag2' ] ) - > set ( 'name1' ,  'value1' ) ;
      Cache : : tag ( [ 'tag1' ,  'tag2' ] ) - > set ( 'name2' ,  'value2' ) ;

      // 清除多个标签的缓存数据
      Cache : : tag ( [ 'tag1' , 'tag2' ] ) - > clear ( ) ;

      可以追加某个缓存到标签

      Cache : : tag ( 'tag' ) - > append ( 'name3' ) ;

##### 获取缓存对象


      可以获取缓存对象，并且调用驱动类的高级方法，例如：

      // 获取缓存对象句柄
      $handler  = Cache : : handler ( ) ;

##### 助手函数


      系统对缓存操作提供了助手函数 =cache=，用法如下：

      // 设置缓存数据
      cache ( 'name' , $value ,  3600 ) ;
      // 获取缓存数据
      var_dump ( cache ( 'name' ) ) ;
      // 删除缓存数据
      cache ( 'name' , NULL ) ;
      // 返回缓存对象实例
      $cache  =  cache ( ) ;

#### 跨应用缓存


     默认情况下，文件缓存数据是区分不同应用的，如果你希望缓存跨应用，可以设置一个统一的数据缓存 =path=目录。

#### 切换缓存类型


     没有指定缓存类型的话，默认读取的是 =default=缓存配置，可以动态切换

     // 使用文件缓存
     Cache : : set ( 'name' , 'value' , 3600 ) ;
     Cache : : get ( 'name' ) ;

     // 使用Redis缓存
     Cache : : store ( 'redis' ) - > set ( 'name' , 'value' , 3600 ) ;
     Cache : : store ( 'redis' ) - > get ( 'name' ) ;

     // 切换到文件缓存
     Cache : : store ( 'default' ) - > set ( 'name' , 'value' , 3600 ) ;
     Cache : : store ( 'default' ) - > get ( 'name' ) ;

     如果要返回当前缓存类型对象的句柄，可以使用

     // 获取Redis对象 进行额外方法调用
     Cache : : store ( 'redis' ) - > handler ( ) ;

#### 自定义驱动


     如果需要自定义缓存驱动，需要继承 =think\cache\Driver=类，并且实现 =think\contract\CacheHandlerInterface=接口。

     interface  CacheHandlerInterface
     {
     /##
     # 判断缓存
     # @access public
     # @param  string $name 缓存变量名
     # @return bool
       #/
       public  function  has ($name ) : bool ;

       /##
       # 读取缓存
       # @access public
       # @param  string $name 缓存变量名
       # @param  mixed  $default 默认值
       # @return mixed
         #/
         public  function  get ($name , $default  =  false ) ;

         /##
         # 写入缓存
         # @access public
         # @param  string            $name 缓存变量名
         # @param  mixed             $value  存储数据
         # @param  integer|\DateTime $expire  有效时间（秒）
         # @return bool
           #/
           public  function  set ($name , $value , $expire  =  null ) : bool ;

           /##
           # 自增缓存（针对数值缓存）
           # @access public
           # @param  string    $name 缓存变量名
           # @param  int       $step 步长
           # @return false|int
           #/
           public  function  inc (string $name , int $step  =  1 ) ;

           /##
           # 自减缓存（针对数值缓存）
           # @access public
           # @param  string    $name 缓存变量名
           # @param  int       $step 步长
           # @return false|int
           #/
           public  function  dec (string $name , int $step  =  1 ) ;

           /##
           # 删除缓存
           # @access public
           # @param  string $name 缓存变量名
           # @return bool
           #/
           public  function  delete ($name ) : bool ;

           /##
           # 清除缓存
           # @access public
           # @return bool
           #/
           public  function  clear ( ) : bool ;

           }

           使用自定义驱动后，只需要配置缓存 =type=的值为该驱动类名（包含命名空间）即可。

### Session


#### 概述


     可以直接使用 =think\facade\Session=类操作 =Session=。

 
     新版本不支持操作原生 =$_SESSION=数组和所有 =session_=开头的函数，只能通过 =Session=类（或者助手函数）来操作。会话数据统一在当前请求结束的时候统一写入 所以不要在 =session=写入操作之后执行 =exit=等中断操作,否则会导致 =Session=数据写入失败。
 

     =6.0=的 =Session=类可以很好的支持诸如 =Swoole=/ =Workerman=等环境。

#### 开启 Session


     =Session=功能默认是没有开启的（API 应用通常不需要使用 =Session=），如果你需要使用 =Seesion=，需要在全局的中间件定义文件中加上下面的中间件定义：

     'think\middleware\SessionInit'

 
     如果是多应用模式，并且你只是用于部分应用，那么也可以在应用中间件定义文件中单独开启。
 

#### Session 初始化


     系统会自动按照 =session.php=配置的参数自动初始化 =Session=。

     默认支持的 =session=设置参数包括：

     | 参数               | 描述                                      |
     |--------------------+-------------------------------------------|
     | type               | session 类型（ =File=或者 =Cache=）        |
     | store              | 当 type 设置为 cache 类型的时候指定存储标识   |
     | expire             | session 过期时间（秒）必须大于 0            |
     | var\_session\_id   | 请求 session\_id 变量名                     |
     | name               | session\_name                             |
     | prefix             | session 前缀                               |
     | serialize          | 序列化方法                                |

     无需任何操作就可以直接调用 =Session=类的相关方法，例如：

     Session : : set ( 'name' ,  'thinkphp' ) ;
     Session : : get ( 'name' ) ;

     会话数据保存（请求结束）的时候会自动序列化，并在读取的时候自动反序列化，默认使用 =serialize=/ =unserialize=进行序列化操作，你可以自定义序列化机制。

     例如在配置文件中设置为使用 =JSON=序列化：

     'serialize'     = >     [ 'json_encode' ,  'json_decode' ] ,

 
     尽量避免把对象保存到 =Session=会话
 

#### 基础用法


##### 赋值


      Session : : set ( 'name' ,  'thinkphp' ) ;

##### 判断是否存在


      Session : : has ( 'name' ) ;

##### 取值


      // 如果值不存在，返回null
      Session : : get ( 'name' ) ;
      // 如果值不存在，返回空字符串
      Session : : get ( 'name' ,  '' ) ;
      // 获取全部数据
      Session : : all ( ) ;

##### 删除


      Session : : delete ( 'name' ) ;

##### 取值并删除


      // 取值并删除
      Session : : pull ( 'name' ) ;

      如果 name 的值不存在，返回 =Null=。

##### 清空


      Session : : clear ( ) ;

##### 闪存数据，下次请求之前有效


      // 设置session 并且在下一次请求之前有效
      Session : : flash ( 'name' , 'value' ) ;

##### 提前清除当前请求有效的数据


      // 清除当前请求有效的session
      Session : : flush ( ) ;

 
      注意， =Session=写入数据的操作会在请求结束的时候统一进行本地化存储，所以不要在写入 =Session=数据之后使用 exit 等中断操作，可能会导致 =Session=没有正常写入。
 

#### 多级数组


     支持 =session=的多级数组操作，例如：

     // 赋值
     Session : : set ( 'name.item' , 'thinkphp' ) ;
     // 判断是否赋值
     Session : : has ( 'name.item' ) ;
     // 取值
     Session : : get ( 'name.item' ) ;
     // 删除
     Session : : delete ( 'name.item' ) ;

     其中 =set=和 =delete=方法只能支持二级数组，其他方法支持任意级数组操作。

#### 助手函数


     系统也提供了助手函数 =session=完成相同的功能，例如：

     // 赋值
     session ( 'name' ,  'thinkphp' ) ;
     // 判断是否赋值
     session ( '?name' ) ;
     // 取值
     session ( 'name' ) ;
     // 删除
     session ( 'name' ,  null ) ;
     // 清除session
     session ( null ) ;

#### Request 对象中读取 Session


     可以在 Request 对象中读取 Session 数据

     public  function  index (Request $request )  {
     // 读取某个session数据
     $request - > session ( 'user.name' ,  '' ) ;
     // 获取全部session数据
     $request - > session ( ) ;
     }

     但 =Request=类中不支持 =Session=写入操作。

#### 应用独立会话


 
     多应用情况下默认 =Session=是跨应用的，也就是说多应用之间是共享会话数据的，如果不希望共享会话数据，可以给每个应用设置不同的前缀 =prefix=。
 

     如果是 File 类型的话，默认的 =session=会话数据保存在 =runtime/session=目录下面，你可以设置 =path=改变存储路径。

#### Session 驱动


     默认的 =Session=驱动采用文件缓存方式记录，并且支持如下配置

     | 参数              | 描述              |
     |-------------------+-------------------|
     | path              | session 保存路径   |
     | data\_compress    | 是否压缩数据      |
     | gc\_divisor       | GC 回收概率        |
     | gc\_probability   | GC 回收概率        |

     除了文件类型之外，还可以支持直接使用缓存作为 =Session=类型，例如：

     return  [
     'type'        = >  'cache' ,
     'store'       = >  'redis' ,
     'prefix'      = >  'think' ,
     ]

     表示使用 =redis=作为 =session=类型。

     要以上的配置生效，请确保缓存配置文件 =cache.php=中的 =stores=中已经添加了 =redis=缓存配置，例如：

     return  [
     'default'     = >     'file' ,
     'stores'     = >     [
     // 文件缓存
     'file'    = >   [
     // 驱动方式
     'type'    = >  'file' ,
     // 设置不同的缓存保存目录
     'path'    = >  '../runtime/file/' ,
     ] ,  
     // redis缓存
     'redis'    = >   [
     // 驱动方式
     'type'    = >  'redis' ,
     // 服务器地址
     'host'        = >  '127.0.0.1' ,
     ] ,  
     ] ,
     ] ;

#### 自定义驱动


     如果需要自定义 =Session=驱动，你的驱动类必须实现 =think\contract\SessionHandlerInterface=接口，包含了三个方法。

     interface  SessionHandlerInterface
     {
     public  function  read (string $sessionId ) : string ;
     public  function  delete (string $sessionId ) : bool ;
     public  function  write (string $sessionId , string $data ) : bool ;
     }

     =read=方法是在调用 =Session::start()=的时候执行，并且只会执行一次。\\
     =write=方法是在本地化会话数据的时候执行（调用 =Session::save()=方法），系统会在每次请求结束的时候自动执行。\\
     =delete=方法是在销毁会话的时候执行（调用 =Session::destroy()=方法）。

### Cookie


#### 概述


     ThinkPHP 采用 =think\facade\Cookie=类提供 Cookie 支持。

#### 配置


     配置文件位于配置目录下的 =cookie.php=文件，无需手动初始化，系统会在调用之前自动进行 =Cookie=初始化工作。

     支持的参数及默认值如下：

     // cookie 保存时间
     'expire'     = >  0 ,
     // cookie 保存路径
     'path'       = >  '/' ,
     // cookie 有效域名
     'domain'     = >  '' ,
     //  cookie 启用安全传输
     'secure'     = >  false ,
     // httponly设置
     'httponly'   = >  '' ,

     
#### 域名绑定应用
     =config/app.php= 配置文件中定义域名和应用的绑定

     #+BEGIN_EXAMPLE
          'domain_bind' => [
             'www.a.com' => 'index',     // 域名绑定到www应用
             'admin.a.com' => 'admin',   // admin绑定到后台应用
         ], 
     #+END_EXAMPLE

#### 基本操作
##### 设置
      // 设置Cookie 有效期为 3600秒
      Cookie : : set ( 'name' ,  'value' ,  3600 ) ;

      =Cookie=数据不支持数组，如果需要请自行序列化后存入。

##### 永久保存


      // 永久保存Cookie
      Cookie : : forever ( 'name' ,  'value' ) ;

##### 删除


      //删除cookie
      Cookie : : delete ( 'name' ) ;

##### 读取


      // 读取某个cookie数据
      Cookie : : get ( 'name' ) ;
      // 获取全部cookie数据
      Cookie : : get ( ) ;

#### 助手函数
     系统提供了 =cookie=助手函数用于基本的 =cookie=操作，例如：

     // 设置
     cookie ( 'name' ,  'value' ,  3600 ) ;

     // 获取
     echo  cookie ( 'name' ) ;

     // 删除
     cookie ( 'name' ,  null ) ;

### 多语言


    ThinkPHP 内置通过 =\think\facade\Lang=类提供多语言支持，如果你的应用涉及到国际化的支持，那么可以定义相关的语言包文件。任何字符串形式的输出，都可以定义语言常量。

#### 开启和加载语言包


     默认系统会加载默认语言包，但如果需要多语言自动侦测及自动切换，你需要在全局的中间件定义文件中添加中间件定义：

     'think\middleware\LoadLangPack' ,

     默认情况下，系统载入的是配置的默认语言包，并且不会自动侦测当前系统的语言。多语言相关的设置在 =lang.php=配置文件中进行设置。

     默认语言由 =default_lang=配置参数设置，系统默认设置为：

     // 默认语言
     'default_lang'     = >  'zh-cn' ,

     启用中间件后，系统会自动侦测和多语言自动切换，可以在配置文件设置自动侦测的多语言变量名：

     // 自动侦测的GET变量名
     'detect_var'  = >  'lang' ,

     开启自动侦测后会会首先检查请求的 URL 或者 Cookie 中是否包含语言变量，然后根据 =HTTP_ACCEPT_LANGUAGE=自动识别当前语言（并载入对应的语言包）。

 
     =V6.0.3+=版本开始支持通过 Header 方式自动侦测多语言
 

     如果在自动侦测语言的时候，希望设置允许的语言列表，不在列表范围的语言则仍然使用默认语言，可以配置：

     // 设置允许的语言
     'allow_lang_list'     = >     [ 'zh-cn' ,  'en-us' ]

     如果希望使用 =Cookie=保存语言，可以设置

     // 使用Cookie保存
     'use_cookie'  = >  true ,
     // Cookie保存变量
     'cookie_var'  = >  'think_lang' ,

     设置后，自动检测的语言会通过 =Cookie=记录下来，下次则直接通过 =Cookie=判断语言。

#### 语言变量定义


     语言变量的定义，只需要在需要使用多语言的地方，写成：

     Lang : : get ( 'add user error' ) ;
     // 使用系统封装的助手函数
     lang ( 'add user error' ) ;

     也就是说，字符串信息要改成 =Lang::get=方法来表示。

     语言定义一般采用英语来描述。

#### 语言文件定义


     自动加载的应用语言文件位于：

     // 单应用模式
     app\lang\当前语言 .php
     // 多应用模式
     app\应用\lang\当前语言 .php

     如果你还需要加载其他的语言包，可以通过 =extend_list=设置，例如：

     'extend_list'     = >     [
     'zh-cn'     = >  [
     app ( ) - > getBasePath ( )  .  'lang\zh-cn\app.php' ,
     app ( ) - > getBasePath ( )  .  'lang\zh-cn\core.php' ,
     ] ,
     ]

 
     目前核心框架仅内置 =zh-cn=语言包，如果需要其它语言的提示，可以通过扩展语言包的方式自行加载。
 

     ThinkPHP 语言文件定义采用返回数组方式：

     return  [
     'hello thinkphp'   = >  '欢迎使用ThinkPHP' ,
     'data type error'  = >  '数据类型错误' ,
     ] ;

     通常多语言的使用是在控制器里面，但是模型类的自动验证功能里面会用到提示信息，这个部分也可以使用多语言的特性。

     如果使用了多语言功能的话（假设，我们在当前语言包里面定义了' lang\_var'=>'标题必须！'），就可以使用下面的字符串来替代原来的错误提示。

     { %lang_var }

     如果要在模板中输出语言变量不需要在控制器中赋值，可以直接使用模板引擎特殊标签来直接输出语言定义的值：

     {$Think .lang .lang_var }

     可以输出当前语言包里面定义的 =lang_var=语言定义。

#### 变量传入支持


     语言包定义的时候支持传入变量，有两种方式

     使用命名绑定方式，例如：

     'file_format'     = >     '文件格式: {:format},文件大小：{:size}' ,

     在模板中输出语言字符串的时候传入变量值即可：

     { : lang ( 'file_format' , [ 'format'  = >  'jpeg,png,gif,jpg' , 'size'  = >  '2MB' ] ) }

     第二种方式是使用格式字串，如果你需要使用第三方的翻译工具，建议使用该方式定义变量。

     'file_format'     = >     '文件格式: %s,文件大小：%d' ,

     在模板中输出多语言的方式更改为：

     { : lang ( 'file_format' , [ 'jpeg,png,gif,jpg' , '2MB' ] ) }

#### 语言分组


     首先你需要在 lang.php 配置文件中开启语言分组，

     // 开启多语言分组
     'allow_group'     = >     true

     然后你可以在定义多语言的时候使用分组定义

     return  [
     'user'     = >     [
     'welcome'   = >  '欢迎回来' ,
     'login'  = >  '用户登录' ,
     'logout'  = >  '用户登出' ,
     ]
     ] ;

     然后使用下面的方式获取多语言变量

     Lang : : get ( 'user.login' ) ;
     lang ( 'user.login' ) ;

### 上传
#### 上传文件
     内置的上传只是上传到本地服务器，上传到远程或者第三方平台的话需要安装额外的扩展。
 

     假设表单代码如下：

     <form action = "/index/upload" enctype = "multipart/form-data" method = "post" >
     <input type = "file" name = "image"  / >  <br > 
     <input type = "submit" value = "上传"  / > 
     < /form > 

     然后在控制器中添加如下的代码：

     public  function  upload ( ) {
     // 获取表单上传文件 例如上传了001.jpg
     $file  =  request ( ) - > file ( 'image' ) ;
     // 上传到本地服务器
     $savename  = \think\facade\Filesystem : : putFile (  'topic' , $file ) ;
     }

     =$file=变量是一个 =\think\File=对象，你可以获取相关的文件信息，支持使用 =SplFileObject=类的属性和方法。

#### 上传规则


     默认情况下是上传到本地服务器，会在 =runtime/storage=目录下面生成以当前日期为子目录，以微秒时间的 =md5=编码为文件名的文件，例如上面生成的文件名可能是：

     runtime /storage /topic / 20160510 / 42a79759f284b767dfcb2a0197904287 .jpg

     如果是多应用的话，上传根目录默认是 =runtime/index/storage=，如果你希望上传的文件是可以直接访问或者下载的话，可以使用 =public=存储方式。

     $savename  = \think\facade\Filesystem : : disk ( 'public' ) - > putFile (  'topic' , $file ) ;

     你可以在 =config/filesystem.php=配置文件中配置上传根目录及上传规则，例如：

     return  [
     'default'  = >   'local' ,
     'disks'    = >  [
     'local'   = >  [
     'type'  = >  'local' ,
     'root'    = >  app ( ) - > getRuntimePath ( )  .  'storage' ,
     ] ,
     'public'  = >  [
     'type'      = >  'local' ,
     'root'        = >  app ( ) - > getRootPath ( )  .  'public/storage' ,
     'url'         = >  '/storage' ,
     'visibility'  = >  'public' ,
     ] ,
     // 更多的磁盘配置信息
     ] ,
     ] ;

     我们可以指定上传文件的命名规则，例如：

     $savename  = \think\facade\Filesystem : : putFile (  'topic' , $file ,  'md5' ) ;

     最终生成的文件名类似于：

     runtime /storage /topic / 72 /ef580909368d824e899f77c7c98388 .jpg

     系统默认提供了几种上传命名规则，包括：

     | 规则   | 描述                           |
     |--------+--------------------------------|
     | date   | 根据日期和微秒数生成           |
     | md5    | 对文件使用 md5\_file 散列生成    |
     | sha1   | 对文件使用 sha1\_file 散列生成   |

 
     其中 md5 和 sha1 规则会自动以散列值的前两个字符作为子目录，后面的散列值作为文件名。
 

     如果需要使用自定义命名规则，可以在 =rule=方法中传入函数或者使用闭包方法，例如：

     $savename  = \think\facade\Filesystem : : putFile (  'topic' , $file , 'uniqid' ) ;

     如果希望以指定的文件名保存,可调用 =putFileAs=方法,例如:

     $savename  = \think\facade\Filesystem : : putFileAs (  'topic' , $file , 'abc.jpg' ) ;

#### 多文件上传
     如果你使用的是多文件上传表单，例如：

     <form action = "/index/index/upload" enctype = "multipart/form-data" method = "post" >
     <input type = "file" name = "image[]"  / >  <br > 
     <input type = "file" name = "image[]"  / >  <br > 
     <input type = "file" name = "image[]"  / >  <br > 
     <input type = "submit" value = "上传"  / > 
     < /form > 

     控制器代码可以改成：

     public  function  upload ( ) {
     // 获取表单上传文件
     $files  =  request ( ) - > file ( 'image' ) ;
     $savename  =  [ ] ;
     foreach ($files as $file ) {
     $savename [ ]  = \think\facade\Filesystem : : putFile (  'topic' , $file ) ;
     }
     }

#### 上传验证


     支持使用验证类对上传文件的验证，包括文件大小、文件类型和后缀：

     public  function  upload ( ) {
     // 获取表单上传文件
     $files  =  request ( ) - > file ( ) ;
     try  {
     validate ( [ 'image' = > 'filesize:10240|fileExt:jpg|image:200,200,jpg' ] )
     - > check ($files ) ;
       $savename  =  [ ] ;
       foreach ($files as $file )  {
       $savename [ ]  = \think\facade\Filesystem : : putFile (  'topic' , $file ) ;
       }
       }  catch  (  \think \exception \ValidateException $e )  {
       echo $e - > getMessage ( ) ;
       }
       }

       | 验证参数   | 说明                                   |
       |------------+----------------------------------------|
       | fileSize   | 上传文件的最大字节                     |
       | fileExt    | 文件后缀，多个用逗号分割或者数组       |
       | fileMime   | 文件 MIME 类型，多个用逗号分割或者数组   |
       | image      | 验证图像文件的尺寸和类型               |

       具体用法可以参考验证章节的内置规则-> 上传验证。

#### 获取文件 hash 散列值


     可以获取上传文件的哈希散列值，例如：

     // 获取表单上传文件
     $file  =  request ( ) - > file ( 'image' ) ;
     // 获取上传文件的hash散列值
     echo $file - > md5 ( ) ;
     echo $file - > sha1 ( ) ;

     可以统一使用 hash 方法获取文件散列值

     // 获取表单上传文件
     $file  =  request ( ) - > file ( 'image' ) ;
     // 获取上传文件的hash散列值
     echo $file - > hash ( 'sha1' ) ;
     echo $file - > hash ( 'md5' ) ;

## 命令行 
### 命令行
    | 指令                | 描述                       |
    |---------------------+----------------------------|
    | build               | 自动生成应用目录和文件     |
    | help                | 帮助                       |
    | list                | 指令列表                   |
    | clear               | 清除缓存指令               |
    | run                 | 启动 PHP 内置服务器          |
    | version             | 查看当前框架版本号         |
    | make:controller     | 创建控制器类               |
    | make:model          | 创建模型类                 |
    | make:command        | 创建指令类文件             |
    | make:validate       | 创建验证器类               |
    | make:middleware     | 创建中间件类               |
    | make:event          | 创建事件类                 |
    | make:listener       | 创建事件监听器类           |
    | make:subscribe      | 创建事件订阅者类           |
    | make:service        | 创建系统服务类             |
    | optimize:autoload   | 生成类库映射文件           |
    | optimize:config     | 生成配置缓存文件           |
    | optimize:schema     | 生成数据表字段缓存文件     |
    | optimize:facade     | 生成 Facade 注释             |
    | route:build         | 生成注解路由               |
    | route:list          | 查看路由定义               |
    | service:discover    | 自动注册扩展包的系统服务   |
    | vendor:publish      | 自动生成扩展的配置文件     |

### 启动内置服务器
    >php think run
    IP 和端口访问
    >php think run  -H tp .com  -p  80
    然后你可以直接在浏览器里面访问
    http : / /tp .com /

### 自动生成应用目录
    ThinkPHP 具备自动创建功能，可以用来自动生成需要的应用及目录结构和文件等。
#### 快速生成应用
     如果使用了多应用模式，可以快速生成一个应用，例如生成 =demo=应用的指令如下：

     >php think build demo

     如果看到输出

     Successed

     则表示自动生成应用成功。

     会自动生成 =demo=应用，自动生成的应用目录包含了 =controller=、 =model=和 =view=目录以及 =common.php=、 =middleware.php=、 =event.php=和 =provider.php=等文件。

     生成成功后，我们可以直接访问 =demo=应用

     会显示

     您好！这是一个 [demo ]示例应用

### 创建类库文件
#### 快速生成控制器
     执行下面的指令可以生成 =index=应用的 =Blog=控制器类库文件

     >php think make :controller index@Blog

     如果是单应用模式，则无需传入应用名

     >php think make :controller Blog

     默认生成的是一个资源控制器，类文件如下：

     >php think make :controller index@Blog  --plain

     生成的控制器类文件如下：

     < ?php

     namespace app\index\controller ;


     class  Blog
     {
     //
     }

     如果需要生成多级控制器，可以使用

     >php think make :controller index@test /Blog  --plain

     会生成一个 =app\index\controller\test\Blog= 控制器类。

     可以支持 --api 参数生成用于 API 接口的资源控制器。

#### 快速生成模型
     和生成控制器类似，执行下面的指令可以生成 =index=应用的 =Blog=模型类库文件

     >php think make :model index@Blog

     如果是单应用模式，无需传入应用名

     >php think make :model Blog

     生成的模型类文件如下：

     < ?php
     namespace app\index\model ;

     use think\Model ;

     class  Blog extends  Model
     {
     //
     }

#### 生成带后缀的类库


     如果要生成带后缀的类库，可以直接使用：

     >php think make :controller index@BlogController

     >php think make :model BlogModel

#### 快速生成中间件


     可以使用下面的指令生成一个中间件类。

     >php think make :middleware Auth

     会自动生成一个 =app\middleware\Auth=类文件。

#### 创建验证器类


     可以使用

     >php think make :validate index@User

     生成一个 =app\index\validate\User= 验证器类，然后添加自己的验证规则和错误信息。

### 清除缓存文件
    如果需要清除应用的缓存文件，可以使用下面的命令：

    php think clear

    不带任何参数调用 =clear=命令的话，会清除 =runtime=目录（包括模板缓存、日志文件及其子目录）下面的所有的文件，但会保留目录。

    如果不需要保留空目录，可以使用

    php think clear  --dir

    清除日志目录

    php think clear  --log

    清除日志目录并删除空目录

    php think clear  --log  --dir

    清除数据缓存目录

    php think clear  --cache

    清除数据缓存目录并删除空目录

    php think clear  --cache  --dir

    如果需要清除某个指定目录下面的文件，可以使用：

    php think clear  --path d :\www\tp\runtime\log\

### 生成路由映射缓存
    路由映射缓存用于开启路由延迟解析的情况下，支持路由反解的 URL 生成，如果你没有开启路由延迟解析或者没有使用 URL 路由反解生成则不需要生成。
 

    生成路由映射缓存的命令：

    php think optimize :route

    执行后，会在 =runtime=目录下面生成 =route.php=文件。

    如果是多应用模式的话，需要增加应用名参数调用指令

    php think optimize :route index

### 输出路由定义
#### 输出并生成路由列表


     假设你的路由定义文件内容为：

     Route : : get ( 'think' ,  function  ( )  {
     return  'hello,ThinkPHP6!' ;
     } ) ;

     Route : : resource ( 'blog' ,  'Blog' ) ;

     Route : : get ( 'hello/:name' ,  'index/hello' ) - > ext ( 'html' ) ;

     可以使用下面的指令查看定义的路由列表

     php think route :list

     如果是多应用模式的话，需要改成

     php think route :list index

     输出结果类似于下面的显示：

     + -- -- -- -- -- -- -- -- + -- -- -- -- -- -- - + -- -- -- -- + -- -- -- -- -- -- - +
       | Rule            | Route        | Method  | Name         | 
       + -- -- -- -- -- -- -- -- + -- -- -- -- -- -- - + -- -- -- -- + -- -- -- -- -- -- - +
       | think           |  <Closure >    | get     |              | 
       | hello / <name >    | index /hello  | get     | index /hello  | 
       | blog            | Blog /index   | get     | Blog /index   | 
       | blog            | Blog /save    | post    | Blog /save    |  
       | blog /create     | Blog /create  | get     | Blog /create  |  
       | blog / <id > /edit  | Blog /edit    | get     | Blog /edit    | 
       | blog / <id >       | Blog /read    | get     | Blog /read    |
       | blog / <id >       | Blog /update  | put     | Blog /update  | 
       | blog / <id >       | Blog /delete  | delete  | Blog /delete  | 
       + -- -- -- -- -- -- -- -- + -- -- -- -- -- -- - + -- -- -- -- + -- -- -- -- -- -- - +

         并且同时会在 runtime 目录下面生成一个 =route_list.php=的文件，内容和上面的输出结果一致，方便你随时查看。


     如果你的路由定义发生改变的话， 则需要重新调用该指令，会自动更新上面生成的缓存文件。
 

#### 输出样式


     支持定义不同的样式输出，例如：

     php think route :list box

     输出结果变为：

     ┌────────────────┬─────────────┬────────┬─────────────┐
     │ Rule           │ Route       │ Method │ Name        │ 
     ├────────────────┼─────────────┼────────┼─────────────┤
     │ think          │  <Closure >   │ get    │             │ 
     │ hello / <name >   │ index /hello │ get    │ index /hello │
     │ blog           │ Blog /index  │ get    │ Blog /index  │
     │ blog           │ Blog /save   │ post   │ Blog /save   │
     │ blog /create    │ Blog /create │ get    │ Blog /create │
     │ blog / <id > /edit │ Blog /edit   │ get    │ Blog /edit   │
     │ blog / <id >      │ Blog /read   │ get    │ Blog /read   │ 
     │ blog / <id >      │ Blog /update │ put    │ Blog /update │
     │ blog / <id >      │ Blog /delete │ delete │ Blog /delete │
     └────────────────┴─────────────┴────────┴─────────────┘

     php think route :list box -double

     输出结果变为：

     ╔════════════════╤═════════════╤════════╤═════════════╗
     ║ Rule           │ Route       │ Method │ Name        ║
     ╠────────────────╪─────────────╪────────╪─────────────╣
     ║ think          │  <Closure >   │ get    │             ║
     ║ hello / <name >   │ index /hello │ get    │ index /hello ║
     ║ blog           │ Blog /index  │ get    │ Blog /index  ║
     ║ blog           │ Blog /save   │ post   │ Blog /save   ║
     ║ blog /create    │ Blog /create │ get    │ Blog /create ║
     ║ blog / <id > /edit │ Blog /edit   │ get    │ Blog /edit   ║
     ║ blog / <id >      │ Blog /read   │ get    │ Blog /read   ║
     ║ blog / <id >      │ Blog /update │ put    │ Blog /update ║
     ║ blog / <id >      │ Blog /delete │ delete │ Blog /delete ║
     ╚════════════════╧═════════════╧════════╧═════════════╝

     php think route :list markdown

     输出结果变为：

     | Rule            | Route        | Method  | Name         |
     | -- -- -- -- -- -- -- -- | -- -- -- -- -- -- - | -- -- -- -- | -- -- -- -- -- -- - |
     | think           |  <Closure >    | get     |              |
     | hello / <name >    | index /hello  | get     | index /hello  |
     | blog            | Blog /index   | get     | Blog /index   |
     | blog            | Blog /save    | post    | Blog /save    |
     | blog /create     | Blog /create  | get     | Blog /create  |
     | blog / <id > /edit  | Blog /edit    | get     | Blog /edit    |
     | blog / <id >       | Blog /read    | get     | Blog /read    | 
     | blog / <id >       | Blog /update  | put     | Blog /update  |
     | blog / <id >       | Blog /delete  | delete  | Blog /delete  | 

#### 排序支持


     如果你希望生成的路由列表按照路由规则排序，可以使用

     php think route :list  -s rule

     输出结果变成：

     + -- -- -- -- -- -- -- -- + -- -- -- -- -- -- - + -- -- -- -- + -- -- -- -- -- -- - +
       | Rule            | Route        | Method  | Name         | 
       + -- -- -- -- -- -- -- -- + -- -- -- -- -- -- - + -- -- -- -- + -- -- -- -- -- -- - +
       | blog            | Blog /index   | get     | Blog /index   |
       | blog            | Blog /save    | post    | Blog /save    | 
       | blog / <id >       | Blog /read    | get     | Blog /read    |
       | blog / <id >       | Blog /update  | put     | Blog /update  |
       | blog / <id >       | Blog /delete  | delete  | Blog /delete  | 
       | blog / <id > /edit  | Blog /edit    | get     | Blog /edit    | 
       | blog /create     | Blog /create  | get     | Blog /create  |
       | hello / <name >    | index /hello  | get     | index /hello  |
       | think           |  <Closure >    | get     |              |
       + -- -- -- -- -- -- -- -- + -- -- -- -- -- -- - + -- -- -- -- + -- -- -- -- -- -- - +

         同样的，你还可以按照请求类型排序

         php think route :list  -s method

         输出结果变为：

         + -- -- -- -- -- -- -- -- + -- -- -- -- -- -- - + -- -- -- -- + -- -- -- -- -- -- - +
           | Rule            | Route        | Method  | Name         | 
           + -- -- -- -- -- -- -- -- + -- -- -- -- -- -- - + -- -- -- -- + -- -- -- -- -- -- - +
             | blog / <id >       | Blog /delete  | delete  | Blog /delete  |
             | think           |  <Closure >    | get     |              |
             | hello / <name >    | index /hello  | get     | index /hello  |
             | blog            | Blog /index   | get     | Blog /index   |
             | blog /create     | Blog /create  | get     | Blog /create  | 
             | blog / <id > /edit  | Blog /edit    | get     | Blog /edit    |
             | blog / <id >       | Blog /read    | get     | Blog /read    |
             | blog            | Blog /save    | post    | Blog /save    |
             | blog / <id >       | Blog /update  | put     | Blog /update  | 
             + -- -- -- -- -- -- -- -- + -- -- -- -- -- -- - + -- -- -- -- + -- -- -- -- -- -- - +


     支持排序的字段名包括： =rule=、 =route=、 =name=、 =method=和 =domain=（全部小写）。
 

#### 输出详细信息


     如果你希望看到更多的路由参数和变量规则，可以使用

     php think route :list  -m

     输出结果变为：

     + -- -- -- -- -- -- -- -- + -- -- -- -- -- -- - + -- -- -- -- + -- -- -- -- -- -- - + -- -- -- -- + -- -- -- -- -- -- -- -- -- -- -- -- - + -- -- -- -- - +
       | Rule            | Route        | Method  | Name         | Domain  | Option                   | Pattern  |
       + -- -- -- -- -- -- -- -- + -- -- -- -- -- -- - + -- -- -- -- + -- -- -- -- -- -- - + -- -- -- -- + -- -- -- -- -- -- -- -- -- -- -- -- - + -- -- -- -- - +
       | think           |  <Closure >    | get     |              |         |  [ ]                       |  [ ]       |
       | hello / <name >    | index /hello  | get     | index /hello  |         |  { "ext" : "html" }           |  [ ]       |
       | blog            | Blog /index   | get     | Blog /index   |         |  { "complete_match" : true }  |  [ ]       |
       | blog            | Blog /save    | post    | Blog /save    |         |  { "complete_match" : true }  |  [ ]       |
       | blog /create     | Blog /create  | get     | Blog /create  |         |  [ ]                       |  [ ]       |
       | blog / <id > /edit  | Blog /edit    | get     | Blog /edit    |         |  [ ]                       |  [ ]       |
       | blog / <id >       | Blog /read    | get     | Blog /read    |         |  [ ]                       |  [ ]       |
       | blog / <id >       | Blog /update  | put     | Blog /update  |         |  [ ]                       |  [ ]       |
       | blog / <id >       | Blog /delete  | delete  | Blog /delete  |         |  [ ]                       |  [ ]       |
       + -- -- -- -- -- -- -- -- + -- -- -- -- -- -- - + -- -- -- -- + -- -- -- -- -- -- - + -- -- -- -- + -- -- -- -- -- -- -- -- -- -- -- -- - + -- -- -- -- - +

### 自定义指令
#### 创建自定义指令


     第一步，创建一个自定义命令类文件，运行指令

     php think make :command Hello hello

     会生成一个 =app\command\Hello=命令行指令类，我们修改内容如下：

     < ?php
     namespace app\command ;

     use think\console\Command ;
     use think\console\Input ;
     use think\console\input\Argument ;
     use think\console\input\Option ;
     use think\console\Output ;

     class  Hello extends  Command
     {
     protected  function  configure ( )
     {
     $this - > setName ( 'hello' )
     - > addArgument ( 'name' , Argument : :OPTIONAL ,  "your name" )
     - > addOption ( 'city' ,  null , Option : :VALUE_REQUIRED ,  'city name' )
     - > setDescription ( 'Say Hello' ) ;
       }

       protected  function  execute (Input $input , Output $output )
       {
       $name  =  trim ($input - > getArgument ( 'name' ) ) ;
       $name  = $name  ? :  'thinkphp' ;

       if  ($input - > hasOption ( 'city' ) )  {
       $city  = PHP_EOL  .  'From '  . $input - > getOption ( 'city' ) ;
       }  else  {
       $city  =  '' ;
       }

       $output - > writeln ( "Hello,"  . $name  .  '!'  . $city ) ;
       }
       }

       这个文件定义了一个叫 =hello=的命令，并设置了一个 =name=参数和一个 =city=选项。

       第二步，配置 =config/console.php=文件

       < ?php
       return  [
       'commands'  = >  [
       'hello'  = >  'app\command\Hello' ,
       ]
       ] ;

       第三步，测试-命令帮助-命令行下运行

       php think

       输出

       Think Console version  0.1

       Usage :
       command  [options ]  [arguments ]

       Options :
       -h ,  --help            Display this help message
       -V ,  --version         Display this console version
       -q ,  --quiet           Do not output any message
       --ansi            Force ANSI output
       --no -ansi         Disable ANSI output
       -n ,  --no -interaction  Do not ask any interactive question
       -v |vv |vvv ,  --verbose  Increase the verbosity of messages :  1  for normal output ,  2  for more verbose output and  3  for debug

       Available commands :
       build              Build Application Dirs
       clear              Clear runtime file
       hello              Say Hello 
       help               Displays help  for a command
       list               Lists commands
       make
       make :controller    Create a  new  resource controller class
       make :model         Create a  new  model class
       optimize
       optimize :autoload  Optimizes PSR0 and PSR4 packages to be loaded with classmaps too , good  for production .
       optimize :config    Build config and common file cache .
       optimize :schema    Build database schema cache .

       第四步，运行 =hello=命令

       php think hello

       输出

       Hello thinkphp !

       添加命令参数

       php think hello kancloud

       输出

       Hello kancloud !

       添加 =city=选项

       php think hello kancloud  --city shanghai

       输出

       Hello kancloud !
       From shanghai

     注意看参数和选项的调用区别
 

     如果需要生成一个指定的命名空间，可以使用：

     php think make :command app\index\Command second

#### 在控制器中调用命令
     支持在控制器的操作方法中直接调用命令，例如：

     < ?php
     namespace app\index\controller ;

     use think\facade\Console ;

     class  Index
     {
     public  function  hello ($name )
     {
     $output  = Console : : call ( 'hello' ,  [$name ] ) ;

     return $output - > fetch ( ) ;
     }
     }

     访问该操作方法后，例如：

     http : / /serverName /index /hello /name /thinkphp

     页面会输出

     Hello thinkphp !
# thinkphp 5.0 验证规则
## Article

   [[http://www.kancloud.cn/manual/thinkphp5/129319][官方文档 - 内置规则]]\\
   系统内置的验证规则如下：

   #格式验证类：#

   | 规则                  | 说明                                                                                       | 示例                                |
   |-----------------------+--------------------------------------------------------------------------------------------+-------------------------------------|
   | require               | 验证某个字段必须                                                                           | ‘name'=>'require'                   |
   | number 或者 integer   | 验证某个字段的值是否为数字（采用filter_var验证）                                           | ‘num'=>'number'                     |
   | float                 | 验证某个字段的值是否为浮点数字（采用filter_var验证）                                       | ‘num'=>'float'                      |
   | boolean               | 验证某个字段的值是否为布尔值（采用filter_var验证）                                         | ‘num'=>'boolean'                    |
   | email                 | 验证某个字段的值是否为email地址（采用filter_var验证）                                      | ‘email'=>'email'                    |
   | array                 | 验证某个字段的值是否为数组                                                                 | ‘info'=>'array'                     |
   | accepted              | 验证某个字段是否为为 yes, on, 或是 1。这在确认”服务条款”是否同意时很有用                   | ‘accept'=>'accepted'                |
   | date                  | 验证值是否为有效的日期，会对日期值进行strtotime后进行判断                                  | ‘date'=>'date'                      |
   | alpha                 | 验证某个字段的值是否为字母                                                                 | ‘name'=>'alpha'                     |
   | alphaNum              | 验证某个字段的值是否为字母和数字                                                           | ‘name'=>'alphaNum'                  |
   | alphaDash             | 验证某个字段的值是否为字母和数字，下划线_及破折号-                                         | ‘name'=>'alphaDash'                 |
   | activeUrl             | 验证某个字段的值是否为有效的域名或者IP                                                     | ‘host'=>'activeUrl'                 |
   | url                   | 验证某个字段的值是否为有效的URL地址（采用filter_var验证）                                  | ‘url'=>'url'                        |
   | ip                    | 验证某个字段的值是否为有效的IP地址（采用filter_var验证），支持验证ipv4和ipv6格式的IP地址   | ‘ip'=>'ip'                          |
   | dateFormat:format     | 验证某个字段的值是否为指定格式的日期                                                       | ‘create_time'=>'dateFormat:y-m-d'   |

   #长度和区间验证类：#

   | 规则                        | 说明                                                               | 示例                                             |
   |-----------------------------+--------------------------------------------------------------------+--------------------------------------------------|
   | in                          | 验证某个字段的值是否在某个范围                                     | ‘num'=>'in:1,2,3'                                |
   | notIn                       | 验证某个字段的值不在某个范围                                       | ‘num'=>'notIn:1,2,3'                             |
   | between                     | 验证某个字段的值是否在某个区间                                     | ‘num'=>'between:1,10'                            |
   | notBetween                  | 验证某个字段的值不在某个范围                                       | ‘num'=>'notBetween:1,10'                         |
   | length:num1,num2            | 验证某个字段的值的长度是否在某个范围，或者指定长度。\\             | ‘name'=>'length:4,25'\\                          |
   |                             | #如果验证的数据是数组，则判断数组的长度。\\                        | 'name'=>'length:4'                               |
   |                             | 如果验证的数据是File对象，则判断文件的大小。                       |                                                  |
   | max:number                  | 验证某个字段的值的最大长度\\                                       | ‘name'=>'max:25'                                 |
   |                             | #如果验证的数据是数组，则判断数组的长度。\\                        |                                                  |
   |                             | 如果验证的数据是File对象，则判断文件的大小。                       |                                                  |
   | min:number                  | 验证某个字段的值的最小长度\\                                       | ‘name'=>'min:5'                                  |
   |                             | #如果验证的数据是数组，则判断数组的长度。\\                        |                                                  |
   |                             | 如果验证的数据是File对象，则判断文件的大小。                       |                                                  |
   | after:日期                  | 验证某个字段的值是否在某个日期之后                                 | ‘begin_time' => ‘after:2016-3-18',               |
   | before:日期                 | 验证某个字段的值是否在某个日期之前                                 | ‘end_time' => ‘before:2016-10-01',               |
   | expire:开始时间,结束时间    | 验证当前操作（注意不是某个值）是否在某个有效日期之内               | ‘expire_time' => ‘expire:2016-2-1,2016-10-01',   |
   | allowIp:allow1,allow2,...   | 验证当前请求的IP是否在某个范围，该规则可以用于某个后台的访问权限   | ‘name' => ‘allowIp:114.45.4.55',                 |
   | denyIp:allow1,allow2,...    | 验证当前请求的IP是否禁止访问                                       | ‘name' => ‘denyIp:114.45.4.55',                  |

   #字段比较类：#

   | 规则                  | 说明                                       | 示例                     |
   |-----------------------+--------------------------------------------+--------------------------|
   | confirm               | 验证某个字段是否和另外一个字段的值一致     | ‘repassport'=>'require   |
   | different             | 验证某个字段是否和另外一个字段的值不一致   | ‘name'=>'require         |
   | egt 或者 >=           | 验证是否大于等于某个值                     | ‘score'=>'egt:60'\\      |
   |                       |                                            | 'num'=>'>=:100'          |
   | gt 或者 >             | 验证是否大于某个值                         | ‘score'=>'gt:60'\\       |
   |                       |                                            | 'num'=>'>:100'           |
   | elt 或者 <=           | 验证是否小于等于某个值                     | ‘score'=>'elt:100'\\     |
   |                       |                                            | 'num'=>'<=:100'          |
   | lt 或者 <             | 验证是否小于某个值                         | ‘score'=>'lt:100'\\      |
   |                       |                                            | 'num'=>'<:100'           |
   | eq 或者 = 或者 same   | 验证是否等于某个值                         | ‘score'=>'eq:100'\\      |
   |                       |                                            | 'num'=>'=:100'\\         |
   |                       |                                            | 'num'=>'same:100'        |

   #filter验证：#

   | 规则   | 说明                         | 示例                         |
   |--------+------------------------------+------------------------------|
   |        | 支持使用filter_var进行验证   | ‘ip'=>'filter:validate_ip'   |

   #正则验证：#

   | 规则   | 说明                   | 示例                    |
   |--------+------------------------+-------------------------|
   |        | 支持直接使用正则验证   | ‘zip'=>'\d{6}',\\       |
   |        |                        | // 或者\\               |
   |        |                        | 'zip'=>'regex:\d{6}',   |

   #上传验证：#

   | 规则                          | 说明                                                                              | 示例   |
   |-------------------------------+-----------------------------------------------------------------------------------+--------|
   | file                          | 验证是否是一个上传文件                                                            |        |
   | image:width,height,type       | 验证是否是一个图像文件，width height和type都是可选，width和height必须同时定义。   |        |
   | fileExt:允许的文件后缀        | 验证上传文件后缀                                                                  |        |
   | fileMime:允许的文件类型       | 验证上传文件类型                                                                  |        |
   | fileSize:允许的文件字节大小   | 验证上传文件大小                                                                  |        |

   #行为验证：#

   | 规则   | 说明               | 示例                                           |
   |--------+--------------------+------------------------------------------------|
   |        | 使用行为验证数据   | ‘data'=>'behavior:\app\index\behavior\Check'   |

   #其它验证：#

   | 规则                           | 说明                                   | 示例                                                          |
   |--------------------------------+----------------------------------------+---------------------------------------------------------------|
   | unique:table,field,except,pk   | 验证当前请求的字段值是否为唯一的       | // 表示验证name字段的值是否在user表（不包含前缀）中唯一\\     |
   |                                |                                        | 'name' => ‘unique:user',\\                                    |
   |                                |                                        | // 验证其他字段\\                                             |
   |                                |                                        | 'name' => ‘unique:user,account',\\                            |
   |                                |                                        | // 排除某个主键值\\                                           |
   |                                |                                        | 'name' => ‘unique:user,account,10',\\                         |
   |                                |                                        | // 指定某个主键值排除\\                                       |
   |                                |                                        | 'name' => ‘unique:user,account,10,user_id',\\                 |
   |                                |                                        | \\                                                            |
   |                                |                                        | 如果需要对复杂的条件验证唯一，可以使用下面的方式：\\          |
   |                                |                                        | // 多个字段验证唯一验证条件\\                                 |
   |                                |                                        | 'name' => ‘unique:user,status^account',\\                     |
   |                                |                                        | // 复杂验证条件\\                                             |
   |                                |                                        | 'name' => ‘unique:user,status=1&account='.$data[‘account'],   |
   | requireIf:field,value          | 验证某个字段的值等于某个值的时候必须   | // 当account的值等于1的时候 password必须\\                    |
   |                                |                                        | 'password'=>'requireIf:account,1'                             |
   | requireWith:field              | 验证某个字段有值的时候必须             | // 当account有值的时候password字段必须\\                      |
   |                                |                                        | 'password'=>'requireWith:account'                             |

# Q&A   
## Driver [Think] not supported 
```
composer require topthink/think-view
```

### multi-app
```
composer require topthink/think-multi-app  
```
! tip: every module must contain a controller fold 
 