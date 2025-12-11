function loadCart(){
    const carteZakhireShode=localStorage.getItem("cart");
    if(carteZakhireShode)cart=JSON.parse(carteZakhireShode);
    else cart=[];
}
function namayesheCheckout(){
    loadCart();
    const container=document.getElementById("itemha");
    container.innerHTML="";

        cart.forEach(mahsoleCart =>{
        const mahsol= mahsolat.find(p =>p.id===mahsoleCart.idMahsol);
        if(!mahsol)return;

        const div=document.createElement("div");
        div.innerHTML=`
        <p>${mahsol.name}x${mahsoleCart.teedadMahsol}</p>
        <p>${mahsol.price * mahsoleCart.teedadMahsol}</p>
        <hr>
        `;
        container.appendChild(div);
        });

        const mablagh=mohasebeCheckout();
        document.getElementById("no-maliat").innerText=mablagh.noMaliat+"مبلغ بدون مالیات:";
        document.getElementById("maliat").innerText=mablagh.maliat+"مبلغ مالیات:";
        document.getElementById("mablaghe-nahaie").innerText=mablagh.mablagheNahaie+"مبلغ نهایی:";
    }
    if (document.getElementById("itemha"))
    namayesheCheckout();

    document.getElementById("pardakht").addEventListener("click",()=>{
        window.location.href="https://sandbox.zarinpal.com/pg/StartPay/";//link kar nemikone bayad avaz konam
    });
    


        