// routes/admin/post.js

import { Router, verify } from "../../deps.ts"
const router = Router()

import post from '../../controllers/admin/post.js'

router.get('/', async (req, res) => {
  if(await req.session.get("user") === (await verify(req.myjwt, req.mykey)).user){
    post.getItem(req, res)
  }else{
    res.redirect('/login')
  }
})

router.post('/', async (req, res) => {
  if(await req.session.get("user") === (await verify(req.myjwt, req.mykey)).user){
    post.postItem(req, res)
  }else{
    res.redirect('/login')
  }
})

router.get('/edit/:id', async (req, res) => {
  if(await req.session.get("user") === (await verify(req.myjwt, req.mykey)).user){
    post.getItem(req, res)
  }else{
    res.redirect('/login')
  }
})

router.post('/edit/:id', async (req, res) => {
  if(await req.session.get("user") === (await verify(req.myjwt, req.mykey)).user){
    post.editItem(req, res)
  }else{
    res.redirect('/login')
  }
})
  
export default router