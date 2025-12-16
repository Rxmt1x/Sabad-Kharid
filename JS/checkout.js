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
        <p>${mahsol.name}x${adadFarsi(mahsoleCart.teedadMahsol)}</p>
        <p>${adadFarsi(mahsol.price * mahsoleCart.teedadMahsol)}</p>
        <hr>
        `;
        container.appendChild(div);
        });

        const mablagh=mohasebeCheckout();
        document.getElementById("no-maliat").innerText=adadFarsi(mablagh.noMaliat)+": بدون مالیات";
        document.getElementById("maliat").innerText=adadFarsi(mablagh.maliat)+": مالیات"
        document.getElementById("mablaghe-nahaie").innerText=adadFarsi(mablagh.mablagheNahaie)+": مبلغ نهایی";
    }
    if (document.getElementById("itemha"))
    namayesheCheckout();


        