import { registerAgency } from "../controller/agency.controller.js";
import { protect } from "../middleware/auth.middleware.js";
import express from "express";

const router = express.Router();

router.post("/registerAgency",registerAgency);

export default router;