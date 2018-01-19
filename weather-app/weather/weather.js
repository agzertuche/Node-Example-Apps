const request = require('request');
const FORECAST_APIKEY = '5ef888d70a6dd802decc6c7caadb57a5';
const FORECAST_APIURL = `https://api.darksky.net/forecast/${FORECAST_APIKEY}/`;

var getWeather = (latitude, longitude, callback) => {
  request({
    url: `${FORECAST_APIURL}${latitude},${longitude}`,
    json: true
  }, (error, response, body) => {
    if(error) {
      callback('Unable to connect to forecast.io servers');
    } else if (response.statusCode === 400) {
      callback('Unable to fetch weather');
    } else if(!error && response.statusCode === 200) {
      callback(undefined, body.currently.temperature);
    }    
  });
};

module.exports.getWeather = getWeather;
