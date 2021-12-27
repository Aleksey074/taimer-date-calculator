import { } from "./common.js";
import { } from "./howler.js"

const state = {
    counter: 5,
    timeleft: {
        minutes: 0,
        seconds: 0
    }
}

const getS = selector => document.querySelector(selector);

const counterShow = getS('.counter');
const plus_bttn = getS('#plus');
const minus_bttn = getS('#minus');
const countMin = getS('.countMin');
const countSec = getS('.countSec');
const startBttn = getS('.start');
const stopBttn = getS('.stop');
const resetBttn = getS('.reset');


const render = () => {
    counterShow.innerHTML = state.counter;

    countMin.innerHTML = state.timeleft.minutes < 10 ? `0${state.timeleft.minutes}` : state.timeleft.minutes;
    countSec.innerHTML = state.timeleft.seconds < 10 ? `0${state.timeleft.seconds}` : state.timeleft.seconds;
}
const step = () => {
    // Обновляем секунды, если текущая секунда минус один будет меньше, чем 0, то отминаем минуты, если минуты равны 0, то останавливаем таймер. 
    if (state.timeleft.seconds - 1 < 0) {
        if (state.timeleft.minutes !== 0) {
            state.timeleft.seconds = 59;
            state.timeleft.minutes = (state.timeleft.minutes - 1 < 0) ? 0 : state.timeleft.minutes - 1;
        } else {
            clearInterval(state.timerId);
        }
    } else {
        state.timeleft.seconds--;
    }
    render();
}
const clearTimerId = () => {
    if (state.timerId !== undefined) {
        clearInterval(state.timerId);
        delete state.timerId;
    }
}

startBttn.addEventListener('click', () => {

    if (state.timerId !== undefined) {
        clearTimerId();
    } else {
        state.timeleft.minutes = state.counter;
    }
    state.timerId = setInterval(step, 1000);
    render();
});

stopBttn.addEventListener('click', clearTimerId);

resetBttn.addEventListener('click', () => {
    clearTimerId();
    state.timeleft.minutes = 0;
    state.timeleft.seconds = 0;
    render();
});

/* + - кнопки */
plus_bttn.addEventListener('click', () => {
    state.counter++;
    clearTimerId();
    state.timeleft.minutes = 0;
    state.timeleft.seconds = 0;
    render();
});
minus_bttn.addEventListener('click', () => {
    state.counter = (state.counter - 1 < 0) ? 0 : state.counter - 1;
    clearTimerId();
    state.timeleft.minutes = 0;
    state.timeleft.seconds = 0;
    render();
});

// отрисовываем начальную информацию
render();

//вызываем мелодию
sound.play();


