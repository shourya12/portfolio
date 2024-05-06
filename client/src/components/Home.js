import React from "react";
import "./Home.css";
import Button from "react-bootstrap/Button";

const Home = () => {
  return (
    <div>
      <div className="container home_container">
        <div className="home_innerdiv">
          <div className="left_div">
            <h2>
              Hi, I'm
              <span style={{ color: "#6c63ff" }}> Shourya Srivastava </span>
              from India
            </h2>
            <p style={{ color: "#666", letterSpacing: ".5px", marginTop: 2 }}>
              Welcome to my website! I am a passionate software engineer with a
              strong interest in technology and problem-solving. I love creating
              web applications and exploring new technologies.I have worked on
              various projects, collaborating with talented teams to deliver
              high-quality software solutions.Besides coding, I enjoy staying up
              to date with the latest industry trends and continuously learning
              new skills. I am always eager to take on new challenges and expand
              my knowledge. Feel free to explore my website and check out my
              projects. If you have any questions or would like to collaborate,
              don't hesitate to reach out to me. Let's build something amazing
              together!
            </p>
          </div>
          <div className="right_div">
            <img src="IMG_2208.JPG" alt="" style={{ borderRadius: "20%" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
