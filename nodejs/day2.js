const http = require("http");
const port = 3200;

const data = ["nodejs"];

const userDetails = { u_id: 258, username: "john", email: "john123@gmail.com" };

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "application/json" });
  res.write(
    JSON.stringify({
      statusMessage: "userinformation retrieved successfully",
      data: userDetails,
    })
  );
  // JSON.stringify({ statusMessage: "data retrieved successfully", data: data })

  res.end();
});

server.listen(port, () => {
  console.log("server is up");
});

// ["nodejs"]
// {"message":"hellonodejs"}

// {
//   data: ["nodejs"];
// }

// const obj = {
//   statusMessage: "userinformation retrieved successfully",
//   data: [
//     {
//       u_id: 258,
//       username: "john",
//       email: "john123@gmail.com",
//     },
//     {
//       u_id: 258,
//       username: "john",
//       email: "john123@gmail.com",
//     },
//     {
//       u_id: 258,
//       username: "john",
//       email: "john123@gmail.com",
//     },
//   ],
// };
