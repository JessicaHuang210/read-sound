const mongoose = require("mongoose");

const songSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  singer: {
    type: String,
    required: true
  },
  album: {
    type: String
  },
  fileName: {
    type: String
  }
});

module.exports = mongoose.model("song", songSchema);
