const yargs = require('yargs');
const axios = require('axios');

const FORECAST_APIKEY = '5ef888d70a6dd802decc6c7caadb57a5';
const FORECAST_APIURL = `https://api.darksky.net/forecast/${FORECAST_APIKEY}/`;

const argv = yargs
.options({
  a: {
    demand: true,
    alias: 'address',
    describe: 'Address to fetch weather for',
    string: true
  },
})
.help()
.alias('help', 'h')
.argv;

const encodedAddress = encodeURI(argv.address);
const geocodeUrl = `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get(geocodeUrl)
.then(response => {
  if(response.data.status === 'ZERO_RESULTS') {
    throw new Error('Unable to find that address');
  }

  const lat = response.data.results[0].geometry.location.lat;
  const lng = response.data.results[0].geometry.location.lng;
  const weatherUrl = `${FORECAST_APIURL}${lat},${lng}`;
  
  return axios.get(weatherUrl);  
})
.then(weatherResponse => {
  console.log(weatherResponse.data.currently.temperature);
})
.catch(err => {
  if (err.code === 'ENOTFOUND') {
    console.error('Unable to connect to API servers');
  } else {
    console.error(err.message);
  }    
});