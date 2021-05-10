const tags = document.querySelectorAll(".countdown .format h4")
console.log(tags);
var hrs = 24 - new Date().getHours();
var mins = 60 - new Date().getMinutes();
var sec = 60 - new Date().getSeconds();

function updateCountdown() {
    vals = [hrs,mins,sec];
    tags.forEach((tag, itr) => {
        tag.innerHTML = vals[itr];
    })

    hrs = 23 - new Date().getHours();
    mins = 59 - new Date().getMinutes();
    sec = 59 - new Date().getSeconds();

    // if(sec == 0) {
    //     sec = 59;
    //     if(mins == 0) {
    //         mins = 59;
    //         hrs--;
    //     }
    //     else {
    //         mins--;
    //     }
    // }
    // if(mins == 0) {
    //     mins = 59;
    //     if(hrs != 0)
    //         hrs--;
    // }
    // if(hrs == 0) {
    //     hrs = 24;
    //     mins = 00;
    //     sec = 00;
    // }
    // sec--;
}

let countdown = setInterval(updateCountdown,1000);
