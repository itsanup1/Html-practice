  import {cart} from "./cart.js";
  import {products} from "./product.js";
  
  
  console.log(cartInfo);
  const orderPreview = document.querySelector('.order-preview');
  let htmlCode = "";
  cartInfo.forEach((item)=>{
    const html = `
      <div class="order-item">
        <div class="order-image">
          <img src= ${item.image}>
        </div>
        <div class="order-details">
          <div class="order-name">
            ${item.name}
          </div>
          <div class="order-price">
            $${item.price}
          </div>
          <div class="order-quantity">
            Quantity: 2
          </div>
        </div>
        <div class="order-delivery">
          <div class="order-delivery-title">Choose a delivery option :</div>
          <div class="order-delivery-option">
            <input type="radio" name="order1">
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
            <input type="radio" name="order1">
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
            <input type="radio" name="order1">
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
    
    console.log(html);
    htmlCode += html;
    
  });
  orderPreview.innerHTML += htmlCode;
  