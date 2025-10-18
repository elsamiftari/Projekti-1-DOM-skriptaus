// Fetch data from the API
const uri = 'https://fakestoreapi.com/products';
const productContainer = document.getElementById('product-container');
// Fetch data from the API
fetch(uri)
    .then(response => response.json())
    .then(data => {
        const products = data;
        tulostaTuotteet(products);
    })
    .catch(error => {
        console.error('Error:', error);
    });
// Display the products
function tulostaTuotteet(products) {
    console.log(products);
    let txt = '<table><tbody><tr><td><strong>Nimi</strong></td><td><strong>Hinta</strong></td><td><strong>Kuva</strong></td></tr>';

    products.forEach(product => {
        const product_uri = 'https://fakestoreapi.com/products/' + product.id;
        txt += `<tr onclick="window.location='tuotesivu.html?id=${product.id}'"><td>${product.title}</td><td>${product.price}€</td><td><img class='kuva' src="${product.image}" alt="${product.title}"></td></tr>`;
    });
    txt += '</tbody></table>';
    productContainer.innerHTML = txt;
}

// Path: WS08_Parsing_data/tuntiharjoitus2_JSON/scripts/script.js

