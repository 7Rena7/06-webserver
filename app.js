const express = require("express");
const hbs = require("hbs");
require("dotenv").config();

const app = express();
const port = process.env.PORT;

// Handlebars
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

// Serve Static Content
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", {
    name: "Renato Corbellini",
    title: "This is my first Node App",
  });
});

app.get("/generic", (req, res) => {
  res.render("generic", {
    name: "Renato Corbellini",
    title: "This is my first Node App",
  });
});

app.get("/elements", (req, res) => {
  res.render("elements", {
    name: "Renato Corbellini",
    title: "This is my first Node App",
  });
});

app.get("*", (req, res) => {
  res.send("Error 404 | Page Not Found");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
