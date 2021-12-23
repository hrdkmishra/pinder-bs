import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../../Firebase/fire";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Create.scss";

function Create() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  function filterEmail(em) {
    if (em === "") {
      alert("Please enter an email");
    } else {
      try {
        let idx = em.lastIndexOf("@");
        if (idx > -1 && em.slice(idx + 1) === "student.mes.ac.in") {
          console.log("Auth Clear");
          return true;
        } else {
          return false;
        }
      } catch {
        console.log("Exceptions bruhh");
      }
    }
  }
  const createAccount = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, pass);
      console.log(user);
      console.log(user.user.emailVerified);
      sendEmailVerification(auth.currentUser).then(() => {
        alert("Email Has been send to your mail..Please Verify");
        // ...
      });
    } catch (error) {
      console.log(error.message);
      console.log(auth.currentUser);
      if (error.name === "FirebaseError") {
        alert("User Exists");
      }
    }
  };
  return (
    <React.Fragment>
      <h3 className="create-header">Create a Pinder account using MES ID</h3>
      <Form
        className="create-form"
        onSubmit={function (e) {
          e.preventDefault();
        }}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Please enter your MES mail"
            onChange={function (event) {
              setEmail(event.target.value);
            }}
            value={email}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Please enter your MES password"
            onChange={function (event) {
              setPass(event.target.value);
            }}
            value={pass}
          />
        </Form.Group>
        <Button
          variant="danger"
          type="submit"
          onClick={function () {
            if (!filterEmail(email)) {
              alert("Please use MES id");
            } else {
              createAccount();
            }
          }}
        >
          Submit
        </Button>
        <Button
          style={{ marginLeft: "10px" }}
          variant="secondary"
          type="submit"
          onClick={function () {
            setEmail("");
            setPass("");
          }}
        >
          Clear Form
        </Button>
      </Form>
    </React.Fragment>
  );
}

export default Create;
