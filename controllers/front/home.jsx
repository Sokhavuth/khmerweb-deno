// controllers/front/home.jsx

/** @jsx h */
import { h, renderSSR } from "../../deps.ts"
import config from '../../config.js'
import Home_ from '../../views/front/home.jsx'

class Home{
  async getItem(req, res){
    this.config = await config()
    this.config.pageTitle = 'ទំព័រ​ដើម'
    this.config.route = '/'

    const str = renderSSR(<Home_ config={this.config} />)
    const html = `<!DOCTYPE html>${str}`
    res.send(html)
  }
}

export default new Home()