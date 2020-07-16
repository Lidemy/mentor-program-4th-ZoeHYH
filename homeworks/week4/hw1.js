const request = require('request');

const api = 'https://lidemy-book-store.herokuapp.com/books?_limit=10';
request.get(api, (error, response, body) => {
  const data = JSON.parse(body);
  if (error) console.log('Fail!', error);
  else for (let i = 0; i < data.length; i += 1) console.log(`${data[i].id} ${data[i].name}`);
});
