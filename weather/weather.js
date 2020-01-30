const axios = require('axios');

var getWeather = (apikey,lat,lng,callback) => {
  var url = `https://api.forecast.io/forecast/${apikey}/${lat},${lng}`; 
  console.log('In get Weather'+url);
  axios.get(url)
  .then((response)=>{
    callback(undefined,{
            tempreture:response.data.currently.temperature,
            apparentTemperature: response.data.currently.apparentTemperature
          });
  })
  .catch((err)=>{
    callback('Unable to connect to forecast.io server '+err);
  })
  .finally(()=>{

  });

}

module.exports.getWeather = getWeather;
