const express = require("express");
const User = require("../models/user.models.js");
const crudController = require("./crud.controllers");
const app = express();

app.get("", crudController(User).get);
app.post("", crudController(User).post);
app.get("/:id", crudController(User).getById);
app.patch("/:id", crudController(User).patch);
app.delete("/:id", crudController(User).deleteOne);

module.exports = app;