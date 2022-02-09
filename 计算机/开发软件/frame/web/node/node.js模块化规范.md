## 模块化

网站越来越复杂，为了分解 js 的重复性，命名空间的污染，需要模块化

模块化包含:

- 日期模块
- 数学计算模块
- 日志模块
- 登录认证模块
- 报表展示模块

## 模块化规范

### 模块化规范的引入

假如我们引入模块

``` html
<body>
    <script src="zepto.js"></script>
    <script src="fastClick.js"></script>
    <script src="util/login.js"></script>
    <script src="util/base.js"></script>
    <script src="util/city.js"></script>
</body>
```

但是这样做会带来很多问题：

- 请求过多：引入十个js文件，就有十次http请求。
- 依赖模糊：不同的js文件可能会相互依赖，如果改其中的一个文件，另外一个文件可能会报错。

以上两点，最终导致：**难以维护**。

### RequireJS 规范 (前端规范)

- 异步加载模块；
- 依赖前置、提前执行：require([`foo`,`bar`],function(foo,bar){});   //也就是说把所有的包都 require 成功，再继续执行代码。
- define 定义模块：define([`require`,`foo`],function(){return});


### CommonJS (Node.js 使用的规范)

CommonJS 的规范规定： 每个模块内部，module变量代表当前模块。这个变量是一个对象，它的 exports 属性（即 module.exports) 是 对外的接口对象。加载某个模块，其实是加载该模块的  module.exports 对象。

在 CommonJS 中 ,每个文件都可以当作一个模块：

* 在服务器端： 模块的加载是运行时同步加载的
* 在浏览器端： 模块需要提前编译打包处理。首先，既然同步的,很容易引起阻塞；其次，浏览器不认识 *require* 语法，因此，需要提前编译打包。

### 模块的暴露

Node.js 中只有模块级 作用域，暴露的变量，方法的方法是使用 exports 关键字。

#### 方法1: exports
// 相当于给 exports 对象添加属性
 exports.xxx = value 

代码举例：

``` js
const name = 'qianguyihao';

const foo = function (value) {
	return value * 2;
};

exports.name = name;
exports.foo = foo;
```


#### 方式2: module.exports

``` js
// 方式1
module.exports = {
    name: '我是 module1',
    foo(){
        console.log(this.name);
    }
}

// 我们不能再继续写 module.exports = value2。因为重新赋值，会把 exports 对象 之前的赋值覆盖掉。

// 方式2
const age = 28;
module.exports.age = age;
```





### 模块的引入

``` js
const module1 = require('模块名');
```

