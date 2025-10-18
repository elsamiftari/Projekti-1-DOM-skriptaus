# Workshop 9: Using jQuery

* * *

In this exercise we will practice the use of jQuery JavaScript library. Use the lecture-material as a reference guide side by side these exercises. It might also be a good idea to save the lines of code you write during the exercises for later use.

To make things interesting, do these exercises on the Demosite -page, which will have a more complex structure and layout.

## Exercise 1: Adding jQuery to document

In order to get jQuery-functions available to your webpage, you need to add the jQuery library as part of your page. This can be done by adding a script tag, which will reference to jQuery online or to a local file.

```html  
        <script  src="https://code.jquery.com/jquery-3.1.1.js" integrity="sha256-16cdPddA6VdVInumRGo6IbivbERE8p7CQR3HzTBuELA="crossorigin="anonymous"></script>
```

Go Ahead and add the line above to this pages HTML-code. Then reload the page. You can make sure that jQuery is up and running by typing $ at the console.

* * *

## Exercise 2: Basic Dom Scripting

So far, we have created JavaScript by hooking the code to a button etc. A good way to learn jQuery (and JavaScript) is to try things in the console. So open the Developer Tools (F12) and try to accomplish the following tasks.

How would you:

1.  Find a reference to all H3 -tags?
2.  Find a reference to div with an id='contant' and replace the contents with a text of your choice else?
3.  Find a reference to the img and replace the src attribute with some other image online?
4.  Find the element with a class sideBarListBox and show/hide it?
5.  Find any li element that contains the text "Lorem" and add css underline -attribute to them?
6.  Find all the anchor tags within the class SideBarListBox and apply css modifications of your choice to them.

* * *

## Exercise 3: Effects and animation

See: [https://api.jquery.com/category/effects/](https://api.jquery.com/category/effects/)

Add the following functionality to buttons below:

<input type="button" name="button" id="button" value="Fade in H1"> <input type="button" name="button2" id="button2" value="Fade out H1"> <input type="button" name="button3" id="button3" value="SlideUp main contents"> <input type="button" name="button4" id="button4" value="SlideDown main contents"> <input type="button" name="button5" id="button5" value="Animate">

1.  Fade in the main heading of the page
2.  Fade out the main heading of the page
3.  SlideUp the main contents of the page
4.  SlideDown the main contents of the page
5.  Study the animate() -function. Write an animation sequence of your own on the page

* * *

## Exercise 4: Ajax

1.  First try Ajax with console. Use load() -function to inject content from the web (ex. [https://meijastiina.github.io/news_rss_topstories.xml](https://meijastiina.github.io/news_rss_topstories.xml)) into the div below.
2.  Then write a JavaScript function, which will fire when the pulldown menu item is changed. Each selection loads a different content from web to the div below.
3.  Change the pulldown item names accordingly as well.

Select an item from the list.

<select name="mySelect" id="mySelect" onchange=""><option value="first">First item</option> <option value="second">Second item</option> <option value="third">Third item</option></select>