# Workshop 2: JavaScript BOM

In this exercise we will practice the use of BOM. Use the
lecture-material as a reference guide side by side these exercises. It
might also be a good idea to save the lines of code you write during the
exercises for later use.

## Exercise 1

Add JavaScript commands (or create separate folder and file for your scripts) in the script-tag of this (Workshop02.html) page, which will write
the following text on the browser page. Use HTML-tags to produce the
text styles to the page.\
\
***\"If I had nine hours to chop down a tree, I\'d spend the first six
sharpening my ax.\"**\
\-- Abraham Lincoln*

## Exercise 2

Create a JavaScript function called repeatingText. It writes out a line
of text to the page 50 times.

## Exercise 3

Create a JavaScript if-statement, which checks if the user is using
Mozilla browser. If it is, the browser should load
"http://www.mozilla.org" page. If not, the browser should load some
other website. Create simple pages to test the code.

## Exercise 4

Create a simple web page, where JavaScript confirm-dialog will pop out
asking if the user is a student or not. If the user clicks OK write
\"Welcome student\" to the page. If the user clicks cancel, write on the
page: \"Sorry, this page is for students only\".

## Exercise 5

Use document.write to output an image tag with a real image from a JavaScript table defined below to the page.
HINT: You can access individual
images using the table index. Images\[0\] for example contains the url:
\"<http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg>\".

When you\'re done, try writing a JavaScript function to display a random
image from the following list of images. 
HINT: You can generate a random integer between desired range  (for example 5) using following code: ```Math.floor(Math.random() * 5);```
```bash

var images =[
"http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
"http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg",
"http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg"
];
```
