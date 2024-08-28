const path = require("path");
const cors = require("cors");
const express = require("express");
const morgan = require("morgan");

const api = require("./routes/api");

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000"
  })
);
// it is a function that returns the CORS middleware

app.use(morgan("combined"));

//Chain of middleware : - that handles the incoming request as they come in our application.
app.use(express.json());

app.use(express.static(path.join(__dirname, "..", "public")));

app.use("/v1", api);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

module.exports = app;
