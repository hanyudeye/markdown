# Summary

* [项目简介](README.md)
* [系统安装](base/install.md)
* [系统架构](base/architecture.md)
* [数据库规范](database/database.md)
* 命令行CURD
    * [CURD命令大全](curd/command.md)
    * [表结构规范](curd/table.md)
* 配置项
    * [系统配置](config/system.md)
    * [权限忽略配置](config/auth.md)
    * [静态资源配置](config/static.md)
* 控制器
    * [注解权限](backend/controller/annotations.md)
    * [控制器属性](backend/controller/attributes.md)
    * [Curd引用](backend/controller/curd.md)
    * [验证器使用](backend/controller/validate.md)
* 前端
    * [必看基础信息](frontend/base.md)
    * [auth权限验证](frontend/auth.md)
    * [form表单](frontend/form.md)
    * [table数据表格](frontend/table.md)
    * [内置监听事件](frontend/listen.md)
    * [动态下拉选择](frontend/select.md)
    * [上传组件](frontend/upload.md)
    * [时间控件](frontend/date.md)
    * [富文本编辑器](frontend/editor.md)
* 插件功能
    * [插件使用](addons/use.md)
    * [插件开发](addons/dev.md)
* [常见问题](base/question.md)


# 项目特性
* 快速CURD命令行
    * 一键生成控制器、模型、视图、JS文件
    * 支持关联查询、字段预设置等等
* 基于`auth`的权限管理系统
    * 通过`注解方式`来实现`auth`权限节点管理
    * 具备一键更新`auth`权限节点，无需手动输入管理
    * 完善的后端权限验证以及前面页面按钮显示、隐藏控制
* 完善的菜单管理
    * 分模块管理
    * 无限极菜单
    * 菜单编辑会提示`权限节点`
* 完善的上传组件功能
    * 本地存储
    * 阿里云OSS`建议使用`
    * 腾讯云COS
    * 七牛云OSS
* 完善的前端组件功能
   * 对layui的form表单重新封装，无需手动拼接数据请求
   * 简单好用的`图片、文件`上传组件
   * 简单好用的富文本编辑器`ckeditor`
   * 对弹出层进行再次封装，以极简的方式使用
   * 对table表格再次封装，在使用上更加舒服
   * 根据table的`cols`参数再次进行封装，提供接口实现`image`、`switch`、`list`等功能，再次基础上可以自己再次扩展
   * 根据table参数一键生成`搜索表单`，无需自己编写
* 完善的后台操作日志
   * 记录用户的详细操作信息
   * 按月份进行`分表记录`
* 一键部署静态资源到OSS上
   * 所有在`public\static`目录下的文件都可以一键部署
   * 一个配置项切换静态资源（oss/本地）
* 上传文件记录管理
* 后台路径自定义，防止别人找到对应的后台地址

# 简介
## 伪静态配置
  设置服务器的配置，不同服务器不一样，目的都是把 index.php 入口文件隐藏

## 架构总览

```dotenv
EasyAdmin项目目录
├── addons                     //插件存放目录
├── app                        //应用目录
│   ├── admin                 //后台管理应用模块
│   │   ├── config           //后台配置项目录
│   │   ├── controller       //后台控制器目录
│   │   ├── middleware       //后台中间件目录
│   │   ├── model            //后台模型目录
│   │   ├── service          //后台服务类目录
│   │   ├── traits           //后台trait目录
│   │   ├── view             //后台视图目录
│   ├── common                //通用应用模块
│   ├── BaseController.php    //控制器基础类
│   ├── common.php            //应用公共文件
│   ├── event.php             //事件定义文件
│   ├── ExceptionHandle.php   //应用异常处理类
│   ├── middleware.php        //全局中间件定义文件
│   ├── provider.php          //容器Provider定义文件
│   ├── Request.php           //应用请求对象类
├── config                     //配置项目录
├── public
│   ├── static
│   │   ├── admin            //后台静态资源
│   │   │    ├── css        //后台自义定CSS
│   │   │    ├── fonts      //后台自义定字体
│   │   │    ├── images     //后台相关图片资源
│   │   │    ├── js         //后台js, 与后台控制器是一一对应的
│   │   ├── common           //公共资源
│   │   ├── plugs            //插件资源
│   └── uploads               //上传文件目录
│   ├── index.php             //应用入口主文件
│   └── router.php
├── route                      //路由目录  
├── runtime                    //缓存目录    
├── vendor                     //Compposer资源包位置
│   ├── zhongshaofa
│   │   ├── easy-addons      //插件扩展
│   │   ├── easy-admin       //后台扩展
├── view
│   │   ├── index    //前台视图页面
├── LICENSE
├── README.md
├── easyadmin.sql              //数据库安装文件
├── build.php                    
├── composer.json              //Composer包配置
└── think
```


# CURD命令大全

`EasyAdmin`框架以内置快速生成CURD的命令, 包括控制器、视图、模型、JS文件。能够使开发者效率得到进一步提升。

> 备注：在进行CURD命令行之前, 请按照规范设计表结构, 请参数`表结构规范`模块说明。

## 常用命令

```shell
# 生成ea_test_goods表的CURD
php think curd -t test_goods

# 生成ea_test_goods表的CURD, 文件冲突时强制覆盖
php think curd -t test_goods -f 1

# 删除ea_test_goods表的CURD
php think curd -t test_goods -d 1

# 生成ea_test_goods表的CURD, 控制器在目录demo下的Goods.php文件
php think curd -t test_goods -c demo/Goods

# 生成ea_test_goods表的CURD, 模型在目录demo下的Goods.php文件
php think curd -t test_goods -m demo/Goods

# 生成ea_test_goods表的CURD, 并关联ea_test_cate表, 并设置外键为cate_id
php think curd -t test_goods -r test_cate --foreignKey=cate_id --primaryKey=id

# 生成ea_test_goods表的CURD, 并关联ea_test_cate表, 并设置只显示title,image两个字段
php think curd -t test_goods -r test_cate --foreignKey=cate_id --relationOnlyFileds=title,image

# 生成ea_test_goods表的CURD, 并关联ea_test_cate表, 并设置主表外键cate_id在表单的下拉选择显示的关联表的title字段
php think curd -t test_goods -r test_cate --foreignKey=cate_id --relationBindSelect=title

# 生成ea_test_goods表的CURD, 并设置logo字段后缀为单图片
php think curd -t test_goods --imageFieldSuffix=logo

# 生成ea_test_goods表的CURD, 并设置忽略remark, stock字段
php think curd -t test_goods --ignoreFields=remark --ignoreFields=stock
```

## 参数介绍

| 短参 | 长参 | 说明 | 
| --- | --- |--- |
| -t | --table=VALUE | 主表名 |
| -c | --controllerFilename=VALUE | 控制器文件名 |
| -m | --modelFilename=VALUE | 主表模型文件名 |
| -f | --force=VALUE | 强制覆盖模式 |
| -d | --delete=VALUE | 删除模式 |
|  | --checkboxFieldSuffix=VALUE | 复选框字段后缀 |
|  | --radioFieldSuffix=VALUE | 单选框字段后缀 |
|  | --imageFieldSuffix=VALUE | 单图片字段后缀 |
|  | --imagesFieldSuffix=VALUE | 多图片字段后缀 |
|  | --fileFieldSuffix=VALUE | 单文件字段后缀 |
|  | --filesFieldSuffix=VALUE | 多文件字段后缀 |
|  | --dateFieldSuffix=VALUE | 时间字段后缀 |
|  | --switchFields=VALUE | 开关的字段 |
|  | --selectFileds=VALUE | 下拉的字段 |
|  | --editorFields=VALUE | 富文本的字段 |
|  | --sortFields=VALUE | 排序的字段 |
|  | --ignoreFields=VALUE | 忽略的字段 |
| -r | --relationTable=VALUE | 关联表名 |
|  | --foreignKey=VALUE | 关联外键 |
|  | --primaryKey=VALUE | 关联主键 |
|  | --relationOnlyFileds=VALUE | 关联模型中只显示的字段 |
|  | --relationBindSelect=VALUE | 关联模型中的字段用于主表外键的表单下拉选择 |
|  | --relationModelFilename=VALUE | 关联模型文件名 |


## 表名规范 ##

> 好的表命名规范会让你开发起来更加心情开朗，下面是一些建议：

#### 命名规则 `前缀 + 模块名 + 表标识` ####

 * 例如`系统`模块：
    * ea_system_admin
    * ea_system_config
 * 例如`博客`模块：
    * ea_blog_user
    * ea_blog_config
    
#字段规范

* 字段名使用`下划线风格`
* 字段一定要清晰, 尽量`避免使用缩写`命名
* `create_time`、`update_time`、`delete_time`三个字段以int类型保存时间信息


# 配置
## 系统配置

### 系统配置 ###

##### env配置说明 #####

> 后台模块配置说明`EASYADMIN`

| 参数 | 说明 |类型 | 默认| 
| --- | --- |--- |--- |
| ADMIN | 后台路径 | string | admin |
| CAPTCHA | 后台验证码开关 | bool |  true |
| IS_DEMO | 是否为演示环境 | bool | false |
| STATIC_PATH | 静态资源路径 | bool | /static  |
| OSS_STATIC_PREFIX | OSS静态文件路径前缀 | bool | static_easyadmin  |

> 配置示例

``` dotenv
   APP_DEBUG = true
   
   [APP]
   DEFAULT_TIMEZONE = Asia/Shanghai
   
   [DATABASE]
   TYPE = mysql
   HOSTNAME = host.docker.internal
   DATABASE = easyadmin
   USERNAME = root
   PASSWORD = root
   HOSTPORT = 3306
   CHARSET = utf8
   DEBUG = true
   PREFIX = ea_
   
   [LANG]
   default_lang = zh-cn
   
   [EASYADMIN]
   ADMIN = admintest
   CAPTCHA = false
   CDN =
   EXAMPLE = true
   OSS_STATIC_PREFIX = static_easyadmin
```
   
### 超管配置 ###

> 超管不受权限控制，默认获取所有权限

###超管账号配置

配置文件位置：`app/common/constants/AdminConstant.php`

```php
<?php

namespace app\common\constants;

/**
 * 管理员常量
 * Class AdminConstant
 * @package app\common\constants
 */
class AdminConstant
{

    /**
     * 超级管理员，不受权限控制
     */
    const SUPER_ADMIN_ID = 1;

}
```

* 修改常量：SUPER_ADMIN_ID `管理员对应ID`

## 权限忽略配置 ##

#### 登录判断和权限验证忽略配置 ####

配置文件位置：`app/admin/config/admin.php`

```php
<?php

return [

    // 不需要验证登录的控制器
    'no_login_controller' => [
        'login',
    ],

    // 不需要验证登录的节点
    'no_login_node'       => [
        'login/index',
        'login/out',
    ],

    // 不需要验证权限的控制器
    'no_auth_controller'  => [
        'ajax',
        'login',
        'index',
    ],

    // 不需要验证权限的节点
    'no_auth_node'        => [
        'login/index',
        'login/out',
    ],
];
```

> 参数说明

| 参数 | 说明 |
| --- | --- |
| no_login_controller | 不需要验证登录的控制器 |
| no_login_node | 不需要验证登录的节点 |
| no_auth_controller | 不需要验证权限的控制器 |
| no_auth_node | 不需要验证权限的节点 |

### 备注信息 ###

控制器和节点是一个并关系，如果控制器在二级目录下。
写法应该为：system/config （对应位置：`app/admin/controller/system/Config.php`）

## 静态资源配置 ##

* 目前只写了阿里云的静态资源配置。

* 修改静态资源为OSS，会有效减轻服务器压力，并提高资源加载速度（特别是带宽低的服务器）

###步骤

* 在后台修改文件上传为阿里云，并修改对应的配置项
![阿里云上传配置](../images/config.png)
* 修改`.env`文件下的配置：
    * `EASYADMIN.STATIC_PATH`：静态资源地址（例如：https://easyadmin.oss-cn-shenzhen.aliyuncs.com/static_easyadmin）
    * `EASYADMIN.OSS_STATIC_PREFIX`：静态资源上传前缀（例如：static_easyadmin）
* 在项目的主目录下执行：`php think OssStatic`，就会将`public/static`路径下的所有静态资源上传上去
![执行命令行](../images/oss_static.jpg)
* 删除该目录下`runtime/admin/cache`的缓存资源
# 控制器
## 注解权限

### 注解权限 ###

> 注解权限只能获取后台的控制器，也就是该`app/admin/controller`下

### 控制器注解权限 ###

> 控制器类注解tag `@ControllerAnnotation`
 
* 注解类： `EasyAdmin\annotation\ControllerAnnotation`
* 作用范围： `CLASS`
* 参数说明：
    * `title` 控制器的名称（必填）
    * `auth` 是否开启权限控制，默认为true （选填，Enum:`{true, false}`）

##### 示例 #####

>备注：注解前请先引用`use EasyAdmin\annotation\ControllerAnnotation;`

```php
<?php
namespace app\admin\controller;

use app\common\controller\AdminController;
use EasyAdmin\annotation\ControllerAnnotation;

/**
 * @ControllerAnnotation(title="测试控制器")
 */
class Test extends AdminController
{
    
}
```

### 方法节点注解权限 ###

>方法节点类注解tag `@NodeAnotation`
 
* 注解类： `EasyAdmin\annotation\NodeAnotation`
* 作用范围： `METHOD`
* 参数说明：
    * `title` 方法节点的名称（必填）
    * `auth` 是否开启权限控制，默认为true （选填，Enum:`{true, false}`）
    
###示例

>备注：注解前请先引用`use EasyAdmin\annotation\NodeAnotation;`

```php
<?php
namespace app\admin\controller;

use app\common\controller\AdminController;
use EasyAdmin\annotation\ControllerAnnotation;
use EasyAdmin\annotation\NodeAnotation;

/**
 * @ControllerAnnotation(title="测试控制器")
 */
class Test extends AdminController
{

    /**
     * @NodeAnotation(title="列表")
     */
    public function index(){
        echo __METHOD__;
    }
}
```

### 更新权限节点 ###

* 使用命令`php think node`进行更新权限节点。

* 或者在后台节点管理里面点击更新。

![执行命令行](../../images/node.png)

## 控制器属性 ##

后台`所有`控制器都应该需要去继承该基类`app/common/controller/AdminController.php`

> 目前系统内部默认的属性有：

| 参数 | 说明 | 类型 | 默认 |
| --- | --- | --- | --- |
| model | 当前模型对象 | model | null |
| relationSearch | 是否关联查询 | bool | false |
| sort | 列表排序规则 | array |  ['id' => 'desc']|
| allowModifyFields | 允许修改的字段 | array |  ['status', 'sort', 'remark', 'is_delete', 'is_auth', 'title']|
| noExportFields | 不导出的字段信息 | array |  ['delete_time', 'update_time']|
| selectWhere | 下拉选择条件 | array | [] |
| layout | 模板布局, false取消 | string| 'layout/default' |
## Curd引用

### Curd trait引入 ###

后台使用Curd trait, 能大大提高开发效率以及代码的可复用性, 文件位置：`app/admin/traits/Curd.php`

>默认的CURD方法有：

| 参数 | 说明 |
| --- | --- |
| index | 列表 |
| add | 添加 |
| edit | 编辑 |
| delete | 删除 |
| export | 导出 |
| modify | 属性修改 |

### 使用方法 ###

* 在类里面引入`use \app\admin\traits\Curd;`
* 在类直接引入`use EasyAdmin\annotation\NodeAnotation;`,（备注：因为方法内有使用到权限注解，至少要引入该类，不然会在节点更新的时候报出异常）
* 初始化当前模型

>代码示例

```php
<?php
namespace app\admin\controller;

use app\admin\model\SystemConfig;
use app\common\controller\AdminController;
use EasyAdmin\annotation\ControllerAnnotation;
use EasyAdmin\annotation\NodeAnotation;
use think\App;

/**
 * @ControllerAnnotation(title="测试控制器")
 */
class Test extends AdminController{

    use \app\admin\traits\Curd;
    
    public function __construct(App $app){
        parent::__construct($app);
        $this->model = new SystemConfig();
    }
}
```

### 覆盖方法修改 ###

> 因为默认的Curd不适用你的需求，请复制`app/admin/traits/Curd.php`对应的方法到你的控制器下进行覆盖修改。

### `index()`列表关联查询 ###

* 修改控制器的属性`relationSerach`为true
* 模型关联请使用该方法`withJoin()`

> 代码示例`控制器`

```php
<?php
namespace app\admin\controller\mall;

use app\admin\model\MallGoods;
use app\admin\traits\Curd;
use app\common\controller\AdminController;
use EasyAdmin\annotation\ControllerAnnotation;
use EasyAdmin\annotation\NodeAnotation;
use think\App;

/**
 * @ControllerAnnotation(title="商城商品管理")
 */
class Goods extends AdminController
{

    use Curd;

    protected $relationSerach = true;

    public function __construct(App $app)
    {
        parent::__construct($app);
        $this->model = new MallGoods();
    }

    /**
     * @NodeAnotation(title="列表")
     */
    public function index()
    {
        if ($this->request->isAjax()) {
            if (input('selectFields')) {
                return $this->selectList();
            }
            list($page, $limit, $where) = $this->buildTableParames();
            $count = $this->model
                ->withJoin('cate', 'LEFT')
                ->where($where)
                ->count();
            $list = $this->model
                ->withJoin('cate', 'LEFT')
                ->where($where)
                ->page($page, $limit)
                ->order($this->sort)
                ->select();
            $data = [
                'code'  => 0,
                'msg'   => '',
                'count' => $count,
                'data'  => $list,
            ];
            return json($data);
        }
        return $this->fetch();
    }
}
```

> 代码示例`模型`

```php
<?php
namespace app\admin\model;

use app\common\model\TimeModel;

class MallGoods extends TimeModel
{

    protected $deleteTime = 'delete_time';

    public function cate()
    {
        return $this->belongsTo('app\admin\model\MallCate', 'cate_id', 'id');
    }

}
```

### `modify()`属性修改限制 ###

> 为了安全，modify方法默认允许修改的字段有：

* status
* sort
* remark
* is_delete
* is_auth
* title

> 如果默认字段不适用你的需求请, 请在控制器下覆盖该属性`allowModifyFileds`值即可。

```php
<?php
namespace app\admin\controller;

use app\common\controller\AdminController;
use EasyAdmin\annotation\ControllerAnnotation;
use EasyAdmin\annotation\NodeAnotation;

/**
 * @ControllerAnnotation(title="测试控制器")
 */
class Test extends AdminController{

    use \app\admin\traits\Curd;
    
    protected $allowModifyFileds = ['username','sort'];
    
}
```




## 验证器使用 ##

* 此验证器的使用只针对于后台控制器
* 需要先继承该类`app\common\controller\AdminController`

验证规则的编写参考ThinkPHP的文档。

调用`validate`方法进行验证，如果验证未通过，会直接调用`$this->error();`方法。

> 代码示例

```php
<?php
namespace app\admin\controller;

use app\common\controller\AdminController;

class Test extends AdminController{

    public function login(){
        $post = $this->request->post();
        $rule = [
            'username|用户名' => 'require',
            'password|密码'  => 'require',
        ];
        $this->validate($post, $rule);
        $this->success('成功');
    }
}
```
# 特殊字段

* 默认`开关`字段：
    * status
* 默认`忽略`字段：
    * update_time
    * delete_time

## 以特殊字符结尾的规则

* 默认`单图片`字段后缀：
    * image
    * logo
    * photo
    * icon
* 默认`多图片`字段后缀：
    * images
    * photos
    * icons
* 默认`单文件`字段后缀：
    * file
* 默认`多文件`字段后缀：
    * files
    
## 注释说明

类型和数据可以通过特殊字符进行定义, 例如：`性别 {radio} (1:男, 2:女, 0:未知)`, 代表的就是单选框, 数据集合为：`['1'=>'男','2'=>'女','0'=>'未知']`。 

### 字符说明

* 类型：
    * `{}`包起来, 例如：`{radio}`
* 数据集：
    * `()`包起来, 例如：`(1:男, 2:女, 0:未知)`
    

### 类型大全

| 类型 | 说明 | 备注 |
| --- | --- | ---|
| text | 普通文本框 | | 
| image | 单图片 | | 
| images | 多图片 | | 
| file | 单文件 | | 
| files | 多文件 | | 
| date | 时间组件 | 需配合`数据集`使用,时间控件类型选择 | 
| editor | 富文本 | | 
| textarea | 普通文本 | | 
| select | 下拉选择| 需配合`数据集`使用 | 
| switch | 开关组件 | 需配合`数据集`使用| 
| checkbox | 多选框 |需配合`数据集`使用 | 
| radio | 单选框|需配合`数据集`使用 | 



### 完整示例

```sql
CREATE TABLE `ea_test_goods` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `sex` int(11) DEFAULT '1' COMMENT '性别 {radio} (1:男, 2:女, 0:未知)',
  `checkbox` int(11) DEFAULT '1' COMMENT '测试多选 {checkbox} (1:选择1, 2:选择2, 3:选择3)',
  `mode` int(11) DEFAULT '1' COMMENT '购买模式 {select} (1:正常购买, 2:秒杀活动)',
  `cate_id` int(11) DEFAULT NULL COMMENT '分类ID {select}',
  `title` varchar(20) NOT NULL COMMENT '商品名称',
  `logo` varchar(500) DEFAULT NULL COMMENT '商品logo {image}',
  `images` text COMMENT '商品图片 {images} (|)',
  `describe` text COMMENT '商品描述',
  `market_price` decimal(10,2) DEFAULT '0.00' COMMENT '市场价',
  `discount_price` decimal(10,2) DEFAULT '0.00' COMMENT '折扣价',
  `sales` int(11) DEFAULT '0' COMMENT '销量',
  `virtual_sales` int(11) DEFAULT '0' COMMENT '虚拟销量',
  `stock` int(11) DEFAULT '0' COMMENT '库存',
  `total_stock` int(11) DEFAULT '0' COMMENT '总库存',
  `test_datetime` datetime DEFAULT NULL COMMENT '测试完整时间{date}(datetime)',
  `up_date` datetime DEFAULT NULL COMMENT '上架时间{date}(date)',
  `sort` int(11) DEFAULT '0' COMMENT '排序',
  `status` tinyint(1) unsigned DEFAULT '1' COMMENT '状态 {radio} (0:禁用,1:启用)',
  `remark` varchar(255) DEFAULT NULL COMMENT '备注说明',
  `create_time` int(11) DEFAULT NULL COMMENT '创建时间',
  `update_time` int(11) DEFAULT NULL COMMENT '更新时间',
  `delete_time` int(11) DEFAULT NULL COMMENT '删除时间',
  PRIMARY KEY (`id`),
  KEY `cate_id` (`cate_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT COMMENT='商品列表';
```

```sql
CREATE TABLE `ea_test_cate` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(20) NOT NULL COMMENT '分类名',
  `image` varchar(500) DEFAULT NULL COMMENT '分类图片 {image}',
  `sort` int(11) DEFAULT '0' COMMENT '排序 {sort}',
  `status` tinyint(1) unsigned DEFAULT '1' COMMENT '状态 {switch} (0:禁用,1:启用)',
  `remark` varchar(255) DEFAULT NULL COMMENT '备注说明',
  `create_time` int(11) DEFAULT NULL COMMENT '创建时间',
  `update_time` int(11) DEFAULT NULL COMMENT '更新时间',
  `delete_time` int(11) DEFAULT NULL COMMENT '删除时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `title` (`title`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT COMMENT='商品分类';
```


# 图片上传
三个地方的cover 都要改

``` html
<div class="layui-form-item">
<label class="layui-form-label required">用户头像</label>
<div class="layui-input-block layuimini-upload">
<input name="cover" class="layui-input layui-col-xs6" lay-reqtext="请上传用户头像" placeholder="请上传用户头像" value="{$row.cover|default=''}">
<div class="layuimini-upload-btn">
<span><a class="layui-btn" data-upload="cover" data-upload-number="one" data-upload-exts="png|jpg|ico|jpeg"><i class="fa fa-upload"></i> 上传</a></span>
<span><a class="layui-btn layui-btn-normal" id="select_head_img" data-upload-select="cover" data-upload-number="one"><i class="fa fa-list"></i> 选择</a></span>
</div>
</div>
</div>
```



# 前端
## 必看基础信息 ##

系统做了一些封装，先查看此文档会有效解决你的疑问

#后台控制器与JS的绑定

* 控制器中JS的目录对应为：`public/static/admin/js`
* 文件命名为: `小写+下划杠`
* `控制器`的每一个`方法`对应JS的`Controller`对象的一个`属性`
* 每一个JS文件都需要引入`admin`模块，并执行监听` ea.listen();`;

> 例子

* 控制器对应的PHP文件`app/admin/controller/mall/Cate.php`
* 控制器对应的JS文件`public/static/admin/js/mall/cate.js`
* 每一个控制里面的`方法`对应js里面的`属性`就会自动进行加载

```js
define(["jquery", "easy-admin"], function ($, ea) {

    var init = {
        table_elem: '#currentTable',
        table_render_id: 'currentTableRenderId',
        index_url: 'mall.cate/index',
        add_url: 'mall.cate/add',
        edit_url: 'mall.cate/edit',
        del_url: 'mall.cate/del',
        export_url: 'mall.cate/export',
        modify_url: 'mall.cate/modify',
    };

    var Controller = {

        index: function () {
            ea.table.render({
                init: init,
                modifyReload: true,
                cols: [[
                    {type: "checkbox"},
                    {field: 'id', width: 80, title: 'ID'},
                    {field: 'sort', width: 80, title: '排序', edit: 'text'},
                    {field: 'title', minWidth: 80, title: '分类名称'},
                    {field: 'image', minWidth: 80, title: '分类图片', search: false, templet: ea.table.image},
                    {field: 'remark', minWidth: 80, title: '备注信息'},
                    {field: 'status', title: '状态', width: 85, search: 'select', selectList: {0: '禁用', 1: '启用'}, filter: 'status', templet: ea.table.switch},
                    {field: 'create_time', minWidth: 80, title: '创建时间', search: 'range'},
                    {
                        width: 250,
                        title: '操作',
                        templet: ea.table.tool,
                        operat: ['edit', 'delete']
                    }
                ]],
            });

            ea.listen();
        },
        add: function () {
            ea.listen();
        },
        edit: function () {
            ea.listen();
        },
    };
    return Controller;
});
```



## 前端auth权限验证 ##

> 为什么前端也做权限认证，权限认证不应该是后端做的吗？
这里的权限认证指的是前端判断是否有权限查看的数据（例如：添加、删除、编辑之类的按钮），这些只有在点击到对应的url之后，后端才会进行权限认证。
为了避免用户困扰，可以在此用上前端的权限认证，判断是否显示还是隐藏

### 视图页面内权限例子 ###

* 第一种示例, 通过php的`auth()`方法生成`layui-hide`样式属性。

```html
<button class="layui-btn layui-btn-normal layui-btn-sm {if !auth('system.menu/add')}layui-hide{/if}" data-open="system.menu/add" data-title="添加" data-full="true"><i class="fa fa-plus"></i> 添加</button>
```

* 第二种, 通过php的`auth()`方法判断, 是否显示html

```html
{if !auth('system.menu/add')}
<button class="layui-btn layui-btn-normal layui-btn-sm" data-open="system.menu/add" data-title="添加" data-full="true"><i class="fa fa-plus"></i> 添加</button>
{/if}
```

### table表格内权限例子 ###

* table表格里面，一种table表格`上方`的操作栏`toolbar`需要权限判断是否显示。
* 另外一种是table表格`里面`的列操作栏`operat`也需要权限判断是否显示。

##### 事先定义权限规则 #####

* 需要在对应的表格的`dom`事先全好对应的权限规则。
* 权限规则为：`data-auth-` + 规则名
* 例如：data-auth-`add`="{:auth('goods.cate/add')}", `add`就是对应的权限规则。

> 下方例子中共定义了：`add` `edit` `delete` `stock` 四种权限规则

```html
<div class="layuimini-container">
    <div class="layuimini-main">
        <table id="currentTable" class="layui-table layui-hide"
               data-auth-add="{:auth('mall.goods/add')}"
               data-auth-edit="{:auth('mall.goods/edit')}"
               data-auth-delete="{:auth('mall.goods/delete')}"
               data-auth-stock="{:auth('mall.goods/stock')}"
               lay-filter="currentTable">
        </table>
    </div>
</div>
```

##### 表格上方的`toolbar`权限验证 #####

下面简单讲解权限验证，完整的`toolbar`的使用和配置请查看`table`模块。

* `toolbar`内置三个内置权限验证：`add`,`delete`,`export`

```js
toolbar: ['refresh','add', 'delete', 'export']
```

* 自定义`toolbar`, 在`auth`属性上填写`权限规则`

```js
toolbar: ['refresh',
      [{
         text: ' 添加',
         open: init.add_url,
         class: 'layui-btn layui-btn-normal layui-btn-sm',
         icon: 'fa fa-plus ',
         title: '添加',
         auth: 'add',
         extend: ' data-full="true"',
       }],
      'delete', 'export'],
```

##### 表格内列操作`operat`的权限验证 #####

* `operat`内置三个内置权限验证：`edit`,`delete`

```js
operat: ['edit', 'delete']
```

* 自定义`operat`, 在`auth`属性上填写`权限规则`

```js
operat: [
     [{
        class: 'layui-btn layui-btn-xs layui-btn-success',
        method: 'open',
        text: '编辑',
        auth: 'edit',
        url: init.edit_url,
        extend: 'data-full="true"',
      }, {
        class: 'layui-btn layui-btn-xs layui-btn-normal',
        method: 'open',
        text: '入库',
        auth: 'stock',
        url: init.stock_url,
        extend: '',
    }],
      'delete']
```


### 完整例子 ###

```js
define(["jquery", "easy-admin"], function ($, ea) {

    var init = {
        table_elem: '#currentTable',
        table_render_id: 'currentTableRenderId',
        index_url: 'mall.goods/index',
        add_url: 'mall.goods/add',
        edit_url: 'mall.goods/edit',
        del_url: 'mall.goods/del',
        export_url: 'mall.goods/export',
        modify_url: 'mall.goods/modify',
        stock_url: 'mall.goods/stock',
    };

    var Controller = {

        index: function () {
            ea.table.render({
                init: init,
                modifyReload: true,
                toolbar: ['refresh',
                    [{
                        text: ' 添加',
                        open: init.add_url,
                        class: 'layui-btn layui-btn-normal layui-btn-sm',
                        icon: 'fa fa-plus ',
                        title: '添加',
                        auth: 'add',
                        extend: ' data-full="true"',
                    }],
                    'delete', 'export'],
                cols: [[
                    {type: "checkbox"},
                    {field: 'id', width: 80, title: 'ID'},
                    {field: 'sort', width: 80, title: '排序', edit: 'text'},
                    {field: 'cate.title', minWidth: 80, title: '商品分类'},
                    {field: 'title', minWidth: 80, title: '商品名称'},
                    {field: 'logo', minWidth: 80, title: '分类图片', search: false, templet: ea.table.image},
                    {field: 'market_price', width: 100, title: '市场价', templet: ea.table.price},
                    {field: 'discount_price', width: 100, title: '折扣价', templet: ea.table.price},
                    {field: 'total_stock', width: 100, title: '库存统计'},
                    {field: 'stock', width: 100, title: '剩余库存'},
                    {field: 'virtual_sales', width: 100, title: '虚拟销量'},
                    {field: 'sales', width: 80, title: '销量'},
                    {field: 'status', title: '状态', width: 85, selectList: {0: '禁用', 1: '启用'}, templet: ea.table.switch},
                    {field: 'create_time', minWidth: 80, title: '创建时间', search: 'range'},
                    {
                        width: 250,
                        title: '操作',
                        templet: ea.table.tool,
                        operat: [
                            [{
                                class: 'layui-btn layui-btn-xs layui-btn-success',
                                method: 'open',
                                text: '编辑',
                                auth: 'edit',
                                url: init.edit_url,
                                extend: 'data-full="true"',
                            }, {
                                class: 'layui-btn layui-btn-xs layui-btn-normal',
                                method: 'open',
                                text: '入库',
                                auth: 'stock',
                                url: init.stock_url,
                                extend: '',
                            }],
                            'delete']
                    }
                ]],
            });

            ea.listen();
        },
        add: function () {
            ea.listen();
        },
        edit: function () {
            ea.listen();
        },
        stock: function () {
            ea.listen();
        },
    };
    return Controller;
});
```




## form表单 ##

* form表单已经集成了快速验证以及提交的方法，无需手动重组数据再进行提交
* 默认提交的数据是提交当前`url`，如需提交到其它页面，修改一下`lay-submit`的值即可
* 在对应的js文件内引入`easy-admin`模块，并执行`ea.listen();`进行监听

### 必填值 ###

> 使用`lay-verify="required"`，会自动生成必填小红点， 并且会在提交的时候进行必填验证

```html
        <div class="layui-form-item">
            <label class="layui-form-label">权限名称</label>
            <div class="layui-input-block">
                <input type="text" name="title" class="layui-input" lay-verify="required" placeholder="请输入权限名称" value="">
                <tip>填写权限名称。</tip>
            </div>
        </div>
```

### `lay-submit` 事件监听 ###

使用该事件监听，会自动获取表单数据以`POST`方式自动提交。

>与`lay-submit`事件监听的相关参数：

| 参数 | 说明 | 类型 | 是否必填| 默认 | 备注|
| --- | --- | --- |--- | --- |--- |
| lay-submit | 监听表单自动提交 | string | 是 | 当前地址 | 为空则提交的当前地址。如果需要提交到其它地址，此处填写对应的地址。 |
| data-refresh | 提交成功后是否需要刷新 | bool | 否 |  true |  提交成功后，关闭弹出层，`刷新`父层的`table列表`，如果不需要刷新，或者没有用到弹出层，此处改为false |
| lay-filter | layui内置过滤器 | string | 否 | 自动生成唯一值 |  无特殊需求，此处无需填写，会自动生成 |

> 例子

```html
        <div class="layui-form-item text-center">
            <button type="submit" class="layui-btn layui-btn-normal layui-btn-sm" lay-submit>确认</button>
            <button type="reset" class="layui-btn layui-btn-primary layui-btn-sm">重置</button>
        </div>
```

### 提交前置操作 ###

> 事件监听方法：`ea.listen(preposeCallback, ok, no, ex)`，可能用得比较多的还是`preposeCallback`的提交前置回调。

| 参数 | 说明 | 类型 | 是否必填 | 备注|
| --- | --- | --- |--- | --- |
| preposeCallback | 表单提交前的前置回调 | function | 否 | 一般用于需要重新组装一些特殊的数据再提交  |
| ok | 提交成功后的回调 | function | 否 | |
| no | 提交失败后的回调 | function | 否 | |
| ex | 提交异常后的回调 | function | 否 | |

```js
ea.listen(function (data) {
    
    // 此处进行数据重组再返回
    data.test = '测试重组数据';
    
   return data;
});
```


### 完整例子 ###

```html
<div class="layuimini-container">
    <form id="app-form" class="layui-form layuimini-form">

        <div class="layui-form-item">
            <label class="layui-form-label">权限名称</label>
            <div class="layui-input-block">
                <input type="text" name="title" class="layui-input" lay-verify="required" placeholder="请输入权限名称" value="">
                <tip>填写权限名称。</tip>
            </div>
        </div>

        <div class="layui-form-item layui-form-text">
            <label class="layui-form-label">备注信息</label>
            <div class="layui-input-block">
                <textarea name="remark" class="layui-textarea"  placeholder="请输入备注信息"></textarea>
            </div>
        </div>

        <div class="hr-line"></div>
        <div class="layui-form-item text-center">
            <button type="submit" class="layui-btn layui-btn-normal layui-btn-sm" lay-submit>确认</button>
            <button type="reset" class="layui-btn layui-btn-primary layui-btn-sm">重置</button>
        </div>

    </form>
</div>
```

## table列表 ##

虽然layui已经提供了很多方便的方法，但是还是不够简便，目前系统对layui table模块进行了重新封装，并兼容所有的layui table的方法。

使得开发起来更加得心应手，减轻工作量。

### `init`初始化配置 ###

建议在此处统一配置table容器以及相关的链接地址。另外还可以自己进行扩展属性。

> 初始化的参数有

| 参数 | 说明 | 类型 | 是否必填 | 备注|
| --- | --- | --- |--- |--- |
| table_elem | table容器或者dom | string/dom| 是 |   |
| table_render_id | 容器唯一 id | string | 否 | |
| index_url | 列表接口 | string| 是 | |
| add_url | 添加接口 | string| 否 | 需用添加功能必填 |
| edit_url | 编辑接口 | string| 否 | 需用编辑功能必填 |
| delete_url | 删除接口 | string| 否 | 需用删除功能必填 |
| export_url | 导出接口 | string| 否 | 需用导出功能必填 |
| modify_url | 属性修改接口 | string| 否 | 需用属性修改功能必填（例如：状态的切换） |

> 实例，下方`stock_url`就是扩展属性

```js
    var init = {
        table_elem: '#currentTable',
        table_render_id: 'currentTableRenderId',
        index_url: 'mall.goods/index',
        add_url: 'mall.goods/add',
        edit_url: 'mall.goods/edit',
        delete_url: 'mall.goods/delete',
        export_url: 'mall.goods/export',
        modify_url: 'mall.goods/modify',
        stock_url: 'mall.goods/stock',
    };
```

### 表格实例化 ###

表格实例化方法为`ea.table.render()`, 兼容layui table的所有功能，另外还扩展了一些新的功能。

### 扩展表格参数 ###

这些是基于layui的table的进行扩展的基础参数，如需查看其他的参数，请去layui官网查看。
 
| 参数 | 说明 | 类型 | 是否必填| 默认值 | 备注|
| --- | --- | --- |--- | --- | --- |
| init | `init`初始化配置 | object| 是 | |  一般情况下，请传入上方配置好的初始化参数 |
| search | 是否开启搜索功能 | bool| 否 | true | 开启会自动根据`列`生成搜索表单 |
| modifyReload | 修改属性时是否刷新表格 | bool| 否 | true |  |
| toolbar | table操作栏 | object| 否 | ['refresh','add','delete','export'] | 除了这些内置的，还可以自己进行扩展 |

> 代码示例

```js
    ea.table.render({
        init: init,
        toolbar: [...表格toolbar...],
        cols: [...请参考下方列参数...],
    });
```

### 表格toolbar操作栏 ###

* 默认内置有四种toolbar操作方法，分别是：
    * `refresh`
    * `add`
    * `delete`
    * `export`
* 另外可以根据下方提供的参数进行自定义扩展

| 参数 | 说明 | 类型 | 是否必填| 默认值 | 备注|
| --- | --- | --- |--- | --- | --- |
| class | 样式信息 | string| 否 | |   |
| icon | 图标信息 | string| 否 | | 在行操作里面，不建议使用图标 |
| title | 提示信息 | string| 否 | 为空则读取`text`属性 | |
| text | 文本信息 | string| 否 | 为空则读取`title`属性 | |
| method | 执行方式 | string| 否 | open | 可用值，请参考下方参数说明 |
| url | 请求链接 | string| 是 | | |
| auth | 权限规则 | string| 是 | | 权限规则，具体请参考配置`auth权限验证`模块 |
| checkbox | 是否多选 | bool| 否 | false | 如果为true, 不管是弹出层还是直接请求, 请求时会携带上勾选的id值 |
| extend | 扩展属性 | string| 否 | | 例如弹出层全屏操作，可以加上：`data-full="true"` |

> 相关参数说明

* `method` 执行方式：
    * `open` 弹出层打开
    * `request` 直接请求
    
> 示例

```js
   toolbar: ['refresh',
       [{
          text: '添加',
          url: init.add_url,
          method: 'open',
          auth: 'add',
          class: 'layui-btn layui-btn-normal layui-btn-sm',
          icon: 'fa fa-plus ',
          extend: 'data-full="true"',
        }],
       'delete', 'export'],
```

### 搜索表单生成器 ###

提供快捷搜索表单生成器，根据table表格初始化时的列参数进行动态生成。

> 下方是相关的表格列参数

| 参数 | 说明 | 类型 | 是否必填| 默认值 | 备注|
| --- | --- | --- |--- | --- | --- |
| search | 搜索类型 | string/bool | 否 | true | 可用值，请参考下方参数说明 |
| searchOp | 搜索条件 | string| 否 | %*% | 可用值，请参考下方参数说明 |
| searchTip | 搜索提示语 | string| 否 | 默认获取`title`参数值自动生成 |  |
| searchValue | 表单初始化值 | string| 否 |  |  |
| selectList | 下拉列表值 | object| 否 |  | 需要`search`参数等于`select`时才生效 |
| fieldAlias | 字段别名 | string| 否 | 与`field`参数相等 | 某些特殊情况下才需要，正常用不上 |

> 相关参数说明

* `search` 搜索类型：
    * `false` 关闭搜索
    * `true` 开启搜索
    * `select` 下拉选择
    * `range` 时间范围
    * `time` 时间格式
* `searchOp` 搜索条件：
    * `=` 精确搜索
    * `%*%` 模糊搜索
    * `*%` 右匹配模糊搜索
    * `%*` 左匹配模糊搜索
    * `range` 范围搜索

> 代码示例

```js
    cols: [[
        {type: "checkbox"},
        {field: 'id', width: 80, title: 'ID'},
        {field: 'sort', width: 80, title: '排序', edit: 'text'},
        {field: 'title', minWidth: 80, title: '商品名称'},
        {field: 'logo', minWidth: 80, title: '分类图片', search: false, templet: ea.table.image},
        {field: 'status', title: '状态', width: 85, selectList: {0: '禁用', 1: '启用'}, templet: ea.table.switch},
        {field: 'create_time', minWidth: 80, title: '创建时间', search: 'range'},
    ]],
```

### 列operat操作栏 ###

* 默认内置有两种operat操作方法，分别是：
    * `edit` 
    * `delete`
* 另外可以根据下方提供的参数进行自定义扩展

| 参数 | 说明 | 类型 | 是否必填| 默认值 | 备注|
| --- | --- | --- |--- | --- | --- |
| class | 样式信息 | string| 否 | |   |
| icon | 图标信息 | string| 否 | | 在行操作里面，不建议使用图标 |
| title | 提示信息 | string| 否 | 为空则读取`text`属性 | |
| text | 文本信息 | string| 否 | 为空则读取`title`属性 | |
| method | 执行方式 | string| 否 | open | 可用值，请参考下方参数说明 |
| url | 请求链接 | string| 是 | | |
| auth | 权限规则 | string| 是 | | 权限规则，具体请参考配置`auth权限验证`模块 |
| field | 绑定行字段 | string| 否 | id | 会自动根据此字段生成链接后缀 |
| extend | 扩展属性 | string| 否 | | 例如弹出层全屏操作，可以加上：`data-full="true"` |

> 相关参数说明

* `method` 执行方式：
    * `open` 弹出层打开
    * `request` 直接请求
    
> 示例

```js
    operat: [
        [{
            text: '编辑',
            url: init.edit_url,
            method: 'open',
            auth: 'edit',
            class: 'layui-btn layui-btn-xs layui-btn-success',
            extend: 'data-full="true"',
        }, {
            text: '入库',
            url: init.stock_url,
            method: 'open',
            auth: 'stock',
            class: 'layui-btn layui-btn-xs layui-btn-normal',
        }],
        'delete']
```

### 列内置templet方法 ###

| 方法 | 说明 | 备注|
| --- | --- | --- |
| ea.table.list | 根据行的`selectList`返回对应列表值 | 一般类型之类的会用到 |
| ea.table.image | 显示图片 | 行参数`imageHeight`是控制图片的高度 |
| ea.table.url | 格式化显示链接 |  |
| ea.table.switch | 生成开关组件 |  |
| ea.table.price | 格式化为价格 |  |
| ea.table.percent | 格式化为百分比 |  |
| ea.table.icon | 显示图标 |  |
| ea.table.value | 格式化数据 | 多层对象数据的显示 |
| ea.table.tool | 列操作栏 | 自动生成列操作栏 |

> 示例

```js
    cols: [[
        {field: 'head_img', minWidth: 80, title: '头像', templet: ea.table.image},
        {field: 'status', title: '状态', width: 85, search: 'select', selectList: {0: '禁用', 1: '启用'}, templet: ea.table.switch},
        {width: 250, title: '操作', templet: ea.table.tool}
    ]],
```


### 完整例子 ###

```js
define(["jquery", "easy-admin"], function ($, ea) {

    var init = {
        table_elem: '#currentTable',
        table_render_id: 'currentTableRenderId',
        index_url: 'mall.goods/index',
        add_url: 'mall.goods/add',
        edit_url: 'mall.goods/edit',
        delete_url: 'mall.goods/delete',
        export_url: 'mall.goods/export',
        modify_url: 'mall.goods/modify',
        stock_url: 'mall.goods/stock',
    };

    var Controller = {

        index: function () {
            ea.table.render({
                init: init,
                toolbar: ['refresh',
                    [{
                        text: '添加',
                        url: init.add_url,
                        method: 'open',
                        auth: 'add',
                        class: 'layui-btn layui-btn-normal layui-btn-sm',
                        icon: 'fa fa-plus ',
                        extend: 'data-full="true"',
                    }],
                    'delete', 'export'],
                cols: [[
                    {type: "checkbox"},
                    {field: 'id', width: 80, title: 'ID'},
                    {field: 'sort', width: 80, title: '排序', edit: 'text'},
                    {field: 'cate.title', minWidth: 80, title: '商品分类'},
                    {field: 'title', minWidth: 80, title: '商品名称'},
                    {field: 'logo', minWidth: 80, title: '分类图片', search: false, templet: ea.table.image},
                    {field: 'market_price', width: 100, title: '市场价', templet: ea.table.price},
                    {field: 'discount_price', width: 100, title: '折扣价', templet: ea.table.price},
                    {field: 'total_stock', width: 100, title: '库存统计'},
                    {field: 'stock', width: 100, title: '剩余库存'},
                    {field: 'virtual_sales', width: 100, title: '虚拟销量'},
                    {field: 'sales', width: 80, title: '销量'},
                    {field: 'status', title: '状态', width: 85, selectList: {0: '禁用', 1: '启用'}, templet: ea.table.switch},
                    {field: 'create_time', minWidth: 80, title: '创建时间', search: 'range'},
                    {
                        width: 250,
                        title: '操作',
                        templet: ea.table.tool,
                        operat: [
                            [{
                                text: '编辑',
                                url: init.edit_url,
                                method: 'open',
                                auth: 'edit',
                                class: 'layui-btn layui-btn-xs layui-btn-success',
                                extend: 'data-full="true"',
                            }, {
                                text: '入库',
                                url: init.stock_url,
                                method: 'open',
                                auth: 'stock',
                                class: 'layui-btn layui-btn-xs layui-btn-normal',
                            }],
                            'delete']
                    }
                ]],
            });

            ea.listen();
        },
        add: function () {
            ea.listen();
        },
        edit: function () {
            ea.listen();
        },
        stock: function () {
            ea.listen();
        },
    };
    return Controller;
});
```

## 监听 ##

### 快捷弹出层 ###

简单对layui的弹出层进行封装，提高开发效率。

| 参数 | 说明 | 类型 | 是否必填| 默认值 | 备注|
| --- | --- | --- |--- | --- | --- |
| data-open | 打开弹出层 | string| 是 | | 参数值为弹出层的url  |
| data-title | 弹出层标题 | string| 是 | |   |
| data-full | 是否全屏打开 | string| 否 | false |   |
| data-width | 弹出层宽度 | string| 否 | |   |
| data-height | 弹出层高度 | string| 否 |  |   |

> 代码示例

```html
<button class="layui-btn layui-btn-normal layui-btn-sm" data-open="system.menu/add" data-title="添加" data-full="true"><i class="fa fa-plus"></i> 添加</button>
```

### 快捷直接请求 ###

以`ajax` post方式进行直接请求，无需编写js代码，一般用于修改状态之类的场景。

| 参数 | 说明 | 类型 | 是否必填| 默认值 | 备注|
| --- | --- | --- |--- | --- | --- |
| data-request | 直接请求 | string| 是 | | 参数值为直接请求的url  |
| data-title | 请求时的提示语 | string| 是 | |   |
| data-direct | 是否直接请求 | bool| 否 | | 如果为`true`，将会直接对链接进行请求，一般用于文件链接之类的  |
| data-table | 绑定的table id | string| 否 | | 如果有，请求成功会自动刷新对应的数据表格  |

```html
<a data-request="system.node/refreshNode?force=0" data-title="确定更新新节点？" data-table="currentTableRenderId">更新节点</a>
```

### 图片放大镜 ###

点击图片，以弹出层方式进行放大图片。

| 参数 | 说明 | 类型 | 是否必填| 默认值 | 备注|
| --- | --- | --- |--- | --- | --- |
| data-image | 图片放大镜 | string| 是 | | 此处是图片放大后的标题  |
| src | 图片地址 | string| 是 | |   |

> 代码示例

```html
<img src="test.jpg" data-image="测试图片放大">
```

## 时间控件参数 ##

* 系统默认内置了快速初始化控件的方法。
* 如果无法满足你当前需求, 请参考layui的文档自行编写。

| 参数 | 说明 | 类型 | 是否必填| 默认值 | 备注|
| --- | --- | --- |--- | --- | --- |
| data-date | 开启时间控件 | string | 是 |  | 如果填写值, 此处是 format - 自定义格式 |
| data-date-type | 选择类型 | string | 否 | datetime | |
| data-date-range | 开启范围选择 | string | 否 | - | 此处的值用于拼接 |

> 相关参数说明

* `data-date-type` 类型有：
    * `year` 年选择器
    * `month` 年月选择
    * `date` 日期选择器
    * `time` 时间选择器
    * `datetime` 日期时间选择器

### 代码示例 ###

```html
<div class="layui-form-item">
    <label class="layui-form-label">上架时间</label>
    <div class="layui-input-block">
        <input type="text" name="up_date" data-date="" data-date-type="date" data-date-range="-" class="layui-input"  placeholder="请选择上架时间" value="">
    </div>
</div>>
```

## 富文本编辑器初始化 ##

* 系统默认内置了`ckeditor4`编辑器, 只需要简单的初始化操作就可以轻松使用富文本编辑器。
* 在`class`引入`editor`样式即可完成初始化操作。
* 可以使用`rows`来控制编辑器的高度。

> 代码示例

```html
<div class="layui-form-item">
    <label class="layui-form-label">商品描述</label>
    <div class="layui-input-block">
        <textarea name="describe" rows="20" class="layui-textarea editor" placeholder="请输入商品描述">{$row.describe|default=''}</textarea>
    </div>
</div>
```

## 动态生成下拉选择 ##

根据接口动态获取下拉选择

| 参数 | 说明 | 类型 | 是否必填| 默认值 | 备注|
| --- | --- | --- |--- | --- | --- |
| data-select | 拉下选择 | string| 是 | | 参数值为请求的url  |
| data-fields | 查询的字段 | string| 是 | |   |
| data-value | 下拉选中的值 | string| 否 | |   |

> 代码示例

```html
<div class="layui-form-item">
    <label class="layui-form-label">商品分类</label>
    <div class="layui-input-block">
        <select name="cate_id" lay-verify="required" data-select="{:url('mall.cate/index')}" data-fields="id,title" data-value="{$row.cate_id|default=''}">
        </select>
    </div>
</div>
```

> 返回的json格式

```json
{
	"code": 1,
	"msg": null,
	"data": [{
		"id": 9,
		"title": "手机"
	}, {
		"id": 10,
		"title": "家用"
	}, {
		"id": 11,
		"title": "如何"
	}],
	"url": "http:\/\/admin.host\/admin\/mall.goods\/edit?id=8",
	"wait": 3
}
```

## 上传

### 上传参数 ###

| 参数 | 说明 | 类型 | 是否必填| 默认值 | 备注|
| --- | --- | --- |--- | --- | --- |
| data-upload | 上传选中的input | string | 是 | | |
| data-upload-number | 单传还是多传 | string | 是 | one | |
| data-upload-exts | 限制上传的文件类型 | string | 否 | * | 使用分割符连接 |
| data-upload-icon | 文件失效时显示图标 | string | 否 |image| |
| data-upload-sign | 多文件拼接的分割符 | string | 否 | / |

### 选择参数 ###

| 参数 | 说明 | 类型 | 是否必填| 默认值 | 备注|
| --- | --- | --- |--- | --- | --- |
| id | 唯一的ID值 | string | 是 | | |
| data-upload-select | 下拉选中的input | string | 是 | | |
| data-upload-number | 单传还是多传 | string | 是 | one | |
| data-upload-exts | 限制上传的文件类型 | string | 否 | * | 使用分割符连接 |

### 代码示例 ###

```html
<div class="layui-form-item">
    <label class="layui-form-label required">商品LOGO</label>
    <div class="layui-input-block layuimini-upload">
        <input name="logo" class="layui-input layui-col-xs6" lay-verify="required" placeholder="请上传分类图片" value="{$row.logo|default=''}">
        <div class="layuimini-upload-btn">
            <span><a class="layui-btn" data-upload="logo" data-upload-number="one" data-upload-exts="png|jpg|ico|jpeg" data-upload-icon="image"><i class="fa fa-upload"></i> 上传</a></span>
            <span><a class="layui-btn layui-btn-normal" id="select_logo" data-upload-select="logo" data-upload-number="one" data-upload-mimetype="image/*"><i class="fa fa-list"></i> 选择</a></span>
        </div>
    </div>
</div>
```
