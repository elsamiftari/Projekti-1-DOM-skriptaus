// Event listeners

document.getElementById("register-btn").addEventListener("click", tallenna);
document.getElementById("display-btn").addEventListener("click", hae);

// Functions

function tallenna() {
    console.log("Tallennetaan...")
    var n = document.getElementById("name").value;
    var e = document.getElementById("email").value;
    daatta = { nimi: n, email: e }; // luodaan JSON tyyppinen objekti, johon talletetaan luetut tiedot
    var old = JSON.parse(localStorage.getItem('tiedot')) || []; //haetaan ja parsitaan olemassaolevan LocaStoragen tiedoston sisältö || luodaan matriisi (yksiulotteinen), jos tiedostoa ei ole vielä olemassa
    old.push(daatta);
    localStorage.setItem('tiedot', JSON.stringify(old));

}

function hae() {
    console.log("Haetaan...")
    var list = "<table><tr><th>Nimi </th><th> Email</th></tr>\n";
    var parsed = JSON.parse(localStorage.getItem('tiedot'));
    for (i = 0; i <= parsed.length - 1; i++) {
        console.log(i + ' = ' + parsed[i].nimi + " " + parsed[i].email);
        list += "<tr><td><i>" + parsed[i].nimi + "</i></td>\n<td><i>" + parsed[i].email + "</i></td></tr>\n";
    }
    list += "</table>";
    document.querySelector(".display-area").innerHTML = list;
}