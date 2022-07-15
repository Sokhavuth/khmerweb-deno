// views/front/home.jsx

/** @jsx h */
import { h, renderSSR } from "../../deps.ts"

function HomeJsx(props){
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
        <link rel="stylesheet" href="/styles/front/home.css" />
      </head>
      <body>
        <section class="Home">
            {props.config.pageTitle}
        </section>
      </body>
    </html>
  )
}

async function Home(config){
  const str = renderSSR(<HomeJsx config={config} />)
  const html = `<!DOCTYPE html>${str}`
  return html
}

export default Home