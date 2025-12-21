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
    let overallPrice=0;

    cart.forEach(cartItem =>{
        const item= products.find(p =>p.id===cartItem.idItem);
        if(!item)return;
        const totalItems=item.price*cartItem.itemQuantity;
        overallPrice+=totalItems;

        const div=document.createElement("div");
        div.classList.add("cartInfo");
        div.innerHTML= `
        <img src="${item.image}"class="itemImage">
        <div class="info">
        <h4>${item.name}</h4>
        قیمت واحد:<p>${adadFarsi(item.price)}</p>
        تعداد:<p>${adadFarsi(cartItem.itemQuantity)}</p>  
        قیمت کل: <p>${adadFarsi(totalItems)}</p>
        </div>
        <div class="buttonBox">
        <button onclick="addToCart(${item.id})">+</button>
        <button onclick="decrease{(${item.id})">-</button>
        <button onclick="deleteFromCart(${item.id})">x</button>
        </div>
        <hr>
    `;
    container.appendChild(div);
    });

    if(cart.length===0){
        document.querySelector(".payment").style.display="none";
        document.querySelector(".cartLayout").style.justifyContent="center";
        document.getElementById("eamptyCart").style.display="flex";
    }
    else{
        document.querySelector(".payment").style.display="flex";
        document.getElementById("eamptyCart").style.display="none"
        document.getElementById("overallPrice").innerText=adadFarsi(overallPrice)+": جمع کل "
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

function addToCart(idItem){
    loadCart();
    const item=cart.find(p =>p.idItem===idItem);
    if(item){
        item.itemQuantity+=1;
    }
    else{
        cart.push({idItem: idItem ,itemQuantity:1});
    }

saveCart();
renderCart();
}

//kam kardan mahsol as cart

function decrease(idItem){
    const item=cart.find(p =>p.idItem===idItem);
    if(!item)return;
    item.itemQuantity-=1;

    if(item.itemQuantity<=0){
        cart=cart.filter(p =>p.idItem!==idItem);
    }
    saveCart();
    renderCart();
    loadCart();
}

//hazf kardan mahsole az cart

function deleteFromCart(idItem){
    cart=cart.filter(p =>p.idItem!==idItem);
    saveCart();
    renderCart();
    loadCart();
}

//farsi kardane adad

function adadFarsi(number) {
    return number.toLocaleString('fa-IR');
}
renderCart();