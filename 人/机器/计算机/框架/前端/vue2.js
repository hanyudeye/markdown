let vm = new Vue({
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
