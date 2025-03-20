// hotwheels  Products Data
const products = [
    { id: 1, name: "LAMBORGHINI ", price: "$150", img: "./lambo.jpg"},
    { id: 2, name: "BMW M3 GTR", price: "$160", img: "./bmw.jpg" },
    { id: 3, name: "NISSAN SKYLINE GT-R", price: "$140", img: "./skyline.jpg" },
    { id: 4, name: "BMW i8 ROADSTER", price: "$120", img: "./bmw.jpg" },
    { id: 5, name:"DODGE CHALLENGER",price:"$145",img:"./challange.jpg"},
    { id: 6, name:"PAGNI UTOPIA",price:"$175",img:"./pagni.jpg"},
    { id: 7, name:"SUPRA PUAL WALKER ",price:"$170",img:"./supra.jpg"},
    { id: 8, name:"HONDA CIVIC ",price:"$180",img:"./civic.jpg"},



];

// Display Products
function displayProducts() {
    const container = document.getElementById("productsContainer");
    container.innerHTML = "";
    products.forEach(product => {
        const card = `
            <div class="col-md-3 mb-4">
                <div class="card shadow">
                    <img src="${product.img}" class="card-img-top" alt="${product.name}">
                    <div class="card-body text-center">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.price}</p>
                        <button class="btn btn-custom" onclick="buyItem('${product.name}')">Order Now  </button>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += card;
    });
}

function buyItem(itemName) {
    alert("Thank you for buying ${itemName}! 🥳");
}

// Show Thank You Alert & Reset Form
function showThankYou(event) {
    event.preventDefault();
    alert("Thank you for reaching us! 👍");
    document.querySelector("form").reset();
}

// Show Sections Dynamically
function showSection(section) {
    ["landing", "products", "about", "contact"].forEach(id => document.getElementById(id).classList.add("d-none"));
    document.getElementById(section).classList.remove("d-none");
    if (section === "products") displayProducts();
}

document.addEventListener("DOMContentLoaded", () => showSection('landing'));