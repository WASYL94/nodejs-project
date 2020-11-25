const express = require("express");

const router = express.Router();
const CourseModel = require('../model/course.model');

router.get("/add", (req, res)=>{
    res.render("add-course")
})

router.post("/add", async (req, res)=>{
    try {
        await CourseModel.create({
            courseName: req.body.courseName,
            courseDuration: req.body.courseDuration,
            courseFee: req.body.courseFee
        });

        res.render("add-course", {message: "Course added!"});
    } catch (error) {
        console.log(error.message);
        res.send("Error Occured");
    }
})

router.get("/list", async (req, res)=>{
    try {
        const courses = await CourseModel.find();
        res.render("list", { data : courses });
    } catch (error) {
        console.log(error.message);
        res.send("Error Occured");
    }
});

module.exports = router;