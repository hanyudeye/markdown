# nodejs javascript 解释器
## 事件
### 事件驱动模型 
事件驱动器把 请求对象放入 事件驱动循环中，按序执行，所以不用堵塞请求驱动器（请求处理器）  
请求处理器可以一直接收请求


## http服务软件
### 创建服务器
``` js
var http = require("http");
http.createServer(function (req, res) {
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
  })
  .listen(3000);


```



## 调试器  supervisor

supervisor app.js
