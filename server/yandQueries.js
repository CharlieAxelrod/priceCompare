const request = require('request');
const TOKEN = require('../tokens');

const queryYand = (text) => {
  const qText = encodeURIComponent(text);

  const options = {
    url: `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${TOKEN.yandex}&text=${qText}&lang=pt-en`,
    method: 'POST',
  };

  request(options, (err, res, body) => {
    const json = JSON.parse(body);
    console.log(json.text[0]);
  });
};

