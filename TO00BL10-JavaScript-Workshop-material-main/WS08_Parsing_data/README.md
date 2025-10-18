 # Workshop 8: Parsing JSON/XML with AJAX

* * *

In this exercise we will practice the use of JSON in our JavaScript applications. Use the lecture-material as a reference guide side by side these exercises.

* * *

## Exercise 1: JSON Basics

JSON means JavaScript Object Notations, and it means that we will represent data in a format which JavaScript understands as such. No conversions are necessary to use it.

<button>Display the first and lastname only</button> <button>Display all data</button>

Let's try the following. You can create a new JSON dataset in your JavaScript as described below. Then create functions, which will run when the buttons are clicked.

<pre>			var text = '{ "employees" : [' +
			'{ "firstName":"John" , "lastName":"Doe" },' +
			'{ "firstName":"Anna" , "lastName":"Smith" },' +
			'{ "firstName":"Peter" , "lastName":"Jones" } ]}';
		</pre>

*   The First button will display the first and lastname for each item in the div below.
*   The Second button will display all the data for all items in the div below. If you wish, you can use for-loops here.

<div id="jsondata">JSON data goes here.</div>

* * *

## Exercise 2: Parsing JSON from web

Below you see two buttons. Edit the source code and add onClick-events to these buttons. Add functionality to these as described below.

<button>Load raw data</button> <button>Load and parse the data</button>

*   The first button should run a JavaScript-function, which will load the given [JSON file from the web](http://www.omdbapi.com/?s=star+wars&apikey=cbbc6750) and display the raw contents of it on the DIV-below (id=rawdata). Use Developer tools (F12) to track the AJAX call and study the headers, execution times etc.
*   The second button should run a function, will load the same data, but will parse the data out and display it as a table.
*   After you have managed to get the data out, try to load the pictures to the page as well.

<div id="rawdata">Raw data goes here.</div>

* * *

## Exercise 3: Real Life Challenge: OpenWeatherMap API

OpenWeatherMap is a well known weather data provider online. It offers an API which allow developers to fetch data about weather. The [documentation can be found here](https://openweathermap.org/api).

Your task is to write a Weather APP, which will display the weather information based on the users wishes. **Notice, that you will need to sign up (its free) to get the API key, which allows you to use the service.**

Sample call to the REST API could be like this: [http://api.openweathermap.org/data/2.5/weather?q=Helsinki&units=metric&mode=JSON&APPID=ff64c247a136f706923d1ee0d55d71e2](http://api.openweathermap.org/data/2.5/weather?q=Helsinki&units=metric&mode=JSON&APPID=ff64c247a136f706923d1ee0d55d71e2) . Click to see the response.

*   First develop the app to display raw weather information (Temperature, Clouds, Humidity) on one spesific city, when the button is clicked. <button>Get data</button>
*   When you achieve this, then parse the data and output it to div
*   When you have achieved this, implement an onchange-event on the pulldown menu, which will allow the user to select which city's data will be shown from a list of cities
*   When you have completed this, add functionality to an input field, in which the user can write search queries which are sent to the OpenWeatherMap API and the system will run a search query which is retuned to your app.

Select a city from the list:

<select name="mySelect" id="city" onchange=""><option value="Helsinki">Helsinki</option> <option value="Stockholm">Stockholm</option> <option value="Rome">Rome</option> <option value="New York">New York</option></select>

Or type in a search query: <input id="citysearch"><button id="search">Search</button>

<div id="weatherdata">Weatherdata goes here.</div>