const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const folderRoutes = require("./routes/folder");
const documentRoutes = require("./routes/documents");

const app = express();
const PORT = process.env.PORT || 5000;
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));
console.log("checking");

// Routes
app.use("/folders", folderRoutes);
app.use("/documents", documentRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
