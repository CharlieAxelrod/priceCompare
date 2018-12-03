const request = require('request');
const TOKEN = require('../tokens');

const filterData = ({ results }) => {
  const sorted = results.sort((a, b) => a.price - b.price);
  console.log(sorted[0].price);
  return sorted;
};

const queryML = (product) => {
  const options = {
    url: `https://api.mercadolibre.com/sites/MLB/search?q=${product}&condition=new&limit=10&access_token=${TOKEN.ml}`,
    method: 'GET',
  };

  request(options, (err, res, body) => {
    filterData(JSON.parse(body));
  });
};

queryML('iphone 7');
