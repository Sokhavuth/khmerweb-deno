// models/users.ts

import { bcrypt } from '../deps.ts'

interface UserSchema {
  _id: ObjectId;
  id: string; 
  title: string;
  content: string;
  thumb: string;
  postdate: string;
  role: string;
  email: string;
  password: string;
}

class User{
  async createRootUser(req){
    const id = Date.now() + Math.round(Math.random() * 1E9).toString()
    const salt = await bcrypt.genSalt(8)
    const hashPassword = bcrypt.hashSync('xxxxxxxxxxxxxxx', salt)

    let newUser = {
      id: id, 
      title: 'Guest',
      content: '',
      thumb: '',
      postdate: '',
      role: 'guest',
      email: 'guest@khmerweb.app',
      password: hashPassword,
    }
 
    const users = req.mydb.collection<UserSchema>("users")
    await users.insertOne(newUser)
  }

  async postItem(req){
    const id = Date.now() + Math.round(Math.random() * 1E9).toString()
    const salt = await bcrypt.genSalt(8)
    const hashPassword = bcrypt.hashSync(req.body.password, salt)

    let newUser = {
      id: id, 
      title: req.body.title,
      content: req.body.content,
      thumb: req.body.thumb,
      postdate: req.body.datetime,
      role: req.body.category,
      email: req.body.email,
      password: hashPassword,
    }
 
    const users = req.mydb.collection<UserSchema>("users")
    await users.insertOne(newUser)
  }

  async checkUser(req){
    const query = {email:req.body.email}
    return await req.mydb.collection<UserSchema>("users").findOne(query)
  }
}

export default new User()