const express = require("express");
const bodyParser = require("body-parser");
const qr = require("qr-image");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Serve the built React app
app.use(express.static(path.join(__dirname, "client/build")));

app.post("/generate-qr", (req, res) => {
  const { text } = req.body;
  const qr_png = qr.image(text, { type: "png" });
  res.setHeader("Content-Type", "image/png");
  qr_png.pipe(res);
});

// Catch-all route for handling client-side routing
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

app.listen(process.env.PORT || 4000, () => {
  console.log(`Server is running on http://localhost:4000`);
});
