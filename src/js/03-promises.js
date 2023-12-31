import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  form: document.querySelector('.form'),
  inputDelay: document.querySelector('input[name = "delay"]'),
  inputStep: document.querySelector('input[name = "step"]'),
  inputAmount: document.querySelector('input[name = "amount"]'),
  btn: document.querySelector('button'),
};

refs.form.addEventListener('submit', onBtnClick);

function onBtnClick(e) {
  e.preventDefault();
  const amount = parseInt(refs.inputAmount.value);
  const delay = parseInt(refs.inputDelay.value);
  const delayStep = parseInt(refs.inputStep.value);

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
    }, delay);
  });
}
