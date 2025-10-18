// haetaan kaikki input- checkbox tyyppiset elementit
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
// lisätään jokaiseen checkboxiin tapahtumankäsittelijä
checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', (event) => {
        // tulostetaan konsoliin tapahtuman kohde ja sen arvo
        console.log(event.target.value, event.target.checked);
        // lisätään checkboxin vanhempielementtiin span-elementti
        if (event.target.checked) {
            console.log("Checkbox is checked");
            const addi = document.createElement('span');
            addi.innerHTML = "Checkbox is checked";
            event.target.parentElement.appendChild(addi);
            // poistetaan checkboxin vanhempielementistä viimeinen span-elementti
        } else {
            console.log("Checkbox is not checked");
            event.target.parentElement.removeChild(event.target.parentElement.lastChild);
        }
    });
});


