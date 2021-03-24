//requiring dependencies
require("dotenv").config();
const compression = require("compression"),
  express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  methodOverride = require("method-override"),
  mailgun = require("mailgun-js")({
    apiKey: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMAIN,
  }),
  http = require("http"),
  enforce = require("express-sslify"),
  helmet = require("helmet");

//uses helmet; makes app more secure
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);

//if production environment, set these options
if (app.get("env") === "production") {
  //tells server to trust first proxy ie. heroku
  app.set("trust proxy", 1);
  app.use(
    enforce.HTTPS({ trustProtoHeader: true, trustXForwardedHostHeader: true })
  );
}

//uses compression; makes app more efficient
app.use(compression());

//allows posting to nested objects
app.use(bodyParser.urlencoded({ extended: true }));

//sets ejs to default view
app.set("view engine", "ejs");

app.use(methodOverride("_method"));

//allows shorthand for css & assets
app.use(express.static("css"));
app.use(express.static("img"));

app.get("/", function (req, res) {
  res.render("landing");
});

app.put("/", function (req, res) {
  if (req.body.information.length > 0) {
    return res.redirect("/");
  } else {
    const data = {
      from: req.body.email,
      to: process.env.EMAIL,
      subject: req.body.email + " Contacted You",
      html:
        "<strong>Their Information</strong><br>" +
        "<strong>Email Address</strong>: " +
        req.body.email +
        "<br>" +
        "<strong>Phone Number</strong>: " +
        (req.body.phoneNumber || "N/A") +
        "<br>" +
        "<strong>Referred By</strong>: " +
        (req.body.referral || "N/A") +
        "<br><br>" +
        "<strong>Their Message</strong>: " +
        req.body.message +
        "<br><br>" +
        "Do not reply to this email.",
    };

    mailgun.messages().send(data, function (error, body) {
      if (error) {
        return res.redirect("/");
      }

      return res.redirect("/");
    });
  }
});

//handles 404 statuses
app.use(function (req, res, next) {
  res.status(404).redirect("/");
});

//sets which IP/Port the server connects to
const port = process.env.PORT;
const ip = "0.0.0.0" || "127.0.0.1";

//starts the server
http.createServer(app).listen(port, ip), function () {};
