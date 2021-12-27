import {} from "../node_modules/howler/dist/howler.js"

const sound = new Howl({
    src: ['../sound.mp3']
});

export function timer() {
    if (state.timeleft.minutes === 0 & state.timeleft.seconds === 0) {  // условия работы (0 мин, 0 сек)
        sound.play();
    }
}