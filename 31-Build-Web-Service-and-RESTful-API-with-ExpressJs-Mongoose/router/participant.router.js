const express = require("express")
const PartcipantRoute = express.Router()

const controller = require("../controllers/participant.controller")

PartcipantRoute.get("/", controller.getParticipants)

PartcipantRoute.get("/:id", controller.getParticipant)

PartcipantRoute.post("/", controller.postParticipant)

PartcipantRoute.delete("/:id", controller.deleteParticipant)

PartcipantRoute.patch("/:id", controller.patchParticipant)

module.exports = PartcipantRoute