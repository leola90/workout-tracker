const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true
});

// routes
require("./routes/api-route.js")(app);
require("./routes/html-route.js")(app);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
