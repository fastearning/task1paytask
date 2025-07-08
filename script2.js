let timerStarted = false;
let timeLeft = 15;
let timer;

const timeLabel = document.getElementById("time");
const btn = document.getElementById("btn1");
const scrollContainer = document.getElementById("scrollContainer");
const iframe = document.getElementById("fram1");

iframe.addEventListener("load", function() {
    alert("News loaded. Please scroll down to continue.");
    
    // Now start watching for scroll
    scrollContainer.addEventListener("scroll", function() {
        const scrollTop = scrollContainer.scrollTop;
        const scrollHeight = scrollContainer.scrollHeight;
        const clientHeight = scrollContainer.clientHeight;

        if (!timerStarted && scrollTop + clientHeight >= scrollHeight - 20) {
            timerStarted = true;
            startTimer();
        }
    });
});

function startTimer() {
    alert("Thanks for scrolling! Timer started.");
    timer = setInterval(function() {
        timeLeft--;
        timeLabel.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            btn.style.display = "block";
        }
    }, 1000);
}

