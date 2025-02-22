import express from "express";

import { authenticateToken, isAdmin } from "../middleware/authMiddleware.js";

import {
  concludeResignation,
  getExitResponses,
  getResignations,
} from "../controllers/adminController.js";

const router = express.Router();

router.get("/resignations", authenticateToken, isAdmin, getResignations);

router.put(
  "/conclude_resignation",
  authenticateToken,
  isAdmin,
  concludeResignation
);

router.get("/exit_responses", authenticateToken, isAdmin, getExitResponses);

export default router;
