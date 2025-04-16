const express = require("express");
const router = express.Router();
const Document = require("../models/Document");

router.get("/", async (req, res) => {
  const documents = await Document.find().populate("folderId");
  res.json(documents);
});

router.post("/", async (req, res) => {
  const document = new Document(req.body);
  await document.save();
  res.status(201).json(document);
});

module.exports = router;
