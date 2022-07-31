// app.ts

import {
  dirname,
  fromFileUrl,
  join,
  json,
  opine,
  serveStatic,
  urlencoded,
  OpineSession,
} from "./deps.ts"

import indexRouter from "./routes/index.js"
import adminRouter from "./routes/admin.js"
import { mydb, mykey, myjwt, myuser, myredis} from './models/connectdb.js'

const app = opine()
const session = new OpineSession(app)

//const session = new OpineSession(app, {}, myredis)

const __dirname = fromFileUrl(dirname(import.meta.url))

app.use(async (req, res, next) => {
  req.mydb = await mydb
  req.session = session
  req.mykey = await mykey
  req.myjwt = await myjwt
  req.myuser = await myuser
  next()
})

app.use(json())
app.use(urlencoded())

app.use(serveStatic(join(__dirname, "static")))

app.use("/", indexRouter)
app.use("/admin", adminRouter)

export default app