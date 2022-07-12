// models/connectdb.ts

import { config, MongoClient } from "../deps.ts"

async function getdb(){
  const { DATABASE_URI, DB_NAME } = await config()

  const client = await new MongoClient()
  await client.connect(DATABASE_URI)
  const mydb = client.database(DB_NAME)
  console.log(mydb)
  return mydb
}

export default await getdb()
