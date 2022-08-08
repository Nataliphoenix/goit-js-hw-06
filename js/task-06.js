// Напиши скрипт, который при потере фокуса на инпуте(событие blur),
//       проверяет его содержимое на правильное количество введённых символов.

//       Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.


const inputEl = document.querySelector('input')
const inputId = document.getElementById('validation-input');
const lengthValue = document.querySelector('input[data-length="6"]');

inputEl.addEventListener('blur', onInputBlur)

function onInputBlur(event) {
      if (inputEl.value.length  === Number(lengthValue.dataset.length)) {
            inputId.classList.remove('invalid')
            return inputId.classList.add('valid')
            
      }
      else {
            inputId.classList.remove('valid')
            return inputId.classList.add('invalid')
 
      }
}
