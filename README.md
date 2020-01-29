# WeatherAppNode
This is weather app for node

A simple library which can give current tempreture of the place for which query is made. This library fetches its results from Google Maps API <a href="https://developers.google.com/maps/">Google Maps Api<a>

and DARK SKY API <a href="https://darksky.net/">Dark Sky Api</a>.


Using CircleCI for publishing the NPM Package is described at<a href="http://relsellglobal.in/npm-node/using-circleci-for-publishing-the-npm-package/">Blog Link</a>.


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


