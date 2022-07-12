// models/connectdb.ts

import { config, MongoClient } from "../deps.ts"

const { DATABASE_URI, DB_NAME } = await config()

const client = await new MongoClient()
await client.connect("mongodb+srv://khmerweb:d8WOQahIjUUFuFzL@cluster0.cg6vh.mongodb.net/deno_blog?authMechanism=SCRAM-SHA-1")
const mydb = client.database("deno_blog");

export default mydb
