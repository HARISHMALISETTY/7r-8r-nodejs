const http = require("http");
const url = require("url");
const port = 3200;
const server = http.createServer((req, res) => {
const parsedUrl = url.parse(req.url, true);
console.log(parsedUrl);
if (parsedUrl.pathname == "/nonveg") {
    if (parsedUrl.query.item == "chicken") {
      res.write(`total price is ${parsedUrl.query.quantity * 250}`);
      res.end();
    } else if (parsedUrl.query.item == "mutton") {
      res.write(`total price is ${parsedUrl.query.quantity * 350}`);
      res.end();
    } else if (parsedUrl.query.item == "fish") {
      res.write(`total price is ${parsedUrl.query.quantity * 280}`);
      res.end();
    } else {
      res.write("item not available");
      res.end();
    }
  } else if (parsedUrl.pathname == "/veg") {
    if (parsedUrl.query.item == "panneer") {
      res.write(`total price is ${parsedUrl.query.quantity * 220}`);
      res.end();
    } else if (parsedUrl.query.item == "mushroom") {
      res.write(`total price is ${parsedUrl.query.quantity * 180}`);
      res.end();
    } else if (parsedUrl.query.item == "gobhi") {
      res.write(`total price is ${parsedUrl.query.quantity * 170}`);
      res.end();
    } else {
      res.write("item not available");
      res.end();
    }
  }
});

server.listen(port, () => {
  console.log("server is running");
});
