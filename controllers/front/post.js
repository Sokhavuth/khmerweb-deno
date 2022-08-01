// controllers/front/post.js

import config from '../../config.js'
import post from '../../views/front/post.jsx'
import postdb from '../../models/postdb.ts'

class Post{
    async getOneItem(req, res){
        this.config = await config()
        this.config.pageTitle = 'ទំព័រ​ការផ្សាយ'
        this.config.route = '/'

        let {item} = await postdb.getItem(req, 0)
        this.config.post = item

        const html = await post(this.config)
        res.send(html)
    }
}

export default new Post()