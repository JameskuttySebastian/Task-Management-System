require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { verify } = require("jsonwebtoken");
const routes = require("./routes");
const { hash, compare } = require("bcryptjs");
const PORT = process.env.PORT || 3001;

let db = require("./models");

const { createAccessToken, sendAccessToken } = require("./auth/token.js");

let app = express();

// use express middleware for easier cookie handling
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

app.use(express.urlencoded({ extended: true })); // support url encoded bodies

// Start the API server
db.sequelize.sync({ force: false }).then(function () {
  app.listen(PORT, function () {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
