const express = require("express");
const Submission = require("../models/submission.models");
const crudController = require("./crud.controllers");
const app = express();

//app.get("", crudController(Submission).get);
app.get("", async (req, res) => {
    try {
        const submissions = await Submission.find().sort({ marks: -1 })
            .populate({
                path: "evaluation_id",
                select: { date_of_evaluation: 1, instructorId: 1, batch_id: 1 },
                populate: {
                    path: "instructorId",
                    select: { firstName: 1, lastName: 1, type: 1 },
                },
                //populate: {
                //    path: "batch_id",
                //    select: { batchName: 1 }
                //},
            })
            .populate({
                path: "student_id",
                select: { firstName: 1, lastName: 1, }
            });
        return res.status(200).send(submissions);
    } catch (error) {
        return res.status.apply(500).send({ message: error.message });
    }
});
app.post("", crudController(Submission).post);

app.get("/:id", async (req, res) => {
    try {
        const submission = await Submission.findById(req.params.id)
            .populate({
                path: "evaluation_id",
                select: { date_of_evaluation: 1, instructorId: 1, batch_id: 1 },
                populate: {
                    path: "instructorId",
                    select: { firstName: 1, lastName: 1, type: 1 },
                },
                //populate: {
                //    path: "batch_id",
                //    select: { batchName: 1 }
                //},
            })
            .populate({
                path: "student_id",
                select: { firstName: 1, lastName: 1, }
            });
        return res.status(200).send(submission);
    } catch (error) {
        return res.status.apply(500).send({ message: error.message });
    }
});

app.patch("/:id", crudController(Submission).patch);
app.delete("/:id", crudController(Submission).deleteOne);

module.exports = app;