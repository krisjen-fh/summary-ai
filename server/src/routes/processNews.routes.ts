import express from "express";
import { handleProcessNews } from "../controllers/processNews.controller";

const router = express.Router();

router.post("/", handleProcessNews);

export default router;