import { Router } from "../deps.ts";
const router = Router();

import home from './front/home.js'
router.use('/', home)

export default router;
