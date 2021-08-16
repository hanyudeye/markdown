console.log("hello,%s,nice to see %s", "aming", "小李");

// 建立服务器
var http = require("http");

http
  .createServer(function (req, res) {
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
