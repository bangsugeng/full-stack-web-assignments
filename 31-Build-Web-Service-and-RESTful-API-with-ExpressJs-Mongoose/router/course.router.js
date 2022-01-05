const express = require("express")

const courseRoute = express.Router()

const controller = require("../controllers/course.controller")

courseRoute.get("/", controller.getCourses)

courseRoute.get("/:id", controller.getCourse)

courseRoute.post("/", controller.postCourse)

courseRoute.patch("/:id", controller.patchCourse)

courseRoute.delete("/:id", controller.deleteCourse)

module.exports = courseRoute