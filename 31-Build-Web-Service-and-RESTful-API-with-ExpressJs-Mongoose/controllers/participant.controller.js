const ParticipantModel = require("../models/participant.model");

class ParticipantController {
    static async getParticipants(req, res) {
        try {
            const data = await ParticipantModel.find();
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
    static async getParticipant(req, res) {
        try {
            const data = await ParticipantModel.findOne({
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
    static async postParticipant(req, res) {
        try {
            const {
                name,
                dateOfBirth,
                location,
                courses
            } = req.body;
            const data = new ParticipantModel({
                name: name,
                dateOfBirth: dateOfBirth,
                location: location,
                courses:courses
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
    static async deleteParticipant(req, res) {
        try {
            const dataDelete = await ParticipantModel.findOne({
                _id: req.params.id
            });
            await ParticipantModel.deleteOne({
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
    static async patchParticipant(req, res) {
        try {
            const {
                name,
                dateOfBirth,
                location,
                courses
            } = req.body;
            const id = req.params.id;
            const data = await ParticipantModel.findOneAndUpdate({
                    _id: id
                },
                req.body, {
                    new: true
                }
            );
            res.status(200).send({
                message: "OK",
                data
            });
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
}

module.exports = ParticipantController