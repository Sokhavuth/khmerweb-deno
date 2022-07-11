import {

  dirname,
  fromFileUrl,
  join,
  json,
  opine,
  serveStatic,
  urlencoded,
} from "./deps.ts";

import indexRouter from "./routes/index.js";
import usersRouter from "./routes/users.js";

const __dirname = fromFileUrl(dirname(import.meta.url));

const app = opine();

// Handle different incoming body types
app.use(json());
app.use(urlencoded());

// Serve our static assets
app.use(serveStatic(join(__dirname, "static")));

// Mount our routers
app.use("/", indexRouter);
app.use("/users", usersRouter);  

export default app;
