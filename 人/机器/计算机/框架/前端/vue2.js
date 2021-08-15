let app = new Vue({
  el: "#app",
  data: {
    name: "明哥",
    html_output: '<a href="http://example.com">链接</a>',
    style1: "color:red",
    use: true,
    message:"数据关联",
    //为真
    weizhen:true,
    weijia:false,
    shuzu:[1,3,5,7,9],
    isActive:true,

  },
  methods:{
    reverseMessage:function(){
      this.message=this.message.split('').reverse().join('')
    }
  },filters:{
    upper:function(value){
		  return value.toUpperCase();
    }
  },computed:{
    reversedMessage:function(){
      return this.message.split('').reverse().join('')
    }
  }
});



let app1= new Vue({
  el: ".app1",
  data: {
    name: "hello,阿明",
    app1_id:123,
    html_output:'<a href="http://example.com">例子</a>',
    link:'http://example.com',
    checked:true,
    picked:'one',
    selected:''
  },
  methods: {},
  created: function () {
    console.log("Vue instance has been created");
  },
  mounted() {
    console.log("元素挂载时执行");
  },
  updated() {
    console.log("Vue实例或??任何数据更新时执行");
  },destroyed() {
    console.log("Vue实例销毁时执行");
  },filters:{
	  upper:function(value){
		  return value.toUpperCase();
	  }
  }
});
