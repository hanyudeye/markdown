# fastadmin
https://doc.fastadmin.net/doc/178.html

fastadmin：以TP5为基础的，把框架里免费的插件安装上学一学，开发文档看完，跟着操作一遍，多写写API接口；

第六天：了解一些并发、缓存、数据库优化等知识；
第七天：看看网上大神的PHP技能树进阶，准备一份看起来还行的简历，等面试吧；

## 命令行
### 一键生成CURD (控制器，model，和菜单)

常用命令
--force=true

``` shell
//生成fa_test表的CRUD
php think crud -t test
//生成fa_test表的CRUD且一键生成菜单
php think crud -t test -u 1
//删除fa_test表生成的CRUD
php think crud -t test -d 1
//生成fa_test表的CRUD且控制器生成在二级目录下
php think crud -t test -c mydir/test
//生成fa_test_log表的CRUD且生成对应的控制器为testlog
php think crud -t test_log -c testlog
//生成fa_test表的CRUD且对应的模型名为testmodel
php think crud -t test -m testmodel
//生成fa_test表的CRUD且生成关联模型category，外链为category_id，关联表主键为id
php think crud -t test -r category -k category_id -p id
//生成fa_test表的CRUD且所有以list或data结尾的字段都生成复选框
php think crud -t test --setcheckboxsuffix=list --setcheckboxsuffix=data
//生成fa_test表的CRUD且所有以image和img结尾的字段都生成图片上传组件
php think crud -t test --imagefield=image --imagefield=img
//关联多个表,参数传递时请按顺序依次传递，支持以下几个参数relation/relationmodel/relationforeignkey/relationprimarykey/relationfields/relationmode
php think crud -t test --relation=category --relation=admin --relationforeignkey=category_id --relationforeignkey=admin_id
//生成v_phealth_db2数据库下的fa_test表的CRUD
php think crud -t test --db=v_phealth_db2
```

### 一键生成菜单

常用命令
``` shell
//一键生成test控制器的权限菜单
php think menu -c test
//一键生成mydir/test控制器的权限菜单
php think menu -c mydir/test
//删除test控制器生成的菜单
php think menu -c test -d 1
//一键全部重新所有控制器的权限菜单
php think menu -c all-controller
```

### 一键压缩打包
在FastAdmin中如果修改了核心的JS或CSS文件，是需要重新压缩打包后在生产环境下才会生效。FastAdmin采用的是基于RequireJS的r.js进行JS和CSS文件的压缩打包。

常用命令
``` shell
//一键压缩打包前后台的JS和CSS
php think min -m all -r all
//一键压缩打包后台的JS和CSS
php think min -m backend -r all
//一键压缩打包前后台的JS
php think min -m all -r js
//一键压缩打包后台的CSS
php think min -m backend -r css
//使用uglify进行一键压缩打包后台的JS文件
php think min -m backend -r js -o uglify
```

影响文件
在调试模式和生产环境下所加载的JS和CSS是不一样的，压缩打包会重新生成生产环境下的JS和CSS文件，特别注意下。
调试模式：

``` 
public/assets/js/require-frontend.js
public/assets/js/require-backend.js
public/assets/css/frontend.css
public/assets/css/backend.css
```
生产环境：(打包压缩后会重新生成以下文件)
```
public/assets/js/require-frontend.min.js
public/assets/js/require-backend.min.js
public/assets/css/frontend.min.css
public/assets/css/backend.min.css
```

### 一键生成API文档
FastAdmin中的一键生成API文档可以在命令行或后台一键生成我们API接口的接口测试文档，可以直接在线模拟接口请求，查看参数示例和返回示例。
常用命令
``` shell
//一键生成API文档
php think api --force=true
//指定https://www.example.com为API接口请求域名,默认为空
php think api -u https://www.example.com --force=true
//输出自定义文件为myapi.html,默认为api.html
php think api -o myapi.html --force=true
//修改API模板为mytemplate.html，默认为index.html
php think api -e mytemplate.html --force=true
//修改标题为FastAdmin,作者为作者
php think api -t FastAdmin -a Karson --force=true
//查看API接口命令行帮助
php think api -h
```
参数介绍
### 一键管理插件
常用命令
``` shell
//创建一个myaddon本地插件，常用于开发自己的插件时使用
php think addon -a myaddon -c create
//刷新插件缓存，如果禁用启用了插件，部分文件需要刷新才会生效
php think addon -a example -c refresh
//远程安装example插件
php think addon -a example -c install
//卸载本地的example插件
php think addon -a example -c uninstall
//启用本地的example插件
php think addon -a example -c enable
//禁用本地的example插件
php think addon -a example -c disable
//升级本地的example插件
php think addon -a example -c upgrade
//将本地的example插件打包成zip文件
php think addon -a example -c package
``` 

### 一键安装FastAdmin
常用命令
``` shell
//一键安装FastAdmin
php think install
//配置数据库连接地址为127.0.0.1
php think install -a 127.0.0.1
//配置数据库用户名密码
php think install -u root -p 123456
//配置数据库表名为dbname
php think install -d dbname
//配置数据库表前缀为ff_
php think install -r ff_
//强制重新安装FastAdmin
php think install -f 1
```
## 多语言
``` html
__('My name is %s', "FastAdmin");
__('This is %s,base on %s', ['FastAdmin', 'ThinkPHP5']);
```

## 数据库
### 根据字段类型
| 类型 | 备注 | 类型说明 |
|------+------+----------|
| int       | 整型     | 自动生成type为number的文本框，步长为1                |
| enum      | 枚举型   | 自动生成单选下拉列表框                               |
| set       | set型    | 自动生成多选下拉列表框                               |
| float     | 浮点型   | 自动生成type为number的文本框，步长根据小数点位数生成 |
| text      | 文本型   | 自动生成textarea文本框                               |
| datetime  | 日期时间 | 自动生成日期时间的组件                               |
| date      | 日期型   | 自动生成日期型的组件                                 |
| timestamp | 时间戳   | 自动生成日期时间的组件                               |
### 特殊字段
| 字段         | 字段名称   | 字段类型 | 字段说明                                                                                |
|--------------+------------+----------+-----------------------------------------------------------------------------------------|
| category_id  | 分类ID     | int      | 将生成选择分类的下拉框,分类类型根据去掉前缀的表名，单选                                 |
| category_ids | 多选分类ID | varchar  | 将生成选择分类的下拉框,分类类型根据去掉前缀的表名，多选                                 |
| weigh        | 权重       | int      | 后台的排序字段，如果存在该字段将出现排序按钮，可上下拖动进行排序                        |
| createtime   | 创建时间   | int      | 记录添加时间字段,不需要手动维护                                                         |
| updatetime   | 更新时间   | int      | 记录更新时间的字段,不需要手动维护                                                       |
| deletetime   | 删除时间   | int      | 记录删除时间的字段,不需要手动维护,如果存在此字段将会生成回收站功能,字段默认值务必为null |
| status       | 状态字段   | enum     | 列表筛选字段,如果存在此字段将启用TAB选项卡展示列表                                      |

### 以特殊字符结尾的规则

| 结尾字符 | 示例        | 类型要求    | 字段说明                                           |
|----------+-------------+-------------+----------------------------------------------------|
| time     | refreshtime | int         | 识别为日期时间型数据，自动创建选择时间的组件       |
| image    | smallimage  | varchar     | 识别为图片文件，自动生成可上传图片的组件,单图      |
| images   | smallimages | varchar     | 识别为图片文件，自动生成可上传图片的组件,多图      |
| file     | attachfile  | varchar     | 识别为普通文件，自动生成可上传文件的组件,单文件    |
| files    | attachfiles | varchar     | 识别为普通文件，自动生成可上传文件的组件,多文件    |
| avatar   | miniavatar  | varchar     | 识别为头像，自动生成可上传图片的组件,单图          |
| avatars  | miniavatars | varchar     | 识别为头像，自动生成可上传图片的组件,多图          |
| content  | maincontent | text        | 识别为内容，自动生成富文本编辑器(需安装富文本插件) |
| _id      | user_id     | int/varchar | 识别为关联字段，自动生成可自动完成的文本框，单选   |
| _ids     | user_ids    | varchar     | 识别为关联字段，自动生成可自动完成的文本框，多选   |
| list     | timelist    | enum        | 识别为列表字段，自动生成单选下拉列表               |
| list     | timelist    | set         | 识别为列表字段，自动生成多选下拉列表               |
| data     | hobbydata   | enum        | 识别为选项字段，自动生成单选框                     |
| data     | hobbydata   | set         | 识别为选项字段，自动生成复选框                     |
| json     | configjson  | varchar     | 识别为键值组件，自动生成键值录入组件               |
| switch   | siteswitch  | tinyint     | 识别为开关字段，自动生成开关组件                   |

### 注释说明
| 字段   | 注释内容                  | 字段类型                | 字段说明                                                                      |
|--------+---------------------------+-------------------------+-------------------------------------------------------------------------------|
| status | 状态                      | int                     | 将生成普通语言包和普通文本框                                                  |
| status | 状态                      | enum(‘0’,’1’,’2’) | 将生成普通语言包和单选下拉列表,同时生成TAB选项卡                              |
| status | 状态:0=隐藏,1=正常,2=推荐 | enum(‘0’,’1’,’2’) | 将生成多个语言包和单选下拉列表,同时生成TAB选项卡,且列表中的值显示为对应的文字 |
## 控制器

### 基类控制器
FastAdmin中定义了三个基类控制器，分别位于

application/common/controller/Api.php //API接口基类控制器
application/common/controller/Backend.php //后台基类控制器
application/common/controller/Frontend.php //前台基类控制器

基类中所定义的方法如下，以下方法都是通过application/admin/library/traits/Backend.php引入的

``` php
class Backend extends Controller{
    /**
     * 查看
     */
    public function index(){}
  
    /**
     * 添加
     */
    public function add($ids = ""){}
  
    /**
     * 编辑
     */
    public function edit($ids = ""){}
  
    /**
     * 删除
     */
    public function del($ids = ""){}
  
    /**
     * 批量更新
     */
    public function multi($ids = ""){}
  
    /**
     * 回收站
     */
    public function recyclebin(){}
  
    /**
     * 真实删除
     */
    public function destroy($ids = ""){}
  
    /**
     * 还原
     */
    public function restore($ids = ""){}
  
      /**
     * 导入
     */
    protected function import(){}
  
    /**
     * 下拉筛选
     */
    public function selectpage()
    {
        return parent::selectpage();
    }
} 
```

### 属性和方法
当我们的控制器继承自app\common\controller\Backend以后，我们就可以使用以下属性
``` php
/**
 * 无需登录的方法,同时也就不需要鉴权了
 * @var array
 */
protected $noNeedLogin = [];

/**
 * 无需鉴权的方法,但需要登录
 * @var array
 */
protected $noNeedRight = [];

/**
 * 布局模板
 * @var string
 */
protected $layout = 'default';

/**
 * 权限控制类
 * @var Auth
 */
protected $auth = null;

/**
 * 快速搜索时执行查找的字段
 */
protected $searchFields = 'id';

/**
 * 是否是关联查询
 */
protected $relationSearch = false;

/**
 * 是否开启数据限制
 * 支持auth/personal
 * 表示按权限判断/仅限个人 
 * 默认为禁用,若启用请务必保证表中存在admin_id字段
 */
protected $dataLimit = false;

/**
 * 数据限制字段
 */
protected $dataLimitField = 'admin_id';

/**
 * 是否开启Validate验证
 */
protected $modelValidate = false;

/**
 * 是否开启模型场景验证
 */
protected $modelSceneValidate = false;

/**
 * Multi方法可批量修改的字段
 */
protected $multiFields = 'status';
```

我们可以直接在当前控制器使用$this->属性名来调用所支持的属性，也支持直接在当前控制器定义相关属性来覆盖父类的属性，同时TP5中\think\Controller所支持的属性也全部支持。

基类app\common\controller\Backend中所支持的方法如下
``` php
/**
 * 加载语言文件
 * @param string $name
 */
protected function loadlang($name)
{
}

/**
 * 渲染配置信息
 * @param mixed $name 键名或数组
 * @param mixed $value 值 
 */
protected function assignconfig($name, $value = '')
{    
}

/**
 * 生成查询所需要的条件,排序方式
 * @param mixed $searchfields 快速查询的字段
 * @param boolean $relationSearch 是否关联查询
 * @return array
 */
protected function buildparams($searchfields = null, $relationSearch = null)
{    
}

/**
 * 获取数据限制的管理员ID
 * 禁用数据限制时返回的是null
 * @return mixed
 */
protected function getDataLimitAdminIds()
{    
}

/**
 * Selectpage的实现方法
 * 
 * 当前方法只是一个比较通用的搜索匹配,请按需重载此方法来编写自己的搜索逻辑,$where按自己的需求写即可
 * 这里示例了所有的参数，所以比较复杂，实现上自己实现只需简单的几行即可
 * 
 */
protected function selectpage()
{
}
```
我们可以直接在当前控制器使用$this->方法名()来调用所支持的方法，同时TP5中\think\Controller所支持的方法也全部支持。

### 数据限制
在后台开发的过程中经常会有这样的一个需求，每个管理员单独管理自己添加的数据或单独管理自己下级管理员添加的数据，管理员之间的数据是不相通的，每个管理员看到的数据是不同的。在FastAdmin中可以很方便的实现此功能。

首先我们需要在当前控制器添加以下两个属性
``` php
protected $dataLimit = 'auth'; //默认基类中为false，表示不启用，可额外使用auth和personal两个值
protected $dataLimitField = 'admin_id'; //数据关联字段,当前控制器对应的模型表中必须存在该字段
$dataLimit = false; //表示不启用，显示所有数据
$dataLimit = 'auth'; //表示显示当前自己和所有子级管理员的所有数据
$dataLimit = 'personal'; //表示仅显示当前自己的数据
$dataLimitField字段默认为admin_id，请注意添加该字段类型为int(10)。
```
通过以上配置后，在列表加载数据的时候将默认添加条件过滤不属于自己权限的数据，同时在添加时会自动维护admin_id的数据，在编辑、删除的时候会自动控制权限避免越权操作。

如果需要将原有的数据加入到FastAdmin后台管理权限控制当中，比如已有的数据已经有标识归属，但这个归属体系并非是FastAdmin的后台管理员体系。在这个时候我们就需要重写基类的getDataLimitAdminIds方法，将此方法返回数据标识的归属ID数组集合，这样即可使用FastAdmin的后台管理权限进行管理。

### 关联查询
目前FastAdmin后台index方法支持一对一关联查询，比如我们一篇文章有归属分类，我们在列出数据时需要同时列表文章分类名称。

首先我们需要在当前控制器中添加以下属性
``` php
protected $relationSearch = true;
```
然后我们修改控制器的index方法，代码如下：
``` php
public function index()
{
    if ($this->request->isAjax())
    {
        list($where, $sort, $order, $offset, $limit) = $this->buildparams();
        $total = $this->model
                ->with(["category"])
                ->where($where)
                ->order($sort, $order)
                ->count();
        $list = $this->model
                ->with(["category"])
                ->where($where)
                ->order($sort, $order)
                ->limit($offset, $limit)
                ->select();
        $result = array("total" => $total, "rows" => $list);

        return json($result);
    }
    return $this->view->fetch();
}
```
然后在控制器对应的model(非关联model)中添加以下代码：
``` php
public function category()
{
    return $this->belongsTo('Category', 'category_id')->setEagerlyType(0);
}
```
更多的关联用户可以参考TP5关联模型的章节：关联模型

我们在控制器对应的JS中可以直接使用category.id、category.name等关联表的字段
``` php
// 初始化表格
table.bootstrapTable({
    url: $.fn.bootstrapTable.defaults.extend.index_url,
    columns: [
        [
            {field: 'state', checkbox: true, },
            {field: 'id', title: 'ID', operate: '='},
            {field: 'title', title: __('Title'), operate: 'LIKE %...%'},
            {field: 'category.image', title: __('Image'), operate: false, formatter: Table.api.formatter.image},
            {field: 'category.name', title: __('Name'), operate: '='},
            {field: 'ip', title: __('IP'), operate: '='},
            {field: 'createtime', title: __('Create time'), formatter: Table.api.formatter.datetime, operate: 'RANGE', addclass: 'datetimerange'},
            {field: 'operate', title: __('Operate'), table: table, events: Table.api.events.operate, formatter: Table.api.formatter.operate}
        ]
    ],
});
```


### 数据校验
在FastAdmin中默认的add/edit方法可以使用模型验证，验证器位于application/admin/validate/模型名.php中，模型验证默认是关闭的状态，如果需要启用，我们需要在当前控制器定义以下属性
``` php
protected $modelValidate = true; //是否开启Validate验证，默认是false关闭状态
protected $modelSceneValidate = true; //是否开启模型场景验证，默认是false关闭状态
```
当开启模型验证后，我们的添加和修改操作都会首先进行模型验证，验证不通过将会抛出错误信息，具体的模型验证规则可以参考TP5官方文档的模型验证规则：https://www.kancloud.cn/manual/thinkphp5/129355

场景验证可以参考TP5场景验证章节：https://www.kancloud.cn/manual/thinkphp5/129322
### 权限控制
在基类中我们有定义以下两个属性
``` php
protected $noNeedLogin = []; //无需登录的方法,同时也就不需要鉴权了
protected $noNeedRight = []; //无需鉴权的方法,但需要登录
```
比如我们有定义一个方法mywork，而这个方法是不需要登录即可访问的，则我们需要在当前的控制器定义
``` php
protected $noNeedLogin = ['mywork'];
```
比如我们有定义一个方法mytest，而这个方法是需要登录后任何管理员都可以访问，则我们需要在当前的控制器定义
``` php
protected $noNeedRight = ['mytest'];
```
如果我们需要动态定义，请务必放在调用父类的_initialize方法之前，否则是不会生效的。

### 视图渲染
基类app\common\controller\Backend会默认渲染以下几个对象到视图中
``` php 
//渲染站点配置
$this->assign('site', $site);
//渲染配置信息
$this->assign('config', $config);
//渲染权限对象
$this->assign('auth', $this->auth);
//渲染管理员对象
$this->assign('admin', Session::get('admin'));
```
我们可以在视图中使用{$site.name}、{$config.modulename}、{$auth.id}、{$admin.username}来获取我们所需要的数据

$site所支持的数据对应为application/extra/site.php
``` php
$config所支持的数据为
'site'           => $site中的'name', 'cdnurl', 'version', 'timezone', 'languages'字段,
'upload'         => application/extra/upload.php中数据,
'modulename'     => 'admin',
'controllername' => 控制器名,
'actionname'     => 方法名,
'jsname'         => 控制器JS所加载的路径,
'moduleurl'      => 后台module的链接,
'language'       => 当前语言,
'fastadmin'      => application/config.php中fastadmin的配置
```

$auth是一个对象，所对应的类是application/admin/library/Auth.php
$admin是一个当前管理员登录的session数据，存储有管理员的用户名、昵称、ID、头像等信息
如果我们需要在JS中使用以上数据，则使用
``` js
Config.site.name
Config.modulename
```
来获取相关的配置信息

如果我们需要自己在控制器中透传数据到JS中去，则可以使用控制器的assignconfig方法来透传，使用如下
``` php
$this->assignconfig('demo', ['name'=>'名称']);
```
然后我们就可以在JS中使用
``` js
Config.demo.name
```
来获取对应的数据

## 模块
### 前台
#### 会员模块
FastAdmin的前台自带一个简单的会员功能模块，可以进行会员的注册、登录、找回密码、会员中心、修改个人资料、修改密码等操作。

会员模块可用于进行前台会员功能开发时使用。此处的会员模块和API中的会员模块账号是相通的，但他们登录时是不会互相影响的，可以同时登录。

FastAdmin的会员模块有注册几个事件，我们可以在事件中自定义我们的操作。你可以按照以下的方式监听相应的事件行为
``` php
//登录成功后的事件
Hook::add('user_login_successed', function ($user) {
});
//注册成功后的事件
Hook::add('user_register_successed', function ($user) {
});
//会员删除后的事件
Hook::add('user_delete_successed', function ($user) {
});
//会员注销后的事件
Hook::add('user_logout_successed', function ($user) {
});
```

### 公共
#### Token验证
##### 功能介绍
Token验证主要用于会员登录状态信息的维护和验证，通常情况下不需要我们调用此类的方法，在一些特殊情况下我们可以手动调用。

##### 使用示例
获取Token信息
获取Token的详情、关联的会员ID、过期时间、有效期等信息
``` php
Token::get('c2259a37-5fee-4c4b-93b0-1d7313e1d1ac');
```
设置会员的Token信息
新增会员Token并更新，且有效期为3600秒
``` php
Token::set('c2259a37-5fee-4c4b-93b0-1d7313e1d1ac', 1, 3600);
```
判断会员Token是否可用
通过Token和会员ID来判断Token是否可以使用
``` php
Token::check('c2259a37-5fee-4c4b-93b0-1d7313e1d1ac', 1);
```
删除单个会员Token
删除指定的Token
``` php
Token::delete('c2259a37-5fee-4c4b-93b0-1d7313e1d1ac');
```
删除指定会员的所有Token
删除会员ID为1的所有Token
``` php
Token::clear(1);
```
#### 邮件发送
功能介绍
FastAdmin中的邮件发送采用phpmailer进行邮件发送，在使用邮件发送功能前请先在后台常规管理->系统配置中配置好邮件的相关信息。

使用示例
首先我们需要采用单例或实例化一个Email对象
``` php
$email = new \app\common\library\Email;
```
其次我们可以设置邮件主题正文、接收者、标题等信息，比如
``` php
$email->subject('这里是邮件标题')->to('youremail@163.com')->message('这里是邮件正文')->send();
```
如果我们邮件发送失败，想获取错误的详情，可使用

``` php
$email->getError();
```
来获取到错误详情

#### 短信发送
功能介绍
在我们开发过程中经常会用到短信发送和短信推广的功能，FastAdmin提供了一个简单实用的短信接口供开发者调用。

在使用短信发送之前，务必在后台安装好我们短信服务商的插件，如果我们要使用的服务商未提供有FastAdmin的插件，我们则需要自己开发一个，或注册一个sms_send和sms_check的事件用于我们的发送和检测操作。

使用示例
首先最常用的是发送短信，比如我们发送一个注册验证码

> Sms::send('13888888888', '1234', 'register');
发送以后我们有时需要检测验证码是否正确，则可以使用

> Sms::check('1388888888', '1234', 'register');
当然有些时候我们还需要发送营销短信或通知，则可以使用

> Sms::notice('1388888888', '消息内容', 'SMS_10001');
如果我们需要清空指定手机号的验证码，则可以使用

> Sms::flush('13888888888', 'register');
#### 辅助函数
在FastAdmin中我们有提供几个常用的辅助函数。

``` php
/**
 * 获取语言变量值
 * @param string    $name 语言变量名
 * @param array     $vars 动态变量值
 * @param string    $lang 语言
 * @return mixed
 */
function __($name, $vars = [], $lang = '')
{
}

/**
 * 将字节转换为可读文本
 * @param int $size 大小
 * @param string $delimiter 分隔符
 * @return string
 */
function format_bytes($size, $delimiter = '')
{
}

/**
 * 将时间戳转换为日期时间
 * @param int $time 时间戳
 * @param string $format 日期时间格式
 * @return string
 */
function datetime($time, $format = 'Y-m-d H:i:s')
{
}

/**
 * 获取语义化时间
 * @param int $time 时间
 * @param int $local 本地时间
 * @return string
 */
function human_date($time, $local = null)
{
}

/**
 * 获取上传资源的CDN的地址
 * @param string $url 资源相对地址
 * @return string
 */
function cdnurl($url)
{
}

/**
 * 判断文件或文件夹是否可写
 * @param   string $file 文件或目录
 * @return  bool
 */
function is_really_writable($file)
{
}
/**
 * 删除文件夹
 * @param string $dirname 目录
 * @param bool $withself 是否删除自身
 * @return boolean
 */
function rmdirs($dirname, $withself = true)
{
}

/**
 * 复制文件夹
 * @param string $source 源文件夹
 * @param string $dest 目标文件夹
 */
function copydirs($source, $dest)
{
}

function mb_ucfirst($string)
{
}

/**
 * 附加关联字段数据
 * @param array $items 数据列表
 * @param mixed $fields 渲染的来源字段
 * @return array
 */
function addtion($items, $fields)
{
}

/**
 * 返回打印数组结构
 * @param string $var   数组
 * @param string $indent 缩进字符
 * @return string
 */
function var_export_short($var, $indent = "")
{
}
```




## 组件
FastAdmin默认集成了多个第三方组合，如表单验证、文件上传、下拉列表、时间选择、城市选择、Selectpage，所有的组件都必须使用Form.api.bindevent("form[role=form]")来进行初始化，如果不进行初始化是无法对相应组件进行渲染和事件绑定。

如果我们想单独为元素绑定事件和渲染，我们可以使用如下的代码

| 组件         | 代码                                   | 介绍                               |
|--------------+----------------------------------------+------------------------------------|
| 文件上传     | Form.events.plupload($("form"));       | 渲染并绑定form中的上传组件         |
| 动态下拉列表 | Form.events.selectpage($("form"));     | 渲染并绑定form中的Selectpage组件   |
| 表单验证     | Form.events.validator($("form"));      | 渲染并绑定form中的表单验证         |
| 城市选择     | Form.events.citypicker($("form"));     | 渲染并绑定form中的城市选择组件     |
| 日期时间     | Form.events.datetimepicker($("form")); | 渲染并绑定form中的日期时间组件     |
| 下拉列表     | Form.events.selectpicker($("form"));   | 渲染并绑定form中的Selectpicker组件 |
| 附件选择     | Form.events.faselect($("form"));       | 渲染并绑定form中的选择附件组件     |
| 键值组件     | Form.events.fieldlist($("form"));      | 渲染并绑定form中的键值组件         |
| 开关组件     | Form.events.switcher($("form"));       | 渲染并绑定form中的开关组件         |
| 滑块组件     | Form.events.slider($("form"));         | 渲染并绑定form中的滑块组件         |

如果是动态生成的元素，默认是没有绑定事件的，可以使用上述的代码进行绑定事件。其中$("form")为所需绑定事件元素的父级元素，并不限定为必须是一个form，也可以是个div或p元素。

### 参数列表
Form.api.bindevent共有四个元素，分别如下：

| 名称    | 类型           | 说明                                                      |
|---------+----------------+-----------------------------------------------------------|
| form    | string、object | 元素容器，并不限定一定是个form元素，也可以是div或其它元素 |
| success | function       | 成功后的回调，回调参数：data,ret                          |
| error   | function       | 失败后的回调，回调参数：data,ret                          |
| submit  | function       | 提交前的回调，回调参数：success,error                     |

### 常规用法
``` php
Form.api.bindevent($("form"), function(data,ret){
    //成功的回调,如果返回false,将不会出现提示消息
    //return false;
}, function(data, ret){
    //失败的回调,如果返回false,将不会出现提示消息
    //return false;
}, function(success, error){
    //如果返回falsle,将阻止表单的提交
    //return false;
    //如果处理成功后我们可以使用Form.api.submit(this, success, error);再次提交表单
});
```
### 单独绑定组件
如果我们需要给一个文本框单独绑定一个组件，如我们只需要给文本框绑定日期时间选择组件，我们可以采用下面的方式
``` php
require(['form'], function(Form){
    Form.events.datetimepicker($("#parentdiv"));
});
```
注意这里的$("#parentdiv")为文本框父元素的选择对象。

## 表格
### 依赖

在FastAdmin中如果需要使用Bootstrap-table，需要使用require引入table模块。table模块对应的是assets/js/require-table.js文件，FastAdmin做了许多通用方法和默认值操作。

#### 载入依赖
``` js
require(['table'], function(Table){
    //编写实例化代码
    //使用Table对象
});
```
#### 引入CSS
由于表格列表常用于后台管理列表，后台已经默认引入了表格相关的CSS文件，在前台未引入相关的CSS文件，如果你需要在前台使用到Bootstrap-table，则需要手动载入表格相关的CSS文件。如下：
``` html
<link rel="stylesheet" type="text/css" href="__CDN__/assets/libs/bootstrap-table/dist/bootstrap-table.min.css"/>
```








### Table对象
我们引入表格依赖后table后，我们就可以通过Table来进行相关表格的初始化和绑定相关事件。
返回的Table对象包括以下几个对象：
``` json
{
    list:[], //实例化的表格对象列表
    defaults:{}, //默认表格参数
    columnDefaults:{}, //默认列参数
    config:{}, //相关按钮的DOM选择类
    button:{}, //默认编辑、删除、排序按钮配置
    api:{} //封装的API方法
}
```
#### Table.list
其中Table.list存储的是表格实例化后的对象。比如我们实例化的表格有个id="mytable"的属性，则我们可以通过

> Table.list['mytable']
来获取此表格的Bootstrap-table的对象。

#### Table.defaults
Table.defaults是指Bootstrap-table表格参数默认值。修改单一的值，我们可以直接通过

> Table.defaults.showExport = false;
来进行修改

#### Table.columnDefaults
Table.columnDefaults是指Bootstrap-table表格列参数默认值修改单一的值，我们可以直接通过

> Table.columnDefaults.align = 'left';
来进行修改

#### Table.config
Table.config是指表格使用到的按钮和工具栏的DOM选择类，一般情况下不建议修改。

#### Table.button
Table.button是指表格默认编辑、删除、挺拽按钮的配置信息，一般情况下不建议修改。

#### Table.api
Table.api封装了表格常用的方法、单元格事件及渲染方法。在表格中会经常使用到。
``` 
Table.api.init(defaults, columnDefaults, locales) //此方法用于初始化表格默认配置、表格列配置、写入语言包等操作
Table.api.bindevent(table) //此方法用于为表格中的元素绑定相关事件
Table.api.multi(action, ids, table, element) //此方法常用于批量操作请求，内部使用
Table.api.events.operate //操作栏单元格方法
Table.api.events.image //图片栏单元格方法
Table.api.formatter //格式化方法，后面单独介绍
Table.api.buttonlink(column, buttons, value, row, index, type) //按钮链接生成，内部使用
Table.api.replaceurl(url, row, table) //替换URL中的数据
Table.api.selectedids(table) //获取选中的条目ID集合
Table.api.toggleattr(table) //切换复选框状态
Table.api.getrowdata(table, index) //根据行索引获取行数据
Table.api.getrowbyindex(table, index) //根据行索引获取行数据
Table.api.getrowbyid(table, id) //根据主键ID获取行数据
```
#### Table.api.formatter
Table.api.formatter封装了许多FastAdmin表格列表中常用的单元格数据渲染的方法。
```
Table.api.formatter.icon //渲染成图标按钮
Table.api.formatter.image //渲染成单张图片
Table.api.formatter.images //渲染成多张图片
Table.api.formatter.content //内容自动截取
Table.api.formatter.status //渲染成状态
Table.api.formatter.normal //渲染成label
Table.api.formatter.toggle //渲染成开关
Table.api.formatter.url //渲染成文本框链接
Table.api.formatter.search //渲染成搜索链接
Table.api.formatter.addtabs //渲染成打开新选项卡链接
Table.api.formatter.dialog //渲染成弹窗链接
Table.api.formatter.flag //渲染成标志
Table.api.formatter.label //渲染成标志
Table.api.formatter.datetime //渲染成日期时间
Table.api.formatter.operate //渲染成操作栏按钮
Table.api.formatter.buttons //渲染成按钮组
```

# fastadmin 登录方案
https://blog.csdn.net/GhostWHS/article/details/110085937

## 密码
数据库修改fa_admin表的两个字段
密码(password)：c13f62012fd6a8fdf06b3452a94430e5
密码盐(salt)：rpR6Bv
登录密码是 123456

# 上传图片
``` js
		function bjimg(i) {
			// var obj = i[0].files[0];
			// i.prev().attr("src", URL.createObjectURL(obj));
			// 

			// console.log(formdata);return;
			// console.log(i[0].files)
			// return;
			// i.prev().attr("src", data.data.url);

			let formdata = new FormData();
			formdata.append('file', i[0].files[0]);


			return;
			//图片上传
			$.ajax({
				url: '{:Url("ajax/upload")}',
				type: 'POST',
				cache: false,
				data: formdata,
				processData: false,
				contentType: false,
				success: function (data) {
					if (data.code == 1) {
						i.next().val(data.data.url)
						i.prev().prev().attr("src", data.data.url)
					} else {
						alert(data.msg)
						i.prev().prev().attr("src", '')
					}

				}
			});
		}

	
```

> 上传登录权限 \application\api\controller\Common.php ，添加 upload
``` php
    protected $noNeedLogin = ['init','upload'];
```
