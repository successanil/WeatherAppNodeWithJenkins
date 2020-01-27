const geocode = require("./geocode/geocode.js");
const weather = require("./weather/weather.js");

var startProcess = argv => {
   var p = getGeoCoding(argv);
   p
   .then((results)=>{
      return getWeather(argv,results);
   })
   .then((result)=>{
      console.log(result);
   })
   .catch((err)=>{

   })
};

var getGeoCoding = argv => {
  return new Promise((resolve, reject) => {
    geocode.geocodeAddress(argv.a, argv.gapi_key, (errorMessage, results) => {
      if (errorMessage) {
        reject(errorMessage);
      } else {
        resolve(results);
      }
    });
  });
};

var getWeather = (argv, results) => {
  return new Promise((resolve, reject) => {
    weather.getWeather(
      argv.dapi_key,
      results.latitude,
      results.longitude,
      (errorMessage, weatherResults) => {
        if (errorMessage) {
          reject(errorMessage);
        } else {
          resolve(weatherResults);
        }
      }
    );
  });
};

module.exports = {
  startProcess,
  getWeather,
  getGeoCoding
};
