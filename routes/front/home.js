// routes/front/home.js

import { Router } from "../../deps.ts"
const router = Router()

import home from '../../controllers/front/home.jsx'

router.get('/', async (req, res) => {
  home.getItem(req, res)
})

export default router