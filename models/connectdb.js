// models/connectdb.js

import { config, MongoClient } from "../deps.ts"

const env = config()

async function connectdb(){
  const client = new MongoClient()
  await client.connect(env.DATABASE_URI)
  
  return client.database(env.DB_NAME)
}

const mydb = connectdb()

export default mydb
