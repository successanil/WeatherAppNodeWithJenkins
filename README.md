# WeatherAppNode
This is weather app for node

A simple library which can give current tempreture of the place for which query is made. This library fetches its results from Google Maps API(https://developers.google.com/maps/)

and DARK SKY API(https://darksky.net/).


Tutorial Blog for usage of Library in React Native , Node projects can be found at Link (http://www.relsellglobal.in).

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


