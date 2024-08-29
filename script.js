let countdown = 60;
let scores = 0;
let rdm = Math.floor(Math.random() * 10);


//Hits
function hits() {
    document.querySelector(".hit").innerHTML = rdm;
}

// bubbles creation
function makeBubble() {
    let clutter = ""
    for (let i = 0; i <= 151; i++) {
        let rdm = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rdm}</div>`
    };

    document.querySelector(".pbtm").innerHTML = clutter;

}

//timer
function time() {
    let timer = setInterval(() => {
        if (countdown > 0) {
            countdown--
            document.querySelector('.timer').innerHTML = countdown
        }
        else {
            clearInterval(timer);
            document.querySelector(".pbtm").innerHTML = `<h1>Game over<h1/>`
        }
    }, 1000);
}

//score

function score() {
    scores += 10
    document.querySelector(".score").innerHTML = scores;

}


let a = document.querySelector(".pbtm");
a.addEventListener("click", (e) => {
    let clickedNum = Number(e.target.innerHTML)

    if (rdm == clickedNum) {
        score();
        hits();
        makeBubble();
    }
});







hits();
makeBubble();
time();