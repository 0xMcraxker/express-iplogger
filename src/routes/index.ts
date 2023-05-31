import { Router } from "express";

import { Logger } from "../controllers/logger";

const router = Router();

router.all("*", Logger);

export default router;