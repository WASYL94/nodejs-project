const connection = require("./model");
const express = require("express");
const app = express();
const path = require("path");
const expressHandlerbars = require("express-handlebars");
const bodyparser = require("body-parser");
const connectDatabase = require('./model/index');

const CourseController = require("./controllers/courses");

app.use(bodyparser.urlencoded({
    extended : true
}));

app.set('views', path.join(__dirname, "/views/"));
app.set("view engine", "hbs");
app.engine("hbs", expressHandlerbars({
    extname : "hbs",
    defaultLayout : "mainlayout",
    layoutsDir : __dirname + "/views/layouts"
}));

app.get("/", (req, res)=>{
    res.render("index", {})
});

app.use("/course", CourseController)

app.listen("3000", ()=> {
    console.log(`Server is listening on http://localhost:3000`);
    connectDatabase();
});