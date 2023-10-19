
$(function(){
  // 引数を渡す
  $(sample("佐藤"));
  $(sample("山田"));
  $(sample("鈴木"));
  function sample (name)
{
  console.log("あなたの名前は" + name + "さんですね。");
}
});