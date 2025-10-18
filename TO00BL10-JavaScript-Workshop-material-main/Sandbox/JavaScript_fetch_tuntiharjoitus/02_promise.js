

document.getElementById('myButton').addEventListener('click', function () {
    console.log('Button clicked');
    myFunction()
});

const divi = document.getElementById('myDiv')

// Creating a Promise
const myPromise = new Promise((resolve, reject) => {
    // Asynchronous operation or any logic
    const isSuccess = true; // Simulating success

    // Simulating an asynchronous operation (e.g., fetching data from a server)
    setTimeout(() => {
        if (isSuccess) {
            // Resolve the promise with the result
            resolve('Promise resolved successfully');
        } else {
            // Reject the promise with an error
            reject('Promise rejected with an error');
        }
    }, 1000); // Simulating a delay of 1 second
});

// Handling the Promise result
const myFunction = () => {
    myPromise
        .then((result) => {
            console.log('Success:', result);
            divi.innerHTML = result
        })
        .catch((error) => {
            console.error('Error:', error);
            divi.innerHTML = error
        });
} 
