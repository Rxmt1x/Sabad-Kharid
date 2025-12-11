let cart=[];
function loadCart(){
    const carteZakhireShode=localStorage.getItem("cart");
    if(carteZakhireShode)cart=JSON.parse(carteZakhireShode);
    else cart=[];
}
loadCart();

//ba button+ dakhele html lebasa mahsolato be cart ezafe mikone

function zakhireCart(){
    localStorage.setItem("cart",JSON.stringify(cart));
}

function ezafeBeCart(idMahsol){
    loadCart();
    const mahsol=cart.find(p =>p.idMahsol===idMahsol);
    if(mahsol){
        mahsol.teedadMahsol+=1;
    }
    else{
        cart.push({idMahsol: idMahsol ,teedadMahsol:1});
    }

zakhireCart();
namayesheCart();
}
//code ro be tasvir mikeshe ba html daroni

function namayesheCart(){
    loadCart();
    const container=document.getElementById("mahsolate-cart");
    container.innerHTML="";
    let mablagheKoll = 0;

    cart.forEach(mahsoleCart =>{
        const mahsol= mahsolat.find(p =>p.id===mahsoleCart.idMahsol);
        if(!mahsol)return;
        const kolleMahsolat=mahsol.price*mahsoleCart.teedadMahsol;
        mablagheKoll+=kolleMahsolat;

        const div=document.createElement("div");
        div.innerHTML= `
        <h4>${mahsol.name}</h4>
        : قیمت واحد <p>${mahsol.price}</p>
     : تعداد <p>   ${mahsoleCart.teedadMahsol}</p>
     : قیمت کل<p>   ${kolleMahsolat}</p>
        <button onclick="ezafeBeCart(${mahsol.id})">+</button>
        <button onclick="kamKardanAzCart(${mahsol.id})">-</button>
        <button onclick="hazfAzCart(${mahsol.id})">x</button>
        <hr>
    `;
    container.appendChild(div);
    });
    document.getElementById("mablaghe-koll").innerText=mablagheKoll+"جمع کل:"
}
namayesheCart();

//kam kardan mahsol as cart

function kamKardanAzCart(idMahsol){
    loadCart();

    const mahsol=cart.find(p =>p.idMahsol===idMahsol);
    if(!mahsol)return;
    mahsol.teedadMahsol-=1;

    if(mahsol.teedadMahsol<=0){
        cart=cart.filter(p =>p.idMahsol!==idMahsol);
    }
    zakhireCart();
    namayesheCart();
}

//hazf kardan mahsole az cart

function hazfAzCart(idMahsol){
    loadCart();
    cart=cart.filter(p =>p.idMahsol!==idMahsol);
    zakhireCart();
    namayesheCart();
}

//maliate 9%
const darsadeMaliat=0.09;

//hesab ketab 
 
function mohasebeCheckout(){
    loadCart();
    let noMaliat=0;
    cart.forEach(mahsoleCart =>{
        const mahsol=mahsolat.find(p =>p.id===mahsoleCart.idMahsol);
        if(!mahsol)return;
        noMaliat+=mahsol.price*mahsoleCart.teedadMahsol;
    });
    const maliat=noMaliat*0.09;
    const mablagheNahaie=noMaliat+maliat;
    return{noMaliat,maliat,mablagheNahaie};

    mohasebeCheckout();
}
