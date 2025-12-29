
let appliedDiscount = 0;  // درصد تخفیف

const discountCodes = {
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
    container.innerHTML = '<p style="color:#666; text-align:center; padding:2rem;">سبد خرید خالی است</p>';
    appliedDiscount = 0; // ریست تخفیف وقتی سبد خالی شد
    updateDiscountUI();
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

  const taxAmount = subtotal * TAX_RATE;
  const vatAmount = subtotal * VAT_RATE;
  const discountAmount = subtotal * (appliedDiscount / 100);
  const afterDiscount = subtotal - discountAmount;
  const grandTotal = afterDiscount + (afterDiscount * TAX_RATE) + (afterDiscount * VAT_RATE);

  document.getElementById("subtotal").innerText = numbers(subtotal) + " تومان";
  document.getElementById("tax").innerText     = numbers(Math.round(taxAmount)) + " تومان";
  document.getElementById("vat").innerText      = numbers(Math.round(vatAmount)) + " تومان";

  // نمایش ردیف تخفیف فقط وقتی اعمال شده
  const discountRow = document.getElementById("discountRow");
  if (discountRow) {
    if (appliedDiscount > 0) {
      discountRow.style.display = "block";
      document.getElementById("discountAmount").innerText = numbers(Math.round(discountAmount)) + " تومان";
    } else {
      discountRow.style.display = "none";
    }
  }

  document.getElementById("total").innerText = numbers(Math.round(grandTotal)) + " تومان";
}

function updateDiscountUI() {
  const input = document.getElementById("discountCode");
  if (input) {
    input.value = "";
    input.classList.remove("success", "error");
  }
}

function applyDiscount() {
  const codeInput = document.getElementById("discountCode");
  if (!codeInput) return;

  const code = codeInput.value.trim();
  const percentage = discountCodes[code];

  if (percentage) {
    appliedDiscount = percentage;
    codeInput.classList.add("success");
    codeInput.classList.remove("error");
    renderCheckout();
  } else {
    codeInput.classList.add("error");
    codeInput.classList.remove("success");
    setTimeout(() => {
      codeInput.classList.remove("error");
    }, 2000);
  }
}

// Run when page loads
document.addEventListener("DOMContentLoaded", () => {
  renderCheckout();
  updateDiscountUI();
});