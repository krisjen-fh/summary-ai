import express from "express";
import { generateSummary } from "../controllers/summary.controller";

const router = express.Router()

router.post("/", generateSummary);

export default router;