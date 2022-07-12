// models/connectdb.ts

import { config, MongoClient } from "../deps.ts"

const { DATABASE_URI, DB_NAME } = await config()

const client = await new MongoClient()
await client.connect(DATABASE_URI)
const mydb = client.database(DB_NAME);

export default mydb
