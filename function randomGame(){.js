function randomGame(){
    let x = setInterval(function(){
       let numberCounter = 0; 
       let number = Math.random();
       numberCounter++
    //    console.log(numberCounter);
       console.log(number); 
       if(number > .75){
        clearInterval(x);
        console.log(numberCounter);
       }
    }, 1000)
}
randomGame()