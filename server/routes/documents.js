const express = require("express");
const multer = require("multer");
const Document = require("../models/Document");
const router = express.Router();

// multer config
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

// POST /documents/upload/:folderId
router.post("/upload/:folderId", upload.single("file"), async (req, res) => {
  const { folderId } = req.params;
  const file = req.file;
  if (!file) return res.status(400).json({ error: "No file uploaded" });

  try {
    const doc = await Document.create({
      name: file.originalname,
      fileUrl: file.path,
      folder: folderId,
    });
    res.status(201).json(doc);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /documents/folder/:folderId
router.get("/folder/:folderId", async (req, res) => {
  try {
    const docs = await Document.find({ folder: req.params.folderId });
    res.json(docs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
