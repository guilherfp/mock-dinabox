var express = require("express");
const app = express();

app.set("json spaces", 2);

app.get("/projects", function (req, res) {
  res.header("Content-Type", "application/json");
  res.sendFile(__dirname + "/files/projects-search-response.json");
});

app.get("/project", function (req, res) {
  res.header("Content-Type", "application/json");
  res.sendFile(__dirname + "/files/project-response.json");
});

app.get("/token", function (req, res) {
  res.header("Content-Type", "application/json");
  res.sendFile(__dirname + "/files/token-success.json");
});

app.post("/token", function (req, res) {
  res.header("Content-Type", "application/json");
  res.sendFile(__dirname + "/files/token-success.json");
});

app.listen(8877, () => console.log(`Serving localhost:${8877}`));
