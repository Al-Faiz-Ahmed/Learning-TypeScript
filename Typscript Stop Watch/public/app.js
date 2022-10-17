"use strict";
const hourseElement = document.getElementById("hourse");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const miliSecsElement = document.getElementById("mili-secs");
const playButton = document.getElementById("play-btn");
const resetButton = document.getElementById("reset-btn");
let disablePlayButton = false;
let miliSecsNumber = 0;
let secsNumber = 0;
let minsNumber = 0;
let hourseNumber = 0;
let timer; /* setInterval varable */
const actionHandler = (actionType) => {
    if (actionType === "play") {
        timer = setInterval(() => {
            miliSecsNumber++;
            if (miliSecsNumber >= 100) {
                miliSecsNumber = 0;
                secsNumber++;
            }
            else if (secsNumber >= 60) {
                secsNumber = 0;
                minsNumber++;
            }
            else if (minsNumber >= 60) {
                minsNumber = 0;
                hourseNumber++;
            }
            else if (hourseNumber >= 60) {
                hourseNumber = 0;
            }
            miliSecsElement.innerText =
                miliSecsNumber <= 9 ? `0${miliSecsNumber}` : `${miliSecsNumber}`;
            secondsElement.innerText =
                secsNumber <= 9 ? `0${secsNumber}` : `${secsNumber}`;
            minutesElement.innerText =
                minsNumber <= 9 ? `0${minsNumber}` : `${minsNumber}`;
            hourseElement.innerText =
                hourseNumber <= 9 ? `0${hourseNumber}` : `${hourseNumber}`;
        }, 10);
    }
    if (actionType === "pause") {
        clearInterval(timer);
    }
    if (actionType === "reset") {
        clearInterval(timer);
        miliSecsNumber = 0;
        secsNumber = 0;
        minsNumber = 0;
        hourseNumber = 0;
        miliSecsElement.innerHTML = "00";
        secondsElement.innerHTML = "00";
        minutesElement.innerHTML = "00";
        hourseElement.innerHTML = "00";
        playButton.innerText = "PLAY";
        disablePlayButton = false;
    }
};
playButton.onclick = () => {
    if (!disablePlayButton) {
        actionHandler("play");
        playButton.innerText = "PAUSE";
    }
    else {
        actionHandler("pause");
        playButton.innerText = "RESUME";
    }
    disablePlayButton = !disablePlayButton;
};
resetButton.onclick = () => {
    actionHandler("reset");
};
