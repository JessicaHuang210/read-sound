const express = require("express");
const router = express.Router();
const singerModule = require("../models/singer");
const sleep = require("../utils/sleep");

// 取得所有歌曲清單
router.get("/", async (req, res) => {
  try {
    const singers = await singerModule.find({}); // mongoose的「查詢」用法
    await sleep(1000);
    res.json(singers);
    return singers;
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

// 新增歌曲
router.post("/", async (req, res) => {
  const params = new singerModule({
    name: req.body.name
  });
  try {
    const newSinger = await params.save(); // mongoose的「新增」用法
    res.status(201).json(newSinger);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
