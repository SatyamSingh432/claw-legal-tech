import express from "express";
import { authenticateToken } from "../middleware/authMiddleware.js";
import {
  submitQuestionnaire,
  submitResignation,
} from "../controllers/userController.js";
const router = express.Router();

router.post("/resign", authenticateToken, submitResignation);

router.post("/responses", authenticateToken, submitQuestionnaire);

export default router;
