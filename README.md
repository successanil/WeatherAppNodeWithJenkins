# WeatherAppNode
This is weather app for node

A simple library which can give current tempreture of the place for which query is made. This library fetches its results from Google Maps API <a href="https://developers.google.com/maps/">Google Maps Api<a>

and DARK SKY API <a href="https://darksky.net/">Dark Sky Api</a>.


Tutorial Blog for usage of Library in React Native , Node projects can be found at <a href="http://www.relsellglobal.in">Blog Link</a>.

Using libary in React native project can be found at <a href="http://www.relsellglobal.in">Blog Link</a>. 

Usage in node app 
```
const app = require('rg-weather-app-node');
var argv = {
    a:"Dehradun", 
    gapi_key:"<google maps key>",
    dapi_key:"<darksky api key>"
};

app.startProcess(argv);

```

Build something great. People are waiting to see.


