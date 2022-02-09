# Node
> 另一个 JavaScript 的 runtime environment


## 事件
### 事件驱动模型 
事件驱动器把 请求对象放入 事件驱动循环中，按序执行，所以不用堵塞请求驱动器（请求处理器）  
请求处理器可以一直接收请求


## 模块和包
### 模块
#### 定义
``` js
//module.js
exports.setName=function(){
}
```

#### 使用
``` js
var module=require('./module');
module.setName();
```

#### 封装对象
### 包
#### 包的结构 (commonjs)
- package.json
- bin/  二进制
- lib/   js 代码
- doc/
- test/

但Node 中没有一个规范

#### in package.json file
- name 包名
- main 决定使用的模块头文件


## 调试  
``` console
supervisor app.js
```

# 核心模块
## process
- argv
- stdout.write
- stdin
- nextTick(callback)
- platform
- pid
- execPath
- memoryUsage()
## util
- inherits 继承
- inspect(object,[showHidden],[depth],[colors])
## events
- EventEmitter

## fs
- readFile
- readFileSync
- open
- read

## http
- Server
- ServerRequest  服务端获取请求参数
- ServerResponse
- request  客户端请求 http.request(options,callback)
- get 客户端发起请求(简化)
- ClientRequest
- ClientResponse

### 服务器
``` js
var http = require("http");
var server= new http.Server();

server.on('request',function (req, res) {
    res.writeHead(200, {
      //显示中文
      //   "Content-type": "text/html; charset=utf-8",
      //   language: "zh-cn",
      //   encoding:"utf-8"
    });
    // res.write("<h1>Hello,Nodejs World 你好，世界</h1>");
    // 或者
    res.write("<html><head> <meta charset='utf-8'></head><h1>Hello,Nodejs World 你好，世界</h1></html>");
    res.end();
  });

  server.listen(3000);


```



# web开发

路由控制
页面模板
数据库访问
用户注册
登录
用户会话

# 多版本管理 nvm
    
因为Chrome 的版本更新很快，所以要有一个好的工具处理版本问题，可以使用 nvm

查看已安装的版本
nvm ls 

安装版本 
nvm install  版本号
    
安装最近版本
nvm install -lts

应用某个版本
nvm use 版本号

# node 包的管理工具 npm

## 包的加载机制
如果 Node中自带的包与第三方的包名冲突，会优先加载系统核心中的模块，然后才是当前 node_modules 中的模块

查看全局配置 
npm config ls

项目初始化 
npm init

安装的包只用于开发环境(出现在 package.json 的 devDependencies属性中)
npm install 包名 --save-dev

安装的包用于生产环境
npm install 包名  --save

查看当前目录已安装的包
npm list 

查看全局已安装的包
npm list -g

更新指定的包
npm update 包名

卸载指定的包
npm uninstall 包名

切换镜像源
npm config set registry https://registry.npm.taobao.org


## 创建全局链接
``` console
npm link PACKAGE
```
## 包的发布 
``` console

npm publish
npm unpublish
```

## 调试
``` console
node debug FILE
```

# 框架
## 轻量 Express
