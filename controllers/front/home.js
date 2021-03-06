// controllers/front/home.js

import config from '../../config.js'
import _Home from '../../views/front/home.jsx'
import postdb from '../../models/postdb.ts'

class Home{
  async getItem(req, res){
    this.config = await config()
    this.config.pageTitle = 'ទំព័រ​ដើម'
    this.config.route = '/'

    let {items} = await postdb.getItem(req, 10)
    this.config.posts = items

    const html = await _Home(this.config)
    res.send(html)
  }
}

export default new Home()