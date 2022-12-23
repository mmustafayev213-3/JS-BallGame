let countUp=0;
let countLeft=0;
let ball=document.querySelector(".top");
let up=document.querySelector(".up")
let down=document.querySelector(".down")
let left=document.querySelector(".left")
let reset=document.querySelector(".reset");
let right=document.querySelector(".right");


function BallUp() {
    ball.style.marginBottom=(countUp++) + 'rem';
    if (ball.style.marginBottom == 13 + 'rem') {
        up.disabled=true;
    }
    else if(ball.style.marginBottom == -13 + 'rem'){
        down.disabled=false;
    }
}
function BallDown() {
    ball.style.marginBottom=(countUp--) + 'rem';
    if (ball.style.marginBottom == -13 + 'rem') {
        down.disabled=true;
    }
    else if(ball.style.marginBottom == 13 + 'rem'){
        up.disabled=false;
    }
}

function BallRight() {
    ball.style.marginRight=(countLeft++) + 'rem';
    if (ball.style.marginRight == 13 + 'rem') {
        right.disabled=true;
    }
    else if(ball.style.marginRight == -13 + 'rem'){
        left.disabled=false;
    }
}

function BallLeft() {
    
    ball.style.marginRight=(countLeft--) + 'rem';
    if (ball.style.marginRight == -13 + 'rem') {
        left.disabled=true;
    }
    else if(ball.style.marginRight == 13 + 'rem'){
        right.disabled=false;
    }
}
function BallReset() {
    countLeft=0;
    countUp=0;
    ball.style.marginRight = 0 + 'rem';
    ball.style.marginLeft = 0 + 'rem';
    ball.style.marginBottom = 0 + 'rem';
    ball.style.marginTop = 0 + 'rem';
}

window.addEventListener("keydown",function (ele) {
    if (ele.key == "ArrowUp") {
        BallUp();
    }
    else if(ele.key == "ArrowDown") BallDown();
    else if(ele.key == "ArrowLeft") BallLeft();
    else if(ele.key == "ArrowRight") BallRight();
    else if(ele.key == "Enter") BallReset();
})

