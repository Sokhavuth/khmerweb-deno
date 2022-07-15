// routes/front/home.js

import { Router } from "../../deps.ts"
const router = Router()

import home from '../../controllers/front/home.js'

router.get('/', async (req, res) => {
  home.getItem(req, res)
})

export default router