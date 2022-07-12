// controllers/front/home.jsx

/** @jsx h */
import { h, renderSSR } from "../../deps.ts"
import config from '../../config.js'
import Base from '../../views/base.jsx'

class Home{
  async getItem(req, res){
    this.config = await config()
    this.config.pageTitle = 'ទំព័រ​ដើម'
    this.config.route = '/'

    const str = renderSSR(<Base config={this.config} />)
    const html = `<!DOCTYPE html>${str}`
    res.send(html)
  }
}

export default new Home()