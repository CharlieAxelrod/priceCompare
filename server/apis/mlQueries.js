const request = require('request-promise');
const TOKEN = require('../../tokens');

const filterData = ({ results }) => {
  const sorted = results.sort((a, b) => a.price - b.price);
  return [sorted[0], sorted[1], sorted[2]];
};

const formatData = (products) => {
  const formatted = [];
  products.forEach((product) => {
    formatted.push({
      price: product.price,
      image: product.thumbnail,
      link: product.permalink,
    });
  });
  return formatted;
};

const queryML = (product) => {
  const options = {
    url: `https://api.mercadolibre.com/sites/MLB/search?q=${product}&condition=new&limit=10&access_token=${TOKEN.ml}`,
    method: 'GET',
  };

  return request(options)
    .then(data => filterData(JSON.parse(data)))
    .then(data => formatData(data));
};

queryML('iphone');

module.exports = queryML;
