// 関数を使わない書き方
// $(function(){
//   $(".a").on("mouseover",function(){
//     $(this).css("margin-left" ,"100px");
//   });
//   $(".b").on("mouseover",function(){
//     $(this).css("margin-left","100px");
//   });
//   $(".c").on("mouseover",function(){
//     $(this).css("margin-left","100px");
//   });
// });

// 関数を使用した書き方
$(function(){
  $(".a").on("mouseover",sample);
  $(".b").on("mouseover",sample);
  $(".c").on("mouseover",sample);
  function sample () {
    $(this).css("margin-left","100px")
  }
});