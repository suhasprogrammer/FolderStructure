const mongoose = require("mongoose");

const documentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    fileUrl: { type: String, required: true },
    folder: { type: mongoose.Schema.Types.ObjectId, ref: "Folder" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Document", documentSchema);
