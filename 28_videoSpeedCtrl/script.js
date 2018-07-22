const speed = document.querySelector('.speed');
const bar = speed.querySelector('.speed-bar');
const video = document.querySelector('.flex');

function handleMove(e) {
    const y = e.pageY - this.offsetTop;
    const percent = y / this.offsetHeight;
    const min = 0.4;
    const max = 4;
    const height = Math.round(percent * 100) + '%';
    
    // Setto la dimensione dell'intervallo 0-100 (niente-tutto)
    // e il punto di partenza (niente).
    // se moltiplico la percentuale per un numero qualunque
    // quella sarà la dimensione dell'intervallo
    // se poi aggiungo un valore arbitrario quello sarà
    // il punto di partenza
    const playBackRate = percent * (max - min) + min;
    
    bar.style.height = height;
    bar.textContent = playBackRate.toFixed(2) + 'x';
    video.playbackRate = playBackRate;

}

speed.addEventListener('mousemove', handleMove);





