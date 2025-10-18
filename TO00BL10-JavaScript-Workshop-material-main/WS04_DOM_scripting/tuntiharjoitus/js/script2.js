var nappi = document.getElementById('magic');
var prestoNappi = document.getElementById('nappi1');
var abraNappi = document.getElementById('nappi2');

function sayMagicWord(event) {
    if (event.target === prestoNappi) {
        document.body.style.backgroundColor = 'red';
        alert('Change-o!');
    } else if (event.target === abraNappi) {
        document.body.style.backgroundColor = 'blue';
        alert('Abracadabra!');

    } else {
        document.body.style.backgroundColor = 'green';
        alert('Shazam!');
    }
    console.log({ event }); // for debugging
}

prestoNappi.addEventListener('click', sayMagicWord)
abraNappi.addEventListener('click', sayMagicWord)
nappi.addEventListener('click', sayMagicWord) 