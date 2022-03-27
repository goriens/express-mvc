const express = require("express");
const Batch = require("../models/batch.models");
const crudController = require("./crud.controllers");
const app = express();

app.get("", crudController(Batch).get);
app.post("", crudController(Batch).post);
app.get("/:id", crudController(Batch).getById);
app.patch("/:id", crudController(Batch).patch);
app.delete("/:id", crudController(Batch).deleteOne);

module.exports = app;