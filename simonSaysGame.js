let gameSeq = [];
let userSeq = [];

let h2 = document.querySelector("h2");

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("game Started");
    started = true;
    levelUp();
  }
});

function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}
function userFlash(btn) {
  btn.classList.add("userFlash");
  setTimeout(function () {
    btn.classList.remove("userFlash");
  }, 150);
}

function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `level ${level}`;

  let ranIdx = Math.floor(Math.random() * 3);
  randColor = btns[ranIdx];
  gameSeq.push(randColor);
  console.log(gameSeq);
  randBtn = document.querySelector(`.${randColor}`);

  gameFlash(randBtn);
}

function checkAns(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerHTML = `Game Over!  Your Score was <b>${level}</b> <br>Press any key to start.`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 150);
    scoreTraker();
    resetGame();
  }
}

function btnPress() {
  //   console.log(this);
  let btn = this;
  userFlash(btn);

  let userColor = btn.getAttribute("id");
  userSeq.push(userColor);
  checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");

for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

function resetGame() {
  started = false;
  level = 0;
  userSeq = [];
  gameSeq = [];
}

function scoreTraker(){
    let ul = document.querySelector('#ul');
    let p = document.createElement('p');
    p.classList.add("para");
    p.innerText = `Your score is : ${level}`;
    ul.appendChild(p);

}