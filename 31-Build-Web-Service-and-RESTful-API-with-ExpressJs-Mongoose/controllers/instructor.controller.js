const InstructorModel = require("../models/instructor.model");

class InstructorController {
    static async getInstructors(req, res) {
        try {
            const data = await InstructorModel.find();
            res.status(200).send({
                message: "OK",
                data: data
            });
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
    static async getInstructor(req, res) {
        try {
            const data = await InstructorModel.findOne({
                _id: req.params.id
            });
            res.status(200).send({
                message: "OK",
                data: data
            });
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
    static async postInstructor(req, res) {
        try {
            const {
                name,
                dateOfBirth,
                location
            } = req.body;
            const data = new InstructorModel({
                name: name,
                dateOfBirth: dateOfBirth,
                location: location,
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
    static async deleteInstructor(req, res) {
        try {
            const dataDelete = await InstructorModel.findOne({
                _id: req.params.id
            });
            await InstructorModel.deleteOne({
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
    static async patchInstructor(req, res) {
        try {
            const {
                name,
                dateOfBirth,
                location
            } = req.body;
            const id = req.params.id;
            const data = await InstructorModel.findOneAndUpdate({
                _id: id
            }, req.body, {
                new: true
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

module.exports = InstructorController;