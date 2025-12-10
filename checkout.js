let cart=[];
function loadCart(){
    const carteZakhireShode=localStorage.getItem("cart");
    if(carteZakhireShode){
        cart=JSON.parse(carteZakhireShode);
    }
}