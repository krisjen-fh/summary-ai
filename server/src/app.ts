import testRoutes from "./routes/test.routes";
import express from "express";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

import processNewsRoute from "./routes/processNews.routes";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/test", testRoutes);

app.use("/api/process-news", processNewsRoute)

app.use("/output", express.static(path.join(__dirname, "../python/nlp")))

app.post("/test", (req, res) => {
  console.log(req.body);

  res.json({
    body: req.body
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});