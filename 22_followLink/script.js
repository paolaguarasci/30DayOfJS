// 👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀

// Seleziono tutti i link della pagina
const triggers = document.querySelectorAll('a');

// creo l'elemento con l'evidenziazione (un tag span con la classe 'highlight')
const highlight = document.createElement('span');
highlight.classList.add('highlight');
// inserisco l'elemento nel DOM (in ultima posizione)
document.body.append(highlight);

// evidenzia il link
function highlightLink() {
    // ottengo le coordinate nella pagina del link
    const linkCoords = this.getBoundingClientRect();

    // aggiunto dopo per risolvere il problema dello scroll
    const coords = {
        width: linkCoords.width,
        height: linkCoords.height,
        top: linkCoords.top + window.scrollY,
        left: linkCoords.left + window.scrollX
    };

    // applico all'elemento di evidenziazione la dimensione del link
    // ottenuta con getBoundingClientRect();
    highlight.style.width = `${coords.width}px`;
    highlight.style.height = `${coords.height}px`;

    // sposto l'evidenziazione sul link
    highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;

    
    
}

// per ogni elemento di triggers attendo un 'mouseenter'
// eventualmente se accade chiamo highlightLink
triggers.forEach(a => a.addEventListener('mouseenter', highlightLink));