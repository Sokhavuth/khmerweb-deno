// views/admin/post.jsx

/** @jsx h */
import { h, renderSSR } from "../../deps.ts"

function PostJsx(props){
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
        <link rel="stylesheet" href="/styles/admin/post.css" />
      </head>
      <body>
        <section class="Post">
            <div class="header">
                <div class="inner region">
                    <div class="logo">{props.config.pageTitle}</div>
                    <form action="/admin/search" method="post">
                        <select name="searchType">
                            <option>ការផ្សាយ</option>
                        </select>
                        <input type="text" name="q" required placeholder="Search" />
                        <input type="submit" value="ស្វែង​រក" />
                    </form>
                    <div class="logout">
                        <a href="/">ទំព័រ​មុខ</a> | <a href="/login/logout">ចេញ​ក្រៅ</a>
                    </div>
                </div>
            </div>
        </section>
      </body>
    </html>
  )
}

function Post(config){
  const str = renderSSR(<PostJsx config={config} />)
  const html = `<!DOCTYPE html>${str}`
  return html
}

export default Post