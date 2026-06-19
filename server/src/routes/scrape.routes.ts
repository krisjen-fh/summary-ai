import express from "express";
import { scrapeBatamNews } from "../controllers/scrape.controller";

const router = express.Router();

router.get("/", scrapeBatamNews);

export default router;