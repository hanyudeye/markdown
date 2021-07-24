## vscode启动layui ##
> 现在不需要用 ，直接 live-server 就可以 
周六 七月 24 15:38:52 中国标准时间 2021


1. 首先在VSCode 上装一个插件：Debugger for Chrome

创建文件配置  .vscode/launch.json

``` json
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "chrome",
            "request": "launch",
            "name": "使用本机chrom调试",
            "url": "http://localhost:8080",
            "webRoot": "${workspaceFolder}",
        }
    ]
}
```

2. 开启本地服务器
安装npm install -g live-server

安装完成后 

live-server
live修改默认端口

安装路径C:\Users\xx\AppData\Roaming\npm\node_modules\live-server下index.js中的8080修改成自己要的

## 插件
### layui
