const mongoose = require("mongoose");

const singerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("singer", singerSchema);
