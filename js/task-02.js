const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.

const ingredientsContainer = document.querySelector('ul#ingredients');
console.log(ingredientsContainer);

const makeIngredientEl = ingredient => {
  
  const ingredientRef = document.createElement('li');
  ingredientRef.classList.add('item');
  ingredientRef.textContent = ingredient; 
     
  return ingredientRef;
}

const elements = ingredients.map(makeIngredientEl);
console.log(elements);
ingredientsContainer.append(...elements);


