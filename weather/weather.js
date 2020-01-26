const request = require('request');

var getWeather = (apikey,lat,lng,callback) => {
  request({
    url:`https://api.forecast.io/forecast/${apikey}/${lat},${lng}`,
    json:true
  },(error,response,body) => {
    if(error) {
      callback('Unable to connect to forecast.io server');
    } else if(response.statusCode == 400){
      callback('Unable to fetch weather');
    } else if(!error && response.statusCode == 200){
      callback(undefined,{
        tempreture:body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    }

  })
}

module.exports.getWeather = getWeather;
