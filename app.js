const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');




var startProcess = (argv) =>{
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
};

module.exports = {
  startProcess
}



