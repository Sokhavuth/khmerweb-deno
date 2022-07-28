// controllers/admin/post.js

import config from '../../config.js'
import post from '../../views/admin/post.jsx'
import postdb from '../../models/postdb.ts'

class Post{
    async getItem(req, res){
        this.config = await config()
        this.config.pageTitle = 'ទំព័​រ​ការផ្សាយ'
        this.config.route = '/admin/post'
        this.config.type = 'post'

        const html = await post(this.config)
        res.send(html)
    }

    async postItem(req, res){
        const user = await req.session.get('user')
        if(user.role in {'Admin':1,'Editor':1,'Author':1}){
            await postdb.insertPost(req)
        }

        res.redirect('/admin/post')
    }
}

export default new Post()