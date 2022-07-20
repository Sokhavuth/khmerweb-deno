// routes/admin.js

import { Router } from "../deps.ts"

const router = Router()

import post from './admin/post.js'
router.use('/post', post)

export default router