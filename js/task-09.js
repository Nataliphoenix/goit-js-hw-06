// Напиши скрипт, который изменяет цвета фона элемента < body > через 
// инлайн стиль при клике на button.change - color 
// и выводит значение цвета в span.color.


function getRandomHexColor(event) {
  
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`

}

const bodyEl = document.querySelector('body')
const btnChangeColor = document.querySelector('.change-color')
const valueColor = document.querySelector('.color')
valueColor.textContent = '-';

btnChangeColor.addEventListener('click', onChangeColorBtn)

function onChangeColorBtn(event){
  event.preventDefault();

  let randomColor = getRandomHexColor();
  
  valueColor.textContent = randomColor;
  bodyEl.style.backgroundColor = randomColor;

  console.log(randomColor)
  
};
