//road時の隠す要素と背景色決め
window.onload = function(){
  for (let i = 1; i < 15; i++){
    document.getElementById("hideshow" + i).style.display = "none";
    document.getElementById("hideshow" + i).style.backgroundColor= "#f2f2f2";
    
  }

} 
//ぼたん呼び出し
function hideshow(classname){
	var hideshow = document.getElementsByClassName(classname)[0];
    
	if(hideshow.style.display=="block"){
		// 非表示
		hideshow.style.display ="none";
	}else{
		// 表示

		hideshow.style.display ="block";
	}
}











//背景の動くまるjavascript


//ページロードした時実行
window.addEventListener('load', function(){
    back();
    



});

//背景模様移動処理
async function back(){
  backrandomheight= '';
  backrandomwidth = '';
  backelement= '';
  screen = '';
  var backrandomwidth = {};
  var backrandomheight = {};
  var backelement = document.querySelectorAll('li.blob')
  const first_height = document.body.clientHeight - 100;

  //↓模様移動

  for (let i = 0; i < backelement.length; i++){
    //https://web-designer.cman.jp/javascript_ref/window/size/ 高さなどの説明

    backrandomwidth[i] = Math.random() * document.body.clientWidth - 20;
    backrandomheight[i] = 0 + Math.random() * first_height;

    console.log(i + ':::' + backrandomheight[i] + ':::' + backrandomwidth[i])
    backelement[i].style.left = backrandomwidth[i] + 'px';
    backelement[i].style.top = backrandomheight[i] + 'px';

  }
  //模様を少しだけ動かす
  for (let l = 0; l <= 50; l++){
    try {
    
      for (let i = 0; i < backelement.length; i++){
        await wait(0.01);
        
        backrandomheight[i]= backrandomheight[i] - 3;
        console.log(i + ':' + backrandomwidth[i] + ';' + backrandomheight[i] )
        //console.log(l + '-' + i + ':::' + backrandomheight[i] + ':::' + backrandomwidth[i])
        backelement[i].style.left = backrandomwidth[i] + 'px';
        backelement[i].style.top = backrandomheight[i] + 'px';

      }
    }catch (err) {
      console.error(err);
    }


  }
  console.log('もう一度実行(背景移動ループ処理)')
  try{
    await wait(1);
    for (let i = 0; i < backelement.length; i++){

      backelement[i].style.transitionDuration = '5s';
    }
    await wait(3);
  }catch(err){
    console.error(err)

  }
  

  back();

}

//n秒待機用
const wait = (sec) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, sec*1000);
  });
};

