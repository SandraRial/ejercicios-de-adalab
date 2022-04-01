'use strict';

function getDogImage() {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())
    .then((data) => {
      const img = document.querySelector('img');
      img.src = data.message;
      img.alt = 'Un perro';
    });
}
const btn = document.querySelector('.js-dog');
btn.addEventListener('click', getDogImage);

function getChihuahuaImage() {
    fetch('https://dog.ceo/api/breed/chihuahua/images/random')
    .then((response) => response.json())
    .then((data) => {
        const img = document.querySelector('img');
        img.src = data.message;
        img.alt = 'Un chihuahua';
    });
}

const btn2 = document.querySelector('.js-chihuahua');
btn2.addEventListener('click', getChihuahuaImage);

//En el caso de JSON   data.message
//En fetch normal      data.result