// models/connectdb.js

import { config, MongoClient } from "../deps.ts"

const { DATABASE_URI, DB_NAME } = config()
console.log(config())
async function connectdb(){
  const client = new MongoClient()
  await client.connect(DATABASE_URI)
  return client.database(DB_NAME)
}

const mydb = connectdb()
//help
export default mydb