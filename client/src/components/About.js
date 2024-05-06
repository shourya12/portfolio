import React from "react";
import "./About.css";

const About = () => {
  return (
    <div>
      <div
        className="container mb-3 about_container"
        style={{ minHeight: "85vh" }}
      >
        <div className="container main_container d-flex justify-content-around flex-wrap">
          <div className="card_container mt-5">
            <h2>Meet Shourya Srivastava</h2>
            <div className="card_content">
              <p>
                I am a passionate individual with a keen interest in technology
                and problem-solving. Originally from India, I have pursued my
                education and built my career in the field of software
                engineering.
              </p>
            </div>
          </div>

          <div className="card_container mt-5">
            <h3>Education</h3>
            <div className="card_content">
              <div className="subgrid_container">
                <div className="subgrid_card">
                  <h4>Class 10th</h4>
                  <p>Avadh Collegiate</p>
                  <p>Year of Completion: 2015</p>
                </div>
                <div className="subgrid_card">
                  <h4>Class 12th</h4>
                  <p>Avadh Collegiate</p>
                  <p>Year of Completion: 2017</p>
                </div>
                <div className="subgrid_card">
                  <h4>B.Tech</h4>
                  <p>College Name: Dehradun Institute of Technology</p>
                  <p>Branch: Computer Science & Engineering</p>
                  <p>Year of Completion: 2021</p>
                </div>
                <div className="subgrid_card">
                  <h4>M.Tech</h4>
                  <p>College Name: Indian Institute of Technology Patna</p>
                  <p>Branch: Mathematics & Computing</p>
                  <p>Year of Completion: 2024</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card_container mt-5">
            <h3>Work Experience</h3>
            <div className="card_content">
              <p>Company: Tata Consultancy Services</p>
              <p>Duration: Aug 2021 - may 2022</p>
              <ul>
                <li>
                  Collaborated with a highly skilled team involved in the
                  development of TCS’s flagship product, "TCS Mastercraft
                  Transform Plus."
                </li>
                <li>
                  Played a key role in writing API’s to extract data from the
                  database.
                </li>
                <li>
                  Tools & technologies used: Utilized JavaScript and Node.js as
                  primary tools and technologies for the implementation of the
                  API’s.
                </li>
              </ul>
            </div>
          </div>

          <div className="card_container mt-5">
            <h3>Exams Qualified</h3>
            <div className="card_content">
              <ul>
                <li>
                  Graduate Aptitude Test in Engineering (GATE 2021) : AIR 2836{" "}
                </li>
                <li>
                  Graduate Aptitude Test in Engineering (GATE 2022) : AIR 934{" "}
                </li>
              </ul>
            </div>
          </div>

          <div className="card_container mt-5">
            <h3>Technical Skills</h3>
            <div className="card_content">
              <ul>
                <li>Programming: C,Python,Java,JavaScript</li>
                <li>Web Skills: HTML,CSS,Bootstrap,Nodejs Javascript</li>
                <li>DataBase Query Language: MySQL</li>
              </ul>
            </div>
          </div>

          <div className="card_container mt-5">
            <h3>Hobbies</h3>
            <div className="card_content">
              <ul>
                <li>
                  I have a deep passion for exploring new destinations,
                  immersing myself in diverse cultures, and discovering hidden
                  gems around the world. Traveling fuels my sense of adventure
                  and fills me with excitement.
                </li>
                <li>
                  The thrill of car rides, whether it's cruising along scenic
                  coastal roads or conquering majestic mountain passes, brings
                  me immense joy and a feeling of freedom. The open road beckons
                  me to embark on unforgettable journeys.
                </li>
                <li>
                  Spending quality time with friends is an essential part of my
                  life. Whether we're embarking on exciting adventures together,
                  taking spontaneous road trips, or simply enjoying each other's
                  company over a cup of coffee, these moments create cherished
                  memories and strengthen the bonds of friendship.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
