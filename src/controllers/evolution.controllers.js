const express = require("express")
const Evolution = require("../models/evolution.models");
const crudController = require("./crud.controllers");
const app = express();

//app.get("", crudController(Evolution).get);
app.get("", async (req, res) => {
    try {
        const evolutions = await Evolution.find()
            .populate({
                path: "instructorId",
                select: { firstName: 1, lastName: 1, type: 1 }
            })
            .populate({
                path: "batch_id",
                select: { batchName: 1 },
            })
            .lean().exec();
        return res.status(200).send(evolutions);
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
});
app.post("", crudController(Evolution).post);
app.get("/:id", async (req, res) => {
    try {
        const evolutions = await Evolution.findById(req.params.id)
            .populate({
                path: "instructorId",
                select: { firstName: 1, lastName: 1, type: 1 }
            })
            .populate({
                path: "batch_id",
                select: { batchName: 1 },
            })
            .lean().exec();
        return res.status(200).send(evolutions);
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
});
app.patch("/:id", crudController(Evolution).patch);
app.delete("/:id", crudController(Evolution).deleteOne);

module.exports = app;