const elementi = document.querySelectorAll('.item input[type="checkbox"]');
// console.log(elementi);
let lastChecked;

function setta(e) {
    let inBet = false;
    if(e.shiftKey) {
        for (ele of elementi) {
            console.log(ele);
            if(ele === this || ele === lastChecked) {
                inBet = !inBet;
                console.log('start to check them inbetween');
            }
            if (inBet) {
                ele.checked = true;
            }
        }
    }
    lastChecked = this;
}


// evento per il primo click
for(let e of elementi) {
    e.addEventListener('click', setta);
}