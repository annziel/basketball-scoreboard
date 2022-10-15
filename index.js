// add points when button is clicked:

let homePoints = 0
let guestPoints = 0

const homePointsEl = document.getElementById("home-points-el")
const guestPointsEl = document.getElementById("guest-points-el")

homePointsEl.textContent = homePoints
guestPointsEl.textContent = guestPoints

// GUEST POINTS - long version - how I made it the first time - called in HTML
function guestAdd1Point() {
    guestPoints += 1
    guestPointsEl.textContent = guestPoints
    highlightLeader()

}
function guestAdd2Points() {
   guestPoints += 2
    guestPointsEl.textContent = guestPoints
    highlightLeader()

}
function guestAdd3Points() {
   guestPoints += 3
    guestPointsEl.textContent = guestPoints
    highlightLeader()

}

// HOME POINTS - short version after changes - called in HTML
function homeAddPoints(points) {
    homePoints += points
    homePointsEl.textContent = homePoints
    highlightLeader()
}

// leader highlighting - function:
function highlightLeader() {
    guestPointsEl.style.color = "";
    homePointsEl.style.color = "";
    if (homePoints > guestPoints) {
        homePointsEl.style.color = "green";
    }
    else if (guestPoints > homePoints) {
        guestPointsEl.style.color = "green";
    }
}

//  24sec timer:
let millisecondsLeft = 24000;
let shotTimeLeftText = (millisecondsLeft / 1000).toFixed(0);
const shotTime = document.getElementById("shot-time-el");
shotTime.textContent = shotTimeLeftText;

let shotTimeIntervalId = null;
let lastTime;
let nowTime;

// called in HTML
function toggleShotTimer() {
    if (shotTimeIntervalId == null) {
        startShotTimeCountdown();
    }
    else {
        pauseShotTimeCountdown();
    }
}

function startShotTimeCountdown() {
    if (millisecondsLeft <= 0) {
        millisecondsLeft = 24000;
    }
    lastTime = new Date().getTime();
    shotTimeIntervalId = setInterval(countdownStep, 10);
}

function countdownStep() {
    nowTime = new Date().getTime();
    const timeSinceLastCount = nowTime - lastTime;
    millisecondsLeft -= timeSinceLastCount;
    shotTimeLeftText = (millisecondsLeft / 1000).toFixed(0);
    shotTime.textContent = shotTimeLeftText;
    lastTime = nowTime;
    if (millisecondsLeft <= 0) {
        shotTimeLeftText = '0';
        shotTime.textContent = shotTimeLeftText;
        pauseShotTimeCountdown();
    }
}

function pauseShotTimeCountdown() {
    clearInterval(shotTimeIntervalId);
    shotTimeIntervalId = null;
}


function resetShotTimer() {
    millisecondsLeft = 24000;
    shotTimeLeftText = '24';
    shotTime.textContent = shotTimeLeftText;
    pauseShotTimeCountdown();
}