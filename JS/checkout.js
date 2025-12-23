function loadCart(){
    const savedCart=localStorage.getItem("cart");
    if(savedCart)cart=JSON.parse(savedCart);
}

function renderCheckout(){

    const container=document.getElementById("item");

        cart.forEach(cartItem =>{
        const product= products.find(p =>p.id===cartItem.productId);
        if(!product)return;

        const div=document.createElement("div");
        div.innerHTML=`
        <p>${product.name}x${numbers(cartItem.quantity)}</p>
        <p>${numbers(product.price * cartItem.quantity)}</p>
        <hr>
        `;
        container.appendChild(div);
        });

        const price=caculate();
        document.getElementById("noTax").innerText=numbers(price.noTax)+": بدون مالیات";
        document.getElementById("tax").innerText=numbers(price.tax)+": مالیات"
        document.getElementById("finalPrice").innerText=numbers(price.finalPrice)+": مبلغ نهایی";
    }

function caculate(){
    let noTax=0;
    cart.forEach(cartItem =>{
        const product=products.find(p =>p.id===cartItem.productId);
        if(!product)return;
        noTax+=product.price*cartItem.quantity;
    });
    const tax=noTax*0.1;
    const finalPrice=noTax+tax;
    return{noTax: noTax,tax: tax,finalPrice: finalPrice};
}
renderCheckout();


        