// controllers/index.jsx

/** @jsx h */
import { h } from "../mod.js";

function Index(){
  return(
    <html>
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>data.siteTitle | data.pageTitle</title>
        <link href="/images/siteLogo.png" rel="icon" />
        <link href="/styles/base.css" rel="stylesheet" />
        <link href="/fonts/setup.css" rel="stylesheet" />
        <script src="/scripts/jquery.js"></script>
      </head>
      <body>
        Khmer Web Deno.js Blog Engine
      </body>
    </html>
  )
}

export default Index