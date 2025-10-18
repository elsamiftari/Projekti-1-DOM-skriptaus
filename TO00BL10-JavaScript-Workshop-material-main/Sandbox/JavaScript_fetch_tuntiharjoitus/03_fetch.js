document.getElementById('myButton').addEventListener('click', function () {
    console.log('Button clicked');
    myFunction()
});

const divi = document.getElementById('myDiv')


// Basic Fetch Request
const myFunction = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            // Check if the request was successful (status code 200-299)
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            // Parse the response as JSON
            return response.json();
        })
        .then(data => {
            // Handle the JSON data
            console.log('Data:', data);
            const userID = data.userId;
            const title = data.title;
            const body = data.body;
            divi.innerHTML += `<h2>${title}</h2>`;
            divi.innerHTML += `<p>${body}</p>`;
            divi.innerHTML += `<p>User ID: ${userID}</p>`;
        })
        .catch(error => {
            // Handle errors
            console.error('Fetch error:', error);
        });
}

