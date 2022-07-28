// routes/admin/post.js

import { Router } from "../../deps.ts"
const router = Router()

import post from '../../controllers/admin/post.js'

router.get('/', async (req, res) => {
  if(await req.session.get("user") === "logged-in"){
    post.getItem(req, res)
  }else{
    res.redirect('/login')
  }
})

router.post('/', async (req, res) => {
  if(await req.session.get("user" === "logged-in")){
    post.postItem(req, res)
  }else{
    res.redirect('/login')
  }
})
  
export default router