const express = require("express");
const app = express();
const port = 8080;

app.use(express.static("public"));

app.get("/Another-Hello-World", (req, res) => {
  res.send("This is another Hello World!");
});

app.get("*", (req, res) => {
  res.send("Error 404 | Page Not Found");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
