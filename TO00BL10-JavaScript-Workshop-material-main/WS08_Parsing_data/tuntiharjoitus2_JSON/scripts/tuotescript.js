// Get the query string from the current URL
let params = new URLSearchParams(window.location.search);

// Get the product ID from the query string
let productId = params.get('id');

// Fetch data for the specific product from the API
//let uri = `https://fakestoreapi.com/products/${productId}`;
let uri = "https://fakestoreapi.com/products/" + productId;

fetch(uri)
    .then(response => response.json())
    .then(product => {
        // Display the product details
        let productContainer = document.getElementById('product-container');
        const productDiv = document.createElement('div');
        productDiv.className = 'post';
        productDiv.innerHTML = `
        <h3>${product.title}</h3>
        <h4>${product.category}</h4>
        <p>${product.description}</p>
        <p>${product.price}€</p>
        <img class='kuvaiso' src="${product.image}" alt="${product.title}">
        `;
        productContainer.appendChild(productDiv);
    })
    .catch(error => {
        console.error('Error:', error);
    });
