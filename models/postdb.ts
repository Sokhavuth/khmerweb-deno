// models/postdb.js

interface PostSchema {
    _id: ObjectId;
    id: string; 
    title: string;
    content: string;
    categories: string[];
    thumb: string;
    postdate: string;
    video: string;
    userid: string;
}

class Postdb{
    async count(req, query={}){
        const posts = req.mydb.collection<PostSchema>("posts")
        return await posts.countDocuments(query)
    }

    async insertPost(req){
        const id = Date.now() + Math.round(Math.random() * 1E9).toString()

        if(req.body.categories.includes(',')){
            var categories: string[] = req.body.categories.split(',')
        }else{
            var categories: string[] = [req.body.categories]
        }

        const user_id = await req.session.get('user-id')
        
        let newPost = {
            id: id, 
            title: req.body.title,
            content: req.body.content,
            categories: categories,
            thumb: req.body.thumb,
            postdate: req.body.datetime,
            video: req.body.video,
            userid: user_id,
        }
 
        const posts = req.mydb.collection<PostSchema>("posts")
        await posts.insertOne(newPost)
    }

    async getItem(req, amount, query={}){
        const posts = req.mydb.collection<PostSchema>("posts")
        let item = null

        if(req.params.id){
            item = await posts.findOne({id: req.params.id})
        }

        const items = await posts.find(query).sort({date:-1,_id:-1}).limit(amount).toArray()
        return {item:item, items:items}
    }

    async editPost(req){
        if(req.body.categories.includes(',')){
            var categories: string[] = req.body.categories.split(',')
        }else{
            var categories: string[] = [req.body.categories]
        }

        let editPost = {$set:{
            title: req.body.title,
            content: req.body.content,
            categories: categories,
            thumb: req.body.thumb,
            postdate: req.body.datetime,
            video: req.body.video,
        }}
        
        const posts = req.mydb.collection<PostSchema>("posts")
        await posts.updateOne({id: req.params.id}, editPost)
    }

    async deletePost(req){
        const posts = req.mydb.collection<PostSchema>("posts")

        if(req.params.id){
            var item = await posts.findOne({id: req.params.id})
        }

        const user_id = await req.session.get('user-id')

        const user_role = await req.session.get('user-role')
        if(user_role in {'Admin':1,'Editor':1,'Author':1}){
            if((user_role === 'Admin') || (user_id === item.userid)){
                await posts.deleteOne({id: req.params.id})
            }
        }
    }
}

export default new Postdb