// routes/admin/post.js

import { Router, config } from "../../deps.ts"
const router = Router()
await config({export: true})

import post from '../../controllers/admin/post.js'

router.get('/', async (req, res) => {
  if(await req.session.get("user") === `__logged-in__${Deno.env.get('SECRET_KEY')}`){
    post.getItem(req, res)
  }else{
    res.redirect('/login')
  }
})

router.post('/', async (req, res) => {
  if(await req.session.get("user") === `__logged-in__${Deno.env.get('SECRET_KEY')}`){
    post.postItem(req, res)
  }else{
    res.redirect('/login')
  }
})
  
export default router