const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(` 
    <html>
      <head>
        <title>Puppies and Kittens Site</title>
      </head>
      <body>
        <h1>Puppies and Kittens Galore</h1>
      </body>
    </html>
    `);
});

app.get("/", (req, res) => {
  console.log("request made to /");
  res.send("<h1>Welcome to my page</h1>");
});

app.get("/puppies", (req, res) => {
  console.log("request made to /puppies");
  res.send("<h1>Welcome to the puppies page</h1>");
});

app.get("/kittens", (req, res) => {
  console.log("request made to /kittens");
  res.send("<h1>Welcome to the kittens page</h1>");
});

const PORT = 1337;
app.listen(PORT, () => {
  console.log("listening on port ${PORT}");
});
