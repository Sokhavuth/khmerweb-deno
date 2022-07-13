// controllers/front/login.jsx

/** @jsx h */
import { h, renderSSR } from "../../deps.ts"
import config from '../../config.js'
import Login_ from '../../views/front/login.jsx'
import userdb from '../../models/users.ts'
import { bcrypt } from '../../deps.ts'

class Login{
  async getItem(req, res){
    this.config = await config()
    this.config.pageTitle = 'ទំព័​ចូល​ក្នុង'
    this.config.route = '/login'

    const str = renderSSR(<Login_ config={this.config} />)
    const html = `<!DOCTYPE html>${str}`
    res.send(html)
  }

  async checkUser(req,res){
    this.config = await config()
    this.config.pageTitle = 'ផ្ទៀង​ផ្ទាត់​ពាក្យ​សំងាត់'

    let user = await userdb.checkUser(req)
    
    if(user){
        if(user.role in {'Admin':1,'Editor':1,'Author':1}){
            if(await bcrypt.compare(req.body.password, user.password)){
              await req.session.set("user", user)
              res.redirect('/admin/post')
            }else{
              this.config.message = 'ពាក្យ​សំងាត់​មិន​ត្រឹមត្រូវ​ទេ'
              this.config.route = '/login'

              const str = renderSSR(<Login_ config={this.config} />)
              const html = `<!DOCTYPE html>${str}`
              res.send(html)
            }
        }else if(user.role in {'subscriber':1}){
          this.config.message = 'សូម​ចុច​បញ្ជាក់ការចុះ​ឈ្មោះ​ក្នុង Email របស់​អ្នក​'
          this.config.route = '/login'

          const str = renderSSR(<Login_ config={this.config} />)
          const html = `<!DOCTYPE html>${str}`
          res.send(html)
        }
    }else{
      this.config.message = 'Email មិន​ត្រឹមត្រូវទេ'
      this.config.route = '/login'

      const str = renderSSR(<Login_ config={this.config} />)
      const html = `<!DOCTYPE html>${str}`
      res.send(html)
    }
  }
}

export default new Login()