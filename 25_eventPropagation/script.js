// impariamo il bubbling!

const divs = document.querySelectorAll("div");
const button = document.querySelector("button");

function logText(e) {
    console.log(this.classList.value);
    // e.stopPropagation();
    // console.log(this);
}

// document.body.addEventListener('click', logText);
divs.forEach(div => div.addEventListener('click', logText, {
    // cattura tutti i parent (top-down) fino al this
    // default: false ( e cattura down-top)
    // se true e con stopPropagation() [riga 4]
    // cattura solo il primo genitore (in questo caso 'one')
    // se false e con stopPropagation() [riga 4]
    // cattura solo this
    capture: true,

    // Cattura una volta sola!
    once: true,
} ));

button.addEventListener('click', () => {
    console.log('hey');
}, {
    once: true
});
