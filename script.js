let melody = document.querySelector("#melody");
let page = document.querySelector("body");
let Game = document.querySelector(".Game");
let control = document.querySelector(".play");
let carte = document.getElementsByClassName("contain");
let trap = document.querySelector(".tag");
let seconde2 = document.querySelector(".second2");
let seconde1 = document.querySelector(".second1");
let minute2 = document.querySelector(".min2");
let minute1 = document.querySelector(".min1");
let refresh = document.querySelectorAll(".control");
let dialog = document.querySelector(".pop_over");
let confirmer = document.querySelector(".confirm");
let box = document.querySelector(".dialog");


let tap = 0;
let chance1 = "";
let chance2 = "";
let memory = "";
let choix = 0;
let a = [];
let congrat = 0;

let actu = () => {
    Game.classList.toggle("Slide");
    seconde2.innerText = "0";
    seconde1.innerText = "0";
    minute2.innerText = "0";
    minute1.innerText = "0";
    tap = 0;
    chance1 = "";
    chance2 = "";
    memory = "";
    choix = 0;
    a = [];
    congrat = 0;
    for (let i of carte) {
        i.classList.remove("visible");
    }
    trap.innerText = "0";
};

confirmer.addEventListener("click" , () => {
    dialog.classList.remove("affiche");
    actu();
});

page.addEventListener("mouseover", () => {
    melody.play();
});

for (let i of refresh) {
    i.addEventListener("click" , actu );
}

control.addEventListener("click", () => {
    Game.classList.toggle("Slide");
});

for (let i of carte) {
    i.addEventListener("click", () => {
        tap += 1;
        choix += 1;
        i.classList.toggle("visible");
        if (choix == 1) {
            chance1 = i.getAttribute("code");
            a.push(i);
        }
        if (choix == 2) {
            chance2 = i.getAttribute("code");
            a.push(i);
            setTimeout(() => {
                if ( chance1 != chance2 ) {
                    for (let i of a ) {
                        i.classList.toggle("visible");
                        choix = 0;
                        a = [];
                    }
                }
                else {
                    choix = 0;
                    a = [];
                    congrat += 1;
                    trap.innerText = parseInt(trap.innerText) + 12;
                }
                if ( congrat == 6 ) {
                    memory = tap;
                    tap = 0;
                    dialog.classList.toggle("affiche");
                }
            }, 500);
        }
    });
}



setInterval(() => {
if ( tap > 0 ) {
    seconde2.innerText = parseInt(seconde2.innerText) + 1;
    if (parseInt(seconde2.innerText) == 10 ) {
        seconde2.innerText = "0";
        seconde1.innerText = parseInt(seconde1.innerText) + 1;
    }
    if (parseInt(seconde1.innerText) == 6) {
        seconde2.innerText = "0";
        seconde1.innerText = "0";
        minute2.innerText = parseInt(minute2.innerText) + 1;
    }
    if (parseInt(minute2.innerText) == 10) {
        seconde2.innerText = "0";
        seconde1.innerText = "0";
        minute2.innerText = "0";
        minute1.innerText = parseInt(minute1.innerText) + 1;
    }
}
}, 1000);
 











