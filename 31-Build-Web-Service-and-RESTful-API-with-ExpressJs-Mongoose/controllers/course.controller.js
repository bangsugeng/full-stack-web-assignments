const CourseModel = require("../models/course.model");

class CourseController {
    static async getCourses(req, res) {
        try {
            const data = await CourseModel.find().populate("instructor")
            res.status(200).send({
                message: "OK",
                data: data
            });
        } catch (error) {
            res.status(500).send({
                message: error.message
            });
        }
    }
    static async getCourse(req, res) {
        try {
            const data = await CourseModel.findOne({
                _id: req.params.id
            }).populate("instructor");
            res.status(200).send({
                message: "OK",
                data: data
            });
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
    static async postCourse(req, res) {
        try {
            const {
                title,
                description,
                instructor,
                scheduleDateTime
            } = req.body;
            const data = new CourseModel({
                title: title,
                description: description,
                instructor: instructor,
                scheduleDateTime: scheduleDateTime
            });

            const saved = await data.save();
            res.status(200).send({
                message: "OK",
                data: saved
            });
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
    static async deleteCourse(req, res) {
        try {
            const dataDelete = await CourseModel.findOne({
                _id: req.params.id
            });
            await CourseModel.deleteOne({
                _id: req.params.id
            });
            res.status(200).send({
                message: "OK",
                data: dataDelete
            });
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
    static async patchCourse(req, res) {
        try {
            const {
                name,
                dateOfBirth,
                location
            } = req.body;
            const id = req.params.id;
            const data = await CourseModel.findOneAndUpdate({
                _id: id
            }, req.body, {
                new: true,
            });
            res.status(200).send({
                message: "OK",
                data
            });
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
}

module.exports = CourseController;