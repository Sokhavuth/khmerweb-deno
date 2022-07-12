// models/connectdb.ts

import { config, dango } from "../deps.ts"

const { DATABASE_URI, DB_NAME } = await config()

await dango.connect(DATABASE_URI)

export default dango
