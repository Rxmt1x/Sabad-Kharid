// ================== FILTER & SORT LOGIC ==================

let currentColorFilter = 'all';
let currentSizeFilter = 'all';
let currentSort = 'desc'; // default: expensive to cheap

function applyFiltersAndSort(category) {
    let filteredProducts = products.filter(p => p.category === category);

    // Color filter
    if (currentColorFilter !== 'all') {
        filteredProducts = filteredProducts.filter(p => p.color === currentColorFilter);
    }

    // Size filter (if product has that size in its size array)
    if (currentSizeFilter !== 'all') {
        filteredProducts = filteredProducts.filter(p => p.size.includes(currentSizeFilter));
    }

    // Sort
    filteredProducts.sort((a, b) => {
        if (currentSort === 'asc') {
            return a.price - b.price;
        } else {
            return b.price - a.price;
        }
    });

    // Re-render
    renderProducts(category, filteredProducts); // ← we will modify renderProducts to accept optional array
}

// ================== Populate dropdowns dynamically ==================
function populateFilters(category) {
    const categoryProducts = products.filter(p => p.category === category);

    // Colors
    const colors = [...new Set(categoryProducts.map(p => p.color))];
    const colorSelect = document.getElementById('colorFilter');
    colorSelect.innerHTML = '<option value="all">همه رنگ‌ها</option>';
    colors.forEach(color => {
        const opt = document.createElement('option');
        opt.value = color;
        opt.textContent = color === 'black' ? 'مشکی' :
                         color === 'white' ? 'سفید' :
                         color === 'blue' ? 'آبی' :
                         color === 'gray' ? 'طوسی' :
                         color === 'green' ? 'سبز' : color;
        colorSelect.appendChild(opt);
    });

    // Sizes - get ALL possible sizes from this category
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

// ================== Event Listeners ==================
document.addEventListener('DOMContentLoaded', () => {
    // Better category detection - look at the page title (it's the safest for your setup)
    const title = document.title.trim();

    let category = null;

    if (title.includes('تیشرت')) category = 'tshirt';
    else if (title.includes('شلوار')) category = 'pants';
    else if (title.includes('هودی')) category = 'hoodie';
    else if (title.includes('کفش') || title.includes('shoes')) category = 'shoes';

    if (!category) {
        console.error("Couldn't detect category from title. Check document.title");
        return;
    }

    console.log("Detected category:", category); // ← add this for debugging

    populateFilters(category);

    // Add event listeners
    const colorSelect = document.getElementById('colorFilter');
    const sizeSelect = document.getElementById('sizeFilter');

    if (colorSelect) {
        colorSelect.addEventListener('change', (e) => {
            currentColorFilter = e.target.value;
            applyFiltersAndSort(category);
        });
    }

    if (sizeSelect) {
        sizeSelect.addEventListener('change', (e) => {
            currentSizeFilter = e.target.value;
            applyFiltersAndSort(category);
        });
    }

    document.querySelectorAll('.sort-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.sort-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentSort = btn.dataset.sort;
            applyFiltersAndSort(category);
        });
    });

    // Initial render with default filters
    applyFiltersAndSort(category);
});
