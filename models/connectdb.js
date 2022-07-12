// models/connectdb.ts

import { config, MongoClient } from "../deps.ts"

async function getdb(){
  const env = await config()

  const client = await new MongoClient()
  await client.connect(env.DATABASE_URI)
  const mydb = client.database(env.DB_NAME)
  console.log(mydb)
  return mydb
}

export default await getdb()
