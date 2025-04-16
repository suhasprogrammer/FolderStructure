const express = require("express");
const router = express.Router();
const Folder = require("../models/Folder");

router.get("/", async (req, res) => {
  const folders = await Folder.find().sort({ createdAt: -1 });
  res.json(folders);
});

router.post("/", async (req, res) => {
  const folder = new Folder(req.body);
  await folder.save();
  res.status(201).json(folder);
});

module.exports = router;
