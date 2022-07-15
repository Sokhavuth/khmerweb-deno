// views/front/login.jsx

/** @jsx h */
import { h, renderSSR } from "../../deps.ts"

function LoginJsx(props){
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
        <link rel="stylesheet" href="/styles/front/login.css" />
      </head>
      <body>
      <section class="Login">
      <div class="wrapper">
        <div class="title">ផ្ទៀងផ្ទាត់​ពាក្យ​សំងាត់​ចូល​គណនី​</div>
        <form action="/login" method="post">
          <a>Email:</a><input type="email" name="email" required />
          <a>ពាក្យ​សំងាត់ៈ</a><input type="password" name="password" required />
          <a></a><input type="submit" value="បញ្ជូន" />
          <a></a><div class="info">{props.config.message}</div>
        </form>
      </div>
      </section>
      </body>
    </html>
  )
}

async function Login(config){
  const str = renderSSR(<LoginJsx config={config} />)
  const html = `<!DOCTYPE html>${str}`
  return html
}

export default Login