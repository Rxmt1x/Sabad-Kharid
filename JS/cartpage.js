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
        <button onclick="add(${product.id})">+</button>
        <button onclick="decrease(${product.id})">-</button>
        <button onclick="remove(${product.id})">x</button>
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
  const qty = Stock(productId, size);

  if (qty >= inStockStock) {
    alert("موجودی این سایز تمام شده");
    return;
  }

  const product = cart.find(
    p => p.productId === productId && p.size === size
  );

  if (product) {
    product.stock += 1;
  } else {
    cart.push({ productId, size, stock: 1 });
  }

  saveCart();
  renderCart();
}


//kam kardan mahsol as cart

function decrease(productId){
    const product=cart.find(p =>p.productId===productId);
    if(!product)return;
    product.quantity-=1;

    if(product.quantity<=0){
        cart=cart.filter(p =>p.productId!==productId);
    }
    saveCart();
    renderCart();
}

//hazf kardan mahsole az cart

function remove(productId){
    cart=cart.filter(p =>p.productId!==productId);
    saveCart();
    renderCart();
}

//gereftane tedade mahsole dar stock

function Stock(productId,size){
    const product=cart.find(p =>p.productId===productId&&p.size===size);
    return product?product.stock:0;
}

//farsi kardane adad

function numbers(number) {
    return number.toLocaleString('fa-IR');
}

renderCart();


