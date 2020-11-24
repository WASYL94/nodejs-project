const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();
const CourseModel = mongoose.model("Course")



router.get("/add", (req, res)=>{
    res.render("add-course")
})

//setting
// var course = new CourseModel();
// course.courseName = "NodeJS";
// course.courseId = "2";
// course.save();

router.post("/add", (req, res)=>{

    var course = new CourseModel();
    course.courseName = req.body;
    course.courseDuration = req.body.courseDuration;
    course.courseFee = req.body.courseFee;
    course.courseId = Math.ceil(Math.random() * 100000000);

    course.save((error, docs)=>{
        if(!error)
            {
                //res.redirect("/course/list")
                res.json({ message : "succesfull", status : "OK"});
            }
        else
            {
                res.send("Error Occured");
            }
    });

    res.render("add-course");
})

router.get("/list", (req, res)=>{

    //Getting
    CourseModel.find((error, docs)=>{
        if(!error)
            {
                console.log(docs);
                res.render("list", { data : docs });
            }
        else
            {
                res.send("Error");
            }  
    });
});

module.exports = router;