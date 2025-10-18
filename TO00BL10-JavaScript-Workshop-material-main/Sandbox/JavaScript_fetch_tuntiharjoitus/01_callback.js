


document.getElementById('myButton').addEventListener('click', function () {
    console.log('Button clicked');
    getUserData(1, handleUserData);
});

const divi = document.getElementById('myDiv')

// Simulating fetching user data from a server
function getUserData(userId, callback) {
    // Simulated asynchronous operation (e.g., fetching data from a server)
    setTimeout(() => {
        const userData = {
            id: userId,
            username: `user${userId}`,
            email: `user${userId}@example.com`
        };

        // Invoke the callback function with the fetched data
        callback(null, userData); // Pass null for the error parameter to indicate success
    }, 1000); // Simulating a delay of 1 second
}


function handleUserData(error, data) {
    if (error) {
        console.error('Error fetching user data:', error);
    } else {
        console.log('Fetched user data:', data);
        divi.innerHTML = data.id + ' ' + data.username + ' ' + data.email
    }
}
// Example usage: Fetch user data with the provided userId and handle the result using the callback
//getUserData(1, handleUserData);