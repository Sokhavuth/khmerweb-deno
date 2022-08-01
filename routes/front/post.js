// routes/front/home.js

import { Router } from "../../deps.ts"
const router = Router()

import post from '../../controllers/front/post.js'

router.get('/:id', async (req, res) => {
    post.getOneItem(req, res)
})

export default router