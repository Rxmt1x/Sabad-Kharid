function renderProducts(category) {
  const container = document.getElementById("productList");
  container.innerHTML = "";

  const filteredProducts = products.filter(
    p => p.category === category
  );

  filteredProducts.forEach(product => {
    const div = document.createElement("div");
    div.className = "box";

    const sizesHTML = product.size
      .filter(q => product.quantity[q] > 0)
      .map(q => `
        <button class="size-btn" data-size="${q}">
          ${q}
        </button>
      `)
      .join("");

    div.innerHTML = `
      <img src="${product.image}" height="250" width="300">
      <p>${product.name}</p>
      <a class="price">قیمت: ${numbers(product.price)}</a>

      <div class="sizes">${sizesHTML}</div>

      <button class="addTocartBtn">افزودن به سبد خرید</button>
    `;

    let selectedSize = null;

    div.querySelectorAll(".size-btn").forEach(btn => {
      btn.onclick = () => {
        selectedSize = btn.dataset.size;
        div.querySelectorAll(".size-btn").forEach(b =>
          b.classList.remove("active")
        );
        btn.classList.add("active");
      };
    });

    div.querySelector(".addTocartBtn").onclick = () => {
      if (!selectedSize) {
        alert("لطفاً سایز را انتخاب کنید");
        return;
      }
      add(product.id, selectedSize);
    };

    container.appendChild(div);
  });
}

