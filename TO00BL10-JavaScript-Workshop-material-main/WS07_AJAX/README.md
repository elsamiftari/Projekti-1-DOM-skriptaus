# Workshop 7: Using AJAX and parsing XML

* * *

AJAX stands for Active JavaScript with XML and basically means a way to request a script to fetch data from a file or an API and return it back to the script. Then we can utilize the data either by injecting it into the page as such or by first parsing the data (using loops) and then format the data the way we like. Chrome Developer Tools offer nice way of tracking AJAX calls as well. Press F12 to open the tools and click Network-tab. Here you are able to see the requests and responses in action.  

NOTE: Ajax calls will cause security issues in many cases. If you encounter those, I recommend to sign up for a free account in Codeanywehere.com and do these exercises there. Copy this exercise-file there and start doing the exercises.

If you get "Blocked loading mixed active content" error, please check whether you're using http or https for your http requests. More info on this in [https://developer.mozilla.org/en-US/docs/Web/Security/Mixed_content](https://developer.mozilla.org/en-US/docs/Web/Security/Mixed_content)

* * *

## Exercise 1: Parsing XML data

This page has XML data embedded into it. See page source, line 78\. The browser cannot display it properly, but it's there. Below you can also see the structure data.

Write a function called parseData(), which will output the quote and author tags from XML when button is clicked. Hint: Use document.getElementsByTagName() function. See PowerPoint for reference.

<input type="button" name="Fetch" id="Fetch" value="Button" onclick="parseData()">

<pre>			
			<quotes>
				<quote>I'm not concerned about all hell breaking loose, but that a PART of hell will break loose... it'll be much harder to detect.</quote>
				<length>124</length>
				<author>George Carlin</author>
				</quotes>
				<quotes>
				<quote>The biggest problem with every art is by the use of appearance to create a loftier reality. </quote>
				<author>Johann Wolfgang von Goethe</author>
			</quotes>

		</pre>

<quotes><quote>I'm not concerned about all hell breaking loose, but that a PART of hell will break loose... it'll be much harder to detect.</quote> <length>124</length> <author>George Carlin</author></quotes> <quotes><quote>The biggest problem with every art is by the use of appearance to create a loftier reality.</quote> <author>Johann Wolfgang von Goethe</author></quotes>

* * *

## Exercise 2: AJAX call to an XML file

Create an AJAX script, which will load the famous-quotes.xml file from the server: [http://iceberg-cycle.codio.io/5: Asynchronous JavaScript (AJAX)/famous-quotes.xml](http://iceberg-cycle.codio.io/5: Asynchronous JavaScript (AJAX)/famous-quotes.xml) and inject the raw contents of the file to a div below (id="quotes"). Here's another alternative: [http://quotes.rest/qod.xml](http://quotes.rest/qod.xml).

NOTE: The raw XML data looks weird on the browser. You can use developer tools to study the contents by inspecting the DIV.

The sample function shown in PowerPoint slides is pasted below.

<pre>			// Load AJAX content into web page

			function loadXMLDoc() {
					// Create AJAX object
					var xmlhttp = new XMLHttpRequest();

					// Specify the data / url to be fetched
					xmlhttp.open("GET", "INSERT URL/FILENAME HERE", true);
					xmlhttp.send();

					xmlhttp.onreadystatechange = function() {
							if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
				 // find myDiv and insert results there
									document.getElementById("myDiv").innerHTML = xmlhttp.responseText;
							}
					}
			}
		</pre>

<input type="button" name="Fetch2" id="Fetch2" value="Button" onclick="loadXMLFile()">

* * *

## Exercise 3: Parsing the XML

Continue working from exercise 2\. Once you have injected the results, use JavaScript to parse the XML/JSON-file and output the file contents in a nice HTML-table below. Add some styles to the table.

<input type="button" name="Fetch3" id="Fetch3" value="Button" onclick="loadAndParseXML()">

<div id="tabledata">

<table>

<tbody>

<tr>

<td>**Quote**</td>

<td>**Author**</td>

</tr>

<tr>

<td>Here goes the quote data</td>

<td>Here goes the author data</td>

</tr>

<tr>

<td> </td>

<td> </td>

</tr>

</tbody>

</table>

</div>

* * *

## Exercise 4: AJAX call to a live newsfeed

Next try fetching data from a web service. Use either Yahoo news feed [https://meijastiina.github.io/news_rss_topstories.xml](https://meijastiina.github.io/news_rss_topstories.xml) (downloaded from [https://news.yahoo.com/rss/topstories](https://news.yahoo.com/rss/topstories), security restriction do not allow sending AJAX calls to Yahoo) or a Finnish one ([http://www.iltalehti.fi/rss/uutiset.xml](http://www.iltalehti.fi/rss/uutiset.xml)).

Parse the results and display on page below as a list. You can add link to the original news item as well.

*   News heading 1
*   News heading 2
*   [News heading 3](#)

<input type="button" name="Fetch3" id="Fetch3b" value="Load YAHOO newsfeed" onclick="loadAndParseNews('https://www.yahoo.com/news/rss/')"> <input type="button" name="Fetch3" id="Fetch3c" value="Load Iltalehti Newsfeed" onclick="loadAndParseNews('http://www.iltalehti.fi/rss/uutiset.xml')">