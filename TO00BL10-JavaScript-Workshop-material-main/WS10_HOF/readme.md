# Workshop HOF: Higher order functions

In this exercise we will practice the use of JavaScript higher order functions (HOF). 

## Exercise 1

In this example, will will exercise Map() function. 

Define users, which is an array of five (5) objects representing users. Each object has three properties: firstName, lastName, and age. Please ensure that 2 of the users are younger than 30 years. 
```sh

const users = [{ firstName: 'John', lastName: 'Doe', age: 25 },
{ firstName: 'Jane', lastName: 'Doe', age: 30 },
{ firstName: 'Jack', lastName: 'Doe', age: 35 },
{ firstName: 'Jill', lastName: 'Doe', age: 40 },
{ firstName: 'Joe', lastName: 'Doe', age: 45 },
];
```

We are mapping over each user using the map() method to extract the properties firstName and lastName.

The callback function takes a single argument user which represents an element in the users array (an object).

The function concatenates the firstName and lastName properties of the user object creating a new array with users first and last name. The original users array remains unchanged.

Log the new array to console. 

## Exercise 2

In this example, will will exercise Filter() function. 

Define users, which is an array of 5 objects representing users. Each object has three properties: firstName, lastName, and age. Please ensure that 2 of the users are younger than 30 years. 
```sh

const users = [{ firstName: 'John', lastName: 'Doe', age: 25 },
{ firstName: 'Jane', lastName: 'Doe', age: 30 },
{ firstName: 'Jack', lastName: 'Doe', age: 35 },
{ firstName: 'Jill', lastName: 'Doe', age: 40 },
{ firstName: 'Joe', lastName: 'Doe', age: 45 },
];
```

Filter is called on the users array and it applies a callback function to each element in the array.

The function takes a single argument, an object destructured to a single property age. This function checks if age is greater than 30. If it is, the function returns true, otherwise it returns false.

When filter is called on users, it applies this function to each element in the array, creating a new array with only the elements that returned true when passed to the function and returns the result. The original users array remains unchanged.

Log the new array to console. 

## Exercise 3

In this example, will will exercise Reduce() function. 


We have two arguments max and curr in the callback function. Notice we will not pass the second parameter in the reduce() method this time. So, the default value will be the first element in the array, which you need to define first before the callback function definition.
```sh
let numbers = [1, 20, 3, 4, 5, 5, 20, 100, 60, 1];
```

The callback function first checks if the current element curr is greater than the current maximum value max. If it is, it updates the value of max to be the current element. If it is not, max is not updated. Finally, the function returns the value of max.

In this case, the reduce() method will start by setting max to value of the first element of the array and curr to second element. It will then check if 20 is greater than 5, which it is, so it updates max to 20.

It will then set curr to third element and check if it is greater than max, and if it is, so it updates max to curr.

It will continue this process until it has processed all the elements in the array. The final value of max will be the maximum value in the array. 

Log the maximum value to console. 



