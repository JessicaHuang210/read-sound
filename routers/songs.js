const express = require("express");
const router = express.Router();
const songModule = require("../models/song");
const sleep = require("../utils/sleep");

// 取得所有歌曲清單
router.get("/", async (req, res) => {
  const params = {
    name: new RegExp(req.query.name || ""),
    singer: new RegExp(req.query.singer || ""),
    album: new RegExp(req.query.album || "")
  };
  try {
    const songs = await songModule.find(params); // mongoose的「查詢」用法
    await sleep(1000);
    res.json(songs);
    return songs;
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

// 取得單一歌曲
router.get("/:id", getSongInfo, async (req, res) => {
  res.json(res.song);
});

// 新增歌曲
router.post("/", async (req, res) => {
  const songParams = new songModule({
    name: req.body.name,
    singer: req.body.singer,
    album: req.body.album
  });
  try {
    const newSong = await songParams.save(); // mongoose的「新增」用法
    res.status(201).json(newSong);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// 編輯歌曲
router.patch("/:id", getSongInfo, async (req, res) => {
  Object.keys(req.body).forEach(i => {
    res.song[i] = req.body[i];
  });
  try {
    await res.song.save();
    await sleep(1000);
    res.status(204).json();
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// 刪除歌曲
router.delete("/:id", getSongInfo, async (req, res) => {
  try {
    await res.song.remove();
    res.json({ message: `已刪除 【${res.song.name}】` });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getSongInfo(req, res, next) {
  let song;
  try {
    song = await songModule.findById(req.params.id);
    if (song === null) {
      res.status(404).json({ message: "找不到" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
  res.song = song;
  next();
}
module.exports = router;
