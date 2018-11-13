const TOKEN = require('../token');

const filterData = ({ results }) => {
  const sorted = results.sort((a, b) => a.price - b.price);
  return sorted;
};

const queryProduct = product => fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${product}&condition=new&sort=relevance&limit=10&access_token=${TOKEN}`)
  .then(data => data.json())
  .then(data => filterData(data));

export default queryProduct;
