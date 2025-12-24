let cart=[];
function loadCart(){
    const savedCart=localStorage.getItem("cart");
    if(savedCart)cart=JSON.parse(savedCart);
    else cart=[];
}

//code ro be tasvir mikeshe ba html daroni

function renderCart(){
    loadCart();
    const container=document.getElementById("cartItems");
    container.innerHTML="";
    let totalPrice=0;

    cart.forEach(cartItems =>{
        const product= products.find(p =>p.id===cartItems.productId);
        if(!product)return;
        const fullPrice=product.price*cartItems.quantity;
        totalPrice+=fullPrice;

        const div=document.createElement("div");
        div.classList.add("cartInfo");
        div.innerHTML= `
        <img src="${product.image}"class="image">
        <div class="info">
        <h4>${product.name} (${cartItems.size})</h4>
        قیمت واحد:<p>${numbers(product.price)}</p>
        تعداد:<p>${numbers(cartItems.quantity)}</p>  
        قیمت کل: <p>${numbers(fullPrice)}</p>
        </div>
        <div class="btnBox">
        <button onclick="add(${product.id}, '${cartItems.size}')">+</button>
        <button onclick="decrease(${product.id}, '${cartItems.size}')">-</button>
        <button onclick="remove(${product.id}, '${cartItems.size}')">x</button>
        </div>
        <hr>
    `;
    container.appendChild(div);
    });

    if(cart.length===0){
        document.querySelector(".payout").style.display="none";
        document.querySelector(".cart").style.justifyContent="center";
        document.getElementById("empty").style.display="flex";
    }
    else{
        document.querySelector(".payout").style.display="flex";
        document.getElementById("empty").style.display="none"
        document.getElementById("price").innerText=numbers(totalPrice)+": جمع کل "
    }
}

/*function namayeshe carto faal mikone*/

if(document.getElementById("cartItems")){
renderCart();}

/*taghirato save mikone*/

function saveCart(){
    localStorage.setItem("cart",JSON.stringify(cart));
}

//item haro ba click be cart ezafe mikone

function add(productId, size) {
  loadCart();

  const product = products.find(p => p.id === productId);
  if (!product) return;

  const inStock = product.stock[size];

  const cartItem = cart.find(
    p => p.productId === productId && p.size === size
  );

  const currentQty = cartItem ? cartItem.quantity : 0;

  if (currentQty >= inStock) {
    alert("موجودی این سایز تمام شده");
    return;
  }

  if (cartItem) {
    cartItem.quantity += 1;
  } else {
    cart.push({ productId, size, quantity: 1 });
  }

  saveCart();
  renderCart();
}



//kam kardan mahsol as cart

function decrease(productId, size) {
  const item = cart.find(
    p => p.productId === productId && p.size === size
  );
  if (!item) return;

  item.quantity -= 1;

  if (item.quantity <= 0) {
    cart = cart.filter(
      p => !(p.productId === productId && p.size === size)
    );
  }

  saveCart();
  renderCart();
}


//hazf kardan mahsole az cart

function remove(productId, size) {
  cart = cart.filter(
    p => !(p.productId === productId && p.size === size)
  );
  saveCart();
  renderCart();
}


//farsi kardane adad

function numbers(number) {
    return number.toLocaleString('fa-IR');
}

renderCart();


