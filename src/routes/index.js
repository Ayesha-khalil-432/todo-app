import { Router } from "express";
import healthcheckup from "./healthCheckUp.route.js"

const router = Router()

router.use("/healthcheck", healthcheckup)

export default router