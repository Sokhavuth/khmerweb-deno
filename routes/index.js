import { Router } from "../deps.ts";

const router = Router();

import html from '../views/base.jsx'

router.get("/", (_req, res, _next) => {
  res.send(html)
});

export default router;
