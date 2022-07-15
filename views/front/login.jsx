// views/front/login.jsx

/** @jsx h */
import { h } from "../../deps.ts"

function Login(props){
  
  return(
    <section class="Login">
      <link rel="stylesheet" href="/styles/front/login.css" />
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
  )
}

export default Login