const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate () {
    const now = new Date();
    const offset = 90;
    const seconds = now.getSeconds();
    const secondsDegrees = ((360 / 60) * seconds) + offset;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutes = now.getMinutes();
    const minutesDegrees = ((360 / 60) * minutes) + offset;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = ((360 / 12) * (hours % 12)) + offset;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}
/*
    Chiama la funzione "setDate" ogni n millisecondi
    in questo caso 1000, ovvero un secondo.
*/
setInterval(setDate, 1000);
// setDate();
