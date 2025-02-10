let gameSeq=[];
let userSeq=[];

let btns=["yellow" , "red" , "purple" , "green"];

let started = false;
let level = 0 ; 

let h2 = document.querySelector("h2");

function checkAns(){
    for (let i = 0; i < userSeq.length; i++) {
        if (userSeq[i] !== gameSeq[i]) {

            h2.innerHTML = `Game Over! Your score was <b>${level}<b><br> Press any key to start`;
            document.querySelector("body").style.backgroundColor="red"
            setTimeout(function(){
                document.querySelector("body").style.backgroundColor="white";
            },150);
            reset();
            return;
        }
    }
    console.log("Same value");

    if(userSeq.length==gameSeq.length){
        setTimeout(levelUp(),1000);
    }
}


document.addEventListener("keypress" , function(){
    if(started == false){
        console.log("game started");
        started = true;


        levelUp();
    }
});

function btnFlash(btn){
   btn.classList.add("flash");
   setTimeout(function(){
    btn.classList.remove("flash");
   },150);
}

function userFlash(btn){
   btn.classList.add("userFlash");
   setTimeout(function(){
    btn.classList.remove("userFlash");
   },150);
}



function levelUp(){
    userSeq=[];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random()*4); // Changed to 4 to include 3
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randBtn);
}

function btnPress (){
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}


let allBtns = document.querySelectorAll(".btn");
for(let btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started =false;
    gameSeq=[];
    userSeq=[];
    level=0;
}