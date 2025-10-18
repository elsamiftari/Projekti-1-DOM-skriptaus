// This script is called when FORM is submitted and it calculates an order total. 
function calculate() {
    // use strict is to prevent the use of undeclared variables
    'use strict';

    // For storing the order total:
    let total;

    // Get references from the form values:
    var quantity = document.getElementById('quantity').value;
    var price = document.getElementById('price').value;
    var tax = document.getElementById('tax').value;
    var discount = document.getElementById('discount').value;
    var shipping = document.getElementById('shipping').value;

    // Add validation here later!

    // Calculate the initial total:
    total = quantity * price;
    // Log the total before tax to the console:
    console.log("total before tax: " + total);

    // Make the tax rate easier to use:
    tax = tax / 100;
    tax = tax + 1;

    // Factor in the tax:
    total = total * tax;
    // Log the total after tax to the console:
    console.log("total after tax: " + total);

    // Factor in the discount:
    // If the quantity is greater than 100, apply a discount of 2 times the discount value
    if (quantity > 100) {
        total = total - (2 * discount);
    }
    // Otherwise, apply a discount of the discount value
    else {
        total = total - discount;
    }
    // add the shipping cost to the total multiply by 1.0 to convert the string to a number
    total = total + (1.0 * shipping);
    // Log the total after discount to the console:
    console.log("total after discount: " + total);

    // Format the total to two decimal places:
    total = total.toFixed(2);

    const tiedot = {
        quantity: quantity,
        price: price,
        tax: tax,
        discount: discount,
        shipping: shipping,
        total: total
    };
    talleta(tiedot);
    // Display the total:
    document.getElementById('total').value = total;

} // End of calculate() function.
// Function to save the data to local storage
function talleta(tiedot) {
    // check whether the 'ostokset' data item is stored in web Storage
    if (localStorage.getItem("ostokset")) {
        // If it is, add the new data to the existing array
        console.log("tiedot löytyy");
        // get the existing data
        const ostokset = JSON.parse(localStorage.getItem("ostokset"));
        // add the new data to the existing data
        ostokset.push(tiedot);
        // store the updated data in web storage
        localStorage.setItem("ostokset", JSON.stringify(ostokset));

    } else {
        // if not, create a new array with the new data
        console.log("tiedot puuttuu");
        const ostokset = [tiedot];
        // store the new data in web storage
        localStorage.setItem("ostokset", JSON.stringify(ostokset));

    }
}

function nayta() {
    // check whether the 'ostokset' data item is stored in web Storage
    if (localStorage.getItem("ostokset")) {
        // If it is, display the data
        const ostokset = JSON.parse(localStorage.getItem("ostokset"));
        console.log(ostokset);
        // create a new table element
        const table = document.createElement("table");
        // create a header row
        const headerRow = document.createElement("tr");
        // create the table headers
        const headers = ["Quantity", "Price", "Tax", "Discount", "Shipping", "Total"];
        // loop through the headers array
        for (let i = 0; i < headers.length; i++) {
            // create a new table header
            const header = document.createElement("th");
            // set the header's text content to the current header
            header.textContent = headers[i];
            // append the header to the header row
            headerRow.appendChild(header);
        }
        // append the header row to the table
        table.appendChild(headerRow);
        // loop through the data
        for (let i = 0; i < ostokset.length; i++) {
            // create a new row
            const row = document.createElement("tr");
            // loop through the data for the current item
            for (const key in ostokset[i]) {
                // create a new cell
                const cell = document.createElement("td");
                // set the cell's text content to the current item's value
                cell.textContent = ostokset[i][key];
                // append the cell to the row
                row.appendChild(cell);
            }
            // append the row to the table
            table.appendChild(row);
            console.log(table);
        }
        const taulu = document.getElementById("taulu");

        taulu.appendChild(table);
    }

}


// Function called when the window has been loaded. Function adds an event listener to the form.
function init() {
    'use strict';
    // Add an event listener to the form:
    const theForm = document.getElementById('submit-calculate');
    theForm.addEventListener('click', calculate);
    console.log("form event listener added");
    const show = document.getElementById('sshow');
    show.addEventListener('click', nayta);
}

// Assign an event listener to the window's load event:
window.onload = init();