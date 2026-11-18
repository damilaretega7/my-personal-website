import chibi from "./assets/chibi.png";

function About() {
  return (
    
    <div className="about_div">
      
    <div className="image_div">
        <a href="/"><img src={chibi} alt="Profile" /></a>
      </div>
      <div className="text_div">
        <h1>About Me</h1>
        <p>
          Hello! My name is Oghentega "Tega" Damilare, I am passionate about software engineering and game development. I always wanted to create projects to share with the world. oh and I love making bad puns too!
        </p>
      </div>
    </div>
  );
}

export default About;