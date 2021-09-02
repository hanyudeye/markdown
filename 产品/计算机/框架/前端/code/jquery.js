// 置顶
// $(".top").animate()
$(function () {
  //选择器
  $("h1:first").css("color", "red");

  $(".top").click(function () {
    $(this).text("顶置");
  });
});
