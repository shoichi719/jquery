
$(function(){
  // 関数は計算ができる
  addsample(1,2);
  addsample(4,3);
  addsample(100,1);

    function addsample (num1,num2){
      var rslt = num1 + num2;     
      console.log(rslt);
      // 条件分岐も使える
      if(rslt == 3){
        console.log("処理結果は"+rslt+"です");
      }
      else{
        console.log("処理結果は３以外です");
      }
    }
  });