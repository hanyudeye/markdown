## fastadmin

fastadmin：以TP5为基础的，把框架里免费的插件安装上学一学，开发文档看完，跟着操作一遍，多写写API接口；

第六天：了解一些并发、缓存、数据库优化等知识；
第七天：看看网上大神的PHP技能树进阶，准备一份看起来还行的简历，等面试吧；

## 密码

数据库修改fa_admin表的两个字段
密码(password)：c13f62012fd6a8fdf06b3452a94430e5
密码盐(salt)：rpR6Bv
登录密码是 123456
## 命令行
### 一键生成CURD
> 在Fast

常用命令
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

## 数据库
这里提供的是数据库表字段规则在你创建表时使用，当按如下的规则进行字段命名、类型设置和备注时
使用php think crud -t 表名生成CRUD时会自动生成对应的HTML元素和组件
