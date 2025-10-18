**Fetch Workshop**

**After completing this workshop, student knows:**

==================================================
- Concepts of callback, promise, fetch and async/await


*Create a new folder for these assignments. Place all your code there.*


# Introduction

- Overview of the workshop goals and agenda.
- Importance of asynchronous programming in JavaScript.

## Callbacks

- Explanation of callbacks and their role in handling asynchronous operations.
- [Basic callback function](#_appendix_1._basic).
- The concept of "callback hell" and its impact on code readability.
- Using named functions as callbacks and handling errors in callback functions.

## Promises

- Introduction to Promises as a solution to callback hell.
- Basic [syntax and structure of a Promise](#_appendix_2._promise).
- Improving code readability with promise chaining.
- Error Handling with Promises Using .catch() 

## Fetch API to make HTTP requests

- Introduction to the Fetch API for making HTTP requests.
- Understanding how to handle responses using Promises.
- Extracting JSON data from a Fetch response.
- Error Handling with Fetch
- [Basic syntax and structure of a Fetch request](#_appendix_3._basic).

## Async/Await

- asynchronous programming in JavaScript.
- makes asynchronous code more readable, maintainable, and closer to the structure of synchronous code, leading to cleaner and more manageable codebases
- sequential nature of Async/Await
- [syntax and structure of Async/Await request](#_appendix_4._async/await)


### Appendix 1. Basic callback function


```sh
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
// Callback function to handle the fetched user data
function handleUserData(error, data) {
    if (error) {
        console.error('Error fetching user data:', error);
    } else {
        console.log('Fetched user data:', data);
    }
}
// Example usage: Fetch user data with the provided userId and handle the result using the callback
getUserData(1, handleUserData);
```

In this example:

- The **getUserData** function simulates an asynchronous operation using **setTimeout** to represent fetching data from a server.
- It takes a **userId** and a **callback** function as parameters.
- Once the user data is available, the **callback** function is invoked with two parameters: **null** for the error (indicating success) and the fetched user data.
- The **handleUserData** function is an example of a callback function that handles the user data. It logs the data if there is no error; otherwise, it logs the error.

When you run this code, you'll see the fetched user data logged to the console after a delay of 1 second.

This is a basic example, and in real-world scenarios, callbacks are commonly used for handling asynchronous operations such as API requests or reading files.


### Appendix 2. Promise syntax


```sh
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
myPromise
.then((result) => {
    console.log('Success:', result);
})
.catch((error) => {
    console.error('Error:', error);
});
```

In this example:

- We create a new **Promise** using the **Promise** constructor, which takes a function as an argument. This function has two parameters: **resolve** and **reject**.
- Inside the function, you perform some asynchronous operation (or any logic) and then call either **resolve** if the operation is successful or **reject** if it encounters an error.
- In this case, we're simulating success with **resolve** and a delay using **setTimeout**.
- The **myPromise** variable now holds the promise object.
- We handle the result of the promise using the **.then()** method, and errors using the **.catch()** method.

When the asynchronous operation completes, the **resolve** or **reject** function is called, and the corresponding method chained to the promise (**then** or **catch**) is executed.

Promises provide a cleaner and more structured way to handle asynchronous code compared to callbacks, especially when dealing with multiple asynchronous operations.


### Appendix 3. Basic syntax and structure of a Fetch request

```sh

// Basic Fetch Request
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
})
.catch(error => {
    // Handle errors
    console.error('Fetch error:', error);
});
```

We use the fetch function to make a GET request to the specified URL (<https://jsonplaceholder.typicode.com/posts/1>). The fetch function returns a Promise that resolves to the Response object representing the response to the request. We use the first .then() block to check if the response was successful (status code 200-299). If it was, we parse the response as JSON using the json() method. The second .then() block handles the JSON data obtained from the response.

The .catch() block is used to handle any errors that occur during the fetch operation.

This is a basic example of a GET request using Fetch. You can customize it for different HTTP methods (e.g., POST, PUT), add headers, and handle other aspects of the request and response based on your specific requirements.



### Appendix 4. Async/Await

```sh


// Async function using Await with Fetch
async function fetchData() {
try {
// Using the await keyword to pause execution until the Promise is resolved
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/2');
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
} catch (error) {
// Handle errors from the async function
    console.error('Error in fetchDataAndDisplay:', error);
}
}

// Calling the example async function
fetchDataAndDisplay();
```

In this example:

The **fetchData** function is declared as an async function, allowing the use of the await keyword inside it.

Inside the **fetchData** function:

- The **await fetch(...)** line pauses execution until the HTTP request is complete.
- The **await response.json()** line pauses execution until the JSON parsing is complete.

The **fetchDataAndDisplay** function demonstrates how to call an async function and handle its result using await.

This example fetches data from the JSONPlaceholder API and logs it to the console. Adjust the URL and the data handling logic according to your specific use case.
|<p>Laurea-ammattikorkeakoulu  </p><p>Ratatie 22, 01300 Vantaa</p>|<p>Puhelin (09) 8868 7150</p><p>Faksi (09) 8868 7200</p>|<p>jari.kovalainen@laurea.fi      </p><p>www.laurea.fi</p>|Y-tunnus             1046216-1<br>Kotipaikka           Vantaa|
| :- | :- | :- | :- |
|||||

