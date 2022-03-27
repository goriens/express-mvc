const mongoose = require("mongoose");
const evolutionSchema = new mongoose.Schema(
    {
        date_of_evaluation: { type: Date, default: Date.now, trim: true },
        instructorId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
            required: true,
        },
        batch_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "batch",
            required: true,
        }
    },
    {
        timestamps: true,
    }
);
const Evolution = mongoose.model("evolution", evolutionSchema);
module.exports = Evolution;