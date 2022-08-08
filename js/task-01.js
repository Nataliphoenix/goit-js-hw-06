const allCategories = categories.querySelectorAll('li.item');
console.log('Number of categories:', allCategories.length);

for (let elem of allCategories) {
    let category = elem.firstElementChild.textContent;   
    let quantityElem = elem.lastElementChild.children.length;
    console.log(`Category: ${category} \nElements: ${quantityElem}`);
};

