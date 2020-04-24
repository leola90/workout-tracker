const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  cardio: {
    type: String,
    trim: true,
    required: "Select an excerise type"
  },
  resistance: {
    type: String,
    required: "Select an excerise type"
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
