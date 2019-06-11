require ('newrelic');
require('dotenv').config();
var express        = require("express"),
    app            = express(),
    bodyParser     = require("body-parser"),
    methodOverride = require("method-override"),
    mailgun        = require("mailgun-js")({apiKey: process.env.MAILGUN_API_KEY, domain: process.env.MAILGUN_DOMAIN});

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.static("assets"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));

app.get("/", function(req, res){
    res.render("landing");
});

app.put("/", function(req, res){
    var data = {
        from: req.body.email,
        to: "jordanpisani4@gmail.com",
        subject: req.body.email + " Contacted You",
        html: "<strong>Their Information</strong><br>" +
              "<strong>Email Address</strong>: " + req.body.email + "<br>" +
              "<strong>Phone Number</strong>: " + (req.body.number || "N/A") + "<br>" +
              "<strong>Referred By</strong>: " + (req.body.referral || "N/A") + "<br><br>" +
              "<strong>Their Message</strong>: " + req.body.message + "<br><br>" +
              "Do not reply to this email."
    };
    mailgun.messages().send(data, function(error, body) {
        if (error) {
            // console.log(error);
            return res.redirect("/");
        }
            return res.redirect("/");
    });
});

var port = process.env.PORT || "8080";
var ip = "0.0.0.0" || "127.0.0.1";

app.listen(port, ip, function(){
    console.log("The Server has Started!");
});
