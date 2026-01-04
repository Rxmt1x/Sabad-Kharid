let colorFilter = 'all';
let sizeFilter = 'all';
let sort = 'desc';

function filter(category) {
  let filtered = products.filter(p => p.category === category);

  if (colorFilter !== 'all') filtered = filtered.filter(p => p.color === colorFilter);
  if (sizeFilter !== 'all') filtered = filtered.filter(p => p.size.includes(sizeFilter));

  filtered.sort((a, b) => sort === 'asc' ? a.price - b.price : b.price - a.price);

  renderProducts(category, filtered);
}

function categoryFilter(category) {
  const categoryProducts = products.filter(p => p.category === category);

  const colorFar = { black: 'مشکی', white: 'سفید', blue: 'آبی', gray: 'طوسی', green: 'سبز' };
  const colors = [...new Set(categoryProducts.map(p => p.color))];
  const colorSelect = document.getElementById('colorFilter');
  colorSelect.innerHTML = '<option value="all">همه رنگ‌ها</option>';
  colors.forEach(color => {
    const opt = document.createElement('option');
    opt.value = color;
    opt.textContent = colorFar[color] || color;
    colorSelect.appendChild(opt);
  });

  const allSizes = new Set();
  categoryProducts.forEach(p => p.size.forEach(s => allSizes.add(s)));
  const sizeSelect = document.getElementById('sizeFilter');
  sizeSelect.innerHTML = '<option value="all">همه سایزها</option>';
  [...allSizes].sort().forEach(size => {
    const opt = document.createElement('option');
    opt.value = size;
    opt.textContent = size;
    sizeSelect.appendChild(opt);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const title = document.title.trim();
  let category;
  if (title.includes('تیشرت')) category = 'tshirt';
  else if (title.includes('شلوار')) category = 'pants';
  else if (title.includes('هودی')) category = 'hoodie';
  else if (title.includes('کفش')) category = 'shoes';

  if (category) {
    categoryFilter(category);
    const colorSelect = document.getElementById('colorFilter');
    const sizeSelect = document.getElementById('sizeFilter');
    colorSelect?.addEventListener('change', (e) => {
      colorFilter = e.target.value;
      filter(category);
    });
    sizeSelect?.addEventListener('change', (e) => {
      sizeFilter = e.target.value;
      filter(category);
    });
    document.querySelectorAll('.sort-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.sort-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        sort = btn.dataset.sort;
        filter(category);
      });
    });
    filter(category); 
  }
});