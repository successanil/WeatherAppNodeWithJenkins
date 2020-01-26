const yargs = require('yargs');
const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');




const argv = yargs.options({
  a: {
    demand: true,
    alias:'address',
    describe: 'Address to fetch weather',
    string: true
  },
  gapi_key: {
    demand: true,
    alias:'google_api_key',
    describe: 'Google MAPS API Key : https://developers.google.com/maps/documentation/android-sdk/get-api-key',
    string: true
  },
  dapi_key: {
    demand: true,
    alias:'dark_sky_api_key',
    describe: 'DARK SKY API Key: https://darksky.net/dev',
    string: true
  }
})
.help()
.alias('help','h')
.argv;

geocode.geocodeAddress (argv.a,argv.gapi_key,(errorMessage,results)=>{
  if(errorMessage) {
    console.log(errorMessage);
  } else {
    weather.getWeather(argv.dapi_key,results.latitude,results.longitude,(errorMessage,weatherResults)=>{
       if(errorMessage) {
         console.log(errorMessage);
       } else {
         console.log(JSON.stringify(weatherResults,undefined,4));
       }
     });



  }
});




// 8c84e2eb178a6b650e1f8895406e1998
