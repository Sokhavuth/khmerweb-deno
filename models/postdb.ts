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
    async insertPost(req){
        const id = Date.now() + Math.round(Math.random() * 1E9).toString()

        if(req.body.categories.includes(',')){
            var categories: string[] = req.body.categories.split(',')
        }else{
            var categories: string[] = [req.body.categories]
        }

        const user = await req.session.get('user')
        
        let newPost = {
            id: id, 
            title: req.body.title,
            content: req.body.content,
            categories: categories,
            thumb: req.body.thumb,
            postdate: req.body.datetime,
            video: req.body.video,
            userid: user.id,
        }
 
        const posts = req.mydb.collection<PostSchema>("posts")
        await posts.insertOne(newPost)
    }
}

export default new Postdb