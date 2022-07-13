// routes/fron/login.js

import { Router } from "../../deps.ts"
const router = Router()

import login from '../../controllers/front/login.jsx'

router.get('/', async (req, res) => {
  login.getItem(req, res)
})

export default router