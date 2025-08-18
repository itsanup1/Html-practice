  import {products} from "./product.js";
  
  const productGrid = document.querySelector('.product-grid');
  
  products.forEach((product) => {
    let code = `
    <div class="products">
      <img class="product-image" src="${product.image}">
      <div class = "product-name-container">
        <p class="product-name">${product.name}</p>
      </div>
      <div class="product-rating">
        <div>
          <img src="images/ratings/rating-${(product.rating.stars)*10}.png">
        </div>
        <div class="ratings-count">${product.rating.count}</div>
      </div>
      <p class="product-price">$${(product.price/100).toFixed(2)}</p>
      <select class="product-quantity" name="quantity">
        <option value="1" selected>1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
      <button class="add-to-cart-button">Add to Cart</button>
    </div>
    `;
    productGrid.innerHTML += code;
  });