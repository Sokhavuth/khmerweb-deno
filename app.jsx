// app.jsx

/** @jsx h */
import { h, json, jsx, serve, serveStatic } from "./mod.js"

import { Index, NotFound } from './routes/index.js'

serve({
  "/": () => jsx(<Index />),
  "/api": () => json({ message: "Hello world" }),
  "/:filename+": serveStatic("static", { baseUrl: import.meta.url }),
  404: () => jsx(<NotFound />, { status: 404 }),
})

// denon run --allow-net --allow-read --allow-env app.jsx