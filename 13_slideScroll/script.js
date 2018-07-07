function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide(e) {
  sliderImages.forEach(sliderImage => {
    // scroll(px) + 
    const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
    // linea inferiore dell'immagine espressa in pixel partendo dal bordo superiore della finestra
    const imageBottom = sliderImage.offsetTop + sliderImage.height;
    
    // vera da quando lo scroll arriva a metà immagine, fino a fine pagina
    const isHalfShown = slideInAt > sliderImage.offsetTop; 
    // inizia su true poi diventa false appena lo scroll supera l'immagine
    const isNotScrolledPast = window.scrollY < imageBottom;
    
    // se ne sto mostrando almeno metà ma non l'ho mostrata tutta
    if (isHalfShown && isNotScrolledPast) { 
    // if (isNotScrolledPast) { // per lo scroll a scendere fadein solo della prima img, salendo invece fadein di tutte
    // if (isHalfShown) { // solo effetto in entrata
      sliderImage.classList.add('active');
    } else {
      sliderImage.classList.remove('active');      
    }
  });
}

window.addEventListener('scroll', debounce(checkSlide));
