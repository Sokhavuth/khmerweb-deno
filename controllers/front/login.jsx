// controllers/front/login.jsx

/** @jsx h */
import { h, renderSSR } from "../../deps.ts"
import config from '../../config.js'
import Login_ from '../../views/front/login.jsx'

class Login{
  async getItem(req, res){
    this.config = await config()
    this.config.pageTitle = 'ទំព័​ចូល​ក្នុង'
    this.config.route = '/login'

    const str = renderSSR(<Login_ config={this.config} />)
    const html = `<!DOCTYPE html>${str}`
    res.send(html)
  }
}

export default new Login()