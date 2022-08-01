// views/front/post.jsx

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
          <link rel="stylesheet" href="/styles/front/home.css" />
          <link rel="stylesheet" href="/styles/front/menu.css" />
          <link rel="stylesheet" href="/styles/front/single.css" />
          <script src="/scripts/setPlayer.js"></script>
        </head>
        <body>
        <section class="Home">
        <header>
              <div class="inner region">
                <div class="title"><a href="/">{props.config.siteTitle}</a></div>
                <form action="/search" method="post">
                  <select name='category'>
                    <option>ការផ្សាយ</option>
                  </select>
                  <input type="text" name="q" required placeholder="Search" />
                  <input type="submit" value="ស្វែងរក" />
                </form>
                <div class="login"><a href="/login">ចូល​ក្នុង</a> | <a href="#register">ចុះ​ឈ្មោះ</a></div>
              </div>
            </header>

            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            <div class="menu">
              <div class="innner region">
              <div class="topnav" id="myTopnav">
                <a href="/" class="active">Home</a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
                <span dangerouslySetInnerHTML={{__html: `
                    <a href="javascript:void(0);" class="icon" onclick='myFunction()'>
                      <i class="fa fa-bars"></i>
                    </a>
                `}}/>
              </div>
              </div>
            </div>
            <script dangerouslySetInnerHTML={{__html: `
              function myFunction() {
                var x = document.getElementById("myTopnav");
                if (x.className === "topnav") {
                x.className += " responsive";
                } else {
                x.className = "topnav";
                }
              }
            `}}/>

            <div class="main region">
                <div class="content">
                <div class="Post">
                    <div class="title">{props.config.post.title}</div>
                    <div class="date">
                        {(new Date(props.config.post.postdate)).toLocaleDateString('it-IT')}
                    </div>
                    <div class="category">ជំពូកៈ {(props.config.post.categories).toString()}</div>
                    
                <div class="video">
                    <div class="screen"></div>
                    <div class="playlist"></div>
                </div>

                <script dangerouslySetInnerHTML={{__html: `
                    const videos = JSON.parse('${ props.config.post.video }')
                    videos.reverse()
                    
                    let clicked = 0
                    
                    for(let index in videos){
                        let ending = ''
                        if(index == videos.length-1){
                            ending = videos[index].status
                        }

                        let title = videos[index].title
                        
                        let html = '<div id="part'+index+'" class="part" onClick="setScreen(videos['+index+'],'+index+',true)">${ props.config.post.title } ភាគ​ '+(++index)+' '+ending+'</div>'
                        $('.playlist').append(html)
                    }

                    setScreen(videos[0],0,false)
                    `}}/>

                    <div class="text-content" dangerouslySetInnerHTML={{__html: `
                        ${props.config.post.content}
                    `}}/>
                </div>
                </div>
                <div class="sidebar">Sidebar</div>
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