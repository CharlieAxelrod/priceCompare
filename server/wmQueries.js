const request = require('request');
const TOKEN = require('../tokens');

const filterData = ({ items }) => {
  const sorted = items.sort((a, b) => a.salePrice - b.salePrice);
  return sorted;
};

const queryWM = (product) => {
  const options = {
    url: `http://api.walmartlabs.com/v1/search?apiKey=${TOKEN.wm}&query=${product}`,
    method: 'GET',
  };

  request(options, (err, res, body) => {
    filterData(JSON.parse(body));
  });
};
