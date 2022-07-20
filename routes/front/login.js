// routes/fron/login.js

import { Router } from "../../deps.ts"
const router = Router()

import login from '../../controllers/front/login.js'

router.get('/', async (req, res) => {
  if(await req.session.has('usersx')){
    res.redirect('/admin/post')
  }else{
    login.getItem(req, res)
  }
})

router.post('/', async (req, res) => {
  login.checkUser(req, res)
})

export default router