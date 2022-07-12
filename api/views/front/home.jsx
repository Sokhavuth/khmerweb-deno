// views/front/home.jsx

/** @jsx h */
import { h } from "../../deps.ts"

function Home(props){
  return(
    <section class='Home'>
      <p>{props.config.pageTitle}</p>
    </section>
  )
}

export default Home