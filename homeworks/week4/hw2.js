/* eslint-disable consistent-return */

const request = require('request');

const api = 'https://lidemy-book-store.herokuapp.com/books';
const action = process.argv[2];
const input = process.argv[3];
const input2 = process.argv[4];

function listBooks() {
  request(`${api}?_limit=20`, (err, res, body) => {
    let data;
    try {
      data = JSON.parse(body);
    } catch (e) {
      console.log(e);
      return;
    }
    if (err) console.log('Fail!', err);
    else for (let i = 0; i < data.length; i += 1) console.log(`${data[i].id} ${data[i].name}`);
  });
}

function readBook(id) {
  request(`${api}/${id}`, (err, res, body) => {
    let data;
    try {
      data = JSON.parse(body);
    } catch (e) {
      console.log(e);
      return;
    }
    if (err) console.log('Fail!', err);
    else console.log(`${data.id} ${data.name}`);
  });
}

function deleteBook(id) {
  request.delete(`${api}/${id}`, (err) => {
    if (err) console.log('Fail!', err);
    else console.log('Delete Success!');
  });
}

function createBook(name) {
  request.post({
    url: `${api}`,
    form: { name },
  }, (err, res, body) => {
    let data;
    try {
      data = JSON.parse(body);
    } catch (e) {
      console.log(e);
      return;
    }
    if (err) console.log('Fail!', err);
    else console.log(`${data.id} ${data.name}`);
  });
}

function updateBook(id, name) {
  request.patch({
    url: `${api}/${id}`,
    form: { name },
  }, (err) => {
    if (err) console.log('Fail!', err);
    else console.log('Update Success!');
  });
}

switch (action) {
  default:
    console.log('Enter "list" to print the top 20 books,\nenter "read" and a book ID to print the specific book,\nenter "delete" and a book ID to delete that book,\nenter "create" and a book name to create one,\nenter "update", an ID and a name to change the name of the book.');
    break;
  case 'list':
    listBooks();
    break;
  case 'read':
    readBook(Number(input));
    break;
  case 'delete':
    deleteBook(Number(input));
    break;
  case 'create':
    createBook(input);
    break;
  case 'update':
    updateBook(Number(input), input2);
    break;
}

/* eslint-enable */
