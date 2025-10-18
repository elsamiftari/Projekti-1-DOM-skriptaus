const nappi = document.getElementById('nappi');
const uri = './sample_data/sample.xml';
const asiakaslista = document.getElementById('asiakkaat');
nappi.addEventListener('click', async function () {
    const asiakkaat = await haetiedot();
    tulostaasiakkaat(asiakkaat);

});

async function haetiedot() {
    try {
        const response = await fetch(uri);
        const data = await response.text();
        const parser = new DOMParser();
        const xml = parser.parseFromString(data, 'application/xml');
        const asiakkaat = xml.querySelectorAll('customer');
        return asiakkaat;
    } catch (error) {
        console.log(error);
    }
}

function tulostaasiakkaat(asiakkaat) {

    let txt = '<table><tbody><tr><td><strong>Nimi</strong></td><td><strong>Puhelin</strong></td><td><strong>Email</strong></td><td><strong>Kaupunki</strong></td></tr>';
    for (let i = 0; i < asiakkaat.length; i++) {
        const nimi = asiakkaat[i].querySelector('name').textContent;
        const puhelin = asiakkaat[i].querySelector('phone').textContent;
        const email = asiakkaat[i].querySelector('email').textContent;
        var city = '';
        const address = asiakkaat[i].querySelector('address');
        if (address.hasChildNodes()) {
            const street = address.querySelector('street').textContent;
            city = address.querySelector('city').textContent;
            const state = address.querySelector('state').textContent;
            console.log(street, city, state);
        }
        txt += '<tr><td>' + nimi + '</td><td>' + puhelin + '</td><td>' + email + '</td><td>' + city + '</td><td></tr>';
    }
    txt += '</tbody></table>';
    console.log(txt);
    asiakaslista.innerHTML = txt;

}