var express = require("express");
const app = express();
const PORT = 8877;

const DEFAULT_PROJECT_ID = "5011841680";
const PROJECTS = [DEFAULT_PROJECT_ID, "0206700929", "0841601175"];

app.set("json spaces", 2);

app.get("/projects", function (req, res) {
  res.header("Content-Type", "application/json");
  res.sendFile(__dirname + "/files/projects-search-response.json");
});

function resolveProjectId(id) {
  return PROJECTS.includes(id) ? id : DEFAULT_PROJECT_ID;
}

function sendProject(id, res) {
  res.header("Content-Type", "application/json");
  res.sendFile(`${__dirname}/files/project-${resolveProjectId(id)}-response.json`);
}

app.get("/project/:id", function (req, res) {
  sendProject(req.params.id, res);
});

app.get("/project", function (req, res) {
  sendProject(DEFAULT_PROJECT_ID, res);
});

app.get("/token", function (req, res) {
  res.header("Content-Type", "application/json");
  res.sendFile(__dirname + "/files/token-success.json");
});

app.post("/token", function (req, res) {
  res.header("Content-Type", "application/json");
  res.sendFile(__dirname + "/files/token-success.json");
});

app.listen(PORT, () => console.log(`Serving localhost:${PORT}`));
