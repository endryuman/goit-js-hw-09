import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formEl = document.querySelector('.form');
const delayEl = document.getElementsByName('delay');
const stepEl = document.getElementsByName('step');
const amountEl = document.getElementsByName('amount');
const btn = document.querySelector('button');
console.log(formEl);

formEl.addEventListener('submit', onBtnClick);

function onBtnClick(e) {
  e.preventDefault();

  const amount = parseInt(amountEl.value);
  const delay = parseInt(delayEl.value);
  const delayStep = parseInt(stepEl.value);

  for (let i = 0; i < amount; i += 1) {
    createPromise(i + 1, delay + i * delayStep)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    });
  });
}
