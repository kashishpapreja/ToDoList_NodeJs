//dependencies required for the app
import bodyParser from "body-parser";
import express from "express";
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
//render css files
app.use(express.static("public"));

//placeholders for added task
var task = [];
//placeholders for removed task


//post route for adding new task 
app.post("/addtask", function(req, res) {
    var newTask = req.body.newtask;
    //add the new task from the post route
    task.push(newTask);
    res.redirect("/");
});



//render the ejs and display added task, completed task
app.get("/", function(req, res) {
    res.render("index", { task: task });
});

//set app to listen on port 3000
app.listen(3000, function() {
    console.log("server is running on port 3000");
});