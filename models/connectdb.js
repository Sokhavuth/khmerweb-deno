// models/connectdb.ts

import { config, MongoClient } from "../deps.ts"

const env = await config()

const client = new MongoClient()
await client.connect(env.DATABASE_URI)
  
const mydb = client.database(env.DB_NAME)
export default mydb
