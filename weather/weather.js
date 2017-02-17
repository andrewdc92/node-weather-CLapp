const request = require('request');

var getWeather = (lat, lng, callback) => {
request({
  url: `https://api.darksky.net/forecast/08c93be4c1a43cf465aa7e899e182399/${lat},${lng}`,
  json: true
}, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    callback(undefined, {
      temperature: body.currently.temperature,
      apparentTemperature: body.currently.apparentTemperature
    });
  }
    else {
      callback('unable to fetch from API');
    }
  });
};


module.exports.getWeather = getWeather;
