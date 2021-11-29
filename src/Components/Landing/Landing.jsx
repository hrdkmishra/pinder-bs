import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Landing.scss";

function Landing() {
  return (
    <React.Fragment>
      <div id="fixed"></div>
      <div className="landing">
        <span>
          <h3 className="main-header">
            God has given you one face, and you make yourself another.
          </h3>
          <Button
            variant="danger"
            style={{
              position: "relative",
              left: "50%",
              transform: "translateX(-50%)",
              marginTop: "20px",
              fontWeight: "700",
            }}
          >
            <Link to="/register">Create Account with MES ID</Link>
          </Button>
        </span>
      </div>
    </React.Fragment>
  );
}

export default Landing;
