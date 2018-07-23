let countDown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer (seconds) {
    clearInterval(countDown);  // clear any existing timer
    console.log(seconds);
    const now = Date.now();
    const then = now + seconds * 1000;  // sec to millisec then add to now
    displayTimeLeft(seconds);  // visualizza il primo secondo, che setInterval se lo perde
    displayEndTime(then);
    countDown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        if (secondsLeft < 0) {
            clearInterval(countDown);
            return;
        } 
        displayTimeLeft(secondsLeft);
    }, 1000);
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds < 10? '0':''}${remainderSeconds}`;
    timerDisplay.textContent = display;
    document.title = display;
}

function displayEndTime(timestamp) {
    const end = new Date(timestamp);
    const hour = end.getHours();
    const minutes = end.getMinutes();
    endTime.textContent = `Be Back At ${hour}:${minutes  < 10? '0':''}${minutes}`;
}

function startTimer() {
    const seconds = parseInt(this.dataset.time)
    timer(seconds);
    console.log(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));
document.customForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const mins = this.minutes.value;
    console.log(mins);
    timer(mins*60);
    this.reset();
});



