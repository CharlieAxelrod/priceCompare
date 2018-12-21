const mlQuery = require('./apis/mlQueries.js');
const wmQuery = require('./apis/wmQueries.js');
const yandQuery = require('./apis/yandQueries.js');


const queryAll = (query) => {
  const USA = new Promise((resolve, reject) => resolve(yandQuery(query)))
    .then(text => wmQuery(text))
    .catch(error => console.log(error));

  const BR = new Promise((resolve, reject) => resolve(mlQuery(query)));

  return Promise.all([USA, BR]);
};

module.exports = queryAll;
