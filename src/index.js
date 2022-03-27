const express = require("express");

const userController = require("./controllers/user.controllers");
const studentController = require("./controllers/student.controllers");
const batchController = require("./controllers/batch.controllers");
const evolutionController = require("./controllers/evolution.controllers");
const submissionController = require("./controllers/submission.controllers");

const connect = require("./configs/db.js");
const { post } = require("./controllers/user.controllers");

const app = express();

app.use(express.json());

app.use("/users", userController);
app.use("/students", studentController);
app.use("/batchs", batchController);
app.use("/evolutions", evolutionController);
app.use("/submissions", submissionController);

app.listen(5000, async () => {
    try {
        await connect();
    } catch (error) {
        console.log(error);
    }
    console.log("Listening on port 5000");
});