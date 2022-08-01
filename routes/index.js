// routes/index.js

import { Router } from "../deps.ts"
const router = Router()

import home from './front/home.js'
router.use('/', home)

import login from './front/login.js'
router.use('/login', login)

import post from './front/post.js'
router.use('/post', post)

export default router