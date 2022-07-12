// mod.ts

import app from "./app.ts"

const port = parseInt(Deno.env.get("PORT") ?? "3000")
app.set("port", port)

const env = Deno.env.get("DENO_ENV") ?? "development"
app.set("env", env)

app.listen(port, () => console.log(`listening on port ${port}`))

// denon run --allow-net --allow-read --allow-env mod.ts