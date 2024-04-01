import { Router } from "express";
import { healthCheckUp } from "../controllers/healtcheck.controller.js";


const router = Router()

router.post("/health-checkup", healthCheckUp)

export default router;