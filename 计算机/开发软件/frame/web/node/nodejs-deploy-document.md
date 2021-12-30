nodejs线上部署文档教程

# nodejs-deploy-document

## 目录
* [购买域名和服务器](#购买域名服务器)
* [远程登录服务器](#远程登录服务器)
* [配置root及应用管理权限](#配置root及应用管理权限)
* [配置通过ssh实现无密码登录](#配置通过ssh实现无密码登录)
* [修改服务器默认登录端口增强安全性](#修改服务器默认登录端口增强安全性)
* [配置iptables和Fail2Ban增强安全防护](#配置iptables和Fail2Ban增强安全防护)
* [搭建服务器的nodejs环境](#搭建服务器的nodejs环境)
* [通过pm2让node服务常驻](#通过pm2让node服务常驻)
* [配置nginx反向代理nodejs端口](#配置nginx反向代理nodejs端口)
* [更改域名的DNS更服务器](#更改域名的DNS更服务器)
* [ubuntu安装mongodb](#ubuntu安装mongodb)
* [往线上mongodb导入数据库](#往线上mongodb导入数据库)
* [为线上数据库配置读取权限](#为线上数据库配置读取权限)
* [从一台服务器迁移数据到另一个线上mongodb](#从一台服务器迁移数据到另一个线上mongodb)
* [数据库备份](#数据库备份)
* [上传数据库备份到七牛私有云](#上传数据库备份到七牛私有云)
* [上传项目代码到线上私有git仓库](#上传项目代码到线上私有git仓库)
* [从本地发布上线和更新服务器的nodejs项目](#从本地发布上线和更新服务器的nodejs项目)
* [项目部署的一般流程总结](#项目部署的一般流程总结)
* [申请选购SSL证书](#申请选购SSL证书)


### 购买域名服务器
推荐购买阿里云的服务器，新手有六个月的免费套餐，再去阿里云的万网购买域名，一定要备案

建议选择ubuntu 14.04操作系统，本教程是在该系统下操作的，区域选择离自己最近的区域

### 远程登录服务器
windows系统下载putty客户端 登陆ssh命令行

下载链接 [https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html "悬停显示")

远程登录服务器     mac/linux 命令  

```
ssh root@公网ip
```

然后输入密码

查看硬盘使用情况 `df -h`

查看服务器硬盘列表 `fdisk -l`

退出服务器 `control + d`

### 配置root及应用管理权限
添加管理员

```
adduser 管理员名称
```

输入密码，full name以及room

设置管理员权限,让他代理root的权限

```
gpasswd -a 管理员名称 sudo
```
进入编辑界面

```
sudo visudo
```
`root ALL=(ALL:ALL) ALL` 在这行下面添加一行 `管理员名称 ALL=(ALL:ALL) ALL`

第一个ALL对所有sudo生效，第二个管理员名称可以以任何用户执行命令，第三个管理员名称可以以任何的组执行命令，第四个这个规则适用于所有命令

一句话 管理员名称可以向root一样，只要提供密码可以运行任何root可以运行的命令

加#的行是注释

保存`control + x`，再按下`shift + y`，再点回车
visudo NOPASSWORD
新开命令行  

```
ssh 管理员名称@公网ip
```
输入密码，就可以登录管理员账户

如果失败  可以在root下执行`service ssh restart` 重启一下，然后再登录管理员账户

### 配置通过ssh实现无密码登录
在本地根目录输入`pwd`可以查看本地根目录地址

通过输入`cd`进入本地根目录，输入`ls -a`查看有没有`.ssh`文件夹，如果为空没有配置过

id_rsa(私钥)，id_rsa.pub(公钥)，如果有，更改先需要备份
如果没有.ssh文件夹，先创建文件夹`mkdir .ssh`

本地生成私钥公钥命令，邮箱可以随便填

```
ssh-keygen -t rsa -b 4096 -C "chenyu@yunserver.com"
```
一路回车，默认选择

进入.ssh目录，`cat id_rsa`查看私钥，`cat id_rsa.pub`查看公钥

开启ssh代理
 
```
eval "$(ssh-agent -s)"
```
`cd .ssh`进入.ssh目录

ssh key加入代理中

```
ssh-add ~/.ssh/id_rsa
```
新开命令行，登录服务器命令行执行相同命令

```
ssh-keygen -t rsa -b 4096 -C "chenyu@yunserver.com"
```
```
eval "$(ssh-agent -s)"
```
进入服务器.ssh目录

```
ssh-add ~/.ssh/id_rsa
```
windows下搜id_rsa生成私钥公钥方法

在.ssh目录下，接着输入授权文件钥匙

```
vi  authorized_keys
```
输入:wq!回车    这样就创建了授权文件

验证原理： 本地电脑的公钥放到服务器的验证公钥的文件下，当本地电脑登录服务器的时候 ，服务器会去验证提交过来的私钥，以及之前拷贝过来的公钥，当算法匹配之后，才能登录服务器

先切换到本地命令行下，在.ssh目录下`cat id_rsa.pub`打印出公钥，复制公钥

切换到服务器命令行下，进入.ssh目录

`vi authorized_keys`打开授权文件，先按i键，进入输入模式，粘贴刚才复制的公钥，按下esc键，输入:wq!保存

接着在服务器命令行下首先授权这个文件，输入

```
chmod 600 authorized_keys
```
重启ssh服务

```
sudo service ssh restart
```
如果已经操作过sudo，一定时间内不用输入密码

先不要退出，再新开一个命令行  输入

```
ssh 管理员名称@公网IP
```
就可以直接登录无需输入密码

### 修改服务器默认登录端口增强安全性
修改配置文件

```
sudo vi /etc/ssh/sshd_config
```
输入当前账号密码，进入编辑页面，有必要新开一个窗口登录服务器，防止修改错误，忘记了导致无法登录
将port改为xxxx(需要在阿里云服务器安全组配置规则里增加相同的端口号)，确保`UserDns`为no，最后一行添加`AllowUser 管理员名称`

按esc，:wq!保存退出

重启ssh服务

```
sudo service ssh restart 
```
关闭root密码登录，也是增强安全性

```
sudo vi /etc/ssh/sshd_config
```
修改`PermitRootLogin` 为 no，`PasswordAuthentication` 为 no，`PermitEmptyPasswords`为 no
设置以后无论是`ssh root@公网IP`还是`ssh -p 3389 root@公网IP`都登录不进去了

现在登录服务器命令为

```
ssh -p 端口号 管理员名称@公网IP
```

### 配置iptables和Fail2Ban增强安全防护
暂且跳过，不影响项目部署，主要是为了增强安全性

### 搭建服务器的nodejs环境
更新一下系统

```
sudo apt-get update
```
安装包文件

```
sudo apt-get install vim openssl build-essential libssl-dev wget curl git
```
打开github 找到`creationix/nvm`

复制`wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash`

新打开窗口登录服务器

```
nvm install v8.1.3
```
```
nvm use v8.1.3
```
指定系统的默认node版本

```
nvm alias default v8.1.3  
```
`node -v`  查看node版本

安装cnpm

```
npm install -g cnpm --registry=https://registry.npm.taobao.org
```
输入命令

```
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```
安装模块

```
cnpm i pm2 webpack gulp grunt-cli -g
```

在服务器更目录下

```
vim app.js
```
编辑文件

```
const http = require("http");

http.createServer(function(req, res) {
   res.writeHead(200, {'Content-Type': 'text/plain'})
   res.end('hello world!');

}).listen(8080)

console.log('server running on http://47.94.211.202:8080/');
```
启动服务

```
node app.js 
```
如果端口无法访问，需要到阿里云控制台安全组配置里面配置TCP端口，自定义TCP，端口范围8080/8080，地址段访问，授权对象 0.0.0.0/0

### 通过pm2让node服务常驻
启动node服务

```
pm2 start app.js
```
查看服务列表

```
pm2 list 
```
查看应用详细信息

```
pm2 show  应用名字
```
查看日志， control + c退出

```
pm2 logs
```

### 配置nginx反向代理nodejs端口
原理：nodejs不具备权限通过外网访问80端口，用root权限启动对80端口的监听，把来自80端口的流量分配给node服务的另外一个端口，实现node服务的代理，实际上就是把80端口的请求都转发到nodejs启动的8080端口上

先关闭apache服务

```
sudo service apache  stop
```
删除apache服务

```
update-rc.d -f apache2 remove
```
```
sudo apt-get remove apache2
```
更新包列表

```
sudo apt-get update
```
安装nginx

```
sudo apt-get install nginx
```
查看版本

```
nginx -v
```
进入目录`cd /etc/nginx/conf.d` `pwd`查看路径

新建配置文件，文件命名以域名加端口的方式归类，多个项目对应多个服务，考虑负载均衡

```
sudo vi cypws-cn-8080.conf
```
编辑配置文件

```
upstream cypws {
  server 127.0.0.1:8080;
}

server {
  listen 80;
  server_name 服务器公网ip地址;

  location / {
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forward-For $proxy_add_x_forwarded_for;
    proxy_set_header Host $http_host;
    proxy_set_header X-Nginx-Proxy true;
    proxy_pass http://cypws;
    proxy_redirect off;

  }
}
```
返回上一层目录 `/etc/nginx`

编辑配置文件

```
sudo vi nginx.conf
```
确保`include /etc/nginx/conf.d/*.conf;` 注释打开

检测配置文件有没有错误

```
sudo nginx -t
```
重启nginx服务器
  
```
sudo nginx -s reload
```
重启pm2

```
pm2 restart all
```
在浏览器上直接访问服务器ip地址就可以了

去掉浏览器网络的nginx版本信息，进入/etc/nginx目录

```
sudo vi nginx.conf
```
把`server_tokens off;`注释拿掉

重启服务器`sudo service nginx reload`这样再访问浏览器是，network里的nginx版本信息就不会显示了


### 更改域名的DNS更服务器
先注册DNSPOD域名解析商 [https://support.dnspod.cn/Kb/showarticle/tsid/40/](https://support.dnspod.cn/Kb/showarticle/tsid/40/ "悬停显示")

在DNPOD下，复制2个DNS短地址到阿里云域名控制台，基本管理，DNS修改

在DNSPOD域名解析里面添加域名，添加记录，A记录

在服务器下，进入目录`cd /etc/nginx/conf.d`，然后修改`cypws-cn-8080.conf` `server_name`改成自己备案的域名地址就可以了，如www.xxxx.cn

然后通过域名访问就可以了

### ubuntu安装mongodb
按照文档的步骤操作[https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/ "悬停显示")

在服务器更目录下执行命令

```
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 0C49F3730359A14518585931BC711F9BA15703C6
```
选14.04

```
echo "deb [ arch=amd64 ] http://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.4.list
```
```
sudo apt-get update
```
```
sudo apt-get install -y mongodb-org
```
如果下在比较慢，可以进入`/etc/apt/sources.list.d`目录

```
sudo vi mongodb-org-3.4.list
```
将`http://repo.mongodb.org/apt/ubuntu` 改为`mirrors.aliyun.com/mongodb/apt...`保存退出

```
sudo apt-get update
```
```
sudo apt-get install -y mongodb-org
```
开启mongodb服务

```
sudo service mongod start
```
检查是否开启，查看日志文件

```
cat /var/log/mongodb/mongod.log
```
打开mongodb命令行环境

```
mongo
```
停止服务

```
sudo service mongod stop
```
重启
 
```
sudo service mongod restart
```
修改mongodb默认端口号

```
sudo vi /etc/mongod.conf
```
```
net:
  port: 29999
  bindIp: 127.0.0.1
```
重启
 
```
sudo service mongod restart
```
有防火墙需要修改防火墙端口，没有防火墙配置直接登录`mongo --port 29999`

### 往线上mongodb导入数据库
导出打包本地数据库
   
```
mongodump -h 127.0.0.1:27017 -d 数据库名 -o 数据库名
```
打包压缩
  
```
tar zcvf 数据库名-backup.tar.gz 数据库名-backup
```
在服务器创建文件夹
   
```
mkdir dbbackup
```
将压缩包从本地上传到服务器
   
```
scp -P 服务器端口号 ./数据库名-backup.tar.gz 管理员名称@服务器公网IP:/home/管理员名称/dbbackup
```
在服务器上解压缩
  
```
tar xvf 数据库名-backup.tar.gz
```
进入目录`cd 项目名称-backup/`

导入数据库

在服务器更目录下`mongorestore --host 127.0.0.1:29999 -d 数据库名 ./dbbackup/项目名称-backup/数据库名/`

导入成功之后进入数据库`mongo --port 29999`

`use 项目名称` `show tables` `db.项目名称items.find().pretty()`查看表数据

本地导出单表

```
mongoexport -d 数据库名 -c 单表名 -q '{"name": {$ne: null}}' -o ./数据库名-表名.json
```
导入到服务器数据库

```
scp -p 服务器端口号 ./数据库名-表名.json 管理员名称@服务器公网IP:/home/管理员名称/dbbackup
```
在服务器上，进入dbbackup目录

```
mongoimport --host 127.0.0.1:29999 -d 数据库名 -c 表名 ./数据库名-表名.json
```
删除数据库

```
mongo --host 127.0.0.1:29999 -d 数据库名 --eval "db.dropDatabase()"
```

### 为线上数据库配置读取权限
先导入数据库，再配置数据库权限

添加管理员账号，先进入mongodb命令行环境

```
mongo --port 29999
```
切换数据库
   
```
use admin
```
添加管理员

```
db.createUser({user: '管理员名(_owner)', pwd: 'xxx', roles: [{role: 'userAdminAnyDatabase', db: 'admin'}]})
```
对用户登录进行授权，返回1成功
  
```
db.auth('管理员名','密码')   
```
切换到其他数据库
   
```
use 数据库名
```
添加该数据库用户，具备读写操作

```
db.createUser({user: '用户名(数据库名_runner)', pwd: 'xxx', roles: [{role: 'readWrite', db: '数据库名'}]})
```
创建备份角色，备份操作，只能读不能写

```
db.createUser({user: '备份用户名(数据库名_wheel)', pwd: 'xxx', roles: [{role: 'read', db: '数据库名'}]})
```
添加其他数据权限流程，先到admin下授权db.auth，切换到其他数据库，创建用户角色，再创建备份角色

开启验证模式，修改配置文件

```
sudo /etc/mongod.conf
```
将#security:  修改为
 
```
security:
  authorization: 'enabled'
```
重启mongodb
    
```
sudo service mongod restart
```
进入数据库`mongo --port 29999`

直接`show dbs`是没有权限查询

先进入admin`use admin`，再认证`db.auth('管理员名','密码')`

再执行`show dbs`就有权限查询了，`exit`退出数据库

直接登录某个数据库命令 
  
```
mongo 127.0.0.1:29999/数据库名 -u 用户名(数据库名_runner) -p 密码
```
`show tables` `db.logins.find({})`就可以查询数据库了


### 从一台服务器迁移数据到另一个线上mongodb
原理：先从一台服务器将数据库备份到本地，再从本地上传到另一个服务器

在服务器上创建文件夹`mkdir db``cd db`

导出数据库

```
mongodump -h 127.0.0.1:29999 -d 数据库名 -u 备份用户名(数据库名_wheel) -p 密码 -o 输出文件夹(数据库名-old)
```
打包
 
```
tar zcvf 打包文件夹名(数据库名-old.tar.gz) 输出文件夹(数据库名-old)
```
导出单表

```
mongoexport  -h 127.0.0.1:29999 -d 数据库名 -u 备份用户名(数据库名_wheel) -p 密码 -c 单表名 -q '{"name": {$ne: null}}' -o ./输出文件名(数据库名-单表名-old.json)
```
切换到本地命令行，将线上数据库下载到本地

```
scp -P 3389 管理员名@服务器公网IP:/home/管理员名/db/打包文件夹名(数据库名-old.tar.gz) ./
```
将线上单表下载到本地

```
scp -P 3389 管理员名@服务器公网IP:/home/管理员名/db/输出文件名(数据库名-单表名-old.json) ./
```
从本地重新上传数据库到目标服务器

进入目标服务器`mkdir newdb`

上传数据库和单表

```
scp -P 3389 ./输出文件名(数据库名-单表名-old.json) 管理员名@服务器公网IP:/home/管理员名/newdb
scp -P 3389 ./打包文件夹名(数据库名-old.tar.gz) 管理员名@服务器公网IP:/home/管理员名/newdb
```
解压缩tar
   
```
tar xvf 打包文件夹名(数据库名-old.tar.gz)
```
连上数据库`mongo --port 29999 `

`use admin`

`db.auth('管理员名(_owner)','密码')`

创建新数据库

```
use 新数据库名(项目名-数据库名-targt)
db.createUser({user: '项目名-数据库名-targt', pwd: 'xxx', roles: [{role: 'readWrite', db: '新数据库名(项目名-数据库名-targt)'}]})
```
导入数据库

```
mongorestore -h 127.0.0.1:29999 -d 新数据库名 -u 数据库用户名 -p 密码 ./newdb/数据库名-old/数据库名
```
导入单表

```
mongoimport -h 127.0.0.1:29999 -d 新数据库名 -u 数据库用户名 -p 密码 -c users  ./newdb/数据库名-单表名-old.json 
```
检查，登录数据库

```
mongo 127.0.0.1:29999/新数据库名  -u 数据库用户名 -p 密码
```
`show tables``db.users.find({})`

### 数据库备份
在服务器更目录，创建数据库备份执行脚本

```
mkdir tasks
cd tasks
vi 数据库名.backup.sh
```
编辑脚本文件

```
#!/bin/sh

backUpFolder=/home/管理员名/backup/数据库名
date_now=`date +%Y_%m_%d_%H%M`
backFileName=数据库名_$date_now

cd  $backUpFolder
mkdir -p $backFileName

mongodump -h 127.0.0.1:29999 -d 数据库名 -u 数据库名_wheel -p 密码 -o $backFileName

tar zcvf $backFileName.tar.gz $backFileName

rm -rf $backFileName
```
在更目录下，创建文件夹

```
mkdir backup
cd backup
mkdir 数据库名
```
在服务器根目录下执行脚本文件
  
```
sudo sh ./tasks/数据库名.backup.sh
```
启动系统的定时任务 
 
```
crontab -e
```
选择第`2. /bin/nano`

编辑

```
19 00 * * * sh /home/管理员名称/tasks/项目名称.backup.sh
```
//分钟 小时 `control + x` `shift + y`  回车

### 上传数据库备份到七牛私有云
到七牛云官方文档查看nodejs文件上传[https://developer.qiniu.com/kodo/sdk/1289/nodejs#5](https://developer.qiniu.com/kodo/sdk/1289/nodejs#5 "悬停显示")

在tasks目录下创建
 
```
vi upload.js
```

```
var qiniu = require('qiniu');
var config = new qiniu.conf.Config();
// 空间对应的机房
config.zone = qiniu.zone.Zone_z0;
// 是否使用https域名
//config.useHttpsDomain = true;
// 上传是否使用cdn加速
//config.useCdnDomain = true;
var parts = process.env.NODE_ENV.split('@');
var file = parts[1] + '.tar.gz';
var localFile = parts[0] + '/' + file;
console.log(localFile);
var formUploader = new qiniu.form_up.FormUploader(config);
var putExtra = new qiniu.form_up.PutExtra();

var accessKey = '2dAyWqJrZNlHGtWTxdxVsDWlKMvRpDMTh9XqvHod';
var secretKey = 'hAlZcnd_7zv8q9WTDv7bbylNvMC_DDzCEj4hoxta';
var mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
//要上传的空间
bucket = '项目名称deploydb';
var options = {
  scope: bucket,
};
var putPolicy = new qiniu.rs.PutPolicy(options);
var uploadToken=putPolicy.uploadToken(mac);

//上传到奥七牛要保存的文件名
key = file;

// 文件上传
formUploader.putFile(uploadToken, key, localFile, putExtra, function(respErr,
  respBody, respInfo) {
  if (respErr) {
    throw respErr;
  }
  if (respInfo.statusCode == 200) {
    console.log(respBody);
  } else {
    console.log(respInfo.statusCode);
    console.log(respBody);
  }
});
```
再编辑备份脚本文件`vi 项目名称.backup.sh`，在最后一行添加：

```
NODE_ENV=$backUpFolder@$backFileName node /home/管理员名称/tasks/upload.js
```
在tasks目录下，安装七牛模块`cnpm i qiniu`

执行脚本文件`sh ./项目名称.backup.sh`

修改完善定时任务`crontab -e` 每一行命令对应一个任务，可以设置每一天备份一次

安装mysql

```
sudo apt-get install mysql-server mysql-client
```
设置root密码  test123

### 上传项目代码到线上私有git仓库
可选免费的私有git仓库`git.oschina.net`

本地上传私钥到线上仓库，`cd .ssh`，把id_ras.pub内容拷贝到线上git仓库SSH公钥，添加公钥

在本地配置全局的git email和密码

服务器安装git

```
sudo apt-get install git
```
mongoose连接线上数据库方式

```
mongoose.connect('mongodb://username:password@host:port/database?options...');
```
在服务器上创建项目文件夹

```
sudo mkdir /www
cd /www
sudo mkdir 项目名
pwd 项目路径就是/www/项目名
```
赋予管理员修改项目文件夹和production文件夹的读写修改的权限
在www目录下
 
```
sudo chmod 777 项目名
```
进去项目文件夹内
 
```
sudo chmod 777 production
```
在本地项目根目录新建文件`ecosystem.json`

```
{
    "apps": [
        {
            "name": "", //名称
            "script": "server/app.js", //程序入库
            "cwd": "./", //根目录
            "env": {
                "COMMON_VARIABLE": "true"
            },
            "env_production": {
                "NODE_ENV": "production"
            },
            "exec_interpreter": "babel-node",
            "error_file":"./server/logs/app-err.log",//错误输出日志
            "out_file":"./server/logs/app-out.log",  //日志
            "log_date_format":"YYYY-MM-DD HH:mm Z" //日期格式
        }
    ],
    "deploy": {
        "production": {
            "user": "管理员名称",
            "host": [
                "服务器公网IP"
            ],
            "port": "服务器登录端口",
            "ref": "origin/master",
            "repo": "git仓库地址",
            "path": "/www/项目名/production",
            "ssh_options": "StrictHostKeyChecking=no",
            "post-deploy": "cnpm install && npm run build && pm2 startOrRestart ecosystem.json --env production",
            "env"  : {
                "NODE_ENV": "production"
            }
        }
    }
}
```
然后通过git提交代码

在本地项目根目录下，第一次执行拷贝项目代码到服务器上
  
```
pm2 deploy ecosystem.json production setup
```

### 从本地发布上线和更新服务器的nodejs项目
因为pm2在服务器上用的是非交互的ssh连接方式，在服务器更目录下`vi .bashrc`，将这几行注释

```
#case $- in
#    *i*) ;;
#     *) return;;
#esac
```
保存`:wq!` 加载 `.bashrc`      
```
source .bashrc
```

配置nginx反向代理

在服务器根目录下`cd /etc/nginx/conf.d`

编辑配置文件`sudo vi  xxxx-3000.conf`

```
upstream 项目名 {
  server 127.0.0.1:3000;
}

server {
  listen 80;
  server_name 域名地址(xxx.xxx.com);

  location / {
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forward-For $proxy_add_x_forwarded_for;
    proxy_set_header Host $http_host;
    proxy_set_header X-Nginx-Proxy true;
    proxy_pass http://项目名;
    proxy_redirect off;

  }
  
  location ~* ^.+\.(jpg|jpeg|gif|png|ico|css|js|pdf|txt) {
    root /www/项目名称/production/current/client/dist;
  }
}
```
保存，重启服务器
 
```
sudo nginx -s reload
```
如果有防火墙需打开防火墙相应端口

```
sudo /etc/iptables.rules
```
增加两行
 
```
-A INPUT -s 127.0.0.1 -p tcp --destination-port 3000 -m state --state NEW,ESTABLISHED -j ACCEPT
-A OUTPUT -d 127.0.0.1 -p tcp --source-port 3000 -m state --state ESTABLISHED -j ACCEPT
```
保存，重启防火墙
  
```
sudo iptables-restore < /etc/iptables.rules
```

本地修改同步到线上服务器

首先保证本地代码修改后提交git

将代码同步到线上，并启动服务,在本地项目执行命令

```
pm2 deploy ecosystem.json production
```
线上服务器需要全局安装`babel-cli`


### 项目部署的一般流程总结
1.在dnspod域名管理网站添加二级子域名

2.在本地项目后端服务入口文件写好没有用过的端口号

3.本地项目，修改mongodb本地和线上的连接方式，线上写好用户名和密码

4.本地，写好发布脚本ecosystem.json，修改名字，仓库地址，服务器ip，端口号

5.服务器上，在/www下新建项目文件夹，授权文件夹`sudo chomd 777 文件夹名`

6.服务器下，新增nginx配置文件，在`/etc/nginx/conf.d`, 可直接复制其他配置文件`sudo cp 文件夹名 文件夹名` ，编辑nginx 配置文件，`sudo vi ...` 修改域名，端口号，名称

7.在本地，先提交代码到仓库

8.部署代码，第一次，初始化服务器项目目录结构，`pm2 deploy ecosystem.json production setup`，第二次部署发布`pm2 deploy ecosystem.json production`

9.在服务器上，检查`pm2 list` ,如有问题，不断重启，先停pm2服务，检查日志，`pm2 logs`

10.修改防火墙，`sudo vi /etc/iptables.rules`，增加新的端口，

   重启防火墙，`iptables-restore < /etc/iptables.rules`
   
   重启`nginx  sudo nginx -s reload`

### 申请选购SSL证书
国内，又拍云 ，腾讯云，阿里云，七牛云，推荐腾讯云

管理中心-》云产品-》ssl证书管理-》申请证书->手动DNS验证》查看证书详情

复制主机记录，记录值-》dnspod-》添加记录，cname方式粘贴主机记录和记录值，再添加对应A记录  域名和服务器ip

腾讯云查询-》下载证书

在本地下载的证书nginx目录下上传到服务器更目录
   
```
scp -P 3389 ./2_mini.iblack7.com.key 管理员名@....:/home/管理员名/
scp -P 3389 ./1_mini.iblack7.com.bundle.crt 管理员名@....:/home/管理员名/
```
再上传free的证书 ，再执行一遍上面的代码

在服务器根目录

```
mkdir ssl
mv 1_*  ./ssl/
mv 2_*  ./ssl/
sudo mv ssl /www/
```

证书安装可参考 腾讯云 证书管理，详情，执行文档，nginx安装方法，复制server,不要复制location部分

修改nginx配置文件，在服务器上进入 `cd /etc/nginx/conf.d`

修改文件夹名，带上free开头， `sudo vi free。。`

粘贴代码到server部分

`listen 443`  ssl证书访问的端口号

`server name` 证书绑定的域名

`ssl on` 启动ssl认证

`ssl_certificate /www/ssl/1_free.._bundle.crt`

`ssl_certificate_key /www/ssl/2_free..key`

`ssl_protocols`   ssl证书所配置的协议

`ssl_ciphers`   加密套件

location部分不用改，具体代码如下：

```
upstream free {
}

再加一个server部分
server {
  listen 80 
  server_name app....com
  #rewrite ^(.*)  https://$host$1 permanent;
  return  301 https://app.xxx.com$request_url; 
}

server {
  listen 443;
  server_name free.xxx.com
  ...

  proxy_pass http://free
  最底下加一行
  if($ssl_protocols = "") {
    rewrite ^(.*)  https://$host$1 permanent;
  }
}
```
修改另外一个nginx配置文件

检查配置文件有没有错误`sudo nginx -t` 检查配置文件有没有错误

重启nginx服务`sudo nginx -s reload`

阿里云ssl证书 控制台-》安全云盾-》证书服务-》购买证书-》免费DV SSL->购买  证书控制台-》补全...




