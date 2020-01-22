const express = require("express");
var cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(cors());

mongoose.connect("mongodb://localhost:27017/myapp", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.connection.on("error", err => {
  console.log("err", err);
});
mongoose.connection.once("open", (err, res) => {
  console.log("mongoose is connected");
});

app.use(express.json());
app.use("/getSongs", require("./routers/songs"));

app.listen(1313, () => console.log("runing on port 1313"));
