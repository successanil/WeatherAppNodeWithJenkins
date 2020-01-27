const axios = require('axios');

var geocodeAddress = (address,gmapkey,callback) => {
  var encodedAddress = encodeURIComponent(address);
  var url = 'https://maps.googleapis.com/maps/api/geocode/json?address='+encodedAddress+'&key='+gmapkey;
  axios.get(url)
  .then((response)=>{
    callback(undefined,{
      latitude: response.data.results[0].geometry.location.lat,
      longitude: response.data.results[0].geometry.location.lng
    });
  })
  .catch((err)=>{
    callback('Unable to connect to Google servers');
  })
  .finally(()=>{

  });
 }


module.exports = {
  geocodeAddress
};
