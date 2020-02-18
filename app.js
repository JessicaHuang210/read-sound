const express = require("express");
const path = require("path");

require("dotenv").config();
var cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(express.static(path.join(__dirname, "client/build")));

app.use(cors());
// const oldDburl = "mongodb://localhost:27017/myapp"

const dbPsw = process.argv[2];
console.log("dbPsw", dbPsw);
console.log("PSW", process.env.PSW);
const dbUrl = `mongodb://jess:${process.env.PSW ||
  dbPsw}@readsound-shard-00-00-wvv8y.gcp.mongodb.net:27017,readsound-shard-00-01-wvv8y.gcp.mongodb.net:27017,readsound-shard-00-02-wvv8y.gcp.mongodb.net:27017/test?ssl=true&replicaSet=readSound-shard-0&authSource=admin&retryWrites=true&w=majority`;
mongoose.connect(dbUrl, {
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

// app.get("/*", (req, res) => {
//   res.sendFile(path.join(__dirname, "build", "index.html"));
// });

app.listen(process.env.PORT || 1313, () => console.log("runing on port 1313"));
