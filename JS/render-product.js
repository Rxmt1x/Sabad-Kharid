function renderProducts(category, filteredProducts = null) {
  const container = document.getElementById("productList");
  if (!container) return;

  container.innerHTML = "";

  // Use the passed filtered/sorted products (from filters.js)
  // OR if nothing passed → show normal category products
  let displayProducts;

  if (filteredProducts && Array.isArray(filteredProducts)) {
    displayProducts = filteredProducts;
  } else {
    displayProducts = products.filter(p => p.category === category);
  }

  // Show nice message when no products match
  if (displayProducts.length === 0) {
    container.innerHTML = '<p style="text-align:center; padding:4rem; color:#666; font-size:1.3rem;">هیچ محصولی پیدا نشد ☹️</p>';
    return;
  }

  displayProducts.forEach(product => {
    const div = document.createElement("div");
    div.className = "box";

    const sizesHTML = product.size
      .filter(q => product.stock[q] > 0)
      .map(q => `
        <button class="sizeBtn" data-size="${q}">
          ${q}
        </button>
      `)
      .join("");

    div.innerHTML = `
      <img src="${product.image}" height="250" width="300">
      <p>${product.name}</p>
      <a class="price">قیمت: ${numbers(product.price)}</a>

      <div class="sizes">${sizesHTML}</div>

      <button class="addBtn">افزودن به سبد خرید</button>
    `;

    let selectedSize = null;

    div.querySelectorAll(".sizeBtn").forEach(btn => {
      btn.onclick = () => {
        selectedSize = btn.dataset.size;
        div.querySelectorAll(".sizeBtn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
      };
    });

    div.querySelector(".addBtn").onclick = () => {
      if (!selectedSize) {
        alert("لطفاً سایز را انتخاب کنید");
        return;
      }
      add(product.id, selectedSize);  
    };

    container.appendChild(div);
  });
}