// funktion tarkasta1() määrittely
function tarkasta1(event) {
    // Estetään lomakkeen uudelleenlataus   
    event.preventDefault();
    console.log("Tarkastetaan lomake 1");
    // Haetaan lomakkeen kenttien arvot
    var enimi = document.omaLomake1.enimi.value;
    var snimi = document.omaLomake1.snimi.value;
    console.log("Etunimi: " + enimi + " Sukunimi: " + snimi);
    // Tarkastetaan kenttien arvot
    if (enimi == "" || enimi == null) {
        alert("Etunimi puuttuu");

    } else if (snimi == "" || snimi == null) {
        alert("Sukunimi puuttuu");

    } else {
        alert("Lomake ok");
    }
    // Tässä voisi olla muita skriptejä
}



