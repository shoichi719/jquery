$(function () {
  $("p").addClass("bold")
  $("p").removeClass("bold")
  var text1 = $("p").text();
  console.log(text1);
});

$("p").on("click",function(){
  $(this).toggleClass('testToggle');
});