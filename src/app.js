const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const port = process.env.PORT || 3000;

const publicLocation = path.join(__dirname, "../public");
const viewsLocation = path.join(__dirname, "../templates/views");
const partialsLocation = path.join(__dirname, "../templates/partials");

require("dotenv").config();

app.set("view engine", "hbs");
app.set("views", viewsLocation);
hbs.registerPartials(partialsLocation);

app.use(express.static(publicLocation));

app.get("/", (req, res) => {
  res.render("index.hbs");
});
app.get("/search", (req, res) => {
  res.render("search.hbs");
});
app.get("*", (req, res) => {
  res.render("404.hbs", {
    title: "Error 404",
    message: "Page not found",
  });
});
app.get("/search/*", (req, res) => {
  res.render("404.hbs", {
    title: "Error 404",
    message: "Page not found",
  });
});
app.listen(port, () => {
  console.log("Listening to the port " + port);
});
