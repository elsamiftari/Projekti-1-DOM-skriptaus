

function showCustomer(str) {
    console.log(str)
    if (str == "JOUNI") {
        tulosta(str);

    } else if (str == "MIKA") {
        tulosta(str);
    } else if (str == "SANTERI") {
        tulosta(str);
    } else {
        // document.getElementById("txtHint").innerHTML = "Jouni Juupajoki";
        const newDiv = document.createElement("p");

        // and give it some content
        const newContent = document.createTextNode("Huijasit...");

        // add the text node to the newly created div
        newDiv.appendChild(newContent);

        // add the newly created element and its content into the DOM
        const currentDiv = document.getElementById("txtHint");
        currentDiv.appendChild(newDiv);
    }

}

function tulosta(nimi) {
    console.log(nimi);
    // document.getElementById("txtHint").innerHTML = "Jouni Juupajoki";
    const newDiv = document.createElement("p");

    // and give it some content
    const newContent = document.createTextNode(nimi);

    // add the text node to the newly created div
    newDiv.appendChild(newContent);

    // add the newly created element and its content into the DOM
    const currentDiv = document.getElementById("txtHint");
    currentDiv.appendChild(newDiv);
}