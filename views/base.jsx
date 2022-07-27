// views/base.jsx

/** @jsx h */
import { h, renderSSR } from "../deps.ts"

function Base(props){
  const Page = props.config.page
  
  return(
    <html>
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>{props.config.siteTitle} | {props.config.pageTitle}</title>
        <link href="/images/siteLogo.png" rel="icon" />
        <link href="/styles/base.css" rel="stylesheet" />
        <link href="/fonts/setup.css" rel="stylesheet" />
        <script src="/scripts/jquery.js"></script>
      </head>
      <body>
        <Page config={props.config} />
      </body>
    </html>
  )
}

export default Base