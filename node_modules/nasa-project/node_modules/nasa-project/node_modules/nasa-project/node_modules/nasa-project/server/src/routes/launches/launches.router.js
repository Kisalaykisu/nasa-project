const express = require("express");

const {
  httpGetAllLaunches,
  httpAddNewLaunch,
  httpAbortLaunch
} = require("./launches.controller");

const launchesRouter = express.Router();

launchesRouter.get("/", httpGetAllLaunches);
launchesRouter.post("/", httpAddNewLaunch);
// where the slash means that we are matching the roots of the path where this router has been  mounted
launchesRouter.delete("/:id", httpAbortLaunch);

module.exports = launchesRouter;
