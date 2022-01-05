const mongoose = require("mongoose");

const opt = {
    timestamps: true,
    versionKey: false,
};

const InstructorSchema = mongoose.Schema({
        name: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 100,
        },
        dateOfBirth: {
            type: Date,
            required: true,
        },
        location: {
            type: String,
        },
    },
    opt
);

const InstructorModel = mongoose.model("Instructor", InstructorSchema);
module.exports = InstructorModel;