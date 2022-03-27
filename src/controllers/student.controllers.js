const express = require("express")
const Student = require("../models/student.models");
const crudController = require("./crud.controllers");
const app = express();

app.get("", async (req, res) => {
    try {
        const students = await Student.find().populate({
            path: "rollId",
            select: { firstName: 1, lastName: 1, type: 1 }
        })
            .populate({
                path: "currentBatch",
                select: { batchName: 1 },
            })
            .lean().exec();
        return res.status(200).send(students);
    }
    catch (err) {
        return res.status(500).send({ message: err.message });
    }
});
app.post("", crudController(Student).post);
app.get("/:id", async (req, res) => {
    try {
        const students = await Student.findById(req.params.id).populate({
            path: "rollId",
            select: { firstName: 1, lastName: 1, type: 1 }
        })
            .populate({
                path: "currentBatch",
                select: { batchName: 1 },
            })
            .lean().exec();
        return res.status(200).send(students);
    }
    catch (err) {
        return res.status(500).send({ message: err.message });
    }
});

app.patch("/:id", crudController(Student).patch);
app.delete("/:id", crudController(Student).deleteOne);

module.exports = app;