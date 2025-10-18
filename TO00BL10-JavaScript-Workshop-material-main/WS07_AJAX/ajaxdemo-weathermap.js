// Luodaan ajax olio
var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET","https://api.openweathermap.org/data/2.5/weather?q=Helsinki&units=metric&mode=json&APPID=ff64c247a136f706923d1ee0d55d71e2",true);
xmlhttp.send();

// Luodaan vastauksen käsittelijä
xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState==4 && xmlhttp.status==200){
        // console.log(xmlhttp.responseXML)
        // Otetaan vastaus talteen
        let json = JSON.parse(xmlhttp.responseText)
        console.log(json)

        let rivit = `
                <table border="1">
                <tr>
                  <td>${json.name}</td>
                  <td>${json.main.temp}</td>
                  <td>${json.weather[0].description}</td>
                  <td><img src="https://openweathermap.org/img/w/${json.weather[0].icon}.png"></td>
                </tr>
                </table>`

        document.body.innerHTML = rivit
            
        } // if
    
        
  } // function


