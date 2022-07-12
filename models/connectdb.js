// models/connectdb.ts

import { config, MongoClient } from "../deps.ts"

await config({export: true})

const client = await new MongoClient()
await client.connect(Deno.env.get('DATABASE_URI'))
const mydb = client.database(Deno.env.get('DATABASE_URI'))

export default await mydb
