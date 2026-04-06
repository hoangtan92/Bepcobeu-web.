function buildZaloLink(message) {
  return `https://zalo.me/${zaloPhone}?text=${encodeURIComponent(message)}`;
}

function productCard(product) {
  return `
    <article class="product-card">
      <img src="${product.image}" alt="${product.name}" class="product-image" />
      <div class="product-body">
        <span class="pill">${product.category}</span>
        <h3>${product.name}</h3>
        <p class="price">${product.price}</p>
        <p>${product.description}</p>
        <div class="card-actions">
          <a class="btn btn-primary" href="${buildZaloLink(product.zaloMessage)}" target="_blank" rel="noopener">Đặt qua Zalo</a>
        </div>
      </div>
    </article>
  `;
}

function renderProducts(targetId, items) {
  const target = document.getElementById(targetId);
  if (!target) return;
  target.innerHTML = items.map(productCard).join('');
}

renderProducts('featured-products', products.slice(0, 3));
renderProducts('all-products', products);
