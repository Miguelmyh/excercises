function countdown (num){
    let x = setInterval(function(){
      for(let i = num ; i >=0; i--){
        console.log(i);
        if(i === 0){
          console.log("stop");
          clearInterval(x);
        }
      }
    }, 1000)
  }
  countdown(4)