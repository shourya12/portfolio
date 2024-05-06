import React from "react";
import './footer.css';
const Footer = () => {
  const year= new Date().getFullYear();
  return (
    <>
      <div className="footer">
        <div className="container footer_container d-flex justify-content-around flex-wrap">

          <div className="first mt-5">
            <h4>Shourya Srivastava</h4>
            <p>© {year} Shourya Srivastava All rights reserved</p>
            <p className="d-flex">
              <a href="https://www.instagram.com/shourya_srivastava07" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://www.facebook.com/shouryasrivastava934" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-facebook mx-3"></i>
              </a>
            </p>
          </div>

          <div className="second mt-5">
            <h4>Get In Touch</h4>
            <p>Shouryasrivastava7@gmail.com</p>
            <p className="d-flex">+91-9140725475
            </p>
          </div>

          <div className="third mt-5">
            <h4>My Resume</h4>
            <a href="https://drive.google.com/file/d/19EJFJVwxBVbjpLTXRIwhgc-vi0zrZcg3/view?usp=sharing">Resume</a>
            
          </div>

        </div>
      </div>
    </>
  );
};

export default Footer;
