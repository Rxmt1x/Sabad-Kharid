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
    if(!container)return;
    container.innerHTML="";
    let mablagheKoll=0;

    cart.forEach(mahsoleCart =>{
        const mahsol= mahsolat.find(p =>p.id===mahsoleCart.idMahsol);
        if(!mahsol)return;
        const kolleMahsolat=mahsol.price*mahsoleCart.teedadMahsol;
        mablagheKoll+=kolleMahsolat;

        const div=document.createElement("div");
        div.classList.add("sabad-info");
        div.innerHTML= `
        <img src="${mahsol.image}"class="akse-mahsolat">
        <div class="info">
        <h4>${mahsol.name}</h4>
        قیمت واحد:<p>${adadFarsi(mahsol.price)}</p>
        تعداد:<p>${adadFarsi(mahsoleCart.teedadMahsol)}</p>  
        قیمت کل: <p>${adadFarsi(kolleMahsolat)}</p>
        </div>
        <div class="boxe-button">
        <button onclick="ezafeBeCart(${mahsol.id})">+</button>
        <button onclick="kamKardanAzCart(${mahsol.id})">-</button>
        <button onclick="hazfAzCart(${mahsol.id})">x</button>
        </div>
        <hr>
    `;
    container.appendChild(div);
    });
    if(cart.length===0){
        document.querySelector(".tasvie").style.display="none";
        document.querySelector(".chidemane-cart").style.justifyContent="center";
        document.getElementById("sabade-khali").style.display="flex";
    }
    else{
        document.querySelector(".tasvie").style.display="flex";
        document.querySelector(".chidemane-cart").style.justifyContent="space-betweens";
        document.getElementById("sabade-khali").style.display="none"
        document.getElementById("mablaghe-koll").innerText=adadFarsi(mablagheKoll)+": جمع کل "
    }
}
if(document.getElementById("mahsolate-cart"))
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

//maliate 10%
const darsadeMaliat=0.1;

//hesab ketab 
 
function mohasebeCheckout(){
    loadCart();
    let noMaliat=0;
    cart.forEach(mahsoleCart =>{
        const mahsol=mahsolat.find(p =>p.id===mahsoleCart.idMahsol);
        if(!mahsol)return;
        noMaliat+=mahsol.price*mahsoleCart.teedadMahsol;
    });
    const maliat=noMaliat*0.1;
    const mablagheNahaie=noMaliat+maliat;
    return{noMaliat,maliat,mablagheNahaie};
}

//farsi kardane adad

function adadFarsi(number) {
    return number.toLocaleString('fa-IR');
}
