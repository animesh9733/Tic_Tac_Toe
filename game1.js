const array=document.querySelectorAll(".board .cell");
let one=document.getElementById("one");
let two=document.getElementById("two");
let three=document.getElementById("three");
let four=document.getElementById("four");
let five=document.getElementById("five");
let six=document.getElementById("six");
let seven=document.getElementById("seven");
let eight=document.getElementById("eight");
let nine=document.getElementById("nine");
let won=new Audio("won.wav");
let click=new Audio("click2.mp3");
let draw=new Audio("draw.wav");

const pl1=document.querySelector(" .players .player1");
const pl2=document.querySelector(" .players .player2");
const win=document.querySelector(".result");
const winPlayer=document.querySelector(".winPlayer");
let count=0;
// console.log(rem);
// console.log(win);
const playerx="x";
const player0="0";
let current_player="x";
let togle=true;

function logic(e){
  
 e.innerHTML=current_player;
 let temp=e;
 e.classList.add("disabled");
 click.play();
 togle=!togle;
 
swipe(togle);
next_player(togle);
win_check();
// e.array[0].classList.remove("disabled");
// rem.classList.remove("disabled");
 
}


function win_check(){
   count++;
   if(array[0].textContent=="x" && array[1].textContent=="x" && array[2].textContent=="x" || array[3].textContent=="x" && array[4].textContent=="x" && array[5].textContent=="x" || array[6].textContent=="x" && array[7].textContent=="x" && array[8].textContent=="x" || array[0].textContent=="x" && array[3].textContent=="x" && array[6].textContent=="x" || array[1].textContent=="x" && array[4].textContent=="x" && array[7].textContent=="x" || array[2].textContent=="x" && array[5].textContent=="x" && array[8].textContent=="x" || array[0].textContent=="x" && array[4].textContent=="x" && array[8].textContent=="x"  || array[2].textContent=="x" && array[4].textContent=="x" && array[6].textContent=="x"   ) {
      win.classList.remove("inactive");
      winPlayer.innerHTML="Won! Player 1";
      won.play();

   }
   else if( array[0].textContent=="0" && array[1].textContent=="0" && array[2].textContent=="0" || array[3].textContent=="0" && array[4].textContent=="0" && array[5].textContent=="0" || array[6].textContent=="0" && array[7].textContent=="0" && array[8].textContent=="0" || array[0].textContent=="0" && array[3].textContent=="0" && array[6].textContent=="0" || array[1].textContent=="0" && array[4].textContent=="0" && array[7].textContent=="0" || array[2].textContent=="0" && array[5].textContent=="0" && array[8].textContent=="0" || array[0].textContent=="0" && array[4].textContent=="0" && array[8].textContent=="0"  || array[2].textContent=="0" && array[4].textContent=="0" && array[6].textContent=="0"  ){
      won.play();
      win.classList.remove("inactive");
      winPlayer.innerHTML="Won! Player 2";
      

   }
   else if(count==9){
      draw.play();
      win.classList.remove("inactive");
      winPlayer.innerHTML="Draw!";
     

   }

}

function reset(){
   win.classList.add("inactive");
   count=0;
   array[0].textContent="";
   array[1].textContent="";
   array[2].textContent="";
   array[3].textContent="";
   array[4].textContent="";
   array[5].textContent="";
   array[6].textContent="";
   array[7].textContent="";
   array[8].textContent="";
   // console.log(count);
   togle=true;
   current_player="x";
   // console.log(current_player);
   one.classList.remove("disabled")
   two.classList.remove("disabled")
   three.classList.remove("disabled")
   four.classList.remove("disabled")
   five.classList.remove("disabled")
   six.classList.remove("disabled")
   seven.classList.remove("disabled")
   eight.classList.remove("disabled")
   nine.classList.remove("disabled")
   pl1.classList.add("active");
   pl2.classList.remove("active");
   

}

function next_player(togle){
   if(togle==true){
      // console.log(pl1,pl2)
      pl1.classList.add("active");
      pl2.classList.remove("active");
      // click.play();

   }
   else{
      pl1.classList.remove("active");
      pl2.classList.add("active");
      
   }
}


function swipe(togle){
   // console.log(togle);
  
   if(togle==true){
      // click.play();

      current_player=playerx;
   }
   else{
      // click.play();

      current_player=player0;
   }
}


