const mongoose = require("mongoose");

const opt = {
    timestamps: true,
    versionKey: false,
};

const CourseSchema = mongoose.Schema({
        title: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 50,
        },
        description: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 500,
        },
        instructor: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Instructor",
            required: true,
        },
        scheduleDateTime: {
            type: Date,
            required: true,
        },
    },
    opt
);


const CourseModel = mongoose.model('Course', CourseSchema)

module.exports = CourseModel