// 数据类型

//数组
let array = new Array("1", "2", "5", 7);
// console.log(array)
array.push(9);
array.pop();
// console.log(array)

//对象
let person = {
  name: "ming",
  age: 35,
  say: function (data) {
    console.log(data);
  },
};
// person.say('nihao')

// 数据转换
let num = 15;
let translate1 = num.toString();
// console.log(translate1)

//正则表达式
var str = "Visit Runoob!";
var n = str.search(/Runoob/i);
// console.log(n)

// 函数
// 返回逻辑与 ，true,false
const and = (a, b) => a && b;
// console.log(and(true,false))
// console.log(and(false,false))



