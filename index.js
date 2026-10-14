const products = [
    { 
        name: "Shoes",
         price: 1200,
       image: "./82aTZGQ0_0ed83268921e4d17ae91f4a994d94f3c.jpg"
         },
    { name: "Watch", price: 800,image:"./103899-400.webp" },
    { name: "heels", price: 10000, image:"./511OjFZWwVL._AC_UY1000_.jpg"},
    { name: "flower pot", price: 1500 ,image:"./51lL441+U5L._AC_UF894,1000_QL80_.jpg"},
    { name: "almirah", price: 80000,image:"./images.jpg" }
];

const product = document.querySelector("#product-container");
const filter = document.querySelector("#filter");

function displayProducts(items) {
    product.innerHTML = "";

    items.forEach((item) => {
        const card = document.createElement("div");
        card.className = "product-card";
        const img = document.createElement("img");
img.src = item.image;
img.alt = item.name;
       const title = document.createElement("h3");
title.textContent = `${item.name} - ₹${item.price}`;

card.appendChild(img);
card.appendChild(title);
        product.appendChild(card);
    });
}

displayProducts(products);

filter.addEventListener("input", () => {
    const searchText = filter.value.toLowerCase();

    const filteredProducts = products.filter((item) => {
        return item.name.toLowerCase().includes(searchText);
    });

    displayProducts(filteredProducts);
});