const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema(
    {
        rollId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
            required: true,
        },
        currentBatch: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "batch",
            required: true,
        },
    },
    {
        timestamps: true,
    }
);
const Student = mongoose.model("post", studentSchema);
module.exports = Student;
