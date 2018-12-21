const express = require('express');
const path = require('path');
const template = require('../client/dist/results/template.js');
const queryAll = require('./queryRoot.js');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, '/../client/dist')));

app.get('/search', async (req, res) => {
  // res.write(template(`Resultados para ${req.query.product}`,
  //   ['', '', ''],
  //   ['', '', '']));
  const products = await queryAll(req.query.product);
  res.send(template(`Resultados de ${req.query.product}`,
    [`<a class="link" href="${products[0][0].link || ''}"><img class="image" src="${products[0][0].image}"></a><div class="price">${products[0][0].price || ''}</div>`,
      `<a class="link" href="${products[0][1].link || ''}"><img class="image" src="${products[0][1].image}"></a><div class="price">${products[0][1].price || ''}</div>`,
      `<a class="link" href="${products[0][2].link || ''}"><img class="image" src="${products[0][2].image}"></a><div class="price">${products[0][2].price || ''}</div>`],
    [`<a class="link" href="${products[1][0].link || ''}"><img class="image" src="${products[1][0].image}"></a><div class="price">${products[1][0].price || ''}</div>`,
      `<a class="link" href="${products[1][1].link || ''}"><img class="image" src="${products[1][1].image}"></a><div class="price">${products[1][1].price || ''}</div>`,
      `<a class="link" href="${products[1][2].link || ''}"><img class="image" src="${products[1][2].image}"></a><div class="price">${products[1][2].price || ''}</div>`]));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
