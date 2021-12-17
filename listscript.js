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

            const removeProduct = productId => {
                let products = arrG;
                const index = products.findIndex(product => product.id === productId);
                console.log(index);
                if (index > -1) {
                    products.splice(index, 1);
                    localStorage.setItem('keyGoods',JSON.stringify(products));
                    window.location.reload();
                }
            };
            removeProduct(element.id);
        })
        wrapContainerGoods.appendChild(goodsConatiner);
        goodsConatiner.appendChild(goodsName);
        goodsConatiner.appendChild(goodsQuantity);
        goodsConatiner.appendChild(goodsPrice);
        goodsConatiner.appendChild(img);
        goodsConatiner.appendChild(btnRemoveElement);
    }
}
//          let newArrG = arrG.slice(element, 1);
//           localStorage.setItem('keyGoods' ,JSON.stringify(newArrG));
