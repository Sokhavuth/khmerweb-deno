// routes/fron/login.js

import { Router } from "../../deps.ts"
const router = Router()

import login from '../../controllers/front/login.tsx'

router.get('/', async (req, res) => {
  login.getItem(req, res)
})

router.post('/', async (req, res) => {
  login.checkUser(req, res)
})

export default router