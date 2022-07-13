// routes/index.js

import { Router } from "../deps.ts"
const router = Router()

import home from './front/home.js'
router.use('/', home)

import login from './front/login.js'
router.use('/login', login)

export default router