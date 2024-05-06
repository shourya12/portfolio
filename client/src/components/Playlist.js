import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import projectData from "./data";
import Spinner from "react-bootstrap/Spinner";

const Playlist = () => {
  const [spin,setSpin] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSpin(false);
    }, 1500);
  });
  return (
    <>
      {spin ? (
        <div className="d-flex justify-content-center align-items-center" style={{height:"90vh"}}>
          <Spinner animation="border" variant="warning" /> &nbsp;&nbsp; Loading...
        </div>
      ) : (
        <div className="container">
          <h2 className="text-center mt-2">Projects</h2>
          <div className="card_div">
            <div className="row d-flex justify-content-around align-items-center">
              {projectData.map((el, index) => {
                return (
                  <>
                    <Card
                      style={{
                        width: "23rem",
                        height: "20rem",
                        marginRight: 24,
                      }}
                      className="mt-4 mb-4"
                    >
                      <div style={{ width: "20rem",height:"20rem",marginLeft:"1rem",marginTop:"1rem"}}>
                          <img
                          
                            style={{width: "20rem",height:"13rem", objectPosition:'center',objectFit:'cover' }}
                              src={el.imgsrc}
                       /> 
                      </div>
                      
                      <Card.Body className="d-flex justify-content-center flex-column">
                        <Card.Title className="text-center">
                          {el.projectName}
                        </Card.Title>

                        <Button variant="primary">
                          <a
                            href={el.demo}
                            target="blank"
                            className="text-decoration-none text-light"
                          >
                            Live Demo
                          </a>
                        </Button>
                      </Card.Body>
                    </Card>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Playlist;
