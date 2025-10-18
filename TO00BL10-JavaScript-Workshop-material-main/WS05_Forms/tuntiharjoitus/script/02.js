// haetaan kaikki input- checkbox tyyppiset elementit
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
console.log(checkboxes);
// lisätään jokaiseen checkboxiin tapahtumankäsittelijä
checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', (event) => {
        // tulostetaan konsoliin tapahtuman kohde ja sen arvo
        console.log(event.target.value, event.target.checked);
    });
}); 
