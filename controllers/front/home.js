// controllers/front/home.jsx

import config from '../../config.js'
import _Home from '../../views/front/home.jsx'

class Home{
  async getItem(req, res){
    this.config = await config()
    this.config.pageTitle = 'ទំព័រ​ដើម'
    this.config.route = '/'

    const html = await _Home(this.config)
    res.send(html)
  }
}

export default new Home()