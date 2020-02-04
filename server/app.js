const express = require("express");
require("dotenv").config();
var cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
// const oldDburl = "mongodb://localhost:27017/myapp"
const dbUser = process.argv[2];
const dbPsw = process.argv[3];
console.log("dbUser", dbUser);
console.log("dbPsw", dbPsw);
const dbUrl = `mongodb+srv://${dbUser}:${dbPsw}@readsound-wvv8y.gcp.mongodb.net/test?retryWrites=true&w=majority`;
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

app.listen(1313, () => console.log("runing on port 1313"));
