/* eslint-disable consistent-return */

const request = require('request');

const api = 'https://lidemy-book-store.herokuapp.com/books?_limit=10';
request.get(api, (error, response, body) => {
  if (error) return console.log('Fail!', error);
  let data;
  try {
    data = JSON.parse(body);
  } catch (err) {
    console.log(err);
    return;
  }
  for (let i = 0; i < data.length; i += 1) {
    console.log(`${data[i].id} ${data[i].name}`);
  }
});

/* eslint-enable */
