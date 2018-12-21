const request = require('request-promise');
const TOKEN = require('../../tokens');

const filterData = ({ items }) => {
  const avgPrice = items.reduce((sum, item) => sum + item.salePrice, 0) / items.length;
  const filtered = items.filter(item => item.salePrice > avgPrice * 0.5);
  const sorted = filtered.sort((a, b) => a.salePrice - b.salePrice);
  return [sorted[0], sorted[1], sorted[2]];
};

const formatData = (products) => {
  const formatted = [];
  products.forEach((product) => {
    formatted.push({
      price: Math.ceil(product.salePrice * 384) / 100,
      image: product.mediumImage,
      link: product.productUrl,
    });
  });
  return formatted;
};

const queryWM = (product) => {
  const options = {
    url: `http://api.walmartlabs.com/v1/search?apiKey=${TOKEN.wm}&query=${product}&limit=50`,
    method: 'GET',
  };

  return request(options)
    .then(data => filterData(JSON.parse(data)))
    .then(data => formatData(data));
};

queryWM('iphone X');


module.exports = queryWM;
