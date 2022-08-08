// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
//       подставляет его текущее значение в span#name - output.
// Если инпут пустой, в спане должна отображаться строка "Anonymous".

const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

console.log(input)
console.log(output)

input.addEventListener('input', onInputChange);

function onInputChange(event) {
      const eventEl = event.currentTarget.value;

      (eventEl !== "")
            ? output.textContent = eventEl
            : output.textContent = "Anonymous";
      
}



// function onInputChange(event) {
//       const eventEl = event.currentTarget.value;
//       if (eventEl !== "") {
//            return output.textContent = eventEl;    
//       }
//       return output.textContent = "Anonymous";
// }