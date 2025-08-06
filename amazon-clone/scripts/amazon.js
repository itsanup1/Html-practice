  const products=[
    {
      image:"images/product-images/6-piece-white-dinner-plate-set.jpg",
      name:"Adults Plane Cotton T-Shirt 2-Pack",
      rating : {
        stars:"4.0",
        count:"37"
      },
      price:"2056"
    },{
      image:"images/product-images/adults-plain-cotton-tshirt-2-pack-teal.jpg",
      name:"Adults Plain Cotton T-Shirt-2 Pack",
      rating : {
        stars:"4.5",
        count:"33"
      },
      price:"799"
    },{
      image:"images/product-images/athletic-cotton-socks-6-pairs.jpg",
      name:"Black and Grey athletic Cotton Socks-6 Pairs",
      rating : {
        stars:"4.5",
        count:"87"
      },
      price:"1090"
    },{
      image:"images/product-images/bathroom-rug.jpg",
      name:"Bathroom Bath Rug Mat 20×31 inch - Grey",
      rating : {
        stars:"4.5",
        count:"119"
      },
      price:"1250"
    },{
      image:"images/product-images/black-2-slot-toaster.jpg",
      name:"2 Slot Toaster-Black",
      rating : {
        stars:"5.0",
        count:"2197"
      },
      price:"1899"
    },{
      image:"images/product-images/blackout-curtains-black.jpg",
      name:"Blackout Curtains Set 42×84-Inch- Black, 2 Panels",
      rating : {
        stars:"4.5",
        count:"363"
      },
      price:"3099"
    },{
      image:"images/product-images/coffeemaker-with-glass-carafe-black.jpg",
      name:"Coffee Maker with Glass Carafe and Reusable",
      rating : {
        stars:"4.5",
        count:"1211"
      },
      price:"2250"
    },{
      image:"images/product-images/countertop-blender-64-oz.jpg",
      name:"Countertop Blender- 64oz, 1400 Watts",
      rating : {
        stars:"4.0",
        count:"560"
      },
      price:"10747"
    },{
      image:"images/product-images/duvet-cover-set-blue-twin.jpg",
      name:"Duvet Cover Set with Zipper Closure",
      rating : {
        stars:"4.0",
        count:"546"
      },
      price:"2399"
    },{
      image:"images/product-images/facial-tissue-2-ply-18-boxes.jpg",
      name:"Ultra Soft Tissue 2-Ply- 18 Box",
      rating : {
        stars:"4.0",
        count:"99"
      },
      price:"2374"
    },{
      image:"images/product-images/floral-mixing-bowl-set.jpg",
      name:"10-Piece Mixing Bowl Set with Lids - Floral",
      rating : {
        stars:"5.0",
        count:"679"
      },
      price:"3899"
    },{
      image:"images/product-images/intermediate-composite-basketball.jpg",
      name:"Intermediate Size Basketball",
      rating : {
        stars:"4.0",
        count:"128"
      },
      price:"2095"
    },{
      image:"images/product-images/kitchen-paper-towels-30-pack.jpg",
      name:"2 Ply Kitchen Paper Towels - 30 Pack",
      rating : {
        stars:"4.5",
        count:"1045"
      },
      price:"5799"
    },{
      image:"images/product-images/knit-athletic-sneakers-gray.jpg",
      name:"Men's Knit Athletic sneakers",
      rating : {
        stars:"4.0",
        count:"89"
      },
      price:"3390"
    },{
      image:"images/product-images/liquid-laundry-detergent-plain.jpg",
      name:"Liquid Laundry Detergent, 110 loads, 82.5 Fl oz",
      rating : {
        stars:"4.5",
        count:"305"
      },
      price:"2899"
    },{
      image:"images/product-images/luxury-tower-set-6-piece.jpg",
      name:"Luxury Towel Set- Graphite Grey",
      rating : {
        stars:"5.0",
        count:"569"
      },
      price:"3599"
    },{
      image:"images/product-images/men-chino-pants-beige.jpg",
      name:"Men's Classic Pleated Chino Pants",
      rating : {
        stars:"4.0",
        count:"467"
      },
      price:"2290"
    },{
      image:"images/product-images/men-cozy-fleece-zip-up-hoodie-red.jpg",
      name:"Men's Full-Zip Hooded Fleece Sweatshirt",
      rating : {
        stars:"4.5",
        count:"269"
      },
      price:"2400"
    },{
      image:"images/product-images/men-golf-polo-t-shirt-blue.jpg",
      name:"Men's Regular-Fit Quick-Dry Golf Polo Shirt",
      rating : {
        stars:"4.5",
        count:"378"
      },
      price:"1599"
    },{
      image:"images/product-images/men-navigator-sunglasses-brown.jpg",
      name:"Men's Navigator Sunglasses Pilot",
      rating : {
        stars:"5.0",
        count:"547"
      },
      price:"1690"
    },{
      image:"images/product-images/men-slim-fit-summer-shorts-gray.jpg",
      name:"Men's Slim-Fit Summer Shorts",
      rating : {
        stars:"4.5",
        count:"549"
      },
      price:"1699"
    },{
      image:"images/product-images/plain-hooded-fleece-sweatshirt-yellow.jpg",
      name:"Plain Hooded Fleece Sweatshirt- Yellow",
      rating : {
        stars:"4.0",
        count:"163"
      },
      price:"2400"
    }
  ];
  
  const productGrid = document.querySelector('.product-grid');
  
  products.forEach((product) => {
    let code = `
    <div class="products">
      <img class="product-image" src="${product.image}">
      <div class="product-name">
        <p>${product.name}</p>
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