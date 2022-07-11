import {

  dirname,
  fromFileUrl,
  join,
  json,
  opine,
  serveStatic,
  urlencoded,
} from "./deps.ts";

import indexRouter from "./routes/index.ts";
import usersRouter from "./routes/users.ts";

const __dirname = fromFileUrl(dirname(import.meta.url));

const app = opine();

// Handle different incoming body types
app.use(json());
app.use(urlencoded());

// Serve our static assets
app.use(serveStatic(join(__dirname, "public")));

// Mount our routers
app.use("/", indexRouter);
app.use("/users", usersRouter);  

export default app;
