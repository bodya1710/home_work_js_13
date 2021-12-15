let btnRemove = document.createElement('button');
document.body.appendChild(btnRemove);
btnRemove.innerText =`Click`;
btnRemove.addEventListener('click', function () {
    localStorage.clear();
    window.location.reload();
})

let wrapContainerGoods = document.createElement('div');
document.body.appendChild(wrapContainerGoods);
for(let i=0; i<localStorage.length; i++) {
    let key = localStorage.key(i);
    let arrG = JSON.parse(localStorage.getItem(key));
    for (const element of arrG) {
        let goodsConatiner = document.createElement('div');
        goodsConatiner.classList.add('goods_conatiner');
        let goodsName = document.createElement('p');
        goodsName.innerText = `Name Goods: ${element.name}`;
        let goodsQuantity = document.createElement('p');
        goodsQuantity.innerText = `Quantity of goods: ${element.quantity}`;
        let goodsPrice = document.createElement('p');
        goodsPrice.innerText = `Price: ${element.price}`
        let img = document.createElement('img');
        img.src = `${element.image}`;
        let btnRemoveElement = document.createElement('button');
        btnRemoveElement.innerText = `Remove Element`;
        btnRemoveElement.addEventListener('click', function () {
            localStorage.removeItem(element);
            window.location.reload();
        })

        wrapContainerGoods.appendChild(goodsConatiner);
        goodsConatiner.appendChild(goodsName);
        goodsConatiner.appendChild(goodsQuantity);
        goodsConatiner.appendChild(goodsPrice);
        goodsConatiner.appendChild(img);
        goodsConatiner.appendChild(btnRemoveElement);
        console.log(arrG);
    }
}
console.log(window);
