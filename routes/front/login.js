// routes/front/login.js

import { Router, config } from "../../deps.ts"
const router = Router()
await config({export: true})

import login from '../../controllers/front/login.js'

router.get('/', async (req, res) => {
  if(await req.session.get("user") === `__logged-in__${Deno.env.get('SECRET_KEY')}`){
    res.redirect('/admin/post')
  }else{
    login.getItem(req, res)
  }
})

router.post('/', async (req, res) => {
  login.checkUser(req, res)
})

router.get('/logout', async (req, res) => {
  if(await req.session.get("user") === `__logged-in__${Deno.env.get('SECRET_KEY')}`){
    await req.session.set("user", null)
  }
  res.redirect('/')
})

export default router