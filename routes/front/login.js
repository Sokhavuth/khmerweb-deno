// routes/front/login.js

import { Router } from "../../deps.ts"
const router = Router()

import login from '../../controllers/front/login.js'

router.get('/', async (req, res) => {
  if(await req.session.get("user") === "logged-in"){
    res.redirect('/admin/post')
  }else{
    login.getItem(req, res)
  }
})

router.post('/', async (req, res) => {
  login.checkUser(req, res)
})

router.get('/logout', async (req, res) => {
  if(await req.session.get("user") === "logged-in"){
    await req.session.set("user", null)
  }
  res.redirect('/')
})

export default router