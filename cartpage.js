let cart = [];
function loadCart() {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
        cart = JSON.parse(savedCart);// aslan motevajeh nashodam,beporsam az g hatman
    }
    else{
        cart = [];
    }
}