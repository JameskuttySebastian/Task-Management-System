require("dotenv").config();
const express = require("express");
const routes = require("./routes");
let app = express();
const PORT = process.env.PORT || 3001;
let db = require("./models");

app.use(express.static("public"));

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

// Start the API server
db.sequelize.sync({ force: true }).then(function () {
  app.listen(PORT, function () {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
