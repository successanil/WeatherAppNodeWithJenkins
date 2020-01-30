/**
 * @jest-environment node
 */
const {getWeather,getGeoCoding} = require('../app');
const {GMAP_KEY,DARK_SKY_API_KEY} = require('../localconfig')

test('Should test if getGeoCoding is giving proper results',async ()=>{
    var argv = {
        a:'Dehradun',
        gapi_key:GMAP_KEY
    }
    const result = await getGeoCoding(argv);

    expect(result).toHaveProperty('latitude');
});

test('Should test if getWeather is giving proper results',async ()=>{
    var argv = {
            dapi_key:DARK_SKY_API_KEY
        }
    var results = {
        latitude: 30.3164945, 
        longitude: 78.03219179999999,
    }    

        console.log(argv);
    
    const result = await getWeather(argv,results);

    console.log(result);

    expect(result).toHaveProperty('tempreture');
});