## thinkphp5 

用途： 敏捷 web 应用开发

http://static.kancloud.cn/manual/thinkphp5/118003

### 面向对象的 MVC架构方式
#### 行为 
1. 侦听
``` php
// 在app_init位置侦听行为
\think\Hook::listen('app_init');

```
2. 绑定
``` php
// 绑定行为到app_init位置
\think\Hook::add('app_init','\app\index\behavior\Test');

```
### 配置

- config.php 应用配置
- database.php 数据库配置
- route.php 路由配置
- .env 环境变量配置

``` php
// 设置配置参数
Config::set($config);
// 读取二级配置参数
echo Config::get('user.type');
```

### 路由管理
通过 \think\Route 对HTTP协议中的 URL  进行管理。

#### 默认路由规则

- 多模块 
  - http://server/module/controller/action/param/value/
  - 或者 http://server?s=/module/controller/action/param/value/

- 单模块
  - http://server/controller/action/param/value/

命名空间也要修改

#### 自定义规则
``` php
Route::get('new/:id','News/read'); // 定义GET请求路由规则
```


### 命名空间

#### 内置或没命名空间类库
> 如果你需要调用PHP内置的类库,或者第三方没有使用命名空间的类库,记得在实例化类库的时候加上 \ 
```php
// 错误的用法
$class = new stdClass();
$xml = new SimpleXmlElement($xmlstr);
// 正确的用法
$class = new \stdClass();
$xml = new \SimpleXmlElement($xmlstr);

```


#### 有命名空间
``` php
$class = new \think\cache\driver\File();
```

### 控制器

控制器文件的命名规范是 : 首字母需要大写，如果是两个单词的组合，如 HelloWorld ，则 URL 为 hello_world

``` php
// 是否自动转换URL中的控制器和操作名
'url_convert'            => true,
```

#### 渲染输出
##### json 输出
默认类型 'default_return_type'=>'json'

指定 xml类型
``` php
return xml(['data'=>$data,'code'=>1,'message'=>'操作完成']);
```

##### 模板输出

return view();

#### 跳转和重定向
``` php
//设置成功后跳转页面的地址,默认的返回页面是$_SERVER['HTTP_REFERER']
$this->success('新增成功', 'User/list');

//错误页面的默认跳转页面是返回前一页,通常不需要设置 javascript:history.back(-1);
$this->error('新增失败');

//重定向到News模块的Category操作
$this->redirect('News/category', ['cate_id' => 2]);

```
#### 空操作
空操作是指系统在找不到指定的操作方法的时候,会定位到空操作( _empty )方法来执行,利用这个机制,
我们可以实现错误页面和一些URL的优化。

#### 空控制器
class Error

### 客户端请求

``` php
$request = Request::instance();
// 获取当前域名
echo 'domain: ' . $request->domain() . '<br/>';
// 获取当前入口文件
echo 'file: ' . $request->baseFile() . '<br/>';
$request->param()
```

过滤
``` php
Request::instance()->get('name','','htmlspecialchars'); // 获取get变量 并用htmlsp
ecialchars函数过滤
Request::instance()->param('username','','strip_tags'); // 获取param变量 并用stri
p_tags函数过滤
Request::instance()->post('name','','org\Filter::safeHtml'); // 获取post变量 并用
org\Filter类的safeHtml方法过滤

Request::instance()->param('username','','strip_tags,strtolower'); // 获取param
变量 并依次调用strip_tags、strtolower函数过滤
Request::instance()->post('email','','email');
```
### 数据库

#### 原生
``` php
Db::query('select * from think_user where id=:id',['id'=>8]);
Db::execute('insert into think_user (id, name) values (:id, :name)',['id'=>8,'n
ame'=>'thinkphp']);
```
#### 查询构造器
``` php
// table方法必须指定完整的数据表名
Db::table('think_user')->where('id',1)->find();
Db::name('user')->where('id',1)->find();

```
添加/更新/删除

- insert / insertGetId($data) /insertAll($data)
- update/setInc('field',value,time)/setDec/
- delete


使用函数
``` php
Db::table('think_user')
->where('id', 1)
->update([
'login_time' => ['exp','now()'],
'login_times' => ['exp','login_times+1'],
]);
V5.0.18+ 版本开始是数组中使用 exp 查询和更新的话,必须改成下面的方式:
Db::table('think_user')
->where('id', 1)
->update([
'login_time' => Db::raw('now()'),
'login_times' => Db::raw('login_times+1'),
]);

//链式
Db::table('data')
->where('id',1)
->inc('read')
->dec('score',3)
->exp('name','UPPER(name)')
->update();

```

#### 查询方法
``` php
->where('name&title','like','%thinkphp')

->whereOr('title','like','%thinkphp')
->where('name|title','like','%thinkphp')
```

复合查询
``` php
$result = Db::table('think_user')->where(function ($query) {
$query->where('id', 1)->whereor('id', 2);
})->whereOr(function ($query) {
$query->where('name', 'like', 'think')->whereOr('name', 'like', 'thinkphp');
})->select();

```
``` mysql
SELECT * FROM `think_user` WHERE (
 `id` = 1 OR `id` = 2 ) OR (
 `name` LIKE '
think' OR `name` LIKE 'thinkphp' )
```

#### getTableInfo
``` php 
// 获取`think_user`表所有信息
Db::getTableInfo('think_user');
// 获取`think_user`表所有字段
Db::getTableInfo('think_user', 'fields');
// 获取`think_user`表所有字段的类型
Db::getTableInfo('think_user', 'type');
// 获取`think_user`表的主键
Db::getTableInfo('think_user', 'pk');
```
#### 表达式
``` php
where('id','between','1,8');
$map['id'] = array('not between','1,8');
where('id','not in','1,5,8');
where('name','not null');
where('id','exp',' IN (1,3,8) ');
// 正确 推荐写法
$model->whereExp('id', '>score')->find();
```
#### table (用于多表操作或切换)

``` php
Db::field('user.name,role.title')
->table(['think_user'=>'user','think_role'=>'role'])
->limit(10)->select();

```

#### field 
``` php
//可以用于合法性写入
Db::table('think_user')->field('title,email,content')->insert($data);

```
#### page
``` php
// 查询第一页数据
Db::table('think_article')->page('1,10')->select();

```
闭包
``` php
$list = Db::name('user')->where('status',1)->paginate()->each(function($item, $ key){$item['nickname'] = 'think'; return $item; });
```
#### group

``` php
Db::table('think_user')
->field('user_id,username,max(score)')
->group('user_id')
->select();
```

#### having
``` php
Db::table('think_user')
->field('username,max(score)')
->group('user_id')
->having('count(test_time)>3')
->select();
```

#### cache
``` php
Db::table('think_user')->cache(true,60)->find();
// 或者使用下面的方式 是等效的
Db::table('think_user')->cache(60)->find();

```

#### 时间
``` php
// 获取今天的博客
Db::table('think_blog') ->whereTime('create_time', 'today')->select();
// 获取昨天的博客
Db::table('think_blog')->whereTime('create_time', 'yesterday')->select();
// 获取本周的博客
Db::table('think_blog')->whereTime('create_time', 'week')->select();
// 获取上周的博客

```
#### 子查询
1.构造
``` php
$subQuery = Db::table('think_user')
->field('id,name')
->where('id','>',10)
->buildSql();
```

2. 执行
``` php
Db::table($subQuery.' a')
->where('a.name','like','thinkphp')
->order('id','desc')
->select();
```
闭包构造
``` php
Db::table('think_user')
->where('id','IN',function($query){
$query->table('think_profile')->where('status',1)->field('id');
})
->select();

```
#### with 连接两个表
``` php
   $list = $this->model
                ->with('taocan,account')
                ->where($where)
                ->order($sort, $order)
                ->paginate($limit);
                
                
                //model
  public function account()
    {
    
        return $this->belongsTo("app\admin\model\ShopAccount"[关联表], "shop_account_id"[主表字段], 'id'[关联字段], [], 'LEFT')->setEagerlyType(0);
    }
                
```
### 模型

``` php
$user = new User;
$user->name = 'thinkphp';
$user->email = 'thinkphp@qq.com';
$user->save();
// 获取自增ID
echo $user->id;
```

删除
``` php
// 删除状态为0的数据
User::destroy(['status' => 0]);

```

获取多个数据
``` php
// 使用数组查询
$list = User::all(['status'=>1]);
// 使用闭包查询
$list = User::all(function($query){
$query->where('status', 1)->limit(3)->order('id', 'asc');
});
foreach($list as $key=>$user){
echo $user->name;
}

```
或者在实例化模型后调用查询方法
``` php
$user = new User();
// 查询数据集
$user->where('name', 'thinkphp')
->limit(10)
->order('id', 'desc')
->select();
 ```

### 视图
``` php
// 渲染模板输出
return $this->fetch('hello',['name'=>'thinkphp']);
return view('hello',['name'=>'thinkphp']);
```

### 模板
#### 请求参数 
``` php
{$Request.get.id}
{$Request.param.name}
```
- 使用函数 {$data.name|md5}
- 默认值 {$Think.get.name|default="名称为空"}
- 运算符 {$user['score']+myFun($user['level'])} //正确的
- 包含文件 {include file="public/header" /} // 包含头部模版header

#### 标签

| 标签名 | 作用             | 包含属性                      |
| :-:    | :-:              | :-:                           |
| volist | 循环数组数据输出 | name,id,offset,length,key,mod |
| for    | 循环数据输出     | name,from,to,before,step      |
|        |                  |                               |

支持输出查询结果中的部分数据,例如输出其中的第5~15条记录
``` php
{volist name="list" id="vo" offset="5" length='10'}
{$vo.name}
{/volist}
```
输出偶数记录
``` php
{volist name="list" id="vo" mod="2" }
{eq name="mod" value="1"}{$vo.name}{/eq}
{/volist}
```
``` php
{for start="开始值" end="结束值" comparison="" step="步进值" name="循环变量名" }
{/for}

```
Case标签还有一个break属性,表示是否需要break,默认是会自动添加break,如果不要break,可以使用:
``` php
{switch name="Think.get.userId|abs"}
{case value="1" break="0"}admin{/case}
{case value="2"}admin{/case}
{default /}default
{/switch}
```

``` php
{between name="Think.post.id" value="1,5"}
输出内容1
{/between}
```

#### url
``` html
{:url('aaa/bbb?id='.$vo.id)}
{:url('aaa/bbb',array('id'=>$vo.id))}
{:url('admin/group')}?id={$vo['id']}
```
### 验证
### 安全
#### 输入安全
#### 上传安全 


### 文件上传
### 杂项
#### 缓存
Cache::set('name',$value,3600);

#### session
Session::set('name','thinkphp');
Session::get('name');

支持指定 Session 驱动,配置文件如下:
``` php
'session' => [
    'prefix' => 'module',
    'type' => 'redis',
    'auto_start' => true,
    // redis主机
    'host' => '127.0.0.1',
    // redis端口
    'port' => 6379,
    // 密码
    'password' => '',
]
 ```

``` php
// cookie初始化
Cookie::init(['prefix'=>'think_','expire'=>3600,'path'=>'/']);
// 指定当前前缀
Cookie::prefix('think_');

 ```

支持的参数及默认值如下:

``` php
// cookie 名称前缀
'prefix' => '',
// cookie 保存时间
'expire' => 0,
// cookie 保存路径
'path' => '/',
// cookie 有效域名
'domain' => '',
// cookie 启用安全传输
'secure' => false,
// httponly设置
'httponly' => '',
// 是否使用 setcookie
'setcookie' => true,
```

#### 多语言

``` php
// 开启语言切换
'lang_switch_on' => true,
```

如果在自动侦测语言的时候,希望设置允许的语言列表,不在列表范围的语言则仍然使用默认语言,可以使用:
``` php
// 设置允许的语言
Lang::setAllowLangList(['zh-cn','en-us']);
```

#### 分页
``` php
// 查询状态为1的用户数据 并且每页显示10条数据
$list = Db::name('user')->where('status',1)->paginate(10);
// 把分页数据赋值给模板变量list
$this->assign('list', $list);
// 渲染模板输出
return $this->fetch();
```

也可以改成模型的分页查询代码:
``` php
// 查询状态为1的用户数据 并且每页显示10条数据
$list = User::where('status',1)->paginate(10);
// 把分页数据赋值给模板变量list
$this->assign('list', $list);
// 渲染模板输出
return $this->fetch();
```
模板文件中分页输出代码如下:
``` html
<div>
<ul>
{volist name='list' id='user'}
<li> {$user.nickname}</li>
{/volist}
</ul>
</div>
{$list->render()}
```

可以修改样式
``` html
<ul class="pagination">
<li><a href="?page=1">&laquo;</a></li>
<li><a href="?page=1">1</a></li>
<li class="active"><span>2</span></li>
<li class="disabled"><span>&raquo;</span></li>
</ul>

```

#### 文件上传

``` html
<form action="/index/index/upload" enctype="multipart/form-data" method="post">
<input type="file" name="image" /> <br>
<input type="submit" value="上传" />
</form>
```

控制器:
``` php
public function upload(){
// 获取表单上传文件 例如上传了001.jpg
$file = request()->file('image');

// 移动到框架应用根目录/public/uploads/ 目录下
if($file){
$info = $file->move(ROOT_PATH . 'public' . DS . 'uploads');
if($info){
// 成功上传后 获取上传信息
// 输出 jpg
echo $info->getExtension();
// 输出 20160820/42a79759f284b767dfcb2a0197904287.jpg
echo $info->getSaveName();
// 输出 42a79759f284b767dfcb2a0197904287.jpg
echo $info->getFilename();
}else{
// 上传失败获取错误信息
echo $file->getError();
}
}
```
move 方法成功的话返回的是一个 \think\File 对象,你可以对上传后的文件进行后续操作。


#### 多文件上传

``` html
<form action="/index/index/upload" enctype="multipart/form-data" method="post">
<input type="file" name="image[]" /> <br>
<input type="file" name="image[]" /> <br>
<input type="file" name="image[]" /> <br>
<input type="submit" value="上传" />
</form>

```

``` php
public function upload(){
// 获取表单上传文件
$files = request()->file('image');
foreach($files as $file){
// 移动到框架应用根目录/public/uploads/ 目录下
$info = $file->move(ROOT_PATH . 'public' . DS . 'uploads');
if($info){
// 成功上传后 获取上传信息
// 输出 jpg
echo $info->getExtension();
// 输出 42a79759f284b767dfcb2a0197904287.jpg
echo $info->getFilename();
}else{
// 上传失败获取错误信息
echo $file->getError();
}
}
}

```

#### 上传验证
``` php
$info = $file->validate(['size'=>15678,'ext'=>'jpg,png,gif'])->move(ROOT_PA
TH . 'public' . DS . 'uploads');
if($info){
// 成功上传后 获取上传信息
// 输出 jpg
echo $info->getExtension();
// 输出 20160820/42a79759f284b767dfcb2a0197904287.jpg
echo $info->getSaveName();
// 输出 42a79759f284b767dfcb2a0197904287.jpg
echo $info->getFilename();
}
```

#### 上传规则

默认情况下,会在上传目录下面生成以当前日期为子目录,以微秒时间的 md5 编码为文件名的文件,例如上面

生成的文件名可能是:
/home/www/upload/20160510/42a79759f284b767dfcb2a0197904287.jpg

我们可以指定上传文件的命名规则,使用 rule 方法即可,例如:
``` php
// 获取表单上传文件 例如上传了001.jpg
$file = request()->file('image');
// 移动到服务器的上传目录 并且使用md5规则
$file->rule('md5')->move('/home/www/upload/');
```

| 规则 | 描述                        |
|------+-----------------------------|
| date | 根据日期和微秒数生成        |
| md5  | 对文件使用md5_file散列生成  |
| sha1 | 对文件使用sha1_file散列生成 |

rule 后可自定义函数调用

#### 验证码

模版内验证码的显示

``` html+php
<div>{:captcha_img()}</div>
```

或者

``` html
<div><img src="{:captcha_src()}" alt="captcha" /></div>
```

验证

``` php
$this->validate($data,[
'captcha|验证码'=>'require|captcha'
]);
```
或者手动验证
``` php
if(!captcha_check($captcha)){
//验证失败
};
```

### 图像处理
#### 打开图像
``` php
$image = \think\Image::open('./image.png');
//也可以从直接获取当前请求中的文件上传对象,例如:
$image = \think\Image::open(request()->file('image'));
```

#### 获取图像信息
``` php

$image = \think\Image::open('./image.png');
// 返回图片的宽度
$width = $image->width();
// 返回图片的高度
$height = $image->height();
// 返回图片的类型
$type = $image->type();
// 返回图片的mime类型
$mime = $image->mime();
// 返回图片的尺寸数组 0 图片宽度 1 图片高度
$size = $image->size();
```

#### 裁剪图像
``` php
$image->crop(300, 300)->save('./crop.png');
//支持从某个坐标开始裁剪,例如下面从(100,30)开始裁剪,
$image->crop(300, 300,100,30)->save('./crop.png');
```

``` php
//缩略图
$image->thumb(150, 150)->save('./thumb.png');
// 按照原图的比例生成一个最大为150*150的缩略图并保存为thumb.png
$image->thumb(150,150,\think\Image::THUMB_CENTER)->save('./thumb.png');

//图像翻转
// 对图像进行以y轴进行翻转操作
$image->flip(\think\image::FLIP_Y)->save('./filp_image.png');

//图像旋转
// 对图像使用默认的顺时针旋转90度操作
$image->rotate()->save('./rotate_image.png');

//添加水印
// 给原图左上角添加水印并保存water_image.png，透明度 50%
$image->water('./logo.png',\think\Image::WATER_NORTHWEST,50)->save('water_image.pn
g');
//文字水印
// 给原图左上角添加水印并保存water_image.png
$image->text('十年磨一剑 - 为API开发设计的高性能框架','HYQingKongTiJ.ttf',20,'#ffffff')->save('text_image.png');

```

### 命令行 php think
- clear
- make:controller  index/Blog    [生成index 模块的 Blog 控制器类库文件]
- make:model

### 部署
#### 修改入口文件

``` php
// 应用目录
define('APP_PATH', __DIR__.'/apps/');
// 加载框架引导文件
require './thinkphp/start.php';
```

#### URL重写

[Apache]

``` apache
<IfModule mod_rewrite.c>
Options +FollowSymlinks -Multiviews
RewriteEngine on
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^(.*)$ index.php?/$1 [QSA,PT,L]
</IfModule>

```

[Nginx]
``` c
location / { // .....省略部分代码
if (!-e $request_filename) {
rewrite ^(.*)$ /index.php?s=/$1
 last;
break;
}
}

```

### 设置session 时间
> ROOT\application\config.php

添加个字段  expire

``` php

 'session'                => [
        'id'             => '',
        // SESSION_ID的提交变量,解决flash上传跨域
        'var_session_id' => '',
        // SESSION 前缀
        'prefix'         => 'think',
        // 驱动方式 支持redis memcache memcached
        'type'           => '',
        // 是否自动开启 SESSION
        'auto_start'     => true,
        //设置session 时间
        'expire'             => 86400,
    ],
```

### sql 日志

第一步：在Database.php文件中将数据库debug设置为true，（默认是true）
``` php
// 数据库调试模式
'debug'           => true,
```
第二步：在Config.php文件中写如下代码

``` php
  'log' => [
        // 日志记录方式，内置 file socket 支持扩展
        'type'  => 'File',
        // 日志保存目录
        'path'  => LOG_PATH,
        // 日志记录级别
        'level' => ['sql'],
    ],
```
一班这样设置之后就可以开启SQL日志记录了。

## 登录方案
### controller\Login.php
``` php

namespace app\admin\controller;

use think\Controller;

use app\admin\model\Login as Log;

class Login extends Controller

{

    public function index()

    {

        // $linkres= \think\Db::name('link')->paginate(3);

        // $this->assign('linkres',$linkres);

        if(request()->isPost()){

            $login=new Log;

            $status=$login->login(input('username'),input('password'));

            if($status==1){

                return $this->success('登录成功，正在跳转！','Index/index');

            }elseif($status==2){

                return $this->error('账号或者密码错误!');

            }else{

                return $this->error('用户不存在!');

            }

        }

        return $this->fetch('login');

    }

  

    public function logout(){
        session(null);
        return $this->success('退出成功！',url('index'));

    }

}

```

### model\Login.php
``` php

namespace app\admin\model;

use think\Model;

class Login extends Model

{

    public function login($username,$password){

        $admin= \think\Db::name('admin')->where('username','=',$username)->find();

        if($admin){

            if($admin['password']==md5($password)){

                \think\Session::set('id',$admin['id']);

                \think\Session::set('username',$admin['username']);

                return 1;

            }else{

                return 2;

            }

  

        }else{

            return 3;

        }

    }

}
```
### login.html

