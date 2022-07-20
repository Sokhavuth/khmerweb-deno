// routes/admin/post.js

import { Router } from "../../deps.ts"
const router = Router()

import post from '../../controllers/admin/post.js'

router.get('/', async (req, res) => {
  post.getItem(req, res)
})
  
export default router