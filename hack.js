// withRedisAsCache.js

const express = require("express");
const responseTime = require("response-time");
const axios = require("axios");
const redis = require("redis");
const client = redis.createClient();

// Load express Framework
const app = express();

// Create a middleware that adds a X-Response-Time header to response.
app.use(responseTime());

const getBook = (req, res) => {
  let isbn = req.query.isbn;
  let url = `https://wwww.googleapis.com/books/v1/volumes?q=isbn:${isbn}`;
  return axios
    .get(url)
    .then(response => {
      let book = response.data.items;
      // Set the string-key: isbn in our cache. With his contents of the cache: title
      // Set cache expirations to 1 hour (60minutes)
      client.setex(isbn, 3600, JSON.stringify(book));

      res.send(book);
    })
    .catch(err => {
      res.send("The book you are looking for is not found!!!");
    });
};

const getCache = (req, res) => {
  let isbn = req.query.isbn;
  //Check the cache data from the server redis
  client.get(isbn, (err, result) => {
    if (result) {
      res.send(result);
    } else {
      getBook(req, res);
    }
  });
};
app.get("/book", getCache);
app.listen(3000, () => {
  console.log(`Your node is running on port 3000!!!`);
});
