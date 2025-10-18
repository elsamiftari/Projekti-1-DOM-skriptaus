
# Workshop 4: DOM Scripting
=========================

* * * * *

In this exercise we will practice the art of DOM Scripting with JavaScript. Use the lecture-material as a reference guide side by side these exercises. It might also be a good idea to save the lines of code you write during the exercises for later use.

* * * * *

## Exercise 1: Basic DOM Manipulation
----------------------------------

 Below you will see three buttons. Edit the source code and add an onClick-events to these buttons. Use Developer Console to find the

Button 1 Button 2 Button 3

-   The first button should run a JavaScript-function, which will find the reference to "Workshop 4" heading on this page and change the contents of it to "Modified Heading!".
-   The second button should run a function, which will modify the style of the "Exercise 2" heading on this page. JavaScript should change at least the font size, style and color and the background color
-   The third button should append the following text paragraph after the **4th paragraph tag <p>** on the page (without overwriting the current content). Change the background of the entire page as well. Note: The Lorem ipsum text should be in italics. It should also add a logo image of some sort after the text.

    ***"Lorem ipsum**** dolor sit amet, consectetuer adipiscing elit. Sed posuere interdum sem. Quisque ligula eros ullamcorper quis, lacinia quis facilisis sed sapien. Mauris varius diam vitae arcu. Sed arcu lectus auctor vitae, consectetuer et venenatis eget velit. "*

* * * * *

## Exercise 2: DOM Traversing using ID's and classes
-------------------------------------------------

Add onchange -events to following checkboxes.

- [ ] Hide me
- [ ] Show me
- [ ] Surprise

-   First checkbox: Find out which element has been described with the id "me". Change the visibility (display value) of the element to none. What happens?
-   Second checkbox should return the visibility of the element to a normal state (block).
-   Third checkbox should find the elements with class "surprise" and change the font size to 20.

* * * * *

## Exercise 3: Images and pulldowns
--------------------------------

-   Write a JavaScript function, which will fire when the pulldown menu item is changed. Show the users choice using alert -box.
-   When the mouse is moved on top of the image, a colored border should appear surrounding it. On mouse out, border should disappear
-   When you have accomplished the above, change the image (id="carimage") below based on the users choice on the pulldown menu below. Find appropriate images from the web.



<details>
<summary>Select a new car from the list.</summary>
<ul>
<li> BMW </li>
<li> Audi </li>
<li> Mersu </li>
<li> Volvo</li>
</ul>
</details>

![](http://cdn.bmwblog.com/wp-content/uploads/2015/11/BMW-2-Series-Gran-Coupe-Rendering.jpg)

* * * * *

## Exercise 4: Moving things around
--------------------------------

-   You can do neat things by editing CSS-rules via JavaScript. See the examples in lecture slides. Then try these:

      <kbd> <br>Move <br> </kbd> Select the div with an id "carimage" and move it 200px left and 500px down <br>
      <kbd> <br>Animate <br> </kbd> Write a funtion doMove() which will move the image across the screen, or even better: back and forth on the screen. The Interval required has already been added to the onclick -event of the list item. <br    >
      <kbd> <br>Fade Out <br> </kbd> Wite a function fadeOut() which will slowly decrease the opacity of the image from 1.0 to 0 making it fade out. The Interval required has already been added to the onclick -event of the list item <br>
      <kbd> <br>Disappear <br> </kbd> Finally, write JavaScript which will remove the image from the page

* * * * *

## Exercise 5: Tables
------------------

-   Write a JavaScript function to add rows to a table. Rows can contain preset values.
-   When your code is working, try reading the content to be added from a set of fields below the table.

| Name | Position | Salary |
| --- | --- | --- |
| Tiger Nixon | System Architect | $320,800 |
| Garrett Winters | Accountant | $170,750 |
| Ashton Cox | Junior Technical Author | $86,000 |
| Cedric Kelly | Senior Javascript Developer | $433,060 |
| Airi Satou | Accountant | $162,700 |

Name :\
Position:\
Salary:

* * * * *

## Bonus exercises for the enthusiastics
-------------------------------------

-   Write a loop, which goes through all the LI tags in the page and replaces them with a <strong> tagged, red text saying "Replaced".

-   How would you replace the contents only on the ones with the word 'Select' in them?