//- Імітуємо наповнення інтернет магазину товарами :
// Створити форму з наступними полями :
// - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
// До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар
let formContainer = document.createElement('form');
document.body.appendChild(formContainer);
let labelNameGoods = document.createElement('label');
labelNameGoods.innerText = `Name Goods `;
let inputNameGoods = document.createElement('input');
inputNameGoods.type = `text`;
let labelNumberGoods = document.createElement('label');
labelNumberGoods.innerText = `Quantity of goods`;
let inputNumberGoods = document.createElement('input');
inputNumberGoods.type = `text`;
let labelPrice = document.createElement('label');
labelPrice.innerText = `Price`;
let iputPrice = document.createElement('input');
iputPrice.type = `text`;
let labelImg = document.createElement('label');
labelImg.innerText = `Image`;
let inputImg = document.createElement('input');
inputImg.type = `text`;
let formBtn = document.createElement('button');
formBtn.innerText = `Click`;
formContainer.appendChild(labelNameGoods);
labelNameGoods.appendChild(inputNameGoods);
formContainer.appendChild(labelNumberGoods);
labelNumberGoods.appendChild(inputNumberGoods);
formContainer.appendChild(labelPrice);
labelPrice.appendChild(iputPrice);
formContainer.appendChild(labelImg);
labelImg.appendChild(inputImg);
formContainer.appendChild(formBtn);
let referenseListPage = document.createElement('a');
referenseListPage.href = 'list.html';
referenseListPage.innerText = 'List page';
document.body.appendChild(referenseListPage);
let item = 'keyGoods';

let saveGoods = (name, quantity, price, image) => {
        let id = (new Date()).getTime();
        let newArr = JSON.parse(localStorage.getItem(item)) || [];
        newArr.push({id ,name, quantity, price, image});
        localStorage.setItem(item, JSON.stringify(newArr));
};
formBtn.addEventListener('click', function (e) {
        e.preventDefault();
        saveGoods(inputNameGoods.value, inputNumberGoods.value, iputPrice.value, inputImg.value);
})









