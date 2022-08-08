const inputEl = document.querySelector('input#font-size-control')
const spanEl = document.querySelector('span#text')

const onInputChange = () => {
  spanEl.style.fontSize = `${inputEl.value}px`;
};

inputEl.addEventListener("input", onInputChange);