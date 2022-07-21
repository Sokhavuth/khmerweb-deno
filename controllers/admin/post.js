// controllers/admin/post.js

import config from '../../config.js'
import post from '../../views/admin/post.js'

class Post{
    async getItem(req, res){
        this.config = await config()
        this.config.pageTitle = 'ទំព័​រ​ការផ្សាយ'
        this.config.route = '/admin/post'
        this.config.type = 'post'

        const html = await post(this.config)
        res.send(html)
    }
}

export default new Post()