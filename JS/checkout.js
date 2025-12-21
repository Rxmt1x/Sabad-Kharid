function loadCart(){
    const savedCart=localStorage.getItem("cart");
    if(savedCart)cart=JSON.parse(savedCart);
}

function renderCheckout(){
    const container=document.getElementById("items");

        cart.forEach(cartItem =>{
        const item= products.find(p =>p.id===cartItem.idItem);
        if(!item)return;

        const div=document.createElement("div");
        div.innerHTML=`
        <p>${item.name}x${adadFarsi(cartItem.itemQuantity)}</p>
        <p>${adadFarsi(item.price * cartItem.itemQuantity)}</p>
        <hr>
        `;
        container.appendChild(div);
        });

        const mablagh=caculateCheckout();
        document.getElementById("noTax").innerText=adadFarsi(mablagh.noTax)+": بدون مالیات";
        document.getElementById("Tax").innerText=adadFarsi(mablagh.Tax)+": مالیات"
        document.getElementById("finalPrice").innerText=adadFarsi(mablagh.finalPrice)+": مبلغ نهایی";
    }

function caculateCheckout(){
    let noTax=0;
    cart.forEach(cartItem =>{
        const item=products.find(p =>p.id===cartItem.idItem);
        if(!item)return;
        noTax+=item.price*cartItem.itemQuantity;
    });
    const Tax=noTax*0.1;
    const finalPrice=noTax+Tax;
    return{noTax,Tax,finalPrice};
}

renderCheckout();


        