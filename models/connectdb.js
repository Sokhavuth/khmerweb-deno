// models/connectdb.ts

import { config, DB } from "../deps.ts"

const db = new DB("./test.db")

export default db
