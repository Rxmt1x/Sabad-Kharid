let appliedDiscount = 0;

const codes = {
  "11111": 10,
  "22222": 20,
  "33333": 30,
  "80085": 50
};

function loadCart() {
  const savedCart = localStorage.getItem("cart");
  cart = savedCart ? JSON.parse(savedCart) : [];
}

function numbers(n) {
  return n.toLocaleString("fa-IR");
}

function renderCheckout() {
  loadCart();
  const container = document.getElementById("item");
  if (!container) return;
  container.innerHTML = "";

  let subtotal = 0;
  if (cart.length === 0) {
    container.innerHTML = '<p style="color:#2f7d6d; text-align:center; padding:30px;">سبد خرید خالی است</p>';
    appliedDiscount = 0;
  } else {
    cart.forEach(item => {
      const product = products.find(p => p.id === item.productId);
      if (!product) return;

      const itemTotal = product.price * item.quantity;
      subtotal += itemTotal;

      const itemElement = document.createElement("div");
      itemElement.className = "checkout-item";
      itemElement.innerHTML = `
        <div class="item-info">
          <strong>${product.name}</strong>
          <span>سایز: ${item.size}</span>
          <span>تعداد: ${numbers(item.quantity)}</span>
        </div>
        <div class="item-price">
          ${numbers(itemTotal)} تومان
        </div>
      `;
      container.appendChild(itemElement);
    });
  }

  const TAX_RATE = 0.10;
  const VAT_RATE = 0.09;
  const discountAmount = subtotal * (appliedDiscount / 100);
  const afterDiscount = subtotal - discountAmount;
  const taxAmount = afterDiscount * TAX_RATE;
  const vatAmount =afterDiscount * VAT_RATE;
  const grandTotal = afterDiscount + taxAmount + vatAmount;

  document.getElementById("subtotal").innerText = numbers(subtotal) + " تومان";
  document.getElementById("tax").innerText = numbers(Math.round(taxAmount)) + " تومان";
  document.getElementById("vat").innerText = numbers(Math.round(vatAmount)) + " تومان";

  const discountRow = document.getElementById("discountRow");
  if (discountRow) {
    discountRow.style.display = appliedDiscount > 0 ? "block" : "none";
    if (appliedDiscount > 0) document.getElementById("discountAmount").innerText = numbers(Math.round(discountAmount)) + " تومان";
  }
  document.getElementById("total").innerText = numbers(Math.round(grandTotal)) + " تومان";
}

function applyDiscount() {
  const codeInput = document.getElementById("discountCode");
  if (!codeInput) return;

  const code = codeInput.value.trim();
  const percentage = codes[code];

  codeInput.classList.remove("success", "error");
  if (percentage) {
    appliedDiscount = percentage;
    codeInput.classList.add("success");
  } else {
    codeInput.classList.add("error");
    setTimeout(() => codeInput.classList.remove("error"), 2000);
    return;
  }
  renderCheckout();
}

document.addEventListener("DOMContentLoaded", () => {
  renderCheckout();
});
