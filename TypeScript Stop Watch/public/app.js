"use strict";
const hourseElement = document.getElementById("hourse");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const miliSecsElement = document.getElementById("mili-secs");
const playButton = document.getElementById("play-btn");
const resetButton = document.getElementById("reset-btn");
let miliSecsNumber = 0;
let secsNumber = 55;
let minsNumber = 0;
let hourseNumber = 0;
let disablePlayButton = false;
let timer; /* setInterval varable */
const updateTimerOnDOM = (element, timer) => {
    element.innerText = timer <= 9 ? `0${timer}` : `${timer}`;
};
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
            updateTimerOnDOM(miliSecsElement, miliSecsNumber);
            updateTimerOnDOM(secondsElement, secsNumber);
            updateTimerOnDOM(minutesElement, minsNumber);
            updateTimerOnDOM(hourseElement, hourseNumber);
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
        updateTimerOnDOM(miliSecsElement, 0);
        updateTimerOnDOM(secondsElement, 0);
        updateTimerOnDOM(minutesElement, 0);
        updateTimerOnDOM(hourseElement, 0);
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
