function renderProducts(category, filtered = null) {
  const container = document.getElementById("list");
  container.innerHTML = "";

  const displayProducts = filtered && Array.isArray(filtered) 
    ? filtered 
    : products.filter(product => product.category === category);
    displayProducts.forEach(product => {
    const div = document.createElement("div");
    div.className = "box";

    const sizes = product.size.filter(size => product.stock[size] > 0).map(size => `
      <button class="sizeBtn" data-size="${size}">
        ${size}
      </button>
    `).join("");

    div.innerHTML = `
      <img src="${product.image}" height="250" width="300">
      <p>${product.name}</p>
      <a class="price">قیمت: ${numbers(product.price)}</a>
      <div class="sizes">${sizes}</div>
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
      if (!selectedSize) alert("لطفاً سایز را انتخاب کنید");
      else add(product.id, selectedSize);
    };

    container.appendChild(div);
  });
}