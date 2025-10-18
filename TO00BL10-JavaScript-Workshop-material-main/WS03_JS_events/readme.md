# Workshop 3: JavaScript Events

In this exercise we will practice the use of JavaScript events. Use the lecture-material as a reference guide side by side with these exercises. It might also be a good idea to save the lines of code you write during the exercises for later use.

## Exercise 1

Below you will see three buttons. Edit the source code and add an onClick-events to these buttons.

Click me Show table Geolocation

1. The first button should open an alert-button, which will say "You clicked me!"
1. When you see the button working, add the current date after the text by using the [Date() -function](https://www.w3schools.com/js/js_date_methods.asp).
1. The second button should call a function called showTable()". ShowTable function should output a simple HTML-table (below) to the page. Use document.write to print data. Feel free to modify the data on the table.

|**Name**|**Position**|**Salary**|
| :-: | :-: | :-: |
|Tiger Nixon|System Architect|$320,800|
|Garrett Winters|Accountant|$170,750|
|Ashton Cox|Junior Technical Author|$86,000|
|Cedric Kelly|Senior Javascript Developer|$433,060|
|Airi Satou|Accountant|$162,700|

4. The last button should check [Geolocation](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API) of the user, and output it to the console and to the page. Note: Some browsers might not allow you to do this. Try different browsers if you get errors.
  Finally redirect the browser to a Google Maps page with the coordinates you just read? HINT. You can open Google Maps with spesific coordinates using a link like this: ```https://www.google.com/maps?q=LATITUDE,LONGITUDE"```  

## Exercise 2

- Add an onMouseOver event on the Heading "Exercise 2" of this page. It should fire when the users mouse is moved over it. Output "Stepped over my a mouse!" on the console.
- Add another event, which will fire then the mouse leaves the Exercise 2 -heading. This time show an alert window to the user saying: "Bye bye mouse!"

## Exercise 3

Below you will see a simple form.

- Add onfocus -event to the textarea below. When the user enters the textarea, it should show a text saying: "Please fill in the form with proper data.". You can try modifying the background color of the box as well.  
- Try to use onkeydown -event on the textarea. It should calculate the number of keypresses and output them on the screen. Could you think other smart ways to use it?
- When the form button is clicked, check if the textarea is empty. Notify the user with appropriate message. HINT: You can access the Textarea using the following command: *document.getElementById("textdata").value*. We will study the forms deeper in Workshops 4 and 5.

```sh
        <form>
            <textarea id="textdata"></textarea><br>
            <span id="charcount"></span>
            <button>Send me</button>
        </form>
```


Send me



## Exercise 4

```sh
<div id="coordinates"></div>
```

Add onMouseMove -event to the DIV-element above. When you move mouse over the DIV (rectangle) the program should output the coordinates of your pointer. Try first outputting to the console using console.log.

When the program is working, you can try outputting the text on the H2 element with an id "coords" the box. You can read more about [howto get mouse coordinates from here](https://www.w3schools.com/jsref/event_clientx.asp).

HINT: You need to use document.getElementById("coordinates").innerHTML to achieve this.

