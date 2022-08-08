// Напиши скрипт создания и очистки коллекции элементов.Пользователь 
// вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция.
//  При нажатии на кнопку Очистить, коллекция элементов очищается.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// Создай функцию createBoxes(amount), которая принимает один параметр - число. 
// Функция создает столько < div >, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX.Используй готовую функцию 
// getRandomHexColor для получения цвета.

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы. 

// const refs = {
//   input: controls.querySelector('input'),
//   btnCreate: controls.querySelector('[data-create]'),
//   btnDestroy: controls.querySelector('[data-destroy]'),
//   divBoxes: document.querySelector('div#boxes')
// }

// console.log(refs.input)
// console.log(refs.btnCreate)
// console.log(refs.btnDestroy)
// console.log(refs.divBoxes)

// refs.btnCreate.addEventListener('click', createBoxes)

// let amount = 0;

// function createBoxes(amount) {
//   event.preventDefault();

//   amount = refs.input.value;
  
//   if (amount === "") {
//     console.log("Введіть числo!");
//   };

//   console.log(amount);

//   for (let i = 0; i <= amount; i +=1) {
//     const array = [];

//     const divEl = document.createElement('div');
//     divEl.style.padding = '30px';
//     divEl.style.backgroundColor = '${getRandomHexColor()}';

//     array.push(divEl);
//     return array
//   }
//    console.log(array)
 
//   divBoxes.append(...array);

  
// }
