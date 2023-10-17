$("p").on("click",function(){
  $(this).addClass("testToggle");
});

$("p").on("dblclick",function(){
  $(this).removeClass("testToggle");
});

$(".test4").on("click",function(){
  $("p").off("dblclick");
})