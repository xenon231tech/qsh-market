const nfts = [
    {id: 1, name: 'Art #1', price: 50},
    {id: 2, name: 'Art #2', price: 75},
    {id: 3, name: 'Art #3', price: 100}
];

let cart = [];

function displayNFTs() {
    document.getElementById('nfts').innerHTML = nfts.map(nft => `
        <div class="nft-card">
            <h3>${nft.name}</h3>
            <p>$${nft.price}</p>
            <button onclick="addToCart(${nft.id})">Buy</button>
        </div>
    `).join('');
}

function addToCart(id) {
    const nft = nfts.find(n => n.id === id);
    cart.push(nft);
    updateCart();
}

function updateCart() {
    const total = cart.reduce((sum, nft) => sum + nft.price, 0);
    document.getElementById('total').textContent = total;
    document.getElementById('cart-items').innerHTML = cart.map((nft, i) => `
        <div>${nft.name} - $${nft.price} <button onclick="removeFromCart(${i})">Remove</button></div>
    `).join('');
}

function removeFromCart(i) {
    cart.splice(i, 1);
    updateCart();
}

displayNFTs();