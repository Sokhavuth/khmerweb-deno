// views/admin/post.jsx

/** @jsx h */
import { h, renderSSR } from "../../deps.ts"
import Base from '../base.jsx'
  
function PostJsx(props){

  return(
        <section class="Post">
            <link rel="stylesheet" href="/styles/admin/post.css" />
            <script src="/scripts/ckeditor/ckeditor.js"></script>
            <script src="/scripts/addCategory.js"></script>
            <script src="/scripts/video.js"></script>

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

            <div class="main region">
              <div class="sidebar">
                <div class="inner">
                  <a href="/admin/post"><img src="/images/movie.png" /></a>
                  <a class="title" href="/admin/post">ការផ្សាយ</a>

                  <a href="/admin/book"><img src="/images/books.png" /></a>
                  <a class="title" href="/admin/book">សៀវភៅ</a>

                  <a href="/admin/category"><img src="/images/category.png" /></a>
                  <a class="title" href="/admin/category">ជំពូក</a>

                  <a href="/admin/upload"><img src="/images/upload.png" /></a>
                  <a class="title" href="/admin/upload">Upload</a>

                  <a href="/admin/user"><img src="/images/users.png" /></a>
                  <a class="title" href="/admin/user">អ្នក​ប្រើប្រាស់</a>

                  <a href="/admin/setting"><img src="/images/setting.png" /></a>
                  <a class="title" href="/admin/setting">Setting</a>
                </div>
              </div>
              <div class="content" dangerouslySetInnerHTML={{__html: `
                <form action="/admin/post" name="pform" onSubmit="submitform(event)" method="post">
                  <input type="text" name="title" required placeholder="ចំណងជើង" />
                  <textarea name="content" id="editor"></textarea>
                  <input type="text" name='categories' required placeholder="ជំពូកផ្សេង​ៗ" />
                  <div class="wrapper"> 
                  <select id="category" onchange="getCategory()">
                    <option>ជ្រើសរើស​ជំពូក</option>
                    <option>News</option>
                    <option>Movie</option>
                    <option>Entertainment</option>
                    <option>Sport</option>
                  </select>
                  <input type="text" name="thumb" required placeholder="តំណរ​ភ្ជាប់​រូប​តំណាង" />
                  <input type="datetime-local" name="datetime" required />
                  <input type="submit" value="បញ្ជូន" />
                  <input type="hidden" name="video" value="" />
                  </div>
                </form>
                `}}>
                <div class="wrapper" >
                  <select name="type">
                    <option>YouTube</option>
                    <option>YouTubePL</option>
                    <option>Facebook</option>
                    <option>OK</option>
                  </select>
                  <input type="text" name="videoid" required placeholder="អត្តសញ្ញាណ​វីដេអូ" />
                  <select name="status">
                    <option>ចប់</option>
                    <option>នៅ​មាន​ត</option>
                  </select>
                  <div dangerouslySetInnerHTML={{__html: `
                     <input onclick='genJson()' type="submit" value="បញ្ចូល​វីដេអូ" />
                  `}} />
                </div>
                <div class='viddata'>
                  <div></div>
                </div>
                
                <script src="/scripts/ckeditor/config.js"></script>
              </div>
              
            </div>

        </section>
  )
}

function Post(config){
  config.page = PostJsx
  const str = renderSSR(<Base config={config} />)
  return `<!DOCTYPE html>${str}`
}

export default Post