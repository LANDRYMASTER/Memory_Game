let play = document.querySelector(".jouez > svg");
let back = document.querySelector(".Game > svg");
let Game = document.querySelector(".Game");
// let seconde2 = document.querySelector(".second2");
// let seconde1 = document.querySelector(".second1");
// let minute2 = document.querySelector(".min2");
// let minute1 = document.querySelector(".min1");
// let compteur = document.querySelector("#compteur");
// let melody = document.querySelector("#melody");

window.addEventListener("load", () => {
    melody.play();
});

play.addEventListener("click", () => {
    Game.classList.toggle("Slide");
});

back.addEventListener("click", () => {
    Game.classList.toggle("Slide");
});

//   setInterval(() => {
//     seconde2.innerText = parseInt(seconde2.innerText) + 1;
//     if (parseInt(seconde2.innerText) == 10 ) {
//         seconde2.innerText = "0";
//         seconde1.innerText = parseInt(seconde1.innerText) + 1;
//     }
//     if (parseInt(seconde1.innerText) == 6) {
//         seconde2.innerText = "0";
//         seconde1.innerText = "0";
//         minute2.innerText = parseInt(minute2.innerText) + 1;
//     }
//     if (parseInt(minute2.innerText) == 10) {
//         seconde2.innerText = "0";
//         seconde1.innerText = "0";
//         minute2.innerText = "0";
//         minute1.innerText = parseInt(minute1.innerText) + 1;
//     }
// }, 1000);

