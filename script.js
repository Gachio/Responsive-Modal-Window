'use strict';

const btnShowModal = document.querySelectorAll('.show-modal');
console.log(btnShowModal);

const modal = document.querySelector('.modal');
console.log(modal);

const overlay = document.querySelector('.overlay');
console.log(overlay);

const btnClose = document.querySelector('.close-modal');
console.log(btnClose);

const addModalWindow = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const removModalWin = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnShowModal.length; i++)
  btnShowModal[i].addEventListener('click', addModalWindow);

btnClose.addEventListener('click', removModalWin);

overlay.addEventListener('click', removModalWin);

document.addEventListener('keydown', function (e) {
  //   console.log(e);
  if (e.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      removModalWin();
    }
  }
});
