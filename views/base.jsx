// views/base.jsx

/** @jsx h */
import { h, renderSSR } from "../deps.ts"

function Base(props){
  const Page = props.config.page
  function generateFooter(){
    let footer = ''
    if(props.config.items){
      for(let item of props.config.items){
        footer += `<li>`
        footer += `<div class='thumb'>`
        footer += `<a href='/${ props.config.type }/${ item.id }'>`
        footer += `<img src='${ item.thumb }'/> `
        if((item.video)&&(item.video !== '[]')){           
          footer += `<img class="play-icon" src="/images/play.png"/>`  
        }   
        footer += `</a>`
        footer += `</div>`
        footer += `<div class="title">`
        footer += `<a href="/${ props.config.type }/${ item.id }">${ item.title }</a>`         
        if(props.config.route === '/admin/user'){
          footer += `<p>${ item.role }</p>`
        }
        footer += `<div>${ (new Date(item.postdate)).toLocaleDateString('it-IT') }</div>`
        footer += `</div>`     
        footer += `<div class="edit">`       
        footer += `<a href="${ props.config.route }/edit/${ item.id }"><img src="/images/edit.png"/></a>`       
        footer += `<a href="${ props.config.route }/delete/${ item.id }"><img src="/images/delete.png"/></a>`   
        footer += `</div> `   
        footer += `</li>`                         
      } 

      return footer
    }
  } 
  
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

        <section class="Footer region">
          <div class="info">សរុប​ទាំងអស់​មាន​ចំនួនៈ {props.config.count}</div>

          <ul class="list" dangerouslySetInnerHTML={{__html: 
            `${ generateFooter() }` }}/>
          <div class="pagination" dangerouslySetInnerHTML={{__html: `
            <img onClick="paginate('${ props.config.route }')" src="/images/load-more.png" />
          `}}/>
            
          <div class="credit">&copy; 2022 <a href="https://khmerweb.vercel.app/">Khmer Web</a></div>
        </section>
      </body>
    </html>
  )
}

export default Base