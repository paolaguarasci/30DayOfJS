// .querySelectorAll() restituisce una lista di Nodi. 
// [...] restituisce un array.
const timeNodes = [...document.querySelectorAll('[data-time]')];
const seconds = timeNodes
    .map(node => node.dataset.time) // prendo il valore "dataset-time" di ogni nodo (elemento dell'array)
    .map(timeCode => { // ogni dataset-time diventa il mio timeCode che splitto in min e sec
        const [mins, secs] = timeCode.split(':').map(parseFloat); // il tipo di ritorno è string 
        return (mins * 60) + secs;
        console.log(mins, secs);
    })
    .reduce((total, seconds) => { // sommo tutti i secondi insieme
        return total + seconds;
    });


let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;

const mins = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

console.log(hours, mins, secondsLeft);