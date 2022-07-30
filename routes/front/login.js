// routes/front/login.js

import { Router, verify } from "../../deps.ts"
const router = Router()

import login from '../../controllers/front/login.js'

router.get('/', async (req, res) => {
  if(await req.session.get("user") === (await verify(req.myjwt, req.mykey)).user){
    res.redirect('/admin/post')
  }else{
    login.getItem(req, res)
  }
})

router.post('/', async (req, res) => {
  login.checkUser(req, res)
})

router.get('/logout', async (req, res) => {
  if(await req.session.get("user") === (await verify(req.myjwt, req.mykey)).user){
    await req.session.set("user", null)
  }
  res.redirect('/')
})

export default router