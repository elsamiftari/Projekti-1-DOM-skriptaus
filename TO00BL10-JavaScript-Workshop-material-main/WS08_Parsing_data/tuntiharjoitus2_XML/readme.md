# Parsing News RSS Feed XML Data with JavaScript

This project demonstrates how to parse a news RSS feed XML data with JavaScript.

## Code Snippet

```javascript
const nappi1 = document.getElementById("button1");
const nappi2 = document.getElementById("button2");
const nappi3 = document.getElementById("button3");

nappi1.addEventListener("click", function () {
    loadAndParseNews("http://feeds.bbci.co.uk/news/world/rss.xml");
});

nappi2.addEventListener("click", function () {
    loadAndParseNews("http://www.iltalehti.fi/rss/uutiset.xml");
});

nappi3.addEventListener("click", function () {
    loadAndParseNews("https://www.is.fi/rss/tuoreimmat.xml");
});
function loadAndParseNews(filename) {
    var xmlhttp = new XMLHttpRequest();
    // We replace the static file with URL

    xmlhttp.onreadystatechange = function () {
        // If we are still loading...
        if (xmlhttp.readyState === 1) {
            document.getElementById("newsfeed").innerHTML = "Wait while I'm loading...";
        }
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            var xmlDoc = xmlhttp.responseXML;
            //console.log(xmlDoc);
            var items = xmlDoc.getElementsByTagName("item");
            var item, feedlink, name, description, content = '';
            for (i = 0; i < items.length; i++) {
                feedlink = items[i].getElementsByTagName('link').item(0).firstChild.nodeValue;
                name = items[i].getElementsByTagName('title').item(0).firstChild.nodeValue;
                description = items[i].getElementsByTagName('description').item(0).firstChild.nodeValue;
                console.log(description);
                item = '<li><a href="' + feedlink + '">' + name + '</a>    ' + description + ' </li>';
                content += item;
            }
            // Place contents in a div
            document.getElementById("newsfeed").innerHTML = "<ul>" + content + "</ul>";
        }
    }

    xmlhttp.open("GET", filename, true);
    xmlhttp.send();
}
```