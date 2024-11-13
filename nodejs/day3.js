const http = require("http");
const url=require("url");

const port = 3100;

const server = http.createServer((req, res) => {
//   console.log(req.url);

const parsedUrl=url.parse(req.url,true);

console.log(parsedUrl)

  if (parsedUrl.pathname == "/luckybhaskar") {
    res.writeHead(200, { "content-type": "application/json" });
    res.write(
      JSON.stringify({
        moviename: "luckybhaskar",
        screen: parsedUrl.query.screen,
        ticketPrice: 250*parsedUrl.query.tickets,
      })
    );
    res.end();
  } else if (parsedUrl.pathname == "/amaran") {
    res.writeHead(200, { "content-type": "application/json" });
    res.write(
      JSON.stringify({
        moviename: "amaran",
        screen: parsedUrl.query.screen,
        ticketPrice: 250*parsedUrl.query.tickets,
      })
    );
    res.end();
  } else if (parsedUrl.pathname == "/ka") {
    res.writeHead(200, { "content-type": "application/json" });
    res.write(
      JSON.stringify({
        moviename: "ka",
        screen: parsedUrl.query.screen,
        ticketPrice: 250*parsedUrl.query.tickets,
      })
    );
    res.end();
  } else {
    res.write(JSON.stringify({ message: "page not found" }));

    res.end();
  }
});

server.listen(port, () => {
  console.log("server is up");
});
