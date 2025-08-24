  import {products} from "./product.js";
  
  //Cart
  
  export let cart = [{
    id:"shs2j-sudn3-4hxbc",
    quantity:2
  },{
    id:"f9k7p-q2m8w-r3t5a",
    quantity:1
  },{
    id:"c7x2z-v5b8n-m1k4j",
    quantity:3
  },{
    id:"r3e6w-q9w2e-r5t8y",
    quantity:1
  },{
    id:"o2p5i-u8y1t-r4e7w",
    quantity:2
  },{
    id:"k8l5j-h2g9f-d4s1a",
    quantity:5
  }];
  
  //Updating The CartInfo
  
  export let cartInfo= [];
  function updateCart(){
    cart.forEach((item)=>{
      products.forEach((product,index)=>{
        if (product.id === item.id){
          cartInfo.push(products[index]);
        }
      });
      
    });
  }
  
  updateCart();
  