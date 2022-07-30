// models/connectdb.js

import { config, MongoClient, create, RedisStore, connect } from "../deps.ts"

await config({export: true})

const client = await new MongoClient()
await client.connect(Deno.env.get('DATABASE_URI'))
const mydb = client.database(Deno.env.get('DB_NAME'))

class RedisDB extends RedisStore {
  constructor(options) { 
    super(options)
    this.password = options.password
  }

  async init() {
    this.db = await connect({
      hostname: this.host,
      port: this.port,
      password: this.password,
    })
  }
}

const myredis = new RedisDB({
  host: Deno.env.get('REDIS_URI'),
  port: parseInt(Deno.env.get('REDIS_PORT')),
  password: Deno.env.get('REDIS_PASSWORD'),
})

await myredis.init()

const mykey = await crypto.subtle.generateKey(
  { name: "HMAC", hash: "SHA-512" },
  true,
  ["sign", "verify"],
)

const myuser = `__logged-in__${Deno.env.get('SECRET_KEY')}`
const myjwt = await create({ alg: "HS512", typ: "JWT" }, { user: myuser }, mykey)

export { mydb, mykey, myjwt, myuser, myredis }