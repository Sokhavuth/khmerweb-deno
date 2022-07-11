// controllers/404.jsx

// controllers/index.jsx

/** @jsx h */
import { h } from "../mod.js";

function NotFound(){
  return(
    <html>
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </head>
      <body>
        <h1>Page not found</h1>
      </body>
    </html>
  )
}

export default NotFound