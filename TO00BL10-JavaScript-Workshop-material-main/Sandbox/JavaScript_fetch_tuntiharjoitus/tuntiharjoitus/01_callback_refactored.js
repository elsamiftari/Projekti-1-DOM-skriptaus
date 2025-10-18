const fs = require('fs/promises'); // Using fs.promises for Promise-based file operations

// Promise-based function to read a file
function readFilePromise(filePath) {
    return fs.readFile(filePath, 'utf8');
}

// Example usage of the Promise-based function
readFilePromise('example.txt')
    .then(data => {
        console.log('File content:', data);
    })
    .catch(err => {
        console.error('Error reading file:', err);
    });
