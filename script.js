let timerStarted = false;
let timeLeft = 15;
let timer;

const scrollContainer = document.getElementById("scrollContainer");
const iframe1 = document.getElementById("iframe1");
const timeLabel = document.getElementById("time");
const finalBtn = document.getElementById("finalBtn");

// Wait until iframe fully loads
iframe1.addEventListener("load", function() {
    alert("News loaded. Please scroll down to continue.");

    // Now watch for scroll to bottom
    scrollContainer.addEventListener("scroll", function() {
        if (timerStarted) return; // don't start timer twice
        const scrollTop = scrollContainer.scrollTop;
        const scrollHeight = scrollContainer.scrollHeight;
        const clientHeight = scrollContainer.clientHeight;

        // Check if scrolled near bottom
        if (scrollTop + clientHeight >= scrollHeight - 20) {
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
            finalBtn.style.display = "block";
        }
    }, 1000);
}

// On final button click
finalBtn.addEventListener("click", function() {
    window.location.href="intent://unlock_reward3#Intent;scheme=com.qolorco.paytask;end";
});
