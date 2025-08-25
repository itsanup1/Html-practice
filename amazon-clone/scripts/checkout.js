  import {cart} from "./cart.js";
  import {products} from "./product.js";
  
  
  const orderPreview = document.querySelector('.order-preview');
  
  export function updateCart(){
    let htmlCode = "";
    cart.forEach((cartItem)=>{
      let matchingProduct;
      products.forEach((product)=>{
        if (product.id === cartItem.id){
          matchingProduct = product;
        }

      });
      
      const html = `
        <div class="order-item">
          <div class="order-image">
            <img src= ${matchingProduct.image}>
          </div>
          <div class="order-details">
            <div class="order-name">
              ${matchingProduct.name}
            </div>
            <div class="order-price">
              $${(matchingProduct.price/100).toFixed(2)}
            </div>
            <div class="order-quantity">
              Quantity: ${cartItem.quantity}
            </div>
          </div>
          <div class="order-delivery">
            <div class="order-delivery-title">Choose a delivery option :</div>
            <div class="order-delivery-option">
              <input type="radio" name="order-${matchingProduct.id}">
              <div>
                <div class="order-date">
                  Tuesday, August 26
                </div>
                <div class="order-shipping-charge">
                  FREE Shipping
                </div>
              </div>
            </div>
            <div class="order-delivery-option">
              <input type="radio" name="order-${matchingProduct.id}">
              <div>
                <div class="order-date">
                  Tuesday, August 20
                </div>
                <div class="order-shipping-charge">
                  $4.99 - Shipping
                </div>
              </div>
            </div>
            <div class="order-delivery-option">
              <input type="radio" name="order-${matchingProduct.id}">
              <div>
                <div class="order-date">
                  Tuesday, August 18
                </div>
                <div class="order-shipping-charge">
                  $9.99 - Shipping
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
      htmlCode += html;
      
    });
    orderPreview.innerHTML = htmlCode;
  }
  updateCart();
  
  