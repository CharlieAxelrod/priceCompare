const request = require('request-promise');
const TOKEN = require('../../tokens');

const queryYand = (text) => {
  const qText = encodeURIComponent(text);

  const options = {
    url: `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${TOKEN.yandex}&text=${qText}&lang=pt-en`,
    method: 'POST',
  };

  return request(options)
    .then(data => JSON.parse(data))
    .then(json => json.text[0]);
};

module.exports = queryYand;
