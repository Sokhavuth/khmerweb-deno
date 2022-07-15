// views/front/home.jsx

/** @jsx h */
import { h } from "../../deps.ts"

function Home(props){
  
  return(
    <section class="Home">
      <link rel="stylesheet" href="/styles/front/home.css" />
      {props.config.pageTitle}
    </section>
  )
}

export default Home