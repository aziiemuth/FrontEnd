let fruits = {
    'nanas': { price: 7500, discount: 5, purchaseCount: 0 },
    'anggur': { price: 35000, discount: 15, purchaseCount: 0 },
    'melon': { price: 12500, discount: 10, purchaseCount: 0 }
};

let purchaseHistory = [];

function renderFruits() {
    const fruitList = document.getElementById('fruitList');
    fruitList.innerHTML = '';

    for (const [name, data] of Object.entries(fruits)) {
        const fruitCard = `
            <div class="col-md-4 mb-4">
                <div class="card fruit-card h-100 shadow-sm">
                    <div class="purchase-count">${data.purchaseCount}x dibeli</div>
                    <div class="discount-badge">${data.discount}% OFF</div>
                    <div class="card-body text-center">
                        <i class="fas fa-fruit fa-3x mb-3 text-warning"></i>
                        <h5 class="card-title">${name.charAt(0).toUpperCase() + name.slice(1)}</h5>
                        <p class="price-tag d-inline-block">Rp ${data.price.toLocaleString()} /kg</p>
                        <i class="fas fa-trash delete-btn" onclick="deleteFruit('${name}')"></i>
                    </div>
                </div>
            </div>
        `;
        fruitList.innerHTML += fruitCard;
    }
}

function formatDateTime(date) {
    const pad = (n) => n.toString().padStart(2, '0');
    return `${pad(date.getDate())}/${pad(date.getMonth()+1)}/${date.getFullYear()} ${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

function renderPurchaseHistory() {
    const historyTable = document.getElementById('purchaseHistory');
    historyTable.innerHTML = '';

    purchaseHistory.forEach((purchase, index) => {
        const row = `
            <tr>
                <td>${index + 1}</td>
                <td>${purchase.datetime}</td>
                <td>${purchase.name}</td>
                <td>Rp ${purchase.price.toLocaleString()}</td>
                <td>${purchase.discount}%</td>
                <td>Rp ${purchase.totalPrice.toLocaleString()}</td>
            </tr>
        `;
        historyTable.innerHTML += row;
    });
}

function clearHistory() {
    Swal.fire({
        title: 'Apakah anda yakin?',
        text: "Semua riwayat pembelian akan dihapus!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Ya, hapus!',
        cancelButtonText: 'Batal'
    }).then((result) => {
        if (result.isConfirmed) {
            purchaseHistory = [];
            renderPurchaseHistory();
            Swal.fire('Dihapus!', 'Riwayat pembelian telah dihapus.', 'success');
        }
    });
}

function deleteFruit(name) {
    Swal.fire({
        title: 'Apakah anda yakin?',
        text: `Buah ${name} akan dihapus!`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Ya, hapus!',
        cancelButtonText: 'Batal'
    }).then((result) => {
        if (result.isConfirmed) {
            delete fruits[name];
            renderFruits();
            Swal.fire('Dihapus!', `Buah ${name} telah dihapus.`, 'success');
        }
    });
}

function addNewFruit() {
    const name = document.getElementById('newFruitName').value.toLowerCase();
    const price = parseInt(document.getElementById('newFruitPrice').value);
    const discount = parseInt(document.getElementById('newFruitDiscount').value);

    if (!name || isNaN(price) || isNaN(discount)) {
        Swal.fire('Oops...', 'Pastikan semua data buah telah diisi dengan benar!', 'error');
        return;
    }

    fruits[name] = { price, discount, purchaseCount: 0 };
    renderFruits();

    Swal.fire('Sukses!', `Buah ${name} berhasil ditambahkan!`, 'success');
    document.getElementById('newFruitName').value = '';
    document.getElementById('newFruitPrice').value = '';
    document.getElementById('newFruitDiscount').value = '';
}

function checkFruit() {
    const fruitName = document.getElementById('fruitInput').value.toLowerCase();
    const fruitData = fruits[fruitName];

    if (!fruitData) {
        Swal.fire('Oops...', 'Buah tidak tersedia!', 'error');
        return;
    }

    fruitData.purchaseCount += 1;
    const discountPrice = fruitData.price * (1 - fruitData.discount / 100);
    const purchase = {
        name: fruitName,
        price: fruitData.price,
        discount: fruitData.discount,
        totalPrice: discountPrice,
        datetime: formatDateTime(new Date())
    };

    purchaseHistory.push(purchase);
    renderPurchaseHistory();
    renderFruits();
    Swal.fire('Sukses!', `${fruitName} berhasil dibeli!`, 'success');
    document.getElementById('fruitInput').value = '';
}

renderFruits();
renderPurchaseHistory();
