let cart = [];

function loadCart() {
  const savedCart = localStorage.getItem("cart");
  cart = savedCart ? JSON.parse(savedCart) : [];
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function renderCart() {
  loadCart();
  const container = document.getElementById("cartItems");
  container.innerHTML = "";
  let totalPrice = 0;

  cart.forEach(item => {
    const product = products.find(p => p.id === item.productId);
    if (!product) return;

    const fullPrice = product.price * item.quantity;
    totalPrice += fullPrice;

    const div = document.createElement("div");
    div.className = "cartInfo";
    div.innerHTML = `
      <img src="${product.image}" class="image">
      <div class="info">
        <h4>${product.name} (${item.size})</h4>
        <p>قیمت واحد: ${numbers(product.price)}</p>
        <p>تعداد: ${numbers(item.quantity)}</p>
        <p>قیمت کل: ${numbers(fullPrice)}</p>
      </div>
      <div class="btnBox">
        <button onclick="add(${product.id}, '${item.size}')">+</button>
        <button onclick="decrease(${product.id}, '${item.size}')">-</button>
        <button onclick="removeItem(${product.id}, '${item.size}')">x</button>
      </div>
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

function add(productId, size) {
  loadCart();
  
  const product = products.find(p => p.id === productId); 
  if (!product) return;

  const inStock = product.stock[size] || 0;
  
  const cartItem = cart.find(i => i.productId === productId && i.size === size);
  const currentQty = cartItem ? cartItem.quantity : 0;

  if (currentQty + 1 > inStock) {
    alert(`فقط ${inStock} عدد از این سایز موجود است!`);
    return;
  }

  if (cartItem) {
    cartItem.quantity++;
  } else {
    cart.push({ productId, size, quantity: 1 });
  }

  saveCart();
  renderCart();
}

function decrease(productId, size) {
  const item = cart.find(
    i => i.productId === productId && i.size === size
  );
  if (!item) return;

  item.quantity--;

  if (item.quantity <= 0) {
    cart = cart.filter(
      i => !(i.productId === productId && i.size === size)
    );
  }

  saveCart();
  renderCart();
}

function removeItem(productId, size) {
  cart = cart.filter(
    i => !(i.productId === productId && i.size === size)
  );
  saveCart();
  renderCart();
}

function numbers(n) {
  return n.toLocaleString("fa-IR");
}

if (document.getElementById("cartItems")) {
  renderCart();
}

