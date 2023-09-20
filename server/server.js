// server.js
import express from "express";
import bodyParser from "body-parser";
import qr from "qr-image";
import cors from "cors";

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post("/generate-qr", (req, res) => {
  const { text } = req.body;
  const qr_png = qr.image(text, { type: "png" });
  res.setHeader("Content-Type", "image/png");
  qr_png.pipe(res);
});

app.listen(process.env.PORT || 4000, () => {
  console.log(`Server is running on http://localhost:4000`);
});
