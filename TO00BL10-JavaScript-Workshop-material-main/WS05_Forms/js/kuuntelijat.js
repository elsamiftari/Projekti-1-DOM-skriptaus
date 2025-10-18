// Luetaan localstorage kun tullaan sivulle
lueTiedot();
let nappi = document.querySelector("#nappi");
// Lisätään dynaaminen kuuntelija
nappi.addEventListener("click", function () {
  // Kutsutaan omaa funktiota kun klikkaus tapahtuu
  validateForm();
  console.log("Klikkaus toimii!");
});

function validateForm() {
  // Perutaan sivun lataus, jonka selaine tekee oletuksena lähetyksen jälkeen
  event.preventDefault();

  let tallennetaan = true;
  let fname = document.querySelector("#fname");
  let lname = document.querySelector("#lname").value;
  let email = document.querySelector("#email").value;

  console.log(lname, fname);
  if (fname.value == "" || lname == "") {
    alert("Etunimi / Sukunimi ei saa olla tyhjä!");
    tallennetaan = false;
  } else if (fname.value.length < 3) {
    // alert("Etunimi ei saa olla liian lyhyt!")
    fname.style.borderColor = "red";
    fname.select();
    fname.focus();
    document.querySelector("#feedback_fname").innerHTML =
      "<b>Etunimi on liian lyhyt!</b>";
    tallennetaan = false;
  }

  // Tarkistetaan email
  var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (regex.test(email)) {
    console.log("Valid Email address");
  } else {
    alert("Invalid Email address");
    document.querySelector("#email").style.borderColor = "red";
    tallennetaan = false;
  }

  // Jos virheitä ei ole tullut
  if (tallennetaan == true) tallennaTiedot();
}
function tallennaTiedot() {
  // Luetaan kentät
  let fname = document.querySelector("#fname").value;
  let lname = document.querySelector("#lname").value;
  let email = document.querySelector("#email").value;
  // Tallennetaan localstorageen
  localStorage.setItem("Etunimi", fname);
  localStorage.setItem("Sukunimi", lname);
  localStorage.setItem("Email", email);
  // Lokitetaan
  console.log(fname, lname, email);
  // Päivitä sivun tiedot
  lueTiedot();
}
function lueTiedot() {
  let enimi = localStorage.getItem("Etunimi");
  let snimi = localStorage.getItem("Sukunimi");
  let email = localStorage.getItem("Email");

  let taulu = `
    <table border='1'>
        <tr>
            <td>${enimi}</td>
            <td>${snimi}</td>
            <td>${email}</td>       
        </tr>
    </table>        
    `;
  document.querySelector("#data").innerHTML = taulu;
}
