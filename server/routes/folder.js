const express = require("express");
const Folder = require("../models/Folder");
const router = express.Router();

// POST /folders - create folder
router.post("/", async (req, res) => {
  const { name, description } = req.body;
  try {
    const folder = await Folder.create({ name, description });
    res.status(201).json(folder);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
console.log("second check");

// GET /folders - get all folders
router.get("/", async (req, res) => {
  try {
    const folders = await Folder.find().sort({ createdAt: -1 });
    res.json(folders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
