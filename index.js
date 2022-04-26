const express = require("express");
const fs = require("fs");

const app = express();

app.use(express.static(__dirname));

app.get("/", (req, res) => {
  let myData;
  fs.readFile("./index.html", (err, data) => {
    if (err) {
      throw err;
    } else {
      myData = data;
    }
  });
  res.write(myData);
});

app.listen(8080, () => {
  console.log("Listening on port 8080");
});
