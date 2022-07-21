// views/admin/post.jsx
  
function postJsx(config){
  const  str = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>${config.siteTitle} | ${config.pageTitle}</title>
        <link href="/images/siteLogo.png" rel="icon" />
        <link href="/styles/base.css" rel="stylesheet" />
        <link href="/fonts/setup.css" rel="stylesheet" />
        <script src="/scripts/jquery.js"></script>
        <link rel="stylesheet" href="/styles/admin/post.css" />
        <script src="/scripts/ckeditor/ckeditor.js"></script>
        <script src="/scripts/addCategory.js"></script>
        <script src="/scripts/video.js"></script>
      </head>
      <body>
        <section class="Post">
            <div class="header">
                <div class="inner region">
                    <div class="logo">${config.pageTitle}</div>
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
              <div class="content">
                <form action="/admin/post" method="post">
                  <input type="text" name="title" required placeholder="ចំណងជើង" />
                  <textarea name="content" id="editor"></textarea>
                  <input type="text" name='categories' required placeholder="ជំពូកផ្សេង​ៗ" />
                  <div class="wrapper">
                    <select onChange="getCategory()" id="category">
                      <option>Select categories</option>
                      <option>News</option>
                      <option>Movie</option>
                      <option>Entertainment</option>
                      <option>Sport</option>
                    </select>
                    <input type="text" name="thumb" required placeholder="តំណរ​ភ្ជាប់​រូប​តំណាង" />
                    <input type="datetime-local" name="datetime" required />
                    <input type="submit" value="បញ្ជូន" />
                    <input type="hidden" name="video" />
                  </div>
                </form>
                <div class="wrapper">
                  <select name="type">
                    <option>YouTube</option>
                    <option>YouTubePL</option>
                    <option>Facebook</option>
                    <option>OK</option>
                  </select>
                  <input type="text" name="videoid" required placeholder="អត្តសញ្ញាណ​វីដេអូ" />
                  <select name="status">
                    <option>End</option>
                    <option>Continue</option>
                  </select>
                  <input type="submit" value="បញ្ចូល​វីដេអូ" />
                </div>

              </div>
              <script src="/scripts/ckeditor/config.js"></script>
            </div>

        </section>
      </body>
    </html>
    `
    return str
}

function Post(config){
  const html = postJsx(config)
  return html
}

export default Post