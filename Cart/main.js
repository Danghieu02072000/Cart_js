const input = document.querySelector(".input-search");
const list_product = document.querySelector(".product__list");

fetch("https://fakestoreapi.com/products")
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    console.log(data)
    data.forEach(function (item) {
      const item_product = document.createElement("div");
      item_product.classList.add("product__item");
      item_product.innerHTML = `<div class="product__img">
                            <img src="${item.image}" alt="">
                        </div>
                        <div class="product__body">
                            <div class="product__name">${item.title}</div>
                            <div class="product__desc">
                                <div class="product__price">${item.price}$</div>
                                <div class="product__rating">
                                    <div class="product__rate">${item.rating.rate} <i class="bi bi-star-fill"></i></div>
                                    <div class="product__count">${item.rating.count}</div>
                                </div>
                            </div>
                        </div>`;
        
        list_product.appendChild(item_product);

    });

  });
  input.oninput = function (e) {
    const item_product = document.querySelectorAll('.product__item');
    item_product.forEach(function(item) {
        if(item.innerText.toLowerCase().includes(e.target.value.toLowerCase())) {
            item.classList.remove('none')
        }else {
            item.classList.add('none')
        }
    })
}

