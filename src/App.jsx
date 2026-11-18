import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
``
import profile from "./assets/profile.png";
function Social_div(heading, description, link1, link2, link3) {
  return(
    <div className="projects_div">
      <h2>{heading}</h2>
        <hr />
        <p>{description}</p>
        <a href={link1}><i className= "fa-brands fa-x"></i></a>
       {link2 && <a href={link2}><i className="fa-brands fa-slack"></i></a>}
       {link2 && link3 && " "}
       {link3 && <a href={link3}><i className='fa-brands fa-youtube'></i></a>}

    </div>
  )
}
function Projects_div(heading, description, link1, link2, link3) {
  return(
    <div className="projects_div">
      <h2>{heading}</h2>
        <hr />
        <p>{description}</p>
        <a href={link1}><i className="fa-brands fa-itch-io"></i></a>
       {link2 && <a href={link2}><i className="fa-brands fa-github"></i></a>}
       {link2 && link3 && " "}
       {link3 && <a href={link3}><i className='fa-brands fa-youtube'></i></a>}

    </div>
  )
}
function About_div(heading, description, link1, link2, link3) {
  return(
    <div className="projects_div">
      <h2>{heading}</h2>
        <hr />
        <p>{description}</p>
        <a href={link1}><i className="fa-solid fa-user"></i></a>
       {link2 && <a href={link2}><i className="fa-brands fa-github"></i></a>}
       {link2 && link3 && " "}
       {link3 && <a href={link3}><i className='fa-brands fa-youtube'></i></a>}

    </div>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
         <img src = {profile} alt = 'profile picture' />
        <h1 className="welcome">
          {"Welcome to my website".split(" ").map((word, index) => (
            <span key={index} style={{ animationDelay: `${index * 0.4}s` }}>
              {word}&nbsp;
            </span>
          ))}
        </h1>
        <p>just a guy who loves webdev and dreams of a world without bugs! <br />contact me at damilaretega7@gmail.com</p>
        <div id="mother_div">
          {Projects_div("projects", "check out my latest projects!", "https://damilaretega7.itch.io/", "https://github.com/damilaretega7")}
          {About_div("about me", "learn more about me!", "/about")}
          {Social_div("socials", "interested in stalking me?", "https://x.com/sixty_five35", "https://hackclub.enterprise.slack.com/team/U0B92MW6XM3", "https://www.youtube.com/@Tegatheartist-g5d")}
        </div>
      </section>

    </>
  )
}

export default App
