const bands = [ 
    'The Plot in You',
    'The Devil Wears Prada', 
    'Pierce the Veil', 
    'Norma Jean', 
    'The Bled', 
    'Say Anything', 
    'The Midway State', 
    'We Came as Romans', 
    'Counterparts', 
    'Oh, Sleeper', 
    'A Skylit Drive', 
    'Anywhere But Here', 
    'An Old Dog'
];
///// My Way
// // Ordiniamo il nome delle band senza tenere conto dell'articolo!
// bandsSorted = bands.sort((a, b) => {
//     const aSplit = a.split(" ");
//     const bSplit = b.split(" ");

//     const aConf = aSplit[firstNoArticle(aSplit)];
//     const bConf = bSplit[firstNoArticle(bSplit)];

//     console.log(aConf, bConf);

//     return aConf > bConf ? 1 : -1;
// });
// console.log(bandsSorted);
// // console.log(firstNoArticle(bands[8]));


// function firstNoArticle(word) {
//     if (word.length === 1) return 0;
//     let i = 0;
//     for (; i < word.length; i++) {
//         if (word[i].toLowerCase() != "the" || 
//             word[i].toLowerCase() != "a" ||
//             word[i].toLowerCase() != "an") {
//             i += 1;
//             break;
//         }
//     }
//     return i;
// }
// 

// // Soluzione
function strip(bandName) {
    return bandName.replace(/^(a |the |an )/i, '').trim();
}
const sortedBand = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);
document.querySelector('#bands').innerHTML = 
    sortedBand
        .map(band => `<li>${band}</li>`)
        .join('');


