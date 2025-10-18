document.getElementById('myButton').addEventListener('click', function () {
    console.log('Button clicked');
    // Calling the example async function
    fetchDataAndDisplay();
});

const divi = document.getElementById('myDiv')

// Async function using Await with Fetch
const display = () => {
    fetchDataAndDisplay()
};

async function fetchData() {
    try {
        // Using the await keyword to pause execution until the Promise is resolved
        const response = await fetch('https://jsonplaceholder.typicode.com/post/4');

        // Check if the request was successful (status code 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Using await to parse the response as JSON
        const data = await response.json();

        // Returning the data
        return data;
    } catch (error) {
        // Handling errors with try...catch
        console.error('Fetch error:', error);
        throw error; // Re-throw the error if necessary
    }
}

// Example usage of the async function
async function fetchDataAndDisplay() {
    try {
        // Invoking the async function and awaiting its result
        const data = await fetchData();

        // Handle the result as needed
        console.log('Fetched data:', data);
        const userID = data.userId;
        const title = data.title;
        const body = data.body;
        divi.innerHTML += `<h2>${title}</h2>`;
        divi.innerHTML += `<p>${body}</p>`;
        divi.innerHTML += `<p>User ID: ${userID}</p>`;
    } catch (error) {
        // Handle errors from the async function
        console.error('Error in fetchDataAndDisplay:', error);
    }
}

