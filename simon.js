let gameseq=[];
let userseq=[];
let highscore=0;

let btns=["yellow","red","purple","green"];


let started=false;
let level=0;
let h2=document.querySelector("h2");
let body=document.querySelector("body");

document.addEventListener("keypress", function(){
    if(started==false){
        started=true;
        levelup();
    }
});

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);

}

function levelup(){
    userseq=[];
    level++;
    h2.innerText=`level ${level}`;
    
    let randidx=Math.floor(Math.random()*3);
    let randcolor=btns[randidx];
    let randbtn=document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);

    btnflash(randbtn);
}

function checkans(idx){
    

    if(userseq[idx]==gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000);
        }
    } else{
        if(highscore<level){
            highscore=level;
        }

        h2.innerHTML=`game over! your score was <b> ${level} </b> press any key to start and High score of this game is <b>${highscore}</b>`;
        body.classList.add("over");
        setTimeout(function(){
            body.classList.remove("over");
        },250);
        
        

        reset();
    }
}

function btnpress(){
   let btn= this;
   btnflash(btn);

   usecolor=btn.getAttribute("id");
   userseq.push(usecolor);
   checkans(userseq.length-1);



}

let allbtns= document.querySelectorAll(".btn");

for(btn of allbtns){
    btn.addEventListener("click", btnpress);//should not keep btnpress(); as we know why
}

function reset(){
    started= false;
    gameseq=[];
    userseq = [];
    level=0;
}


