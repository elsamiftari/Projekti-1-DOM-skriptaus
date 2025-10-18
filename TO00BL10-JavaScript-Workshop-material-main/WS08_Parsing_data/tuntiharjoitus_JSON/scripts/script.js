const nappi = document.getElementById('nappi');
const uri = './sample_data/sample.json';
const kirjailijalista = document.getElementById('kirjailijat');
nappi.addEventListener('click', async function () {
    const kirjailijat = await haetiedot();
    tulostakirjailijat(kirjailijat);

});

async function haetiedot() {
    try {
        const response = await fetch(uri);
        const data = await response.json();
        const kirjailijat = data.authors;
        return kirjailijat;
    } catch (error) {
        console.log(error);
    }
}

function tulostakirjailijat(kirjailijat) {
    console.log(kirjailijat);
    let txt = '<table><tbody><tr><td><strong>Nimi</strong></td><td><strong>Kieli</strong></td><td><strong>Bio</strong></td></tr>';
    kirjailijat.forEach(kirjailija => {
        txt += `<tr><td>${kirjailija.name}</td><td>${kirjailija.language}</td><td>${kirjailija.bio}</td></tr>`;
    });
    txt += '</tbody></table>';
    kirjailijalista.innerHTML = txt;
}
