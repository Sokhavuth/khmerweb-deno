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

        this.config.count = await postdb.count(req)
        const {item, items} = await postdb.getItem(req, this.config.adminItemLimit)

        if(item){
            await req.session.set('post-userid', item.userid)
        }

        this.config.item = item
        this.config.items = items
        
        const html = await post(this.config)
        res.send(html)
    }

    async postItem(req, res){
        const user_role = await req.session.get('user-role')
        if(user_role in {'Admin':1,'Editor':1,'Author':1}){
            await postdb.insertPost(req)
        }

        res.redirect('/admin/post')
    }

    async editItem(req, res){
        const user_role = await req.session.get('user-role')
        if(user_role in {'Admin':1,'Editor':1,'Author':1}){

            const user_id = await req.session.get('user-id')
            const post_userid = await req.session.get('post-userid')
            
            if((user_role === 'Admin') || (user_id === post_userid)){
                await postdb.editPost(req)
            }
        }

        res.redirect('/admin/post')
    }

    async deleteItem(req, res){   
        await postdb.deletePost(req)
        res.redirect('/admin/post')
    }
}

export default new Post()