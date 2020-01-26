const app = require('./app');
const yargs = require('yargs');

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

  app.startProcess(argv);