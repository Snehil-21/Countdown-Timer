const hr = document.querySelector("td.hr.cards")
const min = document.querySelector("td.min.cards")
const second = document.querySelector("td.sec.cards")

var hrs = 23 - new Date().getHours();
var mins = 60 - new Date().getMinutes();
var sec = 60 - new Date().getSeconds();

function updateCountdown() {
    hr.innerHTML = hrs;
    min.innerHTML = mins;
    second.innerHTML = sec;

    hrs = 23 - new Date().getHours();
    mins = 59 - new Date().getMinutes();
    sec = 59 - new Date().getSeconds();
}

let countdown = setInterval(updateCountdown,1000);
