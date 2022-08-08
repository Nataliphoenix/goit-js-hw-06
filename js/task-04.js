//Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

const counter = {
      value: 0,

      onbtnDecrementClick() {
            this.value -= 1;
      },
      onbtnIncrementClick() {
            this.value += 1;
      },
};


const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');
const valueСounter = document.querySelector('#value');


btnDecrement.addEventListener('click', () => {
      counter.onbtnDecrementClick();
      valueСounter.textContent = counter.value;
});

btnIncrement.addEventListener('click', () => {
      counter.onbtnIncrementClick();
      valueСounter.textContent = counter.value;
});