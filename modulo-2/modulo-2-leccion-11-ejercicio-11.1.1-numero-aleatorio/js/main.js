'use strict';

 const resultInteger = document.querySelector('.js-result');
// function getEmoji() {
//   fetch('https://api.rand.fun/games/rockpaperscissorslizardspock')
//     .then((response) => response.json())
//     .then((data) => {
//       document.querySelector('.js-result').innerHTML = data.result;
//     });
// }
// document.querySelector('.js-emoji').addEventListener('click', getEmoji);

function integer() {
    fetch('https://api.rand.fun/number/integer')
    .then((response) => response.json())
    .then((data) => {
        resultInteger.innerHTML = data.result;
    });
}
document.querySelector('.js_integer').addEventListener('click', integer);
