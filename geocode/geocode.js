const request = require('request');

var geocodeAddress = (address,gmapkey,callback) => {
  var encodedAddress = encodeURIComponent(address);

  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${gmapkey}`,
    json:true
  },(error,response,body)=> {

    if(error) {
      callback('Unable to connect to Google servers');
    } else if(body.status === 'ZERO_RESULTS') {
      callback('Unable to find provided address');
    } else if(body.status == "OK") {
      // console.log(body);
    // console.log(JSON.stringify(response,undefined,4));
    callback(undefined,{
      latitude: body.results[0].geometry.location.lat,
      longitude: body.results[0].geometry.location.lng
    });
    }
  });
}


module.exports = {
  geocodeAddress
};
