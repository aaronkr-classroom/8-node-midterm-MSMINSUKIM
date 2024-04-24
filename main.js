"use strict";
const port = 3000,
    express = require('express'),
    layouts = require('express-ejs-layouts'),
    homeController = require('./controllers/homeController'),
    errorController = require('./controllers/errorController'),
    app = express();

app.set("port", process.env.PORT || port);
app.set("view engine", "ejs");

app.use(layouts);
app.use(express.static("public"));

app.get("/", homeController.getHome);  
app.get("/transportation", homeController.showCourses);
app.get("/contact", homeController.showSignUp);
app.post("/contact", homeController.postedContactForm);

app.use(errorController.logErrors);
app.use(errorController.resNotFound); //404
app.use(errorController.resInternalError); //500

app.listen(app.get("port"), () => {
    console.log(`Server at: http://localhost:${app.get("port")}`);
})