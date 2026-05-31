import React from "react";

import Student from "../assets/Student.jpeg";
import "./Home.css";
import "./contact.css";

function Home(){
    return(
        <div>

       
       <ul style={{
           width: "100%",
    height: "70px",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    listStyle: "none",
    backgroundColor: "#0f172a",
    color: "white",
    margin: "0",
    padding: "0",
    fontSize: "20px"}}>
        <li><a>About</a></li>
        <li><a>Skills</a></li>
        <li><a>Project</a></li>
        <li><a>Contact</a></li>
        <li><a>Experience</a></li>
       </ul>

    <div style={{display:"flex",
        justifyContent:"center"
    }}>
           <img 
       src={Student}
       alt="profile"
       style={{
        width:"300px",
        height:"300px",
        objectFit:"cover",
        borderRadius:"50%",
        marginTop:"30px"
       }} />
    </div>
      

       <h1 style={{display:"flex" ,justifyContent:"center"}}>Shubhansh Dubey</h1><br/>

       <section id="about" className="about-section">
        <h1>About Me</h1>
        <div className="about-content">
          <p>
            Hello! I'm <span>Shubhansh Dubey</span>, a passionate Software Developer
            specializing in MERN Stack Web Development and Android Application Development.
        </p>

        <p>
            I build responsive web applications using React.js, Node.js, Express.js,
            and MongoDB while also creating Android applications with Java and Android Studio.
        </p>

        <p>
            I enjoy solving real-world problems, learning new technologies,
            and developing projects that improve my technical skills and practical experience.
        </p>

        <p>
            My goal is to become a versatile developer capable of building impactful
            web and mobile applications that make a difference.
        </p>

        </div>
        <div className="about-highlights">

            <div className="highlight-card"> 💻 MERN Stack Developer </div> 
            <div className="highlight-card"> 📱 Android Developer </div> 
            <div className="highlight-card"> ☕ Java Programmer </div> 
            <div className="highlight-card"> 🚀 Continuous Learner </div>
            
        </div>

       </section>

       <section id="skills" className="skills-section">
            <h1>Skills</h1>
            <div className="skills-container">
                <div className="skills-card">Html</div>
                <div className="skills-card">Css</div>
                <div className="skills-card">JavaScript</div>
                <div className="skills-card">JavaScript</div>
                <div className="skills-card">React</div>
                <div className="skills-card">Express.js</div>
                <div className="skills-card">React.js</div>
                <div className="skills-card">Node.js</div>
                <div className="skills-card">Andriod Studio</div>
                <div className="skills-card">Git And GitHub</div>
            </div>
        </section>

        <section id="project" className="project-section">
            <h1>Project</h1>
            <div className="pro-card">E-commerce-Website</div>
            <div className="pro-card">Blog-Website</div>

        </section>

        <section className="contact-section">
            <h1>Contact Page</h1>

            <p className="contact-text">
              Feel free to reach out for collaborations, 
              project discussions, or opportunities.
            </p>

            <form className="contact-form"> <input type="text" placeholder="Your Name" /> 
            
            <input type="email" placeholder="Your Email" /> <textarea rows="6" placeholder="Your Message" >
                </textarea> <button type="submit"> Send Message </button> </form>

        </section>

        <footer className="footer">

    <h3>Shubhansh Dubey</h3>

    <p>
        MERN Stack Developer | Android Developer
    </p>

    <div className="footer-links">
        <button
            href="https://github.com/your-github"
            target="_blank"
            rel="noreferrer"
        >
            GitHub
        </button>

        <button
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noreferrer"
        >
            LinkedIn
        </button>
    </div>

    <p className="copyright">
        © 2026 Shubhansh Dubey. All Rights Reserved.
    </p>

</footer>

        </div>

        
        
    );
}
export default Home;